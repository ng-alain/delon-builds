import { NgZone } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, distinctUntilChanged, map, take } from 'rxjs';
import { NzFormStatusService } from 'ng-zorro-antd/core/form';
import { SF_SEQ } from '../const';
import { isBlank } from '../utils';
export class FormProperty {
    constructor(injector, schemaValidatorFactory, schema, ui, formData, parent, path, _options) {
        this.injector = injector;
        this._options = _options;
        this._errors = null;
        this._valueChanges = new BehaviorSubject({ path: null, pathValue: null, value: null });
        this._errorsChanges = new BehaviorSubject(null);
        this._visible = true;
        this._visibilityChanges = new BehaviorSubject(true);
        this._objErrors = {};
        this._value = null;
        this.schema = schema;
        this.ui = ui;
        this.schemaValidator = schemaValidatorFactory.createValidatorFn(schema, {
            ingoreKeywords: this.ui.ingoreKeywords,
            debug: ui.debug
        });
        this.formData = formData || schema.default;
        this._parent = parent;
        if (parent) {
            this._root = parent.root;
        }
        else {
            this._root = this;
        }
        this.path = path;
    }
    get valueChanges() {
        return this._valueChanges;
    }
    get errorsChanges() {
        return this._errorsChanges;
    }
    get type() {
        return this.schema.type;
    }
    get parent() {
        return this._parent;
    }
    get root() {
        return this._root;
    }
    get value() {
        return this._value;
    }
    get errors() {
        return this._errors;
    }
    get visible() {
        return this._visible;
    }
    get valid() {
        return this._errors === null || this._errors.length === 0;
    }
    get options() {
        return this._options;
    }
    cd(onlySelf = false) {
        this.widget?.detectChanges(onlySelf);
    }
    /**
     * 更新值且校验数据
     */
    updateValueAndValidity(options) {
        options = {
            onlySelf: false,
            emitValidator: true,
            emitValueEvent: true,
            updatePath: '',
            updateValue: null,
            ...options
        };
        this._updateValue();
        if (options.emitValueEvent) {
            options.updatePath = options.updatePath || this.path;
            options.updateValue = options.updateValue == null ? this.value : options.updateValue;
            this.valueChanges.next({ value: this.value, path: options.updatePath, pathValue: options.updateValue });
        }
        // `emitValidator` 每一次数据变更已经包含完整错误链路，后续父节点数据变更无须再触发校验
        if (options.emitValidator && this.ui.liveValidate === true) {
            this._runValidation();
        }
        if (this.parent && !options.onlySelf) {
            this.parent.updateValueAndValidity({ ...options, emitValidator: false });
        }
    }
    /** 根据路径搜索表单属性 */
    searchProperty(path) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        let prop = this;
        let base = null;
        let result = null;
        if (path[0] === SF_SEQ) {
            base = this.findRoot();
            result = base.getProperty(path.substring(1));
        }
        else {
            while (result === null && prop.parent !== null) {
                prop = base = prop.parent;
                result = base.getProperty(path);
            }
        }
        return result;
    }
    /** 查找根表单属性 */
    findRoot() {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        let property = this;
        while (property.parent !== null) {
            property = property.parent;
        }
        return property;
    }
    // #region process errors
    isEmptyData(value) {
        if (isBlank(value))
            return true;
        switch (this.type) {
            case 'string':
                return `${value}`.length === 0;
        }
        return false;
    }
    /**
     * @internal
     */
    _runValidation() {
        let errors;
        // The definition of some rules:
        // 1. Should not ajv validator when is empty data and required fields
        // 2. Should not ajv validator when is empty data
        const isEmpty = this.isEmptyData(this._value);
        if (isEmpty && this.ui._required) {
            errors = [{ keyword: 'required' }];
        }
        else if (isEmpty) {
            errors = [];
        }
        else {
            errors = this.schemaValidator(this._value) || [];
        }
        const customValidator = this.ui.validator;
        if (typeof customValidator === 'function') {
            const customErrors = customValidator(this.value, this, this.findRoot());
            if (customErrors instanceof Observable) {
                customErrors.subscribe(res => {
                    this.setCustomErrors(errors, res);
                    this.cd(false);
                });
                return;
            }
            this.setCustomErrors(errors, customErrors);
            return;
        }
        this._errors = errors;
        this.setErrors(this._errors);
    }
    setCustomErrors(errors, list) {
        const hasCustomError = Array.isArray(list) && list.length > 0;
        if (hasCustomError) {
            list.forEach(err => {
                if (!err.message) {
                    throw new Error(`The custom validator must contain a 'message' attribute to viewed error text`);
                }
                err.keyword = null;
            });
        }
        this._errors = hasCustomError ? errors.concat(...list) : errors;
        this.setErrors(this._errors);
    }
    /**
     * Set the current error message
     *
     * 设置当前错误消息
     *
     * @param emitFormat 若提供的消息带有 `{xx}` 会自动根据参数进行转化，包含自定义函数
     *
     * @example
     *
     * this.sf.getProperty('/name')?.setErrors({ keyword: 'required' });
     * this.sf.getProperty('/name')?.setErrors({ message: 'Please input your username!' });
     * this.sf.getProperty('/name')?.setErrors(); // Clean error
     */
    setErrors(errors = [], emitFormat = true) {
        let arrErrs = Array.isArray(errors) ? errors : [errors];
        if (emitFormat && arrErrs && !this.ui.onlyVisual) {
            const l = (this.widget && this.widget.l.error) || {};
            arrErrs = arrErrs.map((err) => {
                let message = err.keyword == null && err.message
                    ? err.message
                    : (this.ui.errors || {})[err.keyword] || this._options.errors[err.keyword] || l[err.keyword] || ``;
                if (message && typeof message === 'function') {
                    message = message(err);
                }
                if (message) {
                    if (~message.indexOf('{') && err.params) {
                        message = message.replace(/{([\.a-zA-Z0-9]+)}/g, (_v, key) => err.params[key] || '');
                    }
                    err.message = message;
                }
                return err;
            });
        }
        this._errors = arrErrs;
        this._errorsChanges.next(arrErrs);
        // Should send errors to parent field
        if (this._parent) {
            this._parent.setParentAndPlatErrors(arrErrs, this.path);
        }
    }
    setParentAndPlatErrors(errors, path) {
        this._objErrors[path] = errors;
        const platErrors = [];
        Object.keys(this._objErrors).forEach(p => {
            const property = this.searchProperty(p);
            if (property && !property.visible)
                return;
            platErrors.push(...this._objErrors[p]);
        });
        this.setErrors(platErrors, false);
    }
    // #endregion
    // #region condition
    /**
     * Set the hide or display of widget
     * 设置小部件的隐藏或显示
     */
    setVisible(visible) {
        this._visible = visible;
        this._visibilityChanges.next(visible);
        // 渲染时需要重新触发 reset
        if (visible) {
            this.injector
                .get(NgZone)
                .onStable.pipe(take(1))
                .subscribe(() => {
                this.resetValue(this.value, true);
            });
        }
        return this;
    }
    _bindVisibility() {
        const visibleIf = this.ui.visibleIf;
        if (typeof visibleIf === 'object' && Object.keys(visibleIf).length === 0) {
            this.setVisible(false);
        }
        else if (visibleIf != null) {
            const propertiesBinding = [];
            for (const dependencyPath in visibleIf) {
                if (visibleIf.hasOwnProperty(dependencyPath)) {
                    const property = this.searchProperty(dependencyPath);
                    if (property) {
                        const valueCheck = property.valueChanges.pipe(map(res => {
                            const vi = visibleIf[dependencyPath];
                            if (typeof vi === 'function') {
                                const viFnRes = vi(res.value, property);
                                // 同步更新 required
                                if (typeof viFnRes === 'object') {
                                    const fixViFnRes = { show: false, required: false, ...viFnRes };
                                    const parentRequired = this.parent?.schema.required;
                                    if (parentRequired && this.propertyId) {
                                        const idx = parentRequired.findIndex(w => w === this.propertyId);
                                        if (fixViFnRes.required) {
                                            if (idx === -1)
                                                parentRequired.push(this.propertyId);
                                        }
                                        else {
                                            if (idx !== -1)
                                                parentRequired.splice(idx, 1);
                                        }
                                        this.ui._required = fixViFnRes.required;
                                    }
                                    return fixViFnRes.show;
                                }
                                return viFnRes;
                            }
                            if (vi.indexOf('$ANY$') !== -1) {
                                return res.value && res.value.length > 0;
                            }
                            else {
                                return vi.indexOf(res.value) !== -1;
                            }
                        }));
                        const visibilityCheck = property._visibilityChanges;
                        const and = combineLatest([valueCheck, visibilityCheck]).pipe(map(results => results[0] && results[1]));
                        propertiesBinding.push(and);
                    }
                    else {
                        if (typeof ngDevMode === 'undefined' || ngDevMode) {
                            console.warn(`Can't find property ${dependencyPath} for visibility check of ${this.path}`);
                        }
                    }
                }
            }
            combineLatest(propertiesBinding)
                .pipe(map(values => (this.ui.visibleIfLogical === 'and' ? values.every(v => v) : values.some(v => v))), distinctUntilChanged())
                .subscribe(visible => this.setVisible(visible));
        }
    }
    // #endregion
    updateFeedback(status = '') {
        this.ui.feedback = status;
        this.widget?.injector.get(NzFormStatusService).formStatusChanges.next({ status, hasFeedback: !!status });
        this.cd(true);
    }
}
export class PropertyGroup extends FormProperty {
    constructor() {
        super(...arguments);
        this.properties = null;
    }
    getProperty(path) {
        const subPathIdx = path.indexOf(SF_SEQ);
        const propertyId = subPathIdx !== -1 ? path.substring(0, subPathIdx) : path;
        let property = this.properties[propertyId];
        if (property !== null && subPathIdx !== -1 && property instanceof PropertyGroup) {
            const subPath = path.substring(subPathIdx + 1);
            property = property.getProperty(subPath);
        }
        return property;
    }
    forEachChild(fn) {
        for (const propertyId in this.properties) {
            if (this.properties.hasOwnProperty(propertyId)) {
                const property = this.properties[propertyId];
                fn(property, propertyId);
            }
        }
    }
    forEachChildRecursive(fn) {
        this.forEachChild(child => {
            fn(child);
            if (child instanceof PropertyGroup) {
                child.forEachChildRecursive(fn);
            }
        });
    }
    _bindVisibility() {
        super._bindVisibility();
        this._bindVisibilityRecursive();
    }
    _bindVisibilityRecursive() {
        this.forEachChildRecursive(property => {
            property._bindVisibility();
        });
    }
    isRoot() {
        return this === this.root;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5wcm9wZXJ0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm0vc3JjL21vZGVsL2Zvcm0ucHJvcGVydHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFZLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUduRyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUk5RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBS2xDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFJbkMsTUFBTSxPQUFnQixZQUFZO0lBa0JoQyxZQUNVLFFBQWtCLEVBQzFCLHNCQUE4QyxFQUM5QyxNQUFnQixFQUNoQixFQUErQixFQUMvQixRQUFpQyxFQUNqQyxNQUE0QixFQUM1QixJQUFZLEVBQ0osUUFBdUI7UUFQdkIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQU9sQixhQUFRLEdBQVIsUUFBUSxDQUFlO1FBekJ6QixZQUFPLEdBQXVCLElBQUksQ0FBQztRQUNuQyxrQkFBYSxHQUFHLElBQUksZUFBZSxDQUFvQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNyRyxtQkFBYyxHQUFHLElBQUksZUFBZSxDQUFxQixJQUFJLENBQUMsQ0FBQztRQUMvRCxhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLHVCQUFrQixHQUFHLElBQUksZUFBZSxDQUFVLElBQUksQ0FBQyxDQUFDO1FBR2hFLGVBQVUsR0FBbUMsRUFBRSxDQUFDO1FBS2hELFdBQU0sR0FBWSxJQUFJLENBQUM7UUFlckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsZUFBZSxHQUFHLHNCQUFzQixDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBRTtZQUN0RSxjQUFjLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUEwQjtZQUNsRCxLQUFLLEVBQUcsRUFBc0IsQ0FBQyxLQUFNO1NBQ3RDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDM0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDdEIsSUFBSSxNQUFNLEVBQUUsQ0FBQztZQUNYLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUMzQixDQUFDO2FBQU0sQ0FBQztZQUNOLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBaUIsQ0FBQztRQUNqQyxDQUFDO1FBQ0QsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUVELElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDO0lBRUQsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7SUFFRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSyxDQUFDO0lBQzNCLENBQUM7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUVELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUVELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsT0FBTyxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBMEJELEVBQUUsQ0FBQyxXQUFvQixLQUFLO1FBQzFCLElBQUksQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRDs7T0FFRztJQUNILHNCQUFzQixDQUFDLE9BQWtDO1FBQ3ZELE9BQU8sR0FBRztZQUNSLFFBQVEsRUFBRSxLQUFLO1lBQ2YsYUFBYSxFQUFFLElBQUk7WUFDbkIsY0FBYyxFQUFFLElBQUk7WUFDcEIsVUFBVSxFQUFFLEVBQUU7WUFDZCxXQUFXLEVBQUUsSUFBSTtZQUNqQixHQUFHLE9BQU87U0FDWCxDQUFDO1FBQ0YsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRXBCLElBQUksT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQzNCLE9BQU8sQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3JELE9BQU8sQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7WUFDckYsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDMUcsQ0FBQztRQUVELHFEQUFxRDtRQUNyRCxJQUFJLE9BQU8sQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDM0QsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLENBQUM7UUFFRCxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDckMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLEdBQUcsT0FBTyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQzNFLENBQUM7SUFDSCxDQUFDO0lBRUQsaUJBQWlCO0lBQ2pCLGNBQWMsQ0FBQyxJQUFZO1FBQ3pCLDREQUE0RDtRQUM1RCxJQUFJLElBQUksR0FBaUIsSUFBSSxDQUFDO1FBQzlCLElBQUksSUFBSSxHQUF5QixJQUFJLENBQUM7UUFFdEMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLE1BQU0sRUFBRSxDQUFDO1lBQ3ZCLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDdkIsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9DLENBQUM7YUFBTSxDQUFDO1lBQ04sT0FBTyxNQUFNLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxFQUFFLENBQUM7Z0JBQy9DLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztnQkFDMUIsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEMsQ0FBQztRQUNILENBQUM7UUFDRCxPQUFPLE1BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQsY0FBYztJQUNkLFFBQVE7UUFDTiw0REFBNEQ7UUFDNUQsSUFBSSxRQUFRLEdBQWlCLElBQUksQ0FBQztRQUNsQyxPQUFPLFFBQVEsQ0FBQyxNQUFNLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDaEMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFDN0IsQ0FBQztRQUNELE9BQU8sUUFBeUIsQ0FBQztJQUNuQyxDQUFDO0lBRUQseUJBQXlCO0lBRWpCLFdBQVcsQ0FBQyxLQUE4QjtRQUNoRCxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFBRSxPQUFPLElBQUksQ0FBQztRQUNoQyxRQUFRLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNsQixLQUFLLFFBQVE7Z0JBQ1gsT0FBTyxHQUFHLEtBQUssRUFBRSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7UUFDbkMsQ0FBQztRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVEOztPQUVHO0lBQ0gsY0FBYztRQUNaLElBQUksTUFBbUIsQ0FBQztRQUN4QixnQ0FBZ0M7UUFDaEMscUVBQXFFO1FBQ3JFLGlEQUFpRDtRQUNqRCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QyxJQUFJLE9BQU8sSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2pDLE1BQU0sR0FBRyxDQUFDLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFDckMsQ0FBQzthQUFNLElBQUksT0FBTyxFQUFFLENBQUM7WUFDbkIsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNkLENBQUM7YUFBTSxDQUFDO1lBQ04sTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNuRCxDQUFDO1FBQ0QsTUFBTSxlQUFlLEdBQUksSUFBSSxDQUFDLEVBQXdCLENBQUMsU0FBUyxDQUFDO1FBQ2pFLElBQUksT0FBTyxlQUFlLEtBQUssVUFBVSxFQUFFLENBQUM7WUFDMUMsTUFBTSxZQUFZLEdBQUcsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQ3hFLElBQUksWUFBWSxZQUFZLFVBQVUsRUFBRSxDQUFDO2dCQUN2QyxZQUFZLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUMzQixJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztvQkFDbEMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDakIsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsT0FBTztZQUNULENBQUM7WUFDRCxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUMsQ0FBQztZQUMzQyxPQUFPO1FBQ1QsQ0FBQztRQUVELElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFTyxlQUFlLENBQUMsTUFBbUIsRUFBRSxJQUFpQjtRQUM1RCxNQUFNLGNBQWMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQzlELElBQUksY0FBYyxFQUFFLENBQUM7WUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDakIsTUFBTSxJQUFJLEtBQUssQ0FBQyw4RUFBOEUsQ0FBQyxDQUFDO2dCQUNsRyxDQUFDO2dCQUNELEdBQUcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNoRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQ7Ozs7Ozs7Ozs7OztPQVlHO0lBQ0gsU0FBUyxDQUFDLFNBQWtDLEVBQUUsRUFBRSxhQUFzQixJQUFJO1FBQ3hFLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUV4RCxJQUFJLFVBQVUsSUFBSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2pELE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDckQsT0FBTyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFjLEVBQUUsRUFBRTtnQkFDdkMsSUFBSSxPQUFPLEdBQ1QsR0FBRyxDQUFDLE9BQU8sSUFBSSxJQUFJLElBQUksR0FBRyxDQUFDLE9BQU87b0JBQ2hDLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTztvQkFDYixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBUSxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFPLENBQUMsR0FBRyxDQUFDLE9BQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBUSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUUzRyxJQUFJLE9BQU8sSUFBSSxPQUFPLE9BQU8sS0FBSyxVQUFVLEVBQUUsQ0FBQztvQkFDN0MsT0FBTyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDekIsQ0FBQztnQkFFRCxJQUFJLE9BQU8sRUFBRSxDQUFDO29CQUNaLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQzt3QkFDeEMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxFQUFVLEVBQUUsR0FBVyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO29CQUN4RyxDQUFDO29CQUNELEdBQUcsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO2dCQUN4QixDQUFDO2dCQUNELE9BQU8sR0FBRyxDQUFDO1lBQ2IsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEMscUNBQXFDO1FBQ3JDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsc0JBQXNCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxRCxDQUFDO0lBQ0gsQ0FBQztJQUVELHNCQUFzQixDQUFDLE1BQW1CLEVBQUUsSUFBWTtRQUN0RCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQztRQUMvQixNQUFNLFVBQVUsR0FBZ0IsRUFBRSxDQUFDO1FBQ25DLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUN2QyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLElBQUksUUFBUSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU87Z0JBQUUsT0FBTztZQUMxQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELGFBQWE7SUFFYixvQkFBb0I7SUFFcEI7OztPQUdHO0lBQ0gsVUFBVSxDQUFDLE9BQWdCO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdEMsa0JBQWtCO1FBQ2xCLElBQUksT0FBTyxFQUFFLENBQUM7WUFDWixJQUFJLENBQUMsUUFBUTtpQkFDVixHQUFHLENBQUMsTUFBTSxDQUFDO2lCQUNYLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUN0QixTQUFTLENBQUMsR0FBRyxFQUFFO2dCQUNkLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNwQyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxlQUFlO1FBQ2IsTUFBTSxTQUFTLEdBQUksSUFBSSxDQUFDLEVBQXFCLENBQUMsU0FBUyxDQUFDO1FBQ3hELElBQUksT0FBTyxTQUFTLEtBQUssUUFBUSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQ3pFLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekIsQ0FBQzthQUFNLElBQUksU0FBUyxJQUFJLElBQUksRUFBRSxDQUFDO1lBQzdCLE1BQU0saUJBQWlCLEdBQStCLEVBQUUsQ0FBQztZQUN6RCxLQUFLLE1BQU0sY0FBYyxJQUFJLFNBQVMsRUFBRSxDQUFDO2dCQUN2QyxJQUFJLFNBQVMsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQztvQkFDN0MsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQztvQkFDckQsSUFBSSxRQUFRLEVBQUUsQ0FBQzt3QkFDYixNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FDM0MsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFOzRCQUNSLE1BQU0sRUFBRSxHQUFHLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQzs0QkFDckMsSUFBSSxPQUFPLEVBQUUsS0FBSyxVQUFVLEVBQUUsQ0FBQztnQ0FDN0IsTUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0NBQ3hDLGdCQUFnQjtnQ0FDaEIsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLEVBQUUsQ0FBQztvQ0FDaEMsTUFBTSxVQUFVLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsR0FBRyxPQUFPLEVBQXVCLENBQUM7b0NBQ3JGLE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQztvQ0FDcEQsSUFBSSxjQUFjLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO3dDQUN0QyxNQUFNLEdBQUcsR0FBRyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzt3Q0FDakUsSUFBSSxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7NENBQ3hCLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQztnREFBRSxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzt3Q0FDdkQsQ0FBQzs2Q0FBTSxDQUFDOzRDQUNOLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQztnREFBRSxjQUFjLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQzt3Q0FDaEQsQ0FBQzt3Q0FDRCxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDO29DQUMxQyxDQUFDO29DQUNELE9BQU8sVUFBVSxDQUFDLElBQUksQ0FBQztnQ0FDekIsQ0FBQztnQ0FDRCxPQUFPLE9BQU8sQ0FBQzs0QkFDakIsQ0FBQzs0QkFDRCxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQ0FDL0IsT0FBTyxHQUFHLENBQUMsS0FBSyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzs0QkFDM0MsQ0FBQztpQ0FBTSxDQUFDO2dDQUNOLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7NEJBQ3RDLENBQUM7d0JBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQzt3QkFDRixNQUFNLGVBQWUsR0FBRyxRQUFRLENBQUMsa0JBQWtCLENBQUM7d0JBQ3BELE1BQU0sR0FBRyxHQUFHLGFBQWEsQ0FBQyxDQUFDLFVBQVUsRUFBRSxlQUFlLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDeEcsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUM5QixDQUFDO3lCQUFNLENBQUM7d0JBQ04sSUFBSSxPQUFPLFNBQVMsS0FBSyxXQUFXLElBQUksU0FBUyxFQUFFLENBQUM7NEJBQ2xELE9BQU8sQ0FBQyxJQUFJLENBQUMsdUJBQXVCLGNBQWMsNEJBQTRCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO3dCQUM3RixDQUFDO29CQUNILENBQUM7Z0JBQ0gsQ0FBQztZQUNILENBQUM7WUFFRCxhQUFhLENBQUMsaUJBQWlCLENBQUM7aUJBQzdCLElBQUksQ0FDSCxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ2hHLG9CQUFvQixFQUFFLENBQ3ZCO2lCQUNBLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNwRCxDQUFDO0lBQ0gsQ0FBQztJQUVELGFBQWE7SUFFYixjQUFjLENBQUMsU0FBa0MsRUFBRTtRQUNqRCxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7UUFDMUIsSUFBSSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUN6RyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hCLENBQUM7Q0FDRjtBQUVELE1BQU0sT0FBZ0IsYUFBYyxTQUFRLFlBQVk7SUFBeEQ7O1FBQ0UsZUFBVSxHQUE0RCxJQUFJLENBQUM7SUE4QzdFLENBQUM7SUE1Q0MsV0FBVyxDQUFDLElBQVk7UUFDdEIsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QyxNQUFNLFVBQVUsR0FBRyxVQUFVLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFFNUUsSUFBSSxRQUFRLEdBQUksSUFBSSxDQUFDLFVBQThDLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDaEYsSUFBSSxRQUFRLEtBQUssSUFBSSxJQUFJLFVBQVUsS0FBSyxDQUFDLENBQUMsSUFBSSxRQUFRLFlBQVksYUFBYSxFQUFFLENBQUM7WUFDaEYsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDL0MsUUFBUSxHQUFJLFFBQTBCLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBRSxDQUFDO1FBQy9ELENBQUM7UUFDRCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQsWUFBWSxDQUFDLEVBQXFEO1FBQ2hFLEtBQUssTUFBTSxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3pDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztnQkFDL0MsTUFBTSxRQUFRLEdBQUksSUFBSSxDQUFDLFVBQThDLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ2xGLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDM0IsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQscUJBQXFCLENBQUMsRUFBd0M7UUFDNUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN4QixFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDVixJQUFJLEtBQUssWUFBWSxhQUFhLEVBQUUsQ0FBQztnQkFDbEMsS0FBdUIsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNyRCxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsZUFBZTtRQUNiLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRU8sd0JBQXdCO1FBQzlCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNwQyxRQUFRLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsTUFBTTtRQUNKLE9BQU8sSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDNUIsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0b3IsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwLCB0YWtlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEFsYWluU0ZDb25maWcgfSBmcm9tICdAZGVsb24vdXRpbC9jb25maWcnO1xuaW1wb3J0IHsgTnpGb3JtU3RhdHVzU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9mb3JtJztcbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB0eXBlIHsgTnpGb3JtQ29udHJvbFN0YXR1c1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2Zvcm0nO1xuXG5pbXBvcnQgeyBTRl9TRVEgfSBmcm9tICcuLi9jb25zdCc7XG5pbXBvcnQgdHlwZSB7IEVycm9yRGF0YSB9IGZyb20gJy4uL2Vycm9ycyc7XG5pbXBvcnQgdHlwZSB7IFNGRm9ybVZhbHVlQ2hhbmdlLCBTRlVwZGF0ZVZhbHVlQW5kVmFsaWRpdHksIFNGVmFsdWUgfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHR5cGUgeyBTRlNjaGVtYSwgU0ZTY2hlbWFUeXBlIH0gZnJvbSAnLi4vc2NoZW1hJztcbmltcG9ydCB0eXBlIHsgU0ZVSVNjaGVtYSwgU0ZVSVNjaGVtYUl0ZW0sIFNGVUlTY2hlbWFJdGVtUnVuLCBTRlZpc2libGVJZlJldHVybiB9IGZyb20gJy4uL3NjaGVtYS91aSc7XG5pbXBvcnQgeyBpc0JsYW5rIH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSB9IGZyb20gJy4uL3ZhbGlkYXRvci5mYWN0b3J5JztcbmltcG9ydCB0eXBlIHsgV2lkZ2V0IH0gZnJvbSAnLi4vd2lkZ2V0JztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEZvcm1Qcm9wZXJ0eSB7XG4gIHByaXZhdGUgX2Vycm9yczogRXJyb3JEYXRhW10gfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBfdmFsdWVDaGFuZ2VzID0gbmV3IEJlaGF2aW9yU3ViamVjdDxTRkZvcm1WYWx1ZUNoYW5nZT4oeyBwYXRoOiBudWxsLCBwYXRoVmFsdWU6IG51bGwsIHZhbHVlOiBudWxsIH0pO1xuICBwcml2YXRlIF9lcnJvcnNDaGFuZ2VzID0gbmV3IEJlaGF2aW9yU3ViamVjdDxFcnJvckRhdGFbXSB8IG51bGw+KG51bGwpO1xuICBwcml2YXRlIF92aXNpYmxlID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfdmlzaWJpbGl0eUNoYW5nZXMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KHRydWUpO1xuICBwcml2YXRlIF9yb290OiBQcm9wZXJ0eUdyb3VwO1xuICBwcml2YXRlIF9wYXJlbnQ6IFByb3BlcnR5R3JvdXAgfCBudWxsO1xuICBfb2JqRXJyb3JzOiB7IFtrZXk6IHN0cmluZ106IEVycm9yRGF0YVtdIH0gPSB7fTtcbiAgc2NoZW1hVmFsaWRhdG9yOiAodmFsdWU6IFNGVmFsdWUpID0+IEVycm9yRGF0YVtdO1xuICBzY2hlbWE6IFNGU2NoZW1hO1xuICB1aTogU0ZVSVNjaGVtYSB8IFNGVUlTY2hlbWFJdGVtUnVuO1xuICBmb3JtRGF0YTogUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG4gIF92YWx1ZTogU0ZWYWx1ZSA9IG51bGw7XG4gIHdpZGdldCE6IFdpZGdldDxGb3JtUHJvcGVydHksIFNGVUlTY2hlbWFJdGVtPjtcbiAgcGF0aDogc3RyaW5nO1xuICBwcm9wZXJ0eUlkPzogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHNjaGVtYVZhbGlkYXRvckZhY3Rvcnk6IFNjaGVtYVZhbGlkYXRvckZhY3RvcnksXG4gICAgc2NoZW1hOiBTRlNjaGVtYSxcbiAgICB1aTogU0ZVSVNjaGVtYSB8IFNGVUlTY2hlbWFJdGVtLFxuICAgIGZvcm1EYXRhOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPixcbiAgICBwYXJlbnQ6IFByb3BlcnR5R3JvdXAgfCBudWxsLFxuICAgIHBhdGg6IHN0cmluZyxcbiAgICBwcml2YXRlIF9vcHRpb25zOiBBbGFpblNGQ29uZmlnXG4gICkge1xuICAgIHRoaXMuc2NoZW1hID0gc2NoZW1hO1xuICAgIHRoaXMudWkgPSB1aTtcbiAgICB0aGlzLnNjaGVtYVZhbGlkYXRvciA9IHNjaGVtYVZhbGlkYXRvckZhY3RvcnkuY3JlYXRlVmFsaWRhdG9yRm4oc2NoZW1hLCB7XG4gICAgICBpbmdvcmVLZXl3b3JkczogdGhpcy51aS5pbmdvcmVLZXl3b3JkcyBhcyBzdHJpbmdbXSxcbiAgICAgIGRlYnVnOiAodWkgYXMgU0ZVSVNjaGVtYUl0ZW0pIS5kZWJ1ZyFcbiAgICB9KTtcbiAgICB0aGlzLmZvcm1EYXRhID0gZm9ybURhdGEgfHwgc2NoZW1hLmRlZmF1bHQ7XG4gICAgdGhpcy5fcGFyZW50ID0gcGFyZW50O1xuICAgIGlmIChwYXJlbnQpIHtcbiAgICAgIHRoaXMuX3Jvb3QgPSBwYXJlbnQucm9vdDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcm9vdCA9IHRoaXMgYXMgTnpTYWZlQW55O1xuICAgIH1cbiAgICB0aGlzLnBhdGggPSBwYXRoO1xuICB9XG5cbiAgZ2V0IHZhbHVlQ2hhbmdlcygpOiBCZWhhdmlvclN1YmplY3Q8U0ZGb3JtVmFsdWVDaGFuZ2U+IHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWVDaGFuZ2VzO1xuICB9XG5cbiAgZ2V0IGVycm9yc0NoYW5nZXMoKTogQmVoYXZpb3JTdWJqZWN0PEVycm9yRGF0YVtdIHwgbnVsbD4ge1xuICAgIHJldHVybiB0aGlzLl9lcnJvcnNDaGFuZ2VzO1xuICB9XG5cbiAgZ2V0IHR5cGUoKTogU0ZTY2hlbWFUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5zY2hlbWEudHlwZSE7XG4gIH1cblxuICBnZXQgcGFyZW50KCk6IFByb3BlcnR5R3JvdXAgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xuICB9XG5cbiAgZ2V0IHJvb3QoKTogUHJvcGVydHlHcm91cCB7XG4gICAgcmV0dXJuIHRoaXMuX3Jvb3Q7XG4gIH1cblxuICBnZXQgdmFsdWUoKTogU0ZWYWx1ZSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgZ2V0IGVycm9ycygpOiBFcnJvckRhdGFbXSB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLl9lcnJvcnM7XG4gIH1cblxuICBnZXQgdmlzaWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fdmlzaWJsZTtcbiAgfVxuXG4gIGdldCB2YWxpZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZXJyb3JzID09PSBudWxsIHx8IHRoaXMuX2Vycm9ycy5sZW5ndGggPT09IDA7XG4gIH1cblxuICBnZXQgb3B0aW9ucygpOiBBbGFpblNGQ29uZmlnIHtcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9ucztcbiAgfVxuXG4gIC8qKlxuICAgKiDorr7nva7lgLxcbiAgICpcbiAgICogQHBhcmFtIG9ubHlTZWxmIGB0cnVlYCDlj6rlr7nlvZPliY3lrZfmrrXmm7TmlrDlgLzlkozmoKHpqozvvJtgZmFsc2VgIOWMheWQq+S4iue6p+Wtl+autVxuICAgKi9cbiAgYWJzdHJhY3Qgc2V0VmFsdWUodmFsdWU6IFNGVmFsdWUsIG9ubHlTZWxmOiBib29sZWFuKTogdm9pZDtcblxuICAvKipcbiAgICog6YeN572u5YC877yM6buY6K6k5YC85Li6IGBzY2hlbWEuZGVmYXVsdGBcbiAgICpcbiAgICogQHBhcmFtIG9ubHlTZWxmIGB0cnVlYCDlj6rlr7nlvZPliY3lrZfmrrXmm7TmlrDlgLzlkozmoKHpqozvvJtgZmFsc2VgIOWMheWQq+S4iue6p+Wtl+autVxuICAgKi9cbiAgYWJzdHJhY3QgcmVzZXRWYWx1ZSh2YWx1ZTogU0ZWYWx1ZSwgb25seVNlbGY6IGJvb2xlYW4pOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGFic3RyYWN0IF9oYXNWYWx1ZSgpOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiAgQGludGVybmFsXG4gICAqL1xuICBhYnN0cmFjdCBfdXBkYXRlVmFsdWUoKTogdm9pZDtcblxuICBjZChvbmx5U2VsZjogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgdGhpcy53aWRnZXQ/LmRldGVjdENoYW5nZXMob25seVNlbGYpO1xuICB9XG5cbiAgLyoqXG4gICAqIOabtOaWsOWAvOS4lOagoemqjOaVsOaNrlxuICAgKi9cbiAgdXBkYXRlVmFsdWVBbmRWYWxpZGl0eShvcHRpb25zPzogU0ZVcGRhdGVWYWx1ZUFuZFZhbGlkaXR5KTogdm9pZCB7XG4gICAgb3B0aW9ucyA9IHtcbiAgICAgIG9ubHlTZWxmOiBmYWxzZSxcbiAgICAgIGVtaXRWYWxpZGF0b3I6IHRydWUsXG4gICAgICBlbWl0VmFsdWVFdmVudDogdHJ1ZSxcbiAgICAgIHVwZGF0ZVBhdGg6ICcnLFxuICAgICAgdXBkYXRlVmFsdWU6IG51bGwsXG4gICAgICAuLi5vcHRpb25zXG4gICAgfTtcbiAgICB0aGlzLl91cGRhdGVWYWx1ZSgpO1xuXG4gICAgaWYgKG9wdGlvbnMuZW1pdFZhbHVlRXZlbnQpIHtcbiAgICAgIG9wdGlvbnMudXBkYXRlUGF0aCA9IG9wdGlvbnMudXBkYXRlUGF0aCB8fCB0aGlzLnBhdGg7XG4gICAgICBvcHRpb25zLnVwZGF0ZVZhbHVlID0gb3B0aW9ucy51cGRhdGVWYWx1ZSA9PSBudWxsID8gdGhpcy52YWx1ZSA6IG9wdGlvbnMudXBkYXRlVmFsdWU7XG4gICAgICB0aGlzLnZhbHVlQ2hhbmdlcy5uZXh0KHsgdmFsdWU6IHRoaXMudmFsdWUsIHBhdGg6IG9wdGlvbnMudXBkYXRlUGF0aCwgcGF0aFZhbHVlOiBvcHRpb25zLnVwZGF0ZVZhbHVlIH0pO1xuICAgIH1cblxuICAgIC8vIGBlbWl0VmFsaWRhdG9yYCDmr4/kuIDmrKHmlbDmja7lj5jmm7Tlt7Lnu4/ljIXlkKvlrozmlbTplJnor6/pk77ot6/vvIzlkI7nu63niLboioLngrnmlbDmja7lj5jmm7Tml6Dpobvlho3op6blj5HmoKHpqoxcbiAgICBpZiAob3B0aW9ucy5lbWl0VmFsaWRhdG9yICYmIHRoaXMudWkubGl2ZVZhbGlkYXRlID09PSB0cnVlKSB7XG4gICAgICB0aGlzLl9ydW5WYWxpZGF0aW9uKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucGFyZW50ICYmICFvcHRpb25zLm9ubHlTZWxmKSB7XG4gICAgICB0aGlzLnBhcmVudC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgLi4ub3B0aW9ucywgZW1pdFZhbGlkYXRvcjogZmFsc2UgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIOagueaNrui3r+W+hOaQnOe0ouihqOWNleWxnuaApyAqL1xuICBzZWFyY2hQcm9wZXJ0eShwYXRoOiBzdHJpbmcpOiBGb3JtUHJvcGVydHkgfCBudWxsIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXRoaXMtYWxpYXNcbiAgICBsZXQgcHJvcDogRm9ybVByb3BlcnR5ID0gdGhpcztcbiAgICBsZXQgYmFzZTogUHJvcGVydHlHcm91cCB8IG51bGwgPSBudWxsO1xuXG4gICAgbGV0IHJlc3VsdCA9IG51bGw7XG4gICAgaWYgKHBhdGhbMF0gPT09IFNGX1NFUSkge1xuICAgICAgYmFzZSA9IHRoaXMuZmluZFJvb3QoKTtcbiAgICAgIHJlc3VsdCA9IGJhc2UuZ2V0UHJvcGVydHkocGF0aC5zdWJzdHJpbmcoMSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aGlsZSAocmVzdWx0ID09PSBudWxsICYmIHByb3AucGFyZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHByb3AgPSBiYXNlID0gcHJvcC5wYXJlbnQ7XG4gICAgICAgIHJlc3VsdCA9IGJhc2UuZ2V0UHJvcGVydHkocGF0aCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQhO1xuICB9XG5cbiAgLyoqIOafpeaJvuagueihqOWNleWxnuaApyAqL1xuICBmaW5kUm9vdCgpOiBQcm9wZXJ0eUdyb3VwIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXRoaXMtYWxpYXNcbiAgICBsZXQgcHJvcGVydHk6IEZvcm1Qcm9wZXJ0eSA9IHRoaXM7XG4gICAgd2hpbGUgKHByb3BlcnR5LnBhcmVudCAhPT0gbnVsbCkge1xuICAgICAgcHJvcGVydHkgPSBwcm9wZXJ0eS5wYXJlbnQ7XG4gICAgfVxuICAgIHJldHVybiBwcm9wZXJ0eSBhcyBQcm9wZXJ0eUdyb3VwO1xuICB9XG5cbiAgLy8gI3JlZ2lvbiBwcm9jZXNzIGVycm9yc1xuXG4gIHByaXZhdGUgaXNFbXB0eURhdGEodmFsdWU6IFJlY29yZDxzdHJpbmcsIHVua25vd24+KTogYm9vbGVhbiB7XG4gICAgaWYgKGlzQmxhbmsodmFsdWUpKSByZXR1cm4gdHJ1ZTtcbiAgICBzd2l0Y2ggKHRoaXMudHlwZSkge1xuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgcmV0dXJuIGAke3ZhbHVlfWAubGVuZ3RoID09PSAwO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBfcnVuVmFsaWRhdGlvbigpOiB2b2lkIHtcbiAgICBsZXQgZXJyb3JzOiBFcnJvckRhdGFbXTtcbiAgICAvLyBUaGUgZGVmaW5pdGlvbiBvZiBzb21lIHJ1bGVzOlxuICAgIC8vIDEuIFNob3VsZCBub3QgYWp2IHZhbGlkYXRvciB3aGVuIGlzIGVtcHR5IGRhdGEgYW5kIHJlcXVpcmVkIGZpZWxkc1xuICAgIC8vIDIuIFNob3VsZCBub3QgYWp2IHZhbGlkYXRvciB3aGVuIGlzIGVtcHR5IGRhdGFcbiAgICBjb25zdCBpc0VtcHR5ID0gdGhpcy5pc0VtcHR5RGF0YSh0aGlzLl92YWx1ZSk7XG4gICAgaWYgKGlzRW1wdHkgJiYgdGhpcy51aS5fcmVxdWlyZWQpIHtcbiAgICAgIGVycm9ycyA9IFt7IGtleXdvcmQ6ICdyZXF1aXJlZCcgfV07XG4gICAgfSBlbHNlIGlmIChpc0VtcHR5KSB7XG4gICAgICBlcnJvcnMgPSBbXTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXJyb3JzID0gdGhpcy5zY2hlbWFWYWxpZGF0b3IodGhpcy5fdmFsdWUpIHx8IFtdO1xuICAgIH1cbiAgICBjb25zdCBjdXN0b21WYWxpZGF0b3IgPSAodGhpcy51aSBhcyBTRlVJU2NoZW1hSXRlbVJ1bikudmFsaWRhdG9yO1xuICAgIGlmICh0eXBlb2YgY3VzdG9tVmFsaWRhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zdCBjdXN0b21FcnJvcnMgPSBjdXN0b21WYWxpZGF0b3IodGhpcy52YWx1ZSwgdGhpcywgdGhpcy5maW5kUm9vdCgpKTtcbiAgICAgIGlmIChjdXN0b21FcnJvcnMgaW5zdGFuY2VvZiBPYnNlcnZhYmxlKSB7XG4gICAgICAgIGN1c3RvbUVycm9ycy5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICB0aGlzLnNldEN1c3RvbUVycm9ycyhlcnJvcnMsIHJlcyk7XG4gICAgICAgICAgdGhpcy5jZChmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnNldEN1c3RvbUVycm9ycyhlcnJvcnMsIGN1c3RvbUVycm9ycyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fZXJyb3JzID0gZXJyb3JzO1xuICAgIHRoaXMuc2V0RXJyb3JzKHRoaXMuX2Vycm9ycyk7XG4gIH1cblxuICBwcml2YXRlIHNldEN1c3RvbUVycm9ycyhlcnJvcnM6IEVycm9yRGF0YVtdLCBsaXN0OiBFcnJvckRhdGFbXSk6IHZvaWQge1xuICAgIGNvbnN0IGhhc0N1c3RvbUVycm9yID0gQXJyYXkuaXNBcnJheShsaXN0KSAmJiBsaXN0Lmxlbmd0aCA+IDA7XG4gICAgaWYgKGhhc0N1c3RvbUVycm9yKSB7XG4gICAgICBsaXN0LmZvckVhY2goZXJyID0+IHtcbiAgICAgICAgaWYgKCFlcnIubWVzc2FnZSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGN1c3RvbSB2YWxpZGF0b3IgbXVzdCBjb250YWluIGEgJ21lc3NhZ2UnIGF0dHJpYnV0ZSB0byB2aWV3ZWQgZXJyb3IgdGV4dGApO1xuICAgICAgICB9XG4gICAgICAgIGVyci5rZXl3b3JkID0gbnVsbDtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLl9lcnJvcnMgPSBoYXNDdXN0b21FcnJvciA/IGVycm9ycy5jb25jYXQoLi4ubGlzdCkgOiBlcnJvcnM7XG4gICAgdGhpcy5zZXRFcnJvcnModGhpcy5fZXJyb3JzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGN1cnJlbnQgZXJyb3IgbWVzc2FnZVxuICAgKlxuICAgKiDorr7nva7lvZPliY3plJnor6/mtojmga9cbiAgICpcbiAgICogQHBhcmFtIGVtaXRGb3JtYXQg6Iul5o+Q5L6b55qE5raI5oGv5bim5pyJIGB7eHh9YCDkvJroh6rliqjmoLnmja7lj4LmlbDov5vooYzovazljJbvvIzljIXlkKvoh6rlrprkuYnlh73mlbBcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICpcbiAgICogdGhpcy5zZi5nZXRQcm9wZXJ0eSgnL25hbWUnKT8uc2V0RXJyb3JzKHsga2V5d29yZDogJ3JlcXVpcmVkJyB9KTtcbiAgICogdGhpcy5zZi5nZXRQcm9wZXJ0eSgnL25hbWUnKT8uc2V0RXJyb3JzKHsgbWVzc2FnZTogJ1BsZWFzZSBpbnB1dCB5b3VyIHVzZXJuYW1lIScgfSk7XG4gICAqIHRoaXMuc2YuZ2V0UHJvcGVydHkoJy9uYW1lJyk/LnNldEVycm9ycygpOyAvLyBDbGVhbiBlcnJvclxuICAgKi9cbiAgc2V0RXJyb3JzKGVycm9yczogRXJyb3JEYXRhIHwgRXJyb3JEYXRhW10gPSBbXSwgZW1pdEZvcm1hdDogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcbiAgICBsZXQgYXJyRXJycyA9IEFycmF5LmlzQXJyYXkoZXJyb3JzKSA/IGVycm9ycyA6IFtlcnJvcnNdO1xuXG4gICAgaWYgKGVtaXRGb3JtYXQgJiYgYXJyRXJycyAmJiAhdGhpcy51aS5vbmx5VmlzdWFsKSB7XG4gICAgICBjb25zdCBsID0gKHRoaXMud2lkZ2V0ICYmIHRoaXMud2lkZ2V0LmwuZXJyb3IpIHx8IHt9O1xuICAgICAgYXJyRXJycyA9IGFyckVycnMubWFwKChlcnI6IEVycm9yRGF0YSkgPT4ge1xuICAgICAgICBsZXQgbWVzc2FnZTogc3RyaW5nIHwgKChlcnI6IEVycm9yRGF0YSkgPT4gc3RyaW5nKSA9XG4gICAgICAgICAgZXJyLmtleXdvcmQgPT0gbnVsbCAmJiBlcnIubWVzc2FnZVxuICAgICAgICAgICAgPyBlcnIubWVzc2FnZVxuICAgICAgICAgICAgOiAodGhpcy51aS5lcnJvcnMgfHwge30pW2Vyci5rZXl3b3JkIV0gfHwgdGhpcy5fb3B0aW9ucy5lcnJvcnMhW2Vyci5rZXl3b3JkIV0gfHwgbFtlcnIua2V5d29yZCFdIHx8IGBgO1xuXG4gICAgICAgIGlmIChtZXNzYWdlICYmIHR5cGVvZiBtZXNzYWdlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgbWVzc2FnZSA9IG1lc3NhZ2UoZXJyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtZXNzYWdlKSB7XG4gICAgICAgICAgaWYgKH5tZXNzYWdlLmluZGV4T2YoJ3snKSAmJiBlcnIucGFyYW1zKSB7XG4gICAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlKC97KFtcXC5hLXpBLVowLTldKyl9L2csIChfdjogc3RyaW5nLCBrZXk6IHN0cmluZykgPT4gZXJyLnBhcmFtcyFba2V5XSB8fCAnJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVyci5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXJyO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuX2Vycm9ycyA9IGFyckVycnM7XG4gICAgdGhpcy5fZXJyb3JzQ2hhbmdlcy5uZXh0KGFyckVycnMpO1xuICAgIC8vIFNob3VsZCBzZW5kIGVycm9ycyB0byBwYXJlbnQgZmllbGRcbiAgICBpZiAodGhpcy5fcGFyZW50KSB7XG4gICAgICB0aGlzLl9wYXJlbnQuc2V0UGFyZW50QW5kUGxhdEVycm9ycyhhcnJFcnJzLCB0aGlzLnBhdGgpO1xuICAgIH1cbiAgfVxuXG4gIHNldFBhcmVudEFuZFBsYXRFcnJvcnMoZXJyb3JzOiBFcnJvckRhdGFbXSwgcGF0aDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5fb2JqRXJyb3JzW3BhdGhdID0gZXJyb3JzO1xuICAgIGNvbnN0IHBsYXRFcnJvcnM6IEVycm9yRGF0YVtdID0gW107XG4gICAgT2JqZWN0LmtleXModGhpcy5fb2JqRXJyb3JzKS5mb3JFYWNoKHAgPT4ge1xuICAgICAgY29uc3QgcHJvcGVydHkgPSB0aGlzLnNlYXJjaFByb3BlcnR5KHApO1xuICAgICAgaWYgKHByb3BlcnR5ICYmICFwcm9wZXJ0eS52aXNpYmxlKSByZXR1cm47XG4gICAgICBwbGF0RXJyb3JzLnB1c2goLi4udGhpcy5fb2JqRXJyb3JzW3BdKTtcbiAgICB9KTtcbiAgICB0aGlzLnNldEVycm9ycyhwbGF0RXJyb3JzLCBmYWxzZSk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBjb25kaXRpb25cblxuICAvKipcbiAgICogU2V0IHRoZSBoaWRlIG9yIGRpc3BsYXkgb2Ygd2lkZ2V0XG4gICAqIOiuvue9ruWwj+mDqOS7tueahOmakOiXj+aIluaYvuekulxuICAgKi9cbiAgc2V0VmlzaWJsZSh2aXNpYmxlOiBib29sZWFuKTogdGhpcyB7XG4gICAgdGhpcy5fdmlzaWJsZSA9IHZpc2libGU7XG4gICAgdGhpcy5fdmlzaWJpbGl0eUNoYW5nZXMubmV4dCh2aXNpYmxlKTtcbiAgICAvLyDmuLLmn5Pml7bpnIDopoHph43mlrDop6blj5EgcmVzZXRcbiAgICBpZiAodmlzaWJsZSkge1xuICAgICAgdGhpcy5pbmplY3RvclxuICAgICAgICAuZ2V0KE5nWm9uZSlcbiAgICAgICAgLm9uU3RhYmxlLnBpcGUodGFrZSgxKSlcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5yZXNldFZhbHVlKHRoaXMudmFsdWUsIHRydWUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBfYmluZFZpc2liaWxpdHkoKTogdm9pZCB7XG4gICAgY29uc3QgdmlzaWJsZUlmID0gKHRoaXMudWkgYXMgU0ZVSVNjaGVtYUl0ZW0pLnZpc2libGVJZjtcbiAgICBpZiAodHlwZW9mIHZpc2libGVJZiA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LmtleXModmlzaWJsZUlmKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgfSBlbHNlIGlmICh2aXNpYmxlSWYgIT0gbnVsbCkge1xuICAgICAgY29uc3QgcHJvcGVydGllc0JpbmRpbmc6IEFycmF5PE9ic2VydmFibGU8Ym9vbGVhbj4+ID0gW107XG4gICAgICBmb3IgKGNvbnN0IGRlcGVuZGVuY3lQYXRoIGluIHZpc2libGVJZikge1xuICAgICAgICBpZiAodmlzaWJsZUlmLmhhc093blByb3BlcnR5KGRlcGVuZGVuY3lQYXRoKSkge1xuICAgICAgICAgIGNvbnN0IHByb3BlcnR5ID0gdGhpcy5zZWFyY2hQcm9wZXJ0eShkZXBlbmRlbmN5UGF0aCk7XG4gICAgICAgICAgaWYgKHByb3BlcnR5KSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZUNoZWNrID0gcHJvcGVydHkudmFsdWVDaGFuZ2VzLnBpcGUoXG4gICAgICAgICAgICAgIG1hcChyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZpID0gdmlzaWJsZUlmW2RlcGVuZGVuY3lQYXRoXTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZpID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICBjb25zdCB2aUZuUmVzID0gdmkocmVzLnZhbHVlLCBwcm9wZXJ0eSk7XG4gICAgICAgICAgICAgICAgICAvLyDlkIzmraXmm7TmlrAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmlGblJlcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZml4VmlGblJlcyA9IHsgc2hvdzogZmFsc2UsIHJlcXVpcmVkOiBmYWxzZSwgLi4udmlGblJlcyB9IGFzIFNGVmlzaWJsZUlmUmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnRSZXF1aXJlZCA9IHRoaXMucGFyZW50Py5zY2hlbWEucmVxdWlyZWQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJlbnRSZXF1aXJlZCAmJiB0aGlzLnByb3BlcnR5SWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpZHggPSBwYXJlbnRSZXF1aXJlZC5maW5kSW5kZXgodyA9PiB3ID09PSB0aGlzLnByb3BlcnR5SWQpO1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChmaXhWaUZuUmVzLnJlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaWR4ID09PSAtMSkgcGFyZW50UmVxdWlyZWQucHVzaCh0aGlzLnByb3BlcnR5SWQpO1xuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaWR4ICE9PSAtMSkgcGFyZW50UmVxdWlyZWQuc3BsaWNlKGlkeCwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMudWkuX3JlcXVpcmVkID0gZml4VmlGblJlcy5yZXF1aXJlZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZml4VmlGblJlcy5zaG93O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHZpRm5SZXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2aS5pbmRleE9mKCckQU5ZJCcpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy52YWx1ZSAmJiByZXMudmFsdWUubGVuZ3RoID4gMDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHZpLmluZGV4T2YocmVzLnZhbHVlKSAhPT0gLTE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IHZpc2liaWxpdHlDaGVjayA9IHByb3BlcnR5Ll92aXNpYmlsaXR5Q2hhbmdlcztcbiAgICAgICAgICAgIGNvbnN0IGFuZCA9IGNvbWJpbmVMYXRlc3QoW3ZhbHVlQ2hlY2ssIHZpc2liaWxpdHlDaGVja10pLnBpcGUobWFwKHJlc3VsdHMgPT4gcmVzdWx0c1swXSAmJiByZXN1bHRzWzFdKSk7XG4gICAgICAgICAgICBwcm9wZXJ0aWVzQmluZGluZy5wdXNoKGFuZCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbmdEZXZNb2RlID09PSAndW5kZWZpbmVkJyB8fCBuZ0Rldk1vZGUpIHtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBDYW4ndCBmaW5kIHByb3BlcnR5ICR7ZGVwZW5kZW5jeVBhdGh9IGZvciB2aXNpYmlsaXR5IGNoZWNrIG9mICR7dGhpcy5wYXRofWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb21iaW5lTGF0ZXN0KHByb3BlcnRpZXNCaW5kaW5nKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAodmFsdWVzID0+ICh0aGlzLnVpLnZpc2libGVJZkxvZ2ljYWwgPT09ICdhbmQnID8gdmFsdWVzLmV2ZXJ5KHYgPT4gdikgOiB2YWx1ZXMuc29tZSh2ID0+IHYpKSksXG4gICAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUodmlzaWJsZSA9PiB0aGlzLnNldFZpc2libGUodmlzaWJsZSkpO1xuICAgIH1cbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICB1cGRhdGVGZWVkYmFjayhzdGF0dXM6IE56Rm9ybUNvbnRyb2xTdGF0dXNUeXBlID0gJycpOiB2b2lkIHtcbiAgICB0aGlzLnVpLmZlZWRiYWNrID0gc3RhdHVzO1xuICAgIHRoaXMud2lkZ2V0Py5pbmplY3Rvci5nZXQoTnpGb3JtU3RhdHVzU2VydmljZSkuZm9ybVN0YXR1c0NoYW5nZXMubmV4dCh7IHN0YXR1cywgaGFzRmVlZGJhY2s6ICEhc3RhdHVzIH0pO1xuICAgIHRoaXMuY2QodHJ1ZSk7XG4gIH1cbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFByb3BlcnR5R3JvdXAgZXh0ZW5kcyBGb3JtUHJvcGVydHkge1xuICBwcm9wZXJ0aWVzOiB7IFtrZXk6IHN0cmluZ106IEZvcm1Qcm9wZXJ0eSB9IHwgRm9ybVByb3BlcnR5W10gfCBudWxsID0gbnVsbDtcblxuICBnZXRQcm9wZXJ0eShwYXRoOiBzdHJpbmcpOiBGb3JtUHJvcGVydHkgfCB1bmRlZmluZWQge1xuICAgIGNvbnN0IHN1YlBhdGhJZHggPSBwYXRoLmluZGV4T2YoU0ZfU0VRKTtcbiAgICBjb25zdCBwcm9wZXJ0eUlkID0gc3ViUGF0aElkeCAhPT0gLTEgPyBwYXRoLnN1YnN0cmluZygwLCBzdWJQYXRoSWR4KSA6IHBhdGg7XG5cbiAgICBsZXQgcHJvcGVydHkgPSAodGhpcy5wcm9wZXJ0aWVzIGFzIHsgW2tleTogc3RyaW5nXTogRm9ybVByb3BlcnR5IH0pW3Byb3BlcnR5SWRdO1xuICAgIGlmIChwcm9wZXJ0eSAhPT0gbnVsbCAmJiBzdWJQYXRoSWR4ICE9PSAtMSAmJiBwcm9wZXJ0eSBpbnN0YW5jZW9mIFByb3BlcnR5R3JvdXApIHtcbiAgICAgIGNvbnN0IHN1YlBhdGggPSBwYXRoLnN1YnN0cmluZyhzdWJQYXRoSWR4ICsgMSk7XG4gICAgICBwcm9wZXJ0eSA9IChwcm9wZXJ0eSBhcyBQcm9wZXJ0eUdyb3VwKS5nZXRQcm9wZXJ0eShzdWJQYXRoKSE7XG4gICAgfVxuICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgfVxuXG4gIGZvckVhY2hDaGlsZChmbjogKGZvcm1Qcm9wZXJ0eTogRm9ybVByb3BlcnR5LCBzdHI6IHN0cmluZykgPT4gdm9pZCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgcHJvcGVydHlJZCBpbiB0aGlzLnByb3BlcnRpZXMpIHtcbiAgICAgIGlmICh0aGlzLnByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkocHJvcGVydHlJZCkpIHtcbiAgICAgICAgY29uc3QgcHJvcGVydHkgPSAodGhpcy5wcm9wZXJ0aWVzIGFzIHsgW2tleTogc3RyaW5nXTogRm9ybVByb3BlcnR5IH0pW3Byb3BlcnR5SWRdO1xuICAgICAgICBmbihwcm9wZXJ0eSwgcHJvcGVydHlJZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZm9yRWFjaENoaWxkUmVjdXJzaXZlKGZuOiAoZm9ybVByb3BlcnR5OiBGb3JtUHJvcGVydHkpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLmZvckVhY2hDaGlsZChjaGlsZCA9PiB7XG4gICAgICBmbihjaGlsZCk7XG4gICAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBQcm9wZXJ0eUdyb3VwKSB7XG4gICAgICAgIChjaGlsZCBhcyBQcm9wZXJ0eUdyb3VwKS5mb3JFYWNoQ2hpbGRSZWN1cnNpdmUoZm4pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgX2JpbmRWaXNpYmlsaXR5KCk6IHZvaWQge1xuICAgIHN1cGVyLl9iaW5kVmlzaWJpbGl0eSgpO1xuICAgIHRoaXMuX2JpbmRWaXNpYmlsaXR5UmVjdXJzaXZlKCk7XG4gIH1cblxuICBwcml2YXRlIF9iaW5kVmlzaWJpbGl0eVJlY3Vyc2l2ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmZvckVhY2hDaGlsZFJlY3Vyc2l2ZShwcm9wZXJ0eSA9PiB7XG4gICAgICBwcm9wZXJ0eS5fYmluZFZpc2liaWxpdHkoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlzUm9vdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcyA9PT0gdGhpcy5yb290O1xuICB9XG59XG4iXX0=