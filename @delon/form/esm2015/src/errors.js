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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvZXJyb3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsYUFBYSxhQUFhLEdBQUc7SUFDM0IsY0FBYyxFQUFVLFFBQVE7SUFDaEMsTUFBTSxFQUFrQixhQUFhO0lBQ3JDLGVBQWUsRUFBUyxZQUFZO0lBQ3BDLG9CQUFvQixFQUFJLFdBQVc7SUFDbkMsS0FBSyxFQUFtQixxQkFBcUI7SUFDN0MsWUFBWSxFQUFZLDZCQUE2QjtJQUNyRCxJQUFJLEVBQW9CLGNBQWM7SUFDdEMsTUFBTSxFQUFrQixPQUFPOztJQUMvQixJQUFJLEVBQW9CLGNBQWM7SUFDdEMsUUFBUSxFQUFnQixLQUFLO0lBQzdCLFNBQVMsRUFBZSxnQkFBZ0I7SUFDeEMsU0FBUyxFQUFlLGtCQUFrQjtJQUMxQyxPQUFPLEVBQWlCLHdCQUF3QjtJQUNoRCxhQUFhLEVBQVcsd0JBQXdCO0lBQ2hELE9BQU8sRUFBaUIsd0JBQXdCO0lBQ2hELGFBQWEsRUFBVyx3QkFBd0I7SUFDaEQsUUFBUSxFQUFnQixpQkFBaUI7SUFDekMsUUFBUSxFQUFnQixpQkFBaUI7SUFDekMsYUFBYSxFQUFXLGtCQUFrQjtJQUMxQyxhQUFhLEVBQVcsa0JBQWtCO0lBQzFDLFVBQVUsRUFBYyx1QkFBdUI7SUFDL0MsR0FBRyxFQUFxQixvQkFBb0I7SUFDNUMsS0FBSyxFQUFtQiwwQkFBMEI7SUFDbEQsT0FBTyxFQUFpQixTQUFTO0lBQ2pDLFdBQVcsRUFBYSxnQ0FBZ0M7SUFDeEQsTUFBTSxFQUFrQixPQUFPO0lBQy9CLGFBQWEsRUFBVyx5QkFBeUI7SUFDakQsZUFBZSxFQUFTLDRCQUE0QjtJQUNwRCxNQUFNLEVBQWtCLG1DQUFtQztJQUMzRCxLQUFLLEVBQW1CLFFBQVE7SUFDaEMsUUFBUSxFQUFnQixXQUFXO0lBQ25DLHNCQUFzQixFQUFFLCtCQUErQjtJQUN2RCxzQkFBc0IsRUFBRSwrQkFBK0I7SUFDdkQsRUFBRSxFQUFzQiwyQkFBMkI7Q0FDcEQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEZvcm1Qcm9wZXJ0eSwgUHJvcGVydHlHcm91cCB9IGZyb20gJy4vbW9kZWwvZm9ybS5wcm9wZXJ0eSc7XG5cbmV4cG9ydCBjb25zdCBFUlJPUlNERUZBVUxUID0ge1xuICAnZmFsc2Ugc2NoZW1hJzogICAgICAgICBg5biD5bCU5qih5byP5Ye66ZSZYCxcbiAgJyRyZWYnOiAgICAgICAgICAgICAgICAgYOaXoOazleaJvuWIsOW8leeUqHtyZWZ9YCxcbiAgYWRkaXRpb25hbEl0ZW1zOiAgICAgICAgYOS4jeWFgeiuuOi2hei/h3tyZWZ9YCxcbiAgYWRkaXRpb25hbFByb3BlcnRpZXM6ICAgYOS4jeWFgeiuuOaciemineWklueahOWxnuaAp2AsXG4gIGFueU9mOiAgICAgICAgICAgICAgICAgIGDmlbDmja7lupTkuLogYW55T2Yg5omA5oyH5a6a55qE5YW25Lit5LiA5LiqYCxcbiAgZGVwZW5kZW5jaWVzOiAgICAgICAgICAgYOW6lOW9k+aLpeacieWxnuaAp3twcm9wZXJ0eX3nmoTkvp3otZblsZ7mgKd7ZGVwc31gLFxuICBlbnVtOiAgICAgICAgICAgICAgICAgICBg5bqU5b2T5piv6aKE6K6+5a6a55qE5p6a5Li+5YC85LmL5LiAYCxcbiAgZm9ybWF0OiAgICAgICAgICAgICAgICAgYOagvOW8j+S4jeato+ehrmAsIC8vIGDlupTlvZPljLnphY3moLzlvI8gXCJ7Zm9ybWF0fVwiYCxcbiAgdHlwZTogICAgICAgICAgICAgICAgICAgYOexu+Wei+W6lOW9k+aYryB7dHlwZX1gLFxuICByZXF1aXJlZDogICAgICAgICAgICAgICBg5b+F5aGr6aG5YCxcbiAgbWF4TGVuZ3RoOiAgICAgICAgICAgICAgYOiHs+WkmiB7bGltaXR9IOS4quWtl+espmAsXG4gIG1pbkxlbmd0aDogICAgICAgICAgICAgIGDoh7PlsJEge2xpbWl0fSDkuKrlrZfnrKbku6XkuIpgLFxuICBtaW5pbXVtOiAgICAgICAgICAgICAgICBg5b+F6aG7IHtjb21wYXJpc29ufXtsaW1pdH1gLFxuICBmb3JtYXRNaW5pbXVtOiAgICAgICAgICBg5b+F6aG7IHtjb21wYXJpc29ufXtsaW1pdH1gLFxuICBtYXhpbXVtOiAgICAgICAgICAgICAgICBg5b+F6aG7IHtjb21wYXJpc29ufXtsaW1pdH1gLFxuICBmb3JtYXRNYXhpbXVtOiAgICAgICAgICBg5b+F6aG7IHtjb21wYXJpc29ufXtsaW1pdH1gLFxuICBtYXhJdGVtczogICAgICAgICAgICAgICBg5LiN5bqU5aSa5LqOIHtsaW1pdH0g5Liq6aG5YCxcbiAgbWluSXRlbXM6ICAgICAgICAgICAgICAgYOS4jeW6lOWwkeS6jiB7bGltaXR9IOS4qumhuWAsXG4gIG1heFByb3BlcnRpZXM6ICAgICAgICAgIGDkuI3lupTlpJrkuo4ge2xpbWl0fSDkuKrlsZ7mgKdgLFxuICBtaW5Qcm9wZXJ0aWVzOiAgICAgICAgICBg5LiN5bqU5bCR5LqOIHtsaW1pdH0g5Liq5bGe5oCnYCxcbiAgbXVsdGlwbGVPZjogICAgICAgICAgICAgYOW6lOW9k+aYryB7bXVsdGlwbGVPZn0g55qE5pW05pWw5YCNYCxcbiAgbm90OiAgICAgICAgICAgICAgICAgICAgYOS4jeW6lOW9k+WMuemFjSBcIm5vdFwiIHNjaGVtYWAsXG4gIG9uZU9mOiAgICAgICAgICAgICAgICAgIGDlj6rog73ljLnphY3kuIDkuKogXCJvbmVPZlwiIOS4reeahCBzY2hlbWFgLFxuICBwYXR0ZXJuOiAgICAgICAgICAgICAgICBg5pWw5o2u5qC85byP5LiN5q2j56GuYCxcbiAgdW5pcXVlSXRlbXM6ICAgICAgICAgICAgYOS4jeW6lOW9k+WQq+aciemHjeWkjemhuSAo56ysIHtqfSDpobnkuI7nrKwge2l9IOmhueaYr+mHjeWkjeeahClgLFxuICBjdXN0b206ICAgICAgICAgICAgICAgICBg5qC85byP5LiN5q2j56GuYCxcbiAgcHJvcGVydHlOYW1lczogICAgICAgICAgYOWxnuaAp+WQjSBcIntwcm9wZXJ0eU5hbWV9XCIg5peg5pWIYCxcbiAgcGF0dGVyblJlcXVpcmVkOiAgICAgICAgYOW6lOW9k+acieWxnuaAp+WMuemFjeaooeW8jyB7bWlzc2luZ1BhdHRlcm59YCxcbiAgc3dpdGNoOiAgICAgICAgICAgICAgICAgYOeUseS6jiB7Y2FzZUluZGV4fSDlpLHotKXvvIzmnKrpgJrov4cgXCJzd2l0Y2hcIiDmoKHpqoxgLFxuICBjb25zdDogICAgICAgICAgICAgICAgICBg5bqU5b2T562J5LqO5bi46YePYCxcbiAgY29udGFpbnM6ICAgICAgICAgICAgICAgYOW6lOW9k+WMheWQq+S4gOS4quacieaViOmhuWAsXG4gIGZvcm1hdEV4Y2x1c2l2ZU1heGltdW06IGBmb3JtYXRFeGNsdXNpdmVNYXhpbXVtIOW6lOW9k+aYr+W4g+WwlOWAvGAsXG4gIGZvcm1hdEV4Y2x1c2l2ZU1pbmltdW06IGBmb3JtYXRFeGNsdXNpdmVNaW5pbXVtIOW6lOW9k+aYr+W4g+WwlOWAvGAsXG4gIGlmOiAgICAgICAgICAgICAgICAgICAgIGDlupTlvZPljLnphY3mqKHlvI8gXCJ7ZmFpbGluZ0tleXdvcmR9XCJgLFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBFcnJvckRhdGEge1xuICBrZXl3b3JkOiBzdHJpbmc7XG4gIGRhdGFQYXRoPzogc3RyaW5nO1xuICBzY2hlbWFQYXRoPzogc3RyaW5nO1xuICBwYXJhbXM/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xuICBtZXNzYWdlPzogc3RyaW5nO1xuICBfY3VzdG9tPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFcnJvclNjaGVtYSB7XG4gIC8qKlxuICAgKiDmmK/lkKblrp7ml7bmoKHpqozvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICogLSBgdHJ1ZWAg5q+P5LiA5qyh6YO95qCh6aqMXG4gICAqIC0gYGZhbHNlYCDmj5DkuqTml7bmoKHpqoxcbiAgICovXG4gIGxpdmVWYWxpZGF0ZT86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDoh6rlrprkuYnplJnor6/kv6Hmga/mlofmnKzvvIzplK7lkI3otZ7lkIwgYEVycm9yRGF0YS5rZXl3b3JkYCDlgLxcbiAgICovXG4gIGVycm9ycz86IHsgWyBrZXk6IHN0cmluZyBdOiBzdHJpbmcgfCAoKG9iajogRXJyb3JEYXRhKSA9PiBzdHJpbmcpIH07XG4gIC8qKlxuICAgKiDmmK/lkKbnq4vljbPlkYjnjrDplJnor6/op4bop4nvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBmaXJzdFZpc3VhbD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDmmK/lkKblj6rlsZXnpLrplJnor6/op4bop4nkuI3mmL7npLrplJnor6/mlofmnKzvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBvbmx5VmlzdWFsPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOaYr+WQpuW/veeVpeafkOS6m+aVsOaNruexu+Wei+agoemqjCBgRVJST1JTREVGQVVMVGBcbiAgICogLSDlgLzlp4vnu4jljIXlkKsgYERlbG9uU2NoZW1hRm9ybUNvbmZpZy5pbmdvcmVLZXl3b3Jkc2BcbiAgICovXG4gIGluZ29yZUtleXdvcmRzPzogc3RyaW5nW107XG4gIC8qKlxuICAgKiDoh6rlrprkuYnmoKHpqoxcbiAgICovXG4gIHZhbGlkYXRvcj86ICh2YWx1ZTogYW55LCBmb3JtUHJvcGVydHk6IEZvcm1Qcm9wZXJ0eSwgZm9ybTogUHJvcGVydHlHcm91cCkgPT4gRXJyb3JEYXRhW10gfCBPYnNlcnZhYmxlPEVycm9yRGF0YVtdPjtcbn1cbiJdfQ==