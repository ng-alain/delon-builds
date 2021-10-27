import { OnInit } from '@angular/core';
import { SFValue } from '../../interface';
import { ControlUIWidget } from '../../widget';
import { SFTextWidgetSchema } from './schema';
export declare class TextWidget extends ControlUIWidget<SFTextWidgetSchema> implements OnInit {
    text: string;
    ngOnInit(): void;
    reset(value: SFValue): void;
}
