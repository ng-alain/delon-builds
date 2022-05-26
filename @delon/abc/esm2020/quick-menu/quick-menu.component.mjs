import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { InputBoolean, InputNumber } from '@delon/util/decorator';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/core/outlet";
import * as i3 from "ng-zorro-antd/icon";
export class QuickMenuComponent {
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
QuickMenuComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.10", ngImport: i0, type: QuickMenuComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
QuickMenuComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.10", type: QuickMenuComponent, selector: "quick-menu", inputs: { icon: "icon", top: "top", width: "width", bgColor: "bgColor", borderColor: "borderColor", expand: "expand" }, outputs: { expandChange: "expandChange" }, host: { listeners: { "click": "_click()" }, properties: { "class.quick-menu": "true" } }, exportAs: ["quickMenu"], usesOnChanges: true, ngImport: i0, template: "<div class=\"quick-menu__inner\">\n  <div class=\"quick-menu__ctrl\" [ngStyle]=\"ctrlStyle\">\n    <div class=\"quick-menu__ctrl-icon\">\n      <ng-container *nzStringTemplateOutlet=\"icon\">\n        <i nz-icon [nzType]=\"$any(icon)\"></i>\n      </ng-container>\n    </div>\n  </div>\n  <ng-content></ng-content>\n</div>\n", directives: [{ type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { type: i2.NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { type: i3.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    InputNumber()
], QuickMenuComponent.prototype, "top", void 0);
__decorate([
    InputNumber()
], QuickMenuComponent.prototype, "width", void 0);
__decorate([
    InputBoolean()
], QuickMenuComponent.prototype, "expand", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.10", ngImport: i0, type: QuickMenuComponent, decorators: [{
            type: Component,
            args: [{ selector: 'quick-menu', exportAs: 'quickMenu', host: {
                        '[class.quick-menu]': 'true',
                        '(click)': '_click()'
                    }, preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div class=\"quick-menu__inner\">\n  <div class=\"quick-menu__ctrl\" [ngStyle]=\"ctrlStyle\">\n    <div class=\"quick-menu__ctrl-icon\">\n      <ng-container *nzStringTemplateOutlet=\"icon\">\n        <i nz-icon [nzType]=\"$any(icon)\"></i>\n      </ng-container>\n    </div>\n  </div>\n  <ng-content></ng-content>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { icon: [{
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
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpY2stbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvcXVpY2stbWVudS9xdWljay1tZW51LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9xdWljay1tZW51L3F1aWNrLW1lbnUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUVULFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUdOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQWdCLFlBQVksRUFBRSxXQUFXLEVBQWUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7QUFjN0YsTUFBTSxPQUFPLGtCQUFrQjtJQUs3QixZQUFvQixHQUFzQixFQUFVLEVBQWMsRUFBVSxNQUFpQjtRQUF6RSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFVLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQzdGLGNBQVMsR0FBMEMsRUFBRSxDQUFDO1FBRTdDLFNBQUksR0FBK0IsaUJBQWlCLENBQUM7UUFDdEMsUUFBRyxHQUFHLEdBQUcsQ0FBQztRQUNWLFVBQUssR0FBRyxHQUFHLENBQUM7UUFHWCxXQUFNLEdBQVksS0FBSyxDQUFDO1FBQzlCLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUV0RCxTQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2IsYUFBUSxHQUFHLEtBQUssQ0FBQztJQVp1RSxDQUFDO0lBY2pHLE1BQU07UUFDSixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFTyxRQUFRO1FBQ2QsSUFBSSxDQUFDLFNBQVMsR0FBRztZQUNmLGtCQUFrQixFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ2hDLGNBQWMsRUFBRSxJQUFJLENBQUMsV0FBVztTQUNqQyxDQUFDO1FBRUYsTUFBTSxHQUFHLEdBQWE7WUFDcEIsT0FBTyxJQUFJLENBQUMsR0FBRyxJQUFJO1lBQ25CLFNBQVMsSUFBSSxDQUFDLEtBQUssSUFBSTtZQUN2QixpQkFBaUIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJO1NBQ2hELENBQUM7UUFDRixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsR0FBRyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7U0FDOUM7UUFDRCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7U0FDOUM7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDeEIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNqQjtJQUNILENBQUM7O2dIQXhEVSxrQkFBa0I7b0dBQWxCLGtCQUFrQiw2VkM3Qi9CLHNVQVVBO0FENEIwQjtJQUFkLFdBQVcsRUFBRTsrQ0FBVztBQUNWO0lBQWQsV0FBVyxFQUFFO2lEQUFhO0FBR1g7SUFBZixZQUFZLEVBQUU7a0RBQXlCOzRGQWJ0QyxrQkFBa0I7a0JBWjlCLFNBQVM7K0JBQ0UsWUFBWSxZQUNaLFdBQVcsUUFFZjt3QkFDSixvQkFBb0IsRUFBRSxNQUFNO3dCQUM1QixTQUFTLEVBQUUsVUFBVTtxQkFDdEIsdUJBQ29CLEtBQUssbUJBQ1QsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSTt5SkFVNUIsSUFBSTtzQkFBWixLQUFLO2dCQUNrQixHQUFHO3NCQUExQixLQUFLO2dCQUNrQixLQUFLO3NCQUE1QixLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUNtQixNQUFNO3NCQUE5QixLQUFLO2dCQUNhLFlBQVk7c0JBQTlCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciwgTnVtYmVySW5wdXQgfSBmcm9tICdAZGVsb24vdXRpbC9kZWNvcmF0b3InO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdxdWljay1tZW51JyxcbiAgZXhwb3J0QXM6ICdxdWlja01lbnUnLFxuICB0ZW1wbGF0ZVVybDogJy4vcXVpY2stbWVudS5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLnF1aWNrLW1lbnVdJzogJ3RydWUnLFxuICAgICcoY2xpY2spJzogJ19jbGljaygpJ1xuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgUXVpY2tNZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfdG9wOiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3dpZHRoOiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2V4cGFuZDogQm9vbGVhbklucHV0O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXI6IFJlbmRlcmVyMikge31cbiAgY3RybFN0eWxlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHVuZGVmaW5lZCB9ID0ge307XG5cbiAgQElucHV0KCkgaWNvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gPSAncXVlc3Rpb24tY2lyY2xlJztcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgdG9wID0gMTIwO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSB3aWR0aCA9IDIwMDtcbiAgQElucHV0KCkgYmdDb2xvcj86IHN0cmluZztcbiAgQElucHV0KCkgYm9yZGVyQ29sb3I/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBleHBhbmQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGV4cGFuZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBwcml2YXRlIHNob3cgPSBmYWxzZTtcbiAgcHJpdmF0ZSBpbml0RmxhZyA9IGZhbHNlO1xuXG4gIF9jbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLnNob3cgPSAhdGhpcy5zaG93O1xuICAgIHRoaXMuZXhwYW5kQ2hhbmdlLmVtaXQodGhpcy5zaG93KTtcbiAgICB0aGlzLnNldFN0eWxlKCk7XG4gIH1cblxuICBwcml2YXRlIHNldFN0eWxlKCk6IHZvaWQge1xuICAgIHRoaXMuY3RybFN0eWxlID0ge1xuICAgICAgJ2JhY2tncm91bmQtY29sb3InOiB0aGlzLmJnQ29sb3IsXG4gICAgICAnYm9yZGVyLWNvbG9yJzogdGhpcy5ib3JkZXJDb2xvclxuICAgIH07XG5cbiAgICBjb25zdCByZXM6IHN0cmluZ1tdID0gW1xuICAgICAgYHRvcDoke3RoaXMudG9wfXB4YCxcbiAgICAgIGB3aWR0aDoke3RoaXMud2lkdGh9cHhgLFxuICAgICAgYG1hcmdpbi1yaWdodDotJHt0aGlzLnNob3cgPyAwIDogdGhpcy53aWR0aH1weGBcbiAgICBdO1xuICAgIGlmICh0aGlzLmJnQ29sb3IpIHtcbiAgICAgIHJlcy5wdXNoKGBiYWNrZ3JvdW5kLWNvbG9yOiR7dGhpcy5iZ0NvbG9yfWApO1xuICAgIH1cbiAgICBpZiAodGhpcy5ib3JkZXJDb2xvcikge1xuICAgICAgcmVzLnB1c2goYGJvcmRlci1jb2xvcjoke3RoaXMuYm9yZGVyQ29sb3J9YCk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdzdHlsZScsIHJlcy5qb2luKCc7JykpO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaW5pdEZsYWcgPSB0cnVlO1xuICAgIHRoaXMuc2V0U3R5bGUoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuc2hvdyA9IHRoaXMuZXhwYW5kO1xuICAgIGlmICh0aGlzLmluaXRGbGFnKSB7XG4gICAgICB0aGlzLnNldFN0eWxlKCk7XG4gICAgfVxuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwicXVpY2stbWVudV9faW5uZXJcIj5cbiAgPGRpdiBjbGFzcz1cInF1aWNrLW1lbnVfX2N0cmxcIiBbbmdTdHlsZV09XCJjdHJsU3R5bGVcIj5cbiAgICA8ZGl2IGNsYXNzPVwicXVpY2stbWVudV9fY3RybC1pY29uXCI+XG4gICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiaWNvblwiPlxuICAgICAgICA8aSBuei1pY29uIFtuelR5cGVdPVwiJGFueShpY29uKVwiPjwvaT5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9kaXY+XG4iXX0=