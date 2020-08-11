/**
 * @license ng-alain(cipchk@qq.com) v10.0.0-beta.4
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/platform'), require('@angular/core'), require('@antv/data-set'), require('@antv/g2'), require('@delon/util'), require('rxjs'), require('rxjs/operators'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@delon/chart/tag-cloud', ['exports', '@angular/cdk/platform', '@angular/core', '@antv/data-set', '@antv/g2', '@delon/util', 'rxjs', 'rxjs/operators', '@angular/common'], factory) :
    (global = global || self, factory((global.delon = global.delon || {}, global.delon.chart = global.delon.chart || {}, global.delon.chart['tag-cloud'] = {}), global.ng.cdk.platform, global.ng.core, global.DataSet, global.g2, global.delon.util, global.rxjs, global.rxjs.operators, global.ng.common));
}(this, (function (exports, platform, core, DataSet, g2, util, rxjs, operators, common) { 'use strict';

    DataSet = DataSet && Object.prototype.hasOwnProperty.call(DataSet, 'default') ? DataSet['default'] : DataSet;

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
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
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

    /**
     * @fileoverview added by tsickle
     * Generated from: tag-cloud.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function G2TagCloudData() { }
    if (false) {
        /** @type {?|undefined} */
        G2TagCloudData.prototype.value;
        /** @type {?|undefined} */
        G2TagCloudData.prototype.name;
        /* Skipping unhandled member: [key: string]: any;*/
    }
    /**
     * @record
     */
    function G2TagCloudClickItem() { }
    if (false) {
        /** @type {?} */
        G2TagCloudClickItem.prototype.item;
        /** @type {?} */
        G2TagCloudClickItem.prototype.ev;
    }
    var G2TagCloudComponent = /** @class */ (function () {
        // #endregion
        /**
         * @param {?} el
         * @param {?} ngZone
         * @param {?} configSrv
         * @param {?} platform
         */
        function G2TagCloudComponent(el, ngZone, configSrv, platform) {
            this.el = el;
            this.ngZone = ngZone;
            this.platform = platform;
            // #region fields
            this.delay = 100;
            this.width = 0;
            this.height = 200;
            this.padding = 0;
            this.data = [];
            this.clickItem = new core.EventEmitter();
            configSrv.attachKey(this, 'chart', 'theme');
        }
        Object.defineProperty(G2TagCloudComponent.prototype, "chart", {
            /**
             * @return {?}
             */
            get: function () {
                return this._chart;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @private
         * @return {?}
         */
        G2TagCloudComponent.prototype.initTagCloud = function () {
            g2.registerShape('point', 'cloud', {
                // tslint:disable-next-line: typedef
                /**
                 * @param {?} cfg
                 * @param {?} container
                 * @return {?}
                 */
                draw: function (cfg, container) {
                    /** @type {?} */
                    var data = ( /** @type {?} */(cfg.data));
                    /** @type {?} */
                    var textShape = container.addShape({
                        type: 'text',
                        name: 'tag-cloud-text',
                        attrs: ( /** @type {?} */(Object.assign(Object.assign({}, cfg.style), { fontSize: data.size, text: data.text, textAlign: 'center', fontFamily: data.font, fill: cfg.color, textBaseline: 'Alphabetic', x: cfg.x, y: cfg.y }))),
                    });
                    if (data.rotate) {
                        g2.Util.rotate(textShape, (data.rotate * Math.PI) / 180);
                    }
                    return textShape;
                },
            });
        };
        /**
         * @private
         * @return {?}
         */
        G2TagCloudComponent.prototype.install = function () {
            var _this = this;
            var _b = this, el = _b.el, padding = _b.padding, theme = _b.theme;
            if (this.height === 0) {
                this.height = this.el.nativeElement.clientHeight;
            }
            if (this.width === 0) {
                this.width = this.el.nativeElement.clientWidth;
            }
            /** @type {?} */
            var chart = (this._chart = new g2.Chart({
                container: el.nativeElement,
                autoFit: false,
                padding: padding,
                height: this.height,
                width: this.width,
                theme: theme,
            }));
            chart.scale({
                x: { nice: false },
                y: { nice: false },
            });
            chart.legend(false);
            chart.axis(false);
            chart.tooltip({
                showTitle: false,
                showMarkers: false,
            });
            (( /** @type {?} */(chart.coordinate()))).reflect();
            chart
                .point()
                .position('x*y')
                .color('text')
                .shape('cloud')
                .state({
                active: {
                    style: {
                        fillOpacity: 0.4,
                    },
                },
            });
            chart.interaction('element-active');
            chart.on('tag-cloud-text:click', ( /**
             * @param {?} ev
             * @return {?}
             */function (ev) {
                _this.ngZone.run(( /**
                 * @return {?}
                 */function () { var _a; return _this.clickItem.emit({ item: (_a = ev.data) === null || _a === void 0 ? void 0 : _a.data, ev: ev }); }));
            }));
            this.attachChart();
        };
        /**
         * @private
         * @return {?}
         */
        G2TagCloudComponent.prototype.attachChart = function () {
            var _b = this, _chart = _b._chart, padding = _b.padding, data = _b.data;
            if (!_chart || !data || data.length <= 0)
                return;
            _chart.height = this.height;
            _chart.width = this.width;
            _chart.padding = padding;
            /** @type {?} */
            var dv = new DataSet.View().source(data);
            /** @type {?} */
            var range = dv.range('value');
            /** @type {?} */
            var min = range[0];
            /** @type {?} */
            var max = range[1];
            dv.transform(( /** @type {?} */({
                type: 'tag-cloud',
                fields: ['name', 'value'],
                // imageMask,
                font: 'Verdana',
                size: [this.width, this.height],
                // 宽高设置最好根据 imageMask 做调整
                padding: 0,
                timeInterval: 5000,
                // max execute time
                // tslint:disable-next-line: typedef
                /**
                 * @return {?}
                 */
                rotate: function () {
                    /** @type {?} */
                    var random = ~~(Math.random() * 4) % 4;
                    if (random === 2) {
                        random = 0;
                    }
                    return random * 90; // 0, 90, 270
                },
                // tslint:disable-next-line: typedef
                /**
                 * @param {?} d
                 * @return {?}
                 */
                fontSize: function (d) {
                    return ((d.value - min) / (max - min)) * (32 - 8) + 8;
                },
            })));
            _chart.data(dv.rows);
            _chart.render();
        };
        /**
         * @private
         * @return {?}
         */
        G2TagCloudComponent.prototype._attachChart = function () {
            var _this = this;
            this.ngZone.runOutsideAngular(( /**
             * @return {?}
             */function () { return _this.attachChart(); }));
        };
        /**
         * @private
         * @return {?}
         */
        G2TagCloudComponent.prototype.installResizeEvent = function () {
            var _this = this;
            this.resize$ = rxjs.fromEvent(window, 'resize')
                .pipe(operators.filter(( /**
         * @return {?}
         */function () { return !!_this._chart; })), operators.debounceTime(200))
                .subscribe(( /**
         * @return {?}
         */function () { return _this._attachChart(); }));
        };
        /**
         * @return {?}
         */
        G2TagCloudComponent.prototype.ngOnInit = function () {
            var _this = this;
            if (!this.platform.isBrowser) {
                return;
            }
            this.initTagCloud();
            this.installResizeEvent();
            this.ngZone.runOutsideAngular(( /**
             * @return {?}
             */function () { return setTimeout(( /**
             * @return {?}
             */function () { return _this.install(); }), _this.delay); }));
        };
        /**
         * @return {?}
         */
        G2TagCloudComponent.prototype.ngOnChanges = function () {
            this._attachChart();
        };
        /**
         * @return {?}
         */
        G2TagCloudComponent.prototype.ngOnDestroy = function () {
            var _this = this;
            if (this.resize$) {
                this.resize$.unsubscribe();
            }
            if (this._chart) {
                this.ngZone.runOutsideAngular(( /**
                 * @return {?}
                 */function () { return _this._chart.destroy(); }));
            }
        };
        return G2TagCloudComponent;
    }());
    G2TagCloudComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'g2-tag-cloud',
                    exportAs: 'g2TagCloud',
                    template: "",
                    preserveWhitespaces: false,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    G2TagCloudComponent.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.NgZone },
        { type: util.AlainConfigService },
        { type: platform.Platform }
    ]; };
    G2TagCloudComponent.propDecorators = {
        delay: [{ type: core.Input }],
        width: [{ type: core.Input }],
        height: [{ type: core.Input }],
        padding: [{ type: core.Input }],
        data: [{ type: core.Input }],
        theme: [{ type: core.Input }],
        clickItem: [{ type: core.Output }]
    };
    __decorate([
        util.InputNumber(),
        __metadata("design:type", Object)
    ], G2TagCloudComponent.prototype, "delay", void 0);
    __decorate([
        util.InputNumber(),
        __metadata("design:type", Object)
    ], G2TagCloudComponent.prototype, "width", void 0);
    __decorate([
        util.InputNumber(),
        __metadata("design:type", Object)
    ], G2TagCloudComponent.prototype, "height", void 0);
    if (false) {
        /**
         * @type {?}
         * @private
         */
        G2TagCloudComponent.prototype.resize$;
        /**
         * @type {?}
         * @private
         */
        G2TagCloudComponent.prototype._chart;
        /** @type {?} */
        G2TagCloudComponent.prototype.delay;
        /** @type {?} */
        G2TagCloudComponent.prototype.width;
        /** @type {?} */
        G2TagCloudComponent.prototype.height;
        /** @type {?} */
        G2TagCloudComponent.prototype.padding;
        /** @type {?} */
        G2TagCloudComponent.prototype.data;
        /** @type {?} */
        G2TagCloudComponent.prototype.theme;
        /** @type {?} */
        G2TagCloudComponent.prototype.clickItem;
        /**
         * @type {?}
         * @private
         */
        G2TagCloudComponent.prototype.el;
        /**
         * @type {?}
         * @private
         */
        G2TagCloudComponent.prototype.ngZone;
        /**
         * @type {?}
         * @private
         */
        G2TagCloudComponent.prototype.platform;
    }

    /** @type {?} */
    var COMPONENTS = [G2TagCloudComponent];
    var G2TagCloudModule = /** @class */ (function () {
        function G2TagCloudModule() {
        }
        return G2TagCloudModule;
    }());
    G2TagCloudModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule, util.DelonUtilModule],
                    declarations: __spread(COMPONENTS),
                    exports: __spread(COMPONENTS),
                },] }
    ];

    /**
     * @fileoverview added by tsickle
     * Generated from: public_api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: tag-cloud.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.G2TagCloudComponent = G2TagCloudComponent;
    exports.G2TagCloudModule = G2TagCloudModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=tag-cloud.umd.js.map
