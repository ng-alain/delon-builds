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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy90cmVlLXNlbGVjdC9zY2hlbWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFLQSw4Q0EyREM7Ozs7OztJQXZEQyw2Q0FBaUQ7O0lBRWpELHdDQUFpQjs7SUFFakIsK0NBQXFCOzs7OztJQUtyQiw4Q0FBcUI7Ozs7O0lBS3JCLDREQUFtQzs7Ozs7SUFLbkMsaURBQXVCOzs7OztJQUt2Qiw0Q0FBbUI7Ozs7O0lBS25CLDZDQUFvQjs7Ozs7SUFLcEIsOENBQXFCOzs7OztJQUtyQiw0Q0FBbUI7Ozs7O0lBS25CLG9EQUEyQjs7Ozs7SUFLM0IsK0NBQXVEOzs7OztJQUt2RCxnREFBb0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBOelRyZWVOb2RlLCBOekZvcm1hdEVtaXRFdmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5pbXBvcnQgeyBTRlVJU2NoZW1hSXRlbSwgU0ZETFNTaXplIH0gZnJvbSAnLi4vLi4vc2NoZW1hL3VpJztcbmltcG9ydCB7IFNGU2NoZW1hRW51bVR5cGUsIFNGU2NoZW1hRW51bSB9IGZyb20gJy4uLy4uL3NjaGVtYSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU0ZUcmVlU2VsZWN0V2lkZ2V0U2NoZW1hIGV4dGVuZHMgU0ZVSVNjaGVtYUl0ZW0ge1xuICAvKipcbiAgICog5byC5q2l5pWw5o2u5rqQXG4gICAqL1xuICBhc3luY0RhdGE/OiAoKSA9PiBPYnNlcnZhYmxlPFNGU2NoZW1hRW51bVR5cGVbXT47XG5cbiAgc2l6ZT86IFNGRExTU2l6ZTtcblxuICBwbGFjZWhvbGRlcj86IHN0cmluZztcblxuICAvKipcbiAgICog5pSv5oyB5riF6Zmk77yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgYWxsb3dDbGVhcj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOS4i+aLieiPnOWNleWSjOmAieaLqeWZqOWQjOWuve+8jOm7mOiupO+8mmB0cnVlYFxuICAgKi9cbiAgZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoPzogYm9vbGVhbjtcblxuICAvKipcbiAgICog5LiL5ouJ6I+c5Y2V55qEIHN0eWxlIOWxnuaAp1xuICAgKi9cbiAgZHJvcGRvd25TdHlsZT86IG9iamVjdDtcblxuICAvKipcbiAgICog5pSv5oyB5aSa6YCJ77yI5b2T6K6+572uIGBjaGVja2FibGVgIOaXtuiHquWKqOWPmOS4unRydWXvvInvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBtdWx0aXBsZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOiKgueCueWJjea3u+WKoCBDaGVja2JveCDlpI3pgInmoYbvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBjaGVja2FibGU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDoioLngrnliY3mt7vliqDlsZXlvIDlm77moIfvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICovXG4gIHNob3dFeHBhbmQ/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDoioLngrnliY3mt7vliqDlsZXlvIDlm77moIfvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBzaG93TGluZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOm7mOiupOWxleW8gOaJgOacieagkeiKgueCue+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIGRlZmF1bHRFeHBhbmRBbGw/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDlpoLkvZXlnKjovpPlhaXmoYbmmL7npLrmiYDpgInnmoToioLngrnlgLznmoTmlrnms5VcbiAgICovXG4gIGRpc3BsYXlXaXRoPzogKG5vZGU6IE56VHJlZU5vZGUpID0+IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAvKipcbiAgICog54K55Ye75bGV5byA5qCR6IqC54K55Zu+5qCH6LCD55SoXG4gICAqL1xuICBleHBhbmRDaGFuZ2U/OiAoZTogTnpGb3JtYXRFbWl0RXZlbnQpID0+IE9ic2VydmFibGU8U0ZTY2hlbWFFbnVtW10+O1xufVxuIl19