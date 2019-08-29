/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { deepCopy, toBoolean } from '@delon/util';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { SF_SEQ } from './const';
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
    value = toBoolean(value, true);
    return value == null ? defaultValue : value;
}
/**
 * @param {?} ui
 * @param {...?} args
 * @return {?}
 */
export function di(ui) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (ui.debug) {
        // tslint:disable-next-line:no-console
        console.warn.apply(console, tslib_1.__spread(args));
    }
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
        var parts = match[1].split(SF_SEQ);
        /** @type {?} */
        var current = definitions;
        try {
            for (var parts_1 = tslib_1.__values(parts), parts_1_1 = parts_1.next(); !parts_1_1.done; parts_1_1 = parts_1.next()) {
                var part = parts_1_1.value;
                part = part.replace(/~1/g, SF_SEQ).replace(/~0/g, '~');
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
        var $refSchema = findSchemaDefinition((/** @type {?} */ (schema.$ref)), definitions);
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
        return null;
    if (!(/** @type {?} */ (schema.if)).properties)
        throw new Error("if: does not contain 'properties'");
    /** @type {?} */
    var allKeys = Object.keys((/** @type {?} */ (schema.properties)));
    /** @type {?} */
    var ifKeys = Object.keys((/** @type {?} */ ((/** @type {?} */ (schema.if)).properties)));
    detectKey(allKeys, ifKeys);
    detectKey(allKeys, (/** @type {?} */ ((/** @type {?} */ (schema.then)).required)));
    schema.required = (/** @type {?} */ (schema.required)).concat((/** @type {?} */ ((/** @type {?} */ (schema.then)).required)));
    /** @type {?} */
    var hasElse = schema.hasOwnProperty('else');
    if (hasElse) {
        detectKey(allKeys, (/** @type {?} */ ((/** @type {?} */ (schema.else)).required)));
        schema.required = schema.required.concat((/** @type {?} */ ((/** @type {?} */ (schema.else)).required)));
    }
    /** @type {?} */
    var visibleIf = {};
    /** @type {?} */
    var visibleElse = {};
    ifKeys.forEach((/**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var cond = (/** @type {?} */ ((/** @type {?} */ (schema.if)).properties))[key].enum;
        visibleIf[key] = cond;
        if (hasElse)
            visibleElse[key] = (/**
             * @param {?} value
             * @return {?}
             */
            function (value) { return !(/** @type {?} */ (cond)).includes(value); });
    }));
    (/** @type {?} */ ((/** @type {?} */ (schema.then)).required)).forEach((/**
     * @param {?} key
     * @return {?}
     */
    function (key) { return (ui["$" + key].visibleIf = visibleIf); }));
    if (hasElse)
        (/** @type {?} */ ((/** @type {?} */ (schema.else)).required)).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return (ui["$" + key].visibleIf = visibleElse); }));
    return schema;
}
/**
 * @param {?} keys
 * @param {?} detectKeys
 * @return {?}
 */
function detectKey(keys, detectKeys) {
    detectKeys.forEach((/**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        if (!keys.includes(key)) {
            throw new Error("if: properties does not contain '" + key + "'");
        }
    }));
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
    var arrayToHash = (/**
     * @param {?} arr
     * @return {?}
     */
    function (arr) {
        return arr.reduce((/**
         * @param {?} prev
         * @param {?} curr
         * @return {?}
         */
        function (prev, curr) {
            prev[curr] = true;
            return prev;
        }), {});
    });
    /** @type {?} */
    var errorPropList = (/**
     * @param {?} arr
     * @return {?}
     */
    function (arr) { return "property [" + arr.join("', '") + "]"; });
    /** @type {?} */
    var propertyHash = arrayToHash(properties);
    /** @type {?} */
    var orderHash = arrayToHash(order);
    /** @type {?} */
    var extraneous = order.filter((/**
     * @param {?} prop
     * @return {?}
     */
    function (prop) { return prop !== '*' && !propertyHash[prop]; }));
    if (extraneous.length) {
        throw new Error("ui schema order list contains extraneous " + errorPropList(extraneous));
    }
    /** @type {?} */
    var rest = properties.filter((/**
     * @param {?} prop
     * @return {?}
     */
    function (prop) { return !orderHash[prop]; }));
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
        list = list.map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            return (/** @type {?} */ ({ label: item, value: item }));
        }));
    }
    if (formData) {
        if (!Array.isArray(formData))
            formData = [formData];
        list.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            if (~formData.indexOf(item.value))
                item.checked = true;
        }));
    }
    // fix disabled status
    if (readOnly) {
        list.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return (item.disabled = true); }));
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
        return ui.asyncData(asyncArgs).pipe(map((/**
         * @param {?} list
         * @return {?}
         */
        function (list) { return getEnum(list, formData, (/** @type {?} */ (schema.readOnly))); })));
    }
    return of(getCopyEnum((/** @type {?} */ (schema.enum)), formData, (/** @type {?} */ (schema.readOnly))));
}
/**
 * Whether to using date-fns to format a date
 * @param {?} srv
 * @return {?}
 */
