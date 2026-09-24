import * as i0 from '@angular/core';
import { input, numberAttribute, output, ViewEncapsulation, ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { fromEvent, filter, debounceTime } from 'rxjs';
import { G2BaseComponent } from '@delon/chart/core';
import { NzSkeletonComponent, NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { CommonModule } from '@angular/common';

class G2TagCloudComponent extends G2BaseComponent {
    _width = 0;
    _height = 0;
    // #region fields
    width = input(0, { ...(ngDevMode ? { debugName: "width" } : /* istanbul ignore next */ {}), transform: numberAttribute });
    height = input(200, { ...(ngDevMode ? { debugName: "height" } : /* istanbul ignore next */ {}), transform: numberAttribute });
    padding = input(0, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "padding" }] : /* istanbul ignore next */ []));
    data = input([], /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "data" }] : /* istanbul ignore next */ []));
    clickItem = output();
    // #endregion
    initTagCloud() {
        const winG2 = this.winG2;
        winG2.registerShape('point', 'cloud', {
            draw(cfg, container) {
                const data = cfg.data;
                const textShape = container.addShape({
                    type: 'text',
                    name: 'tag-cloud-text',
                    attrs: {
                        ...cfg.style,
                        fontSize: data.size,
                        text: data.text,
                        textAlign: 'center',
                        fontFamily: data.font,
                        fill: cfg.color,
                        textBaseline: 'Alphabetic',
                        x: cfg.x,
                        y: cfg.y
                    }
                });
                if (data.rotate) {
                    winG2.Util.rotate(textShape, (data.rotate * Math.PI) / 180);
                }
                return textShape;
            }
        });
    }
    install() {
        this.initTagCloud();
        const { el, padding, theme } = this;
        const node = this.el.nativeElement;
        this._width = this.width() === 0 ? node.clientWidth : this.width();
        this._height = this.height() === 0 ? node.clientHeight : this.height();
        const chart = (this._chart = new this.winG2.Chart({
            container: el.nativeElement,
            autoFit: false,
            padding: padding(),
            height: this._height,
            width: this._width,
            theme: theme()
        }));
        chart.scale({
            x: { nice: false },
            y: { nice: false }
        });
        chart.legend(false);
        chart.axis(false);
        chart.tooltip({
            showTitle: false,
            showMarkers: false
        });
        chart.coordinate().reflect();
        chart
            .point()
            .position('x*y')
            .color('text')
            .shape('cloud')
            .state({
            active: {
                style: {
                    fillOpacity: 0.4
                }
            }
        });
        chart.interaction('element-active');
        chart.on('tag-cloud-text:click', (ev) => {
            this.clickItem.emit({ item: ev.data?.data, ev });
        });
        this.ready.emit(chart);
        this.changeData();
        chart.render();
    }
    changeData() {
        const { _chart, data } = this;
        const list = data();
        if (!_chart || !Array.isArray(list) || list.length <= 0)
            return;
        const dv = new window.DataSet.View().source(list);
        const range = dv.range('value');
        const min = range[0];
        const max = range[1];
        dv.transform({
            type: 'tag-cloud',
            fields: ['name', 'value'],
            // imageMask,
            font: 'Verdana',
            size: [this._width, this._height], // 宽高设置最好根据 imageMask 做调整
            padding: 0,
            timeInterval: 5000, // max execute time
            rotate() {
                let random = ~~(Math.random() * 4) % 4;
                if (random === 2) {
                    random = 0;
                }
                return random * 90; // 0, 90, 270
            },
            fontSize(d) {
                return ((d.value - min) / (max - min)) * (32 - 8) + 8;
            }
        });
        _chart.changeData(dv.rows);
    }
    installResizeEvent() {
        fromEvent(window, 'resize')
            .pipe(takeUntilDestroyed(this.destroyRef), filter(() => !!this._chart), debounceTime(200))
            .subscribe(() => this.changeData());
    }
    onInit() {
        this.installResizeEvent();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: G2TagCloudComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "22.1.7", type: G2TagCloudComponent, isStandalone: true, selector: "g2-tag-cloud", inputs: { width: { classPropertyName: "width", publicName: "width", isSignal: true, isRequired: false, transformFunction: null }, height: { classPropertyName: "height", publicName: "height", isSignal: true, isRequired: false, transformFunction: null }, padding: { classPropertyName: "padding", publicName: "padding", isSignal: true, isRequired: false, transformFunction: null }, data: { classPropertyName: "data", publicName: "data", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { clickItem: "clickItem" }, exportAs: ["g2TagCloud"], usesInheritance: true, ngImport: i0, template: `@if (!loaded()) {
    <nz-skeleton />
  }`, isInline: true, dependencies: [{ kind: "component", type: NzSkeletonComponent, selector: "nz-skeleton", inputs: ["nzActive", "nzLoading", "nzRound", "nzTitle", "nzAvatar", "nzParagraph"], exportAs: ["nzSkeleton"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: G2TagCloudComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'g2-tag-cloud',
                    exportAs: 'g2TagCloud',
                    template: `@if (!loaded()) {
    <nz-skeleton />
  }`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    imports: [NzSkeletonComponent]
                }]
        }], propDecorators: { width: [{ type: i0.Input, args: [{ isSignal: true, alias: "width", required: false }] }], height: [{ type: i0.Input, args: [{ isSignal: true, alias: "height", required: false }] }], padding: [{ type: i0.Input, args: [{ isSignal: true, alias: "padding", required: false }] }], data: [{ type: i0.Input, args: [{ isSignal: true, alias: "data", required: false }] }], clickItem: [{ type: i0.Output, args: ["clickItem"] }] } });

const COMPONENTS = [G2TagCloudComponent];
class G2TagCloudModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: G2TagCloudModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "22.1.7", ngImport: i0, type: G2TagCloudModule, imports: [CommonModule, NzSkeletonModule, G2TagCloudComponent], exports: [G2TagCloudComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: G2TagCloudModule, imports: [CommonModule, NzSkeletonModule, COMPONENTS] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "22.1.7", ngImport: i0, type: G2TagCloudModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, NzSkeletonModule, ...COMPONENTS],
                    exports: COMPONENTS
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { G2TagCloudComponent, G2TagCloudModule };
//# sourceMappingURL=tag-cloud.mjs.map
