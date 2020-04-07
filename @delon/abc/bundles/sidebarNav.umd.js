/**
 * @license ng-alain(cipchk@qq.com) v8.9.2
 * (c) 2019 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/platform-browser'), require('@angular/common'), require('@angular/core'), require('@angular/router'), require('@delon/theme'), require('@delon/util'), require('rxjs'), require('rxjs/operators'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/tooltip')) :
    typeof define === 'function' && define.amd ? define('@delon/abc/sidebar-nav', ['exports', '@angular/platform-browser', '@angular/common', '@angular/core', '@angular/router', '@delon/theme', '@delon/util', 'rxjs', 'rxjs/operators', 'ng-zorro-antd/icon', 'ng-zorro-antd/tooltip'], factory) :
    (global = global || self, factory((global.delon = global.delon || {}, global.delon.abc = global.delon.abc || {}, global.delon.abc['sidebar-nav'] = {}), global.ng.platformBrowser, global.ng.common, global.ng.core, global.ng.router, global.delon.theme, global.delon.util, global.rxjs, global.rxjs.operators, global['ng-zorro-antd/icon'], global['ng-zorro-antd/tooltip']));
}(this, (function (exports, platformBrowser, common, core, router, theme, util, rxjs, operators, icon, tooltip) { 'use strict';

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
     * Generated from: sidebar-nav.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var SHOWCLS = 'sidebar-nav__floating-show';
    /** @type {?} */
    var FLOATINGCLS = 'sidebar-nav__floating';
    var SidebarNavComponent = /** @class */ (function () {
        function SidebarNavComponent(menuSrv, settings, router, render, cdr, ngZone, sanitizer, doc, win) {
            this.menuSrv = menuSrv;
            this.settings = settings;
            this.router = router;
            this.render = render;
            this.cdr = cdr;
            this.ngZone = ngZone;
            this.sanitizer = sanitizer;
            this.doc = doc;
            this.win = win;
            this.unsubscribe$ = new rxjs.Subject();
            this.list = [];
            this.disabledAcl = false;
            this.autoCloseUnderPad = true;
            this.recursivePath = true;
            this.openStrictly = false;
            this.select = new core.EventEmitter();
        }
        Object.defineProperty(SidebarNavComponent.prototype, "collapsed", {
            get: /**
             * @return {?}
             */
            function () {
                return this.settings.layout.collapsed;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @private
         * @param {?} node
         * @return {?}
         */
        SidebarNavComponent.prototype.getLinkNode = /**
         * @private
         * @param {?} node
         * @return {?}
         */
        function (node) {
            node = node.nodeName === 'A' ? node : ((/** @type {?} */ (node.parentNode)));
            return node.nodeName !== 'A' ? null : node;
        };
        /**
         * @private
         * @param {?} e
         * @return {?}
         */
        SidebarNavComponent.prototype.floatingAreaClickHandle = /**
         * @private
         * @param {?} e
         * @return {?}
         */
        function (e) {
            e.stopPropagation();
            /** @type {?} */
            var linkNode = this.getLinkNode((/** @type {?} */ (e.target)));
            if (linkNode == null) {
                return false;
            }
            /** @type {?} */
            var id = +(/** @type {?} */ ((/** @type {?} */ (linkNode.dataset)).id));
            // Should be ingore children title trigger event
            if (isNaN(id)) {
                return false;
            }
            /** @type {?} */
            var item;
            this.menuSrv.visit(this.list, (/**
             * @param {?} i
             * @return {?}
             */
            function (i) {
                if (!item && i.__id === id) {
                    item = i;
                }
            }));
            this.to((/** @type {?} */ (item)));
            this.hideAll();
            e.preventDefault();
            return false;
        };
        /**
         * @private
         * @return {?}
         */
        SidebarNavComponent.prototype.clearFloatingContainer = /**
         * @private
         * @return {?}
         */
        function () {
            if (!this.floatingEl)
                return;
            this.floatingEl.removeEventListener('click', this.floatingAreaClickHandle.bind(this));
            // fix ie: https://github.com/ng-alain/delon/issues/52
            if (this.floatingEl.hasOwnProperty('remove')) {
                this.floatingEl.remove();
            }
            else if (this.floatingEl.parentNode) {
                this.floatingEl.parentNode.removeChild(this.floatingEl);
            }
        };
        /**
         * @private
         * @return {?}
         */
        SidebarNavComponent.prototype.genFloatingContainer = /**
         * @private
         * @return {?}
         */
        function () {
            this.clearFloatingContainer();
            this.floatingEl = this.render.createElement('div');
            this.floatingEl.classList.add(FLOATINGCLS + '-container');
            this.floatingEl.addEventListener('click', this.floatingAreaClickHandle.bind(this), false);
            this.bodyEl.appendChild(this.floatingEl);
        };
        /**
         * @private
         * @param {?} linkNode
         * @param {?} item
         * @return {?}
         */
        SidebarNavComponent.prototype.genSubNode = /**
         * @private
         * @param {?} linkNode
         * @param {?} item
         * @return {?}
         */
        function (linkNode, item) {
            /** @type {?} */
            var id = "_sidebar-nav-" + item.__id;
            /** @type {?} */
            var childNode = item.badge ? (/** @type {?} */ ((/** @type {?} */ (linkNode.nextElementSibling)).nextElementSibling)) : (/** @type {?} */ (linkNode.nextElementSibling));
            /** @type {?} */
            var node = (/** @type {?} */ (childNode.cloneNode(true)));
            node.id = id;
            node.classList.add(FLOATINGCLS);
            node.addEventListener('mouseleave', (/**
             * @return {?}
             */
            function () {
                node.classList.remove(SHOWCLS);
            }), false);
            this.floatingEl.appendChild(node);
            return node;
        };
        /**
         * @private
         * @return {?}
         */
        SidebarNavComponent.prototype.hideAll = /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var allNode = this.floatingEl.querySelectorAll('.' + FLOATINGCLS);
            // tslint:disable-next-line:prefer-for-of
            for (var i = 0; i < allNode.length; i++) {
                allNode[i].classList.remove(SHOWCLS);
            }
        };
        // calculate the node position values.
        // calculate the node position values.
        /**
         * @private
         * @param {?} linkNode
         * @param {?} node
         * @return {?}
         */
        SidebarNavComponent.prototype.calPos = 
        // calculate the node position values.
        /**
         * @private
         * @param {?} linkNode
         * @param {?} node
         * @return {?}
         */
        function (linkNode, node) {
            /** @type {?} */
            var rect = linkNode.getBoundingClientRect();
            // bug: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/14721015/
            /** @type {?} */
            var scrollTop = Math.max(this.doc.documentElement.scrollTop, this.bodyEl.scrollTop);
            /** @type {?} */
            var docHeight = Math.max(this.doc.documentElement.clientHeight, this.bodyEl.clientHeight);
            /** @type {?} */
            var offsetHeight = 0;
            if (docHeight < rect.top + node.clientHeight) {
                offsetHeight = rect.top + node.clientHeight - docHeight;
            }
            node.style.top = rect.top + scrollTop - offsetHeight + "px";
            node.style.left = rect.right + 5 + "px";
        };
        /**
         * @param {?} e
         * @param {?} item
         * @return {?}
         */
        SidebarNavComponent.prototype.showSubMenu = /**
         * @param {?} e
         * @param {?} item
         * @return {?}
         */
        function (e, item) {
            var _this = this;
            if (this.collapsed !== true) {
                return;
            }
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                e.preventDefault();
                /** @type {?} */
                var linkNode = (/** @type {?} */ (e.target));
                _this.genFloatingContainer();
                /** @type {?} */
                var subNode = _this.genSubNode((/** @type {?} */ (linkNode)), item);
                _this.hideAll();
                subNode.classList.add(SHOWCLS);
                _this.calPos((/** @type {?} */ (linkNode)), subNode);
            }));
        };
        /**
         * @param {?} item
         * @return {?}
         */
        SidebarNavComponent.prototype.to = /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            var _this = this;
            this.select.emit(item);
            if (item.disabled)
                return;
            if (item.externalLink) {
                if (item.target === '_blank') {
                    this.win.open(item.externalLink);
                }
                else {
                    this.win.location.href = item.externalLink;
                }
                return;
            }
            this.ngZone.run((/**
             * @return {?}
             */
            function () { return _this.router.navigateByUrl((/** @type {?} */ (item.link))); }));
        };
        /**
         * @param {?} item
         * @return {?}
         */
        SidebarNavComponent.prototype.toggleOpen = /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            if (!this.openStrictly) {
                this.menuSrv.visit(this.list, (/**
                 * @param {?} i
                 * @return {?}
                 */
                function (i) {
                    if (i !== item)
                        i._open = false;
                }));
                /** @type {?} */
                var pItem = item.__parent;
                while (pItem) {
                    pItem._open = true;
                    pItem = pItem.__parent;
                }
            }
            item._open = !item._open;
            this.cdr.markForCheck();
        };
        /**
         * @return {?}
         */
        SidebarNavComponent.prototype._click = /**
         * @return {?}
         */
        function () {
            if (this.isPad && this.collapsed) {
                this.openAside(false);
                this.hideAll();
            }
        };
        /**
         * @return {?}
         */
        SidebarNavComponent.prototype._docClick = /**
         * @return {?}
         */
        function () {
            if (this.collapsed) {
                this.hideAll();
            }
        };
        /**
         * @private
         * @param {?} url
         * @return {?}
         */
        SidebarNavComponent.prototype.openedByUrl = /**
         * @private
         * @param {?} url
         * @return {?}
         */
        function (url) {
            var _a = this, menuSrv = _a.menuSrv, recursivePath = _a.recursivePath, openStrictly = _a.openStrictly;
            /** @type {?} */
            var findItem = menuSrv.getHit(this.menuSrv.menus, (/** @type {?} */ (url)), recursivePath, (/**
             * @param {?} i
             * @return {?}
             */
            function (i) {
                i._selected = false;
                if (!openStrictly) {
                    i._open = false;
                }
            }));
            if (findItem == null)
                return;
            do {
                findItem._selected = true;
                if (!openStrictly) {
                    findItem._open = true;
                }
                findItem = findItem.__parent;
            } while (findItem);
        };
        /**
         * @return {?}
         */
        SidebarNavComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            var _a = this, doc = _a.doc, router$1 = _a.router, unsubscribe$ = _a.unsubscribe$, menuSrv = _a.menuSrv, cdr = _a.cdr;
            this.bodyEl = doc.querySelector('body');
            this.openedByUrl(router$1.url);
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () { return _this.genFloatingContainer(); }));
            menuSrv.change.pipe(operators.takeUntil(unsubscribe$)).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                menuSrv.visit(data, (/**
                 * @param {?} i
                 * @param {?} _p
                 * @param {?} depth
                 * @return {?}
                 */
                function (i, _p, depth) {
                    i._text = _this.sanitizer.bypassSecurityTrustHtml((/** @type {?} */ (i.text)));
                    i._needIcon = (/** @type {?} */ (depth)) <= 1;
                    if (!i._aclResult) {
                        if (_this.disabledAcl) {
                            i.disabled = true;
                        }
                        else {
                            i._hidden = true;
                        }
                    }
                    if (_this.openStrictly) {
                        i._open = i.open != null ? i.open : false;
                    }
                }));
                _this.list = menuSrv.menus;
                cdr.detectChanges();
            }));
            router$1.events.pipe(operators.takeUntil(unsubscribe$)).subscribe((/**
             * @param {?} e
             * @return {?}
             */
            function (e) {
                if (e instanceof router.NavigationEnd) {
                    _this.openedByUrl(e.urlAfterRedirects);
                    _this.underPad();
                    _this.cdr.detectChanges();
                }
            }));
            this.underPad();
        };
        /**
         * @return {?}
         */
        SidebarNavComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            var unsubscribe$ = this.unsubscribe$;
            unsubscribe$.next();
            unsubscribe$.complete();
            this.clearFloatingContainer();
        };
        Object.defineProperty(SidebarNavComponent.prototype, "isPad", {
            // #region Under pad
            get: 
            // #region Under pad
            /**
             * @private
             * @return {?}
             */
            function () {
                return window.innerWidth < 768;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @private
         * @return {?}
         */
        SidebarNavComponent.prototype.underPad = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.autoCloseUnderPad && this.isPad && !this.collapsed) {
                setTimeout((/**
                 * @return {?}
                 */
                function () { return _this.openAside(true); }));
            }
        };
        /**
         * @private
         * @param {?} status
         * @return {?}
         */
        SidebarNavComponent.prototype.openAside = /**
         * @private
         * @param {?} status
         * @return {?}
         */
        function (status) {
            this.settings.setLayout('collapsed', status);
        };
        SidebarNavComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'sidebar-nav',
                        exportAs: 'sidebarNav',
                        template: "<ng-template #icon let-i>\n  <ng-container *ngIf=\"i\" [ngSwitch]=\"i.type\">\n    <i *ngSwitchCase=\"'icon'\" class=\"sidebar-nav__item-icon\" nz-icon [nzType]=\"i.value\" [nzTheme]=\"i.theme\"\n      [nzSpin]=\"i.spin\" [nzTwotoneColor]=\"i.twoToneColor\" [nzIconfont]=\"i.iconfont\"></i>\n    <i *ngSwitchCase=\"'iconfont'\" class=\"sidebar-nav__item-icon\" nz-icon [nzIconfont]=\"i.iconfont\"></i>\n    <img *ngSwitchCase=\"'img'\" [src]=\"i.value\" class=\"sidebar-nav__item-icon sidebar-nav__item-img\">\n    <i *ngSwitchDefault class=\"sidebar-nav__item-icon {{ i.value }}\"></i>\n  </ng-container>\n</ng-template>\n<ng-template #item let-i>\n  <!-- link -->\n  <a *ngIf=\"i._type <= 2\" (click)=\"to(i)\" [attr.data-id]=\"i.__id\" class=\"sidebar-nav__item-link\"\n    [ngClass]=\"{'sidebar-nav__item-disabled': i.disabled}\">\n    <ng-container *ngIf=\"i._needIcon\">\n      <ng-container *ngIf=\"!collapsed\">\n        <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{$implicit: i.icon}\"></ng-template>\n      </ng-container>\n      <span *ngIf=\"collapsed\" nz-tooltip nzTooltipPlacement=\"right\" [nzTooltipTitle]=\"i.text\">\n        <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{$implicit: i.icon}\"></ng-template>\n      </span>\n    </ng-container>\n    <span class=\"sidebar-nav__item-text\" [innerHTML]=\"i._text\"></span>\n  </a>\n  <!-- has children link -->\n  <a *ngIf=\"i._type === 3\" (click)=\"toggleOpen(i)\" (mouseenter)=\"showSubMenu($event, i)\" class=\"sidebar-nav__item-link\">\n    <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{$implicit: i.icon}\"></ng-template>\n    <span class=\"sidebar-nav__item-text\" [innerHTML]=\"i._text\"></span>\n    <i class=\"sidebar-nav__sub-arrow\"></i>\n  </a>\n  <!-- badge -->\n  <div *ngIf=\"i.badge\" [attr.title]=\"i.badge\" class=\"badge badge-{{i.badgeStatus}}\" [class.badge-dot]=\"i.badgeDot\">\n    <em>{{i.badge}}</em>\n  </div>\n</ng-template>\n<ul class=\"sidebar-nav\">\n  <ng-container *ngFor=\"let group of list\">\n    <ng-container *ngIf=\"group._hidden !== true\">\n      <li class=\"sidebar-nav__item sidebar-nav__group-title\" *ngIf=\"group.group\">\n        <span [innerHTML]=\"group._text\"></span>\n      </li>\n      <ng-container *ngFor=\"let child1 of group.children\">\n        <li *ngIf=\"child1._hidden !== true\" class=\"sidebar-nav__item\" [class.sidebar-nav__selected]=\"child1._selected\"\n          [class.sidebar-nav__open]=\"child1._open\">\n          <ng-template [ngTemplateOutlet]=\"item\" [ngTemplateOutletContext]=\"{$implicit: child1}\"></ng-template>\n          <!-- Level 2 -->\n          <ul *ngIf=\"child1._type === 3\" class=\"sidebar-nav sidebar-nav__sub sidebar-nav__depth{{child1._depth}}\">\n            <ng-container *ngFor=\"let child2 of child1.children\">\n              <li *ngIf=\"child2._hidden !== true\" class=\"sidebar-nav__item\"\n                [class.sidebar-nav__selected]=\"child2._selected\" [class.sidebar-nav__open]=\"child2._open\">\n                <ng-template [ngTemplateOutlet]=\"item\" [ngTemplateOutletContext]=\"{$implicit: child2}\"></ng-template>\n                <!-- Level 3 -->\n                <ul *ngIf=\"child2._type === 3\" class=\"sidebar-nav sidebar-nav__sub sidebar-nav__depth{{child2._depth}}\">\n                  <ng-container *ngFor=\"let child3 of child2.children\">\n                    <li *ngIf=\"child3._hidden !== true\" class=\"sidebar-nav__item\"\n                      [class.sidebar-nav__selected]=\"child3._selected\" [class.sidebar-nav__open]=\"child3._open\">\n                      <ng-template [ngTemplateOutlet]=\"item\" [ngTemplateOutletContext]=\"{$implicit: child3}\">\n                      </ng-template>\n                    </li>\n                  </ng-container>\n                </ul>\n              </li>\n            </ng-container>\n          </ul>\n        </li>\n      </ng-container>\n    </ng-container>\n  </ng-container>\n</ul>\n",
                        host: {
                            '(click)': '_click()',
                            '(document:click)': '_docClick()',
                        },
                        preserveWhitespaces: false,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        /** @nocollapse */
        SidebarNavComponent.ctorParameters = function () { return [
            { type: theme.MenuService },
            { type: theme.SettingsService },
            { type: router.Router },
            { type: core.Renderer2 },
            { type: core.ChangeDetectorRef },
            { type: core.NgZone },
            { type: platformBrowser.DomSanitizer },
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: Window, decorators: [{ type: core.Inject, args: [theme.WINDOW,] }] }
        ]; };
        SidebarNavComponent.propDecorators = {
            disabledAcl: [{ type: core.Input }],
            autoCloseUnderPad: [{ type: core.Input }],
            recursivePath: [{ type: core.Input }],
            openStrictly: [{ type: core.Input }],
            select: [{ type: core.Output }]
        };
        __decorate([
            util.InputBoolean(),
            __metadata("design:type", Object)
        ], SidebarNavComponent.prototype, "disabledAcl", void 0);
        __decorate([
            util.InputBoolean(),
            __metadata("design:type", Object)
        ], SidebarNavComponent.prototype, "autoCloseUnderPad", void 0);
        __decorate([
            util.InputBoolean(),
            __metadata("design:type", Object)
        ], SidebarNavComponent.prototype, "recursivePath", void 0);
        __decorate([
            util.InputBoolean(),
            __metadata("design:type", Object)
        ], SidebarNavComponent.prototype, "openStrictly", void 0);
        return SidebarNavComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        SidebarNavComponent.prototype.bodyEl;
        /**
         * @type {?}
         * @private
         */
        SidebarNavComponent.prototype.unsubscribe$;
        /**
         * @type {?}
         * @private
         */
        SidebarNavComponent.prototype.floatingEl;
        /** @type {?} */
        SidebarNavComponent.prototype.list;
        /** @type {?} */
        SidebarNavComponent.prototype.disabledAcl;
        /** @type {?} */
        SidebarNavComponent.prototype.autoCloseUnderPad;
        /** @type {?} */
        SidebarNavComponent.prototype.recursivePath;
        /** @type {?} */
        SidebarNavComponent.prototype.openStrictly;
        /** @type {?} */
        SidebarNavComponent.prototype.select;
        /**
         * @type {?}
         * @private
         */
        SidebarNavComponent.prototype.menuSrv;
        /**
         * @type {?}
         * @private
         */
        SidebarNavComponent.prototype.settings;
        /**
         * @type {?}
         * @private
         */
        SidebarNavComponent.prototype.router;
        /**
         * @type {?}
         * @private
         */
        SidebarNavComponent.prototype.render;
        /**
         * @type {?}
         * @private
         */
        SidebarNavComponent.prototype.cdr;
        /**
         * @type {?}
         * @private
         */
        SidebarNavComponent.prototype.ngZone;
        /**
         * @type {?}
         * @private
         */
        SidebarNavComponent.prototype.sanitizer;
        /**
         * @type {?}
         * @private
         */
        SidebarNavComponent.prototype.doc;
        /**
         * @type {?}
         * @private
         */
        SidebarNavComponent.prototype.win;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: sidebar-nav.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SidebarNavModule = /** @class */ (function () {
        function SidebarNavModule() {
        }
        SidebarNavModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, router.RouterModule, icon.NzIconModule, tooltip.NzToolTipModule, util.DelonUtilModule],
                        declarations: [SidebarNavComponent],
                        exports: [SidebarNavComponent],
                    },] }
        ];
        return SidebarNavModule;
    }());

    exports.SidebarNavComponent = SidebarNavComponent;
    exports.SidebarNavModule = SidebarNavModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sidebarNav.umd.js.map
