import { Overlay } from '@angular/cdk/overlay';
import { OnDestroy } from '@angular/core';
import { LoadingDefaultComponent } from './loading.component';
import { LoadingShowOptions } from './loading.types';
import { AlainConfigService } from '@delon/theme';
export declare class LoadingService implements OnDestroy {
    private overlay;
    private _overlayRef;
    private compRef;
    private opt;
    private cog;
    private n$;
    private loading$;
    get instance(): LoadingDefaultComponent | null;
    constructor(overlay: Overlay, configSrv: AlainConfigService);
    private create;
    open(options?: LoadingShowOptions): void;
    private _close;
    close(): void;
    ngOnDestroy(): void;
}
