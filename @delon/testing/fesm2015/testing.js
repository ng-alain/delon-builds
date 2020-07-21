import { tick, TestBed, flush, discardPeriodicTasks } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NzDropDownDirective } from 'ng-zorro-antd/dropdown';

/**
 * @fileoverview added by tsickle
 * Generated from: src/event-objects.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates a browser MouseEvent with the specified options.
 * @param {?} type
 * @param {?=} x
 * @param {?=} y
 * @return {?}
 */
function createMouseEvent(type, x = 0, y = 0) {
    /** @type {?} */
    const event = document.createEvent('MouseEvent');
    event.initMouseEvent(type, false /* canBubble */, false /* cancelable */, window /* view */, 0 /* detail */, x /* screenX */, y /* screenY */, x /* clientX */, y /* clientY */, false /* ctrlKey */, false /* altKey */, false /* shiftKey */, false /* metaKey */, 0 /* button */, null /* relatedTarget */);
    return event;
}
/**
 * Creates a browser TouchEvent with the specified pointer coordinates.
 * @param {?} type
 * @param {?=} pageX
 * @param {?=} pageY
 * @return {?}
 */
function createTouchEvent(type, pageX = 0, pageY = 0) {
    // In favor of creating events that work for most of the browsers, the event is created
    // as a basic UI Event. The necessary details for the event will be set manually.
    /** @type {?} */
    const event = document.createEvent('UIEvent');
    /** @type {?} */
    const touchDetails = { pageX, pageY };
    ((/** @type {?} */ (event))).initUIEvent(type, true, true, window, 0);
    // Most of the browsers don't have a "initTouchEvent" method that can be used to define
    // the touch details.
    Object.defineProperties(event, {
        touches: { value: [touchDetails] },
    });
    return event;
}
/**
 * Dispatches a keydown event from an element.
 * @param {?} type
 * @param {?} keyCode
 * @param {?=} target
 * @param {?=} key
 * @return {?}
 */
function createKeyboardEvent(type, keyCode, target, key) {
    /** @type {?} */
    const event = (/** @type {?} */ (document.createEvent('KeyboardEvent')));
    // Firefox does not support `initKeyboardEvent`, but supports `initKeyEvent`.
    /** @type {?} */
    const initEventFn = (event.initKeyEvent || event.initKeyboardEvent).bind(event);
    /** @type {?} */
    const originalPreventDefault = event.preventDefault;
    initEventFn(type, true, true, window, 0, 0, 0, 0, 0, keyCode);
    // Webkit Browsers don't set the keyCode when calling the init function.
    // See related bug https://bugs.webkit.org/show_bug.cgi?id=16735
    Object.defineProperties(event, {
        keyCode: { get: (/**
             * @return {?}
             */
            () => keyCode) },
        key: { get: (/**
             * @return {?}
             */
            () => key) },
        target: { get: (/**
             * @return {?}
             */
            () => target) },
    });
    // IE won't set `defaultPrevented` on synthetic events so we need to do it manually.
    event.preventDefault = (/**
     * @return {?}
     */
    function () {
        Object.defineProperty(event, 'defaultPrevented', { get: (/**
             * @return {?}
             */
            () => true) });
        // tslint:disable-next-line:no-invalid-this
        return originalPreventDefault.apply(this, arguments);
    });
    return event;
}
/**
 * Creates a fake event object with any desired event type.
 * @param {?} type
 * @param {?=} canBubble
 * @param {?=} cancelable
 * @return {?}
 */
