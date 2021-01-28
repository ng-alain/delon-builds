import * as i0 from '@angular/core';
import { ɵɵinject, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdirectiveInject, TemplateRef, ViewContainerRef, ɵɵngDeclareDirective, Directive, Input, ElementRef, Renderer2, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { AlainConfigService, InputBoolean, DelonUtilModule } from '@delon/util';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { __decorate, __metadata } from 'tslib';
import { filter, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

const ACL_DEFAULT_CONFIG = {
    guard_url: `/403`,
};

/**
 * ACL 控制服务，[在线文档](https://ng-alain.com/acl)
 *
 * 务必在根目录注册 `DelonACLModule.forRoot()` 才能使用服务
 */
class ACLService {
    constructor(configSrv) {
        this.roles = [];
        this.abilities = [];
        this.full = false;
        this.aclChange = new BehaviorSubject(null);
        this.options = configSrv.merge('acl', ACL_DEFAULT_CONFIG);
    }
    /** ACL变更通知 */
    get change() {
        return this.aclChange.asObservable();
    }
    /** 获取所有数据 */
    get data() {
        return {
            full: this.full,
            roles: this.roles,
            abilities: this.abilities,
        };
    }
    get guard_url() {
        return this.options.guard_url;
    }
    parseACLType(val) {
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
            t = { role: val };
        }
        else {
            t = { role: val == null ? [] : [val] };
        }
        return Object.assign({ except: false }, t);
    }
    /**
     * 设置当前用户角色或权限能力（会先清除所有）
     */
    set(value) {
        this.abilities = [];
        this.roles = [];
        this.add(value);
        this.aclChange.next(value);
    }
    /**
     * 标识当前用户为全量，即不受限
     */
    setFull(val) {
        this.full = val;
        this.aclChange.next(val);
    }
    /**
     * 设置当前用户权限能力（会先清除所有）
     */
    setAbility(abilities) {
        this.set({ ability: abilities });
    }
    /**
     * 设置当前用户角色（会先清除所有）
     */
    setRole(roles) {
        this.set({ role: roles });
    }
    /**
     * 为当前用户增加角色或权限能力
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
     */
    removeRole(roles) {
        for (const val of roles) {
            const idx = this.roles.indexOf(val);
            if (idx !== -1) {
                this.roles.splice(idx, 1);
            }
        }
        this.aclChange.next(this.data);
    }
    /**
     * 为当前用户移除权限
     */
    removeAbility(abilities) {
        for (const val of abilities) {
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
     */
    can(roleOrAbility) {
        const { preCan } = this.options;
        if (preCan) {
            roleOrAbility = preCan(roleOrAbility);
        }
        const t = this.parseACLType(roleOrAbility);
        let result = false;
        if (this.full === true || !roleOrAbility) {
            result = true;
        }
        else {
            if (t.role && t.role.length > 0) {
                if (t.mode === 'allOf') {
                    result = t.role.every(v => this.roles.includes(v));
                }
                else {
                    result = t.role.some(v => this.roles.includes(v));
                }
            }
            if (t.ability && t.ability.length > 0) {
                if (t.mode === 'allOf') {
                    result = t.ability.every(v => this.abilities.includes(v));
                }
                else {
                    result = t.ability.some(v => this.abilities.includes(v));
                }
            }
        }
        return t.except === true ? !result : result;
    }
    /** @inner */
    parseAbility(value) {
        if (typeof value === 'number' || typeof value === 'string' || Array.isArray(value)) {
            value = { ability: Array.isArray(value) ? value : [value] };
        }
        delete value.role;
        return value;
    }
    /**
     * 当前用户是否有对应权限点
     */
    canAbility(value) {
        return this.can(this.parseAbility(value));
    }
}
/** @nocollapse */ ACLService.ɵfac = function ACLService_Factory(t) { return new (t || ACLService)(ɵɵinject(AlainConfigService)); };
/** @nocollapse */ ACLService.ɵprov = ɵɵdefineInjectable({ token: ACLService, factory: ACLService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ACLService, [{
        type: Injectable
    }], function () { return [{ type: AlainConfigService }]; }, null); })();

class ACLIfDirective {
    constructor(templateRef, srv, _viewContainer) {
        this.srv = srv;
        this._viewContainer = _viewContainer;
        this._thenTemplateRef = null;
        this._elseTemplateRef = null;
        this._thenViewRef = null;
        this._elseViewRef = null;
        this.except = false;
        this._change$ = this.srv.change.pipe(filter(r => r != null)).subscribe(() => this._updateView());
        this._thenTemplateRef = templateRef;
    }
    set aclIf(value) {
        this._value = value;
        this._updateView();
    }
    set aclIfThen(templateRef) {
        this._thenTemplateRef = templateRef;
        this._thenViewRef = null;
        this._updateView();
    }
    set aclIfElse(templateRef) {
        this._elseTemplateRef = templateRef;
        this._elseViewRef = null;
        this._updateView();
    }
    _updateView() {
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
    ngOnDestroy() {
        this._change$.unsubscribe();
    }
}
/** @nocollapse */ ACLIfDirective.ɵfac = function ACLIfDirective_Factory(t) { return new (t || ACLIfDirective)(ɵɵdirectiveInject(TemplateRef), ɵɵdirectiveInject(ACLService), ɵɵdirectiveInject(ViewContainerRef)); };
/** @nocollapse */ ACLIfDirective.ɵdir = ɵɵngDeclareDirective({ version: "11.1.1", type: ACLIfDirective, selector: "[aclIf]", inputs: { aclIf: "aclIf", aclIfThen: "aclIfThen", aclIfElse: "aclIfElse", except: "except" }, exportAs: ["aclIf"], ngImport: i0 });
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], ACLIfDirective.prototype, "except", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ACLIfDirective, [{
        type: Directive,
        args: [{
                selector: '[aclIf]',
                exportAs: 'aclIf',
            }]
    }], function () { return [{ type: TemplateRef }, { type: ACLService }, { type: ViewContainerRef }]; }, { aclIf: [{
            type: Input
        }], aclIfThen: [{
            type: Input
        }], aclIfElse: [{
            type: Input
        }], except: [{
            type: Input
        }] }); })();

