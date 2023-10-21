import { ControlUIWidget } from '@delon/form';
import type { NzColor, NzColorPickerFormatType } from 'ng-zorro-antd/color-picker';
import type { SFColorWidgetSchema } from './schema';
import * as i0 from "@angular/core";
export declare class ColorWidget extends ControlUIWidget<SFColorWidgetSchema> {
    static readonly KEY = "color";
    _change(ev: {
        color: NzColor;
        format: string;
    }): void;
    _formatChange(ev: NzColorPickerFormatType): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ColorWidget, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ColorWidget, "sf-color", never, {}, {}, never, never, false, never>;
}
