import * as i0 from "@angular/core";
import { DestroyRef, Directive, ElementRef, Injectable, afterNextRender, booleanAttribute, effect, inject, input, numberAttribute, output, reflectComponentType, signal, untracked, viewChild } from "@angular/core";
import { Subject, timer } from "rxjs";
import { AlainConfigService } from "@delon/util/config";
import { LazyService } from "@delon/util/other";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { ChartEvent } from "@antv/g2";
function toInteraction(type) {
	switch (type) {
		case "element-active": return { elementHighlight: true };
		case "brush": return { brushXHighlight: true };
		default: return null;
	}
}
var G2Service = class G2Service {
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
			theme: "classic",
			libs: ["https://gw.alipayobjects.com/os/lib/antv/g2/5.4.8/dist/g2.min.js"]
		}, val);
	}
	constructor() {
		this.cog = { theme: "classic" };
	}
	libLoad() {
		if (this.loading) {
			if (this.loaded) this.notify$.next();
			return this;
		}
		this.loading = true;
		this.lazySrv.load(this.cog.libs).then(() => {
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
		type: G2Service,
		deps: [],
		target: i0.ɵɵFactoryTarget.Injectable
	});
	static ɵprov = i0.ɵɵngDeclareInjectable({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: G2Service,
		providedIn: "root"
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: G2Service,
	decorators: [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}],
	ctorParameters: () => []
});
function resolveInputs(host) {
	const type = host.constructor;
	const mirror = reflectComponentType(type);
	if (!mirror) throw new Error(`[chart] "${type.name}" extends G2BaseComponent but is not a @Component.`);
	return mirror.inputs.filter((i) => i.isSignal).map(({ propName }) => ({
		name: propName,
		signal: host[propName]
	}));
}
function watchInputs(host, handler) {
	let inputs = null;
	let prev = null;
	effect(() => {
		inputs ??= resolveInputs(host);
		const next = [];
		const changed = [];
		inputs.forEach(({ signal }, index) => {
			const value = signal();
			next[index] = value;
			if (prev && !Object.is(value, prev[index])) changed.push(signal);
		});
		const isFirst = prev === null;
		prev = next;
		if (isFirst || changed.length === 0) return;
		untracked(() => handler(changed, inputs));
	});
}
var G2BaseComponent = class G2BaseComponent {
	srv = inject(G2Service);
	el = inject(ElementRef);
	destroyRef = inject(DestroyRef);
	node = viewChild.required("container", ...ngDevMode ? [{ debugName: "node" }] : /* istanbul ignore next */ []);
	delay = input(0, {
		...ngDevMode ? { debugName: "delay" } : /* istanbul ignore next */ {},
		transform: numberAttribute
	});
	repaint = input(true, {
		...ngDevMode ? { debugName: "repaint" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	theme = input(this.srv.cog.theme ?? {}, ...ngDevMode ? [{ debugName: "theme" }] : /* istanbul ignore next */ []);
	ready = output();
	error = output();
	_loaded = signal(false, ...ngDevMode ? [{ debugName: "_loaded" }] : /* istanbul ignore next */ []);
	loaded = this._loaded.asReadonly();
	_chart;
	get chart() {
		return this._chart;
	}
	get winG2() {
		return window.G2;
	}
	dataInput;
	destroyed = false;
	installed = false;
	readySettled = false;
	pending = Promise.resolve();
	epoch = 0;
	constructor() {
		watchInputs(this, (changed, inputs) => {
			this.dataInput ??= inputs.find((i) => i.name === "data");
			this.dispatchInputChanges(changed);
		});
		this.srv.notify.pipe(takeUntilDestroyed()).subscribe(() => this.load());
		afterNextRender(() => {
			if (this.winG2) this.load();
			else this.srv.libLoad();
		});
	}
	changeData() {
		if (!this._chart) return;
		this.applyData();
	}
	buildSpec() {
		return {};
	}
	chartOptions() {
		return {
			container: this.containerOf(),
			autoFit: true
		};
	}
	containerOf() {
		return this.el.nativeElement;
	}
	dataOf() {
		return this.dataInput?.signal();
	}
	afterCreate(_chart) {}
	onRendered() {}
	onDataChange() {}
	onInputChanges(_changed) {}
	isDataOnly(changed) {
		const dataInput = this.dataInput?.signal;
		return !!dataInput && changed.length > 0 && changed.every((s) => Object.is(s, dataInput));
	}
	repaintSpec() {
		return this.applySpec(this.buildSpec());
	}
	dispatchInputChanges(changed) {
		this.onInputChanges(changed);
		if (!this._chart) return;
		if (this.isDataOnly(changed)) {
			this.applyData();
			return;
		}
		if (!this.repaint()) return;
		this.repaintSpec();
	}
	load() {
		if (this.installed) return;
		this.installed = true;
		timer(this.delay()).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
			if (this.destroyed) return;
			if (!this.winG2) {
				this.error.emit(/* @__PURE__ */ new Error("[chart] G2 is not loaded"));
				return;
			}
			this.install();
		});
	}
	install() {
		const spec = this.buildSpec();
		const chart = this._chart = new this.winG2.Chart(this.chartOptions());
		chart.on(ChartEvent.AFTER_RENDER, () => this.settleReady(chart));
		this.afterCreate(chart);
		this.applySpec(spec);
	}
	markLoaded() {
		this._loaded.set(true);
	}
	settleReady(chart) {
		if (this.readySettled || this.destroyed) return;
		this.readySettled = true;
		this.markLoaded();
		this.ready.emit(chart);
	}
	applySpec(spec) {
		const epoch = ++this.epoch;
		const chart = this._chart;
		return this.enqueue(async () => {
			chart.options(spec);
			await chart.render();
		}).then(() => {
			if (this.destroyed || epoch !== this.epoch) return;
			this.onRendered();
		}).catch((err) => {
			if (this.destroyed) return;
			if (typeof ngDevMode === "undefined" || ngDevMode) console.error("[chart] render failed", err);
			this.error.emit(err);
		});
	}
	async applyData() {
		const data = this.dataOf();
		if (data == null) return;
		try {
			await this.enqueue(async () => {
				await this._chart.changeData(data);
			});
		} catch (err) {
			if (typeof ngDevMode === "undefined" || ngDevMode) {
				if (!this.destroyed) console.error("[chart] changeData failed", err);
			}
			return;
		}
		if (this.destroyed) return;
		this.onDataChange();
	}
	enqueue(task) {
		const next = this.pending.then(() => {
			if (this.destroyed) return;
			return task();
		});
		this.pending = next.catch(() => void 0);
		return next;
	}
	ngOnDestroy() {
		if (this.destroyed) return;
		this.destroyed = true;
		this.epoch++;
		this.readySettled = true;
		this.pending.then(() => {
			this._chart?.destroy();
			this._chart = void 0;
		});
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: G2BaseComponent,
		deps: [],
		target: i0.ɵɵFactoryTarget.Directive
	});
	static ɵdir = i0.ɵɵngDeclareDirective({
		minVersion: "17.2.0",
		version: "22.2.0",
		type: G2BaseComponent,
		isStandalone: true,
		inputs: {
			delay: {
				classPropertyName: "delay",
				publicName: "delay",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			repaint: {
				classPropertyName: "repaint",
				publicName: "repaint",
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
			}
		},
		outputs: {
			ready: "ready",
			error: "error"
		},
		viewQueries: [{
			propertyName: "node",
			first: true,
			predicate: ["container"],
			descendants: true,
			isSignal: true
		}],
		ngImport: i0
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: G2BaseComponent,
	decorators: [{ type: Directive }],
	ctorParameters: () => [],
	propDecorators: {
		node: [{
			type: i0.ViewChild,
			args: ["container", { isSignal: true }]
		}],
		delay: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "delay",
				required: false
			}]
		}],
		repaint: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "repaint",
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
		ready: [{
			type: i0.Output,
			args: ["ready"]
		}],
		error: [{
			type: i0.Output,
			args: ["error"]
		}]
	}
});
function genMiniTooltipOptions(type, options) {
	const res = {
		tooltip: { title: false },
		interaction: {}
	};
	const tooltipInteraction = {};
	if (options?.crosshairs != null) tooltipInteraction["crosshairs"] = options.crosshairs;
	if (type === "mini") {
		res["tooltip"] = {
			title: false,
			items: [{
				channel: "y",
				name: ""
			}]
		};
		tooltipInteraction["position"] = "top";
		tooltipInteraction["offset"] = [0, 8];
	}
	if (Object.keys(tooltipInteraction).length > 0) res["interaction"] = { tooltip: tooltipInteraction };
	return res;
}
function toTheme(theme) {
	if (theme == null || theme === "") return { type: "classic" };
	return theme;
}
function toPadding(padding) {
	if (padding == null) return {};
	if (typeof padding === "number" || padding === "auto") return { padding };
	const [top, right, bottom, left] = padding;
	const res = {};
	if (top != null) res["paddingTop"] = top;
	if (right != null) res["paddingRight"] = right;
	if (bottom != null) res["paddingBottom"] = bottom;
	if (left != null) res["paddingLeft"] = left;
	return res;
}
function viewSpec(options) {
	const { theme, padding, height, width, animate, autoFit, interaction } = options;
	const res = {
		type: "view",
		theme: toTheme(theme),
		margin: 0,
		...toPadding(padding)
	};
	if (height != null) res.height = height;
	if (width != null) res.width = width;
	if (animate === false) res.animate = false;
	if (autoFit != null) res.autoFit = autoFit;
	const it = toInteraction(interaction);
	if (it) res.interaction = it;
	return res;
}
export { G2BaseComponent, G2Service, genMiniTooltipOptions, resolveInputs, toInteraction, toPadding, toTheme, viewSpec, watchInputs };

//# sourceMappingURL=core.mjs.map