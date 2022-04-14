import { __decorate } from 'tslib';
import * as i0 from '@angular/core';
import { EventEmitter, Component, ChangeDetectionStrategy, ViewEncapsulation, Input, Output, NgModule } from '@angular/core';
import { fromEvent } from 'rxjs';
import { takeUntil, filter, debounceTime } from 'rxjs/operators';
import { G2BaseComponent } from '@delon/chart/core';
import { InputNumber, InputBoolean } from '@delon/util/decorator';
import * as i1 from 'ng-zorro-antd/skeleton';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import * as i2 from 'ng-zorro-antd/core/outlet';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import * as i3 from '@angular/common';
import { CommonModule } from '@angular/common';

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
        const chart = (this._chart = new this.winG2.Chart({
            container,
            autoFit: true,
            height: this.getHeight(),
            padding,
            theme
        }));
        this.updatelabel();
        chart.axis('y', {
            title: null,
            line: null,
            tickLine: null
        });
        chart.scale({
            x: {
                type: 'cat'
            },
            y: {
                min: 0
            }
        });
        chart.tooltip({
            showTitle: false
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
        this.ready.next(chart);
        this.changeData();
        chart.render();
        this.installResizeEvent();
    }
    changeData() {
        const { _chart, data } = this;
        if (!_chart || !Array.isArray(data) || data.length <= 0)
            return;
        _chart.changeData(data);
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
G2BarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.3", ngImport: i0, type: G2BarComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
G2BarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.3", type: G2BarComponent, selector: "g2-bar", inputs: { title: "title", color: "color", height: "height", padding: "padding", data: "data", autoLabel: "autoLabel", interaction: "interaction" }, outputs: { clickItem: "clickItem" }, host: { properties: { "style.height.px": "height" } }, exportAs: ["g2Bar"], usesInheritance: true, ngImport: i0, template: `
    <ng-container *nzStringTemplateOutlet="title">
      <h4 style="margin-bottom: 20px;">{{ title }}</h4>
    </ng-container>
    <nz-skeleton *ngIf="!loaded"></nz-skeleton>
    <div #container></div>
  `, isInline: true, components: [{ type: i1.NzSkeletonComponent, selector: "nz-skeleton", inputs: ["nzActive", "nzLoading", "nzRound", "nzTitle", "nzAvatar", "nzParagraph"], exportAs: ["nzSkeleton"] }], directives: [{ type: i2.NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    InputNumber()
], G2BarComponent.prototype, "height", void 0);
__decorate([
    InputBoolean()
], G2BarComponent.prototype, "autoLabel", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.3", ngImport: i0, type: G2BarComponent, decorators: [{
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
                        '[style.height.px]': 'height'
                    },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], propDecorators: { title: [{
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
            }] } });

const COMPONENTS = [G2BarComponent];
class G2BarModule {
}
G2BarModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.3", ngImport: i0, type: G2BarModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
G2BarModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.3", ngImport: i0, type: G2BarModule, declarations: [G2BarComponent], imports: [CommonModule, NzOutletModule, NzSkeletonModule], exports: [G2BarComponent] });
G2BarModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.3", ngImport: i0, type: G2BarModule, imports: [[CommonModule, NzOutletModule, NzSkeletonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.3", ngImport: i0, type: G2BarModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, NzOutletModule, NzSkeletonModule],
                    declarations: COMPONENTS,
                    exports: COMPONENTS
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { G2BarComponent, G2BarModule };
//# sourceMappingURL=bar.mjs.map
