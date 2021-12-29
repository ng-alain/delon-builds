import { Observable } from 'rxjs';
import { AlainConfigService, AlainMediaConfig } from '@delon/util/config';
import { LazyService } from '@delon/util/other';
import * as i0 from "@angular/core";
export declare class MediaService {
    private cogSrv;
    private lazySrv;
    private _cog;
    private loading;
    private loaded;
    private notify$;
    get cog(): AlainMediaConfig;
    set cog(val: AlainMediaConfig);
    constructor(cogSrv: AlainConfigService, lazySrv: LazyService);
    load(): this;
    notify(): Observable<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MediaService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MediaService>;
}
