/**
 * `sessionStorage` storage, **lost after closing the browser**.
 *
 * ```ts
 * provideAuth(withJWT(), withSessionStorage())
 * ```
 */
export class SessionStorageStore {
    get(key) {
        return JSON.parse(sessionStorage.getItem(key) || '{}') || {};
    }
    set(key, value) {
        sessionStorage.setItem(key, JSON.stringify(value));
        return true;
    }
    remove(key) {
        sessionStorage.removeItem(key);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi1zdG9yYWdlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hdXRoL3NyYy9zdG9yZS9zZXNzaW9uLXN0b3JhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTs7Ozs7O0dBTUc7QUFDSCxNQUFNLE9BQU8sbUJBQW1CO0lBQzlCLEdBQUcsQ0FBQyxHQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQy9ELENBQUM7SUFFRCxHQUFHLENBQUMsR0FBVyxFQUFFLEtBQXlCO1FBQ3hDLGNBQWMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNuRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxNQUFNLENBQUMsR0FBVztRQUNoQixjQUFjLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElUb2tlbk1vZGVsIH0gZnJvbSAnLi4vdG9rZW4vaW50ZXJmYWNlJztcbmltcG9ydCB7IElTdG9yZSB9IGZyb20gJy4vaW50ZXJmYWNlJztcblxuLyoqXG4gKiBgc2Vzc2lvblN0b3JhZ2VgIHN0b3JhZ2UsICoqbG9zdCBhZnRlciBjbG9zaW5nIHRoZSBicm93c2VyKiouXG4gKlxuICogYGBgdHNcbiAqIHByb3ZpZGVBdXRoKHdpdGhKV1QoKSwgd2l0aFNlc3Npb25TdG9yYWdlKCkpXG4gKiBgYGBcbiAqL1xuZXhwb3J0IGNsYXNzIFNlc3Npb25TdG9yYWdlU3RvcmUgaW1wbGVtZW50cyBJU3RvcmUge1xuICBnZXQoa2V5OiBzdHJpbmcpOiBJVG9rZW5Nb2RlbCB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShrZXkpIHx8ICd7fScpIHx8IHt9O1xuICB9XG5cbiAgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogSVRva2VuTW9kZWwgfCBudWxsKTogYm9vbGVhbiB7XG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZW1vdmUoa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gIH1cbn1cbiJdfQ==