/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
export const ERRORSDEFAULT = {
    'false schema': `布尔模式出错`,
    '$ref': `无法找到引用{ref}`,
    'additionalItems': `不允许超过{ref}`,
    'additionalProperties': `不允许有额外的属性`,
    'anyOf': `数据应为 anyOf 所指定的其中一个`,
    'dependencies': `应当拥有属性{property}的依赖属性{deps}`,
    'enum': `应当是预设定的枚举值之一`,
    'format': `格式不正确`,
    // `应当匹配格式 "{format}"`,
    'type': `类型应当是 {type}`,
    'required': `必填项`,
    'maxLength': `至多 {limit} 个字符`,
    'minLength': `至少 {limit} 个字符以上`,
    'minimum': `必须 {comparison}{limit}`,
    'formatMinimum': `必须 {comparison}{limit}`,
    'maximum': `必须 {comparison}{limit}`,
    'formatMaximum': `必须 {comparison}{limit}`,
    'maxItems': `不应多于 {limit} 个项`,
    'minItems': `不应少于 {limit} 个项`,
    'maxProperties': `不应多于 {limit} 个属性`,
    'minProperties': `不应少于 {limit} 个属性`,
    'multipleOf': `应当是 {multipleOf} 的整数倍`,
    'not': `不应当匹配 "not" schema`,
    'oneOf': `只能匹配一个 "oneOf" 中的 schema`,
    'pattern': `数据格式不正确`,
    'uniqueItems': `不应当含有重复项 (第 {j} 项与第 {i} 项是重复的)`,
    'custom': `格式不正确`,
    'propertyNames': `属性名 "{propertyName}" 无效`,
    'patternRequired': `应当有属性匹配模式 {missingPattern}`,
    'switch': `由于 {caseIndex} 失败，未通过 "switch" 校验`,
    'const': `应当等于常量`,
    'contains': `应当包含一个有效项`,
    'formatExclusiveMaximum': `formatExclusiveMaximum 应当是布尔值`,
    'formatExclusiveMinimum': `formatExclusiveMinimum 应当是布尔值`,
    'if': `应当匹配模式 "{failingKeyword}"`,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvZXJyb3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsTUFBTSxPQUFPLGFBQWEsR0FBRztJQUMzQixjQUFjLEVBQUUsUUFBUTtJQUN4QixNQUFNLEVBQUUsYUFBYTtJQUNyQixpQkFBaUIsRUFBRSxZQUFZO0lBQy9CLHNCQUFzQixFQUFFLFdBQVc7SUFDbkMsT0FBTyxFQUFFLHFCQUFxQjtJQUM5QixjQUFjLEVBQUUsNkJBQTZCO0lBQzdDLE1BQU0sRUFBRSxjQUFjO0lBQ3RCLFFBQVEsRUFBRSxPQUFPOztJQUNqQixNQUFNLEVBQUUsY0FBYztJQUN0QixVQUFVLEVBQUUsS0FBSztJQUNqQixXQUFXLEVBQUUsZ0JBQWdCO0lBQzdCLFdBQVcsRUFBRSxrQkFBa0I7SUFDL0IsU0FBUyxFQUFFLHdCQUF3QjtJQUNuQyxlQUFlLEVBQUUsd0JBQXdCO0lBQ3pDLFNBQVMsRUFBRSx3QkFBd0I7SUFDbkMsZUFBZSxFQUFFLHdCQUF3QjtJQUN6QyxVQUFVLEVBQUUsaUJBQWlCO0lBQzdCLFVBQVUsRUFBRSxpQkFBaUI7SUFDN0IsZUFBZSxFQUFFLGtCQUFrQjtJQUNuQyxlQUFlLEVBQUUsa0JBQWtCO0lBQ25DLFlBQVksRUFBRSx1QkFBdUI7SUFDckMsS0FBSyxFQUFFLG9CQUFvQjtJQUMzQixPQUFPLEVBQUUsMEJBQTBCO0lBQ25DLFNBQVMsRUFBRSxTQUFTO0lBQ3BCLGFBQWEsRUFBRSxnQ0FBZ0M7SUFDL0MsUUFBUSxFQUFFLE9BQU87SUFDakIsZUFBZSxFQUFFLHlCQUF5QjtJQUMxQyxpQkFBaUIsRUFBRSw0QkFBNEI7SUFDL0MsUUFBUSxFQUFFLG1DQUFtQztJQUM3QyxPQUFPLEVBQUUsUUFBUTtJQUNqQixVQUFVLEVBQUUsV0FBVztJQUN2Qix3QkFBd0IsRUFBRSwrQkFBK0I7SUFDekQsd0JBQXdCLEVBQUUsK0JBQStCO0lBQ3pELElBQUksRUFBRSwyQkFBMkI7Q0FDbEM7Ozs7QUFFRCwrQkFRQzs7O0lBUEMsNEJBQWdCOztJQUNoQiw2QkFBa0I7O0lBQ2xCLCtCQUFvQjs7SUFFcEIsMkJBQWdDOztJQUNoQyw0QkFBaUI7O0lBQ2pCLDRCQUFrQjs7Ozs7QUFHcEIsaUNBNEJDOzs7Ozs7OztJQXRCQyxtQ0FBdUI7Ozs7O0lBSXZCLDZCQUFrRTs7Ozs7SUFJbEUsa0NBQXNCOzs7OztJQUl0QixpQ0FBcUI7Ozs7OztJQUtyQixxQ0FBMEI7Ozs7Ozs7O0lBSTFCLDJFQUFtSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFNGVmFsdWUgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBGb3JtUHJvcGVydHksIFByb3BlcnR5R3JvdXAgfSBmcm9tICcuL21vZGVsL2Zvcm0ucHJvcGVydHknO1xuXG5leHBvcnQgY29uc3QgRVJST1JTREVGQVVMVCA9IHtcbiAgJ2ZhbHNlIHNjaGVtYSc6IGDluIPlsJTmqKHlvI/lh7rplJlgLFxuICAnJHJlZic6IGDml6Dms5Xmib7liLDlvJXnlKh7cmVmfWAsXG4gICdhZGRpdGlvbmFsSXRlbXMnOiBg5LiN5YWB6K646LaF6L+He3JlZn1gLFxuICAnYWRkaXRpb25hbFByb3BlcnRpZXMnOiBg5LiN5YWB6K645pyJ6aKd5aSW55qE5bGe5oCnYCxcbiAgJ2FueU9mJzogYOaVsOaNruW6lOS4uiBhbnlPZiDmiYDmjIflrprnmoTlhbbkuK3kuIDkuKpgLFxuICAnZGVwZW5kZW5jaWVzJzogYOW6lOW9k+aLpeacieWxnuaAp3twcm9wZXJ0eX3nmoTkvp3otZblsZ7mgKd7ZGVwc31gLFxuICAnZW51bSc6IGDlupTlvZPmmK/pooTorr7lrprnmoTmnprkuL7lgLzkuYvkuIBgLFxuICAnZm9ybWF0JzogYOagvOW8j+S4jeato+ehrmAsIC8vIGDlupTlvZPljLnphY3moLzlvI8gXCJ7Zm9ybWF0fVwiYCxcbiAgJ3R5cGUnOiBg57G75Z6L5bqU5b2T5pivIHt0eXBlfWAsXG4gICdyZXF1aXJlZCc6IGDlv4XloavpoblgLFxuICAnbWF4TGVuZ3RoJzogYOiHs+WkmiB7bGltaXR9IOS4quWtl+espmAsXG4gICdtaW5MZW5ndGgnOiBg6Iez5bCRIHtsaW1pdH0g5Liq5a2X56ym5Lul5LiKYCxcbiAgJ21pbmltdW0nOiBg5b+F6aG7IHtjb21wYXJpc29ufXtsaW1pdH1gLFxuICAnZm9ybWF0TWluaW11bSc6IGDlv4Xpobsge2NvbXBhcmlzb259e2xpbWl0fWAsXG4gICdtYXhpbXVtJzogYOW/hemhuyB7Y29tcGFyaXNvbn17bGltaXR9YCxcbiAgJ2Zvcm1hdE1heGltdW0nOiBg5b+F6aG7IHtjb21wYXJpc29ufXtsaW1pdH1gLFxuICAnbWF4SXRlbXMnOiBg5LiN5bqU5aSa5LqOIHtsaW1pdH0g5Liq6aG5YCxcbiAgJ21pbkl0ZW1zJzogYOS4jeW6lOWwkeS6jiB7bGltaXR9IOS4qumhuWAsXG4gICdtYXhQcm9wZXJ0aWVzJzogYOS4jeW6lOWkmuS6jiB7bGltaXR9IOS4quWxnuaAp2AsXG4gICdtaW5Qcm9wZXJ0aWVzJzogYOS4jeW6lOWwkeS6jiB7bGltaXR9IOS4quWxnuaAp2AsXG4gICdtdWx0aXBsZU9mJzogYOW6lOW9k+aYryB7bXVsdGlwbGVPZn0g55qE5pW05pWw5YCNYCxcbiAgJ25vdCc6IGDkuI3lupTlvZPljLnphY0gXCJub3RcIiBzY2hlbWFgLFxuICAnb25lT2YnOiBg5Y+q6IO95Yy56YWN5LiA5LiqIFwib25lT2ZcIiDkuK3nmoQgc2NoZW1hYCxcbiAgJ3BhdHRlcm4nOiBg5pWw5o2u5qC85byP5LiN5q2j56GuYCxcbiAgJ3VuaXF1ZUl0ZW1zJzogYOS4jeW6lOW9k+WQq+aciemHjeWkjemhuSAo56ysIHtqfSDpobnkuI7nrKwge2l9IOmhueaYr+mHjeWkjeeahClgLFxuICAnY3VzdG9tJzogYOagvOW8j+S4jeato+ehrmAsXG4gICdwcm9wZXJ0eU5hbWVzJzogYOWxnuaAp+WQjSBcIntwcm9wZXJ0eU5hbWV9XCIg5peg5pWIYCxcbiAgJ3BhdHRlcm5SZXF1aXJlZCc6IGDlupTlvZPmnInlsZ7mgKfljLnphY3mqKHlvI8ge21pc3NpbmdQYXR0ZXJufWAsXG4gICdzd2l0Y2gnOiBg55Sx5LqOIHtjYXNlSW5kZXh9IOWksei0pe+8jOacqumAmui/hyBcInN3aXRjaFwiIOagoemqjGAsXG4gICdjb25zdCc6IGDlupTlvZPnrYnkuo7luLjph49gLFxuICAnY29udGFpbnMnOiBg5bqU5b2T5YyF5ZCr5LiA5Liq5pyJ5pWI6aG5YCxcbiAgJ2Zvcm1hdEV4Y2x1c2l2ZU1heGltdW0nOiBgZm9ybWF0RXhjbHVzaXZlTWF4aW11bSDlupTlvZPmmK/luIPlsJTlgLxgLFxuICAnZm9ybWF0RXhjbHVzaXZlTWluaW11bSc6IGBmb3JtYXRFeGNsdXNpdmVNaW5pbXVtIOW6lOW9k+aYr+W4g+WwlOWAvGAsXG4gICdpZic6IGDlupTlvZPljLnphY3mqKHlvI8gXCJ7ZmFpbGluZ0tleXdvcmR9XCJgLFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBFcnJvckRhdGEge1xuICBrZXl3b3JkOiBzdHJpbmc7XG4gIGRhdGFQYXRoPzogc3RyaW5nO1xuICBzY2hlbWFQYXRoPzogc3RyaW5nO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHBhcmFtcz86IHsgW2tleTogc3RyaW5nXTogYW55IH07XG4gIG1lc3NhZ2U/OiBzdHJpbmc7XG4gIF9jdXN0b20/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVycm9yU2NoZW1hIHtcbiAgLyoqXG4gICAqIOaYr+WQpuWunuaXtuagoemqjO+8jOm7mOiupO+8mmB0cnVlYFxuICAgKiAtIGB0cnVlYCDmr4/kuIDmrKHpg73moKHpqoxcbiAgICogLSBgZmFsc2VgIOaPkOS6pOaXtuagoemqjFxuICAgKi9cbiAgbGl2ZVZhbGlkYXRlPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOiHquWumuS5iemUmeivr+S/oeaBr+aWh+acrO+8jOmUruWQjei1nuWQjCBgRXJyb3JEYXRhLmtleXdvcmRgIOWAvFxuICAgKi9cbiAgZXJyb3JzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCAoKG9iajogRXJyb3JEYXRhKSA9PiBzdHJpbmcpIH07XG4gIC8qKlxuICAgKiDmmK/lkKbnq4vljbPlkYjnjrDplJnor6/op4bop4nvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBmaXJzdFZpc3VhbD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDmmK/lkKblj6rlsZXnpLrplJnor6/op4bop4nkuI3mmL7npLrplJnor6/mlofmnKzvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICBvbmx5VmlzdWFsPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOaYr+WQpuW/veeVpeafkOS6m+aVsOaNruexu+Wei+agoemqjCBgRVJST1JTREVGQVVMVGBcbiAgICogLSDlgLzlp4vnu4jljIXlkKsgYERlbG9uU2NoZW1hRm9ybUNvbmZpZy5pbmdvcmVLZXl3b3Jkc2BcbiAgICovXG4gIGluZ29yZUtleXdvcmRzPzogc3RyaW5nW107XG4gIC8qKlxuICAgKiDoh6rlrprkuYnmoKHpqoxcbiAgICovXG4gIHZhbGlkYXRvcj8odmFsdWU6IFNGVmFsdWUsIGZvcm1Qcm9wZXJ0eTogRm9ybVByb3BlcnR5LCBmb3JtOiBQcm9wZXJ0eUdyb3VwKTogRXJyb3JEYXRhW10gfCBPYnNlcnZhYmxlPEVycm9yRGF0YVtdPjtcbn1cbiJdfQ==