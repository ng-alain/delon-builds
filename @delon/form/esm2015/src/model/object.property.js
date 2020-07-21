/**
 * @fileoverview added by tsickle
 * Generated from: src/model/object.property.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { orderProperties } from '../utils';
import { PropertyGroup } from './form.property';
export class ObjectProperty extends PropertyGroup {
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
        this._propertiesId = [];
        this.createProperties();
    }
    /**
     * @return {?}
     */
    get propertiesId() {
        return this._propertiesId;
    }
    /**
     * @private
     * @return {?}
     */
    createProperties() {
        this.properties = {};
        this._propertiesId = [];
        /** @type {?} */
        let orderedProperties;
        try {
            orderedProperties = orderProperties(Object.keys((/** @type {?} */ (this.schema.properties))), (/** @type {?} */ (this.ui.order)));
        }
        catch (e) {
            console.error(`Invalid ${this.schema.title || 'root'} object field configuration:`, e);
        }
        (/** @type {?} */ (orderedProperties)).forEach((/**
         * @param {?} propertyId
         * @return {?}
         */
        propertyId => {
            ((/** @type {?} */ (this.properties)))[propertyId] = this.formPropertyFactory.createProperty((/** @type {?} */ (this.schema.properties))[propertyId], this.ui['$' + propertyId], ((/** @type {?} */ ((this.formData || {}))))[propertyId], this, propertyId);
            this._propertiesId.push(propertyId);
        }));
    }
    /**
     * @param {?} value
     * @param {?} onlySelf
     * @return {?}
     */
    setValue(value, onlySelf) {
        /** @type {?} */
        const properties = (/** @type {?} */ (this.properties));
        for (const propertyId in value) {
            if (value.hasOwnProperty(propertyId) && properties[propertyId]) {
                ((/** @type {?} */ (properties[propertyId]))).setValue(value[propertyId], true);
            }
        }
        this.updateValueAndValidity({ onlySelf, emitValueEvent: true });
    }
    /**
     * @param {?} value
     * @param {?} onlySelf
     * @return {?}
     */
    resetValue(value, onlySelf) {
        value = value || this.schema.default || {};
        /** @type {?} */
        const properties = (/** @type {?} */ (this.properties));
        // tslint:disable-next-line: forin
        for (const propertyId in this.schema.properties) {
            properties[propertyId].resetValue(value[propertyId], true);
        }
        this.updateValueAndValidity({ onlySelf, emitValueEvent: true });
    }
    /**
     * @return {?}
     */
    _hasValue() {
        return this.value != null && !!Object.keys(this.value).length;
    }
    /**
     * @return {?}
     */
    _updateValue() {
        /** @type {?} */
        const value = {};
        this.forEachChild((/**
         * @param {?} property
         * @param {?} propertyId
         * @return {?}
         */
        (property, propertyId) => {
            if (property.visible && property._hasValue()) {
                value[propertyId] = property.value;
            }
        }));
        this._value = value;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0LnByb3BlcnR5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS9zcmMvbW9kZWwvb2JqZWN0LnByb3BlcnR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBS0EsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUUzQyxPQUFPLEVBQWdCLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRzlELE1BQU0sT0FBTyxjQUFlLFNBQVEsYUFBYTs7Ozs7Ozs7Ozs7SUFPL0MsWUFDVSxtQkFBd0MsRUFDaEQsc0JBQThDLEVBQzlDLE1BQWdCLEVBQ2hCLEVBQStCLEVBQy9CLFFBQW1CLEVBQ25CLE1BQTRCLEVBQzVCLElBQVksRUFDWixPQUFzQjtRQUV0QixLQUFLLENBQUMsc0JBQXNCLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztRQVRuRSx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBUDFDLGtCQUFhLEdBQWEsRUFBRSxDQUFDO1FBaUJuQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7O0lBaEJELElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDOzs7OztJQWdCTyxnQkFBZ0I7UUFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7O1lBQ3BCLGlCQUEyQjtRQUMvQixJQUFJO1lBQ0YsaUJBQWlCLEdBQUcsZUFBZSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQUEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUMsQ0FBQyxFQUFFLG1CQUFBLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFZLENBQUMsQ0FBQztTQUN0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QWxhaW5TRkNvbmZpZyB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBTRlZhbHVlIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IFNGU2NoZW1hIH0gZnJvbSAnLi4vc2NoZW1hL2luZGV4JztcbmltcG9ydCB7IFNGVUlTY2hlbWEsIFNGVUlTY2hlbWFJdGVtIH0gZnJvbSAnLi4vc2NoZW1hL3VpJztcbmltcG9ydCB7IG9yZGVyUHJvcGVydGllcyB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IFNjaGVtYVZhbGlkYXRvckZhY3RvcnkgfSBmcm9tICcuLi92YWxpZGF0b3IuZmFjdG9yeSc7XG5pbXBvcnQgeyBGb3JtUHJvcGVydHksIFByb3BlcnR5R3JvdXAgfSBmcm9tICcuL2Zvcm0ucHJvcGVydHknO1xuaW1wb3J0IHsgRm9ybVByb3BlcnR5RmFjdG9yeSB9IGZyb20gJy4vZm9ybS5wcm9wZXJ0eS5mYWN0b3J5JztcblxuZXhwb3J0IGNsYXNzIE9iamVjdFByb3BlcnR5IGV4dGVuZHMgUHJvcGVydHlHcm91cCB7XG4gIHByaXZhdGUgX3Byb3BlcnRpZXNJZDogc3RyaW5nW10gPSBbXTtcblxuICBnZXQgcHJvcGVydGllc0lkKCkge1xuICAgIHJldHVybiB0aGlzLl9wcm9wZXJ0aWVzSWQ7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGZvcm1Qcm9wZXJ0eUZhY3Rvcnk6IEZvcm1Qcm9wZXJ0eUZhY3RvcnksXG4gICAgc2NoZW1hVmFsaWRhdG9yRmFjdG9yeTogU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSxcbiAgICBzY2hlbWE6IFNGU2NoZW1hLFxuICAgIHVpOiBTRlVJU2NoZW1hIHwgU0ZVSVNjaGVtYUl0ZW0sXG4gICAgZm9ybURhdGE6IE56U2FmZUFueSxcbiAgICBwYXJlbnQ6IFByb3BlcnR5R3JvdXAgfCBudWxsLFxuICAgIHBhdGg6IHN0cmluZyxcbiAgICBvcHRpb25zOiBBbGFpblNGQ29uZmlnLFxuICApIHtcbiAgICBzdXBlcihzY2hlbWFWYWxpZGF0b3JGYWN0b3J5LCBzY2hlbWEsIHVpLCBmb3JtRGF0YSwgcGFyZW50LCBwYXRoLCBvcHRpb25zKTtcbiAgICB0aGlzLmNyZWF0ZVByb3BlcnRpZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlUHJvcGVydGllcygpIHtcbiAgICB0aGlzLnByb3BlcnRpZXMgPSB7fTtcbiAgICB0aGlzLl9wcm9wZXJ0aWVzSWQgPSBbXTtcbiAgICBsZXQgb3JkZXJlZFByb3BlcnRpZXM6IHN0cmluZ1tdO1xuICAgIHRyeSB7XG4gICAgICBvcmRlcmVkUHJvcGVydGllcyA9IG9yZGVyUHJvcGVydGllcyhPYmplY3Qua2V5cyh0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzISksIHRoaXMudWkub3JkZXIgYXMgc3RyaW5nW10pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYEludmFsaWQgJHt0aGlzLnNjaGVtYS50aXRsZSB8fCAncm9vdCd9IG9iamVjdCBmaWVsZCBjb25maWd1cmF0aW9uOmAsIGUpO1xuICAgIH1cbiAgICBvcmRlcmVkUHJvcGVydGllcyEuZm9yRWFjaChwcm9wZXJ0eUlkID0+IHtcbiAgICAgICh0aGlzLnByb3BlcnRpZXMgYXMgeyBba2V5OiBzdHJpbmddOiBGb3JtUHJvcGVydHkgfSlbcHJvcGVydHlJZF0gPSB0aGlzLmZvcm1Qcm9wZXJ0eUZhY3RvcnkuY3JlYXRlUHJvcGVydHkoXG4gICAgICAgIHRoaXMuc2NoZW1hLnByb3BlcnRpZXMhW3Byb3BlcnR5SWRdLFxuICAgICAgICB0aGlzLnVpWyckJyArIHByb3BlcnR5SWRdLFxuICAgICAgICAoKHRoaXMuZm9ybURhdGEgfHwge30pIGFzIE56U2FmZUFueSlbcHJvcGVydHlJZF0sXG4gICAgICAgIHRoaXMsXG4gICAgICAgIHByb3BlcnR5SWQsXG4gICAgICApO1xuICAgICAgdGhpcy5fcHJvcGVydGllc0lkLnB1c2gocHJvcGVydHlJZCk7XG4gICAgfSk7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZTogU0ZWYWx1ZSwgb25seVNlbGY6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzID0gdGhpcy5wcm9wZXJ0aWVzIGFzIHsgW2tleTogc3RyaW5nXTogRm9ybVByb3BlcnR5IH07XG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eUlkIGluIHZhbHVlKSB7XG4gICAgICBpZiAodmFsdWUuaGFzT3duUHJvcGVydHkocHJvcGVydHlJZCkgJiYgcHJvcGVydGllc1twcm9wZXJ0eUlkXSkge1xuICAgICAgICAocHJvcGVydGllc1twcm9wZXJ0eUlkXSBhcyBGb3JtUHJvcGVydHkpLnNldFZhbHVlKHZhbHVlW3Byb3BlcnR5SWRdLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgb25seVNlbGYsIGVtaXRWYWx1ZUV2ZW50OiB0cnVlIH0pO1xuICB9XG5cbiAgcmVzZXRWYWx1ZSh2YWx1ZTogU0ZWYWx1ZSwgb25seVNlbGY6IGJvb2xlYW4pIHtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHRoaXMuc2NoZW1hLmRlZmF1bHQgfHwge307XG4gICAgY29uc3QgcHJvcGVydGllcyA9IHRoaXMucHJvcGVydGllcyBhcyB7IFtrZXk6IHN0cmluZ106IEZvcm1Qcm9wZXJ0eSB9O1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZm9yaW5cbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5SWQgaW4gdGhpcy5zY2hlbWEucHJvcGVydGllcykge1xuICAgICAgcHJvcGVydGllc1twcm9wZXJ0eUlkXS5yZXNldFZhbHVlKHZhbHVlW3Byb3BlcnR5SWRdLCB0cnVlKTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgb25seVNlbGYsIGVtaXRWYWx1ZUV2ZW50OiB0cnVlIH0pO1xuICB9XG5cbiAgX2hhc1ZhbHVlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnZhbHVlICE9IG51bGwgJiYgISFPYmplY3Qua2V5cyh0aGlzLnZhbHVlKS5sZW5ndGg7XG4gIH1cblxuICBfdXBkYXRlVmFsdWUoKSB7XG4gICAgY29uc3QgdmFsdWU6IFNGVmFsdWUgPSB7fTtcbiAgICB0aGlzLmZvckVhY2hDaGlsZCgocHJvcGVydHksIHByb3BlcnR5SWQpID0+IHtcbiAgICAgIGlmIChwcm9wZXJ0eS52aXNpYmxlICYmIHByb3BlcnR5Ll9oYXNWYWx1ZSgpKSB7XG4gICAgICAgIHZhbHVlW3Byb3BlcnR5SWRdID0gcHJvcGVydHkudmFsdWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgfVxufVxuIl19