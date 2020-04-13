/**
 * @fileoverview added by tsickle
 * Generated from: bar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, NgZone, ViewChild, ViewEncapsulation, } from '@angular/core';
import { Chart } from '@antv/g2';
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
    /** @type {?|undefined} */
    G2BarData.prototype.color;
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
        this.interaction = 'none';
    }
    /**
     * @private
     * @return {?}
     */
    getHeight() {
        return this.title ? this.height - TITLE_HEIGHT : this.height;
    }
    /**
     * @private
     * @return {?}
     */
    install() {
        const { node, padding, interaction } = this;
        /** @type {?} */
        const container = (/** @type {?} */ (node.nativeElement));
        /** @type {?} */
        const chart = (this.chart = new Chart({
            container,
            autoFit: true,
            height: this.getHeight(),
            padding,
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
        this.attachChart();
    }
    /**
     * @private
     * @return {?}
     */
    attachChart() {
        const { chart, padding, data } = this;
        if (!chart || !data || data.length <= 0)
            return;
        this.installResizeEvent();
        /** @type {?} */
        const height = this.getHeight();
        if (chart.height !== height) {
            chart.height = height;
        }
        chart.padding = padding;
        chart.data(data);
        chart.render();
    }
    /**
     * @private
     * @return {?}
     */
    updatelabel() {
        const { node, data, chart } = this;
        /** @type {?} */
        const canvasWidth = node.nativeElement.clientWidth;
        /** @type {?} */
        const minWidth = data.length * 30;
        chart.axis('x', canvasWidth > minWidth).render();
    }
    /**
     * @private
     * @return {?}
     */
    installResizeEvent() {
        if (!this.autoLabel || this.resize$)
            return;
        this.resize$ = fromEvent(window, 'resize')
            .pipe(filter((/**
         * @return {?}
         */
        () => !!this.chart)), debounceTime(200))
            .subscribe((/**
         * @return {?}
         */
        () => this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => this.updatelabel()))));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
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
        if (this.resize$) {
            this.resize$.unsubscribe();
        }
        if (this.chart) {
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => this.chart.destroy()));
        }
    }
}
G2BarComponent.decorators = [
    { type: Component, args: [{
                selector: 'g2-bar',
                exportAs: 'g2Bar',
                template: "<ng-container *stringTemplateOutlet=\"title\">\n  <h4 style=\"margin-bottom:20px\">{{title}}</h4>\n</ng-container>\n<div #container></div>\n",
                host: {
                    '[style.height.px]': 'height',
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
G2BarComponent.ctorParameters = () => [
    { type: NgZone }
];
G2BarComponent.propDecorators = {
    node: [{ type: ViewChild, args: ['container', { static: true },] }],
    delay: [{ type: Input }],
    title: [{ type: Input }],
    color: [{ type: Input }],
    height: [{ type: Input }],
    padding: [{ type: Input }],
    data: [{ type: Input }],
    autoLabel: [{ type: Input }],
    interaction: [{ type: Input }]
};
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2BarComponent.prototype, "delay", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2BarComponent.prototype, "height", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], G2BarComponent.prototype, "autoLabel", void 0);
if (false) {
    /**
     * @type {?}
     * @private
     */
    G2BarComponent.prototype.resize$;
    /**
     * @type {?}
     * @private
     */
    G2BarComponent.prototype.chart;
    /**
     * @type {?}
     * @private
     */
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
    G2BarComponent.prototype.interaction;
    /**
     * @type {?}
     * @private
     */
    G2BarComponent.prototype.ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9jaGFydC9iYXIvIiwic291cmNlcyI6WyJiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUtOLFNBQVMsRUFDVCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUVqQyxPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUV4RCxPQUFPLEVBQUUsU0FBUyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDOztNQUVoRCxZQUFZLEdBQUcsRUFBRTs7OztBQUV2QiwrQkFLQzs7O0lBSkMsc0JBQU87O0lBQ1Asc0JBQU87O0lBQ1AsMEJBQWU7OztBQWVqQixNQUFNLE9BQU8sY0FBYzs7Ozs7SUFrQnpCLFlBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFROztRQVhWLFVBQUssR0FBRyxDQUFDLENBQUM7UUFFekIsVUFBSyxHQUFHLDBCQUEwQixDQUFDO1FBQ3BCLFdBQU0sR0FBRyxDQUFDLENBQUM7UUFDMUIsWUFBTyxHQUErQixNQUFNLENBQUM7UUFDN0MsU0FBSSxHQUFnQixFQUFFLENBQUM7UUFDUCxjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLGdCQUFXLEdBQW9CLE1BQU0sQ0FBQztJQUlWLENBQUM7Ozs7O0lBRTlCLFNBQVM7UUFDZixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQy9ELENBQUM7Ozs7O0lBRU8sT0FBTztjQUNQLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsR0FBRyxJQUFJOztjQUVyQyxTQUFTLEdBQUcsbUJBQUEsSUFBSSxDQUFDLGFBQWEsRUFBZTs7Y0FDN0MsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQztZQUNwQyxTQUFTO1lBQ1QsT0FBTyxFQUFFLElBQUk7WUFDYixNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUN4QixPQUFPO1NBQ1IsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ2QsS0FBSyxFQUFFLElBQUk7WUFDWCxJQUFJLEVBQUUsSUFBSTtZQUNWLFFBQVEsRUFBRSxJQUFJO1NBQ2YsQ0FBQyxDQUFDO1FBQ0gsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUNWLENBQUMsRUFBRTtnQkFDRCxJQUFJLEVBQUUsS0FBSzthQUNaO1lBQ0QsQ0FBQyxFQUFFO2dCQUNELEdBQUcsRUFBRSxDQUFDO2FBQ1A7U0FDRixDQUFDLENBQUM7UUFDSCxLQUFLLENBQUMsT0FBTyxDQUFDO1lBQ1osU0FBUyxFQUFFLEtBQUs7U0FDakIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxXQUFXLEtBQUssTUFBTSxFQUFFO1lBQzFCLEtBQUssQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDaEM7UUFDRCxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BCLEtBQUs7YUFDRixRQUFRLEVBQUU7YUFDVixRQUFRLENBQUMsS0FBSyxDQUFDO2FBQ2YsS0FBSyxDQUFDLEtBQUs7Ozs7O1FBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O2tCQUNmLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7Ozs7WUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFDO1lBQzdELE9BQU8sU0FBUyxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDckUsQ0FBQyxFQUFDO2FBQ0QsT0FBTyxDQUFDLEtBQUs7Ozs7O1FBQUUsQ0FBQyxDQUFZLEVBQUUsQ0FBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDO1FBRTNFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7OztJQUVPLFdBQVc7Y0FDWCxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBSTtRQUNyQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQztZQUFFLE9BQU87UUFDaEQsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7O2NBQ3BCLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFO1FBQy9CLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxNQUFNLEVBQUU7WUFDM0IsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7U0FDdkI7UUFDRCxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUV4QixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pCLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNqQixDQUFDOzs7OztJQUVPLFdBQVc7Y0FDWCxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSTs7Y0FDNUIsV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVzs7Y0FDNUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRTtRQUNqQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxXQUFXLEdBQUcsUUFBUSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbkQsQ0FBQzs7Ozs7SUFFTyxrQkFBa0I7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLE9BQU87WUFBRSxPQUFPO1FBRTVDLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUM7YUFDdkMsSUFBSSxDQUNILE1BQU07OztRQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFDLEVBQzFCLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FDbEI7YUFDQSxTQUFTOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQjs7O1FBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFDLEVBQUMsQ0FBQztJQUM5RSxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxVQUFVOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQUM7SUFDcEYsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQjs7O1FBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFDLENBQUM7SUFDMUQsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUM1QjtRQUNELElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCOzs7WUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUFDLENBQUM7U0FDM0Q7SUFDSCxDQUFDOzs7WUE3SEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxRQUFRO2dCQUNsQixRQUFRLEVBQUUsT0FBTztnQkFDakIsd0pBQW1DO2dCQUNuQyxJQUFJLEVBQUU7b0JBQ0osbUJBQW1CLEVBQUUsUUFBUTtpQkFDOUI7Z0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDOzs7O1lBbENDLE1BQU07OzttQkFzQ0wsU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7b0JBSXZDLEtBQUs7b0JBQ0wsS0FBSztvQkFDTCxLQUFLO3FCQUNMLEtBQUs7c0JBQ0wsS0FBSzttQkFDTCxLQUFLO3dCQUNMLEtBQUs7MEJBQ0wsS0FBSzs7QUFQa0I7SUFBZCxXQUFXLEVBQUU7OzZDQUFXO0FBR1Y7SUFBZCxXQUFXLEVBQUU7OzhDQUFZO0FBR1Y7SUFBZixZQUFZLEVBQUU7O2lEQUFrQjs7Ozs7O0lBWjFDLGlDQUE4Qjs7Ozs7SUFDOUIsK0JBQXFCOzs7OztJQUNyQiw4QkFBbUU7O0lBSW5FLCtCQUFrQzs7SUFDbEMsK0JBQTJDOztJQUMzQywrQkFBNEM7O0lBQzVDLGdDQUFtQzs7SUFDbkMsaUNBQXNEOztJQUN0RCw4QkFBZ0M7O0lBQ2hDLG1DQUEwQzs7SUFDMUMscUNBQStDOzs7OztJQUluQyxnQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaGFydCB9IGZyb20gJ0BhbnR2L2cyJztcbmltcG9ydCB7IEludGVyYWN0aW9uVHlwZSB9IGZyb20gJ0BkZWxvbi9jaGFydC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5jb25zdCBUSVRMRV9IRUlHSFQgPSA0MTtcblxuZXhwb3J0IGludGVyZmFjZSBHMkJhckRhdGEge1xuICB4OiBhbnk7XG4gIHk6IGFueTtcbiAgY29sb3I/OiBzdHJpbmc7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZzItYmFyJyxcbiAgZXhwb3J0QXM6ICdnMkJhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9iYXIuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgJ1tzdHlsZS5oZWlnaHQucHhdJzogJ2hlaWdodCcsXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgRzJCYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSByZXNpemUkOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgY2hhcnQ6IENoYXJ0O1xuICBAVmlld0NoaWxkKCdjb250YWluZXInLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcml2YXRlIG5vZGU6IEVsZW1lbnRSZWY7XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBkZWxheSA9IDA7XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgY29sb3IgPSAncmdiYSgyNCwgMTQ0LCAyNTUsIDAuODUpJztcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgaGVpZ2h0ID0gMDtcbiAgQElucHV0KCkgcGFkZGluZzogbnVtYmVyIHwgbnVtYmVyW10gfCAnYXV0bycgPSAnYXV0byc7XG4gIEBJbnB1dCgpIGRhdGE6IEcyQmFyRGF0YVtdID0gW107XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBhdXRvTGFiZWwgPSB0cnVlO1xuICBASW5wdXQoKSBpbnRlcmFjdGlvbjogSW50ZXJhY3Rpb25UeXBlID0gJ25vbmUnO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5nWm9uZTogTmdab25lKSB7fVxuXG4gIHByaXZhdGUgZ2V0SGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLnRpdGxlID8gdGhpcy5oZWlnaHQgLSBUSVRMRV9IRUlHSFQgOiB0aGlzLmhlaWdodDtcbiAgfVxuXG4gIHByaXZhdGUgaW5zdGFsbCgpIHtcbiAgICBjb25zdCB7IG5vZGUsIHBhZGRpbmcsIGludGVyYWN0aW9uIH0gPSB0aGlzO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gbm9kZS5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IGNoYXJ0ID0gKHRoaXMuY2hhcnQgPSBuZXcgQ2hhcnQoe1xuICAgICAgY29udGFpbmVyLFxuICAgICAgYXV0b0ZpdDogdHJ1ZSxcbiAgICAgIGhlaWdodDogdGhpcy5nZXRIZWlnaHQoKSxcbiAgICAgIHBhZGRpbmcsXG4gICAgfSkpO1xuICAgIHRoaXMudXBkYXRlbGFiZWwoKTtcbiAgICBjaGFydC5heGlzKCd5Jywge1xuICAgICAgdGl0bGU6IG51bGwsXG4gICAgICBsaW5lOiBudWxsLFxuICAgICAgdGlja0xpbmU6IG51bGwsXG4gICAgfSk7XG4gICAgY2hhcnQuc2NhbGUoe1xuICAgICAgeDoge1xuICAgICAgICB0eXBlOiAnY2F0JyxcbiAgICAgIH0sXG4gICAgICB5OiB7XG4gICAgICAgIG1pbjogMCxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgY2hhcnQudG9vbHRpcCh7XG4gICAgICBzaG93VGl0bGU6IGZhbHNlLFxuICAgIH0pO1xuICAgIGlmIChpbnRlcmFjdGlvbiAhPT0gJ25vbmUnKSB7XG4gICAgICBjaGFydC5pbnRlcmFjdGlvbihpbnRlcmFjdGlvbik7XG4gICAgfVxuICAgIGNoYXJ0LmxlZ2VuZChmYWxzZSk7XG4gICAgY2hhcnRcbiAgICAgIC5pbnRlcnZhbCgpXG4gICAgICAucG9zaXRpb24oJ3gqeScpXG4gICAgICAuY29sb3IoJ3gqeScsICh4LCB5KSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbG9ySXRlbSA9IHRoaXMuZGF0YS5maW5kKHcgPT4gdy54ID09PSB4ICYmIHcueSA9PT0geSk7XG4gICAgICAgIHJldHVybiBjb2xvckl0ZW0gJiYgY29sb3JJdGVtLmNvbG9yID8gY29sb3JJdGVtLmNvbG9yIDogdGhpcy5jb2xvcjtcbiAgICAgIH0pXG4gICAgICAudG9vbHRpcCgneCp5JywgKHg6IE56U2FmZUFueSwgeTogTnpTYWZlQW55KSA9PiAoeyBuYW1lOiB4LCB2YWx1ZTogeSB9KSk7XG5cbiAgICB0aGlzLmF0dGFjaENoYXJ0KCk7XG4gIH1cblxuICBwcml2YXRlIGF0dGFjaENoYXJ0KCkge1xuICAgIGNvbnN0IHsgY2hhcnQsIHBhZGRpbmcsIGRhdGEgfSA9IHRoaXM7XG4gICAgaWYgKCFjaGFydCB8fCAhZGF0YSB8fCBkYXRhLmxlbmd0aCA8PSAwKSByZXR1cm47XG4gICAgdGhpcy5pbnN0YWxsUmVzaXplRXZlbnQoKTtcbiAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmdldEhlaWdodCgpO1xuICAgIGlmIChjaGFydC5oZWlnaHQgIT09IGhlaWdodCkge1xuICAgICAgY2hhcnQuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cbiAgICBjaGFydC5wYWRkaW5nID0gcGFkZGluZztcblxuICAgIGNoYXJ0LmRhdGEoZGF0YSk7XG4gICAgY2hhcnQucmVuZGVyKCk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZWxhYmVsKCkge1xuICAgIGNvbnN0IHsgbm9kZSwgZGF0YSwgY2hhcnQgfSA9IHRoaXM7XG4gICAgY29uc3QgY2FudmFzV2lkdGggPSBub2RlLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGg7XG4gICAgY29uc3QgbWluV2lkdGggPSBkYXRhLmxlbmd0aCAqIDMwO1xuICAgIGNoYXJ0LmF4aXMoJ3gnLCBjYW52YXNXaWR0aCA+IG1pbldpZHRoKS5yZW5kZXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5zdGFsbFJlc2l6ZUV2ZW50KCkge1xuICAgIGlmICghdGhpcy5hdXRvTGFiZWwgfHwgdGhpcy5yZXNpemUkKSByZXR1cm47XG5cbiAgICB0aGlzLnJlc2l6ZSQgPSBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJylcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoKCkgPT4gISF0aGlzLmNoYXJ0KSxcbiAgICAgICAgZGVib3VuY2VUaW1lKDIwMCksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMudXBkYXRlbGFiZWwoKSkpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmluc3RhbGwoKSwgdGhpcy5kZWxheSkpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5hdHRhY2hDaGFydCgpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnJlc2l6ZSQpIHtcbiAgICAgIHRoaXMucmVzaXplJC51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5jaGFydCkge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5jaGFydC5kZXN0cm95KCkpO1xuICAgIH1cbiAgfVxufVxuIl19