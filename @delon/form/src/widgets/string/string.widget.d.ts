import { OnInit } from '@angular/core';
import { SFValue } from '../../interface';
import { ControlWidget } from '../../widget';
export declare class StringWidget extends ControlWidget implements OnInit {
    type: string;
    ngOnInit(): void;
    reset(value: SFValue): void;
}
