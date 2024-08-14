import { OnInit } from '@angular/core';
import { ControlUIWidget, SFSchemaEnum, SFValue } from '@delon/form';
import { NzFormatEmitEvent } from 'ng-zorro-antd/core/tree';
import type { SFTreeSelectWidgetSchema } from './schema';
import * as i0 from "@angular/core";
export declare class TreeSelectWidget extends ControlUIWidget<SFTreeSelectWidgetSchema> implements OnInit {
    static readonly KEY = "tree-select";
    i: SFTreeSelectWidgetSchema;
    data: SFSchemaEnum[];
    asyncData: boolean;
    ngOnInit(): void;
    reset(value: SFValue): void;
    change(value: string[] | string): void;
    expandChange(e: NzFormatEmitEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeSelectWidget, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TreeSelectWidget, "sf-tree-select", never, {}, {}, never, never, true, never>;
}
