import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { InputBoolean, InputNumber } from '@delon/util/decorator';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/icon";
import * as i3 from "ng-zorro-antd/core/outlet";
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
QuickMenuComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: QuickMenuComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
QuickMenuComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.0", type: QuickMenuComponent, selector: "quick-menu", inputs: { icon: "icon", top: "top", width: "width", bgColor: "bgColor", borderColor: "borderColor", expand: "expand" }, outputs: { expandChange: "expandChange" }, host: { listeners: { "click": "_click()" }, properties: { "class.quick-menu": "true" } }, exportAs: ["quickMenu"], usesOnChanges: true, ngImport: i0, template: "<div class=\"quick-menu__inner\">\n  <div class=\"quick-menu__ctrl\" [ngStyle]=\"ctrlStyle\">\n    <div class=\"quick-menu__ctrl-icon\">\n      <ng-container *nzStringTemplateOutlet=\"icon\">\n        <i nz-icon [nzType]=\"$any(icon)\"></i>\n      </ng-container>\n    </div>\n  </div>\n  <ng-content></ng-content>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i2.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "directive", type: i3.NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    InputNumber()
], QuickMenuComponent.prototype, "top", void 0);
__decorate([
    InputNumber()
], QuickMenuComponent.prototype, "width", void 0);
__decorate([
    InputBoolean()
], QuickMenuComponent.prototype, "expand", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: QuickMenuComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpY2stbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvcXVpY2stbWVudS9xdWljay1tZW51LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9xdWljay1tZW51L3F1aWNrLW1lbnUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUVULFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUdOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQWdCLFlBQVksRUFBRSxXQUFXLEVBQWUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7QUFjN0YsTUFBTSxPQUFPLGtCQUFrQjtJQUs3QixZQUFvQixHQUFzQixFQUFVLEVBQWMsRUFBVSxNQUFpQjtRQUF6RSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFVLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQzdGLGNBQVMsR0FBMEMsRUFBRSxDQUFDO1FBRTdDLFNBQUksR0FBK0IsaUJBQWlCLENBQUM7UUFDdEMsUUFBRyxHQUFHLEdBQUcsQ0FBQztRQUNWLFVBQUssR0FBRyxHQUFHLENBQUM7UUFHWCxXQUFNLEdBQVksS0FBSyxDQUFDO1FBQzlCLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUV0RCxTQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2IsYUFBUSxHQUFHLEtBQUssQ0FBQztJQVp1RSxDQUFDO0lBY2pHLE1BQU07UUFDSixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFTyxRQUFRO1FBQ2QsSUFBSSxDQUFDLFNBQVMsR0FBRztZQUNmLGtCQUFrQixFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ2hDLGNBQWMsRUFBRSxJQUFJLENBQUMsV0FBVztTQUNqQyxDQUFDO1FBRUYsTUFBTSxHQUFHLEdBQWE7WUFDcEIsT0FBTyxJQUFJLENBQUMsR0FBRyxJQUFJO1lBQ25CLFNBQVMsSUFBSSxDQUFDLEtBQUssSUFBSTtZQUN2QixpQkFBaUIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJO1NBQ2hELENBQUM7UUFDRixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsR0FBRyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7U0FDOUM7UUFDRCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7U0FDOUM7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDeEIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNqQjtJQUNILENBQUM7OytHQXhEVSxrQkFBa0I7bUdBQWxCLGtCQUFrQiw2VkM3Qi9CLHNVQVVBOztJRDRCWSxXQUFXLEVBQUU7K0NBQVc7O0lBQ3hCLFdBQVcsRUFBRTtpREFBYTs7SUFHMUIsWUFBWSxFQUFFO2tEQUF5QjsyRkFidEMsa0JBQWtCO2tCQVo5QixTQUFTOytCQUNFLFlBQVksWUFDWixXQUFXLFFBRWY7d0JBQ0osb0JBQW9CLEVBQUUsTUFBTTt3QkFDNUIsU0FBUyxFQUFFLFVBQVU7cUJBQ3RCLHVCQUNvQixLQUFLLG1CQUNULHVCQUF1QixDQUFDLE1BQU0saUJBQ2hDLGlCQUFpQixDQUFDLElBQUk7eUpBVTVCLElBQUk7c0JBQVosS0FBSztnQkFDa0IsR0FBRztzQkFBMUIsS0FBSztnQkFDa0IsS0FBSztzQkFBNUIsS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFDbUIsTUFBTTtzQkFBOUIsS0FBSztnQkFDYSxZQUFZO3NCQUE5QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIsIE51bWJlcklucHV0IH0gZnJvbSAnQGRlbG9uL3V0aWwvZGVjb3JhdG9yJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncXVpY2stbWVudScsXG4gIGV4cG9ydEFzOiAncXVpY2tNZW51JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3F1aWNrLW1lbnUuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5xdWljay1tZW51XSc6ICd0cnVlJyxcbiAgICAnKGNsaWNrKSc6ICdfY2xpY2soKSdcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFF1aWNrTWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3RvcDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV93aWR0aDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9leHBhbmQ6IEJvb2xlYW5JbnB1dDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyOiBSZW5kZXJlcjIpIHt9XG4gIGN0cmxTdHlsZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCB1bmRlZmluZWQgfSA9IHt9O1xuXG4gIEBJbnB1dCgpIGljb246IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+ID0gJ3F1ZXN0aW9uLWNpcmNsZSc7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHRvcCA9IDEyMDtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgd2lkdGggPSAyMDA7XG4gIEBJbnB1dCgpIGJnQ29sb3I/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGJvcmRlckNvbG9yPzogc3RyaW5nO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZXhwYW5kOiBib29sZWFuID0gZmFsc2U7XG4gIEBPdXRwdXQoKSByZWFkb25seSBleHBhbmRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgcHJpdmF0ZSBzaG93ID0gZmFsc2U7XG4gIHByaXZhdGUgaW5pdEZsYWcgPSBmYWxzZTtcblxuICBfY2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5zaG93ID0gIXRoaXMuc2hvdztcbiAgICB0aGlzLmV4cGFuZENoYW5nZS5lbWl0KHRoaXMuc2hvdyk7XG4gICAgdGhpcy5zZXRTdHlsZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRTdHlsZSgpOiB2b2lkIHtcbiAgICB0aGlzLmN0cmxTdHlsZSA9IHtcbiAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogdGhpcy5iZ0NvbG9yLFxuICAgICAgJ2JvcmRlci1jb2xvcic6IHRoaXMuYm9yZGVyQ29sb3JcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzOiBzdHJpbmdbXSA9IFtcbiAgICAgIGB0b3A6JHt0aGlzLnRvcH1weGAsXG4gICAgICBgd2lkdGg6JHt0aGlzLndpZHRofXB4YCxcbiAgICAgIGBtYXJnaW4tcmlnaHQ6LSR7dGhpcy5zaG93ID8gMCA6IHRoaXMud2lkdGh9cHhgXG4gICAgXTtcbiAgICBpZiAodGhpcy5iZ0NvbG9yKSB7XG4gICAgICByZXMucHVzaChgYmFja2dyb3VuZC1jb2xvcjoke3RoaXMuYmdDb2xvcn1gKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuYm9yZGVyQ29sb3IpIHtcbiAgICAgIHJlcy5wdXNoKGBib3JkZXItY29sb3I6JHt0aGlzLmJvcmRlckNvbG9yfWApO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlci5zZXRBdHRyaWJ1dGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnc3R5bGUnLCByZXMuam9pbignOycpKTtcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmluaXRGbGFnID0gdHJ1ZTtcbiAgICB0aGlzLnNldFN0eWxlKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLnNob3cgPSB0aGlzLmV4cGFuZDtcbiAgICBpZiAodGhpcy5pbml0RmxhZykge1xuICAgICAgdGhpcy5zZXRTdHlsZSgpO1xuICAgIH1cbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cInF1aWNrLW1lbnVfX2lubmVyXCI+XG4gIDxkaXYgY2xhc3M9XCJxdWljay1tZW51X19jdHJsXCIgW25nU3R5bGVdPVwiY3RybFN0eWxlXCI+XG4gICAgPGRpdiBjbGFzcz1cInF1aWNrLW1lbnVfX2N0cmwtaWNvblwiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cImljb25cIj5cbiAgICAgICAgPGkgbnotaWNvbiBbbnpUeXBlXT1cIiRhbnkoaWNvbilcIj48L2k+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvZGl2PlxuIl19