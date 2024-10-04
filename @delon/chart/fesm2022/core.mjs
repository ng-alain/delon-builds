import * as i0 from '@angular/core';
import { inject, Injectable, ElementRef, NgZone, ChangeDetectorRef, EventEmitter, booleanAttribute, numberAttribute, Directive, Input, ViewChild, Output } from '@angular/core';
import { Subject, takeUntil, filter } from 'rxjs';
import { AlainConfigService } from '@delon/util/config';
import { LazyService } from '@delon/util/other';
import { __decorate } from 'tslib';
import { Platform } from '@angular/cdk/platform';
import { ZoneOutside } from '@delon/util/decorator';

class G2Service {
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
    constructor() {
        this.cogSrv = inject(AlainConfigService);
        this.lazySrv = inject(LazyService);
        this.loading = false;
        this.loaded = false;
        this.notify$ = new Subject();
        this.cog = { theme: '' };
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.7", ngImport: i0, type: G2Service, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.7", ngImport: i0, type: G2Service, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.7", ngImport: i0, type: G2Service, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: () => [] });

class G2BaseComponent {
    get chart() {
        return this._chart;
    }
    get winG2() {
        return window.G2;
    }
    constructor() {
        this.srv = inject(G2Service);
        this.el = inject((ElementRef));
        this.ngZone = inject(NgZone);
        this.platform = inject(Platform);
        this.cdr = inject(ChangeDetectorRef);
        this.repaint = true;
        this.destroy$ = new Subject();
        this.loaded = false;
        this.delay = 0;
        this.ready = new EventEmitter();
        this.theme = this.srv.cog.theme;
        this.srv.notify
            .pipe(takeUntil(this.destroy$), filter(() => !this.loaded))
            .subscribe(() => this.load());
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.7", ngImport: i0, type: G2BaseComponent, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "16.1.0", version: "18.2.7", type: G2BaseComponent, inputs: { repaint: ["repaint", "repaint", booleanAttribute], delay: ["delay", "delay", numberAttribute], theme: "theme" }, outputs: { ready: "ready" }, viewQueries: [{ propertyName: "node", first: true, predicate: ["container"], descendants: true, static: true }], usesOnChanges: true, ngImport: i0 }); }
}
__decorate([
    ZoneOutside()
], G2BaseComponent.prototype, "load", null);
__decorate([
    ZoneOutside()
], G2BaseComponent.prototype, "destroyChart", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.7", ngImport: i0, type: G2BaseComponent, decorators: [{
            type: Directive
        }], ctorParameters: () => [], propDecorators: { repaint: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], node: [{
                type: ViewChild,
                args: ['container', { static: true }]
            }], delay: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], theme: [{
                type: Input
            }], ready: [{
                type: Output
            }], load: [], destroyChart: [] } });

function genMiniTooltipOptions(type, options) {
    const res = {
        showTitle: false,
        showMarkers: true,
        enterable: true,
        domStyles: {
            'g2-tooltip': { padding: '0px' },
            'g2-tooltip-title': { display: 'none' },
            'g2-tooltip-list-item': { margin: '4px' }
        },
        ...options
    };
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
