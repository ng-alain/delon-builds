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
export class TokenService {
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
}
TokenService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.1", ngImport: i0, type: TokenService, deps: [{ token: i1.AlainConfigService }, { token: DA_STORE_TOKEN }], target: i0.ɵɵFactoryTarget.Injectable });
TokenService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.1", ngImport: i0, type: TokenService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.1", ngImport: i0, type: TokenService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.AlainConfigService }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DA_STORE_TOKEN]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2F1dGgvc3JjL3Rva2VuL3Rva2VuLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFjLE9BQU8sRUFBZ0IsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFeEcsT0FBTyxFQUFtQixrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXpFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsY0FBYyxFQUFVLE1BQU0sb0JBQW9CLENBQUM7OztBQUc1RCxNQUFNLFVBQVUsd0JBQXdCO0lBQ3RDLE9BQU8sSUFBSSxZQUFZLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7QUFDOUUsQ0FBQztBQUVEOztHQUVHO0FBRUgsTUFBTSxPQUFPLFlBQVk7SUFPdkIsWUFBWSxTQUE2QixFQUFrQyxLQUFhO1FBQWIsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQU5oRixhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQWUsQ0FBQztRQUN0QyxZQUFPLEdBQUcsSUFBSSxlQUFlLENBQXFCLElBQUksQ0FBQyxDQUFDO1FBRXhELGNBQVMsR0FBaUIsRUFBRSxDQUFDO1FBSW5DLElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxJQUFJLE9BQU87UUFDVCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFL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SUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO1lBQzVDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDOUI7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDOzt5R0F0RlUsWUFBWSxvREFPNEIsY0FBYzs2R0FQdEQsWUFBWTsyRkFBWixZQUFZO2tCQUR4QixVQUFVOzswQkFRbUMsTUFBTTsyQkFBQyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0LCBJbmplY3QsIEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBpbnRlcnZhbCwgT2JzZXJ2YWJsZSwgU3ViamVjdCwgU3Vic2NyaXB0aW9uLCBmaWx0ZXIsIG1hcCwgc2hhcmUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQWxhaW5BdXRoQ29uZmlnLCBBbGFpbkNvbmZpZ1NlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbC9jb25maWcnO1xuXG5pbXBvcnQgeyBtZXJnZUNvbmZpZyB9IGZyb20gJy4uL2F1dGguY29uZmlnJztcbmltcG9ydCB7IERBX1NUT1JFX1RPS0VOLCBJU3RvcmUgfSBmcm9tICcuLi9zdG9yZS9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQXV0aFJlZmVycmVyLCBJVG9rZW5Nb2RlbCwgSVRva2VuU2VydmljZSB9IGZyb20gJy4vaW50ZXJmYWNlJztcblxuZXhwb3J0IGZ1bmN0aW9uIERBX1NFUlZJQ0VfVE9LRU5fRkFDVE9SWSgpOiBJVG9rZW5TZXJ2aWNlIHtcbiAgcmV0dXJuIG5ldyBUb2tlblNlcnZpY2UoaW5qZWN0KEFsYWluQ29uZmlnU2VydmljZSksIGluamVjdChEQV9TVE9SRV9UT0tFTikpO1xufVxuXG4vKipcbiAqIOe7tOaKpFRva2Vu5L+h5oGv5pyN5Yqh77yMW+WcqOe6v+aWh+aho10oaHR0cHM6Ly9uZy1hbGFpbi5jb20vYXV0aClcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRva2VuU2VydmljZSBpbXBsZW1lbnRzIElUb2tlblNlcnZpY2UsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgcmVmcmVzaCQgPSBuZXcgU3ViamVjdDxJVG9rZW5Nb2RlbD4oKTtcbiAgcHJpdmF0ZSBjaGFuZ2UkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxJVG9rZW5Nb2RlbCB8IG51bGw+KG51bGwpO1xuICBwcml2YXRlIGludGVydmFsJD86IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBfcmVmZXJyZXI6IEF1dGhSZWZlcnJlciA9IHt9O1xuICBwcml2YXRlIF9vcHRpb25zOiBBbGFpbkF1dGhDb25maWc7XG5cbiAgY29uc3RydWN0b3IoY29uZmlnU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UsIEBJbmplY3QoREFfU1RPUkVfVE9LRU4pIHByaXZhdGUgc3RvcmU6IElTdG9yZSkge1xuICAgIHRoaXMuX29wdGlvbnMgPSBtZXJnZUNvbmZpZyhjb25maWdTcnYpO1xuICB9XG5cbiAgZ2V0IHJlZnJlc2goKTogT2JzZXJ2YWJsZTxJVG9rZW5Nb2RlbD4ge1xuICAgIHRoaXMuYnVpbGRlclJlZnJlc2goKTtcbiAgICByZXR1cm4gdGhpcy5yZWZyZXNoJC5waXBlKHNoYXJlKCkpO1xuICB9XG5cbiAgZ2V0IGxvZ2luX3VybCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vcHRpb25zLmxvZ2luX3VybDtcbiAgfVxuXG4gIGdldCByZWZlcnJlcigpOiBBdXRoUmVmZXJyZXIge1xuICAgIHJldHVybiB0aGlzLl9yZWZlcnJlcjtcbiAgfVxuXG4gIGdldCBvcHRpb25zKCk6IEFsYWluQXV0aENvbmZpZyB7XG4gICAgcmV0dXJuIHRoaXMuX29wdGlvbnM7XG4gIH1cblxuICBzZXQoZGF0YTogSVRva2VuTW9kZWwpOiBib29sZWFuIHtcbiAgICBjb25zdCByZXMgPSB0aGlzLnN0b3JlLnNldCh0aGlzLl9vcHRpb25zLnN0b3JlX2tleSEsIGRhdGEpO1xuICAgIHRoaXMuY2hhbmdlJC5uZXh0KGRhdGEpO1xuICAgIHJldHVybiByZXM7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICBnZXQodHlwZT86IGFueSk6IGFueTtcbiAgZ2V0PFQgZXh0ZW5kcyBJVG9rZW5Nb2RlbD4odHlwZT86IG5ldyAoKSA9PiBUKTogVDtcbiAgZ2V0PFQgZXh0ZW5kcyBJVG9rZW5Nb2RlbD4odHlwZT86IG5ldyAoKSA9PiBUKTogVCB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuc3RvcmUuZ2V0KHRoaXMuX29wdGlvbnMuc3RvcmVfa2V5ISk7XG4gICAgcmV0dXJuIHR5cGUgPyAoT2JqZWN0LmFzc2lnbihuZXcgdHlwZSgpLCBkYXRhKSBhcyBUKSA6IChkYXRhIGFzIFQpO1xuICB9XG5cbiAgY2xlYXIob3B0aW9uczogeyBvbmx5VG9rZW46IGJvb2xlYW4gfSA9IHsgb25seVRva2VuOiBmYWxzZSB9KTogdm9pZCB7XG4gICAgbGV0IGRhdGE6IElUb2tlbk1vZGVsIHwgbnVsbCA9IG51bGw7XG4gICAgaWYgKG9wdGlvbnMub25seVRva2VuID09PSB0cnVlKSB7XG4gICAgICBkYXRhID0gdGhpcy5nZXQoKSBhcyBJVG9rZW5Nb2RlbDtcbiAgICAgIGRhdGEudG9rZW4gPSBgYDtcbiAgICAgIHRoaXMuc2V0KGRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0b3JlLnJlbW92ZSh0aGlzLl9vcHRpb25zLnN0b3JlX2tleSEpO1xuICAgIH1cbiAgICB0aGlzLmNoYW5nZSQubmV4dChkYXRhKTtcbiAgfVxuXG4gIGNoYW5nZSgpOiBPYnNlcnZhYmxlPElUb2tlbk1vZGVsIHwgbnVsbD4ge1xuICAgIHJldHVybiB0aGlzLmNoYW5nZSQucGlwZShzaGFyZSgpKTtcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRlclJlZnJlc2goKTogdm9pZCB7XG4gICAgY29uc3QgeyByZWZyZXNoVGltZSwgcmVmcmVzaE9mZnNldCB9ID0gdGhpcy5fb3B0aW9ucztcbiAgICB0aGlzLmNsZWFuUmVmcmVzaCgpO1xuICAgIHRoaXMuaW50ZXJ2YWwkID0gaW50ZXJ2YWwocmVmcmVzaFRpbWUpXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKCgpID0+IHtcbiAgICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5nZXQoKSBhcyBJVG9rZW5Nb2RlbDtcbiAgICAgICAgICBjb25zdCBleHBpcmVkID0gaXRlbS5leHBpcmVkIHx8IGl0ZW0uZXhwIHx8IDA7XG4gICAgICAgICAgaWYgKGV4cGlyZWQgPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgY3VyVGltZSA9IG5ldyBEYXRlKCkudmFsdWVPZigpICsgcmVmcmVzaE9mZnNldCE7XG4gICAgICAgICAgcmV0dXJuIGV4cGlyZWQgPD0gY3VyVGltZSA/IGl0ZW0gOiBudWxsO1xuICAgICAgICB9KSxcbiAgICAgICAgZmlsdGVyKHYgPT4gdiAhPSBudWxsKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZShyZXMgPT4gdGhpcy5yZWZyZXNoJC5uZXh0KHJlcyEpKTtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYW5SZWZyZXNoKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmludGVydmFsJCAmJiAhdGhpcy5pbnRlcnZhbCQuY2xvc2VkKSB7XG4gICAgICB0aGlzLmludGVydmFsJC51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYW5SZWZyZXNoKCk7XG4gIH1cbn1cbiJdfQ==