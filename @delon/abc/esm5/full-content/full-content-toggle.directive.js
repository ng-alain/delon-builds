/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbC1jb250ZW50LXRvZ2dsZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL2Z1bGwtY29udGVudC8iLCJzb3VyY2VzIjpbImZ1bGwtY29udGVudC10b2dnbGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRWhFO0lBUUUsb0NBQW9CLE1BQTRCO1FBQTVCLFdBQU0sR0FBTixNQUFNLENBQXNCO0lBQUcsQ0FBQzs7OztJQUVwRCwyQ0FBTTs7O0lBQU47UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3ZCLENBQUM7O2dCQVpGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLElBQUksRUFBRTt3QkFDSixTQUFTLEVBQUUsVUFBVTtxQkFDdEI7aUJBQ0Y7Ozs7Z0JBUlEsb0JBQW9COztJQWU3QixpQ0FBQztDQUFBLEFBYkQsSUFhQztTQU5ZLDBCQUEwQjs7Ozs7O0lBQ3pCLDRDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRnVsbENvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuL2Z1bGwtY29udGVudC5jb21wb25lbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZnVsbC10b2dnbGVdJyxcbiAgZXhwb3J0QXM6ICdmdWxsVG9nZ2xlJyxcbiAgaG9zdDoge1xuICAgICcoY2xpY2spJzogJ19jbGljaygpJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgRnVsbENvbnRlbnRUb2dnbGVEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhcmVudDogRnVsbENvbnRlbnRDb21wb25lbnQpIHt9XG5cbiAgX2NsaWNrKCkge1xuICAgIHRoaXMucGFyZW50LnRvZ2dsZSgpO1xuICB9XG59XG4iXX0=