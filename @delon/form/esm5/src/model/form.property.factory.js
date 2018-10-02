/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { PropertyGroup } from './form.property';
import { NumberProperty } from './number.property';
import { StringProperty } from './string.property';
import { BooleanProperty } from './boolean.property';
import { ArrayProperty } from './array.property';
import { ObjectProperty } from './object.property';
import { retrieveSchema } from '../utils';
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
                path += '/';
            }
            if (parent.type === 'object') {
                path += propertyId;
            }
            else if (parent.type === 'array') {
                path += (/** @type {?} */ (parent)).tick++;
            }
            else {
                throw new Error('Instanciation of a FormProperty with an unknown parent type: ' +
                    parent.type);
            }
        }
        else {
            path = '/';
        }
        if (schema.$ref) {
            /** @type {?} */
            var refSchema = retrieveSchema(schema, parent.root.schema.definitions);
            newProperty = this.createProperty(refSchema, ui, formData, parent, path);
        }
        else {
            // fix required
            if (propertyId &&
                (/** @type {?} */ ((/** @type {?} */ ((parent)).schema.required || []))).indexOf(propertyId) !== -1) {
                ui["_required"] = true;
            }
            // fix title
            if (schema.title == null)
                schema.title = propertyId;
            // fix date
            if ((schema.type === 'string' || schema.type === 'number') &&
                !schema.format &&
                !(/** @type {?} */ (ui))["format"]) {
                if ((/** @type {?} */ (ui)).widget === 'date')
                    ui["format"] =
                        schema.type === 'string'
                            ? this.options.uiDateStringFormat
                            : this.options.uiDateNumberFormat;
                else if ((/** @type {?} */ (ui)).widget === 'time')
                    ui["format"] =
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
     * @param {?} rootProperty
     * @return {?}
     */
    FormPropertyFactory.prototype.initializeRoot = /**
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
    /** @type {?} */
    FormPropertyFactory.prototype.schemaValidatorFactory;
    /** @type {?} */
    FormPropertyFactory.prototype.options;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5wcm9wZXJ0eS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvbW9kZWwvZm9ybS5wcm9wZXJ0eS5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsYUFBYSxFQUFnQixNQUFNLGlCQUFpQixDQUFDO0FBQzlELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFHbkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUUxQyxJQUFBO0lBQ0UsNkJBQ1Usd0JBQ0E7UUFEQSwyQkFBc0IsR0FBdEIsc0JBQXNCO1FBQ3RCLFlBQU8sR0FBUCxPQUFPO0tBQ2I7Ozs7Ozs7OztJQUVKLDRDQUFjOzs7Ozs7OztJQUFkLFVBQ0UsTUFBZ0IsRUFDaEIsRUFBK0IsRUFDL0IsUUFBWSxFQUNaLE1BQTRCLEVBQzVCLFVBQW1CO1FBRG5CLHVCQUFBLEVBQUEsYUFBNEI7O1FBRzVCLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQzs7UUFDdkIsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2QsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQztZQUNwQixJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssSUFBSSxFQUFFO2dCQUMxQixJQUFJLElBQUksR0FBRyxDQUFDO2FBQ2I7WUFDRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO2dCQUM1QixJQUFJLElBQUksVUFBVSxD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TSxFQUNOLEVBQUUsRUFDRixRQUFRLEVBQ1IsTUFBTSxFQUNOLElBQUksRUFDSixJQUFJLENBQUMsT0FBTyxDQUNiLENBQUM7b0JBQ0YsTUFBTTtnQkFDUixLQUFLLE9BQU87b0JBQ1YsV0FBVyxHQUFHLElBQUksYUFBYSxDQUM3QixJQUFJLEVBQ0osSUFBSSxDQUFDLHNCQUFzQixFQUMzQixNQUFNLEVBQ04sRUFBRSxFQUNGLFFBQVEsRUFDUixNQUFNLEVBQ04sSUFBSSxFQUNKLElBQUksQ0FBQyxPQUFPLENBQ2IsQ0FBQztvQkFDRixNQUFNO2dCQUNSO29CQUNFLE1BQU0sSUFBSSxTQUFTLENBQUMsb0JBQWtCLE1BQU0sQ0FBQyxJQUFNLENBQUMsQ0FBQzthQUN4RDtTQUNGO1FBRUQsSUFBSSxXQUFXLFlBQVksYUFBYSxFQUFFO1lBQ3hDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDbEM7UUFFRCxPQUFPLFdBQVcsQ0FBQztLQUNwQjs7Ozs7SUFFTyw0Q0FBYzs7OztjQUFDLFlBQTJCOztRQUVoRCxZQUFZLENBQUMsZUFBZSxFQUFFLENBQUM7OzhCQXJKbkM7SUF1SkMsQ0FBQTtBQTNJRCwrQkEySUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZWxvbkZvcm1Db25maWcgfSBmcm9tICcuLi9jb25maWcnO1xyXG5pbXBvcnQgeyBTY2hlbWFWYWxpZGF0b3JGYWN0b3J5IH0gZnJvbSAnLi4vdmFsaWRhdG9yLmZhY3RvcnknO1xyXG5pbXBvcnQgeyBQcm9wZXJ0eUdyb3VwLCBGb3JtUHJvcGVydHkgfSBmcm9tICcuL2Zvcm0ucHJvcGVydHknO1xyXG5pbXBvcnQgeyBOdW1iZXJQcm9wZXJ0eSB9IGZyb20gJy4vbnVtYmVyLnByb3BlcnR5JztcclxuaW1wb3J0IHsgU3RyaW5nUHJvcGVydHkgfSBmcm9tICcuL3N0cmluZy5wcm9wZXJ0eSc7XHJcbmltcG9ydCB7IEJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJy4vYm9vbGVhbi5wcm9wZXJ0eSc7XHJcbmltcG9ydCB7IEFycmF5UHJvcGVydHkgfSBmcm9tICcuL2FycmF5LnByb3BlcnR5JztcclxuaW1wb3J0IHsgT2JqZWN0UHJvcGVydHkgfSBmcm9tICcuL29iamVjdC5wcm9wZXJ0eSc7XHJcbmltcG9ydCB7IFNGU2NoZW1hIH0gZnJvbSAnLi4vc2NoZW1hJztcclxuaW1wb3J0IHsgU0ZVSVNjaGVtYSwgU0ZVSVNjaGVtYUl0ZW0gfSBmcm9tICcuLi9zY2hlbWEvdWknO1xyXG5pbXBvcnQgeyByZXRyaWV2ZVNjaGVtYSB9IGZyb20gJy4uL3V0aWxzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBGb3JtUHJvcGVydHlGYWN0b3J5IHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgc2NoZW1hVmFsaWRhdG9yRmFjdG9yeTogU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSxcclxuICAgIHByaXZhdGUgb3B0aW9uczogRGVsb25Gb3JtQ29uZmlnLFxyXG4gICkge31cclxuXHJcbiAgY3JlYXRlUHJvcGVydHkoXHJcbiAgICBzY2hlbWE6IFNGU2NoZW1hLFxyXG4gICAgdWk6IFNGVUlTY2hlbWEgfCBTRlVJU2NoZW1hSXRlbSxcclxuICAgIGZvcm1EYXRhOiB7fSxcclxuICAgIHBhcmVudDogUHJvcGVydHlHcm91cCA9IG51bGwsXHJcbiAgICBwcm9wZXJ0eUlkPzogc3RyaW5nLFxyXG4gICk6IEZvcm1Qcm9wZXJ0eSB7XHJcbiAgICBsZXQgbmV3UHJvcGVydHkgPSBudWxsO1xyXG4gICAgbGV0IHBhdGggPSAnJztcclxuICAgIGlmIChwYXJlbnQpIHtcclxuICAgICAgcGF0aCArPSBwYXJlbnQucGF0aDtcclxuICAgICAgaWYgKHBhcmVudC5wYXJlbnQgIT09IG51bGwpIHtcclxuICAgICAgICBwYXRoICs9ICcvJztcclxuICAgICAgfVxyXG4gICAgICBpZiAocGFyZW50LnR5cGUgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgcGF0aCArPSBwcm9wZXJ0eUlkO1xyXG4gICAgICB9IGVsc2UgaWYgKHBhcmVudC50eXBlID09PSAnYXJyYXknKSB7XHJcbiAgICAgICAgcGF0aCArPSAocGFyZW50IGFzIEFycmF5UHJvcGVydHkpLnRpY2srKztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgICAnSW5zdGFuY2lhdGlvbiBvZiBhIEZvcm1Qcm9wZXJ0eSB3aXRoIGFuIHVua25vd24gcGFyZW50IHR5cGU6ICcgK1xyXG4gICAgICAgICAgICBwYXJlbnQudHlwZSxcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwYXRoID0gJy8nO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzY2hlbWEuJHJlZikge1xyXG4gICAgICBjb25zdCByZWZTY2hlbWEgPSByZXRyaWV2ZVNjaGVtYShzY2hlbWEsIHBhcmVudC5yb290LnNjaGVtYS5kZWZpbml0aW9ucyk7XHJcbiAgICAgIG5ld1Byb3BlcnR5ID0gdGhpcy5jcmVhdGVQcm9wZXJ0eShyZWZTY2hlbWEsIHVpLCBmb3JtRGF0YSwgcGFyZW50LCBwYXRoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIGZpeCByZXF1aXJlZFxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgcHJvcGVydHlJZCAmJlxyXG4gICAgICAgICgocGFyZW50IS5zY2hlbWEucmVxdWlyZWQgfHwgW10pIGFzIHN0cmluZ1tdKS5pbmRleE9mKHByb3BlcnR5SWQpICE9PSAtMVxyXG4gICAgICApIHtcclxuICAgICAgICB1aS5fcmVxdWlyZWQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIGZpeCB0aXRsZVxyXG4gICAgICBpZiAoc2NoZW1hLnRpdGxlID09IG51bGwpIHNjaGVtYS50aXRsZSA9IHByb3BlcnR5SWQ7XHJcbiAgICAgIC8vIGZpeCBkYXRlXHJcbiAgICAgIGlmIChcclxuICAgICAgICAoc2NoZW1hLnR5cGUgPT09ICdzdHJpbmcnIHx8IHNjaGVtYS50eXBlID09PSAnbnVtYmVyJykgJiZcclxuICAgICAgICAhc2NoZW1hLmZvcm1hdCAmJlxyXG4gICAgICAgICEodWkgYXMgU0ZVSVNjaGVtYUl0ZW0pLmZvcm1hdFxyXG4gICAgICApIHtcclxuICAgICAgICBpZiAoKHVpIGFzIFNGVUlTY2hlbWFJdGVtKS53aWRnZXQgPT09ICdkYXRlJylcclxuICAgICAgICAgIHVpLmZvcm1hdCA9XHJcbiAgICAgICAgICAgIHNjaGVtYS50eXBlID09PSAnc3RyaW5nJ1xyXG4gICAgICAgICAgICAgID8gdGhpcy5vcHRpb25zLnVpRGF0ZVN0cmluZ0Zvcm1hdFxyXG4gICAgICAgICAgICAgIDogdGhpcy5vcHRpb25zLnVpRGF0ZU51bWJlckZvcm1hdDtcclxuICAgICAgICBlbHNlIGlmICgodWkgYXMgU0ZVSVNjaGVtYUl0ZW0pLndpZGdldCA9PT0gJ3RpbWUnKVxyXG4gICAgICAgICAgdWkuZm9ybWF0ID1cclxuICAgICAgICAgICAgc2NoZW1hLnR5cGUgPT09ICdzdHJpbmcnXHJcbiAgICAgICAgICAgICAgPyB0aGlzLm9wdGlvbnMudWlUaW1lU3RyaW5nRm9ybWF0XHJcbiAgICAgICAgICAgICAgOiB0aGlzLm9wdGlvbnMudWlUaW1lTnVtYmVyRm9ybWF0O1xyXG4gICAgICB9XHJcbiAgICAgIHN3aXRjaCAoc2NoZW1hLnR5cGUpIHtcclxuICAgICAgICBjYXNlICdpbnRlZ2VyJzpcclxuICAgICAgICBjYXNlICdudW1iZXInOlxyXG4gICAgICAgICAgbmV3UHJvcGVydHkgPSBuZXcgTnVtYmVyUHJvcGVydHkoXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZW1hVmFsaWRhdG9yRmFjdG9yeSxcclxuICAgICAgICAgICAgc2NoZW1hLFxyXG4gICAgICAgICAgICB1aSxcclxuICAgICAgICAgICAgZm9ybURhdGEsXHJcbiAgICAgICAgICAgIHBhcmVudCxcclxuICAgICAgICAgICAgcGF0aCxcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3N0cmluZyc6XHJcbiAgICAgICAgICBuZXdQcm9wZXJ0eSA9IG5ldyBTdHJpbmdQcm9wZXJ0eShcclxuICAgICAgICAgICAgdGhpcy5zY2hlbWFWYWxpZGF0b3JGYWN0b3J5LFxyXG4gICAgICAgICAgICBzY2hlbWEsXHJcbiAgICAgICAgICAgIHVpLFxyXG4gICAgICAgICAgICBmb3JtRGF0YSxcclxuICAgICAgICAgICAgcGFyZW50LFxyXG4gICAgICAgICAgICBwYXRoLFxyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMsXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnYm9vbGVhbic6XHJcbiAgICAgICAgICBuZXdQcm9wZXJ0eSA9IG5ldyBCb29sZWFuUHJvcGVydHkoXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZW1hVmFsaWRhdG9yRmFjdG9yeSxcclxuICAgICAgICAgICAgc2NoZW1hLFxyXG4gICAgICAgICAgICB1aSxcclxuICAgICAgICAgICAgZm9ybURhdGEsXHJcbiAgICAgICAgICAgIHBhcmVudCxcclxuICAgICAgICAgICAgcGF0aCxcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ29iamVjdCc6XHJcbiAgICAgICAgICBuZXdQcm9wZXJ0eSA9IG5ldyBPYmplY3RQcm9wZXJ0eShcclxuICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgdGhpcy5zY2hlbWFWYWxpZGF0b3JGYWN0b3J5LFxyXG4gICAgICAgICAgICBzY2hlbWEsXHJcbiAgICAgICAgICAgIHVpLFxyXG4gICAgICAgICAgICBmb3JtRGF0YSxcclxuICAgICAgICAgICAgcGFyZW50LFxyXG4gICAgICAgICAgICBwYXRoLFxyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMsXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnYXJyYXknOlxyXG4gICAgICAgICAgbmV3UHJvcGVydHkgPSBuZXcgQXJyYXlQcm9wZXJ0eShcclxuICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgdGhpcy5zY2hlbWFWYWxpZGF0b3JGYWN0b3J5LFxyXG4gICAgICAgICAgICBzY2hlbWEsXHJcbiAgICAgICAgICAgIHVpLFxyXG4gICAgICAgICAgICBmb3JtRGF0YSxcclxuICAgICAgICAgICAgcGFyZW50LFxyXG4gICAgICAgICAgICBwYXRoLFxyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMsXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYFVuZGVmaW5lZCB0eXBlICR7c2NoZW1hLnR5cGV9YCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAobmV3UHJvcGVydHkgaW5zdGFuY2VvZiBQcm9wZXJ0eUdyb3VwKSB7XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZVJvb3QobmV3UHJvcGVydHkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXdQcm9wZXJ0eTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdGlhbGl6ZVJvb3Qocm9vdFByb3BlcnR5OiBQcm9wZXJ0eUdyb3VwKSB7XHJcbiAgICAvLyByb290UHJvcGVydHkuaW5pdCgpO1xyXG4gICAgcm9vdFByb3BlcnR5Ll9iaW5kVmlzaWJpbGl0eSgpO1xyXG4gIH1cclxufVxyXG4iXX0=