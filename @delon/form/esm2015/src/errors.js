/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
export const ERRORSDEFAULT = {
    'false schema': `布尔模式出错`,
    '$ref': `无法找到引用{ref}`,
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
/** @type {?|undefined} */
ErrorData.prototype._custom;
/**
 * @record
 */
export function ErrorSchema() { }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvZXJyb3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsYUFBYSxhQUFhLEdBQUc7SUFDM0IsY0FBYyxFQUFVLFFBQVE7SUFDaEMsTUFBTSxFQUFrQixhQUFhO0lBQ3JDLGVBQWUsRUFBUyxZQUFZO0lBQ3BDLG9CQUFvQixFQUFJLFdBQVc7SUFDbkMsS0FBSyxFQUFtQixxQkFBcUI7SUFDN0MsWUFBWSxFQUFZLDZCQUE2QjtJQUNyRCxJQUFJLEVBQW9CLGNBQWM7SUFDdEMsTUFBTSxFQUFrQixPQUFPOztJQUMvQixJQUFJLEVBQW9CLGNBQWM7SUFDdEMsUUFBUSxFQUFnQixLQUFLO0lBQzdCLFNBQVMsRUFBZSxnQkFBZ0I7SUFDeEMsU0FBUyxFQUFlLGtCQUFrQjtJQUMxQyxPQUFPLEVBQWlCLHdCQUF3QjtJQUNoRCxhQUFhLEVBQVcsd0JBQXdCO0lBQ2hELE9BQU8sRUFBaUIsd0JBQXdCO0lBQ2hELGFBQWEsRUFBVyx3QkFBd0I7SUFDaEQsUUFBUSxFQUFnQixpQkFBaUI7SUFDekMsUUFBUSxFQUFnQixpQkFBaUI7SUFDekMsYUFBYSxFQUFXLGtCQUFrQjtJQUMxQyxhQUFhLEVBQVcsa0JBQWtCO0lBQzFDLFVBQVUsRUFBYyx1QkFBdUI7SUFDL0MsR0FBRyxFQUFxQixvQkFBb0I7SUFDNUMsS0FBSyxFQUFtQiwwQkFBMEI7SUFDbEQsT0FBTyxFQUFpQixTQUFTO0lBQ2pDLFdBQVcsRUFBYSxnQ0FBZ0M7SUFDeEQsTUFBTSxFQUFrQixPQUFPO0lBQy9CLGFBQWEsRUFBVyx5QkFBeUI7SUFDakQsZUFBZSxFQUFTLDRCQUE0QjtJQUNwRCxNQUFNLEVBQWtCLG1DQUFtQztJQUMzRCxLQUFLLEVBQW1CLFFBQVE7SUFDaEMsUUFBUSxFQUFnQixXQUFXO0lBQ25DLHNCQUFzQixFQUFFLCtCQUErQjtJQUN2RCxzQkFBc0IsRUFBRSwrQkFBK0I7SUFDdkQsRUFBRSxFQUFzQiwyQkFBMkI7Q0FDcEQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgRm9ybVByb3BlcnR5LCBQcm9wZXJ0eUdyb3VwIH0gZnJvbSAnLi9tb2RlbC9mb3JtLnByb3BlcnR5JztcclxuXHJcbmV4cG9ydCBjb25zdCBFUlJPUlNERUZBVUxUID0ge1xyXG4gICdmYWxzZSBzY2hlbWEnOiAgICAgICAgIGDluIPlsJTmqKHlvI/lh7rplJlgLFxyXG4gICckcmVmJzogICAgICAgICAgICAgICAgIGDml6Dms5Xmib7liLDlvJXnlKh7cmVmfWAsXHJcbiAgYWRkaXRpb25hbEl0ZW1zOiAgICAgICAgYOS4jeWFgeiuuOi2hei/h3tyZWZ9YCxcclxuICBhZGRpdGlvbmFsUHJvcGVydGllczogICBg5LiN5YWB6K645pyJ6aKd5aSW55qE5bGe5oCnYCxcclxuICBhbnlPZjogICAgICAgICAgICAgICAgICBg5pWw5o2u5bqU5Li6IGFueU9mIOaJgOaMh+WumueahOWFtuS4reS4gOS4qmAsXHJcbiAgZGVwZW5kZW5jaWVzOiAgICAgICAgICAgYOW6lOW9k+aLpeacieWxnuaAp3twcm9wZXJ0eX3nmoTkvp3otZblsZ7mgKd7ZGVwc31gLFxyXG4gIGVudW06ICAgICAgICAgICAgICAgICAgIGDlupTlvZPmmK/pooTorr7lrprnmoTmnprkuL7lgLzkuYvkuIBgLFxyXG4gIGZvcm1hdDogICAgICAgICAgICAgICAgIGDmoLzlvI/kuI3mraPnoa5gLCAvLyBg5bqU5b2T5Yy56YWN5qC85byPIFwie2Zvcm1hdH1cImAsXHJcbiAgdHlwZTogICAgICAgICAgICAgICAgICAgYOexu+Wei+W6lOW9k+aYryB7dHlwZX1gLFxyXG4gIHJlcXVpcmVkOiAgICAgICAgICAgICAgIGDlv4XloavpoblgLFxyXG4gIG1heExlbmd0aDogICAgICAgICAgICAgIGDoh7PlpJoge2xpbWl0fSDkuKrlrZfnrKZgLFxyXG4gIG1pbkxlbmd0aDogICAgICAgICAgICAgIGDoh7PlsJEge2xpbWl0fSDkuKrlrZfnrKbku6XkuIpgLFxyXG4gIG1pbmltdW06ICAgICAgICAgICAgICAgIGDlv4Xpobsge2NvbXBhcmlzb259e2xpbWl0fWAsXHJcbiAgZm9ybWF0TWluaW11bTogICAgICAgICAgYOW/hemhuyB7Y29tcGFyaXNvbn17bGltaXR9YCxcclxuICBtYXhpbXVtOiAgICAgICAgICAgICAgICBg5b+F6aG7IHtjb21wYXJpc29ufXtsaW1pdH1gLFxyXG4gIGZvcm1hdE1heGltdW06ICAgICAgICAgIGDlv4Xpobsge2NvbXBhcmlzb259e2xpbWl0fWAsXHJcbiAgbWF4SXRlbXM6ICAgICAgICAgICAgICAgYOS4jeW6lOWkmuS6jiB7bGltaXR9IOS4qumhuWAsXHJcbiAgbWluSXRlbXM6ICAgICAgICAgICAgICAgYOS4jeW6lOWwkeS6jiB7bGltaXR9IOS4qumhuWAsXHJcbiAgbWF4UHJvcGVydGllczogICAgICAgICAgYOS4jeW6lOWkmuS6jiB7bGltaXR9IOS4quWxnuaAp2AsXHJcbiAgbWluUHJvcGVydGllczogICAgICAgICAgYOS4jeW6lOWwkeS6jiB7bGltaXR9IOS4quWxnuaAp2AsXHJcbiAgbXVsdGlwbGVPZjogICAgICAgICAgICAgYOW6lOW9k+aYryB7bXVsdGlwbGVPZn0g55qE5pW05pWw5YCNYCxcclxuICBub3Q6ICAgICAgICAgICAgICAgICAgICBg5LiN5bqU5b2T5Yy56YWNIFwibm90XCIgc2NoZW1hYCxcclxuICBvbmVPZjogICAgICAgICAgICAgICAgICBg5Y+q6IO95Yy56YWN5LiA5LiqIFwib25lT2ZcIiDkuK3nmoQgc2NoZW1hYCxcclxuICBwYXR0ZXJuOiAgICAgICAgICAgICAgICBg5pWw5o2u5qC85byP5LiN5q2j56GuYCxcclxuICB1bmlxdWVJdGVtczogICAgICAgICAgICBg5LiN5bqU5b2T5ZCr5pyJ6YeN5aSN6aG5ICjnrKwge2p9IOmhueS4juesrCB7aX0g6aG55piv6YeN5aSN55qEKWAsXHJcbiAgY3VzdG9tOiAgICAgICAgICAgICAgICAgYOagvOW8j+S4jeato+ehrmAsXHJcbiAgcHJvcGVydHlOYW1lczogICAgICAgICAgYOWxnuaAp+WQjSBcIntwcm9wZXJ0eU5hbWV9XCIg5peg5pWIYCxcclxuICBwYXR0ZXJuUmVxdWlyZWQ6ICAgICAgICBg5bqU5b2T5pyJ5bGe5oCn5Yy56YWN5qih5byPIHttaXNzaW5nUGF0dGVybn1gLFxyXG4gIHN3aXRjaDogICAgICAgICAgICAgICAgIGDnlLHkuo4ge2Nhc2VJbmRleH0g5aSx6LSl77yM5pyq6YCa6L+HIFwic3dpdGNoXCIg5qCh6aqMYCxcclxuICBjb25zdDogICAgICAgICAgICAgICAgICBg5bqU5b2T562J5LqO5bi46YePYCxcclxuICBjb250YWluczogICAgICAgICAgICAgICBg5bqU5b2T5YyF5ZCr5LiA5Liq5pyJ5pWI6aG5YCxcclxuICBmb3JtYXRFeGNsdXNpdmVNYXhpbXVtOiBgZm9ybWF0RXhjbHVzaXZlTWF4aW11bSDlupTlvZPmmK/luIPlsJTlgLxgLFxyXG4gIGZvcm1hdEV4Y2x1c2l2ZU1pbmltdW06IGBmb3JtYXRFeGNsdXNpdmVNaW5pbXVtIOW6lOW9k+aYr+W4g+WwlOWAvGAsXHJcbiAgaWY6ICAgICAgICAgICAgICAgICAgICAgYOW6lOW9k+WMuemFjeaooeW8jyBcIntmYWlsaW5nS2V5d29yZH1cImAsXHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEVycm9yRGF0YSB7XHJcbiAga2V5d29yZDogc3RyaW5nO1xyXG4gIGRhdGFQYXRoPzogc3RyaW5nO1xyXG4gIHNjaGVtYVBhdGg/OiBzdHJpbmc7XHJcbiAgcGFyYW1zPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcclxuICBtZXNzYWdlPzogc3RyaW5nO1xyXG4gIF9jdXN0b20/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEVycm9yU2NoZW1hIHtcclxuICAvKipcclxuICAgKiDmmK/lkKblrp7ml7bmoKHpqozvvIzpu5jorqTvvJpgdHJ1ZWBcclxuICAgKiAtIGB0cnVlYCDmr4/kuIDmrKHpg73moKHpqoxcclxuICAgKiAtIGBmYWxzZWAg5o+Q5Lqk5pe25qCh6aqMXHJcbiAgICovXHJcbiAgbGl2ZVZhbGlkYXRlPzogYm9vbGVhbjtcclxuICAvKipcclxuICAgKiDoh6rlrprkuYnplJnor6/kv6Hmga/mlofmnKzvvIzplK7lkI3otZ7lkIwgYEVycm9yRGF0YS5rZXl3b3JkYCDlgLxcclxuICAgKi9cclxuICBlcnJvcnM/OiB7IFsga2V5OiBzdHJpbmcgXTogc3RyaW5nIHwgKChvYmo6IEVycm9yRGF0YSkgPT4gc3RyaW5nKSB9O1xyXG4gIC8qKlxyXG4gICAqIOaYr+WQpueri+WNs+WRiOeOsOmUmeivr+inhuinie+8jOm7mOiupO+8mmBmYWxzZWBcclxuICAgKi9cclxuICBmaXJzdFZpc3VhbD86IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICog5piv5ZCm5Y+q5bGV56S66ZSZ6K+v6KeG6KeJ5LiN5pi+56S66ZSZ6K+v5paH5pys77yM6buY6K6k77yaYGZhbHNlYFxyXG4gICAqL1xyXG4gIG9ubHlWaXN1YWw/OiBib29sZWFuO1xyXG4gIC8qKlxyXG4gICAqIOaYr+WQpuW/veeVpeafkOS6m+aVsOaNruexu+Wei+agoemqjCBgRVJST1JTREVGQVVMVGBcclxuICAgKiAtIOWAvOWni+e7iOWMheWQqyBgRGVsb25TY2hlbWFGb3JtQ29uZmlnLmluZ29yZUtleXdvcmRzYFxyXG4gICAqL1xyXG4gIGluZ29yZUtleXdvcmRzPzogc3RyaW5nW107XHJcbiAgLyoqXHJcbiAgICog6Ieq5a6a5LmJ5qCh6aqMXHJcbiAgICovXHJcbiAgdmFsaWRhdG9yPzogKHZhbHVlOiBhbnksIGZvcm1Qcm9wZXJ0eTogRm9ybVByb3BlcnR5LCBmb3JtOiBQcm9wZXJ0eUdyb3VwKSA9PiBFcnJvckRhdGFbXSB8IE9ic2VydmFibGU8RXJyb3JEYXRhW10+O1xyXG59XHJcbiJdfQ==