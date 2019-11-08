/**
 * @fileoverview added by tsickle
 * Generated from: src/pipes/safe/url.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        return url ? this.dom.bypassSecurityTrustUrl(url) : '';
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
    /**
     * @type {?}
     * @private
     */
    URLPipe.prototype.dom;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdGhlbWUvIiwic291cmNlcyI6WyJzcmMvcGlwZXMvc2FmZS91cmwucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxZQUFZLEVBQVcsTUFBTSwyQkFBMkIsQ0FBQztBQUVsRTtJQUVFLGlCQUFvQixHQUFpQjtRQUFqQixRQUFHLEdBQUgsR0FBRyxDQUFjO0lBQUcsQ0FBQzs7Ozs7SUFFekMsMkJBQVM7Ozs7SUFBVCxVQUFVLEdBQVc7UUFDbkIsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN6RCxDQUFDOztnQkFORixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFOzs7O2dCQUZaLFlBQVk7O0lBU3JCLGNBQUM7Q0FBQSxBQVBELElBT0M7U0FOWSxPQUFPOzs7Ozs7SUFDTixzQkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVVcmwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuQFBpcGUoeyBuYW1lOiAndXJsJyB9KVxuZXhwb3J0IGNsYXNzIFVSTFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkb206IERvbVNhbml0aXplcikge31cblxuICB0cmFuc2Zvcm0odXJsOiBzdHJpbmcpOiBzdHJpbmcgfCBTYWZlVXJsIHtcbiAgICByZXR1cm4gdXJsID8gdGhpcy5kb20uYnlwYXNzU2VjdXJpdHlUcnVzdFVybCh1cmwpIDogJyc7XG4gIH1cbn1cbiJdfQ==