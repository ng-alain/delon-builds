/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vZm9ybS8iLCJzb3VyY2VzIjpbInNyYy9zY2hlbWEvdWkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQU1BLHNDQU1DOzs7SUFMQyxnQ0FBcUI7O0lBQ3JCLGlDQUFzQjs7SUFDdEIsa0NBQXVCOztJQUN2QixnQ0FBcUI7O0lBQ3JCLGdDQUFxQjs7Ozs7QUFHdkIsa0NBdUJDOzs7Ozs7SUFuQkMsOEJBQXVCOzs7OztJQUl2Qiw0QkFBcUI7Ozs7O0lBSXJCLGlDQUEwQjs7Ozs7SUFJMUIsOEJBQXVCOztJQUN2QiwwQkFBK0I7O0lBQy9CLDBCQUErQjs7SUFDL0IsMEJBQStCOztJQUMvQiwwQkFBK0I7O0lBQy9CLDBCQUErQjs7SUFDL0IsMkJBQWdDOzs7OztBQUdsQyxvQ0F5QkM7Ozs7OztJQXJCQyxnQ0FBZ0I7Ozs7O0lBSWhCLCtCQUEwQjs7Ozs7SUFJMUIsOEJBQXFDOzs7OztJQUlyQywrQkFBZTs7Ozs7SUFJZiw4QkFBb0I7Ozs7O0lBRXBCLGtDQUFrQjs7Ozs7SUFFbEIsc0NBQXNCOzs7OztBQUd4Qiw4Q0EwQkM7Ozs7Ozs7O0lBcEJDLDZDQUEwQjs7Ozs7OztJQU8xQiwrQ0FBNEI7Ozs7OztJQU01QixpREFBOEI7Ozs7OztJQU05QixrREFBK0I7Ozs7O0FBR2pDLG1DQWVDOzs7Ozs7SUFiQyxpQ0FBa0I7Ozs7O0lBR2xCLGdDQUFpQjs7Ozs7SUFHakIsa0NBQW9COzs7OztJQUdwQixvQ0FBcUI7Ozs7O0FBTXZCLG1DQWNDOzs7Ozs7SUFWQyw2QkFBYzs7Ozs7SUFJZCxvQ0FBZ0M7Ozs7O0lBS2hDLGtDQUFvQjs7Ozs7QUFHdEIsa0NBT0M7Ozs7Ozs7O0lBREMsaUNBQTREOzs7Ozs7QUFJOUQsb0NBcUNDOzs7Ozs7SUEzQkMsK0JBQWdCOzs7Ozs7Ozs7OztJQVdoQiwrQkFBaUI7Ozs7O0lBSWpCLGdDQUFpQjs7Ozs7Ozs7Ozs7O0lBV2pCLG1DQUFpRTs7Ozs7Ozs7O0FBUW5FLGdDQUVDOzs7OztBQUtELHVDQUtDOzs7Ozs7SUFIQyxvQ0FBNEI7Ozs7O0lBRTVCLHNDQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEVycm9yU2NoZW1hIH0gZnJvbSAnLi4vZXJyb3JzJztcbmltcG9ydCB7IFNGU2NoZW1hRW51bVR5cGUgfSBmcm9tICcuL2luZGV4JztcblxuZXhwb3J0IGludGVyZmFjZSBTRkdyaWRTaXplU2NoZW1hIHtcbiAgc3Bhbj86IG51bWJlciB8IG51bGw7XG4gIG9yZGVyPzogbnVtYmVyIHwgbnVsbDtcbiAgb2Zmc2V0PzogbnVtYmVyIHwgbnVsbDtcbiAgcHVzaD86IG51bWJlciB8IG51bGw7XG4gIHB1bGw/OiBudW1iZXIgfCBudWxsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNGR3JpZFNjaGVtYSB7XG4gIC8qKlxuICAgKiDmoIXmoLzpl7TpmpRcbiAgICovXG4gIGd1dHRlcj86IG51bWJlciB8IG51bGw7XG4gIC8qKlxuICAgKiDmoIXmoLzljaDkvY3moLzmlbDvvIzkuLogYDBgIOaXtuebuOW9k+S6jiBgZGlzcGxheTogbm9uZWBcbiAgICovXG4gIHNwYW4/OiBudW1iZXIgfCBudWxsO1xuICAvKipcbiAgICog5pWw5o2u5qCF5qC85Y2g5L2N5qC85pWw77yM5Li6IGAwYCDml7bnm7jlvZPkuo4gYGRpc3BsYXk6IG5vbmVgXG4gICAqL1xuICBhcnJheVNwYW4/OiBudW1iZXIgfCBudWxsO1xuICAvKipcbiAgICog5qCF5qC85bem5L6n55qE6Ze06ZqU5qC85pWw77yM6Ze06ZqU5YaF5LiN5Y+v5Lul5pyJ5qCF5qC8XG4gICAqL1xuICBvZmZzZXQ/OiBudW1iZXIgfCBudWxsO1xuICB4cz86IG51bWJlciB8IFNGR3JpZFNpemVTY2hlbWE7XG4gIHNtPzogbnVtYmVyIHwgU0ZHcmlkU2l6ZVNjaGVtYTtcbiAgbWQ/OiBudW1iZXIgfCBTRkdyaWRTaXplU2NoZW1hO1xuICBsZz86IG51bWJlciB8IFNGR3JpZFNpemVTY2hlbWE7XG4gIHhsPzogbnVtYmVyIHwgU0ZHcmlkU2l6ZVNjaGVtYTtcbiAgeHhsPzogbnVtYmVyIHwgU0ZHcmlkU2l6ZVNjaGVtYTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTRlJlbmRlclNjaGVtYSB7XG4gIC8qKlxuICAgKiDmjIflrprph4fnlKjku4DkuYjlsI/pg6jku7bmuLLmn5PvvIzmiYDmnInlsI/pg6jku7blkI3lj69b5p+l6ZiF5paH5qGjXShodHRwczovL25nLWFsYWluLmNvbS8pXG4gICAqL1xuICB3aWRnZXQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDoh6rlrprkuYnnsbvvvIznrYnlkIwgYFtuZ0NsYXNzXWAg5YC8XG4gICAqL1xuICBjbGFzcz86IHN0cmluZyB8IHN0cmluZ1tdO1xuICAvKipcbiAgICog5YWD57Sg57uE5Lu25aSn5bCPXG4gICAqL1xuICBzaXplPzogJ2RlZmF1bHQnIHwgJ2xhcmdlJyB8ICdzbWFsbCc7XG4gIC8qKlxuICAgKiDmjIflrprlrr3luqbvvIzljZXkvY3vvJpgcHhgXG4gICAqL1xuICB3aWR0aD86IG51bWJlcjtcbiAgLyoqXG4gICAqIOWTjeW6lOW8j+WxnuaAp1xuICAgKi9cbiAgZ3JpZD86IFNGR3JpZFNjaGVtYTtcbiAgLyoqIOagh+etvuWPr+mAieS/oeaBryAqL1xuICBvcHRpb25hbD86IHN0cmluZztcbiAgLyoqIOagh+etvuWPr+mAieW4ruWKqe+8jOS9v+eUqCBgbnotdG9vbHRpcGAg5bGV56S6ICovXG4gIG9wdGlvbmFsSGVscD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTRkhvcml6b250YWxMYXlvdXRTY2hlbWEge1xuICAvKipcbiAgICogYGxhYmVsYCDmoIXmoLzljaDkvY3moLzmlbDvvIzpu5jorqTvvJpgNWBcbiAgICogLSBgMGAg5pe255u45b2T5LqOIGBkaXNwbGF5OiBub25lYFxuICAgKiAtIOmZkCBgaG9yaXpvbnRhbGAg5rC05bmz5biD5bGA5pyJ5pWIXG4gICAqL1xuICBzcGFuTGFiZWw/OiBudW1iZXIgfCBudWxsO1xuXG4gIC8qKlxuICAgKiBgY29udHJvbGAg5qCF5qC85Y2g5L2N5qC85pWw77yM6buY6K6k77yaYDE5YFxuICAgKiAtIGAwYCDml7bnm7jlvZPkuo4gYGRpc3BsYXk6IG5vbmVgXG4gICAqIC0g6ZmQIGBob3Jpem9udGFsYCDmsLTlubPluIPlsYDmnInmlYhcbiAgICovXG4gIHNwYW5Db250cm9sPzogbnVtYmVyIHwgbnVsbDtcblxuICAvKipcbiAgICogYGNvbnRyb2xgIOagheagvOW3puS+p+eahOmXtOmalOagvOaVsO+8jOmXtOmalOWGheS4jeWPr+S7peacieagheagvFxuICAgKiAtIOmZkCBgaG9yaXpvbnRhbGAg5rC05bmz5biD5bGA5pyJ5pWIXG4gICAqL1xuICBvZmZzZXRDb250cm9sPzogbnVtYmVyIHwgbnVsbDtcblxuICAvKipcbiAgICogYGxhYmVsYCDlm7rlrprlrr3luqZcbiAgICogLSDpmZAgYGhvcml6b250YWxgIOawtOW5s+W4g+WxgOacieaViFxuICAgKi9cbiAgc3BhbkxhYmVsRml4ZWQ/OiBudW1iZXIgfCBudWxsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNGQXJyYXlTY2hlbWEge1xuICAvKiogKirpmZBhcnJheSoqIOaMh+Wumua3u+WKoOaMiemSruaWh+acrO+8jOm7mOiupO+8mua3u+WKoCAqL1xuICBhZGRUaXRsZT86IHN0cmluZztcblxuICAvKiogKirpmZBhcnJheSoqIOaMh+Wumua3u+WKoOaMiemSrumjjuagvO+8jOetieWQjOaMiemSriBgbnpUeXBlYO+8jOm7mOiupO+8mmRhc2hlZCAqL1xuICBhZGRUeXBlPzogc3RyaW5nO1xuXG4gIC8qKiAqKumZkGFycmF5Kiog5oyH5a6a5piv5ZCm5pi+56S656e76Zmk5oyJ6ZKuICovXG4gIHJlbW92YWJsZT86IGJvb2xlYW47XG5cbiAgLyoqICoq6ZmQYXJyYXkqKiDmjIflrprnp7vpmaTmjInpkq7mlofmnKzvvIzpu5jorqTvvJrnp7vpmaQgKi9cbiAgcmVtb3ZlVGl0bGU/OiBzdHJpbmc7XG5cbiAgLyoqICoq6ZmQYXJyYXkqKiDmjIflrprmmK/lkKbmmL7npLrmjpLluo/mjInpkq4gKi9cbiAgLy8gb3JkZXJhYmxlPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTRklucHV0U2NoZW1hIHtcbiAgLyoqXG4gICAqICoq6ZmQc3RyaW5nKiog5oyH5a6aIGBpbnB1dGAg55qEIGB0eXBlYCDlgLzvvIzpu5jorqTkuLrvvJpgdGV4dGBcbiAgICovXG4gIHR5cGU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiAqKumZkHN0cmluZyoqIOaWh+Wtl+ahhuS4reaYvuekuuaPkOekuuS/oeaBr1xuICAgKi9cbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmcgfCBzdHJpbmdbXTtcblxuICAvKipcbiAgICogKirpmZBzdHJpbmcqKiDliqDovb3ml7bmmK/lkKbojrflvpfnhKbngrlcbiAgICovXG4gIGF1dG9mb2N1cz86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU0ZEYXRhU2NoZW1hIHtcbiAgLyoqXG4gICAqIOW8guatpemdmeaAgeaVsOaNrua6kFxuICAgKiAtIGBpbnB1dGAg5Y+v6IO95qC55o2u5LiN5ZCM6YOo5Lu255qE5oOF5Ya15a2Y5Zyo5YC877yM5L6L5aaC77yaYGF1dG9jb21wbGV0ZWAg6KGo56S65b2T5YmN6ZSu5YWl55qE5YC8XG4gICAqIC0g5Y+C5pWw44CB6L+U5Zue5YC877ya5Y+v6IO95qC55o2u5LiN5ZCM6YOo5Lu26ZyA5rGC6ICM5a6a77yM5YW35L2T5Y+C6ZiF55u45bqU5bCP6YOo5Lu254us56uL6K+05piOXG4gICAqL1xuICBhc3luY0RhdGE/OiAoaW5wdXQ/OiBhbnkpID0+IE9ic2VydmFibGU8U0ZTY2hlbWFFbnVtVHlwZVtdPjtcbn1cblxuLyoqIOaMh+WumuWmguS9lea4suafkyBgU2NoZW1hYCAqL1xuZXhwb3J0IGludGVyZmFjZSBTRlVJU2NoZW1hSXRlbVxuICBleHRlbmRzIFNGUmVuZGVyU2NoZW1hLFxuICAgIFNGQXJyYXlTY2hlbWEsXG4gICAgU0ZIb3Jpem9udGFsTGF5b3V0U2NoZW1hLFxuICAgIFNGRGF0YVNjaGVtYSxcbiAgICBTRklucHV0U2NoZW1hLFxuICAgIEVycm9yU2NoZW1hIHtcbiAgW2tleTogc3RyaW5nXTogYW55O1xuXG4gIC8qKiDmmK/lkKblvIDlkK/osIPor5XmqKHlvI/vvIzlnKjmlbDmja7lj5jmm7TjgIHmoKHpqozkvJrmiZPljbDlh7rnm7jkv6Hkv6Hmga/vvIzkuI3lu7rorq7lnKjnlJ/kuqfnjq/looPkuK3kvb/nlKggKi9cbiAgZGVidWc/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDlsZ7mgKfpobrluo9cbiAgICpcbiAgICog5b2T5L2g5Y+q5oOz5p+Q5Yeg5Liq5bGe5oCn6Z2g5YmN5pe277yM5YiZ5YWB6K645L2/55So6YCa6YWN56ymIGAqYCDmnaXooajnpLrliankvZnpg6jliIbvvIzkuJTlj6rlhYHorrjlh7rnjrDkuIDmrKFcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICpcbiAgICogWyAnYScsICdiJywgJ2MnLCAnZCcgXSArIFsgJ2MnLCAnYicsICcqJyBdID0gWyAnYycsICdiJywgJ2EnLCAnZCddXG4gICAqL1xuICBvcmRlcj86IHN0cmluZ1tdO1xuICAvKipcbiAgICog5piv5ZCm6ZqQ6JePXG4gICAqL1xuICBoaWRkZW4/OiBib29sZWFuO1xuICAvKipcbiAgICog5oyH5a6a5p2h5Lu25pe25omN5pi+56S677yM5L2G6ZyA6KaBKirms6jmhI8qKu+8mlxuICAgKiAtIOmUruWAvOihqOekuuebkeWQrOWvueixoeWxnuaAp+WQjVxuICAgKiAtIEpTT04gU2NoZW1hIOagoemqjOaYr+WQhOWxnuaAp+eLrOeri+i/kOihjO+8jOebkeWQrOWvueixoeWxnuaAp+avj+S4gOasoeWAvOWPmOWMlumDveS8mumHjeaWsOWBmuS4gOasoeaVtOS4qkpTT07nu5PmnoTorqHnrpdcbiAgICpcbiAgICog5pyJ5pWI5qC85byP5YyF5ous77yaXG4gICAqIC0gYHZpc2libGVJZjogeyBzaG93bjogWyB0cnVlIF0gfWDvvJrlvZMgYHNob3duOiB0cnVlYCDml7bmiY3mmL7npLrlvZPliY3lsZ7mgKdcbiAgICogLSBgdmlzaWJsZUlmOiB7IHNob3duOiBbICckQU5ZJCcgXSB9YO+8muW9kyBgc2hvd25gIOWMheaLrOS7u+aEj+WAvOaXtlxuICAgKiAtIGB2aXNpYmxlSWY6IHsgc2hvd246ICh2YWx1ZTogYW55KSA9PiB2YWx1ZSA+IDAgfWDvvJrlpI3mnYLooajovr7lvI9cbiAgICovXG4gIHZpc2libGVJZj86IHsgW2tleTogc3RyaW5nXTogYW55W10gfCAoKHZhbHVlOiBhbnkpID0+IGJvb2xlYW4pIH07XG59XG5cbi8qKlxuICogVUkgU2NoZW1h77yMS0VZ5ZCNKirliqHlv4UqKuaYryBgJGAg5byA5aS077yI5L6L5aaC77yaYCRuYW1lYOOAgWAkaWRg77yJ77yM5Lul5L6/6IO95Yy65YiGS0VZ5YC86L+Y5pivVUnpgInpoblcbiAqIC0g57uT5p6E5bGC57qn5bqU5ZCMIGBTRlNjaGVtYWAg5LiA6Ie0XG4gKiAtIOW9k0tFWeS4uiBgKmAg5pe26KGo56S65a+55omA5pyJ5a2Q6KGo5Y2V5YWD57Sg6YO95pyJ5pWIXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU0ZVSVNjaGVtYSB7XG4gIFtrZXk6IHN0cmluZ106IFNGVUlTY2hlbWFJdGVtIHwgU0ZVSVNjaGVtYUl0ZW1SdW47XG59XG5cbi8qKlxuICog5YaF6YOo6L+Q6KGM5pe25L2/55SoXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU0ZVSVNjaGVtYUl0ZW1SdW4gZXh0ZW5kcyBTRlVJU2NoZW1hSXRlbSB7XG4gIC8qKiBAaW50ZXJuYWwg6Ieq5a6a5LmJ5qih5p2/ICovXG4gIF9yZW5kZXI/OiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgLyoqIEBpbnRlcm5hbCDmmK/lkKblv4XloasgKi9cbiAgX3JlcXVpcmVkPzogYm9vbGVhbjtcbn1cbiJdfQ==