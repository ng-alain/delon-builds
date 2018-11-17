/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
export var ERRORSDEFAULT = {
    'false schema': "\u5E03\u5C14\u6A21\u5F0F\u51FA\u9519",
    '$ref': "\u65E0\u6CD5\u627E\u5230\u5F15\u7528{ref}",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvZXJyb3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsV0FBYSxhQUFhLEdBQUc7SUFDM0IsY0FBYyxFQUFVLHNDQUFRO0lBQ2hDLE1BQU0sRUFBa0IsMkNBQWE7SUFDckMsZUFBZSxFQUFTLHFDQUFZO0lBQ3BDLG9CQUFvQixFQUFJLHdEQUFXO0lBQ25DLEtBQUssRUFBbUIsaUZBQXFCO0lBQzdDLFlBQVksRUFBWSxvRkFBNkI7SUFDckQsSUFBSSxFQUFvQiwwRUFBYztJQUN0QyxNQUFNLEVBQWtCLGdDQUFPOztJQUMvQixJQUFJLEVBQW9CLHVDQUFjO0lBQ3RDLFFBQVEsRUFBZ0Isb0JBQUs7SUFDN0IsU0FBUyxFQUFlLHlDQUFnQjtJQUN4QyxTQUFTLEVBQWUscURBQWtCO0lBQzFDLE9BQU8sRUFBaUIsa0NBQXdCO0lBQ2hELGFBQWEsRUFBVyxrQ0FBd0I7SUFDaEQsT0FBTyxFQUFpQixrQ0FBd0I7SUFDaEQsYUFBYSxFQUFXLGtDQUF3QjtJQUNoRCxRQUFRLEVBQWdCLCtDQUFpQjtJQUN6QyxRQUFRLEVBQWdCLCtDQUFpQjtJQUN6QyxhQUFhLEVBQVcscURBQWtCO0lBQzFDLGFBQWEsRUFBVyxxREFBa0I7SUFDMUMsVUFBVSxFQUFjLDBEQUF1QjtJQUMvQyxHQUFHLEVBQXFCLCtDQUFvQjtJQUM1QyxLQUFLLEVBQW1CLG9FQUEwQjtJQUNsRCxPQUFPLEVBQWlCLDRDQUFTO0lBQ2pDLFdBQVcsRUFBYSxxSEFBZ0M7SUFDeEQsTUFBTSxFQUFrQixnQ0FBTztJQUMvQixhQUFhLEVBQVcsb0RBQXlCO0lBQ2pELGVBQWUsRUFBUyx5RUFBNEI7SUFDcEQsTUFBTSxFQUFrQix1RkFBbUM7SUFDM0QsS0FBSyxFQUFtQixzQ0FBUTtJQUNoQyxRQUFRLEVBQWdCLHdEQUFXO0lBQ25DLHNCQUFzQixFQUFFLDZEQUErQjtJQUN2RCxzQkFBc0IsRUFBRSw2REFBK0I7SUFDdkQsRUFBRSxFQUFzQiwyREFBMkI7Q0FDcEQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEZvcm1Qcm9wZXJ0eSwgUHJvcGVydHlHcm91cCB9IGZyb20gJy4vbW9kZWwvZm9ybS5wcm9wZXJ0eSc7XG5cbmV4cG9ydCBjb25zdCBFUlJPUlNERUZBVUxUID0ge1xuICAnZmFsc2Ugc2NoZW1hJzogICAgICAgICBg5biD5bCU5qih5byP5Ye66ZSZYCxcbiAgJyRyZWYnOiAgICAgICAgICAgICAgICAgYOaXoOazleaJvuWIsOW8leeUqHtyZWZ9YCxcbiAgYWRkaXRpb25hbEl0ZW1zOiAgICAgICAgYOS4jeWFgeiuuOi2hei/h3tyZWZ9YCxcbiAgYWRkaXRpb25hbFByb3BlcnRpZXM6ICAgYOS4jeWFgeiuuOaciemineWklueahOWxnuaAp2AsXG4gIGFueU9mOiAgICAgICAgICAgICAgICAgIGDmlbDmja7lupTkuLogYW55T2Yg5omA5oyH5a6a55qE5YW25Lit5LiA5LiqYCxcbiAgZGVwZW5kZW5jaWVzOiAgICAgICAgICAgYOW6lOW9k+aLpeacieWxnuaAp3twcm9wZXJ0eX3nmoTkvp3otZblsZ7mgKd7ZGVwc31gLFxuICBlbnVtOiAgICAgICAgICAgICAgICAgICBg5bqU5b2T5piv6aKE6K6+5a6a55qE5p6a5Li+5YC85LmL5LiAYCxcbiAgZm9ybWF0OiAgICAgICAgICAgICAgICAgYOagvOW8j+S4jeato+ehrmAsIC8vIGDlupTlvZPljLnphY3moLzlvI8gXCJ7Zm9ybWF0fVwiYCxcbiAgdHlwZTogICAgICAgICAgICAgICAgICAgYOexu+Wei+W6lOW9k+aYryB7dHlwZX1gLFxuICByZXF1aXJlZDogICAgICAgICAgICAgICBg5b+F5aGr6aG5YCxcbiAgbWF4TGVuZ3RoOiAgICAgICAgICAgICAgYOiHs+WkmiB7bGltaXR9IOS4quWtl+espmAsXG4gIG1pbkxlbmd0aDogICAgICAgICAgICAgIGDoh7PlsJEge2xpbWl0fSDkuKrlrZfnrKbku6XkuIpgLFxuICBtaW5pbXVtOiAgICAgICAgICAgICAgICBg5b+F6aG7IHtjb21wYXJpc29ufXtsaW1pdH1gLFxuICBmb3JtYXRNaW5pbXVtOiAgICAgICAgICBg5b+F6aG7IHtjb21wYXJpc29ufXtsaW1pdH1gLFxuICBtYXhpbXVtOiAgICAgICAgICAgICAgICBg5b+F6aG7IHtjb21wYXJpc29ufXtsaW1pdH1gLFxuICBmb3JtYXRNYXhpbXVtOiAgICAgICAgICBg5b+F6aG7IHtjb21wYXJpc29ufXtsaW1pdH1gLFxuICBtYXhJdGVtczogICAgICAgICAgICAgICBg5LiN5bqU5aSa5LqOIHtsaW1pdH0g5Liq6aG5YCxcbiAgbWluSXRlbXM6ICAgICAgICAgICAgICAgYOS4jeW6lOWwkeS6jiB7bGltaXR9IOS4qumhuWAsXG4gIG1heFByb3BlcnRpZXM6ICAgICAgICAgIGDkuI3lupTlpJrkuo4ge2xpbWl0fSDkuKrlsZ7mgKdgLFxuICBtaW5Qcm9wZXJ0aWVzOiAgICAgICAgICBg5LiN5bqU5bCR5LqOIHtsaW1pdH0g5Liq5bGe5oCnYCxcbiAgbXVsdGlwbGVPZjogICAgICAgICAgICAgYOW6lOW9k+aYryB7bXVsdGlwbGVPZn0g55qE5pW05pWw5YCNYCxcbiAgbm90OiAgICAgICAgICAgICAgICAgICAgYOS4jeW6lOW9k+WMuemFjSBcIm5vdFwiIHNjaGVtYWAsXG4gIG9uZU9mOiAgICAgICAgICAgICAgICAgIGDlj6rog73ljLnphY3kuIDkuKogXCJvbmVPZlwiIOS4reeahCBzY2hlbWFgLFxuICBwYXR0ZXJuOiAgICAgICAgICAgICAgICBg5pWw5o2u5qC85byP5LiN5q2j56GuYCxcbiAgdW5pcXVlSXRlbXM6ICAgICAgICAgICAgYOS4jeW6lOW9k+WQq+aciemHjeWkjemhuSAo56ysIHtqfSDpobnkuI7nrKwge2l9IOmhueaYr+mHjeWkjeeahClgLFxuICBjdXN0b206ICAgICAgICAgICAgICAgICBg5qC85byP5LiN5q2j56GuYCxcbiAgcHJvcGVydHlOYW1lczogICAgICAgICAgYOWxnuaAp+WQjSBcIntwcm9wZXJ0eU5hbWV9XCIg5peg5pWIYCxcbiAgcGF0dGVyblJlcXVpcmVkOiAgICAgICAgYOW6lOW9k+acieWxnuaAp+WMuemFjeaooeW8jyB7bWlzc2luZ1BhdHRlcm59YCxcbiAgc3dpdGNoOiAgICAgICAgICAgICAgICAgYOeUseS6jiB7Y2FzZUluZGV4fSDlpLHotKXvvIzmnKrpgJrov4cgXCJzd2l0Y2hcIiDmoKHpqoxgLFxuICBjb25zdDogICAgICAgICAgICAgICAgICBg5bqU5b2T562J5LqO5bi46YePYCxcbiAgY29udGFpbnM6ICAgICAgICAgICAgICAgYOW6lOW9k+WMheWQq+S4gOS4quacieaViOmhuWAsXG4gIGZvcm1hdEV4Y2x1c2l2ZU1heGltdW06IGBmb3JtYXRFeGNsdXNpdmVNYXhpbXVtIOW6lOW9k+aYr+W4g+WwlOWAvGAsXG4gIGZvcm1hdEV4Y2x1c2l2ZU1pbmltdW06IGBmb3JtYXRFeGNsdXNpdmVNaW5pbXVtIOW6lOW9k+aYr+W4g+WwlOWAvGAsXG4gIGlmOiAgICAgICAgICAgICAgICAgICAgIGDlupTlvZPljLnphY3mqKHlvI8gXCJ7ZmFpbGluZ0tleXdvcmR9XCJgLFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBFcnJvckRhdGEge1xuICBrZXl3b3JkOiBzdHJpbmc7XG4gIGRhdGFQYXRoPzogc3RyaW5nO1xuICBzY2hlbWFQYXRoPzogc3RyaW5nO1xuICBwYXJhbXM/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xuICBtZXNzYWdlPzogc3RyaW5nO1xuICBfY3VzdG9tPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFcnJvclNjaGVtYSB7XG4gIC8qKlxuICAgKiDmmK/lkKblrp7ml7bmoKHpqozvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICogLSBgdHJ1ZWAg5q+P5LiA5qyh6YO95qCh6aqMXG4gICAqIC0gYGZhbHNlYCDmj5DkuqTml7bmoKHpqoxcbiAgICovXG4gIGxpdmVWYWxpZGF0ZT86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDoh6rlrprkuYnplJnor6/kv6Hmga/mlofmnKzvvIzplK7lkI3otZ7lkIwgYEVycm9yRGF0YS5rZXl3b3JkYCDlgLxcbiAgICovXG4gIGVycm9ycz86IHsgWyBrZXk6IHN0cmluZyBdOiBzdHJpbmcgfCAoKG9iajogRXJyb3JEYXRhKSA9PiBzdHJpbmcpIH07XG4gIC8qKlxuICAgKiDmmK/lkKbnq4vljbPlkYjnjrDplJnor6/op4bop4nvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBmaXJzdFZpc3VhbD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDmmK/lkKblj6rlsZXnpLrplJnor6/op4bop4nkuI3mmL7npLrplJnor6/mlofmnKzvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBvbmx5VmlzdWFsPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOaYr+WQpuW/veeVpeafkOS6m+aVsOaNruexu+Wei+agoemqjCBgRVJST1JTREVGQVVMVGBcbiAgICogLSDlgLzlp4vnu4jljIXlkKsgYERlbG9uU2NoZW1hRm9ybUNvbmZpZy5pbmdvcmVLZXl3b3Jkc2BcbiAgICovXG4gIGluZ29yZUtleXdvcmRzPzogc3RyaW5nW107XG4gIC8qKlxuICAgKiDoh6rlrprkuYnmoKHpqoxcbiAgICovXG4gIHZhbGlkYXRvcj86ICh2YWx1ZTogYW55LCBmb3JtUHJvcGVydHk6IEZvcm1Qcm9wZXJ0eSwgZm9ybTogUHJvcGVydHlHcm91cCkgPT4gRXJyb3JEYXRhW10gfCBPYnNlcnZhYmxlPEVycm9yRGF0YVtdPjtcbn1cbiJdfQ==