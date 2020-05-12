import { OnDestroy } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { LoadingShowOptions } from './loading.interfaces';
import { LoadingConfig } from './loading.config';
import { LoadingDefaultComponent } from './loading.component';
export declare class LoadingService implements OnDestroy {
    private cog;
    private overlay;
    private _overlayRef;
    private compRef;
    private opt;
    private n$;
    private loading$;
    readonly instance: LoadingDefaultComponent | null;
    constructor(cog: LoadingConfig, overlay: Overlay);
    private create;
    open(options?: LoadingShowOptions): void;
    private _close;
    close(): void;
    ngOnDestroy(): void;
}
