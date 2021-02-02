/**
 * @license ng-alain(cipchk@qq.com) v11.3.1
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@delon/util/decorator'), require('rxjs'), require('rxjs/operators'), require('@delon/util/config'), require('@delon/util/other'), require('@angular/cdk/platform'), require('ng-zorro-antd/skeleton')) :
    typeof define === 'function' && define.amd ? define('@delon/abc/pdf', ['exports', '@angular/common', '@angular/core', '@delon/util/decorator', 'rxjs', 'rxjs/operators', '@delon/util/config', '@delon/util/other', '@angular/cdk/platform', 'ng-zorro-antd/skeleton'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.abc = global.delon.abc || {}, global.delon.abc.pdf = {}), global.ng.common, global.ng.core, global.decorator, global.rxjs, global.rxjs.operators, global.i1, global.i2, global.ng.cdk.platform, global['ng-zorro-antd/skeleton']));
}(this, (function (exports, i4, i0, decorator, rxjs, operators, i1, i2, i3, i5) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);

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
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
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

    var PDF_DEFULAT_CONFIG = {
        lib: "https://cdn.jsdelivr.net/npm/pdfjs-dist@2.5.207/",
        showAll: true,
        renderText: true,
        showBorders: false,
        originalSize: true,
        fitToPage: false,
        autoReSize: true,
    };

    (function (PdfTextLayerMode) {
        PdfTextLayerMode[PdfTextLayerMode["DISABLE"] = 0] = "DISABLE";
        PdfTextLayerMode[PdfTextLayerMode["ENABLE"] = 1] = "ENABLE";
        PdfTextLayerMode[PdfTextLayerMode["ENABLE_ENHANCE"] = 2] = "ENABLE_ENHANCE";
    })(exports.PdfTextLayerMode || (exports.PdfTextLayerMode = {}));
    (function (PdfExternalLinkTarget) {
        PdfExternalLinkTarget[PdfExternalLinkTarget["NONE"] = 0] = "NONE";
        PdfExternalLinkTarget[PdfExternalLinkTarget["SELF"] = 1] = "SELF";
        PdfExternalLinkTarget[PdfExternalLinkTarget["BLANK"] = 2] = "BLANK";
        PdfExternalLinkTarget[PdfExternalLinkTarget["PARENT"] = 3] = "PARENT";
        PdfExternalLinkTarget[PdfExternalLinkTarget["TOP"] = 4] = "TOP";
    })(exports.PdfExternalLinkTarget || (exports.PdfExternalLinkTarget = {}));

    var CSS_UNITS = 96.0 / 72.0;
    var BORDER_WIDTH = 9;
    var PdfComponent = /** @class */ (function () {
        function PdfComponent(ngZone, configSrv, lazySrv, platform, el, doc) {
            this.ngZone = ngZone;
            this.lazySrv = lazySrv;
            this.platform = platform;
            this.el = el;
            this.doc = doc;
            this.inited = false;
            this.unsubscribe$ = new rxjs.Subject();
            this.lib = '';
            this._pi = 1;
            this._total = 0;
            this._showAll = true;
            this._rotation = 0;
            this._zoom = 1;
            this._renderText = true;
            this.textLayerMode = exports.PdfTextLayerMode.ENABLE;
            this.showBorders = false;
            this.stickToPage = false;
            this.originalSize = true;
            this.fitToPage = false;
            this.zoomScale = 'page-width';
            this.autoReSize = true;
            this.externalLinkTarget = exports.PdfExternalLinkTarget.BLANK;
            this.change = new i0.EventEmitter();
            var cog = configSrv.merge('pdf', PDF_DEFULAT_CONFIG);
            Object.assign(this, cog);
            var lib = cog.lib;
            this.lib = lib.endsWith('/') ? lib : lib + "/";
        }
        Object.defineProperty(PdfComponent.prototype, "src", {
            set: function (dataOrBuffer) {
                this._src = dataOrBuffer;
                this.load();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PdfComponent.prototype, "pi", {
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
            set: function (val) {
                this._showAll = val;
                this.resetDoc();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PdfComponent.prototype, "renderText", {
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
            set: function (val) {
                if (val <= 0)
                    return;
                this._zoom = val;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PdfComponent.prototype, "rotation", {
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
            get: function () {
                return this._pdf;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PdfComponent.prototype, "findController", {
            get: function () {
                return this._showAll ? this.multiPageFindController : this.singlePageFindController;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PdfComponent.prototype, "pageViewer", {
            get: function () {
                return this._showAll ? this.multiPageViewer : this.singlePageViewer;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PdfComponent.prototype, "linkService", {
            get: function () {
                return this._showAll ? this.multiPageLinkService : this.singlePageLinkService;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PdfComponent.prototype, "_textLayerMode", {
            get: function () {
                return this._renderText ? this.textLayerMode : exports.PdfTextLayerMode.DISABLE;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PdfComponent.prototype, "win", {
            get: function () {
                return this.doc.defaultView || window;
            },
            enumerable: false,
            configurable: true
        });
        PdfComponent.prototype.getValidPi = function (pi) {
            if (pi < 1)
                return 1;
            var pdf = this._pdf;
            return pdf && pi > pdf.numPages ? pdf.numPages : pi;
        };
        PdfComponent.prototype.emit = function (type, opt) {
            var _this = this;
            this.ngZone.run(function () { return _this.change.emit(Object.assign({ type: type, pdf: _this._pdf, pi: _this._pi, total: _this._total }, opt)); });
        };
        PdfComponent.prototype.initDelay = function () {
            var _this = this;
            this.inited = true;
            this.win.pdfjsLib.GlobalWorkerOptions.workerSrc = this.lib + "build/pdf.worker.min.js";
            setTimeout(function () { return _this.load(); }, this.delay);
        };
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
            this.ngZone.runOutsideAngular(function () {
                _this.destroy();
                var loadingTask = (_this.loadingTask = _this.win.pdfjsLib.getDocument(_src));
                loadingTask.onProgress = function (progress) { return _this.emit('load-progress', { progress: progress }); };
                loadingTask.promise.then(function (pdf) {
                    _this._pdf = pdf;
                    _this.lastSrc = _src;
                    _this._total = pdf.numPages;
                    _this.emit('loaded');
                    if (!_this.pageViewer) {
                        _this.setupPageViewer();
                    }
                    _this.resetDoc();
                    _this.render();
                }, function (error) { return _this.emit('error', { error: error }); });
            });
        };
        PdfComponent.prototype.resetDoc = function () {
            var _this = this;
            var pdf = this._pdf;
            if (!pdf) {
                return;
            }
            this.ngZone.runOutsideAngular(function () {
                _this.cleanDoc();
                _this.findController.setDocument(pdf);
                _this.pageViewer.setDocument(pdf);
                _this.linkService.setDocument(pdf, null);
            });
        };
        PdfComponent.prototype.cleanDoc = function () {
            this.multiPageViewer.setDocument(null);
            this.singlePageViewer.setDocument(null);
            this.multiPageLinkService.setDocument(null, null);
            this.singlePageLinkService.setDocument(null, null);
            this.multiPageFindController.setDocument(null);
            this.singlePageFindController.setDocument(null);
        };
        PdfComponent.prototype.render = function () {
            var _this = this;
            var currentViewer = this.pageViewer;
            if (!currentViewer) {
                return;
            }
            if (this._rotation !== 0 || currentViewer.pagesRotation !== this._rotation) {
                setTimeout(function () {
                    currentViewer.pagesRotation = _this._rotation;
                });
            }
            if (this.stickToPage) {
                setTimeout(function () {
                    currentViewer.currentPageNumber = _this._pi;
                });
            }
            this.updateSize();
        };
        PdfComponent.prototype.updateSize = function () {
            var _this = this;
            this.ngZone.runOutsideAngular(function () {
                var currentViewer = _this.pageViewer;
                _this._pdf.getPage(currentViewer.currentPageNumber).then(function (page) {
                    var _a = _this, _rotation = _a._rotation, _zoom = _a._zoom;
                    var rotation = _rotation || page.rotate;
                    var viewportWidth = page.getViewport({
                        scale: _zoom,
                        rotation: rotation,
                    }).width * CSS_UNITS;
                    var scale = _zoom;
                    var stickToPage = true;
                    // Scale the document when it shouldn't be in original size or doesn't fit into the viewport
                    if (!_this.originalSize || (_this.fitToPage && viewportWidth > _this.el.nativeElement.clientWidth)) {
                        var viewPort = page.getViewport({ scale: 1, rotation: rotation });
                        scale = _this.getScale(viewPort.width, viewPort.height);
                        stickToPage = !_this.stickToPage;
                    }
                    currentViewer._setScale(scale, stickToPage);
                });
            });
        };
        PdfComponent.prototype.getScale = function (viewportWidth, viewportHeight) {
            var borderSize = this.showBorders ? 2 * BORDER_WIDTH : 0;
            var el = this.el.nativeElement;
            var containerWidth = el.clientWidth - borderSize;
            var containerHeight = el.clientHeight - borderSize;
            if (containerHeight === 0 || viewportHeight === 0 || containerWidth === 0 || viewportWidth === 0) {
                return 1;
            }
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
        PdfComponent.prototype.destroy = function () {
            var _this = this;
            this.ngZone.runOutsideAngular(function () {
                var loadingTask = _this.loadingTask;
                if (loadingTask && !loadingTask.destroyed) {
                    loadingTask.destroy();
                }
                if (_this._pdf) {
                    _this._pdf.destroy();
                    _this._pdf = null;
                    _this.cleanDoc();
                }
            });
        };
        PdfComponent.prototype.setupPageViewer = function () {
            this.win.pdfjsLib.disableTextLayer = !this._renderText;
            this.win.pdfjsLib.externalLinkTarget = this.externalLinkTarget;
            this.setupMultiPageViewer();
            this.setupSinglePageViewer();
        };
        PdfComponent.prototype.createEventBus = function () {
            var _this = this;
            var eventBus = new this.win.pdfjsViewer.EventBus();
            eventBus.on("pagesinit", function (ev) {
                _this.emit('pages-init', { ev: ev });
            });
            eventBus.on("pagerendered", function (ev) {
                _this.emit('page-rendered', { ev: ev });
            });
            eventBus.on("pagechanging", function (ev) {
                var nowPi = ev.pageNumber;
                if (nowPi !== _this._pi) {
                    _this._pi = nowPi;
                    _this.emit('pi', { ev: ev });
                }
            });
            eventBus.on("textlayerrendered", function (ev) {
                _this.emit('text-layer-rendered', { ev: ev });
            });
            return eventBus;
        };
        PdfComponent.prototype.setupMultiPageViewer = function () {
            var VIEWER = this.win.pdfjsViewer;
            var eventBus = this.createEventBus();
            var linkService = (this.multiPageLinkService = new VIEWER.PDFLinkService({
                eventBus: eventBus,
            }));
            var findController = (this.multiPageFindController = new VIEWER.PDFFindController({
                eventBus: eventBus,
                linkService: linkService,
            }));
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
        PdfComponent.prototype.setupSinglePageViewer = function () {
            var VIEWER = this.win.pdfjsViewer;
            var eventBus = this.createEventBus();
            var linkService = (this.singlePageLinkService = new VIEWER.PDFLinkService({
                eventBus: eventBus,
            }));
            var findController = (this.singlePageFindController = new VIEWER.PDFFindController({
                eventBus: eventBus,
                linkService: linkService,
            }));
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
        PdfComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            if (!this.platform.isBrowser) {
                return;
            }
            if (this.win.pdfjsLib) {
                this.initDelay();
                return;
            }
            var lib = this.lib;
            this.lazySrv
                .load(lib + "build/pdf.min.js")
                .then(function () { return _this.lazySrv.load([lib + "web/pdf_viewer.js", lib + "web/pdf_viewer.css"]); })
                .then(function () { return _this.initDelay(); });
            this.ngZone.runOutsideAngular(function () { return _this.initResize(); });
        };
        PdfComponent.prototype.initResize = function () {
            var _this = this;
            rxjs.fromEvent(this.win, 'resize')
                .pipe(operators.debounceTime(100), operators.filter(function () { return _this.autoReSize && _this._pdf; }), operators.takeUntil(this.unsubscribe$))
                .subscribe(function () { return _this.updateSize(); });
        };
        PdfComponent.prototype.ngOnChanges = function (changes) {
            if (this.inited && !changes.src) {
                this.render();
            }
        };
        PdfComponent.prototype.ngOnDestroy = function () {
            var unsubscribe$ = this.unsubscribe$;
            unsubscribe$.next();
            unsubscribe$.complete();
            this.destroy();
        };
        return PdfComponent;
    }());
    /** @nocollapse */ PdfComponent.ɵfac = function PdfComponent_Factory(t) { return new (t || PdfComponent)(i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i1.AlainConfigService), i0.ɵɵdirectiveInject(i2.LazyService), i0.ɵɵdirectiveInject(i3.Platform), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i4.DOCUMENT, 8)); };
    /** @nocollapse */ PdfComponent.ɵcmp = i0.ɵɵngDeclareComponent({ version: "11.1.1", type: PdfComponent, selector: "pdf", inputs: { src: "src", pi: "pi", showAll: "showAll", renderText: "renderText", textLayerMode: "textLayerMode", showBorders: "showBorders", stickToPage: "stickToPage", originalSize: "originalSize", fitToPage: "fitToPage", zoom: "zoom", zoomScale: "zoomScale", rotation: "rotation", autoReSize: "autoReSize", externalLinkTarget: "externalLinkTarget", delay: "delay" }, outputs: { change: "change" }, host: { properties: { "class.pdf-container": "true" } }, exportAs: ["pdf"], usesOnChanges: true, ngImport: i0__namespace, template: "\n    <nz-skeleton *ngIf=\"!inited\"></nz-skeleton>\n    <div class=\"pdfViewer\"></div>\n  ", isInline: true, directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i5.NzSkeletonComponent, selector: "nz-skeleton", inputs: ["nzActive", "nzLoading", "nzRound", "nzTitle", "nzAvatar", "nzParagraph"], exportAs: ["nzSkeleton"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
    __decorate([
        decorator.InputNumber(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], PdfComponent.prototype, "pi", null);
    __decorate([
        decorator.InputBoolean(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], PdfComponent.prototype, "showAll", null);
    __decorate([
        decorator.InputBoolean(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], PdfComponent.prototype, "renderText", null);
    __decorate([
        decorator.InputBoolean(),
        __metadata("design:type", Object)
    ], PdfComponent.prototype, "showBorders", void 0);
    __decorate([
        decorator.InputBoolean(),
        __metadata("design:type", Object)
    ], PdfComponent.prototype, "stickToPage", void 0);
    __decorate([
        decorator.InputBoolean(),
        __metadata("design:type", Object)
    ], PdfComponent.prototype, "originalSize", void 0);
    __decorate([
        decorator.InputBoolean(),
        __metadata("design:type", Object)
    ], PdfComponent.prototype, "fitToPage", void 0);
    __decorate([
        decorator.InputNumber(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], PdfComponent.prototype, "zoom", null);
    __decorate([
        decorator.InputNumber(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], PdfComponent.prototype, "rotation", null);
    __decorate([
        decorator.InputBoolean(),
        __metadata("design:type", Object)
    ], PdfComponent.prototype, "autoReSize", void 0);
    __decorate([
        decorator.InputNumber(),
        __metadata("design:type", Number)
    ], PdfComponent.prototype, "delay", void 0);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pdf',
                        exportAs: 'pdf',
                        template: "\n    <nz-skeleton *ngIf=\"!inited\"></nz-skeleton>\n    <div class=\"pdfViewer\"></div>\n  ",
                        host: {
                            '[class.pdf-container]': "true",
                        },
                        preserveWhitespaces: false,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                    }]
            }], function () {
            return [{ type: i0.NgZone }, { type: i1.AlainConfigService }, { type: i2.LazyService }, { type: i3.Platform }, { type: i0.ElementRef }, { type: Document, decorators: [{
                            type: i0.Optional
                        }, {
                            type: i0.Inject,
                            args: [i4.DOCUMENT]
                        }] }];
        }, { src: [{
                    type: i0.Input
                }], pi: [{
                    type: i0.Input
                }], showAll: [{
                    type: i0.Input
                }], renderText: [{
                    type: i0.Input
                }], textLayerMode: [{
                    type: i0.Input
                }], showBorders: [{
                    type: i0.Input
                }], stickToPage: [{
                    type: i0.Input
                }], originalSize: [{
                    type: i0.Input
                }], fitToPage: [{
                    type: i0.Input
                }], zoom: [{
                    type: i0.Input
                }], zoomScale: [{
                    type: i0.Input
                }], rotation: [{
                    type: i0.Input
                }], autoReSize: [{
                    type: i0.Input
                }], externalLinkTarget: [{
                    type: i0.Input
                }], delay: [{
                    type: i0.Input
                }], change: [{
                    type: i0.Output
                }] });
    })();

    var COMPONENTS = [PdfComponent];
    var PdfModule = /** @class */ (function () {
        function PdfModule() {
        }
        return PdfModule;
    }());
    /** @nocollapse */ PdfModule.ɵmod = i0.ɵɵdefineNgModule({ type: PdfModule });
    /** @nocollapse */ PdfModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PdfModule_Factory(t) { return new (t || PdfModule)(); }, imports: [[i4.CommonModule, i5.NzSkeletonModule]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PdfModule, { declarations: [PdfComponent], imports: [i4.CommonModule, i5.NzSkeletonModule], exports: [PdfComponent] }); })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [i4.CommonModule, i5.NzSkeletonModule],
                        declarations: COMPONENTS,
                        exports: COMPONENTS,
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.PDF_DEFULAT_CONFIG = PDF_DEFULAT_CONFIG;
    exports.PdfComponent = PdfComponent;
    exports.PdfModule = PdfModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=pdf.umd.js.map
