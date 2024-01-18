import { __decorate } from 'tslib';
import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input, NgModule } from '@angular/core';
import { InputBoolean } from '@delon/util/decorator';
import { NzCardComponent, NzCardModule } from 'ng-zorro-antd/card';
import { NzStringTemplateOutletDirective, NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzSpinComponent, NzSpinModule } from 'ng-zorro-antd/spin';
import { CommonModule } from '@angular/common';

class G2CardComponent {
    set contentHeight(value) {
        this._orgHeight = value;
        this._height = typeof value === 'number' ? (this._height = `${value}px`) : value;
    }
    constructor(cdr) {
        this.cdr = cdr;
        /** 是否显示边框 */
        this.bordered = false;
        this.total = '';
        this._height = 'auto';
        /** 是否显示Loading */
        this.loading = false;
    }
    ngOnChanges() {
        this.cdr.detectChanges();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: G2CardComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.1.0", type: G2CardComponent, isStandalone: true, selector: "g2-card", inputs: { bordered: "bordered", avatar: "avatar", title: "title", action: "action", total: "total", contentHeight: "contentHeight", footer: "footer", loading: "loading" }, host: { properties: { "class.g2-card": "true" } }, exportAs: ["g2Card"], usesOnChanges: true, ngImport: i0, template: "<nz-card [nzBodyStyle]=\"{ padding: '20px 24px 8px 24px' }\" [nzBordered]=\"bordered\">\n  <nz-spin [nzSpinning]=\"loading\">\n    <div class=\"g2-card__top\">\n      <div class=\"g2-card__avatar\">\n        <ng-container *nzStringTemplateOutlet=\"avatar\">{{ avatar }}</ng-container>\n      </div>\n      <div class=\"g2-card__meta-wrap\">\n        <div class=\"g2-card__meta\">\n          @if (title) {\n            <span class=\"g2-card__meta-title\">\n              <ng-container *nzStringTemplateOutlet=\"title\">{{ title }}</ng-container>\n            </span>\n          }\n          @if (action) {\n            <span class=\"g2-card__meta-action\">\n              <ng-container *nzStringTemplateOutlet=\"action\">{{ action }}</ng-container>\n            </span>\n          }\n        </div>\n        @if (total) {\n          <p class=\"g2-card__total\" [innerHTML]=\"total\"></p>\n        }\n      </div>\n    </div>\n    <div class=\"g2-card__desc\" [style.height]=\"_height\">\n      <div [class.g2-card__fixed]=\"!!_orgHeight\">\n        <ng-content />\n      </div>\n    </div>\n    @if (footer) {\n      <div class=\"g2-card__footer\">\n        <ng-container *nzStringTemplateOutlet=\"footer\">{{ footer }}</ng-container>\n      </div>\n    }\n  </nz-spin>\n</nz-card>\n", dependencies: [{ kind: "component", type: NzCardComponent, selector: "nz-card", inputs: ["nzBordered", "nzBorderless", "nzLoading", "nzHoverable", "nzBodyStyle", "nzCover", "nzActions", "nzType", "nzSize", "nzTitle", "nzExtra"], exportAs: ["nzCard"] }, { kind: "component", type: NzSpinComponent, selector: "nz-spin", inputs: ["nzIndicator", "nzSize", "nzTip", "nzDelay", "nzSimple", "nzSpinning"], exportAs: ["nzSpin"] }, { kind: "directive", type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
__decorate([
    InputBoolean()
], G2CardComponent.prototype, "bordered", void 0);
__decorate([
    InputBoolean()
], G2CardComponent.prototype, "loading", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: G2CardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'g2-card', exportAs: 'g2Card', host: { '[class.g2-card]': 'true' }, preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, standalone: true, imports: [NzCardComponent, NzSpinComponent, NzStringTemplateOutletDirective], template: "<nz-card [nzBodyStyle]=\"{ padding: '20px 24px 8px 24px' }\" [nzBordered]=\"bordered\">\n  <nz-spin [nzSpinning]=\"loading\">\n    <div class=\"g2-card__top\">\n      <div class=\"g2-card__avatar\">\n        <ng-container *nzStringTemplateOutlet=\"avatar\">{{ avatar }}</ng-container>\n      </div>\n      <div class=\"g2-card__meta-wrap\">\n        <div class=\"g2-card__meta\">\n          @if (title) {\n            <span class=\"g2-card__meta-title\">\n              <ng-container *nzStringTemplateOutlet=\"title\">{{ title }}</ng-container>\n            </span>\n          }\n          @if (action) {\n            <span class=\"g2-card__meta-action\">\n              <ng-container *nzStringTemplateOutlet=\"action\">{{ action }}</ng-container>\n            </span>\n          }\n        </div>\n        @if (total) {\n          <p class=\"g2-card__total\" [innerHTML]=\"total\"></p>\n        }\n      </div>\n    </div>\n    <div class=\"g2-card__desc\" [style.height]=\"_height\">\n      <div [class.g2-card__fixed]=\"!!_orgHeight\">\n        <ng-content />\n      </div>\n    </div>\n    @if (footer) {\n      <div class=\"g2-card__footer\">\n        <ng-container *nzStringTemplateOutlet=\"footer\">{{ footer }}</ng-container>\n      </div>\n    }\n  </nz-spin>\n</nz-card>\n" }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }], propDecorators: { bordered: [{
                type: Input
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
                type: Input
            }] } });

const COMPONENTS = [G2CardComponent];
class G2CardModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: G2CardModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.1.0", ngImport: i0, type: G2CardModule, imports: [CommonModule, NzCardModule, NzSpinModule, NzOutletModule, G2CardComponent], exports: [G2CardComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: G2CardModule, imports: [CommonModule, NzCardModule, NzSpinModule, NzOutletModule, COMPONENTS] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: G2CardModule, decorators: [{
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
