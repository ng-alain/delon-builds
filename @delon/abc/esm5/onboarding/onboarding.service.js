/**
 * @fileoverview added by tsickle
 * Generated from: onboarding.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __assign } from "tslib";
import { DOCUMENT } from '@angular/common';
import { ApplicationRef, ComponentFactoryResolver, Inject, Injectable, Injector, } from '@angular/core';
import { DelonLocaleService } from '@delon/theme';
import { OnboardingComponent } from './onboarding.component';
import * as i0 from "@angular/core";
import * as i1 from "@delon/theme";
import * as i2 from "@angular/common";
var OnboardingService = /** @class */ (function () {
    function OnboardingService(i18n, appRef, resolver, injector, doc) {
        this.i18n = i18n;
        this.appRef = appRef;
        this.resolver = resolver;
        this.injector = injector;
        this.doc = doc;
        this.active = 0;
    }
    /**
     * @private
     * @return {?}
     */
    OnboardingService.prototype._getDoc = /**
     * @private
     * @return {?}
     */
    function () {
        return this.doc;
    };
    /**
     * @private
     * @return {?}
     */
    OnboardingService.prototype.attach = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var compRef = (this.compRef = this.resolver.resolveComponentFactory(OnboardingComponent).create(this.injector));
        this.appRef.attachView(compRef.hostView);
        /** @type {?} */
        var compNode = ((/** @type {?} */ (compRef.hostView))).rootNodes[0];
        /** @type {?} */
        var doc = this._getDoc();
        /** @type {?} */
        var cdk = (/** @type {?} */ (doc.querySelector('.cdk-overlay-container')));
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
        function (type) {
            switch (type) {
                case 'next':
                    _this.next();
                    break;
                case 'prev':
                    _this.prev();
                    break;
                default:
                    _this.done();
                    break;
            }
        }));
    };
    /**
     * @private
     * @return {?}
     */
    OnboardingService.prototype.destroy = /**
     * @private
     * @return {?}
     */
    function () {
        this.appRef.detachView(this.compRef.hostView);
        this.compRef.destroy();
        this.op$.unsubscribe();
    };
    /**
     * @private
     * @param {?=} cleanTime
     * @return {?}
     */
    OnboardingService.prototype.showItem = /**
     * @private
     * @param {?=} cleanTime
     * @return {?}
     */
    function (cleanTime) {
        var _this = this;
        if (cleanTime === void 0) { cleanTime = false; }
        /** @type {?} */
        var items = (/** @type {?} */ (this.data.items));
        /** @type {?} */
        var item = (/** @type {?} */ (__assign(__assign({ position: 'bottomLeft' }, this.i18n.getData('onboarding')), items[this.active])));
        Object.assign(this.compRef.instance, { item: item, data: this.data, active: this.active, max: items.length });
        setTimeout((/**
         * @return {?}
         */
        function () { return _this.compRef.instance.updatePosition({ time: cleanTime ? 0 : 300 }); }));
    };
    /**
     * @param {?} data
     * @return {?}
     */
    OnboardingService.prototype.start = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.data = __assign({ items: [], mask: true, maskClosable: true, animation: false, showTotal: false }, data);
        this.active = 0;
        this.attach();
        this.showItem(true);
    };
    /**
     * @return {?}
     */
    OnboardingService.prototype.next = /**
     * @return {?}
     */
    function () {
        if (this.active + 1 >= (/** @type {?} */ (this.data.items)).length) {
            this.done();
            return;
        }
        ++this.active;
        this.showItem();
    };
    /**
     * @return {?}
     */
    OnboardingService.prototype.prev = /**
     * @return {?}
     */
    function () {
        if (this.active - 1 < 0) {
            return;
        }
        --this.active;
        this.showItem();
    };
    /**
     * @return {?}
     */
    OnboardingService.prototype.done = /**
     * @return {?}
     */
    function () {
        this.destroy();
    };
    /**
     * @return {?}
     */
    OnboardingService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy();
    };
    OnboardingService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    OnboardingService.ctorParameters = function () { return [
        { type: DelonLocaleService },
        { type: ApplicationRef },
        { type: ComponentFactoryResolver },
        { type: Injector },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    /** @nocollapse */ OnboardingService.ɵprov = i0.ɵɵdefineInjectable({ factory: function OnboardingService_Factory() { return new OnboardingService(i0.ɵɵinject(i1.DelonLocaleService), i0.ɵɵinject(i0.ApplicationRef), i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(i2.DOCUMENT)); }, token: OnboardingService, providedIn: "root" });
    return OnboardingService;
}());
export { OnboardingService };
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
    OnboardingService.prototype.data;
    /**
     * @type {?}
     * @private
     */
    OnboardingService.prototype.active;
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
    OnboardingService.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    OnboardingService.prototype.doc;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9vbmJvYXJkaW5nLyIsInNvdXJjZXMiOlsib25ib2FyZGluZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsY0FBYyxFQUNkLHdCQUF3QixFQUd4QixNQUFNLEVBQ04sVUFBVSxFQUNWLFFBQVEsR0FFVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFbEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFHN0Q7SUFXRSwyQkFDVSxJQUF3QixFQUN4QixNQUFzQixFQUN0QixRQUFrQyxFQUNsQyxRQUFrQixFQUNBLEdBQVE7UUFKMUIsU0FBSSxHQUFKLElBQUksQ0FBb0I7UUFDeEIsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFDdEIsYUFBUSxHQUFSLFFBQVEsQ0FBMEI7UUFDbEMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNBLFFBQUcsR0FBSCxHQUFHLENBQUs7UUFYNUIsV0FBTSxHQUFHLENBQUMsQ0FBQztJQVloQixDQUFDOzs7OztJQVZJLG1DQUFPOzs7O0lBQWY7UUFDRSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbEIsQ0FBQzs7Ozs7SUFVTyxrQ0FBTTs7OztJQUFkO1FBQUEsaUJBd0JDOztZQXZCTyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2pILElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQzs7WUFDbkMs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QyxDQUFDLE1BQU0sRUFBRTtZQUM5QyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDWixPQUFPO1NBQ1I7UUFDRCxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDZCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELGdDQUFJOzs7SUFBSjtRQUNFLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3ZCLE9BQU87U0FDUjtRQUNELEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNkLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDOzs7O0lBRUQsZ0NBQUk7OztJQUFKO1FBQ0UsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7Ozs7SUFFRCx1Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQzs7Z0JBbkdGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7Z0JBTHpCLGtCQUFrQjtnQkFUekIsY0FBYztnQkFDZCx3QkFBd0I7Z0JBS3hCLFFBQVE7Z0RBd0JMLE1BQU0sU0FBQyxRQUFROzs7NEJBaENwQjtDQW9IQyxBQXBHRCxJQW9HQztTQW5HWSxpQkFBaUI7Ozs7OztJQUM1QixvQ0FBbUQ7Ozs7O0lBQ25ELGdDQUEwQjs7Ozs7SUFDMUIsaUNBQTZCOzs7OztJQUM3QixtQ0FBbUI7Ozs7O0lBT2pCLGlDQUFnQzs7Ozs7SUFDaEMsbUNBQThCOzs7OztJQUM5QixxQ0FBMEM7Ozs7O0lBQzFDLHFDQUEwQjs7Ozs7SUFDMUIsZ0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQXBwbGljYXRpb25SZWYsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgQ29tcG9uZW50UmVmLFxuICBFbWJlZGRlZFZpZXdSZWYsXG4gIEluamVjdCxcbiAgSW5qZWN0YWJsZSxcbiAgSW5qZWN0b3IsXG4gIE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEZWxvbkxvY2FsZVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBPbmJvYXJkaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9vbmJvYXJkaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPbmJvYXJkaW5nRGF0YSwgT25ib2FyZGluZ0l0ZW0sIE9uYm9hcmRpbmdPcFR5cGUgfSBmcm9tICcuL29uYm9hcmRpbmcudHlwZXMnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIE9uYm9hcmRpbmdTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBjb21wUmVmOiBDb21wb25lbnRSZWY8T25ib2FyZGluZ0NvbXBvbmVudD47XG4gIHByaXZhdGUgb3AkOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgZGF0YTogT25ib2FyZGluZ0RhdGE7XG4gIHByaXZhdGUgYWN0aXZlID0gMDtcblxuICBwcml2YXRlIF9nZXREb2MoKTogRG9jdW1lbnQge1xuICAgIHJldHVybiB0aGlzLmRvYztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaTE4bjogRGVsb25Mb2NhbGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgYXBwUmVmOiBBcHBsaWNhdGlvblJlZixcbiAgICBwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IGFueSxcbiAgKSB7fVxuXG4gIHByaXZhdGUgYXR0YWNoKCk6IHZvaWQge1xuICAgIGNvbnN0IGNvbXBSZWYgPSAodGhpcy5jb21wUmVmID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShPbmJvYXJkaW5nQ29tcG9uZW50KS5jcmVhdGUodGhpcy5pbmplY3RvcikpO1xuICAgIHRoaXMuYXBwUmVmLmF0dGFjaFZpZXcoY29tcFJlZi5ob3N0Vmlldyk7XG4gICAgY29uc3QgY29tcE5vZGUgPSAoY29tcFJlZi5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWY8YW55Pikucm9vdE5vZGVzWzBdO1xuICAgIGNvbnN0IGRvYyA9IHRoaXMuX2dldERvYygpO1xuICAgIGNvbnN0IGNkayA9IGRvYy5xdWVyeVNlbGVjdG9yKCcuY2RrLW92ZXJsYXktY29udGFpbmVyJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgaWYgKGNkaykge1xuICAgICAgZG9jLmJvZHkuaW5zZXJ0QmVmb3JlKGNvbXBOb2RlLCBjZGspO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2MuYm9keS5hcHBlbmRDaGlsZChjb21wTm9kZSk7XG4gICAgfVxuICAgIHRoaXMub3AkID0gdGhpcy5jb21wUmVmLmluc3RhbmNlLm9wLnN1YnNjcmliZSgodHlwZTogT25ib2FyZGluZ09wVHlwZSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ25leHQnOlxuICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdwcmV2JzpcbiAgICAgICAgICB0aGlzLnByZXYoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aGlzLmRvbmUoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmFwcFJlZi5kZXRhY2hWaWV3KHRoaXMuY29tcFJlZi5ob3N0Vmlldyk7XG4gICAgdGhpcy5jb21wUmVmLmRlc3Ryb3koKTtcbiAgICB0aGlzLm9wJC51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzaG93SXRlbShjbGVhblRpbWUgPSBmYWxzZSk6IHZvaWQge1xuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5kYXRhLml0ZW1zITtcbiAgICBjb25zdCBpdGVtID0ge1xuICAgICAgcG9zaXRpb246ICdib3R0b21MZWZ0JyxcbiAgICAgIC4uLnRoaXMuaTE4bi5nZXREYXRhKCdvbmJvYXJkaW5nJyksXG4gICAgICAuLi5pdGVtc1t0aGlzLmFjdGl2ZV0sXG4gICAgfSBhcyBPbmJvYXJkaW5nSXRlbTtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMuY29tcFJlZi5pbnN0YW5jZSwgeyBpdGVtLCBkYXRhOiB0aGlzLmRhdGEsIGFjdGl2ZTogdGhpcy5hY3RpdmUsIG1heDogaXRlbXMubGVuZ3RoIH0pO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jb21wUmVmLmluc3RhbmNlLnVwZGF0ZVBvc2l0aW9uKHsgdGltZTogY2xlYW5UaW1lID8gMCA6IDMwMCB9KSk7XG4gIH1cblxuICBzdGFydChkYXRhOiBPbmJvYXJkaW5nRGF0YSk6IHZvaWQge1xuICAgIHRoaXMuZGF0YSA9IHtcbiAgICAgIGl0ZW1zOiBbXSxcbiAgICAgIG1hc2s6IHRydWUsXG4gICAgICBtYXNrQ2xvc2FibGU6IHRydWUsXG4gICAgICBhbmltYXRpb246IGZhbHNlLFxuICAgICAgc2hvd1RvdGFsOiBmYWxzZSxcbiAgICAgIC4uLmRhdGEsXG4gICAgfTtcbiAgICB0aGlzLmFjdGl2ZSA9IDA7XG4gICAgdGhpcy5hdHRhY2goKTtcbiAgICB0aGlzLnNob3dJdGVtKHRydWUpO1xuICB9XG5cbiAgbmV4dCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hY3RpdmUgKyAxID49IHRoaXMuZGF0YS5pdGVtcyEubGVuZ3RoKSB7XG4gICAgICB0aGlzLmRvbmUoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgKyt0aGlzLmFjdGl2ZTtcbiAgICB0aGlzLnNob3dJdGVtKCk7XG4gIH1cblxuICBwcmV2KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmFjdGl2ZSAtIDEgPCAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC0tdGhpcy5hY3RpdmU7XG4gICAgdGhpcy5zaG93SXRlbSgpO1xuICB9XG5cbiAgZG9uZSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3koKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSgpO1xuICB9XG59XG4iXX0=