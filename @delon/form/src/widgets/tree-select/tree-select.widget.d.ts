import { OnInit } from '@angular/core';
import { NzFormatEmitEvent } from 'ng-zorro-antd/core/tree';
import { SFValue } from '../../interface';
import { SFSchemaEnum } from '../../schema';
import { ControlUIWidget } from '../../widget';
import { SFTreeSelectWidgetSchema } from './schema';
import * as i0 from "@angular/core";
export declare class TreeSelectWidget extends ControlUIWidget<SFTreeSelectWidgetSchema> implements OnInit {
    i: SFTreeSelectWidgetSchema;
    data: SFSchemaEnum[];
    asyncData: boolean;
    ngOnInit(): void;
    reset(value: SFValue): void;
    change(value: string[] | string): void;
    expandChange(e: NzFormatEmitEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeSelectWidget, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TreeSelectWidget, "sf-tree-select", never, {}, {}, never, never, false>;
}
