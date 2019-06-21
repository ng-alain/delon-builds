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
    /** @type {?|undefined} */
    SFCascaderWidgetSchema.prototype.triggerAction;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy9jYXNjYWRlci9zY2hlbWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLDRDQTJFQzs7Ozs7O0lBdkVDLDJDQUEwRjs7Ozs7SUFJMUYsNkNBQXFCOzs7OztJQUtyQiw0Q0FBcUI7Ozs7O0lBS3JCLDRDQUFxQjs7Ozs7SUFLckIsMkNBQW1COzs7OztJQUtuQiwyQ0FBb0I7Ozs7O0lBS3BCLCtDQUF1Qjs7Ozs7SUFLdkIsMkNBQW1COzs7OztJQUtuQixpREFBeUI7Ozs7O0lBS3pCLDZDQUFzQjs7Ozs7SUFLdEIsK0NBQWtDOzs7OztJQUtsQyxnREFBeUI7Ozs7O0lBS3pCLDBDQUE4RDs7SUFFOUQsK0NBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FzY2FkZXJPcHRpb24gfSBmcm9tICduZy16b3Jyby1hbnRkL2Nhc2NhZGVyJztcbmltcG9ydCB7IFNGVUlTY2hlbWFJdGVtIH0gZnJvbSAnLi4vLi4vc2NoZW1hL3VpJztcbmltcG9ydCB7IENhc2NhZGVyV2lkZ2V0IH0gZnJvbSAnLi9jYXNjYWRlci53aWRnZXQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNGQ2FzY2FkZXJXaWRnZXRTY2hlbWEgZXh0ZW5kcyBTRlVJU2NoZW1hSXRlbSB7XG4gIC8qKlxuICAgKiDlvILmraXpnZnmgIHmlbDmja7mupBcbiAgICovXG4gIGFzeW5jRGF0YT86IChub2RlOiBDYXNjYWRlck9wdGlvbiwgaW5kZXg6IG51bWJlciwgbWU6IENhc2NhZGVyV2lkZ2V0KSA9PiBQcm9taXNlTGlrZTxhbnk+O1xuICAvKipcbiAgICog5Zyo5paH5a2X5qGG5Lit5pi+56S65o+Q56S66K6v5oGvXG4gICAqL1xuICBwbGFjZWhvbGRlcj86IHN0cmluZztcblxuICAvKipcbiAgICog5piv5ZCm5pSv5oyB5pCc57Si77yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgc2hvd1NlYXJjaD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOaYr+WQpuaYvuekuua4hemZpOaMiemSru+8jOm7mOiupO+8mmB0cnVlYFxuICAgKi9cbiAgYWxsb3dDbGVhcj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOa4hemZpOaMiemSrueahOagh+mimO+8jOm7mOiupO+8mmDmuIXpmaRgXG4gICAqL1xuICBjbGVhclRleHQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIOaYr+WQpuaYvuekuueureWktO+8jOm7mOiupO+8mmB0cnVlYFxuICAgKi9cbiAgc2hvd0Fycm93PzogYm9vbGVhbjtcblxuICAvKipcbiAgICog6Ieq5a6a5LmJ5rWu5bGC57G75ZCNXG4gICAqL1xuICBtZW51Q2xhc3NOYW1lPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiDoh6rlrprkuYnmta7lsYLmoLflvI9cbiAgICovXG4gIG1lbnVTdHlsZT86IHN0cmluZztcblxuICAvKipcbiAgICog5by55Ye66I+c5Y2V5Lit5pWw5o2u5YiX55qE6Ieq5a6a5LmJ5qC35byPXG4gICAqL1xuICBjb2x1bW5DbGFzc05hbWU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIOaYr+WQpue8k+WtmOW8guatpeWKoOi9veeahOaVsOaNru+8jOiLpeavj+asoeW8guatpeWKoOi9veeahOaVsOaNrumDveaYr+WPmOWMlueahO+8jOmcgOWwhuivpeWAvOiuvue9ruS4uiBgZmFsc2Vg77yM6buY6K6k77yaYHRydWVgXG4gICAqL1xuICBlbmFibGVDYWNoZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOasoee6p+iPnOWNleeahOWxleW8gOaWueW8j++8jOm7mOiupO+8mmBjbGlja2BcbiAgICovXG4gIGV4cGFuZFRyaWdnZXI/OiAnY2xpY2snIHwgJ2hvdmVyJztcblxuICAvKipcbiAgICog5b2T5q2k6aG55Li6IGB0cnVlYCDml7bvvIzngrnpgInmr4/nuqfoj5zljZXpgInpobnlgLzpg73kvJrlj5HnlJ/lj5jljJbvvIzlhbfkvZPop4HkuIrpnaLnmoTmvJTnpLrvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBjaGFuZ2VPblNlbGVjdD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOWPr+mAmui/h+iHquWumuS5ieeahOWHveaVsOadpeWIpOaWreeCueWHu+iPnOWNlemAiemhueaYr+WQpuW6lOivpeWPkeeUn+WPmOWMlu+8jOW9k+WHveaVsOi/lOWbniBgdHJ1ZWAg5pe277yM5bCG5Y+R55Sf5Y+Y5YyWXG4gICAqL1xuICBjaGFuZ2VPbj86IChvcHRpb246IENhc2NhZGVyT3B0aW9uLCBsZXZlbDogbnVtYmVyKSA9PiBib29sZWFuO1xuXG4gIHRyaWdnZXJBY3Rpb24/OiBBcnJheTwnY2xpY2snIHwgJ2hvdmVyJz47XG5cbiAgLy8gYFt0cmlnZ2VyQWN0aW9uXWAgfCDop6blj5Hoj5zljZXlh7rnjrDnmoTooYzkuLogfCBgKCdjbGljaycsICdob3ZlcicpW11gIHwgYFsnY2xpY2snXWBcbiAgLy8gYFt2YWx1ZVByb3BlcnR5XWAgfCDlgLwgYHZhbHVlYCDnmoTlsZ7mgKflkI3np7AgfCBgc3RyaW5nYCB8IGB2YWx1ZWBcbiAgLy8gYFtsYWJlbFByb3BlcnR5XWAgfCDlgLwgYGxhYmVsYCDnmoTlsZ7mgKflkI3np7AgfCBgc3RyaW5nYCB8IGBsYWJlbGBcbiAgLy8gYFt2aXNpYmxlQ2hhbmdlXWAgfCDlvILmraXliqDovb3kuovku7YgfCBgKHZhbHVlOiBib29sZWFuKSA9PiB2b2lkYCB8IC1cbiAgLy8gYFtjaGFuZ2VdYCB8IOmAiemhueWAvOWPmOabtOS6i+S7tiB8IGAodmFsdWVzOiBhbnlbXSkgPT4gdm9pZGAgfCAtXG4gIC8vIGBbc2VsZWN0aW9uQ2hhbmdlXWAgfCDpgInpobnlj5jmm7Tkuovku7YgfCBgKHZhbHVlczogQ2FzY2FkZXJPcHRpb25bXSkgPT4gdm9pZGAgfCAtXG4gIC8vIGBbc2VsZWN0XWAgfCDpgInpobnooqvpgInkuK3kuovku7YgfCBgKHZhbHVlczogeyBvcHRpb246IENhc2NhZGVyT3B0aW9uLCBpbmRleDogbnVtYmVyIH0pID0+IHZvaWRgIHwgLVxuICAvLyBgW2NsZWFyXWAgfCDlhoXlrrnooqvmuIXnqbrkuovku7YgfCBgKCkgPT4gdm9pZGAgfCAtXG59XG4iXX0=