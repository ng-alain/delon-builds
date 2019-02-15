/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { combineLatest, BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { isBlank } from '../utils';
/**
 * @abstract
 */
export class FormProperty {
    /**
     * @param {?} schemaValidatorFactory
     * @param {?} schema
     * @param {?} ui
     * @param {?} formData
     * @param {?} parent
     * @param {?} path
     * @param {?} options
     */
    constructor(schemaValidatorFactory, schema, ui, formData, parent, path, options) {
        this.options = options;
        this._value = null;
        this._errors = null;
        this._objErrors = {};
        this._valueChanges = new BehaviorSubject(null);
        this._errorsChanges = new BehaviorSubject(null);
        this._visible = true;
        this._visibilityChanges = new BehaviorSubject(true);
        this.schema = schema;
        this.ui = ui;
        this.schemaValidator = schemaValidatorFactory.createValidatorFn(schema, {
            ingoreKeywords: (/** @type {?} */ (this.ui.ingoreKeywords)),
            debug: (/** @type {?} */ (((/** @type {?} */ (ui))))).debug,
        });
        this.formData = formData || schema.default;
        this._parent = parent;
        if (parent) {
            this._root = parent.root;
        }
        else if (this instanceof PropertyGroup) {
            this._root = (/** @type {?} */ (this));
        }
        this._path = path;
    }
    /**
     * @return {?}
     */
    get valueChanges() {
        return this._valueChanges;
    }
    /**
     * @return {?}
     */
    get errorsChanges() {
        return this._errorsChanges;
    }
    /**
     * @return {?}
     */
    get type() {
        return this.schema.type;
    }
    /**
     * @return {?}
     */
    get parent() {
        return this._parent;
    }
    /**
     * @return {?}
     */
    get root() {
        // tslint:disable-next-line:no-any
        return this._root || ((/** @type {?} */ (((/** @type {?} */ (this))))));
    }
    /**
     * @return {?}
     */
    get path() {
        return this._path;
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @return {?}
     */
    get errors() {
        return this._errors;
    }
    /**
     * @return {?}
     */
    get visible() {
        return this._visible;
    }
    /**
     * @return {?}
     */
    get valid() {
        return this._errors === null || this._errors.length === 0;
    }
    /**
     * 更新值且校验数据
     *
     * @param {?=} onlySelf
     * @param {?=} emitValueEvent
     * @param {?=} emitValidator
     * @return {?}
     */
    updateValueAndValidity(onlySelf = false, emitValueEvent = true, emitValidator = true) {
        this._updateValue();
        if (emitValueEvent) {
            this.valueChanges.next(this.value);
        }
        // `emitValidator` 每一次数据变更已经包含完整错误链路，后续父节点数据变更无须再触发校验
        if (emitValidator && this.ui.liveValidate === true) {
            this._runValidation();
        }
        if (this.parent && !onlySelf) {
            this.parent.updateValueAndValidity(onlySelf, emitValueEvent, false);
        }
    }
    /**
     * 根据路径搜索表单属性
     * @param {?} path
     * @return {?}
     */
    searchProperty(path) {
        /** @type {?} */
        let prop = this;
        /** @type {?} */
        let base = null;
        /** @type {?} */
        let result = null;
        if (path[0] === '/') {
            base = this.findRoot();
            result = base.getProperty(path.substr(1));
        }
        else {
            while (result === null && prop.parent !== null) {
                prop = base = prop.parent;
                result = base.getProperty(path);
            }
        }
        return result;
    }
    /**
     * 查找根表单属性
     * @return {?}
     */
    findRoot() {
        /** @type {?} */
        let property = this;
        while (property.parent !== null) {
            property = property.parent;
        }
        return (/** @type {?} */ (property));
    }
    // #region process errors
    /**
     * @param {?} value
     * @return {?}
     */
    isEmptyData(value) {
        if (isBlank(value))
            return true;
        switch (this.type) {
            case 'string':
                return ('' + value).length === 0;
        }
        return false;
    }
    /**
     * \@internal
     * @return {?}
     */
    _runValidation() {
        /** @type {?} */
        let errors;
        // The definition of some rules:
        // 1. Should not ajv validator when is empty data and required fields
        // 2. Should not ajv validator when is empty data
        /** @type {?} */
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
        /** @type {?} */
        const customValidator = ((/** @type {?} */ (this.ui))).validator;
        if (typeof customValidator === 'function') {
            /** @type {?} */
            const customErrors = customValidator(this.value, this, this.findRoot());
            if (customErrors instanceof Observable) {
                customErrors.subscribe(res => {
                    this.setCustomErrors(errors, res);
                    this.widget.detectChanges();
                });
                return;
            }
            this.setCustomErrors(errors, customErrors);
            return;
        }
        this._errors = errors;
        this.setErrors(this._errors);
    }
    /**
     * @param {?} errors
     * @param {?} list
     * @return {?}
     */
    setCustomErrors(errors, list) {
        // fix error format
        /** @type {?} */
        const hasCustomError = list != null && list.length > 0;
        if (hasCustomError) {
            list.forEach((err, idx) => {
                if (!err.message)
                    throw new Error(`The custom validator must contain a 'message' attribute to viewed error text`);
                err._custom = true;
            });
        }
        this._errors = this.mergeErrors(errors, list);
        this.setErrors(this._errors);
    }
    /**
     * @param {?} errors
     * @param {?} newErrors
     * @return {?}
     */
    mergeErrors(errors, newErrors) {
        if (newErrors) {
            if (Array.isArray(newErrors)) {
                errors = errors.concat(...newErrors);
            }
            else {
                errors.push(newErrors);
            }
        }
        return errors;
    }
    /**
     * @param {?} errors
     * @param {?=} emitFormat
     * @return {?}
     */
    setErrors(errors, emitFormat = true) {
        if (emitFormat && errors && !this.ui.onlyVisual) {
            errors = errors.map((err) => {
                /** @type {?} */
                let message = err._custom === true && err.message
                    ? err.message
                    : (this.ui.errors || {})[err.keyword] || this.options.errors[err.keyword] || ``;
                if (message && typeof message === 'function') {
                    message = (/** @type {?} */ (message(err)));
                }
                if (message) {
                    if (~((/** @type {?} */ (message))).indexOf('{')) {
                        message = ((/** @type {?} */ (message))).replace(/{([\.a-z0-9]+)}/g, (v, key) => err.params[key] || '');
                    }
                    err.message = (/** @type {?} */ (message));
                }
                return err;
            });
        }
        this._errors = errors;
        this._errorsChanges.next(errors);
        // Should send errors to parent field
        if (this._parent) {
            this._parent.setParentAndPlatErrors(errors, this.path);
        }
    }
    /**
     * @param {?} errors
     * @param {?} path
     * @return {?}
     */
    setParentAndPlatErrors(errors, path) {
        this._objErrors[path] = errors;
        /** @type {?} */
        const platErrors = [];
        Object.keys(this._objErrors).forEach(p => {
            /** @type {?} */
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
     * @param {?} visible
     * @return {?}
     */
    setVisible(visible) {
        this._visible = visible;
        this._visibilityChanges.next(visible);
        // 部分数据源来自 reset
        this.resetValue(this.value, true);
    }
    // A field is visible if AT LEAST ONE of the properties it depends on is visible AND has a value in the list
    /**
     * @return {?}
     */
    _bindVisibility() {
        /** @type {?} */
        const visibleIf = ((/** @type {?} */ (this.ui))).visibleIf;
        if (typeof visibleIf === 'object' && Object.keys(visibleIf).length === 0) {
            this.setVisible(false);
        }
        else if (visibleIf !== undefined) {
            /** @type {?} */
            const propertiesBinding = [];
            for (const dependencyPath in visibleIf) {
                if (visibleIf.hasOwnProperty(dependencyPath)) {
                    /** @type {?} */
                    const property = this.searchProperty(dependencyPath);
                    if (property) {
                        /** @type {?} */
                        const valueCheck = property.valueChanges.pipe(map((value) => {
                            /** @type {?} */
                            const vi = visibleIf[dependencyPath];
                            if (typeof vi === 'function')
                                return vi(value);
                            if (vi.indexOf('$ANY$') !== -1) {
                                return value.length > 0;
                            }
                            else {
                                return vi.indexOf(value) !== -1;
                            }
                        }));
                        /** @type {?} */
                        const visibilityCheck = property._visibilityChanges;
                        /** @type {?} */
                        const and = combineLatest(valueCheck, visibilityCheck).pipe(map(results => results[0] && results[1]));
                        propertiesBinding.push(and);
                    }
                    else {
                        console.warn(`Can't find property ${dependencyPath} for visibility check of ${this.path}`);
                    }
                }
            }
            combineLatest(propertiesBinding)
                .pipe(map(values => values.indexOf(true) !== -1), distinctUntilChanged())
                .subscribe(visible => this.setVisible(visible));
        }
    }
}
if (false) {
    /** @type {?} */
    FormProperty.prototype.schemaValidator;
    /** @type {?} */
    FormProperty.prototype.schema;
    /** @type {?} */
    FormProperty.prototype.ui;
    /** @type {?} */
    FormProperty.prototype.formData;
    /** @type {?} */
    FormProperty.prototype._value;
    /** @type {?} */
    FormProperty.prototype.widget;
    /** @type {?} */
    FormProperty.prototype._errors;
    /** @type {?} */
    FormProperty.prototype._objErrors;
    /** @type {?} */
    FormProperty.prototype._valueChanges;
    /** @type {?} */
    FormProperty.prototype._errorsChanges;
    /** @type {?} */
    FormProperty.prototype._visible;
    /** @type {?} */
    FormProperty.prototype._visibilityChanges;
    /** @type {?} */
    FormProperty.prototype._root;
    /** @type {?} */
    FormProperty.prototype._parent;
    /** @type {?} */
    FormProperty.prototype._path;
    /** @type {?} */
    FormProperty.prototype.options;
    /**
     * 设置值
     *
     * @abstract
     * @param {?} value
     * @param {?} onlySelf `true` 只对当前字段更新值和校验；`false` 包含上级字段
     * @return {?}
     */
    FormProperty.prototype.setValue = function (value, onlySelf) { };
    /**
     * 重置值，默认值为 `schema.default`
     *
     * @abstract
     * @param {?} value
     * @param {?} onlySelf `true` 只对当前字段更新值和校验；`false` 包含上级字段
     * @return {?}
     */
    FormProperty.prototype.resetValue = function (value, onlySelf) { };
    /**
     * \@internal
     * @abstract
     * @return {?}
     */
    FormProperty.prototype._hasValue = function () { };
    /**
     * \@internal
     * @abstract
     * @return {?}
     */
    FormProperty.prototype._updateValue = function () { };
}
/**
 * @abstract
 */
export class PropertyGroup extends FormProperty {
    constructor() {
        super(...arguments);
        this.properties = null;
    }
    /**
     * @param {?} path
     * @return {?}
     */
    getProperty(path) {
        /** @type {?} */
        const subPathIdx = path.indexOf('/');
        /** @type {?} */
        const propertyId = subPathIdx !== -1 ? path.substr(0, subPathIdx) : path;
        /** @type {?} */
        let property = this.properties[propertyId];
        if (property !== null && subPathIdx !== -1 && property instanceof PropertyGroup) {
            /** @type {?} */
            const subPath = path.substr(subPathIdx + 1);
            property = ((/** @type {?} */ (property))).getProperty(subPath);
        }
        return property;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    forEachChild(fn) {
        for (const propertyId in this.properties) {
            if (this.properties.hasOwnProperty(propertyId)) {
                /** @type {?} */
                const property = this.properties[propertyId];
                fn(property, propertyId);
            }
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    forEachChildRecursive(fn) {
        this.forEachChild(child => {
            fn(child);
            if (child instanceof PropertyGroup) {
                ((/** @type {?} */ (child))).forEachChildRecursive(fn);
            }
        });
    }
    /**
     * @return {?}
     */
    _bindVisibility() {
        super._bindVisibility();
        this._bindVisibilityRecursive();
    }
    /**
     * @return {?}
     */
    _bindVisibilityRecursive() {
        this.forEachChildRecursive(property => {
            property._bindVisibility();
        });
    }
    /**
     * @return {?}
     */
    isRoot() {
        return this === this.root;
    }
}
if (false) {
    /** @type {?} */
    PropertyGroup.prototype.properties;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5wcm9wZXJ0eS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL21vZGVsL2Zvcm0ucHJvcGVydHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFPM0QsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFVBQVUsQ0FBQzs7OztBQUluQyxNQUFNLE9BQWdCLFlBQVk7Ozs7Ozs7Ozs7SUFpQmhDLFlBQ0Usc0JBQThDLEVBQzlDLE1BQWdCLEVBQ2hCLEVBQStCLEVBQy9CLFFBQVksRUFDWixNQUFxQixFQUNyQixJQUFZLEVBQ0osT0FBd0I7UUFBeEIsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFuQmxDLFdBQU0sR0FBWSxJQUFJLENBQUM7UUFFZixZQUFPLEdBQWdCLElBQUksQ0FBQztRQUMxQixlQUFVLEdBQW1DLEVBQUUsQ0FBQztRQUNsRCxrQkFBYSxHQUFHLElBQUksZUFBZSxDQUFVLElBQUksQ0FBQyxDQUFDO1FBQ25ELG1CQUFjLEdBQUcsSUFBSSxlQUFlLENBQWMsSUFBSSxDQUFDLENBQUM7UUFDeEQsYUFBUSxHQUFHLElBQUksQ0FBQztRQUNoQix1QkFBa0IsR0FBRyxJQUFJLGVBQWUsQ0FBVSxJQUFJLENBQUMsQ0FBQztRQWM5RCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxlQUFlLEdBQUcsc0JBQXNCLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFO1lBQ3RFLGNBQWMsRUFBRSxtQkFBQSxJQUFJLENBQUMsRUFBRSxDQUFDLGNBQWMsRUFBWTtZQUNsRCxLQUFLLEVBQUUsbUJBQUEsQ0FB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Q0FBQztnQkFDNUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQzthQUMxQjtTQUNGO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxxQkFBcUIsQ0FBQyxFQUF3QztRQUM1RCxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3hCLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNWLElBQUksS0FBSyxZQUFZLGFBQWEsRUFBRTtnQkFDbEMsQ0FBQyxtQkFBQSxLQUFLLEVBQWlCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUNwRDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELGVBQWU7UUFDYixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7SUFDbEMsQ0FBQzs7OztJQUVPLHdCQUF3QjtRQUM5QixJQUFJLENBQUMscUJBQXFCLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDcEMsUUFBUSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELE1BQU07UUFDSixPQUFPLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQzVCLENBQUM7Q0FDRjs7O0lBOUNDLG1DQUFvRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRGVsb25Gb3JtQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7IEVycm9yRGF0YSB9IGZyb20gJy4uL2Vycm9ycyc7XG5pbXBvcnQgeyBTRlZhbHVlIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IFNGU2NoZW1hIH0gZnJvbSAnLi4vc2NoZW1hJztcbmltcG9ydCB7IFNGVUlTY2hlbWEsIFNGVUlTY2hlbWFJdGVtLCBTRlVJU2NoZW1hSXRlbVJ1biB9IGZyb20gJy4uL3NjaGVtYS91aSc7XG5pbXBvcnQgeyBpc0JsYW5rIH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSB9IGZyb20gJy4uL3ZhbGlkYXRvci5mYWN0b3J5JztcbmltcG9ydCB7IFdpZGdldCB9IGZyb20gJy4uL3dpZGdldCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGb3JtUHJvcGVydHkge1xuICBzY2hlbWFWYWxpZGF0b3I6ICh2YWx1ZTogU0ZWYWx1ZSkgPT4gRXJyb3JEYXRhW107XG4gIHNjaGVtYTogU0ZTY2hlbWE7XG4gIHVpOiBTRlVJU2NoZW1hIHwgU0ZVSVNjaGVtYUl0ZW1SdW47XG4gIGZvcm1EYXRhOiB7fTtcbiAgX3ZhbHVlOiBTRlZhbHVlID0gbnVsbDtcbiAgd2lkZ2V0OiBXaWRnZXQ8Rm9ybVByb3BlcnR5PjtcbiAgcHJpdmF0ZSBfZXJyb3JzOiBFcnJvckRhdGFbXSA9IG51bGw7XG4gIHByb3RlY3RlZCBfb2JqRXJyb3JzOiB7IFtrZXk6IHN0cmluZ106IEVycm9yRGF0YVtdIH0gPSB7fTtcbiAgcHJpdmF0ZSBfdmFsdWVDaGFuZ2VzID0gbmV3IEJlaGF2aW9yU3ViamVjdDxTRlZhbHVlPihudWxsKTtcbiAgcHJpdmF0ZSBfZXJyb3JzQ2hhbmdlcyA9IG5ldyBCZWhhdmlvclN1YmplY3Q8RXJyb3JEYXRhW10+KG51bGwpO1xuICBwcml2YXRlIF92aXNpYmxlID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfdmlzaWJpbGl0eUNoYW5nZXMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KHRydWUpO1xuICBwcml2YXRlIF9yb290OiBQcm9wZXJ0eUdyb3VwO1xuICBwcml2YXRlIF9wYXJlbnQ6IFByb3BlcnR5R3JvdXA7XG4gIHByaXZhdGUgX3BhdGg6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBzY2hlbWFWYWxpZGF0b3JGYWN0b3J5OiBTY2hlbWFWYWxpZGF0b3JGYWN0b3J5LFxuICAgIHNjaGVtYTogU0ZTY2hlbWEsXG4gICAgdWk6IFNGVUlTY2hlbWEgfCBTRlVJU2NoZW1hSXRlbSxcbiAgICBmb3JtRGF0YToge30sXG4gICAgcGFyZW50OiBQcm9wZXJ0eUdyb3VwLFxuICAgIHBhdGg6IHN0cmluZyxcbiAgICBwcml2YXRlIG9wdGlvbnM6IERlbG9uRm9ybUNvbmZpZyxcbiAgKSB7XG4gICAgdGhpcy5zY2hlbWEgPSBzY2hlbWE7XG4gICAgdGhpcy51aSA9IHVpO1xuICAgIHRoaXMuc2NoZW1hVmFsaWRhdG9yID0gc2NoZW1hVmFsaWRhdG9yRmFjdG9yeS5jcmVhdGVWYWxpZGF0b3JGbihzY2hlbWEsIHtcbiAgICAgIGluZ29yZUtleXdvcmRzOiB0aGlzLnVpLmluZ29yZUtleXdvcmRzIGFzIHN0cmluZ1tdLFxuICAgICAgZGVidWc6ICh1aSBhcyBTRlVJU2NoZW1hSXRlbSkhLmRlYnVnLFxuICAgIH0pO1xuICAgIHRoaXMuZm9ybURhdGEgPSBmb3JtRGF0YSB8fCBzY2hlbWEuZGVmYXVsdDtcbiAgICB0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgdGhpcy5fcm9vdCA9IHBhcmVudC5yb290O1xuICAgIH0gZWxzZSBpZiAodGhpcyBpbnN0YW5jZW9mIFByb3BlcnR5R3JvdXApIHtcbiAgICAgIHRoaXMuX3Jvb3QgPSB0aGlzIGFzIFByb3BlcnR5R3JvdXA7XG4gICAgfVxuICAgIHRoaXMuX3BhdGggPSBwYXRoO1xuICB9XG5cbiAgZ2V0IHZhbHVlQ2hhbmdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWVDaGFuZ2VzO1xuICB9XG5cbiAgZ2V0IGVycm9yc0NoYW5nZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Vycm9yc0NoYW5nZXM7XG4gIH1cblxuICBnZXQgdHlwZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnNjaGVtYS50eXBlO1xuICB9XG5cbiAgZ2V0IHBhcmVudCgpOiBQcm9wZXJ0eUdyb3VwIHtcbiAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xuICB9XG5cbiAgZ2V0IHJvb3QoKTogUHJvcGVydHlHcm91cCB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgIHJldHVybiB0aGlzLl9yb290IHx8ICgodGhpcyBhcyBhbnkpIGFzIFByb3BlcnR5R3JvdXApO1xuICB9XG5cbiAgZ2V0IHBhdGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fcGF0aDtcbiAgfVxuXG4gIGdldCB2YWx1ZSgpOiBTRlZhbHVlIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICBnZXQgZXJyb3JzKCk6IEVycm9yRGF0YVtdIHtcbiAgICByZXR1cm4gdGhpcy5fZXJyb3JzO1xuICB9XG5cbiAgZ2V0IHZpc2libGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Zpc2libGU7XG4gIH1cblxuICBnZXQgdmFsaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Vycm9ycyA9PT0gbnVsbCB8fCB0aGlzLl9lcnJvcnMubGVuZ3RoID09PSAwO1xuICB9XG5cbiAgLyoqXG4gICAqIOiuvue9ruWAvFxuICAgKlxuICAgKiBAcGFyYW0gb25seVNlbGYgYHRydWVgIOWPquWvueW9k+WJjeWtl+auteabtOaWsOWAvOWSjOagoemqjO+8m2BmYWxzZWAg5YyF5ZCr5LiK57qn5a2X5q61XG4gICAqL1xuICBhYnN0cmFjdCBzZXRWYWx1ZSh2YWx1ZTogU0ZWYWx1ZSwgb25seVNlbGY6IGJvb2xlYW4pOiB2b2lkO1xuXG4gIC8qKlxuICAgKiDph43nva7lgLzvvIzpu5jorqTlgLzkuLogYHNjaGVtYS5kZWZhdWx0YFxuICAgKlxuICAgKiBAcGFyYW0gb25seVNlbGYgYHRydWVgIOWPquWvueW9k+WJjeWtl+auteabtOaWsOWAvOWSjOagoemqjO+8m2BmYWxzZWAg5YyF5ZCr5LiK57qn5a2X5q61XG4gICAqL1xuICBhYnN0cmFjdCByZXNldFZhbHVlKHZhbHVlOiBTRlZhbHVlLCBvbmx5U2VsZjogYm9vbGVhbik6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgYWJzdHJhY3QgX2hhc1ZhbHVlKCk6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqICBAaW50ZXJuYWxcbiAgICovXG4gIGFic3RyYWN0IF91cGRhdGVWYWx1ZSgpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiDmm7TmlrDlgLzkuJTmoKHpqozmlbDmja5cbiAgICpcbiAgICogQHBhcmFtIFtvbmx5U2VsZj1mYWxzZV0g5piv5ZCm5YyF5ZCr5LiK57qn5a2X5q61XG4gICAqIEBwYXJhbSBbZW1pdFZhbHVlRXZlbnQ9dHJ1ZV0g5piv5ZCm6Kem5Y+R5YC85Y+Y5pu06YCa55+lXG4gICAqL1xuICB1cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KG9ubHlTZWxmID0gZmFsc2UsIGVtaXRWYWx1ZUV2ZW50ID0gdHJ1ZSwgZW1pdFZhbGlkYXRvciA9IHRydWUpIHtcbiAgICB0aGlzLl91cGRhdGVWYWx1ZSgpO1xuXG4gICAgaWYgKGVtaXRWYWx1ZUV2ZW50KSB7XG4gICAgICB0aGlzLnZhbHVlQ2hhbmdlcy5uZXh0KHRoaXMudmFsdWUpO1xuICAgIH1cblxuICAgIC8vIGBlbWl0VmFsaWRhdG9yYCDmr4/kuIDmrKHmlbDmja7lj5jmm7Tlt7Lnu4/ljIXlkKvlrozmlbTplJnor6/pk77ot6/vvIzlkI7nu63niLboioLngrnmlbDmja7lj5jmm7Tml6Dpobvlho3op6blj5HmoKHpqoxcbiAgICBpZiAoZW1pdFZhbGlkYXRvciAmJiB0aGlzLnVpLmxpdmVWYWxpZGF0ZSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5fcnVuVmFsaWRhdGlvbigpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnBhcmVudCAmJiAhb25seVNlbGYpIHtcbiAgICAgIHRoaXMucGFyZW50LnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkob25seVNlbGYsIGVtaXRWYWx1ZUV2ZW50LCBmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIOagueaNrui3r+W+hOaQnOe0ouihqOWNleWxnuaApyAqL1xuICBzZWFyY2hQcm9wZXJ0eShwYXRoOiBzdHJpbmcpOiBGb3JtUHJvcGVydHkge1xuICAgIGxldCBwcm9wOiBGb3JtUHJvcGVydHkgPSB0aGlzO1xuICAgIGxldCBiYXNlOiBQcm9wZXJ0eUdyb3VwID0gbnVsbDtcblxuICAgIGxldCByZXN1bHQgPSBudWxsO1xuICAgIGlmIChwYXRoWzBdID09PSAnLycpIHtcbiAgICAgIGJhc2UgPSB0aGlzLmZpbmRSb290KCk7XG4gICAgICByZXN1bHQgPSBiYXNlLmdldFByb3BlcnR5KHBhdGguc3Vic3RyKDEpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2hpbGUgKHJlc3VsdCA9PT0gbnVsbCAmJiBwcm9wLnBhcmVudCAhPT0gbnVsbCkge1xuICAgICAgICBwcm9wID0gYmFzZSA9IHByb3AucGFyZW50O1xuICAgICAgICByZXN1bHQgPSBiYXNlLmdldFByb3BlcnR5KHBhdGgpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqIOafpeaJvuagueihqOWNleWxnuaApyAqL1xuICBmaW5kUm9vdCgpOiBQcm9wZXJ0eUdyb3VwIHtcbiAgICBsZXQgcHJvcGVydHk6IEZvcm1Qcm9wZXJ0eSA9IHRoaXM7XG4gICAgd2hpbGUgKHByb3BlcnR5LnBhcmVudCAhPT0gbnVsbCkge1xuICAgICAgcHJvcGVydHkgPSBwcm9wZXJ0eS5wYXJlbnQ7XG4gICAgfVxuICAgIHJldHVybiBwcm9wZXJ0eSBhcyBQcm9wZXJ0eUdyb3VwO1xuICB9XG5cbiAgLy8gI3JlZ2lvbiBwcm9jZXNzIGVycm9yc1xuXG4gIHByaXZhdGUgaXNFbXB0eURhdGEodmFsdWU6IHt9KSB7XG4gICAgaWYgKGlzQmxhbmsodmFsdWUpKSByZXR1cm4gdHJ1ZTtcbiAgICBzd2l0Y2ggKHRoaXMudHlwZSkge1xuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgcmV0dXJuICgnJyArIHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIF9ydW5WYWxpZGF0aW9uKCkge1xuICAgIGxldCBlcnJvcnM6IEVycm9yRGF0YVtdO1xuICAgIC8vIFRoZSBkZWZpbml0aW9uIG9mIHNvbWUgcnVsZXM6XG4gICAgLy8gMS4gU2hvdWxkIG5vdCBhanYgdmFsaWRhdG9yIHdoZW4gaXMgZW1wdHkgZGF0YSBhbmQgcmVxdWlyZWQgZmllbGRzXG4gICAgLy8gMi4gU2hvdWxkIG5vdCBhanYgdmFsaWRhdG9yIHdoZW4gaXMgZW1wdHkgZGF0YVxuICAgIGNvbnN0IGlzRW1wdHkgPSB0aGlzLmlzRW1wdHlEYXRhKHRoaXMuX3ZhbHVlKTtcbiAgICBpZiAoaXNFbXB0eSAmJiB0aGlzLnVpLl9yZXF1aXJlZCkge1xuICAgICAgZXJyb3JzID0gW3sga2V5d29yZDogJ3JlcXVpcmVkJyB9XTtcbiAgICB9IGVsc2UgaWYgKGlzRW1wdHkpIHtcbiAgICAgIGVycm9ycyA9IFtdO1xuICAgIH0gZWxzZSB7XG4gICAgICBlcnJvcnMgPSB0aGlzLnNjaGVtYVZhbGlkYXRvcih0aGlzLl92YWx1ZSkgfHwgW107XG4gICAgfVxuICAgIGNvbnN0IGN1c3RvbVZhbGlkYXRvciA9ICh0aGlzLnVpIGFzIFNGVUlTY2hlbWFJdGVtUnVuKS52YWxpZGF0b3I7XG4gICAgaWYgKHR5cGVvZiBjdXN0b21WYWxpZGF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnN0IGN1c3RvbUVycm9ycyA9IGN1c3RvbVZhbGlkYXRvcih0aGlzLnZhbHVlLCB0aGlzLCB0aGlzLmZpbmRSb290KCkpO1xuICAgICAgaWYgKGN1c3RvbUVycm9ycyBpbnN0YW5jZW9mIE9ic2VydmFibGUpIHtcbiAgICAgICAgY3VzdG9tRXJyb3JzLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0Q3VzdG9tRXJyb3JzKGVycm9ycywgcmVzKTtcbiAgICAgICAgICB0aGlzLndpZGdldC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnNldEN1c3RvbUVycm9ycyhlcnJvcnMsIGN1c3RvbUVycm9ycyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fZXJyb3JzID0gZXJyb3JzO1xuICAgIHRoaXMuc2V0RXJyb3JzKHRoaXMuX2Vycm9ycyk7XG4gIH1cblxuICBwcml2YXRlIHNldEN1c3RvbUVycm9ycyhlcnJvcnM6IEVycm9yRGF0YVtdLCBsaXN0OiBFcnJvckRhdGFbXSkge1xuICAgIC8vIGZpeCBlcnJvciBmb3JtYXRcbiAgICBjb25zdCBoYXNDdXN0b21FcnJvciA9IGxpc3QgIT0gbnVsbCAmJiBsaXN0Lmxlbmd0aCA+IDA7XG4gICAgaWYgKGhhc0N1c3RvbUVycm9yKSB7XG4gICAgICBsaXN0LmZvckVhY2goKGVyciwgaWR4OiBudW1iZXIpID0+IHtcbiAgICAgICAgaWYgKCFlcnIubWVzc2FnZSlcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBjdXN0b20gdmFsaWRhdG9yIG11c3QgY29udGFpbiBhICdtZXNzYWdlJyBhdHRyaWJ1dGUgdG8gdmlld2VkIGVycm9yIHRleHRgKTtcbiAgICAgICAgZXJyLl9jdXN0b20gPSB0cnVlO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuX2Vycm9ycyA9IHRoaXMubWVyZ2VFcnJvcnMoZXJyb3JzLCBsaXN0KTtcbiAgICB0aGlzLnNldEVycm9ycyh0aGlzLl9lcnJvcnMpO1xuICB9XG5cbiAgcHJpdmF0ZSBtZXJnZUVycm9ycyhlcnJvcnM6IEVycm9yRGF0YVtdLCBuZXdFcnJvcnM6IEVycm9yRGF0YSB8IEVycm9yRGF0YVtdKSB7XG4gICAgaWYgKG5ld0Vycm9ycykge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkobmV3RXJyb3JzKSkge1xuICAgICAgICBlcnJvcnMgPSBlcnJvcnMuY29uY2F0KC4uLm5ld0Vycm9ycyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlcnJvcnMucHVzaChuZXdFcnJvcnMpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZXJyb3JzO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNldEVycm9ycyhlcnJvcnM6IEVycm9yRGF0YVtdLCBlbWl0Rm9ybWF0ID0gdHJ1ZSkge1xuICAgIGlmIChlbWl0Rm9ybWF0ICYmIGVycm9ycyAmJiAhdGhpcy51aS5vbmx5VmlzdWFsKSB7XG4gICAgICBlcnJvcnMgPSBlcnJvcnMubWFwKChlcnI6IEVycm9yRGF0YSkgPT4ge1xuICAgICAgICBsZXQgbWVzc2FnZSA9XG4gICAgICAgICAgZXJyLl9jdXN0b20gPT09IHRydWUgJiYgZXJyLm1lc3NhZ2VcbiAgICAgICAgICAgID8gZXJyLm1lc3NhZ2VcbiAgICAgICAgICAgIDogKHRoaXMudWkuZXJyb3JzIHx8IHt9KVtlcnIua2V5d29yZF0gfHwgdGhpcy5vcHRpb25zLmVycm9yc1tlcnIua2V5d29yZF0gfHwgYGA7XG5cbiAgICAgICAgaWYgKG1lc3NhZ2UgJiYgdHlwZW9mIG1lc3NhZ2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZShlcnIpIGFzIHN0cmluZztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtZXNzYWdlKSB7XG4gICAgICAgICAgaWYgKH4obWVzc2FnZSBhcyBzdHJpbmcpLmluZGV4T2YoJ3snKSkge1xuICAgICAgICAgICAgbWVzc2FnZSA9IChtZXNzYWdlIGFzIHN0cmluZykucmVwbGFjZShcbiAgICAgICAgICAgICAgL3soW1xcLmEtejAtOV0rKX0vZyxcbiAgICAgICAgICAgICAgKHY6IHN0cmluZywga2V5OiBzdHJpbmcpID0+IGVyci5wYXJhbXNba2V5XSB8fCAnJyxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVyci5tZXNzYWdlID0gbWVzc2FnZSBhcyBzdHJpbmc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVycjtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLl9lcnJvcnMgPSBlcnJvcnM7XG4gICAgdGhpcy5fZXJyb3JzQ2hhbmdlcy5uZXh0KGVycm9ycyk7XG4gICAgLy8gU2hvdWxkIHNlbmQgZXJyb3JzIHRvIHBhcmVudCBmaWVsZFxuICAgIGlmICh0aGlzLl9wYXJlbnQpIHtcbiAgICAgIHRoaXMuX3BhcmVudC5zZXRQYXJlbnRBbmRQbGF0RXJyb3JzKGVycm9ycywgdGhpcy5wYXRoKTtcbiAgICB9XG4gIH1cblxuICBzZXRQYXJlbnRBbmRQbGF0RXJyb3JzKGVycm9yczogRXJyb3JEYXRhW10sIHBhdGg6IHN0cmluZykge1xuICAgIHRoaXMuX29iakVycm9yc1twYXRoXSA9IGVycm9ycztcbiAgICBjb25zdCBwbGF0RXJyb3JzOiBFcnJvckRhdGFbXSA9IFtdO1xuICAgIE9iamVjdC5rZXlzKHRoaXMuX29iakVycm9ycykuZm9yRWFjaChwID0+IHtcbiAgICAgIGNvbnN0IHByb3BlcnR5ID0gdGhpcy5zZWFyY2hQcm9wZXJ0eShwKTtcbiAgICAgIGlmIChwcm9wZXJ0eSAmJiAhcHJvcGVydHkudmlzaWJsZSkgcmV0dXJuO1xuICAgICAgcGxhdEVycm9ycy5wdXNoKC4uLnRoaXMuX29iakVycm9yc1twXSk7XG4gICAgfSk7XG4gICAgdGhpcy5zZXRFcnJvcnMocGxhdEVycm9ycywgZmFsc2UpO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gY29uZGl0aW9uXG5cbiAgcHJpdmF0ZSBzZXRWaXNpYmxlKHZpc2libGU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl92aXNpYmxlID0gdmlzaWJsZTtcbiAgICB0aGlzLl92aXNpYmlsaXR5Q2hhbmdlcy5uZXh0KHZpc2libGUpO1xuICAgIC8vIOmDqOWIhuaVsOaNrua6kOadpeiHqiByZXNldFxuICAgIHRoaXMucmVzZXRWYWx1ZSh0aGlzLnZhbHVlLCB0cnVlKTtcbiAgfVxuXG4gIC8vIEEgZmllbGQgaXMgdmlzaWJsZSBpZiBBVCBMRUFTVCBPTkUgb2YgdGhlIHByb3BlcnRpZXMgaXQgZGVwZW5kcyBvbiBpcyB2aXNpYmxlIEFORCBoYXMgYSB2YWx1ZSBpbiB0aGUgbGlzdFxuICBfYmluZFZpc2liaWxpdHkoKSB7XG4gICAgY29uc3QgdmlzaWJsZUlmID0gKHRoaXMudWkgYXMgU0ZVSVNjaGVtYUl0ZW0pLnZpc2libGVJZjtcbiAgICBpZiAodHlwZW9mIHZpc2libGVJZiA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LmtleXModmlzaWJsZUlmKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgfSBlbHNlIGlmICh2aXNpYmxlSWYgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgcHJvcGVydGllc0JpbmRpbmc6IEFycmF5PE9ic2VydmFibGU8Ym9vbGVhbj4+ID0gW107XG4gICAgICBmb3IgKGNvbnN0IGRlcGVuZGVuY3lQYXRoIGluIHZpc2libGVJZikge1xuICAgICAgICBpZiAodmlzaWJsZUlmLmhhc093blByb3BlcnR5KGRlcGVuZGVuY3lQYXRoKSkge1xuICAgICAgICAgIGNvbnN0IHByb3BlcnR5ID0gdGhpcy5zZWFyY2hQcm9wZXJ0eShkZXBlbmRlbmN5UGF0aCk7XG4gICAgICAgICAgaWYgKHByb3BlcnR5KSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZUNoZWNrID0gcHJvcGVydHkudmFsdWVDaGFuZ2VzLnBpcGUoXG4gICAgICAgICAgICAgIG1hcCgodmFsdWU6IFNGVmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2aSA9IHZpc2libGVJZltkZXBlbmRlbmN5UGF0aF07XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2aSA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIHZpKHZhbHVlKTtcbiAgICAgICAgICAgICAgICBpZiAodmkuaW5kZXhPZignJEFOWSQnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPiAwO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdmkuaW5kZXhPZih2YWx1ZSkgIT09IC0xO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgdmlzaWJpbGl0eUNoZWNrID0gcHJvcGVydHkuX3Zpc2liaWxpdHlDaGFuZ2VzO1xuICAgICAgICAgICAgY29uc3QgYW5kID0gY29tYmluZUxhdGVzdCh2YWx1ZUNoZWNrLCB2aXNpYmlsaXR5Q2hlY2spLnBpcGUoXG4gICAgICAgICAgICAgIG1hcChyZXN1bHRzID0+IHJlc3VsdHNbMF0gJiYgcmVzdWx0c1sxXSksXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcHJvcGVydGllc0JpbmRpbmcucHVzaChhbmQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGBDYW4ndCBmaW5kIHByb3BlcnR5ICR7ZGVwZW5kZW5jeVBhdGh9IGZvciB2aXNpYmlsaXR5IGNoZWNrIG9mICR7dGhpcy5wYXRofWAsXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb21iaW5lTGF0ZXN0KHByb3BlcnRpZXNCaW5kaW5nKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAodmFsdWVzID0+IHZhbHVlcy5pbmRleE9mKHRydWUpICE9PSAtMSksXG4gICAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKHZpc2libGUgPT4gdGhpcy5zZXRWaXNpYmxlKHZpc2libGUpKTtcbiAgICB9XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQcm9wZXJ0eUdyb3VwIGV4dGVuZHMgRm9ybVByb3BlcnR5IHtcbiAgcHJvcGVydGllczogeyBba2V5OiBzdHJpbmddOiBGb3JtUHJvcGVydHkgfSB8IEZvcm1Qcm9wZXJ0eVtdID0gbnVsbDtcblxuICBnZXRQcm9wZXJ0eShwYXRoOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzdWJQYXRoSWR4ID0gcGF0aC5pbmRleE9mKCcvJyk7XG4gICAgY29uc3QgcHJvcGVydHlJZCA9IHN1YlBhdGhJZHggIT09IC0xID8gcGF0aC5zdWJzdHIoMCwgc3ViUGF0aElkeCkgOiBwYXRoO1xuXG4gICAgbGV0IHByb3BlcnR5ID0gdGhpcy5wcm9wZXJ0aWVzW3Byb3BlcnR5SWRdO1xuICAgIGlmIChwcm9wZXJ0eSAhPT0gbnVsbCAmJiBzdWJQYXRoSWR4ICE9PSAtMSAmJiBwcm9wZXJ0eSBpbnN0YW5jZW9mIFByb3BlcnR5R3JvdXApIHtcbiAgICAgIGNvbnN0IHN1YlBhdGggPSBwYXRoLnN1YnN0cihzdWJQYXRoSWR4ICsgMSk7XG4gICAgICBwcm9wZXJ0eSA9IChwcm9wZXJ0eSBhcyBQcm9wZXJ0eUdyb3VwKS5nZXRQcm9wZXJ0eShzdWJQYXRoKTtcbiAgICB9XG4gICAgcmV0dXJuIHByb3BlcnR5O1xuICB9XG5cbiAgZm9yRWFjaENoaWxkKGZuOiAoZm9ybVByb3BlcnR5OiBGb3JtUHJvcGVydHksIHN0cjogc3RyaW5nKSA9PiB2b2lkKSB7XG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eUlkIGluIHRoaXMucHJvcGVydGllcykge1xuICAgICAgaWYgKHRoaXMucHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eUlkKSkge1xuICAgICAgICBjb25zdCBwcm9wZXJ0eSA9IHRoaXMucHJvcGVydGllc1twcm9wZXJ0eUlkXTtcbiAgICAgICAgZm4ocHJvcGVydHksIHByb3BlcnR5SWQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZvckVhY2hDaGlsZFJlY3Vyc2l2ZShmbjogKGZvcm1Qcm9wZXJ0eTogRm9ybVByb3BlcnR5KSA9PiB2b2lkKSB7XG4gICAgdGhpcy5mb3JFYWNoQ2hpbGQoY2hpbGQgPT4ge1xuICAgICAgZm4oY2hpbGQpO1xuICAgICAgaWYgKGNoaWxkIGluc3RhbmNlb2YgUHJvcGVydHlHcm91cCkge1xuICAgICAgICAoY2hpbGQgYXMgUHJvcGVydHlHcm91cCkuZm9yRWFjaENoaWxkUmVjdXJzaXZlKGZuKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIF9iaW5kVmlzaWJpbGl0eSgpIHtcbiAgICBzdXBlci5fYmluZFZpc2liaWxpdHkoKTtcbiAgICB0aGlzLl9iaW5kVmlzaWJpbGl0eVJlY3Vyc2l2ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfYmluZFZpc2liaWxpdHlSZWN1cnNpdmUoKSB7XG4gICAgdGhpcy5mb3JFYWNoQ2hpbGRSZWN1cnNpdmUocHJvcGVydHkgPT4ge1xuICAgICAgcHJvcGVydHkuX2JpbmRWaXNpYmlsaXR5KCk7XG4gICAgfSk7XG4gIH1cblxuICBpc1Jvb3QoKSB7XG4gICAgcmV0dXJuIHRoaXMgPT09IHRoaXMucm9vdDtcbiAgfVxufVxuIl19