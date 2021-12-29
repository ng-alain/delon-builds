import { OnInit } from '@angular/core';
import { ControlUIWidget } from '../../widget';
import { SFNumberWidgetSchema } from './schema';
export declare class NumberWidget extends ControlUIWidget<SFNumberWidgetSchema> implements OnInit {
    min: number;
    max: number;
    step: number;
    formatter: (value: number) => string | number;
    parser: (value: string) => string;
    ngOnInit(): void;
    _setValue(val: number): void;
}
