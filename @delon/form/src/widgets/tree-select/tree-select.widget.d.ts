import { OnInit } from '@angular/core';
import { NzFormatEmitEvent } from 'ng-zorro-antd/core';
import { SFValue } from '../../interface';
import { SFSchemaEnum } from '../../schema';
import { ControlUIWidget } from '../../widget';
import { SFTreeSelectWidgetSchema } from './schema';
export declare class TreeSelectWidget extends ControlUIWidget<SFTreeSelectWidgetSchema> implements OnInit {
    i: any;
    data: SFSchemaEnum[];
    ngOnInit(): void;
    reset(value: SFValue): void;
    change(value: string[] | string): void;
    expandChange(e: NzFormatEmitEvent): void;
}
