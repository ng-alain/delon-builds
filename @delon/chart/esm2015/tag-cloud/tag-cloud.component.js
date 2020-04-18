/**
 * @fileoverview added by tsickle
 * Generated from: tag-cloud.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, NgZone, ViewEncapsulation, } from '@angular/core';
import DataSet from '@antv/data-set';
import { Chart, registerShape, Util } from '@antv/g2';
import { InputNumber } from '@delon/util';
import { fromEvent } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';
/**
 * @record
 */
export function G2TagCloudData() { }
if (false) {
    /** @type {?|undefined} */
    G2TagCloudData.prototype.value;
    /** @type {?|undefined} */
    G2TagCloudData.prototype.name;
    /**
     * @deprecated Use `name` instead
     * @type {?|undefined}
     */
    G2TagCloudData.prototype.x;
    /**
     * @deprecated 10.0.0. This is deprecated and going to be removed in 10.0.0.
     * @type {?|undefined}
     */
    G2TagCloudData.prototype.category;
    /* Skipping unhandled member: [key: string]: any;*/
}
export class G2TagCloudComponent {
    // #endregion
    /**
     * @param {?} el
     * @param {?} ngZone
     */
    constructor(el, ngZone) {
        this.el = el;
        this.ngZone = ngZone;
        // #region fields
        this.delay = 100;
        this.width = 0;
        this.height = 200;
        this.padding = 0;
        this.data = [];
    }
    /**
     * @private
     * @return {?}
     */
    initTagCloud() {
        registerShape('point', 'cloud', {
            /**
             * @param {?} cfg
             * @param {?} container
             * @return {?}
             */
            draw(cfg, container) {
                /** @type {?} */
                const data = (/** @type {?} */ (cfg.data));
                /** @type {?} */
                const textShape = container.addShape('text', {
                    attrs: Object.assign(Object.assign({}, cfg.style), { fontSize: data.size, text: data.text, textAlign: 'center', fontFamily: data.font, fill: cfg.color, textBaseline: 'Alphabetic', x: cfg.x, y: cfg.y }),
                });
                if (data.rotate) {
                    Util.rotate(textShape, (data.rotate * Math.PI) / 180);
                }
                return textShape;
            },
        });
    }
    /**
     * @private
     * @return {?}
     */
    install() {
        const { el, padding } = this;
        if (this.height === 0) {
            this.height = this.el.nativeElement.clientHeight;
        }
        if (this.width === 0) {
            this.width = this.el.nativeElement.clientWidth;
        }
        /** @type {?} */
        const chart = (this.chart = new Chart({
            container: el.nativeElement,
            autoFit: false,
            padding,
            height: this.height,
            width: this.width,
        }));
        chart.scale({
            x: { nice: false },
            y: { nice: false },
        });
        chart.legend(false);
        chart.axis(false);
        chart.tooltip({
            showTitle: false,
            showMarkers: false,
        });
        ((/** @type {?} */ (chart.coordinate()))).reflect();
        chart
            .point()
            .position('x*y')
            .color('text')
            .shape('cloud')
            .state({
            active: {
                style: {
                    fillOpacity: 0.4,
                },
            },
        });
        chart.interaction('element-active');
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
        chart.height = this.height;
        chart.width = this.width;
        chart.padding = padding;
        /** @type {?} */
        const dv = new DataSet.View().source(data);
        /** @type {?} */
        const range = dv.range('value');
        /** @type {?} */
        const min = range[0];
        /** @type {?} */
        const max = range[1];
        dv.transform((/** @type {?} */ ({
            type: 'tag-cloud',
            fields: ['name', 'value'],
            // imageMask,
            font: 'Verdana',
            size: [this.width, this.height],
            // 宽高设置最好根据 imageMask 做调整
            padding: 0,
            timeInterval: 5000,
            // max execute time
            /**
             * @return {?}
             */
            rotate() {
                /** @type {?} */
                let random = ~~(Math.random() * 4) % 4;
                if (random === 2) {
                    random = 0;
                }
                return random * 90; // 0, 90, 270
            },
            /**
             * @param {?} d
             * @return {?}
             */
            fontSize(d) {
                return ((d.value - min) / (max - min)) * (32 - 8) + 8;
            },
        })));
        chart.data(dv.rows);
        chart.render();
    }
    /**
     * @private
     * @return {?}
     */
    _attachChart() {
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => this.attachChart()));
    }
    /**
     * @private
     * @return {?}
     */
    installResizeEvent() {
        this.resize$ = fromEvent(window, 'resize')
            .pipe(filter((/**
         * @return {?}
         */
        () => !!this.chart)), debounceTime(200))
            .subscribe((/**
         * @return {?}
         */
        () => this._attachChart()));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initTagCloud();
        this.installResizeEvent();
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
        this._attachChart();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.resize$.unsubscribe();
        if (this.chart) {
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => this.chart.destroy()));
        }
    }
}
G2TagCloudComponent.decorators = [
    { type: Component, args: [{
                selector: 'g2-tag-cloud',
                exportAs: 'g2TagCloud',
                template: ``,
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
G2TagCloudComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone }
];
G2TagCloudComponent.propDecorators = {
    delay: [{ type: Input }],
    width: [{ type: Input }],
    height: [{ type: Input }],
    padding: [{ type: Input }],
    data: [{ type: Input }]
};
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2TagCloudComponent.prototype, "delay", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2TagCloudComponent.prototype, "width", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2TagCloudComponent.prototype, "height", void 0);
if (false) {
    /**
     * @type {?}
     * @private
     */
    G2TagCloudComponent.prototype.resize$;
    /**
     * @type {?}
     * @private
     */
    G2TagCloudComponent.prototype.chart;
    /** @type {?} */
    G2TagCloudComponent.prototype.delay;
    /** @type {?} */
    G2TagCloudComponent.prototype.width;
    /** @type {?} */
    G2TagCloudComponent.prototype.height;
    /** @type {?} */
    G2TagCloudComponent.prototype.padding;
    /** @type {?} */
    G2TagCloudComponent.prototype.data;
    /**
     * @type {?}
     * @private
     */
    G2TagCloudComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    G2TagCloudComponent.prototype.ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLWNsb3VkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9jaGFydC90YWctY2xvdWQvIiwic291cmNlcyI6WyJ0YWctY2xvdWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUlOLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLE9BQU8sTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDdEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUUxQyxPQUFPLEVBQUUsU0FBUyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBRXRELG9DQVlDOzs7SUFYQywrQkFBZTs7SUFDZiw4QkFBYzs7Ozs7SUFJZCwyQkFBVzs7Ozs7SUFJWCxrQ0FBZTs7O0FBWWpCLE1BQU0sT0FBTyxtQkFBbUI7Ozs7OztJQWM5QixZQUFvQixFQUE4QixFQUFVLE1BQWM7UUFBdEQsT0FBRSxHQUFGLEVBQUUsQ0FBNEI7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFROztRQVJsRCxVQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ1osVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNWLFdBQU0sR0FBRyxHQUFHLENBQUM7UUFDNUIsWUFBTyxHQUErQixDQUFDLENBQUM7UUFDeEMsU0FBSSxHQUFxQixFQUFFLENBQUM7SUFJd0MsQ0FBQzs7Ozs7SUFFdEUsWUFBWTtRQUNsQixhQUFhLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRTs7Ozs7O1lBQzlCLElBQUksQ0FBQyxHQUFHLEVBQUUsU0FBb0I7O3NCQUN0QixJ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QUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBQyxDQUFDO1NBQzNEO0lBQ0gsQ0FBQzs7O1lBN0pGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFFBQVEsRUFBRSxFQUFFO2dCQUNaLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0Qzs7OztZQXBDQyxVQUFVO1lBRVYsTUFBTTs7O29CQXlDTCxLQUFLO29CQUNMLEtBQUs7cUJBQ0wsS0FBSztzQkFDTCxLQUFLO21CQUNMLEtBQUs7O0FBSmtCO0lBQWQsV0FBVyxFQUFFOztrREFBYTtBQUNaO0lBQWQsV0FBVyxFQUFFOztrREFBVztBQUNWO0lBQWQsV0FBVyxFQUFFOzttREFBYzs7Ozs7O0lBUHJDLHNDQUE4Qjs7Ozs7SUFDOUIsb0NBQXFCOztJQUlyQixvQ0FBb0M7O0lBQ3BDLG9DQUFrQzs7SUFDbEMscUNBQXFDOztJQUNyQyxzQ0FBaUQ7O0lBQ2pELG1DQUFxQzs7Ozs7SUFJekIsaUNBQXNDOzs7OztJQUFFLHFDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBEYXRhU2V0IGZyb20gJ0BhbnR2L2RhdGEtc2V0JztcbmltcG9ydCB7IENoYXJ0LCByZWdpc3RlclNoYXBlLCBVdGlsIH0gZnJvbSAnQGFudHYvZzInO1xuaW1wb3J0IHsgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEcyVGFnQ2xvdWREYXRhIHtcbiAgdmFsdWU/OiBudW1iZXI7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBVc2UgYG5hbWVgIGluc3RlYWRcbiAgICovXG4gIHg/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCAxMC4wLjAuIFRoaXMgaXMgZGVwcmVjYXRlZCBhbmQgZ29pbmcgdG8gYmUgcmVtb3ZlZCBpbiAxMC4wLjAuXG4gICAqL1xuICBjYXRlZ29yeT86IGFueTtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnMi10YWctY2xvdWQnLFxuICBleHBvcnRBczogJ2cyVGFnQ2xvdWQnLFxuICB0ZW1wbGF0ZTogYGAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgRzJUYWdDbG91ZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBPbkluaXQge1xuICBwcml2YXRlIHJlc2l6ZSQ6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBjaGFydDogQ2hhcnQ7XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBkZWxheSA9IDEwMDtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgd2lkdGggPSAwO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBoZWlnaHQgPSAyMDA7XG4gIEBJbnB1dCgpIHBhZGRpbmc6IG51bWJlciB8IG51bWJlcltdIHwgJ2F1dG8nID0gMDtcbiAgQElucHV0KCkgZGF0YTogRzJUYWdDbG91ZERhdGFbXSA9IFtdO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PiwgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSkge31cblxuICBwcml2YXRlIGluaXRUYWdDbG91ZCgpIHtcbiAgICByZWdpc3RlclNoYXBlKCdwb2ludCcsICdjbG91ZCcsIHtcbiAgICAgIGRyYXcoY2ZnLCBjb250YWluZXI6IE56U2FmZUFueSkge1xuICAgICAgICBjb25zdCBkYXRhID0gY2ZnLmRhdGEgYXMgTnpTYWZlQW55O1xuICAgICAgICBjb25zdCB0ZXh0U2hhcGUgPSBjb250YWluZXIuYWRkU2hhcGUoJ3RleHQnLCB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIC4uLmNmZy5zdHlsZSxcbiAgICAgICAgICAgIGZvbnRTaXplOiBkYXRhLnNpemUsXG4gICAgICAgICAgICB0ZXh0OiBkYXRhLnRleHQsXG4gICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgZm9udEZhbWlseTogZGF0YS5mb250LFxuICAgICAgICAgICAgZmlsbDogY2ZnLmNvbG9yLFxuICAgICAgICAgICAgdGV4dEJhc2VsaW5lOiAnQWxwaGFiZXRpYycsXG4gICAgICAgICAgICB4OiBjZmcueCxcbiAgICAgICAgICAgIHk6IGNmZy55LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZGF0YS5yb3RhdGUpIHtcbiAgICAgICAgICBVdGlsLnJvdGF0ZSh0ZXh0U2hhcGUsIChkYXRhLnJvdGF0ZSAqIE1hdGguUEkpIC8gMTgwKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGV4dFNoYXBlO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgaW5zdGFsbCgpIHtcbiAgICBjb25zdCB7IGVsLCBwYWRkaW5nIH0gPSB0aGlzO1xuICAgIGlmICh0aGlzLmhlaWdodCA9PT0gMCkge1xuICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgIH1cbiAgICBpZiAodGhpcy53aWR0aCA9PT0gMCkge1xuICAgICAgdGhpcy53aWR0aCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aDtcbiAgICB9XG5cbiAgICBjb25zdCBjaGFydCA9ICh0aGlzLmNoYXJ0ID0gbmV3IENoYXJ0KHtcbiAgICAgIGNvbnRhaW5lcjogZWwubmF0aXZlRWxlbWVudCxcbiAgICAgIGF1dG9GaXQ6IGZhbHNlLFxuICAgICAgcGFkZGluZyxcbiAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXG4gICAgICB3aWR0aDogdGhpcy53aWR0aCxcbiAgICB9KSk7XG4gICAgY2hhcnQuc2NhbGUoe1xuICAgICAgeDogeyBuaWNlOiBmYWxzZSB9LFxuICAgICAgeTogeyBuaWNlOiBmYWxzZSB9LFxuICAgIH0pO1xuICAgIGNoYXJ0LmxlZ2VuZChmYWxzZSk7XG4gICAgY2hhcnQuYXhpcyhmYWxzZSk7XG4gICAgY2hhcnQudG9vbHRpcCh7XG4gICAgICBzaG93VGl0bGU6IGZhbHNlLFxuICAgICAgc2hvd01hcmtlcnM6IGZhbHNlLFxuICAgIH0pO1xuICAgIChjaGFydC5jb29yZGluYXRlKCkgYXMgTnpTYWZlQW55KS5yZWZsZWN0KCk7XG4gICAgY2hhcnRcbiAgICAgIC5wb2ludCgpXG4gICAgICAucG9zaXRpb24oJ3gqeScpXG4gICAgICAuY29sb3IoJ3RleHQnKVxuICAgICAgLnNoYXBlKCdjbG91ZCcpXG4gICAgICAuc3RhdGUoe1xuICAgICAgICBhY3RpdmU6IHtcbiAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgZmlsbE9wYWNpdHk6IDAuNCxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgY2hhcnQuaW50ZXJhY3Rpb24oJ2VsZW1lbnQtYWN0aXZlJyk7XG5cbiAgICB0aGlzLmF0dGFjaENoYXJ0KCk7XG4gIH1cblxuICBwcml2YXRlIGF0dGFjaENoYXJ0KCkge1xuICAgIGNvbnN0IHsgY2hhcnQsIHBhZGRpbmcsIGRhdGEgfSA9IHRoaXM7XG4gICAgaWYgKCFjaGFydCB8fCAhZGF0YSB8fCBkYXRhLmxlbmd0aCA8PSAwKSByZXR1cm47XG5cbiAgICBjaGFydC5oZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgICBjaGFydC53aWR0aCA9IHRoaXMud2lkdGg7XG4gICAgY2hhcnQucGFkZGluZyA9IHBhZGRpbmc7XG5cbiAgICBjb25zdCBkdiA9IG5ldyBEYXRhU2V0LlZpZXcoKS5zb3VyY2UoZGF0YSk7XG4gICAgY29uc3QgcmFuZ2UgPSBkdi5yYW5nZSgndmFsdWUnKTtcbiAgICBjb25zdCBtaW4gPSByYW5nZVswXTtcbiAgICBjb25zdCBtYXggPSByYW5nZVsxXTtcblxuICAgIGR2LnRyYW5zZm9ybSh7XG4gICAgICB0eXBlOiAndGFnLWNsb3VkJyxcbiAgICAgIGZpZWxkczogWyduYW1lJywgJ3ZhbHVlJ10sXG4gICAgICAvLyBpbWFnZU1hc2ssXG4gICAgICBmb250OiAnVmVyZGFuYScsXG4gICAgICBzaXplOiBbdGhpcy53aWR0aCwgdGhpcy5oZWlnaHRdLCAvLyDlrr3pq5jorr7nva7mnIDlpb3moLnmja4gaW1hZ2VNYXNrIOWBmuiwg+aVtFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIHRpbWVJbnRlcnZhbDogNTAwMCwgLy8gbWF4IGV4ZWN1dGUgdGltZVxuICAgICAgcm90YXRlKCkge1xuICAgICAgICBsZXQgcmFuZG9tID0gfn4oTWF0aC5yYW5kb20oKSAqIDQpICUgNDtcbiAgICAgICAgaWYgKHJhbmRvbSA9PT0gMikge1xuICAgICAgICAgIHJhbmRvbSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJhbmRvbSAqIDkwOyAvLyAwLCA5MCwgMjcwXG4gICAgICB9LFxuICAgICAgZm9udFNpemUoZDogTnpTYWZlQW55KSB7XG4gICAgICAgIHJldHVybiAoKGQudmFsdWUgLSBtaW4pIC8gKG1heCAtIG1pbikpICogKDMyIC0gOCkgKyA4O1xuICAgICAgfSxcbiAgICB9IGFzIE56U2FmZUFueSk7XG4gICAgY2hhcnQuZGF0YShkdi5yb3dzKTtcbiAgICBjaGFydC5yZW5kZXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2F0dGFjaENoYXJ0KCkge1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuYXR0YWNoQ2hhcnQoKSk7XG4gIH1cblxuICBwcml2YXRlIGluc3RhbGxSZXNpemVFdmVudCgpIHtcbiAgICB0aGlzLnJlc2l6ZSQgPSBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJylcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoKCkgPT4gISF0aGlzLmNoYXJ0KSxcbiAgICAgICAgZGVib3VuY2VUaW1lKDIwMCksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuX2F0dGFjaENoYXJ0KCkpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbml0VGFnQ2xvdWQoKTtcbiAgICB0aGlzLmluc3RhbGxSZXNpemVFdmVudCgpO1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbnN0YWxsKCksIHRoaXMuZGVsYXkpKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuX2F0dGFjaENoYXJ0KCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnJlc2l6ZSQudW5zdWJzY3JpYmUoKTtcbiAgICBpZiAodGhpcy5jaGFydCkge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5jaGFydC5kZXN0cm95KCkpO1xuICAgIH1cbiAgfVxufVxuIl19