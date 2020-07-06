import { Platform } from '@angular/cdk/platform';
import { ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy } from '@angular/core';
import { OnboardingConfig, OnboardingItem, OnboardingOpType } from './onboarding.types';
export declare class OnboardingComponent implements OnDestroy {
    private el;
    private doc;
    private platform;
    private cdr;
    private time;
    private prevSelectorEl;
    config: OnboardingConfig;
    item: OnboardingItem;
    active: number;
    max: number;
    readonly op: EventEmitter<OnboardingOpType>;
    visible: boolean;
    get first(): boolean;
    get last(): boolean;
    private _getDoc;
    private _getWin;
    constructor(el: ElementRef<HTMLElement>, doc: any, platform: Platform, cdr: ChangeDetectorRef);
    private getLightData;
    private scroll;
    updatePosition(options?: {
        time?: number;
    }): void;
    private setVisible;
    private updatePrevElStatus;
    to(type: OnboardingOpType): void;
    handleMask(): void;
    ngOnDestroy(): void;
}
