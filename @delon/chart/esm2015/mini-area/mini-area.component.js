/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
// tslint:disable:no-any
import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input, NgZone, ViewChild, } from '@angular/core';
import { toBoolean, toNumber } from '@delon/util';
export class G2MiniAreaComponent {
    /**
     * @param {?} zone
     */
    constructor(zone) {
        this.zone = zone;
        // #region fields
        this.color = 'rgba(24, 144, 255, 0.2)';
        this.borderColor = '#1890FF';
        this._borderWidth = 2;
        this._fit = true;
        this._line = false;
        this._animate = true;
        this.padding = [8, 8, 8, 8];
        this.yTooltipSuffix = '';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set borderWidth(value) {
        this._borderWidth = toNumber(value);
    }
    /**
     * @return {?}
     */
    get height() {
        return this._height;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set height(value) {
        this._height = toNumber(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set fit(value) {
        this._fit = toBoolean(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set line(value) {
        this._line = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get animate() {
        return this._animate;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set animate(value) {
        this._animate = toBoolean(value);
    }
    /**
     * @return {?}
     */
    install() {
        if (!this.data || (this.data && this.data.length < 1))
            return;
        this.node.nativeElement.innerHTML = '';
        /** @type {?} */
        const chart = new G2.Chart({
            container: this.node.nativeElement,
            forceFit: this._fit,
            height: +this.height,
            animate: this.animate,
            padding: this.padding,
            legend: null,
        });
        if (!this.xAxis && !this.yAxis) {
            chart.axis(false);
        }
        if (this.xAxis) {
            chart.axis('x', this.xAxis);
        }
        else {
            chart.axis('x', false);
        }
        if (this.yAxis) {
            chart.axis('y', this.yAxis);
        }
        else {
            chart.axis('y', false);
        }
        /** @type {?} */
        const dataConfig = {
            x: {
                type: 'cat',
                range: [0, 1],
                xAxis: this.xAxis,
            },
            y: {
                min: 0,
                yAxis: this.yAxis,
            },
        };
        chart.tooltip({
            'showTitle': false,
            'hideMarkders': false,
            'g2-tooltip': { padding: 4 },
            'g2-tooltip-list-item': { margin: `0px 4px` },
        });
        /** @type {?} */
        const view = chart.view();
        view.source(this.data, dataConfig);
        view
            .area()
            .position('x*y')
            .color(this.color)
            .tooltip('x*y', (x, y) => {
            return {
                name: x,
                value: y + this.yTooltipSuffix,
            };
        })
            .shape('smooth')
            .style({ fillOpacity: 1 });
        if (this._line) {
            /** @type {?} */
            const view2 = chart.view();
            view2.source(this.data, dataConfig);
            view2
                .line()
                .position('x*y')
                .color(this.borderColor)
                .size(this._borderWidth)
                .shape('smooth');
            view2.tooltip(false);
        }
        chart.render();
        this.chart = chart;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.zone.runOutsideAngular(() => setTimeout(() => this.install()));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.chart) {
            this.chart.destroy();
            this.chart = null;
        }
    }
}
G2MiniAreaComponent.decorators = [
    { type: Component, args: [{
                selector: 'g2-mini-area',
                template: `<div #container></div>`,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
G2MiniAreaComponent.ctorParameters = () => [
    { type: NgZone }
];
G2MiniAreaComponent.propDecorators = {
    color: [{ type: Input }],
    borderColor: [{ type: Input }],
    borderWidth: [{ type: Input }],
    height: [{ type: HostBinding, args: ['style.height.px',] }, { type: Input }],
    fit: [{ type: Input }],
    line: [{ type: Input }],
    animate: [{ type: Input }],
    xAxis: [{ type: Input }],
    yAxis: [{ type: Input }],
    padding: [{ type: Input }],
    data: [{ type: Input }],
    yTooltipSuffix: [{ type: Input }],
    node: [{ type: ViewChild, args: ['container',] }]
};
if (false) {
    /** @type {?} */
    G2MiniAreaComponent.prototype.color;
    /** @type {?} */
    G2MiniAreaComponent.prototype.borderColor;
    /** @type {?} */
    G2MiniAreaComponent.prototype._borderWidth;
    /** @type {?} */
    G2MiniAreaComponent.prototype._height;
    /** @type {?} */
    G2MiniAreaComponent.prototype._fit;
    /** @type {?} */
    G2MiniAreaComponent.prototype._line;
    /** @type {?} */
    G2MiniAreaComponent.prototype._animate;
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
    G2MiniAreaComponent.prototype.node;
    /** @type {?} */
    G2MiniAreaComponent.prototype.chart;
    /** @type {?} */
    G2MiniAreaComponent.prototype.zone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaS1hcmVhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9jaGFydC9taW5pLWFyZWEvIiwic291cmNlcyI6WyJtaW5pLWFyZWEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFdBQVcsRUFDWCxLQUFLLEVBQ0wsTUFBTSxFQUdOLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQVNsRCxNQUFNLE9BQU8sbUJBQW1COzs7O0lBOEQ5QixZQUFvQixJQUFZO1FBQVosU0FBSSxHQUFKLElBQUksQ0FBUTs7UUExRGhDLFVBQUssR0FBRyx5QkFBeUIsQ0FBQztRQUVsQyxnQkFBVyxHQUFHLFNBQVMsQ0FBQztRQUtoQixpQkFBWSxHQUFHLENBQUMsQ0FBQztRQWdCakIsU0FBSSxHQUFHLElBQUksQ0FBQztRQU1aLFVBQUssR0FBRyxLQUFLLENBQUM7UUFTZCxhQUFRLEdBQUcsSUFBSSxDQUFDO1FBT3hCLFlBQU8sR0FBYSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBSWpDLG1CQUFjLEdBQUcsRUFBRSxDQUFDO0lBU2dCLENBQUM7Ozs7O0lBdkRyQyxJQUNJLFdBQVcsQ0FBQyxLQUFVO1FBQ3hCLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFHRCxJQUVJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFDRCxJQUFJLE1BQU0sQ0FBQyxLQUFVO1FBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Ozs7O0lBR0QsSUFDSSxH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ZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUFiQyxNQUFNOzs7b0JBaUJMLEtBQUs7MEJBRUwsS0FBSzswQkFFTCxLQUFLO3FCQU1MLFdBQVcsU0FBQyxpQkFBaUIsY0FDN0IsS0FBSztrQkFTTCxLQUFLO21CQU1MLEtBQUs7c0JBTUwsS0FBSztvQkFTTCxLQUFLO29CQUVMLEtBQUs7c0JBRUwsS0FBSzttQkFFTCxLQUFLOzZCQUVMLEtBQUs7bUJBS0wsU0FBUyxTQUFDLFdBQVc7Ozs7SUF0RHRCLG9DQUNrQzs7SUFDbEMsMENBQ3dCOztJQUt4QiwyQ0FBeUI7O0lBVXpCLHNDQUFnQjs7SUFNaEIsbUNBQW9COztJQU1wQixvQ0FBc0I7O0lBU3RCLHVDQUF3Qjs7SUFFeEIsb0NBQ1c7O0lBQ1gsb0NBQ1c7O0lBQ1gsc0NBQ2lDOztJQUNqQyxtQ0FDMEQ7O0lBQzFELDZDQUNvQjs7SUFJcEIsbUNBQ3lCOztJQUV6QixvQ0FBbUI7O0lBRVAsbUNBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6bm8tYW55XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0b0Jvb2xlYW4sIHRvTnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5kZWNsYXJlIHZhciBHMjogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnMi1taW5pLWFyZWEnLFxuICB0ZW1wbGF0ZTogYDxkaXYgI2NvbnRhaW5lcj48L2Rpdj5gLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRzJNaW5pQXJlYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKVxuICBjb2xvciA9ICdyZ2JhKDI0LCAxNDQsIDI1NSwgMC4yKSc7XG4gIEBJbnB1dCgpXG4gIGJvcmRlckNvbG9yID0gJyMxODkwRkYnO1xuICBASW5wdXQoKVxuICBzZXQgYm9yZGVyV2lkdGgodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX2JvcmRlcldpZHRoID0gdG9OdW1iZXIodmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX2JvcmRlcldpZHRoID0gMjtcblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmhlaWdodC5weCcpXG4gIEBJbnB1dCgpXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcbiAgfVxuICBzZXQgaGVpZ2h0KHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl9oZWlnaHQgPSB0b051bWJlcih2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfaGVpZ2h0O1xuXG4gIEBJbnB1dCgpXG4gIHNldCBmaXQodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX2ZpdCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfZml0ID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBzZXQgbGluZSh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5fbGluZSA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfbGluZSA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBhbmltYXRlKCkge1xuICAgIHJldHVybiB0aGlzLl9hbmltYXRlO1xuICB9XG4gIHNldCBhbmltYXRlKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl9hbmltYXRlID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9hbmltYXRlID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICB4QXhpczogYW55O1xuICBASW5wdXQoKVxuICB5QXhpczogYW55O1xuICBASW5wdXQoKVxuICBwYWRkaW5nOiBudW1iZXJbXSA9IFs4LCA4LCA4LCA4XTtcbiAgQElucHV0KClcbiAgZGF0YTogQXJyYXk8eyB4OiBudW1iZXI7IHk6IG51bWJlcjsgW2tleTogc3RyaW5nXTogYW55IH0+O1xuICBASW5wdXQoKVxuICB5VG9vbHRpcFN1ZmZpeCA9ICcnO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBAVmlld0NoaWxkKCdjb250YWluZXInKVxuICBwcml2YXRlIG5vZGU6IEVsZW1lbnRSZWY7XG5cbiAgcHJpdmF0ZSBjaGFydDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgem9uZTogTmdab25lKSB7IH1cblxuICBwcml2YXRlIGluc3RhbGwoKSB7XG4gICAgaWYgKCF0aGlzLmRhdGEgfHwgKHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEubGVuZ3RoIDwgMSkpIHJldHVybjtcblxuICAgIHRoaXMubm9kZS5uYXRpdmVFbGVtZW50LmlubmVySFRNTCA9ICcnO1xuXG4gICAgY29uc3QgY2hhcnQgPSBuZXcgRzIuQ2hhcnQoe1xuICAgICAgY29udGFpbmVyOiB0aGlzLm5vZGUubmF0aXZlRWxlbWVudCxcbiAgICAgIGZvcmNlRml0OiB0aGlzLl9maXQsXG4gICAgICBoZWlnaHQ6ICt0aGlzLmhlaWdodCxcbiAgICAgIGFuaW1hdGU6IHRoaXMuYW5pbWF0ZSxcbiAgICAgIHBhZGRpbmc6IHRoaXMucGFkZGluZyxcbiAgICAgIGxlZ2VuZDogbnVsbCxcbiAgICB9KTtcblxuICAgIGlmICghdGhpcy54QXhpcyAmJiAhdGhpcy55QXhpcykge1xuICAgICAgY2hhcnQuYXhpcyhmYWxzZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMueEF4aXMpIHtcbiAgICAgIGNoYXJ0LmF4aXMoJ3gnLCB0aGlzLnhBeGlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hhcnQuYXhpcygneCcsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy55QXhpcykge1xuICAgICAgY2hhcnQuYXhpcygneScsIHRoaXMueUF4aXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGFydC5heGlzKCd5JywgZmFsc2UpO1xuICAgIH1cblxuICAgIGNvbnN0IGRhdGFDb25maWcgPSB7XG4gICAgICB4OiB7XG4gICAgICAgIHR5cGU6ICdjYXQnLFxuICAgICAgICByYW5nZTogWzAsIDFdLFxuICAgICAgICB4QXhpczogdGhpcy54QXhpcyxcbiAgICAgIH0sXG4gICAgICB5OiB7XG4gICAgICAgIG1pbjogMCxcbiAgICAgICAgeUF4aXM6IHRoaXMueUF4aXMsXG4gICAgICB9LFxuICAgIH07XG5cbiAgICBjaGFydC50b29sdGlwKHtcbiAgICAgICdzaG93VGl0bGUnOiBmYWxzZSxcbiAgICAgICdoaWRlTWFya2RlcnMnOiBmYWxzZSxcbiAgICAgICdnMi10b29sdGlwJzogeyBwYWRkaW5nOiA0IH0sXG4gICAgICAnZzItdG9vbHRpcC1saXN0LWl0ZW0nOiB7IG1hcmdpbjogYDBweCA0cHhgIH0sXG4gICAgfSk7XG5cbiAgICBjb25zdCB2aWV3ID0gY2hhcnQudmlldygpO1xuICAgIHZpZXcuc291cmNlKHRoaXMuZGF0YSwgZGF0YUNvbmZpZyk7XG5cbiAgICB2aWV3XG4gICAgICAuYXJlYSgpXG4gICAgICAucG9zaXRpb24oJ3gqeScpXG4gICAgICAuY29sb3IodGhpcy5jb2xvcilcbiAgICAgIC50b29sdGlwKCd4KnknLCAoeCwgeSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG5hbWU6IHgsXG4gICAgICAgICAgdmFsdWU6IHkgKyB0aGlzLnlUb29sdGlwU3VmZml4LFxuICAgICAgICB9O1xuICAgICAgfSlcbiAgICAgIC5zaGFwZSgnc21vb3RoJylcbiAgICAgIC5zdHlsZSh7IGZpbGxPcGFjaXR5OiAxIH0pO1xuXG4gICAgaWYgKHRoaXMuX2xpbmUpIHtcbiAgICAgIGNvbnN0IHZpZXcyID0gY2hhcnQudmlldygpO1xuICAgICAgdmlldzIuc291cmNlKHRoaXMuZGF0YSwgZGF0YUNvbmZpZyk7XG4gICAgICB2aWV3MlxuICAgICAgICAubGluZSgpXG4gICAgICAgIC5wb3NpdGlvbigneCp5JylcbiAgICAgICAgLmNvbG9yKHRoaXMuYm9yZGVyQ29sb3IpXG4gICAgICAgIC5zaXplKHRoaXMuX2JvcmRlcldpZHRoKVxuICAgICAgICAuc2hhcGUoJ3Ntb290aCcpO1xuICAgICAgdmlldzIudG9vbHRpcChmYWxzZSk7XG4gICAgfVxuICAgIGNoYXJ0LnJlbmRlcigpO1xuICAgIHRoaXMuY2hhcnQgPSBjaGFydDtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5zdGFsbCgpKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jaGFydCkge1xuICAgICAgdGhpcy5jaGFydC5kZXN0cm95KCk7XG4gICAgICB0aGlzLmNoYXJ0ID0gbnVsbDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==