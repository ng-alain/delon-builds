import extend from 'extend';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/start_of_week';
import endOfWeek from 'date-fns/end_of_week';
import subWeeks from 'date-fns/sub_weeks';
import startOfMonth from 'date-fns/start_of_month';
import endOfMonth from 'date-fns/end_of_month';
import subMonths from 'date-fns/sub_months';
import startOfYear from 'date-fns/start_of_year';
import endOfYear from 'date-fns/end_of_year';
import subYears from 'date-fns/sub_years';
import addDays from 'date-fns/add_days';
import { Injectable, Inject, NgModule, defineInjectable, inject } from '@angular/core';
import { DOCUMENT, CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { share, filter } from 'rxjs/operators';
import { __assign, __values } from 'tslib';
import { NzTreeNode } from 'ng-zorro-antd';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * 类似 `_.get`，根据 `path` 获取安全值
 * jsperf: https://jsperf.com/es-deep-getttps://jsperf.com/es-deep-get
 *
 * @param {?} obj 数据源，无效时直接返回 `defaultValue` 值
 * @param {?} path 若 `null`、`[]`、未定义及未找到时返回 `defaultValue` 值
 * @param {?=} defaultValue 默认值
 * @return {?}
 */
function deepGet(obj, path, defaultValue) {
    if (!obj || path == null || path.length === 0)
        return defaultValue;
    if (!Array.isArray(path)) {
        path = ~path.indexOf('.') ? path.split('.') : [path];
    }
    if (path.length === 1) {
        /** @type {?} */
        var checkObj = obj[path[0]];
        return typeof checkObj === 'undefined' ? defaultValue : checkObj;
    }
    return path.reduce(function (o, k) { return (o || {})[k]; }, obj) || defaultValue;
}
/**
 * @param {?} obj
 * @return {?}
 */
function deepCopy(obj) {
    /** @type {?} */
    var result = extend(true, {}, { _: obj });
    return result._;
}
/**
 * 复制内容至剪贴板
 * @param {?} value
 * @return {?}
 */
function copy(value) {
    return new Promise(function (resolve, reject) {
        /** @type {?} */
        var copyTextArea = (/** @type {?} */ (null));
        try {
            copyTextArea = document.createElement('textarea');
            copyTextArea.style.height = '0px';
            copyTextArea.style.opacity = '0';
            copyTextArea.style.width = '0px';
            document.body.appendChild(copyTextArea);
            copyTextArea.value = value;
            copyTextArea.select();
            document.execCommand('copy');
            resolve(value);
        }
        finally {
            if (copyTextArea && copyTextArea.parentNode) {
                copyTextArea.parentNode.removeChild(copyTextArea);
            }
        }
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * 字符串格式化
 * ```
 * format('this is ${name}', { name: 'asdf' })
 * // output: this is asdf
 * format('this is ${user.name}', { user: { name: 'asdf' } }, true)
 * // output: this is asdf
 * ```
 * @param {?} str
 * @param {?} obj
 * @param {?=} needDeepGet
 * @return {?}
 */
function format(str, obj, needDeepGet) {
    if (needDeepGet === void 0) { needDeepGet = false; }
    return (str || '').replace(/\${([^}]+)}/g, function (work, key) {
        return needDeepGet
            ? deepGet(obj, key.split('.'), '')
            : (obj || {})[key] || '';
    });
}
/**
 * 转化成RMB元字符串
 * @param {?} value
 * @param {?=} digits 当数字类型时，允许指定小数点后数字的个数，默认2位小数
 * @return {?}
 */
function yuan(value, digits) {
    if (digits === void 0) { digits = 2; }
    if (typeof value === 'number')
        value = value.toFixed(digits);
    return "&yen " + value;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * 获取时间范围
 * @param {?} type 类型，带 `-` 表示过去一个时间，若指定 `number` 表示天数
 * @param {?=} time 开始时间
 * @return {?}
 */
function getTimeDistance(type, time) {
    time = parse(time || new Date());
    switch (type) {
        case 'today':
            return [time, time];
        case '-today':
            return [addDays(time, -1), time];
        case 'week':
            return [startOfWeek(time), endOfWeek(time)];
        case '-week':
            return [startOfWeek(subWeeks(time, 1)), endOfWeek(subWeeks(time, 1))];
        case 'month':
            return [startOfMonth(time), endOfMonth(time)];
        case '-month':
            return [startOfMonth(subMonths(time, 1)), endOfMonth(subMonths(time, 1))];
        case 'year':
            return [startOfYear(time), endOfYear(time)];
        case '-year':
            return [startOfYear(subYears(time, 1)), endOfYear(subYears(time, 1))];
        default:
            return type > 0
                ? [time, addDays(time, type)]
                : [addDays(time, type), time];
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var LazyService = /** @class */ (function () {
    function LazyService(doc) {
        this.doc = doc;
        this.list = {};
        this.cached = {};
        this._notify = new BehaviorSubject([]);
    }
    Object.defineProperty(LazyService.prototype, "change", {
        get: /**
         * @return {?}
         */
        function () {
            return this._notify.asObservable().pipe(share(), filter(function (ls) { return ls.length !== 0; }));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LazyService.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.list = {};
        this.cached = {};
    };
    /**
     * @param {?} paths
     * @return {?}
     */
    LazyService.prototype.load = /**
     * @param {?} paths
     * @return {?}
     */
    function (paths) {
        var _this = this;
        if (!Array.isArray(paths))
            paths = [paths];
        /** @type {?} */
        var promises = [];
        paths.forEach(function (path) {
            if (path.endsWith('.js')) {
                promises.push(_this.loadScript(path));
            }
            else {
                promises.push(_this.loadStyle(path));
            }
        });
        return Promise.all(promises).then(function (res) {
            _this._notify.next(res);
            return Promise.resolve(res);
        });
    };
    /**
     * @param {?} path
     * @param {?=} innerContent
     * @return {?}
     */
    LazyService.prototype.loadScript = /**
     * @param {?} path
     * @param {?=} innerContent
     * @return {?}
     */
    function (path, innerContent) {
        var _this = this;
        return new Promise(function (resolve) {
            if (_this.list[path] === true) {
                resolve(_this.cached[path]);
                return;
            }
            _this.list[path] = true;
            /** @type {?} */
            var onSuccess = function (item) {
                _this.cached[path] = item;
                resolve(item);
            };
            /** @type {?} */
            var node = (/** @type {?} */ (_this.doc.createElement('script')));
            node.type = 'text/javascript';
            node.src = path;
            node.charset = 'utf-8';
            if (innerContent) {
                node.innerHTML = innerContent;
            }
            if (((/** @type {?} */ (node))).readyState) {
                // IE
                ((/** @type {?} */ (node))).onreadystatechange = function () {
                    if (((/** @type {?} */ (node))).readyState === 'loaded' ||
                        ((/** @type {?} */ (node))).readyState === 'complete') {
                        ((/** @type {?} */ (node))).onreadystatechange = null;
                        onSuccess({
                            path: path,
                            loaded: true,
                            status: 'ok',
                        });
                    }
                };
            }
            else {
                node.onload = function () {
                    onSuccess({
                        path: path,
                        loaded: true,
                        status: 'ok',
                    });
                };
            }
            node.onerror = function (error) {
                return onSuccess({
                    path: path,
                    loaded: false,
                    status: 'error',
                });
            };
            _this.doc.getElementsByTagName('head')[0].appendChild(node);
        });
    };
    /**
     * @param {?} path
     * @param {?=} rel
     * @param {?=} innerContent
     * @return {?}
     */
    LazyService.prototype.loadStyle = /**
     * @param {?} path
     * @param {?=} rel
     * @param {?=} innerContent
     * @return {?}
     */
    function (path, rel, innerContent) {
        var _this = this;
        if (rel === void 0) { rel = 'stylesheet'; }
        return new Promise(function (resolve) {
            if (_this.list[path] === true) {
                resolve(_this.cached[path]);
                return;
            }
            _this.list[path] = true;
            /** @type {?} */
            var node = (/** @type {?} */ (_this.doc.createElement('link')));
            node.rel = rel;
            node.type = 'text/css';
            node.href = path;
            if (innerContent) {
                node.innerHTML = innerContent;
            }
            _this.doc.getElementsByTagName('head')[0].appendChild(node);
            /** @type {?} */
            var item = {
                path: path,
                loaded: true,
                status: 'ok',
            };
            _this.cached[path] = item;
            resolve(item);
        });
    };
    LazyService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    LazyService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    /** @nocollapse */ LazyService.ngInjectableDef = defineInjectable({ factory: function LazyService_Factory() { return new LazyService(inject(DOCUMENT)); }, token: LazyService, providedIn: "root" });
    return LazyService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * 是否为数字
 * @param {?} value
 * @return {?}
 */
function isNum(value) {
    return /^((-?\d+\.\d+)|(-?\d+)|(-?\.\d+))$/.test(value.toString());
}
/**
 * 是否为整数
 * @param {?} value
 * @return {?}
 */
function isInt(value) {
    // tslint:disable-next-line:triple-equals
    return isNum(value) && parseInt(value.toString(), 10) == value;
}
/**
 * 是否为小数
 * @param {?} value
 * @return {?}
 */
function isDecimal(value) {
    return isNum(value) && !isInt(value);
}
/**
 * 是否为身份证
 * @param {?} value
 * @return {?}
 */
function isIdCard(value) {
    return (typeof value === 'string' && /(^\d{15}$)|(^\d{17}([0-9]|X)$)/i.test(value));
}
/**
 * 是否为手机号
 * @param {?} value
 * @return {?}
 */
function isMobile(value) {
    return (typeof value === 'string' &&
        /^(0|\+?86|17951)?(13[0-9]|15[0-9]|17[0678]|18[0-9]|14[57])[0-9]{8}$/.test(value));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * 一套日常验证器
 */
// tslint:disable-next-line:class-name
var  /**
 * 一套日常验证器
 */
// tslint:disable-next-line:class-name
_Validators = /** @class */ (function () {
    function _Validators() {
    }
    /** 是否为数字 */
    /**
     * 是否为数字
     * @param {?} control
     * @return {?}
     */
    _Validators.num = /**
     * 是否为数字
     * @param {?} control
     * @return {?}
     */
    function (control) {
        return isNum(control.value) ? null : { num: true };
    };
    /** 是否为整数 */
    /**
     * 是否为整数
     * @param {?} control
     * @return {?}
     */
    _Validators.int = /**
     * 是否为整数
     * @param {?} control
     * @return {?}
     */
    function (control) {
        return isInt(control.value) ? null : { int: true };
    };
    /** 是否为小数 */
    /**
     * 是否为小数
     * @param {?} control
     * @return {?}
     */
    _Validators.decimal = /**
     * 是否为小数
     * @param {?} control
     * @return {?}
     */
    function (control) {
        return isDecimal(control.value) ? null : { decimal: true };
    };
    /** 是否为身份证 */
    /**
     * 是否为身份证
     * @param {?} control
     * @return {?}
     */
    _Validators.idCard = /**
     * 是否为身份证
     * @param {?} control
     * @return {?}
     */
    function (control) {
        return isIdCard(control.value) ? null : { idCard: true };
    };
    /** 是否为手机号 */
    /**
     * 是否为手机号
     * @param {?} control
     * @return {?}
     */
    _Validators.mobile = /**
     * 是否为手机号
     * @param {?} control
     * @return {?}
     */
    function (control) {
        return isMobile(control.value) ? null : { mobile: true };
    };
    return _Validators;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * @param {?} element
 * @return {?}
 */
function isEmpty(element) {
    /** @type {?} */
    var nodes = element.childNodes;
    for (var i = 0; i < nodes.length; i++) {
        /** @type {?} */
        var node = nodes.item(i);
        if (node.nodeType === 1 &&
            ((/** @type {?} */ (node))).outerHTML.toString().trim().length !== 0) {
            return false;
        }
        else if (node.nodeType === 3 &&
            node.textContent.toString().trim().length !== 0) {
            return false;
        }
    }
    return true;
}
/**
 * @param {?} value
 * @param {?=} allowUndefined
 * @return {?}
 */
function toBoolean(value, allowUndefined) {
    if (allowUndefined === void 0) { allowUndefined = false; }
    return allowUndefined && typeof value === 'undefined'
        ? undefined
        : value != null && "" + value !== 'false';
}
/**
 * Input decorator that handle a prop to do get/set automatically with toBoolean
 * \@example
 * ```typescript
 * \@Input() \@InputBoolean() visible: boolean = false; / \@InputBoolean(null) visible: boolean = false;
 * ```
 * @param {?=} allowUndefined
 * @return {?}
 */
function InputBoolean(allowUndefined) {
    if (allowUndefined === void 0) { allowUndefined = false; }
    return function InputBooleanPropDecorator(target, name) {
        // Add our own private prop
        /** @type {?} */
        var privatePropName = "$$__" + name;
        if (Object.prototype.hasOwnProperty.call(target, privatePropName)) {
            console.warn("The prop \"" + privatePropName + "\" is already exist, it will be overrided by InputBoolean decorator.");
        }
        Object.defineProperty(target, privatePropName, {
            configurable: true,
            writable: true
        });
        Object.defineProperty(target, name, {
            get: /**
             * @return {?}
             */
            function () {
                return this[privatePropName]; // tslint:disable-line:no-invalid-this
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this[privatePropName] = toBoolean(value, allowUndefined); // tslint:disable-line:no-invalid-this
            }
        });
    };
}
/**
 * @param {?} value
 * @param {?=} fallbackValue
 * @return {?}
 */
function toNumber(value, fallbackValue) {
    if (fallbackValue === void 0) { fallbackValue = 0; }
    return !isNaN(parseFloat((/** @type {?} */ (value)))) && !isNaN(Number(value))
        ? Number(value)
        : fallbackValue;
}
/**
 * Input decorator that handle a prop to do get/set automatically with toNumber
 * \@example
 * ```typescript
 * \@Input() \@InputNumber() visible: number = 1; / \@InputNumber(null) visible: number = 2;
 * ```
 * @param {?=} fallback
 * @return {?}
 */
function InputNumber(fallback) {
    if (fallback === void 0) { fallback = 0; }
    return function InputBooleanPropDecorator(target, name) {
        // Add our own private prop
        /** @type {?} */
        var privatePropName = "$$__" + name;
        if (Object.prototype.hasOwnProperty.call(target, privatePropName)) {
            console.warn("The prop \"" + privatePropName + "\" is already exist, it will be overrided by InputNumber decorator.");
        }
        Object.defineProperty(target, privatePropName, {
            configurable: true,
            writable: true
        });
        Object.defineProperty(target, name, {
            get: /**
             * @return {?}
             */
            function () {
                return this[privatePropName]; // tslint:disable-line:no-invalid-this
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this[privatePropName] = toNumber(value, fallback); // tslint:disable-line:no-invalid-this
            }
        });
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * @param {?} el
 * @param {?} classMap
 * @param {?} renderer
 * @return {?}
 */
function removeClass(el, classMap, renderer) {
    // tslint:disable-next-line:forin
    for (var i in classMap) {
        renderer.removeClass(el, i);
    }
}
/**
 * @param {?} el
 * @param {?} classMap
 * @param {?} renderer
 * @return {?}
 */
function addClass(el, classMap, renderer) {
    for (var i in classMap) {
        if (classMap[i]) {
            renderer.addClass(el, i);
        }
    }
}
/**
 * 更新宿主组件样式 `class`，例如：
 *
 * ```ts
 * updateHostClass(
 *  this.el.nativeElement,
 *  {
 *    [ 'classname' ]: true,
 *    [ 'classname' ]: this.type === '1',
 *    [ this.cls ]: true,
 *    [ `a-${this.cls}` ]: true
 *  },
 *  this.renderer)
 * ```
 *
 * @param {?} el
 * @param {?} renderer
 * @param {?} classMap
 * @param {?=} cleanAll
 * @return {?}
 */
function updateHostClass(el, renderer, classMap, cleanAll) {
    if (cleanAll === void 0) { cleanAll = false; }
    if (cleanAll === true) {
        renderer.removeAttribute(el, 'class');
    }
    else {
        removeClass(el, classMap, renderer);
    }
    classMap = __assign({}, classMap);
    addClass(el, classMap, renderer);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var DelonUtilConfig = /** @class */ (function () {
    function DelonUtilConfig() {
    }
    DelonUtilConfig.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ DelonUtilConfig.ngInjectableDef = defineInjectable({ factory: function DelonUtilConfig_Factory() { return new DelonUtilConfig(); }, token: DelonUtilConfig, providedIn: "root" });
    return DelonUtilConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var ArrayService = /** @class */ (function () {
    function ArrayService(cog) {
        this.c = Object.assign((/** @type {?} */ ({
            deepMapName: 'deep',
            parentMapName: 'parent',
            idMapName: 'id',
            parentIdMapName: 'parent_id',
            childrenMapName: 'children',
            titleMapName: 'title',
            checkedMapname: 'checked',
            selectedMapname: 'selected',
            expandedMapname: 'expanded',
            disabledMapname: 'disabled',
        })), cog && cog.array);
    }
    /**
     * 将树结构转换成数组结构
     */
    /**
     * 将树结构转换成数组结构
     * @param {?} tree
     * @param {?=} options
     * @return {?}
     */
    ArrayService.prototype.treeToArr = /**
     * 将树结构转换成数组结构
     * @param {?} tree
     * @param {?=} options
     * @return {?}
     */
    function (tree, options) {
        options = Object.assign({
            deepMapName: this.c.deepMapName,
            parentMapName: this.c.parentMapName,
            childrenMapName: this.c.childrenMapName,
            clearChildren: true,
            cb: null,
        }, options);
        /** @type {?} */
        var result = [];
        /** @type {?} */
        var inFn = function (list, parent, deep) {
            var e_1, _a;
            try {
                for (var list_1 = __values(list), list_1_1 = list_1.next(); !list_1_1.done; list_1_1 = list_1.next()) {
                    var i = list_1_1.value;
                    i[options.deepMapName] = deep;
                    i[options.parentMapName] = parent;
                    if (options.cb)
                        options.cb(i, parent, deep);
                    result.push(i);
                    /** @type {?} */
                    var children = i[options.childrenMapName];
                    if (children != null &&
                        Array.isArray(children) &&
                        children.length > 0) {
                        inFn(children, i, deep + 1);
                    }
                    if (options.clearChildren)
                        delete i[options.childrenMapName];
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
        inFn(tree, 1, null);
        return result;
    };
    /**
     * 数组转换成树数据
     */
    /**
     * 数组转换成树数据
     * @param {?} arr
     * @param {?=} options
     * @return {?}
     */
    ArrayService.prototype.arrToTree = /**
     * 数组转换成树数据
     * @param {?} arr
     * @param {?=} options
     * @return {?}
     */
    function (arr, options) {
        var e_2, _a;
        options = Object.assign({
            idMapName: this.c.idMapName,
            parentIdMapName: this.c.parentIdMapName,
            childrenMapName: this.c.childrenMapName,
            cb: null,
        }, options);
        /** @type {?} */
        var tree = [];
        /** @type {?} */
        var childrenOf = {};
        try {
            for (var arr_1 = __values(arr), arr_1_1 = arr_1.next(); !arr_1_1.done; arr_1_1 = arr_1.next()) {
                var item = arr_1_1.value;
                /** @type {?} */
                var id = item[options.idMapName];
                /** @type {?} */
                var pid = item[options.parentIdMapName];
                childrenOf[id] = childrenOf[id] || [];
                item[options.childrenMapName] = childrenOf[id];
                if (options.cb)
                    options.cb(item);
                if (pid) {
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
                if (arr_1_1 && !arr_1_1.done && (_a = arr_1.return)) _a.call(arr_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return tree;
    };
    /**
     * 数组转换成 `nz-tree` 数据源，通过 `options` 转化项名，也可以使用 `options.cb` 更高级决定数据项
     */
    /**
     * 数组转换成 `nz-tree` 数据源，通过 `options` 转化项名，也可以使用 `options.cb` 更高级决定数据项
     * @param {?} arr
     * @param {?=} options
     * @return {?}
     */
    ArrayService.prototype.arrToTreeNode = /**
     * 数组转换成 `nz-tree` 数据源，通过 `options` 转化项名，也可以使用 `options.cb` 更高级决定数据项
     * @param {?} arr
     * @param {?=} options
     * @return {?}
     */
    function (arr, options) {
        options = Object.assign({
            expanded: false,
            idMapName: this.c.idMapName,
            parentIdMapName: this.c.parentIdMapName,
            titleMapName: this.c.titleMapName,
            isLeafMapName: 'isLeaf',
            checkedMapname: this.c.checkedMapname,
            selectedMapname: this.c.selectedMapname,
            expandedMapname: this.c.expandedMapname,
            disabledMapname: this.c.disabledMapname,
            cb: null,
        }, options);
        /** @type {?} */
        var tree = this.arrToTree(arr, {
            idMapName: options.idMapName,
            parentIdMapName: options.parentIdMapName,
            childrenMapName: 'children',
        });
        this.visitTree(tree, function (item, parent, deep) {
            item.key = item[options.idMapName];
            item.title = item[options.titleMapName];
            item.checked = item[options.checkedMapname];
            item.selected = item[options.selectedMapname];
            item.expanded = item[options.expandedMapname];
            item.disabled = item[options.disabledMapname];
            if (item[options.isLeafMapName] == null) {
                item.isLeaf = item.children.length === 0;
            }
            else {
                item.isLeaf = item[options.isLeafMapName];
            }
            if (options.cb)
                options.cb(item, parent, deep);
        });
        return tree.map(function (node) { return new NzTreeNode(node); });
    };
    /**
     * 递归访问整个树
     */
    /**
     * 递归访问整个树
     * @param {?} tree
     * @param {?} cb
     * @param {?=} options
     * @return {?}
     */
    ArrayService.prototype.visitTree = /**
     * 递归访问整个树
     * @param {?} tree
     * @param {?} cb
     * @param {?=} options
     * @return {?}
     */
    function (tree, cb, options) {
        options = Object.assign({
            childrenMapName: this.c.childrenMapName,
        }, options);
        /** @type {?} */
        var inFn = function (data, parent, deep) {
            var e_3, _a;
            try {
                for (var data_1 = __values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
                    var item = data_1_1.value;
                    cb(item, parent, deep);
                    /** @type {?} */
                    var childrenVal = item[options.childrenMapName];
                    if (childrenVal && childrenVal.length > 0) {
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
     * 获取所有已经选中的 `key` 值
     */
    /**
     * 获取所有已经选中的 `key` 值
     * @param {?} tree
     * @param {?=} options
     * @return {?}
     */
    ArrayService.prototype.getKeysByTreeNode = /**
     * 获取所有已经选中的 `key` 值
     * @param {?} tree
     * @param {?=} options
     * @return {?}
     */
    function (tree, options) {
        options = Object.assign({
            includeHalfChecked: true,
        }, options);
        /** @type {?} */
        var keys = [];
        this.visitTree(tree, function (item, parent, deep) {
            if (item.isChecked ||
                (options.includeHalfChecked && item.isHalfChecked)) {
                keys.push(options.cb
                    ? options.cb(item, parent, deep)
                    : options.keyMapName
                        ? item.origin[options.keyMapName]
                        : item.key);
            }
        });
        return keys;
    };
    ArrayService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ArrayService.ctorParameters = function () { return [
        { type: DelonUtilConfig }
    ]; };
    /** @nocollapse */ ArrayService.ngInjectableDef = defineInjectable({ factory: function ArrayService_Factory() { return new ArrayService(inject(DelonUtilConfig)); }, token: ArrayService, providedIn: "root" });
    return ArrayService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var DelonUtilModule = /** @class */ (function () {
    function DelonUtilModule() {
    }
    /**
     * @return {?}
     */
    DelonUtilModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: DelonUtilModule,
        };
    };
    DelonUtilModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                },] }
    ];
    return DelonUtilModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { _Validators, format, yuan, getTimeDistance, LazyService, isNum, isInt, isDecimal, isIdCard, isMobile, isEmpty, toBoolean, InputBoolean, toNumber, InputNumber, deepGet, deepCopy, copy, updateHostClass, ArrayService, DelonUtilConfig, DelonUtilModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGRlbG9uL3V0aWwvc3JjL290aGVyL290aGVyLnRzIiwibmc6Ly9AZGVsb24vdXRpbC9zcmMvc3RyaW5nL3N0cmluZy50cyIsIm5nOi8vQGRlbG9uL3V0aWwvc3JjL3RpbWUvdGltZS50cyIsIm5nOi8vQGRlbG9uL3V0aWwvc3JjL2xhenkvbGF6eS5zZXJ2aWNlLnRzIiwibmc6Ly9AZGVsb24vdXRpbC9zcmMvdmFsaWRhdGUvdmFsaWRhdGUudHMiLCJuZzovL0BkZWxvbi91dGlsL3NyYy92YWxpZGF0ZS92YWxpZGF0b3JzLnRzIiwibmc6Ly9AZGVsb24vdXRpbC9zcmMvb3RoZXIvY2hlY2sudHMiLCJuZzovL0BkZWxvbi91dGlsL3NyYy9vdGhlci9zdHlsZS50cyIsIm5nOi8vQGRlbG9uL3V0aWwvc3JjL3V0aWwuY29uZmlnLnRzIiwibmc6Ly9AZGVsb24vdXRpbC9zcmMvYXJyYXkvYXJyYXkuc2VydmljZS50cyIsIm5nOi8vQGRlbG9uL3V0aWwvc3JjL3V0aWwubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHRlbmQgZnJvbSAnZXh0ZW5kJztcblxuLyoqXG4gKiDDp8KxwrvDpMK8wrwgYF8uZ2V0YMOvwrzCjMOmwqDCucOmwo3CriBgcGF0aGAgw6jCjsK3w6XCj8KWw6XCrsKJw6XChcKow6XCgMK8XG4gKiBqc3BlcmY6IGh0dHBzOi8vanNwZXJmLmNvbS9lcy1kZWVwLWdldHR0cHM6Ly9qc3BlcmYuY29tL2VzLWRlZXAtZ2V0XG4gKlxuICogQHBhcmFtIG9iaiDDpsKVwrDDpsKNwq7DpsK6wpDDr8K8wozDpsKXwqDDpsKVwojDpsKXwrbDp8KbwrTDpsKOwqXDqMK/wpTDpcKbwp4gYGRlZmF1bHRWYWx1ZWAgw6XCgMK8XG4gKiBAcGFyYW0gcGF0aCDDqMKLwqUgYG51bGxgw6PCgMKBYFtdYMOjwoDCgcOmwpzCqsOlwq7CmsOkwrnCicOlwo/CisOmwpzCqsOmwonCvsOlwojCsMOmwpfCtsOowr/ClMOlwpvCniBgZGVmYXVsdFZhbHVlYCDDpcKAwrxcbiAqIEBwYXJhbSBkZWZhdWx0VmFsdWUgw6nCu8KYw6jCrsKkw6XCgMK8XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWVwR2V0KG9iajogYW55LCBwYXRoOiBzdHJpbmcgfCBzdHJpbmdbXSwgZGVmYXVsdFZhbHVlPzogYW55KSB7XG4gIGlmICghb2JqIHx8IHBhdGggPT0gbnVsbCB8fCBwYXRoLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgaWYgKCFBcnJheS5pc0FycmF5KHBhdGgpKSB7XG4gICAgcGF0aCA9IH5wYXRoLmluZGV4T2YoJy4nKSA/IHBhdGguc3BsaXQoJy4nKSA6IFsgcGF0aCBdO1xuICB9XG4gIGlmIChwYXRoLmxlbmd0aCA9PT0gMSkge1xuICAgIGNvbnN0IGNoZWNrT2JqID0gb2JqW3BhdGhbMF1dO1xuICAgIHJldHVybiB0eXBlb2YgY2hlY2tPYmogPT09ICd1bmRlZmluZWQnID8gZGVmYXVsdFZhbHVlIDogY2hlY2tPYmo7XG4gIH1cbiAgcmV0dXJuIHBhdGgucmVkdWNlKChvLCBrKSA9PiAobyB8fCB7fSlba10sIG9iaikgfHwgZGVmYXVsdFZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVlcENvcHkob2JqOiBhbnkpIHtcbiAgY29uc3QgcmVzdWx0ID0gZXh0ZW5kKHRydWUsIHsgfSwgeyBfOiBvYmogfSk7XG4gIHJldHVybiByZXN1bHQuXztcbn1cblxuLyoqIMOlwqTCjcOlwojCtsOlwobChcOlwq7CucOowofCs8OlwonCqsOowrTCtMOmwp3CvyAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvcHkodmFsdWU6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZTxzdHJpbmc+KChyZXNvbHZlLCByZWplY3QpOiB2b2lkID0+IHtcbiAgICBsZXQgY29weVRleHRBcmVhID0gbnVsbCBhcyBIVE1MVGV4dEFyZWFFbGVtZW50O1xuICAgIHRyeSB7XG4gICAgICBjb3B5VGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgY29weVRleHRBcmVhLnN0eWxlLmhlaWdodCA9ICcwcHgnO1xuICAgICAgY29weVRleHRBcmVhLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICBjb3B5VGV4dEFyZWEuc3R5bGUud2lkdGggPSAnMHB4JztcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29weVRleHRBcmVhKTtcbiAgICAgIGNvcHlUZXh0QXJlYS52YWx1ZSA9IHZhbHVlO1xuICAgICAgY29weVRleHRBcmVhLnNlbGVjdCgpO1xuICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcbiAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoY29weVRleHRBcmVhICYmIGNvcHlUZXh0QXJlYS5wYXJlbnROb2RlKSB7XG4gICAgICAgIGNvcHlUZXh0QXJlYS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNvcHlUZXh0QXJlYSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbiIsImltcG9ydCB7IGRlZXBHZXQgfSBmcm9tICcuLi9vdGhlci9vdGhlcic7XG5cbi8qKlxuICogw6XCrcKXw6fCrMKmw6TCuMKyw6bCoMK8w6XCvMKPw6XCjMKWXG4gKiBgYGBcbiAqIGZvcm1hdCgndGhpcyBpcyAke25hbWV9JywgeyBuYW1lOiAnYXNkZicgfSlcbiAqIC8vIG91dHB1dDogdGhpcyBpcyBhc2RmXG4gKiBmb3JtYXQoJ3RoaXMgaXMgJHt1c2VyLm5hbWV9JywgeyB1c2VyOiB7IG5hbWU6ICdhc2RmJyB9IH0sIHRydWUpXG4gKiAvLyBvdXRwdXQ6IHRoaXMgaXMgYXNkZlxuICogYGBgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXQoc3RyOiBzdHJpbmcsIG9iajoge30sIG5lZWREZWVwR2V0ID0gZmFsc2UpOiBzdHJpbmcge1xuICByZXR1cm4gKHN0ciB8fCAnJykucmVwbGFjZShcbiAgICAvXFwkeyhbXn1dKyl9L2csXG4gICAgKHdvcms6IHN0cmluZywga2V5OiBzdHJpbmcpID0+XG4gICAgICBuZWVkRGVlcEdldFxuICAgICAgICA/IGRlZXBHZXQob2JqLCBrZXkuc3BsaXQoJy4nKSwgJycpXG4gICAgICAgIDogKG9iaiB8fCB7fSlba2V5XSB8fCAnJyxcbiAgKTtcbn1cblxuLyoqXG4gKiDDqMK9wqzDpcKMwpbDpsKIwpBSTULDpcKFwoPDpcKtwpfDp8KswqbDpMK4wrJcbiAqIEBwYXJhbSBkaWdpdHMgw6XCvcKTw6bClcKww6XCrcKXw6fCscK7w6XCnsKLw6bCl8K2w6/CvMKMw6XChcKBw6jCrsK4w6bCjMKHw6XCrsKaw6XCsMKPw6bClcKww6fCgsK5w6XCkMKOw6bClcKww6XCrcKXw6fCmsKEw6TCuMKqw6bClcKww6/CvMKMw6nCu8KYw6jCrsKkMsOkwr3CjcOlwrDCj8OmwpXCsFxuICovXG5leHBvcnQgZnVuY3Rpb24geXVhbih2YWx1ZTogYW55LCBkaWdpdHM6IG51bWJlciA9IDIpOiBzdHJpbmcge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykgdmFsdWUgPSB2YWx1ZS50b0ZpeGVkKGRpZ2l0cyk7XG4gIHJldHVybiBgJnllbiAke3ZhbHVlfWA7XG59XG4iLCJpbXBvcnQgcGFyc2UgZnJvbSAnZGF0ZS1mbnMvcGFyc2UnO1xuaW1wb3J0IHN0YXJ0T2ZXZWVrIGZyb20gJ2RhdGUtZm5zL3N0YXJ0X29mX3dlZWsnO1xuaW1wb3J0IGVuZE9mV2VlayBmcm9tICdkYXRlLWZucy9lbmRfb2Zfd2Vlayc7XG5pbXBvcnQgc3ViV2Vla3MgZnJvbSAnZGF0ZS1mbnMvc3ViX3dlZWtzJztcbmltcG9ydCBzdGFydE9mTW9udGggZnJvbSAnZGF0ZS1mbnMvc3RhcnRfb2ZfbW9udGgnO1xuaW1wb3J0IGVuZE9mTW9udGggZnJvbSAnZGF0ZS1mbnMvZW5kX29mX21vbnRoJztcbmltcG9ydCBzdWJNb250aHMgZnJvbSAnZGF0ZS1mbnMvc3ViX21vbnRocyc7XG5pbXBvcnQgc3RhcnRPZlllYXIgZnJvbSAnZGF0ZS1mbnMvc3RhcnRfb2ZfeWVhcic7XG5pbXBvcnQgZW5kT2ZZZWFyIGZyb20gJ2RhdGUtZm5zL2VuZF9vZl95ZWFyJztcbmltcG9ydCBzdWJZZWFycyBmcm9tICdkYXRlLWZucy9zdWJfeWVhcnMnO1xuaW1wb3J0IGFkZERheXMgZnJvbSAnZGF0ZS1mbnMvYWRkX2RheXMnO1xuXG4vKipcbiAqIMOowo7Ct8Olwo/ClsOmwpfCtsOpwpfCtMOowozCg8OlwpvCtFxuICogQHBhcmFtIHR5cGUgw6fCscK7w6XCnsKLw6/CvMKMw6XCuMKmIGAtYCDDqMKhwqjDp8KkwrrDqMK/wofDpcKOwrvDpMK4woDDpMK4wqrDpsKXwrbDqcKXwrTDr8K8wozDqMKLwqXDpsKMwofDpcKuwpogYG51bWJlcmAgw6jCocKow6fCpMK6w6XCpMKpw6bClcKwXG4gKiBAcGFyYW0gdGltZSDDpcK8woDDpcKnwovDpsKXwrbDqcKXwrRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFRpbWVEaXN0YW5jZShcbiAgdHlwZTpcbiAgICB8ICd0b2RheSdcbiAgICB8ICctdG9kYXknXG4gICAgfCAnd2VlaydcbiAgICB8ICctd2VlaydcbiAgICB8ICdtb250aCdcbiAgICB8ICctbW9udGgnXG4gICAgfCAneWVhcidcbiAgICB8ICcteWVhcidcbiAgICB8IG51bWJlcixcbiAgdGltZT86IERhdGUgfCBzdHJpbmcgfCBudW1iZXIsXG4pOiBbRGF0ZSwgRGF0ZV0ge1xuICB0aW1lID0gcGFyc2UodGltZSB8fCBuZXcgRGF0ZSgpKTtcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICd0b2RheSc6XG4gICAgICByZXR1cm4gW3RpbWUsIHRpbWVdO1xuICAgIGNhc2UgJy10b2RheSc6XG4gICAgICByZXR1cm4gW2FkZERheXModGltZSwgLTEpLCB0aW1lXTtcbiAgICBjYXNlICd3ZWVrJzpcbiAgICAgIHJldHVybiBbc3RhcnRPZldlZWsodGltZSksIGVuZE9mV2Vlayh0aW1lKV07XG4gICAgY2FzZSAnLXdlZWsnOlxuICAgICAgcmV0dXJuIFtzdGFydE9mV2VlayhzdWJXZWVrcyh0aW1lLCAxKSksIGVuZE9mV2VlayhzdWJXZWVrcyh0aW1lLCAxKSldO1xuICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgIHJldHVybiBbc3RhcnRPZk1vbnRoKHRpbWUpLCBlbmRPZk1vbnRoKHRpbWUpXTtcbiAgICBjYXNlICctbW9udGgnOlxuICAgICAgcmV0dXJuIFtzdGFydE9mTW9udGgoc3ViTW9udGhzKHRpbWUsIDEpKSwgZW5kT2ZNb250aChzdWJNb250aHModGltZSwgMSkpXTtcbiAgICBjYXNlICd5ZWFyJzpcbiAgICAgIHJldHVybiBbc3RhcnRPZlllYXIodGltZSksIGVuZE9mWWVhcih0aW1lKV07XG4gICAgY2FzZSAnLXllYXInOlxuICAgICAgcmV0dXJuIFtzdGFydE9mWWVhcihzdWJZZWFycyh0aW1lLCAxKSksIGVuZE9mWWVhcihzdWJZZWFycyh0aW1lLCAxKSldO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gdHlwZSA+IDBcbiAgICAgICAgPyBbdGltZSwgYWRkRGF5cyh0aW1lLCB0eXBlKV1cbiAgICAgICAgOiBbYWRkRGF5cyh0aW1lLCB0eXBlKSwgdGltZV07XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzaGFyZSwgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIExhenlSZXN1bHQge1xuICBwYXRoOiBzdHJpbmc7XG4gIGxvYWRlZDogYm9vbGVhbjtcbiAgc3RhdHVzOiAnb2snIHwgJ2Vycm9yJztcbn1cblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBMYXp5U2VydmljZSB7XG4gIHByaXZhdGUgbGlzdDogYW55ID0ge307XG4gIHByaXZhdGUgY2FjaGVkOiBhbnkgPSB7fTtcbiAgcHJpdmF0ZSBfbm90aWZ5OiBCZWhhdmlvclN1YmplY3Q8TGF6eVJlc3VsdFtdPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8XG4gICAgTGF6eVJlc3VsdFtdXG4gID4oW10pO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnkpIHt9XG5cbiAgZ2V0IGNoYW5nZSgpOiBPYnNlcnZhYmxlPExhenlSZXN1bHRbXT4ge1xuICAgIHJldHVybiB0aGlzLl9ub3RpZnkuYXNPYnNlcnZhYmxlKCkucGlwZShcbiAgICAgIHNoYXJlKCksXG4gICAgICBmaWx0ZXIobHMgPT4gbHMubGVuZ3RoICE9PSAwKSxcbiAgICApO1xuICB9XG5cbiAgY2xlYXIoKTogdm9pZCB7XG4gICAgdGhpcy5saXN0ID0ge307XG4gICAgdGhpcy5jYWNoZWQgPSB7fTtcbiAgfVxuXG4gIGxvYWQocGF0aHM6IHN0cmluZyB8IHN0cmluZ1tdKTogUHJvbWlzZTxMYXp5UmVzdWx0W10+IHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkocGF0aHMpKSBwYXRocyA9IFtwYXRoc107XG5cbiAgICBjb25zdCBwcm9taXNlczogUHJvbWlzZTxMYXp5UmVzdWx0PltdID0gW107XG4gICAgcGF0aHMuZm9yRWFjaChwYXRoID0+IHtcbiAgICAgIGlmIChwYXRoLmVuZHNXaXRoKCcuanMnKSkge1xuICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMubG9hZFNjcmlwdChwYXRoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMubG9hZFN0eWxlKHBhdGgpKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbihyZXMgPT4ge1xuICAgICAgdGhpcy5fbm90aWZ5Lm5leHQocmVzKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzKTtcbiAgICB9KTtcbiAgfVxuXG4gIGxvYWRTY3JpcHQocGF0aDogc3RyaW5nLCBpbm5lckNvbnRlbnQ/OiBzdHJpbmcpOiBQcm9taXNlPExhenlSZXN1bHQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBpZiAodGhpcy5saXN0W3BhdGhdID09PSB0cnVlKSB7XG4gICAgICAgIHJlc29sdmUodGhpcy5jYWNoZWRbcGF0aF0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMubGlzdFtwYXRoXSA9IHRydWU7XG4gICAgICBjb25zdCBvblN1Y2Nlc3MgPSAoaXRlbTogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuY2FjaGVkW3BhdGhdID0gaXRlbTtcbiAgICAgICAgcmVzb2x2ZShpdGVtKTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLmRvYy5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKSBhcyBIVE1MU2NyaXB0RWxlbWVudDtcbiAgICAgIG5vZGUudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgICAgbm9kZS5zcmMgPSBwYXRoO1xuICAgICAgbm9kZS5jaGFyc2V0ID0gJ3V0Zi04JztcbiAgICAgIGlmIChpbm5lckNvbnRlbnQpIHtcbiAgICAgICAgbm9kZS5pbm5lckhUTUwgPSBpbm5lckNvbnRlbnQ7XG4gICAgICB9XG4gICAgICBpZiAoKDxhbnk+bm9kZSkucmVhZHlTdGF0ZSkge1xuICAgICAgICAvLyBJRVxuICAgICAgICAoPGFueT5ub2RlKS5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgKDxhbnk+bm9kZSkucmVhZHlTdGF0ZSA9PT0gJ2xvYWRlZCcgfHxcbiAgICAgICAgICAgICg8YW55Pm5vZGUpLnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZSdcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgICg8YW55Pm5vZGUpLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICAgICAgICBvblN1Y2Nlc3Moe1xuICAgICAgICAgICAgICBwYXRoOiBwYXRoLFxuICAgICAgICAgICAgICBsb2FkZWQ6IHRydWUsXG4gICAgICAgICAgICAgIHN0YXR1czogJ29rJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgIG9uU3VjY2Vzcyh7XG4gICAgICAgICAgICBwYXRoOiBwYXRoLFxuICAgICAgICAgICAgbG9hZGVkOiB0cnVlLFxuICAgICAgICAgICAgc3RhdHVzOiAnb2snLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgbm9kZS5vbmVycm9yID0gKGVycm9yOiBhbnkpID0+XG4gICAgICAgIG9uU3VjY2Vzcyh7XG4gICAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgICBsb2FkZWQ6IGZhbHNlLFxuICAgICAgICAgIHN0YXR1czogJ2Vycm9yJyxcbiAgICAgICAgfSk7XG4gICAgICB0aGlzLmRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIH0pO1xuICB9XG5cbiAgbG9hZFN0eWxlKFxuICAgIHBhdGg6IHN0cmluZyxcbiAgICByZWwgPSAnc3R5bGVzaGVldCcsXG4gICAgaW5uZXJDb250ZW50Pzogc3RyaW5nLFxuICApOiBQcm9taXNlPExhenlSZXN1bHQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBpZiAodGhpcy5saXN0W3BhdGhdID09PSB0cnVlKSB7XG4gICAgICAgIHJlc29sdmUodGhpcy5jYWNoZWRbcGF0aF0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMubGlzdFtwYXRoXSA9IHRydWU7XG5cbiAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLmRvYy5jcmVhdGVFbGVtZW50KCdsaW5rJykgYXMgSFRNTExpbmtFbGVtZW50O1xuICAgICAgbm9kZS5yZWwgPSByZWw7XG4gICAgICBub2RlLnR5cGUgPSAndGV4dC9jc3MnO1xuICAgICAgbm9kZS5ocmVmID0gcGF0aDtcbiAgICAgIGlmIChpbm5lckNvbnRlbnQpIHtcbiAgICAgICAgbm9kZS5pbm5lckhUTUwgPSBpbm5lckNvbnRlbnQ7XG4gICAgICB9XG4gICAgICB0aGlzLmRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgY29uc3QgaXRlbTogTGF6eVJlc3VsdCA9IHtcbiAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgbG9hZGVkOiB0cnVlLFxuICAgICAgICBzdGF0dXM6ICdvaycsXG4gICAgICB9O1xuICAgICAgdGhpcy5jYWNoZWRbcGF0aF0gPSBpdGVtO1xuICAgICAgcmVzb2x2ZShpdGVtKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiLyoqIMOmwpjCr8OlwpDCpsOkwrjCusOmwpXCsMOlwq3ClyAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIC9eKCgtP1xcZCtcXC5cXGQrKXwoLT9cXGQrKXwoLT9cXC5cXGQrKSkkLy50ZXN0KHZhbHVlLnRvU3RyaW5nKCkpO1xufVxuXG4vKiogw6bCmMKvw6XCkMKmw6TCuMK6w6bClcK0w6bClcKwICovXG5leHBvcnQgZnVuY3Rpb24gaXNJbnQodmFsdWU6IHN0cmluZyB8IG51bWJlcik6IGJvb2xlYW4ge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dHJpcGxlLWVxdWFsc1xuICByZXR1cm4gaXNOdW0odmFsdWUpICYmIHBhcnNlSW50KHZhbHVlLnRvU3RyaW5nKCksIDEwKSA9PSB2YWx1ZTtcbn1cblxuLyoqIMOmwpjCr8OlwpDCpsOkwrjCusOlwrDCj8OmwpXCsCAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRGVjaW1hbCh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiBpc051bSh2YWx1ZSkgJiYgIWlzSW50KHZhbHVlKTtcbn1cblxuLyoqIMOmwpjCr8OlwpDCpsOkwrjCusOowrrCq8OkwrvCvcOowq/CgSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzSWRDYXJkKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgcmV0dXJuIChcbiAgICB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIC8oXlxcZHsxNX0kKXwoXlxcZHsxN30oWzAtOV18WCkkKS9pLnRlc3QodmFsdWUpXG4gICk7XG59XG5cbi8qKiDDpsKYwq/DpcKQwqbDpMK4wrrDpsKJwovDpsKcwrrDpcKPwrcgKi9cbmV4cG9ydCBmdW5jdGlvbiBpc01vYmlsZSh2YWx1ZTogYW55KTogYm9vbGVhbiB7XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJlxuICAgIC9eKDB8XFwrPzg2fDE3OTUxKT8oMTNbMC05XXwxNVswLTldfDE3WzA2NzhdfDE4WzAtOV18MTRbNTddKVswLTldezh9JC8udGVzdChcbiAgICAgIHZhbHVlLFxuICAgIClcbiAgKTtcbn1cbiIsImltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgVmFsaWRhdGlvbkVycm9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGlzTnVtLCBpc0ludCwgaXNEZWNpbWFsLCBpc0lkQ2FyZCwgaXNNb2JpbGUgfSBmcm9tICcuL3ZhbGlkYXRlJztcblxuLyoqIMOkwrjCgMOlwqXCl8OmwpfCpcOlwrjCuMOpwqrCjMOowq/CgcOlwpnCqCAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNsYXNzLW5hbWVcbmV4cG9ydCBjbGFzcyBfVmFsaWRhdG9ycyB7XG4gIC8qKiDDpsKYwq/DpcKQwqbDpMK4wrrDpsKVwrDDpcKtwpcgKi9cbiAgc3RhdGljIG51bShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XG4gICAgcmV0dXJuIGlzTnVtKGNvbnRyb2wudmFsdWUpID8gbnVsbCA6IHsgbnVtOiB0cnVlIH07XG4gIH1cblxuICAvKiogw6bCmMKvw6XCkMKmw6TCuMK6w6bClcK0w6bClcKwICovXG4gIHN0YXRpYyBpbnQoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xuICAgIHJldHVybiBpc0ludChjb250cm9sLnZhbHVlKSA/IG51bGwgOiB7IGludDogdHJ1ZSB9O1xuICB9XG5cbiAgLyoqIMOmwpjCr8OlwpDCpsOkwrjCusOlwrDCj8OmwpXCsCAqL1xuICBzdGF0aWMgZGVjaW1hbChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XG4gICAgcmV0dXJuIGlzRGVjaW1hbChjb250cm9sLnZhbHVlKSA/IG51bGwgOiB7IGRlY2ltYWw6IHRydWUgfTtcbiAgfVxuXG4gIC8qKiDDpsKYwq/DpcKQwqbDpMK4wrrDqMK6wqvDpMK7wr3DqMKvwoEgKi9cbiAgc3RhdGljIGlkQ2FyZChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XG4gICAgcmV0dXJuIGlzSWRDYXJkKGNvbnRyb2wudmFsdWUpID8gbnVsbCA6IHsgaWRDYXJkOiB0cnVlIH07XG4gIH1cblxuICAvKiogw6bCmMKvw6XCkMKmw6TCuMK6w6bCicKLw6bCnMK6w6XCj8K3ICovXG4gIHN0YXRpYyBtb2JpbGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xuICAgIHJldHVybiBpc01vYmlsZShjb250cm9sLnZhbHVlKSA/IG51bGwgOiB7IG1vYmlsZTogdHJ1ZSB9O1xuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gaXNFbXB0eShlbGVtZW50OiBIVE1MRWxlbWVudCk6IGJvb2xlYW4ge1xuICBjb25zdCBub2RlcyA9IGVsZW1lbnQuY2hpbGROb2RlcztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IG5vZGUgPSBub2Rlcy5pdGVtKGkpO1xuICAgIGlmIChcbiAgICAgIG5vZGUubm9kZVR5cGUgPT09IDEgJiZcbiAgICAgIChub2RlIGFzIEhUTUxFbGVtZW50KS5vdXRlckhUTUwudG9TdHJpbmcoKS50cmltKCkubGVuZ3RoICE9PSAwXG4gICAgKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIG5vZGUubm9kZVR5cGUgPT09IDMgJiZcbiAgICAgIG5vZGUudGV4dENvbnRlbnQudG9TdHJpbmcoKS50cmltKCkubGVuZ3RoICE9PSAwXG4gICAgKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9Cb29sZWFuKFxuICB2YWx1ZTogYW55LFxuICBhbGxvd1VuZGVmaW5lZCA9IGZhbHNlLFxuKTogYm9vbGVhbiB7XG4gIHJldHVybiBhbGxvd1VuZGVmaW5lZCAmJiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnXG4gICAgPyB1bmRlZmluZWRcbiAgICA6IHZhbHVlICE9IG51bGwgJiYgYCR7dmFsdWV9YCAhPT0gJ2ZhbHNlJztcbn1cblxuLyoqXG4gKiBJbnB1dCBkZWNvcmF0b3IgdGhhdCBoYW5kbGUgYSBwcm9wIHRvIGRvIGdldC9zZXQgYXV0b21hdGljYWxseSB3aXRoIHRvQm9vbGVhblxuICogQGV4YW1wbGVcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB2aXNpYmxlOiBib29sZWFuID0gZmFsc2U7XG4gKiBASW5wdXQoKSBASW5wdXRCb29sZWFuKG51bGwpIHZpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAqIGBgYFxuICovXG5leHBvcnQgZnVuY3Rpb24gSW5wdXRCb29sZWFuKGFsbG93VW5kZWZpbmVkID0gZmFsc2UpOiBhbnkgeyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxuICByZXR1cm4gZnVuY3Rpb24gSW5wdXRCb29sZWFuUHJvcERlY29yYXRvciAodGFyZ2V0OiBvYmplY3QsIG5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIC8vIEFkZCBvdXIgb3duIHByaXZhdGUgcHJvcFxuICAgIGNvbnN0IHByaXZhdGVQcm9wTmFtZSA9IGAkJF9fJHtuYW1lfWA7XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRhcmdldCwgcHJpdmF0ZVByb3BOYW1lKSkge1xuICAgICAgY29uc29sZS53YXJuKGBUaGUgcHJvcCBcIiR7cHJpdmF0ZVByb3BOYW1lfVwiIGlzIGFscmVhZHkgZXhpc3QsIGl0IHdpbGwgYmUgb3ZlcnJpZGVkIGJ5IElucHV0Qm9vbGVhbiBkZWNvcmF0b3IuYCk7XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJpdmF0ZVByb3BOYW1lLCB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgbmFtZSwge1xuICAgICAgZ2V0KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpc1sgcHJpdmF0ZVByb3BOYW1lIF07IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8taW52YWxpZC10aGlzXG4gICAgICB9LFxuICAgICAgc2V0KHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpc1sgcHJpdmF0ZVByb3BOYW1lIF0gPSB0b0Jvb2xlYW4odmFsdWUsIGFsbG93VW5kZWZpbmVkKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1pbnZhbGlkLXRoaXNcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlOiBhbnkpOiBudW1iZXI7XG5leHBvcnQgZnVuY3Rpb24gdG9OdW1iZXI8RD4odmFsdWU6IGFueSwgZmFsbGJhY2s6IEQpOiBudW1iZXIgfCBEO1xuZXhwb3J0IGZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlOiBhbnksIGZhbGxiYWNrVmFsdWUgPSAwKSB7XG4gIHJldHVybiAhaXNOYU4ocGFyc2VGbG9hdCh2YWx1ZSBhcyBhbnkpKSAmJiAhaXNOYU4oTnVtYmVyKHZhbHVlKSlcbiAgICA/IE51bWJlcih2YWx1ZSlcbiAgICA6IGZhbGxiYWNrVmFsdWU7XG59XG5cblxuLyoqXG4gKiBJbnB1dCBkZWNvcmF0b3IgdGhhdCBoYW5kbGUgYSBwcm9wIHRvIGRvIGdldC9zZXQgYXV0b21hdGljYWxseSB3aXRoIHRvTnVtYmVyXG4gKiBAZXhhbXBsZVxuICogYGBgdHlwZXNjcmlwdFxuICogQElucHV0KCkgQElucHV0TnVtYmVyKCkgdmlzaWJsZTogbnVtYmVyID0gMTtcbiAqIEBJbnB1dCgpIEBJbnB1dE51bWJlcihudWxsKSB2aXNpYmxlOiBudW1iZXIgPSAyO1xuICogYGBgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBJbnB1dE51bWJlcihmYWxsYmFjayA9IDApOiBhbnkgeyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxuICByZXR1cm4gZnVuY3Rpb24gSW5wdXRCb29sZWFuUHJvcERlY29yYXRvciAodGFyZ2V0OiBvYmplY3QsIG5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIC8vIEFkZCBvdXIgb3duIHByaXZhdGUgcHJvcFxuICAgIGNvbnN0IHByaXZhdGVQcm9wTmFtZSA9IGAkJF9fJHtuYW1lfWA7XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRhcmdldCwgcHJpdmF0ZVByb3BOYW1lKSkge1xuICAgICAgY29uc29sZS53YXJuKGBUaGUgcHJvcCBcIiR7cHJpdmF0ZVByb3BOYW1lfVwiIGlzIGFscmVhZHkgZXhpc3QsIGl0IHdpbGwgYmUgb3ZlcnJpZGVkIGJ5IElucHV0TnVtYmVyIGRlY29yYXRvci5gKTtcbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcml2YXRlUHJvcE5hbWUsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBuYW1lLCB7XG4gICAgICBnZXQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzWyBwcml2YXRlUHJvcE5hbWUgXTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1pbnZhbGlkLXRoaXNcbiAgICAgIH0sXG4gICAgICBzZXQodmFsdWU6IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzWyBwcml2YXRlUHJvcE5hbWUgXSA9IHRvTnVtYmVyKHZhbHVlLCBmYWxsYmFjayk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8taW52YWxpZC10aGlzXG4gICAgICB9XG4gICAgfSk7XG4gIH07XG59XG4iLCJpbXBvcnQgeyBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoXG4gIGVsOiBIVE1MRWxlbWVudCxcbiAgY2xhc3NNYXA6IG9iamVjdCxcbiAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbik6IHZvaWQge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Zm9yaW5cbiAgZm9yIChjb25zdCBpIGluIGNsYXNzTWFwKSB7XG4gICAgcmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWwsIGkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZENsYXNzKFxuICBlbDogSFRNTEVsZW1lbnQsXG4gIGNsYXNzTWFwOiBvYmplY3QsXG4gIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4pOiB2b2lkIHtcbiAgZm9yIChjb25zdCBpIGluIGNsYXNzTWFwKSB7XG4gICAgaWYgKGNsYXNzTWFwW2ldKSB7XG4gICAgICByZW5kZXJlci5hZGRDbGFzcyhlbCwgaSk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogw6bCm8K0w6bClsKww6XCrsK/w6TCuMK7w6fCu8KEw6TCu8K2w6bCoMK3w6XCvMKPIGBjbGFzc2DDr8K8wozDpMK+wovDpcKmwoLDr8K8wppcbiAqXG4gKiBgYGB0c1xuICogdXBkYXRlSG9zdENsYXNzKFxuICogIHRoaXMuZWwubmF0aXZlRWxlbWVudCxcbiAqICB7XG4gKiAgICBbICdjbGFzc25hbWUnIF06IHRydWUsXG4gKiAgICBbICdjbGFzc25hbWUnIF06IHRoaXMudHlwZSA9PT0gJzEnLFxuICogICAgWyB0aGlzLmNscyBdOiB0cnVlLFxuICogICAgWyBgYS0ke3RoaXMuY2xzfWAgXTogdHJ1ZVxuICogIH0sXG4gKiAgdGhpcy5yZW5kZXJlcilcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBbY2xlYW5BbGxdIMOmwpjCr8OlwpDCpsOlwoXCiMOmwrjChcOnwpDChsOmwonCgMOmwpzCiSBgY2xhc3NgIMOlwoDCvMOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmBmYWxzZWBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUhvc3RDbGFzcyhcbiAgZWw6IEhUTUxFbGVtZW50LFxuICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICBjbGFzc01hcDogb2JqZWN0LFxuICBjbGVhbkFsbCA9IGZhbHNlXG4pOiB2b2lkIHtcbiAgaWYgKGNsZWFuQWxsID09PSB0cnVlKSB7XG4gICAgcmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKGVsLCAnY2xhc3MnKTtcbiAgfSBlbHNlIHtcbiAgICByZW1vdmVDbGFzcyhlbCwgY2xhc3NNYXAsIHJlbmRlcmVyKTtcbiAgfVxuICBjbGFzc01hcCA9IHsgLi4uY2xhc3NNYXAgfTtcbiAgYWRkQ2xhc3MoZWwsIGNsYXNzTWFwLCByZW5kZXJlcik7XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBcnJheUNvbmZpZyB9IGZyb20gJy4vYXJyYXkvYXJyYXkuY29uZmlnJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBEZWxvblV0aWxDb25maWcge1xuICBhcnJheT86IEFycmF5Q29uZmlnO1xufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpUcmVlTm9kZSB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xuaW1wb3J0IHsgRGVsb25VdGlsQ29uZmlnIH0gZnJvbSAnLi4vdXRpbC5jb25maWcnO1xuaW1wb3J0IHsgQXJyYXlDb25maWcgfSBmcm9tICcuL2FycmF5LmNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQXJyYXlTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBjOiBBcnJheUNvbmZpZztcbiAgY29uc3RydWN0b3IoY29nOiBEZWxvblV0aWxDb25maWcpIHtcbiAgICB0aGlzLmMgPSBPYmplY3QuYXNzaWduKFxuICAgICAgPEFycmF5Q29uZmlnPntcbiAgICAgICAgZGVlcE1hcE5hbWU6ICdkZWVwJyxcbiAgICAgICAgcGFyZW50TWFwTmFtZTogJ3BhcmVudCcsXG4gICAgICAgIGlkTWFwTmFtZTogJ2lkJyxcbiAgICAgICAgcGFyZW50SWRNYXBOYW1lOiAncGFyZW50X2lkJyxcbiAgICAgICAgY2hpbGRyZW5NYXBOYW1lOiAnY2hpbGRyZW4nLFxuICAgICAgICB0aXRsZU1hcE5hbWU6ICd0aXRsZScsXG4gICAgICAgIGNoZWNrZWRNYXBuYW1lOiAnY2hlY2tlZCcsXG4gICAgICAgIHNlbGVjdGVkTWFwbmFtZTogJ3NlbGVjdGVkJyxcbiAgICAgICAgZXhwYW5kZWRNYXBuYW1lOiAnZXhwYW5kZWQnLFxuICAgICAgICBkaXNhYmxlZE1hcG5hbWU6ICdkaXNhYmxlZCcsXG4gICAgICB9LFxuICAgICAgY29nICYmIGNvZy5hcnJheSxcbiAgICApO1xuICB9XG4gIC8qKlxuICAgKiDDpcKwwobDpsKgwpHDp8K7wpPDpsKewoTDqMK9wqzDpsKNwqLDpsKIwpDDpsKVwrDDp8K7woTDp8K7wpPDpsKewoRcbiAgICovXG4gIHRyZWVUb0FycihcbiAgICB0cmVlOiBhbnlbXSxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqIMOmwrfCscOlwrrCpsOpwqHCucOlwpDCjcOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmAnZGVlcCdgICovXG4gICAgICBkZWVwTWFwTmFtZT86IHN0cmluZztcbiAgICAgIC8qKiDDpsKJwoHDpcK5wrPDpcKQwo7DpsKVwrDDp8K7woTDp8KawoTDp8KIwrbDpsKVwrDDpsKNwq7DqcKhwrnDpcKQwo3Dr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgJ3BhcmVudCdgICovXG4gICAgICBwYXJlbnRNYXBOYW1lPzogc3RyaW5nO1xuICAgICAgLyoqIMOmwrrCkMOmwpXCsMOmwo3CrsOlwq3CkMOpwqHCucOlwpDCjcOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmAnY2hpbGRyZW4nYCAqL1xuICAgICAgY2hpbGRyZW5NYXBOYW1lPzogc3RyaW5nO1xuICAgICAgLyoqIMOmwpjCr8OlwpDCpsOnwqfCu8OpwpnCpCBgY2hpbGRyZW5gIMOoworCgsOnwoLCucOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmB0cnVlYCAqL1xuICAgICAgY2xlYXJDaGlsZHJlbj86IGJvb2xlYW47XG4gICAgICAvKiogw6jCvcKsw6bCjcKiw6bCiMKQw6bClcKww6fCu8KEw6fCu8KTw6bCnsKEw6bCl8K2w6XCm8Kew6jCsMKDICovXG4gICAgICBjYj86IChpdGVtOiBhbnksIHBhcmVudDogYW55LCBkZWVwOiBudW1iZXIpID0+IHZvaWQ7XG4gICAgfSxcbiAgKTogYW55W10ge1xuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKFxuICAgICAge1xuICAgICAgICBkZWVwTWFwTmFtZTogdGhpcy5jLmRlZXBNYXBOYW1lLFxuICAgICAgICBwYXJlbnRNYXBOYW1lOiB0aGlzLmMucGFyZW50TWFwTmFtZSxcbiAgICAgICAgY2hpbGRyZW5NYXBOYW1lOiB0aGlzLmMuY2hpbGRyZW5NYXBOYW1lLFxuICAgICAgICBjbGVhckNoaWxkcmVuOiB0cnVlLFxuICAgICAgICBjYjogbnVsbCxcbiAgICAgIH0sXG4gICAgICBvcHRpb25zLFxuICAgICk7XG4gICAgY29uc3QgcmVzdWx0OiBhbnlbXSA9IFtdO1xuICAgIGNvbnN0IGluRm4gPSAobGlzdDogYW55W10sIHBhcmVudDogYW55LCBkZWVwOiBudW1iZXIpID0+IHtcbiAgICAgIGZvciAoY29uc3QgaSBvZiBsaXN0KSB7XG4gICAgICAgIGlbb3B0aW9ucy5kZWVwTWFwTmFtZV0gPSBkZWVwO1xuICAgICAgICBpW29wdGlvbnMucGFyZW50TWFwTmFtZV0gPSBwYXJlbnQ7XG4gICAgICAgIGlmIChvcHRpb25zLmNiKSBvcHRpb25zLmNiKGksIHBhcmVudCwgZGVlcCk7XG4gICAgICAgIHJlc3VsdC5wdXNoKGkpO1xuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IGlbb3B0aW9ucy5jaGlsZHJlbk1hcE5hbWVdO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgY2hpbGRyZW4gIT0gbnVsbCAmJlxuICAgICAgICAgIEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pICYmXG4gICAgICAgICAgY2hpbGRyZW4ubGVuZ3RoID4gMFxuICAgICAgICApIHtcbiAgICAgICAgICBpbkZuKGNoaWxkcmVuLCBpLCBkZWVwICsgMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMuY2xlYXJDaGlsZHJlbikgZGVsZXRlIGlbb3B0aW9ucy5jaGlsZHJlbk1hcE5hbWVdO1xuICAgICAgfVxuICAgIH07XG4gICAgaW5Gbih0cmVlLCAxLCBudWxsKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIMOmwpXCsMOnwrvChMOowr3CrMOmwo3CosOmwojCkMOmwqDCkcOmwpXCsMOmwo3CrlxuICAgKi9cbiAgYXJyVG9UcmVlKFxuICAgIGFycjogYW55W10sXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKiDDp8K8wpbDpcKPwrfDqcKhwrnDpcKQwo3Dr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgJ2lkJ2AgKi9cbiAgICAgIGlkTWFwTmFtZT86IHN0cmluZztcbiAgICAgIC8qKiDDp8KIwrbDp8K8wpbDpcKPwrfDqcKhwrnDpcKQwo3Dr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgJ3BhcmVudF9pZCdgICovXG4gICAgICBwYXJlbnRJZE1hcE5hbWU/OiBzdHJpbmc7XG4gICAgICAvKiogw6XCrcKQw6nCocK5w6XCkMKNw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYCdjaGlsZHJlbidgICovXG4gICAgICBjaGlsZHJlbk1hcE5hbWU/OiBzdHJpbmc7XG4gICAgICAvKiogw6jCvcKsw6bCjcKiw6bCiMKQw6bCoMKRw6bClcKww6bCjcKuw6bCl8K2w6XCm8Kew6jCsMKDICovXG4gICAgICBjYj86IChpdGVtOiBhbnkpID0+IHZvaWQ7XG4gICAgfSxcbiAgKTogYW55W10ge1xuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKFxuICAgICAge1xuICAgICAgICBpZE1hcE5hbWU6IHRoaXMuYy5pZE1hcE5hbWUsXG4gICAgICAgIHBhcmVudElkTWFwTmFtZTogdGhpcy5jLnBhcmVudElkTWFwTmFtZSxcbiAgICAgICAgY2hpbGRyZW5NYXBOYW1lOiB0aGlzLmMuY2hpbGRyZW5NYXBOYW1lLFxuICAgICAgICBjYjogbnVsbCxcbiAgICAgIH0sXG4gICAgICBvcHRpb25zLFxuICAgICk7XG4gICAgY29uc3QgdHJlZTogYW55W10gPSBbXTtcbiAgICBjb25zdCBjaGlsZHJlbk9mID0ge307XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGFycikge1xuICAgICAgY29uc3QgaWQgPSBpdGVtW29wdGlvbnMuaWRNYXBOYW1lXSxcbiAgICAgICAgcGlkID0gaXRlbVtvcHRpb25zLnBhcmVudElkTWFwTmFtZV07XG4gICAgICBjaGlsZHJlbk9mW2lkXSA9IGNoaWxkcmVuT2ZbaWRdIHx8IFtdO1xuICAgICAgaXRlbVtvcHRpb25zLmNoaWxkcmVuTWFwTmFtZV0gPSBjaGlsZHJlbk9mW2lkXTtcbiAgICAgIGlmIChvcHRpb25zLmNiKSBvcHRpb25zLmNiKGl0ZW0pO1xuICAgICAgaWYgKHBpZCkge1xuICAgICAgICBjaGlsZHJlbk9mW3BpZF0gPSBjaGlsZHJlbk9mW3BpZF0gfHwgW107XG4gICAgICAgIGNoaWxkcmVuT2ZbcGlkXS5wdXNoKGl0ZW0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJlZS5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJlZTtcbiAgfVxuXG4gIC8qKlxuICAgKiDDpsKVwrDDp8K7woTDqMK9wqzDpsKNwqLDpsKIwpAgYG56LXRyZWVgIMOmwpXCsMOmwo3CrsOmwrrCkMOvwrzCjMOpwoDCmsOowr/ChyBgb3B0aW9uc2Agw6jCvcKsw6XCjMKWw6nCocK5w6XCkMKNw6/CvMKMw6TCucKfw6XCj8Kvw6TCu8Klw6TCvcK/w6fClMKoIGBvcHRpb25zLmNiYCDDpsKbwrTDqcKrwpjDp8K6wqfDpcKGwrPDpcKuwprDpsKVwrDDpsKNwq7DqcKhwrlcbiAgICovXG4gIGFyclRvVHJlZU5vZGUoXG4gICAgYXJyOiBhbnlbXSxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqIMOnwrzClsOlwo/Ct8OpwqHCucOlwpDCjcOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmAnaWQnYCAqL1xuICAgICAgaWRNYXBOYW1lPzogc3RyaW5nO1xuICAgICAgLyoqIMOnwojCtsOnwrzClsOlwo/Ct8OpwqHCucOlwpDCjcOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmAncGFyZW50X2lkJ2AgKi9cbiAgICAgIHBhcmVudElkTWFwTmFtZT86IHN0cmluZztcbiAgICAgIC8qKiDDpsKgwofDqcKiwpjDqcKhwrnDpcKQwo3Dr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgJ3RpdGxlJ2AgKi9cbiAgICAgIHRpdGxlTWFwTmFtZT86IHN0cmluZztcbiAgICAgIC8qKiDDqMKuwr7Dp8K9wq7DpMK4wrrDpcKPwrbDpcKtwpDDqMKKwoLDp8KCwrnDqcKhwrnDpcKQwo3Dr8K8wozDqMKLwqXDpsKVwrDDpsKNwq7DpsK6wpDDpMK4wo3DpcKtwpjDpcKcwqjDpsKXwrbDqMKHwqrDpcKKwqjDpsKgwrnDpsKNwq4gYGNoaWxkcmVuYCDDpcKAwrzDpcKGwrPDpcKuwprDpsKYwq/DpcKQwqbDpMK4wrrDpcKPwrbDpcKtwpDDqMKKwoLDp8KCwrnDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgJ2lzTGVhZidgICovXG4gICAgICBpc0xlYWZNYXBOYW1lPzogc3RyaW5nO1xuICAgICAgLyoqIMOoworCgsOnwoLCuSBDaGVja2JveCDDpsKYwq/DpcKQwqbDqcKAwonDpMK4wq3DqcKhwrnDpcKQwo3Dr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgJ2NoZWNrZWQnYCAqL1xuICAgICAgY2hlY2tlZE1hcG5hbWU/OiBzdHJpbmc7XG4gICAgICAvKiogw6jCisKCw6fCgsK5w6bCnMKsw6jCusKrw6bCmMKvw6XCkMKmw6nCgMKJw6TCuMKtw6nCocK5w6XCkMKNw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYCdzZWxlY3RlZCdgICovXG4gICAgICBzZWxlY3RlZE1hcG5hbWU/OiBzdHJpbmc7XG4gICAgICAvKiogw6jCisKCw6fCgsK5w6bCmMKvw6XCkMKmw6XCscKVw6XCvMKAKMOlwo/CtsOlwq3CkMOoworCgsOnwoLCucOmwpfCoMOmwpXCiCnDqcKhwrnDpcKQwo3Dr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgJ2V4cGFuZGVkJ2AgKi9cbiAgICAgIGV4cGFuZGVkTWFwbmFtZT86IHN0cmluZztcbiAgICAgIC8qKiDDqMKuwr7Dp8K9wq7DpsKYwq/DpcKQwqbDp8KmwoHDp8KUwqjDqMKKwoLDp8KCwrkow6TCuMKNw6XCj8Kvw6jCv8Kbw6jCocKMw6TCu8K7w6TCvcKVw6bCk8KNw6TCvcKcKcOpwqHCucOlwpDCjcOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmAnZGlzYWJsZWQnYCAqL1xuICAgICAgZGlzYWJsZWRNYXBuYW1lPzogc3RyaW5nO1xuICAgICAgLyoqIMOowr3CrMOmwo3CosOmwojCkMOmwqDCkcOmwpXCsMOmwo3CrsOlwpDCjsOvwrzCjMOmwonCp8OowqHCjMOnwprChMOpwoDCksOlwr3CksOlwpvCnsOowrDCgyAqL1xuICAgICAgY2I/OiAoaXRlbTogYW55LCBwYXJlbnQ6IGFueSwgZGVlcDogbnVtYmVyKSA9PiB2b2lkO1xuICAgIH0sXG4gICk6IE56VHJlZU5vZGVbXSB7XG4gICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7XG4gICAgICAgIGV4cGFuZGVkOiBmYWxzZSxcbiAgICAgICAgaWRNYXBOYW1lOiB0aGlzLmMuaWRNYXBOYW1lLFxuICAgICAgICBwYXJlbnRJZE1hcE5hbWU6IHRoaXMuYy5wYXJlbnRJZE1hcE5hbWUsXG4gICAgICAgIHRpdGxlTWFwTmFtZTogdGhpcy5jLnRpdGxlTWFwTmFtZSxcbiAgICAgICAgaXNMZWFmTWFwTmFtZTogJ2lzTGVhZicsXG4gICAgICAgIGNoZWNrZWRNYXBuYW1lOiB0aGlzLmMuY2hlY2tlZE1hcG5hbWUsXG4gICAgICAgIHNlbGVjdGVkTWFwbmFtZTogdGhpcy5jLnNlbGVjdGVkTWFwbmFtZSxcbiAgICAgICAgZXhwYW5kZWRNYXBuYW1lOiB0aGlzLmMuZXhwYW5kZWRNYXBuYW1lLFxuICAgICAgICBkaXNhYmxlZE1hcG5hbWU6IHRoaXMuYy5kaXNhYmxlZE1hcG5hbWUsXG4gICAgICAgIGNiOiBudWxsLFxuICAgICAgfSxcbiAgICAgIG9wdGlvbnMsXG4gICAgKTtcbiAgICBjb25zdCB0cmVlID0gdGhpcy5hcnJUb1RyZWUoYXJyLCB7XG4gICAgICBpZE1hcE5hbWU6IG9wdGlvbnMuaWRNYXBOYW1lLFxuICAgICAgcGFyZW50SWRNYXBOYW1lOiBvcHRpb25zLnBhcmVudElkTWFwTmFtZSxcbiAgICAgIGNoaWxkcmVuTWFwTmFtZTogJ2NoaWxkcmVuJyxcbiAgICB9KTtcbiAgICB0aGlzLnZpc2l0VHJlZSh0cmVlLCAoaXRlbTogYW55LCBwYXJlbnQ6IGFueSwgZGVlcDogbnVtYmVyKSA9PiB7XG4gICAgICBpdGVtLmtleSA9IGl0ZW1bb3B0aW9ucy5pZE1hcE5hbWVdO1xuICAgICAgaXRlbS50aXRsZSA9IGl0ZW1bb3B0aW9ucy50aXRsZU1hcE5hbWVdO1xuICAgICAgaXRlbS5jaGVja2VkID0gaXRlbVtvcHRpb25zLmNoZWNrZWRNYXBuYW1lXTtcbiAgICAgIGl0ZW0uc2VsZWN0ZWQgPSBpdGVtW29wdGlvbnMuc2VsZWN0ZWRNYXBuYW1lXTtcbiAgICAgIGl0ZW0uZXhwYW5kZWQgPSBpdGVtW29wdGlvbnMuZXhwYW5kZWRNYXBuYW1lXTtcbiAgICAgIGl0ZW0uZGlzYWJsZWQgPSBpdGVtW29wdGlvbnMuZGlzYWJsZWRNYXBuYW1lXTtcbiAgICAgIGlmIChpdGVtW29wdGlvbnMuaXNMZWFmTWFwTmFtZV0gPT0gbnVsbCkge1xuICAgICAgICBpdGVtLmlzTGVhZiA9IGl0ZW0uY2hpbGRyZW4ubGVuZ3RoID09PSAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXRlbS5pc0xlYWYgPSBpdGVtW29wdGlvbnMuaXNMZWFmTWFwTmFtZV07XG4gICAgICB9XG4gICAgICBpZiAob3B0aW9ucy5jYikgb3B0aW9ucy5jYihpdGVtLCBwYXJlbnQsIGRlZXApO1xuICAgIH0pO1xuICAgIHJldHVybiB0cmVlLm1hcChub2RlID0+IG5ldyBOelRyZWVOb2RlKG5vZGUpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDDqcKAwpLDpcK9wpLDqMKuwr/DqcKXwq7DpsKVwrTDpMK4wqrDpsKgwpFcbiAgICovXG4gIHZpc2l0VHJlZShcbiAgICB0cmVlOiBhbnlbXSxcbiAgICBjYjogKGl0ZW06IGFueSwgcGFyZW50OiBhbnksIGRlZXA6IG51bWJlcikgPT4gdm9pZCxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqIMOlwq3CkMOpwqHCucOlwpDCjcOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmAnY2hpbGRyZW4nYCAqL1xuICAgICAgY2hpbGRyZW5NYXBOYW1lPzogc3RyaW5nO1xuICAgIH0sXG4gICkge1xuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKFxuICAgICAge1xuICAgICAgICBjaGlsZHJlbk1hcE5hbWU6IHRoaXMuYy5jaGlsZHJlbk1hcE5hbWUsXG4gICAgICB9LFxuICAgICAgb3B0aW9ucyxcbiAgICApO1xuICAgIGNvbnN0IGluRm4gPSAoZGF0YTogYW55W10sIHBhcmVudDogYW55LCBkZWVwOiBudW1iZXIpID0+IHtcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBkYXRhKSB7XG4gICAgICAgIGNiKGl0ZW0sIHBhcmVudCwgZGVlcCk7XG4gICAgICAgIGNvbnN0IGNoaWxkcmVuVmFsID0gaXRlbVtvcHRpb25zLmNoaWxkcmVuTWFwTmFtZV07XG4gICAgICAgIGlmIChjaGlsZHJlblZhbCAmJiBjaGlsZHJlblZhbC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaW5GbihjaGlsZHJlblZhbCwgaXRlbSwgZGVlcCArIDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBpbkZuKHRyZWUsIG51bGwsIDEpO1xuICB9XG5cbiAgLyoqXG4gICAqIMOowo7Ct8Olwo/ClsOmwonCgMOmwpzCicOlwrfCssOnwrvCj8OpwoDCicOkwrjCrcOnwprChCBga2V5YCDDpcKAwrxcbiAgICovXG4gIGdldEtleXNCeVRyZWVOb2RlKFxuICAgIHRyZWU6IE56VHJlZU5vZGVbXSxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqIMOmwpjCr8OlwpDCpsOlwozChcOlwpDCq8Olwo3CisOpwoDCicOnworCtsOmwoDCgcOnwprChMOlwoDCvMOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmB0cnVlYCAqL1xuICAgICAgaW5jbHVkZUhhbGZDaGVja2VkPzogYm9vbGVhbjtcbiAgICAgIC8qKiDDpsKYwq/DpcKQwqbDqcKHwo3DpsKWwrDDpsKMwofDpcKuwpogYGtleWAgw6nClMKuw6XCkMKNw6/CvMKMw6jCi8Klw6TCuMKNw6bCjMKHw6XCrsKaw6jCocKow6fCpMK6w6TCvcK/w6fClMKoIGBOelRyZWVOb2RlLmtleWAgw6XCgMK8ICovXG4gICAgICBrZXlNYXBOYW1lPzogc3RyaW5nO1xuICAgICAgLyoqIMOlwpvCnsOowrDCg8OvwrzCjMOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqsOlwoDCvCBga2V5YCDDpcKAwrzDr8K8wozDpMK8wpjDpcKFwojDp8K6wqfDqcKrwpjDpMK6wo7DpcKFwrbDpMK7wpYgKi9cbiAgICAgIGNiPzogKGl0ZW06IE56VHJlZU5vZGUsIHBhcmVudDogTnpUcmVlTm9kZSwgZGVlcDogbnVtYmVyKSA9PiBhbnk7XG4gICAgfSxcbiAgKTogYW55W10ge1xuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKFxuICAgICAge1xuICAgICAgICBpbmNsdWRlSGFsZkNoZWNrZWQ6IHRydWUsXG4gICAgICB9LFxuICAgICAgb3B0aW9ucyxcbiAgICApO1xuICAgIGNvbnN0IGtleXM6IGFueVtdID0gW107XG4gICAgdGhpcy52aXNpdFRyZWUoXG4gICAgICB0cmVlLFxuICAgICAgKGl0ZW06IE56VHJlZU5vZGUsIHBhcmVudDogTnpUcmVlTm9kZSwgZGVlcDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBpdGVtLmlzQ2hlY2tlZCB8fFxuICAgICAgICAgIChvcHRpb25zLmluY2x1ZGVIYWxmQ2hlY2tlZCAmJiBpdGVtLmlzSGFsZkNoZWNrZWQpXG4gICAgICAgICkge1xuICAgICAgICAgIGtleXMucHVzaChcbiAgICAgICAgICAgIG9wdGlvbnMuY2JcbiAgICAgICAgICAgICAgPyBvcHRpb25zLmNiKGl0ZW0sIHBhcmVudCwgZGVlcClcbiAgICAgICAgICAgICAgOiBvcHRpb25zLmtleU1hcE5hbWVcbiAgICAgICAgICAgICAgICA/IGl0ZW0ub3JpZ2luW29wdGlvbnMua2V5TWFwTmFtZV1cbiAgICAgICAgICAgICAgICA6IGl0ZW0ua2V5LFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgKTtcbiAgICByZXR1cm4ga2V5cztcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBEZWxvblV0aWxNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IERlbG9uVXRpbE1vZHVsZSxcbiAgICB9O1xuICB9XG59XG4iXSwibmFtZXMiOlsidHNsaWJfMS5fX3ZhbHVlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7O0FBVUEsU0FBZ0IsT0FBTyxDQUFDLEdBQVEsRUFBRSxJQUF1QixFQUFFLFlBQWtCO0lBQzNFLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUM7UUFBRSxPQUFPLFlBQVksQ0FBQztJQUNuRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUN4QixJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBRSxJQUFJLENBQUUsQ0FBQztLQUN4RDtJQUNELElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7O1lBQ2YsUUFBUSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0IsT0FBTyxPQUFPLFFBQVEsS0FBSyxXQUFXLEdBQUcsWUFBWSxHQUFHLFFBQVEsQ0FBQztLQUNsRTtJQUNELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFDLENB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