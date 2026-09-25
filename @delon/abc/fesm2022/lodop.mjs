import * as i0 from "@angular/core";
import { Injectable, NgModule, inject } from "@angular/core";
import { Subject, of } from "rxjs";
import { AlainConfigService } from "@delon/util/config";
import { LazyService } from "@delon/util/other";
var LodopService = class LodopService {
	scriptSrv = inject(LazyService);
	cogSrv = inject(AlainConfigService);
	defaultConfig;
	_cog;
	pending = false;
	_lodop = null;
	_init = new Subject();
	_events = new Subject();
	printBuffer = [];
	constructor() {
		this.defaultConfig = this.cogSrv.merge("lodop", {
			url: "http://localhost:8443/CLodopfuncs.js",
			name: "CLODOP",
			companyName: "",
			checkMaxCount: 100
		});
		this.cog = this.defaultConfig;
	}
	get cog() {
		return this._cog;
	}
	set cog(value) {
		this._cog = {
			...this.defaultConfig,
			...value
		};
	}
	get events() {
		return this._events.asObservable();
	}
	get lodop() {
		if (this._lodop) return of({
			ok: true,
			lodop: this._lodop
		});
		if (this.pending) return this._init.asObservable();
		this.request();
		return this._init.asObservable();
	}
	get printer() {
		this.check();
		const ret = [];
		const count = this._lodop.GET_PRINTER_COUNT();
		for (let index = 0; index < count; index++) ret.push(this._lodop.GET_PRINTER_NAME(index));
		return ret;
	}
	check() {
		if (!this._lodop) throw new Error(`请务必先调用 lodop 获取对象`);
	}
	request() {
		this.pending = true;
		const urlObj = new URL(this.cog.url);
		urlObj.searchParams.set("name", this.cog.name);
		const url = urlObj.toString();
		let checkMaxCount = this.cog.checkMaxCount;
		const onResolve = (status, error) => {
			this._init.next({
				ok: status === "ok",
				status,
				error,
				lodop: this._lodop
			});
		};
		const checkStatus = () => {
			--checkMaxCount;
			if (this._lodop.webskt && this._lodop.webskt.readyState === 1) onResolve("ok");
			else {
				if (checkMaxCount < 0) {
					onResolve("check-limit");
					return;
				}
				setTimeout(() => checkStatus(), 100);
			}
		};
		this.scriptSrv.loadScript(url).then((res) => {
			if (res.status !== "ok") {
				this.pending = false;
				onResolve("script-load-error", res[0]);
				return;
			}
			const win = window;
			if (Object.prototype.hasOwnProperty.call(win, this.cog.name)) this._lodop = win[this.cog.name];
			if (this._lodop === null) {
				onResolve("load-variable-name-error", { name: this.cog.name });
				return;
			}
			this._lodop.SET_LICENSES(this.cog.companyName, this.cog.license, this.cog.licenseA, this.cog.licenseB);
			checkStatus();
		});
	}
	reset() {
		this._lodop = null;
		this.pending = false;
		this.request();
	}
	attachCode(code, contextObj, parser) {
		this.check();
		if (!parser) parser = /LODOP\.([^(]+)\(([^\n]+)?\);/i;
		code.split("\n").forEach((line) => {
			const res = parser.exec(line.trim());
			if (!res) return;
			const fn = this._lodop[res[1]];
			if (fn) {
				let arr = null;
				try {
					arr = new Function(`return [${res[2]}]`)();
				} catch {}
				if (arr != null && Array.isArray(arr) && contextObj) {
					for (let i = 0; i < arr.length; i++) if (typeof arr[i] === "string") arr[i] = arr[i].replace(/{{(.*?)}}/g, (_match, key) => contextObj[key.trim()] ?? "");
				}
				fn.apply(this._lodop, arr);
			}
		});
	}
	design() {
		this.check();
		const tid = this._lodop.PRINT_DESIGN();
		return new Promise((resolve) => {
			this._lodop.On_Return = (taskID, value) => {
				if (tid !== taskID) return;
				this._lodop.On_Return = null;
				resolve(`${value}`);
			};
		});
	}
	printDo() {
		const data = this.printBuffer.shift();
		if (!data) return;
		this.attachCode(data.code, data.item, data.parser);
		const tid = this._lodop.PRINT();
		this._lodop.On_Return = (taskID, value) => {
			if (tid !== taskID) return;
			this._lodop.On_Return = null;
			this._events.next({
				ok: value === true,
				error: value === true ? null : value,
				...data
			});
			this.printDo();
		};
	}
	print(code, contextObj, parser) {
		this.check();
		if (contextObj) this.printBuffer.push(...(Array.isArray(contextObj) ? contextObj : [contextObj]).map((item) => {
			return {
				code,
				parser,
				item
			};
		}));
		this.printDo();
	}
	ngOnDestroy() {
		this._init.unsubscribe();
		this._events.unsubscribe();
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: LodopService,
		deps: [],
		target: i0.ɵɵFactoryTarget.Injectable
	});
	static ɵprov = i0.ɵɵngDeclareInjectable({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: LodopService,
		providedIn: "root"
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: LodopService,
	decorators: [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}],
	ctorParameters: () => []
});
var LodopModule = class LodopModule {
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: LodopModule,
		deps: [],
		target: i0.ɵɵFactoryTarget.NgModule
	});
	static ɵmod = i0.ɵɵngDeclareNgModule({
		minVersion: "14.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: LodopModule
	});
	static ɵinj = i0.ɵɵngDeclareInjector({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: LodopModule
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: LodopModule,
	decorators: [{
		type: NgModule,
		args: [{}]
	}]
});
export { LodopModule, LodopService };

//# sourceMappingURL=lodop.mjs.map