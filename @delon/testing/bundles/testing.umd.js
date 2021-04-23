/**
 * @license ng-alain(cipchk@qq.com) v11.10.0
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core/testing'), require('@angular/platform-browser'), require('ng-zorro-antd/dropdown')) :
    typeof define === 'function' && define.amd ? define('@delon/testing', ['exports', '@angular/core/testing', '@angular/platform-browser', 'ng-zorro-antd/dropdown'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.testing = {}), global.ng.core.testing, global.ng.platformBrowser, global['ng-zorro-antd/dropdown']));
}(this, (function (exports, testing, platformBrowser, dropdown) { 'use strict';

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /** Creates a browser MouseEvent with the specified options. */
    function createMouseEvent(type, x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        var event = document.createEvent('MouseEvent');
        event.initMouseEvent(type, false /* canBubble */, false /* cancelable */, window /* view */, 0 /* detail */, x /* screenX */, y /* screenY */, x /* clientX */, y /* clientY */, false /* ctrlKey */, false /* altKey */, false /* shiftKey */, false /* metaKey */, 0 /* button */, null /* relatedTarget */);
        return event;
    }
    /** Creates a browser TouchEvent with the specified pointer coordinates. */
    function createTouchEvent(type, pageX, pageY) {
        if (pageX === void 0) { pageX = 0; }
        if (pageY === void 0) { pageY = 0; }
        // In favor of creating events that work for most of the browsers, the event is created
        // as a basic UI Event. The necessary details for the event will be set manually.
        var event = document.createEvent('UIEvent');
        var touchDetails = { pageX: pageX, pageY: pageY };
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
        var event = document.createEvent('KeyboardEvent');
        // Firefox does not support `initKeyboardEvent`, but supports `initKeyEvent`.
        var initEventFn = (event.initKeyEvent || event.initKeyboardEvent).bind(event);
        var originalPreventDefault = event.preventDefault;
        initEventFn(type, true, true, window, 0, 0, 0, 0, 0, keyCode);
        // Webkit Browsers don't set the keyCode when calling the init function.
        // See related bug https://bugs.webkit.org/show_bug.cgi?id=16735
        Object.defineProperties(event, {
            keyCode: { get: function () { return keyCode; } },
            key: { get: function () { return key; } },
            target: { get: function () { return target; } },
        });
        // IE won't set `defaultPrevented` on synthetic events so we need to do it manually.
        event.preventDefault = function () {
            Object.defineProperty(event, 'defaultPrevented', { get: function () { return true; } });
            // tslint:disable-next-line:no-invalid-this
            return originalPreventDefault.apply(this, arguments);
        };
        return event;
    }
    /** Creates a fake event object with any desired event type. */
    function createFakeEvent(type, canBubble, cancelable) {
        if (canBubble === void 0) { canBubble = true; }
        if (cancelable === void 0) { cancelable = true; }
        var event = document.createEvent('Event');
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
    function dispatchMouseEvent(node, type, x, y, event) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (event === void 0) { event = createMouseEvent(type, x, y); }
        return dispatchEvent(node, event);
    }
    /** Shorthand to dispatch a touch event on the specified coordinates. */
    function dispatchTouchEvent(node, type, x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
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

    var DROPDOWN_MIN_TIME = 1000;
    /**
     * 触发 dropdown
     */
    function dispatchDropDown(dl, trigger, allowNull) {
        if (allowNull === void 0) { allowNull = true; }
        var directive = dl.query(platformBrowser.By.directive(dropdown.NzDropDownDirective));
        if (allowNull && directive == null) {
            return false;
        }
        var el = directive.injector.get(dropdown.NzDropDownDirective).elementRef.nativeElement;
        if (trigger === 'click') {
            dispatchFakeEvent(el, 'click');
        }
        else {
            dispatchFakeEvent(el, 'mouseenter');
        }
        testing.tick(DROPDOWN_MIN_TIME);
        return true;
    }

    var PageG2DataCount = 2;
    var PageG2Height = 100;
    var PageG2 = /** @class */ (function () {
        function PageG2(fixture) {
            if (fixture === void 0) { fixture = null; }
            this.fixture = fixture;
        }
        Object.defineProperty(PageG2.prototype, "dl", {
            get: function () {
                return this.fixture.debugElement;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PageG2.prototype, "context", {
            get: function () {
                return this.fixture.componentInstance;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PageG2.prototype, "comp", {
            get: function () {
                // tslint:disable-next-line:no-string-literal
                return this.context['comp'];
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PageG2.prototype, "chart", {
            get: function () {
                return this.comp.chart;
            },
            enumerable: false,
            configurable: true
        });
        PageG2.prototype.genModule = function (module, comp) {
            testing.TestBed.configureTestingModule({
                imports: [module],
                declarations: [comp],
            });
            return this;
        };
        PageG2.prototype.genComp = function (comp, dc) {
            if (dc === void 0) { dc = false; }
            this.fixture = testing.TestBed.createComponent(comp);
            if (dc) {
                this.dcFirst();
            }
            return this;
        };
        PageG2.prototype.makeModule = function (module, comp, options) {
            if (options === void 0) { options = { dc: true }; }
            this.genModule(module, comp).genComp(comp, options.dc);
            return this;
        };
        PageG2.prototype.dcFirst = function () {
            this.dc();
            testing.flush();
            testing.discardPeriodicTasks();
            // FIX: `Error during cleanup of component`
            if (this.comp && typeof this.comp.chart !== 'undefined') {
                spyOn(this.comp.chart, 'destroy');
            }
            return this;
        };
        PageG2.prototype.dc = function () {
            this.fixture.changeDetectorRef.markForCheck();
            this.fixture.detectChanges();
            return this;
        };
        PageG2.prototype.end = function () {
            // The 201 value is delay value
            testing.tick(201);
            testing.flush();
            testing.discardPeriodicTasks();
            return this;
        };
        PageG2.prototype.destroy = function () {
            this.comp.ngOnDestroy();
        };
        PageG2.prototype.newData = function (data) {
            // tslint:disable-next-line:no-string-literal
            this.context['data'] = data;
            this.dc();
            return this;
        };
        PageG2.prototype.getEls = function (cls) {
            return this.dl.nativeElement.querySelectorAll(cls);
        };
        PageG2.prototype.getEl = function (cls) {
            return this.dl.nativeElement.querySelector(cls);
        };
        PageG2.prototype.getController = function (type) {
            return this.chart.getController(type);
        };
        PageG2.prototype.isCanvas = function (stauts) {
            if (stauts === void 0) { stauts = true; }
            this.isExists('canvas', stauts);
            return this;
        };
        PageG2.prototype.isText = function (cls, value) {
            var el = this.getEl(cls);
            expect(el ? el.textContent.trim() : '').toBe(value);
            return this;
        };
        PageG2.prototype.isExists = function (cls, stauts) {
            if (stauts === void 0) { stauts = true; }
            expect(this.getEl(cls) != null).toBe(stauts);
            return this;
        };
        PageG2.prototype.checkOptions = function (key, value) {
            expect(this.chart[key]).toBe(value);
            return this;
        };
        PageG2.prototype.checkAttrOptions = function (type, key, value) {
            var x = this.chart[type][0].attributeOption[key];
            expect(x.field).toBe(value);
            return this;
        };
        PageG2.prototype.isXScalesCount = function (num) {
            var x = this.chart.getXScale();
            expect(x.values.length).toBe(num);
            return this;
        };
        PageG2.prototype.isYScalesCount = function (num) {
            var y = this.chart.getYScales();
            expect(y.length).toBe(1);
            expect(y[0].values.length).toBe(num);
            return this;
        };
        PageG2.prototype.isDataCount = function (type, num) {
            var results = this.chart[type];
            expect(results.length).toBeGreaterThan(0);
            expect(results[0].data.length).toBe(num);
            return this;
        };
        Object.defineProperty(PageG2.prototype, "firstDataPoint", {
            get: function () {
                // tslint:disable-next-line: no-string-literal
                return this.chart.getXY(this.context['data'][0]);
            },
            enumerable: false,
            configurable: true
        });
        PageG2.prototype.checkTooltip = function (_includeText, point) {
            if (!point) {
                point = this.firstDataPoint;
            }
            this.chart.showTooltip(point);
            expect(this.chart.getController('tooltip') != null).toBe(true);
            return this;
        };
        PageG2.prototype.checkClickItem = function () {
            var point = this.firstDataPoint;
            var clientPoint = this.chart.canvas.getClientByPoint(point.x, point.y);
            var event = new MouseEvent('click', {
                clientX: clientPoint.x,
                clientY: clientPoint.y,
            });
            this.chart.canvas.get('el').dispatchEvent(event);
            return this;
        };
        return PageG2;
    }());
    function checkDelay(module, comp, page) {
        if (page === void 0) { page = null; }
        if (page == null) {
            page = new PageG2().makeModule(module, comp, { dc: false });
        }
        var context = page.context;
        if (typeof context.delay === 'undefined') {
            console.warn("You muse be dinfed \"delay\" property in test component");
            return;
        }
        context.delay = 100;
        page.dc();
        page.comp.ngOnDestroy();
        expect(page.chart == null).toBe(true);
        testing.tick(201);
        testing.discardPeriodicTasks();
    }

    var TestContext = /** @class */ (function () {
        function TestContext(fixture) {
            this.fixture = fixture;
        }
        Object.defineProperty(TestContext.prototype, "component", {
            get: function () {
                return this.fixture.componentInstance;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TestContext.prototype, "el", {
            get: function () {
                return this.fixture.debugElement.nativeElement;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TestContext.prototype, "dl", {
            get: function () {
                return this.fixture.debugElement;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TestContext.prototype, "context", {
            get: function () {
                return this.fixture.componentInstance;
            },
            enumerable: false,
            configurable: true
        });
        TestContext.prototype.detectChanges = function () {
            this.fixture.detectChanges();
        };
        TestContext.prototype.resolve = function (component) {
            return this.fixture.debugElement.injector.get(component);
        };
        return TestContext;
    }());
    var createTestContext = function (component) {
        return new TestContext(testing.TestBed.createComponent(component));
    };

    /**
     * 清除Cdk的窗体，以便下一次使用，一般这样使用：
     * ```ts
     * afterEach(cleanCdkOverlayHtml);
     * ```
     */
    function cleanCdkOverlayHtml() {
        var els = document.querySelectorAll('.cdk-overlay-container');
        if (els && els.length > 0) {
            els.forEach(function (el) { return (el.innerHTML = ''); });
        }
    }

    // from angular

    /**
     * Generated bundle index. Do not edit.
     */

    exports.DROPDOWN_MIN_TIME = DROPDOWN_MIN_TIME;
    exports.PageG2 = PageG2;
    exports.PageG2DataCount = PageG2DataCount;
    exports.PageG2Height = PageG2Height;
    exports.TestContext = TestContext;
    exports.checkDelay = checkDelay;
    exports.cleanCdkOverlayHtml = cleanCdkOverlayHtml;
    exports.createFakeEvent = createFakeEvent;
    exports.createKeyboardEvent = createKeyboardEvent;
    exports.createMouseEvent = createMouseEvent;
    exports.createTestContext = createTestContext;
    exports.createTouchEvent = createTouchEvent;
    exports.dispatchDropDown = dispatchDropDown;
    exports.dispatchEvent = dispatchEvent;
    exports.dispatchFakeEvent = dispatchFakeEvent;
    exports.dispatchKeyboardEvent = dispatchKeyboardEvent;
    exports.dispatchMouseEvent = dispatchMouseEvent;
    exports.dispatchTouchEvent = dispatchTouchEvent;
    exports.typeInElement = typeInElement;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=testing.umd.js.map
