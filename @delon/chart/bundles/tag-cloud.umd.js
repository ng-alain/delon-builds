/**
 * @license ng-alain(cipchk@qq.com) v11.0.2
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/platform'), require('@angular/core'), require('@antv/g2'), require('@delon/util'), require('rxjs'), require('rxjs/operators'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@delon/chart/tag-cloud', ['exports', '@angular/cdk/platform', '@angular/core', '@antv/g2', '@delon/util', 'rxjs', 'rxjs/operators', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.chart = global.delon.chart || {}, global.delon.chart['tag-cloud'] = {}), global.ng.cdk.platform, global.ng.core, global.g2, global.delon.util, global.rxjs, global.rxjs.operators, global.ng.common));
}(this, (function (exports, platform, core, g2, util, rxjs, operators, common) { 'use strict';

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
     * Generated from: tag-cloud.data.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // tslint:disable: one-variable-per-declaration typedef no-conditional-assignment only-arrow-functions ban-comma-operator no-shadowed-variable
    /*
     * Synchronous version of d3-cloud
     */
    // Word cloud layout by Jason Davies, https://www.jasondavies.com/wordcloud/
    // Algorithm due to Jonathan Feinberg, http://static.mrfeinberg.com/bv_ch03.pdf
    /* eslint-disable no-return-assign, no-cond-assign */
    /**
     * @record
     */
    function Item() { }
    if (false) {
        /** @type {?} */
        Item.prototype.value;
        /** @type {?} */
        Item.prototype.text;
        /** @type {?} */
        Item.prototype.sprite;
    }
    /** @type {?} */
    var cloudRadians = Math.PI / 180;
    /** @type {?} */
    var cw = (1 << 11) >> 5;
    /** @type {?} */
    var ch = 1 << 11;
    /**
     * @param {?} d
     * @return {?}
     */
    function cloudText(d) {
        return d.text;
    }
    /**
     * @return {?}
     */
    function cloudFont() {
        return 'serif';
    }
    /**
     * @return {?}
     */
    function cloudFontNormal() {
        return 'normal';
    }
    /**
     * @param {?} d
     * @return {?}
     */
    function cloudFontSize(d) {
        return d.value;
    }
    /**
     * @return {?}
     */
    function cloudRotate() {
        return ~~(Math.random() * 2) * 90;
    }
    /**
     * @return {?}
     */
    function cloudPadding() {
        return 1;
    }
    // Fetches a monochrome sprite bitmap for the specified text.
    // Load in batches for speed.
    /**
     * @param {?} contextAndRatio
     * @param {?} d
     * @param {?} data
     * @param {?} di
     * @return {?}
     */
    function cloudSprite(contextAndRatio, d, data, di) {
        if (d.sprite)
            return;
        /** @type {?} */
        var c = contextAndRatio.context;
        /** @type {?} */
        var ratio = contextAndRatio.ratio;
        c.clearRect(0, 0, (cw << 5) / ratio, ch / ratio);
        /** @type {?} */
        var x = 0;
        /** @type {?} */
        var y = 0;
        /** @type {?} */
        var maxh = 0;
        /** @type {?} */
        var n = data.length;
        --di;
        while (++di < n) {
            d = data[di];
            c.save();
            c.font = d.style + ' ' + d.weight + ' ' + ~~((d.size + 1) / ratio) + 'px ' + d.font;
            /** @type {?} */
            var w = c.measureText(d.text + 'm').width * ratio;
            /** @type {?} */
            var h = d.size << 1;
            if (d.rotate) {
                /** @type {?} */
                var sr = Math.sin(d.rotate * cloudRadians);
                /** @type {?} */
                var cr = Math.cos(d.rotate * cloudRadians);
                /** @type {?} */
                var wcr = w * cr;
                /** @type {?} */
                var wsr = w * sr;
                /** @type {?} */
                var hcr = h * cr;
                /** @type {?} */
                var hsr = h * sr;
                w = ((Math.max(Math.abs(wcr + hsr), Math.abs(wcr - hsr)) + 0x1f) >> 5) << 5;
                h = ~~Math.max(Math.abs(wsr + hcr), Math.abs(wsr - hcr));
            }
            else {
                w = ((w + 0x1f) >> 5) << 5;
            }
            if (h > maxh)
                maxh = h;
            if (x + w >= cw << 5) {
                x = 0;
                y += maxh;
                maxh = 0;
            }
            if (y + h >= ch)
                break;
            c.translate((x + (w >> 1)) / ratio, (y + (h >> 1)) / ratio);
            if (d.rotate)
                c.rotate(d.rotate * cloudRadians);
            c.fillText(d.text, 0, 0);
            if (d.padding) {
                c.lineWidth = 2 * d.padding;
                c.strokeText(d.text, 0, 0);
            }
            c.restore();
            d.width = w;
            d.height = h;
            d.xoff = x;
            d.yoff = y;
            d.x1 = w >> 1;
            d.y1 = h >> 1;
            d.x0 = -d.x1;
            d.y0 = -d.y1;
            d.hasText = true;
            x += w;
        }
        /** @type {?} */
        var pixels = c.getImageData(0, 0, (cw << 5) / ratio, ch / ratio).data;
        /** @type {?} */
        var sprite = [];
        while (--di >= 0) {
            d = data[di];
            if (!d.hasText)
                continue;
            /** @type {?} */
            var w = d.width;
            /** @type {?} */
            var w32 = w >> 5;
            /** @type {?} */
            var h = d.y1 - d.y0;
            // Zero the buffer
            for (var i = 0; i < h * w32; i++)
                sprite[i] = 0;
            x = d.xoff;
            if (x == null)
                return;
            y = d.yoff;
            /** @type {?} */
            var seen = 0;
            /** @type {?} */
            var seenRow = -1;
            for (var j = 0; j < h; j++) {
                for (var i = 0; i < w; i++) {
                    /** @type {?} */
                    var k = w32 * j + (i >> 5);
                    /** @type {?} */
                    var m = pixels[((y + j) * (cw << 5) + (x + i)) << 2] ? 1 << (31 - (i % 32)) : 0;
                    sprite[k] |= m;
                    seen |= m;
                }
                if (seen)
                    seenRow = j;
                else {
                    d.y0++;
                    h--;
                    j--;
                    y++;
                }
            }
            d.y1 = d.y0 + seenRow;
            d.sprite = sprite.slice(0, (d.y1 - d.y0) * w32);
        }
    }
    // Use mask-based collision detection.
    /**
     * @param {?} tag
     * @param {?} board
     * @param {?} sw
     * @return {?}
     */
    function cloudCollide(tag, board, sw) {
        sw >>= 5;
        /** @type {?} */
        var sprite = tag.sprite;
        /** @type {?} */
        var w = tag.width >> 5;
        /** @type {?} */
        var lx = tag.x - (w << 4);
        /** @type {?} */
        var sx = lx & 0x7f;
        /** @type {?} */
        var msx = 32 - sx;
        /** @type {?} */
        var h = tag.y1 - tag.y0;
        /** @type {?} */
        var x = (tag.y + tag.y0) * sw + (lx >> 5);
        /** @type {?} */
        var last;
        for (var j = 0; j < h; j++) {
            last = 0;
            for (var i = 0; i <= w; i++) {
                if (((last << msx) | (i < w ? (last = sprite[j * w + i]) >>> sx : 0)) & board[x + i])
                    return true;
            }
            x += sw;
        }
        return false;
    }
    /**
     * @param {?} bounds
     * @param {?} d
     * @return {?}
     */
    function cloudBounds(bounds, d) {
        /** @type {?} */
        var b0 = bounds[0];
        /** @type {?} */
        var b1 = bounds[1];
        if (d.x + d.x0 < b0.x)
            b0.x = d.x + d.x0;
        if (d.y + d.y0 < b0.y)
            b0.y = d.y + d.y0;
        if (d.x + d.x1 > b1.x)
            b1.x = d.x + d.x1;
        if (d.y + d.y1 > b1.y)
            b1.y = d.y + d.y1;
    }
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function collideRects(a, b) {
        return a.x + a.x1 > b[0].x && a.x + a.x0 < b[1].x && a.y + a.y1 > b[0].y && a.y + a.y0 < b[1].y;
    }
    /**
     * @param {?} size
     * @return {?}
     */
    function archimedeanSpiral(size) {
        /** @type {?} */
        var e = size[0] / size[1];
        return ( /**
         * @param {?} t
         * @return {?}
         */function (t) {
            return [e * (t *= 0.1) * Math.cos(t), t * Math.sin(t)];
        });
    }
    /**
     * @param {?} size
     * @return {?}
     */
    function rectangularSpiral(size) {
        /** @type {?} */
        var dy = 4;
        /** @type {?} */
        var dx = (dy * size[0]) / size[1];
        /** @type {?} */
        var x = 0;
        /** @type {?} */
        var y = 0;
        return ( /**
         * @param {?} t
         * @return {?}
         */function (t) {
            /** @type {?} */
            var sign = t < 0 ? -1 : 1;
            // See triangular numbers: T_n = n * (n + 1) / 2.
            switch ((Math.sqrt(1 + 4 * sign * t) - sign) & 3) {
                case 0:
                    x += dx;
                    break;
                case 1:
                    y += dy;
                    break;
                case 2:
                    x -= dx;
                    break;
                default:
                    y -= dy;
                    break;
            }
            return [x, y];
        });
    }
    // TODO reuse arrays?
    /**
     * @param {?} n
     * @return {?}
     */
    function zeroArray(n) {
        /** @type {?} */
        var a = [];
        /** @type {?} */
        var i = -1;
        while (++i < n)
            a[i] = 0;
        return a;
    }
    /**
     * @return {?}
     */
    function cloudCanvas() {
        return document.createElement('canvas');
    }
    /**
     * @param {?} d
     * @return {?}
     */
    function functor(d) {
        return typeof d === 'function'
            ? d
            : ( /**
             * @return {?}
             */function () {
                return d;
            });
    }
    /** @type {?} */
    var spirals = {
        archimedean: archimedeanSpiral,
        rectangular: rectangularSpiral,
    };
    /**
     * @return {?}
     */
    function tagCloud () {
        /** @type {?} */
        var size = [256, 256];
        /** @type {?} */
        var text = cloudText;
        /** @type {?} */
        var font = cloudFont;
        /** @type {?} */
        var fontSize = cloudFontSize;
        /** @type {?} */
        var fontStyle = cloudFontNormal;
        /** @type {?} */
        var fontWeight = cloudFontNormal;
        /** @type {?} */
        var rotate = cloudRotate;
        /** @type {?} */
        var padding = cloudPadding;
        /** @type {?} */
        var spiral = rectangularSpiral;
        /** @type {?} */
        var words = [];
        /** @type {?} */
        var timeInterval = Infinity;
        /** @type {?} */
        var random = Math.random;
        /** @type {?} */
        var canvas = cloudCanvas;
        /** @type {?} */
        var cloud = {};
        cloud.canvas = ( /**
         * @param {?} _
         * @return {?}
         */function (_) {
            return arguments.length ? ((canvas = functor(_)), cloud) : canvas;
        });
        cloud.start = ( /**
         * @return {?}
         */function () {
            var _a = __read(size, 2), width = _a[0], height = _a[1];
            /** @type {?} */
            var contextAndRatio = getContext(canvas());
            /** @type {?} */
            var board = cloud.board ? cloud.board : zeroArray((size[0] >> 5) * size[1]);
            /** @type {?} */
            var n = words.length;
            /** @type {?} */
            var tags = [];
            /** @type {?} */
            var data = words
                .map(( /**
         * @param {?} d
         * @param {?} _i
         * @return {?}
         */function (d, _i) {
                d.text = text(d);
                d.font = font();
                d.style = fontStyle();
                d.weight = fontWeight();
                d.rotate = rotate();
                d.size = ~~fontSize(d);
                d.padding = 1;
                // d.text = text.call(this as any, d, i);
                // d.font = font.call(this, d, i);
                // d.style = fontStyle.call(this, d, i);
                // d.weight = fontWeight.call(this, d, i);
                // d.rotate = rotate.call(this, d, i);
                // d.size = ~~fontSize.call(this, d, i);
                // d.padding = padding.call(this, d, i);
                return d;
            }))
                .sort(( /**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */function (a, b) {
                return b.size - a.size;
            }));
            /** @type {?} */
            var i = -1;
            /** @type {?} */
            var bounds = !cloud.board
                ? null
                : [
                    {
                        x: 0,
                        y: 0,
                    },
                    {
                        x: width,
                        y: height,
                    },
                ];
            step();
            /**
             * @return {?}
             */
            function step() {
                /** @type {?} */
                var start = Date.now();
                while (Date.now() - start < timeInterval && ++i < n) {
                    /** @type {?} */
                    var d = data[i];
                    d.x = (width * (random() + 0.5)) >> 1;
                    d.y = (height * (random() + 0.5)) >> 1;
                    cloudSprite(contextAndRatio, d, data, i);
                    if (d.hasText && place(board, d, bounds)) {
                        tags.push(d);
                        if (bounds) {
                            if (!cloud.hasImage) {
                                // update bounds if image mask not set
                                cloudBounds(bounds, d);
                            }
                        }
                        else {
                            bounds = [
                                { x: d.x + d.x0, y: d.y + d.y0 },
                                { x: d.x + d.x1, y: d.y + d.y1 },
                            ];
                        }
                        // Temporary hack
                        d.x -= size[0] >> 1;
                        d.y -= size[1] >> 1;
                    }
                }
                cloud._tags = tags;
                cloud._bounds = bounds;
            }
            return cloud;
        });
        /**
         * @param {?} canvas
         * @return {?}
         */
        function getContext(canvas) {
            canvas.width = canvas.height = 1;
            /** @type {?} */
            var ratio = Math.sqrt(( /** @type {?} */(canvas.getContext('2d'))).getImageData(0, 0, 1, 1).data.length >> 2);
            canvas.width = (cw << 5) / ratio;
            canvas.height = ch / ratio;
            /** @type {?} */
            var context = ( /** @type {?} */(canvas.getContext('2d')));
            context.fillStyle = context.strokeStyle = 'red';
            context.textAlign = 'center';
            return { context: context, ratio: ratio };
        }
        /**
         * @param {?} board
         * @param {?} tag
         * @param {?} bounds
         * @return {?}
         */
        function place(board, tag, bounds) {
            // const perimeter = [{ x: 0, y: 0 }, { x: size[0], y: size[1] }],
            /** @type {?} */
            var startX = tag.x;
            /** @type {?} */
            var startY = tag.y;
            /** @type {?} */
            var maxDelta = Math.sqrt(size[0] * size[0] + size[1] * size[1]);
            /** @type {?} */
            var s = spiral(size);
            /** @type {?} */
            var dt = random() < 0.5 ? 1 : -1;
            /** @type {?} */
            var dxdy;
            /** @type {?} */
            var t = -dt;
            /** @type {?} */
            var dx;
            /** @type {?} */
            var dy;
            while ((dxdy = s((t += dt)))) {
                dx = ~~dxdy[0];
                dy = ~~dxdy[1];
                if (Math.min(Math.abs(dx), Math.abs(dy)) >= maxDelta)
                    break;
                tag.x = startX + dx;
                tag.y = startY + dy;
                if (tag.x + tag.x0 < 0 || tag.y + tag.y0 < 0 || tag.x + tag.x1 > size[0] || tag.y + tag.y1 > size[1])
                    continue;
                // TODO only check for collisions within current bounds.
                if (!bounds || !cloudCollide(tag, board, size[0])) {
                    if (!bounds || collideRects(tag, bounds)) {
                        /** @type {?} */
                        var sprite = tag.sprite;
                        /** @type {?} */
                        var w = tag.width >> 5;
                        /** @type {?} */
                        var sw = size[0] >> 5;
                        /** @type {?} */
                        var lx = tag.x - (w << 4);
                        /** @type {?} */
                        var sx = lx & 0x7f;
                        /** @type {?} */
                        var msx = 32 - sx;
                        /** @type {?} */
                        var h = tag.y1 - tag.y0;
                        /** @type {?} */
                        var last = void 0;
                        /** @type {?} */
                        var x = (tag.y + tag.y0) * sw + (lx >> 5);
                        for (var j = 0; j < h; j++) {
                            last = 0;
                            for (var i = 0; i <= w; i++) {
                                board[x + i] |= (last << msx) | (i < w ? (last = sprite[j * w + i]) >>> sx : 0);
                            }
                            x += sw;
                        }
                        delete tag.sprite;
                        return true;
                    }
                }
            }
            return false;
        }
        cloud.timeInterval = ( /**
         * @param {?} _
         * @return {?}
         */function (_) {
            return arguments.length ? ((timeInterval = _ == null ? Infinity : _), cloud) : timeInterval;
        });
        cloud.words = ( /**
         * @param {?} _
         * @return {?}
         */function (_) {
            return arguments.length ? ((words = _), cloud) : words;
        });
        cloud.size = ( /**
         * @param {?} _
         * @return {?}
         */function (_) {
            return arguments.length ? ((size = [+_[0], +_[1]]), cloud) : size;
        });
        cloud.font = ( /**
         * @param {?} _
         * @return {?}
         */function (_) {
            return arguments.length ? ((font = functor(_)), cloud) : font;
        });
        cloud.fontStyle = ( /**
         * @param {?} _
         * @return {?}
         */function (_) {
            return arguments.length ? ((fontStyle = functor(_)), cloud) : fontStyle;
        });
        cloud.fontWeight = ( /**
         * @param {?} _
         * @return {?}
         */function (_) {
            return arguments.length ? ((fontWeight = functor(_)), cloud) : fontWeight;
        });
        cloud.rotate = ( /**
         * @param {?} _
         * @return {?}
         */function (_) {
            return arguments.length ? ((rotate = functor(_)), cloud) : rotate;
        });
        cloud.text = ( /**
         * @param {?} _
         * @return {?}
         */function (_) {
            return arguments.length ? ((text = functor(_)), cloud) : text;
        });
        cloud.spiral = ( /**
         * @param {?} _
         * @return {?}
         */function (_) {
            return arguments.length ? ((spiral = (( /** @type {?} */(spirals)))[_] || _), cloud) : spiral;
        });
        cloud.fontSize = ( /**
         * @param {?} _
         * @return {?}
         */function (_) {
            return arguments.length ? ((fontSize = functor(_)), cloud) : fontSize;
        });
        cloud.padding = ( /**
         * @param {?} _
         * @return {?}
         */function (_) {
            return arguments.length ? ((padding = functor(_)), cloud) : padding;
        });
        cloud.random = ( /**
         * @param {?} _
         * @return {?}
         */function (_) {
            return arguments.length ? ((random = _), cloud) : random;
        });
        return cloud;
    }

    /**
     * @record
     */
    function G2TagCloudData() { }
    if (false) {
        /** @type {?|undefined} */
        G2TagCloudData.prototype.value;
        /** @type {?|undefined} */
        G2TagCloudData.prototype.name;
        /* Skipping unhandled member: [key: string]: any;*/
    }
    /**
     * @record
     */
    function G2TagCloudClickItem() { }
    if (false) {
        /** @type {?} */
        G2TagCloudClickItem.prototype.item;
        /** @type {?} */
        G2TagCloudClickItem.prototype.ev;
    }
    var G2TagCloudComponent = /** @class */ (function () {
        // #endregion
        /**
         * @param {?} el
         * @param {?} ngZone
         * @param {?} configSrv
         * @param {?} platform
         */
        function G2TagCloudComponent(el, ngZone, configSrv, platform) {
            this.el = el;
            this.ngZone = ngZone;
            this.platform = platform;
            this._h = 0;
            this._w = 0;
            // #region fields
            this.delay = 100;
            this.width = 0;
            this.height = 200;
            this.padding = 0;
            this.data = [];
            this.spiral = 'rectangular';
            this.clickItem = new core.EventEmitter();
            configSrv.attachKey(this, 'chart', 'theme');
        }
        Object.defineProperty(G2TagCloudComponent.prototype, "chart", {
            /**
             * @return {?}
             */
            get: function () {
                return this._chart;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @private
         * @return {?}
         */
        G2TagCloudComponent.prototype.fixWH = function () {
            var _b = this, height = _b.height, width = _b.width, el = _b.el;
            this._h = height <= 0 ? el.nativeElement.clientHeight : height;
            this._w = width <= 0 ? el.nativeElement.clientWidth : width;
        };
        /**
         * @private
         * @return {?}
         */
        G2TagCloudComponent.prototype.initTagCloud = function () {
            g2.registerShape('point', 'cloud', {
                // tslint:disable-next-line: typedef
                /**
                 * @param {?} cfg
                 * @param {?} container
                 * @return {?}
                 */
                draw: function (cfg, container) {
                    /** @type {?} */
                    var data = ( /** @type {?} */(cfg.data));
                    /** @type {?} */
                    var textShape = container.addShape({
                        type: 'text',
                        name: 'tag-cloud-text',
                        attrs: ( /** @type {?} */(Object.assign(Object.assign({}, cfg.style), { fontSize: data.size, text: data.text, textAlign: 'center', fontFamily: data.font, fill: cfg.color, textBaseline: 'Alphabetic', x: cfg.x, y: cfg.y }))),
                    });
                    if (data.rotate) {
                        g2.Util.rotate(textShape, (data.rotate * Math.PI) / 180);
                    }
                    return textShape;
                },
            });
        };
        /**
         * @private
         * @return {?}
         */
        G2TagCloudComponent.prototype.install = function () {
            var _this = this;
            var _b = this, el = _b.el, padding = _b.padding, theme = _b.theme;
            this.fixWH();
            /** @type {?} */
            var chart = (this._chart = new g2.Chart({
                container: el.nativeElement,
                autoFit: false,
                height: this._h,
                width: this._w,
                padding: padding,
                theme: theme,
            }));
            chart.scale({
                x: { nice: false },
                y: { nice: false },
            });
            chart.legend(false);
            chart.axis(false);
            chart.tooltip({
                showTitle: false,
                showMarkers: false,
            });
            (( /** @type {?} */(chart.coordinate()))).reflect();
            chart
                .point()
                .position('x*y')
                .color('text')
                .shape('cloud')
                .state({
                active: {
                    style: {
                        fillOpacity: 0.4,
                    },
                },
            });
            chart.interaction('element-active');
            chart.on('tag-cloud-text:click', ( /**
             * @param {?} ev
             * @return {?}
             */function (ev) {
                _this.ngZone.run(( /**
                 * @return {?}
                 */function () { var _a; return _this.clickItem.emit({ item: (_a = ev.data) === null || _a === void 0 ? void 0 : _a.data, ev: ev }); }));
            }));
            this.attachChart();
        };
        /**
         * @private
         * @return {?}
         */
        G2TagCloudComponent.prototype.transform = function () {
            /** @type {?} */
            var statisticData = this.data.map(( /**
             * @param {?} i
             * @return {?}
             */function (/**
             * @param {?} i
             * @return {?}
             */ i) { return ( /** @type {?} */(i.value)); }));
            /** @type {?} */
            var min = Math.min.apply(Math, __spread(statisticData));
            /** @type {?} */
            var max = Math.max.apply(Math, __spread(statisticData));
            /** @type {?} */
            var options = {
                fields: ['name', 'value'],
                // imageMask,
                font: 'Verdana',
                padding: 1,
                size: [this._w, this._h],
                // 宽高设置最好根据 imageMask 做调整
                spiral: this.spiral,
                timeInterval: 5000,
                // max execute time
                rotate: ( /**
                 * @return {?}
                 */function () {
                    /** @type {?} */
                    var random = ~~(Math.random() * 4) % 4;
                    if (random === 2) {
                        random = 0;
                    }
                    return random * 90; // 0, 90, 270
                }),
                fontSize: ( /**
                 * @param {?} d
                 * @return {?}
                 */function (d) {
                    return ((( /** @type {?} */(d.value)) - min) / (max - min)) * (32 - 8) + 8;
                }),
            };
            /** @type {?} */
            var layout = tagCloud();
            ['font', 'fontSize', 'fontWeight', 'padding', 'rotate', 'size', 'spiral', 'timeInterval'].forEach(( /**
             * @param {?} key
             * @return {?}
             */function (/**
             * @param {?} key
             * @return {?}
             */ key) {
                // @ts-ignore
                if (options[key]) {
                    // @ts-ignore
                    layout[key](options[key]);
                }
            }));
            /** @type {?} */
            var words = this.data.map(( /**
             * @param {?} i
             * @return {?}
             */function (/**
             * @param {?} i
             * @return {?}
             */ i) { return (Object.assign(Object.assign({}, i), { text: i.name })); }));
            layout.words(words);
            /** @type {?} */
            var result = layout.start();
            /** @type {?} */
            var tags = result._tags;
            /** @type {?} */
            var bounds = result._bounds || [
                { x: 0, y: 0 },
                { x: options.size[0], y: options.size[1] },
            ];
            tags.forEach(( /**
             * @param {?} tag
             * @return {?}
             */function (/**
             * @param {?} tag
             * @return {?}
             */ tag) {
                tag.x += options.size[0] / 2;
                tag.y += options.size[1] / 2;
            }));
            var _b = __read(options.size, 2), w = _b[0], h = _b[1];
            /** @type {?} */
            var hasImage = result.hasImage;
            tags.push({
                text: '',
                value: 0,
                x: hasImage ? 0 : bounds[0].x,
                y: hasImage ? 0 : bounds[0].y,
                opacity: 0,
            });
            tags.push({
                text: '',
                value: 0,
                x: hasImage ? w : bounds[1].x,
                y: hasImage ? h : bounds[1].y,
                opacity: 0,
            });
            return tags;
        };
        /**
         * @private
         * @return {?}
         */
        G2TagCloudComponent.prototype.attachChart = function () {
            var _b = this, _chart = _b._chart, padding = _b.padding, data = _b.data;
            if (!_chart || !data || data.length <= 0)
                return;
            this.fixWH();
            _chart.changeSize(this._w, this._h);
            _chart.padding = padding;
            /** @type {?} */
            var rows = this.transform();
            _chart.data(rows);
            _chart.render();
        };
        /**
         * @private
         * @return {?}
         */
        G2TagCloudComponent.prototype._attachChart = function () {
            var _this = this;
            this.ngZone.runOutsideAngular(( /**
             * @return {?}
             */function () { return _this.attachChart(); }));
        };
        /**
         * @private
         * @return {?}
         */
        G2TagCloudComponent.prototype.installResizeEvent = function () {
            var _this = this;
            this.resize$ = rxjs.fromEvent(window, 'resize')
                .pipe(operators.filter(( /**
         * @return {?}
         */function () { return !!_this._chart; })), operators.debounceTime(200))
                .subscribe(( /**
         * @return {?}
         */function () { return _this._attachChart(); }));
        };
        /**
         * @return {?}
         */
        G2TagCloudComponent.prototype.ngOnInit = function () {
            var _this = this;
            if (!this.platform.isBrowser) {
                return;
            }
            this.initTagCloud();
            this.installResizeEvent();
            this.ngZone.runOutsideAngular(( /**
             * @return {?}
             */function () { return setTimeout(( /**
             * @return {?}
             */function () { return _this.install(); }), _this.delay); }));
        };
        /**
         * @return {?}
         */
        G2TagCloudComponent.prototype.ngOnChanges = function () {
            this._attachChart();
        };
        /**
         * @return {?}
         */
        G2TagCloudComponent.prototype.ngOnDestroy = function () {
            var _this = this;
            if (this.resize$) {
                this.resize$.unsubscribe();
            }
            if (this._chart) {
                this.ngZone.runOutsideAngular(( /**
                 * @return {?}
                 */function () { return _this._chart.destroy(); }));
            }
        };
        return G2TagCloudComponent;
    }());
    G2TagCloudComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'g2-tag-cloud',
                    exportAs: 'g2TagCloud',
                    template: "",
                    preserveWhitespaces: false,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    G2TagCloudComponent.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.NgZone },
        { type: util.AlainConfigService },
        { type: platform.Platform }
    ]; };
    G2TagCloudComponent.propDecorators = {
        delay: [{ type: core.Input }],
        width: [{ type: core.Input }],
        height: [{ type: core.Input }],
        padding: [{ type: core.Input }],
        data: [{ type: core.Input }],
        spiral: [{ type: core.Input }],
        theme: [{ type: core.Input }],
        clickItem: [{ type: core.Output }]
    };
    __decorate([
        util.InputNumber(),
        __metadata("design:type", Object)
    ], G2TagCloudComponent.prototype, "delay", void 0);
    __decorate([
        util.InputNumber(),
        __metadata("design:type", Object)
    ], G2TagCloudComponent.prototype, "width", void 0);
    __decorate([
        util.InputNumber(),
        __metadata("design:type", Object)
    ], G2TagCloudComponent.prototype, "height", void 0);
    if (false) {
        /** @type {?} */
        G2TagCloudComponent.ngAcceptInputType_delay;
        /** @type {?} */
        G2TagCloudComponent.ngAcceptInputType_height;
        /** @type {?} */
        G2TagCloudComponent.ngAcceptInputType_width;
        /**
         * @type {?}
         * @private
         */
        G2TagCloudComponent.prototype.resize$;
        /**
         * @type {?}
         * @private
         */
        G2TagCloudComponent.prototype._chart;
        /**
         * @type {?}
         * @private
         */
        G2TagCloudComponent.prototype._h;
        /**
         * @type {?}
         * @private
         */
        G2TagCloudComponent.prototype._w;
        /** @type {?} */
        G2TagCloudComponent.prototype.delay;
        /** @type {?} */
        G2TagCloudComponent.prototype.width;
        /** @type {?} */
        G2TagCloudComponent.prototype.height;
        /** @type {?} */
        G2TagCloudComponent.prototype.padding;
        /** @type {?} */
        G2TagCloudComponent.prototype.data;
        /** @type {?} */
        G2TagCloudComponent.prototype.spiral;
        /** @type {?} */
        G2TagCloudComponent.prototype.theme;
        /** @type {?} */
        G2TagCloudComponent.prototype.clickItem;
        /**
         * @type {?}
         * @private
         */
        G2TagCloudComponent.prototype.el;
        /**
         * @type {?}
         * @private
         */
        G2TagCloudComponent.prototype.ngZone;
        /**
         * @type {?}
         * @private
         */
        G2TagCloudComponent.prototype.platform;
    }

    /** @type {?} */
    var COMPONENTS = [G2TagCloudComponent];
    var G2TagCloudModule = /** @class */ (function () {
        function G2TagCloudModule() {
        }
        return G2TagCloudModule;
    }());
    G2TagCloudModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule, util.DelonUtilModule],
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
     * Generated from: tag-cloud.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.G2TagCloudComponent = G2TagCloudComponent;
    exports.G2TagCloudModule = G2TagCloudModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=tag-cloud.umd.js.map
