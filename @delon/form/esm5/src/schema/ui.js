/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function SFGridSizeSchema() { }
if (false) {
    /** @type {?|undefined} */
    SFGridSizeSchema.prototype.span;
    /** @type {?|undefined} */
    SFGridSizeSchema.prototype.order;
    /** @type {?|undefined} */
    SFGridSizeSchema.prototype.offset;
    /** @type {?|undefined} */
    SFGridSizeSchema.prototype.push;
    /** @type {?|undefined} */
    SFGridSizeSchema.prototype.pull;
}
/**
 * @record
 */
export function SFGridSchema() { }
if (false) {
    /**
     * 栅格间隔
     * @type {?|undefined}
     */
    SFGridSchema.prototype.gutter;
    /**
     * 栅格占位格数，为 `0` 时相当于 `display: none`
     * @type {?|undefined}
     */
    SFGridSchema.prototype.span;
    /**
     * 数据栅格占位格数，为 `0` 时相当于 `display: none`
     * @type {?|undefined}
     */
    SFGridSchema.prototype.arraySpan;
    /**
     * 栅格左侧的间隔格数，间隔内不可以有栅格
     * @type {?|undefined}
     */
    SFGridSchema.prototype.offset;
    /** @type {?|undefined} */
    SFGridSchema.prototype.xs;
    /** @type {?|undefined} */
    SFGridSchema.prototype.sm;
    /** @type {?|undefined} */
    SFGridSchema.prototype.md;
    /** @type {?|undefined} */
    SFGridSchema.prototype.lg;
    /** @type {?|undefined} */
    SFGridSchema.prototype.xl;
    /** @type {?|undefined} */
    SFGridSchema.prototype.xxl;
}
/**
 * @record
 */
export function SFRenderSchema() { }
if (false) {
    /**
     * 指定采用什么小部件渲染，所有小部件名可[查阅文档](https://ng-alain.com/)
     * @type {?|undefined}
     */
    SFRenderSchema.prototype.widget;
    /**
     * 自定义类，等同 `[ngClass]` 值
     * @type {?|undefined}
     */
    SFRenderSchema.prototype.class;
    /**
     * 元素组件大小
     * @type {?|undefined}
     */
    SFRenderSchema.prototype.size;
    /**
     * 指定宽度，单位：`px`
     * @type {?|undefined}
     */
    SFRenderSchema.prototype.width;
    /**
     * 响应式属性
     * @type {?|undefined}
     */
    SFRenderSchema.prototype.grid;
    /**
     * 标签可选信息
     * @type {?|undefined}
     */
    SFRenderSchema.prototype.optional;
    /**
     * 标签可选帮助，使用 `nz-tooltip` 展示
     * @type {?|undefined}
     */
    SFRenderSchema.prototype.optionalHelp;
}
/**
 * @record
 */
export function SFHorizontalLayoutSchema() { }
if (false) {
    /**
     * `label` 栅格占位格数，默认：`5`
     * - `0` 时相当于 `display: none`
     * - 限 `horizontal` 水平布局有效
     * @type {?|undefined}
     */
    SFHorizontalLayoutSchema.prototype.spanLabel;
    /**
     * `control` 栅格占位格数，默认：`19`
     * - `0` 时相当于 `display: none`
     * - 限 `horizontal` 水平布局有效
     * @type {?|undefined}
     */
    SFHorizontalLayoutSchema.prototype.spanControl;
    /**
     * `control` 栅格左侧的间隔格数，间隔内不可以有栅格
     * - 限 `horizontal` 水平布局有效
     * @type {?|undefined}
     */
    SFHorizontalLayoutSchema.prototype.offsetControl;
    /**
     * `label` 固定宽度
     * - 限 `horizontal` 水平布局有效
     * @type {?|undefined}
     */
    SFHorizontalLayoutSchema.prototype.spanLabelFixed;
}
/**
 * @record
 */
