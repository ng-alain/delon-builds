/**
 * @fileoverview added by tsickle
 * Generated from: setting-drawer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __awaiter, __decorate, __metadata } from "tslib";
import { Directionality } from '@angular/cdk/bidi';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Input, isDevMode, NgZone, Optional, } from '@angular/core';
import { SettingsService } from '@delon/theme';
import { copy, deepCopy, InputBoolean, LazyService } from '@delon/util';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ALAINDEFAULTVAR, DEFAULT_COLORS, DEFAULT_VARS } from './setting-drawer.types';
export class SettingDrawerComponent {
    /**
     * @param {?} cdr
     * @param {?} msg
     * @param {?} settingSrv
     * @param {?} lazy
     * @param {?} zone
     * @param {?} doc
     * @param {?} directionality
     */
    constructor(cdr, msg, settingSrv, lazy, zone, doc, directionality) {
        this.cdr = cdr;
        this.msg = msg;
        this.settingSrv = settingSrv;
        this.lazy = lazy;
        this.zone = zone;
        this.doc = doc;
        this.directionality = directionality;
        this.autoApplyColor = true;
        this.devTips = `When the color can't be switched, you need to run it once: npm run color-less`;
        this.loadedLess = false;
        this.destroy$ = new Subject();
        this.dir = 'ltr';
        this.isDev = isDevMode();
        this.collapse = false;
        this.data = {};
        this.colors = DEFAULT_COLORS;
        this.color = this.cachedData['@primary-color'] || this.DEFAULT_PRIMARY;
        this.resetData(this.cachedData, false);
    }
    /**
     * @return {?}
     */
    get layout() {
        return this.settingSrv.layout;
    }
    /**
     * @private
     * @return {?}
     */
    get cachedData() {
        return this.settingSrv.layout[ALAINDEFAULTVAR] || {};
    }
    /**
     * @private
     * @return {?}
     */
    get DEFAULT_PRIMARY() {
        return DEFAULT_VARS['primary-color'].default;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        var _a;
        this.dir = this.directionality.value;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} direction
         * @return {?}
         */
        (direction) => {
            this.dir = direction;
        }));
        if (this.autoApplyColor && this.color !== this.DEFAULT_PRIMARY) {
            this.changeColor(this.color);
            this.runLess();
        }
    }
    /**
     * @private
     * @return {?}
     */
    loadLess() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.loadedLess) {
                return Promise.resolve();
            }
            return this.lazy
                .loadStyle('./assets/color.less', 'stylesheet/less')
                .then((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const lessConfigNode = this.doc.createElement('script');
                lessConfigNode.innerHTML = `
          window.less = {
            async: true,
            env: 'production',
            javascriptEnabled: true
          };
        `;
                this.doc.body.appendChild(lessConfigNode);
            }))
                .then((/**
             * @return {?}
             */
            () => this.lazy.loadScript('https://gw.alipayobjects.com/os/lib/less.js/3.8.1/less.min.js')))
                .then((/**
             * @return {?}
             */
            () => {
                this.loadedLess = true;
            }));
        });
    }
    /**
     * @private
     * @return {?}
     */
    genVars() {
        const { data, color, validKeys } = this;
        /** @type {?} */
        const vars = {
            [`@primary-color`]: color,
        };
        validKeys.filter((/**
         * @param {?} key
         * @return {?}
         */
        key => key !== 'primary-color')).forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => (vars[`@${key}`] = data[key].value)));
        this.setLayout(ALAINDEFAULTVAR, vars);
        return vars;
    }
    /**
     * @private
     * @return {?}
     */
    runLess() {
        const { zone, msg, cdr } = this;
        /** @type {?} */
        const msgId = msg.loading(`正在编译主题！`, { nzDuration: 0 }).messageId;
        setTimeout((/**
         * @return {?}
         */
        () => {
            zone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                this.loadLess().then((/**
                 * @return {?}
                 */
                () => {
                    ((/** @type {?} */ (window))).less.modifyVars(this.genVars()).then((/**
                     * @return {?}
                     */
                    () => {
                        msg.success('成功');
                        msg.remove(msgId);
                        zone.run((/**
                         * @return {?}
                         */
                        () => cdr.detectChanges()));
                    }));
                }));
            }));
        }), 200);
    }
    /**
     * @return {?}
     */
    toggle() {
        this.collapse = !this.collapse;
    }
    /**
     * @param {?} color
     * @return {?}
     */
    changeColor(color) {
        this.color = color;
        Object.keys(DEFAULT_VARS)
            .filter((/**
         * @param {?} key
         * @return {?}
         */
        key => DEFAULT_VARS[key].default === '@primary-color'))
            .forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => delete this.cachedData[`@${key}`]));
        this.resetData(this.cachedData, false);
    }
    /**
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    setLayout(name, value) {
        this.settingSrv.setLayout(name, value);
    }
    /**
     * @private
     * @param {?=} nowData
     * @param {?=} run
     * @return {?}
     */
    resetData(nowData, run = true) {
        nowData = nowData || {};
        /** @type {?} */
        const data = deepCopy(DEFAULT_VARS);
        Object.keys(data).forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => {
            /** @type {?} */
            const value = (/** @type {?} */ (nowData))[`@${key}`] || data[key].default || '';
            data[key].value = value === `@primary-color` ? this.color : value;
        }));
        this.data = data;
        if (run) {
            this.cdr.detectChanges();
            this.runLess();
        }
    }
    /**
     * @private
     * @return {?}
     */
    get validKeys() {
        return Object.keys(this.data).filter((/**
         * @param {?} key
         * @return {?}
         */
        key => this.data[key].value !== this.data[key].default));
    }
    /**
     * @return {?}
     */
    apply() {
        this.runLess();
    }
    /**
     * @return {?}
     */
    reset() {
        this.color = this.DEFAULT_PRIMARY;
        this.settingSrv.setLayout(ALAINDEFAULTVAR, {});
        this.resetData({});
    }
    /**
     * @return {?}
     */
    copyVar() {
        /** @type {?} */
        const vars = this.genVars();
        /** @type {?} */
        const copyContent = Object.keys(vars)
            .map((/**
         * @param {?} key
         * @return {?}
         */
        key => `${key}: ${vars[key]};`))
            .join('\n');
        copy(copyContent);
        this.msg.success('Copy success');
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
SettingDrawerComponent.decorators = [
    { type: Component, args: [{
                selector: 'setting-drawer',
                template: "<nz-drawer [nzVisible]=\"collapse\" [nzPlacement]=\"dir === 'rtl' ? 'left' : 'right'\" [nzWidth]=\"500\" (nzOnClose)=\"toggle()\">\n  <div *nzDrawerContent class=\"setting-drawer__content\">\n    <div class=\"setting-drawer__body setting-drawer__theme\">\n      <h3 class=\"setting-drawer__title\">\u4E3B\u9898\u8272</h3>\n      <span\n        *ngFor=\"let c of colors\"\n        [style]=\"{ 'background-color': c.color }\"\n        (click)=\"changeColor(c.color)\"\n        nz-tooltip\n        [nzTooltipTitle]=\"c.key\"\n        class=\"setting-drawer__theme-tag\"\n      >\n        <i *ngIf=\"color === c.color\" nz-icon nzType=\"check\"></i>\n      </span>\n    </div>\n    <nz-divider></nz-divider>\n    <div class=\"setting-drawer__body\">\n      <h3 class=\"setting-drawer__title\">\u8BBE\u7F6E</h3>\n      <nz-tabset>\n        <nz-tab nzTitle=\"\u9876\u90E8\">\n          <div class=\"setting-drawer__body\">\n            <setting-drawer-item [data]=\"data['alain-default-header-hg']\"></setting-drawer-item>\n            <setting-drawer-item [data]=\"data['alain-default-header-bg']\"></setting-drawer-item>\n            <setting-drawer-item [data]=\"data['alain-default-header-padding']\"></setting-drawer-item>\n          </div>\n        </nz-tab>\n        <nz-tab nzTitle=\"\u4FA7\u8FB9\u680F\">\n          <setting-drawer-item [data]=\"data['alain-default-aside-wd']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['alain-default-aside-bg']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['alain-default-aside-collapsed-wd']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['alain-default-aside-nav-padding-top-bottom']\"></setting-drawer-item>\n        </nz-tab>\n        <nz-tab nzTitle=\"\u5185\u5BB9\">\n          <setting-drawer-item [data]=\"data['alain-default-content-bg']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['alain-default-content-heading-bg']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['alain-default-content-heading-border']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['alain-default-content-padding']\"></setting-drawer-item>\n        </nz-tab>\n        <nz-tab nzTitle=\"\u5176\u5B83\">\n          <setting-drawer-item [data]=\"data['form-state-visual-feedback-enabled']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['preserve-white-spaces-enabled']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['nz-table-img-radius']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['nz-table-img-margin-right']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['nz-table-img-max-width']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['nz-table-img-max-height']\"></setting-drawer-item>\n        </nz-tab>\n      </nz-tabset>\n    </div>\n    <nz-divider></nz-divider>\n    <div class=\"setting-drawer__body\">\n      <div class=\"setting-drawer__body-item\">\n        \u56FA\u5B9A\u5934\u548C\u4FA7\u8FB9\u680F\n        <nz-switch nzSize=\"small\" [(ngModel)]=\"layout.fixed\" (ngModelChange)=\"setLayout('fixed', layout.fixed)\"></nz-switch>\n      </div>\n      <div class=\"setting-drawer__body-item\">\n        \u8272\u5F31\u6A21\u5F0F\n        <nz-switch nzSize=\"small\" [(ngModel)]=\"layout.colorWeak\" (ngModelChange)=\"setLayout('colorWeak', layout.colorWeak)\"></nz-switch>\n      </div>\n    </div>\n    <nz-divider></nz-divider>\n    <button (click)=\"apply()\" type=\"button\" nz-button nzType=\"primary\">\u9884\u89C8</button>\n    <button (click)=\"reset()\" type=\"button\" nz-button>\u91CD\u7F6E</button>\n    <button (click)=\"copyVar()\" type=\"button\" nz-button>\u62F7\u8D1D</button>\n    <nz-alert\n      class=\"mt-md\"\n      nzType=\"warning\"\n      nzMessage=\"\u914D\u7F6E\u680F\u53EA\u5728\u5F00\u53D1\u73AF\u5883\u7528\u4E8E\u9884\u89C8\uFF0C\u751F\u4EA7\u73AF\u5883\u4E0D\u4F1A\u5C55\u73B0\uFF0C\u8BF7\u62F7\u8D1D\u540E\u624B\u52A8\u4FEE\u6539\u53C2\u6570\u914D\u7F6E\u6587\u4EF6 src/styles/theme.less\"\n    ></nz-alert>\n  </div>\n</nz-drawer>\n<div\n  class=\"setting-drawer__handle\"\n  [ngClass]=\"{ 'setting-drawer__handle-opened': collapse }\"\n  (click)=\"toggle()\"\n  nz-tooltip\n  [nzTooltipTitle]=\"isDev ? devTips : null\"\n>\n  <i nz-icon [nzType]=\"!collapse ? 'setting' : 'close'\" class=\"setting-drawer__handle-icon\"></i>\n</div>\n",
                host: {
                    '[class.setting-drawer]': 'true',
                    '[class.setting-drawer-rtl]': `dir === 'rtl'`,
                },
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
SettingDrawerComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NzMessageService },
    { type: SettingsService },
    { type: LazyService },
    { type: NgZone },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Directionality, decorators: [{ type: Optional }] }
];
SettingDrawerComponent.propDecorators = {
    autoApplyColor: [{ type: Input }],
    devTips: [{ type: Input }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], SettingDrawerComponent.prototype, "autoApplyColor", void 0);
if (false) {
    /** @type {?} */
    SettingDrawerComponent.prototype.autoApplyColor;
    /** @type {?} */
    SettingDrawerComponent.prototype.devTips;
    /**
     * @type {?}
     * @private
     */
    SettingDrawerComponent.prototype.loadedLess;
    /**
     * @type {?}
     * @private
     */
    SettingDrawerComponent.prototype.destroy$;
    /** @type {?} */
    SettingDrawerComponent.prototype.dir;
    /** @type {?} */
    SettingDrawerComponent.prototype.isDev;
    /** @type {?} */
    SettingDrawerComponent.prototype.collapse;
    /** @type {?} */
    SettingDrawerComponent.prototype.data;
    /** @type {?} */
    SettingDrawerComponent.prototype.color;
    /** @type {?} */
    SettingDrawerComponent.prototype.colors;
    /**
     * @type {?}
     * @private
     */
    SettingDrawerComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    SettingDrawerComponent.prototype.msg;
    /**
     * @type {?}
     * @private
     */
    SettingDrawerComponent.prototype.settingSrv;
    /**
     * @type {?}
     * @private
     */
    SettingDrawerComponent.prototype.lazy;
    /**
     * @type {?}
     * @private
     */
    SettingDrawerComponent.prototype.zone;
    /**
     * @type {?}
     * @private
     */
    SettingDrawerComponent.prototype.doc;
    /**
     * @type {?}
     * @private
     */
    SettingDrawerComponent.prototype.directionality;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZy1kcmF3ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lL3NldHRpbmctZHJhd2VyLyIsInNvdXJjZXMiOlsic2V0dGluZy1kcmF3ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBYSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULE1BQU0sRUFDTixLQUFLLEVBQ0wsU0FBUyxFQUNULE1BQU0sRUFHTixRQUFRLEdBQ1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFVLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN2RCxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXhFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBV3ZGLE1BQU0sT0FBTyxzQkFBc0I7Ozs7Ozs7Ozs7SUFnQmpDLFlBQ1UsR0FBc0IsRUFDdEIsR0FBcUIsRUFDckIsVUFBMkIsRUFDM0IsSUFBaUIsRUFDakIsSUFBWSxFQUNNLEdBQVEsRUFDZCxjQUE4QjtRQU4xQyxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQUNyQixlQUFVLEdBQVYsVUFBVSxDQUFpQjtRQUMzQixTQUFJLEdB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UUFDbEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7O1lBbEtGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixnNElBQThDO2dCQUM5QyxJQUFJLEVBQUU7b0JBQ0osd0JBQXdCLEVBQUUsTUFBTTtvQkFDaEMsNEJBQTRCLEVBQUUsZUFBZTtpQkFDOUM7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUExQkMsaUJBQWlCO1lBYVYsZ0JBQWdCO1lBSFIsZUFBZTtZQUNPLFdBQVc7WUFOaEQsTUFBTTs0Q0E0Q0gsTUFBTSxTQUFDLFFBQVE7WUFyREEsY0FBYyx1QkFzRDdCLFFBQVE7Ozs2QkF0QlYsS0FBSztzQkFDTCxLQUFLOztBQURtQjtJQUFmLFlBQVksRUFBRTs7OERBQXVCOzs7SUFBL0MsZ0RBQStDOztJQUMvQyx5Q0FBbUc7Ozs7O0lBRW5HLDRDQUEyQjs7Ozs7SUFDM0IsMENBQXVDOztJQUN2QyxxQ0FBdUI7O0lBQ3ZCLHVDQUFvQjs7SUFDcEIsMENBQWlCOztJQUlqQixzQ0FBZTs7SUFDZix1Q0FBYzs7SUFDZCx3Q0FBd0I7Ozs7O0lBR3RCLHFDQUE4Qjs7Ozs7SUFDOUIscUNBQTZCOzs7OztJQUM3Qiw0Q0FBbUM7Ozs7O0lBQ25DLHNDQUF5Qjs7Ozs7SUFDekIsc0NBQW9COzs7OztJQUNwQixxQ0FBa0M7Ozs7O0lBQ2xDLGdEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgaXNEZXZNb2RlLFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMYXlvdXQsIFNldHRpbmdzU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBjb3B5LCBkZWVwQ29weSwgSW5wdXRCb29sZWFuLCBMYXp5U2VydmljZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBOek1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9tZXNzYWdlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEFMQUlOREVGQVVMVFZBUiwgREVGQVVMVF9DT0xPUlMsIERFRkFVTFRfVkFSUyB9IGZyb20gJy4vc2V0dGluZy1kcmF3ZXIudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZXR0aW5nLWRyYXdlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZXR0aW5nLWRyYXdlci5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLnNldHRpbmctZHJhd2VyXSc6ICd0cnVlJyxcbiAgICAnW2NsYXNzLnNldHRpbmctZHJhd2VyLXJ0bF0nOiBgZGlyID09PSAncnRsJ2AsXG4gIH0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBTZXR0aW5nRHJhd2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYXV0b0FwcGx5Q29sb3IgPSB0cnVlO1xuICBASW5wdXQoKSBkZXZUaXBzID0gYFdoZW4gdGhlIGNvbG9yIGNhbid0IGJlIHN3aXRjaGVkLCB5b3UgbmVlZCB0byBydW4gaXQgb25jZTogbnBtIHJ1biBjb2xvci1sZXNzYDtcblxuICBwcml2YXRlIGxvYWRlZExlc3MgPSBmYWxzZTtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIGRpcjogRGlyZWN0aW9uID0gJ2x0cic7XG4gIGlzRGV2ID0gaXNEZXZNb2RlKCk7XG4gIGNvbGxhcHNlID0gZmFsc2U7XG4gIGdldCBsYXlvdXQoKTogTGF5b3V0IHtcbiAgICByZXR1cm4gdGhpcy5zZXR0aW5nU3J2LmxheW91dDtcbiAgfVxuICBkYXRhOiBhbnkgPSB7fTtcbiAgY29sb3I6IHN0cmluZztcbiAgY29sb3JzID0gREVGQVVMVF9DT0xPUlM7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgbXNnOiBOek1lc3NhZ2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgc2V0dGluZ1NydjogU2V0dGluZ3NTZXJ2aWNlLFxuICAgIHByaXZhdGUgbGF6eTogTGF6eVNlcnZpY2UsXG4gICAgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IGFueSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eSxcbiAgKSB7XG4gICAgdGhpcy5jb2xvciA9IHRoaXMuY2FjaGVkRGF0YVsnQHByaW1hcnktY29sb3InXSB8fCB0aGlzLkRFRkFVTFRfUFJJTUFSWTtcbiAgICB0aGlzLnJlc2V0RGF0YSh0aGlzLmNhY2hlZERhdGEsIGZhbHNlKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IGNhY2hlZERhdGEoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0dGluZ1Nydi5sYXlvdXRbQUxBSU5ERUZBVUxUVkFSXSB8fCB7fTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IERFRkFVTFRfUFJJTUFSWSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBERUZBVUxUX1ZBUlNbJ3ByaW1hcnktY29sb3InXS5kZWZhdWx0O1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5kaXIgPSB0aGlzLmRpcmVjdGlvbmFsaXR5LnZhbHVlO1xuICAgIHRoaXMuZGlyZWN0aW9uYWxpdHkuY2hhbmdlPy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChkaXJlY3Rpb246IERpcmVjdGlvbikgPT4ge1xuICAgICAgdGhpcy5kaXIgPSBkaXJlY3Rpb247XG4gICAgfSk7XG4gICAgaWYgKHRoaXMuYXV0b0FwcGx5Q29sb3IgJiYgdGhpcy5jb2xvciAhPT0gdGhpcy5ERUZBVUxUX1BSSU1BUlkpIHtcbiAgICAgIHRoaXMuY2hhbmdlQ29sb3IodGhpcy5jb2xvcik7XG4gICAgICB0aGlzLnJ1bkxlc3MoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGxvYWRMZXNzKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICh0aGlzLmxvYWRlZExlc3MpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubGF6eVxuICAgICAgLmxvYWRTdHlsZSgnLi9hc3NldHMvY29sb3IubGVzcycsICdzdHlsZXNoZWV0L2xlc3MnKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICBjb25zdCBsZXNzQ29uZmlnTm9kZSA9IHRoaXMuZG9jLmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICBsZXNzQ29uZmlnTm9kZS5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgd2luZG93Lmxlc3MgPSB7XG4gICAgICAgICAgICBhc3luYzogdHJ1ZSxcbiAgICAgICAgICAgIGVudjogJ3Byb2R1Y3Rpb24nLFxuICAgICAgICAgICAgamF2YXNjcmlwdEVuYWJsZWQ6IHRydWVcbiAgICAgICAgICB9O1xuICAgICAgICBgO1xuICAgICAgICB0aGlzLmRvYy5ib2R5LmFwcGVuZENoaWxkKGxlc3NDb25maWdOb2RlKTtcbiAgICAgIH0pXG4gICAgICAudGhlbigoKSA9PiB0aGlzLmxhenkubG9hZFNjcmlwdCgnaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS9vcy9saWIvbGVzcy5qcy8zLjguMS9sZXNzLm1pbi5qcycpKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmxvYWRlZExlc3MgPSB0cnVlO1xuICAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdlblZhcnMoKTogYW55IHtcbiAgICBjb25zdCB7IGRhdGEsIGNvbG9yLCB2YWxpZEtleXMgfSA9IHRoaXM7XG4gICAgY29uc3QgdmFyczogYW55ID0ge1xuICAgICAgW2BAcHJpbWFyeS1jb2xvcmBdOiBjb2xvcixcbiAgICB9O1xuICAgIHZhbGlkS2V5cy5maWx0ZXIoa2V5ID0+IGtleSAhPT0gJ3ByaW1hcnktY29sb3InKS5mb3JFYWNoKGtleSA9PiAodmFyc1tgQCR7a2V5fWBdID0gZGF0YVtrZXldLnZhbHVlKSk7XG4gICAgdGhpcy5zZXRMYXlvdXQoQUxBSU5ERUZBVUxUVkFSLCB2YXJzKTtcbiAgICByZXR1cm4gdmFycztcbiAgfVxuXG4gIHByaXZhdGUgcnVuTGVzcygpOiB2b2lkIHtcbiAgICBjb25zdCB7IHpvbmUsIG1zZywgY2RyIH0gPSB0aGlzO1xuICAgIGNvbnN0IG1zZ0lkID0gbXNnLmxvYWRpbmcoYOato+WcqOe8luivkeS4u+mimO+8gWAsIHsgbnpEdXJhdGlvbjogMCB9KS5tZXNzYWdlSWQ7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB6b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgdGhpcy5sb2FkTGVzcygpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICh3aW5kb3cgYXMgYW55KS5sZXNzLm1vZGlmeVZhcnModGhpcy5nZW5WYXJzKCkpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgbXNnLnN1Y2Nlc3MoJ+aIkOWKnycpO1xuICAgICAgICAgICAgbXNnLnJlbW92ZShtc2dJZCk7XG4gICAgICAgICAgICB6b25lLnJ1bigoKSA9PiBjZHIuZGV0ZWN0Q2hhbmdlcygpKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9LCAyMDApO1xuICB9XG5cbiAgdG9nZ2xlKCk6IHZvaWQge1xuICAgIHRoaXMuY29sbGFwc2UgPSAhdGhpcy5jb2xsYXBzZTtcbiAgfVxuXG4gIGNoYW5nZUNvbG9yKGNvbG9yOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgT2JqZWN0LmtleXMoREVGQVVMVF9WQVJTKVxuICAgICAgLmZpbHRlcihrZXkgPT4gREVGQVVMVF9WQVJTW2tleV0uZGVmYXVsdCA9PT0gJ0BwcmltYXJ5LWNvbG9yJylcbiAgICAgIC5mb3JFYWNoKGtleSA9PiBkZWxldGUgdGhpcy5jYWNoZWREYXRhW2BAJHtrZXl9YF0pO1xuICAgIHRoaXMucmVzZXREYXRhKHRoaXMuY2FjaGVkRGF0YSwgZmFsc2UpO1xuICB9XG5cbiAgc2V0TGF5b3V0KG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuc2V0dGluZ1Nydi5zZXRMYXlvdXQobmFtZSwgdmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNldERhdGEobm93RGF0YT86IHsgW2tleTogc3RyaW5nXTogTnpTYWZlQW55IH0sIHJ1bjogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcbiAgICBub3dEYXRhID0gbm93RGF0YSB8fCB7fTtcbiAgICBjb25zdCBkYXRhID0gZGVlcENvcHkoREVGQVVMVF9WQVJTKTtcbiAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IG5vd0RhdGEhW2BAJHtrZXl9YF0gfHwgZGF0YVtrZXldLmRlZmF1bHQgfHwgJyc7XG4gICAgICBkYXRhW2tleV0udmFsdWUgPSB2YWx1ZSA9PT0gYEBwcmltYXJ5LWNvbG9yYCA/IHRoaXMuY29sb3IgOiB2YWx1ZTtcbiAgICB9KTtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIGlmIChydW4pIHtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIHRoaXMucnVuTGVzcygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0IHZhbGlkS2V5cygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuZGF0YSkuZmlsdGVyKGtleSA9PiB0aGlzLmRhdGFba2V5XS52YWx1ZSAhPT0gdGhpcy5kYXRhW2tleV0uZGVmYXVsdCk7XG4gIH1cblxuICBhcHBseSgpOiB2b2lkIHtcbiAgICB0aGlzLnJ1bkxlc3MoKTtcbiAgfVxuXG4gIHJlc2V0KCk6IHZvaWQge1xuICAgIHRoaXMuY29sb3IgPSB0aGlzLkRFRkFVTFRfUFJJTUFSWTtcbiAgICB0aGlzLnNldHRpbmdTcnYuc2V0TGF5b3V0KEFMQUlOREVGQVVMVFZBUiwge30pO1xuICAgIHRoaXMucmVzZXREYXRhKHt9KTtcbiAgfVxuXG4gIGNvcHlWYXIoKTogdm9pZCB7XG4gICAgY29uc3QgdmFycyA9IHRoaXMuZ2VuVmFycygpO1xuICAgIGNvbnN0IGNvcHlDb250ZW50ID0gT2JqZWN0LmtleXModmFycylcbiAgICAgIC5tYXAoa2V5ID0+IGAke2tleX06ICR7dmFyc1trZXldfTtgKVxuICAgICAgLmpvaW4oJ1xcbicpO1xuICAgIGNvcHkoY29weUNvbnRlbnQpO1xuICAgIHRoaXMubXNnLnN1Y2Nlc3MoJ0NvcHkgc3VjY2VzcycpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=