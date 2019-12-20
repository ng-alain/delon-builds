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
     * 选项被选中事件
     * @deprecated `select` is deprecated and will be removed, Please use `selectionChange` instead.
     * @type {?|undefined}
     */
    SFCascaderWidgetSchema.prototype.select;
    /**
     * 内容被清空事件
     * @type {?|undefined}
     */
    SFCascaderWidgetSchema.prototype.clear;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy9jYXNjYWRlci9zY2hlbWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFJQSw0Q0E4R0M7Ozs7OztJQTFHQywyQ0FBMkY7Ozs7O0lBSTNGLDZDQUFxQjs7Ozs7SUFLckIsNENBQXFCOzs7OztJQUtyQiw0Q0FBcUI7Ozs7O0lBS3JCLDJDQUFtQjs7Ozs7SUFLbkIsMkNBQW9COzs7OztJQUtwQiwyQ0FBb0I7Ozs7O0lBS3BCLCtDQUF1Qjs7Ozs7SUFLdkIsMkNBQW1COzs7OztJQUtuQixpREFBeUI7Ozs7O0lBS3pCLDZDQUFzQjs7Ozs7SUFLdEIsK0NBQWtDOzs7OztJQUtsQyxnREFBeUI7Ozs7O0lBS3pCLDBDQUE4RDs7Ozs7SUFLOUQsK0NBQXlDOzs7OztJQUt6QywrQ0FBdUI7Ozs7O0lBS3ZCLCtDQUF1Qjs7Ozs7SUFLdkIsK0NBQXlDOzs7OztJQUt6Qyx3Q0FBd0M7Ozs7O0lBS3hDLGlEQUFxRDs7Ozs7O0lBTXJELHdDQUE0RTs7Ozs7SUFLNUUsdUNBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FzY2FkZXJPcHRpb24gfSBmcm9tICduZy16b3Jyby1hbnRkL2Nhc2NhZGVyJztcbmltcG9ydCB7IFNGVUlTY2hlbWFJdGVtIH0gZnJvbSAnLi4vLi4vc2NoZW1hL3VpJztcbmltcG9ydCB7IENhc2NhZGVyV2lkZ2V0IH0gZnJvbSAnLi9jYXNjYWRlci53aWRnZXQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNGQ2FzY2FkZXJXaWRnZXRTY2hlbWEgZXh0ZW5kcyBTRlVJU2NoZW1hSXRlbSB7XG4gIC8qKlxuICAgKiDlvILmraXpnZnmgIHmlbDmja7mupBcbiAgICovXG4gIGFzeW5jRGF0YT86IChub2RlOiBDYXNjYWRlck9wdGlvbiwgaW5kZXg6IG51bWJlciwgbWU/OiBDYXNjYWRlcldpZGdldCkgPT4gUHJvbWlzZUxpa2U8YW55PjtcbiAgLyoqXG4gICAqIOWcqOaWh+Wtl+ahhuS4reaYvuekuuaPkOekuuiur+aBr1xuICAgKi9cbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIOaYr+WQpuaUr+aMgeaQnOe0ou+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIHNob3dTZWFyY2g/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDmmK/lkKbmmL7npLrmuIXpmaTmjInpkq7vvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICovXG4gIGFsbG93Q2xlYXI/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDmuIXpmaTmjInpkq7nmoTmoIfpopjvvIzpu5jorqTvvJpg5riF6ZmkYFxuICAgKi9cbiAgY2xlYXJUZXh0Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiDmmK/lkKbmmL7npLrnrq3lpLTvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICovXG4gIHNob3dBcnJvdz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOaYr+WQpuaYvuekuueureWktO+8jOm7mOiupO+8mmB0cnVlYFxuICAgKi9cbiAgc2hvd0lucHV0PzogYm9vbGVhbjtcblxuICAvKipcbiAgICog6Ieq5a6a5LmJ5rWu5bGC57G75ZCNXG4gICAqL1xuICBtZW51Q2xhc3NOYW1lPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiDoh6rlrprkuYnmta7lsYLmoLflvI9cbiAgICovXG4gIG1lbnVTdHlsZT86IHN0cmluZztcblxuICAvKipcbiAgICog5by55Ye66I+c5Y2V5Lit5pWw5o2u5YiX55qE6Ieq5a6a5LmJ5qC35byPXG4gICAqL1xuICBjb2x1bW5DbGFzc05hbWU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIOaYr+WQpue8k+WtmOW8guatpeWKoOi9veeahOaVsOaNru+8jOiLpeavj+asoeW8guatpeWKoOi9veeahOaVsOaNrumDveaYr+WPmOWMlueahO+8jOmcgOWwhuivpeWAvOiuvue9ruS4uiBgZmFsc2Vg77yM6buY6K6k77yaYHRydWVgXG4gICAqL1xuICBlbmFibGVDYWNoZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOasoee6p+iPnOWNleeahOWxleW8gOaWueW8j++8jOm7mOiupO+8mmBjbGlja2BcbiAgICovXG4gIGV4cGFuZFRyaWdnZXI/OiAnY2xpY2snIHwgJ2hvdmVyJztcblxuICAvKipcbiAgICog5b2T5q2k6aG55Li6IGB0cnVlYCDml7bvvIzngrnpgInmr4/nuqfoj5zljZXpgInpobnlgLzpg73kvJrlj5HnlJ/lj5jljJbvvIzlhbfkvZPop4HkuIrpnaLnmoTmvJTnpLrvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBjaGFuZ2VPblNlbGVjdD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOWPr+mAmui/h+iHquWumuS5ieeahOWHveaVsOadpeWIpOaWreeCueWHu+iPnOWNlemAiemhueaYr+WQpuW6lOivpeWPkeeUn+WPmOWMlu+8jOW9k+WHveaVsOi/lOWbniBgdHJ1ZWAg5pe277yM5bCG5Y+R55Sf5Y+Y5YyWXG4gICAqL1xuICBjaGFuZ2VPbj86IChvcHRpb246IENhc2NhZGVyT3B0aW9uLCBsZXZlbDogbnVtYmVyKSA9PiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDop6blj5Hoj5zljZXlh7rnjrDnmoTooYzkuLrvvIzpu5jorqTvvJpgWydjbGljayddYFxuICAgKi9cbiAgdHJpZ2dlckFjdGlvbj86IEFycmF5PCdjbGljaycgfCAnaG92ZXInPjtcblxuICAvKipcbiAgICog5YC8IGB2YWx1ZWAg55qE5bGe5oCn5ZCN56ew77yM6buY6K6k77yaYHZhbHVlYFxuICAgKi9cbiAgdmFsdWVQcm9wZXJ0eT86IHN0cmluZztcblxuICAvKipcbiAgICog5YC8IGBsYWJlbGAg55qE5bGe5oCn5ZCN56ew77yM6buY6K6k77yaYGxhYmVsYFxuICAgKi9cbiAgbGFiZWxQcm9wZXJ0eT86IHN0cmluZztcblxuICAvKipcbiAgICog5byC5q2l5Yqg6L295LqL5Lu2XG4gICAqL1xuICB2aXNpYmxlQ2hhbmdlPzogKHZhbHVlOiBib29sZWFuKSA9PiB2b2lkO1xuXG4gIC8qKlxuICAgKiDpgInpobnlgLzlj5jmm7Tkuovku7ZcbiAgICovXG4gIGNoYW5nZT86ICh2YWx1ZXM6IGFueVtdIHwgbnVsbCkgPT4gdm9pZDtcblxuICAvKipcbiAgICog6YCJ6aG55Y+Y5pu05LqL5Lu2XG4gICAqL1xuICBzZWxlY3Rpb25DaGFuZ2U/OiAodmFsdWVzOiBDYXNjYWRlck9wdGlvbltdKSA9PiB2b2lkO1xuXG4gIC8qKlxuICAgKiDpgInpobnooqvpgInkuK3kuovku7ZcbiAgICogQGRlcHJlY2F0ZWQgYHNlbGVjdGAgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkLCBQbGVhc2UgdXNlIGBzZWxlY3Rpb25DaGFuZ2VgIGluc3RlYWQuXG4gICAqL1xuICBzZWxlY3Q/OiAodmFsdWVzOiB7IG9wdGlvbjogQ2FzY2FkZXJPcHRpb247IGluZGV4OiBudW1iZXIgfSB8IG51bGwpID0+IHZvaWQ7XG5cbiAgLyoqXG4gICAqIOWGheWuueiiq+a4heepuuS6i+S7tlxuICAgKi9cbiAgY2xlYXI/OiAoKSA9PiB2b2lkO1xufVxuIl19