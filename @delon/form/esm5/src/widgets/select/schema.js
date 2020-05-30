/**
 * @fileoverview added by tsickle
 * Generated from: src/widgets/select/schema.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy9zZWxlY3Qvc2NoZW1hLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBS0EsMENBMkdDOzs7Ozs7SUF2R0MseUNBQWlEOztJQUVqRCxvQ0FBaUI7Ozs7O0lBS2pCLDJDQUFxQjs7Ozs7SUFLckIsMkNBQTRDOzs7OztJQUs1QyxvREFBK0I7Ozs7O0lBSy9CLDBDQUFxQjs7Ozs7SUFLckIsMENBQXFCOzs7OztJQUtyQix5Q0FBb0I7Ozs7O0lBS3BCLGlEQUEyQjs7Ozs7SUFLM0Isd0RBQW1DOzs7OztJQUtuQyw2Q0FBbUI7Ozs7O0lBS25CLDRDQUF1Qjs7Ozs7SUFLdkIsZ0RBQTBCOzs7OztJQUsxQixvQ0FBdUM7Ozs7O0lBS3ZDLCtDQUF5Qjs7Ozs7SUFLekIsMENBQXFCOzs7OztJQUtyQix3Q0FBcUQ7Ozs7O0lBS3JELCtDQUEyQjs7Ozs7SUFLM0IsMkNBQXFCOzs7OztJQUtyQixzQ0FBZ0Q7Ozs7O0lBS2hELDBDQUF1Qzs7Ozs7SUFLdkMsOENBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU0ZWYWx1ZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBTRlNjaGVtYUVudW0sIFNGU2NoZW1hRW51bVR5cGUgfSBmcm9tICcuLi8uLi9zY2hlbWEnO1xuaW1wb3J0IHsgU0ZETFNTaXplLCBTRlVJU2NoZW1hSXRlbSB9IGZyb20gJy4uLy4uL3NjaGVtYS91aSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU0ZTZWxlY3RXaWRnZXRTY2hlbWEgZXh0ZW5kcyBTRlVJU2NoZW1hSXRlbSB7XG4gIC8qKlxuICAgKiDlvILmraXmlbDmja7mupBcbiAgICovXG4gIGFzeW5jRGF0YT86ICgpID0+IE9ic2VydmFibGU8U0ZTY2hlbWFFbnVtVHlwZVtdPjtcblxuICBzaXplPzogU0ZETFNTaXplO1xuXG4gIC8qKlxuICAgKiDlnKjmloflrZfmoYbkuK3mmL7npLrmj5DnpLrorq/mga9cbiAgICovXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiDkuI4gW1NlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yXShodHRwczovL2FuZ3VsYXIuaW8vYXBpL2Zvcm1zL1NlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yI2NhdmVhdC1vcHRpb24tc2VsZWN0aW9uKSDnm7jlkIxcbiAgICovXG4gIGNvbXBhcmVXaXRoPzogKG8xOiBhbnksIG8yOiBhbnkpID0+IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOaYr+WQpuWcqOmAieS4remhueWQjua4heepuuaQnOe0ouahhu+8jOWPquWcqCBgbW9kZWAg5Li6IGBtdWx0aXBsZWAg5oiWIGB0YWdzYCDml7bmnInmlYjvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICovXG4gIGF1dG9DbGVhclNlYXJjaFZhbHVlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICog5pSv5oyB5riF6Zmk77yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgYWxsb3dDbGVhcj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOaYr+WQpuaXoOi+ueahhu+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIGJvcmRlcmxlc3M/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDpu5jorqTojrflj5bnhKbngrnvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBhdXRvRm9jdXM/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDkuIvmi4noj5zljZXnmoQgY2xhc3NOYW1lIOWxnuaAp1xuICAgKi9cbiAgZHJvcGRvd25DbGFzc05hbWU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIOS4i+aLieiPnOWNleWSjOmAieaLqeWZqOWQjOWuve+8jOm7mOiupO+8mmB0cnVlYFxuICAgKi9cbiAgZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoPzogYm9vbGVhbjtcblxuICAvKipcbiAgICog5LiL5ouJ6I+c5Y2V55qEIHN0eWxlIOWxnuaAp1xuICAgKi9cbiAgZHJvcGRvd25TdHlsZT86IHt9O1xuXG4gIC8qKlxuICAgKiDmmK/lkKbkvb/nlKjmnI3liqHnq6/mkJzntKLvvIzlvZPkuLogYHRydWVgIOaXtu+8jOWwhuS4jeWGjeWcqOWJjeerr+WvuSBgbnotb3B0aW9uYCDov5vooYzov4fmu6TvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBzZXJ2ZXJTZWFyY2g/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDmnIDlpJrpgInkuK3lpJrlsJHkuKrmoIfnrb7vvIzpu5jorqTvvJpgSW5maW5pdHlgXG4gICAqL1xuICBtYXhNdWx0aXBsZUNvdW50PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiDorr7nva4gYG56LXNlbGVjdGAg55qE5qih5byP77yMYHRhZ3NgIOW7uuiuruWinuWKoCBgZGVmYXVsdDogbnVsbGDvvIzlkKbliJnlj6/og73kvJrpgYfliLDliJ3lp4vljJbmnInkuIDkuKrnqbrnmoTmoIfnrb5cbiAgICovXG4gIG1vZGU/OiAnZGVmYXVsdCcgfCAnbXVsdGlwbGUnIHwgJ3RhZ3MnO1xuXG4gIC8qKlxuICAgKiDlvZPkuIvmi4nliJfooajkuLrnqbrml7bmmL7npLrnmoTlhoXlrrlcbiAgICovXG4gIG5vdEZvdW5kQ29udGVudD86IHN0cmluZztcblxuICAvKipcbiAgICog5L2/5Y2V6YCJ5qih5byP5Y+v5pCc57Si77yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgc2hvd1NlYXJjaD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOaQnOe0ouWGheWuueWPmOWMluWbnuiwg+WHveaVsO+8jOWPguaVsOS4uuaQnOe0ouWGheWuue+8jOW/hemhu+i/lOWbniBgUHJvbWlzZWAg5a+56LGhXG4gICAqL1xuICBvblNlYXJjaD86ICh0ZXh0OiBzdHJpbmcpID0+IFByb21pc2U8U0ZTY2hlbWFFbnVtW10+O1xuXG4gIC8qKlxuICAgKiDlnKggYHRhZ3NgIOWSjCBgbXVsdGlwbGVgIOaooeW8j+S4i+iHquWKqOWIhuivjeeahOWIhumalOesplxuICAgKi9cbiAgdG9rZW5TZXBhcmF0b3JzPzogc3RyaW5nW107XG5cbiAgLyoqXG4gICAqIOacgOWkmuaYvuekuuWkmuWwkeS4qiB0YWdcbiAgICovXG4gIG1heFRhZ0NvdW50PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiDpgInkuK3nmoQgYG56LW9wdGlvbmAg5Y+R55Sf5Y+Y5YyW5pe277yM6LCD55So5q2k5Ye95pWwXG4gICAqL1xuICBjaGFuZ2U/OiAobmdNb2RlbDogU0ZWYWx1ZSB8IFNGVmFsdWVbXSkgPT4gdm9pZDtcblxuICAvKipcbiAgICog5LiL5ouJ6I+c5Y2V5omT5byA5YWz6Zet5Zue6LCD5Ye95pWwXG4gICAqL1xuICBvcGVuQ2hhbmdlPzogKHN0YXR1czogYm9vbGVhbikgPT4gdm9pZDtcblxuICAvKipcbiAgICog5LiL5ouJ6I+c5Y2V5rua5Yqo5Yiw5bqV6YOo5Zue6LCD77yM5Y+v55So5LqO5L2c5Li65Yqo5oCB5Yqg6L2955qE6Kem5Y+R5p2h5Lu2XG4gICAqL1xuICBzY3JvbGxUb0JvdHRvbT86ICgpID0+IHZvaWQ7XG59XG4iXX0=