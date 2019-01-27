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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vZm9ybS8iLCJzb3VyY2VzIjpbInNyYy9zY2hlbWEvdWkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQU9BLHNDQU1DOzs7SUFMQyxnQ0FBYzs7SUFDZCxpQ0FBZTs7SUFDZixrQ0FBZ0I7O0lBQ2hCLGdDQUFjOztJQUNkLGdDQUFjOzs7OztBQUdoQixrQ0F1QkM7Ozs7OztJQW5CQyw4QkFBZ0I7Ozs7O0lBSWhCLDRCQUFjOzs7OztJQUlkLGlDQUFtQjs7Ozs7SUFJbkIsOEJBQWdCOztJQUNoQiwwQkFBK0I7O0lBQy9CLDBCQUErQjs7SUFDL0IsMEJBQStCOztJQUMvQiwwQkFBK0I7O0lBQy9CLDBCQUErQjs7SUFDL0IsMkJBQWdDOzs7OztBQUdsQyxvQ0F5QkM7Ozs7OztJQXJCQyxnQ0FBZ0I7Ozs7O0lBSWhCLCtCQUEwQjs7Ozs7SUFJMUIsOEJBQXFDOzs7OztJQUlyQywrQkFBZTs7Ozs7SUFJZiw4QkFBb0I7Ozs7O0lBRXBCLGtDQUFrQjs7Ozs7SUFFbEIsc0NBQXNCOzs7OztBQUd4Qiw4Q0EwQkM7Ozs7Ozs7O0lBcEJDLDZDQUFtQjs7Ozs7OztJQU9uQiwrQ0FBcUI7Ozs7OztJQU1yQixpREFBdUI7Ozs7OztJQU12QixrREFBd0I7Ozs7O0FBRzFCLG1DQWVDOzs7Ozs7SUFiQyxpQ0FBa0I7Ozs7O0lBR2xCLGdDQUFpQjs7Ozs7SUFHakIsa0NBQW9COzs7OztJQUdwQixvQ0FBcUI7Ozs7O0FBTXZCLG1DQWNDOzs7Ozs7SUFWQyw2QkFBYzs7Ozs7SUFJZCxvQ0FBZ0M7Ozs7O0lBS2hDLGtDQUFvQjs7Ozs7QUFHdEIsa0NBT0M7Ozs7Ozs7O0lBREMsaUNBQTREOzs7Ozs7QUFJOUQsb0NBcUNDOzs7Ozs7SUEzQkMsK0JBQWdCOzs7Ozs7Ozs7OztJQVdoQiwrQkFBaUI7Ozs7O0lBSWpCLGdDQUFpQjs7Ozs7Ozs7Ozs7O0lBV2pCLG1DQUFpRTs7Ozs7Ozs7O0FBUW5FLGdDQUVDOzs7OztBQUtELHVDQUtDOzs7Ozs7SUFIQyxvQ0FBNEI7Ozs7O0lBRTVCLHNDQUFvQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOm5vLWFueVxuaW1wb3J0IHsgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRXJyb3JTY2hlbWEgfSBmcm9tICcuLi9lcnJvcnMnO1xuaW1wb3J0IHsgU0ZTY2hlbWFFbnVtVHlwZSB9IGZyb20gJy4vaW5kZXgnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNGR3JpZFNpemVTY2hlbWEge1xuICBzcGFuPzogbnVtYmVyO1xuICBvcmRlcj86IG51bWJlcjtcbiAgb2Zmc2V0PzogbnVtYmVyO1xuICBwdXNoPzogbnVtYmVyO1xuICBwdWxsPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNGR3JpZFNjaGVtYSB7XG4gIC8qKlxuICAgKiDmoIXmoLzpl7TpmpRcbiAgICovXG4gIGd1dHRlcj86IG51bWJlcjtcbiAgLyoqXG4gICAqIOagheagvOWNoOS9jeagvOaVsO+8jOS4uiBgMGAg5pe255u45b2T5LqOIGBkaXNwbGF5OiBub25lYFxuICAgKi9cbiAgc3Bhbj86IG51bWJlcjtcbiAgLyoqXG4gICAqIOaVsOaNruagheagvOWNoOS9jeagvOaVsO+8jOS4uiBgMGAg5pe255u45b2T5LqOIGBkaXNwbGF5OiBub25lYFxuICAgKi9cbiAgYXJyYXlTcGFuPzogbnVtYmVyO1xuICAvKipcbiAgICog5qCF5qC85bem5L6n55qE6Ze06ZqU5qC85pWw77yM6Ze06ZqU5YaF5LiN5Y+v5Lul5pyJ5qCF5qC8XG4gICAqL1xuICBvZmZzZXQ/OiBudW1iZXI7XG4gIHhzPzogbnVtYmVyIHwgU0ZHcmlkU2l6ZVNjaGVtYTtcbiAgc20/OiBudW1iZXIgfCBTRkdyaWRTaXplU2NoZW1hO1xuICBtZD86IG51bWJlciB8IFNGR3JpZFNpemVTY2hlbWE7XG4gIGxnPzogbnVtYmVyIHwgU0ZHcmlkU2l6ZVNjaGVtYTtcbiAgeGw/OiBudW1iZXIgfCBTRkdyaWRTaXplU2NoZW1hO1xuICB4eGw/OiBudW1iZXIgfCBTRkdyaWRTaXplU2NoZW1hO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNGUmVuZGVyU2NoZW1hIHtcbiAgLyoqXG4gICAqIOaMh+WumumHh+eUqOS7gOS5iOWwj+mDqOS7tua4suafk++8jOaJgOacieWwj+mDqOS7tuWQjeWPr1vmn6XpmIXmlofmoaNdKGh0dHBzOi8vbmctYWxhaW4uY29tLylcbiAgICovXG4gIHdpZGdldD86IHN0cmluZztcbiAgLyoqXG4gICAqIOiHquWumuS5ieexu++8jOetieWQjCBgW25nQ2xhc3NdYCDlgLxcbiAgICovXG4gIGNsYXNzPzogc3RyaW5nIHwgc3RyaW5nW107XG4gIC8qKlxuICAgKiDlhYPntKDnu4Tku7blpKflsI9cbiAgICovXG4gIHNpemU/OiAnZGVmYXVsdCcgfCAnbGFyZ2UnIHwgJ3NtYWxsJztcbiAgLyoqXG4gICAqIOaMh+WumuWuveW6pu+8jOWNleS9je+8mmBweGBcbiAgICovXG4gIHdpZHRoPzogbnVtYmVyO1xuICAvKipcbiAgICog5ZON5bqU5byP5bGe5oCnXG4gICAqL1xuICBncmlkPzogU0ZHcmlkU2NoZW1hO1xuICAvKiog5qCH562+5Y+v6YCJ5L+h5oGvICovXG4gIG9wdGlvbmFsPzogc3RyaW5nO1xuICAvKiog5qCH562+5Y+v6YCJ5biu5Yqp77yM5L2/55SoIGBuei10b29sdGlwYCDlsZXnpLogKi9cbiAgb3B0aW9uYWxIZWxwPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNGSG9yaXpvbnRhbExheW91dFNjaGVtYSB7XG4gIC8qKlxuICAgKiBgbGFiZWxgIOagheagvOWNoOS9jeagvOaVsO+8jOm7mOiupO+8mmA1YFxuICAgKiAtIGAwYCDml7bnm7jlvZPkuo4gYGRpc3BsYXk6IG5vbmVgXG4gICAqIC0g6ZmQIGBob3Jpem9udGFsYCDmsLTlubPluIPlsYDmnInmlYhcbiAgICovXG4gIHNwYW5MYWJlbD86IG51bWJlcjtcblxuICAvKipcbiAgICogYGNvbnRyb2xgIOagheagvOWNoOS9jeagvOaVsO+8jOm7mOiupO+8mmAxOWBcbiAgICogLSBgMGAg5pe255u45b2T5LqOIGBkaXNwbGF5OiBub25lYFxuICAgKiAtIOmZkCBgaG9yaXpvbnRhbGAg5rC05bmz5biD5bGA5pyJ5pWIXG4gICAqL1xuICBzcGFuQ29udHJvbD86IG51bWJlcjtcblxuICAvKipcbiAgICogYGNvbnRyb2xgIOagheagvOW3puS+p+eahOmXtOmalOagvOaVsO+8jOmXtOmalOWGheS4jeWPr+S7peacieagheagvFxuICAgKiAtIOmZkCBgaG9yaXpvbnRhbGAg5rC05bmz5biD5bGA5pyJ5pWIXG4gICAqL1xuICBvZmZzZXRDb250cm9sPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBgbGFiZWxgIOWbuuWumuWuveW6plxuICAgKiAtIOmZkCBgaG9yaXpvbnRhbGAg5rC05bmz5biD5bGA5pyJ5pWIXG4gICAqL1xuICBzcGFuTGFiZWxGaXhlZD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTRkFycmF5U2NoZW1hIHtcbiAgLyoqICoq6ZmQYXJyYXkqKiDmjIflrprmt7vliqDmjInpkq7mlofmnKzvvIzpu5jorqTvvJrmt7vliqAgKi9cbiAgYWRkVGl0bGU/OiBzdHJpbmc7XG5cbiAgLyoqICoq6ZmQYXJyYXkqKiDmjIflrprmt7vliqDmjInpkq7po47moLzvvIznrYnlkIzmjInpkq4gYG56VHlwZWDvvIzpu5jorqTvvJpkYXNoZWQgKi9cbiAgYWRkVHlwZT86IHN0cmluZztcblxuICAvKiogKirpmZBhcnJheSoqIOaMh+WumuaYr+WQpuaYvuekuuenu+mZpOaMiemSriAqL1xuICByZW1vdmFibGU/OiBib29sZWFuO1xuXG4gIC8qKiAqKumZkGFycmF5Kiog5oyH5a6a56e76Zmk5oyJ6ZKu5paH5pys77yM6buY6K6k77ya56e76ZmkICovXG4gIHJlbW92ZVRpdGxlPzogc3RyaW5nO1xuXG4gIC8qKiAqKumZkGFycmF5Kiog5oyH5a6a5piv5ZCm5pi+56S65o6S5bqP5oyJ6ZKuICovXG4gIC8vIG9yZGVyYWJsZT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU0ZJbnB1dFNjaGVtYSB7XG4gIC8qKlxuICAgKiAqKumZkHN0cmluZyoqIOaMh+WumiBgaW5wdXRgIOeahCBgdHlwZWAg5YC877yM6buY6K6k5Li677yaYHRleHRgXG4gICAqL1xuICB0eXBlPzogc3RyaW5nO1xuICAvKipcbiAgICogKirpmZBzdHJpbmcqKiDmloflrZfmoYbkuK3mmL7npLrmj5DnpLrkv6Hmga9cbiAgICovXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nIHwgc3RyaW5nW107XG5cbiAgLyoqXG4gICAqICoq6ZmQc3RyaW5nKiog5Yqg6L295pe25piv5ZCm6I635b6X54Sm54K5XG4gICAqL1xuICBhdXRvZm9jdXM/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNGRGF0YVNjaGVtYSB7XG4gIC8qKlxuICAgKiDlvILmraXpnZnmgIHmlbDmja7mupBcbiAgICogLSBgaW5wdXRgIOWPr+iDveagueaNruS4jeWQjOmDqOS7tueahOaDheWGteWtmOWcqOWAvO+8jOS+i+Wmgu+8mmBhdXRvY29tcGxldGVgIOihqOekuuW9k+WJjemUruWFpeeahOWAvFxuICAgKiAtIOWPguaVsOOAgei/lOWbnuWAvO+8muWPr+iDveagueaNruS4jeWQjOmDqOS7tumcgOaxguiAjOWumu+8jOWFt+S9k+WPgumYheebuOW6lOWwj+mDqOS7tueLrOeri+ivtOaYjlxuICAgKi9cbiAgYXN5bmNEYXRhPzogKGlucHV0PzogYW55KSA9PiBPYnNlcnZhYmxlPFNGU2NoZW1hRW51bVR5cGVbXT47XG59XG5cbi8qKiDmjIflrprlpoLkvZXmuLLmn5MgYFNjaGVtYWAgKi9cbmV4cG9ydCBpbnRlcmZhY2UgU0ZVSVNjaGVtYUl0ZW1cbiAgZXh0ZW5kcyBTRlJlbmRlclNjaGVtYSxcbiAgICBTRkFycmF5U2NoZW1hLFxuICAgIFNGSG9yaXpvbnRhbExheW91dFNjaGVtYSxcbiAgICBTRkRhdGFTY2hlbWEsXG4gICAgU0ZJbnB1dFNjaGVtYSxcbiAgICBFcnJvclNjaGVtYSB7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcblxuICAvKiog5piv5ZCm5byA5ZCv6LCD6K+V5qih5byP77yM5Zyo5pWw5o2u5Y+Y5pu044CB5qCh6aqM5Lya5omT5Y2w5Ye655u45L+h5L+h5oGv77yM5LiN5bu66K6u5Zyo55Sf5Lqn546v5aKD5Lit5L2/55SoICovXG4gIGRlYnVnPzogYm9vbGVhbjtcblxuICAvKipcbiAgICog5bGe5oCn6aG65bqPXG4gICAqXG4gICAqIOW9k+S9oOWPquaDs+afkOWHoOS4quWxnuaAp+mdoOWJjeaXtu+8jOWImeWFgeiuuOS9v+eUqOmAmumFjeespiBgKmAg5p2l6KGo56S65Ymp5L2Z6YOo5YiG77yM5LiU5Y+q5YWB6K645Ye6546w5LiA5qyhXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqXG4gICAqIFsgJ2EnLCAnYicsICdjJywgJ2QnIF0gKyBbICdjJywgJ2InLCAnKicgXSA9IFsgJ2MnLCAnYicsICdhJywgJ2QnXVxuICAgKi9cbiAgb3JkZXI/OiBzdHJpbmdbXTtcbiAgLyoqXG4gICAqIOaYr+WQpumakOiXj1xuICAgKi9cbiAgaGlkZGVuPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOaMh+WumuadoeS7tuaXtuaJjeaYvuekuu+8jOS9humcgOimgSoq5rOo5oSPKirvvJpcbiAgICogLSDplK7lgLzooajnpLrnm5HlkKzlr7nosaHlsZ7mgKflkI1cbiAgICogLSBKU09OIFNjaGVtYSDmoKHpqozmmK/lkITlsZ7mgKfni6znq4vov5DooYzvvIznm5HlkKzlr7nosaHlsZ7mgKfmr4/kuIDmrKHlgLzlj5jljJbpg73kvJrph43mlrDlgZrkuIDmrKHmlbTkuKpKU09O57uT5p6E6K6h566XXG4gICAqXG4gICAqIOacieaViOagvOW8j+WMheaLrO+8mlxuICAgKiAtIGB2aXNpYmxlSWY6IHsgc2hvd246IFsgdHJ1ZSBdIH1g77ya5b2TIGBzaG93bjogdHJ1ZWAg5pe25omN5pi+56S65b2T5YmN5bGe5oCnXG4gICAqIC0gYHZpc2libGVJZjogeyBzaG93bjogWyAnJEFOWSQnIF0gfWDvvJrlvZMgYHNob3duYCDljIXmi6zku7vmhI/lgLzml7ZcbiAgICogLSBgdmlzaWJsZUlmOiB7IHNob3duOiAodmFsdWU6IGFueSkgPT4gdmFsdWUgPiAwIH1g77ya5aSN5p2C6KGo6L6+5byPXG4gICAqL1xuICB2aXNpYmxlSWY/OiB7IFtrZXk6IHN0cmluZ106IGFueVtdIHwgKCh2YWx1ZTogYW55KSA9PiBib29sZWFuKSB9O1xufVxuXG4vKipcbiAqIFVJIFNjaGVtYe+8jEtFWeWQjSoq5Yqh5b+FKirmmK8gYCRgIOW8gOWktO+8iOS+i+Wmgu+8mmAkbmFtZWDjgIFgJGlkYO+8ie+8jOS7peS+v+iDveWMuuWIhktFWeWAvOi/mOaYr1VJ6YCJ6aG5XG4gKiAtIOe7k+aehOWxgue6p+W6lOWQjCBgU0ZTY2hlbWFgIOS4gOiHtFxuICogLSDlvZNLRVnkuLogYCpgIOaXtuihqOekuuWvueaJgOacieWtkOihqOWNleWFg+e0oOmDveacieaViFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNGVUlTY2hlbWEge1xuICBba2V5OiBzdHJpbmddOiBTRlVJU2NoZW1hSXRlbSB8IFNGVUlTY2hlbWFJdGVtUnVuO1xufVxuXG4vKipcbiAqIOWGhemDqOi/kOihjOaXtuS9v+eUqFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNGVUlTY2hlbWFJdGVtUnVuIGV4dGVuZHMgU0ZVSVNjaGVtYUl0ZW0ge1xuICAvKiogQGludGVybmFsIOiHquWumuS5ieaooeadvyAqL1xuICBfcmVuZGVyPzogVGVtcGxhdGVSZWY8dm9pZD47XG4gIC8qKiBAaW50ZXJuYWwg5piv5ZCm5b+F5aGrICovXG4gIF9yZXF1aXJlZD86IGJvb2xlYW47XG59XG4iXX0=