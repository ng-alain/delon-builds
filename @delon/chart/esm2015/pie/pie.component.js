/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ElementRef, NgZone, ChangeDetectionStrategy, ChangeDetectorRef, Renderer2, } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { toNumber, toBoolean, updateHostClass } from '@delon/util';
export class G2PieComponent {
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
                template: "<div class=\"g2-pie__chart\">\r\n  <div #container></div>\r\n  <div *ngIf=\"subTitle || total\" class=\"g2-pie__total\">\r\n    <h4 *ngIf=\"subTitle\" class=\"g2-pie__total-title\" [innerHTML]=\"subTitle\"></h4>\r\n    <div *ngIf=\"total\" class=\"g2-pie__total-stat\" [innerHTML]=\"total\"></div>\r\n  </div>\r\n</div>\r\n<ul *ngIf=\"hasLegend && legendData?.length\" class=\"g2-pie__legend\">\r\n  <li *ngFor=\"let item of legendData; let index = index\" (click)=\"_click(index)\" class=\"g2-pie__legend-item\">\r\n    <span class=\"g2-pie__legend-dot\" [ngStyle]=\"{'background-color': !item.checked ? '#aaa' : item.color}\"></span>\r\n    <span class=\"g2-pie__legend-title\">{{item.x}}</span>\r\n    <nz-divider nzType=\"vertical\"></nz-divider>\r\n    <span class=\"g2-pie__legend-percent\">{{item.percent}}%</span>\r\n    <span class=\"g2-pie__legend-value\" [innerHTML]=\"valueFormat ? valueFormat(item.y) : item.y\"></span>\r\n  </li>\r\n</ul>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9jaGFydC9waWUvIiwic291cmNlcyI6WyJwaWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUdWLE1BQU0sRUFDTix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBRWpCLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQWdCLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBV25FLE1BQU07Ozs7Ozs7SUFrR0osWUFDVSxJQUNBLE1BQ0EsSUFDQTtRQUhBLE9BQUUsR0FBRixFQUFFO1FBQ0YsU0FBSSxHQUFKLElBQUk7UUFDSixPQUFFLEdBQUYsRUFBRTtRQUNGLFNBQUksR0FBSixJQUFJO3VCQXJHa0IsSUFBSTt3QkFLakIsS0FBSzswQkFDSixFQUFFO3dCQVFILElBQUk7cUJBR2YsMEJBQTBCO3VCQWFoQixDQUFDOzBCQVNFLEtBQUs7NEJBTUgsS0FBSztxQkFHcEIsSUFBSTt1QkFFUSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQzt3QkFrQmYsSUFBSTswQkFTRixDQUFDO3VCQVNKLElBQUk7S0FnQmxCOzs7OztJQTVGSixJQUNJLE9BQU8sQ0FBQyxLQUFVO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2xDOzs7O0lBVUQsSUFDSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0tBQ3JCOzs7OztJQUNELElBQUksTUFBTSxDQUFDLEtBQVU7UUFDbkIsSUFBSSxD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bnB1dCxcclxuICBWaWV3Q2hpbGQsXHJcbiAgRWxlbWVudFJlZixcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE5nWm9uZSxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIFJlbmRlcmVyMixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyB0b051bWJlciwgdG9Cb29sZWFuLCB1cGRhdGVIb3N0Q2xhc3MgfSBmcm9tICdAZGVsb24vdXRpbCc7XHJcblxyXG5kZWNsYXJlIHZhciBHMjogYW55O1xyXG5kZWNsYXJlIHZhciBEYXRhU2V0OiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2cyLXBpZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BpZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHMlBpZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0IHtcclxuICBwcml2YXRlIHNjcm9sbCQ6IFN1YnNjcmlwdGlvbiA9IG51bGw7XHJcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJylcclxuICBwcml2YXRlIG5vZGU6IEVsZW1lbnRSZWY7XHJcblxyXG4gIHByaXZhdGUgY2hhcnQ6IGFueTtcclxuICBwcml2YXRlIGluaXRGbGFnID0gZmFsc2U7XHJcbiAgbGVnZW5kRGF0YTogYW55W10gPSBbXTtcclxuXHJcbiAgLy8gI3JlZ2lvbiBmaWVsZHNcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgYW5pbWF0ZSh2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLl9hbmltYXRlID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfYW5pbWF0ZSA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgY29sb3IgPSAncmdiYSgyNCwgMTQ0LCAyNTUsIDAuODUpJztcclxuICBASW5wdXQoKVxyXG4gIHN1YlRpdGxlOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICB0b3RhbDogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGdldCBoZWlnaHQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faGVpZ2h0O1xyXG4gIH1cclxuICBzZXQgaGVpZ2h0KHZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMuX2hlaWdodCA9IHRvTnVtYmVyKHZhbHVlKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfaGVpZ2h0ID0gMDtcclxuXHJcbiAgQElucHV0KClcclxuICBnZXQgaGFzTGVnZW5kKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2hhc0xlZ2VuZDtcclxuICB9XHJcbiAgc2V0IGhhc0xlZ2VuZCh2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLl9oYXNMZWdlbmQgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gIH1cclxuICBwcml2YXRlIF9oYXNMZWdlbmQgPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbGVnZW5kQmxvY2sodmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy5fbGVnZW5kQmxvY2sgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gIH1cclxuICBwcml2YXRlIF9sZWdlbmRCbG9jayA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGlubmVyID0gMC43NTtcclxuICBASW5wdXQoKVxyXG4gIHBhZGRpbmc6IG51bWJlcltdID0gWzEyLCAwLCAxMiwgMF07XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IHBlcmNlbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcGVyY2VudDtcclxuICB9XHJcbiAgc2V0IHBlcmNlbnQodmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy5fcGVyY2VudCA9IHRvTnVtYmVyKHZhbHVlKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfcGVyY2VudDogbnVtYmVyO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGdldCB0b29sdGlwKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Rvb2x0aXA7XHJcbiAgfVxyXG4gIHNldCB0b29sdGlwKHZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMuX3Rvb2x0aXAgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gIH1cclxuICBwcml2YXRlIF90b29sdGlwID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBnZXQgbGluZVdpZHRoKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2xpbmVXaWR0aDtcclxuICB9XHJcbiAgc2V0IGxpbmVXaWR0aCh2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLl9saW5lV2lkdGggPSB0b051bWJlcih2YWx1ZSk7XHJcbiAgfVxyXG4gIHByaXZhdGUgX2xpbmVXaWR0aCA9IDA7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IHNlbGVjdCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9zZWxlY3Q7XHJcbiAgfVxyXG4gIHNldCBzZWxlY3QodmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy5fc2VsZWN0ID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfc2VsZWN0ID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBkYXRhOiBBcnJheTx7IHg6IG51bWJlciB8IHN0cmluZzsgeTogbnVtYmVyOyBba2V5OiBzdHJpbmddOiBhbnkgfT47XHJcbiAgQElucHV0KClcclxuICB2YWx1ZUZvcm1hdDogRnVuY3Rpb247XHJcbiAgQElucHV0KClcclxuICBjb2xvcnM6IGFueVtdO1xyXG5cclxuICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgcmVuZDogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIHpvbmU6IE5nWm9uZSxcclxuICApIHt9XHJcblxyXG4gIHByaXZhdGUgc2V0Q2xzKCkge1xyXG4gICAgdXBkYXRlSG9zdENsYXNzKFxyXG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgIHRoaXMucmVuZCxcclxuICAgICAge1xyXG4gICAgICAgICdnMi1waWUnOiB0cnVlLFxyXG4gICAgICAgICdnMi1waWVfX2xlZ2VuZC1oYXMnOiB0aGlzLmhhc0xlZ2VuZCxcclxuICAgICAgICAnZzItcGllX19sZWdlbmQtYmxvY2snOiB0aGlzLl9sZWdlbmRCbG9jayxcclxuICAgICAgICAnZzItcGllX19taW5pJzogdHlwZW9mIHRoaXMucGVyY2VudCAhPT0gJ3VuZGVmaW5lZCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIHRydWUsXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBydW5JbnN0YWxsKCkge1xyXG4gICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbnN0YWxsKCkpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5zdGFsbCgpIHtcclxuICAgIHRoaXMubGVnZW5kQmxvY2sgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGggPD0gMzgwO1xyXG4gICAgdGhpcy5zZXRDbHMoKTtcclxuXHJcbiAgICBsZXQgZm9ybWF0Q29sb3I7XHJcbiAgICBjb25zdCBpc1BlcmNlbnQgPSB0eXBlb2YgdGhpcy5wZXJjZW50ICE9PSAndW5kZWZpbmVkJztcclxuICAgIGlmIChpc1BlcmNlbnQpIHtcclxuICAgICAgdGhpcy5zZWxlY3QgPSBmYWxzZTtcclxuICAgICAgdGhpcy50b29sdGlwID0gZmFsc2U7XHJcbiAgICAgIGZvcm1hdENvbG9yID0gdmFsdWUgPT5cclxuICAgICAgICB2YWx1ZSA9PT0gJ+WNoOavlCcgPyB0aGlzLmNvbG9yIHx8ICdyZ2JhKDI0LCAxNDQsIDI1NSwgMC44NSknIDogJyNGMEYyRjUnO1xyXG5cclxuICAgICAgdGhpcy5kYXRhID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHg6ICfljaDmr5QnLFxyXG4gICAgICAgICAgeTogdGhpcy5wZXJjZW50LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgeDogJ+WPjeavlCcsXHJcbiAgICAgICAgICB5OiAxMDAgLSB0aGlzLnBlcmNlbnQsXHJcbiAgICAgICAgfSxcclxuICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuZGF0YSB8fCAodGhpcy5kYXRhICYmIHRoaXMuZGF0YS5sZW5ndGggPCAxKSkgcmV0dXJuO1xyXG5cclxuICAgIGlmICh0aGlzLmNoYXJ0KSB0aGlzLmNoYXJ0LmRlc3Ryb3koKTtcclxuICAgIHRoaXMubm9kZS5uYXRpdmVFbGVtZW50LmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgIGNvbnN0IGNoYXJ0ID0gbmV3IEcyLkNoYXJ0KHtcclxuICAgICAgY29udGFpbmVyOiB0aGlzLm5vZGUubmF0aXZlRWxlbWVudCxcclxuICAgICAgZm9yY2VGaXQ6IHRydWUsXHJcbiAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXHJcbiAgICAgIHBhZGRpbmc6IHRoaXMucGFkZGluZyxcclxuICAgICAgYW5pbWF0ZTogdGhpcy5fYW5pbWF0ZSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghdGhpcy50b29sdGlwKSB7XHJcbiAgICAgIGNoYXJ0LnRvb2x0aXAoZmFsc2UpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2hhcnQudG9vbHRpcCh7XHJcbiAgICAgICAgc2hvd1RpdGxlOiBmYWxzZSxcclxuICAgICAgICBpdGVtVHBsOlxyXG4gICAgICAgICAgJzxsaT48c3BhbiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6e2NvbG9yfTtcIiBjbGFzcz1cImcyLXRvb2x0aXAtbWFya2VyXCI+PC9zcGFuPntuYW1lfToge3ZhbHVlfSAlPC9saT4nLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFydC5heGlzKGZhbHNlKTtcclxuICAgIGNoYXJ0LmxlZ2VuZChmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgZHYgPSBuZXcgRGF0YVNldC5EYXRhVmlldygpO1xyXG4gICAgZHYuc291cmNlKHRoaXMuZGF0YSkudHJhbnNmb3JtKHtcclxuICAgICAgdHlwZTogJ3BlcmNlbnQnLFxyXG4gICAgICBmaWVsZDogJ3knLFxyXG4gICAgICBkaW1lbnNpb246ICd4JyxcclxuICAgICAgYXM6ICdwZXJjZW50JyxcclxuICAgIH0pO1xyXG4gICAgY2hhcnQuc291cmNlKGR2LCB7XHJcbiAgICAgIHg6IHtcclxuICAgICAgICB0eXBlOiAnY2F0JyxcclxuICAgICAgICByYW5nZTogWzAsIDFdLFxyXG4gICAgICB9LFxyXG4gICAgICB5OiB7XHJcbiAgICAgICAgbWluOiAwLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgY2hhcnQuY29vcmQoJ3RoZXRhJywgeyBpbm5lclJhZGl1czogdGhpcy5pbm5lciB9KTtcclxuXHJcbiAgICBjaGFydFxyXG4gICAgICAuaW50ZXJ2YWxTdGFjaygpXHJcbiAgICAgIC5wb3NpdGlvbigneScpXHJcbiAgICAgIC5zdHlsZSh7IGxpbmVXaWR0aDogdGhpcy5saW5lV2lkdGgsIHN0cm9rZTogJyNmZmYnIH0pXHJcbiAgICAgIC50b29sdGlwKCd4KnBlcmNlbnQnLCAoaXRlbSwgcGVyY2VudCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBuYW1lOiBpdGVtLFxyXG4gICAgICAgICAgdmFsdWU6IHRoaXMuaGFzTGVnZW5kID8gcGVyY2VudCA6IChwZXJjZW50ICogMTAwKS50b0ZpeGVkKDIpLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jb2xvcigneCcsIGlzUGVyY2VudCA/IGZvcm1hdENvbG9yIDogdGhpcy5jb2xvcnMpXHJcbiAgICAgIC5zZWxlY3QodGhpcy5zZWxlY3QpO1xyXG5cclxuICAgIGNoYXJ0LnJlbmRlcigpO1xyXG5cclxuICAgIHRoaXMuY2hhcnQgPSBjaGFydDtcclxuICAgIGlmICh0aGlzLmhhc0xlZ2VuZCkge1xyXG4gICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLmxlZ2VuZERhdGEgPSBjaGFydFxyXG4gICAgICAgICAgLmdldEFsbEdlb21zKClbMF1cclxuICAgICAgICAgIC5fYXR0cnMuZGF0YUFycmF5Lm1hcCgoaXRlbTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbiA9IGl0ZW1bMF0uX29yaWdpbjtcclxuICAgICAgICAgICAgb3JpZ2luLmNvbG9yID0gaXRlbVswXS5jb2xvcjtcclxuICAgICAgICAgICAgb3JpZ2luLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBvcmlnaW4ucGVyY2VudCA9IChvcmlnaW4ucGVyY2VudCAqIDEwMCkudG9GaXhlZCgyKTtcclxuICAgICAgICAgICAgcmV0dXJuIG9yaWdpbjtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5zdGFsbFJlc2l6ZUV2ZW50KCkge1xyXG4gICAgaWYgKHRoaXMuc2Nyb2xsJCB8fCAhdGhpcy5oYXNMZWdlbmQpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLnNjcm9sbCQgPSBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJylcclxuICAgICAgLnBpcGUoZGVib3VuY2VUaW1lKDIwMCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5ydW5JbnN0YWxsKCkpO1xyXG4gIH1cclxuXHJcbiAgX2NsaWNrKGk6IG51bWJlcikge1xyXG4gICAgdGhpcy5sZWdlbmREYXRhW2ldLmNoZWNrZWQgPSAhdGhpcy5sZWdlbmREYXRhW2ldLmNoZWNrZWQ7XHJcblxyXG4gICAgaWYgKHRoaXMuY2hhcnQpIHtcclxuICAgICAgdGhpcy5jaGFydC5maWx0ZXIoJ3gnLCAodmFsOiBhbnksIGl0ZW06IGFueSkgPT4gaXRlbS5jaGVja2VkKTtcclxuICAgICAgdGhpcy5jaGFydC5yZXBhaW50KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmluaXRGbGFnID0gdHJ1ZTtcclxuICAgIHRoaXMucnVuSW5zdGFsbCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLmluc3RhbGxSZXNpemVFdmVudCgpO1xyXG4gICAgaWYgKHRoaXMuaW5pdEZsYWcpIHRoaXMucnVuSW5zdGFsbCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zY3JvbGwkKSB0aGlzLnNjcm9sbCQudW5zdWJzY3JpYmUoKTtcclxuICAgIGlmICh0aGlzLmNoYXJ0KSB7XHJcbiAgICAgIHRoaXMuY2hhcnQuZGVzdHJveSgpO1xyXG4gICAgICB0aGlzLmNoYXJ0ID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19