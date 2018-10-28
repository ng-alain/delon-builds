/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { InjectionToken, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import * as i0 from "@angular/core";
/**
 * @record
 */
export function AlainI18NService() { }
/* TODO: handle strange member:
[key: string]: any;
*/
/** @type {?} */
AlainI18NService.prototype.use;
/** @type {?} */
AlainI18NService.prototype.getLangs;
/** @type {?} */
AlainI18NService.prototype.fanyi;
/** @type {?} */
AlainI18NService.prototype.change;
/** @type {?} */
export var ALAIN_I18N_TOKEN = new InjectionToken('alainTranslatorToken');
var AlainI18NServiceFake = /** @class */ (function () {
    function AlainI18NServiceFake() {
        this.change$ = new BehaviorSubject(null);
    }
    Object.defineProperty(AlainI18NServiceFake.prototype, "change", {
        get: /**
         * @return {?}
         */
        function () {
            return this.change$.asObservable().pipe(filter(function (w) { return w != null; }));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} lang
     * @return {?}
     */
    AlainI18NServiceFake.prototype.use = /**
     * @param {?} lang
     * @return {?}
     */
    function (lang) {
        this.change$.next(lang);
    };
    /**
     * @return {?}
     */
    AlainI18NServiceFake.prototype.getLangs = /**
     * @return {?}
     */
    function () {
        return [];
    };
    /**
     * @param {?} key
     * @return {?}
     */
    AlainI18NServiceFake.prototype.fanyi = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return key;
    };
    AlainI18NServiceFake.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ AlainI18NServiceFake.ngInjectableDef = i0.defineInjectable({ factory: function AlainI18NServiceFake_Factory() { return new AlainI18NServiceFake(); }, token: AlainI18NServiceFake, providedIn: "root" });
    return AlainI18NServiceFake;
}());
export { AlainI18NServiceFake };
if (false) {
    /** @type {?} */
    AlainI18NServiceFake.prototype.change$;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi90aGVtZS8iLCJzb3VyY2VzIjpbInNyYy9zZXJ2aWNlcy9pMThuL2kxOG4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNELE9BQU8sRUFBYyxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjeEMsV0FBYSxnQkFBZ0IsR0FBRyxJQUFJLGNBQWMsQ0FDaEQsc0JBQXNCLENBQ3ZCLENBQUM7Ozt1QkFJa0IsSUFBSSxlQUFlLENBQVMsSUFBSSxDQUFDOztJQUVuRCxzQkFBSSx3Q0FBTTs7OztRQUFWO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLElBQUksSUFBSSxFQUFULENBQVMsQ0FBQyxDQUFDLENBQUM7U0FDakU7OztPQUFBOzs7OztJQUVELGtDQUFHOzs7O0lBQUgsVUFBSSxJQUFZO1FBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDekI7Ozs7SUFFRCx1Q0FBUTs7O0lBQVI7UUFDRSxPQUFPLEVBQUUsQ0FBQztLQUNYOzs7OztJQUVELG9DQUFLOzs7O0lBQUwsVUFBTSxHQUFXO1FBQ2YsT0FBTyxHQUFHLENBQUM7S0FDWjs7Z0JBbEJGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7OzsrQkFwQmxDOztTQXFCYSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWxhaW5JMThOU2VydmljZSB7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcblxuICB1c2UobGFuZzogc3RyaW5nKTogdm9pZDtcblxuICBnZXRMYW5ncygpOiBhbnlbXTtcblxuICBmYW55aShrZXk6IHN0cmluZyk6IGFueTtcblxuICByZWFkb25seSBjaGFuZ2U6IE9ic2VydmFibGU8c3RyaW5nPjtcbn1cblxuZXhwb3J0IGNvbnN0IEFMQUlOX0kxOE5fVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW48QWxhaW5JMThOU2VydmljZT4oXG4gICdhbGFpblRyYW5zbGF0b3JUb2tlbicsXG4pO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEFsYWluSTE4TlNlcnZpY2VGYWtlIGltcGxlbWVudHMgQWxhaW5JMThOU2VydmljZSB7XG4gIHByaXZhdGUgY2hhbmdlJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPihudWxsKTtcblxuICBnZXQgY2hhbmdlKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlJC5hc09ic2VydmFibGUoKS5waXBlKGZpbHRlcih3ID0+IHcgIT0gbnVsbCkpO1xuICB9XG5cbiAgdXNlKGxhbmc6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuY2hhbmdlJC5uZXh0KGxhbmcpO1xuICB9XG5cbiAgZ2V0TGFuZ3MoKTogYW55W10ge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGZhbnlpKGtleTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGtleTtcbiAgfVxufVxuIl19