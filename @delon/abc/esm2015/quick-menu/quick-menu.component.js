import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewEncapsulation, } from '@angular/core';
import { InputBoolean, InputNumber } from '@delon/util/decorator';
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
QuickMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'quick-menu',
                exportAs: 'quickMenu',
                template: "<div class=\"quick-menu__inner\">\n  <div class=\"quick-menu__ctrl\" [ngStyle]=\"ctrlStyle\">\n    <div class=\"quick-menu__ctrl-icon\">\n      <ng-container *nzStringTemplateOutlet=\"icon\">\n        <i nz-icon [nzType]=\"$any(icon)\"></i>\n      </ng-container>\n    </div>\n  </div>\n  <ng-content></ng-content>\n</div>\n",
                host: {
                    '[class.quick-menu]': 'true',
                    '(click)': '_click()',
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] }
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
    expand: [{ type: Input }],
    expandChange: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpY2stbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvcXVpY2stbWVudS9xdWljay1tZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFDTixTQUFTLEVBRVQsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBZ0IsWUFBWSxFQUFFLFdBQVcsRUFBZSxNQUFNLHVCQUF1QixDQUFDO0FBYzdGLE1BQU0sT0FBTyxrQkFBa0I7SUFLN0IsWUFBb0IsR0FBc0IsRUFBVSxFQUFjLEVBQVUsTUFBaUI7UUFBekUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUM3RixjQUFTLEdBQThCLEVBQUUsQ0FBQztRQUVqQyxTQUFJLEdBQStCLGlCQUFpQixDQUFDO1FBQ3RDLFFBQUcsR0FBRyxHQUFHLENBQUM7UUFDVixVQUFLLEdBQUcsR0FBRyxDQUFDO1FBR1gsV0FBTSxHQUFZLEtBQUssQ0FBQztRQUM5QixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFFdEQsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUNiLGFBQVEsR0FBRyxLQUFLLENBQUM7SUFadUUsQ0FBQztJQWNqRyxNQUFNO1FBQ0osSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRU8sUUFBUTtRQUNkLElBQUksQ0FBQyxTQUFTLEdBQUc7WUFDZixrQkFBa0IsRUFBRSxJQUFJLENBQUMsT0FBTztZQUNoQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFdBQVc7U0FDakMsQ0FBQztRQUVGLE1BQU0sR0FBRyxHQUFhLENBQUMsT0FBTyxJQUFJLENBQUMsR0FBRyxJQUFJLEVBQUUsU0FBUyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsaUJBQWlCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7UUFDdEgsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLEdBQUcsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1NBQzlDO1FBQ0QsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1NBQzlDO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsT0FBTyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3hCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDakI7SUFDSCxDQUFDOzs7WUFoRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUUsV0FBVztnQkFDckIsZ1ZBQTBDO2dCQUMxQyxJQUFJLEVBQUU7b0JBQ0osb0JBQW9CLEVBQUUsTUFBTTtvQkFDNUIsU0FBUyxFQUFFLFVBQVU7aUJBQ3RCO2dCQUNELG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0Qzs7OztZQXpCQyxpQkFBaUI7WUFFakIsVUFBVTtZQU1WLFNBQVM7OzttQkEwQlIsS0FBSztrQkFDTCxLQUFLO29CQUNMLEtBQUs7c0JBQ0wsS0FBSzswQkFDTCxLQUFLO3FCQUNMLEtBQUs7MkJBQ0wsTUFBTTs7QUFMaUI7SUFBZCxXQUFXLEVBQUU7OytDQUFXO0FBQ1Y7SUFBZCxXQUFXLEVBQUU7O2lEQUFhO0FBR1g7SUFBZixZQUFZLEVBQUU7O2tEQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIsIE51bWJlcklucHV0IH0gZnJvbSAnQGRlbG9uL3V0aWwvZGVjb3JhdG9yJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncXVpY2stbWVudScsXG4gIGV4cG9ydEFzOiAncXVpY2tNZW51JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3F1aWNrLW1lbnUuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5xdWljay1tZW51XSc6ICd0cnVlJyxcbiAgICAnKGNsaWNrKSc6ICdfY2xpY2soKScsXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgUXVpY2tNZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfdG9wOiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3dpZHRoOiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2V4cGFuZDogQm9vbGVhbklucHV0O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXI6IFJlbmRlcmVyMikge31cbiAgY3RybFN0eWxlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG5cbiAgQElucHV0KCkgaWNvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gPSAncXVlc3Rpb24tY2lyY2xlJztcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgdG9wID0gMTIwO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSB3aWR0aCA9IDIwMDtcbiAgQElucHV0KCkgYmdDb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSBib3JkZXJDb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZXhwYW5kOiBib29sZWFuID0gZmFsc2U7XG4gIEBPdXRwdXQoKSByZWFkb25seSBleHBhbmRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgcHJpdmF0ZSBzaG93ID0gZmFsc2U7XG4gIHByaXZhdGUgaW5pdEZsYWcgPSBmYWxzZTtcblxuICBfY2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5zaG93ID0gIXRoaXMuc2hvdztcbiAgICB0aGlzLmV4cGFuZENoYW5nZS5lbWl0KHRoaXMuc2hvdyk7XG4gICAgdGhpcy5zZXRTdHlsZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRTdHlsZSgpOiB2b2lkIHtcbiAgICB0aGlzLmN0cmxTdHlsZSA9IHtcbiAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogdGhpcy5iZ0NvbG9yLFxuICAgICAgJ2JvcmRlci1jb2xvcic6IHRoaXMuYm9yZGVyQ29sb3IsXG4gICAgfTtcblxuICAgIGNvbnN0IHJlczogc3RyaW5nW10gPSBbYHRvcDoke3RoaXMudG9wfXB4YCwgYHdpZHRoOiR7dGhpcy53aWR0aH1weGAsIGBtYXJnaW4tcmlnaHQ6LSR7dGhpcy5zaG93ID8gMCA6IHRoaXMud2lkdGh9cHhgXTtcbiAgICBpZiAodGhpcy5iZ0NvbG9yKSB7XG4gICAgICByZXMucHVzaChgYmFja2dyb3VuZC1jb2xvcjoke3RoaXMuYmdDb2xvcn1gKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuYm9yZGVyQ29sb3IpIHtcbiAgICAgIHJlcy5wdXNoKGBib3JkZXItY29sb3I6JHt0aGlzLmJvcmRlckNvbG9yfWApO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlci5zZXRBdHRyaWJ1dGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnc3R5bGUnLCByZXMuam9pbignOycpKTtcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmluaXRGbGFnID0gdHJ1ZTtcbiAgICB0aGlzLnNldFN0eWxlKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLnNob3cgPSB0aGlzLmV4cGFuZDtcbiAgICBpZiAodGhpcy5pbml0RmxhZykge1xuICAgICAgdGhpcy5zZXRTdHlsZSgpO1xuICAgIH1cbiAgfVxufVxuIl19