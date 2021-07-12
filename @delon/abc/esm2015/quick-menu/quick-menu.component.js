import { __decorate } from "tslib";
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
    InputNumber()
], QuickMenuComponent.prototype, "top", void 0);
__decorate([
    InputNumber()
], QuickMenuComponent.prototype, "width", void 0);
__decorate([
    InputBoolean()
], QuickMenuComponent.prototype, "expand", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpY2stbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvcXVpY2stbWVudS9xdWljay1tZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFDTixTQUFTLEVBRVQsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBZ0IsWUFBWSxFQUFFLFdBQVcsRUFBZSxNQUFNLHVCQUF1QixDQUFDO0FBYzdGLE1BQU0sT0FBTyxrQkFBa0I7SUFLN0IsWUFBb0IsR0FBc0IsRUFBVSxFQUFjLEVBQVUsTUFBaUI7UUFBekUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUM3RixjQUFTLEdBQThCLEVBQUUsQ0FBQztRQUVqQyxTQUFJLEdBQStCLGlCQUFpQixDQUFDO1FBQ3RDLFFBQUcsR0FBRyxHQUFHLENBQUM7UUFDVixVQUFLLEdBQUcsR0FBRyxDQUFDO1FBR1gsV0FBTSxHQUFZLEtBQUssQ0FBQztRQUM5QixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFFdEQsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUNiLGFBQVEsR0FBRyxLQUFLLENBQUM7SUFadUUsQ0FBQztJQWNqRyxNQUFNO1FBQ0osSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRU8sUUFBUTtRQUNkLElBQUksQ0FBQyxTQUFTLEdBQUc7WUFDZixrQkFBa0IsRUFBRSxJQUFJLENBQUMsT0FBTztZQUNoQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFdBQVc7U0FDakMsQ0FBQztRQUVGLE1BQU0sR0FBRyxHQUFhLENBQUMsT0FBTyxJQUFJLENBQUMsR0FBRyxJQUFJLEVBQUUsU0FBUyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsaUJBQWlCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7UUFDdEgsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLEdBQUcsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1NBQzlDO1FBQ0QsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1NBQzlDO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsT0FBTyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3hCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDakI7SUFDSCxDQUFDOzs7WUFoRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUUsV0FBVztnQkFDckIsZ1ZBQTBDO2dCQUMxQyxJQUFJLEVBQUU7b0JBQ0osb0JBQW9CLEVBQUUsTUFBTTtvQkFDNUIsU0FBUyxFQUFFLFVBQVU7aUJBQ3RCO2dCQUNELG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0Qzs7O1lBekJDLGlCQUFpQjtZQUVqQixVQUFVO1lBTVYsU0FBUzs7O21CQTBCUixLQUFLO2tCQUNMLEtBQUs7b0JBQ0wsS0FBSztzQkFDTCxLQUFLOzBCQUNMLEtBQUs7cUJBQ0wsS0FBSzsyQkFDTCxNQUFNOztBQUxpQjtJQUFkLFdBQVcsRUFBRTsrQ0FBVztBQUNWO0lBQWQsV0FBVyxFQUFFO2lEQUFhO0FBR1g7SUFBZixZQUFZLEVBQUU7a0RBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciwgTnVtYmVySW5wdXQgfSBmcm9tICdAZGVsb24vdXRpbC9kZWNvcmF0b3InO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdxdWljay1tZW51JyxcbiAgZXhwb3J0QXM6ICdxdWlja01lbnUnLFxuICB0ZW1wbGF0ZVVybDogJy4vcXVpY2stbWVudS5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLnF1aWNrLW1lbnVdJzogJ3RydWUnLFxuICAgICcoY2xpY2spJzogJ19jbGljaygpJyxcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBRdWlja01lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV90b3A6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfd2lkdGg6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZXhwYW5kOiBCb29sZWFuSW5wdXQ7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcjogUmVuZGVyZXIyKSB7fVxuICBjdHJsU3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcblxuICBASW5wdXQoKSBpY29uOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiA9ICdxdWVzdGlvbi1jaXJjbGUnO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSB0b3AgPSAxMjA7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHdpZHRoID0gMjAwO1xuICBASW5wdXQoKSBiZ0NvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGJvcmRlckNvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBleHBhbmQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGV4cGFuZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBwcml2YXRlIHNob3cgPSBmYWxzZTtcbiAgcHJpdmF0ZSBpbml0RmxhZyA9IGZhbHNlO1xuXG4gIF9jbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLnNob3cgPSAhdGhpcy5zaG93O1xuICAgIHRoaXMuZXhwYW5kQ2hhbmdlLmVtaXQodGhpcy5zaG93KTtcbiAgICB0aGlzLnNldFN0eWxlKCk7XG4gIH1cblxuICBwcml2YXRlIHNldFN0eWxlKCk6IHZvaWQge1xuICAgIHRoaXMuY3RybFN0eWxlID0ge1xuICAgICAgJ2JhY2tncm91bmQtY29sb3InOiB0aGlzLmJnQ29sb3IsXG4gICAgICAnYm9yZGVyLWNvbG9yJzogdGhpcy5ib3JkZXJDb2xvcixcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzOiBzdHJpbmdbXSA9IFtgdG9wOiR7dGhpcy50b3B9cHhgLCBgd2lkdGg6JHt0aGlzLndpZHRofXB4YCwgYG1hcmdpbi1yaWdodDotJHt0aGlzLnNob3cgPyAwIDogdGhpcy53aWR0aH1weGBdO1xuICAgIGlmICh0aGlzLmJnQ29sb3IpIHtcbiAgICAgIHJlcy5wdXNoKGBiYWNrZ3JvdW5kLWNvbG9yOiR7dGhpcy5iZ0NvbG9yfWApO1xuICAgIH1cbiAgICBpZiAodGhpcy5ib3JkZXJDb2xvcikge1xuICAgICAgcmVzLnB1c2goYGJvcmRlci1jb2xvcjoke3RoaXMuYm9yZGVyQ29sb3J9YCk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdzdHlsZScsIHJlcy5qb2luKCc7JykpO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaW5pdEZsYWcgPSB0cnVlO1xuICAgIHRoaXMuc2V0U3R5bGUoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuc2hvdyA9IHRoaXMuZXhwYW5kO1xuICAgIGlmICh0aGlzLmluaXRGbGFnKSB7XG4gICAgICB0aGlzLnNldFN0eWxlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=