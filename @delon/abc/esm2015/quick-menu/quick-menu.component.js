/**
 * @fileoverview added by tsickle
 * Generated from: quick-menu.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewEncapsulation, } from '@angular/core';
import { InputBoolean, InputNumber } from '@delon/util/other';
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
        this.expand = false;
        this.expandChange = new EventEmitter();
        this.show = false;
        this.initFlag = false;
    }
    /**
     * @return {?}
     */
    _click() {
        this.show = !this.show;
        this.expandChange.emit(this.show);
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
if (false) {
    /** @type {?} */
    QuickMenuComponent.ngAcceptInputType_top;
    /** @type {?} */
    QuickMenuComponent.ngAcceptInputType_width;
    /** @type {?} */
    QuickMenuComponent.ngAcceptInputType_expand;
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
    /** @type {?} */
    QuickMenuComponent.prototype.expand;
    /** @type {?} */
    QuickMenuComponent.prototype.expandChange;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpY2stbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvcXVpY2stbWVudS9xdWljay1tZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNOLFNBQVMsRUFFVCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFnQixZQUFZLEVBQUUsV0FBVyxFQUFlLE1BQU0sbUJBQW1CLENBQUM7QUFjekYsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7O0lBSzdCLFlBQW9CLEdBQXNCLEVBQVUsRUFBYyxFQUFVLE1BQWlCO1FBQXpFLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDN0YsY0FBUyxHQUE4QixFQUFFLENBQUM7UUFFakMsU0FBSSxHQUErQixpQkFBaUIsQ0FBQztRQUN0QyxRQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ1YsVUFBSyxHQUFHLEdBQUcsQ0FBQztRQUdYLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFDOUIsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBRXRELFNBQUksR0FBRyxLQUFLLENBQUM7UUFDYixhQUFRLEdBQUcsS0FBSyxDQUFDO0lBWnVFLENBQUM7Ozs7SUFjakcsTUFBTTtRQUNKLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7Ozs7SUFFTyxRQUFRO1FBQ2QsSUFBSSxDQUFDLFNBQVMsR0FBRztZQUNmLGtCQUFrQixFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ2hDLGNBQWMsRUFBRSxJQUFJLENBQUMsV0FBVztTQUNqQyxDQUFDOztjQUVJLEdBQUcsR0FBYSxDQUFDLE9BQU8sSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFFLFNBQVMsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLGlCQUFpQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQztRQUNySCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsR0FBRyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7U0FDOUM7UUFDRCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7U0FDOUM7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDeEIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNqQjtJQUNILENBQUM7OztZQWhFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFFBQVEsRUFBRSxXQUFXO2dCQUNyQiwwVUFBMEM7Z0JBQzFDLElBQUksRUFBRTtvQkFDSixvQkFBb0IsRUFBRSxNQUFNO29CQUM1QixTQUFTLEVBQUUsVUFBVTtpQkFDdEI7Z0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDOzs7O1lBekJDLGlCQUFpQjtZQUVqQixVQUFVO1lBTVYsU0FBUzs7O21CQTBCUixLQUFLO2tCQUNMLEtBQUs7b0JBQ0wsS0FBSztzQkFDTCxLQUFLOzBCQUNMLEtBQUs7cUJBQ0wsS0FBSzsyQkFDTCxNQUFNOztBQUxpQjtJQUFkLFdBQVcsRUFBRTs7K0NBQVc7QUFDVjtJQUFkLFdBQVcsRUFBRTs7aURBQWE7QUFHWDtJQUFmLFlBQVksRUFBRTs7a0RBQXlCOzs7SUFaakQseUNBQTBDOztJQUMxQywyQ0FBNEM7O0lBQzVDLDRDQUE4Qzs7SUFHOUMsdUNBQTBDOztJQUUxQyxrQ0FBOEQ7O0lBQzlELGlDQUFrQzs7SUFDbEMsbUNBQW9DOztJQUNwQyxxQ0FBeUI7O0lBQ3pCLHlDQUE2Qjs7SUFDN0Isb0NBQWlEOztJQUNqRCwwQ0FBOEQ7Ozs7O0lBRTlELGtDQUFxQjs7Ozs7SUFDckIsc0NBQXlCOzs7OztJQVpiLGlDQUE4Qjs7Ozs7SUFBRSxnQ0FBc0I7Ozs7O0lBQUUsb0NBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciwgTnVtYmVySW5wdXQgfSBmcm9tICdAZGVsb24vdXRpbC9vdGhlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3F1aWNrLW1lbnUnLFxuICBleHBvcnRBczogJ3F1aWNrTWVudScsXG4gIHRlbXBsYXRlVXJsOiAnLi9xdWljay1tZW51LmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MucXVpY2stbWVudV0nOiAndHJ1ZScsXG4gICAgJyhjbGljayknOiAnX2NsaWNrKCknLFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFF1aWNrTWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3RvcDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV93aWR0aDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9leHBhbmQ6IEJvb2xlYW5JbnB1dDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyOiBSZW5kZXJlcjIpIHt9XG4gIGN0cmxTdHlsZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuXG4gIEBJbnB1dCgpIGljb246IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+ID0gJ3F1ZXN0aW9uLWNpcmNsZSc7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHRvcCA9IDEyMDtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgd2lkdGggPSAyMDA7XG4gIEBJbnB1dCgpIGJnQ29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgYm9yZGVyQ29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGV4cGFuZDogYm9vbGVhbiA9IGZhbHNlO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgZXhwYW5kQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIHByaXZhdGUgc2hvdyA9IGZhbHNlO1xuICBwcml2YXRlIGluaXRGbGFnID0gZmFsc2U7XG5cbiAgX2NsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuc2hvdyA9ICF0aGlzLnNob3c7XG4gICAgdGhpcy5leHBhbmRDaGFuZ2UuZW1pdCh0aGlzLnNob3cpO1xuICAgIHRoaXMuc2V0U3R5bGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0U3R5bGUoKTogdm9pZCB7XG4gICAgdGhpcy5jdHJsU3R5bGUgPSB7XG4gICAgICAnYmFja2dyb3VuZC1jb2xvcic6IHRoaXMuYmdDb2xvcixcbiAgICAgICdib3JkZXItY29sb3InOiB0aGlzLmJvcmRlckNvbG9yLFxuICAgIH07XG5cbiAgICBjb25zdCByZXM6IHN0cmluZ1tdID0gW2B0b3A6JHt0aGlzLnRvcH1weGAsIGB3aWR0aDoke3RoaXMud2lkdGh9cHhgLCBgbWFyZ2luLXJpZ2h0Oi0ke3RoaXMuc2hvdyA/IDAgOiB0aGlzLndpZHRofXB4YF07XG4gICAgaWYgKHRoaXMuYmdDb2xvcikge1xuICAgICAgcmVzLnB1c2goYGJhY2tncm91bmQtY29sb3I6JHt0aGlzLmJnQ29sb3J9YCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmJvcmRlckNvbG9yKSB7XG4gICAgICByZXMucHVzaChgYm9yZGVyLWNvbG9yOiR7dGhpcy5ib3JkZXJDb2xvcn1gKTtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXIuc2V0QXR0cmlidXRlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3N0eWxlJywgcmVzLmpvaW4oJzsnKSk7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbml0RmxhZyA9IHRydWU7XG4gICAgdGhpcy5zZXRTdHlsZSgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5zaG93ID0gdGhpcy5leHBhbmQ7XG4gICAgaWYgKHRoaXMuaW5pdEZsYWcpIHtcbiAgICAgIHRoaXMuc2V0U3R5bGUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==