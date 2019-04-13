import { OnInit } from '@angular/core';
import { SFValue } from '../../interface';
import { ControlWidget } from '../../widget';
export declare class TimeWidget extends ControlWidget implements OnInit {
    displayValue: Date;
    format: string;
    i: any;
    ngOnInit(): void;
    private compCd;
    reset(value: SFValue): void;
    _change(value: Date): void;
}
