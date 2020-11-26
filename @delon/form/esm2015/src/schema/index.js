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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdnN0cy93b3JrLzEvcy9wYWNrYWdlcy9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3NjaGVtYS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVBLHdDQUVDOzs7O0FBRUQsa0NBa0NDOzs7Ozs7SUE5QkMsZ0NBQW1COzs7OztJQUduQiw2QkFBWTs7Ozs7SUFHWiw2QkFBWTs7Ozs7SUFHWiw2QkFBWTs7Ozs7SUFLWiwyQkFBVTs7Ozs7SUFHViwrQkFBa0I7Ozs7Ozs7SUFPbEIsNkJBQWdCOztJQUVoQiw4QkFBaUI7Ozs7O0lBR2pCLGdDQUEwQjs7Ozs7Ozs7O0FBWTVCLDhCQW1NQzs7Ozs7Ozs7Ozs7SUF4TEMsd0JBQW9COzs7Ozs7Ozs7O0lBU3BCLHdCQUEwQjs7Ozs7SUFLMUIsMkJBQWlCOzs7OztJQUlqQixvQ0FBMkI7Ozs7O0lBSTNCLDJCQUFpQjs7Ozs7SUFJakIsb0NBQTJCOzs7OztJQUkzQiw4QkFBb0I7Ozs7O0lBS3BCLDZCQUFtQjs7Ozs7SUFJbkIsNkJBQW1COzs7OztJQUluQiwyQkFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXdCakIseUJBQWlCOzs7Ozs7SUFLakIsNEJBQWtCOzs7Ozs7SUFLbEIsNEJBQWtCOzs7Ozs7SUFLbEIsK0JBQXNCOzs7OztJQUl0QixtQ0FBMkI7Ozs7O0lBSzNCLGlDQUF1Qjs7Ozs7SUFJdkIsaUNBQXVCOzs7OztJQUl2Qiw0QkFBb0I7Ozs7O0lBSXBCLDhCQUF5Qzs7Ozs7Ozs7Ozs7SUFhekMsc0JBQWM7Ozs7OztJQUtkLHdCQUFnQjs7Ozs7O0lBS2hCLHdCQUFnQjs7Ozs7SUFHaEIseUJBQW1COzs7OztJQUVuQix5QkFBbUI7Ozs7O0lBRW5CLHlCQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFpQm5CLDBCQUFnQjs7Ozs7OztJQU9oQix5QkFBc0I7Ozs7O0lBSXRCLCtCQUFxQjs7Ozs7SUFJckIsMkJBQWM7Ozs7O0lBSWQsNEJBQW1COzs7OztJQU1uQiwrQkFBaUM7Ozs7O0lBRWpDLHdCQUFjOzs7OztJQUdkLDRCQUFrQjs7Ozs7SUFHbEIsc0JBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU0ZVSVNjaGVtYUl0ZW0gfSBmcm9tICcuL3VpJztcblxuZXhwb3J0IGludGVyZmFjZSBTRlNjaGVtYURlZmluaXRpb24ge1xuICBba2V5OiBzdHJpbmddOiBTRlNjaGVtYTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTRlNjaGVtYUVudW0ge1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG5cbiAgLyoqIOaYr+WQpuemgeeUqOeKtuaAgSAqL1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG5cbiAgLyoqIOaWh+acrCAqL1xuICBsYWJlbD86IGFueTtcblxuICAvKiog5paH5pysICovXG4gIHRpdGxlPzogYW55O1xuXG4gIC8qKiDlgLwgKi9cbiAgdmFsdWU/OiBhbnk7XG5cbiAgLyoqXG4gICAqIOS4u+mUru+8jOmAgueUqOmDqOWIhuWwj+mDqOS7tuaVsOaNrumUruWQje+8jOS+i+Wmgu+8mmB0cmVlLXNlbGVjdGBcbiAgICovXG4gIGtleT86IGFueTtcblxuICAvKiog5piv5ZCm6YCJ5LitICovXG4gIGNoZWNrZWQ/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDnu4TlkI3vvIzpgILnlKjpg6jliIblhYHorrjnu4TliJfooajnmoTlsI/pg6jku7bvvIzkvovlpoLvvJpgc2VsZWN0YFxuICAgKiAtIOe7hOWvueW6lOeahOaWh+acrOS4uiBgbGFiZWxgXG4gICAqIC0gYGNoaWxkcmVuYCDkuLrlrZDpoblcbiAgICovXG4gIGdyb3VwPzogYm9vbGVhbjtcblxuICBpc0xlYWY/OiBib29sZWFuO1xuXG4gIC8qKiDnu4Tlr7nlupTnmoTlrZDnsbsgKi9cbiAgY2hpbGRyZW4/OiBTRlNjaGVtYUVudW1bXTtcbn1cblxuZXhwb3J0IHR5cGUgU0ZTY2hlbWFUeXBlID0gJ251bWJlcicgfCAnaW50ZWdlcicgfCAnc3RyaW5nJyB8ICdib29sZWFuJyB8ICdvYmplY3QnIHwgJ2FycmF5JztcblxuZXhwb3J0IHR5cGUgU0ZTY2hlbWFFbnVtVHlwZSA9IFNGU2NoZW1hRW51bSB8IG51bWJlciB8IHN0cmluZyB8IGJvb2xlYW47XG5cbi8qKlxuICogSlNPTiBTY2hlbWEgRm9ybSDnu5PmnoTkvZNcbiAqXG4gKiAqKuazqOaEj++8mioqIOaJgOaciee7k+aehOmDveS7peagh+WHhuS4uuWfuuWHhu+8jOmZpOS6hiBgdWlgIOWxnuaAp+S4uumdnuagh+WHhuWNlee6r+WPquaYr+S4uuS6huabtOWlveeahOW8gOWPkVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNGU2NoZW1hIHtcbiAgW2tleTogc3RyaW5nXTogYW55O1xuICAvLy8vLy8vLy8vLy8gQW55IC8vLy8vLy8vLy8vLy9cbiAgLyoqXG4gICAqIOaVsOaNruexu+Wei++8jOaUr+aMgSBKYXZhU2NyaXB0IOWfuuehgOexu+Wei++8m+azqOaEj+mhue+8mlxuICAgKlxuICAgKiAtIGBpbnRlZ2VyYCDooajnpLrmlbTlnovvvIxgbnVtYmVyYCDooajnpLrmta7ngrnlnotcbiAgICogLSBKU09OIOS4rSBgZGF0ZWAg562J5ZCMIGBzdHJpbmdgIOexu+Wei1xuICAgKiAtIOaMh+WumiBgZm9ybWF0YCDmoIflh4blj4LmlbDlj6/ku6Xoh6rliqjpgILphY3muLLmn5PlsI/pg6jku7ZcbiAgICogLSDmjIflrpogYHdpZGdldGAg5Y+C5pWw5by65Yi25riy5p+T5bCP6YOo5Lu2XG4gICAqL1xuICB0eXBlPzogU0ZTY2hlbWFUeXBlO1xuICAvKipcbiAgICog5p6a5Li+77yM6Z2Z5oCB5pWw5o2u5rqQ77yM5L6L5aaC77yaYHJhZGlvYOOAgWBjaGVja2JveGAg562JXG4gICAqXG4gICAqIC0gYGRpc2FibGVkYCDlsZ7mgKfooajnpLrvvJrnpoHnlKjnirbmgIFcbiAgICogLSBgbGFiZWxgIOWxnuaAp+ihqOekuu+8muaWh+acrFxuICAgKiAtIGB2YWx1ZWAg5bGe5oCn6KGo56S677ya6L+U5Zue5YC8XG4gICAqIC0g5Z+656GA5pWw5o2u57G75Z6L5pWw57uE5Lya6Ieq5Yqo6L2s5YyW5oiQIGBTRlNjaGVtYUVudW1gIOaVsOe7hOagvOW8j1xuICAgKi9cbiAgZW51bT86IFNGU2NoZW1hRW51bVR5cGVbXTtcbiAgLy8vLy8vLy8vLy8vIOaVsOWAvOexu+WeiyAvLy8vLy8vLy8vLy8vXG4gIC8qKlxuICAgKiDmnIDlsI/lgLxcbiAgICovXG4gIG1pbmltdW0/OiBudW1iZXI7XG4gIC8qKlxuICAgKiDnuqbmnZ/mmK/lkKbljIXmi6wgYG1pbmltdW1gIOWAvFxuICAgKi9cbiAgZXhjbHVzaXZlTWluaW11bT86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDmnIDlpKflgLxcbiAgICovXG4gIG1heGltdW0/OiBudW1iZXI7XG4gIC8qKlxuICAgKiDnuqbmnZ/mmK/lkKbljIXmi6wgYG1heGltdW1gIOWAvFxuICAgKi9cbiAgZXhjbHVzaXZlTWF4aW11bT86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDlgI3mlbBcbiAgICovXG4gIG11bHRpcGxlT2Y/OiBudW1iZXI7XG4gIC8vLy8vLy8vLy8vLyDlrZfnrKbkuLLnsbvlnosvLy8vLy8vLy8vLy8vXG4gIC8qKlxuICAgKiDlrprkuYnlrZfnrKbkuLLnmoTmnIDlpKfplb/luqZcbiAgICovXG4gIG1heExlbmd0aD86IG51bWJlcjtcbiAgLyoqXG4gICAqIOWumuS5ieWtl+espuS4sueahOacgOWwj+mVv+W6plxuICAgKi9cbiAgbWluTGVuZ3RoPzogbnVtYmVyO1xuICAvKipcbiAgICog6aqM6K+B6L6T5YWl5a2X5q615q2j5YiZ6KGo6L6+5byP5a2X56ym5Liy77yM6Iul5oyH5a6aIGBmb3JtYXQ6ICdyZWdleCdgIOaXtuWKoeW/heaMh+WumlxuICAgKi9cbiAgcGF0dGVybj86IHN0cmluZztcbiAgLy8vLy8vLy8vLy8vIOaVsOe7hOexu+Weiy8vLy8vLy8vLy8vLy9cbiAgLyoqXG4gICAqIOaVsOe7hOWFg+e0oOexu+Wei+aPj+i/sO+8jOWPquaUr+aMgeaVsOe7hOWvueixoe+8jOiLpemcgOimgeWfuuehgOexu+Wei+aVsOe7hOWPr+mAmui/h+WFtuS7lumDqOS7tuaUr+aMgVxuICAgKlxuICAgKiBgYGBqc29uXG4gICAqIGl0ZW1zOiB7XG4gICAqICAgdHlwZTogJ29iamVjdCcsXG4gICAqICAgcHJvcGVydGllczoge1xuICAgKiAgICAgbmFtZTogeyB0eXBlOiAnc3RyaW5nJyB9LFxuICAgKiAgICAgYWdlOiB7IHR5cGU6ICdudW1iZXInIH1cbiAgICogICB9XG4gICAqIH1cbiAgICogYGBgXG4gICAqXG4gICAqIOe7k+aenFxuICAgKlxuICAgKiBgYGBqc29uXG4gICAqIFtcbiAgICogICB7IFwibmFtZVwiOiBcImNpcGNoazFcIiwgXCJhZ2VcIjogMTggfSxcbiAgICogICB7IFwibmFtZVwiOiBcImNpcGNoazJcIiwgXCJhZ2VcIjogMTYgfVxuICAgKiBdXG4gICAqIGBgYFxuICAgKi9cbiAgaXRlbXM/OiBTRlNjaGVtYTtcbiAgLyoqXG4gICAqIOe6puadn+aVsOe7hOacgOWwj+eahOWFg+e0oOS4quaVsFxuICAgKiAtIGB0eXBlPVwiYXJyYXlcImAg5pe25pyJ5pWIXG4gICAqL1xuICBtaW5JdGVtcz86IG51bWJlcjtcbiAgLyoqXG4gICAqIOe6puadn+aVsOe7hOacgOWkp+eahOWFg+e0oOS4quaVsFxuICAgKiAtIGB0eXBlPVwiYXJyYXlcImAg5pe25pyJ5pWIXG4gICAqL1xuICBtYXhJdGVtcz86IG51bWJlcjtcbiAgLyoqXG4gICAqIOe6puadn+aVsOe7hOavj+S4quWFg+e0oOmDveS4jeebuOWQjFxuICAgKiAtIGB0eXBlPVwiYXJyYXlcImAg5pe25pyJ5pWIXG4gICAqL1xuICB1bmlxdWVJdGVtcz86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDmlbDnu4Tpop3lpJblhYPntKDnmoTmoKHpqozop4TliJlcbiAgICovXG4gIGFkZGl0aW9uYWxJdGVtcz86IFNGU2NoZW1hO1xuICAvLy8vLy8vLy8vLy8g5a+56LGh57G75Z6LLy8vLy8vLy8vLy8vL1xuICAvKipcbiAgICog5pyA5aSn5bGe5oCn5Liq5pWw77yM5b+F6aG75piv6Z2e6LSf5pW05pWwXG4gICAqL1xuICBtYXhQcm9wZXJ0aWVzPzogbnVtYmVyO1xuICAvKipcbiAgICog5pyA5bCP5bGe5oCn5Liq5pWw77yM5b+F6aG75piv6Z2e6LSf5pW05pWwXG4gICAqL1xuICBtaW5Qcm9wZXJ0aWVzPzogbnVtYmVyO1xuICAvKipcbiAgICog5b+F5aGr6aG55bGe5oCnXG4gICAqL1xuICByZXF1aXJlZD86IHN0cmluZ1tdO1xuICAvKipcbiAgICog5a6a5LmJ5bGe5oCnXG4gICAqL1xuICBwcm9wZXJ0aWVzPzogeyBba2V5OiBzdHJpbmddOiBTRlNjaGVtYSB9O1xuICAvLy8vLy8vLy8vLy8g5p2h5Lu257G7Ly8vLy8vLy8vLy8vL1xuICAvLyDmnKrmnaXlj6/og73ooqvnp7vpmaRcbiAgLy8gZGVwZW5kZW5jaWVzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmdbXSB8IFNGU2NoZW1hIH07XG4gIC8qKlxuICAgKiDmnaHku7bpqozor4FcbiAgICogLSDlv4XpobvljIXlkKsgYHByb3BlcnRpZXNgIOiKgueCuVxuICAgKiAgLSDplK7lkI3lv4XpobvmmK/lvZPliY3oioLngrkgYHByb3BlcnRpZXNgIOWAvOS5i+S4gFxuICAgKiAgLSDliKnnlKggYGVudW1gIOWxnuaAp+ihqOekuuadoeS7tuWAvO+8jOaUr+aMgSBgJEFOWSRgIOihqOekuuS7u+aEj+WAvFxuICAgKiAtIOS4jeaUr+aMgei3qCBTY2hlbWEg6IqC54K5XG4gICAqIC0g5b2T5p2h5Lu25oiQ5Yqf5Lya5omn6KGMIGB0aGVuYCDlkKbliJnmiafooYwgYGVsc2VgXG4gICAqIC0gYGlmYOWSjGB0aGVuYCDmmK/lv4XpobvlkIzml7blh7rnjrDvvIxgZWxzZWAg5Y+v6YCJ6aG5XG4gICAqL1xuICBpZj86IFNGU2NoZW1hO1xuICAvKipcbiAgICog5p2h5Lu25oiQ5Yqf5pe25omn6KGMXG4gICAqIC0g5Y+q5pSv5oyBIGByZXF1aXJlZGAg5Y+C5pWw77yM55So5LqO6KGo56S65pi+56S6XG4gICAqL1xuICB0aGVuPzogU0ZTY2hlbWE7XG4gIC8qKlxuICAgKiDmnaHku7blpLHotKXml7bmiafooYxcbiAgICogLSDlj6rmlK/mjIEgYHJlcXVpcmVkYCDlj4LmlbDvvIznlKjkuo7ooajnpLrmmL7npLpcbiAgICovXG4gIGVsc2U/OiBTRlNjaGVtYTtcbiAgLy8vLy8vLy8vLy8vIOmAu+i+keexuy8vLy8vLy8vLy8vLy9cbiAgLyoqICoq5LiN5bu66K6uKiog5L2/55So77yM5Y+v55SoIGByZXF1aXJlZGAg5pu/5LujICovXG4gIGFsbE9mPzogU0ZTY2hlbWFbXTtcbiAgLyoqICoq5LiN5bu66K6uKiog5L2/55So77yM5Y+v55SoIGByZXF1aXJlZGAg5ZKMIGBtaW5Qcm9wZXJ0aWVzYCDmm7/ku6MgKi9cbiAgYW55T2Y/OiBTRlNjaGVtYVtdO1xuICAvKiog5YC85b+F6aG75piv5YW25Lit5LmL5LiAICovXG4gIG9uZU9mPzogU0ZTY2hlbWFbXTtcbiAgLy8vLy8vLy8vLy8vIOagvOW8jy8vLy8vLy8vLy8vLy9cbiAgLyoqXG4gICAqIOaVsOaNruagvOW8j++8jFvmlofmoaNdKGh0dHA6Ly9qc29uLXNjaGVtYS5vcmcvbGF0ZXN0L2pzb24tc2NoZW1hLXZhbGlkYXRpb24uaHRtbCNyZmMuc2VjdGlvbi43LjMpXG4gICAqIC0gYGRhdGUtdGltZWAg5pel5pyf5pe26Ze077yM5riy5p+T5Li6IGBkYXRlYO+8jFtSRkMzMzM5XShodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzMzOSNzZWN0aW9uLTUuNilcbiAgICogLSBgZGF0ZWDjgIFgZnVsbC1kYXRlYCDml6XmnJ/vvIzmuLLmn5PkuLogYGRhdGVgXG4gICAqIC0gYHRpbWVg44CBYGZ1bGwtdGltZWAg5pe26Ze077yM5riy5p+T5Li6IGB0aW1lYFxuICAgKiAtIGBlbWFpbGAgRW1haWzmoLzlvI/vvIzmuLLmn5PkuLogYGF1dG9jb21wbGV0ZWBcbiAgICogLSDpnZ7moIflh4bvvJpgd2Vla2DvvIzmuLLmn5PkuLogYG56LXdlZWstcGlja2VyYFxuICAgKiAtIOmdnuagh+WHhu+8mmBtb250aGDvvIzmuLLmn5PkuLogYG56LW1vbnRoLXBpY2tlcmBcbiAgICogLSBgaXBgIElQ5Zyw5Z2A77yM5riy5p+T5Li6IGBpbnB1dGBcbiAgICogLSBgdXJpYCBVUkzlnLDlnYDvvIzmuLLmn5PkuLogYHVwbG9hZGBcbiAgICogLSBgcmVnZXhgIOato+WImeihqOi+vuW8j++8jOW/hemhu+aMh+WumiBgcGF0dGVybmAg5bGe5oCn77yM5riy5p+T5Li6IGBpbnB1dGBcbiAgICogLSBgbW9iaWxlYCDmiYvmnLrlj7dcbiAgICogLSBgaWQtY2FyZGAg6Lqr5Lu96K+BXG4gICAqIC0gYGNvbG9yYCDpopzoibLlgLxcbiAgICovXG4gIGZvcm1hdD86IHN0cmluZztcbiAgLy8vLy8vLy8vLy8vIOazqOmHii8vLy8vLy8vLy8vLy9cbiAgLyoqXG4gICAqIOWxnuaAp+aPj+i/sO+8jOebuOW9k+S6jiBgbGFiZWxgIOWAvO+8jOaMieS7peS4i+inhOWImeWxleekuu+8mlxuICAgKiAtIOW9k+WAvOS4uiBgbnVsbGDjgIFgdW5kZWZpbmVkYCDml7bkvb/nlKggYGtleWAg5pu/5LujXG4gICAqIC0g5b2T5YC85Li6IGAnJ2Ag56m65a2X56ym5Liy6KGo56S65LiN5bGV56S6IGBsYWJlbGAg6YOo5YiG77yM5L6L5aaC77yaYGNoZWNrYm94YCDlj6/og73pnIDopoFcbiAgICovXG4gIHRpdGxlPzogc3RyaW5nIHwgbnVsbDtcbiAgLyoqXG4gICAqIOWxnuaAp+ebrueahOaAp+ino+mHilxuICAgKi9cbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDpu5jorqTlgLxcbiAgICovXG4gIGRlZmF1bHQ/OiBhbnk7XG4gIC8qKlxuICAgKiDmmK/lkKblj6ror7vnirbmgIFcbiAgICovXG4gIHJlYWRPbmx5PzogYm9vbGVhbjtcbiAgLy8vLy8vLy8vLy8vIOWFtuS7li8vLy8vLy8vLy8vLy9cbiAgLy8vLy8vLy8vLy8vIERlZmluaXRpb25zIC8vLy8vLy8vLy8vLy9cbiAgLy8gLyoqIOaMh+WumiBTY2hlbWEgSlNPTiDmqKHlvI/vvIzpu5jorqTkuLrvvJpgaHR0cDovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC0wNy9zY2hlbWFgICovXG4gIC8vICRzY2hlbWE/OiBzdHJpbmc7XG4gIC8qKiDlhoXpg6jnsbvlnovlrprkuYnkvZMgKi9cbiAgZGVmaW5pdGlvbnM/OiBTRlNjaGVtYURlZmluaXRpb247XG4gIC8qKiDlvJXnlKjlrprkuYnkvZMgKi9cbiAgJHJlZj86IHN0cmluZztcbiAgLy8gJHNjaGVtYT86IHN0cmluZztcbiAgLyoqIOmSiOWvueW8gOWPkeiAheeahOazqOmHiu+8jOaXoOS7u+S9leaEj+S5ie+8jOS5n+S4jeS8muiiq+agoemqjCAqL1xuICAkY29tbWVudD86IHN0cmluZztcbiAgLy8vLy8vLy8vLy8vIOmdnuagh+WHhi8vLy8vLy8vLy8vLy9cbiAgLyoqICoq5ZSv5LiA6Z2e5qCH5YeG77yaKiog5oyH5a6aVUnphY3nva7kv6Hmga/vvIzkvJjlhYjnuqfpq5jkuo4gYHNmYCDnu4Tku7YgYHVpYCDlsZ7mgKflgLwgKi9cbiAgdWk/OiBTRlVJU2NoZW1hSXRlbSB8IHN0cmluZztcbn1cbiJdfQ==