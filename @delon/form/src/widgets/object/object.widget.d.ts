import { OnInit } from '@angular/core';
import { SFGridSchema } from '../../schema/ui';
import { ObjectLayoutWidget } from '../../widget';
import { SFObjectWidgetRenderType } from './schema';
import * as i0 from "@angular/core";
export declare class ObjectWidget extends ObjectLayoutWidget implements OnInit {
    grid: SFGridSchema;
    type: SFObjectWidgetRenderType;
    list: Array<{}>;
    title: string;
    showExpand: boolean;
    expand: boolean;
    ngOnInit(): void;
    changeExpand(): void;
    static ɵfac: i0.ɵɵFactoryDef<ObjectWidget, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ObjectWidget, "sf-object", never, {}, {}, never, never>;
}
