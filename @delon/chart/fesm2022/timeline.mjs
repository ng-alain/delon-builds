import * as i0 from "@angular/core";
import { ChangeDetectionStrategy, Component, NgModule, ViewEncapsulation, booleanAttribute, input, numberAttribute, output } from "@angular/core";
import { format } from "date-fns";
import { G2BaseComponent, genMiniTooltipOptions, viewSpec } from "@delon/chart/core";
import { toDate } from "@delon/util/date-time";
import { NzOutletModule, NzStringTemplateOutletDirective } from "ng-zorro-antd/core/outlet";
import { NzSkeletonComponent, NzSkeletonModule } from "ng-zorro-antd/skeleton";
import { CommonModule } from "@angular/common";
var G2TimelineComponent = class G2TimelineComponent extends G2BaseComponent {
	title = input(...ngDevMode ? [void 0, { debugName: "title" }] : /* istanbul ignore next */ []);
	maxAxis = input(2, {
		...ngDevMode ? { debugName: "maxAxis" } : /* istanbul ignore next */ {},
		transform: numberAttribute
	});
	data = input([], ...ngDevMode ? [{ debugName: "data" }] : /* istanbul ignore next */ []);
	titleMap = input(...ngDevMode ? [void 0, { debugName: "titleMap" }] : /* istanbul ignore next */ []);
	colorMap = input({
		y1: "#5B8FF9",
		y2: "#5AD8A6",
		y3: "#5D7092",
		y4: "#F6BD16",
		y5: "#E86452"
	}, ...ngDevMode ? [{ debugName: "colorMap" }] : /* istanbul ignore next */ []);
	mask = input("HH:mm", ...ngDevMode ? [{ debugName: "mask" }] : /* istanbul ignore next */ []);
	maskSlider = input("HH:mm", ...ngDevMode ? [{ debugName: "maskSlider" }] : /* istanbul ignore next */ []);
	position = input("top", ...ngDevMode ? [{ debugName: "position" }] : /* istanbul ignore next */ []);
	height = input(450, {
		...ngDevMode ? { debugName: "height" } : /* istanbul ignore next */ {},
		transform: numberAttribute
	});
	padding = input([
		40,
		8,
		64,
		40
	], ...ngDevMode ? [{ debugName: "padding" }] : /* istanbul ignore next */ []);
	borderWidth = input(2, {
		...ngDevMode ? { debugName: "borderWidth" } : /* istanbul ignore next */ {},
		transform: numberAttribute
	});
	slider = input(true, {
		...ngDevMode ? { debugName: "slider" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	clickItem = output();
	containerOf() {
		return this.node().nativeElement;
	}
	foldedData() {
		const { data, maxAxis, titleMap } = this;
		const axes = [...Array(maxAxis())].map((_, index) => `y${index + 1}`);
		const list = data().map((item) => {
			const time = toDate(item.time);
			return {
				...item,
				time,
				_time: +time
			};
		}).sort((a, b) => a._time - b._time);
		const seriesNames = axes.map((key) => titleMap()?.[key] ?? key);
		const folded = [];
		list.forEach((row) => {
			axes.forEach((key, index) => {
				folded.push({
					time: row.time,
					series: seriesNames[index],
					value: row[key]
				});
			});
		});
		return {
			axes,
			seriesNames,
			list,
			folded
		};
	}
	buildSpec() {
		const { padding, slider, theme, mask, position, colorMap, borderWidth, height } = this;
		const { axes, seriesNames, list, folded } = this.foldedData();
		const max = list.length === 0 ? 0 : Math.max(...axes.map((key) => Math.max(...list.map((d) => d[key]))));
		const scale = {
			x: {
				type: "time",
				mask: mask(),
				range: [0, 1]
			},
			y: { domain: [0, max || 1] }
		};
		const axis = {
			x: {
				title: false,
				size: 20
			},
			y: { title: false }
		};
		scale["color"] = {
			domain: seriesNames,
			range: axes.map((key) => colorMap()[key])
		};
		const children = [{
			type: "line",
			encode: {
				x: "time",
				y: "value",
				color: "series"
			},
			style: { lineWidth: borderWidth() }
		}];
		const tooltipOptions = genMiniTooltipOptions("default", { crosshairs: true });
		return {
			...viewSpec({
				theme: theme(),
				padding: padding(),
				height: height()
			}),
			...tooltipOptions,
			data: folded,
			scale,
			axis,
			legend: { color: { position: position() } },
			slider: slider() ? { x: {
				values: [0, 1],
				labelFormatter: (val) => format(val, this.maskSlider())
			} } : false,
			interaction: {
				...tooltipOptions["interaction"],
				legendFilter: true
			},
			children
		};
	}
	dataOf() {
		return this.foldedData().folded;
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
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: G2TimelineComponent,
		deps: null,
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "17.0.0",
		version: "22.2.0",
		type: G2TimelineComponent,
		isStandalone: true,
		selector: "g2-timeline",
		inputs: {
			title: {
				classPropertyName: "title",
				publicName: "title",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			maxAxis: {
				classPropertyName: "maxAxis",
				publicName: "maxAxis",
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
			titleMap: {
				classPropertyName: "titleMap",
				publicName: "titleMap",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			colorMap: {
				classPropertyName: "colorMap",
				publicName: "colorMap",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			mask: {
				classPropertyName: "mask",
				publicName: "mask",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			maskSlider: {
				classPropertyName: "maskSlider",
				publicName: "maskSlider",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			position: {
				classPropertyName: "position",
				publicName: "position",
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
			padding: {
				classPropertyName: "padding",
				publicName: "padding",
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
			slider: {
				classPropertyName: "slider",
				publicName: "slider",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			}
		},
		outputs: { clickItem: "clickItem" },
		host: { properties: { "style.position": "\"relative\"" } },
		exportAs: ["g2Timeline"],
		usesInheritance: true,
		ngImport: i0,
		template: `
    <ng-container *nzStringTemplateOutlet="title()">
      <h4>{{ title() }}</h4>
    </ng-container>
    @if (!loaded()) {
      <div style="position: absolute; inset: 0; z-index: 1;">
        <nz-skeleton />
      </div>
    }
    <div #container></div>
  `,
		isInline: true,
		dependencies: [{
			kind: "directive",
			type: NzStringTemplateOutletDirective,
			selector: "[nzStringTemplateOutlet]",
			inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"],
			exportAs: ["nzStringTemplateOutlet"]
		}, {
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
	type: G2TimelineComponent,
	decorators: [{
		type: Component,
		args: [{
			selector: "g2-timeline",
			exportAs: "g2Timeline",
			template: `
    <ng-container *nzStringTemplateOutlet="title()">
      <h4>{{ title() }}</h4>
    </ng-container>
    @if (!loaded()) {
      <div style="position: absolute; inset: 0; z-index: 1;">
        <nz-skeleton />
      </div>
    }
    <div #container></div>
  `,
			host: { "[style.position]": "\"relative\"" },
			changeDetection: ChangeDetectionStrategy.OnPush,
			encapsulation: ViewEncapsulation.None,
			imports: [NzStringTemplateOutletDirective, NzSkeletonComponent]
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
		maxAxis: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "maxAxis",
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
		titleMap: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "titleMap",
				required: false
			}]
		}],
		colorMap: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "colorMap",
				required: false
			}]
		}],
		mask: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "mask",
				required: false
			}]
		}],
		maskSlider: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "maskSlider",
				required: false
			}]
		}],
		position: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "position",
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
		padding: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "padding",
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
		slider: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "slider",
				required: false
			}]
		}],
		clickItem: [{
			type: i0.Output,
			args: ["clickItem"]
		}]
	}
});
const COMPONENTS = [G2TimelineComponent];
var G2TimelineModule = class G2TimelineModule {
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: G2TimelineModule,
		deps: [],
		target: i0.ɵɵFactoryTarget.NgModule
	});
	static ɵmod = i0.ɵɵngDeclareNgModule({
		minVersion: "14.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: G2TimelineModule,
		imports: [
			CommonModule,
			NzOutletModule,
			NzSkeletonModule,
			G2TimelineComponent
		],
		exports: [G2TimelineComponent]
	});
	static ɵinj = i0.ɵɵngDeclareInjector({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: G2TimelineModule,
		imports: [
			CommonModule,
			NzOutletModule,
			NzSkeletonModule,
			COMPONENTS
		]
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: G2TimelineModule,
	decorators: [{
		type: NgModule,
		args: [{
			imports: [
				CommonModule,
				NzOutletModule,
				NzSkeletonModule,
				...COMPONENTS
			],
			exports: COMPONENTS
		}]
	}]
});
export { G2TimelineComponent, G2TimelineModule };

//# sourceMappingURL=timeline.mjs.map