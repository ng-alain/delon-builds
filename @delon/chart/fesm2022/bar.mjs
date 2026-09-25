import * as i0 from "@angular/core";
import { ChangeDetectionStrategy, Component, NgModule, ViewEncapsulation, booleanAttribute, input, numberAttribute, output } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { debounceTime, fromEvent } from "rxjs";
import { G2BaseComponent, viewSpec } from "@delon/chart/core";
import { NzOutletModule, NzStringTemplateOutletDirective } from "ng-zorro-antd/core/outlet";
import { NzSkeletonComponent, NzSkeletonModule } from "ng-zorro-antd/skeleton";
import { CommonModule } from "@angular/common";
const TITLE_HEIGHT = 41;
var G2BarComponent = class G2BarComponent extends G2BaseComponent {
	title = input(...ngDevMode ? [void 0, { debugName: "title" }] : /* istanbul ignore next */ []);
	color = input("rgba(24, 144, 255, 0.85)", ...ngDevMode ? [{ debugName: "color" }] : /* istanbul ignore next */ []);
	height = input(0, {
		...ngDevMode ? { debugName: "height" } : /* istanbul ignore next */ {},
		transform: numberAttribute
	});
	padding = input("auto", ...ngDevMode ? [{ debugName: "padding" }] : /* istanbul ignore next */ []);
	data = input([], ...ngDevMode ? [{ debugName: "data" }] : /* istanbul ignore next */ []);
	autoLabel = input(true, {
		...ngDevMode ? { debugName: "autoLabel" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	interaction = input("none", ...ngDevMode ? [{ debugName: "interaction" }] : /* istanbul ignore next */ []);
	clickItem = output();
	getHeight() {
		return this.title() ? this.height() - TITLE_HEIGHT : this.height();
	}
	containerOf() {
		return this.node().nativeElement;
	}
	buildSpec() {
		const { data, color, interaction, theme, padding } = this;
		const list = data();
		const canvasWidth = this.node().nativeElement.clientWidth;
		return {
			...viewSpec({
				theme: theme(),
				padding: padding(),
				height: this.getHeight(),
				interaction: interaction()
			}),
			data: list,
			axis: {
				x: canvasWidth > list.length * 30 ? { title: false } : false,
				y: {
					title: false,
					line: false,
					tick: false
				}
			},
			scale: {
				x: { type: "band" },
				y: { zero: true }
			},
			legend: false,
			tooltip: { title: false },
			children: [{
				type: "interval",
				encode: {
					x: "x",
					y: "y",
					color: {
						type: "transform",
						value: (d) => d.color || color()
					}
				},
				tooltip: {
					title: false,
					items: [(d) => ({
						name: d.x,
						value: d.y
					})]
				}
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
		this.installResizeEvent();
	}
	resizeInstalled = false;
	installResizeEvent() {
		if (!this.autoLabel() || this.resizeInstalled) return;
		this.resizeInstalled = true;
		fromEvent(window, "resize").pipe(takeUntilDestroyed(this.destroyRef), debounceTime(200)).subscribe(() => void this.repaintSpec());
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: G2BarComponent,
		deps: null,
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "17.0.0",
		version: "22.2.0",
		type: G2BarComponent,
		isStandalone: true,
		selector: "g2-bar",
		inputs: {
			title: {
				classPropertyName: "title",
				publicName: "title",
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
			data: {
				classPropertyName: "data",
				publicName: "data",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			autoLabel: {
				classPropertyName: "autoLabel",
				publicName: "autoLabel",
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
			}
		},
		outputs: { clickItem: "clickItem" },
		host: { properties: {
			"style.height.px": "height()",
			"style.position": "\"relative\""
		} },
		exportAs: ["g2Bar"],
		usesInheritance: true,
		ngImport: i0,
		template: `
    <ng-container *nzStringTemplateOutlet="title()">
      <h4 style="margin-bottom: 20px;">{{ title() }}</h4>
    </ng-container>
    @if (!loaded()) {
      <!-- 骨架屏绝对定位，避免参与布局把图表容器压矮 -->
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
	type: G2BarComponent,
	decorators: [{
		type: Component,
		args: [{
			selector: "g2-bar",
			exportAs: "g2Bar",
			template: `
    <ng-container *nzStringTemplateOutlet="title()">
      <h4 style="margin-bottom: 20px;">{{ title() }}</h4>
    </ng-container>
    @if (!loaded()) {
      <!-- 骨架屏绝对定位，避免参与布局把图表容器压矮 -->
      <div style="position: absolute; inset: 0; z-index: 1;">
        <nz-skeleton />
      </div>
    }
    <div #container></div>
  `,
			host: {
				"[style.height.px]": "height()",
				"[style.position]": "\"relative\""
			},
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
		autoLabel: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "autoLabel",
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
		clickItem: [{
			type: i0.Output,
			args: ["clickItem"]
		}]
	}
});
const COMPONENTS = [G2BarComponent];
var G2BarModule = class G2BarModule {
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: G2BarModule,
		deps: [],
		target: i0.ɵɵFactoryTarget.NgModule
	});
	static ɵmod = i0.ɵɵngDeclareNgModule({
		minVersion: "14.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: G2BarModule,
		imports: [
			CommonModule,
			NzOutletModule,
			NzSkeletonModule,
			G2BarComponent
		],
		exports: [G2BarComponent]
	});
	static ɵinj = i0.ɵɵngDeclareInjector({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: G2BarModule,
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
	type: G2BarModule,
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
export { G2BarComponent, G2BarModule };

//# sourceMappingURL=bar.mjs.map