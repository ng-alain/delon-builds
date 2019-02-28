/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { retrieveSchema } from '../utils';
import { ArrayProperty } from './array.property';
import { BooleanProperty } from './boolean.property';
import { PropertyGroup } from './form.property';
import { NumberProperty } from './number.property';
import { ObjectProperty } from './object.property';
import { StringProperty } from './string.property';
/** @type {?} */
var SEQ = '/';
var FormPropertyFactory = /** @class */ (function () {
    function FormPropertyFactory(schemaValidatorFactory, options) {
        this.schemaValidatorFactory = schemaValidatorFactory;
        this.options = options;
    }
    /**
     * @param {?} schema
     * @param {?} ui
     * @param {?} formData
     * @param {?=} parent
     * @param {?=} propertyId
     * @return {?}
     */
    FormPropertyFactory.prototype.createProperty = /**
     * @param {?} schema
     * @param {?} ui
     * @param {?} formData
     * @param {?=} parent
     * @param {?=} propertyId
     * @return {?}
     */
    function (schema, ui, formData, parent, propertyId) {
        if (parent === void 0) { parent = null; }
        /** @type {?} */
        var newProperty = null;
        /** @type {?} */
        var path = '';
        if (parent) {
            path += parent.path;
            if (parent.parent !== null) {
                path += SEQ;
            }
            if (parent.type === 'object') {
                path += propertyId;
            }
            else if (parent.type === 'array') {
                path += ((/** @type {?} */ (parent))).tick++;
            }
            else {
                throw new Error('Instanciation of a FormProperty with an unknown parent type: ' + parent.type);
            }
        }
        else {
            path = SEQ;
        }
        if (schema.$ref) {
            /** @type {?} */
            var refSchema = retrieveSchema(schema, parent.root.schema.definitions);
            newProperty = this.createProperty(refSchema, ui, formData, parent, path);
        }
        else {
            // fix required
            if (propertyId && ((/** @type {?} */ (((/** @type {?} */ (parent)).schema.required || [])))).indexOf(propertyId.split(SEQ).pop()) !== -1) {
                ui._required = true;
            }
            // fix title
            if (schema.title == null) {
                schema.title = propertyId;
            }
            // fix date
            if ((schema.type === 'string' || schema.type === 'number') &&
                !schema.format &&
                !((/** @type {?} */ (ui))).format) {
                if (((/** @type {?} */ (ui))).widget === 'date')
                    ui.format =
                        schema.type === 'string'
                            ? this.options.uiDateStringFormat
                            : this.options.uiDateNumberFormat;
                else if (((/** @type {?} */ (ui))).widget === 'time')
                    ui.format =
                        schema.type === 'string'
                            ? this.options.uiTimeStringFormat
                            : this.options.uiTimeNumberFormat;
            }
            switch (schema.type) {
                case 'integer':
                case 'number':
                    newProperty = new NumberProperty(this.schemaValidatorFactory, schema, ui, formData, parent, path, this.options);
                    break;
                case 'string':
                    newProperty = new StringProperty(this.schemaValidatorFactory, schema, ui, formData, parent, path, this.options);
                    break;
                case 'boolean':
                    newProperty = new BooleanProperty(this.schemaValidatorFactory, schema, ui, formData, parent, path, this.options);
                    break;
                case 'object':
                    newProperty = new ObjectProperty(this, this.schemaValidatorFactory, schema, ui, formData, parent, path, this.options);
                    break;
                case 'array':
                    newProperty = new ArrayProperty(this, this.schemaValidatorFactory, schema, ui, formData, parent, path, this.options);
                    break;
                default:
                    throw new TypeError("Undefined type " + schema.type);
            }
        }
        if (newProperty instanceof PropertyGroup) {
            this.initializeRoot(newProperty);
        }
        return newProperty;
    };
    /**
     * @private
     * @param {?} rootProperty
     * @return {?}
     */
    FormPropertyFactory.prototype.initializeRoot = /**
     * @private
     * @param {?} rootProperty
     * @return {?}
     */
    function (rootProperty) {
        // rootProperty.init();
        rootProperty._bindVisibility();
    };
    return FormPropertyFactory;
}());
export { FormPropertyFactory };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FormPropertyFactory.prototype.schemaValidatorFactory;
    /**
     * @type {?}
     * @private
     */
    FormPropertyFactory.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5wcm9wZXJ0eS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvbW9kZWwvZm9ybS5wcm9wZXJ0eS5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRzFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFnQixhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7SUFFN0MsR0FBRyxHQUFHLEdBQUc7QUFFZjtJQUNFLDZCQUNVLHNCQUE4QyxFQUM5QyxPQUF3QjtRQUR4QiwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBQzlDLFlBQU8sR0FBUCxPQUFPLENBQWlCO0lBQy9CLENBQUM7Ozs7Ozs7OztJQUVKLDRDQUFjOzs7Ozs7OztJQUFkLFVBQ0UsTUFBZ0IsRUFDaEIsRUFBK0IsRUFDL0IsUUFBWSxFQUNaLE1BQTRCLEVBQzVCLFVBQW1CO1FBRG5CLHVCQUFBLEVBQUEsYUFBNEI7O1lBR3hCLFdBQVcsR0FBRyxJQUFJOztZQUNsQixJQUFJLEdBQUcsRUFBRTtRQUNiLElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDcEIsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLElBQUksRUFBRTtnQkFDMUIsSUFBSSxJQUFJLEdBQUcsQ0FBQzthQUNiO1lBQ0QsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLFFBQVEs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LENBQUMsc0JBQXNCLEVBQzNCLE1BQU0sRUFDTixFQUFFLEVBQ0YsUUFBUSxFQUNSLE1BQU0sRUFDTixJQUFJLEVBQ0osSUFBSSxDQUFDLE9BQU8sQ0FDYixDQUFDO29CQUNGLE1BQU07Z0JBQ1IsS0FBSyxRQUFRO29CQUNYLFdBQVcsR0FBRyxJQUFJLGNBQWMsQ0FDOUIsSUFBSSxFQUNKLElBQUksQ0FBQyxzQkFBc0IsRUFDM0IsTUFBTSxFQUNOLEVBQUUsRUFDRixRQUFRLEVBQ1IsTUFBTSxFQUNOLElBQUksRUFDSixJQUFJLENBQUMsT0FBTyxDQUNiLENBQUM7b0JBQ0YsTUFBTTtnQkFDUixLQUFLLE9BQU87b0JBQ1YsV0FBVyxHQUFHLElBQUksYUFBYSxDQUM3QixJQUFJLEVBQ0osSUFBSSxDQUFDLHNCQUFzQixFQUMzQixNQUFNLEVBQ04sRUFBRSxFQUNGLFFBQVEsRUFDUixNQUFNLEVBQ04sSUFBSSxFQUNKLElBQUksQ0FBQyxPQUFPLENBQ2IsQ0FBQztvQkFDRixNQUFNO2dCQUNSO29CQUNFLE1BQU0sSUFBSSxTQUFTLENBQUMsb0JBQWtCLE1BQU0sQ0FBQyxJQUFNLENBQUMsQ0FBQzthQUN4RDtTQUNGO1FBRUQsSUFBSSxXQUFXLFlBQVksYUFBYSxFQUFFO1lBQ3hDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDbEM7UUFFRCxPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDOzs7Ozs7SUFFTyw0Q0FBYzs7Ozs7SUFBdEIsVUFBdUIsWUFBMkI7UUFDaEQsdUJBQXVCO1FBQ3ZCLFlBQVksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBQ0gsMEJBQUM7QUFBRCxDQUFDLEFBeklELElBeUlDOzs7Ozs7O0lBdklHLHFEQUFzRDs7Ozs7SUFDdEQsc0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGVsb25Gb3JtQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7IFNGU2NoZW1hIH0gZnJvbSAnLi4vc2NoZW1hJztcbmltcG9ydCB7IFNGVUlTY2hlbWEsIFNGVUlTY2hlbWFJdGVtIH0gZnJvbSAnLi4vc2NoZW1hL3VpJztcbmltcG9ydCB7IHJldHJpZXZlU2NoZW1hIH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSB9IGZyb20gJy4uL3ZhbGlkYXRvci5mYWN0b3J5JztcblxuaW1wb3J0IHsgQXJyYXlQcm9wZXJ0eSB9IGZyb20gJy4vYXJyYXkucHJvcGVydHknO1xuaW1wb3J0IHsgQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnLi9ib29sZWFuLnByb3BlcnR5JztcbmltcG9ydCB7IEZvcm1Qcm9wZXJ0eSwgUHJvcGVydHlHcm91cCB9IGZyb20gJy4vZm9ybS5wcm9wZXJ0eSc7XG5pbXBvcnQgeyBOdW1iZXJQcm9wZXJ0eSB9IGZyb20gJy4vbnVtYmVyLnByb3BlcnR5JztcbmltcG9ydCB7IE9iamVjdFByb3BlcnR5IH0gZnJvbSAnLi9vYmplY3QucHJvcGVydHknO1xuaW1wb3J0IHsgU3RyaW5nUHJvcGVydHkgfSBmcm9tICcuL3N0cmluZy5wcm9wZXJ0eSc7XG5cbmNvbnN0IFNFUSA9ICcvJztcblxuZXhwb3J0IGNsYXNzIEZvcm1Qcm9wZXJ0eUZhY3Rvcnkge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHNjaGVtYVZhbGlkYXRvckZhY3Rvcnk6IFNjaGVtYVZhbGlkYXRvckZhY3RvcnksXG4gICAgcHJpdmF0ZSBvcHRpb25zOiBEZWxvbkZvcm1Db25maWcsXG4gICkge31cblxuICBjcmVhdGVQcm9wZXJ0eShcbiAgICBzY2hlbWE6IFNGU2NoZW1hLFxuICAgIHVpOiBTRlVJU2NoZW1hIHwgU0ZVSVNjaGVtYUl0ZW0sXG4gICAgZm9ybURhdGE6IHt9LFxuICAgIHBhcmVudDogUHJvcGVydHlHcm91cCA9IG51bGwsXG4gICAgcHJvcGVydHlJZD86IHN0cmluZyxcbiAgKTogRm9ybVByb3BlcnR5IHtcbiAgICBsZXQgbmV3UHJvcGVydHkgPSBudWxsO1xuICAgIGxldCBwYXRoID0gJyc7XG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgcGF0aCArPSBwYXJlbnQucGF0aDtcbiAgICAgIGlmIChwYXJlbnQucGFyZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHBhdGggKz0gU0VRO1xuICAgICAgfVxuICAgICAgaWYgKHBhcmVudC50eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgICBwYXRoICs9IHByb3BlcnR5SWQ7XG4gICAgICB9IGVsc2UgaWYgKHBhcmVudC50eXBlID09PSAnYXJyYXknKSB7XG4gICAgICAgIHBhdGggKz0gKHBhcmVudCBhcyBBcnJheVByb3BlcnR5KS50aWNrKys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJ0luc3RhbmNpYXRpb24gb2YgYSBGb3JtUHJvcGVydHkgd2l0aCBhbiB1bmtub3duIHBhcmVudCB0eXBlOiAnICsgcGFyZW50LnR5cGUsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhdGggPSBTRVE7XG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYS4kcmVmKSB7XG4gICAgICBjb25zdCByZWZTY2hlbWEgPSByZXRyaWV2ZVNjaGVtYShzY2hlbWEsIHBhcmVudC5yb290LnNjaGVtYS5kZWZpbml0aW9ucyk7XG4gICAgICBuZXdQcm9wZXJ0eSA9IHRoaXMuY3JlYXRlUHJvcGVydHkocmVmU2NoZW1hLCB1aSwgZm9ybURhdGEsIHBhcmVudCwgcGF0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGZpeCByZXF1aXJlZFxuICAgICAgaWYgKHByb3BlcnR5SWQgJiYgKChwYXJlbnQhLnNjaGVtYS5yZXF1aXJlZCB8fCBbXSkgYXMgc3RyaW5nW10pLmluZGV4T2YocHJvcGVydHlJZC5zcGxpdChTRVEpLnBvcCgpKSAhPT0gLTEpIHtcbiAgICAgICAgdWkuX3JlcXVpcmVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIC8vIGZpeCB0aXRsZVxuICAgICAgaWYgKHNjaGVtYS50aXRsZSA9PSBudWxsKSB7XG4gICAgICAgIHNjaGVtYS50aXRsZSA9IHByb3BlcnR5SWQ7XG4gICAgICB9XG4gICAgICAvLyBmaXggZGF0ZVxuICAgICAgaWYgKFxuICAgICAgICAoc2NoZW1hLnR5cGUgPT09ICdzdHJpbmcnIHx8IHNjaGVtYS50eXBlID09PSAnbnVtYmVyJykgJiZcbiAgICAgICAgIXNjaGVtYS5mb3JtYXQgJiZcbiAgICAgICAgISh1aSBhcyBTRlVJU2NoZW1hSXRlbSkuZm9ybWF0XG4gICAgICApIHtcbiAgICAgICAgaWYgKCh1aSBhcyBTRlVJU2NoZW1hSXRlbSkud2lkZ2V0ID09PSAnZGF0ZScpXG4gICAgICAgICAgdWkuZm9ybWF0ID1cbiAgICAgICAgICAgIHNjaGVtYS50eXBlID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgICA/IHRoaXMub3B0aW9ucy51aURhdGVTdHJpbmdGb3JtYXRcbiAgICAgICAgICAgICAgOiB0aGlzLm9wdGlvbnMudWlEYXRlTnVtYmVyRm9ybWF0O1xuICAgICAgICBlbHNlIGlmICgodWkgYXMgU0ZVSVNjaGVtYUl0ZW0pLndpZGdldCA9PT0gJ3RpbWUnKVxuICAgICAgICAgIHVpLmZvcm1hdCA9XG4gICAgICAgICAgICBzY2hlbWEudHlwZSA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgPyB0aGlzLm9wdGlvbnMudWlUaW1lU3RyaW5nRm9ybWF0XG4gICAgICAgICAgICAgIDogdGhpcy5vcHRpb25zLnVpVGltZU51bWJlckZvcm1hdDtcbiAgICAgIH1cbiAgICAgIHN3aXRjaCAoc2NoZW1hLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnaW50ZWdlcic6XG4gICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgbmV3UHJvcGVydHkgPSBuZXcgTnVtYmVyUHJvcGVydHkoXG4gICAgICAgICAgICB0aGlzLnNjaGVtYVZhbGlkYXRvckZhY3RvcnksXG4gICAgICAgICAgICBzY2hlbWEsXG4gICAgICAgICAgICB1aSxcbiAgICAgICAgICAgIGZvcm1EYXRhLFxuICAgICAgICAgICAgcGFyZW50LFxuICAgICAgICAgICAgcGF0aCxcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyxcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgIG5ld1Byb3BlcnR5ID0gbmV3IFN0cmluZ1Byb3BlcnR5KFxuICAgICAgICAgICAgdGhpcy5zY2hlbWFWYWxpZGF0b3JGYWN0b3J5LFxuICAgICAgICAgICAgc2NoZW1hLFxuICAgICAgICAgICAgdWksXG4gICAgICAgICAgICBmb3JtRGF0YSxcbiAgICAgICAgICAgIHBhcmVudCxcbiAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgICAgbmV3UHJvcGVydHkgPSBuZXcgQm9vbGVhblByb3BlcnR5KFxuICAgICAgICAgICAgdGhpcy5zY2hlbWFWYWxpZGF0b3JGYWN0b3J5LFxuICAgICAgICAgICAgc2NoZW1hLFxuICAgICAgICAgICAgdWksXG4gICAgICAgICAgICBmb3JtRGF0YSxcbiAgICAgICAgICAgIHBhcmVudCxcbiAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgICBuZXdQcm9wZXJ0eSA9IG5ldyBPYmplY3RQcm9wZXJ0eShcbiAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICB0aGlzLnNjaGVtYVZhbGlkYXRvckZhY3RvcnksXG4gICAgICAgICAgICBzY2hlbWEsXG4gICAgICAgICAgICB1aSxcbiAgICAgICAgICAgIGZvcm1EYXRhLFxuICAgICAgICAgICAgcGFyZW50LFxuICAgICAgICAgICAgcGF0aCxcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyxcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgbmV3UHJvcGVydHkgPSBuZXcgQXJyYXlQcm9wZXJ0eShcbiAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICB0aGlzLnNjaGVtYVZhbGlkYXRvckZhY3RvcnksXG4gICAgICAgICAgICBzY2hlbWEsXG4gICAgICAgICAgICB1aSxcbiAgICAgICAgICAgIGZvcm1EYXRhLFxuICAgICAgICAgICAgcGFyZW50LFxuICAgICAgICAgICAgcGF0aCxcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyxcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYFVuZGVmaW5lZCB0eXBlICR7c2NoZW1hLnR5cGV9YCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5ld1Byb3BlcnR5IGluc3RhbmNlb2YgUHJvcGVydHlHcm91cCkge1xuICAgICAgdGhpcy5pbml0aWFsaXplUm9vdChuZXdQcm9wZXJ0eSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld1Byb3BlcnR5O1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0aWFsaXplUm9vdChyb290UHJvcGVydHk6IFByb3BlcnR5R3JvdXApIHtcbiAgICAvLyByb290UHJvcGVydHkuaW5pdCgpO1xuICAgIHJvb3RQcm9wZXJ0eS5fYmluZFZpc2liaWxpdHkoKTtcbiAgfVxufVxuIl19