/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { PropertyGroup } from './form.property';
var ArrayProperty = /** @class */ (function (_super) {
    tslib_1.__extends(ArrayProperty, _super);
    function ArrayProperty(formPropertyFactory, schemaValidatorFactory, schema, ui, formData, parent, path, options) {
        var _this = _super.call(this, schemaValidatorFactory, schema, ui, formData, parent, path, options) || this;
        _this.formPropertyFactory = formPropertyFactory;
        _this.tick = 1;
        _this.properties = [];
        return _this;
    }
    /**
     * @param {?} path
     * @return {?}
     */
    ArrayProperty.prototype.getProperty = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        /** @type {?} */
        var subPathIdx = path.indexOf('/');
        /** @type {?} */
        var pos = +(subPathIdx !== -1 ? path.substr(0, subPathIdx) : path);
        /** @type {?} */
        var list = (/** @type {?} */ (this.properties));
        if (isNaN(pos) || pos >= list.length)
            return undefined;
        /** @type {?} */
        var subPath = path.substr(subPathIdx + 1);
        return list[pos].getProperty(subPath);
    };
    /**
     * @param {?} value
     * @param {?} onlySelf
     * @return {?}
     */
    ArrayProperty.prototype.setValue = /**
     * @param {?} value
     * @param {?} onlySelf
     * @return {?}
     */
    function (value, onlySelf) {
        this.properties = [];
        this.clearErrors();
        this.resetProperties(value);
        this.updateValueAndValidity(onlySelf, true);
    };
    /**
     * @param {?} value
     * @param {?} onlySelf
     * @return {?}
     */
    ArrayProperty.prototype.resetValue = /**
     * @param {?} value
     * @param {?} onlySelf
     * @return {?}
     */
    function (value, onlySelf) {
        this._value = value || this.schema.default || [];
        this.setValue(this._value, onlySelf);
    };
    /**
     * @return {?}
     */
    ArrayProperty.prototype._hasValue = /**
     * @return {?}
     */
    function () {
        return true;
    };
    /**
     * @return {?}
     */
    ArrayProperty.prototype._updateValue = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var value = [];
        this.forEachChild((/**
         * @param {?} property
         * @return {?}
         */
        function (property) {
            if (property.visible && property._hasValue()) {
                value.push(tslib_1.__assign({}, property.formData, property.value));
            }
        }));
        this._value = value;
    };
    /**
     * @private
     * @param {?} formData
     * @return {?}
     */
    ArrayProperty.prototype.addProperty = /**
     * @private
     * @param {?} formData
     * @return {?}
     */
    function (formData) {
        /** @type {?} */
        var newProperty = (/** @type {?} */ (this.formPropertyFactory.createProperty(this.schema.items, this.ui.$items, formData, this)));
        ((/** @type {?} */ (this.properties))).push(newProperty);
        return newProperty;
    };
    /**
     * @private
     * @param {?} formDatas
     * @return {?}
     */
    ArrayProperty.prototype.resetProperties = /**
     * @private
     * @param {?} formDatas
     * @return {?}
     */
    function (formDatas) {
        var e_1, _a;
        try {
            for (var formDatas_1 = tslib_1.__values(formDatas), formDatas_1_1 = formDatas_1.next(); !formDatas_1_1.done; formDatas_1_1 = formDatas_1.next()) {
                var item = formDatas_1_1.value;
                /** @type {?} */
                var property = this.addProperty(item);
                property.resetValue(item, true);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (formDatas_1_1 && !formDatas_1_1.done && (_a = formDatas_1.return)) _a.call(formDatas_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * @private
     * @param {?=} path
     * @return {?}
     */
    ArrayProperty.prototype.clearErrors = /**
     * @private
     * @param {?=} path
     * @return {?}
     */
    function (path) {
        if (path)
            delete this._objErrors[path];
        else
            this._objErrors = {};
    };
    // #region actions
    // #region actions
    /**
     * @param {?} formData
     * @return {?}
     */
    ArrayProperty.prototype.add = 
    // #region actions
    /**
     * @param {?} formData
     * @return {?}
     */
    function (formData) {
        /** @type {?} */
        var newProperty = this.addProperty(formData);
        newProperty.resetValue(formData, false);
        return newProperty;
    };
    /**
     * @param {?} index
     * @return {?}
     */
    ArrayProperty.prototype.remove = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var list = (/** @type {?} */ (this.properties));
        this.clearErrors(list[index].path);
        list.splice(index, 1);
        this.updateValueAndValidity(false, true);
    };
    return ArrayProperty;
}(PropertyGroup));
export { ArrayProperty };
if (false) {
    /** @type {?} */
    ArrayProperty.prototype.tick;
    /**
     * @type {?}
     * @private
     */
    ArrayProperty.prototype.formPropertyFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXkucHJvcGVydHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vZm9ybS8iLCJzb3VyY2VzIjpbInNyYy9tb2RlbC9hcnJheS5wcm9wZXJ0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUtBLE9BQU8sRUFBZ0IsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFJOUQ7SUFBbUMseUNBQWE7SUFHOUMsdUJBQ1UsbUJBQXdDLEVBQ2hELHNCQUE4QyxFQUM5QyxNQUFnQixFQUNoQixFQUErQixFQUMvQixRQUFZLEVBQ1osTUFBcUIsRUFDckIsSUFBWSxFQUNaLE9BQXdCO1FBUjFCLFlBVUUsa0JBQU0sc0JBQXNCLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsU0FFM0U7UUFYUyx5QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBSGxELFVBQUksR0FBRyxDQUFDLENBQUM7UUFhUCxLQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQzs7SUFDdkIsQ0FBQzs7Ozs7SUFFRCxtQ0FBVzs7OztJQUFYLFVBQVksSUFBWTs7WUFDaEIsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDOztZQUM5QixHQUFHLEdBQUcsQ0FBQyxDQUFDLFVBQVUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQzs7WUFDOUQsSUFBSSxHQUFHLG1CQUFBLElBQUksQ0FBQyxVQUFVLEVBQW1CO1FBQy9DLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTTtZQUFFLE9BQU8sU0FBUyxDQUFDOztZQUNqRCxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQzNDLE9B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bkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBR0gsb0JBQUM7QUFBRCxDQUFDLEFBM0ZELENBQW1DLGFBQWEsR0EyRi9DOzs7O0lBMUZDLDZCQUFTOzs7OztJQUdQLDRDQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERlbG9uRm9ybUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBTRlZhbHVlIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IFNGU2NoZW1hIH0gZnJvbSAnLi4vc2NoZW1hL2luZGV4JztcbmltcG9ydCB7IFNGVUlTY2hlbWEsIFNGVUlTY2hlbWFJdGVtIH0gZnJvbSAnLi4vc2NoZW1hL3VpJztcbmltcG9ydCB7IFNjaGVtYVZhbGlkYXRvckZhY3RvcnkgfSBmcm9tICcuLi92YWxpZGF0b3IuZmFjdG9yeSc7XG5pbXBvcnQgeyBGb3JtUHJvcGVydHksIFByb3BlcnR5R3JvdXAgfSBmcm9tICcuL2Zvcm0ucHJvcGVydHknO1xuaW1wb3J0IHsgRm9ybVByb3BlcnR5RmFjdG9yeSB9IGZyb20gJy4vZm9ybS5wcm9wZXJ0eS5mYWN0b3J5JztcbmltcG9ydCB7IE9iamVjdFByb3BlcnR5IH0gZnJvbSAnLi9vYmplY3QucHJvcGVydHknO1xuXG5leHBvcnQgY2xhc3MgQXJyYXlQcm9wZXJ0eSBleHRlbmRzIFByb3BlcnR5R3JvdXAge1xuICB0aWNrID0gMTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGZvcm1Qcm9wZXJ0eUZhY3Rvcnk6IEZvcm1Qcm9wZXJ0eUZhY3RvcnksXG4gICAgc2NoZW1hVmFsaWRhdG9yRmFjdG9yeTogU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSxcbiAgICBzY2hlbWE6IFNGU2NoZW1hLFxuICAgIHVpOiBTRlVJU2NoZW1hIHwgU0ZVSVNjaGVtYUl0ZW0sXG4gICAgZm9ybURhdGE6IHt9LFxuICAgIHBhcmVudDogUHJvcGVydHlHcm91cCxcbiAgICBwYXRoOiBzdHJpbmcsXG4gICAgb3B0aW9uczogRGVsb25Gb3JtQ29uZmlnLFxuICApIHtcbiAgICBzdXBlcihzY2hlbWFWYWxpZGF0b3JGYWN0b3J5LCBzY2hlbWEsIHVpLCBmb3JtRGF0YSwgcGFyZW50LCBwYXRoLCBvcHRpb25zKTtcbiAgICB0aGlzLnByb3BlcnRpZXMgPSBbXTtcbiAgfVxuXG4gIGdldFByb3BlcnR5KHBhdGg6IHN0cmluZykge1xuICAgIGNvbnN0IHN1YlBhdGhJZHggPSBwYXRoLmluZGV4T2YoJy8nKTtcbiAgICBjb25zdCBwb3MgPSArKHN1YlBhdGhJZHggIT09IC0xID8gcGF0aC5zdWJzdHIoMCwgc3ViUGF0aElkeCkgOiBwYXRoKTtcbiAgICBjb25zdCBsaXN0ID0gdGhpcy5wcm9wZXJ0aWVzIGFzIFByb3BlcnR5R3JvdXBbXTtcbiAgICBpZiAoaXNOYU4ocG9zKSB8fCBwb3MgPj0gbGlzdC5sZW5ndGgpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgY29uc3Qgc3ViUGF0aCA9IHBhdGguc3Vic3RyKHN1YlBhdGhJZHggKyAxKTtcbiAgICByZXR1cm4gbGlzdFtwb3NdLmdldFByb3BlcnR5KHN1YlBhdGgpO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWU6IFNGVmFsdWUsIG9ubHlTZWxmOiBib29sZWFuKSB7XG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gW107XG4gICAgdGhpcy5jbGVhckVycm9ycygpO1xuICAgIHRoaXMucmVzZXRQcm9wZXJ0aWVzKHZhbHVlKTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkob25seVNlbGYsIHRydWUpO1xuICB9XG5cbiAgcmVzZXRWYWx1ZSh2YWx1ZTogU0ZWYWx1ZSwgb25seVNlbGY6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlIHx8IHRoaXMuc2NoZW1hLmRlZmF1bHQgfHwgW107XG4gICAgdGhpcy5zZXRWYWx1ZSh0aGlzLl92YWx1ZSwgb25seVNlbGYpO1xuICB9XG5cbiAgX2hhc1ZhbHVlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgX3VwZGF0ZVZhbHVlKCkge1xuICAgIGNvbnN0IHZhbHVlOiBhbnlbXSA9IFtdO1xuICAgIHRoaXMuZm9yRWFjaENoaWxkKChwcm9wZXJ0eTogT2JqZWN0UHJvcGVydHkpID0+IHtcbiAgICAgIGlmIChwcm9wZXJ0eS52aXNpYmxlICYmIHByb3BlcnR5Ll9oYXNWYWx1ZSgpKSB7XG4gICAgICAgIHZhbHVlLnB1c2goeyAuLi5wcm9wZXJ0eS5mb3JtRGF0YSwgLi4ucHJvcGVydHkudmFsdWUgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgYWRkUHJvcGVydHkoZm9ybURhdGE6IHt9KSB7XG4gICAgY29uc3QgbmV3UHJvcGVydHkgPSB0aGlzLmZvcm1Qcm9wZXJ0eUZhY3RvcnkuY3JlYXRlUHJvcGVydHkoXG4gICAgICB0aGlzLnNjaGVtYS5pdGVtcyxcbiAgICAgIHRoaXMudWkuJGl0ZW1zLFxuICAgICAgZm9ybURhdGEsXG4gICAgICB0aGlzLFxuICAgICkgYXMgT2JqZWN0UHJvcGVydHk7XG4gICAgKHRoaXMucHJvcGVydGllcyBhcyBGb3JtUHJvcGVydHlbXSkucHVzaChuZXdQcm9wZXJ0eSk7XG4gICAgcmV0dXJuIG5ld1Byb3BlcnR5O1xuICB9XG5cbiAgcHJpdmF0ZSByZXNldFByb3BlcnRpZXMoZm9ybURhdGFzOiBBcnJheTx7fT4pIHtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZm9ybURhdGFzKSB7XG4gICAgICBjb25zdCBwcm9wZXJ0eSA9IHRoaXMuYWRkUHJvcGVydHkoaXRlbSk7XG4gICAgICBwcm9wZXJ0eS5yZXNldFZhbHVlKGl0ZW0sIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJFcnJvcnMocGF0aD86IHN0cmluZykge1xuICAgIGlmIChwYXRoKSBkZWxldGUgdGhpcy5fb2JqRXJyb3JzW3BhdGhdO1xuICAgIGVsc2UgdGhpcy5fb2JqRXJyb3JzID0ge307XG4gIH1cblxuICAvLyAjcmVnaW9uIGFjdGlvbnNcblxuICBhZGQoZm9ybURhdGE6IHt9KTogRm9ybVByb3BlcnR5IHtcbiAgICBjb25zdCBuZXdQcm9wZXJ0eSA9IHRoaXMuYWRkUHJvcGVydHkoZm9ybURhdGEpO1xuICAgIG5ld1Byb3BlcnR5LnJlc2V0VmFsdWUoZm9ybURhdGEsIGZhbHNlKTtcbiAgICByZXR1cm4gbmV3UHJvcGVydHk7XG4gIH1cblxuICByZW1vdmUoaW5kZXg6IG51bWJlcikge1xuICAgIGNvbnN0IGxpc3QgPSB0aGlzLnByb3BlcnRpZXMgYXMgRm9ybVByb3BlcnR5W107XG4gICAgdGhpcy5jbGVhckVycm9ycyhsaXN0W2luZGV4XS5wYXRoKTtcbiAgICBsaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KGZhbHNlLCB0cnVlKTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cbn1cbiJdfQ==