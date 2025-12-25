import * as i2 from '@delon/form';
import { SFUISchemaItem, ControlUIWidget, WidgetRegistry, SFWidgetProvideConfig } from '@delon/form';
import * as i3 from '@ng-util/monaco-editor';
import { NuMonacoEditorModel, NuMonacoEditorEvent } from '@ng-util/monaco-editor';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import * as i0 from '@angular/core';
import * as i1 from '@angular/forms';

interface MonacoEditorWidgetSchema extends SFUISchemaItem {
    options?: NzSafeAny;
    delay?: number;
    change?: (value: string) => void;
    model?: NuMonacoEditorModel;
    /**
     * Height of monaco editor, default: `200px`
     */
    height?: string;
    /**
     * Whether to automatically format the document
     */
    autoFormat?: boolean;
    event?: (ev: NuMonacoEditorEvent) => void;
}

declare class MonacoEditorWidget extends ControlUIWidget<MonacoEditorWidgetSchema> {
    static readonly KEY = "monaco-editor";
    _change(value: string): void;
    _event(ev: NuMonacoEditorEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MonacoEditorWidget, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MonacoEditorWidget, "sf-widget-monaco-editor", never, {}, {}, never, never, true, never>;
}

declare class MonacoEditorWidgetModule {
    constructor(widgetRegistry: WidgetRegistry);
    static ɵfac: i0.ɵɵFactoryDeclaration<MonacoEditorWidgetModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<MonacoEditorWidgetModule, never, [typeof i1.FormsModule, typeof i2.DelonFormModule, typeof i3.NuMonacoEditorComponent, typeof MonacoEditorWidget], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<MonacoEditorWidgetModule>;
}

declare function withMonacoEditorWidget(): SFWidgetProvideConfig;

export { MonacoEditorWidget, MonacoEditorWidgetModule, withMonacoEditorWidget };
export type { MonacoEditorWidgetSchema };
