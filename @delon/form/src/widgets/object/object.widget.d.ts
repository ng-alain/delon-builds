import { OnInit } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { ObjectLayoutWidget } from '../../widget';
import { SFObjectWidgetRenderType } from './schema';
export declare class ObjectWidget extends ObjectLayoutWidget implements OnInit {
    grid: NzSafeAny;
    type: SFObjectWidgetRenderType;
    list: NzSafeAny[];
    title: string;
    showExpand: boolean;
    expand: boolean;
    ngOnInit(): void;
    changeExpand(): void;
}
