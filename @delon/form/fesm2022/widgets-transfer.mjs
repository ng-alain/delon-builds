import * as i0 from "@angular/core";
import { ChangeDetectionStrategy, Component, NgModule, ViewEncapsulation, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { of } from "rxjs";
import * as i1 from "@delon/form";
import { ControlUIWidget, DelonFormModule, getData } from "@delon/form";
import * as i2 from "ng-zorro-antd/transfer";
import { NzTransferModule } from "ng-zorro-antd/transfer";
var TransferWidget = class TransferWidget extends ControlUIWidget {
	static KEY = "transfer";
	list = signal([], ...ngDevMode ? [{ debugName: "list" }] : /* istanbul ignore next */ []);
	i;
	_data = signal([], ...ngDevMode ? [{ debugName: "_data" }] : /* istanbul ignore next */ []);
	ngOnInit() {
		const { titles, operations, itemUnit, itemsUnit } = this.ui;
		this.i = {
			titles: titles ?? ["", ""],
			operations: operations ?? ["", ""],
			itemUnit: itemUnit ?? "项",
			itemsUnit: itemsUnit ?? "项"
		};
	}
	reset(value) {
		getData(this.schema, this.ui, null).subscribe((items) => {
			let formData = value;
			if (!Array.isArray(formData)) formData = [formData];
			items.forEach((item) => {
				if (~formData.indexOf(item.value)) item.direction = "right";
			});
			this.list.set(items);
			this._data.set(items.filter((w) => w.direction === "right"));
			this.notify();
		});
	}
	notify() {
		this.formProperty.setValue(this._data().map((i) => i.value), false);
	}
	_canMove = (arg) => {
		return this.ui.canMove ? this.ui.canMove(arg) : of(arg.list);
	};
	_change(options) {
		if (options.to === "right") this._data.set(this._data().concat(...options.list));
		else this._data.set(this._data().filter((w) => options.list.indexOf(w) === -1));
		this.ui.change?.(options);
		this.notify();
	}
	_searchChange(options) {
		this.ui.searchChange?.(options);
	}
	_selectChange(options) {
		this.ui.selectChange?.(options);
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: TransferWidget,
		deps: null,
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "14.0.0",
		version: "22.2.0",
		type: TransferWidget,
		isStandalone: true,
		selector: "sf-transfer",
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
      <nz-transfer
        [nzDisabled]="disabled"
        [nzDataSource]="$any(list())"
        [nzTitles]="i.titles"
        [nzOperations]="i.operations"
        [nzListStyle]="ui.listStyle!"
        [nzItemUnit]="i.itemUnit"
        [nzItemsUnit]="i.itemsUnit"
        [nzShowSearch]="ui.showSearch"
        [nzShowSelectAll]="ui.showSelectAll!"
        [nzFilterOption]="ui.filterOption"
        [nzSearchPlaceholder]="ui.searchPlaceholder"
        [nzNotFoundContent]="ui.notFoundContent"
        [nzOneWay]="ui.oneWay"
        [nzCanMove]="_canMove"
        (nzChange)="_change($event)"
        (nzSearchChange)="_searchChange($event)"
        (nzSelectChange)="_selectChange($event)"
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
				kind: "ngmodule",
				type: DelonFormModule
			},
			{
				kind: "component",
				type: i1.SFItemWrapComponent,
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
				kind: "ngmodule",
				type: NzTransferModule
			},
			{
				kind: "component",
				type: i2.NzTransferComponent,
				selector: "nz-transfer",
				inputs: [
					"nzDisabled",
					"nzDataSource",
					"nzTitles",
					"nzOperations",
					"nzListStyle",
					"nzShowSelectAll",
					"nzItemUnit",
					"nzItemsUnit",
					"nzCanMove",
					"nzRenderList",
					"nzRender",
					"nzFooter",
					"nzShowSearch",
					"nzFilterOption",
					"nzSearchPlaceholder",
					"nzNotFoundContent",
					"nzTargetKeys",
					"nzSelectedKeys",
					"nzStatus",
					"nzOneWay"
				],
				outputs: [
					"nzChange",
					"nzSearchChange",
					"nzSelectChange"
				],
				exportAs: ["nzTransfer"]
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
	type: TransferWidget,
	decorators: [{
		type: Component,
		args: [{
			selector: "sf-transfer",
			template: `
    <sf-item-wrap
      [id]="id"
      [schema]="schema"
      [ui]="ui"
      [showError]="showError"
      [error]="error"
      [showTitle]="schema.title"
    >
      <nz-transfer
        [nzDisabled]="disabled"
        [nzDataSource]="$any(list())"
        [nzTitles]="i.titles"
        [nzOperations]="i.operations"
        [nzListStyle]="ui.listStyle!"
        [nzItemUnit]="i.itemUnit"
        [nzItemsUnit]="i.itemsUnit"
        [nzShowSearch]="ui.showSearch"
        [nzShowSelectAll]="ui.showSelectAll!"
        [nzFilterOption]="ui.filterOption"
        [nzSearchPlaceholder]="ui.searchPlaceholder"
        [nzNotFoundContent]="ui.notFoundContent"
        [nzOneWay]="ui.oneWay"
        [nzCanMove]="_canMove"
        (nzChange)="_change($event)"
        (nzSearchChange)="_searchChange($event)"
        (nzSelectChange)="_selectChange($event)"
      />
    </sf-item-wrap>
  `,
			changeDetection: ChangeDetectionStrategy.OnPush,
			encapsulation: ViewEncapsulation.None,
			imports: [
				FormsModule,
				DelonFormModule,
				NzTransferModule
			]
		}]
	}]
});
var TransferWidgetModule = class TransferWidgetModule {
	constructor(widgetRegistry) {
		widgetRegistry.register(TransferWidget.KEY, TransferWidget);
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: TransferWidgetModule,
		deps: [{ token: i1.WidgetRegistry }],
		target: i0.ɵɵFactoryTarget.NgModule
	});
	static ɵmod = i0.ɵɵngDeclareNgModule({
		minVersion: "14.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: TransferWidgetModule,
		imports: [
			FormsModule,
			DelonFormModule,
			NzTransferModule,
			TransferWidget
		]
	});
	static ɵinj = i0.ɵɵngDeclareInjector({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: TransferWidgetModule,
		imports: [
			FormsModule,
			DelonFormModule,
			NzTransferModule,
			TransferWidget
		]
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: TransferWidgetModule,
	decorators: [{
		type: NgModule,
		args: [{ imports: [
			FormsModule,
			DelonFormModule,
			NzTransferModule,
			TransferWidget
		] }]
	}],
	ctorParameters: () => [{ type: i1.WidgetRegistry }]
});
function withTransferWidget() {
	return {
		KEY: TransferWidget.KEY,
		type: TransferWidget
	};
}
export { TransferWidget, TransferWidgetModule, withTransferWidget };

//# sourceMappingURL=widgets-transfer.mjs.map