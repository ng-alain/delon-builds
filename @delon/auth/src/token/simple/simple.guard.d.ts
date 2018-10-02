import { Injector } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad } from '@angular/router';
import { ITokenService } from '../interface';
import { DelonAuthConfig } from '../../auth.config';
export declare class SimpleGuard implements CanActivate, CanActivateChild, CanLoad {
    private srv;
    private injector;
    private cog;
    constructor(srv: ITokenService, injector: Injector, cog: DelonAuthConfig);
    private process;
    canLoad(): boolean;
    canActivateChild(): boolean;
    canActivate(): boolean;
}
