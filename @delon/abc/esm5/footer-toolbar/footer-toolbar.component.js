/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Inject, TemplateRef, ElementRef, Renderer2, } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { InputBoolean } from '@delon/util';
/** @type {?} */
var CLS = 'footer-toolbar';
/** @type {?} */
var CLSBODY = 'footer-toolbar__body';
var FooterToolbarComponent = /** @class */ (function () {
    function FooterToolbarComponent(el, renderer, doc) {
        this.el = el;
        this.renderer = renderer;
        this.doc = doc;
        this.errorCollect = false;
        this._extra = '';
    }
    Object.defineProperty(FooterToolbarComponent.prototype, "extra", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof TemplateRef) {
                this._extra = null;
                this._extraTpl = value;
            }
            else {
                this._extra = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FooterToolbarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.renderer.addClass(this.el.nativeElement, CLS);
        this.doc.querySelector('body').classList.add(CLSBODY);
    };
    /**
     * @return {?}
     */
    FooterToolbarComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.doc.querySelector('body').classList.remove(CLSBODY);
    };
    FooterToolbarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'footer-toolbar',
                    template: "<div class=\"footer-toolbar__left\">\n  <ng-container *ngIf=\"_extra; else _extraTpl\">{{_extra}}</ng-container>\n</div>\n<div class=\"footer-toolbar__right\">\n  <error-collect *ngIf=\"errorCollect\"></error-collect>\n  <ng-content></ng-content>\n</div>\n",
                    preserveWhitespaces: false
                }] }
    ];
    /** @nocollapse */
    FooterToolbarComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    FooterToolbarComponent.propDecorators = {
        errorCollect: [{ type: Input }],
        extra: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], FooterToolbarComponent.prototype, "errorCollect", void 0);
    return FooterToolbarComponent;
}());
export { FooterToolbarComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLXRvb2xiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9mb290ZXItdG9vbGJhci8iLCJzb3VyY2VzIjpbImZvb3Rlci10b29sYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUdMLE1BQU0sRUFDTixXQUFXLEVBQ1gsVUFBVSxFQUNWLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGFBQWEsQ0FBQzs7SUFFckMsR0FBRyxHQUFHLGdCQUFnQjs7SUFDdEIsT0FBTyxHQUFHLHNCQUFzQjtBQUV0QztJQXNCRSxnQ0FDVSxFQUFjLEVBQ2QsUUFBbUIsRUFDRCxHQUFRO1FBRjFCLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ0QsUUFBRyxHQUFILEdBQUcsQ0FBSztRQWpCcEMsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFFckIsV0FBTSxHQUFHLEVBQUUsQ0FBQztJQWdCVCxDQUFDO0lBZEosc0JBQ0kseUNBQUs7Ozs7O1FBRFQsVUFDVSxLQUFnQztZQUN4QyxJQUFJLEtBQUssWUFBWSxXQUFXLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQzthQUN4QjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzthQUNyQjtRQUNILENBQUM7OztPQUFBOzs7O0lBUUQseUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBRUQsNENBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzRCxDQUFDOztnQkFuQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLDRRQUE4QztvQkFDOUMsbUJBQW1CLEVBQUUsS0FBSztpQkFDM0I7Ozs7Z0JBYkMsVUFBVTtnQkFDVixTQUFTO2dEQWlDTixNQUFNLFNBQUMsUUFBUTs7OytCQW5CakIsS0FBSzt3QkFNTCxLQUFLOztJQUpOO1FBREMsWUFBWSxFQUFFOztnRUFDTTtJQTRCdkIsNkJBQUM7Q0FBQSxBQXBDRCxJQW9DQztTQS9CWSxzQkFBc0I7OztJQUNqQyw4Q0FFcUI7O0lBRXJCLHdDQUFZOztJQUNaLDJDQUE0Qjs7SUFZMUIsb0NBQXNCOztJQUN0QiwwQ0FBMkI7O0lBQzNCLHFDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxuICBJbmplY3QsXG4gIFRlbXBsYXRlUmVmLFxuICBFbGVtZW50UmVmLFxuICBSZW5kZXJlcjIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5jb25zdCBDTFMgPSAnZm9vdGVyLXRvb2xiYXInO1xuY29uc3QgQ0xTQk9EWSA9ICdmb290ZXItdG9vbGJhcl9fYm9keSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zvb3Rlci10b29sYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Zvb3Rlci10b29sYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIEZvb3RlclRvb2xiYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpXG4gIEBJbnB1dEJvb2xlYW4oKVxuICBlcnJvckNvbGxlY3QgPSBmYWxzZTtcblxuICBfZXh0cmEgPSAnJztcbiAgX2V4dHJhVHBsOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBASW5wdXQoKVxuICBzZXQgZXh0cmEodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgdGhpcy5fZXh0cmEgPSBudWxsO1xuICAgICAgdGhpcy5fZXh0cmFUcGwgPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZXh0cmEgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogYW55LFxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIENMUyk7XG4gICAgdGhpcy5kb2MucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5hZGQoQ0xTQk9EWSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmRvYy5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LnJlbW92ZShDTFNCT0RZKTtcbiAgfVxufVxuIl19