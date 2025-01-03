import { OnInit } from '@angular/core';
import { SFNumberWidgetSchema } from './schema';
import { ControlUIWidget } from '../../widget';
import * as i0 from "@angular/core";
export declare class NumberWidget extends ControlUIWidget<SFNumberWidgetSchema> implements OnInit {
    min: number;
    max: number;
    step: number;
    formatter: (value: number) => string;
    parser: (value: string) => number;
    width: string;
    ngOnInit(): void;
    _setValue(val: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NumberWidget, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NumberWidget, "sf-number", never, {}, {}, never, never, false, never>;
}
