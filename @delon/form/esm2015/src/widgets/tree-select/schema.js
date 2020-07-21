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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS9zcmMvd2lkZ2V0cy90cmVlLXNlbGVjdC9zY2hlbWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFNQSw4Q0F3R0M7Ozs7OztJQXBHQyw2Q0FBaUQ7O0lBRWpELHdDQUFpQjs7SUFFakIsK0NBQXFCOzs7OztJQUtyQiw4Q0FBcUI7Ozs7O0lBS3JCLDREQUFtQzs7Ozs7SUFLbkMsaURBQXVCOzs7OztJQUt2QixxREFBMkI7Ozs7O0lBSzNCLDRDQUFtQjs7Ozs7SUFLbkIsaURBQXdCOzs7OztJQUt4Qiw2Q0FBb0I7Ozs7O0lBS3BCLGlEQUF3Qjs7Ozs7SUFLeEIsNENBQW1COzs7OztJQUtuQiw4Q0FBcUI7Ozs7O0lBS3JCLDRDQUFtQjs7Ozs7SUFLbkIsb0RBQTJCOzs7OztJQUszQixtREFBeUI7Ozs7O0lBS3pCLGdEQUF3Qjs7Ozs7SUFLeEIsK0NBQXFCOzs7OztJQUtyQixxREFBb0U7Ozs7O0lBS3BFLGdEQUFpRjs7Ozs7SUFLakYsK0NBQXVEOzs7OztJQUt2RCxnREFBb0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpGb3JtYXRFbWl0RXZlbnQsIE56VHJlZU5vZGUsIE56VHJlZU5vZGVPcHRpb25zIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3RyZWUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU0ZTY2hlbWFFbnVtLCBTRlNjaGVtYUVudW1UeXBlIH0gZnJvbSAnLi4vLi4vc2NoZW1hJztcbmltcG9ydCB7IFNGRExTU2l6ZSwgU0ZVSVNjaGVtYUl0ZW0gfSBmcm9tICcuLi8uLi9zY2hlbWEvdWknO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNGVHJlZVNlbGVjdFdpZGdldFNjaGVtYSBleHRlbmRzIFNGVUlTY2hlbWFJdGVtIHtcbiAgLyoqXG4gICAqIOW8guatpeaVsOaNrua6kFxuICAgKi9cbiAgYXN5bmNEYXRhPzogKCkgPT4gT2JzZXJ2YWJsZTxTRlNjaGVtYUVudW1UeXBlW10+O1xuXG4gIHNpemU/OiBTRkRMU1NpemU7XG5cbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIOaUr+aMgea4hemZpO+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIGFsbG93Q2xlYXI/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDkuIvmi4noj5zljZXlkozpgInmi6nlmajlkIzlrr3vvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICovXG4gIGRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOS4i+aLieiPnOWNleeahCBzdHlsZSDlsZ7mgKdcbiAgICovXG4gIGRyb3Bkb3duU3R5bGU/OiBvYmplY3Q7XG5cbiAgLyoqXG4gICAqIOS4i+aLieiPnOWNleeahCBjbGFzc05hbWUg5bGe5oCnXG4gICAqL1xuICBkcm9wZG93bkNsYXNzTmFtZT86IHN0cmluZztcblxuICAvKipcbiAgICog5pSv5oyB5aSa6YCJ77yI5b2T6K6+572uIGBjaGVja2FibGVgIOaXtuiHquWKqOWPmOS4unRydWXvvInvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBtdWx0aXBsZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOaQnOe0oumakOiXj+acquWMuemFjeeahOiKgueCue+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIGhpZGVVbk1hdGNoZWQ/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDoioLngrnliY3mt7vliqAgQ2hlY2tib3gg5aSN6YCJ5qGG77yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgY2hlY2thYmxlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogY2hlY2thYmxlIOeKtuaAgeS4i+iKgueCuemAieaLqeWujOWFqOWPl+aOp++8iOeItuWtkOiKgueCuemAieS4reeKtuaAgeS4jeWGjeWFs+iBlO+8ie+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIGNoZWNrU3RyaWN0bHk/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDmmK/lkKblsZXnpLogVHJlZU5vZGUgdGl0bGUg5YmN55qE5Zu+5qCH77yM5rKh5pyJ6buY6K6k5qC35byP77yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgc2hvd0ljb24/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDoioLngrnliY3mt7vliqDlsZXlvIDlm77moIfvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICovXG4gIHNob3dFeHBhbmQ/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDoioLngrnliY3mt7vliqDlsZXlvIDlm77moIfvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBzaG93TGluZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOm7mOiupOWxleW8gOaJgOacieagkeiKgueCue+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIGRlZmF1bHRFeHBhbmRBbGw/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDlvZPkuIvmi4nliJfooajkuLrnqbrml7bmmL7npLrnmoTlhoXlrrlcbiAgICovXG4gIG5vdEZvdW5kQ29udGVudD86IHN0cmluZztcblxuICAvKipcbiAgICog6buY6K6k5bGV5byA5oyH5a6a55qE5qCR6IqC54K5XG4gICAqL1xuICBleHBhbmRlZEtleXM/OiBzdHJpbmdbXTtcblxuICAvKipcbiAgICog5pyA5aSa5pi+56S65aSa5bCR5LiqIHRhZ1xuICAgKi9cbiAgbWF4VGFnQ291bnQ/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIOmakOiXjyB0YWcg5pe25pi+56S655qE5YaF5a65XG4gICAqL1xuICBtYXhUYWdQbGFjZWhvbGRlcj86IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBOelRyZWVOb2RlW10gfT4gfCBudWxsO1xuXG4gIC8qKlxuICAgKiDoh6rlrprkuYnoioLngrlcbiAgICovXG4gIHRyZWVUZW1wbGF0ZT86IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBOelRyZWVOb2RlOyBvcmlnaW46IE56VHJlZU5vZGVPcHRpb25zIH0+O1xuXG4gIC8qKlxuICAgKiDlpoLkvZXlnKjovpPlhaXmoYbmmL7npLrmiYDpgInnmoToioLngrnlgLznmoTmlrnms5VcbiAgICovXG4gIGRpc3BsYXlXaXRoPzogKG5vZGU6IE56VHJlZU5vZGUpID0+IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAvKipcbiAgICog54K55Ye75bGV5byA5qCR6IqC54K55Zu+5qCH6LCD55SoXG4gICAqL1xuICBleHBhbmRDaGFuZ2U/OiAoZTogTnpGb3JtYXRFbWl0RXZlbnQpID0+IE9ic2VydmFibGU8U0ZTY2hlbWFFbnVtW10+O1xufVxuIl19