import { __decorate, __metadata } from 'tslib';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, Renderer2, ViewChild, NgModule } from '@angular/core';
import { updateHostClass, InputBoolean, InputNumber, DelonUtilModule } from '@delon/util';
import { NgZorroAntdModule } from 'ng-zorro-antd';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class G2PieComponent {
    // #endregion
    /**
     * @param {?} el
     * @param {?} rend
     * @param {?} cdr
     */
    constructor(el, rend, cdr) {
        this.el = el;
        this.rend = rend;
        this.cdr = cdr;
        this.legendData = [];
        // #region fields
        this.delay = 0;
        this.animate = true;
        this.color = 'rgba(24, 144, 255, 0.85)';
        this.height = 0;
        this.hasLegend = false;
        this.inner = 0.75;
        this.padding = [12, 0, 12, 0];
        this.tooltip = true;
        this.lineWidth = 0;
        this.select = true;
        this.data = [];
    }
    /**
     * @return {?}
     */
    setCls() {
        const { el, rend, hasLegend, isPercent } = this;
        /** @type {?} */
        const ne = (/** @type {?} */ (el.nativeElement));
        console.log('ne.clientWidth', ne.clientWidth);
        updateHostClass(ne, rend, {
            'g2-pie': true,
            'g2-pie__legend-has': hasLegend,
            'g2-pie__legend-block': ne.clientWidth <= 380,
            'g2-pie__mini': isPercent,
        }, true);
    }
    /**
     * @return {?}
     */
    fixData() {
        const { percent, color } = this;
        this.isPercent = percent != null;
        if (this.isPercent) {
            this.select = false;
            this.tooltip = false;
            this.percentColor = value => value === '占比' ? color || 'rgba(24, 144, 255, 0.85)' : '#F0F2F5';
            this.data = [
                {
                    x: '占比',
                    y: percent,
                },
                {
                    x: '反比',
                    y: 100 - percent,
                },
            ];
        }
    }
    /**
     * @return {?}
     */
    install() {
        this.setCls();
        const { node, height, padding, animate, tooltip, inner, hasLegend } = this;
        /** @type {?} */
        const chart = this.chart = new G2.Chart({
            container: node.nativeElement,
            forceFit: true,
            height,
            padding,
            animate,
        });
        if (!tooltip) {
            chart.tooltip(false);
        }
        else {
            chart.tooltip({
                showTitle: false,
                itemTpl: '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value} %</li>',
            });
        }
        chart.axis(false);
        chart.legend(false);
        chart.coord('theta', { innerRadius: inner });
        chart.filter('x', (val, item) => item.checked !== false);
        chart
            .intervalStack()
            .position('y')
            .tooltip('x*percent', (name, p) => {
            return {
                name,
                value: hasLegend ? p : (p * 100).toFixed(2),
            };
        })
            .select(this.select);
        chart.render();
        this.attachChart();
    }
    /**
     * @return {?}
     */
    installResizeEvent() {
        if (this.resize$ || !this.hasLegend)
            return;
        this.resize$ = fromEvent(window, 'resize')
            .pipe(debounceTime(200))
            .subscribe(() => this.setCls());
    }
    /**
     * @param {?} i
     * @return {?}
     */
    _click(i) {
        const { legendData, chart } = this;
        legendData[i].checked = !legendData[i].checked;
        chart.repaint();
    }
    /**
     * @return {?}
     */
    attachChart() {
        const { chart, height, padding, animate, data, lineWidth, isPercent, percentColor, colors } = this;
        if (!chart)
            return;
        chart.set('height', height);
        chart.set('padding', padding);
        chart.set('animate', animate);
        /** @type {?} */
        const dv = new DataSet.DataView();
        dv.source(data).transform({
            type: 'percent',
            field: 'y',
            dimension: 'x',
            as: 'percent',
        });
        chart.source(dv, {
            x: {
                type: 'cat',
                range: [0, 1],
            },
            y: {
                min: 0,
            },
        });
        chart.get('geoms')[0]
            .style({ lineWidth, stroke: '#fff' })
            .color('x', isPercent ? percentColor : colors);
        chart.repaint();
        this.genLegend();
    }
    /**
     * @return {?}
     */
    genLegend() {
        const { hasLegend, isPercent, cdr, chart } = this;
        if (!hasLegend || isPercent)
            return;
        this.legendData = chart.get('geoms')[0].get('dataArray').map((item) => {
            /** @type {?} */
            const origin = item[0]._origin;
            origin.color = item[0].color;
            origin.checked = true;
            origin.percent = (origin.percent * 100).toFixed(2);
            return origin;
        });
        cdr.detectChanges();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        setTimeout(() => this.install(), this.delay);
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.fixData();
        this.setCls();
        this.attachChart();
        this.installResizeEvent();
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
G2PieComponent.decorators = [
    { type: Component, args: [{
                selector: 'g2-pie',
                template: "<div class=\"g2-pie__chart\">\n  <div #container></div>\n  <div *ngIf=\"subTitle || total\" class=\"g2-pie__total\">\n    <h4 *ngIf=\"subTitle\" class=\"g2-pie__total-title\">\n      <ng-container *stringTemplateOutlet=\"subTitle\">{{subTitle}}</ng-container>\n    </h4>\n    <div *ngIf=\"total\" class=\"g2-pie__total-stat\">\n      <ng-container *stringTemplateOutlet=\"total\">{{total}}</ng-container>\n    </div>\n  </div>\n</div>\n<ul *ngIf=\"hasLegend && legendData?.length\" class=\"g2-pie__legend\">\n  <li *ngFor=\"let item of legendData; let index = index\" (click)=\"_click(index)\" class=\"g2-pie__legend-item\">\n    <span class=\"g2-pie__legend-dot\" [ngStyle]=\"{'background-color': !item.checked ? '#aaa' : item.color}\"></span>\n    <span class=\"g2-pie__legend-title\">{{item.x}}</span>\n    <nz-divider nzType=\"vertical\"></nz-divider>\n    <span class=\"g2-pie__legend-percent\">{{item.percent}}%</span>\n    <span class=\"g2-pie__legend-value\" [innerHTML]=\"valueFormat ? valueFormat(item.y) : item.y\"></span>\n  </li>\n</ul>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
G2PieComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ChangeDetectorRef }
];
G2PieComponent.propDecorators = {
    node: [{ type: ViewChild, args: ['container',] }],
    delay: [{ type: Input }],
    animate: [{ type: Input }],
    color: [{ type: Input }],
    subTitle: [{ type: Input }],
    total: [{ type: Input }],
    height: [{ type: Input }],
    hasLegend: [{ type: Input }],
    inner: [{ type: Input }],
    padding: [{ type: Input }],
    percent: [{ type: Input }],
    tooltip: [{ type: Input }],
    lineWidth: [{ type: Input }],
    select: [{ type: Input }],
    valueFormat: [{ type: Input }],
    data: [{ type: Input }],
    colors: [{ type: Input }]
};
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2PieComponent.prototype, "delay", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], G2PieComponent.prototype, "animate", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2PieComponent.prototype, "height", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], G2PieComponent.prototype, "hasLegend", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], G2PieComponent.prototype, "percent", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], G2PieComponent.prototype, "tooltip", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2PieComponent.prototype, "lineWidth", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], G2PieComponent.prototype, "select", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [G2PieComponent];
class G2PieModule {
}
G2PieModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, DelonUtilModule, NgZorroAntdModule],
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

export { G2PieComponent, G2PieModule };

//# sourceMappingURL=pie.js.map