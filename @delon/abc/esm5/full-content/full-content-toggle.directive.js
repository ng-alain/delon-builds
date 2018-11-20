/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Directive, HostListener } from '@angular/core';
import { FullContentComponent } from './full-content.component';
var FullContentToggleDirective = /** @class */ (function () {
    function FullContentToggleDirective(parent) {
        this.parent = parent;
    }
    /**
     * @return {?}
     */
    FullContentToggleDirective.prototype._click = /**
     * @return {?}
     */
    function () {
        this.parent.toggle();
    };
    FullContentToggleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[full-toggle]',
                },] }
    ];
    /** @nocollapse */
    FullContentToggleDirective.ctorParameters = function () { return [
        { type: FullContentComponent }
    ]; };
    FullContentToggleDirective.propDecorators = {
        _click: [{ type: HostListener, args: ['click',] }]
    };
    return FullContentToggleDirective;
}());
export { FullContentToggleDirective };
if (false) {
    /** @type {?} */
    FullContentToggleDirective.prototype.parent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbC1jb250ZW50LXRvZ2dsZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL2Z1bGwtY29udGVudC8iLCJzb3VyY2VzIjpbImZ1bGwtY29udGVudC10b2dnbGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUVoRTtJQUlFLG9DQUFvQixNQUE0QjtRQUE1QixXQUFNLEdBQU4sTUFBTSxDQUFzQjtJQUFHLENBQUM7Ozs7SUFHcEQsMkNBQU07OztJQUROO1FBRUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN2QixDQUFDOztnQkFURixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7aUJBQzFCOzs7O2dCQUpRLG9CQUFvQjs7O3lCQVExQixZQUFZLFNBQUMsT0FBTzs7SUFJdkIsaUNBQUM7Q0FBQSxBQVZELElBVUM7U0FQWSwwQkFBMEI7OztJQUN6Qiw0Q0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRnVsbENvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuL2Z1bGwtY29udGVudC5jb21wb25lbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZnVsbC10b2dnbGVdJyxcbn0pXG5leHBvcnQgY2xhc3MgRnVsbENvbnRlbnRUb2dnbGVEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhcmVudDogRnVsbENvbnRlbnRDb21wb25lbnQpIHt9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBfY2xpY2soKSB7XG4gICAgdGhpcy5wYXJlbnQudG9nZ2xlKCk7XG4gIH1cbn1cbiJdfQ==