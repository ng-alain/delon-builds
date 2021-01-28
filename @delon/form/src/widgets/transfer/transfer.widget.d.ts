import { OnInit } from '@angular/core';
import { TransferCanMove, TransferChange, TransferItem, TransferSearchChange, TransferSelectChange } from 'ng-zorro-antd/transfer';
import { Observable } from 'rxjs';
import { SFValue } from '../../interface';
import { SFSchemaEnum } from '../../schema';
import { ControlUIWidget } from '../../widget';
import { SFTransferWidgetSchema } from './schema';
export declare class TransferWidget extends ControlUIWidget<SFTransferWidgetSchema> implements OnInit {
    list: SFSchemaEnum[];
    i: any;
    private _data;
    ngOnInit(): void;
    reset(value: SFValue): void;
    private notify;
    _canMove: (arg: TransferCanMove) => Observable<TransferItem[]>;
    _change(options: TransferChange): void;
    _searchChange(options: TransferSearchChange): void;
    _selectChange(options: TransferSelectChange): void;
}
