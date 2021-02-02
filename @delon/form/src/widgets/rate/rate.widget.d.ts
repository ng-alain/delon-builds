import { OnInit } from '@angular/core';
import { ControlUIWidget } from '../../widget';
import { SFRateWidgetSchema } from './schema';
import * as i0 from "@angular/core";
export declare class RateWidget extends ControlUIWidget<SFRateWidgetSchema> implements OnInit {
    count: number;
    allowHalf: boolean;
    allowClear: boolean;
    autoFocus: boolean;
    hasText: boolean;
    get text(): string;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<RateWidget, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<RateWidget, "sf-rate", never, {}, {}, never, never>;
}
