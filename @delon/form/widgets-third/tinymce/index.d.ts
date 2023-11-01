import { WidgetRegistry } from '@delon/form';
import * as i0 from "@angular/core";
import * as i1 from "./widget";
import * as i2 from "@angular/forms";
import * as i3 from "@delon/form";
import * as i4 from "ngx-tinymce";
export * from './widget';
export * from './schema';
export declare class TinymceWidgetModule {
    constructor(widgetRegistry: WidgetRegistry);
    static ɵfac: i0.ɵɵFactoryDeclaration<TinymceWidgetModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<TinymceWidgetModule, [typeof i1.TinymceWidget], [typeof i2.FormsModule, typeof i3.DelonFormModule, typeof i4.NgxTinymceModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<TinymceWidgetModule>;
}
