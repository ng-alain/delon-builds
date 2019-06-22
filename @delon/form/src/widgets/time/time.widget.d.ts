import { OnInit } from '@angular/core';
import { SFValue } from '../../interface';
import { ControlWidget } from '../../widget';
export declare class TimeWidget extends ControlWidget implements OnInit {
    displayValue: Date | null;
    format: string;
    i: any;
    ngOnInit(): void;
    reset(value: SFValue): void;
    _change(value: Date | null): void;
}
