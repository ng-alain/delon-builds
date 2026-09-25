import * as i0 from "@angular/core";
import { ChangeDetectionStrategy, Component, NgModule, ViewEncapsulation } from "@angular/core";
import * as i1 from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { NuMonacoEditorComponent } from "@ng-util/monaco-editor";
import * as i2 from "@delon/form";
import { ControlUIWidget, DelonFormModule } from "@delon/form";
var MonacoEditorWidget = class MonacoEditorWidget extends ControlUIWidget {
	static KEY = "monaco-editor";
	_change(value) {
		this.setValue(value);
		this.ui.change?.(value);
	}
	_event(ev) {
		this.ui.event?.(ev);
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: MonacoEditorWidget,
		deps: null,
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: MonacoEditorWidget,
		isStandalone: true,
		selector: "sf-widget-monaco-editor",
		usesInheritance: true,
		ngImport: i0,
		template: `
    <sf-item-wrap
      [id]="id"
      [schema]="schema"
      [ui]="ui"
      [showError]="showError"
      [error]="error"
      [showTitle]="schema.title"
    >
      <nu-monaco-editor
        [ngModel]="value"
        [ngModelOptions]="{ standalone: true }"
        (ngModelChange)="_change($event)"
        [options]="ui.options ?? {}"
        [disabled]="disabled"
        [model]="ui.model"
        [autoFormat]="ui.autoFormat ?? true"
        [height]="ui.height ?? '200px'"
        [delay]="ui.delay ?? 0"
        (event)="_event($event)"
      />
    </sf-item-wrap>
  `,
		isInline: true,
		dependencies: [
			{
				kind: "ngmodule",
				type: FormsModule
			},
			{
				kind: "directive",
				type: i1.NgControlStatus,
				selector: "[formControlName],[ngModel],[formControl]"
			},
			{
				kind: "directive",
				type: i1.NgModel,
				selector: "[ngModel]:not([formControlName]):not([formControl])",
				inputs: [
					"name",
					"disabled",
					"ngModel",
					"ngModelOptions"
				],
				outputs: ["ngModelChange"],
				exportAs: ["ngModel"]
			},
			{
				kind: "ngmodule",
				type: DelonFormModule
			},
			{
				kind: "component",
				type: i2.SFItemWrapComponent,
				selector: "sf-item-wrap",
				inputs: [
					"id",
					"schema",
					"ui",
					"showError",
					"error",
					"showTitle",
					"title"
				]
			},
			{
				kind: "component",
				type: NuMonacoEditorComponent,
				selector: "nu-monaco-editor",
				inputs: [
					"placeholder",
					"model",
					"autoFormat",
					"maxHeight",
					"minHeight"
				],
				exportAs: ["nuMonacoEditor"]
			}
		],
		changeDetection: i0.ChangeDetectionStrategy.OnPush,
		encapsulation: i0.ViewEncapsulation.None
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: MonacoEditorWidget,
	decorators: [{
		type: Component,
		args: [{
			selector: "sf-widget-monaco-editor",
			template: `
    <sf-item-wrap
      [id]="id"
      [schema]="schema"
      [ui]="ui"
      [showError]="showError"
      [error]="error"
      [showTitle]="schema.title"
    >
      <nu-monaco-editor
        [ngModel]="value"
        [ngModelOptions]="{ standalone: true }"
        (ngModelChange)="_change($event)"
        [options]="ui.options ?? {}"
        [disabled]="disabled"
        [model]="ui.model"
        [autoFormat]="ui.autoFormat ?? true"
        [height]="ui.height ?? '200px'"
        [delay]="ui.delay ?? 0"
        (event)="_event($event)"
      />
    </sf-item-wrap>
  `,
			changeDetection: ChangeDetectionStrategy.OnPush,
			encapsulation: ViewEncapsulation.None,
			imports: [
				FormsModule,
				DelonFormModule,
				NuMonacoEditorComponent
			]
		}]
	}]
});
var MonacoEditorWidgetModule = class MonacoEditorWidgetModule {
	constructor(widgetRegistry) {
		widgetRegistry.register(MonacoEditorWidget.KEY, MonacoEditorWidget);
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: MonacoEditorWidgetModule,
		deps: [{ token: i2.WidgetRegistry }],
		target: i0.ɵɵFactoryTarget.NgModule
	});
	static ɵmod = i0.ɵɵngDeclareNgModule({
		minVersion: "14.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: MonacoEditorWidgetModule,
		imports: [
			FormsModule,
			DelonFormModule,
			NuMonacoEditorComponent,
			MonacoEditorWidget
		]
	});
	static ɵinj = i0.ɵɵngDeclareInjector({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: MonacoEditorWidgetModule,
		imports: [
			FormsModule,
			DelonFormModule,
			NuMonacoEditorComponent,
			MonacoEditorWidget
		]
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: MonacoEditorWidgetModule,
	decorators: [{
		type: NgModule,
		args: [{ imports: [
			FormsModule,
			DelonFormModule,
			NuMonacoEditorComponent,
			MonacoEditorWidget
		] }]
	}],
	ctorParameters: () => [{ type: i2.WidgetRegistry }]
});
function withMonacoEditorWidget() {
	return {
		KEY: MonacoEditorWidget.KEY,
		type: MonacoEditorWidget
	};
}
export { MonacoEditorWidget, MonacoEditorWidgetModule, withMonacoEditorWidget };

//# sourceMappingURL=widgets-third-monaco-editor.mjs.map