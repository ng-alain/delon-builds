/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, Inject, Input, Renderer2, } from '@angular/core';
import { InputBoolean } from '@delon/util';
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
    }
    /**
     * @private
     * @return {?}
     */
    get bodyCls() {
        return this.doc.querySelector('body').classList;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.renderer.addClass(this.el.nativeElement, 'footer-toolbar');
        this.bodyCls.add(CLSBODY);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.bodyCls.remove(CLSBODY);
    }
}
FooterToolbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'footer-toolbar',
                exportAs: 'footerToolbar',
                template: "<div class=\"footer-toolbar__left\">\n  <ng-container *stringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\n</div>\n<div class=\"footer-toolbar__right\">\n  <error-collect *ngIf=\"errorCollect\"></error-collect>\n  <ng-content></ng-content>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
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
    FooterToolbarComponent.prototype.extra;
    /**
     * @type {?}
     * @private
     */
    FooterToolbarComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    FooterToolbarComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    FooterToolbarComponent.prototype.doc;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLXRvb2xiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9mb290ZXItdG9vbGJhci8iLCJzb3VyY2VzIjpbImZvb3Rlci10b29sYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsTUFBTSxFQUNOLEtBQUssRUFHTCxTQUFTLEdBRVYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGFBQWEsQ0FBQzs7TUFFckMsT0FBTyxHQUFHLHNCQUFzQjtBQVF0QyxNQUFNLE9BQU8sc0JBQXNCOzs7Ozs7SUFJakMsWUFDVSxFQUFjLEVBQ2QsUUFBbUIsRUFDRCxHQUFRO1FBRjFCLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ0QsUUFBRyxHQUFILEdBQUcsQ0FBSztRQU5YLGlCQUFZLEdBQUcsS0FBSyxDQUFDO0lBTzNDLENBQUM7Ozs7O0lBRUosSUFBWSxPQUFPO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ2xELENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQy9CLENBQUM7OztZQTNCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLDRRQUE4QztnQkFDOUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUFqQkMsVUFBVTtZQUtWLFNBQVM7NENBb0JOLE1BQU0sU0FBQyxRQUFROzs7MkJBTmpCLEtBQUs7b0JBQ0wsS0FBSzs7QUFEbUI7SUFBZixZQUFZLEVBQUU7OzREQUFzQjs7O0lBQTlDLDhDQUE4Qzs7SUFDOUMsdUNBQTJDOzs7OztJQUd6QyxvQ0FBc0I7Ozs7O0lBQ3RCLDBDQUEyQjs7Ozs7SUFDM0IscUNBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5jb25zdCBDTFNCT0RZID0gJ2Zvb3Rlci10b29sYmFyX19ib2R5JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm9vdGVyLXRvb2xiYXInLFxuICBleHBvcnRBczogJ2Zvb3RlclRvb2xiYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZm9vdGVyLXRvb2xiYXIuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRm9vdGVyVG9vbGJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGVycm9yQ29sbGVjdCA9IGZhbHNlO1xuICBASW5wdXQoKSBleHRyYTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IGFueSxcbiAgKSB7fVxuXG4gIHByaXZhdGUgZ2V0IGJvZHlDbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9jLnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3Q7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2Zvb3Rlci10b29sYmFyJyk7XG4gICAgdGhpcy5ib2R5Q2xzLmFkZChDTFNCT0RZKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuYm9keUNscy5yZW1vdmUoQ0xTQk9EWSk7XG4gIH1cbn1cbiJdfQ==