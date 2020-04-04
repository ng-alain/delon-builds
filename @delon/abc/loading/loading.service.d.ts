import { Overlay } from '@angular/cdk/overlay';
import { OnDestroy } from '@angular/core';
import { LoadingDefaultComponent } from './loading.component';
import { LoadingConfig } from './loading.config';
import { LoadingShowOptions } from './loading.interfaces';
export declare class LoadingService implements OnDestroy {
    private cog;
    private overlay;
    private _overlayRef;
    private compRef;
    private opt;
    private n$;
    private loading$;
    get instance(): LoadingDefaultComponent | null;
    constructor(cog: LoadingConfig, overlay: Overlay);
    private create;
    open(options?: LoadingShowOptions): void;
    private _close;
    close(): void;
    ngOnDestroy(): void;
}
