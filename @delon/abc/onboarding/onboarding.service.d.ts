import { Directionality } from '@angular/cdk/bidi';
import { ApplicationRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { DelonLocaleService } from '@delon/theme';
import { AlainConfigService } from '@delon/util/config';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { OnBoardingKeyStore } from './onboarding.storage';
import { OnboardingConfig } from './onboarding.types';
import * as i0 from "@angular/core";
export declare class OnboardingService implements OnDestroy {
    private i18n;
    private appRef;
    private router;
    private doc;
    private configSrv;
    private keyStoreSrv;
    private directionality;
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
    constructor(i18n: DelonLocaleService, appRef: ApplicationRef, router: Router, doc: NzSafeAny, configSrv: AlainConfigService, keyStoreSrv: OnBoardingKeyStore, directionality: Directionality);
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
    static ɵfac: i0.ɵɵFactoryDeclaration<OnboardingService, [null, null, null, null, null, null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<OnboardingService>;
}
