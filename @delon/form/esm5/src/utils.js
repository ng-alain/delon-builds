/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { of } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';
import { deepCopy } from '@delon/util';
/** @type {?} */
export var FORMATMAPS = {
    'date-time': {
        widget: 'date',
        showTime: true,
        format: 'YYYY-MM-DDTHH:mm:ssZ',
    },
    date: { widget: 'date', format: 'YYYY-MM-DD' },
    'full-date': { widget: 'date', format: 'YYYY-MM-DD' },
    time: { widget: 'time' },
    'full-time': { widget: 'time' },
    week: { widget: 'date', mode: 'week', format: 'YYYY-WW' },
    month: { widget: 'date', mode: 'month', format: 'YYYY-MM' },
    uri: { widget: 'upload' },
    email: { widget: 'autocomplete', type: 'email' },
    color: { widget: 'string', type: 'color' },
    '': { widget: 'string' },
};
/**
 * @param {?} o
 * @return {?}
 */
export function isBlank(o) {
    return o == null;
}
/**
 * @param {?} value
 * @param {?} defaultValue
 * @return {?}
 */
export function toBool(value, defaultValue) {
    return value == null ? defaultValue : "" + value !== 'false';
}
/**
 * @param {...?} args
 * @return {?}
 */
export function di() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    // tslint:disable-next-line:no-console
    console.warn.apply(console, tslib_1.__spread(args));
}
/**
 * 根据 `$ref` 查找 `definitions`
 * @param {?} $ref
 * @param {?} definitions
 * @return {?}
 */
