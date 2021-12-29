import { SFValue } from '../../interface';
import { SFSchemaEnum } from '../../schema/index';
import { ControlUIWidget } from '../../widget';
import { SFRadioWidgetSchema } from './schema';
import * as i0 from "@angular/core";
export declare class RadioWidget extends ControlUIWidget<SFRadioWidgetSchema> {
    data: SFSchemaEnum[];
    styleType: boolean;
    reset(value: SFValue): void;
    _setValue(value: SFValue): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RadioWidget, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RadioWidget, "sf-radio", never, {}, {}, never, never>;
}
