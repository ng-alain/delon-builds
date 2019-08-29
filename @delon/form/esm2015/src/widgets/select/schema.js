/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function SFSelectWidgetSchema() { }
if (false) {
    /**
     * 异步数据源
     * @type {?|undefined}
     */
    SFSelectWidgetSchema.prototype.asyncData;
    /** @type {?|undefined} */
    SFSelectWidgetSchema.prototype.size;
    /**
     * 在文字框中显示提示讯息
     * @type {?|undefined}
     */
    SFSelectWidgetSchema.prototype.placeholder;
    /**
     * 与 [SelectControlValueAccessor](https://angular.io/api/forms/SelectControlValueAccessor#caveat-option-selection) 相同
     * @type {?|undefined}
     */
    SFSelectWidgetSchema.prototype.compareWith;
    /**
     * 是否在选中项后清空搜索框，只在 `mode` 为 `multiple` 或 `tags` 时有效，默认：`true`
     * @type {?|undefined}
     */
    SFSelectWidgetSchema.prototype.autoClearSearchValue;
    /**
     * 支持清除，默认：`false`
     * @type {?|undefined}
     */
    SFSelectWidgetSchema.prototype.allowClear;
    /**
     * 默认获取焦点，默认：`false`
     * @type {?|undefined}
     */
    SFSelectWidgetSchema.prototype.autoFocus;
    /**
     * 下拉菜单的 className 属性
     * @type {?|undefined}
     */
    SFSelectWidgetSchema.prototype.dropdownClassName;
    /**
     * 下拉菜单和选择器同宽，默认：`true`
     * @type {?|undefined}
     */
    SFSelectWidgetSchema.prototype.dropdownMatchSelectWidth;
    /**
     * 下拉菜单的 style 属性
     * @type {?|undefined}
     */
    SFSelectWidgetSchema.prototype.dropdownStyle;
    /**
     * 是否使用服务端搜索，当为 `true` 时，将不再在前端对 `nz-option` 进行过滤，默认：`false`
     * @type {?|undefined}
     */
    SFSelectWidgetSchema.prototype.serverSearch;
    /**
     * 最多选中多少个标签，默认：`Infinity`
     * @type {?|undefined}
     */
    SFSelectWidgetSchema.prototype.maxMultipleCount;
    /**
     * 设置 `nz-select` 的模式，`tags` 建议增加 `default: null`，否则可能会遇到初始化有一个空的标签
     * @type {?|undefined}
     */
    SFSelectWidgetSchema.prototype.mode;
    /**
     * 当下拉列表为空时显示的内容
     * @type {?|undefined}
     */
    SFSelectWidgetSchema.prototype.notFoundContent;
    /**
     * 使单选模式可搜索，默认：`false`
     * @type {?|undefined}
     */
    SFSelectWidgetSchema.prototype.showSearch;
    /**
     * 搜索内容变化回调函数，参数为搜索内容，必须返回 `Promise` 对象
     * @type {?|undefined}
     */
    SFSelectWidgetSchema.prototype.onSearch;
    /**
     * 在 `tags` 和 `multiple` 模式下自动分词的分隔符
     * @type {?|undefined}
     */
    SFSelectWidgetSchema.prototype.tokenSeparators;
    /**
     * 最多显示多少个 tag
     * @type {?|undefined}
     */
    SFSelectWidgetSchema.prototype.maxTagCount;
    /**
     * 选中的 `nz-option` 发生变化时，调用此函数
     * @type {?|undefined}
     */
    SFSelectWidgetSchema.prototype.change;
    /**
     * 下拉菜单打开关闭回调函数
     * @type {?|undefined}
     */
    SFSelectWidgetSchema.prototype.openChange;
    /**
     * 下拉菜单滚动到底部回调，可用于作为动态加载的触发条件
     * @type {?|undefined}
     */
    SFSelectWidgetSchema.prototype.scrollToBottom;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy9zZWxlY3Qvc2NoZW1hLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFLQSwwQ0FzR0M7Ozs7OztJQWxHQyx5Q0FBaUQ7O0lBRWpELG9DQUFpQjs7Ozs7SUFLakIsMkNBQXFCOzs7OztJQUtyQiwyQ0FBNEM7Ozs7O0lBSzVDLG9EQUErQjs7Ozs7SUFLL0IsMENBQXFCOzs7OztJQUtyQix5Q0FBb0I7Ozs7O0lBS3BCLGlEQUEyQjs7Ozs7SUFLM0Isd0RBQW1DOzs7OztJQUtuQyw2Q0FBbUI7Ozs7O0lBS25CLDRDQUF1Qjs7Ozs7SUFLdkIsZ0RBQTBCOzs7OztJQUsxQixvQ0FBdUM7Ozs7O0lBS3ZDLCtDQUF5Qjs7Ozs7SUFLekIsMENBQXFCOzs7OztJQUtyQix3Q0FBcUQ7Ozs7O0lBS3JELCtDQUEyQjs7Ozs7SUFLM0IsMkNBQXFCOzs7OztJQUtyQixzQ0FBZ0Q7Ozs7O0lBS2hELDBDQUF1Qzs7Ozs7SUFLdkMsOENBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU0ZVSVNjaGVtYUl0ZW0sIFNGRExTU2l6ZSB9IGZyb20gJy4uLy4uL3NjaGVtYS91aSc7XG5pbXBvcnQgeyBTRlNjaGVtYUVudW1UeXBlLCBTRlNjaGVtYUVudW0gfSBmcm9tICcuLi8uLi9zY2hlbWEnO1xuaW1wb3J0IHsgU0ZWYWx1ZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU0ZTZWxlY3RXaWRnZXRTY2hlbWEgZXh0ZW5kcyBTRlVJU2NoZW1hSXRlbSB7XG4gIC8qKlxuICAgKiDlvILmraXmlbDmja7mupBcbiAgICovXG4gIGFzeW5jRGF0YT86ICgpID0+IE9ic2VydmFibGU8U0ZTY2hlbWFFbnVtVHlwZVtdPjtcblxuICBzaXplPzogU0ZETFNTaXplO1xuXG4gIC8qKlxuICAgKiDlnKjmloflrZfmoYbkuK3mmL7npLrmj5DnpLrorq/mga9cbiAgICovXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiDkuI4gW1NlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yXShodHRwczovL2FuZ3VsYXIuaW8vYXBpL2Zvcm1zL1NlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yI2NhdmVhdC1vcHRpb24tc2VsZWN0aW9uKSDnm7jlkIxcbiAgICovXG4gIGNvbXBhcmVXaXRoPzogKG8xOiBhbnksIG8yOiBhbnkpID0+IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOaYr+WQpuWcqOmAieS4remhueWQjua4heepuuaQnOe0ouahhu+8jOWPquWcqCBgbW9kZWAg5Li6IGBtdWx0aXBsZWAg5oiWIGB0YWdzYCDml7bmnInmlYjvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICovXG4gIGF1dG9DbGVhclNlYXJjaFZhbHVlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICog5pSv5oyB5riF6Zmk77yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgYWxsb3dDbGVhcj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOm7mOiupOiOt+WPlueEpueCue+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIGF1dG9Gb2N1cz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOS4i+aLieiPnOWNleeahCBjbGFzc05hbWUg5bGe5oCnXG4gICAqL1xuICBkcm9wZG93bkNsYXNzTmFtZT86IHN0cmluZztcblxuICAvKipcbiAgICog5LiL5ouJ6I+c5Y2V5ZKM6YCJ5oup5Zmo5ZCM5a6977yM6buY6K6k77yaYHRydWVgXG4gICAqL1xuICBkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGg/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDkuIvmi4noj5zljZXnmoQgc3R5bGUg5bGe5oCnXG4gICAqL1xuICBkcm9wZG93blN0eWxlPzoge307XG5cbiAgLyoqXG4gICAqIOaYr+WQpuS9v+eUqOacjeWKoeerr+aQnOe0ou+8jOW9k+S4uiBgdHJ1ZWAg5pe277yM5bCG5LiN5YaN5Zyo5YmN56uv5a+5IGBuei1vcHRpb25gIOi/m+ihjOi/h+a7pO+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIHNlcnZlclNlYXJjaD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOacgOWkmumAieS4reWkmuWwkeS4quagh+etvu+8jOm7mOiupO+8mmBJbmZpbml0eWBcbiAgICovXG4gIG1heE11bHRpcGxlQ291bnQ/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIOiuvue9riBgbnotc2VsZWN0YCDnmoTmqKHlvI/vvIxgdGFnc2Ag5bu66K6u5aKe5YqgIGBkZWZhdWx0OiBudWxsYO+8jOWQpuWImeWPr+iDveS8mumBh+WIsOWIneWni+WMluacieS4gOS4quepuueahOagh+etvlxuICAgKi9cbiAgbW9kZT86ICdkZWZhdWx0JyB8ICdtdWx0aXBsZScgfCAndGFncyc7XG5cbiAgLyoqXG4gICAqIOW9k+S4i+aLieWIl+ihqOS4uuepuuaXtuaYvuekuueahOWGheWuuVxuICAgKi9cbiAgbm90Rm91bmRDb250ZW50Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiDkvb/ljZXpgInmqKHlvI/lj6/mkJzntKLvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBzaG93U2VhcmNoPzogYm9vbGVhbjtcblxuICAvKipcbiAgICog5pCc57Si5YaF5a655Y+Y5YyW5Zue6LCD5Ye95pWw77yM5Y+C5pWw5Li65pCc57Si5YaF5a6577yM5b+F6aG76L+U5ZueIGBQcm9taXNlYCDlr7nosaFcbiAgICovXG4gIG9uU2VhcmNoPzogKHRleHQ6IHN0cmluZykgPT4gUHJvbWlzZTxTRlNjaGVtYUVudW1bXT47XG5cbiAgLyoqXG4gICAqIOWcqCBgdGFnc2Ag5ZKMIGBtdWx0aXBsZWAg5qih5byP5LiL6Ieq5Yqo5YiG6K+N55qE5YiG6ZqU56ymXG4gICAqL1xuICB0b2tlblNlcGFyYXRvcnM/OiBzdHJpbmdbXTtcblxuICAvKipcbiAgICog5pyA5aSa5pi+56S65aSa5bCR5LiqIHRhZ1xuICAgKi9cbiAgbWF4VGFnQ291bnQ/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIOmAieS4reeahCBgbnotb3B0aW9uYCDlj5HnlJ/lj5jljJbml7bvvIzosIPnlKjmraTlh73mlbBcbiAgICovXG4gIGNoYW5nZT86IChuZ01vZGVsOiBTRlZhbHVlIHwgU0ZWYWx1ZVtdKSA9PiB2b2lkO1xuXG4gIC8qKlxuICAgKiDkuIvmi4noj5zljZXmiZPlvIDlhbPpl63lm57osIPlh73mlbBcbiAgICovXG4gIG9wZW5DaGFuZ2U/OiAoc3RhdHVzOiBib29sZWFuKSA9PiB2b2lkO1xuXG4gIC8qKlxuICAgKiDkuIvmi4noj5zljZXmu5rliqjliLDlupXpg6jlm57osIPvvIzlj6/nlKjkuo7kvZzkuLrliqjmgIHliqDovb3nmoTop6blj5HmnaHku7ZcbiAgICovXG4gIHNjcm9sbFRvQm90dG9tPzogKCkgPT4gdm9pZDtcbn1cbiJdfQ==