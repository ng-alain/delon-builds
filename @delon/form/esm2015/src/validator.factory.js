/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLmZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vZm9ybS8iLCJzb3VyY2VzIjpbInNyYy92YWxpZGF0b3IuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFVBQVUsQ0FBQzs7OztBQU0zQyxNQUFNO0NBS0w7Ozs7Ozs7Ozs7QUFFRCxNQUFNLGdDQUFpQyxTQUFRLHNCQUFzQjs7OztJQUduRSxZQUdVLE9BQXdCO1FBRWhDLEtBQUssRUFBRSxDQUFDO1FBRkEsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFHaEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FDaEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLEdBQUcsRUFBRTtZQUM3QixhQUFhLEVBQUUsVUFBVTtZQUN6QixTQUFTLEVBQUUsSUFBSTtZQUNmLFlBQVksRUFBRSxJQUFJO1NBQ25CLENBQUMsQ0FDSCxDQUFDO1FBQ0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQ2hCLFVBQVUsRUFDVixzREFBc0QsQ0FDdkQsQ0FBQztRQUNGLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUNoQixPQUFPLEVBQ1AsNFlBQTRZLENBQzdZLENBQUM7UUFDRixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FDaEIsUUFBUSxFQUNSLDhCQUE4QixDQUMvQixDQUFDO1FBQ0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQ2hCLFNBQVMsRUFDVCxnQ0FBZ0MsQ0FDakMsQ0FBQztLQUNIOzs7Ozs7SUFFRCxpQkFBaUIsQ0FDZixNQUFnQixFQUNoQixZQUEwQzs7UUFFMUMsTUFBTSxjQUFjLEdBQWEsRUFBRTthQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUM7YUFDbkMsTUFBTSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUV2QyxPQUFPLENBQUMsS0FBVSxFQUFlLEVBQUU7WUFDakMsSUFBSTtnQkFDRixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDbEM7WUFBQyxPQUFPLENBQUMsRUFBRTs7O2FBR1g7O1lBQ0QsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7WUFDN0IsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLGNBQWMsSUFBSSxNQUFNLEVBQUU7Z0JBQzVDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN2RTtZQUNELE9BQU8sTUFBTSxDQUFDO1NBQ2YsQ0FBQztLQUNIOzs7O1lBcEVNLGVBQWUsdUJBaUJuQixRQUFRLFlBQ1IsTUFBTSxTQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERlbG9uRm9ybUNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcclxuaW1wb3J0IHsgRXJyb3JEYXRhIH0gZnJvbSAnLi9lcnJvcnMnO1xyXG5pbXBvcnQgeyBTRlNjaGVtYSB9IGZyb20gJy4vc2NoZW1hJztcclxuXHJcbmRlY2xhcmUgdmFyIEFqdjogYW55O1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNjaGVtYVZhbGlkYXRvckZhY3Rvcnkge1xyXG4gIGFic3RyYWN0IGNyZWF0ZVZhbGlkYXRvckZuKFxyXG4gICAgc2NoZW1hOiBTRlNjaGVtYSxcclxuICAgIGV4dHJhT3B0aW9uczogeyBpbmdvcmVLZXl3b3Jkczogc3RyaW5nW10gfSxcclxuICApOiAodmFsdWU6IFNGU2NoZW1hKSA9PiBFcnJvckRhdGFbXTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFqdlNjaGVtYVZhbGlkYXRvckZhY3RvcnkgZXh0ZW5kcyBTY2hlbWFWYWxpZGF0b3JGYWN0b3J5IHtcclxuICBwcm90ZWN0ZWQgYWp2OiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQE9wdGlvbmFsKClcclxuICAgIEBJbmplY3QoRGVsb25Gb3JtQ29uZmlnKVxyXG4gICAgcHJpdmF0ZSBvcHRpb25zOiBEZWxvbkZvcm1Db25maWcsXHJcbiAgKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5hanYgPSBuZXcgQWp2KFxyXG4gICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLmFqdiwge1xyXG4gICAgICAgIGVycm9yRGF0YVBhdGg6ICdwcm9wZXJ0eScsXHJcbiAgICAgICAgYWxsRXJyb3JzOiB0cnVlLFxyXG4gICAgICAgIGpzb25Qb2ludGVyczogdHJ1ZSxcclxuICAgICAgfSksXHJcbiAgICApO1xyXG4gICAgdGhpcy5hanYuYWRkRm9ybWF0KFxyXG4gICAgICAnZGF0YS11cmwnLFxyXG4gICAgICAvXmRhdGE6KFthLXpdK1xcL1thLXowLTktKy5dKyk/O25hbWU9KC4qKTtiYXNlNjQsKC4qKSQvLFxyXG4gICAgKTtcclxuICAgIHRoaXMuYWp2LmFkZEZvcm1hdChcclxuICAgICAgJ2NvbG9yJyxcclxuICAgICAgL14oIz8oWzAtOUEtRmEtZl17M30pezEsMn1cXGJ8YXF1YXxibGFja3xibHVlfGZ1Y2hzaWF8Z3JheXxncmVlbnxsaW1lfG1hcm9vbnxuYXZ5fG9saXZlfG9yYW5nZXxwdXJwbGV8cmVkfHNpbHZlcnx0ZWFsfHdoaXRlfHllbGxvd3wocmdiXFwoXFxzKlxcYihbMC05XXxbMS05XVswLTldfDFbMC05XVswLTldfDJbMC00XVswLTldfDI1WzAtNV0pXFxiXFxzKixcXHMqXFxiKFswLTldfFsxLTldWzAtOV18MVswLTldWzAtOV18MlswLTRdWzAtOV18MjVbMC01XSlcXGJcXHMqLFxccypcXGIoWzAtOV18WzEtOV1bMC05XXwxWzAtOV1bMC05XXwyWzAtNF1bMC05XXwyNVswLTVdKVxcYlxccypcXCkpfChyZ2JcXChcXHMqKFxcZD9cXGQlfDEwMCUpK1xccyosXFxzKihcXGQ/XFxkJXwxMDAlKStcXHMqLFxccyooXFxkP1xcZCV8MTAwJSkrXFxzKlxcKSkpJC8sXHJcbiAgICApO1xyXG4gICAgdGhpcy5hanYuYWRkRm9ybWF0KFxyXG4gICAgICAnbW9iaWxlJyxcclxuICAgICAgL14oMHxcXCs/ODZ8MTc5NTEpPzFbMC05XXsxMH0kLyxcclxuICAgICk7XHJcbiAgICB0aGlzLmFqdi5hZGRGb3JtYXQoXHJcbiAgICAgICdpZC1jYXJkJyxcclxuICAgICAgLyheXFxkezE1fSQpfCheXFxkezE3fShbMC05XXxYKSQpLyxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVWYWxpZGF0b3JGbihcclxuICAgIHNjaGVtYTogU0ZTY2hlbWEsXHJcbiAgICBleHRyYU9wdGlvbnM6IHsgaW5nb3JlS2V5d29yZHM6IHN0cmluZ1tdIH0sXHJcbiAgKTogKHZhbHVlOiBhbnkpID0+IEVycm9yRGF0YVtdIHtcclxuICAgIGNvbnN0IGluZ29yZUtleXdvcmRzOiBzdHJpbmdbXSA9IFtdXHJcbiAgICAgIC5jb25jYXQodGhpcy5vcHRpb25zLmluZ29yZUtleXdvcmRzKVxyXG4gICAgICAuY29uY2F0KGV4dHJhT3B0aW9ucy5pbmdvcmVLZXl3b3Jkcyk7XHJcblxyXG4gICAgcmV0dXJuICh2YWx1ZTogYW55KTogRXJyb3JEYXRhW10gPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHRoaXMuYWp2LnZhbGlkYXRlKHNjaGVtYSwgdmFsdWUpO1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgLy8gc3dhbGxvdyBlcnJvcnMgdGhyb3duIGluIGFqdiBkdWUgdG8gaW52YWxpZCBzY2hlbWFzLCB0aGVzZVxyXG4gICAgICAgIC8vIHN0aWxsIGdldCBkaXNwbGF5ZWRcclxuICAgICAgfVxyXG4gICAgICBsZXQgZXJyb3JzID0gdGhpcy5hanYuZXJyb3JzO1xyXG4gICAgICBpZiAodGhpcy5vcHRpb25zICYmIGluZ29yZUtleXdvcmRzICYmIGVycm9ycykge1xyXG4gICAgICAgIGVycm9ycyA9IGVycm9ycy5maWx0ZXIodyA9PiBpbmdvcmVLZXl3b3Jkcy5pbmRleE9mKHcua2V5d29yZCkgPT09IC0xKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZXJyb3JzO1xyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19