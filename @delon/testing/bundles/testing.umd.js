/**
 * @license ng-alain(cipchk@qq.com) v8.4.0
 * (c) 2019 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core/testing'), require('@angular/platform-browser'), require('ng-zorro-antd/dropdown')) :
    typeof define === 'function' && define.amd ? define('@delon/testing', ['exports', '@angular/core/testing', '@angular/platform-browser', 'ng-zorro-antd/dropdown'], factory) :
    (global = global || self, factory((global.delon = global.delon || {}, global.delon.testing = {}), global.ng.core.testing, global.ng.platformBrowser, global['ng-zorro-antd/dropdown']));
}(this, function (exports, testing, platformBrowser, dropdown) { 'use strict';

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
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    /**
     * @fileoverview added by tsickle
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
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * [nz-dropdown](https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/dropdown/nz-dropdown.component.ts#L88) 抖动合理值
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
                return this.context['comp'];
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
            (/** @type {?} */ (this)).context['data'] = data;
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
            expect((/** @type {?} */ (this)).chart.get(key)).toBe(value);
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
            var x = (/** @type {?} */ (this)).chart.get(type)[0].get('attrOptions')[key];
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
            var x = (/** @type {?} */ (this)).chart.getXScales();
            expect(x[0].values.length).toBe(num);
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
            expect(y[0].values.length).toBe(num);
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
            var results = (/** @type {?} */ (this)).chart.get(type);
            expect(results.length).toBeGreaterThan(0);
            expect(results[0].get('data').length).toBe(num);
            return (/** @type {?} */ (this));
        };
        /**
         * @template THIS
         * @this {THIS}
         * @param {?} includeText
         * @param {?=} point
         * @return {THIS}
         */
        PageG2.prototype.checkTooltip = /**
         * @template THIS
         * @this {THIS}
         * @param {?} includeText
         * @param {?=} point
         * @return {THIS}
         */
        function (includeText, point) {
            if (!point) {
                /** @type {?} */
                var g2El = (/** @type {?} */ ((/** @type {?} */ (this)).dl.nativeElement));
                point = {
                    x: g2El.offsetWidth / 2,
                    y: g2El.offsetHeight / 2,
                };
            }
            (/** @type {?} */ (this)).chart.showTooltip(point);
            /** @type {?} */
            var el = (/** @type {?} */ (this)).getEl('.g2-tooltip');
            if (includeText === null) {
                expect(el == null).toBe(true, "Shoule be not found g2-tooltip element");
            }
            else {
                expect(el != null).toBe(true, "Shoule be has g2-tooltip element");
                /** @type {?} */
                var text = (/** @type {?} */ (el.textContent)).trim();
                expect(text.includes(includeText)).toBe(true, "Shoule be include \"" + includeText + "\" text of tooltip text context \"" + text + "\"");
            }
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
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var _this = this;
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
    var configureTestSuite = (/**
     * @param {?=} configureAction
     * @return {?}
     */
    function (configureAction) {
        /** @type {?} */
        var testBedApi = testing.getTestBed();
        /** @type {?} */
        var originReset = testing.TestBed.resetTestingModule;
        beforeAll((/**
         * @return {?}
         */
        function () {
            testing.TestBed.resetTestingModule();
            testing.TestBed.resetTestingModule = (/**
             * @return {?}
             */
            function () { return testing.TestBed; });
        }));
        if (configureAction) {
            beforeAll((/**
             * @param {?} done
             * @return {?}
             */
            function (done) {
                return ((/**
                 * @return {?}
                 */
                function () { return __awaiter(_this, void 0, void 0, function () {
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
                }); }))()
                    .then(done)
                    .catch(done.fail);
            }));
        }
        afterEach((/**
         * @return {?}
         */
        function () {
            testBedApi._activeFixtures.forEach((/**
             * @param {?} fixture
             * @return {?}
             */
            function (fixture) { return fixture.destroy(); }));
            testBedApi._instantiated = false;
        }));
        afterAll((/**
         * @return {?}
         */
        function () {
            testing.TestBed.resetTestingModule = originReset;
            testing.TestBed.resetTestingModule();
        }));
    });
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
    exports.configureTestSuite = configureTestSuite;
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

}));
//# sourceMappingURL=testing.umd.js.map
