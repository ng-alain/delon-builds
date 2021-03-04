import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { G2BaseComponent } from '@delon/chart/core';
import { InputNumber } from '@delon/util/decorator';
import { untilDestroyed } from '@ngneat/until-destroy';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
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
            .pipe(untilDestroyed(this), debounceTime(Math.min(200, this.resizeTime)))
            .subscribe(() => this.resize.emit(this.el));
    }
}
G2CustomComponent.decorators = [
    { type: Component, args: [{
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
                encapsulation: ViewEncapsulation.None
            },] }
];
G2CustomComponent.propDecorators = {
    height: [{ type: Input }],
    resizeTime: [{ type: Input }],
    render: [{ type: Output }],
    resize: [{ type: Output }],
    destroy: [{ type: Output }]
};
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], G2CustomComponent.prototype, "height", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2CustomComponent.prototype, "resizeTime", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NoYXJ0L2N1c3RvbS9jdXN0b20uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFjLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9ILE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsV0FBVyxFQUFlLE1BQU0sdUJBQXVCLENBQUM7QUFDakUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBZ0I5QyxNQUFNLE9BQU8saUJBQWtCLFNBQVEsZUFBZTtJQWR0RDs7UUFxQjBCLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDcEIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFDeEMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFDeEMsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7SUFtQjlELENBQUM7SUFqQkMsYUFBYTtJQUViLE9BQU87UUFDTCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsV0FBVyxLQUFVLENBQUM7SUFFZCxrQkFBa0I7UUFDeEIsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUM7WUFBRSxPQUFPO1FBRWpDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDO2FBQ3hCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2FBQ3hFLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7WUExQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixRQUFRLEVBQUUsVUFBVTtnQkFDcEIsUUFBUSxFQUFFOzs7R0FHVDtnQkFDRCxJQUFJLEVBQUU7b0JBQ0osbUJBQW1CLEVBQUUsUUFBUTtpQkFDOUI7Z0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDOzs7cUJBT0UsS0FBSzt5QkFDTCxLQUFLO3FCQUNMLE1BQU07cUJBQ04sTUFBTTtzQkFDTixNQUFNOztBQUppQjtJQUFkLFdBQVcsRUFBRTs7aURBQWdCO0FBQ2Y7SUFBZCxXQUFXLEVBQUU7O3FEQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEcyQmFzZUNvbXBvbmVudCB9IGZyb20gJ0BkZWxvbi9jaGFydC9jb3JlJztcbmltcG9ydCB7IElucHV0TnVtYmVyLCBOdW1iZXJJbnB1dCB9IGZyb20gJ0BkZWxvbi91dGlsL2RlY29yYXRvcic7XG5pbXBvcnQgeyB1bnRpbERlc3Ryb3llZCB9IGZyb20gJ0BuZ25lYXQvdW50aWwtZGVzdHJveSc7XG5pbXBvcnQgeyBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZzIsZzItY3VzdG9tJyxcbiAgZXhwb3J0QXM6ICdnMkN1c3RvbScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG56LXNrZWxldG9uICpuZ0lmPVwiIWxvYWRlZFwiPjwvbnotc2tlbGV0b24+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICBgLFxuICBob3N0OiB7XG4gICAgJ1tzdHlsZS5oZWlnaHQucHhdJzogJ2hlaWdodCcsXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgRzJDdXN0b21Db21wb25lbnQgZXh0ZW5kcyBHMkJhc2VDb21wb25lbnQge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfaGVpZ2h0OiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3Jlc2l6ZVRpbWU6IE51bWJlcklucHV0O1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgaGVpZ2h0OiBudW1iZXI7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHJlc2l6ZVRpbWUgPSAwO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgcmVuZGVyID0gbmV3IEV2ZW50RW1pdHRlcjxFbGVtZW50UmVmPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgcmVzaXplID0gbmV3IEV2ZW50RW1pdHRlcjxFbGVtZW50UmVmPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgZGVzdHJveSA9IG5ldyBFdmVudEVtaXR0ZXI8RWxlbWVudFJlZj4oKTtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgaW5zdGFsbCgpOiB2b2lkIHtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgdGhpcy5yZW5kZXIuZW1pdCh0aGlzLmVsKTtcbiAgICB0aGlzLmluc3RhbGxSZXNpemVFdmVudCgpO1xuICB9XG5cbiAgYXR0YWNoQ2hhcnQoKTogdm9pZCB7fVxuXG4gIHByaXZhdGUgaW5zdGFsbFJlc2l6ZUV2ZW50KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnJlc2l6ZVRpbWUgPD0gMCkgcmV0dXJuO1xuXG4gICAgZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpXG4gICAgICAucGlwZSh1bnRpbERlc3Ryb3llZCh0aGlzKSwgZGVib3VuY2VUaW1lKE1hdGgubWluKDIwMCwgdGhpcy5yZXNpemVUaW1lKSkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMucmVzaXplLmVtaXQodGhpcy5lbCkpO1xuICB9XG59XG4iXX0=