import { Platform } from "@angular/cdk/platform";
import { DOCUMENT } from "@angular/common";
import * as i0 from "@angular/core";
import { Injectable, inject } from "@angular/core";
var CookieService = class CookieService {
	_doc = inject(DOCUMENT);
	platform = inject(Platform);
	get doc() {
		return this._doc ?? document;
	}
	get cookie() {
		return this.platform.isBrowser ? this.doc.cookie : "";
	}
	getAll() {
		const ret = {};
		const arr = this.cookie.split("; ");
		for (let i = 0; i < arr.length; i++) {
			const cookie = arr[i];
			const index = cookie.indexOf("=");
			if (index > 0) {
				const name = decodeURIComponent(cookie.substring(0, index));
				if (ret[name] == null) ret[name] = decodeURIComponent(cookie.substring(index + 1));
			}
		}
		return ret;
	}
	get(key) {
		return this.getAll()[key];
	}
	put(key, value, options) {
		if (!this.platform.isBrowser) return;
		const opt = {
			path: "/",
			...options
		};
		if (typeof opt.expires === "number") opt.expires = /* @__PURE__ */ new Date(+/* @__PURE__ */ new Date() + opt.expires * 1e3);
		if (typeof opt.expires !== "string") opt.expires = opt.expires ? opt.expires.toUTCString() : "";
		const optStr = opt;
		const attributes = Object.keys(optStr).filter((k) => optStr[k] && optStr[k] !== true).map((k) => `${k}=${optStr[k].split(";")[0]}`).join(";");
		const keyValue = `${encodeURIComponent(String(key))}=${encodeURIComponent(String(value))}`;
		this.doc.cookie = `${keyValue}${attributes ? `; ${attributes}` : ""}`;
	}
	remove(key, options) {
		this.put(key, "", options);
	}
	removeAll() {
		this.doc.cookie = "";
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: CookieService,
		deps: [],
		target: i0.ɵɵFactoryTarget.Injectable
	});
	static ɵprov = i0.ɵɵngDeclareInjectable({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: CookieService,
		providedIn: "root"
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: CookieService,
	decorators: [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}]
});
function copy(value) {
	return new Promise((resolve) => {
		let copyTextArea = null;
		try {
			copyTextArea = document.createElement("textarea");
			copyTextArea.style.height = "0px";
			copyTextArea.style.opacity = "0";
			copyTextArea.style.width = "0px";
			document.body.appendChild(copyTextArea);
			copyTextArea.value = value;
			copyTextArea.select();
			document.execCommand("copy");
			resolve(value);
		} finally {
			if (copyTextArea && copyTextArea.parentNode) copyTextArea.parentNode.removeChild(copyTextArea);
		}
	});
}
function isEmpty(element) {
	const nodes = element.childNodes;
	for (let i = 0; i < nodes.length; i++) {
		const node = nodes.item(i);
		if (node.nodeType === 1 && node.outerHTML.toString().trim().length !== 0) return false;
		else if (node.nodeType === 3 && node.textContent.toString().trim().length !== 0) return false;
	}
	return true;
}
var ScrollService = class ScrollService {
	_doc = inject(DOCUMENT);
	platform = inject(Platform);
	_getDoc() {
		return this._doc ?? document;
	}
	_getWin() {
		return this._getDoc().defaultView ?? window;
	}
	getScrollPosition(element) {
		if (!this.platform.isBrowser) return [0, 0];
		const win = this._getWin();
		if (element && element !== win) return [element.scrollLeft, element.scrollTop];
		else return [win.scrollX, win.scrollY];
	}
	scrollToPosition(element, position) {
		if (!this.platform.isBrowser) return;
		(element ?? this._getWin()).scrollTo(position[0], position[1]);
	}
	scrollToElement(element, topOffset = 0) {
		if (!this.platform.isBrowser) return;
		if (!element) element = this._getDoc().body;
		element.scrollIntoView();
		const win = this._getWin();
		if (win && win.scrollBy) {
			win.scrollBy(0, element.getBoundingClientRect().top - topOffset);
			if (win.scrollY < 20) win.scrollBy(0, -win.scrollY);
		}
	}
	scrollToTop(topOffset = 0) {
		if (!this.platform.isBrowser) return;
		this.scrollToElement(this._getDoc().body, topOffset);
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: ScrollService,
		deps: [],
		target: i0.ɵɵFactoryTarget.Injectable
	});
	static ɵprov = i0.ɵɵngDeclareInjectable({
		minVersion: "12.0.0",
		version: "22.2.0",
		ngImport: i0,
		type: ScrollService,
		providedIn: "root"
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.0",
	ngImport: i0,
	type: ScrollService,
	decorators: [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}]
});
function removeClass(el, classMap, renderer) {
	Object.keys(classMap).forEach((key) => renderer.removeClass(el, key));
}
function addClass(el, classMap, renderer) {
	for (const i in classMap) if (classMap[i]) renderer.addClass(el, i);
}
function updateHostClass(el, renderer, classMap, preClean = false) {
	if (preClean === true) renderer.removeAttribute(el, "class");
	else removeClass(el, classMap, renderer);
	classMap = { ...classMap };
	addClass(el, classMap, renderer);
}
export { CookieService, ScrollService, copy, isEmpty, updateHostClass };

//# sourceMappingURL=browser.mjs.map