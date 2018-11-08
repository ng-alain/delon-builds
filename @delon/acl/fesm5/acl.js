import { __spread, __values } from 'tslib';
import { Injectable, Directive, Input, ElementRef, Renderer2, NgModule } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
            return (/** @type {?} */ (val));
        }
        if (Array.isArray(val)) {
            return (/** @type {?} */ ({ role: (/** @type {?} */ (val)) }));
        }
        return (/** @type {?} */ ({
            role: [val],
        }));
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
        this.set((/** @type {?} */ ({ ability: abilities })));
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
        this.set((/** @type {?} */ ({ role: roles })));
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
                return ((/** @type {?} */ (t.ability))).every(function (v) { return _this.abilities.includes(v); });
            else
                return ((/** @type {?} */ (t.ability))).some(function (v) { return _this.abilities.includes(v); });
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
            value = (/** @type {?} */ ({ ability: Array.isArray(value) ? value : [value] }));
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
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var ACLDirective = /** @class */ (function () {
    function ACLDirective(el, renderer, srv) {
        var _this = this;
        this.el = el;
        this.renderer = renderer;
        this.srv = srv;
        this.change$ = (/** @type {?} */ (this.srv.change.subscribe(function () { return _this.set(_this._value); })));
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
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
                ? ((/** @type {?} */ (guard)))
                : null)).pipe(map(function (v) { return _this.srv.can(v); }), tap(function (v) {
            if (v)
                return;
            _this.router.navigateByUrl(_this.options.guard_url);
        }));
    };
    // lazy loading
    // lazy loading
    /**
     * @param {?} route
     * @return {?}
     */
    ACLGuard.prototype.canLoad = 
    // lazy loading
    /**
     * @param {?} route
     * @return {?}
     */
    function (route) {
        return this.process((route.data && route.data.guard) || null);
    };
    // all children route
    // all children route
    /**
     * @param {?} childRoute
     * @param {?} state
     * @return {?}
     */
    ACLGuard.prototype.canActivateChild = 
    // all children route
    /**
     * @param {?} childRoute
     * @param {?} state
     * @return {?}
     */
    function (childRoute, state) {
        return this.canActivate(childRoute, state);
    };
    // route
    // route
    /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    ACLGuard.prototype.canActivate = 
    // route
    /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    function (route, state) {
        return this.process((route.data && route.data.guard) || null);
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
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { ACLService, ACLDirective, DelonACLConfig, ACLGuard, DelonACLModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNsLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AZGVsb24vYWNsL3NyYy9hY2wuc2VydmljZS50cyIsIm5nOi8vQGRlbG9uL2FjbC9zcmMvYWNsLmRpcmVjdGl2ZS50cyIsIm5nOi8vQGRlbG9uL2FjbC9zcmMvYWNsLmNvbmZpZy50cyIsIm5nOi8vQGRlbG9uL2FjbC9zcmMvYWNsLWd1YXJkLnRzIiwibmc6Ly9AZGVsb24vYWNsL3NyYy9hY2wubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQUNMVHlwZSwgQUNMQ2FuVHlwZSB9IGZyb20gJy4vYWNsLnR5cGUnO1xuXG4vKipcbiAqIMOowq7Cv8OpwpfCrsOmwo7Cp8OlwojCtsOmwpzCjcOlworCoVxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQUNMU2VydmljZSB7XG4gIHByaXZhdGUgcm9sZXM6IHN0cmluZ1tdID0gW107XG4gIHByaXZhdGUgYWJpbGl0aWVzOiAobnVtYmVyIHwgc3RyaW5nKVtdID0gW107XG4gIHByaXZhdGUgZnVsbCA9IGZhbHNlO1xuICBwcml2YXRlIGFjbENoYW5nZTogQmVoYXZpb3JTdWJqZWN0PEFDTFR5cGUgfCBib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8XG4gICAgQUNMVHlwZSB8IGJvb2xlYW5cbiAgPihudWxsKTtcblxuICAvKiogQUNMw6XCj8KYw6bCm8K0w6nCgMKaw6fCn8KlICovXG4gIGdldCBjaGFuZ2UoKTogT2JzZXJ2YWJsZTxBQ0xUeXBlIHwgYm9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmFjbENoYW5nZS5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIC8qKiDDqMKOwrfDpcKPwpbDpsKJwoDDpsKcwonDpsKVwrDDpsKNwq4gKi9cbiAgZ2V0IGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZ1bGw6IHRoaXMuZnVsbCxcbiAgICAgIHJvbGVzOiB0aGlzLnJvbGVzLFxuICAgICAgYWJpbGl0aWVzOiB0aGlzLmFiaWxpdGllcyxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBwYXJzZUFDTFR5cGUodmFsOiBzdHJpbmcgfCBzdHJpbmdbXSB8IEFDTFR5cGUpOiBBQ0xUeXBlIHtcbiAgICBpZiAodHlwZW9mIHZhbCAhPT0gJ3N0cmluZycgJiYgIUFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgcmV0dXJuIDxBQ0xUeXBlPnZhbDtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgcmV0dXJuIDxBQ0xUeXBlPnsgcm9sZTogPHN0cmluZ1tdPnZhbCB9O1xuICAgIH1cbiAgICByZXR1cm4gPEFDTFR5cGU+e1xuICAgICAgcm9sZTogW3ZhbF0sXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiDDqMKuwr7Dp8K9wq7DpcK9wpPDpcKJwo3Dp8KUwqjDpsKIwrfDqMKnwpLDqMKJwrLDpsKIwpbDpsKdwoPDqcKZwpDDqMKDwr3DpcKKwpvDr8K8wojDpMK8wprDpcKFwojDpsK4woXDqcKZwqTDpsKJwoDDpsKcwonDr8K8wolcbiAgICovXG4gIHNldCh2YWx1ZTogQUNMVHlwZSkge1xuICAgIHRoaXMuYWJpbGl0aWVzID0gW107XG4gICAgdGhpcy5yb2xlcyA9IFtdO1xuICAgIHRoaXMuYWRkKHZhbHVlKTtcbiAgICB0aGlzLmFjbENoYW5nZS5uZXh0KHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDDpsKgwofDqMKvwobDpcK9wpPDpcKJwo3Dp8KUwqjDpsKIwrfDpMK4wrrDpcKFwqjDqcKHwo/Dr8K8wozDpcKNwrPDpMK4wo3DpcKPwpfDqcKZwpBcbiAgICovXG4gIHNldEZ1bGwodmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5mdWxsID0gdmFsO1xuICAgIHRoaXMuYWNsQ2hhbmdlLm5leHQodmFsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDDqMKuwr7Dp8K9wq7DpcK9wpPDpcKJwo3Dp8KUwqjDpsKIwrfDpsKdwoPDqcKZwpDDqMKDwr3DpcKKwpvDr8K8wojDpMK8wprDpcKFwojDpsK4woXDqcKZwqTDpsKJwoDDpsKcwonDr8K8wolcbiAgICovXG4gIHNldEFiaWxpdHkoYWJpbGl0aWVzOiAobnVtYmVyIHwgc3RyaW5nKVtdKSB7XG4gICAgdGhpcy5zZXQoPEFDTFR5cGU+eyBhYmlsaXR5OiBhYmlsaXRpZXMgfSk7XG4gIH1cblxuICAvKipcbiAgICogw6jCrsK+w6fCvcKuw6XCvcKTw6XCicKNw6fClMKow6bCiMK3w6jCp8KSw6jCicKyw6/CvMKIw6TCvMKaw6XChcKIw6bCuMKFw6nCmcKkw6bCicKAw6bCnMKJw6/CvMKJXG4gICAqL1xuICBzZXRSb2xlKHJvbGVzOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuc2V0KDxBQ0xUeXBlPnsgcm9sZTogcm9sZXMgfSk7XG4gIH1cblxuICAvKipcbiAgICogw6TCuMK6w6XCvcKTw6XCicKNw6fClMKow6bCiMK3w6XCosKew6XCisKgw6jCp8KSw6jCicKyw6bCiMKWw6bCncKDw6nCmcKQw6jCg8K9w6XCisKbXG4gICAqL1xuICBhZGQodmFsdWU6IEFDTFR5cGUpIHtcbiAgICBpZiAodmFsdWUucm9sZSAmJiB2YWx1ZS5yb2xlLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMucm9sZXMucHVzaCguLi52YWx1ZS5yb2xlKTtcbiAgICB9XG4gICAgaWYgKHZhbHVlLmFiaWxpdHkgJiYgdmFsdWUuYWJpbGl0eS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmFiaWxpdGllcy5wdXNoKC4uLnZhbHVlLmFiaWxpdHkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDDpMK4wrrDpcK9wpPDpcKJwo3Dp8KUwqjDpsKIwrfDqcKZwoTDpcKKwqDDqMKnwpLDqMKJwrJcbiAgICovXG4gIGF0dGFjaFJvbGUocm9sZXM6IHN0cmluZ1tdKSB7XG4gICAgZm9yIChjb25zdCB2YWwgb2Ygcm9sZXMpIHtcbiAgICAgIGlmICghdGhpcy5yb2xlcy5pbmNsdWRlcyh2YWwpKSB7XG4gICAgICAgIHRoaXMucm9sZXMucHVzaCh2YWwpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmFjbENoYW5nZS5uZXh0KHRoaXMuZGF0YSk7XG4gIH1cblxuICAvKipcbiAgICogw6TCuMK6w6XCvcKTw6XCicKNw6fClMKow6bCiMK3w6nCmcKEw6XCisKgw6bCncKDw6nCmcKQXG4gICAqL1xuICBhdHRhY2hBYmlsaXR5KGFiaWxpdGllczogKG51bWJlciB8IHN0cmluZylbXSkge1xuICAgIGZvciAoY29uc3QgdmFsIG9mIGFiaWxpdGllcykge1xuICAgICAgaWYgKCF0aGlzLmFiaWxpdGllcy5pbmNsdWRlcyh2YWwpKSB7XG4gICAgICAgIHRoaXMuYWJpbGl0aWVzLnB1c2godmFsKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5hY2xDaGFuZ2UubmV4dCh0aGlzLmRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIMOkwrjCusOlwr3Ck8OlwonCjcOnwpTCqMOmwojCt8OnwqfCu8OpwpnCpMOowqfCksOowonCslxuICAgKi9cbiAgcmVtb3ZlUm9sZShyb2xlczogc3RyaW5nW10pIHtcbiAgICBmb3IgKGNvbnN0IHZhbCBvZiByb2xlcykge1xuICAgICAgY29uc3QgaWR4ID0gdGhpcy5yb2xlcy5pbmRleE9mKHZhbCk7XG4gICAgICBpZiAoaWR4ICE9PSAtMSkge1xuICAgICAgICB0aGlzLnJvbGVzLnNwbGljZShpZHgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmFjbENoYW5nZS5uZXh0KHRoaXMuZGF0YSk7XG4gIH1cblxuICAvKipcbiAgICogw6TCuMK6w6XCvcKTw6XCicKNw6fClMKow6bCiMK3w6fCp8K7w6nCmcKkw6bCncKDw6nCmcKQXG4gICAqL1xuICByZW1vdmVBYmlsaXR5KGFiaWxpdGllczogKG51bWJlciB8IHN0cmluZylbXSkge1xuICAgIGZvciAoY29uc3QgdmFsIG9mIGFiaWxpdGllcykge1xuICAgICAgY29uc3QgaWR4ID0gdGhpcy5hYmlsaXRpZXMuaW5kZXhPZih2YWwpO1xuICAgICAgaWYgKGlkeCAhPT0gLTEpIHtcbiAgICAgICAgdGhpcy5hYmlsaXRpZXMuc3BsaWNlKGlkeCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuYWNsQ2hhbmdlLm5leHQodGhpcy5kYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDDpcK9wpPDpcKJwo3Dp8KUwqjDpsKIwrfDpsKYwq/DpcKQwqbDpsKcwonDpcKvwrnDpcK6wpTDqMKnwpLDqMKJwrLDr8K8wozDpcKFwrbDpcKuwp4gYG51bWJlcmAgw6jCocKow6fCpMK6QWJpbGl0eVxuICAgKlxuICAgKiAtIMOlwr3CkyBgZnVsbDogdHJ1ZWAgw6bCiMKWw6XCj8KCw6bClcKwIGBudWxsYCDDpsKXwrbDqMK/wpTDpcKbwp4gYHRydWVgXG4gICAqIC0gw6jCi8Klw6TCvcK/w6fClMKoIGBBQ0xUeXBlYCDDpcKPwoLDpsKVwrDDr8K8wozDpcKPwq/DpMK7wqXDpsKMwofDpcKuwpogYG1vZGVgIMOmwqDCocOpwqrCjMOmwqjCocOlwrzCj1xuICAgKi9cbiAgY2FuKHJvbGVPckFiaWxpdHk6IEFDTENhblR5cGUpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5mdWxsID09PSB0cnVlIHx8ICFyb2xlT3JBYmlsaXR5KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBsZXQgdDogQUNMVHlwZSA9IHt9O1xuICAgIGlmICh0eXBlb2Ygcm9sZU9yQWJpbGl0eSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHQgPSB7IGFiaWxpdHk6IFtyb2xlT3JBYmlsaXR5XSB9O1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBBcnJheS5pc0FycmF5KHJvbGVPckFiaWxpdHkpICYmXG4gICAgICByb2xlT3JBYmlsaXR5Lmxlbmd0aCA+IDAgJiZcbiAgICAgIHR5cGVvZiByb2xlT3JBYmlsaXR5WzBdID09PSAnbnVtYmVyJ1xuICAgICkge1xuICAgICAgdCA9IHsgYWJpbGl0eTogcm9sZU9yQWJpbGl0eSB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB0ID0gdGhpcy5wYXJzZUFDTFR5cGUocm9sZU9yQWJpbGl0eSk7XG4gICAgfVxuXG4gICAgaWYgKHQucm9sZSkge1xuICAgICAgaWYgKHQubW9kZSA9PT0gJ2FsbE9mJykgcmV0dXJuIHQucm9sZS5ldmVyeSh2ID0+IHRoaXMucm9sZXMuaW5jbHVkZXModikpO1xuICAgICAgZWxzZSByZXR1cm4gdC5yb2xlLnNvbWUodiA9PiB0aGlzLnJvbGVzLmluY2x1ZGVzKHYpKTtcbiAgICB9XG4gICAgaWYgKHQuYWJpbGl0eSkge1xuICAgICAgaWYgKHQubW9kZSA9PT0gJ2FsbE9mJylcbiAgICAgICAgcmV0dXJuICh0LmFiaWxpdHkgYXMgYW55W10pLmV2ZXJ5KHYgPT4gdGhpcy5hYmlsaXRpZXMuaW5jbHVkZXModikpO1xuICAgICAgZWxzZSByZXR1cm4gKHQuYWJpbGl0eSBhcyBhbnlbXSkuc29tZSh2ID0+IHRoaXMuYWJpbGl0aWVzLmluY2x1ZGVzKHYpKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqIEBpbm5lciAqL1xuICBwYXJzZUFiaWxpdHkodmFsdWU6IEFDTENhblR5cGUpOiBBQ0xDYW5UeXBlIHtcbiAgICBpZiAoXG4gICAgICB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInIHx8XG4gICAgICB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnIHx8XG4gICAgICBBcnJheS5pc0FycmF5KHZhbHVlKVxuICAgICkge1xuICAgICAgdmFsdWUgPSA8QUNMVHlwZT57IGFiaWxpdHk6IEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbdmFsdWVdIH07XG4gICAgfVxuICAgIGRlbGV0ZSB2YWx1ZS5yb2xlO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiDDpcK9wpPDpcKJwo3Dp8KUwqjDpsKIwrfDpsKYwq/DpcKQwqbDpsKcwonDpcKvwrnDpcK6wpTDpsKdwoPDqcKZwpDDp8KCwrlcbiAgICovXG4gIGNhbkFiaWxpdHkodmFsdWU6IEFDTENhblR5cGUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jYW4odGhpcy5wYXJzZUFiaWxpdHkodmFsdWUpKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBJbnB1dCxcbiAgRWxlbWVudFJlZixcbiAgUmVuZGVyZXIyLFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEFDTFNlcnZpY2UgfSBmcm9tICcuL2FjbC5zZXJ2aWNlJztcbmltcG9ydCB7IEFDTENhblR5cGUgfSBmcm9tICcuL2FjbC50eXBlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2FjbF0nLFxufSlcbmV4cG9ydCBjbGFzcyBBQ0xEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF92YWx1ZTogYW55O1xuICBwcml2YXRlIGNoYW5nZSQ6IFN1YnNjcmlwdGlvbjtcblxuICBASW5wdXQoJ2FjbCcpXG4gIHNldCBhY2wodmFsdWU6IEFDTENhblR5cGUpIHtcbiAgICB0aGlzLnNldCh2YWx1ZSk7XG4gIH1cblxuICBASW5wdXQoJ2FjbC1hYmlsaXR5JylcbiAgc2V0IGFiaWxpdHkodmFsdWU6IEFDTENhblR5cGUpIHtcbiAgICB0aGlzLnNldCh0aGlzLnNydi5wYXJzZUFiaWxpdHkodmFsdWUpKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0KHZhbHVlOiBBQ0xDYW5UeXBlKSB7XG4gICAgY29uc3QgQ0xTID0gJ2FjbF9faGlkZSc7XG4gICAgY29uc3QgZWwgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKHRoaXMuc3J2LmNhbih2YWx1ZSkpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWwsIENMUyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoZWwsIENMUyk7XG4gICAgfVxuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIHNydjogQUNMU2VydmljZSxcbiAgKSB7XG4gICAgdGhpcy5jaGFuZ2UkID0gPGFueT50aGlzLnNydi5jaGFuZ2Uuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2V0KHRoaXMuX3ZhbHVlKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmNoYW5nZSQudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIERlbG9uQUNMQ29uZmlnIHtcbiAgLyoqXG4gICAqIMOowrfCr8OnwpTCscOlwq7CiMOlwo3Cq8OlwqTCscOowrTCpcOlwpDCjsOowrfCs8Oowr3CrMOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmAvNDAzYFxuICAgKi9cbiAgZ3VhcmRfdXJsPyA9ICcvNDAzJztcbn1cbiIsImltcG9ydCB7XG4gIENhbkFjdGl2YXRlLFxuICBDYW5BY3RpdmF0ZUNoaWxkLFxuICBDYW5Mb2FkLFxuICBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICBSb3V0ZSxcbiAgUm91dGVyU3RhdGVTbmFwc2hvdCxcbiAgUm91dGVyLFxufSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBBQ0xTZXJ2aWNlIH0gZnJvbSAnLi9hY2wuc2VydmljZSc7XG5pbXBvcnQgeyBBQ0xDYW5UeXBlIH0gZnJvbSAnLi9hY2wudHlwZSc7XG5pbXBvcnQgeyBEZWxvbkFDTENvbmZpZyB9IGZyb20gJy4vYWNsLmNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBQ0xHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlLCBDYW5BY3RpdmF0ZUNoaWxkLCBDYW5Mb2FkIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzcnY6IEFDTFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIG9wdGlvbnM6IERlbG9uQUNMQ29uZmlnLFxuICApIHt9XG5cbiAgcHJpdmF0ZSBwcm9jZXNzKFxuICAgIGd1YXJkOiBBQ0xDYW5UeXBlIHwgT2JzZXJ2YWJsZTxBQ0xDYW5UeXBlPixcbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIChndWFyZCAmJiBndWFyZCBpbnN0YW5jZW9mIE9ic2VydmFibGVcbiAgICAgID8gZ3VhcmRcbiAgICAgIDogb2YoXG4gICAgICAgICAgdHlwZW9mIGd1YXJkICE9PSAndW5kZWZpbmVkJyAmJiBndWFyZCAhPT0gbnVsbFxuICAgICAgICAgICAgPyAoZ3VhcmQgYXMgQUNMQ2FuVHlwZSlcbiAgICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgKVxuICAgICkucGlwZShcbiAgICAgIG1hcCh2ID0+IHRoaXMuc3J2LmNhbih2KSksXG4gICAgICB0YXAodiA9PiB7XG4gICAgICAgIGlmICh2KSByZXR1cm47XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwodGhpcy5vcHRpb25zLmd1YXJkX3VybCk7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgLy8gbGF6eSBsb2FkaW5nXG4gIGNhbkxvYWQocm91dGU6IFJvdXRlKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMucHJvY2Vzcygocm91dGUuZGF0YSAmJiByb3V0ZS5kYXRhLmd1YXJkKSB8fCBudWxsKTtcbiAgfVxuICAvLyBhbGwgY2hpbGRyZW4gcm91dGVcbiAgY2FuQWN0aXZhdGVDaGlsZChcbiAgICBjaGlsZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICAgIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90LFxuICApOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5jYW5BY3RpdmF0ZShjaGlsZFJvdXRlLCBzdGF0ZSk7XG4gIH1cbiAgLy8gcm91dGVcbiAgY2FuQWN0aXZhdGUoXG4gICAgcm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gICAgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QsXG4gICk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnByb2Nlc3MoKHJvdXRlLmRhdGEgJiYgcm91dGUuZGF0YS5ndWFyZCkgfHwgbnVsbCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBEZWxvbkFDTENvbmZpZyB9IGZyb20gJy4vYWNsLmNvbmZpZyc7XG5pbXBvcnQgeyBBQ0xHdWFyZCB9IGZyb20gJy4vYWNsLWd1YXJkJztcbmltcG9ydCB7IEFDTFNlcnZpY2UgfSBmcm9tICcuL2FjbC5zZXJ2aWNlJztcbmltcG9ydCB7IEFDTERpcmVjdGl2ZSB9IGZyb20gJy4vYWNsLmRpcmVjdGl2ZSc7XG5cbmNvbnN0IFNFUlZJQ0VTID0gW0FDTFNlcnZpY2UsIEFDTEd1YXJkXTtcbmNvbnN0IENPTVBPTkVOVFMgPSBbQUNMRGlyZWN0aXZlXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogWy4uLkNPTVBPTkVOVFNdLFxuICBleHBvcnRzOiBbLi4uQ09NUE9ORU5UU10sXG59KVxuZXhwb3J0IGNsYXNzIERlbG9uQUNMTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBEZWxvbkFDTE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW0RlbG9uQUNMQ29uZmlnLCAuLi5TRVJWSUNFU10sXG4gICAgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbInRzbGliXzEuX192YWx1ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBT0E7SUFBQTtRQUVVLFVBQUssR0FBYSxFQUFFLENBQUM7UUFDckIsY0FBUyxHQUF3QixFQUFFLENBQUM7UUFDcEMsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUNiLGNBQVMsR0FBdUMsSUFBSSxlQUFlLENBRXpFLElBQUksQ0FBQyxDQUFDO0tBaUxUO0lBOUtDLHNCQUFJLDhCQUFNOzs7Ozs7UUFBVjtZQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUN0Qzs7O09BQUE7SUFHRCxzQkFBSSw0QkFBSTs7Ozs7O1FBQVI7WUFDRSxPQUFPO2dCQUNMLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtnQkFDZixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7Z0JBQ2pCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUzthQUMxQixDQUFDO1NBQ0g7OztPQUFBOzs7OztJQUVPLGlDQUFZOzs7O0lBQXBCLFVBQXFCLEdBQWdDO1FBQ25ELElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNsRCwwQkFBZ0IsR0FBRyxHQUFDO1NBQ3JCO1FBQ0QsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3RCLDBCQUFnQixFQUFFLElBQUkscUJBQVksR0FBRyxFQUFBLEVBQUUsR0FBQztTQUN6QztRQUNELDBCQUFnQjtZQUNkLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQztTQUNaLEdBQUM7S0FDSDs7Ozs7Ozs7O0lBS0Qs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