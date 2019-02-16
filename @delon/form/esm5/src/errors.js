/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
export var ERRORSDEFAULT = {
    'false schema': "\u5E03\u5C14\u6A21\u5F0F\u51FA\u9519",
    $ref: "\u65E0\u6CD5\u627E\u5230\u5F15\u7528{ref}",
    additionalItems: "\u4E0D\u5141\u8BB8\u8D85\u8FC7{ref}",
    additionalProperties: "\u4E0D\u5141\u8BB8\u6709\u989D\u5916\u7684\u5C5E\u6027",
    anyOf: "\u6570\u636E\u5E94\u4E3A anyOf \u6240\u6307\u5B9A\u7684\u5176\u4E2D\u4E00\u4E2A",
    dependencies: "\u5E94\u5F53\u62E5\u6709\u5C5E\u6027{property}\u7684\u4F9D\u8D56\u5C5E\u6027{deps}",
    enum: "\u5E94\u5F53\u662F\u9884\u8BBE\u5B9A\u7684\u679A\u4E3E\u503C\u4E4B\u4E00",
    format: "\u683C\u5F0F\u4E0D\u6B63\u786E",
    // `应当匹配格式 "{format}"`,
    type: "\u7C7B\u578B\u5E94\u5F53\u662F {type}",
    required: "\u5FC5\u586B\u9879",
    maxLength: "\u81F3\u591A {limit} \u4E2A\u5B57\u7B26",
    minLength: "\u81F3\u5C11 {limit} \u4E2A\u5B57\u7B26\u4EE5\u4E0A",
    minimum: "\u5FC5\u987B {comparison}{limit}",
    formatMinimum: "\u5FC5\u987B {comparison}{limit}",
    maximum: "\u5FC5\u987B {comparison}{limit}",
    formatMaximum: "\u5FC5\u987B {comparison}{limit}",
    maxItems: "\u4E0D\u5E94\u591A\u4E8E {limit} \u4E2A\u9879",
    minItems: "\u4E0D\u5E94\u5C11\u4E8E {limit} \u4E2A\u9879",
    maxProperties: "\u4E0D\u5E94\u591A\u4E8E {limit} \u4E2A\u5C5E\u6027",
    minProperties: "\u4E0D\u5E94\u5C11\u4E8E {limit} \u4E2A\u5C5E\u6027",
    multipleOf: "\u5E94\u5F53\u662F {multipleOf} \u7684\u6574\u6570\u500D",
    not: "\u4E0D\u5E94\u5F53\u5339\u914D \"not\" schema",
    oneOf: "\u53EA\u80FD\u5339\u914D\u4E00\u4E2A \"oneOf\" \u4E2D\u7684 schema",
    pattern: "\u6570\u636E\u683C\u5F0F\u4E0D\u6B63\u786E",
    uniqueItems: "\u4E0D\u5E94\u5F53\u542B\u6709\u91CD\u590D\u9879 (\u7B2C {j} \u9879\u4E0E\u7B2C {i} \u9879\u662F\u91CD\u590D\u7684)",
    custom: "\u683C\u5F0F\u4E0D\u6B63\u786E",
    propertyNames: "\u5C5E\u6027\u540D \"{propertyName}\" \u65E0\u6548",
    patternRequired: "\u5E94\u5F53\u6709\u5C5E\u6027\u5339\u914D\u6A21\u5F0F {missingPattern}",
    switch: "\u7531\u4E8E {caseIndex} \u5931\u8D25\uFF0C\u672A\u901A\u8FC7 \"switch\" \u6821\u9A8C",
    const: "\u5E94\u5F53\u7B49\u4E8E\u5E38\u91CF",
    contains: "\u5E94\u5F53\u5305\u542B\u4E00\u4E2A\u6709\u6548\u9879",
    formatExclusiveMaximum: "formatExclusiveMaximum \u5E94\u5F53\u662F\u5E03\u5C14\u503C",
    formatExclusiveMinimum: "formatExclusiveMinimum \u5E94\u5F53\u662F\u5E03\u5C14\u503C",
    if: "\u5E94\u5F53\u5339\u914D\u6A21\u5F0F \"{failingKeyword}\"",
};
/**
 * @record
 */
