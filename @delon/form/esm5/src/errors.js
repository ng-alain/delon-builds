/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvZXJyb3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsTUFBTSxLQUFPLGFBQWEsR0FBRztJQUMzQixjQUFjLEVBQVUsc0NBQVE7SUFDaEMsTUFBTSxFQUFrQiwyQ0FBYTtJQUNyQyxlQUFlLEVBQVMscUNBQVk7SUFDcEMsb0JBQW9CLEVBQUksd0RBQVc7SUFDbkMsS0FBSyxFQUFtQixpRkFBcUI7SUFDN0MsWUFBWSxFQUFZLG9GQUE2QjtJQUNyRCxJQUFJLEVBQW9CLDBFQUFjO0lBQ3RDLE1BQU0sRUFBa0IsZ0NBQU87O0lBQy9CLElBQUksRUFBb0IsdUNBQWM7SUFDdEMsUUFBUSxFQUFnQixvQkFBSztJQUM3QixTQUFTLEVBQWUseUNBQWdCO0lBQ3hDLFNBQVMsRUFBZSxxREFBa0I7SUFDMUMsT0FBTyxFQUFpQixrQ0FBd0I7SUFDaEQsYUFBYSxFQUFXLGtDQUF3QjtJQUNoRCxPQUFPLEVBQWlCLGtDQUF3QjtJQUNoRCxhQUFhLEVBQVcsa0NBQXdCO0lBQ2hELFFBQVEsRUFBZ0IsK0NBQWlCO0lBQ3pDLFFBQVEsRUFBZ0IsK0NBQWlCO0lBQ3pDLGFBQWEsRUFBVyxxREFBa0I7SUFDMUMsYUFBYSxFQUFXLHFEQUFrQjtJQUMxQyxVQUFVLEVBQWMsMERBQXVCO0lBQy9DLEdBQUcsRUFBcUIsK0NBQW9CO0lBQzVDLEtBQUssRUFBbUIsb0VBQTBCO0lBQ2xELE9BQU8sRUFBaUIsNENBQVM7SUFDakMsV0FBVyxFQUFhLHFIQUFnQztJQUN4RCxNQUFNLEVBQWtCLGdDQUFPO0lBQy9CLGFBQWEsRUFBVyxvREFBeUI7SUFDakQsZUFBZSxFQUFTLHlFQUE0QjtJQUNwRCxNQUFNLEVBQWtCLHVGQUFtQztJQUMzRCxLQUFLLEVBQW1CLHNDQUFRO0lBQ2hDLFFBQVEsRUFBZ0Isd0RBQVc7SUFDbkMsc0JBQXNCLEVBQUUsNkRBQStCO0lBQ3ZELHNCQUFzQixFQUFFLDZEQUErQjtJQUN2RCxFQUFFLEVBQXNCLDJEQUEyQjtDQUNwRDs7OztBQUVELCtCQU9DOzs7SUFOQyw0QkFBZ0I7O0lBQ2hCLDZCQUFrQjs7SUFDbEIsK0JBQW9COztJQUNwQiwyQkFBZ0M7O0lBQ2hDLDRCQUFpQjs7SUFDakIsNEJBQWtCOzs7OztBQUdwQixpQ0E0QkM7Ozs7Ozs7O0lBdEJDLG1DQUF1Qjs7Ozs7SUFJdkIsNkJBQW9FOzs7OztJQUlwRSxrQ0FBc0I7Ozs7O0lBSXRCLGlDQUFxQjs7Ozs7O0lBS3JCLHFDQUEwQjs7Ozs7SUFJMUIsZ0NBQW1IIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRm9ybVByb3BlcnR5LCBQcm9wZXJ0eUdyb3VwIH0gZnJvbSAnLi9tb2RlbC9mb3JtLnByb3BlcnR5JztcblxuZXhwb3J0IGNvbnN0IEVSUk9SU0RFRkFVTFQgPSB7XG4gICdmYWxzZSBzY2hlbWEnOiAgICAgICAgIGDluIPlsJTmqKHlvI/lh7rplJlgLFxuICAnJHJlZic6ICAgICAgICAgICAgICAgICBg5peg5rOV5om+5Yiw5byV55Soe3JlZn1gLFxuICBhZGRpdGlvbmFsSXRlbXM6ICAgICAgICBg5LiN5YWB6K646LaF6L+He3JlZn1gLFxuICBhZGRpdGlvbmFsUHJvcGVydGllczogICBg5LiN5YWB6K645pyJ6aKd5aSW55qE5bGe5oCnYCxcbiAgYW55T2Y6ICAgICAgICAgICAgICAgICAgYOaVsOaNruW6lOS4uiBhbnlPZiDmiYDmjIflrprnmoTlhbbkuK3kuIDkuKpgLFxuICBkZXBlbmRlbmNpZXM6ICAgICAgICAgICBg5bqU5b2T5oul5pyJ5bGe5oCne3Byb3BlcnR5feeahOS+nei1luWxnuaAp3tkZXBzfWAsXG4gIGVudW06ICAgICAgICAgICAgICAgICAgIGDlupTlvZPmmK/pooTorr7lrprnmoTmnprkuL7lgLzkuYvkuIBgLFxuICBmb3JtYXQ6ICAgICAgICAgICAgICAgICBg5qC85byP5LiN5q2j56GuYCwgLy8gYOW6lOW9k+WMuemFjeagvOW8jyBcIntmb3JtYXR9XCJgLFxuICB0eXBlOiAgICAgICAgICAgICAgICAgICBg57G75Z6L5bqU5b2T5pivIHt0eXBlfWAsXG4gIHJlcXVpcmVkOiAgICAgICAgICAgICAgIGDlv4XloavpoblgLFxuICBtYXhMZW5ndGg6ICAgICAgICAgICAgICBg6Iez5aSaIHtsaW1pdH0g5Liq5a2X56ymYCxcbiAgbWluTGVuZ3RoOiAgICAgICAgICAgICAgYOiHs+WwkSB7bGltaXR9IOS4quWtl+espuS7peS4imAsXG4gIG1pbmltdW06ICAgICAgICAgICAgICAgIGDlv4Xpobsge2NvbXBhcmlzb259e2xpbWl0fWAsXG4gIGZvcm1hdE1pbmltdW06ICAgICAgICAgIGDlv4Xpobsge2NvbXBhcmlzb259e2xpbWl0fWAsXG4gIG1heGltdW06ICAgICAgICAgICAgICAgIGDlv4Xpobsge2NvbXBhcmlzb259e2xpbWl0fWAsXG4gIGZvcm1hdE1heGltdW06ICAgICAgICAgIGDlv4Xpobsge2NvbXBhcmlzb259e2xpbWl0fWAsXG4gIG1heEl0ZW1zOiAgICAgICAgICAgICAgIGDkuI3lupTlpJrkuo4ge2xpbWl0fSDkuKrpoblgLFxuICBtaW5JdGVtczogICAgICAgICAgICAgICBg5LiN5bqU5bCR5LqOIHtsaW1pdH0g5Liq6aG5YCxcbiAgbWF4UHJvcGVydGllczogICAgICAgICAgYOS4jeW6lOWkmuS6jiB7bGltaXR9IOS4quWxnuaAp2AsXG4gIG1pblByb3BlcnRpZXM6ICAgICAgICAgIGDkuI3lupTlsJHkuo4ge2xpbWl0fSDkuKrlsZ7mgKdgLFxuICBtdWx0aXBsZU9mOiAgICAgICAgICAgICBg5bqU5b2T5pivIHttdWx0aXBsZU9mfSDnmoTmlbTmlbDlgI1gLFxuICBub3Q6ICAgICAgICAgICAgICAgICAgICBg5LiN5bqU5b2T5Yy56YWNIFwibm90XCIgc2NoZW1hYCxcbiAgb25lT2Y6ICAgICAgICAgICAgICAgICAgYOWPquiDveWMuemFjeS4gOS4qiBcIm9uZU9mXCIg5Lit55qEIHNjaGVtYWAsXG4gIHBhdHRlcm46ICAgICAgICAgICAgICAgIGDmlbDmja7moLzlvI/kuI3mraPnoa5gLFxuICB1bmlxdWVJdGVtczogICAgICAgICAgICBg5LiN5bqU5b2T5ZCr5pyJ6YeN5aSN6aG5ICjnrKwge2p9IOmhueS4juesrCB7aX0g6aG55piv6YeN5aSN55qEKWAsXG4gIGN1c3RvbTogICAgICAgICAgICAgICAgIGDmoLzlvI/kuI3mraPnoa5gLFxuICBwcm9wZXJ0eU5hbWVzOiAgICAgICAgICBg5bGe5oCn5ZCNIFwie3Byb3BlcnR5TmFtZX1cIiDml6DmlYhgLFxuICBwYXR0ZXJuUmVxdWlyZWQ6ICAgICAgICBg5bqU5b2T5pyJ5bGe5oCn5Yy56YWN5qih5byPIHttaXNzaW5nUGF0dGVybn1gLFxuICBzd2l0Y2g6ICAgICAgICAgICAgICAgICBg55Sx5LqOIHtjYXNlSW5kZXh9IOWksei0pe+8jOacqumAmui/hyBcInN3aXRjaFwiIOagoemqjGAsXG4gIGNvbnN0OiAgICAgICAgICAgICAgICAgIGDlupTlvZPnrYnkuo7luLjph49gLFxuICBjb250YWluczogICAgICAgICAgICAgICBg5bqU5b2T5YyF5ZCr5LiA5Liq5pyJ5pWI6aG5YCxcbiAgZm9ybWF0RXhjbHVzaXZlTWF4aW11bTogYGZvcm1hdEV4Y2x1c2l2ZU1heGltdW0g5bqU5b2T5piv5biD5bCU5YC8YCxcbiAgZm9ybWF0RXhjbHVzaXZlTWluaW11bTogYGZvcm1hdEV4Y2x1c2l2ZU1pbmltdW0g5bqU5b2T5piv5biD5bCU5YC8YCxcbiAgaWY6ICAgICAgICAgICAgICAgICAgICAgYOW6lOW9k+WMuemFjeaooeW8jyBcIntmYWlsaW5nS2V5d29yZH1cImAsXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIEVycm9yRGF0YSB7XG4gIGtleXdvcmQ6IHN0cmluZztcbiAgZGF0YVBhdGg/OiBzdHJpbmc7XG4gIHNjaGVtYVBhdGg/OiBzdHJpbmc7XG4gIHBhcmFtcz86IHsgW2tleTogc3RyaW5nXTogYW55IH07XG4gIG1lc3NhZ2U/OiBzdHJpbmc7XG4gIF9jdXN0b20/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVycm9yU2NoZW1hIHtcbiAgLyoqXG4gICAqIOaYr+WQpuWunuaXtuagoemqjO+8jOm7mOiupO+8mmB0cnVlYFxuICAgKiAtIGB0cnVlYCDmr4/kuIDmrKHpg73moKHpqoxcbiAgICogLSBgZmFsc2VgIOaPkOS6pOaXtuagoemqjFxuICAgKi9cbiAgbGl2ZVZhbGlkYXRlPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOiHquWumuS5iemUmeivr+S/oeaBr+aWh+acrO+8jOmUruWQjei1nuWQjCBgRXJyb3JEYXRhLmtleXdvcmRgIOWAvFxuICAgKi9cbiAgZXJyb3JzPzogeyBbIGtleTogc3RyaW5nIF06IHN0cmluZyB8ICgob2JqOiBFcnJvckRhdGEpID0+IHN0cmluZykgfTtcbiAgLyoqXG4gICAqIOaYr+WQpueri+WNs+WRiOeOsOmUmeivr+inhuinie+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIGZpcnN0VmlzdWFsPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOaYr+WQpuWPquWxleekuumUmeivr+inhuinieS4jeaYvuekuumUmeivr+aWh+acrO+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIG9ubHlWaXN1YWw/OiBib29sZWFuO1xuICAvKipcbiAgICog5piv5ZCm5b+955Wl5p+Q5Lqb5pWw5o2u57G75Z6L5qCh6aqMIGBFUlJPUlNERUZBVUxUYFxuICAgKiAtIOWAvOWni+e7iOWMheWQqyBgRGVsb25TY2hlbWFGb3JtQ29uZmlnLmluZ29yZUtleXdvcmRzYFxuICAgKi9cbiAgaW5nb3JlS2V5d29yZHM/OiBzdHJpbmdbXTtcbiAgLyoqXG4gICAqIOiHquWumuS5ieagoemqjFxuICAgKi9cbiAgdmFsaWRhdG9yPzogKHZhbHVlOiBhbnksIGZvcm1Qcm9wZXJ0eTogRm9ybVByb3BlcnR5LCBmb3JtOiBQcm9wZXJ0eUdyb3VwKSA9PiBFcnJvckRhdGFbXSB8IE9ic2VydmFibGU8RXJyb3JEYXRhW10+O1xufVxuIl19