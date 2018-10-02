/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, HostListener, ChangeDetectionStrategy, ChangeDetectorRef, Renderer2, ElementRef, } from '@angular/core';
import { InputNumber } from '@delon/util';
export class QuickMenuComponent {
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
tslib_1.__decorate([
    InputNumber(),
    tslib_1.__metadata("design:type", Object)
], QuickMenuComponent.prototype, "top", void 0);
tslib_1.__decorate([
    InputNumber(),
    tslib_1.__metadata("design:type", Object)
], QuickMenuComponent.prototype, "width", void 0);
if (false) {
    /** @type {?} */
    QuickMenuComponent.prototype.icon;
    /** @type {?} */
    QuickMenuComponent.prototype.top;
    /** @type {?} */
    QuickMenuComponent.prototype.width;
    /** @type {?} */
    QuickMenuComponent.prototype.bgColor;
    /** @type {?} */
    QuickMenuComponent.prototype.borderColor;
    /** @type {?} */
    QuickMenuComponent.prototype.show;
    /** @type {?} */
    QuickMenuComponent.prototype.ctrlStyle;
    /** @type {?} */
    QuickMenuComponent.prototype.initFlag;
    /** @type {?} */
    QuickMenuComponent.prototype.cd;
    /** @type {?} */
    QuickMenuComponent.prototype.el;
    /** @type {?} */
    QuickMenuComponent.prototype.render;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpY2stbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL3F1aWNrLW1lbnUvIiwic291cmNlcyI6WyJxdWljay1tZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFlBQVksRUFHWix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEdBQ1gsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQWdCMUMsTUFBTTs7Ozs7O0lBbUJKLFlBQ1UsSUFDQSxJQUNBO1FBRkEsT0FBRSxHQUFGLEVBQUU7UUFDRixPQUFFLEdBQUYsRUFBRTtRQUNGLFdBQU0sR0FBTixNQUFNOztvQkFmZ0IsbUNBQW1DO21CQUVyQyxHQUFHO3FCQUVELEdBQUc7dUJBRWhCLE1BQU07MkJBRUYsTUFBTTtvQkFVZCxLQUFLO3lCQVFtQixFQUFFO3dCQWtCdEIsS0FBSztLQTVCcEI7Ozs7SUFLSixNQUFNO1FBQ0osSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQ2pCOzs7O0lBR08sUUFBUTtRQUNkLElBQUksQ0FBQyxTQUFTLEdBQUc7WUFDZixrQkFBa0IsRUFBRSxJQUFJLENBQUMsT0FBTztZQUNoQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFdBQVc7U0FDakMsQ0FBQzs7UUFFRixNQUFNLEdBQUcsR0FBYTtZQUNwQixPQUFPLElBQUksQ0FBQyxHQUFHLElBQUk7WUFDbkIsU0FBUyxJQUFJLENBQUMsS0FBSyxJQUFJO1lBQ3ZCLG9CQUFvQixJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2xDLGdCQUFnQixJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2xDLGlCQUFpQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUk7U0FDaEQsQ0FBQztRQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQzs7Ozs7SUFJMUIsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUNqQjs7OztJQUNELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxRQUFRO1lBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQ3BDOzs7WUF4RUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUU7Ozs7Ozs7R0FPVDtnQkFDRCxJQUFJLEVBQUUsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUU7Z0JBQ3RDLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBcEJDLGlCQUFpQjtZQUVqQixVQUFVO1lBRFYsU0FBUzs7O21CQXVCUixLQUFLO2tCQU1MLEtBQUs7b0JBRUwsS0FBSztzQkFFTCxLQUFLOzBCQUVMLEtBQUs7cUJBWUwsWUFBWSxTQUFDLE9BQU87OztJQWxCWCxXQUFXLEVBQUU7Ozs7SUFFYixXQUFXLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgT25Jbml0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBSZW5kZXJlcjIsXHJcbiAgRWxlbWVudFJlZixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdxdWljay1tZW51JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxkaXYgY2xhc3M9XCJxdWljay1tZW51X19pbm5lclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInF1aWNrLW1lbnVfX2N0cmxcIiBbbmdTdHlsZV09XCJjdHJsU3R5bGVcIj5cclxuICAgICAgPGkgY2xhc3M9XCJxdWljay1tZW51X19jdHJsLWljb25cIiBbbmdDbGFzc109XCJpY29uXCI+PC9pPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgPC9kaXY+XHJcbiAgYCxcclxuICBob3N0OiB7ICdbY2xhc3MucXVpY2stbWVudV0nOiAndHJ1ZScgfSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIFF1aWNrTWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICAvLyByZWdpb246IGZpZWxkc1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGljb246XHJcbiAgICB8IHN0cmluZ1xyXG4gICAgfCBzdHJpbmdbXVxyXG4gICAgfCB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0gJ2FudGljb24gYW50aWNvbi1xdWVzdGlvbi1jaXJjbGUtbyc7XHJcblxyXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHRvcCA9IDEyMDtcclxuXHJcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgd2lkdGggPSAyMDA7XHJcblxyXG4gIEBJbnB1dCgpIGJnQ29sb3IgPSAnI2ZmZic7XHJcblxyXG4gIEBJbnB1dCgpIGJvcmRlckNvbG9yID0gJyNkZGQnO1xyXG5cclxuICAvLyBlbmRyZWdpb25cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHJlbmRlcjogUmVuZGVyZXIyLFxyXG4gICkge31cclxuXHJcbiAgcHJpdmF0ZSBzaG93ID0gZmFsc2U7XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcclxuICBfY2xpY2soKSB7XHJcbiAgICB0aGlzLnNob3cgPSAhdGhpcy5zaG93O1xyXG4gICAgdGhpcy5zZXRTdHlsZSgpO1xyXG4gIH1cclxuXHJcbiAgY3RybFN0eWxlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XHJcbiAgcHJpdmF0ZSBzZXRTdHlsZSgpIHtcclxuICAgIHRoaXMuY3RybFN0eWxlID0ge1xyXG4gICAgICAnYmFja2dyb3VuZC1jb2xvcic6IHRoaXMuYmdDb2xvcixcclxuICAgICAgJ2JvcmRlci1jb2xvcic6IHRoaXMuYm9yZGVyQ29sb3IsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlczogc3RyaW5nW10gPSBbXHJcbiAgICAgIGB0b3A6JHt0aGlzLnRvcH1weGAsXHJcbiAgICAgIGB3aWR0aDoke3RoaXMud2lkdGh9cHhgLFxyXG4gICAgICBgYmFja2dyb3VuZC1jb2xvcjoke3RoaXMuYmdDb2xvcn1gLFxyXG4gICAgICBgYm9yZGVyLWNvbG9yOiR7dGhpcy5ib3JkZXJDb2xvcn1gLFxyXG4gICAgICBgbWFyZ2luLXJpZ2h0Oi0ke3RoaXMuc2hvdyA/IDAgOiB0aGlzLndpZHRofXB4YCxcclxuICAgIF07XHJcbiAgICB0aGlzLnJlbmRlci5zZXRBdHRyaWJ1dGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnc3R5bGUnLCByZXMuam9pbignOycpKTtcclxuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0RmxhZyA9IGZhbHNlO1xyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pbml0RmxhZyA9IHRydWU7XHJcbiAgICB0aGlzLnNldFN0eWxlKCk7XHJcbiAgfVxyXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaW5pdEZsYWcpIHRoaXMuc2V0U3R5bGUoKTtcclxuICB9XHJcbn1cclxuIl19