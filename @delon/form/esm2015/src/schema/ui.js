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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vZm9ybS8iLCJzb3VyY2VzIjpbInNyYy9zY2hlbWEvdWkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQW9CQSxzQ0FNQzs7O0lBTEMsZ0NBQXFCOztJQUNyQixpQ0FBc0I7O0lBQ3RCLGtDQUF1Qjs7SUFDdkIsZ0NBQXFCOztJQUNyQixnQ0FBcUI7Ozs7O0FBR3ZCLGtDQXVCQzs7Ozs7O0lBbkJDLDhCQUF1Qjs7Ozs7SUFJdkIsNEJBQXFCOzs7OztJQUlyQixpQ0FBMEI7Ozs7O0lBSTFCLDhCQUF1Qjs7SUFDdkIsMEJBQStCOztJQUMvQiwwQkFBK0I7O0lBQy9CLDBCQUErQjs7SUFDL0IsMEJBQStCOztJQUMvQiwwQkFBK0I7O0lBQy9CLDJCQUFnQzs7Ozs7QUFHbEMsb0NBNkJDOzs7Ozs7SUF6QkMsZ0NBQWdCOzs7OztJQUloQiwrQkFBMEI7Ozs7O0lBSTFCLDhCQUFxQzs7Ozs7SUFJckMsK0JBQWU7Ozs7O0lBSWYsOEJBQW9COzs7OztJQUlwQixrQ0FBa0I7Ozs7O0lBSWxCLHNDQUF1Qzs7Ozs7QUFHekMsb0NBVUM7OztJQVRDLDhCQUFhOzs7OztJQUViLDhCQUFjOztJQUNkLG1DQUF3Qjs7SUFDeEIsaUNBQW9COztJQUNwQix5Q0FBeUI7O0lBQ3pCLHlDQUF5Qjs7SUFDekIsMENBQTBCOztJQUMxQixzQ0FBeUM7Ozs7O0FBRzNDLDhDQTBCQzs7Ozs7Ozs7SUFwQkMsNkNBQTBCOzs7Ozs7O0lBTzFCLCtDQUE0Qjs7Ozs7O0lBTTVCLGlEQUE4Qjs7Ozs7O0lBTTlCLGtEQUErQjs7Ozs7O0FBYWpDLG9DQW9DQzs7Ozs7O0lBaENDLCtCQUFnQjs7Ozs7Ozs7Ozs7SUFXaEIsK0JBQWlCOzs7OztJQUlqQixnQ0FBaUI7Ozs7Ozs7Ozs7OztJQVdqQixtQ0FBaUU7Ozs7O0lBS2pFLDZCQUFpQjs7Ozs7Ozs7O0FBUW5CLGdDQUVDOzs7OztBQUtELHVDQUtDOzs7Ozs7SUFIQyxvQ0FBNEI7Ozs7O0lBRTVCLHNDQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBQ0xDYW5UeXBlIH0gZnJvbSAnQGRlbG9uL2FjbCc7XG5pbXBvcnQgeyBFcnJvclNjaGVtYSB9IGZyb20gJy4uL2Vycm9ycyc7XG5cbmV4cG9ydCB0eXBlIFNGUGxhY2VtZW50ID1cbiAgfCAndG9wJ1xuICB8ICdsZWZ0J1xuICB8ICdyaWdodCdcbiAgfCAnYm90dG9tJ1xuICB8ICd0b3BMZWZ0J1xuICB8ICd0b3BSaWdodCdcbiAgfCAnYm90dG9tTGVmdCdcbiAgfCAnYm90dG9tUmlnaHQnXG4gIHwgJ2xlZnRUb3AnXG4gIHwgJ2xlZnRCb3R0b20nXG4gIHwgJ3JpZ2h0VG9wJ1xuICB8ICdyaWdodEJvdHRvbSc7XG5cbmV4cG9ydCB0eXBlIFNGVHJpZ2dlciA9ICdjbGljaycgfCAnZm9jdXMnIHwgJ2hvdmVyJztcblxuZXhwb3J0IGludGVyZmFjZSBTRkdyaWRTaXplU2NoZW1hIHtcbiAgc3Bhbj86IG51bWJlciB8IG51bGw7XG4gIG9yZGVyPzogbnVtYmVyIHwgbnVsbDtcbiAgb2Zmc2V0PzogbnVtYmVyIHwgbnVsbDtcbiAgcHVzaD86IG51bWJlciB8IG51bGw7XG4gIHB1bGw/OiBudW1iZXIgfCBudWxsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNGR3JpZFNjaGVtYSB7XG4gIC8qKlxuICAgKiDmoIXmoLzpl7TpmpRcbiAgICovXG4gIGd1dHRlcj86IG51bWJlciB8IG51bGw7XG4gIC8qKlxuICAgKiDmoIXmoLzljaDkvY3moLzmlbDvvIzkuLogYDBgIOaXtuebuOW9k+S6jiBgZGlzcGxheTogbm9uZWBcbiAgICovXG4gIHNwYW4/OiBudW1iZXIgfCBudWxsO1xuICAvKipcbiAgICog5pWw5o2u5qCF5qC85Y2g5L2N5qC85pWw77yM5Li6IGAwYCDml7bnm7jlvZPkuo4gYGRpc3BsYXk6IG5vbmVgXG4gICAqL1xuICBhcnJheVNwYW4/OiBudW1iZXIgfCBudWxsO1xuICAvKipcbiAgICog5qCF5qC85bem5L6n55qE6Ze06ZqU5qC85pWw77yM6Ze06ZqU5YaF5LiN5Y+v5Lul5pyJ5qCF5qC8XG4gICAqL1xuICBvZmZzZXQ/OiBudW1iZXIgfCBudWxsO1xuICB4cz86IG51bWJlciB8IFNGR3JpZFNpemVTY2hlbWE7XG4gIHNtPzogbnVtYmVyIHwgU0ZHcmlkU2l6ZVNjaGVtYTtcbiAgbWQ/OiBudW1iZXIgfCBTRkdyaWRTaXplU2NoZW1hO1xuICBsZz86IG51bWJlciB8IFNGR3JpZFNpemVTY2hlbWE7XG4gIHhsPzogbnVtYmVyIHwgU0ZHcmlkU2l6ZVNjaGVtYTtcbiAgeHhsPzogbnVtYmVyIHwgU0ZHcmlkU2l6ZVNjaGVtYTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTRlJlbmRlclNjaGVtYSB7XG4gIC8qKlxuICAgKiDmjIflrprph4fnlKjku4DkuYjlsI/pg6jku7bmuLLmn5PvvIzmiYDmnInlsI/pg6jku7blkI3lj69b5p+l6ZiF5paH5qGjXShodHRwczovL25nLWFsYWluLmNvbS8pXG4gICAqL1xuICB3aWRnZXQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDoh6rlrprkuYnnsbvvvIznrYnlkIwgYFtuZ0NsYXNzXWAg5YC8XG4gICAqL1xuICBjbGFzcz86IHN0cmluZyB8IHN0cmluZ1tdO1xuICAvKipcbiAgICog5YWD57Sg57uE5Lu25aSn5bCPXG4gICAqL1xuICBzaXplPzogJ2RlZmF1bHQnIHwgJ2xhcmdlJyB8ICdzbWFsbCc7XG4gIC8qKlxuICAgKiDmjIflrprlrr3luqbvvIzljZXkvY3vvJpgcHhgXG4gICAqL1xuICB3aWR0aD86IG51bWJlcjtcbiAgLyoqXG4gICAqIOWTjeW6lOW8j+WxnuaAp1xuICAgKi9cbiAgZ3JpZD86IFNGR3JpZFNjaGVtYTtcbiAgLyoqXG4gICAqIOagh+etvuWPr+mAieS/oeaBr1xuICAgKi9cbiAgb3B0aW9uYWw/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDmoIfnrb7lj6/pgInluK7liqnvvIzkvb/nlKggYG56LXRvb2x0aXBgIOWxleekulxuICAgKi9cbiAgb3B0aW9uYWxIZWxwPzogc3RyaW5nIHwgU0ZPcHRpb25hbEhlbHA7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU0ZPcHRpb25hbEhlbHAge1xuICB0ZXh0OiBzdHJpbmc7XG4gIC8qKiDlm77moIfvvIzpu5jorqTvvJpgcXVlc3Rpb24tY2lyY2xlYCAqL1xuICBpY29uPzogc3RyaW5nO1xuICBwbGFjZW1lbnQ/OiBTRlBsYWNlbWVudDtcbiAgdHJpZ2dlcj86IFNGVHJpZ2dlcjtcbiAgbW91c2VFbnRlckRlbGF5PzogbnVtYmVyO1xuICBtb3VzZUxlYXZlRGVsYXk/OiBudW1iZXI7XG4gIG92ZXJsYXlDbGFzc05hbWU/OiBzdHJpbmc7XG4gIG92ZXJsYXlTdHlsZT86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU0ZIb3Jpem9udGFsTGF5b3V0U2NoZW1hIHtcbiAgLyoqXG4gICAqIGBsYWJlbGAg5qCF5qC85Y2g5L2N5qC85pWw77yM6buY6K6k77yaYDVgXG4gICAqIC0gYDBgIOaXtuebuOW9k+S6jiBgZGlzcGxheTogbm9uZWBcbiAgICogLSDpmZAgYGhvcml6b250YWxgIOawtOW5s+W4g+WxgOacieaViFxuICAgKi9cbiAgc3BhbkxhYmVsPzogbnVtYmVyIHwgbnVsbDtcblxuICAvKipcbiAgICogYGNvbnRyb2xgIOagheagvOWNoOS9jeagvOaVsO+8jOm7mOiupO+8mmAxOWBcbiAgICogLSBgMGAg5pe255u45b2T5LqOIGBkaXNwbGF5OiBub25lYFxuICAgKiAtIOmZkCBgaG9yaXpvbnRhbGAg5rC05bmz5biD5bGA5pyJ5pWIXG4gICAqL1xuICBzcGFuQ29udHJvbD86IG51bWJlciB8IG51bGw7XG5cbiAgLyoqXG4gICAqIGBjb250cm9sYCDmoIXmoLzlt6bkvqfnmoTpl7TpmpTmoLzmlbDvvIzpl7TpmpTlhoXkuI3lj6/ku6XmnInmoIXmoLxcbiAgICogLSDpmZAgYGhvcml6b250YWxgIOawtOW5s+W4g+WxgOacieaViFxuICAgKi9cbiAgb2Zmc2V0Q29udHJvbD86IG51bWJlciB8IG51bGw7XG5cbiAgLyoqXG4gICAqIGBsYWJlbGAg5Zu65a6a5a695bqmXG4gICAqIC0g6ZmQIGBob3Jpem9udGFsYCDmsLTlubPluIPlsYDmnInmlYhcbiAgICovXG4gIHNwYW5MYWJlbEZpeGVkPzogbnVtYmVyIHwgbnVsbDtcbn1cblxuLy8gZXhwb3J0IGludGVyZmFjZSBTRkRhdGFTY2hlbWEge1xuLy8gICAvKipcbi8vICAgICog5byC5q2l6Z2Z5oCB5pWw5o2u5rqQXG4vLyAgICAqIC0gYGlucHV0YCDlj6/og73moLnmja7kuI3lkIzpg6jku7bnmoTmg4XlhrXlrZjlnKjlgLzvvIzkvovlpoLvvJpgYXV0b2NvbXBsZXRlYCDooajnpLrlvZPliY3plK7lhaXnmoTlgLxcbi8vICAgICogLSDlj4LmlbDjgIHov5Tlm57lgLzvvJrlj6/og73moLnmja7kuI3lkIzpg6jku7bpnIDmsYLogIzlrprvvIzlhbfkvZPlj4LpmIXnm7jlupTlsI/pg6jku7bni6znq4vor7TmmI5cbi8vICAgICovXG4vLyAgIGFzeW5jRGF0YT86IChpbnB1dD86IGFueSkgPT4gT2JzZXJ2YWJsZTxTRlNjaGVtYUVudW1UeXBlW10+O1xuLy8gfVxuXG4vKiog5oyH5a6a5aaC5L2V5riy5p+TIGBTY2hlbWFgICovXG5leHBvcnQgaW50ZXJmYWNlIFNGVUlTY2hlbWFJdGVtIGV4dGVuZHMgU0ZSZW5kZXJTY2hlbWEsIFNGSG9yaXpvbnRhbExheW91dFNjaGVtYSwgRXJyb3JTY2hlbWEge1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG5cbiAgLyoqIOaYr+WQpuW8gOWQr+iwg+ivleaooeW8j++8jOWcqOaVsOaNruWPmOabtOOAgeagoemqjOS8muaJk+WNsOWHuuebuOS/oeS/oeaBr++8jOS4jeW7uuiuruWcqOeUn+S6p+eOr+Wig+S4reS9v+eUqCAqL1xuICBkZWJ1Zz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOWxnuaAp+mhuuW6j1xuICAgKlxuICAgKiDlvZPkvaDlj6rmg7Pmn5Dlh6DkuKrlsZ7mgKfpnaDliY3ml7bvvIzliJnlhYHorrjkvb/nlKjpgJrphY3nrKYgYCpgIOadpeihqOekuuWJqeS9memDqOWIhu+8jOS4lOWPquWFgeiuuOWHuueOsOS4gOasoVxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKlxuICAgKiBbICdhJywgJ2InLCAnYycsICdkJyBdICsgWyAnYycsICdiJywgJyonIF0gPSBbICdjJywgJ2InLCAnYScsICdkJ11cbiAgICovXG4gIG9yZGVyPzogc3RyaW5nW107XG4gIC8qKlxuICAgKiDmmK/lkKbpmpDol49cbiAgICovXG4gIGhpZGRlbj86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDmjIflrprmnaHku7bml7bmiY3mmL7npLrvvIzkvYbpnIDopoEqKuazqOaEjyoq77yaXG4gICAqIC0g6ZSu5YC86KGo56S655uR5ZCs5a+56LGh5bGe5oCn5ZCNXG4gICAqIC0gSlNPTiBTY2hlbWEg5qCh6aqM5piv5ZCE5bGe5oCn54us56uL6L+Q6KGM77yM55uR5ZCs5a+56LGh5bGe5oCn5q+P5LiA5qyh5YC85Y+Y5YyW6YO95Lya6YeN5paw5YGa5LiA5qyh5pW05LiqSlNPTue7k+aehOiuoeeul1xuICAgKlxuICAgKiDmnInmlYjmoLzlvI/ljIXmi6zvvJpcbiAgICogLSBgdmlzaWJsZUlmOiB7IHNob3duOiBbIHRydWUgXSB9YO+8muW9kyBgc2hvd246IHRydWVgIOaXtuaJjeaYvuekuuW9k+WJjeWxnuaAp1xuICAgKiAtIGB2aXNpYmxlSWY6IHsgc2hvd246IFsgJyRBTlkkJyBdIH1g77ya5b2TIGBzaG93bmAg5YyF5ous5Lu75oSP5YC85pe2XG4gICAqIC0gYHZpc2libGVJZjogeyBzaG93bjogKHZhbHVlOiBhbnkpID0+IHZhbHVlID4gMCB9YO+8muWkjeadguihqOi+vuW8j1xuICAgKi9cbiAgdmlzaWJsZUlmPzogeyBba2V5OiBzdHJpbmddOiBhbnlbXSB8ICgodmFsdWU6IGFueSkgPT4gYm9vbGVhbikgfTtcblxuICAvKipcbiAgICogQUNMIOmFjee9rlxuICAgKi9cbiAgYWNsPzogQUNMQ2FuVHlwZTtcbn1cblxuLyoqXG4gKiBVSSBTY2hlbWHvvIxLRVnlkI0qKuWKoeW/hSoq5pivIGAkYCDlvIDlpLTvvIjkvovlpoLvvJpgJG5hbWVg44CBYCRpZGDvvInvvIzku6Xkvr/og73ljLrliIZLRVnlgLzov5jmmK9VSemAiemhuVxuICogLSDnu5PmnoTlsYLnuqflupTlkIwgYFNGU2NoZW1hYCDkuIDoh7RcbiAqIC0g5b2TS0VZ5Li6IGAqYCDml7booajnpLrlr7nmiYDmnInlrZDooajljZXlhYPntKDpg73mnInmlYhcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTRlVJU2NoZW1hIHtcbiAgW2tleTogc3RyaW5nXTogU0ZVSVNjaGVtYUl0ZW0gfCBTRlVJU2NoZW1hSXRlbVJ1bjtcbn1cblxuLyoqXG4gKiDlhoXpg6jov5DooYzml7bkvb/nlKhcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTRlVJU2NoZW1hSXRlbVJ1biBleHRlbmRzIFNGVUlTY2hlbWFJdGVtIHtcbiAgLyoqIEBpbnRlcm5hbCDoh6rlrprkuYnmqKHmnb8gKi9cbiAgX3JlbmRlcj86IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICAvKiogQGludGVybmFsIOaYr+WQpuW/heWhqyAqL1xuICBfcmVxdWlyZWQ/OiBib29sZWFuO1xufVxuIl19