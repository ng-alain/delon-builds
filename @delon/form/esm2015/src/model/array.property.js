/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { PropertyGroup } from './form.property';
export class ArrayProperty extends PropertyGroup {
    /**
     * @param {?} formPropertyFactory
     * @param {?} schemaValidatorFactory
     * @param {?} schema
     * @param {?} ui
     * @param {?} formData
     * @param {?} parent
     * @param {?} path
     * @param {?} options
     */
    constructor(formPropertyFactory, schemaValidatorFactory, schema, ui, formData, parent, path, options) {
        super(schemaValidatorFactory, schema, ui, formData, parent, path, options);
        this.formPropertyFactory = formPropertyFactory;
        this.tick = 1;
        this.properties = [];
    }
    /**
     * @param {?} path
     * @return {?}
     */
    getProperty(path) {
        /** @type {?} */
        const subPathIdx = path.indexOf('/');
        /** @type {?} */
        const pos = +(subPathIdx !== -1 ? path.substr(0, subPathIdx) : path);
        /** @type {?} */
        const list = (/** @type {?} */ (this.properties));
        if (isNaN(pos) || pos >= list.length)
            return undefined;
        /** @type {?} */
        const subPath = path.substr(subPathIdx + 1);
        return list[pos].getProperty(subPath);
    }
    /**
     * @param {?} value
     * @param {?} onlySelf
     * @return {?}
     */
    setValue(value, onlySelf) {
        this.properties = [];
        this.clearErrors();
        this.resetProperties(value);
        this.updateValueAndValidity(onlySelf, true);
    }
    /**
     * @param {?} value
     * @param {?} onlySelf
     * @return {?}
     */
    resetValue(value, onlySelf) {
        this._value = value || this.schema.default || [];
        this.setValue(this._value, onlySelf);
    }
    /**
     * @return {?}
     */
    _hasValue() {
        return true;
    }
    /**
     * @return {?}
     */
    _updateValue() {
        /** @type {?} */
        const value = [];
        this.forEachChild((/**
         * @param {?} property
         * @return {?}
         */
        (property) => {
            if (property.visible && property._hasValue()) {
                value.push(Object.assign({}, property.formData, property.value));
            }
        }));
        this._value = value;
    }
    /**
     * @private
     * @param {?} formData
     * @return {?}
     */
    addProperty(formData) {
        /** @type {?} */
        const newProperty = (/** @type {?} */ (this.formPropertyFactory.createProperty((/** @type {?} */ (this.schema.items)), this.ui.$items, formData, this)));
        ((/** @type {?} */ (this.properties))).push(newProperty);
        return newProperty;
    }
    /**
     * @private
     * @param {?} formDatas
     * @return {?}
     */
    resetProperties(formDatas) {
        for (const item of formDatas) {
            /** @type {?} */
            const property = this.addProperty(item);
            property.resetValue(item, true);
        }
    }
    /**
     * @private
     * @param {?=} path
     * @return {?}
     */
    clearErrors(path) {
        if (path)
            delete this._objErrors[path];
        else
            this._objErrors = {};
    }
    // #region actions
    /**
     * @param {?} formData
     * @return {?}
     */
    add(formData) {
        /** @type {?} */
        const newProperty = this.addProperty(formData);
        newProperty.resetValue(formData, false);
        return newProperty;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    remove(index) {
        /** @type {?} */
        const list = (/** @type {?} */ (this.properties));
        this.clearErrors(list[index].path);
        list.splice(index, 1);
        this.updateValueAndValidity(false, true);
    }
}
if (false) {
    /** @type {?} */
    ArrayProperty.prototype.tick;
    /**
     * @type {?}
     * @private
     */
    ArrayProperty.prototype.formPropertyFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXkucHJvcGVydHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vZm9ybS8iLCJzb3VyY2VzIjpbInNyYy9tb2RlbC9hcnJheS5wcm9wZXJ0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBS0EsT0FBTyxFQUFnQixhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUk5RCxNQUFNLE9BQU8sYUFBYyxTQUFRLGFBQWE7Ozs7Ozs7Ozs7O0lBRzlDLFlBQ1UsbUJBQXdDLEVBQ2hELHNCQUE4QyxFQUM5QyxNQUFnQixFQUNoQixFQUErQixFQUMvQixRQUFZLEVBQ1osTUFBNEIsRUFDNUIsSUFBWSxFQUNaLE9BQXdCO1FBRXhCLEtBQUssQ0FBQyxzQkFBc0IsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBVG5FLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFIbEQsU0FBSSxHQUFHLENBQUMsQ0FBQztRQWFQLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLElBQVk7O2NBQ2hCLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQzs7Y0FDOUIsR0FBRyxHQUFHLENBQUMsQ0FBQyxVQUFVLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7O2NBQzlELElBQUksR0FBRyxtQkFBQSxJQUFJLENBQUMsVUFBVSxFQUFtQjtRQUMvQyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU07WUFBRSxPQUFPLFNBQVMsQ0FBQzs7Y0FDakQsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FB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MUZDLDZCQUFTOzs7OztJQUdQLDRDQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERlbG9uRm9ybUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBTRlZhbHVlIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IFNGU2NoZW1hIH0gZnJvbSAnLi4vc2NoZW1hL2luZGV4JztcbmltcG9ydCB7IFNGVUlTY2hlbWEsIFNGVUlTY2hlbWFJdGVtIH0gZnJvbSAnLi4vc2NoZW1hL3VpJztcbmltcG9ydCB7IFNjaGVtYVZhbGlkYXRvckZhY3RvcnkgfSBmcm9tICcuLi92YWxpZGF0b3IuZmFjdG9yeSc7XG5pbXBvcnQgeyBGb3JtUHJvcGVydHksIFByb3BlcnR5R3JvdXAgfSBmcm9tICcuL2Zvcm0ucHJvcGVydHknO1xuaW1wb3J0IHsgRm9ybVByb3BlcnR5RmFjdG9yeSB9IGZyb20gJy4vZm9ybS5wcm9wZXJ0eS5mYWN0b3J5JztcbmltcG9ydCB7IE9iamVjdFByb3BlcnR5IH0gZnJvbSAnLi9vYmplY3QucHJvcGVydHknO1xuXG5leHBvcnQgY2xhc3MgQXJyYXlQcm9wZXJ0eSBleHRlbmRzIFByb3BlcnR5R3JvdXAge1xuICB0aWNrID0gMTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGZvcm1Qcm9wZXJ0eUZhY3Rvcnk6IEZvcm1Qcm9wZXJ0eUZhY3RvcnksXG4gICAgc2NoZW1hVmFsaWRhdG9yRmFjdG9yeTogU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSxcbiAgICBzY2hlbWE6IFNGU2NoZW1hLFxuICAgIHVpOiBTRlVJU2NoZW1hIHwgU0ZVSVNjaGVtYUl0ZW0sXG4gICAgZm9ybURhdGE6IHt9LFxuICAgIHBhcmVudDogUHJvcGVydHlHcm91cCB8IG51bGwsXG4gICAgcGF0aDogc3RyaW5nLFxuICAgIG9wdGlvbnM6IERlbG9uRm9ybUNvbmZpZyxcbiAgKSB7XG4gICAgc3VwZXIoc2NoZW1hVmFsaWRhdG9yRmFjdG9yeSwgc2NoZW1hLCB1aSwgZm9ybURhdGEsIHBhcmVudCwgcGF0aCwgb3B0aW9ucyk7XG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gW107XG4gIH1cblxuICBnZXRQcm9wZXJ0eShwYXRoOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzdWJQYXRoSWR4ID0gcGF0aC5pbmRleE9mKCcvJyk7XG4gICAgY29uc3QgcG9zID0gKyhzdWJQYXRoSWR4ICE9PSAtMSA/IHBhdGguc3Vic3RyKDAsIHN1YlBhdGhJZHgpIDogcGF0aCk7XG4gICAgY29uc3QgbGlzdCA9IHRoaXMucHJvcGVydGllcyBhcyBQcm9wZXJ0eUdyb3VwW107XG4gICAgaWYgKGlzTmFOKHBvcykgfHwgcG9zID49IGxpc3QubGVuZ3RoKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIGNvbnN0IHN1YlBhdGggPSBwYXRoLnN1YnN0cihzdWJQYXRoSWR4ICsgMSk7XG4gICAgcmV0dXJuIGxpc3RbcG9zXS5nZXRQcm9wZXJ0eShzdWJQYXRoKTtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlOiBTRlZhbHVlLCBvbmx5U2VsZjogYm9vbGVhbikge1xuICAgIHRoaXMucHJvcGVydGllcyA9IFtdO1xuICAgIHRoaXMuY2xlYXJFcnJvcnMoKTtcbiAgICB0aGlzLnJlc2V0UHJvcGVydGllcyh2YWx1ZSk7XG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KG9ubHlTZWxmLCB0cnVlKTtcbiAgfVxuXG4gIHJlc2V0VmFsdWUodmFsdWU6IFNGVmFsdWUsIG9ubHlTZWxmOiBib29sZWFuKSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZSB8fCB0aGlzLnNjaGVtYS5kZWZhdWx0IHx8IFtdO1xuICAgIHRoaXMuc2V0VmFsdWUodGhpcy5fdmFsdWUsIG9ubHlTZWxmKTtcbiAgfVxuXG4gIF9oYXNWYWx1ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIF91cGRhdGVWYWx1ZSgpIHtcbiAgICBjb25zdCB2YWx1ZTogYW55W10gPSBbXTtcbiAgICB0aGlzLmZvckVhY2hDaGlsZCgocHJvcGVydHk6IEZvcm1Qcm9wZXJ0eSkgPT4ge1xuICAgICAgaWYgKHByb3BlcnR5LnZpc2libGUgJiYgcHJvcGVydHkuX2hhc1ZhbHVlKCkpIHtcbiAgICAgICAgdmFsdWUucHVzaCh7IC4uLnByb3BlcnR5LmZvcm1EYXRhLCAuLi5wcm9wZXJ0eS52YWx1ZSB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBhZGRQcm9wZXJ0eShmb3JtRGF0YToge30pIHtcbiAgICBjb25zdCBuZXdQcm9wZXJ0eSA9IHRoaXMuZm9ybVByb3BlcnR5RmFjdG9yeS5jcmVhdGVQcm9wZXJ0eShcbiAgICAgIHRoaXMuc2NoZW1hLml0ZW1zISxcbiAgICAgIHRoaXMudWkuJGl0ZW1zLFxuICAgICAgZm9ybURhdGEsXG4gICAgICB0aGlzLFxuICAgICkgYXMgT2JqZWN0UHJvcGVydHk7XG4gICAgKHRoaXMucHJvcGVydGllcyBhcyBGb3JtUHJvcGVydHlbXSkucHVzaChuZXdQcm9wZXJ0eSk7XG4gICAgcmV0dXJuIG5ld1Byb3BlcnR5O1xuICB9XG5cbiAgcHJpdmF0ZSByZXNldFByb3BlcnRpZXMoZm9ybURhdGFzOiBBcnJheTx7fT4pIHtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZm9ybURhdGFzKSB7XG4gICAgICBjb25zdCBwcm9wZXJ0eSA9IHRoaXMuYWRkUHJvcGVydHkoaXRlbSk7XG4gICAgICBwcm9wZXJ0eS5yZXNldFZhbHVlKGl0ZW0sIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJFcnJvcnMocGF0aD86IHN0cmluZykge1xuICAgIGlmIChwYXRoKSBkZWxldGUgdGhpcy5fb2JqRXJyb3JzW3BhdGhdO1xuICAgIGVsc2UgdGhpcy5fb2JqRXJyb3JzID0ge307XG4gIH1cblxuICAvLyAjcmVnaW9uIGFjdGlvbnNcblxuICBhZGQoZm9ybURhdGE6IHt9KTogRm9ybVByb3BlcnR5IHtcbiAgICBjb25zdCBuZXdQcm9wZXJ0eSA9IHRoaXMuYWRkUHJvcGVydHkoZm9ybURhdGEpO1xuICAgIG5ld1Byb3BlcnR5LnJlc2V0VmFsdWUoZm9ybURhdGEsIGZhbHNlKTtcbiAgICByZXR1cm4gbmV3UHJvcGVydHk7XG4gIH1cblxuICByZW1vdmUoaW5kZXg6IG51bWJlcikge1xuICAgIGNvbnN0IGxpc3QgPSB0aGlzLnByb3BlcnRpZXMgYXMgRm9ybVByb3BlcnR5W107XG4gICAgdGhpcy5jbGVhckVycm9ycyhsaXN0W2luZGV4XS5wYXRoKTtcbiAgICBsaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KGZhbHNlLCB0cnVlKTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cbn1cbiJdfQ==