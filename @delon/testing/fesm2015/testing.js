import { tick, TestBed, flush, discardPeriodicTasks } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NzDropDownDirective } from 'ng-zorro-antd/dropdown';

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Creates a browser MouseEvent with the specified options. */
function createMouseEvent(type, x = 0, y = 0) {
    const event = document.createEvent('MouseEvent');
    event.initMouseEvent(type, false /* canBubble */, false /* cancelable */, window /* view */, 0 /* detail */, x /* screenX */, y /* screenY */, x /* clientX */, y /* clientY */, false /* ctrlKey */, false /* altKey */, false /* shiftKey */, false /* metaKey */, 0 /* button */, null /* relatedTarget */);
    return event;
}
/** Creates a browser TouchEvent with the specified pointer coordinates. */
function createTouchEvent(type, pageX = 0, pageY = 0) {
    // In favor of creating events that work for most of the browsers, the event is created
    // as a basic UI Event. The necessary details for the event will be set manually.
    const event = document.createEvent('UIEvent');
    const touchDetails = { pageX, pageY };
    event.initUIEvent(type, true, true, window, 0);
    // Most of the browsers don't have a "initTouchEvent" method that can be used to define
    // the touch details.
    Object.defineProperties(event, {
        touches: { value: [touchDetails] },
    });
    return event;
}
/** Dispatches a keydown event from an element. */
function createKeyboardEvent(type, keyCode, target, key) {
    const event = document.createEvent('KeyboardEvent');
    // Firefox does not support `initKeyboardEvent`, but supports `initKeyEvent`.
    const initEventFn = (event.initKeyEvent || event.initKeyboardEvent).bind(event);
    const originalPreventDefault = event.preventDefault;
    initEventFn(type, true, true, window, 0, 0, 0, 0, 0, keyCode);
    // Webkit Browsers don't set the keyCode when calling the init function.
    // See related bug https://bugs.webkit.org/show_bug.cgi?id=16735
    Object.defineProperties(event, {
        keyCode: { get: () => keyCode },
        key: { get: () => key },
        target: { get: () => target },
    });
    // IE won't set `defaultPrevented` on synthetic events so we need to do it manually.
    event.preventDefault = function () {
        Object.defineProperty(event, 'defaultPrevented', { get: () => true });
        // tslint:disable-next-line:no-invalid-this
        return originalPreventDefault.apply(this, arguments);
    };
    return event;
}
/** Creates a fake event object with any desired event type. */
function createFakeEvent(type, canBubble = true, cancelable = true) {
    const event = document.createEvent('Event');
    event.initEvent(type, canBubble, cancelable);
    return event;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Utility to dispatch any event on a Node. */
function dispatchEvent(node, event) {
    node.dispatchEvent(event);
    return event;
}
/** Shorthand to dispatch a fake event on a specified node. */
function dispatchFakeEvent(node, type, canBubble) {
    return dispatchEvent(node, typeof type === 'string' ? createFakeEvent(type, canBubble) : type);
}
/** Shorthand to dispatch a keyboard event with a specified key code. */
function dispatchKeyboardEvent(node, type, keyCode, target) {
    return dispatchEvent(node, createKeyboardEvent(type, keyCode, target));
}
/** Shorthand to dispatch a mouse event on the specified coordinates. */
function dispatchMouseEvent(node, type, x = 0, y = 0, event = createMouseEvent(type, x, y)) {
    return dispatchEvent(node, event);
}
/** Shorthand to dispatch a touch event on the specified coordinates. */
function dispatchTouchEvent(node, type, x = 0, y = 0) {
    return dispatchEvent(node, createTouchEvent(type, x, y));
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
 * @param value Value to be set on the input.
 * @param element Element onto which to set the value.
 */
function typeInElement(value, element) {
    element.focus();
    element.value = value;
    dispatchFakeEvent(element, 'input');
}

const DROPDOWN_MIN_TIME = 1000;
/**
 * 触发 dropdown
 */
function dispatchDropDown(dl, trigger, allowNull = true) {
    const directive = dl.query(By.directive(NzDropDownDirective));
    if (allowNull && directive == null) {
        return false;
    }
    const el = directive.injector.get(NzDropDownDirective).elementRef.nativeElement;
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
        // tslint:disable-next-line:no-string-literal
        return this.context['comp'];
    }
    get chart() {
        return this.comp.chart;
    }
    genModule(module, comp) {
        TestBed.configureTestingModule({
            imports: [module],
            declarations: [comp],
        });
        return this;
    }
    genComp(comp, dc = false) {
        this.fixture = TestBed.createComponent(comp);
        if (dc) {
            this.dcFirst();
        }
        return this;
    }
    makeModule(module, comp, options = { dc: true }) {
        this.genModule(module, comp).genComp(comp, options.dc);
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
        // tslint:disable-next-line:no-string-literal
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
        // tslint:disable-next-line: no-string-literal
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
            clientY: clientPoint.y,
        });
        this.chart.canvas.get('el').dispatchEvent(event);
        return this;
    }
}
function checkDelay(module, comp, page = null) {
    if (page == null) {
        page = new PageG2().makeModule(module, comp, { dc: false });
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

export { DROPDOWN_MIN_TIME, PageG2, PageG2DataCount, PageG2Height, TestContext, checkDelay, cleanCdkOverlayHtml, createFakeEvent, createKeyboardEvent, createMouseEvent, createTestContext, createTouchEvent, dispatchDropDown, dispatchEvent, dispatchFakeEvent, dispatchKeyboardEvent, dispatchMouseEvent, dispatchTouchEvent, typeInElement };
//# sourceMappingURL=testing.js.map
