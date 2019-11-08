/**
 * @fileoverview added by tsickle
 * Generated from: src/widgets/slider/schema.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function SFSliderWidgetSchema() { }
if (false) {
    /**
     * 当添加该属性时，启动双滑块模式
     * @type {?|undefined}
     */
    SFSliderWidgetSchema.prototype.range;
    /**
     * 刻度标记
     * @type {?|undefined}
     */
    SFSliderWidgetSchema.prototype.marks;
    /**
     * 是否只能拖拽到刻度上，默认：`false`
     * @type {?|undefined}
     */
    SFSliderWidgetSchema.prototype.dots;
    /**
     * 是否包含。`marks` 不为空对象时有效，值为 `true` 时表示值为包含关系，`false` 表示并列
     * @type {?|undefined}
     */
    SFSliderWidgetSchema.prototype.included;
    /**
     * 竖直显示。添加该属性时，Slider 为垂直方向
     * @type {?|undefined}
     */
    SFSliderWidgetSchema.prototype.vertical;
    /**
     * 与 `onmouseup` 触发时机一致，把当前值作为参数传入
     * @type {?|undefined}
     */
    SFSliderWidgetSchema.prototype.afterChange;
    /**
     * Slider 会把当前值传给 `nzTipFormatter`，并在 Tooltip 中显示 `nzTipFormatter` 的返回值，若为 null，则隐藏 Tooltip
     * @type {?|undefined}
     */
    SFSliderWidgetSchema.prototype.formatter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy9zbGlkZXIvc2NoZW1hLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBR0EsMENBbUNDOzs7Ozs7SUEvQkMscUNBQWdCOzs7OztJQUtoQixxQ0FBcUI7Ozs7O0lBS3JCLG9DQUFlOzs7OztJQUtmLHdDQUFtQjs7Ozs7SUFLbkIsd0NBQW1COzs7OztJQUtuQiwyQ0FBMkM7Ozs7O0lBSzNDLHlDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNGVUlTY2hlbWFJdGVtIH0gZnJvbSAnLi4vLi4vc2NoZW1hL3VpJztcbmltcG9ydCB7IE1hcmtzLCBTbGlkZXJWYWx1ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvc2xpZGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBTRlNsaWRlcldpZGdldFNjaGVtYSBleHRlbmRzIFNGVUlTY2hlbWFJdGVtIHtcbiAgLyoqXG4gICAqIOW9k+a3u+WKoOivpeWxnuaAp+aXtu+8jOWQr+WKqOWPjOa7keWdl+aooeW8j1xuICAgKi9cbiAgcmFuZ2U/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDliLvluqbmoIforrBcbiAgICovXG4gIG1hcmtzPzogTWFya3MgfCBudWxsO1xuXG4gIC8qKlxuICAgKiDmmK/lkKblj6rog73mi5bmi73liLDliLvluqbkuIrvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBkb3RzPzogYm9vbGVhbjtcblxuICAvKipcbiAgICog5piv5ZCm5YyF5ZCr44CCYG1hcmtzYCDkuI3kuLrnqbrlr7nosaHml7bmnInmlYjvvIzlgLzkuLogYHRydWVgIOaXtuihqOekuuWAvOS4uuWMheWQq+WFs+ezu++8jGBmYWxzZWAg6KGo56S65bm25YiXXG4gICAqL1xuICBpbmNsdWRlZD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOerluebtOaYvuekuuOAgua3u+WKoOivpeWxnuaAp+aXtu+8jFNsaWRlciDkuLrlnoLnm7TmlrnlkJFcbiAgICovXG4gIHZlcnRpY2FsPzogYm9vbGVhbjtcblxuICAvKipcbiAgICog5LiOIGBvbm1vdXNldXBgIOinpuWPkeaXtuacuuS4gOiHtO+8jOaKiuW9k+WJjeWAvOS9nOS4uuWPguaVsOS8oOWFpVxuICAgKi9cbiAgYWZ0ZXJDaGFuZ2U/OiAodmFsdWU6IFNsaWRlclZhbHVlKSA9PiB2b2lkO1xuXG4gIC8qKlxuICAgKiBTbGlkZXIg5Lya5oqK5b2T5YmN5YC85Lyg57uZIGBuelRpcEZvcm1hdHRlcmDvvIzlubblnKggVG9vbHRpcCDkuK3mmL7npLogYG56VGlwRm9ybWF0dGVyYCDnmoTov5Tlm57lgLzvvIzoi6XkuLogbnVsbO+8jOWImemakOiXjyBUb29sdGlwXG4gICAqL1xuICBmb3JtYXR0ZXI/OiAodmFsdWU6IG51bWJlcikgPT4gc3RyaW5nO1xufVxuIl19