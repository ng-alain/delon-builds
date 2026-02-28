import { tick, TestBed, flush, discardPeriodicTasks } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NzDropdownDirective } from 'ng-zorro-antd/dropdown';

/** Utility to dispatch any event on a Node. */
function dispatchEvent(node, event) {
    node.dispatchEvent(event);
    return event;
}
/** Shorthand to dispatch a fake event on a specified node. */
function dispatchFakeEvent(node, type, canBubble) {
    return dispatchEvent(node, typeof type === 'string' ? new Event(type, { bubbles: canBubble ?? true }) : type);
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Focuses an input, sets its value and dispatches
 * the `input` event, simulating the user typing.
 *
 * @param value Value to be set on the input.
 * @param element Element onto which to set the value.
 */
function typeInElement(value, element) {
    element.focus();
    element.value = value;
    dispatchFakeEvent(element, 'input');
    dispatchFakeEvent(element, 'change');
}

const DROPDOWN_MIN_TIME = 1000;
/**
 * 触发 dropdown
 */
function dispatchDropDown(dl, trigger, allowNull = true) {
    const directive = dl.query(By.directive(NzDropdownDirective));
    if (allowNull && directive == null) {
        return false;
    }
    const el = directive.injector.get(NzDropdownDirective).elementRef.nativeElement;
    if (trigger === 'click') {
        dispatchFakeEvent(el, 'click');
    }
    else {
        dispatchFakeEvent(el, 'mouseenter');
    }
    tick(DROPDOWN_MIN_TIME);
    return true;
}

const PageG2DataCount = 2;
const PageG2Height = 100;
class PageG2 {
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
        return this.context['comp'];
    }
    get chart() {
        return this.comp.chart;
    }
    genComp(comp, dc = false) {
        this.fixture = TestBed.createComponent(comp);
        if (dc) {
            this.dcFirst();
        }
        return this;
    }
    dcFirst() {
        this.dc();
        flush();
        discardPeriodicTasks();
        // FIX: `Error during cleanup of component`
        if (this.comp && typeof this.comp.chart !== 'undefined') {
            spyOn(this.comp.chart, 'destroy');
        }
        return this;
    }
    dc() {
        this.fixture.changeDetectorRef.markForCheck();
        this.fixture.detectChanges();
        return this;
    }
    end() {
        // The 201 value is delay value
        tick(201);
        flush();
        discardPeriodicTasks();
        return this;
    }
    destroy() {
        this.comp.ngOnDestroy();
    }
    newData(data) {
        this.context['data'] = data;
        this.dc();
        return this;
    }
    getEls(cls) {
        return this.dl.nativeElement.querySelectorAll(cls);
    }
    getEl(cls) {
        return this.dl.nativeElement.querySelector(cls);
    }
    getController(type) {
        return this.chart.getController(type);
    }
    isCanvas(stauts = true) {
        this.isExists('canvas', stauts);
        return this;
    }
    isText(cls, value) {
        const el = this.getEl(cls);
        expect(el ? el.textContent.trim() : '').toBe(value);
        return this;
    }
    isExists(cls, stauts = true) {
        expect(this.getEl(cls) != null).toBe(stauts);
        return this;
    }
    checkOptions(key, value) {
        expect(this.chart[key]).toBe(value);
        return this;
    }
    checkAttrOptions(type, key, value) {
        const x = this.chart[type][0].attributeOption[key];
        expect(x.field).toBe(value);
        return this;
    }
    isXScalesCount(num) {
        const x = this.chart.getXScale();
        expect(x.values.length).toBe(num);
        return this;
    }
    isYScalesCount(num) {
        const y = this.chart.getYScales();
        expect(y.length).toBe(1);
        expect(y[0].values.length).toBe(num);
        return this;
    }
    isDataCount(type, num) {
        const results = this.chart[type];
        expect(results.length).toBeGreaterThan(0);
        expect(results[0].data.length).toBe(num);
        return this;
    }
    get firstDataPoint() {
        return this.chart.getXY(this.context['data'][0]);
    }
    checkTooltip(_includeText, point) {
        if (!point) {
            point = this.firstDataPoint;
        }
        this.chart.showTooltip(point);
        expect(this.chart.getController('tooltip') != null).toBe(true);
        return this;
    }
    checkClickItem() {
        const point = this.firstDataPoint;
        const clientPoint = this.chart.canvas.getClientByPoint(point.x, point.y);
        const event = new MouseEvent('click', {
            clientX: clientPoint.x,
            clientY: clientPoint.y
        });
        this.chart.canvas.get('el').dispatchEvent(event);
        return this;
    }
}
function checkDelay(comp, page = null) {
    if (page == null) {
        page = new PageG2().genComp(comp, false);
    }
    const context = page.context;
    if (typeof context.delay === 'undefined') {
        console.warn(`You muse be dinfed "delay" property in test component`);
        return;
    }
    context.delay = 100;
    page.dc();
    page.comp.ngOnDestroy();
    expect(page.chart == null).toBe(true);
    tick(201);
    discardPeriodicTasks();
}

class TestContext {
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
}
const createTestContext = (component) => {
    return new TestContext(TestBed.createComponent(component));
};

/**
 * 清除Cdk的窗体，以便下一次使用，一般这样使用：
 * ```ts
 * afterEach(cleanCdkOverlayHtml);
 * ```
 */
function cleanCdkOverlayHtml() {
    const els = document.querySelectorAll('.cdk-overlay-container');
    if (els && els.length > 0) {
        els.forEach(el => (el.innerHTML = ''));
    }
}

// from angular

/**
 * Generated bundle index. Do not edit.
 */

export { DROPDOWN_MIN_TIME, PageG2, PageG2DataCount, PageG2Height, TestContext, checkDelay, cleanCdkOverlayHtml, createTestContext, dispatchDropDown, dispatchEvent, dispatchFakeEvent, typeInElement };
//# sourceMappingURL=testing.mjs.map
