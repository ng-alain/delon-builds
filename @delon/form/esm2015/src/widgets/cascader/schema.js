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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3ZzdHMvd29yay8xL3MvcGFja2FnZXMvZm9ybS8iLCJzb3VyY2VzIjpbInNyYy93aWRnZXRzL2Nhc2NhZGVyL3NjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUlBLDRDQTZHQzs7Ozs7O0lBekdDLDJDQUE2Rjs7Ozs7SUFJN0YsNkNBQXFCOzs7OztJQUtyQiw0Q0FBcUI7Ozs7O0lBS3JCLDRDQUFxQjs7Ozs7SUFLckIsMkNBQW1COzs7OztJQUtuQiwyQ0FBb0I7Ozs7O0lBS3BCLDJDQUFvQjs7Ozs7SUFLcEIsK0NBQXVCOzs7OztJQUt2QiwyQ0FBbUI7Ozs7O0lBS25CLGlEQUF5Qjs7Ozs7SUFLekIsaURBQXlCOzs7OztJQUt6Qiw2Q0FBc0I7Ozs7O0lBS3RCLCtDQUFrQzs7Ozs7SUFLbEMsZ0RBQXlCOzs7OztJQUt6QiwwQ0FBZ0U7Ozs7O0lBS2hFLCtDQUF5Qzs7Ozs7SUFLekMsK0NBQXVCOzs7OztJQUt2QiwrQ0FBdUI7Ozs7O0lBS3ZCLCtDQUF5Qzs7Ozs7SUFLekMsd0NBQXdDOzs7OztJQUt4QyxpREFBdUQ7Ozs7O0lBS3ZELHVDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE56Q2FzY2FkZXJPcHRpb24gfSBmcm9tICduZy16b3Jyby1hbnRkL2Nhc2NhZGVyJztcbmltcG9ydCB7IFNGVUlTY2hlbWFJdGVtIH0gZnJvbSAnLi4vLi4vc2NoZW1hL3VpJztcbmltcG9ydCB7IENhc2NhZGVyV2lkZ2V0IH0gZnJvbSAnLi9jYXNjYWRlci53aWRnZXQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNGQ2FzY2FkZXJXaWRnZXRTY2hlbWEgZXh0ZW5kcyBTRlVJU2NoZW1hSXRlbSB7XG4gIC8qKlxuICAgKiDlvILmraXpnZnmgIHmlbDmja7mupBcbiAgICovXG4gIGFzeW5jRGF0YT86IChub2RlOiBOekNhc2NhZGVyT3B0aW9uLCBpbmRleDogbnVtYmVyLCBtZT86IENhc2NhZGVyV2lkZ2V0KSA9PiBQcm9taXNlTGlrZTxhbnk+O1xuICAvKipcbiAgICog5Zyo5paH5a2X5qGG5Lit5pi+56S65o+Q56S66K6v5oGvXG4gICAqL1xuICBwbGFjZWhvbGRlcj86IHN0cmluZztcblxuICAvKipcbiAgICog5piv5ZCm5pSv5oyB5pCc57Si77yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgc2hvd1NlYXJjaD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOaYr+WQpuaYvuekuua4hemZpOaMiemSru+8jOm7mOiupO+8mmB0cnVlYFxuICAgKi9cbiAgYWxsb3dDbGVhcj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOa4hemZpOaMiemSrueahOagh+mimO+8jOm7mOiupO+8mmDmuIXpmaRgXG4gICAqL1xuICBjbGVhclRleHQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIOaYr+WQpuaYvuekuueureWktO+8jOm7mOiupO+8mmB0cnVlYFxuICAgKi9cbiAgc2hvd0Fycm93PzogYm9vbGVhbjtcblxuICAvKipcbiAgICog5piv5ZCm5pi+56S6566t5aS077yM6buY6K6k77yaYHRydWVgXG4gICAqL1xuICBzaG93SW5wdXQ/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDoh6rlrprkuYnmta7lsYLnsbvlkI1cbiAgICovXG4gIG1lbnVDbGFzc05hbWU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIOiHquWumuS5iea1ruWxguagt+W8j1xuICAgKi9cbiAgbWVudVN0eWxlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiDlvZPkuIvmi4nliJfooajkuLrnqbrml7bmmL7npLrnmoTlhoXlrrlcbiAgICovXG4gIG5vdEZvdW5kQ29udGVudD86IHN0cmluZztcblxuICAvKipcbiAgICog5by55Ye66I+c5Y2V5Lit5pWw5o2u5YiX55qE6Ieq5a6a5LmJ5qC35byPXG4gICAqL1xuICBjb2x1bW5DbGFzc05hbWU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIOaYr+WQpue8k+WtmOW8guatpeWKoOi9veeahOaVsOaNru+8jOiLpeavj+asoeW8guatpeWKoOi9veeahOaVsOaNrumDveaYr+WPmOWMlueahO+8jOmcgOWwhuivpeWAvOiuvue9ruS4uiBgZmFsc2Vg77yM6buY6K6k77yaYHRydWVgXG4gICAqL1xuICBlbmFibGVDYWNoZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOasoee6p+iPnOWNleeahOWxleW8gOaWueW8j++8jOm7mOiupO+8mmBjbGlja2BcbiAgICovXG4gIGV4cGFuZFRyaWdnZXI/OiAnY2xpY2snIHwgJ2hvdmVyJztcblxuICAvKipcbiAgICog5b2T5q2k6aG55Li6IGB0cnVlYCDml7bvvIzngrnpgInmr4/nuqfoj5zljZXpgInpobnlgLzpg73kvJrlj5HnlJ/lj5jljJbvvIzlhbfkvZPop4HkuIrpnaLnmoTmvJTnpLrvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBjaGFuZ2VPblNlbGVjdD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOWPr+mAmui/h+iHquWumuS5ieeahOWHveaVsOadpeWIpOaWreeCueWHu+iPnOWNlemAiemhueaYr+WQpuW6lOivpeWPkeeUn+WPmOWMlu+8jOW9k+WHveaVsOi/lOWbniBgdHJ1ZWAg5pe277yM5bCG5Y+R55Sf5Y+Y5YyWXG4gICAqL1xuICBjaGFuZ2VPbj86IChvcHRpb246IE56Q2FzY2FkZXJPcHRpb24sIGxldmVsOiBudW1iZXIpID0+IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOinpuWPkeiPnOWNleWHuueOsOeahOihjOS4uu+8jOm7mOiupO+8mmBbJ2NsaWNrJ11gXG4gICAqL1xuICB0cmlnZ2VyQWN0aW9uPzogQXJyYXk8J2NsaWNrJyB8ICdob3Zlcic+O1xuXG4gIC8qKlxuICAgKiDlgLwgYHZhbHVlYCDnmoTlsZ7mgKflkI3np7DvvIzpu5jorqTvvJpgdmFsdWVgXG4gICAqL1xuICB2YWx1ZVByb3BlcnR5Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiDlgLwgYGxhYmVsYCDnmoTlsZ7mgKflkI3np7DvvIzpu5jorqTvvJpgbGFiZWxgXG4gICAqL1xuICBsYWJlbFByb3BlcnR5Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiDlvILmraXliqDovb3kuovku7ZcbiAgICovXG4gIHZpc2libGVDaGFuZ2U/OiAodmFsdWU6IGJvb2xlYW4pID0+IHZvaWQ7XG5cbiAgLyoqXG4gICAqIOmAiemhueWAvOWPmOabtOS6i+S7tlxuICAgKi9cbiAgY2hhbmdlPzogKHZhbHVlczogYW55W10gfCBudWxsKSA9PiB2b2lkO1xuXG4gIC8qKlxuICAgKiDpgInpobnlj5jmm7Tkuovku7ZcbiAgICovXG4gIHNlbGVjdGlvbkNoYW5nZT86ICh2YWx1ZXM6IE56Q2FzY2FkZXJPcHRpb25bXSkgPT4gdm9pZDtcblxuICAvKipcbiAgICog5YaF5a656KKr5riF56m65LqL5Lu2XG4gICAqL1xuICBjbGVhcj86ICgpID0+IHZvaWQ7XG59XG4iXX0=