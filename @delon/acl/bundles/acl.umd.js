/**
 * @license ng-alain(cipchk@qq.com) v2.0.0-beta.3-ed90aa6
 * (c) 2018 Cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@angular/router'), require('rxjs/operators'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@delon/acl', ['exports', '@angular/core', 'rxjs', '@angular/router', 'rxjs/operators', '@angular/common'], factory) :
    (factory((global.delon = global.delon || {}, global.delon.acl = {}),global.ng.core,global.rxjs,global.ng.router,global.rxjs.operators,global.ng.common));
}(this, (function (exports,core,rxjs,router,operators,common) { 'use strict';

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
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * 访问控制服务
     */
    var ACLService = /** @class */ (function () {
        function ACLService() {
            this.roles = [];
            this.abilities = [];
            this.full = false;
            this.aclChange = new rxjs.BehaviorSubject(null);
        }
        Object.defineProperty(ACLService.prototype, "change", {
            /** ACL变更通知 */
            get: /**
             * ACL变更通知
             * @return {?}
             */ function () {
                return this.aclChange.asObservable();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ACLService.prototype, "data", {
            /** 获取所有数据 */
            get: /**
             * 获取所有数据
             * @return {?}
             */ function () {
                return {
                    full: this.full,
                    roles: this.roles,
                    abilities: this.abilities,
                };
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} val
         * @return {?}
         */
        ACLService.prototype.parseACLType = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                if (typeof val !== 'string' && !Array.isArray(val)) {
                    return /** @type {?} */ (val);
                }
                if (Array.isArray(val)) {
                    return /** @type {?} */ ({ role: /** @type {?} */ (val) });
                }
                return /** @type {?} */ ({
                    role: [val],
                });
            };
        /**
         * 设置当前用户角色或权限能力（会先清除所有）
         */
        /**
         * 设置当前用户角色或权限能力（会先清除所有）
         * @param {?} value
         * @return {?}
         */
        ACLService.prototype.set = /**
         * 设置当前用户角色或权限能力（会先清除所有）
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.abilities = [];
                this.roles = [];
                this.add(value);
                this.aclChange.next(value);
            };
        /**
         * 标识当前用户为全量，即不受限
         */
        /**
         * 标识当前用户为全量，即不受限
         * @param {?} val
         * @return {?}
         */
        ACLService.prototype.setFull = /**
         * 标识当前用户为全量，即不受限
         * @param {?} val
         * @return {?}
         */
            function (val) {
                this.full = val;
                this.aclChange.next(val);
            };
        /**
         * 设置当前用户权限能力（会先清除所有）
         */
        /**
         * 设置当前用户权限能力（会先清除所有）
         * @param {?} abilities
         * @return {?}
         */
        ACLService.prototype.setAbility = /**
         * 设置当前用户权限能力（会先清除所有）
         * @param {?} abilities
         * @return {?}
         */
            function (abilities) {
                this.set(/** @type {?} */ ({ ability: abilities }));
            };
        /**
         * 设置当前用户角色（会先清除所有）
         */
        /**
         * 设置当前用户角色（会先清除所有）
         * @param {?} roles
         * @return {?}
         */
        ACLService.prototype.setRole = /**
         * 设置当前用户角色（会先清除所有）
         * @param {?} roles
         * @return {?}
         */
            function (roles) {
                this.set(/** @type {?} */ ({ role: roles }));
            };
        /**
         * 为当前用户增加角色或权限能力
         */
        /**
         * 为当前用户增加角色或权限能力
         * @param {?} value
         * @return {?}
         */
        ACLService.prototype.add = /**
         * 为当前用户增加角色或权限能力
         * @param {?} value
         * @return {?}
         */
            function (value) {
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
         */
        /**
         * 为当前用户附加角色
         * @param {?} roles
         * @return {?}
         */
        ACLService.prototype.attachRole = /**
         * 为当前用户附加角色
         * @param {?} roles
         * @return {?}
         */
            function (roles) {
                var e_1, _a;
                try {
                    for (var roles_1 = __values(roles), roles_1_1 = roles_1.next(); !roles_1_1.done; roles_1_1 = roles_1.next()) {
                        var val = roles_1_1.value;
                        if (!this.roles.includes(val)) {
                            this.roles.push(val);
                        }
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (roles_1_1 && !roles_1_1.done && (_a = roles_1.return))
                            _a.call(roles_1);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
                this.aclChange.next(this.data);
            };
        /**
         * 为当前用户附加权限
         */
        /**
         * 为当前用户附加权限
         * @param {?} abilities
         * @return {?}
         */
        ACLService.prototype.attachAbility = /**
         * 为当前用户附加权限
         * @param {?} abilities
         * @return {?}
         */
            function (abilities) {
                var e_2, _a;
                try {
                    for (var abilities_1 = __values(abilities), abilities_1_1 = abilities_1.next(); !abilities_1_1.done; abilities_1_1 = abilities_1.next()) {
                        var val = abilities_1_1.value;
                        if (!this.abilities.includes(val)) {
                            this.abilities.push(val);
                        }
                    }
                }
                catch (e_2_1) {
                    e_2 = { error: e_2_1 };
                }
                finally {
                    try {
                        if (abilities_1_1 && !abilities_1_1.done && (_a = abilities_1.return))
                            _a.call(abilities_1);
                    }
                    finally {
                        if (e_2)
                            throw e_2.error;
                    }
                }
                this.aclChange.next(this.data);
            };
        /**
         * 为当前用户移除角色
         */
        /**
         * 为当前用户移除角色
         * @param {?} roles
         * @return {?}
         */
        ACLService.prototype.removeRole = /**
         * 为当前用户移除角色
         * @param {?} roles
         * @return {?}
         */
            function (roles) {
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
                catch (e_3_1) {
                    e_3 = { error: e_3_1 };
                }
                finally {
                    try {
                        if (roles_2_1 && !roles_2_1.done && (_a = roles_2.return))
                            _a.call(roles_2);
                    }
                    finally {
                        if (e_3)
                            throw e_3.error;
                    }
                }
                this.aclChange.next(this.data);
            };
        /**
         * 为当前用户移除权限
         */
        /**
         * 为当前用户移除权限
         * @param {?} abilities
         * @return {?}
         */
        ACLService.prototype.removeAbility = /**
         * 为当前用户移除权限
         * @param {?} abilities
         * @return {?}
         */
            function (abilities) {
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
                catch (e_4_1) {
                    e_4 = { error: e_4_1 };
                }
                finally {
                    try {
                        if (abilities_2_1 && !abilities_2_1.done && (_a = abilities_2.return))
                            _a.call(abilities_2);
                    }
                    finally {
                        if (e_4)
                            throw e_4.error;
                    }
                }
                this.aclChange.next(this.data);
            };
        /**
         * 当前用户是否有对应角色，其实 `number` 表示Ability
         *
         * - 当 `full: true` 或参数 `null` 时返回 `true`
         * - 若使用 `ACLType` 参数，可以指定 `mode` 校验模式
         */
        /**
         * 当前用户是否有对应角色，其实 `number` 表示Ability
         *
         * - 当 `full: true` 或参数 `null` 时返回 `true`
         * - 若使用 `ACLType` 参数，可以指定 `mode` 校验模式
         * @param {?} roleOrAbility
         * @return {?}
         */
        ACLService.prototype.can = /**
         * 当前用户是否有对应角色，其实 `number` 表示Ability
         *
         * - 当 `full: true` 或参数 `null` 时返回 `true`
         * - 若使用 `ACLType` 参数，可以指定 `mode` 校验模式
         * @param {?} roleOrAbility
         * @return {?}
         */
            function (roleOrAbility) {
                var _this = this;
                if (this.full === true || !roleOrAbility) {
                    return true;
                }
                /** @type {?} */
                var t = {};
                if (typeof roleOrAbility === 'number') {
                    t = { ability: [roleOrAbility] };
                }
                else if (Array.isArray(roleOrAbility) &&
                    roleOrAbility.length > 0 &&
                    typeof roleOrAbility[0] === 'number') {
                    t = { ability: roleOrAbility };
                }
                else {
                    t = this.parseACLType(roleOrAbility);
                }
                if (t.role) {
                    if (t.mode === 'allOf')
                        return t.role.every(function (v) { return _this.roles.includes(v); });
                    else
                        return t.role.some(function (v) { return _this.roles.includes(v); });
                }
                if (t.ability) {
                    if (t.mode === 'allOf')
                        return ( /** @type {?} */(t.ability)).every(function (v) { return _this.abilities.includes(v); });
                    else
                        return ( /** @type {?} */(t.ability)).some(function (v) { return _this.abilities.includes(v); });
                }
                return false;
            };
        /** @inner */
        /**
         * \@inner
         * @param {?} value
         * @return {?}
         */
        ACLService.prototype.parseAbility = /**
         * \@inner
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (typeof value === 'number' ||
                    typeof value === 'string' ||
                    Array.isArray(value)) {
                    value = /** @type {?} */ ({ ability: Array.isArray(value) ? value : [value] });
                }
                delete value.role;
                return value;
            };
        /**
         * 当前用户是否有对应权限点
         */
        /**
         * 当前用户是否有对应权限点
         * @param {?} value
         * @return {?}
         */
        ACLService.prototype.canAbility = /**
         * 当前用户是否有对应权限点
         * @param {?} value
         * @return {?}
         */
            function (value) {
                return this.can(this.parseAbility(value));
            };
        ACLService.decorators = [
            { type: core.Injectable }
        ];
        return ACLService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ACLDirective = /** @class */ (function () {
        function ACLDirective(el, renderer, srv) {
            var _this = this;
            this.el = el;
            this.renderer = renderer;
            this.srv = srv;
            this.change$ = /** @type {?} */ (this.srv.change.subscribe(function () { return _this.set(_this._value); }));
        }
        Object.defineProperty(ACLDirective.prototype, "acl", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.set(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ACLDirective.prototype, "ability", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.set(this.srv.parseAbility(value));
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} value
         * @return {?}
         */
        ACLDirective.prototype.set = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                /** @type {?} */
                var CLS = 'acl__hide';
                /** @type {?} */
                var el = this.el.nativeElement;
                if (this.srv.can(value)) {
                    this.renderer.removeClass(el, CLS);
                }
                else {
                    this.renderer.addClass(el, CLS);
                }
                this._value = value;
            };
        /**
         * @return {?}
         */
        ACLDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.change$.unsubscribe();
            };
        ACLDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[acl]',
                    },] }
        ];
        /** @nocollapse */
        ACLDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Renderer2 },
                { type: ACLService }
            ];
        };
        ACLDirective.propDecorators = {
            acl: [{ type: core.Input, args: ['acl',] }],
            ability: [{ type: core.Input, args: ['acl-ability',] }]
        };
        return ACLDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var DelonACLConfig = /** @class */ (function () {
        function DelonACLConfig() {
            /**
             * 路由守卫失败后跳转，默认：`/403`
             */
            this.guard_url = '/403';
        }
        return DelonACLConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ACLGuard = /** @class */ (function () {
        function ACLGuard(srv, router$$1, options) {
            this.srv = srv;
            this.router = router$$1;
            this.options = options;
        }
        /**
         * @param {?} guard
         * @return {?}
         */
        ACLGuard.prototype.process = /**
         * @param {?} guard
         * @return {?}
         */
            function (guard) {
                var _this = this;
                return (guard && guard instanceof rxjs.Observable
                    ? guard
                    : rxjs.of(typeof guard !== 'undefined' && guard !== null
                        ? ( /** @type {?} */(guard))
                        : null)).pipe(operators.map(function (v) { return _this.srv.can(v); }), operators.tap(function (v) {
                    if (v)
                        return;
                    _this.router.navigateByUrl(_this.options.guard_url);
                }));
            };
        // lazy loading
        /**
         * @param {?} route
         * @return {?}
         */
        ACLGuard.prototype.canLoad = /**
         * @param {?} route
         * @return {?}
         */
            function (route) {
                return this.process((route.data && route.data["guard"]) || null);
            };
        // all children route
        /**
         * @param {?} childRoute
         * @param {?} state
         * @return {?}
         */
        ACLGuard.prototype.canActivateChild = /**
         * @param {?} childRoute
         * @param {?} state
         * @return {?}
         */
            function (childRoute, state) {
                return this.canActivate(childRoute, state);
            };
        // route
        /**
         * @param {?} route
         * @param {?} state
         * @return {?}
         */
        ACLGuard.prototype.canActivate = /**
         * @param {?} route
         * @param {?} state
         * @return {?}
         */
            function (route, state) {
                return this.process((route.data && route.data["guard"]) || null);
            };
        ACLGuard.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        ACLGuard.ctorParameters = function () {
            return [
                { type: ACLService },
                { type: router.Router },
                { type: DelonACLConfig }
            ];
        };
        return ACLGuard;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var SERVICES = [ACLService, ACLGuard];
    /** @type {?} */
    var COMPONENTS = [ACLDirective];
    var DelonACLModule = /** @class */ (function () {
        function DelonACLModule() {
        }
        /**
         * @return {?}
         */
        DelonACLModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: DelonACLModule,
                    providers: __spread([DelonACLConfig], SERVICES),
                };
            };
        DelonACLModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: __spread(COMPONENTS),
                        exports: __spread(COMPONENTS),
                    },] }
        ];
        return DelonACLModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.ACLService = ACLService;
    exports.ACLDirective = ACLDirective;
    exports.DelonACLConfig = DelonACLConfig;
    exports.ACLGuard = ACLGuard;
    exports.DelonACLModule = DelonACLModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNsLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJuZzovL0BkZWxvbi9hY2wvc3JjL2FjbC5zZXJ2aWNlLnRzIiwibmc6Ly9AZGVsb24vYWNsL3NyYy9hY2wuZGlyZWN0aXZlLnRzIiwibmc6Ly9AZGVsb24vYWNsL3NyYy9hY2wuY29uZmlnLnRzIiwibmc6Ly9AZGVsb24vYWNsL3NyYy9hY2wtZ3VhcmQudHMiLCJuZzovL0BkZWxvbi9hY2wvc3JjL2FjbC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBBQ0xUeXBlLCBBQ0xDYW5UeXBlIH0gZnJvbSAnLi9hY2wudHlwZSc7XHJcblxyXG4vKipcclxuICogw6jCrsK/w6nCl8Kuw6bCjsKnw6XCiMK2w6bCnMKNw6XCisKhXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBQ0xTZXJ2aWNlIHtcclxuICBwcml2YXRlIHJvbGVzOiBzdHJpbmdbXSA9IFtdO1xyXG4gIHByaXZhdGUgYWJpbGl0aWVzOiAobnVtYmVyIHwgc3RyaW5nKVtdID0gW107XHJcbiAgcHJpdmF0ZSBmdWxsID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBhY2xDaGFuZ2U6IEJlaGF2aW9yU3ViamVjdDxBQ0xUeXBlIHwgYm9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFxyXG4gICAgQUNMVHlwZSB8IGJvb2xlYW5cclxuICA+KG51bGwpO1xyXG5cclxuICAvKiogQUNMw6XCj8KYw6bCm8K0w6nCgMKaw6fCn8KlICovXHJcbiAgZ2V0IGNoYW5nZSgpOiBPYnNlcnZhYmxlPEFDTFR5cGUgfCBib29sZWFuPiB7XHJcbiAgICByZXR1cm4gdGhpcy5hY2xDaGFuZ2UuYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG5cclxuICAvKiogw6jCjsK3w6XCj8KWw6bCicKAw6bCnMKJw6bClcKww6bCjcKuICovXHJcbiAgZ2V0IGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBmdWxsOiB0aGlzLmZ1bGwsXHJcbiAgICAgIHJvbGVzOiB0aGlzLnJvbGVzLFxyXG4gICAgICBhYmlsaXRpZXM6IHRoaXMuYWJpbGl0aWVzLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcGFyc2VBQ0xUeXBlKHZhbDogc3RyaW5nIHwgc3RyaW5nW10gfCBBQ0xUeXBlKTogQUNMVHlwZSB7XHJcbiAgICBpZiAodHlwZW9mIHZhbCAhPT0gJ3N0cmluZycgJiYgIUFycmF5LmlzQXJyYXkodmFsKSkge1xyXG4gICAgICByZXR1cm4gPEFDTFR5cGU+dmFsO1xyXG4gICAgfVxyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xyXG4gICAgICByZXR1cm4gPEFDTFR5cGU+eyByb2xlOiA8c3RyaW5nW10+dmFsIH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gPEFDTFR5cGU+e1xyXG4gICAgICByb2xlOiBbdmFsXSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDDqMKuwr7Dp8K9wq7DpcK9wpPDpcKJwo3Dp8KUwqjDpsKIwrfDqMKnwpLDqMKJwrLDpsKIwpbDpsKdwoPDqcKZwpDDqMKDwr3DpcKKwpvDr8K8wojDpMK8wprDpcKFwojDpsK4woXDqcKZwqTDpsKJwoDDpsKcwonDr8K8wolcclxuICAgKi9cclxuICBzZXQodmFsdWU6IEFDTFR5cGUpIHtcclxuICAgIHRoaXMuYWJpbGl0aWVzID0gW107XHJcbiAgICB0aGlzLnJvbGVzID0gW107XHJcbiAgICB0aGlzLmFkZCh2YWx1ZSk7XHJcbiAgICB0aGlzLmFjbENoYW5nZS5uZXh0KHZhbHVlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIMOmwqDCh8Oowq/ChsOlwr3Ck8OlwonCjcOnwpTCqMOmwojCt8OkwrjCusOlwoXCqMOpwofCj8OvwrzCjMOlwo3Cs8OkwrjCjcOlwo/Cl8OpwpnCkFxyXG4gICAqL1xyXG4gIHNldEZ1bGwodmFsOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmZ1bGwgPSB2YWw7XHJcbiAgICB0aGlzLmFjbENoYW5nZS5uZXh0KHZhbCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDDqMKuwr7Dp8K9wq7DpcK9wpPDpcKJwo3Dp8KUwqjDpsKIwrfDpsKdwoPDqcKZwpDDqMKDwr3DpcKKwpvDr8K8wojDpMK8wprDpcKFwojDpsK4woXDqcKZwqTDpsKJwoDDpsKcwonDr8K8wolcclxuICAgKi9cclxuICBzZXRBYmlsaXR5KGFiaWxpdGllczogKG51bWJlciB8IHN0cmluZylbXSkge1xyXG4gICAgdGhpcy5zZXQoPEFDTFR5cGU+eyBhYmlsaXR5OiBhYmlsaXRpZXMgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDDqMKuwr7Dp8K9wq7DpcK9wpPDpcKJwo3Dp8KUwqjDpsKIwrfDqMKnwpLDqMKJwrLDr8K8wojDpMK8wprDpcKFwojDpsK4woXDqcKZwqTDpsKJwoDDpsKcwonDr8K8wolcclxuICAgKi9cclxuICBzZXRSb2xlKHJvbGVzOiBzdHJpbmdbXSkge1xyXG4gICAgdGhpcy5zZXQoPEFDTFR5cGU+eyByb2xlOiByb2xlcyB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIMOkwrjCusOlwr3Ck8OlwonCjcOnwpTCqMOmwojCt8OlwqLCnsOlworCoMOowqfCksOowonCssOmwojClsOmwp3Cg8OpwpnCkMOowoPCvcOlworCm1xyXG4gICAqL1xyXG4gIGFkZCh2YWx1ZTogQUNMVHlwZSkge1xyXG4gICAgaWYgKHZhbHVlLnJvbGUgJiYgdmFsdWUucm9sZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMucm9sZXMucHVzaCguLi52YWx1ZS5yb2xlKTtcclxuICAgIH1cclxuICAgIGlmICh2YWx1ZS5hYmlsaXR5ICYmIHZhbHVlLmFiaWxpdHkubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLmFiaWxpdGllcy5wdXNoKC4uLnZhbHVlLmFiaWxpdHkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogw6TCuMK6w6XCvcKTw6XCicKNw6fClMKow6bCiMK3w6nCmcKEw6XCisKgw6jCp8KSw6jCicKyXHJcbiAgICovXHJcbiAgYXR0YWNoUm9sZShyb2xlczogc3RyaW5nW10pIHtcclxuICAgIGZvciAoY29uc3QgdmFsIG9mIHJvbGVzKSB7XHJcbiAgICAgIGlmICghdGhpcy5yb2xlcy5pbmNsdWRlcyh2YWwpKSB7XHJcbiAgICAgICAgdGhpcy5yb2xlcy5wdXNoKHZhbCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuYWNsQ2hhbmdlLm5leHQodGhpcy5kYXRhKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIMOkwrjCusOlwr3Ck8OlwonCjcOnwpTCqMOmwojCt8OpwpnChMOlworCoMOmwp3Cg8OpwpnCkFxyXG4gICAqL1xyXG4gIGF0dGFjaEFiaWxpdHkoYWJpbGl0aWVzOiAobnVtYmVyIHwgc3RyaW5nKVtdKSB7XHJcbiAgICBmb3IgKGNvbnN0IHZhbCBvZiBhYmlsaXRpZXMpIHtcclxuICAgICAgaWYgKCF0aGlzLmFiaWxpdGllcy5pbmNsdWRlcyh2YWwpKSB7XHJcbiAgICAgICAgdGhpcy5hYmlsaXRpZXMucHVzaCh2YWwpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmFjbENoYW5nZS5uZXh0KHRoaXMuZGF0YSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDDpMK4wrrDpcK9wpPDpcKJwo3Dp8KUwqjDpsKIwrfDp8KnwrvDqcKZwqTDqMKnwpLDqMKJwrJcclxuICAgKi9cclxuICByZW1vdmVSb2xlKHJvbGVzOiBzdHJpbmdbXSkge1xyXG4gICAgZm9yIChjb25zdCB2YWwgb2Ygcm9sZXMpIHtcclxuICAgICAgY29uc3QgaWR4ID0gdGhpcy5yb2xlcy5pbmRleE9mKHZhbCk7XHJcbiAgICAgIGlmIChpZHggIT09IC0xKSB7XHJcbiAgICAgICAgdGhpcy5yb2xlcy5zcGxpY2UoaWR4LCAxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5hY2xDaGFuZ2UubmV4dCh0aGlzLmRhdGEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogw6TCuMK6w6XCvcKTw6XCicKNw6fClMKow6bCiMK3w6fCp8K7w6nCmcKkw6bCncKDw6nCmcKQXHJcbiAgICovXHJcbiAgcmVtb3ZlQWJpbGl0eShhYmlsaXRpZXM6IChudW1iZXIgfCBzdHJpbmcpW10pIHtcclxuICAgIGZvciAoY29uc3QgdmFsIG9mIGFiaWxpdGllcykge1xyXG4gICAgICBjb25zdCBpZHggPSB0aGlzLmFiaWxpdGllcy5pbmRleE9mKHZhbCk7XHJcbiAgICAgIGlmIChpZHggIT09IC0xKSB7XHJcbiAgICAgICAgdGhpcy5hYmlsaXRpZXMuc3BsaWNlKGlkeCwgMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuYWNsQ2hhbmdlLm5leHQodGhpcy5kYXRhKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIMOlwr3Ck8OlwonCjcOnwpTCqMOmwojCt8OmwpjCr8OlwpDCpsOmwpzCicOlwq/CucOlwrrClMOowqfCksOowonCssOvwrzCjMOlwoXCtsOlwq7CniBgbnVtYmVyYCDDqMKhwqjDp8KkwrpBYmlsaXR5XHJcbiAgICpcclxuICAgKiAtIMOlwr3CkyBgZnVsbDogdHJ1ZWAgw6bCiMKWw6XCj8KCw6bClcKwIGBudWxsYCDDpsKXwrbDqMK/wpTDpcKbwp4gYHRydWVgXHJcbiAgICogLSDDqMKLwqXDpMK9wr/Dp8KUwqggYEFDTFR5cGVgIMOlwo/CgsOmwpXCsMOvwrzCjMOlwo/Cr8OkwrvCpcOmwozCh8Olwq7CmiBgbW9kZWAgw6bCoMKhw6nCqsKMw6bCqMKhw6XCvMKPXHJcbiAgICovXHJcbiAgY2FuKHJvbGVPckFiaWxpdHk6IEFDTENhblR5cGUpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLmZ1bGwgPT09IHRydWUgfHwgIXJvbGVPckFiaWxpdHkpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHQ6IEFDTFR5cGUgPSB7fTtcclxuICAgIGlmICh0eXBlb2Ygcm9sZU9yQWJpbGl0eSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgdCA9IHsgYWJpbGl0eTogW3JvbGVPckFiaWxpdHldIH07XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICBBcnJheS5pc0FycmF5KHJvbGVPckFiaWxpdHkpICYmXHJcbiAgICAgIHJvbGVPckFiaWxpdHkubGVuZ3RoID4gMCAmJlxyXG4gICAgICB0eXBlb2Ygcm9sZU9yQWJpbGl0eVswXSA9PT0gJ251bWJlcidcclxuICAgICkge1xyXG4gICAgICB0ID0geyBhYmlsaXR5OiByb2xlT3JBYmlsaXR5IH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0ID0gdGhpcy5wYXJzZUFDTFR5cGUocm9sZU9yQWJpbGl0eSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHQucm9sZSkge1xyXG4gICAgICBpZiAodC5tb2RlID09PSAnYWxsT2YnKSByZXR1cm4gdC5yb2xlLmV2ZXJ5KHYgPT4gdGhpcy5yb2xlcy5pbmNsdWRlcyh2KSk7XHJcbiAgICAgIGVsc2UgcmV0dXJuIHQucm9sZS5zb21lKHYgPT4gdGhpcy5yb2xlcy5pbmNsdWRlcyh2KSk7XHJcbiAgICB9XHJcbiAgICBpZiAodC5hYmlsaXR5KSB7XHJcbiAgICAgIGlmICh0Lm1vZGUgPT09ICdhbGxPZicpXHJcbiAgICAgICAgcmV0dXJuICh0LmFiaWxpdHkgYXMgYW55W10pLmV2ZXJ5KHYgPT4gdGhpcy5hYmlsaXRpZXMuaW5jbHVkZXModikpO1xyXG4gICAgICBlbHNlIHJldHVybiAodC5hYmlsaXR5IGFzIGFueVtdKS5zb21lKHYgPT4gdGhpcy5hYmlsaXRpZXMuaW5jbHVkZXModikpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBpbm5lciAqL1xyXG4gIHBhcnNlQWJpbGl0eSh2YWx1ZTogQUNMQ2FuVHlwZSk6IEFDTENhblR5cGUge1xyXG4gICAgaWYgKFxyXG4gICAgICB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInIHx8XHJcbiAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgfHxcclxuICAgICAgQXJyYXkuaXNBcnJheSh2YWx1ZSlcclxuICAgICkge1xyXG4gICAgICB2YWx1ZSA9IDxBQ0xUeXBlPnsgYWJpbGl0eTogQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IFt2YWx1ZV0gfTtcclxuICAgIH1cclxuICAgIGRlbGV0ZSB2YWx1ZS5yb2xlO1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogw6XCvcKTw6XCicKNw6fClMKow6bCiMK3w6bCmMKvw6XCkMKmw6bCnMKJw6XCr8K5w6XCusKUw6bCncKDw6nCmcKQw6fCgsK5XHJcbiAgICovXHJcbiAgY2FuQWJpbGl0eSh2YWx1ZTogQUNMQ2FuVHlwZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY2FuKHRoaXMucGFyc2VBYmlsaXR5KHZhbHVlKSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgRGlyZWN0aXZlLFxyXG4gIElucHV0LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIE9uRGVzdHJveSxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBBQ0xTZXJ2aWNlIH0gZnJvbSAnLi9hY2wuc2VydmljZSc7XHJcbmltcG9ydCB7IEFDTENhblR5cGUgfSBmcm9tICcuL2FjbC50eXBlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2FjbF0nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQUNMRGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuICBwcml2YXRlIF92YWx1ZTogYW55O1xyXG4gIHByaXZhdGUgY2hhbmdlJDogU3Vic2NyaXB0aW9uO1xyXG5cclxuICBASW5wdXQoJ2FjbCcpXHJcbiAgc2V0IGFjbCh2YWx1ZTogQUNMQ2FuVHlwZSkge1xyXG4gICAgdGhpcy5zZXQodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCdhY2wtYWJpbGl0eScpXHJcbiAgc2V0IGFiaWxpdHkodmFsdWU6IEFDTENhblR5cGUpIHtcclxuICAgIHRoaXMuc2V0KHRoaXMuc3J2LnBhcnNlQWJpbGl0eSh2YWx1ZSkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXQodmFsdWU6IEFDTENhblR5cGUpIHtcclxuICAgIGNvbnN0IENMUyA9ICdhY2xfX2hpZGUnO1xyXG4gICAgY29uc3QgZWwgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBpZiAodGhpcy5zcnYuY2FuKHZhbHVlKSkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKGVsLCBDTFMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhlbCwgQ0xTKTtcclxuICAgIH1cclxuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIHNydjogQUNMU2VydmljZSxcclxuICApIHtcclxuICAgIHRoaXMuY2hhbmdlJCA9IDxhbnk+dGhpcy5zcnYuY2hhbmdlLnN1YnNjcmliZSgoKSA9PiB0aGlzLnNldCh0aGlzLl92YWx1ZSkpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmNoYW5nZSQudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIERlbG9uQUNMQ29uZmlnIHtcclxuICAvKipcclxuICAgKiDDqMK3wq/Dp8KUwrHDpcKuwojDpcKNwqvDpcKkwrHDqMK0wqXDpcKQwo7DqMK3wrPDqMK9wqzDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgLzQwM2BcclxuICAgKi9cclxuICBndWFyZF91cmw/ID0gJy80MDMnO1xyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgQ2FuQWN0aXZhdGUsXHJcbiAgQ2FuQWN0aXZhdGVDaGlsZCxcclxuICBDYW5Mb2FkLFxyXG4gIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXHJcbiAgUm91dGUsXHJcbiAgUm91dGVyU3RhdGVTbmFwc2hvdCxcclxuICBSb3V0ZXIsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IEFDTFNlcnZpY2UgfSBmcm9tICcuL2FjbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQUNMQ2FuVHlwZSB9IGZyb20gJy4vYWNsLnR5cGUnO1xyXG5pbXBvcnQgeyBEZWxvbkFDTENvbmZpZyB9IGZyb20gJy4vYWNsLmNvbmZpZyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBQ0xHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlLCBDYW5BY3RpdmF0ZUNoaWxkLCBDYW5Mb2FkIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgc3J2OiBBQ0xTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgIHByaXZhdGUgb3B0aW9uczogRGVsb25BQ0xDb25maWcsXHJcbiAgKSB7fVxyXG5cclxuICBwcml2YXRlIHByb2Nlc3MoXHJcbiAgICBndWFyZDogQUNMQ2FuVHlwZSB8IE9ic2VydmFibGU8QUNMQ2FuVHlwZT4sXHJcbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm4gKGd1YXJkICYmIGd1YXJkIGluc3RhbmNlb2YgT2JzZXJ2YWJsZVxyXG4gICAgICA/IGd1YXJkXHJcbiAgICAgIDogb2YoXHJcbiAgICAgICAgICB0eXBlb2YgZ3VhcmQgIT09ICd1bmRlZmluZWQnICYmIGd1YXJkICE9PSBudWxsXHJcbiAgICAgICAgICAgID8gKGd1YXJkIGFzIEFDTENhblR5cGUpXHJcbiAgICAgICAgICAgIDogbnVsbCxcclxuICAgICAgICApXHJcbiAgICApLnBpcGUoXHJcbiAgICAgIG1hcCh2ID0+IHRoaXMuc3J2LmNhbih2KSksXHJcbiAgICAgIHRhcCh2ID0+IHtcclxuICAgICAgICBpZiAodikgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwodGhpcy5vcHRpb25zLmd1YXJkX3VybCk7XHJcbiAgICAgIH0pLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8vIGxhenkgbG9hZGluZ1xyXG4gIGNhbkxvYWQocm91dGU6IFJvdXRlKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9jZXNzKChyb3V0ZS5kYXRhICYmIHJvdXRlLmRhdGEuZ3VhcmQpIHx8IG51bGwpO1xyXG4gIH1cclxuICAvLyBhbGwgY2hpbGRyZW4gcm91dGVcclxuICBjYW5BY3RpdmF0ZUNoaWxkKFxyXG4gICAgY2hpbGRSb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcclxuICAgIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90LFxyXG4gICk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY2FuQWN0aXZhdGUoY2hpbGRSb3V0ZSwgc3RhdGUpO1xyXG4gIH1cclxuICAvLyByb3V0ZVxyXG4gIGNhbkFjdGl2YXRlKFxyXG4gICAgcm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXHJcbiAgICBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCxcclxuICApOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybiB0aGlzLnByb2Nlc3MoKHJvdXRlLmRhdGEgJiYgcm91dGUuZGF0YS5ndWFyZCkgfHwgbnVsbCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBEZWxvbkFDTENvbmZpZyB9IGZyb20gJy4vYWNsLmNvbmZpZyc7XHJcbmltcG9ydCB7IEFDTEd1YXJkIH0gZnJvbSAnLi9hY2wtZ3VhcmQnO1xyXG5pbXBvcnQgeyBBQ0xTZXJ2aWNlIH0gZnJvbSAnLi9hY2wuc2VydmljZSc7XHJcbmltcG9ydCB7IEFDTERpcmVjdGl2ZSB9IGZyb20gJy4vYWNsLmRpcmVjdGl2ZSc7XHJcblxyXG5jb25zdCBTRVJWSUNFUyA9IFtBQ0xTZXJ2aWNlLCBBQ0xHdWFyZF07XHJcbmNvbnN0IENPTVBPTkVOVFMgPSBbQUNMRGlyZWN0aXZlXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbLi4uQ09NUE9ORU5UU10sXHJcbiAgZXhwb3J0czogWy4uLkNPTVBPTkVOVFNdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGVsb25BQ0xNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IERlbG9uQUNMTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtEZWxvbkFDTENvbmZpZywgLi4uU0VSVklDRVNdLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIkJlaGF2aW9yU3ViamVjdCIsInRzbGliXzEuX192YWx1ZXMiLCJJbmplY3RhYmxlIiwiRGlyZWN0aXZlIiwiRWxlbWVudFJlZiIsIlJlbmRlcmVyMiIsIklucHV0Iiwicm91dGVyIiwiT2JzZXJ2YWJsZSIsIm9mIiwibWFwIiwidGFwIiwiUm91dGVyIiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFBOzs7Ozs7Ozs7Ozs7OztBQWNBLHNCQTRGeUIsQ0FBQztRQUN0QixJQUFJLENBQUMsR0FBRyxPQUFPLE1BQU0sS0FBSyxVQUFVLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQztZQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QixPQUFPO1lBQ0gsSUFBSSxFQUFFO2dCQUNGLElBQUksQ0FBQyxJQUFJLENBQUMs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