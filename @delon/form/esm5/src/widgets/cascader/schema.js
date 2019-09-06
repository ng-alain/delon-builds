/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy9jYXNjYWRlci9zY2hlbWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLDRDQThHQzs7Ozs7O0lBMUdDLDJDQUEyRjs7Ozs7SUFJM0YsNkNBQXFCOzs7OztJQUtyQiw0Q0FBcUI7Ozs7O0lBS3JCLDRDQUFxQjs7Ozs7SUFLckIsMkNBQW1COzs7OztJQUtuQiwyQ0FBb0I7Ozs7O0lBS3BCLDJDQUFvQjs7Ozs7SUFLcEIsK0NBQXVCOzs7OztJQUt2QiwyQ0FBbUI7Ozs7O0lBS25CLGlEQUF5Qjs7Ozs7SUFLekIsNkNBQXNCOzs7OztJQUt0QiwrQ0FBa0M7Ozs7O0lBS2xDLGdEQUF5Qjs7Ozs7SUFLekIsMENBQThEOzs7OztJQUs5RCwrQ0FBeUM7Ozs7O0lBS3pDLCtDQUF1Qjs7Ozs7SUFLdkIsK0NBQXVCOzs7OztJQUt2QiwrQ0FBeUM7Ozs7O0lBS3pDLHdDQUF3Qzs7Ozs7SUFLeEMsaURBQXFEOzs7Ozs7SUFNckQsd0NBQTRFOzs7OztJQUs1RSx1Q0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXNjYWRlck9wdGlvbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY2FzY2FkZXInO1xuaW1wb3J0IHsgU0ZVSVNjaGVtYUl0ZW0gfSBmcm9tICcuLi8uLi9zY2hlbWEvdWknO1xuaW1wb3J0IHsgQ2FzY2FkZXJXaWRnZXQgfSBmcm9tICcuL2Nhc2NhZGVyLndpZGdldCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU0ZDYXNjYWRlcldpZGdldFNjaGVtYSBleHRlbmRzIFNGVUlTY2hlbWFJdGVtIHtcbiAgLyoqXG4gICAqIOW8guatpemdmeaAgeaVsOaNrua6kFxuICAgKi9cbiAgYXN5bmNEYXRhPzogKG5vZGU6IENhc2NhZGVyT3B0aW9uLCBpbmRleDogbnVtYmVyLCBtZT86IENhc2NhZGVyV2lkZ2V0KSA9PiBQcm9taXNlTGlrZTxhbnk+O1xuICAvKipcbiAgICog5Zyo5paH5a2X5qGG5Lit5pi+56S65o+Q56S66K6v5oGvXG4gICAqL1xuICBwbGFjZWhvbGRlcj86IHN0cmluZztcblxuICAvKipcbiAgICog5piv5ZCm5pSv5oyB5pCc57Si77yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgc2hvd1NlYXJjaD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOaYr+WQpuaYvuekuua4hemZpOaMiemSru+8jOm7mOiupO+8mmB0cnVlYFxuICAgKi9cbiAgYWxsb3dDbGVhcj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOa4hemZpOaMiemSrueahOagh+mimO+8jOm7mOiupO+8mmDmuIXpmaRgXG4gICAqL1xuICBjbGVhclRleHQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIOaYr+WQpuaYvuekuueureWktO+8jOm7mOiupO+8mmB0cnVlYFxuICAgKi9cbiAgc2hvd0Fycm93PzogYm9vbGVhbjtcblxuICAvKipcbiAgICog5piv5ZCm5pi+56S6566t5aS077yM6buY6K6k77yaYHRydWVgXG4gICAqL1xuICBzaG93SW5wdXQ/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDoh6rlrprkuYnmta7lsYLnsbvlkI1cbiAgICovXG4gIG1lbnVDbGFzc05hbWU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIOiHquWumuS5iea1ruWxguagt+W8j1xuICAgKi9cbiAgbWVudVN0eWxlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiDlvLnlh7roj5zljZXkuK3mlbDmja7liJfnmoToh6rlrprkuYnmoLflvI9cbiAgICovXG4gIGNvbHVtbkNsYXNzTmFtZT86IHN0cmluZztcblxuICAvKipcbiAgICog5piv5ZCm57yT5a2Y5byC5q2l5Yqg6L2955qE5pWw5o2u77yM6Iul5q+P5qyh5byC5q2l5Yqg6L2955qE5pWw5o2u6YO95piv5Y+Y5YyW55qE77yM6ZyA5bCG6K+l5YC86K6+572u5Li6IGBmYWxzZWDvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICovXG4gIGVuYWJsZUNhY2hlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICog5qyh57qn6I+c5Y2V55qE5bGV5byA5pa55byP77yM6buY6K6k77yaYGNsaWNrYFxuICAgKi9cbiAgZXhwYW5kVHJpZ2dlcj86ICdjbGljaycgfCAnaG92ZXInO1xuXG4gIC8qKlxuICAgKiDlvZPmraTpobnkuLogYHRydWVgIOaXtu+8jOeCuemAieavj+e6p+iPnOWNlemAiemhueWAvOmDveS8muWPkeeUn+WPmOWMlu+8jOWFt+S9k+ingeS4iumdoueahOa8lOekuu+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIGNoYW5nZU9uU2VsZWN0PzogYm9vbGVhbjtcblxuICAvKipcbiAgICog5Y+v6YCa6L+H6Ieq5a6a5LmJ55qE5Ye95pWw5p2l5Yik5pat54K55Ye76I+c5Y2V6YCJ6aG55piv5ZCm5bqU6K+l5Y+R55Sf5Y+Y5YyW77yM5b2T5Ye95pWw6L+U5ZueIGB0cnVlYCDml7bvvIzlsIblj5HnlJ/lj5jljJZcbiAgICovXG4gIGNoYW5nZU9uPzogKG9wdGlvbjogQ2FzY2FkZXJPcHRpb24sIGxldmVsOiBudW1iZXIpID0+IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOinpuWPkeiPnOWNleWHuueOsOeahOihjOS4uu+8jOm7mOiupO+8mmBbJ2NsaWNrJ11gXG4gICAqL1xuICB0cmlnZ2VyQWN0aW9uPzogQXJyYXk8J2NsaWNrJyB8ICdob3Zlcic+O1xuXG4gIC8qKlxuICAgKiDlgLwgYHZhbHVlYCDnmoTlsZ7mgKflkI3np7DvvIzpu5jorqTvvJpgdmFsdWVgXG4gICAqL1xuICB2YWx1ZVByb3BlcnR5Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiDlgLwgYGxhYmVsYCDnmoTlsZ7mgKflkI3np7DvvIzpu5jorqTvvJpgbGFiZWxgXG4gICAqL1xuICBsYWJlbFByb3BlcnR5Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiDlvILmraXliqDovb3kuovku7ZcbiAgICovXG4gIHZpc2libGVDaGFuZ2U/OiAodmFsdWU6IGJvb2xlYW4pID0+IHZvaWQ7XG5cbiAgLyoqXG4gICAqIOmAiemhueWAvOWPmOabtOS6i+S7tlxuICAgKi9cbiAgY2hhbmdlPzogKHZhbHVlczogYW55W10gfCBudWxsKSA9PiB2b2lkO1xuXG4gIC8qKlxuICAgKiDpgInpobnlj5jmm7Tkuovku7ZcbiAgICovXG4gIHNlbGVjdGlvbkNoYW5nZT86ICh2YWx1ZXM6IENhc2NhZGVyT3B0aW9uW10pID0+IHZvaWQ7XG5cbiAgLyoqXG4gICAqIOmAiemhueiiq+mAieS4reS6i+S7tlxuICAgKiBAZGVwcmVjYXRlZCBgc2VsZWN0YCBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQsIFBsZWFzZSB1c2UgYHNlbGVjdGlvbkNoYW5nZWAgaW5zdGVhZC5cbiAgICovXG4gIHNlbGVjdD86ICh2YWx1ZXM6IHsgb3B0aW9uOiBDYXNjYWRlck9wdGlvbjsgaW5kZXg6IG51bWJlciB9IHwgbnVsbCkgPT4gdm9pZDtcblxuICAvKipcbiAgICog5YaF5a656KKr5riF56m65LqL5Lu2XG4gICAqL1xuICBjbGVhcj86ICgpID0+IHZvaWQ7XG59XG4iXX0=