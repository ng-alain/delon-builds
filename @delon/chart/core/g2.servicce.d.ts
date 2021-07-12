import { OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { AlainChartConfig, AlainConfigService } from '@delon/util/config';
import { LazyService } from '@delon/util/other';
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
