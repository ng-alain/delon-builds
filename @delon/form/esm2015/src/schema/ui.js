/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function SFGridSizeSchema() { }
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
/**
 * @record
 */
export function SFGridSchema() { }
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
/**
 * @record
 */
export function SFRenderSchema() { }
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
/**
 * @record
 */
export function SFHorizontalLayoutSchema() { }
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
/**
 * @record
 */
export function SFArraySchema() { }
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
/**
 * @record
 */
export function SFInputSchema() { }
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
/**
 * @record
 */
export function SFDataSchema() { }
/**
 * 异步静态数据源
 * - `input` 可能根据不同部件的情况存在值，例如：`autocomplete` 表示当前键入的值
 * - 参数、返回值：可能根据不同部件需求而定，具体参阅相应小部件独立说明
 * @type {?|undefined}
 */
SFDataSchema.prototype.asyncData;
/**
 * 指定如何渲染 `Schema`
 * @record
 */
export function SFUISchemaItem() { }
/* TODO: handle strange member:
[key: string]: any;
*/
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vZm9ybS8iLCJzb3VyY2VzIjpbInNyYy9zY2hlbWEvdWkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgRXJyb3JTY2hlbWEgfSBmcm9tICcuLi9lcnJvcnMnO1xyXG5pbXBvcnQgeyBTRlNjaGVtYUVudW1UeXBlIH0gZnJvbSAnLi9pbmRleCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNGR3JpZFNpemVTY2hlbWEge1xyXG4gIHNwYW4/OiBudW1iZXI7XHJcbiAgb3JkZXI/OiBudW1iZXI7XHJcbiAgb2Zmc2V0PzogbnVtYmVyO1xyXG4gIHB1c2g/OiBudW1iZXI7XHJcbiAgcHVsbD86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTRkdyaWRTY2hlbWEge1xyXG4gIC8qKlxyXG4gICAqIOagheagvOmXtOmalFxyXG4gICAqL1xyXG4gIGd1dHRlcj86IG51bWJlcjtcclxuICAvKipcclxuICAgKiDmoIXmoLzljaDkvY3moLzmlbDvvIzkuLogYDBgIOaXtuebuOW9k+S6jiBgZGlzcGxheTogbm9uZWBcclxuICAgKi9cclxuICBzcGFuPzogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIOaVsOaNruagheagvOWNoOS9jeagvOaVsO+8jOS4uiBgMGAg5pe255u45b2T5LqOIGBkaXNwbGF5OiBub25lYFxyXG4gICAqL1xyXG4gIGFycmF5U3Bhbj86IG51bWJlcjtcclxuICAvKipcclxuICAgKiDmoIXmoLzlt6bkvqfnmoTpl7TpmpTmoLzmlbDvvIzpl7TpmpTlhoXkuI3lj6/ku6XmnInmoIXmoLxcclxuICAgKi9cclxuICBvZmZzZXQ/OiBudW1iZXI7XHJcbiAgeHM/OiBudW1iZXIgfCBTRkdyaWRTaXplU2NoZW1hO1xyXG4gIHNtPzogbnVtYmVyIHwgU0ZHcmlkU2l6ZVNjaGVtYTtcclxuICBtZD86IG51bWJlciB8IFNGR3JpZFNpemVTY2hlbWE7XHJcbiAgbGc/OiBudW1iZXIgfCBTRkdyaWRTaXplU2NoZW1hO1xyXG4gIHhsPzogbnVtYmVyIHwgU0ZHcmlkU2l6ZVNjaGVtYTtcclxuICB4eGw/OiBudW1iZXIgfCBTRkdyaWRTaXplU2NoZW1hO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNGUmVuZGVyU2NoZW1hIHtcclxuICAvKipcclxuICAgKiDmjIflrprph4fnlKjku4DkuYjlsI/pg6jku7bmuLLmn5PvvIzmiYDmnInlsI/pg6jku7blkI3lj69b5p+l6ZiF5paH5qGjXShodHRwczovL25nLWFsYWluLmNvbS8pXHJcbiAgICovXHJcbiAgd2lkZ2V0Pzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIOiHquWumuS5ieexu++8jOetieWQjCBgW25nQ2xhc3NdYCDlgLxcclxuICAgKi9cclxuICBjbGFzcz86IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gIC8qKlxyXG4gICAqIOWFg+e0oOe7hOS7tuWkp+Wwj1xyXG4gICAqL1xyXG4gIHNpemU/OiAnZGVmYXVsdCcgfCAnbGFyZ2UnIHwgJ3NtYWxsJztcclxuICAvKipcclxuICAgKiDmjIflrprlrr3luqbvvIzljZXkvY3vvJpgcHhgXHJcbiAgICovXHJcbiAgd2lkdGg/OiBudW1iZXI7XHJcbiAgLyoqXHJcbiAgICog5ZON5bqU5byP5bGe5oCnXHJcbiAgICovXHJcbiAgZ3JpZD86IFNGR3JpZFNjaGVtYTtcclxuICAvKiog5qCH562+5Y+v6YCJ5L+h5oGvICovXHJcbiAgb3B0aW9uYWw/OiBzdHJpbmc7XHJcbiAgLyoqIOagh+etvuWPr+mAieW4ruWKqe+8jOS9v+eUqCBgbnotdG9vbHRpcGAg5bGV56S6ICovXHJcbiAgb3B0aW9uYWxIZWxwPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNGSG9yaXpvbnRhbExheW91dFNjaGVtYSB7XHJcbiAgLyoqXHJcbiAgICogYGxhYmVsYCDmoIXmoLzljaDkvY3moLzmlbDvvIzpu5jorqTvvJpgNWBcclxuICAgKiAtIGAwYCDml7bnm7jlvZPkuo4gYGRpc3BsYXk6IG5vbmVgXHJcbiAgICogLSDpmZAgYGhvcml6b250YWxgIOawtOW5s+W4g+WxgOacieaViFxyXG4gICAqL1xyXG4gIHNwYW5MYWJlbD86IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogYGNvbnRyb2xgIOagheagvOWNoOS9jeagvOaVsO+8jOm7mOiupO+8mmAxOWBcclxuICAgKiAtIGAwYCDml7bnm7jlvZPkuo4gYGRpc3BsYXk6IG5vbmVgXHJcbiAgICogLSDpmZAgYGhvcml6b250YWxgIOawtOW5s+W4g+WxgOacieaViFxyXG4gICAqL1xyXG4gIHNwYW5Db250cm9sPzogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBgY29udHJvbGAg5qCF5qC85bem5L6n55qE6Ze06ZqU5qC85pWw77yM6Ze06ZqU5YaF5LiN5Y+v5Lul5pyJ5qCF5qC8XHJcbiAgICogLSDpmZAgYGhvcml6b250YWxgIOawtOW5s+W4g+WxgOacieaViFxyXG4gICAqL1xyXG4gIG9mZnNldENvbnRyb2w/OiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIGBsYWJlbGAg5Zu65a6a5a695bqmXHJcbiAgICogLSDpmZAgYGhvcml6b250YWxgIOawtOW5s+W4g+WxgOacieaViFxyXG4gICAqL1xyXG4gIHNwYW5MYWJlbEZpeGVkPzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNGQXJyYXlTY2hlbWEge1xyXG4gIC8qKiAqKumZkGFycmF5Kiog5oyH5a6a5re75Yqg5oyJ6ZKu5paH5pys77yM6buY6K6k77ya5re75YqgICovXHJcbiAgYWRkVGl0bGU/OiBzdHJpbmc7XHJcblxyXG4gIC8qKiAqKumZkGFycmF5Kiog5oyH5a6a5re75Yqg5oyJ6ZKu6aOO5qC877yM562J5ZCM5oyJ6ZKuIGBuelR5cGVg77yM6buY6K6k77yaZGFzaGVkICovXHJcbiAgYWRkVHlwZT86IHN0cmluZztcclxuXHJcbiAgLyoqICoq6ZmQYXJyYXkqKiDmjIflrprmmK/lkKbmmL7npLrnp7vpmaTmjInpkq4gKi9cclxuICByZW1vdmFibGU/OiBib29sZWFuO1xyXG5cclxuICAvKiogKirpmZBhcnJheSoqIOaMh+Wumuenu+mZpOaMiemSruaWh+acrO+8jOm7mOiupO+8muenu+mZpCAqL1xyXG4gIHJlbW92ZVRpdGxlPzogc3RyaW5nO1xyXG5cclxuICAvKiogKirpmZBhcnJheSoqIOaMh+WumuaYr+WQpuaYvuekuuaOkuW6j+aMiemSriAqL1xyXG4gIC8vIG9yZGVyYWJsZT86IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU0ZJbnB1dFNjaGVtYSB7XHJcbiAgLyoqXHJcbiAgICogKirpmZBzdHJpbmcqKiDmjIflrpogYGlucHV0YCDnmoQgYHR5cGVgIOWAvO+8jOm7mOiupOS4uu+8mmB0ZXh0YFxyXG4gICAqL1xyXG4gIHR5cGU/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogKirpmZBzdHJpbmcqKiDmloflrZfmoYbkuK3mmL7npLrmj5DnpLrkv6Hmga9cclxuICAgKi9cclxuICBwbGFjZWhvbGRlcj86IHN0cmluZyB8IHN0cmluZ1tdO1xyXG5cclxuICAvKipcclxuICAgKiAqKumZkHN0cmluZyoqIOWKoOi9veaXtuaYr+WQpuiOt+W+l+eEpueCuVxyXG4gICAqL1xyXG4gIGF1dG9mb2N1cz86IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU0ZEYXRhU2NoZW1hIHtcclxuICAvKipcclxuICAgKiDlvILmraXpnZnmgIHmlbDmja7mupBcclxuICAgKiAtIGBpbnB1dGAg5Y+v6IO95qC55o2u5LiN5ZCM6YOo5Lu255qE5oOF5Ya15a2Y5Zyo5YC877yM5L6L5aaC77yaYGF1dG9jb21wbGV0ZWAg6KGo56S65b2T5YmN6ZSu5YWl55qE5YC8XHJcbiAgICogLSDlj4LmlbDjgIHov5Tlm57lgLzvvJrlj6/og73moLnmja7kuI3lkIzpg6jku7bpnIDmsYLogIzlrprvvIzlhbfkvZPlj4LpmIXnm7jlupTlsI/pg6jku7bni6znq4vor7TmmI5cclxuICAgKi9cclxuICBhc3luY0RhdGE/OiAoaW5wdXQ/OiBhbnkpID0+IE9ic2VydmFibGU8U0ZTY2hlbWFFbnVtVHlwZVtdPjtcclxufVxyXG5cclxuLyoqIOaMh+WumuWmguS9lea4suafkyBgU2NoZW1hYCAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFNGVUlTY2hlbWFJdGVtXHJcbiAgZXh0ZW5kcyBTRlJlbmRlclNjaGVtYSxcclxuICAgIFNGQXJyYXlTY2hlbWEsXHJcbiAgICBTRkhvcml6b250YWxMYXlvdXRTY2hlbWEsXHJcbiAgICBTRkRhdGFTY2hlbWEsXHJcbiAgICBTRklucHV0U2NoZW1hLFxyXG4gICAgRXJyb3JTY2hlbWEge1xyXG4gIFtrZXk6IHN0cmluZ106IGFueTtcclxuXHJcbiAgLyoqIOaYr+WQpuW8gOWQr+iwg+ivleaooeW8j++8jOWcqOaVsOaNruWPmOabtOOAgeagoemqjOS8muaJk+WNsOWHuuebuOS/oeS/oeaBr++8jOS4jeW7uuiuruWcqOeUn+S6p+eOr+Wig+S4reS9v+eUqCAqL1xyXG4gIGRlYnVnPzogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICog5bGe5oCn6aG65bqPXHJcbiAgICpcclxuICAgKiDlvZPkvaDlj6rmg7Pmn5Dlh6DkuKrlsZ7mgKfpnaDliY3ml7bvvIzliJnlhYHorrjkvb/nlKjpgJrphY3nrKYgYCpgIOadpeihqOekuuWJqeS9memDqOWIhu+8jOS4lOWPquWFgeiuuOWHuueOsOS4gOasoVxyXG4gICAqXHJcbiAgICogQGV4YW1wbGVcclxuICAgKlxyXG4gICAqIFsgJ2EnLCAnYicsICdjJywgJ2QnIF0gKyBbICdjJywgJ2InLCAnKicgXSA9IFsgJ2MnLCAnYicsICdhJywgJ2QnXVxyXG4gICAqL1xyXG4gIG9yZGVyPzogc3RyaW5nW107XHJcbiAgLyoqXHJcbiAgICog5piv5ZCm6ZqQ6JePXHJcbiAgICovXHJcbiAgaGlkZGVuPzogYm9vbGVhbjtcclxuICAvKipcclxuICAgKiDmjIflrprmnaHku7bml7bmiY3mmL7npLrvvIzkvYbpnIDopoEqKuazqOaEjyoq77yaXHJcbiAgICogLSDplK7lgLzooajnpLrnm5HlkKzlr7nosaHlsZ7mgKflkI1cclxuICAgKiAtIEpTT04gU2NoZW1hIOagoemqjOaYr+WQhOWxnuaAp+eLrOeri+i/kOihjO+8jOebkeWQrOWvueixoeWxnuaAp+avj+S4gOasoeWAvOWPmOWMlumDveS8mumHjeaWsOWBmuS4gOasoeaVtOS4qkpTT07nu5PmnoTorqHnrpdcclxuICAgKlxyXG4gICAqIOacieaViOagvOW8j+WMheaLrO+8mlxyXG4gICAqIC0gYHZpc2libGVJZjogeyBzaG93bjogWyB0cnVlIF0gfWDvvJrlvZMgYHNob3duOiB0cnVlYCDml7bmiY3mmL7npLrlvZPliY3lsZ7mgKdcclxuICAgKiAtIGB2aXNpYmxlSWY6IHsgc2hvd246IFsgJyRBTlkkJyBdIH1g77ya5b2TIGBzaG93bmAg5YyF5ous5Lu75oSP5YC85pe2XHJcbiAgICogLSBgdmlzaWJsZUlmOiB7IHNob3duOiAodmFsdWU6IGFueSkgPT4gdmFsdWUgPiAwIH1g77ya5aSN5p2C6KGo6L6+5byPXHJcbiAgICovXHJcbiAgdmlzaWJsZUlmPzogeyBba2V5OiBzdHJpbmddOiBhbnlbXSB8ICgodmFsdWU6IGFueSkgPT4gYm9vbGVhbikgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFVJIFNjaGVtYe+8jEtFWeWQjSoq5Yqh5b+FKirmmK8gYCRgIOW8gOWktO+8iOS+i+Wmgu+8mmAkbmFtZWDjgIFgJGlkYO+8ie+8jOS7peS+v+iDveWMuuWIhktFWeWAvOi/mOaYr1VJ6YCJ6aG5XHJcbiAqIC0g57uT5p6E5bGC57qn5bqU5ZCMIGBTRlNjaGVtYWAg5LiA6Ie0XHJcbiAqIC0g5b2TS0VZ5Li6IGAqYCDml7booajnpLrlr7nmiYDmnInlrZDooajljZXlhYPntKDpg73mnInmlYhcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgU0ZVSVNjaGVtYSB7XHJcbiAgW2tleTogc3RyaW5nXTogU0ZVSVNjaGVtYUl0ZW0gfCBTRlVJU2NoZW1hSXRlbVJ1bjtcclxufVxyXG5cclxuLyoqXHJcbiAqIOWGhemDqOi/kOihjOaXtuS9v+eUqFxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBTRlVJU2NoZW1hSXRlbVJ1biBleHRlbmRzIFNGVUlTY2hlbWFJdGVtIHtcclxuICAvKiogQGludGVybmFsIOiHquWumuS5ieaooeadvyAqL1xyXG4gIF9yZW5kZXI/OiBUZW1wbGF0ZVJlZjx7fT47XHJcbiAgLyoqIEBpbnRlcm5hbCDmmK/lkKblv4XloasgKi9cclxuICBfcmVxdWlyZWQ/OiBib29sZWFuO1xyXG59XHJcbiJdfQ==