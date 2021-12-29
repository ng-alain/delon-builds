/**
 * @license ng-alain(cipchk@qq.com) v12.4.2
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/platform-browser'), require('rxjs/operators'), require('@delon/util/decorator'), require('@angular/cdk/observers'), require('ng-zorro-antd/tooltip')) :
    typeof define === 'function' && define.amd ? define('@delon/abc/ellipsis', ['exports', '@angular/common', '@angular/core', '@angular/platform-browser', 'rxjs/operators', '@delon/util/decorator', '@angular/cdk/observers', 'ng-zorro-antd/tooltip'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.abc = global.delon.abc || {}, global.delon.abc.ellipsis = {}), global.ng.common, global.ng.core, global.ng.platformBrowser, global.rxjs.operators, global.decorator, global.ng.cdk.observers, global["ng-zorro-antd/tooltip"]));
})(this, (function (exports, common, core, platformBrowser, operators, decorator, observers, tooltip) { 'use strict';

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

    var EllipsisComponent = /** @class */ (function () {
        function EllipsisComponent(el, ngZone, dom, doc, cdr) {
            this.el = el;
            this.ngZone = ngZone;
            this.dom = dom;
            this.doc = doc;
            this.cdr = cdr;
            this.isSupportLineClamp = this.doc.body.style['webkitLineClamp'] !== undefined;
            this.inited = false;
            this.type = 'default';
            this.cls = {};
            this.text = '';
            this.targetCount = 0;
            this.tooltip = false;
            this.fullWidthRecognition = false;
            this.tail = '...';
        }
        Object.defineProperty(EllipsisComponent.prototype, "linsWord", {
            get: function () {
                var _a = this, targetCount = _a.targetCount, text = _a.text, tail = _a.tail;
                return ((targetCount > 0 ? text.substring(0, targetCount) : '') +
                    (targetCount > 0 && targetCount < text.length ? tail : ''));
            },
            enumerable: false,
            configurable: true
        });
        EllipsisComponent.prototype.getStrFullLength = function (str) {
            return str.split('').reduce(function (pre, cur) {
                var charCode = cur.charCodeAt(0);
                if (charCode >= 0 && charCode <= 128) {
                    return pre + 1;
                }
                return pre + 2;
            }, 0);
        };
        EllipsisComponent.prototype.cutStrByFullLength = function (str, maxLength) {
            var showLength = 0;
            return str.split('').reduce(function (pre, cur) {
                var charCode = cur.charCodeAt(0);
                if (charCode >= 0 && charCode <= 128) {
                    showLength += 1;
                }
                else {
                    showLength += 2;
                }
                if (showLength <= maxLength) {
                    return pre + cur;
                }
                return pre;
            }, '');
        };
        EllipsisComponent.prototype.bisection = function (targetHeight, mid, begin, end, text, node) {
            var suffix = this.tail;
            node.innerHTML = text.substring(0, mid) + suffix;
            var sh = node.offsetHeight;
            if (sh <= targetHeight) {
                node.innerHTML = text.substring(0, mid + 1) + suffix;
                sh = node.offsetHeight;
                if (sh > targetHeight || mid === begin) {
                    return mid;
                }
                begin = mid;
                mid = end - begin === 1 ? begin + 1 : Math.floor((end - begin) / 2) + begin;
                return this.bisection(targetHeight, mid, begin, end, text, node);
            }
            if (mid - 1 < 0) {
                return mid;
            }
            node.innerHTML = text.substring(0, mid - 1) + suffix;
            sh = node.offsetHeight;
            if (sh <= targetHeight) {
                return mid - 1;
            }
            end = mid;
            mid = Math.floor((end - begin) / 2) + begin;
            return this.bisection(targetHeight, mid, begin, end, text, node);
        };
        EllipsisComponent.prototype.genType = function () {
            var _a = this, lines = _a.lines, length = _a.length, isSupportLineClamp = _a.isSupportLineClamp;
            this.cls = {
                ellipsis: true,
                ellipsis__lines: lines && !isSupportLineClamp,
                'ellipsis__line-clamp': lines && isSupportLineClamp
            };
            if (!lines && !length) {
                this.type = 'default';
            }
            else if (!lines) {
                this.type = 'length';
            }
            else if (isSupportLineClamp) {
                this.type = 'line-clamp';
            }
            else {
                this.type = 'line';
            }
        };
        EllipsisComponent.prototype.gen = function () {
            var _a = this, type = _a.type, lines = _a.lines, length = _a.length, fullWidthRecognition = _a.fullWidthRecognition, tail = _a.tail, orgEl = _a.orgEl, cdr = _a.cdr, ngZone = _a.ngZone;
            if (type === 'length') {
                var el = orgEl.nativeElement;
                if (el.children.length > 0) {
                    throw new Error('Ellipsis content must be string.');
                }
                var lengthText = el.textContent;
                var textLength = fullWidthRecognition ? this.getStrFullLength(lengthText) : lengthText.length;
                if (textLength <= length || length < 0) {
                    this.text = lengthText;
                }
                else {
                    var displayText = void 0;
                    if (length - tail.length <= 0) {
                        displayText = '';
                    }
                    else {
                        displayText = fullWidthRecognition
                            ? this.cutStrByFullLength(lengthText, length)
                            : lengthText.slice(0, length);
                    }
                    this.text = displayText + tail;
                }
                ngZone.run(function () { return cdr.detectChanges(); });
            }
            else if (type === 'line') {
                var _b = this, shadowOrgEl = _b.shadowOrgEl, shadowTextEl = _b.shadowTextEl;
                var orgNode = shadowOrgEl.nativeElement;
                var lineText = orgNode.innerText || orgNode.textContent;
                var lineHeight = parseInt(getComputedStyle(this.getEl('.ellipsis')).lineHeight, 10);
                var targetHeight = lines * lineHeight;
                this.getEl('.ellipsis__handle').style.height = targetHeight + "px";
                if (orgNode.offsetHeight <= targetHeight) {
                    this.text = lineText;
                    this.targetCount = lineText.length;
                }
                else {
                    // bisection
                    var len = lineText.length;
                    var mid = Math.ceil(len / 2);
                    var count = this.bisection(targetHeight, mid, 0, len, lineText, shadowTextEl.nativeElement.firstChild);
                    this.text = lineText;
                    this.targetCount = count;
                }
                ngZone.run(function () { return cdr.detectChanges(); });
            }
        };
        EllipsisComponent.prototype.getEl = function (cls) {
            return this.el.nativeElement.querySelector(cls);
        };
        EllipsisComponent.prototype.executeOnStable = function (fn) {
            if (this.ngZone.isStable) {
                fn();
            }
            else {
                this.ngZone.onStable.asObservable().pipe(operators.take(1)).subscribe(fn);
            }
        };
        EllipsisComponent.prototype.refresh = function () {
            var _this = this;
            this.genType();
            var _a = this, type = _a.type, dom = _a.dom, orgEl = _a.orgEl, cdr = _a.cdr;
            var html = orgEl.nativeElement.innerHTML;
            this.orgHtml = dom.bypassSecurityTrustHtml(html);
            cdr.detectChanges();
            this.executeOnStable(function () {
                _this.gen();
                if (type !== 'line') {
                    var el = _this.getEl('.ellipsis');
                    if (el) {
                        el.innerHTML = html;
                    }
                }
            });
        };
        EllipsisComponent.prototype.ngAfterViewInit = function () {
            this.inited = true;
            this.refresh();
        };
        EllipsisComponent.prototype.ngOnChanges = function () {
            if (this.inited) {
                this.refresh();
            }
        };
        return EllipsisComponent;
    }());
    EllipsisComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ellipsis',
                    exportAs: 'ellipsis',
                    template: "<div (cdkObserveContent)=\"refresh()\" #orgEl style=\"display: none\"><ng-content></ng-content></div>\n<ng-template #tooltipTpl let-con>\n  <span\n    *ngIf=\"tooltip; else con\"\n    nz-tooltip\n    [nzTooltipTitle]=\"titleTpl\"\n    [nzTooltipOverlayStyle]=\"{ 'overflow-wrap': 'break-word', 'word-wrap': 'break-word' }\"\n  >\n    <ng-container *ngTemplateOutlet=\"con\"></ng-container>\n    <ng-template #titleTpl><div [innerHTML]=\"orgHtml\"></div></ng-template>\n  </span>\n</ng-template>\n<ng-container [ngSwitch]=\"type\">\n  <span *ngSwitchCase=\"'default'\" [ngClass]=\"cls\"></span>\n  <ng-container *ngSwitchCase=\"'length'\">\n    <ng-template [ngTemplateOutlet]=\"tooltipTpl\" [ngTemplateOutletContext]=\"{ $implicit: lengthTpl }\"></ng-template>\n    <ng-template #lengthTpl>{{ text }}</ng-template>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'line-clamp'\">\n    <ng-template [ngTemplateOutlet]=\"tooltipTpl\" [ngTemplateOutletContext]=\"{ $implicit: lineClampTpl }\"></ng-template>\n    <ng-template #lineClampTpl>\n      <div [ngClass]=\"cls\" [ngStyle]=\"{ '-webkit-line-clamp': lines, '-webkit-box-orient': 'vertical' }\"></div>\n    </ng-template>\n  </ng-container>\n  <div *ngSwitchCase=\"'line'\" [ngClass]=\"cls\">\n    <div class=\"ellipsis__handle\">\n      <ng-template [ngTemplateOutlet]=\"tooltipTpl\" [ngTemplateOutletContext]=\"{ $implicit: lineTpl }\"></ng-template>\n      <ng-template #lineTpl>{{ linsWord }}</ng-template>\n      <div class=\"ellipsis__shadow\" #shadowOrgEl [innerHTML]=\"orgHtml\"></div>\n      <div class=\"ellipsis__shadow\" #shadowTextEl>\n        <span>{{ text }}</span>\n      </div>\n    </div>\n  </div>\n</ng-container>\n",
                    preserveWhitespaces: false,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None
                },] }
    ];
    EllipsisComponent.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.NgZone },
        { type: platformBrowser.DomSanitizer },
        { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
        { type: core.ChangeDetectorRef }
    ]; };
    EllipsisComponent.propDecorators = {
        orgEl: [{ type: core.ViewChild, args: ['orgEl', { static: false },] }],
        shadowOrgEl: [{ type: core.ViewChild, args: ['shadowOrgEl', { static: false },] }],
        shadowTextEl: [{ type: core.ViewChild, args: ['shadowTextEl', { static: false },] }],
        tooltip: [{ type: core.Input }],
        length: [{ type: core.Input }],
        lines: [{ type: core.Input }],
        fullWidthRecognition: [{ type: core.Input }],
        tail: [{ type: core.Input }]
    };
    __decorate([
        decorator.InputBoolean()
    ], EllipsisComponent.prototype, "tooltip", void 0);
    __decorate([
        decorator.InputNumber(null)
    ], EllipsisComponent.prototype, "length", void 0);
    __decorate([
        decorator.InputNumber(null)
    ], EllipsisComponent.prototype, "lines", void 0);
    __decorate([
        decorator.InputBoolean()
    ], EllipsisComponent.prototype, "fullWidthRecognition", void 0);

    var COMPONENTS = [EllipsisComponent];
    var EllipsisModule = /** @class */ (function () {
        function EllipsisModule() {
        }
        return EllipsisModule;
    }());
    EllipsisModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule, observers.ObserversModule, tooltip.NzToolTipModule],
                    declarations: COMPONENTS,
                    exports: COMPONENTS
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.EllipsisComponent = EllipsisComponent;
    exports.EllipsisModule = EllipsisModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ellipsis.umd.js.map
