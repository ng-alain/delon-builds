/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function SFSchemaDefinition() { }
/**
 * @record
 */
export function SFSchemaEnum() { }
/* TODO: handle strange member:
[key: string]: any;
*/
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
 * 是否选中
 * @type {?|undefined}
 */
SFSchemaEnum.prototype.checked;
/**
 * 组名，适用部分允许组列表的小部分，例如：`select`
 * - 组对应的文本为 `label`
 * - `children` 为子项
 * @type {?|undefined}
 */
SFSchemaEnum.prototype.group;
/**
 * 组对应的子类
 * @type {?|undefined}
 */
SFSchemaEnum.prototype.children;
/** @typedef {?} */
var SFSchemaEnumType;
export { SFSchemaEnumType };
/**
 * JSON Schema Form 结构体
 *
 * **注意：** 所有结构都以标准为基准，除了 `ui` 属性为非标准单纯只是为了更好的开发
 * @record
 */
export function SFSchema() { }
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
 * 属性目的性解释，采用 `nz-form-extra` 渲染
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vZm9ybS8iLCJzb3VyY2VzIjpbInNyYy9zY2hlbWEvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNGVUlTY2hlbWFJdGVtIH0gZnJvbSAnLi91aSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNGU2NoZW1hRGVmaW5pdGlvbiB7XHJcbiAgW2tleTogc3RyaW5nXTogU0ZTY2hlbWE7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU0ZTY2hlbWFFbnVtIHtcclxuICBba2V5OiBzdHJpbmddOiBhbnk7XHJcblxyXG4gIC8qKiDmmK/lkKbnpoHnlKjnirbmgIEgKi9cclxuICBkaXNhYmxlZD86IGJvb2xlYW47XHJcblxyXG4gIC8qKiDmlofmnKwgKi9cclxuICBsYWJlbD86IGFueTtcclxuXHJcbiAgLyoqIOaWh+acrCAqL1xyXG4gIHRpdGxlPzogYW55O1xyXG5cclxuICAvKiog5YC8ICovXHJcbiAgdmFsdWU/OiBhbnk7XHJcblxyXG4gIC8qKiDmmK/lkKbpgInkuK0gKi9cclxuICBjaGVja2VkPzogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICog57uE5ZCN77yM6YCC55So6YOo5YiG5YWB6K6457uE5YiX6KGo55qE5bCP6YOo5YiG77yM5L6L5aaC77yaYHNlbGVjdGBcclxuICAgKiAtIOe7hOWvueW6lOeahOaWh+acrOS4uiBgbGFiZWxgXHJcbiAgICogLSBgY2hpbGRyZW5gIOS4uuWtkOmhuVxyXG4gICAqL1xyXG4gIGdyb3VwPzogYm9vbGVhbjtcclxuXHJcbiAgLyoqIOe7hOWvueW6lOeahOWtkOexuyAqL1xyXG4gIGNoaWxkcmVuPzogU0ZTY2hlbWFFbnVtW107XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFNGU2NoZW1hRW51bVR5cGUgPSBTRlNjaGVtYUVudW0gfCBudW1iZXIgfCBzdHJpbmcgfCBib29sZWFuO1xyXG5cclxuLyoqXHJcbiAqIEpTT04gU2NoZW1hIEZvcm0g57uT5p6E5L2TXHJcbiAqXHJcbiAqICoq5rOo5oSP77yaKiog5omA5pyJ57uT5p6E6YO95Lul5qCH5YeG5Li65Z+65YeG77yM6Zmk5LqGIGB1aWAg5bGe5oCn5Li66Z2e5qCH5YeG5Y2V57qv5Y+q5piv5Li65LqG5pu05aW955qE5byA5Y+RXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFNGU2NoZW1hIHtcclxuICAvLy8vLy8vLy8vLy8gQW55IC8vLy8vLy8vLy8vLy9cclxuICAvKipcclxuICAgKiDmlbDmja7nsbvlnovvvIzmlK/mjIEgSmF2YVNjcmlwdCDln7rnoYDnsbvlnovvvJvms6jmhI/pobnvvJpcclxuICAgKlxyXG4gICAqIC0gYGludGVnZXJgIOihqOekuuaVtOWei++8jGBudW1iZXJgIOihqOekuua1rueCueWei1xyXG4gICAqIC0gSlNPTiDkuK0gYGRhdGVgIOetieWQjCBgc3RyaW5nYCDnsbvlnotcclxuICAgKiAtIOaMh+WumiBgZm9ybWF0YCDmoIflh4blj4LmlbDlj6/ku6Xoh6rliqjpgILphY3muLLmn5PlsI/pg6jku7ZcclxuICAgKiAtIOaMh+WumiBgd2lkZ2V0YCDlj4LmlbDlvLrliLbmuLLmn5PlsI/pg6jku7ZcclxuICAgKi9cclxuICB0eXBlPzogJ251bWJlcicgfCAnaW50ZWdlcicgfCAnc3RyaW5nJyB8ICdib29sZWFuJyB8ICdvYmplY3QnIHwgJ2FycmF5JztcclxuICAvKipcclxuICAgKiDmnprkuL7vvIzpnZnmgIHmlbDmja7mupDvvIzkvovlpoLvvJpgcmFkaW9g44CBYGNoZWNrYm94YCDnrYlcclxuICAgKlxyXG4gICAqIC0gYGRpc2FibGVkYCDlsZ7mgKfooajnpLrvvJrnpoHnlKjnirbmgIFcclxuICAgKiAtIGBsYWJlbGAg5bGe5oCn6KGo56S677ya5paH5pysXHJcbiAgICogLSBgdmFsdWVgIOWxnuaAp+ihqOekuu+8mui/lOWbnuWAvFxyXG4gICAqIC0g5Z+656GA5pWw5o2u57G75Z6L5pWw57uE5Lya6Ieq5Yqo6L2s5YyW5oiQIGBTRlNjaGVtYUVudW1gIOaVsOe7hOagvOW8j1xyXG4gICAqL1xyXG4gIGVudW0/OiBTRlNjaGVtYUVudW1UeXBlW107XHJcbiAgLy8vLy8vLy8vLy8vIOaVsOWAvOexu+WeiyAvLy8vLy8vLy8vLy8vXHJcbiAgLyoqXHJcbiAgICog5pyA5bCP5YC8XHJcbiAgICovXHJcbiAgbWluaW11bT86IG51bWJlcjtcclxuICAvKipcclxuICAgKiDnuqbmnZ/mmK/lkKbljIXmi6wgYG1pbmltdW1gIOWAvFxyXG4gICAqL1xyXG4gIGV4Y2x1c2l2ZU1pbmltdW0/OiBib29sZWFuO1xyXG4gIC8qKlxyXG4gICAqIOacgOWkp+WAvFxyXG4gICAqL1xyXG4gIG1heGltdW0/OiBudW1iZXI7XHJcbiAgLyoqXHJcbiAgICog57qm5p2f5piv5ZCm5YyF5ousIGBtYXhpbXVtYCDlgLxcclxuICAgKi9cclxuICBleGNsdXNpdmVNYXhpbXVtPzogYm9vbGVhbjtcclxuICAvKipcclxuICAgKiDlgI3mlbBcclxuICAgKi9cclxuICBtdWx0aXBsZU9mPzogbnVtYmVyO1xyXG4gIC8vLy8vLy8vLy8vLyDlrZfnrKbkuLLnsbvlnosvLy8vLy8vLy8vLy8vXHJcbiAgLyoqXHJcbiAgICog5a6a5LmJ5a2X56ym5Liy55qE5pyA5aSn6ZW/5bqmXHJcbiAgICovXHJcbiAgbWF4TGVuZ3RoPzogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIOWumuS5ieWtl+espuS4sueahOacgOWwj+mVv+W6plxyXG4gICAqL1xyXG4gIG1pbkxlbmd0aD86IG51bWJlcjtcclxuICAvKipcclxuICAgKiDpqozor4HovpPlhaXlrZfmrrXmraPliJnooajovr7lvI/lrZfnrKbkuLLvvIzoi6XmjIflrpogYGZvcm1hdDogJ3JlZ2V4J2Ag5pe25Yqh5b+F5oyH5a6aXHJcbiAgICovXHJcbiAgcGF0dGVybj86IHN0cmluZztcclxuICAvLy8vLy8vLy8vLy8g5pWw57uE57G75Z6LLy8vLy8vLy8vLy8vL1xyXG4gIC8qKlxyXG4gICAqIOaVsOe7hOWFg+e0oOexu+Wei+aPj+i/sO+8jOWPquaUr+aMgeaVsOe7hOWvueixoe+8jOiLpemcgOimgeWfuuehgOexu+Wei+aVsOe7hOWPr+mAmui/h+WFtuS7lumDqOS7tuaUr+aMgVxyXG4gICAqXHJcbiAgICogYGBganNvblxyXG4gICAqIGl0ZW1zOiB7XHJcbiAgICogICB0eXBlOiAnb2JqZWN0JyxcclxuICAgKiAgIHByb3BlcnRpZXM6IHtcclxuICAgKiAgICAgbmFtZTogeyB0eXBlOiAnc3RyaW5nJyB9LFxyXG4gICAqICAgICBhZ2U6IHsgdHlwZTogJ251bWJlcicgfVxyXG4gICAqICAgfVxyXG4gICAqIH1cclxuICAgKiBgYGBcclxuICAgKlxyXG4gICAqIOe7k+aenFxyXG4gICAqXHJcbiAgICogYGBganNvblxyXG4gICAqIFtcclxuICAgKiAgIHsgXCJuYW1lXCI6IFwiY2lwY2hrMVwiLCBcImFnZVwiOiAxOCB9LFxyXG4gICAqICAgeyBcIm5hbWVcIjogXCJjaXBjaGsyXCIsIFwiYWdlXCI6IDE2IH1cclxuICAgKiBdXHJcbiAgICogYGBgXHJcbiAgICovXHJcbiAgaXRlbXM/OiBTRlNjaGVtYTtcclxuICAvKipcclxuICAgKiDnuqbmnZ/mlbDnu4TmnIDlsI/nmoTlhYPntKDkuKrmlbBcclxuICAgKiAtIGB0eXBlPVwiYXJyYXlcImAg5pe25pyJ5pWIXHJcbiAgICovXHJcbiAgbWluSXRlbXM/OiBudW1iZXI7XHJcbiAgLyoqXHJcbiAgICog57qm5p2f5pWw57uE5pyA5aSn55qE5YWD57Sg5Liq5pWwXHJcbiAgICogLSBgdHlwZT1cImFycmF5XCJgIOaXtuacieaViFxyXG4gICAqL1xyXG4gIG1heEl0ZW1zPzogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIOe6puadn+aVsOe7hOavj+S4quWFg+e0oOmDveS4jeebuOWQjFxyXG4gICAqIC0gYHR5cGU9XCJhcnJheVwiYCDml7bmnInmlYhcclxuICAgKi9cclxuICB1bmlxdWVJdGVtcz86IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICog5pWw57uE6aKd5aSW5YWD57Sg55qE5qCh6aqM6KeE5YiZXHJcbiAgICovXHJcbiAgYWRkaXRpb25hbEl0ZW1zPzogU0ZTY2hlbWE7XHJcbiAgLy8vLy8vLy8vLy8vIOWvueixoeexu+Weiy8vLy8vLy8vLy8vLy9cclxuICAvKipcclxuICAgKiDmnIDlpKflsZ7mgKfkuKrmlbDvvIzlv4XpobvmmK/pnZ7otJ/mlbTmlbBcclxuICAgKi9cclxuICBtYXhQcm9wZXJ0aWVzPzogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIOacgOWwj+WxnuaAp+S4quaVsO+8jOW/hemhu+aYr+mdnui0n+aVtOaVsFxyXG4gICAqL1xyXG4gIG1pblByb3BlcnRpZXM/OiBudW1iZXI7XHJcbiAgLyoqXHJcbiAgICog5b+F5aGr6aG55bGe5oCnXHJcbiAgICovXHJcbiAgcmVxdWlyZWQ/OiBzdHJpbmdbXTtcclxuICAvKipcclxuICAgKiDlrprkuYnlsZ7mgKdcclxuICAgKi9cclxuICBwcm9wZXJ0aWVzPzogeyBba2V5OiBzdHJpbmddOiBTRlNjaGVtYSB9O1xyXG4gIC8vLy8vLy8vLy8vLyDmnaHku7bnsbsvLy8vLy8vLy8vLy8vXHJcbiAgLy8g5pyq5p2l5Y+v6IO96KKr56e76ZmkXHJcbiAgLy8gZGVwZW5kZW5jaWVzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmdbXSB8IFNGU2NoZW1hIH07XHJcbiAgLyoqXHJcbiAgICog5p2h5Lu26aqM6K+BXHJcbiAgICogLSDlv4XpobvljIXlkKsgYHByb3BlcnRpZXNgIOiKgueCuVxyXG4gICAqICAtIOmUruWQjeW/hemhu+aYr+W9k+WJjeiKgueCuSBgcHJvcGVydGllc2Ag5YC85LmL5LiAXHJcbiAgICogIC0g5Yip55SoIGBlbnVtYCDlsZ7mgKfooajnpLrmnaHku7blgLzvvIzmlK/mjIEgYCRBTlkkYCDooajnpLrku7vmhI/lgLxcclxuICAgKiAtIOS4jeaUr+aMgei3qCBTY2hlbWEg6IqC54K5XHJcbiAgICogLSDlvZPmnaHku7bmiJDlip/kvJrmiafooYwgYHRoZW5gIOWQpuWImeaJp+ihjCBgZWxzZWBcclxuICAgKiAtIGBpZmDlkoxgdGhlbmAg5piv5b+F6aG75ZCM5pe25Ye6546w77yMYGVsc2VgIOWPr+mAiemhuVxyXG4gICAqL1xyXG4gIGlmPzogU0ZTY2hlbWE7XHJcbiAgLyoqXHJcbiAgICog5p2h5Lu25oiQ5Yqf5pe25omn6KGMXHJcbiAgICogLSDlj6rmlK/mjIEgYHJlcXVpcmVkYCDlj4LmlbDvvIznlKjkuo7ooajnpLrmmL7npLpcclxuICAgKi9cclxuICB0aGVuPzogU0ZTY2hlbWE7XHJcbiAgLyoqXHJcbiAgICog5p2h5Lu25aSx6LSl5pe25omn6KGMXHJcbiAgICogLSDlj6rmlK/mjIEgYHJlcXVpcmVkYCDlj4LmlbDvvIznlKjkuo7ooajnpLrmmL7npLpcclxuICAgKi9cclxuICBlbHNlPzogU0ZTY2hlbWE7XHJcbiAgLy8vLy8vLy8vLy8vIOmAu+i+keexuy8vLy8vLy8vLy8vLy9cclxuICAvKiogKirkuI3lu7rorq4qKiDkvb/nlKjvvIzlj6/nlKggYHJlcXVpcmVkYCDmm7/ku6MgKi9cclxuICBhbGxPZj86IFNGU2NoZW1hW107XHJcbiAgLyoqICoq5LiN5bu66K6uKiog5L2/55So77yM5Y+v55SoIGByZXF1aXJlZGAg5ZKMIGBtaW5Qcm9wZXJ0aWVzYCDmm7/ku6MgKi9cclxuICBhbnlPZj86IFNGU2NoZW1hW107XHJcbiAgLyoqIOWAvOW/hemhu+aYr+WFtuS4reS5i+S4gCAqL1xyXG4gIG9uZU9mPzogU0ZTY2hlbWFbXTtcclxuICAvLy8vLy8vLy8vLy8g5qC85byPLy8vLy8vLy8vLy8vL1xyXG4gIC8qKlxyXG4gICAqIOaVsOaNruagvOW8j++8jFvmlofmoaNdKGh0dHA6Ly9qc29uLXNjaGVtYS5vcmcvbGF0ZXN0L2pzb24tc2NoZW1hLXZhbGlkYXRpb24uaHRtbCNyZmMuc2VjdGlvbi43LjMpXHJcbiAgICogLSBgZGF0ZS10aW1lYCDml6XmnJ/ml7bpl7TvvIzmuLLmn5PkuLogYGRhdGVg77yMW1JGQzMzMzldKGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzMzM5I3NlY3Rpb24tNS42KVxyXG4gICAqIC0gYGRhdGVg44CBYGZ1bGwtZGF0ZWAg5pel5pyf77yM5riy5p+T5Li6IGBkYXRlYFxyXG4gICAqIC0gYHRpbWVg44CBYGZ1bGwtdGltZWAg5pe26Ze077yM5riy5p+T5Li6IGB0aW1lYFxyXG4gICAqIC0gYGVtYWlsYCBFbWFpbOagvOW8j++8jOa4suafk+S4uiBgYXV0b2NvbXBsZXRlYFxyXG4gICAqIC0g6Z2e5qCH5YeG77yaYHdlZWtg77yM5riy5p+T5Li6IGBuei13ZWVrLXBpY2tlcmBcclxuICAgKiAtIOmdnuagh+WHhu+8mmBtb250aGDvvIzmuLLmn5PkuLogYG56LW1vbnRoLXBpY2tlcmBcclxuICAgKiAtIGBpcGAgSVDlnLDlnYDvvIzmuLLmn5PkuLogYGlucHV0YFxyXG4gICAqIC0gYHVyaWAgVVJM5Zyw5Z2A77yM5riy5p+T5Li6IGB1cGxvYWRgXHJcbiAgICogLSBgcmVnZXhgIOato+WImeihqOi+vuW8j++8jOW/hemhu+aMh+WumiBgcGF0dGVybmAg5bGe5oCn77yM5riy5p+T5Li6IGBpbnB1dGBcclxuICAgKiAtIGBtb2JpbGVgIOaJi+acuuWPt1xyXG4gICAqIC0gYGlkLWNhcmRgIOi6q+S7veivgVxyXG4gICAqIC0gYGNvbG9yYCDpopzoibLlgLxcclxuICAgKi9cclxuICBmb3JtYXQ/OiBzdHJpbmc7XHJcbiAgLy8vLy8vLy8vLy8vIOazqOmHii8vLy8vLy8vLy8vLy9cclxuICAvKipcclxuICAgKiDlsZ7mgKfmj4/ov7DvvIznm7jlvZPkuo4gYGxhYmVsYCDlgLzvvIzmjInku6XkuIvop4TliJnlsZXnpLrvvJpcclxuICAgKiAtIOW9k+WAvOS4uiBgbnVsbGDjgIFgdW5kZWZpbmVkYCDml7bkvb/nlKggYGtleWAg5pu/5LujXHJcbiAgICogLSDlvZPlgLzkuLogYCcnYCDnqbrlrZfnrKbkuLLooajnpLrkuI3lsZXnpLogYGxhYmVsYCDpg6jliIbvvIzkvovlpoLvvJpgY2hlY2tib3hgIOWPr+iDvemcgOimgVxyXG4gICAqL1xyXG4gIHRpdGxlPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIOWxnuaAp+ebrueahOaAp+ino+mHiu+8jOmHh+eUqCBgbnotZm9ybS1leHRyYWAg5riy5p+TXHJcbiAgICovXHJcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICog6buY6K6k5YC8XHJcbiAgICovXHJcbiAgZGVmYXVsdD86IGFueTtcclxuICAvKipcclxuICAgKiDmmK/lkKblj6ror7vnirbmgIFcclxuICAgKi9cclxuICByZWFkT25seT86IGJvb2xlYW47XHJcbiAgLy8vLy8vLy8vLy8vIOWFtuS7li8vLy8vLy8vLy8vLy9cclxuICAvLy8vLy8vLy8vLy8gRGVmaW5pdGlvbnMgLy8vLy8vLy8vLy8vL1xyXG4gIC8vIC8qKiDmjIflrpogU2NoZW1hIEpTT04g5qih5byP77yM6buY6K6k5Li677yaYGh0dHA6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQtMDcvc2NoZW1hYCAqL1xyXG4gIC8vICRzY2hlbWE/OiBzdHJpbmc7XHJcbiAgLyoqIOWGhemDqOexu+Wei+WumuS5ieS9kyAqL1xyXG4gIGRlZmluaXRpb25zPzogU0ZTY2hlbWFEZWZpbml0aW9uO1xyXG4gIC8qKiDlvJXnlKjlrprkuYnkvZMgKi9cclxuICAkcmVmPzogc3RyaW5nO1xyXG4gIC8vICRzY2hlbWE/OiBzdHJpbmc7XHJcbiAgLyoqIOmSiOWvueW8gOWPkeiAheeahOazqOmHiu+8jOaXoOS7u+S9leaEj+S5ie+8jOS5n+S4jeS8muiiq+agoemqjCAqL1xyXG4gICRjb21tZW50Pzogc3RyaW5nO1xyXG4gIC8vLy8vLy8vLy8vLyDpnZ7moIflh4YvLy8vLy8vLy8vLy8vXHJcbiAgLyoqICoq5ZSv5LiA6Z2e5qCH5YeG77yaKiog5oyH5a6aVUnphY3nva7kv6Hmga/vvIzkvJjlhYjnuqfpq5jkuo4gYHNmYCDnu4Tku7YgYHVpYCDlsZ7mgKflgLwgKi9cclxuICB1aT86IFNGVUlTY2hlbWFJdGVtIHwgc3RyaW5nO1xyXG59XHJcbiJdfQ==