import { OnInit } from '@angular/core';
import { ControlWidget } from '../../widget';
export declare class SliderWidget extends ControlWidget implements OnInit {
    min: number;
    max: number;
    step: number;
    marks: any;
    included: boolean;
    ngOnInit(): void;
    _formatter: (value: any) => any;
    _afterChange(value: any): void;
}
