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
            return /** @type {?} */ (val);
        }
        if (Array.isArray(val)) {
            return /** @type {?} */ ({ role: /** @type {?} */ (val) });
        }
        return /** @type {?} */ ({
            role: [val],
        });
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
        this.set(/** @type {?} */ ({ ability: abilities }));
    }
    /**
     * 设置当前用户角色（会先清除所有）
     * @param {?} roles
     * @return {?}
     */
    setRole(roles) {
        this.set(/** @type {?} */ ({ role: roles }));
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
                return (/** @type {?} */ (t.ability)).every(v => this.abilities.includes(v));
            else
                return (/** @type {?} */ (t.ability)).some(v => this.abilities.includes(v));
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
            value = /** @type {?} */ ({ ability: Array.isArray(value) ? value : [value] });
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        this.change$ = /** @type {?} */ (this.srv.change.subscribe(() => this.set(this._value)));
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
                ? (/** @type {?} */ (guard))
                : null)).pipe(map(v => this.srv.can(v)), tap(v => {
            if (v)
                return;
            this.router.navigateByUrl(this.options.guard_url);
        }));
    }
    /**
     * @param {?} route
     * @return {?}
     */
    canLoad(route) {
        return this.process((route.data && route.data["guard"]) || null);
    }
    /**
     * @param {?} childRoute
     * @param {?} state
     * @return {?}
     */
    canActivateChild(childRoute, state) {
        return this.canActivate(childRoute, state);
    }
    /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    canActivate(route, state) {
        return this.process((route.data && route.data["guard"]) || null);
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { ACLService, ACLDirective, DelonACLConfig, ACLGuard, DelonACLModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNsLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AZGVsb24vYWNsL3NyYy9hY2wuc2VydmljZS50cyIsIm5nOi8vQGRlbG9uL2FjbC9zcmMvYWNsLmRpcmVjdGl2ZS50cyIsIm5nOi8vQGRlbG9uL2FjbC9zcmMvYWNsLmNvbmZpZy50cyIsIm5nOi8vQGRlbG9uL2FjbC9zcmMvYWNsLWd1YXJkLnRzIiwibmc6Ly9AZGVsb24vYWNsL3NyYy9hY2wubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEFDTFR5cGUsIEFDTENhblR5cGUgfSBmcm9tICcuL2FjbC50eXBlJztcclxuXHJcbi8qKlxyXG4gKiDDqMKuwr/DqcKXwq7DpsKOwqfDpcKIwrbDpsKcwo3DpcKKwqFcclxuICovXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFDTFNlcnZpY2Uge1xyXG4gIHByaXZhdGUgcm9sZXM6IHN0cmluZ1tdID0gW107XHJcbiAgcHJpdmF0ZSBhYmlsaXRpZXM6IChudW1iZXIgfCBzdHJpbmcpW10gPSBbXTtcclxuICBwcml2YXRlIGZ1bGwgPSBmYWxzZTtcclxuICBwcml2YXRlIGFjbENoYW5nZTogQmVoYXZpb3JTdWJqZWN0PEFDTFR5cGUgfCBib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8XHJcbiAgICBBQ0xUeXBlIHwgYm9vbGVhblxyXG4gID4obnVsbCk7XHJcblxyXG4gIC8qKiBBQ0zDpcKPwpjDpsKbwrTDqcKAwprDp8KfwqUgKi9cclxuICBnZXQgY2hhbmdlKCk6IE9ic2VydmFibGU8QUNMVHlwZSB8IGJvb2xlYW4+IHtcclxuICAgIHJldHVybiB0aGlzLmFjbENoYW5nZS5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIC8qKiDDqMKOwrfDpcKPwpbDpsKJwoDDpsKcwonDpsKVwrDDpsKNwq4gKi9cclxuICBnZXQgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGZ1bGw6IHRoaXMuZnVsbCxcclxuICAgICAgcm9sZXM6IHRoaXMucm9sZXMsXHJcbiAgICAgIGFiaWxpdGllczogdGhpcy5hYmlsaXRpZXMsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwYXJzZUFDTFR5cGUodmFsOiBzdHJpbmcgfCBzdHJpbmdbXSB8IEFDTFR5cGUpOiBBQ0xUeXBlIHtcclxuICAgIGlmICh0eXBlb2YgdmFsICE9PSAnc3RyaW5nJyAmJiAhQXJyYXkuaXNBcnJheSh2YWwpKSB7XHJcbiAgICAgIHJldHVybiA8QUNMVHlwZT52YWw7XHJcbiAgICB9XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XHJcbiAgICAgIHJldHVybiA8QUNMVHlwZT57IHJvbGU6IDxzdHJpbmdbXT52YWwgfTtcclxuICAgIH1cclxuICAgIHJldHVybiA8QUNMVHlwZT57XHJcbiAgICAgIHJvbGU6IFt2YWxdLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIMOowq7CvsOnwr3CrsOlwr3Ck8OlwonCjcOnwpTCqMOmwojCt8OowqfCksOowonCssOmwojClsOmwp3Cg8OpwpnCkMOowoPCvcOlworCm8OvwrzCiMOkwrzCmsOlwoXCiMOmwrjChcOpwpnCpMOmwonCgMOmwpzCicOvwrzCiVxyXG4gICAqL1xyXG4gIHNldCh2YWx1ZTogQUNMVHlwZSkge1xyXG4gICAgdGhpcy5hYmlsaXRpZXMgPSBbXTtcclxuICAgIHRoaXMucm9sZXMgPSBbXTtcclxuICAgIHRoaXMuYWRkKHZhbHVlKTtcclxuICAgIHRoaXMuYWNsQ2hhbmdlLm5leHQodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogw6bCoMKHw6jCr8KGw6XCvcKTw6XCicKNw6fClMKow6bCiMK3w6TCuMK6w6XChcKow6nCh8KPw6/CvMKMw6XCjcKzw6TCuMKNw6XCj8KXw6nCmcKQXHJcbiAgICovXHJcbiAgc2V0RnVsbCh2YWw6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuZnVsbCA9IHZhbDtcclxuICAgIHRoaXMuYWNsQ2hhbmdlLm5leHQodmFsKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIMOowq7CvsOnwr3CrsOlwr3Ck8OlwonCjcOnwpTCqMOmwojCt8Omwp3Cg8OpwpnCkMOowoPCvcOlworCm8OvwrzCiMOkwrzCmsOlwoXCiMOmwrjChcOpwpnCpMOmwonCgMOmwpzCicOvwrzCiVxyXG4gICAqL1xyXG4gIHNldEFiaWxpdHkoYWJpbGl0aWVzOiAobnVtYmVyIHwgc3RyaW5nKVtdKSB7XHJcbiAgICB0aGlzLnNldCg8QUNMVHlwZT57IGFiaWxpdHk6IGFiaWxpdGllcyB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIMOowq7CvsOnwr3CrsOlwr3Ck8OlwonCjcOnwpTCqMOmwojCt8OowqfCksOowonCssOvwrzCiMOkwrzCmsOlwoXCiMOmwrjChcOpwpnCpMOmwonCgMOmwpzCicOvwrzCiVxyXG4gICAqL1xyXG4gIHNldFJvbGUocm9sZXM6IHN0cmluZ1tdKSB7XHJcbiAgICB0aGlzLnNldCg8QUNMVHlwZT57IHJvbGU6IHJvbGVzIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogw6TCuMK6w6XCvcKTw6XCicKNw6fClMKow6bCiMK3w6XCosKew6XCisKgw6jCp8KSw6jCicKyw6bCiMKWw6bCncKDw6nCmcKQw6jCg8K9w6XCisKbXHJcbiAgICovXHJcbiAgYWRkKHZhbHVlOiBBQ0xUeXBlKSB7XHJcbiAgICBpZiAodmFsdWUucm9sZSAmJiB2YWx1ZS5yb2xlLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5yb2xlcy5wdXNoKC4uLnZhbHVlLnJvbGUpO1xyXG4gICAgfVxyXG4gICAgaWYgKHZhbHVlLmFiaWxpdHkgJiYgdmFsdWUuYWJpbGl0eS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuYWJpbGl0aWVzLnB1c2goLi4udmFsdWUuYWJpbGl0eSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDDpMK4wrrDpcK9wpPDpcKJwo3Dp8KUwqjDpsKIwrfDqcKZwoTDpcKKwqDDqMKnwpLDqMKJwrJcclxuICAgKi9cclxuICBhdHRhY2hSb2xlKHJvbGVzOiBzdHJpbmdbXSkge1xyXG4gICAgZm9yIChjb25zdCB2YWwgb2Ygcm9sZXMpIHtcclxuICAgICAgaWYgKCF0aGlzLnJvbGVzLmluY2x1ZGVzKHZhbCkpIHtcclxuICAgICAgICB0aGlzLnJvbGVzLnB1c2godmFsKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5hY2xDaGFuZ2UubmV4dCh0aGlzLmRhdGEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogw6TCuMK6w6XCvcKTw6XCicKNw6fClMKow6bCiMK3w6nCmcKEw6XCisKgw6bCncKDw6nCmcKQXHJcbiAgICovXHJcbiAgYXR0YWNoQWJpbGl0eShhYmlsaXRpZXM6IChudW1iZXIgfCBzdHJpbmcpW10pIHtcclxuICAgIGZvciAoY29uc3QgdmFsIG9mIGFiaWxpdGllcykge1xyXG4gICAgICBpZiAoIXRoaXMuYWJpbGl0aWVzLmluY2x1ZGVzKHZhbCkpIHtcclxuICAgICAgICB0aGlzLmFiaWxpdGllcy5wdXNoKHZhbCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuYWNsQ2hhbmdlLm5leHQodGhpcy5kYXRhKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIMOkwrjCusOlwr3Ck8OlwonCjcOnwpTCqMOmwojCt8OnwqfCu8OpwpnCpMOowqfCksOowonCslxyXG4gICAqL1xyXG4gIHJlbW92ZVJvbGUocm9sZXM6IHN0cmluZ1tdKSB7XHJcbiAgICBmb3IgKGNvbnN0IHZhbCBvZiByb2xlcykge1xyXG4gICAgICBjb25zdCBpZHggPSB0aGlzLnJvbGVzLmluZGV4T2YodmFsKTtcclxuICAgICAgaWYgKGlkeCAhPT0gLTEpIHtcclxuICAgICAgICB0aGlzLnJvbGVzLnNwbGljZShpZHgsIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmFjbENoYW5nZS5uZXh0KHRoaXMuZGF0YSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDDpMK4wrrDpcK9wpPDpcKJwo3Dp8KUwqjDpsKIwrfDp8KnwrvDqcKZwqTDpsKdwoPDqcKZwpBcclxuICAgKi9cclxuICByZW1vdmVBYmlsaXR5KGFiaWxpdGllczogKG51bWJlciB8IHN0cmluZylbXSkge1xyXG4gICAgZm9yIChjb25zdCB2YWwgb2YgYWJpbGl0aWVzKSB7XHJcbiAgICAgIGNvbnN0IGlkeCA9IHRoaXMuYWJpbGl0aWVzLmluZGV4T2YodmFsKTtcclxuICAgICAgaWYgKGlkeCAhPT0gLTEpIHtcclxuICAgICAgICB0aGlzLmFiaWxpdGllcy5zcGxpY2UoaWR4LCAxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5hY2xDaGFuZ2UubmV4dCh0aGlzLmRhdGEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogw6XCvcKTw6XCicKNw6fClMKow6bCiMK3w6bCmMKvw6XCkMKmw6bCnMKJw6XCr8K5w6XCusKUw6jCp8KSw6jCicKyw6/CvMKMw6XChcK2w6XCrsKeIGBudW1iZXJgIMOowqHCqMOnwqTCukFiaWxpdHlcclxuICAgKlxyXG4gICAqIC0gw6XCvcKTIGBmdWxsOiB0cnVlYCDDpsKIwpbDpcKPwoLDpsKVwrAgYG51bGxgIMOmwpfCtsOowr/ClMOlwpvCniBgdHJ1ZWBcclxuICAgKiAtIMOowovCpcOkwr3Cv8OnwpTCqCBgQUNMVHlwZWAgw6XCj8KCw6bClcKww6/CvMKMw6XCj8Kvw6TCu8Klw6bCjMKHw6XCrsKaIGBtb2RlYCDDpsKgwqHDqcKqwozDpsKowqHDpcK8wo9cclxuICAgKi9cclxuICBjYW4ocm9sZU9yQWJpbGl0eTogQUNMQ2FuVHlwZSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHRoaXMuZnVsbCA9PT0gdHJ1ZSB8fCAhcm9sZU9yQWJpbGl0eSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgdDogQUNMVHlwZSA9IHt9O1xyXG4gICAgaWYgKHR5cGVvZiByb2xlT3JBYmlsaXR5ID09PSAnbnVtYmVyJykge1xyXG4gICAgICB0ID0geyBhYmlsaXR5OiBbcm9sZU9yQWJpbGl0eV0gfTtcclxuICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgIEFycmF5LmlzQXJyYXkocm9sZU9yQWJpbGl0eSkgJiZcclxuICAgICAgcm9sZU9yQWJpbGl0eS5sZW5ndGggPiAwICYmXHJcbiAgICAgIHR5cGVvZiByb2xlT3JBYmlsaXR5WzBdID09PSAnbnVtYmVyJ1xyXG4gICAgKSB7XHJcbiAgICAgIHQgPSB7IGFiaWxpdHk6IHJvbGVPckFiaWxpdHkgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHQgPSB0aGlzLnBhcnNlQUNMVHlwZShyb2xlT3JBYmlsaXR5KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodC5yb2xlKSB7XHJcbiAgICAgIGlmICh0Lm1vZGUgPT09ICdhbGxPZicpIHJldHVybiB0LnJvbGUuZXZlcnkodiA9PiB0aGlzLnJvbGVzLmluY2x1ZGVzKHYpKTtcclxuICAgICAgZWxzZSByZXR1cm4gdC5yb2xlLnNvbWUodiA9PiB0aGlzLnJvbGVzLmluY2x1ZGVzKHYpKTtcclxuICAgIH1cclxuICAgIGlmICh0LmFiaWxpdHkpIHtcclxuICAgICAgaWYgKHQubW9kZSA9PT0gJ2FsbE9mJylcclxuICAgICAgICByZXR1cm4gKHQuYWJpbGl0eSBhcyBhbnlbXSkuZXZlcnkodiA9PiB0aGlzLmFiaWxpdGllcy5pbmNsdWRlcyh2KSk7XHJcbiAgICAgIGVsc2UgcmV0dXJuICh0LmFiaWxpdHkgYXMgYW55W10pLnNvbWUodiA9PiB0aGlzLmFiaWxpdGllcy5pbmNsdWRlcyh2KSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvKiogQGlubmVyICovXHJcbiAgcGFyc2VBYmlsaXR5KHZhbHVlOiBBQ0xDYW5UeXBlKTogQUNMQ2FuVHlwZSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgfHxcclxuICAgICAgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyB8fFxyXG4gICAgICBBcnJheS5pc0FycmF5KHZhbHVlKVxyXG4gICAgKSB7XHJcbiAgICAgIHZhbHVlID0gPEFDTFR5cGU+eyBhYmlsaXR5OiBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogW3ZhbHVlXSB9O1xyXG4gICAgfVxyXG4gICAgZGVsZXRlIHZhbHVlLnJvbGU7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDDpcK9wpPDpcKJwo3Dp8KUwqjDpsKIwrfDpsKYwq/DpcKQwqbDpsKcwonDpcKvwrnDpcK6wpTDpsKdwoPDqcKZwpDDp8KCwrlcclxuICAgKi9cclxuICBjYW5BYmlsaXR5KHZhbHVlOiBBQ0xDYW5UeXBlKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5jYW4odGhpcy5wYXJzZUFiaWxpdHkodmFsdWUpKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBEaXJlY3RpdmUsXHJcbiAgSW5wdXQsXHJcbiAgRWxlbWVudFJlZixcclxuICBSZW5kZXJlcjIsXHJcbiAgT25EZXN0cm95LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IEFDTFNlcnZpY2UgfSBmcm9tICcuL2FjbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQUNMQ2FuVHlwZSB9IGZyb20gJy4vYWNsLnR5cGUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYWNsXScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBQ0xEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgX3ZhbHVlOiBhbnk7XHJcbiAgcHJpdmF0ZSBjaGFuZ2UkOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIEBJbnB1dCgnYWNsJylcclxuICBzZXQgYWNsKHZhbHVlOiBBQ0xDYW5UeXBlKSB7XHJcbiAgICB0aGlzLnNldCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoJ2FjbC1hYmlsaXR5JylcclxuICBzZXQgYWJpbGl0eSh2YWx1ZTogQUNMQ2FuVHlwZSkge1xyXG4gICAgdGhpcy5zZXQodGhpcy5zcnYucGFyc2VBYmlsaXR5KHZhbHVlKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldCh2YWx1ZTogQUNMQ2FuVHlwZSkge1xyXG4gICAgY29uc3QgQ0xTID0gJ2FjbF9faGlkZSc7XHJcbiAgICBjb25zdCBlbCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcclxuICAgIGlmICh0aGlzLnNydi5jYW4odmFsdWUpKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWwsIENMUyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGVsLCBDTFMpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgc3J2OiBBQ0xTZXJ2aWNlLFxyXG4gICkge1xyXG4gICAgdGhpcy5jaGFuZ2UkID0gPGFueT50aGlzLnNydi5jaGFuZ2Uuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2V0KHRoaXMuX3ZhbHVlKSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2hhbmdlJC51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgRGVsb25BQ0xDb25maWcge1xyXG4gIC8qKlxyXG4gICAqIMOowrfCr8OnwpTCscOlwq7CiMOlwo3Cq8OlwqTCscOowrTCpcOlwpDCjsOowrfCs8Oowr3CrMOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmAvNDAzYFxyXG4gICAqL1xyXG4gIGd1YXJkX3VybD8gPSAnLzQwMyc7XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBDYW5BY3RpdmF0ZSxcclxuICBDYW5BY3RpdmF0ZUNoaWxkLFxyXG4gIENhbkxvYWQsXHJcbiAgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcclxuICBSb3V0ZSxcclxuICBSb3V0ZXJTdGF0ZVNuYXBzaG90LFxyXG4gIFJvdXRlcixcclxufSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgQUNMU2VydmljZSB9IGZyb20gJy4vYWNsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBQ0xDYW5UeXBlIH0gZnJvbSAnLi9hY2wudHlwZSc7XHJcbmltcG9ydCB7IERlbG9uQUNMQ29uZmlnIH0gZnJvbSAnLi9hY2wuY29uZmlnJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFDTEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUsIENhbkFjdGl2YXRlQ2hpbGQsIENhbkxvYWQge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBzcnY6IEFDTFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSBvcHRpb25zOiBEZWxvbkFDTENvbmZpZyxcclxuICApIHt9XHJcblxyXG4gIHByaXZhdGUgcHJvY2VzcyhcclxuICAgIGd1YXJkOiBBQ0xDYW5UeXBlIHwgT2JzZXJ2YWJsZTxBQ0xDYW5UeXBlPixcclxuICApOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybiAoZ3VhcmQgJiYgZ3VhcmQgaW5zdGFuY2VvZiBPYnNlcnZhYmxlXHJcbiAgICAgID8gZ3VhcmRcclxuICAgICAgOiBvZihcclxuICAgICAgICAgIHR5cGVvZiBndWFyZCAhPT0gJ3VuZGVmaW5lZCcgJiYgZ3VhcmQgIT09IG51bGxcclxuICAgICAgICAgICAgPyAoZ3VhcmQgYXMgQUNMQ2FuVHlwZSlcclxuICAgICAgICAgICAgOiBudWxsLFxyXG4gICAgICAgIClcclxuICAgICkucGlwZShcclxuICAgICAgbWFwKHYgPT4gdGhpcy5zcnYuY2FuKHYpKSxcclxuICAgICAgdGFwKHYgPT4ge1xyXG4gICAgICAgIGlmICh2KSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCh0aGlzLm9wdGlvbnMuZ3VhcmRfdXJsKTtcclxuICAgICAgfSksXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLy8gbGF6eSBsb2FkaW5nXHJcbiAgY2FuTG9hZChyb3V0ZTogUm91dGUpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybiB0aGlzLnByb2Nlc3MoKHJvdXRlLmRhdGEgJiYgcm91dGUuZGF0YS5ndWFyZCkgfHwgbnVsbCk7XHJcbiAgfVxyXG4gIC8vIGFsbCBjaGlsZHJlbiByb3V0ZVxyXG4gIGNhbkFjdGl2YXRlQ2hpbGQoXHJcbiAgICBjaGlsZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxyXG4gICAgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QsXHJcbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm4gdGhpcy5jYW5BY3RpdmF0ZShjaGlsZFJvdXRlLCBzdGF0ZSk7XHJcbiAgfVxyXG4gIC8vIHJvdXRlXHJcbiAgY2FuQWN0aXZhdGUoXHJcbiAgICByb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcclxuICAgIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90LFxyXG4gICk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvY2Vzcygocm91dGUuZGF0YSAmJiByb3V0ZS5kYXRhLmd1YXJkKSB8fCBudWxsKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IERlbG9uQUNMQ29uZmlnIH0gZnJvbSAnLi9hY2wuY29uZmlnJztcclxuaW1wb3J0IHsgQUNMR3VhcmQgfSBmcm9tICcuL2FjbC1ndWFyZCc7XHJcbmltcG9ydCB7IEFDTFNlcnZpY2UgfSBmcm9tICcuL2FjbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQUNMRGlyZWN0aXZlIH0gZnJvbSAnLi9hY2wuZGlyZWN0aXZlJztcclxuXHJcbmNvbnN0IFNFUlZJQ0VTID0gW0FDTFNlcnZpY2UsIEFDTEd1YXJkXTtcclxuY29uc3QgQ09NUE9ORU5UUyA9IFtBQ0xEaXJlY3RpdmVdO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTXSxcclxuICBleHBvcnRzOiBbLi4uQ09NUE9ORU5UU10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEZWxvbkFDTE1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogRGVsb25BQ0xNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW0RlbG9uQUNMQ29uZmlnLCAuLi5TRVJWSUNFU10sXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7QUFRQTs7cUJBQzRCLEVBQUU7eUJBQ2EsRUFBRTtvQkFD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