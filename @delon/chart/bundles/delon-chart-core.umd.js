/**
 * @license ng-alain(cipchk@qq.com) v11.10.2
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@delon/util/config'), require('@delon/util/other'), require('rxjs'), require('@angular/cdk/platform'), require('@delon/util/decorator'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@delon/chart/core', ['exports', '@angular/core', '@delon/util/config', '@delon/util/other', 'rxjs', '@angular/cdk/platform', '@delon/util/decorator', 'rxjs/operators'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.chart = global.delon.chart || {}, global.delon.chart.core = {}), global.ng.core, global.i1, global.i2, global.rxjs, global.ng.cdk.platform, global.decorator, global.rxjs.operators));
}(this, (function (exports, i0, i1, i2, rxjs, platform, decorator, operators) { 'use strict';

    var G2Service = /** @class */ (function () {
        function G2Service(cogSrv, lazySrv) {
            this.cogSrv = cogSrv;
            this.lazySrv = lazySrv;
            this.loading = false;
            this.loaded = false;
            this.notify$ = new rxjs.Subject();
            this.cog = { theme: '' };
        }
        Object.defineProperty(G2Service.prototype, "cog", {
            get: function () {
                return this._cog;
            },
            set: function (val) {
                this._cog = this.cogSrv.merge('chart', {
                    theme: '',
                    libs: [
                        'https://gw.alipayobjects.com/os/lib/antv/g2/4.1.14/dist/g2.min.js',
                        'https://gw.alipayobjects.com/os/lib/antv/data-set/0.11.8/dist/data-set.js',
                    ],
                }, val);
            },
            enumerable: false,
            configurable: true
        });
        G2Service.prototype.libLoad = function () {
            var _this = this;
            if (this.loading) {
                if (this.loaded) {
                    this.notify$.next();
                }
                return this;
            }
            this.loading = true;
            this.lazySrv.load(this.cog.libs).then(function () {
                _this.loaded = true;
                _this.notify$.next();
            });
            return this;
        };
        Object.defineProperty(G2Service.prototype, "notify", {
            get: function () {
                return this.notify$.asObservable();
            },
            enumerable: false,
            configurable: true
        });
        G2Service.prototype.ngOnDestroy = function () {
            this.notify$.unsubscribe();
        };
        return G2Service;
    }());
    /** @nocollapse */ G2Service.ɵprov = i0.ɵɵdefineInjectable({ factory: function G2Service_Factory() { return new G2Service(i0.ɵɵinject(i1.AlainConfigService), i0.ɵɵinject(i2.LazyService)); }, token: G2Service, providedIn: "root" });
    G2Service.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    G2Service.ctorParameters = function () { return [
        { type: i1.AlainConfigService },
        { type: i2.LazyService }
    ]; };

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

    var G2BaseComponent = /** @class */ (function () {
        function G2BaseComponent(srv, el, ngZone, platform, cdr) {
            var _this = this;
            this.srv = srv;
            this.el = el;
            this.ngZone = ngZone;
            this.platform = platform;
            this.cdr = cdr;
            this.repaint = true;
            this.destroy$ = new rxjs.Subject();
            this.loaded = false;
            this.delay = 0;
            this.theme = srv.cog.theme;
            this.srv.notify
                .pipe(operators.takeUntil(this.destroy$), operators.filter(function () { return !_this.loaded; }))
                .subscribe(function () { return _this.load(); });
        }
        Object.defineProperty(G2BaseComponent.prototype, "chart", {
            get: function () {
                return this._chart;
            },
            enumerable: false,
            configurable: true
        });
        /** G2数据变更 */
        G2BaseComponent.prototype.changeData = function () { };
        /** 等同 `ngOnInit` */
        G2BaseComponent.prototype.onInit = function () { };
        /** 等同 `ngOnChanges` */
        G2BaseComponent.prototype.onChanges = function (_) { };
        G2BaseComponent.prototype.load = function () {
            var _this = this;
            this.ngZone.run(function () {
                _this.loaded = true;
                _this.cdr.detectChanges();
            });
            setTimeout(function () { return _this.install(); }, this.delay);
        };
        G2BaseComponent.prototype.ngOnInit = function () {
            if (!this.platform.isBrowser) {
                return;
            }
            this.onInit();
            if (window.G2) {
                this.load();
            }
            else {
                this.srv.libLoad();
            }
        };
        G2BaseComponent.prototype.ngOnChanges = function (changes) {
            var _this = this;
            this.onChanges(changes);
            var isOnlyChangeData = this.onlyChangeData ? this.onlyChangeData(changes) : Object.keys(changes).length === 1 && !!changes.data;
            if (isOnlyChangeData) {
                this.changeData();
                return;
            }
            if (!this.chart || !this.repaint)
                return;
            this.ngZone.runOutsideAngular(function () {
                _this.destroyChart().install();
            });
        };
        G2BaseComponent.prototype.destroyChart = function () {
            if (this._chart) {
                this._chart.destroy();
            }
            return this;
        };
        G2BaseComponent.prototype.ngOnDestroy = function () {
            if (this.resize$) {
                this.resize$.unsubscribe();
            }
            this.destroy$.next();
            this.destroy$.complete();
            this.destroyChart();
        };
        return G2BaseComponent;
    }());
    G2BaseComponent.decorators = [
        { type: i0.Directive }
    ];
    /** @nocollapse */
    G2BaseComponent.ctorParameters = function () { return [
        { type: G2Service },
        { type: i0.ElementRef },
        { type: i0.NgZone },
        { type: platform.Platform },
        { type: i0.ChangeDetectorRef }
    ]; };
    G2BaseComponent.propDecorators = {
        repaint: [{ type: i0.Input }],
        node: [{ type: i0.ViewChild, args: ['container', { static: true },] }],
        delay: [{ type: i0.Input }],
        theme: [{ type: i0.Input }]
    };
    __decorate([
        decorator.InputBoolean(),
        __metadata("design:type", Object)
    ], G2BaseComponent.prototype, "repaint", void 0);
    __decorate([
        decorator.InputNumber(),
        __metadata("design:type", Object)
    ], G2BaseComponent.prototype, "delay", void 0);
    __decorate([
        decorator.ZoneOutside(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], G2BaseComponent.prototype, "load", null);
    __decorate([
        decorator.ZoneOutside(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Object)
    ], G2BaseComponent.prototype, "destroyChart", null);

    function genMiniTooltipOptions(type, options) {
        var res = Object.assign({ showTitle: false, showMarkers: true, enterable: true, domStyles: {
                'g2-tooltip': { padding: '0px' },
                'g2-tooltip-title': { display: 'none' },
                'g2-tooltip-list-item': { margin: '4px' },
            } }, options);
        if (type === 'mini') {
            res.position = 'top';
            res.domStyles['g2-tooltip'] = { padding: '0px', backgroundColor: 'transparent', boxShadow: 'none' };
            res.itemTpl = "<li>{value}</li>";
            res.offset = 8;
        }
        return res;
    }

    /**
     * Generated bundle index. Do not edit.
     */

    exports.G2BaseComponent = G2BaseComponent;
    exports.G2Service = G2Service;
    exports.genMiniTooltipOptions = genMiniTooltipOptions;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=delon-chart-core.umd.js.map
