/**
 * @fileoverview added by tsickle
 * Generated from: onboarding.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directionality } from '@angular/cdk/bidi';
import { DOCUMENT } from '@angular/common';
import { ApplicationRef, ComponentFactoryResolver, Inject, Injectable, Injector, Optional, } from '@angular/core';
import { Router } from '@angular/router';
import { DelonLocaleService } from '@delon/theme';
import { AlainConfigService } from '@delon/util';
import { of, pipe } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';
import { OnboardingComponent } from './onboarding.component';
import * as i0 from "@angular/core";
import * as i1 from "@delon/theme";
import * as i2 from "@angular/router";
import * as i3 from "@angular/common";
import * as i4 from "@delon/util";
import * as i5 from "@angular/cdk/bidi";
export class OnboardingService {
    /**
     * @param {?} i18n
     * @param {?} appRef
     * @param {?} resolver
     * @param {?} router
     * @param {?} injector
     * @param {?} doc
     * @param {?} configSrv
     * @param {?} directionality
     */
    constructor(i18n, appRef, resolver, router, injector, doc, configSrv, directionality) {
        this.i18n = i18n;
        this.appRef = appRef;
        this.resolver = resolver;
        this.router = router;
        this.injector = injector;
        this.doc = doc;
        this.configSrv = configSrv;
        this.directionality = directionality;
        this.active = 0;
        this.running$ = null;
        this._running = false;
        this.type = null;
    }
    /**
     * @private
     * @return {?}
     */
    _getDoc() {
        return this.doc;
    }
    /**
     * Get whether it is booting
     *
     * 获取是否正在引导中
     * @return {?}
     */
    get running() {
        return this._running;
    }
    /**
     * @private
     * @return {?}
     */
    attach() {
        /** @type {?} */
        const compRef = (this.compRef = this.resolver.resolveComponentFactory(OnboardingComponent).create(this.injector));
        this.appRef.attachView(compRef.hostView);
        /** @type {?} */
        const compNode = ((/** @type {?} */ (compRef.hostView))).rootNodes[0];
        /** @type {?} */
        const doc = this._getDoc();
        /** @type {?} */
        const cdk = (/** @type {?} */ (doc.querySelector('.cdk-overlay-container')));
        if (cdk) {
            doc.body.insertBefore(compNode, cdk);
        }
        else {
            doc.body.appendChild(compNode);
        }
        this.op$ = this.compRef.instance.op.subscribe((/**
         * @param {?} type
         * @return {?}
         */
        (type) => {
            switch (type) {
                case 'next':
                    this.next();
                    break;
                case 'prev':
                    this.prev();
                    break;
                default:
                    this.done();
                    break;
            }
        }));
    }
    /**
     * @private
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    cancelRunning() {
        if ((/** @type {?} */ (this)).running$) {
            (/** @type {?} */ (this)).running$.unsubscribe();
            (/** @type {?} */ (this)).running$ = null;
        }
        return (/** @type {?} */ (this));
    }
    /**
     * @private
     * @template THIS
     * @this {THIS}
     * @param {?} status
     * @return {THIS}
     */
    updateRunning(status) {
        (/** @type {?} */ (this))._running = status;
        (/** @type {?} */ ((/** @type {?} */ (this)).compRef)).instance.updateRunning(status);
        return (/** @type {?} */ (this));
    }
    /**
     * @private
     * @return {?}
     */
    destroy() {
        this.cancelRunning();
        if (this.compRef) {
            this.appRef.detachView(this.compRef.hostView);
            this.compRef.destroy();
            this.op$.unsubscribe();
        }
    }
    /**
     * @private
     * @param {?=} isStart
     * @return {?}
     */
    showItem(isStart = false) {
        /** @type {?} */
        const items = (/** @type {?} */ (this.config.items));
        /** @type {?} */
        const item = (/** @type {?} */ (Object.assign(Object.assign({ position: 'bottomLeft', before: of(true), after: of(true) }, this.i18n.getData('onboarding')), items[this.active])));
        /** @type {?} */
        const dir = (/** @type {?} */ (this.configSrv.get('onboarding'))).direction || this.directionality.value;
        Object.assign(this.compRef.instance, { item, config: this.config, active: this.active, max: items.length, dir });
        /** @type {?} */
        const pipes = [
            switchMap((/**
             * @return {?}
             */
            () => (item.url ? this.router.navigateByUrl(item.url) : of(true)))),
            switchMap((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const obs = this.type === 'prev' ? (/** @type {?} */ (item.after)) : (/** @type {?} */ (item.before));
                return typeof obs === 'number' ? of(true).pipe(delay(obs)) : obs;
            })),
        ];
        if (!isStart) {
            pipes.push(delay(1));
        }
        this.updateRunning(true);
        this.running$ = of(true)
            .pipe(pipe.apply(this, pipes))
            .subscribe((/**
         * @template THIS
         * @this {THIS}
         * @return {THIS}
         */
        () => this.cancelRunning().updateRunning(false)), (/**
         * @return {?}
         */
        () => this.done()));
    }
    /**
     * Start a new user guidance
     *
     * 开启新的用户引导流程
     * @param {?} config
     * @return {?}
     */
    start(config) {
        if (this.running) {
            return;
        }
        this.destroy();
        this.config = Object.assign({ items: [], mask: true, maskClosable: true, showTotal: false }, config);
        this.active = 0;
        this.type = null;
        this.attach();
        this.showItem(true);
    }
    /**
     * Next
     *
     * 下一步
     * @return {?}
     */
    next() {
        if (this._running || this.active + 1 >= (/** @type {?} */ (this.config.items)).length) {
            this.done();
            return;
        }
        this.type = 'next';
        ++this.active;
        this.showItem();
    }
    /**
     * Prev
     *
     * 上一步
     * @return {?}
     */
    prev() {
        if (this._running || this.active - 1 < 0) {
            return;
        }
        this.type = 'prev';
        --this.active;
        this.showItem();
    }
    /**
     * Done
     *
     * 完成
     * @return {?}
     */
    done() {
        this.type = 'done';
        this.destroy();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy();
    }
}
OnboardingService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
OnboardingService.ctorParameters = () => [
    { type: DelonLocaleService },
    { type: ApplicationRef },
    { type: ComponentFactoryResolver },
    { type: Router },
    { type: Injector },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: AlainConfigService },
    { type: Directionality, decorators: [{ type: Optional }] }
];
/** @nocollapse */ OnboardingService.ɵprov = i0.ɵɵdefineInjectable({ factory: function OnboardingService_Factory() { return new OnboardingService(i0.ɵɵinject(i1.DelonLocaleService), i0.ɵɵinject(i0.ApplicationRef), i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i2.Router), i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(i3.DOCUMENT), i0.ɵɵinject(i4.AlainConfigService), i0.ɵɵinject(i5.Directionality, 8)); }, token: OnboardingService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    OnboardingService.prototype.compRef;
    /**
     * @type {?}
     * @private
     */
    OnboardingService.prototype.op$;
    /**
     * @type {?}
     * @private
     */
    OnboardingService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    OnboardingService.prototype.active;
    /**
     * @type {?}
     * @private
     */
    OnboardingService.prototype.running$;
    /**
     * @type {?}
     * @private
     */
    OnboardingService.prototype._running;
    /**
     * @type {?}
     * @private
     */
    OnboardingService.prototype.type;
    /**
     * @type {?}
     * @private
     */
    OnboardingService.prototype.i18n;
    /**
     * @type {?}
     * @private
     */
    OnboardingService.prototype.appRef;
    /**
     * @type {?}
     * @private
     */
    OnboardingService.prototype.resolver;
    /**
     * @type {?}
     * @private
     */
    OnboardingService.prototype.router;
    /**
     * @type {?}
     * @private
     */
    OnboardingService.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    OnboardingService.prototype.doc;
    /**
     * @type {?}
     * @private
     */
    OnboardingService.prototype.configSrv;
    /**
     * @type {?}
     * @private
     */
    OnboardingService.prototype.directionality;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL29uYm9hcmRpbmcvb25ib2FyZGluZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsY0FBYyxFQUNkLHdCQUF3QixFQUd4QixNQUFNLEVBQ04sVUFBVSxFQUNWLFFBQVEsRUFFUixRQUFRLEdBQ1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNsRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDakQsT0FBTyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7QUFJN0QsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7Ozs7Ozs7SUFzQjVCLFlBQ1UsSUFBd0IsRUFDeEIsTUFBc0IsRUFDdEIsUUFBa0MsRUFDbEMsTUFBYyxFQUNkLFFBQWtCLEVBQ0EsR0FBUSxFQUMxQixTQUE2QixFQUNqQixjQUE4QjtRQVAxQyxTQUFJLEdBQUosSUFBSSxDQUFvQjtRQUN4QixXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUEwQjtRQUNsQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNBLFFBQUcs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LHFDQUF5Qjs7Ozs7SUFDekIsaUNBQTZDOzs7OztJQWdCM0MsaUNBQWdDOzs7OztJQUNoQyxtQ0FBOEI7Ozs7O0lBQzlCLHFDQUEwQzs7Ozs7SUFDMUMsbUNBQXNCOzs7OztJQUN0QixxQ0FBMEI7Ozs7O0lBQzFCLGdDQUFrQzs7Ozs7SUFDbEMsc0NBQXFDOzs7OztJQUNyQywyQ0FBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEFwcGxpY2F0aW9uUmVmLFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIENvbXBvbmVudFJlZixcbiAgRW1iZWRkZWRWaWV3UmVmLFxuICBJbmplY3QsXG4gIEluamVjdGFibGUsXG4gIEluamVjdG9yLFxuICBPbkRlc3Ryb3ksXG4gIE9wdGlvbmFsLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBEZWxvbkxvY2FsZVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgb2YsIHBpcGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVsYXksIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE9uYm9hcmRpbmdDb21wb25lbnQgfSBmcm9tICcuL29uYm9hcmRpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IE9uYm9hcmRpbmdDb25maWcsIE9uYm9hcmRpbmdJdGVtLCBPbmJvYXJkaW5nT3BUeXBlIH0gZnJvbSAnLi9vbmJvYXJkaW5nLnR5cGVzJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBPbmJvYXJkaW5nU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgY29tcFJlZjogQ29tcG9uZW50UmVmPE9uYm9hcmRpbmdDb21wb25lbnQ+O1xuICBwcml2YXRlIG9wJDogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIGNvbmZpZzogT25ib2FyZGluZ0NvbmZpZztcbiAgcHJpdmF0ZSBhY3RpdmUgPSAwO1xuICBwcml2YXRlIHJ1bm5pbmckOiBTdWJzY3JpcHRpb24gfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBfcnVubmluZyA9IGZhbHNlO1xuICBwcml2YXRlIHR5cGU6IE9uYm9hcmRpbmdPcFR5cGUgfCBudWxsID0gbnVsbDtcblxuICBwcml2YXRlIF9nZXREb2MoKTogRG9jdW1lbnQge1xuICAgIHJldHVybiB0aGlzLmRvYztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgd2hldGhlciBpdCBpcyBib290aW5nXG4gICAqXG4gICAqIOiOt+WPluaYr+WQpuato+WcqOW8leWvvOS4rVxuICAgKi9cbiAgZ2V0IHJ1bm5pbmcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3J1bm5pbmc7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGkxOG46IERlbG9uTG9jYWxlU2VydmljZSxcbiAgICBwcml2YXRlIGFwcFJlZjogQXBwbGljYXRpb25SZWYsXG4gICAgcHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IGFueSxcbiAgICBwcml2YXRlIGNvbmZpZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZGlyZWN0aW9uYWxpdHk6IERpcmVjdGlvbmFsaXR5LFxuICApIHt9XG5cbiAgcHJpdmF0ZSBhdHRhY2goKTogdm9pZCB7XG4gICAgY29uc3QgY29tcFJlZiA9ICh0aGlzLmNvbXBSZWYgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KE9uYm9hcmRpbmdDb21wb25lbnQpLmNyZWF0ZSh0aGlzLmluamVjdG9yKSk7XG4gICAgdGhpcy5hcHBSZWYuYXR0YWNoVmlldyhjb21wUmVmLmhvc3RWaWV3KTtcbiAgICBjb25zdCBjb21wTm9kZSA9IChjb21wUmVmLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjxhbnk+KS5yb290Tm9kZXNbMF07XG4gICAgY29uc3QgZG9jID0gdGhpcy5fZ2V0RG9jKCk7XG4gICAgY29uc3QgY2RrID0gZG9jLnF1ZXJ5U2VsZWN0b3IoJy5jZGstb3ZlcmxheS1jb250YWluZXInKSBhcyBIVE1MRWxlbWVudDtcbiAgICBpZiAoY2RrKSB7XG4gICAgICBkb2MuYm9keS5pbnNlcnRCZWZvcmUoY29tcE5vZGUsIGNkayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvYy5ib2R5LmFwcGVuZENoaWxkKGNvbXBOb2RlKTtcbiAgICB9XG4gICAgdGhpcy5vcCQgPSB0aGlzLmNvbXBSZWYuaW5zdGFuY2Uub3Auc3Vic2NyaWJlKCh0eXBlOiBPbmJvYXJkaW5nT3BUeXBlKSA9PiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnbmV4dCc6XG4gICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3ByZXYnOlxuICAgICAgICAgIHRoaXMucHJldigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRoaXMuZG9uZSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBjYW5jZWxSdW5uaW5nKCk6IHRoaXMge1xuICAgIGlmICh0aGlzLnJ1bm5pbmckKSB7XG4gICAgICB0aGlzLnJ1bm5pbmckLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLnJ1bm5pbmckID0gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVJ1bm5pbmcoc3RhdHVzOiBib29sZWFuKTogdGhpcyB7XG4gICAgdGhpcy5fcnVubmluZyA9IHN0YXR1cztcbiAgICB0aGlzLmNvbXBSZWYhLmluc3RhbmNlLnVwZGF0ZVJ1bm5pbmcoc3RhdHVzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByaXZhdGUgZGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmNhbmNlbFJ1bm5pbmcoKTtcbiAgICBpZiAodGhpcy5jb21wUmVmKSB7XG4gICAgICB0aGlzLmFwcFJlZi5kZXRhY2hWaWV3KHRoaXMuY29tcFJlZi5ob3N0Vmlldyk7XG4gICAgICB0aGlzLmNvbXBSZWYuZGVzdHJveSgpO1xuICAgICAgdGhpcy5vcCQudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNob3dJdGVtKGlzU3RhcnQ6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5jb25maWcuaXRlbXMhO1xuICAgIGNvbnN0IGl0ZW0gPSB7XG4gICAgICBwb3NpdGlvbjogJ2JvdHRvbUxlZnQnLFxuICAgICAgYmVmb3JlOiBvZih0cnVlKSxcbiAgICAgIGFmdGVyOiBvZih0cnVlKSxcbiAgICAgIC4uLnRoaXMuaTE4bi5nZXREYXRhKCdvbmJvYXJkaW5nJyksXG4gICAgICAuLi5pdGVtc1t0aGlzLmFjdGl2ZV0sXG4gICAgfSBhcyBPbmJvYXJkaW5nSXRlbTtcbiAgICBjb25zdCBkaXIgPSB0aGlzLmNvbmZpZ1Nydi5nZXQoJ29uYm9hcmRpbmcnKSEuZGlyZWN0aW9uIHx8IHRoaXMuZGlyZWN0aW9uYWxpdHkudmFsdWU7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLmNvbXBSZWYuaW5zdGFuY2UsIHsgaXRlbSwgY29uZmlnOiB0aGlzLmNvbmZpZywgYWN0aXZlOiB0aGlzLmFjdGl2ZSwgbWF4OiBpdGVtcy5sZW5ndGgsIGRpciB9KTtcbiAgICBjb25zdCBwaXBlcyA9IFtcbiAgICAgIHN3aXRjaE1hcCgoKSA9PiAoaXRlbS51cmwgPyB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKGl0ZW0udXJsKSA6IG9mKHRydWUpKSksXG4gICAgICBzd2l0Y2hNYXAoKCkgPT4ge1xuICAgICAgICBjb25zdCBvYnMgPSB0aGlzLnR5cGUgPT09ICdwcmV2JyA/IGl0ZW0uYWZ0ZXIhIDogaXRlbS5iZWZvcmUhO1xuICAgICAgICByZXR1cm4gdHlwZW9mIG9icyA9PT0gJ251bWJlcicgPyBvZih0cnVlKS5waXBlKGRlbGF5KG9icykpIDogb2JzO1xuICAgICAgfSksXG4gICAgXTtcbiAgICBpZiAoIWlzU3RhcnQpIHtcbiAgICAgIHBpcGVzLnB1c2goZGVsYXkoMSkpO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlUnVubmluZyh0cnVlKTtcblxuICAgIHRoaXMucnVubmluZyQgPSBvZih0cnVlKVxuICAgICAgLnBpcGUocGlwZS5hcHBseSh0aGlzLCBwaXBlcykpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAoKSA9PiB0aGlzLmNhbmNlbFJ1bm5pbmcoKS51cGRhdGVSdW5uaW5nKGZhbHNlKSxcbiAgICAgICAgKCkgPT4gdGhpcy5kb25lKCksXG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0IGEgbmV3IHVzZXIgZ3VpZGFuY2VcbiAgICpcbiAgICog5byA5ZCv5paw55qE55So5oi35byV5a+85rWB56iLXG4gICAqL1xuICBzdGFydChjb25maWc6IE9uYm9hcmRpbmdDb25maWcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5ydW5uaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZGVzdHJveSgpO1xuICAgIHRoaXMuY29uZmlnID0ge1xuICAgICAgaXRlbXM6IFtdLFxuICAgICAgbWFzazogdHJ1ZSxcbiAgICAgIG1hc2tDbG9zYWJsZTogdHJ1ZSxcbiAgICAgIHNob3dUb3RhbDogZmFsc2UsXG4gICAgICAuLi5jb25maWcsXG4gICAgfTtcbiAgICB0aGlzLmFjdGl2ZSA9IDA7XG4gICAgdGhpcy50eXBlID0gbnVsbDtcbiAgICB0aGlzLmF0dGFjaCgpO1xuICAgIHRoaXMuc2hvd0l0ZW0odHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogTmV4dFxuICAgKlxuICAgKiDkuIvkuIDmraVcbiAgICovXG4gIG5leHQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3J1bm5pbmcgfHwgdGhpcy5hY3RpdmUgKyAxID49IHRoaXMuY29uZmlnLml0ZW1zIS5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZG9uZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnR5cGUgPSAnbmV4dCc7XG4gICAgKyt0aGlzLmFjdGl2ZTtcbiAgICB0aGlzLnNob3dJdGVtKCk7XG4gIH1cblxuICAvKipcbiAgICogUHJldlxuICAgKlxuICAgKiDkuIrkuIDmraVcbiAgICovXG4gIHByZXYoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3J1bm5pbmcgfHwgdGhpcy5hY3RpdmUgLSAxIDwgMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnR5cGUgPSAncHJldic7XG4gICAgLS10aGlzLmFjdGl2ZTtcbiAgICB0aGlzLnNob3dJdGVtKCk7XG4gIH1cblxuICAvKipcbiAgICogRG9uZVxuICAgKlxuICAgKiDlrozmiJBcbiAgICovXG4gIGRvbmUoKTogdm9pZCB7XG4gICAgdGhpcy50eXBlID0gJ2RvbmUnO1xuICAgIHRoaXMuZGVzdHJveSgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95KCk7XG4gIH1cbn1cbiJdfQ==