import { OnInit } from '@angular/core';
import { NzMentionComponent } from 'ng-zorro-antd';
import { SFValue } from '../../interface';
import { SFSchemaEnum } from '../../schema';
import { ControlWidget } from '../../widget';
export declare class MentionWidget extends ControlWidget implements OnInit {
    mentionChild: NzMentionComponent;
    data: SFSchemaEnum[];
    i: any;
    loading: boolean;
    ngOnInit(): void;
    reset(value: SFValue): void;
    _select(options: any): void;
    _search(option: any): void;
}
