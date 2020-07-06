import { ApplicationRef, ComponentFactoryResolver, Injector, OnDestroy } from '@angular/core';
import { DelonLocaleService } from '@delon/theme';
import { OnboardingConfig } from './onboarding.types';
export declare class OnboardingService implements OnDestroy {
    private i18n;
    private appRef;
    private resolver;
    private injector;
    private doc;
    private compRef;
    private op$;
    private config;
    private active;
    private _getDoc;
    constructor(i18n: DelonLocaleService, appRef: ApplicationRef, resolver: ComponentFactoryResolver, injector: Injector, doc: any);
    private attach;
    private destroy;
    private showItem;
    start(config: OnboardingConfig): void;
    next(): void;
    prev(): void;
    done(): void;
    ngOnDestroy(): void;
}
