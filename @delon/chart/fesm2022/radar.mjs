import * as i0 from "@angular/core";
import { ChangeDetectionStrategy, Component, NgModule, ViewEncapsulation, booleanAttribute, input, numberAttribute, output, signal } from "@angular/core";
import { G2BaseComponent, viewSpec } from "@delon/chart/core";
import { NzOutletModule, NzStringTemplateOutletDirective } from "ng-zorro-antd/core/outlet";
import { NzColDirective, NzGridModule, NzRowDirective } from "ng-zorro-antd/grid";
import { NzSkeletonComponent, NzSkeletonModule } from "ng-zorro-antd/skeleton";
import { CommonModule } from "@angular/common";
var G2RadarComponent = class G2RadarComponent extends G2BaseComponent {
	legendData = signal([], ...ngDevMode ? [{ debugName: "legendData" }] : /* istanbul ignore next */ []);
	title = input(...ngDevMode ? [void 0, { debugName: "title" }] : /* istanbul ignore next */ []);
	height = input(0, {
		...ngDevMode ? { debugName: "height" } : /* istanbul ignore next */ {},
		transform: numberAttribute
	});
	padding = input([
		44,
		30,
		16,
		30
	], ...ngDevMode ? [{ debugName: "padding" }] : /* istanbul ignore next */ []);
	hasLegend = input(true, {
		...ngDevMode ? { debugName: "hasLegend" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	tickCount = input(4, {
		...ngDevMode ? { debugName: "tickCount" } : /* istanbul ignore next */ {},
		transform: numberAttribute
	});
	data = input([], ...ngDevMode ? [{ debugName: "data" }] : /* istanbul ignore next */ []);
	colors = input([
		"#1890FF",
		"#FACC14",
		"#2FC25B",
		"#8543E0",
		"#F04864",
		"#13C2C2",
		"#fa8c16",
		"#a0d911"
	], ...ngDevMode ? [{ debugName: "colors" }] : /* istanbul ignore next */ []);
	clickItem = output();
	getHeight() {
		return this.height() - (this.hasLegend() ? 80 : 22);
	}
	containerOf() {
		return this.node().nativeElement;
	}
	filteredData() {
		const checkedNames = this.legendData().filter((w) => w.checked !== false).map((w) => w.name);
		return this.data().filter((d) => checkedNames.length === 0 || checkedNames.includes(d.name));
	}
	buildSpec() {
		const { colors, padding, theme, tickCount } = this;
		return {
			...viewSpec({
				theme: theme(),
				padding: padding(),
				height: this.getHeight(),
				autoFit: true
			}),
			data: this.filteredData(),
			coordinate: { type: "polar" },
			legend: false,
			axis: {
				x: {
					grid: true,
					gridStroke: "#e9e9e9",
					gridLineWidth: 1,
					labelSpacing: 8,
					line: false
				},
				y: {
					zIndex: 1,
					title: false,
					direction: "center",
					grid: true,
					gridStroke: "#e9e9e9",
					gridLineWidth: 1
				}
			},
			scale: {
				x: {
					padding: .5,
					align: 0
				},
				y: {
					zero: true,
					domainMin: 0,
					tickCount: tickCount()
				}
			},
			children: [{
				type: "line",
				encode: {
					x: "label",
					y: "value",
					color: "name"
				},
				scale: { color: { range: colors() } }
			}, {
				type: "point",
				encode: {
					x: "label",
					y: "value",
					color: "name",
					shape: "circle",
					size: 3
				},
				scale: { color: { range: colors() } }
			}]
		};
	}
	dataOf() {
		return this.filteredData();
	}
	onRendered() {
		this.genLegend();
	}
	onDataChange() {
		this.genLegend();
	}
	afterCreate(chart) {
		chart.on("point:click", (ev) => {
			this.clickItem.emit({
				item: ev.data?.data,
				ev
			});
		});
	}
	genLegend() {
		if (!this.hasLegend()) return;
		const colors = this.colors();
		const grouped = /* @__PURE__ */ new Map();
		this.data().forEach((item) => {
			const prev = grouped.get(item.name);
			grouped.set(item.name, {
				value: (prev?.value ?? 0) + item.value,
				color: colors[grouped.size % colors.length]
			});
		});
		this.legendData.set([...grouped.entries()].map(([name, v]) => ({
			name,
			color: v.color,
			checked: this.legendData().find((w) => w.name === name)?.checked !== false,
			value: v.value
		})));
	}
	_click(i) {
		const next = this.legendData().map((item, idx) => idx === i ? {
			...item,
			checked: item.checked === false
		} : item);
		this.legendData.set(next);
		this.repaintSpec();
	}
	onInputChanges() {
		this.legendData().forEach((i) => i.checked = true);
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: G2RadarComponent,
		deps: null,
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "17.0.0",
		version: "22.2.0",
		type: G2RadarComponent,
		isStandalone: true,
		selector: "g2-radar",
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
			padding: {
				classPropertyName: "padding",
				publicName: "padding",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			hasLegend: {
				classPropertyName: "hasLegend",
				publicName: "hasLegend",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			tickCount: {
				classPropertyName: "tickCount",
				publicName: "tickCount",
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
			colors: {
				classPropertyName: "colors",
				publicName: "colors",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			}
		},
		outputs: { clickItem: "clickItem" },
		host: { properties: {
			"style.height.px": "height()",
			"class.g2-radar": "true"
		} },
		exportAs: ["g2Radar"],
		usesInheritance: true,
		ngImport: i0,
		template: `
    @if (!loaded()) {
      <nz-skeleton />
    }
    <ng-container *nzStringTemplateOutlet="title()">
      <h4>{{ title() }}</h4>
    </ng-container>
    <div #container></div>
    @if (hasLegend()) {
      <div nz-row class="g2-radar__legend">
        @for (i of legendData(); track $index) {
          <div nz-col [nzSpan]="24 / $count" (click)="_click($index)" class="g2-radar__legend-item">
            <i class="g2-radar__legend-dot" [style]="{ 'background-color': !i.checked ? '#aaa' : i.color }"></i>
            {{ i.name }}
            <h6 class="g2-radar__legend-title">{{ i.value }}</h6>
          </div>
        }
      </div>
    }
  `,
		isInline: true,
		dependencies: [
			{
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
			},
			{
				kind: "directive",
				type: NzStringTemplateOutletDirective,
				selector: "[nzStringTemplateOutlet]",
				inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"],
				exportAs: ["nzStringTemplateOutlet"]
			},
			{
				kind: "directive",
				type: NzRowDirective,
				selector: "[nz-row],nz-row,nz-form-item",
				inputs: [
					"nzAlign",
					"nzJustify",
					"nzGutter",
					"nzWrap"
				],
				exportAs: ["nzRow"]
			},
			{
				kind: "directive",
				type: NzColDirective,
				selector: "[nz-col],nz-col,nz-form-control,nz-form-label",
				inputs: [
					"nzFlex",
					"nzSpan",
					"nzOrder",
					"nzOffset",
					"nzPush",
					"nzPull",
					"nzXs",
					"nzSm",
					"nzMd",
					"nzLg",
					"nzXl",
					"nzXXl",
					"nzXXXl"
				],
				exportAs: ["nzCol"]
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
	type: G2RadarComponent,
	decorators: [{
		type: Component,
		args: [{
			selector: "g2-radar",
			exportAs: "g2Radar",
			template: `
    @if (!loaded()) {
      <nz-skeleton />
    }
    <ng-container *nzStringTemplateOutlet="title()">
      <h4>{{ title() }}</h4>
    </ng-container>
    <div #container></div>
    @if (hasLegend()) {
      <div nz-row class="g2-radar__legend">
        @for (i of legendData(); track $index) {
          <div nz-col [nzSpan]="24 / $count" (click)="_click($index)" class="g2-radar__legend-item">
            <i class="g2-radar__legend-dot" [style]="{ 'background-color': !i.checked ? '#aaa' : i.color }"></i>
            {{ i.name }}
            <h6 class="g2-radar__legend-title">{{ i.value }}</h6>
          </div>
        }
      </div>
    }
  `,
			host: {
				"[style.height.px]": "height()",
				"[class.g2-radar]": "true"
			},
			changeDetection: ChangeDetectionStrategy.OnPush,
			encapsulation: ViewEncapsulation.None,
			imports: [
				NzSkeletonComponent,
				NzStringTemplateOutletDirective,
				NzRowDirective,
				NzColDirective
			]
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
		padding: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "padding",
				required: false
			}]
		}],
		hasLegend: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "hasLegend",
				required: false
			}]
		}],
		tickCount: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "tickCount",
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
		colors: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "colors",
				required: false
			}]
		}],
		clickItem: [{
			type: i0.Output,
			args: ["clickItem"]
		}]
	}
});
const COMPONENTS = [G2RadarComponent];
var G2RadarModule = class G2RadarModule {
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: G2RadarModule,
		deps: [],
		target: i0.ɵɵFactoryTarget.NgModule
	});
	static ɵmod = i0.ɵɵngDeclareNgModule({
		minVersion: "14.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: G2RadarModule,
		imports: [
			CommonModule,
			NzGridModule,
			NzOutletModule,
			NzSkeletonModule,
			G2RadarComponent
		],
		exports: [G2RadarComponent]
	});
	static ɵinj = i0.ɵɵngDeclareInjector({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: G2RadarModule,
		imports: [
			CommonModule,
			NzGridModule,
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
	type: G2RadarModule,
	decorators: [{
		type: NgModule,
		args: [{
			imports: [
				CommonModule,
				NzGridModule,
				NzOutletModule,
				NzSkeletonModule,
				...COMPONENTS
			],
			exports: COMPONENTS
		}]
	}]
});
export { G2RadarComponent, G2RadarModule };

//# sourceMappingURL=radar.mjs.map