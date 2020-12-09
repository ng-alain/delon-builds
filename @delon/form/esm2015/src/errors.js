/**
 * @fileoverview added by tsickle
 * Generated from: src/errors.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JzLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3ZzdHMvd29yay8xL3MvcGFja2FnZXMvZm9ybS8iLCJzb3VyY2VzIjpbInNyYy9lcnJvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBSUEsTUFBTSxPQUFPLGFBQWEsR0FBRztJQUMzQixjQUFjLEVBQUUsUUFBUTtJQUN4QixJQUFJLEVBQUUsYUFBYTtJQUNuQixlQUFlLEVBQUUsWUFBWTtJQUM3QixvQkFBb0IsRUFBRSxXQUFXO0lBQ2pDLEtBQUssRUFBRSxxQkFBcUI7SUFDNUIsWUFBWSxFQUFFLDZCQUE2QjtJQUMzQyxJQUFJLEVBQUUsY0FBYztJQUNwQixNQUFNLEVBQUUsT0FBTzs7SUFDZixJQUFJLEVBQUUsY0FBYztJQUNwQixRQUFRLEVBQUUsS0FBSztJQUNmLFNBQVMsRUFBRSxnQkFBZ0I7SUFDM0IsU0FBUyxFQUFFLGtCQUFrQjtJQUM3QixPQUFPLEVBQUUsd0JBQXdCO0lBQ2pDLGFBQWEsRUFBRSx3QkFBd0I7SUFDdkMsT0FBTyxFQUFFLHdCQUF3QjtJQUNqQyxhQUFhLEVBQUUsd0JBQXdCO0lBQ3ZDLFFBQVEsRUFBRSxpQkFBaUI7SUFDM0IsUUFBUSxFQUFFLGlCQUFpQjtJQUMzQixhQUFhLEVBQUUsa0JBQWtCO0lBQ2pDLGFBQWEsRUFBRSxrQkFBa0I7SUFDakMsVUFBVSxFQUFFLHVCQUF1QjtJQUNuQyxHQUFHLEVBQUUsb0JBQW9CO0lBQ3pCLEtBQUssRUFBRSwwQkFBMEI7SUFDakMsT0FBTyxFQUFFLFNBQVM7SUFDbEIsV0FBVyxFQUFFLGdDQUFnQztJQUM3QyxNQUFNLEVBQUUsT0FBTztJQUNmLGFBQWEsRUFBRSx5QkFBeUI7SUFDeEMsZUFBZSxFQUFFLDRCQUE0QjtJQUM3QyxNQUFNLEVBQUUsbUNBQW1DO0lBQzNDLEtBQUssRUFBRSxRQUFRO0lBQ2YsUUFBUSxFQUFFLFdBQVc7SUFDckIsc0JBQXNCLEVBQUUsK0JBQStCO0lBQ3ZELHNCQUFzQixFQUFFLCtCQUErQjtJQUN2RCxFQUFFLEVBQUUsMkJBQTJCO0NBQ2hDOzs7O0FBRUQsK0JBUUM7OztJQUxDLDRCQUFnQjs7SUFDaEIsNkJBQWtCOztJQUNsQiwrQkFBb0I7O0lBQ3BCLDJCQUFnQzs7SUFDaEMsNEJBQWlCOzs7Ozs7QUFHbkIsaUNBa0NDOzs7Ozs7OztJQTVCQyxtQ0FBdUI7Ozs7O0lBSXZCLDZCQUFrRTs7Ozs7SUFJbEUsa0NBQXNCOzs7OztJQUl0QixpQ0FBcUI7Ozs7OztJQUtyQixxQ0FBMEI7Ozs7O0lBSzFCLG1DQUF1Qjs7Ozs7SUFLdkIsZ0NBQXVIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU0ZWYWx1ZSB9IGZyb20gJy4vaW50ZXJmYWNlJztcbmltcG9ydCB7IEZvcm1Qcm9wZXJ0eSwgUHJvcGVydHlHcm91cCB9IGZyb20gJy4vbW9kZWwvZm9ybS5wcm9wZXJ0eSc7XG5cbmV4cG9ydCBjb25zdCBFUlJPUlNERUZBVUxUID0ge1xuICAnZmFsc2Ugc2NoZW1hJzogYOW4g+WwlOaooeW8j+WHuumUmWAsXG4gICRyZWY6IGDml6Dms5Xmib7liLDlvJXnlKh7cmVmfWAsXG4gIGFkZGl0aW9uYWxJdGVtczogYOS4jeWFgeiuuOi2hei/h3tyZWZ9YCxcbiAgYWRkaXRpb25hbFByb3BlcnRpZXM6IGDkuI3lhYHorrjmnInpop3lpJbnmoTlsZ7mgKdgLFxuICBhbnlPZjogYOaVsOaNruW6lOS4uiBhbnlPZiDmiYDmjIflrprnmoTlhbbkuK3kuIDkuKpgLFxuICBkZXBlbmRlbmNpZXM6IGDlupTlvZPmi6XmnInlsZ7mgKd7cHJvcGVydHl955qE5L6d6LWW5bGe5oCne2RlcHN9YCxcbiAgZW51bTogYOW6lOW9k+aYr+mihOiuvuWumueahOaemuS4vuWAvOS5i+S4gGAsXG4gIGZvcm1hdDogYOagvOW8j+S4jeato+ehrmAsIC8vIGDlupTlvZPljLnphY3moLzlvI8gXCJ7Zm9ybWF0fVwiYCxcbiAgdHlwZTogYOexu+Wei+W6lOW9k+aYryB7dHlwZX1gLFxuICByZXF1aXJlZDogYOW/heWhq+mhuWAsXG4gIG1heExlbmd0aDogYOiHs+WkmiB7bGltaXR9IOS4quWtl+espmAsXG4gIG1pbkxlbmd0aDogYOiHs+WwkSB7bGltaXR9IOS4quWtl+espuS7peS4imAsXG4gIG1pbmltdW06IGDlv4Xpobsge2NvbXBhcmlzb259e2xpbWl0fWAsXG4gIGZvcm1hdE1pbmltdW06IGDlv4Xpobsge2NvbXBhcmlzb259e2xpbWl0fWAsXG4gIG1heGltdW06IGDlv4Xpobsge2NvbXBhcmlzb259e2xpbWl0fWAsXG4gIGZvcm1hdE1heGltdW06IGDlv4Xpobsge2NvbXBhcmlzb259e2xpbWl0fWAsXG4gIG1heEl0ZW1zOiBg5LiN5bqU5aSa5LqOIHtsaW1pdH0g5Liq6aG5YCxcbiAgbWluSXRlbXM6IGDkuI3lupTlsJHkuo4ge2xpbWl0fSDkuKrpoblgLFxuICBtYXhQcm9wZXJ0aWVzOiBg5LiN5bqU5aSa5LqOIHtsaW1pdH0g5Liq5bGe5oCnYCxcbiAgbWluUHJvcGVydGllczogYOS4jeW6lOWwkeS6jiB7bGltaXR9IOS4quWxnuaAp2AsXG4gIG11bHRpcGxlT2Y6IGDlupTlvZPmmK8ge211bHRpcGxlT2Z9IOeahOaVtOaVsOWAjWAsXG4gIG5vdDogYOS4jeW6lOW9k+WMuemFjSBcIm5vdFwiIHNjaGVtYWAsXG4gIG9uZU9mOiBg5Y+q6IO95Yy56YWN5LiA5LiqIFwib25lT2ZcIiDkuK3nmoQgc2NoZW1hYCxcbiAgcGF0dGVybjogYOaVsOaNruagvOW8j+S4jeato+ehrmAsXG4gIHVuaXF1ZUl0ZW1zOiBg5LiN5bqU5b2T5ZCr5pyJ6YeN5aSN6aG5ICjnrKwge2p9IOmhueS4juesrCB7aX0g6aG55piv6YeN5aSN55qEKWAsXG4gIGN1c3RvbTogYOagvOW8j+S4jeato+ehrmAsXG4gIHByb3BlcnR5TmFtZXM6IGDlsZ7mgKflkI0gXCJ7cHJvcGVydHlOYW1lfVwiIOaXoOaViGAsXG4gIHBhdHRlcm5SZXF1aXJlZDogYOW6lOW9k+acieWxnuaAp+WMuemFjeaooeW8jyB7bWlzc2luZ1BhdHRlcm59YCxcbiAgc3dpdGNoOiBg55Sx5LqOIHtjYXNlSW5kZXh9IOWksei0pe+8jOacqumAmui/hyBcInN3aXRjaFwiIOagoemqjGAsXG4gIGNvbnN0OiBg5bqU5b2T562J5LqO5bi46YePYCxcbiAgY29udGFpbnM6IGDlupTlvZPljIXlkKvkuIDkuKrmnInmlYjpoblgLFxuICBmb3JtYXRFeGNsdXNpdmVNYXhpbXVtOiBgZm9ybWF0RXhjbHVzaXZlTWF4aW11bSDlupTlvZPmmK/luIPlsJTlgLxgLFxuICBmb3JtYXRFeGNsdXNpdmVNaW5pbXVtOiBgZm9ybWF0RXhjbHVzaXZlTWluaW11bSDlupTlvZPmmK/luIPlsJTlgLxgLFxuICBpZjogYOW6lOW9k+WMuemFjeaooeW8jyBcIntmYWlsaW5nS2V5d29yZH1cImAsXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIEVycm9yRGF0YSB7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcblxuICBrZXl3b3JkOiBzdHJpbmc7XG4gIGRhdGFQYXRoPzogc3RyaW5nO1xuICBzY2hlbWFQYXRoPzogc3RyaW5nO1xuICBwYXJhbXM/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xuICBtZXNzYWdlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVycm9yU2NoZW1hIHtcbiAgLyoqXG4gICAqIOaYr+WQpuWunuaXtuagoemqjO+8jOm7mOiupO+8mmB0cnVlYFxuICAgKiAtIGB0cnVlYCDmr4/kuIDmrKHpg73moKHpqoxcbiAgICogLSBgZmFsc2VgIOaPkOS6pOaXtuagoemqjFxuICAgKi9cbiAgbGl2ZVZhbGlkYXRlPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOiHquWumuS5iemUmeivr+S/oeaBr+aWh+acrO+8jOmUruWQjei1nuWQjCBgRXJyb3JEYXRhLmtleXdvcmRgIOWAvFxuICAgKi9cbiAgZXJyb3JzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCAoKG9iajogRXJyb3JEYXRhKSA9PiBzdHJpbmcpIH07XG4gIC8qKlxuICAgKiDmmK/lkKbnq4vljbPlkYjnjrDplJnor6/op4bop4nvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBmaXJzdFZpc3VhbD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDmmK/lkKblj6rlsZXnpLrplJnor6/op4bop4nkuI3mmL7npLrplJnor6/mlofmnKzvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBvbmx5VmlzdWFsPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOaYr+WQpuW/veeVpeafkOS6m+aVsOaNruexu+Wei+agoemqjCBgRVJST1JTREVGQVVMVGBcbiAgICogLSDlgLzlp4vnu4jljIXlkKsgYERlbG9uU2NoZW1hRm9ybUNvbmZpZy5pbmdvcmVLZXl3b3Jkc2BcbiAgICovXG4gIGluZ29yZUtleXdvcmRzPzogc3RyaW5nW107XG5cbiAgLyoqXG4gICAqIOaYr+WQpuW8uuWItuWcqOagh+etvuS4iuaYvuekuiBgKmAg5p2l6KGo56S65b+F5aGr77yM5LiA6Iis5Zyo5b2T5L2/55So6Ieq5a6a5LmJ5qCh6aqMIGB2YWxpZGF0b3JgIOWPr+iDvemcgOimgeW/heWhq+mhueWkhOeQhlxuICAgKi9cbiAgc2hvd1JlcXVpcmVkPzogYm9vbGVhbjtcblxuICAvKipcbiAgICog6Ieq5a6a5LmJ5qCh6aqMXG4gICAqL1xuICB2YWxpZGF0b3I/OiAodmFsdWU6IFNGVmFsdWUsIGZvcm1Qcm9wZXJ0eTogRm9ybVByb3BlcnR5LCBmb3JtOiBQcm9wZXJ0eUdyb3VwKSA9PiBFcnJvckRhdGFbXSB8IE9ic2VydmFibGU8RXJyb3JEYXRhW10+O1xufVxuIl19