function createFakeEvent(type, canBubble = true, cancelable = true) {
    /** @type {?} */
    const event = document.createEvent('Event');
    event.initEvent(type, canBubble, cancelable);
    return event;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/dispatch-events.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Utility to dispatch any event on a Node.
 * @param {?} node
 * @param {?} event
 * @return {?}
 */
function dispatchEvent(node, event) {
    node.dispatchEvent(event);
    return event;
}
/**
 * Shorthand to dispatch a fake event on a specified node.
 * @param {?} node
 * @param {?} type
 * @param {?=} canBubble
 * @return {?}
 */
function dispatchFakeEvent(node, type, canBubble) {
    return dispatchEvent(node, typeof type === 'string' ? createFakeEvent(type, canBubble) : type);
}
/**
 * Shorthand to dispatch a keyboard event with a specified key code.
 * @param {?} node
 * @param {?} type
 * @param {?} keyCode
 * @param {?=} target
 * @return {?}
 */
function dispatchKeyboardEvent(node, type, keyCode, target) {
    return (/** @type {?} */ (dispatchEvent(node, createKeyboardEvent(type, keyCode, target))));
}
/**
 * Shorthand to dispatch a mouse event on the specified coordinates.
 * @param {?} node
 * @param {?} type
 * @param {?=} x
 * @param {?=} y
 * @param {?=} event
 * @return {?}
 */
function dispatchMouseEvent(node, type, x = 0, y = 0, event = createMouseEvent(type, x, y)) {
    return (/** @type {?} */ (dispatchEvent(node, event)));
}
/**
 * Shorthand to dispatch a touch event on the specified coordinates.
 * @param {?} node
 * @param {?} type
 * @param {?=} x
 * @param {?=} y
 * @return {?}
 */
function dispatchTouchEvent(node, type, x = 0, y = 0) {
    return dispatchEvent(node, createTouchEvent(type, x, y));
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/type-in-element.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Focuses an input, sets its value and dispatches
 * the `input` event, simulating the user typing.
 * @param {?} value Value to be set on the input.
 * @param {?} element Element onto which to set the value.
 * @return {?}
 */
function typeInElement(value, element) {
    element.focus();
    element.value = value;
    dispatchFakeEvent(element, 'input');
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/zorro.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DROPDOWN_MIN_TIME = 1000;
/**
 * 触发 dropdown
 * @param {?} dl
 * @param {?} trigger
 * @param {?=} allowNull
 * @return {?}
 */
function dispatchDropDown(dl, trigger, allowNull = true) {
    /** @type {?} */
    const directive = dl.query(By.directive(NzDropDownDirective));
    if (allowNull && directive == null) {
        return false;
    }
    /** @type {?} */
    const el = (/** @type {?} */ (directive.injector.get(NzDropDownDirective).elementRef.nativeElement));
    if (trigger === 'click') {
        dispatchFakeEvent(el, 'click');
    }
    else {
        dispatchFakeEvent(el, 'mouseenter');
    }
    tick(DROPDOWN_MIN_TIME);
    return true;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/g2.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const PageG2DataCount = 2;
/** @type {?} */
const PageG2Height = 100;
/**
 * @template T
 */
class PageG2 {
    /**
     * @param {?=} fixture
     */
    constructor(fixture = null) {
        this.fixture = fixture;
    }
    /**
     * @return {?}
     */
    get dl() {
        return (/** @type {?} */ (this.fixture)).debugElement;
    }
    /**
     * @return {?}
     */
    get context() {
        return (/** @type {?} */ (this.fixture)).componentInstance;
    }
    /**
     * @return {?}
     */
    get comp() {
        // tslint:disable-next-line:no-string-literal
        return ((/** @type {?} */ (this.context)))['comp'];
    }
    /**
     * @return {?}
     */
    get chart() {
        return this.comp.chart;
    }
    /**
     * @template THIS,M
     * @this {THIS}
     * @param {?} module
     * @param {?} comp
     * @return {THIS}
     */
    genModule(module, comp) {
        TestBed.configureTestingModule({
            imports: [module],
            declarations: [comp],
        });
        return (/** @type {?} */ (this));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} comp
     * @param {?=} dc
     * @return {THIS}
     */
    genComp(comp, dc = false) {
        (/** @type {?} */ (this)).fixture = TestBed.createComponent(comp);
        if (dc) {
            (/** @type {?} */ (this)).dcFirst();
        }
        return (/** @type {?} */ (this));
    }
    /**
     * @template M
     * @param {?} module
     * @param {?} comp
     * @param {?=} options
     * @return {?}
     */
    makeModule(module, comp, options = { dc: true }) {
        this.genModule(module, comp).genComp(comp, options.dc);
        return this;
    }
    /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    dcFirst() {
        (/** @type {?} */ (this)).dc();
        flush();
        discardPeriodicTasks();
        // FIX: `Error during cleanup of component`
        if ((/** @type {?} */ (this)).comp && typeof (/** @type {?} */ (this)).comp.chart !== 'undefined') {
            spyOn((/** @type {?} */ (this)).comp.chart, 'destroy');
        }
        return (/** @type {?} */ (this));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    dc() {
        (/** @type {?} */ ((/** @type {?} */ (this)).fixture)).changeDetectorRef.markForCheck();
        (/** @type {?} */ ((/** @type {?} */ (this)).fixture)).detectChanges();
        return (/** @type {?} */ (this));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    end() {
        // The 201 value is delay value
        tick(201);
        flush();
        discardPeriodicTasks();
        return (/** @type {?} */ (this));
    }
    /**
     * @return {?}
     */
    destroy() {
        this.comp.ngOnDestroy();
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} data
     * @return {THIS}
     */
    newData(data) {
        // tslint:disable-next-line:no-string-literal
        ((/** @type {?} */ ((/** @type {?} */ (this)).context)))['data'] = data;
        (/** @type {?} */ (this)).dc();
        return (/** @type {?} */ (this));
    }
    /**
     * @param {?} cls
     * @return {?}
     */
    getEls(cls) {
        return ((/** @type {?} */ (this.dl.nativeElement))).querySelectorAll(cls);
    }
    /**
     * @param {?} cls
     * @return {?}
     */
    getEl(cls) {
        return (/** @type {?} */ (((/** @type {?} */ (this.dl.nativeElement))).querySelector(cls)));
    }
    /**
     * @param {?} type
     * @return {?}
     */
    getController(type) {
        return (/** @type {?} */ (this.chart.getController(type)));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?=} stauts
     * @return {THIS}
     */
    isCanvas(stauts = true) {
        (/** @type {?} */ (this)).isExists('canvas', stauts);
        return (/** @type {?} */ (this));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} cls
     * @param {?} value
     * @return {THIS}
     */
    isText(cls, value) {
        /** @type {?} */
        const el = (/** @type {?} */ (this)).getEl(cls);
        expect(el ? (/** @type {?} */ (el.textContent)).trim() : '').toBe(value);
        return (/** @type {?} */ (this));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} cls
     * @param {?=} stauts
     * @return {THIS}
     */
    isExists(cls, stauts = true) {
        expect((/** @type {?} */ (this)).getEl(cls) != null).toBe(stauts);
        return (/** @type {?} */ (this));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} key
     * @param {?} value
     * @return {THIS}
     */
    checkOptions(key, value) {
        expect(((/** @type {?} */ ((/** @type {?} */ (this)).chart)))[key]).toBe(value);
        return (/** @type {?} */ (this));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} type
     * @param {?} key
     * @param {?} value
     * @return {THIS}
     */
    checkAttrOptions(type, key, value) {
        /** @type {?} */
        const x = ((/** @type {?} */ ((/** @type {?} */ (this)).chart[type][0]))).attributeOption[key];
        expect(x.field).toBe(value);
        return (/** @type {?} */ (this));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} num
     * @return {THIS}
     */
    isXScalesCount(num) {
        /** @type {?} */
        const x = (/** @type {?} */ (this)).chart.getXScale();
        expect((/** @type {?} */ (x.values)).length).toBe(num);
        return (/** @type {?} */ (this));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} num
     * @return {THIS}
     */
    isYScalesCount(num) {
        /** @type {?} */
        const y = (/** @type {?} */ (this)).chart.getYScales();
        expect(y.length).toBe(1);
        expect((/** @type {?} */ (y[0].values)).length).toBe(num);
        return (/** @type {?} */ (this));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} type
     * @param {?} num
     * @return {THIS}
     */
    isDataCount(type, num) {
        /** @type {?} */
        const results = (/** @type {?} */ (this)).chart[type];
        expect(results.length).toBeGreaterThan(0);
        expect(results[0].data.length).toBe(num);
        return (/** @type {?} */ (this));
    }
    /**
     * @return {?}
     */
    get firstDataPoint() {
        // tslint:disable-next-line: no-string-literal
        return this.chart.getXY(((/** @type {?} */ (this.context)))['data'][0]);
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} _includeText
     * @param {?=} point
     * @return {THIS}
     */
    checkTooltip(_includeText, point) {
        if (!point) {
            point = (/** @type {?} */ (this)).firstDataPoint;
        }
        (/** @type {?} */ (this)).chart.showTooltip(point);
        expect((/** @type {?} */ (this)).chart.getController('tooltip') != null).toBe(true);
        return (/** @type {?} */ (this));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    checkClickItem() {
        /** @type {?} */
        const point = (/** @type {?} */ (this)).firstDataPoint;
        /** @type {?} */
        const clientPoint = (/** @type {?} */ (this)).chart.canvas.getClientByPoint(point.x, point.y);
        /** @type {?} */
        const event = new MouseEvent('click', {
            clientX: clientPoint.x,
            clientY: clientPoint.y,
        });
        ((/** @type {?} */ ((/** @type {?} */ (this)).chart.canvas.get('el')))).dispatchEvent(event);
        return (/** @type {?} */ (this));
    }
}
if (false) {
    /** @type {?} */
    PageG2.prototype.fixture;
}
/**
 * @template M, T
 * @param {?} module
 * @param {?} comp
 * @param {?=} page
 * @return {?}
 */
function checkDelay(module, comp, page = null) {
    if (page == null) {
        page = new PageG2().makeModule(module, comp, { dc: false });
    }
    /** @type {?} */
    const context = (/** @type {?} */ (page.context));
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

/**
 * @fileoverview added by tsickle
 * Generated from: src/suite.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class TestContext {
    /**
     * @param {?} fixture
     */
    constructor(fixture) {
        this.fixture = fixture;
    }
    /**
     * @return {?}
     */
    get component() {
        return this.fixture.componentInstance;
    }
    /**
     * @return {?}
     */
    get el() {
        return this.fixture.debugElement.nativeElement;
    }
    /**
     * @return {?}
     */
    get dl() {
        return this.fixture.debugElement;
    }
    /**
     * @return {?}
     */
    get context() {
        return this.fixture.componentInstance;
    }
    /**
     * @return {?}
     */
    detectChanges() {
        this.fixture.detectChanges();
    }
    /**
     * @template T1
     * @param {?} component
     * @return {?}
     */
    resolve(component) {
        return (/** @type {?} */ (this.fixture.debugElement.injector.get(component)));
    }
}
if (false) {
    /** @type {?} */
    TestContext.prototype.fixture;
}
/** @type {?} */
const createTestContext = (/**
 * @template T
 * @param {?} component
 * @return {?}
 */
(component) => {
    return new TestContext(TestBed.createComponent(component));
});

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: testing.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DROPDOWN_MIN_TIME, PageG2, PageG2DataCount, PageG2Height, TestContext, checkDelay, createFakeEvent, createKeyboardEvent, createMouseEvent, createTestContext, createTouchEvent, dispatchDropDown, dispatchEvent, dispatchFakeEvent, dispatchKeyboardEvent, dispatchMouseEvent, dispatchTouchEvent, typeInElement };
//# sourceMappingURL=testing.js.map
