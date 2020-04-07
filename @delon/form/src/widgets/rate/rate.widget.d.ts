import { OnInit } from '@angular/core';
import { ControlUIWidget } from '../../widget';
import { SFRateWidgetSchema } from './schema';
export declare class RateWidget extends ControlUIWidget<SFRateWidgetSchema> implements OnInit {
    count: number;
    allowHalf: boolean;
    allowClear: boolean;
    autoFocus: boolean;
    hasText: boolean;
    readonly text: string;
    ngOnInit(): void;
}
