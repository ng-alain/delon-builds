/**
 * @license ng-alain(cipchk@qq.com) v11.3.1
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/bidi'), require('@angular/core'), require('@angular/platform-browser'), require('@delon/theme'), require('@delon/util/browser'), require('rxjs'), require('rxjs/operators'), require('@angular/common'), require('@angular/router'), require('ng-zorro-antd/button')) :
    typeof define === 'function' && define.amd ? define('@delon/abc/exception', ['exports', '@angular/cdk/bidi', '@angular/core', '@angular/platform-browser', '@delon/theme', '@delon/util/browser', 'rxjs', 'rxjs/operators', '@angular/common', '@angular/router', 'ng-zorro-antd/button'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.abc = global.delon.abc || {}, global.delon.abc.exception = {}), global.ng.cdk.bidi, global.ng.core, global.ng.platformBrowser, global.delon.theme, global.browser, global.rxjs, global.rxjs.operators, global.ng.common, global.ng.router, global['ng-zorro-antd/button']));
}(this, (function (exports, bidi, core, platformBrowser, theme, browser, rxjs, operators, common, router, button) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: exception.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ExceptionComponent = /** @class */ (function () {
        /**
         * @param {?} i18n
         * @param {?} dom
         * @param {?} directionality
         */
        function ExceptionComponent(i18n, dom, directionality) {
            this.i18n = i18n;
            this.dom = dom;
            this.directionality = directionality;
            this.destroy$ = new rxjs.Subject();
            this.locale = {};
            this.hasCon = false;
            this.dir = 'ltr';
            this._img = '';
            this._title = '';
            this._desc = '';
        }
        Object.defineProperty(ExceptionComponent.prototype, "type", {
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                /** @type {?} */
                var item = {
                    403: {
                        img: 'https://gw.alipayobjects.com/zos/rmsportal/wZcnGqRDyhPOEYFcZDnb.svg',
                        title: '403',
                    },
                    404: {
                        img: 'https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg',
                        title: '404',
                    },
                    500: {
                        img: 'https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg',
                        title: '500',
                    },
                }[value];
                if (!item)
                    return;
                this.fixImg(item.img);
                this._type = value;
                this._title = item.title;
                this._desc = '';
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @private
         * @param {?} src
         * @return {?}
         */
        ExceptionComponent.prototype.fixImg = function (src) {
            this._img = this.dom.bypassSecurityTrustStyle("url('" + src + "')");
        };
        Object.defineProperty(ExceptionComponent.prototype, "img", {
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                this.fixImg(value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ExceptionComponent.prototype, "title", {
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                this._title = this.dom.bypassSecurityTrustHtml(value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ExceptionComponent.prototype, "desc", {
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                this._desc = this.dom.bypassSecurityTrustHtml(value);
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @return {?}
         */
        ExceptionComponent.prototype.checkContent = function () {
            this.hasCon = !browser.isEmpty(this.conTpl.nativeElement);
        };
        /**
         * @return {?}
         */
        ExceptionComponent.prototype.ngOnInit = function () {
            var _this = this;
            var _a;
            this.dir = this.directionality.value;
            (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(operators.takeUntil(this.destroy$)).subscribe(( /**
             * @param {?} direction
             * @return {?}
             */function (direction) {
                _this.dir = direction;
            }));
            this.i18n.change.pipe(operators.takeUntil(this.destroy$)).subscribe(( /**
             * @return {?}
             */function () { return (_this.locale = _this.i18n.getData('exception')); }));
            this.checkContent();
        };
        /**
         * @return {?}
         */
        ExceptionComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        return ExceptionComponent;
    }());
    ExceptionComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'exception',
                    exportAs: 'exception',
                    template: "<div class=\"exception__img-block\">\n  <div class=\"exception__img\" [style.backgroundImage]=\"_img\"></div>\n</div>\n<div class=\"exception__cont\">\n  <h1 class=\"exception__cont-title\" [innerHTML]=\"_title\"></h1>\n  <div class=\"exception__cont-desc\" [innerHTML]=\"_desc || locale[_type]\"></div>\n  <div class=\"exception__cont-actions\">\n    <div (cdkObserveContent)=\"checkContent()\" #conTpl>\n      <ng-content></ng-content>\n    </div>\n    <button *ngIf=\"!hasCon\" nz-button [routerLink]=\"['/']\" [nzType]=\"'primary'\">{{ locale.backToHome }}</button>\n  </div>\n</div>\n",
                    host: {
                        '[class.exception]': 'true',
                        '[class.exception-rtl]': "dir === 'rtl'",
                    },
                    preserveWhitespaces: false,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    ExceptionComponent.ctorParameters = function () { return [
        { type: theme.DelonLocaleService },
        { type: platformBrowser.DomSanitizer },
        { type: bidi.Directionality, decorators: [{ type: core.Optional }] }
    ]; };
    ExceptionComponent.propDecorators = {
        conTpl: [{ type: core.ViewChild, args: ['conTpl', { static: true },] }],
        type: [{ type: core.Input }],
        img: [{ type: core.Input }],
        title: [{ type: core.Input }],
        desc: [{ type: core.Input }]
    };
    if (false) {
        /** @type {?} */
        ExceptionComponent.ngAcceptInputType_type;
        /**
         * @type {?}
         * @private
         */
        ExceptionComponent.prototype.destroy$;
        /**
         * @type {?}
         * @private
         */
        ExceptionComponent.prototype.conTpl;
        /** @type {?} */
        ExceptionComponent.prototype._type;
        /** @type {?} */
        ExceptionComponent.prototype.locale;
        /** @type {?} */
        ExceptionComponent.prototype.hasCon;
        /** @type {?} */
        ExceptionComponent.prototype.dir;
        /** @type {?} */
        ExceptionComponent.prototype._img;
        /** @type {?} */
        ExceptionComponent.prototype._title;
        /** @type {?} */
        ExceptionComponent.prototype._desc;
        /**
         * @type {?}
         * @private
         */
        ExceptionComponent.prototype.i18n;
        /**
         * @type {?}
         * @private
         */
        ExceptionComponent.prototype.dom;
        /**
         * @type {?}
         * @private
         */
        ExceptionComponent.prototype.directionality;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: exception.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COMPONENTS = [ExceptionComponent];
    var ExceptionModule = /** @class */ (function () {
        function ExceptionModule() {
        }
        return ExceptionModule;
    }());
    ExceptionModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule, router.RouterModule, theme.DelonLocaleModule, button.NzButtonModule],
                    declarations: COMPONENTS,
                    exports: COMPONENTS,
                },] }
    ];

    /**
     * @fileoverview added by tsickle
     * Generated from: public_api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: exception.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.ExceptionComponent = ExceptionComponent;
    exports.ExceptionModule = ExceptionModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=exception.umd.js.map
