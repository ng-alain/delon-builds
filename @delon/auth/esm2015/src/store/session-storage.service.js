/**
 * @fileoverview added by tsickle
 * Generated from: src/store/session-storage.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * `sessionStorage` storage, **lost after closing the browser**.
 *
 * ```ts
 * // global-config.module.ts
 * { provide: DA_STORE_TOKEN, useClass: SessionStorageStore }
 * ```
 */
export class SessionStorageStore {
    /**
     * @param {?} key
     * @return {?}
     */
    get(key) {
        return JSON.parse(sessionStorage.getItem(key) || '{}') || {};
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    set(key, value) {
        sessionStorage.setItem(key, JSON.stringify(value));
        return true;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    remove(key) {
        sessionStorage.removeItem(key);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi1zdG9yYWdlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vcGFja2FnZXMvYXV0aC8iLCJzb3VyY2VzIjpbInNyYy9zdG9yZS9zZXNzaW9uLXN0b3JhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBV0EsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7SUFDOUIsR0FBRyxDQUFDLEdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDL0QsQ0FBQzs7Ozs7O0lBRUQsR0FBRyxDQUFDLEdBQVcsRUFBRSxLQUF5QjtRQUN4QyxjQUFjLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDbkQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxHQUFXO1FBQ2hCLGNBQWMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDakMsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVRva2VuTW9kZWwgfSBmcm9tICcuLi90b2tlbi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSVN0b3JlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuXG4vKipcbiAqIGBzZXNzaW9uU3RvcmFnZWAgc3RvcmFnZSwgKipsb3N0IGFmdGVyIGNsb3NpbmcgdGhlIGJyb3dzZXIqKi5cbiAqXG4gKiBgYGB0c1xuICogLy8gZ2xvYmFsLWNvbmZpZy5tb2R1bGUudHNcbiAqIHsgcHJvdmlkZTogREFfU1RPUkVfVE9LRU4sIHVzZUNsYXNzOiBTZXNzaW9uU3RvcmFnZVN0b3JlIH1cbiAqIGBgYFxuICovXG5leHBvcnQgY2xhc3MgU2Vzc2lvblN0b3JhZ2VTdG9yZSBpbXBsZW1lbnRzIElTdG9yZSB7XG4gIGdldChrZXk6IHN0cmluZyk6IElUb2tlbk1vZGVsIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGtleSkgfHwgJ3t9JykgfHwge307XG4gIH1cblxuICBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBJVG9rZW5Nb2RlbCB8IG51bGwpOiBib29sZWFuIHtcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJlbW92ZShrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgfVxufVxuIl19