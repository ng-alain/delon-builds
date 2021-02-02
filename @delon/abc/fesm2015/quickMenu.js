import { __decorate, __metadata } from 'tslib';
import * as i0 from '@angular/core';
import { EventEmitter, ɵɵdirectiveInject, ChangeDetectorRef, ElementRef, Renderer2, ɵɵngDeclareComponent, ChangeDetectionStrategy, ViewEncapsulation, ɵsetClassMetadata, Component, Input, Output, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { InputNumber, InputBoolean } from '@delon/util/decorator';
import { NgStyle, CommonModule } from '@angular/common';
import { NzStringTemplateOutletDirective, NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';

class QuickMenuComponent {
    constructor(cdr, el, render) {
        this.cdr = cdr;
        this.el = el;
        this.render = render;
        this.ctrlStyle = {};
        this.icon = 'question-circle';
        this.top = 120;
        this.width = 200;
        this.expand = false;
        this.expandChange = new EventEmitter();
        this.show = false;
        this.initFlag = false;
    }
    _click() {
        this.show = !this.show;
        this.expandChange.emit(this.show);
        this.setStyle();
    }
    setStyle() {
        this.ctrlStyle = {
            'background-color': this.bgColor,
            'border-color': this.borderColor,
        };
        const res = [`top:${this.top}px`, `width:${this.width}px`, `margin-right:-${this.show ? 0 : this.width}px`];
        if (this.bgColor) {
            res.push(`background-color:${this.bgColor}`);
        }
        if (this.borderColor) {
            res.push(`border-color:${this.borderColor}`);
        }
        this.render.setAttribute(this.el.nativeElement, 'style', res.join(';'));
        this.cdr.detectChanges();
    }
    ngOnInit() {
        this.initFlag = true;
        this.setStyle();
    }
    ngOnChanges() {
        this.show = this.expand;
        if (this.initFlag) {
            this.setStyle();
        }
    }
}
/** @nocollapse */ QuickMenuComponent.ɵfac = function QuickMenuComponent_Factory(t) { return new (t || QuickMenuComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2)); };
/** @nocollapse */ QuickMenuComponent.ɵcmp = ɵɵngDeclareComponent({ version: "11.1.1", type: QuickMenuComponent, selector: "quick-menu", inputs: { icon: "icon", top: "top", width: "width", bgColor: "bgColor", borderColor: "borderColor", expand: "expand" }, outputs: { expandChange: "expandChange" }, host: { listeners: { "click": "_click()" }, properties: { "class.quick-menu": "true" } }, exportAs: ["quickMenu"], usesOnChanges: true, ngImport: i0, template: "<div class=\"quick-menu__inner\">\n  <div class=\"quick-menu__ctrl\" [ngStyle]=\"ctrlStyle\">\n    <div class=\"quick-menu__ctrl-icon\">\n      <ng-container *nzStringTemplateOutlet=\"icon\">\n        <i nz-icon [nzType]=\"icon\"></i>\n      </ng-container>\n    </div>\n  </div>\n  <ng-content></ng-content>\n</div>\n", directives: [{ type: NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { type: NzIconDirective, selector: "[nz-icon]", inputs: ["nzRotate", "nzSpin", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], QuickMenuComponent.prototype, "top", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], QuickMenuComponent.prototype, "width", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], QuickMenuComponent.prototype, "expand", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(QuickMenuComponent, [{
        type: Component,
        args: [{
                selector: 'quick-menu',
                exportAs: 'quickMenu',
                templateUrl: './quick-menu.component.html',
                host: {
                    '[class.quick-menu]': 'true',
                    '(click)': '_click()',
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: Renderer2 }]; }, { icon: [{
            type: Input
        }], top: [{
            type: Input
        }], width: [{
            type: Input
        }], bgColor: [{
            type: Input
        }], borderColor: [{
            type: Input
        }], expand: [{
            type: Input
        }], expandChange: [{
            type: Output
        }] }); })();

const COMPONENTS = [QuickMenuComponent];
class QuickMenuModule {
}
/** @nocollapse */ QuickMenuModule.ɵmod = ɵɵdefineNgModule({ type: QuickMenuModule });
/** @nocollapse */ QuickMenuModule.ɵinj = ɵɵdefineInjector({ factory: function QuickMenuModule_Factory(t) { return new (t || QuickMenuModule)(); }, imports: [[CommonModule, NzIconModule, NzOutletModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(QuickMenuModule, { declarations: [QuickMenuComponent], imports: [CommonModule, NzIconModule, NzOutletModule], exports: [QuickMenuComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(QuickMenuModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, NzIconModule, NzOutletModule],
                declarations: COMPONENTS,
                exports: COMPONENTS,
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { QuickMenuComponent, QuickMenuModule };
//# sourceMappingURL=quickMenu.js.map
