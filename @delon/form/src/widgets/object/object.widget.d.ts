import { OnInit } from '@angular/core';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import type { SFObjectWidgetRenderType } from './schema';
import { ObjectLayoutWidget } from '../../widget';
import * as i0 from "@angular/core";
export declare class ObjectWidget extends ObjectLayoutWidget implements OnInit {
    grid: NzSafeAny;
    type: SFObjectWidgetRenderType;
    list: NzSafeAny[];
    title?: string;
    showExpand: boolean;
    expand: boolean;
    ngOnInit(): void;
    changeExpand(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ObjectWidget, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ObjectWidget, "sf-object", never, {}, {}, never, never, false, never>;
}
