import { OnInit } from '@angular/core';
import { ControlWidget } from '../../widget';
export declare class NumberWidget extends ControlWidget implements OnInit {
    min: number;
    max: number;
    step: number;
    formatter: (value: any) => any;
    parser: (value: any) => any;
    ngOnInit(): void;
    _setValue(val: number): void;
}
