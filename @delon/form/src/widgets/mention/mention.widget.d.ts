import { OnInit } from '@angular/core';
import { ControlWidget } from '../../widget';
import { SFSchemaEnum } from '../../schema';
import { NzMentionComponent } from 'ng-zorro-antd';
export declare class MentionWidget extends ControlWidget implements OnInit {
    mentionChild: NzMentionComponent;
    data: SFSchemaEnum[];
    i: any;
    loading: boolean;
    ngOnInit(): void;
    reset(value: any): void;
    _select(options: any): void;
    _search(option: any): void;
}
