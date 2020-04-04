import { OnInit } from '@angular/core';
import { NzMarks, NzSliderValue } from 'ng-zorro-antd/slider';
import { ControlUIWidget } from '../../widget';
import { SFSliderWidgetSchema } from './schema';
export declare class SliderWidget extends ControlUIWidget<SFSliderWidgetSchema> implements OnInit {
    min: number;
    max: number;
    step: number;
    marks: NzMarks | null;
    included: boolean;
    ngOnInit(): void;
    _formatter: (value: number) => string | number;
    _afterChange(value: NzSliderValue): void;
}
