import { OnInit } from '@angular/core';
import { ControlWidget } from '../../widget';
export declare class TimeWidget extends ControlWidget implements OnInit {
    displayValue: Date;
    format: string;
    i: any;
    ngOnInit(): void;
    reset(value: any): void;
    _change(value: Date): void;
}
