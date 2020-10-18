/**
 * @fileoverview added by tsickle
 * Generated from: src/acl.type.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * NOTE：`ACLType` 类型可能会被其他类库所引用，为了减少类库间彼此的依赖性，其他类库会以复制的形式存在
 * 当这里有变化时，请务必同步更新，涉及：`MenuService.acl`
 * TODO: 尝试增加 `@delon/core` 类库用于处理这种通用型
 */
/**
 * @record
 */
export function ACLType() { }
if (false) {
    /**
     * 角色
     * @type {?|undefined}
     */
    ACLType.prototype.role;
    /**
     * 权限点
     * @type {?|undefined}
     */
    ACLType.prototype.ability;
    /**
     * 校验模式，默认：`oneOf`
     * - `allOf` 表示必须满足所有角色或权限点数组算有效
     * - `oneOf` 表示只须满足角色或权限点数组中的一项算有效
     * @type {?|undefined}
     */
    ACLType.prototype.mode;
    /**
     * 是否取反，即结果为 `true` 时表示未授权
     * @type {?|undefined}
     */
    ACLType.prototype.except;
    /* Skipping unhandled member: [key: string]: NzSafeAny;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNsLnR5cGUuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdnN0cy93b3JrLzEvcy9wYWNrYWdlcy9hY2wvIiwic291cmNlcyI6WyJzcmMvYWNsLnR5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVFBLDZCQXVCQzs7Ozs7O0lBbkJDLHVCQUFnQjs7Ozs7SUFJaEIsMEJBQThCOzs7Ozs7O0lBTzlCLHVCQUF5Qjs7Ozs7SUFLekIseUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBOT1RF77yaYEFDTFR5cGVgIOexu+Wei+WPr+iDveS8muiiq+WFtuS7luexu+W6k+aJgOW8leeUqO+8jOS4uuS6huWHj+Wwkeexu+W6k+mXtOW9vOatpOeahOS+nei1luaAp++8jOWFtuS7luexu+W6k+S8muS7peWkjeWItueahOW9ouW8j+WtmOWcqFxuICog5b2T6L+Z6YeM5pyJ5Y+Y5YyW5pe277yM6K+35Yqh5b+F5ZCM5q2l5pu05paw77yM5raJ5Y+K77yaYE1lbnVTZXJ2aWNlLmFjbGBcbiAqIFRPRE86IOWwneivleWinuWKoCBgQGRlbG9uL2NvcmVgIOexu+W6k+eUqOS6juWkhOeQhui/meenjemAmueUqOWei1xuICovXG5cbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQUNMVHlwZSB7XG4gIC8qKlxuICAgKiDop5LoibJcbiAgICovXG4gIHJvbGU/OiBzdHJpbmdbXTtcbiAgLyoqXG4gICAqIOadg+mZkOeCuVxuICAgKi9cbiAgYWJpbGl0eT86IG51bWJlcltdIHwgc3RyaW5nW107XG5cbiAgLyoqXG4gICAqIOagoemqjOaooeW8j++8jOm7mOiupO+8mmBvbmVPZmBcbiAgICogLSBgYWxsT2ZgIOihqOekuuW/hemhu+a7oei2s+aJgOacieinkuiJsuaIluadg+mZkOeCueaVsOe7hOeul+acieaViFxuICAgKiAtIGBvbmVPZmAg6KGo56S65Y+q6aG75ruh6Laz6KeS6Imy5oiW5p2D6ZmQ54K55pWw57uE5Lit55qE5LiA6aG5566X5pyJ5pWIXG4gICAqL1xuICBtb2RlPzogJ2FsbE9mJyB8ICdvbmVPZic7XG5cbiAgLyoqXG4gICAqIOaYr+WQpuWPluWPje+8jOWNs+e7k+aenOS4uiBgdHJ1ZWAg5pe26KGo56S65pyq5o6I5p2DXG4gICAqL1xuICBleGNlcHQ/OiBib29sZWFuO1xuXG4gIFtrZXk6IHN0cmluZ106IE56U2FmZUFueTtcbn1cblxuZXhwb3J0IHR5cGUgQUNMQ2FuVHlwZSA9IG51bWJlciB8IG51bWJlcltdIHwgc3RyaW5nIHwgc3RyaW5nW10gfCBBQ0xUeXBlO1xuIl19