/**
 * @fileoverview added by tsickle
 * Generated from: setting-drawer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, NgZone } from '@angular/core';
import { SettingsService } from '@delon/theme';
import { copy, deepCopy, LazyService } from '@delon/util';
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
        this.loadedLess = false;
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
     * @private
     * @return {?}
     */
    loadLess() {
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
                template: "<nz-drawer [nzVisible]=\"collapse\" [nzWidth]=\"500\" (nzOnClose)=\"toggle()\">\n  <div class=\"setting-drawer__content\">\n    <div class=\"setting-drawer__body setting-drawer__theme\">\n      <h3 class=\"setting-drawer__title\">\n        \u4E3B\u9898\u8272\n        <i nz-tooltip nzTooltipTitle=\"When it does not take effect, you need to run it once: npm run color-less\" nz-icon nzType=\"question-circle\"></i>\n      </h3>\n      <span\n        *ngFor=\"let c of colors\"\n        [style]=\"{ 'background-color': c.color }\"\n        (click)=\"changeColor(c.color)\"\n        nz-tooltip\n        [nzTooltipTitle]=\"c.key\"\n        class=\"setting-drawer__theme-tag\"\n        ><i *ngIf=\"color === c.color\" nz-icon nzType=\"check\"></i\n      ></span>\n    </div>\n    <nz-divider></nz-divider>\n    <div class=\"setting-drawer__body\">\n      <h3 class=\"setting-drawer__title\">\u8BBE\u7F6E</h3>\n      <nz-tabset>\n        <nz-tab nzTitle=\"\u9876\u90E8\">\n          <div class=\"setting-drawer__body\">\n            <setting-drawer-item [data]=\"data['alain-default-header-hg']\"></setting-drawer-item>\n            <setting-drawer-item [data]=\"data['alain-default-header-bg']\"></setting-drawer-item>\n            <setting-drawer-item [data]=\"data['alain-default-header-padding']\"></setting-drawer-item>\n          </div>\n        </nz-tab>\n        <nz-tab nzTitle=\"\u4FA7\u8FB9\u680F\">\n          <setting-drawer-item [data]=\"data['alain-default-aside-wd']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['alain-default-aside-bg']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['alain-default-aside-collapsed-wd']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['alain-default-aside-nav-padding-top-bottom']\"></setting-drawer-item>\n        </nz-tab>\n        <nz-tab nzTitle=\"\u5185\u5BB9\">\n          <setting-drawer-item [data]=\"data['alain-default-content-bg']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['alain-default-content-heading-bg']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['alain-default-content-heading-border']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['alain-default-content-padding']\"></setting-drawer-item>\n        </nz-tab>\n        <nz-tab nzTitle=\"\u5176\u5B83\">\n          <setting-drawer-item [data]=\"data['form-state-visual-feedback-enabled']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['preserve-white-spaces-enabled']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['nz-table-img-radius']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['nz-table-img-margin-right']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['nz-table-img-max-width']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['nz-table-img-max-height']\"></setting-drawer-item>\n        </nz-tab>\n      </nz-tabset>\n    </div>\n    <nz-divider></nz-divider>\n    <div class=\"setting-drawer__body\">\n      <div class=\"setting-drawer__body-item\">\n        \u56FA\u5B9A\u5934\u548C\u4FA7\u8FB9\u680F\n        <nz-switch nzSize=\"small\" [(ngModel)]=\"layout.fixed\" (ngModelChange)=\"setLayout('fixed', layout.fixed)\"></nz-switch>\n      </div>\n      <div class=\"setting-drawer__body-item\">\n        \u8272\u5F31\u6A21\u5F0F\n        <nz-switch nzSize=\"small\" [(ngModel)]=\"layout.colorWeak\" (ngModelChange)=\"setLayout('colorWeak', layout.colorWeak)\"></nz-switch>\n      </div>\n    </div>\n    <nz-divider></nz-divider>\n    <button (click)=\"apply()\" type=\"button\" nz-button nzType=\"primary\">\u9884\u89C8</button>\n    <button (click)=\"reset()\" type=\"button\" nz-button>\u91CD\u7F6E</button>\n    <button (click)=\"copyVar()\" type=\"button\" nz-button>\u62F7\u8D1D</button>\n    <nz-alert\n      class=\"mt-md\"\n      nzType=\"warning\"\n      nzMessage=\"\u914D\u7F6E\u680F\u53EA\u5728\u5F00\u53D1\u73AF\u5883\u7528\u4E8E\u9884\u89C8\uFF0C\u751F\u4EA7\u73AF\u5883\u4E0D\u4F1A\u5C55\u73B0\uFF0C\u8BF7\u62F7\u8D1D\u540E\u624B\u52A8\u4FEE\u6539\u53C2\u6570\u914D\u7F6E\u6587\u4EF6 src/styles/theme.less\"\n    ></nz-alert>\n  </div>\n</nz-drawer>\n<div class=\"setting-drawer__handle\" [ngClass]=\"{ 'setting-drawer__handle-opened': collapse }\" (click)=\"toggle()\">\n  <i nz-icon [nzType]=\"!collapse ? 'setting' : 'close'\" class=\"setting-drawer__handle-icon\"></i>\n</div>\n",
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    SettingDrawerComponent.prototype.loadedLess;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZy1kcmF3ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lL3NldHRpbmctZHJhd2VyLyIsInNvdXJjZXMiOlsic2V0dGluZy1kcmF3ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RyxPQUFPLEVBQVUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUUxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7TUFFbkQsZUFBZSxHQUFHLG9CQUFvQjs7TUFDdEMsY0FBYyxHQUFHO0lBQ3JCO1FBQ0UsR0FBRyxFQUFFLE1BQU07UUFDWCxLQUFLLEVBQUUsU0FBUztLQUNqQjtJQUNEO1FBQ0UsR0FBRyxFQUFFLFNBQVM7UUFDZCxLQUFLLEVBQUUsU0FBUztLQUNqQjtJQUNEO1FBQ0UsR0FBRyxFQUFFLFFBQVE7UUFDYixLQUFLLEVBQUUsU0FBUztLQUNqQjtJQUNEO1FBQ0UsR0FBRyxFQUFFLE1BQU07UUFDWCxLQUFLLEVBQUUsU0FBUztLQUNqQjtJQUNEO1FBQ0UsR0FBRyxFQUFFLE9BQU87UUFDWixLQUFLLEVBQUUsU0FBUztLQUNqQjtJQUNEO1FBQ0UsR0FBRyxFQUFFLFVBQVU7UUFDZixLQUFLLEVBQUUsU0FBUztLQUNqQjtJQUNEO1FBQ0UsR0FBRyxFQUFFLFVBQVU7UUFDZixLQUFLLEVBQUUsU0FBUztLQUNqQjtJQUNEO1FBQ0UsR0FBRyxFQUFFLFFBQVE7UUFDYixLQUFLLEVBQUUsU0FBUztL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O0lBSWpCLHNDQUFlOztJQUNmLHVDQUFjOztJQUNkLHdDQUF3Qjs7Ozs7SUFHdEIscUNBQThCOzs7OztJQUM5QixxQ0FBNkI7Ozs7O0lBQzdCLDRDQUFtQzs7Ozs7SUFDbkMsc0NBQXlCOzs7OztJQUN6QixzQ0FBb0I7Ozs7O0lBQ3BCLHFDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBJbmplY3QsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGF5b3V0LCBTZXR0aW5nc1NlcnZpY2UgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgY29weSwgZGVlcENvcHksIExhenlTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IE56TWVzc2FnZVNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL21lc3NhZ2UnO1xuXG5jb25zdCBBTEFJTkRFRkFVTFRWQVIgPSAnYWxhaW4tZGVmYXVsdC12YXJzJztcbmNvbnN0IERFRkFVTFRfQ09MT1JTID0gW1xuICB7XG4gICAga2V5OiAnZHVzdCcsXG4gICAgY29sb3I6ICcjRjUyMjJEJyxcbiAgfSxcbiAge1xuICAgIGtleTogJ3ZvbGNhbm8nLFxuICAgIGNvbG9yOiAnI0ZBNTQxQycsXG4gIH0sXG4gIHtcbiAgICBrZXk6ICdzdW5zZXQnLFxuICAgIGNvbG9yOiAnI0ZBQUQxNCcsXG4gIH0sXG4gIHtcbiAgICBrZXk6ICdjeWFuJyxcbiAgICBjb2xvcjogJyMxM0MyQzInLFxuICB9LFxuICB7XG4gICAga2V5OiAnZ3JlZW4nLFxuICAgIGNvbG9yOiAnIzUyQzQxQScsXG4gIH0sXG4gIHtcbiAgICBrZXk6ICdkYXlicmVhaycsXG4gICAgY29sb3I6ICcjMTg5MGZmJyxcbiAgfSxcbiAge1xuICAgIGtleTogJ2dlZWtibHVlJyxcbiAgICBjb2xvcjogJyMyRjU0RUInLFxuICB9LFxuICB7XG4gICAga2V5OiAncHVycGxlJyxcbiAgICBjb2xvcjogJyM3MjJFRDEnLFxuICB9LFxuICB7XG4gICAga2V5OiAnYmxhY2snLFxuICAgIGNvbG9yOiAnIzAwMTUyOScsXG4gIH0sXG5dO1xuY29uc3QgREVGQVVMVF9WQVJTOiB7IFtrZXk6IHN0cmluZ106IE56U2FmZUFueSB9ID0ge1xuICAncHJpbWFyeS1jb2xvcic6IHsgbGFiZWw6ICfkuLvpopzoibInLCB0eXBlOiAnY29sb3InLCBkZWZhdWx0OiAnIzE4OTBmZicgfSxcbiAgJ2FsYWluLWRlZmF1bHQtaGVhZGVyLWhnJzoge1xuICAgIGxhYmVsOiAn6auYJyxcbiAgICB0eXBlOiAncHgnLFxuICAgIGRlZmF1bHQ6ICc2NHB4JyxcbiAgICBtYXg6IDMwMCxcbiAgICBtaW46IDI0LFxuICB9LFxuICAnYWxhaW4tZGVmYXVsdC1oZWFkZXItYmcnOiB7XG4gICAgbGFiZWw6ICfog4zmma/oibInLFxuICAgIHR5cGU6ICdjb2xvcicsXG4gICAgZGVmYXVsdDogJ0BwcmltYXJ5LWNvbG9yJyxcbiAgICB0aXA6ICfpu5jorqTlkIzkuLvoibLns7snLFxuICB9LFxuICAnYWxhaW4tZGVmYXVsdC1oZWFkZXItcGFkZGluZyc6IHtcbiAgICBsYWJlbDogJ+mhtumDqOW3puWPs+WGhei+uei3nScsXG4gICAgdHlwZTogJ3B4JyxcbiAgICBkZWZhdWx0OiAnMTZweCcsXG4gIH0sXG4gIC8vIOS+p+i+ueagj1xuICAnYWxhaW4tZGVmYXVsdC1hc2lkZS13ZCc6IHsgbGFiZWw6ICflrr3luqYnLCB0eXBlOiAncHgnLCBkZWZhdWx0OiAnMjAwcHgnIH0sXG4gICdhbGFpbi1kZWZhdWx0LWFzaWRlLWJnJzoge1xuICAgIGxhYmVsOiAn6IOM5pmvJyxcbiAgICB0eXBlOiAnY29sb3InLFxuICAgIGRlZmF1bHQ6ICcjZmZmZmZmJyxcbiAgfSxcbiAgJ2FsYWluLWRlZmF1bHQtYXNpZGUtY29sbGFwc2VkLXdkJzoge1xuICAgIGxhYmVsOiAn5pS257yp5a695bqmJyxcbiAgICB0eXBlOiAncHgnLFxuICAgIGRlZmF1bHQ6ICc2NHB4JyxcbiAgfSxcbiAgJ2FsYWluLWRlZmF1bHQtYXNpZGUtbmF2LXBhZGRpbmctdG9wLWJvdHRvbSc6IHtcbiAgICBsYWJlbDogJ+mhueS4iuS4i+WGhei+uei3nScsXG4gICAgdHlwZTogJ3B4JyxcbiAgICBkZWZhdWx0OiAnOHB4JyxcbiAgICBzdGVwOiA4LFxuICB9LFxuICAvLyDkuLvoj5zljZVcbiAgJ2FsYWluLWRlZmF1bHQtYXNpZGUtbmF2LWZzJzoge1xuICAgIGxhYmVsOiAn6I+c5Y2V5a2X5Y+3JyxcbiAgICB0eXBlOiAncHgnLFxuICAgIGRlZmF1bHQ6ICcxNHB4JyxcbiAgICBtaW46IDE0LFxuICAgIG1heDogMzAsXG4gIH0sXG4gICdhbGFpbi1kZWZhdWx0LWFzaWRlLWNvbGxhcHNlZC1uYXYtZnMnOiB7XG4gICAgbGFiZWw6ICfmlLbnvKnoj5zljZXlrZflj7cnLFxuICAgIHR5cGU6ICdweCcsXG4gICAgZGVmYXVsdDogJzI0cHgnLFxuICAgIG1pbjogMjQsXG4gICAgbWF4OiAzMixcbiAgfSxcbiAgJ2FsYWluLWRlZmF1bHQtYXNpZGUtbmF2LWl0ZW0taGVpZ2h0Jzoge1xuICAgIGxhYmVsOiAn6I+c5Y2V6aG56auY5bqmJyxcbiAgICB0eXBlOiAncHgnLFxuICAgIGRlZmF1bHQ6ICczOHB4JyxcbiAgICBtaW46IDI0LFxuICAgIG1heDogNjQsXG4gIH0sXG4gICdhbGFpbi1kZWZhdWx0LWFzaWRlLW5hdi10ZXh0LWNvbG9yJzoge1xuICAgIGxhYmVsOiAn6I+c5Y2V5paH5pys6aKc6ImyJyxcbiAgICB0eXBlOiAnY29sb3InLFxuICAgIGRlZmF1bHQ6ICdyZ2JhKDAsIDAsIDAsIDAuNjUpJyxcbiAgICByZ2JhOiB0cnVlLFxuICB9LFxuICAnYWxhaW4tZGVmYXVsdC1hc2lkZS1uYXYtdGV4dC1ob3Zlci1jb2xvcic6IHtcbiAgICBsYWJlbDogJ+iPnOWNleaWh+acrOaCrOWBnOminOiJsicsXG4gICAgdHlwZTogJ2NvbG9yJyxcbiAgICBkZWZhdWx0OiAnQHByaW1hcnktY29sb3InLFxuICAgIHRpcDogJ+m7mOiupOWQjOS4u+iJsuezuycsXG4gIH0sXG4gICdhbGFpbi1kZWZhdWx0LWFzaWRlLW5hdi1ncm91cC10ZXh0LWNvbG9yJzoge1xuICAgIGxhYmVsOiAn6I+c5Y2V5YiG57uE5paH5pys6aKc6ImyJyxcbiAgICB0eXBlOiAnY29sb3InLFxuICAgIGRlZmF1bHQ6ICdyZ2JhKDAsIDAsIDAsIDAuNDMpJyxcbiAgICByZ2JhOiB0cnVlLFxuICB9LFxuICAnYWxhaW4tZGVmYXVsdC1hc2lkZS1uYXYtc2VsZWN0ZWQtdGV4dC1jb2xvcic6IHtcbiAgICBsYWJlbDogJ+iPnOWNlea/gOa0u+aXtuaWh+acrOminOiJsicsXG4gICAgdHlwZTogJ2NvbG9yJyxcbiAgICBkZWZhdWx0OiAnQHByaW1hcnktY29sb3InLFxuICAgIHRpcDogJ+m7mOiupOWQjOS4u+iJsuezuycsXG4gIH0sXG4gICdhbGFpbi1kZWZhdWx0LWFzaWRlLW5hdi1zZWxlY3RlZC1iZyc6IHtcbiAgICBsYWJlbDogJ+iPnOWNlea/gOa0u+aXtuiDjOaZr+minOiJsicsXG4gICAgdHlwZTogJ2NvbG9yJyxcbiAgICBkZWZhdWx0OiAnI2ZjZmNmYycsXG4gIH0sXG4gIC8vIOWGheWuuVxuICAnYWxhaW4tZGVmYXVsdC1jb250ZW50LWJnJzoge1xuICAgIGxhYmVsOiAn6IOM5pmv6ImyJyxcbiAgICB0eXBlOiAnY29sb3InLFxuICAgIGRlZmF1bHQ6ICcjZjVmN2ZhJyxcbiAgfSxcbiAgJ2FsYWluLWRlZmF1bHQtY29udGVudC1oZWFkaW5nLWJnJzoge1xuICAgIGxhYmVsOiAn5qCH6aKY6IOM5pmv6ImyJyxcbiAgICB0eXBlOiAnY29sb3InLFxuICAgIGRlZmF1bHQ6ICcjZmFmYmZjJyxcbiAgfSxcbiAgJ2FsYWluLWRlZmF1bHQtY29udGVudC1oZWFkaW5nLWJvcmRlcic6IHtcbiAgICBsYWJlbDogJ+agh+mimOW6lemDqOi+ueahhuiJsicsXG4gICAgdHlwZTogJ2NvbG9yJyxcbiAgICBkZWZhdWx0OiAnI2VmZTNlNScsXG4gIH0sXG4gICdhbGFpbi1kZWZhdWx0LWNvbnRlbnQtcGFkZGluZyc6IHtcbiAgICBsYWJlbDogJ+WGhei+uei3nScsXG4gICAgdHlwZTogJ3B4JyxcbiAgICBkZWZhdWx0OiAnMjRweCcsXG4gICAgbWluOiAwLFxuICAgIG1heDogMTI4LFxuICAgIHN0ZXA6IDgsXG4gIH0sXG4gIC8vIHpvcnJv57uE5Lu25L+u5q2jXG4gICdmb3JtLXN0YXRlLXZpc3VhbC1mZWVkYmFjay1lbmFibGVkJzoge1xuICAgIGxhYmVsOiAn5byA5ZCv6KGo5Y2V5YWD57Sg55qE6KeG6KeJ5Y+N6aaIJyxcbiAgICB0eXBlOiAnc3dpdGNoJyxcbiAgICBkZWZhdWx0OiB0cnVlLFxuICB9LFxuICAncHJlc2VydmUtd2hpdGUtc3BhY2VzLWVuYWJsZWQnOiB7XG4gICAgbGFiZWw6ICflvIDlkK8gcHJlc2VydmVXaGl0ZXNwYWNlcycsXG4gICAgdHlwZTogJ3N3aXRjaCcsXG4gICAgZGVmYXVsdDogdHJ1ZSxcbiAgfSxcbiAgJ256LXRhYmxlLWltZy1yYWRpdXMnOiB7XG4gICAgbGFiZWw6ICfooajmoLzkuK3vvJrlm77niYflnIbop5InLFxuICAgIHR5cGU6ICdweCcsXG4gICAgZGVmYXVsdDogJzRweCcsXG4gICAgbWluOiAwLFxuICAgIG1heDogMTI4LFxuICB9LFxuICAnbnotdGFibGUtaW1nLW1hcmdpbi1yaWdodCc6IHtcbiAgICBsYWJlbDogJ+ihqOagvOS4re+8muWbvueJh+WPs+Wklui+uei3nScsXG4gICAgdHlwZTogJ3B4JyxcbiAgICBkZWZhdWx0OiAnNHB4JyxcbiAgICBtaW46IDAsXG4gICAgbWF4OiAxMjgsXG4gIH0sXG4gICduei10YWJsZS1pbWctbWF4LXdpZHRoJzoge1xuICAgIGxhYmVsOiAn6KGo5qC85Lit77ya5Zu+54mH5pyA5aSn5a695bqmJyxcbiAgICB0eXBlOiAncHgnLFxuICAgIGRlZmF1bHQ6ICczMnB4JyxcbiAgICBtaW46IDgsXG4gICAgbWF4OiAxMjgsXG4gIH0sXG4gICduei10YWJsZS1pbWctbWF4LWhlaWdodCc6IHtcbiAgICBsYWJlbDogJ+ihqOagvOS4re+8muWbvueJh+acgOWkp+mrmOW6picsXG4gICAgdHlwZTogJ3B4JyxcbiAgICBkZWZhdWx0OiAnMzJweCcsXG4gICAgbWluOiA4LFxuICAgIG1heDogMTI4LFxuICB9LFxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2V0dGluZy1kcmF3ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vc2V0dGluZy1kcmF3ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5zZXR0aW5nLWRyYXdlcl0nOiAndHJ1ZScsXG4gIH0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBTZXR0aW5nRHJhd2VyQ29tcG9uZW50IHtcbiAgcHJpdmF0ZSBsb2FkZWRMZXNzID0gZmFsc2U7XG5cbiAgY29sbGFwc2UgPSBmYWxzZTtcbiAgZ2V0IGxheW91dCgpOiBMYXlvdXQge1xuICAgIHJldHVybiB0aGlzLnNldHRpbmdTcnYubGF5b3V0O1xuICB9XG4gIGRhdGE6IGFueSA9IHt9O1xuICBjb2xvcjogc3RyaW5nO1xuICBjb2xvcnMgPSBERUZBVUxUX0NPTE9SUztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBtc2c6IE56TWVzc2FnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBzZXR0aW5nU3J2OiBTZXR0aW5nc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBsYXp5OiBMYXp5U2VydmljZSxcbiAgICBwcml2YXRlIHpvbmU6IE5nWm9uZSxcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogYW55LFxuICApIHtcbiAgICB0aGlzLmNvbG9yID0gdGhpcy5jYWNoZWREYXRhWydAcHJpbWFyeS1jb2xvciddIHx8IHRoaXMuREVGQVVMVF9QUklNQVJZO1xuICAgIHRoaXMucmVzZXREYXRhKHRoaXMuY2FjaGVkRGF0YSwgZmFsc2UpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgY2FjaGVkRGF0YSgpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9IHtcbiAgICByZXR1cm4gdGhpcy5zZXR0aW5nU3J2LmxheW91dFtBTEFJTkRFRkFVTFRWQVJdIHx8IHt9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgREVGQVVMVF9QUklNQVJZKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIERFRkFVTFRfVkFSU1sncHJpbWFyeS1jb2xvciddLmRlZmF1bHQ7XG4gIH1cblxuICBwcml2YXRlIGxvYWRMZXNzKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICh0aGlzLmxvYWRlZExlc3MpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubGF6eVxuICAgICAgLmxvYWRTdHlsZSgnLi9hc3NldHMvY29sb3IubGVzcycsICdzdHlsZXNoZWV0L2xlc3MnKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICBjb25zdCBsZXNzQ29uZmlnTm9kZSA9IHRoaXMuZG9jLmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICBsZXNzQ29uZmlnTm9kZS5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgd2luZG93Lmxlc3MgPSB7XG4gICAgICAgICAgICBhc3luYzogdHJ1ZSxcbiAgICAgICAgICAgIGVudjogJ3Byb2R1Y3Rpb24nLFxuICAgICAgICAgICAgamF2YXNjcmlwdEVuYWJsZWQ6IHRydWVcbiAgICAgICAgICB9O1xuICAgICAgICBgO1xuICAgICAgICB0aGlzLmRvYy5ib2R5LmFwcGVuZENoaWxkKGxlc3NDb25maWdOb2RlKTtcbiAgICAgIH0pXG4gICAgICAudGhlbigoKSA9PiB0aGlzLmxhenkubG9hZFNjcmlwdCgnaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS9vcy9saWIvbGVzcy5qcy8zLjguMS9sZXNzLm1pbi5qcycpKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmxvYWRlZExlc3MgPSB0cnVlO1xuICAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdlblZhcnMoKTogYW55IHtcbiAgICBjb25zdCB7IGRhdGEsIGNvbG9yLCB2YWxpZEtleXMgfSA9IHRoaXM7XG4gICAgY29uc3QgdmFyczogYW55ID0ge1xuICAgICAgW2BAcHJpbWFyeS1jb2xvcmBdOiBjb2xvcixcbiAgICB9O1xuICAgIHZhbGlkS2V5cy5maWx0ZXIoa2V5ID0+IGtleSAhPT0gJ3ByaW1hcnktY29sb3InKS5mb3JFYWNoKGtleSA9PiAodmFyc1tgQCR7a2V5fWBdID0gZGF0YVtrZXldLnZhbHVlKSk7XG4gICAgdGhpcy5zZXRMYXlvdXQoQUxBSU5ERUZBVUxUVkFSLCB2YXJzKTtcbiAgICByZXR1cm4gdmFycztcbiAgfVxuXG4gIHByaXZhdGUgcnVuTGVzcygpOiB2b2lkIHtcbiAgICBjb25zdCB7IHpvbmUsIG1zZywgY2RyIH0gPSB0aGlzO1xuICAgIGNvbnN0IG1zZ0lkID0gbXNnLmxvYWRpbmcoYOato+WcqOe8luivkeS4u+mimO+8gWAsIHsgbnpEdXJhdGlvbjogMCB9KS5tZXNzYWdlSWQ7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB6b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgdGhpcy5sb2FkTGVzcygpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICh3aW5kb3cgYXMgYW55KS5sZXNzLm1vZGlmeVZhcnModGhpcy5nZW5WYXJzKCkpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgbXNnLnN1Y2Nlc3MoJ+aIkOWKnycpO1xuICAgICAgICAgICAgbXNnLnJlbW92ZShtc2dJZCk7XG4gICAgICAgICAgICB6b25lLnJ1bigoKSA9PiBjZHIuZGV0ZWN0Q2hhbmdlcygpKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9LCAyMDApO1xuICB9XG5cbiAgdG9nZ2xlKCk6IHZvaWQge1xuICAgIHRoaXMuY29sbGFwc2UgPSAhdGhpcy5jb2xsYXBzZTtcbiAgfVxuXG4gIGNoYW5nZUNvbG9yKGNvbG9yOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgT2JqZWN0LmtleXMoREVGQVVMVF9WQVJTKVxuICAgICAgLmZpbHRlcihrZXkgPT4gREVGQVVMVF9WQVJTW2tleV0uZGVmYXVsdCA9PT0gJ0BwcmltYXJ5LWNvbG9yJylcbiAgICAgIC5mb3JFYWNoKGtleSA9PiBkZWxldGUgdGhpcy5jYWNoZWREYXRhW2BAJHtrZXl9YF0pO1xuICAgIHRoaXMucmVzZXREYXRhKHRoaXMuY2FjaGVkRGF0YSwgZmFsc2UpO1xuICB9XG5cbiAgc2V0TGF5b3V0KG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuc2V0dGluZ1Nydi5zZXRMYXlvdXQobmFtZSwgdmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNldERhdGEobm93RGF0YT86IHsgW2tleTogc3RyaW5nXTogTnpTYWZlQW55IH0sIHJ1bjogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcbiAgICBub3dEYXRhID0gbm93RGF0YSB8fCB7fTtcbiAgICBjb25zdCBkYXRhID0gZGVlcENvcHkoREVGQVVMVF9WQVJTKTtcbiAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IG5vd0RhdGEhW2BAJHtrZXl9YF0gfHwgZGF0YVtrZXldLmRlZmF1bHQgfHwgJyc7XG4gICAgICBkYXRhW2tleV0udmFsdWUgPSB2YWx1ZSA9PT0gYEBwcmltYXJ5LWNvbG9yYCA/IHRoaXMuY29sb3IgOiB2YWx1ZTtcbiAgICB9KTtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIGlmIChydW4pIHtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIHRoaXMucnVuTGVzcygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0IHZhbGlkS2V5cygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuZGF0YSkuZmlsdGVyKGtleSA9PiB0aGlzLmRhdGFba2V5XS52YWx1ZSAhPT0gdGhpcy5kYXRhW2tleV0uZGVmYXVsdCk7XG4gIH1cblxuICBhcHBseSgpOiB2b2lkIHtcbiAgICB0aGlzLnJ1bkxlc3MoKTtcbiAgfVxuXG4gIHJlc2V0KCk6IHZvaWQge1xuICAgIHRoaXMuY29sb3IgPSB0aGlzLkRFRkFVTFRfUFJJTUFSWTtcbiAgICB0aGlzLnNldHRpbmdTcnYuc2V0TGF5b3V0KEFMQUlOREVGQVVMVFZBUiwge30pO1xuICAgIHRoaXMucmVzZXREYXRhKHt9KTtcbiAgfVxuXG4gIGNvcHlWYXIoKTogdm9pZCB7XG4gICAgY29uc3QgdmFycyA9IHRoaXMuZ2VuVmFycygpO1xuICAgIGNvbnN0IGNvcHlDb250ZW50ID0gT2JqZWN0LmtleXModmFycylcbiAgICAgIC5tYXAoa2V5ID0+IGAke2tleX06ICR7dmFyc1trZXldfTtgKVxuICAgICAgLmpvaW4oJ1xcbicpO1xuICAgIGNvcHkoY29weUNvbnRlbnQpO1xuICAgIHRoaXMubXNnLnN1Y2Nlc3MoJ0NvcHkgc3VjY2VzcycpO1xuICB9XG59XG4iXX0=