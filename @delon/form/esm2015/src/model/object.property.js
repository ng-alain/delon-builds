/**
 * @fileoverview added by tsickle
 * Generated from: src/model/object.property.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            (/** @type {?} */ (this.properties))[propertyId] = this.formPropertyFactory.createProperty((/** @type {?} */ (this.schema.properties))[propertyId], this.ui['$' + propertyId], (this.formData || {})[propertyId], this, propertyId);
            this._propertiesId.push(propertyId);
        }));
    }
    /**
     * @param {?} value
     * @param {?} onlySelf
     * @return {?}
     */
    setValue(value, onlySelf) {
        for (const propertyId in value) {
            if (value.hasOwnProperty(propertyId) && (/** @type {?} */ (this.properties))[propertyId]) {
                ((/** @type {?} */ ((/** @type {?} */ (this.properties))[propertyId]))).setValue(value[propertyId], true);
            }
        }
        this.updateValueAndValidity(onlySelf, true);
    }
    /**
     * @param {?} value
     * @param {?} onlySelf
     * @return {?}
     */
    resetValue(value, onlySelf) {
        value = value || this.schema.default || {};
        // tslint:disable-next-line: forin
        for (const propertyId in this.schema.properties) {
            ((/** @type {?} */ ((/** @type {?} */ (this.properties))[propertyId]))).resetValue(value[propertyId], true);
        }
        this.updateValueAndValidity(onlySelf, true);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0LnByb3BlcnR5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvbW9kZWwvb2JqZWN0LnByb3BlcnR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsYUFBYSxFQUFnQixNQUFNLGlCQUFpQixDQUFDO0FBRzlELE1BQU0sT0FBTyxjQUFlLFNBQVEsYUFBYTs7Ozs7Ozs7Ozs7SUFPL0MsWUFDVSxtQkFBd0MsRUFDaEQsc0JBQThDLEVBQzlDLE1BQWdCLEVBQ2hCLEVBQStCLEVBQy9CLFFBQVksRUFDWixNQUE0QixFQUM1QixJQUFZLEVBQ1osT0FBd0I7UUFFeEIsS0FBSyxDQUFDLHNCQUFzQixFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFUbkUsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQVAxQyxrQkFBYSxHQUFhLEVBQUUsQ0FBQztRQWlCbkMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDMUIsQ0FBQzs7OztJQWhCRCxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFnQk8sZ0JBQWdCO1FBQ3RCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDOztZQUNwQixpQkFBMkI7UUFDL0IsSUFBSTtZQUNGLGlCQUFpQixHQUFHLGVBQWUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFBLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFDLENBQUMsRUFBRSxtQkFBQSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBWSxDQUFDLENBQUM7U0FDdEc7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLE9BQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxNQUFNLDhCQUE4QixFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3hGO1FBQ0QsbUJBQUEsaUJBQWlCLEVBQUMsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdEMsbUJBQUEsSUFBSSxDQUFDLFVBQVUsRUFBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxjQUFjLENBQ3BFLG1CQUFBLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFDLENBQUMsVUFBVSxDQUFDLEVBQ25DLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLFVBQVUsQ0FBQyxFQUN6QixDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLEVBQ2pDLElBQUksRUFDSixVQUFVLENBQ1gsQ0FBQztZQUNGLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBRUQsUUFBUSxDQUFDLEtBQWMsRUFBRSxRQUFpQjtRQUN4QyxLQUFLLE1BQU0sVUFBVSxJQUFJLEtBQUssRUFBRTtZQUM5QixJQUFJLEtBQUssQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLElBQUksbUJBQUEsSUFBSSxDQUFDLFVBQVUsRUFBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUNwRSxDQUFDLG1CQUFBLG1CQUFBLElBQUksQ0FBQyxVQUFVLEVBQUMsQ0FBQyxVQUFVLENBQUMsRUFBZ0IsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDbEY7U0FDRjtRQUNELElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7Ozs7O0lBRUQsVUFBVSxDQUFDLEtBQWMsRUFBRSxRQUFpQjtRQUMxQyxLQUFLLEdBQUcsS0FBSyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztRQUMzQyxrQ0FBa0M7UUFDbEMsS0FBSyxNQUFNLFVBQVUsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRTtZQUMvQyxDQUFDLG1CQUFBLG1CQUFBLElBQUksQ0FBQyxVQUFVLEVBQUMsQ0FBQyxVQUFVLENBQUMsRUFBZ0IsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDcEY7UUFDRCxJQUFJLENBQUMsc0JBQXNCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1AsT0FBTyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQ2hFLENBQUM7Ozs7SUFFRCxZQUFZOztjQUNKLEtBQUssR0FBWSxFQUFFO1FBQ3pCLElBQUksQ0FBQyxZQUFZOzs7OztRQUFDLENBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxFQUFFO1lBQ3pDLElBQUksUUFBUSxDQUFDLE9BQU8sSUFBSSxRQUFRLENBQUMsU0FBUyxFQUFFLEVBQUU7Z0JBQzVDLEtBQUssQ0FBQyxVQUFVLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO2FBQ3BDO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0NBQ0Y7Ozs7OztJQXhFQyx1Q0FBcUM7Ozs7O0lBT25DLDZDQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERlbG9uRm9ybUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBTRlZhbHVlIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IFNGU2NoZW1hIH0gZnJvbSAnLi4vc2NoZW1hL2luZGV4JztcbmltcG9ydCB7IFNGVUlTY2hlbWEsIFNGVUlTY2hlbWFJdGVtIH0gZnJvbSAnLi4vc2NoZW1hL3VpJztcbmltcG9ydCB7IG9yZGVyUHJvcGVydGllcyB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IFNjaGVtYVZhbGlkYXRvckZhY3RvcnkgfSBmcm9tICcuLi92YWxpZGF0b3IuZmFjdG9yeSc7XG5pbXBvcnQgeyBQcm9wZXJ0eUdyb3VwLCBGb3JtUHJvcGVydHkgfSBmcm9tICcuL2Zvcm0ucHJvcGVydHknO1xuaW1wb3J0IHsgRm9ybVByb3BlcnR5RmFjdG9yeSB9IGZyb20gJy4vZm9ybS5wcm9wZXJ0eS5mYWN0b3J5JztcblxuZXhwb3J0IGNsYXNzIE9iamVjdFByb3BlcnR5IGV4dGVuZHMgUHJvcGVydHlHcm91cCB7XG4gIHByaXZhdGUgX3Byb3BlcnRpZXNJZDogc3RyaW5nW10gPSBbXTtcblxuICBnZXQgcHJvcGVydGllc0lkKCkge1xuICAgIHJldHVybiB0aGlzLl9wcm9wZXJ0aWVzSWQ7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGZvcm1Qcm9wZXJ0eUZhY3Rvcnk6IEZvcm1Qcm9wZXJ0eUZhY3RvcnksXG4gICAgc2NoZW1hVmFsaWRhdG9yRmFjdG9yeTogU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSxcbiAgICBzY2hlbWE6IFNGU2NoZW1hLFxuICAgIHVpOiBTRlVJU2NoZW1hIHwgU0ZVSVNjaGVtYUl0ZW0sXG4gICAgZm9ybURhdGE6IHt9LFxuICAgIHBhcmVudDogUHJvcGVydHlHcm91cCB8IG51bGwsXG4gICAgcGF0aDogc3RyaW5nLFxuICAgIG9wdGlvbnM6IERlbG9uRm9ybUNvbmZpZyxcbiAgKSB7XG4gICAgc3VwZXIoc2NoZW1hVmFsaWRhdG9yRmFjdG9yeSwgc2NoZW1hLCB1aSwgZm9ybURhdGEsIHBhcmVudCwgcGF0aCwgb3B0aW9ucyk7XG4gICAgdGhpcy5jcmVhdGVQcm9wZXJ0aWVzKCk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVByb3BlcnRpZXMoKSB7XG4gICAgdGhpcy5wcm9wZXJ0aWVzID0ge307XG4gICAgdGhpcy5fcHJvcGVydGllc0lkID0gW107XG4gICAgbGV0IG9yZGVyZWRQcm9wZXJ0aWVzOiBzdHJpbmdbXTtcbiAgICB0cnkge1xuICAgICAgb3JkZXJlZFByb3BlcnRpZXMgPSBvcmRlclByb3BlcnRpZXMoT2JqZWN0LmtleXModGhpcy5zY2hlbWEucHJvcGVydGllcyEpLCB0aGlzLnVpLm9yZGVyIGFzIHN0cmluZ1tdKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBJbnZhbGlkICR7dGhpcy5zY2hlbWEudGl0bGUgfHwgJ3Jvb3QnfSBvYmplY3QgZmllbGQgY29uZmlndXJhdGlvbjpgLCBlKTtcbiAgICB9XG4gICAgb3JkZXJlZFByb3BlcnRpZXMhLmZvckVhY2gocHJvcGVydHlJZCA9PiB7XG4gICAgICB0aGlzLnByb3BlcnRpZXMhW3Byb3BlcnR5SWRdID0gdGhpcy5mb3JtUHJvcGVydHlGYWN0b3J5LmNyZWF0ZVByb3BlcnR5KFxuICAgICAgICB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzIVtwcm9wZXJ0eUlkXSxcbiAgICAgICAgdGhpcy51aVsnJCcgKyBwcm9wZXJ0eUlkXSxcbiAgICAgICAgKHRoaXMuZm9ybURhdGEgfHwge30pW3Byb3BlcnR5SWRdLFxuICAgICAgICB0aGlzLFxuICAgICAgICBwcm9wZXJ0eUlkLFxuICAgICAgKTtcbiAgICAgIHRoaXMuX3Byb3BlcnRpZXNJZC5wdXNoKHByb3BlcnR5SWQpO1xuICAgIH0pO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWU6IFNGVmFsdWUsIG9ubHlTZWxmOiBib29sZWFuKSB7XG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eUlkIGluIHZhbHVlKSB7XG4gICAgICBpZiAodmFsdWUuaGFzT3duUHJvcGVydHkocHJvcGVydHlJZCkgJiYgdGhpcy5wcm9wZXJ0aWVzIVtwcm9wZXJ0eUlkXSkge1xuICAgICAgICAodGhpcy5wcm9wZXJ0aWVzIVtwcm9wZXJ0eUlkXSBhcyBGb3JtUHJvcGVydHkpLnNldFZhbHVlKHZhbHVlW3Byb3BlcnR5SWRdLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KG9ubHlTZWxmLCB0cnVlKTtcbiAgfVxuXG4gIHJlc2V0VmFsdWUodmFsdWU6IFNGVmFsdWUsIG9ubHlTZWxmOiBib29sZWFuKSB7XG4gICAgdmFsdWUgPSB2YWx1ZSB8fCB0aGlzLnNjaGVtYS5kZWZhdWx0IHx8IHt9O1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZm9yaW5cbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5SWQgaW4gdGhpcy5zY2hlbWEucHJvcGVydGllcykge1xuICAgICAgKHRoaXMucHJvcGVydGllcyFbcHJvcGVydHlJZF0gYXMgRm9ybVByb3BlcnR5KS5yZXNldFZhbHVlKHZhbHVlW3Byb3BlcnR5SWRdLCB0cnVlKTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KG9ubHlTZWxmLCB0cnVlKTtcbiAgfVxuXG4gIF9oYXNWYWx1ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZSAhPSBudWxsICYmICEhT2JqZWN0LmtleXModGhpcy52YWx1ZSkubGVuZ3RoO1xuICB9XG5cbiAgX3VwZGF0ZVZhbHVlKCkge1xuICAgIGNvbnN0IHZhbHVlOiBTRlZhbHVlID0ge307XG4gICAgdGhpcy5mb3JFYWNoQ2hpbGQoKHByb3BlcnR5LCBwcm9wZXJ0eUlkKSA9PiB7XG4gICAgICBpZiAocHJvcGVydHkudmlzaWJsZSAmJiBwcm9wZXJ0eS5faGFzVmFsdWUoKSkge1xuICAgICAgICB2YWx1ZVtwcm9wZXJ0eUlkXSA9IHByb3BlcnR5LnZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gIH1cbn1cbiJdfQ==