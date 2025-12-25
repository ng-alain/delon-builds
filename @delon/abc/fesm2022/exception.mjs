import { Directionality } from '@angular/cdk/bidi';
import { CdkObserveContent, ObserversModule } from '@angular/cdk/observers';
import * as i0 from '@angular/core';
import { inject, viewChild, signal, input, computed, effect, afterNextRender, ViewEncapsulation, ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterLink, RouterModule } from '@angular/router';
import { DelonLocaleService, DelonLocaleModule } from '@delon/theme';
import { isEmpty } from '@delon/util/browser';
import { AlainConfigService } from '@delon/util/config';
import { NzButtonComponent, NzButtonModule } from 'ng-zorro-antd/button';
import { CommonModule } from '@angular/common';

class ExceptionComponent {
    dom = inject(DomSanitizer);
    cogSrv = inject(AlainConfigService);
    conTpl = viewChild.required('conTpl');
    locale = inject(DelonLocaleService).valueSignal('exception');
    dir = inject(Directionality).valueSignal;
    hasCon = signal(false, ...(ngDevMode ? [{ debugName: "hasCon" }] : []));
    typeDict;
    typeItem = signal(null, ...(ngDevMode ? [{ debugName: "typeItem" }] : []));
    type = input(404, ...(ngDevMode ? [{ debugName: "type" }] : []));
    img = input(...(ngDevMode ? [undefined, { debugName: "img" }] : []));
    title = input(...(ngDevMode ? [undefined, { debugName: "title" }] : []));
    desc = input(...(ngDevMode ? [undefined, { debugName: "desc" }] : []));
    backRouterLink = input('/', ...(ngDevMode ? [{ debugName: "backRouterLink" }] : []));
    _img = computed(() => {
        const v = this.img() ?? this.typeItem()?.img;
        return v == null ? null : this.dom.bypassSecurityTrustStyle(`url('${v}')`);
    }, ...(ngDevMode ? [{ debugName: "_img" }] : []));
    _title = computed(() => {
        const v = this.title() ?? this.typeItem()?.title;
        return v == null ? null : this.dom.bypassSecurityTrustHtml(v);
    }, ...(ngDevMode ? [{ debugName: "_title" }] : []));
    _desc = computed(() => {
        const v = this.desc() ?? this.typeItem()?.desc ?? this.locale()[this.type()];
        return v == null ? null : this.dom.bypassSecurityTrustHtml(v);
    }, ...(ngDevMode ? [{ debugName: "_desc" }] : []));
    constructor() {
        this.cogSrv.attach(this, 'exception', {
            typeDict: {
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
            }
        });
        effect(() => {
            const type = this.type();
            this.typeItem.set(this.typeDict?.[type]);
        });
        afterNextRender(() => {
            this.checkContent();
        });
    }
    checkContent() {
        this.hasCon.set(!isEmpty(this.conTpl().nativeElement));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: ExceptionComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.3.15", type: ExceptionComponent, isStandalone: true, selector: "exception", inputs: { type: { classPropertyName: "type", publicName: "type", isSignal: true, isRequired: false, transformFunction: null }, img: { classPropertyName: "img", publicName: "img", isSignal: true, isRequired: false, transformFunction: null }, title: { classPropertyName: "title", publicName: "title", isSignal: true, isRequired: false, transformFunction: null }, desc: { classPropertyName: "desc", publicName: "desc", isSignal: true, isRequired: false, transformFunction: null }, backRouterLink: { classPropertyName: "backRouterLink", publicName: "backRouterLink", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "class.exception": "true", "class.exception-rtl": "dir() === 'rtl'" } }, viewQueries: [{ propertyName: "conTpl", first: true, predicate: ["conTpl"], descendants: true, isSignal: true }], exportAs: ["exception"], ngImport: i0, template: `
    <div class="exception__img-block">
      <div class="exception__img" [style.backgroundImage]="_img()"></div>
    </div>
    <div class="exception__cont">
      @if (_title()) {
        <h1 class="exception__cont-title" [innerHTML]="_title()"></h1>
      }
      <div class="exception__cont-desc" [innerHTML]="_desc()"></div>
      <div class="exception__cont-actions">
        <div (cdkObserveContent)="checkContent()" #conTpl>
          <ng-content />
        </div>
        @if (!hasCon()) {
          <button nz-button [routerLink]="backRouterLink()" [nzType]="'primary'">
            {{ locale().backToHome }}
          </button>
        }
      </div>
    </div>
  `, isInline: true, dependencies: [{ kind: "directive", type: CdkObserveContent, selector: "[cdkObserveContent]", inputs: ["cdkObserveContentDisabled", "debounce"], outputs: ["cdkObserveContent"], exportAs: ["cdkObserveContent"] }, { kind: "component", type: NzButtonComponent, selector: "button[nz-button], a[nz-button]", inputs: ["nzBlock", "nzGhost", "nzSearch", "nzLoading", "nzDanger", "disabled", "tabIndex", "nzType", "nzShape", "nzSize"], exportAs: ["nzButton"] }, { kind: "directive", type: RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "info", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: ExceptionComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'exception',
                    exportAs: 'exception',
                    template: `
    <div class="exception__img-block">
      <div class="exception__img" [style.backgroundImage]="_img()"></div>
    </div>
    <div class="exception__cont">
      @if (_title()) {
        <h1 class="exception__cont-title" [innerHTML]="_title()"></h1>
      }
      <div class="exception__cont-desc" [innerHTML]="_desc()"></div>
      <div class="exception__cont-actions">
        <div (cdkObserveContent)="checkContent()" #conTpl>
          <ng-content />
        </div>
        @if (!hasCon()) {
          <button nz-button [routerLink]="backRouterLink()" [nzType]="'primary'">
            {{ locale().backToHome }}
          </button>
        }
      </div>
    </div>
  `,
                    host: {
                        '[class.exception]': 'true',
                        '[class.exception-rtl]': `dir() === 'rtl'`
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    imports: [CdkObserveContent, NzButtonComponent, RouterLink]
                }]
        }], ctorParameters: () => [], propDecorators: { conTpl: [{ type: i0.ViewChild, args: ['conTpl', { isSignal: true }] }], type: [{ type: i0.Input, args: [{ isSignal: true, alias: "type", required: false }] }], img: [{ type: i0.Input, args: [{ isSignal: true, alias: "img", required: false }] }], title: [{ type: i0.Input, args: [{ isSignal: true, alias: "title", required: false }] }], desc: [{ type: i0.Input, args: [{ isSignal: true, alias: "desc", required: false }] }], backRouterLink: [{ type: i0.Input, args: [{ isSignal: true, alias: "backRouterLink", required: false }] }] } });

const COMPONENTS = [ExceptionComponent];
class ExceptionModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: ExceptionModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "20.3.15", ngImport: i0, type: ExceptionModule, imports: [CommonModule, ObserversModule, RouterModule, DelonLocaleModule, NzButtonModule, ExceptionComponent], exports: [ExceptionComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: ExceptionModule, imports: [CommonModule, ObserversModule, RouterModule, DelonLocaleModule, NzButtonModule, COMPONENTS] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: ExceptionModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, ObserversModule, RouterModule, DelonLocaleModule, NzButtonModule, ...COMPONENTS],
                    exports: COMPONENTS
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { ExceptionComponent, ExceptionModule };
//# sourceMappingURL=exception.mjs.map
