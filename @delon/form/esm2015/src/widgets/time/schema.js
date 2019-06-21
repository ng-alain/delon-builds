/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function SFTimeWidgetSchema() { }
if (false) {
    /** @type {?|undefined} */
    SFTimeWidgetSchema.prototype.size;
    /** @type {?|undefined} */
    SFTimeWidgetSchema.prototype.placeholder;
    /**
     * 数据格式化
     * @type {?|undefined}
     */
    SFTimeWidgetSchema.prototype.format;
    /**
     * 显示格式化，（等同 [nzFormat](https://ng.ant.design/components/time-picker/zh#api) 值），默认：`HH:mm:ss`
     * @type {?|undefined}
     */
    SFTimeWidgetSchema.prototype.displayFormat;
    /**
     * 是否UTC新纪元（表示从 `1970` 开始计毫秒数），当 `type='number'` 时有效，默认：`false`
     * @type {?|undefined}
     */
    SFTimeWidgetSchema.prototype.utcEpoch;
    /**
     * 是否显示清除按钮，默认：`true`
     * @type {?|undefined}
     */
    SFTimeWidgetSchema.prototype.allowEmpty;
    /**
     * 清除按钮的提示文案，默认：`清除`
     * @type {?|undefined}
     */
    SFTimeWidgetSchema.prototype.clearText;
    /**
     * 设置面板打开时默认选中的值，默认：`new Date()`
     * @type {?|undefined}
     */
    SFTimeWidgetSchema.prototype.defaultOpenValue;
    /**
     * 禁止选择部分小时选项
     * @type {?|undefined}
     */
    SFTimeWidgetSchema.prototype.disabledHours;
    /**
     * 禁止选择部分分钟选项
     * @type {?|undefined}
     */
    SFTimeWidgetSchema.prototype.disabledMinutes;
    /**
     * 禁止选择部分秒选项
     * @type {?|undefined}
     */
    SFTimeWidgetSchema.prototype.disabledSeconds;
    /**
     * 隐藏禁止选择的选项，默认：`false`
     * @type {?|undefined}
     */
    SFTimeWidgetSchema.prototype.hideDisabledOptions;
    /**
     * 小时选项间隔，默认：`1`
     * @type {?|undefined}
     */
    SFTimeWidgetSchema.prototype.hourStep;
    /**
     * 分钟选项间隔，默认：`1`
     * @type {?|undefined}
     */
    SFTimeWidgetSchema.prototype.minuteStep;
    /**
     * 秒选项间隔，默认：`1`
     * @type {?|undefined}
     */
    SFTimeWidgetSchema.prototype.secondStep;
    /**
     * 弹出层类名
     * @type {?|undefined}
     */
    SFTimeWidgetSchema.prototype.popupClassName;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy90aW1lL3NjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUEsd0NBMEVDOzs7SUF6RUMsa0NBQWlCOztJQUVqQix5Q0FBcUI7Ozs7O0lBS3JCLG9DQUFnQjs7Ozs7SUFLaEIsMkNBQXVCOzs7OztJQUt2QixzQ0FBbUI7Ozs7O0lBS25CLHdDQUFxQjs7Ozs7SUFLckIsdUNBQW1COzs7OztJQUtuQiw4Q0FBd0I7Ozs7O0lBS3hCLDJDQUErQjs7Ozs7SUFLL0IsNkNBQTZDOzs7OztJQUs3Qyw2Q0FBNkQ7Ozs7O0lBSzdELGlEQUE4Qjs7Ozs7SUFLOUIsc0NBQWtCOzs7OztJQUtsQix3Q0FBb0I7Ozs7O0lBS3BCLHdDQUFvQjs7Ozs7SUFLcEIsNENBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU0ZVSVNjaGVtYUl0ZW0sIFNGRExTU2l6ZSB9IGZyb20gJy4uLy4uL3NjaGVtYS91aSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU0ZUaW1lV2lkZ2V0U2NoZW1hIGV4dGVuZHMgU0ZVSVNjaGVtYUl0ZW0ge1xuICBzaXplPzogU0ZETFNTaXplO1xuXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiDmlbDmja7moLzlvI/ljJZcbiAgICovXG4gIGZvcm1hdD86IHN0cmluZztcblxuICAvKipcbiAgICog5pi+56S65qC85byP5YyW77yM77yI562J5ZCMIFtuekZvcm1hdF0oaHR0cHM6Ly9uZy5hbnQuZGVzaWduL2NvbXBvbmVudHMvdGltZS1waWNrZXIvemgjYXBpKSDlgLzvvInvvIzpu5jorqTvvJpgSEg6bW06c3NgXG4gICAqL1xuICBkaXNwbGF5Rm9ybWF0Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiDmmK/lkKZVVEPmlrDnuqrlhYPvvIjooajnpLrku44gYDE5NzBgIOW8gOWni+iuoeavq+enkuaVsO+8ie+8jOW9kyBgdHlwZT0nbnVtYmVyJ2Ag5pe25pyJ5pWI77yM6buY6K6k77yaYGZhbHNlYFxuICAgKi9cbiAgdXRjRXBvY2g/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDmmK/lkKbmmL7npLrmuIXpmaTmjInpkq7vvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICovXG4gIGFsbG93RW1wdHk/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDmuIXpmaTmjInpkq7nmoTmj5DnpLrmlofmoYjvvIzpu5jorqTvvJpg5riF6ZmkYFxuICAgKi9cbiAgY2xlYXJUZXh0Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiDorr7nva7pnaLmnb/miZPlvIDml7bpu5jorqTpgInkuK3nmoTlgLzvvIzpu5jorqTvvJpgbmV3IERhdGUoKWBcbiAgICovXG4gIGRlZmF1bHRPcGVuVmFsdWU/OiBEYXRlO1xuXG4gIC8qKlxuICAgKiDnpoHmraLpgInmi6npg6jliIblsI/ml7bpgInpoblcbiAgICovXG4gIGRpc2FibGVkSG91cnM/OiAoKSA9PiBudW1iZXJbXTtcblxuICAvKipcbiAgICog56aB5q2i6YCJ5oup6YOo5YiG5YiG6ZKf6YCJ6aG5XG4gICAqL1xuICBkaXNhYmxlZE1pbnV0ZXM/OiAoaG91cjogbnVtYmVyKSA9PiBudW1iZXJbXTtcblxuICAvKipcbiAgICog56aB5q2i6YCJ5oup6YOo5YiG56eS6YCJ6aG5XG4gICAqL1xuICBkaXNhYmxlZFNlY29uZHM/OiAoaG91cjogbnVtYmVyLCBtaW51dGU6IG51bWJlcikgPT4gbnVtYmVyW107XG5cbiAgLyoqXG4gICAqIOmakOiXj+emgeatoumAieaLqeeahOmAiemhue+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIGhpZGVEaXNhYmxlZE9wdGlvbnM/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDlsI/ml7bpgInpobnpl7TpmpTvvIzpu5jorqTvvJpgMWBcbiAgICovXG4gIGhvdXJTdGVwPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiDliIbpkp/pgInpobnpl7TpmpTvvIzpu5jorqTvvJpgMWBcbiAgICovXG4gIG1pbnV0ZVN0ZXA/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIOenkumAiemhuemXtOmalO+8jOm7mOiupO+8mmAxYFxuICAgKi9cbiAgc2Vjb25kU3RlcD86IG51bWJlcjtcblxuICAvKipcbiAgICog5by55Ye65bGC57G75ZCNXG4gICAqL1xuICBwb3B1cENsYXNzTmFtZT86IHN0cmluZztcbn1cbiJdfQ==