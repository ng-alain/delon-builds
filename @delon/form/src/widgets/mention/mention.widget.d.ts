import { OnInit } from '@angular/core';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { MentionOnSearchTypes } from 'ng-zorro-antd/mention';
import { SFValue } from '../../interface';
import { SFSchemaEnum } from '../../schema';
import { ControlUIWidget } from '../../widget';
import { SFMentionWidgetSchema } from './schema';
export declare class MentionWidget extends ControlUIWidget<SFMentionWidgetSchema> implements OnInit {
    private mentionChild;
    data: SFSchemaEnum[];
    i: NzSafeAny;
    loading: boolean;
    ngOnInit(): void;
    reset(_value: SFValue): void;
    _select(options: NzSafeAny): void;
    _search(option: MentionOnSearchTypes): void;
}
