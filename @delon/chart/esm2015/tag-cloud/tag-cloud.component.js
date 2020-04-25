/**
 * @fileoverview added by tsickle
 * Generated from: tag-cloud.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, NgZone, ViewEncapsulation, } from '@angular/core';
import DataSet from '@antv/data-set';
import { Chart, registerShape, Util } from '@antv/g2';
import { AlainConfigService } from '@delon/theme';
import { deprecation10, InputNumber } from '@delon/util';
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
     * @param {?} configSrv
     */
    constructor(el, ngZone, configSrv) {
        this.el = el;
        this.ngZone = ngZone;
        // #region fields
        this.delay = 100;
        this.width = 0;
        this.height = 200;
        this.padding = 0;
        this.data = [];
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
    { type: NgZone },
    { type: AlainConfigService }
];
G2TagCloudComponent.propDecorators = {
    delay: [{ type: Input }],
    width: [{ type: Input }],
    height: [{ type: Input }],
    padding: [{ type: Input }],
    data: [{ type: Input }],
    theme: [{ type: Input }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLWNsb3VkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9jaGFydC90YWctY2xvdWQvIiwic291cmNlcyI6WyJ0YWctY2xvdWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUlOLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLE9BQU8sTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFdEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXpELE9BQU8sRUFBRSxTQUFTLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFFdEQsb0NBWUM7OztJQVhDLCtCQUFlOztJQUNmLDhCQUFjOzs7OztJQUlkLDJCQUFXOzs7OztJQUlYLGtDQUFlOzs7QUFZakIsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7OztJQWU5QixZQUFvQixFQUE4QixFQUFVLE1BQWMsRUFBRSxTQUE2QjtRQUFyRixPQUFFLEdBQUYsRUFBRSxDQUE0QjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7O1FBVGxELFVBQUssR0FBRyxHQUFHLENBQUM7UUFDWixVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsV0FBTSxHQUFHLEdBQUcsQ0FBQztRQUM1QixZQUFPLEdBQStCLENBQUMsQ0FBQztRQUN4QyxTQUFJLEdBQXFCLEVBQUUsQ0FBQztRQU1uQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxPQUFPLEVB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S0FBSzs7QUFMa0I7SUFBZCxXQUFXLEVBQUU7O2tEQUFhO0FBQ1o7SUFBZCxXQUFXLEVBQUU7O2tEQUFXO0FBQ1Y7SUFBZCxXQUFXLEVBQUU7O21EQUFjOzs7Ozs7SUFQckMsc0NBQThCOzs7OztJQUM5QixvQ0FBcUI7O0lBSXJCLG9DQUFvQzs7SUFDcEMsb0NBQWtDOztJQUNsQyxxQ0FBcUM7O0lBQ3JDLHNDQUFpRDs7SUFDakQsbUNBQXFDOztJQUNyQyxvQ0FBcUM7Ozs7O0lBSXpCLGlDQUFzQzs7Ozs7SUFBRSxxQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgRGF0YVNldCBmcm9tICdAYW50di9kYXRhLXNldCc7XG5pbXBvcnQgeyBDaGFydCwgcmVnaXN0ZXJTaGFwZSwgVXRpbCB9IGZyb20gJ0BhbnR2L2cyJztcbmltcG9ydCB7IExvb3NlT2JqZWN0IH0gZnJvbSAnQGFudHYvZzIvbGliL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgZGVwcmVjYXRpb24xMCwgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEcyVGFnQ2xvdWREYXRhIHtcbiAgdmFsdWU/OiBudW1iZXI7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBVc2UgYG5hbWVgIGluc3RlYWRcbiAgICovXG4gIHg/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCAxMC4wLjAuIFRoaXMgaXMgZGVwcmVjYXRlZCBhbmQgZ29pbmcgdG8gYmUgcmVtb3ZlZCBpbiAxMC4wLjAuXG4gICAqL1xuICBjYXRlZ29yeT86IGFueTtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnMi10YWctY2xvdWQnLFxuICBleHBvcnRBczogJ2cyVGFnQ2xvdWQnLFxuICB0ZW1wbGF0ZTogYGAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgRzJUYWdDbG91ZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBPbkluaXQge1xuICBwcml2YXRlIHJlc2l6ZSQ6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBjaGFydDogQ2hhcnQ7XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBkZWxheSA9IDEwMDtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgd2lkdGggPSAwO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBoZWlnaHQgPSAyMDA7XG4gIEBJbnB1dCgpIHBhZGRpbmc6IG51bWJlciB8IG51bWJlcltdIHwgJ2F1dG8nID0gMDtcbiAgQElucHV0KCkgZGF0YTogRzJUYWdDbG91ZERhdGFbXSA9IFtdO1xuICBASW5wdXQoKSB0aGVtZTogc3RyaW5nIHwgTG9vc2VPYmplY3Q7XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+LCBwcml2YXRlIG5nWm9uZTogTmdab25lLCBjb25maWdTcnY6IEFsYWluQ29uZmlnU2VydmljZSkge1xuICAgIGNvbmZpZ1Nydi5hdHRhY2hLZXkodGhpcywgJ2NoYXJ0JywgJ3RoZW1lJyk7XG4gIH1cblxuICBwcml2YXRlIGluaXRUYWdDbG91ZCgpIHtcbiAgICByZWdpc3RlclNoYXBlKCdwb2ludCcsICdjbG91ZCcsIHtcbiAgICAgIGRyYXcoY2ZnLCBjb250YWluZXI6IE56U2FmZUFueSkge1xuICAgICAgICBjb25zdCBkYXRhID0gY2ZnLmRhdGEgYXMgTnpTYWZlQW55O1xuICAgICAgICBjb25zdCB0ZXh0U2hhcGUgPSBjb250YWluZXIuYWRkU2hhcGUoJ3RleHQnLCB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIC4uLmNmZy5zdHlsZSxcbiAgICAgICAgICAgIGZvbnRTaXplOiBkYXRhLnNpemUsXG4gICAgICAgICAgICB0ZXh0OiBkYXRhLnRleHQsXG4gICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgZm9udEZhbWlseTogZGF0YS5mb250LFxuICAgICAgICAgICAgZmlsbDogY2ZnLmNvbG9yLFxuICAgICAgICAgICAgdGV4dEJhc2VsaW5lOiAnQWxwaGFiZXRpYycsXG4gICAgICAgICAgICB4OiBjZmcueCxcbiAgICAgICAgICAgIHk6IGNmZy55LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZGF0YS5yb3RhdGUpIHtcbiAgICAgICAgICBVdGlsLnJvdGF0ZSh0ZXh0U2hhcGUsIChkYXRhLnJvdGF0ZSAqIE1hdGguUEkpIC8gMTgwKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGV4dFNoYXBlO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgaW5zdGFsbCgpIHtcbiAgICBjb25zdCB7IGVsLCBwYWRkaW5nLCB0aGVtZSB9ID0gdGhpcztcbiAgICBpZiAodGhpcy5oZWlnaHQgPT09IDApIHtcbiAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICB9XG4gICAgaWYgKHRoaXMud2lkdGggPT09IDApIHtcbiAgICAgIHRoaXMud2lkdGggPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGg7XG4gICAgfVxuXG4gICAgY29uc3QgY2hhcnQgPSAodGhpcy5jaGFydCA9IG5ldyBDaGFydCh7XG4gICAgICBjb250YWluZXI6IGVsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICBhdXRvRml0OiBmYWxzZSxcbiAgICAgIHBhZGRpbmcsXG4gICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxuICAgICAgd2lkdGg6IHRoaXMud2lkdGgsXG4gICAgICB0aGVtZSxcbiAgICB9KSk7XG4gICAgY2hhcnQuc2NhbGUoe1xuICAgICAgeDogeyBuaWNlOiBmYWxzZSB9LFxuICAgICAgeTogeyBuaWNlOiBmYWxzZSB9LFxuICAgIH0pO1xuICAgIGNoYXJ0LmxlZ2VuZChmYWxzZSk7XG4gICAgY2hhcnQuYXhpcyhmYWxzZSk7XG4gICAgY2hhcnQudG9vbHRpcCh7XG4gICAgICBzaG93VGl0bGU6IGZhbHNlLFxuICAgICAgc2hvd01hcmtlcnM6IGZhbHNlLFxuICAgIH0pO1xuICAgIChjaGFydC5jb29yZGluYXRlKCkgYXMgTnpTYWZlQW55KS5yZWZsZWN0KCk7XG4gICAgY2hhcnRcbiAgICAgIC5wb2ludCgpXG4gICAgICAucG9zaXRpb24oJ3gqeScpXG4gICAgICAuY29sb3IoJ3RleHQnKVxuICAgICAgLnNoYXBlKCdjbG91ZCcpXG4gICAgICAuc3RhdGUoe1xuICAgICAgICBhY3RpdmU6IHtcbiAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgZmlsbE9wYWNpdHk6IDAuNCxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgY2hhcnQuaW50ZXJhY3Rpb24oJ2VsZW1lbnQtYWN0aXZlJyk7XG5cbiAgICB0aGlzLmF0dGFjaENoYXJ0KCk7XG4gIH1cblxuICBwcml2YXRlIGF0dGFjaENoYXJ0KCkge1xuICAgIGNvbnN0IHsgY2hhcnQsIHBhZGRpbmcsIGRhdGEgfSA9IHRoaXM7XG4gICAgaWYgKCFjaGFydCB8fCAhZGF0YSB8fCBkYXRhLmxlbmd0aCA8PSAwKSByZXR1cm47XG5cbiAgICAvLyBUT0RPOiBjb21wYXRpYmxlXG4gICAgaWYgKGRhdGEuZmluZCh3ID0+ICEhdy54KSAhPSBudWxsKSB7XG4gICAgICBkZXByZWNhdGlvbjEwKCdnMi10YWctY2xvdWQnLCAneCcsICduYW1lJyk7XG4gICAgICBkYXRhLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGl0ZW0ubmFtZSA9IGl0ZW0ueDtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoZGF0YS5maW5kKHcgPT4gISF3LmNhdGVnb3J5KSAhPSBudWxsKSB7XG4gICAgICBkZXByZWNhdGlvbjEwKCdnMi10YWctY2xvdWQnLCAnY2F0ZWdvcnknKTtcbiAgICB9XG5cbiAgICBjaGFydC5oZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgICBjaGFydC53aWR0aCA9IHRoaXMud2lkdGg7XG4gICAgY2hhcnQucGFkZGluZyA9IHBhZGRpbmc7XG5cbiAgICBjb25zdCBkdiA9IG5ldyBEYXRhU2V0LlZpZXcoKS5zb3VyY2UoZGF0YSk7XG4gICAgY29uc3QgcmFuZ2UgPSBkdi5yYW5nZSgndmFsdWUnKTtcbiAgICBjb25zdCBtaW4gPSByYW5nZVswXTtcbiAgICBjb25zdCBtYXggPSByYW5nZVsxXTtcblxuICAgIGR2LnRyYW5zZm9ybSh7XG4gICAgICB0eXBlOiAndGFnLWNsb3VkJyxcbiAgICAgIGZpZWxkczogWyduYW1lJywgJ3ZhbHVlJ10sXG4gICAgICAvLyBpbWFnZU1hc2ssXG4gICAgICBmb250OiAnVmVyZGFuYScsXG4gICAgICBzaXplOiBbdGhpcy53aWR0aCwgdGhpcy5oZWlnaHRdLCAvLyDlrr3pq5jorr7nva7mnIDlpb3moLnmja4gaW1hZ2VNYXNrIOWBmuiwg+aVtFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIHRpbWVJbnRlcnZhbDogNTAwMCwgLy8gbWF4IGV4ZWN1dGUgdGltZVxuICAgICAgcm90YXRlKCkge1xuICAgICAgICBsZXQgcmFuZG9tID0gfn4oTWF0aC5yYW5kb20oKSAqIDQpICUgNDtcbiAgICAgICAgaWYgKHJhbmRvbSA9PT0gMikge1xuICAgICAgICAgIHJhbmRvbSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJhbmRvbSAqIDkwOyAvLyAwLCA5MCwgMjcwXG4gICAgICB9LFxuICAgICAgZm9udFNpemUoZDogTnpTYWZlQW55KSB7XG4gICAgICAgIHJldHVybiAoKGQudmFsdWUgLSBtaW4pIC8gKG1heCAtIG1pbikpICogKDMyIC0gOCkgKyA4O1xuICAgICAgfSxcbiAgICB9IGFzIE56U2FmZUFueSk7XG4gICAgY2hhcnQuZGF0YShkdi5yb3dzKTtcbiAgICBjaGFydC5yZW5kZXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2F0dGFjaENoYXJ0KCkge1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuYXR0YWNoQ2hhcnQoKSk7XG4gIH1cblxuICBwcml2YXRlIGluc3RhbGxSZXNpemVFdmVudCgpIHtcbiAgICB0aGlzLnJlc2l6ZSQgPSBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJylcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoKCkgPT4gISF0aGlzLmNoYXJ0KSxcbiAgICAgICAgZGVib3VuY2VUaW1lKDIwMCksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuX2F0dGFjaENoYXJ0KCkpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbml0VGFnQ2xvdWQoKTtcbiAgICB0aGlzLmluc3RhbGxSZXNpemVFdmVudCgpO1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbnN0YWxsKCksIHRoaXMuZGVsYXkpKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuX2F0dGFjaENoYXJ0KCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnJlc2l6ZSQudW5zdWJzY3JpYmUoKTtcbiAgICBpZiAodGhpcy5jaGFydCkge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5jaGFydC5kZXN0cm95KCkpO1xuICAgIH1cbiAgfVxufVxuIl19