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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QudHlwZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS92c3RzL3dvcmsvMS9zL3BhY2thZ2VzL3V0aWwvIiwic291cmNlcyI6WyJzcmMvY29uZmlnL2FiYy9zdC50eXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBTUEsbUNBb1hDOzs7Ozs7SUFoWEMsMkJBQVk7Ozs7O0lBSVosMkJBQVk7Ozs7O0lBSVosaUNBQW1COzs7OztJQUluQiw2QkFBc0M7Ozs7O0lBSXRDLG1DQUFxQjs7Ozs7SUFJckIsbURBQXFDOzs7OztJQUVyQyw0QkFpQ0U7Ozs7O0lBRUYsNEJBYUU7Ozs7O0lBRUYsNkJBb0RFOzs7OztJQUlGLG1DQUFtRDs7Ozs7OztJQU1uRCxtQ0FLRTs7Ozs7SUFJRixrQ0F5QkU7Ozs7O0lBSUYsOEJBV0U7Ozs7O0lBSUYsK0JBNEJFOzs7OztJQUlGLDRCQXlERTs7Ozs7SUFJRixxQ0FBc0I7Ozs7O0lBSXRCLDBDQUEyQjs7Ozs7SUFJM0Isd0NBQXlCOzs7OztJQUl6QixnQ0FTRTs7Ozs7O0lBS0YsZ0NBQWlCOzs7OztJQUlqQixxQ0FBNEQ7Ozs7O0lBSTVELHlDQUEyQjs7Ozs7SUFJM0Isd0NBQTBCOzs7OztJQUkxQixrQ0FhRTs7Ozs7SUFJRix3Q0FBeUI7Ozs7O0lBSXpCLDJDQUE0Qjs7Ozs7SUFJNUIsMkNBQTRCOzs7OztJQUk1QiwwQ0FBaUQ7Ozs7O0lBSWpELG9DQUFrQzs7Ozs7SUFJbEMseUNBQXFDOzs7OztJQUlyQyxxQ0FBc0I7Ozs7O0lBSXRCLGlDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRlbXBsYXRlUmVmLCBUcmFja0J5RnVuY3Rpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBOekRyYXdlck9wdGlvbnMgfSBmcm9tICduZy16b3Jyby1hbnRkL2RyYXdlcic7XG5pbXBvcnQgeyBNb2RhbE9wdGlvbnMgfSBmcm9tICduZy16b3Jyby1hbnRkL21vZGFsJztcbmltcG9ydCB7IE56VGFibGVEYXRhIH0gZnJvbSAnbmctem9ycm8tYW50ZC90YWJsZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWxhaW5TVENvbmZpZyB7XG4gIC8qKlxuICAgKiDotbflp4vpobXnoIHvvIzpu5jorqTkuLrvvJpgMWBcbiAgICovXG4gIHBpPzogbnVtYmVyO1xuICAvKipcbiAgICog5q+P6aG15pWw6YeP77yM6buY6K6k77yaYDEwYFxuICAgKi9cbiAgcHM/OiBudW1iZXI7XG4gIC8qKlxuICAgKiDmmK/lkKbmmL7npLrovrnmoYbvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBib3JkZXJlZD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiB0YWJsZeWkp+Wwj++8jOm7mOiupO+8mmBkZWZhdWx0YFxuICAgKi9cbiAgc2l6ZT86ICdzbWFsbCcgfCAnbWlkZGxlJyB8ICdkZWZhdWx0JztcbiAgLyoqXG4gICAqIOaYr+WQpuW8gOWQr+WTjeW6lOW8j++8jOm7mOiupO+8mmB0cnVlYFxuICAgKi9cbiAgcmVzcG9uc2l2ZT86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDmmK/lkKblnKjlsI/lsY/luZXkuIvmiY3mmL7npLrpobbpg6jkuI7lupXpg6jvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICByZXNwb25zaXZlSGlkZUhlYWRlckZvb3Rlcj86IGJvb2xlYW47XG4gIC8qKiDor7fmsYLkvZPphY3nva4gKi9cbiAgcmVxPzoge1xuICAgIC8qKlxuICAgICAqIOWIhumhteexu+Wei++8jOm7mOiupO+8mmBwYWdlYFxuICAgICAqIC0gYHBhZ2VgIOS9v+eUqCBgcGlg77yMYHBzYCDnu4TlkIhcbiAgICAgKiAtIGBza2lwYCDkvb/nlKggYHNraXBg77yMYGxpbWl0YCDnu4TlkIhcbiAgICAgKi9cbiAgICB0eXBlPzogJ3BhZ2UnIHwgJ3NraXAnO1xuICAgIC8qKiDor7fmsYLmlrnms5XvvIzpu5jorqTvvJpgR0VUYCAqL1xuICAgIG1ldGhvZD86IHN0cmluZztcbiAgICAvKiog6K+35rGC5L2TIGBIZWFkZXJgICovXG4gICAgaGVhZGVycz86IE56U2FmZUFueTtcbiAgICAvKipcbiAgICAgKiDph43lkb3lkI3lj4LmlbAgYHBpYOOAgWBwc2DvvIzpu5jorqTvvJpgeyBwaTogJ3BpJywgcHM6ICdwcycsIHNraXA6ICdza2lwJywgbGltaXQ6ICdsaW1pdCcgfWBcbiAgICAgKiAtIGB7IHBpOiAnUGFnZScgfWAgPT4gYHBpYCDkvJrooqvmm7/mjaLmiJAgUGFnZVxuICAgICAqL1xuICAgIHJlTmFtZT86IHtcbiAgICAgIHBpPzogc3RyaW5nO1xuICAgICAgcHM/OiBzdHJpbmc7XG4gICAgICBza2lwPzogc3RyaW5nO1xuICAgICAgbGltaXQ/OiBzdHJpbmc7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiDmmK/lkKblsIbor7fmsYLmiYDmnInlj4LmlbDmlbDmja7pg73mlL7lhaUgYGJvZHlgIOW9k+S4re+8iGB1cmxgIOWcsOWdgOacrOi6q+WPguaVsOmZpOWklu+8ie+8jOS7heW9kyBgbWV0aG9kOiAnUE9TVCdgIOaXtuacieaViO+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICAgKi9cbiAgICBhbGxJbkJvZHk/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIOaYr+WQpuW7tui/n+WKoOi9veaVsOaNru+8jOWNs+a4suafk+e7k+adn+WQjuS4jeS8muS4u+WKqOWPkei1t+ivt+axgu+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICAgKi9cbiAgICBsYXp5TG9hZD86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICog6K+35rGC5YmN5pWw5o2u5aSE55CGXG4gICAgICovXG4gICAgcHJvY2Vzcz86IChyZXF1ZXN0T3B0aW9uczogTnpTYWZlQW55KSA9PiBOelNhZmVBbnk7XG4gIH07XG4gIC8qKiDov5Tlm57kvZPphY3nva4gKi9cbiAgcmVzPzoge1xuICAgIC8qKlxuICAgICAqIOmHjeWRveWQjei/lOWbnuWPguaVsCBgdG90YWxg44CBYGxpc3Rg77yM6buY6K6k77yaYHsgbGlzdDogWydsaXN0J10sIHRvdGFsOiBbJ3RvdGFsJ10gfWBcbiAgICAgKiAtIGB7IHRvdGFsOiAnVG90YWwnIH1gID0+IFRvdGFsIOS8muiiq+W9k+S9nCBgdG90YWxgXG4gICAgICovXG4gICAgcmVOYW1lPzoge1xuICAgICAgdG90YWw/OiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgICAgIGxpc3Q/OiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIOaVsOaNrumihOWkhOeQhlxuICAgICAqL1xuICAgIHByb2Nlc3M/OiAoZGF0YTogTnpTYWZlQW55W10sIHJhd0RhdGE/OiBOelNhZmVBbnkpID0+IE56U2FmZUFueVtdO1xuICB9O1xuICAvKiog6L+U5Zue5L2T6YWN572uICovXG4gIHBhZ2U/OiB7XG4gICAgLyoqXG4gICAgICog5YmN56uv5YiG6aG177yM5b2TIGBkYXRhYCDkuLpgYW55W11gIOaIliBgT2JzZXJ2YWJsZTxhbnlbXT5gIOacieaViO+8jOm7mOiupO+8mmB0cnVlYFxuICAgICAqIC0gYHRydWVgIOeUsSBgc3RgIOagueaNriBgZGF0YWAg6ZW/5bqm5Y+X5o6n5YiG6aG177yM5YyF5ous77ya5o6S5bqP44CB6L+H5ruk562JXG4gICAgICogLSBgZmFsc2VgIOeUseeUqOaIt+mAmui/hyBgdG90YWxgIOWSjCBgZGF0YWAg5Y+C5pWw5Y+X5o6n5YiG6aG177yM5bm257u05oqkIGAoY2hhbmdlKWAg5b2T5YiG6aG15Y+Y5pu05pe26YeN5paw5Yqg6L295pWw5o2uXG4gICAgICovXG4gICAgZnJvbnQ/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIOWQjuerr+WIhumhteaYr+WQpumHh+eUqGAwYOWfuue0ouW8le+8jOWPquWcqGBkYXRhYOexu+Wei+S4umBzdHJpbmdg5pe25pyJ5pWI77yM6buY6K6k77yaYGZhbHNlYFxuICAgICAqL1xuICAgIHplcm9JbmRleGVkPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiDmjIflrprliIbpobXmmL7npLrnmoTkvY3nva7vvIzpu5jorqTvvJpgYm90dG9tYFxuICAgICAqL1xuICAgIHBvc2l0aW9uPzogJ3RvcCcgfCAnYm90dG9tJyB8ICdib3RoJztcbiAgICAvKipcbiAgICAgKiDmjIflrprliIbpobXliIbpobXmlrnlkJHvvIzpu5jorqTvvJpgcmlnaHRgXG4gICAgICovXG4gICAgcGxhY2VtZW50PzogJ2xlZnQnIHwgJ2NlbnRlcicgfCAncmlnaHQnO1xuICAgIC8qKlxuICAgICAqIOaYr+WQpuaYvuekuuWIhumhteWZqO+8jOm7mOiupO+8mmB0cnVlYFxuICAgICAqL1xuICAgIHNob3c/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIOaYr+WQpuaYvuekuuWIhumhteWZqOS4reaUueWPmOmhteaVsO+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICAgKi9cbiAgICBzaG93U2l6ZT86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICog5YiG6aG15Zmo5Lit5q+P6aG15pi+56S65p2h55uu5pWw5LiL5ouJ5qGG5YC877yM6buY6K6k77yaYFsxMCwgMjAsIDMwLCA0MCwgNTBdYFxuICAgICAqL1xuICAgIHBhZ2VTaXplcz86IG51bWJlcltdO1xuICAgIC8qKlxuICAgICAqIOaYr+WQpuaYvuekuuWIhumhteWZqOS4reW/q+mAn+i3s+i9rO+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICAgKi9cbiAgICBzaG93UXVpY2tKdW1wZXI/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIOaYr+WQpuaYvuekuuaAu+aVsOaNrumHj++8jOm7mOiupO+8mmB0cnVlYFxuICAgICAqIC0gYGJvb2xlYW5gIOexu+Wei+aYvuekuuS4juWQpu+8jOm7mOiupOaooeadv++8mmDlhbEge3t0b3RhbH19IOadoWBcbiAgICAgKiAtIGBzdHJpbmdgIOiHquWumuS5ieaooeadv++8jOaooeadv+WPmOmHj++8mlxuICAgICAqICAtIGB7e3RvdGFsfX1gIOihqOekuuaVsOaNruaAu+mHj1xuICAgICAqICAtIGB7e3JhbmdlWzBdfX1gIOihqOekuuW9k+WJjemhteW8gOWni+aVsOmHj+WAvFxuICAgICAqICAtIGB7e3JhbmdlWzFdfX1gIOihqOekuuW9k+WJjemhtee7k+adn+aVsOmHj+WAvFxuICAgICAqL1xuICAgIHRvdGFsPzogc3RyaW5nIHwgYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiDliIfmjaLliIbpobXml7bov5Tlm57pobbpg6jvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICAgKi9cbiAgICB0b1RvcD86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICog6L+U5Zue6aG26YOo5YGP56e75YC877yM6buY6K6k77yaYDEwMGBcbiAgICAgKi9cbiAgICB0b1RvcE9mZnNldD86IG51bWJlcjtcbiAgfTtcbiAgLyoqXG4gICAqIOmHjeWRveWQjeaOkuW6j+WAvO+8jGBjb2x1bW5zYCDnmoTph43lkb3lkI3pq5jkuo7lsZ7mgKdcbiAgICovXG4gIHNvcnRSZU5hbWU/OiB7IGFzY2VuZD86IHN0cmluZzsgZGVzY2VuZD86IHN0cmluZyB9O1xuICAvKipcbiAgICog5Y2V5o6S5bqP6KeE5YiZXG4gICAqIC0g6Iul5LiN5oyH5a6a77yM5YiZ6L+U5Zue77yaYGNvbHVtbk5hbWU9YXNjZW5kfGRlc2NlbmRgXG4gICAqIC0g6Iul5oyH5a6a77yM5YiZ6L+U5Zue77yaYHNvcnQ9Y29sdW1uTmFtZS4oYXNjZW5kfGRlc2NlbmQpYFxuICAgKi9cbiAgc2luZ2xlU29ydD86IHtcbiAgICAvKiog6K+35rGC5Y+C5pWw5ZCN77yM6buY6K6k77yaYHNvcnRgICovXG4gICAga2V5Pzogc3RyaW5nO1xuICAgIC8qKiDliJflkI3kuI7nirbmgIHpl7TliIbpmpTnrKbvvIzpu5jorqTvvJpgLmAgKi9cbiAgICBuYW1lU2VwYXJhdG9yPzogc3RyaW5nO1xuICB9O1xuICAvKipcbiAgICog5piv5ZCm5aSa5o6S5bqP77yM5b2TIGBzb3J0YCDlpJrkuKrnm7jlkIzlgLzml7boh6rliqjlkIjlubbvvIzlu7rorq7lkI7nq6/mlK/mjIHml7bkvb/nlKhcbiAgICovXG4gIG11bHRpU29ydD86IHtcbiAgICAvKiog6K+35rGC5Y+C5pWw5ZCN77yM6buY6K6k77yaYHNvcnRgICovXG4gICAga2V5Pzogc3RyaW5nO1xuICAgIC8qKiDkuI3lkIzlsZ7mgKfpl7TliIbpmpTnrKbvvIzpu5jorqTvvJpgLWAgKi9cbiAgICBzZXBhcmF0b3I/OiBzdHJpbmc7XG4gICAgLyoqIOWIl+WQjeS4jueKtuaAgemXtOWIhumalOespu+8jOm7mOiupO+8mmAuYCAqL1xuICAgIG5hbWVTZXBhcmF0b3I/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICog5piv5ZCm5Lul5pWw57uE55qE5b2i5byP5Lyg6YCS5Y+C5pWwXG4gICAgICogLSBgdHJ1ZWAg6KGo56S65L2/55SoIGB1cmw/c29ydD1uYW1lLmFzYyZzb3J0PWFnZS5kZXNjYCDlvaLlvI9cbiAgICAgKiAtIGBmYWxzZWAg6KGo56S65L2/55SoIGB1cmw/c29ydD1uYW1lLmFzYy1hZ2UuZGVzY2Ag5b2i5byPXG4gICAgICovXG4gICAgYXJyYXlQYXJhbT86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICog5piv5ZCm5YWo5bGA5aSa5o6S5bqP5qih5byP77yM6buY6K6k77yaYHRydWVgXG4gICAgICogLSBgdHJ1ZWAg6KGo56S65omA5pyJIGBzdGAg6buY6K6k5Li65aSa5o6S5bqPXG4gICAgICogLSBgZmFsc2VgIOihqOekuumcgOimgeS4uuavj+S4qiBgc3RgIOa3u+WKoCBgbXVsdGlTb3J0YCDmiY3kvJrop4bkuLrlpJrmjpLluo/mqKHlvI9cbiAgICAgKi9cbiAgICBnbG9iYWw/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIOaYr+WQpuS/neaMgeepuuWAvOeahOmUruWQje+8jOm7mOiupO+8mmB0cnVlYFxuICAgICAqIC0gYHRydWVgIOihqOekuuS4jeeuoeaYr+WQpuacieaOkuW6j+mDveS8muWPkemAgSBga2V5YCDplK7lkI1cbiAgICAgKiAtIGBmYWxzZWAg6KGo56S65peg5o6S5bqP5Yqo5L2c5pe25LiN5Lya5Y+R6YCBIGBrZXlgIOmUruWQjVxuICAgICAqL1xuICAgIGtlZXBFbXB0eUtleT86IGJvb2xlYW47XG4gIH07XG4gIC8qKlxuICAgKiDmjInpkq7mqKHmgIHmoYbphY3nva5cbiAgICovXG4gIG1vZGFsPzoge1xuICAgIC8qKlxuICAgICAqIOaMh+WumuaooeaAgeahhuebruagh+e7hOS7tueahOaOpeaUtuWPguaVsOWQje+8jOm7mOiupO+8mmByZWNvcmRgXG4gICAgICovXG4gICAgcGFyYW1zTmFtZT86IHN0cmluZztcbiAgICAvKiog5aSn5bCP77yb5L6L5aaC77yabGfjgIE2MDDvvIzpu5jorqTvvJpgbGdgICovXG4gICAgc2l6ZT86ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcgfCAnJyB8IG51bWJlcjtcbiAgICAvKiog5a+56K+d5qGGIFtNb2RhbE9wdGlvbnNdKGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwtdHlwZXMudHMpIOWPguaVsCAqL1xuICAgIG1vZGFsT3B0aW9ucz86IE1vZGFsT3B0aW9ucztcbiAgICAvKiog5piv5ZCm57K+5YeG77yI6buY6K6k77yaYHRydWVg77yJ77yM6Iul6L+U5Zue5YC86Z2e56m65YC877yIYG51bGxg5oiWYHVuZGVmaW5lZGDvvInop4bkuLrmiJDlip/vvIzlkKbliJnop4bkuLrplJnor68gKi9cbiAgICBleGFjdD86IGJvb2xlYW47XG4gIH07XG4gIC8qKlxuICAgKiDmjInpkq7mir3lsYnphY3nva5cbiAgICovXG4gIGRyYXdlcj86IHtcbiAgICAvKipcbiAgICAgKiDmir3lsYnnm67moIfnu4Tku7bnmoTmjqXmlLblj4LmlbDlkI3vvIzpu5jorqTvvJpgcmVjb3JkYFxuICAgICAqL1xuICAgIHBhcmFtc05hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICog5aSn5bCP77yb5L6L5aaC77yabGfjgIE2MDDvvIzpu5jorqTvvJpgbWRgXG4gICAgICpcbiAgICAgKiB8IOexu+WeiyB8IOm7mOiupOWkp+WwjyB8XG4gICAgICogfCAtLS0gfCAtLS0tLS0gfFxuICAgICAqIHwgYHNtYCB8IGAzMDBgIHxcbiAgICAgKiB8IGBtZGAgfCBgNjAwYCB8XG4gICAgICogfCBgbGdgIHwgYDkwMGAgfFxuICAgICAqIHwgYHhsYCB8IGAxMjAwYCB8XG4gICAgICpcbiAgICAgKiA+IOS7peS4iuWAvO+8jOWPr+mAmui/h+imhuebluebuOW6lOeahExFU1Plj4LmlbDoh6rooYzosIPmlbRcbiAgICAgKi9cbiAgICBzaXplPzogJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiDmmK/lkKbljIXlkKvlupXpg6jlt6XlhbfmnaHvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICAgKi9cbiAgICBmb290ZXI/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIOW6lemDqOW3peWFt+adoemrmOW6pu+8jOm7mOiupO+8mmA1NWBcbiAgICAgKi9cbiAgICBmb290ZXJIZWlnaHQ/OiBudW1iZXI7XG4gICAgLyoqIOaKveWxiSBbTnpEcmF3ZXJPcHRpb25zXShodHRwczovL25nLmFudC5kZXNpZ24vY29tcG9uZW50cy9kcmF3ZXIvemgjbnpkcmF3ZXJvcHRpb25zKSDlj4LmlbAgKi9cbiAgICBkcmF3ZXJPcHRpb25zPzogTnpEcmF3ZXJPcHRpb25zO1xuICB9O1xuICAvKipcbiAgICog5rCU5rOh5Y+C5pWwXG4gICAqL1xuICBwb3A/OiB7XG4gICAgLyoqXG4gICAgICogVGl0bGUgb2YgdGhlIHBvcG92ZXIsIGRlZmF1bHQ6IGDnoa7orqTliKDpmaTlkJfvvJ9gXG4gICAgICovXG4gICAgdGl0bGU/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBQb3BvdmVyIHRyaWdnZXIgbW9kZSwgZGVmYXVsdDogYGNsaWNrYFxuICAgICAqL1xuICAgIHRyaWdnZXI/OiAnY2xpY2snIHwgJ2ZvY3VzJyB8ICdob3Zlcic7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcG9zaXRpb24gb2YgdGhlIHBvcG92ZXIgcmVsYXRpdmUgdG8gdGhlIHRhcmdldCwgZGVmYXVsdDogYHRvcGBcbiAgICAgKi9cbiAgICBwbGFjZW1lbnQ/OlxuICAgICAgfCAndG9wJ1xuICAgICAgfCAnbGVmdCdcbiAgICAgIHwgJ3JpZ2h0J1xuICAgICAgfCAnYm90dG9tJ1xuICAgICAgfCAndG9wTGVmdCdcbiAgICAgIHwgJ3RvcFJpZ2h0J1xuICAgICAgfCAnYm90dG9tTGVmdCdcbiAgICAgIHwgJ2JvdHRvbVJpZ2h0J1xuICAgICAgfCAnbGVmdFRvcCdcbiAgICAgIHwgJ2xlZnRCb3R0b20nXG4gICAgICB8ICdyaWdodFRvcCdcbiAgICAgIHwgJ3JpZ2h0Qm90dG9tJztcblxuICAgIC8qKlxuICAgICAqIENsYXNzIG5hbWUgb2YgdGhlIHBvcG92ZXIgY2FyZFxuICAgICAqL1xuICAgIG92ZXJsYXlDbGFzc05hbWU/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBTdHlsZSBvZiB0aGUgcG9wb3ZlciBjYXJkXG4gICAgICovXG4gICAgb3ZlcmxheVN0eWxlPzoge307XG5cbiAgICAvKipcbiAgICAgKiBUZXh0IG9mIHRoZSBDYW5jZWwgYnV0dG9uXG4gICAgICovXG4gICAgY2FuY2VsVGV4dD86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIFRleHQgb2YgdGhlIENvbmZpcm0gYnV0dG9uXG4gICAgICovXG4gICAgb2tUZXh0Pzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQnV0dG9uIGB0eXBlYCBvZiB0aGUgQ29uZmlybSBidXR0b25cbiAgICAgKi9cbiAgICBva1R5cGU/OiAncHJpbWFyeScgfCAnZ2hvc3QnIHwgJ2Rhc2hlZCcgfCAnZGFuZ2VyJyB8ICdkZWZhdWx0JztcblxuICAgIC8qKlxuICAgICAqIEN1c3RvbWl6ZSBpY29uIG9mIGNvbmZpcm1hdGlvblxuICAgICAqL1xuICAgIGljb24/OiBzdHJpbmc7XG4gIH07XG4gIC8qKlxuICAgKiDooYzljZXlh7vlpJrlsJHml7bplb/kuYvnsbvkuLrlj4zlh7vvvIjljZXkvY3vvJrmr6vnp5LvvInvvIzpu5jorqTvvJpgMjAwYFxuICAgKi9cbiAgcm93Q2xpY2tUaW1lPzogbnVtYmVyO1xuICAvKipcbiAgICog6L+H5ruk5oyJ6ZKu56Gu6K6k5paH5pysXG4gICAqL1xuICBmaWx0ZXJDb25maXJtVGV4dD86IHN0cmluZztcbiAgLyoqXG4gICAqIOi/h+a7pOaMiemSrumHjee9ruaWh+acrFxuICAgKi9cbiAgZmlsdGVyQ2xlYXJUZXh0Pzogc3RyaW5nO1xuICAvKipcbiAgICog5oyJ6ZKu5Zu+5qCHXG4gICAqL1xuICBidG5JY29uPzoge1xuICAgIC8qKiDlm77moIfkuLvpopjpo47moLzvvIzpu5jorqTvvJpgb3V0bGluZWAgKi9cbiAgICB0aGVtZT86ICdvdXRsaW5lJyB8ICd0d290b25lJyB8ICdmaWxsJztcbiAgICAvKiog5piv5ZCm5pyJ5peL6L2s5Yqo55S777yM6buY6K6k77yaYGZhbHNlYCAqL1xuICAgIHNwaW4/OiBib29sZWFuO1xuICAgIC8qKiDku4XpgILnlKjlj4zoibLlm77moIfvvIzorr7nva7lj4zoibLlm77moIfnmoTkuLvopoHpopzoibLvvIzku4Xlr7nlvZPliY0gaWNvbiDnlJ/mlYggKi9cbiAgICB0d29Ub25lQ29sb3I/OiBzdHJpbmc7XG4gICAgLyoqIOaMh+WumuadpeiHqiBJY29uRm9udCDnmoTlm77moIfnsbvlnosgKi9cbiAgICBpY29uZm9udD86IHN0cmluZztcbiAgfTtcbiAgLyoqXG4gICAqIOihjOWPt+e0ouW8le+8jOm7mOiupO+8mmAxYFxuICAgKiAtIOiuoeeul+inhOWImeS4uu+8mmBpbmRleCArIG5vSW5kZXhgXG4gICAqL1xuICBub0luZGV4PzogbnVtYmVyO1xuICAvKipcbiAgICog6KGo5qC86KGM55qE57G75ZCNXG4gICAqL1xuICByb3dDbGFzc05hbWU/OiAocmVjb3JkOiBOelNhZmVBbnksIGluZGV4OiBudW1iZXIpID0+IHN0cmluZztcbiAgLyoqXG4gICAqIOmAmui/h+eCueWHu+ihjOadpeWxleW8gOWtkOihjO+8jERlZmF1bHQ6IGBmYWxzZWBcbiAgICovXG4gIGV4cGFuZFJvd0J5Q2xpY2s/OiBib29sZWFuO1xuICAvKipcbiAgICog5omL6aOO55C05qih5byP77yMRGVmYXVsdDogYGZhbHNlYFxuICAgKi9cbiAgZXhwYW5kQWNjb3JkaW9uPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOaMh+WumiBgd2lkdGhgIOaooeW8j1xuICAgKi9cbiAgd2lkdGhNb2RlPzoge1xuICAgIC8qKlxuICAgICAqIOWuveW6puexu+Wei++8jOm7mOiupO+8mmBkZWZhdWx0YFxuICAgICAqIC0gYGRlZmF1bHRgIOm7mOiupOihjOS4ulxuICAgICAqIC0gYHN0cmljdGAg5Lil5qC85qih5byP77yM5Y2z5by65Yi25oyJIGB3aWR0aGAg5oyH5a6a55qE5a695bqm5ZGI546w77yM5bm25qC55o2uIGBzdHJpY3RCZWhhdmlvcmAg57G75Z6L5aSE55CGXG4gICAgICovXG4gICAgdHlwZT86ICdzdHJpY3QnIHwgJ2RlZmF1bHQnO1xuICAgIC8qKlxuICAgICAqIOS4peagvOaooeW8j+eahOWkhOeQhuihjOS4uu+8jOm7mOiupO+8mmB0cnVuY2F0ZWBcbiAgICAgKiAtIGB3cmFwYCDlvLrliLbmjaLooYxcbiAgICAgKiAtIGB0cnVuY2F0ZWAg5oiq55+tXG4gICAgICovXG4gICAgc3RyaWN0QmVoYXZpb3I/OiAnd3JhcCcgfCAndHJ1bmNhdGUnO1xuICB9O1xuICAvKipcbiAgICogRGVmYXVsdDogYDU0YFxuICAgKi9cbiAgdmlydHVhbEl0ZW1TaXplPzogbnVtYmVyO1xuICAvKipcbiAgICogRGVmYXVsdDogYDIwMGBcbiAgICovXG4gIHZpcnR1YWxNYXhCdWZmZXJQeD86IG51bWJlcjtcbiAgLyoqXG4gICAqIERlZmF1bHQ6IGAxMDBgXG4gICAqL1xuICB2aXJ0dWFsTWluQnVmZmVyUHg/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBUaGUgVHJhY2tCeUZ1bmN0aW9uIHRvIHVzZSBmb3IgdHJhY2tpbmcgY2hhbmdlc1xuICAgKi9cbiAgdmlydHVhbEZvclRyYWNrQnk/OiBUcmFja0J5RnVuY3Rpb248TnpUYWJsZURhdGE+O1xuICAvKipcbiAgICogQ29uZGl0aW9uYWwgZXhwcmVzc2lvbiByZW5kZXJpbmcgYmVoYXZpb3IsIGNhbiBiZSBzZXQgdG8gYGhpZGVgIChkZWZhdWx0KSBvciBgZGlzYWJsZWRgLCBEZWZhdWx0OiBgaGlkZWBcbiAgICovXG4gIGlpZkJlaGF2aW9yPzogJ2hpZGUnIHwgJ2Rpc2FibGVkJztcbiAgLyoqXG4gICAqIFRoZSBzcGlubmluZyBpbmRpY2F0b3JcbiAgICovXG4gIGxvYWRpbmdJbmRpY2F0b3I/OiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgLyoqXG4gICAqIFNwZWNpZmllcyBhIGRlbGF5IGluIG1pbGxpc2Vjb25kcyBmb3IgbG9hZGluZyBzdGF0ZSAocHJldmVudCBmbHVzaClcbiAgICovXG4gIGxvYWRpbmdEZWxheT86IG51bWJlcjtcbiAgLyoqXG4gICAqIEN1c3RvbSBubyByZXN1bHQgY29udGVudFxuICAgKi9cbiAgbm9SZXN1bHQ/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbn1cbiJdfQ==