import { Inject, Injectable, Optional, SkipSelf } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import zhCN from './languages/zh-CN';
import { DELON_LOCALE } from './locale.tokens';
import * as i0 from "@angular/core";
export class DelonLocaleService {
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
}
DelonLocaleService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: DelonLocaleService, deps: [{ token: DELON_LOCALE }], target: i0.ɵɵFactoryTarget.Injectable });
DelonLocaleService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: DelonLocaleService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: DelonLocaleService, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS9zcmMvbG9jYWxlL2xvY2FsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBWSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakYsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUVuRCxPQUFPLElBQUksTUFBTSxtQkFBbUIsQ0FBQztBQUNyQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBSS9DLE1BQU0sT0FBTyxrQkFBa0I7SUFJN0IsWUFBa0MsTUFBNkI7UUFIdkQsWUFBTyxHQUFtQixJQUFJLENBQUM7UUFDL0IsWUFBTyxHQUFHLElBQUksZUFBZSxDQUFpQixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFHbEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRUQsU0FBUyxDQUFDLE1BQXNCO1FBQzlCLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxNQUFNLENBQUMsSUFBSSxFQUFFO1lBQ3JELE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUVELE9BQU8sQ0FBQyxJQUEwQjtRQUNoQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQWUsQ0FBQztJQUNsRCxDQUFDOzsrR0ExQlUsa0JBQWtCLGtCQUlULFlBQVk7bUhBSnJCLGtCQUFrQjsyRkFBbEIsa0JBQWtCO2tCQUQ5QixVQUFVOzswQkFLSSxNQUFNOzJCQUFDLFlBQVk7O0FBeUJsQyxNQUFNLFVBQVUscUNBQXFDLENBQ25ELEtBQXlCLEVBQ3pCLE1BQXNCO0lBRXRCLE9BQU8sS0FBSyxJQUFJLElBQUksa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDakQsQ0FBQztBQUVELE1BQU0sQ0FBQyxNQUFNLDZCQUE2QixHQUFhO0lBQ3JELE9BQU8sRUFBRSxrQkFBa0I7SUFDM0IsVUFBVSxFQUFFLHFDQUFxQztJQUNqRCxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSxrQkFBa0IsQ0FBQyxFQUFFLFlBQVksQ0FBQztDQUMzRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCwgUHJvdmlkZXIsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHpoQ04gZnJvbSAnLi9sYW5ndWFnZXMvemgtQ04nO1xuaW1wb3J0IHsgREVMT05fTE9DQUxFIH0gZnJvbSAnLi9sb2NhbGUudG9rZW5zJztcbmltcG9ydCB7IEZ1bGxMb2NhbGVEYXRhLCBMb2NhbGVEYXRhIH0gZnJvbSAnLi9sb2NhbGUudHlwZXMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGVsb25Mb2NhbGVTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfbG9jYWxlOiBGdWxsTG9jYWxlRGF0YSA9IHpoQ047XG4gIHByaXZhdGUgY2hhbmdlJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8RnVsbExvY2FsZURhdGE+KHRoaXMuX2xvY2FsZSk7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChERUxPTl9MT0NBTEUpIGxvY2FsZTogRnVsbExvY2FsZURhdGEgfCBudWxsKSB7XG4gICAgdGhpcy5zZXRMb2NhbGUobG9jYWxlIHx8IHpoQ04pO1xuICB9XG5cbiAgZ2V0IGNoYW5nZSgpOiBPYnNlcnZhYmxlPEZ1bGxMb2NhbGVEYXRhPiB7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlJC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIHNldExvY2FsZShsb2NhbGU6IEZ1bGxMb2NhbGVEYXRhKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2xvY2FsZSAmJiB0aGlzLl9sb2NhbGUuYWJiciA9PT0gbG9jYWxlLmFiYnIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fbG9jYWxlID0gbG9jYWxlO1xuICAgIHRoaXMuY2hhbmdlJC5uZXh0KGxvY2FsZSk7XG4gIH1cblxuICBnZXQgbG9jYWxlKCk6IEZ1bGxMb2NhbGVEYXRhIHtcbiAgICByZXR1cm4gdGhpcy5fbG9jYWxlO1xuICB9XG5cbiAgZ2V0RGF0YShwYXRoOiBrZXlvZiBGdWxsTG9jYWxlRGF0YSk6IExvY2FsZURhdGEge1xuICAgIHJldHVybiAodGhpcy5fbG9jYWxlW3BhdGhdIHx8IHt9KSBhcyBMb2NhbGVEYXRhO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBERUxPTl9MT0NBTEVfU0VSVklDRV9QUk9WSURFUl9GQUNUT1JZKFxuICBleGlzdDogRGVsb25Mb2NhbGVTZXJ2aWNlLFxuICBsb2NhbGU6IEZ1bGxMb2NhbGVEYXRhXG4pOiBEZWxvbkxvY2FsZVNlcnZpY2Uge1xuICByZXR1cm4gZXhpc3QgfHwgbmV3IERlbG9uTG9jYWxlU2VydmljZShsb2NhbGUpO1xufVxuXG5leHBvcnQgY29uc3QgREVMT05fTE9DQUxFX1NFUlZJQ0VfUFJPVklERVI6IFByb3ZpZGVyID0ge1xuICBwcm92aWRlOiBEZWxvbkxvY2FsZVNlcnZpY2UsXG4gIHVzZUZhY3Rvcnk6IERFTE9OX0xPQ0FMRV9TRVJWSUNFX1BST1ZJREVSX0ZBQ1RPUlksXG4gIGRlcHM6IFtbbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBEZWxvbkxvY2FsZVNlcnZpY2VdLCBERUxPTl9MT0NBTEVdXG59O1xuIl19