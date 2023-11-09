import { WidgetRegistry } from '@delon/form';
import * as i0 from "@angular/core";
import * as i1 from "./widget";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/common";
import * as i4 from "@delon/form";
import * as i5 from "ng-zorro-antd/color-picker";
export * from './widget';
export * from './schema';
export declare class ColorWidgetModule {
    constructor(widgetRegistry: WidgetRegistry);
    static ɵfac: i0.ɵɵFactoryDeclaration<ColorWidgetModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ColorWidgetModule, [typeof i1.ColorWidget], [typeof i2.FormsModule, typeof i3.CommonModule, typeof i4.DelonFormModule, typeof i5.NzColorPickerModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ColorWidgetModule>;
}
