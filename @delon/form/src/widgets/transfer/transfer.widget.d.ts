import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ControlWidget } from '../../widget';
export declare class TransferWidget extends ControlWidget implements OnInit {
    list: any[];
    i: any;
    private _data;
    ngOnInit(): void;
    reset(value: any): void;
    private notify;
    _canMove: (arg: any) => Observable<any[]>;
    _change(options: any): void;
    _searchChange(options: any): void;
    _selectChange(options: any): void;
}
