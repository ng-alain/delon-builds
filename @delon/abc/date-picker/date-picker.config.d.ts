import { NzSafeAny } from 'ng-zorro-antd/core/types/any';
import { DisabledTimeFn, PanelMode, PresetRanges, SupportTimeOptions } from 'ng-zorro-antd/date-picker/standard-types';
import { NzDatePickerI18nInterface } from 'ng-zorro-antd/i18n';
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
export interface DateRangePickerShortcutItem {
    [key: string]: NzSafeAny;
    text: string;
    fn: (value: [Date, Date]) => [Date, Date];
}
export declare class DatePickerConfig {
    range?: DateRangePickerConfig;
}
