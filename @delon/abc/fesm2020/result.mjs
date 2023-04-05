import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, ViewEncapsulation, Optional, Input, NgModule } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import * as i1 from '@angular/cdk/bidi';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i3 from 'ng-zorro-antd/icon';
import { NzIconModule } from 'ng-zorro-antd/icon';
import * as i4 from 'ng-zorro-antd/core/outlet';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';

class ResultComponent {
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
    constructor(directionality) {
        this.directionality = directionality;
        this.destroy$ = new Subject();
        this._type = '';
        this._icon = '';
        this.dir = 'ltr';
    }
    ngOnInit() {
        this.dir = this.directionality.value;
        this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
ResultComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.5", ngImport: i0, type: ResultComponent, deps: [{ token: i1.Directionality, optional: true }], target: i0.ɵɵFactoryTarget.Component });
ResultComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.5", type: ResultComponent, selector: "result", inputs: { type: "type", title: "title", description: "description", extra: "extra" }, host: { properties: { "class.result": "true", "class.result-rtl": "dir === 'rtl'" } }, exportAs: ["result"], ngImport: i0, template: "<div class=\"result__icon\">\n  <i nz-icon [nzType]=\"_icon\" class=\"result__icon-{{ _type }}\"></i>\n</div>\n<div class=\"result__title\">\n  <ng-container *nzStringTemplateOutlet=\"title\">{{ title }}</ng-container>\n</div>\n<div *ngIf=\"description\" class=\"result__desc\">\n  <ng-container *nzStringTemplateOutlet=\"description\">{{ description }}</ng-container>\n</div>\n<div *ngIf=\"extra\" class=\"result__extra\">\n  <ng-container *nzStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\n</div>\n<div class=\"result__actions\">\n  <ng-content></ng-content>\n</div>\n", dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i3.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "directive", type: i4.NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.5", ngImport: i0, type: ResultComponent, decorators: [{
            type: Component,
            args: [{ selector: 'result', exportAs: 'result', host: {
                        '[class.result]': 'true',
                        '[class.result-rtl]': `dir === 'rtl'`
                    }, preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div class=\"result__icon\">\n  <i nz-icon [nzType]=\"_icon\" class=\"result__icon-{{ _type }}\"></i>\n</div>\n<div class=\"result__title\">\n  <ng-container *nzStringTemplateOutlet=\"title\">{{ title }}</ng-container>\n</div>\n<div *ngIf=\"description\" class=\"result__desc\">\n  <ng-container *nzStringTemplateOutlet=\"description\">{{ description }}</ng-container>\n</div>\n<div *ngIf=\"extra\" class=\"result__extra\">\n  <ng-container *nzStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\n</div>\n<div class=\"result__actions\">\n  <ng-content></ng-content>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.Directionality, decorators: [{
                    type: Optional
                }] }]; }, propDecorators: { type: [{
                type: Input
            }], title: [{
                type: Input
            }], description: [{
                type: Input
            }], extra: [{
                type: Input
            }] } });

const COMPONENTS = [ResultComponent];
class ResultModule {
}
ResultModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.5", ngImport: i0, type: ResultModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ResultModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.5", ngImport: i0, type: ResultModule, declarations: [ResultComponent], imports: [CommonModule, NzIconModule, NzOutletModule], exports: [ResultComponent] });
ResultModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.5", ngImport: i0, type: ResultModule, imports: [CommonModule, NzIconModule, NzOutletModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.5", ngImport: i0, type: ResultModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, NzIconModule, NzOutletModule],
                    declarations: COMPONENTS,
                    exports: COMPONENTS
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { ResultComponent, ResultModule };
//# sourceMappingURL=result.mjs.map
