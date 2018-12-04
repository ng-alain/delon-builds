import { ControlWidget } from '../../widget';
import { SFSchemaEnum } from '../../schema';
export declare class TagWidget extends ControlWidget {
    data: SFSchemaEnum[];
    reset(value: any): void;
    onChange(item: SFSchemaEnum): void;
    _afterClose(): void;
    _close(e: any): void;
    private updateValue;
}
