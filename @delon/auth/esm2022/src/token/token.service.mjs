import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, interval, Subject, filter, map, share } from 'rxjs';
import { AlainConfigService } from '@delon/util/config';
import { mergeConfig } from '../auth.config';
import { DA_STORE_TOKEN } from '../store/interface';
import * as i0 from "@angular/core";
import * as i1 from "@delon/util/config";
export function DA_SERVICE_TOKEN_FACTORY() {
    return new TokenService(inject(AlainConfigService));
}
/**
 * 维护Token信息服务，[在线文档](https://ng-alain.com/auth)
 */
export class TokenService {
    constructor(configSrv) {
        this.store = inject(DA_STORE_TOKEN);
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.5", ngImport: i0, type: TokenService, deps: [{ token: i1.AlainConfigService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.0.5", ngImport: i0, type: TokenService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.5", ngImport: i0, type: TokenService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.AlainConfigService }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2F1dGgvc3JjL3Rva2VuL3Rva2VuLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQWMsT0FBTyxFQUFnQixNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUV4RyxPQUFPLEVBQW1CLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFekUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7O0FBR3BELE1BQU0sVUFBVSx3QkFBd0I7SUFDdEMsT0FBTyxJQUFJLFlBQVksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO0FBQ3RELENBQUM7QUFFRDs7R0FFRztBQUVILE1BQU0sT0FBTyxZQUFZO0lBUXZCLFlBQVksU0FBNkI7UUFQeEIsVUFBSyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN4QyxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQWUsQ0FBQztRQUN0QyxZQUFPLEdBQUcsSUFBSSxlQUFlLENBQXFCLElBQUksQ0FBQyxDQUFDO1FBRXhELGNBQVMsR0FBaUIsRUFBRSxDQUFDO1FBSW5DLElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxJQUFJLE9BQU87UUFDVCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFF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SUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDN0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMvQixDQUFDO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs4R0F2RlUsWUFBWTtrSEFBWixZQUFZOzsyRkFBWixZQUFZO2tCQUR4QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0LCBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgaW50ZXJ2YWwsIE9ic2VydmFibGUsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiwgZmlsdGVyLCBtYXAsIHNoYXJlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEFsYWluQXV0aENvbmZpZywgQWxhaW5Db25maWdTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwvY29uZmlnJztcblxuaW1wb3J0IHsgbWVyZ2VDb25maWcgfSBmcm9tICcuLi9hdXRoLmNvbmZpZyc7XG5pbXBvcnQgeyBEQV9TVE9SRV9UT0tFTiB9IGZyb20gJy4uL3N0b3JlL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBBdXRoUmVmZXJyZXIsIElUb2tlbk1vZGVsLCBJVG9rZW5TZXJ2aWNlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gREFfU0VSVklDRV9UT0tFTl9GQUNUT1JZKCk6IElUb2tlblNlcnZpY2Uge1xuICByZXR1cm4gbmV3IFRva2VuU2VydmljZShpbmplY3QoQWxhaW5Db25maWdTZXJ2aWNlKSk7XG59XG5cbi8qKlxuICog57u05oqkVG9rZW7kv6Hmga/mnI3liqHvvIxb5Zyo57q/5paH5qGjXShodHRwczovL25nLWFsYWluLmNvbS9hdXRoKVxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVG9rZW5TZXJ2aWNlIGltcGxlbWVudHMgSVRva2VuU2VydmljZSwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSByZWFkb25seSBzdG9yZSA9IGluamVjdChEQV9TVE9SRV9UT0tFTik7XG4gIHByaXZhdGUgcmVmcmVzaCQgPSBuZXcgU3ViamVjdDxJVG9rZW5Nb2RlbD4oKTtcbiAgcHJpdmF0ZSBjaGFuZ2UkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxJVG9rZW5Nb2RlbCB8IG51bGw+KG51bGwpO1xuICBwcml2YXRlIGludGVydmFsJD86IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBfcmVmZXJyZXI6IEF1dGhSZWZlcnJlciA9IHt9O1xuICBwcml2YXRlIF9vcHRpb25zOiBBbGFpbkF1dGhDb25maWc7XG5cbiAgY29uc3RydWN0b3IoY29uZmlnU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UpIHtcbiAgICB0aGlzLl9vcHRpb25zID0gbWVyZ2VDb25maWcoY29uZmlnU3J2KTtcbiAgfVxuXG4gIGdldCByZWZyZXNoKCk6IE9ic2VydmFibGU8SVRva2VuTW9kZWw+IHtcbiAgICB0aGlzLmJ1aWxkZXJSZWZyZXNoKCk7XG4gICAgcmV0dXJuIHRoaXMucmVmcmVzaCQucGlwZShzaGFyZSgpKTtcbiAgfVxuXG4gIGdldCBsb2dpbl91cmwoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9ucy5sb2dpbl91cmw7XG4gIH1cblxuICBnZXQgcmVmZXJyZXIoKTogQXV0aFJlZmVycmVyIHtcbiAgICByZXR1cm4gdGhpcy5fcmVmZXJyZXI7XG4gIH1cblxuICBnZXQgb3B0aW9ucygpOiBBbGFpbkF1dGhDb25maWcge1xuICAgIHJldHVybiB0aGlzLl9vcHRpb25zO1xuICB9XG5cbiAgc2V0KGRhdGE6IElUb2tlbk1vZGVsKTogYm9vbGVhbiB7XG4gICAgY29uc3QgcmVzID0gdGhpcy5zdG9yZS5zZXQodGhpcy5fb3B0aW9ucy5zdG9yZV9rZXkhLCBkYXRhKTtcbiAgICB0aGlzLmNoYW5nZSQubmV4dChkYXRhKTtcbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgZ2V0KHR5cGU/OiBhbnkpOiBhbnk7XG4gIGdldDxUIGV4dGVuZHMgSVRva2VuTW9kZWw+KHR5cGU/OiBuZXcgKCkgPT4gVCk6IFQ7XG4gIGdldDxUIGV4dGVuZHMgSVRva2VuTW9kZWw+KHR5cGU/OiBuZXcgKCkgPT4gVCk6IFQge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLnN0b3JlLmdldCh0aGlzLl9vcHRpb25zLnN0b3JlX2tleSEpO1xuICAgIHJldHVybiB0eXBlID8gKE9iamVjdC5hc3NpZ24obmV3IHR5cGUoKSwgZGF0YSkgYXMgVCkgOiAoZGF0YSBhcyBUKTtcbiAgfVxuXG4gIGNsZWFyKG9wdGlvbnM6IHsgb25seVRva2VuOiBib29sZWFuIH0gPSB7IG9ubHlUb2tlbjogZmFsc2UgfSk6IHZvaWQge1xuICAgIGxldCBkYXRhOiBJVG9rZW5Nb2RlbCB8IG51bGwgPSBudWxsO1xuICAgIGlmIChvcHRpb25zLm9ubHlUb2tlbiA9PT0gdHJ1ZSkge1xuICAgICAgZGF0YSA9IHRoaXMuZ2V0KCkgYXMgSVRva2VuTW9kZWw7XG4gICAgICBkYXRhLnRva2VuID0gYGA7XG4gICAgICB0aGlzLnNldChkYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdG9yZS5yZW1vdmUodGhpcy5fb3B0aW9ucy5zdG9yZV9rZXkhKTtcbiAgICB9XG4gICAgdGhpcy5jaGFuZ2UkLm5leHQoZGF0YSk7XG4gIH1cblxuICBjaGFuZ2UoKTogT2JzZXJ2YWJsZTxJVG9rZW5Nb2RlbCB8IG51bGw+IHtcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UkLnBpcGUoc2hhcmUoKSk7XG4gIH1cblxuICBwcml2YXRlIGJ1aWxkZXJSZWZyZXNoKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgcmVmcmVzaFRpbWUsIHJlZnJlc2hPZmZzZXQgfSA9IHRoaXMuX29wdGlvbnM7XG4gICAgdGhpcy5jbGVhblJlZnJlc2goKTtcbiAgICB0aGlzLmludGVydmFsJCA9IGludGVydmFsKHJlZnJlc2hUaW1lKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgoKSA9PiB7XG4gICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuZ2V0KCkgYXMgSVRva2VuTW9kZWw7XG4gICAgICAgICAgY29uc3QgZXhwaXJlZCA9IGl0ZW0uZXhwaXJlZCB8fCBpdGVtLmV4cCB8fCAwO1xuICAgICAgICAgIGlmIChleHBpcmVkIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGN1clRpbWUgPSBuZXcgRGF0ZSgpLnZhbHVlT2YoKSArIHJlZnJlc2hPZmZzZXQhO1xuICAgICAgICAgIHJldHVybiBleHBpcmVkIDw9IGN1clRpbWUgPyBpdGVtIDogbnVsbDtcbiAgICAgICAgfSksXG4gICAgICAgIGZpbHRlcih2ID0+IHYgIT0gbnVsbClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUocmVzID0+IHRoaXMucmVmcmVzaCQubmV4dChyZXMhKSk7XG4gIH1cblxuICBwcml2YXRlIGNsZWFuUmVmcmVzaCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbnRlcnZhbCQgJiYgIXRoaXMuaW50ZXJ2YWwkLmNsb3NlZCkge1xuICAgICAgdGhpcy5pbnRlcnZhbCQudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFuUmVmcmVzaCgpO1xuICB9XG59XG4iXX0=