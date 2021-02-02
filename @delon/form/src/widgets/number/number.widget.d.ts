import { OnInit } from '@angular/core';
import { ControlUIWidget } from '../../widget';
import { SFNumberWidgetSchema } from './schema';
import * as i0 from "@angular/core";
export declare class NumberWidget extends ControlUIWidget<SFNumberWidgetSchema> implements OnInit {
    min: number;
    max: number;
    step: number;
    formatter: (value: number) => string | number;
    parser: (value: string) => string | number;
    ngOnInit(): void;
    _setValue(val: number): void;
    static ɵfac: i0.ɵɵFactoryDef<NumberWidget, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NumberWidget, "sf-number", never, {}, {}, never, never>;
}
