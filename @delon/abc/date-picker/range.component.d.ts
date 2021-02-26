import { EventEmitter, TemplateRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { AlainConfigService, AlainDateRangePickerShortcut, AlainDateRangePickerShortcutItem } from '@delon/util/config';
import { FunctionProp } from 'ng-zorro-antd/core/types';
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
