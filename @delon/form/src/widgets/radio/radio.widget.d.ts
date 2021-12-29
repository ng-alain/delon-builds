import { SFValue } from '../../interface';
import { SFSchemaEnum } from '../../schema/index';
import { ControlUIWidget } from '../../widget';
import { SFRadioWidgetSchema } from './schema';
export declare class RadioWidget extends ControlUIWidget<SFRadioWidgetSchema> {
    data: SFSchemaEnum[];
    styleType: boolean;
    reset(value: SFValue): void;
    _setValue(value: SFValue): void;
}
