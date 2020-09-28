/**
 * @fileoverview added by tsickle
 * Generated from: src/config/acl/acl.type.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function AlainACLConfig() { }
if (false) {
    /**
     * Router URL when guard fail, default: `/403`
     * @type {?|undefined}
     */
    AlainACLConfig.prototype.guard_url;
    /**
     * `can` before execution callback
     * @type {?|undefined}
     */
    AlainACLConfig.prototype.preCan;
}
/**
 * @record
 */
export function AlainACLType() { }
if (false) {
    /**
     * 角色
     * @type {?|undefined}
     */
    AlainACLType.prototype.role;
    /**
     * 权限点
     * @type {?|undefined}
     */
    AlainACLType.prototype.ability;
    /**
     * 校验模式，默认：`oneOf`
     * - `allOf` 表示必须满足所有角色或权限点数组算有效
     * - `oneOf` 表示只须满足角色或权限点数组中的一项算有效
     * @type {?|undefined}
     */
    AlainACLType.prototype.mode;
    /**
     * 是否取反，即结果为 `true` 时表示未授权
     * @type {?|undefined}
     */
    AlainACLType.prototype.except;
    /* Skipping unhandled member: [key: string]: NzSafeAny;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNsLnR5cGUuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdnN0cy93b3JrLzEvcy9wYWNrYWdlcy91dGlsLyIsInNvdXJjZXMiOlsic3JjL2NvbmZpZy9hY2wvYWNsLnR5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQSxvQ0FVQzs7Ozs7O0lBTkMsbUNBQW1COzs7OztJQUtuQixnQ0FBK0c7Ozs7O0FBR2pILGtDQXVCQzs7Ozs7O0lBbkJDLDRCQUFnQjs7Ozs7SUFJaEIsK0JBQThCOzs7Ozs7O0lBTzlCLDRCQUF5Qjs7Ozs7SUFLekIsOEJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBBbGFpbkFDTENvbmZpZyB7XG4gIC8qKlxuICAgKiBSb3V0ZXIgVVJMIHdoZW4gZ3VhcmQgZmFpbCwgZGVmYXVsdDogYC80MDNgXG4gICAqL1xuICBndWFyZF91cmw/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIGBjYW5gIGJlZm9yZSBleGVjdXRpb24gY2FsbGJhY2tcbiAgICovXG4gIHByZUNhbj86ICgocm9sZU9yQWJpbGl0eTogbnVtYmVyIHwgbnVtYmVyW10gfCBzdHJpbmcgfCBzdHJpbmdbXSB8IEFsYWluQUNMVHlwZSkgPT4gQWxhaW5BQ0xUeXBlIHwgbnVsbCkgfCBudWxsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFsYWluQUNMVHlwZSB7XG4gIC8qKlxuICAgKiDop5LoibJcbiAgICovXG4gIHJvbGU/OiBzdHJpbmdbXTtcbiAgLyoqXG4gICAqIOadg+mZkOeCuVxuICAgKi9cbiAgYWJpbGl0eT86IG51bWJlcltdIHwgc3RyaW5nW107XG5cbiAgLyoqXG4gICAqIOagoemqjOaooeW8j++8jOm7mOiupO+8mmBvbmVPZmBcbiAgICogLSBgYWxsT2ZgIOihqOekuuW/hemhu+a7oei2s+aJgOacieinkuiJsuaIluadg+mZkOeCueaVsOe7hOeul+acieaViFxuICAgKiAtIGBvbmVPZmAg6KGo56S65Y+q6aG75ruh6Laz6KeS6Imy5oiW5p2D6ZmQ54K55pWw57uE5Lit55qE5LiA6aG5566X5pyJ5pWIXG4gICAqL1xuICBtb2RlPzogJ2FsbE9mJyB8ICdvbmVPZic7XG5cbiAgLyoqXG4gICAqIOaYr+WQpuWPluWPje+8jOWNs+e7k+aenOS4uiBgdHJ1ZWAg5pe26KGo56S65pyq5o6I5p2DXG4gICAqL1xuICBleGNlcHQ/OiBib29sZWFuO1xuXG4gIFtrZXk6IHN0cmluZ106IE56U2FmZUFueTtcbn1cbiJdfQ==