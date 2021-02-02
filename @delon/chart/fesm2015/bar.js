import { __decorate, __metadata } from 'tslib';
import * as i0 from '@angular/core';
import { EventEmitter, ɵɵngDeclareComponent, ChangeDetectionStrategy, ViewEncapsulation, ɵɵgetInheritedFactory, ɵsetClassMetadata, Component, Input, Output, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { G2BaseComponent } from '@delon/chart/core';
import { InputNumber, InputBoolean } from '@delon/util/decorator';
import { fromEvent } from 'rxjs';
import { takeUntil, filter, debounceTime } from 'rxjs/operators';
import { NzStringTemplateOutletDirective, NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NgIf, CommonModule } from '@angular/common';
import { NzSkeletonComponent, NzSkeletonModule } from 'ng-zorro-antd/skeleton';

const TITLE_HEIGHT = 41;
class G2BarComponent extends G2BaseComponent {
    constructor() {
        super(...arguments);
        this.color = 'rgba(24, 144, 255, 0.85)';
        this.height = 0;
        this.padding = 'auto';
        this.data = [];
        this.autoLabel = true;
        this.interaction = 'none';
        this.clickItem = new EventEmitter();
    }
    // #endregion
    getHeight() {
        return this.title ? this.height - TITLE_HEIGHT : this.height;
    }
    install() {
        const { node, padding, interaction, theme } = this;
        const container = node.nativeElement;
        const chart = (this._chart = new window.G2.Chart({
            container,
            autoFit: true,
            height: this.getHeight(),
            padding,
            theme,
        }));
        this.updatelabel();
        chart.axis('y', {
            title: null,
            line: null,
            tickLine: null,
        });
        chart.scale({
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
        if (interaction !== 'none') {
            chart.interaction(interaction);
        }
        chart.legend(false);
        chart
            .interval()
            .position('x*y')
            .color('x*y', (x, y) => {
            const colorItem = this.data.find(w => w.x === x && w.y === y);
            return colorItem && colorItem.color ? colorItem.color : this.color;
        })
            .tooltip('x*y', (x, y) => ({ name: x, value: y }));
        chart.on(`interval:click`, (ev) => {
            this.ngZone.run(() => { var _a; return this.clickItem.emit({ item: (_a = ev.data) === null || _a === void 0 ? void 0 : _a.data, ev }); });
        });
        this.attachChart();
    }
    attachChart() {
        const { _chart, padding, data } = this;
        if (!_chart || !data || data.length <= 0)
            return;
        this.installResizeEvent();
        const height = this.getHeight();
        if (_chart.height !== height) {
            _chart.height = height;
        }
        _chart.padding = padding;
        _chart.data(data);
        _chart.render();
    }
    updatelabel() {
        const { node, data, _chart } = this;
        const canvasWidth = node.nativeElement.clientWidth;
        const minWidth = data.length * 30;
        _chart.axis('x', canvasWidth > minWidth).render();
    }
    installResizeEvent() {
        if (!this.autoLabel || this.resize$)
            return;
        this.resize$ = fromEvent(window, 'resize')
            .pipe(takeUntil(this.destroy$), filter(() => !!this._chart), debounceTime(200))
            .subscribe(() => this.ngZone.runOutsideAngular(() => this.updatelabel()));
    }
}
/** @nocollapse */ G2BarComponent.ɵfac = function G2BarComponent_Factory(t) { return ɵG2BarComponent_BaseFactory(t || G2BarComponent); };
/** @nocollapse */ G2BarComponent.ɵcmp = ɵɵngDeclareComponent({ version: "11.1.1", type: G2BarComponent, selector: "g2-bar", inputs: { title: "title", color: "color", height: "height", padding: "padding", data: "data", autoLabel: "autoLabel", interaction: "interaction" }, outputs: { clickItem: "clickItem" }, host: { properties: { "style.height.px": "height" } }, exportAs: ["g2Bar"], usesInheritance: true, ngImport: i0, template: `
    <ng-container *nzStringTemplateOutlet="title">
      <h4 style="margin-bottom: 20px;">{{ title }}</h4>
    </ng-container>
    <nz-skeleton *ngIf="!loaded"></nz-skeleton>
    <div #container></div>
  `, isInline: true, directives: [{ type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: NzSkeletonComponent, selector: "nz-skeleton", inputs: ["nzActive", "nzLoading", "nzRound", "nzTitle", "nzAvatar", "nzParagraph"], exportAs: ["nzSkeleton"] }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2BarComponent.prototype, "height", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], G2BarComponent.prototype, "autoLabel", void 0);
const ɵG2BarComponent_BaseFactory = /*@__PURE__*/ ɵɵgetInheritedFactory(G2BarComponent);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(G2BarComponent, [{
        type: Component,
        args: [{
                selector: 'g2-bar',
                exportAs: 'g2Bar',
                template: `
    <ng-container *nzStringTemplateOutlet="title">
      <h4 style="margin-bottom: 20px;">{{ title }}</h4>
    </ng-container>
    <nz-skeleton *ngIf="!loaded"></nz-skeleton>
    <div #container></div>
  `,
                host: {
                    '[style.height.px]': 'height',
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], null, { title: [{
            type: Input
        }], color: [{
            type: Input
        }], height: [{
            type: Input
        }], padding: [{
            type: Input
        }], data: [{
            type: Input
        }], autoLabel: [{
            type: Input
        }], interaction: [{
            type: Input
        }], clickItem: [{
            type: Output
        }] }); })();

const COMPONENTS = [G2BarComponent];
class G2BarModule {
}
/** @nocollapse */ G2BarModule.ɵmod = ɵɵdefineNgModule({ type: G2BarModule });
/** @nocollapse */ G2BarModule.ɵinj = ɵɵdefineInjector({ factory: function G2BarModule_Factory(t) { return new (t || G2BarModule)(); }, imports: [[CommonModule, NzOutletModule, NzSkeletonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(G2BarModule, { declarations: [G2BarComponent], imports: [CommonModule, NzOutletModule, NzSkeletonModule], exports: [G2BarComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(G2BarModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, NzOutletModule, NzSkeletonModule],
                declarations: COMPONENTS,
                exports: COMPONENTS,
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { G2BarComponent, G2BarModule };
//# sourceMappingURL=bar.js.map
