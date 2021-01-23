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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS9zcmMvd2lkZ2V0cy9jYXNjYWRlci9zY2hlbWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFJQSw0Q0E2R0M7Ozs7OztJQXpHQywyQ0FBNkY7Ozs7O0lBSTdGLDZDQUFxQjs7Ozs7SUFLckIsNENBQXFCOzs7OztJQUtyQiw0Q0FBcUI7Ozs7O0lBS3JCLDJDQUFtQjs7Ozs7SUFLbkIsMkNBQW9COzs7OztJQUtwQiwyQ0FBb0I7Ozs7O0lBS3BCLCtDQUF1Qjs7Ozs7SUFLdkIsMkNBQW1COzs7OztJQUtuQixpREFBeUI7Ozs7O0lBS3pCLGlEQUF5Qjs7Ozs7SUFLekIsNkNBQXNCOzs7OztJQUt0QiwrQ0FBa0M7Ozs7O0lBS2xDLGdEQUF5Qjs7Ozs7SUFLekIsMENBQWdFOzs7OztJQUtoRSwrQ0FBeUM7Ozs7O0lBS3pDLCtDQUF1Qjs7Ozs7SUFLdkIsK0NBQXVCOzs7OztJQUt2QiwrQ0FBeUM7Ozs7O0lBS3pDLHdDQUF3Qzs7Ozs7SUFLeEMsaURBQXVEOzs7OztJQUt2RCx1Q0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOekNhc2NhZGVyT3B0aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jYXNjYWRlcic7XG5pbXBvcnQgeyBTRlVJU2NoZW1hSXRlbSB9IGZyb20gJy4uLy4uL3NjaGVtYS91aSc7XG5pbXBvcnQgeyBDYXNjYWRlcldpZGdldCB9IGZyb20gJy4vY2FzY2FkZXIud2lkZ2V0JztcblxuZXhwb3J0IGludGVyZmFjZSBTRkNhc2NhZGVyV2lkZ2V0U2NoZW1hIGV4dGVuZHMgU0ZVSVNjaGVtYUl0ZW0ge1xuICAvKipcbiAgICog5byC5q2l6Z2Z5oCB5pWw5o2u5rqQXG4gICAqL1xuICBhc3luY0RhdGE/OiAobm9kZTogTnpDYXNjYWRlck9wdGlvbiwgaW5kZXg6IG51bWJlciwgbWU/OiBDYXNjYWRlcldpZGdldCkgPT4gUHJvbWlzZUxpa2U8YW55PjtcbiAgLyoqXG4gICAqIOWcqOaWh+Wtl+ahhuS4reaYvuekuuaPkOekuuiur+aBr1xuICAgKi9cbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIOaYr+WQpuaUr+aMgeaQnOe0ou+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIHNob3dTZWFyY2g/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDmmK/lkKbmmL7npLrmuIXpmaTmjInpkq7vvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICovXG4gIGFsbG93Q2xlYXI/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDmuIXpmaTmjInpkq7nmoTmoIfpopjvvIzpu5jorqTvvJpg5riF6ZmkYFxuICAgKi9cbiAgY2xlYXJUZXh0Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiDmmK/lkKbmmL7npLrnrq3lpLTvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICovXG4gIHNob3dBcnJvdz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOaYr+WQpuaYvuekuueureWktO+8jOm7mOiupO+8mmB0cnVlYFxuICAgKi9cbiAgc2hvd0lucHV0PzogYm9vbGVhbjtcblxuICAvKipcbiAgICog6Ieq5a6a5LmJ5rWu5bGC57G75ZCNXG4gICAqL1xuICBtZW51Q2xhc3NOYW1lPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiDoh6rlrprkuYnmta7lsYLmoLflvI9cbiAgICovXG4gIG1lbnVTdHlsZT86IHN0cmluZztcblxuICAvKipcbiAgICog5b2T5LiL5ouJ5YiX6KGo5Li656m65pe25pi+56S655qE5YaF5a65XG4gICAqL1xuICBub3RGb3VuZENvbnRlbnQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIOW8ueWHuuiPnOWNleS4reaVsOaNruWIl+eahOiHquWumuS5ieagt+W8j1xuICAgKi9cbiAgY29sdW1uQ2xhc3NOYW1lPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiDmmK/lkKbnvJPlrZjlvILmraXliqDovb3nmoTmlbDmja7vvIzoi6Xmr4/mrKHlvILmraXliqDovb3nmoTmlbDmja7pg73mmK/lj5jljJbnmoTvvIzpnIDlsIbor6XlgLzorr7nva7kuLogYGZhbHNlYO+8jOm7mOiupO+8mmB0cnVlYFxuICAgKi9cbiAgZW5hYmxlQ2FjaGU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDmrKHnuqfoj5zljZXnmoTlsZXlvIDmlrnlvI/vvIzpu5jorqTvvJpgY2xpY2tgXG4gICAqL1xuICBleHBhbmRUcmlnZ2VyPzogJ2NsaWNrJyB8ICdob3Zlcic7XG5cbiAgLyoqXG4gICAqIOW9k+atpOmhueS4uiBgdHJ1ZWAg5pe277yM54K56YCJ5q+P57qn6I+c5Y2V6YCJ6aG55YC86YO95Lya5Y+R55Sf5Y+Y5YyW77yM5YW35L2T6KeB5LiK6Z2i55qE5ryU56S677yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgY2hhbmdlT25TZWxlY3Q/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDlj6/pgJrov4foh6rlrprkuYnnmoTlh73mlbDmnaXliKTmlq3ngrnlh7voj5zljZXpgInpobnmmK/lkKblupTor6Xlj5HnlJ/lj5jljJbvvIzlvZPlh73mlbDov5Tlm54gYHRydWVgIOaXtu+8jOWwhuWPkeeUn+WPmOWMllxuICAgKi9cbiAgY2hhbmdlT24/OiAob3B0aW9uOiBOekNhc2NhZGVyT3B0aW9uLCBsZXZlbDogbnVtYmVyKSA9PiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDop6blj5Hoj5zljZXlh7rnjrDnmoTooYzkuLrvvIzpu5jorqTvvJpgWydjbGljayddYFxuICAgKi9cbiAgdHJpZ2dlckFjdGlvbj86IEFycmF5PCdjbGljaycgfCAnaG92ZXInPjtcblxuICAvKipcbiAgICog5YC8IGB2YWx1ZWAg55qE5bGe5oCn5ZCN56ew77yM6buY6K6k77yaYHZhbHVlYFxuICAgKi9cbiAgdmFsdWVQcm9wZXJ0eT86IHN0cmluZztcblxuICAvKipcbiAgICog5YC8IGBsYWJlbGAg55qE5bGe5oCn5ZCN56ew77yM6buY6K6k77yaYGxhYmVsYFxuICAgKi9cbiAgbGFiZWxQcm9wZXJ0eT86IHN0cmluZztcblxuICAvKipcbiAgICog5byC5q2l5Yqg6L295LqL5Lu2XG4gICAqL1xuICB2aXNpYmxlQ2hhbmdlPzogKHZhbHVlOiBib29sZWFuKSA9PiB2b2lkO1xuXG4gIC8qKlxuICAgKiDpgInpobnlgLzlj5jmm7Tkuovku7ZcbiAgICovXG4gIGNoYW5nZT86ICh2YWx1ZXM6IGFueVtdIHwgbnVsbCkgPT4gdm9pZDtcblxuICAvKipcbiAgICog6YCJ6aG55Y+Y5pu05LqL5Lu2XG4gICAqL1xuICBzZWxlY3Rpb25DaGFuZ2U/OiAodmFsdWVzOiBOekNhc2NhZGVyT3B0aW9uW10pID0+IHZvaWQ7XG5cbiAgLyoqXG4gICAqIOWGheWuueiiq+a4heepuuS6i+S7tlxuICAgKi9cbiAgY2xlYXI/OiAoKSA9PiB2b2lkO1xufVxuIl19