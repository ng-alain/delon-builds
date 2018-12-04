import { Observable } from 'rxjs';
import { ITokenService, ITokenModel } from './interface';
import { IStore } from '../store/interface';
import { DelonAuthConfig } from '../auth.config';
export declare class TokenService implements ITokenService {
    private options;
    private store;
    private change$;
    private data;
    private _redirect;
    constructor(options: DelonAuthConfig, store: IStore);
    readonly login_url: string;
    redirect: string;
    set(data: ITokenModel): boolean;
    get(type?: any): any;
    clear(): void;
    change(): Observable<ITokenModel>;
}
