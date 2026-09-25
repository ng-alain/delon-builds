import * as i0 from "@angular/core";
import { ChangeDetectionStrategy, Component, DestroyRef, Injectable, NgModule, ViewEncapsulation, afterNextRender, inject, input, output, signal, viewChild } from "@angular/core";
import { Subject, debounceTime, filter, fromEvent } from "rxjs";
import { AlainConfigService } from "@delon/util/config";
import { LazyService } from "@delon/util/other";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { watchInputs } from "@delon/chart/core";
import { NzSkeletonComponent, NzSkeletonModule } from "ng-zorro-antd/skeleton";
import { CommonModule } from "@angular/common";
var ChartEChartsService = class ChartEChartsService {
	cogSrv = inject(AlainConfigService);
	lazySrv = inject(LazyService);
	_cog;
	loading = false;
	loaded = false;
	notify$ = new Subject();
	get cog() {
		return this._cog;
	}
	set cog(val) {
		this._cog = this.cogSrv.merge("chart", {
			theme: "",
			echartsLib: "https://cdnjs.cloudflare.com/ajax/libs/echarts/5.1.0/echarts.min.js"
		}, val);
	}
	constructor() {
		this.cog = { theme: "" };
	}
	libLoad() {
		if (this.loading) {
			if (this.loaded) this.notify$.next();
			return this;
		}
		this.loading = true;
		this.lazySrv.load(this.cog.echartsLib).then(() => {
			const extensions = this.cog.echartsExtensions;
			if (Array.isArray(extensions) && extensions.length > 0) return this.lazySrv.load(extensions).then(() => true);
			return Promise.resolve(true);
		}).then(() => {
			this.loaded = true;
			this.notify$.next();
		});
		return this;
	}
	get notify() {
		return this.notify$.asObservable();
	}
	ngOnDestroy() {
		this.notify$.unsubscribe();
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: ChartEChartsService,
		deps: [],
		target: i0.ɵɵFactoryTarget.Injectable
	});
	static ɵprov = i0.ɵɵngDeclareInjectable({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: ChartEChartsService,
		providedIn: "root"
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: ChartEChartsService,
	decorators: [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}],
	ctorParameters: () => []
});
function toCssSize(value) {
	if (value == null) return "";
	return typeof value === "number" ? `${value}px` : `${value}`;
}
var ChartEChartsComponent = class ChartEChartsComponent {
	srv = inject(ChartEChartsService);
	destroyRef = inject(DestroyRef);
	node = viewChild.required("container", ...ngDevMode ? [{ debugName: "node" }] : /* istanbul ignore next */ []);
	width = input("100%", {
		...ngDevMode ? { debugName: "width" } : /* istanbul ignore next */ {},
		transform: toCssSize
	});
	height = input("400px", {
		...ngDevMode ? { debugName: "height" } : /* istanbul ignore next */ {},
		transform: toCssSize
	});
	theme = input(this.srv.cog.echartsTheme, ...ngDevMode ? [{ debugName: "theme" }] : /* istanbul ignore next */ []);
	initOpt = input(...ngDevMode ? [void 0, { debugName: "initOpt" }] : /* istanbul ignore next */ []);
	option = input(...ngDevMode ? [void 0, { debugName: "option" }] : /* istanbul ignore next */ []);
	on = input([], ...ngDevMode ? [{ debugName: "on" }] : /* istanbul ignore next */ []);
	events = output();
	_chart = null;
	_loaded = signal(false, ...ngDevMode ? [{ debugName: "_loaded" }] : /* istanbul ignore next */ []);
	loaded = this._loaded.asReadonly();
	prev;
	get chart() {
		return this._chart;
	}
	constructor() {
		watchInputs(this, () => this.dispatch());
		this.srv.notify.pipe(takeUntilDestroyed(this.destroyRef), filter(() => !this._loaded())).subscribe(() => this.load());
		afterNextRender(() => {
			fromEvent(window, "resize").pipe(takeUntilDestroyed(this.destroyRef), filter(() => !!this._chart), debounceTime(200)).subscribe(() => this._chart.resize());
			if (window.echarts) this.load();
			else this.srv.libLoad();
		});
	}
	dispatch() {
		const theme = this.theme();
		const initOpt = this.initOpt();
		const option = this.option();
		const prev = this.prev;
		this.prev = {
			theme,
			initOpt,
			option
		};
		if (!this._chart || !prev) return;
		if (theme !== prev.theme || initOpt !== prev.initOpt) this.install();
		else if (option !== prev.option) this.setOption(option, true);
	}
	emit(type, other) {
		this.events.emit({
			type,
			chart: this.chart,
			...other
		});
	}
	load() {
		if (this._loaded()) return;
		this._loaded.set(true);
		this.emit("ready");
		this.install();
	}
	install() {
		this.destroy();
		const chart = this._chart = window.echarts.init(this.node().nativeElement, this.theme(), this.initOpt());
		this.emit("init");
		this.setOption(this.option());
		this.on().forEach((item) => {
			if (item.query != null) chart.on(item.eventName, item.query, (event) => item.handler({
				event,
				chart
			}));
			else chart.on(item.eventName, (event) => item.handler({
				event,
				chart
			}));
		});
		this.prev = {
			theme: this.theme(),
			initOpt: this.initOpt(),
			option: this.option()
		};
		return this;
	}
	destroy() {
		if (this._chart) {
			this._chart.dispose();
			this.emit("destroy");
		}
		return this;
	}
	setOption(option, notMerge = false, lazyUpdate = false) {
		if (this._chart) {
			this._chart.setOption(option, notMerge, lazyUpdate);
			this.emit("set-option", { option });
		}
		return this;
	}
	ngOnDestroy() {
		this.on().forEach((item) => this._chart?.off(item.eventName));
		this.destroy();
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: ChartEChartsComponent,
		deps: [],
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "17.0.0",
		version: "22.2.0",
		type: ChartEChartsComponent,
		isStandalone: true,
		selector: "chart-echarts, [chart-echarts]",
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
			theme: {
				classPropertyName: "theme",
				publicName: "theme",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			initOpt: {
				classPropertyName: "initOpt",
				publicName: "initOpt",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			option: {
				classPropertyName: "option",
				publicName: "option",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			on: {
				classPropertyName: "on",
				publicName: "on",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			}
		},
		outputs: { events: "events" },
		host: { properties: {
			"style.display": "'inline-block'",
			"style.width": "width()",
			"style.height": "height()"
		} },
		viewQueries: [{
			propertyName: "node",
			first: true,
			predicate: ["container"],
			descendants: true,
			isSignal: true
		}],
		exportAs: ["chartECharts"],
		ngImport: i0,
		template: `
    @if (!loaded()) {
      <nz-skeleton />
    }
    <div #container [style.width]="width()" [style.height]="height()"></div>
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
	type: ChartEChartsComponent,
	decorators: [{
		type: Component,
		args: [{
			selector: "chart-echarts, [chart-echarts]",
			exportAs: "chartECharts",
			template: `
    @if (!loaded()) {
      <nz-skeleton />
    }
    <div #container [style.width]="width()" [style.height]="height()"></div>
  `,
			host: {
				"[style.display]": `'inline-block'`,
				"[style.width]": `width()`,
				"[style.height]": `height()`
			},
			changeDetection: ChangeDetectionStrategy.OnPush,
			encapsulation: ViewEncapsulation.None,
			imports: [NzSkeletonComponent]
		}]
	}],
	ctorParameters: () => [],
	propDecorators: {
		node: [{
			type: i0.ViewChild,
			args: ["container", { isSignal: true }]
		}],
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
		theme: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "theme",
				required: false
			}]
		}],
		initOpt: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "initOpt",
				required: false
			}]
		}],
		option: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "option",
				required: false
			}]
		}],
		on: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "on",
				required: false
			}]
		}],
		events: [{
			type: i0.Output,
			args: ["events"]
		}]
	}
});
const COMPONENTS = [ChartEChartsComponent];
var ChartEChartsModule = class ChartEChartsModule {
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: ChartEChartsModule,
		deps: [],
		target: i0.ɵɵFactoryTarget.NgModule
	});
	static ɵmod = i0.ɵɵngDeclareNgModule({
		minVersion: "14.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: ChartEChartsModule,
		imports: [
			CommonModule,
			NzSkeletonModule,
			ChartEChartsComponent
		],
		exports: [ChartEChartsComponent]
	});
	static ɵinj = i0.ɵɵngDeclareInjector({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: ChartEChartsModule,
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
	type: ChartEChartsModule,
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
export { ChartEChartsComponent, ChartEChartsModule, ChartEChartsService };

//# sourceMappingURL=chart-echarts.mjs.map