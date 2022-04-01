import { __decorate } from "tslib";
import { Directive, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
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
G2BaseComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.1", ngImport: i0, type: G2BaseComponent, deps: [{ token: i1.G2Service }, { token: i0.ElementRef }, { token: i0.NgZone }, { token: i2.Platform }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Directive });
G2BaseComponent.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.1", type: G2BaseComponent, inputs: { repaint: "repaint", delay: "delay", theme: "theme" }, outputs: { ready: "ready" }, viewQueries: [{ propertyName: "node", first: true, predicate: ["container"], descendants: true, static: true }], usesOnChanges: true, ngImport: i0 });
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.1", ngImport: i0, type: G2BaseComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZzIuYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jaGFydC9jb3JlL2cyLmJhc2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBRUwsU0FBUyxFQUVULFlBQVksRUFDWixLQUFLLEVBS0wsTUFBTSxFQUVOLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUM3QyxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSW5ELE9BQU8sRUFBZ0IsWUFBWSxFQUFFLFdBQVcsRUFBZSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7OztBQU0xRyxNQUFNLE9BQWdCLGVBQWU7SUFTbkMsWUFDWSxHQUFjLEVBQ2QsRUFBMkIsRUFDM0IsTUFBYyxFQUNkLFFBQWtCLEVBQ2xCLEdBQXNCO1FBSnRCLFFBQUcsR0FBSCxHQUFHLENBQVc7UUFDZCxPQUFFLEdBQUYsRUFBRSxDQUF5QjtRQUMzQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQVlULFlBQU8sR0FBRyxJQUFJLENBQUM7UUFJOUIsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFFekMsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUVTLFVBQUssR0FBRyxDQUFDLENBQUM7UUFFZixVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQVMsQ0FBQztRQXBCbkQsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQU0sQ0FBQztRQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU07YUFDWixJQUFJLENBQ0gsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFDeEIsTUFBTSxD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QkFEcEMsU0FBUztxTUEyQmlCLE9BQU87c0JBQS9CLEtBQUs7Z0JBRThDLElBQUk7c0JBQXZELFNBQVM7dUJBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtnQkFNaEIsS0FBSztzQkFBNUIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ2EsS0FBSztzQkFBdkIsTUFBTTtnQkFpQkMsSUFBSSxNQXFDRixZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB0eXBlIHsgQ2hhcnQsIFR5cGVzIH0gZnJvbSAnQGFudHYvZzInO1xuXG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIsIE51bWJlcklucHV0LCBab25lT3V0c2lkZSB9IGZyb20gJ0BkZWxvbi91dGlsL2RlY29yYXRvcic7XG5pbXBvcnQgdHlwZSB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmltcG9ydCB7IEcyU2VydmljZSB9IGZyb20gJy4vZzIuc2VydmljY2UnO1xuXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBHMkJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgZ2V0IGNoYXJ0KCk6IENoYXJ0IHtcbiAgICByZXR1cm4gdGhpcy5fY2hhcnQ7XG4gIH1cblxuICBnZXQgd2luRzIoKTogTnpTYWZlQW55IHtcbiAgICByZXR1cm4gKHdpbmRvdyBhcyBOelNhZmVBbnkpLkcyO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHNydjogRzJTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBlbDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJvdGVjdGVkIG5nWm9uZTogTmdab25lLFxuICAgIHByb3RlY3RlZCBwbGF0Zm9ybTogUGxhdGZvcm0sXG4gICAgcHJvdGVjdGVkIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7XG4gICAgdGhpcy50aGVtZSA9IHNydi5jb2cudGhlbWUhO1xuICAgIHRoaXMuc3J2Lm5vdGlmeVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcbiAgICAgICAgZmlsdGVyKCgpID0+ICF0aGlzLmxvYWRlZClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5sb2FkKCkpO1xuICB9XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9yZXBhaW50OiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9kZWxheTogTnVtYmVySW5wdXQ7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSByZXBhaW50ID0gdHJ1ZTtcblxuICBAVmlld0NoaWxkKCdjb250YWluZXInLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcm90ZWN0ZWQgbm9kZSE6IEVsZW1lbnRSZWY7XG4gIHByb3RlY3RlZCByZXNpemUkPzogU3Vic2NyaXB0aW9uO1xuICBwcm90ZWN0ZWQgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcm90ZWN0ZWQgX2NoYXJ0ITogQ2hhcnQ7XG4gIGxvYWRlZCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGRlbGF5ID0gMDtcbiAgQElucHV0KCkgdGhlbWU6IHN0cmluZyB8IFR5cGVzLkxvb3NlT2JqZWN0O1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgcmVhZHkgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0PigpO1xuXG4gIC8qKiDmo4Dmn6XmmK/lkKblj6rlj5jmm7TmlbDmja4gKi9cbiAgb25seUNoYW5nZURhdGE/OiAoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykgPT4gYm9vbGVhbjtcblxuICBhYnN0cmFjdCBpbnN0YWxsKCk6IHZvaWQ7XG5cbiAgLyoqIEcy5pWw5o2u5Y+Y5pu0ICovXG4gIGNoYW5nZURhdGEoKTogdm9pZCB7fVxuXG4gIC8qKiDnrYnlkIwgYG5nT25Jbml0YCAqL1xuICBvbkluaXQoKTogdm9pZCB7fVxuXG4gIC8qKiDnrYnlkIwgYG5nT25DaGFuZ2VzYCAqL1xuICBvbkNoYW5nZXMoXzogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge31cblxuICBAWm9uZU91dHNpZGUoKVxuICBwcml2YXRlIGxvYWQoKTogdm9pZCB7XG4gICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5zdGFsbCgpLCB0aGlzLmRlbGF5KTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5vbkluaXQoKTtcbiAgICBpZiAodGhpcy53aW5HMikge1xuICAgICAgdGhpcy5sb2FkKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3J2LmxpYkxvYWQoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZXMoY2hhbmdlcyk7XG5cbiAgICBjb25zdCBpc09ubHlDaGFuZ2VEYXRhID0gdGhpcy5vbmx5Q2hhbmdlRGF0YVxuICAgICAgPyB0aGlzLm9ubHlDaGFuZ2VEYXRhKGNoYW5nZXMpXG4gICAgICA6IE9iamVjdC5rZXlzKGNoYW5nZXMpLmxlbmd0aCA9PT0gMSAmJiAhIWNoYW5nZXMuZGF0YTtcbiAgICBpZiAoaXNPbmx5Q2hhbmdlRGF0YSkge1xuICAgICAgdGhpcy5jaGFuZ2VEYXRhKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdGhpcy5jaGFydCB8fCAhdGhpcy5yZXBhaW50KSByZXR1cm47XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgdGhpcy5kZXN0cm95Q2hhcnQoKS5pbnN0YWxsKCk7XG4gICAgfSk7XG4gIH1cblxuICBAWm9uZU91dHNpZGUoKVxuICBwcm90ZWN0ZWQgZGVzdHJveUNoYXJ0KCk6IHRoaXMge1xuICAgIGlmICh0aGlzLl9jaGFydCkge1xuICAgICAgdGhpcy5fY2hhcnQuZGVzdHJveSgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnJlc2l6ZSQpIHtcbiAgICAgIHRoaXMucmVzaXplJC51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5kZXN0cm95Q2hhcnQoKTtcbiAgfVxufVxuIl19