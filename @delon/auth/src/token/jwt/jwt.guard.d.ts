import { Injector } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad } from '@angular/router';
import { DelonAuthConfig } from '../../auth.config';
import { ITokenService } from '../interface';
export declare class JWTGuard implements CanActivate, CanActivateChild, CanLoad {
    private srv;
    private injector;
    private cog;
    constructor(srv: ITokenService, injector: Injector, cog: DelonAuthConfig);
    private process;
    canLoad(): boolean;
    canActivateChild(): boolean;
    canActivate(): boolean;
}
