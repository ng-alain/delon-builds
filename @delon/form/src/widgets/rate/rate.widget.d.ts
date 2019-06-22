import { OnInit } from '@angular/core';
import { ControlWidget } from '../../widget';
export declare class RateWidget extends ControlWidget implements OnInit {
    count: number;
    allowHalf: boolean;
    allowClear: boolean;
    autoFocus: boolean;
    hasText: boolean;
    readonly text: string;
    ngOnInit(): void;
}
