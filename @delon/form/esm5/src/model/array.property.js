/**
 * @fileoverview added by tsickle
 * Generated from: src/model/array.property.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __assign, __extends, __values } from "tslib";
import { SF_SEQ } from '../const';
import { PropertyGroup } from './form.property';
import { ObjectProperty } from './object.property';
var ArrayProperty = /** @class */ (function (_super) {
    __extends(ArrayProperty, _super);
    function ArrayProperty(formPropertyFactory, schemaValidatorFactory, schema, ui, formData, parent, path, options) {
        var _this = _super.call(this, schemaValidatorFactory, schema, ui, formData, parent, path, options) || this;
        _this.formPropertyFactory = formPropertyFactory;
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
        var subPathIdx = path.indexOf(SF_SEQ);
        /** @type {?} */
        var pos = +(subPathIdx !== -1 ? path.substr(0, subPathIdx) : path);
        /** @type {?} */
        var list = (/** @type {?} */ (this.properties));
        if (isNaN(pos) || pos >= list.length) {
            return undefined;
        }
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
                value.push(__assign(__assign({}, property.formData), property.value));
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
        var newProperty = (/** @type {?} */ (this.formPropertyFactory.createProperty((/** @type {?} */ (this.schema.items)), this.ui.$items, formData, (/** @type {?} */ (this)))));
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
            for (var formDatas_1 = __values(formDatas), formDatas_1_1 = formDatas_1.next(); !formDatas_1_1.done; formDatas_1_1 = formDatas_1.next()) {
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
     * @param {?=} property
     * @return {?}
     */
    ArrayProperty.prototype.clearErrors = /**
     * @private
     * @param {?=} property
     * @return {?}
     */
    function (property) {
        (property || this)._objErrors = {};
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
        var _this = this;
        /** @type {?} */
        var list = (/** @type {?} */ (this.properties));
        this.clearErrors();
        list.splice(index, 1);
        list.forEach((/**
         * @param {?} property
         * @param {?} idx
         * @return {?}
         */
        function (property, idx) {
            property.path = [(/** @type {?} */ (property.parent)).path, idx].join(SF_SEQ);
            _this.clearErrors(property);
            // TODO: 受限于 sf 的设计思路，对于移除数组项需要重新对每个子项进行校验，防止错误被父级合并后引起始终是错误的现象
            if (property instanceof ObjectProperty) {
                property.forEachChild((/**
                 * @param {?} p
                 * @return {?}
                 */
                function (p) {
                    p.updateValueAndValidity();
                }));
            }
        }));
        if (list.length === 0) {
            this.updateValueAndValidity();
        }
    };
    return ArrayProperty;
}(PropertyGroup));
export { ArrayProperty };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ArrayProperty.prototype.formPropertyFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXkucHJvcGVydHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vZm9ybS8iLCJzb3VyY2VzIjpbInNyYy9tb2RlbC9hcnJheS5wcm9wZXJ0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBS2xDLE9BQU8sRUFBZ0IsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFOUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRW5EO0lBQW1DLGlDQUFhO0lBQzlDLHVCQUNVLG1CQUF3QyxFQUNoRCxzQkFBOEMsRUFDOUMsTUFBZ0IsRUFDaEIsRUFBK0IsRUFDL0IsUUFBWSxFQUNaLE1BQTRCLEVBQzVCLElBQVksRUFDWixPQUF3QjtRQVIxQixZQVVFLGtCQUFNLHNCQUFzQixFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLFNBRTNFO1FBWFMseUJBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQVVoRCxLQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQzs7SUFDdkIsQ0FBQzs7Ozs7SUFFRCxtQ0FBVzs7OztJQUFYLFVBQVksSUFBWTs7WUFDaEIsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDOztZQUNqQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLFVBQVUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQzs7WUFDOUQsSUFBSSxHQUFHLG1CQUFBLElBQUksQ0FBQyxVQUFVLEVBQW1CO1FBQy9DLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3BDLE9BQU8sU0FBUyxDQUFD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QzlDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsT0FBTzs7Ozs7UUFBQyxVQUFDLFFBQVEsRUFBRSxHQUFHO1lBQ3pCLFFBQVEsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxtQkFBQSxRQUFRLENBQUMsTUFBTSxFQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMxRCxLQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzNCLCtEQUErRDtZQUMvRCxJQUFJLFFBQVEsWUFBWSxjQUFjLEVBQUU7Z0JBQ3RDLFFBQVEsQ0FBQyxZQUFZOzs7O2dCQUFDLFVBQUEsQ0FBQztvQkFDckIsQ0FBQyxDQUFDLHNCQUFzQixFQUFFLENBQUM7Z0JBQzdCLENBQUMsRUFBQyxDQUFDO2FBQ0o7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDckIsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7U0FDL0I7SUFDSCxDQUFDO0lBR0gsb0JBQUM7QUFBRCxDQUFDLEFBdEdELENBQW1DLGFBQWEsR0FzRy9DOzs7Ozs7O0lBcEdHLDRDQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERlbG9uRm9ybUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBTRl9TRVEgfSBmcm9tICcuLi9jb25zdCc7XG5pbXBvcnQgeyBTRlZhbHVlIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IFNGU2NoZW1hIH0gZnJvbSAnLi4vc2NoZW1hL2luZGV4JztcbmltcG9ydCB7IFNGVUlTY2hlbWEsIFNGVUlTY2hlbWFJdGVtIH0gZnJvbSAnLi4vc2NoZW1hL3VpJztcbmltcG9ydCB7IFNjaGVtYVZhbGlkYXRvckZhY3RvcnkgfSBmcm9tICcuLi92YWxpZGF0b3IuZmFjdG9yeSc7XG5pbXBvcnQgeyBGb3JtUHJvcGVydHksIFByb3BlcnR5R3JvdXAgfSBmcm9tICcuL2Zvcm0ucHJvcGVydHknO1xuaW1wb3J0IHsgRm9ybVByb3BlcnR5RmFjdG9yeSB9IGZyb20gJy4vZm9ybS5wcm9wZXJ0eS5mYWN0b3J5JztcbmltcG9ydCB7IE9iamVjdFByb3BlcnR5IH0gZnJvbSAnLi9vYmplY3QucHJvcGVydHknO1xuXG5leHBvcnQgY2xhc3MgQXJyYXlQcm9wZXJ0eSBleHRlbmRzIFByb3BlcnR5R3JvdXAge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGZvcm1Qcm9wZXJ0eUZhY3Rvcnk6IEZvcm1Qcm9wZXJ0eUZhY3RvcnksXG4gICAgc2NoZW1hVmFsaWRhdG9yRmFjdG9yeTogU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSxcbiAgICBzY2hlbWE6IFNGU2NoZW1hLFxuICAgIHVpOiBTRlVJU2NoZW1hIHwgU0ZVSVNjaGVtYUl0ZW0sXG4gICAgZm9ybURhdGE6IHt9LFxuICAgIHBhcmVudDogUHJvcGVydHlHcm91cCB8IG51bGwsXG4gICAgcGF0aDogc3RyaW5nLFxuICAgIG9wdGlvbnM6IERlbG9uRm9ybUNvbmZpZyxcbiAgKSB7XG4gICAgc3VwZXIoc2NoZW1hVmFsaWRhdG9yRmFjdG9yeSwgc2NoZW1hLCB1aSwgZm9ybURhdGEsIHBhcmVudCwgcGF0aCwgb3B0aW9ucyk7XG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gW107XG4gIH1cblxuICBnZXRQcm9wZXJ0eShwYXRoOiBzdHJpbmcpOiBGb3JtUHJvcGVydHkgfCB1bmRlZmluZWQge1xuICAgIGNvbnN0IHN1YlBhdGhJZHggPSBwYXRoLmluZGV4T2YoU0ZfU0VRKTtcbiAgICBjb25zdCBwb3MgPSArKHN1YlBhdGhJZHggIT09IC0xID8gcGF0aC5zdWJzdHIoMCwgc3ViUGF0aElkeCkgOiBwYXRoKTtcbiAgICBjb25zdCBsaXN0ID0gdGhpcy5wcm9wZXJ0aWVzIGFzIFByb3BlcnR5R3JvdXBbXTtcbiAgICBpZiAoaXNOYU4ocG9zKSB8fCBwb3MgPj0gbGlzdC5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGNvbnN0IHN1YlBhdGggPSBwYXRoLnN1YnN0cihzdWJQYXRoSWR4ICsgMSk7XG4gICAgcmV0dXJuIGxpc3RbcG9zXS5nZXRQcm9wZXJ0eShzdWJQYXRoKTtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlOiBTRlZhbHVlLCBvbmx5U2VsZjogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMucHJvcGVydGllcyA9IFtdO1xuICAgIHRoaXMuY2xlYXJFcnJvcnMoKTtcbiAgICB0aGlzLnJlc2V0UHJvcGVydGllcyh2YWx1ZSk7XG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KG9ubHlTZWxmLCB0cnVlKTtcbiAgfVxuXG4gIHJlc2V0VmFsdWUodmFsdWU6IFNGVmFsdWUsIG9ubHlTZWxmOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZSB8fCB0aGlzLnNjaGVtYS5kZWZhdWx0IHx8IFtdO1xuICAgIHRoaXMuc2V0VmFsdWUodGhpcy5fdmFsdWUsIG9ubHlTZWxmKTtcbiAgfVxuXG4gIF9oYXNWYWx1ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIF91cGRhdGVWYWx1ZSgpOiB2b2lkIHtcbiAgICBjb25zdCB2YWx1ZTogYW55W10gPSBbXTtcbiAgICB0aGlzLmZvckVhY2hDaGlsZCgocHJvcGVydHk6IEZvcm1Qcm9wZXJ0eSkgPT4ge1xuICAgICAgaWYgKHByb3BlcnR5LnZpc2libGUgJiYgcHJvcGVydHkuX2hhc1ZhbHVlKCkpIHtcbiAgICAgICAgdmFsdWUucHVzaCh7IC4uLnByb3BlcnR5LmZvcm1EYXRhLCAuLi5wcm9wZXJ0eS52YWx1ZSB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBhZGRQcm9wZXJ0eShmb3JtRGF0YToge30pOiBGb3JtUHJvcGVydHkge1xuICAgIGNvbnN0IG5ld1Byb3BlcnR5ID0gdGhpcy5mb3JtUHJvcGVydHlGYWN0b3J5LmNyZWF0ZVByb3BlcnR5KFxuICAgICAgdGhpcy5zY2hlbWEuaXRlbXMhLFxuICAgICAgdGhpcy51aS4kaXRlbXMsXG4gICAgICBmb3JtRGF0YSxcbiAgICAgIHRoaXMgYXMgUHJvcGVydHlHcm91cCxcbiAgICApIGFzIE9iamVjdFByb3BlcnR5O1xuICAgICh0aGlzLnByb3BlcnRpZXMgYXMgRm9ybVByb3BlcnR5W10pLnB1c2gobmV3UHJvcGVydHkpO1xuICAgIHJldHVybiBuZXdQcm9wZXJ0eTtcbiAgfVxuXG4gIHByaXZhdGUgcmVzZXRQcm9wZXJ0aWVzKGZvcm1EYXRhczogQXJyYXk8e30+KTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGZvcm1EYXRhcykge1xuICAgICAgY29uc3QgcHJvcGVydHkgPSB0aGlzLmFkZFByb3BlcnR5KGl0ZW0pO1xuICAgICAgcHJvcGVydHkucmVzZXRWYWx1ZShpdGVtLCB0cnVlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNsZWFyRXJyb3JzKHByb3BlcnR5PzogRm9ybVByb3BlcnR5KTogdm9pZCB7XG4gICAgKHByb3BlcnR5IHx8IHRoaXMpLl9vYmpFcnJvcnMgPSB7fTtcbiAgfVxuXG4gIC8vICNyZWdpb24gYWN0aW9uc1xuXG4gIGFkZChmb3JtRGF0YToge30pOiBGb3JtUHJvcGVydHkge1xuICAgIGNvbnN0IG5ld1Byb3BlcnR5ID0gdGhpcy5hZGRQcm9wZXJ0eShmb3JtRGF0YSk7XG4gICAgbmV3UHJvcGVydHkucmVzZXRWYWx1ZShmb3JtRGF0YSwgZmFsc2UpO1xuICAgIHJldHVybiBuZXdQcm9wZXJ0eTtcbiAgfVxuXG4gIHJlbW92ZShpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgbGlzdCA9IHRoaXMucHJvcGVydGllcyBhcyBGb3JtUHJvcGVydHlbXTtcbiAgICB0aGlzLmNsZWFyRXJyb3JzKCk7XG4gICAgbGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIGxpc3QuZm9yRWFjaCgocHJvcGVydHksIGlkeCkgPT4ge1xuICAgICAgcHJvcGVydHkucGF0aCA9IFtwcm9wZXJ0eS5wYXJlbnQhLnBhdGgsIGlkeF0uam9pbihTRl9TRVEpO1xuICAgICAgdGhpcy5jbGVhckVycm9ycyhwcm9wZXJ0eSk7XG4gICAgICAvLyBUT0RPOiDlj5fpmZDkuo4gc2Yg55qE6K6+6K6h5oCd6Lev77yM5a+55LqO56e76Zmk5pWw57uE6aG56ZyA6KaB6YeN5paw5a+55q+P5Liq5a2Q6aG56L+b6KGM5qCh6aqM77yM6Ziy5q2i6ZSZ6K+v6KKr54i257qn5ZCI5bm25ZCO5byV6LW35aeL57uI5piv6ZSZ6K+v55qE546w6LGhXG4gICAgICBpZiAocHJvcGVydHkgaW5zdGFuY2VvZiBPYmplY3RQcm9wZXJ0eSkge1xuICAgICAgICBwcm9wZXJ0eS5mb3JFYWNoQ2hpbGQocCA9PiB7XG4gICAgICAgICAgcC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgfVxuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxufVxuIl19