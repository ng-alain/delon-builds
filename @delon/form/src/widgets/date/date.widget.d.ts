import { OnInit } from '@angular/core';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { SFValue } from '../../interface';
import { ControlUIWidget } from '../../widget';
import { SFDateWidgetSchema } from './schema';
import * as i0 from "@angular/core";
export declare class DateWidget extends ControlUIWidget<SFDateWidgetSchema> implements OnInit {
    private startFormat;
    private endFormat?;
    private flatRange;
    mode: string;
    displayValue: Date | Date[] | null;
    displayFormat: string;
    i: {
        allowClear: boolean;
        showToday: boolean;
    };
    ngOnInit(): void;
    reset(value: SFValue): void;
    _change(value: Date | Date[] | null, emitModelChange?: boolean): void;
    _openChange(status: boolean): void;
    _ok(value: NzSafeAny): void;
    private get endProperty();
    private setEnd;
    static ɵfac: i0.ɵɵFactoryDeclaration<DateWidget, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DateWidget, "sf-date", never, {}, {}, never, never, false>;
}
