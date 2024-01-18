import * as i0 from '@angular/core';
import { Component, Input, isDevMode, ChangeDetectionStrategy, Inject, Optional, NgModule } from '@angular/core';
import * as i1 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import * as i7 from 'ng-zorro-antd/drawer';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import * as i3 from 'ng-zorro-antd/switch';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import * as i4 from 'ng-zorro-antd/input';
import { NzInputModule } from 'ng-zorro-antd/input';
import * as i5 from 'ng-zorro-antd/input-number';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { __decorate } from 'tslib';
import * as i5$1 from '@angular/common';
import { DOCUMENT, CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { copy } from '@delon/util/browser';
import { InputBoolean, ZoneOutside } from '@delon/util/decorator';
import * as i3$1 from '@delon/util/other';
import { deepCopy } from '@delon/util/other';
import * as i1$1 from 'ng-zorro-antd/message';
import * as i2 from '@delon/theme';
import * as i4$1 from '@angular/cdk/bidi';
import * as i8 from 'ng-zorro-antd/tooltip';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import * as i9 from 'ng-zorro-antd/divider';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import * as i10 from 'ng-zorro-antd/tabs';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import * as i12 from 'ng-zorro-antd/alert';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import * as i13 from 'ng-zorro-antd/icon';
import { NzIconModule } from 'ng-zorro-antd/icon';
import * as i14 from 'ng-zorro-antd/button';
import { NzButtonModule } from 'ng-zorro-antd/button';
import * as i15 from 'ng-zorro-antd/core/transition-patch';
import * as i16 from 'ng-zorro-antd/core/wave';

class SettingDrawerItemComponent {
    constructor() {
        this.i = {};
        this.pxVal = 0;
        this.format = (value) => `${value} px`;
    }
    set data(val) {
        this.i = val;
        if (val.type === 'px') {
            this.pxVal = +val.value.replace('px', '');
        }
    }
    pxChange(val) {
        this.i.value = `${val}px`;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: SettingDrawerItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.1.0", type: SettingDrawerItemComponent, selector: "setting-drawer-item", inputs: { data: "data" }, host: { properties: { "class.setting-drawer__body-item": "true" } }, ngImport: i0, template: "<span>\n  {{ i.label }}\n  <span class=\"pl-sm text-grey\">{{ i.tip }}</span>\n</span>\n@switch (i.type) {\n  @case ('color') {\n    <input\n      nz-input\n      type=\"color\"\n      style=\"min-width: 88px\"\n      [(ngModel)]=\"i.value\"\n      [ngModelOptions]=\"{ standalone: true }\"\n    />\n  }\n  @case ('input') {\n    <input nz-input style=\"min-width: 88px\" [(ngModel)]=\"i.value\" [ngModelOptions]=\"{ standalone: true }\" />\n  }\n  @case ('px') {\n    <nz-input-number\n      [(ngModel)]=\"pxVal\"\n      (ngModelChange)=\"pxChange($event)\"\n      [nzMin]=\"i.min\"\n      [nzMax]=\"i.max\"\n      [nzStep]=\"i.step || 2\"\n      [nzFormatter]=\"format\"\n    />\n  }\n  @case ('switch') {\n    <nz-switch nzSize=\"small\" [(ngModel)]=\"i.value\" [ngModelOptions]=\"{ standalone: true }\" />\n  }\n  @default {\n    <ng-template nzDrawerContent />\n  }\n}\n", dependencies: [{ kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i7.NzDrawerContentDirective, selector: "[nzDrawerContent]", exportAs: ["nzDrawerContent"] }, { kind: "component", type: i3.NzSwitchComponent, selector: "nz-switch", inputs: ["nzLoading", "nzDisabled", "nzControl", "nzCheckedChildren", "nzUnCheckedChildren", "nzSize", "nzId"], exportAs: ["nzSwitch"] }, { kind: "directive", type: i4.NzInputDirective, selector: "input[nz-input],textarea[nz-input]", inputs: ["nzBorderless", "nzSize", "nzStepperless", "nzStatus", "disabled"], exportAs: ["nzInput"] }, { kind: "component", type: i5.NzInputNumberComponent, selector: "nz-input-number", inputs: ["nzSize", "nzMin", "nzMax", "nzParser", "nzPrecision", "nzPrecisionMode", "nzPlaceHolder", "nzStatus", "nzStep", "nzInputMode", "nzId", "nzDisabled", "nzReadOnly", "nzAutoFocus", "nzBorderless", "nzFormatter"], outputs: ["nzBlur", "nzFocus"], exportAs: ["nzInputNumber"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: SettingDrawerItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'setting-drawer-item', host: {
                        '[class.setting-drawer__body-item]': 'true'
                    }, template: "<span>\n  {{ i.label }}\n  <span class=\"pl-sm text-grey\">{{ i.tip }}</span>\n</span>\n@switch (i.type) {\n  @case ('color') {\n    <input\n      nz-input\n      type=\"color\"\n      style=\"min-width: 88px\"\n      [(ngModel)]=\"i.value\"\n      [ngModelOptions]=\"{ standalone: true }\"\n    />\n  }\n  @case ('input') {\n    <input nz-input style=\"min-width: 88px\" [(ngModel)]=\"i.value\" [ngModelOptions]=\"{ standalone: true }\" />\n  }\n  @case ('px') {\n    <nz-input-number\n      [(ngModel)]=\"pxVal\"\n      (ngModelChange)=\"pxChange($event)\"\n      [nzMin]=\"i.min\"\n      [nzMax]=\"i.max\"\n      [nzStep]=\"i.step || 2\"\n      [nzFormatter]=\"format\"\n    />\n  }\n  @case ('switch') {\n    <nz-switch nzSize=\"small\" [(ngModel)]=\"i.value\" [ngModelOptions]=\"{ standalone: true }\" />\n  }\n  @default {\n    <ng-template nzDrawerContent />\n  }\n}\n" }]
        }], propDecorators: { data: [{
                type: Input
            }] } });

