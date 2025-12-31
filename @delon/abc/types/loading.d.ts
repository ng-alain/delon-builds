import { Direction } from '@angular/cdk/bidi';
import { SafeHtml } from '@angular/platform-browser';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import * as i0 from '@angular/core';
import { OnDestroy } from '@angular/core';
import * as i1 from '@angular/common';
import * as i2 from '@angular/cdk/overlay';
import * as i3 from '@angular/cdk/portal';
import * as i4 from 'ng-zorro-antd/icon';
import * as i5 from 'ng-zorro-antd/spin';

type LoadingType = 'text' | 'icon' | 'spin' | 'custom';
interface LoadingIcon {
    type?: string;
    theme?: 'fill' | 'outline' | 'twotone';
    spin?: boolean;
}
interface LoadingCustom {
    html?: string | SafeHtml;
    style?: Record<string, NzSafeAny>;
    [key: string]: NzSafeAny;
}
interface LoadingShowOptions {
    /**
     * Display type of loading indicator
     */
    type?: LoadingType;
    /**
     * Customized description content
     */
    text?: string;
    /**
     * Custom icon
     */
    icon?: LoadingIcon;
    /**
     * Custom loading indicator
     */
    custom?: LoadingCustom;
    /**
     * Specifies a delay in milliseconds for loading state (prevent flush), unit: milliseconds
     */
    delay?: number;
}

declare class LoadingDefaultComponent {
    options: LoadingShowOptions;
    dir?: Direction;
    get icon(): LoadingIcon;
    get custom(): LoadingCustom;
    static ɵfac: i0.ɵɵFactoryDeclaration<LoadingDefaultComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LoadingDefaultComponent, "loading-default", never, {}, {}, never, never, true, never>;
}

declare class LoadingService implements OnDestroy {
    private readonly overlay;
    private readonly configSrv;
    private readonly directionality;
    private locale;
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

declare class LoadingModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<LoadingModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<LoadingModule, never, [typeof i1.CommonModule, typeof i2.OverlayModule, typeof i3.PortalModule, typeof i4.NzIconModule, typeof i5.NzSpinModule, typeof LoadingDefaultComponent], [typeof LoadingDefaultComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<LoadingModule>;
}

export { LoadingDefaultComponent, LoadingModule, LoadingService };
export type { LoadingCustom, LoadingIcon, LoadingShowOptions, LoadingType };
