/**
 * @fileoverview added by tsickle
 * Generated from: src/interface.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function SFFormValueChange() { }
if (false) {
    /** @type {?} */
    SFFormValueChange.prototype.path;
    /** @type {?} */
    SFFormValueChange.prototype.pathValue;
    /** @type {?} */
    SFFormValueChange.prototype.value;
}
/**
 * @record
 */
export function SFValueChange() { }
if (false) {
    /**
     * Always return complete data
     * @type {?}
     */
    SFValueChange.prototype.value;
    /**
     * Current triggered path
     * @type {?}
     */
    SFValueChange.prototype.path;
    /**
     * Current path value
     * @type {?}
     */
    SFValueChange.prototype.pathValue;
}
/**
 * @record
 */
export function SFUpdateValueAndValidity() { }
if (false) {
    /**
     * 是否包含上级字段，默认：`false`
     * @type {?|undefined}
     */
    SFUpdateValueAndValidity.prototype.onlySelf;
    /**
     * 是否触发值变更通知，默认：`true`
     * @type {?|undefined}
     */
    SFUpdateValueAndValidity.prototype.emitValueEvent;
    /**
     * 是否触发校验，默认：`true`
     * @type {?|undefined}
     */
    SFUpdateValueAndValidity.prototype.emitValidator;
    /**
     * 当前更新路径
     * @type {?|undefined}
     */
    SFUpdateValueAndValidity.prototype.updatePath;
    /**
     * 当前更新路径对应值
     * @type {?|undefined}
     */
    SFUpdateValueAndValidity.prototype.updateValue;
}
/**
 * @record
 */
export function SFButton() { }
if (false) {
    /**
     * 提交按钮文本，默认：`提交`
     * @type {?|undefined}
     */
    SFButton.prototype.submit;
    /**
     * 提交按钮类型，默认：`primary`
     * @type {?|undefined}
     */
    SFButton.prototype.submit_type;
    /**
     * 提交按钮图标
     * @type {?|undefined}
     */
    SFButton.prototype.submit_icon;
    /**
     * 重置按钮文本，`null `或 `undefined` 表示不需要该按钮，默认：`重置`
     * @type {?|undefined}
     */
    SFButton.prototype.reset;
    /**
     * 重置按钮类型，默认：`default`
     * @type {?|undefined}
     */
    SFButton.prototype.reset_type;
    /**
     * 重置按钮图标
     * @type {?|undefined}
     */
    SFButton.prototype.reset_icon;
    /**
     * 按钮样式，主要用于指定按钮 `grid`、`class` 属性
     * @type {?|undefined}
     */
    SFButton.prototype.render;
    /**
     * 搜索按钮文本，默认：`搜索`
     * @type {?|undefined}
     */
    SFButton.prototype.search;
    /**
     * 编辑按钮文本，默认：`保存`
     * @type {?|undefined}
     */
    SFButton.prototype.edit;
}
/**
 * @record
 */
export function SFButtonIcon() { }
if (false) {
    /**
     * 等同 `nz-icon` 的 `nzType` 值
     * @type {?|undefined}
     */
    SFButtonIcon.prototype.type;
    /**
     * 图标主题风格，默认：`outline`
     * @type {?|undefined}
     */
    SFButtonIcon.prototype.theme;
    /**
     * 仅适用双色图标，设置双色图标的主要颜色，仅对当前 icon 生效
     * @type {?|undefined}
     */
    SFButtonIcon.prototype.twoToneColor;
    /**
     * 指定来自 IconFont 的图标类型
     * @type {?|undefined}
     */
    SFButtonIcon.prototype.iconfont;
}
/**
 * @record
 */
