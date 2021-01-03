import { OnDestroy } from '@angular/core';
import { AlainChartConfig, AlainConfigService, LazyService } from '@delon/util';
import { Observable } from 'rxjs';
export declare class G2Service implements OnDestroy {
    private cogSrv;
    private lazySrv;
    private _cog;
    private loading;
    private loaded;
    private notify$;
    get cog(): AlainChartConfig;
    set cog(val: AlainChartConfig);
    constructor(cogSrv: AlainConfigService, lazySrv: LazyService);
    libLoad(): this;
    get notify(): Observable<void>;
    ngOnDestroy(): void;
}
