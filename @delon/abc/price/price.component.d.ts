import { ControlValueAccessor } from '@angular/forms';
import { BooleanInput } from '@delon/util/decorator';
import type { NzSizeLDSType, OnChangeType, OnTouchedType } from 'ng-zorro-antd/core/types';
export declare class PriceComponent implements ControlValueAccessor {
    static ngAcceptInputType_disabled: BooleanInput;
    static ngAcceptInputType_autoFocus: BooleanInput;
    onChange: OnChangeType;
    onTouched: OnTouchedType;
    value: number | null;
    nzId: string | null;
    size: NzSizeLDSType;
    min: number;
    max: number;
    placeHolder: string;
    step: number;
    disabled: boolean;
    autoFocus: boolean;
    handlValue(val: number): void;
    writeValue(value: number): void;
    registerOnChange(fn: OnChangeType): void;
    registerOnTouched(fn: OnTouchedType): void;
}
