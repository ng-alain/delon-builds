/**
 * @fileoverview added by tsickle
 * Generated from: src/widgets/tree-select/schema.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * 下拉菜单的 className 属性
     * @type {?|undefined}
     */
    SFTreeSelectWidgetSchema.prototype.dropdownClassName;
    /**
     * 支持多选（当设置 `checkable` 时自动变为true），默认：`false`
     * @type {?|undefined}
     */
    SFTreeSelectWidgetSchema.prototype.multiple;
    /**
     * 搜索隐藏未匹配的节点，默认：`false`
     * @type {?|undefined}
     */
    SFTreeSelectWidgetSchema.prototype.hideUnMatched;
    /**
     * 节点前添加 Checkbox 复选框，默认：`false`
     * @type {?|undefined}
     */
    SFTreeSelectWidgetSchema.prototype.checkable;
    /**
     * checkable 状态下节点选择完全受控（父子节点选中状态不再关联），默认：`false`
     * @type {?|undefined}
     */
    SFTreeSelectWidgetSchema.prototype.checkStrictly;
    /**
     * 是否展示 TreeNode title 前的图标，没有默认样式，默认：`false`
     * @type {?|undefined}
     */
    SFTreeSelectWidgetSchema.prototype.showIcon;
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
     * 当下拉列表为空时显示的内容
     * @type {?|undefined}
     */
    SFTreeSelectWidgetSchema.prototype.notFoundContent;
    /**
     * 默认展开指定的树节点
     * @type {?|undefined}
     */
    SFTreeSelectWidgetSchema.prototype.expandedKeys;
    /**
     * 最多显示多少个 tag
     * @type {?|undefined}
     */
    SFTreeSelectWidgetSchema.prototype.maxTagCount;
    /**
     * 隐藏 tag 时显示的内容
     * @type {?|undefined}
     */
    SFTreeSelectWidgetSchema.prototype.maxTagPlaceholder;
    /**
     * 自定义节点
     * @type {?|undefined}
     */
    SFTreeSelectWidgetSchema.prototype.treeTemplate;
    /**
     * The size of the items in the list, same as [cdk itemSize](https://material.angular.io/cdk/scrolling/api), Default: `28`
     * @type {?|undefined}
     */
    SFTreeSelectWidgetSchema.prototype.virtualItemSize;
    /**
     *  The number of pixels worth of buffer to render for when rendering new items, same as [cdk maxBufferPx](https://material.angular.io/cdk/scrolling/api), Default: `28`
     * @type {?|undefined}
     */
    SFTreeSelectWidgetSchema.prototype.virtualMaxBufferPx;
    /**
     * The minimum amount of buffer rendered beyond the viewport (in pixels),same as [cdk minBufferPx](https://material.angular.io/cdk/scrolling/api), Default: `28`
     * @type {?|undefined}
     */
    SFTreeSelectWidgetSchema.prototype.virtualMinBufferPx;
    /**
     * The height of virtual scroll
     * @type {?|undefined}
     */
    SFTreeSelectWidgetSchema.prototype.virtualHeight;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy90cmVlLXNlbGVjdC9zY2hlbWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFNQSw4Q0E0SEM7Ozs7OztJQXhIQyw2Q0FBaUQ7O0lBRWpELHdDQUFpQjs7SUFFakIsK0NBQXFCOzs7OztJQUtyQiw4Q0FBcUI7Ozs7O0lBS3JCLDREQUFtQzs7Ozs7SUFLbkMsaURBQXVCOzs7OztJQUt2QixxREFBMkI7Ozs7O0lBSzNCLDRDQUFtQjs7Ozs7SUFLbkIsaURBQXdCOzs7OztJQUt4Qiw2Q0FBb0I7Ozs7O0lBS3BCLGlEQUF3Qjs7Ozs7SUFLeEIsNENBQW1COzs7OztJQUtuQiw4Q0FBcUI7Ozs7O0lBS3JCLDRDQUFtQjs7Ozs7SUFLbkIsb0RBQTJCOzs7OztJQUszQixtREFBeUI7Ozs7O0lBS3pCLGdEQUF3Qjs7Ozs7SUFLeEIsK0NBQXFCOzs7OztJQUtyQixxREFBb0U7Ozs7O0lBS3BFLGdEQUFpRjs7Ozs7SUFLakYsbURBQXlCOzs7OztJQUt6QixzREFBNEI7Ozs7O0lBSzVCLHNEQUE0Qjs7Ozs7SUFLNUIsaURBQThCOzs7OztJQUs5QiwrQ0FBdUQ7Ozs7O0lBS3ZELGdEQUFvRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOekZvcm1hdEVtaXRFdmVudCwgTnpUcmVlTm9kZSwgTnpUcmVlTm9kZU9wdGlvbnMgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHJlZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTRlNjaGVtYUVudW0sIFNGU2NoZW1hRW51bVR5cGUgfSBmcm9tICcuLi8uLi9zY2hlbWEnO1xuaW1wb3J0IHsgU0ZETFNTaXplLCBTRlVJU2NoZW1hSXRlbSB9IGZyb20gJy4uLy4uL3NjaGVtYS91aSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU0ZUcmVlU2VsZWN0V2lkZ2V0U2NoZW1hIGV4dGVuZHMgU0ZVSVNjaGVtYUl0ZW0ge1xuICAvKipcbiAgICog5byC5q2l5pWw5o2u5rqQXG4gICAqL1xuICBhc3luY0RhdGE/OiAoKSA9PiBPYnNlcnZhYmxlPFNGU2NoZW1hRW51bVR5cGVbXT47XG5cbiAgc2l6ZT86IFNGRExTU2l6ZTtcblxuICBwbGFjZWhvbGRlcj86IHN0cmluZztcblxuICAvKipcbiAgICog5pSv5oyB5riF6Zmk77yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgYWxsb3dDbGVhcj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOS4i+aLieiPnOWNleWSjOmAieaLqeWZqOWQjOWuve+8jOm7mOiupO+8mmB0cnVlYFxuICAgKi9cbiAgZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoPzogYm9vbGVhbjtcblxuICAvKipcbiAgICog5LiL5ouJ6I+c5Y2V55qEIHN0eWxlIOWxnuaAp1xuICAgKi9cbiAgZHJvcGRvd25TdHlsZT86IG9iamVjdDtcblxuICAvKipcbiAgICog5LiL5ouJ6I+c5Y2V55qEIGNsYXNzTmFtZSDlsZ7mgKdcbiAgICovXG4gIGRyb3Bkb3duQ2xhc3NOYW1lPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiDmlK/mjIHlpJrpgInvvIjlvZPorr7nva4gYGNoZWNrYWJsZWAg5pe26Ieq5Yqo5Y+Y5Li6dHJ1Ze+8ie+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIG11bHRpcGxlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICog5pCc57Si6ZqQ6JeP5pyq5Yy56YWN55qE6IqC54K577yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgaGlkZVVuTWF0Y2hlZD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOiKgueCueWJjea3u+WKoCBDaGVja2JveCDlpI3pgInmoYbvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBjaGVja2FibGU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBjaGVja2FibGUg54q25oCB5LiL6IqC54K56YCJ5oup5a6M5YWo5Y+X5o6n77yI54i25a2Q6IqC54K56YCJ5Lit54q25oCB5LiN5YaN5YWz6IGU77yJ77yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgY2hlY2tTdHJpY3RseT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOaYr+WQpuWxleekuiBUcmVlTm9kZSB0aXRsZSDliY3nmoTlm77moIfvvIzmsqHmnInpu5jorqTmoLflvI/vvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBzaG93SWNvbj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOiKgueCueWJjea3u+WKoOWxleW8gOWbvuagh++8jOm7mOiupO+8mmB0cnVlYFxuICAgKi9cbiAgc2hvd0V4cGFuZD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOiKgueCueWJjea3u+WKoOWxleW8gOWbvuagh++8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIHNob3dMaW5lPzogYm9vbGVhbjtcblxuICAvKipcbiAgICog6buY6K6k5bGV5byA5omA5pyJ5qCR6IqC54K577yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgZGVmYXVsdEV4cGFuZEFsbD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOW9k+S4i+aLieWIl+ihqOS4uuepuuaXtuaYvuekuueahOWGheWuuVxuICAgKi9cbiAgbm90Rm91bmRDb250ZW50Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiDpu5jorqTlsZXlvIDmjIflrprnmoTmoJHoioLngrlcbiAgICovXG4gIGV4cGFuZGVkS2V5cz86IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiDmnIDlpJrmmL7npLrlpJrlsJHkuKogdGFnXG4gICAqL1xuICBtYXhUYWdDb3VudD86IG51bWJlcjtcblxuICAvKipcbiAgICog6ZqQ6JePIHRhZyDml7bmmL7npLrnmoTlhoXlrrlcbiAgICovXG4gIG1heFRhZ1BsYWNlaG9sZGVyPzogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IE56VHJlZU5vZGVbXSB9PiB8IG51bGw7XG5cbiAgLyoqXG4gICAqIOiHquWumuS5ieiKgueCuVxuICAgKi9cbiAgdHJlZVRlbXBsYXRlPzogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IE56VHJlZU5vZGU7IG9yaWdpbjogTnpUcmVlTm9kZU9wdGlvbnMgfT47XG5cbiAgLyoqXG4gICAqIFRoZSBzaXplIG9mIHRoZSBpdGVtcyBpbiB0aGUgbGlzdCwgc2FtZSBhcyBbY2RrIGl0ZW1TaXplXShodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vY2RrL3Njcm9sbGluZy9hcGkpLCBEZWZhdWx0OiBgMjhgXG4gICAqL1xuICB2aXJ0dWFsSXRlbVNpemU/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqICBUaGUgbnVtYmVyIG9mIHBpeGVscyB3b3J0aCBvZiBidWZmZXIgdG8gcmVuZGVyIGZvciB3aGVuIHJlbmRlcmluZyBuZXcgaXRlbXMsIHNhbWUgYXMgW2NkayBtYXhCdWZmZXJQeF0oaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Nkay9zY3JvbGxpbmcvYXBpKSwgRGVmYXVsdDogYDI4YFxuICAgKi9cbiAgdmlydHVhbE1heEJ1ZmZlclB4PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgbWluaW11bSBhbW91bnQgb2YgYnVmZmVyIHJlbmRlcmVkIGJleW9uZCB0aGUgdmlld3BvcnQgKGluIHBpeGVscyksc2FtZSBhcyBbY2RrIG1pbkJ1ZmZlclB4XShodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vY2RrL3Njcm9sbGluZy9hcGkpLCBEZWZhdWx0OiBgMjhgXG4gICAqL1xuICB2aXJ0dWFsTWluQnVmZmVyUHg/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBoZWlnaHQgb2YgdmlydHVhbCBzY3JvbGxcbiAgICovXG4gIHZpcnR1YWxIZWlnaHQ/OiBzdHJpbmcgfCBudWxsO1xuXG4gIC8qKlxuICAgKiDlpoLkvZXlnKjovpPlhaXmoYbmmL7npLrmiYDpgInnmoToioLngrnlgLznmoTmlrnms5VcbiAgICovXG4gIGRpc3BsYXlXaXRoPzogKG5vZGU6IE56VHJlZU5vZGUpID0+IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAvKipcbiAgICog54K55Ye75bGV5byA5qCR6IqC54K55Zu+5qCH6LCD55SoXG4gICAqL1xuICBleHBhbmRDaGFuZ2U/OiAoZTogTnpGb3JtYXRFbWl0RXZlbnQpID0+IE9ic2VydmFibGU8U0ZTY2hlbWFFbnVtW10+O1xufVxuIl19