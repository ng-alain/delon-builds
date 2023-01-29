import { HttpHeaders } from '@angular/common/http';
import { Injector } from '@angular/core';
import { ACLCanType } from '@delon/acl';
import * as i0 from "@angular/core";
/**
 * Every http decorator must be based on `BaseAPI`, Like this:
 * ```ts
 * \@Injectable()
 * class DataService extends BaseApi {}
 * ```
 */
export declare abstract class BaseApi {
    protected injector: Injector;
    constructor(injector: Injector);
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseApi, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<BaseApi>;
}
export interface HttpOptions {
    /** ACL配置，若导入 `@delon/acl` 时自动有效，等同于 `ACLService.can(roleOrAbility: ACLCanType)` 参数值 */
    acl?: ACLCanType;
    observe?: 'body' | 'events' | 'response';
    responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
    reportProgress?: boolean;
    withCredentials?: boolean;
}
/**
 * 默认基准URL
 * - 有效范围：类
 */
export declare function BaseUrl(url: string): <TClass extends new (...args: any[]) => BaseApi>(target: TClass) => TClass;
/**
 * 默认 `headers`
 * - 有效范围：类
 */
export declare function BaseHeaders(headers: HttpHeaders | {
    [header: string]: string | string[];
}): <TClass extends new (...args: any[]) => BaseApi>(target: TClass) => TClass;
/**
 * URL路由参数
 * - 有效范围：方法参数
 */
export declare const Path: (key?: string) => (target: BaseApi, propertyKey: string, index: number) => void;
/**
 * URL 参数 `QueryString`
 * - 有效范围：方法参数
 */
export declare const Query: (key?: string) => (target: BaseApi, propertyKey: string, index: number) => void;
/**
 * 参数 `Body`
 * - 有效范围：方法参数
 */
export declare const Body: (target: BaseApi, propertyKey: string, index: number) => void;
/**
 * 参数 `headers`
 * - 有效范围：方法参数
 * - 合并 `BaseHeaders`
 */
export declare const Headers: (key?: string) => (target: BaseApi, propertyKey: string, index: number) => void;
/**
 * Request Payload
 * - Supported body (like`POST`, `PUT`) as a body data, equivalent to `@Body`
 * - Not supported body (like `GET`, `DELETE` etc) as a `QueryString`
 */
export declare const Payload: (target: BaseApi, propertyKey: string, index: number) => void;
export type METHOD_TYPE = 'OPTIONS' | 'GET' | 'POST' | 'DELETE' | 'PUT' | 'HEAD' | 'PATCH' | 'JSONP' | 'FORM';
/**
 * `OPTIONS` 请求
 * - 有效范围：方法
 */
export declare const OPTIONS: (url?: string, options?: HttpOptions) => (_target: BaseApi, targetKey?: string, descriptor?: PropertyDescriptor) => PropertyDescriptor | undefined;
/**
 * `GET` 请求
 * - 有效范围：方法
 */
export declare const GET: (url?: string, options?: HttpOptions) => (_target: BaseApi, targetKey?: string, descriptor?: PropertyDescriptor) => PropertyDescriptor | undefined;
/**
 * `POST` 请求
 * - 有效范围：方法
 */
export declare const POST: (url?: string, options?: HttpOptions) => (_target: BaseApi, targetKey?: string, descriptor?: PropertyDescriptor) => PropertyDescriptor | undefined;
/**
 * `DELETE` 请求
 * - 有效范围：方法
 */
export declare const DELETE: (url?: string, options?: HttpOptions) => (_target: BaseApi, targetKey?: string, descriptor?: PropertyDescriptor) => PropertyDescriptor | undefined;
/**
 * `PUT` 请求
 * - 有效范围：方法
 */
export declare const PUT: (url?: string, options?: HttpOptions) => (_target: BaseApi, targetKey?: string, descriptor?: PropertyDescriptor) => PropertyDescriptor | undefined;
/**
 * `HEAD` 请求
 * - 有效范围：方法
 */
export declare const HEAD: (url?: string, options?: HttpOptions) => (_target: BaseApi, targetKey?: string, descriptor?: PropertyDescriptor) => PropertyDescriptor | undefined;
/**
 * `PATCH` 请求
 * - 有效范围：方法
 */
export declare const PATCH: (url?: string, options?: HttpOptions) => (_target: BaseApi, targetKey?: string, descriptor?: PropertyDescriptor) => PropertyDescriptor | undefined;
/**
 * `JSONP` 请求
 * - 有效范围：方法
 */
export declare const JSONP: (url?: string, options?: HttpOptions) => (_target: BaseApi, targetKey?: string, descriptor?: PropertyDescriptor) => PropertyDescriptor | undefined;
/**
 * `FORM` 请求
 * - 有效范围：方法
 */
export declare const FORM: (url?: string, options?: HttpOptions) => (_target: BaseApi, targetKey?: string, descriptor?: PropertyDescriptor) => PropertyDescriptor | undefined;
