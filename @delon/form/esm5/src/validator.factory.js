/**
 * @fileoverview added by tsickle
 * Generated from: src/validator.factory.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __assign, __extends, __read, __spread } from "tslib";
import { Inject, Injectable } from '@angular/core';
import { DelonFormConfig } from './config';
/**
 * @abstract
 */
var SchemaValidatorFactory = /** @class */ (function () {
    function SchemaValidatorFactory() {
    }
    SchemaValidatorFactory.decorators = [
        { type: Injectable }
    ];
    return SchemaValidatorFactory;
}());
export { SchemaValidatorFactory };
if (false) {
    /**
     * @abstract
     * @param {?} schema
     * @param {?} extraOptions
     * @return {?}
     */
    SchemaValidatorFactory.prototype.createValidatorFn = function (schema, extraOptions) { };
}
var AjvSchemaValidatorFactory = /** @class */ (function (_super) {
    __extends(AjvSchemaValidatorFactory, _super);
    function AjvSchemaValidatorFactory(options) {
        var _this = _super.call(this) || this;
        _this.options = options;
        _this.ajv = new Ajv(__assign(__assign({}, options.ajv), { errorDataPath: 'property', allErrors: true, jsonPointers: true }));
        _this.ajv.addFormat('data-url', /^data:([a-z]+\/[a-z0-9-+.]+)?;name=(.*);base64,(.*)$/);
        _this.ajv.addFormat('color', /^(#?([0-9A-Fa-f]{3}){1,2}\b|aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow|(rgb\(\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*\))|(rgb\(\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*\)))$/);
        _this.ajv.addFormat('mobile', /^(0|\+?86|17951)?1[0-9]{10}$/);
        _this.ajv.addFormat('id-card', /(^\d{15}$)|(^\d{17}([0-9]|X)$)/);
        return _this;
    }
    /**
     * @param {?} schema
     * @param {?} extraOptions
     * @return {?}
     */
    AjvSchemaValidatorFactory.prototype.createValidatorFn = /**
     * @param {?} schema
     * @param {?} extraOptions
     * @return {?}
     */
    function (schema, extraOptions) {
        var _this = this;
        /** @type {?} */
        var ingoreKeywords = __spread(((/** @type {?} */ (this.options.ingoreKeywords))), (((/** @type {?} */ (extraOptions.ingoreKeywords))) || []));
        return (/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            try {
                _this.ajv.validate(schema, value);
            }
            catch (e) {
                // swallow errors thrown in ajv due to invalid schemas, these
                // still get displayed
                if (extraOptions.debug) {
                    console.warn(e);
                }
            }
            /** @type {?} */
            var errors = _this.ajv.errors;
            if (_this.options && ingoreKeywords && errors) {
                errors = errors.filter((/**
                 * @param {?} w
                 * @return {?}
                 */
                function (w) { return ingoreKeywords.indexOf(w.keyword) === -1; }));
            }
            return errors;
        });
    };
    AjvSchemaValidatorFactory.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    AjvSchemaValidatorFactory.ctorParameters = function () { return [
        { type: DelonFormConfig, decorators: [{ type: Inject, args: [DelonFormConfig,] }] }
    ]; };
    return AjvSchemaValidatorFactory;
}(SchemaValidatorFactory));
export { AjvSchemaValidatorFactory };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AjvSchemaValidatorFactory.prototype.ajv;
    /**
     * @type {?}
     * @private
     */
    AjvSchemaValidatorFactory.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLmZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vZm9ybS8iLCJzb3VyY2VzIjpbInNyYy92YWxpZGF0b3IuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sVUFBVSxDQUFDOzs7O0FBTzNDO0lBQUE7SUFNQSxDQUFDOztnQkFOQSxVQUFVOztJQU1YLDZCQUFDO0NBQUEsQUFORCxJQU1DO1NBTHFCLHNCQUFzQjs7Ozs7Ozs7SUFDMUMseUZBR29DOztBQUd0QztJQUMrQyw2Q0FBc0I7SUFHbkUsbUNBQTZDLE9BQXdCO1FBQXJFLFlBQ0UsaUJBQU8sU0FjUjtRQWY0QyxhQUFPLEdBQVAsT0FBTyxDQUFpQjtRQUVuRSxLQUFJLENBQUMsR0FBRyxHQUFHLElBQUksR0FBRyx1QkFDYixPQUFPLENBQUMsR0FBRyxLQUNkLGFBQWEsRUFBRSxVQUFVLEVBQ3pCLFNBQVMsRUFBRSxJQUFJLEVBQ2YsWUFBWSxFQUFFLElBQUksSUFDbEIsQ0FBQztRQUNILEtBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxzREFBc0QsQ0FBQyxDQUFDO1FBQ3ZGLEtBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUNoQixPQUFPLEVBQ1AsNFlBQTRZLENBQzdZLENBQUM7UUFDRixLQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsOEJBQThCLENBQUMsQ0FBQztRQUM3RCxLQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsZ0NBQWdDLENBQUMsQ0FBQzs7SUFDbEUsQ0FBQzs7Ozs7O0lBRUQscURBQWlCOzs7OztJQUFqQixVQUFrQixNQUFnQixFQUFFLFlBQTBEO1FBQTlGLGlCQW1CQzs7WUFsQk8sY0FBYyxZQUFpQixDQUFDLG1CQUFBLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFZLENBQUMsRUFBSyxDQUFDLENBQUMsbUJBQUEsWUFBWSxDQUFDLGNBQWMsRUFBWSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFFckk7Ozs7UUFBTyxVQUFDLEtBQWM7WUFDcEIsSUFBSTtnQkFDRixLQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDbEM7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDViw2REFBNkQ7Z0JBQzdELHNCQUFzQjtnQkFDdEIsSUFBSSxZQUFZLENBQUMsS0FBSyxFQUFFO29CQUN0QixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNqQjthQUNGOztnQkFDRyxNQUFNLEdBQVUsS0FBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNO1lBQ25DLElBQUksS0FBSSxDQUFDLE9BQU8sSUFBSSxjQUFjLElBQUksTUFBTSxFQUFFO2dCQUM1QyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU07Ozs7Z0JBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBeEMsQ0FBd0MsRUFBQyxDQUFDO2FBQ3ZFO1lBQ0QsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQyxFQUFDO0lBQ0osQ0FBQzs7Z0JBeENGLFVBQVU7Ozs7Z0JBZkYsZUFBZSx1QkFtQlQsTUFBTSxTQUFDLGVBQWU7O0lBcUNyQyxnQ0FBQztDQUFBLEFBekNELENBQytDLHNCQUFzQixHQXdDcEU7U0F4Q1kseUJBQXlCOzs7Ozs7SUFDcEMsd0NBQXlCOzs7OztJQUViLDRDQUF5RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IERlbG9uRm9ybUNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7IEVycm9yRGF0YSB9IGZyb20gJy4vZXJyb3JzJztcbmltcG9ydCB7IFNGVmFsdWUgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBTRlNjaGVtYSB9IGZyb20gJy4vc2NoZW1hJztcblxuZGVjbGFyZSB2YXIgQWp2OiBOelNhZmVBbnk7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTY2hlbWFWYWxpZGF0b3JGYWN0b3J5IHtcbiAgYWJzdHJhY3QgY3JlYXRlVmFsaWRhdG9yRm4oXG4gICAgc2NoZW1hOiBTRlNjaGVtYSxcbiAgICBleHRyYU9wdGlvbnM6IHsgaW5nb3JlS2V5d29yZHM6IHN0cmluZ1tdOyBkZWJ1ZzogYm9vbGVhbiB9LFxuICApOiAodmFsdWU6IFNGU2NoZW1hKSA9PiBFcnJvckRhdGFbXTtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFqdlNjaGVtYVZhbGlkYXRvckZhY3RvcnkgZXh0ZW5kcyBTY2hlbWFWYWxpZGF0b3JGYWN0b3J5IHtcbiAgcHJvdGVjdGVkIGFqdjogTnpTYWZlQW55O1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoRGVsb25Gb3JtQ29uZmlnKSBwcml2YXRlIG9wdGlvbnM6IERlbG9uRm9ybUNvbmZpZykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5hanYgPSBuZXcgQWp2KHtcbiAgICAgIC4uLm9wdGlvbnMuYWp2LFxuICAgICAgZXJyb3JEYXRhUGF0aDogJ3Byb3BlcnR5JyxcbiAgICAgIGFsbEVycm9yczogdHJ1ZSxcbiAgICAgIGpzb25Qb2ludGVyczogdHJ1ZSxcbiAgICB9KTtcbiAgICB0aGlzLmFqdi5hZGRGb3JtYXQoJ2RhdGEtdXJsJywgL15kYXRhOihbYS16XStcXC9bYS16MC05LSsuXSspPztuYW1lPSguKik7YmFzZTY0LCguKikkLyk7XG4gICAgdGhpcy5hanYuYWRkRm9ybWF0KFxuICAgICAgJ2NvbG9yJyxcbiAgICAgIC9eKCM/KFswLTlBLUZhLWZdezN9KXsxLDJ9XFxifGFxdWF8YmxhY2t8Ymx1ZXxmdWNoc2lhfGdyYXl8Z3JlZW58bGltZXxtYXJvb258bmF2eXxvbGl2ZXxvcmFuZ2V8cHVycGxlfHJlZHxzaWx2ZXJ8dGVhbHx3aGl0ZXx5ZWxsb3d8KHJnYlxcKFxccypcXGIoWzAtOV18WzEtOV1bMC05XXwxWzAtOV1bMC05XXwyWzAtNF1bMC05XXwyNVswLTVdKVxcYlxccyosXFxzKlxcYihbMC05XXxbMS05XVswLTldfDFbMC05XVswLTldfDJbMC00XVswLTldfDI1WzAtNV0pXFxiXFxzKixcXHMqXFxiKFswLTldfFsxLTldWzAtOV18MVswLTldWzAtOV18MlswLTRdWzAtOV18MjVbMC01XSlcXGJcXHMqXFwpKXwocmdiXFwoXFxzKihcXGQ/XFxkJXwxMDAlKStcXHMqLFxccyooXFxkP1xcZCV8MTAwJSkrXFxzKixcXHMqKFxcZD9cXGQlfDEwMCUpK1xccypcXCkpKSQvLFxuICAgICk7XG4gICAgdGhpcy5hanYuYWRkRm9ybWF0KCdtb2JpbGUnLCAvXigwfFxcKz84NnwxNzk1MSk/MVswLTldezEwfSQvKTtcbiAgICB0aGlzLmFqdi5hZGRGb3JtYXQoJ2lkLWNhcmQnLCAvKF5cXGR7MTV9JCl8KF5cXGR7MTd9KFswLTldfFgpJCkvKTtcbiAgfVxuXG4gIGNyZWF0ZVZhbGlkYXRvckZuKHNjaGVtYTogU0ZTY2hlbWEsIGV4dHJhT3B0aW9uczogeyBpbmdvcmVLZXl3b3Jkczogc3RyaW5nW107IGRlYnVnOiBib29sZWFuIH0pOiAodmFsdWU6IFNGVmFsdWUpID0+IEVycm9yRGF0YVtdIHtcbiAgICBjb25zdCBpbmdvcmVLZXl3b3Jkczogc3RyaW5nW10gPSBbLi4uKHRoaXMub3B0aW9ucy5pbmdvcmVLZXl3b3JkcyBhcyBzdHJpbmdbXSksIC4uLigoZXh0cmFPcHRpb25zLmluZ29yZUtleXdvcmRzIGFzIHN0cmluZ1tdKSB8fCBbXSldO1xuXG4gICAgcmV0dXJuICh2YWx1ZTogU0ZWYWx1ZSk6IEVycm9yRGF0YVtdID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuYWp2LnZhbGlkYXRlKHNjaGVtYSwgdmFsdWUpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBzd2FsbG93IGVycm9ycyB0aHJvd24gaW4gYWp2IGR1ZSB0byBpbnZhbGlkIHNjaGVtYXMsIHRoZXNlXG4gICAgICAgIC8vIHN0aWxsIGdldCBkaXNwbGF5ZWRcbiAgICAgICAgaWYgKGV4dHJhT3B0aW9ucy5kZWJ1Zykge1xuICAgICAgICAgIGNvbnNvbGUud2FybihlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGV0IGVycm9yczogYW55W10gPSB0aGlzLmFqdi5lcnJvcnM7XG4gICAgICBpZiAodGhpcy5vcHRpb25zICYmIGluZ29yZUtleXdvcmRzICYmIGVycm9ycykge1xuICAgICAgICBlcnJvcnMgPSBlcnJvcnMuZmlsdGVyKHcgPT4gaW5nb3JlS2V5d29yZHMuaW5kZXhPZih3LmtleXdvcmQpID09PSAtMSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZXJyb3JzO1xuICAgIH07XG4gIH1cbn1cbiJdfQ==