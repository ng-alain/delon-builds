/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy9tZW50aW9uL3NjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBTUEsMkNBb0RDOzs7Ozs7SUFoREMsMENBQWlEOztJQUVqRCxxQ0FBaUI7Ozs7O0lBS2pCLDRDQUFxQjs7Ozs7SUFLckIseUNBQTRFOzs7OztJQUs1RSxnREFBeUI7Ozs7O0lBS3pCLDBDQUE2Qjs7Ozs7SUFLN0IsdUNBQTJCOzs7OztJQUszQiwwQ0FBbUM7Ozs7O0lBS25DLHVDQUE4Qjs7Ozs7SUFLOUIsMkNBQWlDOzs7OztJQUtqQyx5Q0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBNZW50aW9uT25TZWFyY2hUeXBlcyB9IGZyb20gJ25nLXpvcnJvLWFudGQvbWVudGlvbic7XG5pbXBvcnQgeyBBdXRvU2l6ZVR5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2lucHV0JztcbmltcG9ydCB7IFNGVUlTY2hlbWFJdGVtLCBTRkRMU1NpemUgfSBmcm9tICcuLi8uLi9zY2hlbWEvdWknO1xuaW1wb3J0IHsgU0ZTY2hlbWFFbnVtVHlwZSB9IGZyb20gJy4uLy4uL3NjaGVtYSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU0ZNZW50aW9uV2lkZ2V0U2NoZW1hIGV4dGVuZHMgU0ZVSVNjaGVtYUl0ZW0ge1xuICAvKipcbiAgICog5byC5q2l6Z2Z5oCB5pWw5o2u5rqQXG4gICAqL1xuICBhc3luY0RhdGE/OiAoKSA9PiBPYnNlcnZhYmxlPFNGU2NoZW1hRW51bVR5cGVbXT47XG5cbiAgc2l6ZT86IFNGRExTU2l6ZTtcblxuICAvKipcbiAgICog5Zyo5paH5a2X5qGG5Lit5pi+56S65o+Q56S66K6v5oGvXG4gICAqL1xuICBwbGFjZWhvbGRlcj86IHN0cmluZztcblxuICAvKipcbiAgICog5a6e5pe25pWw5o2uXG4gICAqL1xuICBsb2FkRGF0YT86IChvcHRpb246IE1lbnRpb25PblNlYXJjaFR5cGVzKSA9PiBPYnNlcnZhYmxlPFNGU2NoZW1hRW51bVR5cGVbXT47XG5cbiAgLyoqXG4gICAqIOacquaJvuWIsOaXtueahOWGheWuue+8jOm7mOiupO+8mmDml6DljLnphY3nu5PmnpzvvIzovbvmlbLnqbrmoLzlrozmiJDovpPlhaVgXG4gICAqL1xuICBub3RGb3VuZENvbnRlbnQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIOW7uuiuruahhuS9jee9ru+8jOm7mOiupO+8mmBidXR0b25gXG4gICAqL1xuICBwbGFjZW1lbnQ/OiAnYnV0dG9uJyB8ICd0b3AnO1xuXG4gIC8qKlxuICAgKiDop6blj5HlvLnlh7rkuIvmi4nmoYbnmoTlrZfnrKbvvIzpu5jorqTvvJpgQGBcbiAgICovXG4gIHByZWZpeD86IHN0cmluZyB8IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiDlu7rorq7pgInpobnnmoTlj5blgLzmlrnms5XvvIzpu5jorqTvvJpgaXRlbSA9PiBpdGVtLmxhYmVsYFxuICAgKi9cbiAgdmFsdWVXaXRoPzogKHZhbHVlOiBhbnkpID0+IHN0cmluZztcblxuICAvKipcbiAgICog5LiL5ouJ5qGG6YCJ5oup5bu66K6u5pe25Zue6LCDXG4gICAqL1xuICBzZWxlY3Q/OiAodmFsdWU6IGFueSkgPT4gdm9pZDtcblxuICAvKipcbiAgICog5paH5pys5qGG57G75Z6L77yM6buY6K6k77yaYHRleHRgXG4gICAqL1xuICBpbnB1dFN0eWxlPzogJ3RleHQnIHwgJ3RleHRhcmVhJztcblxuICAvKipcbiAgICog6Ieq6YCC5bqU5YaF5a656auY5bqm77yM5Y+v6K6+572u5Li6IGB0cnVlfGZhbHNlYCDmiJblr7nosaHvvJpgeyBtaW5Sb3dzOiAyLCBtYXhSb3dzOiA2IH1gXG4gICAqL1xuICBhdXRvc2l6ZT86IGJvb2xlYW4gfCBBdXRvU2l6ZVR5cGU7XG59XG4iXX0=