import { OnInit } from '@angular/core';
import { SFValue } from '../../interface';
import { SFSchemaEnum } from '../../schema';
import { ControlWidget } from '../../widget';
export declare class SelectWidget extends ControlWidget implements OnInit {
    i: any;
    data: SFSchemaEnum[];
    _value: any;
    hasGroup: boolean;
    ngOnInit(): void;
    reset(value: SFValue): void;
    change(values: SFValue): void;
    openChange(value: boolean): void;
    searchChange(text: string): void;
    scrollToBottom(): void;
}
