import { OnInit } from '@angular/core';
import { ControlWidget } from '../../widget';
import { SFSchemaEnum } from '../../schema';
import { NzFormatEmitEvent } from 'ng-zorro-antd';
export declare class TreeSelectWidget extends ControlWidget implements OnInit {
    i: any;
    data: SFSchemaEnum[];
    private dc;
    private tranData;
    ngOnInit(): void;
    reset(value: any): void;
    change(value: any): void;
    expandChange(e: NzFormatEmitEvent): void;
}
