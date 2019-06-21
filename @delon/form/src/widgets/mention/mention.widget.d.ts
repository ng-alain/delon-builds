import { OnInit } from '@angular/core';
import { MentionOnSearchTypes } from 'ng-zorro-antd/mention';
import { SFValue } from '../../interface';
import { SFSchemaEnum } from '../../schema';
import { ControlUIWidget } from '../../widget';
import { SFMentionWidgetSchema } from './schema';
export declare class MentionWidget extends ControlUIWidget<SFMentionWidgetSchema> implements OnInit {
    private mentionChild;
    data: SFSchemaEnum[];
    i: any;
    loading: boolean;
    ngOnInit(): void;
    reset(_value: SFValue): void;
    _select(options: any): void;
    _search(option: MentionOnSearchTypes): void;
}
