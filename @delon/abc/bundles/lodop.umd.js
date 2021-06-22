/**
 * @license ng-alain(cipchk@qq.com) v11.10.2
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@delon/util/config'), require('@delon/util/other'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('@delon/abc/lodop', ['exports', '@angular/core', '@delon/util/config', '@delon/util/other', 'rxjs'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.abc = global.delon.abc || {}, global.delon.abc.lodop = {}), global.ng.core, global.i2, global.i1, global.rxjs));
}(this, (function (exports, i0, i2, i1, rxjs) { 'use strict';

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

    var LodopService = /** @class */ (function () {
        function LodopService(scriptSrv, configSrv) {
            this.scriptSrv = scriptSrv;
            this.pending = false;
            this._lodop = null;
            this._init = new rxjs.Subject();
            this._events = new rxjs.Subject();
            this.printBuffer = [];
            this.defaultConfig = configSrv.merge('lodop', {
                url: '//localhost:8443/CLodopfuncs.js',
                name: 'CLODOP',
                companyName: '',
                checkMaxCount: 100,
            });
            this.cog = this.defaultConfig;
        }
        Object.defineProperty(LodopService.prototype, "cog", {
            /**
             * Get or set configuration, **Note:** Resetting will invert and reload script resources
             *
             * 获取或重新设置配置，**注：**重新设置会倒置重新加载脚本资源
             */
            get: function () {
                return this._cog;
            },
            set: function (value) {
                this._cog = Object.assign(Object.assign({}, this.defaultConfig), value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LodopService.prototype, "events", {
            /**
             * Event change notification
             *
             * 事件变更通知
             */
            get: function () {
                return this._events.asObservable();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LodopService.prototype, "lodop", {
            /**
             * Get lodop object
             *
             * 获取 lodop 对象
             */
            get: function () {
                if (this._lodop)
                    return rxjs.of({ ok: true, lodop: this._lodop });
                if (this.pending)
                    return this._init.asObservable();
                this.request();
                return this._init.asObservable();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LodopService.prototype, "printer", {
            /**
             * Get printer list
             *
             * 获取打印机列表
             */
            get: function () {
                this.check();
                var ret = [];
                var count = this._lodop.GET_PRINTER_COUNT();
                for (var index = 0; index < count; index++) {
                    ret.push(this._lodop.GET_PRINTER_NAME(index));
                }
                return ret;
            },
            enumerable: false,
            configurable: true
        });
        LodopService.prototype.check = function () {
            if (!this._lodop)
                throw new Error("\u8BF7\u52A1\u5FC5\u5148\u8C03\u7528 lodop \u83B7\u53D6\u5BF9\u8C61");
        };
        LodopService.prototype.request = function () {
            var _this = this;
            this.pending = true;
            var url = this.cog.url + "?name=" + this.cog.name;
            var checkMaxCount = this.cog.checkMaxCount;
            var onResolve = function (status, error) {
                _this._init.next({
                    ok: status === 'ok',
                    status: status,
                    error: error,
                    lodop: _this._lodop,
                });
            };
            var checkStatus = function () {
                --checkMaxCount;
                if (_this._lodop.webskt && _this._lodop.webskt.readyState === 1) {
                    onResolve('ok');
                }
                else {
                    if (checkMaxCount < 0) {
                        onResolve('check-limit');
                        return;
                    }
                    setTimeout(function () { return checkStatus(); }, 100);
                }
            };
            this.scriptSrv.loadScript(url).then(function (res) {
                if (res.status !== 'ok') {
                    _this.pending = false;
                    onResolve('script-load-error', res[0]);
                    return;
                }
                var win = window;
                if (win.hasOwnProperty(_this.cog.name)) {
                    _this._lodop = win[_this.cog.name];
                }
                if (_this._lodop === null) {
                    onResolve('load-variable-name-error', { name: _this.cog.name });
                    return;
                }
                _this._lodop.SET_LICENSES(_this.cog.companyName, _this.cog.license, _this.cog.licenseA, _this.cog.licenseB);
                checkStatus();
            });
        };
        /**
         * Reset lodop object
         *
         * 重置 lodop 对象
         */
        LodopService.prototype.reset = function () {
            this._lodop = null;
            this.pending = false;
            this.request();
        };
        /**
         * Attach code to the `lodop` object, the string class supports dynamic parameters of `{{key}}`,
         * **Note:** The code refers to the string data generated by the print design
         *
         * 附加代码至 `lodop` 对象上，字符串类支持 `{{key}}` 的动态参数，**注：** 代码是指打印设计所产生字符串数据
         */
        LodopService.prototype.attachCode = function (code, contextObj, parser) {
            var _this = this;
            this.check();
            if (!parser)
                parser = /LODOP\.([^(]+)\(([^\n]+)?\);/i;
            code.split('\n').forEach(function (line) {
                var res = parser.exec(line.trim());
                if (!res)
                    return;
                var fn = _this._lodop[res[1]];
                if (fn) {
                    var arr = null;
                    try {
                        // tslint:disable-next-line: function-constructor
                        var fakeFn = new Function("return [" + res[2] + "]");
                        arr = fakeFn();
                    }
                    catch (_a) { }
                    if (arr != null && Array.isArray(arr) && contextObj) {
                        for (var i = 0; i < arr.length; i++) {
                            if (typeof arr[i] === 'string') {
                                arr[i] = arr[i].replace(/{{(.*?)}}/g, function (_match, key) { return contextObj[key.trim()] || ''; });
                            }
                        }
                    }
                    fn.apply(_this._lodop, arr);
                }
            });
        };
        /**
         * The code is automatically returned after opening the print design and closing,
         * **Note:** Automatically listen for the `On_Return` event, and it will be removed after running
         *
         * 打开打印设计关闭后自动返回代码，**注：** 自动监听 `On_Return` 事件，运行后会移除
         */
        LodopService.prototype.design = function () {
            var _this = this;
            this.check();
            var tid = this._lodop.PRINT_DESIGN();
            return new Promise(function (resolve) {
                _this._lodop.On_Return = function (taskID, value) {
                    if (tid !== taskID)
                        return;
                    _this._lodop.On_Return = null;
                    resolve('' + value);
                };
            });
        };
        LodopService.prototype.printDo = function () {
            var _this = this;
            var data = this.printBuffer.shift();
            if (!data)
                return;
            this.attachCode(data.code, data.item, data.parser);
            var tid = this._lodop.PRINT();
            this._lodop.On_Return = function (taskID, value) {
                if (tid !== taskID)
                    return;
                _this._lodop.On_Return = null;
                _this._events.next(Object.assign({ ok: value === true, error: value === true ? null : value }, data));
                _this.printDo();
            };
        };
        /**
         * Print immediately, generally used for batch printing
         *
         * 立即打印，一般用于批量套打
         */
        LodopService.prototype.print = function (code, contextObj, parser) {
            var _b;
            this.check();
            if (contextObj) {
                (_b = this.printBuffer).push.apply(_b, __spread((Array.isArray(contextObj) ? contextObj : [contextObj]).map(function (item) {
                    return { code: code, parser: parser, item: item };
                })));
            }
            this.printDo();
        };
        LodopService.prototype.ngOnDestroy = function () {
            this._init.unsubscribe();
            this._events.unsubscribe();
        };
        return LodopService;
    }());
    /** @nocollapse */ LodopService.ɵprov = i0.ɵɵdefineInjectable({ factory: function LodopService_Factory() { return new LodopService(i0.ɵɵinject(i1.LazyService), i0.ɵɵinject(i2.AlainConfigService)); }, token: LodopService, providedIn: "root" });
    LodopService.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    LodopService.ctorParameters = function () { return [
        { type: i1.LazyService },
        { type: i2.AlainConfigService }
    ]; };

    var LodopModule = /** @class */ (function () {
        function LodopModule() {
        }
        return LodopModule;
    }());
    LodopModule.decorators = [
        { type: i0.NgModule, args: [{},] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.LodopModule = LodopModule;
    exports.LodopService = LodopService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=lodop.umd.js.map
