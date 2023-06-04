import { Inject, Injectable, Optional, SkipSelf } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import zhCN from './languages/zh-CN';
import { DELON_LOCALE } from './locale.tokens';
import * as i0 from "@angular/core";
class DelonLocaleService {
    constructor(locale) {
        this._locale = zhCN;
        this.change$ = new BehaviorSubject(this._locale);
        this.setLocale(locale || zhCN);
    }
    get change() {
        return this.change$.asObservable();
    }
    setLocale(locale) {
        if (this._locale && this._locale.abbr === locale.abbr) {
            return;
        }
        this._locale = locale;
        this.change$.next(locale);
    }
    get locale() {
        return this._locale;
    }
    getData(path) {
        return (this._locale[path] || {});
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: DelonLocaleService, deps: [{ token: DELON_LOCALE }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: DelonLocaleService }); }
}
export { DelonLocaleService };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: DelonLocaleService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [DELON_LOCALE]
                }] }]; } });
export function DELON_LOCALE_SERVICE_PROVIDER_FACTORY(exist, locale) {
    return exist || new DelonLocaleService(locale);
}
export const DELON_LOCALE_SERVICE_PROVIDER = {
    provide: DelonLocaleService,
    useFactory: DELON_LOCALE_SERVICE_PROVIDER_FACTORY,
    deps: [[new Optional(), new SkipSelf(), DelonLocaleService], DELON_LOCALE]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS9zcmMvbG9jYWxlL2xvY2FsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBWSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakYsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUVuRCxPQUFPLElBQUksTUFBTSxtQkFBbUIsQ0FBQztBQUNyQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBRy9DLE1BQ2Esa0JBQWtCO0lBSTdCLFlBQWtDLE1BQTZCO1FBSHZELFlBQU8sR0FBbUIsSUFBSSxDQUFDO1FBQy9CLFlBQU8sR0FBRyxJQUFJLGVBQWUsQ0FBaUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBR2xFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVELFNBQVMsQ0FBQyxNQUFzQjtRQUM5QixJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssTUFBTSxDQUFDLElBQUksRUFBRTtZQUNyRCxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxPQUFPLENBQUMsSUFBMEI7UUFDaEMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFlLENBQUM7SUFDbEQsQ0FBQzs4R0ExQlUsa0JBQWtCLGtCQUlULFlBQVk7a0hBSnJCLGtCQUFrQjs7U0FBbEIsa0JBQWtCOzJGQUFsQixrQkFBa0I7a0JBRDlCLFVBQVU7OzBCQUtJLE1BQU07MkJBQUMsWUFBWTs7QUF5QmxDLE1BQU0sVUFBVSxxQ0FBcUMsQ0FDbkQsS0FBeUIsRUFDekIsTUFBc0I7SUFFdEIsT0FBTyxLQUFLLElBQUksSUFBSSxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNqRCxDQUFDO0FBRUQsTUFBTSxDQUFDLE1BQU0sNkJBQTZCLEdBQWE7SUFDckQsT0FBTyxFQUFFLGtCQUFrQjtJQUMzQixVQUFVLEVBQUUscUNBQXFDO0lBQ2pELElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxRQUFRLEVBQUUsRUFBRSxJQUFJLFFBQVEsRUFBRSxFQUFFLGtCQUFrQixDQUFDLEVBQUUsWUFBWSxDQUFDO0NBQzNFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsLCBQcm92aWRlciwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgemhDTiBmcm9tICcuL2xhbmd1YWdlcy96aC1DTic7XG5pbXBvcnQgeyBERUxPTl9MT0NBTEUgfSBmcm9tICcuL2xvY2FsZS50b2tlbnMnO1xuaW1wb3J0IHsgRnVsbExvY2FsZURhdGEsIExvY2FsZURhdGEgfSBmcm9tICcuL2xvY2FsZS50eXBlcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEZWxvbkxvY2FsZVNlcnZpY2Uge1xuICBwcml2YXRlIF9sb2NhbGU6IEZ1bGxMb2NhbGVEYXRhID0gemhDTjtcbiAgcHJpdmF0ZSBjaGFuZ2UkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxGdWxsTG9jYWxlRGF0YT4odGhpcy5fbG9jYWxlKTtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KERFTE9OX0xPQ0FMRSkgbG9jYWxlOiBGdWxsTG9jYWxlRGF0YSB8IG51bGwpIHtcbiAgICB0aGlzLnNldExvY2FsZShsb2NhbGUgfHwgemhDTik7XG4gIH1cblxuICBnZXQgY2hhbmdlKCk6IE9ic2VydmFibGU8RnVsbExvY2FsZURhdGE+IHtcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UkLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgc2V0TG9jYWxlKGxvY2FsZTogRnVsbExvY2FsZURhdGEpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fbG9jYWxlICYmIHRoaXMuX2xvY2FsZS5hYmJyID09PSBsb2NhbGUuYWJicikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9sb2NhbGUgPSBsb2NhbGU7XG4gICAgdGhpcy5jaGFuZ2UkLm5leHQobG9jYWxlKTtcbiAgfVxuXG4gIGdldCBsb2NhbGUoKTogRnVsbExvY2FsZURhdGEge1xuICAgIHJldHVybiB0aGlzLl9sb2NhbGU7XG4gIH1cblxuICBnZXREYXRhKHBhdGg6IGtleW9mIEZ1bGxMb2NhbGVEYXRhKTogTG9jYWxlRGF0YSB7XG4gICAgcmV0dXJuICh0aGlzLl9sb2NhbGVbcGF0aF0gfHwge30pIGFzIExvY2FsZURhdGE7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIERFTE9OX0xPQ0FMRV9TRVJWSUNFX1BST1ZJREVSX0ZBQ1RPUlkoXG4gIGV4aXN0OiBEZWxvbkxvY2FsZVNlcnZpY2UsXG4gIGxvY2FsZTogRnVsbExvY2FsZURhdGFcbik6IERlbG9uTG9jYWxlU2VydmljZSB7XG4gIHJldHVybiBleGlzdCB8fCBuZXcgRGVsb25Mb2NhbGVTZXJ2aWNlKGxvY2FsZSk7XG59XG5cbmV4cG9ydCBjb25zdCBERUxPTl9MT0NBTEVfU0VSVklDRV9QUk9WSURFUjogUHJvdmlkZXIgPSB7XG4gIHByb3ZpZGU6IERlbG9uTG9jYWxlU2VydmljZSxcbiAgdXNlRmFjdG9yeTogREVMT05fTE9DQUxFX1NFUlZJQ0VfUFJPVklERVJfRkFDVE9SWSxcbiAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIERlbG9uTG9jYWxlU2VydmljZV0sIERFTE9OX0xPQ0FMRV1cbn07XG4iXX0=