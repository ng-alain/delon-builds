import * as i0 from '@angular/core';
import { EventEmitter, booleanAttribute, numberAttribute, Output, Input, ViewEncapsulation, ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { fromEvent, takeUntil, filter, debounceTime } from 'rxjs';
import { G2BaseComponent } from '@delon/chart/core';
import { NzStringTemplateOutletDirective, NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzSkeletonComponent, NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { CommonModule } from '@angular/common';

const TITLE_HEIGHT = 41;
class G2BarComponent extends G2BaseComponent {
    // #region fields
    title;
    color = 'rgba(24, 144, 255, 0.85)';
    height = 0;
    padding = 'auto';
    data = [];
    autoLabel = true;
    interaction = 'none';
    clickItem = new EventEmitter();
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
            this.ngZone.run(() => this.clickItem.emit({ item: ev.data?.data, ev }));
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.0", ngImport: i0, type: G2BarComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.3.0", type: G2BarComponent, isStandalone: true, selector: "g2-bar", inputs: { title: "title", color: "color", height: ["height", "height", numberAttribute], padding: "padding", data: "data", autoLabel: ["autoLabel", "autoLabel", booleanAttribute], interaction: "interaction" }, outputs: { clickItem: "clickItem" }, host: { properties: { "style.height.px": "height" } }, exportAs: ["g2Bar"], usesInheritance: true, ngImport: i0, template: `
    <ng-container *nzStringTemplateOutlet="title">
      <h4 style="margin-bottom: 20px;">{{ title }}</h4>
    </ng-container>
    @if (!loaded) {
      <nz-skeleton />
    }
    <div #container></div>
  `, isInline: true, dependencies: [{ kind: "directive", type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { kind: "component", type: NzSkeletonComponent, selector: "nz-skeleton", inputs: ["nzActive", "nzLoading", "nzRound", "nzTitle", "nzAvatar", "nzParagraph"], exportAs: ["nzSkeleton"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.0", ngImport: i0, type: G2BarComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'g2-bar',
                    exportAs: 'g2Bar',
                    template: `
    <ng-container *nzStringTemplateOutlet="title">
      <h4 style="margin-bottom: 20px;">{{ title }}</h4>
    </ng-container>
    @if (!loaded) {
      <nz-skeleton />
    }
    <div #container></div>
  `,
                    host: {
                        '[style.height.px]': 'height'
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    imports: [NzStringTemplateOutletDirective, NzSkeletonComponent]
                }]
        }], propDecorators: { title: [{
                type: Input
            }], color: [{
                type: Input
            }], height: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], padding: [{
                type: Input
            }], data: [{
                type: Input
            }], autoLabel: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], interaction: [{
                type: Input
            }], clickItem: [{
                type: Output
            }] } });

const COMPONENTS = [G2BarComponent];
class G2BarModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.0", ngImport: i0, type: G2BarModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "20.3.0", ngImport: i0, type: G2BarModule, imports: [CommonModule, NzOutletModule, NzSkeletonModule, G2BarComponent], exports: [G2BarComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "20.3.0", ngImport: i0, type: G2BarModule, imports: [CommonModule, NzOutletModule, NzSkeletonModule, COMPONENTS] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.0", ngImport: i0, type: G2BarModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, NzOutletModule, NzSkeletonModule, ...COMPONENTS],
                    exports: COMPONENTS
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { G2BarComponent, G2BarModule };
//# sourceMappingURL=bar.mjs.map
