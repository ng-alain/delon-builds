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
        this.ajv = new Ajv(Object.assign({}, options.ajv, { errorDataPath: 'property', allErrors: true, jsonPointers: true }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLmZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vZm9ybS8iLCJzb3VyY2VzIjpbInNyYy92YWxpZGF0b3IuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFVBQVUsQ0FBQzs7OztBQVEzQyxNQUFNLE9BQWdCLHNCQUFzQjtDQUszQzs7Ozs7Ozs7SUFKQyx5RkFHb0M7O0FBR3RDLE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxzQkFBc0I7Ozs7SUFJbkUsWUFHVSxPQUF3QjtRQUVoQyxLQUFLLEVBQUUsQ0FBQztRQUZBLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBR2hDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxHQUFHLG1CQUVYLE9BQU8sQ0FBQyxHQUFHLElBQ2QsYUFBYSxFQUFFLFVBQVUsRUFDekIsU0FBUyxFQUFFLElBQUksRUFDZixZQUFZLEVBQUUsSUFBSSxJQUVyQixDQUFDO1FBQ0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQ2hCLFVBQVUsRUFDVixzREFBc0QsQ0FDdkQsQ0FBQztRQUNGLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUNoQixPQUFPLEVBQ1AsNFlBQTRZLENBQzdZLENBQUM7UUFDRixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FDaEIsUUFBUSxFQUNSLDhCQUE4QixDQUMvQixDQUFDO1FBQ0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQ2hCLFNBQVMsRUFDVCxnQ0FBZ0MsQ0FDakMsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVELGlCQUFpQixDQUNmLE1BQWdCLEVBQ2hCLFlBQTBDOztjQUVwQyxjQUFjLEdBQWEsRUFBRTthQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUM7YUFDbkMsTUFBTSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUM7UUFFdEMsT0FBTyxDQUFDLEtBQWMsRUFBZSxFQUFFO1lBQ3JDLElBQUk7Z0JBQ0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ2xDO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1YsNkRBQTZEO2dCQUM3RCxzQkFBc0I7YUFDdkI7O2dCQUNHLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU07WUFDNUIsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLGNBQWMsSUFBSSxNQUFNLEVBQUU7Z0JBQzVDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN2RTtZQUNELE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUMsQ0FBQztJQUNKLENBQUM7Ozs7WUF4RU0sZUFBZSx1QkFvQm5CLFFBQVEsWUFDUixNQUFNLFNBQUMsZUFBZTs7OztJQUp6Qix3Q0FBbUI7O0lBR2pCLDRDQUVnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERlbG9uRm9ybUNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7IEVycm9yRGF0YSB9IGZyb20gJy4vZXJyb3JzJztcbmltcG9ydCB7IFNGVmFsdWUgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBTRlNjaGVtYSB9IGZyb20gJy4vc2NoZW1hJztcblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuZGVjbGFyZSB2YXIgQWp2OiBhbnk7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTY2hlbWFWYWxpZGF0b3JGYWN0b3J5IHtcbiAgYWJzdHJhY3QgY3JlYXRlVmFsaWRhdG9yRm4oXG4gICAgc2NoZW1hOiBTRlNjaGVtYSxcbiAgICBleHRyYU9wdGlvbnM6IHsgaW5nb3JlS2V5d29yZHM6IHN0cmluZ1tdIH0sXG4gICk6ICh2YWx1ZTogU0ZTY2hlbWEpID0+IEVycm9yRGF0YVtdO1xufVxuXG5leHBvcnQgY2xhc3MgQWp2U2NoZW1hVmFsaWRhdG9yRmFjdG9yeSBleHRlbmRzIFNjaGVtYVZhbGlkYXRvckZhY3Rvcnkge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHByb3RlY3RlZCBhanY6IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoRGVsb25Gb3JtQ29uZmlnKVxuICAgIHByaXZhdGUgb3B0aW9uczogRGVsb25Gb3JtQ29uZmlnLFxuICApIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuYWp2ID0gbmV3IEFqdihcbiAgICAgIHtcbiAgICAgICAgLi4ub3B0aW9ucy5hanYsXG4gICAgICAgIGVycm9yRGF0YVBhdGg6ICdwcm9wZXJ0eScsXG4gICAgICAgIGFsbEVycm9yczogdHJ1ZSxcbiAgICAgICAganNvblBvaW50ZXJzOiB0cnVlLFxuICAgICAgfSxcbiAgICApO1xuICAgIHRoaXMuYWp2LmFkZEZvcm1hdChcbiAgICAgICdkYXRhLXVybCcsXG4gICAgICAvXmRhdGE6KFthLXpdK1xcL1thLXowLTktKy5dKyk/O25hbWU9KC4qKTtiYXNlNjQsKC4qKSQvLFxuICAgICk7XG4gICAgdGhpcy5hanYuYWRkRm9ybWF0KFxuICAgICAgJ2NvbG9yJyxcbiAgICAgIC9eKCM/KFswLTlBLUZhLWZdezN9KXsxLDJ9XFxifGFxdWF8YmxhY2t8Ymx1ZXxmdWNoc2lhfGdyYXl8Z3JlZW58bGltZXxtYXJvb258bmF2eXxvbGl2ZXxvcmFuZ2V8cHVycGxlfHJlZHxzaWx2ZXJ8dGVhbHx3aGl0ZXx5ZWxsb3d8KHJnYlxcKFxccypcXGIoWzAtOV18WzEtOV1bMC05XXwxWzAtOV1bMC05XXwyWzAtNF1bMC05XXwyNVswLTVdKVxcYlxccyosXFxzKlxcYihbMC05XXxbMS05XVswLTldfDFbMC05XVswLTldfDJbMC00XVswLTldfDI1WzAtNV0pXFxiXFxzKixcXHMqXFxiKFswLTldfFsxLTldWzAtOV18MVswLTldWzAtOV18MlswLTRdWzAtOV18MjVbMC01XSlcXGJcXHMqXFwpKXwocmdiXFwoXFxzKihcXGQ/XFxkJXwxMDAlKStcXHMqLFxccyooXFxkP1xcZCV8MTAwJSkrXFxzKixcXHMqKFxcZD9cXGQlfDEwMCUpK1xccypcXCkpKSQvLFxuICAgICk7XG4gICAgdGhpcy5hanYuYWRkRm9ybWF0KFxuICAgICAgJ21vYmlsZScsXG4gICAgICAvXigwfFxcKz84NnwxNzk1MSk/MVswLTldezEwfSQvLFxuICAgICk7XG4gICAgdGhpcy5hanYuYWRkRm9ybWF0KFxuICAgICAgJ2lkLWNhcmQnLFxuICAgICAgLyheXFxkezE1fSQpfCheXFxkezE3fShbMC05XXxYKSQpLyxcbiAgICApO1xuICB9XG5cbiAgY3JlYXRlVmFsaWRhdG9yRm4oXG4gICAgc2NoZW1hOiBTRlNjaGVtYSxcbiAgICBleHRyYU9wdGlvbnM6IHsgaW5nb3JlS2V5d29yZHM6IHN0cmluZ1tdIH0sXG4gICk6ICh2YWx1ZTogU0ZWYWx1ZSkgPT4gRXJyb3JEYXRhW10ge1xuICAgIGNvbnN0IGluZ29yZUtleXdvcmRzOiBzdHJpbmdbXSA9IFtdXG4gICAgICAuY29uY2F0KHRoaXMub3B0aW9ucy5pbmdvcmVLZXl3b3JkcylcbiAgICAgIC5jb25jYXQoZXh0cmFPcHRpb25zLmluZ29yZUtleXdvcmRzKTtcblxuICAgIHJldHVybiAodmFsdWU6IFNGVmFsdWUpOiBFcnJvckRhdGFbXSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLmFqdi52YWxpZGF0ZShzY2hlbWEsIHZhbHVlKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gc3dhbGxvdyBlcnJvcnMgdGhyb3duIGluIGFqdiBkdWUgdG8gaW52YWxpZCBzY2hlbWFzLCB0aGVzZVxuICAgICAgICAvLyBzdGlsbCBnZXQgZGlzcGxheWVkXG4gICAgICB9XG4gICAgICBsZXQgZXJyb3JzID0gdGhpcy5hanYuZXJyb3JzO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucyAmJiBpbmdvcmVLZXl3b3JkcyAmJiBlcnJvcnMpIHtcbiAgICAgICAgZXJyb3JzID0gZXJyb3JzLmZpbHRlcih3ID0+IGluZ29yZUtleXdvcmRzLmluZGV4T2Yody5rZXl3b3JkKSA9PT0gLTEpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGVycm9ycztcbiAgICB9O1xuICB9XG59XG4iXX0=