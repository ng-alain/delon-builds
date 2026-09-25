import { AsyncPipe, CommonModule } from "@angular/common";
import * as i0 from "@angular/core";
import { ChangeDetectionStrategy, Component, NgModule, ViewEncapsulation, signal, viewChild } from "@angular/core";
import * as i1 from "@angular/forms";
import { FormsModule, NgModel } from "@angular/forms";
import { debounceTime, map, mergeMap, of, startWith, takeUntil } from "rxjs";
import * as i2 from "@delon/form";
import { ControlUIWidget, DelonFormModule, getCopyEnum, getEnum, toBool } from "@delon/form";
import * as i4 from "ng-zorro-antd/auto-complete";
import { NzAutocompleteModule } from "ng-zorro-antd/auto-complete";
import * as i3 from "ng-zorro-antd/input";
import { NzInputModule } from "ng-zorro-antd/input";
var AutoCompleteWidget = class AutoCompleteWidget extends ControlUIWidget {
	static KEY = "autocomplete";
	i = signal({}, ...ngDevMode ? [{ debugName: "i" }] : /* istanbul ignore next */ []);
	list = signal(null, ...ngDevMode ? [{ debugName: "list" }] : /* istanbul ignore next */ []);
	typing = signal("", ...ngDevMode ? [{ debugName: "typing" }] : /* istanbul ignore next */ []);
	ngModel = viewChild.required(NgModel, ...ngDevMode ? [{ debugName: "ngModel" }] : /* istanbul ignore next */ []);
	filterOption = signal((i, o) => (o.label ?? "").toLowerCase().indexOf((i ?? "").toLowerCase()) > -1, ...ngDevMode ? [{ debugName: "filterOption" }] : /* istanbul ignore next */ []);
	isAsync = signal(false, ...ngDevMode ? [{ debugName: "isAsync" }] : /* istanbul ignore next */ []);
	fixData = signal([], ...ngDevMode ? [{ debugName: "fixData" }] : /* istanbul ignore next */ []);
	updateValue(item) {
		this.typing.set(item.nzLabel);
		const data = item.nzValue;
		this.setValue(data.value);
		this.ui.change?.(item, data);
	}
	_setValue(item) {
		let val = item.toString();
		if (typeof item !== "string") val = item.value;
		this.setValue(val);
	}
	afterViewInit() {
		const { backfill, defaultActiveFirstOption, nzWidth, filterOption: uiFilterOption, asyncData, compareWith } = this.ui;
		this.i.set({
			backfill: toBool(backfill, false),
			defaultActiveFirstOption: toBool(defaultActiveFirstOption, true),
			width: nzWidth ?? void 0,
			compareWith: compareWith ?? ((o1, o2) => o1 === o2)
		});
		let filterOptionValue = uiFilterOption == null ? true : uiFilterOption;
		if (typeof filterOptionValue === "boolean") filterOptionValue = (input, option) => option.label.toLowerCase().indexOf((input ?? "").toLowerCase()) > -1;
		this.filterOption.set(filterOptionValue);
		this.isAsync.set(!!asyncData);
		const orgTime = +(this.ui.debounceTime ?? 0);
		const time = Math.max(0, this.isAsync() ? Math.max(50, orgTime) : orgTime);
		this.list.set(this.ngModel().valueChanges.pipe(debounceTime(time), startWith(""), mergeMap((input) => this.isAsync() ? asyncData(input) : this.filterData(input)), map((res) => getEnum(res, null, this.schema.readOnly))));
	}
	reset(value) {
		if (this.isAsync()) {
			this.ui.asyncData(value).pipe(takeUntil(this.sfItemComp.destroy$), map((res) => getEnum(res, null, this.schema.readOnly))).subscribe((data) => {
				this.typing.set(data.find((w) => w.value === this.value)?.label ?? "");
			});
			return;
		}
		this.typing.set(value);
		switch (this.ui.type) {
			case "email":
				this.fixData.set(getCopyEnum(this.schema.enum ?? this.formProperty.options.uiEmailSuffixes, null, this.schema.readOnly));
				break;
			default: this.fixData.set(getCopyEnum(this.schema.enum, value, this.schema.readOnly));
		}
	}
	filterData(input) {
		switch (this.ui.type) {
			case "email": return this.addEmailSuffix(input);
			default: {
				const filterFn = this.filterOption();
				return of(this.fixData().filter((option) => filterFn(input, option)));
			}
		}
	}
	addEmailSuffix(value) {
		const res = !value || typeof value !== "string" || value?.indexOf("@") !== -1 ? [] : this.fixData().map((domain) => `${value}@${domain.label}`);
		return of(res);
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: AutoCompleteWidget,
		deps: null,
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "17.0.0",
		version: "22.2.0",
		type: AutoCompleteWidget,
		isStandalone: true,
		selector: "sf-autocomplete",
		viewQueries: [{
			propertyName: "ngModel",
			first: true,
			predicate: NgModel,
			descendants: true,
			isSignal: true
		}],
		usesInheritance: true,
		ngImport: i0,
		template: `
    @let i = this.i();
    <sf-item-wrap
      [id]="id"
      [schema]="schema"
      [ui]="ui"
      [showError]="showError"
      [error]="error"
      [showTitle]="schema.title"
    >
      <input
        nz-input
        [nzAutocomplete]="auto"
        [attr.id]="id"
        [disabled]="disabled"
        [attr.disabled]="disabled"
        [nzSize]="ui.size!"
        [ngModel]="typing()"
        [ngModelOptions]="{ standalone: true }"
        (ngModelChange)="_setValue($event)"
        [attr.maxLength]="schema.maxLength ?? null"
        [attr.placeholder]="ui.placeholder"
        autocomplete="off"
      />
      <nz-autocomplete
        #auto
        [nzBackfill]="i.backfill"
        [nzDefaultActiveFirstOption]="i.defaultActiveFirstOption"
        [nzWidth]="i.width"
        [nzOverlayStyle]="ui.overlayStyle ?? {}"
        [nzOverlayClassName]="ui.overlayClassName ?? ''"
        [compareWith]="i.compareWith"
        (selectionChange)="updateValue($event)"
      >
        @for (item of list() | async; track item) {
          <nz-auto-option [nzValue]="item" [nzLabel]="item.label" [nzDisabled]="item.disabled">
            {{ item.label }}
          </nz-auto-option>
        }
      </nz-autocomplete>
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
				type: i1.DefaultValueAccessor,
				selector: "input:not([type=checkbox]):not([ngNoCva])[formControlName],textarea:not([ngNoCva])[formControlName],input:not([type=checkbox]):not([ngNoCva])[formControl],textarea:not([ngNoCva])[formControl],input:not([type=checkbox]):not([ngNoCva])[ngModel],textarea:not([ngNoCva])[ngModel],[ngDefaultControl]"
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
				kind: "ngmodule",
				type: NzInputModule
			},
			{
				kind: "directive",
				type: i3.NzInputDirective,
				selector: "input[nz-input],textarea[nz-input]",
				inputs: [
					"nzVariant",
					"nzSize",
					"nzStatus",
					"disabled",
					"readonly"
				],
				exportAs: ["nzInput"]
			},
			{
				kind: "ngmodule",
				type: NzAutocompleteModule
			},
			{
				kind: "component",
				type: i4.NzAutocompleteComponent,
				selector: "nz-autocomplete",
				inputs: [
					"nzWidth",
					"nzOverlayClassName",
					"nzOverlayStyle",
					"nzDefaultActiveFirstOption",
					"nzBackfill",
					"nzDropdownMatchSelectWidth",
					"compareWith",
					"nzDataSource"
				],
				outputs: ["selectionChange"],
				exportAs: ["nzAutocomplete"]
			},
			{
				kind: "component",
				type: i4.NzAutocompleteOptionComponent,
				selector: "nz-auto-option",
				inputs: [
					"nzValue",
					"nzLabel",
					"nzDisabled"
				],
				outputs: ["selectionChange", "mouseEntered"],
				exportAs: ["nzAutoOption"]
			},
			{
				kind: "directive",
				type: i4.NzAutocompleteTriggerDirective,
				selector: "input[nzAutocomplete], textarea[nzAutocomplete]",
				inputs: ["nzAutocomplete", "nzAutocompleteConnectedTo"],
				exportAs: ["nzAutocompleteTrigger"]
			},
			{
				kind: "pipe",
				type: AsyncPipe,
				name: "async"
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
	type: AutoCompleteWidget,
	decorators: [{
		type: Component,
		args: [{
			selector: "sf-autocomplete",
			template: `
    @let i = this.i();
    <sf-item-wrap
      [id]="id"
      [schema]="schema"
      [ui]="ui"
      [showError]="showError"
      [error]="error"
      [showTitle]="schema.title"
    >
      <input
        nz-input
        [nzAutocomplete]="auto"
        [attr.id]="id"
        [disabled]="disabled"
        [attr.disabled]="disabled"
        [nzSize]="ui.size!"
        [ngModel]="typing()"
        [ngModelOptions]="{ standalone: true }"
        (ngModelChange)="_setValue($event)"
        [attr.maxLength]="schema.maxLength ?? null"
        [attr.placeholder]="ui.placeholder"
        autocomplete="off"
      />
      <nz-autocomplete
        #auto
        [nzBackfill]="i.backfill"
        [nzDefaultActiveFirstOption]="i.defaultActiveFirstOption"
        [nzWidth]="i.width"
        [nzOverlayStyle]="ui.overlayStyle ?? {}"
        [nzOverlayClassName]="ui.overlayClassName ?? ''"
        [compareWith]="i.compareWith"
        (selectionChange)="updateValue($event)"
      >
        @for (item of list() | async; track item) {
          <nz-auto-option [nzValue]="item" [nzLabel]="item.label" [nzDisabled]="item.disabled">
            {{ item.label }}
          </nz-auto-option>
        }
      </nz-autocomplete>
    </sf-item-wrap>
  `,
			changeDetection: ChangeDetectionStrategy.OnPush,
			encapsulation: ViewEncapsulation.None,
			imports: [
				AsyncPipe,
				FormsModule,
				DelonFormModule,
				NzInputModule,
				NzAutocompleteModule
			]
		}]
	}],
	propDecorators: { ngModel: [{
		type: i0.ViewChild,
		args: [i0.forwardRef(() => NgModel), { isSignal: true }]
	}] }
});
var AutoCompleteWidgetModule = class AutoCompleteWidgetModule {
	constructor(widgetRegistry) {
		widgetRegistry.register(AutoCompleteWidget.KEY, AutoCompleteWidget);
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: AutoCompleteWidgetModule,
		deps: [{ token: i2.WidgetRegistry }],
		target: i0.ɵɵFactoryTarget.NgModule
	});
	static ɵmod = i0.ɵɵngDeclareNgModule({
		minVersion: "14.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: AutoCompleteWidgetModule,
		imports: [
			FormsModule,
			DelonFormModule,
			CommonModule,
			NzInputModule,
			NzAutocompleteModule,
			AutoCompleteWidget
		]
	});
	static ɵinj = i0.ɵɵngDeclareInjector({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: AutoCompleteWidgetModule,
		imports: [
			FormsModule,
			DelonFormModule,
			CommonModule,
			NzInputModule,
			NzAutocompleteModule,
			AutoCompleteWidget
		]
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: AutoCompleteWidgetModule,
	decorators: [{
		type: NgModule,
		args: [{ imports: [
			FormsModule,
			DelonFormModule,
			CommonModule,
			NzInputModule,
			NzAutocompleteModule,
			AutoCompleteWidget
		] }]
	}],
	ctorParameters: () => [{ type: i2.WidgetRegistry }]
});
function withAutoCompleteWidget() {
	return {
		KEY: AutoCompleteWidget.KEY,
		type: AutoCompleteWidget
	};
}
export { AutoCompleteWidget, AutoCompleteWidgetModule, withAutoCompleteWidget };

//# sourceMappingURL=widgets-auto-complete.mjs.map