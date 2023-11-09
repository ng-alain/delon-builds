import { WidgetRegistry } from '@delon/form';
import * as i0 from "@angular/core";
import * as i1 from "./widget";
import * as i2 from "@angular/forms";
import * as i3 from "@delon/form";
import * as i4 from "ng-zorro-antd/mention";
import * as i5 from "ng-zorro-antd/input";
import * as i6 from "@angular/common";
export * from './widget';
export * from './schema';
export declare class MentionWidgetModule {
    constructor(widgetRegistry: WidgetRegistry);
    static ɵfac: i0.ɵɵFactoryDeclaration<MentionWidgetModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<MentionWidgetModule, [typeof i1.MentionWidget], [typeof i2.FormsModule, typeof i3.DelonFormModule, typeof i4.NzMentionModule, typeof i5.NzInputModule, typeof i6.CommonModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<MentionWidgetModule>;
}
