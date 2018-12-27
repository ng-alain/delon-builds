/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
export var ERRORSDEFAULT = {
    'false schema': "\u5E03\u5C14\u6A21\u5F0F\u51FA\u9519",
    '$ref': "\u65E0\u6CD5\u627E\u5230\u5F15\u7528{ref}",
    'additionalItems': "\u4E0D\u5141\u8BB8\u8D85\u8FC7{ref}",
    'additionalProperties': "\u4E0D\u5141\u8BB8\u6709\u989D\u5916\u7684\u5C5E\u6027",
    'anyOf': "\u6570\u636E\u5E94\u4E3A anyOf \u6240\u6307\u5B9A\u7684\u5176\u4E2D\u4E00\u4E2A",
    'dependencies': "\u5E94\u5F53\u62E5\u6709\u5C5E\u6027{property}\u7684\u4F9D\u8D56\u5C5E\u6027{deps}",
    'enum': "\u5E94\u5F53\u662F\u9884\u8BBE\u5B9A\u7684\u679A\u4E3E\u503C\u4E4B\u4E00",
    'format': "\u683C\u5F0F\u4E0D\u6B63\u786E",
    // `应当匹配格式 "{format}"`,
    'type': "\u7C7B\u578B\u5E94\u5F53\u662F {type}",
    'required': "\u5FC5\u586B\u9879",
    'maxLength': "\u81F3\u591A {limit} \u4E2A\u5B57\u7B26",
    'minLength': "\u81F3\u5C11 {limit} \u4E2A\u5B57\u7B26\u4EE5\u4E0A",
    'minimum': "\u5FC5\u987B {comparison}{limit}",
    'formatMinimum': "\u5FC5\u987B {comparison}{limit}",
    'maximum': "\u5FC5\u987B {comparison}{limit}",
    'formatMaximum': "\u5FC5\u987B {comparison}{limit}",
    'maxItems': "\u4E0D\u5E94\u591A\u4E8E {limit} \u4E2A\u9879",
    'minItems': "\u4E0D\u5E94\u5C11\u4E8E {limit} \u4E2A\u9879",
    'maxProperties': "\u4E0D\u5E94\u591A\u4E8E {limit} \u4E2A\u5C5E\u6027",
    'minProperties': "\u4E0D\u5E94\u5C11\u4E8E {limit} \u4E2A\u5C5E\u6027",
    'multipleOf': "\u5E94\u5F53\u662F {multipleOf} \u7684\u6574\u6570\u500D",
    'not': "\u4E0D\u5E94\u5F53\u5339\u914D \"not\" schema",
    'oneOf': "\u53EA\u80FD\u5339\u914D\u4E00\u4E2A \"oneOf\" \u4E2D\u7684 schema",
    'pattern': "\u6570\u636E\u683C\u5F0F\u4E0D\u6B63\u786E",
    'uniqueItems': "\u4E0D\u5E94\u5F53\u542B\u6709\u91CD\u590D\u9879 (\u7B2C {j} \u9879\u4E0E\u7B2C {i} \u9879\u662F\u91CD\u590D\u7684)",
    'custom': "\u683C\u5F0F\u4E0D\u6B63\u786E",
    'propertyNames': "\u5C5E\u6027\u540D \"{propertyName}\" \u65E0\u6548",
    'patternRequired': "\u5E94\u5F53\u6709\u5C5E\u6027\u5339\u914D\u6A21\u5F0F {missingPattern}",
    'switch': "\u7531\u4E8E {caseIndex} \u5931\u8D25\uFF0C\u672A\u901A\u8FC7 \"switch\" \u6821\u9A8C",
    'const': "\u5E94\u5F53\u7B49\u4E8E\u5E38\u91CF",
    'contains': "\u5E94\u5F53\u5305\u542B\u4E00\u4E2A\u6709\u6548\u9879",
    'formatExclusiveMaximum': "formatExclusiveMaximum \u5E94\u5F53\u662F\u5E03\u5C14\u503C",
    'formatExclusiveMinimum': "formatExclusiveMinimum \u5E94\u5F53\u662F\u5E03\u5C14\u503C",
    'if': "\u5E94\u5F53\u5339\u914D\u6A21\u5F0F \"{failingKeyword}\"",
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
    /** @type {?|undefined} */
    ErrorData.prototype._custom;
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
     * @param {?} value
     * @param {?} formProperty
     * @param {?} form
     * @return {?}
     */
    ErrorSchema.prototype.validator = function (value, formProperty, form) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvZXJyb3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsTUFBTSxLQUFPLGFBQWEsR0FBRztJQUMzQixjQUFjLEVBQUUsc0NBQVE7SUFDeEIsTUFBTSxFQUFFLDJDQUFhO0lBQ3JCLGlCQUFpQixFQUFFLHFDQUFZO0lBQy9CLHNCQUFzQixFQUFFLHdEQUFXO0lBQ25DLE9BQU8sRUFBRSxpRkFBcUI7SUFDOUIsY0FBYyxFQUFFLG9GQUE2QjtJQUM3QyxNQUFNLEVBQUUsMEVBQWM7SUFDdEIsUUFBUSxFQUFFLGdDQUFPOztJQUNqQixNQUFNLEVBQUUsdUNBQWM7SUFDdEIsVUFBVSxFQUFFLG9CQUFLO0lBQ2pCLFdBQVcsRUFBRSx5Q0FBZ0I7SUFDN0IsV0FBVyxFQUFFLHFEQUFrQjtJQUMvQixTQUFTLEVBQUUsa0NBQXdCO0lBQ25DLGVBQWUsRUFBRSxrQ0FBd0I7SUFDekMsU0FBUyxFQUFFLGtDQUF3QjtJQUNuQyxlQUFlLEVBQUUsa0NBQXdCO0lBQ3pDLFVBQVUsRUFBRSwrQ0FBaUI7SUFDN0IsVUFBVSxFQUFFLCtDQUFpQjtJQUM3QixlQUFlLEVBQUUscURBQWtCO0lBQ25DLGVBQWUsRUFBRSxxREFBa0I7SUFDbkMsWUFBWSxFQUFFLDBEQUF1QjtJQUNyQyxLQUFLLEVBQUUsK0NBQW9CO0lBQzNCLE9BQU8sRUFBRSxvRUFBMEI7SUFDbkMsU0FBUyxFQUFFLDRDQUFTO0lBQ3BCLGFBQWEsRUFBRSxxSEFBZ0M7SUFDL0MsUUFBUSxFQUFFLGdDQUFPO0lBQ2pCLGVBQWUsRUFBRSxvREFBeUI7SUFDMUMsaUJBQWlCLEVBQUUseUVBQTRCO0lBQy9DLFFBQVEsRUFBRSx1RkFBbUM7SUFDN0MsT0FBTyxFQUFFLHNDQUFRO0lBQ2pCLFVBQVUsRUFBRSx3REFBVztJQUN2Qix3QkFBd0IsRUFBRSw2REFBK0I7SUFDekQsd0JBQXdCLEVBQUUsNkRBQStCO0lBQ3pELElBQUksRUFBRSwyREFBMkI7Q0FDbEM7Ozs7QUFFRCwrQkFRQzs7O0lBUEMsNEJBQWdCOztJQUNoQiw2QkFBa0I7O0lBQ2xCLCtCQUFvQjs7SUFFcEIsMkJBQWdDOztJQUNoQyw0QkFBaUI7O0lBQ2pCLDRCQUFrQjs7Ozs7QUFHcEIsaUNBNEJDOzs7Ozs7OztJQXRCQyxtQ0FBdUI7Ozs7O0lBSXZCLDZCQUFrRTs7Ozs7SUFJbEUsa0NBQXNCOzs7OztJQUl0QixpQ0FBcUI7Ozs7OztJQUtyQixxQ0FBMEI7Ozs7Ozs7O0lBSTFCLDJFQUFtSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFNGVmFsdWUgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBGb3JtUHJvcGVydHksIFByb3BlcnR5R3JvdXAgfSBmcm9tICcuL21vZGVsL2Zvcm0ucHJvcGVydHknO1xuXG5leHBvcnQgY29uc3QgRVJST1JTREVGQVVMVCA9IHtcbiAgJ2ZhbHNlIHNjaGVtYSc6IGDluIPlsJTmqKHlvI/lh7rplJlgLFxuICAnJHJlZic6IGDml6Dms5Xmib7liLDlvJXnlKh7cmVmfWAsXG4gICdhZGRpdGlvbmFsSXRlbXMnOiBg5LiN5YWB6K646LaF6L+He3JlZn1gLFxuICAnYWRkaXRpb25hbFByb3BlcnRpZXMnOiBg5LiN5YWB6K645pyJ6aKd5aSW55qE5bGe5oCnYCxcbiAgJ2FueU9mJzogYOaVsOaNruW6lOS4uiBhbnlPZiDmiYDmjIflrprnmoTlhbbkuK3kuIDkuKpgLFxuICAnZGVwZW5kZW5jaWVzJzogYOW6lOW9k+aLpeacieWxnuaAp3twcm9wZXJ0eX3nmoTkvp3otZblsZ7mgKd7ZGVwc31gLFxuICAnZW51bSc6IGDlupTlvZPmmK/pooTorr7lrprnmoTmnprkuL7lgLzkuYvkuIBgLFxuICAnZm9ybWF0JzogYOagvOW8j+S4jeato+ehrmAsIC8vIGDlupTlvZPljLnphY3moLzlvI8gXCJ7Zm9ybWF0fVwiYCxcbiAgJ3R5cGUnOiBg57G75Z6L5bqU5b2T5pivIHt0eXBlfWAsXG4gICdyZXF1aXJlZCc6IGDlv4XloavpoblgLFxuICAnbWF4TGVuZ3RoJzogYOiHs+WkmiB7bGltaXR9IOS4quWtl+espmAsXG4gICdtaW5MZW5ndGgnOiBg6Iez5bCRIHtsaW1pdH0g5Liq5a2X56ym5Lul5LiKYCxcbiAgJ21pbmltdW0nOiBg5b+F6aG7IHtjb21wYXJpc29ufXtsaW1pdH1gLFxuICAnZm9ybWF0TWluaW11bSc6IGDlv4Xpobsge2NvbXBhcmlzb259e2xpbWl0fWAsXG4gICdtYXhpbXVtJzogYOW/hemhuyB7Y29tcGFyaXNvbn17bGltaXR9YCxcbiAgJ2Zvcm1hdE1heGltdW0nOiBg5b+F6aG7IHtjb21wYXJpc29ufXtsaW1pdH1gLFxuICAnbWF4SXRlbXMnOiBg5LiN5bqU5aSa5LqOIHtsaW1pdH0g5Liq6aG5YCxcbiAgJ21pbkl0ZW1zJzogYOS4jeW6lOWwkeS6jiB7bGltaXR9IOS4qumhuWAsXG4gICdtYXhQcm9wZXJ0aWVzJzogYOS4jeW6lOWkmuS6jiB7bGltaXR9IOS4quWxnuaAp2AsXG4gICdtaW5Qcm9wZXJ0aWVzJzogYOS4jeW6lOWwkeS6jiB7bGltaXR9IOS4quWxnuaAp2AsXG4gICdtdWx0aXBsZU9mJzogYOW6lOW9k+aYryB7bXVsdGlwbGVPZn0g55qE5pW05pWw5YCNYCxcbiAgJ25vdCc6IGDkuI3lupTlvZPljLnphY0gXCJub3RcIiBzY2hlbWFgLFxuICAnb25lT2YnOiBg5Y+q6IO95Yy56YWN5LiA5LiqIFwib25lT2ZcIiDkuK3nmoQgc2NoZW1hYCxcbiAgJ3BhdHRlcm4nOiBg5pWw5o2u5qC85byP5LiN5q2j56GuYCxcbiAgJ3VuaXF1ZUl0ZW1zJzogYOS4jeW6lOW9k+WQq+aciemHjeWkjemhuSAo56ysIHtqfSDpobnkuI7nrKwge2l9IOmhueaYr+mHjeWkjeeahClgLFxuICAnY3VzdG9tJzogYOagvOW8j+S4jeato+ehrmAsXG4gICdwcm9wZXJ0eU5hbWVzJzogYOWxnuaAp+WQjSBcIntwcm9wZXJ0eU5hbWV9XCIg5peg5pWIYCxcbiAgJ3BhdHRlcm5SZXF1aXJlZCc6IGDlupTlvZPmnInlsZ7mgKfljLnphY3mqKHlvI8ge21pc3NpbmdQYXR0ZXJufWAsXG4gICdzd2l0Y2gnOiBg55Sx5LqOIHtjYXNlSW5kZXh9IOWksei0pe+8jOacqumAmui/hyBcInN3aXRjaFwiIOagoemqjGAsXG4gICdjb25zdCc6IGDlupTlvZPnrYnkuo7luLjph49gLFxuICAnY29udGFpbnMnOiBg5bqU5b2T5YyF5ZCr5LiA5Liq5pyJ5pWI6aG5YCxcbiAgJ2Zvcm1hdEV4Y2x1c2l2ZU1heGltdW0nOiBgZm9ybWF0RXhjbHVzaXZlTWF4aW11bSDlupTlvZPmmK/luIPlsJTlgLxgLFxuICAnZm9ybWF0RXhjbHVzaXZlTWluaW11bSc6IGBmb3JtYXRFeGNsdXNpdmVNaW5pbXVtIOW6lOW9k+aYr+W4g+WwlOWAvGAsXG4gICdpZic6IGDlupTlvZPljLnphY3mqKHlvI8gXCJ7ZmFpbGluZ0tleXdvcmR9XCJgLFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBFcnJvckRhdGEge1xuICBrZXl3b3JkOiBzdHJpbmc7XG4gIGRhdGFQYXRoPzogc3RyaW5nO1xuICBzY2hlbWFQYXRoPzogc3RyaW5nO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHBhcmFtcz86IHsgW2tleTogc3RyaW5nXTogYW55IH07XG4gIG1lc3NhZ2U/OiBzdHJpbmc7XG4gIF9jdXN0b20/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVycm9yU2NoZW1hIHtcbiAgLyoqXG4gICAqIOaYr+WQpuWunuaXtuagoemqjO+8jOm7mOiupO+8mmB0cnVlYFxuICAgKiAtIGB0cnVlYCDmr4/kuIDmrKHpg73moKHpqoxcbiAgICogLSBgZmFsc2VgIOaPkOS6pOaXtuagoemqjFxuICAgKi9cbiAgbGl2ZVZhbGlkYXRlPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOiHquWumuS5iemUmeivr+S/oeaBr+aWh+acrO+8jOmUruWQjei1nuWQjCBgRXJyb3JEYXRhLmtleXdvcmRgIOWAvFxuICAgKi9cbiAgZXJyb3JzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCAoKG9iajogRXJyb3JEYXRhKSA9PiBzdHJpbmcpIH07XG4gIC8qKlxuICAgKiDmmK/lkKbnq4vljbPlkYjnjrDplJnor6/op4bop4nvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBmaXJzdFZpc3VhbD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDmmK/lkKblj6rlsZXnpLrplJnor6/op4bop4nkuI3mmL7npLrplJnor6/mlofmnKzvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBvbmx5VmlzdWFsPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOaYr+WQpuW/veeVpeafkOS6m+aVsOaNruexu+Wei+agoemqjCBgRVJST1JTREVGQVVMVGBcbiAgICogLSDlgLzlp4vnu4jljIXlkKsgYERlbG9uU2NoZW1hRm9ybUNvbmZpZy5pbmdvcmVLZXl3b3Jkc2BcbiAgICovXG4gIGluZ29yZUtleXdvcmRzPzogc3RyaW5nW107XG4gIC8qKlxuICAgKiDoh6rlrprkuYnmoKHpqoxcbiAgICovXG4gIHZhbGlkYXRvcj8odmFsdWU6IFNGVmFsdWUsIGZvcm1Qcm9wZXJ0eTogRm9ybVByb3BlcnR5LCBmb3JtOiBQcm9wZXJ0eUdyb3VwKTogRXJyb3JEYXRhW10gfCBPYnNlcnZhYmxlPEVycm9yRGF0YVtdPjtcbn1cbiJdfQ==