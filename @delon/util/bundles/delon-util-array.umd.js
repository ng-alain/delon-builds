/**
 * @license ng-alain(cipchk@qq.com) v12.4.0
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@delon/util/config'), require('ng-zorro-antd/core/tree')) :
    typeof define === 'function' && define.amd ? define('@delon/util/array', ['exports', '@angular/core', '@delon/util/config', 'ng-zorro-antd/core/tree'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.util = global.delon.util || {}, global.delon.util.array = {}), global.ng.core, global.delon.util.config, global.tree));
})(this, (function (exports, i0, i1, tree) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);

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
    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || Array.prototype.slice.call(from));
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
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    var ArrayService = /** @class */ (function () {
        function ArrayService(cog) {
            this.c = cog.merge('utilArray', {
                deepMapName: 'deep',
                parentMapName: 'parent',
                idMapName: 'id',
                parentIdMapName: 'parent_id',
                childrenMapName: 'children',
                titleMapName: 'title',
                checkedMapname: 'checked',
                selectedMapname: 'selected',
                expandedMapname: 'expanded',
                disabledMapname: 'disabled'
            });
        }
        /**
         * Convert tree structure to array structure
         *
         * 将树结构转换成数组结构
         */
        ArrayService.prototype.treeToArr = function (tree, options) {
            var opt = Object.assign({ deepMapName: this.c.deepMapName, parentMapName: this.c.parentMapName, childrenMapName: this.c.childrenMapName, clearChildren: true, cb: null }, options);
            var result = [];
            var inFn = function (list, parent, deep) {
                var e_1, _a;
                if (deep === void 0) { deep = 0; }
                try {
                    for (var list_1 = __values(list), list_1_1 = list_1.next(); !list_1_1.done; list_1_1 = list_1.next()) {
                        var i = list_1_1.value;
                        i[opt.deepMapName] = deep;
                        i[opt.parentMapName] = parent;
                        if (opt.cb) {
                            opt.cb(i, parent, deep);
                        }
                        result.push(i);
                        var children = i[opt.childrenMapName];
                        if (children != null && Array.isArray(children) && children.length > 0) {
                            inFn(children, i, deep + 1);
                        }
                        if (opt.clearChildren) {
                            delete i[opt.childrenMapName];
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (list_1_1 && !list_1_1.done && (_a = list_1.return)) _a.call(list_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            };
            inFn(tree, null);
            return result;
        };
        /**
         * Convert array structure to tree structure
         *
         * 数组转换成树数据
         */
        ArrayService.prototype.arrToTree = function (arr, options) {
            var e_2, _a;
            if (!Array.isArray(arr) || arr.length === 0) {
                return [];
            }
            var opt = Object.assign({ idMapName: this.c.idMapName, parentIdMapName: this.c.parentIdMapName, childrenMapName: this.c.childrenMapName, cb: null }, options);
            var tree = [];
            var childrenOf = {};
            var rootPid = opt.rootParentIdValue;
            var arrType = arr;
            if (!rootPid) {
                var pids = arrType.map(function (i) { return i[opt.parentIdMapName]; });
                var emptyPid = pids.findIndex(function (w) { return w == null; });
                rootPid = emptyPid !== -1 ? pids[emptyPid] : pids.sort()[0];
            }
            try {
                for (var arrType_1 = __values(arrType), arrType_1_1 = arrType_1.next(); !arrType_1_1.done; arrType_1_1 = arrType_1.next()) {
                    var item = arrType_1_1.value;
                    var id = item[opt.idMapName];
                    var pid = item[opt.parentIdMapName];
                    childrenOf[id] = childrenOf[id] || [];
                    item[opt.childrenMapName] = childrenOf[id];
                    if (opt.cb) {
                        opt.cb(item);
                    }
                    if (pid !== rootPid) {
                        childrenOf[pid] = childrenOf[pid] || [];
                        childrenOf[pid].push(item);
                    }
                    else {
                        tree.push(item);
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (arrType_1_1 && !arrType_1_1.done && (_a = arrType_1.return)) _a.call(arrType_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
            return tree;
        };
        /**
         * 数组转换成 `nz-tree` 数据源，通过 `options` 转化项名，也可以使用 `options.cb` 更高级决定数据项
         */
        ArrayService.prototype.arrToTreeNode = function (arr, options) {
            var opt = Object.assign({ idMapName: this.c.idMapName, parentIdMapName: this.c.parentIdMapName, titleMapName: this.c.titleMapName, isLeafMapName: 'isLeaf', checkedMapname: this.c.checkedMapname, selectedMapname: this.c.selectedMapname, expandedMapname: this.c.expandedMapname, disabledMapname: this.c.disabledMapname, cb: null }, options);
            var tree$1 = this.arrToTree(arr, {
                idMapName: opt.idMapName,
                parentIdMapName: opt.parentIdMapName,
                childrenMapName: 'children'
            });
            this.visitTree(tree$1, function (item, parent, deep) {
                item.key = item[opt.idMapName];
                item.title = item[opt.titleMapName];
                item.checked = item[opt.checkedMapname];
                item.selected = item[opt.selectedMapname];
                item.expanded = item[opt.expandedMapname];
                item.disabled = item[opt.disabledMapname];
                if (item[opt.isLeafMapName] == null) {
                    item.isLeaf = item.children.length === 0;
                }
                else {
                    item.isLeaf = item[opt.isLeafMapName];
                }
                if (opt.cb) {
                    opt.cb(item, parent, deep);
                }
            });
            return tree$1.map(function (node) { return new tree.NzTreeNode(node); });
        };
        /**
         * 递归访问整个树
         */
        ArrayService.prototype.visitTree = function (tree, cb, options) {
            options = Object.assign({ childrenMapName: this.c.childrenMapName }, options);
            var inFn = function (data, parent, deep) {
                var e_3, _a;
                try {
                    for (var data_1 = __values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
                        var item = data_1_1.value;
                        cb(item, parent, deep);
                        var childrenVal = item[options.childrenMapName];
                        if (Array.isArray(childrenVal) && childrenVal.length > 0) {
                            inFn(childrenVal, item, deep + 1);
                        }
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (data_1_1 && !data_1_1.done && (_a = data_1.return)) _a.call(data_1);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
            };
            inFn(tree, null, 1);
        };
        /**
         * Return the value of the first tree value in the tree where predicate is true, and `undefined` otherwise
         *
         * 根据条件返回树的第一个值，否则返回 `undefined`
         */
        ArrayService.prototype.findTree = function (tree, predicate, options) {
            var res;
            this.visitTree(tree, function (item) {
                if (res === undefined && predicate(item)) {
                    res = item;
                }
            }, options);
            return res;
        };
        /**
         * 获取所有已经选中的 `key` 值
         */
        ArrayService.prototype.getKeysByTreeNode = function (tree, options) {
            var opt = Object.assign({ includeHalfChecked: true }, options);
            var keys = [];
            this.visitTree(tree, function (item, parent, deep) {
                if (item.isChecked || (opt.includeHalfChecked && item.isHalfChecked)) {
                    keys.push(opt.cb ? opt.cb(item, parent, deep) : opt.keyMapName ? item.origin[opt.keyMapName] : item.key);
                }
            });
            return keys;
        };
        ArrayService.prototype.baseFlat = function (array, depth, result) {
            if (result === void 0) { result = []; }
            var index = -1;
            while (++index < array.length) {
                var value = array[index];
                if (depth > 0 && Array.isArray(value)) {
                    if (depth > 1) {
                        this.baseFlat(value, depth - 1, result);
                    }
                    else {
                        var pushIndex = -1;
                        var offset = result.length;
                        while (++pushIndex < value.length) {
                            result[offset + pushIndex] = value[pushIndex];
                        }
                    }
                }
                else {
                    result[result.length] = value;
                }
            }
            return result;
        };
        /**
         * Recursively flattens array
         *
         * 递归扁平数组
         * ```ts
         * srv.flat([1, [2, 3, [4, 5, [6]]]]) => [1,2,3,4,5,6]
         * srv.flat([1, [2, 3, [4, 5, [6]]]], 1) => [1,2,3,[4, 5, [6]]]
         * ```
         */
        ArrayService.prototype.flat = function (array, depth) {
            if (depth === void 0) { depth = 1 / 0; }
            return Array.isArray(array) ? this.baseFlat(array, depth) : array;
        };
        /**
         * Group the array
         *
         * 对数组进行分组
         * ```ts
         * srv.groupBy([6.1, 4.2, 6.3], Math.floor) => {"4":[4.2],"6":[6.1,6.3]}
         * srv.groupBy(['one', 'two', 'three'], v => v.length) => {"3":["one","two"],"5":["three"]}
         * ```
         */
        ArrayService.prototype.groupBy = function (array, iteratee) {
            if (!Array.isArray(array)) {
                return {};
            }
            return array.reduce(function (result, value) {
                var key = iteratee(value);
                if (Object.prototype.hasOwnProperty.call(result, key)) {
                    result[key].push(value);
                }
                else {
                    result[key] = [value];
                }
                return result;
            }, {});
        };
        /**
         * Creates a duplicate-free version of an array
         *
         * 创建去重后的数组
         * ```ts
         * uniq([1, 2, 2, 3, 1]) => [1,2,3]
         * uniq([{ a: 1 }, { a: 1 }, { a: 2 }], 'a') => [{"a":1},{"a":2}]
         * uniq([{ a: 1 }, { a: 1 }, { a: 2 }], i => (i.a === 1 ? 'a' : 'b')) => [{"a":1},{"a":2}]
         * ```
         */
        ArrayService.prototype.uniq = function (array, predicate) {
            return Array.from(array
                .reduce(function (map, value) {
                var key = predicate
                    ? typeof predicate === 'string'
                        ? value[predicate]
                        : predicate(value)
                    : value;
                if (!map.has(key)) {
                    map.set(key, value);
                }
                return map;
            }, new Map())
                .values());
        };
        return ArrayService;
    }());
    ArrayService.ɵprov = i0__namespace.ɵɵdefineInjectable({ factory: function ArrayService_Factory() { return new ArrayService(i0__namespace.ɵɵinject(i1__namespace.AlainConfigService)); }, token: ArrayService, providedIn: "root" });
    ArrayService.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    ArrayService.ctorParameters = function () { return [
        { type: i1.AlainConfigService }
    ]; };

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ArrayService = ArrayService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=delon-util-array.umd.js.map
