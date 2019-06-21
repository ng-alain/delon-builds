import { SFValue } from '../../interface';
import { SFSchemaEnum } from '../../schema';
import { ControlWidget } from '../../widget';
export declare class CheckboxWidget extends ControlWidget {
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
}