export function SFRenderButton() { }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3ZzdHMvd29yay8xL3MvcGFja2FnZXMvZm9ybS8iLCJzb3VyY2VzIjpbInNyYy9pbnRlcmZhY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFNQSx1Q0FJQzs7O0lBSEMsaUNBQW9COztJQUNwQixzQ0FBbUI7O0lBQ25CLGtDQUFlOzs7OztBQUdqQixtQ0FhQzs7Ozs7O0lBVEMsOEJBQWU7Ozs7O0lBSWYsNkJBQW9COzs7OztJQUlwQixrQ0FBbUI7Ozs7O0FBR3JCLDhDQXFCQzs7Ozs7O0lBakJDLDRDQUFtQjs7Ozs7SUFJbkIsa0RBQXlCOzs7OztJQUl6QixpREFBd0I7Ozs7O0lBSXhCLDhDQUFvQjs7Ozs7SUFJcEIsK0NBQTZCOzs7OztBQUcvQiw4QkFtQkM7Ozs7OztJQWpCQywwQkFBZ0I7Ozs7O0lBRWhCLCtCQUFxQjs7Ozs7SUFFckIsK0JBQTJCOzs7OztJQUUzQix5QkFBZTs7Ozs7SUFFZiw4QkFBb0I7Ozs7O0lBRXBCLDhCQUEwQjs7Ozs7SUFFMUIsMEJBQXdCOzs7OztJQUV4QiwwQkFBZ0I7Ozs7O0lBRWhCLHdCQUFjOzs7OztBQUdoQixrQ0FTQzs7Ozs7O0lBUEMsNEJBQWM7Ozs7O0lBRWQsNkJBQXVDOzs7OztJQUV2QyxvQ0FBc0I7Ozs7O0lBRXRCLGdDQUFrQjs7Ozs7QUFHcEIsb0NBQW1GIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU0ZIb3Jpem9udGFsTGF5b3V0U2NoZW1hLCBTRlJlbmRlclNjaGVtYSB9IGZyb20gJy4vc2NoZW1hL3VpJztcblxuZXhwb3J0IHR5cGUgU0ZWYWx1ZSA9IGFueTtcblxuZXhwb3J0IHR5cGUgU0ZMYXlvdXQgPSAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnIHwgJ2lubGluZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU0ZGb3JtVmFsdWVDaGFuZ2Uge1xuICBwYXRoOiBzdHJpbmcgfCBudWxsO1xuICBwYXRoVmFsdWU6IFNGVmFsdWU7XG4gIHZhbHVlOiBTRlZhbHVlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNGVmFsdWVDaGFuZ2Uge1xuICAvKipcbiAgICogQWx3YXlzIHJldHVybiBjb21wbGV0ZSBkYXRhXG4gICAqL1xuICB2YWx1ZTogU0ZWYWx1ZTtcbiAgLyoqXG4gICAqIEN1cnJlbnQgdHJpZ2dlcmVkIHBhdGhcbiAgICovXG4gIHBhdGg6IHN0cmluZyB8IG51bGw7XG4gIC8qKlxuICAgKiBDdXJyZW50IHBhdGggdmFsdWVcbiAgICovXG4gIHBhdGhWYWx1ZTogU0ZWYWx1ZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTRlVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkge1xuICAvKipcbiAgICog5piv5ZCm5YyF5ZCr5LiK57qn5a2X5q6177yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgb25seVNlbGY/OiBib29sZWFuO1xuICAvKipcbiAgICog5piv5ZCm6Kem5Y+R5YC85Y+Y5pu06YCa55+l77yM6buY6K6k77yaYHRydWVgXG4gICAqL1xuICBlbWl0VmFsdWVFdmVudD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDmmK/lkKbop6blj5HmoKHpqozvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICovXG4gIGVtaXRWYWxpZGF0b3I/OiBib29sZWFuO1xuICAvKipcbiAgICog5b2T5YmN5pu05paw6Lev5b6EXG4gICAqL1xuICB1cGRhdGVQYXRoPzogc3RyaW5nO1xuICAvKipcbiAgICog5b2T5YmN5pu05paw6Lev5b6E5a+55bqU5YC8XG4gICAqL1xuICB1cGRhdGVWYWx1ZT86IFNGVmFsdWUgfCBudWxsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNGQnV0dG9uIHtcbiAgLyoqIOaPkOS6pOaMiemSruaWh+acrO+8jOm7mOiupO+8mmDmj5DkuqRgICovXG4gIHN1Ym1pdD86IHN0cmluZztcbiAgLyoqIOaPkOS6pOaMiemSruexu+Wei++8jOm7mOiupO+8mmBwcmltYXJ5YCAqL1xuICBzdWJtaXRfdHlwZT86IHN0cmluZztcbiAgLyoqIOaPkOS6pOaMiemSruWbvuaghyAqL1xuICBzdWJtaXRfaWNvbj86IFNGQnV0dG9uSWNvbjtcbiAgLyoqIOmHjee9ruaMiemSruaWh+acrO+8jGBudWxsIGDmiJYgYHVuZGVmaW5lZGAg6KGo56S65LiN6ZyA6KaB6K+l5oyJ6ZKu77yM6buY6K6k77yaYOmHjee9rmAgKi9cbiAgcmVzZXQ/OiBzdHJpbmc7XG4gIC8qKiDph43nva7mjInpkq7nsbvlnovvvIzpu5jorqTvvJpgZGVmYXVsdGAgKi9cbiAgcmVzZXRfdHlwZT86IHN0cmluZztcbiAgLyoqIOmHjee9ruaMiemSruWbvuaghyAqL1xuICByZXNldF9pY29uPzogU0ZCdXR0b25JY29uO1xuICAvKiog5oyJ6ZKu5qC35byP77yM5Li76KaB55So5LqO5oyH5a6a5oyJ6ZKuIGBncmlkYOOAgWBjbGFzc2Ag5bGe5oCnICovXG4gIHJlbmRlcj86IFNGUmVuZGVyQnV0dG9uO1xuICAvKiog5pCc57Si5oyJ6ZKu5paH5pys77yM6buY6K6k77yaYOaQnOe0omAgKi9cbiAgc2VhcmNoPzogc3RyaW5nO1xuICAvKiog57yW6L6R5oyJ6ZKu5paH5pys77yM6buY6K6k77yaYOS/neWtmGAgKi9cbiAgZWRpdD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTRkJ1dHRvbkljb24ge1xuICAvKiog562J5ZCMIGBuei1pY29uYCDnmoQgYG56VHlwZWAg5YC8ICovXG4gIHR5cGU/OiBzdHJpbmc7XG4gIC8qKiDlm77moIfkuLvpopjpo47moLzvvIzpu5jorqTvvJpgb3V0bGluZWAgKi9cbiAgdGhlbWU/OiAnb3V0bGluZScgfCAndHdvdG9uZScgfCAnZmlsbCc7XG4gIC8qKiDku4XpgILnlKjlj4zoibLlm77moIfvvIzorr7nva7lj4zoibLlm77moIfnmoTkuLvopoHpopzoibLvvIzku4Xlr7nlvZPliY0gaWNvbiDnlJ/mlYggKi9cbiAgdHdvVG9uZUNvbG9yPzogc3RyaW5nO1xuICAvKiog5oyH5a6a5p2l6IeqIEljb25Gb250IOeahOWbvuagh+exu+WeiyAqL1xuICBpY29uZm9udD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTRlJlbmRlckJ1dHRvbiBleHRlbmRzIFNGSG9yaXpvbnRhbExheW91dFNjaGVtYSwgU0ZSZW5kZXJTY2hlbWEge31cbiJdfQ==