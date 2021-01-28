import { AlainConfigService } from '@delon/util';
import { Observable } from 'rxjs';
import { ACLCanType, ACLType } from './acl.type';
import * as i0 from "@angular/core";
/**
 * ACL 控制服务，[在线文档](https://ng-alain.com/acl)
 *
 * 务必在根目录注册 `DelonACLModule.forRoot()` 才能使用服务
 */
export declare class ACLService {
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
    static ɵfac: i0.ɵɵFactoryDef<ACLService, never>;
    static ɵprov: i0.ɵɵInjectableDef<ACLService>;
}
