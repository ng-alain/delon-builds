import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, ViewEncapsulation, Injectable, Optional, NgModule } from '@angular/core';
import * as i3 from '@angular/cdk/bidi';
import { Directionality } from '@angular/cdk/bidi';
import * as i1 from '@angular/cdk/overlay';
import { Overlay, OverlayModule } from '@angular/cdk/overlay';
import { ComponentPortal, PortalModule } from '@angular/cdk/portal';
import * as i2 from '@delon/util/config';
import { AlainConfigService } from '@delon/util/config';
import { Subject, timer } from 'rxjs';
import { debounce } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpinModule } from 'ng-zorro-antd/spin';

class LoadingDefaultComponent {
    constructor() {
        this.dir = 'ltr';
    }
    get icon() {
        return this.options.icon;
    }
    get custom() {
        return this.options.custom;
    }
}
LoadingDefaultComponent.decorators = [
    { type: Component, args: [{
                selector: 'loading-default',
                template: "<div class=\"loading-default__icon\" *ngIf=\"options.type! !== 'text'\">\n  <ng-container [ngSwitch]=\"options.type!\">\n    <nz-spin *ngSwitchCase=\"'spin'\" nzSimple></nz-spin>\n    <i *ngSwitchCase=\"'icon'\" nz-icon [nzType]=\"icon.type!\" [nzTheme]=\"icon.theme!\" [nzSpin]=\"icon.spin\"></i>\n    <div *ngSwitchDefault class=\"loading-default__custom\" [ngStyle]=\"custom.style!\" [innerHTML]=\"custom.html\"></div>\n  </ng-container>\n</div>\n<div *ngIf=\"options.text\" class=\"loading-default__text\">{{ options.text }}</div>\n",
                host: {
                    '[class.loading-default]': 'true',
                    '[class.loading-default-rtl]': `dir === 'rtl'`,
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] }
];

class LoadingService {
    constructor(overlay, configSrv, directionality) {
        this.overlay = overlay;
        this.configSrv = configSrv;
        this.directionality = directionality;
        this.compRef = null;
        this.opt = null;
        this.n$ = new Subject();
        this.cog = configSrv.merge('loading', {
            type: 'spin',
            text: '加载中...',
            icon: {
                type: 'loading',
                theme: 'outline',
                spin: true,
            },
            delay: 0,
        });
        this.loading$ = this.n$
            .asObservable()
            .pipe(debounce(() => timer(this.opt.delay)))
            .subscribe(() => this.create());
    }
    get instance() {
        return this.compRef != null ? this.compRef.instance : null;
    }
    create() {
        if (this.opt == null)
            return;
        this._close(false);
        this._overlayRef = this.overlay.create({
            positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
            scrollStrategy: this.overlay.scrollStrategies.block(),
            hasBackdrop: true,
            backdropClass: 'loading-backdrop',
        });
        this.compRef = this._overlayRef.attach(new ComponentPortal(LoadingDefaultComponent));
        const dir = this.configSrv.get('loading').direction || this.directionality.value;
        Object.assign(this.instance, { options: this.opt, dir });
        this.compRef.changeDetectorRef.markForCheck();
    }
    /**
     * Open a new loading indicator
     *
     * 打开一个新加载指示符
     */
    open(options) {
        this.opt = Object.assign(Object.assign({}, this.cog), options);
        this.n$.next();
    }
    _close(cleanOpt) {
        if (cleanOpt)
            this.opt = null;
        if (!this._overlayRef)
            return;
        this._overlayRef.detach();
        this.compRef = null;
    }
    /**
     * Turn off a loading indicator
     *
     * 关闭一个加载指示符
     */
    close() {
        this._close(true);
    }
    ngOnDestroy() {
        this.loading$.unsubscribe();
    }
}
LoadingService.ɵprov = i0.ɵɵdefineInjectable({ factory: function LoadingService_Factory() { return new LoadingService(i0.ɵɵinject(i1.Overlay), i0.ɵɵinject(i2.AlainConfigService), i0.ɵɵinject(i3.Directionality, 8)); }, token: LoadingService, providedIn: "root" });
LoadingService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
LoadingService.ctorParameters = () => [
    { type: Overlay },
    { type: AlainConfigService },
    { type: Directionality, decorators: [{ type: Optional }] }
];

const COMPONENTS = [LoadingDefaultComponent];
class LoadingModule {
}
LoadingModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, OverlayModule, PortalModule, NzIconModule, NzSpinModule],
                declarations: COMPONENTS,
                entryComponents: COMPONENTS,
                exports: COMPONENTS,
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { LoadingDefaultComponent, LoadingModule, LoadingService };
//# sourceMappingURL=loading.js.map
