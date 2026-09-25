import extend from "extend";
import { DOCUMENT } from "@angular/common";
import * as i0 from "@angular/core";
import { Injectable, inject } from "@angular/core";
import { BehaviorSubject, filter, isObservable, share } from "rxjs";
function deepGet(obj, path, defaultValue) {
	if (!obj || path == null || path.length === 0) return defaultValue;
	if (!Array.isArray(path)) path = ~path.indexOf(".") ? path.split(".") : [path];
	if (path.length === 1) {
		const checkObj = obj[path[0]];
		return typeof checkObj === "undefined" ? defaultValue : checkObj;
	}
	const res = path.reduce((o, k) => (o ?? {})[k], obj);
	return typeof res === "undefined" ? defaultValue : res;
}
function deepCopy(obj) {
	return extend(true, {}, { _: obj })._;
}
function deepMergeKey(original, arrayProcessMethod, ...objects) {
	if (Array.isArray(original) || typeof original !== "object") return original;
	const isObject = (v) => typeof v === "object";
	const merge = (target, obj) => {
		Object.keys(obj).filter((key) => key !== "__proto__" && Object.prototype.hasOwnProperty.call(obj, key)).forEach((key) => {
			const fromValue = obj[key];
			const toValue = target[key];
			if (Array.isArray(toValue)) target[key] = arrayProcessMethod ? fromValue : [...toValue, ...fromValue];
			else if (typeof fromValue === "function") target[key] = fromValue;
			else if (fromValue != null && isObject(fromValue) && toValue != null && isObject(toValue)) target[key] = merge(toValue, fromValue);
			else target[key] = deepCopy(fromValue);
		});
		return target;
	};
	objects.filter((v) => v != null && isObject(v)).forEach((v) => merge(original, v));
	return original;
}
function deepMerge(original, ...objects) {
	return deepMergeKey(original, false, ...objects);
}
const record = {};
const PREFIX = "[@DELON]:";
function notRecorded(...args) {
	const asRecord = args.reduce((acc, c) => acc + c.toString(), "");
	if (record[asRecord]) return false;
	else {
		record[asRecord] = true;
		return true;
	}
}
function consoleCommonBehavior(consoleFunc, ...args) {
	if ((typeof ngDevMode === "undefined" || ngDevMode) && notRecorded(...args)) consoleFunc(...args);
}
const warn = (...args) => consoleCommonBehavior((...arg) => console.warn(PREFIX, ...arg), ...args);
const warnDeprecation = (...args) => {
	if (typeof ngDevMode === "undefined" || ngDevMode) return () => {};
	const stack = (/* @__PURE__ */ new Error()).stack;
	return consoleCommonBehavior((...arg) => console.warn(PREFIX, "deprecated:", ...arg, stack), ...args);
};
const log = (...args) => {
	if (typeof ngDevMode === "undefined" || ngDevMode) console.log(PREFIX, ...args);
};
var LazyService = class LazyService {
	doc = inject(DOCUMENT);
	list = {};
	cached = {};
	_notify = new BehaviorSubject([]);
	get change() {
		return this._notify.asObservable().pipe(share(), filter((ls) => ls.length !== 0));
	}
	clear() {
		this.list = {};
		this.cached = {};
	}
	attachAttributes(el, attributes) {
		if (attributes == null) return;
		Object.entries(attributes).forEach(([key, value]) => {
			el.setAttribute(key, value);
		});
	}
	load(paths) {
		if (!Array.isArray(paths)) paths = [paths];
		const promises = [];
		paths.map((v) => typeof v !== "object" ? { path: v } : v).forEach((item) => {
			if (item.path.endsWith(".js")) promises.push(this.loadScript(item.path, item.options));
			else promises.push(this.loadStyle(item.path, item.options));
		});
		return Promise.all(promises).then((res) => {
			this._notify.next(res);
			return Promise.resolve(res);
		});
	}
	loadScript(path, innerContent, attributes) {
		const options = typeof innerContent === "object" ? innerContent : {
			innerContent,
			attributes
		};
		return new Promise((resolve) => {
			if (this.list[path] === true) {
				resolve({
					...this.cached[path],
					status: "loading"
				});
				return;
			}
			this.list[path] = true;
			const onSuccess = (item) => {
				this.cached[path] = item;
				resolve(item);
				this._notify.next([item]);
			};
			const node = this.doc.createElement("script");
			node.type = "text/javascript";
			node.src = path;
			this.attachAttributes(node, options.attributes);
			if (options.innerContent) node.innerHTML = options.innerContent;
			node.onload = () => onSuccess({
				path,
				status: "ok"
			});
			node.onerror = (error) => onSuccess({
				path,
				status: "error",
				error
			});
			this.doc.getElementsByTagName("head")[0].appendChild(node);
		});
	}
	loadStyle(path, rel, innerContent, attributes) {
		const options = typeof rel === "object" ? rel : {
			rel,
			innerContent,
			attributes
		};
		return new Promise((resolve) => {
			if (this.list[path] === true) {
				resolve(this.cached[path]);
				return;
			}
			this.list[path] = true;
			const node = this.doc.createElement("link");
			node.rel = options.rel ?? "stylesheet";
			node.type = "text/css";
			node.href = path;
			this.attachAttributes(node, options.attributes);
			if (options.innerContent) node.innerHTML = options.innerContent;
			this.doc.getElementsByTagName("head")[0].appendChild(node);
			const item = {
				path,
				status: "ok"
			};
			this.cached[path] = item;
			resolve(item);
		});
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: LazyService,
		deps: [],
		target: i0.ɵɵFactoryTarget.Injectable
	});
	static ɵprov = i0.ɵɵngDeclareInjectable({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: LazyService,
		providedIn: "root"
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: LazyService,
	decorators: [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}]
});
function throwError(msg, actual, expected, comparison) {
	if (typeof ngDevMode === "undefined" || ngDevMode) throw new Error(`ASSERTION ERROR: ${msg}${comparison == null ? "" : ` [Expected=> ${expected} ${comparison} ${actual} <=Actual]`}`);
}
function assert(expression, msg) {
	if (!expression) throwError(msg);
}
function assertEmpty(actual, msg) {
	if (actual == null) throwError(msg, typeof actual, "NULL", "==");
}
function assertNumber(actual, msg) {
	if (!(typeof actual === "number")) throwError(msg, typeof actual, "number", "===");
}
function assertString(actual, msg) {
	if (!(typeof actual === "string")) throwError(msg, actual === null ? "null" : typeof actual, "string", "===");
}
function assertArray(actual, msg) {
	if (!Array.isArray(actual)) throwError(msg, actual === null ? "null" : typeof actual, "array", "===");
}
function assertObservable(obj, msg) {
	if (!isObservable(obj)) throwError(msg, obj === null ? "null" : typeof obj, "Observable", "===");
}
export { LazyService, PREFIX, assert, assertArray, assertEmpty, assertNumber, assertObservable, assertString, deepCopy, deepGet, deepMerge, deepMergeKey, log, warn, warnDeprecation };

//# sourceMappingURL=other.mjs.map