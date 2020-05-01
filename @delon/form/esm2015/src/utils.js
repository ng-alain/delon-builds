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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vZm9ybS8iLCJzb3VyY2VzIjpbInNyYy91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUdsRCxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sU0FBUyxDQUFDOzs7OztBQUlqQyxNQUFNLFVBQVUsT0FBTyxDQUFDLENBQU07SUFDNUIsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDO0FBQ25CLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxNQUFNLENBQUMsS0FBVSxFQUFFLFlBQXFCO0lBQ3RELEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQy9CLE9BQU8sS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7QUFDOUMsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLEVBQUUsQ0FBQyxFQUFjLEVBQUUsR0FBRyxJQUFpQjtJQUNyRCxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUU7UUFDWixzQ0FBc0M7UUFDdEMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO0tBQ3ZCO0FBQ0gsQ0FBQzs7Ozs7OztBQUdELFNBQVMsb0JBQW9CLENBQUMsSUFBWSxFQUFFLFdBQStCOztVQUNuRSxLQUFLLEdBQUcsd0JBQXdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNqRCxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUU7OztjQUVmLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQzs7WUFDaEMsT0FBTyxHQUFRLFdBQVc7UUFDOUIsS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLEVBQUU7WUFDdEIsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDdkQsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNoQyxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3pCO2lCQUFNO2dCQUNMLE1BQU0sSUFBSSxLQUFLLENBQUMsbUNBQW1DLElBQUksR0FBRyxDQUFDLENBQUM7YUFDN0Q7U0FDRjtRQUNELE9BQU8sT0FBTyxDQUFDO0tBQ2hCO0lBQ0QsTUFBTSxJQUFJLEtBQUssQ0FBQyxtQ0FBbUMsSUFBSSxHQUFHLENBQUMsQ0FBQztBQUM5RCxDQUFDOzs7Ozs7O0FBS0QsTUFBTSxVQUFVLGNBQWMsQ0FBQyxNQUFnQixFQUFFLGNBQWtDLEVBQUU7SUFDbkYsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFFOztjQUMzQixVQUFVLEdBQUcsb0JBQW9CLENBQUMsbUJBQUEsTUFBTSxDQUFDLElBQUksRUFBQyxFQUFFLFdBQVcsQ0FBQzs7Y0FFNUQsRUFBRSxJQUFJLEtBQXFCLE1BQU0sRUFBekIsc0NBQWM7UUFDNUIsT0FBTyxjQUFjLGlDQUFNLFVBQVUsR0FBSyxXQUFXLEdBQUksV0FBVyxDQUFDLENBQUM7S0FDdkU7SUFFRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsU0FBUyxDQUFDLE1BQWdCLEVBQUUsRUFBcUI7SUFDL0QsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFFakYsSUFBSSxDQUFDLG1CQUFBLE1BQU0sQ0FBQyxFQUFFLEVBQUMsQ0FBQyxVQUFVO1FBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDOztVQUUzRSxPQUFPLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBQSxNQUFNLENBQUMsVUFBVSxFQUFDLENBQUM7O1VBQ3pDLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFBLG1CQUFBLE1BQU0sQ0FBQyxFQUFFLEVBQUMsQ0FBQyxVQUFVLEVBQUMsQ0FBQztJQUNsRCxTQUFTLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzNCLFNBQVMsQ0FBQyxPQUFPLEVBQUUsbUJBQUEsbUJBQUEsTUFBTSxDQUFDLElBQUksRUFBQyxDQUFDLFFBQVEsRUFBQyxDQUFDLENBQUM7SUFDM0MsTUFBTSxDQUFDLFFBQVEsR0FBRyxtQkFBQSxNQUFNLENBQUMsUUFBUSxFQUFDLENBQUMsTUFBTSxDQUFDLG1CQUFBLG1CQUFBLE1BQU0sQ0FBQyxJQUFJLEVBQUMsQ0FBQyxRQUFRLEVBQUMsQ0FBQyxDQUFDOztVQUM1RCxPQUFPLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUM7SUFDN0MsSUFBSSxPQUFPLEVBQUU7UUFDWCxTQUFTLENBQUMsT0FBTyxFQUFFLG1CQUFBLG1CQUFBLE1BQU0sQ0FBQyxJQUFJLEVBQUMsQ0FBQyxRQUFRLEVBQUMsQ0FBQyxDQUFDO1FBQzNDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsbUJBQUEsbUJBQUEsTUFBTSxDQUFDLElBQUksRUFBQyxDQUFDLFFBQVEsRUFBQyxDQUFDLENBQUM7S0FDbEU7O1VBRUssU0FBUyxHQUFRLEVBQUU7O1VBQ25CLFdBQVcsR0FBUSxFQUFFO0lBQzNCLE1BQU0sQ0FBQyxPQUFPOzs7O0lBQUMsR0FBRyxDQUFDLEVBQUU7O2NBQ2IsSUFBSSxHQUFHLG1CQUFBLG1CQUFBLE1BQU0sQ0FBQyxFQUFFLEVBQUMsQ0FBQyxVQUFVLEVBQUMsQ0FBQyxH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Q0FBQyxxREFBcUQ7QUFDckcsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRlZXBDb3B5LCB0b0Jvb2xlYW4gfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU0ZfU0VRIH0gZnJvbSAnLi9jb25zdCc7XG5pbXBvcnQgeyBTRlNjaGVtYSwgU0ZTY2hlbWFEZWZpbml0aW9uLCBTRlNjaGVtYUVudW0gfSBmcm9tICcuL3NjaGVtYSc7XG5pbXBvcnQgeyBTRlVJU2NoZW1hLCBTRlVJU2NoZW1hSXRlbSwgU0ZVSVNjaGVtYUl0ZW1SdW4gfSBmcm9tICcuL3NjaGVtYS91aSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0JsYW5rKG86IGFueSkge1xuICByZXR1cm4gbyA9PSBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9Cb29sKHZhbHVlOiBhbnksIGRlZmF1bHRWYWx1ZTogYm9vbGVhbikge1xuICB2YWx1ZSA9IHRvQm9vbGVhbih2YWx1ZSwgdHJ1ZSk7XG4gIHJldHVybiB2YWx1ZSA9PSBudWxsID8gZGVmYXVsdFZhbHVlIDogdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaSh1aTogU0ZVSVNjaGVtYSwgLi4uYXJnczogTnpTYWZlQW55W10pIHtcbiAgaWYgKHVpLmRlYnVnKSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICBjb25zb2xlLndhcm4oLi4uYXJncyk7XG4gIH1cbn1cblxuLyoqIOagueaNriBgJHJlZmAg5p+l5om+IGBkZWZpbml0aW9uc2AgKi9cbmZ1bmN0aW9uIGZpbmRTY2hlbWFEZWZpbml0aW9uKCRyZWY6IHN0cmluZywgZGVmaW5pdGlvbnM6IFNGU2NoZW1hRGVmaW5pdGlvbikge1xuICBjb25zdCBtYXRjaCA9IC9eI1xcL2RlZmluaXRpb25zXFwvKC4qKSQvLmV4ZWMoJHJlZik7XG4gIGlmIChtYXRjaCAmJiBtYXRjaFsxXSkge1xuICAgIC8vIHBhcnNlciBKU09OIFBvaW50ZXJcbiAgICBjb25zdCBwYXJ0cyA9IG1hdGNoWzFdLnNwbGl0KFNGX1NFUSk7XG4gICAgbGV0IGN1cnJlbnQ6IGFueSA9IGRlZmluaXRpb25zO1xuICAgIGZvciAobGV0IHBhcnQgb2YgcGFydHMpIHtcbiAgICAgIHBhcnQgPSBwYXJ0LnJlcGxhY2UoL34xL2csIFNGX1NFUSkucmVwbGFjZSgvfjAvZywgJ34nKTtcbiAgICAgIGlmIChjdXJyZW50Lmhhc093blByb3BlcnR5KHBhcnQpKSB7XG4gICAgICAgIGN1cnJlbnQgPSBjdXJyZW50W3BhcnRdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDb3VsZCBub3QgZmluZCBhIGRlZmluaXRpb24gZm9yICR7JHJlZn0uYCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjdXJyZW50O1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihgQ291bGQgbm90IGZpbmQgYSBkZWZpbml0aW9uIGZvciAkeyRyZWZ9LmApO1xufVxuXG4vKipcbiAqIOWPluWbnlNjaGVtYe+8jOW5tuWkhOeQhiBgJHJlZmAg55qE5YWz57O7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXRyaWV2ZVNjaGVtYShzY2hlbWE6IFNGU2NoZW1hLCBkZWZpbml0aW9uczogU0ZTY2hlbWFEZWZpbml0aW9uID0ge30pOiBTRlNjaGVtYSB7XG4gIGlmIChzY2hlbWEuaGFzT3duUHJvcGVydHkoJyRyZWYnKSkge1xuICAgIGNvbnN0ICRyZWZTY2hlbWEgPSBmaW5kU2NoZW1hRGVmaW5pdGlvbihzY2hlbWEuJHJlZiEsIGRlZmluaXRpb25zKTtcbiAgICAvLyByZW1vdmUgJHJlZiBwcm9wZXJ0eVxuICAgIGNvbnN0IHsgJHJlZiwgLi4ubG9jYWxTY2hlbWEgfSA9IHNjaGVtYTtcbiAgICByZXR1cm4gcmV0cmlldmVTY2hlbWEoeyAuLi4kcmVmU2NoZW1hLCAuLi5sb2NhbFNjaGVtYSB9LCBkZWZpbml0aW9ucyk7XG4gIH1cblxuICByZXR1cm4gc2NoZW1hO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUlmKHNjaGVtYTogU0ZTY2hlbWEsIHVpOiBTRlVJU2NoZW1hSXRlbVJ1bik6IFNGU2NoZW1hIHwgbnVsbCB7XG4gIGlmICghKHNjaGVtYS5oYXNPd25Qcm9wZXJ0eSgnaWYnKSAmJiBzY2hlbWEuaGFzT3duUHJvcGVydHkoJ3RoZW4nKSkpIHJldHVybiBudWxsO1xuXG4gIGlmICghc2NoZW1hLmlmIS5wcm9wZXJ0aWVzKSB0aHJvdyBuZXcgRXJyb3IoYGlmOiBkb2VzIG5vdCBjb250YWluICdwcm9wZXJ0aWVzJ2ApO1xuXG4gIGNvbnN0IGFsbEtleXMgPSBPYmplY3Qua2V5cyhzY2hlbWEucHJvcGVydGllcyEpO1xuICBjb25zdCBpZktleXMgPSBPYmplY3Qua2V5cyhzY2hlbWEuaWYhLnByb3BlcnRpZXMhKTtcbiAgZGV0ZWN0S2V5KGFsbEtleXMsIGlmS2V5cyk7XG4gIGRldGVjdEtleShhbGxLZXlzLCBzY2hlbWEudGhlbiEucmVxdWlyZWQhKTtcbiAgc2NoZW1hLnJlcXVpcmVkID0gc2NoZW1hLnJlcXVpcmVkIS5jb25jYXQoc2NoZW1hLnRoZW4hLnJlcXVpcmVkISk7XG4gIGNvbnN0IGhhc0Vsc2UgPSBzY2hlbWEuaGFzT3duUHJvcGVydHkoJ2Vsc2UnKTtcbiAgaWYgKGhhc0Vsc2UpIHtcbiAgICBkZXRlY3RLZXkoYWxsS2V5cywgc2NoZW1hLmVsc2UhLnJlcXVpcmVkISk7XG4gICAgc2NoZW1hLnJlcXVpcmVkID0gc2NoZW1hLnJlcXVpcmVkLmNvbmNhdChzY2hlbWEuZWxzZSEucmVxdWlyZWQhKTtcbiAgfVxuXG4gIGNvbnN0IHZpc2libGVJZjogYW55ID0ge307XG4gIGNvbnN0IHZpc2libGVFbHNlOiBhbnkgPSB7fTtcbiAgaWZLZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICBjb25zdCBjb25kID0gc2NoZW1hLmlmIS5wcm9wZXJ0aWVzIVtrZXldLmVudW07XG4gICAgdmlzaWJsZUlmW2tleV0gPSBjb25kO1xuICAgIGlmIChoYXNFbHNlKSB2aXNpYmxlRWxzZVtrZXldID0gKHZhbHVlOiBhbnkpID0+ICFjb25kIS5pbmNsdWRlcyh2YWx1ZSk7XG4gIH0pO1xuXG4gIHNjaGVtYS50aGVuIS5yZXF1aXJlZCEuZm9yRWFjaChrZXkgPT4gKHVpW2AkJHtrZXl9YF0udmlzaWJsZUlmID0gdmlzaWJsZUlmKSk7XG4gIGlmIChoYXNFbHNlKSBzY2hlbWEuZWxzZSEucmVxdWlyZWQhLmZvckVhY2goa2V5ID0+ICh1aVtgJCR7a2V5fWBdLnZpc2libGVJZiA9IHZpc2libGVFbHNlKSk7XG5cbiAgcmV0dXJuIHNjaGVtYTtcbn1cblxuZnVuY3Rpb24gZGV0ZWN0S2V5KGtleXM6IHN0cmluZ1tdLCBkZXRlY3RLZXlzOiBzdHJpbmdbXSkge1xuICBkZXRlY3RLZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICBpZiAoIWtleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBpZjogcHJvcGVydGllcyBkb2VzIG5vdCBjb250YWluICcke2tleX0nYCk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9yZGVyUHJvcGVydGllcyhwcm9wZXJ0aWVzOiBzdHJpbmdbXSwgb3JkZXI6IHN0cmluZ1tdKSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShvcmRlcikpIHJldHVybiBwcm9wZXJ0aWVzO1xuICBjb25zdCBhcnJheVRvSGFzaCA9IChhcnI6IE56U2FmZUFueSkgPT5cbiAgICBhcnIucmVkdWNlKChwcmV2OiBOelNhZmVBbnksIGN1cnI6IE56U2FmZUFueSkgPT4ge1xuICAgICAgcHJldltjdXJyXSA9IHRydWU7XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9LCB7fSk7XG4gIGNvbnN0IGVycm9yUHJvcExpc3QgPSAoYXJyOiBOelNhZmVBbnkpID0+IGBwcm9wZXJ0eSBbJHthcnIuam9pbihgJywgJ2ApfV1gO1xuXG4gIGNvbnN0IHByb3BlcnR5SGFzaCA9IGFycmF5VG9IYXNoKHByb3BlcnRpZXMpO1xuICBjb25zdCBvcmRlckhhc2ggPSBhcnJheVRvSGFzaChvcmRlcik7XG4gIGNvbnN0IGV4dHJhbmVvdXMgPSBvcmRlci5maWx0ZXIocHJvcCA9PiBwcm9wICE9PSAnKicgJiYgIXByb3BlcnR5SGFzaFtwcm9wXSk7XG4gIGlmIChleHRyYW5lb3VzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgdWkgc2NoZW1hIG9yZGVyIGxpc3QgY29udGFpbnMgZXh0cmFuZW91cyAke2Vycm9yUHJvcExpc3QoZXh0cmFuZW91cyl9YCk7XG4gIH1cbiAgY29uc3QgcmVzdCA9IHByb3BlcnRpZXMuZmlsdGVyKHByb3AgPT4gIW9yZGVySGFzaFtwcm9wXSk7XG4gIGNvbnN0IHJlc3RJbmRleCA9IG9yZGVyLmluZGV4T2YoJyonKTtcbiAgaWYgKHJlc3RJbmRleCA9PT0gLTEpIHtcbiAgICBpZiAocmVzdC5sZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgdWkgc2NoZW1hIG9yZGVyIGxpc3QgZG9lcyBub3QgY29udGFpbiAke2Vycm9yUHJvcExpc3QocmVzdCl9YCk7XG4gICAgfVxuICAgIHJldHVybiBvcmRlcjtcbiAgfVxuICBpZiAocmVzdEluZGV4ICE9PSBvcmRlci5sYXN0SW5kZXhPZignKicpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd1aSBzY2hlbWEgb3JkZXIgbGlzdCBjb250YWlucyBtb3JlIHRoYW4gb25lIHdpbGRjYXJkIGl0ZW0nKTtcbiAgfVxuICBjb25zdCBjb21wbGV0ZSA9IFsuLi5vcmRlcl07XG4gIGNvbXBsZXRlLnNwbGljZShyZXN0SW5kZXgsIDEsIC4uLnJlc3QpO1xuICByZXR1cm4gY29tcGxldGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRFbnVtKGxpc3Q6IGFueVtdLCBmb3JtRGF0YTogYW55LCByZWFkT25seTogYm9vbGVhbik6IFNGU2NoZW1hRW51bVtdIHtcbiAgaWYgKGlzQmxhbmsobGlzdCkgfHwgIUFycmF5LmlzQXJyYXkobGlzdCkgfHwgbGlzdC5sZW5ndGggPT09IDApIHJldHVybiBbXTtcbiAgaWYgKHR5cGVvZiBsaXN0WzBdICE9PSAnb2JqZWN0Jykge1xuICAgIGxpc3QgPSBsaXN0Lm1hcCgoaXRlbTogYW55KSA9PiB7XG4gICAgICByZXR1cm4geyBsYWJlbDogaXRlbSwgdmFsdWU6IGl0ZW0gfSBhcyBTRlNjaGVtYUVudW07XG4gICAgfSk7XG4gIH1cbiAgaWYgKGZvcm1EYXRhKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGZvcm1EYXRhKSkgZm9ybURhdGEgPSBbZm9ybURhdGFdO1xuICAgIGxpc3QuZm9yRWFjaCgoaXRlbTogU0ZTY2hlbWFFbnVtKSA9PiB7XG4gICAgICBpZiAofmZvcm1EYXRhLmluZGV4T2YoaXRlbS52YWx1ZSkpIGl0ZW0uY2hlY2tlZCA9IHRydWU7XG4gICAgfSk7XG4gIH1cbiAgLy8gZml4IGRpc2FibGVkIHN0YXR1c1xuICBpZiAocmVhZE9ubHkpIHtcbiAgICBsaXN0LmZvckVhY2goKGl0ZW06IFNGU2NoZW1hRW51bSkgPT4gKGl0ZW0uZGlzYWJsZWQgPSB0cnVlKSk7XG4gIH1cbiAgcmV0dXJuIGxpc3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb3B5RW51bShsaXN0OiBhbnlbXSwgZm9ybURhdGE6IGFueSwgcmVhZE9ubHk6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGdldEVudW0oZGVlcENvcHkobGlzdCB8fCBbXSksIGZvcm1EYXRhLCByZWFkT25seSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRhKHNjaGVtYTogU0ZTY2hlbWEsIHVpOiBTRlVJU2NoZW1hSXRlbSwgZm9ybURhdGE6IGFueSwgYXN5bmNBcmdzPzogYW55KTogT2JzZXJ2YWJsZTxTRlNjaGVtYUVudW1bXT4ge1xuICBpZiAodHlwZW9mIHVpLmFzeW5jRGF0YSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB1aS5hc3luY0RhdGEoYXN5bmNBcmdzKS5waXBlKG1hcCgobGlzdDogU0ZTY2hlbWFFbnVtW10pID0+IGdldEVudW0obGlzdCwgZm9ybURhdGEsIHNjaGVtYS5yZWFkT25seSEpKSk7XG4gIH1cbiAgcmV0dXJuIG9mKGdldENvcHlFbnVtKHNjaGVtYS5lbnVtISwgZm9ybURhdGEsIHNjaGVtYS5yZWFkT25seSEpKTtcbn1cblxuLyoqXG4gKiBXaGV0aGVyIHRvIHVzaW5nIGRhdGUtZm5zIHRvIGZvcm1hdCBhIGRhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRGF0ZUZucyhzcnY6IE56STE4blNlcnZpY2UpOiBib29sZWFuIHtcbiAgaWYgKCFzcnYpIHJldHVybiBmYWxzZTtcbiAgY29uc3QgZGF0YSA9IHNydi5nZXREYXRlTG9jYWxlKCk7XG4gIC8vIENvbXBhdGlibGUgZGF0ZS1mbnMgdjEueCAmIHYyLnhcbiAgcmV0dXJuIGRhdGEgIT0gbnVsbCAmJiAhIWRhdGEuZm9ybWF0RGlzdGFuY2U7IC8vICghIWRhdGEuZGlzdGFuY2VJbldvcmRzIHx8ICEhZGF0YS5mb3JtYXREaXN0YW5jZSk7XG59XG4iXX0=