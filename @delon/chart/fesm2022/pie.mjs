import * as i0 from "@angular/core";
import { ChangeDetectionStrategy, Component, NgModule, ViewEncapsulation, booleanAttribute, computed, input, numberAttribute, output, signal } from "@angular/core";
import { G2BaseComponent, viewSpec } from "@delon/chart/core";
import { NzOutletModule, NzStringTemplateOutletDirective } from "ng-zorro-antd/core/outlet";
import { NzDividerComponent, NzDividerModule } from "ng-zorro-antd/divider";
import { NzSkeletonComponent, NzSkeletonModule } from "ng-zorro-antd/skeleton";
import { CommonModule } from "@angular/common";
var G2PieComponent = class G2PieComponent extends G2BaseComponent {
	legendData = signal([], ...ngDevMode ? [{ debugName: "legendData" }] : /* istanbul ignore next */ []);
	block = signal(false, ...ngDevMode ? [{ debugName: "block" }] : /* istanbul ignore next */ []);
	isPercent = computed(() => this.percent() != null, ...ngDevMode ? [{ debugName: "isPercent" }] : /* istanbul ignore next */ []);
	runTooltip = computed(() => this.isPercent() ? false : this.tooltip(), ...ngDevMode ? [{ debugName: "runTooltip" }] : /* istanbul ignore next */ []);
	percentColor = computed(() => {
		const { text, color, inverseColor } = this.ratio();
		const textColor = color || this.color();
		return (value) => value === text ? textColor : inverseColor;
	}, ...ngDevMode ? [{ debugName: "percentColor" }] : /* istanbul ignore next */ []);
	runData = computed(() => {
		const percent = this.percent();
		if (percent == null) return this.data();
		const { text, inverse } = this.ratio();
		return [{
			x: text,
			y: percent
		}, {
			x: inverse,
			y: 100 - percent
		}];
	}, ...ngDevMode ? [{ debugName: "runData" }] : /* istanbul ignore next */ []);
	animate = input(true, {
		...ngDevMode ? { debugName: "animate" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	color = input("rgba(24, 144, 255, 0.85)", ...ngDevMode ? [{ debugName: "color" }] : /* istanbul ignore next */ []);
	subTitle = input(...ngDevMode ? [void 0, { debugName: "subTitle" }] : /* istanbul ignore next */ []);
	total = input(...ngDevMode ? [void 0, { debugName: "total" }] : /* istanbul ignore next */ []);
	height = input(0, {
		...ngDevMode ? { debugName: "height" } : /* istanbul ignore next */ {},
		transform: numberAttribute
	});
	fontSize = input(14, {
		...ngDevMode ? { debugName: "fontSize" } : /* istanbul ignore next */ {},
		transform: numberAttribute
	});
	hasLegend = input(false, {
		...ngDevMode ? { debugName: "hasLegend" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	inner = input(.75, ...ngDevMode ? [{ debugName: "inner" }] : /* istanbul ignore next */ []);
	padding = input([
		12,
		0,
		12,
		0
	], ...ngDevMode ? [{ debugName: "padding" }] : /* istanbul ignore next */ []);
	percent = input(void 0, {
		...ngDevMode ? { debugName: "percent" } : /* istanbul ignore next */ {},
		transform: numberAttribute
	});
	tooltip = input(true, {
		...ngDevMode ? { debugName: "tooltip" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	lineWidth = input(0, {
		...ngDevMode ? { debugName: "lineWidth" } : /* istanbul ignore next */ {},
		transform: numberAttribute
	});
	blockMaxWidth = input(380, {
		...ngDevMode ? { debugName: "blockMaxWidth" } : /* istanbul ignore next */ {},
		transform: numberAttribute
	});
	select = input(true, {
		...ngDevMode ? { debugName: "select" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	valueFormat = input(...ngDevMode ? [void 0, { debugName: "valueFormat" }] : /* istanbul ignore next */ []);
	data = input([], ...ngDevMode ? [{ debugName: "data" }] : /* istanbul ignore next */ []);
	colors = input(...ngDevMode ? [void 0, { debugName: "colors" }] : /* istanbul ignore next */ []);
	interaction = input("none", ...ngDevMode ? [{ debugName: "interaction" }] : /* istanbul ignore next */ []);
	ratio = input({
		text: "占比",
		inverse: "反比",
		color: "",
		inverseColor: "#F0F2F5"
	}, ...ngDevMode ? [{ debugName: "ratio" }] : /* istanbul ignore next */ []);
	clickItem = output();
	updateBlock() {
		this.block.set(!!this._chart && this.hasLegend() && this.el.nativeElement.clientWidth <= this.blockMaxWidth());
	}
	containerOf() {
		return this.node().nativeElement;
	}
	buildSpec() {
		const { height, padding, inner, lineWidth, isPercent, percentColor, theme, animate, interaction } = this;
		const legendData = this.legendData();
		const data = this.normalizedData().filter((d) => legendData.find((w) => w.x === d.x)?.checked !== false);
		const showTooltip = this.runTooltip();
		return {
			...viewSpec({
				autoFit: true,
				height: height(),
				theme: theme(),
				padding: padding(),
				animate: animate(),
				interaction: interaction()
			}),
			data,
			coordinate: {
				type: "theta",
				innerRadius: inner()
			},
			legend: false,
			axis: false,
			tooltip: showTooltip ? { title: false } : false,
			children: [{
				type: "interval",
				transform: [{ type: "stackY" }],
				encode: {
					y: "y",
					color: "x"
				},
				...isPercent() ? { scale: { color: { range: [percentColor()(this.ratio().text), percentColor()(this.ratio().inverse)] } } } : this.colors() ? { scale: { color: { range: this.colors() } } } : {},
				style: {
					lineWidth: lineWidth(),
					stroke: "#fff"
				},
				tooltip: showTooltip ? { items: [(d) => ({
					name: d.x,
					value: `${(d.percent * 100).toFixed(2)} %`
				})] } : false
			}]
		};
	}
	colorOf(x) {
		const list = this.colors() ?? this.chartColorRange();
		if (!list || list.length === 0) return this.color();
		return list[this.runData().findIndex((d) => d.x === x) % list.length];
	}
	chartColorRange() {
		if (!this._chart) return;
		const range = this._chart.getScale?.()?.color?.getOptions?.().range;
		return Array.isArray(range) ? range : void 0;
	}
	normalizedData() {
		const data = this.runData();
		const totalSum = data.reduce((cur, item) => cur + item.y, 0);
		return data.map((item) => ({
			...item,
			percent: totalSum === 0 ? 0 : item.y / totalSum
		}));
	}
	dataOf() {
		return this.buildSpec()["data"];
	}
	onRendered() {
		this.genLegend();
	}
	onDataChange() {
		this.genLegend();
	}
	afterCreate(chart) {
		chart.on("interval:click", (ev) => {
			this.clickItem.emit({
				item: ev.data?.data,
				ev
			});
		});
		chart.on("afterrender", () => this.updateBlock());
	}
	genLegend() {
		const { hasLegend, isPercent } = this;
		if (!hasLegend() || isPercent()) return;
		this.legendData.set(this.normalizedData().map((item) => ({
			x: item.x,
			y: item.y,
			color: this.colorOf(item.x),
			checked: this.legendData().find((w) => w.x === item.x)?.checked !== false,
			percent: (item.percent * 100).toFixed(2)
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
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: G2PieComponent,
		deps: null,
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "17.0.0",
		version: "22.2.0",
		type: G2PieComponent,
		isStandalone: true,
		selector: "g2-pie",
		inputs: {
			animate: {
				classPropertyName: "animate",
				publicName: "animate",
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
			height: {
				classPropertyName: "height",
				publicName: "height",
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
			hasLegend: {
				classPropertyName: "hasLegend",
				publicName: "hasLegend",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			inner: {
				classPropertyName: "inner",
				publicName: "inner",
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
			percent: {
				classPropertyName: "percent",
				publicName: "percent",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			tooltip: {
				classPropertyName: "tooltip",
				publicName: "tooltip",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			lineWidth: {
				classPropertyName: "lineWidth",
				publicName: "lineWidth",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			blockMaxWidth: {
				classPropertyName: "blockMaxWidth",
				publicName: "blockMaxWidth",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			select: {
				classPropertyName: "select",
				publicName: "select",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			valueFormat: {
				classPropertyName: "valueFormat",
				publicName: "valueFormat",
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
			},
			interaction: {
				classPropertyName: "interaction",
				publicName: "interaction",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			ratio: {
				classPropertyName: "ratio",
				publicName: "ratio",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			}
		},
		outputs: { clickItem: "clickItem" },
		host: {
			properties: {
				"class.g2-pie__legend-has": "hasLegend()",
				"class.g2-pie__legend-block": "block()",
				"class.g2-pie__mini": "isPercent()",
				"style.height.px": "height()",
				"style.font-size.px": "fontSize()"
			},
			classAttribute: "g2-pie"
		},
		exportAs: ["g2Pie"],
		usesInheritance: true,
		ngImport: i0,
		template: `
    @if (!loaded()) {
      <div style="position: absolute; inset: 0; z-index: 1;">
        <nz-skeleton />
      </div>
    }
    <div class="g2-pie__chart">
      <div #container></div>
      @if (subTitle() || total()) {
        <div class="g2-pie__total">
          @if (subTitle()) {
            <h4 class="g2-pie__total-title">
              <ng-container *nzStringTemplateOutlet="subTitle()">
                <div [innerHTML]="subTitle()"></div>
              </ng-container>
            </h4>
          }
          @if (total()) {
            <div class="g2-pie__total-stat">
              <ng-container *nzStringTemplateOutlet="total()">
                <div [innerHTML]="total()"></div>
              </ng-container>
            </div>
          }
        </div>
      }
    </div>
    @if (hasLegend() && legendData().length > 0) {
      <ul class="g2-pie__legend">
        @for (item of legendData(); track $index) {
          <li (click)="_click($index)" class="g2-pie__legend-item">
            <span
              class="g2-pie__legend-dot"
              [style]="{ 'background-color': !item.checked ? '#aaa' : item.color }"
            ></span>
            <span class="g2-pie__legend-title">{{ item.x }}</span>
            <nz-divider nzType="vertical" />
            <span class="g2-pie__legend-percent">{{ item.percent }}%</span>
            @let vf = valueFormat();
            <span class="g2-pie__legend-value" [innerHTML]="vf ? vf(item.y) : item.y"></span>
          </li>
        }
      </ul>
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
				kind: "component",
				type: NzDividerComponent,
				selector: "nz-divider",
				inputs: [
					"nzText",
					"nzType",
					"nzOrientation",
					"nzVariant",
					"nzSize",
					"nzDashed",
					"nzPlain"
				],
				exportAs: ["nzDivider"]
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
	type: G2PieComponent,
	decorators: [{
		type: Component,
		args: [{
			selector: "g2-pie",
			exportAs: "g2Pie",
			template: `
    @if (!loaded()) {
      <div style="position: absolute; inset: 0; z-index: 1;">
        <nz-skeleton />
      </div>
    }
    <div class="g2-pie__chart">
      <div #container></div>
      @if (subTitle() || total()) {
        <div class="g2-pie__total">
          @if (subTitle()) {
            <h4 class="g2-pie__total-title">
              <ng-container *nzStringTemplateOutlet="subTitle()">
                <div [innerHTML]="subTitle()"></div>
              </ng-container>
            </h4>
          }
          @if (total()) {
            <div class="g2-pie__total-stat">
              <ng-container *nzStringTemplateOutlet="total()">
                <div [innerHTML]="total()"></div>
              </ng-container>
            </div>
          }
        </div>
      }
    </div>
    @if (hasLegend() && legendData().length > 0) {
      <ul class="g2-pie__legend">
        @for (item of legendData(); track $index) {
          <li (click)="_click($index)" class="g2-pie__legend-item">
            <span
              class="g2-pie__legend-dot"
              [style]="{ 'background-color': !item.checked ? '#aaa' : item.color }"
            ></span>
            <span class="g2-pie__legend-title">{{ item.x }}</span>
            <nz-divider nzType="vertical" />
            <span class="g2-pie__legend-percent">{{ item.percent }}%</span>
            @let vf = valueFormat();
            <span class="g2-pie__legend-value" [innerHTML]="vf ? vf(item.y) : item.y"></span>
          </li>
        }
      </ul>
    }
  `,
			host: {
				class: "g2-pie",
				"[class.g2-pie__legend-has]": "hasLegend()",
				"[class.g2-pie__legend-block]": "block()",
				"[class.g2-pie__mini]": "isPercent()",
				"[style.height.px]": "height()",
				"[style.font-size.px]": "fontSize()"
			},
			changeDetection: ChangeDetectionStrategy.OnPush,
			encapsulation: ViewEncapsulation.None,
			imports: [
				NzSkeletonComponent,
				NzStringTemplateOutletDirective,
				NzDividerComponent
			]
		}]
	}],
	propDecorators: {
		animate: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "animate",
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
		height: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "height",
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
		hasLegend: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "hasLegend",
				required: false
			}]
		}],
		inner: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "inner",
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
		percent: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "percent",
				required: false
			}]
		}],
		tooltip: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "tooltip",
				required: false
			}]
		}],
		lineWidth: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "lineWidth",
				required: false
			}]
		}],
		blockMaxWidth: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "blockMaxWidth",
				required: false
			}]
		}],
		select: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "select",
				required: false
			}]
		}],
		valueFormat: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "valueFormat",
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
		interaction: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "interaction",
				required: false
			}]
		}],
		ratio: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "ratio",
				required: false
			}]
		}],
		clickItem: [{
			type: i0.Output,
			args: ["clickItem"]
		}]
	}
});
const COMPONENTS = [G2PieComponent];
var G2PieModule = class G2PieModule {
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: G2PieModule,
		deps: [],
		target: i0.ɵɵFactoryTarget.NgModule
	});
	static ɵmod = i0.ɵɵngDeclareNgModule({
		minVersion: "14.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: G2PieModule,
		imports: [
			CommonModule,
			NzDividerModule,
			NzOutletModule,
			NzSkeletonModule,
			G2PieComponent
		],
		exports: [G2PieComponent]
	});
	static ɵinj = i0.ɵɵngDeclareInjector({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: G2PieModule,
		imports: [
			CommonModule,
			NzDividerModule,
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
	type: G2PieModule,
	decorators: [{
		type: NgModule,
		args: [{
			imports: [
				CommonModule,
				NzDividerModule,
				NzOutletModule,
				NzSkeletonModule,
				...COMPONENTS
			],
			exports: COMPONENTS
		}]
	}]
});
export { G2PieComponent, G2PieModule };

//# sourceMappingURL=pie.mjs.map