import { Directionality } from '@angular/cdk/bidi';
import { CdkObserveContent, ObserversModule } from '@angular/cdk/observers';
import * as i0 from '@angular/core';
import { inject, viewChild, signal, input, computed, effect, afterNextRender, ViewEncapsulation, ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterLink, RouterModule } from '@angular/router';
import { map } from 'rxjs';
import { DelonLocaleService, DelonLocaleModule } from '@delon/theme';
import { isEmpty } from '@delon/util/browser';
import { AlainConfigService } from '@delon/util/config';
import { NzButtonComponent, NzButtonModule } from 'ng-zorro-antd/button';
import { CommonModule } from '@angular/common';

class ExceptionComponent {
    i18n = inject(DelonLocaleService);
    dom = inject(DomSanitizer);
    directionality = inject(Directionality);
    cogSrv = inject(AlainConfigService);
    conTpl = viewChild.required('conTpl');
    locale = toSignal(this.i18n.change.pipe(map(() => this.i18n.getData('exception'))), {
        initialValue: {}
    });
    dir = toSignal(this.directionality.change, { initialValue: this.directionality.value });
    hasCon = signal(false);
    typeDict;
    typeItem = signal(null);
    type = input(404);
    img = input();
    title = input();
    desc = input();
    backRouterLink = input('/');
    _img = computed(() => {
        const v = this.typeItem()?.img ?? this.img();
        return v == null ? null : this.dom.bypassSecurityTrustStyle(`url('${v}')`);
    });
    _title = computed(() => {
        const v = this.typeItem()?.title ?? this.title();
        return v == null ? null : this.dom.bypassSecurityTrustHtml(v);
    });
    _desc = computed(() => {
        const v = this.typeItem()?.desc ?? this.desc() ?? this.locale()[this.type()];
        return v == null ? null : this.dom.bypassSecurityTrustHtml(v);
    });
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.4", ngImport: i0, type: ExceptionComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.0.4", type: ExceptionComponent, isStandalone: true, selector: "exception", inputs: { type: { classPropertyName: "type", publicName: "type", isSignal: true, isRequired: false, transformFunction: null }, img: { classPropertyName: "img", publicName: "img", isSignal: true, isRequired: false, transformFunction: null }, title: { classPropertyName: "title", publicName: "title", isSignal: true, isRequired: false, transformFunction: null }, desc: { classPropertyName: "desc", publicName: "desc", isSignal: true, isRequired: false, transformFunction: null }, backRouterLink: { classPropertyName: "backRouterLink", publicName: "backRouterLink", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "class.exception": "true", "class.exception-rtl": "dir() === 'rtl'" } }, viewQueries: [{ propertyName: "conTpl", first: true, predicate: ["conTpl"], descendants: true, isSignal: true }], exportAs: ["exception"], ngImport: i0, template: `
    @let l = locale();
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
            {{ l.backToHome }}
          </button>
        }
      </div>
    </div>
  `, isInline: true, dependencies: [{ kind: "directive", type: CdkObserveContent, selector: "[cdkObserveContent]", inputs: ["cdkObserveContentDisabled", "debounce"], outputs: ["cdkObserveContent"], exportAs: ["cdkObserveContent"] }, { kind: "component", type: NzButtonComponent, selector: "button[nz-button], a[nz-button]", inputs: ["nzBlock", "nzGhost", "nzSearch", "nzLoading", "nzDanger", "disabled", "tabIndex", "nzType", "nzShape", "nzSize"], exportAs: ["nzButton"] }, { kind: "directive", type: RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "info", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.4", ngImport: i0, type: ExceptionComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'exception',
                    exportAs: 'exception',
                    template: `
    @let l = locale();
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
            {{ l.backToHome }}
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
        }], ctorParameters: () => [] });

const COMPONENTS = [ExceptionComponent];
class ExceptionModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.4", ngImport: i0, type: ExceptionModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.4", ngImport: i0, type: ExceptionModule, imports: [CommonModule, ObserversModule, RouterModule, DelonLocaleModule, NzButtonModule, ExceptionComponent], exports: [ExceptionComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "20.0.4", ngImport: i0, type: ExceptionModule, imports: [CommonModule, ObserversModule, RouterModule, DelonLocaleModule, NzButtonModule, COMPONENTS] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.4", ngImport: i0, type: ExceptionModule, decorators: [{
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
