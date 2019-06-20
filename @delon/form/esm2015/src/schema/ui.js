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
export function SFOptionalHelp() { }
if (false) {
    /** @type {?} */
    SFOptionalHelp.prototype.text;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vZm9ybS8iLCJzb3VyY2VzIjpbInNyYy9zY2hlbWEvdWkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQXNCQSxzQ0FNQzs7O0lBTEMsZ0NBQXFCOztJQUNyQixpQ0FBc0I7O0lBQ3RCLGtDQUF1Qjs7SUFDdkIsZ0NBQXFCOztJQUNyQixnQ0FBcUI7Ozs7O0FBR3ZCLGtDQXVCQzs7Ozs7O0lBbkJDLDhCQUF1Qjs7Ozs7SUFJdkIsNEJBQXFCOzs7OztJQUlyQixpQ0FBMEI7Ozs7O0lBSTFCLDhCQUF1Qjs7SUFDdkIsMEJBQStCOztJQUMvQiwwQkFBK0I7O0lBQy9CLDBCQUErQjs7SUFDL0IsMEJBQStCOztJQUMvQiwwQkFBK0I7O0lBQy9CLDJCQUFnQzs7Ozs7QUFHbEMsb0NBeUJDOzs7Ozs7SUFyQkMsZ0NBQWdCOzs7OztJQUloQiwrQkFBMEI7Ozs7O0lBSTFCLDhCQUFxQzs7Ozs7SUFJckMsK0JBQWU7Ozs7O0lBSWYsOEJBQW9COzs7OztJQUVwQixrQ0FBa0I7Ozs7O0lBRWxCLHNDQUF1Qzs7Ozs7QUFHekMsb0NBVUM7OztJQVRDLDhCQUFhOzs7OztJQUViLDhCQUFjOztJQUNkLG1DQUF3Qjs7SUFDeEIsaUNBQW9COztJQUNwQix5Q0FBeUI7O0lBQ3pCLHlDQUF5Qjs7SUFDekIsMENBQTBCOztJQUMxQixzQ0FBeUM7Ozs7O0FBRzNDLDhDQTBCQzs7Ozs7Ozs7SUFwQkMsNkNBQTBCOzs7Ozs7O0lBTzFCLCtDQUE0Qjs7Ozs7O0lBTTVCLGlEQUE4Qjs7Ozs7O0lBTTlCLGtEQUErQjs7Ozs7QUFHakMsbUNBZUM7Ozs7OztJQWJDLGlDQUFrQjs7Ozs7SUFHbEIsZ0NBQWlCOzs7OztJQUdqQixrQ0FBb0I7Ozs7O0lBR3BCLG9DQUFxQjs7Ozs7QUFNdkIsbUNBY0M7Ozs7OztJQVZDLDZCQUFjOzs7OztJQUlkLG9DQUFnQzs7Ozs7SUFLaEMsa0NBQW9COzs7OztBQUd0QixrQ0FPQzs7Ozs7Ozs7SUFEQyxpQ0FBNEQ7Ozs7OztBQUk5RCxvQ0FvQ0M7Ozs7OztJQWhDQywrQkFBZ0I7Ozs7Ozs7Ozs7O0lBV2hCLCtCQUFpQjs7Ozs7SUFJakIsZ0NBQWlCOzs7Ozs7Ozs7Ozs7SUFXakIsbUNBQWlFOzs7OztJQUtqRSw2QkFBaUI7Ozs7Ozs7OztBQVFuQixnQ0FFQzs7Ozs7QUFLRCx1Q0FLQzs7Ozs7O0lBSEMsb0NBQTRCOzs7OztJQUU1QixzQ0FBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQUNMQ2FuVHlwZSB9IGZyb20gJ0BkZWxvbi9hY2wnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRXJyb3JTY2hlbWEgfSBmcm9tICcuLi9lcnJvcnMnO1xuaW1wb3J0IHsgU0ZTY2hlbWFFbnVtVHlwZSB9IGZyb20gJy4vaW5kZXgnO1xuXG5leHBvcnQgdHlwZSBTRlBsYWNlbWVudCA9XG4gIHwgJ3RvcCdcbiAgfCAnbGVmdCdcbiAgfCAncmlnaHQnXG4gIHwgJ2JvdHRvbSdcbiAgfCAndG9wTGVmdCdcbiAgfCAndG9wUmlnaHQnXG4gIHwgJ2JvdHRvbUxlZnQnXG4gIHwgJ2JvdHRvbVJpZ2h0J1xuICB8ICdsZWZ0VG9wJ1xuICB8ICdsZWZ0Qm90dG9tJ1xuICB8ICdyaWdodFRvcCdcbiAgfCAncmlnaHRCb3R0b20nO1xuXG5leHBvcnQgdHlwZSBTRlRyaWdnZXIgPSAnY2xpY2snIHwgJ2ZvY3VzJyB8ICdob3Zlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU0ZHcmlkU2l6ZVNjaGVtYSB7XG4gIHNwYW4/OiBudW1iZXIgfCBudWxsO1xuICBvcmRlcj86IG51bWJlciB8IG51bGw7XG4gIG9mZnNldD86IG51bWJlciB8IG51bGw7XG4gIHB1c2g/OiBudW1iZXIgfCBudWxsO1xuICBwdWxsPzogbnVtYmVyIHwgbnVsbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTRkdyaWRTY2hlbWEge1xuICAvKipcbiAgICog5qCF5qC86Ze06ZqUXG4gICAqL1xuICBndXR0ZXI/OiBudW1iZXIgfCBudWxsO1xuICAvKipcbiAgICog5qCF5qC85Y2g5L2N5qC85pWw77yM5Li6IGAwYCDml7bnm7jlvZPkuo4gYGRpc3BsYXk6IG5vbmVgXG4gICAqL1xuICBzcGFuPzogbnVtYmVyIHwgbnVsbDtcbiAgLyoqXG4gICAqIOaVsOaNruagheagvOWNoOS9jeagvOaVsO+8jOS4uiBgMGAg5pe255u45b2T5LqOIGBkaXNwbGF5OiBub25lYFxuICAgKi9cbiAgYXJyYXlTcGFuPzogbnVtYmVyIHwgbnVsbDtcbiAgLyoqXG4gICAqIOagheagvOW3puS+p+eahOmXtOmalOagvOaVsO+8jOmXtOmalOWGheS4jeWPr+S7peacieagheagvFxuICAgKi9cbiAgb2Zmc2V0PzogbnVtYmVyIHwgbnVsbDtcbiAgeHM/OiBudW1iZXIgfCBTRkdyaWRTaXplU2NoZW1hO1xuICBzbT86IG51bWJlciB8IFNGR3JpZFNpemVTY2hlbWE7XG4gIG1kPzogbnVtYmVyIHwgU0ZHcmlkU2l6ZVNjaGVtYTtcbiAgbGc/OiBudW1iZXIgfCBTRkdyaWRTaXplU2NoZW1hO1xuICB4bD86IG51bWJlciB8IFNGR3JpZFNpemVTY2hlbWE7XG4gIHh4bD86IG51bWJlciB8IFNGR3JpZFNpemVTY2hlbWE7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU0ZSZW5kZXJTY2hlbWEge1xuICAvKipcbiAgICog5oyH5a6a6YeH55So5LuA5LmI5bCP6YOo5Lu25riy5p+T77yM5omA5pyJ5bCP6YOo5Lu25ZCN5Y+vW+afpemYheaWh+aho10oaHR0cHM6Ly9uZy1hbGFpbi5jb20vKVxuICAgKi9cbiAgd2lkZ2V0Pzogc3RyaW5nO1xuICAvKipcbiAgICog6Ieq5a6a5LmJ57G777yM562J5ZCMIGBbbmdDbGFzc11gIOWAvFxuICAgKi9cbiAgY2xhc3M/OiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgLyoqXG4gICAqIOWFg+e0oOe7hOS7tuWkp+Wwj1xuICAgKi9cbiAgc2l6ZT86ICdkZWZhdWx0JyB8ICdsYXJnZScgfCAnc21hbGwnO1xuICAvKipcbiAgICog5oyH5a6a5a695bqm77yM5Y2V5L2N77yaYHB4YFxuICAgKi9cbiAgd2lkdGg/OiBudW1iZXI7XG4gIC8qKlxuICAgKiDlk43lupTlvI/lsZ7mgKdcbiAgICovXG4gIGdyaWQ/OiBTRkdyaWRTY2hlbWE7XG4gIC8qKiDmoIfnrb7lj6/pgInkv6Hmga8gKi9cbiAgb3B0aW9uYWw/OiBzdHJpbmc7XG4gIC8qKiDmoIfnrb7lj6/pgInluK7liqnvvIzkvb/nlKggYG56LXRvb2x0aXBgIOWxleekuiAqL1xuICBvcHRpb25hbEhlbHA/OiBzdHJpbmcgfCBTRk9wdGlvbmFsSGVscDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTRk9wdGlvbmFsSGVscCB7XG4gIHRleHQ6IHN0cmluZztcbiAgLyoqIOWbvuagh++8jOm7mOiupO+8mmBxdWVzdGlvbi1jaXJjbGVgICovXG4gIGljb24/OiBzdHJpbmc7XG4gIHBsYWNlbWVudD86IFNGUGxhY2VtZW50O1xuICB0cmlnZ2VyPzogU0ZUcmlnZ2VyO1xuICBtb3VzZUVudGVyRGVsYXk/OiBudW1iZXI7XG4gIG1vdXNlTGVhdmVEZWxheT86IG51bWJlcjtcbiAgb3ZlcmxheUNsYXNzTmFtZT86IHN0cmluZztcbiAgb3ZlcmxheVN0eWxlPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTRkhvcml6b250YWxMYXlvdXRTY2hlbWEge1xuICAvKipcbiAgICogYGxhYmVsYCDmoIXmoLzljaDkvY3moLzmlbDvvIzpu5jorqTvvJpgNWBcbiAgICogLSBgMGAg5pe255u45b2T5LqOIGBkaXNwbGF5OiBub25lYFxuICAgKiAtIOmZkCBgaG9yaXpvbnRhbGAg5rC05bmz5biD5bGA5pyJ5pWIXG4gICAqL1xuICBzcGFuTGFiZWw/OiBudW1iZXIgfCBudWxsO1xuXG4gIC8qKlxuICAgKiBgY29udHJvbGAg5qCF5qC85Y2g5L2N5qC85pWw77yM6buY6K6k77yaYDE5YFxuICAgKiAtIGAwYCDml7bnm7jlvZPkuo4gYGRpc3BsYXk6IG5vbmVgXG4gICAqIC0g6ZmQIGBob3Jpem9udGFsYCDmsLTlubPluIPlsYDmnInmlYhcbiAgICovXG4gIHNwYW5Db250cm9sPzogbnVtYmVyIHwgbnVsbDtcblxuICAvKipcbiAgICogYGNvbnRyb2xgIOagheagvOW3puS+p+eahOmXtOmalOagvOaVsO+8jOmXtOmalOWGheS4jeWPr+S7peacieagheagvFxuICAgKiAtIOmZkCBgaG9yaXpvbnRhbGAg5rC05bmz5biD5bGA5pyJ5pWIXG4gICAqL1xuICBvZmZzZXRDb250cm9sPzogbnVtYmVyIHwgbnVsbDtcblxuICAvKipcbiAgICogYGxhYmVsYCDlm7rlrprlrr3luqZcbiAgICogLSDpmZAgYGhvcml6b250YWxgIOawtOW5s+W4g+WxgOacieaViFxuICAgKi9cbiAgc3BhbkxhYmVsRml4ZWQ/OiBudW1iZXIgfCBudWxsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNGQXJyYXlTY2hlbWEge1xuICAvKiogKirpmZBhcnJheSoqIOaMh+Wumua3u+WKoOaMiemSruaWh+acrO+8jOm7mOiupO+8mua3u+WKoCAqL1xuICBhZGRUaXRsZT86IHN0cmluZztcblxuICAvKiogKirpmZBhcnJheSoqIOaMh+Wumua3u+WKoOaMiemSrumjjuagvO+8jOetieWQjOaMiemSriBgbnpUeXBlYO+8jOm7mOiupO+8mmRhc2hlZCAqL1xuICBhZGRUeXBlPzogc3RyaW5nO1xuXG4gIC8qKiAqKumZkGFycmF5Kiog5oyH5a6a5piv5ZCm5pi+56S656e76Zmk5oyJ6ZKuICovXG4gIHJlbW92YWJsZT86IGJvb2xlYW47XG5cbiAgLyoqICoq6ZmQYXJyYXkqKiDmjIflrprnp7vpmaTmjInpkq7mlofmnKzvvIzpu5jorqTvvJrnp7vpmaQgKi9cbiAgcmVtb3ZlVGl0bGU/OiBzdHJpbmc7XG5cbiAgLyoqICoq6ZmQYXJyYXkqKiDmjIflrprmmK/lkKbmmL7npLrmjpLluo/mjInpkq4gKi9cbiAgLy8gb3JkZXJhYmxlPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTRklucHV0U2NoZW1hIHtcbiAgLyoqXG4gICAqICoq6ZmQc3RyaW5nKiog5oyH5a6aIGBpbnB1dGAg55qEIGB0eXBlYCDlgLzvvIzpu5jorqTkuLrvvJpgdGV4dGBcbiAgICovXG4gIHR5cGU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiAqKumZkHN0cmluZyoqIOaWh+Wtl+ahhuS4reaYvuekuuaPkOekuuS/oeaBr1xuICAgKi9cbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmcgfCBzdHJpbmdbXTtcblxuICAvKipcbiAgICogKirpmZBzdHJpbmcqKiDliqDovb3ml7bmmK/lkKbojrflvpfnhKbngrlcbiAgICovXG4gIGF1dG9mb2N1cz86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU0ZEYXRhU2NoZW1hIHtcbiAgLyoqXG4gICAqIOW8guatpemdmeaAgeaVsOaNrua6kFxuICAgKiAtIGBpbnB1dGAg5Y+v6IO95qC55o2u5LiN5ZCM6YOo5Lu255qE5oOF5Ya15a2Y5Zyo5YC877yM5L6L5aaC77yaYGF1dG9jb21wbGV0ZWAg6KGo56S65b2T5YmN6ZSu5YWl55qE5YC8XG4gICAqIC0g5Y+C5pWw44CB6L+U5Zue5YC877ya5Y+v6IO95qC55o2u5LiN5ZCM6YOo5Lu26ZyA5rGC6ICM5a6a77yM5YW35L2T5Y+C6ZiF55u45bqU5bCP6YOo5Lu254us56uL6K+05piOXG4gICAqL1xuICBhc3luY0RhdGE/OiAoaW5wdXQ/OiBhbnkpID0+IE9ic2VydmFibGU8U0ZTY2hlbWFFbnVtVHlwZVtdPjtcbn1cblxuLyoqIOaMh+WumuWmguS9lea4suafkyBgU2NoZW1hYCAqL1xuZXhwb3J0IGludGVyZmFjZSBTRlVJU2NoZW1hSXRlbSBleHRlbmRzIFNGUmVuZGVyU2NoZW1hLCBTRkFycmF5U2NoZW1hLCBTRkhvcml6b250YWxMYXlvdXRTY2hlbWEsIFNGRGF0YVNjaGVtYSwgU0ZJbnB1dFNjaGVtYSwgRXJyb3JTY2hlbWEge1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG5cbiAgLyoqIOaYr+WQpuW8gOWQr+iwg+ivleaooeW8j++8jOWcqOaVsOaNruWPmOabtOOAgeagoemqjOS8muaJk+WNsOWHuuebuOS/oeS/oeaBr++8jOS4jeW7uuiuruWcqOeUn+S6p+eOr+Wig+S4reS9v+eUqCAqL1xuICBkZWJ1Zz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOWxnuaAp+mhuuW6j1xuICAgKlxuICAgKiDlvZPkvaDlj6rmg7Pmn5Dlh6DkuKrlsZ7mgKfpnaDliY3ml7bvvIzliJnlhYHorrjkvb/nlKjpgJrphY3nrKYgYCpgIOadpeihqOekuuWJqeS9memDqOWIhu+8jOS4lOWPquWFgeiuuOWHuueOsOS4gOasoVxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKlxuICAgKiBbICdhJywgJ2InLCAnYycsICdkJyBdICsgWyAnYycsICdiJywgJyonIF0gPSBbICdjJywgJ2InLCAnYScsICdkJ11cbiAgICovXG4gIG9yZGVyPzogc3RyaW5nW107XG4gIC8qKlxuICAgKiDmmK/lkKbpmpDol49cbiAgICovXG4gIGhpZGRlbj86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDmjIflrprmnaHku7bml7bmiY3mmL7npLrvvIzkvYbpnIDopoEqKuazqOaEjyoq77yaXG4gICAqIC0g6ZSu5YC86KGo56S655uR5ZCs5a+56LGh5bGe5oCn5ZCNXG4gICAqIC0gSlNPTiBTY2hlbWEg5qCh6aqM5piv5ZCE5bGe5oCn54us56uL6L+Q6KGM77yM55uR5ZCs5a+56LGh5bGe5oCn5q+P5LiA5qyh5YC85Y+Y5YyW6YO95Lya6YeN5paw5YGa5LiA5qyh5pW05LiqSlNPTue7k+aehOiuoeeul1xuICAgKlxuICAgKiDmnInmlYjmoLzlvI/ljIXmi6zvvJpcbiAgICogLSBgdmlzaWJsZUlmOiB7IHNob3duOiBbIHRydWUgXSB9YO+8muW9kyBgc2hvd246IHRydWVgIOaXtuaJjeaYvuekuuW9k+WJjeWxnuaAp1xuICAgKiAtIGB2aXNpYmxlSWY6IHsgc2hvd246IFsgJyRBTlkkJyBdIH1g77ya5b2TIGBzaG93bmAg5YyF5ous5Lu75oSP5YC85pe2XG4gICAqIC0gYHZpc2libGVJZjogeyBzaG93bjogKHZhbHVlOiBhbnkpID0+IHZhbHVlID4gMCB9YO+8muWkjeadguihqOi+vuW8j1xuICAgKi9cbiAgdmlzaWJsZUlmPzogeyBba2V5OiBzdHJpbmddOiBhbnlbXSB8ICgodmFsdWU6IGFueSkgPT4gYm9vbGVhbikgfTtcblxuICAvKipcbiAgICogQUNMIOmFjee9rlxuICAgKi9cbiAgYWNsPzogQUNMQ2FuVHlwZTtcbn1cblxuLyoqXG4gKiBVSSBTY2hlbWHvvIxLRVnlkI0qKuWKoeW/hSoq5pivIGAkYCDlvIDlpLTvvIjkvovlpoLvvJpgJG5hbWVg44CBYCRpZGDvvInvvIzku6Xkvr/og73ljLrliIZLRVnlgLzov5jmmK9VSemAiemhuVxuICogLSDnu5PmnoTlsYLnuqflupTlkIwgYFNGU2NoZW1hYCDkuIDoh7RcbiAqIC0g5b2TS0VZ5Li6IGAqYCDml7booajnpLrlr7nmiYDmnInlrZDooajljZXlhYPntKDpg73mnInmlYhcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTRlVJU2NoZW1hIHtcbiAgW2tleTogc3RyaW5nXTogU0ZVSVNjaGVtYUl0ZW0gfCBTRlVJU2NoZW1hSXRlbVJ1bjtcbn1cblxuLyoqXG4gKiDlhoXpg6jov5DooYzml7bkvb/nlKhcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTRlVJU2NoZW1hSXRlbVJ1biBleHRlbmRzIFNGVUlTY2hlbWFJdGVtIHtcbiAgLyoqIEBpbnRlcm5hbCDoh6rlrprkuYnmqKHmnb8gKi9cbiAgX3JlbmRlcj86IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICAvKiogQGludGVybmFsIOaYr+WQpuW/heWhqyAqL1xuICBfcmVxdWlyZWQ/OiBib29sZWFuO1xufVxuIl19