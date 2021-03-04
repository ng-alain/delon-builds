import { __awaiter, __decorate, __metadata } from "tslib";
import { Directionality } from '@angular/cdk/bidi';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Input, isDevMode, NgZone, Optional } from '@angular/core';
import { SettingsService } from '@delon/theme';
import { copy } from '@delon/util/browser';
import { InputBoolean } from '@delon/util/decorator';
import { deepCopy, LazyService } from '@delon/util/other';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ALAINDEFAULTVAR, DEFAULT_COLORS, DEFAULT_VARS } from './setting-drawer.types';
let SettingDrawerComponent = class SettingDrawerComponent {
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
        this.dir = 'ltr';
        this.isDev = isDevMode();
        this.collapse = false;
        this.data = {};
        this.colors = DEFAULT_COLORS;
        this.color = this.cachedData['@primary-color'] || this.DEFAULT_PRIMARY;
        this.resetData(this.cachedData, false);
    }
    get layout() {
        return this.settingSrv.layout;
    }
    get cachedData() {
        return this.settingSrv.layout[ALAINDEFAULTVAR] || {};
    }
    get DEFAULT_PRIMARY() {
        return DEFAULT_VARS['primary-color'].default;
    }
    ngOnInit() {
        var _a;
        this.dir = this.directionality.value;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(untilDestroyed(this)).subscribe((direction) => {
            this.dir = direction;
        });
        if (this.autoApplyColor && this.color !== this.DEFAULT_PRIMARY) {
            this.changeColor(this.color);
            this.runLess();
        }
    }
    loadLess() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.loadedLess) {
                return Promise.resolve();
            }
            return this.lazy
                .loadStyle('./assets/color.less', 'stylesheet/less')
                .then(() => {
                const lessConfigNode = this.doc.createElement('script');
                lessConfigNode.innerHTML = `
          window.less = {
            async: true,
            env: 'production',
            javascriptEnabled: true
          };
        `;
                this.doc.body.appendChild(lessConfigNode);
            })
                .then(() => this.lazy.loadScript('https://gw.alipayobjects.com/os/lib/less.js/3.8.1/less.min.js'))
                .then(() => {
                this.loadedLess = true;
            });
        });
    }
    genVars() {
        const { data, color, validKeys } = this;
        const vars = {
            [`@primary-color`]: color,
        };
        validKeys.filter(key => key !== 'primary-color').forEach(key => (vars[`@${key}`] = data[key].value));
        this.setLayout(ALAINDEFAULTVAR, vars);
        return vars;
    }
    runLess() {
        const { zone, msg, cdr } = this;
        const msgId = msg.loading(`正在编译主题！`, { nzDuration: 0 }).messageId;
        setTimeout(() => {
            zone.runOutsideAngular(() => {
                this.loadLess().then(() => {
                    window.less.modifyVars(this.genVars()).then(() => {
                        msg.success('成功');
                        msg.remove(msgId);
                        zone.run(() => cdr.detectChanges());
                    });
                });
            });
        }, 200);
    }
    toggle() {
        this.collapse = !this.collapse;
    }
    changeColor(color) {
        this.color = color;
        Object.keys(DEFAULT_VARS)
            .filter(key => DEFAULT_VARS[key].default === '@primary-color')
            .forEach(key => delete this.cachedData[`@${key}`]);
        this.resetData(this.cachedData, false);
    }
    setLayout(name, value) {
        this.settingSrv.setLayout(name, value);
    }
    resetData(nowData, run = true) {
        nowData = nowData || {};
        const data = deepCopy(DEFAULT_VARS);
        Object.keys(data).forEach(key => {
            const value = nowData[`@${key}`] || data[key].default || '';
            data[key].value = value === `@primary-color` ? this.color : value;
        });
        this.data = data;
        if (run) {
            this.cdr.detectChanges();
            this.runLess();
        }
    }
    get validKeys() {
        return Object.keys(this.data).filter(key => this.data[key].value !== this.data[key].default);
    }
    apply() {
        this.runLess();
    }
    reset() {
        this.color = this.DEFAULT_PRIMARY;
        this.settingSrv.setLayout(ALAINDEFAULTVAR, {});
        this.resetData({});
    }
    copyVar() {
        const vars = this.genVars();
        const copyContent = Object.keys(vars)
            .map(key => `${key}: ${vars[key]};`)
            .join('\n');
        copy(copyContent);
        this.msg.success('Copy success');
    }
};
SettingDrawerComponent.decorators = [
    { type: Component, args: [{
                selector: 'setting-drawer',
                template: "<nz-drawer [nzVisible]=\"collapse\" [nzPlacement]=\"dir === 'rtl' ? 'left' : 'right'\" [nzWidth]=\"500\" (nzOnClose)=\"toggle()\">\n  <div *nzDrawerContent class=\"setting-drawer__content\">\n    <div class=\"setting-drawer__body setting-drawer__theme\">\n      <h3 class=\"setting-drawer__title\">\u4E3B\u9898\u8272</h3>\n      <span\n        *ngFor=\"let c of colors\"\n        [style]=\"{ 'background-color': c.color }\"\n        (click)=\"changeColor(c.color)\"\n        nz-tooltip\n        [nzTooltipTitle]=\"c.key\"\n        class=\"setting-drawer__theme-tag\"\n      >\n        <i *ngIf=\"color === c.color\" nz-icon nzType=\"check\"></i>\n      </span>\n    </div>\n    <nz-divider></nz-divider>\n    <div class=\"setting-drawer__body\">\n      <h3 class=\"setting-drawer__title\">\u8BBE\u7F6E</h3>\n      <nz-tabset>\n        <nz-tab nzTitle=\"\u9876\u90E8\">\n          <div class=\"setting-drawer__body\">\n            <setting-drawer-item [data]=\"data['alain-default-header-hg']\"></setting-drawer-item>\n            <setting-drawer-item [data]=\"data['alain-default-header-bg']\"></setting-drawer-item>\n            <setting-drawer-item [data]=\"data['alain-default-header-padding']\"></setting-drawer-item>\n          </div>\n        </nz-tab>\n        <nz-tab nzTitle=\"\u4FA7\u8FB9\u680F\">\n          <setting-drawer-item [data]=\"data['alain-default-aside-wd']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['alain-default-aside-bg']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['alain-default-aside-collapsed-wd']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['alain-default-aside-nav-padding-top-bottom']\"></setting-drawer-item>\n        </nz-tab>\n        <nz-tab nzTitle=\"\u5185\u5BB9\">\n          <setting-drawer-item [data]=\"data['alain-default-content-bg']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['alain-default-content-heading-bg']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['alain-default-content-heading-border']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['alain-default-content-padding']\"></setting-drawer-item>\n        </nz-tab>\n        <nz-tab nzTitle=\"\u5176\u5B83\">\n          <setting-drawer-item [data]=\"data['form-state-visual-feedback-enabled']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['preserve-white-spaces-enabled']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['nz-table-img-radius']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['nz-table-img-margin-right']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['nz-table-img-max-width']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['nz-table-img-max-height']\"></setting-drawer-item>\n        </nz-tab>\n      </nz-tabset>\n    </div>\n    <nz-divider></nz-divider>\n    <div class=\"setting-drawer__body\">\n      <div class=\"setting-drawer__body-item\">\n        \u56FA\u5B9A\u5934\u548C\u4FA7\u8FB9\u680F\n        <nz-switch nzSize=\"small\" [(ngModel)]=\"layout.fixed\" (ngModelChange)=\"setLayout('fixed', layout.fixed)\"></nz-switch>\n      </div>\n      <div class=\"setting-drawer__body-item\">\n        \u8272\u5F31\u6A21\u5F0F\n        <nz-switch nzSize=\"small\" [(ngModel)]=\"layout.colorWeak\" (ngModelChange)=\"setLayout('colorWeak', layout.colorWeak)\"></nz-switch>\n      </div>\n    </div>\n    <nz-divider></nz-divider>\n    <button (click)=\"apply()\" type=\"button\" nz-button nzType=\"primary\">\u9884\u89C8</button>\n    <button (click)=\"reset()\" type=\"button\" nz-button>\u91CD\u7F6E</button>\n    <button (click)=\"copyVar()\" type=\"button\" nz-button>\u62F7\u8D1D</button>\n    <nz-alert\n      class=\"mt-md\"\n      nzType=\"warning\"\n      nzMessage=\"\u914D\u7F6E\u680F\u53EA\u5728\u5F00\u53D1\u73AF\u5883\u7528\u4E8E\u9884\u89C8\uFF0C\u751F\u4EA7\u73AF\u5883\u4E0D\u4F1A\u5C55\u73B0\uFF0C\u8BF7\u62F7\u8D1D\u540E\u624B\u52A8\u4FEE\u6539\u53C2\u6570\u914D\u7F6E\u6587\u4EF6 src/styles/theme.less\"\n    ></nz-alert>\n  </div>\n</nz-drawer>\n<div\n  class=\"setting-drawer__handle\"\n  [ngClass]=\"{ 'setting-drawer__handle-opened': collapse }\"\n  (click)=\"toggle()\"\n  nz-tooltip\n  [nzTooltipTitle]=\"isDev ? devTips : null\"\n>\n  <i nz-icon [nzType]=\"!collapse ? 'setting' : 'close'\" class=\"setting-drawer__handle-icon\"></i>\n</div>\n",
                host: {
                    '[class.setting-drawer]': 'true',
                    '[class.setting-drawer-rtl]': `dir === 'rtl'`,
                },
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
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
SettingDrawerComponent = __decorate([
    UntilDestroy(),
    __metadata("design:paramtypes", [ChangeDetectorRef,
        NzMessageService,
        SettingsService,
        LazyService,
        NgZone, Object, Directionality])
], SettingDrawerComponent);
export { SettingDrawerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZy1kcmF3ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdGhlbWUvc2V0dGluZy1kcmF3ZXIvc2V0dGluZy1kcmF3ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQWEsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFVLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxSSxPQUFPLEVBQVUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDckQsT0FBTyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXJFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0lBWTFFLHNCQUFzQixTQUF0QixzQkFBc0I7SUFlakMsWUFDVSxHQUFzQixFQUN0QixHQUFxQixFQUNyQixVQUEyQixFQUMzQixJQUFpQixFQUNqQixJQUFZLEVBQ00sR0FBUSxFQUNkLGNBQThCO1FBTjFDLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLFFBQUcsR0FBSCxHQUFHLENBQWtCO1FBQ3JCLGVBQVUsR0FBVixV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WUE3SkEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLGc0SUFBOEM7Z0JBQzlDLElBQUksRUFBRTtvQkFDSix3QkFBd0IsRUFBRSxNQUFNO29CQUNoQyw0QkFBNEIsRUFBRSxlQUFlO2lCQUM5QztnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OztZQW5CaUMsaUJBQWlCO1lBTzFDLGdCQUFnQjtZQU5SLGVBQWU7WUFHYixXQUFXO1lBSjRELE1BQU07NENBeUMzRixNQUFNLFNBQUMsUUFBUTtZQTNDQSxjQUFjLHVCQTRDN0IsUUFBUTs7OzZCQXJCVixLQUFLO3NCQUNMLEtBQUs7O0FBRG1CO0lBQWYsWUFBWSxFQUFFOzs4REFBdUI7QUFEcEMsc0JBQXNCO0lBVmxDLFlBQVksRUFBRTtxQ0EwQkUsaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNULGVBQWU7UUFDckIsV0FBVztRQUNYLE1BQU0sVUFFZ0IsY0FBYztHQXRCekMsc0JBQXNCLENBb0psQztTQXBKWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3Rpb24sIERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEluamVjdCwgSW5wdXQsIGlzRGV2TW9kZSwgTmdab25lLCBPbkluaXQsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMYXlvdXQsIFNldHRpbmdzU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBjb3B5IH0gZnJvbSAnQGRlbG9uL3V0aWwvYnJvd3Nlcic7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICdAZGVsb24vdXRpbC9kZWNvcmF0b3InO1xuaW1wb3J0IHsgZGVlcENvcHksIExhenlTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwvb3RoZXInO1xuaW1wb3J0IHsgVW50aWxEZXN0cm95LCB1bnRpbERlc3Ryb3llZCB9IGZyb20gJ0BuZ25lYXQvdW50aWwtZGVzdHJveSc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgTnpNZXNzYWdlU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvbWVzc2FnZSc7XG5pbXBvcnQgeyBBTEFJTkRFRkFVTFRWQVIsIERFRkFVTFRfQ09MT1JTLCBERUZBVUxUX1ZBUlMgfSBmcm9tICcuL3NldHRpbmctZHJhd2VyLnR5cGVzJztcblxuQFVudGlsRGVzdHJveSgpXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZXR0aW5nLWRyYXdlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZXR0aW5nLWRyYXdlci5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLnNldHRpbmctZHJhd2VyXSc6ICd0cnVlJyxcbiAgICAnW2NsYXNzLnNldHRpbmctZHJhd2VyLXJ0bF0nOiBgZGlyID09PSAncnRsJ2AsXG4gIH0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBTZXR0aW5nRHJhd2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGF1dG9BcHBseUNvbG9yID0gdHJ1ZTtcbiAgQElucHV0KCkgZGV2VGlwcyA9IGBXaGVuIHRoZSBjb2xvciBjYW4ndCBiZSBzd2l0Y2hlZCwgeW91IG5lZWQgdG8gcnVuIGl0IG9uY2U6IG5wbSBydW4gY29sb3ItbGVzc2A7XG5cbiAgcHJpdmF0ZSBsb2FkZWRMZXNzID0gZmFsc2U7XG4gIGRpcjogRGlyZWN0aW9uID0gJ2x0cic7XG4gIGlzRGV2ID0gaXNEZXZNb2RlKCk7XG4gIGNvbGxhcHNlID0gZmFsc2U7XG4gIGdldCBsYXlvdXQoKTogTGF5b3V0IHtcbiAgICByZXR1cm4gdGhpcy5zZXR0aW5nU3J2LmxheW91dDtcbiAgfVxuICBkYXRhOiBhbnkgPSB7fTtcbiAgY29sb3I6IHN0cmluZztcbiAgY29sb3JzID0gREVGQVVMVF9DT0xPUlM7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgbXNnOiBOek1lc3NhZ2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgc2V0dGluZ1NydjogU2V0dGluZ3NTZXJ2aWNlLFxuICAgIHByaXZhdGUgbGF6eTogTGF6eVNlcnZpY2UsXG4gICAgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IGFueSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eSxcbiAgKSB7XG4gICAgdGhpcy5jb2xvciA9IHRoaXMuY2FjaGVkRGF0YVsnQHByaW1hcnktY29sb3InXSB8fCB0aGlzLkRFRkFVTFRfUFJJTUFSWTtcbiAgICB0aGlzLnJlc2V0RGF0YSh0aGlzLmNhY2hlZERhdGEsIGZhbHNlKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IGNhY2hlZERhdGEoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0dGluZ1Nydi5sYXlvdXRbQUxBSU5ERUZBVUxUVkFSXSB8fCB7fTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IERFRkFVTFRfUFJJTUFSWSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBERUZBVUxUX1ZBUlNbJ3ByaW1hcnktY29sb3InXS5kZWZhdWx0O1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5kaXIgPSB0aGlzLmRpcmVjdGlvbmFsaXR5LnZhbHVlO1xuICAgIHRoaXMuZGlyZWN0aW9uYWxpdHkuY2hhbmdlPy5waXBlKHVudGlsRGVzdHJveWVkKHRoaXMpKS5zdWJzY3JpYmUoKGRpcmVjdGlvbjogRGlyZWN0aW9uKSA9PiB7XG4gICAgICB0aGlzLmRpciA9IGRpcmVjdGlvbjtcbiAgICB9KTtcbiAgICBpZiAodGhpcy5hdXRvQXBwbHlDb2xvciAmJiB0aGlzLmNvbG9yICE9PSB0aGlzLkRFRkFVTFRfUFJJTUFSWSkge1xuICAgICAgdGhpcy5jaGFuZ2VDb2xvcih0aGlzLmNvbG9yKTtcbiAgICAgIHRoaXMucnVuTGVzcygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgbG9hZExlc3MoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKHRoaXMubG9hZGVkTGVzcykge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5sYXp5XG4gICAgICAubG9hZFN0eWxlKCcuL2Fzc2V0cy9jb2xvci5sZXNzJywgJ3N0eWxlc2hlZXQvbGVzcycpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIGNvbnN0IGxlc3NDb25maWdOb2RlID0gdGhpcy5kb2MuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIGxlc3NDb25maWdOb2RlLmlubmVySFRNTCA9IGBcbiAgICAgICAgICB3aW5kb3cubGVzcyA9IHtcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgICAgICAgZW52OiAncHJvZHVjdGlvbicsXG4gICAgICAgICAgICBqYXZhc2NyaXB0RW5hYmxlZDogdHJ1ZVxuICAgICAgICAgIH07XG4gICAgICAgIGA7XG4gICAgICAgIHRoaXMuZG9jLmJvZHkuYXBwZW5kQ2hpbGQobGVzc0NvbmZpZ05vZGUpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHRoaXMubGF6eS5sb2FkU2NyaXB0KCdodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL29zL2xpYi9sZXNzLmpzLzMuOC4xL2xlc3MubWluLmpzJykpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMubG9hZGVkTGVzcyA9IHRydWU7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuVmFycygpOiBhbnkge1xuICAgIGNvbnN0IHsgZGF0YSwgY29sb3IsIHZhbGlkS2V5cyB9ID0gdGhpcztcbiAgICBjb25zdCB2YXJzOiBhbnkgPSB7XG4gICAgICBbYEBwcmltYXJ5LWNvbG9yYF06IGNvbG9yLFxuICAgIH07XG4gICAgdmFsaWRLZXlzLmZpbHRlcihrZXkgPT4ga2V5ICE9PSAncHJpbWFyeS1jb2xvcicpLmZvckVhY2goa2V5ID0+ICh2YXJzW2BAJHtrZXl9YF0gPSBkYXRhW2tleV0udmFsdWUpKTtcbiAgICB0aGlzLnNldExheW91dChBTEFJTkRFRkFVTFRWQVIsIHZhcnMpO1xuICAgIHJldHVybiB2YXJzO1xuICB9XG5cbiAgcHJpdmF0ZSBydW5MZXNzKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgem9uZSwgbXNnLCBjZHIgfSA9IHRoaXM7XG4gICAgY29uc3QgbXNnSWQgPSBtc2cubG9hZGluZyhg5q2j5Zyo57yW6K+R5Li76aKY77yBYCwgeyBuekR1cmF0aW9uOiAwIH0pLm1lc3NhZ2VJZDtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICB0aGlzLmxvYWRMZXNzKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgKHdpbmRvdyBhcyBhbnkpLmxlc3MubW9kaWZ5VmFycyh0aGlzLmdlblZhcnMoKSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBtc2cuc3VjY2Vzcygn5oiQ5YqfJyk7XG4gICAgICAgICAgICBtc2cucmVtb3ZlKG1zZ0lkKTtcbiAgICAgICAgICAgIHpvbmUucnVuKCgpID0+IGNkci5kZXRlY3RDaGFuZ2VzKCkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0sIDIwMCk7XG4gIH1cblxuICB0b2dnbGUoKTogdm9pZCB7XG4gICAgdGhpcy5jb2xsYXBzZSA9ICF0aGlzLmNvbGxhcHNlO1xuICB9XG5cbiAgY2hhbmdlQ29sb3IoY29sb3I6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICBPYmplY3Qua2V5cyhERUZBVUxUX1ZBUlMpXG4gICAgICAuZmlsdGVyKGtleSA9PiBERUZBVUxUX1ZBUlNba2V5XS5kZWZhdWx0ID09PSAnQHByaW1hcnktY29sb3InKVxuICAgICAgLmZvckVhY2goa2V5ID0+IGRlbGV0ZSB0aGlzLmNhY2hlZERhdGFbYEAke2tleX1gXSk7XG4gICAgdGhpcy5yZXNldERhdGEodGhpcy5jYWNoZWREYXRhLCBmYWxzZSk7XG4gIH1cblxuICBzZXRMYXlvdXQobmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5zZXR0aW5nU3J2LnNldExheW91dChuYW1lLCB2YWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIHJlc2V0RGF0YShub3dEYXRhPzogeyBba2V5OiBzdHJpbmddOiBOelNhZmVBbnkgfSwgcnVuOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xuICAgIG5vd0RhdGEgPSBub3dEYXRhIHx8IHt9O1xuICAgIGNvbnN0IGRhdGEgPSBkZWVwQ29weShERUZBVUxUX1ZBUlMpO1xuICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gbm93RGF0YSFbYEAke2tleX1gXSB8fCBkYXRhW2tleV0uZGVmYXVsdCB8fCAnJztcbiAgICAgIGRhdGFba2V5XS52YWx1ZSA9IHZhbHVlID09PSBgQHByaW1hcnktY29sb3JgID8gdGhpcy5jb2xvciA6IHZhbHVlO1xuICAgIH0pO1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgaWYgKHJ1bikge1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgdGhpcy5ydW5MZXNzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXQgdmFsaWRLZXlzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5kYXRhKS5maWx0ZXIoa2V5ID0+IHRoaXMuZGF0YVtrZXldLnZhbHVlICE9PSB0aGlzLmRhdGFba2V5XS5kZWZhdWx0KTtcbiAgfVxuXG4gIGFwcGx5KCk6IHZvaWQge1xuICAgIHRoaXMucnVuTGVzcygpO1xuICB9XG5cbiAgcmVzZXQoKTogdm9pZCB7XG4gICAgdGhpcy5jb2xvciA9IHRoaXMuREVGQVVMVF9QUklNQVJZO1xuICAgIHRoaXMuc2V0dGluZ1Nydi5zZXRMYXlvdXQoQUxBSU5ERUZBVUxUVkFSLCB7fSk7XG4gICAgdGhpcy5yZXNldERhdGEoe30pO1xuICB9XG5cbiAgY29weVZhcigpOiB2b2lkIHtcbiAgICBjb25zdCB2YXJzID0gdGhpcy5nZW5WYXJzKCk7XG4gICAgY29uc3QgY29weUNvbnRlbnQgPSBPYmplY3Qua2V5cyh2YXJzKVxuICAgICAgLm1hcChrZXkgPT4gYCR7a2V5fTogJHt2YXJzW2tleV19O2ApXG4gICAgICAuam9pbignXFxuJyk7XG4gICAgY29weShjb3B5Q29udGVudCk7XG4gICAgdGhpcy5tc2cuc3VjY2VzcygnQ29weSBzdWNjZXNzJyk7XG4gIH1cbn1cbiJdfQ==