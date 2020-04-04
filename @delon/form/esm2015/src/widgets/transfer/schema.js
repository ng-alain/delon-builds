/**
 * @fileoverview added by tsickle
 * Generated from: src/widgets/transfer/schema.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function SFTransferWidgetSchema() { }
if (false) {
    /**
     * 异步数据源
     * @type {?|undefined}
     */
    SFTransferWidgetSchema.prototype.asyncData;
    /**
     * 标题集合，顺序从左至右，默认：`['', '']`
     * @type {?|undefined}
     */
    SFTransferWidgetSchema.prototype.titles;
    /**
     * 操作文案集合，顺序从下至上，默认：`['', '']`
     * @type {?|undefined}
     */
    SFTransferWidgetSchema.prototype.operations;
    /**
     * 两个穿梭框的自定义样式，以`ngStyle`写法标题
     * @type {?|undefined}
     */
    SFTransferWidgetSchema.prototype.listStyle;
    /**
     * 单数单位
     * @type {?|undefined}
     */
    SFTransferWidgetSchema.prototype.itemUnit;
    /**
     * 复数单位
     * @type {?|undefined}
     */
    SFTransferWidgetSchema.prototype.itemsUnit;
    /**
     * 是否显示搜索框，默认：`false`
     * @type {?|undefined}
     */
    SFTransferWidgetSchema.prototype.showSearch;
    /**
     * 接收 `inputValueoption` 两个参数，当 `option` 符合筛选条件时，应返回 `true`，反之则返回 `false`
     * @type {?|undefined}
     */
    SFTransferWidgetSchema.prototype.filterOption;
    /**
     * 搜索框的默认值
     * @type {?|undefined}
     */
    SFTransferWidgetSchema.prototype.searchPlaceholder;
    /**
     * 当列表为空时显示的内容
     * @type {?|undefined}
     */
    SFTransferWidgetSchema.prototype.notFoundContent;
    /**
     * 穿梭时二次校验
     * @type {?|undefined}
     */
    SFTransferWidgetSchema.prototype.canMove;
    /**
     * 选项在两栏之间转移时的回调函数
     * @type {?|undefined}
     */
    SFTransferWidgetSchema.prototype.change;
    /**
     * 搜索框内容时改变时的回调函数
     * @type {?|undefined}
     */
    SFTransferWidgetSchema.prototype.searchChange;
    /**
     * 选中项发生改变时的回调函数
     * @type {?|undefined}
     */
    SFTransferWidgetSchema.prototype.selectChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy90cmFuc2Zlci9zY2hlbWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFLQSw0Q0FzRUM7Ozs7OztJQWxFQywyQ0FBaUQ7Ozs7O0lBS2pELHdDQUFrQjs7Ozs7SUFLbEIsNENBQXNCOzs7OztJQUt0QiwyQ0FBbUI7Ozs7O0lBS25CLDBDQUFrQjs7Ozs7SUFLbEIsMkNBQW1COzs7OztJQUtuQiw0Q0FBcUI7Ozs7O0lBS3JCLDhDQUFtRTs7Ozs7SUFLbkUsbURBQTJCOzs7OztJQUszQixpREFBeUI7Ozs7O0lBS3pCLHlDQUErRDs7Ozs7SUFLL0Qsd0NBQTJDOzs7OztJQUszQyw4Q0FBdUQ7Ozs7O0lBS3ZELDhDQUF1RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRyYW5zZmVyQ2FuTW92ZSwgVHJhbnNmZXJDaGFuZ2UsIFRyYW5zZmVySXRlbSwgVHJhbnNmZXJTZWFyY2hDaGFuZ2UsIFRyYW5zZmVyU2VsZWN0Q2hhbmdlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90cmFuc2Zlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTRlNjaGVtYUVudW1UeXBlIH0gZnJvbSAnLi4vLi4vc2NoZW1hJztcbmltcG9ydCB7IFNGVUlTY2hlbWFJdGVtIH0gZnJvbSAnLi4vLi4vc2NoZW1hL3VpJztcblxuZXhwb3J0IGludGVyZmFjZSBTRlRyYW5zZmVyV2lkZ2V0U2NoZW1hIGV4dGVuZHMgU0ZVSVNjaGVtYUl0ZW0ge1xuICAvKipcbiAgICog5byC5q2l5pWw5o2u5rqQXG4gICAqL1xuICBhc3luY0RhdGE/OiAoKSA9PiBPYnNlcnZhYmxlPFNGU2NoZW1hRW51bVR5cGVbXT47XG5cbiAgLyoqXG4gICAqIOagh+mimOmbhuWQiO+8jOmhuuW6j+S7juW3puiHs+WPs++8jOm7mOiupO+8mmBbJycsICcnXWBcbiAgICovXG4gIHRpdGxlcz86IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiDmk43kvZzmlofmoYjpm4blkIjvvIzpobrluo/ku47kuIvoh7PkuIrvvIzpu5jorqTvvJpgWycnLCAnJ11gXG4gICAqL1xuICBvcGVyYXRpb25zPzogc3RyaW5nW107XG5cbiAgLyoqXG4gICAqIOS4pOS4quepv+aireahhueahOiHquWumuS5ieagt+W8j++8jOS7pWBuZ1N0eWxlYOWGmeazleagh+mimFxuICAgKi9cbiAgbGlzdFN0eWxlPzogb2JqZWN0O1xuXG4gIC8qKlxuICAgKiDljZXmlbDljZXkvY1cbiAgICovXG4gIGl0ZW1Vbml0Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiDlpI3mlbDljZXkvY1cbiAgICovXG4gIGl0ZW1zVW5pdD86IHN0cmluZztcblxuICAvKipcbiAgICog5piv5ZCm5pi+56S65pCc57Si5qGG77yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgc2hvd1NlYXJjaD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOaOpeaUtiBgaW5wdXRWYWx1ZW9wdGlvbmAg5Lik5Liq5Y+C5pWw77yM5b2TIGBvcHRpb25gIOespuWQiOetm+mAieadoeS7tuaXtu+8jOW6lOi/lOWbniBgdHJ1ZWDvvIzlj43kuYvliJnov5Tlm54gYGZhbHNlYFxuICAgKi9cbiAgZmlsdGVyT3B0aW9uPzogKGlucHV0VmFsdWU6IHN0cmluZywgaXRlbTogVHJhbnNmZXJJdGVtKSA9PiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDmkJzntKLmoYbnmoTpu5jorqTlgLxcbiAgICovXG4gIHNlYXJjaFBsYWNlaG9sZGVyPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiDlvZPliJfooajkuLrnqbrml7bmmL7npLrnmoTlhoXlrrlcbiAgICovXG4gIG5vdEZvdW5kQ29udGVudD86IHN0cmluZztcblxuICAvKipcbiAgICog56m/5qKt5pe25LqM5qyh5qCh6aqMXG4gICAqL1xuICBjYW5Nb3ZlPzogKGFyZzogVHJhbnNmZXJDYW5Nb3ZlKSA9PiBPYnNlcnZhYmxlPFRyYW5zZmVySXRlbVtdPjtcblxuICAvKipcbiAgICog6YCJ6aG55Zyo5Lik5qCP5LmL6Ze06L2s56e75pe255qE5Zue6LCD5Ye95pWwXG4gICAqL1xuICBjaGFuZ2U/OiAob3B0aW9uczogVHJhbnNmZXJDaGFuZ2UpID0+IHZvaWQ7XG5cbiAgLyoqXG4gICAqIOaQnOe0ouahhuWGheWuueaXtuaUueWPmOaXtueahOWbnuiwg+WHveaVsFxuICAgKi9cbiAgc2VhcmNoQ2hhbmdlPzogKG9wdGlvbnM6IFRyYW5zZmVyU2VhcmNoQ2hhbmdlKSA9PiB2b2lkO1xuXG4gIC8qKlxuICAgKiDpgInkuK3pobnlj5HnlJ/mlLnlj5jml7bnmoTlm57osIPlh73mlbBcbiAgICovXG4gIHNlbGVjdENoYW5nZT86IChvcHRpb25zOiBUcmFuc2ZlclNlbGVjdENoYW5nZSkgPT4gdm9pZDtcbn1cbiJdfQ==