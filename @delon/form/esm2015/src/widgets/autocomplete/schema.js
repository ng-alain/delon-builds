/**
 * @fileoverview added by tsickle
 * Generated from: src/widgets/autocomplete/schema.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function SFAutoCompleteWidgetSchema() { }
if (false) {
    /**
     * 异步静态数据源
     * @type {?|undefined}
     */
    SFAutoCompleteWidgetSchema.prototype.asyncData;
    /**
     * 在文字框中显示提示讯息
     * @type {?|undefined}
     */
    SFAutoCompleteWidgetSchema.prototype.placeholder;
    /**
     * 是否根据输入项进行筛选，默认只对 `label` 属性执行不区分大小定 `indexOf` 过滤
     * 当其为一个函数时，会接收 `inputValue` `option` 两个参数，当 `option` 符合筛选条件时，应返回 `true`，反之则返回 `false`。
     * @type {?|undefined}
     */
    SFAutoCompleteWidgetSchema.prototype.filterOption;
    /**
     * 模式，自动完成常见邮箱后缀，可以重新使用 `enum` 来指定新后缀
     * @type {?|undefined}
     */
    SFAutoCompleteWidgetSchema.prototype.type;
    /**
     * 去抖时间，当实时数据源时默认最少 `50`，单位：毫秒
     * @type {?|undefined}
     */
    SFAutoCompleteWidgetSchema.prototype.debounceTime;
    /**
     * 是否默认高亮第一个选项，默认：`true`
     * @type {?|undefined}
     */
    SFAutoCompleteWidgetSchema.prototype.defaultActiveFirstOption;
    /**
     * 使用键盘选择选项的时候把选中项回填到输入框中，默认：`false`
     * @type {?|undefined}
     */
    SFAutoCompleteWidgetSchema.prototype.backfill;
    /**
     * 自定义宽度单位 `px`，默认：触发元素宽度
     * @type {?|undefined}
     */
    SFAutoCompleteWidgetSchema.prototype.nzWidth;
    /**
     * 变更回调
     * @type {?|undefined}
     */
    SFAutoCompleteWidgetSchema.prototype.change;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3ZzdHMvd29yay8xL3MvcGFja2FnZXMvZm9ybS8iLCJzb3VyY2VzIjpbInNyYy93aWRnZXRzL2F1dG9jb21wbGV0ZS9zY2hlbWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFLQSxnREE4Q0M7Ozs7OztJQTFDQywrQ0FBOEQ7Ozs7O0lBSzlELGlEQUFxQjs7Ozs7O0lBTXJCLGtEQUE0RTs7Ozs7SUFLNUUsMENBQWU7Ozs7O0lBS2Ysa0RBQXNCOzs7OztJQUt0Qiw4REFBbUM7Ozs7O0lBS25DLDhDQUFtQjs7Ozs7SUFLbkIsNkNBQWlCOzs7OztJQUtqQiw0Q0FBOEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOekF1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvYXV0by1jb21wbGV0ZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTRlNjaGVtYUVudW0sIFNGU2NoZW1hRW51bVR5cGUgfSBmcm9tICcuLi8uLi9zY2hlbWEnO1xuaW1wb3J0IHsgU0ZVSVNjaGVtYUl0ZW0gfSBmcm9tICcuLi8uLi9zY2hlbWEvdWknO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNGQXV0b0NvbXBsZXRlV2lkZ2V0U2NoZW1hIGV4dGVuZHMgU0ZVSVNjaGVtYUl0ZW0ge1xuICAvKipcbiAgICog5byC5q2l6Z2Z5oCB5pWw5o2u5rqQXG4gICAqL1xuICBhc3luY0RhdGE/OiAoaW5wdXQ6IHN0cmluZykgPT4gT2JzZXJ2YWJsZTxTRlNjaGVtYUVudW1UeXBlW10+O1xuXG4gIC8qKlxuICAgKiDlnKjmloflrZfmoYbkuK3mmL7npLrmj5DnpLrorq/mga9cbiAgICovXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiDmmK/lkKbmoLnmja7ovpPlhaXpobnov5vooYznrZvpgInvvIzpu5jorqTlj6rlr7kgYGxhYmVsYCDlsZ7mgKfmiafooYzkuI3ljLrliIblpKflsI/lrpogYGluZGV4T2ZgIOi/h+a7pFxuICAgKiDlvZPlhbbkuLrkuIDkuKrlh73mlbDml7bvvIzkvJrmjqXmlLYgYGlucHV0VmFsdWVgIGBvcHRpb25gIOS4pOS4quWPguaVsO+8jOW9kyBgb3B0aW9uYCDnrKblkIjnrZvpgInmnaHku7bml7bvvIzlupTov5Tlm54gYHRydWVg77yM5Y+N5LmL5YiZ6L+U5ZueIGBmYWxzZWDjgIJcbiAgICovXG4gIGZpbHRlck9wdGlvbj86IGJvb2xlYW4gfCAoKGlucHV0OiBzdHJpbmcsIG9wdGlvbjogU0ZTY2hlbWFFbnVtKSA9PiBib29sZWFuKTtcblxuICAvKipcbiAgICog5qih5byP77yM6Ieq5Yqo5a6M5oiQ5bi46KeB6YKu566x5ZCO57yA77yM5Y+v5Lul6YeN5paw5L2/55SoIGBlbnVtYCDmnaXmjIflrprmlrDlkI7nvIBcbiAgICovXG4gIHR5cGU/OiAnZW1haWwnO1xuXG4gIC8qKlxuICAgKiDljrvmipbml7bpl7TvvIzlvZPlrp7ml7bmlbDmja7mupDml7bpu5jorqTmnIDlsJEgYDUwYO+8jOWNleS9je+8muavq+enklxuICAgKi9cbiAgZGVib3VuY2VUaW1lPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiDmmK/lkKbpu5jorqTpq5jkuq7nrKzkuIDkuKrpgInpobnvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICovXG4gIGRlZmF1bHRBY3RpdmVGaXJzdE9wdGlvbj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOS9v+eUqOmUruebmOmAieaLqemAiemhueeahOaXtuWAmeaKiumAieS4remhueWbnuWhq+WIsOi+k+WFpeahhuS4re+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIGJhY2tmaWxsPzogYm9vbGVhbjtcblxuICAvKipcbiAgICog6Ieq5a6a5LmJ5a695bqm5Y2V5L2NIGBweGDvvIzpu5jorqTvvJrop6blj5HlhYPntKDlrr3luqZcbiAgICovXG4gIG56V2lkdGg/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIOWPmOabtOWbnuiwg1xuICAgKi9cbiAgY2hhbmdlPzogKGl0ZW06IE56QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50LCBvcmdEYXRhOiBTRlNjaGVtYUVudW0pID0+IHZvaWQ7XG59XG4iXX0=