/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// tslint:disable:no-any
import { deepCopy } from '@delon/util';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
/** @type {?} */
export const FORMATMAPS = {
    'date-time': {
        widget: 'date',
        showTime: true,
        format: 'YYYY-MM-DDTHH:mm:ssZ',
    },
    'date': { widget: 'date', format: 'YYYY-MM-DD' },
    'full-date': { widget: 'date', format: 'YYYY-MM-DD' },
    'time': { widget: 'time' },
    'full-time': { widget: 'time' },
    'week': { widget: 'date', mode: 'week', format: 'YYYY-WW' },
    'month': { widget: 'date', mode: 'month', format: 'YYYY-MM' },
    'uri': { widget: 'upload' },
    'email': { widget: 'autocomplete', type: 'email' },
    'color': { widget: 'string', type: 'color' },
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
    return value == null ? defaultValue : `${value}` !== 'false';
}
/**
 * @param {...?} args
 * @return {?}
 */
export function di(...args) {
    // tslint:disable-next-line:no-console
    console.warn(...args);
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
        const parts = match[1].split('/');
        /** @type {?} */
        let current = definitions;
        for (let part of parts) {
            part = part.replace(/~1/g, '/').replace(/~0/g, '~');
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
        const $refSchema = findSchemaDefinition(schema.$ref, definitions);
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
        return;
    if (!schema.if.properties)
        throw new Error(`if: does not contain 'properties'`);
    /** @type {?} */
    const allKeys = Object.keys(schema.properties);
    /** @type {?} */
    const ifKeys = Object.keys(schema.if.properties);
    detectKey(allKeys, ifKeys);
    detectKey(allKeys, schema.then.required);
    schema.required = schema.required.concat(schema.then.required);
    /** @type {?} */
    const hasElse = schema.hasOwnProperty('else');
    if (hasElse) {
        detectKey(allKeys, schema.else.required);
        schema.required = schema.required.concat(schema.else.required);
    }
    /** @type {?} */
    const visibleIf = {};
    /** @type {?} */
    const visibleElse = {};
    ifKeys.forEach(key => {
        /** @type {?} */
        const cond = schema.if.properties[key].enum;
        visibleIf[key] = cond;
        if (hasElse)
            visibleElse[key] = (value) => !cond.includes(value);
    });
    schema.then.required.forEach(key => (ui[`$${key}`].visibleIf = visibleIf));
    if (hasElse)
        schema.else.required.forEach(key => (ui[`$${key}`].visibleIf = visibleElse));
    return schema;
}
/**
 * @param {?} keys
 * @param {?} detectKeys
 * @return {?}
 */
function detectKey(keys, detectKeys) {
    detectKeys.forEach(key => {
        if (!keys.includes(key)) {
            throw new Error(`if: properties does not contain '${key}'`);
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
    const arrayToHash = arr => arr.reduce((prev, curr) => {
        prev[curr] = true;
        return prev;
    }, {});
    /** @type {?} */
    const errorPropList = arr => `property [${arr.join(`', '`)}]`;
    /** @type {?} */
    const propertyHash = arrayToHash(properties);
    /** @type {?} */
    const orderHash = arrayToHash(order);
    /** @type {?} */
    const extraneous = order.filter(prop => prop !== '*' && !propertyHash[prop]);
    if (extraneous.length) {
        throw new Error(`ui schema order list contains extraneous ${errorPropList(extraneous)}`);
    }
    /** @type {?} */
    const rest = properties.filter(prop => !orderHash[prop]);
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
        list = list.map((item) => {
            return (/** @type {?} */ ({ label: item, value: item }));
        });
    }
    if (formData) {
        if (!Array.isArray(formData))
            formData = [formData];
        list.forEach((item) => {
            if (~formData.indexOf(item.value))
                item.checked = true;
        });
    }
    // fix disabled status
    if (readOnly) {
        list.forEach((item) => item.disabled = true);
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
            .pipe(map(list => getEnum(list, formData, schema.readOnly)));
    }
    return of(getCopyEnum(schema.enum, formData, schema.readOnly));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vZm9ybS8iLCJzb3VyY2VzIjpbInNyYy91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxFQUFFLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUlyQyxNQUFNLE9BQU8sVUFBVSxHQUFHO0lBQ3hCLFdBQVcsRUFBRTtRQUNYLE1BQU0sRUFBRSxNQUFNO1FBQ2QsUUFBUSxFQUFFLElBQUk7UUFDZCxNQUFNLEVBQUUsc0JBQXNCO0tBQy9CO0lBQ0QsTUFBTSxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFO0lBQ2hELFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRTtJQUNyRCxNQUFNLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFO0lBQzFCLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUU7SUFDL0IsTUFBTSxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUU7SUFDM0QsT0FBTyxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUU7SUFDN0QsS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRTtJQUMzQixPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7SUFDbEQsT0FBTyxFQUFFLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO0lBQzVDLEVBQUUsRUFBRSxF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LENBQUM7QUFDakUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOm5vLWFueVxuaW1wb3J0IHsgZGVlcENvcHkgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBvZiwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU0ZTY2hlbWEsIFNGU2NoZW1hRGVmaW5pdGlvbiwgU0ZTY2hlbWFFbnVtIH0gZnJvbSAnLi9zY2hlbWEnO1xuaW1wb3J0IHsgU0ZVSVNjaGVtYUl0ZW0sIFNGVUlTY2hlbWFJdGVtUnVuIH0gZnJvbSAnLi9zY2hlbWEvdWknO1xuXG5leHBvcnQgY29uc3QgRk9STUFUTUFQUyA9IHtcbiAgJ2RhdGUtdGltZSc6IHtcbiAgICB3aWRnZXQ6ICdkYXRlJyxcbiAgICBzaG93VGltZTogdHJ1ZSxcbiAgICBmb3JtYXQ6ICdZWVlZLU1NLUREVEhIOm1tOnNzWicsXG4gIH0sXG4gICdkYXRlJzogeyB3aWRnZXQ6ICdkYXRlJywgZm9ybWF0OiAnWVlZWS1NTS1ERCcgfSxcbiAgJ2Z1bGwtZGF0ZSc6IHsgd2lkZ2V0OiAnZGF0ZScsIGZvcm1hdDogJ1lZWVktTU0tREQnIH0sXG4gICd0aW1lJzogeyB3aWRnZXQ6ICd0aW1lJyB9LFxuICAnZnVsbC10aW1lJzogeyB3aWRnZXQ6ICd0aW1lJyB9LFxuICAnd2Vlayc6IHsgd2lkZ2V0OiAnZGF0ZScsIG1vZGU6ICd3ZWVrJywgZm9ybWF0OiAnWVlZWS1XVycgfSxcbiAgJ21vbnRoJzogeyB3aWRnZXQ6ICdkYXRlJywgbW9kZTogJ21vbnRoJywgZm9ybWF0OiAnWVlZWS1NTScgfSxcbiAgJ3VyaSc6IHsgd2lkZ2V0OiAndXBsb2FkJyB9LFxuICAnZW1haWwnOiB7IHdpZGdldDogJ2F1dG9jb21wbGV0ZScsIHR5cGU6ICdlbWFpbCcgfSxcbiAgJ2NvbG9yJzogeyB3aWRnZXQ6ICdzdHJpbmcnLCB0eXBlOiAnY29sb3InIH0sXG4gICcnOiB7IHdpZGdldDogJ3N0cmluZycgfSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0JsYW5rKG86IGFueSkge1xuICByZXR1cm4gbyA9PSBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9Cb29sKHZhbHVlOiBhbnksIGRlZmF1bHRWYWx1ZTogYm9vbGVhbikge1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/IGRlZmF1bHRWYWx1ZSA6IGAke3ZhbHVlfWAgIT09ICdmYWxzZSc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaSguLi5hcmdzKSB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gIGNvbnNvbGUud2FybiguLi5hcmdzKTtcbn1cblxuLyoqIOagueaNriBgJHJlZmAg5p+l5om+IGBkZWZpbml0aW9uc2AgKi9cbmZ1bmN0aW9uIGZpbmRTY2hlbWFEZWZpbml0aW9uKCRyZWY6IHN0cmluZywgZGVmaW5pdGlvbnM6IFNGU2NoZW1hRGVmaW5pdGlvbikge1xuICBjb25zdCBtYXRjaCA9IC9eI1xcL2RlZmluaXRpb25zXFwvKC4qKSQvLmV4ZWMoJHJlZik7XG4gIGlmIChtYXRjaCAmJiBtYXRjaFsxXSkge1xuICAgIC8vIHBhcnNlciBKU09OIFBvaW50ZXJcbiAgICBjb25zdCBwYXJ0cyA9IG1hdGNoWzFdLnNwbGl0KCcvJyk7XG4gICAgbGV0IGN1cnJlbnQ6IGFueSA9IGRlZmluaXRpb25zO1xuICAgIGZvciAobGV0IHBhcnQgb2YgcGFydHMpIHtcbiAgICAgIHBhcnQgPSBwYXJ0LnJlcGxhY2UoL34xL2csICcvJykucmVwbGFjZSgvfjAvZywgJ34nKTtcbiAgICAgIGlmIChjdXJyZW50Lmhhc093blByb3BlcnR5KHBhcnQpKSB7XG4gICAgICAgIGN1cnJlbnQgPSBjdXJyZW50W3BhcnRdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDb3VsZCBub3QgZmluZCBhIGRlZmluaXRpb24gZm9yICR7JHJlZn0uYCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjdXJyZW50O1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihgQ291bGQgbm90IGZpbmQgYSBkZWZpbml0aW9uIGZvciAkeyRyZWZ9LmApO1xufVxuXG4vKipcbiAqIOWPluWbnlNjaGVtYe+8jOW5tuWkhOeQhiBgJHJlZmAg55qE5YWz57O7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXRyaWV2ZVNjaGVtYShcbiAgc2NoZW1hOiBTRlNjaGVtYSxcbiAgZGVmaW5pdGlvbnM6IFNGU2NoZW1hRGVmaW5pdGlvbiA9IHt9LFxuKTogU0ZTY2hlbWEge1xuICBpZiAoc2NoZW1hLmhhc093blByb3BlcnR5KCckcmVmJykpIHtcbiAgICBjb25zdCAkcmVmU2NoZW1hID0gZmluZFNjaGVtYURlZmluaXRpb24oc2NoZW1hLiRyZWYsIGRlZmluaXRpb25zKTtcbiAgICAvLyByZW1vdmUgJHJlZiBwcm9wZXJ0eVxuICAgIGNvbnN0IHsgJHJlZiwgLi4ubG9jYWxTY2hlbWEgfSA9IHNjaGVtYTtcbiAgICByZXR1cm4gcmV0cmlldmVTY2hlbWEoeyAuLi4kcmVmU2NoZW1hLCAuLi5sb2NhbFNjaGVtYSB9LCBkZWZpbml0aW9ucyk7XG4gIH1cblxuICByZXR1cm4gc2NoZW1hO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUlmKHNjaGVtYTogU0ZTY2hlbWEsIHVpOiBTRlVJU2NoZW1hSXRlbVJ1bik6IFNGU2NoZW1hIHtcbiAgaWYgKCEoc2NoZW1hLmhhc093blByb3BlcnR5KCdpZicpICYmIHNjaGVtYS5oYXNPd25Qcm9wZXJ0eSgndGhlbicpKSkgcmV0dXJuO1xuXG4gIGlmICghc2NoZW1hLmlmLnByb3BlcnRpZXMpXG4gICAgdGhyb3cgbmV3IEVycm9yKGBpZjogZG9lcyBub3QgY29udGFpbiAncHJvcGVydGllcydgKTtcblxuICBjb25zdCBhbGxLZXlzID0gT2JqZWN0LmtleXMoc2NoZW1hLnByb3BlcnRpZXMpO1xuICBjb25zdCBpZktleXMgPSBPYmplY3Qua2V5cyhzY2hlbWEuaWYucHJvcGVydGllcyk7XG4gIGRldGVjdEtleShhbGxLZXlzLCBpZktleXMpO1xuICBkZXRlY3RLZXkoYWxsS2V5cywgc2NoZW1hLnRoZW4ucmVxdWlyZWQpO1xuICBzY2hlbWEucmVxdWlyZWQgPSBzY2hlbWEucmVxdWlyZWQuY29uY2F0KHNjaGVtYS50aGVuLnJlcXVpcmVkKTtcbiAgY29uc3QgaGFzRWxzZSA9IHNjaGVtYS5oYXNPd25Qcm9wZXJ0eSgnZWxzZScpO1xuICBpZiAoaGFzRWxzZSkge1xuICAgIGRldGVjdEtleShhbGxLZXlzLCBzY2hlbWEuZWxzZS5yZXF1aXJlZCk7XG4gICAgc2NoZW1hLnJlcXVpcmVkID0gc2NoZW1hLnJlcXVpcmVkLmNvbmNhdChzY2hlbWEuZWxzZS5yZXF1aXJlZCk7XG4gIH1cblxuICBjb25zdCB2aXNpYmxlSWY6IGFueSA9IHt9O1xuICBjb25zdCB2aXNpYmxlRWxzZTogYW55ID0ge307XG4gIGlmS2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgY29uc3QgY29uZCA9IHNjaGVtYS5pZi5wcm9wZXJ0aWVzW2tleV0uZW51bTtcbiAgICB2aXNpYmxlSWZba2V5XSA9IGNvbmQ7XG4gICAgaWYgKGhhc0Vsc2UpIHZpc2libGVFbHNlW2tleV0gPSAodmFsdWU6IGFueSkgPT4gIWNvbmQuaW5jbHVkZXModmFsdWUpO1xuICB9KTtcblxuICBzY2hlbWEudGhlbi5yZXF1aXJlZC5mb3JFYWNoKGtleSA9PiAodWlbYCQke2tleX1gXS52aXNpYmxlSWYgPSB2aXNpYmxlSWYpKTtcbiAgaWYgKGhhc0Vsc2UpXG4gICAgc2NoZW1hLmVsc2UucmVxdWlyZWQuZm9yRWFjaChcbiAgICAgIGtleSA9PiAodWlbYCQke2tleX1gXS52aXNpYmxlSWYgPSB2aXNpYmxlRWxzZSksXG4gICAgKTtcblxuICByZXR1cm4gc2NoZW1hO1xufVxuXG5mdW5jdGlvbiBkZXRlY3RLZXkoa2V5czogc3RyaW5nW10sIGRldGVjdEtleXM6IHN0cmluZ1tdKSB7XG4gIGRldGVjdEtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgIGlmICgha2V5cy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYGlmOiBwcm9wZXJ0aWVzIGRvZXMgbm90IGNvbnRhaW4gJyR7a2V5fSdgKTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb3JkZXJQcm9wZXJ0aWVzKHByb3BlcnRpZXM6IHN0cmluZ1tdLCBvcmRlcjogc3RyaW5nW10pIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KG9yZGVyKSkgcmV0dXJuIHByb3BlcnRpZXM7XG4gIGNvbnN0IGFycmF5VG9IYXNoID0gYXJyID0+XG4gICAgYXJyLnJlZHVjZSgocHJldiwgY3VycikgPT4ge1xuICAgICAgcHJldltjdXJyXSA9IHRydWU7XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9LCB7fSk7XG4gIGNvbnN0IGVycm9yUHJvcExpc3QgPSBhcnIgPT4gYHByb3BlcnR5IFske2Fyci5qb2luKGAnLCAnYCl9XWA7XG5cbiAgY29uc3QgcHJvcGVydHlIYXNoID0gYXJyYXlUb0hhc2gocHJvcGVydGllcyk7XG4gIGNvbnN0IG9yZGVySGFzaCA9IGFycmF5VG9IYXNoKG9yZGVyKTtcbiAgY29uc3QgZXh0cmFuZW91cyA9IG9yZGVyLmZpbHRlcihwcm9wID0+IHByb3AgIT09ICcqJyAmJiAhcHJvcGVydHlIYXNoW3Byb3BdKTtcbiAgaWYgKGV4dHJhbmVvdXMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYHVpIHNjaGVtYSBvcmRlciBsaXN0IGNvbnRhaW5zIGV4dHJhbmVvdXMgJHtlcnJvclByb3BMaXN0KGV4dHJhbmVvdXMpfWAsXG4gICAgKTtcbiAgfVxuICBjb25zdCByZXN0ID0gcHJvcGVydGllcy5maWx0ZXIocHJvcCA9PiAhb3JkZXJIYXNoW3Byb3BdKTtcbiAgY29uc3QgcmVzdEluZGV4ID0gb3JkZXIuaW5kZXhPZignKicpO1xuICBpZiAocmVzdEluZGV4ID09PSAtMSkge1xuICAgIGlmIChyZXN0Lmxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgdWkgc2NoZW1hIG9yZGVyIGxpc3QgZG9lcyBub3QgY29udGFpbiAke2Vycm9yUHJvcExpc3QocmVzdCl9YCxcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBvcmRlcjtcbiAgfVxuICBpZiAocmVzdEluZGV4ICE9PSBvcmRlci5sYXN0SW5kZXhPZignKicpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ3VpIHNjaGVtYSBvcmRlciBsaXN0IGNvbnRhaW5zIG1vcmUgdGhhbiBvbmUgd2lsZGNhcmQgaXRlbScsXG4gICAgKTtcbiAgfVxuICBjb25zdCBjb21wbGV0ZSA9IFsuLi5vcmRlcl07XG4gIGNvbXBsZXRlLnNwbGljZShyZXN0SW5kZXgsIDEsIC4uLnJlc3QpO1xuICByZXR1cm4gY29tcGxldGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRFbnVtKGxpc3Q6IGFueVtdLCBmb3JtRGF0YTogYW55LCByZWFkT25seTogYm9vbGVhbik6IFNGU2NoZW1hRW51bVtdIHtcbiAgaWYgKGlzQmxhbmsobGlzdCkgfHwgIUFycmF5LmlzQXJyYXkobGlzdCkgfHwgbGlzdC5sZW5ndGggPT09IDApIHJldHVybiBbXTtcbiAgaWYgKHR5cGVvZiBsaXN0WzBdICE9PSAnb2JqZWN0Jykge1xuICAgIGxpc3QgPSBsaXN0Lm1hcCgoaXRlbTogYW55KSA9PiB7XG4gICAgICByZXR1cm4geyBsYWJlbDogaXRlbSwgdmFsdWU6IGl0ZW0gfSBhcyBTRlNjaGVtYUVudW07XG4gICAgfSk7XG4gIH1cbiAgaWYgKGZvcm1EYXRhKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGZvcm1EYXRhKSkgZm9ybURhdGEgPSBbZm9ybURhdGFdO1xuICAgIGxpc3QuZm9yRWFjaCgoaXRlbTogU0ZTY2hlbWFFbnVtKSA9PiB7XG4gICAgICBpZiAofmZvcm1EYXRhLmluZGV4T2YoaXRlbS52YWx1ZSkpIGl0ZW0uY2hlY2tlZCA9IHRydWU7XG4gICAgfSk7XG4gIH1cbiAgLy8gZml4IGRpc2FibGVkIHN0YXR1c1xuICBpZiAocmVhZE9ubHkpIHtcbiAgICBsaXN0LmZvckVhY2goKGl0ZW06IFNGU2NoZW1hRW51bSkgPT4gaXRlbS5kaXNhYmxlZCA9IHRydWUpO1xuICB9XG4gIHJldHVybiBsaXN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29weUVudW0obGlzdDogYW55W10sIGZvcm1EYXRhOiBhbnksIHJlYWRPbmx5OiBib29sZWFuKSB7XG4gIHJldHVybiBnZXRFbnVtKGRlZXBDb3B5KGxpc3QgfHwgW10pLCBmb3JtRGF0YSwgcmVhZE9ubHkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0YShcbiAgc2NoZW1hOiBTRlNjaGVtYSxcbiAgdWk6IFNGVUlTY2hlbWFJdGVtLFxuICBmb3JtRGF0YTogYW55LFxuICBhc3luY0FyZ3M/OiBhbnksXG4pOiBPYnNlcnZhYmxlPFNGU2NoZW1hRW51bVtdPiB7XG4gIGlmICh0eXBlb2YgdWkuYXN5bmNEYXRhID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHVpXG4gICAgICAuYXN5bmNEYXRhKGFzeW5jQXJncylcbiAgICAgIC5waXBlKG1hcChsaXN0ID0+IGdldEVudW0obGlzdCwgZm9ybURhdGEsIHNjaGVtYS5yZWFkT25seSkpKTtcbiAgfVxuICByZXR1cm4gb2YoZ2V0Q29weUVudW0oc2NoZW1hLmVudW0sIGZvcm1EYXRhLCBzY2hlbWEucmVhZE9ubHkpKTtcbn1cbiJdfQ==