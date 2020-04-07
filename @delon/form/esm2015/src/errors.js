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
     * 自定义校验
     * @type {?|undefined}
     */
    ErrorSchema.prototype.validator;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvZXJyb3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUlBLE1BQU0sT0FBTyxhQUFhLEdBQUc7SUFDM0IsY0FBYyxFQUFFLFFBQVE7SUFDeEIsSUFBSSxFQUFFLGFBQWE7SUFDbkIsZUFBZSxFQUFFLFlBQVk7SUFDN0Isb0JBQW9CLEVBQUUsV0FBVztJQUNqQyxLQUFLLEVBQUUscUJBQXFCO0lBQzVCLFlBQVksRUFBRSw2QkFBNkI7SUFDM0MsSUFBSSxFQUFFLGNBQWM7SUFDcEIsTUFBTSxFQUFFLE9BQU87O0lBQ2YsSUFBSSxFQUFFLGNBQWM7SUFDcEIsUUFBUSxFQUFFLEtBQUs7SUFDZixTQUFTLEVBQUUsZ0JBQWdCO0lBQzNCLFNBQVMsRUFBRSxrQkFBa0I7SUFDN0IsT0FBTyxFQUFFLHdCQUF3QjtJQUNqQyxhQUFhLEVBQUUsd0JBQXdCO0lBQ3ZDLE9BQU8sRUFBRSx3QkFBd0I7SUFDakMsYUFBYSxFQUFFLHdCQUF3QjtJQUN2QyxRQUFRLEVBQUUsaUJBQWlCO0lBQzNCLFFBQVEsRUFBRSxpQkFBaUI7SUFDM0IsYUFBYSxFQUFFLGtCQUFrQjtJQUNqQyxhQUFhLEVBQUUsa0JBQWtCO0lBQ2pDLFVBQVUsRUFBRSx1QkFBdUI7SUFDbkMsR0FBRyxFQUFFLG9CQUFvQjtJQUN6QixLQUFLLEVBQUUsMEJBQTBCO0lBQ2pDLE9BQU8sRUFBRSxTQUFTO0lBQ2xCLFdBQVcsRUFBRSxnQ0FBZ0M7SUFDN0MsTUFBTSxFQUFFLE9BQU87SUFDZixhQUFhLEVBQUUseUJBQXlCO0lBQ3hDLGVBQWUsRUFBRSw0QkFBNEI7SUFDN0MsTUFBTSxFQUFFLG1DQUFtQztJQUMzQyxLQUFLLEVBQUUsUUFBUTtJQUNmLFFBQVEsRUFBRSxXQUFXO0lBQ3JCLHNCQUFzQixFQUFFLCtCQUErQjtJQUN2RCxzQkFBc0IsRUFBRSwrQkFBK0I7SUFDdkQsRUFBRSxFQUFFLDJCQUEyQjtDQUNoQzs7OztBQUVELCtCQVFDOzs7SUFMQyw0QkFBZ0I7O0lBQ2hCLDZCQUFrQjs7SUFDbEIsK0JBQW9COztJQUNwQiwyQkFBZ0M7O0lBQ2hDLDRCQUFpQjs7Ozs7O0FBR25CLGlDQWdDQzs7Ozs7Ozs7SUExQkMsbUNBQXVCOzs7OztJQUl2Qiw2QkFBa0U7Ozs7O0lBSWxFLGtDQUFzQjs7Ozs7SUFJdEIsaUNBQXFCOzs7Ozs7SUFLckIscUNBQTBCOzs7OztJQUkxQixnQ0FJMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTRlZhbHVlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRm9ybVByb3BlcnR5LCBQcm9wZXJ0eUdyb3VwIH0gZnJvbSAnLi9tb2RlbC9mb3JtLnByb3BlcnR5JztcblxuZXhwb3J0IGNvbnN0IEVSUk9SU0RFRkFVTFQgPSB7XG4gICdmYWxzZSBzY2hlbWEnOiBg5biD5bCU5qih5byP5Ye66ZSZYCxcbiAgJHJlZjogYOaXoOazleaJvuWIsOW8leeUqHtyZWZ9YCxcbiAgYWRkaXRpb25hbEl0ZW1zOiBg5LiN5YWB6K646LaF6L+He3JlZn1gLFxuICBhZGRpdGlvbmFsUHJvcGVydGllczogYOS4jeWFgeiuuOaciemineWklueahOWxnuaAp2AsXG4gIGFueU9mOiBg5pWw5o2u5bqU5Li6IGFueU9mIOaJgOaMh+WumueahOWFtuS4reS4gOS4qmAsXG4gIGRlcGVuZGVuY2llczogYOW6lOW9k+aLpeacieWxnuaAp3twcm9wZXJ0eX3nmoTkvp3otZblsZ7mgKd7ZGVwc31gLFxuICBlbnVtOiBg5bqU5b2T5piv6aKE6K6+5a6a55qE5p6a5Li+5YC85LmL5LiAYCxcbiAgZm9ybWF0OiBg5qC85byP5LiN5q2j56GuYCwgLy8gYOW6lOW9k+WMuemFjeagvOW8jyBcIntmb3JtYXR9XCJgLFxuICB0eXBlOiBg57G75Z6L5bqU5b2T5pivIHt0eXBlfWAsXG4gIHJlcXVpcmVkOiBg5b+F5aGr6aG5YCxcbiAgbWF4TGVuZ3RoOiBg6Iez5aSaIHtsaW1pdH0g5Liq5a2X56ymYCxcbiAgbWluTGVuZ3RoOiBg6Iez5bCRIHtsaW1pdH0g5Liq5a2X56ym5Lul5LiKYCxcbiAgbWluaW11bTogYOW/hemhuyB7Y29tcGFyaXNvbn17bGltaXR9YCxcbiAgZm9ybWF0TWluaW11bTogYOW/hemhuyB7Y29tcGFyaXNvbn17bGltaXR9YCxcbiAgbWF4aW11bTogYOW/hemhuyB7Y29tcGFyaXNvbn17bGltaXR9YCxcbiAgZm9ybWF0TWF4aW11bTogYOW/hemhuyB7Y29tcGFyaXNvbn17bGltaXR9YCxcbiAgbWF4SXRlbXM6IGDkuI3lupTlpJrkuo4ge2xpbWl0fSDkuKrpoblgLFxuICBtaW5JdGVtczogYOS4jeW6lOWwkeS6jiB7bGltaXR9IOS4qumhuWAsXG4gIG1heFByb3BlcnRpZXM6IGDkuI3lupTlpJrkuo4ge2xpbWl0fSDkuKrlsZ7mgKdgLFxuICBtaW5Qcm9wZXJ0aWVzOiBg5LiN5bqU5bCR5LqOIHtsaW1pdH0g5Liq5bGe5oCnYCxcbiAgbXVsdGlwbGVPZjogYOW6lOW9k+aYryB7bXVsdGlwbGVPZn0g55qE5pW05pWw5YCNYCxcbiAgbm90OiBg5LiN5bqU5b2T5Yy56YWNIFwibm90XCIgc2NoZW1hYCxcbiAgb25lT2Y6IGDlj6rog73ljLnphY3kuIDkuKogXCJvbmVPZlwiIOS4reeahCBzY2hlbWFgLFxuICBwYXR0ZXJuOiBg5pWw5o2u5qC85byP5LiN5q2j56GuYCxcbiAgdW5pcXVlSXRlbXM6IGDkuI3lupTlvZPlkKvmnInph43lpI3pobkgKOesrCB7an0g6aG55LiO56ysIHtpfSDpobnmmK/ph43lpI3nmoQpYCxcbiAgY3VzdG9tOiBg5qC85byP5LiN5q2j56GuYCxcbiAgcHJvcGVydHlOYW1lczogYOWxnuaAp+WQjSBcIntwcm9wZXJ0eU5hbWV9XCIg5peg5pWIYCxcbiAgcGF0dGVyblJlcXVpcmVkOiBg5bqU5b2T5pyJ5bGe5oCn5Yy56YWN5qih5byPIHttaXNzaW5nUGF0dGVybn1gLFxuICBzd2l0Y2g6IGDnlLHkuo4ge2Nhc2VJbmRleH0g5aSx6LSl77yM5pyq6YCa6L+HIFwic3dpdGNoXCIg5qCh6aqMYCxcbiAgY29uc3Q6IGDlupTlvZPnrYnkuo7luLjph49gLFxuICBjb250YWluczogYOW6lOW9k+WMheWQq+S4gOS4quacieaViOmhuWAsXG4gIGZvcm1hdEV4Y2x1c2l2ZU1heGltdW06IGBmb3JtYXRFeGNsdXNpdmVNYXhpbXVtIOW6lOW9k+aYr+W4g+WwlOWAvGAsXG4gIGZvcm1hdEV4Y2x1c2l2ZU1pbmltdW06IGBmb3JtYXRFeGNsdXNpdmVNaW5pbXVtIOW6lOW9k+aYr+W4g+WwlOWAvGAsXG4gIGlmOiBg5bqU5b2T5Yy56YWN5qih5byPIFwie2ZhaWxpbmdLZXl3b3JkfVwiYCxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXJyb3JEYXRhIHtcbiAgW2tleTogc3RyaW5nXTogYW55O1xuXG4gIGtleXdvcmQ6IHN0cmluZztcbiAgZGF0YVBhdGg/OiBzdHJpbmc7XG4gIHNjaGVtYVBhdGg/OiBzdHJpbmc7XG4gIHBhcmFtcz86IHsgW2tleTogc3RyaW5nXTogYW55IH07XG4gIG1lc3NhZ2U/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXJyb3JTY2hlbWEge1xuICAvKipcbiAgICog5piv5ZCm5a6e5pe25qCh6aqM77yM6buY6K6k77yaYHRydWVgXG4gICAqIC0gYHRydWVgIOavj+S4gOasoemDveagoemqjFxuICAgKiAtIGBmYWxzZWAg5o+Q5Lqk5pe25qCh6aqMXG4gICAqL1xuICBsaXZlVmFsaWRhdGU/OiBib29sZWFuO1xuICAvKipcbiAgICog6Ieq5a6a5LmJ6ZSZ6K+v5L+h5oGv5paH5pys77yM6ZSu5ZCN6LWe5ZCMIGBFcnJvckRhdGEua2V5d29yZGAg5YC8XG4gICAqL1xuICBlcnJvcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB8ICgob2JqOiBFcnJvckRhdGEpID0+IHN0cmluZykgfTtcbiAgLyoqXG4gICAqIOaYr+WQpueri+WNs+WRiOeOsOmUmeivr+inhuinie+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIGZpcnN0VmlzdWFsPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOaYr+WQpuWPquWxleekuumUmeivr+inhuinieS4jeaYvuekuumUmeivr+aWh+acrO+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIG9ubHlWaXN1YWw/OiBib29sZWFuO1xuICAvKipcbiAgICog5piv5ZCm5b+955Wl5p+Q5Lqb5pWw5o2u57G75Z6L5qCh6aqMIGBFUlJPUlNERUZBVUxUYFxuICAgKiAtIOWAvOWni+e7iOWMheWQqyBgRGVsb25TY2hlbWFGb3JtQ29uZmlnLmluZ29yZUtleXdvcmRzYFxuICAgKi9cbiAgaW5nb3JlS2V5d29yZHM/OiBzdHJpbmdbXTtcbiAgLyoqXG4gICAqIOiHquWumuS5ieagoemqjFxuICAgKi9cbiAgdmFsaWRhdG9yPzogKFxuICAgIHZhbHVlOiBTRlZhbHVlLFxuICAgIGZvcm1Qcm9wZXJ0eTogRm9ybVByb3BlcnR5LFxuICAgIGZvcm06IFByb3BlcnR5R3JvdXAsXG4gICkgPT4gRXJyb3JEYXRhW10gfCBPYnNlcnZhYmxlPEVycm9yRGF0YVtdPjtcbn1cbiJdfQ==