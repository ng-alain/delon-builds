/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        const list = /** @type {?} */ (this.properties);
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
        this.properties = [];
        this.clearErrors();
        this.resetProperties(this._value);
        this.updateValueAndValidity(onlySelf, true);
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
        this.forEachChild((property, _) => {
            if (property.visible && property._hasValue()) {
                value.push(Object.assign({}, property.formData, property.value));
            }
        });
        this._value = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    addProperty(value) {
        /** @type {?} */
        const newProperty = /** @type {?} */ (this.formPropertyFactory.createProperty(this.schema.items, this.ui["$items"], value, this));
        (/** @type {?} */ (this.properties)).push(newProperty);
        return newProperty;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    resetProperties(value) {
        for (const item of value) {
            /** @type {?} */
            const property = this.addProperty(item);
            property.resetValue(item, true);
        }
    }
    /**
     * @param {?=} path
     * @return {?}
     */
    clearErrors(path) {
        if (path)
            delete this._objErrors[path];
        else
            this._objErrors = {};
    }
    /**
     * @param {?} value
     * @return {?}
     */
    add(value) {
        /** @type {?} */
        const newProperty = this.addProperty(value);
        newProperty.resetValue(value, false);
        return newProperty;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    remove(index) {
        /** @type {?} */
        const list = /** @type {?} */ (this.properties);
        this.clearErrors(list[index].path);
        list.splice(index, 1);
        this.updateValueAndValidity(false, true);
    }
}
if (false) {
    /** @type {?} */
    ArrayProperty.prototype.tick;
    /** @type {?} */
    ArrayProperty.prototype.formPropertyFactory;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXkucHJvcGVydHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vZm9ybS8iLCJzb3VyY2VzIjpbInNyYy9tb2RlbC9hcnJheS5wcm9wZXJ0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBZ0IsTUFBTSxpQkFBaUIsQ0FBQztBQVE5RCxNQUFNLG9CQUFxQixTQUFRLGFBQWE7Ozs7Ozs7Ozs7O0lBRzlDLFlBQ1UscUJBQ1Isc0JBQThDLEVBQzlDLE1BQVcsRUFDWCxFQUErQixFQUMvQixRQUFZLEVBQ1osTUFBcUIsRUFDckIsSUFBWSxFQUNaLE9BQXdCO1FBRXhCLEtBQUssQ0FBQyxzQkFBc0IsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBVG5FLHdCQUFtQixHQUFuQixtQkFBbUI7b0JBSHRCLENBQUM7UUFhTixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztLQUN0Qjs7Ozs7SUFFRCxXQUFXLENBQUMsSUFBWTs7UUFDdEIsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQzs7UUFDckMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLFVBQVUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDOztRQUNyRSxNQUFNLElBQUkscUJBQUcsSUFBSSxDQUFDLFVBQTZCLEVBQUM7UUFDaEQsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNO1lBQUUsT0FBTyxTQUFTLENBQUM7O1FBQ3ZELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzVD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O1FBQ3RCLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDMUM7Q0FHRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb3BlcnR5R3JvdXAsIEZvcm1Qcm9wZXJ0eSB9IGZyb20gJy4vZm9ybS5wcm9wZXJ0eSc7XG5pbXBvcnQgeyBTY2hlbWFWYWxpZGF0b3JGYWN0b3J5IH0gZnJvbSAnLi4vdmFsaWRhdG9yLmZhY3RvcnknO1xuaW1wb3J0IHsgU0ZVSVNjaGVtYSwgU0ZVSVNjaGVtYUl0ZW0gfSBmcm9tICcuLi9zY2hlbWEvdWknO1xuaW1wb3J0IHsgRGVsb25Gb3JtQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7IEZvcm1Qcm9wZXJ0eUZhY3RvcnkgfSBmcm9tICcuL2Zvcm0ucHJvcGVydHkuZmFjdG9yeSc7XG5pbXBvcnQgeyBPYmplY3RQcm9wZXJ0eSB9IGZyb20gJy4vb2JqZWN0LnByb3BlcnR5JztcbmltcG9ydCB7IEVycm9yRGF0YSB9IGZyb20gJy4uL2Vycm9ycyc7XG5cbmV4cG9ydCBjbGFzcyBBcnJheVByb3BlcnR5IGV4dGVuZHMgUHJvcGVydHlHcm91cCB7XG4gIHRpY2sgPSAxO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZm9ybVByb3BlcnR5RmFjdG9yeTogRm9ybVByb3BlcnR5RmFjdG9yeSxcbiAgICBzY2hlbWFWYWxpZGF0b3JGYWN0b3J5OiBTY2hlbWFWYWxpZGF0b3JGYWN0b3J5LFxuICAgIHNjaGVtYTogYW55LFxuICAgIHVpOiBTRlVJU2NoZW1hIHwgU0ZVSVNjaGVtYUl0ZW0sXG4gICAgZm9ybURhdGE6IHt9LFxuICAgIHBhcmVudDogUHJvcGVydHlHcm91cCxcbiAgICBwYXRoOiBzdHJpbmcsXG4gICAgb3B0aW9uczogRGVsb25Gb3JtQ29uZmlnLFxuICApIHtcbiAgICBzdXBlcihzY2hlbWFWYWxpZGF0b3JGYWN0b3J5LCBzY2hlbWEsIHVpLCBmb3JtRGF0YSwgcGFyZW50LCBwYXRoLCBvcHRpb25zKTtcbiAgICB0aGlzLnByb3BlcnRpZXMgPSBbXTtcbiAgfVxuXG4gIGdldFByb3BlcnR5KHBhdGg6IHN0cmluZykge1xuICAgIGNvbnN0IHN1YlBhdGhJZHggPSBwYXRoLmluZGV4T2YoJy8nKTtcbiAgICBjb25zdCBwb3MgPSArKHN1YlBhdGhJZHggIT09IC0xID8gcGF0aC5zdWJzdHIoMCwgc3ViUGF0aElkeCkgOiBwYXRoKTtcbiAgICBjb25zdCBsaXN0ID0gdGhpcy5wcm9wZXJ0aWVzIGFzIFByb3BlcnR5R3JvdXBbXTtcbiAgICBpZiAoaXNOYU4ocG9zKSB8fCBwb3MgPj0gbGlzdC5sZW5ndGgpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgY29uc3Qgc3ViUGF0aCA9IHBhdGguc3Vic3RyKHN1YlBhdGhJZHggKyAxKTtcbiAgICByZXR1cm4gbGlzdFtwb3NdLmdldFByb3BlcnR5KHN1YlBhdGgpO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWU6IGFueSwgb25seVNlbGY6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnByb3BlcnRpZXMgPSBbXTtcbiAgICB0aGlzLmNsZWFyRXJyb3JzKCk7XG4gICAgdGhpcy5yZXNldFByb3BlcnRpZXModmFsdWUpO1xuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eShvbmx5U2VsZiwgdHJ1ZSk7XG4gIH1cblxuICByZXNldFZhbHVlKHZhbHVlOiBhbnksIG9ubHlTZWxmOiBib29sZWFuKSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZSB8fCB0aGlzLnNjaGVtYS5kZWZhdWx0IHx8IFtdO1xuICAgIHRoaXMucHJvcGVydGllcyA9IFtdO1xuICAgIHRoaXMuY2xlYXJFcnJvcnMoKTtcbiAgICB0aGlzLnJlc2V0UHJvcGVydGllcyh0aGlzLl92YWx1ZSk7XG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KG9ubHlTZWxmLCB0cnVlKTtcbiAgfVxuXG4gIF9oYXNWYWx1ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIF91cGRhdGVWYWx1ZSgpIHtcbiAgICBjb25zdCB2YWx1ZTogYW55W10gPSBbXTtcbiAgICB0aGlzLmZvckVhY2hDaGlsZCgocHJvcGVydHk6IE9iamVjdFByb3BlcnR5LCBfKSA9PiB7XG4gICAgICBpZiAocHJvcGVydHkudmlzaWJsZSAmJiBwcm9wZXJ0eS5faGFzVmFsdWUoKSkge1xuICAgICAgICB2YWx1ZS5wdXNoKE9iamVjdC5hc3NpZ24oe30sIHByb3BlcnR5LmZvcm1EYXRhLCBwcm9wZXJ0eS52YWx1ZSkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBwcml2YXRlIGFkZFByb3BlcnR5KHZhbHVlOiBhbnkpIHtcbiAgICBjb25zdCBuZXdQcm9wZXJ0eSA9IHRoaXMuZm9ybVByb3BlcnR5RmFjdG9yeS5jcmVhdGVQcm9wZXJ0eShcbiAgICAgIHRoaXMuc2NoZW1hLml0ZW1zLFxuICAgICAgdGhpcy51aS4kaXRlbXMsXG4gICAgICB2YWx1ZSxcbiAgICAgIHRoaXMsXG4gICAgKSBhcyBPYmplY3RQcm9wZXJ0eTtcbiAgICAoPEZvcm1Qcm9wZXJ0eVtdPnRoaXMucHJvcGVydGllcykucHVzaChuZXdQcm9wZXJ0eSk7XG4gICAgcmV0dXJuIG5ld1Byb3BlcnR5O1xuICB9XG5cbiAgcHJpdmF0ZSByZXNldFByb3BlcnRpZXModmFsdWU6IGFueVtdKSB7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHZhbHVlKSB7XG4gICAgICBjb25zdCBwcm9wZXJ0eSA9IHRoaXMuYWRkUHJvcGVydHkoaXRlbSk7XG4gICAgICBwcm9wZXJ0eS5yZXNldFZhbHVlKGl0ZW0sIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJFcnJvcnMocGF0aD86IHN0cmluZykge1xuICAgIGlmIChwYXRoKSBkZWxldGUgdGhpcy5fb2JqRXJyb3JzW3BhdGhdO1xuICAgIGVsc2UgdGhpcy5fb2JqRXJyb3JzID0ge307XG4gIH1cblxuICAvLyByZWdpb246IGFjdGlvbnNcblxuICBhZGQodmFsdWU6IGFueSk6IEZvcm1Qcm9wZXJ0eSB7XG4gICAgY29uc3QgbmV3UHJvcGVydHkgPSB0aGlzLmFkZFByb3BlcnR5KHZhbHVlKTtcbiAgICBuZXdQcm9wZXJ0eS5yZXNldFZhbHVlKHZhbHVlLCBmYWxzZSk7XG4gICAgcmV0dXJuIG5ld1Byb3BlcnR5O1xuICB9XG5cbiAgcmVtb3ZlKGluZGV4OiBudW1iZXIpIHtcbiAgICBjb25zdCBsaXN0ID0gPEZvcm1Qcm9wZXJ0eVtdPnRoaXMucHJvcGVydGllcztcbiAgICB0aGlzLmNsZWFyRXJyb3JzKGxpc3RbaW5kZXhdLnBhdGgpO1xuICAgIGxpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoZmFsc2UsIHRydWUpO1xuICB9XG5cbiAgLy8gZW5kcmVnaW9uXG59XG4iXX0=