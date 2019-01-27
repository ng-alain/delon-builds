/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvZXJyb3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsTUFBTSxPQUFPLGFBQWEsR0FBRztJQUMzQixjQUFjLEVBQUUsUUFBUTtJQUN4QixJQUFJLEVBQUUsYUFBYTtJQUNuQixlQUFlLEVBQUUsWUFBWTtJQUM3QixvQkFBb0IsRUFBRSxXQUFXO0lBQ2pDLEtBQUssRUFBRSxxQkFBcUI7SUFDNUIsWUFBWSxFQUFFLDZCQUE2QjtJQUMzQyxJQUFJLEVBQUUsY0FBYztJQUNwQixNQUFNLEVBQUUsT0FBTzs7SUFDZixJQUFJLEVBQUUsY0FBYztJQUNwQixRQUFRLEVBQUUsS0FBSztJQUNmLFNBQVMsRUFBRSxnQkFBZ0I7SUFDM0IsU0FBUyxFQUFFLGtCQUFrQjtJQUM3QixPQUFPLEVBQUUsd0JBQXdCO0lBQ2pDLGFBQWEsRUFBRSx3QkFBd0I7SUFDdkMsT0FBTyxFQUFFLHdCQUF3QjtJQUNqQyxhQUFhLEVBQUUsd0JBQXdCO0lBQ3ZDLFFBQVEsRUFBRSxpQkFBaUI7SUFDM0IsUUFBUSxFQUFFLGlCQUFpQjtJQUMzQixhQUFhLEVBQUUsa0JBQWtCO0lBQ2pDLGFBQWEsRUFBRSxrQkFBa0I7SUFDakMsVUFBVSxFQUFFLHVCQUF1QjtJQUNuQyxHQUFHLEVBQUUsb0JBQW9CO0lBQ3pCLEtBQUssRUFBRSwwQkFBMEI7SUFDakMsT0FBTyxFQUFFLFNBQVM7SUFDbEIsV0FBVyxFQUFFLGdDQUFnQztJQUM3QyxNQUFNLEVBQUUsT0FBTztJQUNmLGFBQWEsRUFBRSx5QkFBeUI7SUFDeEMsZUFBZSxFQUFFLDRCQUE0QjtJQUM3QyxNQUFNLEVBQUUsbUNBQW1DO0lBQzNDLEtBQUssRUFBRSxRQUFRO0lBQ2YsUUFBUSxFQUFFLFdBQVc7SUFDckIsc0JBQXNCLEVBQUUsK0JBQStCO0lBQ3ZELHNCQUFzQixFQUFFLCtCQUErQjtJQUN2RCxFQUFFLEVBQUUsMkJBQTJCO0NBQ2hDOzs7O0FBRUQsK0JBUUM7OztJQVBDLDRCQUFnQjs7SUFDaEIsNkJBQWtCOztJQUNsQiwrQkFBb0I7O0lBRXBCLDJCQUFnQzs7SUFDaEMsNEJBQWlCOztJQUNqQiw0QkFBa0I7Ozs7O0FBR3BCLGlDQWdDQzs7Ozs7Ozs7SUExQkMsbUNBQXVCOzs7OztJQUl2Qiw2QkFBa0U7Ozs7O0lBSWxFLGtDQUFzQjs7Ozs7SUFJdEIsaUNBQXFCOzs7Ozs7SUFLckIscUNBQTBCOzs7OztJQUkxQixnQ0FJMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTRlZhbHVlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRm9ybVByb3BlcnR5LCBQcm9wZXJ0eUdyb3VwIH0gZnJvbSAnLi9tb2RlbC9mb3JtLnByb3BlcnR5JztcblxuZXhwb3J0IGNvbnN0IEVSUk9SU0RFRkFVTFQgPSB7XG4gICdmYWxzZSBzY2hlbWEnOiBg5biD5bCU5qih5byP5Ye66ZSZYCxcbiAgJHJlZjogYOaXoOazleaJvuWIsOW8leeUqHtyZWZ9YCxcbiAgYWRkaXRpb25hbEl0ZW1zOiBg5LiN5YWB6K646LaF6L+He3JlZn1gLFxuICBhZGRpdGlvbmFsUHJvcGVydGllczogYOS4jeWFgeiuuOaciemineWklueahOWxnuaAp2AsXG4gIGFueU9mOiBg5pWw5o2u5bqU5Li6IGFueU9mIOaJgOaMh+WumueahOWFtuS4reS4gOS4qmAsXG4gIGRlcGVuZGVuY2llczogYOW6lOW9k+aLpeacieWxnuaAp3twcm9wZXJ0eX3nmoTkvp3otZblsZ7mgKd7ZGVwc31gLFxuICBlbnVtOiBg5bqU5b2T5piv6aKE6K6+5a6a55qE5p6a5Li+5YC85LmL5LiAYCxcbiAgZm9ybWF0OiBg5qC85byP5LiN5q2j56GuYCwgLy8gYOW6lOW9k+WMuemFjeagvOW8jyBcIntmb3JtYXR9XCJgLFxuICB0eXBlOiBg57G75Z6L5bqU5b2T5pivIHt0eXBlfWAsXG4gIHJlcXVpcmVkOiBg5b+F5aGr6aG5YCxcbiAgbWF4TGVuZ3RoOiBg6Iez5aSaIHtsaW1pdH0g5Liq5a2X56ymYCxcbiAgbWluTGVuZ3RoOiBg6Iez5bCRIHtsaW1pdH0g5Liq5a2X56ym5Lul5LiKYCxcbiAgbWluaW11bTogYOW/hemhuyB7Y29tcGFyaXNvbn17bGltaXR9YCxcbiAgZm9ybWF0TWluaW11bTogYOW/hemhuyB7Y29tcGFyaXNvbn17bGltaXR9YCxcbiAgbWF4aW11bTogYOW/hemhuyB7Y29tcGFyaXNvbn17bGltaXR9YCxcbiAgZm9ybWF0TWF4aW11bTogYOW/hemhuyB7Y29tcGFyaXNvbn17bGltaXR9YCxcbiAgbWF4SXRlbXM6IGDkuI3lupTlpJrkuo4ge2xpbWl0fSDkuKrpoblgLFxuICBtaW5JdGVtczogYOS4jeW6lOWwkeS6jiB7bGltaXR9IOS4qumhuWAsXG4gIG1heFByb3BlcnRpZXM6IGDkuI3lupTlpJrkuo4ge2xpbWl0fSDkuKrlsZ7mgKdgLFxuICBtaW5Qcm9wZXJ0aWVzOiBg5LiN5bqU5bCR5LqOIHtsaW1pdH0g5Liq5bGe5oCnYCxcbiAgbXVsdGlwbGVPZjogYOW6lOW9k+aYryB7bXVsdGlwbGVPZn0g55qE5pW05pWw5YCNYCxcbiAgbm90OiBg5LiN5bqU5b2T5Yy56YWNIFwibm90XCIgc2NoZW1hYCxcbiAgb25lT2Y6IGDlj6rog73ljLnphY3kuIDkuKogXCJvbmVPZlwiIOS4reeahCBzY2hlbWFgLFxuICBwYXR0ZXJuOiBg5pWw5o2u5qC85byP5LiN5q2j56GuYCxcbiAgdW5pcXVlSXRlbXM6IGDkuI3lupTlvZPlkKvmnInph43lpI3pobkgKOesrCB7an0g6aG55LiO56ysIHtpfSDpobnmmK/ph43lpI3nmoQpYCxcbiAgY3VzdG9tOiBg5qC85byP5LiN5q2j56GuYCxcbiAgcHJvcGVydHlOYW1lczogYOWxnuaAp+WQjSBcIntwcm9wZXJ0eU5hbWV9XCIg5peg5pWIYCxcbiAgcGF0dGVyblJlcXVpcmVkOiBg5bqU5b2T5pyJ5bGe5oCn5Yy56YWN5qih5byPIHttaXNzaW5nUGF0dGVybn1gLFxuICBzd2l0Y2g6IGDnlLHkuo4ge2Nhc2VJbmRleH0g5aSx6LSl77yM5pyq6YCa6L+HIFwic3dpdGNoXCIg5qCh6aqMYCxcbiAgY29uc3Q6IGDlupTlvZPnrYnkuo7luLjph49gLFxuICBjb250YWluczogYOW6lOW9k+WMheWQq+S4gOS4quacieaViOmhuWAsXG4gIGZvcm1hdEV4Y2x1c2l2ZU1heGltdW06IGBmb3JtYXRFeGNsdXNpdmVNYXhpbXVtIOW6lOW9k+aYr+W4g+WwlOWAvGAsXG4gIGZvcm1hdEV4Y2x1c2l2ZU1pbmltdW06IGBmb3JtYXRFeGNsdXNpdmVNaW5pbXVtIOW6lOW9k+aYr+W4g+WwlOWAvGAsXG4gIGlmOiBg5bqU5b2T5Yy56YWN5qih5byPIFwie2ZhaWxpbmdLZXl3b3JkfVwiYCxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXJyb3JEYXRhIHtcbiAga2V5d29yZDogc3RyaW5nO1xuICBkYXRhUGF0aD86IHN0cmluZztcbiAgc2NoZW1hUGF0aD86IHN0cmluZztcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBwYXJhbXM/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xuICBtZXNzYWdlPzogc3RyaW5nO1xuICBfY3VzdG9tPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFcnJvclNjaGVtYSB7XG4gIC8qKlxuICAgKiDmmK/lkKblrp7ml7bmoKHpqozvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICogLSBgdHJ1ZWAg5q+P5LiA5qyh6YO95qCh6aqMXG4gICAqIC0gYGZhbHNlYCDmj5DkuqTml7bmoKHpqoxcbiAgICovXG4gIGxpdmVWYWxpZGF0ZT86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDoh6rlrprkuYnplJnor6/kv6Hmga/mlofmnKzvvIzplK7lkI3otZ7lkIwgYEVycm9yRGF0YS5rZXl3b3JkYCDlgLxcbiAgICovXG4gIGVycm9ycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgKChvYmo6IEVycm9yRGF0YSkgPT4gc3RyaW5nKSB9O1xuICAvKipcbiAgICog5piv5ZCm56uL5Y2z5ZGI546w6ZSZ6K+v6KeG6KeJ77yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgZmlyc3RWaXN1YWw/OiBib29sZWFuO1xuICAvKipcbiAgICog5piv5ZCm5Y+q5bGV56S66ZSZ6K+v6KeG6KeJ5LiN5pi+56S66ZSZ6K+v5paH5pys77yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgb25seVZpc3VhbD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDmmK/lkKblv73nlaXmn5DkupvmlbDmja7nsbvlnovmoKHpqowgYEVSUk9SU0RFRkFVTFRgXG4gICAqIC0g5YC85aeL57uI5YyF5ZCrIGBEZWxvblNjaGVtYUZvcm1Db25maWcuaW5nb3JlS2V5d29yZHNgXG4gICAqL1xuICBpbmdvcmVLZXl3b3Jkcz86IHN0cmluZ1tdO1xuICAvKipcbiAgICog6Ieq5a6a5LmJ5qCh6aqMXG4gICAqL1xuICB2YWxpZGF0b3I/OiAoXG4gICAgdmFsdWU6IFNGVmFsdWUsXG4gICAgZm9ybVByb3BlcnR5OiBGb3JtUHJvcGVydHksXG4gICAgZm9ybTogUHJvcGVydHlHcm91cCxcbiAgKSA9PiBFcnJvckRhdGFbXSB8IE9ic2VydmFibGU8RXJyb3JEYXRhW10+O1xufVxuIl19