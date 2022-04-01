import * as i0 from '@angular/core';
import { Injectable, EventEmitter, Directive, Input, ViewChild, Output } from '@angular/core';
import { Subject } from 'rxjs';
import * as i1 from '@delon/util/config';
import * as i2 from '@delon/util/other';
import { __decorate } from 'tslib';
import { takeUntil, filter } from 'rxjs/operators';
import { InputBoolean, InputNumber, ZoneOutside } from '@delon/util/decorator';
import * as i2$1 from '@angular/cdk/platform';

class G2Service {
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
            libs: [
                'https://gw.alipayobjects.com/os/lib/antv/g2/4.1.46/dist/g2.min.js',
                'https://gw.alipayobjects.com/os/lib/antv/data-set/0.11.8/dist/data-set.js'
            ]
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
        this.lazySrv.load(this.cog.libs).then(() => {
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
G2Service.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.1", ngImport: i0, type: G2Service, deps: [{ token: i1.AlainConfigService }, { token: i2.LazyService }], target: i0.ɵɵFactoryTarget.Injectable });
G2Service.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.1", ngImport: i0, type: G2Service, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.1", ngImport: i0, type: G2Service, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: i1.AlainConfigService }, { type: i2.LazyService }]; } });

class G2BaseComponent {
    constructor(srv, el, ngZone, platform, cdr) {
        this.srv = srv;
        this.el = el;
        this.ngZone = ngZone;
        this.platform = platform;
        this.cdr = cdr;
        this.repaint = true;
        this.destroy$ = new Subject();
        this.loaded = false;
        this.delay = 0;
        this.ready = new EventEmitter();
        this.theme = srv.cog.theme;
        this.srv.notify
            .pipe(takeUntil(this.destroy$), filter(() => !this.loaded))
            .subscribe(() => this.load());
    }
    get chart() {
        return this._chart;
    }
    get winG2() {
        return window.G2;
    }
    /** G2数据变更 */
    changeData() { }
    /** 等同 `ngOnInit` */
    onInit() { }
    /** 等同 `ngOnChanges` */
    onChanges(_) { }
    load() {
        this.ngZone.run(() => {
            this.loaded = true;
            this.cdr.detectChanges();
        });
        setTimeout(() => this.install(), this.delay);
    }
    ngOnInit() {
        if (!this.platform.isBrowser) {
            return;
        }
        this.onInit();
        if (this.winG2) {
            this.load();
        }
        else {
            this.srv.libLoad();
        }
    }
    ngOnChanges(changes) {
        this.onChanges(changes);
        const isOnlyChangeData = this.onlyChangeData
            ? this.onlyChangeData(changes)
            : Object.keys(changes).length === 1 && !!changes.data;
        if (isOnlyChangeData) {
            this.changeData();
            return;
        }
        if (!this.chart || !this.repaint)
            return;
        this.ngZone.runOutsideAngular(() => {
            this.destroyChart().install();
        });
    }
    destroyChart() {
        if (this._chart) {
            this._chart.destroy();
        }
        return this;
    }
    ngOnDestroy() {
        if (this.resize$) {
            this.resize$.unsubscribe();
        }
        this.destroy$.next();
        this.destroy$.complete();
        this.destroyChart();
    }
}
G2BaseComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.1", ngImport: i0, type: G2BaseComponent, deps: [{ token: G2Service }, { token: i0.ElementRef }, { token: i0.NgZone }, { token: i2$1.Platform }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Directive });
G2BaseComponent.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.1", type: G2BaseComponent, inputs: { repaint: "repaint", delay: "delay", theme: "theme" }, outputs: { ready: "ready" }, viewQueries: [{ propertyName: "node", first: true, predicate: ["container"], descendants: true, static: true }], usesOnChanges: true, ngImport: i0 });
__decorate([
    InputBoolean()
], G2BaseComponent.prototype, "repaint", void 0);
__decorate([
    InputNumber()
], G2BaseComponent.prototype, "delay", void 0);
__decorate([
    ZoneOutside()
], G2BaseComponent.prototype, "load", null);
__decorate([
    ZoneOutside()
], G2BaseComponent.prototype, "destroyChart", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.1", ngImport: i0, type: G2BaseComponent, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: G2Service }, { type: i0.ElementRef }, { type: i0.NgZone }, { type: i2$1.Platform }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { repaint: [{
                type: Input
            }], node: [{
                type: ViewChild,
                args: ['container', { static: true }]
            }], delay: [{
                type: Input
            }], theme: [{
                type: Input
            }], ready: [{
                type: Output
            }], load: [], destroyChart: [] } });

function genMiniTooltipOptions(type, options) {
    const res = Object.assign({ showTitle: false, showMarkers: true, enterable: true, domStyles: {
            'g2-tooltip': { padding: '0px' },
            'g2-tooltip-title': { display: 'none' },
            'g2-tooltip-list-item': { margin: '4px' }
        } }, options);
    if (type === 'mini') {
        res.position = 'top';
        res.domStyles['g2-tooltip'] = { padding: '0px', backgroundColor: 'transparent', boxShadow: 'none' };
        res.itemTpl = `<li>{value}</li>`;
        res.offset = 8;
    }
    return res;
}

/**
 * Generated bundle index. Do not edit.
 */

export { G2BaseComponent, G2Service, genMiniTooltipOptions };
//# sourceMappingURL=core.mjs.map
