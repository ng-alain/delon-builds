/**
 * @fileoverview added by tsickle
 * Generated from: src/schema/ui.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
export function SFOptionalHelp() { }
if (false) {
    /** @type {?|undefined} */
    SFOptionalHelp.prototype.text;
    /** @type {?|undefined} */
    SFOptionalHelp.prototype.i18n;
    /**
     * 图标，默认：`question-circle`
     * @type {?|undefined}
     */
    SFOptionalHelp.prototype.icon;
    /** @type {?|undefined} */
    SFOptionalHelp.prototype.placement;
    /** @type {?|undefined} */
    SFOptionalHelp.prototype.trigger;
    /** @type {?|undefined} */
    SFOptionalHelp.prototype.mouseEnterDelay;
    /** @type {?|undefined} */
    SFOptionalHelp.prototype.mouseLeaveDelay;
    /** @type {?|undefined} */
    SFOptionalHelp.prototype.overlayClassName;
    /** @type {?|undefined} */
    SFOptionalHelp.prototype.overlayStyle;
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
export function SFSchemaI18n() { }
if (false) {
    /**
     * 指 `schema.title` 的国际化键值
     * @type {?|undefined}
     */
    SFSchemaI18n.prototype.i18n;
    /**
     * 对应 `schema.description` 国际化
     * @type {?|undefined}
     */
    SFSchemaI18n.prototype.descriptionI18n;
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
    /**
     * ACL 配置
     * @type {?|undefined}
     */
    SFUISchemaItem.prototype.acl;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3NyYy9zY2hlbWEvdWkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUF3QkEsc0NBTUM7OztJQUxDLGdDQUFxQjs7SUFDckIsaUNBQXNCOztJQUN0QixrQ0FBdUI7O0lBQ3ZCLGdDQUFxQjs7SUFDckIsZ0NBQXFCOzs7OztBQUd2QixrQ0F1QkM7Ozs7OztJQW5CQyw4QkFBdUI7Ozs7O0lBSXZCLDRCQUFxQjs7Ozs7SUFJckIsaUNBQTBCOzs7OztJQUkxQiw4QkFBdUI7O0lBQ3ZCLDBCQUErQjs7SUFDL0IsMEJBQStCOztJQUMvQiwwQkFBK0I7O0lBQy9CLDBCQUErQjs7SUFDL0IsMEJBQStCOztJQUMvQiwyQkFBZ0M7Ozs7O0FBR2xDLG9DQTZCQzs7Ozs7O0lBekJDLGdDQUFnQjs7Ozs7SUFJaEIsK0JBQTBCOzs7OztJQUkxQiw4QkFBaUI7Ozs7O0lBSWpCLCtCQUFlOzs7OztJQUlmLDhCQUFvQjs7Ozs7SUFJcEIsa0NBQWtCOzs7OztJQUlsQixzQ0FBdUM7Ozs7O0FBR3pDLG9DQVdDOzs7SUFWQyw4QkFBYzs7SUFDZCw4QkFBYzs7Ozs7SUFFZCw4QkFBYzs7SUFDZCxtQ0FBd0I7O0lBQ3hCLGlDQUFvQjs7SUFDcEIseUNBQXlCOztJQUN6Qix5Q0FBeUI7O0lBQ3pCLDBDQUEwQjs7SUFDMUIsc0NBQXlDOzs7OztBQUczQyw4Q0EwQkM7Ozs7Ozs7O0lBcEJDLDZDQUEwQjs7Ozs7OztJQU8xQiwrQ0FBNEI7Ozs7OztJQU01QixpREFBOEI7Ozs7OztJQU05QixrREFBK0I7Ozs7O0FBR2pDLGtDQVNDOzs7Ozs7SUFMQyw0QkFBYzs7Ozs7SUFJZCx1Q0FBeUI7Ozs7OztBQUkzQixvQ0FvQ0M7Ozs7OztJQWhDQywrQkFBZ0I7Ozs7Ozs7Ozs7O0lBV2hCLCtCQUFpQjs7Ozs7SUFJakIsZ0NBQWlCOzs7Ozs7Ozs7Ozs7SUFXakIsbUNBQWlFOzs7OztJQUtqRSw2QkFBaUI7Ozs7Ozs7OztBQVFuQixnQ0FFQzs7Ozs7QUFLRCx1Q0FLQzs7Ozs7O0lBSEMsb0NBQTRCOzs7OztJQUU1QixzQ0FBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQUNMQ2FuVHlwZSB9IGZyb20gJ0BkZWxvbi9hY2wnO1xuaW1wb3J0IHsgRXJyb3JTY2hlbWEgfSBmcm9tICcuLi9lcnJvcnMnO1xuXG5leHBvcnQgdHlwZSBTRlBsYWNlbWVudCA9XG4gIHwgJ3RvcCdcbiAgfCAnbGVmdCdcbiAgfCAncmlnaHQnXG4gIHwgJ2JvdHRvbSdcbiAgfCAndG9wTGVmdCdcbiAgfCAndG9wUmlnaHQnXG4gIHwgJ2JvdHRvbUxlZnQnXG4gIHwgJ2JvdHRvbVJpZ2h0J1xuICB8ICdsZWZ0VG9wJ1xuICB8ICdsZWZ0Qm90dG9tJ1xuICB8ICdyaWdodFRvcCdcbiAgfCAncmlnaHRCb3R0b20nO1xuXG5leHBvcnQgdHlwZSBTRlRyaWdnZXIgPSAnY2xpY2snIHwgJ2ZvY3VzJyB8ICdob3Zlcic7XG5cbmV4cG9ydCB0eXBlIFNGTFNTaXplID0gJ2xhcmdlJyB8ICdzbWFsbCc7XG5cbmV4cG9ydCB0eXBlIFNGRExTU2l6ZSA9ICdkZWZhdWx0JyB8ICdsYXJnZScgfCAnc21hbGwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNGR3JpZFNpemVTY2hlbWEge1xuICBzcGFuPzogbnVtYmVyIHwgbnVsbDtcbiAgb3JkZXI/OiBudW1iZXIgfCBudWxsO1xuICBvZmZzZXQ/OiBudW1iZXIgfCBudWxsO1xuICBwdXNoPzogbnVtYmVyIHwgbnVsbDtcbiAgcHVsbD86IG51bWJlciB8IG51bGw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU0ZHcmlkU2NoZW1hIHtcbiAgLyoqXG4gICAqIOagheagvOmXtOmalFxuICAgKi9cbiAgZ3V0dGVyPzogbnVtYmVyIHwgbnVsbDtcbiAgLyoqXG4gICAqIOagheagvOWNoOS9jeagvOaVsO+8jOS4uiBgMGAg5pe255u45b2T5LqOIGBkaXNwbGF5OiBub25lYFxuICAgKi9cbiAgc3Bhbj86IG51bWJlciB8IG51bGw7XG4gIC8qKlxuICAgKiDmlbDmja7moIXmoLzljaDkvY3moLzmlbDvvIzkuLogYDBgIOaXtuebuOW9k+S6jiBgZGlzcGxheTogbm9uZWBcbiAgICovXG4gIGFycmF5U3Bhbj86IG51bWJlciB8IG51bGw7XG4gIC8qKlxuICAgKiDmoIXmoLzlt6bkvqfnmoTpl7TpmpTmoLzmlbDvvIzpl7TpmpTlhoXkuI3lj6/ku6XmnInmoIXmoLxcbiAgICovXG4gIG9mZnNldD86IG51bWJlciB8IG51bGw7XG4gIHhzPzogbnVtYmVyIHwgU0ZHcmlkU2l6ZVNjaGVtYTtcbiAgc20/OiBudW1iZXIgfCBTRkdyaWRTaXplU2NoZW1hO1xuICBtZD86IG51bWJlciB8IFNGR3JpZFNpemVTY2hlbWE7XG4gIGxnPzogbnVtYmVyIHwgU0ZHcmlkU2l6ZVNjaGVtYTtcbiAgeGw/OiBudW1iZXIgfCBTRkdyaWRTaXplU2NoZW1hO1xuICB4eGw/OiBudW1iZXIgfCBTRkdyaWRTaXplU2NoZW1hO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNGUmVuZGVyU2NoZW1hIHtcbiAgLyoqXG4gICAqIOaMh+WumumHh+eUqOS7gOS5iOWwj+mDqOS7tua4suafk++8jOaJgOacieWwj+mDqOS7tuWQjeWPr1vmn6XpmIXmlofmoaNdKGh0dHBzOi8vbmctYWxhaW4uY29tLylcbiAgICovXG4gIHdpZGdldD86IHN0cmluZztcbiAgLyoqXG4gICAqIOiHquWumuS5ieexu++8jOetieWQjCBgW25nQ2xhc3NdYCDlgLxcbiAgICovXG4gIGNsYXNzPzogc3RyaW5nIHwgc3RyaW5nW107XG4gIC8qKlxuICAgKiDlhYPntKDnu4Tku7blpKflsI9cbiAgICovXG4gIHNpemU/OiBTRkRMU1NpemU7XG4gIC8qKlxuICAgKiDmjIflrprlrr3luqbvvIzljZXkvY3vvJpgcHhgXG4gICAqL1xuICB3aWR0aD86IG51bWJlcjtcbiAgLyoqXG4gICAqIOWTjeW6lOW8j+WxnuaAp1xuICAgKi9cbiAgZ3JpZD86IFNGR3JpZFNjaGVtYTtcbiAgLyoqXG4gICAqIOagh+etvuWPr+mAieS/oeaBr1xuICAgKi9cbiAgb3B0aW9uYWw/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDmoIfnrb7lj6/pgInluK7liqnvvIzkvb/nlKggYG56LXRvb2x0aXBgIOWxleekulxuICAgKi9cbiAgb3B0aW9uYWxIZWxwPzogc3RyaW5nIHwgU0ZPcHRpb25hbEhlbHA7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU0ZPcHRpb25hbEhlbHAge1xuICB0ZXh0Pzogc3RyaW5nO1xuICBpMThuPzogc3RyaW5nO1xuICAvKiog5Zu+5qCH77yM6buY6K6k77yaYHF1ZXN0aW9uLWNpcmNsZWAgKi9cbiAgaWNvbj86IHN0cmluZztcbiAgcGxhY2VtZW50PzogU0ZQbGFjZW1lbnQ7XG4gIHRyaWdnZXI/OiBTRlRyaWdnZXI7XG4gIG1vdXNlRW50ZXJEZWxheT86IG51bWJlcjtcbiAgbW91c2VMZWF2ZURlbGF5PzogbnVtYmVyO1xuICBvdmVybGF5Q2xhc3NOYW1lPzogc3RyaW5nO1xuICBvdmVybGF5U3R5bGU/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNGSG9yaXpvbnRhbExheW91dFNjaGVtYSB7XG4gIC8qKlxuICAgKiBgbGFiZWxgIOagheagvOWNoOS9jeagvOaVsO+8jOm7mOiupO+8mmA1YFxuICAgKiAtIGAwYCDml7bnm7jlvZPkuo4gYGRpc3BsYXk6IG5vbmVgXG4gICAqIC0g6ZmQIGBob3Jpem9udGFsYCDmsLTlubPluIPlsYDmnInmlYhcbiAgICovXG4gIHNwYW5MYWJlbD86IG51bWJlciB8IG51bGw7XG5cbiAgLyoqXG4gICAqIGBjb250cm9sYCDmoIXmoLzljaDkvY3moLzmlbDvvIzpu5jorqTvvJpgMTlgXG4gICAqIC0gYDBgIOaXtuebuOW9k+S6jiBgZGlzcGxheTogbm9uZWBcbiAgICogLSDpmZAgYGhvcml6b250YWxgIOawtOW5s+W4g+WxgOacieaViFxuICAgKi9cbiAgc3BhbkNvbnRyb2w/OiBudW1iZXIgfCBudWxsO1xuXG4gIC8qKlxuICAgKiBgY29udHJvbGAg5qCF5qC85bem5L6n55qE6Ze06ZqU5qC85pWw77yM6Ze06ZqU5YaF5LiN5Y+v5Lul5pyJ5qCF5qC8XG4gICAqIC0g6ZmQIGBob3Jpem9udGFsYCDmsLTlubPluIPlsYDmnInmlYhcbiAgICovXG4gIG9mZnNldENvbnRyb2w/OiBudW1iZXIgfCBudWxsO1xuXG4gIC8qKlxuICAgKiBgbGFiZWxgIOWbuuWumuWuveW6plxuICAgKiAtIOmZkCBgaG9yaXpvbnRhbGAg5rC05bmz5biD5bGA5pyJ5pWIXG4gICAqL1xuICBzcGFuTGFiZWxGaXhlZD86IG51bWJlciB8IG51bGw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU0ZTY2hlbWFJMThuIHtcbiAgLyoqXG4gICAqIOaMhyBgc2NoZW1hLnRpdGxlYCDnmoTlm73pmYXljJbplK7lgLxcbiAgICovXG4gIGkxOG4/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDlr7nlupQgYHNjaGVtYS5kZXNjcmlwdGlvbmAg5Zu96ZmF5YyWXG4gICAqL1xuICBkZXNjcmlwdGlvbkkxOG4/OiBzdHJpbmc7XG59XG5cbi8qKiDmjIflrprlpoLkvZXmuLLmn5MgYFNjaGVtYWAgKi9cbmV4cG9ydCBpbnRlcmZhY2UgU0ZVSVNjaGVtYUl0ZW0gZXh0ZW5kcyBTRlJlbmRlclNjaGVtYSwgU0ZIb3Jpem9udGFsTGF5b3V0U2NoZW1hLCBFcnJvclNjaGVtYSwgU0ZTY2hlbWFJMThuIHtcbiAgW2tleTogc3RyaW5nXTogYW55O1xuXG4gIC8qKiDmmK/lkKblvIDlkK/osIPor5XmqKHlvI/vvIzlnKjmlbDmja7lj5jmm7TjgIHmoKHpqozkvJrmiZPljbDlh7rnm7jkv6Hkv6Hmga/vvIzkuI3lu7rorq7lnKjnlJ/kuqfnjq/looPkuK3kvb/nlKggKi9cbiAgZGVidWc/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDlsZ7mgKfpobrluo9cbiAgICpcbiAgICog5b2T5L2g5Y+q5oOz5p+Q5Yeg5Liq5bGe5oCn6Z2g5YmN5pe277yM5YiZ5YWB6K645L2/55So6YCa6YWN56ymIGAqYCDmnaXooajnpLrliankvZnpg6jliIbvvIzkuJTlj6rlhYHorrjlh7rnjrDkuIDmrKFcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICpcbiAgICogWyAnYScsICdiJywgJ2MnLCAnZCcgXSArIFsgJ2MnLCAnYicsICcqJyBdID0gWyAnYycsICdiJywgJ2EnLCAnZCddXG4gICAqL1xuICBvcmRlcj86IHN0cmluZ1tdO1xuICAvKipcbiAgICog5piv5ZCm6ZqQ6JePXG4gICAqL1xuICBoaWRkZW4/OiBib29sZWFuO1xuICAvKipcbiAgICog5oyH5a6a5p2h5Lu25pe25omN5pi+56S677yM5L2G6ZyA6KaBKirms6jmhI8qKu+8mlxuICAgKiAtIOmUruWAvOihqOekuuebkeWQrOWvueixoeWxnuaAp+WQjVxuICAgKiAtIEpTT04gU2NoZW1hIOagoemqjOaYr+WQhOWxnuaAp+eLrOeri+i/kOihjO+8jOebkeWQrOWvueixoeWxnuaAp+avj+S4gOasoeWAvOWPmOWMlumDveS8mumHjeaWsOWBmuS4gOasoeaVtOS4qkpTT07nu5PmnoTorqHnrpdcbiAgICpcbiAgICog5pyJ5pWI5qC85byP5YyF5ous77yaXG4gICAqIC0gYHZpc2libGVJZjogeyBzaG93bjogWyB0cnVlIF0gfWDvvJrlvZMgYHNob3duOiB0cnVlYCDml7bmiY3mmL7npLrlvZPliY3lsZ7mgKdcbiAgICogLSBgdmlzaWJsZUlmOiB7IHNob3duOiBbICckQU5ZJCcgXSB9YO+8muW9kyBgc2hvd25gIOWMheaLrOS7u+aEj+WAvOaXtlxuICAgKiAtIGB2aXNpYmxlSWY6IHsgc2hvd246ICh2YWx1ZTogYW55KSA9PiB2YWx1ZSA+IDAgfWDvvJrlpI3mnYLooajovr7lvI9cbiAgICovXG4gIHZpc2libGVJZj86IHsgW2tleTogc3RyaW5nXTogYW55W10gfCAoKHZhbHVlOiBhbnkpID0+IGJvb2xlYW4pIH07XG5cbiAgLyoqXG4gICAqIEFDTCDphY3nva5cbiAgICovXG4gIGFjbD86IEFDTENhblR5cGU7XG59XG5cbi8qKlxuICogVUkgU2NoZW1h77yMS0VZ5ZCNKirliqHlv4UqKuaYryBgJGAg5byA5aS077yI5L6L5aaC77yaYCRuYW1lYOOAgWAkaWRg77yJ77yM5Lul5L6/6IO95Yy65YiGS0VZ5YC86L+Y5pivVUnpgInpoblcbiAqIC0g57uT5p6E5bGC57qn5bqU5ZCMIGBTRlNjaGVtYWAg5LiA6Ie0XG4gKiAtIOW9k0tFWeS4uiBgKmAg5pe26KGo56S65a+55omA5pyJ5a2Q6KGo5Y2V5YWD57Sg6YO95pyJ5pWIXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU0ZVSVNjaGVtYSB7XG4gIFtrZXk6IHN0cmluZ106IFNGVUlTY2hlbWFJdGVtIHwgU0ZVSVNjaGVtYUl0ZW1SdW47XG59XG5cbi8qKlxuICog5YaF6YOo6L+Q6KGM5pe25L2/55SoXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU0ZVSVNjaGVtYUl0ZW1SdW4gZXh0ZW5kcyBTRlVJU2NoZW1hSXRlbSB7XG4gIC8qKiBAaW50ZXJuYWwg6Ieq5a6a5LmJ5qih5p2/ICovXG4gIF9yZW5kZXI/OiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgLyoqIEBpbnRlcm5hbCDmmK/lkKblv4XloasgKi9cbiAgX3JlcXVpcmVkPzogYm9vbGVhbjtcbn1cbiJdfQ==