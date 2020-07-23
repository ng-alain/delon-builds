/**
 * @fileoverview added by tsickle
 * Generated from: tag-cloud.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, NgZone, Output, ViewEncapsulation, } from '@angular/core';
import DataSet from '@antv/data-set';
import { Chart, registerShape, Util } from '@antv/g2';
import { AlainConfigService, InputNumber } from '@delon/util';
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
     * @return {?}
     */
    get chart() {
        return this._chart;
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
        const chart = (this._chart = new Chart({
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
        const { _chart, padding, data } = this;
        if (!_chart || !data || data.length <= 0)
            return;
        _chart.height = this.height;
        _chart.width = this.width;
        _chart.padding = padding;
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
        _chart.data(dv.rows);
        _chart.render();
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
        () => !!this._chart)), debounceTime(200))
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
        if (this._chart) {
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => this._chart.destroy()));
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
    G2TagCloudComponent.prototype._chart;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLWNsb3VkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NoYXJ0L3RhZy1jbG91ZC90YWctY2xvdWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBSU4sTUFBTSxFQUNOLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLE9BQU8sTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsS0FBSyxFQUFTLGFBQWEsRUFBUyxJQUFJLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDcEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU5RCxPQUFPLEVBQUUsU0FBUyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBRXRELG9DQUlDOzs7SUFIQywrQkFBZTs7SUFDZiw4QkFBYzs7Ozs7O0FBSWhCLHlDQUdDOzs7SUFGQyxtQ0FBcUI7O0lBQ3JCLGlDQUFVOztBQVdaLE1BQU0sT0FBTyxtQkFBbUI7Ozs7Ozs7O0lBb0I5QixZQUFvQixFQUE4QixFQUFVLE1BQWMsRUFBRSxTQUE2QixFQUFVLFFBQWtCO1FBQWpILE9BQUUsR0FBRixFQUFFLENBQTRCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUF5QyxhQUFRLEdBQVIsUUFBUSxDQUFVOztRQVY3RyxVQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ1osVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNWLFdBQU0sR0FBRyxHQUFHLENBQUM7UUFDNUIsWUFBTyxH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QU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDOzs7O1lBbkNDLFVBQVU7WUFHVixNQUFNO1lBU0Msa0JBQWtCO1lBaEJsQixRQUFROzs7b0JBa0RkLEtBQUs7b0JBQ0wsS0FBSztxQkFDTCxLQUFLO3NCQUNMLEtBQUs7bUJBQ0wsS0FBSztvQkFDTCxLQUFLO3dCQUNMLE1BQU07O0FBTmlCO0lBQWQsV0FBVyxFQUFFOztrREFBYTtBQUNaO0lBQWQsV0FBVyxFQUFFOztrREFBVztBQUNWO0lBQWQsV0FBVyxFQUFFOzttREFBYzs7Ozs7O0lBWHJDLHNDQUE4Qjs7Ozs7SUFDOUIscUNBQXNCOztJQVF0QixvQ0FBb0M7O0lBQ3BDLG9DQUFrQzs7SUFDbEMscUNBQXFDOztJQUNyQyxzQ0FBaUQ7O0lBQ2pELG1DQUFxQzs7SUFDckMsb0NBQTJDOztJQUMzQyx3Q0FBOEQ7Ozs7O0lBSWxELGlDQUFzQzs7Ozs7SUFBRSxxQ0FBc0I7Ozs7O0lBQWlDLHVDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgRGF0YVNldCBmcm9tICdAYW50di9kYXRhLXNldCc7XG5pbXBvcnQgeyBDaGFydCwgRXZlbnQsIHJlZ2lzdGVyU2hhcGUsIFR5cGVzLCBVdGlsIH0gZnJvbSAnQGFudHYvZzInO1xuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlLCBJbnB1dE51bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRzJUYWdDbG91ZERhdGEge1xuICB2YWx1ZT86IG51bWJlcjtcbiAgbmFtZT86IHN0cmluZztcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEcyVGFnQ2xvdWRDbGlja0l0ZW0ge1xuICBpdGVtOiBHMlRhZ0Nsb3VkRGF0YTtcbiAgZXY6IEV2ZW50O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnMi10YWctY2xvdWQnLFxuICBleHBvcnRBczogJ2cyVGFnQ2xvdWQnLFxuICB0ZW1wbGF0ZTogYGAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgRzJUYWdDbG91ZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBPbkluaXQge1xuICBwcml2YXRlIHJlc2l6ZSQ6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBfY2hhcnQ6IENoYXJ0O1xuXG4gIGdldCBjaGFydCgpOiBDaGFydCB7XG4gICAgcmV0dXJuIHRoaXMuX2NoYXJ0O1xuICB9XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBkZWxheSA9IDEwMDtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgd2lkdGggPSAwO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBoZWlnaHQgPSAyMDA7XG4gIEBJbnB1dCgpIHBhZGRpbmc6IG51bWJlciB8IG51bWJlcltdIHwgJ2F1dG8nID0gMDtcbiAgQElucHV0KCkgZGF0YTogRzJUYWdDbG91ZERhdGFbXSA9IFtdO1xuICBASW5wdXQoKSB0aGVtZTogc3RyaW5nIHwgVHlwZXMuTG9vc2VPYmplY3Q7XG4gIEBPdXRwdXQoKSBjbGlja0l0ZW0gPSBuZXcgRXZlbnRFbWl0dGVyPEcyVGFnQ2xvdWRDbGlja0l0ZW0+KCk7XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+LCBwcml2YXRlIG5nWm9uZTogTmdab25lLCBjb25maWdTcnY6IEFsYWluQ29uZmlnU2VydmljZSwgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0pIHtcbiAgICBjb25maWdTcnYuYXR0YWNoS2V5KHRoaXMsICdjaGFydCcsICd0aGVtZScpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0VGFnQ2xvdWQoKSB7XG4gICAgcmVnaXN0ZXJTaGFwZSgncG9pbnQnLCAnY2xvdWQnLCB7XG4gICAgICBkcmF3KGNmZywgY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBjZmcuZGF0YSBhcyBOelNhZmVBbnk7XG4gICAgICAgIGNvbnN0IHRleHRTaGFwZSA9IGNvbnRhaW5lci5hZGRTaGFwZSh7XG4gICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgIG5hbWU6ICd0YWctY2xvdWQtdGV4dCcsXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIC4uLmNmZy5zdHlsZSxcbiAgICAgICAgICAgIGZvbnRTaXplOiBkYXRhLnNpemUsXG4gICAgICAgICAgICB0ZXh0OiBkYXRhLnRleHQsXG4gICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgZm9udEZhbWlseTogZGF0YS5mb250LFxuICAgICAgICAgICAgZmlsbDogY2ZnLmNvbG9yLFxuICAgICAgICAgICAgdGV4dEJhc2VsaW5lOiAnQWxwaGFiZXRpYycsXG4gICAgICAgICAgICB4OiBjZmcueCxcbiAgICAgICAgICAgIHk6IGNmZy55LFxuICAgICAgICAgIH0gYXMgTnpTYWZlQW55LFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGRhdGEucm90YXRlKSB7XG4gICAgICAgICAgVXRpbC5yb3RhdGUodGV4dFNoYXBlLCAoZGF0YS5yb3RhdGUgKiBNYXRoLlBJKSAvIDE4MCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRleHRTaGFwZTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGluc3RhbGwoKSB7XG4gICAgY29uc3QgeyBlbCwgcGFkZGluZywgdGhlbWUgfSA9IHRoaXM7XG4gICAgaWYgKHRoaXMuaGVpZ2h0ID09PSAwKSB7XG4gICAgICB0aGlzLmhlaWdodCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gICAgfVxuICAgIGlmICh0aGlzLndpZHRoID09PSAwKSB7XG4gICAgICB0aGlzLndpZHRoID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoO1xuICAgIH1cblxuICAgIGNvbnN0IGNoYXJ0ID0gKHRoaXMuX2NoYXJ0ID0gbmV3IENoYXJ0KHtcbiAgICAgIGNvbnRhaW5lcjogZWwubmF0aXZlRWxlbWVudCxcbiAgICAgIGF1dG9GaXQ6IGZhbHNlLFxuICAgICAgcGFkZGluZyxcbiAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXG4gICAgICB3aWR0aDogdGhpcy53aWR0aCxcbiAgICAgIHRoZW1lLFxuICAgIH0pKTtcbiAgICBjaGFydC5zY2FsZSh7XG4gICAgICB4OiB7IG5pY2U6IGZhbHNlIH0sXG4gICAgICB5OiB7IG5pY2U6IGZhbHNlIH0sXG4gICAgfSk7XG4gICAgY2hhcnQubGVnZW5kKGZhbHNlKTtcbiAgICBjaGFydC5heGlzKGZhbHNlKTtcbiAgICBjaGFydC50b29sdGlwKHtcbiAgICAgIHNob3dUaXRsZTogZmFsc2UsXG4gICAgICBzaG93TWFya2VyczogZmFsc2UsXG4gICAgfSk7XG4gICAgKGNoYXJ0LmNvb3JkaW5hdGUoKSBhcyBOelNhZmVBbnkpLnJlZmxlY3QoKTtcbiAgICBjaGFydFxuICAgICAgLnBvaW50KClcbiAgICAgIC5wb3NpdGlvbigneCp5JylcbiAgICAgIC5jb2xvcigndGV4dCcpXG4gICAgICAuc2hhcGUoJ2Nsb3VkJylcbiAgICAgIC5zdGF0ZSh7XG4gICAgICAgIGFjdGl2ZToge1xuICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBmaWxsT3BhY2l0eTogMC40LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICBjaGFydC5pbnRlcmFjdGlvbignZWxlbWVudC1hY3RpdmUnKTtcblxuICAgIGNoYXJ0Lm9uKCd0YWctY2xvdWQtdGV4dDpjbGljaycsIChldjogRXZlbnQpID0+IHtcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB0aGlzLmNsaWNrSXRlbS5lbWl0KHsgaXRlbTogZXYuZGF0YT8uZGF0YSwgZXYgfSkpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5hdHRhY2hDaGFydCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBhdHRhY2hDaGFydCgpIHtcbiAgICBjb25zdCB7IF9jaGFydCwgcGFkZGluZywgZGF0YSB9ID0gdGhpcztcbiAgICBpZiAoIV9jaGFydCB8fCAhZGF0YSB8fCBkYXRhLmxlbmd0aCA8PSAwKSByZXR1cm47XG5cbiAgICBfY2hhcnQuaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XG4gICAgX2NoYXJ0LndpZHRoID0gdGhpcy53aWR0aDtcbiAgICBfY2hhcnQucGFkZGluZyA9IHBhZGRpbmc7XG5cbiAgICBjb25zdCBkdiA9IG5ldyBEYXRhU2V0LlZpZXcoKS5zb3VyY2UoZGF0YSk7XG4gICAgY29uc3QgcmFuZ2UgPSBkdi5yYW5nZSgndmFsdWUnKTtcbiAgICBjb25zdCBtaW4gPSByYW5nZVswXTtcbiAgICBjb25zdCBtYXggPSByYW5nZVsxXTtcblxuICAgIGR2LnRyYW5zZm9ybSh7XG4gICAgICB0eXBlOiAndGFnLWNsb3VkJyxcbiAgICAgIGZpZWxkczogWyduYW1lJywgJ3ZhbHVlJ10sXG4gICAgICAvLyBpbWFnZU1hc2ssXG4gICAgICBmb250OiAnVmVyZGFuYScsXG4gICAgICBzaXplOiBbdGhpcy53aWR0aCwgdGhpcy5oZWlnaHRdLCAvLyDlrr3pq5jorr7nva7mnIDlpb3moLnmja4gaW1hZ2VNYXNrIOWBmuiwg+aVtFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIHRpbWVJbnRlcnZhbDogNTAwMCwgLy8gbWF4IGV4ZWN1dGUgdGltZVxuICAgICAgcm90YXRlKCkge1xuICAgICAgICBsZXQgcmFuZG9tID0gfn4oTWF0aC5yYW5kb20oKSAqIDQpICUgNDtcbiAgICAgICAgaWYgKHJhbmRvbSA9PT0gMikge1xuICAgICAgICAgIHJhbmRvbSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJhbmRvbSAqIDkwOyAvLyAwLCA5MCwgMjcwXG4gICAgICB9LFxuICAgICAgZm9udFNpemUoZDogTnpTYWZlQW55KSB7XG4gICAgICAgIHJldHVybiAoKGQudmFsdWUgLSBtaW4pIC8gKG1heCAtIG1pbikpICogKDMyIC0gOCkgKyA4O1xuICAgICAgfSxcbiAgICB9IGFzIE56U2FmZUFueSk7XG4gICAgX2NoYXJ0LmRhdGEoZHYucm93cyk7XG4gICAgX2NoYXJ0LnJlbmRlcigpO1xuICB9XG5cbiAgcHJpdmF0ZSBfYXR0YWNoQ2hhcnQoKSB7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5hdHRhY2hDaGFydCgpKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5zdGFsbFJlc2l6ZUV2ZW50KCkge1xuICAgIHRoaXMucmVzaXplJCA9IGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcigoKSA9PiAhIXRoaXMuX2NoYXJ0KSxcbiAgICAgICAgZGVib3VuY2VUaW1lKDIwMCksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuX2F0dGFjaENoYXJ0KCkpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmluaXRUYWdDbG91ZCgpO1xuICAgIHRoaXMuaW5zdGFsbFJlc2l6ZUV2ZW50KCk7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmluc3RhbGwoKSwgdGhpcy5kZWxheSkpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5fYXR0YWNoQ2hhcnQoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnJlc2l6ZSQpIHtcbiAgICAgIHRoaXMucmVzaXplJC51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY2hhcnQpIHtcbiAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuX2NoYXJ0LmRlc3Ryb3koKSk7XG4gICAgfVxuICB9XG59XG4iXX0=