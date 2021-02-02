import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { G2BaseComponent } from '@delon/chart/core';
import { InputNumber } from '@delon/util/decorator';
import { fromEvent } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/skeleton";
export class G2CustomComponent extends G2BaseComponent {
    constructor() {
        super(...arguments);
        this.resizeTime = 0;
        this.render = new EventEmitter();
        this.resize = new EventEmitter();
        this.destroy = new EventEmitter();
    }
    // #endregion
    install() {
        this.el.nativeElement.innerHTML = '';
        this.render.emit(this.el);
        this.installResizeEvent();
    }
    attachChart() { }
    installResizeEvent() {
        if (this.resizeTime <= 0)
            return;
        fromEvent(window, 'resize')
            .pipe(takeUntil(this.destroy$), debounceTime(Math.min(200, this.resizeTime)))
            .subscribe(() => this.resize.emit(this.el));
    }
}
/** @nocollapse */ G2CustomComponent.ɵfac = function G2CustomComponent_Factory(t) { return ɵG2CustomComponent_BaseFactory(t || G2CustomComponent); };
/** @nocollapse */ G2CustomComponent.ɵcmp = i0.ɵɵngDeclareComponent({ version: "11.1.1", type: G2CustomComponent, selector: "g2,g2-custom", inputs: { height: "height", resizeTime: "resizeTime" }, outputs: { render: "render", resize: "resize", destroy: "destroy" }, host: { properties: { "style.height.px": "height" } }, exportAs: ["g2Custom"], usesInheritance: true, ngImport: i0, template: `
    <nz-skeleton *ngIf="!loaded"></nz-skeleton>
    <ng-content></ng-content>
  `, isInline: true, directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.NzSkeletonComponent, selector: "nz-skeleton", inputs: ["nzActive", "nzLoading", "nzRound", "nzTitle", "nzAvatar", "nzParagraph"], exportAs: ["nzSkeleton"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], G2CustomComponent.prototype, "height", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2CustomComponent.prototype, "resizeTime", void 0);
const ɵG2CustomComponent_BaseFactory = /*@__PURE__*/ i0.ɵɵgetInheritedFactory(G2CustomComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(G2CustomComponent, [{
        type: Component,
        args: [{
                selector: 'g2,g2-custom',
                exportAs: 'g2Custom',
                template: `
    <nz-skeleton *ngIf="!loaded"></nz-skeleton>
    <ng-content></ng-content>
  `,
                host: {
                    '[style.height.px]': 'height',
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], null, { height: [{
            type: Input
        }], resizeTime: [{
            type: Input
        }], render: [{
            type: Output
        }], resize: [{
            type: Output
        }], destroy: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NoYXJ0L2N1c3RvbS9jdXN0b20uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFjLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9ILE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsV0FBVyxFQUFlLE1BQU0sdUJBQXVCLENBQUM7QUFDakUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqQyxPQUFPLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBZ0J6RCxNQUFNLE9BQU8saUJBQWtCLFNBQVEsZUFBZTtJQWR0RDs7UUFxQjBCLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDcEIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFDeEMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFDeEMsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7S0FtQjdEO0lBakJDLGFBQWE7SUFFYixPQUFPO1FBQ0wsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELFdBQVcsS0FBVSxDQUFDO0lBRWQsa0JBQWtCO1FBQ3hCLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDO1lBQUUsT0FBTztRQUVqQyxTQUFTLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQzthQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7YUFDNUUsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7OytIQTVCVSxpQkFBaUI7K0ZBQWpCLGlCQUFpQix1UkFYbEI7OztHQUdUO0FBY3VCO0lBQWQsV0FBVyxFQUFFOztpREFBZ0I7QUFDZjtJQUFkLFdBQVcsRUFBRTs7cURBQWdCOzhFQVA1QixpQkFBaUI7dUZBQWpCLGlCQUFpQjtjQWQ3QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRSxVQUFVO2dCQUNwQixRQUFRLEVBQUU7OztHQUdUO2dCQUNELElBQUksRUFBRTtvQkFDSixtQkFBbUIsRUFBRSxRQUFRO2lCQUM5QjtnQkFDRCxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7Z0JBT3lCLE1BQU07a0JBQTdCLEtBQUs7WUFDa0IsVUFBVTtrQkFBakMsS0FBSztZQUNhLE1BQU07a0JBQXhCLE1BQU07WUFDWSxNQUFNO2tCQUF4QixNQUFNO1lBQ1ksT0FBTztrQkFBekIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEcyQmFzZUNvbXBvbmVudCB9IGZyb20gJ0BkZWxvbi9jaGFydC9jb3JlJztcbmltcG9ydCB7IElucHV0TnVtYmVyLCBOdW1iZXJJbnB1dCB9IGZyb20gJ0BkZWxvbi91dGlsL2RlY29yYXRvcic7XG5pbXBvcnQgeyBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnMixnMi1jdXN0b20nLFxuICBleHBvcnRBczogJ2cyQ3VzdG9tJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bnotc2tlbGV0b24gKm5nSWY9XCIhbG9hZGVkXCI+PC9uei1za2VsZXRvbj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW3N0eWxlLmhlaWdodC5weF0nOiAnaGVpZ2h0JyxcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBHMkN1c3RvbUNvbXBvbmVudCBleHRlbmRzIEcyQmFzZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9oZWlnaHQ6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfcmVzaXplVGltZTogTnVtYmVySW5wdXQ7XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBoZWlnaHQ6IG51bWJlcjtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgcmVzaXplVGltZSA9IDA7XG4gIEBPdXRwdXQoKSByZWFkb25seSByZW5kZXIgPSBuZXcgRXZlbnRFbWl0dGVyPEVsZW1lbnRSZWY+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSByZXNpemUgPSBuZXcgRXZlbnRFbWl0dGVyPEVsZW1lbnRSZWY+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBkZXN0cm95ID0gbmV3IEV2ZW50RW1pdHRlcjxFbGVtZW50UmVmPigpO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBpbnN0YWxsKCk6IHZvaWQge1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgICB0aGlzLnJlbmRlci5lbWl0KHRoaXMuZWwpO1xuICAgIHRoaXMuaW5zdGFsbFJlc2l6ZUV2ZW50KCk7XG4gIH1cblxuICBhdHRhY2hDaGFydCgpOiB2b2lkIHt9XG5cbiAgcHJpdmF0ZSBpbnN0YWxsUmVzaXplRXZlbnQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucmVzaXplVGltZSA8PSAwKSByZXR1cm47XG5cbiAgICBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJylcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSwgZGVib3VuY2VUaW1lKE1hdGgubWluKDIwMCwgdGhpcy5yZXNpemVUaW1lKSkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMucmVzaXplLmVtaXQodGhpcy5lbCkpO1xuICB9XG59XG4iXX0=