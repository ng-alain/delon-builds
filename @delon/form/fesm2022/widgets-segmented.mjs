import * as i0 from "@angular/core";
import { ChangeDetectionStrategy, Component, NgModule, ViewEncapsulation, signal } from "@angular/core";
import * as i1 from "@angular/forms";
import { FormsModule } from "@angular/forms";
import * as i2 from "@delon/form";
import { ControlUIWidget, DelonFormModule, getData } from "@delon/form";
import { NzSegmentedComponent, NzSegmentedModule } from "ng-zorro-antd/segmented";
var SegmentedWidget = class SegmentedWidget extends ControlUIWidget {
	static KEY = "segmented";
	list = signal([], ...ngDevMode ? [{ debugName: "list" }] : /* istanbul ignore next */ []);
	reset(value) {
		getData(this.schema, this.ui, value).subscribe((items) => {
			this.list.set(items);
		});
	}
	valueChange(v) {
		const list = this.list();
		this.ui.valueChange?.({
			index: v,
			item: typeof v === "number" ? list[v] : list.find((w) => w.value === v)
		});
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: SegmentedWidget,
		deps: null,
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: SegmentedWidget,
		isStandalone: true,
		selector: "sf-segmented",
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
      <nz-segmented
        [ngModel]="value"
        [ngModelOptions]="{ standalone: true }"
        (ngModelChange)="setValue($event)"
        [nzDisabled]="disabled"
        [nzSize]="$any(ui.size)"
        [nzBlock]="ui.block ?? false"
        [nzVertical]="ui.vertical"
        [nzShape]="ui.shape ?? 'default'"
        [nzOptions]="list()"
        (nzValueChange)="valueChange($event)"
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
				type: NzSegmentedComponent,
				selector: "nz-segmented",
				inputs: [
					"nzBlock",
					"nzDisabled",
					"nzOptions",
					"nzVertical",
					"nzShape",
					"nzSize",
					"nzName"
				],
				outputs: ["nzValueChange"],
				exportAs: ["nzSegmented"]
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
	type: SegmentedWidget,
	decorators: [{
		type: Component,
		args: [{
			selector: "sf-segmented",
			template: `
    <sf-item-wrap
      [id]="id"
      [schema]="schema"
      [ui]="ui"
      [showError]="showError"
      [error]="error"
      [showTitle]="schema.title"
    >
      <nz-segmented
        [ngModel]="value"
        [ngModelOptions]="{ standalone: true }"
        (ngModelChange)="setValue($event)"
        [nzDisabled]="disabled"
        [nzSize]="$any(ui.size)"
        [nzBlock]="ui.block ?? false"
        [nzVertical]="ui.vertical"
        [nzShape]="ui.shape ?? 'default'"
        [nzOptions]="list()"
        (nzValueChange)="valueChange($event)"
      />
    </sf-item-wrap>
  `,
			changeDetection: ChangeDetectionStrategy.OnPush,
			encapsulation: ViewEncapsulation.None,
			imports: [
				FormsModule,
				DelonFormModule,
				NzSegmentedComponent
			]
		}]
	}]
});
var SegmentedWidgetModule = class SegmentedWidgetModule {
	constructor(widgetRegistry) {
		widgetRegistry.register(SegmentedWidget.KEY, SegmentedWidget);
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: SegmentedWidgetModule,
		deps: [{ token: i2.WidgetRegistry }],
		target: i0.ɵɵFactoryTarget.NgModule
	});
	static ɵmod = i0.ɵɵngDeclareNgModule({
		minVersion: "14.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: SegmentedWidgetModule,
		imports: [
			FormsModule,
			DelonFormModule,
			NzSegmentedModule,
			SegmentedWidget
		]
	});
	static ɵinj = i0.ɵɵngDeclareInjector({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: SegmentedWidgetModule,
		imports: [
			FormsModule,
			DelonFormModule,
			NzSegmentedModule,
			SegmentedWidget
		]
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: SegmentedWidgetModule,
	decorators: [{
		type: NgModule,
		args: [{ imports: [
			FormsModule,
			DelonFormModule,
			NzSegmentedModule,
			SegmentedWidget
		] }]
	}],
	ctorParameters: () => [{ type: i2.WidgetRegistry }]
});
function withSegmentedWidget() {
	return {
		KEY: SegmentedWidget.KEY,
		type: SegmentedWidget
	};
}
export { SegmentedWidget, SegmentedWidgetModule, withSegmentedWidget };

//# sourceMappingURL=widgets-segmented.mjs.map