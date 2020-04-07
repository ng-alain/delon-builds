/**
 * @license ng-alain(cipchk@qq.com) v8.9.2
 * (c) 2019 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@delon/util'), require('@delon/theme'), require('@angular/cdk/observers'), require('@angular/common'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/tooltip')) :
    typeof define === 'function' && define.amd ? define('@delon/abc/view', ['exports', '@angular/core', '@delon/util', '@delon/theme', '@angular/cdk/observers', '@angular/common', 'ng-zorro-antd/icon', 'ng-zorro-antd/tooltip'], factory) :
    (global = global || self, factory((global.delon = global.delon || {}, global.delon.abc = global.delon.abc || {}, global.delon.abc.view = {}), global.ng.core, global.delon.util, global.delon.theme, global.ng.cdk.observers, global.ng.common, global['ng-zorro-antd/icon'], global['ng-zorro-antd/tooltip']));
}(this, (function (exports, core, util, theme, observers, common, icon, tooltip) { 'use strict';

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
     * Generated from: view.config.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SVConfig = /** @class */ (function () {
        function SVConfig() {
            /**
             * 间距，默认：`32`
             */
            this.gutter = 32;
            /**
             * 布局，默认：`horizontal`
             */
            this.layout = 'horizontal';
            /**
             * 列数，默认：`3`
             */
            this.col = 3;
            /**
             * 是否显示默认值，当内容为空值时显示 `-`，默认：`true`
             */
            this.default = true;
            /**
             * `label` 固定宽度，若 `null` 或 `undefined` 表示非固定，默认：`null`
             */
            this.labelWidth = null;
        }
        SVConfig.decorators = [
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ SVConfig.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function SVConfig_Factory() { return new SVConfig(); }, token: SVConfig, providedIn: "root" });
        return SVConfig;
    }());
    if (false) {
        /**
         * 大小
         * @type {?}
         */
        SVConfig.prototype.size;
        /**
         * 间距，默认：`32`
         * @type {?}
         */
        SVConfig.prototype.gutter;
        /**
         * 布局，默认：`horizontal`
         * @type {?}
         */
        SVConfig.prototype.layout;
        /**
         * 列数，默认：`3`
         * @type {?}
         */
        SVConfig.prototype.col;
        /**
         * 是否显示默认值，当内容为空值时显示 `-`，默认：`true`
         * @type {?}
         */
        SVConfig.prototype.default;
        /**
         * `label` 固定宽度，若 `null` 或 `undefined` 表示非固定，默认：`null`
         * @type {?}
         */
        SVConfig.prototype.labelWidth;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: view-container.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var prefixCls = "sv";
    var SVContainerComponent = /** @class */ (function () {
        // #endregion
        function SVContainerComponent(el, ren, cog) {
            this.ren = ren;
            this.size = 'large';
            this.layout = 'horizontal';
            this.el = el.nativeElement;
            Object.assign(this, __assign({}, new SVConfig(), cog));
        }
        /**
         * @private
         * @return {?}
         */
        SVContainerComponent.prototype.setClass = /**
         * @private
         * @return {?}
         */
        function () {
            var _a;
            var _b = this, el = _b.el, ren = _b.ren, size = _b.size, layout = _b.layout;
            util.updateHostClass(el, ren, (_a = {},
                _a[prefixCls + "__container"] = true,
                _a[prefixCls + "__" + size] = true,
                _a[prefixCls + "__" + layout] = true,
                _a["clearfix"] = true,
                _a));
        };
        /**
         * @return {?}
         */
        SVContainerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.setClass();
        };
        /**
         * @return {?}
         */
        SVContainerComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
        function () {
            this.setClass();
        };
        SVContainerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'sv-container, [sv-container]',
                        exportAs: 'svContainer',
                        template: "<div class=\"ant-row\"\n     [ngStyle]=\"{'margin-left.px': -(gutter / 2), 'margin-right.px': -(gutter / 2)}\">\n  <sv-title *ngIf=\"title\">\n    <ng-container *stringTemplateOutlet=\"title\">{{title}}</ng-container>\n  </sv-title>\n  <ng-content></ng-content>\n</div>\n",
                        preserveWhitespaces: false,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        /** @nocollapse */
        SVContainerComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: SVConfig }
        ]; };
        SVContainerComponent.propDecorators = {
            title: [{ type: core.Input }],
            size: [{ type: core.Input }],
            gutter: [{ type: core.Input }],
            layout: [{ type: core.Input }],
            labelWidth: [{ type: core.Input }],
            col: [{ type: core.Input }],
            default: [{ type: core.Input }]
        };
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Number)
        ], SVContainerComponent.prototype, "gutter", void 0);
        __decorate([
            util.InputNumber(null),
            __metadata("design:type", Number)
        ], SVContainerComponent.prototype, "labelWidth", void 0);
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Number)
        ], SVContainerComponent.prototype, "col", void 0);
        return SVContainerComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        SVContainerComponent.prototype.el;
        /** @type {?} */
        SVContainerComponent.prototype.title;
        /** @type {?} */
        SVContainerComponent.prototype.size;
        /**
         * 列表项间距，单位为 `px`
         * @type {?}
         */
        SVContainerComponent.prototype.gutter;
        /** @type {?} */
        SVContainerComponent.prototype.layout;
        /** @type {?} */
        SVContainerComponent.prototype.labelWidth;
        /**
         * 指定信息最多分几列展示，最终一行几列由 col 配置结合响应式规则决定
         * @type {?}
         */
        SVContainerComponent.prototype.col;
        /** @type {?} */
        SVContainerComponent.prototype.default;
        /**
         * @type {?}
         * @private
         */
        SVContainerComponent.prototype.ren;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: view-title.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SVTitleComponent = /** @class */ (function () {
        function SVTitleComponent(el, parent, ren) {
            this.parent = parent;
            this.ren = ren;
            if (parent == null) {
                throw new Error("[sv-title] must include 'sv-container' component");
            }
            this.el = el.nativeElement;
        }
        /**
         * @private
         * @return {?}
         */
        SVTitleComponent.prototype.setClass = /**
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
        SVTitleComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.setClass();
        };
        SVTitleComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'sv-title, [sv-title]',
                        exportAs: 'svTitle',
                        template: '<ng-content></ng-content>',
                        host: {
                            '[class.sv__title]': 'true',
                        },
                        preserveWhitespaces: false,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        /** @nocollapse */
        SVTitleComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: SVContainerComponent, decorators: [{ type: core.Host }, { type: core.Optional }] },
            { type: core.Renderer2 }
        ]; };
        return SVTitleComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        SVTitleComponent.prototype.el;
        /**
         * @type {?}
         * @private
         */
        SVTitleComponent.prototype.parent;
        /**
         * @type {?}
         * @private
         */
        SVTitleComponent.prototype.ren;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: view.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var prefixCls$1 = "sv";
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
            get: 
            // #endregion
            /**
             * @return {?}
             */
            function () {
                return this.parent && this.parent.gutter / 2;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SVComponent.prototype, "labelWidth", {
            get: /**
             * @return {?}
             */
            function () {
                var _a = this.parent, labelWidth = _a.labelWidth, layout = _a.layout;
                return layout === 'horizontal' ? labelWidth : null;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @private
         * @return {?}
         */
        SVComponent.prototype.setClass = /**
         * @private
         * @return {?}
         */
        function () {
            var _a = this, el = _a.el, ren = _a.ren, col = _a.col, clsMap = _a.clsMap, type = _a.type, rep = _a.rep;
            clsMap.forEach((/**
             * @param {?} cls
             * @return {?}
             */
            function (cls) { return ren.removeClass(el, cls); }));
            clsMap.length = 0;
            clsMap.push.apply(clsMap, __spread(rep.genCls(col != null ? col : this.parent.col)));
            clsMap.push(prefixCls$1 + "__item");
            if (this.parent.labelWidth)
                clsMap.push(prefixCls$1 + "__item-fixed");
            if (type)
                clsMap.push(prefixCls$1 + "__type-" + type);
            clsMap.forEach((/**
             * @param {?} cls
             * @return {?}
             */
            function (cls) { return ren.addClass(el, cls); }));
        };
        /**
         * @return {?}
         */
        SVComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            this.setClass();
            this.checkContent();
        };
        /**
         * @return {?}
         */
        SVComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
        function () {
            this.setClass();
        };
        /**
         * @return {?}
         */
        SVComponent.prototype.checkContent = /**
         * @return {?}
         */
        function () {
            var conEl = this.conEl;
            /** @type {?} */
            var def = this.default;
            if (!(def != null ? def : this.parent.default))
                return;
            /** @type {?} */
            var el = (/** @type {?} */ (conEl.nativeElement));
            /** @type {?} */
            var cls = "sv__default";
            if (el.classList.contains(cls)) {
                el.classList.remove(cls);
            }
            if (util.isEmpty(el)) {
                el.classList.add(cls);
            }
        };
        SVComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'sv, [sv]',
                        exportAs: 'sv',
                        template: "<div class=\"sv__label\" [class.sv__label-empty]=\"!label\" [class.sv__label-width]=\"labelWidth !== null\"\n  [style.width.px]=\"labelWidth\">\n  <span class=\"sv__label-text\">\n    <ng-container *stringTemplateOutlet=\"label\">{{label}}</ng-container>\n  </span>\n  <span *ngIf=\"optional || optionalHelp\" class=\"sv__label-optional\" [class.sv__label-optional-no-text]=\"!optional\">\n    <ng-container *stringTemplateOutlet=\"optional\">{{ optional }}</ng-container>\n    <i *ngIf=\"optionalHelp\" nz-tooltip [nzTooltipTitle]=\"optionalHelp\" nz-icon nzType=\"question-circle\"></i>\n  </span>\n</div>\n<div class=\"sv__detail\">\n  <span (cdkObserveContent)=\"checkContent()\" #conEl>\n    <ng-content></ng-content>\n  </span>\n  <ng-container *ngIf=\"!!unit\">\n    <span class=\"sv__unit\" *stringTemplateOutlet=\"unit\">{{unit}}</span>\n  </ng-container>\n</div>\n",
                        host: {
                            '[style.padding-left.px]': 'paddingValue',
                            '[style.padding-right.px]': 'paddingValue',
                        },
                        preserveWhitespaces: false,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        /** @nocollapse */
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
            label: [{ type: core.Input }],
            unit: [{ type: core.Input }],
            col: [{ type: core.Input }],
            default: [{ type: core.Input }],
            type: [{ type: core.Input }]
        };
        __decorate([
            util.InputNumber(null),
            __metadata("design:type", Number)
        ], SVComponent.prototype, "col", void 0);
        __decorate([
            util.InputBoolean(null),
            __metadata("design:type", Boolean)
        ], SVComponent.prototype, "default", void 0);
        return SVComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        SVComponent.prototype.conEl;
        /**
         * @type {?}
         * @private
         */
        SVComponent.prototype.el;
        /**
         * @type {?}
         * @private
         */
        SVComponent.prototype.clsMap;
        /** @type {?} */
        SVComponent.prototype.optional;
        /** @type {?} */
        SVComponent.prototype.optionalHelp;
        /** @type {?} */
        SVComponent.prototype.label;
        /** @type {?} */
        SVComponent.prototype.unit;
        /** @type {?} */
        SVComponent.prototype.col;
        /** @type {?} */
        SVComponent.prototype.default;
        /** @type {?} */
        SVComponent.prototype.type;
        /** @type {?} */
        SVComponent.prototype.parent;
        /**
         * @type {?}
         * @private
         */
        SVComponent.prototype.rep;
        /**
         * @type {?}
         * @private
         */
        SVComponent.prototype.ren;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: view.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COMPONENTS = [SVContainerComponent, SVComponent, SVTitleComponent];
    var SVModule = /** @class */ (function () {
        function SVModule() {
        }
        SVModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, observers.ObserversModule, util.DelonUtilModule, tooltip.NzToolTipModule, icon.NzIconModule],
                        declarations: __spread(COMPONENTS),
                        exports: __spread(COMPONENTS),
                    },] }
        ];
        return SVModule;
    }());

    exports.SVComponent = SVComponent;
    exports.SVConfig = SVConfig;
    exports.SVContainerComponent = SVContainerComponent;
    exports.SVModule = SVModule;
    exports.SVTitleComponent = SVTitleComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=view.umd.js.map
