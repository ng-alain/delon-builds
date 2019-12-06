/**
 * @license ng-alain(cipchk@qq.com) v8.7.0
 * (c) 2019 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@delon/util'), require('@angular/animations'), require('@angular/forms'), require('@delon/theme'), require('@angular/common'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/tooltip')) :
    typeof define === 'function' && define.amd ? define('@delon/abc/edit', ['exports', '@angular/core', '@delon/util', '@angular/animations', '@angular/forms', '@delon/theme', '@angular/common', 'ng-zorro-antd/icon', 'ng-zorro-antd/tooltip'], factory) :
    (global = global || self, factory((global.delon = global.delon || {}, global.delon.abc = global.delon.abc || {}, global.delon.abc.edit = {}), global.ng.core, global.delon.util, global.ng.animations, global.ng.forms, global.delon.theme, global.ng.common, global['ng-zorro-antd/icon'], global['ng-zorro-antd/tooltip']));
}(this, (function (exports, core, util, animations, forms, theme, common, icon, tooltip) { 'use strict';

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
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
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

    /**
     * @fileoverview added by tsickle
     * Generated from: edit.config.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SEConfig = /** @class */ (function () {
        function SEConfig() {
            /**
             * 大小，默认：`default`
             * - `compact` 紧凑型，强制忽略 `error`、`extra` 展示
             */
            this.size = 'default';
            /**
             * 布局类型，等同 `nzLayout`
             * - `inline` 时强制大小为 `compact`
             */
            this.nzLayout = 'horizontal';
            /**
             * 间距，当 `nzLayout:horizontal` 时有效，默认：`32`
             */
            this.gutter = 32;
            /**
             * 列数，默认：`2`
             */
            this.col = 2;
            /**
             * 标签文本宽度，单位：`px`，默认：`150`
             */
            this.labelWidth = 150;
            /**
             * 是否立即呈现错误视觉
             */
            this.firstVisual = false;
        }
        SEConfig.decorators = [
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ SEConfig.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function SEConfig_Factory() { return new SEConfig(); }, token: SEConfig, providedIn: "root" });
        return SEConfig;
    }());
    if (false) {
        /**
         * 大小，默认：`default`
         * - `compact` 紧凑型，强制忽略 `error`、`extra` 展示
         * @type {?}
         */
        SEConfig.prototype.size;
        /**
         * 布局类型，等同 `nzLayout`
         * - `inline` 时强制大小为 `compact`
         * @type {?}
         */
        SEConfig.prototype.nzLayout;
        /**
         * 间距，当 `nzLayout:horizontal` 时有效，默认：`32`
         * @type {?}
         */
        SEConfig.prototype.gutter;
        /**
         * 列数，默认：`2`
         * @type {?}
         */
        SEConfig.prototype.col;
        /**
         * 标签文本宽度，单位：`px`，默认：`150`
         * @type {?}
         */
        SEConfig.prototype.labelWidth;
        /**
         * 是否立即呈现错误视觉
         * @type {?}
         */
        SEConfig.prototype.firstVisual;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: edit-container.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SEContainerComponent = /** @class */ (function () {
        // #endregion
        function SEContainerComponent(cog) {
            this.line = false;
            Object.assign(this, __assign({}, new SEConfig(), cog));
        }
        Object.defineProperty(SEContainerComponent.prototype, "gutter", {
            get: /**
             * @return {?}
             */
            function () {
                return this.nzLayout === 'horizontal' ? this._gutter : 0;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._gutter = util.toNumber(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SEContainerComponent.prototype, "nzLayout", {
            get: /**
             * @return {?}
             */
            function () {
                return this._nzLayout;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._nzLayout = value;
                if (value === 'inline') {
                    this.size = 'compact';
                }
            },
            enumerable: true,
            configurable: true
        });
        SEContainerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'se-container, [se-container]',
                        exportAs: 'seContainer',
                        template: "<div class=\"ant-row se__container se__{{nzLayout}} se__{{size}}\"\n     [ngStyle]=\"{'margin-left.px': -(gutter / 2), 'margin-right.px': -(gutter / 2)}\">\n  <se-title *ngIf=\"title\">\n    <ng-container *stringTemplateOutlet=\"title\">{{ title }}</ng-container>\n  </se-title>\n  <ng-content></ng-content>\n</div>\n",
                        preserveWhitespaces: false,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        /** @nocollapse */
        SEContainerComponent.ctorParameters = function () { return [
            { type: SEConfig }
        ]; };
        SEContainerComponent.propDecorators = {
            colInCon: [{ type: core.Input, args: ['se-container',] }],
            col: [{ type: core.Input }],
            labelWidth: [{ type: core.Input }],
            title: [{ type: core.Input }],
            gutter: [{ type: core.Input }],
            nzLayout: [{ type: core.Input }],
            size: [{ type: core.Input }],
            firstVisual: [{ type: core.Input }],
            line: [{ type: core.Input }]
        };
        __decorate([
            util.InputNumber(null),
            __metadata("design:type", Number)
        ], SEContainerComponent.prototype, "colInCon", void 0);
        __decorate([
            util.InputNumber(null),
            __metadata("design:type", Number)
        ], SEContainerComponent.prototype, "col", void 0);
        __decorate([
            util.InputNumber(null),
            __metadata("design:type", Number)
        ], SEContainerComponent.prototype, "labelWidth", void 0);
        __decorate([
            util.InputBoolean(),
            __metadata("design:type", Boolean)
        ], SEContainerComponent.prototype, "firstVisual", void 0);
        __decorate([
            util.InputBoolean(),
            __metadata("design:type", Object)
        ], SEContainerComponent.prototype, "line", void 0);
        return SEContainerComponent;
    }());
    if (false) {
        /** @type {?} */
        SEContainerComponent.prototype.colInCon;
        /** @type {?} */
        SEContainerComponent.prototype.col;
        /** @type {?} */
        SEContainerComponent.prototype.labelWidth;
        /** @type {?} */
        SEContainerComponent.prototype.title;
        /**
         * @type {?}
         * @private
         */
        SEContainerComponent.prototype._gutter;
        /**
         * @type {?}
         * @private
         */
        SEContainerComponent.prototype._nzLayout;
        /** @type {?} */
        SEContainerComponent.prototype.size;
        /** @type {?} */
        SEContainerComponent.prototype.firstVisual;
        /** @type {?} */
        SEContainerComponent.prototype.line;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: edit-error.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SEErrorComponent = /** @class */ (function () {
        function SEErrorComponent() {
        }
        SEErrorComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'se-error',
                        exportAs: 'seError',
                        animations: [
                            animations.trigger('errorAnt', [
                                animations.transition('void => *', [
                                    animations.style({
                                        opacity: 0,
                                        transform: 'translateY(-5px)',
                                    }),
                                    animations.animate('0.3s cubic-bezier(0.645, 0.045, 0.355, 1)', animations.style({
                                        opacity: 1,
                                        transform: 'translateY(0)',
                                    })),
                                ]),
                                animations.transition('* => void', [
                                    animations.style({
                                        opacity: 1,
                                        transform: 'translateY(0)',
                                    }),
                                    animations.animate('0.3s cubic-bezier(0.645, 0.045, 0.355, 1)', animations.style({
                                        opacity: 0,
                                        transform: 'translateY(-5px)',
                                    })),
                                ]),
                            ]),
                        ],
                        template: "\n    <div [@errorAnt]><ng-content></ng-content></div>\n  ",
                        host: {
                            '[class.ant-form-explain]': 'true',
                        },
                        preserveWhitespaces: false,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        return SEErrorComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: edit-title.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SETitleComponent = /** @class */ (function () {
        function SETitleComponent(parent, el, ren) {
            this.parent = parent;
            this.ren = ren;
            if (parent == null) {
                throw new Error("[se-title] must include 'se-container' component");
            }
            this.el = el.nativeElement;
        }
        /**
         * @private
         * @return {?}
         */
        SETitleComponent.prototype.setClass = /**
         * @private
         * @return {?}
         */
        function () {
            var gutter = this.parent.gutter;
            var el = this.el;
            this.ren.setStyle(el, 'padding-left', gutter / 2 + "px");
            this.ren.setStyle(el, 'padding-right', gutter / 2 + "px");
        };
        /**
         * @return {?}
         */
        SETitleComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.setClass();
        };
        SETitleComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'se-title, [se-title]',
                        exportAs: 'seTitle',
                        template: '<ng-content></ng-content>',
                        host: {
                            '[class.se__title]': 'true',
                        },
                        preserveWhitespaces: false,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        /** @nocollapse */
        SETitleComponent.ctorParameters = function () { return [
            { type: SEContainerComponent, decorators: [{ type: core.Host }, { type: core.Optional }] },
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        return SETitleComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        SETitleComponent.prototype.el;
        /**
         * @type {?}
         * @private
         */
        SETitleComponent.prototype.parent;
        /**
         * @type {?}
         * @private
         */
        SETitleComponent.prototype.ren;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: edit.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var prefixCls = "se";
    /** @type {?} */
    var nextUniqueId = 0;
    var SEComponent = /** @class */ (function () {
        function SEComponent(el, parent, rep, ren, cdr) {
            this.parent = parent;
            this.rep = rep;
            this.ren = ren;
            this.cdr = cdr;
            this.clsMap = [];
            this.inited = false;
            this.onceFlag = false;
            this.errorData = {};
            this.invalid = false;
            this._labelWidth = null;
            this.required = false;
            this.controlClass = '';
            this._id = "_se-" + nextUniqueId++;
            this._autoId = true;
            if (parent == null) {
                throw new Error("[se] must include 'se-container' component");
            }
            this.el = el.nativeElement;
        }
        Object.defineProperty(SEComponent.prototype, "error", {
            set: /**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                this.errorData = typeof val === 'string' ? { '': val } : val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SEComponent.prototype, "id", {
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._id = value;
                this._autoId = false;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SEComponent.prototype, "paddingValue", {
            // #endregion
            get: 
            // #endregion
            /**
             * @return {?}
             */
            function () {
                return this.parent.gutter / 2;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SEComponent.prototype, "showErr", {
            get: /**
             * @return {?}
             */
            function () {
                return this.invalid && this.parent.size !== 'compact' && !!this._error;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SEComponent.prototype, "ngControl", {
            get: /**
             * @private
             * @return {?}
             */
            function () {
                return this.ngModel || this.formControlName;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @private
         * @template THIS
         * @this {THIS}
         * @return {THIS}
         */
        SEComponent.prototype.setClass = /**
         * @private
         * @template THIS
         * @this {THIS}
         * @return {THIS}
         */
        function () {
            var _a = (/** @type {?} */ (this)), el = _a.el, ren = _a.ren, clsMap = _a.clsMap, col = _a.col, parent = _a.parent, cdr = _a.cdr, line = _a.line, labelWidth = _a.labelWidth, rep = _a.rep;
            (/** @type {?} */ (this))._labelWidth = parent.nzLayout === 'horizontal' ? (labelWidth != null ? labelWidth : parent.labelWidth) : null;
            clsMap.forEach((/**
             * @param {?} cls
             * @return {?}
             */
            function (cls) { return ren.removeClass(el, cls); }));
            clsMap.length = 0;
            /** @type {?} */
            var repCls = parent.nzLayout === 'horizontal' ? rep.genCls(col != null ? col : parent.colInCon || parent.col) : [];
            clsMap.push.apply(clsMap, __spread(["ant-form-item"], repCls, [prefixCls + "__item"]));
            if (line || parent.line) {
                clsMap.push(prefixCls + "__line");
            }
            clsMap.forEach((/**
             * @param {?} cls
             * @return {?}
             */
            function (cls) { return ren.addClass(el, cls); }));
            cdr.detectChanges();
            return (/** @type {?} */ (this));
        };
        /**
         * @private
         * @return {?}
         */
        SEComponent.prototype.bindModel = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            if (!this.ngControl || this.status$)
                return;
            this.status$ = (/** @type {?} */ (this.ngControl.statusChanges)).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            function (res) { return _this.updateStatus(res === 'INVALID'); }));
            if (this._autoId) {
                /** @type {?} */
                var control = (/** @type {?} */ (util.deepGet(this.ngControl.valueAccessor, '_elementRef.nativeElement')));
                if (control) {
                    control.id = this._id;
                }
            }
        };
        /**
         * @private
         * @param {?} invalid
         * @return {?}
         */
        SEComponent.prototype.updateStatus = /**
         * @private
         * @param {?} invalid
         * @return {?}
         */
        function (invalid) {
            if (this.ngControl.disabled || this.ngControl.isDisabled) {
                return;
            }
            this.invalid = (/** @type {?} */ (((invalid && this.onceFlag) || (this.ngControl.dirty && invalid))));
            /** @type {?} */
            var errors = this.ngControl.errors;
            if (errors != null && Object.keys(errors).length > 0) {
                /** @type {?} */
                var key = Object.keys(errors)[0] || '';
                /** @type {?} */
                var err = this.errorData[key];
                this._error = err != null ? err : this.errorData[''] || '';
            }
            this.cdr.detectChanges();
        };
        /**
         * @return {?}
         */
        SEComponent.prototype.checkContent = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var el = this.contentElement.nativeElement;
            /** @type {?} */
            var cls = prefixCls + "__item-empty";
            if (util.isEmpty(el)) {
                this.ren.addClass(el, cls);
            }
            else {
                this.ren.removeClass(el, cls);
            }
        };
        /**
         * @return {?}
         */
        SEComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
        function () {
            this.checkContent();
        };
        /**
         * @return {?}
         */
        SEComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
        function () {
            this.onceFlag = this.parent.firstVisual;
            if (this.inited)
                this.setClass().bindModel();
        };
        /**
         * @return {?}
         */
        SEComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.setClass().bindModel();
            this.inited = true;
            if (this.onceFlag) {
                Promise.resolve().then((/**
                 * @return {?}
                 */
                function () {
                    _this.updateStatus((/** @type {?} */ (_this.ngControl.invalid)));
                    _this.onceFlag = false;
                }));
            }
        };
        /**
         * @return {?}
         */
        SEComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            if (this.status$) {
                this.status$.unsubscribe();
            }
        };
        SEComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'se',
                        exportAs: 'se',
                        template: "<div class=\"ant-form-item-label\" [class.se__nolabel]=\"!label\" [style.width.px]=\"_labelWidth\">\n  <label *ngIf=\"label\" [attr.for]=\"_id\" class=\"se__label\" [ngClass]=\"{'ant-form-item-required': required}\">\n    <span class=\"se__label-text\">\n      <ng-container *stringTemplateOutlet=\"label\">{{ label }}</ng-container>\n    </span>\n    <span class=\"se__label-optional\" *ngIf=\"optional || optionalHelp\">\n      <ng-container *stringTemplateOutlet=\"optional\">{{ optional }}</ng-container>\n      <i *ngIf=\"optionalHelp\" nz-tooltip [nzTooltipTitle]=\"optionalHelp\" nz-icon nzType=\"question-circle\"></i>\n    </span>\n  </label>\n</div>\n<div class=\"ant-form-item-control-wrapper se__control\">\n  <div class=\"ant-form-item-control {{controlClass}}\" [class.has-error]=\"invalid\">\n    <span (cdkObserveContent)=\"checkContent()\" #contentElement>\n      <ng-content></ng-content>\n    </span>\n    <se-error *ngIf=\"showErr\">{{_error}}</se-error>\n    <div *ngIf=\"extra\" class=\"ant-form-extra\">{{extra}}</div>\n  </div>\n</div>\n",
                        host: {
                            '[style.padding-left.px]': 'paddingValue',
                            '[style.padding-right.px]': 'paddingValue',
                            '[class.ant-form-item-with-help]': 'showErr',
                        },
                        preserveWhitespaces: false,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        /** @nocollapse */
        SEComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: SEContainerComponent, decorators: [{ type: core.Optional }, { type: core.Host }] },
            { type: theme.ResponsiveService },
            { type: core.Renderer2 },
            { type: core.ChangeDetectorRef }
        ]; };
        SEComponent.propDecorators = {
            ngModel: [{ type: core.ContentChild, args: [forms.NgModel, { static: true },] }],
            formControlName: [{ type: core.ContentChild, args: [forms.FormControlName, { static: true },] }],
            contentElement: [{ type: core.ViewChild, args: ['contentElement', { static: true },] }],
            optional: [{ type: core.Input }],
            optionalHelp: [{ type: core.Input }],
            error: [{ type: core.Input }],
            extra: [{ type: core.Input }],
            label: [{ type: core.Input }],
            col: [{ type: core.Input }],
            required: [{ type: core.Input }],
            controlClass: [{ type: core.Input }],
            line: [{ type: core.Input }],
            labelWidth: [{ type: core.Input }],
            id: [{ type: core.Input }]
        };
        __decorate([
            util.InputNumber(null),
            __metadata("design:type", Number)
        ], SEComponent.prototype, "col", void 0);
        __decorate([
            util.InputBoolean(),
            __metadata("design:type", Object)
        ], SEComponent.prototype, "required", void 0);
        __decorate([
            util.InputBoolean(null),
            __metadata("design:type", Boolean)
        ], SEComponent.prototype, "line", void 0);
        __decorate([
            util.InputNumber(null),
            __metadata("design:type", Number)
        ], SEComponent.prototype, "labelWidth", void 0);
        return SEComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        SEComponent.prototype.el;
        /**
         * @type {?}
         * @private
         */
        SEComponent.prototype.status$;
        /**
         * @type {?}
         * @private
         */
        SEComponent.prototype.ngModel;
        /**
         * @type {?}
         * @private
         */
        SEComponent.prototype.formControlName;
        /**
         * @type {?}
         * @private
         */
        SEComponent.prototype.contentElement;
        /**
         * @type {?}
         * @private
         */
        SEComponent.prototype.clsMap;
        /**
         * @type {?}
         * @private
         */
        SEComponent.prototype.inited;
        /**
         * @type {?}
         * @private
         */
        SEComponent.prototype.onceFlag;
        /**
         * @type {?}
         * @private
         */
        SEComponent.prototype.errorData;
        /** @type {?} */
        SEComponent.prototype.invalid;
        /** @type {?} */
        SEComponent.prototype._labelWidth;
        /** @type {?} */
        SEComponent.prototype._error;
        /** @type {?} */
        SEComponent.prototype.optional;
        /** @type {?} */
        SEComponent.prototype.optionalHelp;
        /** @type {?} */
        SEComponent.prototype.extra;
        /** @type {?} */
        SEComponent.prototype.label;
        /** @type {?} */
        SEComponent.prototype.col;
        /** @type {?} */
        SEComponent.prototype.required;
        /** @type {?} */
        SEComponent.prototype.controlClass;
        /** @type {?} */
        SEComponent.prototype.line;
        /** @type {?} */
        SEComponent.prototype.labelWidth;
        /** @type {?} */
        SEComponent.prototype._id;
        /** @type {?} */
        SEComponent.prototype._autoId;
        /**
         * @type {?}
         * @private
         */
        SEComponent.prototype.parent;
        /**
         * @type {?}
         * @private
         */
        SEComponent.prototype.rep;
        /**
         * @type {?}
         * @private
         */
        SEComponent.prototype.ren;
        /**
         * @type {?}
         * @private
         */
        SEComponent.prototype.cdr;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: edit.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COMPONENTS = [SEContainerComponent, SEComponent, SEErrorComponent, SETitleComponent];
    var SEModule = /** @class */ (function () {
        function SEModule() {
        }
        SEModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, util.DelonUtilModule, tooltip.NzToolTipModule, icon.NzIconModule],
                        declarations: __spread(COMPONENTS),
                        exports: __spread(COMPONENTS),
                    },] }
        ];
        return SEModule;
    }());

    exports.SEComponent = SEComponent;
    exports.SEConfig = SEConfig;
    exports.SEContainerComponent = SEContainerComponent;
    exports.SEErrorComponent = SEErrorComponent;
    exports.SEModule = SEModule;
    exports.SETitleComponent = SETitleComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=edit.umd.js.map
