import { inject, Inject, Injectable } from '@angular/core';
import { AlainConfigService } from '@delon/util/config';
import { BehaviorSubject, interval, Subject } from 'rxjs';
import { filter, map, share } from 'rxjs/operators';
import { mergeConfig } from '../auth.config';
import { DA_STORE_TOKEN } from '../store/interface';
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
        this.change$.next(data);
        return this.store.set(this._options.store_key, data);
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
TokenService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
TokenService.ctorParameters = () => [
    { type: AlainConfigService },
    { type: undefined, decorators: [{ type: Inject, args: [DA_STORE_TOKEN,] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2F1dGgvc3JjL3Rva2VuL3Rva2VuLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3RFLE9BQU8sRUFBbUIsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBYyxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsY0FBYyxFQUFVLE1BQU0sb0JBQW9CLENBQUM7QUFHNUQsTUFBTSxVQUFVLHdCQUF3QjtJQUN0QyxPQUFPLElBQUksWUFBWSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0FBQzlFLENBQUM7QUFFRDs7R0FFRztBQUVILE1BQU0sT0FBTyxZQUFZO0lBT3ZCLFlBQVksU0FBNkIsRUFBa0MsS0FBYTtRQUFiLFVBQUssR0FBTCxLQUFLLENBQVE7UUFOaEYsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFlLENBQUM7UUFDdEMsWUFBTyxHQUFHLElBQUksZUFBZSxDQUFxQixJQUFJLENBQUMsQ0FBQztRQUV4RCxjQUFTLEdBQWlCLEVBQUUsQ0FBQztRQUluQyxJQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsSUFBSSxPQUFPO1FBQ1QsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLE9BQU8sSUFB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LElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtZQUM1QyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzlCO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7O1lBcEZGLFVBQVU7Ozs7WUFkZSxrQkFBa0I7NENBc0JFLE1BQU0sU0FBQyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0LCBJbmplY3QsIEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWxhaW5BdXRoQ29uZmlnLCBBbGFpbkNvbmZpZ1NlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbC9jb25maWcnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBpbnRlcnZhbCwgT2JzZXJ2YWJsZSwgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc2hhcmUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBtZXJnZUNvbmZpZyB9IGZyb20gJy4uL2F1dGguY29uZmlnJztcbmltcG9ydCB7IERBX1NUT1JFX1RPS0VOLCBJU3RvcmUgfSBmcm9tICcuLi9zdG9yZS9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQXV0aFJlZmVycmVyLCBJVG9rZW5Nb2RlbCwgSVRva2VuU2VydmljZSB9IGZyb20gJy4vaW50ZXJmYWNlJztcblxuZXhwb3J0IGZ1bmN0aW9uIERBX1NFUlZJQ0VfVE9LRU5fRkFDVE9SWSgpOiBJVG9rZW5TZXJ2aWNlIHtcbiAgcmV0dXJuIG5ldyBUb2tlblNlcnZpY2UoaW5qZWN0KEFsYWluQ29uZmlnU2VydmljZSksIGluamVjdChEQV9TVE9SRV9UT0tFTikpO1xufVxuXG4vKipcbiAqIOe7tOaKpFRva2Vu5L+h5oGv5pyN5Yqh77yMW+WcqOe6v+aWh+aho10oaHR0cHM6Ly9uZy1hbGFpbi5jb20vYXV0aClcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRva2VuU2VydmljZSBpbXBsZW1lbnRzIElUb2tlblNlcnZpY2UsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgcmVmcmVzaCQgPSBuZXcgU3ViamVjdDxJVG9rZW5Nb2RlbD4oKTtcbiAgcHJpdmF0ZSBjaGFuZ2UkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxJVG9rZW5Nb2RlbCB8IG51bGw+KG51bGwpO1xuICBwcml2YXRlIGludGVydmFsJDogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIF9yZWZlcnJlcjogQXV0aFJlZmVycmVyID0ge307XG4gIHByaXZhdGUgX29wdGlvbnM6IEFsYWluQXV0aENvbmZpZztcblxuICBjb25zdHJ1Y3Rvcihjb25maWdTcnY6IEFsYWluQ29uZmlnU2VydmljZSwgQEluamVjdChEQV9TVE9SRV9UT0tFTikgcHJpdmF0ZSBzdG9yZTogSVN0b3JlKSB7XG4gICAgdGhpcy5fb3B0aW9ucyA9IG1lcmdlQ29uZmlnKGNvbmZpZ1Nydik7XG4gIH1cblxuICBnZXQgcmVmcmVzaCgpOiBPYnNlcnZhYmxlPElUb2tlbk1vZGVsPiB7XG4gICAgdGhpcy5idWlsZGVyUmVmcmVzaCgpO1xuICAgIHJldHVybiB0aGlzLnJlZnJlc2gkLnBpcGUoc2hhcmUoKSk7XG4gIH1cblxuICBnZXQgbG9naW5fdXJsKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29wdGlvbnMubG9naW5fdXJsO1xuICB9XG5cbiAgZ2V0IHJlZmVycmVyKCk6IEF1dGhSZWZlcnJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3JlZmVycmVyO1xuICB9XG5cbiAgZ2V0IG9wdGlvbnMoKTogQWxhaW5BdXRoQ29uZmlnIHtcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9ucztcbiAgfVxuXG4gIHNldChkYXRhOiBJVG9rZW5Nb2RlbCk6IGJvb2xlYW4ge1xuICAgIHRoaXMuY2hhbmdlJC5uZXh0KGRhdGEpO1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnNldCh0aGlzLl9vcHRpb25zLnN0b3JlX2tleSEsIGRhdGEpO1xuICB9XG5cbiAgZ2V0KHR5cGU/OiBhbnkpOiBhbnk7XG4gIGdldDxUIGV4dGVuZHMgSVRva2VuTW9kZWw+KHR5cGU/OiBuZXcgKCkgPT4gVCk6IFQge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLnN0b3JlLmdldCh0aGlzLl9vcHRpb25zLnN0b3JlX2tleSEpO1xuICAgIHJldHVybiB0eXBlID8gKE9iamVjdC5hc3NpZ24obmV3IHR5cGUoKSwgZGF0YSkgYXMgVCkgOiAoZGF0YSBhcyBUKTtcbiAgfVxuXG4gIGNsZWFyKG9wdGlvbnM6IHsgb25seVRva2VuOiBib29sZWFuIH0gPSB7IG9ubHlUb2tlbjogZmFsc2UgfSk6IHZvaWQge1xuICAgIGxldCBkYXRhOiBJVG9rZW5Nb2RlbCB8IG51bGwgPSBudWxsO1xuICAgIGlmIChvcHRpb25zLm9ubHlUb2tlbiA9PT0gdHJ1ZSkge1xuICAgICAgZGF0YSA9IHRoaXMuZ2V0KCkgYXMgSVRva2VuTW9kZWw7XG4gICAgICBkYXRhLnRva2VuID0gYGA7XG4gICAgICB0aGlzLnNldChkYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdG9yZS5yZW1vdmUodGhpcy5fb3B0aW9ucy5zdG9yZV9rZXkhKTtcbiAgICB9XG4gICAgdGhpcy5jaGFuZ2UkLm5leHQoZGF0YSk7XG4gIH1cblxuICBjaGFuZ2UoKTogT2JzZXJ2YWJsZTxJVG9rZW5Nb2RlbCB8IG51bGw+IHtcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UkLnBpcGUoc2hhcmUoKSk7XG4gIH1cblxuICBwcml2YXRlIGJ1aWxkZXJSZWZyZXNoKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgcmVmcmVzaFRpbWUsIHJlZnJlc2hPZmZzZXQgfSA9IHRoaXMuX29wdGlvbnM7XG4gICAgdGhpcy5jbGVhblJlZnJlc2goKTtcbiAgICB0aGlzLmludGVydmFsJCA9IGludGVydmFsKHJlZnJlc2hUaW1lKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgoKSA9PiB7XG4gICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuZ2V0KCkgYXMgSVRva2VuTW9kZWw7XG4gICAgICAgICAgY29uc3QgZXhwaXJlZCA9IGl0ZW0uZXhwaXJlZCB8fCBpdGVtLmV4cCB8fCAwO1xuICAgICAgICAgIGlmIChleHBpcmVkIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGN1clRpbWUgPSBuZXcgRGF0ZSgpLnZhbHVlT2YoKSArIHJlZnJlc2hPZmZzZXQhO1xuICAgICAgICAgIHJldHVybiBleHBpcmVkIDw9IGN1clRpbWUgPyBpdGVtIDogbnVsbDtcbiAgICAgICAgfSksXG4gICAgICAgIGZpbHRlcih2ID0+IHYgIT0gbnVsbCksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLnJlZnJlc2gkLm5leHQocmVzISkpO1xuICB9XG5cbiAgcHJpdmF0ZSBjbGVhblJlZnJlc2goKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW50ZXJ2YWwkICYmICF0aGlzLmludGVydmFsJC5jbG9zZWQpIHtcbiAgICAgIHRoaXMuaW50ZXJ2YWwkLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhblJlZnJlc2goKTtcbiAgfVxufVxuIl19