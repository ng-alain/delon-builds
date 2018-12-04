import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SFValue } from '../../interface';
import { SFSchemaEnum } from '../../schema';
import { ControlWidget } from '../../widget';
export declare const EMAILSUFFIX: string[];
export declare class AutoCompleteWidget extends ControlWidget implements OnInit {
    i: any;
    fixData: SFSchemaEnum[];
    list: Observable<SFSchemaEnum[]>;
    private filterOption;
    private isAsync;
    ngOnInit(): void;
    reset(value: SFValue): void;
    private filterData;
    private addEmailSuffix;
}
