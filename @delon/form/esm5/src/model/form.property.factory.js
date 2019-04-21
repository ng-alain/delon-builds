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
            var refSchema = retrieveSchema(schema, (/** @type {?} */ (parent)).root.schema.definitions);
            newProperty = this.createProperty(refSchema, ui, formData, parent, path);
        }
        else {
            // fix required
            if (propertyId && ((/** @type {?} */ (((/** @type {?} */ (parent)).schema.required || [])))).indexOf((/** @type {?} */ (propertyId.split(SEQ).pop()))) !== -1) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5wcm9wZXJ0eS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvbW9kZWwvZm9ybS5wcm9wZXJ0eS5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRzFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFnQixhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7SUFFN0MsR0FBRyxHQUFHLEdBQUc7QUFFZjtJQUNFLDZCQUNVLHNCQUE4QyxFQUM5QyxPQUF3QjtRQUR4QiwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBQzlDLFlBQU8sR0FBUCxPQUFPLENBQWlCO0lBQy9CLENBQUM7Ozs7Ozs7OztJQUVKLDRDQUFjOzs7Ozs7OztJQUFkLFVBQ0UsTUFBZ0IsRUFDaEIsRUFBK0IsRUFDL0IsUUFBWSxFQUNaLE1BQW1DLEVBQ25DLFVBQW1CO1FBRG5CLHVCQUFBLEVBQUEsYUFBbUM7O1lBRy9CLFdBQVcsR0FBd0IsSUFBSTs7WUFDdkMsSUFBSSxHQUFHLEVBQUU7UUFDYixJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ3BCLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxJQUFJLEVBQUU7Z0JBQzFCLElBQUksSUFBSSxHQUFHLENBQUM7YUFDYjtZQUNELElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7Z0JBQzVCLElBQUksSUFBSSxVQUFVLENBQUM7YUFDcEI7aUJBQU0sSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRTtnQkFDbEMsSUFBSSxJQUFJLENBQUMsbUJBQUEsTUFBTSxFQUFpQixDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDMUM7aUJBQU07Z0JBQ0wsTUFBTSxJQUFJLEtBQUssQ0FDYiwrREFBK0QsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUM5RSxDQUFDO2FBQ0g7U0FDRjthQUFNO1lBQ0wsSUFBSSxHQUFHLEdBQUcsQ0FBQztTQUNaO1FBRUQsSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFOztnQkFDVCxTQUFTLEdBQUcsY0FBYyxDQUFDLE1BQU0sRUFBRSxtQkFBQSxNQUFNLEVBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztZQUN6RSxXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDMUU7YUFBTTtZQUNMLGVBQWU7WUFDZixJQUFJLFVBQVUsSUFBSSxDQUFDLG1CQUFBLENBQUMsbUJBQUEsTUFBTSxFQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsRUFBWSxDQUFDLENBQUMsT0FBTyxDQUFDLG1CQUFBLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO2dCQUM1RyxFQUFFLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQzthQUNyQjtZQUNELFlBQVk7WUFDWixJQUFJLE1BQU0sQ0FBQyxLQUFLLElBQUksSUFBSSxFQUFFO2dCQUN4QixNQUFNLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQzthQUMzQjtZQUNELFdBQVc7WUFDWCxJQUNFLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxRQUFRLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxRQUFRLENBQUM7Z0JBQ3RELENBQUMsTUFBTSxDQUFDLE1BQU07Z0JBQ2QsQ0FBQyxDQUFDLG1CQUFBLEVBQUUsRUFBa0IsQ0FBQyxDQUFDLE1BQU0sRUFDOUI7Z0JBQ0EsSUFBSSxDQUFDLG1CQUFBLEVBQUUsRUFBa0IsQ0FBQyxDQUFDLE1BQU0sS0FBSyxNQUFNO29CQUMxQyxFQUFFLENBQUMsTUFBTTt3QkFDUCxNQUFNLENBQUMsSUFBSSxLQUFLLFFBQVE7NEJBQ3RCLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFrQjs0QkFDakMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUM7cUJBQ25DLElBQUksQ0FBQyxtQkFBQSxFQUFFLEVBQWtCLENBQUMsQ0FBQyxNQUFNLEtBQUssTUFBTTtvQkFDL0MsRUFBRSxDQUFDLE1BQU07d0JBQ1AsTUFBTSxDQUFDLElBQUksS0FBSyxRQUFROzRCQUN0QixDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0I7NEJBQ2pDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDO2FBQ3pDO1lBQ0QsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO2dCQUNuQixLQUFLLFNBQVMsQ0FBQztnQkFDZixLQUFLLFFBQVE7b0JBQ1gsV0FBVyxHQUFHLElBQUksY0FBYyxDQUM5QixJQUFJLENBQUMsc0JBQXNCLEVBQzNCLE1BQU0sRUFDTixFQUFFLEVBQ0YsUUFBUSxFQUNSLE1BQU0sRUFDTixJQUFJLEVBQ0osSUFBSSxDQUFDLE9BQU8sQ0FDYixDQUFDO29CQUNGLE1BQU07Z0JBQ1IsS0FBSyxRQUFRO29CQUNYLFdBQVcsR0FBRyxJQUFJLGNBQWMsQ0FDOUIsSUFBSSxDQUFDLHNCQUFzQixFQUMzQixNQUFNLEVBQ04sRUFBRSxFQUNGLFFBQVEsRUFDUixNQUFNLEVBQ04sSUFBSSxFQUNKLElBQUksQ0FBQyxPQUFPLENBQ2IsQ0FBQztvQkFDRixNQUFNO2dCQUNSLEtBQUssU0FBUztvQkFDWixXQUFXLEdBQUcsSUFBSSxlQUFlLENBQy9CLElBQUksQ0FBQyxzQkFBc0IsRUFDM0IsTUFBTSxFQUNOLEVBQUUsRUFDRixRQUFRLEVBQ1IsTUFBTSxFQUNOLElBQUksRUFDSixJQUFJLENBQUMsT0FBTyxDQUNiLENBQUM7b0JBQ0YsTUFBTTtnQkFDUixLQUFLLFFBQVE7b0JBQ1gsV0FBVyxHQUFHLElBQUksY0FBYyxDQUM5QixJQUFJLEVBQ0osSUFBSSxDQUFDLHNCQUFzQixFQUMzQixNQUFNLEVBQ04sRUFBRSxFQUNGLFFBQVEsRUFDUixNQUFNLEVBQ04sSUFBSSxFQUNKLElBQUksQ0FBQyxPQUFPLENBQ2IsQ0FBQztvQkFDRixNQUFNO2dCQUNSLEtBQUssT0FBTztvQkFDVixXQUFXLEdBQUcsSUFBSSxhQUFhLENBQzdCLElBQUksRUFDSixJQUFJLENBQUMsc0JBQXNCLEVBQzNCLE1BQU0sRUFDTixFQUFFLEVBQ0YsUUFBUSxFQUNSLE1BQU0sRUFDTixJQUFJLEVBQ0osSUFBSSxDQUFDLE9BQU8sQ0FDYixDQUFDO29CQUNGLE1BQU07Z0JBQ1I7b0JBQ0UsTUFBTSxJQUFJLFNBQVMsQ0FBQyxvQkFBa0IsTUFBTSxDQUFDLElBQU0sQ0FBQyxDQUFDO2FBQ3hEO1NBQ0Y7UUFFRCxJQUFJLFdBQVcsWUFBWSxhQUFhLEVBQUU7WUFDeEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNsQztRQUVELE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7Ozs7OztJQUVPLDRDQUFjOzs7OztJQUF0QixVQUF1QixZQUEyQjtRQUNoRCx1QkFBdUI7UUFDdkIsWUFBWSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFDSCwwQkFBQztBQUFELENBQUMsQUF6SUQsSUF5SUM7Ozs7Ozs7SUF2SUcscURBQXNEOzs7OztJQUN0RCxzQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZWxvbkZvcm1Db25maWcgfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHsgU0ZTY2hlbWEgfSBmcm9tICcuLi9zY2hlbWEnO1xuaW1wb3J0IHsgU0ZVSVNjaGVtYSwgU0ZVSVNjaGVtYUl0ZW0gfSBmcm9tICcuLi9zY2hlbWEvdWknO1xuaW1wb3J0IHsgcmV0cmlldmVTY2hlbWEgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBTY2hlbWFWYWxpZGF0b3JGYWN0b3J5IH0gZnJvbSAnLi4vdmFsaWRhdG9yLmZhY3RvcnknO1xuXG5pbXBvcnQgeyBBcnJheVByb3BlcnR5IH0gZnJvbSAnLi9hcnJheS5wcm9wZXJ0eSc7XG5pbXBvcnQgeyBCb29sZWFuUHJvcGVydHkgfSBmcm9tICcuL2Jvb2xlYW4ucHJvcGVydHknO1xuaW1wb3J0IHsgRm9ybVByb3BlcnR5LCBQcm9wZXJ0eUdyb3VwIH0gZnJvbSAnLi9mb3JtLnByb3BlcnR5JztcbmltcG9ydCB7IE51bWJlclByb3BlcnR5IH0gZnJvbSAnLi9udW1iZXIucHJvcGVydHknO1xuaW1wb3J0IHsgT2JqZWN0UHJvcGVydHkgfSBmcm9tICcuL29iamVjdC5wcm9wZXJ0eSc7XG5pbXBvcnQgeyBTdHJpbmdQcm9wZXJ0eSB9IGZyb20gJy4vc3RyaW5nLnByb3BlcnR5JztcblxuY29uc3QgU0VRID0gJy8nO1xuXG5leHBvcnQgY2xhc3MgRm9ybVByb3BlcnR5RmFjdG9yeSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc2NoZW1hVmFsaWRhdG9yRmFjdG9yeTogU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSxcbiAgICBwcml2YXRlIG9wdGlvbnM6IERlbG9uRm9ybUNvbmZpZyxcbiAgKSB7fVxuXG4gIGNyZWF0ZVByb3BlcnR5KFxuICAgIHNjaGVtYTogU0ZTY2hlbWEsXG4gICAgdWk6IFNGVUlTY2hlbWEgfCBTRlVJU2NoZW1hSXRlbSxcbiAgICBmb3JtRGF0YToge30sXG4gICAgcGFyZW50OiBQcm9wZXJ0eUdyb3VwIHwgbnVsbCA9IG51bGwsXG4gICAgcHJvcGVydHlJZD86IHN0cmluZyxcbiAgKTogRm9ybVByb3BlcnR5IHtcbiAgICBsZXQgbmV3UHJvcGVydHk6IEZvcm1Qcm9wZXJ0eSB8IG51bGwgPSBudWxsO1xuICAgIGxldCBwYXRoID0gJyc7XG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgcGF0aCArPSBwYXJlbnQucGF0aDtcbiAgICAgIGlmIChwYXJlbnQucGFyZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHBhdGggKz0gU0VRO1xuICAgICAgfVxuICAgICAgaWYgKHBhcmVudC50eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgICBwYXRoICs9IHByb3BlcnR5SWQ7XG4gICAgICB9IGVsc2UgaWYgKHBhcmVudC50eXBlID09PSAnYXJyYXknKSB7XG4gICAgICAgIHBhdGggKz0gKHBhcmVudCBhcyBBcnJheVByb3BlcnR5KS50aWNrKys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJ0luc3RhbmNpYXRpb24gb2YgYSBGb3JtUHJvcGVydHkgd2l0aCBhbiB1bmtub3duIHBhcmVudCB0eXBlOiAnICsgcGFyZW50LnR5cGUsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhdGggPSBTRVE7XG4gICAgfVxuXG4gICAgaWYgKHNjaGVtYS4kcmVmKSB7XG4gICAgICBjb25zdCByZWZTY2hlbWEgPSByZXRyaWV2ZVNjaGVtYShzY2hlbWEsIHBhcmVudCEucm9vdC5zY2hlbWEuZGVmaW5pdGlvbnMpO1xuICAgICAgbmV3UHJvcGVydHkgPSB0aGlzLmNyZWF0ZVByb3BlcnR5KHJlZlNjaGVtYSwgdWksIGZvcm1EYXRhLCBwYXJlbnQsIHBhdGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBmaXggcmVxdWlyZWRcbiAgICAgIGlmIChwcm9wZXJ0eUlkICYmICgocGFyZW50IS5zY2hlbWEucmVxdWlyZWQgfHwgW10pIGFzIHN0cmluZ1tdKS5pbmRleE9mKHByb3BlcnR5SWQuc3BsaXQoU0VRKS5wb3AoKSEpICE9PSAtMSkge1xuICAgICAgICB1aS5fcmVxdWlyZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgLy8gZml4IHRpdGxlXG4gICAgICBpZiAoc2NoZW1hLnRpdGxlID09IG51bGwpIHtcbiAgICAgICAgc2NoZW1hLnRpdGxlID0gcHJvcGVydHlJZDtcbiAgICAgIH1cbiAgICAgIC8vIGZpeCBkYXRlXG4gICAgICBpZiAoXG4gICAgICAgIChzY2hlbWEudHlwZSA9PT0gJ3N0cmluZycgfHwgc2NoZW1hLnR5cGUgPT09ICdudW1iZXInKSAmJlxuICAgICAgICAhc2NoZW1hLmZvcm1hdCAmJlxuICAgICAgICAhKHVpIGFzIFNGVUlTY2hlbWFJdGVtKS5mb3JtYXRcbiAgICAgICkge1xuICAgICAgICBpZiAoKHVpIGFzIFNGVUlTY2hlbWFJdGVtKS53aWRnZXQgPT09ICdkYXRlJylcbiAgICAgICAgICB1aS5mb3JtYXQgPVxuICAgICAgICAgICAgc2NoZW1hLnR5cGUgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgID8gdGhpcy5vcHRpb25zLnVpRGF0ZVN0cmluZ0Zvcm1hdFxuICAgICAgICAgICAgICA6IHRoaXMub3B0aW9ucy51aURhdGVOdW1iZXJGb3JtYXQ7XG4gICAgICAgIGVsc2UgaWYgKCh1aSBhcyBTRlVJU2NoZW1hSXRlbSkud2lkZ2V0ID09PSAndGltZScpXG4gICAgICAgICAgdWkuZm9ybWF0ID1cbiAgICAgICAgICAgIHNjaGVtYS50eXBlID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgICA/IHRoaXMub3B0aW9ucy51aVRpbWVTdHJpbmdGb3JtYXRcbiAgICAgICAgICAgICAgOiB0aGlzLm9wdGlvbnMudWlUaW1lTnVtYmVyRm9ybWF0O1xuICAgICAgfVxuICAgICAgc3dpdGNoIChzY2hlbWEudHlwZSkge1xuICAgICAgICBjYXNlICdpbnRlZ2VyJzpcbiAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICBuZXdQcm9wZXJ0eSA9IG5ldyBOdW1iZXJQcm9wZXJ0eShcbiAgICAgICAgICAgIHRoaXMuc2NoZW1hVmFsaWRhdG9yRmFjdG9yeSxcbiAgICAgICAgICAgIHNjaGVtYSxcbiAgICAgICAgICAgIHVpLFxuICAgICAgICAgICAgZm9ybURhdGEsXG4gICAgICAgICAgICBwYXJlbnQsXG4gICAgICAgICAgICBwYXRoLFxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLFxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgbmV3UHJvcGVydHkgPSBuZXcgU3RyaW5nUHJvcGVydHkoXG4gICAgICAgICAgICB0aGlzLnNjaGVtYVZhbGlkYXRvckZhY3RvcnksXG4gICAgICAgICAgICBzY2hlbWEsXG4gICAgICAgICAgICB1aSxcbiAgICAgICAgICAgIGZvcm1EYXRhLFxuICAgICAgICAgICAgcGFyZW50LFxuICAgICAgICAgICAgcGF0aCxcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyxcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgICBuZXdQcm9wZXJ0eSA9IG5ldyBCb29sZWFuUHJvcGVydHkoXG4gICAgICAgICAgICB0aGlzLnNjaGVtYVZhbGlkYXRvckZhY3RvcnksXG4gICAgICAgICAgICBzY2hlbWEsXG4gICAgICAgICAgICB1aSxcbiAgICAgICAgICAgIGZvcm1EYXRhLFxuICAgICAgICAgICAgcGFyZW50LFxuICAgICAgICAgICAgcGF0aCxcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyxcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgIG5ld1Byb3BlcnR5ID0gbmV3IE9iamVjdFByb3BlcnR5KFxuICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgIHRoaXMuc2NoZW1hVmFsaWRhdG9yRmFjdG9yeSxcbiAgICAgICAgICAgIHNjaGVtYSxcbiAgICAgICAgICAgIHVpLFxuICAgICAgICAgICAgZm9ybURhdGEsXG4gICAgICAgICAgICBwYXJlbnQsXG4gICAgICAgICAgICBwYXRoLFxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLFxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgICAgICBuZXdQcm9wZXJ0eSA9IG5ldyBBcnJheVByb3BlcnR5KFxuICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgIHRoaXMuc2NoZW1hVmFsaWRhdG9yRmFjdG9yeSxcbiAgICAgICAgICAgIHNjaGVtYSxcbiAgICAgICAgICAgIHVpLFxuICAgICAgICAgICAgZm9ybURhdGEsXG4gICAgICAgICAgICBwYXJlbnQsXG4gICAgICAgICAgICBwYXRoLFxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLFxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgVW5kZWZpbmVkIHR5cGUgJHtzY2hlbWEudHlwZX1gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobmV3UHJvcGVydHkgaW5zdGFuY2VvZiBQcm9wZXJ0eUdyb3VwKSB7XG4gICAgICB0aGlzLmluaXRpYWxpemVSb290KG5ld1Byb3BlcnR5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3UHJvcGVydHk7XG4gIH1cblxuICBwcml2YXRlIGluaXRpYWxpemVSb290KHJvb3RQcm9wZXJ0eTogUHJvcGVydHlHcm91cCkge1xuICAgIC8vIHJvb3RQcm9wZXJ0eS5pbml0KCk7XG4gICAgcm9vdFByb3BlcnR5Ll9iaW5kVmlzaWJpbGl0eSgpO1xuICB9XG59XG4iXX0=