import * as i0 from "@angular/core";
import { ChangeDetectionStrategy, Component, NgModule, ViewEncapsulation, booleanAttribute, input } from "@angular/core";
import { NzIconDirective, NzIconModule } from "ng-zorro-antd/icon";
import { CommonModule } from "@angular/common";
var TrendComponent = class TrendComponent {
	flag = input(...ngDevMode ? [void 0, { debugName: "flag" }] : /* istanbul ignore next */ []);
	colorful = input(true, {
		...ngDevMode ? { debugName: "colorful" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	reverseColor = input(false, {
		...ngDevMode ? { debugName: "reverseColor" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: TrendComponent,
		deps: [],
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "17.0.0",
		version: "22.2.0",
		type: TrendComponent,
		isStandalone: true,
		selector: "trend",
		inputs: {
			flag: {
				classPropertyName: "flag",
				publicName: "flag",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			colorful: {
				classPropertyName: "colorful",
				publicName: "colorful",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			reverseColor: {
				classPropertyName: "reverseColor",
				publicName: "reverseColor",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			}
		},
		host: { properties: {
			"class.trend": "true",
			"class.trend__grey": "!colorful()",
			"class.trend__reverse": "colorful() && reverseColor()",
			"attr.data-flag": "flag()"
		} },
		exportAs: ["trend"],
		ngImport: i0,
		template: `
    <ng-content />
    @if (flag()) {
      <span class="trend__{{ flag() }}"><nz-icon nzType="caret-{{ flag() }}" /></span>
    }
  `,
		isInline: true,
		dependencies: [{
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
	type: TrendComponent,
	decorators: [{
		type: Component,
		args: [{
			selector: "trend",
			exportAs: "trend",
			template: `
    <ng-content />
    @if (flag()) {
      <span class="trend__{{ flag() }}"><nz-icon nzType="caret-{{ flag() }}" /></span>
    }
  `,
			host: {
				"[class.trend]": "true",
				"[class.trend__grey]": "!colorful()",
				"[class.trend__reverse]": "colorful() && reverseColor()",
				"[attr.data-flag]": `flag()`
			},
			changeDetection: ChangeDetectionStrategy.OnPush,
			encapsulation: ViewEncapsulation.None,
			imports: [NzIconDirective]
		}]
	}],
	propDecorators: {
		flag: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "flag",
				required: false
			}]
		}],
		colorful: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "colorful",
				required: false
			}]
		}],
		reverseColor: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "reverseColor",
				required: false
			}]
		}]
	}
});
const COMPONENTS = [TrendComponent];
var TrendModule = class TrendModule {
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: TrendModule,
		deps: [],
		target: i0.ɵɵFactoryTarget.NgModule
	});
	static ɵmod = i0.ɵɵngDeclareNgModule({
		minVersion: "14.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: TrendModule,
		imports: [
			CommonModule,
			NzIconModule,
			TrendComponent
		],
		exports: [TrendComponent]
	});
	static ɵinj = i0.ɵɵngDeclareInjector({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: TrendModule,
		imports: [CommonModule, NzIconModule]
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: TrendModule,
	decorators: [{
		type: NgModule,
		args: [{
			imports: [
				CommonModule,
				NzIconModule,
				...COMPONENTS
			],
			exports: COMPONENTS
		}]
	}]
});
export { TrendComponent, TrendModule };

//# sourceMappingURL=trend.mjs.map