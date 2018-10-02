/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, HostBinding, ViewChild, ElementRef, ChangeDetectionStrategy, NgZone, } from '@angular/core';
import { toNumber } from '@delon/util';
export class G2MiniBarComponent {
    /**
     * @param {?} zone
     */
    constructor(zone) {
        this.zone = zone;
        // #region fields
        this.color = '#1890FF';
        this._height = 0;
        this._borderWidth = 5;
        this.padding = [8, 8, 8, 8];
        this.yTooltipSuffix = '';
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
    set borderWidth(value) {
        this._borderWidth = toNumber(value);
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
            forceFit: true,
            height: +this.height,
            padding: this.padding,
            legend: null,
        });
        chart.axis(false);
        chart.source(this.data, {
            x: {
                type: 'cat',
            },
            y: {
                min: 0,
            },
        });
        chart.tooltip({
            showTitle: false,
            hideMarkders: false,
            crosshairs: false,
            'g2-tooltip': { padding: 4 },
            'g2-tooltip-list-item': { margin: `0px 4px` },
        });
        chart
            .interval()
            .position('x*y')
            .size(this._borderWidth)
            .color(this.color)
            .tooltip('x*y', (x, y) => {
            return {
                name: x,
                value: y + this.yTooltipSuffix,
            };
        });
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
G2MiniBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'g2-mini-bar',
                template: `<div #container></div>`,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
G2MiniBarComponent.ctorParameters = () => [
    { type: NgZone }
];
G2MiniBarComponent.propDecorators = {
    color: [{ type: Input }],
    height: [{ type: HostBinding, args: ['style.height.px',] }, { type: Input }],
    borderWidth: [{ type: Input }],
    padding: [{ type: Input }],
    data: [{ type: Input }],
    yTooltipSuffix: [{ type: Input }],
    node: [{ type: ViewChild, args: ['container',] }]
};
if (false) {
    /** @type {?} */
    G2MiniBarComponent.prototype.color;
    /** @type {?} */
    G2MiniBarComponent.prototype._height;
    /** @type {?} */
    G2MiniBarComponent.prototype._borderWidth;
    /** @type {?} */
    G2MiniBarComponent.prototype.padding;
    /** @type {?} */
    G2MiniBarComponent.prototype.data;
    /** @type {?} */
    G2MiniBarComponent.prototype.yTooltipSuffix;
    /** @type {?} */
    G2MiniBarComponent.prototype.node;
    /** @type {?} */
    G2MiniBarComponent.prototype.chart;
    /** @type {?} */
    G2MiniBarComponent.prototype.zone;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaS1iYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NoYXJ0L21pbmktYmFyLyIsInNvdXJjZXMiOlsibWluaS1iYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxXQUFXLEVBQ1gsU0FBUyxFQUNULFVBQVUsRUFHVix1QkFBdUIsRUFDdkIsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFTdkMsTUFBTTs7OztJQXNDSixZQUFvQixJQUFZO1FBQVosU0FBSSxHQUFKLElBQUksQ0FBUTs7cUJBbEN4QixTQUFTO3VCQVVDLENBQUM7NEJBTUksQ0FBQzt1QkFHSixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQzs4QkFNZixFQUFFO0tBU2lCOzs7O0lBaENwQyxJQUVJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7S0FDckI7Ozs7O0lBQ0QsSUFBSSxNQUFNLENBQUMsS0FBVTtRQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNoQzs7Ozs7SUFHRCxJQUNJLFdBQVcsQ0FBQyxLQUFVO1FBQ3hCLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3JDOzs7O0lBcUJPLE9BQU87UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQUUsT0FBTztRQUU5RCxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDOztRQUV2QyxNQUFNLEtBQUssR0FBRyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDekIsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYTtZQUNsQyxRQUFRLEVBQUUsSUFBSTtZQUNkLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQ3BCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixNQUFNLEVBQUUsSUFBSTtTQUNiLENBQUMsQ0FBQztRQUVILEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFbEIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ3RCLENBQUMsRUFBRTtnQkFDRCxJQUFJLEVBQUUsS0FBSzthQUNaO1lBQ0QsQ0FBQyxFQUFFO2dCQUNELEdBQUcsRUFBRSxDQUFDO2FBQ1A7U0FDRixDQUFDLENBQUM7UUFFSCxLQUFLLENBQUMsT0FBTyxDQUFDO1lBQ1osU0FBUyxFQUFFLEtBQUs7WUFDaEIsWUFBWSxFQUFFLEtBQUs7WUFDbkIsVUFBVSxFQUFFLEtBQUs7WUFDakIsWUFBWSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRTtZQUM1QixzQkFBc0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUU7U0FDOUMsQ0FBQyxDQUFDO1FBQ0gsS0FBSzthQUNGLFFBQVEsRUFBRTthQUNWLFFBQVEsQ0FBQyxLQUFLLENBQUM7YUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQzthQUN2QixLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzthQUNqQixPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3ZCLE9BQU87Z0JBQ0wsSUFBSSxFQUFFLENBQUM7Z0JBQ1AsS0FBSyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYzthQUMvQixDQUFDO1NBQ0gsQ0FBQyxDQUFDO1FBRUwsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRWYsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7Ozs7O0lBR3JCLFdBQVc7UUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ3JFOzs7O0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7U0FDbkI7S0FDRjs7O1lBdEdGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUFWQyxNQUFNOzs7b0JBY0wsS0FBSztxQkFHTCxXQUFXLFNBQUMsaUJBQWlCLGNBQzdCLEtBQUs7MEJBU0wsS0FBSztzQkFNTCxLQUFLO21CQUdMLEtBQUs7NkJBR0wsS0FBSzttQkFLTCxTQUFTLFNBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIEhvc3RCaW5kaW5nLFxyXG4gIFZpZXdDaGlsZCxcclxuICBFbGVtZW50UmVmLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkNoYW5nZXMsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgTmdab25lLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyB0b051bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcclxuXHJcbmRlY2xhcmUgdmFyIEcyOiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2cyLW1pbmktYmFyJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgI2NvbnRhaW5lcj48L2Rpdj5gLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRzJNaW5pQmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkNoYW5nZXMge1xyXG4gIC8vICNyZWdpb24gZmllbGRzXHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgY29sb3IgPSAnIzE4OTBGRic7XHJcblxyXG4gIEBIb3N0QmluZGluZygnc3R5bGUuaGVpZ2h0LnB4JylcclxuICBASW5wdXQoKVxyXG4gIGdldCBoZWlnaHQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faGVpZ2h0O1xyXG4gIH1cclxuICBzZXQgaGVpZ2h0KHZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMuX2hlaWdodCA9IHRvTnVtYmVyKHZhbHVlKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfaGVpZ2h0ID0gMDtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgYm9yZGVyV2lkdGgodmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy5fYm9yZGVyV2lkdGggPSB0b051bWJlcih2YWx1ZSk7XHJcbiAgfVxyXG4gIHByaXZhdGUgX2JvcmRlcldpZHRoID0gNTtcclxuXHJcbiAgQElucHV0KClcclxuICBwYWRkaW5nOiBudW1iZXJbXSA9IFs4LCA4LCA4LCA4XTtcclxuXHJcbiAgQElucHV0KClcclxuICBkYXRhOiBBcnJheTx7IHg6IG51bWJlcjsgeTogbnVtYmVyOyBba2V5OiBzdHJpbmddOiBhbnkgfT47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgeVRvb2x0aXBTdWZmaXggPSAnJztcclxuXHJcbiAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICBAVmlld0NoaWxkKCdjb250YWluZXInKVxyXG4gIHByaXZhdGUgbm9kZTogRWxlbWVudFJlZjtcclxuXHJcbiAgcHJpdmF0ZSBjaGFydDogYW55O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHpvbmU6IE5nWm9uZSkge31cclxuXHJcbiAgcHJpdmF0ZSBpbnN0YWxsKCkge1xyXG4gICAgaWYgKCF0aGlzLmRhdGEgfHwgKHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEubGVuZ3RoIDwgMSkpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLm5vZGUubmF0aXZlRWxlbWVudC5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICBjb25zdCBjaGFydCA9IG5ldyBHMi5DaGFydCh7XHJcbiAgICAgIGNvbnRhaW5lcjogdGhpcy5ub2RlLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgIGZvcmNlRml0OiB0cnVlLFxyXG4gICAgICBoZWlnaHQ6ICt0aGlzLmhlaWdodCxcclxuICAgICAgcGFkZGluZzogdGhpcy5wYWRkaW5nLFxyXG4gICAgICBsZWdlbmQ6IG51bGwsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjaGFydC5heGlzKGZhbHNlKTtcclxuXHJcbiAgICBjaGFydC5zb3VyY2UodGhpcy5kYXRhLCB7XHJcbiAgICAgIHg6IHtcclxuICAgICAgICB0eXBlOiAnY2F0JyxcclxuICAgICAgfSxcclxuICAgICAgeToge1xyXG4gICAgICAgIG1pbjogMCxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNoYXJ0LnRvb2x0aXAoe1xyXG4gICAgICBzaG93VGl0bGU6IGZhbHNlLFxyXG4gICAgICBoaWRlTWFya2RlcnM6IGZhbHNlLFxyXG4gICAgICBjcm9zc2hhaXJzOiBmYWxzZSxcclxuICAgICAgJ2cyLXRvb2x0aXAnOiB7IHBhZGRpbmc6IDQgfSxcclxuICAgICAgJ2cyLXRvb2x0aXAtbGlzdC1pdGVtJzogeyBtYXJnaW46IGAwcHggNHB4YCB9LFxyXG4gICAgfSk7XHJcbiAgICBjaGFydFxyXG4gICAgICAuaW50ZXJ2YWwoKVxyXG4gICAgICAucG9zaXRpb24oJ3gqeScpXHJcbiAgICAgIC5zaXplKHRoaXMuX2JvcmRlcldpZHRoKVxyXG4gICAgICAuY29sb3IodGhpcy5jb2xvcilcclxuICAgICAgLnRvb2x0aXAoJ3gqeScsICh4LCB5KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIG5hbWU6IHgsXHJcbiAgICAgICAgICB2YWx1ZTogeSArIHRoaXMueVRvb2x0aXBTdWZmaXgsXHJcbiAgICAgICAgfTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgY2hhcnQucmVuZGVyKCk7XHJcblxyXG4gICAgdGhpcy5jaGFydCA9IGNoYXJ0O1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmluc3RhbGwoKSkpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5jaGFydCkge1xyXG4gICAgICB0aGlzLmNoYXJ0LmRlc3Ryb3koKTtcclxuICAgICAgdGhpcy5jaGFydCA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==