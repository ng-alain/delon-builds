import { Platform } from "@angular/cdk/platform";
import { HttpClient, HttpContextToken, HttpResponseBase } from "@angular/common/http";
import * as i0 from "@angular/core";
import { Injectable, InjectionToken, inject } from "@angular/core";
import { BehaviorSubject, Observable, map, of, tap } from "rxjs";
import { addSeconds } from "date-fns";
import { AlainConfigService } from "@delon/util/config";
import { deepGet } from "@delon/util/other";
const DC_STORE_STORAGE_TOKEN = new InjectionToken("DC_STORE_STORAGE_TOKEN", {
	providedIn: "root",
	factory: () => new LocalStorageCacheService()
});
var LocalStorageCacheService = class {
	platform = inject(Platform);
	get(key) {
		if (!this.platform.isBrowser) return null;
		return JSON.parse(localStorage.getItem(key) ?? "null") ?? null;
	}
	set(key, value) {
		if (!this.platform.isBrowser) return true;
		localStorage.setItem(key, JSON.stringify(value));
		return true;
	}
	remove(key) {
		if (!this.platform.isBrowser) return;
		localStorage.removeItem(key);
	}
};
var CacheService = class CacheService {
	store = inject(DC_STORE_STORAGE_TOKEN);
	http = inject(HttpClient);
	platform = inject(Platform);
	memory = /* @__PURE__ */ new Map();
	notifyBuffer = /* @__PURE__ */ new Map();
	meta = /* @__PURE__ */ new Set();
	freqTick = 3e3;
	freqTime;
	cog = inject(AlainConfigService).merge("cache", {
		mode: "promise",
		reName: "",
		prefix: "",
		meta_key: "__cache_meta"
	});
	constructor() {
		if (!this.platform.isBrowser) return;
		this.loadMeta();
		this.startExpireNotify();
	}
	pushMeta(key) {
		if (this.meta.has(key)) return;
		this.meta.add(key);
		this.saveMeta();
	}
	removeMeta(key) {
		if (!this.meta.has(key)) return;
		this.meta.delete(key);
		this.saveMeta();
	}
	loadMeta() {
		const ret = this.store.get(this.cog.meta_key);
		if (ret && ret.v) ret.v.forEach((key) => this.meta.add(key));
	}
	saveMeta() {
		const metaData = [];
		this.meta.forEach((key) => metaData.push(key));
		this.store.set(this.cog.meta_key, {
			v: metaData,
			e: 0
		});
	}
	getMeta() {
		return this.meta;
	}
	set(key, data, options = {}) {
		if (!this.platform.isBrowser) return;
		let e = 0;
		const { type, expire } = this.cog;
		options = {
			type,
			expire,
			...options
		};
		if (options.expire) e = addSeconds(/* @__PURE__ */ new Date(), options.expire).valueOf();
		const emitNotify = options.emitNotify !== false;
		if (!(data instanceof Observable)) {
			this.save(options.type, key, {
				v: data,
				e
			}, emitNotify);
			return;
		}
		return data.pipe(tap((v) => {
			this.save(options.type, key, {
				v,
				e
			}, emitNotify);
		}));
	}
	save(type, key, value, emitNotify = true) {
		if (type === "m") this.memory.set(key, value);
		else {
			this.store.set(this.cog.prefix + key, value);
			this.pushMeta(key);
		}
		if (emitNotify) this.runNotify(key, "set");
	}
	get(key, options = {}) {
		if (!this.platform.isBrowser) return null;
		const isPromise = options.mode !== "none" && this.cog.mode === "promise";
		const value = this.memory.has(key) ? this.memory.get(key) : this.store.get(this.cog.prefix + key);
		if (!value || value.e && value.e > 0 && value.e < (/* @__PURE__ */ new Date()).valueOf()) {
			if (isPromise) return (this.cog.request ? this.cog.request(key) : this.http.get(key)).pipe(map((ret) => deepGet(ret, this.cog.reName, ret)), tap((v) => this.set(key, v, {
				type: options.type,
				expire: options.expire,
				emitNotify: options.emitNotify
			})));
			return null;
		}
		return isPromise ? of(value.v) : value.v;
	}
	getNone(key) {
		return this.get(key, { mode: "none" });
	}
	tryGet(key, data, options = {}) {
		if (!this.platform.isBrowser) return null;
		const ret = this.getNone(key);
		if (ret === null) {
			if (!(data instanceof Observable)) {
				this.set(key, data, options);
				return data;
			}
			return this.set(key, data, options);
		}
		return of(ret);
	}
	has(key) {
		return this.memory.has(key) || this.meta.has(key);
	}
	_remove(key, needNotify) {
		if (needNotify) this.runNotify(key, "remove");
		if (this.memory.has(key)) {
			this.memory.delete(key);
			return;
		}
		this.store.remove(this.cog.prefix + key);
		this.removeMeta(key);
	}
	remove(key) {
		if (!this.platform.isBrowser) return;
		this._remove(key, true);
	}
	clear() {
		if (!this.platform.isBrowser) return;
		this.notifyBuffer.forEach((_v, k) => this.runNotify(k, "remove"));
		this.memory.clear();
		this.meta.forEach((key) => this.store.remove(this.cog.prefix + key));
	}
	set freq(value) {
		this.freqTick = Math.max(20, value);
		this.abortExpireNotify();
		this.startExpireNotify();
	}
	startExpireNotify() {
		this.checkExpireNotify();
		this.runExpireNotify();
	}
	runExpireNotify() {
		this.freqTime = setTimeout(() => {
			this.checkExpireNotify();
			this.runExpireNotify();
		}, this.freqTick);
	}
	checkExpireNotify() {
		const removed = [];
		this.notifyBuffer.forEach((_v, key) => {
			if (this.has(key) && this.getNone(key) === null) removed.push(key);
		});
		removed.forEach((key) => {
			this.runNotify(key, "expire");
			this._remove(key, false);
		});
	}
	abortExpireNotify() {
		clearTimeout(this.freqTime);
	}
	runNotify(key, type) {
		if (!this.notifyBuffer.has(key)) return;
		this.notifyBuffer.get(key).next({
			type,
			value: this.getNone(key)
		});
	}
	notify(key) {
		if (!this.notifyBuffer.has(key)) {
			const change$ = new BehaviorSubject(this.getNone(key));
			this.notifyBuffer.set(key, change$);
		}
		return this.notifyBuffer.get(key).asObservable();
	}
	cancelNotify(key) {
		if (!this.notifyBuffer.has(key)) return;
		this.notifyBuffer.get(key).unsubscribe();
		this.notifyBuffer.delete(key);
	}
	hasNotify(key) {
		return this.notifyBuffer.has(key);
	}
	clearNotify() {
		this.notifyBuffer.forEach((v) => v.unsubscribe());
		this.notifyBuffer.clear();
	}
	ngOnDestroy() {
		this.memory.clear();
		this.abortExpireNotify();
		this.clearNotify();
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: CacheService,
		deps: [],
		target: i0.ɵɵFactoryTarget.Injectable
	});
	static ɵprov = i0.ɵɵngDeclareInjectable({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: CacheService,
		providedIn: "root"
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: CacheService,
	decorators: [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}],
	ctorParameters: () => []
});
const CACHE = new HttpContextToken(() => ({}));
const httpCacheInterceptor = (req, next) => {
	const options = {
		enabled: true,
		emitNotify: true,
		saveType: "m",
		...inject(AlainConfigService).merge("cache", {}).interceptor,
		...req.context.get(CACHE)
	};
	const srv = inject(CacheService);
	const mapPipe = map((ev) => save(srv, ev, options));
	if (options.enabled === false) return next(req).pipe(mapPipe);
	if (options.key == null) options.key = req.urlWithParams;
	const cacheData = srv.getNone(options.key);
	if (cacheData != null) {
		if (typeof ngDevMode === "undefined" || ngDevMode) console.log(`%c👽${req.method}->${req.urlWithParams}->from cache(onle in development)`, "background:#000;color:#1890ff", req, cacheData);
		return of(cacheData);
	}
	return next(req).pipe(mapPipe);
};
function save(srv, ev, options) {
	if (!(ev instanceof HttpResponseBase) || !(ev.status >= 200 && ev.status < 300)) return ev;
	let expire = options.expire;
	if (expire == null) {
		const ageMatch = /max-age=(\d+)/g.exec(ev.headers.get("cache-control")?.toLowerCase() ?? "");
		if (ageMatch == null) return ev;
		expire = +ageMatch[1];
	}
	if (expire > 0) srv.set(options.key, ev, {
		type: options.saveType,
		expire
	});
	return ev;
}
export { CACHE, CacheService, httpCacheInterceptor };

//# sourceMappingURL=cache.mjs.map