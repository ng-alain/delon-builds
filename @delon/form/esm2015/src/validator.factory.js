/**
 * @fileoverview added by tsickle
 * Generated from: src/validator.factory.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { DelonFormConfig } from './config';
/**
 * @abstract
 */
export class SchemaValidatorFactory {
}
SchemaValidatorFactory.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * @abstract
     * @param {?} schema
     * @param {?} extraOptions
     * @return {?}
     */
    SchemaValidatorFactory.prototype.createValidatorFn = function (schema, extraOptions) { };
}
export class AjvSchemaValidatorFactory extends SchemaValidatorFactory {
    /**
     * @param {?} options
     */
    constructor(options) {
        super();
        this.options = options;
        this.ajv = new Ajv(Object.assign(Object.assign({}, options.ajv), { errorDataPath: 'property', allErrors: true, jsonPointers: true }));
        this.ajv.addFormat('data-url', /^data:([a-z]+\/[a-z0-9-+.]+)?;name=(.*);base64,(.*)$/);
        this.ajv.addFormat('color', /^(#?([0-9A-Fa-f]{3}){1,2}\b|aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow|(rgb\(\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*\))|(rgb\(\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*\)))$/);
        this.ajv.addFormat('mobile', /^(0|\+?86|17951)?1[0-9]{10}$/);
        this.ajv.addFormat('id-card', /(^\d{15}$)|(^\d{17}([0-9]|X)$)/);
    }
    /**
     * @param {?} schema
     * @param {?} extraOptions
     * @return {?}
     */
    createValidatorFn(schema, extraOptions) {
        /** @type {?} */
        const ingoreKeywords = [...((/** @type {?} */ (this.options.ingoreKeywords))), ...(((/** @type {?} */ (extraOptions.ingoreKeywords))) || [])];
        return (/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            try {
                this.ajv.validate(schema, value);
            }
            catch (e) {
                // swallow errors thrown in ajv due to invalid schemas, these
                // still get displayed
                if (extraOptions.debug) {
                    console.warn(e);
                }
            }
            /** @type {?} */
            let errors = this.ajv.errors;
            if (this.options && ingoreKeywords && errors) {
                errors = errors.filter((/**
                 * @param {?} w
                 * @return {?}
                 */
                w => ingoreKeywords.indexOf(w.keyword) === -1));
            }
            return errors;
        });
    }
}
AjvSchemaValidatorFactory.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AjvSchemaValidatorFactory.ctorParameters = () => [
    { type: DelonFormConfig, decorators: [{ type: Inject, args: [DelonFormConfig,] }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLmZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vZm9ybS8iLCJzb3VyY2VzIjpbInNyYy92YWxpZGF0b3IuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxVQUFVLENBQUM7Ozs7QUFRM0MsTUFBTSxPQUFnQixzQkFBc0I7OztZQUQzQyxVQUFVOzs7Ozs7Ozs7SUFFVCx5RkFHb0M7O0FBSXRDLE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxzQkFBc0I7Ozs7SUFHbkUsWUFBNkMsT0FBd0I7UUFDbkUsS0FBSyxFQUFFLENBQUM7UUFEbUMsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFFbkUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLEdBQUcsaUNBQ2IsT0FBTyxDQUFDLEdBQUcsS0FDZCxhQUFhLEVBQUUsVUFBVSxFQUN6QixTQUFTLEVBQUUsSUFBSSxFQUNmLFlBQVksRUFBRSxJQUFJLElBQ2xCLENBQUM7UUFDSCxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsc0RBQXNELENBQUMsQ0FBQztRQUN2RixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FDaEIsT0FBTyxFQUNQLDRZQUE0WSxDQUM3WSxDQUFDO1FBQ0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLDhCQUE4QixDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLGdDQUFnQyxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7Ozs7O0lBRUQsaUJBQWlCLENBQUMsTUFBZ0IsRUFBRSxZQUEwRDs7Y0FDdEYsY0FBYyxHQUFhLENBQUMsR0FBRyxDQUFDLG1CQUFBLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFZLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxtQkFBQSxZQUFZLENBQUMsY0FBYyxFQUFZLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUVySTs7OztRQUFPLENBQUMsS0FBYyxFQUFlLEVBQUU7WUFDckMsSUFBSTtnQkFDRixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDbEM7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDViw2REFBNkQ7Z0JBQzdELHNCQUFzQjtnQkFDdEIsSUFBSSxZQUFZLENBQUMsS0FBSyxFQUFFO29CQUN0QixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNqQjthQUNGOztnQkFDRyxNQUFNLEdBQVUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNO1lBQ25DLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxjQUFjLElBQUksTUFBTSxFQUFFO2dCQUM1QyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU07Ozs7Z0JBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxDQUFDO2FBQ3ZFO1lBQ0QsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQyxFQUFDO0lBQ0osQ0FBQzs7O1lBeENGLFVBQVU7Ozs7WUFmRixlQUFlLHVCQW1CVCxNQUFNLFNBQUMsZUFBZTs7Ozs7OztJQUZuQyx3Q0FBeUI7Ozs7O0lBRWIsNENBQXlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgRGVsb25Gb3JtQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHsgRXJyb3JEYXRhIH0gZnJvbSAnLi9lcnJvcnMnO1xuaW1wb3J0IHsgU0ZWYWx1ZSB9IGZyb20gJy4vaW50ZXJmYWNlJztcbmltcG9ydCB7IFNGU2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEnO1xuXG5kZWNsYXJlIHZhciBBanY6IE56U2FmZUFueTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNjaGVtYVZhbGlkYXRvckZhY3Rvcnkge1xuICBhYnN0cmFjdCBjcmVhdGVWYWxpZGF0b3JGbihcbiAgICBzY2hlbWE6IFNGU2NoZW1hLFxuICAgIGV4dHJhT3B0aW9uczogeyBpbmdvcmVLZXl3b3Jkczogc3RyaW5nW107IGRlYnVnOiBib29sZWFuIH0sXG4gICk6ICh2YWx1ZTogU0ZTY2hlbWEpID0+IEVycm9yRGF0YVtdO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWp2U2NoZW1hVmFsaWRhdG9yRmFjdG9yeSBleHRlbmRzIFNjaGVtYVZhbGlkYXRvckZhY3Rvcnkge1xuICBwcm90ZWN0ZWQgYWp2OiBOelNhZmVBbnk7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChEZWxvbkZvcm1Db25maWcpIHByaXZhdGUgb3B0aW9uczogRGVsb25Gb3JtQ29uZmlnKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmFqdiA9IG5ldyBBanYoe1xuICAgICAgLi4ub3B0aW9ucy5hanYsXG4gICAgICBlcnJvckRhdGFQYXRoOiAncHJvcGVydHknLFxuICAgICAgYWxsRXJyb3JzOiB0cnVlLFxuICAgICAganNvblBvaW50ZXJzOiB0cnVlLFxuICAgIH0pO1xuICAgIHRoaXMuYWp2LmFkZEZvcm1hdCgnZGF0YS11cmwnLCAvXmRhdGE6KFthLXpdK1xcL1thLXowLTktKy5dKyk/O25hbWU9KC4qKTtiYXNlNjQsKC4qKSQvKTtcbiAgICB0aGlzLmFqdi5hZGRGb3JtYXQoXG4gICAgICAnY29sb3InLFxuICAgICAgL14oIz8oWzAtOUEtRmEtZl17M30pezEsMn1cXGJ8YXF1YXxibGFja3xibHVlfGZ1Y2hzaWF8Z3JheXxncmVlbnxsaW1lfG1hcm9vbnxuYXZ5fG9saXZlfG9yYW5nZXxwdXJwbGV8cmVkfHNpbHZlcnx0ZWFsfHdoaXRlfHllbGxvd3wocmdiXFwoXFxzKlxcYihbMC05XXxbMS05XVswLTldfDFbMC05XVswLTldfDJbMC00XVswLTldfDI1WzAtNV0pXFxiXFxzKixcXHMqXFxiKFswLTldfFsxLTldWzAtOV18MVswLTldWzAtOV18MlswLTRdWzAtOV18MjVbMC01XSlcXGJcXHMqLFxccypcXGIoWzAtOV18WzEtOV1bMC05XXwxWzAtOV1bMC05XXwyWzAtNF1bMC05XXwyNVswLTVdKVxcYlxccypcXCkpfChyZ2JcXChcXHMqKFxcZD9cXGQlfDEwMCUpK1xccyosXFxzKihcXGQ/XFxkJXwxMDAlKStcXHMqLFxccyooXFxkP1xcZCV8MTAwJSkrXFxzKlxcKSkpJC8sXG4gICAgKTtcbiAgICB0aGlzLmFqdi5hZGRGb3JtYXQoJ21vYmlsZScsIC9eKDB8XFwrPzg2fDE3OTUxKT8xWzAtOV17MTB9JC8pO1xuICAgIHRoaXMuYWp2LmFkZEZvcm1hdCgnaWQtY2FyZCcsIC8oXlxcZHsxNX0kKXwoXlxcZHsxN30oWzAtOV18WCkkKS8pO1xuICB9XG5cbiAgY3JlYXRlVmFsaWRhdG9yRm4oc2NoZW1hOiBTRlNjaGVtYSwgZXh0cmFPcHRpb25zOiB7IGluZ29yZUtleXdvcmRzOiBzdHJpbmdbXTsgZGVidWc6IGJvb2xlYW4gfSk6ICh2YWx1ZTogU0ZWYWx1ZSkgPT4gRXJyb3JEYXRhW10ge1xuICAgIGNvbnN0IGluZ29yZUtleXdvcmRzOiBzdHJpbmdbXSA9IFsuLi4odGhpcy5vcHRpb25zLmluZ29yZUtleXdvcmRzIGFzIHN0cmluZ1tdKSwgLi4uKChleHRyYU9wdGlvbnMuaW5nb3JlS2V5d29yZHMgYXMgc3RyaW5nW10pIHx8IFtdKV07XG5cbiAgICByZXR1cm4gKHZhbHVlOiBTRlZhbHVlKTogRXJyb3JEYXRhW10gPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5hanYudmFsaWRhdGUoc2NoZW1hLCB2YWx1ZSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIHN3YWxsb3cgZXJyb3JzIHRocm93biBpbiBhanYgZHVlIHRvIGludmFsaWQgc2NoZW1hcywgdGhlc2VcbiAgICAgICAgLy8gc3RpbGwgZ2V0IGRpc3BsYXllZFxuICAgICAgICBpZiAoZXh0cmFPcHRpb25zLmRlYnVnKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsZXQgZXJyb3JzOiBhbnlbXSA9IHRoaXMuYWp2LmVycm9ycztcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMgJiYgaW5nb3JlS2V5d29yZHMgJiYgZXJyb3JzKSB7XG4gICAgICAgIGVycm9ycyA9IGVycm9ycy5maWx0ZXIodyA9PiBpbmdvcmVLZXl3b3Jkcy5pbmRleE9mKHcua2V5d29yZCkgPT09IC0xKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBlcnJvcnM7XG4gICAgfTtcbiAgfVxufVxuIl19