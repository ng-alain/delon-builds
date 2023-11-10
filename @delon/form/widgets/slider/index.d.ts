import { WidgetRegistry } from '@delon/form';
import * as i0 from "@angular/core";
import * as i1 from "./widget";
import * as i2 from "@angular/forms";
import * as i3 from "@delon/form";
import * as i4 from "ng-zorro-antd/slider";
export * from './widget';
export * from './schema';
export declare class SliderWidgetModule {
    constructor(widgetRegistry: WidgetRegistry);
    static ɵfac: i0.ɵɵFactoryDeclaration<SliderWidgetModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<SliderWidgetModule, [typeof i1.SliderWidget], [typeof i2.FormsModule, typeof i3.DelonFormModule, typeof i4.NzSliderModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<SliderWidgetModule>;
}
