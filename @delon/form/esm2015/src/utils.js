/**
 * @fileoverview added by tsickle
 * Generated from: src/utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __rest } from "tslib";
import { deepCopy, toBoolean } from '@delon/util';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { SF_SEQ } from './const';
/** @type {?} */
export const FORMATMAPS = {
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
export function di(ui, ...args) {
    if (ui.debug) {
        // tslint:disable-next-line:no-console
        console.warn(...args);
    }
}
/**
 * 根据 `$ref` 查找 `definitions`
 * @param {?} $ref
 * @param {?} definitions
 * @return {?}
 */
function findSchemaDefinition($ref, definitions) {
    /** @type {?} */
    const match = /^#\/definitions\/(.*)$/.exec($ref);
    if (match && match[1]) {
        // parser JSON Pointer
        /** @type {?} */
        const parts = match[1].split(SF_SEQ);
        /** @type {?} */
        let current = definitions;
        for (let part of parts) {
            part = part.replace(/~1/g, SF_SEQ).replace(/~0/g, '~');
            if (current.hasOwnProperty(part)) {
                current = current[part];
            }
            else {
                throw new Error(`Could not find a definition for ${$ref}.`);
            }
        }
        return current;
    }
    throw new Error(`Could not find a definition for ${$ref}.`);
}
/**
 * 取回Schema，并处理 `$ref` 的关系
 * @param {?} schema
 * @param {?=} definitions
 * @return {?}
 */
export function retrieveSchema(schema, definitions = {}) {
    if (schema.hasOwnProperty('$ref')) {
        /** @type {?} */
        const $refSchema = findSchemaDefinition((/** @type {?} */ (schema.$ref)), definitions);
        // remove $ref property
        const { $ref } = schema, localSchema = __rest(schema, ["$ref"]);
        return retrieveSchema(Object.assign(Object.assign({}, $refSchema), localSchema), definitions);
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
        throw new Error(`if: does not contain 'properties'`);
    /** @type {?} */
    const allKeys = Object.keys((/** @type {?} */ (schema.properties)));
    /** @type {?} */
    const ifKeys = Object.keys((/** @type {?} */ ((/** @type {?} */ (schema.if)).properties)));
    detectKey(allKeys, ifKeys);
    detectKey(allKeys, (/** @type {?} */ ((/** @type {?} */ (schema.then)).required)));
    schema.required = (/** @type {?} */ (schema.required)).concat((/** @type {?} */ ((/** @type {?} */ (schema.then)).required)));
    /** @type {?} */
    const hasElse = schema.hasOwnProperty('else');
    if (hasElse) {
        detectKey(allKeys, (/** @type {?} */ ((/** @type {?} */ (schema.else)).required)));
        schema.required = schema.required.concat((/** @type {?} */ ((/** @type {?} */ (schema.else)).required)));
    }
    /** @type {?} */
    const visibleIf = {};
    /** @type {?} */
    const visibleElse = {};
    ifKeys.forEach((/**
     * @param {?} key
     * @return {?}
     */
    key => {
        /** @type {?} */
        const cond = (/** @type {?} */ ((/** @type {?} */ (schema.if)).properties))[key].enum;
        visibleIf[key] = cond;
        if (hasElse)
            visibleElse[key] = (/**
             * @param {?} value
             * @return {?}
             */
            (value) => !(/** @type {?} */ (cond)).includes(value));
    }));
    (/** @type {?} */ ((/** @type {?} */ (schema.then)).required)).forEach((/**
     * @param {?} key
     * @return {?}
     */
    key => (ui[`$${key}`].visibleIf = visibleIf)));
    if (hasElse)
        (/** @type {?} */ ((/** @type {?} */ (schema.else)).required)).forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => (ui[`$${key}`].visibleIf = visibleElse)));
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
    key => {
        if (!keys.includes(key)) {
            throw new Error(`if: properties does not contain '${key}'`);
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
    const arrayToHash = (/**
     * @param {?} arr
     * @return {?}
     */
    (arr) => arr.reduce((/**
     * @param {?} prev
     * @param {?} curr
     * @return {?}
     */
    (prev, curr) => {
        prev[curr] = true;
        return prev;
    }), {}));
    /** @type {?} */
    const errorPropList = (/**
     * @param {?} arr
     * @return {?}
     */
    (arr) => `property [${arr.join(`', '`)}]`);
    /** @type {?} */
    const propertyHash = arrayToHash(properties);
    /** @type {?} */
    const orderHash = arrayToHash(order);
    /** @type {?} */
    const extraneous = order.filter((/**
     * @param {?} prop
     * @return {?}
     */
    prop => prop !== '*' && !propertyHash[prop]));
    if (extraneous.length) {
        throw new Error(`ui schema order list contains extraneous ${errorPropList(extraneous)}`);
    }
    /** @type {?} */
    const rest = properties.filter((/**
     * @param {?} prop
     * @return {?}
     */
    prop => !orderHash[prop]));
    /** @type {?} */
    const restIndex = order.indexOf('*');
    if (restIndex === -1) {
        if (rest.length) {
            throw new Error(`ui schema order list does not contain ${errorPropList(rest)}`);
        }
        return order;
    }
    if (restIndex !== order.lastIndexOf('*')) {
        throw new Error('ui schema order list contains more than one wildcard item');
    }
    /** @type {?} */
    const complete = [...order];
    complete.splice(restIndex, 1, ...rest);
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
        (item) => {
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
        (item) => {
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
        (item) => (item.disabled = true)));
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
        (list) => getEnum(list, formData, (/** @type {?} */ (schema.readOnly))))));
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
    const data = srv.getDateLocale();
    // Compatible date-fns v1.x & v2.x
    return data != null && !!data.formatDistance; // (!!data.distanceInWords || !!data.formatDistance);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vZm9ybS8iLCJzb3VyY2VzIjpbInNyYy91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUdsRCxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sU0FBUyxDQUFDOztBQUlqQyxNQUFNLE9BQU8sVUFBVSxHQUFHO0lBQ3hCLFdBQVcsRUFBRTtRQUNYLE1BQU0sRUFBRSxNQUFNO1FBQ2QsUUFBUSxFQUFFLElBQUk7UUFDZCxNQUFNLEVBQUUsc0JBQXNCO0tBQy9CO0lBQ0QsSUFBSSxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFO0lBQzlDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRTtJQUNyRCxJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFO0lBQ3hCLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUU7SUFDL0IsSUFBSSxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUU7SUFDekQsS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUU7SUFDM0QsR0FBRyxFQUFFLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRTtJQUN6QixLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7SUFDaEQsS0FBSyxFQUFFLEVBQUUsTUFBTSxF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LE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUMzRCxDQUFDOzs7Ozs7OztBQUVELE1BQU0sVUFBVSxPQUFPLENBQUMsTUFBZ0IsRUFBRSxFQUFrQixFQUFFLFFBQWEsRUFBRSxTQUFlO0lBQzFGLElBQUksT0FBTyxFQUFFLENBQUMsU0FBUyxLQUFLLFVBQVUsRUFBRTtRQUN0QyxPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUc7Ozs7UUFBQyxDQUFDLElBQW9CLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLG1CQUFBLE1BQU0sQ0FBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztLQUMvRztJQUNELE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQyxtQkFBQSxNQUFNLENBQUMsSUFBSSxFQUFDLEVBQUUsUUFBUSxFQUFFLG1CQUFBLE1BQU0sQ0FBQyxRQUFRLEVBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbkUsQ0FBQzs7Ozs7O0FBS0QsTUFBTSxVQUFVLFNBQVMsQ0FBQyxHQUFrQjtJQUMxQyxJQUFJLENBQUMsR0FBRztRQUFFLE9BQU8sS0FBSyxDQUFDOztVQUNqQixJQUFJLEdBQUcsR0FBRyxDQUFDLGFBQWEsRUFBRTtJQUNoQyxrQ0FBa0M7SUFDbEMsT0FBTyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMscURBQXFEO0FBQ3JHLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZWVwQ29weSwgdG9Cb29sZWFuIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzL2FueSc7XG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTRl9TRVEgfSBmcm9tICcuL2NvbnN0JztcbmltcG9ydCB7IFNGU2NoZW1hLCBTRlNjaGVtYURlZmluaXRpb24sIFNGU2NoZW1hRW51bSB9IGZyb20gJy4vc2NoZW1hJztcbmltcG9ydCB7IFNGVUlTY2hlbWEsIFNGVUlTY2hlbWFJdGVtLCBTRlVJU2NoZW1hSXRlbVJ1biB9IGZyb20gJy4vc2NoZW1hL3VpJztcblxuZXhwb3J0IGNvbnN0IEZPUk1BVE1BUFMgPSB7XG4gICdkYXRlLXRpbWUnOiB7XG4gICAgd2lkZ2V0OiAnZGF0ZScsXG4gICAgc2hvd1RpbWU6IHRydWUsXG4gICAgZm9ybWF0OiAnWVlZWS1NTS1ERFRISDptbTpzc1onLFxuICB9LFxuICBkYXRlOiB7IHdpZGdldDogJ2RhdGUnLCBmb3JtYXQ6ICdZWVlZLU1NLUREJyB9LFxuICAnZnVsbC1kYXRlJzogeyB3aWRnZXQ6ICdkYXRlJywgZm9ybWF0OiAnWVlZWS1NTS1ERCcgfSxcbiAgdGltZTogeyB3aWRnZXQ6ICd0aW1lJyB9LFxuICAnZnVsbC10aW1lJzogeyB3aWRnZXQ6ICd0aW1lJyB9LFxuICB3ZWVrOiB7IHdpZGdldDogJ2RhdGUnLCBtb2RlOiAnd2VlaycsIGZvcm1hdDogJ1lZWVktV1cnIH0sXG4gIG1vbnRoOiB7IHdpZGdldDogJ2RhdGUnLCBtb2RlOiAnbW9udGgnLCBmb3JtYXQ6ICdZWVlZLU1NJyB9LFxuICB1cmk6IHsgd2lkZ2V0OiAndXBsb2FkJyB9LFxuICBlbWFpbDogeyB3aWRnZXQ6ICdhdXRvY29tcGxldGUnLCB0eXBlOiAnZW1haWwnIH0sXG4gIGNvbG9yOiB7IHdpZGdldDogJ3N0cmluZycsIHR5cGU6ICdjb2xvcicgfSxcbiAgJyc6IHsgd2lkZ2V0OiAnc3RyaW5nJyB9LFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzQmxhbmsobzogYW55KSB7XG4gIHJldHVybiBvID09IG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0Jvb2wodmFsdWU6IGFueSwgZGVmYXVsdFZhbHVlOiBib29sZWFuKSB7XG4gIHZhbHVlID0gdG9Cb29sZWFuKHZhbHVlLCB0cnVlKTtcbiAgcmV0dXJuIHZhbHVlID09IG51bGwgPyBkZWZhdWx0VmFsdWUgOiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpKHVpOiBTRlVJU2NoZW1hLCAuLi5hcmdzOiBOelNhZmVBbnlbXSkge1xuICBpZiAodWkuZGVidWcpIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgIGNvbnNvbGUud2FybiguLi5hcmdzKTtcbiAgfVxufVxuXG4vKiog5qC55o2uIGAkcmVmYCDmn6Xmib4gYGRlZmluaXRpb25zYCAqL1xuZnVuY3Rpb24gZmluZFNjaGVtYURlZmluaXRpb24oJHJlZjogc3RyaW5nLCBkZWZpbml0aW9uczogU0ZTY2hlbWFEZWZpbml0aW9uKSB7XG4gIGNvbnN0IG1hdGNoID0gL14jXFwvZGVmaW5pdGlvbnNcXC8oLiopJC8uZXhlYygkcmVmKTtcbiAgaWYgKG1hdGNoICYmIG1hdGNoWzFdKSB7XG4gICAgLy8gcGFyc2VyIEpTT04gUG9pbnRlclxuICAgIGNvbnN0IHBhcnRzID0gbWF0Y2hbMV0uc3BsaXQoU0ZfU0VRKTtcbiAgICBsZXQgY3VycmVudDogYW55ID0gZGVmaW5pdGlvbnM7XG4gICAgZm9yIChsZXQgcGFydCBvZiBwYXJ0cykge1xuICAgICAgcGFydCA9IHBhcnQucmVwbGFjZSgvfjEvZywgU0ZfU0VRKS5yZXBsYWNlKC9+MC9nLCAnficpO1xuICAgICAgaWYgKGN1cnJlbnQuaGFzT3duUHJvcGVydHkocGFydCkpIHtcbiAgICAgICAgY3VycmVudCA9IGN1cnJlbnRbcGFydF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENvdWxkIG5vdCBmaW5kIGEgZGVmaW5pdGlvbiBmb3IgJHskcmVmfS5gKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGN1cnJlbnQ7XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKGBDb3VsZCBub3QgZmluZCBhIGRlZmluaXRpb24gZm9yICR7JHJlZn0uYCk7XG59XG5cbi8qKlxuICog5Y+W5ZueU2NoZW1h77yM5bm25aSE55CGIGAkcmVmYCDnmoTlhbPns7tcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJldHJpZXZlU2NoZW1hKHNjaGVtYTogU0ZTY2hlbWEsIGRlZmluaXRpb25zOiBTRlNjaGVtYURlZmluaXRpb24gPSB7fSk6IFNGU2NoZW1hIHtcbiAgaWYgKHNjaGVtYS5oYXNPd25Qcm9wZXJ0eSgnJHJlZicpKSB7XG4gICAgY29uc3QgJHJlZlNjaGVtYSA9IGZpbmRTY2hlbWFEZWZpbml0aW9uKHNjaGVtYS4kcmVmISwgZGVmaW5pdGlvbnMpO1xuICAgIC8vIHJlbW92ZSAkcmVmIHByb3BlcnR5XG4gICAgY29uc3QgeyAkcmVmLCAuLi5sb2NhbFNjaGVtYSB9ID0gc2NoZW1hO1xuICAgIHJldHVybiByZXRyaWV2ZVNjaGVtYSh7IC4uLiRyZWZTY2hlbWEsIC4uLmxvY2FsU2NoZW1hIH0sIGRlZmluaXRpb25zKTtcbiAgfVxuXG4gIHJldHVybiBzY2hlbWE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSWYoc2NoZW1hOiBTRlNjaGVtYSwgdWk6IFNGVUlTY2hlbWFJdGVtUnVuKTogU0ZTY2hlbWEgfCBudWxsIHtcbiAgaWYgKCEoc2NoZW1hLmhhc093blByb3BlcnR5KCdpZicpICYmIHNjaGVtYS5oYXNPd25Qcm9wZXJ0eSgndGhlbicpKSkgcmV0dXJuIG51bGw7XG5cbiAgaWYgKCFzY2hlbWEuaWYhLnByb3BlcnRpZXMpIHRocm93IG5ldyBFcnJvcihgaWY6IGRvZXMgbm90IGNvbnRhaW4gJ3Byb3BlcnRpZXMnYCk7XG5cbiAgY29uc3QgYWxsS2V5cyA9IE9iamVjdC5rZXlzKHNjaGVtYS5wcm9wZXJ0aWVzISk7XG4gIGNvbnN0IGlmS2V5cyA9IE9iamVjdC5rZXlzKHNjaGVtYS5pZiEucHJvcGVydGllcyEpO1xuICBkZXRlY3RLZXkoYWxsS2V5cywgaWZLZXlzKTtcbiAgZGV0ZWN0S2V5KGFsbEtleXMsIHNjaGVtYS50aGVuIS5yZXF1aXJlZCEpO1xuICBzY2hlbWEucmVxdWlyZWQgPSBzY2hlbWEucmVxdWlyZWQhLmNvbmNhdChzY2hlbWEudGhlbiEucmVxdWlyZWQhKTtcbiAgY29uc3QgaGFzRWxzZSA9IHNjaGVtYS5oYXNPd25Qcm9wZXJ0eSgnZWxzZScpO1xuICBpZiAoaGFzRWxzZSkge1xuICAgIGRldGVjdEtleShhbGxLZXlzLCBzY2hlbWEuZWxzZSEucmVxdWlyZWQhKTtcbiAgICBzY2hlbWEucmVxdWlyZWQgPSBzY2hlbWEucmVxdWlyZWQuY29uY2F0KHNjaGVtYS5lbHNlIS5yZXF1aXJlZCEpO1xuICB9XG5cbiAgY29uc3QgdmlzaWJsZUlmOiBhbnkgPSB7fTtcbiAgY29uc3QgdmlzaWJsZUVsc2U6IGFueSA9IHt9O1xuICBpZktleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgIGNvbnN0IGNvbmQgPSBzY2hlbWEuaWYhLnByb3BlcnRpZXMhW2tleV0uZW51bTtcbiAgICB2aXNpYmxlSWZba2V5XSA9IGNvbmQ7XG4gICAgaWYgKGhhc0Vsc2UpIHZpc2libGVFbHNlW2tleV0gPSAodmFsdWU6IGFueSkgPT4gIWNvbmQhLmluY2x1ZGVzKHZhbHVlKTtcbiAgfSk7XG5cbiAgc2NoZW1hLnRoZW4hLnJlcXVpcmVkIS5mb3JFYWNoKGtleSA9PiAodWlbYCQke2tleX1gXS52aXNpYmxlSWYgPSB2aXNpYmxlSWYpKTtcbiAgaWYgKGhhc0Vsc2UpIHNjaGVtYS5lbHNlIS5yZXF1aXJlZCEuZm9yRWFjaChrZXkgPT4gKHVpW2AkJHtrZXl9YF0udmlzaWJsZUlmID0gdmlzaWJsZUVsc2UpKTtcblxuICByZXR1cm4gc2NoZW1hO1xufVxuXG5mdW5jdGlvbiBkZXRlY3RLZXkoa2V5czogc3RyaW5nW10sIGRldGVjdEtleXM6IHN0cmluZ1tdKSB7XG4gIGRldGVjdEtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgIGlmICgha2V5cy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYGlmOiBwcm9wZXJ0aWVzIGRvZXMgbm90IGNvbnRhaW4gJyR7a2V5fSdgKTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb3JkZXJQcm9wZXJ0aWVzKHByb3BlcnRpZXM6IHN0cmluZ1tdLCBvcmRlcjogc3RyaW5nW10pIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KG9yZGVyKSkgcmV0dXJuIHByb3BlcnRpZXM7XG4gIGNvbnN0IGFycmF5VG9IYXNoID0gKGFycjogTnpTYWZlQW55KSA9PlxuICAgIGFyci5yZWR1Y2UoKHByZXY6IE56U2FmZUFueSwgY3VycjogTnpTYWZlQW55KSA9PiB7XG4gICAgICBwcmV2W2N1cnJdID0gdHJ1ZTtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH0sIHt9KTtcbiAgY29uc3QgZXJyb3JQcm9wTGlzdCA9IChhcnI6IE56U2FmZUFueSkgPT4gYHByb3BlcnR5IFske2Fyci5qb2luKGAnLCAnYCl9XWA7XG5cbiAgY29uc3QgcHJvcGVydHlIYXNoID0gYXJyYXlUb0hhc2gocHJvcGVydGllcyk7XG4gIGNvbnN0IG9yZGVySGFzaCA9IGFycmF5VG9IYXNoKG9yZGVyKTtcbiAgY29uc3QgZXh0cmFuZW91cyA9IG9yZGVyLmZpbHRlcihwcm9wID0+IHByb3AgIT09ICcqJyAmJiAhcHJvcGVydHlIYXNoW3Byb3BdKTtcbiAgaWYgKGV4dHJhbmVvdXMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGB1aSBzY2hlbWEgb3JkZXIgbGlzdCBjb250YWlucyBleHRyYW5lb3VzICR7ZXJyb3JQcm9wTGlzdChleHRyYW5lb3VzKX1gKTtcbiAgfVxuICBjb25zdCByZXN0ID0gcHJvcGVydGllcy5maWx0ZXIocHJvcCA9PiAhb3JkZXJIYXNoW3Byb3BdKTtcbiAgY29uc3QgcmVzdEluZGV4ID0gb3JkZXIuaW5kZXhPZignKicpO1xuICBpZiAocmVzdEluZGV4ID09PSAtMSkge1xuICAgIGlmIChyZXN0Lmxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGB1aSBzY2hlbWEgb3JkZXIgbGlzdCBkb2VzIG5vdCBjb250YWluICR7ZXJyb3JQcm9wTGlzdChyZXN0KX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIG9yZGVyO1xuICB9XG4gIGlmIChyZXN0SW5kZXggIT09IG9yZGVyLmxhc3RJbmRleE9mKCcqJykpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3VpIHNjaGVtYSBvcmRlciBsaXN0IGNvbnRhaW5zIG1vcmUgdGhhbiBvbmUgd2lsZGNhcmQgaXRlbScpO1xuICB9XG4gIGNvbnN0IGNvbXBsZXRlID0gWy4uLm9yZGVyXTtcbiAgY29tcGxldGUuc3BsaWNlKHJlc3RJbmRleCwgMSwgLi4ucmVzdCk7XG4gIHJldHVybiBjb21wbGV0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEVudW0obGlzdDogYW55W10sIGZvcm1EYXRhOiBhbnksIHJlYWRPbmx5OiBib29sZWFuKTogU0ZTY2hlbWFFbnVtW10ge1xuICBpZiAoaXNCbGFuayhsaXN0KSB8fCAhQXJyYXkuaXNBcnJheShsaXN0KSB8fCBsaXN0Lmxlbmd0aCA9PT0gMCkgcmV0dXJuIFtdO1xuICBpZiAodHlwZW9mIGxpc3RbMF0gIT09ICdvYmplY3QnKSB7XG4gICAgbGlzdCA9IGxpc3QubWFwKChpdGVtOiBhbnkpID0+IHtcbiAgICAgIHJldHVybiB7IGxhYmVsOiBpdGVtLCB2YWx1ZTogaXRlbSB9IGFzIFNGU2NoZW1hRW51bTtcbiAgICB9KTtcbiAgfVxuICBpZiAoZm9ybURhdGEpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZm9ybURhdGEpKSBmb3JtRGF0YSA9IFtmb3JtRGF0YV07XG4gICAgbGlzdC5mb3JFYWNoKChpdGVtOiBTRlNjaGVtYUVudW0pID0+IHtcbiAgICAgIGlmICh+Zm9ybURhdGEuaW5kZXhPZihpdGVtLnZhbHVlKSkgaXRlbS5jaGVja2VkID0gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuICAvLyBmaXggZGlzYWJsZWQgc3RhdHVzXG4gIGlmIChyZWFkT25seSkge1xuICAgIGxpc3QuZm9yRWFjaCgoaXRlbTogU0ZTY2hlbWFFbnVtKSA9PiAoaXRlbS5kaXNhYmxlZCA9IHRydWUpKTtcbiAgfVxuICByZXR1cm4gbGlzdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvcHlFbnVtKGxpc3Q6IGFueVtdLCBmb3JtRGF0YTogYW55LCByZWFkT25seTogYm9vbGVhbikge1xuICByZXR1cm4gZ2V0RW51bShkZWVwQ29weShsaXN0IHx8IFtdKSwgZm9ybURhdGEsIHJlYWRPbmx5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGEoc2NoZW1hOiBTRlNjaGVtYSwgdWk6IFNGVUlTY2hlbWFJdGVtLCBmb3JtRGF0YTogYW55LCBhc3luY0FyZ3M/OiBhbnkpOiBPYnNlcnZhYmxlPFNGU2NoZW1hRW51bVtdPiB7XG4gIGlmICh0eXBlb2YgdWkuYXN5bmNEYXRhID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHVpLmFzeW5jRGF0YShhc3luY0FyZ3MpLnBpcGUobWFwKChsaXN0OiBTRlNjaGVtYUVudW1bXSkgPT4gZ2V0RW51bShsaXN0LCBmb3JtRGF0YSwgc2NoZW1hLnJlYWRPbmx5ISkpKTtcbiAgfVxuICByZXR1cm4gb2YoZ2V0Q29weUVudW0oc2NoZW1hLmVudW0hLCBmb3JtRGF0YSwgc2NoZW1hLnJlYWRPbmx5ISkpO1xufVxuXG4vKipcbiAqIFdoZXRoZXIgdG8gdXNpbmcgZGF0ZS1mbnMgdG8gZm9ybWF0IGEgZGF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNEYXRlRm5zKHNydjogTnpJMThuU2VydmljZSk6IGJvb2xlYW4ge1xuICBpZiAoIXNydikgcmV0dXJuIGZhbHNlO1xuICBjb25zdCBkYXRhID0gc3J2LmdldERhdGVMb2NhbGUoKTtcbiAgLy8gQ29tcGF0aWJsZSBkYXRlLWZucyB2MS54ICYgdjIueFxuICByZXR1cm4gZGF0YSAhPSBudWxsICYmICEhZGF0YS5mb3JtYXREaXN0YW5jZTsgLy8gKCEhZGF0YS5kaXN0YW5jZUluV29yZHMgfHwgISFkYXRhLmZvcm1hdERpc3RhbmNlKTtcbn1cbiJdfQ==