export function ErrorData() { }
if (false) {
    /** @type {?} */
    ErrorData.prototype.keyword;
    /** @type {?|undefined} */
    ErrorData.prototype.dataPath;
    /** @type {?|undefined} */
    ErrorData.prototype.schemaPath;
    /** @type {?|undefined} */
    ErrorData.prototype.params;
    /** @type {?|undefined} */
    ErrorData.prototype.message;
    /* Skipping unhandled member: [key: string]: any;*/
}
/**
 * @record
 */
export function ErrorSchema() { }
if (false) {
    /**
     * 是否实时校验，默认：`true`
     * - `true` 每一次都校验
     * - `false` 提交时校验
     * @type {?|undefined}
     */
    ErrorSchema.prototype.liveValidate;
    /**
     * 自定义错误信息文本，键名赞同 `ErrorData.keyword` 值
     * @type {?|undefined}
     */
    ErrorSchema.prototype.errors;
    /**
     * 是否立即呈现错误视觉，默认：`false`
     * @type {?|undefined}
     */
    ErrorSchema.prototype.firstVisual;
    /**
     * 是否只展示错误视觉不显示错误文本，默认：`false`
     * @type {?|undefined}
     */
    ErrorSchema.prototype.onlyVisual;
    /**
     * 是否忽略某些数据类型校验 `ERRORSDEFAULT`
     * - 值始终包含 `DelonSchemaFormConfig.ingoreKeywords`
     * @type {?|undefined}
     */
    ErrorSchema.prototype.ingoreKeywords;
    /**
     * 自定义校验
     * @type {?|undefined}
     */
    ErrorSchema.prototype.validator;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvZXJyb3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsTUFBTSxLQUFPLGFBQWEsR0FBRztJQUMzQixjQUFjLEVBQUUsc0NBQVE7SUFDeEIsSUFBSSxFQUFFLDJDQUFhO0lBQ25CLGVBQWUsRUFBRSxxQ0FBWTtJQUM3QixvQkFBb0IsRUFBRSx3REFBVztJQUNqQyxLQUFLLEVBQUUsaUZBQXFCO0lBQzVCLFlBQVksRUFBRSxvRkFBNkI7SUFDM0MsSUFBSSxFQUFFLDBFQUFjO0lBQ3BCLE1BQU0sRUFBRSxnQ0FBTzs7SUFDZixJQUFJLEVBQUUsdUNBQWM7SUFDcEIsUUFBUSxFQUFFLG9CQUFLO0lBQ2YsU0FBUyxFQUFFLHlDQUFnQjtJQUMzQixTQUFTLEVBQUUscURBQWtCO0lBQzdCLE9BQU8sRUFBRSxrQ0FBd0I7SUFDakMsYUFBYSxFQUFFLGtDQUF3QjtJQUN2QyxPQUFPLEVBQUUsa0NBQXdCO0lBQ2pDLGFBQWEsRUFBRSxrQ0FBd0I7SUFDdkMsUUFBUSxFQUFFLCtDQUFpQjtJQUMzQixRQUFRLEVBQUUsK0NBQWlCO0lBQzNCLGFBQWEsRUFBRSxxREFBa0I7SUFDakMsYUFBYSxFQUFFLHFEQUFrQjtJQUNqQyxVQUFVLEVBQUUsMERBQXVCO0lBQ25DLEdBQUcsRUFBRSwrQ0FBb0I7SUFDekIsS0FBSyxFQUFFLG9FQUEwQjtJQUNqQyxPQUFPLEVBQUUsNENBQVM7SUFDbEIsV0FBVyxFQUFFLHFIQUFnQztJQUM3QyxNQUFNLEVBQUUsZ0NBQU87SUFDZixhQUFhLEVBQUUsb0RBQXlCO0lBQ3hDLGVBQWUsRUFBRSx5RUFBNEI7SUFDN0MsTUFBTSxFQUFFLHVGQUFtQztJQUMzQyxLQUFLLEVBQUUsc0NBQVE7SUFDZixRQUFRLEVBQUUsd0RBQVc7SUFDckIsc0JBQXNCLEVBQUUsNkRBQStCO0lBQ3ZELHNCQUFzQixFQUFFLDZEQUErQjtJQUN2RCxFQUFFLEVBQUUsMkRBQTJCO0NBQ2hDOzs7O0FBRUQsK0JBUUM7OztJQUxDLDRCQUFnQjs7SUFDaEIsNkJBQWtCOztJQUNsQiwrQkFBb0I7O0lBQ3BCLDJCQUFnQzs7SUFDaEMsNEJBQWlCOzs7Ozs7QUFHbkIsaUNBZ0NDOzs7Ozs7OztJQTFCQyxtQ0FBdUI7Ozs7O0lBSXZCLDZCQUFrRTs7Ozs7SUFJbEUsa0NBQXNCOzs7OztJQUl0QixpQ0FBcUI7Ozs7OztJQUtyQixxQ0FBMEI7Ozs7O0lBSTFCLGdDQUkyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFNGVmFsdWUgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBGb3JtUHJvcGVydHksIFByb3BlcnR5R3JvdXAgfSBmcm9tICcuL21vZGVsL2Zvcm0ucHJvcGVydHknO1xuXG5leHBvcnQgY29uc3QgRVJST1JTREVGQVVMVCA9IHtcbiAgJ2ZhbHNlIHNjaGVtYSc6IGDluIPlsJTmqKHlvI/lh7rplJlgLFxuICAkcmVmOiBg5peg5rOV5om+5Yiw5byV55Soe3JlZn1gLFxuICBhZGRpdGlvbmFsSXRlbXM6IGDkuI3lhYHorrjotoXov4d7cmVmfWAsXG4gIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiBg5LiN5YWB6K645pyJ6aKd5aSW55qE5bGe5oCnYCxcbiAgYW55T2Y6IGDmlbDmja7lupTkuLogYW55T2Yg5omA5oyH5a6a55qE5YW25Lit5LiA5LiqYCxcbiAgZGVwZW5kZW5jaWVzOiBg5bqU5b2T5oul5pyJ5bGe5oCne3Byb3BlcnR5feeahOS+nei1luWxnuaAp3tkZXBzfWAsXG4gIGVudW06IGDlupTlvZPmmK/pooTorr7lrprnmoTmnprkuL7lgLzkuYvkuIBgLFxuICBmb3JtYXQ6IGDmoLzlvI/kuI3mraPnoa5gLCAvLyBg5bqU5b2T5Yy56YWN5qC85byPIFwie2Zvcm1hdH1cImAsXG4gIHR5cGU6IGDnsbvlnovlupTlvZPmmK8ge3R5cGV9YCxcbiAgcmVxdWlyZWQ6IGDlv4XloavpoblgLFxuICBtYXhMZW5ndGg6IGDoh7PlpJoge2xpbWl0fSDkuKrlrZfnrKZgLFxuICBtaW5MZW5ndGg6IGDoh7PlsJEge2xpbWl0fSDkuKrlrZfnrKbku6XkuIpgLFxuICBtaW5pbXVtOiBg5b+F6aG7IHtjb21wYXJpc29ufXtsaW1pdH1gLFxuICBmb3JtYXRNaW5pbXVtOiBg5b+F6aG7IHtjb21wYXJpc29ufXtsaW1pdH1gLFxuICBtYXhpbXVtOiBg5b+F6aG7IHtjb21wYXJpc29ufXtsaW1pdH1gLFxuICBmb3JtYXRNYXhpbXVtOiBg5b+F6aG7IHtjb21wYXJpc29ufXtsaW1pdH1gLFxuICBtYXhJdGVtczogYOS4jeW6lOWkmuS6jiB7bGltaXR9IOS4qumhuWAsXG4gIG1pbkl0ZW1zOiBg5LiN5bqU5bCR5LqOIHtsaW1pdH0g5Liq6aG5YCxcbiAgbWF4UHJvcGVydGllczogYOS4jeW6lOWkmuS6jiB7bGltaXR9IOS4quWxnuaAp2AsXG4gIG1pblByb3BlcnRpZXM6IGDkuI3lupTlsJHkuo4ge2xpbWl0fSDkuKrlsZ7mgKdgLFxuICBtdWx0aXBsZU9mOiBg5bqU5b2T5pivIHttdWx0aXBsZU9mfSDnmoTmlbTmlbDlgI1gLFxuICBub3Q6IGDkuI3lupTlvZPljLnphY0gXCJub3RcIiBzY2hlbWFgLFxuICBvbmVPZjogYOWPquiDveWMuemFjeS4gOS4qiBcIm9uZU9mXCIg5Lit55qEIHNjaGVtYWAsXG4gIHBhdHRlcm46IGDmlbDmja7moLzlvI/kuI3mraPnoa5gLFxuICB1bmlxdWVJdGVtczogYOS4jeW6lOW9k+WQq+aciemHjeWkjemhuSAo56ysIHtqfSDpobnkuI7nrKwge2l9IOmhueaYr+mHjeWkjeeahClgLFxuICBjdXN0b206IGDmoLzlvI/kuI3mraPnoa5gLFxuICBwcm9wZXJ0eU5hbWVzOiBg5bGe5oCn5ZCNIFwie3Byb3BlcnR5TmFtZX1cIiDml6DmlYhgLFxuICBwYXR0ZXJuUmVxdWlyZWQ6IGDlupTlvZPmnInlsZ7mgKfljLnphY3mqKHlvI8ge21pc3NpbmdQYXR0ZXJufWAsXG4gIHN3aXRjaDogYOeUseS6jiB7Y2FzZUluZGV4fSDlpLHotKXvvIzmnKrpgJrov4cgXCJzd2l0Y2hcIiDmoKHpqoxgLFxuICBjb25zdDogYOW6lOW9k+etieS6juW4uOmHj2AsXG4gIGNvbnRhaW5zOiBg5bqU5b2T5YyF5ZCr5LiA5Liq5pyJ5pWI6aG5YCxcbiAgZm9ybWF0RXhjbHVzaXZlTWF4aW11bTogYGZvcm1hdEV4Y2x1c2l2ZU1heGltdW0g5bqU5b2T5piv5biD5bCU5YC8YCxcbiAgZm9ybWF0RXhjbHVzaXZlTWluaW11bTogYGZvcm1hdEV4Y2x1c2l2ZU1pbmltdW0g5bqU5b2T5piv5biD5bCU5YC8YCxcbiAgaWY6IGDlupTlvZPljLnphY3mqKHlvI8gXCJ7ZmFpbGluZ0tleXdvcmR9XCJgLFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBFcnJvckRhdGEge1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG5cbiAga2V5d29yZDogc3RyaW5nO1xuICBkYXRhUGF0aD86IHN0cmluZztcbiAgc2NoZW1hUGF0aD86IHN0cmluZztcbiAgcGFyYW1zPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcbiAgbWVzc2FnZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFcnJvclNjaGVtYSB7XG4gIC8qKlxuICAgKiDmmK/lkKblrp7ml7bmoKHpqozvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICogLSBgdHJ1ZWAg5q+P5LiA5qyh6YO95qCh6aqMXG4gICAqIC0gYGZhbHNlYCDmj5DkuqTml7bmoKHpqoxcbiAgICovXG4gIGxpdmVWYWxpZGF0ZT86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDoh6rlrprkuYnplJnor6/kv6Hmga/mlofmnKzvvIzplK7lkI3otZ7lkIwgYEVycm9yRGF0YS5rZXl3b3JkYCDlgLxcbiAgICovXG4gIGVycm9ycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgKChvYmo6IEVycm9yRGF0YSkgPT4gc3RyaW5nKSB9O1xuICAvKipcbiAgICog5piv5ZCm56uL5Y2z5ZGI546w6ZSZ6K+v6KeG6KeJ77yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgZmlyc3RWaXN1YWw/OiBib29sZWFuO1xuICAvKipcbiAgICog5piv5ZCm5Y+q5bGV56S66ZSZ6K+v6KeG6KeJ5LiN5pi+56S66ZSZ6K+v5paH5pys77yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgb25seVZpc3VhbD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDmmK/lkKblv73nlaXmn5DkupvmlbDmja7nsbvlnovmoKHpqowgYEVSUk9SU0RFRkFVTFRgXG4gICAqIC0g5YC85aeL57uI5YyF5ZCrIGBEZWxvblNjaGVtYUZvcm1Db25maWcuaW5nb3JlS2V5d29yZHNgXG4gICAqL1xuICBpbmdvcmVLZXl3b3Jkcz86IHN0cmluZ1tdO1xuICAvKipcbiAgICog6Ieq5a6a5LmJ5qCh6aqMXG4gICAqL1xuICB2YWxpZGF0b3I/OiAoXG4gICAgdmFsdWU6IFNGVmFsdWUsXG4gICAgZm9ybVByb3BlcnR5OiBGb3JtUHJvcGVydHksXG4gICAgZm9ybTogUHJvcGVydHlHcm91cCxcbiAgKSA9PiBFcnJvckRhdGFbXSB8IE9ic2VydmFibGU8RXJyb3JEYXRhW10+O1xufVxuIl19