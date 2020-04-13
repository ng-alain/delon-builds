import { __assign, __decorate, __metadata, __spread } from 'tslib';
import { Component, ChangeDetectionStrategy, ViewEncapsulation, ElementRef, NgZone, Input, NgModule } from '@angular/core';
import DataSet from '@antv/data-set';
import { registerShape, Util, Chart } from '@antv/g2';
import { InputNumber, DelonUtilModule } from '@delon/util';
import { fromEvent } from 'rxjs';
import { filter, debounceTime } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: tag-cloud.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function G2TagCloudData() { }
if (false) {
    /** @type {?|undefined} */
    G2TagCloudData.prototype.x;
    /** @type {?|undefined} */
    G2TagCloudData.prototype.value;
    /** @type {?|undefined} */
    G2TagCloudData.prototype.category;
    /* Skipping unhandled member: [key: string]: any;*/
}
var G2TagCloudComponent = /** @class */ (function () {
    // #endregion
    function G2TagCloudComponent(el, ngZone) {
        this.el = el;
        this.ngZone = ngZone;
        // #region fields
        this.delay = 0;
        this.height = 100;
        this.padding = 0;
        this.data = [];
    }
    /**
     * @private
     * @return {?}
     */
    G2TagCloudComponent.prototype.initTagCloud = /**
     * @private
     * @return {?}
     */
    function () {
        // 给point注册一个词云的shape
        registerShape('point', 'cloud', {
            draw: /**
             * @param {?} cfg
             * @param {?} container
             * @return {?}
             */
            function (cfg, container) {
                /** @type {?} */
                var data = (/** @type {?} */ (cfg.data));
                /** @type {?} */
                var textShape = container.addShape('text', {
                    attrs: __assign(__assign(__assign({}, cfg.defaultStyle), cfg.style), { fontSize: data.size, text: data.text, textAlign: 'center', fontFamily: data.font, fill: cfg.color, textBaseline: 'Alphabetic', x: cfg.x, y: cfg.y }),
                });
                if (data.rotate) {
                    Util.rotate(textShape, (data.rotate * Math.PI) / 180);
                }
                return textShape;
            },
        });
    };
    /**
     * @private
     * @return {?}
     */
    G2TagCloudComponent.prototype.install = /**
     * @private
     * @return {?}
     */
    function () {
        var _a = this, el = _a.el, padding = _a.padding, height = _a.height;
        /** @type {?} */
        var chart = (this.chart = new Chart({
            container: el.nativeElement,
            padding: padding,
            height: height,
        }));
        chart.legend(false);
        chart.axis(false);
        chart.tooltip({
            showTitle: false,
            showMarkers: false,
        });
        chart.coordinate().reflect('x');
        chart.point().position('x*y').color('category').shape('cloud').tooltip('value*category');
        chart.interaction('element-active');
        this.attachChart();
    };
    /**
     * @private
     * @return {?}
     */
    G2TagCloudComponent.prototype.attachChart = /**
     * @private
     * @return {?}
     */
    function () {
        var _a = this, chart = _a.chart, height = _a.height, padding = _a.padding, data = _a.data;
        if (!chart || !data || data.length <= 0)
            return;
        chart.height = height;
        chart.padding = padding;
        chart.forceFit();
        /** @type {?} */
        var dv = new DataSet.View().source(data);
        /** @type {?} */
        var range = dv.range('value');
        /** @type {?} */
        var min = range[0];
        /** @type {?} */
        var max = range[1];
        dv.transform((/** @type {?} */ ({
            type: 'tag-cloud',
            fields: ['x', 'value'],
            size: [chart.width, chart.height],
            padding: typeof padding === 'number' ? padding : undefined,
            timeInterval: 5000,
            // max execute time
            rotate: (/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var random = ~~(Math.random() * 4) % 4;
                if (random === 2) {
                    random = 0;
                }
                return random * 90; // 0, 90, 270
            }),
            fontSize: /**
             * @param {?} d
             * @return {?}
             */
            function (d) {
                if (d.value) {
                    return ((d.value - min) / (max - min)) * (80 - 24) + 24;
                }
                return 0;
            },
        })));
        chart.scale({
            x: { nice: false },
            y: { nice: false },
        });
        chart.changeData(dv.rows);
        chart.render();
    };
    /**
     * @private
     * @return {?}
     */
    G2TagCloudComponent.prototype._attachChart = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () { return _this.attachChart(); }));
    };
    /**
     * @private
     * @return {?}
     */
    G2TagCloudComponent.prototype.installResizeEvent = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.resize$ = fromEvent(window, 'resize')
            .pipe(filter((/**
         * @return {?}
         */
        function () { return !!_this.chart; })), debounceTime(200))
            .subscribe((/**
         * @return {?}
         */
        function () { return _this._attachChart(); }));
    };
    /**
     * @return {?}
     */
    G2TagCloudComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.initTagCloud();
        this.installResizeEvent();
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () { return setTimeout((/**
         * @return {?}
         */
        function () { return _this.install(); }), _this.delay); }));
    };
    /**
     * @return {?}
     */
    G2TagCloudComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this._attachChart();
    };
    /**
     * @return {?}
     */
    G2TagCloudComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.resize$.unsubscribe();
        if (this.chart) {
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () { return _this.chart.destroy(); }));
        }
    };
    G2TagCloudComponent.decorators = [
        { type: Component, args: [{
                    selector: 'g2-tag-cloud',
                    exportAs: 'g2TagCloud',
                    template: "",
                    host: {
                        '[style.height.px]': 'height',
                    },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    G2TagCloudComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgZone }
    ]; };
    G2TagCloudComponent.propDecorators = {
        delay: [{ type: Input }],
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
    ], G2TagCloudComponent.prototype, "height", void 0);
    return G2TagCloudComponent;
}());
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

/**
 * @fileoverview added by tsickle
 * Generated from: tag-cloud.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var COMPONENTS = [G2TagCloudComponent];
var G2TagCloudModule = /** @class */ (function () {
    function G2TagCloudModule() {
    }
    G2TagCloudModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, DelonUtilModule],
                    declarations: __spread(COMPONENTS),
                    exports: __spread(COMPONENTS),
                },] }
    ];
    return G2TagCloudModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: tag-cloud.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { G2TagCloudComponent, G2TagCloudModule };
//# sourceMappingURL=tag-cloud.js.map
