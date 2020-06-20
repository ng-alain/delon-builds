/**
 * @fileoverview added by tsickle
 * Generated from: tag-cloud.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, NgZone, Output, ViewEncapsulation, } from '@angular/core';
import DataSet from '@antv/data-set';
import { Chart, registerShape, Util } from '@antv/g2';
import { AlainConfigService, deprecation10, InputNumber } from '@delon/util';
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
/**
 * @record
 */
export function G2TagCloudClickItem() { }
if (false) {
    /** @type {?} */
    G2TagCloudClickItem.prototype.item;
    /** @type {?} */
    G2TagCloudClickItem.prototype.ev;
}
export class G2TagCloudComponent {
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
        this.delay = 100;
        this.width = 0;
        this.height = 200;
        this.padding = 0;
        this.data = [];
        this.clickItem = new EventEmitter();
        configSrv.attachKey(this, 'chart', 'theme');
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
                const textShape = container.addShape({
                    type: 'text',
                    name: 'tag-cloud-text',
                    attrs: (/** @type {?} */ (Object.assign(Object.assign({}, cfg.style), { fontSize: data.size, text: data.text, textAlign: 'center', fontFamily: data.font, fill: cfg.color, textBaseline: 'Alphabetic', x: cfg.x, y: cfg.y }))),
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
        const { el, padding, theme } = this;
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
            theme,
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
        chart.on('tag-cloud-text:click', (/**
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
     * @private
     * @return {?}
     */
    attachChart() {
        const { chart, padding, data } = this;
        if (!chart || !data || data.length <= 0)
            return;
        // TODO: compatible
        if (data.find((/**
         * @param {?} w
         * @return {?}
         */
        w => !!w.x)) != null) {
            deprecation10('g2-tag-cloud', 'x', 'name');
            data.forEach((/**
             * @param {?} item
             * @return {?}
             */
            item => {
                item.name = item.x;
            }));
        }
        if (data.find((/**
         * @param {?} w
         * @return {?}
         */
        w => !!w.category)) != null) {
            deprecation10('g2-tag-cloud', 'category');
        }
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
        if (!this.platform.isBrowser) {
            return;
        }
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
    { type: NgZone },
    { type: AlainConfigService },
    { type: Platform }
];
G2TagCloudComponent.propDecorators = {
    delay: [{ type: Input }],
    width: [{ type: Input }],
    height: [{ type: Input }],
    padding: [{ type: Input }],
    data: [{ type: Input }],
    theme: [{ type: Input }],
    clickItem: [{ type: Output }]
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
    /** @type {?} */
    G2TagCloudComponent.prototype.theme;
    /** @type {?} */
    G2TagCloudComponent.prototype.clickItem;
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
    /**
     * @type {?}
     * @private
     */
    G2TagCloudComponent.prototype.platform;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLWNsb3VkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9jaGFydC90YWctY2xvdWQvIiwic291cmNlcyI6WyJ0YWctY2xvdWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBSU4sTUFBTSxFQUNOLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLE9BQU8sTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsS0FBSyxFQUFTLGFBQWEsRUFBUyxJQUFJLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDcEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFN0UsT0FBTyxFQUFFLFNBQVMsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUV0RCxvQ0FZQzs7O0lBWEMsK0JBQWU7O0lBQ2YsOEJBQWM7Ozs7O0lBSWQsMkJBQVc7Ozs7O0lBSVgsa0NBQWU7Ozs7OztBQUlqQix5Q0FHQzs7O0lBRkMsbUNBQXFCOztJQUNyQixpQ0FBVTs7QUFXWixNQUFNLE9BQU8sbUJBQW1COzs7Ozs7OztJQWdCOUIsWUFBb0IsRUFBOEIsRUFBVSxNQUFjLEVBQUUsU0FBNkIsRUFBVSxRQUFrQjtRQUFqSCxPQUFFLEdBQUYsRUFBRSxDQUE0QjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBeUMsYUFBUSxHQUFSLFFBQVEsQ0FBVTs7UUFWN0csVUFBSyxHQUFHLEdBQUcsQ0FBQztRQUNaLFVBQUssR0FBRyxDQUFDLENBQUM7UUFDVixXQUFN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QVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDNUI7UUFDRCxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQjs7O1lBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBQyxDQUFDO1NBQzNEO0lBQ0gsQ0FBQzs7O1lBeExGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFFBQVEsRUFBRSxFQUFFO2dCQUNaLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0Qzs7OztZQTNDQyxVQUFVO1lBR1YsTUFBTTtZQVNDLGtCQUFrQjtZQWhCbEIsUUFBUTs7O29CQXNEZCxLQUFLO29CQUNMLEtBQUs7cUJBQ0wsS0FBSztzQkFDTCxLQUFLO21CQUNMLEtBQUs7b0JBQ0wsS0FBSzt3QkFDTCxNQUFNOztBQU5pQjtJQUFkLFdBQVcsRUFBRTs7a0RBQWE7QUFDWjtJQUFkLFdBQVcsRUFBRTs7a0RBQVc7QUFDVjtJQUFkLFdBQVcsRUFBRTs7bURBQWM7Ozs7OztJQVByQyxzQ0FBOEI7Ozs7O0lBQzlCLG9DQUFxQjs7SUFJckIsb0NBQW9DOztJQUNwQyxvQ0FBa0M7O0lBQ2xDLHFDQUFxQzs7SUFDckMsc0NBQWlEOztJQUNqRCxtQ0FBcUM7O0lBQ3JDLG9DQUEyQzs7SUFDM0Msd0NBQThEOzs7OztJQUlsRCxpQ0FBc0M7Ozs7O0lBQUUscUNBQXNCOzs7OztJQUFpQyx1Q0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IERhdGFTZXQgZnJvbSAnQGFudHYvZGF0YS1zZXQnO1xuaW1wb3J0IHsgQ2hhcnQsIEV2ZW50LCByZWdpc3RlclNoYXBlLCBUeXBlcywgVXRpbCB9IGZyb20gJ0BhbnR2L2cyJztcbmltcG9ydCB7IEFsYWluQ29uZmlnU2VydmljZSwgZGVwcmVjYXRpb24xMCwgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEcyVGFnQ2xvdWREYXRhIHtcbiAgdmFsdWU/OiBudW1iZXI7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBVc2UgYG5hbWVgIGluc3RlYWRcbiAgICovXG4gIHg/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCAxMC4wLjAuIFRoaXMgaXMgZGVwcmVjYXRlZCBhbmQgZ29pbmcgdG8gYmUgcmVtb3ZlZCBpbiAxMC4wLjAuXG4gICAqL1xuICBjYXRlZ29yeT86IGFueTtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEcyVGFnQ2xvdWRDbGlja0l0ZW0ge1xuICBpdGVtOiBHMlRhZ0Nsb3VkRGF0YTtcbiAgZXY6IEV2ZW50O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnMi10YWctY2xvdWQnLFxuICBleHBvcnRBczogJ2cyVGFnQ2xvdWQnLFxuICB0ZW1wbGF0ZTogYGAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgRzJUYWdDbG91ZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBPbkluaXQge1xuICBwcml2YXRlIHJlc2l6ZSQ6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBjaGFydDogQ2hhcnQ7XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBkZWxheSA9IDEwMDtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgd2lkdGggPSAwO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBoZWlnaHQgPSAyMDA7XG4gIEBJbnB1dCgpIHBhZGRpbmc6IG51bWJlciB8IG51bWJlcltdIHwgJ2F1dG8nID0gMDtcbiAgQElucHV0KCkgZGF0YTogRzJUYWdDbG91ZERhdGFbXSA9IFtdO1xuICBASW5wdXQoKSB0aGVtZTogc3RyaW5nIHwgVHlwZXMuTG9vc2VPYmplY3Q7XG4gIEBPdXRwdXQoKSBjbGlja0l0ZW0gPSBuZXcgRXZlbnRFbWl0dGVyPEcyVGFnQ2xvdWRDbGlja0l0ZW0+KCk7XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+LCBwcml2YXRlIG5nWm9uZTogTmdab25lLCBjb25maWdTcnY6IEFsYWluQ29uZmlnU2VydmljZSwgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0pIHtcbiAgICBjb25maWdTcnYuYXR0YWNoS2V5KHRoaXMsICdjaGFydCcsICd0aGVtZScpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0VGFnQ2xvdWQoKSB7XG4gICAgcmVnaXN0ZXJTaGFwZSgncG9pbnQnLCAnY2xvdWQnLCB7XG4gICAgICBkcmF3KGNmZywgY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBjZmcuZGF0YSBhcyBOelNhZmVBbnk7XG4gICAgICAgIGNvbnN0IHRleHRTaGFwZSA9IGNvbnRhaW5lci5hZGRTaGFwZSh7XG4gICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgIG5hbWU6ICd0YWctY2xvdWQtdGV4dCcsXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIC4uLmNmZy5zdHlsZSxcbiAgICAgICAgICAgIGZvbnRTaXplOiBkYXRhLnNpemUsXG4gICAgICAgICAgICB0ZXh0OiBkYXRhLnRleHQsXG4gICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgZm9udEZhbWlseTogZGF0YS5mb250LFxuICAgICAgICAgICAgZmlsbDogY2ZnLmNvbG9yLFxuICAgICAgICAgICAgdGV4dEJhc2VsaW5lOiAnQWxwaGFiZXRpYycsXG4gICAgICAgICAgICB4OiBjZmcueCxcbiAgICAgICAgICAgIHk6IGNmZy55LFxuICAgICAgICAgIH0gYXMgTnpTYWZlQW55LFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGRhdGEucm90YXRlKSB7XG4gICAgICAgICAgVXRpbC5yb3RhdGUodGV4dFNoYXBlLCAoZGF0YS5yb3RhdGUgKiBNYXRoLlBJKSAvIDE4MCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRleHRTaGFwZTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGluc3RhbGwoKSB7XG4gICAgY29uc3QgeyBlbCwgcGFkZGluZywgdGhlbWUgfSA9IHRoaXM7XG4gICAgaWYgKHRoaXMuaGVpZ2h0ID09PSAwKSB7XG4gICAgICB0aGlzLmhlaWdodCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gICAgfVxuICAgIGlmICh0aGlzLndpZHRoID09PSAwKSB7XG4gICAgICB0aGlzLndpZHRoID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoO1xuICAgIH1cblxuICAgIGNvbnN0IGNoYXJ0ID0gKHRoaXMuY2hhcnQgPSBuZXcgQ2hhcnQoe1xuICAgICAgY29udGFpbmVyOiBlbC5uYXRpdmVFbGVtZW50LFxuICAgICAgYXV0b0ZpdDogZmFsc2UsXG4gICAgICBwYWRkaW5nLFxuICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgICAgdGhlbWUsXG4gICAgfSkpO1xuICAgIGNoYXJ0LnNjYWxlKHtcbiAgICAgIHg6IHsgbmljZTogZmFsc2UgfSxcbiAgICAgIHk6IHsgbmljZTogZmFsc2UgfSxcbiAgICB9KTtcbiAgICBjaGFydC5sZWdlbmQoZmFsc2UpO1xuICAgIGNoYXJ0LmF4aXMoZmFsc2UpO1xuICAgIGNoYXJ0LnRvb2x0aXAoe1xuICAgICAgc2hvd1RpdGxlOiBmYWxzZSxcbiAgICAgIHNob3dNYXJrZXJzOiBmYWxzZSxcbiAgICB9KTtcbiAgICAoY2hhcnQuY29vcmRpbmF0ZSgpIGFzIE56U2FmZUFueSkucmVmbGVjdCgpO1xuICAgIGNoYXJ0XG4gICAgICAucG9pbnQoKVxuICAgICAgLnBvc2l0aW9uKCd4KnknKVxuICAgICAgLmNvbG9yKCd0ZXh0JylcbiAgICAgIC5zaGFwZSgnY2xvdWQnKVxuICAgICAgLnN0YXRlKHtcbiAgICAgICAgYWN0aXZlOiB7XG4gICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIGZpbGxPcGFjaXR5OiAwLjQsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIGNoYXJ0LmludGVyYWN0aW9uKCdlbGVtZW50LWFjdGl2ZScpO1xuXG4gICAgY2hhcnQub24oJ3RhZy1jbG91ZC10ZXh0OmNsaWNrJywgKGV2OiBFdmVudCkgPT4ge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMuY2xpY2tJdGVtLmVtaXQoeyBpdGVtOiBldi5kYXRhPy5kYXRhLCBldiB9KSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmF0dGFjaENoYXJ0KCk7XG4gIH1cblxuICBwcml2YXRlIGF0dGFjaENoYXJ0KCkge1xuICAgIGNvbnN0IHsgY2hhcnQsIHBhZGRpbmcsIGRhdGEgfSA9IHRoaXM7XG4gICAgaWYgKCFjaGFydCB8fCAhZGF0YSB8fCBkYXRhLmxlbmd0aCA8PSAwKSByZXR1cm47XG5cbiAgICAvLyBUT0RPOiBjb21wYXRpYmxlXG4gICAgaWYgKGRhdGEuZmluZCh3ID0+ICEhdy54KSAhPSBudWxsKSB7XG4gICAgICBkZXByZWNhdGlvbjEwKCdnMi10YWctY2xvdWQnLCAneCcsICduYW1lJyk7XG4gICAgICBkYXRhLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGl0ZW0ubmFtZSA9IGl0ZW0ueDtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoZGF0YS5maW5kKHcgPT4gISF3LmNhdGVnb3J5KSAhPSBudWxsKSB7XG4gICAgICBkZXByZWNhdGlvbjEwKCdnMi10YWctY2xvdWQnLCAnY2F0ZWdvcnknKTtcbiAgICB9XG5cbiAgICBjaGFydC5oZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgICBjaGFydC53aWR0aCA9IHRoaXMud2lkdGg7XG4gICAgY2hhcnQucGFkZGluZyA9IHBhZGRpbmc7XG5cbiAgICBjb25zdCBkdiA9IG5ldyBEYXRhU2V0LlZpZXcoKS5zb3VyY2UoZGF0YSk7XG4gICAgY29uc3QgcmFuZ2UgPSBkdi5yYW5nZSgndmFsdWUnKTtcbiAgICBjb25zdCBtaW4gPSByYW5nZVswXTtcbiAgICBjb25zdCBtYXggPSByYW5nZVsxXTtcblxuICAgIGR2LnRyYW5zZm9ybSh7XG4gICAgICB0eXBlOiAndGFnLWNsb3VkJyxcbiAgICAgIGZpZWxkczogWyduYW1lJywgJ3ZhbHVlJ10sXG4gICAgICAvLyBpbWFnZU1hc2ssXG4gICAgICBmb250OiAnVmVyZGFuYScsXG4gICAgICBzaXplOiBbdGhpcy53aWR0aCwgdGhpcy5oZWlnaHRdLCAvLyDlrr3pq5jorr7nva7mnIDlpb3moLnmja4gaW1hZ2VNYXNrIOWBmuiwg+aVtFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIHRpbWVJbnRlcnZhbDogNTAwMCwgLy8gbWF4IGV4ZWN1dGUgdGltZVxuICAgICAgcm90YXRlKCkge1xuICAgICAgICBsZXQgcmFuZG9tID0gfn4oTWF0aC5yYW5kb20oKSAqIDQpICUgNDtcbiAgICAgICAgaWYgKHJhbmRvbSA9PT0gMikge1xuICAgICAgICAgIHJhbmRvbSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJhbmRvbSAqIDkwOyAvLyAwLCA5MCwgMjcwXG4gICAgICB9LFxuICAgICAgZm9udFNpemUoZDogTnpTYWZlQW55KSB7XG4gICAgICAgIHJldHVybiAoKGQudmFsdWUgLSBtaW4pIC8gKG1heCAtIG1pbikpICogKDMyIC0gOCkgKyA4O1xuICAgICAgfSxcbiAgICB9IGFzIE56U2FmZUFueSk7XG4gICAgY2hhcnQuZGF0YShkdi5yb3dzKTtcbiAgICBjaGFydC5yZW5kZXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2F0dGFjaENoYXJ0KCkge1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuYXR0YWNoQ2hhcnQoKSk7XG4gIH1cblxuICBwcml2YXRlIGluc3RhbGxSZXNpemVFdmVudCgpIHtcbiAgICB0aGlzLnJlc2l6ZSQgPSBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJylcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoKCkgPT4gISF0aGlzLmNoYXJ0KSxcbiAgICAgICAgZGVib3VuY2VUaW1lKDIwMCksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuX2F0dGFjaENoYXJ0KCkpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmluaXRUYWdDbG91ZCgpO1xuICAgIHRoaXMuaW5zdGFsbFJlc2l6ZUV2ZW50KCk7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmluc3RhbGwoKSwgdGhpcy5kZWxheSkpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5fYXR0YWNoQ2hhcnQoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnJlc2l6ZSQpIHtcbiAgICAgIHRoaXMucmVzaXplJC51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5jaGFydCkge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5jaGFydC5kZXN0cm95KCkpO1xuICAgIH1cbiAgfVxufVxuIl19