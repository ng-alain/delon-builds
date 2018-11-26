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
class ACLService {
    constructor() {
        this.roles = [];
        this.abilities = [];
        this.full = false;
        this.aclChange = new BehaviorSubject(null);
    }
    /**
     * ACL变更通知
     * @return {?}
     */
    get change() {
        return this.aclChange.asObservable();
    }
    /**
     * 获取所有数据
     * @return {?}
     */
    get data() {
        return {
            full: this.full,
            roles: this.roles,
            abilities: this.abilities,
        };
    }
    /**
     * @param {?} val
     * @return {?}
     */
    parseACLType(val) {
        if (typeof val !== 'string' && !Array.isArray(val)) {
            return (/** @type {?} */ (val));
        }
        if (Array.isArray(val)) {
            return (/** @type {?} */ ({ role: (/** @type {?} */ (val)) }));
        }
        return (/** @type {?} */ ({
            role: [val],
        }));
    }
    /**
     * 设置当前用户角色或权限能力（会先清除所有）
     * @param {?} value
     * @return {?}
     */
    set(value) {
        this.abilities = [];
        this.roles = [];
        this.add(value);
        this.aclChange.next(value);
    }
    /**
     * 标识当前用户为全量，即不受限
     * @param {?} val
     * @return {?}
     */
    setFull(val) {
        this.full = val;
        this.aclChange.next(val);
    }
    /**
     * 设置当前用户权限能力（会先清除所有）
     * @param {?} abilities
     * @return {?}
     */
    setAbility(abilities) {
        this.set((/** @type {?} */ ({ ability: abilities })));
    }
    /**
     * 设置当前用户角色（会先清除所有）
     * @param {?} roles
     * @return {?}
     */
    setRole(roles) {
        this.set((/** @type {?} */ ({ role: roles })));
    }
    /**
     * 为当前用户增加角色或权限能力
     * @param {?} value
     * @return {?}
     */
    add(value) {
        if (value.role && value.role.length > 0) {
            this.roles.push(...value.role);
        }
        if (value.ability && value.ability.length > 0) {
            this.abilities.push(...value.ability);
        }
    }
    /**
     * 为当前用户附加角色
     * @param {?} roles
     * @return {?}
     */
    attachRole(roles) {
        for (const val of roles) {
            if (!this.roles.includes(val)) {
                this.roles.push(val);
            }
        }
        this.aclChange.next(this.data);
    }
    /**
     * 为当前用户附加权限
     * @param {?} abilities
     * @return {?}
     */
    attachAbility(abilities) {
        for (const val of abilities) {
            if (!this.abilities.includes(val)) {
                this.abilities.push(val);
            }
        }
        this.aclChange.next(this.data);
    }
    /**
     * 为当前用户移除角色
     * @param {?} roles
     * @return {?}
     */
    removeRole(roles) {
        for (const val of roles) {
            /** @type {?} */
            const idx = this.roles.indexOf(val);
            if (idx !== -1) {
                this.roles.splice(idx, 1);
            }
        }
        this.aclChange.next(this.data);
    }
    /**
     * 为当前用户移除权限
     * @param {?} abilities
     * @return {?}
     */
    removeAbility(abilities) {
        for (const val of abilities) {
            /** @type {?} */
            const idx = this.abilities.indexOf(val);
            if (idx !== -1) {
                this.abilities.splice(idx, 1);
            }
        }
        this.aclChange.next(this.data);
    }
    /**
     * 当前用户是否有对应角色，其实 `number` 表示Ability
     *
     * - 当 `full: true` 或参数 `null` 时返回 `true`
     * - 若使用 `ACLType` 参数，可以指定 `mode` 校验模式
     * @param {?} roleOrAbility
     * @return {?}
     */
    can(roleOrAbility) {
        if (this.full === true || !roleOrAbility) {
            return true;
        }
        /** @type {?} */
        let t = {};
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
                return t.role.every(v => this.roles.includes(v));
            else
                return t.role.some(v => this.roles.includes(v));
        }
        if (t.ability) {
            if (t.mode === 'allOf')
                return ((/** @type {?} */ (t.ability))).every(v => this.abilities.includes(v));
            else
                return ((/** @type {?} */ (t.ability))).some(v => this.abilities.includes(v));
        }
        return false;
    }
    /**
     * \@inner
     * @param {?} value
     * @return {?}
     */
    parseAbility(value) {
        if (typeof value === 'number' ||
            typeof value === 'string' ||
            Array.isArray(value)) {
            value = (/** @type {?} */ ({ ability: Array.isArray(value) ? value : [value] }));
        }
        delete value.role;
        return value;
    }
    /**
     * 当前用户是否有对应权限点
     * @param {?} value
     * @return {?}
     */
    canAbility(value) {
        return this.can(this.parseAbility(value));
    }
}
ACLService.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class ACLDirective {
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} srv
     */
    constructor(el, renderer, srv) {
        this.el = el;
        this.renderer = renderer;
        this.srv = srv;
        this.change$ = (/** @type {?} */ (this.srv.change.subscribe(() => this.set(this._value))));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set acl(value) {
        this.set(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set ability(value) {
        this.set(this.srv.parseAbility(value));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set(value) {
        /** @type {?} */
        const CLS = 'acl__hide';
        /** @type {?} */
        const el = this.el.nativeElement;
        if (this.srv.can(value)) {
            this.renderer.removeClass(el, CLS);
        }
        else {
            this.renderer.addClass(el, CLS);
        }
        this._value = value;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.change$.unsubscribe();
    }
}
ACLDirective.decorators = [
    { type: Directive, args: [{
                selector: '[acl]',
            },] }
];
/** @nocollapse */
ACLDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ACLService }
];
ACLDirective.propDecorators = {
    acl: [{ type: Input, args: ['acl',] }],
    ability: [{ type: Input, args: ['acl-ability',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class DelonACLConfig {
    constructor() {
        /**
         * 路由守卫失败后跳转，默认：`/403`
         */
        this.guard_url = '/403';
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class ACLGuard {
    /**
     * @param {?} srv
     * @param {?} router
     * @param {?} options
     */
    constructor(srv, router, options) {
        this.srv = srv;
        this.router = router;
        this.options = options;
    }
    /**
     * @param {?} guard
     * @return {?}
     */
    process(guard) {
        return (guard && guard instanceof Observable
            ? guard
            : of(typeof guard !== 'undefined' && guard !== null
                ? ((/** @type {?} */ (guard)))
                : null)).pipe(map(v => this.srv.can(v)), tap(v => {
            if (v)
                return;
            this.router.navigateByUrl(this.options.guard_url);
        }));
    }
    // lazy loading
    /**
     * @param {?} route
     * @return {?}
     */
    canLoad(route) {
        return this.process((route.data && route.data.guard) || null);
    }
    // all children route
    /**
     * @param {?} childRoute
     * @param {?} state
     * @return {?}
     */
    canActivateChild(childRoute, state) {
        return this.canActivate(childRoute, state);
    }
    // route
    /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    canActivate(route, state) {
        return this.process((route.data && route.data.guard) || null);
    }
}
ACLGuard.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ACLGuard.ctorParameters = () => [
    { type: ACLService },
    { type: Router },
    { type: DelonACLConfig }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const SERVICES = [ACLService, ACLGuard];
/** @type {?} */
const COMPONENTS = [ACLDirective];
class DelonACLModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: DelonACLModule,
            providers: [DelonACLConfig, ...SERVICES],
        };
    }
}
DelonACLModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { ACLService, ACLDirective, DelonACLConfig, ACLGuard, DelonACLModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNsLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AZGVsb24vYWNsL3NyYy9hY2wuc2VydmljZS50cyIsIm5nOi8vQGRlbG9uL2FjbC9zcmMvYWNsLmRpcmVjdGl2ZS50cyIsIm5nOi8vQGRlbG9uL2FjbC9zcmMvYWNsLmNvbmZpZy50cyIsIm5nOi8vQGRlbG9uL2FjbC9zcmMvYWNsLWd1YXJkLnRzIiwibmc6Ly9AZGVsb24vYWNsL3NyYy9hY2wubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQUNMVHlwZSwgQUNMQ2FuVHlwZSB9IGZyb20gJy4vYWNsLnR5cGUnO1xuXG4vKipcbiAqIMOowq7Cv8OpwpfCrsOmwo7Cp8OlwojCtsOmwpzCjcOlworCoVxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQUNMU2VydmljZSB7XG4gIHByaXZhdGUgcm9sZXM6IHN0cmluZ1tdID0gW107XG4gIHByaXZhdGUgYWJpbGl0aWVzOiAobnVtYmVyIHwgc3RyaW5nKVtdID0gW107XG4gIHByaXZhdGUgZnVsbCA9IGZhbHNlO1xuICBwcml2YXRlIGFjbENoYW5nZTogQmVoYXZpb3JTdWJqZWN0PEFDTFR5cGUgfCBib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8XG4gICAgQUNMVHlwZSB8IGJvb2xlYW5cbiAgPihudWxsKTtcblxuICAvKiogQUNMw6XCj8KYw6bCm8K0w6nCgMKaw6fCn8KlICovXG4gIGdldCBjaGFuZ2UoKTogT2JzZXJ2YWJsZTxBQ0xUeXBlIHwgYm9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmFjbENoYW5nZS5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIC8qKiDDqMKOwrfDpcKPwpbDpsKJwoDDpsKcwonDpsKVwrDDpsKNwq4gKi9cbiAgZ2V0IGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZ1bGw6IHRoaXMuZnVsbCxcbiAgICAgIHJvbGVzOiB0aGlzLnJvbGVzLFxuICAgICAgYWJpbGl0aWVzOiB0aGlzLmFiaWxpdGllcyxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBwYXJzZUFDTFR5cGUodmFsOiBzdHJpbmcgfCBzdHJpbmdbXSB8IEFDTFR5cGUpOiBBQ0xUeXBlIHtcbiAgICBpZiAodHlwZW9mIHZhbCAhPT0gJ3N0cmluZycgJiYgIUFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgcmV0dXJuIDxBQ0xUeXBlPnZhbDtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgcmV0dXJuIDxBQ0xUeXBlPnsgcm9sZTogPHN0cmluZ1tdPnZhbCB9O1xuICAgIH1cbiAgICByZXR1cm4gPEFDTFR5cGU+e1xuICAgICAgcm9sZTogW3ZhbF0sXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiDDqMKuwr7Dp8K9wq7DpcK9wpPDpcKJwo3Dp8KUwqjDpsKIwrfDqMKnwpLDqMKJwrLDpsKIwpbDpsKdwoPDqcKZwpDDqMKDwr3DpcKKwpvDr8K8wojDpMK8wprDpcKFwojDpsK4woXDqcKZwqTDpsKJwoDDpsKcwonDr8K8wolcbiAgICovXG4gIHNldCh2YWx1ZTogQUNMVHlwZSkge1xuICAgIHRoaXMuYWJpbGl0aWVzID0gW107XG4gICAgdGhpcy5yb2xlcyA9IFtdO1xuICAgIHRoaXMuYWRkKHZhbHVlKTtcbiAgICB0aGlzLmFjbENoYW5nZS5uZXh0KHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDDpsKgwofDqMKvwobDpcK9wpPDpcKJwo3Dp8KUwqjDpsKIwrfDpMK4wrrDpcKFwqjDqcKHwo/Dr8K8wozDpcKNwrPDpMK4wo3DpcKPwpfDqcKZwpBcbiAgICovXG4gIHNldEZ1bGwodmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5mdWxsID0gdmFsO1xuICAgIHRoaXMuYWNsQ2hhbmdlLm5leHQodmFsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDDqMKuwr7Dp8K9wq7DpcK9wpPDpcKJwo3Dp8KUwqjDpsKIwrfDpsKdwoPDqcKZwpDDqMKDwr3DpcKKwpvDr8K8wojDpMK8wprDpcKFwojDpsK4woXDqcKZwqTDpsKJwoDDpsKcwonDr8K8wolcbiAgICovXG4gIHNldEFiaWxpdHkoYWJpbGl0aWVzOiAobnVtYmVyIHwgc3RyaW5nKVtdKSB7XG4gICAgdGhpcy5zZXQoPEFDTFR5cGU+eyBhYmlsaXR5OiBhYmlsaXRpZXMgfSk7XG4gIH1cblxuICAvKipcbiAgICogw6jCrsK+w6fCvcKuw6XCvcKTw6XCicKNw6fClMKow6bCiMK3w6jCp8KSw6jCicKyw6/CvMKIw6TCvMKaw6XChcKIw6bCuMKFw6nCmcKkw6bCicKAw6bCnMKJw6/CvMKJXG4gICAqL1xuICBzZXRSb2xlKHJvbGVzOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuc2V0KDxBQ0xUeXBlPnsgcm9sZTogcm9sZXMgfSk7XG4gIH1cblxuICAvKipcbiAgICogw6TCuMK6w6XCvcKTw6XCicKNw6fClMKow6bCiMK3w6XCosKew6XCisKgw6jCp8KSw6jCicKyw6bCiMKWw6bCncKDw6nCmcKQw6jCg8K9w6XCisKbXG4gICAqL1xuICBhZGQodmFsdWU6IEFDTFR5cGUpIHtcbiAgICBpZiAodmFsdWUucm9sZSAmJiB2YWx1ZS5yb2xlLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMucm9sZXMucHVzaCguLi52YWx1ZS5yb2xlKTtcbiAgICB9XG4gICAgaWYgKHZhbHVlLmFiaWxpdHkgJiYgdmFsdWUuYWJpbGl0eS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmFiaWxpdGllcy5wdXNoKC4uLnZhbHVlLmFiaWxpdHkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDDpMK4wrrDpcK9wpPDpcKJwo3Dp8KUwqjDpsKIwrfDqcKZwoTDpcKKwqDDqMKnwpLDqMKJwrJcbiAgICovXG4gIGF0dGFjaFJvbGUocm9sZXM6IHN0cmluZ1tdKSB7XG4gICAgZm9yIChjb25zdCB2YWwgb2Ygcm9sZXMpIHtcbiAgICAgIGlmICghdGhpcy5yb2xlcy5pbmNsdWRlcyh2YWwpKSB7XG4gICAgICAgIHRoaXMucm9sZXMucHVzaCh2YWwpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmFjbENoYW5nZS5uZXh0KHRoaXMuZGF0YSk7XG4gIH1cblxuICAvKipcbiAgICogw6TCuMK6w6XCvcKTw6XCicKNw6fClMKow6bCiMK3w6nCmcKEw6XCisKgw6bCncKDw6nCmcKQXG4gICAqL1xuICBhdHRhY2hBYmlsaXR5KGFiaWxpdGllczogKG51bWJlciB8IHN0cmluZylbXSkge1xuICAgIGZvciAoY29uc3QgdmFsIG9mIGFiaWxpdGllcykge1xuICAgICAgaWYgKCF0aGlzLmFiaWxpdGllcy5pbmNsdWRlcyh2YWwpKSB7XG4gICAgICAgIHRoaXMuYWJpbGl0aWVzLnB1c2godmFsKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5hY2xDaGFuZ2UubmV4dCh0aGlzLmRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIMOkwrjCusOlwr3Ck8OlwonCjcOnwpTCqMOmwojCt8OnwqfCu8OpwpnCpMOowqfCksOowonCslxuICAgKi9cbiAgcmVtb3ZlUm9sZShyb2xlczogc3RyaW5nW10pIHtcbiAgICBmb3IgKGNvbnN0IHZhbCBvZiByb2xlcykge1xuICAgICAgY29uc3QgaWR4ID0gdGhpcy5yb2xlcy5pbmRleE9mKHZhbCk7XG4gICAgICBpZiAoaWR4ICE9PSAtMSkge1xuICAgICAgICB0aGlzLnJvbGVzLnNwbGljZShpZHgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmFjbENoYW5nZS5uZXh0KHRoaXMuZGF0YSk7XG4gIH1cblxuICAvKipcbiAgICogw6TCuMK6w6XCvcKTw6XCicKNw6fClMKow6bCiMK3w6fCp8K7w6nCmcKkw6bCncKDw6nCmcKQXG4gICAqL1xuICByZW1vdmVBYmlsaXR5KGFiaWxpdGllczogKG51bWJlciB8IHN0cmluZylbXSkge1xuICAgIGZvciAoY29uc3QgdmFsIG9mIGFiaWxpdGllcykge1xuICAgICAgY29uc3QgaWR4ID0gdGhpcy5hYmlsaXRpZXMuaW5kZXhPZih2YWwpO1xuICAgICAgaWYgKGlkeCAhPT0gLTEpIHtcbiAgICAgICAgdGhpcy5hYmlsaXRpZXMuc3BsaWNlKGlkeCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuYWNsQ2hhbmdlLm5leHQodGhpcy5kYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDDpcK9wpPDpcKJwo3Dp8KUwqjDpsKIwrfDpsKYwq/DpcKQwqbDpsKcwonDpcKvwrnDpcK6wpTDqMKnwpLDqMKJwrLDr8K8wozDpcKFwrbDpcKuwp4gYG51bWJlcmAgw6jCocKow6fCpMK6QWJpbGl0eVxuICAgKlxuICAgKiAtIMOlwr3CkyBgZnVsbDogdHJ1ZWAgw6bCiMKWw6XCj8KCw6bClcKwIGBudWxsYCDDpsKXwrbDqMK/wpTDpcKbwp4gYHRydWVgXG4gICAqIC0gw6jCi8Klw6TCvcK/w6fClMKoIGBBQ0xUeXBlYCDDpcKPwoLDpsKVwrDDr8K8wozDpcKPwq/DpMK7wqXDpsKMwofDpcKuwpogYG1vZGVgIMOmwqDCocOpwqrCjMOmwqjCocOlwrzCj1xuICAgKi9cbiAgY2FuKHJvbGVPckFiaWxpdHk6IEFDTENhblR5cGUpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5mdWxsID09PSB0cnVlIHx8ICFyb2xlT3JBYmlsaXR5KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBsZXQgdDogQUNMVHlwZSA9IHt9O1xuICAgIGlmICh0eXBlb2Ygcm9sZU9yQWJpbGl0eSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHQgPSB7IGFiaWxpdHk6IFtyb2xlT3JBYmlsaXR5XSB9O1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBBcnJheS5pc0FycmF5KHJvbGVPckFiaWxpdHkpICYmXG4gICAgICByb2xlT3JBYmlsaXR5Lmxlbmd0aCA+IDAgJiZcbiAgICAgIHR5cGVvZiByb2xlT3JBYmlsaXR5WzBdID09PSAnbnVtYmVyJ1xuICAgICkge1xuICAgICAgdCA9IHsgYWJpbGl0eTogcm9sZU9yQWJpbGl0eSB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB0ID0gdGhpcy5wYXJzZUFDTFR5cGUocm9sZU9yQWJpbGl0eSk7XG4gICAgfVxuXG4gICAgaWYgKHQucm9sZSkge1xuICAgICAgaWYgKHQubW9kZSA9PT0gJ2FsbE9mJykgcmV0dXJuIHQucm9sZS5ldmVyeSh2ID0+IHRoaXMucm9sZXMuaW5jbHVkZXModikpO1xuICAgICAgZWxzZSByZXR1cm4gdC5yb2xlLnNvbWUodiA9PiB0aGlzLnJvbGVzLmluY2x1ZGVzKHYpKTtcbiAgICB9XG4gICAgaWYgKHQuYWJpbGl0eSkge1xuICAgICAgaWYgKHQubW9kZSA9PT0gJ2FsbE9mJylcbiAgICAgICAgcmV0dXJuICh0LmFiaWxpdHkgYXMgYW55W10pLmV2ZXJ5KHYgPT4gdGhpcy5hYmlsaXRpZXMuaW5jbHVkZXModikpO1xuICAgICAgZWxzZSByZXR1cm4gKHQuYWJpbGl0eSBhcyBhbnlbXSkuc29tZSh2ID0+IHRoaXMuYWJpbGl0aWVzLmluY2x1ZGVzKHYpKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqIEBpbm5lciAqL1xuICBwYXJzZUFiaWxpdHkodmFsdWU6IEFDTENhblR5cGUpOiBBQ0xDYW5UeXBlIHtcbiAgICBpZiAoXG4gICAgICB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInIHx8XG4gICAgICB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnIHx8XG4gICAgICBBcnJheS5pc0FycmF5KHZhbHVlKVxuICAgICkge1xuICAgICAgdmFsdWUgPSA8QUNMVHlwZT57IGFiaWxpdHk6IEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbdmFsdWVdIH07XG4gICAgfVxuICAgIGRlbGV0ZSB2YWx1ZS5yb2xlO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiDDpcK9wpPDpcKJwo3Dp8KUwqjDpsKIwrfDpsKYwq/DpcKQwqbDpsKcwonDpcKvwrnDpcK6wpTDpsKdwoPDqcKZwpDDp8KCwrlcbiAgICovXG4gIGNhbkFiaWxpdHkodmFsdWU6IEFDTENhblR5cGUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jYW4odGhpcy5wYXJzZUFiaWxpdHkodmFsdWUpKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBJbnB1dCxcbiAgRWxlbWVudFJlZixcbiAgUmVuZGVyZXIyLFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEFDTFNlcnZpY2UgfSBmcm9tICcuL2FjbC5zZXJ2aWNlJztcbmltcG9ydCB7IEFDTENhblR5cGUgfSBmcm9tICcuL2FjbC50eXBlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2FjbF0nLFxufSlcbmV4cG9ydCBjbGFzcyBBQ0xEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF92YWx1ZTogYW55O1xuICBwcml2YXRlIGNoYW5nZSQ6IFN1YnNjcmlwdGlvbjtcblxuICBASW5wdXQoJ2FjbCcpXG4gIHNldCBhY2wodmFsdWU6IEFDTENhblR5cGUpIHtcbiAgICB0aGlzLnNldCh2YWx1ZSk7XG4gIH1cblxuICBASW5wdXQoJ2FjbC1hYmlsaXR5JylcbiAgc2V0IGFiaWxpdHkodmFsdWU6IEFDTENhblR5cGUpIHtcbiAgICB0aGlzLnNldCh0aGlzLnNydi5wYXJzZUFiaWxpdHkodmFsdWUpKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0KHZhbHVlOiBBQ0xDYW5UeXBlKSB7XG4gICAgY29uc3QgQ0xTID0gJ2FjbF9faGlkZSc7XG4gICAgY29uc3QgZWwgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKHRoaXMuc3J2LmNhbih2YWx1ZSkpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWwsIENMUyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoZWwsIENMUyk7XG4gICAgfVxuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIHNydjogQUNMU2VydmljZSxcbiAgKSB7XG4gICAgdGhpcy5jaGFuZ2UkID0gPGFueT50aGlzLnNydi5jaGFuZ2Uuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2V0KHRoaXMuX3ZhbHVlKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmNoYW5nZSQudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIERlbG9uQUNMQ29uZmlnIHtcbiAgLyoqXG4gICAqIMOowrfCr8OnwpTCscOlwq7CiMOlwo3Cq8OlwqTCscOowrTCpcOlwpDCjsOowrfCs8Oowr3CrMOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmAvNDAzYFxuICAgKi9cbiAgZ3VhcmRfdXJsPyA9ICcvNDAzJztcbn1cbiIsImltcG9ydCB7XG4gIENhbkFjdGl2YXRlLFxuICBDYW5BY3RpdmF0ZUNoaWxkLFxuICBDYW5Mb2FkLFxuICBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICBSb3V0ZSxcbiAgUm91dGVyU3RhdGVTbmFwc2hvdCxcbiAgUm91dGVyLFxufSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBBQ0xTZXJ2aWNlIH0gZnJvbSAnLi9hY2wuc2VydmljZSc7XG5pbXBvcnQgeyBBQ0xDYW5UeXBlIH0gZnJvbSAnLi9hY2wudHlwZSc7XG5pbXBvcnQgeyBEZWxvbkFDTENvbmZpZyB9IGZyb20gJy4vYWNsLmNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBQ0xHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlLCBDYW5BY3RpdmF0ZUNoaWxkLCBDYW5Mb2FkIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzcnY6IEFDTFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIG9wdGlvbnM6IERlbG9uQUNMQ29uZmlnLFxuICApIHt9XG5cbiAgcHJpdmF0ZSBwcm9jZXNzKFxuICAgIGd1YXJkOiBBQ0xDYW5UeXBlIHwgT2JzZXJ2YWJsZTxBQ0xDYW5UeXBlPixcbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIChndWFyZCAmJiBndWFyZCBpbnN0YW5jZW9mIE9ic2VydmFibGVcbiAgICAgID8gZ3VhcmRcbiAgICAgIDogb2YoXG4gICAgICAgICAgdHlwZW9mIGd1YXJkICE9PSAndW5kZWZpbmVkJyAmJiBndWFyZCAhPT0gbnVsbFxuICAgICAgICAgICAgPyAoZ3VhcmQgYXMgQUNMQ2FuVHlwZSlcbiAgICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgKVxuICAgICkucGlwZShcbiAgICAgIG1hcCh2ID0+IHRoaXMuc3J2LmNhbih2KSksXG4gICAgICB0YXAodiA9PiB7XG4gICAgICAgIGlmICh2KSByZXR1cm47XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwodGhpcy5vcHRpb25zLmd1YXJkX3VybCk7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgLy8gbGF6eSBsb2FkaW5nXG4gIGNhbkxvYWQocm91dGU6IFJvdXRlKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMucHJvY2Vzcygocm91dGUuZGF0YSAmJiByb3V0ZS5kYXRhLmd1YXJkKSB8fCBudWxsKTtcbiAgfVxuICAvLyBhbGwgY2hpbGRyZW4gcm91dGVcbiAgY2FuQWN0aXZhdGVDaGlsZChcbiAgICBjaGlsZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICAgIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90LFxuICApOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5jYW5BY3RpdmF0ZShjaGlsZFJvdXRlLCBzdGF0ZSk7XG4gIH1cbiAgLy8gcm91dGVcbiAgY2FuQWN0aXZhdGUoXG4gICAgcm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gICAgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QsXG4gICk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnByb2Nlc3MoKHJvdXRlLmRhdGEgJiYgcm91dGUuZGF0YS5ndWFyZCkgfHwgbnVsbCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBEZWxvbkFDTENvbmZpZyB9IGZyb20gJy4vYWNsLmNvbmZpZyc7XG5pbXBvcnQgeyBBQ0xHdWFyZCB9IGZyb20gJy4vYWNsLWd1YXJkJztcbmltcG9ydCB7IEFDTFNlcnZpY2UgfSBmcm9tICcuL2FjbC5zZXJ2aWNlJztcbmltcG9ydCB7IEFDTERpcmVjdGl2ZSB9IGZyb20gJy4vYWNsLmRpcmVjdGl2ZSc7XG5cbmNvbnN0IFNFUlZJQ0VTID0gW0FDTFNlcnZpY2UsIEFDTEd1YXJkXTtcbmNvbnN0IENPTVBPTkVOVFMgPSBbQUNMRGlyZWN0aXZlXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogWy4uLkNPTVBPTkVOVFNdLFxuICBleHBvcnRzOiBbLi4uQ09NUE9ORU5UU10sXG59KVxuZXhwb3J0IGNsYXNzIERlbG9uQUNMTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBEZWxvbkFDTE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW0RlbG9uQUNMQ29uZmlnLCAuLi5TRVJWSUNFU10sXG4gICAgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7O0FBUUEsTUFBYSxVQUFVO0lBRHZCO1FBRVUsVUFBSyxHQUFhLEVBQUUsQ0FBQztRQUNyQixjQUFTLEdBQXdCLEVBQUUsQ0FBQztRQUNwQyxTQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2IsY0FBUyxHQUF1QyxJQUFJLGVBQWUsQ0FFekUsSUFBSSxDQUFDLENBQUM7S0FpTFQ7Ozs7O0lBOUtDLElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUN0Qzs7Ozs7SUFHRCxJQUFJLElBQUk7UUFDTixPQUFPO1lBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztTQUMxQixDQUFDO0tBQ0g7Ozs7O0lBRU8sWUFBWSxDQUFDLEdBQWdDO1FBQ25ELElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNsRCwwQkFBZ0IsR0FBRyxHQUFDO1NBQ3JCO1FBQ0QsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3RCLDBCQUFnQixFQUFFLElBQUkscUJBQVksR0FBRyxFQUFBLEVBQUUsR0FBQztTQUN6QztRQUNELDBCQUFnQjtZQUNkLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQztTQUNaLEdBQUM7S0FDSDs7Ozs7O0lBS0QsR0FBRyxDQUFDLEtBQWM7UUFDaEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7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