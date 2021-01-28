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
     * 文字提示背景颜色
     * @type {?|undefined}
     */
    SFOptionalHelp.prototype.bgColor;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3NyYy9zY2hlbWEvdWkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUF3QkEsc0NBTUM7OztJQUxDLGdDQUFxQjs7SUFDckIsaUNBQXNCOztJQUN0QixrQ0FBdUI7O0lBQ3ZCLGdDQUFxQjs7SUFDckIsZ0NBQXFCOzs7OztBQUd2QixrQ0F1QkM7Ozs7OztJQW5CQyw4QkFBdUI7Ozs7O0lBSXZCLDRCQUFxQjs7Ozs7SUFJckIsaUNBQTBCOzs7OztJQUkxQiw4QkFBdUI7O0lBQ3ZCLDBCQUErQjs7SUFDL0IsMEJBQStCOztJQUMvQiwwQkFBK0I7O0lBQy9CLDBCQUErQjs7SUFDL0IsMEJBQStCOztJQUMvQiwyQkFBZ0M7Ozs7O0FBR2xDLG9DQTZCQzs7Ozs7O0lBekJDLGdDQUFnQjs7Ozs7SUFJaEIsK0JBQTBCOzs7OztJQUkxQiw4QkFBaUI7Ozs7O0lBSWpCLCtCQUFlOzs7OztJQUlmLDhCQUFvQjs7Ozs7SUFJcEIsa0NBQWtCOzs7OztJQUlsQixzQ0FBdUM7Ozs7O0FBR3pDLG9DQWFDOzs7SUFaQyw4QkFBYzs7SUFDZCw4QkFBYzs7Ozs7SUFFZCxpQ0FBaUI7Ozs7O0lBRWpCLDhCQUFjOztJQUNkLG1DQUF3Qjs7SUFDeEIsaUNBQW9COztJQUNwQix5Q0FBeUI7O0lBQ3pCLHlDQUF5Qjs7SUFDekIsMENBQTBCOztJQUMxQixzQ0FBeUM7Ozs7O0FBRzNDLDhDQTBCQzs7Ozs7Ozs7SUFwQkMsNkNBQTBCOzs7Ozs7O0lBTzFCLCtDQUE0Qjs7Ozs7O0lBTTVCLGlEQUE4Qjs7Ozs7O0lBTTlCLGtEQUErQjs7Ozs7QUFHakMsa0NBU0M7Ozs7OztJQUxDLDRCQUFjOzs7OztJQUlkLHVDQUF5Qjs7Ozs7O0FBSTNCLG9DQW9DQzs7Ozs7O0lBaENDLCtCQUFnQjs7Ozs7Ozs7Ozs7SUFXaEIsK0JBQWlCOzs7OztJQUlqQixnQ0FBaUI7Ozs7Ozs7Ozs7OztJQVdqQixtQ0FBaUU7Ozs7O0lBS2pFLDZCQUFpQjs7Ozs7Ozs7O0FBUW5CLGdDQUVDOzs7OztBQUtELHVDQUtDOzs7Ozs7SUFIQyxvQ0FBNEI7Ozs7O0lBRTVCLHNDQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBQ0xDYW5UeXBlIH0gZnJvbSAnQGRlbG9uL2FjbCc7XG5pbXBvcnQgeyBFcnJvclNjaGVtYSB9IGZyb20gJy4uL2Vycm9ycyc7XG5cbmV4cG9ydCB0eXBlIFNGUGxhY2VtZW50ID1cbiAgfCAndG9wJ1xuICB8ICdsZWZ0J1xuICB8ICdyaWdodCdcbiAgfCAnYm90dG9tJ1xuICB8ICd0b3BMZWZ0J1xuICB8ICd0b3BSaWdodCdcbiAgfCAnYm90dG9tTGVmdCdcbiAgfCAnYm90dG9tUmlnaHQnXG4gIHwgJ2xlZnRUb3AnXG4gIHwgJ2xlZnRCb3R0b20nXG4gIHwgJ3JpZ2h0VG9wJ1xuICB8ICdyaWdodEJvdHRvbSc7XG5cbmV4cG9ydCB0eXBlIFNGVHJpZ2dlciA9ICdjbGljaycgfCAnZm9jdXMnIHwgJ2hvdmVyJztcblxuZXhwb3J0IHR5cGUgU0ZMU1NpemUgPSAnbGFyZ2UnIHwgJ3NtYWxsJztcblxuZXhwb3J0IHR5cGUgU0ZETFNTaXplID0gJ2RlZmF1bHQnIHwgJ2xhcmdlJyB8ICdzbWFsbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU0ZHcmlkU2l6ZVNjaGVtYSB7XG4gIHNwYW4/OiBudW1iZXIgfCBudWxsO1xuICBvcmRlcj86IG51bWJlciB8IG51bGw7XG4gIG9mZnNldD86IG51bWJlciB8IG51bGw7XG4gIHB1c2g/OiBudW1iZXIgfCBudWxsO1xuICBwdWxsPzogbnVtYmVyIHwgbnVsbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTRkdyaWRTY2hlbWEge1xuICAvKipcbiAgICog5qCF5qC86Ze06ZqUXG4gICAqL1xuICBndXR0ZXI/OiBudW1iZXIgfCBudWxsO1xuICAvKipcbiAgICog5qCF5qC85Y2g5L2N5qC85pWw77yM5Li6IGAwYCDml7bnm7jlvZPkuo4gYGRpc3BsYXk6IG5vbmVgXG4gICAqL1xuICBzcGFuPzogbnVtYmVyIHwgbnVsbDtcbiAgLyoqXG4gICAqIOaVsOaNruagheagvOWNoOS9jeagvOaVsO+8jOS4uiBgMGAg5pe255u45b2T5LqOIGBkaXNwbGF5OiBub25lYFxuICAgKi9cbiAgYXJyYXlTcGFuPzogbnVtYmVyIHwgbnVsbDtcbiAgLyoqXG4gICAqIOagheagvOW3puS+p+eahOmXtOmalOagvOaVsO+8jOmXtOmalOWGheS4jeWPr+S7peacieagheagvFxuICAgKi9cbiAgb2Zmc2V0PzogbnVtYmVyIHwgbnVsbDtcbiAgeHM/OiBudW1iZXIgfCBTRkdyaWRTaXplU2NoZW1hO1xuICBzbT86IG51bWJlciB8IFNGR3JpZFNpemVTY2hlbWE7XG4gIG1kPzogbnVtYmVyIHwgU0ZHcmlkU2l6ZVNjaGVtYTtcbiAgbGc/OiBudW1iZXIgfCBTRkdyaWRTaXplU2NoZW1hO1xuICB4bD86IG51bWJlciB8IFNGR3JpZFNpemVTY2hlbWE7XG4gIHh4bD86IG51bWJlciB8IFNGR3JpZFNpemVTY2hlbWE7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU0ZSZW5kZXJTY2hlbWEge1xuICAvKipcbiAgICog5oyH5a6a6YeH55So5LuA5LmI5bCP6YOo5Lu25riy5p+T77yM5omA5pyJ5bCP6YOo5Lu25ZCN5Y+vW+afpemYheaWh+aho10oaHR0cHM6Ly9uZy1hbGFpbi5jb20vKVxuICAgKi9cbiAgd2lkZ2V0Pzogc3RyaW5nO1xuICAvKipcbiAgICog6Ieq5a6a5LmJ57G777yM562J5ZCMIGBbbmdDbGFzc11gIOWAvFxuICAgKi9cbiAgY2xhc3M/OiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgLyoqXG4gICAqIOWFg+e0oOe7hOS7tuWkp+Wwj1xuICAgKi9cbiAgc2l6ZT86IFNGRExTU2l6ZTtcbiAgLyoqXG4gICAqIOaMh+WumuWuveW6pu+8jOWNleS9je+8mmBweGBcbiAgICovXG4gIHdpZHRoPzogbnVtYmVyO1xuICAvKipcbiAgICog5ZON5bqU5byP5bGe5oCnXG4gICAqL1xuICBncmlkPzogU0ZHcmlkU2NoZW1hO1xuICAvKipcbiAgICog5qCH562+5Y+v6YCJ5L+h5oGvXG4gICAqL1xuICBvcHRpb25hbD86IHN0cmluZztcbiAgLyoqXG4gICAqIOagh+etvuWPr+mAieW4ruWKqe+8jOS9v+eUqCBgbnotdG9vbHRpcGAg5bGV56S6XG4gICAqL1xuICBvcHRpb25hbEhlbHA/OiBzdHJpbmcgfCBTRk9wdGlvbmFsSGVscDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTRk9wdGlvbmFsSGVscCB7XG4gIHRleHQ/OiBzdHJpbmc7XG4gIGkxOG4/OiBzdHJpbmc7XG4gIC8qKiDmloflrZfmj5DnpLrog4zmma/popzoibIgKi9cbiAgYmdDb2xvcj86IHN0cmluZztcbiAgLyoqIOWbvuagh++8jOm7mOiupO+8mmBxdWVzdGlvbi1jaXJjbGVgICovXG4gIGljb24/OiBzdHJpbmc7XG4gIHBsYWNlbWVudD86IFNGUGxhY2VtZW50O1xuICB0cmlnZ2VyPzogU0ZUcmlnZ2VyO1xuICBtb3VzZUVudGVyRGVsYXk/OiBudW1iZXI7XG4gIG1vdXNlTGVhdmVEZWxheT86IG51bWJlcjtcbiAgb3ZlcmxheUNsYXNzTmFtZT86IHN0cmluZztcbiAgb3ZlcmxheVN0eWxlPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTRkhvcml6b250YWxMYXlvdXRTY2hlbWEge1xuICAvKipcbiAgICogYGxhYmVsYCDmoIXmoLzljaDkvY3moLzmlbDvvIzpu5jorqTvvJpgNWBcbiAgICogLSBgMGAg5pe255u45b2T5LqOIGBkaXNwbGF5OiBub25lYFxuICAgKiAtIOmZkCBgaG9yaXpvbnRhbGAg5rC05bmz5biD5bGA5pyJ5pWIXG4gICAqL1xuICBzcGFuTGFiZWw/OiBudW1iZXIgfCBudWxsO1xuXG4gIC8qKlxuICAgKiBgY29udHJvbGAg5qCF5qC85Y2g5L2N5qC85pWw77yM6buY6K6k77yaYDE5YFxuICAgKiAtIGAwYCDml7bnm7jlvZPkuo4gYGRpc3BsYXk6IG5vbmVgXG4gICAqIC0g6ZmQIGBob3Jpem9udGFsYCDmsLTlubPluIPlsYDmnInmlYhcbiAgICovXG4gIHNwYW5Db250cm9sPzogbnVtYmVyIHwgbnVsbDtcblxuICAvKipcbiAgICogYGNvbnRyb2xgIOagheagvOW3puS+p+eahOmXtOmalOagvOaVsO+8jOmXtOmalOWGheS4jeWPr+S7peacieagheagvFxuICAgKiAtIOmZkCBgaG9yaXpvbnRhbGAg5rC05bmz5biD5bGA5pyJ5pWIXG4gICAqL1xuICBvZmZzZXRDb250cm9sPzogbnVtYmVyIHwgbnVsbDtcblxuICAvKipcbiAgICogYGxhYmVsYCDlm7rlrprlrr3luqZcbiAgICogLSDpmZAgYGhvcml6b250YWxgIOawtOW5s+W4g+WxgOacieaViFxuICAgKi9cbiAgc3BhbkxhYmVsRml4ZWQ/OiBudW1iZXIgfCBudWxsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNGU2NoZW1hSTE4biB7XG4gIC8qKlxuICAgKiDmjIcgYHNjaGVtYS50aXRsZWAg55qE5Zu96ZmF5YyW6ZSu5YC8XG4gICAqL1xuICBpMThuPzogc3RyaW5nO1xuICAvKipcbiAgICog5a+55bqUIGBzY2hlbWEuZGVzY3JpcHRpb25gIOWbvemZheWMllxuICAgKi9cbiAgZGVzY3JpcHRpb25JMThuPzogc3RyaW5nO1xufVxuXG4vKiog5oyH5a6a5aaC5L2V5riy5p+TIGBTY2hlbWFgICovXG5leHBvcnQgaW50ZXJmYWNlIFNGVUlTY2hlbWFJdGVtIGV4dGVuZHMgU0ZSZW5kZXJTY2hlbWEsIFNGSG9yaXpvbnRhbExheW91dFNjaGVtYSwgRXJyb3JTY2hlbWEsIFNGU2NoZW1hSTE4biB7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcblxuICAvKiog5piv5ZCm5byA5ZCv6LCD6K+V5qih5byP77yM5Zyo5pWw5o2u5Y+Y5pu044CB5qCh6aqM5Lya5omT5Y2w5Ye655u45L+h5L+h5oGv77yM5LiN5bu66K6u5Zyo55Sf5Lqn546v5aKD5Lit5L2/55SoICovXG4gIGRlYnVnPzogYm9vbGVhbjtcblxuICAvKipcbiAgICog5bGe5oCn6aG65bqPXG4gICAqXG4gICAqIOW9k+S9oOWPquaDs+afkOWHoOS4quWxnuaAp+mdoOWJjeaXtu+8jOWImeWFgeiuuOS9v+eUqOmAmumFjeespiBgKmAg5p2l6KGo56S65Ymp5L2Z6YOo5YiG77yM5LiU5Y+q5YWB6K645Ye6546w5LiA5qyhXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqXG4gICAqIFsgJ2EnLCAnYicsICdjJywgJ2QnIF0gKyBbICdjJywgJ2InLCAnKicgXSA9IFsgJ2MnLCAnYicsICdhJywgJ2QnXVxuICAgKi9cbiAgb3JkZXI/OiBzdHJpbmdbXTtcbiAgLyoqXG4gICAqIOaYr+WQpumakOiXj1xuICAgKi9cbiAgaGlkZGVuPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOaMh+WumuadoeS7tuaXtuaJjeaYvuekuu+8jOS9humcgOimgSoq5rOo5oSPKirvvJpcbiAgICogLSDplK7lgLzooajnpLrnm5HlkKzlr7nosaHlsZ7mgKflkI1cbiAgICogLSBKU09OIFNjaGVtYSDmoKHpqozmmK/lkITlsZ7mgKfni6znq4vov5DooYzvvIznm5HlkKzlr7nosaHlsZ7mgKfmr4/kuIDmrKHlgLzlj5jljJbpg73kvJrph43mlrDlgZrkuIDmrKHmlbTkuKpKU09O57uT5p6E6K6h566XXG4gICAqXG4gICAqIOacieaViOagvOW8j+WMheaLrO+8mlxuICAgKiAtIGB2aXNpYmxlSWY6IHsgc2hvd246IFsgdHJ1ZSBdIH1g77ya5b2TIGBzaG93bjogdHJ1ZWAg5pe25omN5pi+56S65b2T5YmN5bGe5oCnXG4gICAqIC0gYHZpc2libGVJZjogeyBzaG93bjogWyAnJEFOWSQnIF0gfWDvvJrlvZMgYHNob3duYCDljIXmi6zku7vmhI/lgLzml7ZcbiAgICogLSBgdmlzaWJsZUlmOiB7IHNob3duOiAodmFsdWU6IGFueSkgPT4gdmFsdWUgPiAwIH1g77ya5aSN5p2C6KGo6L6+5byPXG4gICAqL1xuICB2aXNpYmxlSWY/OiB7IFtrZXk6IHN0cmluZ106IGFueVtdIHwgKCh2YWx1ZTogYW55KSA9PiBib29sZWFuKSB9O1xuXG4gIC8qKlxuICAgKiBBQ0wg6YWN572uXG4gICAqL1xuICBhY2w/OiBBQ0xDYW5UeXBlO1xufVxuXG4vKipcbiAqIFVJIFNjaGVtYe+8jEtFWeWQjSoq5Yqh5b+FKirmmK8gYCRgIOW8gOWktO+8iOS+i+Wmgu+8mmAkbmFtZWDjgIFgJGlkYO+8ie+8jOS7peS+v+iDveWMuuWIhktFWeWAvOi/mOaYr1VJ6YCJ6aG5XG4gKiAtIOe7k+aehOWxgue6p+W6lOWQjCBgU0ZTY2hlbWFgIOS4gOiHtFxuICogLSDlvZNLRVnkuLogYCpgIOaXtuihqOekuuWvueaJgOacieWtkOihqOWNleWFg+e0oOmDveacieaViFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNGVUlTY2hlbWEge1xuICBba2V5OiBzdHJpbmddOiBTRlVJU2NoZW1hSXRlbSB8IFNGVUlTY2hlbWFJdGVtUnVuO1xufVxuXG4vKipcbiAqIOWGhemDqOi/kOihjOaXtuS9v+eUqFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNGVUlTY2hlbWFJdGVtUnVuIGV4dGVuZHMgU0ZVSVNjaGVtYUl0ZW0ge1xuICAvKiogQGludGVybmFsIOiHquWumuS5ieaooeadvyAqL1xuICBfcmVuZGVyPzogVGVtcGxhdGVSZWY8dm9pZD47XG4gIC8qKiBAaW50ZXJuYWwg5piv5ZCm5b+F5aGrICovXG4gIF9yZXF1aXJlZD86IGJvb2xlYW47XG59XG4iXX0=