const ALAINDEFAULTVAR = 'alain-default-vars';
const DEFAULT_COLORS = [
    {
        key: 'dust',
        color: '#F5222D'
    },
    {
        key: 'volcano',
        color: '#FA541C'
    },
    {
        key: 'sunset',
        color: '#FAAD14'
    },
    {
        key: 'cyan',
        color: '#13C2C2'
    },
    {
        key: 'green',
        color: '#52C41A'
    },
    {
        key: 'daybreak',
        color: '#1890ff'
    },
    {
        key: 'geekblue',
        color: '#2F54EB'
    },
    {
        key: 'purple',
        color: '#722ED1'
    },
    {
        key: 'black',
        color: '#001529'
    }
];
const DEFAULT_VARS = {
    'primary-color': { label: '主颜色', type: 'color', default: '#1890ff' },
    'alain-default-header-hg': {
        label: '高',
        type: 'px',
        default: '64px',
        max: 300,
        min: 24
    },
    'alain-default-header-bg': {
        label: '背景色',
        type: 'color',
        default: '@primary-color',
        tip: '默认同主色系'
    },
    'alain-default-header-padding': {
        label: '顶部左右内边距',
        type: 'px',
        default: '16px'
    },
    // 侧边栏
    'alain-default-aside-wd': { label: '宽度', type: 'px', default: '200px' },
    'alain-default-aside-bg': {
        label: '背景',
        type: 'color',
        default: '#ffffff'
    },
    'alain-default-aside-collapsed-wd': {
        label: '收缩宽度',
        type: 'px',
        default: '64px'
    },
    'alain-default-aside-nav-padding-top-bottom': {
        label: '项上下内边距',
        type: 'px',
        default: '8px',
        step: 8
    },
    // 主菜单
    'alain-default-aside-nav-fs': {
        label: '菜单字号',
        type: 'px',
        default: '14px',
        min: 14,
        max: 30
    },
    'alain-default-aside-collapsed-nav-fs': {
        label: '收缩菜单字号',
        type: 'px',
        default: '24px',
        min: 24,
        max: 32
    },
    'alain-default-aside-nav-item-height': {
        label: '菜单项高度',
        type: 'px',
        default: '38px',
        min: 24,
        max: 64
    },
    'alain-default-aside-nav-text-color': {
        label: '菜单文本颜色',
        type: 'color',
        default: 'rgba(0, 0, 0, 0.65)',
        rgba: true
    },
    'alain-default-aside-nav-text-hover-color': {
        label: '菜单文本悬停颜色',
        type: 'color',
        default: '@primary-color',
        tip: '默认同主色系'
    },
    'alain-default-aside-nav-group-text-color': {
        label: '菜单分组文本颜色',
        type: 'color',
        default: 'rgba(0, 0, 0, 0.43)',
        rgba: true
    },
    'alain-default-aside-nav-selected-text-color': {
        label: '菜单激活时文本颜色',
        type: 'color',
        default: '@primary-color',
        tip: '默认同主色系'
    },
    'alain-default-aside-nav-selected-bg': {
        label: '菜单激活时背景颜色',
        type: 'color',
        default: '#fcfcfc'
    },
    // 内容
    'alain-default-content-bg': {
        label: '背景色',
        type: 'color',
        default: '#f5f7fa'
    },
    'alain-default-content-heading-bg': {
        label: '标题背景色',
        type: 'color',
        default: '#fafbfc'
    },
    'alain-default-content-heading-border': {
        label: '标题底部边框色',
        type: 'color',
        default: '#efe3e5'
    },
    'alain-default-content-padding': {
        label: '内边距',
        type: 'px',
        default: '24px',
        min: 0,
        max: 128,
        step: 8
    },
    // zorro组件修正
    'form-state-visual-feedback-enabled': {
        label: '开启表单元素的视觉反馈',
        type: 'switch',
        default: true
    },
    'preserve-white-spaces-enabled': {
        label: '开启 preserveWhitespaces',
        type: 'switch',
        default: true
    },
    'nz-table-img-radius': {
        label: '表格中：图片圆角',
        type: 'px',
        default: '4px',
        min: 0,
        max: 128
    },
    'nz-table-img-margin-right': {
        label: '表格中：图片右外边距',
        type: 'px',
        default: '4px',
        min: 0,
        max: 128
    },
    'nz-table-img-max-width': {
        label: '表格中：图片最大宽度',
        type: 'px',
        default: '32px',
        min: 8,
        max: 128
    },
    'nz-table-img-max-height': {
        label: '表格中：图片最大高度',
        type: 'px',
        default: '32px',
        min: 8,
        max: 128
    }
};

