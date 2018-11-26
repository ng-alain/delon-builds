/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Inject, Optional } from '@angular/core';
import { DelonFormConfig } from './config';
/**
 * @abstract
 */
export class SchemaValidatorFactory {
}
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
        this.ajv = new Ajv(Object.assign({}, options.ajv, {
            errorDataPath: 'property',
            allErrors: true,
            jsonPointers: true,
        }));
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
        const ingoreKeywords = []
            .concat(this.options.ingoreKeywords)
            .concat(extraOptions.ingoreKeywords);
        return (value) => {
            try {
                this.ajv.validate(schema, value);
            }
            catch (e) {
                // swallow errors thrown in ajv due to invalid schemas, these
                // still get displayed
            }
            /** @type {?} */
            let errors = this.ajv.errors;
            if (this.options && ingoreKeywords && errors) {
                errors = errors.filter(w => ingoreKeywords.indexOf(w.keyword) === -1);
            }
            return errors;
        };
    }
}
/** @nocollapse */
AjvSchemaValidatorFactory.ctorParameters = () => [
    { type: DelonFormConfig, decorators: [{ type: Optional }, { type: Inject, args: [DelonFormConfig,] }] }
];
if (false) {
    /** @type {?} */
    AjvSchemaValidatorFactory.prototype.ajv;
    /** @type {?} */
    AjvSchemaValidatorFactory.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLmZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vZm9ybS8iLCJzb3VyY2VzIjpbInNyYy92YWxpZGF0b3IuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFVBQVUsQ0FBQzs7OztBQU0zQyxNQUFNLE9BQWdCLHNCQUFzQjtDQUszQzs7Ozs7Ozs7SUFKQyx5RkFHb0M7O0FBR3RDLE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxzQkFBc0I7Ozs7SUFHbkUsWUFHVSxPQUF3QjtRQUVoQyxLQUFLLEVBQUUsQ0FBQztRQUZBLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBR2hDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQ2hCLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxHQUFHLEVBQUU7WUFDN0IsYUFBYSxFQUFFLFVBQVU7WUFDekIsU0FBUyxFQUFFLElBQUk7WUFDZixZQUFZLEVBQUUsSUFBSTtTQUNuQixDQUFDLENBQ0gsQ0FBQztRQUNGLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUNoQixVQUFVLEVBQ1Ysc0RBQXNELENBQ3ZELENBQUM7UUFDRixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FDaEIsT0FBTyxFQUNQLDRZQUE0WSxDQUM3WSxDQUFDO1FBQ0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQ2hCLFFBQVEsRUFDUiw4QkFBOEIsQ0FDL0IsQ0FBQztRQUNGLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUNoQixTQUFTLEVBQ1QsZ0NBQWdDLENBQ2pDLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFRCxpQkFBaUIsQ0FDZixNQUFnQixFQUNoQixZQUEwQzs7Y0FFcEMsY0FBYyxHQUFhLEVBQUU7YUFDaEMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDO2FBQ25DLE1BQU0sQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDO1FBRXRDLE9BQU8sQ0FBQyxLQUFVLEVBQWUsRUFBRTtZQUNqQyxJQUFJO2dCQUNGLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQzthQUNsQztZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNWLDZEQUE2RDtnQkFDN0Qsc0JBQXNCO2FBQ3ZCOztnQkFDRyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNO1lBQzVCLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxjQUFjLElBQUksTUFBTSxFQUFFO2dCQUM1QyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDdkU7WUFDRCxPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDLENBQUM7SUFDSixDQUFDOzs7O1lBcEVNLGVBQWUsdUJBaUJuQixRQUFRLFlBQ1IsTUFBTSxTQUFDLGVBQWU7Ozs7SUFKekIsd0NBQW1COztJQUdqQiw0Q0FFZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEZWxvbkZvcm1Db25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgeyBFcnJvckRhdGEgfSBmcm9tICcuL2Vycm9ycyc7XG5pbXBvcnQgeyBTRlNjaGVtYSB9IGZyb20gJy4vc2NoZW1hJztcblxuZGVjbGFyZSB2YXIgQWp2OiBhbnk7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTY2hlbWFWYWxpZGF0b3JGYWN0b3J5IHtcbiAgYWJzdHJhY3QgY3JlYXRlVmFsaWRhdG9yRm4oXG4gICAgc2NoZW1hOiBTRlNjaGVtYSxcbiAgICBleHRyYU9wdGlvbnM6IHsgaW5nb3JlS2V5d29yZHM6IHN0cmluZ1tdIH0sXG4gICk6ICh2YWx1ZTogU0ZTY2hlbWEpID0+IEVycm9yRGF0YVtdO1xufVxuXG5leHBvcnQgY2xhc3MgQWp2U2NoZW1hVmFsaWRhdG9yRmFjdG9yeSBleHRlbmRzIFNjaGVtYVZhbGlkYXRvckZhY3Rvcnkge1xuICBwcm90ZWN0ZWQgYWp2OiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KERlbG9uRm9ybUNvbmZpZylcbiAgICBwcml2YXRlIG9wdGlvbnM6IERlbG9uRm9ybUNvbmZpZyxcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmFqdiA9IG5ldyBBanYoXG4gICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLmFqdiwge1xuICAgICAgICBlcnJvckRhdGFQYXRoOiAncHJvcGVydHknLFxuICAgICAgICBhbGxFcnJvcnM6IHRydWUsXG4gICAgICAgIGpzb25Qb2ludGVyczogdHJ1ZSxcbiAgICAgIH0pLFxuICAgICk7XG4gICAgdGhpcy5hanYuYWRkRm9ybWF0KFxuICAgICAgJ2RhdGEtdXJsJyxcbiAgICAgIC9eZGF0YTooW2Etel0rXFwvW2EtejAtOS0rLl0rKT87bmFtZT0oLiopO2Jhc2U2NCwoLiopJC8sXG4gICAgKTtcbiAgICB0aGlzLmFqdi5hZGRGb3JtYXQoXG4gICAgICAnY29sb3InLFxuICAgICAgL14oIz8oWzAtOUEtRmEtZl17M30pezEsMn1cXGJ8YXF1YXxibGFja3xibHVlfGZ1Y2hzaWF8Z3JheXxncmVlbnxsaW1lfG1hcm9vbnxuYXZ5fG9saXZlfG9yYW5nZXxwdXJwbGV8cmVkfHNpbHZlcnx0ZWFsfHdoaXRlfHllbGxvd3wocmdiXFwoXFxzKlxcYihbMC05XXxbMS05XVswLTldfDFbMC05XVswLTldfDJbMC00XVswLTldfDI1WzAtNV0pXFxiXFxzKixcXHMqXFxiKFswLTldfFsxLTldWzAtOV18MVswLTldWzAtOV18MlswLTRdWzAtOV18MjVbMC01XSlcXGJcXHMqLFxccypcXGIoWzAtOV18WzEtOV1bMC05XXwxWzAtOV1bMC05XXwyWzAtNF1bMC05XXwyNVswLTVdKVxcYlxccypcXCkpfChyZ2JcXChcXHMqKFxcZD9cXGQlfDEwMCUpK1xccyosXFxzKihcXGQ/XFxkJXwxMDAlKStcXHMqLFxccyooXFxkP1xcZCV8MTAwJSkrXFxzKlxcKSkpJC8sXG4gICAgKTtcbiAgICB0aGlzLmFqdi5hZGRGb3JtYXQoXG4gICAgICAnbW9iaWxlJyxcbiAgICAgIC9eKDB8XFwrPzg2fDE3OTUxKT8xWzAtOV17MTB9JC8sXG4gICAgKTtcbiAgICB0aGlzLmFqdi5hZGRGb3JtYXQoXG4gICAgICAnaWQtY2FyZCcsXG4gICAgICAvKF5cXGR7MTV9JCl8KF5cXGR7MTd9KFswLTldfFgpJCkvLFxuICAgICk7XG4gIH1cblxuICBjcmVhdGVWYWxpZGF0b3JGbihcbiAgICBzY2hlbWE6IFNGU2NoZW1hLFxuICAgIGV4dHJhT3B0aW9uczogeyBpbmdvcmVLZXl3b3Jkczogc3RyaW5nW10gfSxcbiAgKTogKHZhbHVlOiBhbnkpID0+IEVycm9yRGF0YVtdIHtcbiAgICBjb25zdCBpbmdvcmVLZXl3b3Jkczogc3RyaW5nW10gPSBbXVxuICAgICAgLmNvbmNhdCh0aGlzLm9wdGlvbnMuaW5nb3JlS2V5d29yZHMpXG4gICAgICAuY29uY2F0KGV4dHJhT3B0aW9ucy5pbmdvcmVLZXl3b3Jkcyk7XG5cbiAgICByZXR1cm4gKHZhbHVlOiBhbnkpOiBFcnJvckRhdGFbXSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLmFqdi52YWxpZGF0ZShzY2hlbWEsIHZhbHVlKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gc3dhbGxvdyBlcnJvcnMgdGhyb3duIGluIGFqdiBkdWUgdG8gaW52YWxpZCBzY2hlbWFzLCB0aGVzZVxuICAgICAgICAvLyBzdGlsbCBnZXQgZGlzcGxheWVkXG4gICAgICB9XG4gICAgICBsZXQgZXJyb3JzID0gdGhpcy5hanYuZXJyb3JzO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucyAmJiBpbmdvcmVLZXl3b3JkcyAmJiBlcnJvcnMpIHtcbiAgICAgICAgZXJyb3JzID0gZXJyb3JzLmZpbHRlcih3ID0+IGluZ29yZUtleXdvcmRzLmluZGV4T2Yody5rZXl3b3JkKSA9PT0gLTEpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGVycm9ycztcbiAgICB9O1xuICB9XG59XG4iXX0=