import { __decorate, __metadata } from "tslib";
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectorRef, Directive, ElementRef, Input, NgZone, ViewChild, } from '@angular/core';
import { InputBoolean, InputNumber, ZoneOutside } from '@delon/util/decorator';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { G2Service } from './g2.servicce';
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
        this.theme = srv.cog.theme;
        this.srv.notify
            .pipe(takeUntil(this.destroy$), filter(() => !this.loaded))
            .subscribe(() => this.load());
    }
    get chart() {
        return this._chart;
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
        if (window.G2) {
            this.load();
        }
        else {
            this.srv.libLoad();
        }
    }
    ngOnChanges(changes) {
        this.onChanges(changes);
        const isOnlyChangeData = this.onlyChangeData ? this.onlyChangeData(changes) : Object.keys(changes).length === 1 && !!changes.data;
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
G2BaseComponent.decorators = [
    { type: Directive }
];
/** @nocollapse */
G2BaseComponent.ctorParameters = () => [
    { type: G2Service },
    { type: ElementRef },
    { type: NgZone },
    { type: Platform },
    { type: ChangeDetectorRef }
];
G2BaseComponent.propDecorators = {
    repaint: [{ type: Input }],
    node: [{ type: ViewChild, args: ['container', { static: true },] }],
    delay: [{ type: Input }],
    theme: [{ type: Input }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], G2BaseComponent.prototype, "repaint", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2BaseComponent.prototype, "delay", void 0);
__decorate([
    ZoneOutside(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], G2BaseComponent.prototype, "load", null);
__decorate([
    ZoneOutside(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], G2BaseComponent.prototype, "destroyChart", null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZzIuYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jaGFydC9jb3JlL2cyLmJhc2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxNQUFNLEVBS04sU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBZ0IsWUFBWSxFQUFFLFdBQVcsRUFBZSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRyxPQUFPLEVBQUUsT0FBTyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUM3QyxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHMUMsTUFBTSxPQUFnQixlQUFlO0lBS25DLFlBQ1ksR0FBYyxFQUNkLEVBQTJCLEVBQzNCLE1BQWMsRUFDZCxRQUFrQixFQUNsQixHQUFzQjtRQUp0QixRQUFHLEdBQUgsR0FBRyxDQUFXO1FBQ2QsT0FBRSxHQUFGLEVBQUUsQ0FBeUI7UUFDM0IsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFZVCxZQUFPLEdBQUcsSUFBSSxDQUFDO1FBSTlCLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBRXpDLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFFUyxVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBbEJoQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBTSxDQUFDO1FBQzVCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFB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QkFDTCxLQUFLOztBQVRtQjtJQUFmLFlBQVksRUFBRTs7Z0RBQWdCO0FBUWhCO0lBQWQsV0FBVyxFQUFFOzs4Q0FBVztBQWtCbEM7SUFEQyxXQUFXLEVBQUU7Ozs7MkNBT2I7QUE2QkQ7SUFEQyxXQUFXLEVBQUU7Ozs7bURBTWIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHR5cGUgeyBDaGFydCwgVHlwZXMgfSBmcm9tICdAYW50di9nMic7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIsIE51bWJlcklucHV0LCBab25lT3V0c2lkZSB9IGZyb20gJ0BkZWxvbi91dGlsL2RlY29yYXRvcic7XG5pbXBvcnQgeyBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRzJTZXJ2aWNlIH0gZnJvbSAnLi9nMi5zZXJ2aWNjZSc7XG5cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEcyQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBnZXQgY2hhcnQoKTogQ2hhcnQge1xuICAgIHJldHVybiB0aGlzLl9jaGFydDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzcnY6IEcyU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZWw6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIHByb3RlY3RlZCBuZ1pvbmU6IE5nWm9uZSxcbiAgICBwcm90ZWN0ZWQgcGxhdGZvcm06IFBsYXRmb3JtLFxuICAgIHByb3RlY3RlZCBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICApIHtcbiAgICB0aGlzLnRoZW1lID0gc3J2LmNvZy50aGVtZSE7XG4gICAgdGhpcy5zcnYubm90aWZ5XG4gICAgICAucGlwZShcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLFxuICAgICAgICBmaWx0ZXIoKCkgPT4gIXRoaXMubG9hZGVkKSxcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5sb2FkKCkpO1xuICB9XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9yZXBhaW50OiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9kZWxheTogTnVtYmVySW5wdXQ7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSByZXBhaW50ID0gdHJ1ZTtcblxuICBAVmlld0NoaWxkKCdjb250YWluZXInLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcm90ZWN0ZWQgbm9kZTogRWxlbWVudFJlZjtcbiAgcHJvdGVjdGVkIHJlc2l6ZSQ6IFN1YnNjcmlwdGlvbjtcbiAgcHJvdGVjdGVkIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJvdGVjdGVkIF9jaGFydDogQ2hhcnQ7XG4gIGxvYWRlZCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGRlbGF5ID0gMDtcbiAgQElucHV0KCkgdGhlbWU6IHN0cmluZyB8IFR5cGVzLkxvb3NlT2JqZWN0O1xuXG4gIC8qKiDmo4Dmn6XmmK/lkKblj6rlj5jmm7TmlbDmja4gKi9cbiAgb25seUNoYW5nZURhdGE/OiAoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykgPT4gYm9vbGVhbjtcblxuICBhYnN0cmFjdCBpbnN0YWxsKCk6IHZvaWQ7XG5cbiAgLyoqIEcy5pWw5o2u5Y+Y5pu0ICovXG4gIGNoYW5nZURhdGEoKTogdm9pZCB7fVxuXG4gIC8qKiDnrYnlkIwgYG5nT25Jbml0YCAqL1xuICBvbkluaXQoKTogdm9pZCB7fVxuXG4gIC8qKiDnrYnlkIwgYG5nT25DaGFuZ2VzYCAqL1xuICBvbkNoYW5nZXMoXzogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge31cblxuICBAWm9uZU91dHNpZGUoKVxuICBwcml2YXRlIGxvYWQoKTogdm9pZCB7XG4gICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5zdGFsbCgpLCB0aGlzLmRlbGF5KTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5vbkluaXQoKTtcbiAgICBpZiAoKHdpbmRvdyBhcyBhbnkpLkcyKSB7XG4gICAgICB0aGlzLmxvYWQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zcnYubGliTG9hZCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlcyhjaGFuZ2VzKTtcblxuICAgIGNvbnN0IGlzT25seUNoYW5nZURhdGEgPSB0aGlzLm9ubHlDaGFuZ2VEYXRhID8gdGhpcy5vbmx5Q2hhbmdlRGF0YShjaGFuZ2VzKSA6IE9iamVjdC5rZXlzKGNoYW5nZXMpLmxlbmd0aCA9PT0gMSAmJiAhIWNoYW5nZXMuZGF0YTtcbiAgICBpZiAoaXNPbmx5Q2hhbmdlRGF0YSkge1xuICAgICAgdGhpcy5jaGFuZ2VEYXRhKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdGhpcy5jaGFydCB8fCAhdGhpcy5yZXBhaW50KSByZXR1cm47XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgdGhpcy5kZXN0cm95Q2hhcnQoKS5pbnN0YWxsKCk7XG4gICAgfSk7XG4gIH1cblxuICBAWm9uZU91dHNpZGUoKVxuICBwcm90ZWN0ZWQgZGVzdHJveUNoYXJ0KCk6IHRoaXMge1xuICAgIGlmICh0aGlzLl9jaGFydCkge1xuICAgICAgdGhpcy5fY2hhcnQuZGVzdHJveSgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnJlc2l6ZSQpIHtcbiAgICAgIHRoaXMucmVzaXplJC51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5kZXN0cm95Q2hhcnQoKTtcbiAgfVxufVxuIl19