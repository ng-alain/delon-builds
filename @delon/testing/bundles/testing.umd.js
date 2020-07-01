/**
 * @license ng-alain(cipchk@qq.com) v9.5.0
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core/testing'), require('@angular/platform-browser'), require('ng-zorro-antd/dropdown')) :
    typeof define === 'function' && define.amd ? define('@delon/testing', ['exports', '@angular/core/testing', '@angular/platform-browser', 'ng-zorro-antd/dropdown'], factory) :
    (global = global || self, factory((global.delon = global.delon || {}, global.delon.testing = {}), global.ng.core.testing, global.ng.platformBrowser, global['ng-zorro-antd/dropdown']));
}(this, (function (exports, testing, platformBrowser, dropdown) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: src/event-objects.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    function createMouseEvent(type, x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        /** @type {?} */
        var event = document.createEvent('MouseEvent');
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
    function createTouchEvent(type, pageX, pageY) {
        if (pageX === void 0) { pageX = 0; }
        if (pageY === void 0) { pageY = 0; }
        // In favor of creating events that work for most of the browsers, the event is created
        // as a basic UI Event. The necessary details for the event will be set manually.
        /** @type {?} */
        var event = document.createEvent('UIEvent');
        /** @type {?} */
        var touchDetails = { pageX: pageX, pageY: pageY };
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
        var event = (/** @type {?} */ (document.createEvent('KeyboardEvent')));
        // Firefox does not support `initKeyboardEvent`, but supports `initKeyEvent`.
        /** @type {?} */
        var initEventFn = (event.initKeyEvent || event.initKeyboardEvent).bind(event);
        /** @type {?} */
        var originalPreventDefault = event.preventDefault;
        initEventFn(type, true, true, window, 0, 0, 0, 0, 0, keyCode);
        // Webkit Browsers don't set the keyCode when calling the init function.
        // See related bug https://bugs.webkit.org/show_bug.cgi?id=16735
        Object.defineProperties(event, {
            keyCode: { get: (/**
                 * @return {?}
                 */
                function () { return keyCode; }) },
            key: { get: (/**
                 * @return {?}
                 */
                function () { return key; }) },
            target: { get: (/**
                 * @return {?}
                 */
                function () { return target; }) },
        });
        // IE won't set `defaultPrevented` on synthetic events so we need to do it manually.
        event.preventDefault = (/**
         * @return {?}
         */
        function () {
            Object.defineProperty(event, 'defaultPrevented', { get: (/**
                 * @return {?}
                 */
                function () { return true; }) });
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
    function createFakeEvent(type, canBubble, cancelable) {
        if (canBubble === void 0) { canBubble = true; }
        if (cancelable === void 0) { cancelable = true; }
        /** @type {?} */
        var event = document.createEvent('Event');
        event.initEvent(type, canBubble, cancelable);
        return event;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/dispatch-events.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    function dispatchMouseEvent(node, type, x, y, event) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (event === void 0) { event = createMouseEvent(type, x, y); }
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
    function dispatchTouchEvent(node, type, x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        return dispatchEvent(node, createTouchEvent(type, x, y));
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/type-in-element.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DROPDOWN_MIN_TIME = 1000;
    /**
     * 触发 dropdown
     * @param {?} dl
     * @param {?} trigger
     * @param {?=} allowNull
     * @return {?}
     */
    function dispatchDropDown(dl, trigger, allowNull) {
        if (allowNull === void 0) { allowNull = true; }
        /** @type {?} */
        var directive = dl.query(platformBrowser.By.directive(dropdown.NzDropDownDirective));
        if (allowNull && directive == null) {
            return false;
        }
        /** @type {?} */
        var el = (/** @type {?} */ (directive.injector.get(dropdown.NzDropDownDirective).elementRef.nativeElement));
        if (trigger === 'click') {
            dispatchFakeEvent(el, 'click');
        }
        else {
            dispatchFakeEvent(el, 'mouseenter');
        }
        testing.tick(DROPDOWN_MIN_TIME);
        return true;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/g2.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var PageG2DataCount = 2;
    /** @type {?} */
    var PageG2Height = 100;
    /**
     * @template T
     */
    var   /**
     * @template T
     */
    PageG2 = /** @class */ (function () {
        function PageG2(fixture) {
            if (fixture === void 0) { fixture = null; }
            this.fixture = fixture;
        }
        Object.defineProperty(PageG2.prototype, "dl", {
            get: /**
             * @return {?}
             */
            function () {
                return (/** @type {?} */ (this.fixture)).debugElement;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PageG2.prototype, "context", {
            get: /**
             * @return {?}
             */
            function () {
                return (/** @type {?} */ (this.fixture)).componentInstance;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PageG2.prototype, "comp", {
            get: /**
             * @return {?}
             */
            function () {
                // tslint:disable-next-line:no-string-literal
                return ((/** @type {?} */ (this.context)))['comp'];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PageG2.prototype, "chart", {
            get: /**
             * @return {?}
             */
            function () {
                return this.comp.chart;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @template THIS,M
         * @this {THIS}
         * @param {?} module
         * @param {?} comp
         * @return {THIS}
         */
        PageG2.prototype.genModule = /**
         * @template THIS,M
         * @this {THIS}
         * @param {?} module
         * @param {?} comp
         * @return {THIS}
         */
        function (module, comp) {
            testing.TestBed.configureTestingModule({
                imports: [module],
                declarations: [comp],
            });
            return (/** @type {?} */ (this));
        };
        /**
         * @template THIS
         * @this {THIS}
         * @param {?} comp
         * @param {?=} dc
         * @return {THIS}
         */
        PageG2.prototype.genComp = /**
         * @template THIS
         * @this {THIS}
         * @param {?} comp
         * @param {?=} dc
         * @return {THIS}
         */
        function (comp, dc) {
            if (dc === void 0) { dc = false; }
            (/** @type {?} */ (this)).fixture = testing.TestBed.createComponent(comp);
            if (dc) {
                (/** @type {?} */ (this)).dcFirst();
            }
            return (/** @type {?} */ (this));
        };
        /**
         * @template M
         * @param {?} module
         * @param {?} comp
         * @param {?=} options
         * @return {?}
         */
        PageG2.prototype.makeModule = /**
         * @template M
         * @param {?} module
         * @param {?} comp
         * @param {?=} options
         * @return {?}
         */
        function (module, comp, options) {
            if (options === void 0) { options = { dc: true }; }
            this.genModule(module, comp).genComp(comp, options.dc);
            return this;
        };
        /**
         * @template THIS
         * @this {THIS}
         * @return {THIS}
         */
        PageG2.prototype.dcFirst = /**
         * @template THIS
         * @this {THIS}
         * @return {THIS}
         */
        function () {
            (/** @type {?} */ (this)).dc();
            testing.flush();
            testing.discardPeriodicTasks();
            // FIX: `Error during cleanup of component`
            if ((/** @type {?} */ (this)).comp && typeof (/** @type {?} */ (this)).comp.chart !== 'undefined') {
                spyOn((/** @type {?} */ (this)).comp.chart, 'destroy');
            }
            return (/** @type {?} */ (this));
        };
        /**
         * @template THIS
         * @this {THIS}
         * @return {THIS}
         */
        PageG2.prototype.dc = /**
         * @template THIS
         * @this {THIS}
         * @return {THIS}
         */
        function () {
            (/** @type {?} */ ((/** @type {?} */ (this)).fixture)).changeDetectorRef.markForCheck();
            (/** @type {?} */ ((/** @type {?} */ (this)).fixture)).detectChanges();
            return (/** @type {?} */ (this));
        };
        /**
         * @template THIS
         * @this {THIS}
         * @return {THIS}
         */
        PageG2.prototype.end = /**
         * @template THIS
         * @this {THIS}
         * @return {THIS}
         */
        function () {
            // The 201 value is delay value
            testing.tick(201);
            testing.flush();
            testing.discardPeriodicTasks();
            return (/** @type {?} */ (this));
        };
        /**
         * @return {?}
         */
        PageG2.prototype.destroy = /**
         * @return {?}
         */
        function () {
            this.comp.ngOnDestroy();
        };
        /**
         * @template THIS
         * @this {THIS}
         * @param {?} data
         * @return {THIS}
         */
        PageG2.prototype.newData = /**
         * @template THIS
         * @this {THIS}
         * @param {?} data
         * @return {THIS}
         */
        function (data) {
            // tslint:disable-next-line:no-string-literal
            ((/** @type {?} */ ((/** @type {?} */ (this)).context)))['data'] = data;
            (/** @type {?} */ (this)).dc();
            return (/** @type {?} */ (this));
        };
        /**
         * @param {?} cls
         * @return {?}
         */
        PageG2.prototype.getEls = /**
         * @param {?} cls
         * @return {?}
         */
        function (cls) {
            return ((/** @type {?} */ (this.dl.nativeElement))).querySelectorAll(cls);
        };
        /**
         * @param {?} cls
         * @return {?}
         */
        PageG2.prototype.getEl = /**
         * @param {?} cls
         * @return {?}
         */
        function (cls) {
            return (/** @type {?} */ (((/** @type {?} */ (this.dl.nativeElement))).querySelector(cls)));
        };
        /**
         * @param {?} type
         * @return {?}
         */
        PageG2.prototype.getController = /**
         * @param {?} type
         * @return {?}
         */
        function (type) {
            return (/** @type {?} */ (this.chart.getController(type)));
        };
        /**
         * @template THIS
         * @this {THIS}
         * @param {?=} stauts
         * @return {THIS}
         */
        PageG2.prototype.isCanvas = /**
         * @template THIS
         * @this {THIS}
         * @param {?=} stauts
         * @return {THIS}
         */
        function (stauts) {
            if (stauts === void 0) { stauts = true; }
            (/** @type {?} */ (this)).isExists('canvas', stauts);
            return (/** @type {?} */ (this));
        };
        /**
         * @template THIS
         * @this {THIS}
         * @param {?} cls
         * @param {?} value
         * @return {THIS}
         */
        PageG2.prototype.isText = /**
         * @template THIS
         * @this {THIS}
         * @param {?} cls
         * @param {?} value
         * @return {THIS}
         */
        function (cls, value) {
            /** @type {?} */
            var el = (/** @type {?} */ (this)).getEl(cls);
            expect(el ? (/** @type {?} */ (el.textContent)).trim() : '').toBe(value);
            return (/** @type {?} */ (this));
        };
        /**
         * @template THIS
         * @this {THIS}
         * @param {?} cls
         * @param {?=} stauts
         * @return {THIS}
         */
        PageG2.prototype.isExists = /**
         * @template THIS
         * @this {THIS}
         * @param {?} cls
         * @param {?=} stauts
         * @return {THIS}
         */
        function (cls, stauts) {
            if (stauts === void 0) { stauts = true; }
            expect((/** @type {?} */ (this)).getEl(cls) != null).toBe(stauts);
            return (/** @type {?} */ (this));
        };
        /**
         * @template THIS
         * @this {THIS}
         * @param {?} key
         * @param {?} value
         * @return {THIS}
         */
        PageG2.prototype.checkOptions = /**
         * @template THIS
         * @this {THIS}
         * @param {?} key
         * @param {?} value
         * @return {THIS}
         */
        function (key, value) {
            expect(((/** @type {?} */ ((/** @type {?} */ (this)).chart)))[key]).toBe(value);
            return (/** @type {?} */ (this));
        };
        /**
         * @template THIS
         * @this {THIS}
         * @param {?} type
         * @param {?} key
         * @param {?} value
         * @return {THIS}
         */
        PageG2.prototype.checkAttrOptions = /**
         * @template THIS
         * @this {THIS}
         * @param {?} type
         * @param {?} key
         * @param {?} value
         * @return {THIS}
         */
        function (type, key, value) {
            /** @type {?} */
            var x = ((/** @type {?} */ ((/** @type {?} */ (this)).chart[type][0]))).attributeOption[key];
            expect(x.field).toBe(value);
            return (/** @type {?} */ (this));
        };
        /**
         * @template THIS
         * @this {THIS}
         * @param {?} num
         * @return {THIS}
         */
        PageG2.prototype.isXScalesCount = /**
         * @template THIS
         * @this {THIS}
         * @param {?} num
         * @return {THIS}
         */
        function (num) {
            /** @type {?} */
            var x = (/** @type {?} */ (this)).chart.getXScale();
            expect((/** @type {?} */ (x.values)).length).toBe(num);
            return (/** @type {?} */ (this));
        };
        /**
         * @template THIS
         * @this {THIS}
         * @param {?} num
         * @return {THIS}
         */
        PageG2.prototype.isYScalesCount = /**
         * @template THIS
         * @this {THIS}
         * @param {?} num
         * @return {THIS}
         */
        function (num) {
            /** @type {?} */
            var y = (/** @type {?} */ (this)).chart.getYScales();
            expect(y.length).toBe(1);
            expect((/** @type {?} */ (y[0].values)).length).toBe(num);
            return (/** @type {?} */ (this));
        };
        /**
         * @template THIS
         * @this {THIS}
         * @param {?} type
         * @param {?} num
         * @return {THIS}
         */
        PageG2.prototype.isDataCount = /**
         * @template THIS
         * @this {THIS}
         * @param {?} type
         * @param {?} num
         * @return {THIS}
         */
        function (type, num) {
            /** @type {?} */
            var results = (/** @type {?} */ (this)).chart[type];
            expect(results.length).toBeGreaterThan(0);
            expect(results[0].data.length).toBe(num);
            return (/** @type {?} */ (this));
        };
        Object.defineProperty(PageG2.prototype, "firstDataPoint", {
            get: /**
             * @return {?}
             */
            function () {
                // tslint:disable-next-line: no-string-literal
                return this.chart.getXY(((/** @type {?} */ (this.context)))['data'][0]);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @template THIS
         * @this {THIS}
         * @param {?} _includeText
         * @param {?=} point
         * @return {THIS}
         */
        PageG2.prototype.checkTooltip = /**
         * @template THIS
         * @this {THIS}
         * @param {?} _includeText
         * @param {?=} point
         * @return {THIS}
         */
        function (_includeText, point) {
            if (!point) {
                point = (/** @type {?} */ (this)).firstDataPoint;
            }
            (/** @type {?} */ (this)).chart.showTooltip(point);
            expect((/** @type {?} */ (this)).chart.getController('tooltip') != null).toBe(true);
            return (/** @type {?} */ (this));
        };
        /**
         * @template THIS
         * @this {THIS}
         * @return {THIS}
         */
        PageG2.prototype.checkClickItem = /**
         * @template THIS
         * @this {THIS}
         * @return {THIS}
         */
        function () {
            /** @type {?} */
            var point = (/** @type {?} */ (this)).firstDataPoint;
            /** @type {?} */
            var clientPoint = (/** @type {?} */ (this)).chart.canvas.getClientByPoint(point.x, point.y);
            /** @type {?} */
            var event = new MouseEvent('click', {
                clientX: clientPoint.x,
                clientY: clientPoint.y,
            });
            ((/** @type {?} */ ((/** @type {?} */ (this)).chart.canvas.get('el')))).dispatchEvent(event);
            return (/** @type {?} */ (this));
        };
        return PageG2;
    }());
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
    function checkDelay(module, comp, page) {
        if (page === void 0) { page = null; }
        if (page == null) {
            page = new PageG2().makeModule(module, comp, { dc: false });
        }
        /** @type {?} */
        var context = (/** @type {?} */ (page.context));
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

    /**
     * @fileoverview added by tsickle
     * Generated from: src/suite.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template T
     */
    var   /**
     * @template T
     */
    TestContext = /** @class */ (function () {
        function TestContext(fixture) {
            this.fixture = fixture;
        }
        Object.defineProperty(TestContext.prototype, "component", {
            get: /**
             * @return {?}
             */
            function () {
                return this.fixture.componentInstance;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TestContext.prototype, "el", {
            get: /**
             * @return {?}
             */
            function () {
                return this.fixture.debugElement.nativeElement;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TestContext.prototype, "dl", {
            get: /**
             * @return {?}
             */
            function () {
                return this.fixture.debugElement;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TestContext.prototype, "context", {
            get: /**
             * @return {?}
             */
            function () {
                return this.fixture.componentInstance;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TestContext.prototype.detectChanges = /**
         * @return {?}
         */
        function () {
            this.fixture.detectChanges();
        };
        /**
         * @template T1
         * @param {?} component
         * @return {?}
         */
        TestContext.prototype.resolve = /**
         * @template T1
         * @param {?} component
         * @return {?}
         */
        function (component) {
            return (/** @type {?} */ (this.fixture.debugElement.injector.get(component)));
        };
        return TestContext;
    }());
    if (false) {
        /** @type {?} */
        TestContext.prototype.fixture;
    }
    /** @type {?} */
    var createTestContext = (/**
     * @template T
     * @param {?} component
     * @return {?}
     */
    function (component) {
        return new TestContext(testing.TestBed.createComponent(component));
    });

    exports.DROPDOWN_MIN_TIME = DROPDOWN_MIN_TIME;
    exports.PageG2 = PageG2;
    exports.PageG2DataCount = PageG2DataCount;
    exports.PageG2Height = PageG2Height;
    exports.TestContext = TestContext;
    exports.checkDelay = checkDelay;
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
