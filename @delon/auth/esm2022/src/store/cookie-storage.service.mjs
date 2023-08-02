/**
 * `cookie` storage
 *
 * ```ts
 * // global-config.module.ts
 * { provide: DA_STORE_TOKEN, useClass: CookieStorageStore, deps: [CookieService] }
 * ```
 */
export class CookieStorageStore {
    constructor(srv) {
        this.srv = srv;
    }
    get(key) {
        try {
            return JSON.parse(this.srv.get(key) || '{}');
        }
        catch (ex) {
            if (typeof ngDevMode === 'undefined' || ngDevMode) {
                console.error(`CookieStorageStore: Invalid key-value format ${key}`, ex);
            }
            return {};
        }
    }
    set(key, value) {
        const expires = (value?.expired ?? 0) / 1e3;
        this.srv.put(key, JSON.stringify(value ?? {}), { expires });
        return true;
    }
    remove(key) {
        this.srv.remove(key);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29va2llLXN0b3JhZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2F1dGgvc3JjL3N0b3JlL2Nvb2tpZS1zdG9yYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7Ozs7Ozs7R0FPRztBQUNILE1BQU0sT0FBTyxrQkFBa0I7SUFDN0IsWUFBb0IsR0FBa0I7UUFBbEIsUUFBRyxHQUFILEdBQUcsQ0FBZTtJQUFHLENBQUM7SUFFMUMsR0FBRyxDQUFDLEdBQVc7UUFDYixJQUFJO1lBQ0YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDO1NBQzlDO1FBQUMsT0FBTyxFQUFFLEVBQUU7WUFDWCxJQUFJLE9BQU8sU0FBUyxLQUFLLFdBQVcsSUFBSSxTQUFTLEVBQUU7Z0JBQ2pELE9BQU8sQ0FBQyxLQUFLLENBQUMsZ0RBQWdELEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2FBQzFFO1lBQ0QsT0FBTyxFQUFpQixDQUFDO1NBQzFCO0lBQ0gsQ0FBQztJQUVELEdBQUcsQ0FBQyxHQUFXLEVBQUUsS0FBcUM7UUFDcEQsTUFBTSxPQUFPLEdBQUcsQ0FBQyxLQUFLLEVBQUUsT0FBTyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUM1QyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQzVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELE1BQU0sQ0FBQyxHQUFXO1FBQ2hCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvb2tpZVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbC9icm93c2VyJztcblxuaW1wb3J0IHsgSVN0b3JlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSVRva2VuTW9kZWwgfSBmcm9tICcuLi90b2tlbi9pbnRlcmZhY2UnO1xuXG4vKipcbiAqIGBjb29raWVgIHN0b3JhZ2VcbiAqXG4gKiBgYGB0c1xuICogLy8gZ2xvYmFsLWNvbmZpZy5tb2R1bGUudHNcbiAqIHsgcHJvdmlkZTogREFfU1RPUkVfVE9LRU4sIHVzZUNsYXNzOiBDb29raWVTdG9yYWdlU3RvcmUsIGRlcHM6IFtDb29raWVTZXJ2aWNlXSB9XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGNsYXNzIENvb2tpZVN0b3JhZ2VTdG9yZSBpbXBsZW1lbnRzIElTdG9yZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3J2OiBDb29raWVTZXJ2aWNlKSB7fVxuXG4gIGdldChrZXk6IHN0cmluZyk6IElUb2tlbk1vZGVsIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UodGhpcy5zcnYuZ2V0KGtleSkgfHwgJ3t9Jyk7XG4gICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgIGlmICh0eXBlb2YgbmdEZXZNb2RlID09PSAndW5kZWZpbmVkJyB8fCBuZ0Rldk1vZGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgQ29va2llU3RvcmFnZVN0b3JlOiBJbnZhbGlkIGtleS12YWx1ZSBmb3JtYXQgJHtrZXl9YCwgZXgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHt9IGFzIElUb2tlbk1vZGVsO1xuICAgIH1cbiAgfVxuXG4gIHNldChrZXk6IHN0cmluZywgdmFsdWU6IElUb2tlbk1vZGVsIHwgbnVsbCB8IHVuZGVmaW5lZCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGV4cGlyZXMgPSAodmFsdWU/LmV4cGlyZWQgPz8gMCkgLyAxZTM7XG4gICAgdGhpcy5zcnYucHV0KGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUgPz8ge30pLCB7IGV4cGlyZXMgfSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZW1vdmUoa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnNydi5yZW1vdmUoa2V5KTtcbiAgfVxufVxuIl19