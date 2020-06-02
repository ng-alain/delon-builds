/**
 * @fileoverview added by tsickle
 * Generated from: src/errors.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const ERRORSDEFAULT = {
    'false schema': `布尔模式出错`,
    $ref: `无法找到引用{ref}`,
    additionalItems: `不允许超过{ref}`,
    additionalProperties: `不允许有额外的属性`,
    anyOf: `数据应为 anyOf 所指定的其中一个`,
    dependencies: `应当拥有属性{property}的依赖属性{deps}`,
    enum: `应当是预设定的枚举值之一`,
    format: `格式不正确`,
    // `应当匹配格式 "{format}"`,
    type: `类型应当是 {type}`,
    required: `必填项`,
    maxLength: `至多 {limit} 个字符`,
    minLength: `至少 {limit} 个字符以上`,
    minimum: `必须 {comparison}{limit}`,
    formatMinimum: `必须 {comparison}{limit}`,
    maximum: `必须 {comparison}{limit}`,
    formatMaximum: `必须 {comparison}{limit}`,
    maxItems: `不应多于 {limit} 个项`,
    minItems: `不应少于 {limit} 个项`,
    maxProperties: `不应多于 {limit} 个属性`,
    minProperties: `不应少于 {limit} 个属性`,
    multipleOf: `应当是 {multipleOf} 的整数倍`,
    not: `不应当匹配 "not" schema`,
    oneOf: `只能匹配一个 "oneOf" 中的 schema`,
    pattern: `数据格式不正确`,
    uniqueItems: `不应当含有重复项 (第 {j} 项与第 {i} 项是重复的)`,
    custom: `格式不正确`,
    propertyNames: `属性名 "{propertyName}" 无效`,
    patternRequired: `应当有属性匹配模式 {missingPattern}`,
    switch: `由于 {caseIndex} 失败，未通过 "switch" 校验`,
    const: `应当等于常量`,
    contains: `应当包含一个有效项`,
    formatExclusiveMaximum: `formatExclusiveMaximum 应当是布尔值`,
    formatExclusiveMinimum: `formatExclusiveMinimum 应当是布尔值`,
    if: `应当匹配模式 "{failingKeyword}"`,
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
     * 是否强制在标签上显示 `*` 来表示必填，一般在当使用自定义校验 `validator` 可能需要必填项处理
     * @type {?|undefined}
     */
    ErrorSchema.prototype.showRequired;
    /**
     * 自定义校验
     * @type {?|undefined}
     */
    ErrorSchema.prototype.validator;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvZXJyb3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUlBLE1BQU0sT0FBTyxhQUFhLEdBQUc7SUFDM0IsY0FBYyxFQUFFLFFBQVE7SUFDeEIsSUFBSSxFQUFFLGFBQWE7SUFDbkIsZUFBZSxFQUFFLFlBQVk7SUFDN0Isb0JBQW9CLEVBQUUsV0FBVztJQUNqQyxLQUFLLEVBQUUscUJBQXFCO0lBQzVCLFlBQVksRUFBRSw2QkFBNkI7SUFDM0MsSUFBSSxFQUFFLGNBQWM7SUFDcEIsTUFBTSxFQUFFLE9BQU87O0lBQ2YsSUFBSSxFQUFFLGNBQWM7SUFDcEIsUUFBUSxFQUFFLEtBQUs7SUFDZixTQUFTLEVBQUUsZ0JBQWdCO0lBQzNCLFNBQVMsRUFBRSxrQkFBa0I7SUFDN0IsT0FBTyxFQUFFLHdCQUF3QjtJQUNqQyxhQUFhLEVBQUUsd0JBQXdCO0lBQ3ZDLE9BQU8sRUFBRSx3QkFBd0I7SUFDakMsYUFBYSxFQUFFLHdCQUF3QjtJQUN2QyxRQUFRLEVBQUUsaUJBQWlCO0lBQzNCLFFBQVEsRUFBRSxpQkFBaUI7SUFDM0IsYUFBYSxFQUFFLGtCQUFrQjtJQUNqQyxhQUFhLEVBQUUsa0JBQWtCO0lBQ2pDLFVBQVUsRUFBRSx1QkFBdUI7SUFDbkMsR0FBRyxFQUFFLG9CQUFvQjtJQUN6QixLQUFLLEVBQUUsMEJBQTBCO0lBQ2pDLE9BQU8sRUFBRSxTQUFTO0lBQ2xCLFdBQVcsRUFBRSxnQ0FBZ0M7SUFDN0MsTUFBTSxFQUFFLE9BQU87SUFDZixhQUFhLEVBQUUseUJBQXlCO0lBQ3hDLGVBQWUsRUFBRSw0QkFBNEI7SUFDN0MsTUFBTSxFQUFFLG1DQUFtQztJQUMzQyxLQUFLLEVBQUUsUUFBUTtJQUNmLFFBQVEsRUFBRSxXQUFXO0lBQ3JCLHNCQUFzQixFQUFFLCtCQUErQjtJQUN2RCxzQkFBc0IsRUFBRSwrQkFBK0I7SUFDdkQsRUFBRSxFQUFFLDJCQUEyQjtDQUNoQzs7OztBQUVELCtCQVFDOzs7SUFMQyw0QkFBZ0I7O0lBQ2hCLDZCQUFrQjs7SUFDbEIsK0JBQW9COztJQUNwQiwyQkFBZ0M7O0lBQ2hDLDRCQUFpQjs7Ozs7O0FBR25CLGlDQWtDQzs7Ozs7Ozs7SUE1QkMsbUNBQXVCOzs7OztJQUl2Qiw2QkFBa0U7Ozs7O0lBSWxFLGtDQUFzQjs7Ozs7SUFJdEIsaUNBQXFCOzs7Ozs7SUFLckIscUNBQTBCOzs7OztJQUsxQixtQ0FBdUI7Ozs7O0lBS3ZCLGdDQUF1SCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFNGVmFsdWUgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBGb3JtUHJvcGVydHksIFByb3BlcnR5R3JvdXAgfSBmcm9tICcuL21vZGVsL2Zvcm0ucHJvcGVydHknO1xuXG5leHBvcnQgY29uc3QgRVJST1JTREVGQVVMVCA9IHtcbiAgJ2ZhbHNlIHNjaGVtYSc6IGDluIPlsJTmqKHlvI/lh7rplJlgLFxuICAkcmVmOiBg5peg5rOV5om+5Yiw5byV55Soe3JlZn1gLFxuICBhZGRpdGlvbmFsSXRlbXM6IGDkuI3lhYHorrjotoXov4d7cmVmfWAsXG4gIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiBg5LiN5YWB6K645pyJ6aKd5aSW55qE5bGe5oCnYCxcbiAgYW55T2Y6IGDmlbDmja7lupTkuLogYW55T2Yg5omA5oyH5a6a55qE5YW25Lit5LiA5LiqYCxcbiAgZGVwZW5kZW5jaWVzOiBg5bqU5b2T5oul5pyJ5bGe5oCne3Byb3BlcnR5feeahOS+nei1luWxnuaAp3tkZXBzfWAsXG4gIGVudW06IGDlupTlvZPmmK/pooTorr7lrprnmoTmnprkuL7lgLzkuYvkuIBgLFxuICBmb3JtYXQ6IGDmoLzlvI/kuI3mraPnoa5gLCAvLyBg5bqU5b2T5Yy56YWN5qC85byPIFwie2Zvcm1hdH1cImAsXG4gIHR5cGU6IGDnsbvlnovlupTlvZPmmK8ge3R5cGV9YCxcbiAgcmVxdWlyZWQ6IGDlv4XloavpoblgLFxuICBtYXhMZW5ndGg6IGDoh7PlpJoge2xpbWl0fSDkuKrlrZfnrKZgLFxuICBtaW5MZW5ndGg6IGDoh7PlsJEge2xpbWl0fSDkuKrlrZfnrKbku6XkuIpgLFxuICBtaW5pbXVtOiBg5b+F6aG7IHtjb21wYXJpc29ufXtsaW1pdH1gLFxuICBmb3JtYXRNaW5pbXVtOiBg5b+F6aG7IHtjb21wYXJpc29ufXtsaW1pdH1gLFxuICBtYXhpbXVtOiBg5b+F6aG7IHtjb21wYXJpc29ufXtsaW1pdH1gLFxuICBmb3JtYXRNYXhpbXVtOiBg5b+F6aG7IHtjb21wYXJpc29ufXtsaW1pdH1gLFxuICBtYXhJdGVtczogYOS4jeW6lOWkmuS6jiB7bGltaXR9IOS4qumhuWAsXG4gIG1pbkl0ZW1zOiBg5LiN5bqU5bCR5LqOIHtsaW1pdH0g5Liq6aG5YCxcbiAgbWF4UHJvcGVydGllczogYOS4jeW6lOWkmuS6jiB7bGltaXR9IOS4quWxnuaAp2AsXG4gIG1pblByb3BlcnRpZXM6IGDkuI3lupTlsJHkuo4ge2xpbWl0fSDkuKrlsZ7mgKdgLFxuICBtdWx0aXBsZU9mOiBg5bqU5b2T5pivIHttdWx0aXBsZU9mfSDnmoTmlbTmlbDlgI1gLFxuICBub3Q6IGDkuI3lupTlvZPljLnphY0gXCJub3RcIiBzY2hlbWFgLFxuICBvbmVPZjogYOWPquiDveWMuemFjeS4gOS4qiBcIm9uZU9mXCIg5Lit55qEIHNjaGVtYWAsXG4gIHBhdHRlcm46IGDmlbDmja7moLzlvI/kuI3mraPnoa5gLFxuICB1bmlxdWVJdGVtczogYOS4jeW6lOW9k+WQq+aciemHjeWkjemhuSAo56ysIHtqfSDpobnkuI7nrKwge2l9IOmhueaYr+mHjeWkjeeahClgLFxuICBjdXN0b206IGDmoLzlvI/kuI3mraPnoa5gLFxuICBwcm9wZXJ0eU5hbWVzOiBg5bGe5oCn5ZCNIFwie3Byb3BlcnR5TmFtZX1cIiDml6DmlYhgLFxuICBwYXR0ZXJuUmVxdWlyZWQ6IGDlupTlvZPmnInlsZ7mgKfljLnphY3mqKHlvI8ge21pc3NpbmdQYXR0ZXJufWAsXG4gIHN3aXRjaDogYOeUseS6jiB7Y2FzZUluZGV4fSDlpLHotKXvvIzmnKrpgJrov4cgXCJzd2l0Y2hcIiDmoKHpqoxgLFxuICBjb25zdDogYOW6lOW9k+etieS6juW4uOmHj2AsXG4gIGNvbnRhaW5zOiBg5bqU5b2T5YyF5ZCr5LiA5Liq5pyJ5pWI6aG5YCxcbiAgZm9ybWF0RXhjbHVzaXZlTWF4aW11bTogYGZvcm1hdEV4Y2x1c2l2ZU1heGltdW0g5bqU5b2T5piv5biD5bCU5YC8YCxcbiAgZm9ybWF0RXhjbHVzaXZlTWluaW11bTogYGZvcm1hdEV4Y2x1c2l2ZU1pbmltdW0g5bqU5b2T5piv5biD5bCU5YC8YCxcbiAgaWY6IGDlupTlvZPljLnphY3mqKHlvI8gXCJ7ZmFpbGluZ0tleXdvcmR9XCJgLFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBFcnJvckRhdGEge1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG5cbiAga2V5d29yZDogc3RyaW5nO1xuICBkYXRhUGF0aD86IHN0cmluZztcbiAgc2NoZW1hUGF0aD86IHN0cmluZztcbiAgcGFyYW1zPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcbiAgbWVzc2FnZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFcnJvclNjaGVtYSB7XG4gIC8qKlxuICAgKiDmmK/lkKblrp7ml7bmoKHpqozvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICogLSBgdHJ1ZWAg5q+P5LiA5qyh6YO95qCh6aqMXG4gICAqIC0gYGZhbHNlYCDmj5DkuqTml7bmoKHpqoxcbiAgICovXG4gIGxpdmVWYWxpZGF0ZT86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDoh6rlrprkuYnplJnor6/kv6Hmga/mlofmnKzvvIzplK7lkI3otZ7lkIwgYEVycm9yRGF0YS5rZXl3b3JkYCDlgLxcbiAgICovXG4gIGVycm9ycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgKChvYmo6IEVycm9yRGF0YSkgPT4gc3RyaW5nKSB9O1xuICAvKipcbiAgICog5piv5ZCm56uL5Y2z5ZGI546w6ZSZ6K+v6KeG6KeJ77yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgZmlyc3RWaXN1YWw/OiBib29sZWFuO1xuICAvKipcbiAgICog5piv5ZCm5Y+q5bGV56S66ZSZ6K+v6KeG6KeJ5LiN5pi+56S66ZSZ6K+v5paH5pys77yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgb25seVZpc3VhbD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDmmK/lkKblv73nlaXmn5DkupvmlbDmja7nsbvlnovmoKHpqowgYEVSUk9SU0RFRkFVTFRgXG4gICAqIC0g5YC85aeL57uI5YyF5ZCrIGBEZWxvblNjaGVtYUZvcm1Db25maWcuaW5nb3JlS2V5d29yZHNgXG4gICAqL1xuICBpbmdvcmVLZXl3b3Jkcz86IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiDmmK/lkKblvLrliLblnKjmoIfnrb7kuIrmmL7npLogYCpgIOadpeihqOekuuW/heWhq++8jOS4gOiIrOWcqOW9k+S9v+eUqOiHquWumuS5ieagoemqjCBgdmFsaWRhdG9yYCDlj6/og73pnIDopoHlv4XloavpobnlpITnkIZcbiAgICovXG4gIHNob3dSZXF1aXJlZD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOiHquWumuS5ieagoemqjFxuICAgKi9cbiAgdmFsaWRhdG9yPzogKHZhbHVlOiBTRlZhbHVlLCBmb3JtUHJvcGVydHk6IEZvcm1Qcm9wZXJ0eSwgZm9ybTogUHJvcGVydHlHcm91cCkgPT4gRXJyb3JEYXRhW10gfCBPYnNlcnZhYmxlPEVycm9yRGF0YVtdPjtcbn1cbiJdfQ==