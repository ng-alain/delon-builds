import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TransferCanMove, TransferChange, TransferItem, TransferSearchChange, TransferSelectChange } from 'ng-zorro-antd/transfer';
import { SFValue } from '../../interface';
import { SFSchemaEnum } from '../../schema';
import { ControlUIWidget } from '../../widget';
import { SFTransferWidgetSchema } from './schema';
import * as i0 from "@angular/core";
export declare class TransferWidget extends ControlUIWidget<SFTransferWidgetSchema> implements OnInit {
    list: SFSchemaEnum[];
    i: {
        titles: string[];
        operations: string[];
        itemUnit: string;
        itemsUnit: string;
    };
    private _data;
    ngOnInit(): void;
    reset(value: SFValue): void;
    private notify;
    _canMove: (arg: TransferCanMove) => Observable<TransferItem[]>;
    _change(options: TransferChange): void;
    _searchChange(options: TransferSearchChange): void;
    _selectChange(options: TransferSelectChange): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TransferWidget, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TransferWidget, "sf-transfer", never, {}, {}, never, never, false>;
}
