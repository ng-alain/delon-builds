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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaS1iYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NoYXJ0L21pbmktYmFyLyIsInNvdXJjZXMiOlsibWluaS1iYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxXQUFXLEVBQ1gsU0FBUyxFQUNULFVBQVUsRUFHVix1QkFBdUIsRUFDdkIsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFTdkMsTUFBTTs7OztJQXNDSixZQUFvQixJQUFZO1FBQVosU0FBSSxHQUFKLElBQUksQ0FBUTs7cUJBbEN4QixTQUFTO3VCQVVDLENBQUM7NEJBTUksQ0FBQzt1QkFHSixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQzs4QkFNZixFQUFFO0tBU2lCOzs7O0lBaENwQyxJQUVJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7S0FDckI7Ozs7O0lBQ0QsSUFBSSxNQUFNLENBQUMsS0FBVTtRQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNoQzs7Ozs7SUFHRCxJQUNJLFdBQVcsQ0FBQyxLQUFVO1FBQ3hCLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3JDOzs7O0lBcUJPLE9BQU87UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQUUsT0FBTztRQUU5RCxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDOztRQUV2QyxNQUFNLEtBQUssR0FBRyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDekIsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYTtZQUNsQyxRQUFRLEVBQUUsSUFBSTtZQUNkLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQ3BCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixNQUFNLEVBQUUsSUFBSTtTQUNiLENBQUMsQ0FBQztRQUVILEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFbEIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ3RCLENBQUMsRUFBRTtnQkFDRCxJQUFJLEVBQUUsS0FBSzthQUNaO1lBQ0QsQ0FBQyxFQUFFO2dCQUNELEdBQUcsRUFBRSxDQUFDO2FBQ1A7U0FDRixDQUFDLENBQUM7UUFFSCxLQUFLLENBQUMsT0FBTyxDQUFDO1lBQ1osU0FBUyxFQUFFLEtBQUs7WUFDaEIsWUFBWSxFQUFFLEtBQUs7WUFDbkIsVUFBVSxFQUFFLEtBQUs7WUFDakIsWUFBWSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRTtZQUM1QixzQkFBc0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUU7U0FDOUMsQ0FBQyxDQUFDO1FBQ0gsS0FBSzthQUNGLFFBQVEsRUFBRTthQUNWLFFBQVEsQ0FBQyxLQUFLLENBQUM7YUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQzthQUN2QixLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzthQUNqQixPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3ZCLE9BQU87Z0JBQ0wsSUFBSSxFQUFFLENBQUM7Z0JBQ1AsS0FBSyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYzthQUMvQixDQUFDO1NBQ0gsQ0FBQyxDQUFDO1FBRUwsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRWYsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7Ozs7O0lBR3JCLFdBQVc7UUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ3JFOzs7O0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7U0FDbkI7S0FDRjs7O1lBdEdGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUFWQyxNQUFNOzs7b0JBY0wsS0FBSztxQkFHTCxXQUFXLFNBQUMsaUJBQWlCLGNBQzdCLEtBQUs7MEJBU0wsS0FBSztzQkFNTCxLQUFLO21CQUdMLEtBQUs7NkJBR0wsS0FBSzttQkFLTCxTQUFTLFNBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIEhvc3RCaW5kaW5nLFxuICBWaWV3Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIE9uRGVzdHJveSxcbiAgT25DaGFuZ2VzLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgTmdab25lLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRvTnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5kZWNsYXJlIHZhciBHMjogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnMi1taW5pLWJhcicsXG4gIHRlbXBsYXRlOiBgPGRpdiAjY29udGFpbmVyPjwvZGl2PmAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBHMk1pbmlCYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KClcbiAgY29sb3IgPSAnIzE4OTBGRic7XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5oZWlnaHQucHgnKVxuICBASW5wdXQoKVxuICBnZXQgaGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLl9oZWlnaHQ7XG4gIH1cbiAgc2V0IGhlaWdodCh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5faGVpZ2h0ID0gdG9OdW1iZXIodmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX2hlaWdodCA9IDA7XG5cbiAgQElucHV0KClcbiAgc2V0IGJvcmRlcldpZHRoKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl9ib3JkZXJXaWR0aCA9IHRvTnVtYmVyKHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9ib3JkZXJXaWR0aCA9IDU7XG5cbiAgQElucHV0KClcbiAgcGFkZGluZzogbnVtYmVyW10gPSBbOCwgOCwgOCwgOF07XG5cbiAgQElucHV0KClcbiAgZGF0YTogQXJyYXk8eyB4OiBudW1iZXI7IHk6IG51bWJlcjsgW2tleTogc3RyaW5nXTogYW55IH0+O1xuXG4gIEBJbnB1dCgpXG4gIHlUb29sdGlwU3VmZml4ID0gJyc7XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicpXG4gIHByaXZhdGUgbm9kZTogRWxlbWVudFJlZjtcblxuICBwcml2YXRlIGNoYXJ0OiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB6b25lOiBOZ1pvbmUpIHt9XG5cbiAgcHJpdmF0ZSBpbnN0YWxsKCkge1xuICAgIGlmICghdGhpcy5kYXRhIHx8ICh0aGlzLmRhdGEgJiYgdGhpcy5kYXRhLmxlbmd0aCA8IDEpKSByZXR1cm47XG5cbiAgICB0aGlzLm5vZGUubmF0aXZlRWxlbWVudC5pbm5lckhUTUwgPSAnJztcblxuICAgIGNvbnN0IGNoYXJ0ID0gbmV3IEcyLkNoYXJ0KHtcbiAgICAgIGNvbnRhaW5lcjogdGhpcy5ub2RlLm5hdGl2ZUVsZW1lbnQsXG4gICAgICBmb3JjZUZpdDogdHJ1ZSxcbiAgICAgIGhlaWdodDogK3RoaXMuaGVpZ2h0LFxuICAgICAgcGFkZGluZzogdGhpcy5wYWRkaW5nLFxuICAgICAgbGVnZW5kOiBudWxsLFxuICAgIH0pO1xuXG4gICAgY2hhcnQuYXhpcyhmYWxzZSk7XG5cbiAgICBjaGFydC5zb3VyY2UodGhpcy5kYXRhLCB7XG4gICAgICB4OiB7XG4gICAgICAgIHR5cGU6ICdjYXQnLFxuICAgICAgfSxcbiAgICAgIHk6IHtcbiAgICAgICAgbWluOiAwLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNoYXJ0LnRvb2x0aXAoe1xuICAgICAgc2hvd1RpdGxlOiBmYWxzZSxcbiAgICAgIGhpZGVNYXJrZGVyczogZmFsc2UsXG4gICAgICBjcm9zc2hhaXJzOiBmYWxzZSxcbiAgICAgICdnMi10b29sdGlwJzogeyBwYWRkaW5nOiA0IH0sXG4gICAgICAnZzItdG9vbHRpcC1saXN0LWl0ZW0nOiB7IG1hcmdpbjogYDBweCA0cHhgIH0sXG4gICAgfSk7XG4gICAgY2hhcnRcbiAgICAgIC5pbnRlcnZhbCgpXG4gICAgICAucG9zaXRpb24oJ3gqeScpXG4gICAgICAuc2l6ZSh0aGlzLl9ib3JkZXJXaWR0aClcbiAgICAgIC5jb2xvcih0aGlzLmNvbG9yKVxuICAgICAgLnRvb2x0aXAoJ3gqeScsICh4LCB5KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbmFtZTogeCxcbiAgICAgICAgICB2YWx1ZTogeSArIHRoaXMueVRvb2x0aXBTdWZmaXgsXG4gICAgICAgIH07XG4gICAgICB9KTtcblxuICAgIGNoYXJ0LnJlbmRlcigpO1xuXG4gICAgdGhpcy5jaGFydCA9IGNoYXJ0O1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbnN0YWxsKCkpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNoYXJ0KSB7XG4gICAgICB0aGlzLmNoYXJ0LmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuY2hhcnQgPSBudWxsO1xuICAgIH1cbiAgfVxufVxuIl19