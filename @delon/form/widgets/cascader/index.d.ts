import { WidgetRegistry } from '@delon/form';
import * as i0 from "@angular/core";
import * as i1 from "./widget";
import * as i2 from "@angular/forms";
import * as i3 from "@delon/form";
import * as i4 from "ng-zorro-antd/cascader";
export * from './widget';
export * from './schema';
export declare class CascaderWidgetModule {
    constructor(widgetRegistry: WidgetRegistry);
    static ɵfac: i0.ɵɵFactoryDeclaration<CascaderWidgetModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<CascaderWidgetModule, [typeof i1.CascaderWidget], [typeof i2.FormsModule, typeof i3.DelonFormModule, typeof i4.NzCascaderModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<CascaderWidgetModule>;
}
