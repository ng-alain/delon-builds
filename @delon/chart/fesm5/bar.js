import { fromEvent } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';
import { __decorate, __metadata, __spread } from 'tslib';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostBinding, Input, ViewChild, NgModule } from '@angular/core';
import { InputBoolean, InputNumber, DelonUtilModule } from '@delon/util';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var TITLE_HEIGHT = 41;
var G2BarComponent = /** @class */ (function () {
    function G2BarComponent() {
        this.resize$ = null;
        this.inited = false;
        this.color = 'rgba(24, 144, 255, 0.85)';
        this.height = 0;
        this.autoLabel = true;
    }
    /**
     * @return {?}
     */
    G2BarComponent.prototype.install = /**
     * @return {?}
     */
    function () {
        this.uninstall();
        /** @type {?} */
        var container = (/** @type {?} */ (this.node.nativeElement));
        container.innerHTML = '';
        if (!this.data || (this.data && this.data.length < 1))
            return;
        /** @type {?} */
        var chart = this.chart = new G2.Chart({
            container: container,
            forceFit: true,
            height: this.title ? this.height - TITLE_HEIGHT : this.height,
            legend: null,
            padding: this.padding || 'auto',
        });
        this.updatelabel();
        chart.axis('y', {
            title: false,
            line: false,
            tickLine: false,
        });
        chart.source(this.data, {
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
            .color(this.color)
            .tooltip('x*y', function (x, y) { return ({
            name: x,
            value: y,
        }); });
        chart.render();
    };
    /**
     * @return {?}
     */
    G2BarComponent.prototype.uninstall = /**
     * @return {?}
     */
    function () {
        if (this.chart) {
            this.chart.destroy();
        }
        this.chart = null;
    };
    /**
     * @return {?}
     */
    G2BarComponent.prototype.updatelabel = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var canvasWidth = this.node.nativeElement.clientWidth;
        /** @type {?} */
        var minWidth = this.data.length * 30;
        this.chart.axis('x', canvasWidth > minWidth);
    };
    /**
     * @return {?}
     */
    G2BarComponent.prototype.installResizeEvent = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.autoLabel || this.resize$)
            return;
        this.resize$ = fromEvent(window, 'resize')
            .pipe(filter(function () { return _this.chart; }), debounceTime(200))
            .subscribe(function () { return _this.updatelabel(); });
    };
    /**
     * @return {?}
     */
    G2BarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.installResizeEvent();
        this.install();
        this.inited = true;
    };
    /**
     * @return {?}
     */
    G2BarComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this.inited) {
            this.installResizeEvent();
            this.install();
        }
    };
    /**
     * @return {?}
     */
    G2BarComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.resize$)
            this.resize$.unsubscribe();
        this.uninstall();
    };
    G2BarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'g2-bar',
                    template: "<ng-container *stringTemplateOutlet=\"title\">\n  <h4 style=\"margin-bottom:20px\">{{title}}</h4>\n</ng-container>\n<div #container></div>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    G2BarComponent.propDecorators = {
        title: [{ type: Input }],
        color: [{ type: Input }],
        height: [{ type: HostBinding, args: ['style.height.px',] }, { type: Input }],
        padding: [{ type: Input }],
        data: [{ type: Input }],
        autoLabel: [{ type: Input }],
        node: [{ type: ViewChild, args: ['container',] }]
    };
    __decorate([
        InputNumber(),
        __metadata("design:type", Object)
    ], G2BarComponent.prototype, "height", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], G2BarComponent.prototype, "autoLabel", void 0);
    return G2BarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var COMPONENTS = [G2BarComponent];
var G2BarModule = /** @class */ (function () {
    function G2BarModule() {
    }
    G2BarModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, DelonUtilModule],
                    declarations: __spread(COMPONENTS),
                    exports: __spread(COMPONENTS),
                },] }
    ];
    return G2BarModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { G2BarComponent, G2BarModule };

//# sourceMappingURL=bar.js.map