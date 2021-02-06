import { ɵɵdefineInjectable, ɵɵinject, Injectable, Directive, ElementRef, NgZone, ChangeDetectorRef, ViewChild, Input } from '@angular/core';
import { AlainConfigService } from '@delon/util/config';
import { LazyService } from '@delon/util/other';
import { Subject } from 'rxjs';
import { __decorate, __metadata } from 'tslib';
import { Platform } from '@angular/cdk/platform';
import { InputNumber } from '@delon/util/decorator';
import { takeUntil, filter } from 'rxjs/operators';

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
                'https://gw.alipayobjects.com/os/lib/antv/g2/4.1.4/dist/g2.min.js',
                'https://gw.alipayobjects.com/os/lib/antv/data-set/0.11.7/dist/data-set.js',
            ],
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
/** @nocollapse */ G2Service.ɵprov = ɵɵdefineInjectable({ factory: function G2Service_Factory() { return new G2Service(ɵɵinject(AlainConfigService), ɵɵinject(LazyService)); }, token: G2Service, providedIn: "root" });
G2Service.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
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
    onInit() { }
    onChanges() { }
    load() {
        this.ngZone.run(() => {
            this.loaded = true;
            this.cdr.detectChanges();
        });
        this.ngZone.runOutsideAngular(() => setTimeout(() => this.install(), this.delay));
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
    ngOnChanges() {
        this.onChanges();
        this.ngZone.runOutsideAngular(() => this.attachChart());
    }
    ngOnDestroy() {
        if (this.resize$) {
            this.resize$.unsubscribe();
        }
        this.destroy$.next();
        this.destroy$.complete();
        if (this._chart) {
            this.ngZone.runOutsideAngular(() => this._chart.destroy());
        }
    }
}
G2BaseComponent.decorators = [
    { type: Directive }
];
/** @nocollapse */
G2BaseComponent.ctorParameters = () => [
    { type: G2Service },
    { type: ElementRef },
    { type: NgZone },
    { type: Platform },
    { type: ChangeDetectorRef }
];
G2BaseComponent.propDecorators = {
    node: [{ type: ViewChild, args: ['container', { static: true },] }],
    delay: [{ type: Input }],
    theme: [{ type: Input }]
};
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2BaseComponent.prototype, "delay", void 0);

/**
 * Generated bundle index. Do not edit.
 */

export { G2BaseComponent, G2Service };
//# sourceMappingURL=delon-chart-core.js.map
