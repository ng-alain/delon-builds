import { SFValue } from '../../interface';
import { SFSchemaEnum } from '../../schema';
import { ControlWidget } from '../../widget';
export declare class TagWidget extends ControlWidget {
    data: SFSchemaEnum[];
    reset(value: SFValue): void;
    onChange(item: SFSchemaEnum): void;
    _afterClose(): void;
    _close(e: MouseEvent): void;
    private updateValue;
}
