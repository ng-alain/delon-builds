/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        var list = /** @type {?} */ (this.properties);
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
        this.properties = [];
        this.clearErrors();
        this.resetProperties(this._value);
        this.updateValueAndValidity(onlySelf, true);
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
        this.forEachChild(function (property, _) {
            if (property.visible && property._hasValue()) {
                value.push(Object.assign({}, property.formData, property.value));
            }
        });
        this._value = value;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ArrayProperty.prototype.addProperty = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var newProperty = /** @type {?} */ (this.formPropertyFactory.createProperty(this.schema.items, this.ui["$items"], value, this));
        (/** @type {?} */ (this.properties)).push(newProperty);
        return newProperty;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ArrayProperty.prototype.resetProperties = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var e_1, _a;
        try {
            for (var value_1 = tslib_1.__values(value), value_1_1 = value_1.next(); !value_1_1.done; value_1_1 = value_1.next()) {
                var item = value_1_1.value;
                /** @type {?} */
                var property = this.addProperty(item);
                property.resetValue(item, true);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (value_1_1 && !value_1_1.done && (_a = value_1.return)) _a.call(value_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * @param {?=} path
     * @return {?}
     */
    ArrayProperty.prototype.clearErrors = /**
     * @param {?=} path
     * @return {?}
     */
    function (path) {
        if (path)
            delete this._objErrors[path];
        else
            this._objErrors = {};
    };
    // region: actions
    /**
     * @param {?} value
     * @return {?}
     */
    ArrayProperty.prototype.add = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var newProperty = this.addProperty(value);
        newProperty.resetValue(value, false);
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
        var list = /** @type {?} */ (this.properties);
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
    /** @type {?} */
    ArrayProperty.prototype.formPropertyFactory;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXkucHJvcGVydHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vZm9ybS8iLCJzb3VyY2VzIjpbInNyYy9tb2RlbC9hcnJheS5wcm9wZXJ0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQWdCLE1BQU0saUJBQWlCLENBQUM7QUFROUQsSUFBQTtJQUFtQyx5Q0FBYTtJQUc5Qyx1QkFDVSxxQkFDUixzQkFBOEMsRUFDOUMsTUFBVyxFQUNYLEVBQStCLEVBQy9CLFFBQVksRUFDWixNQUFxQixFQUNyQixJQUFZLEVBQ1osT0FBd0I7UUFSMUIsWUFVRSxrQkFBTSxzQkFBc0IsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxTQUUzRTtRQVhTLHlCQUFtQixHQUFuQixtQkFBbUI7cUJBSHRCLENBQUM7UUFhTixLQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQzs7S0FDdEI7Ozs7O0lBRUQsbUNBQVc7Ozs7SUFBWCxVQUFZLElBQVk7O1FBQ3RCLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7O1FBQ3JDLElBQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxVQUFVLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7UUFDckUsSUFBTSxJQUFJLHFCQUFHLElBQUksQ0FBQyxVQUE2QixFQUFDO1FBQ2hELElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTTtZQUFFLE9BQU8sU0FBUyxDQUFDOztRQUN2RCxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM1QyxP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QUM3QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsc0JBQXNCLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQzFDO3dCQW5HSDtFQVFtQyxhQUFhLEVBOEYvQyxDQUFBO0FBOUZELHlCQThGQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb3BlcnR5R3JvdXAsIEZvcm1Qcm9wZXJ0eSB9IGZyb20gJy4vZm9ybS5wcm9wZXJ0eSc7XHJcbmltcG9ydCB7IFNjaGVtYVZhbGlkYXRvckZhY3RvcnkgfSBmcm9tICcuLi92YWxpZGF0b3IuZmFjdG9yeSc7XHJcbmltcG9ydCB7IFNGVUlTY2hlbWEsIFNGVUlTY2hlbWFJdGVtIH0gZnJvbSAnLi4vc2NoZW1hL3VpJztcclxuaW1wb3J0IHsgRGVsb25Gb3JtQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJztcclxuaW1wb3J0IHsgRm9ybVByb3BlcnR5RmFjdG9yeSB9IGZyb20gJy4vZm9ybS5wcm9wZXJ0eS5mYWN0b3J5JztcclxuaW1wb3J0IHsgT2JqZWN0UHJvcGVydHkgfSBmcm9tICcuL29iamVjdC5wcm9wZXJ0eSc7XHJcbmltcG9ydCB7IEVycm9yRGF0YSB9IGZyb20gJy4uL2Vycm9ycyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXJyYXlQcm9wZXJ0eSBleHRlbmRzIFByb3BlcnR5R3JvdXAge1xyXG4gIHRpY2sgPSAxO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZm9ybVByb3BlcnR5RmFjdG9yeTogRm9ybVByb3BlcnR5RmFjdG9yeSxcclxuICAgIHNjaGVtYVZhbGlkYXRvckZhY3Rvcnk6IFNjaGVtYVZhbGlkYXRvckZhY3RvcnksXHJcbiAgICBzY2hlbWE6IGFueSxcclxuICAgIHVpOiBTRlVJU2NoZW1hIHwgU0ZVSVNjaGVtYUl0ZW0sXHJcbiAgICBmb3JtRGF0YToge30sXHJcbiAgICBwYXJlbnQ6IFByb3BlcnR5R3JvdXAsXHJcbiAgICBwYXRoOiBzdHJpbmcsXHJcbiAgICBvcHRpb25zOiBEZWxvbkZvcm1Db25maWcsXHJcbiAgKSB7XHJcbiAgICBzdXBlcihzY2hlbWFWYWxpZGF0b3JGYWN0b3J5LCBzY2hlbWEsIHVpLCBmb3JtRGF0YSwgcGFyZW50LCBwYXRoLCBvcHRpb25zKTtcclxuICAgIHRoaXMucHJvcGVydGllcyA9IFtdO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJvcGVydHkocGF0aDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBzdWJQYXRoSWR4ID0gcGF0aC5pbmRleE9mKCcvJyk7XHJcbiAgICBjb25zdCBwb3MgPSArKHN1YlBhdGhJZHggIT09IC0xID8gcGF0aC5zdWJzdHIoMCwgc3ViUGF0aElkeCkgOiBwYXRoKTtcclxuICAgIGNvbnN0IGxpc3QgPSB0aGlzLnByb3BlcnRpZXMgYXMgUHJvcGVydHlHcm91cFtdO1xyXG4gICAgaWYgKGlzTmFOKHBvcykgfHwgcG9zID49IGxpc3QubGVuZ3RoKSByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgY29uc3Qgc3ViUGF0aCA9IHBhdGguc3Vic3RyKHN1YlBhdGhJZHggKyAxKTtcclxuICAgIHJldHVybiBsaXN0W3Bvc10uZ2V0UHJvcGVydHkoc3ViUGF0aCk7XHJcbiAgfVxyXG5cclxuICBzZXRWYWx1ZSh2YWx1ZTogYW55LCBvbmx5U2VsZjogYm9vbGVhbikge1xyXG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gW107XHJcbiAgICB0aGlzLmNsZWFyRXJyb3JzKCk7XHJcbiAgICB0aGlzLnJlc2V0UHJvcGVydGllcyh2YWx1ZSk7XHJcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkob25seVNlbGYsIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgcmVzZXRWYWx1ZSh2YWx1ZTogYW55LCBvbmx5U2VsZjogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZSB8fCB0aGlzLnNjaGVtYS5kZWZhdWx0IHx8IFtdO1xyXG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gW107XHJcbiAgICB0aGlzLmNsZWFyRXJyb3JzKCk7XHJcbiAgICB0aGlzLnJlc2V0UHJvcGVydGllcyh0aGlzLl92YWx1ZSk7XHJcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkob25seVNlbGYsIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgX2hhc1ZhbHVlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBfdXBkYXRlVmFsdWUoKSB7XHJcbiAgICBjb25zdCB2YWx1ZTogYW55W10gPSBbXTtcclxuICAgIHRoaXMuZm9yRWFjaENoaWxkKChwcm9wZXJ0eTogT2JqZWN0UHJvcGVydHksIF8pID0+IHtcclxuICAgICAgaWYgKHByb3BlcnR5LnZpc2libGUgJiYgcHJvcGVydHkuX2hhc1ZhbHVlKCkpIHtcclxuICAgICAgICB2YWx1ZS5wdXNoKE9iamVjdC5hc3NpZ24oe30sIHByb3BlcnR5LmZvcm1EYXRhLCBwcm9wZXJ0eS52YWx1ZSkpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFkZFByb3BlcnR5KHZhbHVlOiBhbnkpIHtcclxuICAgIGNvbnN0IG5ld1Byb3BlcnR5ID0gdGhpcy5mb3JtUHJvcGVydHlGYWN0b3J5LmNyZWF0ZVByb3BlcnR5KFxyXG4gICAgICB0aGlzLnNjaGVtYS5pdGVtcyxcclxuICAgICAgdGhpcy51aS4kaXRlbXMsXHJcbiAgICAgIHZhbHVlLFxyXG4gICAgICB0aGlzLFxyXG4gICAgKSBhcyBPYmplY3RQcm9wZXJ0eTtcclxuICAgICg8Rm9ybVByb3BlcnR5W10+dGhpcy5wcm9wZXJ0aWVzKS5wdXNoKG5ld1Byb3BlcnR5KTtcclxuICAgIHJldHVybiBuZXdQcm9wZXJ0eTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVzZXRQcm9wZXJ0aWVzKHZhbHVlOiBhbnlbXSkge1xyXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHZhbHVlKSB7XHJcbiAgICAgIGNvbnN0IHByb3BlcnR5ID0gdGhpcy5hZGRQcm9wZXJ0eShpdGVtKTtcclxuICAgICAgcHJvcGVydHkucmVzZXRWYWx1ZShpdGVtLCB0cnVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2xlYXJFcnJvcnMocGF0aD86IHN0cmluZykge1xyXG4gICAgaWYgKHBhdGgpIGRlbGV0ZSB0aGlzLl9vYmpFcnJvcnNbcGF0aF07XHJcbiAgICBlbHNlIHRoaXMuX29iakVycm9ycyA9IHt9O1xyXG4gIH1cclxuXHJcbiAgLy8gcmVnaW9uOiBhY3Rpb25zXHJcblxyXG4gIGFkZCh2YWx1ZTogYW55KTogRm9ybVByb3BlcnR5IHtcclxuICAgIGNvbnN0IG5ld1Byb3BlcnR5ID0gdGhpcy5hZGRQcm9wZXJ0eSh2YWx1ZSk7XHJcbiAgICBuZXdQcm9wZXJ0eS5yZXNldFZhbHVlKHZhbHVlLCBmYWxzZSk7XHJcbiAgICByZXR1cm4gbmV3UHJvcGVydHk7XHJcbiAgfVxyXG5cclxuICByZW1vdmUoaW5kZXg6IG51bWJlcikge1xyXG4gICAgY29uc3QgbGlzdCA9IDxGb3JtUHJvcGVydHlbXT50aGlzLnByb3BlcnRpZXM7XHJcbiAgICB0aGlzLmNsZWFyRXJyb3JzKGxpc3RbaW5kZXhdLnBhdGgpO1xyXG4gICAgbGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KGZhbHNlLCB0cnVlKTtcclxuICB9XHJcblxyXG4gIC8vIGVuZHJlZ2lvblxyXG59XHJcbiJdfQ==