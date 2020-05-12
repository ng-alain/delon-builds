import { AfterViewInit } from '@angular/core';
import { NzAutocompleteOptionComponent } from 'ng-zorro-antd/auto-complete';
import { Observable } from 'rxjs';
import { SFValue } from '../../interface';
import { SFSchemaEnum } from '../../schema';
import { ControlUIWidget } from '../../widget';
import { SFAutoCompleteWidgetSchema } from './schema';
export declare class AutoCompleteWidget extends ControlUIWidget<SFAutoCompleteWidgetSchema> implements AfterViewInit {
    i: any;
    list: Observable<SFSchemaEnum[]>;
    typing: string;
    private ngModel;
    private filterOption;
    private isAsync;
    private fixData;
    updateValue(item: NzAutocompleteOptionComponent): void;
    ngAfterViewInit(): void;
    reset(value: SFValue): void;
    private filterData;
    private addEmailSuffix;
}
