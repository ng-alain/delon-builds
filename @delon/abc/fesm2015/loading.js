import * as i0 from '@angular/core';
import { ɵɵngDeclareComponent, ChangeDetectionStrategy, ViewEncapsulation, ɵsetClassMetadata, Component, ɵɵinject, ɵɵdefineInjectable, Injectable, Optional, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, NgStyle, CommonModule } from '@angular/common';
import { NzSpinComponent, NzSpinModule } from 'ng-zorro-antd/spin';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';
import { Directionality } from '@angular/cdk/bidi';
import { Overlay, OverlayModule } from '@angular/cdk/overlay';
import { ComponentPortal, PortalModule } from '@angular/cdk/portal';
import { AlainConfigService } from '@delon/util/config';
import { Subject, timer } from 'rxjs';
import { debounce } from 'rxjs/operators';

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
/** @nocollapse */ LoadingDefaultComponent.ɵfac = function LoadingDefaultComponent_Factory(t) { return new (t || LoadingDefaultComponent)(); };
/** @nocollapse */ LoadingDefaultComponent.ɵcmp = ɵɵngDeclareComponent({ version: "11.1.1", type: LoadingDefaultComponent, selector: "loading-default", host: { properties: { "class.loading-default": "true", "class.loading-default-rtl": "dir === 'rtl'" } }, ngImport: i0, template: "<div class=\"loading-default__icon\" *ngIf=\"options.type !== 'text'\">\n  <ng-container [ngSwitch]=\"options.type\">\n    <nz-spin *ngSwitchCase=\"'spin'\" nzSimple></nz-spin>\n    <i *ngSwitchCase=\"'icon'\" nz-icon [nzType]=\"icon.type\" [nzTheme]=\"icon.theme\" [nzSpin]=\"icon.spin\"></i>\n    <div *ngSwitchDefault class=\"loading-default__custom\" [ngStyle]=\"custom.style\" [innerHTML]=\"custom.html\"></div>\n  </ng-container>\n</div>\n<div *ngIf=\"options.text\" class=\"loading-default__text\">{{ options.text }}</div>\n", directives: [{ type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { type: NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { type: NzSpinComponent, selector: "nz-spin", inputs: ["nzIndicator", "nzSize", "nzTip", "nzDelay", "nzSimple", "nzSpinning"], exportAs: ["nzSpin"] }, { type: NzIconDirective, selector: "[nz-icon]", inputs: ["nzRotate", "nzSpin", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { type: NgSwitchDefault, selector: "[ngSwitchDefault]" }, { type: NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(LoadingDefaultComponent, [{
        type: Component,
        args: [{
                selector: 'loading-default',
                templateUrl: './loading.component.html',
                host: {
                    '[class.loading-default]': 'true',
                    '[class.loading-default-rtl]': `dir === 'rtl'`,
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], null, null); })();

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
/** @nocollapse */ LoadingService.ɵfac = function LoadingService_Factory(t) { return new (t || LoadingService)(ɵɵinject(Overlay), ɵɵinject(AlainConfigService), ɵɵinject(Directionality, 8)); };
/** @nocollapse */ LoadingService.ɵprov = ɵɵdefineInjectable({ token: LoadingService, factory: LoadingService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(LoadingService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: Overlay }, { type: AlainConfigService }, { type: Directionality, decorators: [{
                type: Optional
            }] }]; }, null); })();

const COMPONENTS = [LoadingDefaultComponent];
class LoadingModule {
}
/** @nocollapse */ LoadingModule.ɵmod = ɵɵdefineNgModule({ type: LoadingModule });
/** @nocollapse */ LoadingModule.ɵinj = ɵɵdefineInjector({ factory: function LoadingModule_Factory(t) { return new (t || LoadingModule)(); }, imports: [[CommonModule, OverlayModule, PortalModule, NzIconModule, NzSpinModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(LoadingModule, { declarations: [LoadingDefaultComponent], imports: [CommonModule, OverlayModule, PortalModule, NzIconModule, NzSpinModule], exports: [LoadingDefaultComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(LoadingModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, OverlayModule, PortalModule, NzIconModule, NzSpinModule],
                declarations: COMPONENTS,
                entryComponents: COMPONENTS,
                exports: COMPONENTS,
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { LoadingDefaultComponent, LoadingModule, LoadingService };
//# sourceMappingURL=loading.js.map
