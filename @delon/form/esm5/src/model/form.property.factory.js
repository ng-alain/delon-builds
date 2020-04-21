/**
 * @fileoverview added by tsickle
 * Generated from: src/model/form.property.factory.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { retrieveSchema } from '../utils';
import { SF_SEQ } from '../const';
import { ArrayProperty } from './array.property';
import { BooleanProperty } from './boolean.property';
import { PropertyGroup } from './form.property';
import { NumberProperty } from './number.property';
import { ObjectProperty } from './object.property';
import { StringProperty } from './string.property';
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
                path += SF_SEQ;
            }
            switch (parent.type) {
                case 'object':
                    path += propertyId;
                    break;
                case 'array':
                    path += ((/** @type {?} */ (((/** @type {?} */ (parent))).properties))).length;
                    break;
                default:
                    throw new Error('Instanciation of a FormProperty with an unknown parent type: ' + parent.type);
            }
        }
        else {
            path = SF_SEQ;
        }
        if (schema.$ref) {
            /** @type {?} */
            var refSchema = retrieveSchema(schema, (/** @type {?} */ (parent)).root.schema.definitions);
            newProperty = this.createProperty(refSchema, ui, formData, parent, path);
        }
        else {
            // fix required
            if (propertyId && (/** @type {?} */ ((/** @type {?} */ (parent)).schema.required)).indexOf((/** @type {?} */ (propertyId.split(SF_SEQ).pop()))) !== -1) {
                ui._required = true;
            }
            // fix title
            if (schema.title == null) {
                schema.title = propertyId;
            }
            // fix date
            if ((schema.type === 'string' || schema.type === 'number') && !schema.format && !((/** @type {?} */ (ui))).format) {
                if (((/** @type {?} */ (ui))).widget === 'date')
                    ui._format = schema.type === 'string' ? this.options.uiDateStringFormat : this.options.uiDateNumberFormat;
                else if (((/** @type {?} */ (ui))).widget === 'time')
                    ui._format = schema.type === 'string' ? this.options.uiTimeStringFormat : this.options.uiTimeNumberFormat;
            }
            else {
                ui._format = schema.format || ui.format;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5wcm9wZXJ0eS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvbW9kZWwvZm9ybS5wcm9wZXJ0eS5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUUxQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFnQixhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVuRDtJQUNFLDZCQUFvQixzQkFBOEMsRUFBVSxPQUF3QjtRQUFoRiwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7SUFBRyxDQUFDOzs7Ozs7Ozs7SUFFeEcsNENBQWM7Ozs7Ozs7O0lBQWQsVUFDRSxNQUFnQixFQUNoQixFQUErQixFQUMvQixRQUFZLEVBQ1osTUFBbUMsRUFDbkMsVUFBbUI7UUFEbkIsdUJBQUEsRUFBQSxhQUFtQzs7WUFHL0IsV0FBVyxHQUF3QixJQUFJOztZQUN2QyxJQUFJLEdBQUcsRUFBRTtRQUNiLElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDcEIsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLElBQUksRUFBRTtnQkFDMUIsSUFBSSxJQUFJLE1BQU0sQ0FBQzthQUNoQjtZQUNELFFBQVEsTUFB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cnQgeyBEZWxvbkZvcm1Db25maWcgfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHsgU0ZTY2hlbWEgfSBmcm9tICcuLi9zY2hlbWEvaW5kZXgnO1xuaW1wb3J0IHsgU0ZVSVNjaGVtYSwgU0ZVSVNjaGVtYUl0ZW0gfSBmcm9tICcuLi9zY2hlbWEvdWknO1xuaW1wb3J0IHsgcmV0cmlldmVTY2hlbWEgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBTY2hlbWFWYWxpZGF0b3JGYWN0b3J5IH0gZnJvbSAnLi4vdmFsaWRhdG9yLmZhY3RvcnknO1xuaW1wb3J0IHsgU0ZfU0VRIH0gZnJvbSAnLi4vY29uc3QnO1xuaW1wb3J0IHsgQXJyYXlQcm9wZXJ0eSB9IGZyb20gJy4vYXJyYXkucHJvcGVydHknO1xuaW1wb3J0IHsgQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnLi9ib29sZWFuLnByb3BlcnR5JztcbmltcG9ydCB7IEZvcm1Qcm9wZXJ0eSwgUHJvcGVydHlHcm91cCB9IGZyb20gJy4vZm9ybS5wcm9wZXJ0eSc7XG5pbXBvcnQgeyBOdW1iZXJQcm9wZXJ0eSB9IGZyb20gJy4vbnVtYmVyLnByb3BlcnR5JztcbmltcG9ydCB7IE9iamVjdFByb3BlcnR5IH0gZnJvbSAnLi9vYmplY3QucHJvcGVydHknO1xuaW1wb3J0IHsgU3RyaW5nUHJvcGVydHkgfSBmcm9tICcuL3N0cmluZy5wcm9wZXJ0eSc7XG5cbmV4cG9ydCBjbGFzcyBGb3JtUHJvcGVydHlGYWN0b3J5IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzY2hlbWFWYWxpZGF0b3JGYWN0b3J5OiBTY2hlbWFWYWxpZGF0b3JGYWN0b3J5LCBwcml2YXRlIG9wdGlvbnM6IERlbG9uRm9ybUNvbmZpZykge31cblxuICBjcmVhdGVQcm9wZXJ0eShcbiAgICBzY2hlbWE6IFNGU2NoZW1hLFxuICAgIHVpOiBTRlVJU2NoZW1hIHwgU0ZVSVNjaGVtYUl0ZW0sXG4gICAgZm9ybURhdGE6IHt9LFxuICAgIHBhcmVudDogUHJvcGVydHlHcm91cCB8IG51bGwgPSBudWxsLFxuICAgIHByb3BlcnR5SWQ/OiBzdHJpbmcsXG4gICk6IEZvcm1Qcm9wZXJ0eSB7XG4gICAgbGV0IG5ld1Byb3BlcnR5OiBGb3JtUHJvcGVydHkgfCBudWxsID0gbnVsbDtcbiAgICBsZXQgcGF0aCA9ICcnO1xuICAgIGlmIChwYXJlbnQpIHtcbiAgICAgIHBhdGggKz0gcGFyZW50LnBhdGg7XG4gICAgICBpZiAocGFyZW50LnBhcmVudCAhPT0gbnVsbCkge1xuICAgICAgICBwYXRoICs9IFNGX1NFUTtcbiAgICAgIH1cbiAgICAgIHN3aXRjaCAocGFyZW50LnR5cGUpIHtcbiAgICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgICBwYXRoICs9IHByb3BlcnR5SWQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgICAgICBwYXRoICs9ICgocGFyZW50IGFzIEFycmF5UHJvcGVydHkpLnByb3BlcnRpZXMgYXMgUHJvcGVydHlHcm91cFtdKS5sZW5ndGg7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnN0YW5jaWF0aW9uIG9mIGEgRm9ybVByb3BlcnR5IHdpdGggYW4gdW5rbm93biBwYXJlbnQgdHlwZTogJyArIHBhcmVudC50eXBlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGF0aCA9IFNGX1NFUTtcbiAgICB9XG5cbiAgICBpZiAoc2NoZW1hLiRyZWYpIHtcbiAgICAgIGNvbnN0IHJlZlNjaGVtYSA9IHJldHJpZXZlU2NoZW1hKHNjaGVtYSwgcGFyZW50IS5yb290LnNjaGVtYS5kZWZpbml0aW9ucyk7XG4gICAgICBuZXdQcm9wZXJ0eSA9IHRoaXMuY3JlYXRlUHJvcGVydHkocmVmU2NoZW1hLCB1aSwgZm9ybURhdGEsIHBhcmVudCwgcGF0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGZpeCByZXF1aXJlZFxuICAgICAgaWYgKHByb3BlcnR5SWQgJiYgcGFyZW50IS5zY2hlbWEucmVxdWlyZWQhLmluZGV4T2YocHJvcGVydHlJZC5zcGxpdChTRl9TRVEpLnBvcCgpISkgIT09IC0xKSB7XG4gICAgICAgIHVpLl9yZXF1aXJlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICAvLyBmaXggdGl0bGVcbiAgICAgIGlmIChzY2hlbWEudGl0bGUgPT0gbnVsbCkge1xuICAgICAgICBzY2hlbWEudGl0bGUgPSBwcm9wZXJ0eUlkO1xuICAgICAgfVxuICAgICAgLy8gZml4IGRhdGVcbiAgICAgIGlmICgoc2NoZW1hLnR5cGUgPT09ICdzdHJpbmcnIHx8IHNjaGVtYS50eXBlID09PSAnbnVtYmVyJykgJiYgIXNjaGVtYS5mb3JtYXQgJiYgISh1aSBhcyBTRlVJU2NoZW1hSXRlbSkuZm9ybWF0KSB7XG4gICAgICAgIGlmICgodWkgYXMgU0ZVSVNjaGVtYUl0ZW0pLndpZGdldCA9PT0gJ2RhdGUnKVxuICAgICAgICAgIHVpLl9mb3JtYXQgPSBzY2hlbWEudHlwZSA9PT0gJ3N0cmluZycgPyB0aGlzLm9wdGlvbnMudWlEYXRlU3RyaW5nRm9ybWF0IDogdGhpcy5vcHRpb25zLnVpRGF0ZU51bWJlckZvcm1hdDtcbiAgICAgICAgZWxzZSBpZiAoKHVpIGFzIFNGVUlTY2hlbWFJdGVtKS53aWRnZXQgPT09ICd0aW1lJylcbiAgICAgICAgICB1aS5fZm9ybWF0ID0gc2NoZW1hLnR5cGUgPT09ICdzdHJpbmcnID8gdGhpcy5vcHRpb25zLnVpVGltZVN0cmluZ0Zvcm1hdCA6IHRoaXMub3B0aW9ucy51aVRpbWVOdW1iZXJGb3JtYXQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB1aS5fZm9ybWF0ID0gc2NoZW1hLmZvcm1hdCB8fCB1aS5mb3JtYXQ7XG4gICAgICB9XG4gICAgICBzd2l0Y2ggKHNjaGVtYS50eXBlKSB7XG4gICAgICAgIGNhc2UgJ2ludGVnZXInOlxuICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgIG5ld1Byb3BlcnR5ID0gbmV3IE51bWJlclByb3BlcnR5KHRoaXMuc2NoZW1hVmFsaWRhdG9yRmFjdG9yeSwgc2NoZW1hLCB1aSwgZm9ybURhdGEsIHBhcmVudCwgcGF0aCwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICBuZXdQcm9wZXJ0eSA9IG5ldyBTdHJpbmdQcm9wZXJ0eSh0aGlzLnNjaGVtYVZhbGlkYXRvckZhY3RvcnksIHNjaGVtYSwgdWksIGZvcm1EYXRhLCBwYXJlbnQsIHBhdGgsIHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICAgIG5ld1Byb3BlcnR5ID0gbmV3IEJvb2xlYW5Qcm9wZXJ0eSh0aGlzLnNjaGVtYVZhbGlkYXRvckZhY3RvcnksIHNjaGVtYSwgdWksIGZvcm1EYXRhLCBwYXJlbnQsIHBhdGgsIHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgICAgbmV3UHJvcGVydHkgPSBuZXcgT2JqZWN0UHJvcGVydHkodGhpcywgdGhpcy5zY2hlbWFWYWxpZGF0b3JGYWN0b3J5LCBzY2hlbWEsIHVpLCBmb3JtRGF0YSwgcGFyZW50LCBwYXRoLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgbmV3UHJvcGVydHkgPSBuZXcgQXJyYXlQcm9wZXJ0eSh0aGlzLCB0aGlzLnNjaGVtYVZhbGlkYXRvckZhY3RvcnksIHNjaGVtYSwgdWksIGZvcm1EYXRhLCBwYXJlbnQsIHBhdGgsIHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgVW5kZWZpbmVkIHR5cGUgJHtzY2hlbWEudHlwZX1gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobmV3UHJvcGVydHkgaW5zdGFuY2VvZiBQcm9wZXJ0eUdyb3VwKSB7XG4gICAgICB0aGlzLmluaXRpYWxpemVSb290KG5ld1Byb3BlcnR5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3UHJvcGVydHk7XG4gIH1cblxuICBwcml2YXRlIGluaXRpYWxpemVSb290KHJvb3RQcm9wZXJ0eTogUHJvcGVydHlHcm91cCkge1xuICAgIC8vIHJvb3RQcm9wZXJ0eS5pbml0KCk7XG4gICAgcm9vdFByb3BlcnR5Ll9iaW5kVmlzaWJpbGl0eSgpO1xuICB9XG59XG4iXX0=