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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLWNsb3VkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jaGFydC90YWctY2xvdWQvIiwic291cmNlcyI6WyJ0YWctY2xvdWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBSU4sTUFBTSxFQUNOLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsS0FBSyxFQUFTLGFBQWEsRUFBUyxJQUFJLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDcEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFdBQVcsRUFBZSxNQUFNLGFBQWEsQ0FBQztBQUUzRSxPQUFPLEVBQUUsU0FBUyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RELE9BQU8sUUFBUSxNQUFNLGtCQUFrQixDQUFDOzs7O0FBRXhDLG9DQUlDOzs7SUFIQywrQkFBZTs7SUFDZiw4QkFBYzs7Ozs7O0FBSWhCLHlDQUdDOzs7SUFGQyxtQ0FBcUI7O0lBQ3JCLGlDQUFVOztBQVdaLE1BQU0sT0FBTyxtQkFBbUI7Ozs7Ozs7O0lBMEI5QixZQUFvQixFQUE4QixFQUFVLE1BQWMsRUFBRSxTQUE2QixFQUFVLFFBQWtCO1FBQWpILE9BQUUsR0FBRixFQUFFLENBQTRCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUF5QyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBbkI3SCxPQUFFLEdBQVcsQ0FBQyxDQUFDO1FBQ2YsT0FBRSxHQUFXLENBQUMsQ0FBQzs7UUFRQyxVQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ1osVUFBSyxH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YUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7Ozs7WUFuQ0MsVUFBVTtZQUdWLE1BQU07WUFRQyxrQkFBa0I7WUFmbEIsUUFBUTs7O29CQXdEZCxLQUFLO29CQUNMLEtBQUs7cUJBQ0wsS0FBSztzQkFDTCxLQUFLO21CQUNMLEtBQUs7b0JBQ0wsS0FBSzt3QkFDTCxNQUFNOztBQU5pQjtJQUFkLFdBQVcsRUFBRTs7a0RBQWE7QUFDWjtJQUFkLFdBQVcsRUFBRTs7a0RBQVc7QUFDVjtJQUFkLFdBQVcsRUFBRTs7bURBQWM7OztJQWpCckMsNENBQTRDOztJQUM1Qyw2Q0FBNkM7O0lBQzdDLDRDQUE0Qzs7Ozs7SUFFNUMsc0NBQThCOzs7OztJQUM5QixxQ0FBc0I7Ozs7O0lBQ3RCLGlDQUF1Qjs7Ozs7SUFDdkIsaUNBQXVCOztJQVF2QixvQ0FBb0M7O0lBQ3BDLG9DQUFrQzs7SUFDbEMscUNBQXFDOztJQUNyQyxzQ0FBaUQ7O0lBQ2pELG1DQUFxQzs7SUFDckMsb0NBQTJDOztJQUMzQyx3Q0FBOEQ7Ozs7O0lBSWxELGlDQUFzQzs7Ozs7SUFBRSxxQ0FBc0I7Ozs7O0lBQWlDLHVDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaGFydCwgRXZlbnQsIHJlZ2lzdGVyU2hhcGUsIFR5cGVzLCBVdGlsIH0gZnJvbSAnQGFudHYvZzInO1xuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlLCBJbnB1dE51bWJlciwgTnVtYmVySW5wdXQgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHRhZ0Nsb3VkIGZyb20gJy4vdGFnLWNsb3VkLmRhdGEnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEcyVGFnQ2xvdWREYXRhIHtcbiAgdmFsdWU/OiBudW1iZXI7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHMlRhZ0Nsb3VkQ2xpY2tJdGVtIHtcbiAgaXRlbTogRzJUYWdDbG91ZERhdGE7XG4gIGV2OiBFdmVudDtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZzItdGFnLWNsb3VkJyxcbiAgZXhwb3J0QXM6ICdnMlRhZ0Nsb3VkJyxcbiAgdGVtcGxhdGU6IGBgLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIEcyVGFnQ2xvdWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgT25Jbml0IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2RlbGF5OiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2hlaWdodDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV93aWR0aDogTnVtYmVySW5wdXQ7XG5cbiAgcHJpdmF0ZSByZXNpemUkOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX2NoYXJ0OiBDaGFydDtcbiAgcHJpdmF0ZSBfaDogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBfdzogbnVtYmVyID0gMDtcblxuICBnZXQgY2hhcnQoKTogQ2hhcnQge1xuICAgIHJldHVybiB0aGlzLl9jaGFydDtcbiAgfVxuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgZGVsYXkgPSAxMDA7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHdpZHRoID0gMDtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgaGVpZ2h0ID0gMjAwO1xuICBASW5wdXQoKSBwYWRkaW5nOiBudW1iZXIgfCBudW1iZXJbXSB8ICdhdXRvJyA9IDA7XG4gIEBJbnB1dCgpIGRhdGE6IEcyVGFnQ2xvdWREYXRhW10gPSBbXTtcbiAgQElucHV0KCkgdGhlbWU6IHN0cmluZyB8IFR5cGVzLkxvb3NlT2JqZWN0O1xuICBAT3V0cHV0KCkgY2xpY2tJdGVtID0gbmV3IEV2ZW50RW1pdHRlcjxHMlRhZ0Nsb3VkQ2xpY2tJdGVtPigpO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PiwgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSwgY29uZmlnU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UsIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtKSB7XG4gICAgY29uZmlnU3J2LmF0dGFjaEtleSh0aGlzLCAnY2hhcnQnLCAndGhlbWUnKTtcbiAgfVxuXG4gIHByaXZhdGUgZml4V0goKTogdm9pZCB7XG4gICAgY29uc3QgeyBoZWlnaHQsIHdpZHRoLCBlbCB9ID0gdGhpcztcbiAgICB0aGlzLl9oID0gaGVpZ2h0IDw9IDAgPyBlbC5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodCA6IGhlaWdodDtcbiAgICB0aGlzLl93ID0gd2lkdGggPD0gMCA/IGVsLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGggOiB3aWR0aDtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdFRhZ0Nsb3VkKCk6IHZvaWQge1xuICAgIHJlZ2lzdGVyU2hhcGUoJ3BvaW50JywgJ2Nsb3VkJywge1xuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB0eXBlZGVmXG4gICAgICBkcmF3KGNmZywgY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBjZmcuZGF0YSBhcyBOelNhZmVBbnk7XG4gICAgICAgIGNvbnN0IHRleHRTaGFwZSA9IGNvbnRhaW5lci5hZGRTaGFwZSh7XG4gICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgIG5hbWU6ICd0YWctY2xvdWQtdGV4dCcsXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIC4uLmNmZy5zdHlsZSxcbiAgICAgICAgICAgIGZvbnRTaXplOiBkYXRhLnNpemUsXG4gICAgICAgICAgICB0ZXh0OiBkYXRhLnRleHQsXG4gICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgZm9udEZhbWlseTogZGF0YS5mb250LFxuICAgICAgICAgICAgZmlsbDogY2ZnLmNvbG9yLFxuICAgICAgICAgICAgdGV4dEJhc2VsaW5lOiAnQWxwaGFiZXRpYycsXG4gICAgICAgICAgICB4OiBjZmcueCxcbiAgICAgICAgICAgIHk6IGNmZy55LFxuICAgICAgICAgIH0gYXMgTnpTYWZlQW55LFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGRhdGEucm90YXRlKSB7XG4gICAgICAgICAgVXRpbC5yb3RhdGUodGV4dFNoYXBlLCAoZGF0YS5yb3RhdGUgKiBNYXRoLlBJKSAvIDE4MCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRleHRTaGFwZTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGluc3RhbGwoKTogdm9pZCB7XG4gICAgY29uc3QgeyBlbCwgcGFkZGluZywgdGhlbWUgfSA9IHRoaXM7XG5cbiAgICB0aGlzLmZpeFdIKCk7XG4gICAgY29uc3QgY2hhcnQgPSAodGhpcy5fY2hhcnQgPSBuZXcgQ2hhcnQoe1xuICAgICAgY29udGFpbmVyOiBlbC5uYXRpdmVFbGVtZW50LFxuICAgICAgYXV0b0ZpdDogZmFsc2UsXG4gICAgICBoZWlnaHQ6IHRoaXMuX2gsXG4gICAgICB3aWR0aDogdGhpcy5fdyxcbiAgICAgIHBhZGRpbmcsXG4gICAgICB0aGVtZSxcbiAgICB9KSk7XG4gICAgY2hhcnQuc2NhbGUoe1xuICAgICAgeDogeyBuaWNlOiBmYWxzZSB9LFxuICAgICAgeTogeyBuaWNlOiBmYWxzZSB9LFxuICAgIH0pO1xuICAgIGNoYXJ0LmxlZ2VuZChmYWxzZSk7XG4gICAgY2hhcnQuYXhpcyhmYWxzZSk7XG4gICAgY2hhcnQudG9vbHRpcCh7XG4gICAgICBzaG93VGl0bGU6IGZhbHNlLFxuICAgICAgc2hvd01hcmtlcnM6IGZhbHNlLFxuICAgIH0pO1xuICAgIChjaGFydC5jb29yZGluYXRlKCkgYXMgTnpTYWZlQW55KS5yZWZsZWN0KCk7XG4gICAgY2hhcnRcbiAgICAgIC5wb2ludCgpXG4gICAgICAucG9zaXRpb24oJ3gqeScpXG4gICAgICAuY29sb3IoJ3RleHQnKVxuICAgICAgLnNoYXBlKCdjbG91ZCcpXG4gICAgICAuc3RhdGUoe1xuICAgICAgICBhY3RpdmU6IHtcbiAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgZmlsbE9wYWNpdHk6IDAuNCxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgY2hhcnQuaW50ZXJhY3Rpb24oJ2VsZW1lbnQtYWN0aXZlJyk7XG5cbiAgICBjaGFydC5vbigndGFnLWNsb3VkLXRleHQ6Y2xpY2snLCAoZXY6IEV2ZW50KSA9PiB7XG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5jbGlja0l0ZW0uZW1pdCh7IGl0ZW06IGV2LmRhdGE/LmRhdGEsIGV2IH0pKTtcbiAgICB9KTtcblxuICAgIHRoaXMuYXR0YWNoQ2hhcnQoKTtcbiAgfVxuXG4gIHByaXZhdGUgdHJhbnNmb3JtKCk6IGFueSB7XG4gICAgY29uc3Qgc3RhdGlzdGljRGF0YSA9IHRoaXMuZGF0YS5tYXAoaSA9PiBpLnZhbHVlISk7XG4gICAgY29uc3QgbWluID0gTWF0aC5taW4oLi4uc3RhdGlzdGljRGF0YSk7XG4gICAgY29uc3QgbWF4ID0gTWF0aC5tYXgoLi4uc3RhdGlzdGljRGF0YSk7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIGZpZWxkczogWyduYW1lJywgJ3ZhbHVlJ10sXG4gICAgICAvLyBpbWFnZU1hc2ssXG4gICAgICBmb250OiAnVmVyZGFuYScsXG4gICAgICBwYWRkaW5nOiAxLFxuICAgICAgc2l6ZTogW3RoaXMuX3csIHRoaXMuX2hdLCAvLyDlrr3pq5jorr7nva7mnIDlpb3moLnmja4gaW1hZ2VNYXNrIOWBmuiwg+aVtFxuICAgICAgdGltZUludGVydmFsOiA1MDAwLCAvLyBtYXggZXhlY3V0ZSB0aW1lXG4gICAgICByb3RhdGU6ICgpID0+IHtcbiAgICAgICAgbGV0IHJhbmRvbSA9IH5+KE1hdGgucmFuZG9tKCkgKiA0KSAlIDQ7XG4gICAgICAgIGlmIChyYW5kb20gPT09IDIpIHtcbiAgICAgICAgICByYW5kb20gPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByYW5kb20gKiA5MDsgLy8gMCwgOTAsIDI3MFxuICAgICAgfSxcbiAgICAgIGZvbnRTaXplOiAoZDogRzJUYWdDbG91ZERhdGEpID0+IHtcbiAgICAgICAgcmV0dXJuICgoZC52YWx1ZSEgLSBtaW4pIC8gKG1heCAtIG1pbikpICogKDMyIC0gOCkgKyA4O1xuICAgICAgfSxcbiAgICB9O1xuICAgIGNvbnN0IGxheW91dCA9IHRhZ0Nsb3VkKCk7XG4gICAgWydmb250JywgJ2ZvbnRTaXplJywgJ2ZvbnRXZWlnaHQnLCAncGFkZGluZycsICdyb3RhdGUnLCAnc2l6ZScsICdzcGlyYWwnLCAndGltZUludGVydmFsJ10uZm9yRWFjaChrZXkgPT4ge1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgaWYgKG9wdGlvbnNba2V5XSkge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGxheW91dFtrZXldKG9wdGlvbnNba2V5XSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgY29uc3Qgd29yZHMgPSB0aGlzLmRhdGEubWFwKGkgPT4gKHsgLi4uaSwgdGV4dDogaS5uYW1lIH0pKTtcbiAgICBsYXlvdXQud29yZHMod29yZHMpO1xuICAgIGNvbnN0IHJlc3VsdCA9IGxheW91dC5zdGFydCgpO1xuICAgIGNvbnN0IHRhZ3M6IGFueVtdID0gcmVzdWx0Ll90YWdzO1xuICAgIGNvbnN0IGJvdW5kcyA9IHJlc3VsdC5fYm91bmRzIHx8IFtcbiAgICAgIHsgeDogMCwgeTogMCB9LFxuICAgICAgeyB4OiBvcHRpb25zLnNpemVbMF0sIHk6IG9wdGlvbnMuc2l6ZVsxXSB9LFxuICAgIF07XG4gICAgdGFncy5mb3JFYWNoKHRhZyA9PiB7XG4gICAgICB0YWcueCArPSBvcHRpb25zLnNpemVbMF0gLyAyO1xuICAgICAgdGFnLnkgKz0gb3B0aW9ucy5zaXplWzFdIC8gMjtcbiAgICB9KTtcbiAgICBjb25zdCBbdywgaF0gPSBvcHRpb25zLnNpemU7XG4gICAgY29uc3QgaGFzSW1hZ2UgPSByZXN1bHQuaGFzSW1hZ2U7XG4gICAgdGFncy5wdXNoKHtcbiAgICAgIHRleHQ6ICcnLFxuICAgICAgdmFsdWU6IDAsXG4gICAgICB4OiBoYXNJbWFnZSA/IDAgOiBib3VuZHNbMF0ueCxcbiAgICAgIHk6IGhhc0ltYWdlID8gMCA6IGJvdW5kc1swXS55LFxuICAgICAgb3BhY2l0eTogMCxcbiAgICB9KTtcbiAgICB0YWdzLnB1c2goe1xuICAgICAgdGV4dDogJycsXG4gICAgICB2YWx1ZTogMCxcbiAgICAgIHg6IGhhc0ltYWdlID8gdyA6IGJvdW5kc1sxXS54LFxuICAgICAgeTogaGFzSW1hZ2UgPyBoIDogYm91bmRzWzFdLnksXG4gICAgICBvcGFjaXR5OiAwLFxuICAgIH0pO1xuICAgIHJldHVybiB0YWdzO1xuICB9XG5cbiAgcHJpdmF0ZSBhdHRhY2hDaGFydCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IF9jaGFydCwgcGFkZGluZywgZGF0YSB9ID0gdGhpcztcbiAgICBpZiAoIV9jaGFydCB8fCAhZGF0YSB8fCBkYXRhLmxlbmd0aCA8PSAwKSByZXR1cm47XG5cbiAgICB0aGlzLmZpeFdIKCk7XG4gICAgX2NoYXJ0LmNoYW5nZVNpemUodGhpcy5fdywgdGhpcy5faCk7XG4gICAgX2NoYXJ0LnBhZGRpbmcgPSBwYWRkaW5nO1xuXG4gICAgY29uc3Qgcm93cyA9IHRoaXMudHJhbnNmb3JtKCk7XG4gICAgX2NoYXJ0LmRhdGEocm93cyk7XG4gICAgX2NoYXJ0LnJlbmRlcigpO1xuICB9XG5cbiAgcHJpdmF0ZSBfYXR0YWNoQ2hhcnQoKTogdm9pZCB7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5hdHRhY2hDaGFydCgpKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5zdGFsbFJlc2l6ZUV2ZW50KCk6IHZvaWQge1xuICAgIHRoaXMucmVzaXplJCA9IGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcigoKSA9PiAhIXRoaXMuX2NoYXJ0KSxcbiAgICAgICAgZGVib3VuY2VUaW1lKDIwMCksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuX2F0dGFjaENoYXJ0KCkpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmluaXRUYWdDbG91ZCgpO1xuICAgIHRoaXMuaW5zdGFsbFJlc2l6ZUV2ZW50KCk7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmluc3RhbGwoKSwgdGhpcy5kZWxheSkpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5fYXR0YWNoQ2hhcnQoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnJlc2l6ZSQpIHtcbiAgICAgIHRoaXMucmVzaXplJC51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY2hhcnQpIHtcbiAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuX2NoYXJ0LmRlc3Ryb3koKSk7XG4gICAgfVxuICB9XG59XG4iXX0=