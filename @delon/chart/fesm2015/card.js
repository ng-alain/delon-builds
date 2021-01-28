import { __decorate, __metadata } from 'tslib';
import * as i0 from '@angular/core';
import { ɵɵdirectiveInject, ChangeDetectorRef, ɵɵngDeclareComponent, ChangeDetectionStrategy, ViewEncapsulation, ɵsetClassMetadata, Component, Input, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { InputBoolean, DelonUtilModule } from '@delon/util';
import { NzCardComponent, NzCardModule } from 'ng-zorro-antd/card';
import { NzSpinComponent, NzSpinModule } from 'ng-zorro-antd/spin';
import { NzStringTemplateOutletDirective, NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NgIf, NgStyle, NgClass, CommonModule } from '@angular/common';

class G2CardComponent {
    constructor(cdr) {
        this.cdr = cdr;
        /** 是否显示边框 */
        this.bordered = false;
        this.total = '';
        this._height = 'auto';
        /** 是否显示Loading */
        this.loading = false;
    }
    set contentHeight(value) {
        this._orgHeight = value;
        this._height = typeof value === 'number' ? (this._height = `${value}px`) : value;
    }
    ngOnChanges() {
        this.cdr.detectChanges();
    }
}
/** @nocollapse */ G2CardComponent.ɵfac = function G2CardComponent_Factory(t) { return new (t || G2CardComponent)(ɵɵdirectiveInject(ChangeDetectorRef)); };
/** @nocollapse */ G2CardComponent.ɵcmp = ɵɵngDeclareComponent({ version: "11.1.1", type: G2CardComponent, selector: "g2-card", inputs: { bordered: "bordered", avatar: "avatar", title: "title", action: "action", total: "total", contentHeight: "contentHeight", footer: "footer", loading: "loading" }, host: { properties: { "class.g2-card": "true" } }, exportAs: ["g2Card"], usesOnChanges: true, ngImport: i0, template: "<nz-card [nzBodyStyle]=\"{ padding: '20px 24px 8px 24px' }\" [nzBordered]=\"bordered\">\n  <nz-spin [nzSpinning]=\"loading\">\n    <div class=\"g2-card__top\">\n      <div class=\"g2-card__avatar\">\n        <ng-container *nzStringTemplateOutlet=\"avatar\">{{ avatar }}</ng-container>\n      </div>\n      <div class=\"g2-card__meta-wrap\">\n        <div class=\"g2-card__meta\">\n          <span class=\"g2-card__meta-title\" *ngIf=\"title\">\n            <ng-container *nzStringTemplateOutlet=\"title\">{{ title }}</ng-container>\n          </span>\n          <span class=\"g2-card__meta-action\" *ngIf=\"action\">\n            <ng-container *nzStringTemplateOutlet=\"action\">{{ action }}</ng-container>\n          </span>\n        </div>\n        <p *ngIf=\"total\" class=\"g2-card__total\">{{ total }}</p>\n      </div>\n    </div>\n    <div class=\"g2-card__desc\" [ngStyle]=\"{ height: _height }\">\n      <div [ngClass]=\"{ 'g2-card__fixed': !!_orgHeight }\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n    <div class=\"g2-card__footer\" *ngIf=\"footer\">\n      <ng-container *nzStringTemplateOutlet=\"footer\">{{ footer }}</ng-container>\n    </div>\n  </nz-spin>\n</nz-card>\n", directives: [{ type: NzCardComponent, selector: "nz-card", inputs: ["nzBordered", "nzBorderless", "nzLoading", "nzHoverable", "nzBodyStyle", "nzActions", "nzType", "nzSize", "nzCover", "nzTitle", "nzExtra"], exportAs: ["nzCard"] }, { type: NzSpinComponent, selector: "nz-spin", inputs: ["nzIndicator", "nzSize", "nzTip", "nzDelay", "nzSimple", "nzSpinning"], exportAs: ["nzSpin"] }, { type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], G2CardComponent.prototype, "bordered", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], G2CardComponent.prototype, "loading", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(G2CardComponent, [{
        type: Component,
        args: [{
                selector: 'g2-card',
                exportAs: 'g2Card',
                templateUrl: './card.component.html',
                host: { '[class.g2-card]': 'true' },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: ChangeDetectorRef }]; }, { bordered: [{
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
        }] }); })();

const COMPONENTS = [G2CardComponent];
class G2CardModule {
}
/** @nocollapse */ G2CardModule.ɵmod = ɵɵdefineNgModule({ type: G2CardModule });
/** @nocollapse */ G2CardModule.ɵinj = ɵɵdefineInjector({ factory: function G2CardModule_Factory(t) { return new (t || G2CardModule)(); }, imports: [[CommonModule, DelonUtilModule, NzCardModule, NzSpinModule, NzOutletModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(G2CardModule, { declarations: [G2CardComponent], imports: [CommonModule, DelonUtilModule, NzCardModule, NzSpinModule, NzOutletModule], exports: [G2CardComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(G2CardModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, DelonUtilModule, NzCardModule, NzSpinModule, NzOutletModule],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS],
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { G2CardComponent, G2CardModule };
//# sourceMappingURL=card.js.map
