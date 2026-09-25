import * as i0 from "@angular/core";
import { ChangeDetectionStrategy, Component, NgModule, ViewEncapsulation, booleanAttribute, input, numberAttribute } from "@angular/core";
import { G2BaseComponent, viewSpec } from "@delon/chart/core";
import { NzOutletModule, NzStringTemplateOutletDirective } from "ng-zorro-antd/core/outlet";
import { NzSkeletonComponent } from "ng-zorro-antd/skeleton";
import { CommonModule } from "@angular/common";
var G2WaterWaveComponent = class G2WaterWaveComponent extends G2BaseComponent {
	title = input(null, ...ngDevMode ? [{ debugName: "title" }] : /* istanbul ignore next */ []);
	color = input("#1890FF", ...ngDevMode ? [{ debugName: "color" }] : /* istanbul ignore next */ []);
	size = input(160, {
		...ngDevMode ? { debugName: "size" } : /* istanbul ignore next */ {},
		transform: numberAttribute
	});
	percent = input(...ngDevMode ? [void 0, { debugName: "percent" }] : /* istanbul ignore next */ []);
	padding = input(8, ...ngDevMode ? [{ debugName: "padding" }] : /* istanbul ignore next */ []);
	animate = input(true, {
		...ngDevMode ? { debugName: "animate" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	containerOf() {
		return this.node().nativeElement;
	}
	buildSpec() {
		const { percent, color, size, theme, animate, padding } = this;
		const display = Math.min(Math.max(percent() ?? 0, 0), 100);
		return {
			...viewSpec({
				theme: theme(),
				height: size(),
				animate: animate(),
				padding: padding()
			}),
			type: "liquid",
			data: display / 100,
			interaction: { tooltip: false },
			style: {
				fill: color(),
				stroke: color(),
				outlineBorder: 2,
				outlineDistance: 3,
				waveLength: 128,
				contentText: `${display} %`,
				contentFill: theme() === "dark" ? "rgba(255,255,255,0.85)" : "rgba(0,0,0,0.85)",
				contentFontSize: 24
			}
		};
	}
	isDataOnly() {
		return false;
	}
	render() {
		if (this._chart) this.repaintSpec();
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: G2WaterWaveComponent,
		deps: null,
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "17.0.0",
		version: "22.2.0",
		type: G2WaterWaveComponent,
		isStandalone: true,
		selector: "g2-water-wave",
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
			size: {
				classPropertyName: "size",
				publicName: "size",
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
			},
			animate: {
				classPropertyName: "animate",
				publicName: "animate",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			}
		},
		host: { classAttribute: "g2-water-wave" },
		exportAs: ["g2WaterWave"],
		usesInheritance: true,
		ngImport: i0,
		template: `
    <div class="g2-water-wave__chart" [style.width.px]="size()" [style.height.px]="size()">
      @if (!loaded()) {
        <div style="position: absolute; inset: 0; z-index: 1;">
          <nz-skeleton />
        </div>
      }
      <div #container class="g2-water-wave__container"></div>
    </div>
    <div class="g2-water-wave__desc" [style.width.px]="size()">
      @if (title()) {
        <span class="g2-water-wave__desc-title">
          <ng-container *nzStringTemplateOutlet="title()">{{ title() }}</ng-container>
        </span>
      }
    </div>
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
	type: G2WaterWaveComponent,
	decorators: [{
		type: Component,
		args: [{
			selector: "g2-water-wave",
			exportAs: "g2WaterWave",
			template: `
    <div class="g2-water-wave__chart" [style.width.px]="size()" [style.height.px]="size()">
      @if (!loaded()) {
        <div style="position: absolute; inset: 0; z-index: 1;">
          <nz-skeleton />
        </div>
      }
      <div #container class="g2-water-wave__container"></div>
    </div>
    <div class="g2-water-wave__desc" [style.width.px]="size()">
      @if (title()) {
        <span class="g2-water-wave__desc-title">
          <ng-container *nzStringTemplateOutlet="title()">{{ title() }}</ng-container>
        </span>
      }
    </div>
  `,
			host: { class: "g2-water-wave" },
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
		size: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "size",
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
		}],
		animate: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "animate",
				required: false
			}]
		}]
	}
});
const COMPONENTS = [G2WaterWaveComponent];
var G2WaterWaveModule = class G2WaterWaveModule {
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: G2WaterWaveModule,
		deps: [],
		target: i0.ɵɵFactoryTarget.NgModule
	});
	static ɵmod = i0.ɵɵngDeclareNgModule({
		minVersion: "14.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: G2WaterWaveModule,
		imports: [
			CommonModule,
			NzOutletModule,
			G2WaterWaveComponent
		],
		exports: [G2WaterWaveComponent]
	});
	static ɵinj = i0.ɵɵngDeclareInjector({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: G2WaterWaveModule,
		imports: [
			CommonModule,
			NzOutletModule,
			COMPONENTS
		]
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: G2WaterWaveModule,
	decorators: [{
		type: NgModule,
		args: [{
			imports: [
				CommonModule,
				NzOutletModule,
				...COMPONENTS
			],
			exports: COMPONENTS
		}]
	}]
});
export { G2WaterWaveComponent, G2WaterWaveModule };

//# sourceMappingURL=water-wave.mjs.map