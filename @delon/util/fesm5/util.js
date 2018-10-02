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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        var copyTextArea = /** @type {?} */ (null);
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
            var node = /** @type {?} */ (_this.doc.createElement('script'));
            node.type = 'text/javascript';
            node.src = path;
            node.charset = 'utf-8';
            if (innerContent) {
                node.innerHTML = innerContent;
            }
            if ((/** @type {?} */ (node)).readyState) {
                // IE
                (/** @type {?} */ (node)).onreadystatechange = function () {
                    if ((/** @type {?} */ (node)).readyState === 'loaded' ||
                        (/** @type {?} */ (node)).readyState === 'complete') {
                        (/** @type {?} */ (node)).onreadystatechange = null;
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
            var node = /** @type {?} */ (_this.doc.createElement('link'));
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * 一套日常验证器
 */
var  /**
 * 一套日常验证器
 */
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
            (/** @type {?} */ (node)).outerHTML.toString().trim().length !== 0) {
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
 * \@Input() \@InputBoolean() visible: boolean = false;
 * \@Input() \@InputBoolean(null) visible: boolean = false;
 * ```
 * @param {?=} allowUndefined
 * @return {?}
 */
function InputBoolean(allowUndefined) {
    if (allowUndefined === void 0) { allowUndefined = false; }
    // tslint:disable-line:no-any
    return function InputBooleanPropDecorator(target, name) {
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
    return !isNaN(parseFloat(/** @type {?} */ (value))) && !isNaN(Number(value))
        ? Number(value)
        : fallbackValue;
}
/**
 * Input decorator that handle a prop to do get/set automatically with toNumber
 * \@example
 * ```typescript
 * \@Input() \@InputNumber() visible: number = 1;
 * \@Input() \@InputNumber(null) visible: number = 2;
 * ```
 * @param {?=} fallback
 * @return {?}
 */
function InputNumber(fallback) {
    if (fallback === void 0) { fallback = 0; }
    // tslint:disable-line:no-any
    return function InputBooleanPropDecorator(target, name) {
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ArrayService = /** @class */ (function () {
    function ArrayService(cog) {
        this.c = Object.assign(/** @type {?} */ ({
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
        }), cog && cog.array);
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { _Validators, format, yuan, getTimeDistance, LazyService, isNum, isInt, isDecimal, isIdCard, isMobile, isEmpty, toBoolean, InputBoolean, toNumber, InputNumber, deepGet, deepCopy, copy, updateHostClass, ArrayService, DelonUtilConfig, DelonUtilModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGRlbG9uL3V0aWwvc3JjL290aGVyL290aGVyLnRzIiwibmc6Ly9AZGVsb24vdXRpbC9zcmMvc3RyaW5nL3N0cmluZy50cyIsIm5nOi8vQGRlbG9uL3V0aWwvc3JjL3RpbWUvdGltZS50cyIsIm5nOi8vQGRlbG9uL3V0aWwvc3JjL2xhenkvbGF6eS5zZXJ2aWNlLnRzIiwibmc6Ly9AZGVsb24vdXRpbC9zcmMvdmFsaWRhdGUvdmFsaWRhdGUudHMiLCJuZzovL0BkZWxvbi91dGlsL3NyYy92YWxpZGF0ZS92YWxpZGF0b3JzLnRzIiwibmc6Ly9AZGVsb24vdXRpbC9zcmMvb3RoZXIvY2hlY2sudHMiLCJuZzovL0BkZWxvbi91dGlsL3NyYy9vdGhlci9zdHlsZS50cyIsIm5nOi8vQGRlbG9uL3V0aWwvc3JjL3V0aWwuY29uZmlnLnRzIiwibmc6Ly9AZGVsb24vdXRpbC9zcmMvYXJyYXkvYXJyYXkuc2VydmljZS50cyIsIm5nOi8vQGRlbG9uL3V0aWwvc3JjL3V0aWwubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHRlbmQgZnJvbSAnZXh0ZW5kJztcclxuXHJcbi8qKlxyXG4gKiDDp8KxwrvDpMK8wrwgYF8uZ2V0YMOvwrzCjMOmwqDCucOmwo3CriBgcGF0aGAgw6jCjsK3w6XCj8KWw6XCrsKJw6XChcKow6XCgMK8XHJcbiAqIGpzcGVyZjogaHR0cHM6Ly9qc3BlcmYuY29tL2VzLWRlZXAtZ2V0dHRwczovL2pzcGVyZi5jb20vZXMtZGVlcC1nZXRcclxuICpcclxuICogQHBhcmFtIG9iaiDDpsKVwrDDpsKNwq7DpsK6wpDDr8K8wozDpsKXwqDDpsKVwojDpsKXwrbDp8KbwrTDpsKOwqXDqMK/wpTDpcKbwp4gYGRlZmF1bHRWYWx1ZWAgw6XCgMK8XHJcbiAqIEBwYXJhbSBwYXRoIMOowovCpSBgbnVsbGDDo8KAwoFgW11gw6PCgMKBw6bCnMKqw6XCrsKaw6TCucKJw6XCj8KKw6bCnMKqw6bCicK+w6XCiMKww6bCl8K2w6jCv8KUw6XCm8KeIGBkZWZhdWx0VmFsdWVgIMOlwoDCvFxyXG4gKiBAcGFyYW0gZGVmYXVsdFZhbHVlIMOpwrvCmMOowq7CpMOlwoDCvFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRlZXBHZXQob2JqOiBhbnksIHBhdGg6IHN0cmluZyB8IHN0cmluZ1tdLCBkZWZhdWx0VmFsdWU/OiBhbnkpIHtcclxuICBpZiAoIW9iaiB8fCBwYXRoID09IG51bGwgfHwgcGF0aC5sZW5ndGggPT09IDApIHJldHVybiBkZWZhdWx0VmFsdWU7XHJcbiAgaWYgKCFBcnJheS5pc0FycmF5KHBhdGgpKSB7XHJcbiAgICBwYXRoID0gfnBhdGguaW5kZXhPZignLicpID8gcGF0aC5zcGxpdCgnLicpIDogWyBwYXRoIF07XHJcbiAgfVxyXG4gIGlmIChwYXRoLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgY29uc3QgY2hlY2tPYmogPSBvYmpbcGF0aFswXV07XHJcbiAgICByZXR1cm4gdHlwZW9mIGNoZWNrT2JqID09PSAndW5kZWZpbmVkJyA/IGRlZmF1bHRWYWx1ZSA6IGNoZWNrT2JqO1xyXG4gIH1cclxuICByZXR1cm4gcGF0aC5yZWR1Y2UoKG8sIGspID0+IChvIHx8IHt9KVtrXSwgb2JqKSB8fCBkZWZhdWx0VmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWVwQ29weShvYmo6IGFueSkge1xyXG4gIGNvbnN0IHJlc3VsdCA9IGV4dGVuZCh0cnVlLCB7IH0sIHsgXzogb2JqIH0pO1xyXG4gIHJldHVybiByZXN1bHQuXztcclxufVxyXG5cclxuLyoqIMOlwqTCjcOlwojCtsOlwobChcOlwq7CucOowofCs8OlwonCqsOowrTCtMOmwp3CvyAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29weSh2YWx1ZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZSwgcmVqZWN0KTogdm9pZCA9PiB7XHJcbiAgICBsZXQgY29weVRleHRBcmVhID0gbnVsbCBhcyBIVE1MVGV4dEFyZWFFbGVtZW50O1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29weVRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuICAgICAgY29weVRleHRBcmVhLnN0eWxlLmhlaWdodCA9ICcwcHgnO1xyXG4gICAgICBjb3B5VGV4dEFyZWEuc3R5bGUub3BhY2l0eSA9ICcwJztcclxuICAgICAgY29weVRleHRBcmVhLnN0eWxlLndpZHRoID0gJzBweCc7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29weVRleHRBcmVhKTtcclxuICAgICAgY29weVRleHRBcmVhLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgIGNvcHlUZXh0QXJlYS5zZWxlY3QoKTtcclxuICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcclxuICAgICAgcmVzb2x2ZSh2YWx1ZSk7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBpZiAoY29weVRleHRBcmVhICYmIGNvcHlUZXh0QXJlYS5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgY29weVRleHRBcmVhLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY29weVRleHRBcmVhKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IGRlZXBHZXQgfSBmcm9tICcuLi9vdGhlci9vdGhlcic7XHJcblxyXG4vKipcclxuICogw6XCrcKXw6fCrMKmw6TCuMKyw6bCoMK8w6XCvMKPw6XCjMKWXHJcbiAqIGBgYFxyXG4gKiBmb3JtYXQoJ3RoaXMgaXMgJHtuYW1lfScsIHsgbmFtZTogJ2FzZGYnIH0pXHJcbiAqIC8vIG91dHB1dDogdGhpcyBpcyBhc2RmXHJcbiAqIGZvcm1hdCgndGhpcyBpcyAke3VzZXIubmFtZX0nLCB7IHVzZXI6IHsgbmFtZTogJ2FzZGYnIH0gfSwgdHJ1ZSlcclxuICogLy8gb3V0cHV0OiB0aGlzIGlzIGFzZGZcclxuICogYGBgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0KHN0cjogc3RyaW5nLCBvYmo6IHt9LCBuZWVkRGVlcEdldCA9IGZhbHNlKTogc3RyaW5nIHtcclxuICByZXR1cm4gKHN0ciB8fCAnJykucmVwbGFjZShcclxuICAgIC9cXCR7KFtefV0rKX0vZyxcclxuICAgICh3b3JrOiBzdHJpbmcsIGtleTogc3RyaW5nKSA9PlxyXG4gICAgICBuZWVkRGVlcEdldFxyXG4gICAgICAgID8gZGVlcEdldChvYmosIGtleS5zcGxpdCgnLicpLCAnJylcclxuICAgICAgICA6IChvYmogfHwge30pW2tleV0gfHwgJycsXHJcbiAgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIMOowr3CrMOlwozClsOmwojCkFJNQsOlwoXCg8Olwq3Cl8OnwqzCpsOkwrjCslxyXG4gKiBAcGFyYW0gZGlnaXRzIMOlwr3Ck8OmwpXCsMOlwq3Cl8OnwrHCu8Olwp7Ci8OmwpfCtsOvwrzCjMOlwoXCgcOowq7CuMOmwozCh8Olwq7CmsOlwrDCj8OmwpXCsMOnwoLCucOlwpDCjsOmwpXCsMOlwq3Cl8OnwprChMOkwrjCqsOmwpXCsMOvwrzCjMOpwrvCmMOowq7CpDLDpMK9wo3DpcKwwo/DpsKVwrBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB5dWFuKHZhbHVlOiBhbnksIGRpZ2l0czogbnVtYmVyID0gMik6IHN0cmluZyB7XHJcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHZhbHVlID0gdmFsdWUudG9GaXhlZChkaWdpdHMpO1xyXG4gIHJldHVybiBgJnllbiAke3ZhbHVlfWA7XHJcbn1cclxuIiwiaW1wb3J0IHBhcnNlIGZyb20gJ2RhdGUtZm5zL3BhcnNlJztcclxuaW1wb3J0IHN0YXJ0T2ZXZWVrIGZyb20gJ2RhdGUtZm5zL3N0YXJ0X29mX3dlZWsnO1xyXG5pbXBvcnQgZW5kT2ZXZWVrIGZyb20gJ2RhdGUtZm5zL2VuZF9vZl93ZWVrJztcclxuaW1wb3J0IHN1YldlZWtzIGZyb20gJ2RhdGUtZm5zL3N1Yl93ZWVrcyc7XHJcbmltcG9ydCBzdGFydE9mTW9udGggZnJvbSAnZGF0ZS1mbnMvc3RhcnRfb2ZfbW9udGgnO1xyXG5pbXBvcnQgZW5kT2ZNb250aCBmcm9tICdkYXRlLWZucy9lbmRfb2ZfbW9udGgnO1xyXG5pbXBvcnQgc3ViTW9udGhzIGZyb20gJ2RhdGUtZm5zL3N1Yl9tb250aHMnO1xyXG5pbXBvcnQgc3RhcnRPZlllYXIgZnJvbSAnZGF0ZS1mbnMvc3RhcnRfb2ZfeWVhcic7XHJcbmltcG9ydCBlbmRPZlllYXIgZnJvbSAnZGF0ZS1mbnMvZW5kX29mX3llYXInO1xyXG5pbXBvcnQgc3ViWWVhcnMgZnJvbSAnZGF0ZS1mbnMvc3ViX3llYXJzJztcclxuaW1wb3J0IGFkZERheXMgZnJvbSAnZGF0ZS1mbnMvYWRkX2RheXMnO1xyXG5cclxuLyoqXHJcbiAqIMOowo7Ct8Olwo/ClsOmwpfCtsOpwpfCtMOowozCg8OlwpvCtFxyXG4gKiBAcGFyYW0gdHlwZSDDp8KxwrvDpcKewovDr8K8wozDpcK4wqYgYC1gIMOowqHCqMOnwqTCusOowr/Ch8Olwo7Cu8OkwrjCgMOkwrjCqsOmwpfCtsOpwpfCtMOvwrzCjMOowovCpcOmwozCh8Olwq7CmiBgbnVtYmVyYCDDqMKhwqjDp8KkwrrDpcKkwqnDpsKVwrBcclxuICogQHBhcmFtIHRpbWUgw6XCvMKAw6XCp8KLw6bCl8K2w6nCl8K0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGltZURpc3RhbmNlKFxyXG4gIHR5cGU6XHJcbiAgICB8ICd0b2RheSdcclxuICAgIHwgJy10b2RheSdcclxuICAgIHwgJ3dlZWsnXHJcbiAgICB8ICctd2VlaydcclxuICAgIHwgJ21vbnRoJ1xyXG4gICAgfCAnLW1vbnRoJ1xyXG4gICAgfCAneWVhcidcclxuICAgIHwgJy15ZWFyJ1xyXG4gICAgfCBudW1iZXIsXHJcbiAgdGltZT86IERhdGUgfCBzdHJpbmcgfCBudW1iZXIsXHJcbik6IFtEYXRlLCBEYXRlXSB7XHJcbiAgdGltZSA9IHBhcnNlKHRpbWUgfHwgbmV3IERhdGUoKSk7XHJcblxyXG4gIHN3aXRjaCAodHlwZSkge1xyXG4gICAgY2FzZSAndG9kYXknOlxyXG4gICAgICByZXR1cm4gW3RpbWUsIHRpbWVdO1xyXG4gICAgY2FzZSAnLXRvZGF5JzpcclxuICAgICAgcmV0dXJuIFthZGREYXlzKHRpbWUsIC0xKSwgdGltZV07XHJcbiAgICBjYXNlICd3ZWVrJzpcclxuICAgICAgcmV0dXJuIFtzdGFydE9mV2Vlayh0aW1lKSwgZW5kT2ZXZWVrKHRpbWUpXTtcclxuICAgIGNhc2UgJy13ZWVrJzpcclxuICAgICAgcmV0dXJuIFtzdGFydE9mV2VlayhzdWJXZWVrcyh0aW1lLCAxKSksIGVuZE9mV2VlayhzdWJXZWVrcyh0aW1lLCAxKSldO1xyXG4gICAgY2FzZSAnbW9udGgnOlxyXG4gICAgICByZXR1cm4gW3N0YXJ0T2ZNb250aCh0aW1lKSwgZW5kT2ZNb250aCh0aW1lKV07XHJcbiAgICBjYXNlICctbW9udGgnOlxyXG4gICAgICByZXR1cm4gW3N0YXJ0T2ZNb250aChzdWJNb250aHModGltZSwgMSkpLCBlbmRPZk1vbnRoKHN1Yk1vbnRocyh0aW1lLCAxKSldO1xyXG4gICAgY2FzZSAneWVhcic6XHJcbiAgICAgIHJldHVybiBbc3RhcnRPZlllYXIodGltZSksIGVuZE9mWWVhcih0aW1lKV07XHJcbiAgICBjYXNlICcteWVhcic6XHJcbiAgICAgIHJldHVybiBbc3RhcnRPZlllYXIoc3ViWWVhcnModGltZSwgMSkpLCBlbmRPZlllYXIoc3ViWWVhcnModGltZSwgMSkpXTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiB0eXBlID4gMFxyXG4gICAgICAgID8gW3RpbWUsIGFkZERheXModGltZSwgdHlwZSldXHJcbiAgICAgICAgOiBbYWRkRGF5cyh0aW1lLCB0eXBlKSwgdGltZV07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBzaGFyZSwgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMYXp5UmVzdWx0IHtcclxuICBwYXRoOiBzdHJpbmc7XHJcbiAgbG9hZGVkOiBib29sZWFuO1xyXG4gIHN0YXR1czogJ29rJyB8ICdlcnJvcic7XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBMYXp5U2VydmljZSB7XHJcbiAgcHJpdmF0ZSBsaXN0OiBhbnkgPSB7fTtcclxuICBwcml2YXRlIGNhY2hlZDogYW55ID0ge307XHJcbiAgcHJpdmF0ZSBfbm90aWZ5OiBCZWhhdmlvclN1YmplY3Q8TGF6eVJlc3VsdFtdPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8XHJcbiAgICBMYXp5UmVzdWx0W11cclxuICA+KFtdKTtcclxuXHJcbiAgY29uc3RydWN0b3IoQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IGFueSkge31cclxuXHJcbiAgZ2V0IGNoYW5nZSgpOiBPYnNlcnZhYmxlPExhenlSZXN1bHRbXT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX25vdGlmeS5hc09ic2VydmFibGUoKS5waXBlKFxyXG4gICAgICBzaGFyZSgpLFxyXG4gICAgICBmaWx0ZXIobHMgPT4gbHMubGVuZ3RoICE9PSAwKSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjbGVhcigpOiB2b2lkIHtcclxuICAgIHRoaXMubGlzdCA9IHt9O1xyXG4gICAgdGhpcy5jYWNoZWQgPSB7fTtcclxuICB9XHJcblxyXG4gIGxvYWQocGF0aHM6IHN0cmluZyB8IHN0cmluZ1tdKTogUHJvbWlzZTxMYXp5UmVzdWx0W10+IHtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheShwYXRocykpIHBhdGhzID0gW3BhdGhzXTtcclxuXHJcbiAgICBjb25zdCBwcm9taXNlczogUHJvbWlzZTxMYXp5UmVzdWx0PltdID0gW107XHJcbiAgICBwYXRocy5mb3JFYWNoKHBhdGggPT4ge1xyXG4gICAgICBpZiAocGF0aC5lbmRzV2l0aCgnLmpzJykpIHtcclxuICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMubG9hZFNjcmlwdChwYXRoKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcHJvbWlzZXMucHVzaCh0aGlzLmxvYWRTdHlsZShwYXRoKSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbihyZXMgPT4ge1xyXG4gICAgICB0aGlzLl9ub3RpZnkubmV4dChyZXMpO1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlcyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGxvYWRTY3JpcHQocGF0aDogc3RyaW5nLCBpbm5lckNvbnRlbnQ/OiBzdHJpbmcpOiBQcm9taXNlPExhenlSZXN1bHQ+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgaWYgKHRoaXMubGlzdFtwYXRoXSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIHJlc29sdmUodGhpcy5jYWNoZWRbcGF0aF0pO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5saXN0W3BhdGhdID0gdHJ1ZTtcclxuICAgICAgY29uc3Qgb25TdWNjZXNzID0gKGl0ZW06IGFueSkgPT4ge1xyXG4gICAgICAgIHRoaXMuY2FjaGVkW3BhdGhdID0gaXRlbTtcclxuICAgICAgICByZXNvbHZlKGl0ZW0pO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuZG9jLmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpIGFzIEhUTUxTY3JpcHRFbGVtZW50O1xyXG4gICAgICBub2RlLnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcclxuICAgICAgbm9kZS5zcmMgPSBwYXRoO1xyXG4gICAgICBub2RlLmNoYXJzZXQgPSAndXRmLTgnO1xyXG4gICAgICBpZiAoaW5uZXJDb250ZW50KSB7XHJcbiAgICAgICAgbm9kZS5pbm5lckhUTUwgPSBpbm5lckNvbnRlbnQ7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCg8YW55Pm5vZGUpLnJlYWR5U3RhdGUpIHtcclxuICAgICAgICAvLyBJRVxyXG4gICAgICAgICg8YW55Pm5vZGUpLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgKDxhbnk+bm9kZSkucmVhZHlTdGF0ZSA9PT0gJ2xvYWRlZCcgfHxcclxuICAgICAgICAgICAgKDxhbnk+bm9kZSkucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJ1xyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICg8YW55Pm5vZGUpLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XHJcbiAgICAgICAgICAgIG9uU3VjY2Vzcyh7XHJcbiAgICAgICAgICAgICAgcGF0aDogcGF0aCxcclxuICAgICAgICAgICAgICBsb2FkZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgc3RhdHVzOiAnb2snLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5vZGUub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgb25TdWNjZXNzKHtcclxuICAgICAgICAgICAgcGF0aDogcGF0aCxcclxuICAgICAgICAgICAgbG9hZGVkOiB0cnVlLFxyXG4gICAgICAgICAgICBzdGF0dXM6ICdvaycsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIG5vZGUub25lcnJvciA9IChlcnJvcjogYW55KSA9PlxyXG4gICAgICAgIG9uU3VjY2Vzcyh7XHJcbiAgICAgICAgICBwYXRoOiBwYXRoLFxyXG4gICAgICAgICAgbG9hZGVkOiBmYWxzZSxcclxuICAgICAgICAgIHN0YXR1czogJ2Vycm9yJyxcclxuICAgICAgICB9KTtcclxuICAgICAgdGhpcy5kb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChub2RlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbG9hZFN0eWxlKFxyXG4gICAgcGF0aDogc3RyaW5nLFxyXG4gICAgcmVsID0gJ3N0eWxlc2hlZXQnLFxyXG4gICAgaW5uZXJDb250ZW50Pzogc3RyaW5nLFxyXG4gICk6IFByb21pc2U8TGF6eVJlc3VsdD4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICBpZiAodGhpcy5saXN0W3BhdGhdID09PSB0cnVlKSB7XHJcbiAgICAgICAgcmVzb2x2ZSh0aGlzLmNhY2hlZFtwYXRoXSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmxpc3RbcGF0aF0gPSB0cnVlO1xyXG5cclxuICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuZG9jLmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKSBhcyBIVE1MTGlua0VsZW1lbnQ7XHJcbiAgICAgIG5vZGUucmVsID0gcmVsO1xyXG4gICAgICBub2RlLnR5cGUgPSAndGV4dC9jc3MnO1xyXG4gICAgICBub2RlLmhyZWYgPSBwYXRoO1xyXG4gICAgICBpZiAoaW5uZXJDb250ZW50KSB7XHJcbiAgICAgICAgbm9kZS5pbm5lckhUTUwgPSBpbm5lckNvbnRlbnQ7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5kb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChub2RlKTtcclxuICAgICAgY29uc3QgaXRlbTogTGF6eVJlc3VsdCA9IHtcclxuICAgICAgICBwYXRoOiBwYXRoLFxyXG4gICAgICAgIGxvYWRlZDogdHJ1ZSxcclxuICAgICAgICBzdGF0dXM6ICdvaycsXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuY2FjaGVkW3BhdGhdID0gaXRlbTtcclxuICAgICAgcmVzb2x2ZShpdGVtKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCIvKiogw6bCmMKvw6XCkMKmw6TCuMK6w6bClcKww6XCrcKXICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc051bSh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgcmV0dXJuIC9eKCgtP1xcZCtcXC5cXGQrKXwoLT9cXGQrKXwoLT9cXC5cXGQrKSkkLy50ZXN0KHZhbHVlLnRvU3RyaW5nKCkpO1xyXG59XHJcblxyXG4vKiogw6bCmMKvw6XCkMKmw6TCuMK6w6bClcK0w6bClcKwICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0ludCh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnRyaXBsZS1lcXVhbHNcclxuICByZXR1cm4gaXNOdW0odmFsdWUpICYmIHBhcnNlSW50KHZhbHVlLnRvU3RyaW5nKCksIDEwKSA9PSB2YWx1ZTtcclxufVxyXG5cclxuLyoqIMOmwpjCr8OlwpDCpsOkwrjCusOlwrDCj8OmwpXCsCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNEZWNpbWFsKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiBib29sZWFuIHtcclxuICByZXR1cm4gaXNOdW0odmFsdWUpICYmICFpc0ludCh2YWx1ZSk7XHJcbn1cclxuXHJcbi8qKiDDpsKYwq/DpcKQwqbDpMK4wrrDqMK6wqvDpMK7wr3DqMKvwoEgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzSWRDYXJkKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcclxuICByZXR1cm4gKFxyXG4gICAgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiAvKF5cXGR7MTV9JCl8KF5cXGR7MTd9KFswLTldfFgpJCkvaS50ZXN0KHZhbHVlKVxyXG4gICk7XHJcbn1cclxuXHJcbi8qKiDDpsKYwq/DpcKQwqbDpMK4wrrDpsKJwovDpsKcwrrDpcKPwrcgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTW9iaWxlKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcclxuICByZXR1cm4gKFxyXG4gICAgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJlxyXG4gICAgL14oMHxcXCs/ODZ8MTc5NTEpPygxM1swLTldfDE1WzAtOV18MTdbMDY3OF18MThbMC05XXwxNFs1N10pWzAtOV17OH0kLy50ZXN0KFxyXG4gICAgICB2YWx1ZSxcclxuICAgIClcclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgVmFsaWRhdGlvbkVycm9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgaXNOdW0sIGlzSW50LCBpc0RlY2ltYWwsIGlzSWRDYXJkLCBpc01vYmlsZSB9IGZyb20gJy4vdmFsaWRhdGUnO1xyXG5cclxuLyoqIMOkwrjCgMOlwqXCl8OmwpfCpcOlwrjCuMOpwqrCjMOowq/CgcOlwpnCqCAqL1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y2xhc3MtbmFtZVxyXG5leHBvcnQgY2xhc3MgX1ZhbGlkYXRvcnMge1xyXG4gIC8qKiDDpsKYwq/DpcKQwqbDpMK4wrrDpsKVwrDDpcKtwpcgKi9cclxuICBzdGF0aWMgbnVtKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgIHJldHVybiBpc051bShjb250cm9sLnZhbHVlKSA/IG51bGwgOiB7IG51bTogdHJ1ZSB9O1xyXG4gIH1cclxuXHJcbiAgLyoqIMOmwpjCr8OlwpDCpsOkwrjCusOmwpXCtMOmwpXCsCAqL1xyXG4gIHN0YXRpYyBpbnQoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xyXG4gICAgcmV0dXJuIGlzSW50KGNvbnRyb2wudmFsdWUpID8gbnVsbCA6IHsgaW50OiB0cnVlIH07XHJcbiAgfVxyXG5cclxuICAvKiogw6bCmMKvw6XCkMKmw6TCuMK6w6XCsMKPw6bClcKwICovXHJcbiAgc3RhdGljIGRlY2ltYWwoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xyXG4gICAgcmV0dXJuIGlzRGVjaW1hbChjb250cm9sLnZhbHVlKSA/IG51bGwgOiB7IGRlY2ltYWw6IHRydWUgfTtcclxuICB9XHJcblxyXG4gIC8qKiDDpsKYwq/DpcKQwqbDpMK4wrrDqMK6wqvDpMK7wr3DqMKvwoEgKi9cclxuICBzdGF0aWMgaWRDYXJkKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgIHJldHVybiBpc0lkQ2FyZChjb250cm9sLnZhbHVlKSA/IG51bGwgOiB7IGlkQ2FyZDogdHJ1ZSB9O1xyXG4gIH1cclxuXHJcbiAgLyoqIMOmwpjCr8OlwpDCpsOkwrjCusOmwonCi8OmwpzCusOlwo/CtyAqL1xyXG4gIHN0YXRpYyBtb2JpbGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xyXG4gICAgcmV0dXJuIGlzTW9iaWxlKGNvbnRyb2wudmFsdWUpID8gbnVsbCA6IHsgbW9iaWxlOiB0cnVlIH07XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBpc0VtcHR5KGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XHJcbiAgY29uc3Qgbm9kZXMgPSBlbGVtZW50LmNoaWxkTm9kZXM7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3Qgbm9kZSA9IG5vZGVzLml0ZW0oaSk7XHJcbiAgICBpZiAoXHJcbiAgICAgIG5vZGUubm9kZVR5cGUgPT09IDEgJiZcclxuICAgICAgKG5vZGUgYXMgSFRNTEVsZW1lbnQpLm91dGVySFRNTC50b1N0cmluZygpLnRyaW0oKS5sZW5ndGggIT09IDBcclxuICAgICkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICBub2RlLm5vZGVUeXBlID09PSAzICYmXHJcbiAgICAgIG5vZGUudGV4dENvbnRlbnQudG9TdHJpbmcoKS50cmltKCkubGVuZ3RoICE9PSAwXHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvQm9vbGVhbihcclxuICB2YWx1ZTogYW55LFxyXG4gIGFsbG93VW5kZWZpbmVkID0gZmFsc2UsXHJcbik6IGJvb2xlYW4ge1xyXG4gIHJldHVybiBhbGxvd1VuZGVmaW5lZCAmJiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnXHJcbiAgICA/IHVuZGVmaW5lZFxyXG4gICAgOiB2YWx1ZSAhPSBudWxsICYmIGAke3ZhbHVlfWAgIT09ICdmYWxzZSc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnB1dCBkZWNvcmF0b3IgdGhhdCBoYW5kbGUgYSBwcm9wIHRvIGRvIGdldC9zZXQgYXV0b21hdGljYWxseSB3aXRoIHRvQm9vbGVhblxyXG4gKiBAZXhhbXBsZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB2aXNpYmxlOiBib29sZWFuID0gZmFsc2U7XHJcbiAqIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4obnVsbCkgdmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gKiBgYGBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBJbnB1dEJvb2xlYW4oYWxsb3dVbmRlZmluZWQgPSBmYWxzZSk6IGFueSB7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIElucHV0Qm9vbGVhblByb3BEZWNvcmF0b3IgKHRhcmdldDogb2JqZWN0LCBuYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIC8vIEFkZCBvdXIgb3duIHByaXZhdGUgcHJvcFxyXG4gICAgY29uc3QgcHJpdmF0ZVByb3BOYW1lID0gYCQkX18ke25hbWV9YDtcclxuXHJcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRhcmdldCwgcHJpdmF0ZVByb3BOYW1lKSkge1xyXG4gICAgICBjb25zb2xlLndhcm4oYFRoZSBwcm9wIFwiJHtwcml2YXRlUHJvcE5hbWV9XCIgaXMgYWxyZWFkeSBleGlzdCwgaXQgd2lsbCBiZSBvdmVycmlkZWQgYnkgSW5wdXRCb29sZWFuIGRlY29yYXRvci5gKTtcclxuICAgIH1cclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcml2YXRlUHJvcE5hbWUsIHtcclxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgICB3cml0YWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgbmFtZSwge1xyXG4gICAgICBnZXQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXNbIHByaXZhdGVQcm9wTmFtZSBdOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWludmFsaWQtdGhpc1xyXG4gICAgICB9LFxyXG4gICAgICBzZXQodmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXNbIHByaXZhdGVQcm9wTmFtZSBdID0gdG9Cb29sZWFuKHZhbHVlLCBhbGxvd1VuZGVmaW5lZCk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8taW52YWxpZC10aGlzXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b051bWJlcih2YWx1ZTogYW55KTogbnVtYmVyO1xyXG5leHBvcnQgZnVuY3Rpb24gdG9OdW1iZXI8RD4odmFsdWU6IGFueSwgZmFsbGJhY2s6IEQpOiBudW1iZXIgfCBEO1xyXG5leHBvcnQgZnVuY3Rpb24gdG9OdW1iZXIodmFsdWU6IGFueSwgZmFsbGJhY2tWYWx1ZSA9IDApIHtcclxuICByZXR1cm4gIWlzTmFOKHBhcnNlRmxvYXQodmFsdWUgYXMgYW55KSkgJiYgIWlzTmFOKE51bWJlcih2YWx1ZSkpXHJcbiAgICA/IE51bWJlcih2YWx1ZSlcclxuICAgIDogZmFsbGJhY2tWYWx1ZTtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBJbnB1dCBkZWNvcmF0b3IgdGhhdCBoYW5kbGUgYSBwcm9wIHRvIGRvIGdldC9zZXQgYXV0b21hdGljYWxseSB3aXRoIHRvTnVtYmVyXHJcbiAqIEBleGFtcGxlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogQElucHV0KCkgQElucHV0TnVtYmVyKCkgdmlzaWJsZTogbnVtYmVyID0gMTtcclxuICogQElucHV0KCkgQElucHV0TnVtYmVyKG51bGwpIHZpc2libGU6IG51bWJlciA9IDI7XHJcbiAqIGBgYFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIElucHV0TnVtYmVyKGZhbGxiYWNrID0gMCk6IGFueSB7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIElucHV0Qm9vbGVhblByb3BEZWNvcmF0b3IgKHRhcmdldDogb2JqZWN0LCBuYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIC8vIEFkZCBvdXIgb3duIHByaXZhdGUgcHJvcFxyXG4gICAgY29uc3QgcHJpdmF0ZVByb3BOYW1lID0gYCQkX18ke25hbWV9YDtcclxuXHJcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRhcmdldCwgcHJpdmF0ZVByb3BOYW1lKSkge1xyXG4gICAgICBjb25zb2xlLndhcm4oYFRoZSBwcm9wIFwiJHtwcml2YXRlUHJvcE5hbWV9XCIgaXMgYWxyZWFkeSBleGlzdCwgaXQgd2lsbCBiZSBvdmVycmlkZWQgYnkgSW5wdXROdW1iZXIgZGVjb3JhdG9yLmApO1xyXG4gICAgfVxyXG5cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByaXZhdGVQcm9wTmFtZSwge1xyXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICAgIHdyaXRhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBuYW1lLCB7XHJcbiAgICAgIGdldCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpc1sgcHJpdmF0ZVByb3BOYW1lIF07IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8taW52YWxpZC10aGlzXHJcbiAgICAgIH0sXHJcbiAgICAgIHNldCh2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpc1sgcHJpdmF0ZVByb3BOYW1lIF0gPSB0b051bWJlcih2YWx1ZSwgZmFsbGJhY2spOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWludmFsaWQtdGhpc1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG59XHJcbiIsImltcG9ydCB7IFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5mdW5jdGlvbiByZW1vdmVDbGFzcyhcbiAgZWw6IEhUTUxFbGVtZW50LFxuICBjbGFzc01hcDogb2JqZWN0LFxuICByZW5kZXJlcjogUmVuZGVyZXIyLFxuKTogdm9pZCB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpmb3JpblxuICBmb3IgKGNvbnN0IGkgaW4gY2xhc3NNYXApIHtcbiAgICByZW5kZXJlci5yZW1vdmVDbGFzcyhlbCwgaSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkQ2xhc3MoXG4gIGVsOiBIVE1MRWxlbWVudCxcbiAgY2xhc3NNYXA6IG9iamVjdCxcbiAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbik6IHZvaWQge1xuICBmb3IgKGNvbnN0IGkgaW4gY2xhc3NNYXApIHtcbiAgICBpZiAoY2xhc3NNYXBbaV0pIHtcbiAgICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsLCBpKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiDDpsKbwrTDpsKWwrDDpcKuwr/DpMK4wrvDp8K7woTDpMK7wrbDpsKgwrfDpcK8wo8gYGNsYXNzYMOvwrzCjMOkwr7Ci8OlwqbCgsOvwrzCmlxuICpcbiAqIGBgYHRzXG4gKiB1cGRhdGVIb3N0Q2xhc3MoXG4gKiAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LFxuICogIHtcbiAqICAgIFsgJ2NsYXNzbmFtZScgXTogdHJ1ZSxcbiAqICAgIFsgJ2NsYXNzbmFtZScgXTogdGhpcy50eXBlID09PSAnMScsXG4gKiAgICBbIHRoaXMuY2xzIF06IHRydWUsXG4gKiAgICBbIGBhLSR7dGhpcy5jbHN9YCBdOiB0cnVlXG4gKiAgfSxcbiAqICB0aGlzLnJlbmRlcmVyKVxuICogYGBgXG4gKlxuICogQHBhcmFtIFtjbGVhbkFsbF0gw6bCmMKvw6XCkMKmw6XChcKIw6bCuMKFw6fCkMKGw6bCicKAw6bCnMKJIGBjbGFzc2Agw6XCgMK8w6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYGZhbHNlYFxuICovXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlSG9zdENsYXNzKFxuICBlbDogSFRNTEVsZW1lbnQsXG4gIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gIGNsYXNzTWFwOiBvYmplY3QsXG4gIGNsZWFuQWxsID0gZmFsc2Vcbik6IHZvaWQge1xuICBpZiAoY2xlYW5BbGwgPT09IHRydWUpIHtcbiAgICByZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUoZWwsICdjbGFzcycpO1xuICB9IGVsc2Uge1xuICAgIHJlbW92ZUNsYXNzKGVsLCBjbGFzc01hcCwgcmVuZGVyZXIpO1xuICB9XG4gIGNsYXNzTWFwID0geyAuLi5jbGFzc01hcCB9O1xuICBhZGRDbGFzcyhlbCwgY2xhc3NNYXAsIHJlbmRlcmVyKTtcbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQXJyYXlDb25maWcgfSBmcm9tICcuL2FycmF5L2FycmF5LmNvbmZpZyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgRGVsb25VdGlsQ29uZmlnIHtcclxuICBhcnJheT86IEFycmF5Q29uZmlnO1xyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTnpUcmVlTm9kZSB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xyXG5pbXBvcnQgeyBEZWxvblV0aWxDb25maWcgfSBmcm9tICcuLi91dGlsLmNvbmZpZyc7XHJcbmltcG9ydCB7IEFycmF5Q29uZmlnIH0gZnJvbSAnLi9hcnJheS5jb25maWcnO1xyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIEFycmF5U2VydmljZSB7XHJcbiAgcHJpdmF0ZSBjOiBBcnJheUNvbmZpZztcclxuICBjb25zdHJ1Y3Rvcihjb2c6IERlbG9uVXRpbENvbmZpZykge1xyXG4gICAgdGhpcy5jID0gT2JqZWN0LmFzc2lnbihcclxuICAgICAgPEFycmF5Q29uZmlnPntcclxuICAgICAgICBkZWVwTWFwTmFtZTogJ2RlZXAnLFxyXG4gICAgICAgIHBhcmVudE1hcE5hbWU6ICdwYXJlbnQnLFxyXG4gICAgICAgIGlkTWFwTmFtZTogJ2lkJyxcclxuICAgICAgICBwYXJlbnRJZE1hcE5hbWU6ICdwYXJlbnRfaWQnLFxyXG4gICAgICAgIGNoaWxkcmVuTWFwTmFtZTogJ2NoaWxkcmVuJyxcclxuICAgICAgICB0aXRsZU1hcE5hbWU6ICd0aXRsZScsXHJcbiAgICAgICAgY2hlY2tlZE1hcG5hbWU6ICdjaGVja2VkJyxcclxuICAgICAgICBzZWxlY3RlZE1hcG5hbWU6ICdzZWxlY3RlZCcsXHJcbiAgICAgICAgZXhwYW5kZWRNYXBuYW1lOiAnZXhwYW5kZWQnLFxyXG4gICAgICAgIGRpc2FibGVkTWFwbmFtZTogJ2Rpc2FibGVkJyxcclxuICAgICAgfSxcclxuICAgICAgY29nICYmIGNvZy5hcnJheSxcclxuICAgICk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIMOlwrDChsOmwqDCkcOnwrvCk8Omwp7ChMOowr3CrMOmwo3CosOmwojCkMOmwpXCsMOnwrvChMOnwrvCk8Omwp7ChFxyXG4gICAqL1xyXG4gIHRyZWVUb0FycihcclxuICAgIHRyZWU6IGFueVtdLFxyXG4gICAgb3B0aW9ucz86IHtcclxuICAgICAgLyoqIMOmwrfCscOlwrrCpsOpwqHCucOlwpDCjcOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmAnZGVlcCdgICovXHJcbiAgICAgIGRlZXBNYXBOYW1lPzogc3RyaW5nO1xyXG4gICAgICAvKiogw6bCicKBw6XCucKzw6XCkMKOw6bClcKww6fCu8KEw6fCmsKEw6fCiMK2w6bClcKww6bCjcKuw6nCocK5w6XCkMKNw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYCdwYXJlbnQnYCAqL1xyXG4gICAgICBwYXJlbnRNYXBOYW1lPzogc3RyaW5nO1xyXG4gICAgICAvKiogw6bCusKQw6bClcKww6bCjcKuw6XCrcKQw6nCocK5w6XCkMKNw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYCdjaGlsZHJlbidgICovXHJcbiAgICAgIGNoaWxkcmVuTWFwTmFtZT86IHN0cmluZztcclxuICAgICAgLyoqIMOmwpjCr8OlwpDCpsOnwqfCu8OpwpnCpCBgY2hpbGRyZW5gIMOoworCgsOnwoLCucOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmB0cnVlYCAqL1xyXG4gICAgICBjbGVhckNoaWxkcmVuPzogYm9vbGVhbjtcclxuICAgICAgLyoqIMOowr3CrMOmwo3CosOmwojCkMOmwpXCsMOnwrvChMOnwrvCk8Omwp7ChMOmwpfCtsOlwpvCnsOowrDCgyAqL1xyXG4gICAgICBjYj86IChpdGVtOiBhbnksIHBhcmVudDogYW55LCBkZWVwOiBudW1iZXIpID0+IHZvaWQ7XHJcbiAgICB9LFxyXG4gICk6IGFueVtdIHtcclxuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKFxyXG4gICAgICB7XHJcbiAgICAgICAgZGVlcE1hcE5hbWU6IHRoaXMuYy5kZWVwTWFwTmFtZSxcclxuICAgICAgICBwYXJlbnRNYXBOYW1lOiB0aGlzLmMucGFyZW50TWFwTmFtZSxcclxuICAgICAgICBjaGlsZHJlbk1hcE5hbWU6IHRoaXMuYy5jaGlsZHJlbk1hcE5hbWUsXHJcbiAgICAgICAgY2xlYXJDaGlsZHJlbjogdHJ1ZSxcclxuICAgICAgICBjYjogbnVsbCxcclxuICAgICAgfSxcclxuICAgICAgb3B0aW9ucyxcclxuICAgICk7XHJcbiAgICBjb25zdCByZXN1bHQ6IGFueVtdID0gW107XHJcbiAgICBjb25zdCBpbkZuID0gKGxpc3Q6IGFueVtdLCBwYXJlbnQ6IGFueSwgZGVlcDogbnVtYmVyKSA9PiB7XHJcbiAgICAgIGZvciAoY29uc3QgaSBvZiBsaXN0KSB7XHJcbiAgICAgICAgaVtvcHRpb25zLmRlZXBNYXBOYW1lXSA9IGRlZXA7XHJcbiAgICAgICAgaVtvcHRpb25zLnBhcmVudE1hcE5hbWVdID0gcGFyZW50O1xyXG4gICAgICAgIGlmIChvcHRpb25zLmNiKSBvcHRpb25zLmNiKGksIHBhcmVudCwgZGVlcCk7XHJcbiAgICAgICAgcmVzdWx0LnB1c2goaSk7XHJcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBpW29wdGlvbnMuY2hpbGRyZW5NYXBOYW1lXTtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBjaGlsZHJlbiAhPSBudWxsICYmXHJcbiAgICAgICAgICBBcnJheS5pc0FycmF5KGNoaWxkcmVuKSAmJlxyXG4gICAgICAgICAgY2hpbGRyZW4ubGVuZ3RoID4gMFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgaW5GbihjaGlsZHJlbiwgaSwgZGVlcCArIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob3B0aW9ucy5jbGVhckNoaWxkcmVuKSBkZWxldGUgaVtvcHRpb25zLmNoaWxkcmVuTWFwTmFtZV07XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBpbkZuKHRyZWUsIDEsIG51bGwpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIMOmwpXCsMOnwrvChMOowr3CrMOmwo3CosOmwojCkMOmwqDCkcOmwpXCsMOmwo3CrlxyXG4gICAqL1xyXG4gIGFyclRvVHJlZShcclxuICAgIGFycjogYW55W10sXHJcbiAgICBvcHRpb25zPzoge1xyXG4gICAgICAvKiogw6fCvMKWw6XCj8K3w6nCocK5w6XCkMKNw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYCdpZCdgICovXHJcbiAgICAgIGlkTWFwTmFtZT86IHN0cmluZztcclxuICAgICAgLyoqIMOnwojCtsOnwrzClsOlwo/Ct8OpwqHCucOlwpDCjcOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmAncGFyZW50X2lkJ2AgKi9cclxuICAgICAgcGFyZW50SWRNYXBOYW1lPzogc3RyaW5nO1xyXG4gICAgICAvKiogw6XCrcKQw6nCocK5w6XCkMKNw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYCdjaGlsZHJlbidgICovXHJcbiAgICAgIGNoaWxkcmVuTWFwTmFtZT86IHN0cmluZztcclxuICAgICAgLyoqIMOowr3CrMOmwo3CosOmwojCkMOmwqDCkcOmwpXCsMOmwo3CrsOmwpfCtsOlwpvCnsOowrDCgyAqL1xyXG4gICAgICBjYj86IChpdGVtOiBhbnkpID0+IHZvaWQ7XHJcbiAgICB9LFxyXG4gICk6IGFueVtdIHtcclxuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKFxyXG4gICAgICB7XHJcbiAgICAgICAgaWRNYXBOYW1lOiB0aGlzLmMuaWRNYXBOYW1lLFxyXG4gICAgICAgIHBhcmVudElkTWFwTmFtZTogdGhpcy5jLnBhcmVudElkTWFwTmFtZSxcclxuICAgICAgICBjaGlsZHJlbk1hcE5hbWU6IHRoaXMuYy5jaGlsZHJlbk1hcE5hbWUsXHJcbiAgICAgICAgY2I6IG51bGwsXHJcbiAgICAgIH0sXHJcbiAgICAgIG9wdGlvbnMsXHJcbiAgICApO1xyXG4gICAgY29uc3QgdHJlZTogYW55W10gPSBbXTtcclxuICAgIGNvbnN0IGNoaWxkcmVuT2YgPSB7fTtcclxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBhcnIpIHtcclxuICAgICAgY29uc3QgaWQgPSBpdGVtW29wdGlvbnMuaWRNYXBOYW1lXSxcclxuICAgICAgICBwaWQgPSBpdGVtW29wdGlvbnMucGFyZW50SWRNYXBOYW1lXTtcclxuICAgICAgY2hpbGRyZW5PZltpZF0gPSBjaGlsZHJlbk9mW2lkXSB8fCBbXTtcclxuICAgICAgaXRlbVtvcHRpb25zLmNoaWxkcmVuTWFwTmFtZV0gPSBjaGlsZHJlbk9mW2lkXTtcclxuICAgICAgaWYgKG9wdGlvbnMuY2IpIG9wdGlvbnMuY2IoaXRlbSk7XHJcbiAgICAgIGlmIChwaWQpIHtcclxuICAgICAgICBjaGlsZHJlbk9mW3BpZF0gPSBjaGlsZHJlbk9mW3BpZF0gfHwgW107XHJcbiAgICAgICAgY2hpbGRyZW5PZltwaWRdLnB1c2goaXRlbSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdHJlZS5wdXNoKGl0ZW0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJlZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIMOmwpXCsMOnwrvChMOowr3CrMOmwo3CosOmwojCkCBgbnotdHJlZWAgw6bClcKww6bCjcKuw6bCusKQw6/CvMKMw6nCgMKaw6jCv8KHIGBvcHRpb25zYCDDqMK9wqzDpcKMwpbDqcKhwrnDpcKQwo3Dr8K8wozDpMK5wp/DpcKPwq/DpMK7wqXDpMK9wr/Dp8KUwqggYG9wdGlvbnMuY2JgIMOmwpvCtMOpwqvCmMOnwrrCp8OlwobCs8Olwq7CmsOmwpXCsMOmwo3CrsOpwqHCuVxyXG4gICAqL1xyXG4gIGFyclRvVHJlZU5vZGUoXHJcbiAgICBhcnI6IGFueVtdLFxyXG4gICAgb3B0aW9ucz86IHtcclxuICAgICAgLyoqIMOnwrzClsOlwo/Ct8OpwqHCucOlwpDCjcOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmAnaWQnYCAqL1xyXG4gICAgICBpZE1hcE5hbWU/OiBzdHJpbmc7XHJcbiAgICAgIC8qKiDDp8KIwrbDp8K8wpbDpcKPwrfDqcKhwrnDpcKQwo3Dr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgJ3BhcmVudF9pZCdgICovXHJcbiAgICAgIHBhcmVudElkTWFwTmFtZT86IHN0cmluZztcclxuICAgICAgLyoqIMOmwqDCh8OpwqLCmMOpwqHCucOlwpDCjcOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmAndGl0bGUnYCAqL1xyXG4gICAgICB0aXRsZU1hcE5hbWU/OiBzdHJpbmc7XHJcbiAgICAgIC8qKiDDqMKuwr7Dp8K9wq7DpMK4wrrDpcKPwrbDpcKtwpDDqMKKwoLDp8KCwrnDqcKhwrnDpcKQwo3Dr8K8wozDqMKLwqXDpsKVwrDDpsKNwq7DpsK6wpDDpMK4wo3DpcKtwpjDpcKcwqjDpsKXwrbDqMKHwqrDpcKKwqjDpsKgwrnDpsKNwq4gYGNoaWxkcmVuYCDDpcKAwrzDpcKGwrPDpcKuwprDpsKYwq/DpcKQwqbDpMK4wrrDpcKPwrbDpcKtwpDDqMKKwoLDp8KCwrnDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgJ2lzTGVhZidgICovXHJcbiAgICAgIGlzTGVhZk1hcE5hbWU/OiBzdHJpbmc7XHJcbiAgICAgIC8qKiDDqMKKwoLDp8KCwrkgQ2hlY2tib3ggw6bCmMKvw6XCkMKmw6nCgMKJw6TCuMKtw6nCocK5w6XCkMKNw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYCdjaGVja2VkJ2AgKi9cclxuICAgICAgY2hlY2tlZE1hcG5hbWU/OiBzdHJpbmc7XHJcbiAgICAgIC8qKiDDqMKKwoLDp8KCwrnDpsKcwqzDqMK6wqvDpsKYwq/DpcKQwqbDqcKAwonDpMK4wq3DqcKhwrnDpcKQwo3Dr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgJ3NlbGVjdGVkJ2AgKi9cclxuICAgICAgc2VsZWN0ZWRNYXBuYW1lPzogc3RyaW5nO1xyXG4gICAgICAvKiogw6jCisKCw6fCgsK5w6bCmMKvw6XCkMKmw6XCscKVw6XCvMKAKMOlwo/CtsOlwq3CkMOoworCgsOnwoLCucOmwpfCoMOmwpXCiCnDqcKhwrnDpcKQwo3Dr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgJ2V4cGFuZGVkJ2AgKi9cclxuICAgICAgZXhwYW5kZWRNYXBuYW1lPzogc3RyaW5nO1xyXG4gICAgICAvKiogw6jCrsK+w6fCvcKuw6bCmMKvw6XCkMKmw6fCpsKBw6fClMKow6jCisKCw6fCgsK5KMOkwrjCjcOlwo/Cr8Oowr/Cm8OowqHCjMOkwrvCu8Okwr3ClcOmwpPCjcOkwr3CnCnDqcKhwrnDpcKQwo3Dr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgJ2Rpc2FibGVkJ2AgKi9cclxuICAgICAgZGlzYWJsZWRNYXBuYW1lPzogc3RyaW5nO1xyXG4gICAgICAvKiogw6jCvcKsw6bCjcKiw6bCiMKQw6bCoMKRw6bClcKww6bCjcKuw6XCkMKOw6/CvMKMw6bCicKnw6jCocKMw6fCmsKEw6nCgMKSw6XCvcKSw6XCm8Kew6jCsMKDICovXHJcbiAgICAgIGNiPzogKGl0ZW06IGFueSwgcGFyZW50OiBhbnksIGRlZXA6IG51bWJlcikgPT4gdm9pZDtcclxuICAgIH0sXHJcbiAgKTogTnpUcmVlTm9kZVtdIHtcclxuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKFxyXG4gICAgICB7XHJcbiAgICAgICAgZXhwYW5kZWQ6IGZhbHNlLFxyXG4gICAgICAgIGlkTWFwTmFtZTogdGhpcy5jLmlkTWFwTmFtZSxcclxuICAgICAgICBwYXJlbnRJZE1hcE5hbWU6IHRoaXMuYy5wYXJlbnRJZE1hcE5hbWUsXHJcbiAgICAgICAgdGl0bGVNYXBOYW1lOiB0aGlzLmMudGl0bGVNYXBOYW1lLFxyXG4gICAgICAgIGlzTGVhZk1hcE5hbWU6ICdpc0xlYWYnLFxyXG4gICAgICAgIGNoZWNrZWRNYXBuYW1lOiB0aGlzLmMuY2hlY2tlZE1hcG5hbWUsXHJcbiAgICAgICAgc2VsZWN0ZWRNYXBuYW1lOiB0aGlzLmMuc2VsZWN0ZWRNYXBuYW1lLFxyXG4gICAgICAgIGV4cGFuZGVkTWFwbmFtZTogdGhpcy5jLmV4cGFuZGVkTWFwbmFtZSxcclxuICAgICAgICBkaXNhYmxlZE1hcG5hbWU6IHRoaXMuYy5kaXNhYmxlZE1hcG5hbWUsXHJcbiAgICAgICAgY2I6IG51bGwsXHJcbiAgICAgIH0sXHJcbiAgICAgIG9wdGlvbnMsXHJcbiAgICApO1xyXG4gICAgY29uc3QgdHJlZSA9IHRoaXMuYXJyVG9UcmVlKGFyciwge1xyXG4gICAgICBpZE1hcE5hbWU6IG9wdGlvbnMuaWRNYXBOYW1lLFxyXG4gICAgICBwYXJlbnRJZE1hcE5hbWU6IG9wdGlvbnMucGFyZW50SWRNYXBOYW1lLFxyXG4gICAgICBjaGlsZHJlbk1hcE5hbWU6ICdjaGlsZHJlbicsXHJcbiAgICB9KTtcclxuICAgIHRoaXMudmlzaXRUcmVlKHRyZWUsIChpdGVtOiBhbnksIHBhcmVudDogYW55LCBkZWVwOiBudW1iZXIpID0+IHtcclxuICAgICAgaXRlbS5rZXkgPSBpdGVtW29wdGlvbnMuaWRNYXBOYW1lXTtcclxuICAgICAgaXRlbS50aXRsZSA9IGl0ZW1bb3B0aW9ucy50aXRsZU1hcE5hbWVdO1xyXG4gICAgICBpdGVtLmNoZWNrZWQgPSBpdGVtW29wdGlvbnMuY2hlY2tlZE1hcG5hbWVdO1xyXG4gICAgICBpdGVtLnNlbGVjdGVkID0gaXRlbVtvcHRpb25zLnNlbGVjdGVkTWFwbmFtZV07XHJcbiAgICAgIGl0ZW0uZXhwYW5kZWQgPSBpdGVtW29wdGlvbnMuZXhwYW5kZWRNYXBuYW1lXTtcclxuICAgICAgaXRlbS5kaXNhYmxlZCA9IGl0ZW1bb3B0aW9ucy5kaXNhYmxlZE1hcG5hbWVdO1xyXG4gICAgICBpZiAoaXRlbVtvcHRpb25zLmlzTGVhZk1hcE5hbWVdID09IG51bGwpIHtcclxuICAgICAgICBpdGVtLmlzTGVhZiA9IGl0ZW0uY2hpbGRyZW4ubGVuZ3RoID09PSAwO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGl0ZW0uaXNMZWFmID0gaXRlbVtvcHRpb25zLmlzTGVhZk1hcE5hbWVdO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChvcHRpb25zLmNiKSBvcHRpb25zLmNiKGl0ZW0sIHBhcmVudCwgZGVlcCk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB0cmVlLm1hcChub2RlID0+IG5ldyBOelRyZWVOb2RlKG5vZGUpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIMOpwoDCksOlwr3CksOowq7Cv8OpwpfCrsOmwpXCtMOkwrjCqsOmwqDCkVxyXG4gICAqL1xyXG4gIHZpc2l0VHJlZShcclxuICAgIHRyZWU6IGFueVtdLFxyXG4gICAgY2I6IChpdGVtOiBhbnksIHBhcmVudDogYW55LCBkZWVwOiBudW1iZXIpID0+IHZvaWQsXHJcbiAgICBvcHRpb25zPzoge1xyXG4gICAgICAvKiogw6XCrcKQw6nCocK5w6XCkMKNw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYCdjaGlsZHJlbidgICovXHJcbiAgICAgIGNoaWxkcmVuTWFwTmFtZT86IHN0cmluZztcclxuICAgIH0sXHJcbiAgKSB7XHJcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbihcclxuICAgICAge1xyXG4gICAgICAgIGNoaWxkcmVuTWFwTmFtZTogdGhpcy5jLmNoaWxkcmVuTWFwTmFtZSxcclxuICAgICAgfSxcclxuICAgICAgb3B0aW9ucyxcclxuICAgICk7XHJcbiAgICBjb25zdCBpbkZuID0gKGRhdGE6IGFueVtdLCBwYXJlbnQ6IGFueSwgZGVlcDogbnVtYmVyKSA9PiB7XHJcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBkYXRhKSB7XHJcbiAgICAgICAgY2IoaXRlbSwgcGFyZW50LCBkZWVwKTtcclxuICAgICAgICBjb25zdCBjaGlsZHJlblZhbCA9IGl0ZW1bb3B0aW9ucy5jaGlsZHJlbk1hcE5hbWVdO1xyXG4gICAgICAgIGlmIChjaGlsZHJlblZhbCAmJiBjaGlsZHJlblZhbC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBpbkZuKGNoaWxkcmVuVmFsLCBpdGVtLCBkZWVwICsgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgaW5Gbih0cmVlLCBudWxsLCAxKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIMOowo7Ct8Olwo/ClsOmwonCgMOmwpzCicOlwrfCssOnwrvCj8OpwoDCicOkwrjCrcOnwprChCBga2V5YCDDpcKAwrxcclxuICAgKi9cclxuICBnZXRLZXlzQnlUcmVlTm9kZShcclxuICAgIHRyZWU6IE56VHJlZU5vZGVbXSxcclxuICAgIG9wdGlvbnM/OiB7XHJcbiAgICAgIC8qKiDDpsKYwq/DpcKQwqbDpcKMwoXDpcKQwqvDpcKNworDqcKAwonDp8KKwrbDpsKAwoHDp8KawoTDpcKAwrzDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgdHJ1ZWAgKi9cclxuICAgICAgaW5jbHVkZUhhbGZDaGVja2VkPzogYm9vbGVhbjtcclxuICAgICAgLyoqIMOmwpjCr8OlwpDCpsOpwofCjcOmwpbCsMOmwozCh8Olwq7CmiBga2V5YCDDqcKUwq7DpcKQwo3Dr8K8wozDqMKLwqXDpMK4wo3DpsKMwofDpcKuwprDqMKhwqjDp8KkwrrDpMK9wr/Dp8KUwqggYE56VHJlZU5vZGUua2V5YCDDpcKAwrwgKi9cclxuICAgICAga2V5TWFwTmFtZT86IHN0cmluZztcclxuICAgICAgLyoqIMOlwpvCnsOowrDCg8OvwrzCjMOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqsOlwoDCvCBga2V5YCDDpcKAwrzDr8K8wozDpMK8wpjDpcKFwojDp8K6wqfDqcKrwpjDpMK6wo7DpcKFwrbDpMK7wpYgKi9cclxuICAgICAgY2I/OiAoaXRlbTogTnpUcmVlTm9kZSwgcGFyZW50OiBOelRyZWVOb2RlLCBkZWVwOiBudW1iZXIpID0+IGFueTtcclxuICAgIH0sXHJcbiAgKTogYW55W10ge1xyXG4gICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oXHJcbiAgICAgIHtcclxuICAgICAgICBpbmNsdWRlSGFsZkNoZWNrZWQ6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIG9wdGlvbnMsXHJcbiAgICApO1xyXG4gICAgY29uc3Qga2V5czogYW55W10gPSBbXTtcclxuICAgIHRoaXMudmlzaXRUcmVlKFxyXG4gICAgICB0cmVlLFxyXG4gICAgICAoaXRlbTogTnpUcmVlTm9kZSwgcGFyZW50OiBOelRyZWVOb2RlLCBkZWVwOiBudW1iZXIpID0+IHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBpdGVtLmlzQ2hlY2tlZCB8fFxyXG4gICAgICAgICAgKG9wdGlvbnMuaW5jbHVkZUhhbGZDaGVja2VkICYmIGl0ZW0uaXNIYWxmQ2hlY2tlZClcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGtleXMucHVzaChcclxuICAgICAgICAgICAgb3B0aW9ucy5jYlxyXG4gICAgICAgICAgICAgID8gb3B0aW9ucy5jYihpdGVtLCBwYXJlbnQsIGRlZXApXHJcbiAgICAgICAgICAgICAgOiBvcHRpb25zLmtleU1hcE5hbWVcclxuICAgICAgICAgICAgICAgID8gaXRlbS5vcmlnaW5bb3B0aW9ucy5rZXlNYXBOYW1lXVxyXG4gICAgICAgICAgICAgICAgOiBpdGVtLmtleSxcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgKTtcclxuICAgIHJldHVybiBrZXlzO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIERlbG9uVXRpbE1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogRGVsb25VdGlsTW9kdWxlLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbInRzbGliXzEuX192YWx1ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FB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