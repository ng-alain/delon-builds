import { __decorate } from "tslib";
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectorRef, Directive, ElementRef, EventEmitter, Input, NgZone, Output, ViewChild, booleanAttribute, inject, numberAttribute } from '@angular/core';
import { Subject, filter, takeUntil } from 'rxjs';
import { ZoneOutside } from '@delon/util/decorator';
import { G2Service } from './g2.servicce';
import * as i0 from "@angular/core";
export class G2BaseComponent {
    get chart() {
        return this._chart;
    }
    get winG2() {
        return window.G2;
    }
    constructor() {
        this.srv = inject(G2Service);
        this.el = inject((ElementRef));
        this.ngZone = inject(NgZone);
        this.platform = inject(Platform);
        this.cdr = inject(ChangeDetectorRef);
        this.repaint = true;
        this.destroy$ = new Subject();
        this.loaded = false;
        this.delay = 0;
        this.ready = new EventEmitter();
        this.theme = this.srv.cog.theme;
        this.srv.notify
            .pipe(takeUntil(this.destroy$), filter(() => !this.loaded))
            .subscribe(() => this.load());
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.5", ngImport: i0, type: G2BaseComponent, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "16.1.0", version: "18.0.5", type: G2BaseComponent, inputs: { repaint: ["repaint", "repaint", booleanAttribute], delay: ["delay", "delay", numberAttribute], theme: "theme" }, outputs: { ready: "ready" }, viewQueries: [{ propertyName: "node", first: true, predicate: ["container"], descendants: true, static: true }], usesOnChanges: true, ngImport: i0 }); }
}
__decorate([
    ZoneOutside()
], G2BaseComponent.prototype, "load", null);
__decorate([
    ZoneOutside()
], G2BaseComponent.prototype, "destroyChart", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.5", ngImport: i0, type: G2BaseComponent, decorators: [{
            type: Directive
        }], ctorParameters: () => [], propDecorators: { repaint: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], node: [{
                type: ViewChild,
                args: ['container', { static: true }]
            }], delay: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], theme: [{
                type: Input
            }], ready: [{
                type: Output
            }], load: [], destroyChart: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZzIuYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jaGFydC9jb3JlL2cyLmJhc2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUlOLE1BQU0sRUFFTixTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2hCLE1BQU0sRUFDTixlQUFlLEVBQ2hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQWdCLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFJaEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBR3BELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRzFDLE1BQU0sT0FBZ0IsZUFBZTtJQU9uQyxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUVELElBQUksS0FBSztRQUNQLE9BQVEsTUFBb0IsQ0FBQyxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVEO1FBZG1CLFFBQUcsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDeEIsT0FBRSxHQUE0QixNQUFNLENBQUMsQ0FBQSxVQUF1QixDQUFBLENBQUMsQ0FBQztRQUM5RCxXQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hCLGFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUIsUUFBRyxHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBbUJYLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFJN0MsYUFBUSxHQUFHLElBQUksT0FB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LEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs4R0F0R21CLGVBQWU7a0dBQWYsZUFBZSw0Q0F3QmYsZ0JBQWdCLDZCQVFoQixlQUFlOztBQW1CM0I7SUFEUCxXQUFXLEVBQUU7MkNBT2I7QUErQlM7SUFEVCxXQUFXLEVBQUU7bURBTWI7MkZBN0ZtQixlQUFlO2tCQURwQyxTQUFTO3dEQXlCZ0MsT0FBTztzQkFBOUMsS0FBSzt1QkFBQyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRTtnQkFFYyxJQUFJO3NCQUF2RCxTQUFTO3VCQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Z0JBTUQsS0FBSztzQkFBM0MsS0FBSzt1QkFBQyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUU7Z0JBQzVCLEtBQUs7c0JBQWIsS0FBSztnQkFDYSxLQUFLO3NCQUF2QixNQUFNO2dCQWlCQyxJQUFJLE1BcUNGLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0NoaWxkLFxuICBib29sZWFuQXR0cmlidXRlLFxuICBpbmplY3QsXG4gIG51bWJlckF0dHJpYnV0ZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QsIFN1YnNjcmlwdGlvbiwgZmlsdGVyLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHR5cGUgeyBDaGFydCwgVHlwZXMgfSBmcm9tICdAYW50di9nMic7XG5cbmltcG9ydCB7IFpvbmVPdXRzaWRlIH0gZnJvbSAnQGRlbG9uL3V0aWwvZGVjb3JhdG9yJztcbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuaW1wb3J0IHsgRzJTZXJ2aWNlIH0gZnJvbSAnLi9nMi5zZXJ2aWNjZSc7XG5cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEcyQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgc3J2ID0gaW5qZWN0KEcyU2VydmljZSk7XG4gIHByb3RlY3RlZCByZWFkb25seSBlbDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4gPSBpbmplY3QoRWxlbWVudFJlZjxIVE1MRWxlbWVudD4pO1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgbmdab25lID0gaW5qZWN0KE5nWm9uZSk7XG4gIHByb3RlY3RlZCByZWFkb25seSBwbGF0Zm9ybSA9IGluamVjdChQbGF0Zm9ybSk7XG4gIHByb3RlY3RlZCByZWFkb25seSBjZHIgPSBpbmplY3QoQ2hhbmdlRGV0ZWN0b3JSZWYpO1xuXG4gIGdldCBjaGFydCgpOiBDaGFydCB7XG4gICAgcmV0dXJuIHRoaXMuX2NoYXJ0O1xuICB9XG5cbiAgZ2V0IHdpbkcyKCk6IE56U2FmZUFueSB7XG4gICAgcmV0dXJuICh3aW5kb3cgYXMgTnpTYWZlQW55KS5HMjtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudGhlbWUgPSB0aGlzLnNydi5jb2cudGhlbWUhO1xuICAgIHRoaXMuc3J2Lm5vdGlmeVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcbiAgICAgICAgZmlsdGVyKCgpID0+ICF0aGlzLmxvYWRlZClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5sb2FkKCkpO1xuICB9XG4gIEBJbnB1dCh7IHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZSB9KSByZXBhaW50ID0gdHJ1ZTtcblxuICBAVmlld0NoaWxkKCdjb250YWluZXInLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcm90ZWN0ZWQgbm9kZSE6IEVsZW1lbnRSZWY7XG4gIHByb3RlY3RlZCByZXNpemUkPzogU3Vic2NyaXB0aW9uO1xuICBwcm90ZWN0ZWQgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcm90ZWN0ZWQgX2NoYXJ0ITogQ2hhcnQ7XG4gIGxvYWRlZCA9IGZhbHNlO1xuXG4gIEBJbnB1dCh7IHRyYW5zZm9ybTogbnVtYmVyQXR0cmlidXRlIH0pIGRlbGF5ID0gMDtcbiAgQElucHV0KCkgdGhlbWU6IHN0cmluZyB8IFR5cGVzLkxvb3NlT2JqZWN0O1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgcmVhZHkgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0PigpO1xuXG4gIC8qKiDmo4Dmn6XmmK/lkKblj6rlj5jmm7TmlbDmja4gKi9cbiAgb25seUNoYW5nZURhdGE/OiAoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykgPT4gYm9vbGVhbjtcblxuICBhYnN0cmFjdCBpbnN0YWxsKCk6IHZvaWQ7XG5cbiAgLyoqIEcy5pWw5o2u5Y+Y5pu0ICovXG4gIGNoYW5nZURhdGEoKTogdm9pZCB7fVxuXG4gIC8qKiDnrYnlkIwgYG5nT25Jbml0YCAqL1xuICBvbkluaXQoKTogdm9pZCB7fVxuXG4gIC8qKiDnrYnlkIwgYG5nT25DaGFuZ2VzYCAqL1xuICBvbkNoYW5nZXMoXzogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge31cblxuICBAWm9uZU91dHNpZGUoKVxuICBwcml2YXRlIGxvYWQoKTogdm9pZCB7XG4gICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5zdGFsbCgpLCB0aGlzLmRlbGF5KTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5vbkluaXQoKTtcbiAgICBpZiAodGhpcy53aW5HMikge1xuICAgICAgdGhpcy5sb2FkKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3J2LmxpYkxvYWQoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZXMoY2hhbmdlcyk7XG5cbiAgICBjb25zdCBpc09ubHlDaGFuZ2VEYXRhID0gdGhpcy5vbmx5Q2hhbmdlRGF0YVxuICAgICAgPyB0aGlzLm9ubHlDaGFuZ2VEYXRhKGNoYW5nZXMpXG4gICAgICA6IE9iamVjdC5rZXlzKGNoYW5nZXMpLmxlbmd0aCA9PT0gMSAmJiAhIWNoYW5nZXMuZGF0YTtcbiAgICBpZiAoaXNPbmx5Q2hhbmdlRGF0YSkge1xuICAgICAgdGhpcy5jaGFuZ2VEYXRhKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdGhpcy5jaGFydCB8fCAhdGhpcy5yZXBhaW50KSByZXR1cm47XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgdGhpcy5kZXN0cm95Q2hhcnQoKS5pbnN0YWxsKCk7XG4gICAgfSk7XG4gIH1cblxuICBAWm9uZU91dHNpZGUoKVxuICBwcm90ZWN0ZWQgZGVzdHJveUNoYXJ0KCk6IHRoaXMge1xuICAgIGlmICh0aGlzLl9jaGFydCkge1xuICAgICAgdGhpcy5fY2hhcnQuZGVzdHJveSgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnJlc2l6ZSQpIHtcbiAgICAgIHRoaXMucmVzaXplJC51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5kZXN0cm95Q2hhcnQoKTtcbiAgfVxufVxuIl19