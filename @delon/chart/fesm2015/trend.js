import { __decorate, __metadata } from 'tslib';
import * as i0 from '@angular/core';
import { ɵɵngDeclareComponent, ChangeDetectionStrategy, ViewEncapsulation, ɵsetClassMetadata, Component, Input, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { InputBoolean, DelonUtilModule } from '@delon/util';
import { NgIf, CommonModule } from '@angular/common';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';

class TrendComponent {
    constructor() {
        /** 是否彩色标记 */
        this.colorful = true;
        /** 颜色反转 */
        this.reverseColor = false;
    }
}
/** @nocollapse */ TrendComponent.ɵfac = function TrendComponent_Factory(t) { return new (t || TrendComponent)(); };
/** @nocollapse */ TrendComponent.ɵcmp = ɵɵngDeclareComponent({ version: "11.1.1", type: TrendComponent, selector: "trend", inputs: { flag: "flag", colorful: "colorful", reverseColor: "reverseColor" }, host: { properties: { "class.trend": "true", "class.trend__grey": "!colorful", "class.trend__reverse": "colorful && reverseColor" } }, exportAs: ["trend"], ngImport: i0, template: "<ng-content></ng-content>\n<span *ngIf=\"flag\" class=\"trend__{{ flag }}\"><i nz-icon nzType=\"caret-{{ flag }}\"></i></span>\n", directives: [{ type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: NzIconDirective, selector: "[nz-icon]", inputs: ["nzRotate", "nzSpin", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], TrendComponent.prototype, "colorful", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], TrendComponent.prototype, "reverseColor", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(TrendComponent, [{
        type: Component,
        args: [{
                selector: 'trend',
                exportAs: 'trend',
                templateUrl: './trend.component.html',
                host: {
                    '[class.trend]': 'true',
                    '[class.trend__grey]': '!colorful',
                    '[class.trend__reverse]': 'colorful && reverseColor',
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], null, { flag: [{
            type: Input
        }], colorful: [{
            type: Input
        }], reverseColor: [{
            type: Input
        }] }); })();

const COMPONENTS = [TrendComponent];
class TrendModule {
}
/** @nocollapse */ TrendModule.ɵmod = ɵɵdefineNgModule({ type: TrendModule });
/** @nocollapse */ TrendModule.ɵinj = ɵɵdefineInjector({ factory: function TrendModule_Factory(t) { return new (t || TrendModule)(); }, imports: [[CommonModule, NzIconModule, DelonUtilModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(TrendModule, { declarations: [TrendComponent], imports: [CommonModule, NzIconModule, DelonUtilModule], exports: [TrendComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(TrendModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, NzIconModule, DelonUtilModule],
                declarations: COMPONENTS,
                exports: COMPONENTS,
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { TrendComponent, TrendModule };
//# sourceMappingURL=trend.js.map
