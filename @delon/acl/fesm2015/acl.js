import { Injectable, ɵɵdefineInjectable, Directive, TemplateRef, ViewContainerRef, Input, ElementRef, Renderer2, ɵɵinject, NgModule } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { __decorate, __metadata } from 'tslib';
import { InputBoolean, DelonUtilModule } from '@delon/util';
import { filter, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: src/acl.config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DelonACLConfig {
    constructor() {
        /**
         * 路由守卫失败后跳转，默认：`/403`
         */
        this.guard_url = '/403';
    }
}
DelonACLConfig.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ DelonACLConfig.ngInjectableDef = ɵɵdefineInjectable({ factory: function DelonACLConfig_Factory() { return new DelonACLConfig(); }, token: DelonACLConfig, providedIn: "root" });
if (false) {
    /**
     * 路由守卫失败后跳转，默认：`/403`
     * @type {?}
     */
    DelonACLConfig.prototype.guard_url;
    /**
     * `can` 执行前回调
     * @type {?}
     */
    DelonACLConfig.prototype.preCan;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/acl.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * 访问控制服务
 */
class ACLService {
    /**
     * @param {?} options
     */
    constructor(options) {
        this.options = options;
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
     * @private
     * @param {?} val
     * @return {?}
     */
    parseACLType(val) {
        /** @type {?} */
        let t;
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
            t = { role: (/** @type {?} */ (val)) };
        }
        else {
            t = { role: val == null ? [] : [val] };
        }
        return Object.assign({ except: false }, t);
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
        const { preCan } = this.options;
        if (preCan) {
            roleOrAbility = preCan((/** @type {?} */ (roleOrAbility)));
        }
        /** @type {?} */
        const t = this.parseACLType(roleOrAbility);
        /** @type {?} */
        let result = false;
        if (this.full === true || !roleOrAbility) {
            result = true;
        }
        else {
            if (t.role && t.role.length > 0) {
                if (t.mode === 'allOf') {
                    result = t.role.every((/**
                     * @param {?} v
                     * @return {?}
                     */
                    v => this.roles.includes(v)));
                }
                else {
                    result = t.role.some((/**
                     * @param {?} v
                     * @return {?}
                     */
                    v => this.roles.includes(v)));
                }
            }
            if (t.ability && t.ability.length > 0) {
                if (t.mode === 'allOf') {
                    result = ((/** @type {?} */ (t.ability))).every((/**
                     * @param {?} v
                     * @return {?}
                     */
                    v => this.abilities.includes(v)));
                }
                else {
                    result = ((/** @type {?} */ (t.ability))).some((/**
                     * @param {?} v
                     * @return {?}
                     */
                    v => this.abilities.includes(v)));
                }
            }
        }
        return t.except === true ? !result : result;
    }
    /**
     * \@inner
     * @param {?} value
     * @return {?}
     */
    parseAbility(value) {
        if (typeof value === 'number' || typeof value === 'string' || Array.isArray(value)) {
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
/** @nocollapse */
ACLService.ctorParameters = () => [
    { type: DelonACLConfig }
];
if (false) {
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
    /**
     * @type {?}
     * @private
     */
    ACLService.prototype.options;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/acl-if.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ACLIfDirective {
    /**
     * @param {?} templateRef
     * @param {?} srv
     * @param {?} _viewContainer
     */
    constructor(templateRef, srv, _viewContainer) {
        this.srv = srv;
        this._viewContainer = _viewContainer;
        this._thenTemplateRef = null;
        this._elseTemplateRef = null;
        this._thenViewRef = null;
        this._elseViewRef = null;
        this.except = false;
        this._change$ = this.srv.change.pipe(filter((/**
         * @param {?} r
         * @return {?}
         */
        r => r != null))).subscribe((/**
         * @return {?}
         */
        () => this._updateView()));
        this._thenTemplateRef = templateRef;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set aclIf(value) {
        this._value = value;
        this._updateView();
    }
    /**
     * @param {?} templateRef
     * @return {?}
     */
    set aclIfThen(templateRef) {
        this._thenTemplateRef = templateRef;
        this._thenViewRef = null;
        this._updateView();
    }
    /**
     * @param {?} templateRef
     * @return {?}
     */
    set aclIfElse(templateRef) {
        this._elseTemplateRef = templateRef;
        this._elseViewRef = null;
        this._updateView();
    }
    /**
     * @protected
     * @return {?}
     */
    _updateView() {
        /** @type {?} */
        const res = this.srv.can(this._value);
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
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._change$.unsubscribe();
    }
}
ACLIfDirective.decorators = [
    { type: Directive, args: [{
                selector: '[aclIf]',
                exportAs: 'aclIf',
            },] }
];
/** @nocollapse */
ACLIfDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: ACLService },
    { type: ViewContainerRef }
];
ACLIfDirective.propDecorators = {
    aclIf: [{ type: Input }],
    aclIfThen: [{ type: Input }],
    aclIfElse: [{ type: Input }],
    except: [{ type: Input }]
};
__decorate([
    InputBoolean(),
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
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.change$ = this.srv.change.pipe(filter((/**
         * @param {?} r
         * @return {?}
         */
        r => r != null))).subscribe((/**
         * @return {?}
         */
        () => this.set(this._value)));
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
     * @private
     * @param {?} value
     * @return {?}
     */
    set(value) {
        this._value = value;
        /** @type {?} */
        const CLS = 'acl__hide';
        /** @type {?} */
        const el = this.el.nativeElement;
        if (this.srv.can(this._value)) {
            this.renderer.removeClass(el, CLS);
        }
        else {
            this.renderer.addClass(el, CLS);
        }
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
                exportAs: 'acl',
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
 * Generated from: src/acl.type.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function ACLType() { }
if (false) {
    /**
     * 角色
     * @type {?|undefined}
     */
    ACLType.prototype.role;
    /**
     * 权限点
     * @type {?|undefined}
     */
    ACLType.prototype.ability;
    /**
     * 校验模式，默认：`oneOf`
     * - `allOf` 表示必须满足所有角色或权限点数组算有效
     * - `oneOf` 表示只须满足角色或权限点数组中的一项算有效
     * @type {?|undefined}
     */
    ACLType.prototype.mode;
    /**
     * 是否取反，即结果为 `true` 时表示未授权
     * @type {?|undefined}
     */
    ACLType.prototype.except;
    /* Skipping unhandled member: [key: string]: any;*/
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/acl-guard.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @private
     * @param {?} data
     * @return {?}
     */
    process(data) {
        data = Object.assign({ guard: null, guard_url: this.options.guard_url }, data);
        /** @type {?} */
        const guard = data.guard;
        return (guard && guard instanceof Observable ? guard : of(guard != null ? ((/** @type {?} */ (guard))) : null)).pipe(map((/**
         * @param {?} v
         * @return {?}
         */
        v => this.srv.can(v))), tap((/**
         * @param {?} v
         * @return {?}
         */
        v => {
            if (v)
                return;
            this.router.navigateByUrl(data.guard_url);
        })));
    }
    // lazy loading
    /**
     * @param {?} route
     * @return {?}
     */
    canLoad(route) {
        return this.process((/** @type {?} */ (route.data)));
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
     * @param {?} _state
     * @return {?}
     */
    canActivate(route, _state) {
        return this.process(route.data);
    }
}
ACLGuard.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ACLGuard.ctorParameters = () => [
    { type: ACLService },
    { type: Router },
    { type: DelonACLConfig }
];
/** @nocollapse */ ACLGuard.ngInjectableDef = ɵɵdefineInjectable({ factory: function ACLGuard_Factory() { return new ACLGuard(ɵɵinject(ACLService), ɵɵinject(Router), ɵɵinject(DelonACLConfig)); }, token: ACLGuard, providedIn: "root" });
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
    /**
     * @type {?}
     * @private
     */
    ACLGuard.prototype.options;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/acl.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [ACLDirective, ACLIfDirective];
class DelonACLModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: DelonACLModule,
            providers: [ACLService],
        };
    }
}
DelonACLModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, DelonUtilModule],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS],
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: acl.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ACLDirective, ACLGuard, ACLIfDirective, ACLService, DelonACLConfig, DelonACLModule };
//# sourceMappingURL=acl.js.map
