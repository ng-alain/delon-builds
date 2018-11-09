/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
var HTMLPipe = /** @class */ (function () {
    function HTMLPipe(dom) {
        this.dom = dom;
    }
    /**
     * @param {?} html
     * @return {?}
     */
    HTMLPipe.prototype.transform = /**
     * @param {?} html
     * @return {?}
     */
    function (html) {
        return html ? /** @type {?} */ (this.dom.bypassSecurityTrustHtml(html)) : '';
    };
    HTMLPipe.decorators = [
        { type: Pipe, args: [{ name: 'html' },] }
    ];
    /** @nocollapse */
    HTMLPipe.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    return HTMLPipe;
}());
export { HTMLPipe };
if (false) {
    /** @type {?} */
    HTMLPipe.prototype.dom;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHRtbC5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL3RoZW1lLyIsInNvdXJjZXMiOlsic3JjL3BpcGVzL3NhZmUvaHRtbC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWlCLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7O0lBSXZELGtCQUFvQixHQUFpQjtRQUFqQixRQUFHLEdBQUgsR0FBRyxDQUFjO0tBQUk7Ozs7O0lBRXpDLDRCQUFTOzs7O0lBQVQsVUFBVSxJQUFZO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLENBQUMsbUJBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQVEsRUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0tBQ2xFOztnQkFORixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFOzs7O2dCQUZiLFlBQVk7O21CQURyQjs7U0FJYSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZVRyYW5zZm9ybSwgUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbkBQaXBlKHsgbmFtZTogJ2h0bWwnIH0pXG5leHBvcnQgY2xhc3MgSFRNTFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkb206IERvbVNhbml0aXplcikge31cblxuICB0cmFuc2Zvcm0oaHRtbDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gaHRtbCA/IHRoaXMuZG9tLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKGh0bWwpIGFzIGFueSA6ICcnO1xuICB9XG59XG4iXX0=