/**
 * @license ng-alain(cipchk@qq.com) v9.2.2
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@delon/util'), require('@angular/forms'), require('@delon/theme'), require('ng-zorro-antd/core/animation'), require('@angular/common'), require('ng-zorro-antd/core/outlet'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/tooltip')) :
    typeof define === 'function' && define.amd ? define('@delon/abc/se', ['exports', '@angular/core', '@delon/util', '@angular/forms', '@delon/theme', 'ng-zorro-antd/core/animation', '@angular/common', 'ng-zorro-antd/core/outlet', 'ng-zorro-antd/icon', 'ng-zorro-antd/tooltip'], factory) :
    (global = global || self, factory((global.delon = global.delon || {}, global.delon.abc = global.delon.abc || {}, global.delon.abc.se = {}), global.ng.core, global.delon.util, global.ng.forms, global.delon.theme, global.animation, global.ng.common, global['ng-zorro-antd/core/outlet'], global['ng-zorro-antd/icon'], global['ng-zorro-antd/tooltip']));
}(this, (function (exports, core, util, forms, theme, animation, common, outlet, icon, tooltip) { 'use strict';

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

    function __createBinding(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    }

    function __exportStar(m, exports) {
        for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
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
     * Generated from: se-container.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SEContainerComponent = /** @class */ (function () {
        // #endregion
        function SEContainerComponent(configSrv) {
            this.line = false;
            configSrv.attach(this, 'se', {
                size: 'default',
                nzLayout: 'horizontal',
                gutter: 32,
                col: 2,
                labelWidth: 150,
                firstVisual: false,
            });
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
                        template: "\n    <se-title *ngIf=\"title\">\n      <ng-container *nzStringTemplateOutlet=\"title\">{{ title }}</ng-container>\n    </se-title>\n    <ng-content></ng-content>\n  ",
                        host: {
                            '[class.ant-row]': "true",
                            '[class.se__container]': "true",
                            '[class.se__horizontal]': "nzLayout === 'horizontal'",
                            '[class.se__vertical]': "nzLayout === 'vertical'",
                            '[class.se__inline]': "nzLayout === 'inline'",
                            '[class.se__compact]': "size === 'compact'",
                            '[style.margin-left.px]': "-(gutter / 2)",
                            '[style.margin-right.px]': "-(gutter / 2)",
                        },
                        preserveWhitespaces: false,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        /** @nocollapse */
        SEContainerComponent.ctorParameters = function () { return [
            { type: util.AlainConfigService }
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
     * Generated from: se-title.component.ts
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
     * Generated from: se.component.ts
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
                this.errorData = typeof val === 'string' || val instanceof core.TemplateRef ? { '': val } : val;
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
                return this.invalid && !!this._error;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SEComponent.prototype, "compact", {
            get: /**
             * @return {?}
             */
            function () {
                return this.parent.size === 'compact';
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
            var _a, _b, _c;
            if (!this.ngControl || this.status$)
                return;
            this.status$ = (/** @type {?} */ (this.ngControl.statusChanges)).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            function (res) { return _this.updateStatus(res === 'INVALID'); }));
            if (this._autoId) {
                /** @type {?} */
                var control = (/** @type {?} */ ((_b = (_a = ((/** @type {?} */ (this.ngControl.valueAccessor)))) === null || _a === void 0 ? void 0 : _a._elementRef) === null || _b === void 0 ? void 0 : _b.nativeElement));
                if (control) {
                    control.id = this._id;
                }
            }
            // auto required
            if (this.required !== true) {
                /** @type {?} */
                var rawValidators = (/** @type {?} */ ((_c = ((/** @type {?} */ (this.ngControl)))) === null || _c === void 0 ? void 0 : _c._rawValidators));
                this.required = rawValidators.find((/**
                 * @param {?} w
                 * @return {?}
                 */
                function (w) { return w instanceof forms.RequiredValidator; })) != null;
                this.cdr.detectChanges();
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
                        template: "<div class=\"ant-form-item-label\" [class.se__nolabel]=\"!label\" [style.width.px]=\"_labelWidth\">\n  <label *ngIf=\"label\" [attr.for]=\"_id\" class=\"se__label\" [ngClass]=\"{ 'ant-form-item-required': required }\">\n    <span class=\"se__label-text\">\n      <ng-container *nzStringTemplateOutlet=\"label\">{{ label }}</ng-container>\n    </span>\n    <span *ngIf=\"optional || optionalHelp\" class=\"se__label-optional\" [class.se__label-optional-no-text]=\"!optional\">\n      <ng-container *nzStringTemplateOutlet=\"optional\">{{ optional }}</ng-container>\n      <i *ngIf=\"optionalHelp\" nz-tooltip [nzTooltipTitle]=\"optionalHelp\" nz-icon nzType=\"question-circle\"></i>\n    </span>\n  </label>\n</div>\n<div class=\"ant-form-item-control se__control\">\n  <div class=\"ant-form-item-control-input {{ controlClass }}\">\n    <div class=\"ant-form-item-control-input-content\" (cdkObserveContent)=\"checkContent()\" #contentElement>\n      <ng-content></ng-content>\n    </div>\n  </div>\n  <div class=\"ant-form-item-explain\" *ngIf=\"showErr && !compact\">\n    <div @helpMotion>\n      <ng-container *nzStringTemplateOutlet=\"_error\">{{ _error }}</ng-container>\n    </div>\n  </div>\n  <div *ngIf=\"extra && !compact\" class=\"ant-form-item-extra\">\n    <ng-container *nzStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\n  </div>\n</div>\n",
                        host: {
                            '[style.padding-left.px]': 'paddingValue',
                            '[style.padding-right.px]': 'paddingValue',
                            '[class.ant-form-item-has-error]': 'showErr',
                            '[class.ant-form-item-with-help]': 'showErr && !compact',
                        },
                        preserveWhitespaces: false,
                        animations: [animation.helpMotion],
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
     * Generated from: se.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COMPONENTS = [SEContainerComponent, SEComponent, SETitleComponent];
    var SEModule = /** @class */ (function () {
        function SEModule() {
        }
        SEModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, util.DelonUtilModule, tooltip.NzToolTipModule, icon.NzIconModule, outlet.NzOutletModule],
                        declarations: __spread(COMPONENTS),
                        exports: __spread(COMPONENTS),
                    },] }
        ];
        return SEModule;
    }());

    exports.SEComponent = SEComponent;
    exports.SEContainerComponent = SEContainerComponent;
    exports.SEModule = SEModule;
    exports.SETitleComponent = SETitleComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=edit.umd.js.map
