import { OnInit } from '@angular/core';
import { NzCascaderOption } from 'ng-zorro-antd/cascader';
import { SFValue } from '../../interface';
import { SFSchemaEnum } from '../../schema';
import { ControlUIWidget } from '../../widget';
import { SFCascaderWidgetSchema } from './schema';
import * as i0 from "@angular/core";
export declare class CascaderWidget extends ControlUIWidget<SFCascaderWidgetSchema> implements OnInit {
    clearText: string;
    showArrow: boolean;
    showInput: boolean;
    triggerAction: string[];
    data: SFSchemaEnum[];
    loadData: (node: NzCascaderOption, index: number) => PromiseLike<any>;
    ngOnInit(): void;
    reset(value: SFValue): void;
    _visibleChange(status: boolean): void;
    _change(value: any[] | null): void;
    _selectionChange(options: NzCascaderOption[]): void;
    _clear(): void;
    static ɵfac: i0.ɵɵFactoryDef<CascaderWidget, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CascaderWidget, "sf-cascader", never, {}, {}, never, never>;
}
