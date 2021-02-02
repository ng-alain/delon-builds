import { __decorate, __metadata } from 'tslib';
import * as i0 from '@angular/core';
import { ɵɵngDeclareComponent, ChangeDetectionStrategy, ViewEncapsulation, ɵɵgetInheritedFactory, ɵsetClassMetadata, Component, Input, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { G2BaseComponent } from '@delon/chart/core';
import { InputNumber } from '@delon/util/decorator';
import { NgIf, CommonModule } from '@angular/common';
import { NzSkeletonComponent, NzSkeletonModule } from 'ng-zorro-antd/skeleton';

class G2GaugeComponent extends G2BaseComponent {
    constructor() {
        super(...arguments);
        this.color = '#2f9cff';
        this.padding = [10, 10, 30, 10];
    }
    // #endregion
    install() {
        // 自定义Shape 部分
        window.G2.registerShape('point', 'pointer', {
            // tslint:disable-next-line: typedef
            draw(cfg, container) {
                const group = container.addGroup({});
                // 获取极坐标系下画布中心点
                const center = this.parsePoint({ x: 0, y: 0 });
                // 绘制指针
                group.addShape('line', {
                    attrs: {
                        x1: center.x,
                        y1: center.y,
                        x2: cfg.x,
                        y2: cfg.y,
                        stroke: cfg.color,
                        lineWidth: 2.5,
                        lineCap: 'round',
                    },
                });
                group.addShape('circle', {
                    attrs: {
                        x: center.x,
                        y: center.y,
                        r: 5.75,
                        stroke: cfg.color,
                        lineWidth: 2,
                        fill: '#fff',
                    },
                });
                return group;
            },
        });
        const { el, height, padding, format, theme } = this;
        const chart = (this._chart = new window.G2.Chart({
            container: el.nativeElement,
            autoFit: true,
            height,
            padding,
            theme,
        }));
        chart.legend(false);
        chart.animate(false);
        chart.tooltip(false);
        chart.coordinate('polar', {
            startAngle: (-9 / 8) * Math.PI,
            endAngle: (1 / 8) * Math.PI,
            radius: 0.75,
        });
        chart.scale('value', {
            min: 0,
            max: 100,
            nice: true,
            tickCount: 6,
        });
        chart.axis('1', false);
        chart.axis('value', {
            line: null,
            label: {
                offset: -14,
                formatter: format,
            },
            tickLine: null,
            grid: null,
        });
        chart.point().position('value*1').shape('pointer');
        this.attachChart();
    }
    attachChart() {
        const { _chart, percent, color, bgColor, title } = this;
        if (!_chart)
            return;
        const data = [{ name: title, value: percent }];
        const val = data[0].value;
        _chart.annotation().clear(true);
        _chart.geometries[0].color(color);
        // 绘制仪表盘背景
        _chart.annotation().arc({
            top: false,
            start: [0, 0.95],
            end: [100, 0.95],
            style: {
                stroke: bgColor,
                lineWidth: 12,
                lineDash: null,
            },
        });
        _chart.annotation().arc({
            start: [0, 0.95],
            end: [data[0].value, 0.95],
            style: {
                stroke: color,
                lineWidth: 12,
                lineDash: null,
            },
        });
        _chart.annotation().text({
            position: ['50%', '85%'],
            content: title,
            style: {
                fontSize: 12,
                fill: 'rgba(0, 0, 0, 0.43)',
                textAlign: 'center',
            },
        });
        _chart.annotation().text({
            position: ['50%', '90%'],
            content: `${val} %`,
            style: {
                fontSize: 20,
                fill: 'rgba(0, 0, 0, 0.85)',
                textAlign: 'center',
            },
            offsetY: 15,
        });
        _chart.changeData(data);
        _chart.render();
    }
}
/** @nocollapse */ G2GaugeComponent.ɵfac = function G2GaugeComponent_Factory(t) { return ɵG2GaugeComponent_BaseFactory(t || G2GaugeComponent); };
/** @nocollapse */ G2GaugeComponent.ɵcmp = ɵɵngDeclareComponent({ version: "11.1.1", type: G2GaugeComponent, selector: "g2-gauge", inputs: { title: "title", height: "height", color: "color", bgColor: "bgColor", format: "format", percent: "percent", padding: "padding" }, host: { properties: { "class.g2-gauge": "true" } }, exportAs: ["g2Gauge"], usesInheritance: true, ngImport: i0, template: `<nz-skeleton *ngIf="!loaded"></nz-skeleton>`, isInline: true, directives: [{ type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: NzSkeletonComponent, selector: "nz-skeleton", inputs: ["nzActive", "nzLoading", "nzRound", "nzTitle", "nzAvatar", "nzParagraph"], exportAs: ["nzSkeleton"] }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], G2GaugeComponent.prototype, "height", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], G2GaugeComponent.prototype, "percent", void 0);
const ɵG2GaugeComponent_BaseFactory = /*@__PURE__*/ ɵɵgetInheritedFactory(G2GaugeComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(G2GaugeComponent, [{
        type: Component,
        args: [{
                selector: 'g2-gauge',
                exportAs: 'g2Gauge',
                template: `<nz-skeleton *ngIf="!loaded"></nz-skeleton>`,
                host: {
                    '[class.g2-gauge]': 'true',
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], null, { title: [{
            type: Input
        }], height: [{
            type: Input
        }], color: [{
            type: Input
        }], bgColor: [{
            type: Input
        }], format: [{
            type: Input
        }], percent: [{
            type: Input
        }], padding: [{
            type: Input
        }] }); })();

const COMPONENTS = [G2GaugeComponent];
class G2GaugeModule {
}
/** @nocollapse */ G2GaugeModule.ɵmod = ɵɵdefineNgModule({ type: G2GaugeModule });
/** @nocollapse */ G2GaugeModule.ɵinj = ɵɵdefineInjector({ factory: function G2GaugeModule_Factory(t) { return new (t || G2GaugeModule)(); }, imports: [[CommonModule, NzSkeletonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(G2GaugeModule, { declarations: [G2GaugeComponent], imports: [CommonModule, NzSkeletonModule], exports: [G2GaugeComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(G2GaugeModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, NzSkeletonModule],
                declarations: COMPONENTS,
                exports: COMPONENTS,
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { G2GaugeComponent, G2GaugeModule };
//# sourceMappingURL=gauge.js.map
