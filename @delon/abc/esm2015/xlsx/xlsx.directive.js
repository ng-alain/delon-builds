/**
 * @fileoverview added by tsickle
 * Generated from: xlsx.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input } from '@angular/core';
import { XlsxService } from './xlsx.service';
export class XlsxDirective {
    /**
     * @param {?} srv
     */
    constructor(srv) {
        this.srv = srv;
    }
    /**
     * @return {?}
     */
    _click() {
        this.srv.export(this.data);
    }
}
XlsxDirective.decorators = [
    { type: Directive, args: [{
                selector: '[xlsx]',
                exportAs: 'xlsx',
                host: {
                    '(click)': '_click()',
                },
            },] }
];
/** @nocollapse */
XlsxDirective.ctorParameters = () => [
    { type: XlsxService }
];
XlsxDirective.propDecorators = {
    data: [{ type: Input, args: ['xlsx',] }]
};
if (false) {
    /** @type {?} */
    XlsxDirective.prototype.data;
    /**
     * @type {?}
     * @private
     */
    XlsxDirective.prototype.srv;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGxzeC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMveGxzeC94bHN4LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVU3QyxNQUFNLE9BQU8sYUFBYTs7OztJQUd4QixZQUFvQixHQUFnQjtRQUFoQixRQUFHLEdBQUgsR0FBRyxDQUFhO0lBQUcsQ0FBQzs7OztJQUV4QyxNQUFNO1FBQ0osSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7OztZQWRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsUUFBUTtnQkFDbEIsUUFBUSxFQUFFLE1BQU07Z0JBQ2hCLElBQUksRUFBRTtvQkFDSixTQUFTLEVBQUUsVUFBVTtpQkFDdEI7YUFDRjs7OztZQVRRLFdBQVc7OzttQkFXakIsS0FBSyxTQUFDLE1BQU07Ozs7SUFBYiw2QkFBdUM7Ozs7O0lBRTNCLDRCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFhsc3hTZXJ2aWNlIH0gZnJvbSAnLi94bHN4LnNlcnZpY2UnO1xuaW1wb3J0IHsgWGxzeEV4cG9ydE9wdGlvbnMgfSBmcm9tICcuL3hsc3gudHlwZXMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbeGxzeF0nLFxuICBleHBvcnRBczogJ3hsc3gnLFxuICBob3N0OiB7XG4gICAgJyhjbGljayknOiAnX2NsaWNrKCknLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBYbHN4RGlyZWN0aXZlIHtcbiAgQElucHV0KCd4bHN4JykgZGF0YTogWGxzeEV4cG9ydE9wdGlvbnM7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzcnY6IFhsc3hTZXJ2aWNlKSB7fVxuXG4gIF9jbGljaygpIHtcbiAgICB0aGlzLnNydi5leHBvcnQodGhpcy5kYXRhKTtcbiAgfVxufVxuIl19