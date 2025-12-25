import * as i0 from '@angular/core';
import { inject, ChangeDetectorRef, booleanAttribute, Input, ViewEncapsulation, ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { NzCardComponent, NzCardModule } from 'ng-zorro-antd/card';
import { NzStringTemplateOutletDirective, NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzSpinComponent, NzSpinModule } from 'ng-zorro-antd/spin';
import { CommonModule } from '@angular/common';

class G2CardComponent {
    cdr = inject(ChangeDetectorRef);
    /** 是否显示边框 */
    bordered = false;
    avatar;
    title;
    action;
    total = '';
    _height = 'auto';
    _orgHeight;
    set contentHeight(value) {
        this._orgHeight = value;
        this._height = typeof value === 'number' ? (this._height = `${value}px`) : value;
    }
    footer;
    /** 是否显示Loading */
    loading = false;
    ngOnChanges() {
        this.cdr.detectChanges();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: G2CardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.3.15", type: G2CardComponent, isStandalone: true, selector: "g2-card", inputs: { bordered: ["bordered", "bordered", booleanAttribute], avatar: "avatar", title: "title", action: "action", total: "total", contentHeight: "contentHeight", footer: "footer", loading: ["loading", "loading", booleanAttribute] }, host: { properties: { "class.g2-card": "true" } }, exportAs: ["g2Card"], usesOnChanges: true, ngImport: i0, template: "<nz-card [nzBodyStyle]=\"{ padding: '20px 24px 8px 24px' }\" [nzBordered]=\"bordered\">\n  <nz-spin [nzSpinning]=\"loading\">\n    <div class=\"g2-card__top\">\n      <div class=\"g2-card__avatar\">\n        <ng-container *nzStringTemplateOutlet=\"avatar\">{{ avatar }}</ng-container>\n      </div>\n      <div class=\"g2-card__meta-wrap\">\n        <div class=\"g2-card__meta\">\n          @if (title) {\n            <span class=\"g2-card__meta-title\">\n              <ng-container *nzStringTemplateOutlet=\"title\">{{ title }}</ng-container>\n            </span>\n          }\n          @if (action) {\n            <span class=\"g2-card__meta-action\">\n              <ng-container *nzStringTemplateOutlet=\"action\">{{ action }}</ng-container>\n            </span>\n          }\n        </div>\n        @if (total) {\n          <p class=\"g2-card__total\" [innerHTML]=\"total\"></p>\n        }\n      </div>\n    </div>\n    <div class=\"g2-card__desc\" [style.height]=\"_height\">\n      <div [class.g2-card__fixed]=\"!!_orgHeight\">\n        <ng-content />\n      </div>\n    </div>\n    @if (footer) {\n      <div class=\"g2-card__footer\">\n        <ng-container *nzStringTemplateOutlet=\"footer\">{{ footer }}</ng-container>\n      </div>\n    }\n  </nz-spin>\n</nz-card>\n", dependencies: [{ kind: "component", type: NzCardComponent, selector: "nz-card", inputs: ["nzBordered", "nzLoading", "nzHoverable", "nzBodyStyle", "nzCover", "nzActions", "nzType", "nzSize", "nzTitle", "nzExtra"], exportAs: ["nzCard"] }, { kind: "component", type: NzSpinComponent, selector: "nz-spin", inputs: ["nzIndicator", "nzSize", "nzTip", "nzDelay", "nzSimple", "nzSpinning"], exportAs: ["nzSpin"] }, { kind: "directive", type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: G2CardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'g2-card', exportAs: 'g2Card', host: { '[class.g2-card]': 'true' }, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, imports: [NzCardComponent, NzSpinComponent, NzStringTemplateOutletDirective], template: "<nz-card [nzBodyStyle]=\"{ padding: '20px 24px 8px 24px' }\" [nzBordered]=\"bordered\">\n  <nz-spin [nzSpinning]=\"loading\">\n    <div class=\"g2-card__top\">\n      <div class=\"g2-card__avatar\">\n        <ng-container *nzStringTemplateOutlet=\"avatar\">{{ avatar }}</ng-container>\n      </div>\n      <div class=\"g2-card__meta-wrap\">\n        <div class=\"g2-card__meta\">\n          @if (title) {\n            <span class=\"g2-card__meta-title\">\n              <ng-container *nzStringTemplateOutlet=\"title\">{{ title }}</ng-container>\n            </span>\n          }\n          @if (action) {\n            <span class=\"g2-card__meta-action\">\n              <ng-container *nzStringTemplateOutlet=\"action\">{{ action }}</ng-container>\n            </span>\n          }\n        </div>\n        @if (total) {\n          <p class=\"g2-card__total\" [innerHTML]=\"total\"></p>\n        }\n      </div>\n    </div>\n    <div class=\"g2-card__desc\" [style.height]=\"_height\">\n      <div [class.g2-card__fixed]=\"!!_orgHeight\">\n        <ng-content />\n      </div>\n    </div>\n    @if (footer) {\n      <div class=\"g2-card__footer\">\n        <ng-container *nzStringTemplateOutlet=\"footer\">{{ footer }}</ng-container>\n      </div>\n    }\n  </nz-spin>\n</nz-card>\n" }]
        }], propDecorators: { bordered: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], avatar: [{
                type: Input
            }], title: [{
                type: Input
            }], action: [{
                type: Input
            }], total: [{
                type: Input
            }], contentHeight: [{
                type: Input
            }], footer: [{
                type: Input
            }], loading: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }] } });

const COMPONENTS = [G2CardComponent];
class G2CardModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: G2CardModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "20.3.15", ngImport: i0, type: G2CardModule, imports: [CommonModule, NzCardModule, NzSpinModule, NzOutletModule, G2CardComponent], exports: [G2CardComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: G2CardModule, imports: [CommonModule, NzCardModule, NzSpinModule, NzOutletModule, COMPONENTS] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: G2CardModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, NzCardModule, NzSpinModule, NzOutletModule, ...COMPONENTS],
                    exports: COMPONENTS
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { G2CardComponent, G2CardModule };
//# sourceMappingURL=card.mjs.map
