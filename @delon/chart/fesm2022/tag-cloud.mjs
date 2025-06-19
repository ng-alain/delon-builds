import * as i0 from '@angular/core';
import { EventEmitter, numberAttribute, Output, Input, ViewEncapsulation, ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { fromEvent, filter, debounceTime } from 'rxjs';
import { G2BaseComponent } from '@delon/chart/core';
import { NzSkeletonComponent, NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { CommonModule } from '@angular/common';

class G2TagCloudComponent extends G2BaseComponent {
    // #region fields
    width = 0;
    height = 200;
    padding = 0;
    data = [];
    clickItem = new EventEmitter();
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
        if (this.height === 0) {
            this.height = this.el.nativeElement.clientHeight;
        }
        if (this.width === 0) {
            this.width = this.el.nativeElement.clientWidth;
        }
        const chart = (this._chart = new this.winG2.Chart({
            container: el.nativeElement,
            autoFit: false,
            padding,
            height: this.height,
            width: this.width,
            theme
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
            this.ngZone.run(() => this.clickItem.emit({ item: ev.data?.data, ev }));
        });
        this.ready.next(chart);
        this.changeData();
        chart.render();
    }
    changeData() {
        const { _chart, data } = this;
        if (!_chart || !Array.isArray(data) || data.length <= 0)
            return;
        const dv = new window.DataSet.View().source(data);
        const range = dv.range('value');
        const min = range[0];
        const max = range[1];
        dv.transform({
            type: 'tag-cloud',
            fields: ['name', 'value'],
            // imageMask,
            font: 'Verdana',
            size: [this.width, this.height], // 宽高设置最好根据 imageMask 做调整
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
        this.resize$ = fromEvent(window, 'resize')
            .pipe(filter(() => !!this._chart), debounceTime(200))
            .subscribe(() => this.changeData());
    }
    onInit() {
        this.installResizeEvent();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.4", ngImport: i0, type: G2TagCloudComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.0.4", type: G2TagCloudComponent, isStandalone: true, selector: "g2-tag-cloud", inputs: { width: ["width", "width", numberAttribute], height: ["height", "height", numberAttribute], padding: "padding", data: "data" }, outputs: { clickItem: "clickItem" }, exportAs: ["g2TagCloud"], usesInheritance: true, ngImport: i0, template: `@if (!loaded) {
    <nz-skeleton />
  }`, isInline: true, dependencies: [{ kind: "component", type: NzSkeletonComponent, selector: "nz-skeleton", inputs: ["nzActive", "nzLoading", "nzRound", "nzTitle", "nzAvatar", "nzParagraph"], exportAs: ["nzSkeleton"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.4", ngImport: i0, type: G2TagCloudComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'g2-tag-cloud',
                    exportAs: 'g2TagCloud',
                    template: `@if (!loaded) {
    <nz-skeleton />
  }`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    imports: [NzSkeletonComponent]
                }]
        }], propDecorators: { width: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], height: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], padding: [{
                type: Input
            }], data: [{
                type: Input
            }], clickItem: [{
                type: Output
            }] } });

const COMPONENTS = [G2TagCloudComponent];
class G2TagCloudModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.4", ngImport: i0, type: G2TagCloudModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.4", ngImport: i0, type: G2TagCloudModule, imports: [CommonModule, NzSkeletonModule, G2TagCloudComponent], exports: [G2TagCloudComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "20.0.4", ngImport: i0, type: G2TagCloudModule, imports: [CommonModule, NzSkeletonModule, COMPONENTS] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.4", ngImport: i0, type: G2TagCloudModule, decorators: [{
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
