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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdnN0cy93b3JrLzEvcy9wYWNrYWdlcy9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBR2xELE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxTQUFTLENBQUM7Ozs7O0FBSWpDLE1BQU0sVUFBVSxPQUFPLENBQUMsQ0FBTTtJQUM1QixPQUFPLENBQUMsSUFBSSxJQUFJLENBQUM7QUFDbkIsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLE1BQU0sQ0FBQyxLQUFVLEVBQUUsWUFBcUI7SUFDdEQsS0FBSyxHQUFHLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDL0IsT0FBTyxLQUFLLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztBQUM5QyxDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsRUFBRSxDQUFDLEVBQWMsRUFBRSxHQUFHLElBQWlCO0lBQ3JELElBQUksRUFBRSxDQUFDLEtBQUssRUFBRTtRQUNaLHNDQUFzQztRQUN0QyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7S0FDdkI7QUFDSCxDQUFDOzs7Ozs7O0FBR0QsU0FBUyxvQkFBb0IsQ0FBQyxJQUFZLEVBQUUsV0FBK0I7O1VBQ25FLEtBQUssR0FBRyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2pELElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRTs7O2NBRWYsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMs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QUksSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMscURBQXFEO0FBQ3JHLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZWVwQ29weSwgdG9Cb29sZWFuIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFNGX1NFUSB9IGZyb20gJy4vY29uc3QnO1xuaW1wb3J0IHsgU0ZTY2hlbWEsIFNGU2NoZW1hRGVmaW5pdGlvbiwgU0ZTY2hlbWFFbnVtIH0gZnJvbSAnLi9zY2hlbWEnO1xuaW1wb3J0IHsgU0ZVSVNjaGVtYSwgU0ZVSVNjaGVtYUl0ZW0sIFNGVUlTY2hlbWFJdGVtUnVuIH0gZnJvbSAnLi9zY2hlbWEvdWknO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNCbGFuayhvOiBhbnkpOiBib29sZWFuIHtcbiAgcmV0dXJuIG8gPT0gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvQm9vbCh2YWx1ZTogYW55LCBkZWZhdWx0VmFsdWU6IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgdmFsdWUgPSB0b0Jvb2xlYW4odmFsdWUsIHRydWUpO1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/IGRlZmF1bHRWYWx1ZSA6IHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGkodWk6IFNGVUlTY2hlbWEsIC4uLmFyZ3M6IE56U2FmZUFueVtdKTogdm9pZCB7XG4gIGlmICh1aS5kZWJ1Zykge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgY29uc29sZS53YXJuKC4uLmFyZ3MpO1xuICB9XG59XG5cbi8qKiDmoLnmja4gYCRyZWZgIOafpeaJviBgZGVmaW5pdGlvbnNgICovXG5mdW5jdGlvbiBmaW5kU2NoZW1hRGVmaW5pdGlvbigkcmVmOiBzdHJpbmcsIGRlZmluaXRpb25zOiBTRlNjaGVtYURlZmluaXRpb24pOiBhbnkge1xuICBjb25zdCBtYXRjaCA9IC9eI1xcL2RlZmluaXRpb25zXFwvKC4qKSQvLmV4ZWMoJHJlZik7XG4gIGlmIChtYXRjaCAmJiBtYXRjaFsxXSkge1xuICAgIC8vIHBhcnNlciBKU09OIFBvaW50ZXJcbiAgICBjb25zdCBwYXJ0cyA9IG1hdGNoWzFdLnNwbGl0KFNGX1NFUSk7XG4gICAgbGV0IGN1cnJlbnQ6IGFueSA9IGRlZmluaXRpb25zO1xuICAgIGZvciAobGV0IHBhcnQgb2YgcGFydHMpIHtcbiAgICAgIHBhcnQgPSBwYXJ0LnJlcGxhY2UoL34xL2csIFNGX1NFUSkucmVwbGFjZSgvfjAvZywgJ34nKTtcbiAgICAgIGlmIChjdXJyZW50Lmhhc093blByb3BlcnR5KHBhcnQpKSB7XG4gICAgICAgIGN1cnJlbnQgPSBjdXJyZW50W3BhcnRdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDb3VsZCBub3QgZmluZCBhIGRlZmluaXRpb24gZm9yICR7JHJlZn0uYCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjdXJyZW50O1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihgQ291bGQgbm90IGZpbmQgYSBkZWZpbml0aW9uIGZvciAkeyRyZWZ9LmApO1xufVxuXG4vKipcbiAqIOWPluWbnlNjaGVtYe+8jOW5tuWkhOeQhiBgJHJlZmAg55qE5YWz57O7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXRyaWV2ZVNjaGVtYShzY2hlbWE6IFNGU2NoZW1hLCBkZWZpbml0aW9uczogU0ZTY2hlbWFEZWZpbml0aW9uID0ge30pOiBTRlNjaGVtYSB7XG4gIGlmIChzY2hlbWEuaGFzT3duUHJvcGVydHkoJyRyZWYnKSkge1xuICAgIGNvbnN0ICRyZWZTY2hlbWEgPSBmaW5kU2NoZW1hRGVmaW5pdGlvbihzY2hlbWEuJHJlZiEsIGRlZmluaXRpb25zKTtcbiAgICAvLyByZW1vdmUgJHJlZiBwcm9wZXJ0eVxuICAgIGNvbnN0IHsgJHJlZiwgLi4ubG9jYWxTY2hlbWEgfSA9IHNjaGVtYTtcbiAgICByZXR1cm4gcmV0cmlldmVTY2hlbWEoeyAuLi4kcmVmU2NoZW1hLCAuLi5sb2NhbFNjaGVtYSB9LCBkZWZpbml0aW9ucyk7XG4gIH1cblxuICByZXR1cm4gc2NoZW1hO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUlmKHNjaGVtYTogU0ZTY2hlbWEsIHVpOiBTRlVJU2NoZW1hSXRlbVJ1bik6IFNGU2NoZW1hIHwgbnVsbCB7XG4gIGlmICghKHNjaGVtYS5oYXNPd25Qcm9wZXJ0eSgnaWYnKSAmJiBzY2hlbWEuaGFzT3duUHJvcGVydHkoJ3RoZW4nKSkpIHJldHVybiBudWxsO1xuXG4gIGlmICghc2NoZW1hLmlmIS5wcm9wZXJ0aWVzKSB0aHJvdyBuZXcgRXJyb3IoYGlmOiBkb2VzIG5vdCBjb250YWluICdwcm9wZXJ0aWVzJ2ApO1xuXG4gIGNvbnN0IGFsbEtleXMgPSBPYmplY3Qua2V5cyhzY2hlbWEucHJvcGVydGllcyEpO1xuICBjb25zdCBpZktleXMgPSBPYmplY3Qua2V5cyhzY2hlbWEuaWYhLnByb3BlcnRpZXMhKTtcbiAgZGV0ZWN0S2V5KGFsbEtleXMsIGlmS2V5cyk7XG4gIGRldGVjdEtleShhbGxLZXlzLCBzY2hlbWEudGhlbiEucmVxdWlyZWQhKTtcbiAgc2NoZW1hLnJlcXVpcmVkID0gc2NoZW1hLnJlcXVpcmVkIS5jb25jYXQoc2NoZW1hLnRoZW4hLnJlcXVpcmVkISk7XG4gIGNvbnN0IGhhc0Vsc2UgPSBzY2hlbWEuaGFzT3duUHJvcGVydHkoJ2Vsc2UnKTtcbiAgaWYgKGhhc0Vsc2UpIHtcbiAgICBkZXRlY3RLZXkoYWxsS2V5cywgc2NoZW1hLmVsc2UhLnJlcXVpcmVkISk7XG4gICAgc2NoZW1hLnJlcXVpcmVkID0gc2NoZW1hLnJlcXVpcmVkLmNvbmNhdChzY2hlbWEuZWxzZSEucmVxdWlyZWQhKTtcbiAgfVxuXG4gIGNvbnN0IHZpc2libGVJZjogYW55ID0ge307XG4gIGNvbnN0IHZpc2libGVFbHNlOiBhbnkgPSB7fTtcbiAgaWZLZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICBjb25zdCBjb25kID0gc2NoZW1hLmlmIS5wcm9wZXJ0aWVzIVtrZXldLmVudW07XG4gICAgdmlzaWJsZUlmW2tleV0gPSBjb25kO1xuICAgIGlmIChoYXNFbHNlKSB2aXNpYmxlRWxzZVtrZXldID0gKHZhbHVlOiBhbnkpID0+ICFjb25kIS5pbmNsdWRlcyh2YWx1ZSk7XG4gIH0pO1xuXG4gIHNjaGVtYS50aGVuIS5yZXF1aXJlZCEuZm9yRWFjaChrZXkgPT4gKHVpW2AkJHtrZXl9YF0udmlzaWJsZUlmID0gdmlzaWJsZUlmKSk7XG4gIGlmIChoYXNFbHNlKSBzY2hlbWEuZWxzZSEucmVxdWlyZWQhLmZvckVhY2goa2V5ID0+ICh1aVtgJCR7a2V5fWBdLnZpc2libGVJZiA9IHZpc2libGVFbHNlKSk7XG5cbiAgcmV0dXJuIHNjaGVtYTtcbn1cblxuZnVuY3Rpb24gZGV0ZWN0S2V5KGtleXM6IHN0cmluZ1tdLCBkZXRlY3RLZXlzOiBzdHJpbmdbXSk6IHZvaWQge1xuICBkZXRlY3RLZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICBpZiAoIWtleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBpZjogcHJvcGVydGllcyBkb2VzIG5vdCBjb250YWluICcke2tleX0nYCk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9yZGVyUHJvcGVydGllcyhwcm9wZXJ0aWVzOiBzdHJpbmdbXSwgb3JkZXI6IHN0cmluZ1tdKTogc3RyaW5nW10ge1xuICBpZiAoIUFycmF5LmlzQXJyYXkob3JkZXIpKSByZXR1cm4gcHJvcGVydGllcztcbiAgY29uc3QgYXJyYXlUb0hhc2ggPSAoYXJyOiBOelNhZmVBbnkpID0+XG4gICAgYXJyLnJlZHVjZSgocHJldjogTnpTYWZlQW55LCBjdXJyOiBOelNhZmVBbnkpID0+IHtcbiAgICAgIHByZXZbY3Vycl0gPSB0cnVlO1xuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfSwge30pO1xuICBjb25zdCBlcnJvclByb3BMaXN0ID0gKGFycjogTnpTYWZlQW55KSA9PiBgcHJvcGVydHkgWyR7YXJyLmpvaW4oYCcsICdgKX1dYDtcblxuICBjb25zdCBwcm9wZXJ0eUhhc2ggPSBhcnJheVRvSGFzaChwcm9wZXJ0aWVzKTtcbiAgY29uc3Qgb3JkZXJIYXNoID0gYXJyYXlUb0hhc2gob3JkZXIpO1xuICBjb25zdCBleHRyYW5lb3VzID0gb3JkZXIuZmlsdGVyKHByb3AgPT4gcHJvcCAhPT0gJyonICYmICFwcm9wZXJ0eUhhc2hbcHJvcF0pO1xuICBpZiAoZXh0cmFuZW91cy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYHVpIHNjaGVtYSBvcmRlciBsaXN0IGNvbnRhaW5zIGV4dHJhbmVvdXMgJHtlcnJvclByb3BMaXN0KGV4dHJhbmVvdXMpfWApO1xuICB9XG4gIGNvbnN0IHJlc3QgPSBwcm9wZXJ0aWVzLmZpbHRlcihwcm9wID0+ICFvcmRlckhhc2hbcHJvcF0pO1xuICBjb25zdCByZXN0SW5kZXggPSBvcmRlci5pbmRleE9mKCcqJyk7XG4gIGlmIChyZXN0SW5kZXggPT09IC0xKSB7XG4gICAgaWYgKHJlc3QubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYHVpIHNjaGVtYSBvcmRlciBsaXN0IGRvZXMgbm90IGNvbnRhaW4gJHtlcnJvclByb3BMaXN0KHJlc3QpfWApO1xuICAgIH1cbiAgICByZXR1cm4gb3JkZXI7XG4gIH1cbiAgaWYgKHJlc3RJbmRleCAhPT0gb3JkZXIubGFzdEluZGV4T2YoJyonKSkge1xuICAgIHRocm93IG5ldyBFcnJvcigndWkgc2NoZW1hIG9yZGVyIGxpc3QgY29udGFpbnMgbW9yZSB0aGFuIG9uZSB3aWxkY2FyZCBpdGVtJyk7XG4gIH1cbiAgY29uc3QgY29tcGxldGUgPSBbLi4ub3JkZXJdO1xuICBjb21wbGV0ZS5zcGxpY2UocmVzdEluZGV4LCAxLCAuLi5yZXN0KTtcbiAgcmV0dXJuIGNvbXBsZXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RW51bShsaXN0OiBhbnlbXSwgZm9ybURhdGE6IGFueSwgcmVhZE9ubHk6IGJvb2xlYW4pOiBTRlNjaGVtYUVudW1bXSB7XG4gIGlmIChpc0JsYW5rKGxpc3QpIHx8ICFBcnJheS5pc0FycmF5KGxpc3QpIHx8IGxpc3QubGVuZ3RoID09PSAwKSByZXR1cm4gW107XG4gIGlmICh0eXBlb2YgbGlzdFswXSAhPT0gJ29iamVjdCcpIHtcbiAgICBsaXN0ID0gbGlzdC5tYXAoKGl0ZW06IGFueSkgPT4ge1xuICAgICAgcmV0dXJuIHsgbGFiZWw6IGl0ZW0sIHZhbHVlOiBpdGVtIH0gYXMgU0ZTY2hlbWFFbnVtO1xuICAgIH0pO1xuICB9XG4gIGlmIChmb3JtRGF0YSkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShmb3JtRGF0YSkpIGZvcm1EYXRhID0gW2Zvcm1EYXRhXTtcbiAgICBsaXN0LmZvckVhY2goKGl0ZW06IFNGU2NoZW1hRW51bSkgPT4ge1xuICAgICAgaWYgKH5mb3JtRGF0YS5pbmRleE9mKGl0ZW0udmFsdWUpKSBpdGVtLmNoZWNrZWQgPSB0cnVlO1xuICAgIH0pO1xuICB9XG4gIC8vIGZpeCBkaXNhYmxlZCBzdGF0dXNcbiAgaWYgKHJlYWRPbmx5KSB7XG4gICAgbGlzdC5mb3JFYWNoKChpdGVtOiBTRlNjaGVtYUVudW0pID0+IChpdGVtLmRpc2FibGVkID0gdHJ1ZSkpO1xuICB9XG4gIHJldHVybiBsaXN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29weUVudW0obGlzdDogYW55W10sIGZvcm1EYXRhOiBhbnksIHJlYWRPbmx5OiBib29sZWFuKTogU0ZTY2hlbWFFbnVtW10ge1xuICByZXR1cm4gZ2V0RW51bShkZWVwQ29weShsaXN0IHx8IFtdKSwgZm9ybURhdGEsIHJlYWRPbmx5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGEoc2NoZW1hOiBTRlNjaGVtYSwgdWk6IFNGVUlTY2hlbWFJdGVtLCBmb3JtRGF0YTogYW55LCBhc3luY0FyZ3M/OiBhbnkpOiBPYnNlcnZhYmxlPFNGU2NoZW1hRW51bVtdPiB7XG4gIGlmICh0eXBlb2YgdWkuYXN5bmNEYXRhID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHVpLmFzeW5jRGF0YShhc3luY0FyZ3MpLnBpcGUobWFwKChsaXN0OiBTRlNjaGVtYUVudW1bXSkgPT4gZ2V0RW51bShsaXN0LCBmb3JtRGF0YSwgc2NoZW1hLnJlYWRPbmx5ISkpKTtcbiAgfVxuICByZXR1cm4gb2YoZ2V0Q29weUVudW0oc2NoZW1hLmVudW0hLCBmb3JtRGF0YSwgc2NoZW1hLnJlYWRPbmx5ISkpO1xufVxuXG4vKipcbiAqIFdoZXRoZXIgdG8gdXNpbmcgZGF0ZS1mbnMgdG8gZm9ybWF0IGEgZGF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNEYXRlRm5zKHNydjogTnpJMThuU2VydmljZSk6IGJvb2xlYW4ge1xuICBpZiAoIXNydikgcmV0dXJuIGZhbHNlO1xuICBjb25zdCBkYXRhID0gc3J2LmdldERhdGVMb2NhbGUoKTtcbiAgLy8gQ29tcGF0aWJsZSBkYXRlLWZucyB2MS54ICYgdjIueFxuICByZXR1cm4gZGF0YSAhPSBudWxsICYmICEhZGF0YS5mb3JtYXREaXN0YW5jZTsgLy8gKCEhZGF0YS5kaXN0YW5jZUluV29yZHMgfHwgISFkYXRhLmZvcm1hdERpc3RhbmNlKTtcbn1cbiJdfQ==