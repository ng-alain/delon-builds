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
export class FormPropertyFactory {
    /**
     * @param {?} schemaValidatorFactory
     * @param {?} options
     */
    constructor(schemaValidatorFactory, options) {
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
    createProperty(schema, ui, formData, parent = null, propertyId) {
        /** @type {?} */
        let newProperty = null;
        /** @type {?} */
        let path = '';
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
            const refSchema = retrieveSchema(schema, parent.root.schema.definitions);
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
                    throw new TypeError(`Undefined type ${schema.type}`);
            }
        }
        if (newProperty instanceof PropertyGroup) {
            this.initializeRoot(newProperty);
        }
        return newProperty;
    }
    /**
     * @param {?} rootProperty
     * @return {?}
     */
    initializeRoot(rootProperty) {
        // rootProperty.init();
        rootProperty._bindVisibility();
    }
}
if (false) {
    /** @type {?} */
    FormPropertyFactory.prototype.schemaValidatorFactory;
    /** @type {?} */
    FormPropertyFactory.prototype.options;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5wcm9wZXJ0eS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvbW9kZWwvZm9ybS5wcm9wZXJ0eS5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsYUFBYSxFQUFnQixNQUFNLGlCQUFpQixDQUFDO0FBQzlELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFHbkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUUxQyxNQUFNOzs7OztJQUNKLFlBQ1Usd0JBQ0E7UUFEQSwyQkFBc0IsR0FBdEIsc0JBQXNCO1FBQ3RCLFlBQU8sR0FBUCxPQUFPO0tBQ2I7Ozs7Ozs7OztJQUVKLGNBQWMsQ0FDWixNQUFnQixFQUNoQixFQUErQixFQUMvQixRQUFZLEVBQ1osU0FBd0IsSUFBSSxFQUM1QixVQUFtQjs7UUFFbkIsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDOztRQUN2QixJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7UUFDZCxJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ3BCLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxJQUFJLEVBQUU7Z0JBQzFCLElBQUksSUFBSSxHQUFHLENBQUM7YUFDYjtZQUNELElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7Z0JBQzVCLElBQUksSUFBSSxVQUFVLENBQUM7YUFDcEI7aUJBQU0sSUFBSSxNQUFNLENB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QUFNLEVBQ04sSUFBSSxFQUNKLElBQUksQ0FBQyxPQUFPLENBQ2IsQ0FBQztvQkFDRixNQUFNO2dCQUNSLEtBQUssT0FBTztvQkFDVixXQUFXLEdBQUcsSUFBSSxhQUFhLENBQzdCLElBQUksRUFDSixJQUFJLENBQUMsc0JBQXNCLEVBQzNCLE1BQU0sRUFDTixFQUFFLEVBQ0YsUUFBUSxFQUNSLE1BQU0sRUFDTixJQUFJLEVBQ0osSUFBSSxDQUFDLE9BQU8sQ0FDYixDQUFDO29CQUNGLE1BQU07Z0JBQ1I7b0JBQ0UsTUFBTSxJQUFJLFNBQVMsQ0FBQyxrQkFBa0IsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7YUFDeEQ7U0FDRjtRQUVELElBQUksV0FBVyxZQUFZLGFBQWEsRUFBRTtZQUN4QyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ2xDO1FBRUQsT0FBTyxXQUFXLENBQUM7S0FDcEI7Ozs7O0lBRU8sY0FBYyxDQUFDLFlBQTJCOztRQUVoRCxZQUFZLENBQUMsZUFBZSxFQUFFLENBQUM7O0NBRWxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGVsb25Gb3JtQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJztcclxuaW1wb3J0IHsgU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSB9IGZyb20gJy4uL3ZhbGlkYXRvci5mYWN0b3J5JztcclxuaW1wb3J0IHsgUHJvcGVydHlHcm91cCwgRm9ybVByb3BlcnR5IH0gZnJvbSAnLi9mb3JtLnByb3BlcnR5JztcclxuaW1wb3J0IHsgTnVtYmVyUHJvcGVydHkgfSBmcm9tICcuL251bWJlci5wcm9wZXJ0eSc7XHJcbmltcG9ydCB7IFN0cmluZ1Byb3BlcnR5IH0gZnJvbSAnLi9zdHJpbmcucHJvcGVydHknO1xyXG5pbXBvcnQgeyBCb29sZWFuUHJvcGVydHkgfSBmcm9tICcuL2Jvb2xlYW4ucHJvcGVydHknO1xyXG5pbXBvcnQgeyBBcnJheVByb3BlcnR5IH0gZnJvbSAnLi9hcnJheS5wcm9wZXJ0eSc7XHJcbmltcG9ydCB7IE9iamVjdFByb3BlcnR5IH0gZnJvbSAnLi9vYmplY3QucHJvcGVydHknO1xyXG5pbXBvcnQgeyBTRlNjaGVtYSB9IGZyb20gJy4uL3NjaGVtYSc7XHJcbmltcG9ydCB7IFNGVUlTY2hlbWEsIFNGVUlTY2hlbWFJdGVtIH0gZnJvbSAnLi4vc2NoZW1hL3VpJztcclxuaW1wb3J0IHsgcmV0cmlldmVTY2hlbWEgfSBmcm9tICcuLi91dGlscyc7XHJcblxyXG5leHBvcnQgY2xhc3MgRm9ybVByb3BlcnR5RmFjdG9yeSB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHNjaGVtYVZhbGlkYXRvckZhY3Rvcnk6IFNjaGVtYVZhbGlkYXRvckZhY3RvcnksXHJcbiAgICBwcml2YXRlIG9wdGlvbnM6IERlbG9uRm9ybUNvbmZpZyxcclxuICApIHt9XHJcblxyXG4gIGNyZWF0ZVByb3BlcnR5KFxyXG4gICAgc2NoZW1hOiBTRlNjaGVtYSxcclxuICAgIHVpOiBTRlVJU2NoZW1hIHwgU0ZVSVNjaGVtYUl0ZW0sXHJcbiAgICBmb3JtRGF0YToge30sXHJcbiAgICBwYXJlbnQ6IFByb3BlcnR5R3JvdXAgPSBudWxsLFxyXG4gICAgcHJvcGVydHlJZD86IHN0cmluZyxcclxuICApOiBGb3JtUHJvcGVydHkge1xyXG4gICAgbGV0IG5ld1Byb3BlcnR5ID0gbnVsbDtcclxuICAgIGxldCBwYXRoID0gJyc7XHJcbiAgICBpZiAocGFyZW50KSB7XHJcbiAgICAgIHBhdGggKz0gcGFyZW50LnBhdGg7XHJcbiAgICAgIGlmIChwYXJlbnQucGFyZW50ICE9PSBudWxsKSB7XHJcbiAgICAgICAgcGF0aCArPSAnLyc7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHBhcmVudC50eXBlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIHBhdGggKz0gcHJvcGVydHlJZDtcclxuICAgICAgfSBlbHNlIGlmIChwYXJlbnQudHlwZSA9PT0gJ2FycmF5Jykge1xyXG4gICAgICAgIHBhdGggKz0gKHBhcmVudCBhcyBBcnJheVByb3BlcnR5KS50aWNrKys7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgJ0luc3RhbmNpYXRpb24gb2YgYSBGb3JtUHJvcGVydHkgd2l0aCBhbiB1bmtub3duIHBhcmVudCB0eXBlOiAnICtcclxuICAgICAgICAgICAgcGFyZW50LnR5cGUsXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcGF0aCA9ICcvJztcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc2NoZW1hLiRyZWYpIHtcclxuICAgICAgY29uc3QgcmVmU2NoZW1hID0gcmV0cmlldmVTY2hlbWEoc2NoZW1hLCBwYXJlbnQucm9vdC5zY2hlbWEuZGVmaW5pdGlvbnMpO1xyXG4gICAgICBuZXdQcm9wZXJ0eSA9IHRoaXMuY3JlYXRlUHJvcGVydHkocmVmU2NoZW1hLCB1aSwgZm9ybURhdGEsIHBhcmVudCwgcGF0aCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBmaXggcmVxdWlyZWRcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHByb3BlcnR5SWQgJiZcclxuICAgICAgICAoKHBhcmVudCEuc2NoZW1hLnJlcXVpcmVkIHx8IFtdKSBhcyBzdHJpbmdbXSkuaW5kZXhPZihwcm9wZXJ0eUlkKSAhPT0gLTFcclxuICAgICAgKSB7XHJcbiAgICAgICAgdWkuX3JlcXVpcmVkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICAvLyBmaXggdGl0bGVcclxuICAgICAgaWYgKHNjaGVtYS50aXRsZSA9PSBudWxsKSBzY2hlbWEudGl0bGUgPSBwcm9wZXJ0eUlkO1xyXG4gICAgICAvLyBmaXggZGF0ZVxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgKHNjaGVtYS50eXBlID09PSAnc3RyaW5nJyB8fCBzY2hlbWEudHlwZSA9PT0gJ251bWJlcicpICYmXHJcbiAgICAgICAgIXNjaGVtYS5mb3JtYXQgJiZcclxuICAgICAgICAhKHVpIGFzIFNGVUlTY2hlbWFJdGVtKS5mb3JtYXRcclxuICAgICAgKSB7XHJcbiAgICAgICAgaWYgKCh1aSBhcyBTRlVJU2NoZW1hSXRlbSkud2lkZ2V0ID09PSAnZGF0ZScpXHJcbiAgICAgICAgICB1aS5mb3JtYXQgPVxyXG4gICAgICAgICAgICBzY2hlbWEudHlwZSA9PT0gJ3N0cmluZydcclxuICAgICAgICAgICAgICA/IHRoaXMub3B0aW9ucy51aURhdGVTdHJpbmdGb3JtYXRcclxuICAgICAgICAgICAgICA6IHRoaXMub3B0aW9ucy51aURhdGVOdW1iZXJGb3JtYXQ7XHJcbiAgICAgICAgZWxzZSBpZiAoKHVpIGFzIFNGVUlTY2hlbWFJdGVtKS53aWRnZXQgPT09ICd0aW1lJylcclxuICAgICAgICAgIHVpLmZvcm1hdCA9XHJcbiAgICAgICAgICAgIHNjaGVtYS50eXBlID09PSAnc3RyaW5nJ1xyXG4gICAgICAgICAgICAgID8gdGhpcy5vcHRpb25zLnVpVGltZVN0cmluZ0Zvcm1hdFxyXG4gICAgICAgICAgICAgIDogdGhpcy5vcHRpb25zLnVpVGltZU51bWJlckZvcm1hdDtcclxuICAgICAgfVxyXG4gICAgICBzd2l0Y2ggKHNjaGVtYS50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnaW50ZWdlcic6XHJcbiAgICAgICAgY2FzZSAnbnVtYmVyJzpcclxuICAgICAgICAgIG5ld1Byb3BlcnR5ID0gbmV3IE51bWJlclByb3BlcnR5KFxyXG4gICAgICAgICAgICB0aGlzLnNjaGVtYVZhbGlkYXRvckZhY3RvcnksXHJcbiAgICAgICAgICAgIHNjaGVtYSxcclxuICAgICAgICAgICAgdWksXHJcbiAgICAgICAgICAgIGZvcm1EYXRhLFxyXG4gICAgICAgICAgICBwYXJlbnQsXHJcbiAgICAgICAgICAgIHBhdGgsXHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyxcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdzdHJpbmcnOlxyXG4gICAgICAgICAgbmV3UHJvcGVydHkgPSBuZXcgU3RyaW5nUHJvcGVydHkoXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZW1hVmFsaWRhdG9yRmFjdG9yeSxcclxuICAgICAgICAgICAgc2NoZW1hLFxyXG4gICAgICAgICAgICB1aSxcclxuICAgICAgICAgICAgZm9ybURhdGEsXHJcbiAgICAgICAgICAgIHBhcmVudCxcclxuICAgICAgICAgICAgcGF0aCxcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxyXG4gICAgICAgICAgbmV3UHJvcGVydHkgPSBuZXcgQm9vbGVhblByb3BlcnR5KFxyXG4gICAgICAgICAgICB0aGlzLnNjaGVtYVZhbGlkYXRvckZhY3RvcnksXHJcbiAgICAgICAgICAgIHNjaGVtYSxcclxuICAgICAgICAgICAgdWksXHJcbiAgICAgICAgICAgIGZvcm1EYXRhLFxyXG4gICAgICAgICAgICBwYXJlbnQsXHJcbiAgICAgICAgICAgIHBhdGgsXHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyxcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdvYmplY3QnOlxyXG4gICAgICAgICAgbmV3UHJvcGVydHkgPSBuZXcgT2JqZWN0UHJvcGVydHkoXHJcbiAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZW1hVmFsaWRhdG9yRmFjdG9yeSxcclxuICAgICAgICAgICAgc2NoZW1hLFxyXG4gICAgICAgICAgICB1aSxcclxuICAgICAgICAgICAgZm9ybURhdGEsXHJcbiAgICAgICAgICAgIHBhcmVudCxcclxuICAgICAgICAgICAgcGF0aCxcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2FycmF5JzpcclxuICAgICAgICAgIG5ld1Byb3BlcnR5ID0gbmV3IEFycmF5UHJvcGVydHkoXHJcbiAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZW1hVmFsaWRhdG9yRmFjdG9yeSxcclxuICAgICAgICAgICAgc2NoZW1hLFxyXG4gICAgICAgICAgICB1aSxcclxuICAgICAgICAgICAgZm9ybURhdGEsXHJcbiAgICAgICAgICAgIHBhcmVudCxcclxuICAgICAgICAgICAgcGF0aCxcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBVbmRlZmluZWQgdHlwZSAke3NjaGVtYS50eXBlfWApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG5ld1Byb3BlcnR5IGluc3RhbmNlb2YgUHJvcGVydHlHcm91cCkge1xyXG4gICAgICB0aGlzLmluaXRpYWxpemVSb290KG5ld1Byb3BlcnR5KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3UHJvcGVydHk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXRpYWxpemVSb290KHJvb3RQcm9wZXJ0eTogUHJvcGVydHlHcm91cCkge1xyXG4gICAgLy8gcm9vdFByb3BlcnR5LmluaXQoKTtcclxuICAgIHJvb3RQcm9wZXJ0eS5fYmluZFZpc2liaWxpdHkoKTtcclxuICB9XHJcbn1cclxuIl19