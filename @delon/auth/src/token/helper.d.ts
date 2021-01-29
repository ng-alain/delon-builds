import { Injector } from '@angular/core';
import { AlainAuthConfig } from '@delon/util/config';
import { JWTTokenModel } from './jwt/jwt.model';
import { SimpleTokenModel } from './simple/simple.model';
export declare function CheckSimple(model: SimpleTokenModel | null): boolean;
export declare function CheckJwt(model: JWTTokenModel, offset: number): boolean;
export declare function ToLogin(options: AlainAuthConfig, injector: Injector, url?: string): void;
