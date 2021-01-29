/**
 * @fileoverview added by tsickle
 * Generated from: abc/pdf.type.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function AlainPdfConfig() { }
if (false) {
    /**
     * [pdf.js](https://github.com/mozilla/pdf.js) library root url, Default: `https://cdn.jsdelivr.net/npm/pdfjs-dist\@2.5.207/`
     *
     * **Note** That only the root path, muse be ending with `/`
     * @type {?|undefined}
     */
    AlainPdfConfig.prototype.lib;
    /**
     * Show single or all pages altogether, Default: `true`
     * @type {?|undefined}
     */
    AlainPdfConfig.prototype.showAll;
    /**
     * Enable text rendering, allows to select text, Default: `true`
     * @type {?|undefined}
     */
    AlainPdfConfig.prototype.renderText;
    /**
     * Show page borders, Default: `false`
     * @type {?|undefined}
     */
    AlainPdfConfig.prototype.showBorders;
    /**
     * Default: `true`
     * - if set to `true` - size will be as same as original document
     * - if set to `false` - size will be as same as container block
     * @type {?|undefined}
     */
    AlainPdfConfig.prototype.originalSize;
    /**
     * You can show your document in original size, and make sure that it's not bigger then container block. Default: `false`
     * @type {?|undefined}
     */
    AlainPdfConfig.prototype.fitToPage;
    /**
     * Turn on or off auto resize, Default: `true`
     * **Important** To make work - make sure that `[originalSize]="false"` and pdf-viewer tag has `max-width` or `display` are set.
     * @type {?|undefined}
     */
    AlainPdfConfig.prototype.autoReSize;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLnR5cGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy91dGlsL2NvbmZpZy9hYmMvcGRmLnR5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxvQ0FrQ0M7Ozs7Ozs7O0lBNUJDLDZCQUFhOzs7OztJQUliLGlDQUFrQjs7Ozs7SUFJbEIsb0NBQXFCOzs7OztJQUlyQixxQ0FBc0I7Ozs7Ozs7SUFNdEIsc0NBQXVCOzs7OztJQUl2QixtQ0FBb0I7Ozs7OztJQUtwQixvQ0FBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIEFsYWluUGRmQ29uZmlnIHtcbiAgLyoqXG4gICAqIFtwZGYuanNdKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL3BkZi5qcykgbGlicmFyeSByb290IHVybCwgRGVmYXVsdDogYGh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vcGRmanMtZGlzdEAyLjUuMjA3L2BcbiAgICpcbiAgICogKipOb3RlKiogVGhhdCBvbmx5IHRoZSByb290IHBhdGgsIG11c2UgYmUgZW5kaW5nIHdpdGggYC9gXG4gICAqL1xuICBsaWI/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBTaG93IHNpbmdsZSBvciBhbGwgcGFnZXMgYWx0b2dldGhlciwgRGVmYXVsdDogYHRydWVgXG4gICAqL1xuICBzaG93QWxsPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIEVuYWJsZSB0ZXh0IHJlbmRlcmluZywgYWxsb3dzIHRvIHNlbGVjdCB0ZXh0LCBEZWZhdWx0OiBgdHJ1ZWBcbiAgICovXG4gIHJlbmRlclRleHQ/OiBib29sZWFuO1xuICAvKipcbiAgICogU2hvdyBwYWdlIGJvcmRlcnMsIERlZmF1bHQ6IGBmYWxzZWBcbiAgICovXG4gIHNob3dCb3JkZXJzPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIERlZmF1bHQ6IGB0cnVlYFxuICAgKiAtIGlmIHNldCB0byBgdHJ1ZWAgLSBzaXplIHdpbGwgYmUgYXMgc2FtZSBhcyBvcmlnaW5hbCBkb2N1bWVudFxuICAgKiAtIGlmIHNldCB0byBgZmFsc2VgIC0gc2l6ZSB3aWxsIGJlIGFzIHNhbWUgYXMgY29udGFpbmVyIGJsb2NrXG4gICAqL1xuICBvcmlnaW5hbFNpemU/OiBib29sZWFuO1xuICAvKipcbiAgICogWW91IGNhbiBzaG93IHlvdXIgZG9jdW1lbnQgaW4gb3JpZ2luYWwgc2l6ZSwgYW5kIG1ha2Ugc3VyZSB0aGF0IGl0J3Mgbm90IGJpZ2dlciB0aGVuIGNvbnRhaW5lciBibG9jay4gRGVmYXVsdDogYGZhbHNlYFxuICAgKi9cbiAgZml0VG9QYWdlPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIFR1cm4gb24gb3Igb2ZmIGF1dG8gcmVzaXplLCBEZWZhdWx0OiBgdHJ1ZWBcbiAgICogKipJbXBvcnRhbnQqKiBUbyBtYWtlIHdvcmsgLSBtYWtlIHN1cmUgdGhhdCBgW29yaWdpbmFsU2l6ZV09XCJmYWxzZVwiYCBhbmQgcGRmLXZpZXdlciB0YWcgaGFzIGBtYXgtd2lkdGhgIG9yIGBkaXNwbGF5YCBhcmUgc2V0LlxuICAgKi9cbiAgYXV0b1JlU2l6ZT86IGJvb2xlYW47XG59XG4iXX0=