/**
 * @license ng-alain(cipchk@qq.com) v9.0.0
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('@delon/abc/reuse-tab'), require('@delon/theme'), require('@delon/util'), require('ng-zorro-antd/affix'), require('rxjs'), require('rxjs/operators'), require('@angular/cdk/observers'), require('@angular/common'), require('ng-zorro-antd/breadcrumb'), require('ng-zorro-antd/skeleton')) :
    typeof define === 'function' && define.amd ? define('@delon/abc/page-header', ['exports', '@angular/core', '@angular/router', '@delon/abc/reuse-tab', '@delon/theme', '@delon/util', 'ng-zorro-antd/affix', 'rxjs', 'rxjs/operators', '@angular/cdk/observers', '@angular/common', 'ng-zorro-antd/breadcrumb', 'ng-zorro-antd/skeleton'], factory) :
    (global = global || self, factory((global.delon = global.delon || {}, global.delon.abc = global.delon.abc || {}, global.delon.abc['page-header'] = {}), global.ng.core, global.ng.router, global.delon.abc['reuse-tab'], global.delon.theme, global.delon.util, global['ng-zorro-antd/affix'], global.rxjs, global.rxjs.operators, global.ng.cdk.observers, global.ng.common, global['ng-zorro-antd/breadcrumb'], global['ng-zorro-antd/skeleton']));
}(this, (function (exports, core, router, reuseTab, theme, util, affix, rxjs, operators, observers, common, breadcrumb, skeleton) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: page-header.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function PageHeaderPath() { }
    if (false) {
        /** @type {?|undefined} */
        PageHeaderPath.prototype.title;
        /** @type {?|undefined} */
        PageHeaderPath.prototype.link;
    }
    var PageHeaderComponent = /** @class */ (function () {
        // #endregion
        function PageHeaderComponent(settings, renderer, router$1, menuSrv, i18nSrv, titleSrv, reuseSrv, cdr, configSrv) {
            var _this = this;
            this.renderer = renderer;
            this.router = router$1;
            this.menuSrv = menuSrv;
            this.i18nSrv = i18nSrv;
            this.titleSrv = titleSrv;
            this.reuseSrv = reuseSrv;
            this.cdr = cdr;
            this.inited = false;
            this.unsubscribe$ = new rxjs.Subject();
            this._titleVal = '';
            this.paths = [];
            this.loading = false;
            this.wide = false;
            configSrv.attach(this, 'pageHeader', {
                home: '首页',
                homeLink: '/',
                autoBreadcrumb: true,
                recursiveBreadcrumb: false,
                autoTitle: true,
                syncTitle: true,
                fixed: false,
                fixedOffsetTop: 64,
            });
            settings.notify
                .pipe(operators.takeUntil(this.unsubscribe$), operators.filter((/**
             * @param {?} w
             * @return {?}
             */
            function (w) { return _this.affix && w.type === 'layout' && w.name === 'collapsed'; })))
                .subscribe((/**
             * @return {?}
             */
            function () { return _this.affix.updatePosition((/** @type {?} */ ({}))); }));
            rxjs.merge(menuSrv.change.pipe(operators.filter((/**
             * @return {?}
             */
            function () { return _this.inited; }))), router$1.events.pipe(operators.filter((/**
             * @param {?} e
             * @return {?}
             */
            function (e) { return e instanceof router.NavigationEnd; }))), i18nSrv.change)
                .pipe(operators.takeUntil(this.unsubscribe$))
                .subscribe((/**
             * @return {?}
             */
            function () {
                _this._menus = null;
                _this.refresh();
            }));
        }
        Object.defineProperty(PageHeaderComponent.prototype, "menus", {
            get: /**
             * @private
             * @return {?}
             */
            function () {
                if (this._menus) {
                    return this._menus;
                }
                this._menus = this.menuSrv.getPathByUrl(this.router.url.split('?')[0], this.recursiveBreadcrumb);
                return this._menus;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PageHeaderComponent.prototype, "title", {
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                if (value instanceof core.TemplateRef) {
                    this._title = null;
                    this._titleTpl = value;
                    this._titleVal = '';
                }
                else {
                    this._title = value;
                    this._titleVal = this._title;
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        PageHeaderComponent.prototype.refresh = /**
         * @return {?}
         */
        function () {
            this.setTitle().genBreadcrumb();
            this.cdr.detectChanges();
        };
        /**
         * @private
         * @return {?}
         */
        PageHeaderComponent.prototype.genBreadcrumb = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.breadcrumb || !this.autoBreadcrumb || this.menus.length <= 0) {
                this.paths = [];
                return;
            }
            /** @type {?} */
            var paths = [];
            this.menus.forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                if (typeof item.hideInBreadcrumb !== 'undefined' && item.hideInBreadcrumb)
                    return;
                /** @type {?} */
                var title = item.text;
                if (item.i18n && _this.i18nSrv)
                    title = _this.i18nSrv.fanyi(item.i18n);
                paths.push({ title: title, link: (/** @type {?} */ ((item.link && [item.link]))) });
            }));
            // add home
            if (this.home) {
                paths.splice(0, 0, {
                    title: (this.homeI18n && this.i18nSrv && this.i18nSrv.fanyi(this.homeI18n)) || this.home,
                    link: [this.homeLink],
                });
            }
            this.paths = paths;
            return this;
        };
        /**
         * @private
         * @template THIS
         * @this {THIS}
         * @return {THIS}
         */
        PageHeaderComponent.prototype.setTitle = /**
         * @private
         * @template THIS
         * @this {THIS}
         * @return {THIS}
         */
        function () {
            if ((/** @type {?} */ (this))._title == null && (/** @type {?} */ (this))._titleTpl == null && (/** @type {?} */ (this)).autoTitle && (/** @type {?} */ (this)).menus.length > 0) {
                /** @type {?} */
                var item = (/** @type {?} */ (this)).menus[(/** @type {?} */ (this)).menus.length - 1];
                /** @type {?} */
                var title = item.text;
                if (item.i18n && (/** @type {?} */ (this)).i18nSrv)
                    title = (/** @type {?} */ (this)).i18nSrv.fanyi(item.i18n);
                (/** @type {?} */ (this))._titleVal = (/** @type {?} */ (title));
            }
            if ((/** @type {?} */ (this))._titleVal && (/** @type {?} */ (this)).syncTitle) {
                if ((/** @type {?} */ (this)).titleSrv) {
                    (/** @type {?} */ (this)).titleSrv.setTitle((/** @type {?} */ (this))._titleVal);
                }
                if ((/** @type {?} */ (this)).reuseSrv) {
                    (/** @type {?} */ (this)).reuseSrv.title = (/** @type {?} */ (this))._titleVal;
                }
            }
            return (/** @type {?} */ (this));
        };
        /**
         * @return {?}
         */
        PageHeaderComponent.prototype.checkContent = /**
         * @return {?}
         */
        function () {
            if (util.isEmpty(this.conTpl.nativeElement)) {
                this.renderer.setAttribute(this.conTpl.nativeElement, 'hidden', '');
            }
            else {
                this.renderer.removeAttribute(this.conTpl.nativeElement, 'hidden');
            }
        };
        /**
         * @return {?}
         */
        PageHeaderComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.refresh();
            this.inited = true;
        };
        /**
         * @return {?}
         */
        PageHeaderComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            this.checkContent();
        };
        /**
         * @return {?}
         */
        PageHeaderComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
        function () {
            if (this.inited)
                this.refresh();
        };
        /**
         * @return {?}
         */
        PageHeaderComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            var unsubscribe$ = this.unsubscribe$;
            unsubscribe$.next();
            unsubscribe$.complete();
        };
        PageHeaderComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'page-header',
                        exportAs: 'pageHeader',
                        template: "<nz-affix #affix *ngIf=\"fixed;else phTpl\" [nzOffsetTop]=\"fixedOffsetTop\">\n  <ng-template [ngTemplateOutlet]=\"phTpl\"></ng-template>\n</nz-affix>\n<ng-template #phTpl>\n  <div class=\"page-header\">\n    <div [ngClass]=\"{'page-header__wide': wide}\">\n      <nz-skeleton [nzLoading]=\"loading\"\n                   [nzTitle]=\"false\"\n                   [nzActive]=\"true\"\n                   [nzParagraph]=\"{rows: 3}\"\n                   [nzAvatar]=\"{ size: 'large', shape: 'circle' }\">\n        <ng-container *ngIf=\"!breadcrumb; else breadcrumb\">\n          <nz-breadcrumb *ngIf=\"paths && paths.length > 0\">\n            <nz-breadcrumb-item *ngFor=\"let i of paths\">\n              <ng-container *ngIf=\"i.link\">\n                <a [routerLink]=\"i.link\">{{i.title}}</a>\n              </ng-container>\n              <ng-container *ngIf=\"!i.link\">{{i.title}}</ng-container>\n            </nz-breadcrumb-item>\n          </nz-breadcrumb>\n        </ng-container>\n        <div class=\"page-header__detail\">\n          <div *ngIf=\"logo\" class=\"page-header__logo\">\n            <ng-template [ngTemplateOutlet]=\"logo\"></ng-template>\n          </div>\n          <div class=\"page-header__main\">\n            <div class=\"page-header__row\">\n              <h1 *ngIf=\"_titleVal || _titleTpl\" class=\"page-header__title\">\n                <ng-container *ngIf=\"_titleVal; else _titleTpl\">{{_titleVal}}</ng-container>\n              </h1>\n              <div *ngIf=\"action\" class=\"page-header__action\">\n                <ng-template [ngTemplateOutlet]=\"action\"></ng-template>\n              </div>\n            </div>\n            <div class=\"page-header__row\">\n              <div class=\"page-header__desc\" (cdkObserveContent)=\"checkContent()\" #conTpl>\n                <ng-content></ng-content>\n                <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\n              </div>\n              <div *ngIf=\"extra\" class=\"page-header__extra\">\n                <ng-template [ngTemplateOutlet]=\"extra\"></ng-template>\n              </div>\n            </div>\n          </div>\n        </div>\n        <ng-template [ngTemplateOutlet]=\"tab\"></ng-template>\n      </nz-skeleton>\n    </div>\n  </div>\n</ng-template>\n",
                        preserveWhitespaces: false,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        /** @nocollapse */
        PageHeaderComponent.ctorParameters = function () { return [
            { type: theme.SettingsService },
            { type: core.Renderer2 },
            { type: router.Router },
            { type: theme.MenuService },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [theme.ALAIN_I18N_TOKEN,] }] },
            { type: theme.TitleService, decorators: [{ type: core.Optional }, { type: core.Inject, args: [theme.TitleService,] }] },
            { type: reuseTab.ReuseTabService, decorators: [{ type: core.Optional }, { type: core.Inject, args: [reuseTab.ReuseTabService,] }] },
            { type: core.ChangeDetectorRef },
            { type: util.AlainConfigService }
        ]; };
        PageHeaderComponent.propDecorators = {
            conTpl: [{ type: core.ViewChild, args: ['conTpl', { static: false },] }],
            affix: [{ type: core.ViewChild, args: ['affix', { static: false },] }],
            title: [{ type: core.Input }],
            loading: [{ type: core.Input }],
            wide: [{ type: core.Input }],
            home: [{ type: core.Input }],
            homeLink: [{ type: core.Input }],
            homeI18n: [{ type: core.Input }],
            autoBreadcrumb: [{ type: core.Input }],
            autoTitle: [{ type: core.Input }],
            syncTitle: [{ type: core.Input }],
            fixed: [{ type: core.Input }],
            fixedOffsetTop: [{ type: core.Input }],
            breadcrumb: [{ type: core.Input }],
            recursiveBreadcrumb: [{ type: core.Input }],
            logo: [{ type: core.Input }],
            action: [{ type: core.Input }],
            content: [{ type: core.Input }],
            extra: [{ type: core.Input }],
            tab: [{ type: core.Input }]
        };
        __decorate([
            util.InputBoolean(),
            __metadata("design:type", Object)
        ], PageHeaderComponent.prototype, "loading", void 0);
        __decorate([
            util.InputBoolean(),
            __metadata("design:type", Object)
        ], PageHeaderComponent.prototype, "wide", void 0);
        __decorate([
            util.InputBoolean(),
            __metadata("design:type", Boolean)
        ], PageHeaderComponent.prototype, "autoBreadcrumb", void 0);
        __decorate([
            util.InputBoolean(),
            __metadata("design:type", Boolean)
        ], PageHeaderComponent.prototype, "autoTitle", void 0);
        __decorate([
            util.InputBoolean(),
            __metadata("design:type", Boolean)
        ], PageHeaderComponent.prototype, "syncTitle", void 0);
        __decorate([
            util.InputBoolean(),
            __metadata("design:type", Boolean)
        ], PageHeaderComponent.prototype, "fixed", void 0);
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Number)
        ], PageHeaderComponent.prototype, "fixedOffsetTop", void 0);
        __decorate([
            util.InputBoolean(),
            __metadata("design:type", Boolean)
        ], PageHeaderComponent.prototype, "recursiveBreadcrumb", void 0);
        return PageHeaderComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        PageHeaderComponent.prototype.inited;
        /**
         * @type {?}
         * @private
         */
        PageHeaderComponent.prototype.unsubscribe$;
        /**
         * @type {?}
         * @private
         */
        PageHeaderComponent.prototype.conTpl;
        /**
         * @type {?}
         * @private
         */
        PageHeaderComponent.prototype.affix;
        /**
         * @type {?}
         * @private
         */
        PageHeaderComponent.prototype._menus;
        /** @type {?} */
        PageHeaderComponent.prototype._titleVal;
        /** @type {?} */
        PageHeaderComponent.prototype.paths;
        /** @type {?} */
        PageHeaderComponent.prototype._title;
        /** @type {?} */
        PageHeaderComponent.prototype._titleTpl;
        /** @type {?} */
        PageHeaderComponent.prototype.loading;
        /** @type {?} */
        PageHeaderComponent.prototype.wide;
        /** @type {?} */
        PageHeaderComponent.prototype.home;
        /** @type {?} */
        PageHeaderComponent.prototype.homeLink;
        /** @type {?} */
        PageHeaderComponent.prototype.homeI18n;
        /** @type {?} */
        PageHeaderComponent.prototype.autoBreadcrumb;
        /** @type {?} */
        PageHeaderComponent.prototype.autoTitle;
        /** @type {?} */
        PageHeaderComponent.prototype.syncTitle;
        /** @type {?} */
        PageHeaderComponent.prototype.fixed;
        /** @type {?} */
        PageHeaderComponent.prototype.fixedOffsetTop;
        /** @type {?} */
        PageHeaderComponent.prototype.breadcrumb;
        /** @type {?} */
        PageHeaderComponent.prototype.recursiveBreadcrumb;
        /** @type {?} */
        PageHeaderComponent.prototype.logo;
        /** @type {?} */
        PageHeaderComponent.prototype.action;
        /** @type {?} */
        PageHeaderComponent.prototype.content;
        /** @type {?} */
        PageHeaderComponent.prototype.extra;
        /** @type {?} */
        PageHeaderComponent.prototype.tab;
        /**
         * @type {?}
         * @private
         */
        PageHeaderComponent.prototype.renderer;
        /**
         * @type {?}
         * @private
         */
        PageHeaderComponent.prototype.router;
        /**
         * @type {?}
         * @private
         */
        PageHeaderComponent.prototype.menuSrv;
        /**
         * @type {?}
         * @private
         */
        PageHeaderComponent.prototype.i18nSrv;
        /**
         * @type {?}
         * @private
         */
        PageHeaderComponent.prototype.titleSrv;
        /**
         * @type {?}
         * @private
         */
        PageHeaderComponent.prototype.reuseSrv;
        /**
         * @type {?}
         * @private
         */
        PageHeaderComponent.prototype.cdr;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: page-header.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COMPONENTS = [PageHeaderComponent];
    var PageHeaderModule = /** @class */ (function () {
        function PageHeaderModule() {
        }
        PageHeaderModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, router.RouterModule, observers.ObserversModule, util.DelonUtilModule, affix.NzAffixModule, skeleton.NzSkeletonModule, breadcrumb.NzBreadCrumbModule],
                        declarations: __spread(COMPONENTS),
                        exports: __spread(COMPONENTS),
                    },] }
        ];
        return PageHeaderModule;
    }());

    exports.PageHeaderComponent = PageHeaderComponent;
    exports.PageHeaderModule = PageHeaderModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=pageHeader.umd.js.map
