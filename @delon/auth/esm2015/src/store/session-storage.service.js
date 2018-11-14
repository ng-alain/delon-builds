/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi1zdG9yYWdlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYXV0aC8iLCJzb3VyY2VzIjpbInNyYy9zdG9yZS9zZXNzaW9uLXN0b3JhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBR0EsTUFBTTs7Ozs7SUFDSixHQUFHLENBQUMsR0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUM5RDs7Ozs7O0lBRUQsR0FBRyxDQUFDLEdBQVcsRUFBRSxLQUFrQjtRQUNqQyxjQUFjLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDbkQsT0FBTyxJQUFJLENBQUM7S0FDYjs7Ozs7SUFFRCxNQUFNLENBQUMsR0FBVztRQUNoQixjQUFjLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ2hDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJU3RvcmUgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBJVG9rZW5Nb2RlbCB9IGZyb20gJy4uL3Rva2VuL2ludGVyZmFjZSc7XG5cbmV4cG9ydCBjbGFzcyBTZXNzaW9uU3RvcmFnZVN0b3JlIGltcGxlbWVudHMgSVN0b3JlIHtcbiAgZ2V0KGtleTogc3RyaW5nKTogSVRva2VuTW9kZWwge1xuICAgIHJldHVybiBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oa2V5KSB8fCAne30nKSB8fCB7fTtcbiAgfVxuXG4gIHNldChrZXk6IHN0cmluZywgdmFsdWU6IElUb2tlbk1vZGVsKTogYm9vbGVhbiB7XG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZW1vdmUoa2V5OiBzdHJpbmcpIHtcbiAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gIH1cbn1cbiJdfQ==