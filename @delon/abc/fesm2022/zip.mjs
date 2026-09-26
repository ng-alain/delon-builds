import { HttpClient } from "@angular/common/http";
import * as i0 from "@angular/core";
import { Injectable, inject } from "@angular/core";
import { saveAs } from "file-saver";
import { AlainConfigService } from "@delon/util/config";
import { LazyService } from "@delon/util/other";
var ZipService = class ZipService {
	http = inject(HttpClient);
	lazy = inject(LazyService);
	cogSrv = inject(AlainConfigService);
	cog;
	constructor() {
		this.cog = this.cogSrv.merge("zip", {
			url: "https://cdn.jsdelivr.net/npm/jszip@3/dist/jszip.min.js",
			utils: []
		});
	}
	init() {
		return this.lazy.load([this.cog.url].concat(this.cog.utils));
	}
	check(zip) {
		if (!zip) throw new Error("get instance via `ZipService.create()`");
	}
	read(fileOrUrl, options) {
		return new Promise((resolve, reject) => {
			const resolveCallback = resolve;
			this.init().then(() => {
				if (typeof fileOrUrl === "string") {
					this.http.request("GET", fileOrUrl, { responseType: "arraybuffer" }).subscribe({
						next: (res) => {
							JSZip.loadAsync(res, options).then((ret) => resolveCallback(ret));
						},
						error: (err) => {
							reject(err);
						}
					});
					return;
				}
				const reader = new FileReader();
				reader.onload = (e) => {
					JSZip.loadAsync(e.target.result, options).then((ret) => resolveCallback(ret));
				};
				reader.readAsArrayBuffer(fileOrUrl);
			});
		});
	}
	create() {
		return new Promise((resolve) => {
			this.init().then(() => {
				resolve(new JSZip());
			}).catch(() => resolve(null));
		});
	}
	pushUrl(zip, path, url) {
		this.check(zip);
		return new Promise((resolve, reject) => {
			this.http.request("GET", url, { responseType: "arraybuffer" }).subscribe({
				next: (res) => {
					zip.file(path, res);
					resolve();
				},
				error: (error) => {
					reject({
						url,
						error
					});
				}
			});
		});
	}
	save(zip, options) {
		this.check(zip);
		const opt = {
			filename: "download.zip",
			...options
		};
		return new Promise((resolve, reject) => {
			zip.generateAsync({
				type: "blob",
				...opt.options
			}, opt.update).then((data) => {
				if (opt.callback) opt.callback(data);
				saveAs(data, opt.filename);
				resolve();
			}, (err) => {
				reject(err);
			});
		});
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: ZipService,
		deps: [],
		target: i0.ɵɵFactoryTarget.Injectable
	});
	static ɵprov = i0.ɵɵngDeclareInjectable({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: ZipService,
		providedIn: "root"
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: ZipService,
	decorators: [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}],
	ctorParameters: () => []
});
export { ZipService };

//# sourceMappingURL=zip.mjs.map