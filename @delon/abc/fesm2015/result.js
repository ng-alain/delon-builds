import { Directionality } from '@angular/cdk/bidi';
import * as i0 from '@angular/core';
import { ɵɵdirectiveInject, ɵɵngDeclareComponent, ChangeDetectionStrategy, ViewEncapsulation, ɵsetClassMetadata, Component, Optional, Input, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';
import { NzStringTemplateOutletDirective, NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NgIf, CommonModule } from '@angular/common';
import { DelonUtilModule } from '@delon/util';

class ResultComponent {
    constructor(directionality) {
        this.directionality = directionality;
        this.destroy$ = new Subject();
        this._type = '';
        this._icon = '';
        this.dir = 'ltr';
    }
    set type(value) {
        this._type = value;
        switch (value) {
            case 'success':
                this._icon = 'check-circle';
                break;
            case 'error':
                this._icon = 'close-circle';
                break;
            default:
                this._icon = value;
                break;
        }
    }
    ngOnInit() {
        var _a;
        this.dir = this.directionality.value;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
/** @nocollapse */ ResultComponent.ɵfac = function ResultComponent_Factory(t) { return new (t || ResultComponent)(ɵɵdirectiveInject(Directionality, 8)); };
/** @nocollapse */ ResultComponent.ɵcmp = ɵɵngDeclareComponent({ version: "11.1.1", type: ResultComponent, selector: "result", inputs: { type: "type", title: "title", description: "description", extra: "extra" }, host: { properties: { "class.result": "true", "class.result-rtl": "dir === 'rtl'" } }, exportAs: ["result"], ngImport: i0, template: "<div class=\"result__icon\">\n  <i nz-icon [nzType]=\"_icon\" class=\"result__icon-{{ _type }}\"></i>\n</div>\n<div class=\"result__title\">\n  <ng-container *nzStringTemplateOutlet=\"title\">{{ title }}</ng-container>\n</div>\n<div *ngIf=\"description\" class=\"result__desc\">\n  <ng-container *nzStringTemplateOutlet=\"description\">{{ description }}</ng-container>\n</div>\n<div *ngIf=\"extra\" class=\"result__extra\">\n  <ng-container *nzStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\n</div>\n<div class=\"result__actions\">\n  <ng-content></ng-content>\n</div>\n", directives: [{ type: NzIconDirective, selector: "[nz-icon]", inputs: ["nzRotate", "nzSpin", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ResultComponent, [{
        type: Component,
        args: [{
                selector: 'result',
                exportAs: 'result',
                templateUrl: './result.component.html',
                host: {
                    '[class.result]': 'true',
                    '[class.result-rtl]': `dir === 'rtl'`,
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: Directionality, decorators: [{
                type: Optional
            }] }]; }, { type: [{
            type: Input
        }], title: [{
            type: Input
        }], description: [{
            type: Input
        }], extra: [{
            type: Input
        }] }); })();

const COMPONENTS = [ResultComponent];
class ResultModule {
}
/** @nocollapse */ ResultModule.ɵmod = ɵɵdefineNgModule({ type: ResultModule });
/** @nocollapse */ ResultModule.ɵinj = ɵɵdefineInjector({ factory: function ResultModule_Factory(t) { return new (t || ResultModule)(); }, imports: [[CommonModule, NzIconModule, DelonUtilModule, NzOutletModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(ResultModule, { declarations: [ResultComponent], imports: [CommonModule, NzIconModule, DelonUtilModule, NzOutletModule], exports: [ResultComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ResultModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, NzIconModule, DelonUtilModule, NzOutletModule],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS],
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { ResultComponent, ResultModule };
//# sourceMappingURL=result.js.map
