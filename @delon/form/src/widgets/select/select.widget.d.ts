import { OnInit } from '@angular/core';
import { SFValue } from '../../interface';
import { SFSchemaEnum } from '../../schema';
import { ControlUIWidget } from '../../widget';
import { SFSelectWidgetSchema } from './schema';
export declare class SelectWidget extends ControlUIWidget<SFSelectWidgetSchema> implements OnInit {
    i: any;
    data: SFSchemaEnum[];
    _value: any;
    hasGroup: boolean;
    private checkGroup;
    ngOnInit(): void;
    reset(value: SFValue): void;
    change(values: SFValue): void;
    openChange(status: boolean): void;
    searchChange(text: string): void;
    scrollToBottom(): void;
}
