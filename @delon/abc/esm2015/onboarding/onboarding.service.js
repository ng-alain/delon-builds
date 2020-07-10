/**
 * @fileoverview added by tsickle
 * Generated from: onboarding.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DOCUMENT } from '@angular/common';
import { ApplicationRef, ComponentFactoryResolver, Inject, Injectable, Injector, } from '@angular/core';
import { Router } from '@angular/router';
import { DelonLocaleService } from '@delon/theme';
import { of, pipe } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';
import { OnboardingComponent } from './onboarding.component';
import * as i0 from "@angular/core";
import * as i1 from "@delon/theme";
import * as i2 from "@angular/router";
import * as i3 from "@angular/common";
export class OnboardingService {
    /**
     * @param {?} i18n
     * @param {?} appRef
     * @param {?} resolver
     * @param {?} router
     * @param {?} injector
     * @param {?} doc
     */
    constructor(i18n, appRef, resolver, router, injector, doc) {
        this.i18n = i18n;
        this.appRef = appRef;
        this.resolver = resolver;
        this.router = router;
        this.injector = injector;
        this.doc = doc;
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
        Object.assign(this.compRef.instance, { item, config: this.config, active: this.active, max: items.length });
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
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
/** @nocollapse */ OnboardingService.ɵprov = i0.ɵɵdefineInjectable({ factory: function OnboardingService_Factory() { return new OnboardingService(i0.ɵɵinject(i1.DelonLocaleService), i0.ɵɵinject(i0.ApplicationRef), i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i2.Router), i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(i3.DOCUMENT)); }, token: OnboardingService, providedIn: "root" });
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9vbmJvYXJkaW5nLyIsInNvdXJjZXMiOlsib25ib2FyZGluZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFDTCxjQUFjLEVBQ2Qsd0JBQXdCLEVBR3hCLE1BQU0sRUFDTixVQUFVLEVBQ1YsUUFBUSxHQUVULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDbEQsT0FBTyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7O0FBSTdELE1BQU0sT0FBTyxpQkFBaUI7Ozs7Ozs7OztJQWlCNUIsWUFDVSxJQUF3QixFQUN4QixNQUFzQixFQUN0QixRQUFrQyxFQUNsQyxNQUFjLEVBQ2QsUUFBa0IsRUFDQSxHQUFRO1FBTDFCLFNBQUksR0FBSixJQUFJLENBQW9CO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQ3RCLGFBQVEsR0FBUixRQUFRLENBQTBCO1FBQ2xDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ0EsUUFBRyxHQUFILEdBQUcsQ0FBSztRQW5CNUIsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUNYLGFBQVEsR0FBd0IsSUFBSSxDQUFDO1FBQ3JDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsU0FBSSxHQUE0QixJQUFJLENBQUM7SUFpQjFDLENBQUM7Ozs7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QUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDeEMsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7UUFDbkIsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ2QsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFFRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7OztZQXZKRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O1lBTnpCLGtCQUFrQjtZQVZ6QixjQUFjO1lBQ2Qsd0JBQXdCO1lBUWpCLE1BQU07WUFIYixRQUFROzRDQWtDTCxNQUFNLFNBQUMsUUFBUTs7Ozs7Ozs7SUF0QmxCLG9DQUFtRDs7Ozs7SUFDbkQsZ0NBQTBCOzs7OztJQUMxQixtQ0FBaUM7Ozs7O0lBQ2pDLG1DQUFtQjs7Ozs7SUFDbkIscUNBQTZDOzs7OztJQUM3QyxxQ0FBeUI7Ozs7O0lBQ3pCLGlDQUE2Qzs7Ozs7SUFXM0MsaUNBQWdDOzs7OztJQUNoQyxtQ0FBOEI7Ozs7O0lBQzlCLHFDQUEwQzs7Ozs7SUFDMUMsbUNBQXNCOzs7OztJQUN0QixxQ0FBMEI7Ozs7O0lBQzFCLGdDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEFwcGxpY2F0aW9uUmVmLFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIENvbXBvbmVudFJlZixcbiAgRW1iZWRkZWRWaWV3UmVmLFxuICBJbmplY3QsXG4gIEluamVjdGFibGUsXG4gIEluamVjdG9yLFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IERlbG9uTG9jYWxlU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBvZiwgcGlwZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWxheSwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT25ib2FyZGluZ0NvbXBvbmVudCB9IGZyb20gJy4vb25ib2FyZGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgT25ib2FyZGluZ0NvbmZpZywgT25ib2FyZGluZ0l0ZW0sIE9uYm9hcmRpbmdPcFR5cGUgfSBmcm9tICcuL29uYm9hcmRpbmcudHlwZXMnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIE9uYm9hcmRpbmdTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBjb21wUmVmOiBDb21wb25lbnRSZWY8T25ib2FyZGluZ0NvbXBvbmVudD47XG4gIHByaXZhdGUgb3AkOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgY29uZmlnOiBPbmJvYXJkaW5nQ29uZmlnO1xuICBwcml2YXRlIGFjdGl2ZSA9IDA7XG4gIHByaXZhdGUgcnVubmluZyQ6IFN1YnNjcmlwdGlvbiB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIF9ydW5uaW5nID0gZmFsc2U7XG4gIHByaXZhdGUgdHlwZTogT25ib2FyZGluZ09wVHlwZSB8IG51bGwgPSBudWxsO1xuXG4gIHByaXZhdGUgX2dldERvYygpOiBEb2N1bWVudCB7XG4gICAgcmV0dXJuIHRoaXMuZG9jO1xuICB9XG5cbiAgZ2V0IHJ1bm5pbmcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3J1bm5pbmc7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGkxOG46IERlbG9uTG9jYWxlU2VydmljZSxcbiAgICBwcml2YXRlIGFwcFJlZjogQXBwbGljYXRpb25SZWYsXG4gICAgcHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IGFueSxcbiAgKSB7fVxuXG4gIHByaXZhdGUgYXR0YWNoKCk6IHZvaWQge1xuICAgIGNvbnN0IGNvbXBSZWYgPSAodGhpcy5jb21wUmVmID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShPbmJvYXJkaW5nQ29tcG9uZW50KS5jcmVhdGUodGhpcy5pbmplY3RvcikpO1xuICAgIHRoaXMuYXBwUmVmLmF0dGFjaFZpZXcoY29tcFJlZi5ob3N0Vmlldyk7XG4gICAgY29uc3QgY29tcE5vZGUgPSAoY29tcFJlZi5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWY8YW55Pikucm9vdE5vZGVzWzBdO1xuICAgIGNvbnN0IGRvYyA9IHRoaXMuX2dldERvYygpO1xuICAgIGNvbnN0IGNkayA9IGRvYy5xdWVyeVNlbGVjdG9yKCcuY2RrLW92ZXJsYXktY29udGFpbmVyJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgaWYgKGNkaykge1xuICAgICAgZG9jLmJvZHkuaW5zZXJ0QmVmb3JlKGNvbXBOb2RlLCBjZGspO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2MuYm9keS5hcHBlbmRDaGlsZChjb21wTm9kZSk7XG4gICAgfVxuICAgIHRoaXMub3AkID0gdGhpcy5jb21wUmVmLmluc3RhbmNlLm9wLnN1YnNjcmliZSgodHlwZTogT25ib2FyZGluZ09wVHlwZSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ25leHQnOlxuICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdwcmV2JzpcbiAgICAgICAgICB0aGlzLnByZXYoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aGlzLmRvbmUoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgY2FuY2VsUnVubmluZygpOiB0aGlzIHtcbiAgICBpZiAodGhpcy5ydW5uaW5nJCkge1xuICAgICAgdGhpcy5ydW5uaW5nJC51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5ydW5uaW5nJCA9IG51bGw7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVSdW5uaW5nKHN0YXR1czogYm9vbGVhbik6IHRoaXMge1xuICAgIHRoaXMuX3J1bm5pbmcgPSBzdGF0dXM7XG4gICAgdGhpcy5jb21wUmVmIS5pbnN0YW5jZS51cGRhdGVSdW5uaW5nKHN0YXR1cyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcml2YXRlIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5jYW5jZWxSdW5uaW5nKCk7XG4gICAgaWYgKHRoaXMuY29tcFJlZikge1xuICAgICAgdGhpcy5hcHBSZWYuZGV0YWNoVmlldyh0aGlzLmNvbXBSZWYuaG9zdFZpZXcpO1xuICAgICAgdGhpcy5jb21wUmVmLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMub3AkLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzaG93SXRlbShpc1N0YXJ0ID0gZmFsc2UpOiB2b2lkIHtcbiAgICBjb25zdCBpdGVtcyA9IHRoaXMuY29uZmlnLml0ZW1zITtcbiAgICBjb25zdCBpdGVtID0ge1xuICAgICAgcG9zaXRpb246ICdib3R0b21MZWZ0JyxcbiAgICAgIGJlZm9yZTogb2YodHJ1ZSksXG4gICAgICBhZnRlcjogb2YodHJ1ZSksXG4gICAgICAuLi50aGlzLmkxOG4uZ2V0RGF0YSgnb25ib2FyZGluZycpLFxuICAgICAgLi4uaXRlbXNbdGhpcy5hY3RpdmVdLFxuICAgIH0gYXMgT25ib2FyZGluZ0l0ZW07XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLmNvbXBSZWYuaW5zdGFuY2UsIHsgaXRlbSwgY29uZmlnOiB0aGlzLmNvbmZpZywgYWN0aXZlOiB0aGlzLmFjdGl2ZSwgbWF4OiBpdGVtcy5sZW5ndGggfSk7XG4gICAgY29uc3QgcGlwZXMgPSBbXG4gICAgICBzd2l0Y2hNYXAoKCkgPT4gKGl0ZW0udXJsID8gdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChpdGVtLnVybCkgOiBvZih0cnVlKSkpLFxuICAgICAgc3dpdGNoTWFwKCgpID0+IHtcbiAgICAgICAgY29uc3Qgb2JzID0gdGhpcy50eXBlID09PSAncHJldicgPyBpdGVtLmFmdGVyISA6IGl0ZW0uYmVmb3JlITtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBvYnMgPT09ICdudW1iZXInID8gb2YodHJ1ZSkucGlwZShkZWxheShvYnMpKSA6IG9icztcbiAgICAgIH0pLFxuICAgIF07XG4gICAgaWYgKCFpc1N0YXJ0KSB7XG4gICAgICBwaXBlcy5wdXNoKGRlbGF5KDEpKTtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZVJ1bm5pbmcodHJ1ZSk7XG5cbiAgICB0aGlzLnJ1bm5pbmckID0gb2YodHJ1ZSlcbiAgICAgIC5waXBlKHBpcGUuYXBwbHkodGhpcywgcGlwZXMpKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKCkgPT4gdGhpcy5jYW5jZWxSdW5uaW5nKCkudXBkYXRlUnVubmluZyhmYWxzZSksXG4gICAgICAgICgpID0+IHRoaXMuZG9uZSgpLFxuICAgICAgKTtcbiAgfVxuXG4gIHN0YXJ0KGNvbmZpZzogT25ib2FyZGluZ0NvbmZpZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLnJ1bm5pbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5kZXN0cm95KCk7XG4gICAgdGhpcy5jb25maWcgPSB7XG4gICAgICBpdGVtczogW10sXG4gICAgICBtYXNrOiB0cnVlLFxuICAgICAgbWFza0Nsb3NhYmxlOiB0cnVlLFxuICAgICAgc2hvd1RvdGFsOiBmYWxzZSxcbiAgICAgIC4uLmNvbmZpZyxcbiAgICB9O1xuICAgIHRoaXMuYWN0aXZlID0gMDtcbiAgICB0aGlzLnR5cGUgPSBudWxsO1xuICAgIHRoaXMuYXR0YWNoKCk7XG4gICAgdGhpcy5zaG93SXRlbSh0cnVlKTtcbiAgfVxuXG4gIG5leHQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3J1bm5pbmcgfHwgdGhpcy5hY3RpdmUgKyAxID49IHRoaXMuY29uZmlnLml0ZW1zIS5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZG9uZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnR5cGUgPSAnbmV4dCc7XG4gICAgKyt0aGlzLmFjdGl2ZTtcbiAgICB0aGlzLnNob3dJdGVtKCk7XG4gIH1cblxuICBwcmV2KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9ydW5uaW5nIHx8IHRoaXMuYWN0aXZlIC0gMSA8IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy50eXBlID0gJ3ByZXYnO1xuICAgIC0tdGhpcy5hY3RpdmU7XG4gICAgdGhpcy5zaG93SXRlbSgpO1xuICB9XG5cbiAgZG9uZSgpOiB2b2lkIHtcbiAgICB0aGlzLnR5cGUgPSAnZG9uZSc7XG4gICAgdGhpcy5kZXN0cm95KCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3koKTtcbiAgfVxufVxuIl19