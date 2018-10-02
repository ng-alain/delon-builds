import { __spread, __values } from 'tslib';
import { Injectable, Directive, Input, ElementRef, Renderer2, NgModule } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

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
        this.aclChange = new BehaviorSubject(null);
    }
    Object.defineProperty(ACLService.prototype, "change", {
        /** ACL变更通知 */
        get: /**
         * ACL变更通知
         * @return {?}
         */
        function () {
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
         */
        function () {
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
                return (/** @type {?} */ (t.ability)).every(function (v) { return _this.abilities.includes(v); });
            else
                return (/** @type {?} */ (t.ability)).some(function (v) { return _this.abilities.includes(v); });
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
        { type: Injectable }
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
         */
        function (value) {
            this.set(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ACLDirective.prototype, "ability", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
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
        { type: Directive, args: [{
                    selector: '[acl]',
                },] }
    ];
    /** @nocollapse */
    ACLDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: ACLService }
    ]; };
    ACLDirective.propDecorators = {
        acl: [{ type: Input, args: ['acl',] }],
        ability: [{ type: Input, args: ['acl-ability',] }]
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
    function ACLGuard(srv, router, options) {
        this.srv = srv;
        this.router = router;
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
        return (guard && guard instanceof Observable
            ? guard
            : of(typeof guard !== 'undefined' && guard !== null
                ? (/** @type {?} */ (guard))
                : null)).pipe(map(function (v) { return _this.srv.can(v); }), tap(function (v) {
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
        { type: Injectable }
    ];
    /** @nocollapse */
    ACLGuard.ctorParameters = function () { return [
        { type: ACLService },
        { type: Router },
        { type: DelonACLConfig }
    ]; };
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
        { type: NgModule, args: [{
                    imports: [CommonModule],
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

export { ACLService, ACLDirective, DelonACLConfig, ACLGuard, DelonACLModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNsLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AZGVsb24vYWNsL3NyYy9hY2wuc2VydmljZS50cyIsIm5nOi8vQGRlbG9uL2FjbC9zcmMvYWNsLmRpcmVjdGl2ZS50cyIsIm5nOi8vQGRlbG9uL2FjbC9zcmMvYWNsLmNvbmZpZy50cyIsIm5nOi8vQGRlbG9uL2FjbC9zcmMvYWNsLWd1YXJkLnRzIiwibmc6Ly9AZGVsb24vYWNsL3NyYy9hY2wubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEFDTFR5cGUsIEFDTENhblR5cGUgfSBmcm9tICcuL2FjbC50eXBlJztcclxuXHJcbi8qKlxyXG4gKiDDqMKuwr/DqcKXwq7DpsKOwqfDpcKIwrbDpsKcwo3DpcKKwqFcclxuICovXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFDTFNlcnZpY2Uge1xyXG4gIHByaXZhdGUgcm9sZXM6IHN0cmluZ1tdID0gW107XHJcbiAgcHJpdmF0ZSBhYmlsaXRpZXM6IChudW1iZXIgfCBzdHJpbmcpW10gPSBbXTtcclxuICBwcml2YXRlIGZ1bGwgPSBmYWxzZTtcclxuICBwcml2YXRlIGFjbENoYW5nZTogQmVoYXZpb3JTdWJqZWN0PEFDTFR5cGUgfCBib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8XHJcbiAgICBBQ0xUeXBlIHwgYm9vbGVhblxyXG4gID4obnVsbCk7XHJcblxyXG4gIC8qKiBBQ0zDpcKPwpjDpsKbwrTDqcKAwprDp8KfwqUgKi9cclxuICBnZXQgY2hhbmdlKCk6IE9ic2VydmFibGU8QUNMVHlwZSB8IGJvb2xlYW4+IHtcclxuICAgIHJldHVybiB0aGlzLmFjbENoYW5nZS5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIC8qKiDDqMKOwrfDpcKPwpbDpsKJwoDDpsKcwonDpsKVwrDDpsKNwq4gKi9cclxuICBnZXQgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGZ1bGw6IHRoaXMuZnVsbCxcclxuICAgICAgcm9sZXM6IHRoaXMucm9sZXMsXHJcbiAgICAgIGFiaWxpdGllczogdGhpcy5hYmlsaXRpZXMsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwYXJzZUFDTFR5cGUodmFsOiBzdHJpbmcgfCBzdHJpbmdbXSB8IEFDTFR5cGUpOiBBQ0xUeXBlIHtcclxuICAgIGlmICh0eXBlb2YgdmFsICE9PSAnc3RyaW5nJyAmJiAhQXJyYXkuaXNBcnJheSh2YWwpKSB7XHJcbiAgICAgIHJldHVybiA8QUNMVHlwZT52YWw7XHJcbiAgICB9XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XHJcbiAgICAgIHJldHVybiA8QUNMVHlwZT57IHJvbGU6IDxzdHJpbmdbXT52YWwgfTtcclxuICAgIH1cclxuICAgIHJldHVybiA8QUNMVHlwZT57XHJcbiAgICAgIHJvbGU6IFt2YWxdLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIMOowq7CvsOnwr3CrsOlwr3Ck8OlwonCjcOnwpTCqMOmwojCt8OowqfCksOowonCssOmwojClsOmwp3Cg8OpwpnCkMOowoPCvcOlworCm8OvwrzCiMOkwrzCmsOlwoXCiMOmwrjChcOpwpnCpMOmwonCgMOmwpzCicOvwrzCiVxyXG4gICAqL1xyXG4gIHNldCh2YWx1ZTogQUNMVHlwZSkge1xyXG4gICAgdGhpcy5hYmlsaXRpZXMgPSBbXTtcclxuICAgIHRoaXMucm9sZXMgPSBbXTtcclxuICAgIHRoaXMuYWRkKHZhbHVlKTtcclxuICAgIHRoaXMuYWNsQ2hhbmdlLm5leHQodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogw6bCoMKHw6jCr8KGw6XCvcKTw6XCicKNw6fClMKow6bCiMK3w6TCuMK6w6XChcKow6nCh8KPw6/CvMKMw6XCjcKzw6TCuMKNw6XCj8KXw6nCmcKQXHJcbiAgICovXHJcbiAgc2V0RnVsbCh2YWw6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuZnVsbCA9IHZhbDtcclxuICAgIHRoaXMuYWNsQ2hhbmdlLm5leHQodmFsKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIMOowq7CvsOnwr3CrsOlwr3Ck8OlwonCjcOnwpTCqMOmwojCt8Omwp3Cg8OpwpnCkMOowoPCvcOlworCm8OvwrzCiMOkwrzCmsOlwoXCiMOmwrjChcOpwpnCpMOmwonCgMOmwpzCicOvwrzCiVxyXG4gICAqL1xyXG4gIHNldEFiaWxpdHkoYWJpbGl0aWVzOiAobnVtYmVyIHwgc3RyaW5nKVtdKSB7XHJcbiAgICB0aGlzLnNldCg8QUNMVHlwZT57IGFiaWxpdHk6IGFiaWxpdGllcyB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIMOowq7CvsOnwr3CrsOlwr3Ck8OlwonCjcOnwpTCqMOmwojCt8OowqfCksOowonCssOvwrzCiMOkwrzCmsOlwoXCiMOmwrjChcOpwpnCpMOmwonCgMOmwpzCicOvwrzCiVxyXG4gICAqL1xyXG4gIHNldFJvbGUocm9sZXM6IHN0cmluZ1tdKSB7XHJcbiAgICB0aGlzLnNldCg8QUNMVHlwZT57IHJvbGU6IHJvbGVzIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogw6TCuMK6w6XCvcKTw6XCicKNw6fClMKow6bCiMK3w6XCosKew6XCisKgw6jCp8KSw6jCicKyw6bCiMKWw6bCncKDw6nCmcKQw6jCg8K9w6XCisKbXHJcbiAgICovXHJcbiAgYWRkKHZhbHVlOiBBQ0xUeXBlKSB7XHJcbiAgICBpZiAodmFsdWUucm9sZSAmJiB2YWx1ZS5yb2xlLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5yb2xlcy5wdXNoKC4uLnZhbHVlLnJvbGUpO1xyXG4gICAgfVxyXG4gICAgaWYgKHZhbHVlLmFiaWxpdHkgJiYgdmFsdWUuYWJpbGl0eS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuYWJpbGl0aWVzLnB1c2goLi4udmFsdWUuYWJpbGl0eSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDDpMK4wrrDpcK9wpPDpcKJwo3Dp8KUwqjDpsKIwrfDqcKZwoTDpcKKwqDDqMKnwpLDqMKJwrJcclxuICAgKi9cclxuICBhdHRhY2hSb2xlKHJvbGVzOiBzdHJpbmdbXSkge1xyXG4gICAgZm9yIChjb25zdCB2YWwgb2Ygcm9sZXMpIHtcclxuICAgICAgaWYgKCF0aGlzLnJvbGVzLmluY2x1ZGVzKHZhbCkpIHtcclxuICAgICAgICB0aGlzLnJvbGVzLnB1c2godmFsKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5hY2xDaGFuZ2UubmV4dCh0aGlzLmRhdGEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogw6TCuMK6w6XCvcKTw6XCicKNw6fClMKow6bCiMK3w6nCmcKEw6XCisKgw6bCncKDw6nCmcKQXHJcbiAgICovXHJcbiAgYXR0YWNoQWJpbGl0eShhYmlsaXRpZXM6IChudW1iZXIgfCBzdHJpbmcpW10pIHtcclxuICAgIGZvciAoY29uc3QgdmFsIG9mIGFiaWxpdGllcykge1xyXG4gICAgICBpZiAoIXRoaXMuYWJpbGl0aWVzLmluY2x1ZGVzKHZhbCkpIHtcclxuICAgICAgICB0aGlzLmFiaWxpdGllcy5wdXNoKHZhbCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuYWNsQ2hhbmdlLm5leHQodGhpcy5kYXRhKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIMOkwrjCusOlwr3Ck8OlwonCjcOnwpTCqMOmwojCt8OnwqfCu8OpwpnCpMOowqfCksOowonCslxyXG4gICAqL1xyXG4gIHJlbW92ZVJvbGUocm9sZXM6IHN0cmluZ1tdKSB7XHJcbiAgICBmb3IgKGNvbnN0IHZhbCBvZiByb2xlcykge1xyXG4gICAgICBjb25zdCBpZHggPSB0aGlzLnJvbGVzLmluZGV4T2YodmFsKTtcclxuICAgICAgaWYgKGlkeCAhPT0gLTEpIHtcclxuICAgICAgICB0aGlzLnJvbGVzLnNwbGljZShpZHgsIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmFjbENoYW5nZS5uZXh0KHRoaXMuZGF0YSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDDpMK4wrrDpcK9wpPDpcKJwo3Dp8KUwqjDpsKIwrfDp8KnwrvDqcKZwqTDpsKdwoPDqcKZwpBcclxuICAgKi9cclxuICByZW1vdmVBYmlsaXR5KGFiaWxpdGllczogKG51bWJlciB8IHN0cmluZylbXSkge1xyXG4gICAgZm9yIChjb25zdCB2YWwgb2YgYWJpbGl0aWVzKSB7XHJcbiAgICAgIGNvbnN0IGlkeCA9IHRoaXMuYWJpbGl0aWVzLmluZGV4T2YodmFsKTtcclxuICAgICAgaWYgKGlkeCAhPT0gLTEpIHtcclxuICAgICAgICB0aGlzLmFiaWxpdGllcy5zcGxpY2UoaWR4LCAxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5hY2xDaGFuZ2UubmV4dCh0aGlzLmRhdGEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogw6XCvcKTw6XCicKNw6fClMKow6bCiMK3w6bCmMKvw6XCkMKmw6bCnMKJw6XCr8K5w6XCusKUw6jCp8KSw6jCicKyw6/CvMKMw6XChcK2w6XCrsKeIGBudW1iZXJgIMOowqHCqMOnwqTCukFiaWxpdHlcclxuICAgKlxyXG4gICAqIC0gw6XCvcKTIGBmdWxsOiB0cnVlYCDDpsKIwpbDpcKPwoLDpsKVwrAgYG51bGxgIMOmwpfCtsOowr/ClMOlwpvCniBgdHJ1ZWBcclxuICAgKiAtIMOowovCpcOkwr3Cv8OnwpTCqCBgQUNMVHlwZWAgw6XCj8KCw6bClcKww6/CvMKMw6XCj8Kvw6TCu8Klw6bCjMKHw6XCrsKaIGBtb2RlYCDDpsKgwqHDqcKqwozDpsKowqHDpcK8wo9cclxuICAgKi9cclxuICBjYW4ocm9sZU9yQWJpbGl0eTogQUNMQ2FuVHlwZSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHRoaXMuZnVsbCA9PT0gdHJ1ZSB8fCAhcm9sZU9yQWJpbGl0eSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgdDogQUNMVHlwZSA9IHt9O1xyXG4gICAgaWYgKHR5cGVvZiByb2xlT3JBYmlsaXR5ID09PSAnbnVtYmVyJykge1xyXG4gICAgICB0ID0geyBhYmlsaXR5OiBbcm9sZU9yQWJpbGl0eV0gfTtcclxuICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgIEFycmF5LmlzQXJyYXkocm9sZU9yQWJpbGl0eSkgJiZcclxuICAgICAgcm9sZU9yQWJpbGl0eS5sZW5ndGggPiAwICYmXHJcbiAgICAgIHR5cGVvZiByb2xlT3JBYmlsaXR5WzBdID09PSAnbnVtYmVyJ1xyXG4gICAgKSB7XHJcbiAgICAgIHQgPSB7IGFiaWxpdHk6IHJvbGVPckFiaWxpdHkgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHQgPSB0aGlzLnBhcnNlQUNMVHlwZShyb2xlT3JBYmlsaXR5KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodC5yb2xlKSB7XHJcbiAgICAgIGlmICh0Lm1vZGUgPT09ICdhbGxPZicpIHJldHVybiB0LnJvbGUuZXZlcnkodiA9PiB0aGlzLnJvbGVzLmluY2x1ZGVzKHYpKTtcclxuICAgICAgZWxzZSByZXR1cm4gdC5yb2xlLnNvbWUodiA9PiB0aGlzLnJvbGVzLmluY2x1ZGVzKHYpKTtcclxuICAgIH1cclxuICAgIGlmICh0LmFiaWxpdHkpIHtcclxuICAgICAgaWYgKHQubW9kZSA9PT0gJ2FsbE9mJylcclxuICAgICAgICByZXR1cm4gKHQuYWJpbGl0eSBhcyBhbnlbXSkuZXZlcnkodiA9PiB0aGlzLmFiaWxpdGllcy5pbmNsdWRlcyh2KSk7XHJcbiAgICAgIGVsc2UgcmV0dXJuICh0LmFiaWxpdHkgYXMgYW55W10pLnNvbWUodiA9PiB0aGlzLmFiaWxpdGllcy5pbmNsdWRlcyh2KSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvKiogQGlubmVyICovXHJcbiAgcGFyc2VBYmlsaXR5KHZhbHVlOiBBQ0xDYW5UeXBlKTogQUNMQ2FuVHlwZSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgfHxcclxuICAgICAgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyB8fFxyXG4gICAgICBBcnJheS5pc0FycmF5KHZhbHVlKVxyXG4gICAgKSB7XHJcbiAgICAgIHZhbHVlID0gPEFDTFR5cGU+eyBhYmlsaXR5OiBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogW3ZhbHVlXSB9O1xyXG4gICAgfVxyXG4gICAgZGVsZXRlIHZhbHVlLnJvbGU7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDDpcK9wpPDpcKJwo3Dp8KUwqjDpsKIwrfDpsKYwq/DpcKQwqbDpsKcwonDpcKvwrnDpcK6wpTDpsKdwoPDqcKZwpDDp8KCwrlcclxuICAgKi9cclxuICBjYW5BYmlsaXR5KHZhbHVlOiBBQ0xDYW5UeXBlKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5jYW4odGhpcy5wYXJzZUFiaWxpdHkodmFsdWUpKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBEaXJlY3RpdmUsXHJcbiAgSW5wdXQsXHJcbiAgRWxlbWVudFJlZixcclxuICBSZW5kZXJlcjIsXHJcbiAgT25EZXN0cm95LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IEFDTFNlcnZpY2UgfSBmcm9tICcuL2FjbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQUNMQ2FuVHlwZSB9IGZyb20gJy4vYWNsLnR5cGUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYWNsXScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBQ0xEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgX3ZhbHVlOiBhbnk7XHJcbiAgcHJpdmF0ZSBjaGFuZ2UkOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIEBJbnB1dCgnYWNsJylcclxuICBzZXQgYWNsKHZhbHVlOiBBQ0xDYW5UeXBlKSB7XHJcbiAgICB0aGlzLnNldCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoJ2FjbC1hYmlsaXR5JylcclxuICBzZXQgYWJpbGl0eSh2YWx1ZTogQUNMQ2FuVHlwZSkge1xyXG4gICAgdGhpcy5zZXQodGhpcy5zcnYucGFyc2VBYmlsaXR5KHZhbHVlKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldCh2YWx1ZTogQUNMQ2FuVHlwZSkge1xyXG4gICAgY29uc3QgQ0xTID0gJ2FjbF9faGlkZSc7XHJcbiAgICBjb25zdCBlbCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcclxuICAgIGlmICh0aGlzLnNydi5jYW4odmFsdWUpKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWwsIENMUyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGVsLCBDTFMpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgc3J2OiBBQ0xTZXJ2aWNlLFxyXG4gICkge1xyXG4gICAgdGhpcy5jaGFuZ2UkID0gPGFueT50aGlzLnNydi5jaGFuZ2Uuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2V0KHRoaXMuX3ZhbHVlKSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2hhbmdlJC51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgRGVsb25BQ0xDb25maWcge1xyXG4gIC8qKlxyXG4gICAqIMOowrfCr8OnwpTCscOlwq7CiMOlwo3Cq8OlwqTCscOowrTCpcOlwpDCjsOowrfCs8Oowr3CrMOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmAvNDAzYFxyXG4gICAqL1xyXG4gIGd1YXJkX3VybD8gPSAnLzQwMyc7XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBDYW5BY3RpdmF0ZSxcclxuICBDYW5BY3RpdmF0ZUNoaWxkLFxyXG4gIENhbkxvYWQsXHJcbiAgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcclxuICBSb3V0ZSxcclxuICBSb3V0ZXJTdGF0ZVNuYXBzaG90LFxyXG4gIFJvdXRlcixcclxufSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgQUNMU2VydmljZSB9IGZyb20gJy4vYWNsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBQ0xDYW5UeXBlIH0gZnJvbSAnLi9hY2wudHlwZSc7XHJcbmltcG9ydCB7IERlbG9uQUNMQ29uZmlnIH0gZnJvbSAnLi9hY2wuY29uZmlnJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFDTEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUsIENhbkFjdGl2YXRlQ2hpbGQsIENhbkxvYWQge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBzcnY6IEFDTFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSBvcHRpb25zOiBEZWxvbkFDTENvbmZpZyxcclxuICApIHt9XHJcblxyXG4gIHByaXZhdGUgcHJvY2VzcyhcclxuICAgIGd1YXJkOiBBQ0xDYW5UeXBlIHwgT2JzZXJ2YWJsZTxBQ0xDYW5UeXBlPixcclxuICApOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybiAoZ3VhcmQgJiYgZ3VhcmQgaW5zdGFuY2VvZiBPYnNlcnZhYmxlXHJcbiAgICAgID8gZ3VhcmRcclxuICAgICAgOiBvZihcclxuICAgICAgICAgIHR5cGVvZiBndWFyZCAhPT0gJ3VuZGVmaW5lZCcgJiYgZ3VhcmQgIT09IG51bGxcclxuICAgICAgICAgICAgPyAoZ3VhcmQgYXMgQUNMQ2FuVHlwZSlcclxuICAgICAgICAgICAgOiBudWxsLFxyXG4gICAgICAgIClcclxuICAgICkucGlwZShcclxuICAgICAgbWFwKHYgPT4gdGhpcy5zcnYuY2FuKHYpKSxcclxuICAgICAgdGFwKHYgPT4ge1xyXG4gICAgICAgIGlmICh2KSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCh0aGlzLm9wdGlvbnMuZ3VhcmRfdXJsKTtcclxuICAgICAgfSksXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLy8gbGF6eSBsb2FkaW5nXHJcbiAgY2FuTG9hZChyb3V0ZTogUm91dGUpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybiB0aGlzLnByb2Nlc3MoKHJvdXRlLmRhdGEgJiYgcm91dGUuZGF0YS5ndWFyZCkgfHwgbnVsbCk7XHJcbiAgfVxyXG4gIC8vIGFsbCBjaGlsZHJlbiByb3V0ZVxyXG4gIGNhbkFjdGl2YXRlQ2hpbGQoXHJcbiAgICBjaGlsZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxyXG4gICAgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QsXHJcbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm4gdGhpcy5jYW5BY3RpdmF0ZShjaGlsZFJvdXRlLCBzdGF0ZSk7XHJcbiAgfVxyXG4gIC8vIHJvdXRlXHJcbiAgY2FuQWN0aXZhdGUoXHJcbiAgICByb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcclxuICAgIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90LFxyXG4gICk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvY2Vzcygocm91dGUuZGF0YSAmJiByb3V0ZS5kYXRhLmd1YXJkKSB8fCBudWxsKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IERlbG9uQUNMQ29uZmlnIH0gZnJvbSAnLi9hY2wuY29uZmlnJztcclxuaW1wb3J0IHsgQUNMR3VhcmQgfSBmcm9tICcuL2FjbC1ndWFyZCc7XHJcbmltcG9ydCB7IEFDTFNlcnZpY2UgfSBmcm9tICcuL2FjbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQUNMRGlyZWN0aXZlIH0gZnJvbSAnLi9hY2wuZGlyZWN0aXZlJztcclxuXHJcbmNvbnN0IFNFUlZJQ0VTID0gW0FDTFNlcnZpY2UsIEFDTEd1YXJkXTtcclxuY29uc3QgQ09NUE9ORU5UUyA9IFtBQ0xEaXJlY3RpdmVdO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTXSxcclxuICBleHBvcnRzOiBbLi4uQ09NUE9ORU5UU10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEZWxvbkFDTE1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogRGVsb25BQ0xNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW0RlbG9uQUNMQ29uZmlnLCAuLi5TRVJWSUNFU10sXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsidHNsaWJfMS5fX3ZhbHVlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztxQkFTNEIsRUFBRTt5QkFD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