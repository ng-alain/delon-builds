/**
 * @fileoverview added by tsickle
 * Generated from: src/utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
        const { $ref } = schema, localSchema = tslib_1.__rest(schema, ["$ref"]);
        return retrieveSchema(Object.assign({}, $refSchema, localSchema), definitions);
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
    arr => arr.reduce((/**
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
    arr => `property [${arr.join(`', '`)}]`);
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
    return data != null && (!!data.distanceInWords || !!data.formatDistance);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vZm9ybS8iLCJzb3VyY2VzIjpbInNyYy91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNsRCxPQUFPLEVBQUUsRUFBRSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUlyQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sU0FBUyxDQUFDOztBQUVqQyxNQUFNLE9BQU8sVUFBVSxHQUFHO0lBQ3hCLFdBQVcsRUFBRTtRQUNYLE1BQU0sRUFBRSxNQUFNO1FBQ2QsUUFBUSxFQUFFLElBQUk7UUFDZCxNQUFNLEVBQUUsc0JBQXNCO0tBQy9CO0lBQ0QsSUFBSSxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFO0lBQzlDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRTtJQUNyRCxJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFO0lBQ3hCLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUU7SUFDL0IsSUFBSSxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUU7SUFDekQsS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUU7SUFDM0QsR0FBRyxFQUFFLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRTtJQUN6QixLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7SUFDaEQsS0FBSyxFQUFFLEVBQUUsTUFBTSxF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UUFBUSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDM0QsQ0FBQzs7Ozs7Ozs7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUFDLE1BQWdCLEVBQUUsRUFBa0IsRUFBRSxRQUFhLEVBQUUsU0FBZTtJQUMxRixJQUFJLE9BQU8sRUFBRSxDQUFDLFNBQVMsS0FBSyxVQUFVLEVBQUU7UUFDdEMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxJQUFvQixFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxtQkFBQSxNQUFNLENBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7S0FDL0c7SUFDRCxPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUMsbUJBQUEsTUFBTSxDQUFDLElBQUksRUFBQyxFQUFFLFFBQVEsRUFBRSxtQkFBQSxNQUFNLENBQUMsUUFBUSxFQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ25FLENBQUM7Ozs7OztBQUtELE1BQU0sVUFBVSxTQUFTLENBQUMsR0FBa0I7SUFDMUMsSUFBSSxDQUFDLEdBQUc7UUFBRSxPQUFPLEtBQUssQ0FBQzs7VUFDakIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxhQUFhLEVBQUU7SUFDaEMsa0NBQWtDO0lBQ2xDLE9BQU8sSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDM0UsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRlZXBDb3B5LCB0b0Jvb2xlYW4gfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBvZiwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XG5pbXBvcnQgeyBTRlNjaGVtYSwgU0ZTY2hlbWFEZWZpbml0aW9uLCBTRlNjaGVtYUVudW0gfSBmcm9tICcuL3NjaGVtYSc7XG5pbXBvcnQgeyBTRlVJU2NoZW1hLCBTRlVJU2NoZW1hSXRlbSwgU0ZVSVNjaGVtYUl0ZW1SdW4gfSBmcm9tICcuL3NjaGVtYS91aSc7XG5pbXBvcnQgeyBTRl9TRVEgfSBmcm9tICcuL2NvbnN0JztcblxuZXhwb3J0IGNvbnN0IEZPUk1BVE1BUFMgPSB7XG4gICdkYXRlLXRpbWUnOiB7XG4gICAgd2lkZ2V0OiAnZGF0ZScsXG4gICAgc2hvd1RpbWU6IHRydWUsXG4gICAgZm9ybWF0OiAnWVlZWS1NTS1ERFRISDptbTpzc1onLFxuICB9LFxuICBkYXRlOiB7IHdpZGdldDogJ2RhdGUnLCBmb3JtYXQ6ICdZWVlZLU1NLUREJyB9LFxuICAnZnVsbC1kYXRlJzogeyB3aWRnZXQ6ICdkYXRlJywgZm9ybWF0OiAnWVlZWS1NTS1ERCcgfSxcbiAgdGltZTogeyB3aWRnZXQ6ICd0aW1lJyB9LFxuICAnZnVsbC10aW1lJzogeyB3aWRnZXQ6ICd0aW1lJyB9LFxuICB3ZWVrOiB7IHdpZGdldDogJ2RhdGUnLCBtb2RlOiAnd2VlaycsIGZvcm1hdDogJ1lZWVktV1cnIH0sXG4gIG1vbnRoOiB7IHdpZGdldDogJ2RhdGUnLCBtb2RlOiAnbW9udGgnLCBmb3JtYXQ6ICdZWVlZLU1NJyB9LFxuICB1cmk6IHsgd2lkZ2V0OiAndXBsb2FkJyB9LFxuICBlbWFpbDogeyB3aWRnZXQ6ICdhdXRvY29tcGxldGUnLCB0eXBlOiAnZW1haWwnIH0sXG4gIGNvbG9yOiB7IHdpZGdldDogJ3N0cmluZycsIHR5cGU6ICdjb2xvcicgfSxcbiAgJyc6IHsgd2lkZ2V0OiAnc3RyaW5nJyB9LFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzQmxhbmsobzogYW55KSB7XG4gIHJldHVybiBvID09IG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0Jvb2wodmFsdWU6IGFueSwgZGVmYXVsdFZhbHVlOiBib29sZWFuKSB7XG4gIHZhbHVlID0gdG9Cb29sZWFuKHZhbHVlLCB0cnVlKTtcbiAgcmV0dXJuIHZhbHVlID09IG51bGwgPyBkZWZhdWx0VmFsdWUgOiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpKHVpOiBTRlVJU2NoZW1hLCAuLi5hcmdzKSB7XG4gIGlmICh1aS5kZWJ1Zykge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgY29uc29sZS53YXJuKC4uLmFyZ3MpO1xuICB9XG59XG5cbi8qKiDmoLnmja4gYCRyZWZgIOafpeaJviBgZGVmaW5pdGlvbnNgICovXG5mdW5jdGlvbiBmaW5kU2NoZW1hRGVmaW5pdGlvbigkcmVmOiBzdHJpbmcsIGRlZmluaXRpb25zOiBTRlNjaGVtYURlZmluaXRpb24pIHtcbiAgY29uc3QgbWF0Y2ggPSAvXiNcXC9kZWZpbml0aW9uc1xcLyguKikkLy5leGVjKCRyZWYpO1xuICBpZiAobWF0Y2ggJiYgbWF0Y2hbMV0pIHtcbiAgICAvLyBwYXJzZXIgSlNPTiBQb2ludGVyXG4gICAgY29uc3QgcGFydHMgPSBtYXRjaFsxXS5zcGxpdChTRl9TRVEpO1xuICAgIGxldCBjdXJyZW50OiBhbnkgPSBkZWZpbml0aW9ucztcbiAgICBmb3IgKGxldCBwYXJ0IG9mIHBhcnRzKSB7XG4gICAgICBwYXJ0ID0gcGFydC5yZXBsYWNlKC9+MS9nLCBTRl9TRVEpLnJlcGxhY2UoL34wL2csICd+Jyk7XG4gICAgICBpZiAoY3VycmVudC5oYXNPd25Qcm9wZXJ0eShwYXJ0KSkge1xuICAgICAgICBjdXJyZW50ID0gY3VycmVudFtwYXJ0XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQ291bGQgbm90IGZpbmQgYSBkZWZpbml0aW9uIGZvciAkeyRyZWZ9LmApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY3VycmVudDtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoYENvdWxkIG5vdCBmaW5kIGEgZGVmaW5pdGlvbiBmb3IgJHskcmVmfS5gKTtcbn1cblxuLyoqXG4gKiDlj5blm55TY2hlbWHvvIzlubblpITnkIYgYCRyZWZgIOeahOWFs+ezu1xuICovXG5leHBvcnQgZnVuY3Rpb24gcmV0cmlldmVTY2hlbWEoc2NoZW1hOiBTRlNjaGVtYSwgZGVmaW5pdGlvbnM6IFNGU2NoZW1hRGVmaW5pdGlvbiA9IHt9KTogU0ZTY2hlbWEge1xuICBpZiAoc2NoZW1hLmhhc093blByb3BlcnR5KCckcmVmJykpIHtcbiAgICBjb25zdCAkcmVmU2NoZW1hID0gZmluZFNjaGVtYURlZmluaXRpb24oc2NoZW1hLiRyZWYhLCBkZWZpbml0aW9ucyk7XG4gICAgLy8gcmVtb3ZlICRyZWYgcHJvcGVydHlcbiAgICBjb25zdCB7ICRyZWYsIC4uLmxvY2FsU2NoZW1hIH0gPSBzY2hlbWE7XG4gICAgcmV0dXJuIHJldHJpZXZlU2NoZW1hKHsgLi4uJHJlZlNjaGVtYSwgLi4ubG9jYWxTY2hlbWEgfSwgZGVmaW5pdGlvbnMpO1xuICB9XG5cbiAgcmV0dXJuIHNjaGVtYTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVJZihzY2hlbWE6IFNGU2NoZW1hLCB1aTogU0ZVSVNjaGVtYUl0ZW1SdW4pOiBTRlNjaGVtYSB8IG51bGwge1xuICBpZiAoIShzY2hlbWEuaGFzT3duUHJvcGVydHkoJ2lmJykgJiYgc2NoZW1hLmhhc093blByb3BlcnR5KCd0aGVuJykpKSByZXR1cm4gbnVsbDtcblxuICBpZiAoIXNjaGVtYS5pZiEucHJvcGVydGllcykgdGhyb3cgbmV3IEVycm9yKGBpZjogZG9lcyBub3QgY29udGFpbiAncHJvcGVydGllcydgKTtcblxuICBjb25zdCBhbGxLZXlzID0gT2JqZWN0LmtleXMoc2NoZW1hLnByb3BlcnRpZXMhKTtcbiAgY29uc3QgaWZLZXlzID0gT2JqZWN0LmtleXMoc2NoZW1hLmlmIS5wcm9wZXJ0aWVzISk7XG4gIGRldGVjdEtleShhbGxLZXlzLCBpZktleXMpO1xuICBkZXRlY3RLZXkoYWxsS2V5cywgc2NoZW1hLnRoZW4hLnJlcXVpcmVkISk7XG4gIHNjaGVtYS5yZXF1aXJlZCA9IHNjaGVtYS5yZXF1aXJlZCEuY29uY2F0KHNjaGVtYS50aGVuIS5yZXF1aXJlZCEpO1xuICBjb25zdCBoYXNFbHNlID0gc2NoZW1hLmhhc093blByb3BlcnR5KCdlbHNlJyk7XG4gIGlmIChoYXNFbHNlKSB7XG4gICAgZGV0ZWN0S2V5KGFsbEtleXMsIHNjaGVtYS5lbHNlIS5yZXF1aXJlZCEpO1xuICAgIHNjaGVtYS5yZXF1aXJlZCA9IHNjaGVtYS5yZXF1aXJlZC5jb25jYXQoc2NoZW1hLmVsc2UhLnJlcXVpcmVkISk7XG4gIH1cblxuICBjb25zdCB2aXNpYmxlSWY6IGFueSA9IHt9O1xuICBjb25zdCB2aXNpYmxlRWxzZTogYW55ID0ge307XG4gIGlmS2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgY29uc3QgY29uZCA9IHNjaGVtYS5pZiEucHJvcGVydGllcyFba2V5XS5lbnVtO1xuICAgIHZpc2libGVJZltrZXldID0gY29uZDtcbiAgICBpZiAoaGFzRWxzZSkgdmlzaWJsZUVsc2Vba2V5XSA9ICh2YWx1ZTogYW55KSA9PiAhY29uZCEuaW5jbHVkZXModmFsdWUpO1xuICB9KTtcblxuICBzY2hlbWEudGhlbiEucmVxdWlyZWQhLmZvckVhY2goa2V5ID0+ICh1aVtgJCR7a2V5fWBdLnZpc2libGVJZiA9IHZpc2libGVJZikpO1xuICBpZiAoaGFzRWxzZSkgc2NoZW1hLmVsc2UhLnJlcXVpcmVkIS5mb3JFYWNoKGtleSA9PiAodWlbYCQke2tleX1gXS52aXNpYmxlSWYgPSB2aXNpYmxlRWxzZSkpO1xuXG4gIHJldHVybiBzY2hlbWE7XG59XG5cbmZ1bmN0aW9uIGRldGVjdEtleShrZXlzOiBzdHJpbmdbXSwgZGV0ZWN0S2V5czogc3RyaW5nW10pIHtcbiAgZGV0ZWN0S2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgaWYgKCFrZXlzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgaWY6IHByb3BlcnRpZXMgZG9lcyBub3QgY29udGFpbiAnJHtrZXl9J2ApO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvcmRlclByb3BlcnRpZXMocHJvcGVydGllczogc3RyaW5nW10sIG9yZGVyOiBzdHJpbmdbXSkge1xuICBpZiAoIUFycmF5LmlzQXJyYXkob3JkZXIpKSByZXR1cm4gcHJvcGVydGllcztcbiAgY29uc3QgYXJyYXlUb0hhc2ggPSBhcnIgPT5cbiAgICBhcnIucmVkdWNlKChwcmV2LCBjdXJyKSA9PiB7XG4gICAgICBwcmV2W2N1cnJdID0gdHJ1ZTtcbiAgICAgIHJldHVybiBwcmV2O1xuICAgIH0sIHt9KTtcbiAgY29uc3QgZXJyb3JQcm9wTGlzdCA9IGFyciA9PiBgcHJvcGVydHkgWyR7YXJyLmpvaW4oYCcsICdgKX1dYDtcblxuICBjb25zdCBwcm9wZXJ0eUhhc2ggPSBhcnJheVRvSGFzaChwcm9wZXJ0aWVzKTtcbiAgY29uc3Qgb3JkZXJIYXNoID0gYXJyYXlUb0hhc2gob3JkZXIpO1xuICBjb25zdCBleHRyYW5lb3VzID0gb3JkZXIuZmlsdGVyKHByb3AgPT4gcHJvcCAhPT0gJyonICYmICFwcm9wZXJ0eUhhc2hbcHJvcF0pO1xuICBpZiAoZXh0cmFuZW91cy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYHVpIHNjaGVtYSBvcmRlciBsaXN0IGNvbnRhaW5zIGV4dHJhbmVvdXMgJHtlcnJvclByb3BMaXN0KGV4dHJhbmVvdXMpfWApO1xuICB9XG4gIGNvbnN0IHJlc3QgPSBwcm9wZXJ0aWVzLmZpbHRlcihwcm9wID0+ICFvcmRlckhhc2hbcHJvcF0pO1xuICBjb25zdCByZXN0SW5kZXggPSBvcmRlci5pbmRleE9mKCcqJyk7XG4gIGlmIChyZXN0SW5kZXggPT09IC0xKSB7XG4gICAgaWYgKHJlc3QubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYHVpIHNjaGVtYSBvcmRlciBsaXN0IGRvZXMgbm90IGNvbnRhaW4gJHtlcnJvclByb3BMaXN0KHJlc3QpfWApO1xuICAgIH1cbiAgICByZXR1cm4gb3JkZXI7XG4gIH1cbiAgaWYgKHJlc3RJbmRleCAhPT0gb3JkZXIubGFzdEluZGV4T2YoJyonKSkge1xuICAgIHRocm93IG5ldyBFcnJvcigndWkgc2NoZW1hIG9yZGVyIGxpc3QgY29udGFpbnMgbW9yZSB0aGFuIG9uZSB3aWxkY2FyZCBpdGVtJyk7XG4gIH1cbiAgY29uc3QgY29tcGxldGUgPSBbLi4ub3JkZXJdO1xuICBjb21wbGV0ZS5zcGxpY2UocmVzdEluZGV4LCAxLCAuLi5yZXN0KTtcbiAgcmV0dXJuIGNvbXBsZXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RW51bShsaXN0OiBhbnlbXSwgZm9ybURhdGE6IGFueSwgcmVhZE9ubHk6IGJvb2xlYW4pOiBTRlNjaGVtYUVudW1bXSB7XG4gIGlmIChpc0JsYW5rKGxpc3QpIHx8ICFBcnJheS5pc0FycmF5KGxpc3QpIHx8IGxpc3QubGVuZ3RoID09PSAwKSByZXR1cm4gW107XG4gIGlmICh0eXBlb2YgbGlzdFswXSAhPT0gJ29iamVjdCcpIHtcbiAgICBsaXN0ID0gbGlzdC5tYXAoKGl0ZW06IGFueSkgPT4ge1xuICAgICAgcmV0dXJuIHsgbGFiZWw6IGl0ZW0sIHZhbHVlOiBpdGVtIH0gYXMgU0ZTY2hlbWFFbnVtO1xuICAgIH0pO1xuICB9XG4gIGlmIChmb3JtRGF0YSkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShmb3JtRGF0YSkpIGZvcm1EYXRhID0gW2Zvcm1EYXRhXTtcbiAgICBsaXN0LmZvckVhY2goKGl0ZW06IFNGU2NoZW1hRW51bSkgPT4ge1xuICAgICAgaWYgKH5mb3JtRGF0YS5pbmRleE9mKGl0ZW0udmFsdWUpKSBpdGVtLmNoZWNrZWQgPSB0cnVlO1xuICAgIH0pO1xuICB9XG4gIC8vIGZpeCBkaXNhYmxlZCBzdGF0dXNcbiAgaWYgKHJlYWRPbmx5KSB7XG4gICAgbGlzdC5mb3JFYWNoKChpdGVtOiBTRlNjaGVtYUVudW0pID0+IChpdGVtLmRpc2FibGVkID0gdHJ1ZSkpO1xuICB9XG4gIHJldHVybiBsaXN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29weUVudW0obGlzdDogYW55W10sIGZvcm1EYXRhOiBhbnksIHJlYWRPbmx5OiBib29sZWFuKSB7XG4gIHJldHVybiBnZXRFbnVtKGRlZXBDb3B5KGxpc3QgfHwgW10pLCBmb3JtRGF0YSwgcmVhZE9ubHkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0YShzY2hlbWE6IFNGU2NoZW1hLCB1aTogU0ZVSVNjaGVtYUl0ZW0sIGZvcm1EYXRhOiBhbnksIGFzeW5jQXJncz86IGFueSk6IE9ic2VydmFibGU8U0ZTY2hlbWFFbnVtW10+IHtcbiAgaWYgKHR5cGVvZiB1aS5hc3luY0RhdGEgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdWkuYXN5bmNEYXRhKGFzeW5jQXJncykucGlwZShtYXAoKGxpc3Q6IFNGU2NoZW1hRW51bVtdKSA9PiBnZXRFbnVtKGxpc3QsIGZvcm1EYXRhLCBzY2hlbWEucmVhZE9ubHkhKSkpO1xuICB9XG4gIHJldHVybiBvZihnZXRDb3B5RW51bShzY2hlbWEuZW51bSEsIGZvcm1EYXRhLCBzY2hlbWEucmVhZE9ubHkhKSk7XG59XG5cbi8qKlxuICogV2hldGhlciB0byB1c2luZyBkYXRlLWZucyB0byBmb3JtYXQgYSBkYXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0RhdGVGbnMoc3J2OiBOekkxOG5TZXJ2aWNlKTogYm9vbGVhbiB7XG4gIGlmICghc3J2KSByZXR1cm4gZmFsc2U7XG4gIGNvbnN0IGRhdGEgPSBzcnYuZ2V0RGF0ZUxvY2FsZSgpO1xuICAvLyBDb21wYXRpYmxlIGRhdGUtZm5zIHYxLnggJiB2Mi54XG4gIHJldHVybiBkYXRhICE9IG51bGwgJiYgKCEhZGF0YS5kaXN0YW5jZUluV29yZHMgfHwgISFkYXRhLmZvcm1hdERpc3RhbmNlKTtcbn1cbiJdfQ==