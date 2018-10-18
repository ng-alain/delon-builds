import { ControlWidget } from '../../widget';
import { SFSchemaEnum } from '../../schema';
export declare class CheckboxWidget extends ControlWidget {
    data: SFSchemaEnum[];
    allChecked: boolean;
    indeterminate: boolean;
    grid_span: number;
    title: string;
    readonly l: any;
    reset(value: any): void;
    _setValue(value: any): void;
    notifySet(): void;
    groupInGridChange(values: any[]): void;
    onAllChecked(e: Event): void;
    updateAllChecked(): this;
    private notifyChange;
}
