import { WidgetRegistry } from '@delon/form';
import * as i0 from "@angular/core";
import * as i1 from "./widget";
import * as i2 from "@angular/forms";
import * as i3 from "@delon/form";
import * as i4 from "ng-zorro-antd/tag";
import * as i5 from "ng-zorro-antd/icon";
import * as i6 from "@angular/common";
export * from './widget';
export * from './schema';
export declare class TagWidgetModule {
    constructor(widgetRegistry: WidgetRegistry);
    static ɵfac: i0.ɵɵFactoryDeclaration<TagWidgetModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<TagWidgetModule, [typeof i1.TagWidget], [typeof i2.FormsModule, typeof i3.DelonFormModule, typeof i4.NzTagModule, typeof i5.NzIconModule, typeof i6.CommonModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<TagWidgetModule>;
}
