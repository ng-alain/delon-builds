/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Inject, TemplateRef, ElementRef, Renderer2, } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { InputBoolean } from '@delon/util';
/** @type {?} */
const CLS = 'footer-toolbar';
/** @type {?} */
const CLSBODY = 'footer-toolbar__body';
export class FooterToolbarComponent {
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} doc
     */
    constructor(el, renderer, doc) {
        this.el = el;
        this.renderer = renderer;
        this.doc = doc;
        this.errorCollect = false;
        this._extra = '';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set extra(value) {
        if (value instanceof TemplateRef) {
            this._extra = null;
            this._extraTpl = value;
        }
        else {
            this._extra = value;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.renderer.addClass(this.el.nativeElement, CLS);
        this.doc.querySelector('body').classList.add(CLSBODY);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.doc.querySelector('body').classList.remove(CLSBODY);
    }
}
FooterToolbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'footer-toolbar',
                template: "<div class=\"footer-toolbar__left\">\r\n  <ng-container *ngIf=\"_extra; else _extraTpl\">{{_extra}}</ng-container>\r\n</div>\r\n<div class=\"footer-toolbar__right\">\r\n  <error-collect *ngIf=\"errorCollect\"></error-collect>\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                preserveWhitespaces: false
            }] }
];
/** @nocollapse */
FooterToolbarComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
FooterToolbarComponent.propDecorators = {
    errorCollect: [{ type: Input }],
    extra: [{ type: Input }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], FooterToolbarComponent.prototype, "errorCollect", void 0);
if (false) {
    /** @type {?} */
    FooterToolbarComponent.prototype.errorCollect;
    /** @type {?} */
    FooterToolbarComponent.prototype._extra;
    /** @type {?} */
    FooterToolbarComponent.prototype._extraTpl;
    /** @type {?} */
    FooterToolbarComponent.prototype.el;
    /** @type {?} */
    FooterToolbarComponent.prototype.renderer;
    /** @type {?} */
    FooterToolbarComponent.prototype.doc;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLXRvb2xiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9mb290ZXItdG9vbGJhci8iLCJzb3VyY2VzIjpbImZvb3Rlci10b29sYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUdMLE1BQU0sRUFDTixXQUFXLEVBQ1gsVUFBVSxFQUNWLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGFBQWEsQ0FBQzs7QUFFM0MsTUFBTSxHQUFHLEdBQUcsZ0JBQWdCLENBQUM7O0FBQzdCLE1BQU0sT0FBTyxHQUFHLHNCQUFzQixDQUFDO0FBT3ZDLE1BQU07Ozs7OztJQWlCSixZQUNVLElBQ0EsVUFDa0IsR0FBUTtRQUYxQixPQUFFLEdBQUYsRUFBRTtRQUNGLGFBQVEsR0FBUixRQUFRO1FBQ1UsUUFBRyxHQUFILEdBQUcsQ0FBSzs0QkFqQnJCLEtBQUs7c0JBRVgsRUFBRTtLQWdCUDs7Ozs7SUFkSixJQUNJLEtBQUssQ0FBQyxLQUFnQztRQUN4QyxJQUFJLEtBQUssWUFBWSxXQUFXLEVBQUU7WUFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7U0FDeEI7YUFBTTtZQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3JCO0tBQ0Y7Ozs7SUFRRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUN2RDs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQzFEOzs7WUFuQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLDBSQUE4QztnQkFDOUMsbUJBQW1CLEVBQUUsS0FBSzthQUMzQjs7OztZQWJDLFVBQVU7WUFDVixTQUFTOzRDQWlDTixNQUFNLFNBQUMsUUFBUTs7OzJCQW5CakIsS0FBSztvQkFNTCxLQUFLOzs7SUFMTCxZQUFZLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBPbkluaXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIEluamVjdCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBFbGVtZW50UmVmLFxyXG4gIFJlbmRlcmVyMixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICdAZGVsb24vdXRpbCc7XHJcblxyXG5jb25zdCBDTFMgPSAnZm9vdGVyLXRvb2xiYXInO1xyXG5jb25zdCBDTFNCT0RZID0gJ2Zvb3Rlci10b29sYmFyX19ib2R5JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZm9vdGVyLXRvb2xiYXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9mb290ZXItdG9vbGJhci5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb290ZXJUb29sYmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpXHJcbiAgQElucHV0Qm9vbGVhbigpXHJcbiAgZXJyb3JDb2xsZWN0ID0gZmFsc2U7XHJcblxyXG4gIF9leHRyYSA9ICcnO1xyXG4gIF9leHRyYVRwbDogVGVtcGxhdGVSZWY8YW55PjtcclxuICBASW5wdXQoKVxyXG4gIHNldCBleHRyYSh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pikge1xyXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcclxuICAgICAgdGhpcy5fZXh0cmEgPSBudWxsO1xyXG4gICAgICB0aGlzLl9leHRyYVRwbCA9IHZhbHVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fZXh0cmEgPSB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnksXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCBDTFMpO1xyXG4gICAgdGhpcy5kb2MucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5hZGQoQ0xTQk9EWSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuZG9jLnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QucmVtb3ZlKENMU0JPRFkpO1xyXG4gIH1cclxufVxyXG4iXX0=