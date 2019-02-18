/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, NgZone, ViewChild, } from '@angular/core';
import { InputBoolean, InputNumber } from '@delon/util';
import { fromEvent } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';
/** @type {?} */
const TITLE_HEIGHT = 41;
/**
 * @record
 */
export function G2BarData() { }
if (false) {
    /** @type {?} */
    G2BarData.prototype.x;
    /** @type {?} */
    G2BarData.prototype.y;
    /* Skipping unhandled member: [key: string]: any;*/
}
export class G2BarComponent {
    // #endregion
    /**
     * @param {?} ngZone
     */
    constructor(ngZone) {
        this.ngZone = ngZone;
        // #region fields
        this.delay = 0;
        this.color = 'rgba(24, 144, 255, 0.85)';
        this.height = 0;
        this.padding = 'auto';
        this.data = [];
        this.autoLabel = true;
    }
    /**
     * @return {?}
     */
    getHeight() {
        return this.title ? this.height - TITLE_HEIGHT : this.height;
    }
    /**
     * @return {?}
     */
    install() {
        const { node, padding } = this;
        /** @type {?} */
        const container = (/** @type {?} */ (node.nativeElement));
        /** @type {?} */
        const chart = (this.chart = new G2.Chart({
            container,
            forceFit: true,
            legend: null,
            height: this.getHeight(),
            padding,
        }));
        this.updatelabel();
        chart.axis('y', {
            title: false,
            line: false,
            tickLine: false,
        });
        chart.source([], {
            x: {
                type: 'cat',
            },
            y: {
                min: 0,
            },
        });
        chart.tooltip({
            showTitle: false,
        });
        chart
            .interval()
            .position('x*y')
            .tooltip('x*y', (x, y) => ({ name: x, value: y }));
        chart.render();
        this.attachChart();
    }
    /**
     * @return {?}
     */
    attachChart() {
        const { chart, padding, data, color } = this;
        if (!chart || !data || data.length <= 0)
            return;
        this.installResizeEvent();
        /** @type {?} */
        const height = this.getHeight();
        if (chart.get('height') !== height) {
            chart.changeHeight(height);
        }
        // color
        chart.get('geoms')[0].color(color);
        chart.set('padding', padding);
        chart.changeData(data);
    }
    /**
     * @return {?}
     */
    updatelabel() {
        const { node, data, chart } = this;
        /** @type {?} */
        const canvasWidth = node.nativeElement.clientWidth;
        /** @type {?} */
        const minWidth = data.length * 30;
        chart.axis('x', canvasWidth > minWidth).repaint();
    }
    /**
     * @return {?}
     */
    installResizeEvent() {
        if (!this.autoLabel || this.resize$)
            return;
        this.resize$ = fromEvent(window, 'resize')
            .pipe(filter(() => this.chart), debounceTime(200))
            .subscribe(() => this.ngZone.runOutsideAngular(() => this.updatelabel()));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.ngZone.runOutsideAngular(() => setTimeout(() => this.install(), this.delay));
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.ngZone.runOutsideAngular(() => this.attachChart());
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.resize$) {
            this.resize$.unsubscribe();
        }
        if (this.chart) {
            this.ngZone.runOutsideAngular(() => this.chart.destroy());
        }
    }
}
G2BarComponent.decorators = [
    { type: Component, args: [{
                selector: 'g2-bar',
                template: "<ng-container *stringTemplateOutlet=\"title\">\n  <h4 style=\"margin-bottom:20px\">{{title}}</h4>\n</ng-container>\n<div #container></div>\n",
                host: {
                    '[style.height.px]': 'height',
                },
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
G2BarComponent.ctorParameters = () => [
    { type: NgZone }
];
G2BarComponent.propDecorators = {
    node: [{ type: ViewChild, args: ['container',] }],
    delay: [{ type: Input }],
    title: [{ type: Input }],
    color: [{ type: Input }],
    height: [{ type: Input }],
    padding: [{ type: Input }],
    data: [{ type: Input }],
    autoLabel: [{ type: Input }]
};
tslib_1.__decorate([
    InputNumber(),
    tslib_1.__metadata("design:type", Object)
], G2BarComponent.prototype, "delay", void 0);
tslib_1.__decorate([
    InputNumber(),
    tslib_1.__metadata("design:type", Object)
], G2BarComponent.prototype, "height", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], G2BarComponent.prototype, "autoLabel", void 0);
if (false) {
    /** @type {?} */
    G2BarComponent.prototype.resize$;
    /** @type {?} */
    G2BarComponent.prototype.chart;
    /** @type {?} */
    G2BarComponent.prototype.node;
    /** @type {?} */
    G2BarComponent.prototype.delay;
    /** @type {?} */
    G2BarComponent.prototype.title;
    /** @type {?} */
    G2BarComponent.prototype.color;
    /** @type {?} */
    G2BarComponent.prototype.height;
    /** @type {?} */
    G2BarComponent.prototype.padding;
    /** @type {?} */
    G2BarComponent.prototype.data;
    /** @type {?} */
    G2BarComponent.prototype.autoLabel;
    /** @type {?} */
    G2BarComponent.prototype.ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9jaGFydC9iYXIvIiwic291cmNlcyI6WyJiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxNQUFNLEVBS04sU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxTQUFTLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O01BR2hELFlBQVksR0FBRyxFQUFFOzs7O0FBRXZCLCtCQUlDOzs7SUFIQyxzQkFBTzs7SUFDUCxzQkFBTzs7O0FBWVQsTUFBTSxPQUFPLGNBQWM7Ozs7O0lBaUJ6QixZQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTs7UUFWVixVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBRXpCLFVBQUssR0FBRywwQkFBMEIsQ0FBQztRQUNwQixXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLFlBQU8sR0FBb0MsTUFBTSxDQUFDO1FBQ2xELFNBQUksR0FBZ0IsRUFBRSxDQUFDO1FBQ1AsY0FBUyxHQUFHLElBQUksQ0FBQztJQUlMLENBQUM7Ozs7SUFFOUIsU0FBUztRQUNmLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDL0QsQ0FBQzs7OztJQUVPLE9BQU87Y0FDUCxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsR0FBRyxJQUFJOztjQUV4QixTQUFTLEdBQUcsbUJBQUEsSUFBSSxDQUFDLGFBQWEsRUFBZTs7Y0FD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QUM5QiwrQkFBbUI7O0lBQ25CLDhCQUFpRDs7SUFJakQsK0JBQWtDOztJQUNsQywrQkFBMkM7O0lBQzNDLCtCQUE0Qzs7SUFDNUMsZ0NBQW1DOztJQUNuQyxpQ0FBMkQ7O0lBQzNELDhCQUFnQzs7SUFDaEMsbUNBQTBDOztJQUk5QixnQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmRlY2xhcmUgdmFyIEcyOiBhbnk7XG5jb25zdCBUSVRMRV9IRUlHSFQgPSA0MTtcblxuZXhwb3J0IGludGVyZmFjZSBHMkJhckRhdGEge1xuICB4OiBhbnk7XG4gIHk6IGFueTtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnMi1iYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICdbc3R5bGUuaGVpZ2h0LnB4XSc6ICdoZWlnaHQnLFxuICB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRzJCYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSByZXNpemUkOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgY2hhcnQ6IGFueTtcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJykgcHJpdmF0ZSBub2RlOiBFbGVtZW50UmVmO1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgZGVsYXkgPSAwO1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIGNvbG9yID0gJ3JnYmEoMjQsIDE0NCwgMjU1LCAwLjg1KSc7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGhlaWdodCA9IDA7XG4gIEBJbnB1dCgpIHBhZGRpbmc6IEFycmF5PG51bWJlciB8IHN0cmluZz4gfCBzdHJpbmcgPSAnYXV0byc7XG4gIEBJbnB1dCgpIGRhdGE6IEcyQmFyRGF0YVtdID0gW107XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBhdXRvTGFiZWwgPSB0cnVlO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5nWm9uZTogTmdab25lKSB7fVxuXG4gIHByaXZhdGUgZ2V0SGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLnRpdGxlID8gdGhpcy5oZWlnaHQgLSBUSVRMRV9IRUlHSFQgOiB0aGlzLmhlaWdodDtcbiAgfVxuXG4gIHByaXZhdGUgaW5zdGFsbCgpIHtcbiAgICBjb25zdCB7IG5vZGUsIHBhZGRpbmcgfSA9IHRoaXM7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBub2RlLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgY2hhcnQgPSAodGhpcy5jaGFydCA9IG5ldyBHMi5DaGFydCh7XG4gICAgICBjb250YWluZXIsXG4gICAgICBmb3JjZUZpdDogdHJ1ZSxcbiAgICAgIGxlZ2VuZDogbnVsbCxcbiAgICAgIGhlaWdodDogdGhpcy5nZXRIZWlnaHQoKSxcbiAgICAgIHBhZGRpbmcsXG4gICAgfSkpO1xuICAgIHRoaXMudXBkYXRlbGFiZWwoKTtcbiAgICBjaGFydC5heGlzKCd5Jywge1xuICAgICAgdGl0bGU6IGZhbHNlLFxuICAgICAgbGluZTogZmFsc2UsXG4gICAgICB0aWNrTGluZTogZmFsc2UsXG4gICAgfSk7XG4gICAgY2hhcnQuc291cmNlKFtdLCB7XG4gICAgICB4OiB7XG4gICAgICAgIHR5cGU6ICdjYXQnLFxuICAgICAgfSxcbiAgICAgIHk6IHtcbiAgICAgICAgbWluOiAwLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBjaGFydC50b29sdGlwKHtcbiAgICAgIHNob3dUaXRsZTogZmFsc2UsXG4gICAgfSk7XG4gICAgY2hhcnRcbiAgICAgIC5pbnRlcnZhbCgpXG4gICAgICAucG9zaXRpb24oJ3gqeScpXG4gICAgICAudG9vbHRpcCgneCp5JywgKHgsIHkpID0+ICh7IG5hbWU6IHgsIHZhbHVlOiB5IH0pKTtcblxuICAgIGNoYXJ0LnJlbmRlcigpO1xuXG4gICAgdGhpcy5hdHRhY2hDaGFydCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBhdHRhY2hDaGFydCgpIHtcbiAgICBjb25zdCB7IGNoYXJ0LCBwYWRkaW5nLCBkYXRhLCBjb2xvciB9ID0gdGhpcztcbiAgICBpZiAoIWNoYXJ0IHx8ICFkYXRhIHx8IGRhdGEubGVuZ3RoIDw9IDApIHJldHVybjtcbiAgICB0aGlzLmluc3RhbGxSZXNpemVFdmVudCgpO1xuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCk7XG4gICAgaWYgKGNoYXJ0LmdldCgnaGVpZ2h0JykgIT09IGhlaWdodCkge1xuICAgICAgY2hhcnQuY2hhbmdlSGVpZ2h0KGhlaWdodCk7XG4gICAgfVxuICAgIC8vIGNvbG9yXG4gICAgY2hhcnQuZ2V0KCdnZW9tcycpWzBdLmNvbG9yKGNvbG9yKTtcbiAgICBjaGFydC5zZXQoJ3BhZGRpbmcnLCBwYWRkaW5nKTtcblxuICAgIGNoYXJ0LmNoYW5nZURhdGEoZGF0YSk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZWxhYmVsKCkge1xuICAgIGNvbnN0IHsgbm9kZSwgZGF0YSwgY2hhcnQgfSA9IHRoaXM7XG4gICAgY29uc3QgY2FudmFzV2lkdGggPSBub2RlLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGg7XG4gICAgY29uc3QgbWluV2lkdGggPSBkYXRhLmxlbmd0aCAqIDMwO1xuICAgIGNoYXJ0LmF4aXMoJ3gnLCBjYW52YXNXaWR0aCA+IG1pbldpZHRoKS5yZXBhaW50KCk7XG4gIH1cblxuICBwcml2YXRlIGluc3RhbGxSZXNpemVFdmVudCgpIHtcbiAgICBpZiAoIXRoaXMuYXV0b0xhYmVsIHx8IHRoaXMucmVzaXplJCkgcmV0dXJuO1xuXG4gICAgdGhpcy5yZXNpemUkID0gZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKCgpID0+IHRoaXMuY2hhcnQpLFxuICAgICAgICBkZWJvdW5jZVRpbWUoMjAwKSxcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy51cGRhdGVsYWJlbCgpKSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5zdGFsbCgpLCB0aGlzLmRlbGF5KSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLmF0dGFjaENoYXJ0KCkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucmVzaXplJCkge1xuICAgICAgdGhpcy5yZXNpemUkLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmNoYXJ0KSB7XG4gICAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLmNoYXJ0LmRlc3Ryb3koKSk7XG4gICAgfVxuICB9XG59XG4iXX0=