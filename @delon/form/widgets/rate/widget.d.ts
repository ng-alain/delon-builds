import { OnInit } from '@angular/core';
import { ControlUIWidget } from '@delon/form';
import type { SFRateWidgetSchema } from './schema';
import * as i0 from "@angular/core";
export declare class RateWidget extends ControlUIWidget<SFRateWidgetSchema> implements OnInit {
    static readonly KEY = "rate";
    count: number;
    allowHalf: boolean;
    allowClear: boolean;
    autoFocus: boolean;
    hasText: boolean;
    get text(): string;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RateWidget, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RateWidget, "sf-rate", never, {}, {}, never, never, false, never>;
}
