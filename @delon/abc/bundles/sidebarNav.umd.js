/**
 * @license ng-alain(cipchk@qq.com) v11.10.4
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/bidi'), require('@angular/common'), require('@angular/core'), require('@angular/platform-browser'), require('@angular/router'), require('@delon/theme'), require('@delon/util/decorator'), require('@delon/util/token'), require('rxjs'), require('rxjs/operators'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/tooltip')) :
    typeof define === 'function' && define.amd ? define('@delon/abc/sidebar-nav', ['exports', '@angular/cdk/bidi', '@angular/common', '@angular/core', '@angular/platform-browser', '@angular/router', '@delon/theme', '@delon/util/decorator', '@delon/util/token', 'rxjs', 'rxjs/operators', 'ng-zorro-antd/icon', 'ng-zorro-antd/tooltip'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.abc = global.delon.abc || {}, global.delon.abc['sidebar-nav'] = {}), global.ng.cdk.bidi, global.ng.common, global.ng.core, global.ng.platformBrowser, global.ng.router, global.delon.theme, global.decorator, global.token, global.rxjs, global.rxjs.operators, global['ng-zorro-antd/icon'], global['ng-zorro-antd/tooltip']));
}(this, (function (exports, bidi, common, core, platformBrowser, router, theme, decorator, token, rxjs, operators, icon, tooltip) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || from);
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    var SHOWCLS = 'sidebar-nav__floating-show';
    var FLOATINGCLS = 'sidebar-nav__floating';
    /**
     * @deprecated Will be removed in 12.0.0, Pls used `layout-default` instead
     */
    var SidebarNavComponent = /** @class */ (function () {
        function SidebarNavComponent(menuSrv, settings, router, render, cdr, ngZone, sanitizer, doc, win, directionality) {
            this.menuSrv = menuSrv;
            this.settings = settings;
            this.router = router;
            this.render = render;
            this.cdr = cdr;
            this.ngZone = ngZone;
            this.sanitizer = sanitizer;
            this.doc = doc;
            this.win = win;
            this.directionality = directionality;
            this.destroy$ = new rxjs.Subject();
            this.list = [];
            this.dir = 'ltr';
            this.disabledAcl = false;
            this.autoCloseUnderPad = true;
            this.recursivePath = true;
            this.openStrictly = false;
            this.maxLevelIcon = 3;
            this.select = new core.EventEmitter();
        }
        Object.defineProperty(SidebarNavComponent.prototype, "collapsed", {
            get: function () {
                return this.settings.layout.collapsed;
            },
            enumerable: false,
            configurable: true
        });
        SidebarNavComponent.prototype.getLinkNode = function (node) {
            node = node.nodeName === 'A' ? node : node.parentNode;
            return node.nodeName !== 'A' ? null : node;
        };
        SidebarNavComponent.prototype.floatingClickHandle = function (e) {
            e.stopPropagation();
            var linkNode = this.getLinkNode(e.target);
            if (linkNode == null) {
                return false;
            }
            var id = +linkNode.dataset.id;
            // Should be ingore children title trigger event
            if (isNaN(id)) {
                return false;
            }
            var item;
            this.menuSrv.visit(this.list, function (i) {
                if (!item && i._id === id) {
                    item = i;
                }
            });
            this.to(item);
            this.hideAll();
            e.preventDefault();
            return false;
        };
        SidebarNavComponent.prototype.clearFloating = function () {
            if (!this.floatingEl)
                return;
            this.floatingEl.removeEventListener('click', this.floatingClickHandle.bind(this));
            // fix ie: https://github.com/ng-alain/delon/issues/52
            if (this.floatingEl.hasOwnProperty('remove')) {
                this.floatingEl.remove();
            }
            else if (this.floatingEl.parentNode) {
                this.floatingEl.parentNode.removeChild(this.floatingEl);
            }
        };
        SidebarNavComponent.prototype.genFloating = function () {
            this.clearFloating();
            this.floatingEl = this.render.createElement('div');
            this.floatingEl.classList.add(FLOATINGCLS + '-container');
            this.floatingEl.addEventListener('click', this.floatingClickHandle.bind(this), false);
            this.bodyEl.appendChild(this.floatingEl);
        };
        SidebarNavComponent.prototype.genSubNode = function (linkNode, item) {
            var id = "_sidebar-nav-" + item._id;
            var childNode = item.badge ? linkNode.nextElementSibling.nextElementSibling : linkNode.nextElementSibling;
            var node = childNode.cloneNode(true);
            node.id = id;
            node.classList.add(FLOATINGCLS);
            node.addEventListener('mouseleave', function () {
                node.classList.remove(SHOWCLS);
            }, false);
            this.floatingEl.appendChild(node);
            return node;
        };
        SidebarNavComponent.prototype.hideAll = function () {
            var allNode = this.floatingEl.querySelectorAll('.' + FLOATINGCLS);
            // tslint:disable-next-line:prefer-for-of
            for (var i = 0; i < allNode.length; i++) {
                allNode[i].classList.remove(SHOWCLS);
            }
        };
        // calculate the node position values.
        SidebarNavComponent.prototype.calPos = function (linkNode, node) {
            var rect = linkNode.getBoundingClientRect();
            // bug: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/14721015/
            var scrollTop = Math.max(this.doc.documentElement.scrollTop, this.bodyEl.scrollTop);
            var docHeight = Math.max(this.doc.documentElement.clientHeight, this.bodyEl.clientHeight);
            var spacing = 5;
            var offsetHeight = -spacing;
            if (docHeight < rect.top + node.clientHeight) {
                offsetHeight = rect.top + node.clientHeight - docHeight + spacing;
            }
            node.style.top = rect.top + scrollTop - offsetHeight + "px";
            if (this.dir === 'rtl') {
                node.style.right = rect.width + spacing + "px";
            }
            else {
                node.style.left = rect.right + spacing + "px";
            }
        };
        SidebarNavComponent.prototype.showSubMenu = function (e, item) {
            var _this = this;
            if (this.collapsed !== true) {
                return;
            }
            this.ngZone.runOutsideAngular(function () {
                e.preventDefault();
                var linkNode = e.target;
                _this.genFloating();
                var subNode = _this.genSubNode(linkNode, item);
                _this.hideAll();
                subNode.classList.add(SHOWCLS);
                _this.calPos(linkNode, subNode);
            });
        };
        SidebarNavComponent.prototype.to = function (item) {
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
            this.ngZone.run(function () { return _this.router.navigateByUrl(item.link); });
        };
        SidebarNavComponent.prototype.toggleOpen = function (item) {
            if (!this.openStrictly) {
                this.menuSrv.visit(this.list, function (i) {
                    if (i !== item)
                        i._open = false;
                });
                var pItem = item._parent;
                while (pItem) {
                    pItem._open = true;
                    pItem = pItem._parent;
                }
            }
            item._open = !item._open;
            this.cdr.markForCheck();
        };
        SidebarNavComponent.prototype._click = function () {
            if (this.isPad && this.collapsed) {
                this.openAside(false);
                this.hideAll();
            }
        };
        SidebarNavComponent.prototype._docClick = function () {
            if (this.collapsed) {
                this.hideAll();
            }
        };
        SidebarNavComponent.prototype.openedByUrl = function (url) {
            var _b = this, menuSrv = _b.menuSrv, recursivePath = _b.recursivePath, openStrictly = _b.openStrictly;
            var findItem = menuSrv.getHit(this.menuSrv.menus, url, recursivePath, function (i) {
                i._selected = false;
                if (!openStrictly) {
                    i._open = false;
                }
            });
            if (findItem == null)
                return;
            do {
                findItem._selected = true;
                if (!openStrictly) {
                    findItem._open = true;
                }
                findItem = findItem._parent;
            } while (findItem);
        };
        SidebarNavComponent.prototype.ngOnInit = function () {
            var _this = this;
            var _a;
            var _b = this, doc = _b.doc, router$1 = _b.router, destroy$ = _b.destroy$, menuSrv = _b.menuSrv, settings = _b.settings, cdr = _b.cdr;
            this.bodyEl = doc.querySelector('body');
            this.openedByUrl(router$1.url);
            this.ngZone.runOutsideAngular(function () { return _this.genFloating(); });
            menuSrv.change.pipe(operators.takeUntil(destroy$)).subscribe(function (data) {
                menuSrv.visit(data, function (i, _p, depth) {
                    i._text = _this.sanitizer.bypassSecurityTrustHtml(i.text);
                    i._needIcon = depth <= _this.maxLevelIcon && !!i.icon;
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
                });
                _this.list = menuSrv.menus.filter(function (w) { return w._hidden !== true; });
                cdr.detectChanges();
            });
            router$1.events.pipe(operators.takeUntil(destroy$)).subscribe(function (e) {
                if (e instanceof router.NavigationEnd) {
                    _this.openedByUrl(e.urlAfterRedirects);
                    _this.underPad();
                    _this.cdr.detectChanges();
                }
            });
            settings.notify
                .pipe(operators.takeUntil(destroy$), operators.filter(function (t) { return t.type === 'layout' && t.name === 'collapsed'; }))
                .subscribe(function () { return _this.clearFloating(); });
            this.underPad();
            this.dir = this.directionality.value;
            (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(operators.takeUntil(destroy$)).subscribe(function (direction) {
                _this.dir = direction;
            });
        };
        SidebarNavComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
            this.clearFloating();
        };
        Object.defineProperty(SidebarNavComponent.prototype, "isPad", {
            // #region Under pad
            get: function () {
                return window.innerWidth < 768;
            },
            enumerable: false,
            configurable: true
        });
        SidebarNavComponent.prototype.underPad = function () {
            var _this = this;
            if (this.autoCloseUnderPad && this.isPad && !this.collapsed) {
                setTimeout(function () { return _this.openAside(true); });
            }
        };
        SidebarNavComponent.prototype.openAside = function (status) {
            this.settings.setLayout('collapsed', status);
        };
        return SidebarNavComponent;
    }());
    SidebarNavComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'sidebar-nav',
                    exportAs: 'sidebarNav',
                    template: "<ng-template #icon let-i>\n  <ng-container *ngIf=\"i\" [ngSwitch]=\"i.type\">\n    <i\n      *ngSwitchCase=\"'icon'\"\n      class=\"sidebar-nav__item-icon\"\n      nz-icon\n      [nzType]=\"i.value\"\n      [nzTheme]=\"i.theme\"\n      [nzSpin]=\"i.spin\"\n      [nzTwotoneColor]=\"i.twoToneColor\"\n      [nzIconfont]=\"i.iconfont\"\n      [nzRotate]=\"i.rotate\"\n    ></i>\n    <i *ngSwitchCase=\"'iconfont'\" class=\"sidebar-nav__item-icon\" nz-icon [nzIconfont]=\"i.iconfont\"></i>\n    <img *ngSwitchCase=\"'img'\" [src]=\"i.value\" class=\"sidebar-nav__item-icon sidebar-nav__item-img\" />\n    <i *ngSwitchDefault class=\"sidebar-nav__item-icon {{ i.value }}\"></i>\n  </ng-container>\n</ng-template>\n<ng-template #tree let-ls>\n  <ng-container *ngFor=\"let i of ls\">\n    <li *ngIf=\"i._hidden !== true\" class=\"sidebar-nav__item\" [class.sidebar-nav__selected]=\"i._selected\" [class.sidebar-nav__open]=\"i._open\">\n      <!-- link -->\n      <a\n        *ngIf=\"i.children.length === 0\"\n        (click)=\"to(i)\"\n        [attr.data-id]=\"i._id\"\n        class=\"sidebar-nav__item-link\"\n        [ngClass]=\"{ 'sidebar-nav__item-disabled': i.disabled }\"\n      >\n        <ng-container *ngIf=\"i._needIcon\">\n          <ng-container *ngIf=\"!collapsed\">\n            <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{ $implicit: i.icon }\"></ng-template>\n          </ng-container>\n          <span *ngIf=\"collapsed\" nz-tooltip nzTooltipPlacement=\"right\" [nzTooltipTitle]=\"i.text\">\n            <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{ $implicit: i.icon }\"></ng-template>\n          </span>\n        </ng-container>\n        <span class=\"sidebar-nav__item-text\" [innerHTML]=\"i._text\" [attr.title]=\"i.text\"></span>\n      </a>\n      <!-- has children link -->\n      <a *ngIf=\"i.children.length > 0\" (click)=\"toggleOpen(i)\" (mouseenter)=\"showSubMenu($event, i)\" class=\"sidebar-nav__item-link\">\n        <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{ $implicit: i.icon }\"></ng-template>\n        <span class=\"sidebar-nav__item-text\" [innerHTML]=\"i._text\" [attr.title]=\"i.text\"></span>\n        <i class=\"sidebar-nav__sub-arrow\"></i>\n      </a>\n      <!-- badge -->\n      <div *ngIf=\"i.badge\" [attr.title]=\"i.badge\" class=\"badge badge-{{ i.badgeStatus }}\" [class.badge-dot]=\"i.badgeDot\">\n        <em>{{ i.badge }}</em>\n      </div>\n      <ul *ngIf=\"i.children.length > 0\" class=\"sidebar-nav sidebar-nav__sub sidebar-nav__depth{{ i._depth }}\">\n        <ng-template [ngTemplateOutlet]=\"tree\" [ngTemplateOutletContext]=\"{ $implicit: i.children }\"></ng-template>\n      </ul>\n    </li>\n  </ng-container>\n</ng-template>\n<ul class=\"sidebar-nav\">\n  <ng-container *ngFor=\"let group of list\">\n    <li class=\"sidebar-nav__item sidebar-nav__group-title\" *ngIf=\"group.group\">\n      <span [innerHTML]=\"group._text\"></span>\n    </li>\n    <ng-template [ngTemplateOutlet]=\"tree\" [ngTemplateOutletContext]=\"{ $implicit: group.children }\"></ng-template>\n  </ng-container>\n</ul>\n",
                    host: {
                        '(click)': '_click()',
                        '(document:click)': '_docClick()',
                    },
                    preserveWhitespaces: false,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None
                },] }
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
        { type: undefined, decorators: [{ type: core.Inject, args: [token.WINDOW,] }] },
        { type: bidi.Directionality, decorators: [{ type: core.Optional }] }
    ]; };
    SidebarNavComponent.propDecorators = {
        disabledAcl: [{ type: core.Input }],
        autoCloseUnderPad: [{ type: core.Input }],
        recursivePath: [{ type: core.Input }],
        openStrictly: [{ type: core.Input }],
        maxLevelIcon: [{ type: core.Input }],
        select: [{ type: core.Output }]
    };
    __decorate([
        decorator.InputBoolean(),
        __metadata("design:type", Object)
    ], SidebarNavComponent.prototype, "disabledAcl", void 0);
    __decorate([
        decorator.InputBoolean(),
        __metadata("design:type", Object)
    ], SidebarNavComponent.prototype, "autoCloseUnderPad", void 0);
    __decorate([
        decorator.InputBoolean(),
        __metadata("design:type", Object)
    ], SidebarNavComponent.prototype, "recursivePath", void 0);
    __decorate([
        decorator.InputBoolean(),
        __metadata("design:type", Object)
    ], SidebarNavComponent.prototype, "openStrictly", void 0);
    __decorate([
        decorator.InputNumber(),
        __metadata("design:type", Object)
    ], SidebarNavComponent.prototype, "maxLevelIcon", void 0);

    var SidebarNavModule = /** @class */ (function () {
        function SidebarNavModule() {
        }
        return SidebarNavModule;
    }());
    SidebarNavModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule, router.RouterModule, icon.NzIconModule, tooltip.NzToolTipModule],
                    declarations: [SidebarNavComponent],
                    exports: [SidebarNavComponent],
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.SidebarNavComponent = SidebarNavComponent;
    exports.SidebarNavModule = SidebarNavModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sidebarNav.umd.js.map
