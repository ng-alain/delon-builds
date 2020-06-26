/**
 * @fileoverview added by tsickle
 * Generated from: src/interface.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvaW50ZXJmYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBTUEsOEJBbUJDOzs7Ozs7SUFqQkMsMEJBQWdCOzs7OztJQUVoQiwrQkFBcUI7Ozs7O0lBRXJCLCtCQUEyQjs7Ozs7SUFFM0IseUJBQWU7Ozs7O0lBRWYsOEJBQW9COzs7OztJQUVwQiw4QkFBMEI7Ozs7O0lBRTFCLDBCQUF3Qjs7Ozs7SUFFeEIsMEJBQWdCOzs7OztJQUVoQix3QkFBYzs7Ozs7QUFHaEIsa0NBU0M7Ozs7OztJQVBDLDRCQUFjOzs7OztJQUVkLDZCQUF1Qzs7Ozs7SUFFdkMsb0NBQXNCOzs7OztJQUV0QixnQ0FBa0I7Ozs7O0FBR3BCLG9DQUFtRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNGSG9yaXpvbnRhbExheW91dFNjaGVtYSwgU0ZSZW5kZXJTY2hlbWEgfSBmcm9tICcuL3NjaGVtYS91aSc7XG5cbmV4cG9ydCB0eXBlIFNGVmFsdWUgPSBhbnk7XG5cbmV4cG9ydCB0eXBlIFNGTGF5b3V0ID0gJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJyB8ICdpbmxpbmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNGQnV0dG9uIHtcbiAgLyoqIOaPkOS6pOaMiemSruaWh+acrO+8jOm7mOiupO+8mmDmj5DkuqRgICovXG4gIHN1Ym1pdD86IHN0cmluZztcbiAgLyoqIOaPkOS6pOaMiemSruexu+Wei++8jOm7mOiupO+8mmBwcmltYXJ5YCAqL1xuICBzdWJtaXRfdHlwZT86IHN0cmluZztcbiAgLyoqIOaPkOS6pOaMiemSruWbvuaghyAqL1xuICBzdWJtaXRfaWNvbj86IFNGQnV0dG9uSWNvbjtcbiAgLyoqIOmHjee9ruaMiemSruaWh+acrO+8jGBudWxsIGDmiJYgYHVuZGVmaW5lZGAg6KGo56S65LiN6ZyA6KaB6K+l5oyJ6ZKu77yM6buY6K6k77yaYOmHjee9rmAgKi9cbiAgcmVzZXQ/OiBzdHJpbmc7XG4gIC8qKiDph43nva7mjInpkq7nsbvlnovvvIzpu5jorqTvvJpgZGVmYXVsdGAgKi9cbiAgcmVzZXRfdHlwZT86IHN0cmluZztcbiAgLyoqIOmHjee9ruaMiemSruWbvuaghyAqL1xuICByZXNldF9pY29uPzogU0ZCdXR0b25JY29uO1xuICAvKiog5oyJ6ZKu5qC35byP77yM5Li76KaB55So5LqO5oyH5a6a5oyJ6ZKuIGBncmlkYOOAgWBjbGFzc2Ag5bGe5oCnICovXG4gIHJlbmRlcj86IFNGUmVuZGVyQnV0dG9uO1xuICAvKiog5pCc57Si5oyJ6ZKu5paH5pys77yM6buY6K6k77yaYOaQnOe0omAgKi9cbiAgc2VhcmNoPzogc3RyaW5nO1xuICAvKiog57yW6L6R5oyJ6ZKu5paH5pys77yM6buY6K6k77yaYOS/neWtmGAgKi9cbiAgZWRpdD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTRkJ1dHRvbkljb24ge1xuICAvKiog562J5ZCMIGBuei1pY29uYCDnmoQgYG56VHlwZWAg5YC8ICovXG4gIHR5cGU/OiBzdHJpbmc7XG4gIC8qKiDlm77moIfkuLvpopjpo47moLzvvIzpu5jorqTvvJpgb3V0bGluZWAgKi9cbiAgdGhlbWU/OiAnb3V0bGluZScgfCAndHdvdG9uZScgfCAnZmlsbCc7XG4gIC8qKiDku4XpgILnlKjlj4zoibLlm77moIfvvIzorr7nva7lj4zoibLlm77moIfnmoTkuLvopoHpopzoibLvvIzku4Xlr7nlvZPliY0gaWNvbiDnlJ/mlYggKi9cbiAgdHdvVG9uZUNvbG9yPzogc3RyaW5nO1xuICAvKiog5oyH5a6a5p2l6IeqIEljb25Gb250IOeahOWbvuagh+exu+WeiyAqL1xuICBpY29uZm9udD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTRlJlbmRlckJ1dHRvbiBleHRlbmRzIFNGSG9yaXpvbnRhbExheW91dFNjaGVtYSwgU0ZSZW5kZXJTY2hlbWEge31cbiJdfQ==