class ACLDirective {
    constructor(el, renderer, srv) {
        this.el = el;
        this.renderer = renderer;
        this.srv = srv;
        this.change$ = this.srv.change.pipe(filter(r => r != null)).subscribe(() => this.set(this._value));
    }
    set acl(value) {
        this.set(value);
    }
    set ability(value) {
        this.set(this.srv.parseAbility(value));
    }
    set(value) {
        this._value = value;
        const CLS = 'acl__hide';
        const el = this.el.nativeElement;
        if (this.srv.can(this._value)) {
            this.renderer.removeClass(el, CLS);
        }
        else {
            this.renderer.addClass(el, CLS);
        }
    }
    ngOnDestroy() {
        this.change$.unsubscribe();
    }
}
/** @nocollapse */ ACLDirective.ɵfac = function ACLDirective_Factory(t) { return new (t || ACLDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ACLService)); };
/** @nocollapse */ ACLDirective.ɵdir = ɵɵngDeclareDirective({ version: "11.1.1", type: ACLDirective, selector: "[acl]", inputs: { acl: "acl", ability: ["acl-ability", "ability"] }, exportAs: ["acl"], ngImport: i0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ACLDirective, [{
        type: Directive,
        args: [{
                selector: '[acl]',
                exportAs: 'acl',
            }]
    }], function () { return [{ type: ElementRef }, { type: Renderer2 }, { type: ACLService }]; }, { acl: [{
            type: Input,
            args: ['acl']
        }], ability: [{
            type: Input,
            args: ['acl-ability']
        }] }); })();

/**
 * NOTE：`ACLType` 类型可能会被其他类库所引用，为了减少类库间彼此的依赖性，其他类库会以复制的形式存在
 * 当这里有变化时，请务必同步更新，涉及：`MenuService.acl`、`util.AlainACLType`
 * TODO: 尝试增加 `@delon/core` 类库用于处理这种通用型
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
class ACLGuard {
    constructor(srv, router) {
        this.srv = srv;
        this.router = router;
    }
    process(data) {
        data = Object.assign({ guard: null, guard_url: this.srv.guard_url }, data);
        const guard = data.guard;
        return (guard && guard instanceof Observable ? guard : of(guard != null ? guard : null)).pipe(map(v => this.srv.can(v)), tap(v => {
            if (v)
                return;
            this.router.navigateByUrl(data.guard_url);
        }));
    }
    // lazy loading
    canLoad(route) {
        return this.process(route.data);
    }
    // all children route
    canActivateChild(childRoute, state) {
        return this.canActivate(childRoute, state);
    }
    // route
    canActivate(route, _state) {
        return this.process(route.data);
    }
}
/** @nocollapse */ ACLGuard.ɵfac = function ACLGuard_Factory(t) { return new (t || ACLGuard)(ɵɵinject(ACLService), ɵɵinject(Router)); };
/** @nocollapse */ ACLGuard.ɵprov = ɵɵdefineInjectable({ token: ACLGuard, factory: ACLGuard.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ACLGuard, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: ACLService }, { type: Router }]; }, null); })();

const COMPONENTS = [ACLDirective, ACLIfDirective];
class DelonACLModule {
    static forRoot() {
        return {
            ngModule: DelonACLModule,
            providers: [ACLService],
        };
    }
}
/** @nocollapse */ DelonACLModule.ɵmod = ɵɵdefineNgModule({ type: DelonACLModule });
/** @nocollapse */ DelonACLModule.ɵinj = ɵɵdefineInjector({ factory: function DelonACLModule_Factory(t) { return new (t || DelonACLModule)(); }, imports: [[CommonModule, DelonUtilModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(DelonACLModule, { declarations: [ACLDirective, ACLIfDirective], imports: [CommonModule, DelonUtilModule], exports: [ACLDirective, ACLIfDirective] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(DelonACLModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, DelonUtilModule],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS],
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { ACLDirective, ACLGuard, ACLIfDirective, ACLService, ACL_DEFAULT_CONFIG, DelonACLModule };
//# sourceMappingURL=acl.js.map
