/**
 * @license ng-alain(cipchk@qq.com) v11.3.1
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@delon/util'), require('@angular/common'), require('ng-zorro-antd/tooltip'), require('@delon/theme'), require('ng-zorro-antd/core/outlet'), require('ng-zorro-antd/icon'), require('@angular/cdk/observers')) :
    typeof define === 'function' && define.amd ? define('@delon/abc/sv', ['exports', '@angular/core', '@delon/util', '@angular/common', 'ng-zorro-antd/tooltip', '@delon/theme', 'ng-zorro-antd/core/outlet', 'ng-zorro-antd/icon', '@angular/cdk/observers'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.abc = global.delon.abc || {}, global.delon.abc.sv = {}), global.ng.core, global.delon.util, global.ng.common, global['ng-zorro-antd/tooltip'], global.i2$1, global['ng-zorro-antd/core/outlet'], global['ng-zorro-antd/icon'], global.ng.cdk.observers));
}(this, (function (exports, i0, i1, i1$1, i2, i2$1, i3, i6, i7) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);

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
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
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

    var SVContainerComponent = /** @class */ (function () {
        function SVContainerComponent(configSrv) {
            configSrv.attach(this, 'sv', {
                size: 'large',
                gutter: 32,
                layout: 'horizontal',
                col: 3,
                default: true,
            });
        }
        return SVContainerComponent;
    }());
    /** @nocollapse */ SVContainerComponent.ɵfac = function SVContainerComponent_Factory(t) { return new (t || SVContainerComponent)(i0.ɵɵdirectiveInject(i1.AlainConfigService)); };
    /** @nocollapse */ SVContainerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ version: "11.1.1", type: SVContainerComponent, selector: "sv-container, [sv-container]", inputs: { title: "title", size: "size", gutter: "gutter", layout: "layout", labelWidth: "labelWidth", col: "col", default: "default" }, host: { properties: { "class.sv__container": "true", "class.sv__horizontal": "layout === 'horizontal'", "class.sv__vertical": "layout === 'vertical'", "class.sv__small": "size === 'small'", "class.sv__large": "size === 'large'", "class.clearfix": "true" } }, exportAs: ["svContainer"], ngImport: i0__namespace, template: "<div class=\"ant-row\" [ngStyle]=\"{ 'margin-left.px': -(gutter / 2), 'margin-right.px': -(gutter / 2) }\">\n  <sv-title *ngIf=\"title\">\n    <ng-container *nzStringTemplateOutlet=\"title\">{{ title }}</ng-container>\n  </sv-title>\n  <ng-content></ng-content>\n</div>\n", changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
    __decorate([
        i1.InputNumber(),
        __metadata("design:type", Number)
    ], SVContainerComponent.prototype, "gutter", void 0);
    __decorate([
        i1.InputNumber(),
        __metadata("design:type", Number)
    ], SVContainerComponent.prototype, "labelWidth", void 0);
    __decorate([
        i1.InputNumber(),
        __metadata("design:type", Number)
    ], SVContainerComponent.prototype, "col", void 0);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SVContainerComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'sv-container, [sv-container]',
                        exportAs: 'svContainer',
                        templateUrl: './sv-container.component.html',
                        host: {
                            '[class.sv__container]': 'true',
                            '[class.sv__horizontal]': "layout === 'horizontal'",
                            '[class.sv__vertical]': "layout === 'vertical'",
                            '[class.sv__small]': "size === 'small'",
                            '[class.sv__large]': "size === 'large'",
                            '[class.clearfix]': "true",
                        },
                        preserveWhitespaces: false,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                    }]
            }], function () { return [{ type: i1.AlainConfigService }]; }, { title: [{
                    type: i0.Input
                }], size: [{
                    type: i0.Input
                }], gutter: [{
                    type: i0.Input
                }], layout: [{
                    type: i0.Input
                }], labelWidth: [{
                    type: i0.Input
                }], col: [{
                    type: i0.Input
                }], default: [{
                    type: i0.Input
                }] });
    })();

    var SVTitleComponent = /** @class */ (function () {
        function SVTitleComponent(el, parent, ren) {
            this.parent = parent;
            this.ren = ren;
            if (parent == null) {
                throw new Error("[sv-title] must include 'sv-container' component");
            }
            this.el = el.nativeElement;
        }
        SVTitleComponent.prototype.setClass = function () {
            var gutter = this.parent.gutter;
            var el = this.el;
            this.ren.setStyle(el, 'padding-left', gutter / 2 + "px");
            this.ren.setStyle(el, 'padding-right', gutter / 2 + "px");
        };
        SVTitleComponent.prototype.ngOnInit = function () {
            this.setClass();
        };
        return SVTitleComponent;
    }());
    /** @nocollapse */ SVTitleComponent.ɵfac = function SVTitleComponent_Factory(t) { return new (t || SVTitleComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(SVContainerComponent, 9), i0.ɵɵdirectiveInject(i0.Renderer2)); };
    /** @nocollapse */ SVTitleComponent.ɵcmp = i0.ɵɵngDeclareComponent({ version: "11.1.1", type: SVTitleComponent, selector: "sv-title, [sv-title]", host: { properties: { "class.sv__title": "true" } }, exportAs: ["svTitle"], ngImport: i0__namespace, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SVTitleComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'sv-title, [sv-title]',
                        exportAs: 'svTitle',
                        template: '<ng-content></ng-content>',
                        host: {
                            '[class.sv__title]': 'true',
                        },
                        preserveWhitespaces: false,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                    }]
            }], function () {
            return [{ type: i0.ElementRef }, { type: SVContainerComponent, decorators: [{
                            type: i0.Host
                        }, {
                            type: i0.Optional
                        }] }, { type: i0.Renderer2 }];
        }, null);
    })();

    var SVValueComponent = /** @class */ (function () {
        function SVValueComponent() {
            this.size = 'default';
        }
        return SVValueComponent;
    }());
    /** @nocollapse */ SVValueComponent.ɵfac = function SVValueComponent_Factory(t) { return new (t || SVValueComponent)(); };
    /** @nocollapse */ SVValueComponent.ɵcmp = i0.ɵɵngDeclareComponent({ version: "11.1.1", type: SVValueComponent, selector: "sv-value, [sv-value]", inputs: { prefix: "prefix", unit: "unit", tooltip: "tooltip", size: "size" }, host: { properties: { "class.sv__value": "true", "class.sv__value-small": "size === 'small'", "class.sv__value-large": "size === 'large'" } }, exportAs: ["svValue"], ngImport: i0__namespace, template: "\n    <em *ngIf=\"prefix\" class=\"sv__value-prefix\" [innerHTML]=\"prefix\"></em>\n    <span nz-tooltip [nzTooltipTitle]=\"tooltip\" class=\"sv__value-text\"><ng-content></ng-content></span>\n    <em *ngIf=\"unit\" class=\"sv__value-unit\" [innerHTML]=\"unit\"></em>\n  ", isInline: true, directives: [{ type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipTitle", "nz-tooltip", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SVValueComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'sv-value, [sv-value]',
                        exportAs: 'svValue',
                        template: "\n    <em *ngIf=\"prefix\" class=\"sv__value-prefix\" [innerHTML]=\"prefix\"></em>\n    <span nz-tooltip [nzTooltipTitle]=\"tooltip\" class=\"sv__value-text\"><ng-content></ng-content></span>\n    <em *ngIf=\"unit\" class=\"sv__value-unit\" [innerHTML]=\"unit\"></em>\n  ",
                        host: {
                            '[class.sv__value]': 'true',
                            '[class.sv__value-small]': "size === 'small'",
                            '[class.sv__value-large]': "size === 'large'",
                        },
                        preserveWhitespaces: false,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                    }]
            }], null, { prefix: [{
                    type: i0.Input
                }], unit: [{
                    type: i0.Input
                }], tooltip: [{
                    type: i0.Input
                }], size: [{
                    type: i0.Input
                }] });
    })();

    var prefixCls = "sv";
    var SVComponent = /** @class */ (function () {
        function SVComponent(el, parent, rep, ren) {
            this.parent = parent;
            this.rep = rep;
            this.ren = ren;
            this.clsMap = [];
            if (parent == null) {
                throw new Error("[sv] must include 'sv-container' component");
            }
            this.el = el.nativeElement;
        }
        Object.defineProperty(SVComponent.prototype, "paddingValue", {
            // #endregion
            get: function () {
                return this.parent && this.parent.gutter / 2;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SVComponent.prototype, "labelWidth", {
            get: function () {
                var _a = this.parent, labelWidth = _a.labelWidth, layout = _a.layout;
                return layout === 'horizontal' ? labelWidth : null;
            },
            enumerable: false,
            configurable: true
        });
        SVComponent.prototype.setClass = function () {
            var _a = this, el = _a.el, ren = _a.ren, col = _a.col, clsMap = _a.clsMap, type = _a.type, rep = _a.rep;
            clsMap.forEach(function (cls) { return ren.removeClass(el, cls); });
            clsMap.length = 0;
            clsMap.push.apply(clsMap, __spread(rep.genCls(col != null ? col : this.parent.col)));
            clsMap.push(prefixCls + "__item");
            if (this.parent.labelWidth)
                clsMap.push(prefixCls + "__item-fixed");
            if (type)
                clsMap.push(prefixCls + "__type-" + type);
            clsMap.forEach(function (cls) { return ren.addClass(el, cls); });
        };
        SVComponent.prototype.ngAfterViewInit = function () {
            this.setClass();
            this.checkContent();
        };
        SVComponent.prototype.ngOnChanges = function () {
            this.setClass();
        };
        SVComponent.prototype.checkContent = function () {
            var conEl = this.conEl;
            var def = this.default;
            if (!(def != null ? def : this.parent.default)) {
                return;
            }
            var el = conEl.nativeElement;
            var cls = "sv__default";
            if (el.classList.contains(cls)) {
                el.classList.remove(cls);
            }
            if (i1.isEmpty(el)) {
                el.classList.add(cls);
            }
        };
        return SVComponent;
    }());
    /** @nocollapse */ SVComponent.ɵfac = function SVComponent_Factory(t) { return new (t || SVComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(SVContainerComponent, 9), i0.ɵɵdirectiveInject(i2$1.ResponsiveService), i0.ɵɵdirectiveInject(i0.Renderer2)); };
    /** @nocollapse */ SVComponent.ɵcmp = i0.ɵɵngDeclareComponent({ version: "11.1.1", type: SVComponent, selector: "sv, [sv]", inputs: { optional: "optional", optionalHelp: "optionalHelp", optionalHelpColor: "optionalHelpColor", label: "label", unit: "unit", col: "col", default: "default", type: "type" }, host: { properties: { "style.padding-left.px": "paddingValue", "style.padding-right.px": "paddingValue" } }, viewQueries: [{ propertyName: "conEl", first: true, predicate: ["conEl"], emitDistinctChangesOnly: false, descendants: true }], exportAs: ["sv"], usesOnChanges: true, ngImport: i0__namespace, template: "<div class=\"sv__label\" [class.sv__label-empty]=\"!label\" [class.sv__label-width]=\"labelWidth != null\" [style.width.px]=\"labelWidth\">\n  <span class=\"sv__label-text\">\n    <ng-container *nzStringTemplateOutlet=\"label\">{{ label }}</ng-container>\n  </span>\n  <span *ngIf=\"optional || optionalHelp\" class=\"sv__label-optional\" [class.sv__label-optional-no-text]=\"!optional\">\n    <ng-container *nzStringTemplateOutlet=\"optional\">{{ optional }}</ng-container>\n    <i *ngIf=\"optionalHelp\" nz-tooltip [nzTooltipTitle]=\"optionalHelp\" [nzTooltipColor]=\"optionalHelpColor\" nz-icon nzType=\"question-circle\"></i>\n  </span>\n</div>\n<div class=\"sv__detail\">\n  <span (cdkObserveContent)=\"checkContent()\" #conEl>\n    <ng-content></ng-content>\n  </span>\n  <ng-container *ngIf=\"!!unit\">\n    <span class=\"sv__unit\" *nzStringTemplateOutlet=\"unit\">{{ unit }}</span>\n  </ng-container>\n</div>\n", directives: [{ type: i3.NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipTitle", "nz-tooltip", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }, { type: i6.NzIconDirective, selector: "[nz-icon]", inputs: ["nzRotate", "nzSpin", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { type: i7.CdkObserveContent, selector: "[cdkObserveContent]", inputs: ["cdkObserveContentDisabled", "debounce"], outputs: ["cdkObserveContent"], exportAs: ["cdkObserveContent"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
    __decorate([
        i1.InputNumber(null),
        __metadata("design:type", Number)
    ], SVComponent.prototype, "col", void 0);
    __decorate([
        i1.InputBoolean(null),
        __metadata("design:type", Boolean)
    ], SVComponent.prototype, "default", void 0);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SVComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'sv, [sv]',
                        exportAs: 'sv',
                        templateUrl: './sv.component.html',
                        host: {
                            '[style.padding-left.px]': 'paddingValue',
                            '[style.padding-right.px]': 'paddingValue',
                        },
                        preserveWhitespaces: false,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                    }]
            }], function () {
            return [{ type: i0.ElementRef }, { type: SVContainerComponent, decorators: [{
                            type: i0.Host
                        }, {
                            type: i0.Optional
                        }] }, { type: i2$1.ResponsiveService }, { type: i0.Renderer2 }];
        }, { conEl: [{
                    type: i0.ViewChild,
                    args: ['conEl', { static: false }]
                }], optional: [{
                    type: i0.Input
                }], optionalHelp: [{
                    type: i0.Input
                }], optionalHelpColor: [{
                    type: i0.Input
                }], label: [{
                    type: i0.Input
                }], unit: [{
                    type: i0.Input
                }], col: [{
                    type: i0.Input
                }], default: [{
                    type: i0.Input
                }], type: [{
                    type: i0.Input
                }] });
    })();

    var COMPONENTS = [SVContainerComponent, SVComponent, SVTitleComponent, SVValueComponent];
    var SVModule = /** @class */ (function () {
        function SVModule() {
        }
        return SVModule;
    }());
    /** @nocollapse */ SVModule.ɵmod = i0.ɵɵdefineNgModule({ type: SVModule });
    /** @nocollapse */ SVModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SVModule_Factory(t) { return new (t || SVModule)(); }, imports: [[i1$1.CommonModule, i7.ObserversModule, i1.DelonUtilModule, i2.NzToolTipModule, i6.NzIconModule, i3.NzOutletModule]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SVModule, { declarations: [SVContainerComponent, SVComponent, SVTitleComponent, SVValueComponent], imports: [i1$1.CommonModule, i7.ObserversModule, i1.DelonUtilModule, i2.NzToolTipModule, i6.NzIconModule, i3.NzOutletModule], exports: [SVContainerComponent, SVComponent, SVTitleComponent, SVValueComponent] }); })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SVModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [i1$1.CommonModule, i7.ObserversModule, i1.DelonUtilModule, i2.NzToolTipModule, i6.NzIconModule, i3.NzOutletModule],
                        declarations: __spread(COMPONENTS),
                        exports: __spread(COMPONENTS),
                    }]
            }], null, null);
    })();
    i0.ɵɵsetComponentScope(SVContainerComponent, [i1$1.NgStyle, i1$1.NgIf, SVTitleComponent, i3.NzStringTemplateOutletDirective], []);

    /**
     * Generated bundle index. Do not edit.
     */

    exports.SVComponent = SVComponent;
    exports.SVContainerComponent = SVContainerComponent;
    exports.SVModule = SVModule;
    exports.SVTitleComponent = SVTitleComponent;
    exports.SVValueComponent = SVValueComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=view.umd.js.map
