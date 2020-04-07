/**
 * @fileoverview added by tsickle
 * Generated from: src/model/object.property.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { orderProperties } from '../utils';
import { PropertyGroup } from './form.property';
var ObjectProperty = /** @class */ (function (_super) {
    tslib_1.__extends(ObjectProperty, _super);
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
            (/** @type {?} */ (_this.properties))[propertyId] = _this.formPropertyFactory.createProperty((/** @type {?} */ (_this.schema.properties))[propertyId], _this.ui['$' + propertyId], (_this.formData || {})[propertyId], _this, propertyId);
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
        for (var propertyId in value) {
            if (value.hasOwnProperty(propertyId) && (/** @type {?} */ (this.properties))[propertyId]) {
                ((/** @type {?} */ ((/** @type {?} */ (this.properties))[propertyId]))).setValue(value[propertyId], true);
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
        // tslint:disable-next-line: forin
        for (var propertyId in this.schema.properties) {
            ((/** @type {?} */ ((/** @type {?} */ (this.properties))[propertyId]))).resetValue(value[propertyId], true);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0LnByb3BlcnR5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvbW9kZWwvb2JqZWN0LnByb3BlcnR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUlBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFM0MsT0FBTyxFQUFFLGFBQWEsRUFBZ0IsTUFBTSxpQkFBaUIsQ0FBQztBQUc5RDtJQUFvQywwQ0FBYTtJQU8vQyx3QkFDVSxtQkFBd0MsRUFDaEQsc0JBQThDLEVBQzlDLE1BQWdCLEVBQ2hCLEVBQStCLEVBQy9CLFFBQVksRUFDWixNQUE0QixFQUM1QixJQUFZLEVBQ1osT0FBd0I7UUFSMUIsWUFVRSxrQkFBTSxzQkFBc0IsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxTQUUzRTtRQVhTLHlCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFQMUMsbUJBQWEsR0FBYSxFQUFFLENBQUM7UUFpQm5DLEtBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDOztJQUMxQixDQUFDO0lBaEJELHNCQUFJLHdDQUFZOzs7O1FBQWhCO1lBQ0UsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzVCLENBQUM7OztPQUFBOzs7OztJQWdCTyx5Q0FBZ0I7Ozs7SUFBeEI7UUFBQSxpQkFtQkM7UUFsQkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7O1lBQ3BCLGlCQUEyQjtRQUMvQixJQUFJO1lBQ0YsaUJBQWlCLEdBQUcsZUFBZSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQUEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUMsQ0FBQyxFQUFFLG1CQUFBLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFZLENBQUMsQ0FBQztTQUN0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aWcgfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHsgU0ZWYWx1ZSB9IGZyb20gJy4uL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBTRlNjaGVtYSB9IGZyb20gJy4uL3NjaGVtYS9pbmRleCc7XG5pbXBvcnQgeyBTRlVJU2NoZW1hLCBTRlVJU2NoZW1hSXRlbSB9IGZyb20gJy4uL3NjaGVtYS91aSc7XG5pbXBvcnQgeyBvcmRlclByb3BlcnRpZXMgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBTY2hlbWFWYWxpZGF0b3JGYWN0b3J5IH0gZnJvbSAnLi4vdmFsaWRhdG9yLmZhY3RvcnknO1xuaW1wb3J0IHsgUHJvcGVydHlHcm91cCwgRm9ybVByb3BlcnR5IH0gZnJvbSAnLi9mb3JtLnByb3BlcnR5JztcbmltcG9ydCB7IEZvcm1Qcm9wZXJ0eUZhY3RvcnkgfSBmcm9tICcuL2Zvcm0ucHJvcGVydHkuZmFjdG9yeSc7XG5cbmV4cG9ydCBjbGFzcyBPYmplY3RQcm9wZXJ0eSBleHRlbmRzIFByb3BlcnR5R3JvdXAge1xuICBwcml2YXRlIF9wcm9wZXJ0aWVzSWQ6IHN0cmluZ1tdID0gW107XG5cbiAgZ2V0IHByb3BlcnRpZXNJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvcGVydGllc0lkO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBmb3JtUHJvcGVydHlGYWN0b3J5OiBGb3JtUHJvcGVydHlGYWN0b3J5LFxuICAgIHNjaGVtYVZhbGlkYXRvckZhY3Rvcnk6IFNjaGVtYVZhbGlkYXRvckZhY3RvcnksXG4gICAgc2NoZW1hOiBTRlNjaGVtYSxcbiAgICB1aTogU0ZVSVNjaGVtYSB8IFNGVUlTY2hlbWFJdGVtLFxuICAgIGZvcm1EYXRhOiB7fSxcbiAgICBwYXJlbnQ6IFByb3BlcnR5R3JvdXAgfCBudWxsLFxuICAgIHBhdGg6IHN0cmluZyxcbiAgICBvcHRpb25zOiBEZWxvbkZvcm1Db25maWcsXG4gICkge1xuICAgIHN1cGVyKHNjaGVtYVZhbGlkYXRvckZhY3RvcnksIHNjaGVtYSwgdWksIGZvcm1EYXRhLCBwYXJlbnQsIHBhdGgsIG9wdGlvbnMpO1xuICAgIHRoaXMuY3JlYXRlUHJvcGVydGllcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVQcm9wZXJ0aWVzKCkge1xuICAgIHRoaXMucHJvcGVydGllcyA9IHt9O1xuICAgIHRoaXMuX3Byb3BlcnRpZXNJZCA9IFtdO1xuICAgIGxldCBvcmRlcmVkUHJvcGVydGllczogc3RyaW5nW107XG4gICAgdHJ5IHtcbiAgICAgIG9yZGVyZWRQcm9wZXJ0aWVzID0gb3JkZXJQcm9wZXJ0aWVzKE9iamVjdC5rZXlzKHRoaXMuc2NoZW1hLnByb3BlcnRpZXMhKSwgdGhpcy51aS5vcmRlciBhcyBzdHJpbmdbXSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihgSW52YWxpZCAke3RoaXMuc2NoZW1hLnRpdGxlIHx8ICdyb290J30gb2JqZWN0IGZpZWxkIGNvbmZpZ3VyYXRpb246YCwgZSk7XG4gICAgfVxuICAgIG9yZGVyZWRQcm9wZXJ0aWVzIS5mb3JFYWNoKHByb3BlcnR5SWQgPT4ge1xuICAgICAgdGhpcy5wcm9wZXJ0aWVzIVtwcm9wZXJ0eUlkXSA9IHRoaXMuZm9ybVByb3BlcnR5RmFjdG9yeS5jcmVhdGVQcm9wZXJ0eShcbiAgICAgICAgdGhpcy5zY2hlbWEucHJvcGVydGllcyFbcHJvcGVydHlJZF0sXG4gICAgICAgIHRoaXMudWlbJyQnICsgcHJvcGVydHlJZF0sXG4gICAgICAgICh0aGlzLmZvcm1EYXRhIHx8IHt9KVtwcm9wZXJ0eUlkXSxcbiAgICAgICAgdGhpcyxcbiAgICAgICAgcHJvcGVydHlJZCxcbiAgICAgICk7XG4gICAgICB0aGlzLl9wcm9wZXJ0aWVzSWQucHVzaChwcm9wZXJ0eUlkKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlOiBTRlZhbHVlLCBvbmx5U2VsZjogYm9vbGVhbikge1xuICAgIGZvciAoY29uc3QgcHJvcGVydHlJZCBpbiB2YWx1ZSkge1xuICAgICAgaWYgKHZhbHVlLmhhc093blByb3BlcnR5KHByb3BlcnR5SWQpICYmIHRoaXMucHJvcGVydGllcyFbcHJvcGVydHlJZF0pIHtcbiAgICAgICAgKHRoaXMucHJvcGVydGllcyFbcHJvcGVydHlJZF0gYXMgRm9ybVByb3BlcnR5KS5zZXRWYWx1ZSh2YWx1ZVtwcm9wZXJ0eUlkXSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eShvbmx5U2VsZiwgdHJ1ZSk7XG4gIH1cblxuICByZXNldFZhbHVlKHZhbHVlOiBTRlZhbHVlLCBvbmx5U2VsZjogYm9vbGVhbikge1xuICAgIHZhbHVlID0gdmFsdWUgfHwgdGhpcy5zY2hlbWEuZGVmYXVsdCB8fCB7fTtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGZvcmluXG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eUlkIGluIHRoaXMuc2NoZW1hLnByb3BlcnRpZXMpIHtcbiAgICAgICh0aGlzLnByb3BlcnRpZXMhW3Byb3BlcnR5SWRdIGFzIEZvcm1Qcm9wZXJ0eSkucmVzZXRWYWx1ZSh2YWx1ZVtwcm9wZXJ0eUlkXSwgdHJ1ZSk7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eShvbmx5U2VsZiwgdHJ1ZSk7XG4gIH1cblxuICBfaGFzVmFsdWUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWUgIT0gbnVsbCAmJiAhIU9iamVjdC5rZXlzKHRoaXMudmFsdWUpLmxlbmd0aDtcbiAgfVxuXG4gIF91cGRhdGVWYWx1ZSgpIHtcbiAgICBjb25zdCB2YWx1ZTogU0ZWYWx1ZSA9IHt9O1xuICAgIHRoaXMuZm9yRWFjaENoaWxkKChwcm9wZXJ0eSwgcHJvcGVydHlJZCkgPT4ge1xuICAgICAgaWYgKHByb3BlcnR5LnZpc2libGUgJiYgcHJvcGVydHkuX2hhc1ZhbHVlKCkpIHtcbiAgICAgICAgdmFsdWVbcHJvcGVydHlJZF0gPSBwcm9wZXJ0eS52YWx1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICB9XG59XG4iXX0=