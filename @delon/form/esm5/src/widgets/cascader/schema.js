/**
 * @fileoverview added by tsickle
 * Generated from: src/widgets/cascader/schema.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * 内容被清空事件
     * @type {?|undefined}
     */
    SFCascaderWidgetSchema.prototype.clear;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy9jYXNjYWRlci9zY2hlbWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFJQSw0Q0F3R0M7Ozs7OztJQXBHQywyQ0FBNkY7Ozs7O0lBSTdGLDZDQUFxQjs7Ozs7SUFLckIsNENBQXFCOzs7OztJQUtyQiw0Q0FBcUI7Ozs7O0lBS3JCLDJDQUFtQjs7Ozs7SUFLbkIsMkNBQW9COzs7OztJQUtwQiwyQ0FBb0I7Ozs7O0lBS3BCLCtDQUF1Qjs7Ozs7SUFLdkIsMkNBQW1COzs7OztJQUtuQixpREFBeUI7Ozs7O0lBS3pCLDZDQUFzQjs7Ozs7SUFLdEIsK0NBQWtDOzs7OztJQUtsQyxnREFBeUI7Ozs7O0lBS3pCLDBDQUFnRTs7Ozs7SUFLaEUsK0NBQXlDOzs7OztJQUt6QywrQ0FBdUI7Ozs7O0lBS3ZCLCtDQUF1Qjs7Ozs7SUFLdkIsK0NBQXlDOzs7OztJQUt6Qyx3Q0FBd0M7Ozs7O0lBS3hDLGlEQUF1RDs7Ozs7SUFLdkQsdUNBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTnpDYXNjYWRlck9wdGlvbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY2FzY2FkZXInO1xuaW1wb3J0IHsgU0ZVSVNjaGVtYUl0ZW0gfSBmcm9tICcuLi8uLi9zY2hlbWEvdWknO1xuaW1wb3J0IHsgQ2FzY2FkZXJXaWRnZXQgfSBmcm9tICcuL2Nhc2NhZGVyLndpZGdldCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU0ZDYXNjYWRlcldpZGdldFNjaGVtYSBleHRlbmRzIFNGVUlTY2hlbWFJdGVtIHtcbiAgLyoqXG4gICAqIOW8guatpemdmeaAgeaVsOaNrua6kFxuICAgKi9cbiAgYXN5bmNEYXRhPzogKG5vZGU6IE56Q2FzY2FkZXJPcHRpb24sIGluZGV4OiBudW1iZXIsIG1lPzogQ2FzY2FkZXJXaWRnZXQpID0+IFByb21pc2VMaWtlPGFueT47XG4gIC8qKlxuICAgKiDlnKjmloflrZfmoYbkuK3mmL7npLrmj5DnpLrorq/mga9cbiAgICovXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiDmmK/lkKbmlK/mjIHmkJzntKLvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBzaG93U2VhcmNoPzogYm9vbGVhbjtcblxuICAvKipcbiAgICog5piv5ZCm5pi+56S65riF6Zmk5oyJ6ZKu77yM6buY6K6k77yaYHRydWVgXG4gICAqL1xuICBhbGxvd0NsZWFyPzogYm9vbGVhbjtcblxuICAvKipcbiAgICog5riF6Zmk5oyJ6ZKu55qE5qCH6aKY77yM6buY6K6k77yaYOa4hemZpGBcbiAgICovXG4gIGNsZWFyVGV4dD86IHN0cmluZztcblxuICAvKipcbiAgICog5piv5ZCm5pi+56S6566t5aS077yM6buY6K6k77yaYHRydWVgXG4gICAqL1xuICBzaG93QXJyb3c/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDmmK/lkKbmmL7npLrnrq3lpLTvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICovXG4gIHNob3dJbnB1dD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOiHquWumuS5iea1ruWxguexu+WQjVxuICAgKi9cbiAgbWVudUNsYXNzTmFtZT86IHN0cmluZztcblxuICAvKipcbiAgICog6Ieq5a6a5LmJ5rWu5bGC5qC35byPXG4gICAqL1xuICBtZW51U3R5bGU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIOW8ueWHuuiPnOWNleS4reaVsOaNruWIl+eahOiHquWumuS5ieagt+W8j1xuICAgKi9cbiAgY29sdW1uQ2xhc3NOYW1lPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiDmmK/lkKbnvJPlrZjlvILmraXliqDovb3nmoTmlbDmja7vvIzoi6Xmr4/mrKHlvILmraXliqDovb3nmoTmlbDmja7pg73mmK/lj5jljJbnmoTvvIzpnIDlsIbor6XlgLzorr7nva7kuLogYGZhbHNlYO+8jOm7mOiupO+8mmB0cnVlYFxuICAgKi9cbiAgZW5hYmxlQ2FjaGU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDmrKHnuqfoj5zljZXnmoTlsZXlvIDmlrnlvI/vvIzpu5jorqTvvJpgY2xpY2tgXG4gICAqL1xuICBleHBhbmRUcmlnZ2VyPzogJ2NsaWNrJyB8ICdob3Zlcic7XG5cbiAgLyoqXG4gICAqIOW9k+atpOmhueS4uiBgdHJ1ZWAg5pe277yM54K56YCJ5q+P57qn6I+c5Y2V6YCJ6aG55YC86YO95Lya5Y+R55Sf5Y+Y5YyW77yM5YW35L2T6KeB5LiK6Z2i55qE5ryU56S677yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgY2hhbmdlT25TZWxlY3Q/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDlj6/pgJrov4foh6rlrprkuYnnmoTlh73mlbDmnaXliKTmlq3ngrnlh7voj5zljZXpgInpobnmmK/lkKblupTor6Xlj5HnlJ/lj5jljJbvvIzlvZPlh73mlbDov5Tlm54gYHRydWVgIOaXtu+8jOWwhuWPkeeUn+WPmOWMllxuICAgKi9cbiAgY2hhbmdlT24/OiAob3B0aW9uOiBOekNhc2NhZGVyT3B0aW9uLCBsZXZlbDogbnVtYmVyKSA9PiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDop6blj5Hoj5zljZXlh7rnjrDnmoTooYzkuLrvvIzpu5jorqTvvJpgWydjbGljayddYFxuICAgKi9cbiAgdHJpZ2dlckFjdGlvbj86IEFycmF5PCdjbGljaycgfCAnaG92ZXInPjtcblxuICAvKipcbiAgICog5YC8IGB2YWx1ZWAg55qE5bGe5oCn5ZCN56ew77yM6buY6K6k77yaYHZhbHVlYFxuICAgKi9cbiAgdmFsdWVQcm9wZXJ0eT86IHN0cmluZztcblxuICAvKipcbiAgICog5YC8IGBsYWJlbGAg55qE5bGe5oCn5ZCN56ew77yM6buY6K6k77yaYGxhYmVsYFxuICAgKi9cbiAgbGFiZWxQcm9wZXJ0eT86IHN0cmluZztcblxuICAvKipcbiAgICog5byC5q2l5Yqg6L295LqL5Lu2XG4gICAqL1xuICB2aXNpYmxlQ2hhbmdlPzogKHZhbHVlOiBib29sZWFuKSA9PiB2b2lkO1xuXG4gIC8qKlxuICAgKiDpgInpobnlgLzlj5jmm7Tkuovku7ZcbiAgICovXG4gIGNoYW5nZT86ICh2YWx1ZXM6IGFueVtdIHwgbnVsbCkgPT4gdm9pZDtcblxuICAvKipcbiAgICog6YCJ6aG55Y+Y5pu05LqL5Lu2XG4gICAqL1xuICBzZWxlY3Rpb25DaGFuZ2U/OiAodmFsdWVzOiBOekNhc2NhZGVyT3B0aW9uW10pID0+IHZvaWQ7XG5cbiAgLyoqXG4gICAqIOWGheWuueiiq+a4heepuuS6i+S7tlxuICAgKi9cbiAgY2xlYXI/OiAoKSA9PiB2b2lkO1xufVxuIl19