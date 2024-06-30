import { NgStyle, CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { inject, ChangeDetectorRef, ElementRef, Renderer2, EventEmitter, numberAttribute, booleanAttribute, Component, ChangeDetectionStrategy, ViewEncapsulation, Input, Output, NgModule } from '@angular/core';
import { NzStringTemplateOutletDirective, NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';

class QuickMenuComponent {
    constructor() {
        this.cdr = inject(ChangeDetectorRef);
        this.el = inject(ElementRef).nativeElement;
        this.render = inject(Renderer2);
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
            'border-color': this.borderColor
        };
        const res = [
            `top:${this.top}px`,
            `width:${this.width}px`,
            `margin-right:-${this.show ? 0 : this.width}px`
        ];
        if (this.bgColor) {
            res.push(`background-color:${this.bgColor}`);
        }
        if (this.borderColor) {
            res.push(`border-color:${this.borderColor}`);
        }
        this.render.setAttribute(this.el, 'style', res.join(';'));
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.5", ngImport: i0, type: QuickMenuComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "18.0.5", type: QuickMenuComponent, isStandalone: true, selector: "quick-menu", inputs: { icon: "icon", top: ["top", "top", numberAttribute], width: ["width", "width", numberAttribute], bgColor: "bgColor", borderColor: "borderColor", expand: ["expand", "expand", booleanAttribute] }, outputs: { expandChange: "expandChange" }, host: { listeners: { "click": "_click()" }, properties: { "class.quick-menu": "true" } }, exportAs: ["quickMenu"], usesOnChanges: true, ngImport: i0, template: "<div class=\"quick-menu__inner\">\n  <div class=\"quick-menu__ctrl\" [ngStyle]=\"ctrlStyle\">\n    <div class=\"quick-menu__ctrl-icon\">\n      <ng-container *nzStringTemplateOutlet=\"icon\">\n        <i nz-icon [nzType]=\"$any(icon)\"></i>\n      </ng-container>\n    </div>\n  </div>\n  <ng-content />\n</div>\n", dependencies: [{ kind: "directive", type: NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "directive", type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.5", ngImport: i0, type: QuickMenuComponent, decorators: [{
            type: Component,
            args: [{ selector: 'quick-menu', exportAs: 'quickMenu', host: {
                        '[class.quick-menu]': 'true',
                        '(click)': '_click()'
                    }, preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, standalone: true, imports: [NgStyle, NzIconDirective, NzStringTemplateOutletDirective], template: "<div class=\"quick-menu__inner\">\n  <div class=\"quick-menu__ctrl\" [ngStyle]=\"ctrlStyle\">\n    <div class=\"quick-menu__ctrl-icon\">\n      <ng-container *nzStringTemplateOutlet=\"icon\">\n        <i nz-icon [nzType]=\"$any(icon)\"></i>\n      </ng-container>\n    </div>\n  </div>\n  <ng-content />\n</div>\n" }]
        }], propDecorators: { icon: [{
                type: Input
            }], top: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], width: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], bgColor: [{
                type: Input
            }], borderColor: [{
                type: Input
            }], expand: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], expandChange: [{
                type: Output
            }] } });

const COMPONENTS = [QuickMenuComponent];
class QuickMenuModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.5", ngImport: i0, type: QuickMenuModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.0.5", ngImport: i0, type: QuickMenuModule, imports: [CommonModule, NzIconModule, NzOutletModule, QuickMenuComponent], exports: [QuickMenuComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.0.5", ngImport: i0, type: QuickMenuModule, imports: [CommonModule, NzIconModule, NzOutletModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.5", ngImport: i0, type: QuickMenuModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, NzIconModule, NzOutletModule, ...COMPONENTS],
                    exports: COMPONENTS
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { QuickMenuComponent, QuickMenuModule };
//# sourceMappingURL=quick-menu.mjs.map
