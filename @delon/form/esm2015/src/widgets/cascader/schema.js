/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * 选项被选中事件
     * @type {?|undefined}
     */
    SFCascaderWidgetSchema.prototype.select;
    /**
     * 内容被清空事件
     * @type {?|undefined}
     */
    SFCascaderWidgetSchema.prototype.clear;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy9jYXNjYWRlci9zY2hlbWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLDRDQTZHQzs7Ozs7O0lBekdDLDJDQUEyRjs7Ozs7SUFJM0YsNkNBQXFCOzs7OztJQUtyQiw0Q0FBcUI7Ozs7O0lBS3JCLDRDQUFxQjs7Ozs7SUFLckIsMkNBQW1COzs7OztJQUtuQiwyQ0FBb0I7Ozs7O0lBS3BCLDJDQUFvQjs7Ozs7SUFLcEIsK0NBQXVCOzs7OztJQUt2QiwyQ0FBbUI7Ozs7O0lBS25CLGlEQUF5Qjs7Ozs7SUFLekIsNkNBQXNCOzs7OztJQUt0QiwrQ0FBa0M7Ozs7O0lBS2xDLGdEQUF5Qjs7Ozs7SUFLekIsMENBQThEOzs7OztJQUs5RCwrQ0FBeUM7Ozs7O0lBS3pDLCtDQUF1Qjs7Ozs7SUFLdkIsK0NBQXVCOzs7OztJQUt2QiwrQ0FBeUM7Ozs7O0lBS3pDLHdDQUF3Qzs7Ozs7SUFLeEMsaURBQXFEOzs7OztJQUtyRCx3Q0FBcUU7Ozs7O0lBS3JFLHVDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhc2NhZGVyT3B0aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jYXNjYWRlcic7XG5pbXBvcnQgeyBTRlVJU2NoZW1hSXRlbSB9IGZyb20gJy4uLy4uL3NjaGVtYS91aSc7XG5pbXBvcnQgeyBDYXNjYWRlcldpZGdldCB9IGZyb20gJy4vY2FzY2FkZXIud2lkZ2V0JztcblxuZXhwb3J0IGludGVyZmFjZSBTRkNhc2NhZGVyV2lkZ2V0U2NoZW1hIGV4dGVuZHMgU0ZVSVNjaGVtYUl0ZW0ge1xuICAvKipcbiAgICog5byC5q2l6Z2Z5oCB5pWw5o2u5rqQXG4gICAqL1xuICBhc3luY0RhdGE/OiAobm9kZTogQ2FzY2FkZXJPcHRpb24sIGluZGV4OiBudW1iZXIsIG1lPzogQ2FzY2FkZXJXaWRnZXQpID0+IFByb21pc2VMaWtlPGFueT47XG4gIC8qKlxuICAgKiDlnKjmloflrZfmoYbkuK3mmL7npLrmj5DnpLrorq/mga9cbiAgICovXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiDmmK/lkKbmlK/mjIHmkJzntKLvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBzaG93U2VhcmNoPzogYm9vbGVhbjtcblxuICAvKipcbiAgICog5piv5ZCm5pi+56S65riF6Zmk5oyJ6ZKu77yM6buY6K6k77yaYHRydWVgXG4gICAqL1xuICBhbGxvd0NsZWFyPzogYm9vbGVhbjtcblxuICAvKipcbiAgICog5riF6Zmk5oyJ6ZKu55qE5qCH6aKY77yM6buY6K6k77yaYOa4hemZpGBcbiAgICovXG4gIGNsZWFyVGV4dD86IHN0cmluZztcblxuICAvKipcbiAgICog5piv5ZCm5pi+56S6566t5aS077yM6buY6K6k77yaYHRydWVgXG4gICAqL1xuICBzaG93QXJyb3c/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDmmK/lkKbmmL7npLrnrq3lpLTvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICovXG4gIHNob3dJbnB1dD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOiHquWumuS5iea1ruWxguexu+WQjVxuICAgKi9cbiAgbWVudUNsYXNzTmFtZT86IHN0cmluZztcblxuICAvKipcbiAgICog6Ieq5a6a5LmJ5rWu5bGC5qC35byPXG4gICAqL1xuICBtZW51U3R5bGU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIOW8ueWHuuiPnOWNleS4reaVsOaNruWIl+eahOiHquWumuS5ieagt+W8j1xuICAgKi9cbiAgY29sdW1uQ2xhc3NOYW1lPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiDmmK/lkKbnvJPlrZjlvILmraXliqDovb3nmoTmlbDmja7vvIzoi6Xmr4/mrKHlvILmraXliqDovb3nmoTmlbDmja7pg73mmK/lj5jljJbnmoTvvIzpnIDlsIbor6XlgLzorr7nva7kuLogYGZhbHNlYO+8jOm7mOiupO+8mmB0cnVlYFxuICAgKi9cbiAgZW5hYmxlQ2FjaGU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDmrKHnuqfoj5zljZXnmoTlsZXlvIDmlrnlvI/vvIzpu5jorqTvvJpgY2xpY2tgXG4gICAqL1xuICBleHBhbmRUcmlnZ2VyPzogJ2NsaWNrJyB8ICdob3Zlcic7XG5cbiAgLyoqXG4gICAqIOW9k+atpOmhueS4uiBgdHJ1ZWAg5pe277yM54K56YCJ5q+P57qn6I+c5Y2V6YCJ6aG55YC86YO95Lya5Y+R55Sf5Y+Y5YyW77yM5YW35L2T6KeB5LiK6Z2i55qE5ryU56S677yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgY2hhbmdlT25TZWxlY3Q/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDlj6/pgJrov4foh6rlrprkuYnnmoTlh73mlbDmnaXliKTmlq3ngrnlh7voj5zljZXpgInpobnmmK/lkKblupTor6Xlj5HnlJ/lj5jljJbvvIzlvZPlh73mlbDov5Tlm54gYHRydWVgIOaXtu+8jOWwhuWPkeeUn+WPmOWMllxuICAgKi9cbiAgY2hhbmdlT24/OiAob3B0aW9uOiBDYXNjYWRlck9wdGlvbiwgbGV2ZWw6IG51bWJlcikgPT4gYm9vbGVhbjtcblxuICAvKipcbiAgICog6Kem5Y+R6I+c5Y2V5Ye6546w55qE6KGM5Li677yM6buY6K6k77yaYFsnY2xpY2snXWBcbiAgICovXG4gIHRyaWdnZXJBY3Rpb24/OiBBcnJheTwnY2xpY2snIHwgJ2hvdmVyJz47XG5cbiAgLyoqXG4gICAqIOWAvCBgdmFsdWVgIOeahOWxnuaAp+WQjeensO+8jOm7mOiupO+8mmB2YWx1ZWBcbiAgICovXG4gIHZhbHVlUHJvcGVydHk/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIOWAvCBgbGFiZWxgIOeahOWxnuaAp+WQjeensO+8jOm7mOiupO+8mmBsYWJlbGBcbiAgICovXG4gIGxhYmVsUHJvcGVydHk/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIOW8guatpeWKoOi9veS6i+S7tlxuICAgKi9cbiAgdmlzaWJsZUNoYW5nZT86ICh2YWx1ZTogYm9vbGVhbikgPT4gdm9pZDtcblxuICAvKipcbiAgICog6YCJ6aG55YC85Y+Y5pu05LqL5Lu2XG4gICAqL1xuICBjaGFuZ2U/OiAodmFsdWVzOiBhbnlbXSB8IG51bGwpID0+IHZvaWQ7XG5cbiAgLyoqXG4gICAqIOmAiemhueWPmOabtOS6i+S7tlxuICAgKi9cbiAgc2VsZWN0aW9uQ2hhbmdlPzogKHZhbHVlczogQ2FzY2FkZXJPcHRpb25bXSkgPT4gdm9pZDtcblxuICAvKipcbiAgICog6YCJ6aG56KKr6YCJ5Lit5LqL5Lu2XG4gICAqL1xuICBzZWxlY3Q/OiAodmFsdWVzOiB7IG9wdGlvbjogQ2FzY2FkZXJPcHRpb247IGluZGV4OiBudW1iZXIgfSkgPT4gdm9pZDtcblxuICAvKipcbiAgICog5YaF5a656KKr5riF56m65LqL5Lu2XG4gICAqL1xuICBjbGVhcj86ICgpID0+IHZvaWQ7XG59XG4iXX0=