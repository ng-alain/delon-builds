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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy9zZWxlY3Qvc2NoZW1hLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBUUEsMENBMkpDOzs7Ozs7SUF2SkMseUNBQWlEOztJQUVqRCxvQ0FBaUI7Ozs7O0lBS2pCLDJDQUFxQjs7Ozs7SUFLckIsMkNBQTRDOzs7OztJQUs1QyxvREFBK0I7Ozs7O0lBSy9CLDBDQUFxQjs7Ozs7SUFLckIsMENBQXFCOzs7OztJQUtyQix5Q0FBb0I7Ozs7O0lBS3BCLGlEQUEyQjs7Ozs7SUFLM0Isd0RBQW1DOzs7OztJQUtuQyw2Q0FBbUI7Ozs7O0lBS25CLDRDQUF1Qjs7Ozs7SUFLdkIsZ0RBQTBCOzs7OztJQUsxQixvQ0FBdUM7Ozs7O0lBS3ZDLCtDQUF5Qjs7Ozs7SUFLekIsMENBQXFCOzs7OztJQUtyQix3Q0FBcUQ7Ozs7O0lBR3JELGtEQUE0Qjs7Ozs7SUFLNUIsK0NBQTJCOzs7OztJQUszQiwyQ0FBcUI7Ozs7O0lBS3JCLDhDQUErRDs7Ozs7SUFLL0QsMENBQXVDOzs7OztJQUt2QywwQ0FBOEI7Ozs7O0lBSzlCLHlDQUE2Qjs7Ozs7SUFLN0Isb0RBQXdDOzs7OztJQUt4QyxpREFBc0Q7Ozs7O0lBS3RELDhDQUF3Qjs7Ozs7SUFLeEIsa0RBQTRCOzs7OztJQUs1Qiw4Q0FBd0M7Ozs7O0lBS3hDLHNDQUF3Rjs7Ozs7SUFLeEYsMENBQXVDOzs7OztJQUt2Qyw4Q0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IE56T3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC9zZWxlY3QnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU0ZWYWx1ZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBTRlNjaGVtYUVudW0sIFNGU2NoZW1hRW51bVR5cGUgfSBmcm9tICcuLi8uLi9zY2hlbWEnO1xuaW1wb3J0IHsgU0ZETFNTaXplLCBTRlVJU2NoZW1hSXRlbSB9IGZyb20gJy4uLy4uL3NjaGVtYS91aSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU0ZTZWxlY3RXaWRnZXRTY2hlbWEgZXh0ZW5kcyBTRlVJU2NoZW1hSXRlbSB7XG4gIC8qKlxuICAgKiDlvILmraXmlbDmja7mupBcbiAgICovXG4gIGFzeW5jRGF0YT86ICgpID0+IE9ic2VydmFibGU8U0ZTY2hlbWFFbnVtVHlwZVtdPjtcblxuICBzaXplPzogU0ZETFNTaXplO1xuXG4gIC8qKlxuICAgKiDlnKjmloflrZfmoYbkuK3mmL7npLrmj5DnpLrorq/mga9cbiAgICovXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiDkuI4gW1NlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yXShodHRwczovL2FuZ3VsYXIuaW8vYXBpL2Zvcm1zL1NlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yI2NhdmVhdC1vcHRpb24tc2VsZWN0aW9uKSDnm7jlkIxcbiAgICovXG4gIGNvbXBhcmVXaXRoPzogKG8xOiBhbnksIG8yOiBhbnkpID0+IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOaYr+WQpuWcqOmAieS4remhueWQjua4heepuuaQnOe0ouahhu+8jOWPquWcqCBgbW9kZWAg5Li6IGBtdWx0aXBsZWAg5oiWIGB0YWdzYCDml7bmnInmlYjvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICovXG4gIGF1dG9DbGVhclNlYXJjaFZhbHVlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICog5pSv5oyB5riF6Zmk77yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgYWxsb3dDbGVhcj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOaYr+WQpuaXoOi+ueahhu+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIGJvcmRlcmxlc3M/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDpu5jorqTojrflj5bnhKbngrnvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBhdXRvRm9jdXM/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDkuIvmi4noj5zljZXnmoQgY2xhc3NOYW1lIOWxnuaAp1xuICAgKi9cbiAgZHJvcGRvd25DbGFzc05hbWU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIOS4i+aLieiPnOWNleWSjOmAieaLqeWZqOWQjOWuve+8jOm7mOiupO+8mmB0cnVlYFxuICAgKi9cbiAgZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoPzogYm9vbGVhbjtcblxuICAvKipcbiAgICog5LiL5ouJ6I+c5Y2V55qEIHN0eWxlIOWxnuaAp1xuICAgKi9cbiAgZHJvcGRvd25TdHlsZT86IHt9O1xuXG4gIC8qKlxuICAgKiDmmK/lkKbkvb/nlKjmnI3liqHnq6/mkJzntKLvvIzlvZPkuLogYHRydWVgIOaXtu+8jOWwhuS4jeWGjeWcqOWJjeerr+WvuSBgbnotb3B0aW9uYCDov5vooYzov4fmu6TvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBzZXJ2ZXJTZWFyY2g/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDmnIDlpJrpgInkuK3lpJrlsJHkuKrmoIfnrb7vvIzpu5jorqTvvJpgSW5maW5pdHlgXG4gICAqL1xuICBtYXhNdWx0aXBsZUNvdW50PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiDorr7nva4gYG56LXNlbGVjdGAg55qE5qih5byP77yMYHRhZ3NgIOW7uuiuruWinuWKoCBgZGVmYXVsdDogbnVsbGDvvIzlkKbliJnlj6/og73kvJrpgYfliLDliJ3lp4vljJbmnInkuIDkuKrnqbrnmoTmoIfnrb5cbiAgICovXG4gIG1vZGU/OiAnZGVmYXVsdCcgfCAnbXVsdGlwbGUnIHwgJ3RhZ3MnO1xuXG4gIC8qKlxuICAgKiDlvZPkuIvmi4nliJfooajkuLrnqbrml7bmmL7npLrnmoTlhoXlrrlcbiAgICovXG4gIG5vdEZvdW5kQ29udGVudD86IHN0cmluZztcblxuICAvKipcbiAgICog5L2/5Y2V6YCJ5qih5byP5Y+v5pCc57Si77yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgc2hvd1NlYXJjaD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOaQnOe0ouWGheWuueWPmOWMluWbnuiwg+WHveaVsO+8jOWPguaVsOS4uuaQnOe0ouWGheWuue+8jOW/hemhu+i/lOWbniBgUHJvbWlzZWAg5a+56LGhXG4gICAqL1xuICBvblNlYXJjaD86ICh0ZXh0OiBzdHJpbmcpID0+IFByb21pc2U8U0ZTY2hlbWFFbnVtW10+O1xuXG4gIC8qKiDmkJzntKLmipbliqjml7bpl7TvvIzpu5jorqTvvJpgMzAwYCAqL1xuICBzZWFyY2hEZWJvdW5jZVRpbWU/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIOWcqCBgdGFnc2Ag5ZKMIGBtdWx0aXBsZWAg5qih5byP5LiL6Ieq5Yqo5YiG6K+N55qE5YiG6ZqU56ymXG4gICAqL1xuICB0b2tlblNlcGFyYXRvcnM/OiBzdHJpbmdbXTtcblxuICAvKipcbiAgICog5pyA5aSa5pi+56S65aSa5bCR5LiqIHRhZ1xuICAgKi9cbiAgbWF4VGFnQ291bnQ/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIOiHquWumuS5iemAieaLqeahhueahFRlbXBsYXRl5YaF5a65XG4gICAqL1xuICBjdXN0b21UZW1wbGF0ZT86IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBOek9wdGlvbkNvbXBvbmVudCB9PjtcblxuICAvKipcbiAgICog6Ieq5a6a5LmJ55qE6YCJ5oup5qGG5ZCO57yA5Zu+5qCHXG4gICAqL1xuICBzdWZmaXhJY29uPzogVGVtcGxhdGVSZWY8YW55PiB8IHN0cmluZztcblxuICAvKipcbiAgICog6Ieq5a6a5LmJ55qE5aSa6YCJ5qGG5riF6Zmk5Zu+5qCHXG4gICAqL1xuICByZW1vdmVJY29uPzogVGVtcGxhdGVSZWY8YW55PjtcblxuICAvKipcbiAgICog6Ieq5a6a5LmJ55qE5aSa6YCJ5qGG5riF56m65Zu+5qCHXG4gICAqL1xuICBjbGVhckljb24/OiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8qKlxuICAgKiDoh6rlrprkuYnlvZPliY3pgInkuK3nmoTmnaHnm67lm77moIdcbiAgICovXG4gIG1lbnVJdGVtU2VsZWN0ZWRJY29uPzogVGVtcGxhdGVSZWY8YW55PjtcblxuICAvKipcbiAgICog6ZqQ6JePIHRhZyDml7bmmL7npLrnmoTlhoXlrrlcbiAgICovXG4gIG1heFRhZ1BsYWNlaG9sZGVyPzogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IGFueVtdIH0+O1xuXG4gIC8qKlxuICAgKiDkuIvmi4noj5zljZXkuK3mr4/kuKogT3B0aW9uIOeahOmrmOW6pu+8jOm7mOiupO+8mmAzMmBcbiAgICovXG4gIG9wdGlvbkhlaWdodFB4PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiDkuIvmi4noj5zljZXkuK3mnIDlpJrlsZXnpLrnmoQgT3B0aW9uIOS4quaVsO+8jOi2heWHuumDqOWIhua7muWKqO+8jOm7mOiupO+8mmA4YFxuICAgKi9cbiAgb3B0aW9uT3ZlcmZsb3dTaXplPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiDoh6rnlLHmianlsZVcbiAgICovXG4gIGRyb3Bkb3duUmVuZGVyPzogVGVtcGxhdGVSZWY8TnpTYWZlQW55PjtcblxuICAvKipcbiAgICog6YCJ5Lit55qEIGBuei1vcHRpb25gIOWPkeeUn+WPmOWMluaXtu+8jOiwg+eUqOatpOWHveaVsFxuICAgKi9cbiAgY2hhbmdlPzogKG5nTW9kZWw6IFNGVmFsdWUgfCBTRlZhbHVlW10sIG9yZ0RhdGE6IFNGU2NoZW1hRW51bSB8IFNGU2NoZW1hRW51bVtdKSA9PiB2b2lkO1xuXG4gIC8qKlxuICAgKiDkuIvmi4noj5zljZXmiZPlvIDlhbPpl63lm57osIPlh73mlbBcbiAgICovXG4gIG9wZW5DaGFuZ2U/OiAoc3RhdHVzOiBib29sZWFuKSA9PiB2b2lkO1xuXG4gIC8qKlxuICAgKiDkuIvmi4noj5zljZXmu5rliqjliLDlupXpg6jlm57osIPvvIzlj6/nlKjkuo7kvZzkuLrliqjmgIHliqDovb3nmoTop6blj5HmnaHku7ZcbiAgICovXG4gIHNjcm9sbFRvQm90dG9tPzogKCkgPT4gdm9pZDtcbn1cbiJdfQ==