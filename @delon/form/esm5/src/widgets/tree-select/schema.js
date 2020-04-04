/**
 * @fileoverview added by tsickle
 * Generated from: src/widgets/tree-select/schema.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function SFTreeSelectWidgetSchema() { }
if (false) {
    /**
     * 异步数据源
     * @type {?|undefined}
     */
    SFTreeSelectWidgetSchema.prototype.asyncData;
    /** @type {?|undefined} */
    SFTreeSelectWidgetSchema.prototype.size;
    /** @type {?|undefined} */
    SFTreeSelectWidgetSchema.prototype.placeholder;
    /**
     * 支持清除，默认：`false`
     * @type {?|undefined}
     */
    SFTreeSelectWidgetSchema.prototype.allowClear;
    /**
     * 下拉菜单和选择器同宽，默认：`true`
     * @type {?|undefined}
     */
    SFTreeSelectWidgetSchema.prototype.dropdownMatchSelectWidth;
    /**
     * 下拉菜单的 style 属性
     * @type {?|undefined}
     */
    SFTreeSelectWidgetSchema.prototype.dropdownStyle;
    /**
     * 支持多选（当设置 `checkable` 时自动变为true），默认：`false`
     * @type {?|undefined}
     */
    SFTreeSelectWidgetSchema.prototype.multiple;
    /**
     * 节点前添加 Checkbox 复选框，默认：`false`
     * @type {?|undefined}
     */
    SFTreeSelectWidgetSchema.prototype.checkable;
    /**
     * 节点前添加展开图标，默认：`true`
     * @type {?|undefined}
     */
    SFTreeSelectWidgetSchema.prototype.showExpand;
    /**
     * 节点前添加展开图标，默认：`false`
     * @type {?|undefined}
     */
    SFTreeSelectWidgetSchema.prototype.showLine;
    /**
     * 默认展开所有树节点，默认：`false`
     * @type {?|undefined}
     */
    SFTreeSelectWidgetSchema.prototype.defaultExpandAll;
    /**
     * 如何在输入框显示所选的节点值的方法
     * @type {?|undefined}
     */
    SFTreeSelectWidgetSchema.prototype.displayWith;
    /**
     * 点击展开树节点图标调用
     * @type {?|undefined}
     */
    SFTreeSelectWidgetSchema.prototype.expandChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy90cmVlLXNlbGVjdC9zY2hlbWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFLQSw4Q0EyREM7Ozs7OztJQXZEQyw2Q0FBaUQ7O0lBRWpELHdDQUFpQjs7SUFFakIsK0NBQXFCOzs7OztJQUtyQiw4Q0FBcUI7Ozs7O0lBS3JCLDREQUFtQzs7Ozs7SUFLbkMsaURBQXVCOzs7OztJQUt2Qiw0Q0FBbUI7Ozs7O0lBS25CLDZDQUFvQjs7Ozs7SUFLcEIsOENBQXFCOzs7OztJQUtyQiw0Q0FBbUI7Ozs7O0lBS25CLG9EQUEyQjs7Ozs7SUFLM0IsK0NBQXVEOzs7OztJQUt2RCxnREFBb0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOekZvcm1hdEVtaXRFdmVudCwgTnpUcmVlTm9kZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90cmVlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFNGU2NoZW1hRW51bSwgU0ZTY2hlbWFFbnVtVHlwZSB9IGZyb20gJy4uLy4uL3NjaGVtYSc7XG5pbXBvcnQgeyBTRkRMU1NpemUsIFNGVUlTY2hlbWFJdGVtIH0gZnJvbSAnLi4vLi4vc2NoZW1hL3VpJztcblxuZXhwb3J0IGludGVyZmFjZSBTRlRyZWVTZWxlY3RXaWRnZXRTY2hlbWEgZXh0ZW5kcyBTRlVJU2NoZW1hSXRlbSB7XG4gIC8qKlxuICAgKiDlvILmraXmlbDmja7mupBcbiAgICovXG4gIGFzeW5jRGF0YT86ICgpID0+IE9ic2VydmFibGU8U0ZTY2hlbWFFbnVtVHlwZVtdPjtcblxuICBzaXplPzogU0ZETFNTaXplO1xuXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiDmlK/mjIHmuIXpmaTvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBhbGxvd0NsZWFyPzogYm9vbGVhbjtcblxuICAvKipcbiAgICog5LiL5ouJ6I+c5Y2V5ZKM6YCJ5oup5Zmo5ZCM5a6977yM6buY6K6k77yaYHRydWVgXG4gICAqL1xuICBkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGg/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDkuIvmi4noj5zljZXnmoQgc3R5bGUg5bGe5oCnXG4gICAqL1xuICBkcm9wZG93blN0eWxlPzogb2JqZWN0O1xuXG4gIC8qKlxuICAgKiDmlK/mjIHlpJrpgInvvIjlvZPorr7nva4gYGNoZWNrYWJsZWAg5pe26Ieq5Yqo5Y+Y5Li6dHJ1Ze+8ie+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIG11bHRpcGxlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICog6IqC54K55YmN5re75YqgIENoZWNrYm94IOWkjemAieahhu+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIGNoZWNrYWJsZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOiKgueCueWJjea3u+WKoOWxleW8gOWbvuagh++8jOm7mOiupO+8mmB0cnVlYFxuICAgKi9cbiAgc2hvd0V4cGFuZD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOiKgueCueWJjea3u+WKoOWxleW8gOWbvuagh++8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIHNob3dMaW5lPzogYm9vbGVhbjtcblxuICAvKipcbiAgICog6buY6K6k5bGV5byA5omA5pyJ5qCR6IqC54K577yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgZGVmYXVsdEV4cGFuZEFsbD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOWmguS9leWcqOi+k+WFpeahhuaYvuekuuaJgOmAieeahOiKgueCueWAvOeahOaWueazlVxuICAgKi9cbiAgZGlzcGxheVdpdGg/OiAobm9kZTogTnpUcmVlTm9kZSkgPT4gc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gIC8qKlxuICAgKiDngrnlh7vlsZXlvIDmoJHoioLngrnlm77moIfosIPnlKhcbiAgICovXG4gIGV4cGFuZENoYW5nZT86IChlOiBOekZvcm1hdEVtaXRFdmVudCkgPT4gT2JzZXJ2YWJsZTxTRlNjaGVtYUVudW1bXT47XG59XG4iXX0=