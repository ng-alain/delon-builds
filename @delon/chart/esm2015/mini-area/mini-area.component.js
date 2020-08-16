/**
 * @fileoverview added by tsickle
 * Generated from: mini-area.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, NgZone, Output, ViewEncapsulation, } from '@angular/core';
import { Chart } from '@antv/g2';
import { AlainConfigService, InputBoolean, InputNumber } from '@delon/util';
/**
 * @record
 */
export function G2MiniAreaData() { }
if (false) {
    /** @type {?} */
    G2MiniAreaData.prototype.x;
    /** @type {?} */
    G2MiniAreaData.prototype.y;
    /* Skipping unhandled member: [key: string]: any;*/
}
/**
 * @record
 */
export function G2MiniAreaClickItem() { }
if (false) {
    /** @type {?} */
    G2MiniAreaClickItem.prototype.item;
    /** @type {?} */
    G2MiniAreaClickItem.prototype.ev;
}
export class G2MiniAreaComponent {
    // #endregion
    /**
     * @param {?} el
     * @param {?} ngZone
     * @param {?} configSrv
     * @param {?} platform
     */
    constructor(el, ngZone, configSrv, platform) {
        this.el = el;
        this.ngZone = ngZone;
        this.platform = platform;
        // #region fields
        this.delay = 0;
        this.color = 'rgba(24, 144, 255, 0.2)';
        this.borderColor = '#1890FF';
        this.borderWidth = 2;
        this.height = 56;
        this.fit = true;
        this.line = false;
        this.animate = true;
        this.padding = [8, 8, 8, 8];
        this.data = [];
        this.yTooltipSuffix = '';
        this.tooltipType = 'default';
        this.clickItem = new EventEmitter();
        configSrv.attachKey(this, 'chart', 'theme');
    }
    /**
     * @return {?}
     */
    get chart() {
        return this._chart;
    }
    /**
     * @private
     * @return {?}
     */
    install() {
        const { el, fit, height, padding, xAxis, yAxis, yTooltipSuffix, tooltipType, line, theme } = this;
        /** @type {?} */
        const chart = (this._chart = new Chart({
            container: el.nativeElement,
            autoFit: fit,
            height,
            padding,
            theme,
        }));
        if (!xAxis && !yAxis) {
            chart.axis(false);
        }
        if (xAxis) {
            chart.axis('x', xAxis);
        }
        else {
            chart.axis('x', false);
        }
        if (yAxis) {
            chart.axis('y', yAxis);
        }
        else {
            chart.axis('y', false);
        }
        chart.legend(false);
        /** @type {?} */
        const tooltipOption = {
            showTitle: false,
            showMarkers: true,
            enterable: true,
            domStyles: {
                'g2-tooltip': { padding: '0px' },
                'g2-tooltip-title': { display: 'none' },
                'g2-tooltip-list-item': { margin: '4px' },
            },
        };
        if (tooltipType === 'mini') {
            tooltipOption.position = 'top';
            (/** @type {?} */ (tooltipOption.domStyles))['g2-tooltip'] = { padding: '0px', backgroundColor: 'transparent', boxShadow: 'none' };
            tooltipOption.itemTpl = `<li>{value}</li>`;
            tooltipOption.offset = 0;
        }
        chart.tooltip(tooltipOption);
        chart
            .area()
            .position('x*y')
            .tooltip('x*y', (/**
         * @param {?} x
         * @param {?} y
         * @return {?}
         */
        (x, y) => ({ name: x, value: y + yTooltipSuffix })))
            .shape('smooth');
        if (line) {
            chart.line().position('x*y').shape('smooth').tooltip(false);
        }
        chart.on(`plot:click`, (/**
         * @param {?} ev
         * @return {?}
         */
        (ev) => {
            /** @type {?} */
            const records = this._chart.getSnapRecords({ x: ev.x, y: ev.y });
            this.ngZone.run((/**
             * @return {?}
             */
            () => this.clickItem.emit({ item: records[0]._origin, ev })));
        }));
        chart.render();
        this.attachChart();
    }
    /**
     * @private
     * @return {?}
     */
    attachChart() {
        const { _chart, line, fit, height, animate, padding, data, color, borderColor, borderWidth } = this;
        if (!_chart || !data || data.length <= 0) {
            return;
        }
        /** @type {?} */
        const geoms = _chart.geometries;
        geoms.forEach((/**
         * @param {?} g
         * @return {?}
         */
        g => g.color(color)));
        if (line) {
            geoms[1].color(borderColor).size(borderWidth);
        }
        _chart.autoFit = fit;
        _chart.height = height;
        _chart.animate(animate);
        _chart.padding = padding;
        _chart.changeData(data);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.platform.isBrowser) {
            return;
        }
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => setTimeout((/**
         * @return {?}
         */
        () => this.install()), this.delay)));
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => this.attachChart()));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._chart) {
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => this._chart.destroy()));
        }
    }
}
G2MiniAreaComponent.decorators = [
    { type: Component, args: [{
                selector: 'g2-mini-area',
                exportAs: 'g2MiniArea',
                template: ``,
                host: {
                    '[style.height.px]': 'height',
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
G2MiniAreaComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone },
    { type: AlainConfigService },
    { type: Platform }
];
G2MiniAreaComponent.propDecorators = {
    delay: [{ type: Input }],
    color: [{ type: Input }],
    borderColor: [{ type: Input }],
    borderWidth: [{ type: Input }],
    height: [{ type: Input }],
    fit: [{ type: Input }],
    line: [{ type: Input }],
    animate: [{ type: Input }],
    xAxis: [{ type: Input }],
    yAxis: [{ type: Input }],
    padding: [{ type: Input }],
    data: [{ type: Input }],
    yTooltipSuffix: [{ type: Input }],
    tooltipType: [{ type: Input }],
    theme: [{ type: Input }],
    clickItem: [{ type: Output }]
};
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2MiniAreaComponent.prototype, "delay", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2MiniAreaComponent.prototype, "borderWidth", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2MiniAreaComponent.prototype, "height", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], G2MiniAreaComponent.prototype, "fit", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], G2MiniAreaComponent.prototype, "line", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], G2MiniAreaComponent.prototype, "animate", void 0);
if (false) {
    /** @type {?} */
    G2MiniAreaComponent.ngAcceptInputType_delay;
    /** @type {?} */
    G2MiniAreaComponent.ngAcceptInputType_borderWidth;
    /** @type {?} */
    G2MiniAreaComponent.ngAcceptInputType_height;
    /** @type {?} */
    G2MiniAreaComponent.ngAcceptInputType_fit;
    /** @type {?} */
    G2MiniAreaComponent.ngAcceptInputType_line;
    /** @type {?} */
    G2MiniAreaComponent.ngAcceptInputType_animate;
    /**
     * @type {?}
     * @private
     */
    G2MiniAreaComponent.prototype._chart;
    /** @type {?} */
    G2MiniAreaComponent.prototype.delay;
    /** @type {?} */
    G2MiniAreaComponent.prototype.color;
    /** @type {?} */
    G2MiniAreaComponent.prototype.borderColor;
    /** @type {?} */
    G2MiniAreaComponent.prototype.borderWidth;
    /** @type {?} */
    G2MiniAreaComponent.prototype.height;
    /** @type {?} */
    G2MiniAreaComponent.prototype.fit;
    /** @type {?} */
    G2MiniAreaComponent.prototype.line;
    /** @type {?} */
    G2MiniAreaComponent.prototype.animate;
    /** @type {?} */
    G2MiniAreaComponent.prototype.xAxis;
    /** @type {?} */
    G2MiniAreaComponent.prototype.yAxis;
    /** @type {?} */
    G2MiniAreaComponent.prototype.padding;
    /** @type {?} */
    G2MiniAreaComponent.prototype.data;
    /** @type {?} */
    G2MiniAreaComponent.prototype.yTooltipSuffix;
    /** @type {?} */
    G2MiniAreaComponent.prototype.tooltipType;
    /** @type {?} */
    G2MiniAreaComponent.prototype.theme;
    /** @type {?} */
    G2MiniAreaComponent.prototype.clickItem;
    /**
     * @type {?}
     * @private
     */
    G2MiniAreaComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    G2MiniAreaComponent.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    G2MiniAreaComponent.prototype.platform;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaS1hcmVhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NoYXJ0L21pbmktYXJlYS9taW5pLWFyZWEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBSU4sTUFBTSxFQUNOLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsS0FBSyxFQUFnQixNQUFNLFVBQVUsQ0FBQztBQUMvQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBNkIsTUFBTSxhQUFhLENBQUM7Ozs7QUFFdkcsb0NBSUM7OztJQUhDLDJCQUFPOztJQUNQLDJCQUFPOzs7Ozs7QUFJVCx5Q0FHQzs7O0lBRkMsbUNBQXFCOztJQUNyQixpQ0FBVTs7QUFjWixNQUFNLE9BQU8sbUJBQW1COzs7Ozs7OztJQW1DOUIsWUFBb0IsRUFBYyxFQUFVLE1BQWMsRUFBRSxTQUE2QixFQUFVLFFBQWtCO1FBQWpHLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQXlDLGFBQVEsR0FBUixRQUFRLENBQVU7O1FBbkI3RixVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLFVBQUssR0FBRyx5QkFBeUIsQ0FBQztRQUNsQyxnQkFBVyxHQUFHLFNBQVMsQ0FBQztRQUNULGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFDWCxRQUFHLEdBQUcsSUFBSSxDQUFDO1FBQ1gsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUNiLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFHL0IsWUFBTyxHQUErQixD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LEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7Ozs7WUFsQ0MsVUFBVTtZQUdWLE1BQU07WUFRQyxrQkFBa0I7WUFmbEIsUUFBUTs7O29CQXVEZCxLQUFLO29CQUNMLEtBQUs7MEJBQ0wsS0FBSzswQkFDTCxLQUFLO3FCQUNMLEtBQUs7a0JBQ0wsS0FBSzttQkFDTCxLQUFLO3NCQUNMLEtBQUs7b0JBQ0wsS0FBSztvQkFDTCxLQUFLO3NCQUNMLEtBQUs7bUJBQ0wsS0FBSzs2QkFDTCxLQUFLOzBCQUNMLEtBQUs7b0JBQ0wsS0FBSzt3QkFDTCxNQUFNOztBQWZpQjtJQUFkLFdBQVcsRUFBRTs7a0RBQVc7QUFHVjtJQUFkLFdBQVcsRUFBRTs7d0RBQWlCO0FBQ2hCO0lBQWQsV0FBVyxFQUFFOzttREFBYTtBQUNYO0lBQWYsWUFBWSxFQUFFOztnREFBWTtBQUNYO0lBQWYsWUFBWSxFQUFFOztpREFBYztBQUNiO0lBQWYsWUFBWSxFQUFFOztvREFBZ0I7OztJQXRCeEMsNENBQTRDOztJQUM1QyxrREFBa0Q7O0lBQ2xELDZDQUE2Qzs7SUFDN0MsMENBQTJDOztJQUMzQywyQ0FBNEM7O0lBQzVDLDhDQUErQzs7Ozs7SUFFL0MscUNBQXNCOztJQVF0QixvQ0FBa0M7O0lBQ2xDLG9DQUEyQzs7SUFDM0MsMENBQWlDOztJQUNqQywwQ0FBd0M7O0lBQ3hDLHFDQUFvQzs7SUFDcEMsa0NBQW9DOztJQUNwQyxtQ0FBc0M7O0lBQ3RDLHNDQUF3Qzs7SUFDeEMsb0NBQW9COztJQUNwQixvQ0FBb0I7O0lBQ3BCLHNDQUE0RDs7SUFDNUQsbUNBQXFDOztJQUNyQyw2Q0FBNkI7O0lBQzdCLDBDQUFxRDs7SUFDckQsb0NBQTJDOztJQUMzQyx3Q0FBOEQ7Ozs7O0lBSWxELGlDQUFzQjs7Ozs7SUFBRSxxQ0FBc0I7Ozs7O0lBQWlDLHVDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaGFydCwgRXZlbnQsIFR5cGVzIH0gZnJvbSAnQGFudHYvZzInO1xuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlLCBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyLCBOdW1iZXJJbnB1dCwgQm9vbGVhbklucHV0IH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEcyTWluaUFyZWFEYXRhIHtcbiAgeDogYW55O1xuICB5OiBhbnk7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHMk1pbmlBcmVhQ2xpY2tJdGVtIHtcbiAgaXRlbTogRzJNaW5pQXJlYURhdGE7XG4gIGV2OiBFdmVudDtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZzItbWluaS1hcmVhJyxcbiAgZXhwb3J0QXM6ICdnMk1pbmlBcmVhJyxcbiAgdGVtcGxhdGU6IGBgLFxuICBob3N0OiB7XG4gICAgJ1tzdHlsZS5oZWlnaHQucHhdJzogJ2hlaWdodCcsXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgRzJNaW5pQXJlYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZGVsYXk6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYm9yZGVyV2lkdGg6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfaGVpZ2h0OiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2ZpdDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbGluZTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYW5pbWF0ZTogQm9vbGVhbklucHV0O1xuXG4gIHByaXZhdGUgX2NoYXJ0OiBDaGFydDtcblxuICBnZXQgY2hhcnQoKTogQ2hhcnQge1xuICAgIHJldHVybiB0aGlzLl9jaGFydDtcbiAgfVxuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgZGVsYXkgPSAwO1xuICBASW5wdXQoKSBjb2xvciA9ICdyZ2JhKDI0LCAxNDQsIDI1NSwgMC4yKSc7XG4gIEBJbnB1dCgpIGJvcmRlckNvbG9yID0gJyMxODkwRkYnO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBib3JkZXJXaWR0aCA9IDI7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGhlaWdodCA9IDU2O1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZml0ID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGxpbmUgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGFuaW1hdGUgPSB0cnVlO1xuICBASW5wdXQoKSB4QXhpczogYW55O1xuICBASW5wdXQoKSB5QXhpczogYW55O1xuICBASW5wdXQoKSBwYWRkaW5nOiBudW1iZXIgfCBudW1iZXJbXSB8ICdhdXRvJyA9IFs4LCA4LCA4LCA4XTtcbiAgQElucHV0KCkgZGF0YTogRzJNaW5pQXJlYURhdGFbXSA9IFtdO1xuICBASW5wdXQoKSB5VG9vbHRpcFN1ZmZpeCA9ICcnO1xuICBASW5wdXQoKSB0b29sdGlwVHlwZTogJ21pbmknIHwgJ2RlZmF1bHQnID0gJ2RlZmF1bHQnO1xuICBASW5wdXQoKSB0aGVtZTogc3RyaW5nIHwgVHlwZXMuTG9vc2VPYmplY3Q7XG4gIEBPdXRwdXQoKSBjbGlja0l0ZW0gPSBuZXcgRXZlbnRFbWl0dGVyPEcyTWluaUFyZWFDbGlja0l0ZW0+KCk7XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsIGNvbmZpZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlLCBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSkge1xuICAgIGNvbmZpZ1Nydi5hdHRhY2hLZXkodGhpcywgJ2NoYXJ0JywgJ3RoZW1lJyk7XG4gIH1cblxuICBwcml2YXRlIGluc3RhbGwoKTogdm9pZCB7XG4gICAgY29uc3QgeyBlbCwgZml0LCBoZWlnaHQsIHBhZGRpbmcsIHhBeGlzLCB5QXhpcywgeVRvb2x0aXBTdWZmaXgsIHRvb2x0aXBUeXBlLCBsaW5lLCB0aGVtZSB9ID0gdGhpcztcbiAgICBjb25zdCBjaGFydCA9ICh0aGlzLl9jaGFydCA9IG5ldyBDaGFydCh7XG4gICAgICBjb250YWluZXI6IGVsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICBhdXRvRml0OiBmaXQsXG4gICAgICBoZWlnaHQsXG4gICAgICBwYWRkaW5nLFxuICAgICAgdGhlbWUsXG4gICAgfSkpO1xuXG4gICAgaWYgKCF4QXhpcyAmJiAheUF4aXMpIHtcbiAgICAgIGNoYXJ0LmF4aXMoZmFsc2UpO1xuICAgIH1cblxuICAgIGlmICh4QXhpcykge1xuICAgICAgY2hhcnQuYXhpcygneCcsIHhBeGlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hhcnQuYXhpcygneCcsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBpZiAoeUF4aXMpIHtcbiAgICAgIGNoYXJ0LmF4aXMoJ3knLCB5QXhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoYXJ0LmF4aXMoJ3knLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgY2hhcnQubGVnZW5kKGZhbHNlKTtcbiAgICBjb25zdCB0b29sdGlwT3B0aW9uOiBUeXBlcy5Ub29sdGlwT3B0aW9uID0ge1xuICAgICAgc2hvd1RpdGxlOiBmYWxzZSxcbiAgICAgIHNob3dNYXJrZXJzOiB0cnVlLFxuICAgICAgZW50ZXJhYmxlOiB0cnVlLFxuICAgICAgZG9tU3R5bGVzOiB7XG4gICAgICAgICdnMi10b29sdGlwJzogeyBwYWRkaW5nOiAnMHB4JyB9LFxuICAgICAgICAnZzItdG9vbHRpcC10aXRsZSc6IHsgZGlzcGxheTogJ25vbmUnIH0sXG4gICAgICAgICdnMi10b29sdGlwLWxpc3QtaXRlbSc6IHsgbWFyZ2luOiAnNHB4JyB9LFxuICAgICAgfSxcbiAgICB9O1xuICAgIGlmICh0b29sdGlwVHlwZSA9PT0gJ21pbmknKSB7XG4gICAgICB0b29sdGlwT3B0aW9uLnBvc2l0aW9uID0gJ3RvcCc7XG4gICAgICB0b29sdGlwT3B0aW9uLmRvbVN0eWxlcyFbJ2cyLXRvb2x0aXAnXSA9IHsgcGFkZGluZzogJzBweCcsIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JywgYm94U2hhZG93OiAnbm9uZScgfTtcbiAgICAgIHRvb2x0aXBPcHRpb24uaXRlbVRwbCA9IGA8bGk+e3ZhbHVlfTwvbGk+YDtcbiAgICAgIHRvb2x0aXBPcHRpb24ub2Zmc2V0ID0gMDtcbiAgICB9XG4gICAgY2hhcnQudG9vbHRpcCh0b29sdGlwT3B0aW9uKTtcblxuICAgIGNoYXJ0XG4gICAgICAuYXJlYSgpXG4gICAgICAucG9zaXRpb24oJ3gqeScpXG4gICAgICAudG9vbHRpcCgneCp5JywgKHgsIHkpID0+ICh7IG5hbWU6IHgsIHZhbHVlOiB5ICsgeVRvb2x0aXBTdWZmaXggfSkpXG4gICAgICAuc2hhcGUoJ3Ntb290aCcpO1xuXG4gICAgaWYgKGxpbmUpIHtcbiAgICAgIGNoYXJ0LmxpbmUoKS5wb3NpdGlvbigneCp5Jykuc2hhcGUoJ3Ntb290aCcpLnRvb2x0aXAoZmFsc2UpO1xuICAgIH1cblxuICAgIGNoYXJ0Lm9uKGBwbG90OmNsaWNrYCwgKGV2OiBFdmVudCkgPT4ge1xuICAgICAgY29uc3QgcmVjb3JkcyA9IHRoaXMuX2NoYXJ0LmdldFNuYXBSZWNvcmRzKHsgeDogZXYueCwgeTogZXYueSB9KTtcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB0aGlzLmNsaWNrSXRlbS5lbWl0KHsgaXRlbTogcmVjb3Jkc1swXS5fb3JpZ2luLCBldiB9KSk7XG4gICAgfSk7XG5cbiAgICBjaGFydC5yZW5kZXIoKTtcblxuICAgIHRoaXMuYXR0YWNoQ2hhcnQoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXR0YWNoQ2hhcnQoKTogdm9pZCB7XG4gICAgY29uc3QgeyBfY2hhcnQsIGxpbmUsIGZpdCwgaGVpZ2h0LCBhbmltYXRlLCBwYWRkaW5nLCBkYXRhLCBjb2xvciwgYm9yZGVyQ29sb3IsIGJvcmRlcldpZHRoIH0gPSB0aGlzO1xuICAgIGlmICghX2NoYXJ0IHx8ICFkYXRhIHx8IGRhdGEubGVuZ3RoIDw9IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBnZW9tcyA9IF9jaGFydC5nZW9tZXRyaWVzO1xuICAgIGdlb21zLmZvckVhY2goZyA9PiBnLmNvbG9yKGNvbG9yKSk7XG4gICAgaWYgKGxpbmUpIHtcbiAgICAgIGdlb21zWzFdLmNvbG9yKGJvcmRlckNvbG9yKS5zaXplKGJvcmRlcldpZHRoKTtcbiAgICB9XG5cbiAgICBfY2hhcnQuYXV0b0ZpdCA9IGZpdDtcbiAgICBfY2hhcnQuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIF9jaGFydC5hbmltYXRlKGFuaW1hdGUpO1xuICAgIF9jaGFydC5wYWRkaW5nID0gcGFkZGluZztcblxuICAgIF9jaGFydC5jaGFuZ2VEYXRhKGRhdGEpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5zdGFsbCgpLCB0aGlzLmRlbGF5KSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLmF0dGFjaENoYXJ0KCkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2NoYXJ0KSB7XG4gICAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLl9jaGFydC5kZXN0cm95KCkpO1xuICAgIH1cbiAgfVxufVxuIl19