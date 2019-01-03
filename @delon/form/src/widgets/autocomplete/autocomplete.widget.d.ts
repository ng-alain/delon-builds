import { AfterViewInit } from '@angular/core';
import { NzAutocompleteOptionComponent } from 'ng-zorro-antd';
import { Observable } from 'rxjs';
import { SFValue } from '../../interface';
import { SFSchemaEnum } from '../../schema';
import { ControlWidget } from '../../widget';
export declare const EMAILSUFFIX: string[];
export declare class AutoCompleteWidget extends ControlWidget implements AfterViewInit {
    i: any;
    fixData: SFSchemaEnum[];
    list: Observable<SFSchemaEnum[]>;
    typing: string;
    private ngModel;
    private filterOption;
    private isAsync;
    updateValue(item: NzAutocompleteOptionComponent): void;
    ngAfterViewInit(): void;
    reset(value: SFValue): void;
    private filterData;
    private addEmailSuffix;
}
