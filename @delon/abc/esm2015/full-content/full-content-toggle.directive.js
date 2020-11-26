/**
 * @fileoverview added by tsickle
 * Generated from: full-content-toggle.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive } from '@angular/core';
import { FullContentComponent } from './full-content.component';
export class FullContentToggleDirective {
    /**
     * @param {?} parent
     */
    constructor(parent) {
        this.parent = parent;
    }
    /**
     * @return {?}
     */
    _click() {
        this.parent.toggle();
    }
}
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
FullContentToggleDirective.ctorParameters = () => [
    { type: FullContentComponent }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    FullContentToggleDirective.prototype.parent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbC1jb250ZW50LXRvZ2dsZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL2Z1bGwtY29udGVudC8iLCJzb3VyY2VzIjpbImZ1bGwtY29udGVudC10b2dnbGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQVNoRSxNQUFNLE9BQU8sMEJBQTBCOzs7O0lBQ3JDLFlBQW9CLE1BQTRCO1FBQTVCLFdBQU0sR0FBTixNQUFNLENBQXNCO0lBQUcsQ0FBQzs7OztJQUVwRCxNQUFNO1FBQ0osSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7WUFaRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFFBQVEsRUFBRSxZQUFZO2dCQUN0QixJQUFJLEVBQUU7b0JBQ0osU0FBUyxFQUFFLFVBQVU7aUJBQ3RCO2FBQ0Y7Ozs7WUFSUSxvQkFBb0I7Ozs7Ozs7SUFVZiw0Q0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZ1bGxDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi9mdWxsLWNvbnRlbnQuY29tcG9uZW50JztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2Z1bGwtdG9nZ2xlXScsXG4gIGV4cG9ydEFzOiAnZnVsbFRvZ2dsZScsXG4gIGhvc3Q6IHtcbiAgICAnKGNsaWNrKSc6ICdfY2xpY2soKScsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIEZ1bGxDb250ZW50VG9nZ2xlRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYXJlbnQ6IEZ1bGxDb250ZW50Q29tcG9uZW50KSB7fVxuXG4gIF9jbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLnBhcmVudC50b2dnbGUoKTtcbiAgfVxufVxuIl19