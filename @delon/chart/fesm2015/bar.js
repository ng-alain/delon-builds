import { __decorate, __metadata } from 'tslib';
import { fromEvent } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostBinding, Input, ViewChild, NgModule } from '@angular/core';
import { InputBoolean, InputNumber, DelonUtilModule } from '@delon/util';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const TITLE_HEIGHT = 41;
class G2BarComponent {
    constructor() {
        this.resize$ = null;
        this.inited = false;
        this.color = 'rgba(24, 144, 255, 0.85)';
        this.height = 0;
        this.autoLabel = true;
    }
    /**
     * @return {?}
     */
    install() {
        this.uninstall();
        /** @type {?} */
        const container = (/** @type {?} */ (this.node.nativeElement));
        container.innerHTML = '';
        if (!this.data || (this.data && this.data.length < 1))
            return;
        /** @type {?} */
        const chart = this.chart = new G2.Chart({
            container,
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
            .tooltip('x*y', (x, y) => ({
            name: x,
            value: y,
        }));
        chart.render();
    }
    /**
     * @return {?}
     */
    uninstall() {
        if (this.chart) {
            this.chart.destroy();
        }
        this.chart = null;
    }
    /**
     * @return {?}
     */
    updatelabel() {
        /** @type {?} */
        const canvasWidth = this.node.nativeElement.clientWidth;
        /** @type {?} */
        const minWidth = this.data.length * 30;
        this.chart.axis('x', canvasWidth > minWidth);
    }
    /**
     * @return {?}
     */
    installResizeEvent() {
        if (!this.autoLabel || this.resize$)
            return;
        this.resize$ = fromEvent(window, 'resize')
            .pipe(filter(() => this.chart), debounceTime(200))
            .subscribe(() => this.updatelabel());
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.installResizeEvent();
        this.install();
        this.inited = true;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.inited) {
            this.installResizeEvent();
            this.install();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.resize$)
            this.resize$.unsubscribe();
        this.uninstall();
    }
}
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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