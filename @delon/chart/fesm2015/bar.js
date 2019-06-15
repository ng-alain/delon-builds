import { __decorate, __metadata } from 'tslib';
import { Component, ChangeDetectionStrategy, ViewEncapsulation, NgZone, ViewChild, Input, NgModule } from '@angular/core';
import { InputNumber, InputBoolean, DelonUtilModule } from '@delon/util';
import { fromEvent } from 'rxjs';
import { filter, debounceTime } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const TITLE_HEIGHT = 41;
class G2BarComponent {
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
        const { node, padding } = this;
        /** @type {?} */
        const container = (/** @type {?} */ (node.nativeElement));
        /** @type {?} */
        const chart = (this.chart = new G2.Chart({
            container,
            forceFit: true,
            legend: null,
            height: this.getHeight(),
            padding,
        }));
        this.updatelabel();
        chart.axis('y', {
            title: false,
            line: false,
            tickLine: false,
        });
        chart.source([], {
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
        chart
            .interval()
            .position('x*y')
            .tooltip('x*y', (/**
         * @param {?} x
         * @param {?} y
         * @return {?}
         */
        (x, y) => ({ name: x, value: y })));
        chart.render();
        this.attachChart();
    }
    /**
     * @private
     * @return {?}
     */
    attachChart() {
        const { chart, padding, data, color } = this;
        if (!chart || !data || data.length <= 0)
            return;
        this.installResizeEvent();
        /** @type {?} */
        const height = this.getHeight();
        if (chart.get('height') !== height) {
            chart.changeHeight(height);
        }
        // color
        chart.get('geoms')[0].color(color);
        chart.set('padding', padding);
        chart.changeData(data);
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
        chart.axis('x', canvasWidth > minWidth).repaint();
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
        () => this.chart)), debounceTime(200))
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
    node: [{ type: ViewChild, args: ['container',] }],
    delay: [{ type: Input }],
    title: [{ type: Input }],
    color: [{ type: Input }],
    height: [{ type: Input }],
    padding: [{ type: Input }],
    data: [{ type: Input }],
    autoLabel: [{ type: Input }]
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [G2BarComponent];
class G2BarModule {
}
G2BarModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, DelonUtilModule],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS],
            },] }
];

export { G2BarComponent, G2BarModule };
//# sourceMappingURL=bar.js.map
