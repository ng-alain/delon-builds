/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Host, ElementRef, Renderer2, Optional, } from '@angular/core';
import { SEContainerComponent } from './edit-container.component';
var SETitleComponent = /** @class */ (function () {
    function SETitleComponent(parent, el, ren) {
        this.parent = parent;
        this.ren = ren;
        if (parent == null) {
            throw new Error("[se-title] must include 'se-container' component");
        }
        this.el = el.nativeElement;
    }
    /**
     * @return {?}
     */
    SETitleComponent.prototype.setClass = /**
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
    SETitleComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClass();
    };
    SETitleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'se-title, [se-title]',
                    template: '<ng-content></ng-content>',
                    host: {
                        '[class.se__title]': 'true',
                    }
                }] }
    ];
    /** @nocollapse */
    SETitleComponent.ctorParameters = function () { return [
        { type: SEContainerComponent, decorators: [{ type: Host }, { type: Optional }] },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    return SETitleComponent;
}());
export { SETitleComponent };
if (false) {
    /** @type {?} */
    SETitleComponent.prototype.el;
    /** @type {?} */
    SETitleComponent.prototype.parent;
    /** @type {?} */
    SETitleComponent.prototype.ren;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC10aXRsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL2VkaXQvIiwic291cmNlcyI6WyJlZGl0LXRpdGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxJQUFJLEVBQ0osVUFBVSxFQUNWLFNBQVMsRUFFVCxRQUFRLEdBQ1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7O0lBV2hFLDBCQUdVLE1BQTRCLEVBQ3BDLEVBQWMsRUFDTjtRQUZBLFdBQU0sR0FBTixNQUFNLENBQXNCO1FBRTVCLFFBQUcsR0FBSCxHQUFHO1FBRVgsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1lBQ2xCLE1BQU0sSUFBSSxLQUFLLENBQUMsa0RBQWtELENBQUMsQ0FBQztTQUNyRTtRQUNELElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQztLQUM1Qjs7OztJQUVPLG1DQUFROzs7O1FBQ04sSUFBQSwyQkFBTSxDQUFpQjtRQUN2QixJQUFBLFlBQUUsQ0FBVTtRQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsY0FBYyxFQUFLLE1BQU0sR0FBRyxDQUFDLE9BQUksQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxlQUFlLEVBQUssTUFBTSxHQUFHLENBQUMsT0FBSSxDQUFDLENBQUM7Ozs7O0lBRzVELG1DQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUNqQjs7Z0JBL0JGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxJQUFJLEVBQUU7d0JBQ0osbUJBQW1CLEVBQUUsTUFBTTtxQkFDNUI7aUJBQ0Y7Ozs7Z0JBUlEsb0JBQW9CLHVCQVl4QixJQUFJLFlBQ0osUUFBUTtnQkFsQlgsVUFBVTtnQkFDVixTQUFTOzsyQkFKWDs7U0FpQmEsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBIb3N0LFxuICBFbGVtZW50UmVmLFxuICBSZW5kZXJlcjIsXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU0VDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL2VkaXQtY29udGFpbmVyLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NlLXRpdGxlLCBbc2UtdGl0bGVdJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3Muc2VfX3RpdGxlXSc6ICd0cnVlJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgU0VUaXRsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihcbiAgICBASG9zdCgpXG4gICAgQE9wdGlvbmFsKClcbiAgICBwcml2YXRlIHBhcmVudDogU0VDb250YWluZXJDb21wb25lbnQsXG4gICAgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW46IFJlbmRlcmVyMixcbiAgKSB7XG4gICAgaWYgKHBhcmVudCA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFtzZS10aXRsZV0gbXVzdCBpbmNsdWRlICdzZS1jb250YWluZXInIGNvbXBvbmVudGApO1xuICAgIH1cbiAgICB0aGlzLmVsID0gZWwubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIHByaXZhdGUgc2V0Q2xhc3MoKSB7XG4gICAgY29uc3QgeyBndXR0ZXIgfSA9IHRoaXMucGFyZW50O1xuICAgIGNvbnN0IHsgZWwgfSA9IHRoaXM7XG4gICAgdGhpcy5yZW4uc2V0U3R5bGUoZWwsICdwYWRkaW5nLWxlZnQnLCBgJHtndXR0ZXIgLyAyfXB4YCk7XG4gICAgdGhpcy5yZW4uc2V0U3R5bGUoZWwsICdwYWRkaW5nLXJpZ2h0JywgYCR7Z3V0dGVyIC8gMn1weGApO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zZXRDbGFzcygpO1xuICB9XG59XG4iXX0=