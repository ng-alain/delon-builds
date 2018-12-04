import { OnInit } from '@angular/core';
import { SFValue } from '../../interface';
import { SFSchemaEnum } from '../../schema';
import { ControlWidget } from '../../widget';
export declare class CascaderWidget extends ControlWidget implements OnInit {
    clearText: string;
    showArrow: boolean;
    showInput: boolean;
    triggerAction: string[];
    data: SFSchemaEnum[];
    loadData: any;
    ngOnInit(): void;
    reset(value: SFValue): void;
    _visibleChange(status: boolean): void;
    _change(value: string): void;
    _selectionChange(options: any): void;
    _select(options: any): void;
    _clear(options: any): void;
}
