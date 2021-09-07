import * as i0 from '@angular/core';
import { Injectable, EventEmitter, Component, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef, NgZone, ViewChild, Input, Output, NgModule } from '@angular/core';
import { Subject, fromEvent } from 'rxjs';
import * as i1 from '@delon/util/config';
import { AlainConfigService } from '@delon/util/config';
import * as i2 from '@delon/util/other';
import { LazyService } from '@delon/util/other';
import { __decorate } from 'tslib';
import { Platform } from '@angular/cdk/platform';
import { takeUntil, filter, debounceTime } from 'rxjs/operators';
import { ZoneOutside } from '@delon/util/decorator';
import { CommonModule } from '@angular/common';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

class ChartEChartsService {
    constructor(cogSrv, lazySrv) {
        this.cogSrv = cogSrv;
        this.lazySrv = lazySrv;
        this.loading = false;
        this.loaded = false;
        this.notify$ = new Subject();
        this.cog = { theme: '' };
    }
    get cog() {
        return this._cog;
    }
    set cog(val) {
        this._cog = this.cogSrv.merge('chart', {
            theme: '',
            echartsLib: 'https://cdnjs.cloudflare.com/ajax/libs/echarts/5.1.0/echarts.min.js'
        }, val);
    }
    libLoad() {
        if (this.loading) {
            if (this.loaded) {
                this.notify$.next();
            }
            return this;
        }
        this.loading = true;
        this.lazySrv
            .load(this.cog.echartsLib)
            .then(() => {
            const extensions = this.cog.echartsExtensions;
            if (Array.isArray(extensions) && extensions.length > 0) {
                return this.lazySrv.load(extensions).then(() => true);
            }
            return Promise.resolve(true);
        })
            .then(() => {
            this.loaded = true;
            this.notify$.next();
        });
        return this;
    }
    get notify() {
        return this.notify$.asObservable();
    }
    ngOnDestroy() {
        this.notify$.unsubscribe();
    }
}
ChartEChartsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ChartEChartsService_Factory() { return new ChartEChartsService(i0.ɵɵinject(i1.AlainConfigService), i0.ɵɵinject(i2.LazyService)); }, token: ChartEChartsService, providedIn: "root" });
ChartEChartsService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
ChartEChartsService.ctorParameters = () => [
    { type: AlainConfigService },
    { type: LazyService }
];

class ChartEChartsComponent {
    constructor(srv, cdr, ngZone, platform) {
        this.srv = srv;
        this.cdr = cdr;
        this.ngZone = ngZone;
        this.platform = platform;
        this.destroy$ = new Subject();
        this._chart = null;
        this._width = '100%';
        this._height = '400px';
        this.events = new EventEmitter();
        this.loaded = false;
        this.srv.notify
            .pipe(takeUntil(this.destroy$), filter(() => !this.loaded))
            .subscribe(() => this.load());
        this.theme = srv.cog.echartsTheme;
    }
    set width(val) {
        this._width = typeof val === 'number' ? `${val}px` : `${val}`;
    }
    set height(val) {
        this._height = typeof val === 'number' ? `${val}px` : `${val}`;
    }
    set theme(value) {
        this._theme = value;
        if (this._chart) {
            this.install();
        }
    }
    set initOpt(value) {
        this._initOpt = value;
        if (this._chart) {
            this.install();
        }
    }
    set option(value) {
        this._option = value;
        if (this._chart) {
            this.setOption(value, true);
        }
    }
    get chart() {
        return this._chart;
    }
    emit(type, other) {
        this.events.emit(Object.assign({ type, chart: this.chart }, other));
    }
    load() {
        this.ngZone.run(() => {
            this.loaded = true;
            this.cdr.detectChanges();
        });
        this.emit('ready');
        this.install();
    }
    install() {
        this.destroy();
        this._chart = window.echarts.init(this.node.nativeElement, this._theme, this._initOpt);
        this.emit('init');
        this.setOption(this._option);
        return this;
    }
    destroy() {
        if (this._chart) {
            this._chart.dispose();
            this.emit('destroy');
        }
        return this;
    }
    setOption(option, notMerge = false, lazyUpdate = false) {
        if (this._chart) {
            this._chart.setOption(option, notMerge, lazyUpdate);
            this.emit('set-option', { option });
        }
        return this;
    }
    ngOnInit() {
        if (!this.platform.isBrowser) {
            return;
        }
        if (window.echarts) {
            this.load();
        }
        else {
            this.srv.libLoad();
        }
        fromEvent(window, 'resize')
            .pipe(takeUntil(this.destroy$), filter(() => !!this._chart), debounceTime(200))
            .subscribe(() => this._chart.resize());
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.destroy();
    }
}
ChartEChartsComponent.decorators = [
    { type: Component, args: [{
                selector: 'chart-echarts, [chart-echarts]',
                exportAs: 'chartECharts',
                template: `
    <nz-skeleton *ngIf="!loaded"></nz-skeleton>
    <div #container [style.width]="_width" [style.height]="_height"></div>
  `,
                host: {
                    '[style.display]': `'inline-block'`,
                    '[style.width]': `_width`,
                    '[style.height]': `_height`
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] }
];
ChartEChartsComponent.ctorParameters = () => [
    { type: ChartEChartsService },
    { type: ChangeDetectorRef },
    { type: NgZone },
    { type: Platform }
];
ChartEChartsComponent.propDecorators = {
    node: [{ type: ViewChild, args: ['container', { static: true },] }],
    width: [{ type: Input }],
    height: [{ type: Input }],
    theme: [{ type: Input }],
    initOpt: [{ type: Input }],
    option: [{ type: Input }],
    events: [{ type: Output }]
};
__decorate([
    ZoneOutside()
], ChartEChartsComponent.prototype, "load", null);

const COMPONENTS = [ChartEChartsComponent];
class ChartEChartsModule {
}
ChartEChartsModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, NzSkeletonModule],
                declarations: COMPONENTS,
                exports: COMPONENTS
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { ChartEChartsComponent, ChartEChartsModule, ChartEChartsService };
//# sourceMappingURL=delon-chart-chart-echarts.js.map
