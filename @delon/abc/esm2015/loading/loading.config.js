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
export class LoadingConfig {
    constructor() {
        this.type = 'spin';
        this.text = '加载中...';
        this.icon = {
            type: 'loading',
            theme: 'outline',
            spin: true,
        };
        this.delay = 0;
        deprecation10Cog(`LoadingConfig`);
    }
}
LoadingConfig.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
LoadingConfig.ctorParameters = () => [];
/** @nocollapse */ LoadingConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function LoadingConfig_Factory() { return new LoadingConfig(); }, token: LoadingConfig, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL2xvYWRpbmcvIiwic291cmNlcyI6WyJsb2FkaW5nLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sYUFBYSxDQUFDOzs7OztBQU8vQyxNQUFNLE9BQU8sYUFBYTtJQUN4QjtRQUdBLFNBQUksR0FBaUIsTUFBTSxDQUFDO1FBQzVCLFNBQUksR0FBWSxRQUFRLENBQUM7UUFDekIsU0FBSSxHQUFpQjtZQUNuQixJQUFJLEVBQUUsU0FBUztZQUNmLEtBQUssRUFBRSxTQUFTO1lBQ2hCLElBQUksRUFBRSxJQUFJO1NBQ1gsQ0FBQztRQUVGLFVBQUssR0FBWSxDQUFDLENBQUM7UUFWakIsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7O1lBSkYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7Ozs7OztJQUtoQyw2QkFBNEI7O0lBQzVCLDZCQUF5Qjs7SUFDekIsNkJBSUU7O0lBQ0YsK0JBQXVCOztJQUN2Qiw4QkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBkZXByZWNhdGlvbjEwQ29nIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgTG9hZGluZ0N1c3RvbSwgTG9hZGluZ0ljb24sIExvYWRpbmdUeXBlIH0gZnJvbSAnLi9sb2FkaW5nLnR5cGVzJztcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBgTG9hZGluZ0NvbmZpZ2AgaXMgZ29pbmcgdG8gYmUgcmVtb3ZlZCBpbiAxMC4wLjAuIFBsZWFzZSByZWZlciB0byBodHRwczovL25nLWFsYWluLmNvbS9kb2NzL2dsb2JhbC1jb25maWdcbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBMb2FkaW5nQ29uZmlnIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgZGVwcmVjYXRpb24xMENvZyhgTG9hZGluZ0NvbmZpZ2ApO1xuICB9XG4gIHR5cGU/OiBMb2FkaW5nVHlwZSA9ICdzcGluJztcbiAgdGV4dD86IHN0cmluZyA9ICfliqDovb3kuK0uLi4nO1xuICBpY29uPzogTG9hZGluZ0ljb24gPSB7XG4gICAgdHlwZTogJ2xvYWRpbmcnLFxuICAgIHRoZW1lOiAnb3V0bGluZScsXG4gICAgc3BpbjogdHJ1ZSxcbiAgfTtcbiAgY3VzdG9tPzogTG9hZGluZ0N1c3RvbTtcbiAgZGVsYXk/OiBudW1iZXIgPSAwO1xufVxuIl19