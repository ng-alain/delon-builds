/**
 * @fileoverview added by tsickle
 * Generated from: src/widgets/cascader/schema.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function SFCascaderWidgetSchema() { }
if (false) {
    /**
     * 异步静态数据源
     * @type {?|undefined}
     */
    SFCascaderWidgetSchema.prototype.asyncData;
    /**
     * 在文字框中显示提示讯息
     * @type {?|undefined}
     */
    SFCascaderWidgetSchema.prototype.placeholder;
    /**
     * 是否支持搜索，默认：`false`
     * @type {?|undefined}
     */
    SFCascaderWidgetSchema.prototype.showSearch;
    /**
     * 是否显示清除按钮，默认：`true`
     * @type {?|undefined}
     */
    SFCascaderWidgetSchema.prototype.allowClear;
    /**
     * 清除按钮的标题，默认：`清除`
     * @type {?|undefined}
     */
    SFCascaderWidgetSchema.prototype.clearText;
    /**
     * 是否显示箭头，默认：`true`
     * @type {?|undefined}
     */
    SFCascaderWidgetSchema.prototype.showArrow;
    /**
     * 是否显示箭头，默认：`true`
     * @type {?|undefined}
     */
    SFCascaderWidgetSchema.prototype.showInput;
    /**
     * 自定义浮层类名
     * @type {?|undefined}
     */
    SFCascaderWidgetSchema.prototype.menuClassName;
    /**
     * 自定义浮层样式
     * @type {?|undefined}
     */
    SFCascaderWidgetSchema.prototype.menuStyle;
    /**
     * 当下拉列表为空时显示的内容
     * @type {?|undefined}
     */
    SFCascaderWidgetSchema.prototype.notFoundContent;
    /**
     * 弹出菜单中数据列的自定义样式
     * @type {?|undefined}
     */
    SFCascaderWidgetSchema.prototype.columnClassName;
    /**
     * 是否缓存异步加载的数据，若每次异步加载的数据都是变化的，需将该值设置为 `false`，默认：`true`
     * @type {?|undefined}
     */
    SFCascaderWidgetSchema.prototype.enableCache;
    /**
     * 次级菜单的展开方式，默认：`click`
     * @type {?|undefined}
     */
    SFCascaderWidgetSchema.prototype.expandTrigger;
    /**
     * 当此项为 `true` 时，点选每级菜单选项值都会发生变化，具体见上面的演示，默认：`false`
     * @type {?|undefined}
     */
    SFCascaderWidgetSchema.prototype.changeOnSelect;
    /**
     * 可通过自定义的函数来判断点击菜单选项是否应该发生变化，当函数返回 `true` 时，将发生变化
     * @type {?|undefined}
     */
    SFCascaderWidgetSchema.prototype.changeOn;
    /**
     * 触发菜单出现的行为，默认：`['click']`
     * @type {?|undefined}
     */
    SFCascaderWidgetSchema.prototype.triggerAction;
    /**
     * 值 `value` 的属性名称，默认：`value`
     * @type {?|undefined}
     */
    SFCascaderWidgetSchema.prototype.valueProperty;
    /**
     * 值 `label` 的属性名称，默认：`label`
     * @type {?|undefined}
     */
    SFCascaderWidgetSchema.prototype.labelProperty;
    /**
     * 异步加载事件
     * @type {?|undefined}
     */
    SFCascaderWidgetSchema.prototype.visibleChange;
    /**
     * 选项值变更事件
     * @type {?|undefined}
     */
    SFCascaderWidgetSchema.prototype.change;
    /**
     * 选项变更事件
     * @type {?|undefined}
     */
    SFCascaderWidgetSchema.prototype.selectionChange;
    /**
     * 内容被清空事件
     * @type {?|undefined}
     */
    SFCascaderWidgetSchema.prototype.clear;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS9zcmMvd2lkZ2V0cy9jYXNjYWRlci9zY2hlbWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFJQSw0Q0E2R0M7Ozs7OztJQXpHQywyQ0FBOEY7Ozs7O0lBSTlGLDZDQUFxQjs7Ozs7SUFLckIsNENBQXFCOzs7OztJQUtyQiw0Q0FBcUI7Ozs7O0lBS3JCLDJDQUFtQjs7Ozs7SUFLbkIsMkNBQW9COzs7OztJQUtwQiwyQ0FBb0I7Ozs7O0lBS3BCLCtDQUF1Qjs7Ozs7SUFLdkIsMkNBQW1COzs7OztJQUtuQixpREFBeUI7Ozs7O0lBS3pCLGlEQUF5Qjs7Ozs7SUFLekIsNkNBQXNCOzs7OztJQUt0QiwrQ0FBa0M7Ozs7O0lBS2xDLGdEQUF5Qjs7Ozs7SUFLekIsMENBQWdFOzs7OztJQUtoRSwrQ0FBeUM7Ozs7O0lBS3pDLCtDQUF1Qjs7Ozs7SUFLdkIsK0NBQXVCOzs7OztJQUt2QiwrQ0FBeUM7Ozs7O0lBS3pDLHdDQUF3Qzs7Ozs7SUFLeEMsaURBQXVEOzs7OztJQUt2RCx1Q0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOekNhc2NhZGVyT3B0aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jYXNjYWRlcic7XG5pbXBvcnQgeyBTRlVJU2NoZW1hSXRlbSB9IGZyb20gJy4uLy4uL3NjaGVtYS91aSc7XG5pbXBvcnQgeyBDYXNjYWRlcldpZGdldCB9IGZyb20gJy4vY2FzY2FkZXIud2lkZ2V0JztcblxuZXhwb3J0IGludGVyZmFjZSBTRkNhc2NhZGVyV2lkZ2V0U2NoZW1hIGV4dGVuZHMgU0ZVSVNjaGVtYUl0ZW0ge1xuICAvKipcbiAgICog5byC5q2l6Z2Z5oCB5pWw5o2u5rqQXG4gICAqL1xuICBhc3luY0RhdGE/OiAobm9kZTogTnpDYXNjYWRlck9wdGlvbiwgaW5kZXg6IG51bWJlciwgbWU/OiBDYXNjYWRlcldpZGdldCkgPT4gUHJvbWlzZUxpa2U8dm9pZD47XG4gIC8qKlxuICAgKiDlnKjmloflrZfmoYbkuK3mmL7npLrmj5DnpLrorq/mga9cbiAgICovXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiDmmK/lkKbmlK/mjIHmkJzntKLvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBzaG93U2VhcmNoPzogYm9vbGVhbjtcblxuICAvKipcbiAgICog5piv5ZCm5pi+56S65riF6Zmk5oyJ6ZKu77yM6buY6K6k77yaYHRydWVgXG4gICAqL1xuICBhbGxvd0NsZWFyPzogYm9vbGVhbjtcblxuICAvKipcbiAgICog5riF6Zmk5oyJ6ZKu55qE5qCH6aKY77yM6buY6K6k77yaYOa4hemZpGBcbiAgICovXG4gIGNsZWFyVGV4dD86IHN0cmluZztcblxuICAvKipcbiAgICog5piv5ZCm5pi+56S6566t5aS077yM6buY6K6k77yaYHRydWVgXG4gICAqL1xuICBzaG93QXJyb3c/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDmmK/lkKbmmL7npLrnrq3lpLTvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICovXG4gIHNob3dJbnB1dD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOiHquWumuS5iea1ruWxguexu+WQjVxuICAgKi9cbiAgbWVudUNsYXNzTmFtZT86IHN0cmluZztcblxuICAvKipcbiAgICog6Ieq5a6a5LmJ5rWu5bGC5qC35byPXG4gICAqL1xuICBtZW51U3R5bGU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIOW9k+S4i+aLieWIl+ihqOS4uuepuuaXtuaYvuekuueahOWGheWuuVxuICAgKi9cbiAgbm90Rm91bmRDb250ZW50Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiDlvLnlh7roj5zljZXkuK3mlbDmja7liJfnmoToh6rlrprkuYnmoLflvI9cbiAgICovXG4gIGNvbHVtbkNsYXNzTmFtZT86IHN0cmluZztcblxuICAvKipcbiAgICog5piv5ZCm57yT5a2Y5byC5q2l5Yqg6L2955qE5pWw5o2u77yM6Iul5q+P5qyh5byC5q2l5Yqg6L2955qE5pWw5o2u6YO95piv5Y+Y5YyW55qE77yM6ZyA5bCG6K+l5YC86K6+572u5Li6IGBmYWxzZWDvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICovXG4gIGVuYWJsZUNhY2hlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICog5qyh57qn6I+c5Y2V55qE5bGV5byA5pa55byP77yM6buY6K6k77yaYGNsaWNrYFxuICAgKi9cbiAgZXhwYW5kVHJpZ2dlcj86ICdjbGljaycgfCAnaG92ZXInO1xuXG4gIC8qKlxuICAgKiDlvZPmraTpobnkuLogYHRydWVgIOaXtu+8jOeCuemAieavj+e6p+iPnOWNlemAiemhueWAvOmDveS8muWPkeeUn+WPmOWMlu+8jOWFt+S9k+ingeS4iumdoueahOa8lOekuu+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIGNoYW5nZU9uU2VsZWN0PzogYm9vbGVhbjtcblxuICAvKipcbiAgICog5Y+v6YCa6L+H6Ieq5a6a5LmJ55qE5Ye95pWw5p2l5Yik5pat54K55Ye76I+c5Y2V6YCJ6aG55piv5ZCm5bqU6K+l5Y+R55Sf5Y+Y5YyW77yM5b2T5Ye95pWw6L+U5ZueIGB0cnVlYCDml7bvvIzlsIblj5HnlJ/lj5jljJZcbiAgICovXG4gIGNoYW5nZU9uPzogKG9wdGlvbjogTnpDYXNjYWRlck9wdGlvbiwgbGV2ZWw6IG51bWJlcikgPT4gYm9vbGVhbjtcblxuICAvKipcbiAgICog6Kem5Y+R6I+c5Y2V5Ye6546w55qE6KGM5Li677yM6buY6K6k77yaYFsnY2xpY2snXWBcbiAgICovXG4gIHRyaWdnZXJBY3Rpb24/OiBBcnJheTwnY2xpY2snIHwgJ2hvdmVyJz47XG5cbiAgLyoqXG4gICAqIOWAvCBgdmFsdWVgIOeahOWxnuaAp+WQjeensO+8jOm7mOiupO+8mmB2YWx1ZWBcbiAgICovXG4gIHZhbHVlUHJvcGVydHk/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIOWAvCBgbGFiZWxgIOeahOWxnuaAp+WQjeensO+8jOm7mOiupO+8mmBsYWJlbGBcbiAgICovXG4gIGxhYmVsUHJvcGVydHk/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIOW8guatpeWKoOi9veS6i+S7tlxuICAgKi9cbiAgdmlzaWJsZUNoYW5nZT86ICh2YWx1ZTogYm9vbGVhbikgPT4gdm9pZDtcblxuICAvKipcbiAgICog6YCJ6aG55YC85Y+Y5pu05LqL5Lu2XG4gICAqL1xuICBjaGFuZ2U/OiAodmFsdWVzOiBhbnlbXSB8IG51bGwpID0+IHZvaWQ7XG5cbiAgLyoqXG4gICAqIOmAiemhueWPmOabtOS6i+S7tlxuICAgKi9cbiAgc2VsZWN0aW9uQ2hhbmdlPzogKHZhbHVlczogTnpDYXNjYWRlck9wdGlvbltdKSA9PiB2b2lkO1xuXG4gIC8qKlxuICAgKiDlhoXlrrnooqvmuIXnqbrkuovku7ZcbiAgICovXG4gIGNsZWFyPzogKCkgPT4gdm9pZDtcbn1cbiJdfQ==