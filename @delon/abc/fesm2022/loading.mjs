import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, ViewEncapsulation, inject, Injectable, NgModule } from '@angular/core';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpinComponent, NzSpinModule } from 'ng-zorro-antd/spin';
import { Directionality } from '@angular/cdk/bidi';
import { Overlay, OverlayModule } from '@angular/cdk/overlay';
import { ComponentPortal, PortalModule } from '@angular/cdk/portal';
import { Subject, debounce, timer } from 'rxjs';
import { AlainConfigService } from '@delon/util/config';
import { CommonModule } from '@angular/common';

class LoadingDefaultComponent {
    options;
    dir = 'ltr';
    get icon() {
        return this.options.icon;
    }
    get custom() {
        return this.options.custom;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.6", ngImport: i0, type: LoadingDefaultComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.6", type: LoadingDefaultComponent, isStandalone: true, selector: "loading-default", host: { properties: { "class.loading-default": "true", "class.loading-default-rtl": "dir === 'rtl'" } }, ngImport: i0, template: "@if (options.type! !== 'text') {\n  <div class=\"loading-default__icon\">\n    @switch (options.type) {\n      @case ('spin') {\n        <nz-spin nzSimple />\n      }\n      @case ('icon') {\n        <nz-icon [nzType]=\"icon.type!\" [nzTheme]=\"icon.theme!\" [nzSpin]=\"icon.spin\" />\n      }\n      @default {\n        <div class=\"loading-default__custom\" [style]=\"custom.style!\" [innerHTML]=\"custom.html\"></div>\n      }\n    }\n  </div>\n}\n@if (options.text) {\n  <div class=\"loading-default__text\">{{ options.text }}</div>\n}\n", dependencies: [{ kind: "component", type: NzSpinComponent, selector: "nz-spin", inputs: ["nzIndicator", "nzSize", "nzTip", "nzDelay", "nzSimple", "nzSpinning"], exportAs: ["nzSpin"] }, { kind: "directive", type: NzIconDirective, selector: "nz-icon,[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.6", ngImport: i0, type: LoadingDefaultComponent, decorators: [{
            type: Component,
            args: [{ selector: 'loading-default', host: {
                        '[class.loading-default]': 'true',
                        '[class.loading-default-rtl]': `dir === 'rtl'`
                    }, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, imports: [NzSpinComponent, NzIconDirective], template: "@if (options.type! !== 'text') {\n  <div class=\"loading-default__icon\">\n    @switch (options.type) {\n      @case ('spin') {\n        <nz-spin nzSimple />\n      }\n      @case ('icon') {\n        <nz-icon [nzType]=\"icon.type!\" [nzTheme]=\"icon.theme!\" [nzSpin]=\"icon.spin\" />\n      }\n      @default {\n        <div class=\"loading-default__custom\" [style]=\"custom.style!\" [innerHTML]=\"custom.html\"></div>\n      }\n    }\n  </div>\n}\n@if (options.text) {\n  <div class=\"loading-default__text\">{{ options.text }}</div>\n}\n" }]
        }] });

class LoadingService {
    overlay = inject(Overlay);
    configSrv = inject(AlainConfigService);
    directionality = inject(Directionality);
    _overlayRef;
    compRef = null;
    opt = null;
    cog;
    n$ = new Subject();
    loading$;
    get instance() {
        return this.compRef != null ? this.compRef.instance : null;
    }
    constructor() {
        this.cog = this.configSrv.merge('loading', {
            type: 'spin',
            text: '加载中...',
            icon: {
                type: 'loading',
                theme: 'outline',
                spin: true
            },
            delay: 0
        });
        this.loading$ = this.n$
            .asObservable()
            .pipe(debounce(() => timer(this.opt.delay)))
            .subscribe(() => this.create());
    }
    create() {
        if (this.opt == null)
            return;
        this._close(false);
        this._overlayRef = this.overlay.create({
            positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
            scrollStrategy: this.overlay.scrollStrategies.block(),
            hasBackdrop: true,
            backdropClass: 'loading-backdrop'
        });
        this.compRef = this._overlayRef.attach(new ComponentPortal(LoadingDefaultComponent));
        const dir = this.configSrv.get('loading').direction || this.directionality.value;
        if (this.instance != null) {
            this.instance.options = this.opt;
            this.instance.dir = dir;
        }
        this.compRef.changeDetectorRef.markForCheck();
    }
    /**
     * Open a new loading indicator
     *
     * 打开一个新加载指示符
     */
    open(options) {
        this.opt = { ...this.cog, ...options };
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.6", ngImport: i0, type: LoadingService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.2.6", ngImport: i0, type: LoadingService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.6", ngImport: i0, type: LoadingService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: () => [] });

const COMPONENTS = [LoadingDefaultComponent];
class LoadingModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.6", ngImport: i0, type: LoadingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "19.2.6", ngImport: i0, type: LoadingModule, imports: [CommonModule, OverlayModule, PortalModule, NzIconModule, NzSpinModule, LoadingDefaultComponent], exports: [LoadingDefaultComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "19.2.6", ngImport: i0, type: LoadingModule, imports: [CommonModule, OverlayModule, PortalModule, NzIconModule, NzSpinModule, COMPONENTS] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.6", ngImport: i0, type: LoadingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, OverlayModule, PortalModule, NzIconModule, NzSpinModule, ...COMPONENTS],
                    exports: COMPONENTS
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { LoadingDefaultComponent, LoadingModule, LoadingService };
//# sourceMappingURL=loading.mjs.map
