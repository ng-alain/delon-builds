import { OnInit } from '@angular/core';
import { NzFormatEmitEvent } from 'ng-zorro-antd';
import { SFValue } from '../../interface';
import { SFSchemaEnum } from '../../schema';
import { ControlWidget } from '../../widget';
export declare class TreeSelectWidget extends ControlWidget implements OnInit {
    i: any;
    data: SFSchemaEnum[];
    ngOnInit(): void;
    reset(value: SFValue): void;
    change(value: string[] | string): void;
    expandChange(e: NzFormatEmitEvent): void;
}
