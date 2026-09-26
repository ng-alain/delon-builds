import * as i0 from "@angular/core";
import { ChangeDetectionStrategy, Component, NgModule, ViewEncapsulation, booleanAttribute, input, numberAttribute } from "@angular/core";
import { G2BaseComponent, viewSpec } from "@delon/chart/core";
import { CommonModule } from "@angular/common";
var G2SingleBarComponent = class G2SingleBarComponent extends G2BaseComponent {
	plusColor = input("#40a9ff", ...ngDevMode ? [{ debugName: "plusColor" }] : /* istanbul ignore next */ []);
	minusColor = input("#ff4d4f", ...ngDevMode ? [{ debugName: "minusColor" }] : /* istanbul ignore next */ []);
	height = input(60, {
		...ngDevMode ? { debugName: "height" } : /* istanbul ignore next */ {},
		transform: numberAttribute
	});
	barSize = input(30, {
		...ngDevMode ? { debugName: "barSize" } : /* istanbul ignore next */ {},
		transform: numberAttribute
	});
	min = input(0, {
		...ngDevMode ? { debugName: "min" } : /* istanbul ignore next */ {},
		transform: numberAttribute
	});
	max = input(100, {
		...ngDevMode ? { debugName: "max" } : /* istanbul ignore next */ {},
		transform: numberAttribute
	});
	value = input(0, {
		...ngDevMode ? { debugName: "value" } : /* istanbul ignore next */ {},
		transform: numberAttribute
	});
	line = input(false, {
		...ngDevMode ? { debugName: "line" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	format = input(...ngDevMode ? [void 0, { debugName: "format" }] : /* istanbul ignore next */ []);
	padding = input(0, ...ngDevMode ? [{ debugName: "padding" }] : /* istanbul ignore next */ []);
	textStyle = input({
		fontSize: 12,
		color: "#595959"
	}, ...ngDevMode ? [{ debugName: "textStyle" }] : /* istanbul ignore next */ []);
	buildSpec() {
		const { value, min, max, plusColor, minusColor, barSize, format, textStyle, line, theme, padding, height } = this;
		const children = [{
			type: "interval",
			data: [{ value: value() }],
			encode: {
				x: {
					type: "constant",
					value: "1"
				},
				y: "value",
				color: {
					type: "transform",
					value: (d) => d.value > 0 ? plusColor() : minusColor()
				}
			},
			style: {
				minWidth: barSize(),
				maxWidth: barSize()
			},
			labels: [{
				text: "value",
				formatter: format(),
				style: { ...textStyle() }
			}],
			scale: {
				y: { domain: [min(), max()] },
				color: { type: "identity" }
			},
			legend: false,
			axis: false,
			tooltip: false
		}];
		if (line()) children.push({
			type: "lineY",
			data: [(min() + max()) / 2],
			style: {
				stroke: "#e8e8e8",
				lineWidth: 1
			}
		});
		return {
			...viewSpec({
				theme: theme(),
				padding: padding(),
				height: height()
			}),
			coordinate: { transform: [{ type: "transpose" }] },
			children
		};
	}
	dataOf() {
		return [{ value: this.value() }];
	}
	isDataOnly(changed) {
		if (this.line()) return false;
		return changed.length === 1 && Object.is(changed[0], this.value);
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: G2SingleBarComponent,
		deps: null,
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "17.1.0",
		version: "22.2.0",
		type: G2SingleBarComponent,
		isStandalone: true,
		selector: "g2-single-bar",
		inputs: {
			plusColor: {
				classPropertyName: "plusColor",
				publicName: "plusColor",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			minusColor: {
				classPropertyName: "minusColor",
				publicName: "minusColor",
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
			barSize: {
				classPropertyName: "barSize",
				publicName: "barSize",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			min: {
				classPropertyName: "min",
				publicName: "min",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			max: {
				classPropertyName: "max",
				publicName: "max",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			value: {
				classPropertyName: "value",
				publicName: "value",
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
			format: {
				classPropertyName: "format",
				publicName: "format",
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
			textStyle: {
				classPropertyName: "textStyle",
				publicName: "textStyle",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			}
		},
		host: { properties: { "style.height.px": "height()" } },
		exportAs: ["g2SingleBar"],
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
	type: G2SingleBarComponent,
	decorators: [{
		type: Component,
		args: [{
			selector: "g2-single-bar",
			exportAs: "g2SingleBar",
			template: ``,
			host: { "[style.height.px]": "height()" },
			changeDetection: ChangeDetectionStrategy.OnPush,
			encapsulation: ViewEncapsulation.None
		}]
	}],
	propDecorators: {
		plusColor: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "plusColor",
				required: false
			}]
		}],
		minusColor: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "minusColor",
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
		barSize: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "barSize",
				required: false
			}]
		}],
		min: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "min",
				required: false
			}]
		}],
		max: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "max",
				required: false
			}]
		}],
		value: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "value",
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
		format: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "format",
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
		textStyle: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "textStyle",
				required: false
			}]
		}]
	}
});
const COMPONENTS = [G2SingleBarComponent];
var G2SingleBarModule = class G2SingleBarModule {
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: G2SingleBarModule,
		deps: [],
		target: i0.ɵɵFactoryTarget.NgModule
	});
	static ɵmod = i0.ɵɵngDeclareNgModule({
		minVersion: "14.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: G2SingleBarModule,
		imports: [CommonModule, G2SingleBarComponent],
		exports: [G2SingleBarComponent]
	});
	static ɵinj = i0.ɵɵngDeclareInjector({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: G2SingleBarModule,
		imports: [CommonModule]
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: G2SingleBarModule,
	decorators: [{
		type: NgModule,
		args: [{
			imports: [CommonModule, ...COMPONENTS],
			exports: COMPONENTS
		}]
	}]
});
export { G2SingleBarComponent, G2SingleBarModule };

//# sourceMappingURL=single-bar.mjs.map