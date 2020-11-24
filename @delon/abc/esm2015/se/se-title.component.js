/**
 * @fileoverview added by tsickle
 * Generated from: se-title.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, Host, Optional, Renderer2, ViewEncapsulation } from '@angular/core';
import { SEContainerComponent } from './se-container.component';
export class SETitleComponent {
    /**
     * @param {?} parent
     * @param {?} el
     * @param {?} ren
     */
    constructor(parent, el, ren) {
        this.parent = parent;
        this.ren = ren;
        if (parent == null) {
            throw new Error(`[se-title] must include 'se-container' component`);
        }
        this.el = el.nativeElement;
    }
    /**
     * @private
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
SETitleComponent.decorators = [
    { type: Component, args: [{
                selector: 'se-title, [se-title]',
                exportAs: 'seTitle',
                template: '<ng-content></ng-content>',
                host: {
                    '[class.se__title]': 'true',
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
SETitleComponent.ctorParameters = () => [
    { type: SEContainerComponent, decorators: [{ type: Host }, { type: Optional }] },
    { type: ElementRef },
    { type: Renderer2 }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SETitleComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    SETitleComponent.prototype.parent;
    /**
     * @type {?}
     * @private
     */
    SETitleComponent.prototype.ren;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2UtdGl0bGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9zZS8iLCJzb3VyY2VzIjpbInNlLXRpdGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBVSxRQUFRLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JJLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBYWhFLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7OztJQUUzQixZQUdVLE1BQTRCLEVBQ3BDLEVBQWMsRUFDTixHQUFjO1FBRmQsV0FBTSxHQUFOLE1BQU0sQ0FBc0I7UUFFNUIsUUFBRyxHQUFILEdBQUcsQ0FBVztRQUV0QixJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7WUFDbEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxrREFBa0QsQ0FBQyxDQUFDO1NBQ3JFO1FBQ0QsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBRU8sUUFBUTtjQUNSLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU07Y0FDeEIsRUFBRSxFQUFFLEVBQUUsR0FBRyxJQUFJO1FBQ25CLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxjQUFjLEVBQUUsR0FBRyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsZUFBZSxFQUFFLEdBQUcsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7O1lBbkNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxRQUFRLEVBQUUsU0FBUztnQkFDbkIsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsSUFBSSxFQUFFO29CQUNKLG1CQUFtQixFQUFFLE1BQU07aUJBQzVCO2dCQUNELG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0Qzs7OztZQVpRLG9CQUFvQix1QkFnQnhCLElBQUksWUFDSixRQUFRO1lBbEJnQyxVQUFVO1lBQTBCLFNBQVM7Ozs7Ozs7SUFleEYsOEJBQXdCOzs7OztJQUV0QixrQ0FFb0M7Ozs7O0lBRXBDLCtCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEhvc3QsIE9uSW5pdCwgT3B0aW9uYWwsIFJlbmRlcmVyMiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNFQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9zZS1jb250YWluZXIuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2UtdGl0bGUsIFtzZS10aXRsZV0nLFxuICBleHBvcnRBczogJ3NlVGl0bGUnLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5zZV9fdGl0bGVdJzogJ3RydWUnLFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFNFVGl0bGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoXG4gICAgQEhvc3QoKVxuICAgIEBPcHRpb25hbCgpXG4gICAgcHJpdmF0ZSBwYXJlbnQ6IFNFQ29udGFpbmVyQ29tcG9uZW50LFxuICAgIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuOiBSZW5kZXJlcjIsXG4gICkge1xuICAgIGlmIChwYXJlbnQgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBbc2UtdGl0bGVdIG11c3QgaW5jbHVkZSAnc2UtY29udGFpbmVyJyBjb21wb25lbnRgKTtcbiAgICB9XG4gICAgdGhpcy5lbCA9IGVsLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBwcml2YXRlIHNldENsYXNzKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgZ3V0dGVyIH0gPSB0aGlzLnBhcmVudDtcbiAgICBjb25zdCB7IGVsIH0gPSB0aGlzO1xuICAgIHRoaXMucmVuLnNldFN0eWxlKGVsLCAncGFkZGluZy1sZWZ0JywgYCR7Z3V0dGVyIC8gMn1weGApO1xuICAgIHRoaXMucmVuLnNldFN0eWxlKGVsLCAncGFkZGluZy1yaWdodCcsIGAke2d1dHRlciAvIDJ9cHhgKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0Q2xhc3MoKTtcbiAgfVxufVxuIl19