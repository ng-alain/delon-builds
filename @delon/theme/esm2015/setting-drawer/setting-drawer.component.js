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
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/message";
import * as i2 from "@delon/theme";
import * as i3 from "@delon/util";
import * as i4 from "@angular/cdk/bidi";
import * as i5 from "ng-zorro-antd/drawer";
import * as i6 from "@angular/common";
import * as i7 from "ng-zorro-antd/tooltip";
import * as i8 from "ng-zorro-antd/icon";
import * as i9 from "ng-zorro-antd/core/transition-patch";
import * as i10 from "ng-zorro-antd/divider";
import * as i11 from "ng-zorro-antd/tabs";
import * as i12 from "./setting-drawer-item.component";
import * as i13 from "ng-zorro-antd/switch";
import * as i14 from "@angular/forms";
import * as i15 from "ng-zorro-antd/button";
import * as i16 from "ng-zorro-antd/core/wave";
import * as i17 from "ng-zorro-antd/alert";
export class SettingDrawerComponent {
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
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
/** @nocollapse */ SettingDrawerComponent.ɵfac = function SettingDrawerComponent_Factory(t) { return new (t || SettingDrawerComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.NzMessageService), i0.ɵɵdirectiveInject(i2.SettingsService), i0.ɵɵdirectiveInject(i3.LazyService), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(DOCUMENT), i0.ɵɵdirectiveInject(i4.Directionality, 8)); };
/** @nocollapse */ SettingDrawerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ version: "11.1.1", type: SettingDrawerComponent, selector: "setting-drawer", inputs: { autoApplyColor: "autoApplyColor", devTips: "devTips" }, host: { properties: { "class.setting-drawer": "true", "class.setting-drawer-rtl": "dir === 'rtl'" } }, ngImport: i0, template: "<nz-drawer [nzVisible]=\"collapse\" [nzPlacement]=\"dir === 'rtl' ? 'left' : 'right'\" [nzWidth]=\"500\" (nzOnClose)=\"toggle()\">\n  <div *nzDrawerContent class=\"setting-drawer__content\">\n    <div class=\"setting-drawer__body setting-drawer__theme\">\n      <h3 class=\"setting-drawer__title\">\u4E3B\u9898\u8272</h3>\n      <span\n        *ngFor=\"let c of colors\"\n        [style]=\"{ 'background-color': c.color }\"\n        (click)=\"changeColor(c.color)\"\n        nz-tooltip\n        [nzTooltipTitle]=\"c.key\"\n        class=\"setting-drawer__theme-tag\"\n      >\n        <i *ngIf=\"color === c.color\" nz-icon nzType=\"check\"></i>\n      </span>\n    </div>\n    <nz-divider></nz-divider>\n    <div class=\"setting-drawer__body\">\n      <h3 class=\"setting-drawer__title\">\u8BBE\u7F6E</h3>\n      <nz-tabset>\n        <nz-tab nzTitle=\"\u9876\u90E8\">\n          <div class=\"setting-drawer__body\">\n            <setting-drawer-item [data]=\"data['alain-default-header-hg']\"></setting-drawer-item>\n            <setting-drawer-item [data]=\"data['alain-default-header-bg']\"></setting-drawer-item>\n            <setting-drawer-item [data]=\"data['alain-default-header-padding']\"></setting-drawer-item>\n          </div>\n        </nz-tab>\n        <nz-tab nzTitle=\"\u4FA7\u8FB9\u680F\">\n          <setting-drawer-item [data]=\"data['alain-default-aside-wd']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['alain-default-aside-bg']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['alain-default-aside-collapsed-wd']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['alain-default-aside-nav-padding-top-bottom']\"></setting-drawer-item>\n        </nz-tab>\n        <nz-tab nzTitle=\"\u5185\u5BB9\">\n          <setting-drawer-item [data]=\"data['alain-default-content-bg']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['alain-default-content-heading-bg']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['alain-default-content-heading-border']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['alain-default-content-padding']\"></setting-drawer-item>\n        </nz-tab>\n        <nz-tab nzTitle=\"\u5176\u5B83\">\n          <setting-drawer-item [data]=\"data['form-state-visual-feedback-enabled']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['preserve-white-spaces-enabled']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['nz-table-img-radius']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['nz-table-img-margin-right']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['nz-table-img-max-width']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['nz-table-img-max-height']\"></setting-drawer-item>\n        </nz-tab>\n      </nz-tabset>\n    </div>\n    <nz-divider></nz-divider>\n    <div class=\"setting-drawer__body\">\n      <div class=\"setting-drawer__body-item\">\n        \u56FA\u5B9A\u5934\u548C\u4FA7\u8FB9\u680F\n        <nz-switch nzSize=\"small\" [(ngModel)]=\"layout.fixed\" (ngModelChange)=\"setLayout('fixed', layout.fixed)\"></nz-switch>\n      </div>\n      <div class=\"setting-drawer__body-item\">\n        \u8272\u5F31\u6A21\u5F0F\n        <nz-switch nzSize=\"small\" [(ngModel)]=\"layout.colorWeak\" (ngModelChange)=\"setLayout('colorWeak', layout.colorWeak)\"></nz-switch>\n      </div>\n    </div>\n    <nz-divider></nz-divider>\n    <button (click)=\"apply()\" type=\"button\" nz-button nzType=\"primary\">\u9884\u89C8</button>\n    <button (click)=\"reset()\" type=\"button\" nz-button>\u91CD\u7F6E</button>\n    <button (click)=\"copyVar()\" type=\"button\" nz-button>\u62F7\u8D1D</button>\n    <nz-alert\n      class=\"mt-md\"\n      nzType=\"warning\"\n      nzMessage=\"\u914D\u7F6E\u680F\u53EA\u5728\u5F00\u53D1\u73AF\u5883\u7528\u4E8E\u9884\u89C8\uFF0C\u751F\u4EA7\u73AF\u5883\u4E0D\u4F1A\u5C55\u73B0\uFF0C\u8BF7\u62F7\u8D1D\u540E\u624B\u52A8\u4FEE\u6539\u53C2\u6570\u914D\u7F6E\u6587\u4EF6 src/styles/theme.less\"\n    ></nz-alert>\n  </div>\n</nz-drawer>\n<div\n  class=\"setting-drawer__handle\"\n  [ngClass]=\"{ 'setting-drawer__handle-opened': collapse }\"\n  (click)=\"toggle()\"\n  nz-tooltip\n  [nzTooltipTitle]=\"isDev ? devTips : null\"\n>\n  <i nz-icon [nzType]=\"!collapse ? 'setting' : 'close'\" class=\"setting-drawer__handle-icon\"></i>\n</div>\n", directives: [{ type: i5.NzDrawerComponent, selector: "nz-drawer", inputs: ["nzCloseIcon", "nzClosable", "nzMaskClosable", "nzMask", "nzCloseOnNavigation", "nzNoAnimation", "nzKeyboard", "nzPlacement", "nzMaskStyle", "nzBodyStyle", "nzWidth", "nzHeight", "nzZIndex", "nzOffsetX", "nzOffsetY", "nzVisible", "nzContent", "nzTitle", "nzFooter", "nzWrapClassName"], outputs: ["nzOnViewInit", "nzOnClose", "nzVisibleChange"], exportAs: ["nzDrawer"] }, { type: i5.NzDrawerContentDirective, selector: "[nzDrawerContent]", exportAs: ["nzDrawerContent"] }, { type: i6.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i7.NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipTitle", "nz-tooltip", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }, { type: i6.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i8.NzIconDirective, selector: "[nz-icon]", inputs: ["nzRotate", "nzSpin", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { type: i9.ɵNzTransitionPatchDirective, selector: "[nz-button], nz-button-group, [nz-icon], [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group", inputs: ["hidden"] }, { type: i10.NzDividerComponent, selector: "nz-divider", inputs: ["nzType", "nzOrientation", "nzDashed", "nzPlain", "nzText"], exportAs: ["nzDivider"] }, { type: i11.NzTabSetComponent, selector: "nz-tabset", inputs: ["nzTabPosition", "nzCanDeactivate", "nzAddIcon", "nzTabBarStyle", "nzType", "nzSize", "nzAnimated", "nzTabBarGutter", "nzHideAdd", "nzCentered", "nzHideAll", "nzLinkRouter", "nzLinkExact", "nzSelectedIndex", "nzTabBarExtraContent"], outputs: ["nzSelectChange", "nzSelectedIndexChange", "nzTabListScroll", "nzClose", "nzAdd"], exportAs: ["nzTabset"] }, { type: i11.NzTabComponent, selector: "nz-tab", inputs: ["nzTitle", "nzClosable", "nzCloseIcon", "nzDisabled", "nzForceRender"], outputs: ["nzSelect", "nzDeselect", "nzClick", "nzContextmenu"], exportAs: ["nzTab"] }, { type: i12.SettingDrawerItemComponent, selector: "setting-drawer-item", inputs: ["data"] }, { type: i13.NzSwitchComponent, selector: "nz-switch", inputs: ["nzLoading", "nzDisabled", "nzControl", "nzCheckedChildren", "nzUnCheckedChildren", "nzSize"], exportAs: ["nzSwitch"] }, { type: i14.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i14.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { type: i15.NzButtonComponent, selector: "button[nz-button], a[nz-button]", inputs: ["nzBlock", "nzGhost", "nzSearch", "nzLoading", "nzDanger", "disabled", "tabIndex", "nzType", "nzShape", "nzSize"], exportAs: ["nzButton"] }, { type: i16.NzWaveDirective, selector: "[nz-wave],button[nz-button]:not([nzType=\"link\"]):not([nzType=\"text\"])", inputs: ["nzWaveExtraNode"], exportAs: ["nzWave"] }, { type: i17.NzAlertComponent, selector: "nz-alert", inputs: ["nzCloseText", "nzIconType", "nzMessage", "nzDescription", "nzType", "nzCloseable", "nzShowIcon", "nzBanner", "nzNoAnimation"], outputs: ["nzOnClose"], exportAs: ["nzAlert"] }, { type: i6.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], SettingDrawerComponent.prototype, "autoApplyColor", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SettingDrawerComponent, [{
        type: Component,
        args: [{
                selector: 'setting-drawer',
                templateUrl: './setting-drawer.component.html',
                host: {
                    '[class.setting-drawer]': 'true',
                    '[class.setting-drawer-rtl]': `dir === 'rtl'`,
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.NzMessageService }, { type: i2.SettingsService }, { type: i3.LazyService }, { type: i0.NgZone }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: i4.Directionality, decorators: [{
                type: Optional
            }] }]; }, { autoApplyColor: [{
            type: Input
        }], devTips: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZy1kcmF3ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdGhlbWUvc2V0dGluZy1kcmF3ZXIvc2V0dGluZy1kcmF3ZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdGhlbWUvc2V0dGluZy1kcmF3ZXIvc2V0dGluZy1kcmF3ZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBYSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULE1BQU0sRUFDTixLQUFLLEVBQ0wsU0FBUyxFQUNULE1BQU0sRUFHTixRQUFRLEdBQ1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFVLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN2RCxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXhFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV3ZGLE1BQU0sT0FBTyxzQkFBc0I7SUFnQmpDLFlBQ1UsR0FBc0IsRUFDdEIsR0FBcUIsRUFDckIsVUFBMkIsRUFDM0IsSUFBaUIsRUFDakIsSUFBWSxFQUNNLEdBQVEsRUFDZCxjQUE4QjtRQU4xQyxRQUFHLEdB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O1FBQ2QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7OytHQXpKVSxzQkFBc0IsK05Bc0J2QixRQUFRO29HQXRCUCxzQkFBc0IsK05DL0JuQyxzM0lBK0VBO0FEL0MyQjtJQUFmLFlBQVksRUFBRTs7OERBQXVCO3VGQURwQyxzQkFBc0I7Y0FUbEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFdBQVcsRUFBRSxpQ0FBaUM7Z0JBQzlDLElBQUksRUFBRTtvQkFDSix3QkFBd0IsRUFBRSxNQUFNO29CQUNoQyw0QkFBNEIsRUFBRSxlQUFlO2lCQUM5QztnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7c0JBdUJJLE1BQU07dUJBQUMsUUFBUTs7c0JBQ2YsUUFBUTt3QkF0QmMsY0FBYztrQkFBdEMsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgaXNEZXZNb2RlLFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMYXlvdXQsIFNldHRpbmdzU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBjb3B5LCBkZWVwQ29weSwgSW5wdXRCb29sZWFuLCBMYXp5U2VydmljZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBOek1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9tZXNzYWdlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEFMQUlOREVGQVVMVFZBUiwgREVGQVVMVF9DT0xPUlMsIERFRkFVTFRfVkFSUyB9IGZyb20gJy4vc2V0dGluZy1kcmF3ZXIudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZXR0aW5nLWRyYXdlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZXR0aW5nLWRyYXdlci5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLnNldHRpbmctZHJhd2VyXSc6ICd0cnVlJyxcbiAgICAnW2NsYXNzLnNldHRpbmctZHJhd2VyLXJ0bF0nOiBgZGlyID09PSAncnRsJ2AsXG4gIH0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBTZXR0aW5nRHJhd2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYXV0b0FwcGx5Q29sb3IgPSB0cnVlO1xuICBASW5wdXQoKSBkZXZUaXBzID0gYFdoZW4gdGhlIGNvbG9yIGNhbid0IGJlIHN3aXRjaGVkLCB5b3UgbmVlZCB0byBydW4gaXQgb25jZTogbnBtIHJ1biBjb2xvci1sZXNzYDtcblxuICBwcml2YXRlIGxvYWRlZExlc3MgPSBmYWxzZTtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIGRpcjogRGlyZWN0aW9uID0gJ2x0cic7XG4gIGlzRGV2ID0gaXNEZXZNb2RlKCk7XG4gIGNvbGxhcHNlID0gZmFsc2U7XG4gIGdldCBsYXlvdXQoKTogTGF5b3V0IHtcbiAgICByZXR1cm4gdGhpcy5zZXR0aW5nU3J2LmxheW91dDtcbiAgfVxuICBkYXRhOiBhbnkgPSB7fTtcbiAgY29sb3I6IHN0cmluZztcbiAgY29sb3JzID0gREVGQVVMVF9DT0xPUlM7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgbXNnOiBOek1lc3NhZ2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgc2V0dGluZ1NydjogU2V0dGluZ3NTZXJ2aWNlLFxuICAgIHByaXZhdGUgbGF6eTogTGF6eVNlcnZpY2UsXG4gICAgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IGFueSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eSxcbiAgKSB7XG4gICAgdGhpcy5jb2xvciA9IHRoaXMuY2FjaGVkRGF0YVsnQHByaW1hcnktY29sb3InXSB8fCB0aGlzLkRFRkFVTFRfUFJJTUFSWTtcbiAgICB0aGlzLnJlc2V0RGF0YSh0aGlzLmNhY2hlZERhdGEsIGZhbHNlKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IGNhY2hlZERhdGEoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0dGluZ1Nydi5sYXlvdXRbQUxBSU5ERUZBVUxUVkFSXSB8fCB7fTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IERFRkFVTFRfUFJJTUFSWSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBERUZBVUxUX1ZBUlNbJ3ByaW1hcnktY29sb3InXS5kZWZhdWx0O1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5kaXIgPSB0aGlzLmRpcmVjdGlvbmFsaXR5LnZhbHVlO1xuICAgIHRoaXMuZGlyZWN0aW9uYWxpdHkuY2hhbmdlPy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChkaXJlY3Rpb246IERpcmVjdGlvbikgPT4ge1xuICAgICAgdGhpcy5kaXIgPSBkaXJlY3Rpb247XG4gICAgfSk7XG4gICAgaWYgKHRoaXMuYXV0b0FwcGx5Q29sb3IgJiYgdGhpcy5jb2xvciAhPT0gdGhpcy5ERUZBVUxUX1BSSU1BUlkpIHtcbiAgICAgIHRoaXMuY2hhbmdlQ29sb3IodGhpcy5jb2xvcik7XG4gICAgICB0aGlzLnJ1bkxlc3MoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGxvYWRMZXNzKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICh0aGlzLmxvYWRlZExlc3MpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubGF6eVxuICAgICAgLmxvYWRTdHlsZSgnLi9hc3NldHMvY29sb3IubGVzcycsICdzdHlsZXNoZWV0L2xlc3MnKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICBjb25zdCBsZXNzQ29uZmlnTm9kZSA9IHRoaXMuZG9jLmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICBsZXNzQ29uZmlnTm9kZS5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgd2luZG93Lmxlc3MgPSB7XG4gICAgICAgICAgICBhc3luYzogdHJ1ZSxcbiAgICAgICAgICAgIGVudjogJ3Byb2R1Y3Rpb24nLFxuICAgICAgICAgICAgamF2YXNjcmlwdEVuYWJsZWQ6IHRydWVcbiAgICAgICAgICB9O1xuICAgICAgICBgO1xuICAgICAgICB0aGlzLmRvYy5ib2R5LmFwcGVuZENoaWxkKGxlc3NDb25maWdOb2RlKTtcbiAgICAgIH0pXG4gICAgICAudGhlbigoKSA9PiB0aGlzLmxhenkubG9hZFNjcmlwdCgnaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS9vcy9saWIvbGVzcy5qcy8zLjguMS9sZXNzLm1pbi5qcycpKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmxvYWRlZExlc3MgPSB0cnVlO1xuICAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdlblZhcnMoKTogYW55IHtcbiAgICBjb25zdCB7IGRhdGEsIGNvbG9yLCB2YWxpZEtleXMgfSA9IHRoaXM7XG4gICAgY29uc3QgdmFyczogYW55ID0ge1xuICAgICAgW2BAcHJpbWFyeS1jb2xvcmBdOiBjb2xvcixcbiAgICB9O1xuICAgIHZhbGlkS2V5cy5maWx0ZXIoa2V5ID0+IGtleSAhPT0gJ3ByaW1hcnktY29sb3InKS5mb3JFYWNoKGtleSA9PiAodmFyc1tgQCR7a2V5fWBdID0gZGF0YVtrZXldLnZhbHVlKSk7XG4gICAgdGhpcy5zZXRMYXlvdXQoQUxBSU5ERUZBVUxUVkFSLCB2YXJzKTtcbiAgICByZXR1cm4gdmFycztcbiAgfVxuXG4gIHByaXZhdGUgcnVuTGVzcygpOiB2b2lkIHtcbiAgICBjb25zdCB7IHpvbmUsIG1zZywgY2RyIH0gPSB0aGlzO1xuICAgIGNvbnN0IG1zZ0lkID0gbXNnLmxvYWRpbmcoYOato+WcqOe8luivkeS4u+mimO+8gWAsIHsgbnpEdXJhdGlvbjogMCB9KS5tZXNzYWdlSWQ7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB6b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgdGhpcy5sb2FkTGVzcygpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICh3aW5kb3cgYXMgYW55KS5sZXNzLm1vZGlmeVZhcnModGhpcy5nZW5WYXJzKCkpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgbXNnLnN1Y2Nlc3MoJ+aIkOWKnycpO1xuICAgICAgICAgICAgbXNnLnJlbW92ZShtc2dJZCk7XG4gICAgICAgICAgICB6b25lLnJ1bigoKSA9PiBjZHIuZGV0ZWN0Q2hhbmdlcygpKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9LCAyMDApO1xuICB9XG5cbiAgdG9nZ2xlKCk6IHZvaWQge1xuICAgIHRoaXMuY29sbGFwc2UgPSAhdGhpcy5jb2xsYXBzZTtcbiAgfVxuXG4gIGNoYW5nZUNvbG9yKGNvbG9yOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgT2JqZWN0LmtleXMoREVGQVVMVF9WQVJTKVxuICAgICAgLmZpbHRlcihrZXkgPT4gREVGQVVMVF9WQVJTW2tleV0uZGVmYXVsdCA9PT0gJ0BwcmltYXJ5LWNvbG9yJylcbiAgICAgIC5mb3JFYWNoKGtleSA9PiBkZWxldGUgdGhpcy5jYWNoZWREYXRhW2BAJHtrZXl9YF0pO1xuICAgIHRoaXMucmVzZXREYXRhKHRoaXMuY2FjaGVkRGF0YSwgZmFsc2UpO1xuICB9XG5cbiAgc2V0TGF5b3V0KG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuc2V0dGluZ1Nydi5zZXRMYXlvdXQobmFtZSwgdmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNldERhdGEobm93RGF0YT86IHsgW2tleTogc3RyaW5nXTogTnpTYWZlQW55IH0sIHJ1bjogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcbiAgICBub3dEYXRhID0gbm93RGF0YSB8fCB7fTtcbiAgICBjb25zdCBkYXRhID0gZGVlcENvcHkoREVGQVVMVF9WQVJTKTtcbiAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IG5vd0RhdGEhW2BAJHtrZXl9YF0gfHwgZGF0YVtrZXldLmRlZmF1bHQgfHwgJyc7XG4gICAgICBkYXRhW2tleV0udmFsdWUgPSB2YWx1ZSA9PT0gYEBwcmltYXJ5LWNvbG9yYCA/IHRoaXMuY29sb3IgOiB2YWx1ZTtcbiAgICB9KTtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIGlmIChydW4pIHtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIHRoaXMucnVuTGVzcygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0IHZhbGlkS2V5cygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuZGF0YSkuZmlsdGVyKGtleSA9PiB0aGlzLmRhdGFba2V5XS52YWx1ZSAhPT0gdGhpcy5kYXRhW2tleV0uZGVmYXVsdCk7XG4gIH1cblxuICBhcHBseSgpOiB2b2lkIHtcbiAgICB0aGlzLnJ1bkxlc3MoKTtcbiAgfVxuXG4gIHJlc2V0KCk6IHZvaWQge1xuICAgIHRoaXMuY29sb3IgPSB0aGlzLkRFRkFVTFRfUFJJTUFSWTtcbiAgICB0aGlzLnNldHRpbmdTcnYuc2V0TGF5b3V0KEFMQUlOREVGQVVMVFZBUiwge30pO1xuICAgIHRoaXMucmVzZXREYXRhKHt9KTtcbiAgfVxuXG4gIGNvcHlWYXIoKTogdm9pZCB7XG4gICAgY29uc3QgdmFycyA9IHRoaXMuZ2VuVmFycygpO1xuICAgIGNvbnN0IGNvcHlDb250ZW50ID0gT2JqZWN0LmtleXModmFycylcbiAgICAgIC5tYXAoa2V5ID0+IGAke2tleX06ICR7dmFyc1trZXldfTtgKVxuICAgICAgLmpvaW4oJ1xcbicpO1xuICAgIGNvcHkoY29weUNvbnRlbnQpO1xuICAgIHRoaXMubXNnLnN1Y2Nlc3MoJ0NvcHkgc3VjY2VzcycpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG59XG4iLCI8bnotZHJhd2VyIFtuelZpc2libGVdPVwiY29sbGFwc2VcIiBbbnpQbGFjZW1lbnRdPVwiZGlyID09PSAncnRsJyA/ICdsZWZ0JyA6ICdyaWdodCdcIiBbbnpXaWR0aF09XCI1MDBcIiAobnpPbkNsb3NlKT1cInRvZ2dsZSgpXCI+XG4gIDxkaXYgKm56RHJhd2VyQ29udGVudCBjbGFzcz1cInNldHRpbmctZHJhd2VyX19jb250ZW50XCI+XG4gICAgPGRpdiBjbGFzcz1cInNldHRpbmctZHJhd2VyX19ib2R5IHNldHRpbmctZHJhd2VyX190aGVtZVwiPlxuICAgICAgPGgzIGNsYXNzPVwic2V0dGluZy1kcmF3ZXJfX3RpdGxlXCI+5Li76aKY6ImyPC9oMz5cbiAgICAgIDxzcGFuXG4gICAgICAgICpuZ0Zvcj1cImxldCBjIG9mIGNvbG9yc1wiXG4gICAgICAgIFtzdHlsZV09XCJ7ICdiYWNrZ3JvdW5kLWNvbG9yJzogYy5jb2xvciB9XCJcbiAgICAgICAgKGNsaWNrKT1cImNoYW5nZUNvbG9yKGMuY29sb3IpXCJcbiAgICAgICAgbnotdG9vbHRpcFxuICAgICAgICBbbnpUb29sdGlwVGl0bGVdPVwiYy5rZXlcIlxuICAgICAgICBjbGFzcz1cInNldHRpbmctZHJhd2VyX190aGVtZS10YWdcIlxuICAgICAgPlxuICAgICAgICA8aSAqbmdJZj1cImNvbG9yID09PSBjLmNvbG9yXCIgbnotaWNvbiBuelR5cGU9XCJjaGVja1wiPjwvaT5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgICA8bnotZGl2aWRlcj48L256LWRpdmlkZXI+XG4gICAgPGRpdiBjbGFzcz1cInNldHRpbmctZHJhd2VyX19ib2R5XCI+XG4gICAgICA8aDMgY2xhc3M9XCJzZXR0aW5nLWRyYXdlcl9fdGl0bGVcIj7orr7nva48L2gzPlxuICAgICAgPG56LXRhYnNldD5cbiAgICAgICAgPG56LXRhYiBuelRpdGxlPVwi6aG26YOoXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNldHRpbmctZHJhd2VyX19ib2R5XCI+XG4gICAgICAgICAgICA8c2V0dGluZy1kcmF3ZXItaXRlbSBbZGF0YV09XCJkYXRhWydhbGFpbi1kZWZhdWx0LWhlYWRlci1oZyddXCI+PC9zZXR0aW5nLWRyYXdlci1pdGVtPlxuICAgICAgICAgICAgPHNldHRpbmctZHJhd2VyLWl0ZW0gW2RhdGFdPVwiZGF0YVsnYWxhaW4tZGVmYXVsdC1oZWFkZXItYmcnXVwiPjwvc2V0dGluZy1kcmF3ZXItaXRlbT5cbiAgICAgICAgICAgIDxzZXR0aW5nLWRyYXdlci1pdGVtIFtkYXRhXT1cImRhdGFbJ2FsYWluLWRlZmF1bHQtaGVhZGVyLXBhZGRpbmcnXVwiPjwvc2V0dGluZy1kcmF3ZXItaXRlbT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uei10YWI+XG4gICAgICAgIDxuei10YWIgbnpUaXRsZT1cIuS+p+i+ueagj1wiPlxuICAgICAgICAgIDxzZXR0aW5nLWRyYXdlci1pdGVtIFtkYXRhXT1cImRhdGFbJ2FsYWluLWRlZmF1bHQtYXNpZGUtd2QnXVwiPjwvc2V0dGluZy1kcmF3ZXItaXRlbT5cbiAgICAgICAgICA8c2V0dGluZy1kcmF3ZXItaXRlbSBbZGF0YV09XCJkYXRhWydhbGFpbi1kZWZhdWx0LWFzaWRlLWJnJ11cIj48L3NldHRpbmctZHJhd2VyLWl0ZW0+XG4gICAgICAgICAgPHNldHRpbmctZHJhd2VyLWl0ZW0gW2RhdGFdPVwiZGF0YVsnYWxhaW4tZGVmYXVsdC1hc2lkZS1jb2xsYXBzZWQtd2QnXVwiPjwvc2V0dGluZy1kcmF3ZXItaXRlbT5cbiAgICAgICAgICA8c2V0dGluZy1kcmF3ZXItaXRlbSBbZGF0YV09XCJkYXRhWydhbGFpbi1kZWZhdWx0LWFzaWRlLW5hdi1wYWRkaW5nLXRvcC1ib3R0b20nXVwiPjwvc2V0dGluZy1kcmF3ZXItaXRlbT5cbiAgICAgICAgPC9uei10YWI+XG4gICAgICAgIDxuei10YWIgbnpUaXRsZT1cIuWGheWuuVwiPlxuICAgICAgICAgIDxzZXR0aW5nLWRyYXdlci1pdGVtIFtkYXRhXT1cImRhdGFbJ2FsYWluLWRlZmF1bHQtY29udGVudC1iZyddXCI+PC9zZXR0aW5nLWRyYXdlci1pdGVtPlxuICAgICAgICAgIDxzZXR0aW5nLWRyYXdlci1pdGVtIFtkYXRhXT1cImRhdGFbJ2FsYWluLWRlZmF1bHQtY29udGVudC1oZWFkaW5nLWJnJ11cIj48L3NldHRpbmctZHJhd2VyLWl0ZW0+XG4gICAgICAgICAgPHNldHRpbmctZHJhd2VyLWl0ZW0gW2RhdGFdPVwiZGF0YVsnYWxhaW4tZGVmYXVsdC1jb250ZW50LWhlYWRpbmctYm9yZGVyJ11cIj48L3NldHRpbmctZHJhd2VyLWl0ZW0+XG4gICAgICAgICAgPHNldHRpbmctZHJhd2VyLWl0ZW0gW2RhdGFdPVwiZGF0YVsnYWxhaW4tZGVmYXVsdC1jb250ZW50LXBhZGRpbmcnXVwiPjwvc2V0dGluZy1kcmF3ZXItaXRlbT5cbiAgICAgICAgPC9uei10YWI+XG4gICAgICAgIDxuei10YWIgbnpUaXRsZT1cIuWFtuWug1wiPlxuICAgICAgICAgIDxzZXR0aW5nLWRyYXdlci1pdGVtIFtkYXRhXT1cImRhdGFbJ2Zvcm0tc3RhdGUtdmlzdWFsLWZlZWRiYWNrLWVuYWJsZWQnXVwiPjwvc2V0dGluZy1kcmF3ZXItaXRlbT5cbiAgICAgICAgICA8c2V0dGluZy1kcmF3ZXItaXRlbSBbZGF0YV09XCJkYXRhWydwcmVzZXJ2ZS13aGl0ZS1zcGFjZXMtZW5hYmxlZCddXCI+PC9zZXR0aW5nLWRyYXdlci1pdGVtPlxuICAgICAgICAgIDxzZXR0aW5nLWRyYXdlci1pdGVtIFtkYXRhXT1cImRhdGFbJ256LXRhYmxlLWltZy1yYWRpdXMnXVwiPjwvc2V0dGluZy1kcmF3ZXItaXRlbT5cbiAgICAgICAgICA8c2V0dGluZy1kcmF3ZXItaXRlbSBbZGF0YV09XCJkYXRhWyduei10YWJsZS1pbWctbWFyZ2luLXJpZ2h0J11cIj48L3NldHRpbmctZHJhd2VyLWl0ZW0+XG4gICAgICAgICAgPHNldHRpbmctZHJhd2VyLWl0ZW0gW2RhdGFdPVwiZGF0YVsnbnotdGFibGUtaW1nLW1heC13aWR0aCddXCI+PC9zZXR0aW5nLWRyYXdlci1pdGVtPlxuICAgICAgICAgIDxzZXR0aW5nLWRyYXdlci1pdGVtIFtkYXRhXT1cImRhdGFbJ256LXRhYmxlLWltZy1tYXgtaGVpZ2h0J11cIj48L3NldHRpbmctZHJhd2VyLWl0ZW0+XG4gICAgICAgIDwvbnotdGFiPlxuICAgICAgPC9uei10YWJzZXQ+XG4gICAgPC9kaXY+XG4gICAgPG56LWRpdmlkZXI+PC9uei1kaXZpZGVyPlxuICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5nLWRyYXdlcl9fYm9keVwiPlxuICAgICAgPGRpdiBjbGFzcz1cInNldHRpbmctZHJhd2VyX19ib2R5LWl0ZW1cIj5cbiAgICAgICAg5Zu65a6a5aS05ZKM5L6n6L655qCPXG4gICAgICAgIDxuei1zd2l0Y2ggbnpTaXplPVwic21hbGxcIiBbKG5nTW9kZWwpXT1cImxheW91dC5maXhlZFwiIChuZ01vZGVsQ2hhbmdlKT1cInNldExheW91dCgnZml4ZWQnLCBsYXlvdXQuZml4ZWQpXCI+PC9uei1zd2l0Y2g+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5nLWRyYXdlcl9fYm9keS1pdGVtXCI+XG4gICAgICAgIOiJsuW8seaooeW8j1xuICAgICAgICA8bnotc3dpdGNoIG56U2l6ZT1cInNtYWxsXCIgWyhuZ01vZGVsKV09XCJsYXlvdXQuY29sb3JXZWFrXCIgKG5nTW9kZWxDaGFuZ2UpPVwic2V0TGF5b3V0KCdjb2xvcldlYWsnLCBsYXlvdXQuY29sb3JXZWFrKVwiPjwvbnotc3dpdGNoPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPG56LWRpdmlkZXI+PC9uei1kaXZpZGVyPlxuICAgIDxidXR0b24gKGNsaWNrKT1cImFwcGx5KClcIiB0eXBlPVwiYnV0dG9uXCIgbnotYnV0dG9uIG56VHlwZT1cInByaW1hcnlcIj7pooTop4g8L2J1dHRvbj5cbiAgICA8YnV0dG9uIChjbGljayk9XCJyZXNldCgpXCIgdHlwZT1cImJ1dHRvblwiIG56LWJ1dHRvbj7ph43nva48L2J1dHRvbj5cbiAgICA8YnV0dG9uIChjbGljayk9XCJjb3B5VmFyKClcIiB0eXBlPVwiYnV0dG9uXCIgbnotYnV0dG9uPuaLt+i0nTwvYnV0dG9uPlxuICAgIDxuei1hbGVydFxuICAgICAgY2xhc3M9XCJtdC1tZFwiXG4gICAgICBuelR5cGU9XCJ3YXJuaW5nXCJcbiAgICAgIG56TWVzc2FnZT1cIumFjee9ruagj+WPquWcqOW8gOWPkeeOr+Wig+eUqOS6jumihOiniO+8jOeUn+S6p+eOr+Wig+S4jeS8muWxleeOsO+8jOivt+aLt+i0neWQjuaJi+WKqOS/ruaUueWPguaVsOmFjee9ruaWh+S7tiBzcmMvc3R5bGVzL3RoZW1lLmxlc3NcIlxuICAgID48L256LWFsZXJ0PlxuICA8L2Rpdj5cbjwvbnotZHJhd2VyPlxuPGRpdlxuICBjbGFzcz1cInNldHRpbmctZHJhd2VyX19oYW5kbGVcIlxuICBbbmdDbGFzc109XCJ7ICdzZXR0aW5nLWRyYXdlcl9faGFuZGxlLW9wZW5lZCc6IGNvbGxhcHNlIH1cIlxuICAoY2xpY2spPVwidG9nZ2xlKClcIlxuICBuei10b29sdGlwXG4gIFtuelRvb2x0aXBUaXRsZV09XCJpc0RldiA/IGRldlRpcHMgOiBudWxsXCJcbj5cbiAgPGkgbnotaWNvbiBbbnpUeXBlXT1cIiFjb2xsYXBzZSA/ICdzZXR0aW5nJyA6ICdjbG9zZSdcIiBjbGFzcz1cInNldHRpbmctZHJhd2VyX19oYW5kbGUtaWNvblwiPjwvaT5cbjwvZGl2PlxuIl19