/**
 * @fileoverview added by tsickle
 * Generated from: src/utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __rest } from "tslib";
import { deepCopy, toBoolean } from '@delon/util';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { SF_SEQ } from './const';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3NyYy91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUdsRCxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sU0FBUyxDQUFDOzs7OztBQUlqQyxNQUFNLFVBQVUsT0FBTyxDQUFDLENBQU07SUFDNUIsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDO0FBQ25CLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxNQUFNLENBQUMsS0FBVSxFQUFFLFlBQXFCO0lBQ3RELEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQy9CLE9BQU8sS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7QUFDOUMsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLEVBQUUsQ0FBQyxFQUFjLEVBQUUsR0FBRyxJQUFpQjtJQUNyRCxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUU7UUFDWixzQ0FBc0M7UUFDdEMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO0tBQ3ZCO0FBQ0gsQ0FBQzs7Ozs7OztBQUdELFNBQVMsb0JBQW9CLENBQUMsSUFBWSxFQUFFLFdBQStCOztVQUNuRSxLQUFLLEdBQUcsd0JBQXdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNqRCxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUU7OztjQUVmLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMs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QUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLHFEQUFxRDtBQUNyRyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGVlcENvcHksIHRvQm9vbGVhbiB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTRl9TRVEgfSBmcm9tICcuL2NvbnN0JztcbmltcG9ydCB7IFNGU2NoZW1hLCBTRlNjaGVtYURlZmluaXRpb24sIFNGU2NoZW1hRW51bSB9IGZyb20gJy4vc2NoZW1hJztcbmltcG9ydCB7IFNGVUlTY2hlbWEsIFNGVUlTY2hlbWFJdGVtLCBTRlVJU2NoZW1hSXRlbVJ1biB9IGZyb20gJy4vc2NoZW1hL3VpJztcblxuZXhwb3J0IGZ1bmN0aW9uIGlzQmxhbmsobzogYW55KSB7XG4gIHJldHVybiBvID09IG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0Jvb2wodmFsdWU6IGFueSwgZGVmYXVsdFZhbHVlOiBib29sZWFuKSB7XG4gIHZhbHVlID0gdG9Cb29sZWFuKHZhbHVlLCB0cnVlKTtcbiAgcmV0dXJuIHZhbHVlID09IG51bGwgPyBkZWZhdWx0VmFsdWUgOiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpKHVpOiBTRlVJU2NoZW1hLCAuLi5hcmdzOiBOelNhZmVBbnlbXSkge1xuICBpZiAodWkuZGVidWcpIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgIGNvbnNvbGUud2FybiguLi5hcmdzKTtcbiAgfVxufVxuXG4vKiog5qC55o2uIGAkcmVmYCDmn6Xmib4gYGRlZmluaXRpb25zYCAqL1xuZnVuY3Rpb24gZmluZFNjaGVtYURlZmluaXRpb24oJHJlZjogc3RyaW5nLCBkZWZpbml0aW9uczogU0ZTY2hlbWFEZWZpbml0aW9uKSB7XG4gIGNvbnN0IG1hdGNoID0gL14jXFwvZGVmaW5pdGlvbnNcXC8oLiopJC8uZXhlYygkcmVmKTtcbiAgaWYgKG1hdGNoICYmIG1hdGNoWzFdKSB7XG4gICAgLy8gcGFyc2VyIEpTT04gUG9pbnRlclxuICAgIGNvbnN0IHBhcnRzID0gbWF0Y2hbMV0uc3BsaXQoU0ZfU0VRKTtcbiAgICBsZXQgY3VycmVudDogYW55ID0gZGVmaW5pdGlvbnM7XG4gICAgZm9yIChsZXQgcGFydCBvZiBwYXJ0cykge1xuICAgICAgcGFydCA9IHBhcnQucmVwbGFjZSgvfjEvZywgU0ZfU0VRKS5yZXBsYWNlKC9+MC9nLCAnficpO1xuICAgICAgaWYgKGN1cnJlbnQuaGFzT3duUHJvcGVydHkocGFydCkpIHtcbiAgICAgICAgY3VycmVudCA9IGN1cnJlbnRbcGFydF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENvdWxkIG5vdCBmaW5kIGEgZGVmaW5pdGlvbiBmb3IgJHskcmVmfS5gKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGN1cnJlbnQ7XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKGBDb3VsZCBub3QgZmluZCBhIGRlZmluaXRpb24gZm9yICR7JHJlZn0uYCk7XG59XG5cbi8qKlxuICog5Y+W5ZueU2NoZW1h77yM5bm25aSE55CGIGAkcmVmYCDnmoTlhbPns7tcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJldHJpZXZlU2NoZW1hKHNjaGVtYTogU0ZTY2hlbWEsIGRlZmluaXRpb25zOiBTRlNjaGVtYURlZmluaXRpb24gPSB7fSk6IFNGU2NoZW1hIHtcbiAgaWYgKHNjaGVtYS5oYXNPd25Qcm9wZXJ0eSgnJHJlZicpKSB7XG4gICAgY29uc3QgJHJlZlNjaGVtYSA9IGZpbmRTY2hlbWFEZWZpbml0aW9uKHNjaGVtYS4kcmVmISwgZGVmaW5pdGlvbnMpO1xuICAgIC8vIHJlbW92ZSAkcmVmIHByb3BlcnR5XG4gICAgY29uc3QgeyAkcmVmLCAuLi5sb2NhbFNjaGVtYSB9ID0gc2NoZW1hO1xuICAgIHJldHVybiByZXRyaWV2ZVNjaGVtYSh7IC4uLiRyZWZTY2hlbWEsIC4uLmxvY2FsU2NoZW1hIH0sIGRlZmluaXRpb25zKTtcbiAgfVxuXG4gIHJldHVybiBzY2hlbWE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSWYoc2NoZW1hOiBTRlNjaGVtYSwgdWk6IFNGVUlTY2hlbWFJdGVtUnVuKTogU0ZTY2hlbWEgfCBudWxsIHtcbiAgaWYgKCEoc2NoZW1hLmhhc093blByb3BlcnR5KCdpZicpICYmIHNjaGVtYS5oYXNPd25Qcm9wZXJ0eSgndGhlbicpKSkgcmV0dXJuIG51bGw7XG5cbiAgaWYgKCFzY2hlbWEuaWYhLnByb3BlcnRpZXMpIHRocm93IG5ldyBFcnJvcihgaWY6IGRvZXMgbm90IGNvbnRhaW4gJ3Byb3BlcnRpZXMnYCk7XG5cbiAgY29uc3QgYWxsS2V5cyA9IE9iamVjdC5rZXlzKHNjaGVtYS5wcm9wZXJ0aWVzISk7XG4gIGNvbnN0IGlmS2V5cyA9IE9iamVjdC5rZXlzKHNjaGVtYS5pZiEucHJvcGVydGllcyEpO1xuICBkZXRlY3RLZXkoYWxsS2V5cywgaWZLZXlzKTtcbiAgZGV0ZWN0S2V5KGFsbEtleXMsIHNjaGVtYS50aGVuIS5yZXF1aXJlZCEpO1xuICBzY2hlbWEucmVxdWlyZWQgPSBzY2hlbWEucmVxdWlyZWQhLmNvbmNhdChzY2hlbWEudGhlbiEucmVxdWlyZWQhKTtcbiAgY29uc3QgaGFzRWxzZSA9IHNjaGVtYS5oYXNPd25Qcm9wZXJ0eSgnZWxzZScpO1xuICBpZiAoaGFzRWxzZSkge1xuICAgIGRldGVjdEtleShhbGxLZXlzLCBzY2hlbWEuZWxzZSEucmVxdWlyZWQhKTtcbiAgICBzY2hlbWEucmVxdWlyZWQgPSBzY2hlbWEucmVxdWlyZWQuY29uY2F0KHNjaGVtYS5lbHNlIS5yZXF1aXJlZCEpO1xuICB9XG5cbiAgY29uc3QgdmlzaWJsZUlmOiBhbnkgPSB7fTtcbiAgY29uc3QgdmlzaWJsZUVsc2U6IGFueSA9IHt9O1xuICBpZktleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgIGNvbnN0IGNvbmQgPSBzY2hlbWEuaWYhLnByb3BlcnRpZXMhW2tleV0uZW51bTtcbiAgICB2aXNpYmxlSWZba2V5XSA9IGNvbmQ7XG4gICAgaWYgKGhhc0Vsc2UpIHZpc2libGVFbHNlW2tleV0gPSAodmFsdWU6IGFueSkgPT4gIWNvbmQhLmluY2x1ZGVzKHZhbHVlKTtcbiAgfSk7XG5cbiAgc2NoZW1hLnRoZW4hLnJlcXVpcmVkIS5mb3JFYWNoKGtleSA9PiAodWlbYCQke2tleX1gXS52aXNpYmxlSWYgPSB2aXNpYmxlSWYpKTtcbiAgaWYgKGhhc0Vsc2UpIHNjaGVtYS5lbHNlIS5yZXF1aXJlZCEuZm9yRWFjaChrZXkgPT4gKHVpW2AkJHtrZXl9YF0udmlzaWJsZUlmID0gdmlzaWJsZUVsc2UpKTtcblxuICByZXR1cm4gc2NoZW1hO1xufVxuXG5mdW5jdGlvbiBkZXRlY3RLZXkoa2V5czogc3RyaW5nW10sIGRldGVjdEtleXM6IHN0cmluZ1tdKSB7XG4gIGRldGVjdEtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgIGlmICgha2V5cy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYGlmOiBwcm9wZXJ0aWVzIGRvZXMgbm90IGNvbnRhaW4gJyR7a2V5fSdgKTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb3JkZXJQcm9wZXJ0aWVzKHByb3BlcnRpZXM6IHN0cmluZ1tdLCBvcmRlcjogc3RyaW5nW10pIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KG9yZGVyKSkgcmV0dXJuIHByb3BlcnRpZXM7XG4gIGNvbnN0IGFycmF5VG9IYXNoID0gKGFycjogTnpTYWZlQW55KSA9PlxuICAgIGFyci5yZWR1Y2UoKHByZXY6IE56U2FmZUFueSwgY3VycjogTnpTYWZlQW55KSA9PiB7XG4gICAgICBwcmV2W2N1cnJdID0gdHJ1ZTtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH0sIHt9KTtcbiAgY29uc3QgZXJyb3JQcm9wTGlzdCA9IChhcnI6IE56U2FmZUFueSkgPT4gYHByb3BlcnR5IFske2Fyci5qb2luKGAnLCAnYCl9XWA7XG5cbiAgY29uc3QgcHJvcGVydHlIYXNoID0gYXJyYXlUb0hhc2gocHJvcGVydGllcyk7XG4gIGNvbnN0IG9yZGVySGFzaCA9IGFycmF5VG9IYXNoKG9yZGVyKTtcbiAgY29uc3QgZXh0cmFuZW91cyA9IG9yZGVyLmZpbHRlcihwcm9wID0+IHByb3AgIT09ICcqJyAmJiAhcHJvcGVydHlIYXNoW3Byb3BdKTtcbiAgaWYgKGV4dHJhbmVvdXMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGB1aSBzY2hlbWEgb3JkZXIgbGlzdCBjb250YWlucyBleHRyYW5lb3VzICR7ZXJyb3JQcm9wTGlzdChleHRyYW5lb3VzKX1gKTtcbiAgfVxuICBjb25zdCByZXN0ID0gcHJvcGVydGllcy5maWx0ZXIocHJvcCA9PiAhb3JkZXJIYXNoW3Byb3BdKTtcbiAgY29uc3QgcmVzdEluZGV4ID0gb3JkZXIuaW5kZXhPZignKicpO1xuICBpZiAocmVzdEluZGV4ID09PSAtMSkge1xuICAgIGlmIChyZXN0Lmxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGB1aSBzY2hlbWEgb3JkZXIgbGlzdCBkb2VzIG5vdCBjb250YWluICR7ZXJyb3JQcm9wTGlzdChyZXN0KX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIG9yZGVyO1xuICB9XG4gIGlmIChyZXN0SW5kZXggIT09IG9yZGVyLmxhc3RJbmRleE9mKCcqJykpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3VpIHNjaGVtYSBvcmRlciBsaXN0IGNvbnRhaW5zIG1vcmUgdGhhbiBvbmUgd2lsZGNhcmQgaXRlbScpO1xuICB9XG4gIGNvbnN0IGNvbXBsZXRlID0gWy4uLm9yZGVyXTtcbiAgY29tcGxldGUuc3BsaWNlKHJlc3RJbmRleCwgMSwgLi4ucmVzdCk7XG4gIHJldHVybiBjb21wbGV0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEVudW0obGlzdDogYW55W10sIGZvcm1EYXRhOiBhbnksIHJlYWRPbmx5OiBib29sZWFuKTogU0ZTY2hlbWFFbnVtW10ge1xuICBpZiAoaXNCbGFuayhsaXN0KSB8fCAhQXJyYXkuaXNBcnJheShsaXN0KSB8fCBsaXN0Lmxlbmd0aCA9PT0gMCkgcmV0dXJuIFtdO1xuICBpZiAodHlwZW9mIGxpc3RbMF0gIT09ICdvYmplY3QnKSB7XG4gICAgbGlzdCA9IGxpc3QubWFwKChpdGVtOiBhbnkpID0+IHtcbiAgICAgIHJldHVybiB7IGxhYmVsOiBpdGVtLCB2YWx1ZTogaXRlbSB9IGFzIFNGU2NoZW1hRW51bTtcbiAgICB9KTtcbiAgfVxuICBpZiAoZm9ybURhdGEpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZm9ybURhdGEpKSBmb3JtRGF0YSA9IFtmb3JtRGF0YV07XG4gICAgbGlzdC5mb3JFYWNoKChpdGVtOiBTRlNjaGVtYUVudW0pID0+IHtcbiAgICAgIGlmICh+Zm9ybURhdGEuaW5kZXhPZihpdGVtLnZhbHVlKSkgaXRlbS5jaGVja2VkID0gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuICAvLyBmaXggZGlzYWJsZWQgc3RhdHVzXG4gIGlmIChyZWFkT25seSkge1xuICAgIGxpc3QuZm9yRWFjaCgoaXRlbTogU0ZTY2hlbWFFbnVtKSA9PiAoaXRlbS5kaXNhYmxlZCA9IHRydWUpKTtcbiAgfVxuICByZXR1cm4gbGlzdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvcHlFbnVtKGxpc3Q6IGFueVtdLCBmb3JtRGF0YTogYW55LCByZWFkT25seTogYm9vbGVhbikge1xuICByZXR1cm4gZ2V0RW51bShkZWVwQ29weShsaXN0IHx8IFtdKSwgZm9ybURhdGEsIHJlYWRPbmx5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGEoc2NoZW1hOiBTRlNjaGVtYSwgdWk6IFNGVUlTY2hlbWFJdGVtLCBmb3JtRGF0YTogYW55LCBhc3luY0FyZ3M/OiBhbnkpOiBPYnNlcnZhYmxlPFNGU2NoZW1hRW51bVtdPiB7XG4gIGlmICh0eXBlb2YgdWkuYXN5bmNEYXRhID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHVpLmFzeW5jRGF0YShhc3luY0FyZ3MpLnBpcGUobWFwKChsaXN0OiBTRlNjaGVtYUVudW1bXSkgPT4gZ2V0RW51bShsaXN0LCBmb3JtRGF0YSwgc2NoZW1hLnJlYWRPbmx5ISkpKTtcbiAgfVxuICByZXR1cm4gb2YoZ2V0Q29weUVudW0oc2NoZW1hLmVudW0hLCBmb3JtRGF0YSwgc2NoZW1hLnJlYWRPbmx5ISkpO1xufVxuXG4vKipcbiAqIFdoZXRoZXIgdG8gdXNpbmcgZGF0ZS1mbnMgdG8gZm9ybWF0IGEgZGF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNEYXRlRm5zKHNydjogTnpJMThuU2VydmljZSk6IGJvb2xlYW4ge1xuICBpZiAoIXNydikgcmV0dXJuIGZhbHNlO1xuICBjb25zdCBkYXRhID0gc3J2LmdldERhdGVMb2NhbGUoKTtcbiAgLy8gQ29tcGF0aWJsZSBkYXRlLWZucyB2MS54ICYgdjIueFxuICByZXR1cm4gZGF0YSAhPSBudWxsICYmICEhZGF0YS5mb3JtYXREaXN0YW5jZTsgLy8gKCEhZGF0YS5kaXN0YW5jZUluV29yZHMgfHwgISFkYXRhLmZvcm1hdERpc3RhbmNlKTtcbn1cbiJdfQ==