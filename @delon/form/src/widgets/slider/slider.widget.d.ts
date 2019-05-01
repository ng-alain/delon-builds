import { OnInit } from '@angular/core';
import { Marks, SliderValue } from 'ng-zorro-antd';
import { ControlWidget } from '../../widget';
export declare class SliderWidget extends ControlWidget implements OnInit {
    min: number;
    max: number;
    step: number;
    marks: Marks;
    included: boolean;
    ngOnInit(): void;
    _formatter: (value: number) => any;
    _afterChange(value: SliderValue): void;
}
