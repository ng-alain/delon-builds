/**
 * @fileoverview added by tsickle
 * Generated from: full-content-toggle.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive } from '@angular/core';
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
                    exportAs: 'fullToggle',
                    host: {
                        '(click)': '_click()',
                    },
                },] }
    ];
    /** @nocollapse */
    FullContentToggleDirective.ctorParameters = function () { return [
        { type: FullContentComponent }
    ]; };
    return FullContentToggleDirective;
}());
export { FullContentToggleDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FullContentToggleDirective.prototype.parent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbC1jb250ZW50LXRvZ2dsZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL2Z1bGwtY29udGVudC8iLCJzb3VyY2VzIjpbImZ1bGwtY29udGVudC10b2dnbGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUVoRTtJQVFFLG9DQUFvQixNQUE0QjtRQUE1QixXQUFNLEdBQU4sTUFBTSxDQUFzQjtJQUFHLENBQUM7Ozs7SUFFcEQsMkNBQU07OztJQUFOO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN2QixDQUFDOztnQkFaRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFFBQVEsRUFBRSxZQUFZO29CQUN0QixJQUFJLEVBQUU7d0JBQ0osU0FBUyxFQUFFLFVBQVU7cUJBQ3RCO2lCQUNGOzs7O2dCQVJRLG9CQUFvQjs7SUFlN0IsaUNBQUM7Q0FBQSxBQWJELElBYUM7U0FOWSwwQkFBMEI7Ozs7OztJQUN6Qiw0Q0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZ1bGxDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi9mdWxsLWNvbnRlbnQuY29tcG9uZW50JztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2Z1bGwtdG9nZ2xlXScsXG4gIGV4cG9ydEFzOiAnZnVsbFRvZ2dsZScsXG4gIGhvc3Q6IHtcbiAgICAnKGNsaWNrKSc6ICdfY2xpY2soKScsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIEZ1bGxDb250ZW50VG9nZ2xlRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYXJlbnQ6IEZ1bGxDb250ZW50Q29tcG9uZW50KSB7fVxuXG4gIF9jbGljaygpIHtcbiAgICB0aGlzLnBhcmVudC50b2dnbGUoKTtcbiAgfVxufVxuIl19