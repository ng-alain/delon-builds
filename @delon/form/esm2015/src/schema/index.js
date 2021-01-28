/**
 * @fileoverview added by tsickle
 * Generated from: src/schema/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function SFSchemaDefinition() { }
/**
 * @record
 */
export function SFSchemaEnum() { }
if (false) {
    /**
     * 是否禁用状态
     * @type {?|undefined}
     */
    SFSchemaEnum.prototype.disabled;
    /**
     * 文本
     * @type {?|undefined}
     */
    SFSchemaEnum.prototype.label;
    /**
     * 文本
     * @type {?|undefined}
     */
    SFSchemaEnum.prototype.title;
    /**
     * 值
     * @type {?|undefined}
     */
    SFSchemaEnum.prototype.value;
    /**
     * 主键，适用部分小部件数据键名，例如：`tree-select`
     * @type {?|undefined}
     */
    SFSchemaEnum.prototype.key;
    /**
     * 是否选中
     * @type {?|undefined}
     */
    SFSchemaEnum.prototype.checked;
    /**
     * 组名，适用部分允许组列表的小部件，例如：`select`
     * - 组对应的文本为 `label`
     * - `children` 为子项
     * @type {?|undefined}
     */
    SFSchemaEnum.prototype.group;
    /** @type {?|undefined} */
    SFSchemaEnum.prototype.isLeaf;
    /**
     * 组对应的子类
     * @type {?|undefined}
     */
    SFSchemaEnum.prototype.children;
    /* Skipping unhandled member: [key: string]: any;*/
}
/**
 * JSON Schema Form 结构体
 *
 * **注意：** 所有结构都以标准为基准，除了 `ui` 属性为非标准单纯只是为了更好的开发
 * @record
 */
