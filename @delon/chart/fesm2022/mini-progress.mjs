import * as i0 from "@angular/core";
import { ChangeDetectionStrategy, Component, NgModule, ViewEncapsulation, computed, inject, input, numberAttribute } from "@angular/core";
import { DelonLocaleModule, DelonLocaleService } from "@delon/theme";
import { NzTooltipDirective, NzTooltipModule } from "ng-zorro-antd/tooltip";
import { CommonModule } from "@angular/common";
var G2MiniProgressComponent = class G2MiniProgressComponent {
	locale = inject(DelonLocaleService).valueSignal("miniProgress");
	color = input("#1890FF", ...ngDevMode ? [{ debugName: "color" }] : /* istanbul ignore next */ []);
	target = input(null, {
		...ngDevMode ? { debugName: "target" } : /* istanbul ignore next */ {},
		transform: numberAttribute
	});
	percent = input(null, {
		...ngDevMode ? { debugName: "percent" } : /* istanbul ignore next */ {},
		transform: numberAttribute
	});
	strokeWidth = input(null, {
		...ngDevMode ? { debugName: "strokeWidth" } : /* istanbul ignore next */ {},
		transform: numberAttribute
	});
	_target = computed(() => this.fixNum(this.target()), ...ngDevMode ? [{ debugName: "_target" }] : /* istanbul ignore next */ []);
	_percent = computed(() => this.fixNum(this.percent()), ...ngDevMode ? [{ debugName: "_percent" }] : /* istanbul ignore next */ []);
	fixNum(value) {
		return Math.min(Math.max(numberAttribute(value), 0), 100);
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: G2MiniProgressComponent,
		deps: [],
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "17.1.0",
		version: "22.2.0",
		type: G2MiniProgressComponent,
		isStandalone: true,
		selector: "g2-mini-progress",
		inputs: {
			color: {
				classPropertyName: "color",
				publicName: "color",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			target: {
				classPropertyName: "target",
				publicName: "target",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			percent: {
				classPropertyName: "percent",
				publicName: "percent",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			strokeWidth: {
				classPropertyName: "strokeWidth",
				publicName: "strokeWidth",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			}
		},
		host: { properties: { "class.g2-mini-progress": "true" } },
		exportAs: ["g2MiniProgress"],
		ngImport: i0,
		template: `
    <div
      nz-tooltip
      [nzTooltipTitle]="locale().targetSuffix + _target() + '%'"
      class="g2-mini-progress__target"
      [style]="{ left: _target() + '%' }"
    >
      <span class="g2-mini-progress__target-item" [style]="{ 'background-color': color() }"></span>
      <span class="g2-mini-progress__target-item" [style]="{ 'background-color': color() }"></span>
    </div>
    <div class="g2-mini-progress__wrap">
      <div
        class="g2-mini-progress__value"
        [style]="{ 'background-color': color(), width: _percent() + '%', height: strokeWidth() + 'px' }"
      ></div>
    </div>
  `,
		isInline: true,
		dependencies: [{
			kind: "directive",
			type: NzTooltipDirective,
			selector: "[nz-tooltip]",
			inputs: [
				"nzTooltipTitle",
				"nzTooltipTitleContext",
				"nz-tooltip",
				"nzTooltipTrigger",
				"nzTooltipPlacement",
				"nzTooltipOrigin",
				"nzTooltipVisible",
				"nzTooltipMouseEnterDelay",
				"nzTooltipMouseLeaveDelay",
				"nzTooltipOverlayClassName",
				"nzTooltipOverlayStyle",
				"nzTooltipArrowPointAtCenter",
				"nzTooltipColor"
			],
			outputs: ["nzTooltipVisibleChange"],
			exportAs: ["nzTooltip"]
		}],
		changeDetection: i0.ChangeDetectionStrategy.OnPush,
		encapsulation: i0.ViewEncapsulation.None
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: G2MiniProgressComponent,
	decorators: [{
		type: Component,
		args: [{
			selector: "g2-mini-progress",
			exportAs: "g2MiniProgress",
			template: `
    <div
      nz-tooltip
      [nzTooltipTitle]="locale().targetSuffix + _target() + '%'"
      class="g2-mini-progress__target"
      [style]="{ left: _target() + '%' }"
    >
      <span class="g2-mini-progress__target-item" [style]="{ 'background-color': color() }"></span>
      <span class="g2-mini-progress__target-item" [style]="{ 'background-color': color() }"></span>
    </div>
    <div class="g2-mini-progress__wrap">
      <div
        class="g2-mini-progress__value"
        [style]="{ 'background-color': color(), width: _percent() + '%', height: strokeWidth() + 'px' }"
      ></div>
    </div>
  `,
			host: { "[class.g2-mini-progress]": "true" },
			changeDetection: ChangeDetectionStrategy.OnPush,
			encapsulation: ViewEncapsulation.None,
			imports: [NzTooltipDirective]
		}]
	}],
	propDecorators: {
		color: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "color",
				required: false
			}]
		}],
		target: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "target",
				required: false
			}]
		}],
		percent: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "percent",
				required: false
			}]
		}],
		strokeWidth: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "strokeWidth",
				required: false
			}]
		}]
	}
});
const COMPONENTS = [G2MiniProgressComponent];
var G2MiniProgressModule = class G2MiniProgressModule {
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: G2MiniProgressModule,
		deps: [],
		target: i0.ɵɵFactoryTarget.NgModule
	});
	static ɵmod = i0.ɵɵngDeclareNgModule({
		minVersion: "14.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: G2MiniProgressModule,
		imports: [
			CommonModule,
			DelonLocaleModule,
			NzTooltipModule,
			G2MiniProgressComponent
		],
		exports: [G2MiniProgressComponent]
	});
	static ɵinj = i0.ɵɵngDeclareInjector({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: G2MiniProgressModule,
		imports: [
			CommonModule,
			DelonLocaleModule,
			NzTooltipModule
		]
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: G2MiniProgressModule,
	decorators: [{
		type: NgModule,
		args: [{
			imports: [
				CommonModule,
				DelonLocaleModule,
				NzTooltipModule,
				...COMPONENTS
			],
			exports: COMPONENTS
		}]
	}]
});
export { G2MiniProgressComponent, G2MiniProgressModule };

//# sourceMappingURL=mini-progress.mjs.map