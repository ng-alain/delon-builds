import { By } from "@angular/platform-browser";
import { NzDropdownDirective } from "ng-zorro-antd/dropdown";
import { isSignal } from "@angular/core";
import { TestBed } from "@angular/core/testing";
function dispatchEvent(node, event) {
	node.dispatchEvent(event);
	return event;
}
function dispatchFakeEvent(node, type, canBubble) {
	return dispatchEvent(node, typeof type === "string" ? new Event(type, { bubbles: canBubble ?? true }) : type);
}
/**
* @license
* Copyright Google LLC All Rights Reserved.
*
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://angular.io/license
*/
function typeInElement(value, element) {
	element.focus();
	element.value = value;
	dispatchFakeEvent(element, "input");
	dispatchFakeEvent(element, "change");
}
const DROPDOWN_MIN_TIME = 1e3;
function dispatchDropDown(dl, trigger, allowNull = true) {
	const directive = dl.query(By.directive(NzDropdownDirective));
	if (allowNull && directive == null) return false;
	const el = directive.injector.get(NzDropdownDirective).elementRef.nativeElement;
	if (trigger === "click") dispatchFakeEvent(el, "click");
	else dispatchFakeEvent(el, "mouseenter");
	return true;
}
const PageG2DataCount = 2;
const PageG2Height = 100;
var PageG2 = class {
	fixture;
	constructor(fixture = null) {
		this.fixture = fixture;
	}
	get dl() {
		return this.fixture.debugElement;
	}
	get context() {
		return this.fixture.componentInstance;
	}
	get comp() {
		const c = this.context["comp"];
		return isSignal(c) ? c() : c;
	}
	get chart() {
		return this.comp.chart;
	}
	async ready() {
		const comp = this.comp;
		const isBase = typeof comp?.loaded === "function" && typeof comp?.ready?.subscribe === "function";
		if (isBase) {
			if (!comp.loaded()) await new Promise((resolve, reject) => {
				const readyRef = comp.ready.subscribe(() => {
					readyRef?.unsubscribe?.();
					errorRef?.unsubscribe?.();
					resolve();
				});
				const errorRef = comp.error?.subscribe?.((err) => {
					readyRef?.unsubscribe?.();
					errorRef?.unsubscribe?.();
					reject(err);
				});
			});
		} else await new Promise((resolve) => setTimeout(resolve, 0));
		if (isBase) await new Promise((resolve) => setTimeout(resolve, 0));
		this.dc();
	}
	genComp(comp, dc = false) {
		this.fixture = TestBed.createComponent(comp);
		if (dc) this.dcFirst();
		return this;
	}
	dcFirst() {
		this.dc();
		return this;
	}
	async end() {
		await this.ready();
	}
	dc() {
		this.fixture.changeDetectorRef.markForCheck();
		this.fixture.detectChanges();
		return this;
	}
	destroy() {
		this.comp.ngOnDestroy();
	}
	newData(data) {
		const ctx = this.context;
		if (typeof ctx.data === "function" && typeof ctx.data.set === "function") ctx.data.set(data);
		else ctx.data = data;
		this.dc();
		return this;
	}
	getEls(cls) {
		return this.dl.nativeElement.querySelectorAll(cls);
	}
	getEl(cls) {
		return this.dl.nativeElement.querySelector(cls);
	}
	expectSpec(assert) {
		assert(this.chart.options());
		return this;
	}
	isDataCount(num) {
		this.expectSpec((spec) => {
			expect(spec.data).toBeDefined();
			expect(spec.data.length).toBe(num);
		});
		return this;
	}
	isCanvas(stauts = true) {
		this.isExists("canvas", stauts);
		return this;
	}
	isText(cls, value) {
		const el = this.getEl(cls);
		expect(el ? el.textContent.trim() : "").toBe(value);
		return this;
	}
	isExists(cls, stauts = true) {
		expect(this.getEl(cls) != null).toBe(stauts);
		return this;
	}
	checkSpec(key, value) {
		this.expectSpec((spec) => expect(spec[key]).toEqual(value));
		return this;
	}
};
async function checkDelay(comp, page = null) {
	if (page == null) page = new PageG2().genComp(comp, false);
	const context = page.context;
	if (typeof context.delay === "undefined") {
		console.warn(`You muse be dinfed "delay" property in test component`);
		return;
	}
	if (typeof context.delay === "function" && typeof context.delay.set === "function") context.delay.set(100);
	else context.delay = 100;
	page.dc();
	const instance = page.comp;
	let settled = false;
	const readyRef = instance.ready?.subscribe?.(() => settled = true);
	page.fixture.destroy();
	expect(settled).toBe(false);
	await new Promise((resolve) => setTimeout(resolve, 200));
	expect(settled).toBe(false);
	readyRef?.unsubscribe?.();
}
var TestContext = class {
	fixture;
	constructor(fixture) {
		this.fixture = fixture;
	}
	get component() {
		return this.fixture.componentInstance;
	}
	get el() {
		return this.fixture.debugElement.nativeElement;
	}
	get dl() {
		return this.fixture.debugElement;
	}
	get context() {
		return this.fixture.componentInstance;
	}
	detectChanges() {
		this.fixture.detectChanges();
	}
	resolve(component) {
		return this.fixture.debugElement.injector.get(component);
	}
};
const createTestContext = (component) => {
	return new TestContext(TestBed.createComponent(component));
};
function cleanCdkOverlayHtml() {
	const els = document.querySelectorAll(".cdk-overlay-container");
	if (els && els.length > 0) els.forEach((el) => el.innerHTML = "");
}
export { DROPDOWN_MIN_TIME, PageG2, PageG2DataCount, PageG2Height, TestContext, checkDelay, cleanCdkOverlayHtml, createTestContext, dispatchDropDown, dispatchEvent, dispatchFakeEvent, typeInElement };

//# sourceMappingURL=testing.mjs.map