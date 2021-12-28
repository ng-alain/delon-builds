import { inject, Inject, Injectable } from '@angular/core';
import { BehaviorSubject, interval, Subject } from 'rxjs';
import { filter, map, share } from 'rxjs/operators';
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
TokenService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: TokenService, deps: [{ token: i1.AlainConfigService }, { token: DA_STORE_TOKEN }], target: i0.ɵɵFactoryTarget.Injectable });
TokenService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: TokenService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: TokenService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.AlainConfigService }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DA_STORE_TOKEN]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2F1dGgvc3JjL3Rva2VuL3Rva2VuLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFjLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDcEYsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFcEQsT0FBTyxFQUFtQixrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3pFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsY0FBYyxFQUFVLE1BQU0sb0JBQW9CLENBQUM7OztBQUc1RCxNQUFNLFVBQVUsd0JBQXdCO0lBQ3RDLE9BQU8sSUFBSSxZQUFZLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7QUFDOUUsQ0FBQztBQUVEOztHQUVHO0FBRUgsTUFBTSxPQUFPLFlBQVk7SUFPdkIsWUFBWSxTQUE2QixFQUFrQyxLQUFhO1FBQWIsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQU5oRixhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQWUsQ0FBQztRQUN0QyxZQUFPLEdBQUcsSUFBSSxlQUFlLENBQXFCLElBQUksQ0FBQyxDQUFDO1FBRXhELGNBQVMsR0FBaUIsRUFBRSxDQUFDO1FBSW5DLElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxJQUFJLE9BQU87UUFDVCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsT0FBTyxJ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TyxZQUFZO1FBQ2xCLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO1lBQzVDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDOUI7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDOzt5R0FwRlUsWUFBWSxvREFPNEIsY0FBYzs2R0FQdEQsWUFBWTsyRkFBWixZQUFZO2tCQUR4QixVQUFVOzswQkFRbUMsTUFBTTsyQkFBQyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0LCBJbmplY3QsIEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBpbnRlcnZhbCwgT2JzZXJ2YWJsZSwgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc2hhcmUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEFsYWluQXV0aENvbmZpZywgQWxhaW5Db25maWdTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwvY29uZmlnJztcbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuaW1wb3J0IHsgbWVyZ2VDb25maWcgfSBmcm9tICcuLi9hdXRoLmNvbmZpZyc7XG5pbXBvcnQgeyBEQV9TVE9SRV9UT0tFTiwgSVN0b3JlIH0gZnJvbSAnLi4vc3RvcmUvaW50ZXJmYWNlJztcbmltcG9ydCB7IEF1dGhSZWZlcnJlciwgSVRva2VuTW9kZWwsIElUb2tlblNlcnZpY2UgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBEQV9TRVJWSUNFX1RPS0VOX0ZBQ1RPUlkoKTogSVRva2VuU2VydmljZSB7XG4gIHJldHVybiBuZXcgVG9rZW5TZXJ2aWNlKGluamVjdChBbGFpbkNvbmZpZ1NlcnZpY2UpLCBpbmplY3QoREFfU1RPUkVfVE9LRU4pKTtcbn1cblxuLyoqXG4gKiDnu7TmiqRUb2tlbuS/oeaBr+acjeWKoe+8jFvlnKjnur/mlofmoaNdKGh0dHBzOi8vbmctYWxhaW4uY29tL2F1dGgpXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUb2tlblNlcnZpY2UgaW1wbGVtZW50cyBJVG9rZW5TZXJ2aWNlLCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIHJlZnJlc2gkID0gbmV3IFN1YmplY3Q8SVRva2VuTW9kZWw+KCk7XG4gIHByaXZhdGUgY2hhbmdlJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8SVRva2VuTW9kZWwgfCBudWxsPihudWxsKTtcbiAgcHJpdmF0ZSBpbnRlcnZhbCQ6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBfcmVmZXJyZXI6IEF1dGhSZWZlcnJlciA9IHt9O1xuICBwcml2YXRlIF9vcHRpb25zOiBBbGFpbkF1dGhDb25maWc7XG5cbiAgY29uc3RydWN0b3IoY29uZmlnU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UsIEBJbmplY3QoREFfU1RPUkVfVE9LRU4pIHByaXZhdGUgc3RvcmU6IElTdG9yZSkge1xuICAgIHRoaXMuX29wdGlvbnMgPSBtZXJnZUNvbmZpZyhjb25maWdTcnYpO1xuICB9XG5cbiAgZ2V0IHJlZnJlc2goKTogT2JzZXJ2YWJsZTxJVG9rZW5Nb2RlbD4ge1xuICAgIHRoaXMuYnVpbGRlclJlZnJlc2goKTtcbiAgICByZXR1cm4gdGhpcy5yZWZyZXNoJC5waXBlKHNoYXJlKCkpO1xuICB9XG5cbiAgZ2V0IGxvZ2luX3VybCgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9vcHRpb25zLmxvZ2luX3VybDtcbiAgfVxuXG4gIGdldCByZWZlcnJlcigpOiBBdXRoUmVmZXJyZXIge1xuICAgIHJldHVybiB0aGlzLl9yZWZlcnJlcjtcbiAgfVxuXG4gIGdldCBvcHRpb25zKCk6IEFsYWluQXV0aENvbmZpZyB7XG4gICAgcmV0dXJuIHRoaXMuX29wdGlvbnM7XG4gIH1cblxuICBzZXQoZGF0YTogSVRva2VuTW9kZWwpOiBib29sZWFuIHtcbiAgICBjb25zdCByZXMgPSB0aGlzLnN0b3JlLnNldCh0aGlzLl9vcHRpb25zLnN0b3JlX2tleSEsIGRhdGEpO1xuICAgIHRoaXMuY2hhbmdlJC5uZXh0KGRhdGEpO1xuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBnZXQodHlwZT86IE56U2FmZUFueSk6IE56U2FmZUFueTtcbiAgZ2V0PFQgZXh0ZW5kcyBJVG9rZW5Nb2RlbD4odHlwZT86IG5ldyAoKSA9PiBUKTogVCB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuc3RvcmUuZ2V0KHRoaXMuX29wdGlvbnMuc3RvcmVfa2V5ISk7XG4gICAgcmV0dXJuIHR5cGUgPyAoT2JqZWN0LmFzc2lnbihuZXcgdHlwZSgpLCBkYXRhKSBhcyBUKSA6IChkYXRhIGFzIFQpO1xuICB9XG5cbiAgY2xlYXIob3B0aW9uczogeyBvbmx5VG9rZW46IGJvb2xlYW4gfSA9IHsgb25seVRva2VuOiBmYWxzZSB9KTogdm9pZCB7XG4gICAgbGV0IGRhdGE6IElUb2tlbk1vZGVsIHwgbnVsbCA9IG51bGw7XG4gICAgaWYgKG9wdGlvbnMub25seVRva2VuID09PSB0cnVlKSB7XG4gICAgICBkYXRhID0gdGhpcy5nZXQoKSBhcyBJVG9rZW5Nb2RlbDtcbiAgICAgIGRhdGEudG9rZW4gPSBgYDtcbiAgICAgIHRoaXMuc2V0KGRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0b3JlLnJlbW92ZSh0aGlzLl9vcHRpb25zLnN0b3JlX2tleSEpO1xuICAgIH1cbiAgICB0aGlzLmNoYW5nZSQubmV4dChkYXRhKTtcbiAgfVxuXG4gIGNoYW5nZSgpOiBPYnNlcnZhYmxlPElUb2tlbk1vZGVsIHwgbnVsbD4ge1xuICAgIHJldHVybiB0aGlzLmNoYW5nZSQucGlwZShzaGFyZSgpKTtcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRlclJlZnJlc2goKTogdm9pZCB7XG4gICAgY29uc3QgeyByZWZyZXNoVGltZSwgcmVmcmVzaE9mZnNldCB9ID0gdGhpcy5fb3B0aW9ucztcbiAgICB0aGlzLmNsZWFuUmVmcmVzaCgpO1xuICAgIHRoaXMuaW50ZXJ2YWwkID0gaW50ZXJ2YWwocmVmcmVzaFRpbWUpXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKCgpID0+IHtcbiAgICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5nZXQoKSBhcyBJVG9rZW5Nb2RlbDtcbiAgICAgICAgICBjb25zdCBleHBpcmVkID0gaXRlbS5leHBpcmVkIHx8IGl0ZW0uZXhwIHx8IDA7XG4gICAgICAgICAgaWYgKGV4cGlyZWQgPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgY3VyVGltZSA9IG5ldyBEYXRlKCkudmFsdWVPZigpICsgcmVmcmVzaE9mZnNldCE7XG4gICAgICAgICAgcmV0dXJuIGV4cGlyZWQgPD0gY3VyVGltZSA/IGl0ZW0gOiBudWxsO1xuICAgICAgICB9KSxcbiAgICAgICAgZmlsdGVyKHYgPT4gdiAhPSBudWxsKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZShyZXMgPT4gdGhpcy5yZWZyZXNoJC5uZXh0KHJlcyEpKTtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYW5SZWZyZXNoKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmludGVydmFsJCAmJiAhdGhpcy5pbnRlcnZhbCQuY2xvc2VkKSB7XG4gICAgICB0aGlzLmludGVydmFsJC51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYW5SZWZyZXNoKCk7XG4gIH1cbn1cbiJdfQ==