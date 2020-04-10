/**
 * @fileoverview added by tsickle
 * Generated from: src/model/object.property.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __extends } from "tslib";
import { orderProperties } from '../utils';
import { PropertyGroup } from './form.property';
var ObjectProperty = /** @class */ (function (_super) {
    __extends(ObjectProperty, _super);
    function ObjectProperty(formPropertyFactory, schemaValidatorFactory, schema, ui, formData, parent, path, options) {
        var _this = _super.call(this, schemaValidatorFactory, schema, ui, formData, parent, path, options) || this;
        _this.formPropertyFactory = formPropertyFactory;
        _this._propertiesId = [];
        _this.createProperties();
        return _this;
    }
    Object.defineProperty(ObjectProperty.prototype, "propertiesId", {
        get: /**
         * @return {?}
         */
        function () {
            return this._propertiesId;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    ObjectProperty.prototype.createProperties = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.properties = {};
        this._propertiesId = [];
        /** @type {?} */
        var orderedProperties;
        try {
            orderedProperties = orderProperties(Object.keys((/** @type {?} */ (this.schema.properties))), (/** @type {?} */ (this.ui.order)));
        }
        catch (e) {
            console.error("Invalid " + (this.schema.title || 'root') + " object field configuration:", e);
        }
        (/** @type {?} */ (orderedProperties)).forEach((/**
         * @param {?} propertyId
         * @return {?}
         */
        function (propertyId) {
            ((/** @type {?} */ (_this.properties)))[propertyId] = _this.formPropertyFactory.createProperty((/** @type {?} */ (_this.schema.properties))[propertyId], _this.ui['$' + propertyId], ((/** @type {?} */ ((_this.formData || {}))))[propertyId], _this, propertyId);
            _this._propertiesId.push(propertyId);
        }));
    };
    /**
     * @param {?} value
     * @param {?} onlySelf
     * @return {?}
     */
    ObjectProperty.prototype.setValue = /**
     * @param {?} value
     * @param {?} onlySelf
     * @return {?}
     */
    function (value, onlySelf) {
        /** @type {?} */
        var properties = (/** @type {?} */ (this.properties));
        for (var propertyId in value) {
            if (value.hasOwnProperty(propertyId) && properties[propertyId]) {
                ((/** @type {?} */ (properties[propertyId]))).setValue(value[propertyId], true);
            }
        }
        this.updateValueAndValidity(onlySelf, true);
    };
    /**
     * @param {?} value
     * @param {?} onlySelf
     * @return {?}
     */
    ObjectProperty.prototype.resetValue = /**
     * @param {?} value
     * @param {?} onlySelf
     * @return {?}
     */
    function (value, onlySelf) {
        value = value || this.schema.default || {};
        /** @type {?} */
        var properties = (/** @type {?} */ (this.properties));
        // tslint:disable-next-line: forin
        for (var propertyId in this.schema.properties) {
            properties[propertyId].resetValue(value[propertyId], true);
        }
        this.updateValueAndValidity(onlySelf, true);
    };
    /**
     * @return {?}
     */
    ObjectProperty.prototype._hasValue = /**
     * @return {?}
     */
    function () {
        return this.value != null && !!Object.keys(this.value).length;
    };
    /**
     * @return {?}
     */
    ObjectProperty.prototype._updateValue = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var value = {};
        this.forEachChild((/**
         * @param {?} property
         * @param {?} propertyId
         * @return {?}
         */
        function (property, propertyId) {
            if (property.visible && property._hasValue()) {
                value[propertyId] = property.value;
            }
        }));
        this._value = value;
    };
    return ObjectProperty;
}(PropertyGroup));
export { ObjectProperty };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ObjectProperty.prototype._propertiesId;
    /**
     * @type {?}
     * @private
     */
    ObjectProperty.prototype.formPropertyFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0LnByb3BlcnR5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvbW9kZWwvb2JqZWN0LnByb3BlcnR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUtBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFM0MsT0FBTyxFQUFnQixhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUc5RDtJQUFvQyxrQ0FBYTtJQU8vQyx3QkFDVSxtQkFBd0MsRUFDaEQsc0JBQThDLEVBQzlDLE1BQWdCLEVBQ2hCLEVBQStCLEVBQy9CLFFBQW1CLEVBQ25CLE1BQTRCLEVBQzVCLElBQVksRUFDWixPQUF3QjtRQVIxQixZQVVFLGtCQUFNLHNCQUFzQixFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLFNBRTNFO1FBWFMseUJBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQVAxQyxtQkFBYSxHQUFhLEVBQUUsQ0FBQztRQWlCbkMsS0FBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7O0lBQzFCLENBQUM7SUFoQkQsc0JBQUksd0NBQVk7Ozs7UUFBaEI7WUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7Ozs7O0lBZ0JPLHlDQUFnQjs7OztJQUF4QjtRQUFBLGlCQW1CQztRQWxCQyxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQzs7WUFDcEIsaUJBQTJCO1FBQy9CLElBQUk7WUFDRixpQkFBaUIsR0FBRyxlQUFlLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBQSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUUsbUJBQUEsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQVksQ0FBQyxDQUFDO1NB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cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IERlbG9uRm9ybUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBTRlZhbHVlIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IFNGU2NoZW1hIH0gZnJvbSAnLi4vc2NoZW1hL2luZGV4JztcbmltcG9ydCB7IFNGVUlTY2hlbWEsIFNGVUlTY2hlbWFJdGVtIH0gZnJvbSAnLi4vc2NoZW1hL3VpJztcbmltcG9ydCB7IG9yZGVyUHJvcGVydGllcyB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IFNjaGVtYVZhbGlkYXRvckZhY3RvcnkgfSBmcm9tICcuLi92YWxpZGF0b3IuZmFjdG9yeSc7XG5pbXBvcnQgeyBGb3JtUHJvcGVydHksIFByb3BlcnR5R3JvdXAgfSBmcm9tICcuL2Zvcm0ucHJvcGVydHknO1xuaW1wb3J0IHsgRm9ybVByb3BlcnR5RmFjdG9yeSB9IGZyb20gJy4vZm9ybS5wcm9wZXJ0eS5mYWN0b3J5JztcblxuZXhwb3J0IGNsYXNzIE9iamVjdFByb3BlcnR5IGV4dGVuZHMgUHJvcGVydHlHcm91cCB7XG4gIHByaXZhdGUgX3Byb3BlcnRpZXNJZDogc3RyaW5nW10gPSBbXTtcblxuICBnZXQgcHJvcGVydGllc0lkKCkge1xuICAgIHJldHVybiB0aGlzLl9wcm9wZXJ0aWVzSWQ7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGZvcm1Qcm9wZXJ0eUZhY3Rvcnk6IEZvcm1Qcm9wZXJ0eUZhY3RvcnksXG4gICAgc2NoZW1hVmFsaWRhdG9yRmFjdG9yeTogU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSxcbiAgICBzY2hlbWE6IFNGU2NoZW1hLFxuICAgIHVpOiBTRlVJU2NoZW1hIHwgU0ZVSVNjaGVtYUl0ZW0sXG4gICAgZm9ybURhdGE6IE56U2FmZUFueSxcbiAgICBwYXJlbnQ6IFByb3BlcnR5R3JvdXAgfCBudWxsLFxuICAgIHBhdGg6IHN0cmluZyxcbiAgICBvcHRpb25zOiBEZWxvbkZvcm1Db25maWcsXG4gICkge1xuICAgIHN1cGVyKHNjaGVtYVZhbGlkYXRvckZhY3RvcnksIHNjaGVtYSwgdWksIGZvcm1EYXRhLCBwYXJlbnQsIHBhdGgsIG9wdGlvbnMpO1xuICAgIHRoaXMuY3JlYXRlUHJvcGVydGllcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVQcm9wZXJ0aWVzKCkge1xuICAgIHRoaXMucHJvcGVydGllcyA9IHt9O1xuICAgIHRoaXMuX3Byb3BlcnRpZXNJZCA9IFtdO1xuICAgIGxldCBvcmRlcmVkUHJvcGVydGllczogc3RyaW5nW107XG4gICAgdHJ5IHtcbiAgICAgIG9yZGVyZWRQcm9wZXJ0aWVzID0gb3JkZXJQcm9wZXJ0aWVzKE9iamVjdC5rZXlzKHRoaXMuc2NoZW1hLnByb3BlcnRpZXMhKSwgdGhpcy51aS5vcmRlciBhcyBzdHJpbmdbXSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihgSW52YWxpZCAke3RoaXMuc2NoZW1hLnRpdGxlIHx8ICdyb290J30gb2JqZWN0IGZpZWxkIGNvbmZpZ3VyYXRpb246YCwgZSk7XG4gICAgfVxuICAgIG9yZGVyZWRQcm9wZXJ0aWVzIS5mb3JFYWNoKHByb3BlcnR5SWQgPT4ge1xuICAgICAgKHRoaXMucHJvcGVydGllcyBhcyB7IFtrZXk6IHN0cmluZ106IEZvcm1Qcm9wZXJ0eSB9KVtwcm9wZXJ0eUlkXSA9IHRoaXMuZm9ybVByb3BlcnR5RmFjdG9yeS5jcmVhdGVQcm9wZXJ0eShcbiAgICAgICAgdGhpcy5zY2hlbWEucHJvcGVydGllcyFbcHJvcGVydHlJZF0sXG4gICAgICAgIHRoaXMudWlbJyQnICsgcHJvcGVydHlJZF0sXG4gICAgICAgICgodGhpcy5mb3JtRGF0YSB8fCB7fSkgYXMgTnpTYWZlQW55KVtwcm9wZXJ0eUlkXSxcbiAgICAgICAgdGhpcyxcbiAgICAgICAgcHJvcGVydHlJZCxcbiAgICAgICk7XG4gICAgICB0aGlzLl9wcm9wZXJ0aWVzSWQucHVzaChwcm9wZXJ0eUlkKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlOiBTRlZhbHVlLCBvbmx5U2VsZjogYm9vbGVhbikge1xuICAgIGNvbnN0IHByb3BlcnRpZXMgPSB0aGlzLnByb3BlcnRpZXMgYXMgeyBba2V5OiBzdHJpbmddOiBGb3JtUHJvcGVydHkgfTtcbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5SWQgaW4gdmFsdWUpIHtcbiAgICAgIGlmICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eUlkKSAmJiBwcm9wZXJ0aWVzW3Byb3BlcnR5SWRdKSB7XG4gICAgICAgIChwcm9wZXJ0aWVzW3Byb3BlcnR5SWRdIGFzIEZvcm1Qcm9wZXJ0eSkuc2V0VmFsdWUodmFsdWVbcHJvcGVydHlJZF0sIHRydWUpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkob25seVNlbGYsIHRydWUpO1xuICB9XG5cbiAgcmVzZXRWYWx1ZSh2YWx1ZTogU0ZWYWx1ZSwgb25seVNlbGY6IGJvb2xlYW4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHRoaXMuc2NoZW1hLmRlZmF1bHQgfHwge307XG4gICAgY29uc3QgcHJvcGVydGllcyA9IHRoaXMucHJvcGVydGllcyBhcyB7IFtrZXk6IHN0cmluZ106IEZvcm1Qcm9wZXJ0eSB9O1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZm9yaW5cbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5SWQgaW4gdGhpcy5zY2hlbWEucHJvcGVydGllcykge1xuICAgICAgcHJvcGVydGllc1twcm9wZXJ0eUlkXS5yZXNldFZhbHVlKHZhbHVlW3Byb3BlcnR5SWRdLCB0cnVlKTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KG9ubHlTZWxmLCB0cnVlKTtcbiAgfVxuXG4gIF9oYXNWYWx1ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZSAhPSBudWxsICYmICEhT2JqZWN0LmtleXModGhpcy52YWx1ZSkubGVuZ3RoO1xuICB9XG5cbiAgX3VwZGF0ZVZhbHVlKCkge1xuICAgIGNvbnN0IHZhbHVlOiBTRlZhbHVlID0ge307XG4gICAgdGhpcy5mb3JFYWNoQ2hpbGQoKHByb3BlcnR5LCBwcm9wZXJ0eUlkKSA9PiB7XG4gICAgICBpZiAocHJvcGVydHkudmlzaWJsZSAmJiBwcm9wZXJ0eS5faGFzVmFsdWUoKSkge1xuICAgICAgICB2YWx1ZVtwcm9wZXJ0eUlkXSA9IHByb3BlcnR5LnZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gIH1cbn1cbiJdfQ==