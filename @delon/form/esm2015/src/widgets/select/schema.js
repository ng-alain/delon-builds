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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3ZzdHMvd29yay8xL3MvcGFja2FnZXMvZm9ybS8iLCJzb3VyY2VzIjpbInNyYy93aWRnZXRzL3NlbGVjdC9zY2hlbWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFRQSwwQ0F3SkM7Ozs7OztJQXBKQyx5Q0FBaUQ7O0lBRWpELG9DQUFpQjs7Ozs7SUFLakIsMkNBQXFCOzs7OztJQUtyQiwyQ0FBNEM7Ozs7O0lBSzVDLG9EQUErQjs7Ozs7SUFLL0IsMENBQXFCOzs7OztJQUtyQiwwQ0FBcUI7Ozs7O0lBS3JCLHlDQUFvQjs7Ozs7SUFLcEIsaURBQTJCOzs7OztJQUszQix3REFBbUM7Ozs7O0lBS25DLDZDQUFtQjs7Ozs7SUFLbkIsNENBQXVCOzs7OztJQUt2QixnREFBMEI7Ozs7O0lBSzFCLG9DQUF1Qzs7Ozs7SUFLdkMsK0NBQXlCOzs7OztJQUt6QiwwQ0FBcUI7Ozs7O0lBS3JCLHdDQUFxRDs7Ozs7SUFLckQsK0NBQTJCOzs7OztJQUszQiwyQ0FBcUI7Ozs7O0lBS3JCLDhDQUErRDs7Ozs7SUFLL0QsMENBQXVDOzs7OztJQUt2QywwQ0FBOEI7Ozs7O0lBSzlCLHlDQUE2Qjs7Ozs7SUFLN0Isb0RBQXdDOzs7OztJQUt4QyxpREFBc0Q7Ozs7O0lBS3RELDhDQUF3Qjs7Ozs7SUFLeEIsa0RBQTRCOzs7OztJQUs1Qiw4Q0FBd0M7Ozs7O0lBS3hDLHNDQUF3Rjs7Ozs7SUFLeEYsMENBQXVDOzs7OztJQUt2Qyw4Q0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IE56T3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC9zZWxlY3QnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU0ZWYWx1ZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBTRlNjaGVtYUVudW0sIFNGU2NoZW1hRW51bVR5cGUgfSBmcm9tICcuLi8uLi9zY2hlbWEnO1xuaW1wb3J0IHsgU0ZETFNTaXplLCBTRlVJU2NoZW1hSXRlbSB9IGZyb20gJy4uLy4uL3NjaGVtYS91aSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU0ZTZWxlY3RXaWRnZXRTY2hlbWEgZXh0ZW5kcyBTRlVJU2NoZW1hSXRlbSB7XG4gIC8qKlxuICAgKiDlvILmraXmlbDmja7mupBcbiAgICovXG4gIGFzeW5jRGF0YT86ICgpID0+IE9ic2VydmFibGU8U0ZTY2hlbWFFbnVtVHlwZVtdPjtcblxuICBzaXplPzogU0ZETFNTaXplO1xuXG4gIC8qKlxuICAgKiDlnKjmloflrZfmoYbkuK3mmL7npLrmj5DnpLrorq/mga9cbiAgICovXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiDkuI4gW1NlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yXShodHRwczovL2FuZ3VsYXIuaW8vYXBpL2Zvcm1zL1NlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yI2NhdmVhdC1vcHRpb24tc2VsZWN0aW9uKSDnm7jlkIxcbiAgICovXG4gIGNvbXBhcmVXaXRoPzogKG8xOiBhbnksIG8yOiBhbnkpID0+IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOaYr+WQpuWcqOmAieS4remhueWQjua4heepuuaQnOe0ouahhu+8jOWPquWcqCBgbW9kZWAg5Li6IGBtdWx0aXBsZWAg5oiWIGB0YWdzYCDml7bmnInmlYjvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICovXG4gIGF1dG9DbGVhclNlYXJjaFZhbHVlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICog5pSv5oyB5riF6Zmk77yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgYWxsb3dDbGVhcj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOaYr+WQpuaXoOi+ueahhu+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIGJvcmRlcmxlc3M/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDpu5jorqTojrflj5bnhKbngrnvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBhdXRvRm9jdXM/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDkuIvmi4noj5zljZXnmoQgY2xhc3NOYW1lIOWxnuaAp1xuICAgKi9cbiAgZHJvcGRvd25DbGFzc05hbWU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIOS4i+aLieiPnOWNleWSjOmAieaLqeWZqOWQjOWuve+8jOm7mOiupO+8mmB0cnVlYFxuICAgKi9cbiAgZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoPzogYm9vbGVhbjtcblxuICAvKipcbiAgICog5LiL5ouJ6I+c5Y2V55qEIHN0eWxlIOWxnuaAp1xuICAgKi9cbiAgZHJvcGRvd25TdHlsZT86IHt9O1xuXG4gIC8qKlxuICAgKiDmmK/lkKbkvb/nlKjmnI3liqHnq6/mkJzntKLvvIzlvZPkuLogYHRydWVgIOaXtu+8jOWwhuS4jeWGjeWcqOWJjeerr+WvuSBgbnotb3B0aW9uYCDov5vooYzov4fmu6TvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBzZXJ2ZXJTZWFyY2g/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDmnIDlpJrpgInkuK3lpJrlsJHkuKrmoIfnrb7vvIzpu5jorqTvvJpgSW5maW5pdHlgXG4gICAqL1xuICBtYXhNdWx0aXBsZUNvdW50PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiDorr7nva4gYG56LXNlbGVjdGAg55qE5qih5byP77yMYHRhZ3NgIOW7uuiuruWinuWKoCBgZGVmYXVsdDogbnVsbGDvvIzlkKbliJnlj6/og73kvJrpgYfliLDliJ3lp4vljJbmnInkuIDkuKrnqbrnmoTmoIfnrb5cbiAgICovXG4gIG1vZGU/OiAnZGVmYXVsdCcgfCAnbXVsdGlwbGUnIHwgJ3RhZ3MnO1xuXG4gIC8qKlxuICAgKiDlvZPkuIvmi4nliJfooajkuLrnqbrml7bmmL7npLrnmoTlhoXlrrlcbiAgICovXG4gIG5vdEZvdW5kQ29udGVudD86IHN0cmluZztcblxuICAvKipcbiAgICog5L2/5Y2V6YCJ5qih5byP5Y+v5pCc57Si77yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgc2hvd1NlYXJjaD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOaQnOe0ouWGheWuueWPmOWMluWbnuiwg+WHveaVsO+8jOWPguaVsOS4uuaQnOe0ouWGheWuue+8jOW/hemhu+i/lOWbniBgUHJvbWlzZWAg5a+56LGhXG4gICAqL1xuICBvblNlYXJjaD86ICh0ZXh0OiBzdHJpbmcpID0+IFByb21pc2U8U0ZTY2hlbWFFbnVtW10+O1xuXG4gIC8qKlxuICAgKiDlnKggYHRhZ3NgIOWSjCBgbXVsdGlwbGVgIOaooeW8j+S4i+iHquWKqOWIhuivjeeahOWIhumalOesplxuICAgKi9cbiAgdG9rZW5TZXBhcmF0b3JzPzogc3RyaW5nW107XG5cbiAgLyoqXG4gICAqIOacgOWkmuaYvuekuuWkmuWwkeS4qiB0YWdcbiAgICovXG4gIG1heFRhZ0NvdW50PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiDoh6rlrprkuYnpgInmi6nmoYbnmoRUZW1wbGF0ZeWGheWuuVxuICAgKi9cbiAgY3VzdG9tVGVtcGxhdGU/OiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogTnpPcHRpb25Db21wb25lbnQgfT47XG5cbiAgLyoqXG4gICAqIOiHquWumuS5ieeahOmAieaLqeahhuWQjue8gOWbvuagh1xuICAgKi9cbiAgc3VmZml4SWNvbj86IFRlbXBsYXRlUmVmPGFueT4gfCBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIOiHquWumuS5ieeahOWkmumAieahhua4hemZpOWbvuagh1xuICAgKi9cbiAgcmVtb3ZlSWNvbj86IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLyoqXG4gICAqIOiHquWumuS5ieeahOWkmumAieahhua4heepuuWbvuagh1xuICAgKi9cbiAgY2xlYXJJY29uPzogVGVtcGxhdGVSZWY8YW55PjtcblxuICAvKipcbiAgICog6Ieq5a6a5LmJ5b2T5YmN6YCJ5Lit55qE5p2h55uu5Zu+5qCHXG4gICAqL1xuICBtZW51SXRlbVNlbGVjdGVkSWNvbj86IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLyoqXG4gICAqIOmakOiXjyB0YWcg5pe25pi+56S655qE5YaF5a65XG4gICAqL1xuICBtYXhUYWdQbGFjZWhvbGRlcj86IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBhbnlbXSB9PjtcblxuICAvKipcbiAgICog5LiL5ouJ6I+c5Y2V5Lit5q+P5LiqIE9wdGlvbiDnmoTpq5jluqbvvIzpu5jorqTvvJpgMzJgXG4gICAqL1xuICBvcHRpb25IZWlnaHRQeD86IG51bWJlcjtcblxuICAvKipcbiAgICog5LiL5ouJ6I+c5Y2V5Lit5pyA5aSa5bGV56S655qEIE9wdGlvbiDkuKrmlbDvvIzotoXlh7rpg6jliIbmu5rliqjvvIzpu5jorqTvvJpgOGBcbiAgICovXG4gIG9wdGlvbk92ZXJmbG93U2l6ZT86IG51bWJlcjtcblxuICAvKipcbiAgICog6Ieq55Sx5omp5bGVXG4gICAqL1xuICBkcm9wZG93blJlbmRlcj86IFRlbXBsYXRlUmVmPE56U2FmZUFueT47XG5cbiAgLyoqXG4gICAqIOmAieS4reeahCBgbnotb3B0aW9uYCDlj5HnlJ/lj5jljJbml7bvvIzosIPnlKjmraTlh73mlbBcbiAgICovXG4gIGNoYW5nZT86IChuZ01vZGVsOiBTRlZhbHVlIHwgU0ZWYWx1ZVtdLCBvcmdEYXRhOiBTRlNjaGVtYUVudW0gfCBTRlNjaGVtYUVudW1bXSkgPT4gdm9pZDtcblxuICAvKipcbiAgICog5LiL5ouJ6I+c5Y2V5omT5byA5YWz6Zet5Zue6LCD5Ye95pWwXG4gICAqL1xuICBvcGVuQ2hhbmdlPzogKHN0YXR1czogYm9vbGVhbikgPT4gdm9pZDtcblxuICAvKipcbiAgICog5LiL5ouJ6I+c5Y2V5rua5Yqo5Yiw5bqV6YOo5Zue6LCD77yM5Y+v55So5LqO5L2c5Li65Yqo5oCB5Yqg6L2955qE6Kem5Y+R5p2h5Lu2XG4gICAqL1xuICBzY3JvbGxUb0JvdHRvbT86ICgpID0+IHZvaWQ7XG59XG4iXX0=