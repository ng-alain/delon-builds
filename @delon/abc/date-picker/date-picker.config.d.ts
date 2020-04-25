import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { DisabledTimeFn, PanelMode, PresetRanges, SupportTimeOptions } from 'ng-zorro-antd/date-picker/standard-types';
import { NzDatePickerI18nInterface } from 'ng-zorro-antd/i18n';
/**
 * @deprecated `DateRangePickerConfig` is going to be removed in 10.0.0, Please use `AlainDateRangePickerConfig` instead
 */
export declare class DateRangePickerConfig {
    nzFormat?: string;
    nzClassName?: string;
    nzSize?: string;
    nzStyle?: string;
    nzAllowClear?: boolean;
    nzAutoFocus?: boolean;
    nzDisabled?: boolean;
    nzDisabledDate?: (d: Date) => boolean;
    nzDisabledTime?: DisabledTimeFn;
    nzLocale?: NzDatePickerI18nInterface;
    nzPopupStyle?: object;
    nzDropdownClassName?: string;
    nzRenderExtraFooter?: string;
    nzPlaceHolder?: string | string[];
    nzShowTime?: SupportTimeOptions | boolean;
    nzShowToday?: boolean;
    nzMode?: PanelMode | PanelMode[];
    nzRanges?: PresetRanges;
    shortcuts?: DateRangePickerShortcut;
}
/**
 * @deprecated `DateRangePickerShortcut` is going to be removed in 10.0.0, Please use `AlainDateRangePickerShortcut` instead
 */
export interface DateRangePickerShortcut {
    /** Whether to enable, default: `false` */
    enabled?: boolean;
    /** Whether to close the panel after clicking, default: `true` */
    closed?: boolean;
    /**
     * Shortcut list, default: `今天`, `昨天`, `近3天`, `近7天`, `本周`, `本月`, `全年`
     */
    list?: DateRangePickerShortcutItem[];
}
/**
 * @deprecated `DateRangePickerShortcutItem` is going to be removed in 10.0.0, Please use `AlainDateRangePickerShortcutItem` instead
 */
export interface DateRangePickerShortcutItem {
    [key: string]: NzSafeAny;
    text: string;
    fn: (value: [Date, Date]) => [Date, Date];
}
/**
 * @deprecated `DatePickerConfig` is going to be removed in 10.0.0. Please refer to https://ng-alain.com/docs/global-config
 */
export declare class DatePickerConfig {
    constructor();
    range?: DateRangePickerConfig;
}
