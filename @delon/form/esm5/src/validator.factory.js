/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Inject, Optional } from '@angular/core';
import { DelonFormConfig } from './config';
/**
 * @abstract
 */
var /**
 * @abstract
 */
SchemaValidatorFactory = /** @class */ (function () {
    function SchemaValidatorFactory() {
    }
    return SchemaValidatorFactory;
}());
/**
 * @abstract
 */
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
    tslib_1.__extends(AjvSchemaValidatorFactory, _super);
    function AjvSchemaValidatorFactory(options) {
        var _this = _super.call(this) || this;
        _this.options = options;
        _this.ajv = new Ajv(Object.assign({}, options.ajv, {
            errorDataPath: 'property',
            allErrors: true,
            jsonPointers: true,
        }));
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
        var ingoreKeywords = []
            .concat(this.options.ingoreKeywords)
            .concat(extraOptions.ingoreKeywords);
        return function (value) {
            try {
                _this.ajv.validate(schema, value);
            }
            catch (e) {
                // swallow errors thrown in ajv due to invalid schemas, these
                // still get displayed
            }
            /** @type {?} */
            var errors = _this.ajv.errors;
            if (_this.options && ingoreKeywords && errors) {
                errors = errors.filter(function (w) { return ingoreKeywords.indexOf(w.keyword) === -1; });
            }
            return errors;
        };
    };
    /** @nocollapse */
    AjvSchemaValidatorFactory.ctorParameters = function () { return [
        { type: DelonFormConfig, decorators: [{ type: Optional }, { type: Inject, args: [DelonFormConfig,] }] }
    ]; };
    return AjvSchemaValidatorFactory;
}(SchemaValidatorFactory));
export { AjvSchemaValidatorFactory };
if (false) {
    /** @type {?} */
    AjvSchemaValidatorFactory.prototype.ajv;
    /** @type {?} */
    AjvSchemaValidatorFactory.prototype.options;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLmZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vZm9ybS8iLCJzb3VyY2VzIjpbInNyYy92YWxpZGF0b3IuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxVQUFVLENBQUM7Ozs7QUFNM0M7OztBQUFBOzs7aUNBUEE7SUFZQyxDQUFBOzs7O0FBTEQsa0NBS0M7Ozs7Ozs7Ozs7O0lBRThDLHFEQUFzQjtJQUduRSxtQ0FHVSxPQUF3QjtRQUhsQyxZQUtFLGlCQUFPLFNBd0JSO1FBMUJTLGFBQU8sR0FBUCxPQUFPLENBQWlCO1FBR2hDLEtBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQ2hCLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxHQUFHLEVBQUU7WUFDN0IsYUFBYSxFQUFFLFVBQVU7WUFDekIsU0FBUyxFQUFFLElBQUk7WUFDZixZQUFZLEVBQUUsSUFBSTtTQUNuQixDQUFDLENBQ0gsQ0FBQztRQUNGLEtBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUNoQixVQUFVLEVBQ1Ysc0RBQXNELENBQ3ZELENBQUM7UUFDRixLQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FDaEIsT0FBTyxFQUNQLDRZQUE0WSxDQUM3WSxDQUFDO1FBQ0YsS0FBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQ2hCLFFBQVEsRUFDUiw4QkFBOEIsQ0FDL0IsQ0FBQztRQUNGLEtBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUNoQixTQUFTLEVBQ1QsZ0NBQWdDLENBQ2pDLENBQUM7O0tBQ0g7Ozs7OztJQUVELHFEQUFpQjs7Ozs7SUFBakIsVUFDRSxNQUFnQixFQUNoQixZQUEwQztRQUY1QyxpQkFxQkM7O1FBakJDLElBQU0sY0FBYyxHQUFhLEVBQUU7YUFDaEMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDO2FBQ25DLE1BQU0sQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFdkMsT0FBTyxVQUFDLEtBQVU7WUFDaEIsSUFBSTtnQkFDRixLQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDbEM7WUFBQyxPQUFPLENBQUMsRUFBRTs7O2FBR1g7O1lBQ0QsSUFBSSxNQUFNLEdBQUcsS0FBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7WUFDN0IsSUFBSSxLQUFJLENBQUMsT0FBTyxJQUFJLGNBQWMsSUFBSSxNQUFNLEVBQUU7Z0JBQzVDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQXhDLENBQXdDLENBQUMsQ0FBQzthQUN2RTtZQUNELE9BQU8sTUFBTSxDQUFDO1NBQ2YsQ0FBQztLQUNIOzs7Z0JBcEVNLGVBQWUsdUJBaUJuQixRQUFRLFlBQ1IsTUFBTSxTQUFDLGVBQWU7O29DQW5CM0I7RUFjK0Msc0JBQXNCO1NBQXhELHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGVsb25Gb3JtQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xyXG5pbXBvcnQgeyBFcnJvckRhdGEgfSBmcm9tICcuL2Vycm9ycyc7XHJcbmltcG9ydCB7IFNGU2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEnO1xyXG5cclxuZGVjbGFyZSB2YXIgQWp2OiBhbnk7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSB7XHJcbiAgYWJzdHJhY3QgY3JlYXRlVmFsaWRhdG9yRm4oXHJcbiAgICBzY2hlbWE6IFNGU2NoZW1hLFxyXG4gICAgZXh0cmFPcHRpb25zOiB7IGluZ29yZUtleXdvcmRzOiBzdHJpbmdbXSB9LFxyXG4gICk6ICh2YWx1ZTogU0ZTY2hlbWEpID0+IEVycm9yRGF0YVtdO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQWp2U2NoZW1hVmFsaWRhdG9yRmFjdG9yeSBleHRlbmRzIFNjaGVtYVZhbGlkYXRvckZhY3Rvcnkge1xyXG4gIHByb3RlY3RlZCBhanY6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBAT3B0aW9uYWwoKVxyXG4gICAgQEluamVjdChEZWxvbkZvcm1Db25maWcpXHJcbiAgICBwcml2YXRlIG9wdGlvbnM6IERlbG9uRm9ybUNvbmZpZyxcclxuICApIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLmFqdiA9IG5ldyBBanYoXHJcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMuYWp2LCB7XHJcbiAgICAgICAgZXJyb3JEYXRhUGF0aDogJ3Byb3BlcnR5JyxcclxuICAgICAgICBhbGxFcnJvcnM6IHRydWUsXHJcbiAgICAgICAganNvblBvaW50ZXJzOiB0cnVlLFxyXG4gICAgICB9KSxcclxuICAgICk7XHJcbiAgICB0aGlzLmFqdi5hZGRGb3JtYXQoXHJcbiAgICAgICdkYXRhLXVybCcsXHJcbiAgICAgIC9eZGF0YTooW2Etel0rXFwvW2EtejAtOS0rLl0rKT87bmFtZT0oLiopO2Jhc2U2NCwoLiopJC8sXHJcbiAgICApO1xyXG4gICAgdGhpcy5hanYuYWRkRm9ybWF0KFxyXG4gICAgICAnY29sb3InLFxyXG4gICAgICAvXigjPyhbMC05QS1GYS1mXXszfSl7MSwyfVxcYnxhcXVhfGJsYWNrfGJsdWV8ZnVjaHNpYXxncmF5fGdyZWVufGxpbWV8bWFyb29ufG5hdnl8b2xpdmV8b3JhbmdlfHB1cnBsZXxyZWR8c2lsdmVyfHRlYWx8d2hpdGV8eWVsbG93fChyZ2JcXChcXHMqXFxiKFswLTldfFsxLTldWzAtOV18MVswLTldWzAtOV18MlswLTRdWzAtOV18MjVbMC01XSlcXGJcXHMqLFxccypcXGIoWzAtOV18WzEtOV1bMC05XXwxWzAtOV1bMC05XXwyWzAtNF1bMC05XXwyNVswLTVdKVxcYlxccyosXFxzKlxcYihbMC05XXxbMS05XVswLTldfDFbMC05XVswLTldfDJbMC00XVswLTldfDI1WzAtNV0pXFxiXFxzKlxcKSl8KHJnYlxcKFxccyooXFxkP1xcZCV8MTAwJSkrXFxzKixcXHMqKFxcZD9cXGQlfDEwMCUpK1xccyosXFxzKihcXGQ/XFxkJXwxMDAlKStcXHMqXFwpKSkkLyxcclxuICAgICk7XHJcbiAgICB0aGlzLmFqdi5hZGRGb3JtYXQoXHJcbiAgICAgICdtb2JpbGUnLFxyXG4gICAgICAvXigwfFxcKz84NnwxNzk1MSk/MVswLTldezEwfSQvLFxyXG4gICAgKTtcclxuICAgIHRoaXMuYWp2LmFkZEZvcm1hdChcclxuICAgICAgJ2lkLWNhcmQnLFxyXG4gICAgICAvKF5cXGR7MTV9JCl8KF5cXGR7MTd9KFswLTldfFgpJCkvLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZVZhbGlkYXRvckZuKFxyXG4gICAgc2NoZW1hOiBTRlNjaGVtYSxcclxuICAgIGV4dHJhT3B0aW9uczogeyBpbmdvcmVLZXl3b3Jkczogc3RyaW5nW10gfSxcclxuICApOiAodmFsdWU6IGFueSkgPT4gRXJyb3JEYXRhW10ge1xyXG4gICAgY29uc3QgaW5nb3JlS2V5d29yZHM6IHN0cmluZ1tdID0gW11cclxuICAgICAgLmNvbmNhdCh0aGlzLm9wdGlvbnMuaW5nb3JlS2V5d29yZHMpXHJcbiAgICAgIC5jb25jYXQoZXh0cmFPcHRpb25zLmluZ29yZUtleXdvcmRzKTtcclxuXHJcbiAgICByZXR1cm4gKHZhbHVlOiBhbnkpOiBFcnJvckRhdGFbXSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgdGhpcy5hanYudmFsaWRhdGUoc2NoZW1hLCB2YWx1ZSk7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAvLyBzd2FsbG93IGVycm9ycyB0aHJvd24gaW4gYWp2IGR1ZSB0byBpbnZhbGlkIHNjaGVtYXMsIHRoZXNlXHJcbiAgICAgICAgLy8gc3RpbGwgZ2V0IGRpc3BsYXllZFxyXG4gICAgICB9XHJcbiAgICAgIGxldCBlcnJvcnMgPSB0aGlzLmFqdi5lcnJvcnM7XHJcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMgJiYgaW5nb3JlS2V5d29yZHMgJiYgZXJyb3JzKSB7XHJcbiAgICAgICAgZXJyb3JzID0gZXJyb3JzLmZpbHRlcih3ID0+IGluZ29yZUtleXdvcmRzLmluZGV4T2Yody5rZXl3b3JkKSA9PT0gLTEpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBlcnJvcnM7XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=