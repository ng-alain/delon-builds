import * as i0 from "@angular/core";
import { ChangeDetectionStrategy, Component, NgModule, ViewEncapsulation, booleanAttribute, computed, input } from "@angular/core";
import { NzCardComponent, NzCardModule } from "ng-zorro-antd/card";
import { NzOutletModule, NzStringTemplateOutletDirective } from "ng-zorro-antd/core/outlet";
import { NzSpinComponent, NzSpinModule } from "ng-zorro-antd/spin";
import { CommonModule } from "@angular/common";
var G2CardComponent = class G2CardComponent {
	bordered = input(false, {
		...ngDevMode ? { debugName: "bordered" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	avatar = input(...ngDevMode ? [void 0, { debugName: "avatar" }] : /* istanbul ignore next */ []);
	title = input(...ngDevMode ? [void 0, { debugName: "title" }] : /* istanbul ignore next */ []);
	action = input(...ngDevMode ? [void 0, { debugName: "action" }] : /* istanbul ignore next */ []);
	total = input("", ...ngDevMode ? [{ debugName: "total" }] : /* istanbul ignore next */ []);
	contentHeight = input(...ngDevMode ? [void 0, { debugName: "contentHeight" }] : /* istanbul ignore next */ []);
	footer = input(...ngDevMode ? [void 0, { debugName: "footer" }] : /* istanbul ignore next */ []);
	loading = input(false, {
		...ngDevMode ? { debugName: "loading" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	_height = computed(() => {
		const v = this.contentHeight();
		return typeof v === "number" ? `${v}px` : v;
	}, ...ngDevMode ? [{ debugName: "_height" }] : /* istanbul ignore next */ []);
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: G2CardComponent,
		deps: [],
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "17.0.0",
		version: "22.2.0",
		type: G2CardComponent,
		isStandalone: true,
		selector: "g2-card",
		inputs: {
			bordered: {
				classPropertyName: "bordered",
				publicName: "bordered",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			avatar: {
				classPropertyName: "avatar",
				publicName: "avatar",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			title: {
				classPropertyName: "title",
				publicName: "title",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			action: {
				classPropertyName: "action",
				publicName: "action",
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
			contentHeight: {
				classPropertyName: "contentHeight",
				publicName: "contentHeight",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			footer: {
				classPropertyName: "footer",
				publicName: "footer",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			loading: {
				classPropertyName: "loading",
				publicName: "loading",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			}
		},
		host: { properties: { "class.g2-card": "true" } },
		exportAs: ["g2Card"],
		ngImport: i0,
		template: "<nz-card [nzBodyStyle]=\"{ padding: '20px 24px 8px 24px' }\" [nzBordered]=\"bordered()\">\n  <nz-spin [nzSpinning]=\"loading()\">\n    <div class=\"g2-card__top\">\n      <div class=\"g2-card__avatar\">\n        <ng-container *nzStringTemplateOutlet=\"avatar()\">{{ avatar() }}</ng-container>\n      </div>\n      <div class=\"g2-card__meta-wrap\">\n        <div class=\"g2-card__meta\">\n          @if (title()) {\n            <span class=\"g2-card__meta-title\">\n              <ng-container *nzStringTemplateOutlet=\"title()\">{{ title() }}</ng-container>\n            </span>\n          }\n          @if (action()) {\n            <span class=\"g2-card__meta-action\">\n              <ng-container *nzStringTemplateOutlet=\"action()\">{{ action() }}</ng-container>\n            </span>\n          }\n        </div>\n        @if (total()) {\n          <p class=\"g2-card__total\" [innerHTML]=\"total()\"></p>\n        }\n      </div>\n    </div>\n    <div class=\"g2-card__desc\" [style.height]=\"_height()\">\n      <div [class.g2-card__fixed]=\"!!contentHeight()\">\n        <ng-content />\n      </div>\n    </div>\n    @if (footer()) {\n      <div class=\"g2-card__footer\">\n        <ng-container *nzStringTemplateOutlet=\"footer()\">{{ footer() }}</ng-container>\n      </div>\n    }\n  </nz-spin>\n</nz-card>\n",
		dependencies: [
			{
				kind: "component",
				type: NzCardComponent,
				selector: "nz-card",
				inputs: [
					"nzBordered",
					"nzLoading",
					"nzHoverable",
					"nzBodyStyle",
					"nzCover",
					"nzActions",
					"nzType",
					"nzSize",
					"nzTitle",
					"nzExtra"
				],
				exportAs: ["nzCard"]
			},
			{
				kind: "component",
				type: NzSpinComponent,
				selector: "nz-spin",
				inputs: [
					"nzIndicator",
					"nzSize",
					"nzTip",
					"nzDelay",
					"nzSimple",
					"nzSpinning"
				],
				exportAs: ["nzSpin"]
			},
			{
				kind: "directive",
				type: NzStringTemplateOutletDirective,
				selector: "[nzStringTemplateOutlet]",
				inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"],
				exportAs: ["nzStringTemplateOutlet"]
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
	type: G2CardComponent,
	decorators: [{
		type: Component,
		args: [{
			selector: "g2-card",
			exportAs: "g2Card",
			host: { "[class.g2-card]": "true" },
			changeDetection: ChangeDetectionStrategy.OnPush,
			encapsulation: ViewEncapsulation.None,
			imports: [
				NzCardComponent,
				NzSpinComponent,
				NzStringTemplateOutletDirective
			],
			template: "<nz-card [nzBodyStyle]=\"{ padding: '20px 24px 8px 24px' }\" [nzBordered]=\"bordered()\">\n  <nz-spin [nzSpinning]=\"loading()\">\n    <div class=\"g2-card__top\">\n      <div class=\"g2-card__avatar\">\n        <ng-container *nzStringTemplateOutlet=\"avatar()\">{{ avatar() }}</ng-container>\n      </div>\n      <div class=\"g2-card__meta-wrap\">\n        <div class=\"g2-card__meta\">\n          @if (title()) {\n            <span class=\"g2-card__meta-title\">\n              <ng-container *nzStringTemplateOutlet=\"title()\">{{ title() }}</ng-container>\n            </span>\n          }\n          @if (action()) {\n            <span class=\"g2-card__meta-action\">\n              <ng-container *nzStringTemplateOutlet=\"action()\">{{ action() }}</ng-container>\n            </span>\n          }\n        </div>\n        @if (total()) {\n          <p class=\"g2-card__total\" [innerHTML]=\"total()\"></p>\n        }\n      </div>\n    </div>\n    <div class=\"g2-card__desc\" [style.height]=\"_height()\">\n      <div [class.g2-card__fixed]=\"!!contentHeight()\">\n        <ng-content />\n      </div>\n    </div>\n    @if (footer()) {\n      <div class=\"g2-card__footer\">\n        <ng-container *nzStringTemplateOutlet=\"footer()\">{{ footer() }}</ng-container>\n      </div>\n    }\n  </nz-spin>\n</nz-card>\n"
		}]
	}],
	propDecorators: {
		bordered: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "bordered",
				required: false
			}]
		}],
		avatar: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "avatar",
				required: false
			}]
		}],
		title: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "title",
				required: false
			}]
		}],
		action: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "action",
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
		contentHeight: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "contentHeight",
				required: false
			}]
		}],
		footer: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "footer",
				required: false
			}]
		}],
		loading: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "loading",
				required: false
			}]
		}]
	}
});
const COMPONENTS = [G2CardComponent];
var G2CardModule = class G2CardModule {
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: G2CardModule,
		deps: [],
		target: i0.ɵɵFactoryTarget.NgModule
	});
	static ɵmod = i0.ɵɵngDeclareNgModule({
		minVersion: "14.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: G2CardModule,
		imports: [
			CommonModule,
			NzCardModule,
			NzSpinModule,
			NzOutletModule,
			G2CardComponent
		],
		exports: [G2CardComponent]
	});
	static ɵinj = i0.ɵɵngDeclareInjector({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: G2CardModule,
		imports: [
			CommonModule,
			NzCardModule,
			NzSpinModule,
			NzOutletModule,
			COMPONENTS
		]
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: G2CardModule,
	decorators: [{
		type: NgModule,
		args: [{
			imports: [
				CommonModule,
				NzCardModule,
				NzSpinModule,
				NzOutletModule,
				...COMPONENTS
			],
			exports: COMPONENTS
		}]
	}]
});
export { G2CardComponent, G2CardModule };

//# sourceMappingURL=card.mjs.map