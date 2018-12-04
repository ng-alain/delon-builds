import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ControlWidget } from '../../widget';
import { SFSchemaEnum } from '../../schema';
export declare const EMAILSUFFIX: string[];
export declare class AutoCompleteWidget extends ControlWidget implements OnInit {
    i: any;
    fixData: SFSchemaEnum[];
    list: Observable<SFSchemaEnum[]>;
    private filterOption;
    private isAsync;
    ngOnInit(): void;
    reset(value: any): void;
    private filterData;
    private addEmailSuffix;
}