function findSchemaDefinition($ref, definitions) {
    var e_1, _a;
    /** @type {?} */
    var match = /^#\/definitions\/(.*)$/.exec($ref);
    if (match && match[1]) {
        // parser JSON Pointer
        /** @type {?} */
        var parts = match[1].split('/');
        /** @type {?} */
        var current = definitions;
        try {
            for (var parts_1 = tslib_1.__values(parts), parts_1_1 = parts_1.next(); !parts_1_1.done; parts_1_1 = parts_1.next()) {
                var part = parts_1_1.value;
                part = part.replace(/~1/g, '/').replace(/~0/g, '~');
                if (current.hasOwnProperty(part)) {
                    current = current[part];
                }
                else {
                    throw new Error("Could not find a definition for " + $ref + ".");
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (parts_1_1 && !parts_1_1.done && (_a = parts_1.return)) _a.call(parts_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return current;
    }
    throw new Error("Could not find a definition for " + $ref + ".");
}
/**
 * 取回Schema，并处理 `$ref` 的关系
 * @param {?} schema
 * @param {?=} definitions
 * @return {?}
 */
export function retrieveSchema(schema, definitions) {
    if (definitions === void 0) { definitions = {}; }
    if (schema.hasOwnProperty('$ref')) {
        /** @type {?} */
        var $refSchema = findSchemaDefinition(schema.$ref, definitions);
        // remove $ref property
        var $ref = schema.$ref, localSchema = tslib_1.__rest(schema, ["$ref"]);
        return retrieveSchema(tslib_1.__assign({}, $refSchema, localSchema), definitions);
    }
    return schema;
}
/**
 * @param {?} schema
 * @param {?} ui
 * @return {?}
 */
export function resolveIf(schema, ui) {
    if (!(schema.hasOwnProperty('if') && schema.hasOwnProperty('then')))
        return;
    if (!schema.if.properties)
        throw new Error("if: does not contain 'properties'");
    /** @type {?} */
    var allKeys = Object.keys(schema.properties);
    /** @type {?} */
    var ifKeys = Object.keys(schema.if.properties);
    detectKey(allKeys, ifKeys);
    detectKey(allKeys, schema.then.required);
    schema.required = schema.required.concat(schema.then.required);
    /** @type {?} */
    var hasElse = schema.hasOwnProperty('else');
    if (hasElse) {
        detectKey(allKeys, schema.else.required);
        schema.required = schema.required.concat(schema.else.required);
    }
    /** @type {?} */
    var visibleIf = {};
    /** @type {?} */
    var visibleElse = {};
    ifKeys.forEach(function (key) {
        /** @type {?} */
        var cond = schema.if.properties[key].enum;
        visibleIf[key] = cond;
        if (hasElse)
            visibleElse[key] = function (value) { return !cond.includes(value); };
    });
    schema.then.required.forEach(function (key) { return (ui["$" + key].visibleIf = visibleIf); });
    if (hasElse)
        schema.else.required.forEach(function (key) { return (ui["$" + key].visibleIf = visibleElse); });
    return schema;
}
/**
 * @param {?} keys
 * @param {?} detectKeys
 * @return {?}
 */
function detectKey(keys, detectKeys) {
    detectKeys.forEach(function (key) {
        if (!keys.includes(key)) {
            throw new Error("if: properties does not contain '" + key + "'");
        }
    });
}
/**
 * @param {?} properties
 * @param {?} order
 * @return {?}
 */
export function orderProperties(properties, order) {
    if (!Array.isArray(order))
        return properties;
    /** @type {?} */
    var arrayToHash = function (arr) {
        return arr.reduce(function (prev, curr) {
            prev[curr] = true;
            return prev;
        }, {});
    };
    /** @type {?} */
    var errorPropList = function (arr) { return "property [" + arr.join("', '") + "]"; };
    /** @type {?} */
    var propertyHash = arrayToHash(properties);
    /** @type {?} */
    var orderHash = arrayToHash(order);
    /** @type {?} */
    var extraneous = order.filter(function (prop) { return prop !== '*' && !propertyHash[prop]; });
    if (extraneous.length) {
        throw new Error("ui schema order list contains extraneous " + errorPropList(extraneous));
    }
    /** @type {?} */
    var rest = properties.filter(function (prop) { return !orderHash[prop]; });
    /** @type {?} */
    var restIndex = order.indexOf('*');
    if (restIndex === -1) {
        if (rest.length) {
            throw new Error("ui schema order list does not contain " + errorPropList(rest));
        }
        return order;
    }
    if (restIndex !== order.lastIndexOf('*')) {
        throw new Error('ui schema order list contains more than one wildcard item');
    }
    /** @type {?} */
    var complete = tslib_1.__spread(order);
    complete.splice.apply(complete, tslib_1.__spread([restIndex, 1], rest));
    return complete;
}
/**
 * @param {?} list
 * @param {?} formData
 * @param {?} readOnly
 * @return {?}
 */
export function getEnum(list, formData, readOnly) {
    if (isBlank(list) || !Array.isArray(list) || list.length === 0)
        return [];
    if (typeof list[0] !== 'object') {
        list = list.map(function (item) {
            return (/** @type {?} */ ({ label: item, value: item }));
        });
    }
    if (formData) {
        if (!Array.isArray(formData))
            formData = [formData];
        list.forEach(function (item) {
            if (~formData.indexOf(item.value))
                item.checked = true;
        });
    }
    // fix disabled status
    if (readOnly) {
        list.forEach(function (item) { return item.disabled = true; });
    }
    return list;
}
/**
 * @param {?} list
 * @param {?} formData
 * @param {?} readOnly
 * @return {?}
 */
export function getCopyEnum(list, formData, readOnly) {
    return getEnum(deepCopy(list || []), formData, readOnly);
}
/**
 * @param {?} schema
 * @param {?} ui
 * @param {?} formData
 * @param {?=} asyncArgs
 * @return {?}
 */
export function getData(schema, ui, formData, asyncArgs) {
    if (typeof ui.asyncData === 'function') {
        return ui
            .asyncData(asyncArgs)
            .pipe(takeWhile(function () { return ui.__destroy !== true; }), map(function (list) { return getEnum(list, formData, schema.readOnly); }));
    }
    return of(getCopyEnum(schema.enum, formData, schema.readOnly));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vZm9ybS8iLCJzb3VyY2VzIjpbInNyYy91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDOztBQUl2QyxNQUFNLEtBQU8sVUFBVSxHQUFHO0lBQ3hCLFdBQVcsRUFBRTtRQUNYLE1BQU0sRUFBRSxNQUFNO1FBQ2QsUUFBUSxFQUFFLElBQUk7UUFDZCxNQUFNLEVBQUUsc0JBQXNCO0tBQy9CO0lBQ0QsSUFBSSxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFO0lBQzlDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRTtJQUNyRCxJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFO0lBQ3hCLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUU7SUFDL0IsSUFBSSxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUU7SUFDekQsS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUU7SUFDM0QsR0FBRyxFQUFFLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRTtJQUN6QixLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7SUFDaEQsS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO0lBQzFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUU7Q0FDekI7Ozs7O0FBRUQsTUFBTSxVQUFVLE9BQU8sQ0FBQyxDQUFNO0lBQzVCLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQztBQUNuQixDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsTUFBTSxDQUFDLEtBQVUsRUFBRSxZQUFxQjtJQUN0RCxPQUFPLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsS0FBRyxLQUFPLEtBQUssT0FBTyxDQUFDO0FBQy9ELENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLEVBQUU7SUFBQyxjQUFPO1NBQVAsVUFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTztRQUFQLHlCQUFPOztJQUN4QixzQ0FBc0M7SUFDdEMsT0FBTyxDQUFDLElBQUksT0FBWixPQUFPLG1CQUFTLElBQUksR0FBRTtBQUN4QixDQUFDOzs7Ozs7O0FBR0QsU0FBUyxvQkFBb0IsQ0FBQyxJQUFZLEVBQUUsV0FBK0I7OztRQUNuRSxLQUFLLEdBQUcsd0JBQXdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNqRCxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUU7OztZQUVmLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7WUFDN0IsT0FBTyxHQUFRLFdBQVc7O1lBQzlCLEtBQWlCLElBQUEsVUFBQSxpQkFBQSxLQUFLLENBQUEsNEJBQUEsK0NBQUU7Z0JBQW5CLElBQUksSUFBSSxrQkFBQTtnQkFDWCxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDcEQsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUNoQyxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUN6QjtxQkFBTTtvQkFDTCxNQUFNLElBQUksS0FBSyxDQUFDLHFDQUFtQyxJQUFJLE1BQUcsQ0FBQyxDQUFDO2lCQUM3RDthQUNGOzs7Ozs7Ozs7UUFDRCxPQUFPLE9BQU8sQ0FBQztLQUNoQjtJQUNELE1BQU0sSUFBSSxLQUFLLENBQUMscUNBQW1DLElBQUksTUFBRyxDQUFDLENBQUM7QUFDOUQsQ0FBQzs7Ozs7OztBQUtELE1BQU0sVUFBVSxjQUFjLENBQzVCLE1BQWdCLEVBQ2hCLFdBQW9DO0lBQXBDLDRCQUFBLEVBQUEsZ0JBQW9DO0lBRXBDLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsRUFBRTs7WUFDM0IsVUFBVSxHQUFHLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDOztRQUV6RCxJQUFBLGtCQUFJLEVBQUUsOENBQWM7UUFDNUIsT0FBTyxjQUFjLHNCQUFNLFVBQVUsRUFBSyxXQUFXLEdBQUksV0FBVyxDQUFDLENBQUM7S0FDdkU7SUFFRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsU0FBUyxDQUFDLE1BQWdCLEVBQUUsRUFBcUI7SUFDL0QsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQUUsT0FBTztJQUU1RSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxVQUFVO1FBQ3ZCLE1BQU0sSUFBSSxLQUFLLENBQUMsbUNBQW1DLENBQUMsQ0FBQzs7UUFFakQsT0FBTyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQzs7UUFDNUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUM7SUFDNUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUMzQixTQUFTLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDekMsTUFBTSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDOztRQUN6RCxPQUFPLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUM7SUFDN0MsSUFBSSxPQUFPLEVBQUU7UUFDWCxTQUFTLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekMsTUFBTSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ2hFOztRQUVLLFNBQVMsR0FBUSxFQUFFOztRQUNuQixXQUFXLEdBQVEsRUFBRTtJQUMzQixNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRzs7WUFDVixJQUFJLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSTtRQUMzQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksT0FBTztZQUFFLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxVQUFDLEtBQVUsSUFBSyxPQUFBLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBckIsQ0FBcUIsQ0FBQztJQUN4RSxDQUFDLENBQUMsQ0FBQztJQUVILE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLENBQUMsRUFBRSxDQUFDLE1BQUksR0FBSyxDQUFDLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxFQUFyQyxDQUFxQyxDQUFDLENBQUM7SUFDM0UsSUFBSSxPQUFPO1FBQ1QsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUMxQixVQUFBLEdBQUcsSUFBSSxPQUFBLENBQUMsRUFBRSxDQUFDLE1BQUksR0FBSyxDQUFDLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxFQUF2QyxDQUF1QyxDQUMvQyxDQUFDO0lBRUosT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQzs7Ozs7O0FBRUQsU0FBUyxTQUFTLENBQUMsSUFBYyxFQUFFLFVBQW9CO0lBQ3JELFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3ZCLE1BQU0sSUFBSSxLQUFLLENBQUMsc0NBQW9DLEdBQUcsTUFBRyxDQUFDLENBQUM7U0FDN0Q7SUFDSCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxlQUFlLENBQUMsVUFBb0IsRUFBRSxLQUFlO0lBQ25FLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUFFLE9BQU8sVUFBVSxDQUFDOztRQUN2QyxXQUFXLEdBQUcsVUFBQSxHQUFHO1FBQ3JCLE9BQUEsR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFDLElBQUksRUFBRSxJQUFJO1lBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDbEIsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBSE4sQ0FHTTs7UUFDRixhQUFhLEdBQUcsVUFBQSxHQUFHLElBQUksT0FBQSxlQUFhLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQUcsRUFBaEMsQ0FBZ0M7O1FBRXZELFlBQVksR0FBRyxXQUFXLENBQUMsVUFBVSxDQUFDOztRQUN0QyxTQUFTLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQzs7UUFDOUIsVUFBVSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFuQyxDQUFtQyxDQUFDO0lBQzVFLElBQUksVUFBVSxDQUFDLE1BQU0sRUFBRTtRQUNyQixNQUFNLElBQUksS0FBSyxDQUNiLDhDQUE0QyxhQUFhLENBQUMsVUFBVSxDQUFHLENBQ3hFLENBQUM7S0FDSDs7UUFDSyxJQUFJLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFoQixDQUFnQixDQUFDOztRQUNsRCxTQUFTLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7SUFDcEMsSUFBSSxTQUFTLEtBQUssQ0FBQyxDQUFDLEVBQUU7UUFDcEIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsTUFBTSxJQUFJLEtBQUssQ0FDYiwyQ0FBeUMsYUFBYSxDQUFDLElBQUksQ0FBRyxDQUMvRCxDQUFDO1NBQ0g7UUFDRCxPQUFPLEtBQUssQ0FBQztLQUNkO0lBQ0QsSUFBSSxTQUFTLEtBQUssS0FBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUN4QyxNQUFNLElBQUksS0FBSyxDQUNiLDJEQUEyRCxDQUM1RCxDQUFDO0tBQ0g7O1FBQ0ssUUFBUSxvQkFBTyxLQUFLLENBQUM7SUFDM0IsUUFBUSxDQUFDLE1BQU0sT0FBZixRQUFRLG9CQUFRLFNBQVMsRUFBRSxDQUFDLEdBQUssSUFBSSxHQUFFO0lBQ3ZDLE9BQU8sUUFBUSxDQUFDO0FBQ2xCLENBQUM7Ozs7Ozs7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUFDLElBQVcsRUFBRSxRQUFhLEVBQUUsUUFBaUI7SUFDbkUsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQztRQUFFLE9BQU8sRUFBRSxDQUFDO0lBQzFFLElBQUksT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssUUFBUSxFQUFFO1FBQy9CLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBUztZQUN4QixPQUFPLG1CQUFjLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUEsQ0FBQztRQUNwRCxDQUFDLENBQUMsQ0FBQztLQUNKO0lBQ0QsSUFBSSxRQUFRLEVBQUU7UUFDWixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFBRSxRQUFRLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBa0I7WUFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUN6RCxDQUFDLENBQUMsQ0FBQztLQUNKO0lBQ0Qsc0JBQXNCO0lBQ3RCLElBQUksUUFBUSxFQUFFO1FBQ1osSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQWtCLElBQUssT0FBQSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDO0tBQzVEO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDOzs7Ozs7O0FBRUQsTUFBTSxVQUFVLFdBQVcsQ0FBQyxJQUFXLEVBQUUsUUFBYSxFQUFFLFFBQWlCO0lBQ3ZFLE9BQU8sT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQzNELENBQUM7Ozs7Ozs7O0FBRUQsTUFBTSxVQUFVLE9BQU8sQ0FDckIsTUFBZ0IsRUFDaEIsRUFBa0IsRUFDbEIsUUFBYSxFQUNiLFNBQWU7SUFFZixJQUFJLE9BQU8sRUFBRSxDQUFDLFNBQVMsS0FBSyxVQUFVLEVBQUU7UUFDdEMsT0FBTyxFQUFFO2FBQ04sU0FBUyxDQUFDLFNBQVMsQ0FBQzthQUNwQixJQUFJLENBQ0gsU0FBUyxDQUFDLGNBQU0sT0FBQSxFQUFFLENBQUMsU0FBUyxLQUFLLElBQUksRUFBckIsQ0FBcUIsQ0FBQyxFQUN0QyxHQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxPQUFPLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQXhDLENBQXdDLENBQUMsQ0FDdEQsQ0FBQztLQUNMO0lBQ0QsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0FBQ2pFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCB0YWtlV2hpbGUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBkZWVwQ29weSB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IFNGVUlTY2hlbWEsIFNGVUlTY2hlbWFJdGVtLCBTRlVJU2NoZW1hSXRlbVJ1biB9IGZyb20gJy4vc2NoZW1hL3VpJztcbmltcG9ydCB7IFNGU2NoZW1hLCBTRlNjaGVtYURlZmluaXRpb24sIFNGU2NoZW1hRW51bSB9IGZyb20gJy4vc2NoZW1hJztcblxuZXhwb3J0IGNvbnN0IEZPUk1BVE1BUFMgPSB7XG4gICdkYXRlLXRpbWUnOiB7XG4gICAgd2lkZ2V0OiAnZGF0ZScsXG4gICAgc2hvd1RpbWU6IHRydWUsXG4gICAgZm9ybWF0OiAnWVlZWS1NTS1ERFRISDptbTpzc1onLFxuICB9LFxuICBkYXRlOiB7IHdpZGdldDogJ2RhdGUnLCBmb3JtYXQ6ICdZWVlZLU1NLUREJyB9LFxuICAnZnVsbC1kYXRlJzogeyB3aWRnZXQ6ICdkYXRlJywgZm9ybWF0OiAnWVlZWS1NTS1ERCcgfSxcbiAgdGltZTogeyB3aWRnZXQ6ICd0aW1lJyB9LFxuICAnZnVsbC10aW1lJzogeyB3aWRnZXQ6ICd0aW1lJyB9LFxuICB3ZWVrOiB7IHdpZGdldDogJ2RhdGUnLCBtb2RlOiAnd2VlaycsIGZvcm1hdDogJ1lZWVktV1cnIH0sXG4gIG1vbnRoOiB7IHdpZGdldDogJ2RhdGUnLCBtb2RlOiAnbW9udGgnLCBmb3JtYXQ6ICdZWVlZLU1NJyB9LFxuICB1cmk6IHsgd2lkZ2V0OiAndXBsb2FkJyB9LFxuICBlbWFpbDogeyB3aWRnZXQ6ICdhdXRvY29tcGxldGUnLCB0eXBlOiAnZW1haWwnIH0sXG4gIGNvbG9yOiB7IHdpZGdldDogJ3N0cmluZycsIHR5cGU6ICdjb2xvcicgfSxcbiAgJyc6IHsgd2lkZ2V0OiAnc3RyaW5nJyB9LFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzQmxhbmsobzogYW55KSB7XG4gIHJldHVybiBvID09IG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0Jvb2wodmFsdWU6IGFueSwgZGVmYXVsdFZhbHVlOiBib29sZWFuKSB7XG4gIHJldHVybiB2YWx1ZSA9PSBudWxsID8gZGVmYXVsdFZhbHVlIDogYCR7dmFsdWV9YCAhPT0gJ2ZhbHNlJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpKC4uLmFyZ3MpIHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgY29uc29sZS53YXJuKC4uLmFyZ3MpO1xufVxuXG4vKiog5qC55o2uIGAkcmVmYCDmn6Xmib4gYGRlZmluaXRpb25zYCAqL1xuZnVuY3Rpb24gZmluZFNjaGVtYURlZmluaXRpb24oJHJlZjogc3RyaW5nLCBkZWZpbml0aW9uczogU0ZTY2hlbWFEZWZpbml0aW9uKSB7XG4gIGNvbnN0IG1hdGNoID0gL14jXFwvZGVmaW5pdGlvbnNcXC8oLiopJC8uZXhlYygkcmVmKTtcbiAgaWYgKG1hdGNoICYmIG1hdGNoWzFdKSB7XG4gICAgLy8gcGFyc2VyIEpTT04gUG9pbnRlclxuICAgIGNvbnN0IHBhcnRzID0gbWF0Y2hbMV0uc3BsaXQoJy8nKTtcbiAgICBsZXQgY3VycmVudDogYW55ID0gZGVmaW5pdGlvbnM7XG4gICAgZm9yIChsZXQgcGFydCBvZiBwYXJ0cykge1xuICAgICAgcGFydCA9IHBhcnQucmVwbGFjZSgvfjEvZywgJy8nKS5yZXBsYWNlKC9+MC9nLCAnficpO1xuICAgICAgaWYgKGN1cnJlbnQuaGFzT3duUHJvcGVydHkocGFydCkpIHtcbiAgICAgICAgY3VycmVudCA9IGN1cnJlbnRbcGFydF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENvdWxkIG5vdCBmaW5kIGEgZGVmaW5pdGlvbiBmb3IgJHskcmVmfS5gKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGN1cnJlbnQ7XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKGBDb3VsZCBub3QgZmluZCBhIGRlZmluaXRpb24gZm9yICR7JHJlZn0uYCk7XG59XG5cbi8qKlxuICog5Y+W5ZueU2NoZW1h77yM5bm25aSE55CGIGAkcmVmYCDnmoTlhbPns7tcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJldHJpZXZlU2NoZW1hKFxuICBzY2hlbWE6IFNGU2NoZW1hLFxuICBkZWZpbml0aW9uczogU0ZTY2hlbWFEZWZpbml0aW9uID0ge30sXG4pOiBTRlNjaGVtYSB7XG4gIGlmIChzY2hlbWEuaGFzT3duUHJvcGVydHkoJyRyZWYnKSkge1xuICAgIGNvbnN0ICRyZWZTY2hlbWEgPSBmaW5kU2NoZW1hRGVmaW5pdGlvbihzY2hlbWEuJHJlZiwgZGVmaW5pdGlvbnMpO1xuICAgIC8vIHJlbW92ZSAkcmVmIHByb3BlcnR5XG4gICAgY29uc3QgeyAkcmVmLCAuLi5sb2NhbFNjaGVtYSB9ID0gc2NoZW1hO1xuICAgIHJldHVybiByZXRyaWV2ZVNjaGVtYSh7IC4uLiRyZWZTY2hlbWEsIC4uLmxvY2FsU2NoZW1hIH0sIGRlZmluaXRpb25zKTtcbiAgfVxuXG4gIHJldHVybiBzY2hlbWE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSWYoc2NoZW1hOiBTRlNjaGVtYSwgdWk6IFNGVUlTY2hlbWFJdGVtUnVuKTogU0ZTY2hlbWEge1xuICBpZiAoIShzY2hlbWEuaGFzT3duUHJvcGVydHkoJ2lmJykgJiYgc2NoZW1hLmhhc093blByb3BlcnR5KCd0aGVuJykpKSByZXR1cm47XG5cbiAgaWYgKCFzY2hlbWEuaWYucHJvcGVydGllcylcbiAgICB0aHJvdyBuZXcgRXJyb3IoYGlmOiBkb2VzIG5vdCBjb250YWluICdwcm9wZXJ0aWVzJ2ApO1xuXG4gIGNvbnN0IGFsbEtleXMgPSBPYmplY3Qua2V5cyhzY2hlbWEucHJvcGVydGllcyksXG4gICAgaWZLZXlzID0gT2JqZWN0LmtleXMoc2NoZW1hLmlmLnByb3BlcnRpZXMpO1xuICBkZXRlY3RLZXkoYWxsS2V5cywgaWZLZXlzKTtcbiAgZGV0ZWN0S2V5KGFsbEtleXMsIHNjaGVtYS50aGVuLnJlcXVpcmVkKTtcbiAgc2NoZW1hLnJlcXVpcmVkID0gc2NoZW1hLnJlcXVpcmVkLmNvbmNhdChzY2hlbWEudGhlbi5yZXF1aXJlZCk7XG4gIGNvbnN0IGhhc0Vsc2UgPSBzY2hlbWEuaGFzT3duUHJvcGVydHkoJ2Vsc2UnKTtcbiAgaWYgKGhhc0Vsc2UpIHtcbiAgICBkZXRlY3RLZXkoYWxsS2V5cywgc2NoZW1hLmVsc2UucmVxdWlyZWQpO1xuICAgIHNjaGVtYS5yZXF1aXJlZCA9IHNjaGVtYS5yZXF1aXJlZC5jb25jYXQoc2NoZW1hLmVsc2UucmVxdWlyZWQpO1xuICB9XG5cbiAgY29uc3QgdmlzaWJsZUlmOiBhbnkgPSB7fTtcbiAgY29uc3QgdmlzaWJsZUVsc2U6IGFueSA9IHt9O1xuICBpZktleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgIGNvbnN0IGNvbmQgPSBzY2hlbWEuaWYucHJvcGVydGllc1trZXldLmVudW07XG4gICAgdmlzaWJsZUlmW2tleV0gPSBjb25kO1xuICAgIGlmIChoYXNFbHNlKSB2aXNpYmxlRWxzZVtrZXldID0gKHZhbHVlOiBhbnkpID0+ICFjb25kLmluY2x1ZGVzKHZhbHVlKTtcbiAgfSk7XG5cbiAgc2NoZW1hLnRoZW4ucmVxdWlyZWQuZm9yRWFjaChrZXkgPT4gKHVpW2AkJHtrZXl9YF0udmlzaWJsZUlmID0gdmlzaWJsZUlmKSk7XG4gIGlmIChoYXNFbHNlKVxuICAgIHNjaGVtYS5lbHNlLnJlcXVpcmVkLmZvckVhY2goXG4gICAgICBrZXkgPT4gKHVpW2AkJHtrZXl9YF0udmlzaWJsZUlmID0gdmlzaWJsZUVsc2UpLFxuICAgICk7XG5cbiAgcmV0dXJuIHNjaGVtYTtcbn1cblxuZnVuY3Rpb24gZGV0ZWN0S2V5KGtleXM6IHN0cmluZ1tdLCBkZXRlY3RLZXlzOiBzdHJpbmdbXSkge1xuICBkZXRlY3RLZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICBpZiAoIWtleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBpZjogcHJvcGVydGllcyBkb2VzIG5vdCBjb250YWluICcke2tleX0nYCk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9yZGVyUHJvcGVydGllcyhwcm9wZXJ0aWVzOiBzdHJpbmdbXSwgb3JkZXI6IHN0cmluZ1tdKSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShvcmRlcikpIHJldHVybiBwcm9wZXJ0aWVzO1xuICBjb25zdCBhcnJheVRvSGFzaCA9IGFyciA9PlxuICAgIGFyci5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHtcbiAgICAgIHByZXZbY3Vycl0gPSB0cnVlO1xuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfSwge30pO1xuICBjb25zdCBlcnJvclByb3BMaXN0ID0gYXJyID0+IGBwcm9wZXJ0eSBbJHthcnIuam9pbihgJywgJ2ApfV1gO1xuXG4gIGNvbnN0IHByb3BlcnR5SGFzaCA9IGFycmF5VG9IYXNoKHByb3BlcnRpZXMpO1xuICBjb25zdCBvcmRlckhhc2ggPSBhcnJheVRvSGFzaChvcmRlcik7XG4gIGNvbnN0IGV4dHJhbmVvdXMgPSBvcmRlci5maWx0ZXIocHJvcCA9PiBwcm9wICE9PSAnKicgJiYgIXByb3BlcnR5SGFzaFtwcm9wXSk7XG4gIGlmIChleHRyYW5lb3VzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGB1aSBzY2hlbWEgb3JkZXIgbGlzdCBjb250YWlucyBleHRyYW5lb3VzICR7ZXJyb3JQcm9wTGlzdChleHRyYW5lb3VzKX1gLFxuICAgICk7XG4gIH1cbiAgY29uc3QgcmVzdCA9IHByb3BlcnRpZXMuZmlsdGVyKHByb3AgPT4gIW9yZGVySGFzaFtwcm9wXSk7XG4gIGNvbnN0IHJlc3RJbmRleCA9IG9yZGVyLmluZGV4T2YoJyonKTtcbiAgaWYgKHJlc3RJbmRleCA9PT0gLTEpIHtcbiAgICBpZiAocmVzdC5sZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYHVpIHNjaGVtYSBvcmRlciBsaXN0IGRvZXMgbm90IGNvbnRhaW4gJHtlcnJvclByb3BMaXN0KHJlc3QpfWAsXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gb3JkZXI7XG4gIH1cbiAgaWYgKHJlc3RJbmRleCAhPT0gb3JkZXIubGFzdEluZGV4T2YoJyonKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICd1aSBzY2hlbWEgb3JkZXIgbGlzdCBjb250YWlucyBtb3JlIHRoYW4gb25lIHdpbGRjYXJkIGl0ZW0nLFxuICAgICk7XG4gIH1cbiAgY29uc3QgY29tcGxldGUgPSBbLi4ub3JkZXJdO1xuICBjb21wbGV0ZS5zcGxpY2UocmVzdEluZGV4LCAxLCAuLi5yZXN0KTtcbiAgcmV0dXJuIGNvbXBsZXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RW51bShsaXN0OiBhbnlbXSwgZm9ybURhdGE6IGFueSwgcmVhZE9ubHk6IGJvb2xlYW4pOiBTRlNjaGVtYUVudW1bXSB7XG4gIGlmIChpc0JsYW5rKGxpc3QpIHx8ICFBcnJheS5pc0FycmF5KGxpc3QpIHx8IGxpc3QubGVuZ3RoID09PSAwKSByZXR1cm4gW107XG4gIGlmICh0eXBlb2YgbGlzdFswXSAhPT0gJ29iamVjdCcpIHtcbiAgICBsaXN0ID0gbGlzdC5tYXAoKGl0ZW06IGFueSkgPT4ge1xuICAgICAgcmV0dXJuIDxTRlNjaGVtYUVudW0+eyBsYWJlbDogaXRlbSwgdmFsdWU6IGl0ZW0gfTtcbiAgICB9KTtcbiAgfVxuICBpZiAoZm9ybURhdGEpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZm9ybURhdGEpKSBmb3JtRGF0YSA9IFtmb3JtRGF0YV07XG4gICAgbGlzdC5mb3JFYWNoKChpdGVtOiBTRlNjaGVtYUVudW0pID0+IHtcbiAgICAgIGlmICh+Zm9ybURhdGEuaW5kZXhPZihpdGVtLnZhbHVlKSkgaXRlbS5jaGVja2VkID0gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuICAvLyBmaXggZGlzYWJsZWQgc3RhdHVzXG4gIGlmIChyZWFkT25seSkge1xuICAgIGxpc3QuZm9yRWFjaCgoaXRlbTogU0ZTY2hlbWFFbnVtKSA9PiBpdGVtLmRpc2FibGVkID0gdHJ1ZSk7XG4gIH1cbiAgcmV0dXJuIGxpc3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb3B5RW51bShsaXN0OiBhbnlbXSwgZm9ybURhdGE6IGFueSwgcmVhZE9ubHk6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGdldEVudW0oZGVlcENvcHkobGlzdCB8fCBbXSksIGZvcm1EYXRhLCByZWFkT25seSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRhKFxuICBzY2hlbWE6IFNGU2NoZW1hLFxuICB1aTogU0ZVSVNjaGVtYUl0ZW0sXG4gIGZvcm1EYXRhOiBhbnksXG4gIGFzeW5jQXJncz86IGFueSxcbik6IE9ic2VydmFibGU8U0ZTY2hlbWFFbnVtW10+IHtcbiAgaWYgKHR5cGVvZiB1aS5hc3luY0RhdGEgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdWlcbiAgICAgIC5hc3luY0RhdGEoYXN5bmNBcmdzKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRha2VXaGlsZSgoKSA9PiB1aS5fX2Rlc3Ryb3kgIT09IHRydWUpLFxuICAgICAgICBtYXAobGlzdCA9PiBnZXRFbnVtKGxpc3QsIGZvcm1EYXRhLCBzY2hlbWEucmVhZE9ubHkpKSxcbiAgICAgICk7XG4gIH1cbiAgcmV0dXJuIG9mKGdldENvcHlFbnVtKHNjaGVtYS5lbnVtLCBmb3JtRGF0YSwgc2NoZW1hLnJlYWRPbmx5KSk7XG59XG4iXX0=