import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, ViewEncapsulation, Optional, ViewChild, Input, NgModule } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { isEmpty } from '@delon/util/browser';
import * as i1 from '@delon/theme';
import { DelonLocaleModule } from '@delon/theme';
import * as i2 from '@angular/platform-browser';
import * as i3 from '@angular/cdk/bidi';
import * as i4 from 'ng-zorro-antd/button';
import { NzButtonModule } from 'ng-zorro-antd/button';
import * as i5 from '@angular/cdk/observers';
import { ObserversModule } from '@angular/cdk/observers';
import * as i6 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i7 from 'ng-zorro-antd/core/wave';
import * as i8 from 'ng-zorro-antd/core/transition-patch';
import * as i9 from '@angular/router';
import { RouterModule } from '@angular/router';

class ExceptionComponent {
    constructor(i18n, dom, directionality, cdr) {
        this.i18n = i18n;
        this.dom = dom;
        this.directionality = directionality;
        this.cdr = cdr;
        this.destroy$ = new Subject();
        this.locale = {};
        this.hasCon = false;
        this.dir = 'ltr';
        this._img = '';
        this._title = '';
        this._desc = '';
        this.backRouterLink = '/';
    }
    set type(value) {
        const item = {
            403: {
                img: 'https://gw.alipayobjects.com/zos/rmsportal/wZcnGqRDyhPOEYFcZDnb.svg',
                title: '403'
            },
            404: {
                img: 'https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg',
                title: '404'
            },
            500: {
                img: 'https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg',
                title: '500'
            }
        }[value];
        if (!item)
            return;
        this.fixImg(item.img);
        this._type = value;
        this._title = item.title;
        this._desc = '';
    }
    fixImg(src) {
        this._img = this.dom.bypassSecurityTrustStyle(`url('${src}')`);
    }
    set img(value) {
        this.fixImg(value);
    }
    set title(value) {
        this._title = this.dom.bypassSecurityTrustHtml(value);
    }
    set desc(value) {
        this._desc = this.dom.bypassSecurityTrustHtml(value);
    }
    checkContent() {
        this.hasCon = !isEmpty(this.conTpl.nativeElement);
        this.cdr.detectChanges();
    }
    ngOnInit() {
        var _a;
        this.dir = this.directionality.value;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
        });
        this.i18n.change.pipe(takeUntil(this.destroy$)).subscribe(() => (this.locale = this.i18n.getData('exception')));
        this.checkContent();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
ExceptionComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: ExceptionComponent, deps: [{ token: i1.DelonLocaleService }, { token: i2.DomSanitizer }, { token: i3.Directionality, optional: true }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
ExceptionComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.8", type: ExceptionComponent, selector: "exception", inputs: { type: "type", img: "img", title: "title", desc: "desc", backRouterLink: "backRouterLink" }, host: { properties: { "class.exception": "true", "class.exception-rtl": "dir === 'rtl'" } }, viewQueries: [{ propertyName: "conTpl", first: true, predicate: ["conTpl"], descendants: true, static: true }], exportAs: ["exception"], ngImport: i0, template: "<div class=\"exception__img-block\">\n  <div class=\"exception__img\" [style.backgroundImage]=\"_img\"></div>\n</div>\n<div class=\"exception__cont\">\n  <h1 class=\"exception__cont-title\" [innerHTML]=\"_title\"></h1>\n  <div class=\"exception__cont-desc\" [innerHTML]=\"_desc || locale[_type]\"></div>\n  <div class=\"exception__cont-actions\">\n    <div (cdkObserveContent)=\"checkContent()\" #conTpl>\n      <ng-content></ng-content>\n    </div>\n    <button *ngIf=\"!hasCon\" nz-button [routerLink]=\"backRouterLink\" [nzType]=\"'primary'\">\n      {{ locale.backToHome }}\n    </button>\n  </div>\n</div>\n", components: [{ type: i4.NzButtonComponent, selector: "button[nz-button], a[nz-button]", inputs: ["nzBlock", "nzGhost", "nzSearch", "nzLoading", "nzDanger", "disabled", "tabIndex", "nzType", "nzShape", "nzSize"], exportAs: ["nzButton"] }], directives: [{ type: i5.CdkObserveContent, selector: "[cdkObserveContent]", inputs: ["cdkObserveContentDisabled", "debounce"], outputs: ["cdkObserveContent"], exportAs: ["cdkObserveContent"] }, { type: i6.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i7.NzWaveDirective, selector: "[nz-wave],button[nz-button]:not([nzType=\"link\"]):not([nzType=\"text\"])", inputs: ["nzWaveExtraNode"], exportAs: ["nzWave"] }, { type: i8.ɵNzTransitionPatchDirective, selector: "[nz-button], nz-button-group, [nz-icon], [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group", inputs: ["hidden"] }, { type: i9.RouterLink, selector: ":not(a):not(area)[routerLink]", inputs: ["queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo", "routerLink"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: ExceptionComponent, decorators: [{
            type: Component,
            args: [{ selector: 'exception', exportAs: 'exception', host: {
                        '[class.exception]': 'true',
                        '[class.exception-rtl]': `dir === 'rtl'`
                    }, preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div class=\"exception__img-block\">\n  <div class=\"exception__img\" [style.backgroundImage]=\"_img\"></div>\n</div>\n<div class=\"exception__cont\">\n  <h1 class=\"exception__cont-title\" [innerHTML]=\"_title\"></h1>\n  <div class=\"exception__cont-desc\" [innerHTML]=\"_desc || locale[_type]\"></div>\n  <div class=\"exception__cont-actions\">\n    <div (cdkObserveContent)=\"checkContent()\" #conTpl>\n      <ng-content></ng-content>\n    </div>\n    <button *ngIf=\"!hasCon\" nz-button [routerLink]=\"backRouterLink\" [nzType]=\"'primary'\">\n      {{ locale.backToHome }}\n    </button>\n  </div>\n</div>\n" }]
        }], ctorParameters: function () {
        return [{ type: i1.DelonLocaleService }, { type: i2.DomSanitizer }, { type: i3.Directionality, decorators: [{
                        type: Optional
                    }] }, { type: i0.ChangeDetectorRef }];
    }, propDecorators: { conTpl: [{
                type: ViewChild,
                args: ['conTpl', { static: true }]
            }], type: [{
                type: Input
            }], img: [{
                type: Input
            }], title: [{
                type: Input
            }], desc: [{
                type: Input
            }], backRouterLink: [{
                type: Input
            }] } });

const COMPONENTS = [ExceptionComponent];
class ExceptionModule {
}
ExceptionModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: ExceptionModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ExceptionModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: ExceptionModule, declarations: [ExceptionComponent], imports: [CommonModule, ObserversModule, RouterModule, DelonLocaleModule, NzButtonModule], exports: [ExceptionComponent] });
ExceptionModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: ExceptionModule, imports: [[CommonModule, ObserversModule, RouterModule, DelonLocaleModule, NzButtonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: ExceptionModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, ObserversModule, RouterModule, DelonLocaleModule, NzButtonModule],
                    declarations: COMPONENTS,
                    exports: COMPONENTS
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { ExceptionComponent, ExceptionModule };
//# sourceMappingURL=exception.mjs.map
