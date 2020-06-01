/**
 * @fileoverview added by tsickle
 * Generated from: src/errors.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var ERRORSDEFAULT = {
    'false schema': "\u5E03\u5C14\u6A21\u5F0F\u51FA\u9519",
    $ref: "\u65E0\u6CD5\u627E\u5230\u5F15\u7528{ref}",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvZXJyb3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUlBLE1BQU0sS0FBTyxhQUFhLEdBQUc7SUFDM0IsY0FBYyxFQUFFLHNDQUFRO0lBQ3hCLElBQUksRUFBRSwyQ0FBYTtJQUNuQixlQUFlLEVBQUUscUNBQVk7SUFDN0Isb0JBQW9CLEVBQUUsd0RBQVc7SUFDakMsS0FBSyxFQUFFLGlGQUFxQjtJQUM1QixZQUFZLEVBQUUsb0ZBQTZCO0lBQzNDLElBQUksRUFBRSwwRUFBYztJQUNwQixNQUFNLEVBQUUsZ0NBQU87O0lBQ2YsSUFBSSxFQUFFLHVDQUFjO0lBQ3BCLFFBQVEsRUFBRSxvQkFBSztJQUNmLFNBQVMsRUFBRSx5Q0FBZ0I7SUFDM0IsU0FBUyxFQUFFLHFEQUFrQjtJQUM3QixPQUFPLEVBQUUsa0NBQXdCO0lBQ2pDLGFBQWEsRUFBRSxrQ0FBd0I7SUFDdkMsT0FBTyxFQUFFLGtDQUF3QjtJQUNqQyxhQUFhLEVBQUUsa0NBQXdCO0lBQ3ZDLFFBQVEsRUFBRSwrQ0FBaUI7SUFDM0IsUUFBUSxFQUFFLCtDQUFpQjtJQUMzQixhQUFhLEVBQUUscURBQWtCO0lBQ2pDLGFBQWEsRUFBRSxxREFBa0I7SUFDakMsVUFBVSxFQUFFLDBEQUF1QjtJQUNuQyxHQUFHLEVBQUUsK0NBQW9CO0lBQ3pCLEtBQUssRUFBRSxvRUFBMEI7SUFDakMsT0FBTyxFQUFFLDRDQUFTO0lBQ2xCLFdBQVcsRUFBRSxxSEFBZ0M7SUFDN0MsTUFBTSxFQUFFLGdDQUFPO0lBQ2YsYUFBYSxFQUFFLG9EQUF5QjtJQUN4QyxlQUFlLEVBQUUseUVBQTRCO0lBQzdDLE1BQU0sRUFBRSx1RkFBbUM7SUFDM0MsS0FBSyxFQUFFLHNDQUFRO0lBQ2YsUUFBUSxFQUFFLHdEQUFXO0lBQ3JCLHNCQUFzQixFQUFFLDZEQUErQjtJQUN2RCxzQkFBc0IsRUFBRSw2REFBK0I7SUFDdkQsRUFBRSxFQUFFLDJEQUEyQjtDQUNoQzs7OztBQUVELCtCQVFDOzs7SUFMQyw0QkFBZ0I7O0lBQ2hCLDZCQUFrQjs7SUFDbEIsK0JBQW9COztJQUNwQiwyQkFBZ0M7O0lBQ2hDLDRCQUFpQjs7Ozs7O0FBR25CLGlDQTRCQzs7Ozs7Ozs7SUF0QkMsbUNBQXVCOzs7OztJQUl2Qiw2QkFBa0U7Ozs7O0lBSWxFLGtDQUFzQjs7Ozs7SUFJdEIsaUNBQXFCOzs7Ozs7SUFLckIscUNBQTBCOzs7OztJQUkxQixnQ0FBdUgiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTRlZhbHVlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRm9ybVByb3BlcnR5LCBQcm9wZXJ0eUdyb3VwIH0gZnJvbSAnLi9tb2RlbC9mb3JtLnByb3BlcnR5JztcblxuZXhwb3J0IGNvbnN0IEVSUk9SU0RFRkFVTFQgPSB7XG4gICdmYWxzZSBzY2hlbWEnOiBg5biD5bCU5qih5byP5Ye66ZSZYCxcbiAgJHJlZjogYOaXoOazleaJvuWIsOW8leeUqHtyZWZ9YCxcbiAgYWRkaXRpb25hbEl0ZW1zOiBg5LiN5YWB6K646LaF6L+He3JlZn1gLFxuICBhZGRpdGlvbmFsUHJvcGVydGllczogYOS4jeWFgeiuuOaciemineWklueahOWxnuaAp2AsXG4gIGFueU9mOiBg5pWw5o2u5bqU5Li6IGFueU9mIOaJgOaMh+WumueahOWFtuS4reS4gOS4qmAsXG4gIGRlcGVuZGVuY2llczogYOW6lOW9k+aLpeacieWxnuaAp3twcm9wZXJ0eX3nmoTkvp3otZblsZ7mgKd7ZGVwc31gLFxuICBlbnVtOiBg5bqU5b2T5piv6aKE6K6+5a6a55qE5p6a5Li+5YC85LmL5LiAYCxcbiAgZm9ybWF0OiBg5qC85byP5LiN5q2j56GuYCwgLy8gYOW6lOW9k+WMuemFjeagvOW8jyBcIntmb3JtYXR9XCJgLFxuICB0eXBlOiBg57G75Z6L5bqU5b2T5pivIHt0eXBlfWAsXG4gIHJlcXVpcmVkOiBg5b+F5aGr6aG5YCxcbiAgbWF4TGVuZ3RoOiBg6Iez5aSaIHtsaW1pdH0g5Liq5a2X56ymYCxcbiAgbWluTGVuZ3RoOiBg6Iez5bCRIHtsaW1pdH0g5Liq5a2X56ym5Lul5LiKYCxcbiAgbWluaW11bTogYOW/hemhuyB7Y29tcGFyaXNvbn17bGltaXR9YCxcbiAgZm9ybWF0TWluaW11bTogYOW/hemhuyB7Y29tcGFyaXNvbn17bGltaXR9YCxcbiAgbWF4aW11bTogYOW/hemhuyB7Y29tcGFyaXNvbn17bGltaXR9YCxcbiAgZm9ybWF0TWF4aW11bTogYOW/hemhuyB7Y29tcGFyaXNvbn17bGltaXR9YCxcbiAgbWF4SXRlbXM6IGDkuI3lupTlpJrkuo4ge2xpbWl0fSDkuKrpoblgLFxuICBtaW5JdGVtczogYOS4jeW6lOWwkeS6jiB7bGltaXR9IOS4qumhuWAsXG4gIG1heFByb3BlcnRpZXM6IGDkuI3lupTlpJrkuo4ge2xpbWl0fSDkuKrlsZ7mgKdgLFxuICBtaW5Qcm9wZXJ0aWVzOiBg5LiN5bqU5bCR5LqOIHtsaW1pdH0g5Liq5bGe5oCnYCxcbiAgbXVsdGlwbGVPZjogYOW6lOW9k+aYryB7bXVsdGlwbGVPZn0g55qE5pW05pWw5YCNYCxcbiAgbm90OiBg5LiN5bqU5b2T5Yy56YWNIFwibm90XCIgc2NoZW1hYCxcbiAgb25lT2Y6IGDlj6rog73ljLnphY3kuIDkuKogXCJvbmVPZlwiIOS4reeahCBzY2hlbWFgLFxuICBwYXR0ZXJuOiBg5pWw5o2u5qC85byP5LiN5q2j56GuYCxcbiAgdW5pcXVlSXRlbXM6IGDkuI3lupTlvZPlkKvmnInph43lpI3pobkgKOesrCB7an0g6aG55LiO56ysIHtpfSDpobnmmK/ph43lpI3nmoQpYCxcbiAgY3VzdG9tOiBg5qC85byP5LiN5q2j56GuYCxcbiAgcHJvcGVydHlOYW1lczogYOWxnuaAp+WQjSBcIntwcm9wZXJ0eU5hbWV9XCIg5peg5pWIYCxcbiAgcGF0dGVyblJlcXVpcmVkOiBg5bqU5b2T5pyJ5bGe5oCn5Yy56YWN5qih5byPIHttaXNzaW5nUGF0dGVybn1gLFxuICBzd2l0Y2g6IGDnlLHkuo4ge2Nhc2VJbmRleH0g5aSx6LSl77yM5pyq6YCa6L+HIFwic3dpdGNoXCIg5qCh6aqMYCxcbiAgY29uc3Q6IGDlupTlvZPnrYnkuo7luLjph49gLFxuICBjb250YWluczogYOW6lOW9k+WMheWQq+S4gOS4quacieaViOmhuWAsXG4gIGZvcm1hdEV4Y2x1c2l2ZU1heGltdW06IGBmb3JtYXRFeGNsdXNpdmVNYXhpbXVtIOW6lOW9k+aYr+W4g+WwlOWAvGAsXG4gIGZvcm1hdEV4Y2x1c2l2ZU1pbmltdW06IGBmb3JtYXRFeGNsdXNpdmVNaW5pbXVtIOW6lOW9k+aYr+W4g+WwlOWAvGAsXG4gIGlmOiBg5bqU5b2T5Yy56YWN5qih5byPIFwie2ZhaWxpbmdLZXl3b3JkfVwiYCxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXJyb3JEYXRhIHtcbiAgW2tleTogc3RyaW5nXTogYW55O1xuXG4gIGtleXdvcmQ6IHN0cmluZztcbiAgZGF0YVBhdGg/OiBzdHJpbmc7XG4gIHNjaGVtYVBhdGg/OiBzdHJpbmc7XG4gIHBhcmFtcz86IHsgW2tleTogc3RyaW5nXTogYW55IH07XG4gIG1lc3NhZ2U/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXJyb3JTY2hlbWEge1xuICAvKipcbiAgICog5piv5ZCm5a6e5pe25qCh6aqM77yM6buY6K6k77yaYHRydWVgXG4gICAqIC0gYHRydWVgIOavj+S4gOasoemDveagoemqjFxuICAgKiAtIGBmYWxzZWAg5o+Q5Lqk5pe25qCh6aqMXG4gICAqL1xuICBsaXZlVmFsaWRhdGU/OiBib29sZWFuO1xuICAvKipcbiAgICog6Ieq5a6a5LmJ6ZSZ6K+v5L+h5oGv5paH5pys77yM6ZSu5ZCN6LWe5ZCMIGBFcnJvckRhdGEua2V5d29yZGAg5YC8XG4gICAqL1xuICBlcnJvcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB8ICgob2JqOiBFcnJvckRhdGEpID0+IHN0cmluZykgfTtcbiAgLyoqXG4gICAqIOaYr+WQpueri+WNs+WRiOeOsOmUmeivr+inhuinie+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIGZpcnN0VmlzdWFsPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOaYr+WQpuWPquWxleekuumUmeivr+inhuinieS4jeaYvuekuumUmeivr+aWh+acrO+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIG9ubHlWaXN1YWw/OiBib29sZWFuO1xuICAvKipcbiAgICog5piv5ZCm5b+955Wl5p+Q5Lqb5pWw5o2u57G75Z6L5qCh6aqMIGBFUlJPUlNERUZBVUxUYFxuICAgKiAtIOWAvOWni+e7iOWMheWQqyBgRGVsb25TY2hlbWFGb3JtQ29uZmlnLmluZ29yZUtleXdvcmRzYFxuICAgKi9cbiAgaW5nb3JlS2V5d29yZHM/OiBzdHJpbmdbXTtcbiAgLyoqXG4gICAqIOiHquWumuS5ieagoemqjFxuICAgKi9cbiAgdmFsaWRhdG9yPzogKHZhbHVlOiBTRlZhbHVlLCBmb3JtUHJvcGVydHk6IEZvcm1Qcm9wZXJ0eSwgZm9ybTogUHJvcGVydHlHcm91cCkgPT4gRXJyb3JEYXRhW10gfCBPYnNlcnZhYmxlPEVycm9yRGF0YVtdPjtcbn1cbiJdfQ==