class SettingDrawerComponent {
    get layout() {
        return this.settingSrv.layout;
    }
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
        this.lessJs = 'https://cdn.jsdelivr.net/npm/less';
        this.loadedLess = false;
        this.dir$ = this.directionality.change?.pipe(takeUntilDestroyed());
        this.dir = 'ltr';
        this.isDev = isDevMode();
        this.collapse = false;
        this.data = {};
        this.colors = DEFAULT_COLORS;
        this.color = this.cachedData['@primary-color'] || this.DEFAULT_PRIMARY;
        this.resetData(this.cachedData, false);
    }
    get cachedData() {
        return this.settingSrv.layout[ALAINDEFAULTVAR] || {};
    }
    get DEFAULT_PRIMARY() {
        return DEFAULT_VARS['primary-color'].default;
    }
    ngOnInit() {
        this.dir = this.directionality.value;
        this.dir$.subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        if (this.autoApplyColor && this.color !== this.DEFAULT_PRIMARY) {
            this.changeColor(this.color);
            this.runLess();
        }
    }
    async loadLess() {
        if (this.loadedLess) {
            return Promise.resolve();
        }
        return this.lazy
            .loadStyle('./assets/color.less', { rel: 'stylesheet/less' })
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
            .then(() => this.lazy.loadScript(this.lessJs))
            .then(() => {
            this.loadedLess = true;
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: SettingDrawerComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i1$1.NzMessageService }, { token: i2.SettingsService }, { token: i3$1.LazyService }, { token: i0.NgZone }, { token: DOCUMENT }, { token: i4$1.Directionality, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.1.0", type: SettingDrawerComponent, selector: "setting-drawer", inputs: { autoApplyColor: "autoApplyColor", compilingText: "compilingText", devTips: "devTips", lessJs: "lessJs" }, host: { properties: { "class.setting-drawer": "true", "class.setting-drawer-rtl": "dir === 'rtl'" } }, ngImport: i0, template: "<nz-drawer\n  [nzVisible]=\"collapse\"\n  [nzPlacement]=\"dir === 'rtl' ? 'left' : 'right'\"\n  [nzWidth]=\"500\"\n  (nzOnClose)=\"toggle()\"\n>\n  <div *nzDrawerContent class=\"setting-drawer__content\">\n    <div class=\"setting-drawer__body setting-drawer__theme\">\n      <h3 class=\"setting-drawer__title\">\u4E3B\u9898\u8272</h3>\n      @for (c of colors; track $index) {\n        <span\n          [style]=\"{ 'background-color': c.color }\"\n          (click)=\"changeColor(c.color)\"\n          nz-tooltip\n          [nzTooltipTitle]=\"c.key\"\n          class=\"setting-drawer__theme-tag\"\n        >\n          @if (color === c.color) {\n            <i nz-icon nzType=\"check\"></i>\n          }\n        </span>\n      }\n    </div>\n    <nz-divider />\n    <div class=\"setting-drawer__body\">\n      <h3 class=\"setting-drawer__title\">\u8BBE\u7F6E</h3>\n      <nz-tabset>\n        <nz-tab nzTitle=\"\u9876\u90E8\">\n          <div class=\"setting-drawer__body\">\n            <setting-drawer-item [data]=\"data['alain-default-header-hg']\" />\n            <setting-drawer-item [data]=\"data['alain-default-header-bg']\" />\n            <setting-drawer-item [data]=\"data['alain-default-header-padding']\" />\n          </div>\n        </nz-tab>\n        <nz-tab nzTitle=\"\u4FA7\u8FB9\u680F\">\n          <setting-drawer-item [data]=\"data['alain-default-aside-wd']\" />\n          <setting-drawer-item [data]=\"data['alain-default-aside-bg']\" />\n          <setting-drawer-item [data]=\"data['alain-default-aside-collapsed-wd']\" />\n          <setting-drawer-item [data]=\"data['alain-default-aside-nav-padding-top-bottom']\" />\n        </nz-tab>\n        <nz-tab nzTitle=\"\u5185\u5BB9\">\n          <setting-drawer-item [data]=\"data['alain-default-content-bg']\" />\n          <setting-drawer-item [data]=\"data['alain-default-content-heading-bg']\" />\n          <setting-drawer-item [data]=\"data['alain-default-content-heading-border']\" />\n          <setting-drawer-item [data]=\"data['alain-default-content-padding']\" />\n        </nz-tab>\n        <nz-tab nzTitle=\"\u5176\u5B83\">\n          <setting-drawer-item [data]=\"data['form-state-visual-feedback-enabled']\" />\n          <setting-drawer-item [data]=\"data['preserve-white-spaces-enabled']\" />\n          <setting-drawer-item [data]=\"data['nz-table-img-radius']\" />\n          <setting-drawer-item [data]=\"data['nz-table-img-margin-right']\" />\n          <setting-drawer-item [data]=\"data['nz-table-img-max-width']\" />\n          <setting-drawer-item [data]=\"data['nz-table-img-max-height']\" />\n        </nz-tab>\n      </nz-tabset>\n    </div>\n    <nz-divider />\n    <div class=\"setting-drawer__body\">\n      <div class=\"setting-drawer__body-item\">\n        \u56FA\u5B9A\u5934\u548C\u4FA7\u8FB9\u680F\n        <nz-switch nzSize=\"small\" [(ngModel)]=\"layout.fixed\" (ngModelChange)=\"setLayout('fixed', layout.fixed)\" />\n      </div>\n      <div class=\"setting-drawer__body-item\">\n        \u8272\u5F31\u6A21\u5F0F\n        <nz-switch\n          nzSize=\"small\"\n          [(ngModel)]=\"layout.colorWeak\"\n          (ngModelChange)=\"setLayout('colorWeak', layout.colorWeak)\"\n        />\n      </div>\n    </div>\n    <nz-divider />\n    <button (click)=\"apply()\" type=\"button\" nz-button nzType=\"primary\">\u9884\u89C8</button>\n    <button (click)=\"reset()\" type=\"button\" nz-button>\u91CD\u7F6E</button>\n    <button (click)=\"copyVar()\" type=\"button\" nz-button>\u62F7\u8D1D</button>\n    <nz-alert\n      class=\"mt-md\"\n      nzType=\"warning\"\n      nzMessage=\"\u914D\u7F6E\u680F\u53EA\u5728\u5F00\u53D1\u73AF\u5883\u7528\u4E8E\u9884\u89C8\uFF0C\u751F\u4EA7\u73AF\u5883\u4E0D\u4F1A\u5C55\u73B0\uFF0C\u8BF7\u62F7\u8D1D\u540E\u624B\u52A8\u4FEE\u6539\u53C2\u6570\u914D\u7F6E\u6587\u4EF6 src/styles/theme.less\"\n    />\n  </div>\n</nz-drawer>\n<div\n  class=\"setting-drawer__handle\"\n  [ngClass]=\"{ 'setting-drawer__handle-opened': collapse }\"\n  (click)=\"toggle()\"\n  nz-tooltip\n  [nzTooltipTitle]=\"isDev ? devTips : null\"\n>\n  <i nz-icon [nzType]=\"!collapse ? 'setting' : 'close'\" class=\"setting-drawer__handle-icon\"></i>\n</div>\n", dependencies: [{ kind: "directive", type: i5$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i7.NzDrawerComponent, selector: "nz-drawer", inputs: ["nzContent", "nzCloseIcon", "nzClosable", "nzMaskClosable", "nzMask", "nzCloseOnNavigation", "nzNoAnimation", "nzKeyboard", "nzTitle", "nzExtra", "nzFooter", "nzPlacement", "nzSize", "nzMaskStyle", "nzBodyStyle", "nzWrapClassName", "nzWidth", "nzHeight", "nzZIndex", "nzOffsetX", "nzOffsetY", "nzVisible"], outputs: ["nzOnViewInit", "nzOnClose", "nzVisibleChange"], exportAs: ["nzDrawer"] }, { kind: "directive", type: i7.NzDrawerContentDirective, selector: "[nzDrawerContent]", exportAs: ["nzDrawerContent"] }, { kind: "directive", type: i8.NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "cdkConnectedOverlayPush", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }, { kind: "component", type: i9.NzDividerComponent, selector: "nz-divider", inputs: ["nzText", "nzType", "nzOrientation", "nzDashed", "nzPlain"], exportAs: ["nzDivider"] }, { kind: "component", type: i10.NzTabSetComponent, selector: "nz-tabset", inputs: ["nzSelectedIndex", "nzTabPosition", "nzTabBarExtraContent", "nzCanDeactivate", "nzAddIcon", "nzTabBarStyle", "nzType", "nzSize", "nzAnimated", "nzTabBarGutter", "nzHideAdd", "nzCentered", "nzHideAll", "nzLinkRouter", "nzLinkExact"], outputs: ["nzSelectChange", "nzSelectedIndexChange", "nzTabListScroll", "nzClose", "nzAdd"], exportAs: ["nzTabset"] }, { kind: "component", type: i10.NzTabComponent, selector: "nz-tab", inputs: ["nzTitle", "nzClosable", "nzCloseIcon", "nzDisabled", "nzForceRender"], outputs: ["nzSelect", "nzDeselect", "nzClick", "nzContextmenu"], exportAs: ["nzTab"] }, { kind: "component", type: i3.NzSwitchComponent, selector: "nz-switch", inputs: ["nzLoading", "nzDisabled", "nzControl", "nzCheckedChildren", "nzUnCheckedChildren", "nzSize", "nzId"], exportAs: ["nzSwitch"] }, { kind: "component", type: i12.NzAlertComponent, selector: "nz-alert", inputs: ["nzAction", "nzCloseText", "nzIconType", "nzMessage", "nzDescription", "nzType", "nzCloseable", "nzShowIcon", "nzBanner", "nzNoAnimation", "nzIcon"], outputs: ["nzOnClose"], exportAs: ["nzAlert"] }, { kind: "directive", type: i13.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "component", type: i14.NzButtonComponent, selector: "button[nz-button], a[nz-button]", inputs: ["nzBlock", "nzGhost", "nzSearch", "nzLoading", "nzDanger", "disabled", "tabIndex", "nzType", "nzShape", "nzSize"], exportAs: ["nzButton"] }, { kind: "directive", type: i15.ɵNzTransitionPatchDirective, selector: "[nz-button], nz-button-group, [nz-icon], [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group", inputs: ["hidden"] }, { kind: "directive", type: i16.NzWaveDirective, selector: "[nz-wave],button[nz-button]:not([nzType=\"link\"]):not([nzType=\"text\"])", inputs: ["nzWaveExtraNode"], exportAs: ["nzWave"] }, { kind: "component", type: SettingDrawerItemComponent, selector: "setting-drawer-item", inputs: ["data"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
__decorate([
    InputBoolean()
], SettingDrawerComponent.prototype, "autoApplyColor", void 0);
__decorate([
    ZoneOutside()
], SettingDrawerComponent.prototype, "loadLess", null);
__decorate([
    ZoneOutside()
], SettingDrawerComponent.prototype, "runLess", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: SettingDrawerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'setting-drawer', host: {
                        '[class.setting-drawer]': 'true',
                        '[class.setting-drawer-rtl]': `dir === 'rtl'`
                    }, changeDetection: ChangeDetectionStrategy.OnPush, template: "<nz-drawer\n  [nzVisible]=\"collapse\"\n  [nzPlacement]=\"dir === 'rtl' ? 'left' : 'right'\"\n  [nzWidth]=\"500\"\n  (nzOnClose)=\"toggle()\"\n>\n  <div *nzDrawerContent class=\"setting-drawer__content\">\n    <div class=\"setting-drawer__body setting-drawer__theme\">\n      <h3 class=\"setting-drawer__title\">\u4E3B\u9898\u8272</h3>\n      @for (c of colors; track $index) {\n        <span\n          [style]=\"{ 'background-color': c.color }\"\n          (click)=\"changeColor(c.color)\"\n          nz-tooltip\n          [nzTooltipTitle]=\"c.key\"\n          class=\"setting-drawer__theme-tag\"\n        >\n          @if (color === c.color) {\n            <i nz-icon nzType=\"check\"></i>\n          }\n        </span>\n      }\n    </div>\n    <nz-divider />\n    <div class=\"setting-drawer__body\">\n      <h3 class=\"setting-drawer__title\">\u8BBE\u7F6E</h3>\n      <nz-tabset>\n        <nz-tab nzTitle=\"\u9876\u90E8\">\n          <div class=\"setting-drawer__body\">\n            <setting-drawer-item [data]=\"data['alain-default-header-hg']\" />\n            <setting-drawer-item [data]=\"data['alain-default-header-bg']\" />\n            <setting-drawer-item [data]=\"data['alain-default-header-padding']\" />\n          </div>\n        </nz-tab>\n        <nz-tab nzTitle=\"\u4FA7\u8FB9\u680F\">\n          <setting-drawer-item [data]=\"data['alain-default-aside-wd']\" />\n          <setting-drawer-item [data]=\"data['alain-default-aside-bg']\" />\n          <setting-drawer-item [data]=\"data['alain-default-aside-collapsed-wd']\" />\n          <setting-drawer-item [data]=\"data['alain-default-aside-nav-padding-top-bottom']\" />\n        </nz-tab>\n        <nz-tab nzTitle=\"\u5185\u5BB9\">\n          <setting-drawer-item [data]=\"data['alain-default-content-bg']\" />\n          <setting-drawer-item [data]=\"data['alain-default-content-heading-bg']\" />\n          <setting-drawer-item [data]=\"data['alain-default-content-heading-border']\" />\n          <setting-drawer-item [data]=\"data['alain-default-content-padding']\" />\n        </nz-tab>\n        <nz-tab nzTitle=\"\u5176\u5B83\">\n          <setting-drawer-item [data]=\"data['form-state-visual-feedback-enabled']\" />\n          <setting-drawer-item [data]=\"data['preserve-white-spaces-enabled']\" />\n          <setting-drawer-item [data]=\"data['nz-table-img-radius']\" />\n          <setting-drawer-item [data]=\"data['nz-table-img-margin-right']\" />\n          <setting-drawer-item [data]=\"data['nz-table-img-max-width']\" />\n          <setting-drawer-item [data]=\"data['nz-table-img-max-height']\" />\n        </nz-tab>\n      </nz-tabset>\n    </div>\n    <nz-divider />\n    <div class=\"setting-drawer__body\">\n      <div class=\"setting-drawer__body-item\">\n        \u56FA\u5B9A\u5934\u548C\u4FA7\u8FB9\u680F\n        <nz-switch nzSize=\"small\" [(ngModel)]=\"layout.fixed\" (ngModelChange)=\"setLayout('fixed', layout.fixed)\" />\n      </div>\n      <div class=\"setting-drawer__body-item\">\n        \u8272\u5F31\u6A21\u5F0F\n        <nz-switch\n          nzSize=\"small\"\n          [(ngModel)]=\"layout.colorWeak\"\n          (ngModelChange)=\"setLayout('colorWeak', layout.colorWeak)\"\n        />\n      </div>\n    </div>\n    <nz-divider />\n    <button (click)=\"apply()\" type=\"button\" nz-button nzType=\"primary\">\u9884\u89C8</button>\n    <button (click)=\"reset()\" type=\"button\" nz-button>\u91CD\u7F6E</button>\n    <button (click)=\"copyVar()\" type=\"button\" nz-button>\u62F7\u8D1D</button>\n    <nz-alert\n      class=\"mt-md\"\n      nzType=\"warning\"\n      nzMessage=\"\u914D\u7F6E\u680F\u53EA\u5728\u5F00\u53D1\u73AF\u5883\u7528\u4E8E\u9884\u89C8\uFF0C\u751F\u4EA7\u73AF\u5883\u4E0D\u4F1A\u5C55\u73B0\uFF0C\u8BF7\u62F7\u8D1D\u540E\u624B\u52A8\u4FEE\u6539\u53C2\u6570\u914D\u7F6E\u6587\u4EF6 src/styles/theme.less\"\n    />\n  </div>\n</nz-drawer>\n<div\n  class=\"setting-drawer__handle\"\n  [ngClass]=\"{ 'setting-drawer__handle-opened': collapse }\"\n  (click)=\"toggle()\"\n  nz-tooltip\n  [nzTooltipTitle]=\"isDev ? devTips : null\"\n>\n  <i nz-icon [nzType]=\"!collapse ? 'setting' : 'close'\" class=\"setting-drawer__handle-icon\"></i>\n</div>\n" }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i1$1.NzMessageService }, { type: i2.SettingsService }, { type: i3$1.LazyService }, { type: i0.NgZone }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: i4$1.Directionality, decorators: [{
                    type: Optional
                }] }], propDecorators: { autoApplyColor: [{
                type: Input
            }], compilingText: [{
                type: Input
            }], devTips: [{
                type: Input
            }], lessJs: [{
                type: Input
            }], loadLess: [], runLess: [] } });

const COMPONENTS = [SettingDrawerItemComponent, SettingDrawerComponent];
class SettingDrawerModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: SettingDrawerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.1.0", ngImport: i0, type: SettingDrawerModule, declarations: [SettingDrawerItemComponent, SettingDrawerComponent], imports: [CommonModule,
            FormsModule,
            NzDrawerModule,
            NzToolTipModule,
            NzDividerModule,
            NzTabsModule,
            NzSwitchModule,
            NzAlertModule,
            NzIconModule,
            NzInputModule,
            NzInputNumberModule,
            NzButtonModule], exports: [SettingDrawerItemComponent, SettingDrawerComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: SettingDrawerModule, imports: [CommonModule,
            FormsModule,
            NzDrawerModule,
            NzToolTipModule,
            NzDividerModule,
            NzTabsModule,
            NzSwitchModule,
            NzAlertModule,
            NzIconModule,
            NzInputModule,
            NzInputNumberModule,
            NzButtonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: SettingDrawerModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        NzDrawerModule,
                        NzToolTipModule,
                        NzDividerModule,
                        NzTabsModule,
                        NzSwitchModule,
                        NzAlertModule,
                        NzIconModule,
                        NzInputModule,
                        NzInputNumberModule,
                        NzButtonModule
                    ],
                    declarations: COMPONENTS,
                    exports: COMPONENTS
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { SettingDrawerComponent, SettingDrawerItemComponent, SettingDrawerModule };
//# sourceMappingURL=setting-drawer.mjs.map
