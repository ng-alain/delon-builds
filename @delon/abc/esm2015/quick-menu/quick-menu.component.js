/**
 * @fileoverview added by tsickle
 * Generated from: quick-menu.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, Renderer2, ViewEncapsulation, } from '@angular/core';
import { InputNumber } from '@delon/util';
export class QuickMenuComponent {
    /**
     * @param {?} cdr
     * @param {?} el
     * @param {?} render
     */
    constructor(cdr, el, render) {
        this.cdr = cdr;
        this.el = el;
        this.render = render;
        this.ctrlStyle = {};
        this.icon = 'question-circle';
        this.top = 120;
        this.width = 200;
        this.show = false;
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
     * @private
     * @return {?}
     */
    setStyle() {
        this.ctrlStyle = {
            'background-color': this.bgColor,
            'border-color': this.borderColor,
        };
        /** @type {?} */
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
                exportAs: 'quickMenu',
                template: "<div class=\"quick-menu__inner\">\n  <div class=\"quick-menu__ctrl\" [ngStyle]=\"ctrlStyle\">\n    <div class=\"quick-menu__ctrl-icon\">\n      <ng-container *nzStringTemplateOutlet=\"icon\">\n        <i nz-icon [nzType]=\"icon\"></i>\n      </ng-container>\n    </div>\n  </div>\n  <ng-content></ng-content>\n</div>\n",
                host: {
                    '[class.quick-menu]': 'true',
                    '(click)': '_click()',
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
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
    borderColor: [{ type: Input }]
};
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], QuickMenuComponent.prototype, "top", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], QuickMenuComponent.prototype, "width", void 0);
if (false) {
    /** @type {?} */
    QuickMenuComponent.ngAcceptInputType_top;
    /** @type {?} */
    QuickMenuComponent.ngAcceptInputType_width;
    /** @type {?} */
    QuickMenuComponent.prototype.ctrlStyle;
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
    /**
     * @type {?}
     * @private
     */
    QuickMenuComponent.prototype.show;
    /**
     * @type {?}
     * @private
     */
    QuickMenuComponent.prototype.initFlag;
    /**
     * @type {?}
     * @private
     */
    QuickMenuComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    QuickMenuComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    QuickMenuComponent.prototype.render;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpY2stbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdnN0cy93b3JrLzEvcy9wYWNrYWdlcy9hYmMvcXVpY2stbWVudS8iLCJzb3VyY2VzIjpbInF1aWNrLW1lbnUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUdMLFNBQVMsRUFFVCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFdBQVcsRUFBZSxNQUFNLGFBQWEsQ0FBQztBQWN2RCxNQUFNLE9BQU8sa0JBQWtCOzs7Ozs7SUFJN0IsWUFBb0IsR0FBc0IsRUFBVSxFQUFjLEVBQVUsTUFBaUI7UUFBekUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUM3RixjQUFTLEdBQThCLEVBQUUsQ0FBQztRQUVqQyxTQUFJLEdBQStCLGlCQUFpQixDQUFDO1FBQ3RDLFFBQUcsR0FBRyxHQUFHLENBQUM7UUFDVixVQUFLLEdBQUcsR0FBRyxDQUFDO1FBSTVCLFNBQUksR0FBRyxLQUFLLENBQUM7UUFFYixhQUFRLEdBQUcsS0FBSyxDQUFDO0lBWHVFLENBQUM7Ozs7SUFhakcsTUFBTTtRQUNKLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDOzs7OztJQUVPLFFBQVE7UUFDZCxJQUFJLENBQUMsU0FBUyxHQUFHO1lBQ2Ysa0JBQWtCLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDaEMsY0FBYyxFQUFFLElBQUksQ0FBQyxXQUFXO1NBQ2pDLENBQUM7O2NBRUksR0FBRyxHQUFhLENBQUMsT0FBTyxJQUFJLENBQUMsR0FBRyxJQUFJLEVBQUUsU0FBUyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsaUJBQWlCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDO1FBQ3JILElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixHQUFHLENBQUMsSUFBSSxDQUFDLG9CQUFvQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztTQUM5QztRQUNELElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixHQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFnQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztTQUM5QztRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7O0lBQ0QsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDOzs7O0lBQ0QsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLFFBQVE7WUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDckMsQ0FBQzs7O1lBeERGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLDBVQUEwQztnQkFDMUMsSUFBSSxFQUFFO29CQUNKLG9CQUFvQixFQUFFLE1BQU07b0JBQzVCLFNBQVMsRUFBRSxVQUFVO2lCQUN0QjtnQkFDRCxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7Ozs7WUF4QkMsaUJBQWlCO1lBRWpCLFVBQVU7WUFJVixTQUFTOzs7bUJBMEJSLEtBQUs7a0JBQ0wsS0FBSztvQkFDTCxLQUFLO3NCQUNMLEtBQUs7MEJBQ0wsS0FBSzs7QUFIa0I7SUFBZCxXQUFXLEVBQUU7OytDQUFXO0FBQ1Y7SUFBZCxXQUFXLEVBQUU7O2lEQUFhOzs7SUFScEMseUNBQTBDOztJQUMxQywyQ0FBNEM7O0lBRzVDLHVDQUEwQzs7SUFFMUMsa0NBQThEOztJQUM5RCxpQ0FBa0M7O0lBQ2xDLG1DQUFvQzs7SUFDcEMscUNBQXlCOztJQUN6Qix5Q0FBNkI7Ozs7O0lBRTdCLGtDQUFxQjs7Ozs7SUFFckIsc0NBQXlCOzs7OztJQVhiLGlDQUE4Qjs7Ozs7SUFBRSxnQ0FBc0I7Ozs7O0lBQUUsb0NBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBJbnB1dE51bWJlciwgTnVtYmVySW5wdXQgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3F1aWNrLW1lbnUnLFxuICBleHBvcnRBczogJ3F1aWNrTWVudScsXG4gIHRlbXBsYXRlVXJsOiAnLi9xdWljay1tZW51LmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MucXVpY2stbWVudV0nOiAndHJ1ZScsXG4gICAgJyhjbGljayknOiAnX2NsaWNrKCknLFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFF1aWNrTWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3RvcDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV93aWR0aDogTnVtYmVySW5wdXQ7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcjogUmVuZGVyZXIyKSB7fVxuICBjdHJsU3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcblxuICBASW5wdXQoKSBpY29uOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiA9ICdxdWVzdGlvbi1jaXJjbGUnO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSB0b3AgPSAxMjA7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHdpZHRoID0gMjAwO1xuICBASW5wdXQoKSBiZ0NvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGJvcmRlckNvbG9yOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBzaG93ID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBpbml0RmxhZyA9IGZhbHNlO1xuXG4gIF9jbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLnNob3cgPSAhdGhpcy5zaG93O1xuICAgIHRoaXMuc2V0U3R5bGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0U3R5bGUoKTogdm9pZCB7XG4gICAgdGhpcy5jdHJsU3R5bGUgPSB7XG4gICAgICAnYmFja2dyb3VuZC1jb2xvcic6IHRoaXMuYmdDb2xvcixcbiAgICAgICdib3JkZXItY29sb3InOiB0aGlzLmJvcmRlckNvbG9yLFxuICAgIH07XG5cbiAgICBjb25zdCByZXM6IHN0cmluZ1tdID0gW2B0b3A6JHt0aGlzLnRvcH1weGAsIGB3aWR0aDoke3RoaXMud2lkdGh9cHhgLCBgbWFyZ2luLXJpZ2h0Oi0ke3RoaXMuc2hvdyA/IDAgOiB0aGlzLndpZHRofXB4YF07XG4gICAgaWYgKHRoaXMuYmdDb2xvcikge1xuICAgICAgcmVzLnB1c2goYGJhY2tncm91bmQtY29sb3I6JHt0aGlzLmJnQ29sb3J9YCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmJvcmRlckNvbG9yKSB7XG4gICAgICByZXMucHVzaChgYm9yZGVyLWNvbG9yOiR7dGhpcy5ib3JkZXJDb2xvcn1gKTtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXIuc2V0QXR0cmlidXRlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3N0eWxlJywgcmVzLmpvaW4oJzsnKSk7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaW5pdEZsYWcgPSB0cnVlO1xuICAgIHRoaXMuc2V0U3R5bGUoKTtcbiAgfVxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbml0RmxhZykgdGhpcy5zZXRTdHlsZSgpO1xuICB9XG59XG4iXX0=