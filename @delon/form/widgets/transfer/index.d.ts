import { WidgetRegistry } from '@delon/form';
import * as i0 from "@angular/core";
import * as i1 from "./widget";
import * as i2 from "@angular/forms";
import * as i3 from "@delon/form";
import * as i4 from "ng-zorro-antd/transfer";
export * from './widget';
export * from './schema';
export declare class TransferWidgetModule {
    constructor(widgetRegistry: WidgetRegistry);
    static ɵfac: i0.ɵɵFactoryDeclaration<TransferWidgetModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<TransferWidgetModule, [typeof i1.TransferWidget], [typeof i2.FormsModule, typeof i3.DelonFormModule, typeof i4.NzTransferModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<TransferWidgetModule>;
}
