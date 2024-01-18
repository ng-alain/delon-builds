import { OnDestroy } from '@angular/core';
import { OnboardingConfig } from './onboarding.types';
import * as i0 from "@angular/core";
export declare class OnboardingService implements OnDestroy {
    private readonly i18n;
    private readonly appRef;
    private readonly router;
    private readonly doc;
    private readonly configSrv;
    private readonly keyStoreSrv;
    private readonly directionality;
    private compRef;
    private op$;
    private config?;
    private active;
    private running$;
    private _running;
    private type;
    private _getDoc;
    /**
     * Get whether it is booting
     *
     * 获取是否正在引导中
     */
    get running(): boolean;
    private attach;
    private cancelRunning;
    private updateRunning;
    private destroy;
    private showItem;
    /**
     * Start a new user guidance
     *
     * 开启新的用户引导流程
     */
    start(config: OnboardingConfig): void;
    /**
     * Next
     *
     * 下一步
     */
    next(): void;
    /**
     * Prev
     *
     * 上一步
     */
    prev(): void;
    /**
     * Done
     *
     * 完成
     */
    done(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<OnboardingService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<OnboardingService>;
}
