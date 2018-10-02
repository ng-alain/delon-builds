/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable, Inject, Optional, SkipSelf } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DELON_LOCALE } from './locale.tokens';
import zhCN from './languages/zh-CN';
export class DelonLocaleService {
    /**
     * @param {?} locale
     */
    constructor(locale) {
        this.change$ = new BehaviorSubject(this._locale);
        this.setLocale(locale || zhCN);
    }
    /**
     * @return {?}
     */
    get change() {
        return this.change$.asObservable();
    }
    /**
     * @param {?} locale
     * @return {?}
     */
    setLocale(locale) {
        if (this._locale && this._locale.abbr === locale.abbr) {
            return;
        }
        this._locale = locale;
        this.change$.next(locale);
    }
    /**
     * @return {?}
     */
    get locale() {
        return this._locale;
    }
    /**
     * @param {?} path
     * @return {?}
     */
    getData(path) {
        return this._locale[path] || {};
    }
}
DelonLocaleService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DelonLocaleService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DELON_LOCALE,] }] }
];
if (false) {
    /** @type {?} */
    DelonLocaleService.prototype._locale;
    /** @type {?} */
    DelonLocaleService.prototype.change$;
}
/**
 * @param {?} exist
 * @param {?} locale
 * @return {?}
 */
export function DELON_LOCALE_SERVICE_PROVIDER_FACTORY(exist, locale) {
    return exist || new DelonLocaleService(locale);
}
/** @type {?} */
export const DELON_LOCALE_SERVICE_PROVIDER = {
    provide: DelonLocaleService,
    useFactory: DELON_LOCALE_SERVICE_PROVIDER_FACTORY,
    deps: [[new Optional(), new SkipSelf(), DelonLocaleService], DELON_LOCALE]
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdGhlbWUvIiwic291cmNlcyI6WyJzcmMvbG9jYWxlL2xvY2FsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBWSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pGLE9BQU8sRUFBYyxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sSUFBSSxNQUFNLG1CQUFtQixDQUFDO0FBR3JDLE1BQU07Ozs7SUFJSixZQUFrQyxNQUFrQjt1QkFGbEMsSUFBSSxlQUFlLENBQWEsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUc3RCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsQ0FBQztLQUNoQzs7OztJQUVELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUNwQzs7Ozs7SUFFRCxTQUFTLENBQUMsTUFBa0I7UUFDMUIsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQyxJQUFJLEVBQUU7WUFDckQsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDM0I7Ozs7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7S0FDckI7Ozs7O0lBRUQsT0FBTyxDQUFDLElBQVk7UUFDbEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUNqQzs7O1lBM0JGLFVBQVU7Ozs7NENBS0ksTUFBTSxTQUFDLFlBQVk7Ozs7Ozs7Ozs7Ozs7QUF5QmxDLE1BQU0sZ0RBQWdELEtBQXlCLEVBQUUsTUFBa0I7SUFDakcsT0FBTyxLQUFLLElBQUksSUFBSSxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztDQUNoRDs7QUFFRCxhQUFhLDZCQUE2QixHQUFhO0lBQ3JELE9BQU8sRUFBSyxrQkFBa0I7SUFDOUIsVUFBVSxFQUFFLHFDQUFxQztJQUNqRCxJQUFJLEVBQVEsQ0FBRSxDQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSxrQkFBa0IsQ0FBRSxFQUFFLFlBQVksQ0FBRTtDQUNyRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0LCBQcm92aWRlciwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4vbG9jYWxlLnR5cGVzJztcclxuaW1wb3J0IHsgREVMT05fTE9DQUxFIH0gZnJvbSAnLi9sb2NhbGUudG9rZW5zJztcclxuaW1wb3J0IHpoQ04gZnJvbSAnLi9sYW5ndWFnZXMvemgtQ04nO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRGVsb25Mb2NhbGVTZXJ2aWNlIHtcclxuICBwcml2YXRlIF9sb2NhbGU6IExvY2FsZURhdGE7XHJcbiAgcHJpdmF0ZSBjaGFuZ2UkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxMb2NhbGVEYXRhPih0aGlzLl9sb2NhbGUpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KERFTE9OX0xPQ0FMRSkgbG9jYWxlOiBMb2NhbGVEYXRhKSB7XHJcbiAgICB0aGlzLnNldExvY2FsZShsb2NhbGUgfHwgemhDTik7XHJcbiAgfVxyXG5cclxuICBnZXQgY2hhbmdlKCk6IE9ic2VydmFibGU8TG9jYWxlRGF0YT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlJC5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIHNldExvY2FsZShsb2NhbGU6IExvY2FsZURhdGEpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9sb2NhbGUgJiYgdGhpcy5fbG9jYWxlLmFiYnIgPT09IGxvY2FsZS5hYmJyKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuX2xvY2FsZSA9IGxvY2FsZTtcclxuICAgIHRoaXMuY2hhbmdlJC5uZXh0KGxvY2FsZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgbG9jYWxlKCk6IExvY2FsZURhdGEge1xyXG4gICAgcmV0dXJuIHRoaXMuX2xvY2FsZTtcclxuICB9XHJcblxyXG4gIGdldERhdGEocGF0aDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbG9jYWxlW3BhdGhdIHx8IHt9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIERFTE9OX0xPQ0FMRV9TRVJWSUNFX1BST1ZJREVSX0ZBQ1RPUlkoZXhpc3Q6IERlbG9uTG9jYWxlU2VydmljZSwgbG9jYWxlOiBMb2NhbGVEYXRhKTogRGVsb25Mb2NhbGVTZXJ2aWNlIHtcclxuICByZXR1cm4gZXhpc3QgfHwgbmV3IERlbG9uTG9jYWxlU2VydmljZShsb2NhbGUpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgREVMT05fTE9DQUxFX1NFUlZJQ0VfUFJPVklERVI6IFByb3ZpZGVyID0ge1xyXG4gIHByb3ZpZGUgICA6IERlbG9uTG9jYWxlU2VydmljZSxcclxuICB1c2VGYWN0b3J5OiBERUxPTl9MT0NBTEVfU0VSVklDRV9QUk9WSURFUl9GQUNUT1JZLFxyXG4gIGRlcHMgICAgICA6IFsgWyBuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIERlbG9uTG9jYWxlU2VydmljZSBdLCBERUxPTl9MT0NBTEUgXVxyXG59O1xyXG4iXX0=