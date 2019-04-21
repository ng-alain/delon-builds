/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vZm9ybS8iLCJzb3VyY2VzIjpbInNyYy9zY2hlbWEvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBLHdDQUVDOzs7O0FBRUQsa0NBZ0NDOzs7Ozs7SUE1QkMsZ0NBQW1COzs7OztJQUduQiw2QkFBWTs7Ozs7SUFHWiw2QkFBWTs7Ozs7SUFHWiw2QkFBWTs7Ozs7SUFLWiwyQkFBVTs7Ozs7SUFHViwrQkFBa0I7Ozs7Ozs7SUFPbEIsNkJBQWdCOzs7OztJQUdoQixnQ0FBMEI7Ozs7Ozs7OztBQVU1Qiw4QkFrTUM7Ozs7Ozs7Ozs7O0lBeExDLHdCQUF3RTs7Ozs7Ozs7OztJQVN4RSx3QkFBMEI7Ozs7O0lBSzFCLDJCQUFpQjs7Ozs7SUFJakIsb0NBQTJCOzs7OztJQUkzQiwyQkFBaUI7Ozs7O0lBSWpCLG9DQUEyQjs7Ozs7SUFJM0IsOEJBQW9COzs7OztJQUtwQiw2QkFBbUI7Ozs7O0lBSW5CLDZCQUFtQjs7Ozs7SUFJbkIsMkJBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUF3QmpCLHlCQUFpQjs7Ozs7O0lBS2pCLDRCQUFrQjs7Ozs7O0lBS2xCLDRCQUFrQjs7Ozs7O0lBS2xCLCtCQUFzQjs7Ozs7SUFJdEIsbUNBQTJCOzs7OztJQUszQixpQ0FBdUI7Ozs7O0lBSXZCLGlDQUF1Qjs7Ozs7SUFJdkIsNEJBQW9COzs7OztJQUlwQiw4QkFBeUM7Ozs7Ozs7Ozs7O0lBYXpDLHNCQUFjOzs7Ozs7SUFLZCx3QkFBZ0I7Ozs7OztJQUtoQix3QkFBZ0I7Ozs7O0lBR2hCLHlCQUFtQjs7Ozs7SUFFbkIseUJBQW1COzs7OztJQUVuQix5QkFBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBaUJuQiwwQkFBZ0I7Ozs7Ozs7SUFPaEIseUJBQWU7Ozs7O0lBSWYsK0JBQXFCOzs7OztJQUlyQiwyQkFBYzs7Ozs7SUFJZCw0QkFBbUI7Ozs7O0lBTW5CLCtCQUFpQzs7Ozs7SUFFakMsd0JBQWM7Ozs7O0lBR2QsNEJBQWtCOzs7OztJQUdsQixzQkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTRlVJU2NoZW1hSXRlbSB9IGZyb20gJy4vdWknO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNGU2NoZW1hRGVmaW5pdGlvbiB7XG4gIFtrZXk6IHN0cmluZ106IFNGU2NoZW1hO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNGU2NoZW1hRW51bSB7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcblxuICAvKiog5piv5ZCm56aB55So54q25oCBICovXG4gIGRpc2FibGVkPzogYm9vbGVhbjtcblxuICAvKiog5paH5pysICovXG4gIGxhYmVsPzogYW55O1xuXG4gIC8qKiDmlofmnKwgKi9cbiAgdGl0bGU/OiBhbnk7XG5cbiAgLyoqIOWAvCAqL1xuICB2YWx1ZT86IGFueTtcblxuICAvKipcbiAgICog5Li76ZSu77yM6YCC55So6YOo5YiG5bCP6YOo5Lu25pWw5o2u6ZSu5ZCN77yM5L6L5aaC77yaYHRyZWUtc2VsZWN0YFxuICAgKi9cbiAga2V5PzogYW55O1xuXG4gIC8qKiDmmK/lkKbpgInkuK0gKi9cbiAgY2hlY2tlZD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOe7hOWQje+8jOmAgueUqOmDqOWIhuWFgeiuuOe7hOWIl+ihqOeahOWwj+mDqOS7tu+8jOS+i+Wmgu+8mmBzZWxlY3RgXG4gICAqIC0g57uE5a+55bqU55qE5paH5pys5Li6IGBsYWJlbGBcbiAgICogLSBgY2hpbGRyZW5gIOS4uuWtkOmhuVxuICAgKi9cbiAgZ3JvdXA/OiBib29sZWFuO1xuXG4gIC8qKiDnu4Tlr7nlupTnmoTlrZDnsbsgKi9cbiAgY2hpbGRyZW4/OiBTRlNjaGVtYUVudW1bXTtcbn1cblxuZXhwb3J0IHR5cGUgU0ZTY2hlbWFFbnVtVHlwZSA9IFNGU2NoZW1hRW51bSB8IG51bWJlciB8IHN0cmluZyB8IGJvb2xlYW47XG5cbi8qKlxuICogSlNPTiBTY2hlbWEgRm9ybSDnu5PmnoTkvZNcbiAqXG4gKiAqKuazqOaEj++8mioqIOaJgOaciee7k+aehOmDveS7peagh+WHhuS4uuWfuuWHhu+8jOmZpOS6hiBgdWlgIOWxnuaAp+S4uumdnuagh+WHhuWNlee6r+WPquaYr+S4uuS6huabtOWlveeahOW8gOWPkVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNGU2NoZW1hIHtcbiAgLy8vLy8vLy8vLy8vIEFueSAvLy8vLy8vLy8vLy8vXG4gIC8qKlxuICAgKiDmlbDmja7nsbvlnovvvIzmlK/mjIEgSmF2YVNjcmlwdCDln7rnoYDnsbvlnovvvJvms6jmhI/pobnvvJpcbiAgICpcbiAgICogLSBgaW50ZWdlcmAg6KGo56S65pW05Z6L77yMYG51bWJlcmAg6KGo56S65rWu54K55Z6LXG4gICAqIC0gSlNPTiDkuK0gYGRhdGVgIOetieWQjCBgc3RyaW5nYCDnsbvlnotcbiAgICogLSDmjIflrpogYGZvcm1hdGAg5qCH5YeG5Y+C5pWw5Y+v5Lul6Ieq5Yqo6YCC6YWN5riy5p+T5bCP6YOo5Lu2XG4gICAqIC0g5oyH5a6aIGB3aWRnZXRgIOWPguaVsOW8uuWItua4suafk+Wwj+mDqOS7tlxuICAgKi9cbiAgdHlwZT86ICdudW1iZXInIHwgJ2ludGVnZXInIHwgJ3N0cmluZycgfCAnYm9vbGVhbicgfCAnb2JqZWN0JyB8ICdhcnJheSc7XG4gIC8qKlxuICAgKiDmnprkuL7vvIzpnZnmgIHmlbDmja7mupDvvIzkvovlpoLvvJpgcmFkaW9g44CBYGNoZWNrYm94YCDnrYlcbiAgICpcbiAgICogLSBgZGlzYWJsZWRgIOWxnuaAp+ihqOekuu+8muemgeeUqOeKtuaAgVxuICAgKiAtIGBsYWJlbGAg5bGe5oCn6KGo56S677ya5paH5pysXG4gICAqIC0gYHZhbHVlYCDlsZ7mgKfooajnpLrvvJrov5Tlm57lgLxcbiAgICogLSDln7rnoYDmlbDmja7nsbvlnovmlbDnu4TkvJroh6rliqjovazljJbmiJAgYFNGU2NoZW1hRW51bWAg5pWw57uE5qC85byPXG4gICAqL1xuICBlbnVtPzogU0ZTY2hlbWFFbnVtVHlwZVtdO1xuICAvLy8vLy8vLy8vLy8g5pWw5YC857G75Z6LIC8vLy8vLy8vLy8vLy9cbiAgLyoqXG4gICAqIOacgOWwj+WAvFxuICAgKi9cbiAgbWluaW11bT86IG51bWJlcjtcbiAgLyoqXG4gICAqIOe6puadn+aYr+WQpuWMheaLrCBgbWluaW11bWAg5YC8XG4gICAqL1xuICBleGNsdXNpdmVNaW5pbXVtPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOacgOWkp+WAvFxuICAgKi9cbiAgbWF4aW11bT86IG51bWJlcjtcbiAgLyoqXG4gICAqIOe6puadn+aYr+WQpuWMheaLrCBgbWF4aW11bWAg5YC8XG4gICAqL1xuICBleGNsdXNpdmVNYXhpbXVtPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOWAjeaVsFxuICAgKi9cbiAgbXVsdGlwbGVPZj86IG51bWJlcjtcbiAgLy8vLy8vLy8vLy8vIOWtl+espuS4suexu+Weiy8vLy8vLy8vLy8vLy9cbiAgLyoqXG4gICAqIOWumuS5ieWtl+espuS4sueahOacgOWkp+mVv+W6plxuICAgKi9cbiAgbWF4TGVuZ3RoPzogbnVtYmVyO1xuICAvKipcbiAgICog5a6a5LmJ5a2X56ym5Liy55qE5pyA5bCP6ZW/5bqmXG4gICAqL1xuICBtaW5MZW5ndGg/OiBudW1iZXI7XG4gIC8qKlxuICAgKiDpqozor4HovpPlhaXlrZfmrrXmraPliJnooajovr7lvI/lrZfnrKbkuLLvvIzoi6XmjIflrpogYGZvcm1hdDogJ3JlZ2V4J2Ag5pe25Yqh5b+F5oyH5a6aXG4gICAqL1xuICBwYXR0ZXJuPzogc3RyaW5nO1xuICAvLy8vLy8vLy8vLy8g5pWw57uE57G75Z6LLy8vLy8vLy8vLy8vL1xuICAvKipcbiAgICog5pWw57uE5YWD57Sg57G75Z6L5o+P6L+w77yM5Y+q5pSv5oyB5pWw57uE5a+56LGh77yM6Iul6ZyA6KaB5Z+656GA57G75Z6L5pWw57uE5Y+v6YCa6L+H5YW25LuW6YOo5Lu25pSv5oyBXG4gICAqXG4gICAqIGBgYGpzb25cbiAgICogaXRlbXM6IHtcbiAgICogICB0eXBlOiAnb2JqZWN0JyxcbiAgICogICBwcm9wZXJ0aWVzOiB7XG4gICAqICAgICBuYW1lOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gICAqICAgICBhZ2U6IHsgdHlwZTogJ251bWJlcicgfVxuICAgKiAgIH1cbiAgICogfVxuICAgKiBgYGBcbiAgICpcbiAgICog57uT5p6cXG4gICAqXG4gICAqIGBgYGpzb25cbiAgICogW1xuICAgKiAgIHsgXCJuYW1lXCI6IFwiY2lwY2hrMVwiLCBcImFnZVwiOiAxOCB9LFxuICAgKiAgIHsgXCJuYW1lXCI6IFwiY2lwY2hrMlwiLCBcImFnZVwiOiAxNiB9XG4gICAqIF1cbiAgICogYGBgXG4gICAqL1xuICBpdGVtcz86IFNGU2NoZW1hO1xuICAvKipcbiAgICog57qm5p2f5pWw57uE5pyA5bCP55qE5YWD57Sg5Liq5pWwXG4gICAqIC0gYHR5cGU9XCJhcnJheVwiYCDml7bmnInmlYhcbiAgICovXG4gIG1pbkl0ZW1zPzogbnVtYmVyO1xuICAvKipcbiAgICog57qm5p2f5pWw57uE5pyA5aSn55qE5YWD57Sg5Liq5pWwXG4gICAqIC0gYHR5cGU9XCJhcnJheVwiYCDml7bmnInmlYhcbiAgICovXG4gIG1heEl0ZW1zPzogbnVtYmVyO1xuICAvKipcbiAgICog57qm5p2f5pWw57uE5q+P5Liq5YWD57Sg6YO95LiN55u45ZCMXG4gICAqIC0gYHR5cGU9XCJhcnJheVwiYCDml7bmnInmlYhcbiAgICovXG4gIHVuaXF1ZUl0ZW1zPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOaVsOe7hOmineWkluWFg+e0oOeahOagoemqjOinhOWImVxuICAgKi9cbiAgYWRkaXRpb25hbEl0ZW1zPzogU0ZTY2hlbWE7XG4gIC8vLy8vLy8vLy8vLyDlr7nosaHnsbvlnosvLy8vLy8vLy8vLy8vXG4gIC8qKlxuICAgKiDmnIDlpKflsZ7mgKfkuKrmlbDvvIzlv4XpobvmmK/pnZ7otJ/mlbTmlbBcbiAgICovXG4gIG1heFByb3BlcnRpZXM/OiBudW1iZXI7XG4gIC8qKlxuICAgKiDmnIDlsI/lsZ7mgKfkuKrmlbDvvIzlv4XpobvmmK/pnZ7otJ/mlbTmlbBcbiAgICovXG4gIG1pblByb3BlcnRpZXM/OiBudW1iZXI7XG4gIC8qKlxuICAgKiDlv4XloavpobnlsZ7mgKdcbiAgICovXG4gIHJlcXVpcmVkPzogc3RyaW5nW107XG4gIC8qKlxuICAgKiDlrprkuYnlsZ7mgKdcbiAgICovXG4gIHByb3BlcnRpZXM/OiB7IFtrZXk6IHN0cmluZ106IFNGU2NoZW1hIH07XG4gIC8vLy8vLy8vLy8vLyDmnaHku7bnsbsvLy8vLy8vLy8vLy8vXG4gIC8vIOacquadpeWPr+iDveiiq+enu+mZpFxuICAvLyBkZXBlbmRlbmNpZXM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZ1tdIHwgU0ZTY2hlbWEgfTtcbiAgLyoqXG4gICAqIOadoeS7tumqjOivgVxuICAgKiAtIOW/hemhu+WMheWQqyBgcHJvcGVydGllc2Ag6IqC54K5XG4gICAqICAtIOmUruWQjeW/hemhu+aYr+W9k+WJjeiKgueCuSBgcHJvcGVydGllc2Ag5YC85LmL5LiAXG4gICAqICAtIOWIqeeUqCBgZW51bWAg5bGe5oCn6KGo56S65p2h5Lu25YC877yM5pSv5oyBIGAkQU5ZJGAg6KGo56S65Lu75oSP5YC8XG4gICAqIC0g5LiN5pSv5oyB6LeoIFNjaGVtYSDoioLngrlcbiAgICogLSDlvZPmnaHku7bmiJDlip/kvJrmiafooYwgYHRoZW5gIOWQpuWImeaJp+ihjCBgZWxzZWBcbiAgICogLSBgaWZg5ZKMYHRoZW5gIOaYr+W/hemhu+WQjOaXtuWHuueOsO+8jGBlbHNlYCDlj6/pgInpoblcbiAgICovXG4gIGlmPzogU0ZTY2hlbWE7XG4gIC8qKlxuICAgKiDmnaHku7bmiJDlip/ml7bmiafooYxcbiAgICogLSDlj6rmlK/mjIEgYHJlcXVpcmVkYCDlj4LmlbDvvIznlKjkuo7ooajnpLrmmL7npLpcbiAgICovXG4gIHRoZW4/OiBTRlNjaGVtYTtcbiAgLyoqXG4gICAqIOadoeS7tuWksei0peaXtuaJp+ihjFxuICAgKiAtIOWPquaUr+aMgSBgcmVxdWlyZWRgIOWPguaVsO+8jOeUqOS6juihqOekuuaYvuekulxuICAgKi9cbiAgZWxzZT86IFNGU2NoZW1hO1xuICAvLy8vLy8vLy8vLy8g6YC76L6R57G7Ly8vLy8vLy8vLy8vL1xuICAvKiogKirkuI3lu7rorq4qKiDkvb/nlKjvvIzlj6/nlKggYHJlcXVpcmVkYCDmm7/ku6MgKi9cbiAgYWxsT2Y/OiBTRlNjaGVtYVtdO1xuICAvKiogKirkuI3lu7rorq4qKiDkvb/nlKjvvIzlj6/nlKggYHJlcXVpcmVkYCDlkowgYG1pblByb3BlcnRpZXNgIOabv+S7oyAqL1xuICBhbnlPZj86IFNGU2NoZW1hW107XG4gIC8qKiDlgLzlv4XpobvmmK/lhbbkuK3kuYvkuIAgKi9cbiAgb25lT2Y/OiBTRlNjaGVtYVtdO1xuICAvLy8vLy8vLy8vLy8g5qC85byPLy8vLy8vLy8vLy8vL1xuICAvKipcbiAgICog5pWw5o2u5qC85byP77yMW+aWh+aho10oaHR0cDovL2pzb24tc2NoZW1hLm9yZy9sYXRlc3QvanNvbi1zY2hlbWEtdmFsaWRhdGlvbi5odG1sI3JmYy5zZWN0aW9uLjcuMylcbiAgICogLSBgZGF0ZS10aW1lYCDml6XmnJ/ml7bpl7TvvIzmuLLmn5PkuLogYGRhdGVg77yMW1JGQzMzMzldKGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzMzM5I3NlY3Rpb24tNS42KVxuICAgKiAtIGBkYXRlYOOAgWBmdWxsLWRhdGVgIOaXpeacn++8jOa4suafk+S4uiBgZGF0ZWBcbiAgICogLSBgdGltZWDjgIFgZnVsbC10aW1lYCDml7bpl7TvvIzmuLLmn5PkuLogYHRpbWVgXG4gICAqIC0gYGVtYWlsYCBFbWFpbOagvOW8j++8jOa4suafk+S4uiBgYXV0b2NvbXBsZXRlYFxuICAgKiAtIOmdnuagh+WHhu+8mmB3ZWVrYO+8jOa4suafk+S4uiBgbnotd2Vlay1waWNrZXJgXG4gICAqIC0g6Z2e5qCH5YeG77yaYG1vbnRoYO+8jOa4suafk+S4uiBgbnotbW9udGgtcGlja2VyYFxuICAgKiAtIGBpcGAgSVDlnLDlnYDvvIzmuLLmn5PkuLogYGlucHV0YFxuICAgKiAtIGB1cmlgIFVSTOWcsOWdgO+8jOa4suafk+S4uiBgdXBsb2FkYFxuICAgKiAtIGByZWdleGAg5q2j5YiZ6KGo6L6+5byP77yM5b+F6aG75oyH5a6aIGBwYXR0ZXJuYCDlsZ7mgKfvvIzmuLLmn5PkuLogYGlucHV0YFxuICAgKiAtIGBtb2JpbGVgIOaJi+acuuWPt1xuICAgKiAtIGBpZC1jYXJkYCDouqvku73or4FcbiAgICogLSBgY29sb3JgIOminOiJsuWAvFxuICAgKi9cbiAgZm9ybWF0Pzogc3RyaW5nO1xuICAvLy8vLy8vLy8vLy8g5rOo6YeKLy8vLy8vLy8vLy8vL1xuICAvKipcbiAgICog5bGe5oCn5o+P6L+w77yM55u45b2T5LqOIGBsYWJlbGAg5YC877yM5oyJ5Lul5LiL6KeE5YiZ5bGV56S677yaXG4gICAqIC0g5b2T5YC85Li6IGBudWxsYOOAgWB1bmRlZmluZWRgIOaXtuS9v+eUqCBga2V5YCDmm7/ku6NcbiAgICogLSDlvZPlgLzkuLogYCcnYCDnqbrlrZfnrKbkuLLooajnpLrkuI3lsZXnpLogYGxhYmVsYCDpg6jliIbvvIzkvovlpoLvvJpgY2hlY2tib3hgIOWPr+iDvemcgOimgVxuICAgKi9cbiAgdGl0bGU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDlsZ7mgKfnm67nmoTmgKfop6Pph4rvvIzph4fnlKggYG56LWZvcm0tZXh0cmFgIOa4suafk1xuICAgKi9cbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDpu5jorqTlgLxcbiAgICovXG4gIGRlZmF1bHQ/OiBhbnk7XG4gIC8qKlxuICAgKiDmmK/lkKblj6ror7vnirbmgIFcbiAgICovXG4gIHJlYWRPbmx5PzogYm9vbGVhbjtcbiAgLy8vLy8vLy8vLy8vIOWFtuS7li8vLy8vLy8vLy8vLy9cbiAgLy8vLy8vLy8vLy8vIERlZmluaXRpb25zIC8vLy8vLy8vLy8vLy9cbiAgLy8gLyoqIOaMh+WumiBTY2hlbWEgSlNPTiDmqKHlvI/vvIzpu5jorqTkuLrvvJpgaHR0cDovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC0wNy9zY2hlbWFgICovXG4gIC8vICRzY2hlbWE/OiBzdHJpbmc7XG4gIC8qKiDlhoXpg6jnsbvlnovlrprkuYnkvZMgKi9cbiAgZGVmaW5pdGlvbnM/OiBTRlNjaGVtYURlZmluaXRpb247XG4gIC8qKiDlvJXnlKjlrprkuYnkvZMgKi9cbiAgJHJlZj86IHN0cmluZztcbiAgLy8gJHNjaGVtYT86IHN0cmluZztcbiAgLyoqIOmSiOWvueW8gOWPkeiAheeahOazqOmHiu+8jOaXoOS7u+S9leaEj+S5ie+8jOS5n+S4jeS8muiiq+agoemqjCAqL1xuICAkY29tbWVudD86IHN0cmluZztcbiAgLy8vLy8vLy8vLy8vIOmdnuagh+WHhi8vLy8vLy8vLy8vLy9cbiAgLyoqICoq5ZSv5LiA6Z2e5qCH5YeG77yaKiog5oyH5a6aVUnphY3nva7kv6Hmga/vvIzkvJjlhYjnuqfpq5jkuo4gYHNmYCDnu4Tku7YgYHVpYCDlsZ7mgKflgLwgKi9cbiAgdWk/OiBTRlVJU2NoZW1hSXRlbSB8IHN0cmluZztcbn1cbiJdfQ==