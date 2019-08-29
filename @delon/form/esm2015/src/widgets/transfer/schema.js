/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function SFTransferWidgetSchema() { }
if (false) {
    /**
     * 异步数据源
     * @type {?|undefined}
     */
    SFTransferWidgetSchema.prototype.asyncData;
    /**
     * 标题集合，顺序从左至右，默认：`['', '']`
     * @type {?|undefined}
     */
    SFTransferWidgetSchema.prototype.titles;
    /**
     * 操作文案集合，顺序从下至上，默认：`['', '']`
     * @type {?|undefined}
     */
    SFTransferWidgetSchema.prototype.operations;
    /**
     * 两个穿梭框的自定义样式，以`ngStyle`写法标题
     * @type {?|undefined}
     */
    SFTransferWidgetSchema.prototype.listStyle;
    /**
     * 单数单位
     * @type {?|undefined}
     */
    SFTransferWidgetSchema.prototype.itemUnit;
    /**
     * 复数单位
     * @type {?|undefined}
     */
    SFTransferWidgetSchema.prototype.itemsUnit;
    /**
     * 是否显示搜索框，默认：`false`
     * @type {?|undefined}
     */
    SFTransferWidgetSchema.prototype.showSearch;
    /**
     * 接收 `inputValueoption` 两个参数，当 `option` 符合筛选条件时，应返回 `true`，反之则返回 `false`
     * @type {?|undefined}
     */
    SFTransferWidgetSchema.prototype.filterOption;
    /**
     * 搜索框的默认值
     * @type {?|undefined}
     */
    SFTransferWidgetSchema.prototype.searchPlaceholder;
    /**
     * 当列表为空时显示的内容
     * @type {?|undefined}
     */
    SFTransferWidgetSchema.prototype.notFoundContent;
    /**
     * 穿梭时二次校验
     * @type {?|undefined}
     */
    SFTransferWidgetSchema.prototype.canMove;
    /**
     * 选项在两栏之间转移时的回调函数
     * @type {?|undefined}
     */
    SFTransferWidgetSchema.prototype.change;
    /**
     * 搜索框内容时改变时的回调函数
     * @type {?|undefined}
     */
    SFTransferWidgetSchema.prototype.searchChange;
    /**
     * 选中项发生改变时的回调函数
     * @type {?|undefined}
     */
    SFTransferWidgetSchema.prototype.selectChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy90cmFuc2Zlci9zY2hlbWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUtBLDRDQXNFQzs7Ozs7O0lBbEVDLDJDQUFpRDs7Ozs7SUFLakQsd0NBQWtCOzs7OztJQUtsQiw0Q0FBc0I7Ozs7O0lBS3RCLDJDQUFtQjs7Ozs7SUFLbkIsMENBQWtCOzs7OztJQUtsQiwyQ0FBbUI7Ozs7O0lBS25CLDRDQUFxQjs7Ozs7SUFLckIsOENBQW1FOzs7OztJQUtuRSxtREFBMkI7Ozs7O0lBSzNCLGlEQUF5Qjs7Ozs7SUFLekIseUNBQStEOzs7OztJQUsvRCx3Q0FBMkM7Ozs7O0lBSzNDLDhDQUF1RDs7Ozs7SUFLdkQsOENBQXVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgVHJhbnNmZXJJdGVtLCBUcmFuc2ZlckNhbk1vdmUsIFRyYW5zZmVyQ2hhbmdlLCBUcmFuc2ZlclNlYXJjaENoYW5nZSwgVHJhbnNmZXJTZWxlY3RDaGFuZ2UgfSBmcm9tICduZy16b3Jyby1hbnRkL3RyYW5zZmVyJztcbmltcG9ydCB7IFNGVUlTY2hlbWFJdGVtIH0gZnJvbSAnLi4vLi4vc2NoZW1hL3VpJztcbmltcG9ydCB7IFNGU2NoZW1hRW51bVR5cGUgfSBmcm9tICcuLi8uLi9zY2hlbWEnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNGVHJhbnNmZXJXaWRnZXRTY2hlbWEgZXh0ZW5kcyBTRlVJU2NoZW1hSXRlbSB7XG4gIC8qKlxuICAgKiDlvILmraXmlbDmja7mupBcbiAgICovXG4gIGFzeW5jRGF0YT86ICgpID0+IE9ic2VydmFibGU8U0ZTY2hlbWFFbnVtVHlwZVtdPjtcblxuICAvKipcbiAgICog5qCH6aKY6ZuG5ZCI77yM6aG65bqP5LuO5bem6Iez5Y+z77yM6buY6K6k77yaYFsnJywgJyddYFxuICAgKi9cbiAgdGl0bGVzPzogc3RyaW5nW107XG5cbiAgLyoqXG4gICAqIOaTjeS9nOaWh+ahiOmbhuWQiO+8jOmhuuW6j+S7juS4i+iHs+S4iu+8jOm7mOiupO+8mmBbJycsICcnXWBcbiAgICovXG4gIG9wZXJhdGlvbnM/OiBzdHJpbmdbXTtcblxuICAvKipcbiAgICog5Lik5Liq56m/5qKt5qGG55qE6Ieq5a6a5LmJ5qC35byP77yM5LulYG5nU3R5bGVg5YaZ5rOV5qCH6aKYXG4gICAqL1xuICBsaXN0U3R5bGU/OiBvYmplY3Q7XG5cbiAgLyoqXG4gICAqIOWNleaVsOWNleS9jVxuICAgKi9cbiAgaXRlbVVuaXQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIOWkjeaVsOWNleS9jVxuICAgKi9cbiAgaXRlbXNVbml0Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiDmmK/lkKbmmL7npLrmkJzntKLmoYbvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBzaG93U2VhcmNoPzogYm9vbGVhbjtcblxuICAvKipcbiAgICog5o6l5pS2IGBpbnB1dFZhbHVlb3B0aW9uYCDkuKTkuKrlj4LmlbDvvIzlvZMgYG9wdGlvbmAg56ym5ZCI562b6YCJ5p2h5Lu25pe277yM5bqU6L+U5ZueIGB0cnVlYO+8jOWPjeS5i+WImei/lOWbniBgZmFsc2VgXG4gICAqL1xuICBmaWx0ZXJPcHRpb24/OiAoaW5wdXRWYWx1ZTogc3RyaW5nLCBpdGVtOiBUcmFuc2Zlckl0ZW0pID0+IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOaQnOe0ouahhueahOm7mOiupOWAvFxuICAgKi9cbiAgc2VhcmNoUGxhY2Vob2xkZXI/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIOW9k+WIl+ihqOS4uuepuuaXtuaYvuekuueahOWGheWuuVxuICAgKi9cbiAgbm90Rm91bmRDb250ZW50Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiDnqb/moq3ml7bkuozmrKHmoKHpqoxcbiAgICovXG4gIGNhbk1vdmU/OiAoYXJnOiBUcmFuc2ZlckNhbk1vdmUpID0+IE9ic2VydmFibGU8VHJhbnNmZXJJdGVtW10+O1xuXG4gIC8qKlxuICAgKiDpgInpobnlnKjkuKTmoI/kuYvpl7Tovaznp7vml7bnmoTlm57osIPlh73mlbBcbiAgICovXG4gIGNoYW5nZT86IChvcHRpb25zOiBUcmFuc2ZlckNoYW5nZSkgPT4gdm9pZDtcblxuICAvKipcbiAgICog5pCc57Si5qGG5YaF5a655pe25pS55Y+Y5pe255qE5Zue6LCD5Ye95pWwXG4gICAqL1xuICBzZWFyY2hDaGFuZ2U/OiAob3B0aW9uczogVHJhbnNmZXJTZWFyY2hDaGFuZ2UpID0+IHZvaWQ7XG5cbiAgLyoqXG4gICAqIOmAieS4remhueWPkeeUn+aUueWPmOaXtueahOWbnuiwg+WHveaVsFxuICAgKi9cbiAgc2VsZWN0Q2hhbmdlPzogKG9wdGlvbnM6IFRyYW5zZmVyU2VsZWN0Q2hhbmdlKSA9PiB2b2lkO1xufVxuIl19