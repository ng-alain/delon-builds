/**
 * @fileoverview added by tsickle
 * Generated from: src/widgets/object/schema.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function SFObjectWidgetSchema() { }
if (false) {
    /**
     * 是否显示扩展，点击隐藏内容，默认：`true`
     * - 限 `type === 'card'`
     * @type {?|undefined}
     */
    SFObjectWidgetSchema.prototype.showExpand;
    /**
     * 展开状态，默认：`true`
     * - 限 `type === 'card'`
     * @type {?|undefined}
     */
    SFObjectWidgetSchema.prototype.expand;
    /**
     * 是否显示标题，默认：`false`
     * @type {?|undefined}
     */
    SFObjectWidgetSchema.prototype.showTitle;
    /**
     * 渲染类型
     * - `card` 使用 `nz-card` 渲染
     * - `default` 使用默认渲染
     * @type {?|undefined}
     */
    SFObjectWidgetSchema.prototype.type;
    /**
     * 等同 `nzSize` 属性，默认：`small`
     * @type {?|undefined}
     */
    SFObjectWidgetSchema.prototype.cardSize;
    /**
     * 等同 `nzBodyStyle` 属性
     * @type {?|undefined}
     */
    SFObjectWidgetSchema.prototype.cardBodyStyle;
    /**
     * 等同 `nzBordered` 属性，默认：`true`
     * @type {?|undefined}
     */
    SFObjectWidgetSchema.prototype.cardBordered;
    /**
     * 等同 `nzExtra` 属性
     * @type {?|undefined}
     */
    SFObjectWidgetSchema.prototype.cardExtra;
    /**
     * 等同 `nzActions` 属性
     * @type {?|undefined}
     */
    SFObjectWidgetSchema.prototype.cardActions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3ZzdHMvd29yay8xL3MvcGFja2FnZXMvZm9ybS8iLCJzb3VyY2VzIjpbInNyYy93aWRnZXRzL29iamVjdC9zY2hlbWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFLQSwwQ0F5Q0M7Ozs7Ozs7SUFwQ0MsMENBQXFCOzs7Ozs7SUFLckIsc0NBQWlCOzs7OztJQUlqQix5Q0FBb0I7Ozs7Ozs7SUFNcEIsb0NBQWdDOzs7OztJQUloQyx3Q0FBK0I7Ozs7O0lBSS9CLDZDQUEwQzs7Ozs7SUFJMUMsNENBQXVCOzs7OztJQUl2Qix5Q0FBdUM7Ozs7O0lBSXZDLDJDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTRlVJU2NoZW1hSXRlbSB9IGZyb20gJy4uLy4uL3NjaGVtYS91aSc7XG5cbmV4cG9ydCB0eXBlIFNGT2JqZWN0V2lkZ2V0UmVuZGVyVHlwZSA9ICdjYXJkJyB8ICdkZWZhdWx0JztcblxuZXhwb3J0IGludGVyZmFjZSBTRk9iamVjdFdpZGdldFNjaGVtYSBleHRlbmRzIFNGVUlTY2hlbWFJdGVtIHtcbiAgLyoqXG4gICAqIOaYr+WQpuaYvuekuuaJqeWxle+8jOeCueWHu+makOiXj+WGheWuue+8jOm7mOiupO+8mmB0cnVlYFxuICAgKiAtIOmZkCBgdHlwZSA9PT0gJ2NhcmQnYFxuICAgKi9cbiAgc2hvd0V4cGFuZD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDlsZXlvIDnirbmgIHvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICogLSDpmZAgYHR5cGUgPT09ICdjYXJkJ2BcbiAgICovXG4gIGV4cGFuZD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDmmK/lkKbmmL7npLrmoIfpopjvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBzaG93VGl0bGU/OiBib29sZWFuO1xuICAvKipcbiAgICog5riy5p+T57G75Z6LXG4gICAqIC0gYGNhcmRgIOS9v+eUqCBgbnotY2FyZGAg5riy5p+TXG4gICAqIC0gYGRlZmF1bHRgIOS9v+eUqOm7mOiupOa4suafk1xuICAgKi9cbiAgdHlwZT86IFNGT2JqZWN0V2lkZ2V0UmVuZGVyVHlwZTtcbiAgLyoqXG4gICAqIOetieWQjCBgbnpTaXplYCDlsZ7mgKfvvIzpu5jorqTvvJpgc21hbGxgXG4gICAqL1xuICBjYXJkU2l6ZT86ICdkZWZhdWx0JyB8ICdzbWFsbCc7XG4gIC8qKlxuICAgKiDnrYnlkIwgYG56Qm9keVN0eWxlYCDlsZ7mgKdcbiAgICovXG4gIGNhcmRCb2R5U3R5bGU/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICAvKipcbiAgICog562J5ZCMIGBuekJvcmRlcmVkYCDlsZ7mgKfvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICovXG4gIGNhcmRCb3JkZXJlZD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDnrYnlkIwgYG56RXh0cmFgIOWxnuaAp1xuICAgKi9cbiAgY2FyZEV4dHJhPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIC8qKlxuICAgKiDnrYnlkIwgYG56QWN0aW9uc2Ag5bGe5oCnXG4gICAqL1xuICBjYXJkQWN0aW9ucz86IEFycmF5PFRlbXBsYXRlUmVmPHZvaWQ+Pjtcbn1cbiJdfQ==