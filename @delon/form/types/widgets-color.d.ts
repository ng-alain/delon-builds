import * as i3 from '@delon/form';
import { SFUISchemaItem, ControlUIWidget, WidgetRegistry, SFWidgetProvideConfig } from '@delon/form';
import * as i4 from 'ng-zorro-antd/color-picker';
import { NzColorPickerFormatType, NzColor, NzColorPickerTriggerType } from 'ng-zorro-antd/color-picker';
import * as i0 from '@angular/core';
import { TemplateRef } from '@angular/core';
import * as i1 from '@angular/forms';
import * as i2 from '@angular/common';

interface SFColorWidgetSchema extends SFUISchemaItem {
    /**
     * Format of color
     */
    format?: NzColorPickerFormatType | null;
    /**
     * Default value of color
     */
    defaultValue?: string | NzColor | null;
    /**
     * ColorPicker trigger mode
     */
    trigger?: NzColorPickerTriggerType | null;
    /**
     * Setting the title of the color picker
     */
    title?: TemplateRef<void> | string;
    /**
     * Triggers for customizing color panels.
     */
    flipFlop?: TemplateRef<void> | string | null;
    /**
     * Show color text
     */
    showText?: boolean;
    /**
     * Allow clearing color selected
     */
    allowClear?: boolean;
    /**
     * Callback when value is changed
     */
    change?: (ev: {
        color: NzColor;
        format: string;
    }) => void;
    /**
     * Callback when `format` is changed
     */
    formatChange?: (color: NzColorPickerFormatType) => void;
    /**
     * Color Block
     */
    block?: boolean;
}

declare class ColorWidget extends ControlUIWidget<SFColorWidgetSchema> {
    static readonly KEY = "color";
    _change(ev: {
        color: NzColor;
        format: string;
    }): void;
    _formatChange(ev: NzColorPickerFormatType): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ColorWidget, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ColorWidget, "sf-color", never, {}, {}, never, never, true, never>;
}

declare class ColorWidgetModule {
    constructor(widgetRegistry: WidgetRegistry);
    static ɵfac: i0.ɵɵFactoryDeclaration<ColorWidgetModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ColorWidgetModule, never, [typeof i1.FormsModule, typeof i2.CommonModule, typeof i3.DelonFormModule, typeof i4.NzColorPickerModule, typeof ColorWidget], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ColorWidgetModule>;
}

declare function withColorWidget(): SFWidgetProvideConfig;

export { ColorWidget, ColorWidgetModule, withColorWidget };
export type { SFColorWidgetSchema };
