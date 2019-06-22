import { SFValue } from '../../interface';
import { SFSchemaEnum } from '../../schema';
import { ControlUIWidget } from '../../widget';
import { SFTagWidgetSchema } from './schema';
export declare class TagWidget extends ControlUIWidget<SFTagWidgetSchema> {
    data: SFSchemaEnum[];
    reset(value: SFValue): void;
    onChange(item: SFSchemaEnum): void;
    _afterClose(): void;
    _close(e: MouseEvent): void;
    private updateValue;
}
