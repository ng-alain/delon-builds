import { OnInit } from '@angular/core';
import { SFValue } from '../../interface';
import { ControlUIWidget } from '../../widget';
import { SFTimeWidgetSchema } from './schema';
import * as i0 from "@angular/core";
export declare class TimeWidget extends ControlUIWidget<SFTimeWidgetSchema> implements OnInit {
    private valueFormat;
    displayValue: Date | null;
    i: any;
    ngOnInit(): void;
    reset(value: SFValue): void;
    _change(value: Date | null): void;
    _openChange(status: boolean): void;
    static ɵfac: i0.ɵɵFactoryDef<TimeWidget, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<TimeWidget, "sf-time", never, {}, {}, never, never>;
}
