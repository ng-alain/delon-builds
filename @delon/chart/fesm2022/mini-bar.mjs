import * as i0 from "@angular/core";
import { ChangeDetectionStrategy, Component, NgModule, ViewEncapsulation, input, numberAttribute, output } from "@angular/core";
import { G2BaseComponent, genMiniTooltipOptions, viewSpec } from "@delon/chart/core";
import { CommonModule } from "@angular/common";
var G2MiniBarComponent = class G2MiniBarComponent extends G2BaseComponent {
	color = input("#1890FF", ...ngDevMode ? [{ debugName: "color" }] : /* istanbul ignore next */ []);
	height = input(0, {
		...ngDevMode ? { debugName: "height" } : /* istanbul ignore next */ {},
		transform: numberAttribute
	});
	borderWidth = input(5, {
		...ngDevMode ? { debugName: "borderWidth" } : /* istanbul ignore next */ {},
		transform: numberAttribute
	});
	padding = input([
		8,
		8,
		8,
		8
	], ...ngDevMode ? [{ debugName: "padding" }] : /* istanbul ignore next */ []);
	data = input([], ...ngDevMode ? [{ debugName: "data" }] : /* istanbul ignore next */ []);
	yTooltipSuffix = input("", ...ngDevMode ? [{ debugName: "yTooltipSuffix" }] : /* istanbul ignore next */ []);
	tooltipType = input("default", ...ngDevMode ? [{ debugName: "tooltipType" }] : /* istanbul ignore next */ []);
	clickItem = output();
	buildSpec() {
		const { color, data, borderWidth, yTooltipSuffix, tooltipType, theme, padding, height } = this;
		return {
			...viewSpec({
				theme: theme(),
				padding: padding(),
				height: height()
			}),
			...genMiniTooltipOptions(tooltipType(), { crosshairs: false }),
			data: data(),
			scale: {
				x: { type: "band" },
				y: { zero: true }
			},
			legend: false,
			axis: false,
			children: [{
				type: "interval",
				encode: {
					x: "x",
					y: "y",
					size: borderWidth(),
					color: {
						type: "transform",
						value: (d) => d.color || color()
					}
				},
				tooltip: { items: [(d) => ({
					name: d.x,
					value: d.y + yTooltipSuffix()
				})] }
			}]
		};
	}
	afterCreate(chart) {
		chart.on("interval:click", (ev) => {
			this.clickItem.emit({
				item: ev.data?.data,
				ev
			});
		});
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: G2MiniBarComponent,
		deps: null,
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "17.1.0",
		version: "22.2.0",
		type: G2MiniBarComponent,
		isStandalone: true,
		selector: "g2-mini-bar",
		inputs: {
			color: {
				classPropertyName: "color",
				publicName: "color",
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
			borderWidth: {
				classPropertyName: "borderWidth",
				publicName: "borderWidth",
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
			},
			data: {
				classPropertyName: "data",
				publicName: "data",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			yTooltipSuffix: {
				classPropertyName: "yTooltipSuffix",
				publicName: "yTooltipSuffix",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			tooltipType: {
				classPropertyName: "tooltipType",
				publicName: "tooltipType",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			}
		},
		outputs: { clickItem: "clickItem" },
		host: { properties: { "style.height.px": "height()" } },
		exportAs: ["g2MiniBar"],
		usesInheritance: true,
		ngImport: i0,
		template: ``,
		isInline: true,
		changeDetection: i0.ChangeDetectionStrategy.OnPush,
		encapsulation: i0.ViewEncapsulation.None
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: G2MiniBarComponent,
	decorators: [{
		type: Component,
		args: [{
			selector: "g2-mini-bar",
			exportAs: "g2MiniBar",
			template: ``,
			host: { "[style.height.px]": "height()" },
			changeDetection: ChangeDetectionStrategy.OnPush,
			encapsulation: ViewEncapsulation.None
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
		height: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "height",
				required: false
			}]
		}],
		borderWidth: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "borderWidth",
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
		}],
		data: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "data",
				required: false
			}]
		}],
		yTooltipSuffix: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "yTooltipSuffix",
				required: false
			}]
		}],
		tooltipType: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "tooltipType",
				required: false
			}]
		}],
		clickItem: [{
			type: i0.Output,
			args: ["clickItem"]
		}]
	}
});
const COMPONENTS = [G2MiniBarComponent];
var G2MiniBarModule = class G2MiniBarModule {
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: G2MiniBarModule,
		deps: [],
		target: i0.ɵɵFactoryTarget.NgModule
	});
	static ɵmod = i0.ɵɵngDeclareNgModule({
		minVersion: "14.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: G2MiniBarModule,
		imports: [CommonModule, G2MiniBarComponent],
		exports: [G2MiniBarComponent]
	});
	static ɵinj = i0.ɵɵngDeclareInjector({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: G2MiniBarModule,
		imports: [CommonModule]
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: G2MiniBarModule,
	decorators: [{
		type: NgModule,
		args: [{
			imports: [CommonModule, ...COMPONENTS],
			exports: COMPONENTS
		}]
	}]
});
export { G2MiniBarComponent, G2MiniBarModule };

//# sourceMappingURL=mini-bar.mjs.map