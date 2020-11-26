/**
 * @fileoverview added by tsickle
 * Generated from: src/widgets/tree-select/schema.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function SFTreeSelectWidgetSchema() { }
if (false) {
    /**
     * 异步数据源
     * @type {?|undefined}
     */
    SFTreeSelectWidgetSchema.prototype.asyncData;
    /** @type {?|undefined} */
    SFTreeSelectWidgetSchema.prototype.size;
    /** @type {?|undefined} */
    SFTreeSelectWidgetSchema.prototype.placeholder;
    /**
     * 支持清除，默认：`false`
     * @type {?|undefined}
     */
    SFTreeSelectWidgetSchema.prototype.allowClear;
    /**
     * 下拉菜单和选择器同宽，默认：`true`
     * @type {?|undefined}
     */
    SFTreeSelectWidgetSchema.prototype.dropdownMatchSelectWidth;
    /**
     * 下拉菜单的 style 属性
     * @type {?|undefined}
     */
    SFTreeSelectWidgetSchema.prototype.dropdownStyle;
    /**
     * 下拉菜单的 className 属性
     * @type {?|undefined}
     */
    SFTreeSelectWidgetSchema.prototype.dropdownClassName;
    /**
     * 支持多选（当设置 `checkable` 时自动变为true），默认：`false`
     * @type {?|undefined}
     */
    SFTreeSelectWidgetSchema.prototype.multiple;
    /**
     * 搜索隐藏未匹配的节点，默认：`false`
     * @type {?|undefined}
     */
    SFTreeSelectWidgetSchema.prototype.hideUnMatched;
    /**
     * 节点前添加 Checkbox 复选框，默认：`false`
     * @type {?|undefined}
     */
    SFTreeSelectWidgetSchema.prototype.checkable;
    /**
     * checkable 状态下节点选择完全受控（父子节点选中状态不再关联），默认：`false`
     * @type {?|undefined}
     */
    SFTreeSelectWidgetSchema.prototype.checkStrictly;
    /**
     * 是否展示 TreeNode title 前的图标，没有默认样式，默认：`false`
     * @type {?|undefined}
     */
    SFTreeSelectWidgetSchema.prototype.showIcon;
    /**
     * 节点前添加展开图标，默认：`true`
     * @type {?|undefined}
     */
    SFTreeSelectWidgetSchema.prototype.showExpand;
    /**
     * 节点前添加展开图标，默认：`false`
     * @type {?|undefined}
     */
    SFTreeSelectWidgetSchema.prototype.showLine;
    /**
     * 默认展开所有树节点，默认：`false`
     * @type {?|undefined}
     */
    SFTreeSelectWidgetSchema.prototype.defaultExpandAll;
    /**
     * 当下拉列表为空时显示的内容
     * @type {?|undefined}
     */
    SFTreeSelectWidgetSchema.prototype.notFoundContent;
    /**
     * 默认展开指定的树节点
     * @type {?|undefined}
     */
    SFTreeSelectWidgetSchema.prototype.expandedKeys;
    /**
     * 最多显示多少个 tag
     * @type {?|undefined}
     */
    SFTreeSelectWidgetSchema.prototype.maxTagCount;
    /**
     * 隐藏 tag 时显示的内容
     * @type {?|undefined}
     */
    SFTreeSelectWidgetSchema.prototype.maxTagPlaceholder;
    /**
     * 自定义节点
     * @type {?|undefined}
     */
    SFTreeSelectWidgetSchema.prototype.treeTemplate;
    /**
     * The size of the items in the list, same as [cdk itemSize](https://material.angular.io/cdk/scrolling/api), Default: `28`
     * @type {?|undefined}
     */
    SFTreeSelectWidgetSchema.prototype.virtualItemSize;
    /**
     *  The number of pixels worth of buffer to render for when rendering new items, same as [cdk maxBufferPx](https://material.angular.io/cdk/scrolling/api), Default: `28`
     * @type {?|undefined}
     */
    SFTreeSelectWidgetSchema.prototype.virtualMaxBufferPx;
    /**
     * The minimum amount of buffer rendered beyond the viewport (in pixels),same as [cdk minBufferPx](https://material.angular.io/cdk/scrolling/api), Default: `28`
     * @type {?|undefined}
     */
    SFTreeSelectWidgetSchema.prototype.virtualMinBufferPx;
    /**
     * The height of virtual scroll
     * @type {?|undefined}
     */
    SFTreeSelectWidgetSchema.prototype.virtualHeight;
    /**
     * 如何在输入框显示所选的节点值的方法
     * @type {?|undefined}
     */
    SFTreeSelectWidgetSchema.prototype.displayWith;
    /**
     * 点击展开树节点图标调用
     * @type {?|undefined}
     */
    SFTreeSelectWidgetSchema.prototype.expandChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3ZzdHMvd29yay8xL3MvcGFja2FnZXMvZm9ybS8iLCJzb3VyY2VzIjpbInNyYy93aWRnZXRzL3RyZWUtc2VsZWN0L3NjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQU1BLDhDQTRIQzs7Ozs7O0lBeEhDLDZDQUFpRDs7SUFFakQsd0NBQWlCOztJQUVqQiwrQ0FBcUI7Ozs7O0lBS3JCLDhDQUFxQjs7Ozs7SUFLckIsNERBQW1DOzs7OztJQUtuQyxpREFBdUI7Ozs7O0lBS3ZCLHFEQUEyQjs7Ozs7SUFLM0IsNENBQW1COzs7OztJQUtuQixpREFBd0I7Ozs7O0lBS3hCLDZDQUFvQjs7Ozs7SUFLcEIsaURBQXdCOzs7OztJQUt4Qiw0Q0FBbUI7Ozs7O0lBS25CLDhDQUFxQjs7Ozs7SUFLckIsNENBQW1COzs7OztJQUtuQixvREFBMkI7Ozs7O0lBSzNCLG1EQUF5Qjs7Ozs7SUFLekIsZ0RBQXdCOzs7OztJQUt4QiwrQ0FBcUI7Ozs7O0lBS3JCLHFEQUFvRTs7Ozs7SUFLcEUsZ0RBQWlGOzs7OztJQUtqRixtREFBeUI7Ozs7O0lBS3pCLHNEQUE0Qjs7Ozs7SUFLNUIsc0RBQTRCOzs7OztJQUs1QixpREFBOEI7Ozs7O0lBSzlCLCtDQUF1RDs7Ozs7SUFLdkQsZ0RBQW9FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56Rm9ybWF0RW1pdEV2ZW50LCBOelRyZWVOb2RlLCBOelRyZWVOb2RlT3B0aW9ucyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90cmVlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFNGU2NoZW1hRW51bSwgU0ZTY2hlbWFFbnVtVHlwZSB9IGZyb20gJy4uLy4uL3NjaGVtYSc7XG5pbXBvcnQgeyBTRkRMU1NpemUsIFNGVUlTY2hlbWFJdGVtIH0gZnJvbSAnLi4vLi4vc2NoZW1hL3VpJztcblxuZXhwb3J0IGludGVyZmFjZSBTRlRyZWVTZWxlY3RXaWRnZXRTY2hlbWEgZXh0ZW5kcyBTRlVJU2NoZW1hSXRlbSB7XG4gIC8qKlxuICAgKiDlvILmraXmlbDmja7mupBcbiAgICovXG4gIGFzeW5jRGF0YT86ICgpID0+IE9ic2VydmFibGU8U0ZTY2hlbWFFbnVtVHlwZVtdPjtcblxuICBzaXplPzogU0ZETFNTaXplO1xuXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiDmlK/mjIHmuIXpmaTvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBhbGxvd0NsZWFyPzogYm9vbGVhbjtcblxuICAvKipcbiAgICog5LiL5ouJ6I+c5Y2V5ZKM6YCJ5oup5Zmo5ZCM5a6977yM6buY6K6k77yaYHRydWVgXG4gICAqL1xuICBkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGg/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDkuIvmi4noj5zljZXnmoQgc3R5bGUg5bGe5oCnXG4gICAqL1xuICBkcm9wZG93blN0eWxlPzogb2JqZWN0O1xuXG4gIC8qKlxuICAgKiDkuIvmi4noj5zljZXnmoQgY2xhc3NOYW1lIOWxnuaAp1xuICAgKi9cbiAgZHJvcGRvd25DbGFzc05hbWU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIOaUr+aMgeWkmumAie+8iOW9k+iuvue9riBgY2hlY2thYmxlYCDml7boh6rliqjlj5jkuLp0cnVl77yJ77yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgbXVsdGlwbGU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDmkJzntKLpmpDol4/mnKrljLnphY3nmoToioLngrnvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBoaWRlVW5NYXRjaGVkPzogYm9vbGVhbjtcblxuICAvKipcbiAgICog6IqC54K55YmN5re75YqgIENoZWNrYm94IOWkjemAieahhu+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIGNoZWNrYWJsZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIGNoZWNrYWJsZSDnirbmgIHkuIvoioLngrnpgInmi6nlrozlhajlj5fmjqfvvIjniLblrZDoioLngrnpgInkuK3nirbmgIHkuI3lho3lhbPogZTvvInvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBjaGVja1N0cmljdGx5PzogYm9vbGVhbjtcblxuICAvKipcbiAgICog5piv5ZCm5bGV56S6IFRyZWVOb2RlIHRpdGxlIOWJjeeahOWbvuagh++8jOayoeaciem7mOiupOagt+W8j++8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIHNob3dJY29uPzogYm9vbGVhbjtcblxuICAvKipcbiAgICog6IqC54K55YmN5re75Yqg5bGV5byA5Zu+5qCH77yM6buY6K6k77yaYHRydWVgXG4gICAqL1xuICBzaG93RXhwYW5kPzogYm9vbGVhbjtcblxuICAvKipcbiAgICog6IqC54K55YmN5re75Yqg5bGV5byA5Zu+5qCH77yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgc2hvd0xpbmU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDpu5jorqTlsZXlvIDmiYDmnInmoJHoioLngrnvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBkZWZhdWx0RXhwYW5kQWxsPzogYm9vbGVhbjtcblxuICAvKipcbiAgICog5b2T5LiL5ouJ5YiX6KGo5Li656m65pe25pi+56S655qE5YaF5a65XG4gICAqL1xuICBub3RGb3VuZENvbnRlbnQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIOm7mOiupOWxleW8gOaMh+WumueahOagkeiKgueCuVxuICAgKi9cbiAgZXhwYW5kZWRLZXlzPzogc3RyaW5nW107XG5cbiAgLyoqXG4gICAqIOacgOWkmuaYvuekuuWkmuWwkeS4qiB0YWdcbiAgICovXG4gIG1heFRhZ0NvdW50PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiDpmpDol48gdGFnIOaXtuaYvuekuueahOWGheWuuVxuICAgKi9cbiAgbWF4VGFnUGxhY2Vob2xkZXI/OiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogTnpUcmVlTm9kZVtdIH0+IHwgbnVsbDtcblxuICAvKipcbiAgICog6Ieq5a6a5LmJ6IqC54K5XG4gICAqL1xuICB0cmVlVGVtcGxhdGU/OiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogTnpUcmVlTm9kZTsgb3JpZ2luOiBOelRyZWVOb2RlT3B0aW9ucyB9PjtcblxuICAvKipcbiAgICogVGhlIHNpemUgb2YgdGhlIGl0ZW1zIGluIHRoZSBsaXN0LCBzYW1lIGFzIFtjZGsgaXRlbVNpemVdKGh0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9jZGsvc2Nyb2xsaW5nL2FwaSksIERlZmF1bHQ6IGAyOGBcbiAgICovXG4gIHZpcnR1YWxJdGVtU2l6ZT86IG51bWJlcjtcblxuICAvKipcbiAgICogIFRoZSBudW1iZXIgb2YgcGl4ZWxzIHdvcnRoIG9mIGJ1ZmZlciB0byByZW5kZXIgZm9yIHdoZW4gcmVuZGVyaW5nIG5ldyBpdGVtcywgc2FtZSBhcyBbY2RrIG1heEJ1ZmZlclB4XShodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vY2RrL3Njcm9sbGluZy9hcGkpLCBEZWZhdWx0OiBgMjhgXG4gICAqL1xuICB2aXJ0dWFsTWF4QnVmZmVyUHg/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBtaW5pbXVtIGFtb3VudCBvZiBidWZmZXIgcmVuZGVyZWQgYmV5b25kIHRoZSB2aWV3cG9ydCAoaW4gcGl4ZWxzKSxzYW1lIGFzIFtjZGsgbWluQnVmZmVyUHhdKGh0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9jZGsvc2Nyb2xsaW5nL2FwaSksIERlZmF1bHQ6IGAyOGBcbiAgICovXG4gIHZpcnR1YWxNaW5CdWZmZXJQeD86IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIGhlaWdodCBvZiB2aXJ0dWFsIHNjcm9sbFxuICAgKi9cbiAgdmlydHVhbEhlaWdodD86IHN0cmluZyB8IG51bGw7XG5cbiAgLyoqXG4gICAqIOWmguS9leWcqOi+k+WFpeahhuaYvuekuuaJgOmAieeahOiKgueCueWAvOeahOaWueazlVxuICAgKi9cbiAgZGlzcGxheVdpdGg/OiAobm9kZTogTnpUcmVlTm9kZSkgPT4gc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gIC8qKlxuICAgKiDngrnlh7vlsZXlvIDmoJHoioLngrnlm77moIfosIPnlKhcbiAgICovXG4gIGV4cGFuZENoYW5nZT86IChlOiBOekZvcm1hdEVtaXRFdmVudCkgPT4gT2JzZXJ2YWJsZTxTRlNjaGVtYUVudW1bXT47XG59XG4iXX0=