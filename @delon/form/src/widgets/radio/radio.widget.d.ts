import { SFValue } from '../../interface';
import { SFSchemaEnum } from '../../schema/index';
import { ControlWidget } from '../../widget';
export declare class RadioWidget extends ControlWidget {
    data: SFSchemaEnum[];
    styleType: boolean;
    reset(_value: SFValue): void;
    _setValue(value: SFValue): void;
}
