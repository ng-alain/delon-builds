import { WidgetRegistry } from '@delon/form';
import * as i0 from "@angular/core";
import * as i1 from "./widget";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/common";
import * as i4 from "@delon/form";
import * as i5 from "ng-zorro-antd/upload";
import * as i6 from "ng-zorro-antd/icon";
import * as i7 from "ng-zorro-antd/button";
export * from './widget';
export * from './schema';
export declare class UploadWidgetModule {
    constructor(widgetRegistry: WidgetRegistry);
    static ɵfac: i0.ɵɵFactoryDeclaration<UploadWidgetModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<UploadWidgetModule, [typeof i1.UploadWidget], [typeof i2.FormsModule, typeof i3.CommonModule, typeof i4.DelonFormModule, typeof i5.NzUploadModule, typeof i6.NzIconModule, typeof i7.NzButtonModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<UploadWidgetModule>;
}
