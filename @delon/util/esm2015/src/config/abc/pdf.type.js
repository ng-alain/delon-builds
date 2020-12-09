/**
 * @fileoverview added by tsickle
 * Generated from: src/config/abc/pdf.type.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLnR5cGUuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vcGFja2FnZXMvdXRpbC8iLCJzb3VyY2VzIjpbInNyYy9jb25maWcvYWJjL3BkZi50eXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsb0NBa0NDOzs7Ozs7OztJQTVCQyw2QkFBYTs7Ozs7SUFJYixpQ0FBa0I7Ozs7O0lBSWxCLG9DQUFxQjs7Ozs7SUFJckIscUNBQXNCOzs7Ozs7O0lBTXRCLHNDQUF1Qjs7Ozs7SUFJdkIsbUNBQW9COzs7Ozs7SUFLcEIsb0NBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBBbGFpblBkZkNvbmZpZyB7XG4gIC8qKlxuICAgKiBbcGRmLmpzXShodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9wZGYuanMpIGxpYnJhcnkgcm9vdCB1cmwsIERlZmF1bHQ6IGBodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3BkZmpzLWRpc3RAMi41LjIwNy9gXG4gICAqXG4gICAqICoqTm90ZSoqIFRoYXQgb25seSB0aGUgcm9vdCBwYXRoLCBtdXNlIGJlIGVuZGluZyB3aXRoIGAvYFxuICAgKi9cbiAgbGliPzogc3RyaW5nO1xuICAvKipcbiAgICogU2hvdyBzaW5nbGUgb3IgYWxsIHBhZ2VzIGFsdG9nZXRoZXIsIERlZmF1bHQ6IGB0cnVlYFxuICAgKi9cbiAgc2hvd0FsbD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBFbmFibGUgdGV4dCByZW5kZXJpbmcsIGFsbG93cyB0byBzZWxlY3QgdGV4dCwgRGVmYXVsdDogYHRydWVgXG4gICAqL1xuICByZW5kZXJUZXh0PzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIFNob3cgcGFnZSBib3JkZXJzLCBEZWZhdWx0OiBgZmFsc2VgXG4gICAqL1xuICBzaG93Qm9yZGVycz86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBEZWZhdWx0OiBgdHJ1ZWBcbiAgICogLSBpZiBzZXQgdG8gYHRydWVgIC0gc2l6ZSB3aWxsIGJlIGFzIHNhbWUgYXMgb3JpZ2luYWwgZG9jdW1lbnRcbiAgICogLSBpZiBzZXQgdG8gYGZhbHNlYCAtIHNpemUgd2lsbCBiZSBhcyBzYW1lIGFzIGNvbnRhaW5lciBibG9ja1xuICAgKi9cbiAgb3JpZ2luYWxTaXplPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIFlvdSBjYW4gc2hvdyB5b3VyIGRvY3VtZW50IGluIG9yaWdpbmFsIHNpemUsIGFuZCBtYWtlIHN1cmUgdGhhdCBpdCdzIG5vdCBiaWdnZXIgdGhlbiBjb250YWluZXIgYmxvY2suIERlZmF1bHQ6IGBmYWxzZWBcbiAgICovXG4gIGZpdFRvUGFnZT86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBUdXJuIG9uIG9yIG9mZiBhdXRvIHJlc2l6ZSwgRGVmYXVsdDogYHRydWVgXG4gICAqICoqSW1wb3J0YW50KiogVG8gbWFrZSB3b3JrIC0gbWFrZSBzdXJlIHRoYXQgYFtvcmlnaW5hbFNpemVdPVwiZmFsc2VcImAgYW5kIHBkZi12aWV3ZXIgdGFnIGhhcyBgbWF4LXdpZHRoYCBvciBgZGlzcGxheWAgYXJlIHNldC5cbiAgICovXG4gIGF1dG9SZVNpemU/OiBib29sZWFuO1xufVxuIl19