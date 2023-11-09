import { WidgetRegistry } from '@delon/form';
import * as i0 from "@angular/core";
import * as i1 from "./widget";
import * as i2 from "@angular/forms";
import * as i3 from "@delon/form";
import * as i4 from "ng-zorro-antd/time-picker";
export * from './widget';
export * from './schema';
export declare class TimeWidgetModule {
    constructor(widgetRegistry: WidgetRegistry);
    static ɵfac: i0.ɵɵFactoryDeclaration<TimeWidgetModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<TimeWidgetModule, [typeof i1.TimeWidget], [typeof i2.FormsModule, typeof i3.DelonFormModule, typeof i4.NzTimePickerModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<TimeWidgetModule>;
}
