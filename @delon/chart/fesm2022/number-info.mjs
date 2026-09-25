import * as i0 from "@angular/core";
import { ChangeDetectionStrategy, Component, NgModule, ViewEncapsulation, input, numberAttribute } from "@angular/core";
import { NzOutletModule, NzStringTemplateOutletDirective } from "ng-zorro-antd/core/outlet";
import { NzIconDirective, NzIconModule } from "ng-zorro-antd/icon";
import { CommonModule } from "@angular/common";
var NumberInfoComponent = class NumberInfoComponent {
	title = input(...ngDevMode ? [void 0, { debugName: "title" }] : /* istanbul ignore next */ []);
	subTitle = input(...ngDevMode ? [void 0, { debugName: "subTitle" }] : /* istanbul ignore next */ []);
	total = input(...ngDevMode ? [void 0, { debugName: "total" }] : /* istanbul ignore next */ []);
	subTotal = input(...ngDevMode ? [void 0, { debugName: "subTotal" }] : /* istanbul ignore next */ []);
	suffix = input(...ngDevMode ? [void 0, { debugName: "suffix" }] : /* istanbul ignore next */ []);
	status = input(...ngDevMode ? [void 0, { debugName: "status" }] : /* istanbul ignore next */ []);
	theme = input("light", ...ngDevMode ? [{ debugName: "theme" }] : /* istanbul ignore next */ []);
	gap = input(8, {
		...ngDevMode ? { debugName: "gap" } : /* istanbul ignore next */ {},
		transform: numberAttribute
	});
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: NumberInfoComponent,
		deps: [],
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "17.0.0",
		version: "22.2.0",
		type: NumberInfoComponent,
		isStandalone: true,
		selector: "number-info",
		inputs: {
			title: {
				classPropertyName: "title",
				publicName: "title",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			subTitle: {
				classPropertyName: "subTitle",
				publicName: "subTitle",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			total: {
				classPropertyName: "total",
				publicName: "total",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			subTotal: {
				classPropertyName: "subTotal",
				publicName: "subTotal",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			suffix: {
				classPropertyName: "suffix",
				publicName: "suffix",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			status: {
				classPropertyName: "status",
				publicName: "status",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			theme: {
				classPropertyName: "theme",
				publicName: "theme",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			gap: {
				classPropertyName: "gap",
				publicName: "gap",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			}
		},
		host: { properties: {
			"class.number-info": "true",
			"class.number-info__light": "theme() === 'light'",
			"class.number-info__default": "theme() === 'default'"
		} },
		exportAs: ["numberInfo"],
		ngImport: i0,
		template: "@if (title()) {\n  <div class=\"number-info__title\">\n    <ng-container *nzStringTemplateOutlet=\"title()\">{{ title() }}</ng-container>\n  </div>\n}\n@if (subTitle()) {\n  <div class=\"number-info__title-sub\">\n    <ng-container *nzStringTemplateOutlet=\"subTitle()\">{{ subTitle() }}</ng-container>\n  </div>\n}\n<div class=\"number-info__value\" [style.margin-top.px]=\"gap()\">\n  <span class=\"number-info__value-text\">\n    <ng-container *nzStringTemplateOutlet=\"total()\">{{ total() }}</ng-container>\n    @if (suffix()) {\n      <em class=\"number-info__value-suffix\">{{ suffix() }}</em>\n    }\n  </span>\n  @if (status() || subTotal()) {\n    <span class=\"number-info__value-text number-info__value-sub\">\n      <ng-container *nzStringTemplateOutlet=\"subTotal()\">{{ subTotal() }}</ng-container>\n      @if (status()) {\n        <nz-icon nzType=\"caret-{{ status() }}\" />\n      }\n    </span>\n  }\n</div>\n",
		dependencies: [{
			kind: "directive",
			type: NzStringTemplateOutletDirective,
			selector: "[nzStringTemplateOutlet]",
			inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"],
			exportAs: ["nzStringTemplateOutlet"]
		}, {
			kind: "directive",
			type: NzIconDirective,
			selector: "nz-icon,[nz-icon]",
			inputs: [
				"nzType",
				"nzTheme",
				"nzTwotoneColor",
				"nzSpin",
				"nzRotate",
				"nzIconfont",
				"aria-label"
			],
			exportAs: ["nzIcon"]
		}],
		changeDetection: i0.ChangeDetectionStrategy.OnPush,
		encapsulation: i0.ViewEncapsulation.None
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: NumberInfoComponent,
	decorators: [{
		type: Component,
		args: [{
			selector: "number-info",
			exportAs: "numberInfo",
			host: {
				"[class.number-info]": `true`,
				"[class.number-info__light]": `theme() === 'light'`,
				"[class.number-info__default]": `theme() === 'default'`
			},
			changeDetection: ChangeDetectionStrategy.OnPush,
			encapsulation: ViewEncapsulation.None,
			imports: [NzStringTemplateOutletDirective, NzIconDirective],
			template: "@if (title()) {\n  <div class=\"number-info__title\">\n    <ng-container *nzStringTemplateOutlet=\"title()\">{{ title() }}</ng-container>\n  </div>\n}\n@if (subTitle()) {\n  <div class=\"number-info__title-sub\">\n    <ng-container *nzStringTemplateOutlet=\"subTitle()\">{{ subTitle() }}</ng-container>\n  </div>\n}\n<div class=\"number-info__value\" [style.margin-top.px]=\"gap()\">\n  <span class=\"number-info__value-text\">\n    <ng-container *nzStringTemplateOutlet=\"total()\">{{ total() }}</ng-container>\n    @if (suffix()) {\n      <em class=\"number-info__value-suffix\">{{ suffix() }}</em>\n    }\n  </span>\n  @if (status() || subTotal()) {\n    <span class=\"number-info__value-text number-info__value-sub\">\n      <ng-container *nzStringTemplateOutlet=\"subTotal()\">{{ subTotal() }}</ng-container>\n      @if (status()) {\n        <nz-icon nzType=\"caret-{{ status() }}\" />\n      }\n    </span>\n  }\n</div>\n"
		}]
	}],
	propDecorators: {
		title: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "title",
				required: false
			}]
		}],
		subTitle: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "subTitle",
				required: false
			}]
		}],
		total: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "total",
				required: false
			}]
		}],
		subTotal: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "subTotal",
				required: false
			}]
		}],
		suffix: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "suffix",
				required: false
			}]
		}],
		status: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "status",
				required: false
			}]
		}],
		theme: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "theme",
				required: false
			}]
		}],
		gap: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "gap",
				required: false
			}]
		}]
	}
});
const COMPONENTS = [NumberInfoComponent];
var NumberInfoModule = class NumberInfoModule {
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: NumberInfoModule,
		deps: [],
		target: i0.ɵɵFactoryTarget.NgModule
	});
	static ɵmod = i0.ɵɵngDeclareNgModule({
		minVersion: "14.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: NumberInfoModule,
		imports: [
			CommonModule,
			NzIconModule,
			NzOutletModule,
			NumberInfoComponent
		],
		exports: [NumberInfoComponent]
	});
	static ɵinj = i0.ɵɵngDeclareInjector({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: NumberInfoModule,
		imports: [
			CommonModule,
			NzIconModule,
			NzOutletModule
		]
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: NumberInfoModule,
	decorators: [{
		type: NgModule,
		args: [{
			imports: [
				CommonModule,
				NzIconModule,
				NzOutletModule,
				...COMPONENTS
			],
			exports: COMPONENTS
		}]
	}]
});
export { NumberInfoComponent, NumberInfoModule };

//# sourceMappingURL=number-info.mjs.map