/**
 * @fileoverview added by tsickle
 * Generated from: bar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { G2BaseComponent } from '@delon/chart/core';
import { InputBoolean, InputNumber } from '@delon/util/other';
import { fromEvent } from 'rxjs';
import { debounceTime, filter, takeUntil } from 'rxjs/operators';
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
    /** @type {?|undefined} */
    G2BarData.prototype.color;
    /* Skipping unhandled member: [key: string]: NzSafeAny;*/
}
/**
 * @record
 */
export function G2BarClickItem() { }
if (false) {
    /** @type {?} */
    G2BarClickItem.prototype.item;
    /** @type {?} */
    G2BarClickItem.prototype.ev;
}
export class G2BarComponent extends G2BaseComponent {
    constructor() {
        super(...arguments);
        this.color = 'rgba(24, 144, 255, 0.85)';
        this.height = 0;
        this.padding = 'auto';
        this.data = [];
        this.autoLabel = true;
        this.interaction = 'none';
        this.clickItem = new EventEmitter();
    }
    // #endregion
    /**
     * @private
     * @return {?}
     */
    getHeight() {
        return this.title ? this.height - TITLE_HEIGHT : this.height;
    }
    /**
     * @return {?}
     */
    install() {
        const { node, padding, interaction, theme } = this;
        /** @type {?} */
        const container = (/** @type {?} */ (node.nativeElement));
        /** @type {?} */
        const chart = (this._chart = new ((/** @type {?} */ (window))).G2.Chart({
            container,
            autoFit: true,
            height: this.getHeight(),
            padding,
            theme,
        }));
        this.updatelabel();
        chart.axis('y', {
            title: null,
            line: null,
            tickLine: null,
        });
        chart.scale({
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
        if (interaction !== 'none') {
            chart.interaction(interaction);
        }
        chart.legend(false);
        chart
            .interval()
            .position('x*y')
            .color('x*y', (/**
         * @param {?} x
         * @param {?} y
         * @return {?}
         */
        (x, y) => {
            /** @type {?} */
            const colorItem = this.data.find((/**
             * @param {?} w
             * @return {?}
             */
            w => w.x === x && w.y === y));
            return colorItem && colorItem.color ? colorItem.color : this.color;
        }))
            .tooltip('x*y', (/**
         * @param {?} x
         * @param {?} y
         * @return {?}
         */
        (x, y) => ({ name: x, value: y })));
        chart.on(`interval:click`, (/**
         * @param {?} ev
         * @return {?}
         */
        (ev) => {
            this.ngZone.run((/**
             * @return {?}
             */
            () => { var _a; return this.clickItem.emit({ item: (_a = ev.data) === null || _a === void 0 ? void 0 : _a.data, ev }); }));
        }));
        this.attachChart();
    }
    /**
     * @return {?}
     */
    attachChart() {
        const { _chart, padding, data } = this;
        if (!_chart || !data || data.length <= 0)
            return;
        this.installResizeEvent();
        /** @type {?} */
        const height = this.getHeight();
        if (_chart.height !== height) {
            _chart.height = height;
        }
        _chart.padding = padding;
        _chart.data(data);
        _chart.render();
    }
    /**
     * @private
     * @return {?}
     */
    updatelabel() {
        const { node, data, _chart } = this;
        /** @type {?} */
        const canvasWidth = node.nativeElement.clientWidth;
        /** @type {?} */
        const minWidth = data.length * 30;
        _chart.axis('x', canvasWidth > minWidth).render();
    }
    /**
     * @private
     * @return {?}
     */
    installResizeEvent() {
        if (!this.autoLabel || this.resize$)
            return;
        this.resize$ = fromEvent(window, 'resize')
            .pipe(takeUntil(this.destroy$), filter((/**
         * @return {?}
         */
        () => !!this._chart)), debounceTime(200))
            .subscribe((/**
         * @return {?}
         */
        () => this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => this.updatelabel()))));
    }
}
G2BarComponent.decorators = [
    { type: Component, args: [{
                selector: 'g2-bar',
                exportAs: 'g2Bar',
                template: `
    <ng-container *nzStringTemplateOutlet="title">
      <h4 style="margin-bottom: 20px;">{{ title }}</h4>
    </ng-container>
    <nz-skeleton *ngIf="!loaded"></nz-skeleton>
    <div #container></div>
  `,
                host: {
                    '[style.height.px]': 'height',
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
G2BarComponent.propDecorators = {
    title: [{ type: Input }],
    color: [{ type: Input }],
    height: [{ type: Input }],
    padding: [{ type: Input }],
    data: [{ type: Input }],
    autoLabel: [{ type: Input }],
    interaction: [{ type: Input }],
    clickItem: [{ type: Output }]
};
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2BarComponent.prototype, "height", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], G2BarComponent.prototype, "autoLabel", void 0);
if (false) {
    /** @type {?} */
    G2BarComponent.ngAcceptInputType_height;
    /** @type {?} */
    G2BarComponent.ngAcceptInputType_autoLabel;
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
    G2BarComponent.prototype.interaction;
    /** @type {?} */
    G2BarComponent.prototype.clickItem;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NoYXJ0L2Jhci9iYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQWUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFaEksT0FBTyxFQUFFLGVBQWUsRUFBcUIsTUFBTSxtQkFBbUIsQ0FBQztBQUN2RSxPQUFPLEVBQWdCLFlBQVksRUFBRSxXQUFXLEVBQWUsTUFBTSxtQkFBbUIsQ0FBQztBQUV6RixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztNQUUzRCxZQUFZLEdBQUcsRUFBRTs7OztBQUV2QiwrQkFLQzs7O0lBSkMsc0JBQWE7O0lBQ2Isc0JBQWE7O0lBQ2IsMEJBQWU7Ozs7OztBQUlqQixvQ0FHQzs7O0lBRkMsOEJBQWdCOztJQUNoQiw0QkFBVTs7QUFvQlosTUFBTSxPQUFPLGNBQWUsU0FBUSxlQUFlO0lBakJuRDs7UUF3QlcsVUFBSyxHQUFHLDBCQUEwQixDQUFDO1FBQ3BCLFdBQU0sR0FBRyxDQUFDLENBQUM7UUFDMUIsWUFBTyxHQUErQixNQUFNLENBQUM7UUFDN0MsU0FBSSxHQUFnQixFQUFFLENBQUM7UUFDUCxjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLGdCQUFXLEdBQXNCLE1BQU0sQ0FBQztRQUN2QyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQWtCLENBQUM7SUF3RjNELENBQUM7Ozs7OztJQXBGUyxTQUFTO1FBQ2YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUMvRCxDQUFDOzs7O0lBRUQsT0FBTztjQUNDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSTs7Y0FFNUMsU0FBUyxHQUFHLG1CQUFBLElBQUksQ0FBQyxhQUFhLEVBQWU7O2NBQzdDLEtBQUssR0FBVSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLG1CQUFBLE1BQU0sRUFBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUMvRCxTQUFTO1lBQ1QsT0FBTyxFQUFFLElBQUk7WUFDYixNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUN4QixPQUFPO1lBQ1AsS0FBSztTQUNOLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNkLEtBQUssRUFBRSxJQUFJO1lBQ1gsSUFBSSxFQUFFLElBQUk7WUFDVixRQUFRLEVBQUUsSUFBSTtTQUNmLENBQUMsQ0FBQztRQUNILEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDVixDQUFDLEVBQUU7Z0JBQ0QsSUFBSSxFQUFFLEtBQUs7YUFDWjtZQUNELENBQUMsRUFBRTtnQkFDRCxHQUFHLEVBQUUsQ0FBQzthQUNQO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUNaLFNBQVMsRUFBRSxLQUFLO1NBQ2pCLENBQUMsQ0FBQztRQUNILElBQUksV0FBVyxLQUFLLE1BQU0sRUFBRTtZQUMxQixLQUFLLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ2hDO1FBQ0QsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQixLQUFLO2FBQ0YsUUFBUSxFQUFFO2FBQ1YsUUFBUSxDQUFDLEtBQUssQ0FBQzthQUNmLEtBQUssQ0FBQyxLQUFLOzs7OztRQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFOztrQkFDZixTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJOzs7O1lBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBQztZQUM3RCxPQUFPLFNBQVMsSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3JFLENBQUMsRUFBQzthQUNELE9BQU8sQ0FBQyxLQUFLOzs7OztRQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQztRQUVyRCxLQUFLLENBQUMsRUFBRSxDQUFDLGdCQUFnQjs7OztRQUFFLENBQUMsRUFBUyxFQUFFLEVBQUU7WUFDdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHOzs7WUFBQyxHQUFHLEVBQUUsV0FBQyxPQUFBLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxRQUFFLEVBQUUsQ0FBQyxJQUFJLDBDQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFBLEVBQUEsRUFBQyxDQUFDO1FBQzFFLENBQUMsRUFBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxXQUFXO2NBQ0gsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxHQUFHLElBQUk7UUFDdEMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUM7WUFBRSxPQUFPO1FBQ2pELElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDOztjQUNwQixNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRTtRQUMvQixJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssTUFBTSxFQUFFO1lBQzVCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1NBQ3hCO1FBQ0QsTUFBTSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFFekIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQixNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7Ozs7SUFFTyxXQUFXO2NBQ1gsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUk7O2NBQzdCLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVc7O2NBQzVDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUU7UUFDakMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsV0FBVyxHQUFHLFFBQVEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3BELENBQUM7Ozs7O0lBRU8sa0JBQWtCO1FBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxPQUFPO1lBQUUsT0FBTztRQUU1QyxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDO2FBQ3ZDLElBQUksQ0FDSCxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUN4QixNQUFNOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQyxFQUMzQixZQUFZLENBQUMsR0FBRyxDQUFDLENBQ2xCO2FBQ0EsU0FBUzs7O1FBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUI7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBQyxFQUFDLENBQUM7SUFDOUUsQ0FBQzs7O1lBckhGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsUUFBUTtnQkFDbEIsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLFFBQVEsRUFBRTs7Ozs7O0dBTVQ7Z0JBQ0QsSUFBSSxFQUFFO29CQUNKLG1CQUFtQixFQUFFLFFBQVE7aUJBQzlCO2dCQUNELG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0Qzs7O29CQU9FLEtBQUs7b0JBQ0wsS0FBSztxQkFDTCxLQUFLO3NCQUNMLEtBQUs7bUJBQ0wsS0FBSzt3QkFDTCxLQUFLOzBCQUNMLEtBQUs7d0JBQ0wsTUFBTTs7QUFMaUI7SUFBZCxXQUFXLEVBQUU7OzhDQUFZO0FBR1Y7SUFBZixZQUFZLEVBQUU7O2lEQUFrQjs7O0lBVjFDLHdDQUE2Qzs7SUFDN0MsMkNBQWlEOztJQUlqRCwrQkFBMkM7O0lBQzNDLCtCQUE0Qzs7SUFDNUMsZ0NBQW1DOztJQUNuQyxpQ0FBc0Q7O0lBQ3RELDhCQUFnQzs7SUFDaEMsbUNBQTBDOztJQUMxQyxxQ0FBaUQ7O0lBQ2pELG1DQUF5RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVGVtcGxhdGVSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaGFydCwgRXZlbnQgfSBmcm9tICdAYW50di9nMic7XG5pbXBvcnQgeyBHMkJhc2VDb21wb25lbnQsIEcySW50ZXJhY3Rpb25UeXBlIH0gZnJvbSAnQGRlbG9uL2NoYXJ0L2NvcmUnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyLCBOdW1iZXJJbnB1dCB9IGZyb20gJ0BkZWxvbi91dGlsL290aGVyJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZmlsdGVyLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmNvbnN0IFRJVExFX0hFSUdIVCA9IDQxO1xuXG5leHBvcnQgaW50ZXJmYWNlIEcyQmFyRGF0YSB7XG4gIHg6IE56U2FmZUFueTtcbiAgeTogTnpTYWZlQW55O1xuICBjb2xvcj86IHN0cmluZztcbiAgW2tleTogc3RyaW5nXTogTnpTYWZlQW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEcyQmFyQ2xpY2tJdGVtIHtcbiAgaXRlbTogRzJCYXJEYXRhO1xuICBldjogRXZlbnQ7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2cyLWJhcicsXG4gIGV4cG9ydEFzOiAnZzJCYXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJ0aXRsZVwiPlxuICAgICAgPGg0IHN0eWxlPVwibWFyZ2luLWJvdHRvbTogMjBweDtcIj57eyB0aXRsZSB9fTwvaDQ+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPG56LXNrZWxldG9uICpuZ0lmPVwiIWxvYWRlZFwiPjwvbnotc2tlbGV0b24+XG4gICAgPGRpdiAjY29udGFpbmVyPjwvZGl2PlxuICBgLFxuICBob3N0OiB7XG4gICAgJ1tzdHlsZS5oZWlnaHQucHhdJzogJ2hlaWdodCcsXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgRzJCYXJDb21wb25lbnQgZXh0ZW5kcyBHMkJhc2VDb21wb25lbnQge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfaGVpZ2h0OiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2F1dG9MYWJlbDogQm9vbGVhbklucHV0O1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBjb2xvciA9ICdyZ2JhKDI0LCAxNDQsIDI1NSwgMC44NSknO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBoZWlnaHQgPSAwO1xuICBASW5wdXQoKSBwYWRkaW5nOiBudW1iZXIgfCBudW1iZXJbXSB8ICdhdXRvJyA9ICdhdXRvJztcbiAgQElucHV0KCkgZGF0YTogRzJCYXJEYXRhW10gPSBbXTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGF1dG9MYWJlbCA9IHRydWU7XG4gIEBJbnB1dCgpIGludGVyYWN0aW9uOiBHMkludGVyYWN0aW9uVHlwZSA9ICdub25lJztcbiAgQE91dHB1dCgpIGNsaWNrSXRlbSA9IG5ldyBFdmVudEVtaXR0ZXI8RzJCYXJDbGlja0l0ZW0+KCk7XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIHByaXZhdGUgZ2V0SGVpZ2h0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMudGl0bGUgPyB0aGlzLmhlaWdodCAtIFRJVExFX0hFSUdIVCA6IHRoaXMuaGVpZ2h0O1xuICB9XG5cbiAgaW5zdGFsbCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IG5vZGUsIHBhZGRpbmcsIGludGVyYWN0aW9uLCB0aGVtZSB9ID0gdGhpcztcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IG5vZGUubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBjaGFydDogQ2hhcnQgPSAodGhpcy5fY2hhcnQgPSBuZXcgKHdpbmRvdyBhcyBhbnkpLkcyLkNoYXJ0KHtcbiAgICAgIGNvbnRhaW5lcixcbiAgICAgIGF1dG9GaXQ6IHRydWUsXG4gICAgICBoZWlnaHQ6IHRoaXMuZ2V0SGVpZ2h0KCksXG4gICAgICBwYWRkaW5nLFxuICAgICAgdGhlbWUsXG4gICAgfSkpO1xuICAgIHRoaXMudXBkYXRlbGFiZWwoKTtcbiAgICBjaGFydC5heGlzKCd5Jywge1xuICAgICAgdGl0bGU6IG51bGwsXG4gICAgICBsaW5lOiBudWxsLFxuICAgICAgdGlja0xpbmU6IG51bGwsXG4gICAgfSk7XG4gICAgY2hhcnQuc2NhbGUoe1xuICAgICAgeDoge1xuICAgICAgICB0eXBlOiAnY2F0JyxcbiAgICAgIH0sXG4gICAgICB5OiB7XG4gICAgICAgIG1pbjogMCxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgY2hhcnQudG9vbHRpcCh7XG4gICAgICBzaG93VGl0bGU6IGZhbHNlLFxuICAgIH0pO1xuICAgIGlmIChpbnRlcmFjdGlvbiAhPT0gJ25vbmUnKSB7XG4gICAgICBjaGFydC5pbnRlcmFjdGlvbihpbnRlcmFjdGlvbik7XG4gICAgfVxuICAgIGNoYXJ0LmxlZ2VuZChmYWxzZSk7XG4gICAgY2hhcnRcbiAgICAgIC5pbnRlcnZhbCgpXG4gICAgICAucG9zaXRpb24oJ3gqeScpXG4gICAgICAuY29sb3IoJ3gqeScsICh4LCB5KSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbG9ySXRlbSA9IHRoaXMuZGF0YS5maW5kKHcgPT4gdy54ID09PSB4ICYmIHcueSA9PT0geSk7XG4gICAgICAgIHJldHVybiBjb2xvckl0ZW0gJiYgY29sb3JJdGVtLmNvbG9yID8gY29sb3JJdGVtLmNvbG9yIDogdGhpcy5jb2xvcjtcbiAgICAgIH0pXG4gICAgICAudG9vbHRpcCgneCp5JywgKHgsIHkpID0+ICh7IG5hbWU6IHgsIHZhbHVlOiB5IH0pKTtcblxuICAgIGNoYXJ0Lm9uKGBpbnRlcnZhbDpjbGlja2AsIChldjogRXZlbnQpID0+IHtcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB0aGlzLmNsaWNrSXRlbS5lbWl0KHsgaXRlbTogZXYuZGF0YT8uZGF0YSwgZXYgfSkpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5hdHRhY2hDaGFydCgpO1xuICB9XG5cbiAgYXR0YWNoQ2hhcnQoKTogdm9pZCB7XG4gICAgY29uc3QgeyBfY2hhcnQsIHBhZGRpbmcsIGRhdGEgfSA9IHRoaXM7XG4gICAgaWYgKCFfY2hhcnQgfHwgIWRhdGEgfHwgZGF0YS5sZW5ndGggPD0gMCkgcmV0dXJuO1xuICAgIHRoaXMuaW5zdGFsbFJlc2l6ZUV2ZW50KCk7XG4gICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoKTtcbiAgICBpZiAoX2NoYXJ0LmhlaWdodCAhPT0gaGVpZ2h0KSB7XG4gICAgICBfY2hhcnQuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cbiAgICBfY2hhcnQucGFkZGluZyA9IHBhZGRpbmc7XG5cbiAgICBfY2hhcnQuZGF0YShkYXRhKTtcbiAgICBfY2hhcnQucmVuZGVyKCk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZWxhYmVsKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgbm9kZSwgZGF0YSwgX2NoYXJ0IH0gPSB0aGlzO1xuICAgIGNvbnN0IGNhbnZhc1dpZHRoID0gbm9kZS5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoO1xuICAgIGNvbnN0IG1pbldpZHRoID0gZGF0YS5sZW5ndGggKiAzMDtcbiAgICBfY2hhcnQuYXhpcygneCcsIGNhbnZhc1dpZHRoID4gbWluV2lkdGgpLnJlbmRlcigpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbnN0YWxsUmVzaXplRXZlbnQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmF1dG9MYWJlbCB8fCB0aGlzLnJlc2l6ZSQpIHJldHVybjtcblxuICAgIHRoaXMucmVzaXplJCA9IGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcbiAgICAgICAgZmlsdGVyKCgpID0+ICEhdGhpcy5fY2hhcnQpLFxuICAgICAgICBkZWJvdW5jZVRpbWUoMjAwKSxcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy51cGRhdGVsYWJlbCgpKSk7XG4gIH1cbn1cbiJdfQ==