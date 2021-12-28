import { OnInit } from '@angular/core';
import { NzMarks, NzSliderValue } from 'ng-zorro-antd/slider';
import { ControlUIWidget } from '../../widget';
import { SFSliderWidgetSchema } from './schema';
import * as i0 from "@angular/core";
export declare class SliderWidget extends ControlUIWidget<SFSliderWidgetSchema> implements OnInit {
    min: number;
    max: number;
    step: number;
    marks: NzMarks | null;
    included: boolean;
    ngOnInit(): void;
    _formatter: (value: number) => string;
    _afterChange(value: NzSliderValue): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SliderWidget, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SliderWidget, "sf-slider", never, {}, {}, never, never>;
}
