import { OnInit } from '@angular/core';
import { SFValue } from '../../interface';
import { ControlUIWidget } from '../../widget';
import { SFStringWidgetSchema } from './schema';
export declare class StringWidget extends ControlUIWidget<SFStringWidgetSchema> implements OnInit {
    type: string;
    ngOnInit(): void;
    reset(value: SFValue): void;
}
