import { Observable } from 'rxjs';
import { AlainMediaConfig } from '@delon/util/config';
import * as i0 from "@angular/core";
export declare class MediaService {
    private readonly cogSrv;
    private readonly lazySrv;
    private _cog;
    private loading;
    private loaded;
    private notify$;
    get cog(): AlainMediaConfig;
    set cog(val: AlainMediaConfig);
    load(): this;
    notify(): Observable<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MediaService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MediaService>;
}
