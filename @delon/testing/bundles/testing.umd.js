/**
 * @license ng-alain(cipchk@qq.com) v7.0.0-rc.2
 * (c) 2018 Cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/platform-browser'), require('ng-zorro-antd'), require('@angular/core/testing')) :
    typeof define === 'function' && define.amd ? define('@delon/testing', ['exports', '@angular/platform-browser', 'ng-zorro-antd', '@angular/core/testing'], factory) :
    (factory((global.delon = global.delon || {}, global.delon.testing = {}),global.ng.platformBrowser,global['ng-zorro-antd'],global.ng.core.testing));
}(this, (function (exports,platformBrowser,ngZorroAntd,testing) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
        if (x === void 0) {
            x = 0;
        }
        if (y === void 0) {
            y = 0;
        }
        /** @type {?} */
        var event = document.createEvent('MouseEvent');
        event.initMouseEvent(type, false, /* canBubble */ false, /* cancelable */ window, /* view */ 0, /* detail */ x, /* screenX */ y, /* screenY */ x, /* clientX */ y, /* clientY */ false, /* ctrlKey */ false, /* altKey */ false, /* shiftKey */ false, /* metaKey */ 0, /* button */ null /* relatedTarget */);
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
        if (pageX === void 0) {
            pageX = 0;
        }
        if (pageY === void 0) {
            pageY = 0;
        }
        // In favor of creating events that work for most of the browsers, the event is created
        // as a basic UI Event. The necessary details for the event will be set manually.
        /** @type {?} */
        var event = document.createEvent('UIEvent');
        /** @type {?} */
        var touchDetails = { pageX: pageX, pageY: pageY };
        event.initUIEvent(type, true, true, window, 0);
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
        var event = ( /** @type {?} */(document.createEvent('KeyboardEvent')));
        // Firefox does not support `initKeyboardEvent`, but supports `initKeyEvent`.
        /** @type {?} */
        var initEventFn = (event.initKeyEvent || event.initKeyboardEvent).bind(event);
        /** @type {?} */
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
    /**
     * Creates a fake event object with any desired event type.
     * @param {?} type
     * @param {?=} canBubble
     * @param {?=} cancelable
     * @return {?}
     */
    function createFakeEvent(type, canBubble, cancelable) {
        if (canBubble === void 0) {
            canBubble = true;
        }
        if (cancelable === void 0) {
            cancelable = true;
        }
        /** @type {?} */
        var event = document.createEvent('Event');
        event.initEvent(type, canBubble, cancelable);
        return event;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
        return dispatchEvent(node, createFakeEvent(type, canBubble));
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
        return ( /** @type {?} */(dispatchEvent(node, createKeyboardEvent(type, keyCode, target))));
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
        if (x === void 0) {
            x = 0;
        }
        if (y === void 0) {
            y = 0;
        }
        if (event === void 0) {
            event = createMouseEvent(type, x, y);
        }
        return ( /** @type {?} */(dispatchEvent(node, event)));
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
        if (x === void 0) {
            x = 0;
        }
        if (y === void 0) {
            y = 0;
        }
        return dispatchEvent(node, createTouchEvent(type, x, y));
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /**
     * [nz-dropdown](https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/dropdown/nz-dropdown.component.ts#L159) 抖动合理值
     * @type {?}
     */
    var DROPDOWN_MIN_TIME = 51;
    /**
     * 触发 dropdown
     * @param {?} dl
     * @param {?} trigger
     * @param {?=} allowNull
     * @return {?}
     */
    function dispatchDropDown(dl, trigger, allowNull) {
        if (allowNull === void 0) {
            allowNull = true;
        }
        /** @type {?} */
        var directive = dl.query(platformBrowser.By.directive(ngZorroAntd.NzDropDownDirective));
        if (allowNull && directive == null) {
            return false;
        }
        if (trigger === 'click') {
            directive.injector.get(ngZorroAntd.NzDropDownDirective).onClick(null);
        }
        else {
            directive.injector.get(ngZorroAntd.NzDropDownDirective).onMouseEnter(null);
        }
        testing.tick(DROPDOWN_MIN_TIME);
        return true;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /**
     * @template T
     */
    var /**
     * @template T
     */ PageG2 = /** @class */ (function () {
        function PageG2(fixture) {
            if (fixture === void 0) {
                fixture = null;
            }
            this.fixture = fixture;
        }
        Object.defineProperty(PageG2.prototype, "dl", {
            get: /**
             * @return {?}
             */ function () {
                return this.fixture.debugElement;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PageG2.prototype, "context", {
            get: /**
             * @return {?}
             */ function () {
                return this.fixture.componentInstance;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PageG2.prototype, "comp", {
            get: /**
             * @return {?}
             */ function () {
                // tslint:disable-next-line:no-string-literal
                return this.context['comp'];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PageG2.prototype, "chart", {
            get: /**
             * @return {?}
             */ function () {
                return this.comp.chart;
            },
            enumerable: true,
            configurable: true
        });
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
                if (options === void 0) {
                    options = { dc: true };
                }
                testing.TestBed.configureTestingModule({
                    imports: [module],
                    declarations: [comp],
                });
                this.fixture = testing.TestBed.createComponent(comp);
                if (options.dc) {
                    this.dcFirst();
                }
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
                ( /** @type {?} */(this)).dc();
                testing.flush();
                testing.discardPeriodicTasks();
                return ( /** @type {?} */(this));
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
                ( /** @type {?} */(this)).fixture.changeDetectorRef.markForCheck();
                ( /** @type {?} */(this)).fixture.detectChanges();
                return ( /** @type {?} */(this));
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
                ( /** @type {?} */(this)).context['data'] = data;
                ( /** @type {?} */(this)).dc();
                return ( /** @type {?} */(this));
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
                return (( /** @type {?} */(this.dl.nativeElement))).querySelectorAll(cls);
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
                return (( /** @type {?} */(this.dl.nativeElement))).querySelector(cls);
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
                if (stauts === void 0) {
                    stauts = true;
                }
                ( /** @type {?} */(this)).isExists('canvas', stauts);
                return ( /** @type {?} */(this));
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
                var el = ( /** @type {?} */(this)).getEl(cls);
                expect(el ? el.textContent.trim() : '').toBe(value);
                return ( /** @type {?} */(this));
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
                if (stauts === void 0) {
                    stauts = true;
                }
                expect(( /** @type {?} */(this)).getEl(cls) != null).toBe(stauts);
                return ( /** @type {?} */(this));
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
                expect(( /** @type {?} */(this)).chart.get(key)).toBe(value);
                return ( /** @type {?} */(this));
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
                var x = ( /** @type {?} */(this)).chart.get(type)[0].get('attrOptions')[key];
                expect(x.field).toBe(value);
                return ( /** @type {?} */(this));
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
                var x = ( /** @type {?} */(this)).chart.getXScales();
                expect(x[0].values.length).toBe(num);
                return ( /** @type {?} */(this));
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
                var y = ( /** @type {?} */(this)).chart.getYScales();
                expect(y.length).toBe(1);
                expect(y[0].values.length).toBe(num);
                return ( /** @type {?} */(this));
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
                var results = ( /** @type {?} */(this)).chart.get(type);
                expect(results.length).toBeGreaterThan(0);
                expect(results[0].get('data').length).toBe(num);
                return ( /** @type {?} */(this));
            };
        return PageG2;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    var _this = this;
    /**
     * @template T
     */
    var /**
     * @template T
     */ TestContext = /** @class */ (function () {
        function TestContext(fixture) {
            this.fixture = fixture;
        }
        Object.defineProperty(TestContext.prototype, "component", {
            get: /**
             * @return {?}
             */ function () { return this.fixture.componentInstance; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TestContext.prototype, "el", {
            get: /**
             * @return {?}
             */ function () { return this.fixture.debugElement.nativeElement; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TestContext.prototype, "dl", {
            get: /**
             * @return {?}
             */ function () { return this.fixture.debugElement; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TestContext.prototype, "context", {
            get: /**
             * @return {?}
             */ function () { return this.fixture.componentInstance; },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TestContext.prototype.detectChanges = /**
         * @return {?}
         */
            function () { this.fixture.detectChanges(); };
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
                return ( /** @type {?} */(this.fixture.debugElement.injector.get(component)));
            };
        return TestContext;
    }());
    /** @type {?} */
    var configureTestSuite = function (configureAction) {
        /** @type {?} */
        var testBedApi = testing.getTestBed();
        /** @type {?} */
        var originReset = testing.TestBed.resetTestingModule;
        beforeAll(function () {
            testing.TestBed.resetTestingModule();
            testing.TestBed.resetTestingModule = function () { return testing.TestBed; };
        });
        if (configureAction) {
            beforeAll(function (done) {
                return (function () {
                    return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    configureAction();
                                    return [4 /*yield*/, testing.TestBed.compileComponents()];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    });
                })().then(done).catch(done.fail);
            });
        }
        afterEach(function () {
            testBedApi._activeFixtures.forEach(function (fixture) { return fixture.destroy(); });
            testBedApi._instantiated = false;
        });
        afterAll(function () {
            testing.TestBed.resetTestingModule = originReset;
            testing.TestBed.resetTestingModule();
        });
    };
    /** @type {?} */
    var createTestContext = function (component) {
        return new TestContext(testing.TestBed.createComponent(component));
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    exports.dispatchEvent = dispatchEvent;
    exports.dispatchFakeEvent = dispatchFakeEvent;
    exports.dispatchKeyboardEvent = dispatchKeyboardEvent;
    exports.dispatchMouseEvent = dispatchMouseEvent;
    exports.dispatchTouchEvent = dispatchTouchEvent;
    exports.createMouseEvent = createMouseEvent;
    exports.createTouchEvent = createTouchEvent;
    exports.createKeyboardEvent = createKeyboardEvent;
    exports.createFakeEvent = createFakeEvent;
    exports.typeInElement = typeInElement;
    exports.dispatchDropDown = dispatchDropDown;
    exports.DROPDOWN_MIN_TIME = DROPDOWN_MIN_TIME;
    exports.PageG2 = PageG2;
    exports.TestContext = TestContext;
    exports.configureTestSuite = configureTestSuite;
    exports.createTestContext = createTestContext;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=testing.umd.js.map