/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
     * @type {?|undefined}
     */
    ErrorSchema.prototype.validator;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvZXJyb3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsTUFBTSxPQUFPLGFBQWEsR0FBRztJQUMzQixjQUFjLEVBQVUsUUFBUTtJQUNoQyxNQUFNLEVBQWtCLGFBQWE7SUFDckMsZUFBZSxFQUFTLFlBQVk7SUFDcEMsb0JBQW9CLEVBQUksV0FBVztJQUNuQyxLQUFLLEVBQW1CLHFCQUFxQjtJQUM3QyxZQUFZLEVBQVksNkJBQTZCO0lBQ3JELElBQUksRUFBb0IsY0FBYztJQUN0QyxNQUFNLEVBQWtCLE9BQU87O0lBQy9CLElBQUksRUFBb0IsY0FBYztJQUN0QyxRQUFRLEVBQWdCLEtBQUs7SUFDN0IsU0FBUyxFQUFlLGdCQUFnQjtJQUN4QyxTQUFTLEVBQWUsa0JBQWtCO0lBQzFDLE9BQU8sRUFBaUIsd0JBQXdCO0lBQ2hELGFBQWEsRUFBVyx3QkFBd0I7SUFDaEQsT0FBTyxFQUFpQix3QkFBd0I7SUFDaEQsYUFBYSxFQUFXLHdCQUF3QjtJQUNoRCxRQUFRLEVBQWdCLGlCQUFpQjtJQUN6QyxRQUFRLEVBQWdCLGlCQUFpQjtJQUN6QyxhQUFhLEVBQVcsa0JBQWtCO0lBQzFDLGFBQWEsRUFBVyxrQkFBa0I7SUFDMUMsVUFBVSxFQUFjLHVCQUF1QjtJQUMvQyxHQUFHLEVBQXFCLG9CQUFvQjtJQUM1QyxLQUFLLEVBQW1CLDBCQUEwQjtJQUNsRCxPQUFPLEVBQWlCLFNBQVM7SUFDakMsV0FBVyxFQUFhLGdDQUFnQztJQUN4RCxNQUFNLEVBQWtCLE9BQU87SUFDL0IsYUFBYSxFQUFXLHlCQUF5QjtJQUNqRCxlQUFlLEVBQVMsNEJBQTRCO0lBQ3BELE1BQU0sRUFBa0IsbUNBQW1DO0lBQzNELEtBQUssRUFBbUIsUUFBUTtJQUNoQyxRQUFRLEVBQWdCLFdBQVc7SUFDbkMsc0JBQXNCLEVBQUUsK0JBQStCO0lBQ3ZELHNCQUFzQixFQUFFLCtCQUErQjtJQUN2RCxFQUFFLEVBQXNCLDJCQUEyQjtDQUNwRDs7OztBQUVELCtCQU9DOzs7SUFOQyw0QkFBZ0I7O0lBQ2hCLDZCQUFrQjs7SUFDbEIsK0JBQW9COztJQUNwQiwyQkFBZ0M7O0lBQ2hDLDRCQUFpQjs7SUFDakIsNEJBQWtCOzs7OztBQUdwQixpQ0E0QkM7Ozs7Ozs7O0lBdEJDLG1DQUF1Qjs7Ozs7SUFJdkIsNkJBQW9FOzs7OztJQUlwRSxrQ0FBc0I7Ozs7O0lBSXRCLGlDQUFxQjs7Ozs7O0lBS3JCLHFDQUEwQjs7Ozs7SUFJMUIsZ0NBQW1IIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRm9ybVByb3BlcnR5LCBQcm9wZXJ0eUdyb3VwIH0gZnJvbSAnLi9tb2RlbC9mb3JtLnByb3BlcnR5JztcblxuZXhwb3J0IGNvbnN0IEVSUk9SU0RFRkFVTFQgPSB7XG4gICdmYWxzZSBzY2hlbWEnOiAgICAgICAgIGDluIPlsJTmqKHlvI/lh7rplJlgLFxuICAnJHJlZic6ICAgICAgICAgICAgICAgICBg5peg5rOV5om+5Yiw5byV55Soe3JlZn1gLFxuICBhZGRpdGlvbmFsSXRlbXM6ICAgICAgICBg5LiN5YWB6K646LaF6L+He3JlZn1gLFxuICBhZGRpdGlvbmFsUHJvcGVydGllczogICBg5LiN5YWB6K645pyJ6aKd5aSW55qE5bGe5oCnYCxcbiAgYW55T2Y6ICAgICAgICAgICAgICAgICAgYOaVsOaNruW6lOS4uiBhbnlPZiDmiYDmjIflrprnmoTlhbbkuK3kuIDkuKpgLFxuICBkZXBlbmRlbmNpZXM6ICAgICAgICAgICBg5bqU5b2T5oul5pyJ5bGe5oCne3Byb3BlcnR5feeahOS+nei1luWxnuaAp3tkZXBzfWAsXG4gIGVudW06ICAgICAgICAgICAgICAgICAgIGDlupTlvZPmmK/pooTorr7lrprnmoTmnprkuL7lgLzkuYvkuIBgLFxuICBmb3JtYXQ6ICAgICAgICAgICAgICAgICBg5qC85byP5LiN5q2j56GuYCwgLy8gYOW6lOW9k+WMuemFjeagvOW8jyBcIntmb3JtYXR9XCJgLFxuICB0eXBlOiAgICAgICAgICAgICAgICAgICBg57G75Z6L5bqU5b2T5pivIHt0eXBlfWAsXG4gIHJlcXVpcmVkOiAgICAgICAgICAgICAgIGDlv4XloavpoblgLFxuICBtYXhMZW5ndGg6ICAgICAgICAgICAgICBg6Iez5aSaIHtsaW1pdH0g5Liq5a2X56ymYCxcbiAgbWluTGVuZ3RoOiAgICAgICAgICAgICAgYOiHs+WwkSB7bGltaXR9IOS4quWtl+espuS7peS4imAsXG4gIG1pbmltdW06ICAgICAgICAgICAgICAgIGDlv4Xpobsge2NvbXBhcmlzb259e2xpbWl0fWAsXG4gIGZvcm1hdE1pbmltdW06ICAgICAgICAgIGDlv4Xpobsge2NvbXBhcmlzb259e2xpbWl0fWAsXG4gIG1heGltdW06ICAgICAgICAgICAgICAgIGDlv4Xpobsge2NvbXBhcmlzb259e2xpbWl0fWAsXG4gIGZvcm1hdE1heGltdW06ICAgICAgICAgIGDlv4Xpobsge2NvbXBhcmlzb259e2xpbWl0fWAsXG4gIG1heEl0ZW1zOiAgICAgICAgICAgICAgIGDkuI3lupTlpJrkuo4ge2xpbWl0fSDkuKrpoblgLFxuICBtaW5JdGVtczogICAgICAgICAgICAgICBg5LiN5bqU5bCR5LqOIHtsaW1pdH0g5Liq6aG5YCxcbiAgbWF4UHJvcGVydGllczogICAgICAgICAgYOS4jeW6lOWkmuS6jiB7bGltaXR9IOS4quWxnuaAp2AsXG4gIG1pblByb3BlcnRpZXM6ICAgICAgICAgIGDkuI3lupTlsJHkuo4ge2xpbWl0fSDkuKrlsZ7mgKdgLFxuICBtdWx0aXBsZU9mOiAgICAgICAgICAgICBg5bqU5b2T5pivIHttdWx0aXBsZU9mfSDnmoTmlbTmlbDlgI1gLFxuICBub3Q6ICAgICAgICAgICAgICAgICAgICBg5LiN5bqU5b2T5Yy56YWNIFwibm90XCIgc2NoZW1hYCxcbiAgb25lT2Y6ICAgICAgICAgICAgICAgICAgYOWPquiDveWMuemFjeS4gOS4qiBcIm9uZU9mXCIg5Lit55qEIHNjaGVtYWAsXG4gIHBhdHRlcm46ICAgICAgICAgICAgICAgIGDmlbDmja7moLzlvI/kuI3mraPnoa5gLFxuICB1bmlxdWVJdGVtczogICAgICAgICAgICBg5LiN5bqU5b2T5ZCr5pyJ6YeN5aSN6aG5ICjnrKwge2p9IOmhueS4juesrCB7aX0g6aG55piv6YeN5aSN55qEKWAsXG4gIGN1c3RvbTogICAgICAgICAgICAgICAgIGDmoLzlvI/kuI3mraPnoa5gLFxuICBwcm9wZXJ0eU5hbWVzOiAgICAgICAgICBg5bGe5oCn5ZCNIFwie3Byb3BlcnR5TmFtZX1cIiDml6DmlYhgLFxuICBwYXR0ZXJuUmVxdWlyZWQ6ICAgICAgICBg5bqU5b2T5pyJ5bGe5oCn5Yy56YWN5qih5byPIHttaXNzaW5nUGF0dGVybn1gLFxuICBzd2l0Y2g6ICAgICAgICAgICAgICAgICBg55Sx5LqOIHtjYXNlSW5kZXh9IOWksei0pe+8jOacqumAmui/hyBcInN3aXRjaFwiIOagoemqjGAsXG4gIGNvbnN0OiAgICAgICAgICAgICAgICAgIGDlupTlvZPnrYnkuo7luLjph49gLFxuICBjb250YWluczogICAgICAgICAgICAgICBg5bqU5b2T5YyF5ZCr5LiA5Liq5pyJ5pWI6aG5YCxcbiAgZm9ybWF0RXhjbHVzaXZlTWF4aW11bTogYGZvcm1hdEV4Y2x1c2l2ZU1heGltdW0g5bqU5b2T5piv5biD5bCU5YC8YCxcbiAgZm9ybWF0RXhjbHVzaXZlTWluaW11bTogYGZvcm1hdEV4Y2x1c2l2ZU1pbmltdW0g5bqU5b2T5piv5biD5bCU5YC8YCxcbiAgaWY6ICAgICAgICAgICAgICAgICAgICAgYOW6lOW9k+WMuemFjeaooeW8jyBcIntmYWlsaW5nS2V5d29yZH1cImAsXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIEVycm9yRGF0YSB7XG4gIGtleXdvcmQ6IHN0cmluZztcbiAgZGF0YVBhdGg/OiBzdHJpbmc7XG4gIHNjaGVtYVBhdGg/OiBzdHJpbmc7XG4gIHBhcmFtcz86IHsgW2tleTogc3RyaW5nXTogYW55IH07XG4gIG1lc3NhZ2U/OiBzdHJpbmc7XG4gIF9jdXN0b20/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVycm9yU2NoZW1hIHtcbiAgLyoqXG4gICAqIOaYr+WQpuWunuaXtuagoemqjO+8jOm7mOiupO+8mmB0cnVlYFxuICAgKiAtIGB0cnVlYCDmr4/kuIDmrKHpg73moKHpqoxcbiAgICogLSBgZmFsc2VgIOaPkOS6pOaXtuagoemqjFxuICAgKi9cbiAgbGl2ZVZhbGlkYXRlPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOiHquWumuS5iemUmeivr+S/oeaBr+aWh+acrO+8jOmUruWQjei1nuWQjCBgRXJyb3JEYXRhLmtleXdvcmRgIOWAvFxuICAgKi9cbiAgZXJyb3JzPzogeyBbIGtleTogc3RyaW5nIF06IHN0cmluZyB8ICgob2JqOiBFcnJvckRhdGEpID0+IHN0cmluZykgfTtcbiAgLyoqXG4gICAqIOaYr+WQpueri+WNs+WRiOeOsOmUmeivr+inhuinie+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIGZpcnN0VmlzdWFsPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOaYr+WQpuWPquWxleekuumUmeivr+inhuinieS4jeaYvuekuumUmeivr+aWh+acrO+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIG9ubHlWaXN1YWw/OiBib29sZWFuO1xuICAvKipcbiAgICog5piv5ZCm5b+955Wl5p+Q5Lqb5pWw5o2u57G75Z6L5qCh6aqMIGBFUlJPUlNERUZBVUxUYFxuICAgKiAtIOWAvOWni+e7iOWMheWQqyBgRGVsb25TY2hlbWFGb3JtQ29uZmlnLmluZ29yZUtleXdvcmRzYFxuICAgKi9cbiAgaW5nb3JlS2V5d29yZHM/OiBzdHJpbmdbXTtcbiAgLyoqXG4gICAqIOiHquWumuS5ieagoemqjFxuICAgKi9cbiAgdmFsaWRhdG9yPzogKHZhbHVlOiBhbnksIGZvcm1Qcm9wZXJ0eTogRm9ybVByb3BlcnR5LCBmb3JtOiBQcm9wZXJ0eUdyb3VwKSA9PiBFcnJvckRhdGFbXSB8IE9ic2VydmFibGU8RXJyb3JEYXRhW10+O1xufVxuIl19