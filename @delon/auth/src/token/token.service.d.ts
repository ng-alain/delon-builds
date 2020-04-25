import { AlainAuthConfig, AlainConfigService } from '@delon/util';
import { Observable } from 'rxjs';
import { IStore } from '../store/interface';
import { AuthReferrer, ITokenModel, ITokenService } from './interface';
export declare function DA_SERVICE_TOKEN_FACTORY(): ITokenService;
/**
 * 维护Token信息服务，[在线文档](https://ng-alain.com/auth)
 */
export declare class TokenService implements ITokenService {
    private store;
    private change$;
    private _referrer;
    private _options;
    constructor(configSrv: AlainConfigService, store: IStore);
    /**
     * 授权失败后跳转路由路径（支持外部链接地址），通过设置[全局配置](https://ng-alain.com/docs/global-config)来改变
     */
    get login_url(): string | undefined;
    /**
     * 当前请求页面的来源页面的地址
     */
    get referrer(): AuthReferrer;
    get options(): AlainAuthConfig;
    /**
     * 设置 Token 信息
     */
    set(data: ITokenModel): boolean;
    /**
     * 获取 Token 信息，例如：
     * ```
     * // 返回 `any` 类型 Token 对象
     * const token = tokenService.get();
     * // 获取 JWT 类型的 Token 对象
     * const token = tokenService.get<JWTTokenModel>(JWTTokenModel);
     * // 获取 Simple 类型的 Token 对象
     * const token = tokenService.get<SimpleTokenModel>(SimpleTokenModel);
     * ```
     */
    get(type?: any): any;
    /**
     * 清除 Token 信息，例如：
     * ```
     * // 清除所有 Token 信息
     * tokenService.clear();
     * // 只清除 token 字段
     * tokenService.clear({ onlyToken: true });
     * ```
     */
    clear(options?: {
        onlyToken: boolean;
    }): void;
    /**
     * 订阅 Token 对象变更通知
     */
    change(): Observable<ITokenModel | null>;
}
