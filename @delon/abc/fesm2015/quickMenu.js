import { __decorate, __metadata } from 'tslib';
import { Component, Input, HostListener, ChangeDetectionStrategy, ChangeDetectorRef, Renderer2, ElementRef, NgModule } from '@angular/core';
import { InputNumber, DelonUtilModule } from '@delon/util';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class QuickMenuComponent {
    /**
     * @param {?} cd
     * @param {?} el
     * @param {?} render
     */
    constructor(cd, el, render) {
        this.cd = cd;
        this.el = el;
        this.render = render;
        // region: fields
        this.icon = 'anticon anticon-question-circle-o';
        this.top = 120;
        this.width = 200;
        this.bgColor = '#fff';
        this.borderColor = '#ddd';
        this.show = false;
        this.ctrlStyle = {};
        this.initFlag = false;
    }
    /**
     * @return {?}
     */
    _click() {
        this.show = !this.show;
        this.setStyle();
    }
    /**
     * @return {?}
     */
    setStyle() {
        this.ctrlStyle = {
            'background-color': this.bgColor,
            'border-color': this.borderColor,
        };
        /** @type {?} */
        const res = [
            `top:${this.top}px`,
            `width:${this.width}px`,
            `background-color:${this.bgColor}`,
            `border-color:${this.borderColor}`,
            `margin-right:-${this.show ? 0 : this.width}px`,
        ];
        this.render.setAttribute(this.el.nativeElement, 'style', res.join(';'));
        this.cd.detectChanges();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initFlag = true;
        this.setStyle();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.initFlag)
            this.setStyle();
    }
}
QuickMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'quick-menu',
                template: `
  <div class="quick-menu__inner">
    <div class="quick-menu__ctrl" [ngStyle]="ctrlStyle">
      <i class="quick-menu__ctrl-icon" [ngClass]="icon"></i>
    </div>
    <ng-content></ng-content>
  </div>
  `,
                host: { '[class.quick-menu]': 'true' },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
QuickMenuComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: Renderer2 }
];
QuickMenuComponent.propDecorators = {
    icon: [{ type: Input }],
    top: [{ type: Input }],
    width: [{ type: Input }],
    bgColor: [{ type: Input }],
    borderColor: [{ type: Input }],
    _click: [{ type: HostListener, args: ['click',] }]
};
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], QuickMenuComponent.prototype, "top", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], QuickMenuComponent.prototype, "width", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [QuickMenuComponent];
class QuickMenuModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: QuickMenuModule, providers: [] };
    }
}
QuickMenuModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, DelonUtilModule],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { QuickMenuComponent, QuickMenuModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpY2tNZW51LmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AZGVsb24vYWJjL3F1aWNrLW1lbnUvcXVpY2stbWVudS5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9hYmMvcXVpY2stbWVudS9xdWljay1tZW51Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBIb3N0TGlzdGVuZXIsXG4gIE9uSW5pdCxcbiAgT25DaGFuZ2VzLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIFJlbmRlcmVyMixcbiAgRWxlbWVudFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdxdWljay1tZW51JyxcbiAgdGVtcGxhdGU6IGBcbiAgPGRpdiBjbGFzcz1cInF1aWNrLW1lbnVfX2lubmVyXCI+XG4gICAgPGRpdiBjbGFzcz1cInF1aWNrLW1lbnVfX2N0cmxcIiBbbmdTdHlsZV09XCJjdHJsU3R5bGVcIj5cbiAgICAgIDxpIGNsYXNzPVwicXVpY2stbWVudV9fY3RybC1pY29uXCIgW25nQ2xhc3NdPVwiaWNvblwiPjwvaT5cbiAgICA8L2Rpdj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvZGl2PlxuICBgLFxuICBob3N0OiB7ICdbY2xhc3MucXVpY2stbWVudV0nOiAndHJ1ZScgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBRdWlja01lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIC8vIHJlZ2lvbjogZmllbGRzXG5cbiAgQElucHV0KClcbiAgaWNvbjpcbiAgICB8IHN0cmluZ1xuICAgIHwgc3RyaW5nW11cbiAgICB8IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSAnYW50aWNvbiBhbnRpY29uLXF1ZXN0aW9uLWNpcmNsZS1vJztcblxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSB0b3AgPSAxMjA7XG5cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgd2lkdGggPSAyMDA7XG5cbiAgQElucHV0KCkgYmdDb2xvciA9ICcjZmZmJztcblxuICBASW5wdXQoKSBib3JkZXJDb2xvciA9ICcjZGRkJztcblxuICAvLyBlbmRyZWdpb25cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyOiBSZW5kZXJlcjIsXG4gICkge31cblxuICBwcml2YXRlIHNob3cgPSBmYWxzZTtcblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIF9jbGljaygpIHtcbiAgICB0aGlzLnNob3cgPSAhdGhpcy5zaG93O1xuICAgIHRoaXMuc2V0U3R5bGUoKTtcbiAgfVxuXG4gIGN0cmxTdHlsZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuICBwcml2YXRlIHNldFN0eWxlKCkge1xuICAgIHRoaXMuY3RybFN0eWxlID0ge1xuICAgICAgJ2JhY2tncm91bmQtY29sb3InOiB0aGlzLmJnQ29sb3IsXG4gICAgICAnYm9yZGVyLWNvbG9yJzogdGhpcy5ib3JkZXJDb2xvcixcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzOiBzdHJpbmdbXSA9IFtcbiAgICAgIGB0b3A6JHt0aGlzLnRvcH1weGAsXG4gICAgICBgd2lkdGg6JHt0aGlzLndpZHRofXB4YCxcbiAgICAgIGBiYWNrZ3JvdW5kLWNvbG9yOiR7dGhpcy5iZ0NvbG9yfWAsXG4gICAgICBgYm9yZGVyLWNvbG9yOiR7dGhpcy5ib3JkZXJDb2xvcn1gLFxuICAgICAgYG1hcmdpbi1yaWdodDotJHt0aGlzLnNob3cgPyAwIDogdGhpcy53aWR0aH1weGAsXG4gICAgXTtcbiAgICB0aGlzLnJlbmRlci5zZXRBdHRyaWJ1dGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnc3R5bGUnLCByZXMuam9pbignOycpKTtcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdEZsYWcgPSBmYWxzZTtcbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbml0RmxhZyA9IHRydWU7XG4gICAgdGhpcy5zZXRTdHlsZSgpO1xuICB9XG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmluaXRGbGFnKSB0aGlzLnNldFN0eWxlKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRGVsb25VdGlsTW9kdWxlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5pbXBvcnQgeyBRdWlja01lbnVDb21wb25lbnQgfSBmcm9tICcuL3F1aWNrLW1lbnUuY29tcG9uZW50JztcblxuY29uc3QgQ09NUE9ORU5UUyA9IFtRdWlja01lbnVDb21wb25lbnRdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBEZWxvblV0aWxNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTXSxcbiAgZXhwb3J0czogWy4uLkNPTVBPTkVOVFNdLFxufSlcbmV4cG9ydCBjbGFzcyBRdWlja01lbnVNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4geyBuZ01vZHVsZTogUXVpY2tNZW51TW9kdWxlLCBwcm92aWRlcnM6IFtdIH07XG4gIH1cbn1cbiJd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