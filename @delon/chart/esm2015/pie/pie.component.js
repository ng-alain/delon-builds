/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ElementRef, NgZone, ChangeDetectionStrategy, ChangeDetectorRef, Renderer2, } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { toNumber, toBoolean, updateHostClass } from '@delon/util';
export class G2PieComponent {
    // #endregion
    /**
     * @param {?} el
     * @param {?} rend
     * @param {?} cd
     * @param {?} zone
     */
    constructor(el, rend, cd, zone) {
        this.el = el;
        this.rend = rend;
        this.cd = cd;
        this.zone = zone;
        this.scroll$ = null;
        this.initFlag = false;
        this.legendData = [];
        this._animate = true;
        this.color = 'rgba(24, 144, 255, 0.85)';
        this._height = 0;
        this._hasLegend = false;
        this._legendBlock = false;
        this.inner = 0.75;
        this.padding = [12, 0, 12, 0];
        this._tooltip = true;
        this._lineWidth = 0;
        this._select = true;
    }
    // #region fields
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
     * @return {?}
     */
    get hasLegend() {
        return this._hasLegend;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set hasLegend(value) {
        this._hasLegend = toBoolean(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set legendBlock(value) {
        this._legendBlock = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get percent() {
        return this._percent;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set percent(value) {
        this._percent = toNumber(value);
    }
    /**
     * @return {?}
     */
    get tooltip() {
        return this._tooltip;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set tooltip(value) {
        this._tooltip = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get lineWidth() {
        return this._lineWidth;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set lineWidth(value) {
        this._lineWidth = toNumber(value);
    }
    /**
     * @return {?}
     */
    get select() {
        return this._select;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set select(value) {
        this._select = toBoolean(value);
    }
    /**
     * @return {?}
     */
    setCls() {
        updateHostClass(this.el.nativeElement, this.rend, {
            'g2-pie': true,
            'g2-pie__legend-has': this.hasLegend,
            'g2-pie__legend-block': this._legendBlock,
            'g2-pie__mini': typeof this.percent !== 'undefined',
        }, true);
    }
    /**
     * @return {?}
     */
    runInstall() {
        this.zone.runOutsideAngular(() => setTimeout(() => this.install()));
    }
    /**
     * @return {?}
     */
    install() {
        this.legendBlock = this.el.nativeElement.clientWidth <= 380;
        this.setCls();
        /** @type {?} */
        let formatColor;
        /** @type {?} */
        const isPercent = typeof this.percent !== 'undefined';
        if (isPercent) {
            this.select = false;
            this.tooltip = false;
            formatColor = value => value === '占比' ? this.color || 'rgba(24, 144, 255, 0.85)' : '#F0F2F5';
            this.data = [
                {
                    x: '占比',
                    y: this.percent,
                },
                {
                    x: '反比',
                    y: 100 - this.percent,
                },
            ];
        }
        if (!this.data || (this.data && this.data.length < 1))
            return;
        if (this.chart)
            this.chart.destroy();
        this.node.nativeElement.innerHTML = '';
        /** @type {?} */
        const chart = new G2.Chart({
            container: this.node.nativeElement,
            forceFit: true,
            height: this.height,
            padding: this.padding,
            animate: this._animate,
        });
        if (!this.tooltip) {
            chart.tooltip(false);
        }
        else {
            chart.tooltip({
                showTitle: false,
                itemTpl: '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value} %</li>',
            });
        }
        chart.axis(false);
        chart.legend(false);
        /** @type {?} */
        const dv = new DataSet.DataView();
        dv.source(this.data).transform({
            type: 'percent',
            field: 'y',
            dimension: 'x',
            as: 'percent',
        });
        chart.source(dv, {
            x: {
                type: 'cat',
                range: [0, 1],
            },
            y: {
                min: 0,
            },
        });
        chart.coord('theta', { innerRadius: this.inner });
        chart
            .intervalStack()
            .position('y')
            .style({ lineWidth: this.lineWidth, stroke: '#fff' })
            .tooltip('x*percent', (item, percent) => {
            return {
                name: item,
                value: this.hasLegend ? percent : (percent * 100).toFixed(2),
            };
        })
            .color('x', isPercent ? formatColor : this.colors)
            .select(this.select);
        chart.render();
        this.chart = chart;
        if (this.hasLegend) {
            this.zone.run(() => {
                this.legendData = chart
                    .getAllGeoms()[0]
                    ._attrs.dataArray.map((item) => {
                    /** @type {?} */
                    const origin = item[0]._origin;
                    origin.color = item[0].color;
                    origin.checked = true;
                    origin.percent = (origin.percent * 100).toFixed(2);
                    return origin;
                });
                this.cd.detectChanges();
            });
        }
    }
    /**
     * @return {?}
     */
    installResizeEvent() {
        if (this.scroll$ || !this.hasLegend)
            return;
        this.scroll$ = fromEvent(window, 'resize')
            .pipe(debounceTime(200))
            .subscribe(() => this.runInstall());
    }
    /**
     * @param {?} i
     * @return {?}
     */
    _click(i) {
        this.legendData[i].checked = !this.legendData[i].checked;
        if (this.chart) {
            this.chart.filter('x', (val, item) => item.checked);
            this.chart.repaint();
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.initFlag = true;
        this.runInstall();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.installResizeEvent();
        if (this.initFlag)
            this.runInstall();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.scroll$)
            this.scroll$.unsubscribe();
        if (this.chart) {
            this.chart.destroy();
            this.chart = null;
        }
    }
}
G2PieComponent.decorators = [
    { type: Component, args: [{
                selector: 'g2-pie',
                template: "<div class=\"g2-pie__chart\">\n  <div #container></div>\n  <div *ngIf=\"subTitle || total\" class=\"g2-pie__total\">\n    <h4 *ngIf=\"subTitle\" class=\"g2-pie__total-title\" [innerHTML]=\"subTitle\"></h4>\n    <div *ngIf=\"total\" class=\"g2-pie__total-stat\" [innerHTML]=\"total\"></div>\n  </div>\n</div>\n<ul *ngIf=\"hasLegend && legendData?.length\" class=\"g2-pie__legend\">\n  <li *ngFor=\"let item of legendData; let index = index\" (click)=\"_click(index)\" class=\"g2-pie__legend-item\">\n    <span class=\"g2-pie__legend-dot\" [ngStyle]=\"{'background-color': !item.checked ? '#aaa' : item.color}\"></span>\n    <span class=\"g2-pie__legend-title\">{{item.x}}</span>\n    <nz-divider nzType=\"vertical\"></nz-divider>\n    <span class=\"g2-pie__legend-percent\">{{item.percent}}%</span>\n    <span class=\"g2-pie__legend-value\" [innerHTML]=\"valueFormat ? valueFormat(item.y) : item.y\"></span>\n  </li>\n</ul>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
G2PieComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: NgZone }
];
G2PieComponent.propDecorators = {
    node: [{ type: ViewChild, args: ['container',] }],
    animate: [{ type: Input }],
    color: [{ type: Input }],
    subTitle: [{ type: Input }],
    total: [{ type: Input }],
    height: [{ type: Input }],
    hasLegend: [{ type: Input }],
    legendBlock: [{ type: Input }],
    inner: [{ type: Input }],
    padding: [{ type: Input }],
    percent: [{ type: Input }],
    tooltip: [{ type: Input }],
    lineWidth: [{ type: Input }],
    select: [{ type: Input }],
    data: [{ type: Input }],
    valueFormat: [{ type: Input }],
    colors: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    G2PieComponent.prototype.scroll$;
    /** @type {?} */
    G2PieComponent.prototype.node;
    /** @type {?} */
    G2PieComponent.prototype.chart;
    /** @type {?} */
    G2PieComponent.prototype.initFlag;
    /** @type {?} */
    G2PieComponent.prototype.legendData;
    /** @type {?} */
    G2PieComponent.prototype._animate;
    /** @type {?} */
    G2PieComponent.prototype.color;
    /** @type {?} */
    G2PieComponent.prototype.subTitle;
    /** @type {?} */
    G2PieComponent.prototype.total;
    /** @type {?} */
    G2PieComponent.prototype._height;
    /** @type {?} */
    G2PieComponent.prototype._hasLegend;
    /** @type {?} */
    G2PieComponent.prototype._legendBlock;
    /** @type {?} */
    G2PieComponent.prototype.inner;
    /** @type {?} */
    G2PieComponent.prototype.padding;
    /** @type {?} */
    G2PieComponent.prototype._percent;
    /** @type {?} */
    G2PieComponent.prototype._tooltip;
    /** @type {?} */
    G2PieComponent.prototype._lineWidth;
    /** @type {?} */
    G2PieComponent.prototype._select;
    /** @type {?} */
    G2PieComponent.prototype.data;
    /** @type {?} */
    G2PieComponent.prototype.valueFormat;
    /** @type {?} */
    G2PieComponent.prototype.colors;
    /** @type {?} */
    G2PieComponent.prototype.el;
    /** @type {?} */
    G2PieComponent.prototype.rend;
    /** @type {?} */
    G2PieComponent.prototype.cd;
    /** @type {?} */
    G2PieComponent.prototype.zone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9jaGFydC9waWUvIiwic291cmNlcyI6WyJwaWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUdWLE1BQU0sRUFDTix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBRWpCLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQWdCLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBVW5FLE1BQU0sT0FBTyxjQUFjOzs7Ozs7OztJQWtHekIsWUFDVSxFQUFjLEVBQ2QsSUFBZSxFQUNmLEVBQXFCLEVBQ3JCLElBQVk7UUFIWixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2QsU0FBSSxHQUFKLElBQUksQ0FBVztRQUNmLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBQ3JCLFNBQUksR0FBSixJQUFJLENBQVE7UUFyR2QsWUFBTyxHQUFpQixJQUFJLENBQUM7UUFLN0IsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUN6QixlQUFVLEdBQVUsRUFBRSxDQUFDO1FBUWYsYUFBUSxHQUFHLElBQUksQ0FBQztRQUd4QixVQUFLLEdBQUcsMEJBQTBCLENBQUM7UUFhM0IsWUFBTyxHQUFHLENBQUMsQ0FBQztRQVNaLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFNbkIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFHN0IsVUFBSyxHQUFHLElBQUksQ0FBQztRQUViLFlBQU8sR0FBYSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBa0IzQixhQUFRLEdBQUcsSUFBSSxD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LENBQUMsTUFBTTthQUNoRDs7OztZQXBCQyxVQUFVO1lBT1YsU0FBUztZQUZULGlCQUFpQjtZQUZqQixNQUFNOzs7bUJBb0JMLFNBQVMsU0FBQyxXQUFXO3NCQVNyQixLQUFLO29CQU1MLEtBQUs7dUJBRUwsS0FBSztvQkFFTCxLQUFLO3FCQUdMLEtBQUs7d0JBU0wsS0FBSzswQkFTTCxLQUFLO29CQU1MLEtBQUs7c0JBRUwsS0FBSztzQkFHTCxLQUFLO3NCQVNMLEtBQUs7d0JBU0wsS0FBSztxQkFTTCxLQUFLO21CQVNMLEtBQUs7MEJBRUwsS0FBSztxQkFFTCxLQUFLOzs7O0lBNUZOLGlDQUFxQzs7SUFDckMsOEJBQ3lCOztJQUV6QiwrQkFBbUI7O0lBQ25CLGtDQUF5Qjs7SUFDekIsb0NBQXVCOztJQVF2QixrQ0FBd0I7O0lBRXhCLCtCQUNtQzs7SUFDbkMsa0NBQ2lCOztJQUNqQiwrQkFDYzs7SUFTZCxpQ0FBb0I7O0lBU3BCLG9DQUEyQjs7SUFNM0Isc0NBQTZCOztJQUU3QiwrQkFDYTs7SUFDYixpQ0FDbUM7O0lBU25DLGtDQUF5Qjs7SUFTekIsa0NBQXdCOztJQVN4QixvQ0FBdUI7O0lBU3ZCLGlDQUF1Qjs7SUFFdkIsOEJBQ21FOztJQUNuRSxxQ0FDc0I7O0lBQ3RCLGdDQUNjOztJQUtaLDRCQUFzQjs7SUFDdEIsOEJBQXVCOztJQUN2Qiw0QkFBNkI7O0lBQzdCLDhCQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIFZpZXdDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgT25EZXN0cm95LFxuICBPbkNoYW5nZXMsXG4gIE5nWm9uZSxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBBZnRlclZpZXdJbml0LFxuICBSZW5kZXJlcjIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IHRvTnVtYmVyLCB0b0Jvb2xlYW4sIHVwZGF0ZUhvc3RDbGFzcyB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuZGVjbGFyZSB2YXIgRzI6IGFueTtcbmRlY2xhcmUgdmFyIERhdGFTZXQ6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZzItcGllJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BpZS5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBHMlBpZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0IHtcbiAgcHJpdmF0ZSBzY3JvbGwkOiBTdWJzY3JpcHRpb24gPSBudWxsO1xuICBAVmlld0NoaWxkKCdjb250YWluZXInKVxuICBwcml2YXRlIG5vZGU6IEVsZW1lbnRSZWY7XG5cbiAgcHJpdmF0ZSBjaGFydDogYW55O1xuICBwcml2YXRlIGluaXRGbGFnID0gZmFsc2U7XG4gIGxlZ2VuZERhdGE6IGFueVtdID0gW107XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKVxuICBzZXQgYW5pbWF0ZSh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5fYW5pbWF0ZSA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfYW5pbWF0ZSA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgY29sb3IgPSAncmdiYSgyNCwgMTQ0LCAyNTUsIDAuODUpJztcbiAgQElucHV0KClcbiAgc3ViVGl0bGU6IHN0cmluZztcbiAgQElucHV0KClcbiAgdG90YWw6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBnZXQgaGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLl9oZWlnaHQ7XG4gIH1cbiAgc2V0IGhlaWdodCh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5faGVpZ2h0ID0gdG9OdW1iZXIodmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX2hlaWdodCA9IDA7XG5cbiAgQElucHV0KClcbiAgZ2V0IGhhc0xlZ2VuZCgpIHtcbiAgICByZXR1cm4gdGhpcy5faGFzTGVnZW5kO1xuICB9XG4gIHNldCBoYXNMZWdlbmQodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX2hhc0xlZ2VuZCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfaGFzTGVnZW5kID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgc2V0IGxlZ2VuZEJsb2NrKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl9sZWdlbmRCbG9jayA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfbGVnZW5kQmxvY2sgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBpbm5lciA9IDAuNzU7XG4gIEBJbnB1dCgpXG4gIHBhZGRpbmc6IG51bWJlcltdID0gWzEyLCAwLCAxMiwgMF07XG5cbiAgQElucHV0KClcbiAgZ2V0IHBlcmNlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BlcmNlbnQ7XG4gIH1cbiAgc2V0IHBlcmNlbnQodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX3BlcmNlbnQgPSB0b051bWJlcih2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfcGVyY2VudDogbnVtYmVyO1xuXG4gIEBJbnB1dCgpXG4gIGdldCB0b29sdGlwKCkge1xuICAgIHJldHVybiB0aGlzLl90b29sdGlwO1xuICB9XG4gIHNldCB0b29sdGlwKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl90b29sdGlwID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF90b29sdGlwID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBnZXQgbGluZVdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLl9saW5lV2lkdGg7XG4gIH1cbiAgc2V0IGxpbmVXaWR0aCh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5fbGluZVdpZHRoID0gdG9OdW1iZXIodmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX2xpbmVXaWR0aCA9IDA7XG5cbiAgQElucHV0KClcbiAgZ2V0IHNlbGVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0O1xuICB9XG4gIHNldCBzZWxlY3QodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX3NlbGVjdCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfc2VsZWN0ID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBkYXRhOiBBcnJheTx7IHg6IG51bWJlciB8IHN0cmluZzsgeTogbnVtYmVyOyBba2V5OiBzdHJpbmddOiBhbnkgfT47XG4gIEBJbnB1dCgpXG4gIHZhbHVlRm9ybWF0OiBGdW5jdGlvbjtcbiAgQElucHV0KClcbiAgY29sb3JzOiBhbnlbXTtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmQ6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHpvbmU6IE5nWm9uZSxcbiAgKSB7fVxuXG4gIHByaXZhdGUgc2V0Q2xzKCkge1xuICAgIHVwZGF0ZUhvc3RDbGFzcyhcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudCxcbiAgICAgIHRoaXMucmVuZCxcbiAgICAgIHtcbiAgICAgICAgJ2cyLXBpZSc6IHRydWUsXG4gICAgICAgICdnMi1waWVfX2xlZ2VuZC1oYXMnOiB0aGlzLmhhc0xlZ2VuZCxcbiAgICAgICAgJ2cyLXBpZV9fbGVnZW5kLWJsb2NrJzogdGhpcy5fbGVnZW5kQmxvY2ssXG4gICAgICAgICdnMi1waWVfX21pbmknOiB0eXBlb2YgdGhpcy5wZXJjZW50ICE9PSAndW5kZWZpbmVkJyxcbiAgICAgIH0sXG4gICAgICB0cnVlLFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHJ1bkluc3RhbGwoKSB7XG4gICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbnN0YWxsKCkpKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5zdGFsbCgpIHtcbiAgICB0aGlzLmxlZ2VuZEJsb2NrID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoIDw9IDM4MDtcbiAgICB0aGlzLnNldENscygpO1xuXG4gICAgbGV0IGZvcm1hdENvbG9yO1xuICAgIGNvbnN0IGlzUGVyY2VudCA9IHR5cGVvZiB0aGlzLnBlcmNlbnQgIT09ICd1bmRlZmluZWQnO1xuICAgIGlmIChpc1BlcmNlbnQpIHtcbiAgICAgIHRoaXMuc2VsZWN0ID0gZmFsc2U7XG4gICAgICB0aGlzLnRvb2x0aXAgPSBmYWxzZTtcbiAgICAgIGZvcm1hdENvbG9yID0gdmFsdWUgPT5cbiAgICAgICAgdmFsdWUgPT09ICfljaDmr5QnID8gdGhpcy5jb2xvciB8fCAncmdiYSgyNCwgMTQ0LCAyNTUsIDAuODUpJyA6ICcjRjBGMkY1JztcblxuICAgICAgdGhpcy5kYXRhID0gW1xuICAgICAgICB7XG4gICAgICAgICAgeDogJ+WNoOavlCcsXG4gICAgICAgICAgeTogdGhpcy5wZXJjZW50LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgeDogJ+WPjeavlCcsXG4gICAgICAgICAgeTogMTAwIC0gdGhpcy5wZXJjZW50LFxuICAgICAgICB9LFxuICAgICAgXTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuZGF0YSB8fCAodGhpcy5kYXRhICYmIHRoaXMuZGF0YS5sZW5ndGggPCAxKSkgcmV0dXJuO1xuXG4gICAgaWYgKHRoaXMuY2hhcnQpIHRoaXMuY2hhcnQuZGVzdHJveSgpO1xuICAgIHRoaXMubm9kZS5uYXRpdmVFbGVtZW50LmlubmVySFRNTCA9ICcnO1xuXG4gICAgY29uc3QgY2hhcnQgPSBuZXcgRzIuQ2hhcnQoe1xuICAgICAgY29udGFpbmVyOiB0aGlzLm5vZGUubmF0aXZlRWxlbWVudCxcbiAgICAgIGZvcmNlRml0OiB0cnVlLFxuICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICAgIHBhZGRpbmc6IHRoaXMucGFkZGluZyxcbiAgICAgIGFuaW1hdGU6IHRoaXMuX2FuaW1hdGUsXG4gICAgfSk7XG5cbiAgICBpZiAoIXRoaXMudG9vbHRpcCkge1xuICAgICAgY2hhcnQudG9vbHRpcChmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoYXJ0LnRvb2x0aXAoe1xuICAgICAgICBzaG93VGl0bGU6IGZhbHNlLFxuICAgICAgICBpdGVtVHBsOlxuICAgICAgICAgICc8bGk+PHNwYW4gc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOntjb2xvcn07XCIgY2xhc3M9XCJnMi10b29sdGlwLW1hcmtlclwiPjwvc3Bhbj57bmFtZX06IHt2YWx1ZX0gJTwvbGk+JyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNoYXJ0LmF4aXMoZmFsc2UpO1xuICAgIGNoYXJ0LmxlZ2VuZChmYWxzZSk7XG5cbiAgICBjb25zdCBkdiA9IG5ldyBEYXRhU2V0LkRhdGFWaWV3KCk7XG4gICAgZHYuc291cmNlKHRoaXMuZGF0YSkudHJhbnNmb3JtKHtcbiAgICAgIHR5cGU6ICdwZXJjZW50JyxcbiAgICAgIGZpZWxkOiAneScsXG4gICAgICBkaW1lbnNpb246ICd4JyxcbiAgICAgIGFzOiAncGVyY2VudCcsXG4gICAgfSk7XG4gICAgY2hhcnQuc291cmNlKGR2LCB7XG4gICAgICB4OiB7XG4gICAgICAgIHR5cGU6ICdjYXQnLFxuICAgICAgICByYW5nZTogWzAsIDFdLFxuICAgICAgfSxcbiAgICAgIHk6IHtcbiAgICAgICAgbWluOiAwLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNoYXJ0LmNvb3JkKCd0aGV0YScsIHsgaW5uZXJSYWRpdXM6IHRoaXMuaW5uZXIgfSk7XG5cbiAgICBjaGFydFxuICAgICAgLmludGVydmFsU3RhY2soKVxuICAgICAgLnBvc2l0aW9uKCd5JylcbiAgICAgIC5zdHlsZSh7IGxpbmVXaWR0aDogdGhpcy5saW5lV2lkdGgsIHN0cm9rZTogJyNmZmYnIH0pXG4gICAgICAudG9vbHRpcCgneCpwZXJjZW50JywgKGl0ZW0sIHBlcmNlbnQpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBuYW1lOiBpdGVtLFxuICAgICAgICAgIHZhbHVlOiB0aGlzLmhhc0xlZ2VuZCA/IHBlcmNlbnQgOiAocGVyY2VudCAqIDEwMCkudG9GaXhlZCgyKSxcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgICAuY29sb3IoJ3gnLCBpc1BlcmNlbnQgPyBmb3JtYXRDb2xvciA6IHRoaXMuY29sb3JzKVxuICAgICAgLnNlbGVjdCh0aGlzLnNlbGVjdCk7XG5cbiAgICBjaGFydC5yZW5kZXIoKTtcblxuICAgIHRoaXMuY2hhcnQgPSBjaGFydDtcbiAgICBpZiAodGhpcy5oYXNMZWdlbmQpIHtcbiAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmxlZ2VuZERhdGEgPSBjaGFydFxuICAgICAgICAgIC5nZXRBbGxHZW9tcygpWzBdXG4gICAgICAgICAgLl9hdHRycy5kYXRhQXJyYXkubWFwKChpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbiA9IGl0ZW1bMF0uX29yaWdpbjtcbiAgICAgICAgICAgIG9yaWdpbi5jb2xvciA9IGl0ZW1bMF0uY29sb3I7XG4gICAgICAgICAgICBvcmlnaW4uY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICBvcmlnaW4ucGVyY2VudCA9IChvcmlnaW4ucGVyY2VudCAqIDEwMCkudG9GaXhlZCgyKTtcbiAgICAgICAgICAgIHJldHVybiBvcmlnaW47XG4gICAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpbnN0YWxsUmVzaXplRXZlbnQoKSB7XG4gICAgaWYgKHRoaXMuc2Nyb2xsJCB8fCAhdGhpcy5oYXNMZWdlbmQpIHJldHVybjtcblxuICAgIHRoaXMuc2Nyb2xsJCA9IGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKVxuICAgICAgLnBpcGUoZGVib3VuY2VUaW1lKDIwMCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMucnVuSW5zdGFsbCgpKTtcbiAgfVxuXG4gIF9jbGljayhpOiBudW1iZXIpIHtcbiAgICB0aGlzLmxlZ2VuZERhdGFbaV0uY2hlY2tlZCA9ICF0aGlzLmxlZ2VuZERhdGFbaV0uY2hlY2tlZDtcblxuICAgIGlmICh0aGlzLmNoYXJ0KSB7XG4gICAgICB0aGlzLmNoYXJ0LmZpbHRlcigneCcsICh2YWw6IGFueSwgaXRlbTogYW55KSA9PiBpdGVtLmNoZWNrZWQpO1xuICAgICAgdGhpcy5jaGFydC5yZXBhaW50KCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaW5pdEZsYWcgPSB0cnVlO1xuICAgIHRoaXMucnVuSW5zdGFsbCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5pbnN0YWxsUmVzaXplRXZlbnQoKTtcbiAgICBpZiAodGhpcy5pbml0RmxhZykgdGhpcy5ydW5JbnN0YWxsKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zY3JvbGwkKSB0aGlzLnNjcm9sbCQudW5zdWJzY3JpYmUoKTtcbiAgICBpZiAodGhpcy5jaGFydCkge1xuICAgICAgdGhpcy5jaGFydC5kZXN0cm95KCk7XG4gICAgICB0aGlzLmNoYXJ0ID0gbnVsbDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==