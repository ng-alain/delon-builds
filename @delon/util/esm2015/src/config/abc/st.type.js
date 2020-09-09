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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QudHlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3V0aWwvc3JjL2NvbmZpZy9hYmMvc3QudHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQU1BLG1DQW9YQzs7Ozs7O0lBaFhDLDJCQUFZOzs7OztJQUlaLDJCQUFZOzs7OztJQUlaLGlDQUFtQjs7Ozs7SUFJbkIsNkJBQXNDOzs7OztJQUl0QyxtQ0FBcUI7Ozs7O0lBSXJCLG1EQUFxQzs7Ozs7SUFFckMsNEJBaUNFOzs7OztJQUVGLDRCQWFFOzs7OztJQUVGLDZCQW9ERTs7Ozs7SUFJRixtQ0FBbUQ7Ozs7Ozs7SUFNbkQsbUNBS0U7Ozs7O0lBSUYsa0NBeUJFOzs7OztJQUlGLDhCQVdFOzs7OztJQUlGLCtCQTRCRTs7Ozs7SUFJRiw0QkF5REU7Ozs7O0lBSUYscUNBQXNCOzs7OztJQUl0QiwwQ0FBMkI7Ozs7O0lBSTNCLHdDQUF5Qjs7Ozs7SUFJekIsZ0NBU0U7Ozs7OztJQUtGLGdDQUFpQjs7Ozs7SUFJakIscUNBQTREOzs7OztJQUk1RCx5Q0FBMkI7Ozs7O0lBSTNCLHdDQUEwQjs7Ozs7SUFJMUIsa0NBYUU7Ozs7O0lBSUYsd0NBQXlCOzs7OztJQUl6QiwyQ0FBNEI7Ozs7O0lBSTVCLDJDQUE0Qjs7Ozs7SUFJNUIsMENBQWlEOzs7OztJQUlqRCxvQ0FBa0M7Ozs7O0lBSWxDLHlDQUFxQzs7Ozs7SUFJckMscUNBQXNCOzs7OztJQUl0QixpQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZW1wbGF0ZVJlZiwgVHJhY2tCeUZ1bmN0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgTnpEcmF3ZXJPcHRpb25zIH0gZnJvbSAnbmctem9ycm8tYW50ZC9kcmF3ZXInO1xuaW1wb3J0IHsgTW9kYWxPcHRpb25zIH0gZnJvbSAnbmctem9ycm8tYW50ZC9tb2RhbCc7XG5pbXBvcnQgeyBOelRhYmxlRGF0YSB9IGZyb20gJ25nLXpvcnJvLWFudGQvdGFibGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFsYWluU1RDb25maWcge1xuICAvKipcbiAgICog6LW35aeL6aG156CB77yM6buY6K6k5Li677yaYDFgXG4gICAqL1xuICBwaT86IG51bWJlcjtcbiAgLyoqXG4gICAqIOavj+mhteaVsOmHj++8jOm7mOiupO+8mmAxMGBcbiAgICovXG4gIHBzPzogbnVtYmVyO1xuICAvKipcbiAgICog5piv5ZCm5pi+56S66L655qGG77yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgYm9yZGVyZWQ/OiBib29sZWFuO1xuICAvKipcbiAgICogdGFibGXlpKflsI/vvIzpu5jorqTvvJpgZGVmYXVsdGBcbiAgICovXG4gIHNpemU/OiAnc21hbGwnIHwgJ21pZGRsZScgfCAnZGVmYXVsdCc7XG4gIC8qKlxuICAgKiDmmK/lkKblvIDlkK/lk43lupTlvI/vvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICovXG4gIHJlc3BvbnNpdmU/OiBib29sZWFuO1xuICAvKipcbiAgICog5piv5ZCm5Zyo5bCP5bGP5bmV5LiL5omN5pi+56S66aG26YOo5LiO5bqV6YOo77yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgcmVzcG9uc2l2ZUhpZGVIZWFkZXJGb290ZXI/OiBib29sZWFuO1xuICAvKiog6K+35rGC5L2T6YWN572uICovXG4gIHJlcT86IHtcbiAgICAvKipcbiAgICAgKiDliIbpobXnsbvlnovvvIzpu5jorqTvvJpgcGFnZWBcbiAgICAgKiAtIGBwYWdlYCDkvb/nlKggYHBpYO+8jGBwc2Ag57uE5ZCIXG4gICAgICogLSBgc2tpcGAg5L2/55SoIGBza2lwYO+8jGBsaW1pdGAg57uE5ZCIXG4gICAgICovXG4gICAgdHlwZT86ICdwYWdlJyB8ICdza2lwJztcbiAgICAvKiog6K+35rGC5pa55rOV77yM6buY6K6k77yaYEdFVGAgKi9cbiAgICBtZXRob2Q/OiBzdHJpbmc7XG4gICAgLyoqIOivt+axguS9kyBgSGVhZGVyYCAqL1xuICAgIGhlYWRlcnM/OiBOelNhZmVBbnk7XG4gICAgLyoqXG4gICAgICog6YeN5ZG95ZCN5Y+C5pWwIGBwaWDjgIFgcHNg77yM6buY6K6k77yaYHsgcGk6ICdwaScsIHBzOiAncHMnLCBza2lwOiAnc2tpcCcsIGxpbWl0OiAnbGltaXQnIH1gXG4gICAgICogLSBgeyBwaTogJ1BhZ2UnIH1gID0+IGBwaWAg5Lya6KKr5pu/5o2i5oiQIFBhZ2VcbiAgICAgKi9cbiAgICByZU5hbWU/OiB7XG4gICAgICBwaT86IHN0cmluZztcbiAgICAgIHBzPzogc3RyaW5nO1xuICAgICAgc2tpcD86IHN0cmluZztcbiAgICAgIGxpbWl0Pzogc3RyaW5nO1xuICAgIH07XG4gICAgLyoqXG4gICAgICog5piv5ZCm5bCG6K+35rGC5omA5pyJ5Y+C5pWw5pWw5o2u6YO95pS+5YWlIGBib2R5YCDlvZPkuK3vvIhgdXJsYCDlnLDlnYDmnKzouqvlj4LmlbDpmaTlpJbvvInvvIzku4XlvZMgYG1ldGhvZDogJ1BPU1QnYCDml7bmnInmlYjvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAgICovXG4gICAgYWxsSW5Cb2R5PzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiDmmK/lkKblu7bov5/liqDovb3mlbDmja7vvIzljbPmuLLmn5Pnu5PmnZ/lkI7kuI3kvJrkuLvliqjlj5Hotbfor7fmsYLvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAgICovXG4gICAgbGF6eUxvYWQ/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIOivt+axguWJjeaVsOaNruWkhOeQhlxuICAgICAqL1xuICAgIHByb2Nlc3M/OiAocmVxdWVzdE9wdGlvbnM6IE56U2FmZUFueSkgPT4gTnpTYWZlQW55O1xuICB9O1xuICAvKiog6L+U5Zue5L2T6YWN572uICovXG4gIHJlcz86IHtcbiAgICAvKipcbiAgICAgKiDph43lkb3lkI3ov5Tlm57lj4LmlbAgYHRvdGFsYOOAgWBsaXN0YO+8jOm7mOiupO+8mmB7IGxpc3Q6IFsnbGlzdCddLCB0b3RhbDogWyd0b3RhbCddIH1gXG4gICAgICogLSBgeyB0b3RhbDogJ1RvdGFsJyB9YCA9PiBUb3RhbCDkvJrooqvlvZPkvZwgYHRvdGFsYFxuICAgICAqL1xuICAgIHJlTmFtZT86IHtcbiAgICAgIHRvdGFsPzogc3RyaW5nIHwgc3RyaW5nW107XG4gICAgICBsaXN0Pzogc3RyaW5nIHwgc3RyaW5nW107XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiDmlbDmja7pooTlpITnkIZcbiAgICAgKi9cbiAgICBwcm9jZXNzPzogKGRhdGE6IE56U2FmZUFueVtdLCByYXdEYXRhPzogTnpTYWZlQW55KSA9PiBOelNhZmVBbnlbXTtcbiAgfTtcbiAgLyoqIOi/lOWbnuS9k+mFjee9riAqL1xuICBwYWdlPzoge1xuICAgIC8qKlxuICAgICAqIOWJjeerr+WIhumhte+8jOW9kyBgZGF0YWAg5Li6YGFueVtdYCDmiJYgYE9ic2VydmFibGU8YW55W10+YCDmnInmlYjvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICAgKiAtIGB0cnVlYCDnlLEgYHN0YCDmoLnmja4gYGRhdGFgIOmVv+W6puWPl+aOp+WIhumhte+8jOWMheaLrO+8muaOkuW6j+OAgei/h+a7pOetiVxuICAgICAqIC0gYGZhbHNlYCDnlLHnlKjmiLfpgJrov4cgYHRvdGFsYCDlkowgYGRhdGFgIOWPguaVsOWPl+aOp+WIhumhte+8jOW5tue7tOaKpCBgKGNoYW5nZSlgIOW9k+WIhumhteWPmOabtOaXtumHjeaWsOWKoOi9veaVsOaNrlxuICAgICAqL1xuICAgIGZyb250PzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiDlkI7nq6/liIbpobXmmK/lkKbph4fnlKhgMGDln7rntKLlvJXvvIzlj6rlnKhgZGF0YWDnsbvlnovkuLpgc3RyaW5nYOaXtuacieaViO+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICAgKi9cbiAgICB6ZXJvSW5kZXhlZD86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICog5oyH5a6a5YiG6aG15pi+56S655qE5L2N572u77yM6buY6K6k77yaYGJvdHRvbWBcbiAgICAgKi9cbiAgICBwb3NpdGlvbj86ICd0b3AnIHwgJ2JvdHRvbScgfCAnYm90aCc7XG4gICAgLyoqXG4gICAgICog5oyH5a6a5YiG6aG15YiG6aG15pa55ZCR77yM6buY6K6k77yaYHJpZ2h0YFxuICAgICAqL1xuICAgIHBsYWNlbWVudD86ICdsZWZ0JyB8ICdjZW50ZXInIHwgJ3JpZ2h0JztcbiAgICAvKipcbiAgICAgKiDmmK/lkKbmmL7npLrliIbpobXlmajvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICAgKi9cbiAgICBzaG93PzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiDmmK/lkKbmmL7npLrliIbpobXlmajkuK3mlLnlj5jpobXmlbDvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAgICovXG4gICAgc2hvd1NpemU/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIOWIhumhteWZqOS4reavj+mhteaYvuekuuadoeebruaVsOS4i+aLieahhuWAvO+8jOm7mOiupO+8mmBbMTAsIDIwLCAzMCwgNDAsIDUwXWBcbiAgICAgKi9cbiAgICBwYWdlU2l6ZXM/OiBudW1iZXJbXTtcbiAgICAvKipcbiAgICAgKiDmmK/lkKbmmL7npLrliIbpobXlmajkuK3lv6vpgJ/ot7PovazvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAgICovXG4gICAgc2hvd1F1aWNrSnVtcGVyPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiDmmK/lkKbmmL7npLrmgLvmlbDmja7ph4/vvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICAgKiAtIGBib29sZWFuYCDnsbvlnovmmL7npLrkuI7lkKbvvIzpu5jorqTmqKHmnb/vvJpg5YWxIHt7dG90YWx9fSDmnaFgXG4gICAgICogLSBgc3RyaW5nYCDoh6rlrprkuYnmqKHmnb/vvIzmqKHmnb/lj5jph4/vvJpcbiAgICAgKiAgLSBge3t0b3RhbH19YCDooajnpLrmlbDmja7mgLvph49cbiAgICAgKiAgLSBge3tyYW5nZVswXX19YCDooajnpLrlvZPliY3pobXlvIDlp4vmlbDph4/lgLxcbiAgICAgKiAgLSBge3tyYW5nZVsxXX19YCDooajnpLrlvZPliY3pobXnu5PmnZ/mlbDph4/lgLxcbiAgICAgKi9cbiAgICB0b3RhbD86IHN0cmluZyB8IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICog5YiH5o2i5YiG6aG15pe26L+U5Zue6aG26YOo77yM6buY6K6k77yaYHRydWVgXG4gICAgICovXG4gICAgdG9Ub3A/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIOi/lOWbnumhtumDqOWBj+enu+WAvO+8jOm7mOiupO+8mmAxMDBgXG4gICAgICovXG4gICAgdG9Ub3BPZmZzZXQ/OiBudW1iZXI7XG4gIH07XG4gIC8qKlxuICAgKiDph43lkb3lkI3mjpLluo/lgLzvvIxgY29sdW1uc2Ag55qE6YeN5ZG95ZCN6auY5LqO5bGe5oCnXG4gICAqL1xuICBzb3J0UmVOYW1lPzogeyBhc2NlbmQ/OiBzdHJpbmc7IGRlc2NlbmQ/OiBzdHJpbmcgfTtcbiAgLyoqXG4gICAqIOWNleaOkuW6j+inhOWImVxuICAgKiAtIOiLpeS4jeaMh+Wumu+8jOWImei/lOWbnu+8mmBjb2x1bW5OYW1lPWFzY2VuZHxkZXNjZW5kYFxuICAgKiAtIOiLpeaMh+Wumu+8jOWImei/lOWbnu+8mmBzb3J0PWNvbHVtbk5hbWUuKGFzY2VuZHxkZXNjZW5kKWBcbiAgICovXG4gIHNpbmdsZVNvcnQ/OiB7XG4gICAgLyoqIOivt+axguWPguaVsOWQje+8jOm7mOiupO+8mmBzb3J0YCAqL1xuICAgIGtleT86IHN0cmluZztcbiAgICAvKiog5YiX5ZCN5LiO54q25oCB6Ze05YiG6ZqU56ym77yM6buY6K6k77yaYC5gICovXG4gICAgbmFtZVNlcGFyYXRvcj86IHN0cmluZztcbiAgfTtcbiAgLyoqXG4gICAqIOaYr+WQpuWkmuaOkuW6j++8jOW9kyBgc29ydGAg5aSa5Liq55u45ZCM5YC85pe26Ieq5Yqo5ZCI5bm277yM5bu66K6u5ZCO56uv5pSv5oyB5pe25L2/55SoXG4gICAqL1xuICBtdWx0aVNvcnQ/OiB7XG4gICAgLyoqIOivt+axguWPguaVsOWQje+8jOm7mOiupO+8mmBzb3J0YCAqL1xuICAgIGtleT86IHN0cmluZztcbiAgICAvKiog5LiN5ZCM5bGe5oCn6Ze05YiG6ZqU56ym77yM6buY6K6k77yaYC1gICovXG4gICAgc2VwYXJhdG9yPzogc3RyaW5nO1xuICAgIC8qKiDliJflkI3kuI7nirbmgIHpl7TliIbpmpTnrKbvvIzpu5jorqTvvJpgLmAgKi9cbiAgICBuYW1lU2VwYXJhdG9yPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIOaYr+WQpuS7peaVsOe7hOeahOW9ouW8j+S8oOmAkuWPguaVsFxuICAgICAqIC0gYHRydWVgIOihqOekuuS9v+eUqCBgdXJsP3NvcnQ9bmFtZS5hc2Mmc29ydD1hZ2UuZGVzY2Ag5b2i5byPXG4gICAgICogLSBgZmFsc2VgIOihqOekuuS9v+eUqCBgdXJsP3NvcnQ9bmFtZS5hc2MtYWdlLmRlc2NgIOW9ouW8j1xuICAgICAqL1xuICAgIGFycmF5UGFyYW0/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIOaYr+WQpuWFqOWxgOWkmuaOkuW6j+aooeW8j++8jOm7mOiupO+8mmB0cnVlYFxuICAgICAqIC0gYHRydWVgIOihqOekuuaJgOaciSBgc3RgIOm7mOiupOS4uuWkmuaOkuW6j1xuICAgICAqIC0gYGZhbHNlYCDooajnpLrpnIDopoHkuLrmr4/kuKogYHN0YCDmt7vliqAgYG11bHRpU29ydGAg5omN5Lya6KeG5Li65aSa5o6S5bqP5qih5byPXG4gICAgICovXG4gICAgZ2xvYmFsPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiDmmK/lkKbkv53mjIHnqbrlgLznmoTplK7lkI3vvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICAgKiAtIGB0cnVlYCDooajnpLrkuI3nrqHmmK/lkKbmnInmjpLluo/pg73kvJrlj5HpgIEgYGtleWAg6ZSu5ZCNXG4gICAgICogLSBgZmFsc2VgIOihqOekuuaXoOaOkuW6j+WKqOS9nOaXtuS4jeS8muWPkemAgSBga2V5YCDplK7lkI1cbiAgICAgKi9cbiAgICBrZWVwRW1wdHlLZXk/OiBib29sZWFuO1xuICB9O1xuICAvKipcbiAgICog5oyJ6ZKu5qih5oCB5qGG6YWN572uXG4gICAqL1xuICBtb2RhbD86IHtcbiAgICAvKipcbiAgICAgKiDmjIflrprmqKHmgIHmoYbnm67moIfnu4Tku7bnmoTmjqXmlLblj4LmlbDlkI3vvIzpu5jorqTvvJpgcmVjb3JkYFxuICAgICAqL1xuICAgIHBhcmFtc05hbWU/OiBzdHJpbmc7XG4gICAgLyoqIOWkp+Wwj++8m+S+i+Wmgu+8mmxn44CBNjAw77yM6buY6K6k77yaYGxnYCAqL1xuICAgIHNpemU/OiAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnIHwgJycgfCBudW1iZXI7XG4gICAgLyoqIOWvueivneahhiBbTW9kYWxPcHRpb25zXShodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9jb21wb25lbnRzL21vZGFsL21vZGFsLXR5cGVzLnRzKSDlj4LmlbAgKi9cbiAgICBtb2RhbE9wdGlvbnM/OiBNb2RhbE9wdGlvbnM7XG4gICAgLyoqIOaYr+WQpueyvuWHhu+8iOm7mOiupO+8mmB0cnVlYO+8ie+8jOiLpei/lOWbnuWAvOmdnuepuuWAvO+8iGBudWxsYOaIlmB1bmRlZmluZWRg77yJ6KeG5Li65oiQ5Yqf77yM5ZCm5YiZ6KeG5Li66ZSZ6K+vICovXG4gICAgZXhhY3Q/OiBib29sZWFuO1xuICB9O1xuICAvKipcbiAgICog5oyJ6ZKu5oq95bGJ6YWN572uXG4gICAqL1xuICBkcmF3ZXI/OiB7XG4gICAgLyoqXG4gICAgICog5oq95bGJ55uu5qCH57uE5Lu255qE5o6l5pS25Y+C5pWw5ZCN77yM6buY6K6k77yaYHJlY29yZGBcbiAgICAgKi9cbiAgICBwYXJhbXNOYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIOWkp+Wwj++8m+S+i+Wmgu+8mmxn44CBNjAw77yM6buY6K6k77yaYG1kYFxuICAgICAqXG4gICAgICogfCDnsbvlnosgfCDpu5jorqTlpKflsI8gfFxuICAgICAqIHwgLS0tIHwgLS0tLS0tIHxcbiAgICAgKiB8IGBzbWAgfCBgMzAwYCB8XG4gICAgICogfCBgbWRgIHwgYDYwMGAgfFxuICAgICAqIHwgYGxnYCB8IGA5MDBgIHxcbiAgICAgKiB8IGB4bGAgfCBgMTIwMGAgfFxuICAgICAqXG4gICAgICogPiDku6XkuIrlgLzvvIzlj6/pgJrov4fopobnm5bnm7jlupTnmoRMRVNT5Y+C5pWw6Ieq6KGM6LCD5pW0XG4gICAgICovXG4gICAgc2l6ZT86ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcgfCBudW1iZXI7XG4gICAgLyoqXG4gICAgICog5piv5ZCm5YyF5ZCr5bqV6YOo5bel5YW35p2h77yM6buY6K6k77yaYHRydWVgXG4gICAgICovXG4gICAgZm9vdGVyPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiDlupXpg6jlt6XlhbfmnaHpq5jluqbvvIzpu5jorqTvvJpgNTVgXG4gICAgICovXG4gICAgZm9vdGVySGVpZ2h0PzogbnVtYmVyO1xuICAgIC8qKiDmir3lsYkgW056RHJhd2VyT3B0aW9uc10oaHR0cHM6Ly9uZy5hbnQuZGVzaWduL2NvbXBvbmVudHMvZHJhd2VyL3poI256ZHJhd2Vyb3B0aW9ucykg5Y+C5pWwICovXG4gICAgZHJhd2VyT3B0aW9ucz86IE56RHJhd2VyT3B0aW9ucztcbiAgfTtcbiAgLyoqXG4gICAqIOawlOazoeWPguaVsFxuICAgKi9cbiAgcG9wPzoge1xuICAgIC8qKlxuICAgICAqIFRpdGxlIG9mIHRoZSBwb3BvdmVyLCBkZWZhdWx0OiBg56Gu6K6k5Yig6Zmk5ZCX77yfYFxuICAgICAqL1xuICAgIHRpdGxlPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogUG9wb3ZlciB0cmlnZ2VyIG1vZGUsIGRlZmF1bHQ6IGBjbGlja2BcbiAgICAgKi9cbiAgICB0cmlnZ2VyPzogJ2NsaWNrJyB8ICdmb2N1cycgfCAnaG92ZXInO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHBvc2l0aW9uIG9mIHRoZSBwb3BvdmVyIHJlbGF0aXZlIHRvIHRoZSB0YXJnZXQsIGRlZmF1bHQ6IGB0b3BgXG4gICAgICovXG4gICAgcGxhY2VtZW50PzpcbiAgICAgIHwgJ3RvcCdcbiAgICAgIHwgJ2xlZnQnXG4gICAgICB8ICdyaWdodCdcbiAgICAgIHwgJ2JvdHRvbSdcbiAgICAgIHwgJ3RvcExlZnQnXG4gICAgICB8ICd0b3BSaWdodCdcbiAgICAgIHwgJ2JvdHRvbUxlZnQnXG4gICAgICB8ICdib3R0b21SaWdodCdcbiAgICAgIHwgJ2xlZnRUb3AnXG4gICAgICB8ICdsZWZ0Qm90dG9tJ1xuICAgICAgfCAncmlnaHRUb3AnXG4gICAgICB8ICdyaWdodEJvdHRvbSc7XG5cbiAgICAvKipcbiAgICAgKiBDbGFzcyBuYW1lIG9mIHRoZSBwb3BvdmVyIGNhcmRcbiAgICAgKi9cbiAgICBvdmVybGF5Q2xhc3NOYW1lPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogU3R5bGUgb2YgdGhlIHBvcG92ZXIgY2FyZFxuICAgICAqL1xuICAgIG92ZXJsYXlTdHlsZT86IHt9O1xuXG4gICAgLyoqXG4gICAgICogVGV4dCBvZiB0aGUgQ2FuY2VsIGJ1dHRvblxuICAgICAqL1xuICAgIGNhbmNlbFRleHQ/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBUZXh0IG9mIHRoZSBDb25maXJtIGJ1dHRvblxuICAgICAqL1xuICAgIG9rVGV4dD86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEJ1dHRvbiBgdHlwZWAgb2YgdGhlIENvbmZpcm0gYnV0dG9uXG4gICAgICovXG4gICAgb2tUeXBlPzogJ3ByaW1hcnknIHwgJ2dob3N0JyB8ICdkYXNoZWQnIHwgJ2RhbmdlcicgfCAnZGVmYXVsdCc7XG5cbiAgICAvKipcbiAgICAgKiBDdXN0b21pemUgaWNvbiBvZiBjb25maXJtYXRpb25cbiAgICAgKi9cbiAgICBpY29uPzogc3RyaW5nO1xuICB9O1xuICAvKipcbiAgICog6KGM5Y2V5Ye75aSa5bCR5pe26ZW/5LmL57G75Li65Y+M5Ye777yI5Y2V5L2N77ya5q+r56eS77yJ77yM6buY6K6k77yaYDIwMGBcbiAgICovXG4gIHJvd0NsaWNrVGltZT86IG51bWJlcjtcbiAgLyoqXG4gICAqIOi/h+a7pOaMiemSruehruiupOaWh+acrFxuICAgKi9cbiAgZmlsdGVyQ29uZmlybVRleHQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDov4fmu6TmjInpkq7ph43nva7mlofmnKxcbiAgICovXG4gIGZpbHRlckNsZWFyVGV4dD86IHN0cmluZztcbiAgLyoqXG4gICAqIOaMiemSruWbvuagh1xuICAgKi9cbiAgYnRuSWNvbj86IHtcbiAgICAvKiog5Zu+5qCH5Li76aKY6aOO5qC877yM6buY6K6k77yaYG91dGxpbmVgICovXG4gICAgdGhlbWU/OiAnb3V0bGluZScgfCAndHdvdG9uZScgfCAnZmlsbCc7XG4gICAgLyoqIOaYr+WQpuacieaXi+i9rOWKqOeUu++8jOm7mOiupO+8mmBmYWxzZWAgKi9cbiAgICBzcGluPzogYm9vbGVhbjtcbiAgICAvKiog5LuF6YCC55So5Y+M6Imy5Zu+5qCH77yM6K6+572u5Y+M6Imy5Zu+5qCH55qE5Li76KaB6aKc6Imy77yM5LuF5a+55b2T5YmNIGljb24g55Sf5pWIICovXG4gICAgdHdvVG9uZUNvbG9yPzogc3RyaW5nO1xuICAgIC8qKiDmjIflrprmnaXoh6ogSWNvbkZvbnQg55qE5Zu+5qCH57G75Z6LICovXG4gICAgaWNvbmZvbnQ/OiBzdHJpbmc7XG4gIH07XG4gIC8qKlxuICAgKiDooYzlj7fntKLlvJXvvIzpu5jorqTvvJpgMWBcbiAgICogLSDorqHnrpfop4TliJnkuLrvvJpgaW5kZXggKyBub0luZGV4YFxuICAgKi9cbiAgbm9JbmRleD86IG51bWJlcjtcbiAgLyoqXG4gICAqIOihqOagvOihjOeahOexu+WQjVxuICAgKi9cbiAgcm93Q2xhc3NOYW1lPzogKHJlY29yZDogTnpTYWZlQW55LCBpbmRleDogbnVtYmVyKSA9PiBzdHJpbmc7XG4gIC8qKlxuICAgKiDpgJrov4fngrnlh7vooYzmnaXlsZXlvIDlrZDooYzvvIxEZWZhdWx0OiBgZmFsc2VgXG4gICAqL1xuICBleHBhbmRSb3dCeUNsaWNrPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOaJi+mjjueQtOaooeW8j++8jERlZmF1bHQ6IGBmYWxzZWBcbiAgICovXG4gIGV4cGFuZEFjY29yZGlvbj86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDmjIflrpogYHdpZHRoYCDmqKHlvI9cbiAgICovXG4gIHdpZHRoTW9kZT86IHtcbiAgICAvKipcbiAgICAgKiDlrr3luqbnsbvlnovvvIzpu5jorqTvvJpgZGVmYXVsdGBcbiAgICAgKiAtIGBkZWZhdWx0YCDpu5jorqTooYzkuLpcbiAgICAgKiAtIGBzdHJpY3RgIOS4peagvOaooeW8j++8jOWNs+W8uuWItuaMiSBgd2lkdGhgIOaMh+WumueahOWuveW6puWRiOeOsO+8jOW5tuagueaNriBgc3RyaWN0QmVoYXZpb3JgIOexu+Wei+WkhOeQhlxuICAgICAqL1xuICAgIHR5cGU/OiAnc3RyaWN0JyB8ICdkZWZhdWx0JztcbiAgICAvKipcbiAgICAgKiDkuKXmoLzmqKHlvI/nmoTlpITnkIbooYzkuLrvvIzpu5jorqTvvJpgdHJ1bmNhdGVgXG4gICAgICogLSBgd3JhcGAg5by65Yi25o2i6KGMXG4gICAgICogLSBgdHJ1bmNhdGVgIOaIquefrVxuICAgICAqL1xuICAgIHN0cmljdEJlaGF2aW9yPzogJ3dyYXAnIHwgJ3RydW5jYXRlJztcbiAgfTtcbiAgLyoqXG4gICAqIERlZmF1bHQ6IGA1NGBcbiAgICovXG4gIHZpcnR1YWxJdGVtU2l6ZT86IG51bWJlcjtcbiAgLyoqXG4gICAqIERlZmF1bHQ6IGAyMDBgXG4gICAqL1xuICB2aXJ0dWFsTWF4QnVmZmVyUHg/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBEZWZhdWx0OiBgMTAwYFxuICAgKi9cbiAgdmlydHVhbE1pbkJ1ZmZlclB4PzogbnVtYmVyO1xuICAvKipcbiAgICogVGhlIFRyYWNrQnlGdW5jdGlvbiB0byB1c2UgZm9yIHRyYWNraW5nIGNoYW5nZXNcbiAgICovXG4gIHZpcnR1YWxGb3JUcmFja0J5PzogVHJhY2tCeUZ1bmN0aW9uPE56VGFibGVEYXRhPjtcbiAgLyoqXG4gICAqIENvbmRpdGlvbmFsIGV4cHJlc3Npb24gcmVuZGVyaW5nIGJlaGF2aW9yLCBjYW4gYmUgc2V0IHRvIGBoaWRlYCAoZGVmYXVsdCkgb3IgYGRpc2FibGVkYCwgRGVmYXVsdDogYGhpZGVgXG4gICAqL1xuICBpaWZCZWhhdmlvcj86ICdoaWRlJyB8ICdkaXNhYmxlZCc7XG4gIC8qKlxuICAgKiBUaGUgc3Bpbm5pbmcgaW5kaWNhdG9yXG4gICAqL1xuICBsb2FkaW5nSW5kaWNhdG9yPzogVGVtcGxhdGVSZWY8dm9pZD47XG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgYSBkZWxheSBpbiBtaWxsaXNlY29uZHMgZm9yIGxvYWRpbmcgc3RhdGUgKHByZXZlbnQgZmx1c2gpXG4gICAqL1xuICBsb2FkaW5nRGVsYXk/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBDdXN0b20gbm8gcmVzdWx0IGNvbnRlbnRcbiAgICovXG4gIG5vUmVzdWx0Pzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG59XG4iXX0=