export function SFArraySchema() { }
if (false) {
    /**
     * *限array** 指定添加按钮文本，默认：添加
     * @type {?|undefined}
     */
    SFArraySchema.prototype.addTitle;
    /**
     * *限array** 指定添加按钮风格，等同按钮 `nzType`，默认：dashed
     * @type {?|undefined}
     */
    SFArraySchema.prototype.addType;
    /**
     * *限array** 指定是否显示移除按钮
     * @type {?|undefined}
     */
    SFArraySchema.prototype.removable;
    /**
     * *限array** 指定移除按钮文本，默认：移除
     * @type {?|undefined}
     */
    SFArraySchema.prototype.removeTitle;
}
/**
 * @record
 */
export function SFInputSchema() { }
if (false) {
    /**
     * **限string** 指定 `input` 的 `type` 值，默认为：`text`
     * @type {?|undefined}
     */
    SFInputSchema.prototype.type;
    /**
     * **限string** 文字框中显示提示信息
     * @type {?|undefined}
     */
    SFInputSchema.prototype.placeholder;
    /**
     * **限string** 加载时是否获得焦点
     * @type {?|undefined}
     */
    SFInputSchema.prototype.autofocus;
}
/**
 * @record
 */
export function SFDataSchema() { }
if (false) {
    /**
     * 异步静态数据源
     * - `input` 可能根据不同部件的情况存在值，例如：`autocomplete` 表示当前键入的值
     * - 参数、返回值：可能根据不同部件需求而定，具体参阅相应小部件独立说明
     * @type {?|undefined}
     */
    SFDataSchema.prototype.asyncData;
}
/**
 * 指定如何渲染 `Schema`
 * @record
 */
export function SFUISchemaItem() { }
if (false) {
    /**
     * 是否开启调试模式，在数据变更、校验会打印出相信信息，不建议在生产环境中使用
     * @type {?|undefined}
     */
    SFUISchemaItem.prototype.debug;
    /**
     * 属性顺序
     *
     * 当你只想某几个属性靠前时，则允许使用通配符 `*` 来表示剩余部分，且只允许出现一次
     *
     * \@example
     *
     * [ 'a', 'b', 'c', 'd' ] + [ 'c', 'b', '*' ] = [ 'c', 'b', 'a', 'd']
     * @type {?|undefined}
     */
    SFUISchemaItem.prototype.order;
    /**
     * 是否隐藏
     * @type {?|undefined}
     */
    SFUISchemaItem.prototype.hidden;
    /**
     * 指定条件时才显示，但需要**注意**：
     * - 键值表示监听对象属性名
     * - JSON Schema 校验是各属性独立运行，监听对象属性每一次值变化都会重新做一次整个JSON结构计算
     *
     * 有效格式包括：
     * - `visibleIf: { shown: [ true ] }`：当 `shown: true` 时才显示当前属性
     * - `visibleIf: { shown: [ '$ANY$' ] }`：当 `shown` 包括任意值时
     * - `visibleIf: { shown: (value: any) => value > 0 }`：复杂表达式
     * @type {?|undefined}
     */
    SFUISchemaItem.prototype.visibleIf;
    /* Skipping unhandled member: [key: string]: any;*/
}
/**
 * UI Schema，KEY名**务必**是 `$` 开头（例如：`$name`、`$id`），以便能区分KEY值还是UI选项
 * - 结构层级应同 `SFSchema` 一致
 * - 当KEY为 `*` 时表示对所有子表单元素都有效
 * @record
 */
export function SFUISchema() { }
/**
 * 内部运行时使用
 * @record
 */
