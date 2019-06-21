import { OnInit } from '@angular/core';
import { SFValue } from '../../interface';
import { SFSchemaEnum } from '../../schema';
import { ControlWidget } from '../../widget';
export declare class MentionWidget extends ControlWidget implements OnInit {
    private mentionChild;
    data: SFSchemaEnum[];
    i: any;
    loading: boolean;
    ngOnInit(): void;
    reset(_value: SFValue): void;
    _select(options: any): void;
    _search(option: any): void;
}
