/**
 * @fileoverview added by tsickle
 * Generated from: setting-drawer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Input, isDevMode, NgZone } from '@angular/core';
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
        this.isDev = isDevMode();
        this.devTips = `When the color can't be switched, you need to run it once: npm run color-less`;
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
                template: "<nz-drawer [nzVisible]=\"collapse\" [nzWidth]=\"500\" (nzOnClose)=\"toggle()\">\n  <div class=\"setting-drawer__content\">\n    <div class=\"setting-drawer__body setting-drawer__theme\">\n      <h3 class=\"setting-drawer__title\">\u4E3B\u9898\u8272</h3>\n      <span\n        *ngFor=\"let c of colors\"\n        [style]=\"{ 'background-color': c.color }\"\n        (click)=\"changeColor(c.color)\"\n        nz-tooltip\n        [nzTooltipTitle]=\"c.key\"\n        class=\"setting-drawer__theme-tag\"\n      >\n        <i *ngIf=\"color === c.color\" nz-icon nzType=\"check\"></i>\n      </span>\n    </div>\n    <nz-divider></nz-divider>\n    <div class=\"setting-drawer__body\">\n      <h3 class=\"setting-drawer__title\">\u8BBE\u7F6E</h3>\n      <nz-tabset>\n        <nz-tab nzTitle=\"\u9876\u90E8\">\n          <div class=\"setting-drawer__body\">\n            <setting-drawer-item [data]=\"data['alain-default-header-hg']\"></setting-drawer-item>\n            <setting-drawer-item [data]=\"data['alain-default-header-bg']\"></setting-drawer-item>\n            <setting-drawer-item [data]=\"data['alain-default-header-padding']\"></setting-drawer-item>\n          </div>\n        </nz-tab>\n        <nz-tab nzTitle=\"\u4FA7\u8FB9\u680F\">\n          <setting-drawer-item [data]=\"data['alain-default-aside-wd']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['alain-default-aside-bg']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['alain-default-aside-collapsed-wd']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['alain-default-aside-nav-padding-top-bottom']\"></setting-drawer-item>\n        </nz-tab>\n        <nz-tab nzTitle=\"\u5185\u5BB9\">\n          <setting-drawer-item [data]=\"data['alain-default-content-bg']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['alain-default-content-heading-bg']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['alain-default-content-heading-border']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['alain-default-content-padding']\"></setting-drawer-item>\n        </nz-tab>\n        <nz-tab nzTitle=\"\u5176\u5B83\">\n          <setting-drawer-item [data]=\"data['form-state-visual-feedback-enabled']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['preserve-white-spaces-enabled']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['nz-table-img-radius']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['nz-table-img-margin-right']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['nz-table-img-max-width']\"></setting-drawer-item>\n          <setting-drawer-item [data]=\"data['nz-table-img-max-height']\"></setting-drawer-item>\n        </nz-tab>\n      </nz-tabset>\n    </div>\n    <nz-divider></nz-divider>\n    <div class=\"setting-drawer__body\">\n      <div class=\"setting-drawer__body-item\">\n        \u56FA\u5B9A\u5934\u548C\u4FA7\u8FB9\u680F\n        <nz-switch nzSize=\"small\" [(ngModel)]=\"layout.fixed\" (ngModelChange)=\"setLayout('fixed', layout.fixed)\"></nz-switch>\n      </div>\n      <div class=\"setting-drawer__body-item\">\n        \u8272\u5F31\u6A21\u5F0F\n        <nz-switch nzSize=\"small\" [(ngModel)]=\"layout.colorWeak\" (ngModelChange)=\"setLayout('colorWeak', layout.colorWeak)\"></nz-switch>\n      </div>\n    </div>\n    <nz-divider></nz-divider>\n    <button (click)=\"apply()\" type=\"button\" nz-button nzType=\"primary\">\u9884\u89C8</button>\n    <button (click)=\"reset()\" type=\"button\" nz-button>\u91CD\u7F6E</button>\n    <button (click)=\"copyVar()\" type=\"button\" nz-button>\u62F7\u8D1D</button>\n    <nz-alert\n      class=\"mt-md\"\n      nzType=\"warning\"\n      nzMessage=\"\u914D\u7F6E\u680F\u53EA\u5728\u5F00\u53D1\u73AF\u5883\u7528\u4E8E\u9884\u89C8\uFF0C\u751F\u4EA7\u73AF\u5883\u4E0D\u4F1A\u5C55\u73B0\uFF0C\u8BF7\u62F7\u8D1D\u540E\u624B\u52A8\u4FEE\u6539\u53C2\u6570\u914D\u7F6E\u6587\u4EF6 src/styles/theme.less\"\n    ></nz-alert>\n  </div>\n</nz-drawer>\n<div\n  class=\"setting-drawer__handle\"\n  [ngClass]=\"{ 'setting-drawer__handle-opened': collapse }\"\n  (click)=\"toggle()\"\n  nz-tooltip\n  [nzTooltipTitle]=\"isDev ? devTips : null\"\n>\n  <i nz-icon [nzType]=\"!collapse ? 'setting' : 'close'\" class=\"setting-drawer__handle-icon\"></i>\n</div>\n",
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
    devTips: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    SettingDrawerComponent.prototype.loadedLess;
    /** @type {?} */
    SettingDrawerComponent.prototype.isDev;
    /** @type {?} */
    SettingDrawerComponent.prototype.devTips;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZy1kcmF3ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lL3NldHRpbmctZHJhd2VyLyIsInNvdXJjZXMiOlsic2V0dGluZy1kcmF3ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hILE9BQU8sRUFBVSxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDdkQsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTFELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztNQUVuRCxlQUFlLEdBQUcsb0JBQW9COztNQUN0QyxjQUFjLEdBQUc7SUFDckI7UUFDRSxHQUFHLEVBQUUsTUFBTTtRQUNYLEtBQUssRUFBRSxTQUFTO0tBQ2pCO0lBQ0Q7UUFDRSxHQUFHLEVBQUUsU0FBUztRQUNkLEtBQUssRUFBRSxTQUFTO0tBQ2pCO0lBQ0Q7UUFDRSxHQUFHLEVBQUUsUUFBUTtRQUNiLEtBQUssRUFBRSxTQUFTO0tBQ2pCO0lBQ0Q7UUFDRSxHQUFHLEVBQUUsTUFBTTtRQUNYLEtBQUssRUFBRSxTQUFTO0tBQ2pCO0lBQ0Q7UUFDRSxHQUFHLEVBQUUsT0FBTztRQUNaLEtBQUssRUFBRSxTQUFTO0tBQ2pCO0lBQ0Q7UUFDRSxHQUFHLEVBQUUsVUFBVTtRQUNmLEtBQUssRUFBRSxTQUFTO0tBQ2pCO0lBQ0Q7UUFDRSxHQUFHLEVBQUUsVUFBVTtRQUNmLEtBQUssRUFBRSxTQUFTO0tBQ2pCO0lBQ0Q7UUFDRSxHQUFHLEVBQUUsUUFBUTtR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WUFDUCxXQUFXO1lBRnNELE1BQU07NENBbU8zRixNQUFNLFNBQUMsUUFBUTs7O3NCQWhCakIsS0FBSzs7Ozs7OztJQUhOLDRDQUEyQjs7SUFFM0IsdUNBQW9COztJQUNwQix5Q0FBbUc7O0lBRW5HLDBDQUFpQjs7SUFJakIsc0NBQWU7O0lBQ2YsdUNBQWM7O0lBQ2Qsd0NBQXdCOzs7OztJQUd0QixxQ0FBOEI7Ozs7O0lBQzlCLHFDQUE2Qjs7Ozs7SUFDN0IsNENBQW1DOzs7OztJQUNuQyxzQ0FBeUI7Ozs7O0lBQ3pCLHNDQUFvQjs7Ozs7SUFDcEIscUNBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEluamVjdCwgSW5wdXQsIGlzRGV2TW9kZSwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMYXlvdXQsIFNldHRpbmdzU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBjb3B5LCBkZWVwQ29weSwgTGF6eVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgTnpNZXNzYWdlU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvbWVzc2FnZSc7XG5cbmNvbnN0IEFMQUlOREVGQVVMVFZBUiA9ICdhbGFpbi1kZWZhdWx0LXZhcnMnO1xuY29uc3QgREVGQVVMVF9DT0xPUlMgPSBbXG4gIHtcbiAgICBrZXk6ICdkdXN0JyxcbiAgICBjb2xvcjogJyNGNTIyMkQnLFxuICB9LFxuICB7XG4gICAga2V5OiAndm9sY2FubycsXG4gICAgY29sb3I6ICcjRkE1NDFDJyxcbiAgfSxcbiAge1xuICAgIGtleTogJ3N1bnNldCcsXG4gICAgY29sb3I6ICcjRkFBRDE0JyxcbiAgfSxcbiAge1xuICAgIGtleTogJ2N5YW4nLFxuICAgIGNvbG9yOiAnIzEzQzJDMicsXG4gIH0sXG4gIHtcbiAgICBrZXk6ICdncmVlbicsXG4gICAgY29sb3I6ICcjNTJDNDFBJyxcbiAgfSxcbiAge1xuICAgIGtleTogJ2RheWJyZWFrJyxcbiAgICBjb2xvcjogJyMxODkwZmYnLFxuICB9LFxuICB7XG4gICAga2V5OiAnZ2Vla2JsdWUnLFxuICAgIGNvbG9yOiAnIzJGNTRFQicsXG4gIH0sXG4gIHtcbiAgICBrZXk6ICdwdXJwbGUnLFxuICAgIGNvbG9yOiAnIzcyMkVEMScsXG4gIH0sXG4gIHtcbiAgICBrZXk6ICdibGFjaycsXG4gICAgY29sb3I6ICcjMDAxNTI5JyxcbiAgfSxcbl07XG5jb25zdCBERUZBVUxUX1ZBUlM6IHsgW2tleTogc3RyaW5nXTogTnpTYWZlQW55IH0gPSB7XG4gICdwcmltYXJ5LWNvbG9yJzogeyBsYWJlbDogJ+S4u+minOiJsicsIHR5cGU6ICdjb2xvcicsIGRlZmF1bHQ6ICcjMTg5MGZmJyB9LFxuICAnYWxhaW4tZGVmYXVsdC1oZWFkZXItaGcnOiB7XG4gICAgbGFiZWw6ICfpq5gnLFxuICAgIHR5cGU6ICdweCcsXG4gICAgZGVmYXVsdDogJzY0cHgnLFxuICAgIG1heDogMzAwLFxuICAgIG1pbjogMjQsXG4gIH0sXG4gICdhbGFpbi1kZWZhdWx0LWhlYWRlci1iZyc6IHtcbiAgICBsYWJlbDogJ+iDjOaZr+iJsicsXG4gICAgdHlwZTogJ2NvbG9yJyxcbiAgICBkZWZhdWx0OiAnQHByaW1hcnktY29sb3InLFxuICAgIHRpcDogJ+m7mOiupOWQjOS4u+iJsuezuycsXG4gIH0sXG4gICdhbGFpbi1kZWZhdWx0LWhlYWRlci1wYWRkaW5nJzoge1xuICAgIGxhYmVsOiAn6aG26YOo5bem5Y+z5YaF6L656LedJyxcbiAgICB0eXBlOiAncHgnLFxuICAgIGRlZmF1bHQ6ICcxNnB4JyxcbiAgfSxcbiAgLy8g5L6n6L655qCPXG4gICdhbGFpbi1kZWZhdWx0LWFzaWRlLXdkJzogeyBsYWJlbDogJ+WuveW6picsIHR5cGU6ICdweCcsIGRlZmF1bHQ6ICcyMDBweCcgfSxcbiAgJ2FsYWluLWRlZmF1bHQtYXNpZGUtYmcnOiB7XG4gICAgbGFiZWw6ICfog4zmma8nLFxuICAgIHR5cGU6ICdjb2xvcicsXG4gICAgZGVmYXVsdDogJyNmZmZmZmYnLFxuICB9LFxuICAnYWxhaW4tZGVmYXVsdC1hc2lkZS1jb2xsYXBzZWQtd2QnOiB7XG4gICAgbGFiZWw6ICfmlLbnvKnlrr3luqYnLFxuICAgIHR5cGU6ICdweCcsXG4gICAgZGVmYXVsdDogJzY0cHgnLFxuICB9LFxuICAnYWxhaW4tZGVmYXVsdC1hc2lkZS1uYXYtcGFkZGluZy10b3AtYm90dG9tJzoge1xuICAgIGxhYmVsOiAn6aG55LiK5LiL5YaF6L656LedJyxcbiAgICB0eXBlOiAncHgnLFxuICAgIGRlZmF1bHQ6ICc4cHgnLFxuICAgIHN0ZXA6IDgsXG4gIH0sXG4gIC8vIOS4u+iPnOWNlVxuICAnYWxhaW4tZGVmYXVsdC1hc2lkZS1uYXYtZnMnOiB7XG4gICAgbGFiZWw6ICfoj5zljZXlrZflj7cnLFxuICAgIHR5cGU6ICdweCcsXG4gICAgZGVmYXVsdDogJzE0cHgnLFxuICAgIG1pbjogMTQsXG4gICAgbWF4OiAzMCxcbiAgfSxcbiAgJ2FsYWluLWRlZmF1bHQtYXNpZGUtY29sbGFwc2VkLW5hdi1mcyc6IHtcbiAgICBsYWJlbDogJ+aUtue8qeiPnOWNleWtl+WPtycsXG4gICAgdHlwZTogJ3B4JyxcbiAgICBkZWZhdWx0OiAnMjRweCcsXG4gICAgbWluOiAyNCxcbiAgICBtYXg6IDMyLFxuICB9LFxuICAnYWxhaW4tZGVmYXVsdC1hc2lkZS1uYXYtaXRlbS1oZWlnaHQnOiB7XG4gICAgbGFiZWw6ICfoj5zljZXpobnpq5jluqYnLFxuICAgIHR5cGU6ICdweCcsXG4gICAgZGVmYXVsdDogJzM4cHgnLFxuICAgIG1pbjogMjQsXG4gICAgbWF4OiA2NCxcbiAgfSxcbiAgJ2FsYWluLWRlZmF1bHQtYXNpZGUtbmF2LXRleHQtY29sb3InOiB7XG4gICAgbGFiZWw6ICfoj5zljZXmlofmnKzpopzoibInLFxuICAgIHR5cGU6ICdjb2xvcicsXG4gICAgZGVmYXVsdDogJ3JnYmEoMCwgMCwgMCwgMC42NSknLFxuICAgIHJnYmE6IHRydWUsXG4gIH0sXG4gICdhbGFpbi1kZWZhdWx0LWFzaWRlLW5hdi10ZXh0LWhvdmVyLWNvbG9yJzoge1xuICAgIGxhYmVsOiAn6I+c5Y2V5paH5pys5oKs5YGc6aKc6ImyJyxcbiAgICB0eXBlOiAnY29sb3InLFxuICAgIGRlZmF1bHQ6ICdAcHJpbWFyeS1jb2xvcicsXG4gICAgdGlwOiAn6buY6K6k5ZCM5Li76Imy57O7JyxcbiAgfSxcbiAgJ2FsYWluLWRlZmF1bHQtYXNpZGUtbmF2LWdyb3VwLXRleHQtY29sb3InOiB7XG4gICAgbGFiZWw6ICfoj5zljZXliIbnu4TmlofmnKzpopzoibInLFxuICAgIHR5cGU6ICdjb2xvcicsXG4gICAgZGVmYXVsdDogJ3JnYmEoMCwgMCwgMCwgMC40MyknLFxuICAgIHJnYmE6IHRydWUsXG4gIH0sXG4gICdhbGFpbi1kZWZhdWx0LWFzaWRlLW5hdi1zZWxlY3RlZC10ZXh0LWNvbG9yJzoge1xuICAgIGxhYmVsOiAn6I+c5Y2V5r+A5rS75pe25paH5pys6aKc6ImyJyxcbiAgICB0eXBlOiAnY29sb3InLFxuICAgIGRlZmF1bHQ6ICdAcHJpbWFyeS1jb2xvcicsXG4gICAgdGlwOiAn6buY6K6k5ZCM5Li76Imy57O7JyxcbiAgfSxcbiAgJ2FsYWluLWRlZmF1bHQtYXNpZGUtbmF2LXNlbGVjdGVkLWJnJzoge1xuICAgIGxhYmVsOiAn6I+c5Y2V5r+A5rS75pe26IOM5pmv6aKc6ImyJyxcbiAgICB0eXBlOiAnY29sb3InLFxuICAgIGRlZmF1bHQ6ICcjZmNmY2ZjJyxcbiAgfSxcbiAgLy8g5YaF5a65XG4gICdhbGFpbi1kZWZhdWx0LWNvbnRlbnQtYmcnOiB7XG4gICAgbGFiZWw6ICfog4zmma/oibInLFxuICAgIHR5cGU6ICdjb2xvcicsXG4gICAgZGVmYXVsdDogJyNmNWY3ZmEnLFxuICB9LFxuICAnYWxhaW4tZGVmYXVsdC1jb250ZW50LWhlYWRpbmctYmcnOiB7XG4gICAgbGFiZWw6ICfmoIfpopjog4zmma/oibInLFxuICAgIHR5cGU6ICdjb2xvcicsXG4gICAgZGVmYXVsdDogJyNmYWZiZmMnLFxuICB9LFxuICAnYWxhaW4tZGVmYXVsdC1jb250ZW50LWhlYWRpbmctYm9yZGVyJzoge1xuICAgIGxhYmVsOiAn5qCH6aKY5bqV6YOo6L655qGG6ImyJyxcbiAgICB0eXBlOiAnY29sb3InLFxuICAgIGRlZmF1bHQ6ICcjZWZlM2U1JyxcbiAgfSxcbiAgJ2FsYWluLWRlZmF1bHQtY29udGVudC1wYWRkaW5nJzoge1xuICAgIGxhYmVsOiAn5YaF6L656LedJyxcbiAgICB0eXBlOiAncHgnLFxuICAgIGRlZmF1bHQ6ICcyNHB4JyxcbiAgICBtaW46IDAsXG4gICAgbWF4OiAxMjgsXG4gICAgc3RlcDogOCxcbiAgfSxcbiAgLy8gem9ycm/nu4Tku7bkv67mraNcbiAgJ2Zvcm0tc3RhdGUtdmlzdWFsLWZlZWRiYWNrLWVuYWJsZWQnOiB7XG4gICAgbGFiZWw6ICflvIDlkK/ooajljZXlhYPntKDnmoTop4bop4nlj43ppognLFxuICAgIHR5cGU6ICdzd2l0Y2gnLFxuICAgIGRlZmF1bHQ6IHRydWUsXG4gIH0sXG4gICdwcmVzZXJ2ZS13aGl0ZS1zcGFjZXMtZW5hYmxlZCc6IHtcbiAgICBsYWJlbDogJ+W8gOWQryBwcmVzZXJ2ZVdoaXRlc3BhY2VzJyxcbiAgICB0eXBlOiAnc3dpdGNoJyxcbiAgICBkZWZhdWx0OiB0cnVlLFxuICB9LFxuICAnbnotdGFibGUtaW1nLXJhZGl1cyc6IHtcbiAgICBsYWJlbDogJ+ihqOagvOS4re+8muWbvueJh+WchuinkicsXG4gICAgdHlwZTogJ3B4JyxcbiAgICBkZWZhdWx0OiAnNHB4JyxcbiAgICBtaW46IDAsXG4gICAgbWF4OiAxMjgsXG4gIH0sXG4gICduei10YWJsZS1pbWctbWFyZ2luLXJpZ2h0Jzoge1xuICAgIGxhYmVsOiAn6KGo5qC85Lit77ya5Zu+54mH5Y+z5aSW6L656LedJyxcbiAgICB0eXBlOiAncHgnLFxuICAgIGRlZmF1bHQ6ICc0cHgnLFxuICAgIG1pbjogMCxcbiAgICBtYXg6IDEyOCxcbiAgfSxcbiAgJ256LXRhYmxlLWltZy1tYXgtd2lkdGgnOiB7XG4gICAgbGFiZWw6ICfooajmoLzkuK3vvJrlm77niYfmnIDlpKflrr3luqYnLFxuICAgIHR5cGU6ICdweCcsXG4gICAgZGVmYXVsdDogJzMycHgnLFxuICAgIG1pbjogOCxcbiAgICBtYXg6IDEyOCxcbiAgfSxcbiAgJ256LXRhYmxlLWltZy1tYXgtaGVpZ2h0Jzoge1xuICAgIGxhYmVsOiAn6KGo5qC85Lit77ya5Zu+54mH5pyA5aSn6auY5bqmJyxcbiAgICB0eXBlOiAncHgnLFxuICAgIGRlZmF1bHQ6ICczMnB4JyxcbiAgICBtaW46IDgsXG4gICAgbWF4OiAxMjgsXG4gIH0sXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZXR0aW5nLWRyYXdlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZXR0aW5nLWRyYXdlci5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLnNldHRpbmctZHJhd2VyXSc6ICd0cnVlJyxcbiAgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFNldHRpbmdEcmF3ZXJDb21wb25lbnQge1xuICBwcml2YXRlIGxvYWRlZExlc3MgPSBmYWxzZTtcblxuICBpc0RldiA9IGlzRGV2TW9kZSgpO1xuICBASW5wdXQoKSBkZXZUaXBzID0gYFdoZW4gdGhlIGNvbG9yIGNhbid0IGJlIHN3aXRjaGVkLCB5b3UgbmVlZCB0byBydW4gaXQgb25jZTogbnBtIHJ1biBjb2xvci1sZXNzYDtcblxuICBjb2xsYXBzZSA9IGZhbHNlO1xuICBnZXQgbGF5b3V0KCk6IExheW91dCB7XG4gICAgcmV0dXJuIHRoaXMuc2V0dGluZ1Nydi5sYXlvdXQ7XG4gIH1cbiAgZGF0YTogYW55ID0ge307XG4gIGNvbG9yOiBzdHJpbmc7XG4gIGNvbG9ycyA9IERFRkFVTFRfQ09MT1JTO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIG1zZzogTnpNZXNzYWdlU2VydmljZSxcbiAgICBwcml2YXRlIHNldHRpbmdTcnY6IFNldHRpbmdzU2VydmljZSxcbiAgICBwcml2YXRlIGxhenk6IExhenlTZXJ2aWNlLFxuICAgIHByaXZhdGUgem9uZTogTmdab25lLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnksXG4gICkge1xuICAgIHRoaXMuY29sb3IgPSB0aGlzLmNhY2hlZERhdGFbJ0BwcmltYXJ5LWNvbG9yJ10gfHwgdGhpcy5ERUZBVUxUX1BSSU1BUlk7XG4gICAgdGhpcy5yZXNldERhdGEodGhpcy5jYWNoZWREYXRhLCBmYWxzZSk7XG4gIH1cblxuICBwcml2YXRlIGdldCBjYWNoZWREYXRhKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB0aGlzLnNldHRpbmdTcnYubGF5b3V0W0FMQUlOREVGQVVMVFZBUl0gfHwge307XG4gIH1cblxuICBwcml2YXRlIGdldCBERUZBVUxUX1BSSU1BUlkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gREVGQVVMVF9WQVJTWydwcmltYXJ5LWNvbG9yJ10uZGVmYXVsdDtcbiAgfVxuXG4gIHByaXZhdGUgbG9hZExlc3MoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKHRoaXMubG9hZGVkTGVzcykge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5sYXp5XG4gICAgICAubG9hZFN0eWxlKCcuL2Fzc2V0cy9jb2xvci5sZXNzJywgJ3N0eWxlc2hlZXQvbGVzcycpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIGNvbnN0IGxlc3NDb25maWdOb2RlID0gdGhpcy5kb2MuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIGxlc3NDb25maWdOb2RlLmlubmVySFRNTCA9IGBcbiAgICAgICAgICB3aW5kb3cubGVzcyA9IHtcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgICAgICAgZW52OiAncHJvZHVjdGlvbicsXG4gICAgICAgICAgICBqYXZhc2NyaXB0RW5hYmxlZDogdHJ1ZVxuICAgICAgICAgIH07XG4gICAgICAgIGA7XG4gICAgICAgIHRoaXMuZG9jLmJvZHkuYXBwZW5kQ2hpbGQobGVzc0NvbmZpZ05vZGUpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHRoaXMubGF6eS5sb2FkU2NyaXB0KCdodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL29zL2xpYi9sZXNzLmpzLzMuOC4xL2xlc3MubWluLmpzJykpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMubG9hZGVkTGVzcyA9IHRydWU7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuVmFycygpOiBhbnkge1xuICAgIGNvbnN0IHsgZGF0YSwgY29sb3IsIHZhbGlkS2V5cyB9ID0gdGhpcztcbiAgICBjb25zdCB2YXJzOiBhbnkgPSB7XG4gICAgICBbYEBwcmltYXJ5LWNvbG9yYF06IGNvbG9yLFxuICAgIH07XG4gICAgdmFsaWRLZXlzLmZpbHRlcihrZXkgPT4ga2V5ICE9PSAncHJpbWFyeS1jb2xvcicpLmZvckVhY2goa2V5ID0+ICh2YXJzW2BAJHtrZXl9YF0gPSBkYXRhW2tleV0udmFsdWUpKTtcbiAgICB0aGlzLnNldExheW91dChBTEFJTkRFRkFVTFRWQVIsIHZhcnMpO1xuICAgIHJldHVybiB2YXJzO1xuICB9XG5cbiAgcHJpdmF0ZSBydW5MZXNzKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgem9uZSwgbXNnLCBjZHIgfSA9IHRoaXM7XG4gICAgY29uc3QgbXNnSWQgPSBtc2cubG9hZGluZyhg5q2j5Zyo57yW6K+R5Li76aKY77yBYCwgeyBuekR1cmF0aW9uOiAwIH0pLm1lc3NhZ2VJZDtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICB0aGlzLmxvYWRMZXNzKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgKHdpbmRvdyBhcyBhbnkpLmxlc3MubW9kaWZ5VmFycyh0aGlzLmdlblZhcnMoKSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBtc2cuc3VjY2Vzcygn5oiQ5YqfJyk7XG4gICAgICAgICAgICBtc2cucmVtb3ZlKG1zZ0lkKTtcbiAgICAgICAgICAgIHpvbmUucnVuKCgpID0+IGNkci5kZXRlY3RDaGFuZ2VzKCkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0sIDIwMCk7XG4gIH1cblxuICB0b2dnbGUoKTogdm9pZCB7XG4gICAgdGhpcy5jb2xsYXBzZSA9ICF0aGlzLmNvbGxhcHNlO1xuICB9XG5cbiAgY2hhbmdlQ29sb3IoY29sb3I6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICBPYmplY3Qua2V5cyhERUZBVUxUX1ZBUlMpXG4gICAgICAuZmlsdGVyKGtleSA9PiBERUZBVUxUX1ZBUlNba2V5XS5kZWZhdWx0ID09PSAnQHByaW1hcnktY29sb3InKVxuICAgICAgLmZvckVhY2goa2V5ID0+IGRlbGV0ZSB0aGlzLmNhY2hlZERhdGFbYEAke2tleX1gXSk7XG4gICAgdGhpcy5yZXNldERhdGEodGhpcy5jYWNoZWREYXRhLCBmYWxzZSk7XG4gIH1cblxuICBzZXRMYXlvdXQobmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5zZXR0aW5nU3J2LnNldExheW91dChuYW1lLCB2YWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIHJlc2V0RGF0YShub3dEYXRhPzogeyBba2V5OiBzdHJpbmddOiBOelNhZmVBbnkgfSwgcnVuOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xuICAgIG5vd0RhdGEgPSBub3dEYXRhIHx8IHt9O1xuICAgIGNvbnN0IGRhdGEgPSBkZWVwQ29weShERUZBVUxUX1ZBUlMpO1xuICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gbm93RGF0YSFbYEAke2tleX1gXSB8fCBkYXRhW2tleV0uZGVmYXVsdCB8fCAnJztcbiAgICAgIGRhdGFba2V5XS52YWx1ZSA9IHZhbHVlID09PSBgQHByaW1hcnktY29sb3JgID8gdGhpcy5jb2xvciA6IHZhbHVlO1xuICAgIH0pO1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgaWYgKHJ1bikge1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgdGhpcy5ydW5MZXNzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXQgdmFsaWRLZXlzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5kYXRhKS5maWx0ZXIoa2V5ID0+IHRoaXMuZGF0YVtrZXldLnZhbHVlICE9PSB0aGlzLmRhdGFba2V5XS5kZWZhdWx0KTtcbiAgfVxuXG4gIGFwcGx5KCk6IHZvaWQge1xuICAgIHRoaXMucnVuTGVzcygpO1xuICB9XG5cbiAgcmVzZXQoKTogdm9pZCB7XG4gICAgdGhpcy5jb2xvciA9IHRoaXMuREVGQVVMVF9QUklNQVJZO1xuICAgIHRoaXMuc2V0dGluZ1Nydi5zZXRMYXlvdXQoQUxBSU5ERUZBVUxUVkFSLCB7fSk7XG4gICAgdGhpcy5yZXNldERhdGEoe30pO1xuICB9XG5cbiAgY29weVZhcigpOiB2b2lkIHtcbiAgICBjb25zdCB2YXJzID0gdGhpcy5nZW5WYXJzKCk7XG4gICAgY29uc3QgY29weUNvbnRlbnQgPSBPYmplY3Qua2V5cyh2YXJzKVxuICAgICAgLm1hcChrZXkgPT4gYCR7a2V5fTogJHt2YXJzW2tleV19O2ApXG4gICAgICAuam9pbignXFxuJyk7XG4gICAgY29weShjb3B5Q29udGVudCk7XG4gICAgdGhpcy5tc2cuc3VjY2VzcygnQ29weSBzdWNjZXNzJyk7XG4gIH1cbn1cbiJdfQ==