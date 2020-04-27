import { OnInit } from '@angular/core';
import { SFValue } from '../../interface';
import { ControlUIWidget } from '../../widget';
import { SFDateWidgetSchema } from './schema';
export declare class DateWidget extends ControlUIWidget<SFDateWidgetSchema> implements OnInit {
    private startFormat;
    private endFormat;
    private flatRange;
    mode: string;
    displayValue: Date | Date[] | null;
    displayFormat: string;
    i: any;
    ngOnInit(): void;
    reset(value: SFValue): void;
    _change(value: Date | Date[] | null): void;
    _openChange(status: boolean): void;
    _ok(value: any): void;
    private get endProperty();
    private setEnd;
}
