import { inject, Inject, Injectable } from '@angular/core';
import { BehaviorSubject, interval, Subject, filter, map, share } from 'rxjs';
import { AlainConfigService } from '@delon/util/config';
import { mergeConfig } from '../auth.config';
import { DA_STORE_TOKEN } from '../store/interface';
import * as i0 from "@angular/core";
import * as i1 from "@delon/util/config";
export function DA_SERVICE_TOKEN_FACTORY() {
    return new TokenService(inject(AlainConfigService), inject(DA_STORE_TOKEN));
}
/**
 * 维护Token信息服务，[在线文档](https://ng-alain.com/auth)
 */
class TokenService {
    constructor(configSrv, store) {
        this.store = store;
        this.refresh$ = new Subject();
        this.change$ = new BehaviorSubject(null);
        this._referrer = {};
        this._options = mergeConfig(configSrv);
    }
    get refresh() {
        this.builderRefresh();
        return this.refresh$.pipe(share());
    }
    get login_url() {
        return this._options.login_url;
    }
    get referrer() {
        return this._referrer;
    }
    get options() {
        return this._options;
    }
    set(data) {
        const res = this.store.set(this._options.store_key, data);
        this.change$.next(data);
        return res;
    }
    get(type) {
        const data = this.store.get(this._options.store_key);
        return type ? Object.assign(new type(), data) : data;
    }
    clear(options = { onlyToken: false }) {
        let data = null;
        if (options.onlyToken === true) {
            data = this.get();
            data.token = ``;
            this.set(data);
        }
        else {
            this.store.remove(this._options.store_key);
        }
        this.change$.next(data);
    }
    change() {
        return this.change$.pipe(share());
    }
    builderRefresh() {
        const { refreshTime, refreshOffset } = this._options;
        this.cleanRefresh();
        this.interval$ = interval(refreshTime)
            .pipe(map(() => {
            const item = this.get();
            const expired = item.expired || item.exp || 0;
            if (expired <= 0) {
                return null;
            }
            const curTime = new Date().valueOf() + refreshOffset;
            return expired <= curTime ? item : null;
        }), filter(v => v != null))
            .subscribe(res => this.refresh$.next(res));
    }
    cleanRefresh() {
        if (this.interval$ && !this.interval$.closed) {
            this.interval$.unsubscribe();
        }
    }
    ngOnDestroy() {
        this.cleanRefresh();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: TokenService, deps: [{ token: i1.AlainConfigService }, { token: DA_STORE_TOKEN }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: TokenService }); }
}
export { TokenService };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: TokenService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.AlainConfigService }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DA_STORE_TOKEN]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2F1dGgvc3JjL3Rva2VuL3Rva2VuLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFjLE9BQU8sRUFBZ0IsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFeEcsT0FBTyxFQUFtQixrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXpFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsY0FBYyxFQUFVLE1BQU0sb0JBQW9CLENBQUM7OztBQUc1RCxNQUFNLFVBQVUsd0JBQXdCO0lBQ3RDLE9BQU8sSUFBSSxZQUFZLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7QUFDOUUsQ0FBQztBQUVEOztHQUVHO0FBQ0gsTUFDYSxZQUFZO0lBT3ZCLFlBQVksU0FBNkIsRUFBa0MsS0FBYTtRQUFiLFVBQUssR0FBTCxLQUFLLENBQVE7UUFOaEYsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFlLENBQUM7UUFDdEMsWUFBTyxHQUFHLElBQUksZUFBZSxDQUFxQixJQUFJLENBQUMsQ0FBQztRQUV4RCxjQUFTLEdBQWlCLEVBQUUsQ0FBQztRQUluQyxJQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsSUFBSSxPQUFPO1FBQ1QsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFF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Q0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtZQUM1QyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzlCO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs4R0F0RlUsWUFBWSxvREFPNEIsY0FBYztrSEFQdEQsWUFBWTs7U0FBWixZQUFZOzJGQUFaLFlBQVk7a0JBRHhCLFVBQVU7OzBCQVFtQyxNQUFNOzJCQUFDLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmplY3QsIEluamVjdCwgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIGludGVydmFsLCBPYnNlcnZhYmxlLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24sIGZpbHRlciwgbWFwLCBzaGFyZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBBbGFpbkF1dGhDb25maWcsIEFsYWluQ29uZmlnU2VydmljZSB9IGZyb20gJ0BkZWxvbi91dGlsL2NvbmZpZyc7XG5cbmltcG9ydCB7IG1lcmdlQ29uZmlnIH0gZnJvbSAnLi4vYXV0aC5jb25maWcnO1xuaW1wb3J0IHsgREFfU1RPUkVfVE9LRU4sIElTdG9yZSB9IGZyb20gJy4uL3N0b3JlL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBBdXRoUmVmZXJyZXIsIElUb2tlbk1vZGVsLCBJVG9rZW5TZXJ2aWNlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gREFfU0VSVklDRV9UT0tFTl9GQUNUT1JZKCk6IElUb2tlblNlcnZpY2Uge1xuICByZXR1cm4gbmV3IFRva2VuU2VydmljZShpbmplY3QoQWxhaW5Db25maWdTZXJ2aWNlKSwgaW5qZWN0KERBX1NUT1JFX1RPS0VOKSk7XG59XG5cbi8qKlxuICog57u05oqkVG9rZW7kv6Hmga/mnI3liqHvvIxb5Zyo57q/5paH5qGjXShodHRwczovL25nLWFsYWluLmNvbS9hdXRoKVxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVG9rZW5TZXJ2aWNlIGltcGxlbWVudHMgSVRva2VuU2VydmljZSwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSByZWZyZXNoJCA9IG5ldyBTdWJqZWN0PElUb2tlbk1vZGVsPigpO1xuICBwcml2YXRlIGNoYW5nZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PElUb2tlbk1vZGVsIHwgbnVsbD4obnVsbCk7XG4gIHByaXZhdGUgaW50ZXJ2YWwkPzogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIF9yZWZlcnJlcjogQXV0aFJlZmVycmVyID0ge307XG4gIHByaXZhdGUgX29wdGlvbnM6IEFsYWluQXV0aENvbmZpZztcblxuICBjb25zdHJ1Y3Rvcihjb25maWdTcnY6IEFsYWluQ29uZmlnU2VydmljZSwgQEluamVjdChEQV9TVE9SRV9UT0tFTikgcHJpdmF0ZSBzdG9yZTogSVN0b3JlKSB7XG4gICAgdGhpcy5fb3B0aW9ucyA9IG1lcmdlQ29uZmlnKGNvbmZpZ1Nydik7XG4gIH1cblxuICBnZXQgcmVmcmVzaCgpOiBPYnNlcnZhYmxlPElUb2tlbk1vZGVsPiB7XG4gICAgdGhpcy5idWlsZGVyUmVmcmVzaCgpO1xuICAgIHJldHVybiB0aGlzLnJlZnJlc2gkLnBpcGUoc2hhcmUoKSk7XG4gIH1cblxuICBnZXQgbG9naW5fdXJsKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29wdGlvbnMubG9naW5fdXJsO1xuICB9XG5cbiAgZ2V0IHJlZmVycmVyKCk6IEF1dGhSZWZlcnJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3JlZmVycmVyO1xuICB9XG5cbiAgZ2V0IG9wdGlvbnMoKTogQWxhaW5BdXRoQ29uZmlnIHtcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9ucztcbiAgfVxuXG4gIHNldChkYXRhOiBJVG9rZW5Nb2RlbCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHJlcyA9IHRoaXMuc3RvcmUuc2V0KHRoaXMuX29wdGlvbnMuc3RvcmVfa2V5ISwgZGF0YSk7XG4gICAgdGhpcy5jaGFuZ2UkLm5leHQoZGF0YSk7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gIGdldCh0eXBlPzogYW55KTogYW55O1xuICBnZXQ8VCBleHRlbmRzIElUb2tlbk1vZGVsPih0eXBlPzogbmV3ICgpID0+IFQpOiBUO1xuICBnZXQ8VCBleHRlbmRzIElUb2tlbk1vZGVsPih0eXBlPzogbmV3ICgpID0+IFQpOiBUIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5zdG9yZS5nZXQodGhpcy5fb3B0aW9ucy5zdG9yZV9rZXkhKTtcbiAgICByZXR1cm4gdHlwZSA/IChPYmplY3QuYXNzaWduKG5ldyB0eXBlKCksIGRhdGEpIGFzIFQpIDogKGRhdGEgYXMgVCk7XG4gIH1cblxuICBjbGVhcihvcHRpb25zOiB7IG9ubHlUb2tlbjogYm9vbGVhbiB9ID0geyBvbmx5VG9rZW46IGZhbHNlIH0pOiB2b2lkIHtcbiAgICBsZXQgZGF0YTogSVRva2VuTW9kZWwgfCBudWxsID0gbnVsbDtcbiAgICBpZiAob3B0aW9ucy5vbmx5VG9rZW4gPT09IHRydWUpIHtcbiAgICAgIGRhdGEgPSB0aGlzLmdldCgpIGFzIElUb2tlbk1vZGVsO1xuICAgICAgZGF0YS50b2tlbiA9IGBgO1xuICAgICAgdGhpcy5zZXQoZGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RvcmUucmVtb3ZlKHRoaXMuX29wdGlvbnMuc3RvcmVfa2V5ISk7XG4gICAgfVxuICAgIHRoaXMuY2hhbmdlJC5uZXh0KGRhdGEpO1xuICB9XG5cbiAgY2hhbmdlKCk6IE9ic2VydmFibGU8SVRva2VuTW9kZWwgfCBudWxsPiB7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlJC5waXBlKHNoYXJlKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBidWlsZGVyUmVmcmVzaCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IHJlZnJlc2hUaW1lLCByZWZyZXNoT2Zmc2V0IH0gPSB0aGlzLl9vcHRpb25zO1xuICAgIHRoaXMuY2xlYW5SZWZyZXNoKCk7XG4gICAgdGhpcy5pbnRlcnZhbCQgPSBpbnRlcnZhbChyZWZyZXNoVGltZSlcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmdldCgpIGFzIElUb2tlbk1vZGVsO1xuICAgICAgICAgIGNvbnN0IGV4cGlyZWQgPSBpdGVtLmV4cGlyZWQgfHwgaXRlbS5leHAgfHwgMDtcbiAgICAgICAgICBpZiAoZXhwaXJlZCA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBjdXJUaW1lID0gbmV3IERhdGUoKS52YWx1ZU9mKCkgKyByZWZyZXNoT2Zmc2V0ITtcbiAgICAgICAgICByZXR1cm4gZXhwaXJlZCA8PSBjdXJUaW1lID8gaXRlbSA6IG51bGw7XG4gICAgICAgIH0pLFxuICAgICAgICBmaWx0ZXIodiA9PiB2ICE9IG51bGwpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLnJlZnJlc2gkLm5leHQocmVzISkpO1xuICB9XG5cbiAgcHJpdmF0ZSBjbGVhblJlZnJlc2goKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW50ZXJ2YWwkICYmICF0aGlzLmludGVydmFsJC5jbG9zZWQpIHtcbiAgICAgIHRoaXMuaW50ZXJ2YWwkLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhblJlZnJlc2goKTtcbiAgfVxufVxuIl19