/**
 * @fileoverview added by tsickle
 * Generated from: src/validator.factory.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { AlainConfigService } from '@delon/util/config';
import { mergeConfig } from './config';
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
     * @param {?} cogSrv
     */
    constructor(cogSrv) {
        super();
        if (!(typeof document === 'object' && !!document)) {
            return;
        }
        this.options = mergeConfig(cogSrv);
        this.ajv = new Ajv(Object.assign(Object.assign({}, this.options.ajv), { errorDataPath: 'property', allErrors: true, jsonPointers: true }));
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
    { type: AlainConfigService, decorators: [{ type: Inject, args: [AlainConfigService,] }] }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AjvSchemaValidatorFactory.prototype.ajv;
    /**
     * @type {?}
     * @protected
     */
    AjvSchemaValidatorFactory.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLmZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3NyYy92YWxpZGF0b3IuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxrQkFBa0IsRUFBaUIsTUFBTSxvQkFBb0IsQ0FBQztBQUV2RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sVUFBVSxDQUFDOzs7O0FBUXZDLE1BQU0sT0FBZ0Isc0JBQXNCOzs7WUFEM0MsVUFBVTs7Ozs7Ozs7O0lBRVQseUZBQTBJOztBQUk1SSxNQUFNLE9BQU8seUJBQTBCLFNBQVEsc0JBQXNCOzs7O0lBSW5FLFlBQXdDLE1BQTBCO1FBQ2hFLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLENBQUMsT0FBTyxRQUFRLEtBQUssUUFBUSxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNqRCxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksR0FBRyxpQ0FDYixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsS0FDbkIsYUFBYSxFQUFFLFVBQVUsRUFDekIsU0FBUyxFQUFFLElBQUksRUFDZixZQUFZLEVBQUUsSUFBSSxJQUNsQixDQUFDO1FBQ0gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLHNEQUFzRCxDQUFDLENBQUM7UUFDdkYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQ2hCLE9BQU8sRUFDUCw0WUFBNFksQ0FDN1ksQ0FBQztRQUNGLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSw4QkFBOEIsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxnQ0FBZ0MsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7Ozs7OztJQUVELGlCQUFpQixDQUFDLE1BQWdCLEVBQUUsWUFBMEQ7O2NBQ3RGLGNBQWMsR0FBYSxDQUFDLEdBQUcsQ0FBQyxtQkFBQSxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBWSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsbUJBQUEsWUFBWSxDQUFDLGNBQWMsRUFBWSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFFckk7Ozs7UUFBTyxDQUFDLEtBQWMsRUFBZSxFQUFFO1lBQ3JDLElBQUk7Z0JBQ0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ2xDO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1YsNkRBQTZEO2dCQUM3RCxzQkFBc0I7Z0JBQ3RCLElBQUksWUFBWSxDQUFDLEtBQUssRUFBRTtvQkFDdEIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDakI7YUFDRjs7Z0JBQ0csTUFBTSxHQUFVLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTTtZQUNuQyxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksY0FBYyxJQUFJLE1BQU0sRUFBRTtnQkFDNUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNOzs7O2dCQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQzthQUN2RTtZQUNELE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUMsRUFBQztJQUNKLENBQUM7OztZQTdDRixVQUFVOzs7O1lBZEYsa0JBQWtCLHVCQW1CWixNQUFNLFNBQUMsa0JBQWtCOzs7Ozs7O0lBSHRDLHdDQUF5Qjs7Ozs7SUFDekIsNENBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UsIEFsYWluU0ZDb25maWcgfSBmcm9tICdAZGVsb24vdXRpbC9jb25maWcnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IG1lcmdlQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHsgRXJyb3JEYXRhIH0gZnJvbSAnLi9lcnJvcnMnO1xuaW1wb3J0IHsgU0ZWYWx1ZSB9IGZyb20gJy4vaW50ZXJmYWNlJztcbmltcG9ydCB7IFNGU2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEnO1xuXG5kZWNsYXJlIHZhciBBanY6IE56U2FmZUFueTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNjaGVtYVZhbGlkYXRvckZhY3Rvcnkge1xuICBhYnN0cmFjdCBjcmVhdGVWYWxpZGF0b3JGbihzY2hlbWE6IFNGU2NoZW1hLCBleHRyYU9wdGlvbnM6IHsgaW5nb3JlS2V5d29yZHM6IHN0cmluZ1tdOyBkZWJ1ZzogYm9vbGVhbiB9KTogKHZhbHVlOiBTRlZhbHVlKSA9PiBFcnJvckRhdGFbXTtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFqdlNjaGVtYVZhbGlkYXRvckZhY3RvcnkgZXh0ZW5kcyBTY2hlbWFWYWxpZGF0b3JGYWN0b3J5IHtcbiAgcHJvdGVjdGVkIGFqdjogTnpTYWZlQW55O1xuICBwcm90ZWN0ZWQgb3B0aW9uczogQWxhaW5TRkNvbmZpZztcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KEFsYWluQ29uZmlnU2VydmljZSkgY29nU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UpIHtcbiAgICBzdXBlcigpO1xuICAgIGlmICghKHR5cGVvZiBkb2N1bWVudCA9PT0gJ29iamVjdCcgJiYgISFkb2N1bWVudCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5vcHRpb25zID0gbWVyZ2VDb25maWcoY29nU3J2KTtcbiAgICB0aGlzLmFqdiA9IG5ldyBBanYoe1xuICAgICAgLi4udGhpcy5vcHRpb25zLmFqdixcbiAgICAgIGVycm9yRGF0YVBhdGg6ICdwcm9wZXJ0eScsXG4gICAgICBhbGxFcnJvcnM6IHRydWUsXG4gICAgICBqc29uUG9pbnRlcnM6IHRydWUsXG4gICAgfSk7XG4gICAgdGhpcy5hanYuYWRkRm9ybWF0KCdkYXRhLXVybCcsIC9eZGF0YTooW2Etel0rXFwvW2EtejAtOS0rLl0rKT87bmFtZT0oLiopO2Jhc2U2NCwoLiopJC8pO1xuICAgIHRoaXMuYWp2LmFkZEZvcm1hdChcbiAgICAgICdjb2xvcicsXG4gICAgICAvXigjPyhbMC05QS1GYS1mXXszfSl7MSwyfVxcYnxhcXVhfGJsYWNrfGJsdWV8ZnVjaHNpYXxncmF5fGdyZWVufGxpbWV8bWFyb29ufG5hdnl8b2xpdmV8b3JhbmdlfHB1cnBsZXxyZWR8c2lsdmVyfHRlYWx8d2hpdGV8eWVsbG93fChyZ2JcXChcXHMqXFxiKFswLTldfFsxLTldWzAtOV18MVswLTldWzAtOV18MlswLTRdWzAtOV18MjVbMC01XSlcXGJcXHMqLFxccypcXGIoWzAtOV18WzEtOV1bMC05XXwxWzAtOV1bMC05XXwyWzAtNF1bMC05XXwyNVswLTVdKVxcYlxccyosXFxzKlxcYihbMC05XXxbMS05XVswLTldfDFbMC05XVswLTldfDJbMC00XVswLTldfDI1WzAtNV0pXFxiXFxzKlxcKSl8KHJnYlxcKFxccyooXFxkP1xcZCV8MTAwJSkrXFxzKixcXHMqKFxcZD9cXGQlfDEwMCUpK1xccyosXFxzKihcXGQ/XFxkJXwxMDAlKStcXHMqXFwpKSkkLyxcbiAgICApO1xuICAgIHRoaXMuYWp2LmFkZEZvcm1hdCgnbW9iaWxlJywgL14oMHxcXCs/ODZ8MTc5NTEpPzFbMC05XXsxMH0kLyk7XG4gICAgdGhpcy5hanYuYWRkRm9ybWF0KCdpZC1jYXJkJywgLyheXFxkezE1fSQpfCheXFxkezE3fShbMC05XXxYKSQpLyk7XG4gIH1cblxuICBjcmVhdGVWYWxpZGF0b3JGbihzY2hlbWE6IFNGU2NoZW1hLCBleHRyYU9wdGlvbnM6IHsgaW5nb3JlS2V5d29yZHM6IHN0cmluZ1tdOyBkZWJ1ZzogYm9vbGVhbiB9KTogKHZhbHVlOiBTRlZhbHVlKSA9PiBFcnJvckRhdGFbXSB7XG4gICAgY29uc3QgaW5nb3JlS2V5d29yZHM6IHN0cmluZ1tdID0gWy4uLih0aGlzLm9wdGlvbnMuaW5nb3JlS2V5d29yZHMgYXMgc3RyaW5nW10pLCAuLi4oKGV4dHJhT3B0aW9ucy5pbmdvcmVLZXl3b3JkcyBhcyBzdHJpbmdbXSkgfHwgW10pXTtcblxuICAgIHJldHVybiAodmFsdWU6IFNGVmFsdWUpOiBFcnJvckRhdGFbXSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLmFqdi52YWxpZGF0ZShzY2hlbWEsIHZhbHVlKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gc3dhbGxvdyBlcnJvcnMgdGhyb3duIGluIGFqdiBkdWUgdG8gaW52YWxpZCBzY2hlbWFzLCB0aGVzZVxuICAgICAgICAvLyBzdGlsbCBnZXQgZGlzcGxheWVkXG4gICAgICAgIGlmIChleHRyYU9wdGlvbnMuZGVidWcpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxldCBlcnJvcnM6IGFueVtdID0gdGhpcy5hanYuZXJyb3JzO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucyAmJiBpbmdvcmVLZXl3b3JkcyAmJiBlcnJvcnMpIHtcbiAgICAgICAgZXJyb3JzID0gZXJyb3JzLmZpbHRlcih3ID0+IGluZ29yZUtleXdvcmRzLmluZGV4T2Yody5rZXl3b3JkKSA9PT0gLTEpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGVycm9ycztcbiAgICB9O1xuICB9XG59XG4iXX0=