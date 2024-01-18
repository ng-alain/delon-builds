import { OnDestroy } from '@angular/core';
import { LoadingDefaultComponent } from './loading.component';
import { LoadingShowOptions } from './loading.types';
import * as i0 from "@angular/core";
export declare class LoadingService implements OnDestroy {
    private readonly overlay;
    private readonly configSrv;
    private readonly directionality;
    private _overlayRef?;
    private compRef;
    private opt;
    private cog;
    private n$;
    private loading$;
    get instance(): LoadingDefaultComponent | null;
    constructor();
    private create;
    /**
     * Open a new loading indicator
     *
     * 打开一个新加载指示符
     */
    open(options?: LoadingShowOptions): void;
    private _close;
    /**
     * Turn off a loading indicator
     *
     * 关闭一个加载指示符
     */
    close(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LoadingService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LoadingService>;
}
