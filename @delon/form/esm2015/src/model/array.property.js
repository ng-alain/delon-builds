/**
 * @fileoverview added by tsickle
 * Generated from: src/model/array.property.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { PropertyGroup } from './form.property';
import { SF_SEQ } from '../const';
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
        this.properties = [];
    }
    /**
     * @param {?} path
     * @return {?}
     */
    getProperty(path) {
        /** @type {?} */
        const subPathIdx = path.indexOf(SF_SEQ);
        /** @type {?} */
        const pos = +(subPathIdx !== -1 ? path.substr(0, subPathIdx) : path);
        /** @type {?} */
        const list = (/** @type {?} */ (this.properties));
        if (isNaN(pos) || pos >= list.length) {
            return undefined;
        }
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
        if (path) {
            delete this._objErrors[path];
        }
        else {
            this._objErrors = {};
        }
    }
    /**
     * @private
     * @return {?}
     */
    updatePaths() {
        ((/** @type {?} */ (this.properties))).forEach((/**
         * @param {?} p
         * @param {?} idx
         * @return {?}
         */
        (p, idx) => {
            p.path = [(/** @type {?} */ (p.parent)).path, idx].join(SF_SEQ);
        }));
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
        this.updatePaths();
        this.updateValueAndValidity(false, true);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ArrayProperty.prototype.formPropertyFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXkucHJvcGVydHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vZm9ybS8iLCJzb3VyY2VzIjpbInNyYy9tb2RlbC9hcnJheS5wcm9wZXJ0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUtBLE9BQU8sRUFBZ0IsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHOUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUVsQyxNQUFNLE9BQU8sYUFBYyxTQUFRLGFBQWE7Ozs7Ozs7Ozs7O0lBQzlDLFlBQ1UsbUJBQXdDLEVBQ2hELHNCQUE4QyxFQUM5QyxNQUFnQixFQUNoQixFQUErQixFQUMvQixRQUFZLEVBQ1osTUFBNEIsRUFDNUIsSUFBWSxFQUNaLE9BQXdCO1FBRXhCLEtBQUssQ0FBQyxzQkFBc0IsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBVG5FLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFVaEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsSUFBWTs7Y0FDaEIsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDOztjQUNqQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLFVBQVUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQzs7Y0FDOUQsSUFBSSxHQUFHLG1CQUFBLElBQUksQ0FBQyxVQUFVLEVBQW1CO1FBQy9DLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3BDLE9BQU8sU0FBUyxDQUFDO1NBQ2xCOztjQUNLLE9BQU8sR0FBRyxJQUFJLENBQUMs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Q0FBQztRQUN4QyxPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxLQUFhOztjQUNaLElBQUksR0FBRyxtQkFBQSxJQUFJLENBQUMsVUFBVSxFQUFrQjtRQUM5QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzQyxDQUFDO0NBR0Y7Ozs7OztJQTlGRyw0Q0FBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZWxvbkZvcm1Db25maWcgfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHsgU0ZWYWx1ZSB9IGZyb20gJy4uL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBTRlNjaGVtYSB9IGZyb20gJy4uL3NjaGVtYS9pbmRleCc7XG5pbXBvcnQgeyBTRlVJU2NoZW1hLCBTRlVJU2NoZW1hSXRlbSB9IGZyb20gJy4uL3NjaGVtYS91aSc7XG5pbXBvcnQgeyBTY2hlbWFWYWxpZGF0b3JGYWN0b3J5IH0gZnJvbSAnLi4vdmFsaWRhdG9yLmZhY3RvcnknO1xuaW1wb3J0IHsgRm9ybVByb3BlcnR5LCBQcm9wZXJ0eUdyb3VwIH0gZnJvbSAnLi9mb3JtLnByb3BlcnR5JztcbmltcG9ydCB7IEZvcm1Qcm9wZXJ0eUZhY3RvcnkgfSBmcm9tICcuL2Zvcm0ucHJvcGVydHkuZmFjdG9yeSc7XG5pbXBvcnQgeyBPYmplY3RQcm9wZXJ0eSB9IGZyb20gJy4vb2JqZWN0LnByb3BlcnR5JztcbmltcG9ydCB7IFNGX1NFUSB9IGZyb20gJy4uL2NvbnN0JztcblxuZXhwb3J0IGNsYXNzIEFycmF5UHJvcGVydHkgZXh0ZW5kcyBQcm9wZXJ0eUdyb3VwIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBmb3JtUHJvcGVydHlGYWN0b3J5OiBGb3JtUHJvcGVydHlGYWN0b3J5LFxuICAgIHNjaGVtYVZhbGlkYXRvckZhY3Rvcnk6IFNjaGVtYVZhbGlkYXRvckZhY3RvcnksXG4gICAgc2NoZW1hOiBTRlNjaGVtYSxcbiAgICB1aTogU0ZVSVNjaGVtYSB8IFNGVUlTY2hlbWFJdGVtLFxuICAgIGZvcm1EYXRhOiB7fSxcbiAgICBwYXJlbnQ6IFByb3BlcnR5R3JvdXAgfCBudWxsLFxuICAgIHBhdGg6IHN0cmluZyxcbiAgICBvcHRpb25zOiBEZWxvbkZvcm1Db25maWcsXG4gICkge1xuICAgIHN1cGVyKHNjaGVtYVZhbGlkYXRvckZhY3RvcnksIHNjaGVtYSwgdWksIGZvcm1EYXRhLCBwYXJlbnQsIHBhdGgsIG9wdGlvbnMpO1xuICAgIHRoaXMucHJvcGVydGllcyA9IFtdO1xuICB9XG5cbiAgZ2V0UHJvcGVydHkocGF0aDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc3ViUGF0aElkeCA9IHBhdGguaW5kZXhPZihTRl9TRVEpO1xuICAgIGNvbnN0IHBvcyA9ICsoc3ViUGF0aElkeCAhPT0gLTEgPyBwYXRoLnN1YnN0cigwLCBzdWJQYXRoSWR4KSA6IHBhdGgpO1xuICAgIGNvbnN0IGxpc3QgPSB0aGlzLnByb3BlcnRpZXMgYXMgUHJvcGVydHlHcm91cFtdO1xuICAgIGlmIChpc05hTihwb3MpIHx8IHBvcyA+PSBsaXN0Lmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgY29uc3Qgc3ViUGF0aCA9IHBhdGguc3Vic3RyKHN1YlBhdGhJZHggKyAxKTtcbiAgICByZXR1cm4gbGlzdFtwb3NdLmdldFByb3BlcnR5KHN1YlBhdGgpO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWU6IFNGVmFsdWUsIG9ubHlTZWxmOiBib29sZWFuKSB7XG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gW107XG4gICAgdGhpcy5jbGVhckVycm9ycygpO1xuICAgIHRoaXMucmVzZXRQcm9wZXJ0aWVzKHZhbHVlKTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkob25seVNlbGYsIHRydWUpO1xuICB9XG5cbiAgcmVzZXRWYWx1ZSh2YWx1ZTogU0ZWYWx1ZSwgb25seVNlbGY6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlIHx8IHRoaXMuc2NoZW1hLmRlZmF1bHQgfHwgW107XG4gICAgdGhpcy5zZXRWYWx1ZSh0aGlzLl92YWx1ZSwgb25seVNlbGYpO1xuICB9XG5cbiAgX2hhc1ZhbHVlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgX3VwZGF0ZVZhbHVlKCkge1xuICAgIGNvbnN0IHZhbHVlOiBhbnlbXSA9IFtdO1xuICAgIHRoaXMuZm9yRWFjaENoaWxkKChwcm9wZXJ0eTogRm9ybVByb3BlcnR5KSA9PiB7XG4gICAgICBpZiAocHJvcGVydHkudmlzaWJsZSAmJiBwcm9wZXJ0eS5faGFzVmFsdWUoKSkge1xuICAgICAgICB2YWx1ZS5wdXNoKHsgLi4ucHJvcGVydHkuZm9ybURhdGEsIC4uLnByb3BlcnR5LnZhbHVlIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBwcml2YXRlIGFkZFByb3BlcnR5KGZvcm1EYXRhOiB7fSkge1xuICAgIGNvbnN0IG5ld1Byb3BlcnR5ID0gdGhpcy5mb3JtUHJvcGVydHlGYWN0b3J5LmNyZWF0ZVByb3BlcnR5KHRoaXMuc2NoZW1hLml0ZW1zISwgdGhpcy51aS4kaXRlbXMsIGZvcm1EYXRhLCB0aGlzKSBhcyBPYmplY3RQcm9wZXJ0eTtcbiAgICAodGhpcy5wcm9wZXJ0aWVzIGFzIEZvcm1Qcm9wZXJ0eVtdKS5wdXNoKG5ld1Byb3BlcnR5KTtcbiAgICByZXR1cm4gbmV3UHJvcGVydHk7XG4gIH1cblxuICBwcml2YXRlIHJlc2V0UHJvcGVydGllcyhmb3JtRGF0YXM6IEFycmF5PHt9Pikge1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBmb3JtRGF0YXMpIHtcbiAgICAgIGNvbnN0IHByb3BlcnR5ID0gdGhpcy5hZGRQcm9wZXJ0eShpdGVtKTtcbiAgICAgIHByb3BlcnR5LnJlc2V0VmFsdWUoaXRlbSwgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjbGVhckVycm9ycyhwYXRoPzogc3RyaW5nKSB7XG4gICAgaWYgKHBhdGgpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLl9vYmpFcnJvcnNbcGF0aF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX29iakVycm9ycyA9IHt9O1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlUGF0aHMoKSB7XG4gICAgKHRoaXMucHJvcGVydGllcyBhcyBGb3JtUHJvcGVydHlbXSkuZm9yRWFjaCgocCwgaWR4KSA9PiB7XG4gICAgICBwLnBhdGggPSBbcC5wYXJlbnQhLnBhdGgsIGlkeF0uam9pbihTRl9TRVEpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gI3JlZ2lvbiBhY3Rpb25zXG5cbiAgYWRkKGZvcm1EYXRhOiB7fSk6IEZvcm1Qcm9wZXJ0eSB7XG4gICAgY29uc3QgbmV3UHJvcGVydHkgPSB0aGlzLmFkZFByb3BlcnR5KGZvcm1EYXRhKTtcbiAgICBuZXdQcm9wZXJ0eS5yZXNldFZhbHVlKGZvcm1EYXRhLCBmYWxzZSk7XG4gICAgcmV0dXJuIG5ld1Byb3BlcnR5O1xuICB9XG5cbiAgcmVtb3ZlKGluZGV4OiBudW1iZXIpIHtcbiAgICBjb25zdCBsaXN0ID0gdGhpcy5wcm9wZXJ0aWVzIGFzIEZvcm1Qcm9wZXJ0eVtdO1xuICAgIHRoaXMuY2xlYXJFcnJvcnMobGlzdFtpbmRleF0ucGF0aCk7XG4gICAgbGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHRoaXMudXBkYXRlUGF0aHMoKTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoZmFsc2UsIHRydWUpO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxufVxuIl19