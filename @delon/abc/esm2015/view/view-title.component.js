/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, Host, Optional, Renderer2, } from '@angular/core';
import { SVContainerComponent } from './view-container.component';
export class SVTitleComponent {
    /**
     * @param {?} el
     * @param {?} parent
     * @param {?} ren
     */
    constructor(el, parent, ren) {
        this.parent = parent;
        this.ren = ren;
        if (parent == null) {
            throw new Error(`[sv-title] must include 'sv-container' component`);
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
SVTitleComponent.decorators = [
    { type: Component, args: [{
                selector: 'sv-title, [sv-title]',
                exportAs: 'svTitle',
                template: '<ng-content></ng-content>',
                host: {
                    '[class.sv__title]': 'true',
                },
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
SVTitleComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: SVContainerComponent, decorators: [{ type: Host }, { type: Optional }] },
    { type: Renderer2 }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SVTitleComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    SVTitleComponent.prototype.parent;
    /**
     * @type {?}
     * @private
     */
    SVTitleComponent.prototype.ren;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy10aXRsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL3ZpZXcvIiwic291cmNlcyI6WyJ2aWV3LXRpdGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLElBQUksRUFFSixRQUFRLEVBQ1IsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBV2xFLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7OztJQUUzQixZQUNFLEVBQWMsRUFDYyxNQUE0QixFQUNoRCxHQUFjO1FBRE0sV0FBTSxHQUFOLE1BQU0sQ0FBc0I7UUFDaEQsUUFBRyxHQUFILEdBQUcsQ0FBVztRQUV0QixJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7WUFDbEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxrREFBa0QsQ0FBQyxDQUFDO1NBQ3JFO1FBQ0QsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBRU8sUUFBUTtjQUNSLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU07Y0FDeEIsRUFBRSxFQUFFLEVBQUUsR0FBRyxJQUFJO1FBQ25CLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxjQUFjLEVBQUUsR0FBRyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsZUFBZSxFQUFFLEdBQUcsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7O1lBL0JGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxRQUFRLEVBQUUsU0FBUztnQkFDbkIsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsSUFBSSxFQUFFO29CQUNKLG1CQUFtQixFQUFFLE1BQU07aUJBQzVCO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBaEJDLFVBQVU7WUFNSCxvQkFBb0IsdUJBZXhCLElBQUksWUFBSSxRQUFRO1lBakJuQixTQUFTOzs7Ozs7O0lBY1QsOEJBQXdCOzs7OztJQUd0QixrQ0FBd0Q7Ozs7O0lBQ3hELCtCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3QsXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTVkNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vdmlldy1jb250YWluZXIuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3YtdGl0bGUsIFtzdi10aXRsZV0nLFxuICBleHBvcnRBczogJ3N2VGl0bGUnLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5zdl9fdGl0bGVdJzogJ3RydWUnLFxuICB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgU1ZUaXRsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihcbiAgICBlbDogRWxlbWVudFJlZixcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHByaXZhdGUgcGFyZW50OiBTVkNvbnRhaW5lckNvbXBvbmVudCxcbiAgICBwcml2YXRlIHJlbjogUmVuZGVyZXIyLFxuICApIHtcbiAgICBpZiAocGFyZW50ID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgW3N2LXRpdGxlXSBtdXN0IGluY2x1ZGUgJ3N2LWNvbnRhaW5lcicgY29tcG9uZW50YCk7XG4gICAgfVxuICAgIHRoaXMuZWwgPSBlbC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDbGFzcygpIHtcbiAgICBjb25zdCB7IGd1dHRlciB9ID0gdGhpcy5wYXJlbnQ7XG4gICAgY29uc3QgeyBlbCB9ID0gdGhpcztcbiAgICB0aGlzLnJlbi5zZXRTdHlsZShlbCwgJ3BhZGRpbmctbGVmdCcsIGAke2d1dHRlciAvIDJ9cHhgKTtcbiAgICB0aGlzLnJlbi5zZXRTdHlsZShlbCwgJ3BhZGRpbmctcmlnaHQnLCBgJHtndXR0ZXIgLyAyfXB4YCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNldENsYXNzKCk7XG4gIH1cbn1cbiJdfQ==