export function SFUISchemaItemRun() { }
if (false) {
    /**
     * \@internal 自定义模板
     * @type {?|undefined}
     */
    SFUISchemaItemRun.prototype._render;
    /**
     * \@internal 是否必填
     * @type {?|undefined}
     */
    SFUISchemaItemRun.prototype._required;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vZm9ybS8iLCJzb3VyY2VzIjpbInNyYy9zY2hlbWEvdWkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQU1BLHNDQU1DOzs7SUFMQyxnQ0FBYzs7SUFDZCxpQ0FBZTs7SUFDZixrQ0FBZ0I7O0lBQ2hCLGdDQUFjOztJQUNkLGdDQUFjOzs7OztBQUdoQixrQ0F1QkM7Ozs7OztJQW5CQyw4QkFBZ0I7Ozs7O0lBSWhCLDRCQUFjOzs7OztJQUlkLGlDQUFtQjs7Ozs7SUFJbkIsOEJBQWdCOztJQUNoQiwwQkFBK0I7O0lBQy9CLDBCQUErQjs7SUFDL0IsMEJBQStCOztJQUMvQiwwQkFBK0I7O0lBQy9CLDBCQUErQjs7SUFDL0IsMkJBQWdDOzs7OztBQUdsQyxvQ0F5QkM7Ozs7OztJQXJCQyxnQ0FBZ0I7Ozs7O0lBSWhCLCtCQUEwQjs7Ozs7SUFJMUIsOEJBQXFDOzs7OztJQUlyQywrQkFBZTs7Ozs7SUFJZiw4QkFBb0I7Ozs7O0lBRXBCLGtDQUFrQjs7Ozs7SUFFbEIsc0NBQXNCOzs7OztBQUd4Qiw4Q0EwQkM7Ozs7Ozs7O0lBcEJDLDZDQUFtQjs7Ozs7OztJQU9uQiwrQ0FBcUI7Ozs7OztJQU1yQixpREFBdUI7Ozs7OztJQU12QixrREFBd0I7Ozs7O0FBRzFCLG1DQWVDOzs7Ozs7SUFiQyxpQ0FBa0I7Ozs7O0lBR2xCLGdDQUFpQjs7Ozs7SUFHakIsa0NBQW9COzs7OztJQUdwQixvQ0FBcUI7Ozs7O0FBTXZCLG1DQWNDOzs7Ozs7SUFWQyw2QkFBYzs7Ozs7SUFJZCxvQ0FBZ0M7Ozs7O0lBS2hDLGtDQUFvQjs7Ozs7QUFHdEIsa0NBT0M7Ozs7Ozs7O0lBREMsaUNBQTREOzs7Ozs7QUFJOUQsb0NBcUNDOzs7Ozs7SUEzQkMsK0JBQWdCOzs7Ozs7Ozs7OztJQVdoQiwrQkFBaUI7Ozs7O0lBSWpCLGdDQUFpQjs7Ozs7Ozs7Ozs7O0lBV2pCLG1DQUFpRTs7Ozs7Ozs7O0FBUW5FLGdDQUVDOzs7OztBQUtELHVDQUtDOzs7Ozs7SUFIQyxvQ0FBNEI7Ozs7O0lBRTVCLHNDQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEVycm9yU2NoZW1hIH0gZnJvbSAnLi4vZXJyb3JzJztcbmltcG9ydCB7IFNGU2NoZW1hRW51bVR5cGUgfSBmcm9tICcuL2luZGV4JztcblxuZXhwb3J0IGludGVyZmFjZSBTRkdyaWRTaXplU2NoZW1hIHtcbiAgc3Bhbj86IG51bWJlcjtcbiAgb3JkZXI/OiBudW1iZXI7XG4gIG9mZnNldD86IG51bWJlcjtcbiAgcHVzaD86IG51bWJlcjtcbiAgcHVsbD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTRkdyaWRTY2hlbWEge1xuICAvKipcbiAgICog5qCF5qC86Ze06ZqUXG4gICAqL1xuICBndXR0ZXI/OiBudW1iZXI7XG4gIC8qKlxuICAgKiDmoIXmoLzljaDkvY3moLzmlbDvvIzkuLogYDBgIOaXtuebuOW9k+S6jiBgZGlzcGxheTogbm9uZWBcbiAgICovXG4gIHNwYW4/OiBudW1iZXI7XG4gIC8qKlxuICAgKiDmlbDmja7moIXmoLzljaDkvY3moLzmlbDvvIzkuLogYDBgIOaXtuebuOW9k+S6jiBgZGlzcGxheTogbm9uZWBcbiAgICovXG4gIGFycmF5U3Bhbj86IG51bWJlcjtcbiAgLyoqXG4gICAqIOagheagvOW3puS+p+eahOmXtOmalOagvOaVsO+8jOmXtOmalOWGheS4jeWPr+S7peacieagheagvFxuICAgKi9cbiAgb2Zmc2V0PzogbnVtYmVyO1xuICB4cz86IG51bWJlciB8IFNGR3JpZFNpemVTY2hlbWE7XG4gIHNtPzogbnVtYmVyIHwgU0ZHcmlkU2l6ZVNjaGVtYTtcbiAgbWQ/OiBudW1iZXIgfCBTRkdyaWRTaXplU2NoZW1hO1xuICBsZz86IG51bWJlciB8IFNGR3JpZFNpemVTY2hlbWE7XG4gIHhsPzogbnVtYmVyIHwgU0ZHcmlkU2l6ZVNjaGVtYTtcbiAgeHhsPzogbnVtYmVyIHwgU0ZHcmlkU2l6ZVNjaGVtYTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTRlJlbmRlclNjaGVtYSB7XG4gIC8qKlxuICAgKiDmjIflrprph4fnlKjku4DkuYjlsI/pg6jku7bmuLLmn5PvvIzmiYDmnInlsI/pg6jku7blkI3lj69b5p+l6ZiF5paH5qGjXShodHRwczovL25nLWFsYWluLmNvbS8pXG4gICAqL1xuICB3aWRnZXQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDoh6rlrprkuYnnsbvvvIznrYnlkIwgYFtuZ0NsYXNzXWAg5YC8XG4gICAqL1xuICBjbGFzcz86IHN0cmluZyB8IHN0cmluZ1tdO1xuICAvKipcbiAgICog5YWD57Sg57uE5Lu25aSn5bCPXG4gICAqL1xuICBzaXplPzogJ2RlZmF1bHQnIHwgJ2xhcmdlJyB8ICdzbWFsbCc7XG4gIC8qKlxuICAgKiDmjIflrprlrr3luqbvvIzljZXkvY3vvJpgcHhgXG4gICAqL1xuICB3aWR0aD86IG51bWJlcjtcbiAgLyoqXG4gICAqIOWTjeW6lOW8j+WxnuaAp1xuICAgKi9cbiAgZ3JpZD86IFNGR3JpZFNjaGVtYTtcbiAgLyoqIOagh+etvuWPr+mAieS/oeaBryAqL1xuICBvcHRpb25hbD86IHN0cmluZztcbiAgLyoqIOagh+etvuWPr+mAieW4ruWKqe+8jOS9v+eUqCBgbnotdG9vbHRpcGAg5bGV56S6ICovXG4gIG9wdGlvbmFsSGVscD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTRkhvcml6b250YWxMYXlvdXRTY2hlbWEge1xuICAvKipcbiAgICogYGxhYmVsYCDmoIXmoLzljaDkvY3moLzmlbDvvIzpu5jorqTvvJpgNWBcbiAgICogLSBgMGAg5pe255u45b2T5LqOIGBkaXNwbGF5OiBub25lYFxuICAgKiAtIOmZkCBgaG9yaXpvbnRhbGAg5rC05bmz5biD5bGA5pyJ5pWIXG4gICAqL1xuICBzcGFuTGFiZWw/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIGBjb250cm9sYCDmoIXmoLzljaDkvY3moLzmlbDvvIzpu5jorqTvvJpgMTlgXG4gICAqIC0gYDBgIOaXtuebuOW9k+S6jiBgZGlzcGxheTogbm9uZWBcbiAgICogLSDpmZAgYGhvcml6b250YWxgIOawtOW5s+W4g+WxgOacieaViFxuICAgKi9cbiAgc3BhbkNvbnRyb2w/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIGBjb250cm9sYCDmoIXmoLzlt6bkvqfnmoTpl7TpmpTmoLzmlbDvvIzpl7TpmpTlhoXkuI3lj6/ku6XmnInmoIXmoLxcbiAgICogLSDpmZAgYGhvcml6b250YWxgIOawtOW5s+W4g+WxgOacieaViFxuICAgKi9cbiAgb2Zmc2V0Q29udHJvbD86IG51bWJlcjtcblxuICAvKipcbiAgICogYGxhYmVsYCDlm7rlrprlrr3luqZcbiAgICogLSDpmZAgYGhvcml6b250YWxgIOawtOW5s+W4g+WxgOacieaViFxuICAgKi9cbiAgc3BhbkxhYmVsRml4ZWQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU0ZBcnJheVNjaGVtYSB7XG4gIC8qKiAqKumZkGFycmF5Kiog5oyH5a6a5re75Yqg5oyJ6ZKu5paH5pys77yM6buY6K6k77ya5re75YqgICovXG4gIGFkZFRpdGxlPzogc3RyaW5nO1xuXG4gIC8qKiAqKumZkGFycmF5Kiog5oyH5a6a5re75Yqg5oyJ6ZKu6aOO5qC877yM562J5ZCM5oyJ6ZKuIGBuelR5cGVg77yM6buY6K6k77yaZGFzaGVkICovXG4gIGFkZFR5cGU/OiBzdHJpbmc7XG5cbiAgLyoqICoq6ZmQYXJyYXkqKiDmjIflrprmmK/lkKbmmL7npLrnp7vpmaTmjInpkq4gKi9cbiAgcmVtb3ZhYmxlPzogYm9vbGVhbjtcblxuICAvKiogKirpmZBhcnJheSoqIOaMh+Wumuenu+mZpOaMiemSruaWh+acrO+8jOm7mOiupO+8muenu+mZpCAqL1xuICByZW1vdmVUaXRsZT86IHN0cmluZztcblxuICAvKiogKirpmZBhcnJheSoqIOaMh+WumuaYr+WQpuaYvuekuuaOkuW6j+aMiemSriAqL1xuICAvLyBvcmRlcmFibGU/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNGSW5wdXRTY2hlbWEge1xuICAvKipcbiAgICogKirpmZBzdHJpbmcqKiDmjIflrpogYGlucHV0YCDnmoQgYHR5cGVgIOWAvO+8jOm7mOiupOS4uu+8mmB0ZXh0YFxuICAgKi9cbiAgdHlwZT86IHN0cmluZztcbiAgLyoqXG4gICAqICoq6ZmQc3RyaW5nKiog5paH5a2X5qGG5Lit5pi+56S65o+Q56S65L+h5oGvXG4gICAqL1xuICBwbGFjZWhvbGRlcj86IHN0cmluZyB8IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiAqKumZkHN0cmluZyoqIOWKoOi9veaXtuaYr+WQpuiOt+W+l+eEpueCuVxuICAgKi9cbiAgYXV0b2ZvY3VzPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTRkRhdGFTY2hlbWEge1xuICAvKipcbiAgICog5byC5q2l6Z2Z5oCB5pWw5o2u5rqQXG4gICAqIC0gYGlucHV0YCDlj6/og73moLnmja7kuI3lkIzpg6jku7bnmoTmg4XlhrXlrZjlnKjlgLzvvIzkvovlpoLvvJpgYXV0b2NvbXBsZXRlYCDooajnpLrlvZPliY3plK7lhaXnmoTlgLxcbiAgICogLSDlj4LmlbDjgIHov5Tlm57lgLzvvJrlj6/og73moLnmja7kuI3lkIzpg6jku7bpnIDmsYLogIzlrprvvIzlhbfkvZPlj4LpmIXnm7jlupTlsI/pg6jku7bni6znq4vor7TmmI5cbiAgICovXG4gIGFzeW5jRGF0YT86IChpbnB1dD86IGFueSkgPT4gT2JzZXJ2YWJsZTxTRlNjaGVtYUVudW1UeXBlW10+O1xufVxuXG4vKiog5oyH5a6a5aaC5L2V5riy5p+TIGBTY2hlbWFgICovXG5leHBvcnQgaW50ZXJmYWNlIFNGVUlTY2hlbWFJdGVtXG4gIGV4dGVuZHMgU0ZSZW5kZXJTY2hlbWEsXG4gICAgU0ZBcnJheVNjaGVtYSxcbiAgICBTRkhvcml6b250YWxMYXlvdXRTY2hlbWEsXG4gICAgU0ZEYXRhU2NoZW1hLFxuICAgIFNGSW5wdXRTY2hlbWEsXG4gICAgRXJyb3JTY2hlbWEge1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG5cbiAgLyoqIOaYr+WQpuW8gOWQr+iwg+ivleaooeW8j++8jOWcqOaVsOaNruWPmOabtOOAgeagoemqjOS8muaJk+WNsOWHuuebuOS/oeS/oeaBr++8jOS4jeW7uuiuruWcqOeUn+S6p+eOr+Wig+S4reS9v+eUqCAqL1xuICBkZWJ1Zz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOWxnuaAp+mhuuW6j1xuICAgKlxuICAgKiDlvZPkvaDlj6rmg7Pmn5Dlh6DkuKrlsZ7mgKfpnaDliY3ml7bvvIzliJnlhYHorrjkvb/nlKjpgJrphY3nrKYgYCpgIOadpeihqOekuuWJqeS9memDqOWIhu+8jOS4lOWPquWFgeiuuOWHuueOsOS4gOasoVxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKlxuICAgKiBbICdhJywgJ2InLCAnYycsICdkJyBdICsgWyAnYycsICdiJywgJyonIF0gPSBbICdjJywgJ2InLCAnYScsICdkJ11cbiAgICovXG4gIG9yZGVyPzogc3RyaW5nW107XG4gIC8qKlxuICAgKiDmmK/lkKbpmpDol49cbiAgICovXG4gIGhpZGRlbj86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDmjIflrprmnaHku7bml7bmiY3mmL7npLrvvIzkvYbpnIDopoEqKuazqOaEjyoq77yaXG4gICAqIC0g6ZSu5YC86KGo56S655uR5ZCs5a+56LGh5bGe5oCn5ZCNXG4gICAqIC0gSlNPTiBTY2hlbWEg5qCh6aqM5piv5ZCE5bGe5oCn54us56uL6L+Q6KGM77yM55uR5ZCs5a+56LGh5bGe5oCn5q+P5LiA5qyh5YC85Y+Y5YyW6YO95Lya6YeN5paw5YGa5LiA5qyh5pW05LiqSlNPTue7k+aehOiuoeeul1xuICAgKlxuICAgKiDmnInmlYjmoLzlvI/ljIXmi6zvvJpcbiAgICogLSBgdmlzaWJsZUlmOiB7IHNob3duOiBbIHRydWUgXSB9YO+8muW9kyBgc2hvd246IHRydWVgIOaXtuaJjeaYvuekuuW9k+WJjeWxnuaAp1xuICAgKiAtIGB2aXNpYmxlSWY6IHsgc2hvd246IFsgJyRBTlkkJyBdIH1g77ya5b2TIGBzaG93bmAg5YyF5ous5Lu75oSP5YC85pe2XG4gICAqIC0gYHZpc2libGVJZjogeyBzaG93bjogKHZhbHVlOiBhbnkpID0+IHZhbHVlID4gMCB9YO+8muWkjeadguihqOi+vuW8j1xuICAgKi9cbiAgdmlzaWJsZUlmPzogeyBba2V5OiBzdHJpbmddOiBhbnlbXSB8ICgodmFsdWU6IGFueSkgPT4gYm9vbGVhbikgfTtcbn1cblxuLyoqXG4gKiBVSSBTY2hlbWHvvIxLRVnlkI0qKuWKoeW/hSoq5pivIGAkYCDlvIDlpLTvvIjkvovlpoLvvJpgJG5hbWVg44CBYCRpZGDvvInvvIzku6Xkvr/og73ljLrliIZLRVnlgLzov5jmmK9VSemAiemhuVxuICogLSDnu5PmnoTlsYLnuqflupTlkIwgYFNGU2NoZW1hYCDkuIDoh7RcbiAqIC0g5b2TS0VZ5Li6IGAqYCDml7booajnpLrlr7nmiYDmnInlrZDooajljZXlhYPntKDpg73mnInmlYhcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTRlVJU2NoZW1hIHtcbiAgW2tleTogc3RyaW5nXTogU0ZVSVNjaGVtYUl0ZW0gfCBTRlVJU2NoZW1hSXRlbVJ1bjtcbn1cblxuLyoqXG4gKiDlhoXpg6jov5DooYzml7bkvb/nlKhcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTRlVJU2NoZW1hSXRlbVJ1biBleHRlbmRzIFNGVUlTY2hlbWFJdGVtIHtcbiAgLyoqIEBpbnRlcm5hbCDoh6rlrprkuYnmqKHmnb8gKi9cbiAgX3JlbmRlcj86IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICAvKiogQGludGVybmFsIOaYr+WQpuW/heWhqyAqL1xuICBfcmVxdWlyZWQ/OiBib29sZWFuO1xufVxuIl19