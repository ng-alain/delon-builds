import { WidgetRegistry } from '@delon/form';
import * as i0 from "@angular/core";
import * as i1 from "./widget";
import * as i2 from "@angular/forms";
import * as i3 from "@delon/form";
import * as i4 from "ng-zorro-antd/rate";
import * as i5 from "@angular/common";
export * from './widget';
export * from './schema';
export declare class RateWidgetModule {
    constructor(widgetRegistry: WidgetRegistry);
    static ɵfac: i0.ɵɵFactoryDeclaration<RateWidgetModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<RateWidgetModule, [typeof i1.RateWidget], [typeof i2.FormsModule, typeof i3.DelonFormModule, typeof i4.NzRateModule, typeof i5.CommonModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<RateWidgetModule>;
}