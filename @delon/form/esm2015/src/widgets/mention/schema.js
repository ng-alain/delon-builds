/**
 * @fileoverview added by tsickle
 * Generated from: src/widgets/mention/schema.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function SFMentionWidgetSchema() { }
if (false) {
    /**
     * 异步静态数据源
     * @type {?|undefined}
     */
    SFMentionWidgetSchema.prototype.asyncData;
    /** @type {?|undefined} */
    SFMentionWidgetSchema.prototype.size;
    /**
     * 在文字框中显示提示讯息
     * @type {?|undefined}
     */
    SFMentionWidgetSchema.prototype.placeholder;
    /**
     * 实时数据
     * @type {?|undefined}
     */
    SFMentionWidgetSchema.prototype.loadData;
    /**
     * 未找到时的内容，默认：`无匹配结果，轻敲空格完成输入`
     * @type {?|undefined}
     */
    SFMentionWidgetSchema.prototype.notFoundContent;
    /**
     * 建议框位置，默认：`button`
     * @type {?|undefined}
     */
    SFMentionWidgetSchema.prototype.placement;
    /**
     * 触发弹出下拉框的字符，默认：`\@`
     * @type {?|undefined}
     */
    SFMentionWidgetSchema.prototype.prefix;
    /**
     * 建议选项的取值方法，默认：`item => item.label`
     * @type {?|undefined}
     */
    SFMentionWidgetSchema.prototype.valueWith;
    /**
     * 下拉框选择建议时回调
     * @type {?|undefined}
     */
    SFMentionWidgetSchema.prototype.select;
    /**
     * 文本框类型，默认：`text`
     * @type {?|undefined}
     */
    SFMentionWidgetSchema.prototype.inputStyle;
    /**
     * 自适应内容高度，可设置为 `true|false` 或对象：`{ minRows: 2, maxRows: 6 }`
     * @type {?|undefined}
     */
    SFMentionWidgetSchema.prototype.autosize;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy9tZW50aW9uL3NjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQU1BLDJDQW9EQzs7Ozs7O0lBaERDLDBDQUFpRDs7SUFFakQscUNBQWlCOzs7OztJQUtqQiw0Q0FBcUI7Ozs7O0lBS3JCLHlDQUE0RTs7Ozs7SUFLNUUsZ0RBQXlCOzs7OztJQUt6QiwwQ0FBNkI7Ozs7O0lBSzdCLHVDQUEyQjs7Ozs7SUFLM0IsMENBQW1DOzs7OztJQUtuQyx1Q0FBOEI7Ozs7O0lBSzlCLDJDQUFpQzs7Ozs7SUFLakMseUNBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXV0b1NpemVUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pbnB1dCc7XG5pbXBvcnQgeyBNZW50aW9uT25TZWFyY2hUeXBlcyB9IGZyb20gJ25nLXpvcnJvLWFudGQvbWVudGlvbic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTRlNjaGVtYUVudW1UeXBlIH0gZnJvbSAnLi4vLi4vc2NoZW1hJztcbmltcG9ydCB7IFNGRExTU2l6ZSwgU0ZVSVNjaGVtYUl0ZW0gfSBmcm9tICcuLi8uLi9zY2hlbWEvdWknO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNGTWVudGlvbldpZGdldFNjaGVtYSBleHRlbmRzIFNGVUlTY2hlbWFJdGVtIHtcbiAgLyoqXG4gICAqIOW8guatpemdmeaAgeaVsOaNrua6kFxuICAgKi9cbiAgYXN5bmNEYXRhPzogKCkgPT4gT2JzZXJ2YWJsZTxTRlNjaGVtYUVudW1UeXBlW10+O1xuXG4gIHNpemU/OiBTRkRMU1NpemU7XG5cbiAgLyoqXG4gICAqIOWcqOaWh+Wtl+ahhuS4reaYvuekuuaPkOekuuiur+aBr1xuICAgKi9cbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIOWunuaXtuaVsOaNrlxuICAgKi9cbiAgbG9hZERhdGE/OiAob3B0aW9uOiBNZW50aW9uT25TZWFyY2hUeXBlcykgPT4gT2JzZXJ2YWJsZTxTRlNjaGVtYUVudW1UeXBlW10+O1xuXG4gIC8qKlxuICAgKiDmnKrmib7liLDml7bnmoTlhoXlrrnvvIzpu5jorqTvvJpg5peg5Yy56YWN57uT5p6c77yM6L275pWy56m65qC85a6M5oiQ6L6T5YWlYFxuICAgKi9cbiAgbm90Rm91bmRDb250ZW50Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiDlu7rorq7moYbkvY3nva7vvIzpu5jorqTvvJpgYnV0dG9uYFxuICAgKi9cbiAgcGxhY2VtZW50PzogJ2J1dHRvbicgfCAndG9wJztcblxuICAvKipcbiAgICog6Kem5Y+R5by55Ye65LiL5ouJ5qGG55qE5a2X56ym77yM6buY6K6k77yaYEBgXG4gICAqL1xuICBwcmVmaXg/OiBzdHJpbmcgfCBzdHJpbmdbXTtcblxuICAvKipcbiAgICog5bu66K6u6YCJ6aG555qE5Y+W5YC85pa55rOV77yM6buY6K6k77yaYGl0ZW0gPT4gaXRlbS5sYWJlbGBcbiAgICovXG4gIHZhbHVlV2l0aD86ICh2YWx1ZTogYW55KSA9PiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIOS4i+aLieahhumAieaLqeW7uuiuruaXtuWbnuiwg1xuICAgKi9cbiAgc2VsZWN0PzogKHZhbHVlOiBhbnkpID0+IHZvaWQ7XG5cbiAgLyoqXG4gICAqIOaWh+acrOahhuexu+Wei++8jOm7mOiupO+8mmB0ZXh0YFxuICAgKi9cbiAgaW5wdXRTdHlsZT86ICd0ZXh0JyB8ICd0ZXh0YXJlYSc7XG5cbiAgLyoqXG4gICAqIOiHqumAguW6lOWGheWuuemrmOW6pu+8jOWPr+iuvue9ruS4uiBgdHJ1ZXxmYWxzZWAg5oiW5a+56LGh77yaYHsgbWluUm93czogMiwgbWF4Um93czogNiB9YFxuICAgKi9cbiAgYXV0b3NpemU/OiBib29sZWFuIHwgQXV0b1NpemVUeXBlO1xufVxuIl19