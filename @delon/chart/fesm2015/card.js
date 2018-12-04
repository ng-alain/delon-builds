import { Component, TemplateRef, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { toBoolean, DelonUtilModule } from '@delon/util';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class G2CardComponent {
    constructor() {
        this._bordered = false;
        this._avatar = '';
        this._title = '';
        this._action = '';
        this.total = '';
        this._height = 'auto';
        this._footer = '';
        this._loading = false;
    }
    /**
     * 是否显示边框
     * @return {?}
     */
    get bordered() {
        return this._bordered;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set bordered(value) {
        this._bordered = toBoolean(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set avatar(value) {
        if (value instanceof TemplateRef) {
            this._avatar = null;
            this._avatarTpl = value;
        }
        else
            this._avatar = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set title(value) {
        if (value instanceof TemplateRef) {
            this._title = null;
            this._titleTpl = value;
        }
        else
            this._title = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set action(value) {
        if (value instanceof TemplateRef) {
            this._action = null;
            this._actionTpl = value;
        }
        else
            this._action = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set contentHeight(value) {
        this._orgHeight = value;
        this._height =
            typeof value === 'number' ? (this._height = `${value}px`) : value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set footer(value) {
        if (value instanceof TemplateRef) {
            this._footer = null;
            this._footerTpl = value;
        }
        else
            this._footer = value;
    }
    /**
     * 是否显示Loading
     * @return {?}
     */
    get loading() {
        return this._loading;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set loading(value) {
        this._loading = toBoolean(value);
    }
}
G2CardComponent.decorators = [
    { type: Component, args: [{
                selector: 'g2-card',
                template: "<nz-card [nzBodyStyle]=\"{padding: '20px 24px 8px 24px'}\" [nzBordered]=\"bordered\">\n  <nz-spin [nzSpinning]=\"loading\">\n    <div class=\"g2-card__top\">\n      <div class=\"g2-card__avatar\">\n        <ng-container *ngIf=\"_avatar; else _avatarTpl\">{{ _avatar }}</ng-container>\n      </div>\n      <div class=\"g2-card__meta-wrap\">\n        <div class=\"g2-card__meta\">\n          <span class=\"g2-card__meta-title\" *ngIf=\"_title; else _titleTpl\">{{ _title }}</span>\n          <span class=\"g2-card__meta-action\" *ngIf=\"_action || _actionTpl\">\n            <ng-container *ngIf=\"_action; else _actionTpl\">{{ _action }}</ng-container>\n          </span>\n        </div>\n        <p *ngIf=\"total\" class=\"g2-card__total\" [innerHTML]=\"total\"></p>\n      </div>\n    </div>\n    <div class=\"g2-card__desc\" [ngStyle]=\"{'height':_height}\">\n      <div [ngClass]=\"{'g2-card__fixed': !!_orgHeight }\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n    <div class=\"g2-card__footer\" *ngIf=\"_footer || _footerTpl\">\n      <ng-container *ngIf=\"_footer; else _footerTpl\">{{ _footer }}</ng-container>\n    </div>\n  </nz-spin>\n</nz-card>\n",
                host: { '[class.g2-card]': 'true' },
                preserveWhitespaces: false
            }] }
];
G2CardComponent.propDecorators = {
    bordered: [{ type: Input }],
    avatar: [{ type: Input }],
    title: [{ type: Input }],
    action: [{ type: Input }],
    total: [{ type: Input }],
    contentHeight: [{ type: Input }],
    footer: [{ type: Input }],
    loading: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [G2CardComponent];
class G2CardModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: G2CardModule, providers: [] };
    }
}
G2CardModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, DelonUtilModule, NgZorroAntdModule],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { G2CardComponent, G2CardModule };

//# sourceMappingURL=card.js.map