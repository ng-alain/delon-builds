import { OnInit } from '@angular/core';
import { ObjectLayoutWidget } from '../../widget';
import { SFObjectWidgetRenderType } from './schema';
export declare class ObjectWidget extends ObjectLayoutWidget implements OnInit {
    grid: any;
    type: SFObjectWidgetRenderType;
    list: any[];
    title: string;
    showExpand: boolean;
    expand: boolean;
    ngOnInit(): void;
    changeExpand(): void;
}
