import * as i0 from '@angular/core';
import { inject, ElementRef, Renderer2, input, numberAttribute, booleanAttribute, output, signal, computed, effect, ViewEncapsulation, ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { NzStringTemplateOutletDirective, NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';
import { CommonModule } from '@angular/common';

class QuickMenuComponent {
    el = inject(ElementRef).nativeElement;
    render = inject(Renderer2);
    icon = input('question-circle', ...(ngDevMode ? [{ debugName: "icon" }] : []));
    top = input(120, { ...(ngDevMode ? { debugName: "top" } : {}), transform: numberAttribute });
    width = input(200, { ...(ngDevMode ? { debugName: "width" } : {}), transform: numberAttribute });
    bgColor = input(...(ngDevMode ? [undefined, { debugName: "bgColor" }] : []));
    borderColor = input(...(ngDevMode ? [undefined, { debugName: "borderColor" }] : []));
    expand = input(false, { ...(ngDevMode ? { debugName: "expand" } : {}), transform: booleanAttribute });
    expandChange = output();
    show = signal(false, ...(ngDevMode ? [{ debugName: "show" }] : []));
    ctrlStyle = computed(() => {
        const ret = {
            'background-color': this.bgColor(),
            'border-color': this.borderColor()
        };
        return ret;
    }, ...(ngDevMode ? [{ debugName: "ctrlStyle" }] : []));
    constructor() {
        effect(() => {
            this.show.set(this.expand());
        });
        effect(() => {
            const res = [
                `top:${this.top()}px`,
                `width:${this.width()}px`,
                `margin-right:-${this.show() ? 0 : this.width()}px`
            ];
            if (this.bgColor) {
                res.push(`background-color:${this.bgColor()}`);
            }
            if (this.borderColor) {
                res.push(`border-color:${this.borderColor()}`);
            }
            this.render.setAttribute(this.el, 'style', res.join(';'));
        });
    }
    _click() {
        this.show.set(!this.show());
        this.expandChange.emit(this.show());
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.0.8", ngImport: i0, type: QuickMenuComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "21.0.8", type: QuickMenuComponent, isStandalone: true, selector: "quick-menu", inputs: { icon: { classPropertyName: "icon", publicName: "icon", isSignal: true, isRequired: false, transformFunction: null }, top: { classPropertyName: "top", publicName: "top", isSignal: true, isRequired: false, transformFunction: null }, width: { classPropertyName: "width", publicName: "width", isSignal: true, isRequired: false, transformFunction: null }, bgColor: { classPropertyName: "bgColor", publicName: "bgColor", isSignal: true, isRequired: false, transformFunction: null }, borderColor: { classPropertyName: "borderColor", publicName: "borderColor", isSignal: true, isRequired: false, transformFunction: null }, expand: { classPropertyName: "expand", publicName: "expand", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { expandChange: "expandChange" }, host: { listeners: { "click": "_click()" }, classAttribute: "quick-menu" }, exportAs: ["quickMenu"], ngImport: i0, template: `
    <div class="quick-menu__inner">
      <div class="quick-menu__ctrl" [style]="ctrlStyle()">
        <div class="quick-menu__ctrl-icon">
          @let ic = icon();
          <ng-container *nzStringTemplateOutlet="ic">
            <nz-icon [nzType]="$any(ic)" />
          </ng-container>
        </div>
      </div>
      <ng-content />
    </div>
  `, isInline: true, dependencies: [{ kind: "directive", type: NzIconDirective, selector: "nz-icon,[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "directive", type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.0.8", ngImport: i0, type: QuickMenuComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'quick-menu',
                    exportAs: 'quickMenu',
                    template: `
    <div class="quick-menu__inner">
      <div class="quick-menu__ctrl" [style]="ctrlStyle()">
        <div class="quick-menu__ctrl-icon">
          @let ic = icon();
          <ng-container *nzStringTemplateOutlet="ic">
            <nz-icon [nzType]="$any(ic)" />
          </ng-container>
        </div>
      </div>
      <ng-content />
    </div>
  `,
                    host: {
                        class: 'quick-menu',
                        '(click)': '_click()'
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    imports: [NzIconDirective, NzStringTemplateOutletDirective]
                }]
        }], ctorParameters: () => [], propDecorators: { icon: [{ type: i0.Input, args: [{ isSignal: true, alias: "icon", required: false }] }], top: [{ type: i0.Input, args: [{ isSignal: true, alias: "top", required: false }] }], width: [{ type: i0.Input, args: [{ isSignal: true, alias: "width", required: false }] }], bgColor: [{ type: i0.Input, args: [{ isSignal: true, alias: "bgColor", required: false }] }], borderColor: [{ type: i0.Input, args: [{ isSignal: true, alias: "borderColor", required: false }] }], expand: [{ type: i0.Input, args: [{ isSignal: true, alias: "expand", required: false }] }], expandChange: [{ type: i0.Output, args: ["expandChange"] }] } });

const COMPONENTS = [QuickMenuComponent];
class QuickMenuModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.0.8", ngImport: i0, type: QuickMenuModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "21.0.8", ngImport: i0, type: QuickMenuModule, imports: [CommonModule, NzIconModule, NzOutletModule, QuickMenuComponent], exports: [QuickMenuComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "21.0.8", ngImport: i0, type: QuickMenuModule, imports: [CommonModule, NzIconModule, NzOutletModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.0.8", ngImport: i0, type: QuickMenuModule, decorators: [{
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
