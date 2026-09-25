import * as i0 from "@angular/core";
import { ChangeDetectionStrategy, Component, NgModule, ViewEncapsulation, booleanAttribute, input, numberAttribute, output } from "@angular/core";
import { G2BaseComponent, genMiniTooltipOptions, viewSpec } from "@delon/chart/core";
import { CommonModule } from "@angular/common";
var G2MiniAreaComponent = class G2MiniAreaComponent extends G2BaseComponent {
	color = input("rgba(24, 144, 255, 0.2)", ...ngDevMode ? [{ debugName: "color" }] : /* istanbul ignore next */ []);
	borderColor = input("#1890FF", ...ngDevMode ? [{ debugName: "borderColor" }] : /* istanbul ignore next */ []);
	borderWidth = input(2, {
		...ngDevMode ? { debugName: "borderWidth" } : /* istanbul ignore next */ {},
		transform: numberAttribute
	});
	height = input(56, {
		...ngDevMode ? { debugName: "height" } : /* istanbul ignore next */ {},
		transform: numberAttribute
	});
	fit = input(true, {
		...ngDevMode ? { debugName: "fit" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	line = input(false, {
		...ngDevMode ? { debugName: "line" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	animate = input(true, {
		...ngDevMode ? { debugName: "animate" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	xAxis = input(...ngDevMode ? [void 0, { debugName: "xAxis" }] : /* istanbul ignore next */ []);
	yAxis = input(...ngDevMode ? [void 0, { debugName: "yAxis" }] : /* istanbul ignore next */ []);
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
	chartOptions() {
		return {
			container: this.el.nativeElement,
			autoFit: this.fit()
		};
	}
	buildSpec() {
		const { data, fit, height, padding, xAxis, yAxis, yTooltipSuffix, tooltipType, line, theme, animate, color, borderColor, borderWidth } = this;
		const children = [{
			type: "area",
			encode: {
				x: "x",
				y: "y",
				shape: "smooth",
				color: {
					type: "constant",
					value: color()
				}
			},
			tooltip: {
				title: false,
				items: [(d) => ({
					name: d.x,
					value: d.y + yTooltipSuffix()
				})]
			}
		}];
		if (line()) children.push({
			type: "line",
			encode: {
				x: "x",
				y: "y",
				shape: "smooth",
				color: {
					type: "constant",
					value: borderColor()
				}
			},
			style: { lineWidth: borderWidth() },
			tooltip: false
		});
		const axis = {};
		if (!xAxis() && !yAxis()) {
			axis["x"] = false;
			axis["y"] = false;
		} else {
			axis["x"] = xAxis() ?? false;
			axis["y"] = yAxis() ?? false;
		}
		return {
			...viewSpec({
				theme: theme(),
				padding: padding(),
				height: height(),
				animate: animate(),
				autoFit: fit()
			}),
			...genMiniTooltipOptions(tooltipType()),
			data: data(),
			legend: false,
			axis,
			children
		};
	}
	afterCreate(chart) {
		chart.on("plot:click", (ev) => {
			const records = chart.getDataByXY({
				x: ev.x,
				y: ev.y
			});
			this.clickItem.emit({
				item: records[0],
				ev
			});
		});
	}
	isDataOnly(changed) {
		if (this.line()) return false;
		return changed.length > 0 && changed.every((s) => Object.is(s, this.data));
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: G2MiniAreaComponent,
		deps: null,
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "17.1.0",
		version: "22.2.0",
		type: G2MiniAreaComponent,
		isStandalone: true,
		selector: "g2-mini-area",
		inputs: {
			color: {
				classPropertyName: "color",
				publicName: "color",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			borderColor: {
				classPropertyName: "borderColor",
				publicName: "borderColor",
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
			height: {
				classPropertyName: "height",
				publicName: "height",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			fit: {
				classPropertyName: "fit",
				publicName: "fit",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			line: {
				classPropertyName: "line",
				publicName: "line",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			animate: {
				classPropertyName: "animate",
				publicName: "animate",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			xAxis: {
				classPropertyName: "xAxis",
				publicName: "xAxis",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			yAxis: {
				classPropertyName: "yAxis",
				publicName: "yAxis",
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
		exportAs: ["g2MiniArea"],
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
	type: G2MiniAreaComponent,
	decorators: [{
		type: Component,
		args: [{
			selector: "g2-mini-area",
			exportAs: "g2MiniArea",
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
		borderColor: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "borderColor",
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
		height: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "height",
				required: false
			}]
		}],
		fit: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "fit",
				required: false
			}]
		}],
		line: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "line",
				required: false
			}]
		}],
		animate: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "animate",
				required: false
			}]
		}],
		xAxis: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "xAxis",
				required: false
			}]
		}],
		yAxis: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "yAxis",
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
const COMPONENTS = [G2MiniAreaComponent];
var G2MiniAreaModule = class G2MiniAreaModule {
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: G2MiniAreaModule,
		deps: [],
		target: i0.ɵɵFactoryTarget.NgModule
	});
	static ɵmod = i0.ɵɵngDeclareNgModule({
		minVersion: "14.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: G2MiniAreaModule,
		imports: [CommonModule, G2MiniAreaComponent],
		exports: [G2MiniAreaComponent]
	});
	static ɵinj = i0.ɵɵngDeclareInjector({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: G2MiniAreaModule,
		imports: [CommonModule]
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: G2MiniAreaModule,
	decorators: [{
		type: NgModule,
		args: [{
			imports: [CommonModule, ...COMPONENTS],
			exports: COMPONENTS
		}]
	}]
});
export { G2MiniAreaComponent, G2MiniAreaModule };

//# sourceMappingURL=mini-area.mjs.map