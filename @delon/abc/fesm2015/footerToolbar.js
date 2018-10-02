import { __decorate, __metadata } from 'tslib';
import { Component, Input, Inject, TemplateRef, ElementRef, Renderer2, NgModule } from '@angular/core';
import { DOCUMENT, CommonModule } from '@angular/common';
import { InputBoolean, DelonUtilModule } from '@delon/util';
import { ErrorCollectModule } from '@delon/abc/error-collect';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const CLS = 'footer-toolbar';
/** @type {?} */
const CLSBODY = 'footer-toolbar__body';
class FooterToolbarComponent {
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
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], FooterToolbarComponent.prototype, "errorCollect", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [FooterToolbarComponent];
class FooterToolbarModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: FooterToolbarModule, providers: [] };
    }
}
FooterToolbarModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, ErrorCollectModule, DelonUtilModule],
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

export { FooterToolbarComponent, FooterToolbarModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyVG9vbGJhci5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGRlbG9uL2FiYy9mb290ZXItdG9vbGJhci9mb290ZXItdG9vbGJhci5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9hYmMvZm9vdGVyLXRvb2xiYXIvZm9vdGVyLXRvb2xiYXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgSW5qZWN0LFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgUmVuZGVyZXIyLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ0BkZWxvbi91dGlsJztcclxuXHJcbmNvbnN0IENMUyA9ICdmb290ZXItdG9vbGJhcic7XHJcbmNvbnN0IENMU0JPRFkgPSAnZm9vdGVyLXRvb2xiYXJfX2JvZHknO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdmb290ZXItdG9vbGJhcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Zvb3Rlci10b29sYmFyLmNvbXBvbmVudC5odG1sJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEZvb3RlclRvb2xiYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KClcclxuICBASW5wdXRCb29sZWFuKClcclxuICBlcnJvckNvbGxlY3QgPSBmYWxzZTtcclxuXHJcbiAgX2V4dHJhID0gJyc7XHJcbiAgX2V4dHJhVHBsOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGV4dHJhKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XHJcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xyXG4gICAgICB0aGlzLl9leHRyYSA9IG51bGw7XHJcbiAgICAgIHRoaXMuX2V4dHJhVHBsID0gdmFsdWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9leHRyYSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IGFueSxcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIENMUyk7XHJcbiAgICB0aGlzLmRvYy5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LmFkZChDTFNCT0RZKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5kb2MucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5yZW1vdmUoQ0xTQk9EWSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBFcnJvckNvbGxlY3RNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL2Vycm9yLWNvbGxlY3QnO1xyXG5pbXBvcnQgeyBEZWxvblV0aWxNb2R1bGUgfSBmcm9tICdAZGVsb24vdXRpbCc7XHJcblxyXG5pbXBvcnQgeyBGb290ZXJUb29sYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9mb290ZXItdG9vbGJhci5jb21wb25lbnQnO1xyXG5cclxuY29uc3QgQ09NUE9ORU5UUyA9IFtGb290ZXJUb29sYmFyQ29tcG9uZW50XTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRXJyb3JDb2xsZWN0TW9kdWxlLCBEZWxvblV0aWxNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogWy4uLkNPTVBPTkVOVFNdLFxyXG4gIGV4cG9ydHM6IFsuLi5DT01QT05FTlRTXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEZvb3RlclRvb2xiYXJNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IEZvb3RlclRvb2xiYXJNb2R1bGUsIHByb3ZpZGVyczogW10gfTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBYUEsTUFBTSxHQUFHLEdBQUcsZ0JBQWdCLENBQUM7O0FBQzdCLE1BQU0sT0FBTyxHQUFHLHNCQUFzQixDQUFDO0FBT3ZDOzs7Ozs7SUFpQkUsWUFDVSxJQUNBLFVBQ2tCLEdBQVE7UUFGMUIsT0FBRSxHQUFGLEVBQUU7UUFDRixhQUFRLEdBQVIsUUFBUTtRQUNVLFFBQUcsR0FBSCxHQUFHLENBQUs7NEJBakJyQixLQUFLO3NCQUVYLEVBQUU7S0FnQlA7Ozs7O0lBZEosSUFDSSxLQUFLLENBQUMsS0FBZ0M7UUFDeEMsSUFBSSxLQUFLLFlBQVksV0FBVyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1NBQ3hCO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUNyQjtLQUNGOzs7O0lBUUQsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDdkQ7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUMxRDs7O1lBbkNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQiwwUkFBOEM7Z0JBQzlDLG1CQUFtQixFQUFFLEtBQUs7YUFDM0I7Ozs7WUFiQyxVQUFVO1lBQ1YsU0FBUzs0Q0FpQ04sTUFBTSxTQUFDLFFBQVE7OzsyQkFuQmpCLEtBQUs7b0JBTUwsS0FBSzs7O0lBTEwsWUFBWSxFQUFFOzs7Ozs7OztBQ3ZCakI7QUFRQSxNQUFNLFVBQVUsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFPNUM7Ozs7SUFDRSxPQUFPLE9BQU87UUFDWixPQUFPLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsQ0FBQztLQUN6RDs7O1lBUkYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxrQkFBa0IsRUFBRSxlQUFlLENBQUM7Z0JBQzVELFlBQVksRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDO2dCQUM3QixPQUFPLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQzthQUN6Qjs7Ozs7Ozs7Ozs7Ozs7OyJ9