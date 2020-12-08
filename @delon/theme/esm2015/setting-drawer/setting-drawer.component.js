/**
 * @fileoverview added by tsickle
 * Generated from: setting-drawer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __awaiter, __decorate, __metadata } from "tslib";
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Input, isDevMode, NgZone } from '@angular/core';
import { SettingsService } from '@delon/theme';
import { copy, deepCopy, InputBoolean, LazyService } from '@delon/util';
import { NzMessageService } from 'ng-zorro-antd/message';
/** @type {?} */
const ALAINDEFAULTVAR = 'alain-default-vars';
/** @type {?} */
const DEFAULT_COLORS = [
    {
        key: 'dust',
        color: '#F5222D',
    },
    {
        key: 'volcano',
        color: '#FA541C',
    },
    {
        key: 'sunset',
        color: '#FAAD14',
    },
    {
        key: 'cyan',
        color: '#13C2C2',
    },
    {
        key: 'green',
        color: '#52C41A',
    },
    {
        key: 'daybreak',
        color: '#1890ff',
    },
    {
        key: 'geekblue',
        color: '#2F54EB',
    },
    {
        key: 'purple',
        color: '#722ED1',
    },
    {
        key: 'black',
        color: '#001529',
    },
];
/** @type {?} */
const DEFAULT_VARS = {
    'primary-color': { label: '主颜色', type: 'color', default: '#1890ff' },
    'alain-default-header-hg': {
        label: '高',
        type: 'px',
        default: '64px',
        max: 300,
        min: 24,
    },
    'alain-default-header-bg': {
        label: '背景色',
        type: 'color',
        default: '@primary-color',
        tip: '默认同主色系',
    },
    'alain-default-header-padding': {
        label: '顶部左右内边距',
        type: 'px',
        default: '16px',
    },
    // 侧边栏
    'alain-default-aside-wd': { label: '宽度', type: 'px', default: '200px' },
    'alain-default-aside-bg': {
        label: '背景',
        type: 'color',
        default: '#ffffff',
    },
    'alain-default-aside-collapsed-wd': {
        label: '收缩宽度',
        type: 'px',
        default: '64px',
    },
    'alain-default-aside-nav-padding-top-bottom': {
        label: '项上下内边距',
        type: 'px',
        default: '8px',
        step: 8,
    },
    // 主菜单
    'alain-default-aside-nav-fs': {
        label: '菜单字号',
        type: 'px',
        default: '14px',
        min: 14,
        max: 30,
    },
    'alain-default-aside-collapsed-nav-fs': {
        label: '收缩菜单字号',
        type: 'px',
        default: '24px',
        min: 24,
        max: 32,
    },
    'alain-default-aside-nav-item-height': {
        label: '菜单项高度',
        type: 'px',
        default: '38px',
        min: 24,
        max: 64,
    },
    'alain-default-aside-nav-text-color': {
        label: '菜单文本颜色',
        type: 'color',
        default: 'rgba(0, 0, 0, 0.65)',
        rgba: true,
    },
    'alain-default-aside-nav-text-hover-color': {
        label: '菜单文本悬停颜色',
        type: 'color',
        default: '@primary-color',
        tip: '默认同主色系',
    },
    'alain-default-aside-nav-group-text-color': {
        label: '菜单分组文本颜色',
        type: 'color',
        default: 'rgba(0, 0, 0, 0.43)',
        rgba: true,
    },
    'alain-default-aside-nav-selected-text-color': {
        label: '菜单激活时文本颜色',
        type: 'color',
        default: '@primary-color',
        tip: '默认同主色系',
    },
    'alain-default-aside-nav-selected-bg': {
        label: '菜单激活时背景颜色',
        type: 'color',
        default: '#fcfcfc',
    },
    // 内容
    'alain-default-content-bg': {
        label: '背景色',
        type: 'color',
        default: '#f5f7fa',
    },
    'alain-default-content-heading-bg': {
        label: '标题背景色',
        type: 'color',
        default: '#fafbfc',
    },
    'alain-default-content-heading-border': {
        label: '标题底部边框色',
        type: 'color',
        default: '#efe3e5',
    },
    'alain-default-content-padding': {
        label: '内边距',
        type: 'px',
        default: '24px',
        min: 0,
        max: 128,
        step: 8,
    },
    // zorro组件修正
    'form-state-visual-feedback-enabled': {
        label: '开启表单元素的视觉反馈',
        type: 'switch',
        default: true,
    },
    'preserve-white-spaces-enabled': {
        label: '开启 preserveWhitespaces',
        type: 'switch',
        default: true,
    },
    'nz-table-img-radius': {
        label: '表格中：图片圆角',
        type: 'px',
        default: '4px',
        min: 0,
        max: 128,
    },
    'nz-table-img-margin-right': {
        label: '表格中：图片右外边距',
        type: 'px',
        default: '4px',
        min: 0,
        max: 128,
    },
    'nz-table-img-max-width': {
        label: '表格中：图片最大宽度',
        type: 'px',
        default: '32px',
        min: 8,
        max: 128,
    },
    'nz-table-img-max-height': {
        label: '表格中：图片最大高度',
        type: 'px',
        default: '32px',
        min: 8,
        max: 128,
    },
};
export class SettingDrawerComponent {
    /**
     * @param {?} cdr
     * @param {?} msg
     * @param {?} settingSrv
     * @param {?} lazy
     * @param {?} zone
     * @param {?} doc
     */
    constructor(cdr, msg, settingSrv, lazy, zone, doc) {
        this.cdr = cdr;
        this.msg = msg;
        this.settingSrv = settingSrv;
        this.lazy = lazy;
        this.zone = zone;
        this.doc = doc;
        this.autoApplyColor = true;
        this.devTips = `When the color can't be switched, you need to run it once: npm run color-less`;
        this.loadedLess = false;
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
}
SettingDrawerComponent.decorators = [
    { type: Component, args: [{
                selector: 'setting-drawer',
                template: "<nz-drawer [nzVisible]=\"collapse\" [nzWidth]=\"500\" (nzOnClose)=\"toggle()\">\n  <div *nzDrawerContent class=\"setting-drawer__content\">\n    <div class=\"setting-drawer__body setting-drawer__theme\">\n      <h3 class=\"setting-drawer__title\">\u4E3B\u9898\u8272</h3>\n      <span\n        *ngFor=\"let c of colors\"\n        [style]=\"{ 'background-color': c.color }\"\n        (click)=\"changeColor(c.color)\"\n        nz-tooltip\n        [nzTooltipTitle]=\"c.key\"\n        class=\"setting-drawer__theme-tag\"\n      >\n        <i *ngIf=\"color === c.color\" nz-icon nzType=\"check\"></i>\n      </span>\n    </div>\n    <nz-divider></nz-divider>\n    <div class=\"setting-drawer__body\">\n      <h3 class=\"setting-drawer__title\">\u8BBE\u7F6E</h3>\n      <nz-tabset>\n        <nz-tab nzTitle=\"\u9876\u90E8\">\n          <div class=\"setting-drawer__body\">\n            <setting-drawer-item [data]=\"data['alain-default-header-hg']\"></setting-drawer-item>\n            <setting-drawer-item [data]=\"data['alain-default-header-bg']\"></setting-drawer-item>\n            <setting-drawer-item [data]=\"data['alain-default-header-padding']\"></setting-drawer-item>\n          </div>\n        </nz-tab>\n        <nz-tab nzTitle=\"\u4FA7\u8FB9\u680F\">\n          <setting-drawer-item [data]=\"data['alain-default-aside-wd']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['alain-default-aside-bg']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['alain-default-aside-collapsed-wd']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['alain-default-aside-nav-padding-top-bottom']\"></setting-drawer-item>\n        </nz-tab>\n        <nz-tab nzTitle=\"\u5185\u5BB9\">\n          <setting-drawer-item [data]=\"data['alain-default-content-bg']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['alain-default-content-heading-bg']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['alain-default-content-heading-border']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['alain-default-content-padding']\"></setting-drawer-item>\n        </nz-tab>\n        <nz-tab nzTitle=\"\u5176\u5B83\">\n          <setting-drawer-item [data]=\"data['form-state-visual-feedback-enabled']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['preserve-white-spaces-enabled']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['nz-table-img-radius']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['nz-table-img-margin-right']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['nz-table-img-max-width']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['nz-table-img-max-height']\"></setting-drawer-item>\n        </nz-tab>\n      </nz-tabset>\n    </div>\n    <nz-divider></nz-divider>\n    <div class=\"setting-drawer__body\">\n      <div class=\"setting-drawer__body-item\">\n        \u56FA\u5B9A\u5934\u548C\u4FA7\u8FB9\u680F\n        <nz-switch nzSize=\"small\" [(ngModel)]=\"layout.fixed\" (ngModelChange)=\"setLayout('fixed', layout.fixed)\"></nz-switch>\n      </div>\n      <div class=\"setting-drawer__body-item\">\n        \u8272\u5F31\u6A21\u5F0F\n        <nz-switch nzSize=\"small\" [(ngModel)]=\"layout.colorWeak\" (ngModelChange)=\"setLayout('colorWeak', layout.colorWeak)\"></nz-switch>\n      </div>\n    </div>\n    <nz-divider></nz-divider>\n    <button (click)=\"apply()\" type=\"button\" nz-button nzType=\"primary\">\u9884\u89C8</button>\n    <button (click)=\"reset()\" type=\"button\" nz-button>\u91CD\u7F6E</button>\n    <button (click)=\"copyVar()\" type=\"button\" nz-button>\u62F7\u8D1D</button>\n    <nz-alert\n      class=\"mt-md\"\n      nzType=\"warning\"\n      nzMessage=\"\u914D\u7F6E\u680F\u53EA\u5728\u5F00\u53D1\u73AF\u5883\u7528\u4E8E\u9884\u89C8\uFF0C\u751F\u4EA7\u73AF\u5883\u4E0D\u4F1A\u5C55\u73B0\uFF0C\u8BF7\u62F7\u8D1D\u540E\u624B\u52A8\u4FEE\u6539\u53C2\u6570\u914D\u7F6E\u6587\u4EF6 src/styles/theme.less\"\n    ></nz-alert>\n  </div>\n</nz-drawer>\n<div\n  class=\"setting-drawer__handle\"\n  [ngClass]=\"{ 'setting-drawer__handle-opened': collapse }\"\n  (click)=\"toggle()\"\n  nz-tooltip\n  [nzTooltipTitle]=\"isDev ? devTips : null\"\n>\n  <i nz-icon [nzType]=\"!collapse ? 'setting' : 'close'\" class=\"setting-drawer__handle-icon\"></i>\n</div>\n",
                host: {
                    '[class.setting-drawer]': 'true',
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
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZy1kcmF3ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lL3NldHRpbmctZHJhd2VyLyIsInNvdXJjZXMiOlsic2V0dGluZy1kcmF3ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNoSSxPQUFPLEVBQVUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFeEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7O01BRW5ELGVBQWUsR0FBRyxvQkFBb0I7O01BQ3RDLGNBQWMsR0FBRztJQUNyQjtRQUNFLEdBQUcsRUFBRSxNQUFNO1FBQ1gsS0FBSyxFQUFFLFNBQVM7S0FDakI7SUFDRDtRQUNFLEdBQUcsRUFBRSxTQUFTO1FBQ2QsS0FBSyxFQUFFLFNBQVM7S0FDakI7SUFDRDtRQUNFLEdBQUcsRUFBRSxRQUFRO1FBQ2IsS0FBSyxFQUFFLFNBQVM7S0FDakI7SUFDRDtRQUNFLEdBQUcsRUFBRSxNQUFNO1FBQ1gsS0FBSyxFQUFFLFNBQVM7S0FDakI7SUFDRDtRQUNFLEdBQUcsRUFBRSxPQUFPO1FBQ1osS0FBSyxFQUFFLFNBQVM7S0FDakI7SUFDRDtRQUNFLEdBQUcsRUFBRSxVQUFVO1FBQ2YsS0FBSyxFQUFFLFNBQVM7S0FDakI7SUFDRDtRQUNFLEdBQUcsRUFBRSxVQUFVO1FBQ2YsS0FBSyxFQUFFLFNBQVM7S0FDakI7SUFDRDtRQUNFLEdBQUcs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LENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7WUFySkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLDYwSUFBOEM7Z0JBQzlDLElBQUksRUFBRTtvQkFDSix3QkFBd0IsRUFBRSxNQUFNO2lCQUNqQztnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OztZQTlNaUMsaUJBQWlCO1lBSTFDLGdCQUFnQjtZQUhSLGVBQWU7WUFDTyxXQUFXO1lBRndDLE1BQU07NENBbU8zRixNQUFNLFNBQUMsUUFBUTs7OzZCQW5CakIsS0FBSztzQkFDTCxLQUFLOztBQURtQjtJQUFmLFlBQVksRUFBRTs7OERBQXVCOzs7SUFBL0MsZ0RBQStDOztJQUMvQyx5Q0FBbUc7Ozs7O0lBRW5HLDRDQUEyQjs7SUFDM0IsdUNBQW9COztJQUNwQiwwQ0FBaUI7O0lBSWpCLHNDQUFlOztJQUNmLHVDQUFjOztJQUNkLHdDQUF3Qjs7Ozs7SUFHdEIscUNBQThCOzs7OztJQUM5QixxQ0FBNkI7Ozs7O0lBQzdCLDRDQUFtQzs7Ozs7SUFDbkMsc0NBQXlCOzs7OztJQUN6QixzQ0FBb0I7Ozs7O0lBQ3BCLHFDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBJbmplY3QsIElucHV0LCBpc0Rldk1vZGUsIE5nWm9uZSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMYXlvdXQsIFNldHRpbmdzU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBjb3B5LCBkZWVwQ29weSwgSW5wdXRCb29sZWFuLCBMYXp5U2VydmljZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBOek1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9tZXNzYWdlJztcblxuY29uc3QgQUxBSU5ERUZBVUxUVkFSID0gJ2FsYWluLWRlZmF1bHQtdmFycyc7XG5jb25zdCBERUZBVUxUX0NPTE9SUyA9IFtcbiAge1xuICAgIGtleTogJ2R1c3QnLFxuICAgIGNvbG9yOiAnI0Y1MjIyRCcsXG4gIH0sXG4gIHtcbiAgICBrZXk6ICd2b2xjYW5vJyxcbiAgICBjb2xvcjogJyNGQTU0MUMnLFxuICB9LFxuICB7XG4gICAga2V5OiAnc3Vuc2V0JyxcbiAgICBjb2xvcjogJyNGQUFEMTQnLFxuICB9LFxuICB7XG4gICAga2V5OiAnY3lhbicsXG4gICAgY29sb3I6ICcjMTNDMkMyJyxcbiAgfSxcbiAge1xuICAgIGtleTogJ2dyZWVuJyxcbiAgICBjb2xvcjogJyM1MkM0MUEnLFxuICB9LFxuICB7XG4gICAga2V5OiAnZGF5YnJlYWsnLFxuICAgIGNvbG9yOiAnIzE4OTBmZicsXG4gIH0sXG4gIHtcbiAgICBrZXk6ICdnZWVrYmx1ZScsXG4gICAgY29sb3I6ICcjMkY1NEVCJyxcbiAgfSxcbiAge1xuICAgIGtleTogJ3B1cnBsZScsXG4gICAgY29sb3I6ICcjNzIyRUQxJyxcbiAgfSxcbiAge1xuICAgIGtleTogJ2JsYWNrJyxcbiAgICBjb2xvcjogJyMwMDE1MjknLFxuICB9LFxuXTtcbmNvbnN0IERFRkFVTFRfVkFSUzogeyBba2V5OiBzdHJpbmddOiBOelNhZmVBbnkgfSA9IHtcbiAgJ3ByaW1hcnktY29sb3InOiB7IGxhYmVsOiAn5Li76aKc6ImyJywgdHlwZTogJ2NvbG9yJywgZGVmYXVsdDogJyMxODkwZmYnIH0sXG4gICdhbGFpbi1kZWZhdWx0LWhlYWRlci1oZyc6IHtcbiAgICBsYWJlbDogJ+mrmCcsXG4gICAgdHlwZTogJ3B4JyxcbiAgICBkZWZhdWx0OiAnNjRweCcsXG4gICAgbWF4OiAzMDAsXG4gICAgbWluOiAyNCxcbiAgfSxcbiAgJ2FsYWluLWRlZmF1bHQtaGVhZGVyLWJnJzoge1xuICAgIGxhYmVsOiAn6IOM5pmv6ImyJyxcbiAgICB0eXBlOiAnY29sb3InLFxuICAgIGRlZmF1bHQ6ICdAcHJpbWFyeS1jb2xvcicsXG4gICAgdGlwOiAn6buY6K6k5ZCM5Li76Imy57O7JyxcbiAgfSxcbiAgJ2FsYWluLWRlZmF1bHQtaGVhZGVyLXBhZGRpbmcnOiB7XG4gICAgbGFiZWw6ICfpobbpg6jlt6blj7PlhoXovrnot50nLFxuICAgIHR5cGU6ICdweCcsXG4gICAgZGVmYXVsdDogJzE2cHgnLFxuICB9LFxuICAvLyDkvqfovrnmoI9cbiAgJ2FsYWluLWRlZmF1bHQtYXNpZGUtd2QnOiB7IGxhYmVsOiAn5a695bqmJywgdHlwZTogJ3B4JywgZGVmYXVsdDogJzIwMHB4JyB9LFxuICAnYWxhaW4tZGVmYXVsdC1hc2lkZS1iZyc6IHtcbiAgICBsYWJlbDogJ+iDjOaZrycsXG4gICAgdHlwZTogJ2NvbG9yJyxcbiAgICBkZWZhdWx0OiAnI2ZmZmZmZicsXG4gIH0sXG4gICdhbGFpbi1kZWZhdWx0LWFzaWRlLWNvbGxhcHNlZC13ZCc6IHtcbiAgICBsYWJlbDogJ+aUtue8qeWuveW6picsXG4gICAgdHlwZTogJ3B4JyxcbiAgICBkZWZhdWx0OiAnNjRweCcsXG4gIH0sXG4gICdhbGFpbi1kZWZhdWx0LWFzaWRlLW5hdi1wYWRkaW5nLXRvcC1ib3R0b20nOiB7XG4gICAgbGFiZWw6ICfpobnkuIrkuIvlhoXovrnot50nLFxuICAgIHR5cGU6ICdweCcsXG4gICAgZGVmYXVsdDogJzhweCcsXG4gICAgc3RlcDogOCxcbiAgfSxcbiAgLy8g5Li76I+c5Y2VXG4gICdhbGFpbi1kZWZhdWx0LWFzaWRlLW5hdi1mcyc6IHtcbiAgICBsYWJlbDogJ+iPnOWNleWtl+WPtycsXG4gICAgdHlwZTogJ3B4JyxcbiAgICBkZWZhdWx0OiAnMTRweCcsXG4gICAgbWluOiAxNCxcbiAgICBtYXg6IDMwLFxuICB9LFxuICAnYWxhaW4tZGVmYXVsdC1hc2lkZS1jb2xsYXBzZWQtbmF2LWZzJzoge1xuICAgIGxhYmVsOiAn5pS257yp6I+c5Y2V5a2X5Y+3JyxcbiAgICB0eXBlOiAncHgnLFxuICAgIGRlZmF1bHQ6ICcyNHB4JyxcbiAgICBtaW46IDI0LFxuICAgIG1heDogMzIsXG4gIH0sXG4gICdhbGFpbi1kZWZhdWx0LWFzaWRlLW5hdi1pdGVtLWhlaWdodCc6IHtcbiAgICBsYWJlbDogJ+iPnOWNlemhuemrmOW6picsXG4gICAgdHlwZTogJ3B4JyxcbiAgICBkZWZhdWx0OiAnMzhweCcsXG4gICAgbWluOiAyNCxcbiAgICBtYXg6IDY0LFxuICB9LFxuICAnYWxhaW4tZGVmYXVsdC1hc2lkZS1uYXYtdGV4dC1jb2xvcic6IHtcbiAgICBsYWJlbDogJ+iPnOWNleaWh+acrOminOiJsicsXG4gICAgdHlwZTogJ2NvbG9yJyxcbiAgICBkZWZhdWx0OiAncmdiYSgwLCAwLCAwLCAwLjY1KScsXG4gICAgcmdiYTogdHJ1ZSxcbiAgfSxcbiAgJ2FsYWluLWRlZmF1bHQtYXNpZGUtbmF2LXRleHQtaG92ZXItY29sb3InOiB7XG4gICAgbGFiZWw6ICfoj5zljZXmlofmnKzmgqzlgZzpopzoibInLFxuICAgIHR5cGU6ICdjb2xvcicsXG4gICAgZGVmYXVsdDogJ0BwcmltYXJ5LWNvbG9yJyxcbiAgICB0aXA6ICfpu5jorqTlkIzkuLvoibLns7snLFxuICB9LFxuICAnYWxhaW4tZGVmYXVsdC1hc2lkZS1uYXYtZ3JvdXAtdGV4dC1jb2xvcic6IHtcbiAgICBsYWJlbDogJ+iPnOWNleWIhue7hOaWh+acrOminOiJsicsXG4gICAgdHlwZTogJ2NvbG9yJyxcbiAgICBkZWZhdWx0OiAncmdiYSgwLCAwLCAwLCAwLjQzKScsXG4gICAgcmdiYTogdHJ1ZSxcbiAgfSxcbiAgJ2FsYWluLWRlZmF1bHQtYXNpZGUtbmF2LXNlbGVjdGVkLXRleHQtY29sb3InOiB7XG4gICAgbGFiZWw6ICfoj5zljZXmv4DmtLvml7bmlofmnKzpopzoibInLFxuICAgIHR5cGU6ICdjb2xvcicsXG4gICAgZGVmYXVsdDogJ0BwcmltYXJ5LWNvbG9yJyxcbiAgICB0aXA6ICfpu5jorqTlkIzkuLvoibLns7snLFxuICB9LFxuICAnYWxhaW4tZGVmYXVsdC1hc2lkZS1uYXYtc2VsZWN0ZWQtYmcnOiB7XG4gICAgbGFiZWw6ICfoj5zljZXmv4DmtLvml7bog4zmma/popzoibInLFxuICAgIHR5cGU6ICdjb2xvcicsXG4gICAgZGVmYXVsdDogJyNmY2ZjZmMnLFxuICB9LFxuICAvLyDlhoXlrrlcbiAgJ2FsYWluLWRlZmF1bHQtY29udGVudC1iZyc6IHtcbiAgICBsYWJlbDogJ+iDjOaZr+iJsicsXG4gICAgdHlwZTogJ2NvbG9yJyxcbiAgICBkZWZhdWx0OiAnI2Y1ZjdmYScsXG4gIH0sXG4gICdhbGFpbi1kZWZhdWx0LWNvbnRlbnQtaGVhZGluZy1iZyc6IHtcbiAgICBsYWJlbDogJ+agh+mimOiDjOaZr+iJsicsXG4gICAgdHlwZTogJ2NvbG9yJyxcbiAgICBkZWZhdWx0OiAnI2ZhZmJmYycsXG4gIH0sXG4gICdhbGFpbi1kZWZhdWx0LWNvbnRlbnQtaGVhZGluZy1ib3JkZXInOiB7XG4gICAgbGFiZWw6ICfmoIfpopjlupXpg6jovrnmoYboibInLFxuICAgIHR5cGU6ICdjb2xvcicsXG4gICAgZGVmYXVsdDogJyNlZmUzZTUnLFxuICB9LFxuICAnYWxhaW4tZGVmYXVsdC1jb250ZW50LXBhZGRpbmcnOiB7XG4gICAgbGFiZWw6ICflhoXovrnot50nLFxuICAgIHR5cGU6ICdweCcsXG4gICAgZGVmYXVsdDogJzI0cHgnLFxuICAgIG1pbjogMCxcbiAgICBtYXg6IDEyOCxcbiAgICBzdGVwOiA4LFxuICB9LFxuICAvLyB6b3Jyb+e7hOS7tuS/ruato1xuICAnZm9ybS1zdGF0ZS12aXN1YWwtZmVlZGJhY2stZW5hYmxlZCc6IHtcbiAgICBsYWJlbDogJ+W8gOWQr+ihqOWNleWFg+e0oOeahOinhuinieWPjemmiCcsXG4gICAgdHlwZTogJ3N3aXRjaCcsXG4gICAgZGVmYXVsdDogdHJ1ZSxcbiAgfSxcbiAgJ3ByZXNlcnZlLXdoaXRlLXNwYWNlcy1lbmFibGVkJzoge1xuICAgIGxhYmVsOiAn5byA5ZCvIHByZXNlcnZlV2hpdGVzcGFjZXMnLFxuICAgIHR5cGU6ICdzd2l0Y2gnLFxuICAgIGRlZmF1bHQ6IHRydWUsXG4gIH0sXG4gICduei10YWJsZS1pbWctcmFkaXVzJzoge1xuICAgIGxhYmVsOiAn6KGo5qC85Lit77ya5Zu+54mH5ZyG6KeSJyxcbiAgICB0eXBlOiAncHgnLFxuICAgIGRlZmF1bHQ6ICc0cHgnLFxuICAgIG1pbjogMCxcbiAgICBtYXg6IDEyOCxcbiAgfSxcbiAgJ256LXRhYmxlLWltZy1tYXJnaW4tcmlnaHQnOiB7XG4gICAgbGFiZWw6ICfooajmoLzkuK3vvJrlm77niYflj7PlpJbovrnot50nLFxuICAgIHR5cGU6ICdweCcsXG4gICAgZGVmYXVsdDogJzRweCcsXG4gICAgbWluOiAwLFxuICAgIG1heDogMTI4LFxuICB9LFxuICAnbnotdGFibGUtaW1nLW1heC13aWR0aCc6IHtcbiAgICBsYWJlbDogJ+ihqOagvOS4re+8muWbvueJh+acgOWkp+WuveW6picsXG4gICAgdHlwZTogJ3B4JyxcbiAgICBkZWZhdWx0OiAnMzJweCcsXG4gICAgbWluOiA4LFxuICAgIG1heDogMTI4LFxuICB9LFxuICAnbnotdGFibGUtaW1nLW1heC1oZWlnaHQnOiB7XG4gICAgbGFiZWw6ICfooajmoLzkuK3vvJrlm77niYfmnIDlpKfpq5jluqYnLFxuICAgIHR5cGU6ICdweCcsXG4gICAgZGVmYXVsdDogJzMycHgnLFxuICAgIG1pbjogOCxcbiAgICBtYXg6IDEyOCxcbiAgfSxcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NldHRpbmctZHJhd2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NldHRpbmctZHJhd2VyLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3Muc2V0dGluZy1kcmF3ZXJdJzogJ3RydWUnLFxuICB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgU2V0dGluZ0RyYXdlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBhdXRvQXBwbHlDb2xvciA9IHRydWU7XG4gIEBJbnB1dCgpIGRldlRpcHMgPSBgV2hlbiB0aGUgY29sb3IgY2FuJ3QgYmUgc3dpdGNoZWQsIHlvdSBuZWVkIHRvIHJ1biBpdCBvbmNlOiBucG0gcnVuIGNvbG9yLWxlc3NgO1xuXG4gIHByaXZhdGUgbG9hZGVkTGVzcyA9IGZhbHNlO1xuICBpc0RldiA9IGlzRGV2TW9kZSgpO1xuICBjb2xsYXBzZSA9IGZhbHNlO1xuICBnZXQgbGF5b3V0KCk6IExheW91dCB7XG4gICAgcmV0dXJuIHRoaXMuc2V0dGluZ1Nydi5sYXlvdXQ7XG4gIH1cbiAgZGF0YTogYW55ID0ge307XG4gIGNvbG9yOiBzdHJpbmc7XG4gIGNvbG9ycyA9IERFRkFVTFRfQ09MT1JTO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIG1zZzogTnpNZXNzYWdlU2VydmljZSxcbiAgICBwcml2YXRlIHNldHRpbmdTcnY6IFNldHRpbmdzU2VydmljZSxcbiAgICBwcml2YXRlIGxhenk6IExhenlTZXJ2aWNlLFxuICAgIHByaXZhdGUgem9uZTogTmdab25lLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnksXG4gICkge1xuICAgIHRoaXMuY29sb3IgPSB0aGlzLmNhY2hlZERhdGFbJ0BwcmltYXJ5LWNvbG9yJ10gfHwgdGhpcy5ERUZBVUxUX1BSSU1BUlk7XG4gICAgdGhpcy5yZXNldERhdGEodGhpcy5jYWNoZWREYXRhLCBmYWxzZSk7XG4gIH1cblxuICBwcml2YXRlIGdldCBjYWNoZWREYXRhKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB0aGlzLnNldHRpbmdTcnYubGF5b3V0W0FMQUlOREVGQVVMVFZBUl0gfHwge307XG4gIH1cblxuICBwcml2YXRlIGdldCBERUZBVUxUX1BSSU1BUlkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gREVGQVVMVF9WQVJTWydwcmltYXJ5LWNvbG9yJ10uZGVmYXVsdDtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmF1dG9BcHBseUNvbG9yICYmIHRoaXMuY29sb3IgIT09IHRoaXMuREVGQVVMVF9QUklNQVJZKSB7XG4gICAgICB0aGlzLmNoYW5nZUNvbG9yKHRoaXMuY29sb3IpO1xuICAgICAgdGhpcy5ydW5MZXNzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBsb2FkTGVzcygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAodGhpcy5sb2FkZWRMZXNzKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmxhenlcbiAgICAgIC5sb2FkU3R5bGUoJy4vYXNzZXRzL2NvbG9yLmxlc3MnLCAnc3R5bGVzaGVldC9sZXNzJylcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgY29uc3QgbGVzc0NvbmZpZ05vZGUgPSB0aGlzLmRvYy5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgbGVzc0NvbmZpZ05vZGUuaW5uZXJIVE1MID0gYFxuICAgICAgICAgIHdpbmRvdy5sZXNzID0ge1xuICAgICAgICAgICAgYXN5bmM6IHRydWUsXG4gICAgICAgICAgICBlbnY6ICdwcm9kdWN0aW9uJyxcbiAgICAgICAgICAgIGphdmFzY3JpcHRFbmFibGVkOiB0cnVlXG4gICAgICAgICAgfTtcbiAgICAgICAgYDtcbiAgICAgICAgdGhpcy5kb2MuYm9keS5hcHBlbmRDaGlsZChsZXNzQ29uZmlnTm9kZSk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5sYXp5LmxvYWRTY3JpcHQoJ2h0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vb3MvbGliL2xlc3MuanMvMy44LjEvbGVzcy5taW4uanMnKSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5sb2FkZWRMZXNzID0gdHJ1ZTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5WYXJzKCk6IGFueSB7XG4gICAgY29uc3QgeyBkYXRhLCBjb2xvciwgdmFsaWRLZXlzIH0gPSB0aGlzO1xuICAgIGNvbnN0IHZhcnM6IGFueSA9IHtcbiAgICAgIFtgQHByaW1hcnktY29sb3JgXTogY29sb3IsXG4gICAgfTtcbiAgICB2YWxpZEtleXMuZmlsdGVyKGtleSA9PiBrZXkgIT09ICdwcmltYXJ5LWNvbG9yJykuZm9yRWFjaChrZXkgPT4gKHZhcnNbYEAke2tleX1gXSA9IGRhdGFba2V5XS52YWx1ZSkpO1xuICAgIHRoaXMuc2V0TGF5b3V0KEFMQUlOREVGQVVMVFZBUiwgdmFycyk7XG4gICAgcmV0dXJuIHZhcnM7XG4gIH1cblxuICBwcml2YXRlIHJ1bkxlc3MoKTogdm9pZCB7XG4gICAgY29uc3QgeyB6b25lLCBtc2csIGNkciB9ID0gdGhpcztcbiAgICBjb25zdCBtc2dJZCA9IG1zZy5sb2FkaW5nKGDmraPlnKjnvJbor5HkuLvpopjvvIFgLCB7IG56RHVyYXRpb246IDAgfSkubWVzc2FnZUlkO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIHRoaXMubG9hZExlc3MoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAod2luZG93IGFzIGFueSkubGVzcy5tb2RpZnlWYXJzKHRoaXMuZ2VuVmFycygpKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIG1zZy5zdWNjZXNzKCfmiJDlip8nKTtcbiAgICAgICAgICAgIG1zZy5yZW1vdmUobXNnSWQpO1xuICAgICAgICAgICAgem9uZS5ydW4oKCkgPT4gY2RyLmRldGVjdENoYW5nZXMoKSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSwgMjAwKTtcbiAgfVxuXG4gIHRvZ2dsZSgpOiB2b2lkIHtcbiAgICB0aGlzLmNvbGxhcHNlID0gIXRoaXMuY29sbGFwc2U7XG4gIH1cblxuICBjaGFuZ2VDb2xvcihjb2xvcjogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIE9iamVjdC5rZXlzKERFRkFVTFRfVkFSUylcbiAgICAgIC5maWx0ZXIoa2V5ID0+IERFRkFVTFRfVkFSU1trZXldLmRlZmF1bHQgPT09ICdAcHJpbWFyeS1jb2xvcicpXG4gICAgICAuZm9yRWFjaChrZXkgPT4gZGVsZXRlIHRoaXMuY2FjaGVkRGF0YVtgQCR7a2V5fWBdKTtcbiAgICB0aGlzLnJlc2V0RGF0YSh0aGlzLmNhY2hlZERhdGEsIGZhbHNlKTtcbiAgfVxuXG4gIHNldExheW91dChuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnNldHRpbmdTcnYuc2V0TGF5b3V0KG5hbWUsIHZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVzZXREYXRhKG5vd0RhdGE/OiB7IFtrZXk6IHN0cmluZ106IE56U2FmZUFueSB9LCBydW46IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG4gICAgbm93RGF0YSA9IG5vd0RhdGEgfHwge307XG4gICAgY29uc3QgZGF0YSA9IGRlZXBDb3B5KERFRkFVTFRfVkFSUyk7XG4gICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBub3dEYXRhIVtgQCR7a2V5fWBdIHx8IGRhdGFba2V5XS5kZWZhdWx0IHx8ICcnO1xuICAgICAgZGF0YVtrZXldLnZhbHVlID0gdmFsdWUgPT09IGBAcHJpbWFyeS1jb2xvcmAgPyB0aGlzLmNvbG9yIDogdmFsdWU7XG4gICAgfSk7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICBpZiAocnVuKSB7XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB0aGlzLnJ1bkxlc3MoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldCB2YWxpZEtleXMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmRhdGEpLmZpbHRlcihrZXkgPT4gdGhpcy5kYXRhW2tleV0udmFsdWUgIT09IHRoaXMuZGF0YVtrZXldLmRlZmF1bHQpO1xuICB9XG5cbiAgYXBwbHkoKTogdm9pZCB7XG4gICAgdGhpcy5ydW5MZXNzKCk7XG4gIH1cblxuICByZXNldCgpOiB2b2lkIHtcbiAgICB0aGlzLmNvbG9yID0gdGhpcy5ERUZBVUxUX1BSSU1BUlk7XG4gICAgdGhpcy5zZXR0aW5nU3J2LnNldExheW91dChBTEFJTkRFRkFVTFRWQVIsIHt9KTtcbiAgICB0aGlzLnJlc2V0RGF0YSh7fSk7XG4gIH1cblxuICBjb3B5VmFyKCk6IHZvaWQge1xuICAgIGNvbnN0IHZhcnMgPSB0aGlzLmdlblZhcnMoKTtcbiAgICBjb25zdCBjb3B5Q29udGVudCA9IE9iamVjdC5rZXlzKHZhcnMpXG4gICAgICAubWFwKGtleSA9PiBgJHtrZXl9OiAke3ZhcnNba2V5XX07YClcbiAgICAgIC5qb2luKCdcXG4nKTtcbiAgICBjb3B5KGNvcHlDb250ZW50KTtcbiAgICB0aGlzLm1zZy5zdWNjZXNzKCdDb3B5IHN1Y2Nlc3MnKTtcbiAgfVxufVxuIl19