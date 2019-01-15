import { SFValue } from '../../interface';
import { SFSchemaEnum } from '../../schema/index';
import { ControlWidget } from '../../widget';
export declare class RadioWidget extends ControlWidget {
    data: SFSchemaEnum[];
    styleType: boolean;
    reset(value: SFValue): void;
}
