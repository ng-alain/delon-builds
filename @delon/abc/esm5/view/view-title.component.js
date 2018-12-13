/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, Host, Optional, Renderer2, } from '@angular/core';
import { SVContainerComponent } from './view-container.component';
var SVTitleComponent = /** @class */ (function () {
    function SVTitleComponent(el, parent, ren) {
        this.parent = parent;
        this.ren = ren;
        if (parent == null) {
            throw new Error("[sv-title] must include 'sv-container' component");
        }
        this.el = el.nativeElement;
    }
    /**
     * @return {?}
     */
    SVTitleComponent.prototype.setClass = /**
     * @return {?}
     */
    function () {
        var gutter = this.parent.gutter;
        var el = this.el;
        this.ren.setStyle(el, 'padding-left', gutter / 2 + "px");
        this.ren.setStyle(el, 'padding-right', gutter / 2 + "px");
    };
    /**
     * @return {?}
     */
    SVTitleComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClass();
    };
    SVTitleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sv-title, [sv-title]',
                    template: '<ng-content></ng-content>',
                    host: {
                        '[class.sv__title]': 'true',
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    SVTitleComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: SVContainerComponent, decorators: [{ type: Host }, { type: Optional }] },
        { type: Renderer2 }
    ]; };
    return SVTitleComponent;
}());
export { SVTitleComponent };
if (false) {
    /** @type {?} */
    SVTitleComponent.prototype.el;
    /** @type {?} */
    SVTitleComponent.prototype.parent;
    /** @type {?} */
    SVTitleComponent.prototype.ren;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy10aXRsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL3ZpZXcvIiwic291cmNlcyI6WyJ2aWV3LXRpdGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLElBQUksRUFFSixRQUFRLEVBQ1IsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRWxFO0lBVUUsMEJBQ0UsRUFBYyxFQUNjLE1BQTRCLEVBQ2hELEdBQWM7UUFETSxXQUFNLEdBQU4sTUFBTSxDQUFzQjtRQUNoRCxRQUFHLEdBQUgsR0FBRyxDQUFXO1FBRXRCLElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtZQUNsQixNQUFNLElBQUksS0FBSyxDQUFDLGtEQUFrRCxDQUFDLENBQUM7U0FDckU7UUFDRCxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVPLG1DQUFROzs7SUFBaEI7UUFDVSxJQUFBLDJCQUFNO1FBQ04sSUFBQSxZQUFFO1FBQ1YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLGNBQWMsRUFBSyxNQUFNLEdBQUcsQ0FBQyxPQUFJLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsZUFBZSxFQUFLLE1BQU0sR0FBRyxDQUFDLE9BQUksQ0FBQyxDQUFDO0lBQzVELENBQUM7Ozs7SUFFRCxtQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7Z0JBOUJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxJQUFJLEVBQUU7d0JBQ0osbUJBQW1CLEVBQUUsTUFBTTtxQkFDNUI7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQWZDLFVBQVU7Z0JBTUgsb0JBQW9CLHVCQWN4QixJQUFJLFlBQUksUUFBUTtnQkFoQm5CLFNBQVM7O0lBbUNYLHVCQUFDO0NBQUEsQUEvQkQsSUErQkM7U0F2QlksZ0JBQWdCOzs7SUFDM0IsOEJBQXdCOztJQUd0QixrQ0FBd0Q7O0lBQ3hELCtCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3QsXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTVkNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vdmlldy1jb250YWluZXIuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3YtdGl0bGUsIFtzdi10aXRsZV0nLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5zdl9fdGl0bGVdJzogJ3RydWUnLFxuICB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgU1ZUaXRsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihcbiAgICBlbDogRWxlbWVudFJlZixcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHByaXZhdGUgcGFyZW50OiBTVkNvbnRhaW5lckNvbXBvbmVudCxcbiAgICBwcml2YXRlIHJlbjogUmVuZGVyZXIyLFxuICApIHtcbiAgICBpZiAocGFyZW50ID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgW3N2LXRpdGxlXSBtdXN0IGluY2x1ZGUgJ3N2LWNvbnRhaW5lcicgY29tcG9uZW50YCk7XG4gICAgfVxuICAgIHRoaXMuZWwgPSBlbC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDbGFzcygpIHtcbiAgICBjb25zdCB7IGd1dHRlciB9ID0gdGhpcy5wYXJlbnQ7XG4gICAgY29uc3QgeyBlbCB9ID0gdGhpcztcbiAgICB0aGlzLnJlbi5zZXRTdHlsZShlbCwgJ3BhZGRpbmctbGVmdCcsIGAke2d1dHRlciAvIDJ9cHhgKTtcbiAgICB0aGlzLnJlbi5zZXRTdHlsZShlbCwgJ3BhZGRpbmctcmlnaHQnLCBgJHtndXR0ZXIgLyAyfXB4YCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNldENsYXNzKCk7XG4gIH1cbn1cbiJdfQ==