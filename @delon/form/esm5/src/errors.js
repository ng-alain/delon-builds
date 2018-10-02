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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvZXJyb3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsV0FBYSxhQUFhLEdBQUc7SUFDM0IsY0FBYyxFQUFVLHNDQUFRO0lBQ2hDLE1BQU0sRUFBa0IsMkNBQWE7SUFDckMsZUFBZSxFQUFTLHFDQUFZO0lBQ3BDLG9CQUFvQixFQUFJLHdEQUFXO0lBQ25DLEtBQUssRUFBbUIsaUZBQXFCO0lBQzdDLFlBQVksRUFBWSxvRkFBNkI7SUFDckQsSUFBSSxFQUFvQiwwRUFBYztJQUN0QyxNQUFNLEVBQWtCLGdDQUFPOztJQUMvQixJQUFJLEVBQW9CLHVDQUFjO0lBQ3RDLFFBQVEsRUFBZ0Isb0JBQUs7SUFDN0IsU0FBUyxFQUFlLHlDQUFnQjtJQUN4QyxTQUFTLEVBQWUscURBQWtCO0lBQzFDLE9BQU8sRUFBaUIsa0NBQXdCO0lBQ2hELGFBQWEsRUFBVyxrQ0FBd0I7SUFDaEQsT0FBTyxFQUFpQixrQ0FBd0I7SUFDaEQsYUFBYSxFQUFXLGtDQUF3QjtJQUNoRCxRQUFRLEVBQWdCLCtDQUFpQjtJQUN6QyxRQUFRLEVBQWdCLCtDQUFpQjtJQUN6QyxhQUFhLEVBQVcscURBQWtCO0lBQzFDLGFBQWEsRUFBVyxxREFBa0I7SUFDMUMsVUFBVSxFQUFjLDBEQUF1QjtJQUMvQyxHQUFHLEVBQXFCLCtDQUFvQjtJQUM1QyxLQUFLLEVBQW1CLG9FQUEwQjtJQUNsRCxPQUFPLEVBQWlCLDRDQUFTO0lBQ2pDLFdBQVcsRUFBYSxxSEFBZ0M7SUFDeEQsTUFBTSxFQUFrQixnQ0FBTztJQUMvQixhQUFhLEVBQVcsb0RBQXlCO0lBQ2pELGVBQWUsRUFBUyx5RUFBNEI7SUFDcEQsTUFBTSxFQUFrQix1RkFBbUM7SUFDM0QsS0FBSyxFQUFtQixzQ0FBUTtJQUNoQyxRQUFRLEVBQWdCLHdEQUFXO0lBQ25DLHNCQUFzQixFQUFFLDZEQUErQjtJQUN2RCxzQkFBc0IsRUFBRSw2REFBK0I7SUFDdkQsRUFBRSxFQUFzQiwyREFBMkI7Q0FDcEQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgRm9ybVByb3BlcnR5LCBQcm9wZXJ0eUdyb3VwIH0gZnJvbSAnLi9tb2RlbC9mb3JtLnByb3BlcnR5JztcclxuXHJcbmV4cG9ydCBjb25zdCBFUlJPUlNERUZBVUxUID0ge1xyXG4gICdmYWxzZSBzY2hlbWEnOiAgICAgICAgIGDluIPlsJTmqKHlvI/lh7rplJlgLFxyXG4gICckcmVmJzogICAgICAgICAgICAgICAgIGDml6Dms5Xmib7liLDlvJXnlKh7cmVmfWAsXHJcbiAgYWRkaXRpb25hbEl0ZW1zOiAgICAgICAgYOS4jeWFgeiuuOi2hei/h3tyZWZ9YCxcclxuICBhZGRpdGlvbmFsUHJvcGVydGllczogICBg5LiN5YWB6K645pyJ6aKd5aSW55qE5bGe5oCnYCxcclxuICBhbnlPZjogICAgICAgICAgICAgICAgICBg5pWw5o2u5bqU5Li6IGFueU9mIOaJgOaMh+WumueahOWFtuS4reS4gOS4qmAsXHJcbiAgZGVwZW5kZW5jaWVzOiAgICAgICAgICAgYOW6lOW9k+aLpeacieWxnuaAp3twcm9wZXJ0eX3nmoTkvp3otZblsZ7mgKd7ZGVwc31gLFxyXG4gIGVudW06ICAgICAgICAgICAgICAgICAgIGDlupTlvZPmmK/pooTorr7lrprnmoTmnprkuL7lgLzkuYvkuIBgLFxyXG4gIGZvcm1hdDogICAgICAgICAgICAgICAgIGDmoLzlvI/kuI3mraPnoa5gLCAvLyBg5bqU5b2T5Yy56YWN5qC85byPIFwie2Zvcm1hdH1cImAsXHJcbiAgdHlwZTogICAgICAgICAgICAgICAgICAgYOexu+Wei+W6lOW9k+aYryB7dHlwZX1gLFxyXG4gIHJlcXVpcmVkOiAgICAgICAgICAgICAgIGDlv4XloavpoblgLFxyXG4gIG1heExlbmd0aDogICAgICAgICAgICAgIGDoh7PlpJoge2xpbWl0fSDkuKrlrZfnrKZgLFxyXG4gIG1pbkxlbmd0aDogICAgICAgICAgICAgIGDoh7PlsJEge2xpbWl0fSDkuKrlrZfnrKbku6XkuIpgLFxyXG4gIG1pbmltdW06ICAgICAgICAgICAgICAgIGDlv4Xpobsge2NvbXBhcmlzb259e2xpbWl0fWAsXHJcbiAgZm9ybWF0TWluaW11bTogICAgICAgICAgYOW/hemhuyB7Y29tcGFyaXNvbn17bGltaXR9YCxcclxuICBtYXhpbXVtOiAgICAgICAgICAgICAgICBg5b+F6aG7IHtjb21wYXJpc29ufXtsaW1pdH1gLFxyXG4gIGZvcm1hdE1heGltdW06ICAgICAgICAgIGDlv4Xpobsge2NvbXBhcmlzb259e2xpbWl0fWAsXHJcbiAgbWF4SXRlbXM6ICAgICAgICAgICAgICAgYOS4jeW6lOWkmuS6jiB7bGltaXR9IOS4qumhuWAsXHJcbiAgbWluSXRlbXM6ICAgICAgICAgICAgICAgYOS4jeW6lOWwkeS6jiB7bGltaXR9IOS4qumhuWAsXHJcbiAgbWF4UHJvcGVydGllczogICAgICAgICAgYOS4jeW6lOWkmuS6jiB7bGltaXR9IOS4quWxnuaAp2AsXHJcbiAgbWluUHJvcGVydGllczogICAgICAgICAgYOS4jeW6lOWwkeS6jiB7bGltaXR9IOS4quWxnuaAp2AsXHJcbiAgbXVsdGlwbGVPZjogICAgICAgICAgICAgYOW6lOW9k+aYryB7bXVsdGlwbGVPZn0g55qE5pW05pWw5YCNYCxcclxuICBub3Q6ICAgICAgICAgICAgICAgICAgICBg5LiN5bqU5b2T5Yy56YWNIFwibm90XCIgc2NoZW1hYCxcclxuICBvbmVPZjogICAgICAgICAgICAgICAgICBg5Y+q6IO95Yy56YWN5LiA5LiqIFwib25lT2ZcIiDkuK3nmoQgc2NoZW1hYCxcclxuICBwYXR0ZXJuOiAgICAgICAgICAgICAgICBg5pWw5o2u5qC85byP5LiN5q2j56GuYCxcclxuICB1bmlxdWVJdGVtczogICAgICAgICAgICBg5LiN5bqU5b2T5ZCr5pyJ6YeN5aSN6aG5ICjnrKwge2p9IOmhueS4juesrCB7aX0g6aG55piv6YeN5aSN55qEKWAsXHJcbiAgY3VzdG9tOiAgICAgICAgICAgICAgICAgYOagvOW8j+S4jeato+ehrmAsXHJcbiAgcHJvcGVydHlOYW1lczogICAgICAgICAgYOWxnuaAp+WQjSBcIntwcm9wZXJ0eU5hbWV9XCIg5peg5pWIYCxcclxuICBwYXR0ZXJuUmVxdWlyZWQ6ICAgICAgICBg5bqU5b2T5pyJ5bGe5oCn5Yy56YWN5qih5byPIHttaXNzaW5nUGF0dGVybn1gLFxyXG4gIHN3aXRjaDogICAgICAgICAgICAgICAgIGDnlLHkuo4ge2Nhc2VJbmRleH0g5aSx6LSl77yM5pyq6YCa6L+HIFwic3dpdGNoXCIg5qCh6aqMYCxcclxuICBjb25zdDogICAgICAgICAgICAgICAgICBg5bqU5b2T562J5LqO5bi46YePYCxcclxuICBjb250YWluczogICAgICAgICAgICAgICBg5bqU5b2T5YyF5ZCr5LiA5Liq5pyJ5pWI6aG5YCxcclxuICBmb3JtYXRFeGNsdXNpdmVNYXhpbXVtOiBgZm9ybWF0RXhjbHVzaXZlTWF4aW11bSDlupTlvZPmmK/luIPlsJTlgLxgLFxyXG4gIGZvcm1hdEV4Y2x1c2l2ZU1pbmltdW06IGBmb3JtYXRFeGNsdXNpdmVNaW5pbXVtIOW6lOW9k+aYr+W4g+WwlOWAvGAsXHJcbiAgaWY6ICAgICAgICAgICAgICAgICAgICAgYOW6lOW9k+WMuemFjeaooeW8jyBcIntmYWlsaW5nS2V5d29yZH1cImAsXHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEVycm9yRGF0YSB7XHJcbiAga2V5d29yZDogc3RyaW5nO1xyXG4gIGRhdGFQYXRoPzogc3RyaW5nO1xyXG4gIHNjaGVtYVBhdGg/OiBzdHJpbmc7XHJcbiAgcGFyYW1zPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcclxuICBtZXNzYWdlPzogc3RyaW5nO1xyXG4gIF9jdXN0b20/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEVycm9yU2NoZW1hIHtcclxuICAvKipcclxuICAgKiDmmK/lkKblrp7ml7bmoKHpqozvvIzpu5jorqTvvJpgdHJ1ZWBcclxuICAgKiAtIGB0cnVlYCDmr4/kuIDmrKHpg73moKHpqoxcclxuICAgKiAtIGBmYWxzZWAg5o+Q5Lqk5pe25qCh6aqMXHJcbiAgICovXHJcbiAgbGl2ZVZhbGlkYXRlPzogYm9vbGVhbjtcclxuICAvKipcclxuICAgKiDoh6rlrprkuYnplJnor6/kv6Hmga/mlofmnKzvvIzplK7lkI3otZ7lkIwgYEVycm9yRGF0YS5rZXl3b3JkYCDlgLxcclxuICAgKi9cclxuICBlcnJvcnM/OiB7IFsga2V5OiBzdHJpbmcgXTogc3RyaW5nIHwgKChvYmo6IEVycm9yRGF0YSkgPT4gc3RyaW5nKSB9O1xyXG4gIC8qKlxyXG4gICAqIOaYr+WQpueri+WNs+WRiOeOsOmUmeivr+inhuinie+8jOm7mOiupO+8mmBmYWxzZWBcclxuICAgKi9cclxuICBmaXJzdFZpc3VhbD86IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICog5piv5ZCm5Y+q5bGV56S66ZSZ6K+v6KeG6KeJ5LiN5pi+56S66ZSZ6K+v5paH5pys77yM6buY6K6k77yaYGZhbHNlYFxyXG4gICAqL1xyXG4gIG9ubHlWaXN1YWw/OiBib29sZWFuO1xyXG4gIC8qKlxyXG4gICAqIOaYr+WQpuW/veeVpeafkOS6m+aVsOaNruexu+Wei+agoemqjCBgRVJST1JTREVGQVVMVGBcclxuICAgKiAtIOWAvOWni+e7iOWMheWQqyBgRGVsb25TY2hlbWFGb3JtQ29uZmlnLmluZ29yZUtleXdvcmRzYFxyXG4gICAqL1xyXG4gIGluZ29yZUtleXdvcmRzPzogc3RyaW5nW107XHJcbiAgLyoqXHJcbiAgICog6Ieq5a6a5LmJ5qCh6aqMXHJcbiAgICovXHJcbiAgdmFsaWRhdG9yPzogKHZhbHVlOiBhbnksIGZvcm1Qcm9wZXJ0eTogRm9ybVByb3BlcnR5LCBmb3JtOiBQcm9wZXJ0eUdyb3VwKSA9PiBFcnJvckRhdGFbXSB8IE9ic2VydmFibGU8RXJyb3JEYXRhW10+O1xyXG59XHJcbiJdfQ==