/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function SFDateWidgetSchema() { }
if (false) {
    /**
     * 渲染模式，默认：`date`
     * @type {?|undefined}
     */
    SFDateWidgetSchema.prototype.mode;
    /** @type {?|undefined} */
    SFDateWidgetSchema.prototype.size;
    /** @type {?|undefined} */
    SFDateWidgetSchema.prototype.placeholder;
    /**
     * 数据格式化
     * @type {?|undefined}
     */
    SFDateWidgetSchema.prototype.format;
    /**
     * 显示格式化，（等同 [nzFormat](https://ng.ant.design/components/date-picker/zh#api) 值），默认：`yyyy-MM-dd HH:mm:ss`
     * @type {?|undefined}
     */
    SFDateWidgetSchema.prototype.displayFormat;
    /**
     * 日期范围所对应的结束值 `key`
     * @type {?|undefined}
     */
    SFDateWidgetSchema.prototype.end;
    /**
     * 是否显示清除按钮，默认：`true`
     * @type {?|undefined}
     */
    SFDateWidgetSchema.prototype.allowClear;
    /**
     * 选择器 className
     * @type {?|undefined}
     */
    SFDateWidgetSchema.prototype.className;
    /**
     * 国际化配置
     * @type {?|undefined}
     */
    SFDateWidgetSchema.prototype.locale;
    /**
     * 额外的弹出样式
     * @type {?|undefined}
     */
    SFDateWidgetSchema.prototype.popupStyle;
    /**
     * 额外的弹出 className
     * @type {?|undefined}
     */
    SFDateWidgetSchema.prototype.dropdownClassName;
    /**
     * 弹出日历和关闭日历的回调
     * @type {?|undefined}
     */
    SFDateWidgetSchema.prototype.onOpenChange;
    /**
     * 不可选择的日期
     * @type {?|undefined}
     */
    SFDateWidgetSchema.prototype.disabledDate;
    /**
     * 不可选择的时间
     * @type {?|undefined}
     */
    SFDateWidgetSchema.prototype.disabledTime;
    /**
     * 在面板中添加额外的页脚
     * @type {?|undefined}
     */
    SFDateWidgetSchema.prototype.renderExtraFooter;
    /**
     * 增加时间选择功能，`object` 类型为 [TimePickerOptions](https://ng.ant.design/components/time-picker/en#api)
     * @type {?|undefined}
     */
    SFDateWidgetSchema.prototype.showTime;
    /**
     * 是否展示“今天”按钮，默认：`true`
     * @type {?|undefined}
     */
    SFDateWidgetSchema.prototype.showToday;
    /**
     * 点击确定按钮的回调
     * @type {?|undefined}
     */
    SFDateWidgetSchema.prototype.onOk;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy9kYXRlL3NjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0Esd0NBb0ZDOzs7Ozs7SUFoRkMsa0NBQW9EOztJQUVwRCxrQ0FBaUI7O0lBRWpCLHlDQUFxQjs7Ozs7SUFLckIsb0NBQWdCOzs7OztJQUtoQiwyQ0FBdUI7Ozs7O0lBS3ZCLGlDQUFhOzs7OztJQUtiLHdDQUFxQjs7Ozs7SUFLckIsdUNBQW1COzs7OztJQUtuQixvQ0FBWTs7Ozs7SUFLWix3Q0FBZ0I7Ozs7O0lBS2hCLCtDQUEyQjs7Ozs7SUFLM0IsMENBQXlDOzs7OztJQUt6QywwQ0FBOEI7Ozs7O0lBSzlCLDBDQUE4Qjs7Ozs7SUFLOUIsK0NBQTJCOzs7OztJQUszQixzQ0FBNEI7Ozs7O0lBSzVCLHVDQUFvQjs7Ozs7SUFLcEIsa0NBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlzYWJsZWRUaW1lRm4sIERpc2FibGVkRGF0ZUZuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9kYXRlLXBpY2tlci9zdGFuZGFyZC10eXBlcyc7XG5pbXBvcnQgeyBTRlVJU2NoZW1hSXRlbSwgU0ZETFNTaXplIH0gZnJvbSAnLi4vLi4vc2NoZW1hL3VpJztcblxuZXhwb3J0IGludGVyZmFjZSBTRkRhdGVXaWRnZXRTY2hlbWEgZXh0ZW5kcyBTRlVJU2NoZW1hSXRlbSB7XG4gIC8qKlxuICAgKiDmuLLmn5PmqKHlvI/vvIzpu5jorqTvvJpgZGF0ZWBcbiAgICovXG4gIG1vZGU/OiAnZGF0ZScgfCAnd2VlaycgfCAnbW9udGgnIHwgJ3llYXInIHwgJ3JhbmdlJztcblxuICBzaXplPzogU0ZETFNTaXplO1xuXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiDmlbDmja7moLzlvI/ljJZcbiAgICovXG4gIGZvcm1hdD86IHN0cmluZztcblxuICAvKipcbiAgICog5pi+56S65qC85byP5YyW77yM77yI562J5ZCMIFtuekZvcm1hdF0oaHR0cHM6Ly9uZy5hbnQuZGVzaWduL2NvbXBvbmVudHMvZGF0ZS1waWNrZXIvemgjYXBpKSDlgLzvvInvvIzpu5jorqTvvJpgeXl5eS1NTS1kZCBISDptbTpzc2BcbiAgICovXG4gIGRpc3BsYXlGb3JtYXQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIOaXpeacn+iMg+WbtOaJgOWvueW6lOeahOe7k+adn+WAvCBga2V5YFxuICAgKi9cbiAgZW5kPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiDmmK/lkKbmmL7npLrmuIXpmaTmjInpkq7vvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICovXG4gIGFsbG93Q2xlYXI/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDpgInmi6nlmaggY2xhc3NOYW1lXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIOWbvemZheWMlumFjee9rlxuICAgKi9cbiAgbG9jYWxlPzoge307XG5cbiAgLyoqXG4gICAqIOmineWklueahOW8ueWHuuagt+W8j1xuICAgKi9cbiAgcG9wdXBTdHlsZT86IHt9O1xuXG4gIC8qKlxuICAgKiDpop3lpJbnmoTlvLnlh7ogY2xhc3NOYW1lXG4gICAqL1xuICBkcm9wZG93bkNsYXNzTmFtZT86IHN0cmluZztcblxuICAvKipcbiAgICog5by55Ye65pel5Y6G5ZKM5YWz6Zet5pel5Y6G55qE5Zue6LCDXG4gICAqL1xuICBvbk9wZW5DaGFuZ2U/OiAoc3RhdHVzOiBib29sZWFuKSA9PiB2b2lkO1xuXG4gIC8qKlxuICAgKiDkuI3lj6/pgInmi6nnmoTml6XmnJ9cbiAgICovXG4gIGRpc2FibGVkRGF0ZT86IERpc2FibGVkRGF0ZUZuO1xuXG4gIC8qKlxuICAgKiDkuI3lj6/pgInmi6nnmoTml7bpl7RcbiAgICovXG4gIGRpc2FibGVkVGltZT86IERpc2FibGVkVGltZUZuO1xuXG4gIC8qKlxuICAgKiDlnKjpnaLmnb/kuK3mt7vliqDpop3lpJbnmoTpobXohJpcbiAgICovXG4gIHJlbmRlckV4dHJhRm9vdGVyPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiDlop7liqDml7bpl7TpgInmi6nlip/og73vvIxgb2JqZWN0YCDnsbvlnovkuLogW1RpbWVQaWNrZXJPcHRpb25zXShodHRwczovL25nLmFudC5kZXNpZ24vY29tcG9uZW50cy90aW1lLXBpY2tlci9lbiNhcGkpXG4gICAqL1xuICBzaG93VGltZT86IG9iamVjdCB8IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOaYr+WQpuWxleekuuKAnOS7iuWkqeKAneaMiemSru+8jOm7mOiupO+8mmB0cnVlYFxuICAgKi9cbiAgc2hvd1RvZGF5PzogYm9vbGVhbjtcblxuICAvKipcbiAgICog54K55Ye756Gu5a6a5oyJ6ZKu55qE5Zue6LCDXG4gICAqL1xuICBvbk9rPzogKGRhdGE6IERhdGUgfCBEYXRlW10pID0+IHZvaWQ7XG59XG4iXX0=