/**
 * @fileoverview added by tsickle
 * Generated from: tag-cloud.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, NgZone, Output, ViewEncapsulation, } from '@angular/core';
import { Chart, registerShape, Util } from '@antv/g2';
import { AlainConfigService, InputNumber } from '@delon/util';
import { fromEvent } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';
import tagCloud from './tag-cloud.data';
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
        this._h = 0;
        this._w = 0;
        // #region fields
        this.delay = 100;
        this.width = 0;
        this.height = 200;
        this.padding = 0;
        this.data = [];
        this.spiral = 'rectangular';
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
    fixWH() {
        const { height, width, el } = this;
        this._h = height <= 0 ? el.nativeElement.clientHeight : height;
        this._w = width <= 0 ? el.nativeElement.clientWidth : width;
    }
    /**
     * @private
     * @return {?}
     */
    initTagCloud() {
        registerShape('point', 'cloud', {
            // tslint:disable-next-line: typedef
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
        this.fixWH();
        /** @type {?} */
        const chart = (this._chart = new Chart({
            container: el.nativeElement,
            autoFit: false,
            height: this._h,
            width: this._w,
            padding,
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
    transform() {
        /** @type {?} */
        const statisticData = this.data.map((/**
         * @param {?} i
         * @return {?}
         */
        i => (/** @type {?} */ (i.value))));
        /** @type {?} */
        const min = Math.min(...statisticData);
        /** @type {?} */
        const max = Math.max(...statisticData);
        /** @type {?} */
        const options = {
            fields: ['name', 'value'],
            // imageMask,
            font: 'Verdana',
            padding: 1,
            size: [this._w, this._h],
            // 宽高设置最好根据 imageMask 做调整
            spiral: this.spiral,
            timeInterval: 5000,
            // max execute time
            rotate: (/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                let random = ~~(Math.random() * 4) % 4;
                if (random === 2) {
                    random = 0;
                }
                return random * 90; // 0, 90, 270
            }),
            fontSize: (/**
             * @param {?} d
             * @return {?}
             */
            (d) => {
                return (((/** @type {?} */ (d.value)) - min) / (max - min)) * (32 - 8) + 8;
            }),
        };
        /** @type {?} */
        const layout = tagCloud();
        ['font', 'fontSize', 'fontWeight', 'padding', 'rotate', 'size', 'spiral', 'timeInterval'].forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => {
            // @ts-ignore
            if (options[key]) {
                // @ts-ignore
                layout[key](options[key]);
            }
        }));
        /** @type {?} */
        const words = this.data.map((/**
         * @param {?} i
         * @return {?}
         */
        i => (Object.assign(Object.assign({}, i), { text: i.name }))));
        layout.words(words);
        /** @type {?} */
        const result = layout.start();
        /** @type {?} */
        const tags = result._tags;
        /** @type {?} */
        const bounds = result._bounds || [
            { x: 0, y: 0 },
            { x: options.size[0], y: options.size[1] },
        ];
        tags.forEach((/**
         * @param {?} tag
         * @return {?}
         */
        tag => {
            tag.x += options.size[0] / 2;
            tag.y += options.size[1] / 2;
        }));
        const [w, h] = options.size;
        /** @type {?} */
        const hasImage = result.hasImage;
        tags.push({
            text: '',
            value: 0,
            x: hasImage ? 0 : bounds[0].x,
            y: hasImage ? 0 : bounds[0].y,
            opacity: 0,
        });
        tags.push({
            text: '',
            value: 0,
            x: hasImage ? w : bounds[1].x,
            y: hasImage ? h : bounds[1].y,
            opacity: 0,
        });
        return tags;
    }
    /**
     * @private
     * @return {?}
     */
    attachChart() {
        const { _chart, padding, data } = this;
        if (!_chart || !data || data.length <= 0)
            return;
        this.fixWH();
        _chart.changeSize(this._w, this._h);
        _chart.padding = padding;
        /** @type {?} */
        const rows = this.transform();
        _chart.data(rows);
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
    spiral: [{ type: Input }],
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
    /** @type {?} */
    G2TagCloudComponent.ngAcceptInputType_delay;
    /** @type {?} */
    G2TagCloudComponent.ngAcceptInputType_height;
    /** @type {?} */
    G2TagCloudComponent.ngAcceptInputType_width;
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
    /**
     * @type {?}
     * @private
     */
    G2TagCloudComponent.prototype._h;
    /**
     * @type {?}
     * @private
     */
    G2TagCloudComponent.prototype._w;
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
    G2TagCloudComponent.prototype.spiral;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLWNsb3VkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jaGFydC90YWctY2xvdWQvIiwic291cmNlcyI6WyJ0YWctY2xvdWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBSU4sTUFBTSxFQUNOLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsS0FBSyxFQUFTLGFBQWEsRUFBUyxJQUFJLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDcEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFdBQVcsRUFBZSxNQUFNLGFBQWEsQ0FBQztBQUUzRSxPQUFPLEVBQUUsU0FBUyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RELE9BQU8sUUFBUSxNQUFNLGtCQUFrQixDQUFDOzs7O0FBRXhDLG9DQUlDOzs7SUFIQywrQkFBZTs7SUFDZiw4QkFBYzs7Ozs7O0FBSWhCLHlDQUdDOzs7SUFGQyxtQ0FBcUI7O0lBQ3JCLGlDQUFVOztBQVdaLE1BQU0sT0FBTyxtQkFBbUI7Ozs7Ozs7O0lBMkI5QixZQUFvQixFQUE4QixFQUFVLE1BQWMsRUFBRSxTQUE2QixFQUFVLFFBQWtCO1FBQWpILE9BQUUsR0FBRixFQUFFLENBQTRCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUF5QyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBcEI3SCxPQUFFLEdBQVcsQ0FBQyxDQUFDO1FBQ2YsT0FBRSxHQUFXLENBQUMsQ0FBQzs7UUFRQyxVQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ1osVUFBSyxH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bUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDOzs7O1lBbkNDLFVBQVU7WUFHVixNQUFNO1lBUUMsa0JBQWtCO1lBZmxCLFFBQVE7OztvQkF3RGQsS0FBSztvQkFDTCxLQUFLO3FCQUNMLEtBQUs7c0JBQ0wsS0FBSzttQkFDTCxLQUFLO3FCQUNMLEtBQUs7b0JBQ0wsS0FBSzt3QkFDTCxNQUFNOztBQVBpQjtJQUFkLFdBQVcsRUFBRTs7a0RBQWE7QUFDWjtJQUFkLFdBQVcsRUFBRTs7a0RBQVc7QUFDVjtJQUFkLFdBQVcsRUFBRTs7bURBQWM7OztJQWpCckMsNENBQTRDOztJQUM1Qyw2Q0FBNkM7O0lBQzdDLDRDQUE0Qzs7Ozs7SUFFNUMsc0NBQThCOzs7OztJQUM5QixxQ0FBc0I7Ozs7O0lBQ3RCLGlDQUF1Qjs7Ozs7SUFDdkIsaUNBQXVCOztJQVF2QixvQ0FBb0M7O0lBQ3BDLG9DQUFrQzs7SUFDbEMscUNBQXFDOztJQUNyQyxzQ0FBaUQ7O0lBQ2pELG1DQUFxQzs7SUFDckMscUNBQStEOztJQUMvRCxvQ0FBMkM7O0lBQzNDLHdDQUE4RDs7Ozs7SUFJbEQsaUNBQXNDOzs7OztJQUFFLHFDQUFzQjs7Ozs7SUFBaUMsdUNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENoYXJ0LCBFdmVudCwgcmVnaXN0ZXJTaGFwZSwgVHlwZXMsIFV0aWwgfSBmcm9tICdAYW50di9nMic7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UsIElucHV0TnVtYmVyLCBOdW1iZXJJbnB1dCB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgdGFnQ2xvdWQgZnJvbSAnLi90YWctY2xvdWQuZGF0YSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRzJUYWdDbG91ZERhdGEge1xuICB2YWx1ZT86IG51bWJlcjtcbiAgbmFtZT86IHN0cmluZztcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEcyVGFnQ2xvdWRDbGlja0l0ZW0ge1xuICBpdGVtOiBHMlRhZ0Nsb3VkRGF0YTtcbiAgZXY6IEV2ZW50O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnMi10YWctY2xvdWQnLFxuICBleHBvcnRBczogJ2cyVGFnQ2xvdWQnLFxuICB0ZW1wbGF0ZTogYGAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgRzJUYWdDbG91ZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBPbkluaXQge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZGVsYXk6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfaGVpZ2h0OiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3dpZHRoOiBOdW1iZXJJbnB1dDtcblxuICBwcml2YXRlIHJlc2l6ZSQ6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBfY2hhcnQ6IENoYXJ0O1xuICBwcml2YXRlIF9oOiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF93OiBudW1iZXIgPSAwO1xuXG4gIGdldCBjaGFydCgpOiBDaGFydCB7XG4gICAgcmV0dXJuIHRoaXMuX2NoYXJ0O1xuICB9XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBkZWxheSA9IDEwMDtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgd2lkdGggPSAwO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBoZWlnaHQgPSAyMDA7XG4gIEBJbnB1dCgpIHBhZGRpbmc6IG51bWJlciB8IG51bWJlcltdIHwgJ2F1dG8nID0gMDtcbiAgQElucHV0KCkgZGF0YTogRzJUYWdDbG91ZERhdGFbXSA9IFtdO1xuICBASW5wdXQoKSBzcGlyYWw6ICdhcmNoaW1lZGVhbicgfCAncmVjdGFuZ3VsYXInID0gJ3JlY3Rhbmd1bGFyJztcbiAgQElucHV0KCkgdGhlbWU6IHN0cmluZyB8IFR5cGVzLkxvb3NlT2JqZWN0O1xuICBAT3V0cHV0KCkgY2xpY2tJdGVtID0gbmV3IEV2ZW50RW1pdHRlcjxHMlRhZ0Nsb3VkQ2xpY2tJdGVtPigpO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PiwgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSwgY29uZmlnU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UsIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtKSB7XG4gICAgY29uZmlnU3J2LmF0dGFjaEtleSh0aGlzLCAnY2hhcnQnLCAndGhlbWUnKTtcbiAgfVxuXG4gIHByaXZhdGUgZml4V0goKTogdm9pZCB7XG4gICAgY29uc3QgeyBoZWlnaHQsIHdpZHRoLCBlbCB9ID0gdGhpcztcbiAgICB0aGlzLl9oID0gaGVpZ2h0IDw9IDAgPyBlbC5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodCA6IGhlaWdodDtcbiAgICB0aGlzLl93ID0gd2lkdGggPD0gMCA/IGVsLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGggOiB3aWR0aDtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdFRhZ0Nsb3VkKCk6IHZvaWQge1xuICAgIHJlZ2lzdGVyU2hhcGUoJ3BvaW50JywgJ2Nsb3VkJywge1xuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB0eXBlZGVmXG4gICAgICBkcmF3KGNmZywgY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBjZmcuZGF0YSBhcyBOelNhZmVBbnk7XG4gICAgICAgIGNvbnN0IHRleHRTaGFwZSA9IGNvbnRhaW5lci5hZGRTaGFwZSh7XG4gICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgIG5hbWU6ICd0YWctY2xvdWQtdGV4dCcsXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIC4uLmNmZy5zdHlsZSxcbiAgICAgICAgICAgIGZvbnRTaXplOiBkYXRhLnNpemUsXG4gICAgICAgICAgICB0ZXh0OiBkYXRhLnRleHQsXG4gICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgZm9udEZhbWlseTogZGF0YS5mb250LFxuICAgICAgICAgICAgZmlsbDogY2ZnLmNvbG9yLFxuICAgICAgICAgICAgdGV4dEJhc2VsaW5lOiAnQWxwaGFiZXRpYycsXG4gICAgICAgICAgICB4OiBjZmcueCxcbiAgICAgICAgICAgIHk6IGNmZy55LFxuICAgICAgICAgIH0gYXMgTnpTYWZlQW55LFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGRhdGEucm90YXRlKSB7XG4gICAgICAgICAgVXRpbC5yb3RhdGUodGV4dFNoYXBlLCAoZGF0YS5yb3RhdGUgKiBNYXRoLlBJKSAvIDE4MCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRleHRTaGFwZTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGluc3RhbGwoKTogdm9pZCB7XG4gICAgY29uc3QgeyBlbCwgcGFkZGluZywgdGhlbWUgfSA9IHRoaXM7XG5cbiAgICB0aGlzLmZpeFdIKCk7XG4gICAgY29uc3QgY2hhcnQgPSAodGhpcy5fY2hhcnQgPSBuZXcgQ2hhcnQoe1xuICAgICAgY29udGFpbmVyOiBlbC5uYXRpdmVFbGVtZW50LFxuICAgICAgYXV0b0ZpdDogZmFsc2UsXG4gICAgICBoZWlnaHQ6IHRoaXMuX2gsXG4gICAgICB3aWR0aDogdGhpcy5fdyxcbiAgICAgIHBhZGRpbmcsXG4gICAgICB0aGVtZSxcbiAgICB9KSk7XG4gICAgY2hhcnQuc2NhbGUoe1xuICAgICAgeDogeyBuaWNlOiBmYWxzZSB9LFxuICAgICAgeTogeyBuaWNlOiBmYWxzZSB9LFxuICAgIH0pO1xuICAgIGNoYXJ0LmxlZ2VuZChmYWxzZSk7XG4gICAgY2hhcnQuYXhpcyhmYWxzZSk7XG4gICAgY2hhcnQudG9vbHRpcCh7XG4gICAgICBzaG93VGl0bGU6IGZhbHNlLFxuICAgICAgc2hvd01hcmtlcnM6IGZhbHNlLFxuICAgIH0pO1xuICAgIChjaGFydC5jb29yZGluYXRlKCkgYXMgTnpTYWZlQW55KS5yZWZsZWN0KCk7XG4gICAgY2hhcnRcbiAgICAgIC5wb2ludCgpXG4gICAgICAucG9zaXRpb24oJ3gqeScpXG4gICAgICAuY29sb3IoJ3RleHQnKVxuICAgICAgLnNoYXBlKCdjbG91ZCcpXG4gICAgICAuc3RhdGUoe1xuICAgICAgICBhY3RpdmU6IHtcbiAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgZmlsbE9wYWNpdHk6IDAuNCxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgY2hhcnQuaW50ZXJhY3Rpb24oJ2VsZW1lbnQtYWN0aXZlJyk7XG5cbiAgICBjaGFydC5vbigndGFnLWNsb3VkLXRleHQ6Y2xpY2snLCAoZXY6IEV2ZW50KSA9PiB7XG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5jbGlja0l0ZW0uZW1pdCh7IGl0ZW06IGV2LmRhdGE/LmRhdGEsIGV2IH0pKTtcbiAgICB9KTtcblxuICAgIHRoaXMuYXR0YWNoQ2hhcnQoKTtcbiAgfVxuXG4gIHByaXZhdGUgdHJhbnNmb3JtKCk6IGFueSB7XG4gICAgY29uc3Qgc3RhdGlzdGljRGF0YSA9IHRoaXMuZGF0YS5tYXAoaSA9PiBpLnZhbHVlISk7XG4gICAgY29uc3QgbWluID0gTWF0aC5taW4oLi4uc3RhdGlzdGljRGF0YSk7XG4gICAgY29uc3QgbWF4ID0gTWF0aC5tYXgoLi4uc3RhdGlzdGljRGF0YSk7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIGZpZWxkczogWyduYW1lJywgJ3ZhbHVlJ10sXG4gICAgICAvLyBpbWFnZU1hc2ssXG4gICAgICBmb250OiAnVmVyZGFuYScsXG4gICAgICBwYWRkaW5nOiAxLFxuICAgICAgc2l6ZTogW3RoaXMuX3csIHRoaXMuX2hdLCAvLyDlrr3pq5jorr7nva7mnIDlpb3moLnmja4gaW1hZ2VNYXNrIOWBmuiwg+aVtFxuICAgICAgc3BpcmFsOiB0aGlzLnNwaXJhbCxcbiAgICAgIHRpbWVJbnRlcnZhbDogNTAwMCwgLy8gbWF4IGV4ZWN1dGUgdGltZVxuICAgICAgcm90YXRlOiAoKSA9PiB7XG4gICAgICAgIGxldCByYW5kb20gPSB+fihNYXRoLnJhbmRvbSgpICogNCkgJSA0O1xuICAgICAgICBpZiAocmFuZG9tID09PSAyKSB7XG4gICAgICAgICAgcmFuZG9tID0gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmFuZG9tICogOTA7IC8vIDAsIDkwLCAyNzBcbiAgICAgIH0sXG4gICAgICBmb250U2l6ZTogKGQ6IEcyVGFnQ2xvdWREYXRhKSA9PiB7XG4gICAgICAgIHJldHVybiAoKGQudmFsdWUhIC0gbWluKSAvIChtYXggLSBtaW4pKSAqICgzMiAtIDgpICsgODtcbiAgICAgIH0sXG4gICAgfTtcbiAgICBjb25zdCBsYXlvdXQgPSB0YWdDbG91ZCgpO1xuICAgIFsnZm9udCcsICdmb250U2l6ZScsICdmb250V2VpZ2h0JywgJ3BhZGRpbmcnLCAncm90YXRlJywgJ3NpemUnLCAnc3BpcmFsJywgJ3RpbWVJbnRlcnZhbCddLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGlmIChvcHRpb25zW2tleV0pIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBsYXlvdXRba2V5XShvcHRpb25zW2tleV0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IHdvcmRzID0gdGhpcy5kYXRhLm1hcChpID0+ICh7IC4uLmksIHRleHQ6IGkubmFtZSB9KSk7XG4gICAgbGF5b3V0LndvcmRzKHdvcmRzKTtcbiAgICBjb25zdCByZXN1bHQgPSBsYXlvdXQuc3RhcnQoKTtcbiAgICBjb25zdCB0YWdzOiBhbnlbXSA9IHJlc3VsdC5fdGFncztcbiAgICBjb25zdCBib3VuZHMgPSByZXN1bHQuX2JvdW5kcyB8fCBbXG4gICAgICB7IHg6IDAsIHk6IDAgfSxcbiAgICAgIHsgeDogb3B0aW9ucy5zaXplWzBdLCB5OiBvcHRpb25zLnNpemVbMV0gfSxcbiAgICBdO1xuICAgIHRhZ3MuZm9yRWFjaCh0YWcgPT4ge1xuICAgICAgdGFnLnggKz0gb3B0aW9ucy5zaXplWzBdIC8gMjtcbiAgICAgIHRhZy55ICs9IG9wdGlvbnMuc2l6ZVsxXSAvIDI7XG4gICAgfSk7XG4gICAgY29uc3QgW3csIGhdID0gb3B0aW9ucy5zaXplO1xuICAgIGNvbnN0IGhhc0ltYWdlID0gcmVzdWx0Lmhhc0ltYWdlO1xuICAgIHRhZ3MucHVzaCh7XG4gICAgICB0ZXh0OiAnJyxcbiAgICAgIHZhbHVlOiAwLFxuICAgICAgeDogaGFzSW1hZ2UgPyAwIDogYm91bmRzWzBdLngsXG4gICAgICB5OiBoYXNJbWFnZSA/IDAgOiBib3VuZHNbMF0ueSxcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgfSk7XG4gICAgdGFncy5wdXNoKHtcbiAgICAgIHRleHQ6ICcnLFxuICAgICAgdmFsdWU6IDAsXG4gICAgICB4OiBoYXNJbWFnZSA/IHcgOiBib3VuZHNbMV0ueCxcbiAgICAgIHk6IGhhc0ltYWdlID8gaCA6IGJvdW5kc1sxXS55LFxuICAgICAgb3BhY2l0eTogMCxcbiAgICB9KTtcbiAgICByZXR1cm4gdGFncztcbiAgfVxuXG4gIHByaXZhdGUgYXR0YWNoQ2hhcnQoKTogdm9pZCB7XG4gICAgY29uc3QgeyBfY2hhcnQsIHBhZGRpbmcsIGRhdGEgfSA9IHRoaXM7XG4gICAgaWYgKCFfY2hhcnQgfHwgIWRhdGEgfHwgZGF0YS5sZW5ndGggPD0gMCkgcmV0dXJuO1xuXG4gICAgdGhpcy5maXhXSCgpO1xuICAgIF9jaGFydC5jaGFuZ2VTaXplKHRoaXMuX3csIHRoaXMuX2gpO1xuICAgIF9jaGFydC5wYWRkaW5nID0gcGFkZGluZztcblxuICAgIGNvbnN0IHJvd3MgPSB0aGlzLnRyYW5zZm9ybSgpO1xuICAgIF9jaGFydC5kYXRhKHJvd3MpO1xuICAgIF9jaGFydC5yZW5kZXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2F0dGFjaENoYXJ0KCk6IHZvaWQge1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuYXR0YWNoQ2hhcnQoKSk7XG4gIH1cblxuICBwcml2YXRlIGluc3RhbGxSZXNpemVFdmVudCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlc2l6ZSQgPSBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJylcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoKCkgPT4gISF0aGlzLl9jaGFydCksXG4gICAgICAgIGRlYm91bmNlVGltZSgyMDApLFxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLl9hdHRhY2hDaGFydCgpKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5pbml0VGFnQ2xvdWQoKTtcbiAgICB0aGlzLmluc3RhbGxSZXNpemVFdmVudCgpO1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbnN0YWxsKCksIHRoaXMuZGVsYXkpKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuX2F0dGFjaENoYXJ0KCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5yZXNpemUkKSB7XG4gICAgICB0aGlzLnJlc2l6ZSQudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2NoYXJ0KSB7XG4gICAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLl9jaGFydC5kZXN0cm95KCkpO1xuICAgIH1cbiAgfVxufVxuIl19