/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// tslint:disable:no-any
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, NgZone, ViewChild, } from '@angular/core';
import { InputNumber } from '@delon/util';
export class G2TagCloudComponent {
    /**
     * @param {?} el
     * @param {?} cdr
     * @param {?} zone
     */
    constructor(el, cdr, zone) {
        this.el = el;
        this.cdr = cdr;
        this.zone = zone;
        // #region fields
        this.height = 0;
        this.padding = 0;
        this.initFlag = false;
    }
    /**
     * @return {?}
     */
    initTagCloud() {
        // 给point注册一个词云的shape
        G2.Shape.registerShape('point', 'cloud', {
            /**
             * @param {?} cfg
             * @param {?} container
             * @return {?}
             */
            drawShape(cfg, container) {
                /** @type {?} */
                const attrs = Object.assign({ fillOpacity: cfg.opacity, fontSize: cfg.origin._origin.size, rotate: cfg.origin._origin.rotate, text: cfg.origin._origin.text, textAlign: 'center', fontFamily: cfg.origin._origin.font, fill: cfg.color, textBaseline: 'Alphabetic' }, cfg.style);
                return container.addShape('text', {
                    attrs: Object.assign({}, attrs, { x: cfg.x, y: cfg.y }),
                });
            },
        });
    }
    /**
     * @return {?}
     */
    renderChart() {
        if (!this.data || (this.data && this.data.length < 1))
            return;
        this.uninstall();
        this.node.nativeElement.innerHTML = '';
        /** @type {?} */
        const dv = new DataSet.View().source(this.data);
        /** @type {?} */
        const range = dv.range('value');
        /** @type {?} */
        const min = range[0];
        /** @type {?} */
        const max = range[1];
        /** @type {?} */
        const height = +this.height;
        /** @type {?} */
        const width = +this.el.nativeElement.offsetWidth;
        dv.transform({
            type: 'tag-cloud',
            fields: ['x', 'value'],
            size: [width, height],
            padding: this.padding,
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
                if (d.value) {
                    return ((d.value - min) / (max - min)) * (80 - 24) + 24;
                }
                return 0;
            },
        });
        /** @type {?} */
        const chart = new G2.Chart({
            container: this.node.nativeElement,
            width,
            height,
            padding: this.padding,
            forceFit: true,
        });
        chart.source(dv, {
            x: { nice: false },
            y: { nice: false },
        });
        chart.legend(false);
        chart.axis(false);
        chart.tooltip({
            showTitle: false,
        });
        chart.coord().reflect();
        chart
            .point()
            .position('x*y')
            .color('category')
            .shape('cloud')
            .tooltip('value*category');
        chart.render();
        this.chart = chart;
    }
    /**
     * @return {?}
     */
    runInstall() {
        this.zone.runOutsideAngular(() => setTimeout(() => this.renderChart()));
    }
    /**
     * @return {?}
     */
    uninstall() {
        if (this.chart) {
            this.chart.destroy();
            this.chart = null;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initFlag = true;
        this.zone.runOutsideAngular(() => setTimeout(() => {
            this.initTagCloud();
            this.runInstall();
        }));
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.initFlag) {
            this.runInstall();
            this.cdr.detectChanges();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.uninstall();
    }
}
G2TagCloudComponent.decorators = [
    { type: Component, args: [{
                selector: 'g2-tag-cloud',
                template: `<div #container [ngStyle]="{'height.px': height}"></div>`,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
G2TagCloudComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: NgZone }
];
G2TagCloudComponent.propDecorators = {
    height: [{ type: Input }],
    padding: [{ type: Input }],
    data: [{ type: Input }],
    node: [{ type: ViewChild, args: ['container',] }]
};
tslib_1.__decorate([
    InputNumber(),
    tslib_1.__metadata("design:type", Object)
], G2TagCloudComponent.prototype, "height", void 0);
if (false) {
    /** @type {?} */
    G2TagCloudComponent.prototype.height;
    /** @type {?} */
    G2TagCloudComponent.prototype.padding;
    /** @type {?} */
    G2TagCloudComponent.prototype.data;
    /** @type {?} */
    G2TagCloudComponent.prototype.node;
    /** @type {?} */
    G2TagCloudComponent.prototype.chart;
    /** @type {?} */
    G2TagCloudComponent.prototype.initFlag;
    /** @type {?} */
    G2TagCloudComponent.prototype.el;
    /** @type {?} */
    G2TagCloudComponent.prototype.cdr;
    /** @type {?} */
    G2TagCloudComponent.prototype.zone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLWNsb3VkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9jaGFydC90YWctY2xvdWQvIiwic291cmNlcyI6WyJ0YWctY2xvdWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFJTixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQVUxQyxNQUFNLE9BQU8sbUJBQW1COzs7Ozs7SUFtQjlCLFlBQ1UsRUFBYyxFQUNkLEdBQXNCLEVBQ3RCLElBQVk7UUFGWixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2QsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDdEIsU0FBSSxHQUFKLElBQUksQ0FBUTs7UUFuQkUsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUduQyxZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBV0osYUFBUSxHQUFHLEtBQUssQ0FBQztJQU1yQixDQUFDOzs7O0lBRUcsWUFBWTtRQUNsQixxQkFBcUI7UUFDckIsRUFBRSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRTs7Ozs7O1lBQ3ZDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsU0FBUzs7c0JBQ2hCLEtBQUssbUJBQ1QsV0FBVyxFQUFFLEdBQUcsQ0FBQyxPQUFPLEVBQ3hCLFFBQVEsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQ2pDLE1BQU0sRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQ2pDLElBQUksRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQzdCLFNBQVMsRUFBRSxRQUFRLEVBQ25CLFVBQVUsRUFBRSxHQUFHLENBQUMsTUFB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RUFBRSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7O1lBL0lGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFLDBEQUEwRDtnQkFDcEUsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUFqQkMsVUFBVTtZQUZWLGlCQUFpQjtZQUlqQixNQUFNOzs7cUJBbUJMLEtBQUs7c0JBRUwsS0FBSzttQkFHTCxLQUFLO21CQUtMLFNBQVMsU0FBQyxXQUFXOztBQVZFO0lBQWQsV0FBVyxFQUFFOzttREFBWTs7O0lBQW5DLHFDQUFtQzs7SUFFbkMsc0NBQ1k7O0lBRVosbUNBQ2lGOztJQUlqRixtQ0FDeUI7O0lBRXpCLG9DQUFtQjs7SUFDbkIsdUNBQXlCOztJQUd2QixpQ0FBc0I7O0lBQ3RCLGtDQUE4Qjs7SUFDOUIsbUNBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6bm8tYW55XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5kZWNsYXJlIHZhciBHMjogYW55O1xuZGVjbGFyZSB2YXIgRGF0YVNldDogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnMi10YWctY2xvdWQnLFxuICB0ZW1wbGF0ZTogYDxkaXYgI2NvbnRhaW5lciBbbmdTdHlsZV09XCJ7J2hlaWdodC5weCc6IGhlaWdodH1cIj48L2Rpdj5gLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRzJUYWdDbG91ZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBPbkluaXQge1xuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGhlaWdodCA9IDA7XG5cbiAgQElucHV0KClcbiAgcGFkZGluZyA9IDA7XG5cbiAgQElucHV0KClcbiAgZGF0YTogQXJyYXk8eyBuYW1lOiBzdHJpbmc7IHZhbHVlOiBudW1iZXI7IGNhdGVnb3J5PzogYW55OyBba2V5OiBzdHJpbmddOiBhbnkgfT47XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicpXG4gIHByaXZhdGUgbm9kZTogRWxlbWVudFJlZjtcblxuICBwcml2YXRlIGNoYXJ0OiBhbnk7XG4gIHByaXZhdGUgaW5pdEZsYWcgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHpvbmU6IE5nWm9uZSxcbiAgKSB7IH1cblxuICBwcml2YXRlIGluaXRUYWdDbG91ZCgpIHtcbiAgICAvLyDnu5lwb2ludOazqOWGjOS4gOS4quivjeS6keeahHNoYXBlXG4gICAgRzIuU2hhcGUucmVnaXN0ZXJTaGFwZSgncG9pbnQnLCAnY2xvdWQnLCB7XG4gICAgICBkcmF3U2hhcGUoY2ZnLCBjb250YWluZXIpIHtcbiAgICAgICAgY29uc3QgYXR0cnMgPSB7XG4gICAgICAgICAgZmlsbE9wYWNpdHk6IGNmZy5vcGFjaXR5LFxuICAgICAgICAgIGZvbnRTaXplOiBjZmcub3JpZ2luLl9vcmlnaW4uc2l6ZSxcbiAgICAgICAgICByb3RhdGU6IGNmZy5vcmlnaW4uX29yaWdpbi5yb3RhdGUsXG4gICAgICAgICAgdGV4dDogY2ZnLm9yaWdpbi5fb3JpZ2luLnRleHQsXG4gICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICBmb250RmFtaWx5OiBjZmcub3JpZ2luLl9vcmlnaW4uZm9udCxcbiAgICAgICAgICBmaWxsOiBjZmcuY29sb3IsXG4gICAgICAgICAgdGV4dEJhc2VsaW5lOiAnQWxwaGFiZXRpYycsXG4gICAgICAgICAgLi4uY2ZnLnN0eWxlLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gY29udGFpbmVyLmFkZFNoYXBlKCd0ZXh0Jywge1xuICAgICAgICAgIGF0dHJzOiB7IC4uLmF0dHJzLCB4OiBjZmcueCwgeTogY2ZnLnkgfSxcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJDaGFydCgpIHtcbiAgICBpZiAoIXRoaXMuZGF0YSB8fCAodGhpcy5kYXRhICYmIHRoaXMuZGF0YS5sZW5ndGggPCAxKSkgcmV0dXJuO1xuXG4gICAgdGhpcy51bmluc3RhbGwoKTtcbiAgICB0aGlzLm5vZGUubmF0aXZlRWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgICBjb25zdCBkdiA9IG5ldyBEYXRhU2V0LlZpZXcoKS5zb3VyY2UodGhpcy5kYXRhKTtcbiAgICBjb25zdCByYW5nZSA9IGR2LnJhbmdlKCd2YWx1ZScpO1xuICAgIGNvbnN0IG1pbiA9IHJhbmdlWzBdO1xuICAgIGNvbnN0IG1heCA9IHJhbmdlWzFdO1xuICAgIGNvbnN0IGhlaWdodCA9ICt0aGlzLmhlaWdodDtcbiAgICBjb25zdCB3aWR0aCA9ICt0aGlzLmVsLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XG5cbiAgICBkdi50cmFuc2Zvcm0oe1xuICAgICAgdHlwZTogJ3RhZy1jbG91ZCcsXG4gICAgICBmaWVsZHM6IFsneCcsICd2YWx1ZSddLFxuICAgICAgc2l6ZTogW3dpZHRoLCBoZWlnaHRdLFxuICAgICAgcGFkZGluZzogdGhpcy5wYWRkaW5nLFxuICAgICAgdGltZUludGVydmFsOiA1MDAwLCAvLyBtYXggZXhlY3V0ZSB0aW1lXG4gICAgICByb3RhdGUoKSB7XG4gICAgICAgIGxldCByYW5kb20gPSB+fihNYXRoLnJhbmRvbSgpICogNCkgJSA0O1xuICAgICAgICBpZiAocmFuZG9tID09PSAyKSB7XG4gICAgICAgICAgcmFuZG9tID0gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmFuZG9tICogOTA7IC8vIDAsIDkwLCAyNzBcbiAgICAgIH0sXG4gICAgICBmb250U2l6ZShkKSB7XG4gICAgICAgIGlmIChkLnZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuICgoZC52YWx1ZSAtIG1pbikgLyAobWF4IC0gbWluKSkgKiAoODAgLSAyNCkgKyAyNDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgY29uc3QgY2hhcnQgPSBuZXcgRzIuQ2hhcnQoe1xuICAgICAgY29udGFpbmVyOiB0aGlzLm5vZGUubmF0aXZlRWxlbWVudCxcbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0LFxuICAgICAgcGFkZGluZzogdGhpcy5wYWRkaW5nLFxuICAgICAgZm9yY2VGaXQ6IHRydWUsXG4gICAgfSk7XG4gICAgY2hhcnQuc291cmNlKGR2LCB7XG4gICAgICB4OiB7IG5pY2U6IGZhbHNlIH0sXG4gICAgICB5OiB7IG5pY2U6IGZhbHNlIH0sXG4gICAgfSk7XG4gICAgY2hhcnQubGVnZW5kKGZhbHNlKTtcbiAgICBjaGFydC5heGlzKGZhbHNlKTtcbiAgICBjaGFydC50b29sdGlwKHtcbiAgICAgIHNob3dUaXRsZTogZmFsc2UsXG4gICAgfSk7XG4gICAgY2hhcnQuY29vcmQoKS5yZWZsZWN0KCk7XG4gICAgY2hhcnRcbiAgICAgIC5wb2ludCgpXG4gICAgICAucG9zaXRpb24oJ3gqeScpXG4gICAgICAuY29sb3IoJ2NhdGVnb3J5JylcbiAgICAgIC5zaGFwZSgnY2xvdWQnKVxuICAgICAgLnRvb2x0aXAoJ3ZhbHVlKmNhdGVnb3J5Jyk7XG5cbiAgICBjaGFydC5yZW5kZXIoKTtcblxuICAgIHRoaXMuY2hhcnQgPSBjaGFydDtcbiAgfVxuXG4gIHByaXZhdGUgcnVuSW5zdGFsbCgpIHtcbiAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLnJlbmRlckNoYXJ0KCkpKTtcbiAgfVxuXG4gIHByaXZhdGUgdW5pbnN0YWxsKCkge1xuICAgIGlmICh0aGlzLmNoYXJ0KSB7XG4gICAgICB0aGlzLmNoYXJ0LmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuY2hhcnQgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaW5pdEZsYWcgPSB0cnVlO1xuICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PlxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuaW5pdFRhZ0Nsb3VkKCk7XG4gICAgICAgIHRoaXMucnVuSW5zdGFsbCgpO1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmluaXRGbGFnKSB7XG4gICAgICB0aGlzLnJ1bkluc3RhbGwoKTtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnVuaW5zdGFsbCgpO1xuICB9XG59XG4iXX0=