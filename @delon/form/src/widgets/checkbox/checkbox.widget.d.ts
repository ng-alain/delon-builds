import { SFValue } from '../../interface';
import { SFSchemaEnum } from '../../schema';
import { ControlUIWidget } from '../../widget';
import { SFCheckboxWidgetSchema } from './schema';
import * as i0 from "@angular/core";
export declare class CheckboxWidget extends ControlUIWidget<SFCheckboxWidgetSchema> {
    data: SFSchemaEnum[];
    allChecked: boolean;
    indeterminate: boolean;
    grid_span: number;
    labelTitle: string;
    inited: boolean;
    reset(value: SFValue): void;
    _setValue(value: SFValue): void;
    notifySet(): void;
    groupInGridChange(values: SFValue[]): void;
    onAllChecked(): void;
    updateAllChecked(): this;
    private notifyChange;
    static ɵfac: i0.ɵɵFactoryDef<CheckboxWidget, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CheckboxWidget, "sf-checkbox", never, {}, {}, never, never>;
}
