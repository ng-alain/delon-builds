/**
 * @fileoverview added by tsickle
 * Generated from: src/config/abc/st.type.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function AlainSTConfig() { }
if (false) {
    /**
     * 起始页码，默认为：`1`
     * @type {?|undefined}
     */
    AlainSTConfig.prototype.pi;
    /**
     * 每页数量，默认：`10`
     * @type {?|undefined}
     */
    AlainSTConfig.prototype.ps;
    /**
     * 是否显示边框，默认：`false`
     * @type {?|undefined}
     */
    AlainSTConfig.prototype.bordered;
    /**
     * table大小，默认：`default`
     * @type {?|undefined}
     */
    AlainSTConfig.prototype.size;
    /**
     * 是否开启响应式，默认：`true`
     * @type {?|undefined}
     */
    AlainSTConfig.prototype.responsive;
    /**
     * 是否在小屏幕下才显示顶部与底部，默认：`false`
     * @type {?|undefined}
     */
    AlainSTConfig.prototype.responsiveHideHeaderFooter;
    /**
     * 请求体配置
     * @type {?|undefined}
     */
    AlainSTConfig.prototype.req;
    /**
     * 返回体配置
     * @type {?|undefined}
     */
    AlainSTConfig.prototype.res;
    /**
     * 返回体配置
     * @type {?|undefined}
     */
    AlainSTConfig.prototype.page;
    /**
     * 重命名排序值，`columns` 的重命名高于属性
     * @type {?|undefined}
     */
    AlainSTConfig.prototype.sortReName;
    /**
     * 单排序规则
     * - 若不指定，则返回：`columnName=ascend|descend`
     * - 若指定，则返回：`sort=columnName.(ascend|descend)`
     * @type {?|undefined}
     */
    AlainSTConfig.prototype.singleSort;
    /**
     * 是否多排序，当 `sort` 多个相同值时自动合并，建议后端支持时使用
     * @type {?|undefined}
     */
    AlainSTConfig.prototype.multiSort;
    /**
     * 按钮模态框配置
     * @type {?|undefined}
     */
    AlainSTConfig.prototype.modal;
    /**
     * 按钮抽屉配置
     * @type {?|undefined}
     */
    AlainSTConfig.prototype.drawer;
    /**
     * 气泡参数
     * @type {?|undefined}
     */
    AlainSTConfig.prototype.pop;
    /**
     * 行单击多少时长之类为双击（单位：毫秒），默认：`200`
     * @type {?|undefined}
     */
    AlainSTConfig.prototype.rowClickTime;
    /**
     * 过滤按钮确认文本
     * @type {?|undefined}
     */
    AlainSTConfig.prototype.filterConfirmText;
    /**
     * 过滤按钮重置文本
     * @type {?|undefined}
     */
    AlainSTConfig.prototype.filterClearText;
    /**
     * 按钮图标
     * @type {?|undefined}
     */
    AlainSTConfig.prototype.btnIcon;
    /**
     * 行号索引，默认：`1`
     * - 计算规则为：`index + noIndex`
     * @type {?|undefined}
     */
    AlainSTConfig.prototype.noIndex;
    /**
     * 表格行的类名
     * @type {?|undefined}
     */
    AlainSTConfig.prototype.rowClassName;
    /**
     * 通过点击行来展开子行，Default: `false`
     * @type {?|undefined}
     */
    AlainSTConfig.prototype.expandRowByClick;
    /**
     * 手风琴模式，Default: `false`
     * @type {?|undefined}
     */
    AlainSTConfig.prototype.expandAccordion;
    /**
     * 指定 `width` 模式
     * @type {?|undefined}
     */
    AlainSTConfig.prototype.widthMode;
    /**
     * Default: `54`
     * @type {?|undefined}
     */
    AlainSTConfig.prototype.virtualItemSize;
    /**
     * Default: `200`
     * @type {?|undefined}
     */
    AlainSTConfig.prototype.virtualMaxBufferPx;
    /**
     * Default: `100`
     * @type {?|undefined}
     */
    AlainSTConfig.prototype.virtualMinBufferPx;
    /**
     * The TrackByFunction to use for tracking changes
     * @type {?|undefined}
     */
    AlainSTConfig.prototype.virtualForTrackBy;
    /**
     * Conditional expression rendering behavior, can be set to `hide` (default) or `disabled`, Default: `hide`
     * @type {?|undefined}
     */
    AlainSTConfig.prototype.iifBehavior;
    /**
     * The spinning indicator
     * @type {?|undefined}
     */
    AlainSTConfig.prototype.loadingIndicator;
    /**
     * Specifies a delay in milliseconds for loading state (prevent flush)
     * @type {?|undefined}
     */
    AlainSTConfig.prototype.loadingDelay;
    /**
     * Custom no result content
     * @type {?|undefined}
     */
    AlainSTConfig.prototype.noResult;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QudHlwZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS92c3RzL3dvcmsvMS9zL3BhY2thZ2VzL3V0aWwvIiwic291cmNlcyI6WyJzcmMvY29uZmlnL2FiYy9zdC50eXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBT0EsbUNBNFhDOzs7Ozs7SUF4WEMsMkJBQVk7Ozs7O0lBSVosMkJBQVk7Ozs7O0lBSVosaUNBQW1COzs7OztJQUluQiw2QkFBc0M7Ozs7O0lBSXRDLG1DQUFxQjs7Ozs7SUFJckIsbURBQXFDOzs7OztJQUVyQyw0QkFpQ0U7Ozs7O0lBRUYsNEJBYUU7Ozs7O0lBRUYsNkJBNERFOzs7OztJQUlGLG1DQUFtRDs7Ozs7OztJQU1uRCxtQ0FLRTs7Ozs7SUFJRixrQ0F5QkU7Ozs7O0lBSUYsOEJBV0U7Ozs7O0lBSUYsK0JBNEJFOzs7OztJQUlGLDRCQXlERTs7Ozs7SUFJRixxQ0FBc0I7Ozs7O0lBSXRCLDBDQUEyQjs7Ozs7SUFJM0Isd0NBQXlCOzs7OztJQUl6QixnQ0FTRTs7Ozs7O0lBS0YsZ0NBQWlCOzs7OztJQUlqQixxQ0FBNEQ7Ozs7O0lBSTVELHlDQUEyQjs7Ozs7SUFJM0Isd0NBQTBCOzs7OztJQUkxQixrQ0FhRTs7Ozs7SUFJRix3Q0FBeUI7Ozs7O0lBSXpCLDJDQUE0Qjs7Ozs7SUFJNUIsMkNBQTRCOzs7OztJQUk1QiwwQ0FBaUQ7Ozs7O0lBSWpELG9DQUFrQzs7Ozs7SUFJbEMseUNBQXFDOzs7OztJQUlyQyxxQ0FBc0I7Ozs7O0lBSXRCLGlDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRlbXBsYXRlUmVmLCBUcmFja0J5RnVuY3Rpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBOekRyYXdlck9wdGlvbnMgfSBmcm9tICduZy16b3Jyby1hbnRkL2RyYXdlcic7XG5pbXBvcnQgeyBNb2RhbE9wdGlvbnMgfSBmcm9tICduZy16b3Jyby1hbnRkL21vZGFsJztcbmltcG9ydCB7IFBhZ2luYXRpb25JdGVtUmVuZGVyQ29udGV4dCB9IGZyb20gJ25nLXpvcnJvLWFudGQvcGFnaW5hdGlvbic7XG5pbXBvcnQgeyBOelRhYmxlRGF0YSB9IGZyb20gJ25nLXpvcnJvLWFudGQvdGFibGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFsYWluU1RDb25maWcge1xuICAvKipcbiAgICog6LW35aeL6aG156CB77yM6buY6K6k5Li677yaYDFgXG4gICAqL1xuICBwaT86IG51bWJlcjtcbiAgLyoqXG4gICAqIOavj+mhteaVsOmHj++8jOm7mOiupO+8mmAxMGBcbiAgICovXG4gIHBzPzogbnVtYmVyO1xuICAvKipcbiAgICog5piv5ZCm5pi+56S66L655qGG77yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgYm9yZGVyZWQ/OiBib29sZWFuO1xuICAvKipcbiAgICogdGFibGXlpKflsI/vvIzpu5jorqTvvJpgZGVmYXVsdGBcbiAgICovXG4gIHNpemU/OiAnc21hbGwnIHwgJ21pZGRsZScgfCAnZGVmYXVsdCc7XG4gIC8qKlxuICAgKiDmmK/lkKblvIDlkK/lk43lupTlvI/vvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICovXG4gIHJlc3BvbnNpdmU/OiBib29sZWFuO1xuICAvKipcbiAgICog5piv5ZCm5Zyo5bCP5bGP5bmV5LiL5omN5pi+56S66aG26YOo5LiO5bqV6YOo77yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgcmVzcG9uc2l2ZUhpZGVIZWFkZXJGb290ZXI/OiBib29sZWFuO1xuICAvKiog6K+35rGC5L2T6YWN572uICovXG4gIHJlcT86IHtcbiAgICAvKipcbiAgICAgKiDliIbpobXnsbvlnovvvIzpu5jorqTvvJpgcGFnZWBcbiAgICAgKiAtIGBwYWdlYCDkvb/nlKggYHBpYO+8jGBwc2Ag57uE5ZCIXG4gICAgICogLSBgc2tpcGAg5L2/55SoIGBza2lwYO+8jGBsaW1pdGAg57uE5ZCIXG4gICAgICovXG4gICAgdHlwZT86ICdwYWdlJyB8ICdza2lwJztcbiAgICAvKiog6K+35rGC5pa55rOV77yM6buY6K6k77yaYEdFVGAgKi9cbiAgICBtZXRob2Q/OiBzdHJpbmc7XG4gICAgLyoqIOivt+axguS9kyBgSGVhZGVyYCAqL1xuICAgIGhlYWRlcnM/OiBOelNhZmVBbnk7XG4gICAgLyoqXG4gICAgICog6YeN5ZG95ZCN5Y+C5pWwIGBwaWDjgIFgcHNg77yM6buY6K6k77yaYHsgcGk6ICdwaScsIHBzOiAncHMnLCBza2lwOiAnc2tpcCcsIGxpbWl0OiAnbGltaXQnIH1gXG4gICAgICogLSBgeyBwaTogJ1BhZ2UnIH1gID0+IGBwaWAg5Lya6KKr5pu/5o2i5oiQIFBhZ2VcbiAgICAgKi9cbiAgICByZU5hbWU/OiB7XG4gICAgICBwaT86IHN0cmluZztcbiAgICAgIHBzPzogc3RyaW5nO1xuICAgICAgc2tpcD86IHN0cmluZztcbiAgICAgIGxpbWl0Pzogc3RyaW5nO1xuICAgIH07XG4gICAgLyoqXG4gICAgICog5piv5ZCm5bCG6K+35rGC5omA5pyJ5Y+C5pWw5pWw5o2u6YO95pS+5YWlIGBib2R5YCDlvZPkuK3vvIhgdXJsYCDlnLDlnYDmnKzouqvlj4LmlbDpmaTlpJbvvInvvIzku4XlvZMgYG1ldGhvZDogJ1BPU1QnYCDml7bmnInmlYjvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAgICovXG4gICAgYWxsSW5Cb2R5PzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiDmmK/lkKblu7bov5/liqDovb3mlbDmja7vvIzljbPmuLLmn5Pnu5PmnZ/lkI7kuI3kvJrkuLvliqjlj5Hotbfor7fmsYLvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAgICovXG4gICAgbGF6eUxvYWQ/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIOivt+axguWJjeaVsOaNruWkhOeQhlxuICAgICAqL1xuICAgIHByb2Nlc3M/OiAocmVxdWVzdE9wdGlvbnM6IE56U2FmZUFueSkgPT4gTnpTYWZlQW55O1xuICB9O1xuICAvKiog6L+U5Zue5L2T6YWN572uICovXG4gIHJlcz86IHtcbiAgICAvKipcbiAgICAgKiDph43lkb3lkI3ov5Tlm57lj4LmlbAgYHRvdGFsYOOAgWBsaXN0YO+8jOm7mOiupO+8mmB7IGxpc3Q6IFsnbGlzdCddLCB0b3RhbDogWyd0b3RhbCddIH1gXG4gICAgICogLSBgeyB0b3RhbDogJ1RvdGFsJyB9YCA9PiBUb3RhbCDkvJrooqvlvZPkvZwgYHRvdGFsYFxuICAgICAqL1xuICAgIHJlTmFtZT86IHtcbiAgICAgIHRvdGFsPzogc3RyaW5nIHwgc3RyaW5nW107XG4gICAgICBsaXN0Pzogc3RyaW5nIHwgc3RyaW5nW107XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiDmlbDmja7pooTlpITnkIZcbiAgICAgKi9cbiAgICBwcm9jZXNzPzogKGRhdGE6IE56U2FmZUFueVtdLCByYXdEYXRhPzogTnpTYWZlQW55KSA9PiBOelNhZmVBbnlbXTtcbiAgfTtcbiAgLyoqIOi/lOWbnuS9k+mFjee9riAqL1xuICBwYWdlPzoge1xuICAgIC8qKlxuICAgICAqIOWJjeerr+WIhumhte+8jOW9kyBgZGF0YWAg5Li6YGFueVtdYCDmiJYgYE9ic2VydmFibGU8YW55W10+YCDmnInmlYjvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICAgKiAtIGB0cnVlYCDnlLEgYHN0YCDmoLnmja4gYGRhdGFgIOmVv+W6puWPl+aOp+WIhumhte+8jOWMheaLrO+8muaOkuW6j+OAgei/h+a7pOetiVxuICAgICAqIC0gYGZhbHNlYCDnlLHnlKjmiLfpgJrov4cgYHRvdGFsYCDlkowgYGRhdGFgIOWPguaVsOWPl+aOp+WIhumhte+8jOW5tue7tOaKpCBgKGNoYW5nZSlgIOW9k+WIhumhteWPmOabtOaXtumHjeaWsOWKoOi9veaVsOaNrlxuICAgICAqL1xuICAgIGZyb250PzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiDlkI7nq6/liIbpobXmmK/lkKbph4fnlKhgMGDln7rntKLlvJXvvIzlj6rlnKhgZGF0YWDnsbvlnovkuLpgc3RyaW5nYOaXtuacieaViO+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICAgKi9cbiAgICB6ZXJvSW5kZXhlZD86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICog5oyH5a6a5YiG6aG15pi+56S655qE5L2N572u77yM6buY6K6k77yaYGJvdHRvbWBcbiAgICAgKi9cbiAgICBwb3NpdGlvbj86ICd0b3AnIHwgJ2JvdHRvbScgfCAnYm90aCc7XG4gICAgLyoqXG4gICAgICog5oyH5a6a5YiG6aG15YiG6aG15pa55ZCR77yM6buY6K6k77yaYHJpZ2h0YFxuICAgICAqL1xuICAgIHBsYWNlbWVudD86ICdsZWZ0JyB8ICdjZW50ZXInIHwgJ3JpZ2h0JztcbiAgICAvKipcbiAgICAgKiDmmK/lkKbmmL7npLrliIbpobXlmajvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICAgKi9cbiAgICBzaG93PzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiDmmK/lkKbmmL7npLrliIbpobXlmajkuK3mlLnlj5jpobXmlbDvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAgICovXG4gICAgc2hvd1NpemU/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIOWIhumhteWZqOS4reavj+mhteaYvuekuuadoeebruaVsOS4i+aLieahhuWAvO+8jOm7mOiupO+8mmBbMTAsIDIwLCAzMCwgNDAsIDUwXWBcbiAgICAgKi9cbiAgICBwYWdlU2l6ZXM/OiBudW1iZXJbXTtcbiAgICAvKipcbiAgICAgKiDmmK/lkKbmmL7npLrliIbpobXlmajkuK3lv6vpgJ/ot7PovazvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAgICovXG4gICAgc2hvd1F1aWNrSnVtcGVyPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiDmmK/lkKbmmL7npLrmgLvmlbDmja7ph4/vvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICAgKiAtIGBib29sZWFuYCDnsbvlnovmmL7npLrkuI7lkKbvvIzpu5jorqTmqKHmnb/vvJpg5YWxIHt7dG90YWx9fSDmnaFgXG4gICAgICogLSBgc3RyaW5nYCDoh6rlrprkuYnmqKHmnb/vvIzmqKHmnb/lj5jph4/vvJpcbiAgICAgKiAgLSBge3t0b3RhbH19YCDooajnpLrmlbDmja7mgLvph49cbiAgICAgKiAgLSBge3tyYW5nZVswXX19YCDooajnpLrlvZPliY3pobXlvIDlp4vmlbDph4/lgLxcbiAgICAgKiAgLSBge3tyYW5nZVsxXX19YCDooajnpLrlvZPliY3pobXnu5PmnZ/mlbDph4/lgLxcbiAgICAgKi9cbiAgICB0b3RhbD86IHN0cmluZyB8IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICog55So5LqO6Ieq5a6a5LmJ6aG156CB55qE57uT5p6E77yM55So5rOV5Y+C54WnIFBhZ2luYXRpb24g57uE5Lu2XG4gICAgICovXG4gICAgaXRlbVJlbmRlcj86IFRlbXBsYXRlUmVmPFBhZ2luYXRpb25JdGVtUmVuZGVyQ29udGV4dD4gfCBudWxsO1xuICAgIC8qKlxuICAgICAqIOW9k+a3u+WKoOivpeWxnuaAp+aXtu+8jOaYvuekuuS4uueugOWNleWIhumhte+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICAgKi9cbiAgICBzaW1wbGU/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIOWIh+aNouWIhumhteaXtui/lOWbnumhtumDqO+8jOm7mOiupO+8mmB0cnVlYFxuICAgICAqL1xuICAgIHRvVG9wPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiDov5Tlm57pobbpg6jlgY/np7vlgLzvvIzpu5jorqTvvJpgMTAwYFxuICAgICAqL1xuICAgIHRvVG9wT2Zmc2V0PzogbnVtYmVyO1xuICB9O1xuICAvKipcbiAgICog6YeN5ZG95ZCN5o6S5bqP5YC877yMYGNvbHVtbnNgIOeahOmHjeWRveWQjemrmOS6juWxnuaAp1xuICAgKi9cbiAgc29ydFJlTmFtZT86IHsgYXNjZW5kPzogc3RyaW5nOyBkZXNjZW5kPzogc3RyaW5nIH07XG4gIC8qKlxuICAgKiDljZXmjpLluo/op4TliJlcbiAgICogLSDoi6XkuI3mjIflrprvvIzliJnov5Tlm57vvJpgY29sdW1uTmFtZT1hc2NlbmR8ZGVzY2VuZGBcbiAgICogLSDoi6XmjIflrprvvIzliJnov5Tlm57vvJpgc29ydD1jb2x1bW5OYW1lLihhc2NlbmR8ZGVzY2VuZClgXG4gICAqL1xuICBzaW5nbGVTb3J0Pzoge1xuICAgIC8qKiDor7fmsYLlj4LmlbDlkI3vvIzpu5jorqTvvJpgc29ydGAgKi9cbiAgICBrZXk/OiBzdHJpbmc7XG4gICAgLyoqIOWIl+WQjeS4jueKtuaAgemXtOWIhumalOespu+8jOm7mOiupO+8mmAuYCAqL1xuICAgIG5hbWVTZXBhcmF0b3I/OiBzdHJpbmc7XG4gIH07XG4gIC8qKlxuICAgKiDmmK/lkKblpJrmjpLluo/vvIzlvZMgYHNvcnRgIOWkmuS4quebuOWQjOWAvOaXtuiHquWKqOWQiOW5tu+8jOW7uuiuruWQjuerr+aUr+aMgeaXtuS9v+eUqFxuICAgKi9cbiAgbXVsdGlTb3J0Pzoge1xuICAgIC8qKiDor7fmsYLlj4LmlbDlkI3vvIzpu5jorqTvvJpgc29ydGAgKi9cbiAgICBrZXk/OiBzdHJpbmc7XG4gICAgLyoqIOS4jeWQjOWxnuaAp+mXtOWIhumalOespu+8jOm7mOiupO+8mmAtYCAqL1xuICAgIHNlcGFyYXRvcj86IHN0cmluZztcbiAgICAvKiog5YiX5ZCN5LiO54q25oCB6Ze05YiG6ZqU56ym77yM6buY6K6k77yaYC5gICovXG4gICAgbmFtZVNlcGFyYXRvcj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiDmmK/lkKbku6XmlbDnu4TnmoTlvaLlvI/kvKDpgJLlj4LmlbBcbiAgICAgKiAtIGB0cnVlYCDooajnpLrkvb/nlKggYHVybD9zb3J0PW5hbWUuYXNjJnNvcnQ9YWdlLmRlc2NgIOW9ouW8j1xuICAgICAqIC0gYGZhbHNlYCDooajnpLrkvb/nlKggYHVybD9zb3J0PW5hbWUuYXNjLWFnZS5kZXNjYCDlvaLlvI9cbiAgICAgKi9cbiAgICBhcnJheVBhcmFtPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiDmmK/lkKblhajlsYDlpJrmjpLluo/mqKHlvI/vvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICAgKiAtIGB0cnVlYCDooajnpLrmiYDmnIkgYHN0YCDpu5jorqTkuLrlpJrmjpLluo9cbiAgICAgKiAtIGBmYWxzZWAg6KGo56S66ZyA6KaB5Li65q+P5LiqIGBzdGAg5re75YqgIGBtdWx0aVNvcnRgIOaJjeS8muinhuS4uuWkmuaOkuW6j+aooeW8j1xuICAgICAqL1xuICAgIGdsb2JhbD86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICog5piv5ZCm5L+d5oyB56m65YC855qE6ZSu5ZCN77yM6buY6K6k77yaYHRydWVgXG4gICAgICogLSBgdHJ1ZWAg6KGo56S65LiN566h5piv5ZCm5pyJ5o6S5bqP6YO95Lya5Y+R6YCBIGBrZXlgIOmUruWQjVxuICAgICAqIC0gYGZhbHNlYCDooajnpLrml6DmjpLluo/liqjkvZzml7bkuI3kvJrlj5HpgIEgYGtleWAg6ZSu5ZCNXG4gICAgICovXG4gICAga2VlcEVtcHR5S2V5PzogYm9vbGVhbjtcbiAgfTtcbiAgLyoqXG4gICAqIOaMiemSruaooeaAgeahhumFjee9rlxuICAgKi9cbiAgbW9kYWw/OiB7XG4gICAgLyoqXG4gICAgICog5oyH5a6a5qih5oCB5qGG55uu5qCH57uE5Lu255qE5o6l5pS25Y+C5pWw5ZCN77yM6buY6K6k77yaYHJlY29yZGBcbiAgICAgKi9cbiAgICBwYXJhbXNOYW1lPzogc3RyaW5nO1xuICAgIC8qKiDlpKflsI/vvJvkvovlpoLvvJpsZ+OAgTYwMO+8jOm7mOiupO+8mmBsZ2AgKi9cbiAgICBzaXplPzogJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8ICcnIHwgbnVtYmVyO1xuICAgIC8qKiDlr7nor53moYYgW01vZGFsT3B0aW9uc10oaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvY29tcG9uZW50cy9tb2RhbC9tb2RhbC10eXBlcy50cykg5Y+C5pWwICovXG4gICAgbW9kYWxPcHRpb25zPzogTW9kYWxPcHRpb25zO1xuICAgIC8qKiDmmK/lkKbnsr7lh4bvvIjpu5jorqTvvJpgdHJ1ZWDvvInvvIzoi6Xov5Tlm57lgLzpnZ7nqbrlgLzvvIhgbnVsbGDmiJZgdW5kZWZpbmVkYO+8ieinhuS4uuaIkOWKn++8jOWQpuWImeinhuS4uumUmeivryAqL1xuICAgIGV4YWN0PzogYm9vbGVhbjtcbiAgfTtcbiAgLyoqXG4gICAqIOaMiemSruaKveWxiemFjee9rlxuICAgKi9cbiAgZHJhd2VyPzoge1xuICAgIC8qKlxuICAgICAqIOaKveWxieebruagh+e7hOS7tueahOaOpeaUtuWPguaVsOWQje+8jOm7mOiupO+8mmByZWNvcmRgXG4gICAgICovXG4gICAgcGFyYW1zTmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiDlpKflsI/vvJvkvovlpoLvvJpsZ+OAgTYwMO+8jOm7mOiupO+8mmBtZGBcbiAgICAgKlxuICAgICAqIHwg57G75Z6LIHwg6buY6K6k5aSn5bCPIHxcbiAgICAgKiB8IC0tLSB8IC0tLS0tLSB8XG4gICAgICogfCBgc21gIHwgYDMwMGAgfFxuICAgICAqIHwgYG1kYCB8IGA2MDBgIHxcbiAgICAgKiB8IGBsZ2AgfCBgOTAwYCB8XG4gICAgICogfCBgeGxgIHwgYDEyMDBgIHxcbiAgICAgKlxuICAgICAqID4g5Lul5LiK5YC877yM5Y+v6YCa6L+H6KaG55uW55u45bqU55qETEVTU+WPguaVsOiHquihjOiwg+aVtFxuICAgICAqL1xuICAgIHNpemU/OiAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnIHwgbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIOaYr+WQpuWMheWQq+W6lemDqOW3peWFt+adoe+8jOm7mOiupO+8mmB0cnVlYFxuICAgICAqL1xuICAgIGZvb3Rlcj86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICog5bqV6YOo5bel5YW35p2h6auY5bqm77yM6buY6K6k77yaYDU1YFxuICAgICAqL1xuICAgIGZvb3RlckhlaWdodD86IG51bWJlcjtcbiAgICAvKiog5oq95bGJIFtOekRyYXdlck9wdGlvbnNdKGh0dHBzOi8vbmcuYW50LmRlc2lnbi9jb21wb25lbnRzL2RyYXdlci96aCNuemRyYXdlcm9wdGlvbnMpIOWPguaVsCAqL1xuICAgIGRyYXdlck9wdGlvbnM/OiBOekRyYXdlck9wdGlvbnM7XG4gIH07XG4gIC8qKlxuICAgKiDmsJTms6Hlj4LmlbBcbiAgICovXG4gIHBvcD86IHtcbiAgICAvKipcbiAgICAgKiBUaXRsZSBvZiB0aGUgcG9wb3ZlciwgZGVmYXVsdDogYOehruiupOWIoOmZpOWQl++8n2BcbiAgICAgKi9cbiAgICB0aXRsZT86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIFBvcG92ZXIgdHJpZ2dlciBtb2RlLCBkZWZhdWx0OiBgY2xpY2tgXG4gICAgICovXG4gICAgdHJpZ2dlcj86ICdjbGljaycgfCAnZm9jdXMnIHwgJ2hvdmVyJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBwb3NpdGlvbiBvZiB0aGUgcG9wb3ZlciByZWxhdGl2ZSB0byB0aGUgdGFyZ2V0LCBkZWZhdWx0OiBgdG9wYFxuICAgICAqL1xuICAgIHBsYWNlbWVudD86XG4gICAgICB8ICd0b3AnXG4gICAgICB8ICdsZWZ0J1xuICAgICAgfCAncmlnaHQnXG4gICAgICB8ICdib3R0b20nXG4gICAgICB8ICd0b3BMZWZ0J1xuICAgICAgfCAndG9wUmlnaHQnXG4gICAgICB8ICdib3R0b21MZWZ0J1xuICAgICAgfCAnYm90dG9tUmlnaHQnXG4gICAgICB8ICdsZWZ0VG9wJ1xuICAgICAgfCAnbGVmdEJvdHRvbSdcbiAgICAgIHwgJ3JpZ2h0VG9wJ1xuICAgICAgfCAncmlnaHRCb3R0b20nO1xuXG4gICAgLyoqXG4gICAgICogQ2xhc3MgbmFtZSBvZiB0aGUgcG9wb3ZlciBjYXJkXG4gICAgICovXG4gICAgb3ZlcmxheUNsYXNzTmFtZT86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIFN0eWxlIG9mIHRoZSBwb3BvdmVyIGNhcmRcbiAgICAgKi9cbiAgICBvdmVybGF5U3R5bGU/OiB7fTtcblxuICAgIC8qKlxuICAgICAqIFRleHQgb2YgdGhlIENhbmNlbCBidXR0b25cbiAgICAgKi9cbiAgICBjYW5jZWxUZXh0Pzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogVGV4dCBvZiB0aGUgQ29uZmlybSBidXR0b25cbiAgICAgKi9cbiAgICBva1RleHQ/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBCdXR0b24gYHR5cGVgIG9mIHRoZSBDb25maXJtIGJ1dHRvblxuICAgICAqL1xuICAgIG9rVHlwZT86ICdwcmltYXJ5JyB8ICdnaG9zdCcgfCAnZGFzaGVkJyB8ICdkYW5nZXInIHwgJ2RlZmF1bHQnO1xuXG4gICAgLyoqXG4gICAgICogQ3VzdG9taXplIGljb24gb2YgY29uZmlybWF0aW9uXG4gICAgICovXG4gICAgaWNvbj86IHN0cmluZztcbiAgfTtcbiAgLyoqXG4gICAqIOihjOWNleWHu+WkmuWwkeaXtumVv+S5i+exu+S4uuWPjOWHu++8iOWNleS9je+8muavq+enku+8ie+8jOm7mOiupO+8mmAyMDBgXG4gICAqL1xuICByb3dDbGlja1RpbWU/OiBudW1iZXI7XG4gIC8qKlxuICAgKiDov4fmu6TmjInpkq7noa7orqTmlofmnKxcbiAgICovXG4gIGZpbHRlckNvbmZpcm1UZXh0Pzogc3RyaW5nO1xuICAvKipcbiAgICog6L+H5ruk5oyJ6ZKu6YeN572u5paH5pysXG4gICAqL1xuICBmaWx0ZXJDbGVhclRleHQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDmjInpkq7lm77moIdcbiAgICovXG4gIGJ0bkljb24/OiB7XG4gICAgLyoqIOWbvuagh+S4u+mimOmjjuagvO+8jOm7mOiupO+8mmBvdXRsaW5lYCAqL1xuICAgIHRoZW1lPzogJ291dGxpbmUnIHwgJ3R3b3RvbmUnIHwgJ2ZpbGwnO1xuICAgIC8qKiDmmK/lkKbmnInml4vovazliqjnlLvvvIzpu5jorqTvvJpgZmFsc2VgICovXG4gICAgc3Bpbj86IGJvb2xlYW47XG4gICAgLyoqIOS7hemAgueUqOWPjOiJsuWbvuagh++8jOiuvue9ruWPjOiJsuWbvuagh+eahOS4u+imgeminOiJsu+8jOS7heWvueW9k+WJjSBpY29uIOeUn+aViCAqL1xuICAgIHR3b1RvbmVDb2xvcj86IHN0cmluZztcbiAgICAvKiog5oyH5a6a5p2l6IeqIEljb25Gb250IOeahOWbvuagh+exu+WeiyAqL1xuICAgIGljb25mb250Pzogc3RyaW5nO1xuICB9O1xuICAvKipcbiAgICog6KGM5Y+357Si5byV77yM6buY6K6k77yaYDFgXG4gICAqIC0g6K6h566X6KeE5YiZ5Li677yaYGluZGV4ICsgbm9JbmRleGBcbiAgICovXG4gIG5vSW5kZXg/OiBudW1iZXI7XG4gIC8qKlxuICAgKiDooajmoLzooYznmoTnsbvlkI1cbiAgICovXG4gIHJvd0NsYXNzTmFtZT86IChyZWNvcmQ6IE56U2FmZUFueSwgaW5kZXg6IG51bWJlcikgPT4gc3RyaW5nO1xuICAvKipcbiAgICog6YCa6L+H54K55Ye76KGM5p2l5bGV5byA5a2Q6KGM77yMRGVmYXVsdDogYGZhbHNlYFxuICAgKi9cbiAgZXhwYW5kUm93QnlDbGljaz86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDmiYvpo47nkLTmqKHlvI/vvIxEZWZhdWx0OiBgZmFsc2VgXG4gICAqL1xuICBleHBhbmRBY2NvcmRpb24/OiBib29sZWFuO1xuICAvKipcbiAgICog5oyH5a6aIGB3aWR0aGAg5qih5byPXG4gICAqL1xuICB3aWR0aE1vZGU/OiB7XG4gICAgLyoqXG4gICAgICog5a695bqm57G75Z6L77yM6buY6K6k77yaYGRlZmF1bHRgXG4gICAgICogLSBgZGVmYXVsdGAg6buY6K6k6KGM5Li6XG4gICAgICogLSBgc3RyaWN0YCDkuKXmoLzmqKHlvI/vvIzljbPlvLrliLbmjIkgYHdpZHRoYCDmjIflrprnmoTlrr3luqblkYjnjrDvvIzlubbmoLnmja4gYHN0cmljdEJlaGF2aW9yYCDnsbvlnovlpITnkIZcbiAgICAgKi9cbiAgICB0eXBlPzogJ3N0cmljdCcgfCAnZGVmYXVsdCc7XG4gICAgLyoqXG4gICAgICog5Lil5qC85qih5byP55qE5aSE55CG6KGM5Li677yM6buY6K6k77yaYHRydW5jYXRlYFxuICAgICAqIC0gYHdyYXBgIOW8uuWItuaNouihjFxuICAgICAqIC0gYHRydW5jYXRlYCDmiKrnn61cbiAgICAgKi9cbiAgICBzdHJpY3RCZWhhdmlvcj86ICd3cmFwJyB8ICd0cnVuY2F0ZSc7XG4gIH07XG4gIC8qKlxuICAgKiBEZWZhdWx0OiBgNTRgXG4gICAqL1xuICB2aXJ0dWFsSXRlbVNpemU/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBEZWZhdWx0OiBgMjAwYFxuICAgKi9cbiAgdmlydHVhbE1heEJ1ZmZlclB4PzogbnVtYmVyO1xuICAvKipcbiAgICogRGVmYXVsdDogYDEwMGBcbiAgICovXG4gIHZpcnR1YWxNaW5CdWZmZXJQeD86IG51bWJlcjtcbiAgLyoqXG4gICAqIFRoZSBUcmFja0J5RnVuY3Rpb24gdG8gdXNlIGZvciB0cmFja2luZyBjaGFuZ2VzXG4gICAqL1xuICB2aXJ0dWFsRm9yVHJhY2tCeT86IFRyYWNrQnlGdW5jdGlvbjxOelRhYmxlRGF0YT47XG4gIC8qKlxuICAgKiBDb25kaXRpb25hbCBleHByZXNzaW9uIHJlbmRlcmluZyBiZWhhdmlvciwgY2FuIGJlIHNldCB0byBgaGlkZWAgKGRlZmF1bHQpIG9yIGBkaXNhYmxlZGAsIERlZmF1bHQ6IGBoaWRlYFxuICAgKi9cbiAgaWlmQmVoYXZpb3I/OiAnaGlkZScgfCAnZGlzYWJsZWQnO1xuICAvKipcbiAgICogVGhlIHNwaW5uaW5nIGluZGljYXRvclxuICAgKi9cbiAgbG9hZGluZ0luZGljYXRvcj86IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICAvKipcbiAgICogU3BlY2lmaWVzIGEgZGVsYXkgaW4gbWlsbGlzZWNvbmRzIGZvciBsb2FkaW5nIHN0YXRlIChwcmV2ZW50IGZsdXNoKVxuICAgKi9cbiAgbG9hZGluZ0RlbGF5PzogbnVtYmVyO1xuICAvKipcbiAgICogQ3VzdG9tIG5vIHJlc3VsdCBjb250ZW50XG4gICAqL1xuICBub1Jlc3VsdD86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xufVxuIl19