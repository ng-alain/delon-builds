import { OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AlainAuthConfig, AlainConfigService } from '@delon/util/config';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { IStore } from '../store/interface';
import { AuthReferrer, ITokenModel, ITokenService } from './interface';
export declare function DA_SERVICE_TOKEN_FACTORY(): ITokenService;
/**
 * 维护Token信息服务，[在线文档](https://ng-alain.com/auth)
 */
export declare class TokenService implements ITokenService, OnDestroy {
    private store;
    private router;
    private refresh$;
    private change$;
    private interval$;
    private _referrer;
    private _options;
    constructor(configSrv: AlainConfigService, store: IStore, router: Router);
    get refresh(): Observable<ITokenModel>;
    get login_url(): string;
    get referrer(): AuthReferrer;
    get options(): AlainAuthConfig;
    set(data: ITokenModel): boolean;
    get(type?: NzSafeAny): NzSafeAny;
    clear(options?: {
        onlyToken: boolean;
    }): void;
    change(): Observable<ITokenModel | null>;
    private builderRefresh;
    private cleanRefresh;
    ngOnDestroy(): void;
}
