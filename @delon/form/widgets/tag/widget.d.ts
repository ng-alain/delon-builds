import { ControlUIWidget, SFSchemaEnum, SFValue } from '@delon/form';
import type { SFTagWidgetSchema } from './schema';
import * as i0 from "@angular/core";
export declare class TagWidget extends ControlUIWidget<SFTagWidgetSchema> {
    static readonly KEY = "tag";
    data: SFSchemaEnum[];
    reset(value: SFValue): void;
    onChange(item: SFSchemaEnum): void;
    _close(e: MouseEvent): void;
    private updateValue;
    static ɵfac: i0.ɵɵFactoryDeclaration<TagWidget, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TagWidget, "sf-tag", never, {}, {}, never, never, true, never>;
}
