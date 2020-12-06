import { Component, Input, isDevMode, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, Inject, NgModule } from '@angular/core';
import { __awaiter, __decorate, __metadata } from 'tslib';
import { DOCUMENT, CommonModule } from '@angular/common';
import { SettingsService } from '@delon/theme';
import { deepCopy, copy, LazyService, InputBoolean, DelonUtilModule } from '@delon/util';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FormsModule } from '@angular/forms';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

/**
 * @fileoverview added by tsickle
 * Generated from: setting-drawer-item.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SettingDrawerItemComponent {
    constructor() {
        this.i = {};
        this.pxVal = 0;
        this.format = (/**
         * @param {?} value
         * @return {?}
         */
        (value) => `${value} px`);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set data(val) {
        this.i = val;
        if (val.type === 'px') {
            this.pxVal = +val.value.replace('px', '');
        }
    }
    /**
     * @param {?} val
     * @return {?}
     */
    pxChange(val) {
        this.i.value = `${val}px`;
    }
}
SettingDrawerItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'setting-drawer-item',
                template: "<span>\n  {{ i.label }}\n  <span class=\"pl-sm text-grey\">{{ i.tip }}</span>\n</span>\n<div [ngSwitch]=\"i.type\">\n  <ng-container *ngSwitchCase=\"'color'\">\n    <input nz-input type=\"color\" style=\"min-width: 88px\" [(ngModel)]=\"i.value\" [ngModelOptions]=\"{ standalone: true }\" />\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'input'\">\n    <input nz-input style=\"min-width: 88px\" [(ngModel)]=\"i.value\" [ngModelOptions]=\"{ standalone: true }\" />\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'px'\">\n    <nz-input-number\n      [(ngModel)]=\"pxVal\"\n      (ngModelChange)=\"pxChange($event)\"\n      [nzMin]=\"i.min\"\n      [nzMax]=\"i.max\"\n      [nzStep]=\"i.step || 2\"\n      [nzFormatter]=\"format\"\n    ></nz-input-number>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'switch'\">\n    <nz-switch nzSize=\"small\" [(ngModel)]=\"i.value\" [ngModelOptions]=\"{ standalone: true }\"></nz-switch>\n  </ng-container>\n  <ng-container *ngSwitchDefault>\n    <ng-content></ng-content>\n  </ng-container>\n</div>\n",
                host: {
                    '[class.setting-drawer__body-item]': 'true',
                }
            }] }
];
SettingDrawerItemComponent.propDecorators = {
    data: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SettingDrawerItemComponent.prototype.i;
    /** @type {?} */
    SettingDrawerItemComponent.prototype.pxVal;
    /** @type {?} */
    SettingDrawerItemComponent.prototype.format;
}

/**
 * @fileoverview added by tsickle
 * Generated from: setting-drawer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
class SettingDrawerComponent {
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

/**
 * @fileoverview added by tsickle
 * Generated from: setting-drawer.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [SettingDrawerItemComponent, SettingDrawerComponent];
class SettingDrawerModule {
}
SettingDrawerModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    DelonUtilModule,
                    NzDrawerModule,
                    NzToolTipModule,
                    NzDividerModule,
                    NzTabsModule,
                    NzSwitchModule,
                    NzAlertModule,
                    NzIconModule,
                    NzInputModule,
                    NzInputNumberModule,
                    NzButtonModule,
                ],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS],
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: setting-drawer.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { SettingDrawerComponent, SettingDrawerItemComponent, SettingDrawerModule };
//# sourceMappingURL=setting-drawer.js.map
