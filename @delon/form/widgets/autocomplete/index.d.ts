import { WidgetRegistry } from '@delon/form';
import * as i0 from "@angular/core";
import * as i1 from "./widget";
import * as i2 from "@angular/forms";
import * as i3 from "@delon/form";
import * as i4 from "@angular/common";
import * as i5 from "ng-zorro-antd/input";
import * as i6 from "ng-zorro-antd/auto-complete";
export * from './widget';
export * from './schema';
export declare class AutoCompleteWidgetModule {
    constructor(widgetRegistry: WidgetRegistry);
    static ɵfac: i0.ɵɵFactoryDeclaration<AutoCompleteWidgetModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<AutoCompleteWidgetModule, [typeof i1.AutoCompleteWidget], [typeof i2.FormsModule, typeof i3.DelonFormModule, typeof i4.CommonModule, typeof i5.NzInputModule, typeof i6.NzAutocompleteModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<AutoCompleteWidgetModule>;
}
