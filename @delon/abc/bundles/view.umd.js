/**
 * @license ng-alain(cipchk@qq.com) v12.3.0
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@delon/util/config'), require('@delon/util/decorator'), require('@delon/theme'), require('@delon/util/browser'), require('@angular/cdk/observers'), require('@angular/common'), require('ng-zorro-antd/core/outlet'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/tooltip')) :
    typeof define === 'function' && define.amd ? define('@delon/abc/sv', ['exports', '@angular/core', '@delon/util/config', '@delon/util/decorator', '@delon/theme', '@delon/util/browser', '@angular/cdk/observers', '@angular/common', 'ng-zorro-antd/core/outlet', 'ng-zorro-antd/icon', 'ng-zorro-antd/tooltip'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.abc = global.delon.abc || {}, global.delon.abc.sv = {}), global.ng.core, global.config, global.decorator, global.theme, global.browser, global.ng.cdk.observers, global.ng.common, global["ng-zorro-antd/core/outlet"], global["ng-zorro-antd/icon"], global["ng-zorro-antd/tooltip"]));
})(this, (function (exports, core, config, decorator, theme, browser, observers, common, outlet, icon, tooltip) { 'use strict';

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
        return to.concat(ar || Array.prototype.slice.call(from));
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

    var SVContainerComponent = /** @class */ (function () {
        function SVContainerComponent(configSrv) {
            this.noColon = false;
            configSrv.attach(this, 'sv', {
                size: 'large',
                gutter: 32,
                layout: 'horizontal',
                col: 3,
                default: true
            });
        }
        return SVContainerComponent;
    }());
    SVContainerComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'sv-container, [sv-container]',
                    exportAs: 'svContainer',
                    template: "<div class=\"ant-row\" [ngStyle]=\"{ 'margin-left.px': -(gutter / 2), 'margin-right.px': -(gutter / 2) }\">\n  <sv-title *ngIf=\"title\">\n    <ng-container *nzStringTemplateOutlet=\"title\">{{ title }}</ng-container>\n  </sv-title>\n  <ng-content></ng-content>\n</div>\n",
                    host: {
                        '[class.sv__container]': 'true',
                        '[class.sv__horizontal]': "layout === 'horizontal'",
                        '[class.sv__vertical]': "layout === 'vertical'",
                        '[class.sv__small]': "size === 'small'",
                        '[class.sv__large]': "size === 'large'",
                        '[class.clearfix]': "true"
                    },
                    preserveWhitespaces: false,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None
                },] }
    ];
    SVContainerComponent.ctorParameters = function () { return [
        { type: config.AlainConfigService }
    ]; };
    SVContainerComponent.propDecorators = {
        title: [{ type: core.Input }],
        size: [{ type: core.Input }],
        gutter: [{ type: core.Input }],
        layout: [{ type: core.Input }],
        labelWidth: [{ type: core.Input }],
        col: [{ type: core.Input }],
        default: [{ type: core.Input }],
        noColon: [{ type: core.Input }]
    };
    __decorate([
        decorator.InputNumber()
    ], SVContainerComponent.prototype, "gutter", void 0);
    __decorate([
        decorator.InputNumber()
    ], SVContainerComponent.prototype, "labelWidth", void 0);
    __decorate([
        decorator.InputNumber()
    ], SVContainerComponent.prototype, "col", void 0);
    __decorate([
        decorator.InputBoolean()
    ], SVContainerComponent.prototype, "default", void 0);
    __decorate([
        decorator.InputBoolean()
    ], SVContainerComponent.prototype, "noColon", void 0);

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
    SVTitleComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'sv-title, [sv-title]',
                    exportAs: 'svTitle',
                    template: '<ng-content></ng-content>',
                    host: {
                        '[class.sv__title]': 'true'
                    },
                    preserveWhitespaces: false,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None
                },] }
    ];
    SVTitleComponent.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: SVContainerComponent, decorators: [{ type: core.Host }, { type: core.Optional }] },
        { type: core.Renderer2 }
    ]; };

    var SVValueComponent = /** @class */ (function () {
        function SVValueComponent() {
            this.size = 'default';
        }
        return SVValueComponent;
    }());
    SVValueComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'sv-value, [sv-value]',
                    exportAs: 'svValue',
                    template: "\n    <em *ngIf=\"prefix\" class=\"sv__value-prefix\" [innerHTML]=\"prefix\"></em>\n    <span nz-tooltip [nzTooltipTitle]=\"tooltip\" class=\"sv__value-text\"><ng-content></ng-content></span>\n    <em *ngIf=\"unit\" class=\"sv__value-unit\" [innerHTML]=\"unit\"></em>\n  ",
                    host: {
                        '[class.sv__value]': 'true',
                        '[class.sv__value-small]': "size === 'small'",
                        '[class.sv__value-large]': "size === 'large'"
                    },
                    preserveWhitespaces: false,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None
                },] }
    ];
    SVValueComponent.propDecorators = {
        prefix: [{ type: core.Input }],
        unit: [{ type: core.Input }],
        tooltip: [{ type: core.Input }],
        size: [{ type: core.Input }]
    };

    var prefixCls = "sv";
    var SVComponent = /** @class */ (function () {
        function SVComponent(el, parent, rep, ren) {
            this.parent = parent;
            this.rep = rep;
            this.ren = ren;
            this.clsMap = [];
            this._noColon = false;
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
            var _a = this, el = _a.el, ren = _a.ren, col = _a.col, clsMap = _a.clsMap, type = _a.type, rep = _a.rep, noColon = _a.noColon, parent = _a.parent;
            this._noColon = noColon != null ? noColon : parent.noColon;
            clsMap.forEach(function (cls) { return ren.removeClass(el, cls); });
            clsMap.length = 0;
            clsMap.push.apply(clsMap, __spreadArray([], __read(rep.genCls(col != null ? col : this.parent.col))));
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
            if (browser.isEmpty(el)) {
                el.classList.add(cls);
            }
        };
        return SVComponent;
    }());
    SVComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'sv, [sv]',
                    exportAs: 'sv',
                    template: "<div\n  class=\"sv__label\"\n  [class.sv__label-empty]=\"!label\"\n  [class.sv__label-width]=\"labelWidth !== null && labelWidth !== undefined\"\n  [class.sv__no-colon]=\"_noColon\"\n  [style.width.px]=\"labelWidth\"\n>\n  <span class=\"sv__label-text\">\n    <ng-container *nzStringTemplateOutlet=\"label\">{{ label }}</ng-container>\n  </span>\n  <span *ngIf=\"optional || optionalHelp\" class=\"sv__label-optional\" [class.sv__label-optional-no-text]=\"!optional\">\n    <ng-container *nzStringTemplateOutlet=\"optional\">{{ optional }}</ng-container>\n    <i\n      *ngIf=\"optionalHelp\"\n      nz-tooltip\n      [nzTooltipTitle]=\"optionalHelp\"\n      [nzTooltipColor]=\"optionalHelpColor\"\n      nz-icon\n      nzType=\"question-circle\"\n    ></i>\n  </span>\n</div>\n<div class=\"sv__detail\">\n  <span (cdkObserveContent)=\"checkContent()\" #conEl>\n    <ng-content></ng-content>\n  </span>\n  <ng-container *ngIf=\"!!unit\">\n    <span class=\"sv__unit\" *nzStringTemplateOutlet=\"unit\">{{ unit }}</span>\n  </ng-container>\n</div>\n",
                    host: {
                        '[style.padding-left.px]': 'paddingValue',
                        '[style.padding-right.px]': 'paddingValue'
                    },
                    preserveWhitespaces: false,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None
                },] }
    ];
    SVComponent.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: SVContainerComponent, decorators: [{ type: core.Host }, { type: core.Optional }] },
        { type: theme.ResponsiveService },
        { type: core.Renderer2 }
    ]; };
    SVComponent.propDecorators = {
        conEl: [{ type: core.ViewChild, args: ['conEl', { static: false },] }],
        optional: [{ type: core.Input }],
        optionalHelp: [{ type: core.Input }],
        optionalHelpColor: [{ type: core.Input }],
        label: [{ type: core.Input }],
        unit: [{ type: core.Input }],
        col: [{ type: core.Input }],
        default: [{ type: core.Input }],
        type: [{ type: core.Input }],
        noColon: [{ type: core.Input }]
    };
    __decorate([
        decorator.InputNumber(null)
    ], SVComponent.prototype, "col", void 0);
    __decorate([
        decorator.InputBoolean(null)
    ], SVComponent.prototype, "default", void 0);
    __decorate([
        decorator.InputBoolean(null)
    ], SVComponent.prototype, "noColon", void 0);

    var COMPONENTS = [SVContainerComponent, SVComponent, SVTitleComponent, SVValueComponent];
    var SVModule = /** @class */ (function () {
        function SVModule() {
        }
        return SVModule;
    }());
    SVModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule, observers.ObserversModule, tooltip.NzToolTipModule, icon.NzIconModule, outlet.NzOutletModule],
                    declarations: COMPONENTS,
                    exports: COMPONENTS
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.SVComponent = SVComponent;
    exports.SVContainerComponent = SVContainerComponent;
    exports.SVModule = SVModule;
    exports.SVTitleComponent = SVTitleComponent;
    exports.SVValueComponent = SVValueComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=view.umd.js.map
