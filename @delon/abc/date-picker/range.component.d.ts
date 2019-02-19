import { EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { DatePickerConfig, DateRangePickerShortcutItem } from './date-picker.config';
export declare class RangePickerComponent implements ControlValueAccessor {
    private onChangeFn;
    private onTouchedFn;
    private _shortcut;
    private _cog;
    private comp;
    value: Date[];
    ngModelEnd: Date;
    shortcut: any;
    readonly ngModelEndChange: EventEmitter<Date>;
    nzAllowClear: boolean;
    nzAutoFocus: boolean;
    nzClassName: string;
    nzDisabled: boolean;
    nzSize: string;
    nzStyle: string;
    nzDisabledDate: (d: Date) => boolean;
    nzLocale: object;
    nzPopupStyle: object;
    nzDropdownClassName: string;
    nzPlaceHolder: string | string[];
    readonly nzOnOpenChange: EventEmitter<boolean>;
    nzDateRender: any;
    nzFormat: any;
    nzDisabledTime: any;
    nzRenderExtraFooter: any;
    nzShowTime: any;
    nzShowToday: boolean;
    nzMode: any;
    nzRanges: any;
    readonly nzOnPanelChange: EventEmitter<any>;
    readonly nzOnOk: EventEmitter<any>;
    constructor(cog: DatePickerConfig);
    _nzOnOpenChange(e: any): void;
    _nzOnPanelChange(e: any): void;
    _nzOnOk(e: any): void;
    valueChange(e: [Date, Date]): void;
    writeValue(value: Date): void;
    registerOnChange(fn: (val: Date) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(disabled: boolean): void;
    clickShortcut(item: DateRangePickerShortcutItem): void;
}
