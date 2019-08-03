import { OnInit } from '@angular/core';
import { SFValue } from '../../interface';
import { ControlUIWidget } from '../../widget';
import { SFDateWidgetSchema } from './schema';
export declare class DateWidget extends ControlUIWidget<SFDateWidgetSchema> implements OnInit {
    mode: string;
    displayValue: Date | Date[] | null;
    displayFormat: string;
    format: string;
    i: any;
    flatRange: boolean;
    ngOnInit(): void;
    private compCd;
    reset(value: SFValue): void;
    _change(value: Date | Date[] | null): void;
    _openChange(status: boolean): void;
    _ok(value: any): void;
    private readonly endProperty;
    private setEnd;
    private toDate;
}
