/**
 * @license ng-alain(cipchk@qq.com) v11.1.0
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@delon/util'), require('rxjs'), require('rxjs/operators'), require('@angular/router'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@delon/acl', ['exports', '@angular/core', '@delon/util', 'rxjs', 'rxjs/operators', '@angular/router', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.acl = {}), global.ng.core, global.delon.util, global.rxjs, global.rxjs.operators, global.ng.router, global.ng.common));
}(this, (function (exports, i0, util, rxjs, operators, i2, common) { 'use strict';

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

    /**
     * @fileoverview added by tsickle
     * Generated from: src/acl.config.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var ACL_DEFAULT_CONFIG = {
        guard_url: "/403",
    };

    /**
     * ACL 控制服务，[在线文档](https://ng-alain.com/acl)
     *
     * 务必在根目录注册 `DelonACLModule.forRoot()` 才能使用服务
     */
    var ACLService = /** @class */ (function () {
        /**
         * @param {?} configSrv
         */
        function ACLService(configSrv) {
            this.roles = [];
            this.abilities = [];
            this.full = false;
            this.aclChange = new rxjs.BehaviorSubject(null);
            this.options = ( /** @type {?} */(configSrv.merge('acl', ACL_DEFAULT_CONFIG)));
        }
        Object.defineProperty(ACLService.prototype, "change", {
            /**
             * ACL变更通知
             * @return {?}
             */
            get: function () {
                return this.aclChange.asObservable();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ACLService.prototype, "data", {
            /**
             * 获取所有数据
             * @return {?}
             */
            get: function () {
                return {
                    full: this.full,
                    roles: this.roles,
                    abilities: this.abilities,
                };
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ACLService.prototype, "guard_url", {
            /**
             * @return {?}
             */
            get: function () {
                return ( /** @type {?} */(this.options.guard_url));
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @private
         * @param {?} val
         * @return {?}
         */
        ACLService.prototype.parseACLType = function (val) {
            /** @type {?} */
            var t;
            if (typeof val === 'number') {
                t = { ability: [val] };
            }
            else if (Array.isArray(val) && val.length > 0 && typeof val[0] === 'number') {
                t = { ability: val };
            }
            else if (typeof val === 'object' && !Array.isArray(val)) {
                t = Object.assign({}, val);
            }
            else if (Array.isArray(val)) {
                t = { role: ( /** @type {?} */(val)) };
            }
            else {
                t = { role: val == null ? [] : [val] };
            }
            return Object.assign({ except: false }, t);
        };
        /**
         * 设置当前用户角色或权限能力（会先清除所有）
         * @param {?} value
         * @return {?}
         */
        ACLService.prototype.set = function (value) {
            this.abilities = [];
            this.roles = [];
            this.add(value);
            this.aclChange.next(value);
        };
        /**
         * 标识当前用户为全量，即不受限
         * @param {?} val
         * @return {?}
         */
        ACLService.prototype.setFull = function (val) {
            this.full = val;
            this.aclChange.next(val);
        };
        /**
         * 设置当前用户权限能力（会先清除所有）
         * @param {?} abilities
         * @return {?}
         */
        ACLService.prototype.setAbility = function (abilities) {
            this.set(( /** @type {?} */({ ability: abilities })));
        };
        /**
         * 设置当前用户角色（会先清除所有）
         * @param {?} roles
         * @return {?}
         */
        ACLService.prototype.setRole = function (roles) {
            this.set(( /** @type {?} */({ role: roles })));
        };
        /**
         * 为当前用户增加角色或权限能力
         * @param {?} value
         * @return {?}
         */
        ACLService.prototype.add = function (value) {
            var _a, _b;
            if (value.role && value.role.length > 0) {
                (_a = this.roles).push.apply(_a, __spread(value.role));
            }
            if (value.ability && value.ability.length > 0) {
                (_b = this.abilities).push.apply(_b, __spread(value.ability));
            }
        };
        /**
         * 为当前用户附加角色
         * @param {?} roles
         * @return {?}
         */
        ACLService.prototype.attachRole = function (roles) {
            var e_1, _a;
            try {
                for (var roles_1 = __values(roles), roles_1_1 = roles_1.next(); !roles_1_1.done; roles_1_1 = roles_1.next()) {
                    var val = roles_1_1.value;
                    if (!this.roles.includes(val)) {
                        this.roles.push(val);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (roles_1_1 && !roles_1_1.done && (_a = roles_1.return)) _a.call(roles_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            this.aclChange.next(this.data);
        };
        /**
         * 为当前用户附加权限
         * @param {?} abilities
         * @return {?}
         */
        ACLService.prototype.attachAbility = function (abilities) {
            var e_2, _a;
            try {
                for (var abilities_1 = __values(abilities), abilities_1_1 = abilities_1.next(); !abilities_1_1.done; abilities_1_1 = abilities_1.next()) {
                    var val = abilities_1_1.value;
                    if (!this.abilities.includes(val)) {
                        this.abilities.push(val);
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (abilities_1_1 && !abilities_1_1.done && (_a = abilities_1.return)) _a.call(abilities_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
            this.aclChange.next(this.data);
        };
        /**
         * 为当前用户移除角色
         * @param {?} roles
         * @return {?}
         */
        ACLService.prototype.removeRole = function (roles) {
            var e_3, _a;
            try {
                for (var roles_2 = __values(roles), roles_2_1 = roles_2.next(); !roles_2_1.done; roles_2_1 = roles_2.next()) {
                    var val = roles_2_1.value;
                    /** @type {?} */
                    var idx = this.roles.indexOf(val);
                    if (idx !== -1) {
                        this.roles.splice(idx, 1);
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (roles_2_1 && !roles_2_1.done && (_a = roles_2.return)) _a.call(roles_2);
                }
                finally { if (e_3) throw e_3.error; }
            }
            this.aclChange.next(this.data);
        };
        /**
         * 为当前用户移除权限
         * @param {?} abilities
         * @return {?}
         */
        ACLService.prototype.removeAbility = function (abilities) {
            var e_4, _a;
            try {
                for (var abilities_2 = __values(abilities), abilities_2_1 = abilities_2.next(); !abilities_2_1.done; abilities_2_1 = abilities_2.next()) {
                    var val = abilities_2_1.value;
                    /** @type {?} */
                    var idx = this.abilities.indexOf(val);
                    if (idx !== -1) {
                        this.abilities.splice(idx, 1);
                    }
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (abilities_2_1 && !abilities_2_1.done && (_a = abilities_2.return)) _a.call(abilities_2);
                }
                finally { if (e_4) throw e_4.error; }
            }
            this.aclChange.next(this.data);
        };
        /**
         * 当前用户是否有对应角色，其实 `number` 表示Ability
         *
         * - 当 `full: true` 或参数 `null` 时返回 `true`
         * - 若使用 `ACLType` 参数，可以指定 `mode` 校验模式
         * @param {?} roleOrAbility
         * @return {?}
         */
        ACLService.prototype.can = function (roleOrAbility) {
            var _this = this;
            var preCan = this.options.preCan;
            if (preCan) {
                roleOrAbility = preCan(( /** @type {?} */(roleOrAbility)));
            }
            /** @type {?} */
            var t = this.parseACLType(roleOrAbility);
            /** @type {?} */
            var result = false;
            if (this.full === true || !roleOrAbility) {
                result = true;
            }
            else {
                if (t.role && t.role.length > 0) {
                    if (t.mode === 'allOf') {
                        result = t.role.every(( /**
                         * @param {?} v
                         * @return {?}
                         */function (/**
                         * @param {?} v
                         * @return {?}
                         */ v) { return _this.roles.includes(v); }));
                    }
                    else {
                        result = t.role.some(( /**
                         * @param {?} v
                         * @return {?}
                         */function (/**
                         * @param {?} v
                         * @return {?}
                         */ v) { return _this.roles.includes(v); }));
                    }
                }
                if (t.ability && t.ability.length > 0) {
                    if (t.mode === 'allOf') {
                        result = (( /** @type {?} */(t.ability))).every(( /**
                         * @param {?} v
                         * @return {?}
                         */function (/**
                         * @param {?} v
                         * @return {?}
                         */ v) { return _this.abilities.includes(v); }));
                    }
                    else {
                        result = (( /** @type {?} */(t.ability))).some(( /**
                         * @param {?} v
                         * @return {?}
                         */function (/**
                         * @param {?} v
                         * @return {?}
                         */ v) { return _this.abilities.includes(v); }));
                    }
                }
            }
            return t.except === true ? !result : result;
        };
        /**
         * \@inner
         * @param {?} value
         * @return {?}
         */
        ACLService.prototype.parseAbility = function (value) {
            if (typeof value === 'number' || typeof value === 'string' || Array.isArray(value)) {
                value = ( /** @type {?} */({ ability: Array.isArray(value) ? value : [value] }));
            }
            delete value.role;
            return value;
        };
        /**
         * 当前用户是否有对应权限点
         * @param {?} value
         * @return {?}
         */
        ACLService.prototype.canAbility = function (value) {
            return this.can(this.parseAbility(value));
        };
        return ACLService;
    }());
    ACLService.decorators = [
        { type: i0.Injectable }
    ];
    /** @nocollapse */
    ACLService.ctorParameters = function () { return [
        { type: util.AlainConfigService }
    ]; };
    if (false) {
        /**
         * @type {?}
         * @private
         */
        ACLService.prototype.options;
        /**
         * @type {?}
         * @private
         */
        ACLService.prototype.roles;
        /**
         * @type {?}
         * @private
         */
        ACLService.prototype.abilities;
        /**
         * @type {?}
         * @private
         */
        ACLService.prototype.full;
        /**
         * @type {?}
         * @private
         */
        ACLService.prototype.aclChange;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/acl-if.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ACLIfDirective = /** @class */ (function () {
        /**
         * @param {?} templateRef
         * @param {?} srv
         * @param {?} _viewContainer
         */
        function ACLIfDirective(templateRef, srv, _viewContainer) {
            var _this = this;
            this.srv = srv;
            this._viewContainer = _viewContainer;
            this._thenTemplateRef = null;
            this._elseTemplateRef = null;
            this._thenViewRef = null;
            this._elseViewRef = null;
            this.except = false;
            this._change$ = this.srv.change.pipe(operators.filter(( /**
             * @param {?} r
             * @return {?}
             */function (/**
             * @param {?} r
             * @return {?}
             */ r) { return r != null; }))).subscribe(( /**
             * @return {?}
             */function () { return _this._updateView(); }));
            this._thenTemplateRef = templateRef;
        }
        Object.defineProperty(ACLIfDirective.prototype, "aclIf", {
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                this._value = value;
                this._updateView();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ACLIfDirective.prototype, "aclIfThen", {
            /**
             * @param {?} templateRef
             * @return {?}
             */
            set: function (templateRef) {
                this._thenTemplateRef = templateRef;
                this._thenViewRef = null;
                this._updateView();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ACLIfDirective.prototype, "aclIfElse", {
            /**
             * @param {?} templateRef
             * @return {?}
             */
            set: function (templateRef) {
                this._elseTemplateRef = templateRef;
                this._elseViewRef = null;
                this._updateView();
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @protected
         * @return {?}
         */
        ACLIfDirective.prototype._updateView = function () {
            /** @type {?} */
            var res = this.srv.can(this._value);
            if ((res && !this.except) || (!res && this.except)) {
                if (!this._thenViewRef) {
                    this._viewContainer.clear();
                    this._elseViewRef = null;
                    if (this._thenTemplateRef) {
                        this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef);
                    }
                }
            }
            else {
                if (!this._elseViewRef) {
                    this._viewContainer.clear();
                    this._thenViewRef = null;
                    if (this._elseTemplateRef) {
                        this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef);
                    }
                }
            }
        };
        /**
         * @return {?}
         */
        ACLIfDirective.prototype.ngOnDestroy = function () {
            this._change$.unsubscribe();
        };
        return ACLIfDirective;
    }());
    ACLIfDirective.decorators = [
        { type: i0.Directive, args: [{
                    selector: '[aclIf]',
                    exportAs: 'aclIf',
                },] }
    ];
    /** @nocollapse */
    ACLIfDirective.ctorParameters = function () { return [
        { type: i0.TemplateRef },
        { type: ACLService },
        { type: i0.ViewContainerRef }
    ]; };
    ACLIfDirective.propDecorators = {
        aclIf: [{ type: i0.Input }],
        aclIfThen: [{ type: i0.Input }],
        aclIfElse: [{ type: i0.Input }],
        except: [{ type: i0.Input }]
    };
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Object)
    ], ACLIfDirective.prototype, "except", void 0);
    if (false) {
        /**
         * @type {?}
         * @private
         */
        ACLIfDirective.prototype._value;
        /**
         * @type {?}
         * @private
         */
        ACLIfDirective.prototype._change$;
        /**
         * @type {?}
         * @private
         */
        ACLIfDirective.prototype._thenTemplateRef;
        /**
         * @type {?}
         * @private
         */
        ACLIfDirective.prototype._elseTemplateRef;
        /**
         * @type {?}
         * @private
         */
        ACLIfDirective.prototype._thenViewRef;
        /**
         * @type {?}
         * @private
         */
        ACLIfDirective.prototype._elseViewRef;
        /** @type {?} */
        ACLIfDirective.prototype.except;
        /**
         * @type {?}
         * @private
         */
        ACLIfDirective.prototype.srv;
        /**
         * @type {?}
         * @private
         */
        ACLIfDirective.prototype._viewContainer;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/acl.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ACLDirective = /** @class */ (function () {
        /**
         * @param {?} el
         * @param {?} renderer
         * @param {?} srv
         */
        function ACLDirective(el, renderer, srv) {
            var _this = this;
            this.el = el;
            this.renderer = renderer;
            this.srv = srv;
            this.change$ = this.srv.change.pipe(operators.filter(( /**
             * @param {?} r
             * @return {?}
             */function (/**
             * @param {?} r
             * @return {?}
             */ r) { return r != null; }))).subscribe(( /**
             * @return {?}
             */function () { return _this.set(_this._value); }));
        }
        Object.defineProperty(ACLDirective.prototype, "acl", {
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                this.set(value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ACLDirective.prototype, "ability", {
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                this.set(this.srv.parseAbility(value));
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        ACLDirective.prototype.set = function (value) {
            this._value = value;
            /** @type {?} */
            var CLS = 'acl__hide';
            /** @type {?} */
            var el = this.el.nativeElement;
            if (this.srv.can(this._value)) {
                this.renderer.removeClass(el, CLS);
            }
            else {
                this.renderer.addClass(el, CLS);
            }
        };
        /**
         * @return {?}
         */
        ACLDirective.prototype.ngOnDestroy = function () {
            this.change$.unsubscribe();
        };
        return ACLDirective;
    }());
    ACLDirective.decorators = [
        { type: i0.Directive, args: [{
                    selector: '[acl]',
                    exportAs: 'acl',
                },] }
    ];
    /** @nocollapse */
    ACLDirective.ctorParameters = function () { return [
        { type: i0.ElementRef },
        { type: i0.Renderer2 },
        { type: ACLService }
    ]; };
    ACLDirective.propDecorators = {
        acl: [{ type: i0.Input, args: ['acl',] }],
        ability: [{ type: i0.Input, args: ['acl-ability',] }]
    };
    if (false) {
        /**
         * @type {?}
         * @private
         */
        ACLDirective.prototype._value;
        /**
         * @type {?}
         * @private
         */
        ACLDirective.prototype.change$;
        /**
         * @type {?}
         * @private
         */
        ACLDirective.prototype.el;
        /**
         * @type {?}
         * @private
         */
        ACLDirective.prototype.renderer;
        /**
         * @type {?}
         * @protected
         */
        ACLDirective.prototype.srv;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/acl-guard.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Routing guard prevent unauthorized users visit the page, [ACL Document](https://ng-alain.com/acl).
     *
     * ```ts
     * data: {
     *  path: 'home',
     *  canActivate: [ ACLGuard ],
     *  data: { guard: 'user1' }
     * }
     * ```
     */
    var ACLGuard = /** @class */ (function () {
        /**
         * @param {?} srv
         * @param {?} router
         */
        function ACLGuard(srv, router) {
            this.srv = srv;
            this.router = router;
        }
        /**
         * @private
         * @param {?} data
         * @return {?}
         */
        ACLGuard.prototype.process = function (data) {
            var _this = this;
            data = Object.assign({ guard: null, guard_url: this.srv.guard_url }, data);
            /** @type {?} */
            var guard = data.guard;
            return (guard && guard instanceof rxjs.Observable ? guard : rxjs.of(guard != null ? (( /** @type {?} */(guard))) : null)).pipe(operators.map(( /**
             * @param {?} v
             * @return {?}
             */function (/**
             * @param {?} v
             * @return {?}
             */ v) { return _this.srv.can(v); })), operators.tap(( /**
             * @param {?} v
             * @return {?}
             */function (/**
             * @param {?} v
             * @return {?}
             */ v) {
                if (v)
                    return;
                _this.router.navigateByUrl(data.guard_url);
            })));
        };
        // lazy loading
        /**
         * @param {?} route
         * @return {?}
         */
        ACLGuard.prototype.canLoad = function (route) {
            return this.process(( /** @type {?} */(route.data)));
        };
        // all children route
        /**
         * @param {?} childRoute
         * @param {?} state
         * @return {?}
         */
        ACLGuard.prototype.canActivateChild = function (childRoute, state) {
            return this.canActivate(childRoute, state);
        };
        // route
        /**
         * @param {?} route
         * @param {?} _state
         * @return {?}
         */
        ACLGuard.prototype.canActivate = function (route, _state) {
            return this.process(route.data);
        };
        return ACLGuard;
    }());
    ACLGuard.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ACLGuard.ctorParameters = function () { return [
        { type: ACLService },
        { type: i2.Router }
    ]; };
    /** @nocollapse */ ACLGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function ACLGuard_Factory() { return new ACLGuard(i0.ɵɵinject(ACLService), i0.ɵɵinject(i2.Router)); }, token: ACLGuard, providedIn: "root" });
    if (false) {
        /**
         * @type {?}
         * @private
         */
        ACLGuard.prototype.srv;
        /**
         * @type {?}
         * @private
         */
        ACLGuard.prototype.router;
    }

    /** @type {?} */
    var COMPONENTS = [ACLDirective, ACLIfDirective];
    var DelonACLModule = /** @class */ (function () {
        function DelonACLModule() {
        }
        /**
         * @return {?}
         */
        DelonACLModule.forRoot = function () {
            return {
                ngModule: DelonACLModule,
                providers: [ACLService],
            };
        };
        return DelonACLModule;
    }());
    DelonACLModule.decorators = [
        { type: i0.NgModule, args: [{
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
     * Generated from: acl.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.ACLDirective = ACLDirective;
    exports.ACLGuard = ACLGuard;
    exports.ACLIfDirective = ACLIfDirective;
    exports.ACLService = ACLService;
    exports.ACL_DEFAULT_CONFIG = ACL_DEFAULT_CONFIG;
    exports.DelonACLModule = DelonACLModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=acl.umd.js.map
