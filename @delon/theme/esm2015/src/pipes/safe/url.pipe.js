/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
export class URLPipe {
    /**
     * @param {?} dom
     */
    constructor(dom) {
        this.dom = dom;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    transform(url) {
        return url ? this.dom.bypassSecurityTrustUrl(url) : '';
    }
}
URLPipe.decorators = [
    { type: Pipe, args: [{ name: 'url' },] }
];
/** @nocollapse */
URLPipe.ctorParameters = () => [
    { type: DomSanitizer }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    URLPipe.prototype.dom;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdGhlbWUvIiwic291cmNlcyI6WyJzcmMvcGlwZXMvc2FmZS91cmwucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLFlBQVksRUFBVyxNQUFNLDJCQUEyQixDQUFDO0FBR2xFLE1BQU0sT0FBTyxPQUFPOzs7O0lBQ2xCLFlBQW9CLEdBQWlCO1FBQWpCLFFBQUcsR0FBSCxHQUFHLENBQWM7SUFBRyxDQUFDOzs7OztJQUV6QyxTQUFTLENBQUMsR0FBVztRQUNuQixPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3pELENBQUM7OztZQU5GLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7Ozs7WUFGWixZQUFZOzs7Ozs7O0lBSVAsc0JBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlVXJsIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbkBQaXBlKHsgbmFtZTogJ3VybCcgfSlcbmV4cG9ydCBjbGFzcyBVUkxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZG9tOiBEb21TYW5pdGl6ZXIpIHt9XG5cbiAgdHJhbnNmb3JtKHVybDogc3RyaW5nKTogc3RyaW5nIHwgU2FmZVVybCB7XG4gICAgcmV0dXJuIHVybCA/IHRoaXMuZG9tLmJ5cGFzc1NlY3VyaXR5VHJ1c3RVcmwodXJsKSA6ICcnO1xuICB9XG59XG4iXX0=