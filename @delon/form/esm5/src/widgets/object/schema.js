/**
 * @fileoverview added by tsickle
 * Generated from: src/widgets/object/schema.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function SFObjectWidgetSchema() { }
if (false) {
    /**
     * 是否显示扩展，点击隐藏内容，默认：`true`
     * - 限 `type === 'card'`
     * @type {?|undefined}
     */
    SFObjectWidgetSchema.prototype.showExpand;
    /**
     * 展开状态，默认：`true`
     * - 限 `type === 'card'`
     * @type {?|undefined}
     */
    SFObjectWidgetSchema.prototype.expand;
    /**
     * 是否显示标题，默认：`false`
     * @type {?|undefined}
     */
    SFObjectWidgetSchema.prototype.showTitle;
    /**
     * 渲染类型
     * - `card` 使用 `nz-card` 渲染
     * - `default` 使用默认渲染
     * @type {?|undefined}
     */
    SFObjectWidgetSchema.prototype.type;
    /**
     * 等同 `nzSize` 属性，默认：`small`
     * @type {?|undefined}
     */
    SFObjectWidgetSchema.prototype.cardSize;
    /**
     * 等同 `nzBodyStyle` 属性
     * @type {?|undefined}
     */
    SFObjectWidgetSchema.prototype.cardBodyStyle;
    /**
     * 等同 `nzBordered` 属性，默认：`true`
     * @type {?|undefined}
     */
    SFObjectWidgetSchema.prototype.cardBordered;
    /**
     * 等同 `nzExtra` 属性
     * @type {?|undefined}
     */
    SFObjectWidgetSchema.prototype.cardExtra;
    /**
     * 等同 `nzActions` 属性
     * @type {?|undefined}
     */
    SFObjectWidgetSchema.prototype.cardActions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy9vYmplY3Qvc2NoZW1hLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBS0EsMENBeUNDOzs7Ozs7O0lBcENDLDBDQUFxQjs7Ozs7O0lBS3JCLHNDQUFpQjs7Ozs7SUFJakIseUNBQW9COzs7Ozs7O0lBTXBCLG9DQUFnQzs7Ozs7SUFJaEMsd0NBQStCOzs7OztJQUkvQiw2Q0FBMEM7Ozs7O0lBSTFDLDRDQUF1Qjs7Ozs7SUFJdkIseUNBQXVDOzs7OztJQUl2QywyQ0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU0ZVSVNjaGVtYUl0ZW0gfSBmcm9tICcuLi8uLi9zY2hlbWEvdWknO1xuXG5leHBvcnQgdHlwZSBTRk9iamVjdFdpZGdldFJlbmRlclR5cGUgPSAnY2FyZCcgfCAnZGVmYXVsdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU0ZPYmplY3RXaWRnZXRTY2hlbWEgZXh0ZW5kcyBTRlVJU2NoZW1hSXRlbSB7XG4gIC8qKlxuICAgKiDmmK/lkKbmmL7npLrmianlsZXvvIzngrnlh7vpmpDol4/lhoXlrrnvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICogLSDpmZAgYHR5cGUgPT09ICdjYXJkJ2BcbiAgICovXG4gIHNob3dFeHBhbmQ/OiBib29sZWFuO1xuICAvKipcbiAgICog5bGV5byA54q25oCB77yM6buY6K6k77yaYHRydWVgXG4gICAqIC0g6ZmQIGB0eXBlID09PSAnY2FyZCdgXG4gICAqL1xuICBleHBhbmQ/OiBib29sZWFuO1xuICAvKipcbiAgICog5piv5ZCm5pi+56S65qCH6aKY77yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgc2hvd1RpdGxlPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOa4suafk+exu+Wei1xuICAgKiAtIGBjYXJkYCDkvb/nlKggYG56LWNhcmRgIOa4suafk1xuICAgKiAtIGBkZWZhdWx0YCDkvb/nlKjpu5jorqTmuLLmn5NcbiAgICovXG4gIHR5cGU/OiBTRk9iamVjdFdpZGdldFJlbmRlclR5cGU7XG4gIC8qKlxuICAgKiDnrYnlkIwgYG56U2l6ZWAg5bGe5oCn77yM6buY6K6k77yaYHNtYWxsYFxuICAgKi9cbiAgY2FyZFNpemU/OiAnZGVmYXVsdCcgfCAnc21hbGwnO1xuICAvKipcbiAgICog562J5ZCMIGBuekJvZHlTdHlsZWAg5bGe5oCnXG4gICAqL1xuICBjYXJkQm9keVN0eWxlPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgLyoqXG4gICAqIOetieWQjCBgbnpCb3JkZXJlZGAg5bGe5oCn77yM6buY6K6k77yaYHRydWVgXG4gICAqL1xuICBjYXJkQm9yZGVyZWQ/OiBib29sZWFuO1xuICAvKipcbiAgICog562J5ZCMIGBuekV4dHJhYCDlsZ7mgKdcbiAgICovXG4gIGNhcmRFeHRyYT86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICAvKipcbiAgICog562J5ZCMIGBuekFjdGlvbnNgIOWxnuaAp1xuICAgKi9cbiAgY2FyZEFjdGlvbnM/OiBBcnJheTxUZW1wbGF0ZVJlZjx2b2lkPj47XG59XG4iXX0=