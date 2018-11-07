/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
export class HTMLPipe {
    /**
     * @param {?} dom
     */
    constructor(dom) {
        this.dom = dom;
    }
    /**
     * @param {?} html
     * @return {?}
     */
    transform(html) {
        return html ? (/** @type {?} */ (this.dom.bypassSecurityTrustHtml(html))) : '';
    }
}
HTMLPipe.decorators = [
    { type: Pipe, args: [{ name: 'html' },] }
];
/** @nocollapse */
HTMLPipe.ctorParameters = () => [
    { type: DomSanitizer }
];
if (false) {
    /** @type {?} */
    HTMLPipe.prototype.dom;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHRtbC5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL3RoZW1lLyIsInNvdXJjZXMiOlsic3JjL3BpcGVzL3NhZmUvaHRtbC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWlCLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFHekQsTUFBTSxPQUFPLFFBQVE7Ozs7SUFDbkIsWUFBb0IsR0FBaUI7UUFBakIsUUFBRyxHQUFILEdBQUcsQ0FBYztJQUFHLENBQUM7Ozs7O0lBRXpDLFNBQVMsQ0FBQyxJQUFZO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxtQkFBQSxJQUFJLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxFQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNuRSxDQUFDOzs7WUFORixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFOzs7O1lBRmIsWUFBWTs7OztJQUlQLHVCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGVUcmFuc2Zvcm0sIFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5AUGlwZSh7IG5hbWU6ICdodG1sJyB9KVxuZXhwb3J0IGNsYXNzIEhUTUxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZG9tOiBEb21TYW5pdGl6ZXIpIHt9XG5cbiAgdHJhbnNmb3JtKGh0bWw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGh0bWwgPyB0aGlzLmRvbS5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChodG1sKSBhcyBhbnkgOiAnJztcbiAgfVxufVxuIl19