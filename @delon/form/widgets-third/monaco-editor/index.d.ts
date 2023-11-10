import { WidgetRegistry } from '@delon/form';
import * as i0 from "@angular/core";
import * as i1 from "./widget";
import * as i2 from "@angular/forms";
import * as i3 from "@delon/form";
import * as i4 from "@ng-util/monaco-editor";
export * from './widget';
export * from './schema';
export declare class MonacoEditorWidgetModule {
    constructor(widgetRegistry: WidgetRegistry);
    static ɵfac: i0.ɵɵFactoryDeclaration<MonacoEditorWidgetModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<MonacoEditorWidgetModule, [typeof i1.MonacoEditorWidget], [typeof i2.FormsModule, typeof i3.DelonFormModule, typeof i4.NuMonacoEditorModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<MonacoEditorWidgetModule>;
}
