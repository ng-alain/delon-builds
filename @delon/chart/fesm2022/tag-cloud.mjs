import * as i0 from "@angular/core";
import { ChangeDetectionStrategy, Component, NgModule, ViewEncapsulation, input, numberAttribute, output } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { debounceTime, filter, fromEvent } from "rxjs";
import { G2BaseComponent, viewSpec } from "@delon/chart/core";
import { NzSkeletonComponent, NzSkeletonModule } from "ng-zorro-antd/skeleton";
import { CommonModule } from "@angular/common";
var G2TagCloudComponent = class G2TagCloudComponent extends G2BaseComponent {
	width = input(0, {
		...ngDevMode ? { debugName: "width" } : /* istanbul ignore next */ {},
		transform: numberAttribute
	});
	height = input(200, {
		...ngDevMode ? { debugName: "height" } : /* istanbul ignore next */ {},
		transform: numberAttribute
	});
	padding = input(0, ...ngDevMode ? [{ debugName: "padding" }] : /* istanbul ignore next */ []);
	data = input([], ...ngDevMode ? [{ debugName: "data" }] : /* istanbul ignore next */ []);
	clickItem = output();
	chartOptions() {
		const node = this.el.nativeElement;
		return {
			container: node,
			autoFit: false,
			width: this.width() === 0 ? node.clientWidth : this.width(),
			height: this.height() === 0 ? node.clientHeight : this.height()
		};
	}
	buildSpec() {
		const { data, padding, theme } = this;
		return {
			...viewSpec({
				theme: theme(),
				padding: padding()
			}),
			type: "wordCloud",
			data: data(),
			encode: {
				text: "name",
				value: "value",
				color: "name"
			},
			layout: {
				font: "Verdana",
				fontSize: [8, 32],
				padding: 0,
				timeInterval: 5e3
			},
			legend: false,
			axis: false,
			tooltip: { title: false },
			interaction: { elementHighlight: true }
		};
	}
	afterCreate(chart) {
		chart.on("element:click", (ev) => {
			this.clickItem.emit({
				item: ev.data?.data,
				ev
			});
		});
		this.installResizeEvent();
	}
	installResizeEvent() {
		fromEvent(window, "resize").pipe(takeUntilDestroyed(this.destroyRef), filter(() => !!this._chart), debounceTime(200)).subscribe(() => void this.repaintSpec());
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: G2TagCloudComponent,
		deps: null,
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "17.0.0",
		version: "22.2.0",
		type: G2TagCloudComponent,
		isStandalone: true,
		selector: "g2-tag-cloud",
		inputs: {
			width: {
				classPropertyName: "width",
				publicName: "width",
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
			}
		},
		outputs: { clickItem: "clickItem" },
		host: { properties: { "style.position": "\"relative\"" } },
		exportAs: ["g2TagCloud"],
		usesInheritance: true,
		ngImport: i0,
		template: `
    @if (!loaded()) {
      <div style="position: absolute; inset: 0; z-index: 1;">
        <nz-skeleton />
      </div>
    }
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
	type: G2TagCloudComponent,
	decorators: [{
		type: Component,
		args: [{
			selector: "g2-tag-cloud",
			exportAs: "g2TagCloud",
			template: `
    @if (!loaded()) {
      <div style="position: absolute; inset: 0; z-index: 1;">
        <nz-skeleton />
      </div>
    }
  `,
			host: { "[style.position]": "\"relative\"" },
			changeDetection: ChangeDetectionStrategy.OnPush,
			encapsulation: ViewEncapsulation.None,
			imports: [NzSkeletonComponent]
		}]
	}],
	propDecorators: {
		width: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "width",
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
		clickItem: [{
			type: i0.Output,
			args: ["clickItem"]
		}]
	}
});
const COMPONENTS = [G2TagCloudComponent];
var G2TagCloudModule = class G2TagCloudModule {
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: G2TagCloudModule,
		deps: [],
		target: i0.ɵɵFactoryTarget.NgModule
	});
	static ɵmod = i0.ɵɵngDeclareNgModule({
		minVersion: "14.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: G2TagCloudModule,
		imports: [
			CommonModule,
			NzSkeletonModule,
			G2TagCloudComponent
		],
		exports: [G2TagCloudComponent]
	});
	static ɵinj = i0.ɵɵngDeclareInjector({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: G2TagCloudModule,
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
	type: G2TagCloudModule,
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
export { G2TagCloudComponent, G2TagCloudModule };

//# sourceMappingURL=tag-cloud.mjs.map