import { __awaiter, __decorate, __metadata } from "tslib";
import { Directionality } from '@angular/cdk/bidi';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Input, isDevMode, NgZone, Optional, } from '@angular/core';
import { SettingsService } from '@delon/theme';
import { copy } from '@delon/util/browser';
import { InputBoolean } from '@delon/util/decorator';
import { deepCopy, LazyService } from '@delon/util/other';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ALAINDEFAULTVAR, DEFAULT_COLORS, DEFAULT_VARS } from './setting-drawer.types';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/message";
import * as i2 from "@delon/theme";
import * as i3 from "@delon/util/other";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZy1kcmF3ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdGhlbWUvc2V0dGluZy1kcmF3ZXIvc2V0dGluZy1kcmF3ZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdGhlbWUvc2V0dGluZy1kcmF3ZXIvc2V0dGluZy1kcmF3ZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBYSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULE1BQU0sRUFDTixLQUFLLEVBQ0wsU0FBUyxFQUNULE1BQU0sRUFHTixRQUFRLEdBQ1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFVLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN2RCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFMUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDekQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXdkYsTUFBTSxPQUFPLHNCQUFzQjtJQWdCakMsWUFDVSxHQUFzQixFQUN0QixHQUFxQixF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QUcsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQzthQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDZCxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7K0dBekpVLHNCQUFzQiwrTkFzQnZCLFFBQVE7b0dBdEJQLHNCQUFzQiwrTkNqQ25DLHMzSUErRUE7QUQ3QzJCO0lBQWYsWUFBWSxFQUFFOzs4REFBdUI7dUZBRHBDLHNCQUFzQjtjQVRsQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsV0FBVyxFQUFFLGlDQUFpQztnQkFDOUMsSUFBSSxFQUFFO29CQUNKLHdCQUF3QixFQUFFLE1BQU07b0JBQ2hDLDRCQUE0QixFQUFFLGVBQWU7aUJBQzlDO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOztzQkF1QkksTUFBTTt1QkFBQyxRQUFROztzQkFDZixRQUFRO3dCQXRCYyxjQUFjO2tCQUF0QyxLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBJbmplY3QsXG4gIElucHV0LFxuICBpc0Rldk1vZGUsXG4gIE5nWm9uZSxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExheW91dCwgU2V0dGluZ3NTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IGNvcHkgfSBmcm9tICdAZGVsb24vdXRpbC9icm93c2VyJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ0BkZWxvbi91dGlsL2RlY29yYXRvcic7XG5pbXBvcnQgeyBkZWVwQ29weSwgTGF6eVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbC9vdGhlcic7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgTnpNZXNzYWdlU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvbWVzc2FnZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBTEFJTkRFRkFVTFRWQVIsIERFRkFVTFRfQ09MT1JTLCBERUZBVUxUX1ZBUlMgfSBmcm9tICcuL3NldHRpbmctZHJhd2VyLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2V0dGluZy1kcmF3ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vc2V0dGluZy1kcmF3ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5zZXR0aW5nLWRyYXdlcl0nOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5zZXR0aW5nLWRyYXdlci1ydGxdJzogYGRpciA9PT0gJ3J0bCdgLFxuICB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgU2V0dGluZ0RyYXdlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGF1dG9BcHBseUNvbG9yID0gdHJ1ZTtcbiAgQElucHV0KCkgZGV2VGlwcyA9IGBXaGVuIHRoZSBjb2xvciBjYW4ndCBiZSBzd2l0Y2hlZCwgeW91IG5lZWQgdG8gcnVuIGl0IG9uY2U6IG5wbSBydW4gY29sb3ItbGVzc2A7XG5cbiAgcHJpdmF0ZSBsb2FkZWRMZXNzID0gZmFsc2U7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBkaXI6IERpcmVjdGlvbiA9ICdsdHInO1xuICBpc0RldiA9IGlzRGV2TW9kZSgpO1xuICBjb2xsYXBzZSA9IGZhbHNlO1xuICBnZXQgbGF5b3V0KCk6IExheW91dCB7XG4gICAgcmV0dXJuIHRoaXMuc2V0dGluZ1Nydi5sYXlvdXQ7XG4gIH1cbiAgZGF0YTogYW55ID0ge307XG4gIGNvbG9yOiBzdHJpbmc7XG4gIGNvbG9ycyA9IERFRkFVTFRfQ09MT1JTO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIG1zZzogTnpNZXNzYWdlU2VydmljZSxcbiAgICBwcml2YXRlIHNldHRpbmdTcnY6IFNldHRpbmdzU2VydmljZSxcbiAgICBwcml2YXRlIGxhenk6IExhenlTZXJ2aWNlLFxuICAgIHByaXZhdGUgem9uZTogTmdab25lLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnksXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBkaXJlY3Rpb25hbGl0eTogRGlyZWN0aW9uYWxpdHksXG4gICkge1xuICAgIHRoaXMuY29sb3IgPSB0aGlzLmNhY2hlZERhdGFbJ0BwcmltYXJ5LWNvbG9yJ10gfHwgdGhpcy5ERUZBVUxUX1BSSU1BUlk7XG4gICAgdGhpcy5yZXNldERhdGEodGhpcy5jYWNoZWREYXRhLCBmYWxzZSk7XG4gIH1cblxuICBwcml2YXRlIGdldCBjYWNoZWREYXRhKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB0aGlzLnNldHRpbmdTcnYubGF5b3V0W0FMQUlOREVGQVVMVFZBUl0gfHwge307XG4gIH1cblxuICBwcml2YXRlIGdldCBERUZBVUxUX1BSSU1BUlkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gREVGQVVMVF9WQVJTWydwcmltYXJ5LWNvbG9yJ10uZGVmYXVsdDtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZGlyID0gdGhpcy5kaXJlY3Rpb25hbGl0eS52YWx1ZTtcbiAgICB0aGlzLmRpcmVjdGlvbmFsaXR5LmNoYW5nZT8ucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoZGlyZWN0aW9uOiBEaXJlY3Rpb24pID0+IHtcbiAgICAgIHRoaXMuZGlyID0gZGlyZWN0aW9uO1xuICAgIH0pO1xuICAgIGlmICh0aGlzLmF1dG9BcHBseUNvbG9yICYmIHRoaXMuY29sb3IgIT09IHRoaXMuREVGQVVMVF9QUklNQVJZKSB7XG4gICAgICB0aGlzLmNoYW5nZUNvbG9yKHRoaXMuY29sb3IpO1xuICAgICAgdGhpcy5ydW5MZXNzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBsb2FkTGVzcygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAodGhpcy5sb2FkZWRMZXNzKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmxhenlcbiAgICAgIC5sb2FkU3R5bGUoJy4vYXNzZXRzL2NvbG9yLmxlc3MnLCAnc3R5bGVzaGVldC9sZXNzJylcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgY29uc3QgbGVzc0NvbmZpZ05vZGUgPSB0aGlzLmRvYy5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgbGVzc0NvbmZpZ05vZGUuaW5uZXJIVE1MID0gYFxuICAgICAgICAgIHdpbmRvdy5sZXNzID0ge1xuICAgICAgICAgICAgYXN5bmM6IHRydWUsXG4gICAgICAgICAgICBlbnY6ICdwcm9kdWN0aW9uJyxcbiAgICAgICAgICAgIGphdmFzY3JpcHRFbmFibGVkOiB0cnVlXG4gICAgICAgICAgfTtcbiAgICAgICAgYDtcbiAgICAgICAgdGhpcy5kb2MuYm9keS5hcHBlbmRDaGlsZChsZXNzQ29uZmlnTm9kZSk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5sYXp5LmxvYWRTY3JpcHQoJ2h0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vb3MvbGliL2xlc3MuanMvMy44LjEvbGVzcy5taW4uanMnKSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5sb2FkZWRMZXNzID0gdHJ1ZTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5WYXJzKCk6IGFueSB7XG4gICAgY29uc3QgeyBkYXRhLCBjb2xvciwgdmFsaWRLZXlzIH0gPSB0aGlzO1xuICAgIGNvbnN0IHZhcnM6IGFueSA9IHtcbiAgICAgIFtgQHByaW1hcnktY29sb3JgXTogY29sb3IsXG4gICAgfTtcbiAgICB2YWxpZEtleXMuZmlsdGVyKGtleSA9PiBrZXkgIT09ICdwcmltYXJ5LWNvbG9yJykuZm9yRWFjaChrZXkgPT4gKHZhcnNbYEAke2tleX1gXSA9IGRhdGFba2V5XS52YWx1ZSkpO1xuICAgIHRoaXMuc2V0TGF5b3V0KEFMQUlOREVGQVVMVFZBUiwgdmFycyk7XG4gICAgcmV0dXJuIHZhcnM7XG4gIH1cblxuICBwcml2YXRlIHJ1bkxlc3MoKTogdm9pZCB7XG4gICAgY29uc3QgeyB6b25lLCBtc2csIGNkciB9ID0gdGhpcztcbiAgICBjb25zdCBtc2dJZCA9IG1zZy5sb2FkaW5nKGDmraPlnKjnvJbor5HkuLvpopjvvIFgLCB7IG56RHVyYXRpb246IDAgfSkubWVzc2FnZUlkO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIHRoaXMubG9hZExlc3MoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAod2luZG93IGFzIGFueSkubGVzcy5tb2RpZnlWYXJzKHRoaXMuZ2VuVmFycygpKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIG1zZy5zdWNjZXNzKCfmiJDlip8nKTtcbiAgICAgICAgICAgIG1zZy5yZW1vdmUobXNnSWQpO1xuICAgICAgICAgICAgem9uZS5ydW4oKCkgPT4gY2RyLmRldGVjdENoYW5nZXMoKSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSwgMjAwKTtcbiAgfVxuXG4gIHRvZ2dsZSgpOiB2b2lkIHtcbiAgICB0aGlzLmNvbGxhcHNlID0gIXRoaXMuY29sbGFwc2U7XG4gIH1cblxuICBjaGFuZ2VDb2xvcihjb2xvcjogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIE9iamVjdC5rZXlzKERFRkFVTFRfVkFSUylcbiAgICAgIC5maWx0ZXIoa2V5ID0+IERFRkFVTFRfVkFSU1trZXldLmRlZmF1bHQgPT09ICdAcHJpbWFyeS1jb2xvcicpXG4gICAgICAuZm9yRWFjaChrZXkgPT4gZGVsZXRlIHRoaXMuY2FjaGVkRGF0YVtgQCR7a2V5fWBdKTtcbiAgICB0aGlzLnJlc2V0RGF0YSh0aGlzLmNhY2hlZERhdGEsIGZhbHNlKTtcbiAgfVxuXG4gIHNldExheW91dChuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnNldHRpbmdTcnYuc2V0TGF5b3V0KG5hbWUsIHZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVzZXREYXRhKG5vd0RhdGE/OiB7IFtrZXk6IHN0cmluZ106IE56U2FmZUFueSB9LCBydW46IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG4gICAgbm93RGF0YSA9IG5vd0RhdGEgfHwge307XG4gICAgY29uc3QgZGF0YSA9IGRlZXBDb3B5KERFRkFVTFRfVkFSUyk7XG4gICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBub3dEYXRhIVtgQCR7a2V5fWBdIHx8IGRhdGFba2V5XS5kZWZhdWx0IHx8ICcnO1xuICAgICAgZGF0YVtrZXldLnZhbHVlID0gdmFsdWUgPT09IGBAcHJpbWFyeS1jb2xvcmAgPyB0aGlzLmNvbG9yIDogdmFsdWU7XG4gICAgfSk7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICBpZiAocnVuKSB7XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB0aGlzLnJ1bkxlc3MoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldCB2YWxpZEtleXMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmRhdGEpLmZpbHRlcihrZXkgPT4gdGhpcy5kYXRhW2tleV0udmFsdWUgIT09IHRoaXMuZGF0YVtrZXldLmRlZmF1bHQpO1xuICB9XG5cbiAgYXBwbHkoKTogdm9pZCB7XG4gICAgdGhpcy5ydW5MZXNzKCk7XG4gIH1cblxuICByZXNldCgpOiB2b2lkIHtcbiAgICB0aGlzLmNvbG9yID0gdGhpcy5ERUZBVUxUX1BSSU1BUlk7XG4gICAgdGhpcy5zZXR0aW5nU3J2LnNldExheW91dChBTEFJTkRFRkFVTFRWQVIsIHt9KTtcbiAgICB0aGlzLnJlc2V0RGF0YSh7fSk7XG4gIH1cblxuICBjb3B5VmFyKCk6IHZvaWQge1xuICAgIGNvbnN0IHZhcnMgPSB0aGlzLmdlblZhcnMoKTtcbiAgICBjb25zdCBjb3B5Q29udGVudCA9IE9iamVjdC5rZXlzKHZhcnMpXG4gICAgICAubWFwKGtleSA9PiBgJHtrZXl9OiAke3ZhcnNba2V5XX07YClcbiAgICAgIC5qb2luKCdcXG4nKTtcbiAgICBjb3B5KGNvcHlDb250ZW50KTtcbiAgICB0aGlzLm1zZy5zdWNjZXNzKCdDb3B5IHN1Y2Nlc3MnKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIiwiPG56LWRyYXdlciBbbnpWaXNpYmxlXT1cImNvbGxhcHNlXCIgW256UGxhY2VtZW50XT1cImRpciA9PT0gJ3J0bCcgPyAnbGVmdCcgOiAncmlnaHQnXCIgW256V2lkdGhdPVwiNTAwXCIgKG56T25DbG9zZSk9XCJ0b2dnbGUoKVwiPlxuICA8ZGl2ICpuekRyYXdlckNvbnRlbnQgY2xhc3M9XCJzZXR0aW5nLWRyYXdlcl9fY29udGVudFwiPlxuICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5nLWRyYXdlcl9fYm9keSBzZXR0aW5nLWRyYXdlcl9fdGhlbWVcIj5cbiAgICAgIDxoMyBjbGFzcz1cInNldHRpbmctZHJhd2VyX190aXRsZVwiPuS4u+mimOiJsjwvaDM+XG4gICAgICA8c3BhblxuICAgICAgICAqbmdGb3I9XCJsZXQgYyBvZiBjb2xvcnNcIlxuICAgICAgICBbc3R5bGVdPVwieyAnYmFja2dyb3VuZC1jb2xvcic6IGMuY29sb3IgfVwiXG4gICAgICAgIChjbGljayk9XCJjaGFuZ2VDb2xvcihjLmNvbG9yKVwiXG4gICAgICAgIG56LXRvb2x0aXBcbiAgICAgICAgW256VG9vbHRpcFRpdGxlXT1cImMua2V5XCJcbiAgICAgICAgY2xhc3M9XCJzZXR0aW5nLWRyYXdlcl9fdGhlbWUtdGFnXCJcbiAgICAgID5cbiAgICAgICAgPGkgKm5nSWY9XCJjb2xvciA9PT0gYy5jb2xvclwiIG56LWljb24gbnpUeXBlPVwiY2hlY2tcIj48L2k+XG4gICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgPG56LWRpdmlkZXI+PC9uei1kaXZpZGVyPlxuICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5nLWRyYXdlcl9fYm9keVwiPlxuICAgICAgPGgzIGNsYXNzPVwic2V0dGluZy1kcmF3ZXJfX3RpdGxlXCI+6K6+572uPC9oMz5cbiAgICAgIDxuei10YWJzZXQ+XG4gICAgICAgIDxuei10YWIgbnpUaXRsZT1cIumhtumDqFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5nLWRyYXdlcl9fYm9keVwiPlxuICAgICAgICAgICAgPHNldHRpbmctZHJhd2VyLWl0ZW0gW2RhdGFdPVwiZGF0YVsnYWxhaW4tZGVmYXVsdC1oZWFkZXItaGcnXVwiPjwvc2V0dGluZy1kcmF3ZXItaXRlbT5cbiAgICAgICAgICAgIDxzZXR0aW5nLWRyYXdlci1pdGVtIFtkYXRhXT1cImRhdGFbJ2FsYWluLWRlZmF1bHQtaGVhZGVyLWJnJ11cIj48L3NldHRpbmctZHJhd2VyLWl0ZW0+XG4gICAgICAgICAgICA8c2V0dGluZy1kcmF3ZXItaXRlbSBbZGF0YV09XCJkYXRhWydhbGFpbi1kZWZhdWx0LWhlYWRlci1wYWRkaW5nJ11cIj48L3NldHRpbmctZHJhd2VyLWl0ZW0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbnotdGFiPlxuICAgICAgICA8bnotdGFiIG56VGl0bGU9XCLkvqfovrnmoI9cIj5cbiAgICAgICAgICA8c2V0dGluZy1kcmF3ZXItaXRlbSBbZGF0YV09XCJkYXRhWydhbGFpbi1kZWZhdWx0LWFzaWRlLXdkJ11cIj48L3NldHRpbmctZHJhd2VyLWl0ZW0+XG4gICAgICAgICAgPHNldHRpbmctZHJhd2VyLWl0ZW0gW2RhdGFdPVwiZGF0YVsnYWxhaW4tZGVmYXVsdC1hc2lkZS1iZyddXCI+PC9zZXR0aW5nLWRyYXdlci1pdGVtPlxuICAgICAgICAgIDxzZXR0aW5nLWRyYXdlci1pdGVtIFtkYXRhXT1cImRhdGFbJ2FsYWluLWRlZmF1bHQtYXNpZGUtY29sbGFwc2VkLXdkJ11cIj48L3NldHRpbmctZHJhd2VyLWl0ZW0+XG4gICAgICAgICAgPHNldHRpbmctZHJhd2VyLWl0ZW0gW2RhdGFdPVwiZGF0YVsnYWxhaW4tZGVmYXVsdC1hc2lkZS1uYXYtcGFkZGluZy10b3AtYm90dG9tJ11cIj48L3NldHRpbmctZHJhd2VyLWl0ZW0+XG4gICAgICAgIDwvbnotdGFiPlxuICAgICAgICA8bnotdGFiIG56VGl0bGU9XCLlhoXlrrlcIj5cbiAgICAgICAgICA8c2V0dGluZy1kcmF3ZXItaXRlbSBbZGF0YV09XCJkYXRhWydhbGFpbi1kZWZhdWx0LWNvbnRlbnQtYmcnXVwiPjwvc2V0dGluZy1kcmF3ZXItaXRlbT5cbiAgICAgICAgICA8c2V0dGluZy1kcmF3ZXItaXRlbSBbZGF0YV09XCJkYXRhWydhbGFpbi1kZWZhdWx0LWNvbnRlbnQtaGVhZGluZy1iZyddXCI+PC9zZXR0aW5nLWRyYXdlci1pdGVtPlxuICAgICAgICAgIDxzZXR0aW5nLWRyYXdlci1pdGVtIFtkYXRhXT1cImRhdGFbJ2FsYWluLWRlZmF1bHQtY29udGVudC1oZWFkaW5nLWJvcmRlciddXCI+PC9zZXR0aW5nLWRyYXdlci1pdGVtPlxuICAgICAgICAgIDxzZXR0aW5nLWRyYXdlci1pdGVtIFtkYXRhXT1cImRhdGFbJ2FsYWluLWRlZmF1bHQtY29udGVudC1wYWRkaW5nJ11cIj48L3NldHRpbmctZHJhd2VyLWl0ZW0+XG4gICAgICAgIDwvbnotdGFiPlxuICAgICAgICA8bnotdGFiIG56VGl0bGU9XCLlhbblroNcIj5cbiAgICAgICAgICA8c2V0dGluZy1kcmF3ZXItaXRlbSBbZGF0YV09XCJkYXRhWydmb3JtLXN0YXRlLXZpc3VhbC1mZWVkYmFjay1lbmFibGVkJ11cIj48L3NldHRpbmctZHJhd2VyLWl0ZW0+XG4gICAgICAgICAgPHNldHRpbmctZHJhd2VyLWl0ZW0gW2RhdGFdPVwiZGF0YVsncHJlc2VydmUtd2hpdGUtc3BhY2VzLWVuYWJsZWQnXVwiPjwvc2V0dGluZy1kcmF3ZXItaXRlbT5cbiAgICAgICAgICA8c2V0dGluZy1kcmF3ZXItaXRlbSBbZGF0YV09XCJkYXRhWyduei10YWJsZS1pbWctcmFkaXVzJ11cIj48L3NldHRpbmctZHJhd2VyLWl0ZW0+XG4gICAgICAgICAgPHNldHRpbmctZHJhd2VyLWl0ZW0gW2RhdGFdPVwiZGF0YVsnbnotdGFibGUtaW1nLW1hcmdpbi1yaWdodCddXCI+PC9zZXR0aW5nLWRyYXdlci1pdGVtPlxuICAgICAgICAgIDxzZXR0aW5nLWRyYXdlci1pdGVtIFtkYXRhXT1cImRhdGFbJ256LXRhYmxlLWltZy1tYXgtd2lkdGgnXVwiPjwvc2V0dGluZy1kcmF3ZXItaXRlbT5cbiAgICAgICAgICA8c2V0dGluZy1kcmF3ZXItaXRlbSBbZGF0YV09XCJkYXRhWyduei10YWJsZS1pbWctbWF4LWhlaWdodCddXCI+PC9zZXR0aW5nLWRyYXdlci1pdGVtPlxuICAgICAgICA8L256LXRhYj5cbiAgICAgIDwvbnotdGFic2V0PlxuICAgIDwvZGl2PlxuICAgIDxuei1kaXZpZGVyPjwvbnotZGl2aWRlcj5cbiAgICA8ZGl2IGNsYXNzPVwic2V0dGluZy1kcmF3ZXJfX2JvZHlcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5nLWRyYXdlcl9fYm9keS1pdGVtXCI+XG4gICAgICAgIOWbuuWumuWktOWSjOS+p+i+ueagj1xuICAgICAgICA8bnotc3dpdGNoIG56U2l6ZT1cInNtYWxsXCIgWyhuZ01vZGVsKV09XCJsYXlvdXQuZml4ZWRcIiAobmdNb2RlbENoYW5nZSk9XCJzZXRMYXlvdXQoJ2ZpeGVkJywgbGF5b3V0LmZpeGVkKVwiPjwvbnotc3dpdGNoPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwic2V0dGluZy1kcmF3ZXJfX2JvZHktaXRlbVwiPlxuICAgICAgICDoibLlvLHmqKHlvI9cbiAgICAgICAgPG56LXN3aXRjaCBuelNpemU9XCJzbWFsbFwiIFsobmdNb2RlbCldPVwibGF5b3V0LmNvbG9yV2Vha1wiIChuZ01vZGVsQ2hhbmdlKT1cInNldExheW91dCgnY29sb3JXZWFrJywgbGF5b3V0LmNvbG9yV2VhaylcIj48L256LXN3aXRjaD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxuei1kaXZpZGVyPjwvbnotZGl2aWRlcj5cbiAgICA8YnV0dG9uIChjbGljayk9XCJhcHBseSgpXCIgdHlwZT1cImJ1dHRvblwiIG56LWJ1dHRvbiBuelR5cGU9XCJwcmltYXJ5XCI+6aKE6KeIPC9idXR0b24+XG4gICAgPGJ1dHRvbiAoY2xpY2spPVwicmVzZXQoKVwiIHR5cGU9XCJidXR0b25cIiBuei1idXR0b24+6YeN572uPC9idXR0b24+XG4gICAgPGJ1dHRvbiAoY2xpY2spPVwiY29weVZhcigpXCIgdHlwZT1cImJ1dHRvblwiIG56LWJ1dHRvbj7mi7fotJ08L2J1dHRvbj5cbiAgICA8bnotYWxlcnRcbiAgICAgIGNsYXNzPVwibXQtbWRcIlxuICAgICAgbnpUeXBlPVwid2FybmluZ1wiXG4gICAgICBuek1lc3NhZ2U9XCLphY3nva7moI/lj6rlnKjlvIDlj5Hnjq/looPnlKjkuo7pooTop4jvvIznlJ/kuqfnjq/looPkuI3kvJrlsZXnjrDvvIzor7fmi7fotJ3lkI7miYvliqjkv67mlLnlj4LmlbDphY3nva7mlofku7Ygc3JjL3N0eWxlcy90aGVtZS5sZXNzXCJcbiAgICA+PC9uei1hbGVydD5cbiAgPC9kaXY+XG48L256LWRyYXdlcj5cbjxkaXZcbiAgY2xhc3M9XCJzZXR0aW5nLWRyYXdlcl9faGFuZGxlXCJcbiAgW25nQ2xhc3NdPVwieyAnc2V0dGluZy1kcmF3ZXJfX2hhbmRsZS1vcGVuZWQnOiBjb2xsYXBzZSB9XCJcbiAgKGNsaWNrKT1cInRvZ2dsZSgpXCJcbiAgbnotdG9vbHRpcFxuICBbbnpUb29sdGlwVGl0bGVdPVwiaXNEZXYgPyBkZXZUaXBzIDogbnVsbFwiXG4+XG4gIDxpIG56LWljb24gW256VHlwZV09XCIhY29sbGFwc2UgPyAnc2V0dGluZycgOiAnY2xvc2UnXCIgY2xhc3M9XCJzZXR0aW5nLWRyYXdlcl9faGFuZGxlLWljb25cIj48L2k+XG48L2Rpdj5cbiJdfQ==