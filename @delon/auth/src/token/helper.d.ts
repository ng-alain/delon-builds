import { Injector } from '@angular/core';
import { SimpleTokenModel } from './simple/simple.model';
import { JWTTokenModel } from './jwt/jwt.model';
import { DelonAuthConfig } from '../auth.config';
export declare function CheckSimple(model: SimpleTokenModel): boolean;
export declare function CheckJwt(model: JWTTokenModel, offset: number): boolean;
export declare function ToLogin(options: DelonAuthConfig, injector: Injector): void;
