import { __awaiter, __decorate } from "tslib";
import { Directionality } from '@angular/cdk/bidi';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Input, isDevMode, NgZone, Optional } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzMessageService } from 'ng-zorro-antd/message';
import { SettingsService } from '@delon/theme';
import { copy } from '@delon/util/browser';
import { InputBoolean, ZoneOutside } from '@delon/util/decorator';
import { deepCopy, LazyService } from '@delon/util/other';
import { ALAINDEFAULTVAR, DEFAULT_COLORS, DEFAULT_VARS } from './setting-drawer.types';
export class SettingDrawerComponent {
    constructor(cdr, msg, settingSrv, lazy, ngZone, doc, directionality) {
        this.cdr = cdr;
        this.msg = msg;
        this.settingSrv = settingSrv;
        this.lazy = lazy;
        this.ngZone = ngZone;
        this.doc = doc;
        this.directionality = directionality;
        this.autoApplyColor = true;
        this.compilingText = 'Compiling...';
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
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
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
            [`@primary-color`]: color
        };
        validKeys.filter(key => key !== 'primary-color').forEach(key => (vars[`@${key}`] = data[key].value));
        this.setLayout(ALAINDEFAULTVAR, vars);
        return vars;
    }
    runLess() {
        const { ngZone, msg, cdr } = this;
        const msgId = msg.loading(this.compilingText, { nzDuration: 0 }).messageId;
        setTimeout(() => {
            this.loadLess().then(() => {
                window.less.modifyVars(this.genVars()).then(() => {
                    msg.success('成功');
                    msg.remove(msgId);
                    ngZone.run(() => cdr.detectChanges());
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
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
SettingDrawerComponent.decorators = [
    { type: Component, args: [{
                selector: 'setting-drawer',
                template: "<nz-drawer\n  [nzVisible]=\"collapse\"\n  [nzPlacement]=\"dir === 'rtl' ? 'left' : 'right'\"\n  [nzWidth]=\"500\"\n  (nzOnClose)=\"toggle()\"\n>\n  <div *nzDrawerContent class=\"setting-drawer__content\">\n    <div class=\"setting-drawer__body setting-drawer__theme\">\n      <h3 class=\"setting-drawer__title\">\u4E3B\u9898\u8272</h3>\n      <span\n        *ngFor=\"let c of colors\"\n        [style]=\"{ 'background-color': c.color }\"\n        (click)=\"changeColor(c.color)\"\n        nz-tooltip\n        [nzTooltipTitle]=\"c.key\"\n        class=\"setting-drawer__theme-tag\"\n      >\n        <i *ngIf=\"color === c.color\" nz-icon nzType=\"check\"></i>\n      </span>\n    </div>\n    <nz-divider></nz-divider>\n    <div class=\"setting-drawer__body\">\n      <h3 class=\"setting-drawer__title\">\u8BBE\u7F6E</h3>\n      <nz-tabset>\n        <nz-tab nzTitle=\"\u9876\u90E8\">\n          <div class=\"setting-drawer__body\">\n            <setting-drawer-item [data]=\"data['alain-default-header-hg']\"></setting-drawer-item>\n            <setting-drawer-item [data]=\"data['alain-default-header-bg']\"></setting-drawer-item>\n            <setting-drawer-item [data]=\"data['alain-default-header-padding']\"></setting-drawer-item>\n          </div>\n        </nz-tab>\n        <nz-tab nzTitle=\"\u4FA7\u8FB9\u680F\">\n          <setting-drawer-item [data]=\"data['alain-default-aside-wd']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['alain-default-aside-bg']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['alain-default-aside-collapsed-wd']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['alain-default-aside-nav-padding-top-bottom']\"></setting-drawer-item>\n        </nz-tab>\n        <nz-tab nzTitle=\"\u5185\u5BB9\">\n          <setting-drawer-item [data]=\"data['alain-default-content-bg']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['alain-default-content-heading-bg']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['alain-default-content-heading-border']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['alain-default-content-padding']\"></setting-drawer-item>\n        </nz-tab>\n        <nz-tab nzTitle=\"\u5176\u5B83\">\n          <setting-drawer-item [data]=\"data['form-state-visual-feedback-enabled']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['preserve-white-spaces-enabled']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['nz-table-img-radius']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['nz-table-img-margin-right']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['nz-table-img-max-width']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['nz-table-img-max-height']\"></setting-drawer-item>\n        </nz-tab>\n      </nz-tabset>\n    </div>\n    <nz-divider></nz-divider>\n    <div class=\"setting-drawer__body\">\n      <div class=\"setting-drawer__body-item\">\n        \u56FA\u5B9A\u5934\u548C\u4FA7\u8FB9\u680F\n        <nz-switch\n          nzSize=\"small\"\n          [(ngModel)]=\"layout.fixed\"\n          (ngModelChange)=\"setLayout('fixed', layout.fixed)\"\n        ></nz-switch>\n      </div>\n      <div class=\"setting-drawer__body-item\">\n        \u8272\u5F31\u6A21\u5F0F\n        <nz-switch\n          nzSize=\"small\"\n          [(ngModel)]=\"layout.colorWeak\"\n          (ngModelChange)=\"setLayout('colorWeak', layout.colorWeak)\"\n        ></nz-switch>\n      </div>\n    </div>\n    <nz-divider></nz-divider>\n    <button (click)=\"apply()\" type=\"button\" nz-button nzType=\"primary\">\u9884\u89C8</button>\n    <button (click)=\"reset()\" type=\"button\" nz-button>\u91CD\u7F6E</button>\n    <button (click)=\"copyVar()\" type=\"button\" nz-button>\u62F7\u8D1D</button>\n    <nz-alert\n      class=\"mt-md\"\n      nzType=\"warning\"\n      nzMessage=\"\u914D\u7F6E\u680F\u53EA\u5728\u5F00\u53D1\u73AF\u5883\u7528\u4E8E\u9884\u89C8\uFF0C\u751F\u4EA7\u73AF\u5883\u4E0D\u4F1A\u5C55\u73B0\uFF0C\u8BF7\u62F7\u8D1D\u540E\u624B\u52A8\u4FEE\u6539\u53C2\u6570\u914D\u7F6E\u6587\u4EF6 src/styles/theme.less\"\n    ></nz-alert>\n  </div>\n</nz-drawer>\n<div\n  class=\"setting-drawer__handle\"\n  [ngClass]=\"{ 'setting-drawer__handle-opened': collapse }\"\n  (click)=\"toggle()\"\n  nz-tooltip\n  [nzTooltipTitle]=\"isDev ? devTips : null\"\n>\n  <i nz-icon [nzType]=\"!collapse ? 'setting' : 'close'\" class=\"setting-drawer__handle-icon\"></i>\n</div>\n",
                host: {
                    '[class.setting-drawer]': 'true',
                    '[class.setting-drawer-rtl]': `dir === 'rtl'`
                },
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
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
    compilingText: [{ type: Input }],
    devTips: [{ type: Input }]
};
__decorate([
    InputBoolean()
], SettingDrawerComponent.prototype, "autoApplyColor", void 0);
__decorate([
    ZoneOutside()
], SettingDrawerComponent.prototype, "loadLess", null);
__decorate([
    ZoneOutside()
], SettingDrawerComponent.prototype, "runLess", null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZy1kcmF3ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdGhlbWUvc2V0dGluZy1kcmF3ZXIvc2V0dGluZy1kcmF3ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQWEsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxNQUFNLEVBQ04sS0FBSyxFQUNMLFNBQVMsRUFDVCxNQUFNLEVBR04sUUFBUSxFQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXpELE9BQU8sRUFBVSxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDdkQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQVd2RixNQUFNLE9BQU8sc0JBQXNCO0lBaUJqQyxZQUNVLEdBQXNCLEVBQ3RCLEdBQXFCLEVBQ3JCLFVBQTJCLEVBQzNCLElBQWlCLEVBQ2pCLE1BQWMsRUFDSSxHQUFRLEVBQ2QsY0FBOEI7UUFOMUMsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFD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QixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7WUFuS0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLG8rSUFBOEM7Z0JBQzlDLElBQUksRUFBRTtvQkFDSix3QkFBd0IsRUFBRSxNQUFNO29CQUNoQyw0QkFBNEIsRUFBRSxlQUFlO2lCQUM5QztnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7O1lBL0JDLGlCQUFpQjtZQWNWLGdCQUFnQjtZQUVSLGVBQWU7WUFHYixXQUFXO1lBZDVCLE1BQU07NENBa0RILE1BQU0sU0FBQyxRQUFRO1lBM0RBLGNBQWMsdUJBNEQ3QixRQUFROzs7NkJBdkJWLEtBQUs7NEJBQ0wsS0FBSztzQkFDTCxLQUFLOztBQUZtQjtJQUFmLFlBQVksRUFBRTs4REFBdUI7QUFpRC9DO0lBREMsV0FBVyxFQUFFO3NEQXNCYjtBQWFEO0lBREMsV0FBVyxFQUFFO3FEQWFiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBJbmplY3QsXG4gIElucHV0LFxuICBpc0Rldk1vZGUsXG4gIE5nWm9uZSxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgTnpNZXNzYWdlU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvbWVzc2FnZSc7XG5cbmltcG9ydCB7IExheW91dCwgU2V0dGluZ3NTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IGNvcHkgfSBmcm9tICdAZGVsb24vdXRpbC9icm93c2VyJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgWm9uZU91dHNpZGUgfSBmcm9tICdAZGVsb24vdXRpbC9kZWNvcmF0b3InO1xuaW1wb3J0IHsgZGVlcENvcHksIExhenlTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwvb3RoZXInO1xuXG5pbXBvcnQgeyBBTEFJTkRFRkFVTFRWQVIsIERFRkFVTFRfQ09MT1JTLCBERUZBVUxUX1ZBUlMgfSBmcm9tICcuL3NldHRpbmctZHJhd2VyLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2V0dGluZy1kcmF3ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vc2V0dGluZy1kcmF3ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5zZXR0aW5nLWRyYXdlcl0nOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5zZXR0aW5nLWRyYXdlci1ydGxdJzogYGRpciA9PT0gJ3J0bCdgXG4gIH0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFNldHRpbmdEcmF3ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBhdXRvQXBwbHlDb2xvciA9IHRydWU7XG4gIEBJbnB1dCgpIGNvbXBpbGluZ1RleHQgPSAnQ29tcGlsaW5nLi4uJztcbiAgQElucHV0KCkgZGV2VGlwcyA9IGBXaGVuIHRoZSBjb2xvciBjYW4ndCBiZSBzd2l0Y2hlZCwgeW91IG5lZWQgdG8gcnVuIGl0IG9uY2U6IG5wbSBydW4gY29sb3ItbGVzc2A7XG5cbiAgcHJpdmF0ZSBsb2FkZWRMZXNzID0gZmFsc2U7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBkaXI6IERpcmVjdGlvbiA9ICdsdHInO1xuICBpc0RldiA9IGlzRGV2TW9kZSgpO1xuICBjb2xsYXBzZSA9IGZhbHNlO1xuICBnZXQgbGF5b3V0KCk6IExheW91dCB7XG4gICAgcmV0dXJuIHRoaXMuc2V0dGluZ1Nydi5sYXlvdXQ7XG4gIH1cbiAgZGF0YTogYW55ID0ge307XG4gIGNvbG9yOiBzdHJpbmc7XG4gIGNvbG9ycyA9IERFRkFVTFRfQ09MT1JTO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIG1zZzogTnpNZXNzYWdlU2VydmljZSxcbiAgICBwcml2YXRlIHNldHRpbmdTcnY6IFNldHRpbmdzU2VydmljZSxcbiAgICBwcml2YXRlIGxhenk6IExhenlTZXJ2aWNlLFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IGFueSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eVxuICApIHtcbiAgICB0aGlzLmNvbG9yID0gdGhpcy5jYWNoZWREYXRhWydAcHJpbWFyeS1jb2xvciddIHx8IHRoaXMuREVGQVVMVF9QUklNQVJZO1xuICAgIHRoaXMucmVzZXREYXRhKHRoaXMuY2FjaGVkRGF0YSwgZmFsc2UpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgY2FjaGVkRGF0YSgpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4gdGhpcy5zZXR0aW5nU3J2LmxheW91dFtBTEFJTkRFRkFVTFRWQVJdIHx8IHt9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgREVGQVVMVF9QUklNQVJZKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIERFRkFVTFRfVkFSU1sncHJpbWFyeS1jb2xvciddLmRlZmF1bHQ7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmRpciA9IHRoaXMuZGlyZWN0aW9uYWxpdHkudmFsdWU7XG4gICAgdGhpcy5kaXJlY3Rpb25hbGl0eS5jaGFuZ2U/LnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGRpcmVjdGlvbjogRGlyZWN0aW9uKSA9PiB7XG4gICAgICB0aGlzLmRpciA9IGRpcmVjdGlvbjtcbiAgICB9KTtcbiAgICBpZiAodGhpcy5hdXRvQXBwbHlDb2xvciAmJiB0aGlzLmNvbG9yICE9PSB0aGlzLkRFRkFVTFRfUFJJTUFSWSkge1xuICAgICAgdGhpcy5jaGFuZ2VDb2xvcih0aGlzLmNvbG9yKTtcbiAgICAgIHRoaXMucnVuTGVzcygpO1xuICAgIH1cbiAgfVxuXG4gIEBab25lT3V0c2lkZSgpXG4gIHByaXZhdGUgYXN5bmMgbG9hZExlc3MoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKHRoaXMubG9hZGVkTGVzcykge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5sYXp5XG4gICAgICAubG9hZFN0eWxlKCcuL2Fzc2V0cy9jb2xvci5sZXNzJywgJ3N0eWxlc2hlZXQvbGVzcycpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIGNvbnN0IGxlc3NDb25maWdOb2RlID0gdGhpcy5kb2MuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIGxlc3NDb25maWdOb2RlLmlubmVySFRNTCA9IGBcbiAgICAgICAgICB3aW5kb3cubGVzcyA9IHtcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgICAgICAgZW52OiAncHJvZHVjdGlvbicsXG4gICAgICAgICAgICBqYXZhc2NyaXB0RW5hYmxlZDogdHJ1ZVxuICAgICAgICAgIH07XG4gICAgICAgIGA7XG4gICAgICAgIHRoaXMuZG9jLmJvZHkuYXBwZW5kQ2hpbGQobGVzc0NvbmZpZ05vZGUpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHRoaXMubGF6eS5sb2FkU2NyaXB0KCdodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL29zL2xpYi9sZXNzLmpzLzMuOC4xL2xlc3MubWluLmpzJykpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMubG9hZGVkTGVzcyA9IHRydWU7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuVmFycygpOiBhbnkge1xuICAgIGNvbnN0IHsgZGF0YSwgY29sb3IsIHZhbGlkS2V5cyB9ID0gdGhpcztcbiAgICBjb25zdCB2YXJzOiBhbnkgPSB7XG4gICAgICBbYEBwcmltYXJ5LWNvbG9yYF06IGNvbG9yXG4gICAgfTtcbiAgICB2YWxpZEtleXMuZmlsdGVyKGtleSA9PiBrZXkgIT09ICdwcmltYXJ5LWNvbG9yJykuZm9yRWFjaChrZXkgPT4gKHZhcnNbYEAke2tleX1gXSA9IGRhdGFba2V5XS52YWx1ZSkpO1xuICAgIHRoaXMuc2V0TGF5b3V0KEFMQUlOREVGQVVMVFZBUiwgdmFycyk7XG4gICAgcmV0dXJuIHZhcnM7XG4gIH1cblxuICBAWm9uZU91dHNpZGUoKVxuICBwcml2YXRlIHJ1bkxlc3MoKTogdm9pZCB7XG4gICAgY29uc3QgeyBuZ1pvbmUsIG1zZywgY2RyIH0gPSB0aGlzO1xuICAgIGNvbnN0IG1zZ0lkID0gbXNnLmxvYWRpbmcodGhpcy5jb21waWxpbmdUZXh0LCB7IG56RHVyYXRpb246IDAgfSkubWVzc2FnZUlkO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5sb2FkTGVzcygpLnRoZW4oKCkgPT4ge1xuICAgICAgICAod2luZG93IGFzIGFueSkubGVzcy5tb2RpZnlWYXJzKHRoaXMuZ2VuVmFycygpKS50aGVuKCgpID0+IHtcbiAgICAgICAgICBtc2cuc3VjY2Vzcygn5oiQ5YqfJyk7XG4gICAgICAgICAgbXNnLnJlbW92ZShtc2dJZCk7XG4gICAgICAgICAgbmdab25lLnJ1bigoKSA9PiBjZHIuZGV0ZWN0Q2hhbmdlcygpKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9LCAyMDApO1xuICB9XG5cbiAgdG9nZ2xlKCk6IHZvaWQge1xuICAgIHRoaXMuY29sbGFwc2UgPSAhdGhpcy5jb2xsYXBzZTtcbiAgfVxuXG4gIGNoYW5nZUNvbG9yKGNvbG9yOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgT2JqZWN0LmtleXMoREVGQVVMVF9WQVJTKVxuICAgICAgLmZpbHRlcihrZXkgPT4gREVGQVVMVF9WQVJTW2tleV0uZGVmYXVsdCA9PT0gJ0BwcmltYXJ5LWNvbG9yJylcbiAgICAgIC5mb3JFYWNoKGtleSA9PiBkZWxldGUgdGhpcy5jYWNoZWREYXRhW2BAJHtrZXl9YF0pO1xuICAgIHRoaXMucmVzZXREYXRhKHRoaXMuY2FjaGVkRGF0YSwgZmFsc2UpO1xuICB9XG5cbiAgc2V0TGF5b3V0KG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuc2V0dGluZ1Nydi5zZXRMYXlvdXQobmFtZSwgdmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNldERhdGEobm93RGF0YT86IHsgW2tleTogc3RyaW5nXTogTnpTYWZlQW55IH0sIHJ1bjogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcbiAgICBub3dEYXRhID0gbm93RGF0YSB8fCB7fTtcbiAgICBjb25zdCBkYXRhID0gZGVlcENvcHkoREVGQVVMVF9WQVJTKTtcbiAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IG5vd0RhdGEhW2BAJHtrZXl9YF0gfHwgZGF0YVtrZXldLmRlZmF1bHQgfHwgJyc7XG4gICAgICBkYXRhW2tleV0udmFsdWUgPSB2YWx1ZSA9PT0gYEBwcmltYXJ5LWNvbG9yYCA/IHRoaXMuY29sb3IgOiB2YWx1ZTtcbiAgICB9KTtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIGlmIChydW4pIHtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIHRoaXMucnVuTGVzcygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0IHZhbGlkS2V5cygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuZGF0YSkuZmlsdGVyKGtleSA9PiB0aGlzLmRhdGFba2V5XS52YWx1ZSAhPT0gdGhpcy5kYXRhW2tleV0uZGVmYXVsdCk7XG4gIH1cblxuICBhcHBseSgpOiB2b2lkIHtcbiAgICB0aGlzLnJ1bkxlc3MoKTtcbiAgfVxuXG4gIHJlc2V0KCk6IHZvaWQge1xuICAgIHRoaXMuY29sb3IgPSB0aGlzLkRFRkFVTFRfUFJJTUFSWTtcbiAgICB0aGlzLnNldHRpbmdTcnYuc2V0TGF5b3V0KEFMQUlOREVGQVVMVFZBUiwge30pO1xuICAgIHRoaXMucmVzZXREYXRhKHt9KTtcbiAgfVxuXG4gIGNvcHlWYXIoKTogdm9pZCB7XG4gICAgY29uc3QgdmFycyA9IHRoaXMuZ2VuVmFycygpO1xuICAgIGNvbnN0IGNvcHlDb250ZW50ID0gT2JqZWN0LmtleXModmFycylcbiAgICAgIC5tYXAoa2V5ID0+IGAke2tleX06ICR7dmFyc1trZXldfTtgKVxuICAgICAgLmpvaW4oJ1xcbicpO1xuICAgIGNvcHkoY29weUNvbnRlbnQpO1xuICAgIHRoaXMubXNnLnN1Y2Nlc3MoJ0NvcHkgc3VjY2VzcycpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=