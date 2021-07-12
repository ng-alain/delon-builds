import { EventEmitter, TemplateRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { FunctionProp, NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzDatePickerSizeType } from 'ng-zorro-antd/date-picker';
import { NzDatePickerI18nInterface } from 'ng-zorro-antd/i18n';
import { AlainConfigService, AlainDateRangePickerShortcut, AlainDateRangePickerShortcutItem } from '@delon/util/config';
/**
 * @deprecated Will be removed in 12.0.0, Pls used `nz-range-picker` and `[extend]` directive instead, for examples:
 * ```html
 * <range-picker [(ngModel)]="i.start" [(ngModelEnd)]="i.end"></range-picker>
 * ```
 * Changed to =>
 * ```html
 * <nz-range-picker [(ngModel)]="i.start" extend [(ngModelEnd)]="i.end"></nz-range-picker>
 * ```
 */
export declare class RangePickerComponent implements ControlValueAccessor {
    private dom;
    static ngAcceptInputType_shortcut: AlainDateRangePickerShortcut | string | null;
    private onChangeFn;
    private _shortcut;
    private defaultShortcuts;
    private comp;
    value: Array<Date | null>;
    ngModelEnd: Date;
    set shortcut(val: AlainDateRangePickerShortcut | null);
    get shortcut(): AlainDateRangePickerShortcut | null;
    readonly ngModelEndChange: EventEmitter<Date>;
    nzAllowClear: boolean;
    nzAutoFocus: boolean;
    nzClassName: string;
    nzDisabled: boolean;
    nzSize: NzDatePickerSizeType;
    nzStyle: {
        [klass: string]: any;
    };
    nzDisabledDate: (d: Date) => boolean;
    nzLocale: NzDatePickerI18nInterface;
    nzPopupStyle: NzSafeAny;
    nzDropdownClassName: string;
    nzPlaceHolder: string | string[];
    readonly nzOnOpenChange: EventEmitter<boolean>;
    nzDateRender: any;
    nzFormat: any;
    nzDisabledTime: any;
    nzRenderExtraFooter: FunctionProp<TemplateRef<void> | string>;
    nzShowTime: any;
    nzShowToday: boolean;
    nzMode: any;
    nzRanges: any;
    readonly nzOnPanelChange: EventEmitter<any>;
    readonly nzOnOk: EventEmitter<any>;
    constructor(dom: DomSanitizer, configSrv: AlainConfigService);
    _nzOnOpenChange(e: any): void;
    _nzOnPanelChange(e: any): void;
    _nzOnOk(e: any): void;
    valueChange(e: [Date, Date]): void;
    writeValue(value: Date): void;
    registerOnChange(fn: (val: Date) => void): void;
    registerOnTouched(_fn: () => void): void;
    setDisabledState(disabled: boolean): void;
    clickShortcut(item: AlainDateRangePickerShortcutItem): void;
}
