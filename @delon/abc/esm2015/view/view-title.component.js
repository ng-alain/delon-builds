/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Host, ElementRef, Renderer2, Optional, } from '@angular/core';
import { SVContainerComponent } from './view-container.component';
export class SVTitleComponent {
    /**
     * @param {?} parent
     * @param {?} el
     * @param {?} ren
     */
    constructor(parent, el, ren) {
        this.parent = parent;
        this.ren = ren;
        if (parent == null) {
            throw new Error(`[sv-title] must include 'sv-container' component`);
        }
        this.el = el.nativeElement;
    }
    /**
     * @return {?}
     */
    setClass() {
        const { gutter } = this.parent;
        const { el } = this;
        this.ren.setStyle(el, 'padding-left', `${gutter / 2}px`);
        this.ren.setStyle(el, 'padding-right', `${gutter / 2}px`);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setClass();
    }
}
SVTitleComponent.decorators = [
    { type: Component, args: [{
                selector: 'sv-title, [sv-title]',
                template: '<ng-content></ng-content>',
                host: {
                    '[class.sv__title]': 'true',
                }
            }] }
];
/** @nocollapse */
SVTitleComponent.ctorParameters = () => [
    { type: SVContainerComponent, decorators: [{ type: Host }, { type: Optional }] },
    { type: ElementRef },
    { type: Renderer2 }
];
if (false) {
    /** @type {?} */
    SVTitleComponent.prototype.el;
    /** @type {?} */
    SVTitleComponent.prototype.parent;
    /** @type {?} */
    SVTitleComponent.prototype.ren;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy10aXRsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL3ZpZXcvIiwic291cmNlcyI6WyJ2aWV3LXRpdGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxJQUFJLEVBQ0osVUFBVSxFQUNWLFNBQVMsRUFFVCxRQUFRLEdBQ1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFTbEUsTUFBTTs7Ozs7O0lBRUosWUFHVSxNQUE0QixFQUNwQyxFQUFjLEVBQ047UUFGQSxXQUFNLEdBQU4sTUFBTSxDQUFzQjtRQUU1QixRQUFHLEdBQUgsR0FBRztRQUVYLElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtZQUNsQixNQUFNLElBQUksS0FBSyxDQUFDLGtEQUFrRCxDQUFDLENBQUM7U0FDckU7UUFDRCxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUM7S0FDNUI7Ozs7SUFFTyxRQUFRO1FBQ2QsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDL0IsTUFBTSxFQUFFLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsY0FBYyxFQUFFLEdBQUcsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLGVBQWUsRUFBRSxHQUFHLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDOzs7OztJQUc1RCxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQ2pCOzs7WUEvQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLElBQUksRUFBRTtvQkFDSixtQkFBbUIsRUFBRSxNQUFNO2lCQUM1QjthQUNGOzs7O1lBUlEsb0JBQW9CLHVCQVl4QixJQUFJLFlBQ0osUUFBUTtZQWxCWCxVQUFVO1lBQ1YsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIEhvc3QsXHJcbiAgRWxlbWVudFJlZixcclxuICBSZW5kZXJlcjIsXHJcbiAgT25Jbml0LFxyXG4gIE9wdGlvbmFsLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTVkNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vdmlldy1jb250YWluZXIuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc3YtdGl0bGUsIFtzdi10aXRsZV0nLFxyXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5zdl9fdGl0bGVdJzogJ3RydWUnLFxyXG4gIH0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTVlRpdGxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBwcml2YXRlIGVsOiBIVE1MRWxlbWVudDtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBIb3N0KClcclxuICAgIEBPcHRpb25hbCgpXHJcbiAgICBwcml2YXRlIHBhcmVudDogU1ZDb250YWluZXJDb21wb25lbnQsXHJcbiAgICBlbDogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgcmVuOiBSZW5kZXJlcjIsXHJcbiAgKSB7XHJcbiAgICBpZiAocGFyZW50ID09IG51bGwpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBbc3YtdGl0bGVdIG11c3QgaW5jbHVkZSAnc3YtY29udGFpbmVyJyBjb21wb25lbnRgKTtcclxuICAgIH1cclxuICAgIHRoaXMuZWwgPSBlbC5uYXRpdmVFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRDbGFzcygpIHtcclxuICAgIGNvbnN0IHsgZ3V0dGVyIH0gPSB0aGlzLnBhcmVudDtcclxuICAgIGNvbnN0IHsgZWwgfSA9IHRoaXM7XHJcbiAgICB0aGlzLnJlbi5zZXRTdHlsZShlbCwgJ3BhZGRpbmctbGVmdCcsIGAke2d1dHRlciAvIDJ9cHhgKTtcclxuICAgIHRoaXMucmVuLnNldFN0eWxlKGVsLCAncGFkZGluZy1yaWdodCcsIGAke2d1dHRlciAvIDJ9cHhgKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5zZXRDbGFzcygpO1xyXG4gIH1cclxufVxyXG4iXX0=