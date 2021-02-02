import { __decorate, __metadata } from "tslib";
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectorRef, Directive, ElementRef, Input, NgZone, ViewChild } from '@angular/core';
import { InputNumber } from '@delon/util/decorator';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { G2Service } from './g2.servicce';
import * as i0 from "@angular/core";
import * as i1 from "./g2.servicce";
import * as i2 from "@angular/cdk/platform";
export class G2BaseComponent {
    constructor(srv, el, ngZone, platform, cdr) {
        this.srv = srv;
        this.el = el;
        this.ngZone = ngZone;
        this.platform = platform;
        this.cdr = cdr;
        this.destroy$ = new Subject();
        this.loaded = false;
        this.delay = 0;
        this.theme = srv.cog.theme;
        this.srv.notify
            .pipe(takeUntil(this.destroy$), filter(() => !this.loaded))
            .subscribe(() => this.load());
    }
    get chart() {
        return this._chart;
    }
    onInit() { }
    onChanges() { }
    load() {
        this.ngZone.run(() => {
            this.loaded = true;
            this.cdr.detectChanges();
        });
        this.ngZone.runOutsideAngular(() => setTimeout(() => this.install(), this.delay));
    }
    ngOnInit() {
        if (!this.platform.isBrowser) {
            return;
        }
        this.onInit();
        if (window.G2) {
            this.load();
        }
        else {
            this.srv.libLoad();
        }
    }
    ngOnChanges() {
        this.onChanges();
        this.ngZone.runOutsideAngular(() => this.attachChart());
    }
    ngOnDestroy() {
        if (this.resize$) {
            this.resize$.unsubscribe();
        }
        this.destroy$.next();
        this.destroy$.complete();
        if (this._chart) {
            this.ngZone.runOutsideAngular(() => this._chart.destroy());
        }
    }
}
/** @nocollapse */ G2BaseComponent.ɵfac = function G2BaseComponent_Factory(t) { return new (t || G2BaseComponent)(i0.ɵɵdirectiveInject(i1.G2Service), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i2.Platform), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
/** @nocollapse */ G2BaseComponent.ɵdir = i0.ɵɵngDeclareDirective({ version: "11.1.1", type: G2BaseComponent, inputs: { delay: "delay", theme: "theme" }, viewQueries: [{ propertyName: "node", first: true, predicate: ["container"], emitDistinctChangesOnly: false, descendants: true, static: true }], usesOnChanges: true, ngImport: i0 });
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2BaseComponent.prototype, "delay", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(G2BaseComponent, [{
        type: Directive
    }], function () { return [{ type: i1.G2Service }, { type: i0.ElementRef }, { type: i0.NgZone }, { type: i2.Platform }, { type: i0.ChangeDetectorRef }]; }, { node: [{
            type: ViewChild,
            args: ['container', { static: true }]
        }], delay: [{
            type: Input
        }], theme: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZzIuYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jaGFydC9jb3JlL2cyLmJhc2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBZ0MsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpJLE9BQU8sRUFBRSxXQUFXLEVBQWUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsT0FBTyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUM3QyxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFHMUMsTUFBTSxPQUFnQixlQUFlO0lBd0JuQyxZQUNZLEdBQWMsRUFDZCxFQUEyQixFQUMzQixNQUFjLEVBQ2QsUUFBa0IsRUFDbEIsR0FBc0I7UUFKdEIsUUFBRyxHQUFILEdBQUcsQ0FBVztRQUNkLE9BQUUsR0FBRixFQUFFLENBQXlCO1FBQzNCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBeEJ4QixhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUV6QyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBRVMsVUFBSyxHQUFHLENBQUMsQ0FBQztRQXNCaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQU0sQ0FBQztRQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU07YUFDWixJQUFJLENBQ0gsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFDeEIsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUMzQjthQUNBLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBMUJELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBTUQsTUFBTSxLQUFVLENBQUM7SUFFakIsU0FBUyxLQUFVLENBQUM7SUFrQlosSUFBSTtRQUNWLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRTtZQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQzVCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNkLElBQUssTUFBYyxDQUFDLEVBQUUsRUFBRTtZQUN0QixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDYjthQUFNO1lBQ0wsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNwQjtJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUM1QjtRQUNELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN6QixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztTQUM1RDtJQUNILENBQUM7O2lHQTFFbUIsZUFBZTs2RkFBZixlQUFlO0FBU1g7SUFBZCxXQUFXLEVBQUU7OzhDQUFXO3VGQVRkLGVBQWU7Y0FEcEMsU0FBUztpS0FJNEMsSUFBSTtrQkFBdkQsU0FBUzttQkFBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBTWhCLEtBQUs7a0JBQTVCLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgTmdab25lLCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENoYXJ0LCBUeXBlcyB9IGZyb20gJ0BhbnR2L2cyJztcbmltcG9ydCB7IElucHV0TnVtYmVyLCBOdW1iZXJJbnB1dCB9IGZyb20gJ0BkZWxvbi91dGlsL2RlY29yYXRvcic7XG5pbXBvcnQgeyBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRzJTZXJ2aWNlIH0gZnJvbSAnLi9nMi5zZXJ2aWNjZSc7XG5cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEcyQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZGVsYXk6IE51bWJlcklucHV0O1xuXG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicsIHsgc3RhdGljOiB0cnVlIH0pIHByb3RlY3RlZCBub2RlOiBFbGVtZW50UmVmO1xuICBwcm90ZWN0ZWQgcmVzaXplJDogU3Vic2NyaXB0aW9uO1xuICBwcm90ZWN0ZWQgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcm90ZWN0ZWQgX2NoYXJ0OiBDaGFydDtcbiAgbG9hZGVkID0gZmFsc2U7XG5cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgZGVsYXkgPSAwO1xuICBASW5wdXQoKSB0aGVtZTogc3RyaW5nIHwgVHlwZXMuTG9vc2VPYmplY3Q7XG5cbiAgZ2V0IGNoYXJ0KCk6IENoYXJ0IHtcbiAgICByZXR1cm4gdGhpcy5fY2hhcnQ7XG4gIH1cblxuICBhYnN0cmFjdCBpbnN0YWxsKCk6IHZvaWQ7XG5cbiAgYWJzdHJhY3QgYXR0YWNoQ2hhcnQoKTogdm9pZDtcblxuICBvbkluaXQoKTogdm9pZCB7fVxuXG4gIG9uQ2hhbmdlcygpOiB2b2lkIHt9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHNydjogRzJTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBlbDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJvdGVjdGVkIG5nWm9uZTogTmdab25lLFxuICAgIHByb3RlY3RlZCBwbGF0Zm9ybTogUGxhdGZvcm0sXG4gICAgcHJvdGVjdGVkIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICkge1xuICAgIHRoaXMudGhlbWUgPSBzcnYuY29nLnRoZW1lITtcbiAgICB0aGlzLnNydi5ub3RpZnlcbiAgICAgIC5waXBlKFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXG4gICAgICAgIGZpbHRlcigoKSA9PiAhdGhpcy5sb2FkZWQpLFxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmxvYWQoKSk7XG4gIH1cblxuICBwcml2YXRlIGxvYWQoKTogdm9pZCB7XG4gICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5zdGFsbCgpLCB0aGlzLmRlbGF5KSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMub25Jbml0KCk7XG4gICAgaWYgKCh3aW5kb3cgYXMgYW55KS5HMikge1xuICAgICAgdGhpcy5sb2FkKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3J2LmxpYkxvYWQoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlcygpO1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuYXR0YWNoQ2hhcnQoKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5yZXNpemUkKSB7XG4gICAgICB0aGlzLnJlc2l6ZSQudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICAgIGlmICh0aGlzLl9jaGFydCkge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5fY2hhcnQuZGVzdHJveSgpKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==