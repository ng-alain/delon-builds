import { __awaiter, __decorate, __metadata } from "tslib";
import { Directionality } from '@angular/cdk/bidi';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Input, isDevMode, NgZone, Optional, } from '@angular/core';
import { SettingsService } from '@delon/theme';
import { copy } from '@delon/util/browser';
import { InputBoolean, ZoneOutside } from '@delon/util/decorator';
import { deepCopy, LazyService } from '@delon/util/other';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
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
            [`@primary-color`]: color,
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
    compilingText: [{ type: Input }],
    devTips: [{ type: Input }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], SettingDrawerComponent.prototype, "autoApplyColor", void 0);
__decorate([
    ZoneOutside(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SettingDrawerComponent.prototype, "loadLess", null);
__decorate([
    ZoneOutside(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SettingDrawerComponent.prototype, "runLess", null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZy1kcmF3ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdGhlbWUvc2V0dGluZy1kcmF3ZXIvc2V0dGluZy1kcmF3ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQWEsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxNQUFNLEVBQ04sS0FBSyxFQUNMLFNBQVMsRUFDVCxNQUFNLEVBR04sUUFBUSxHQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBVSxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDdkQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQVd2RixNQUFNLE9BQU8sc0JBQXNCO0lBaUJqQyxZQUNVLEdBQXNCLEVBQ3RCLEdBQXFCLEVBQ3JCLFVBQTJCLEVBQzNCLElBQWlCLEVBQ2pCLE1BQWMsRUFDSSxHQUFRLEVBQ2QsY0FBOEI7UUFOMUMsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFD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SSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7O1lBbktGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixnNElBQThDO2dCQUM5QyxJQUFJLEVBQUU7b0JBQ0osd0JBQXdCLEVBQUUsTUFBTTtvQkFDaEMsNEJBQTRCLEVBQUUsZUFBZTtpQkFDOUM7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUE1QkMsaUJBQWlCO1lBZVYsZ0JBQWdCO1lBTFIsZUFBZTtZQUdiLFdBQVc7WUFSNUIsTUFBTTs0Q0ErQ0gsTUFBTSxTQUFDLFFBQVE7WUF4REEsY0FBYyx1QkF5RDdCLFFBQVE7Ozs2QkF2QlYsS0FBSzs0QkFDTCxLQUFLO3NCQUNMLEtBQUs7O0FBRm1CO0lBQWYsWUFBWSxFQUFFOzs4REFBdUI7QUFpRC9DO0lBREMsV0FBVyxFQUFFOzs7O3NEQXNCYjtBQWFEO0lBREMsV0FBVyxFQUFFOzs7O3FEQWFiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBJbmplY3QsXG4gIElucHV0LFxuICBpc0Rldk1vZGUsXG4gIE5nWm9uZSxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExheW91dCwgU2V0dGluZ3NTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IGNvcHkgfSBmcm9tICdAZGVsb24vdXRpbC9icm93c2VyJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgWm9uZU91dHNpZGUgfSBmcm9tICdAZGVsb24vdXRpbC9kZWNvcmF0b3InO1xuaW1wb3J0IHsgZGVlcENvcHksIExhenlTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwvb3RoZXInO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IE56TWVzc2FnZVNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL21lc3NhZ2UnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQUxBSU5ERUZBVUxUVkFSLCBERUZBVUxUX0NPTE9SUywgREVGQVVMVF9WQVJTIH0gZnJvbSAnLi9zZXR0aW5nLWRyYXdlci50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NldHRpbmctZHJhd2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NldHRpbmctZHJhd2VyLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3Muc2V0dGluZy1kcmF3ZXJdJzogJ3RydWUnLFxuICAgICdbY2xhc3Muc2V0dGluZy1kcmF3ZXItcnRsXSc6IGBkaXIgPT09ICdydGwnYCxcbiAgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFNldHRpbmdEcmF3ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBhdXRvQXBwbHlDb2xvciA9IHRydWU7XG4gIEBJbnB1dCgpIGNvbXBpbGluZ1RleHQgPSAnQ29tcGlsaW5nLi4uJztcbiAgQElucHV0KCkgZGV2VGlwcyA9IGBXaGVuIHRoZSBjb2xvciBjYW4ndCBiZSBzd2l0Y2hlZCwgeW91IG5lZWQgdG8gcnVuIGl0IG9uY2U6IG5wbSBydW4gY29sb3ItbGVzc2A7XG5cbiAgcHJpdmF0ZSBsb2FkZWRMZXNzID0gZmFsc2U7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBkaXI6IERpcmVjdGlvbiA9ICdsdHInO1xuICBpc0RldiA9IGlzRGV2TW9kZSgpO1xuICBjb2xsYXBzZSA9IGZhbHNlO1xuICBnZXQgbGF5b3V0KCk6IExheW91dCB7XG4gICAgcmV0dXJuIHRoaXMuc2V0dGluZ1Nydi5sYXlvdXQ7XG4gIH1cbiAgZGF0YTogYW55ID0ge307XG4gIGNvbG9yOiBzdHJpbmc7XG4gIGNvbG9ycyA9IERFRkFVTFRfQ09MT1JTO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIG1zZzogTnpNZXNzYWdlU2VydmljZSxcbiAgICBwcml2YXRlIHNldHRpbmdTcnY6IFNldHRpbmdzU2VydmljZSxcbiAgICBwcml2YXRlIGxhenk6IExhenlTZXJ2aWNlLFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IGFueSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eSxcbiAgKSB7XG4gICAgdGhpcy5jb2xvciA9IHRoaXMuY2FjaGVkRGF0YVsnQHByaW1hcnktY29sb3InXSB8fCB0aGlzLkRFRkFVTFRfUFJJTUFSWTtcbiAgICB0aGlzLnJlc2V0RGF0YSh0aGlzLmNhY2hlZERhdGEsIGZhbHNlKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IGNhY2hlZERhdGEoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0dGluZ1Nydi5sYXlvdXRbQUxBSU5ERUZBVUxUVkFSXSB8fCB7fTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IERFRkFVTFRfUFJJTUFSWSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBERUZBVUxUX1ZBUlNbJ3ByaW1hcnktY29sb3InXS5kZWZhdWx0O1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5kaXIgPSB0aGlzLmRpcmVjdGlvbmFsaXR5LnZhbHVlO1xuICAgIHRoaXMuZGlyZWN0aW9uYWxpdHkuY2hhbmdlPy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChkaXJlY3Rpb246IERpcmVjdGlvbikgPT4ge1xuICAgICAgdGhpcy5kaXIgPSBkaXJlY3Rpb247XG4gICAgfSk7XG4gICAgaWYgKHRoaXMuYXV0b0FwcGx5Q29sb3IgJiYgdGhpcy5jb2xvciAhPT0gdGhpcy5ERUZBVUxUX1BSSU1BUlkpIHtcbiAgICAgIHRoaXMuY2hhbmdlQ29sb3IodGhpcy5jb2xvcik7XG4gICAgICB0aGlzLnJ1bkxlc3MoKTtcbiAgICB9XG4gIH1cblxuICBAWm9uZU91dHNpZGUoKVxuICBwcml2YXRlIGFzeW5jIGxvYWRMZXNzKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICh0aGlzLmxvYWRlZExlc3MpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubGF6eVxuICAgICAgLmxvYWRTdHlsZSgnLi9hc3NldHMvY29sb3IubGVzcycsICdzdHlsZXNoZWV0L2xlc3MnKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICBjb25zdCBsZXNzQ29uZmlnTm9kZSA9IHRoaXMuZG9jLmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICBsZXNzQ29uZmlnTm9kZS5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgd2luZG93Lmxlc3MgPSB7XG4gICAgICAgICAgICBhc3luYzogdHJ1ZSxcbiAgICAgICAgICAgIGVudjogJ3Byb2R1Y3Rpb24nLFxuICAgICAgICAgICAgamF2YXNjcmlwdEVuYWJsZWQ6IHRydWVcbiAgICAgICAgICB9O1xuICAgICAgICBgO1xuICAgICAgICB0aGlzLmRvYy5ib2R5LmFwcGVuZENoaWxkKGxlc3NDb25maWdOb2RlKTtcbiAgICAgIH0pXG4gICAgICAudGhlbigoKSA9PiB0aGlzLmxhenkubG9hZFNjcmlwdCgnaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS9vcy9saWIvbGVzcy5qcy8zLjguMS9sZXNzLm1pbi5qcycpKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmxvYWRlZExlc3MgPSB0cnVlO1xuICAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdlblZhcnMoKTogYW55IHtcbiAgICBjb25zdCB7IGRhdGEsIGNvbG9yLCB2YWxpZEtleXMgfSA9IHRoaXM7XG4gICAgY29uc3QgdmFyczogYW55ID0ge1xuICAgICAgW2BAcHJpbWFyeS1jb2xvcmBdOiBjb2xvcixcbiAgICB9O1xuICAgIHZhbGlkS2V5cy5maWx0ZXIoa2V5ID0+IGtleSAhPT0gJ3ByaW1hcnktY29sb3InKS5mb3JFYWNoKGtleSA9PiAodmFyc1tgQCR7a2V5fWBdID0gZGF0YVtrZXldLnZhbHVlKSk7XG4gICAgdGhpcy5zZXRMYXlvdXQoQUxBSU5ERUZBVUxUVkFSLCB2YXJzKTtcbiAgICByZXR1cm4gdmFycztcbiAgfVxuXG4gIEBab25lT3V0c2lkZSgpXG4gIHByaXZhdGUgcnVuTGVzcygpOiB2b2lkIHtcbiAgICBjb25zdCB7IG5nWm9uZSwgbXNnLCBjZHIgfSA9IHRoaXM7XG4gICAgY29uc3QgbXNnSWQgPSBtc2cubG9hZGluZyh0aGlzLmNvbXBpbGluZ1RleHQsIHsgbnpEdXJhdGlvbjogMCB9KS5tZXNzYWdlSWQ7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmxvYWRMZXNzKCkudGhlbigoKSA9PiB7XG4gICAgICAgICh3aW5kb3cgYXMgYW55KS5sZXNzLm1vZGlmeVZhcnModGhpcy5nZW5WYXJzKCkpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIG1zZy5zdWNjZXNzKCfmiJDlip8nKTtcbiAgICAgICAgICBtc2cucmVtb3ZlKG1zZ0lkKTtcbiAgICAgICAgICBuZ1pvbmUucnVuKCgpID0+IGNkci5kZXRlY3RDaGFuZ2VzKCkpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0sIDIwMCk7XG4gIH1cblxuICB0b2dnbGUoKTogdm9pZCB7XG4gICAgdGhpcy5jb2xsYXBzZSA9ICF0aGlzLmNvbGxhcHNlO1xuICB9XG5cbiAgY2hhbmdlQ29sb3IoY29sb3I6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICBPYmplY3Qua2V5cyhERUZBVUxUX1ZBUlMpXG4gICAgICAuZmlsdGVyKGtleSA9PiBERUZBVUxUX1ZBUlNba2V5XS5kZWZhdWx0ID09PSAnQHByaW1hcnktY29sb3InKVxuICAgICAgLmZvckVhY2goa2V5ID0+IGRlbGV0ZSB0aGlzLmNhY2hlZERhdGFbYEAke2tleX1gXSk7XG4gICAgdGhpcy5yZXNldERhdGEodGhpcy5jYWNoZWREYXRhLCBmYWxzZSk7XG4gIH1cblxuICBzZXRMYXlvdXQobmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5zZXR0aW5nU3J2LnNldExheW91dChuYW1lLCB2YWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIHJlc2V0RGF0YShub3dEYXRhPzogeyBba2V5OiBzdHJpbmddOiBOelNhZmVBbnkgfSwgcnVuOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xuICAgIG5vd0RhdGEgPSBub3dEYXRhIHx8IHt9O1xuICAgIGNvbnN0IGRhdGEgPSBkZWVwQ29weShERUZBVUxUX1ZBUlMpO1xuICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gbm93RGF0YSFbYEAke2tleX1gXSB8fCBkYXRhW2tleV0uZGVmYXVsdCB8fCAnJztcbiAgICAgIGRhdGFba2V5XS52YWx1ZSA9IHZhbHVlID09PSBgQHByaW1hcnktY29sb3JgID8gdGhpcy5jb2xvciA6IHZhbHVlO1xuICAgIH0pO1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgaWYgKHJ1bikge1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgdGhpcy5ydW5MZXNzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXQgdmFsaWRLZXlzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5kYXRhKS5maWx0ZXIoa2V5ID0+IHRoaXMuZGF0YVtrZXldLnZhbHVlICE9PSB0aGlzLmRhdGFba2V5XS5kZWZhdWx0KTtcbiAgfVxuXG4gIGFwcGx5KCk6IHZvaWQge1xuICAgIHRoaXMucnVuTGVzcygpO1xuICB9XG5cbiAgcmVzZXQoKTogdm9pZCB7XG4gICAgdGhpcy5jb2xvciA9IHRoaXMuREVGQVVMVF9QUklNQVJZO1xuICAgIHRoaXMuc2V0dGluZ1Nydi5zZXRMYXlvdXQoQUxBSU5ERUZBVUxUVkFSLCB7fSk7XG4gICAgdGhpcy5yZXNldERhdGEoe30pO1xuICB9XG5cbiAgY29weVZhcigpOiB2b2lkIHtcbiAgICBjb25zdCB2YXJzID0gdGhpcy5nZW5WYXJzKCk7XG4gICAgY29uc3QgY29weUNvbnRlbnQgPSBPYmplY3Qua2V5cyh2YXJzKVxuICAgICAgLm1hcChrZXkgPT4gYCR7a2V5fTogJHt2YXJzW2tleV19O2ApXG4gICAgICAuam9pbignXFxuJyk7XG4gICAgY29weShjb3B5Q29udGVudCk7XG4gICAgdGhpcy5tc2cuc3VjY2VzcygnQ29weSBzdWNjZXNzJyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==