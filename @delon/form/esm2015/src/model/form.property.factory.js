/**
 * @fileoverview added by tsickle
 * Generated from: src/model/form.property.factory.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { mergeConfig } from '../config';
import { SF_SEQ } from '../const';
import { retrieveSchema } from '../utils';
import { ArrayProperty } from './array.property';
import { BooleanProperty } from './boolean.property';
import { PropertyGroup } from './form.property';
import { NumberProperty } from './number.property';
import { ObjectProperty } from './object.property';
import { StringProperty } from './string.property';
export class FormPropertyFactory {
    /**
     * @param {?} schemaValidatorFactory
     * @param {?} cogSrv
     */
    constructor(schemaValidatorFactory, cogSrv) {
        this.schemaValidatorFactory = schemaValidatorFactory;
        this.options = mergeConfig(cogSrv);
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
            const refSchema = retrieveSchema(schema, (/** @type {?} */ (parent)).root.schema.definitions);
            newProperty = this.createProperty(refSchema, ui, formData, parent, path);
        }
        else {
            // fix required
            if ((propertyId && (/** @type {?} */ ((/** @type {?} */ (parent)).schema.required)).indexOf((/** @type {?} */ (propertyId.split(SF_SEQ).pop()))) !== -1) || ui.showRequired === true) {
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
                ui._format = ui.format;
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
     * @private
     * @param {?} rootProperty
     * @return {?}
     */
    initializeRoot(rootProperty) {
        // rootProperty.init();
        rootProperty._bindVisibility();
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    FormPropertyFactory.prototype.options;
    /**
     * @type {?}
     * @private
     */
    FormPropertyFactory.prototype.schemaValidatorFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5wcm9wZXJ0eS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3ZzdHMvd29yay8xL3MvcGFja2FnZXMvZm9ybS8iLCJzb3VyY2VzIjpbInNyYy9tb2RlbC9mb3JtLnByb3BlcnR5LmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFHbEMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUUxQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBZ0IsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFbkQsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7SUFFOUIsWUFBb0Isc0JBQThDLEVBQUUsTUFBMEI7UUFBMUUsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQUNoRSxJQUFJLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7Ozs7Ozs7SUFFRCxjQUFjLENBQ1osTUFBZ0IsRUFDaEIsRUFBK0IsRUFDL0IsUUFBWSxFQUNaLFNBQStCLElBQUksRUFDbkMsVUFBbUI7O1lBRWYsV0FBVyxHQUF3QixJQUFJOztZQUN2QyxJQUFJLEdBQUcsRUFBRTtRQUNiLElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDcEIsSUFBSSxNQUFN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Ozs7SUF2RkMsc0NBQStCOzs7OztJQUNuQixxREFBc0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UsIEFsYWluU0ZDb25maWcgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBtZXJnZUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBTRl9TRVEgfSBmcm9tICcuLi9jb25zdCc7XG5pbXBvcnQgeyBTRlNjaGVtYSB9IGZyb20gJy4uL3NjaGVtYS9pbmRleCc7XG5pbXBvcnQgeyBTRlVJU2NoZW1hLCBTRlVJU2NoZW1hSXRlbSB9IGZyb20gJy4uL3NjaGVtYS91aSc7XG5pbXBvcnQgeyByZXRyaWV2ZVNjaGVtYSB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IFNjaGVtYVZhbGlkYXRvckZhY3RvcnkgfSBmcm9tICcuLi92YWxpZGF0b3IuZmFjdG9yeSc7XG5pbXBvcnQgeyBBcnJheVByb3BlcnR5IH0gZnJvbSAnLi9hcnJheS5wcm9wZXJ0eSc7XG5pbXBvcnQgeyBCb29sZWFuUHJvcGVydHkgfSBmcm9tICcuL2Jvb2xlYW4ucHJvcGVydHknO1xuaW1wb3J0IHsgRm9ybVByb3BlcnR5LCBQcm9wZXJ0eUdyb3VwIH0gZnJvbSAnLi9mb3JtLnByb3BlcnR5JztcbmltcG9ydCB7IE51bWJlclByb3BlcnR5IH0gZnJvbSAnLi9udW1iZXIucHJvcGVydHknO1xuaW1wb3J0IHsgT2JqZWN0UHJvcGVydHkgfSBmcm9tICcuL29iamVjdC5wcm9wZXJ0eSc7XG5pbXBvcnQgeyBTdHJpbmdQcm9wZXJ0eSB9IGZyb20gJy4vc3RyaW5nLnByb3BlcnR5JztcblxuZXhwb3J0IGNsYXNzIEZvcm1Qcm9wZXJ0eUZhY3Rvcnkge1xuICBwcml2YXRlIG9wdGlvbnM6IEFsYWluU0ZDb25maWc7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2NoZW1hVmFsaWRhdG9yRmFjdG9yeTogU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSwgY29nU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBtZXJnZUNvbmZpZyhjb2dTcnYpO1xuICB9XG5cbiAgY3JlYXRlUHJvcGVydHkoXG4gICAgc2NoZW1hOiBTRlNjaGVtYSxcbiAgICB1aTogU0ZVSVNjaGVtYSB8IFNGVUlTY2hlbWFJdGVtLFxuICAgIGZvcm1EYXRhOiB7fSxcbiAgICBwYXJlbnQ6IFByb3BlcnR5R3JvdXAgfCBudWxsID0gbnVsbCxcbiAgICBwcm9wZXJ0eUlkPzogc3RyaW5nLFxuICApOiBGb3JtUHJvcGVydHkge1xuICAgIGxldCBuZXdQcm9wZXJ0eTogRm9ybVByb3BlcnR5IHwgbnVsbCA9IG51bGw7XG4gICAgbGV0IHBhdGggPSAnJztcbiAgICBpZiAocGFyZW50KSB7XG4gICAgICBwYXRoICs9IHBhcmVudC5wYXRoO1xuICAgICAgaWYgKHBhcmVudC5wYXJlbnQgIT09IG51bGwpIHtcbiAgICAgICAgcGF0aCArPSBTRl9TRVE7XG4gICAgICB9XG4gICAgICBzd2l0Y2ggKHBhcmVudC50eXBlKSB7XG4gICAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgICAgcGF0aCArPSBwcm9wZXJ0eUlkO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgcGF0aCArPSAoKHBhcmVudCBhcyBBcnJheVByb3BlcnR5KS5wcm9wZXJ0aWVzIGFzIFByb3BlcnR5R3JvdXBbXSkubGVuZ3RoO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW5zdGFuY2lhdGlvbiBvZiBhIEZvcm1Qcm9wZXJ0eSB3aXRoIGFuIHVua25vd24gcGFyZW50IHR5cGU6ICcgKyBwYXJlbnQudHlwZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhdGggPSBTRl9TRVE7XG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYS4kcmVmKSB7XG4gICAgICBjb25zdCByZWZTY2hlbWEgPSByZXRyaWV2ZVNjaGVtYShzY2hlbWEsIHBhcmVudCEucm9vdC5zY2hlbWEuZGVmaW5pdGlvbnMpO1xuICAgICAgbmV3UHJvcGVydHkgPSB0aGlzLmNyZWF0ZVByb3BlcnR5KHJlZlNjaGVtYSwgdWksIGZvcm1EYXRhLCBwYXJlbnQsIHBhdGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBmaXggcmVxdWlyZWRcbiAgICAgIGlmICgocHJvcGVydHlJZCAmJiBwYXJlbnQhLnNjaGVtYS5yZXF1aXJlZCEuaW5kZXhPZihwcm9wZXJ0eUlkLnNwbGl0KFNGX1NFUSkucG9wKCkhKSAhPT0gLTEpIHx8IHVpLnNob3dSZXF1aXJlZCA9PT0gdHJ1ZSkge1xuICAgICAgICB1aS5fcmVxdWlyZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgLy8gZml4IHRpdGxlXG4gICAgICBpZiAoc2NoZW1hLnRpdGxlID09IG51bGwpIHtcbiAgICAgICAgc2NoZW1hLnRpdGxlID0gcHJvcGVydHlJZDtcbiAgICAgIH1cbiAgICAgIC8vIGZpeCBkYXRlXG4gICAgICBpZiAoKHNjaGVtYS50eXBlID09PSAnc3RyaW5nJyB8fCBzY2hlbWEudHlwZSA9PT0gJ251bWJlcicpICYmICFzY2hlbWEuZm9ybWF0ICYmICEodWkgYXMgU0ZVSVNjaGVtYUl0ZW0pLmZvcm1hdCkge1xuICAgICAgICBpZiAoKHVpIGFzIFNGVUlTY2hlbWFJdGVtKS53aWRnZXQgPT09ICdkYXRlJylcbiAgICAgICAgICB1aS5fZm9ybWF0ID0gc2NoZW1hLnR5cGUgPT09ICdzdHJpbmcnID8gdGhpcy5vcHRpb25zLnVpRGF0ZVN0cmluZ0Zvcm1hdCA6IHRoaXMub3B0aW9ucy51aURhdGVOdW1iZXJGb3JtYXQ7XG4gICAgICAgIGVsc2UgaWYgKCh1aSBhcyBTRlVJU2NoZW1hSXRlbSkud2lkZ2V0ID09PSAndGltZScpXG4gICAgICAgICAgdWkuX2Zvcm1hdCA9IHNjaGVtYS50eXBlID09PSAnc3RyaW5nJyA/IHRoaXMub3B0aW9ucy51aVRpbWVTdHJpbmdGb3JtYXQgOiB0aGlzLm9wdGlvbnMudWlUaW1lTnVtYmVyRm9ybWF0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdWkuX2Zvcm1hdCA9IHVpLmZvcm1hdDtcbiAgICAgIH1cbiAgICAgIHN3aXRjaCAoc2NoZW1hLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnaW50ZWdlcic6XG4gICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgbmV3UHJvcGVydHkgPSBuZXcgTnVtYmVyUHJvcGVydHkodGhpcy5zY2hlbWFWYWxpZGF0b3JGYWN0b3J5LCBzY2hlbWEsIHVpLCBmb3JtRGF0YSwgcGFyZW50LCBwYXRoLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgIG5ld1Byb3BlcnR5ID0gbmV3IFN0cmluZ1Byb3BlcnR5KHRoaXMuc2NoZW1hVmFsaWRhdG9yRmFjdG9yeSwgc2NoZW1hLCB1aSwgZm9ybURhdGEsIHBhcmVudCwgcGF0aCwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgICAgbmV3UHJvcGVydHkgPSBuZXcgQm9vbGVhblByb3BlcnR5KHRoaXMuc2NoZW1hVmFsaWRhdG9yRmFjdG9yeSwgc2NoZW1hLCB1aSwgZm9ybURhdGEsIHBhcmVudCwgcGF0aCwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgICBuZXdQcm9wZXJ0eSA9IG5ldyBPYmplY3RQcm9wZXJ0eSh0aGlzLCB0aGlzLnNjaGVtYVZhbGlkYXRvckZhY3RvcnksIHNjaGVtYSwgdWksIGZvcm1EYXRhLCBwYXJlbnQsIHBhdGgsIHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgICAgICBuZXdQcm9wZXJ0eSA9IG5ldyBBcnJheVByb3BlcnR5KHRoaXMsIHRoaXMuc2NoZW1hVmFsaWRhdG9yRmFjdG9yeSwgc2NoZW1hLCB1aSwgZm9ybURhdGEsIHBhcmVudCwgcGF0aCwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBVbmRlZmluZWQgdHlwZSAke3NjaGVtYS50eXBlfWApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChuZXdQcm9wZXJ0eSBpbnN0YW5jZW9mIFByb3BlcnR5R3JvdXApIHtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZVJvb3QobmV3UHJvcGVydHkpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXdQcm9wZXJ0eTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdGlhbGl6ZVJvb3Qocm9vdFByb3BlcnR5OiBQcm9wZXJ0eUdyb3VwKTogdm9pZCB7XG4gICAgLy8gcm9vdFByb3BlcnR5LmluaXQoKTtcbiAgICByb290UHJvcGVydHkuX2JpbmRWaXNpYmlsaXR5KCk7XG4gIH1cbn1cbiJdfQ==