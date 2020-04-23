/**
 * @fileoverview added by tsickle
 * Generated from: loading.config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { deprecation10Cog } from '@delon/util';
import * as i0 from "@angular/core";
/**
 * @deprecated `LoadingConfig` is going to be removed in 10.0.0. Please refer to https://ng-alain.com/docs/global-config
 */
var LoadingConfig = /** @class */ (function () {
    function LoadingConfig() {
        this.type = 'spin';
        this.text = '加载中...';
        this.icon = {
            type: 'loading',
            theme: 'outline',
            spin: true,
        };
        this.delay = 0;
        deprecation10Cog("LoadingConfig");
    }
    LoadingConfig.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    LoadingConfig.ctorParameters = function () { return []; };
    /** @nocollapse */ LoadingConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function LoadingConfig_Factory() { return new LoadingConfig(); }, token: LoadingConfig, providedIn: "root" });
    return LoadingConfig;
}());
export { LoadingConfig };
if (false) {
    /** @type {?} */
    LoadingConfig.prototype.type;
    /** @type {?} */
    LoadingConfig.prototype.text;
    /** @type {?} */
    LoadingConfig.prototype.icon;
    /** @type {?} */
    LoadingConfig.prototype.custom;
    /** @type {?} */
    LoadingConfig.prototype.delay;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL2xvYWRpbmcvIiwic291cmNlcyI6WyJsb2FkaW5nLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sYUFBYSxDQUFDOzs7OztBQUsvQztJQUVFO1FBR0EsU0FBSSxHQUFpQixNQUFNLENBQUM7UUFDNUIsU0FBSSxHQUFZLFFBQVEsQ0FBQztRQUN6QixTQUFJLEdBQWlCO1lBQ25CLElBQUksRUFBRSxTQUFTO1lBQ2YsS0FBSyxFQUFFLFNBQVM7WUFDaEIsSUFBSSxFQUFFLElBQUk7U0FDWCxDQUFDO1FBRUYsVUFBSyxHQUFZLENBQUMsQ0FBQztRQVZqQixnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNwQyxDQUFDOztnQkFKRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7Ozt3QkFQbEM7Q0FxQkMsQUFkRCxJQWNDO1NBYlksYUFBYTs7O0lBSXhCLDZCQUE0Qjs7SUFDNUIsNkJBQXlCOztJQUN6Qiw2QkFJRTs7SUFDRiwrQkFBdUI7O0lBQ3ZCLDhCQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExvYWRpbmdDdXN0b20sIExvYWRpbmdJY29uLCBMb2FkaW5nVHlwZSB9IGZyb20gJy4vbG9hZGluZy50eXBlcyc7XG5pbXBvcnQgeyBkZXByZWNhdGlvbjEwQ29nIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkIGBMb2FkaW5nQ29uZmlnYCBpcyBnb2luZyB0byBiZSByZW1vdmVkIGluIDEwLjAuMC4gUGxlYXNlIHJlZmVyIHRvIGh0dHBzOi8vbmctYWxhaW4uY29tL2RvY3MvZ2xvYmFsLWNvbmZpZ1xuICovXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIExvYWRpbmdDb25maWcge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBkZXByZWNhdGlvbjEwQ29nKGBMb2FkaW5nQ29uZmlnYCk7XG4gIH1cbiAgdHlwZT86IExvYWRpbmdUeXBlID0gJ3NwaW4nO1xuICB0ZXh0Pzogc3RyaW5nID0gJ+WKoOi9veS4rS4uLic7XG4gIGljb24/OiBMb2FkaW5nSWNvbiA9IHtcbiAgICB0eXBlOiAnbG9hZGluZycsXG4gICAgdGhlbWU6ICdvdXRsaW5lJyxcbiAgICBzcGluOiB0cnVlLFxuICB9O1xuICBjdXN0b20/OiBMb2FkaW5nQ3VzdG9tO1xuICBkZWxheT86IG51bWJlciA9IDA7XG59XG4iXX0=