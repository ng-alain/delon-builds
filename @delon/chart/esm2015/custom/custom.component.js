/**
 * @fileoverview added by tsickle
 * Generated from: custom.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewEncapsulation, } from '@angular/core';
import { AlainConfigService, InputNumber } from '@delon/util';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
export class G2CustomComponent {
    // #endregion
    /**
     * @param {?} el
     * @param {?} configSrv
     */
    constructor(el, configSrv) {
        this.el = el;
        this.resize$ = null;
        // #region fields
        this.delay = 0;
        this.resizeTime = 0;
        this.render = new EventEmitter();
        // tslint:disable-next-line:no-output-native
        this.resize = new EventEmitter();
        this.destroy = new EventEmitter();
        configSrv.attachKey(this, 'chart', 'theme');
    }
    /**
     * @private
     * @return {?}
     */
    renderChart() {
        this.el.nativeElement.innerHTML = '';
        this.render.emit(this.el);
        this.installResizeEvent();
    }
    /**
     * @private
     * @return {?}
     */
    installResizeEvent() {
        if (this.resizeTime <= 0 || this.resize$)
            return;
        this.resize$ = fromEvent(window, 'resize')
            .pipe(debounceTime(Math.min(200, this.resizeTime)))
            .subscribe((/**
         * @return {?}
         */
        () => this.resize.emit(this.el)));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        setTimeout((/**
         * @return {?}
         */
        () => this.renderChart()), this.delay);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy.emit(this.el);
        if (this.resize$)
            this.resize$.unsubscribe();
    }
}
G2CustomComponent.decorators = [
    { type: Component, args: [{
                selector: 'g2,g2-custom',
                exportAs: 'g2Custom',
                template: ` <ng-content></ng-content> `,
                host: {
                    '[style.height.px]': 'height',
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
G2CustomComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: AlainConfigService }
];
G2CustomComponent.propDecorators = {
    delay: [{ type: Input }],
    height: [{ type: Input }],
    resizeTime: [{ type: Input }],
    theme: [{ type: Input }],
    render: [{ type: Output }],
    resize: [{ type: Output }],
    destroy: [{ type: Output }]
};
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2CustomComponent.prototype, "delay", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], G2CustomComponent.prototype, "height", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2CustomComponent.prototype, "resizeTime", void 0);
if (false) {
    /**
     * @type {?}
     * @private
     */
    G2CustomComponent.prototype.resize$;
    /** @type {?} */
    G2CustomComponent.prototype.delay;
    /** @type {?} */
    G2CustomComponent.prototype.height;
    /** @type {?} */
    G2CustomComponent.prototype.resizeTime;
    /** @type {?} */
    G2CustomComponent.prototype.theme;
    /** @type {?} */
    G2CustomComponent.prototype.render;
    /** @type {?} */
    G2CustomComponent.prototype.resize;
    /** @type {?} */
    G2CustomComponent.prototype.destroy;
    /**
     * @type {?}
     * @private
     */
    G2CustomComponent.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9jaGFydC9jdXN0b20vIiwic291cmNlcyI6WyJjdXN0b20uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTixpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM5RCxPQUFPLEVBQUUsU0FBUyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFhOUMsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7O0lBZ0I1QixZQUFvQixFQUFjLEVBQUUsU0FBNkI7UUFBN0MsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQWYxQixZQUFPLEdBQXdCLElBQUksQ0FBQzs7UUFJcEIsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUVWLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFFcEIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7O1FBRXhDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBQ3hDLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBSzFELFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7OztJQUVPLFdBQVc7UUFDakIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFTyxrQkFBa0I7UUFDeEIsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTztZQUFFLE9BQU87UUFFakQsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQzthQUN2QyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2FBQ2xELFNBQVM7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDO0lBQ2hELENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2IsVUFBVTs7O1FBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMzQixJQUFJLElBQUksQ0FBQyxPQUFPO1lBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMvQyxDQUFDOzs7WUFwREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixRQUFRLEVBQUUsVUFBVTtnQkFDcEIsUUFBUSxFQUFFLDZCQUE2QjtnQkFDdkMsSUFBSSxFQUFFO29CQUNKLG1CQUFtQixFQUFFLFFBQVE7aUJBQzlCO2dCQUNELG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0Qzs7OztZQXRCQyxVQUFVO1lBUUgsa0JBQWtCOzs7b0JBb0J4QixLQUFLO3FCQUNMLEtBQUs7eUJBQ0wsS0FBSztvQkFDTCxLQUFLO3FCQUNMLE1BQU07cUJBRU4sTUFBTTtzQkFDTixNQUFNOztBQVBpQjtJQUFkLFdBQVcsRUFBRTs7Z0RBQVc7QUFDVjtJQUFkLFdBQVcsRUFBRTs7aURBQWdCO0FBQ2Y7SUFBZCxXQUFXLEVBQUU7O3FEQUFnQjs7Ozs7O0lBTnZDLG9DQUE0Qzs7SUFJNUMsa0NBQWtDOztJQUNsQyxtQ0FBdUM7O0lBQ3ZDLHVDQUF1Qzs7SUFDdkMsa0NBQTJDOztJQUMzQyxtQ0FBMkQ7O0lBRTNELG1DQUEyRDs7SUFDM0Qsb0NBQTREOzs7OztJQUloRCwrQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE91dHB1dCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHlwZXMgfSBmcm9tICdAYW50di9nMic7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UsIElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZzIsZzItY3VzdG9tJyxcbiAgZXhwb3J0QXM6ICdnMkN1c3RvbScsXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcbiAgaG9zdDoge1xuICAgICdbc3R5bGUuaGVpZ2h0LnB4XSc6ICdoZWlnaHQnLFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIEcyQ3VzdG9tQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSByZXNpemUkOiBTdWJzY3JpcHRpb24gfCBudWxsID0gbnVsbDtcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGRlbGF5ID0gMDtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgaGVpZ2h0OiBudW1iZXI7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHJlc2l6ZVRpbWUgPSAwO1xuICBASW5wdXQoKSB0aGVtZTogc3RyaW5nIHwgVHlwZXMuTG9vc2VPYmplY3Q7XG4gIEBPdXRwdXQoKSByZWFkb25seSByZW5kZXIgPSBuZXcgRXZlbnRFbWl0dGVyPEVsZW1lbnRSZWY+KCk7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1vdXRwdXQtbmF0aXZlXG4gIEBPdXRwdXQoKSByZWFkb25seSByZXNpemUgPSBuZXcgRXZlbnRFbWl0dGVyPEVsZW1lbnRSZWY+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBkZXN0cm95ID0gbmV3IEV2ZW50RW1pdHRlcjxFbGVtZW50UmVmPigpO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBjb25maWdTcnY6IEFsYWluQ29uZmlnU2VydmljZSkge1xuICAgIGNvbmZpZ1Nydi5hdHRhY2hLZXkodGhpcywgJ2NoYXJ0JywgJ3RoZW1lJyk7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlckNoYXJ0KCkge1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgICB0aGlzLnJlbmRlci5lbWl0KHRoaXMuZWwpO1xuICAgIHRoaXMuaW5zdGFsbFJlc2l6ZUV2ZW50KCk7XG4gIH1cblxuICBwcml2YXRlIGluc3RhbGxSZXNpemVFdmVudCgpIHtcbiAgICBpZiAodGhpcy5yZXNpemVUaW1lIDw9IDAgfHwgdGhpcy5yZXNpemUkKSByZXR1cm47XG5cbiAgICB0aGlzLnJlc2l6ZSQgPSBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJylcbiAgICAgIC5waXBlKGRlYm91bmNlVGltZShNYXRoLm1pbigyMDAsIHRoaXMucmVzaXplVGltZSkpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJlc2l6ZS5lbWl0KHRoaXMuZWwpKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMucmVuZGVyQ2hhcnQoKSwgdGhpcy5kZWxheSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kuZW1pdCh0aGlzLmVsKTtcbiAgICBpZiAodGhpcy5yZXNpemUkKSB0aGlzLnJlc2l6ZSQudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19