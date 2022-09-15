import { __decorate } from "tslib";
import { Directive, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Subject, filter, takeUntil } from 'rxjs';
import { InputBoolean, InputNumber, ZoneOutside } from '@delon/util/decorator';
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
        this.repaint = true;
        this.destroy$ = new Subject();
        this.loaded = false;
        this.delay = 0;
        this.ready = new EventEmitter();
        this.theme = srv.cog.theme;
        this.srv.notify
            .pipe(takeUntil(this.destroy$), filter(() => !this.loaded))
            .subscribe(() => this.load());
    }
    get chart() {
        return this._chart;
    }
    get winG2() {
        return window.G2;
    }
    /** G2数据变更 */
    changeData() { }
    /** 等同 `ngOnInit` */
    onInit() { }
    /** 等同 `ngOnChanges` */
    onChanges(_) { }
    load() {
        this.ngZone.run(() => {
            this.loaded = true;
            this.cdr.detectChanges();
        });
        setTimeout(() => this.install(), this.delay);
    }
    ngOnInit() {
        if (!this.platform.isBrowser) {
            return;
        }
        this.onInit();
        if (this.winG2) {
            this.load();
        }
        else {
            this.srv.libLoad();
        }
    }
    ngOnChanges(changes) {
        this.onChanges(changes);
        const isOnlyChangeData = this.onlyChangeData
            ? this.onlyChangeData(changes)
            : Object.keys(changes).length === 1 && !!changes.data;
        if (isOnlyChangeData) {
            this.changeData();
            return;
        }
        if (!this.chart || !this.repaint)
            return;
        this.ngZone.runOutsideAngular(() => {
            this.destroyChart().install();
        });
    }
    destroyChart() {
        if (this._chart) {
            this._chart.destroy();
        }
        return this;
    }
    ngOnDestroy() {
        if (this.resize$) {
            this.resize$.unsubscribe();
        }
        this.destroy$.next();
        this.destroy$.complete();
        this.destroyChart();
    }
}
G2BaseComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.2", ngImport: i0, type: G2BaseComponent, deps: [{ token: i1.G2Service }, { token: i0.ElementRef }, { token: i0.NgZone }, { token: i2.Platform }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Directive });
G2BaseComponent.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.2", type: G2BaseComponent, inputs: { repaint: "repaint", delay: "delay", theme: "theme" }, outputs: { ready: "ready" }, viewQueries: [{ propertyName: "node", first: true, predicate: ["container"], descendants: true, static: true }], usesOnChanges: true, ngImport: i0 });
__decorate([
    InputBoolean()
], G2BaseComponent.prototype, "repaint", void 0);
__decorate([
    InputNumber()
], G2BaseComponent.prototype, "delay", void 0);
__decorate([
    ZoneOutside()
], G2BaseComponent.prototype, "load", null);
__decorate([
    ZoneOutside()
], G2BaseComponent.prototype, "destroyChart", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.2", ngImport: i0, type: G2BaseComponent, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: i1.G2Service }, { type: i0.ElementRef }, { type: i0.NgZone }, { type: i2.Platform }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { repaint: [{
                type: Input
            }], node: [{
                type: ViewChild,
                args: ['container', { static: true }]
            }], delay: [{
                type: Input
            }], theme: [{
                type: Input
            }], ready: [{
                type: Output
            }], load: [], destroyChart: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZzIuYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jaGFydC9jb3JlL2cyLmJhc2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBRUwsU0FBUyxFQUVULFlBQVksRUFDWixLQUFLLEVBS0wsTUFBTSxFQUVOLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFnQixNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBSWhFLE9BQU8sRUFBZ0IsWUFBWSxFQUFFLFdBQVcsRUFBZSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7OztBQU0xRyxNQUFNLE9BQWdCLGVBQWU7SUFTbkMsWUFDWSxHQUFjLEVBQ2QsRUFBMkIsRUFDM0IsTUFBYyxFQUNkLFFBQWtCLEVBQ2xCLEdBQXNCO1FBSnRCLFFBQUcsR0FBSCxHQUFHLENBQVc7UUFDZCxPQUFFLEdBQUYsRUFBRSxDQUF5QjtRQUMzQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQVlULFlBQU8sR0FBRyxJQUFJLENBQUM7UUFJOUIsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFFekMsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUVTLFVBQUssR0FBRyxDQUFDLENBQUM7UUFFZixVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQVMsQ0FBQztRQXBCbkQsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQU0sQ0FBQztRQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU07YUFDWixJQUFJLENBQ0gsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFDeEIsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFD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QUs7Z0JBRThDLElBQUk7c0JBQXZELFNBQVM7dUJBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtnQkFNaEIsS0FBSztzQkFBNUIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ2EsS0FBSztzQkFBdkIsTUFBTTtnQkFpQkMsSUFBSSxNQXFDRixZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QsIFN1YnNjcmlwdGlvbiwgZmlsdGVyLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHR5cGUgeyBDaGFydCwgVHlwZXMgfSBmcm9tICdAYW50di9nMic7XG5cbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciwgTnVtYmVySW5wdXQsIFpvbmVPdXRzaWRlIH0gZnJvbSAnQGRlbG9uL3V0aWwvZGVjb3JhdG9yJztcbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuaW1wb3J0IHsgRzJTZXJ2aWNlIH0gZnJvbSAnLi9nMi5zZXJ2aWNjZSc7XG5cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEcyQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBnZXQgY2hhcnQoKTogQ2hhcnQge1xuICAgIHJldHVybiB0aGlzLl9jaGFydDtcbiAgfVxuXG4gIGdldCB3aW5HMigpOiBOelNhZmVBbnkge1xuICAgIHJldHVybiAod2luZG93IGFzIE56U2FmZUFueSkuRzI7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgc3J2OiBHMlNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGVsOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwcm90ZWN0ZWQgbmdab25lOiBOZ1pvbmUsXG4gICAgcHJvdGVjdGVkIHBsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgICBwcm90ZWN0ZWQgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHtcbiAgICB0aGlzLnRoZW1lID0gc3J2LmNvZy50aGVtZSE7XG4gICAgdGhpcy5zcnYubm90aWZ5XG4gICAgICAucGlwZShcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLFxuICAgICAgICBmaWx0ZXIoKCkgPT4gIXRoaXMubG9hZGVkKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmxvYWQoKSk7XG4gIH1cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3JlcGFpbnQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2RlbGF5OiBOdW1iZXJJbnB1dDtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHJlcGFpbnQgPSB0cnVlO1xuXG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicsIHsgc3RhdGljOiB0cnVlIH0pIHByb3RlY3RlZCBub2RlITogRWxlbWVudFJlZjtcbiAgcHJvdGVjdGVkIHJlc2l6ZSQ/OiBTdWJzY3JpcHRpb247XG4gIHByb3RlY3RlZCBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByb3RlY3RlZCBfY2hhcnQhOiBDaGFydDtcbiAgbG9hZGVkID0gZmFsc2U7XG5cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgZGVsYXkgPSAwO1xuICBASW5wdXQoKSB0aGVtZTogc3RyaW5nIHwgVHlwZXMuTG9vc2VPYmplY3Q7XG4gIEBPdXRwdXQoKSByZWFkb25seSByZWFkeSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnQ+KCk7XG5cbiAgLyoqIOajgOafpeaYr+WQpuWPquWPmOabtOaVsOaNriAqL1xuICBvbmx5Q2hhbmdlRGF0YT86IChjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSA9PiBib29sZWFuO1xuXG4gIGFic3RyYWN0IGluc3RhbGwoKTogdm9pZDtcblxuICAvKiogRzLmlbDmja7lj5jmm7QgKi9cbiAgY2hhbmdlRGF0YSgpOiB2b2lkIHt9XG5cbiAgLyoqIOetieWQjCBgbmdPbkluaXRgICovXG4gIG9uSW5pdCgpOiB2b2lkIHt9XG5cbiAgLyoqIOetieWQjCBgbmdPbkNoYW5nZXNgICovXG4gIG9uQ2hhbmdlcyhfOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7fVxuXG4gIEBab25lT3V0c2lkZSgpXG4gIHByaXZhdGUgbG9hZCgpOiB2b2lkIHtcbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbnN0YWxsKCksIHRoaXMuZGVsYXkpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLm9uSW5pdCgpO1xuICAgIGlmICh0aGlzLndpbkcyKSB7XG4gICAgICB0aGlzLmxvYWQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zcnYubGliTG9hZCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlcyhjaGFuZ2VzKTtcblxuICAgIGNvbnN0IGlzT25seUNoYW5nZURhdGEgPSB0aGlzLm9ubHlDaGFuZ2VEYXRhXG4gICAgICA/IHRoaXMub25seUNoYW5nZURhdGEoY2hhbmdlcylcbiAgICAgIDogT2JqZWN0LmtleXMoY2hhbmdlcykubGVuZ3RoID09PSAxICYmICEhY2hhbmdlcy5kYXRhO1xuICAgIGlmIChpc09ubHlDaGFuZ2VEYXRhKSB7XG4gICAgICB0aGlzLmNoYW5nZURhdGEoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmNoYXJ0IHx8ICF0aGlzLnJlcGFpbnQpIHJldHVybjtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICB0aGlzLmRlc3Ryb3lDaGFydCgpLmluc3RhbGwoKTtcbiAgICB9KTtcbiAgfVxuXG4gIEBab25lT3V0c2lkZSgpXG4gIHByb3RlY3RlZCBkZXN0cm95Q2hhcnQoKTogdGhpcyB7XG4gICAgaWYgKHRoaXMuX2NoYXJ0KSB7XG4gICAgICB0aGlzLl9jaGFydC5kZXN0cm95KCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucmVzaXplJCkge1xuICAgICAgdGhpcy5yZXNpemUkLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgICB0aGlzLmRlc3Ryb3lDaGFydCgpO1xuICB9XG59XG4iXX0=