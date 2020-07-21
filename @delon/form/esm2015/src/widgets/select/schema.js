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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS9zcmMvd2lkZ2V0cy9zZWxlY3Qvc2NoZW1hLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBUUEsMENBd0pDOzs7Ozs7SUFwSkMseUNBQWlEOztJQUVqRCxvQ0FBaUI7Ozs7O0lBS2pCLDJDQUFxQjs7Ozs7SUFLckIsMkNBQTRDOzs7OztJQUs1QyxvREFBK0I7Ozs7O0lBSy9CLDBDQUFxQjs7Ozs7SUFLckIsMENBQXFCOzs7OztJQUtyQix5Q0FBb0I7Ozs7O0lBS3BCLGlEQUEyQjs7Ozs7SUFLM0Isd0RBQW1DOzs7OztJQUtuQyw2Q0FBbUI7Ozs7O0lBS25CLDRDQUF1Qjs7Ozs7SUFLdkIsZ0RBQTBCOzs7OztJQUsxQixvQ0FBdUM7Ozs7O0lBS3ZDLCtDQUF5Qjs7Ozs7SUFLekIsMENBQXFCOzs7OztJQUtyQix3Q0FBcUQ7Ozs7O0lBS3JELCtDQUEyQjs7Ozs7SUFLM0IsMkNBQXFCOzs7OztJQUtyQiw4Q0FBK0Q7Ozs7O0lBSy9ELDBDQUF1Qzs7Ozs7SUFLdkMsMENBQThCOzs7OztJQUs5Qix5Q0FBNkI7Ozs7O0lBSzdCLG9EQUF3Qzs7Ozs7SUFLeEMsaURBQXNEOzs7OztJQUt0RCw4Q0FBd0I7Ozs7O0lBS3hCLGtEQUE0Qjs7Ozs7SUFLNUIsOENBQXdDOzs7OztJQUt4QyxzQ0FBd0Y7Ozs7O0lBS3hGLDBDQUF1Qzs7Ozs7SUFLdkMsOENBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBOek9wdGlvbkNvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvc2VsZWN0JztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFNGVmFsdWUgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgU0ZTY2hlbWFFbnVtLCBTRlNjaGVtYUVudW1UeXBlIH0gZnJvbSAnLi4vLi4vc2NoZW1hJztcbmltcG9ydCB7IFNGRExTU2l6ZSwgU0ZVSVNjaGVtYUl0ZW0gfSBmcm9tICcuLi8uLi9zY2hlbWEvdWknO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNGU2VsZWN0V2lkZ2V0U2NoZW1hIGV4dGVuZHMgU0ZVSVNjaGVtYUl0ZW0ge1xuICAvKipcbiAgICog5byC5q2l5pWw5o2u5rqQXG4gICAqL1xuICBhc3luY0RhdGE/OiAoKSA9PiBPYnNlcnZhYmxlPFNGU2NoZW1hRW51bVR5cGVbXT47XG5cbiAgc2l6ZT86IFNGRExTU2l6ZTtcblxuICAvKipcbiAgICog5Zyo5paH5a2X5qGG5Lit5pi+56S65o+Q56S66K6v5oGvXG4gICAqL1xuICBwbGFjZWhvbGRlcj86IHN0cmluZztcblxuICAvKipcbiAgICog5LiOIFtTZWxlY3RDb250cm9sVmFsdWVBY2Nlc3Nvcl0oaHR0cHM6Ly9hbmd1bGFyLmlvL2FwaS9mb3Jtcy9TZWxlY3RDb250cm9sVmFsdWVBY2Nlc3NvciNjYXZlYXQtb3B0aW9uLXNlbGVjdGlvbikg55u45ZCMXG4gICAqL1xuICBjb21wYXJlV2l0aD86IChvMTogYW55LCBvMjogYW55KSA9PiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDmmK/lkKblnKjpgInkuK3pobnlkI7muIXnqbrmkJzntKLmoYbvvIzlj6rlnKggYG1vZGVgIOS4uiBgbXVsdGlwbGVgIOaIliBgdGFnc2Ag5pe25pyJ5pWI77yM6buY6K6k77yaYHRydWVgXG4gICAqL1xuICBhdXRvQ2xlYXJTZWFyY2hWYWx1ZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOaUr+aMgea4hemZpO+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIGFsbG93Q2xlYXI/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDmmK/lkKbml6DovrnmoYbvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBib3JkZXJsZXNzPzogYm9vbGVhbjtcblxuICAvKipcbiAgICog6buY6K6k6I635Y+W54Sm54K577yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgYXV0b0ZvY3VzPzogYm9vbGVhbjtcblxuICAvKipcbiAgICog5LiL5ouJ6I+c5Y2V55qEIGNsYXNzTmFtZSDlsZ7mgKdcbiAgICovXG4gIGRyb3Bkb3duQ2xhc3NOYW1lPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiDkuIvmi4noj5zljZXlkozpgInmi6nlmajlkIzlrr3vvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICovXG4gIGRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOS4i+aLieiPnOWNleeahCBzdHlsZSDlsZ7mgKdcbiAgICovXG4gIGRyb3Bkb3duU3R5bGU/OiB7fTtcblxuICAvKipcbiAgICog5piv5ZCm5L2/55So5pyN5Yqh56uv5pCc57Si77yM5b2T5Li6IGB0cnVlYCDml7bvvIzlsIbkuI3lho3lnKjliY3nq6/lr7kgYG56LW9wdGlvbmAg6L+b6KGM6L+H5ruk77yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgc2VydmVyU2VhcmNoPzogYm9vbGVhbjtcblxuICAvKipcbiAgICog5pyA5aSa6YCJ5Lit5aSa5bCR5Liq5qCH562+77yM6buY6K6k77yaYEluZmluaXR5YFxuICAgKi9cbiAgbWF4TXVsdGlwbGVDb3VudD86IG51bWJlcjtcblxuICAvKipcbiAgICog6K6+572uIGBuei1zZWxlY3RgIOeahOaooeW8j++8jGB0YWdzYCDlu7rorq7lop7liqAgYGRlZmF1bHQ6IG51bGxg77yM5ZCm5YiZ5Y+v6IO95Lya6YGH5Yiw5Yid5aeL5YyW5pyJ5LiA5Liq56m655qE5qCH562+XG4gICAqL1xuICBtb2RlPzogJ2RlZmF1bHQnIHwgJ211bHRpcGxlJyB8ICd0YWdzJztcblxuICAvKipcbiAgICog5b2T5LiL5ouJ5YiX6KGo5Li656m65pe25pi+56S655qE5YaF5a65XG4gICAqL1xuICBub3RGb3VuZENvbnRlbnQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIOS9v+WNlemAieaooeW8j+WPr+aQnOe0ou+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIHNob3dTZWFyY2g/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDmkJzntKLlhoXlrrnlj5jljJblm57osIPlh73mlbDvvIzlj4LmlbDkuLrmkJzntKLlhoXlrrnvvIzlv4Xpobvov5Tlm54gYFByb21pc2VgIOWvueixoVxuICAgKi9cbiAgb25TZWFyY2g/OiAodGV4dDogc3RyaW5nKSA9PiBQcm9taXNlPFNGU2NoZW1hRW51bVtdPjtcblxuICAvKipcbiAgICog5ZyoIGB0YWdzYCDlkowgYG11bHRpcGxlYCDmqKHlvI/kuIvoh6rliqjliIbor43nmoTliIbpmpTnrKZcbiAgICovXG4gIHRva2VuU2VwYXJhdG9ycz86IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiDmnIDlpJrmmL7npLrlpJrlsJHkuKogdGFnXG4gICAqL1xuICBtYXhUYWdDb3VudD86IG51bWJlcjtcblxuICAvKipcbiAgICog6Ieq5a6a5LmJ6YCJ5oup5qGG55qEVGVtcGxhdGXlhoXlrrlcbiAgICovXG4gIGN1c3RvbVRlbXBsYXRlPzogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IE56T3B0aW9uQ29tcG9uZW50IH0+O1xuXG4gIC8qKlxuICAgKiDoh6rlrprkuYnnmoTpgInmi6nmoYblkI7nvIDlm77moIdcbiAgICovXG4gIHN1ZmZpeEljb24/OiBUZW1wbGF0ZVJlZjxhbnk+IHwgc3RyaW5nO1xuXG4gIC8qKlxuICAgKiDoh6rlrprkuYnnmoTlpJrpgInmoYbmuIXpmaTlm77moIdcbiAgICovXG4gIHJlbW92ZUljb24/OiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8qKlxuICAgKiDoh6rlrprkuYnnmoTlpJrpgInmoYbmuIXnqbrlm77moIdcbiAgICovXG4gIGNsZWFySWNvbj86IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLyoqXG4gICAqIOiHquWumuS5ieW9k+WJjemAieS4reeahOadoeebruWbvuagh1xuICAgKi9cbiAgbWVudUl0ZW1TZWxlY3RlZEljb24/OiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8qKlxuICAgKiDpmpDol48gdGFnIOaXtuaYvuekuueahOWGheWuuVxuICAgKi9cbiAgbWF4VGFnUGxhY2Vob2xkZXI/OiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogYW55W10gfT47XG5cbiAgLyoqXG4gICAqIOS4i+aLieiPnOWNleS4reavj+S4qiBPcHRpb24g55qE6auY5bqm77yM6buY6K6k77yaYDMyYFxuICAgKi9cbiAgb3B0aW9uSGVpZ2h0UHg/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIOS4i+aLieiPnOWNleS4reacgOWkmuWxleekuueahCBPcHRpb24g5Liq5pWw77yM6LaF5Ye66YOo5YiG5rua5Yqo77yM6buY6K6k77yaYDhgXG4gICAqL1xuICBvcHRpb25PdmVyZmxvd1NpemU/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIOiHqueUseaJqeWxlVxuICAgKi9cbiAgZHJvcGRvd25SZW5kZXI/OiBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+O1xuXG4gIC8qKlxuICAgKiDpgInkuK3nmoQgYG56LW9wdGlvbmAg5Y+R55Sf5Y+Y5YyW5pe277yM6LCD55So5q2k5Ye95pWwXG4gICAqL1xuICBjaGFuZ2U/OiAobmdNb2RlbDogU0ZWYWx1ZSB8IFNGVmFsdWVbXSwgb3JnRGF0YTogU0ZTY2hlbWFFbnVtIHwgU0ZTY2hlbWFFbnVtW10pID0+IHZvaWQ7XG5cbiAgLyoqXG4gICAqIOS4i+aLieiPnOWNleaJk+W8gOWFs+mXreWbnuiwg+WHveaVsFxuICAgKi9cbiAgb3BlbkNoYW5nZT86IChzdGF0dXM6IGJvb2xlYW4pID0+IHZvaWQ7XG5cbiAgLyoqXG4gICAqIOS4i+aLieiPnOWNlea7muWKqOWIsOW6lemDqOWbnuiwg++8jOWPr+eUqOS6juS9nOS4uuWKqOaAgeWKoOi9veeahOinpuWPkeadoeS7tlxuICAgKi9cbiAgc2Nyb2xsVG9Cb3R0b20/OiAoKSA9PiB2b2lkO1xufVxuIl19