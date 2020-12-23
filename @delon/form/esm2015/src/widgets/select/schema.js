/**
 * @fileoverview added by tsickle
 * Generated from: src/widgets/select/schema.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * 是否无边框，默认：`false`
     * @type {?|undefined}
     */
    SFSelectWidgetSchema.prototype.borderless;
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
     * 搜索抖动时间，默认：`300`
     * @type {?|undefined}
     */
    SFSelectWidgetSchema.prototype.searchDebounceTime;
    /**
     * 搜索加载中文本
     * @type {?|undefined}
     */
    SFSelectWidgetSchema.prototype.searchLoadingText;
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
     * 自定义选择框的Template内容
     * @type {?|undefined}
     */
    SFSelectWidgetSchema.prototype.customTemplate;
    /**
     * 自定义的选择框后缀图标
     * @type {?|undefined}
     */
    SFSelectWidgetSchema.prototype.suffixIcon;
    /**
     * 自定义的多选框清除图标
     * @type {?|undefined}
     */
    SFSelectWidgetSchema.prototype.removeIcon;
    /**
     * 自定义的多选框清空图标
     * @type {?|undefined}
     */
    SFSelectWidgetSchema.prototype.clearIcon;
    /**
     * 自定义当前选中的条目图标
     * @type {?|undefined}
     */
    SFSelectWidgetSchema.prototype.menuItemSelectedIcon;
    /**
     * 隐藏 tag 时显示的内容
     * @type {?|undefined}
     */
    SFSelectWidgetSchema.prototype.maxTagPlaceholder;
    /**
     * 下拉菜单中每个 Option 的高度，默认：`32`
     * @type {?|undefined}
     */
    SFSelectWidgetSchema.prototype.optionHeightPx;
    /**
     * 下拉菜单中最多展示的 Option 个数，超出部分滚动，默认：`8`
     * @type {?|undefined}
     */
    SFSelectWidgetSchema.prototype.optionOverflowSize;
    /**
     * 自由扩展
     * @type {?|undefined}
     */
    SFSelectWidgetSchema.prototype.dropdownRender;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy9zZWxlY3Qvc2NoZW1hLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBUUEsMENBOEpDOzs7Ozs7SUExSkMseUNBQWlEOztJQUVqRCxvQ0FBaUI7Ozs7O0lBS2pCLDJDQUFxQjs7Ozs7SUFLckIsMkNBQTRDOzs7OztJQUs1QyxvREFBK0I7Ozs7O0lBSy9CLDBDQUFxQjs7Ozs7SUFLckIsMENBQXFCOzs7OztJQUtyQix5Q0FBb0I7Ozs7O0lBS3BCLGlEQUEyQjs7Ozs7SUFLM0Isd0RBQW1DOzs7OztJQUtuQyw2Q0FBbUI7Ozs7O0lBS25CLDRDQUF1Qjs7Ozs7SUFLdkIsZ0RBQTBCOzs7OztJQUsxQixvQ0FBdUM7Ozs7O0lBS3ZDLCtDQUF5Qjs7Ozs7SUFLekIsMENBQXFCOzs7OztJQUtyQix3Q0FBcUQ7Ozs7O0lBR3JELGtEQUE0Qjs7Ozs7SUFHNUIsaURBQTJCOzs7OztJQUszQiwrQ0FBMkI7Ozs7O0lBSzNCLDJDQUFxQjs7Ozs7SUFLckIsOENBQStEOzs7OztJQUsvRCwwQ0FBdUM7Ozs7O0lBS3ZDLDBDQUE4Qjs7Ozs7SUFLOUIseUNBQTZCOzs7OztJQUs3QixvREFBd0M7Ozs7O0lBS3hDLGlEQUFzRDs7Ozs7SUFLdEQsOENBQXdCOzs7OztJQUt4QixrREFBNEI7Ozs7O0lBSzVCLDhDQUF3Qzs7Ozs7SUFLeEMsc0NBQXdGOzs7OztJQUt4RiwwQ0FBdUM7Ozs7O0lBS3ZDLDhDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgTnpPcHRpb25Db21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL3NlbGVjdCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTRlZhbHVlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IFNGU2NoZW1hRW51bSwgU0ZTY2hlbWFFbnVtVHlwZSB9IGZyb20gJy4uLy4uL3NjaGVtYSc7XG5pbXBvcnQgeyBTRkRMU1NpemUsIFNGVUlTY2hlbWFJdGVtIH0gZnJvbSAnLi4vLi4vc2NoZW1hL3VpJztcblxuZXhwb3J0IGludGVyZmFjZSBTRlNlbGVjdFdpZGdldFNjaGVtYSBleHRlbmRzIFNGVUlTY2hlbWFJdGVtIHtcbiAgLyoqXG4gICAqIOW8guatpeaVsOaNrua6kFxuICAgKi9cbiAgYXN5bmNEYXRhPzogKCkgPT4gT2JzZXJ2YWJsZTxTRlNjaGVtYUVudW1UeXBlW10+O1xuXG4gIHNpemU/OiBTRkRMU1NpemU7XG5cbiAgLyoqXG4gICAqIOWcqOaWh+Wtl+ahhuS4reaYvuekuuaPkOekuuiur+aBr1xuICAgKi9cbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIOS4jiBbU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3JdKGh0dHBzOi8vYW5ndWxhci5pby9hcGkvZm9ybXMvU2VsZWN0Q29udHJvbFZhbHVlQWNjZXNzb3IjY2F2ZWF0LW9wdGlvbi1zZWxlY3Rpb24pIOebuOWQjFxuICAgKi9cbiAgY29tcGFyZVdpdGg/OiAobzE6IGFueSwgbzI6IGFueSkgPT4gYm9vbGVhbjtcblxuICAvKipcbiAgICog5piv5ZCm5Zyo6YCJ5Lit6aG55ZCO5riF56m65pCc57Si5qGG77yM5Y+q5ZyoIGBtb2RlYCDkuLogYG11bHRpcGxlYCDmiJYgYHRhZ3NgIOaXtuacieaViO+8jOm7mOiupO+8mmB0cnVlYFxuICAgKi9cbiAgYXV0b0NsZWFyU2VhcmNoVmFsdWU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDmlK/mjIHmuIXpmaTvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBhbGxvd0NsZWFyPzogYm9vbGVhbjtcblxuICAvKipcbiAgICog5piv5ZCm5peg6L655qGG77yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgYm9yZGVybGVzcz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOm7mOiupOiOt+WPlueEpueCue+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIGF1dG9Gb2N1cz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOS4i+aLieiPnOWNleeahCBjbGFzc05hbWUg5bGe5oCnXG4gICAqL1xuICBkcm9wZG93bkNsYXNzTmFtZT86IHN0cmluZztcblxuICAvKipcbiAgICog5LiL5ouJ6I+c5Y2V5ZKM6YCJ5oup5Zmo5ZCM5a6977yM6buY6K6k77yaYHRydWVgXG4gICAqL1xuICBkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGg/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDkuIvmi4noj5zljZXnmoQgc3R5bGUg5bGe5oCnXG4gICAqL1xuICBkcm9wZG93blN0eWxlPzoge307XG5cbiAgLyoqXG4gICAqIOaYr+WQpuS9v+eUqOacjeWKoeerr+aQnOe0ou+8jOW9k+S4uiBgdHJ1ZWAg5pe277yM5bCG5LiN5YaN5Zyo5YmN56uv5a+5IGBuei1vcHRpb25gIOi/m+ihjOi/h+a7pO+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIHNlcnZlclNlYXJjaD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOacgOWkmumAieS4reWkmuWwkeS4quagh+etvu+8jOm7mOiupO+8mmBJbmZpbml0eWBcbiAgICovXG4gIG1heE11bHRpcGxlQ291bnQ/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIOiuvue9riBgbnotc2VsZWN0YCDnmoTmqKHlvI/vvIxgdGFnc2Ag5bu66K6u5aKe5YqgIGBkZWZhdWx0OiBudWxsYO+8jOWQpuWImeWPr+iDveS8mumBh+WIsOWIneWni+WMluacieS4gOS4quepuueahOagh+etvlxuICAgKi9cbiAgbW9kZT86ICdkZWZhdWx0JyB8ICdtdWx0aXBsZScgfCAndGFncyc7XG5cbiAgLyoqXG4gICAqIOW9k+S4i+aLieWIl+ihqOS4uuepuuaXtuaYvuekuueahOWGheWuuVxuICAgKi9cbiAgbm90Rm91bmRDb250ZW50Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiDkvb/ljZXpgInmqKHlvI/lj6/mkJzntKLvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBzaG93U2VhcmNoPzogYm9vbGVhbjtcblxuICAvKipcbiAgICog5pCc57Si5YaF5a655Y+Y5YyW5Zue6LCD5Ye95pWw77yM5Y+C5pWw5Li65pCc57Si5YaF5a6577yM5b+F6aG76L+U5ZueIGBQcm9taXNlYCDlr7nosaFcbiAgICovXG4gIG9uU2VhcmNoPzogKHRleHQ6IHN0cmluZykgPT4gUHJvbWlzZTxTRlNjaGVtYUVudW1bXT47XG5cbiAgLyoqIOaQnOe0ouaKluWKqOaXtumXtO+8jOm7mOiupO+8mmAzMDBgICovXG4gIHNlYXJjaERlYm91bmNlVGltZT86IG51bWJlcjtcblxuICAvKiog5pCc57Si5Yqg6L295Lit5paH5pysICovXG4gIHNlYXJjaExvYWRpbmdUZXh0Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiDlnKggYHRhZ3NgIOWSjCBgbXVsdGlwbGVgIOaooeW8j+S4i+iHquWKqOWIhuivjeeahOWIhumalOesplxuICAgKi9cbiAgdG9rZW5TZXBhcmF0b3JzPzogc3RyaW5nW107XG5cbiAgLyoqXG4gICAqIOacgOWkmuaYvuekuuWkmuWwkeS4qiB0YWdcbiAgICovXG4gIG1heFRhZ0NvdW50PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiDoh6rlrprkuYnpgInmi6nmoYbnmoRUZW1wbGF0ZeWGheWuuVxuICAgKi9cbiAgY3VzdG9tVGVtcGxhdGU/OiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogTnpPcHRpb25Db21wb25lbnQgfT47XG5cbiAgLyoqXG4gICAqIOiHquWumuS5ieeahOmAieaLqeahhuWQjue8gOWbvuagh1xuICAgKi9cbiAgc3VmZml4SWNvbj86IFRlbXBsYXRlUmVmPGFueT4gfCBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIOiHquWumuS5ieeahOWkmumAieahhua4hemZpOWbvuagh1xuICAgKi9cbiAgcmVtb3ZlSWNvbj86IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLyoqXG4gICAqIOiHquWumuS5ieeahOWkmumAieahhua4heepuuWbvuagh1xuICAgKi9cbiAgY2xlYXJJY29uPzogVGVtcGxhdGVSZWY8YW55PjtcblxuICAvKipcbiAgICog6Ieq5a6a5LmJ5b2T5YmN6YCJ5Lit55qE5p2h55uu5Zu+5qCHXG4gICAqL1xuICBtZW51SXRlbVNlbGVjdGVkSWNvbj86IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLyoqXG4gICAqIOmakOiXjyB0YWcg5pe25pi+56S655qE5YaF5a65XG4gICAqL1xuICBtYXhUYWdQbGFjZWhvbGRlcj86IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBhbnlbXSB9PjtcblxuICAvKipcbiAgICog5LiL5ouJ6I+c5Y2V5Lit5q+P5LiqIE9wdGlvbiDnmoTpq5jluqbvvIzpu5jorqTvvJpgMzJgXG4gICAqL1xuICBvcHRpb25IZWlnaHRQeD86IG51bWJlcjtcblxuICAvKipcbiAgICog5LiL5ouJ6I+c5Y2V5Lit5pyA5aSa5bGV56S655qEIE9wdGlvbiDkuKrmlbDvvIzotoXlh7rpg6jliIbmu5rliqjvvIzpu5jorqTvvJpgOGBcbiAgICovXG4gIG9wdGlvbk92ZXJmbG93U2l6ZT86IG51bWJlcjtcblxuICAvKipcbiAgICog6Ieq55Sx5omp5bGVXG4gICAqL1xuICBkcm9wZG93blJlbmRlcj86IFRlbXBsYXRlUmVmPE56U2FmZUFueT47XG5cbiAgLyoqXG4gICAqIOmAieS4reeahCBgbnotb3B0aW9uYCDlj5HnlJ/lj5jljJbml7bvvIzosIPnlKjmraTlh73mlbBcbiAgICovXG4gIGNoYW5nZT86IChuZ01vZGVsOiBTRlZhbHVlIHwgU0ZWYWx1ZVtdLCBvcmdEYXRhOiBTRlNjaGVtYUVudW0gfCBTRlNjaGVtYUVudW1bXSkgPT4gdm9pZDtcblxuICAvKipcbiAgICog5LiL5ouJ6I+c5Y2V5omT5byA5YWz6Zet5Zue6LCD5Ye95pWwXG4gICAqL1xuICBvcGVuQ2hhbmdlPzogKHN0YXR1czogYm9vbGVhbikgPT4gdm9pZDtcblxuICAvKipcbiAgICog5LiL5ouJ6I+c5Y2V5rua5Yqo5Yiw5bqV6YOo5Zue6LCD77yM5Y+v55So5LqO5L2c5Li65Yqo5oCB5Yqg6L2955qE6Kem5Y+R5p2h5Lu2XG4gICAqL1xuICBzY3JvbGxUb0JvdHRvbT86ICgpID0+IHZvaWQ7XG59XG4iXX0=