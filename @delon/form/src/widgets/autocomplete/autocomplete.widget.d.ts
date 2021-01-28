import { NzAutocompleteOptionComponent } from 'ng-zorro-antd/auto-complete';
import { Observable } from 'rxjs';
import { SFValue } from '../../interface';
import { SFSchemaEnum } from '../../schema';
import { ControlUIWidget } from '../../widget';
import { SFAutoCompleteWidgetSchema } from './schema';
import * as i0 from "@angular/core";
export declare class AutoCompleteWidget extends ControlUIWidget<SFAutoCompleteWidgetSchema> {
    i: any;
    list: Observable<SFSchemaEnum[]>;
    typing: string;
    private ngModel;
    private filterOption;
    private isAsync;
    private fixData;
    updateValue(item: NzAutocompleteOptionComponent): void;
    _setValue(item: SFSchemaEnum): void;
    afterViewInit(): void;
    reset(value: SFValue): void;
    private filterData;
    private addEmailSuffix;
    static ɵfac: i0.ɵɵFactoryDef<AutoCompleteWidget, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<AutoCompleteWidget, "sf-autocomplete", never, {}, {}, never, never>;
}
