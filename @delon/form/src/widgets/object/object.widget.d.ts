import { OnInit } from '@angular/core';
import { SFGridSchema } from '../../schema/ui';
import { ObjectLayoutWidget } from '../../widget';
import { SFObjectWidgetRenderType } from './schema';
export declare class ObjectWidget extends ObjectLayoutWidget implements OnInit {
    grid: SFGridSchema;
    type: SFObjectWidgetRenderType;
    list: Array<{}>;
    title: string;
    showExpand: boolean;
    expand: boolean;
    ngOnInit(): void;
    changeExpand(): void;
}
