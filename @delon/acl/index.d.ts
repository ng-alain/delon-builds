import { Observable } from 'rxjs';
import { AlainConfigService, AlainACLConfig } from '@delon/util/config';
import * as i0 from '@angular/core';
import { Injector, OnDestroy, TemplateRef } from '@angular/core';
import { CanActivateFn, CanActivateChildFn, CanMatchFn } from '@angular/router';
import * as i1 from '@angular/common';

/**
 * NOTE：`ACLType` 类型可能会被其他类库所引用，为了减少类库间彼此的依赖性，其他类库会以复制的形式存在
 * 当这里有变化时，请务必同步更新，涉及：`MenuService.acl`、`util.AlainACLType`
 * TODO: 尝试增加 `@delon/core` 类库用于处理这种通用型
 */

interface ACLType {
    /**
     * 角色
     */
    role?: string[];
    /**
     * 权限点
     */
    ability?: number[] | string[];
    /**
     * Validated against, default: `oneOf`
     * - `allOf` the value validates against all the roles or abilities
     * - `oneOf` the value validates against exactly one of the roles or abilities
     */
    mode?: 'allOf' | 'oneOf';
    /**
     * 是否取反，即结果为 `true` 时表示未授权
     */
    except?: boolean;
    [key: string]: any;
}
type ACLCanType = number | number[] | string | string[] | ACLType;
type ACLGuardFunctionType = (srv: ACLService, injector: Injector) => Observable<ACLCanType>;
type ACLGuardType = ACLCanType | Observable<ACLCanType> | ACLGuardFunctionType;
interface ACLGuardData {
    guard?: ACLGuardType | null;
    guard_url?: string | null;
}

/**
 * ACL 控制服务，[在线文档](https://ng-alain.com/acl)
 */
declare class ACLService {
    private options;
    private roles;
    private abilities;
    private full;
    private aclChange;
    /** ACL变更通知 */
    get change(): Observable<ACLType | boolean | null>;
    /** 获取所有数据 */
    get data(): {
        full: boolean;
        roles: string[];
        abilities: Array<string | number>;
    };
    get guard_url(): string;
    constructor(configSrv: AlainConfigService);
    private parseACLType;
    /**
     * 设置当前用户角色或权限能力（会先清除所有）
     */
    set(value: ACLType): void;
    /**
     * 标识当前用户为全量，即不受限
     */
    setFull(val: boolean): void;
    /**
     * 设置当前用户权限能力（会先清除所有）
     */
    setAbility(abilities: Array<number | string>): void;
    /**
     * 设置当前用户角色（会先清除所有）
     */
    setRole(roles: string[]): void;
    /**
     * 为当前用户增加角色或权限能力
     */
    add(value: ACLType): void;
    /**
     * 为当前用户附加角色
     */
    attachRole(roles: string[]): void;
    /**
     * 为当前用户附加权限
     */
    attachAbility(abilities: Array<number | string>): void;
    /**
     * 为当前用户移除角色
     */
    removeRole(roles: string[]): void;
    /**
     * 为当前用户移除权限
     */
    removeAbility(abilities: Array<number | string>): void;
    /**
     * 当前用户是否有对应角色，其实 `number` 表示Ability
     *
     * - 当 `full: true` 或参数 `null` 时返回 `true`
     * - 若使用 `ACLType` 参数，可以指定 `mode` 校验模式
     */
    can(roleOrAbility: ACLCanType | null): boolean;
    /** @inner */
    parseAbility(value: ACLCanType): ACLCanType;
    /**
     * 当前用户是否有对应权限点
     */
    canAbility(value: ACLCanType): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<ACLService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ACLService>;
}

declare class ACLIfDirective implements OnDestroy {
    private readonly srv;
    private readonly _viewContainer;
    static ngAcceptInputType_except: boolean | string | undefined | null;
    private _value;
    private _change$;
    private _thenTemplateRef;
    private _elseTemplateRef;
    private _thenViewRef;
    private _elseViewRef;
    private _except;
    constructor();
    set aclIf(value: ACLCanType);
    set aclIfThen(templateRef: TemplateRef<void> | null);
    set aclIfElse(templateRef: TemplateRef<void> | null);
    set except(value: boolean);
    get except(): boolean;
    protected _updateView(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ACLIfDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ACLIfDirective, "[aclIf]", ["aclIf"], { "aclIf": { "alias": "aclIf"; "required": false; }; "aclIfThen": { "alias": "aclIfThen"; "required": false; }; "aclIfElse": { "alias": "aclIfElse"; "required": false; }; "except": { "alias": "except"; "required": false; }; }, {}, never, never, true, never>;
}

declare class ACLDirective implements OnDestroy {
    private readonly el;
    private readonly renderer;
    private readonly srv;
    private _value;
    private change$;
    set acl(value: ACLCanType);
    set ability(value: ACLCanType);
    private set;
    constructor();
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ACLDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ACLDirective, "[acl]", ["acl"], { "acl": { "alias": "acl"; "required": false; }; "ability": { "alias": "acl-ability"; "required": false; }; }, {}, never, never, true, never>;
}

declare const ACL_DEFAULT_CONFIG: AlainACLConfig;

declare class ACLGuardService {
    private readonly srv;
    private readonly router;
    private readonly injector;
    process(data?: ACLGuardData): Observable<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ACLGuardService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ACLGuardService>;
}
/**
 * Routing guard prevent unauthorized users visit the page, [ACL Document](https://ng-alain.com/acl).
 *
 * ```ts
 * data: {
 *  path: 'home',
 *  canActivate: [ aclCanActivate ],
 *  data: { guard: 'user1' }
 * }
 * ```
 */
declare const aclCanActivate: CanActivateFn;
/**
 * Routing guard prevent unauthorized users visit the page, [ACL Document](https://ng-alain.com/acl).
 *
 * ```ts
 * data: {
 *  path: 'home',
 *  canActivateChild: [ aclCanActivateChild ],
 *  data: { guard: 'user1' }
 * }
 * ```
 */
declare const aclCanActivateChild: CanActivateChildFn;
/**
 * Routing guard prevent unauthorized users visit the page, [ACL Document](https://ng-alain.com/acl).
 *
 * ```ts
 * data: {
 *  path: 'home',
 *  canMatch: [ aclCanMatch ],
 *  data: { guard: 'user1' }
 * }
 * ```
 */
declare const aclCanMatch: CanMatchFn;

declare class DelonACLModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<DelonACLModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<DelonACLModule, never, [typeof i1.CommonModule, typeof ACLDirective, typeof ACLIfDirective], [typeof ACLDirective, typeof ACLIfDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<DelonACLModule>;
}

export { ACLDirective, ACLGuardService, ACLIfDirective, ACLService, ACL_DEFAULT_CONFIG, DelonACLModule, aclCanActivate, aclCanActivateChild, aclCanMatch };
export type { ACLCanType, ACLGuardData, ACLGuardFunctionType, ACLGuardType, ACLType };
