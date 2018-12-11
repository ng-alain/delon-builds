import { __decorate, __metadata } from 'tslib';
import { fromEvent } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input, NgModule } from '@angular/core';
import { InputNumber, DelonUtilModule } from '@delon/util';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class G2TagCloudComponent {
    // #endregion
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        // #region fields
        this.delay = 0;
        this.height = 100;
        this.padding = 0;
        this.data = [];
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
    install() {
        const { el, padding, height } = this;
        /** @type {?} */
        const chart = this.chart = new G2.Chart({
            container: el.nativeElement,
            padding,
            height,
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
        this.attachChart();
    }
    /**
     * @return {?}
     */
    attachChart() {
        const { chart, height, padding, data } = this;
        if (!chart || !data || data.length <= 0)
            return;
        chart.set('height', height);
        chart.set('padding', padding);
        chart.forceFit();
        /** @type {?} */
        const dv = new DataSet.View().source(data);
        /** @type {?} */
        const range = dv.range('value');
        /** @type {?} */
        const min = range[0];
        /** @type {?} */
        const max = range[1];
        dv.transform({
            type: 'tag-cloud',
            fields: ['x', 'value'],
            size: [chart.get('width'), chart.get('height')],
            padding,
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
        chart.source(dv, {
            x: { nice: false },
            y: { nice: false },
        });
        chart.repaint();
    }
    /**
     * @return {?}
     */
    installResizeEvent() {
        if (this.resize$)
            return;
        this.resize$ = fromEvent(window, 'resize')
            .pipe(filter(() => this.chart), debounceTime(200))
            .subscribe(() => this.attachChart());
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initTagCloud();
        this.installResizeEvent();
        setTimeout(() => this.install(), this.delay);
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.attachChart();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.resize$) {
            this.resize$.unsubscribe();
        }
        if (this.chart) {
            this.chart.destroy();
        }
    }
}
G2TagCloudComponent.decorators = [
    { type: Component, args: [{
                selector: 'g2-tag-cloud',
                template: ``,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
G2TagCloudComponent.ctorParameters = () => [
    { type: ElementRef }
];
G2TagCloudComponent.propDecorators = {
    delay: [{ type: Input }],
    height: [{ type: HostBinding, args: ['style.height.px',] }, { type: Input }],
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
], G2TagCloudComponent.prototype, "height", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [G2TagCloudComponent];
class G2TagCloudModule {
}
G2TagCloudModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, DelonUtilModule],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { G2TagCloudComponent, G2TagCloudModule };

//# sourceMappingURL=tag-cloud.js.map