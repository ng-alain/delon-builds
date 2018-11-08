/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
var URLPipe = /** @class */ (function () {
    function URLPipe(dom) {
        this.dom = dom;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    URLPipe.prototype.transform = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        return url ? (/** @type {?} */ (this.dom.bypassSecurityTrustUrl(url))) : '';
    };
    URLPipe.decorators = [
        { type: Pipe, args: [{ name: 'url' },] }
    ];
    /** @nocollapse */
    URLPipe.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    return URLPipe;
}());
export { URLPipe };
if (false) {
    /** @type {?} */
    URLPipe.prototype.dom;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdGhlbWUvIiwic291cmNlcyI6WyJzcmMvcGlwZXMvc2FmZS91cmwucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFpQixJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXpEO0lBRUUsaUJBQW9CLEdBQWlCO1FBQWpCLFFBQUcsR0FBSCxHQUFHLENBQWM7SUFBRyxDQUFDOzs7OztJQUV6QywyQkFBUzs7OztJQUFULFVBQVUsR0FBVztRQUNuQixPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsbUJBQUEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLENBQUMsRUFBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDaEUsQ0FBQzs7Z0JBTkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTs7OztnQkFGWixZQUFZOztJQVNyQixjQUFDO0NBQUEsQUFQRCxJQU9DO1NBTlksT0FBTzs7O0lBQ04sc0JBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZVRyYW5zZm9ybSwgUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbkBQaXBlKHsgbmFtZTogJ3VybCcgfSlcbmV4cG9ydCBjbGFzcyBVUkxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZG9tOiBEb21TYW5pdGl6ZXIpIHt9XG5cbiAgdHJhbnNmb3JtKHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdXJsID8gdGhpcy5kb20uYnlwYXNzU2VjdXJpdHlUcnVzdFVybCh1cmwpIGFzIGFueSA6ICcnO1xuICB9XG59XG4iXX0=