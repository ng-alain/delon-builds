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
TokenService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.7", ngImport: i0, type: TokenService, deps: [{ token: i1.AlainConfigService }, { token: DA_STORE_TOKEN }], target: i0.ɵɵFactoryTarget.Injectable });
TokenService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.7", ngImport: i0, type: TokenService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.7", ngImport: i0, type: TokenService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.AlainConfigService }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DA_STORE_TOKEN]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2F1dGgvc3JjL3Rva2VuL3Rva2VuLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFjLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDcEYsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFcEQsT0FBTyxFQUFtQixrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3pFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsY0FBYyxFQUFVLE1BQU0sb0JBQW9CLENBQUM7OztBQUc1RCxNQUFNLFVBQVUsd0JBQXdCO0lBQ3RDLE9BQU8sSUFBSSxZQUFZLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7QUFDOUUsQ0FBQztBQUVEOztHQUVHO0FBRUgsTUFBTSxPQUFPLFlBQVk7SUFPdkIsWUFBWSxTQUE2QixFQUFrQyxLQUFhO1FBQWIsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQU5oRixhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQWUsQ0FBQztRQUN0QyxZQUFPLEdBQUcsSUFBSSxlQUFlLENBQXFCLElBQUksQ0FBQyxDQUFDO1FBRXhELGNBQVMsR0FBaUIsRUFBRSxDQUFDO1FBSW5DLElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxJQUFJLE9BQU87UUFDVCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsT0FBTyxJ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TyxZQUFZO1FBQ2xCLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO1lBQzVDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDOUI7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDOzt5R0FyRlUsWUFBWSxvREFPNEIsY0FBYzs2R0FQdEQsWUFBWTsyRkFBWixZQUFZO2tCQUR4QixVQUFVOzswQkFRbUMsTUFBTTsyQkFBQyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0LCBJbmplY3QsIEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBpbnRlcnZhbCwgT2JzZXJ2YWJsZSwgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc2hhcmUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEFsYWluQXV0aENvbmZpZywgQWxhaW5Db25maWdTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwvY29uZmlnJztcbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuaW1wb3J0IHsgbWVyZ2VDb25maWcgfSBmcm9tICcuLi9hdXRoLmNvbmZpZyc7XG5pbXBvcnQgeyBEQV9TVE9SRV9UT0tFTiwgSVN0b3JlIH0gZnJvbSAnLi4vc3RvcmUvaW50ZXJmYWNlJztcbmltcG9ydCB7IEF1dGhSZWZlcnJlciwgSVRva2VuTW9kZWwsIElUb2tlblNlcnZpY2UgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBEQV9TRVJWSUNFX1RPS0VOX0ZBQ1RPUlkoKTogSVRva2VuU2VydmljZSB7XG4gIHJldHVybiBuZXcgVG9rZW5TZXJ2aWNlKGluamVjdChBbGFpbkNvbmZpZ1NlcnZpY2UpLCBpbmplY3QoREFfU1RPUkVfVE9LRU4pKTtcbn1cblxuLyoqXG4gKiDnu7TmiqRUb2tlbuS/oeaBr+acjeWKoe+8jFvlnKjnur/mlofmoaNdKGh0dHBzOi8vbmctYWxhaW4uY29tL2F1dGgpXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUb2tlblNlcnZpY2UgaW1wbGVtZW50cyBJVG9rZW5TZXJ2aWNlLCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIHJlZnJlc2gkID0gbmV3IFN1YmplY3Q8SVRva2VuTW9kZWw+KCk7XG4gIHByaXZhdGUgY2hhbmdlJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8SVRva2VuTW9kZWwgfCBudWxsPihudWxsKTtcbiAgcHJpdmF0ZSBpbnRlcnZhbCQ/OiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX3JlZmVycmVyOiBBdXRoUmVmZXJyZXIgPSB7fTtcbiAgcHJpdmF0ZSBfb3B0aW9uczogQWxhaW5BdXRoQ29uZmlnO1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlLCBASW5qZWN0KERBX1NUT1JFX1RPS0VOKSBwcml2YXRlIHN0b3JlOiBJU3RvcmUpIHtcbiAgICB0aGlzLl9vcHRpb25zID0gbWVyZ2VDb25maWcoY29uZmlnU3J2KTtcbiAgfVxuXG4gIGdldCByZWZyZXNoKCk6IE9ic2VydmFibGU8SVRva2VuTW9kZWw+IHtcbiAgICB0aGlzLmJ1aWxkZXJSZWZyZXNoKCk7XG4gICAgcmV0dXJuIHRoaXMucmVmcmVzaCQucGlwZShzaGFyZSgpKTtcbiAgfVxuXG4gIGdldCBsb2dpbl91cmwoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9ucy5sb2dpbl91cmw7XG4gIH1cblxuICBnZXQgcmVmZXJyZXIoKTogQXV0aFJlZmVycmVyIHtcbiAgICByZXR1cm4gdGhpcy5fcmVmZXJyZXI7XG4gIH1cblxuICBnZXQgb3B0aW9ucygpOiBBbGFpbkF1dGhDb25maWcge1xuICAgIHJldHVybiB0aGlzLl9vcHRpb25zO1xuICB9XG5cbiAgc2V0KGRhdGE6IElUb2tlbk1vZGVsKTogYm9vbGVhbiB7XG4gICAgY29uc3QgcmVzID0gdGhpcy5zdG9yZS5zZXQodGhpcy5fb3B0aW9ucy5zdG9yZV9rZXkhLCBkYXRhKTtcbiAgICB0aGlzLmNoYW5nZSQubmV4dChkYXRhKTtcbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgZ2V0KHR5cGU/OiBOelNhZmVBbnkpOiBOelNhZmVBbnk7XG4gIGdldDxUIGV4dGVuZHMgSVRva2VuTW9kZWw+KHR5cGU/OiBuZXcgKCkgPT4gVCk6IFQ7XG4gIGdldDxUIGV4dGVuZHMgSVRva2VuTW9kZWw+KHR5cGU/OiBuZXcgKCkgPT4gVCk6IFQge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLnN0b3JlLmdldCh0aGlzLl9vcHRpb25zLnN0b3JlX2tleSEpO1xuICAgIHJldHVybiB0eXBlID8gKE9iamVjdC5hc3NpZ24obmV3IHR5cGUoKSwgZGF0YSkgYXMgVCkgOiAoZGF0YSBhcyBUKTtcbiAgfVxuXG4gIGNsZWFyKG9wdGlvbnM6IHsgb25seVRva2VuOiBib29sZWFuIH0gPSB7IG9ubHlUb2tlbjogZmFsc2UgfSk6IHZvaWQge1xuICAgIGxldCBkYXRhOiBJVG9rZW5Nb2RlbCB8IG51bGwgPSBudWxsO1xuICAgIGlmIChvcHRpb25zLm9ubHlUb2tlbiA9PT0gdHJ1ZSkge1xuICAgICAgZGF0YSA9IHRoaXMuZ2V0KCkgYXMgSVRva2VuTW9kZWw7XG4gICAgICBkYXRhLnRva2VuID0gYGA7XG4gICAgICB0aGlzLnNldChkYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdG9yZS5yZW1vdmUodGhpcy5fb3B0aW9ucy5zdG9yZV9rZXkhKTtcbiAgICB9XG4gICAgdGhpcy5jaGFuZ2UkLm5leHQoZGF0YSk7XG4gIH1cblxuICBjaGFuZ2UoKTogT2JzZXJ2YWJsZTxJVG9rZW5Nb2RlbCB8IG51bGw+IHtcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UkLnBpcGUoc2hhcmUoKSk7XG4gIH1cblxuICBwcml2YXRlIGJ1aWxkZXJSZWZyZXNoKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgcmVmcmVzaFRpbWUsIHJlZnJlc2hPZmZzZXQgfSA9IHRoaXMuX29wdGlvbnM7XG4gICAgdGhpcy5jbGVhblJlZnJlc2goKTtcbiAgICB0aGlzLmludGVydmFsJCA9IGludGVydmFsKHJlZnJlc2hUaW1lKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgoKSA9PiB7XG4gICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuZ2V0KCkgYXMgSVRva2VuTW9kZWw7XG4gICAgICAgICAgY29uc3QgZXhwaXJlZCA9IGl0ZW0uZXhwaXJlZCB8fCBpdGVtLmV4cCB8fCAwO1xuICAgICAgICAgIGlmIChleHBpcmVkIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGN1clRpbWUgPSBuZXcgRGF0ZSgpLnZhbHVlT2YoKSArIHJlZnJlc2hPZmZzZXQhO1xuICAgICAgICAgIHJldHVybiBleHBpcmVkIDw9IGN1clRpbWUgPyBpdGVtIDogbnVsbDtcbiAgICAgICAgfSksXG4gICAgICAgIGZpbHRlcih2ID0+IHYgIT0gbnVsbClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUocmVzID0+IHRoaXMucmVmcmVzaCQubmV4dChyZXMhKSk7XG4gIH1cblxuICBwcml2YXRlIGNsZWFuUmVmcmVzaCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbnRlcnZhbCQgJiYgIXRoaXMuaW50ZXJ2YWwkLmNsb3NlZCkge1xuICAgICAgdGhpcy5pbnRlcnZhbCQudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFuUmVmcmVzaCgpO1xuICB9XG59XG4iXX0=