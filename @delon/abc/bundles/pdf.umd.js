/**
 * @license ng-alain(cipchk@qq.com) v10.1.2
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/platform'), require('@angular/core'), require('@delon/util'), require('rxjs'), require('rxjs/operators'), require('@angular/common'), require('ng-zorro-antd/skeleton')) :
    typeof define === 'function' && define.amd ? define('@delon/abc/pdf', ['exports', '@angular/cdk/platform', '@angular/core', '@delon/util', 'rxjs', 'rxjs/operators', '@angular/common', 'ng-zorro-antd/skeleton'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.abc = global.delon.abc || {}, global.delon.abc.pdf = {}), global.ng.cdk.platform, global.ng.core, global.delon.util, global.rxjs, global.rxjs.operators, global.ng.common, global['ng-zorro-antd/skeleton']));
}(this, (function (exports, platform, core, util, rxjs, operators, common, skeleton) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
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
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: pdf.config.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var PDF_DEFULAT_CONFIG = {
        lib: "https://cdn.jsdelivr.net/npm/pdfjs-dist@2.5.207/",
        showAll: true,
        renderText: true,
        showBorders: false,
        originalSize: true,
        fitToPage: false,
        autoReSize: true,
    };

    /**
     * @fileoverview added by tsickle
     * Generated from: pdf.types.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function PdfChangeEvent() { }
    if (false) {
        /** @type {?|undefined} */
        PdfChangeEvent.prototype.type;
        /** @type {?|undefined} */
        PdfChangeEvent.prototype.pi;
        /** @type {?|undefined} */
        PdfChangeEvent.prototype.total;
        /** @type {?|undefined} */
        PdfChangeEvent.prototype.pdf;
        /** @type {?|undefined} */
        PdfChangeEvent.prototype.ev;
        /** @type {?|undefined} */
        PdfChangeEvent.prototype.progress;
        /** @type {?|undefined} */
        PdfChangeEvent.prototype.error;
    }
    /** @enum {number} */
    var PdfTextLayerMode = {
        DISABLE: 0,
        ENABLE: 1,
        ENABLE_ENHANCE: 2,
    };
    PdfTextLayerMode[PdfTextLayerMode.DISABLE] = 'DISABLE';
    PdfTextLayerMode[PdfTextLayerMode.ENABLE] = 'ENABLE';
    PdfTextLayerMode[PdfTextLayerMode.ENABLE_ENHANCE] = 'ENABLE_ENHANCE';
    /** @enum {number} */
    var PdfExternalLinkTarget = {
        NONE: 0,
        SELF: 1,
        BLANK: 2,
        PARENT: 3,
        TOP: 4,
    };
    PdfExternalLinkTarget[PdfExternalLinkTarget.NONE] = 'NONE';
    PdfExternalLinkTarget[PdfExternalLinkTarget.SELF] = 'SELF';
    PdfExternalLinkTarget[PdfExternalLinkTarget.BLANK] = 'BLANK';
    PdfExternalLinkTarget[PdfExternalLinkTarget.PARENT] = 'PARENT';
    PdfExternalLinkTarget[PdfExternalLinkTarget.TOP] = 'TOP';

    /**
     * @fileoverview added by tsickle
     * Generated from: pdf.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var win = window;
    /** @type {?} */
    var CSS_UNITS = 96.0 / 72.0;
    /** @type {?} */
    var BORDER_WIDTH = 9;
    var PdfComponent = /** @class */ (function () {
        /**
         * @param {?} ngZone
         * @param {?} configSrv
         * @param {?} lazySrv
         * @param {?} platform
         * @param {?} el
         */
        function PdfComponent(ngZone, configSrv, lazySrv, platform, el) {
            this.ngZone = ngZone;
            this.lazySrv = lazySrv;
            this.platform = platform;
            this.el = el;
            this.inited = false;
            this.unsubscribe$ = new rxjs.Subject();
            this.lib = '';
            this._pi = 1;
            this._total = 0;
            this._showAll = true;
            this._rotation = 0;
            this._zoom = 1;
            this._renderText = true;
            this.textLayerMode = PdfTextLayerMode.ENABLE;
            this.showBorders = false;
            this.stickToPage = false;
            this.originalSize = true;
            this.fitToPage = false;
            this.zoomScale = 'page-width';
            this.autoReSize = true;
            this.externalLinkTarget = PdfExternalLinkTarget.BLANK;
            // tslint:disable-next-line:no-output-native
            this.change = new core.EventEmitter();
            /** @type {?} */
            var cog = ( /** @type {?} */(configSrv.merge('pdf', PDF_DEFULAT_CONFIG)));
            Object.assign(this, cog);
            /** @type {?} */
            var lib = ( /** @type {?} */(cog.lib));
            this.lib = lib.endsWith('/') ? lib : lib + "/";
        }
        Object.defineProperty(PdfComponent.prototype, "src", {
            /**
             * @param {?} dataOrBuffer
             * @return {?}
             */
            set: function (dataOrBuffer) {
                this._src = dataOrBuffer;
                this.load();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PdfComponent.prototype, "pi", {
            /**
             * @param {?} val
             * @return {?}
             */
            set: function (val) {
                this._pi = this.getValidPi(val);
                if (this._pdf) {
                    this.pageViewer.scrollPageIntoView({ pageNumber: this._pi });
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PdfComponent.prototype, "showAll", {
            /**
             * @param {?} val
             * @return {?}
             */
            set: function (val) {
                this._showAll = val;
                this.resetDoc();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PdfComponent.prototype, "renderText", {
            /**
             * @param {?} val
             * @return {?}
             */
            set: function (val) {
                this._renderText = val;
                if (this._pdf) {
                    this.pageViewer.textLayerMode = this._textLayerMode;
                    this.resetDoc();
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PdfComponent.prototype, "zoom", {
            /**
             * @param {?} val
             * @return {?}
             */
            set: function (val) {
                if (val <= 0)
                    return;
                this._zoom = val;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PdfComponent.prototype, "rotation", {
            /**
             * @param {?} val
             * @return {?}
             */
            set: function (val) {
                if (val % 90 !== 0) {
                    console.warn("Invalid rotation angle, shoule be divisible by 90.");
                    return;
                }
                this._rotation = val;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PdfComponent.prototype, "pdf", {
            /**
             * @return {?}
             */
            get: function () {
                return this._pdf;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PdfComponent.prototype, "findController", {
            /**
             * @return {?}
             */
            get: function () {
                return this._showAll ? this.multiPageFindController : this.singlePageFindController;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PdfComponent.prototype, "pageViewer", {
            /**
             * @return {?}
             */
            get: function () {
                return this._showAll ? this.multiPageViewer : this.singlePageViewer;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PdfComponent.prototype, "linkService", {
            /**
             * @return {?}
             */
            get: function () {
                return this._showAll ? this.multiPageLinkService : this.singlePageLinkService;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PdfComponent.prototype, "_textLayerMode", {
            /**
             * @private
             * @return {?}
             */
            get: function () {
                return this._renderText ? this.textLayerMode : PdfTextLayerMode.DISABLE;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @private
         * @param {?} pi
         * @return {?}
         */
        PdfComponent.prototype.getValidPi = function (pi) {
            if (pi < 1)
                return 1;
            /** @type {?} */
            var pdf = this._pdf;
            return pdf && pi > pdf.numPages ? pdf.numPages : pi;
        };
        /**
         * @private
         * @param {?} type
         * @param {?=} opt
         * @return {?}
         */
        PdfComponent.prototype.emit = function (type, opt) {
            var _this = this;
            this.ngZone.run(( /**
             * @return {?}
             */function () { return _this.change.emit(Object.assign({ type: type, pdf: _this._pdf, pi: _this._pi, total: _this._total }, opt)); }));
        };
        /**
         * @private
         * @return {?}
         */
        PdfComponent.prototype.initDelay = function () {
            var _this = this;
            this.inited = true;
            win.pdfjsLib.GlobalWorkerOptions.workerSrc = this.lib + "build/pdf.worker.min.js";
            setTimeout(( /**
             * @return {?}
             */function () { return _this.load(); }), this.delay);
        };
        /**
         * @private
         * @return {?}
         */
        PdfComponent.prototype.load = function () {
            var _this = this;
            var _src = this._src;
            if (!this.inited || !_src) {
                return;
            }
            if (this.lastSrc === _src) {
                this.render();
                return;
            }
            this.ngZone.runOutsideAngular(( /**
             * @return {?}
             */function () {
                _this.destroy();
                /** @type {?} */
                var loadingTask = (_this.loadingTask = win.pdfjsLib.getDocument(_src));
                loadingTask.onProgress = ( /**
                 * @param {?} progress
                 * @return {?}
                 */function (progress) { return _this.emit('load-progress', { progress: progress }); });
                loadingTask.promise.then(( /**
                 * @param {?} pdf
                 * @return {?}
                 */function (pdf) {
                    _this._pdf = pdf;
                    _this.lastSrc = _src;
                    _this._total = pdf.numPages;
                    _this.emit('loaded');
                    if (!_this.pageViewer) {
                        _this.setupPageViewer();
                    }
                    _this.resetDoc();
                    _this.render();
                }), ( /**
                 * @param {?} error
                 * @return {?}
                 */function (error) { return _this.emit('error', { error: error }); }));
            }));
        };
        /**
         * @private
         * @return {?}
         */
        PdfComponent.prototype.resetDoc = function () {
            var _this = this;
            /** @type {?} */
            var pdf = this._pdf;
            if (!pdf) {
                return;
            }
            this.ngZone.runOutsideAngular(( /**
             * @return {?}
             */function () {
                _this.cleanDoc();
                _this.findController.setDocument(pdf);
                _this.pageViewer.setDocument(pdf);
                _this.linkService.setDocument(pdf, null);
            }));
        };
        /**
         * @private
         * @return {?}
         */
        PdfComponent.prototype.cleanDoc = function () {
            this.multiPageViewer.setDocument(null);
            this.singlePageViewer.setDocument(null);
            this.multiPageLinkService.setDocument(null, null);
            this.singlePageLinkService.setDocument(null, null);
            this.multiPageFindController.setDocument(null);
            this.singlePageFindController.setDocument(null);
        };
        /**
         * @private
         * @return {?}
         */
        PdfComponent.prototype.render = function () {
            var _this = this;
            /** @type {?} */
            var currentViewer = this.pageViewer;
            if (!currentViewer) {
                return;
            }
            if (this._rotation !== 0 || currentViewer.pagesRotation !== this._rotation) {
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    currentViewer.pagesRotation = _this._rotation;
                }));
            }
            if (this.stickToPage) {
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    currentViewer.currentPageNumber = _this._pi;
                }));
            }
            this.updateSize();
        };
        /**
         * @private
         * @return {?}
         */
        PdfComponent.prototype.updateSize = function () {
            var _this = this;
            this.ngZone.runOutsideAngular(( /**
             * @return {?}
             */function () {
                /** @type {?} */
                var currentViewer = _this.pageViewer;
                _this._pdf.getPage(currentViewer.currentPageNumber).then(( /**
                 * @param {?} page
                 * @return {?}
                 */function (page) {
                    var _a = _this, _rotation = _a._rotation, _zoom = _a._zoom;
                    /** @type {?} */
                    var rotation = _rotation || page.rotate;
                    /** @type {?} */
                    var viewportWidth = page.getViewport({
                        scale: _zoom,
                        rotation: rotation,
                    }).width * CSS_UNITS;
                    /** @type {?} */
                    var scale = _zoom;
                    /** @type {?} */
                    var stickToPage = true;
                    // Scale the document when it shouldn't be in original size or doesn't fit into the viewport
                    if (!_this.originalSize || (_this.fitToPage && viewportWidth > _this.el.nativeElement.clientWidth)) {
                        /** @type {?} */
                        var viewPort = page.getViewport({ scale: 1, rotation: rotation });
                        scale = _this.getScale(viewPort.width, viewPort.height);
                        stickToPage = !_this.stickToPage;
                    }
                    currentViewer._setScale(scale, stickToPage);
                }));
            }));
        };
        /**
         * @private
         * @param {?} viewportWidth
         * @param {?} viewportHeight
         * @return {?}
         */
        PdfComponent.prototype.getScale = function (viewportWidth, viewportHeight) {
            /** @type {?} */
            var borderSize = this.showBorders ? 2 * BORDER_WIDTH : 0;
            /** @type {?} */
            var el = this.el.nativeElement;
            /** @type {?} */
            var containerWidth = el.clientWidth - borderSize;
            /** @type {?} */
            var containerHeight = el.clientHeight - borderSize;
            if (containerHeight === 0 || viewportHeight === 0 || containerWidth === 0 || viewportWidth === 0) {
                return 1;
            }
            /** @type {?} */
            var ratio = 1;
            switch (this.zoomScale) {
                case 'page-fit':
                    ratio = Math.min(containerHeight / viewportHeight, containerWidth / viewportWidth);
                    break;
                case 'page-height':
                    ratio = containerHeight / viewportHeight;
                    break;
                case 'page-width':
                default:
                    ratio = containerWidth / viewportWidth;
                    break;
            }
            return (this._zoom * ratio) / CSS_UNITS;
        };
        /**
         * @private
         * @return {?}
         */
        PdfComponent.prototype.destroy = function () {
            var _this = this;
            this.ngZone.runOutsideAngular(( /**
             * @return {?}
             */function () {
                var loadingTask = _this.loadingTask;
                if (loadingTask && !loadingTask.destroyed) {
                    loadingTask.destroy();
                }
                if (_this._pdf) {
                    _this._pdf.destroy();
                    _this._pdf = null;
                    _this.cleanDoc();
                }
            }));
        };
        /**
         * @private
         * @return {?}
         */
        PdfComponent.prototype.setupPageViewer = function () {
            win.pdfjsLib.disableTextLayer = !this._renderText;
            win.pdfjsLib.externalLinkTarget = this.externalLinkTarget;
            this.setupMultiPageViewer();
            this.setupSinglePageViewer();
        };
        /**
         * @private
         * @return {?}
         */
        PdfComponent.prototype.createEventBus = function () {
            var _this = this;
            /** @type {?} */
            var eventBus = new win.pdfjsViewer.EventBus();
            eventBus.on("pagesinit", ( /**
             * @param {?} ev
             * @return {?}
             */function (ev) {
                _this.emit('pages-init', { ev: ev });
            }));
            eventBus.on("pagerendered", ( /**
             * @param {?} ev
             * @return {?}
             */function (ev) {
                _this.emit('page-rendered', { ev: ev });
            }));
            eventBus.on("pagechanging", ( /**
             * @param {?} ev
             * @return {?}
             */function (ev) {
                /** @type {?} */
                var nowPi = ev.pageNumber;
                if (nowPi !== _this._pi) {
                    _this._pi = nowPi;
                    _this.emit('pi', { ev: ev });
                }
            }));
            eventBus.on("textlayerrendered", ( /**
             * @param {?} ev
             * @return {?}
             */function (ev) {
                _this.emit('text-layer-rendered', { ev: ev });
            }));
            return eventBus;
        };
        /**
         * @private
         * @return {?}
         */
        PdfComponent.prototype.setupMultiPageViewer = function () {
            /** @type {?} */
            var VIEWER = win.pdfjsViewer;
            /** @type {?} */
            var eventBus = this.createEventBus();
            /** @type {?} */
            var linkService = (this.multiPageLinkService = new VIEWER.PDFLinkService({
                eventBus: eventBus,
            }));
            /** @type {?} */
            var findController = (this.multiPageFindController = new VIEWER.PDFFindController({
                eventBus: eventBus,
                linkService: linkService,
            }));
            /** @type {?} */
            var viewer = (this.multiPageViewer = new VIEWER.PDFViewer({
                eventBus: eventBus,
                container: this.el.nativeElement,
                removePageBorders: !this.showBorders,
                textLayerMode: this._textLayerMode,
                linkService: linkService,
                findController: findController,
            }));
            linkService.setViewer(viewer);
        };
        /**
         * @private
         * @return {?}
         */
        PdfComponent.prototype.setupSinglePageViewer = function () {
            /** @type {?} */
            var VIEWER = win.pdfjsViewer;
            /** @type {?} */
            var eventBus = this.createEventBus();
            /** @type {?} */
            var linkService = (this.singlePageLinkService = new VIEWER.PDFLinkService({
                eventBus: eventBus,
            }));
            /** @type {?} */
            var findController = (this.singlePageFindController = new VIEWER.PDFFindController({
                eventBus: eventBus,
                linkService: linkService,
            }));
            /** @type {?} */
            var pageViewer = (this.singlePageViewer = new VIEWER.PDFSinglePageViewer({
                eventBus: eventBus,
                container: this.el.nativeElement,
                removePageBorders: !this.showBorders,
                textLayerMode: this._textLayerMode,
                linkService: linkService,
                findController: findController,
            }));
            linkService.setViewer(pageViewer);
            pageViewer._currentPageNumber = this._pi;
        };
        /**
         * @return {?}
         */
        PdfComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            if (!this.platform.isBrowser) {
                return;
            }
            if (win.pdfjsLib) {
                this.initDelay();
                return;
            }
            var lib = this.lib;
            this.lazySrv
                .load(lib + "build/pdf.min.js")
                .then(( /**
         * @return {?}
         */function () { return _this.lazySrv.load([lib + "web/pdf_viewer.js", lib + "web/pdf_viewer.css"]); }))
                .then(( /**
         * @return {?}
         */function () { return _this.initDelay(); }));
            this.ngZone.runOutsideAngular(( /**
             * @return {?}
             */function () { return _this.initResize(); }));
        };
        /**
         * @private
         * @return {?}
         */
        PdfComponent.prototype.initResize = function () {
            var _this = this;
            rxjs.fromEvent(win, 'resize')
                .pipe(operators.debounceTime(100), operators.filter(( /**
         * @return {?}
         */function () { return _this.autoReSize && _this._pdf; })), operators.takeUntil(this.unsubscribe$))
                .subscribe(( /**
         * @return {?}
         */function () { return _this.updateSize(); }));
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        PdfComponent.prototype.ngOnChanges = function (changes) {
            if (this.inited && !changes.src) {
                this.render();
            }
        };
        /**
         * @return {?}
         */
        PdfComponent.prototype.ngOnDestroy = function () {
            var unsubscribe$ = this.unsubscribe$;
            unsubscribe$.next();
            unsubscribe$.complete();
            this.destroy();
        };
        return PdfComponent;
    }());
    PdfComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'pdf',
                    exportAs: 'pdf',
                    template: "\n    <nz-skeleton *ngIf=\"!inited\"></nz-skeleton>\n    <div class=\"pdfViewer\"></div>\n  ",
                    host: {
                        '[class.pdf-container]': "true",
                    },
                    preserveWhitespaces: false,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    PdfComponent.ctorParameters = function () { return [
        { type: core.NgZone },
        { type: util.AlainConfigService },
        { type: util.LazyService },
        { type: platform.Platform },
        { type: core.ElementRef }
    ]; };
    PdfComponent.propDecorators = {
        src: [{ type: core.Input }],
        pi: [{ type: core.Input }],
        showAll: [{ type: core.Input }],
        renderText: [{ type: core.Input }],
        textLayerMode: [{ type: core.Input }],
        showBorders: [{ type: core.Input }],
        stickToPage: [{ type: core.Input }],
        originalSize: [{ type: core.Input }],
        fitToPage: [{ type: core.Input }],
        zoom: [{ type: core.Input }],
        zoomScale: [{ type: core.Input }],
        rotation: [{ type: core.Input }],
        autoReSize: [{ type: core.Input }],
        externalLinkTarget: [{ type: core.Input }],
        delay: [{ type: core.Input }],
        change: [{ type: core.Output }]
    };
    __decorate([
        util.InputNumber(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], PdfComponent.prototype, "pi", null);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], PdfComponent.prototype, "showAll", null);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], PdfComponent.prototype, "renderText", null);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Object)
    ], PdfComponent.prototype, "showBorders", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Object)
    ], PdfComponent.prototype, "stickToPage", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Object)
    ], PdfComponent.prototype, "originalSize", void 0);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Object)
    ], PdfComponent.prototype, "fitToPage", void 0);
    __decorate([
        util.InputNumber(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], PdfComponent.prototype, "zoom", null);
    __decorate([
        util.InputNumber(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], PdfComponent.prototype, "rotation", null);
    __decorate([
        util.InputBoolean(),
        __metadata("design:type", Object)
    ], PdfComponent.prototype, "autoReSize", void 0);
    __decorate([
        util.InputNumber(),
        __metadata("design:type", Number)
    ], PdfComponent.prototype, "delay", void 0);
    if (false) {
        /** @type {?} */
        PdfComponent.ngAcceptInputType_pi;
        /** @type {?} */
        PdfComponent.ngAcceptInputType_delay;
        /** @type {?} */
        PdfComponent.ngAcceptInputType_showAllPages;
        /** @type {?} */
        PdfComponent.ngAcceptInputType_stickToPage;
        /** @type {?} */
        PdfComponent.ngAcceptInputType_originalSize;
        /** @type {?} */
        PdfComponent.ngAcceptInputType_fitToPage;
        /** @type {?} */
        PdfComponent.ngAcceptInputType_disableTextLayer;
        /** @type {?} */
        PdfComponent.ngAcceptInputType_removePageBorders;
        /** @type {?} */
        PdfComponent.prototype.inited;
        /**
         * @type {?}
         * @private
         */
        PdfComponent.prototype.unsubscribe$;
        /**
         * @type {?}
         * @private
         */
        PdfComponent.prototype.lib;
        /**
         * @type {?}
         * @private
         */
        PdfComponent.prototype._pdf;
        /**
         * @type {?}
         * @private
         */
        PdfComponent.prototype.loadingTask;
        /**
         * @type {?}
         * @private
         */
        PdfComponent.prototype._src;
        /**
         * @type {?}
         * @private
         */
        PdfComponent.prototype.lastSrc;
        /**
         * @type {?}
         * @private
         */
        PdfComponent.prototype._pi;
        /**
         * @type {?}
         * @private
         */
        PdfComponent.prototype._total;
        /**
         * @type {?}
         * @private
         */
        PdfComponent.prototype._showAll;
        /**
         * @type {?}
         * @private
         */
        PdfComponent.prototype._rotation;
        /**
         * @type {?}
         * @private
         */
        PdfComponent.prototype._zoom;
        /**
         * @type {?}
         * @private
         */
        PdfComponent.prototype._renderText;
        /**
         * @type {?}
         * @private
         */
        PdfComponent.prototype.multiPageViewer;
        /**
         * @type {?}
         * @private
         */
        PdfComponent.prototype.multiPageLinkService;
        /**
         * @type {?}
         * @private
         */
        PdfComponent.prototype.multiPageFindController;
        /**
         * @type {?}
         * @private
         */
        PdfComponent.prototype.singlePageViewer;
        /**
         * @type {?}
         * @private
         */
        PdfComponent.prototype.singlePageLinkService;
        /**
         * @type {?}
         * @private
         */
        PdfComponent.prototype.singlePageFindController;
        /** @type {?} */
        PdfComponent.prototype.textLayerMode;
        /** @type {?} */
        PdfComponent.prototype.showBorders;
        /** @type {?} */
        PdfComponent.prototype.stickToPage;
        /** @type {?} */
        PdfComponent.prototype.originalSize;
        /** @type {?} */
        PdfComponent.prototype.fitToPage;
        /** @type {?} */
        PdfComponent.prototype.zoomScale;
        /** @type {?} */
        PdfComponent.prototype.autoReSize;
        /** @type {?} */
        PdfComponent.prototype.externalLinkTarget;
        /** @type {?} */
        PdfComponent.prototype.delay;
        /** @type {?} */
        PdfComponent.prototype.change;
        /**
         * @type {?}
         * @private
         */
        PdfComponent.prototype.ngZone;
        /**
         * @type {?}
         * @private
         */
        PdfComponent.prototype.lazySrv;
        /**
         * @type {?}
         * @private
         */
        PdfComponent.prototype.platform;
        /**
         * @type {?}
         * @private
         */
        PdfComponent.prototype.el;
    }

    /** @type {?} */
    var COMPONENTS = [PdfComponent];
    var PdfModule = /** @class */ (function () {
        function PdfModule() {
        }
        return PdfModule;
    }());
    PdfModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule, util.DelonUtilModule, skeleton.NzSkeletonModule],
                    declarations: __spread(COMPONENTS),
                    exports: __spread(COMPONENTS),
                },] }
    ];

    /**
     * @fileoverview added by tsickle
     * Generated from: public_api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: pdf.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.PDF_DEFULAT_CONFIG = PDF_DEFULAT_CONFIG;
    exports.PdfComponent = PdfComponent;
    exports.PdfExternalLinkTarget = PdfExternalLinkTarget;
    exports.PdfModule = PdfModule;
    exports.PdfTextLayerMode = PdfTextLayerMode;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=pdf.umd.js.map
