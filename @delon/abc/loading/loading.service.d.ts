import { Overlay } from '@angular/cdk/overlay';
import { LoadingShowOptions } from './loading.interfaces';
import { LoadingConfig } from './loading.config';
import { LoadingDefaultComponent } from './loading.component';
export declare class LoadingService {
    private cog;
    private overlay;
    private _overlayRef;
    private compRef;
    readonly instance: LoadingDefaultComponent;
    constructor(cog: LoadingConfig, overlay: Overlay);
    open(options?: LoadingShowOptions): void;
    close(): void;
}
