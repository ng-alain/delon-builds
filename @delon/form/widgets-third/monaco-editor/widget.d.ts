import { type NuMonacoEditorEvent } from '@ng-util/monaco-editor';
import { ControlUIWidget } from '@delon/form';
import type { MonacoEditorWidgetSchema } from './schema';
import * as i0 from "@angular/core";
export declare class MonacoEditorWidget extends ControlUIWidget<MonacoEditorWidgetSchema> {
    static readonly KEY = "monaco-editor";
    _change(value: string): void;
    _event(ev: NuMonacoEditorEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MonacoEditorWidget, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MonacoEditorWidget, "sf-widget-monaco-editor", never, {}, {}, never, never, true, never>;
}
