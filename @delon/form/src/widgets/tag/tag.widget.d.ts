import { SFValue } from '../../interface';
import { SFSchemaEnum } from '../../schema';
import { ControlUIWidget } from '../../widget';
import { SFTagWidgetSchema } from './schema';
import * as i0 from "@angular/core";
export declare class TagWidget extends ControlUIWidget<SFTagWidgetSchema> {
    data: SFSchemaEnum[];
    reset(value: SFValue): void;
    onChange(item: SFSchemaEnum): void;
    _close(e: MouseEvent): void;
    private updateValue;
    static ɵfac: i0.ɵɵFactoryDef<TagWidget, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<TagWidget, "sf-tag", never, {}, {}, never, never>;
}
