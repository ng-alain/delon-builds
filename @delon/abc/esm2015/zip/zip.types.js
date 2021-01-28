/**
 * @fileoverview added by tsickle
 * Generated from: zip.types.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function ZipWriteOptions() { }
if (false) {
    /**
     * save file name, default: `download.zip`
     * @type {?|undefined}
     */
    ZipWriteOptions.prototype.filename;
    /** @type {?|undefined} */
    ZipWriteOptions.prototype.options;
    /**
     * The optional function called on each internal update with the metadata.
     * @type {?|undefined}
     */
    ZipWriteOptions.prototype.update;
    /**
     * triggers when saveas
     * @type {?|undefined}
     */
    ZipWriteOptions.prototype.callback;
}
/**
 * @record
 */
export function ZipSaveOptions() { }
if (false) {
    /**
     * 指定保存文件名，默认 `download.zip`
     * @type {?|undefined}
     */
    ZipSaveOptions.prototype.filename;
    /**
     * JSZip [generateAsync](https://stuk.github.io/jszip/documentation/api_jszip/generate_async.html) 方法的 `options` 选项
     * @type {?|undefined}
     */
    ZipSaveOptions.prototype.options;
    /**
     * JSZip [generateAsync](https://stuk.github.io/jszip/documentation/api_jszip/generate_async.html) 方法的 `onUpdate` 回调
     * @type {?|undefined}
     */
    ZipSaveOptions.prototype.update;
    /**
     * 保存前回调方法
     * @type {?|undefined}
     */
    ZipSaveOptions.prototype.callback;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemlwLnR5cGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3ppcC96aXAudHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxxQ0FRQzs7Ozs7O0lBTkMsbUNBQWtCOztJQUNsQixrQ0FBYzs7Ozs7SUFFZCxpQ0FBaUM7Ozs7O0lBRWpDLG1DQUFzQjs7Ozs7QUFHeEIsb0NBaUJDOzs7Ozs7SUFiQyxrQ0FBa0I7Ozs7O0lBSWxCLGlDQUFjOzs7OztJQUlkLGdDQUF3RDs7Ozs7SUFJeEQsa0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBaaXBXcml0ZU9wdGlvbnMge1xuICAvKiogc2F2ZSBmaWxlIG5hbWUsIGRlZmF1bHQ6IGBkb3dubG9hZC56aXBgICovXG4gIGZpbGVuYW1lPzogc3RyaW5nO1xuICBvcHRpb25zPzogYW55O1xuICAvKiogVGhlIG9wdGlvbmFsIGZ1bmN0aW9uIGNhbGxlZCBvbiBlYWNoIGludGVybmFsIHVwZGF0ZSB3aXRoIHRoZSBtZXRhZGF0YS4gKi9cbiAgdXBkYXRlPzogKG1ldGFkYXRhOiBhbnkpID0+IHZvaWQ7XG4gIC8qKiB0cmlnZ2VycyB3aGVuIHNhdmVhcyAqL1xuICBjYWxsYmFjaz86ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgWmlwU2F2ZU9wdGlvbnMge1xuICAvKipcbiAgICog5oyH5a6a5L+d5a2Y5paH5Lu25ZCN77yM6buY6K6kIGBkb3dubG9hZC56aXBgXG4gICAqL1xuICBmaWxlbmFtZT86IHN0cmluZztcbiAgLyoqXG4gICAqIEpTWmlwIFtnZW5lcmF0ZUFzeW5jXShodHRwczovL3N0dWsuZ2l0aHViLmlvL2pzemlwL2RvY3VtZW50YXRpb24vYXBpX2pzemlwL2dlbmVyYXRlX2FzeW5jLmh0bWwpIOaWueazleeahCBgb3B0aW9uc2Ag6YCJ6aG5XG4gICAqL1xuICBvcHRpb25zPzogYW55O1xuICAvKipcbiAgICogSlNaaXAgW2dlbmVyYXRlQXN5bmNdKGh0dHBzOi8vc3R1ay5naXRodWIuaW8vanN6aXAvZG9jdW1lbnRhdGlvbi9hcGlfanN6aXAvZ2VuZXJhdGVfYXN5bmMuaHRtbCkg5pa55rOV55qEIGBvblVwZGF0ZWAg5Zue6LCDXG4gICAqL1xuICB1cGRhdGU/OiAocGVyY2VudDogbnVtYmVyLCBjdXJyZW50RmlsZTogc3RyaW5nKSA9PiB2b2lkO1xuICAvKipcbiAgICog5L+d5a2Y5YmN5Zue6LCD5pa55rOVXG4gICAqL1xuICBjYWxsYmFjaz86IChibG9iOiBCbG9iKSA9PiB2b2lkO1xufVxuIl19