import * as i0 from '@angular/core';
import { Injectable, Directive, ElementRef, NgZone, ChangeDetectorRef, Input, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import * as i1 from '@delon/util/config';
import { AlainConfigService } from '@delon/util/config';
import * as i2 from '@delon/util/other';
import { LazyService } from '@delon/util/other';
import { __decorate } from 'tslib';
import { Platform } from '@angular/cdk/platform';
import { takeUntil, filter } from 'rxjs/operators';
import { InputBoolean, InputNumber, ZoneOutside } from '@delon/util/decorator';

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
                'https://gw.alipayobjects.com/os/lib/antv/g2/4.1.14/dist/g2.min.js',
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
G2Service.ɵprov = i0.ɵɵdefineInjectable({ factory: function G2Service_Factory() { return new G2Service(i0.ɵɵinject(i1.AlainConfigService), i0.ɵɵinject(i2.LazyService)); }, token: G2Service, providedIn: "root" });
G2Service.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
G2Service.ctorParameters = () => [
    { type: AlainConfigService },
    { type: LazyService }
];

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
        this.theme = srv.cog.theme;
        this.srv.notify
            .pipe(takeUntil(this.destroy$), filter(() => !this.loaded))
            .subscribe(() => this.load());
    }
    get chart() {
        return this._chart;
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
        if (window.G2) {
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
G2BaseComponent.decorators = [
    { type: Directive }
];
G2BaseComponent.ctorParameters = () => [
    { type: G2Service },
    { type: ElementRef },
    { type: NgZone },
    { type: Platform },
    { type: ChangeDetectorRef }
];
G2BaseComponent.propDecorators = {
    repaint: [{ type: Input }],
    node: [{ type: ViewChild, args: ['container', { static: true },] }],
    delay: [{ type: Input }],
    theme: [{ type: Input }]
};
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
//# sourceMappingURL=delon-chart-core.js.map