export function isDateFns(srv) {
    if (!srv)
        return false;
    /** @type {?} */
    var data = srv.getDateLocale();
    // Compatible date-fns v1.x & v2.x
    return data != null && (!!data.distanceInWords || !!data.formatDistance);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vZm9ybS8iLCJzb3VyY2VzIjpbInNyYy91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxFQUFFLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSXJDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxTQUFTLENBQUM7O0FBRWpDLE1BQU0sS0FBTyxVQUFVLEdBQUc7SUFDeEIsV0FBVyxFQUFFO1FBQ1gsTUFBTSxFQUFFLE1BQU07UUFDZCxRQUFRLEVBQUUsSUFBSTtRQUNkLE1BQU0sRUFBRSxzQkFBc0I7S0FDL0I7SUFDRCxJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUU7SUFDOUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFO0lBQ3JELElBQUksRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUU7SUFDeEIsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRTtJQUMvQixJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRTtJQUN6RCxLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRTtJQUMzRCxHQUFHLEVBQUUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFO0lBQ3pCLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtJQUNoRCxLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7SUFDMUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRTtDQUN6Qjs7Ozs7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUFDLENBQU07SUFDNUIsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDO0FBQ25CLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxNQUFNLENBQUMsS0FBVSxFQUFFLFlBQXFCO0lBQ3RELEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQy9CLE9BQU8sS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7QUFDOUMsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLEVBQUUsQ0FBQyxFQUFjO0lBQUUsY0FBTztTQUFQLFVBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87UUFBUCw2QkFBTzs7SUFDeEMsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFO1FBQ1osc0NBQXNDO1FBQ3RDLE9BQU8sQ0FBQyxJQUFJLE9BQVosT0FBTyxtQkFBUyxJQUFJLEdBQUU7S0FDdkI7QUFDSCxDQUFDOzs7Ozs7O0FBR0QsU0FBUyxvQkFBb0IsQ0FBQyxJQUFZLEVBQUUsV0FBK0I7OztRQUNuRSxLQUFLLEdBQUcsd0JBQXdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNqRCxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUU7OztZQUVmLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQzs7WUFDaEMsT0FBTyxHQUFRLFdBQVc7O1lBQzlCLEtBQWlCLElBQUEsVUFBQSxpQkFBQSxLQUFLLENBQUEsNEJBQUEsK0NBQUU7Z0JBQW5CLElBQUksSUFBSSxrQkFBQTtnQkFDWCxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDdkQsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUNoQyxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUN6QjtxQkFBTTtvQkFDTCxNQUFNLElBQUksS0FBSyxDQUFDLHFDQUFtQyxJQUFJLE1BQUcsQ0FBQyxDQUFDO2lCQUM3RDthQUNGOzs7Ozs7Ozs7UUFDRCxPQUFPLE9BQU8sQ0FBQztLQUNoQjtJQUNELE1BQU0sSUFBSSxLQUFLLENBQUMscUNBQW1DLElBQUksTUFBRyxDQUFDLENBQUM7QUFDOUQsQ0FBQzs7Ozs7OztBQUtELE1BQU0sVUFBVSxjQUFjLENBQUMsTUFBZ0IsRUFBRSxXQUFvQztJQUFwQyw0QkFBQSxFQUFBLGdCQUFvQztJQUNuRixJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUU7O1lBQzNCLFVBQVUsR0FBRyxvQkFBb0IsQ0FBQyxtQkFBQSxNQUFNLENBQUMsSUFBSSxFQUFDLEVBQUUsV0FBVyxDQUFDOztRQUUxRCxJQUFBLGtCQUFJLEVBQUUsOENBQWM7UUFDNUIsT0FBTyxjQUFjLHNCQUFNLFVBQVUsRUFBSyxXQUFXLEdBQUksV0FBVyxDQUFDLENBQUM7S0FDdkU7SUFFRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsU0FBUyxDQUFDLE1BQWdCLEVBQUUsRUFBcUI7SUFDL0QsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFFakYsSUFBSSxDQUFDLG1CQUFBLE1BQU0sQ0FBQyxFQUFFLEVBQUMsQ0FBQyxVQUFVO1FBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDOztRQUUzRSxPQUFPLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBQSxNQUFNLENBQUMsVUFBVSxFQUFDLENBQUM7O1FBQ3pDLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFBLG1CQUFBLE1BQU0sQ0FBQyxFQUFFLEVBQUMsQ0FBQyxVQUFVLEVBQUMsQ0FBQztJQUNsRCxTQUFTLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzNCLFNBQVMsQ0FBQyxPQUFPLEVBQUUsbUJBQUEsbUJBQUEsTUFBTSxDQUFDLElBQUksRUFBQyxDQUFDLFFBQVEsRUFBQyxDQUFDLENBQUM7SUFDM0MsTUFBTSxDQUFDLFFBQVEsR0FBRyxtQkFBQSxNQUFNLENBQUMsUUFBUSxFQUFDLENBQUMsTUFBTSxDQUFDLG1CQUFBLG1CQUFBLE1BQU0sQ0FBQyxJQUFJLEVBQUMsQ0FBQyxRQUFRLEVBQUMsQ0FBQyxDQUFDOztRQUM1RCxPQUFPLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUM7SUFDN0MsSUFBSSxPQUFPLEVBQUU7UUFDWCxTQUFTLENBQUMsT0FBTyxFQUFFLG1CQUFBLG1CQUFBLE1BQU0sQ0FBQyxJQUFJLEVBQUMsQ0FBQyxRQUFRLEVBQUMsQ0FBQyxDQUFDO1FBQzNDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsbUJBQUEsbUJBQUEsTUFBTSxDQUFDLElBQUksRUFBQyxDQUFDLFFBQVEsRUFBQyxDQUFDLENBQUM7S0FDbEU7O1FBRUssU0FBUyxHQUFRLEVBQUU7O1FBQ25CLFdBQVcsR0FBUSxFQUFFO0lBQzNCLE1BQU0sQ0FBQyxPQUFPOzs7O0lBQUMsVUFBQSxHQUFHOztZQUNWLElBQUksR0FBRyxtQkFBQSxtQkFBQSxNQUFNLENBQUMsRUFBRSxFQUFDLENBQUMsVUFBVSxFQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSTtRQUM3QyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksT0FBTztZQUFFLFdBQVcsQ0FBQyxHQUFHLENBQUM7Ozs7WUFBRyxVQUFDLEtBQVUsSUFBSyxPQUFBLENBQUMsbUJBQUEsSUFBSSxFQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUF0QixDQUFzQixDQUFBLENBQUM7SUFDekUsQ0FBQyxFQUFDLENBQUM7SUFFSCxtQkFBQSxtQkFBQSxNQUFNLENBQUMsSUFBSSxFQUFDLENBQUMsUUFBUSxFQUFDLENBQUMsT0FBTzs7OztJQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsQ0FBQyxFQUFFLENBQUMsTUFBSSxHQUFLLENBQUMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEVBQXJDLENBQXFDLEVBQUMsQ0FBQztJQUM3RSxJQUFJLE9BQU87UUFBRSxtQkFBQSxtQkFBQSxNQUFNLENBQUMsSUFBSSxFQUFDLENBQUMsUUFBUSxFQUFDLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsQ0FBQyxFQUFFLENBQUMsTUFBSSxHQUFLLENBQUMsQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLEVBQXZDLENBQXVDLEVBQUMsQ0FBQztJQUU1RixPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDOzs7Ozs7QUFFRCxTQUFTLFNBQVMsQ0FBQyxJQUFjLEVBQUUsVUFBb0I7SUFDckQsVUFBVSxDQUFDLE9BQU87Ozs7SUFBQyxVQUFBLEdBQUc7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDdkIsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQ0FBb0MsR0FBRyxNQUFHLENBQUMsQ0FBQztTQUM3RDtJQUNILENBQUMsRUFBQyxDQUFDO0FBQ0wsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLGVBQWUsQ0FBQyxVQUFvQixFQUFFLEtBQWU7SUFDbkUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQUUsT0FBTyxVQUFVLENBQUM7O1FBQ3ZDLFdBQVc7Ozs7SUFBRyxVQUFBLEdBQUc7UUFDckIsT0FBQSxHQUFHLENBQUMsTUFBTTs7Ozs7UUFBQyxVQUFDLElBQUksRUFBRSxJQUFJO1lBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDbEIsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDLEdBQUUsRUFBRSxDQUFDO0lBSE4sQ0FHTSxDQUFBOztRQUNGLGFBQWE7Ozs7SUFBRyxVQUFBLEdBQUcsSUFBSSxPQUFBLGVBQWEsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBRyxFQUFoQyxDQUFnQyxDQUFBOztRQUV2RCxZQUFZLEdBQUcsV0FBVyxDQUFDLFVBQVUsQ0FBQzs7UUFDdEMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUM7O1FBQzlCLFVBQVUsR0FBRyxLQUFLLENBQUMsTUFBTTs7OztJQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBbkMsQ0FBbUMsRUFBQztJQUM1RSxJQUFJLFVBQVUsQ0FBQyxNQUFNLEVBQUU7UUFDckIsTUFBTSxJQUFJLEtBQUssQ0FBQyw4Q0FBNEMsYUFBYSxDQUFDLFVBQVUsQ0FBRyxDQUFDLENBQUM7S0FDMUY7O1FBQ0ssSUFBSSxHQUFHLFVBQVUsQ0FBQyxNQUFNOzs7O0lBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBaEIsQ0FBZ0IsRUFBQzs7UUFDbEQsU0FBUyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO0lBQ3BDLElBQUksU0FBUyxLQUFLLENBQUMsQ0FBQyxFQUFFO1FBQ3BCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLE1BQU0sSUFBSSxLQUFLLENBQUMsMkNBQXlDLGFBQWEsQ0FBQyxJQUFJLENBQUcsQ0FBQyxDQUFDO1NBQ2pGO1FBQ0QsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUNELElBQUksU0FBUyxLQUFLLEtBQUssQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDeEMsTUFBTSxJQUFJLEtBQUssQ0FBQywyREFBMkQsQ0FBQyxDQUFDO0tBQzlFOztRQUNLLFFBQVEsb0JBQU8sS0FBSyxDQUFDO0lBQzNCLFFBQVEsQ0FBQyxNQUFNLE9BQWYsUUFBUSxvQkFBUSxTQUFTLEVBQUUsQ0FBQyxHQUFLLElBQUksR0FBRTtJQUN2QyxPQUFPLFFBQVEsQ0FBQztBQUNsQixDQUFDOzs7Ozs7O0FBRUQsTUFBTSxVQUFVLE9BQU8sQ0FBQyxJQUFXLEVBQUUsUUFBYSxFQUFFLFFBQWlCO0lBQ25FLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUM7UUFBRSxPQUFPLEVBQUUsQ0FBQztJQUMxRSxJQUFJLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVEsRUFBRTtRQUMvQixJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFDLElBQVM7WUFDeEIsT0FBTyxtQkFBQSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFnQixDQUFDO1FBQ3RELENBQUMsRUFBQyxDQUFDO0tBQ0o7SUFDRCxJQUFJLFFBQVEsRUFBRTtRQUNaLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztZQUFFLFFBQVEsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxJQUFrQjtZQUM5QixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3pELENBQUMsRUFBQyxDQUFDO0tBQ0o7SUFDRCxzQkFBc0I7SUFDdEIsSUFBSSxRQUFRLEVBQUU7UUFDWixJQUFJLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsSUFBa0IsSUFBSyxPQUFBLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsRUFBdEIsQ0FBc0IsRUFBQyxDQUFDO0tBQzlEO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDOzs7Ozs7O0FBRUQsTUFBTSxVQUFVLFdBQVcsQ0FBQyxJQUFXLEVBQUUsUUFBYSxFQUFFLFFBQWlCO0lBQ3ZFLE9BQU8sT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQzNELENBQUM7Ozs7Ozs7O0FBRUQsTUFBTSxVQUFVLE9BQU8sQ0FBQyxNQUFnQixFQUFFLEVBQWtCLEVBQUUsUUFBYSxFQUFFLFNBQWU7SUFDMUYsSUFBSSxPQUFPLEVBQUUsQ0FBQyxTQUFTLEtBQUssVUFBVSxFQUFFO1FBQ3RDLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRzs7OztRQUFDLFVBQUMsSUFBb0IsSUFBSyxPQUFBLE9BQU8sQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLG1CQUFBLE1BQU0sQ0FBQyxRQUFRLEVBQUMsQ0FBQyxFQUF6QyxDQUF5QyxFQUFDLENBQUMsQ0FBQztLQUMvRztJQUNELE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQyxtQkFBQSxNQUFNLENBQUMsSUFBSSxFQUFDLEVBQUUsUUFBUSxFQUFFLG1CQUFBLE1BQU0sQ0FBQyxRQUFRLEVBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbkUsQ0FBQzs7Ozs7O0FBS0QsTUFBTSxVQUFVLFNBQVMsQ0FBQyxHQUFrQjtJQUMxQyxJQUFJLENBQUMsR0FBRztRQUFFLE9BQU8sS0FBSyxDQUFDOztRQUNqQixJQUFJLEdBQUcsR0FBRyxDQUFDLGFBQWEsRUFBRTtJQUNoQyxrQ0FBa0M7SUFDbEMsT0FBTyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUMzRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGVlcENvcHksIHRvQm9vbGVhbiB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IG9mLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcbmltcG9ydCB7IFNGU2NoZW1hLCBTRlNjaGVtYURlZmluaXRpb24sIFNGU2NoZW1hRW51bSB9IGZyb20gJy4vc2NoZW1hJztcbmltcG9ydCB7IFNGVUlTY2hlbWEsIFNGVUlTY2hlbWFJdGVtLCBTRlVJU2NoZW1hSXRlbVJ1biB9IGZyb20gJy4vc2NoZW1hL3VpJztcbmltcG9ydCB7IFNGX1NFUSB9IGZyb20gJy4vY29uc3QnO1xuXG5leHBvcnQgY29uc3QgRk9STUFUTUFQUyA9IHtcbiAgJ2RhdGUtdGltZSc6IHtcbiAgICB3aWRnZXQ6ICdkYXRlJyxcbiAgICBzaG93VGltZTogdHJ1ZSxcbiAgICBmb3JtYXQ6ICdZWVlZLU1NLUREVEhIOm1tOnNzWicsXG4gIH0sXG4gIGRhdGU6IHsgd2lkZ2V0OiAnZGF0ZScsIGZvcm1hdDogJ1lZWVktTU0tREQnIH0sXG4gICdmdWxsLWRhdGUnOiB7IHdpZGdldDogJ2RhdGUnLCBmb3JtYXQ6ICdZWVlZLU1NLUREJyB9LFxuICB0aW1lOiB7IHdpZGdldDogJ3RpbWUnIH0sXG4gICdmdWxsLXRpbWUnOiB7IHdpZGdldDogJ3RpbWUnIH0sXG4gIHdlZWs6IHsgd2lkZ2V0OiAnZGF0ZScsIG1vZGU6ICd3ZWVrJywgZm9ybWF0OiAnWVlZWS1XVycgfSxcbiAgbW9udGg6IHsgd2lkZ2V0OiAnZGF0ZScsIG1vZGU6ICdtb250aCcsIGZvcm1hdDogJ1lZWVktTU0nIH0sXG4gIHVyaTogeyB3aWRnZXQ6ICd1cGxvYWQnIH0sXG4gIGVtYWlsOiB7IHdpZGdldDogJ2F1dG9jb21wbGV0ZScsIHR5cGU6ICdlbWFpbCcgfSxcbiAgY29sb3I6IHsgd2lkZ2V0OiAnc3RyaW5nJywgdHlwZTogJ2NvbG9yJyB9LFxuICAnJzogeyB3aWRnZXQ6ICdzdHJpbmcnIH0sXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gaXNCbGFuayhvOiBhbnkpIHtcbiAgcmV0dXJuIG8gPT0gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvQm9vbCh2YWx1ZTogYW55LCBkZWZhdWx0VmFsdWU6IGJvb2xlYW4pIHtcbiAgdmFsdWUgPSB0b0Jvb2xlYW4odmFsdWUsIHRydWUpO1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/IGRlZmF1bHRWYWx1ZSA6IHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGkodWk6IFNGVUlTY2hlbWEsIC4uLmFyZ3MpIHtcbiAgaWYgKHVpLmRlYnVnKSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICBjb25zb2xlLndhcm4oLi4uYXJncyk7XG4gIH1cbn1cblxuLyoqIOagueaNriBgJHJlZmAg5p+l5om+IGBkZWZpbml0aW9uc2AgKi9cbmZ1bmN0aW9uIGZpbmRTY2hlbWFEZWZpbml0aW9uKCRyZWY6IHN0cmluZywgZGVmaW5pdGlvbnM6IFNGU2NoZW1hRGVmaW5pdGlvbikge1xuICBjb25zdCBtYXRjaCA9IC9eI1xcL2RlZmluaXRpb25zXFwvKC4qKSQvLmV4ZWMoJHJlZik7XG4gIGlmIChtYXRjaCAmJiBtYXRjaFsxXSkge1xuICAgIC8vIHBhcnNlciBKU09OIFBvaW50ZXJcbiAgICBjb25zdCBwYXJ0cyA9IG1hdGNoWzFdLnNwbGl0KFNGX1NFUSk7XG4gICAgbGV0IGN1cnJlbnQ6IGFueSA9IGRlZmluaXRpb25zO1xuICAgIGZvciAobGV0IHBhcnQgb2YgcGFydHMpIHtcbiAgICAgIHBhcnQgPSBwYXJ0LnJlcGxhY2UoL34xL2csIFNGX1NFUSkucmVwbGFjZSgvfjAvZywgJ34nKTtcbiAgICAgIGlmIChjdXJyZW50Lmhhc093blByb3BlcnR5KHBhcnQpKSB7XG4gICAgICAgIGN1cnJlbnQgPSBjdXJyZW50W3BhcnRdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDb3VsZCBub3QgZmluZCBhIGRlZmluaXRpb24gZm9yICR7JHJlZn0uYCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjdXJyZW50O1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihgQ291bGQgbm90IGZpbmQgYSBkZWZpbml0aW9uIGZvciAkeyRyZWZ9LmApO1xufVxuXG4vKipcbiAqIOWPluWbnlNjaGVtYe+8jOW5tuWkhOeQhiBgJHJlZmAg55qE5YWz57O7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXRyaWV2ZVNjaGVtYShzY2hlbWE6IFNGU2NoZW1hLCBkZWZpbml0aW9uczogU0ZTY2hlbWFEZWZpbml0aW9uID0ge30pOiBTRlNjaGVtYSB7XG4gIGlmIChzY2hlbWEuaGFzT3duUHJvcGVydHkoJyRyZWYnKSkge1xuICAgIGNvbnN0ICRyZWZTY2hlbWEgPSBmaW5kU2NoZW1hRGVmaW5pdGlvbihzY2hlbWEuJHJlZiEsIGRlZmluaXRpb25zKTtcbiAgICAvLyByZW1vdmUgJHJlZiBwcm9wZXJ0eVxuICAgIGNvbnN0IHsgJHJlZiwgLi4ubG9jYWxTY2hlbWEgfSA9IHNjaGVtYTtcbiAgICByZXR1cm4gcmV0cmlldmVTY2hlbWEoeyAuLi4kcmVmU2NoZW1hLCAuLi5sb2NhbFNjaGVtYSB9LCBkZWZpbml0aW9ucyk7XG4gIH1cblxuICByZXR1cm4gc2NoZW1hO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUlmKHNjaGVtYTogU0ZTY2hlbWEsIHVpOiBTRlVJU2NoZW1hSXRlbVJ1bik6IFNGU2NoZW1hIHwgbnVsbCB7XG4gIGlmICghKHNjaGVtYS5oYXNPd25Qcm9wZXJ0eSgnaWYnKSAmJiBzY2hlbWEuaGFzT3duUHJvcGVydHkoJ3RoZW4nKSkpIHJldHVybiBudWxsO1xuXG4gIGlmICghc2NoZW1hLmlmIS5wcm9wZXJ0aWVzKSB0aHJvdyBuZXcgRXJyb3IoYGlmOiBkb2VzIG5vdCBjb250YWluICdwcm9wZXJ0aWVzJ2ApO1xuXG4gIGNvbnN0IGFsbEtleXMgPSBPYmplY3Qua2V5cyhzY2hlbWEucHJvcGVydGllcyEpO1xuICBjb25zdCBpZktleXMgPSBPYmplY3Qua2V5cyhzY2hlbWEuaWYhLnByb3BlcnRpZXMhKTtcbiAgZGV0ZWN0S2V5KGFsbEtleXMsIGlmS2V5cyk7XG4gIGRldGVjdEtleShhbGxLZXlzLCBzY2hlbWEudGhlbiEucmVxdWlyZWQhKTtcbiAgc2NoZW1hLnJlcXVpcmVkID0gc2NoZW1hLnJlcXVpcmVkIS5jb25jYXQoc2NoZW1hLnRoZW4hLnJlcXVpcmVkISk7XG4gIGNvbnN0IGhhc0Vsc2UgPSBzY2hlbWEuaGFzT3duUHJvcGVydHkoJ2Vsc2UnKTtcbiAgaWYgKGhhc0Vsc2UpIHtcbiAgICBkZXRlY3RLZXkoYWxsS2V5cywgc2NoZW1hLmVsc2UhLnJlcXVpcmVkISk7XG4gICAgc2NoZW1hLnJlcXVpcmVkID0gc2NoZW1hLnJlcXVpcmVkLmNvbmNhdChzY2hlbWEuZWxzZSEucmVxdWlyZWQhKTtcbiAgfVxuXG4gIGNvbnN0IHZpc2libGVJZjogYW55ID0ge307XG4gIGNvbnN0IHZpc2libGVFbHNlOiBhbnkgPSB7fTtcbiAgaWZLZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICBjb25zdCBjb25kID0gc2NoZW1hLmlmIS5wcm9wZXJ0aWVzIVtrZXldLmVudW07XG4gICAgdmlzaWJsZUlmW2tleV0gPSBjb25kO1xuICAgIGlmIChoYXNFbHNlKSB2aXNpYmxlRWxzZVtrZXldID0gKHZhbHVlOiBhbnkpID0+ICFjb25kIS5pbmNsdWRlcyh2YWx1ZSk7XG4gIH0pO1xuXG4gIHNjaGVtYS50aGVuIS5yZXF1aXJlZCEuZm9yRWFjaChrZXkgPT4gKHVpW2AkJHtrZXl9YF0udmlzaWJsZUlmID0gdmlzaWJsZUlmKSk7XG4gIGlmIChoYXNFbHNlKSBzY2hlbWEuZWxzZSEucmVxdWlyZWQhLmZvckVhY2goa2V5ID0+ICh1aVtgJCR7a2V5fWBdLnZpc2libGVJZiA9IHZpc2libGVFbHNlKSk7XG5cbiAgcmV0dXJuIHNjaGVtYTtcbn1cblxuZnVuY3Rpb24gZGV0ZWN0S2V5KGtleXM6IHN0cmluZ1tdLCBkZXRlY3RLZXlzOiBzdHJpbmdbXSkge1xuICBkZXRlY3RLZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICBpZiAoIWtleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBpZjogcHJvcGVydGllcyBkb2VzIG5vdCBjb250YWluICcke2tleX0nYCk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9yZGVyUHJvcGVydGllcyhwcm9wZXJ0aWVzOiBzdHJpbmdbXSwgb3JkZXI6IHN0cmluZ1tdKSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShvcmRlcikpIHJldHVybiBwcm9wZXJ0aWVzO1xuICBjb25zdCBhcnJheVRvSGFzaCA9IGFyciA9PlxuICAgIGFyci5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHtcbiAgICAgIHByZXZbY3Vycl0gPSB0cnVlO1xuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfSwge30pO1xuICBjb25zdCBlcnJvclByb3BMaXN0ID0gYXJyID0+IGBwcm9wZXJ0eSBbJHthcnIuam9pbihgJywgJ2ApfV1gO1xuXG4gIGNvbnN0IHByb3BlcnR5SGFzaCA9IGFycmF5VG9IYXNoKHByb3BlcnRpZXMpO1xuICBjb25zdCBvcmRlckhhc2ggPSBhcnJheVRvSGFzaChvcmRlcik7XG4gIGNvbnN0IGV4dHJhbmVvdXMgPSBvcmRlci5maWx0ZXIocHJvcCA9PiBwcm9wICE9PSAnKicgJiYgIXByb3BlcnR5SGFzaFtwcm9wXSk7XG4gIGlmIChleHRyYW5lb3VzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgdWkgc2NoZW1hIG9yZGVyIGxpc3QgY29udGFpbnMgZXh0cmFuZW91cyAke2Vycm9yUHJvcExpc3QoZXh0cmFuZW91cyl9YCk7XG4gIH1cbiAgY29uc3QgcmVzdCA9IHByb3BlcnRpZXMuZmlsdGVyKHByb3AgPT4gIW9yZGVySGFzaFtwcm9wXSk7XG4gIGNvbnN0IHJlc3RJbmRleCA9IG9yZGVyLmluZGV4T2YoJyonKTtcbiAgaWYgKHJlc3RJbmRleCA9PT0gLTEpIHtcbiAgICBpZiAocmVzdC5sZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgdWkgc2NoZW1hIG9yZGVyIGxpc3QgZG9lcyBub3QgY29udGFpbiAke2Vycm9yUHJvcExpc3QocmVzdCl9YCk7XG4gICAgfVxuICAgIHJldHVybiBvcmRlcjtcbiAgfVxuICBpZiAocmVzdEluZGV4ICE9PSBvcmRlci5sYXN0SW5kZXhPZignKicpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd1aSBzY2hlbWEgb3JkZXIgbGlzdCBjb250YWlucyBtb3JlIHRoYW4gb25lIHdpbGRjYXJkIGl0ZW0nKTtcbiAgfVxuICBjb25zdCBjb21wbGV0ZSA9IFsuLi5vcmRlcl07XG4gIGNvbXBsZXRlLnNwbGljZShyZXN0SW5kZXgsIDEsIC4uLnJlc3QpO1xuICByZXR1cm4gY29tcGxldGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRFbnVtKGxpc3Q6IGFueVtdLCBmb3JtRGF0YTogYW55LCByZWFkT25seTogYm9vbGVhbik6IFNGU2NoZW1hRW51bVtdIHtcbiAgaWYgKGlzQmxhbmsobGlzdCkgfHwgIUFycmF5LmlzQXJyYXkobGlzdCkgfHwgbGlzdC5sZW5ndGggPT09IDApIHJldHVybiBbXTtcbiAgaWYgKHR5cGVvZiBsaXN0WzBdICE9PSAnb2JqZWN0Jykge1xuICAgIGxpc3QgPSBsaXN0Lm1hcCgoaXRlbTogYW55KSA9PiB7XG4gICAgICByZXR1cm4geyBsYWJlbDogaXRlbSwgdmFsdWU6IGl0ZW0gfSBhcyBTRlNjaGVtYUVudW07XG4gICAgfSk7XG4gIH1cbiAgaWYgKGZvcm1EYXRhKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGZvcm1EYXRhKSkgZm9ybURhdGEgPSBbZm9ybURhdGFdO1xuICAgIGxpc3QuZm9yRWFjaCgoaXRlbTogU0ZTY2hlbWFFbnVtKSA9PiB7XG4gICAgICBpZiAofmZvcm1EYXRhLmluZGV4T2YoaXRlbS52YWx1ZSkpIGl0ZW0uY2hlY2tlZCA9IHRydWU7XG4gICAgfSk7XG4gIH1cbiAgLy8gZml4IGRpc2FibGVkIHN0YXR1c1xuICBpZiAocmVhZE9ubHkpIHtcbiAgICBsaXN0LmZvckVhY2goKGl0ZW06IFNGU2NoZW1hRW51bSkgPT4gKGl0ZW0uZGlzYWJsZWQgPSB0cnVlKSk7XG4gIH1cbiAgcmV0dXJuIGxpc3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb3B5RW51bShsaXN0OiBhbnlbXSwgZm9ybURhdGE6IGFueSwgcmVhZE9ubHk6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGdldEVudW0oZGVlcENvcHkobGlzdCB8fCBbXSksIGZvcm1EYXRhLCByZWFkT25seSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRhKHNjaGVtYTogU0ZTY2hlbWEsIHVpOiBTRlVJU2NoZW1hSXRlbSwgZm9ybURhdGE6IGFueSwgYXN5bmNBcmdzPzogYW55KTogT2JzZXJ2YWJsZTxTRlNjaGVtYUVudW1bXT4ge1xuICBpZiAodHlwZW9mIHVpLmFzeW5jRGF0YSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB1aS5hc3luY0RhdGEoYXN5bmNBcmdzKS5waXBlKG1hcCgobGlzdDogU0ZTY2hlbWFFbnVtW10pID0+IGdldEVudW0obGlzdCwgZm9ybURhdGEsIHNjaGVtYS5yZWFkT25seSEpKSk7XG4gIH1cbiAgcmV0dXJuIG9mKGdldENvcHlFbnVtKHNjaGVtYS5lbnVtISwgZm9ybURhdGEsIHNjaGVtYS5yZWFkT25seSEpKTtcbn1cblxuLyoqXG4gKiBXaGV0aGVyIHRvIHVzaW5nIGRhdGUtZm5zIHRvIGZvcm1hdCBhIGRhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRGF0ZUZucyhzcnY6IE56STE4blNlcnZpY2UpOiBib29sZWFuIHtcbiAgaWYgKCFzcnYpIHJldHVybiBmYWxzZTtcbiAgY29uc3QgZGF0YSA9IHNydi5nZXREYXRlTG9jYWxlKCk7XG4gIC8vIENvbXBhdGlibGUgZGF0ZS1mbnMgdjEueCAmIHYyLnhcbiAgcmV0dXJuIGRhdGEgIT0gbnVsbCAmJiAoISFkYXRhLmRpc3RhbmNlSW5Xb3JkcyB8fCAhIWRhdGEuZm9ybWF0RGlzdGFuY2UpO1xufVxuIl19