export function SFSchema() { }
if (false) {
    /**
     * 数据类型，支持 JavaScript 基础类型；注意项：
     *
     * - `integer` 表示整型，`number` 表示浮点型
     * - JSON 中 `date` 等同 `string` 类型
     * - 指定 `format` 标准参数可以自动适配渲染小部件
     * - 指定 `widget` 参数强制渲染小部件
     * @type {?|undefined}
     */
    SFSchema.prototype.type;
    /**
     * 枚举，静态数据源，例如：`radio`、`checkbox` 等
     *
     * - `disabled` 属性表示：禁用状态
     * - `label` 属性表示：文本
     * - `value` 属性表示：返回值
     * - 基础数据类型数组会自动转化成 `SFSchemaEnum` 数组格式
     * @type {?|undefined}
     */
    SFSchema.prototype.enum;
    /**
     * 最小值
     * @type {?|undefined}
     */
    SFSchema.prototype.minimum;
    /**
     * 约束是否包括 `minimum` 值
     * @type {?|undefined}
     */
    SFSchema.prototype.exclusiveMinimum;
    /**
     * 最大值
     * @type {?|undefined}
     */
    SFSchema.prototype.maximum;
    /**
     * 约束是否包括 `maximum` 值
     * @type {?|undefined}
     */
    SFSchema.prototype.exclusiveMaximum;
    /**
     * 倍数
     * @type {?|undefined}
     */
    SFSchema.prototype.multipleOf;
    /**
     * 定义字符串的最大长度
     * @type {?|undefined}
     */
    SFSchema.prototype.maxLength;
    /**
     * 定义字符串的最小长度
     * @type {?|undefined}
     */
    SFSchema.prototype.minLength;
    /**
     * 验证输入字段正则表达式字符串，若指定 `format: 'regex'` 时务必指定
     * @type {?|undefined}
     */
    SFSchema.prototype.pattern;
    /**
     * 数组元素类型描述，只支持数组对象，若需要基础类型数组可通过其他部件支持
     *
     * ```json
     * items: {
     *   type: 'object',
     *   properties: {
     *     name: { type: 'string' },
     *     age: { type: 'number' }
     *   }
     * }
     * ```
     *
     * 结果
     *
     * ```json
     * [
     *   { "name": "cipchk1", "age": 18 },
     *   { "name": "cipchk2", "age": 16 }
     * ]
     * ```
     * @type {?|undefined}
     */
    SFSchema.prototype.items;
    /**
     * 约束数组最小的元素个数
     * - `type="array"` 时有效
     * @type {?|undefined}
     */
    SFSchema.prototype.minItems;
    /**
     * 约束数组最大的元素个数
     * - `type="array"` 时有效
     * @type {?|undefined}
     */
    SFSchema.prototype.maxItems;
    /**
     * 约束数组每个元素都不相同
     * - `type="array"` 时有效
     * @type {?|undefined}
     */
    SFSchema.prototype.uniqueItems;
    /**
     * 数组额外元素的校验规则
     * @type {?|undefined}
     */
    SFSchema.prototype.additionalItems;
    /**
     * 最大属性个数，必须是非负整数
     * @type {?|undefined}
     */
    SFSchema.prototype.maxProperties;
    /**
     * 最小属性个数，必须是非负整数
     * @type {?|undefined}
     */
    SFSchema.prototype.minProperties;
    /**
     * 必填项属性
     * @type {?|undefined}
     */
    SFSchema.prototype.required;
    /**
     * 定义属性
     * @type {?|undefined}
     */
    SFSchema.prototype.properties;
    /**
     * 条件验证
     * - 必须包含 `properties` 节点
     *  - 键名必须是当前节点 `properties` 值之一
     *  - 利用 `enum` 属性表示条件值，支持 `$ANY$` 表示任意值
     * - 不支持跨 Schema 节点
     * - 当条件成功会执行 `then` 否则执行 `else`
     * - `if`和`then` 是必须同时出现，`else` 可选项
     * @type {?|undefined}
     */
    SFSchema.prototype.if;
    /**
     * 条件成功时执行
     * - 只支持 `required` 参数，用于表示显示
     * @type {?|undefined}
     */
    SFSchema.prototype.then;
    /**
     * 条件失败时执行
     * - 只支持 `required` 参数，用于表示显示
     * @type {?|undefined}
     */
    SFSchema.prototype.else;
    /**
     * *不建议** 使用，可用 `required` 替代
     * @type {?|undefined}
     */
    SFSchema.prototype.allOf;
    /**
     * *不建议** 使用，可用 `required` 和 `minProperties` 替代
     * @type {?|undefined}
     */
    SFSchema.prototype.anyOf;
    /**
     * 值必须是其中之一
     * @type {?|undefined}
     */
    SFSchema.prototype.oneOf;
    /**
     * 数据格式，[文档](http://json-schema.org/latest/json-schema-validation.html#rfc.section.7.3)
     * - `date-time` 日期时间，渲染为 `date`，[RFC3339](https://tools.ietf.org/html/rfc3339#section-5.6)
     * - `date`、`full-date` 日期，渲染为 `date`
     * - `time`、`full-time` 时间，渲染为 `time`
     * - `email` Email格式，渲染为 `autocomplete`
     * - 非标准：`week`，渲染为 `nz-week-picker`
     * - 非标准：`month`，渲染为 `nz-month-picker`
     * - `ip` IP地址，渲染为 `input`
     * - `uri` URL地址，渲染为 `upload`
     * - `regex` 正则表达式，必须指定 `pattern` 属性，渲染为 `input`
     * - `mobile` 手机号
     * - `id-card` 身份证
     * - `color` 颜色值
     * @type {?|undefined}
     */
    SFSchema.prototype.format;
    /**
     * 属性描述，相当于 `label` 值，按以下规则展示：
     * - 当值为 `null`、`undefined` 时使用 `key` 替代
     * - 当值为 `''` 空字符串表示不展示 `label` 部分，例如：`checkbox` 可能需要
     * @type {?|undefined}
     */
    SFSchema.prototype.title;
    /**
     * 属性目的性解释
     * @type {?|undefined}
     */
    SFSchema.prototype.description;
    /**
     * 默认值
     * @type {?|undefined}
     */
    SFSchema.prototype.default;
    /**
     * 是否只读状态
     * @type {?|undefined}
     */
    SFSchema.prototype.readOnly;
    /**
     * 内部类型定义体
     * @type {?|undefined}
     */
    SFSchema.prototype.definitions;
    /**
     * 引用定义体
     * @type {?|undefined}
     */
    SFSchema.prototype.$ref;
    /**
     * 针对开发者的注释，无任何意义，也不会被校验
     * @type {?|undefined}
     */
    SFSchema.prototype.$comment;
    /**
     * *唯一非标准：** 指定UI配置信息，优先级高于 `sf` 组件 `ui` 属性值
     * @type {?|undefined}
     */
    SFSchema.prototype.ui;
    /* Skipping unhandled member: [key: string]: any;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3NyYy9zY2hlbWEvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQSx3Q0FFQzs7OztBQUVELGtDQWtDQzs7Ozs7O0lBOUJDLGdDQUFtQjs7Ozs7SUFHbkIsNkJBQVk7Ozs7O0lBR1osNkJBQVk7Ozs7O0lBR1osNkJBQVk7Ozs7O0lBS1osMkJBQVU7Ozs7O0lBR1YsK0JBQWtCOzs7Ozs7O0lBT2xCLDZCQUFnQjs7SUFFaEIsOEJBQWlCOzs7OztJQUdqQixnQ0FBMEI7Ozs7Ozs7OztBQVk1Qiw4QkFtTUM7Ozs7Ozs7Ozs7O0lBeExDLHdCQUFvQjs7Ozs7Ozs7OztJQVNwQix3QkFBMEI7Ozs7O0lBSzFCLDJCQUFpQjs7Ozs7SUFJakIsb0NBQTJCOzs7OztJQUkzQiwyQkFBaUI7Ozs7O0lBSWpCLG9DQUEyQjs7Ozs7SUFJM0IsOEJBQW9COzs7OztJQUtwQiw2QkFBbUI7Ozs7O0lBSW5CLDZCQUFtQjs7Ozs7SUFJbkIsMkJBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUF3QmpCLHlCQUFpQjs7Ozs7O0lBS2pCLDRCQUFrQjs7Ozs7O0lBS2xCLDRCQUFrQjs7Ozs7O0lBS2xCLCtCQUFzQjs7Ozs7SUFJdEIsbUNBQTJCOzs7OztJQUszQixpQ0FBdUI7Ozs7O0lBSXZCLGlDQUF1Qjs7Ozs7SUFJdkIsNEJBQW9COzs7OztJQUlwQiw4QkFBeUM7Ozs7Ozs7Ozs7O0lBYXpDLHNCQUFjOzs7Ozs7SUFLZCx3QkFBZ0I7Ozs7OztJQUtoQix3QkFBZ0I7Ozs7O0lBR2hCLHlCQUFtQjs7Ozs7SUFFbkIseUJBQW1COzs7OztJQUVuQix5QkFBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBaUJuQiwwQkFBZ0I7Ozs7Ozs7SUFPaEIseUJBQXNCOzs7OztJQUl0QiwrQkFBcUI7Ozs7O0lBSXJCLDJCQUFjOzs7OztJQUlkLDRCQUFtQjs7Ozs7SUFNbkIsK0JBQWlDOzs7OztJQUVqQyx3QkFBYzs7Ozs7SUFHZCw0QkFBa0I7Ozs7O0lBR2xCLHNCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNGVUlTY2hlbWFJdGVtIH0gZnJvbSAnLi91aSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU0ZTY2hlbWFEZWZpbml0aW9uIHtcbiAgW2tleTogc3RyaW5nXTogU0ZTY2hlbWE7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU0ZTY2hlbWFFbnVtIHtcbiAgW2tleTogc3RyaW5nXTogYW55O1xuXG4gIC8qKiDmmK/lkKbnpoHnlKjnirbmgIEgKi9cbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuXG4gIC8qKiDmlofmnKwgKi9cbiAgbGFiZWw/OiBhbnk7XG5cbiAgLyoqIOaWh+acrCAqL1xuICB0aXRsZT86IGFueTtcblxuICAvKiog5YC8ICovXG4gIHZhbHVlPzogYW55O1xuXG4gIC8qKlxuICAgKiDkuLvplK7vvIzpgILnlKjpg6jliIblsI/pg6jku7bmlbDmja7plK7lkI3vvIzkvovlpoLvvJpgdHJlZS1zZWxlY3RgXG4gICAqL1xuICBrZXk/OiBhbnk7XG5cbiAgLyoqIOaYr+WQpumAieS4rSAqL1xuICBjaGVja2VkPzogYm9vbGVhbjtcblxuICAvKipcbiAgICog57uE5ZCN77yM6YCC55So6YOo5YiG5YWB6K6457uE5YiX6KGo55qE5bCP6YOo5Lu277yM5L6L5aaC77yaYHNlbGVjdGBcbiAgICogLSDnu4Tlr7nlupTnmoTmlofmnKzkuLogYGxhYmVsYFxuICAgKiAtIGBjaGlsZHJlbmAg5Li65a2Q6aG5XG4gICAqL1xuICBncm91cD86IGJvb2xlYW47XG5cbiAgaXNMZWFmPzogYm9vbGVhbjtcblxuICAvKiog57uE5a+55bqU55qE5a2Q57G7ICovXG4gIGNoaWxkcmVuPzogU0ZTY2hlbWFFbnVtW107XG59XG5cbmV4cG9ydCB0eXBlIFNGU2NoZW1hVHlwZSA9ICdudW1iZXInIHwgJ2ludGVnZXInIHwgJ3N0cmluZycgfCAnYm9vbGVhbicgfCAnb2JqZWN0JyB8ICdhcnJheSc7XG5cbmV4cG9ydCB0eXBlIFNGU2NoZW1hRW51bVR5cGUgPSBTRlNjaGVtYUVudW0gfCBudW1iZXIgfCBzdHJpbmcgfCBib29sZWFuO1xuXG4vKipcbiAqIEpTT04gU2NoZW1hIEZvcm0g57uT5p6E5L2TXG4gKlxuICogKirms6jmhI/vvJoqKiDmiYDmnInnu5PmnoTpg73ku6XmoIflh4bkuLrln7rlh4bvvIzpmaTkuoYgYHVpYCDlsZ7mgKfkuLrpnZ7moIflh4bljZXnuq/lj6rmmK/kuLrkuobmm7Tlpb3nmoTlvIDlj5FcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTRlNjaGVtYSB7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbiAgLy8vLy8vLy8vLy8vIEFueSAvLy8vLy8vLy8vLy8vXG4gIC8qKlxuICAgKiDmlbDmja7nsbvlnovvvIzmlK/mjIEgSmF2YVNjcmlwdCDln7rnoYDnsbvlnovvvJvms6jmhI/pobnvvJpcbiAgICpcbiAgICogLSBgaW50ZWdlcmAg6KGo56S65pW05Z6L77yMYG51bWJlcmAg6KGo56S65rWu54K55Z6LXG4gICAqIC0gSlNPTiDkuK0gYGRhdGVgIOetieWQjCBgc3RyaW5nYCDnsbvlnotcbiAgICogLSDmjIflrpogYGZvcm1hdGAg5qCH5YeG5Y+C5pWw5Y+v5Lul6Ieq5Yqo6YCC6YWN5riy5p+T5bCP6YOo5Lu2XG4gICAqIC0g5oyH5a6aIGB3aWRnZXRgIOWPguaVsOW8uuWItua4suafk+Wwj+mDqOS7tlxuICAgKi9cbiAgdHlwZT86IFNGU2NoZW1hVHlwZTtcbiAgLyoqXG4gICAqIOaemuS4vu+8jOmdmeaAgeaVsOaNrua6kO+8jOS+i+Wmgu+8mmByYWRpb2DjgIFgY2hlY2tib3hgIOetiVxuICAgKlxuICAgKiAtIGBkaXNhYmxlZGAg5bGe5oCn6KGo56S677ya56aB55So54q25oCBXG4gICAqIC0gYGxhYmVsYCDlsZ7mgKfooajnpLrvvJrmlofmnKxcbiAgICogLSBgdmFsdWVgIOWxnuaAp+ihqOekuu+8mui/lOWbnuWAvFxuICAgKiAtIOWfuuehgOaVsOaNruexu+Wei+aVsOe7hOS8muiHquWKqOi9rOWMluaIkCBgU0ZTY2hlbWFFbnVtYCDmlbDnu4TmoLzlvI9cbiAgICovXG4gIGVudW0/OiBTRlNjaGVtYUVudW1UeXBlW107XG4gIC8vLy8vLy8vLy8vLyDmlbDlgLznsbvlnosgLy8vLy8vLy8vLy8vL1xuICAvKipcbiAgICog5pyA5bCP5YC8XG4gICAqL1xuICBtaW5pbXVtPzogbnVtYmVyO1xuICAvKipcbiAgICog57qm5p2f5piv5ZCm5YyF5ousIGBtaW5pbXVtYCDlgLxcbiAgICovXG4gIGV4Y2x1c2l2ZU1pbmltdW0/OiBib29sZWFuO1xuICAvKipcbiAgICog5pyA5aSn5YC8XG4gICAqL1xuICBtYXhpbXVtPzogbnVtYmVyO1xuICAvKipcbiAgICog57qm5p2f5piv5ZCm5YyF5ousIGBtYXhpbXVtYCDlgLxcbiAgICovXG4gIGV4Y2x1c2l2ZU1heGltdW0/OiBib29sZWFuO1xuICAvKipcbiAgICog5YCN5pWwXG4gICAqL1xuICBtdWx0aXBsZU9mPzogbnVtYmVyO1xuICAvLy8vLy8vLy8vLy8g5a2X56ym5Liy57G75Z6LLy8vLy8vLy8vLy8vL1xuICAvKipcbiAgICog5a6a5LmJ5a2X56ym5Liy55qE5pyA5aSn6ZW/5bqmXG4gICAqL1xuICBtYXhMZW5ndGg/OiBudW1iZXI7XG4gIC8qKlxuICAgKiDlrprkuYnlrZfnrKbkuLLnmoTmnIDlsI/plb/luqZcbiAgICovXG4gIG1pbkxlbmd0aD86IG51bWJlcjtcbiAgLyoqXG4gICAqIOmqjOivgei+k+WFpeWtl+auteato+WImeihqOi+vuW8j+Wtl+espuS4su+8jOiLpeaMh+WumiBgZm9ybWF0OiAncmVnZXgnYCDml7bliqHlv4XmjIflrppcbiAgICovXG4gIHBhdHRlcm4/OiBzdHJpbmc7XG4gIC8vLy8vLy8vLy8vLyDmlbDnu4TnsbvlnosvLy8vLy8vLy8vLy8vXG4gIC8qKlxuICAgKiDmlbDnu4TlhYPntKDnsbvlnovmj4/ov7DvvIzlj6rmlK/mjIHmlbDnu4Tlr7nosaHvvIzoi6XpnIDopoHln7rnoYDnsbvlnovmlbDnu4Tlj6/pgJrov4flhbbku5bpg6jku7bmlK/mjIFcbiAgICpcbiAgICogYGBganNvblxuICAgKiBpdGVtczoge1xuICAgKiAgIHR5cGU6ICdvYmplY3QnLFxuICAgKiAgIHByb3BlcnRpZXM6IHtcbiAgICogICAgIG5hbWU6IHsgdHlwZTogJ3N0cmluZycgfSxcbiAgICogICAgIGFnZTogeyB0eXBlOiAnbnVtYmVyJyB9XG4gICAqICAgfVxuICAgKiB9XG4gICAqIGBgYFxuICAgKlxuICAgKiDnu5PmnpxcbiAgICpcbiAgICogYGBganNvblxuICAgKiBbXG4gICAqICAgeyBcIm5hbWVcIjogXCJjaXBjaGsxXCIsIFwiYWdlXCI6IDE4IH0sXG4gICAqICAgeyBcIm5hbWVcIjogXCJjaXBjaGsyXCIsIFwiYWdlXCI6IDE2IH1cbiAgICogXVxuICAgKiBgYGBcbiAgICovXG4gIGl0ZW1zPzogU0ZTY2hlbWE7XG4gIC8qKlxuICAgKiDnuqbmnZ/mlbDnu4TmnIDlsI/nmoTlhYPntKDkuKrmlbBcbiAgICogLSBgdHlwZT1cImFycmF5XCJgIOaXtuacieaViFxuICAgKi9cbiAgbWluSXRlbXM/OiBudW1iZXI7XG4gIC8qKlxuICAgKiDnuqbmnZ/mlbDnu4TmnIDlpKfnmoTlhYPntKDkuKrmlbBcbiAgICogLSBgdHlwZT1cImFycmF5XCJgIOaXtuacieaViFxuICAgKi9cbiAgbWF4SXRlbXM/OiBudW1iZXI7XG4gIC8qKlxuICAgKiDnuqbmnZ/mlbDnu4Tmr4/kuKrlhYPntKDpg73kuI3nm7jlkIxcbiAgICogLSBgdHlwZT1cImFycmF5XCJgIOaXtuacieaViFxuICAgKi9cbiAgdW5pcXVlSXRlbXM/OiBib29sZWFuO1xuICAvKipcbiAgICog5pWw57uE6aKd5aSW5YWD57Sg55qE5qCh6aqM6KeE5YiZXG4gICAqL1xuICBhZGRpdGlvbmFsSXRlbXM/OiBTRlNjaGVtYTtcbiAgLy8vLy8vLy8vLy8vIOWvueixoeexu+Weiy8vLy8vLy8vLy8vLy9cbiAgLyoqXG4gICAqIOacgOWkp+WxnuaAp+S4quaVsO+8jOW/hemhu+aYr+mdnui0n+aVtOaVsFxuICAgKi9cbiAgbWF4UHJvcGVydGllcz86IG51bWJlcjtcbiAgLyoqXG4gICAqIOacgOWwj+WxnuaAp+S4quaVsO+8jOW/hemhu+aYr+mdnui0n+aVtOaVsFxuICAgKi9cbiAgbWluUHJvcGVydGllcz86IG51bWJlcjtcbiAgLyoqXG4gICAqIOW/heWhq+mhueWxnuaAp1xuICAgKi9cbiAgcmVxdWlyZWQ/OiBzdHJpbmdbXTtcbiAgLyoqXG4gICAqIOWumuS5ieWxnuaAp1xuICAgKi9cbiAgcHJvcGVydGllcz86IHsgW2tleTogc3RyaW5nXTogU0ZTY2hlbWEgfTtcbiAgLy8vLy8vLy8vLy8vIOadoeS7tuexuy8vLy8vLy8vLy8vLy9cbiAgLy8g5pyq5p2l5Y+v6IO96KKr56e76ZmkXG4gIC8vIGRlcGVuZGVuY2llcz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nW10gfCBTRlNjaGVtYSB9O1xuICAvKipcbiAgICog5p2h5Lu26aqM6K+BXG4gICAqIC0g5b+F6aG75YyF5ZCrIGBwcm9wZXJ0aWVzYCDoioLngrlcbiAgICogIC0g6ZSu5ZCN5b+F6aG75piv5b2T5YmN6IqC54K5IGBwcm9wZXJ0aWVzYCDlgLzkuYvkuIBcbiAgICogIC0g5Yip55SoIGBlbnVtYCDlsZ7mgKfooajnpLrmnaHku7blgLzvvIzmlK/mjIEgYCRBTlkkYCDooajnpLrku7vmhI/lgLxcbiAgICogLSDkuI3mlK/mjIHot6ggU2NoZW1hIOiKgueCuVxuICAgKiAtIOW9k+adoeS7tuaIkOWKn+S8muaJp+ihjCBgdGhlbmAg5ZCm5YiZ5omn6KGMIGBlbHNlYFxuICAgKiAtIGBpZmDlkoxgdGhlbmAg5piv5b+F6aG75ZCM5pe25Ye6546w77yMYGVsc2VgIOWPr+mAiemhuVxuICAgKi9cbiAgaWY/OiBTRlNjaGVtYTtcbiAgLyoqXG4gICAqIOadoeS7tuaIkOWKn+aXtuaJp+ihjFxuICAgKiAtIOWPquaUr+aMgSBgcmVxdWlyZWRgIOWPguaVsO+8jOeUqOS6juihqOekuuaYvuekulxuICAgKi9cbiAgdGhlbj86IFNGU2NoZW1hO1xuICAvKipcbiAgICog5p2h5Lu25aSx6LSl5pe25omn6KGMXG4gICAqIC0g5Y+q5pSv5oyBIGByZXF1aXJlZGAg5Y+C5pWw77yM55So5LqO6KGo56S65pi+56S6XG4gICAqL1xuICBlbHNlPzogU0ZTY2hlbWE7XG4gIC8vLy8vLy8vLy8vLyDpgLvovpHnsbsvLy8vLy8vLy8vLy8vXG4gIC8qKiAqKuS4jeW7uuiurioqIOS9v+eUqO+8jOWPr+eUqCBgcmVxdWlyZWRgIOabv+S7oyAqL1xuICBhbGxPZj86IFNGU2NoZW1hW107XG4gIC8qKiAqKuS4jeW7uuiurioqIOS9v+eUqO+8jOWPr+eUqCBgcmVxdWlyZWRgIOWSjCBgbWluUHJvcGVydGllc2Ag5pu/5LujICovXG4gIGFueU9mPzogU0ZTY2hlbWFbXTtcbiAgLyoqIOWAvOW/hemhu+aYr+WFtuS4reS5i+S4gCAqL1xuICBvbmVPZj86IFNGU2NoZW1hW107XG4gIC8vLy8vLy8vLy8vLyDmoLzlvI8vLy8vLy8vLy8vLy8vXG4gIC8qKlxuICAgKiDmlbDmja7moLzlvI/vvIxb5paH5qGjXShodHRwOi8vanNvbi1zY2hlbWEub3JnL2xhdGVzdC9qc29uLXNjaGVtYS12YWxpZGF0aW9uLmh0bWwjcmZjLnNlY3Rpb24uNy4zKVxuICAgKiAtIGBkYXRlLXRpbWVgIOaXpeacn+aXtumXtO+8jOa4suafk+S4uiBgZGF0ZWDvvIxbUkZDMzMzOV0oaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzMzMzkjc2VjdGlvbi01LjYpXG4gICAqIC0gYGRhdGVg44CBYGZ1bGwtZGF0ZWAg5pel5pyf77yM5riy5p+T5Li6IGBkYXRlYFxuICAgKiAtIGB0aW1lYOOAgWBmdWxsLXRpbWVgIOaXtumXtO+8jOa4suafk+S4uiBgdGltZWBcbiAgICogLSBgZW1haWxgIEVtYWls5qC85byP77yM5riy5p+T5Li6IGBhdXRvY29tcGxldGVgXG4gICAqIC0g6Z2e5qCH5YeG77yaYHdlZWtg77yM5riy5p+T5Li6IGBuei13ZWVrLXBpY2tlcmBcbiAgICogLSDpnZ7moIflh4bvvJpgbW9udGhg77yM5riy5p+T5Li6IGBuei1tb250aC1waWNrZXJgXG4gICAqIC0gYGlwYCBJUOWcsOWdgO+8jOa4suafk+S4uiBgaW5wdXRgXG4gICAqIC0gYHVyaWAgVVJM5Zyw5Z2A77yM5riy5p+T5Li6IGB1cGxvYWRgXG4gICAqIC0gYHJlZ2V4YCDmraPliJnooajovr7lvI/vvIzlv4XpobvmjIflrpogYHBhdHRlcm5gIOWxnuaAp++8jOa4suafk+S4uiBgaW5wdXRgXG4gICAqIC0gYG1vYmlsZWAg5omL5py65Y+3XG4gICAqIC0gYGlkLWNhcmRgIOi6q+S7veivgVxuICAgKiAtIGBjb2xvcmAg6aKc6Imy5YC8XG4gICAqL1xuICBmb3JtYXQ/OiBzdHJpbmc7XG4gIC8vLy8vLy8vLy8vLyDms6jph4ovLy8vLy8vLy8vLy8vXG4gIC8qKlxuICAgKiDlsZ7mgKfmj4/ov7DvvIznm7jlvZPkuo4gYGxhYmVsYCDlgLzvvIzmjInku6XkuIvop4TliJnlsZXnpLrvvJpcbiAgICogLSDlvZPlgLzkuLogYG51bGxg44CBYHVuZGVmaW5lZGAg5pe25L2/55SoIGBrZXlgIOabv+S7o1xuICAgKiAtIOW9k+WAvOS4uiBgJydgIOepuuWtl+espuS4suihqOekuuS4jeWxleekuiBgbGFiZWxgIOmDqOWIhu+8jOS+i+Wmgu+8mmBjaGVja2JveGAg5Y+v6IO96ZyA6KaBXG4gICAqL1xuICB0aXRsZT86IHN0cmluZyB8IG51bGw7XG4gIC8qKlxuICAgKiDlsZ7mgKfnm67nmoTmgKfop6Pph4pcbiAgICovXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAvKipcbiAgICog6buY6K6k5YC8XG4gICAqL1xuICBkZWZhdWx0PzogYW55O1xuICAvKipcbiAgICog5piv5ZCm5Y+q6K+754q25oCBXG4gICAqL1xuICByZWFkT25seT86IGJvb2xlYW47XG4gIC8vLy8vLy8vLy8vLyDlhbbku5YvLy8vLy8vLy8vLy8vXG4gIC8vLy8vLy8vLy8vLyBEZWZpbml0aW9ucyAvLy8vLy8vLy8vLy8vXG4gIC8vIC8qKiDmjIflrpogU2NoZW1hIEpTT04g5qih5byP77yM6buY6K6k5Li677yaYGh0dHA6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQtMDcvc2NoZW1hYCAqL1xuICAvLyAkc2NoZW1hPzogc3RyaW5nO1xuICAvKiog5YaF6YOo57G75Z6L5a6a5LmJ5L2TICovXG4gIGRlZmluaXRpb25zPzogU0ZTY2hlbWFEZWZpbml0aW9uO1xuICAvKiog5byV55So5a6a5LmJ5L2TICovXG4gICRyZWY/OiBzdHJpbmc7XG4gIC8vICRzY2hlbWE/OiBzdHJpbmc7XG4gIC8qKiDpkojlr7nlvIDlj5HogIXnmoTms6jph4rvvIzml6Dku7vkvZXmhI/kuYnvvIzkuZ/kuI3kvJrooqvmoKHpqowgKi9cbiAgJGNvbW1lbnQ/OiBzdHJpbmc7XG4gIC8vLy8vLy8vLy8vLyDpnZ7moIflh4YvLy8vLy8vLy8vLy8vXG4gIC8qKiAqKuWUr+S4gOmdnuagh+WHhu+8mioqIOaMh+WumlVJ6YWN572u5L+h5oGv77yM5LyY5YWI57qn6auY5LqOIGBzZmAg57uE5Lu2IGB1aWAg5bGe5oCn5YC8ICovXG4gIHVpPzogU0ZVSVNjaGVtYUl0ZW0gfCBzdHJpbmc7XG59XG4iXX0=