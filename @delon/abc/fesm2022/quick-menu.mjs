import * as i0 from '@angular/core';
import { inject, ChangeDetectorRef, ElementRef, Renderer2, EventEmitter, booleanAttribute, numberAttribute, Output, Input, ViewEncapsulation, ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { NzStringTemplateOutletDirective, NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';
import { CommonModule } from '@angular/common';

class QuickMenuComponent {
    cdr = inject(ChangeDetectorRef);
    el = inject(ElementRef).nativeElement;
    render = inject(Renderer2);
    ctrlStyle = {};
    icon = 'question-circle';
    top = 120;
    width = 200;
    bgColor;
    borderColor;
    expand = false;
    expandChange = new EventEmitter();
    show = false;
    initFlag = false;
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.2", ngImport: i0, type: QuickMenuComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "20.1.2", type: QuickMenuComponent, isStandalone: true, selector: "quick-menu", inputs: { icon: "icon", top: ["top", "top", numberAttribute], width: ["width", "width", numberAttribute], bgColor: "bgColor", borderColor: "borderColor", expand: ["expand", "expand", booleanAttribute] }, outputs: { expandChange: "expandChange" }, host: { listeners: { "click": "_click()" }, properties: { "class.quick-menu": "true" } }, exportAs: ["quickMenu"], usesOnChanges: true, ngImport: i0, template: "<div class=\"quick-menu__inner\">\n  <div class=\"quick-menu__ctrl\" [style]=\"ctrlStyle\">\n    <div class=\"quick-menu__ctrl-icon\">\n      <ng-container *nzStringTemplateOutlet=\"icon\">\n        <nz-icon [nzType]=\"$any(icon)\" />\n      </ng-container>\n    </div>\n  </div>\n  <ng-content />\n</div>\n", dependencies: [{ kind: "directive", type: NzIconDirective, selector: "nz-icon,[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "directive", type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.2", ngImport: i0, type: QuickMenuComponent, decorators: [{
            type: Component,
            args: [{ selector: 'quick-menu', exportAs: 'quickMenu', host: {
                        '[class.quick-menu]': 'true',
                        '(click)': '_click()'
                    }, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, imports: [NzIconDirective, NzStringTemplateOutletDirective], template: "<div class=\"quick-menu__inner\">\n  <div class=\"quick-menu__ctrl\" [style]=\"ctrlStyle\">\n    <div class=\"quick-menu__ctrl-icon\">\n      <ng-container *nzStringTemplateOutlet=\"icon\">\n        <nz-icon [nzType]=\"$any(icon)\" />\n      </ng-container>\n    </div>\n  </div>\n  <ng-content />\n</div>\n" }]
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.2", ngImport: i0, type: QuickMenuModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "20.1.2", ngImport: i0, type: QuickMenuModule, imports: [CommonModule, NzIconModule, NzOutletModule, QuickMenuComponent], exports: [QuickMenuComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "20.1.2", ngImport: i0, type: QuickMenuModule, imports: [CommonModule, NzIconModule, NzOutletModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.2", ngImport: i0, type: QuickMenuModule, decorators: [{
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
