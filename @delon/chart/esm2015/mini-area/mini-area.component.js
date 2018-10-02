/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, HostBinding, ViewChild, ElementRef, ChangeDetectionStrategy, NgZone, } from '@angular/core';
import { toNumber, toBoolean } from '@delon/util';
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
            showTitle: false,
            hideMarkders: false,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaS1hcmVhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9jaGFydC9taW5pLWFyZWEvIiwic291cmNlcyI6WyJtaW5pLWFyZWEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxXQUFXLEVBQ1gsU0FBUyxFQUNULFVBQVUsRUFHVix1QkFBdUIsRUFDdkIsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBU2xELE1BQU07Ozs7SUE4REosWUFBb0IsSUFBWTtRQUFaLFNBQUksR0FBSixJQUFJLENBQVE7O3FCQTFEeEIseUJBQXlCOzJCQUVuQixTQUFTOzRCQUtBLENBQUM7b0JBZ0JULElBQUk7cUJBTUgsS0FBSzt3QkFTRixJQUFJO3VCQU9ILENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDOzhCQUlmLEVBQUU7S0FTaUI7Ozs7O0lBdkRwQyxJQUNJLFdBQVcsQ0FBQyxLQUFVO1FBQ3hCLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3JDOzs7O0lBR0QsSUFFSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0tBQ3JCOzs7OztJQUNELElBQUksTUFBTSxDQUFDLEtBQVU7UUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDaEM7Ozs7O0lBR0QsSUFDSSxHQUFHLENBQUMsS0FBVTtRQUNoQixJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUM5Qjs7Ozs7SUFHRCxJQUNJLElBQUksQ0FBQyxLQUFVO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tB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O29CQUVMLEtBQUs7c0JBRUwsS0FBSzttQkFFTCxLQUFLOzZCQUVMLEtBQUs7bUJBS0wsU0FBUyxTQUFDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBIb3N0QmluZGluZyxcclxuICBWaWV3Q2hpbGQsXHJcbiAgRWxlbWVudFJlZixcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25DaGFuZ2VzLFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIE5nWm9uZSxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgdG9OdW1iZXIsIHRvQm9vbGVhbiB9IGZyb20gJ0BkZWxvbi91dGlsJztcclxuXHJcbmRlY2xhcmUgdmFyIEcyOiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2cyLW1pbmktYXJlYScsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2ICNjb250YWluZXI+PC9kaXY+YCxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEcyTWluaUFyZWFDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XHJcbiAgLy8gI3JlZ2lvbiBmaWVsZHNcclxuXHJcbiAgQElucHV0KClcclxuICBjb2xvciA9ICdyZ2JhKDI0LCAxNDQsIDI1NSwgMC4yKSc7XHJcbiAgQElucHV0KClcclxuICBib3JkZXJDb2xvciA9ICcjMTg5MEZGJztcclxuICBASW5wdXQoKVxyXG4gIHNldCBib3JkZXJXaWR0aCh2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLl9ib3JkZXJXaWR0aCA9IHRvTnVtYmVyKHZhbHVlKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfYm9yZGVyV2lkdGggPSAyO1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmhlaWdodC5weCcpXHJcbiAgQElucHV0KClcclxuICBnZXQgaGVpZ2h0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcclxuICB9XHJcbiAgc2V0IGhlaWdodCh2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLl9oZWlnaHQgPSB0b051bWJlcih2YWx1ZSk7XHJcbiAgfVxyXG4gIHByaXZhdGUgX2hlaWdodDtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgZml0KHZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMuX2ZpdCA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG4gIHByaXZhdGUgX2ZpdCA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGxpbmUodmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy5fbGluZSA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG4gIHByaXZhdGUgX2xpbmUgPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KClcclxuICBnZXQgYW5pbWF0ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9hbmltYXRlO1xyXG4gIH1cclxuICBzZXQgYW5pbWF0ZSh2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLl9hbmltYXRlID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfYW5pbWF0ZSA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgeEF4aXM6IGFueTtcclxuICBASW5wdXQoKVxyXG4gIHlBeGlzOiBhbnk7XHJcbiAgQElucHV0KClcclxuICBwYWRkaW5nOiBudW1iZXJbXSA9IFs4LCA4LCA4LCA4XTtcclxuICBASW5wdXQoKVxyXG4gIGRhdGE6IEFycmF5PHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IFtrZXk6IHN0cmluZ106IGFueSB9PjtcclxuICBASW5wdXQoKVxyXG4gIHlUb29sdGlwU3VmZml4ID0gJyc7XHJcblxyXG4gIC8vICNlbmRyZWdpb25cclxuXHJcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJylcclxuICBwcml2YXRlIG5vZGU6IEVsZW1lbnRSZWY7XHJcblxyXG4gIHByaXZhdGUgY2hhcnQ6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB6b25lOiBOZ1pvbmUpIHt9XHJcblxyXG4gIHByaXZhdGUgaW5zdGFsbCgpIHtcclxuICAgIGlmICghdGhpcy5kYXRhIHx8ICh0aGlzLmRhdGEgJiYgdGhpcy5kYXRhLmxlbmd0aCA8IDEpKSByZXR1cm47XHJcblxyXG4gICAgdGhpcy5ub2RlLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgY29uc3QgY2hhcnQgPSBuZXcgRzIuQ2hhcnQoe1xyXG4gICAgICBjb250YWluZXI6IHRoaXMubm9kZS5uYXRpdmVFbGVtZW50LFxyXG4gICAgICBmb3JjZUZpdDogdGhpcy5fZml0LFxyXG4gICAgICBoZWlnaHQ6ICt0aGlzLmhlaWdodCxcclxuICAgICAgYW5pbWF0ZTogdGhpcy5hbmltYXRlLFxyXG4gICAgICBwYWRkaW5nOiB0aGlzLnBhZGRpbmcsXHJcbiAgICAgIGxlZ2VuZDogbnVsbCxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghdGhpcy54QXhpcyAmJiAhdGhpcy55QXhpcykge1xyXG4gICAgICBjaGFydC5heGlzKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy54QXhpcykge1xyXG4gICAgICBjaGFydC5heGlzKCd4JywgdGhpcy54QXhpcyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjaGFydC5heGlzKCd4JywgZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnlBeGlzKSB7XHJcbiAgICAgIGNoYXJ0LmF4aXMoJ3knLCB0aGlzLnlBeGlzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNoYXJ0LmF4aXMoJ3knLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGF0YUNvbmZpZyA9IHtcclxuICAgICAgeDoge1xyXG4gICAgICAgIHR5cGU6ICdjYXQnLFxyXG4gICAgICAgIHJhbmdlOiBbMCwgMV0sXHJcbiAgICAgICAgeEF4aXM6IHRoaXMueEF4aXMsXHJcbiAgICAgIH0sXHJcbiAgICAgIHk6IHtcclxuICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgeUF4aXM6IHRoaXMueUF4aXMsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG5cclxuICAgIGNoYXJ0LnRvb2x0aXAoe1xyXG4gICAgICBzaG93VGl0bGU6IGZhbHNlLFxyXG4gICAgICBoaWRlTWFya2RlcnM6IGZhbHNlLFxyXG4gICAgICAnZzItdG9vbHRpcCc6IHsgcGFkZGluZzogNCB9LFxyXG4gICAgICAnZzItdG9vbHRpcC1saXN0LWl0ZW0nOiB7IG1hcmdpbjogYDBweCA0cHhgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB2aWV3ID0gY2hhcnQudmlldygpO1xyXG4gICAgdmlldy5zb3VyY2UodGhpcy5kYXRhLCBkYXRhQ29uZmlnKTtcclxuXHJcbiAgICB2aWV3XHJcbiAgICAgIC5hcmVhKClcclxuICAgICAgLnBvc2l0aW9uKCd4KnknKVxyXG4gICAgICAuY29sb3IodGhpcy5jb2xvcilcclxuICAgICAgLnRvb2x0aXAoJ3gqeScsICh4LCB5KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIG5hbWU6IHgsXHJcbiAgICAgICAgICB2YWx1ZTogeSArIHRoaXMueVRvb2x0aXBTdWZmaXgsXHJcbiAgICAgICAgfTtcclxuICAgICAgfSlcclxuICAgICAgLnNoYXBlKCdzbW9vdGgnKVxyXG4gICAgICAuc3R5bGUoeyBmaWxsT3BhY2l0eTogMSB9KTtcclxuXHJcbiAgICBpZiAodGhpcy5fbGluZSkge1xyXG4gICAgICBjb25zdCB2aWV3MiA9IGNoYXJ0LnZpZXcoKTtcclxuICAgICAgdmlldzIuc291cmNlKHRoaXMuZGF0YSwgZGF0YUNvbmZpZyk7XHJcbiAgICAgIHZpZXcyXHJcbiAgICAgICAgLmxpbmUoKVxyXG4gICAgICAgIC5wb3NpdGlvbigneCp5JylcclxuICAgICAgICAuY29sb3IodGhpcy5ib3JkZXJDb2xvcilcclxuICAgICAgICAuc2l6ZSh0aGlzLl9ib3JkZXJXaWR0aClcclxuICAgICAgICAuc2hhcGUoJ3Ntb290aCcpO1xyXG4gICAgICB2aWV3Mi50b29sdGlwKGZhbHNlKTtcclxuICAgIH1cclxuICAgIGNoYXJ0LnJlbmRlcigpO1xyXG4gICAgdGhpcy5jaGFydCA9IGNoYXJ0O1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmluc3RhbGwoKSkpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5jaGFydCkge1xyXG4gICAgICB0aGlzLmNoYXJ0LmRlc3Ryb3koKTtcclxuICAgICAgdGhpcy5jaGFydCA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==