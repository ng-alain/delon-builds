import * as i0 from "@angular/core";
import { ChangeDetectionStrategy, Component, NgModule, ViewEncapsulation, input, numberAttribute } from "@angular/core";
import { G2BaseComponent, viewSpec } from "@delon/chart/core";
import { NzSkeletonComponent, NzSkeletonModule } from "ng-zorro-antd/skeleton";
import { CommonModule } from "@angular/common";
var G2GaugeComponent = class G2GaugeComponent extends G2BaseComponent {
	title = input(...ngDevMode ? [void 0, { debugName: "title" }] : /* istanbul ignore next */ []);
	height = input(void 0, {
		...ngDevMode ? { debugName: "height" } : /* istanbul ignore next */ {},
		transform: numberAttribute
	});
	width = input(void 0, {
		...ngDevMode ? { debugName: "width" } : /* istanbul ignore next */ {},
		transform: numberAttribute
	});
	fontSize = input(14, {
		...ngDevMode ? { debugName: "fontSize" } : /* istanbul ignore next */ {},
		transform: numberAttribute
	});
	color = input("#2f9cff", ...ngDevMode ? [{ debugName: "color" }] : /* istanbul ignore next */ []);
	bgColor = input("#f0f2f5", ...ngDevMode ? [{ debugName: "bgColor" }] : /* istanbul ignore next */ []);
	format = input(...ngDevMode ? [void 0, { debugName: "format" }] : /* istanbul ignore next */ []);
	percent = input(void 0, {
		...ngDevMode ? { debugName: "percent" } : /* istanbul ignore next */ {},
		transform: numberAttribute
	});
	padding = input(16, ...ngDevMode ? [{ debugName: "padding" }] : /* istanbul ignore next */ []);
	buildSpec() {
		const { percent, color, bgColor, title, theme, padding, height, width, format } = this;
		return {
			...viewSpec({
				theme: theme(),
				padding: padding(),
				height: height(),
				width: width(),
				animate: false
			}),
			legend: false,
			tooltip: false,
			children: [{
				type: "gauge",
				animate: false,
				data: { value: {
					target: percent() ?? 0,
					total: 100,
					name: title()
				} },
				scale: { color: { range: [color(), bgColor()] } },
				style: {
					arcShape: "round",
					arcLineWidth: 2,
					pinR: 4,
					textContent: () => ""
				},
				axis: { y: {
					tick: false,
					labelSpacing: -30,
					labelAlign: "horizontal",
					...format() ? { labelFormatter: format() } : {}
				} },
				tooltip: false
			}]
		};
	}
	centerTop() {
		const raw = this.padding();
		const h = this.height() ?? 0;
		const p = typeof raw === "number" ? raw : 0;
		if (h <= 0) return 0;
		const padTop = Math.round((h + p) / 3);
		const radius = (h - padTop - p) / 2;
		return Math.round(padTop + radius);
	}
	titleColor() {
		return this.theme() === "dark" ? "rgba(255,255,255,0.45)" : "rgba(0,0,0,0.45)";
	}
	valueColor() {
		return this.theme() === "dark" ? "rgba(255,255,255,0.85)" : "rgba(0,0,0,0.85)";
	}
	isDataOnly() {
		return false;
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: G2GaugeComponent,
		deps: null,
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "17.0.0",
		version: "22.2.0",
		type: G2GaugeComponent,
		isStandalone: true,
		selector: "g2-gauge",
		inputs: {
			title: {
				classPropertyName: "title",
				publicName: "title",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			height: {
				classPropertyName: "height",
				publicName: "height",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			width: {
				classPropertyName: "width",
				publicName: "width",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			fontSize: {
				classPropertyName: "fontSize",
				publicName: "fontSize",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			color: {
				classPropertyName: "color",
				publicName: "color",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			bgColor: {
				classPropertyName: "bgColor",
				publicName: "bgColor",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			format: {
				classPropertyName: "format",
				publicName: "format",
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
			padding: {
				classPropertyName: "padding",
				publicName: "padding",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			}
		},
		host: {
			properties: {
				"style.width.px": "width()",
				"style.height.px": "height()",
				"style.font-size.px": "fontSize()",
				"style.position": "\"relative\""
			},
			classAttribute: "g2-gauge"
		},
		exportAs: ["g2Gauge"],
		usesInheritance: true,
		ngImport: i0,
		template: `
    @if (!loaded()) {
      <div style="position: absolute; inset: 0; z-index: 1;">
        <nz-skeleton />
      </div>
    }
    <div
      class="g2-gauge__center"
      [style.top.px]="centerTop()"
      style="position: absolute; left: 50%; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; pointer-events: none; white-space: nowrap;"
    >
      @if (title()) {
        <span style="font-size: .8em;" [style.color]="titleColor()">{{ title() }}</span>
      }
      <span style="font-size: 1.4em;" [style.color]="valueColor()">{{ percent() ?? 0 }} %</span>
    </div>
  `,
		isInline: true,
		dependencies: [{
			kind: "component",
			type: NzSkeletonComponent,
			selector: "nz-skeleton",
			inputs: [
				"nzActive",
				"nzLoading",
				"nzRound",
				"nzTitle",
				"nzAvatar",
				"nzParagraph"
			],
			exportAs: ["nzSkeleton"]
		}],
		changeDetection: i0.ChangeDetectionStrategy.OnPush,
		encapsulation: i0.ViewEncapsulation.None
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: G2GaugeComponent,
	decorators: [{
		type: Component,
		args: [{
			selector: "g2-gauge",
			exportAs: "g2Gauge",
			template: `
    @if (!loaded()) {
      <div style="position: absolute; inset: 0; z-index: 1;">
        <nz-skeleton />
      </div>
    }
    <div
      class="g2-gauge__center"
      [style.top.px]="centerTop()"
      style="position: absolute; left: 50%; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; pointer-events: none; white-space: nowrap;"
    >
      @if (title()) {
        <span style="font-size: .8em;" [style.color]="titleColor()">{{ title() }}</span>
      }
      <span style="font-size: 1.4em;" [style.color]="valueColor()">{{ percent() ?? 0 }} %</span>
    </div>
  `,
			host: {
				class: "g2-gauge",
				"[style.width.px]": "width()",
				"[style.height.px]": "height()",
				"[style.font-size.px]": "fontSize()",
				"[style.position]": "\"relative\""
			},
			changeDetection: ChangeDetectionStrategy.OnPush,
			encapsulation: ViewEncapsulation.None,
			imports: [NzSkeletonComponent]
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
		height: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "height",
				required: false
			}]
		}],
		width: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "width",
				required: false
			}]
		}],
		fontSize: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "fontSize",
				required: false
			}]
		}],
		color: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "color",
				required: false
			}]
		}],
		bgColor: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "bgColor",
				required: false
			}]
		}],
		format: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "format",
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
		padding: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "padding",
				required: false
			}]
		}]
	}
});
const COMPONENTS = [G2GaugeComponent];
var G2GaugeModule = class G2GaugeModule {
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: G2GaugeModule,
		deps: [],
		target: i0.ɵɵFactoryTarget.NgModule
	});
	static ɵmod = i0.ɵɵngDeclareNgModule({
		minVersion: "14.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: G2GaugeModule,
		imports: [
			CommonModule,
			NzSkeletonModule,
			G2GaugeComponent
		],
		exports: [G2GaugeComponent]
	});
	static ɵinj = i0.ɵɵngDeclareInjector({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: G2GaugeModule,
		imports: [
			CommonModule,
			NzSkeletonModule,
			COMPONENTS
		]
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: G2GaugeModule,
	decorators: [{
		type: NgModule,
		args: [{
			imports: [
				CommonModule,
				NzSkeletonModule,
				...COMPONENTS
			],
			exports: COMPONENTS
		}]
	}]
});
export { G2GaugeComponent, G2GaugeModule };

//# sourceMappingURL=gauge.mjs.map