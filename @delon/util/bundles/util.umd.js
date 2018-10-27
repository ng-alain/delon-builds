/**
 * @license ng-alain(cipchk@qq.com) v2.0.0-rc.1-673e157
 * (c) 2018 Cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('extend'), require('date-fns/parse'), require('date-fns/start_of_week'), require('date-fns/end_of_week'), require('date-fns/sub_weeks'), require('date-fns/start_of_month'), require('date-fns/end_of_month'), require('date-fns/sub_months'), require('date-fns/start_of_year'), require('date-fns/end_of_year'), require('date-fns/sub_years'), require('date-fns/add_days'), require('@angular/core'), require('@angular/common'), require('rxjs'), require('rxjs/operators'), require('ng-zorro-antd')) :
    typeof define === 'function' && define.amd ? define('@delon/util', ['exports', 'extend', 'date-fns/parse', 'date-fns/start_of_week', 'date-fns/end_of_week', 'date-fns/sub_weeks', 'date-fns/start_of_month', 'date-fns/end_of_month', 'date-fns/sub_months', 'date-fns/start_of_year', 'date-fns/end_of_year', 'date-fns/sub_years', 'date-fns/add_days', '@angular/core', '@angular/common', 'rxjs', 'rxjs/operators', 'ng-zorro-antd'], factory) :
    (factory((global.delon = global.delon || {}, global.delon.util = {}),global.Extend,global.parse,global.startOfWeek,global.endOfWeek,global.subWeeks,global.startOfMonth,global.endOfMonth,global.subMonths,global.startOfYear,global.endOfYear,global.subYears,global.addDays,global.ng.core,global.ng.common,global.rxjs,global.rxjs.operators,global.ngZorro.antd));
}(this, (function (exports,extend,parse,startOfWeek,endOfWeek,subWeeks,startOfMonth,endOfMonth,subMonths,startOfYear,endOfYear,subYears,addDays,i0,i1,rxjs,operators,ngZorroAntd) { 'use strict';

    extend = extend && extend.hasOwnProperty('default') ? extend['default'] : extend;
    parse = parse && parse.hasOwnProperty('default') ? parse['default'] : parse;
    startOfWeek = startOfWeek && startOfWeek.hasOwnProperty('default') ? startOfWeek['default'] : startOfWeek;
    endOfWeek = endOfWeek && endOfWeek.hasOwnProperty('default') ? endOfWeek['default'] : endOfWeek;
    subWeeks = subWeeks && subWeeks.hasOwnProperty('default') ? subWeeks['default'] : subWeeks;
    startOfMonth = startOfMonth && startOfMonth.hasOwnProperty('default') ? startOfMonth['default'] : startOfMonth;
    endOfMonth = endOfMonth && endOfMonth.hasOwnProperty('default') ? endOfMonth['default'] : endOfMonth;
    subMonths = subMonths && subMonths.hasOwnProperty('default') ? subMonths['default'] : subMonths;
    startOfYear = startOfYear && startOfYear.hasOwnProperty('default') ? startOfYear['default'] : startOfYear;
    endOfYear = endOfYear && endOfYear.hasOwnProperty('default') ? endOfYear['default'] : endOfYear;
    subYears = subYears && subYears.hasOwnProperty('default') ? subYears['default'] : subYears;
    addDays = addDays && addDays.hasOwnProperty('default') ? addDays['default'] : addDays;

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
        if (needDeepGet === void 0) {
            needDeepGet = false;
        }
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
        if (digits === void 0) {
            digits = 2;
        }
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
            this._notify = new rxjs.BehaviorSubject([]);
        }
        Object.defineProperty(LazyService.prototype, "change", {
            get: /**
             * @return {?}
             */ function () {
                return this._notify.asObservable().pipe(operators.share(), operators.filter(function (ls) { return ls.length !== 0; }));
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
                    if (( /** @type {?} */(node)).readyState) {
                        // IE
                        ( /** @type {?} */(node)).onreadystatechange = function () {
                            if (( /** @type {?} */(node)).readyState === 'loaded' ||
                                ( /** @type {?} */(node)).readyState === 'complete') {
                                ( /** @type {?} */(node)).onreadystatechange = null;
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
                if (rel === void 0) {
                    rel = 'stylesheet';
                }
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
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */
        LazyService.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: [i1.DOCUMENT,] }] }
            ];
        };
        /** @nocollapse */ LazyService.ngInjectableDef = i0.defineInjectable({ factory: function LazyService_Factory() { return new LazyService(i0.inject(i1.DOCUMENT)); }, token: LazyService, providedIn: "root" });
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
    var /**
     * 一套日常验证器
     */ _Validators = /** @class */ (function () {
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
                ( /** @type {?} */(node)).outerHTML.toString().trim().length !== 0) {
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
        if (allowUndefined === void 0) {
            allowUndefined = false;
        }
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
        if (allowUndefined === void 0) {
            allowUndefined = false;
        }
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
                 */ function () {
                    return this[privatePropName]; // tslint:disable-line:no-invalid-this
                },
                set: /**
                 * @param {?} value
                 * @return {?}
                 */ function (value) {
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
        if (fallbackValue === void 0) {
            fallbackValue = 0;
        }
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
        if (fallback === void 0) {
            fallback = 0;
        }
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
                 */ function () {
                    return this[privatePropName]; // tslint:disable-line:no-invalid-this
                },
                set: /**
                 * @param {?} value
                 * @return {?}
                 */ function (value) {
                    this[privatePropName] = toNumber(value, fallback); // tslint:disable-line:no-invalid-this
                }
            });
        };
    }

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
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
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
        if (cleanAll === void 0) {
            cleanAll = false;
        }
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
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ DelonUtilConfig.ngInjectableDef = i0.defineInjectable({ factory: function DelonUtilConfig_Factory() { return new DelonUtilConfig(); }, token: DelonUtilConfig, providedIn: "root" });
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
                    catch (e_1_1) {
                        e_1 = { error: e_1_1 };
                    }
                    finally {
                        try {
                            if (list_1_1 && !list_1_1.done && (_a = list_1.return))
                                _a.call(list_1);
                        }
                        finally {
                            if (e_1)
                                throw e_1.error;
                        }
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
                catch (e_2_1) {
                    e_2 = { error: e_2_1 };
                }
                finally {
                    try {
                        if (arr_1_1 && !arr_1_1.done && (_a = arr_1.return))
                            _a.call(arr_1);
                    }
                    finally {
                        if (e_2)
                            throw e_2.error;
                    }
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
                return tree.map(function (node) { return new ngZorroAntd.NzTreeNode(node); });
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
                    catch (e_3_1) {
                        e_3 = { error: e_3_1 };
                    }
                    finally {
                        try {
                            if (data_1_1 && !data_1_1.done && (_a = data_1.return))
                                _a.call(data_1);
                        }
                        finally {
                            if (e_3)
                                throw e_3.error;
                        }
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
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */
        ArrayService.ctorParameters = function () {
            return [
                { type: DelonUtilConfig }
            ];
        };
        /** @nocollapse */ ArrayService.ngInjectableDef = i0.defineInjectable({ factory: function ArrayService_Factory() { return new ArrayService(i0.inject(DelonUtilConfig)); }, token: ArrayService, providedIn: "root" });
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
            { type: i0.NgModule, args: [{
                        imports: [i1.CommonModule],
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

    exports._Validators = _Validators;
    exports.format = format;
    exports.yuan = yuan;
    exports.getTimeDistance = getTimeDistance;
    exports.LazyService = LazyService;
    exports.isNum = isNum;
    exports.isInt = isInt;
    exports.isDecimal = isDecimal;
    exports.isIdCard = isIdCard;
    exports.isMobile = isMobile;
    exports.isEmpty = isEmpty;
    exports.toBoolean = toBoolean;
    exports.InputBoolean = InputBoolean;
    exports.toNumber = toNumber;
    exports.InputNumber = InputNumber;
    exports.deepGet = deepGet;
    exports.deepCopy = deepCopy;
    exports.copy = copy;
    exports.updateHostClass = updateHostClass;
    exports.ArrayService = ArrayService;
    exports.DelonUtilConfig = DelonUtilConfig;
    exports.DelonUtilModule = DelonUtilModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BkZWxvbi91dGlsL3NyYy9vdGhlci9vdGhlci50cyIsIm5nOi8vQGRlbG9uL3V0aWwvc3JjL3N0cmluZy9zdHJpbmcudHMiLCJuZzovL0BkZWxvbi91dGlsL3NyYy90aW1lL3RpbWUudHMiLCJuZzovL0BkZWxvbi91dGlsL3NyYy9sYXp5L2xhenkuc2VydmljZS50cyIsIm5nOi8vQGRlbG9uL3V0aWwvc3JjL3ZhbGlkYXRlL3ZhbGlkYXRlLnRzIiwibmc6Ly9AZGVsb24vdXRpbC9zcmMvdmFsaWRhdGUvdmFsaWRhdG9ycy50cyIsIm5nOi8vQGRlbG9uL3V0aWwvc3JjL290aGVyL2NoZWNrLnRzIiwibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5nOi8vQGRlbG9uL3V0aWwvc3JjL290aGVyL3N0eWxlLnRzIiwibmc6Ly9AZGVsb24vdXRpbC9zcmMvdXRpbC5jb25maWcudHMiLCJuZzovL0BkZWxvbi91dGlsL3NyYy9hcnJheS9hcnJheS5zZXJ2aWNlLnRzIiwibmc6Ly9AZGVsb24vdXRpbC9zcmMvdXRpbC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4dGVuZCBmcm9tICdleHRlbmQnO1xuXG4vKipcbiAqIMOnwrHCu8OkwrzCvCBgXy5nZXRgw6/CvMKMw6bCoMK5w6bCjcKuIGBwYXRoYCDDqMKOwrfDpcKPwpbDpcKuwonDpcKFwqjDpcKAwrxcbiAqIGpzcGVyZjogaHR0cHM6Ly9qc3BlcmYuY29tL2VzLWRlZXAtZ2V0dHRwczovL2pzcGVyZi5jb20vZXMtZGVlcC1nZXRcbiAqXG4gKiBAcGFyYW0gb2JqIMOmwpXCsMOmwo3CrsOmwrrCkMOvwrzCjMOmwpfCoMOmwpXCiMOmwpfCtsOnwpvCtMOmwo7CpcOowr/ClMOlwpvCniBgZGVmYXVsdFZhbHVlYCDDpcKAwrxcbiAqIEBwYXJhbSBwYXRoIMOowovCpSBgbnVsbGDDo8KAwoFgW11gw6PCgMKBw6bCnMKqw6XCrsKaw6TCucKJw6XCj8KKw6bCnMKqw6bCicK+w6XCiMKww6bCl8K2w6jCv8KUw6XCm8KeIGBkZWZhdWx0VmFsdWVgIMOlwoDCvFxuICogQHBhcmFtIGRlZmF1bHRWYWx1ZSDDqcK7wpjDqMKuwqTDpcKAwrxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlZXBHZXQob2JqOiBhbnksIHBhdGg6IHN0cmluZyB8IHN0cmluZ1tdLCBkZWZhdWx0VmFsdWU/OiBhbnkpIHtcbiAgaWYgKCFvYmogfHwgcGF0aCA9PSBudWxsIHx8IHBhdGgubGVuZ3RoID09PSAwKSByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICBpZiAoIUFycmF5LmlzQXJyYXkocGF0aCkpIHtcbiAgICBwYXRoID0gfnBhdGguaW5kZXhPZignLicpID8gcGF0aC5zcGxpdCgnLicpIDogWyBwYXRoIF07XG4gIH1cbiAgaWYgKHBhdGgubGVuZ3RoID09PSAxKSB7XG4gICAgY29uc3QgY2hlY2tPYmogPSBvYmpbcGF0aFswXV07XG4gICAgcmV0dXJuIHR5cGVvZiBjaGVja09iaiA9PT0gJ3VuZGVmaW5lZCcgPyBkZWZhdWx0VmFsdWUgOiBjaGVja09iajtcbiAgfVxuICByZXR1cm4gcGF0aC5yZWR1Y2UoKG8sIGspID0+IChvIHx8IHt9KVtrXSwgb2JqKSB8fCBkZWZhdWx0VmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWVwQ29weShvYmo6IGFueSkge1xuICBjb25zdCByZXN1bHQgPSBleHRlbmQodHJ1ZSwgeyB9LCB7IF86IG9iaiB9KTtcbiAgcmV0dXJuIHJlc3VsdC5fO1xufVxuXG4vKiogw6XCpMKNw6XCiMK2w6XChsKFw6XCrsK5w6jCh8Kzw6XCicKqw6jCtMK0w6bCncK/ICovXG5leHBvcnQgZnVuY3Rpb24gY29weSh2YWx1ZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmUsIHJlamVjdCk6IHZvaWQgPT4ge1xuICAgIGxldCBjb3B5VGV4dEFyZWEgPSBudWxsIGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQ7XG4gICAgdHJ5IHtcbiAgICAgIGNvcHlUZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICBjb3B5VGV4dEFyZWEuc3R5bGUuaGVpZ2h0ID0gJzBweCc7XG4gICAgICBjb3B5VGV4dEFyZWEuc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICAgIGNvcHlUZXh0QXJlYS5zdHlsZS53aWR0aCA9ICcwcHgnO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb3B5VGV4dEFyZWEpO1xuICAgICAgY29weVRleHRBcmVhLnZhbHVlID0gdmFsdWU7XG4gICAgICBjb3B5VGV4dEFyZWEuc2VsZWN0KCk7XG4gICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xuICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChjb3B5VGV4dEFyZWEgJiYgY29weVRleHRBcmVhLnBhcmVudE5vZGUpIHtcbiAgICAgICAgY29weVRleHRBcmVhLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY29weVRleHRBcmVhKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuIiwiaW1wb3J0IHsgZGVlcEdldCB9IGZyb20gJy4uL290aGVyL290aGVyJztcblxuLyoqXG4gKiDDpcKtwpfDp8KswqbDpMK4wrLDpsKgwrzDpcK8wo/DpcKMwpZcbiAqIGBgYFxuICogZm9ybWF0KCd0aGlzIGlzICR7bmFtZX0nLCB7IG5hbWU6ICdhc2RmJyB9KVxuICogLy8gb3V0cHV0OiB0aGlzIGlzIGFzZGZcbiAqIGZvcm1hdCgndGhpcyBpcyAke3VzZXIubmFtZX0nLCB7IHVzZXI6IHsgbmFtZTogJ2FzZGYnIH0gfSwgdHJ1ZSlcbiAqIC8vIG91dHB1dDogdGhpcyBpcyBhc2RmXG4gKiBgYGBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdChzdHI6IHN0cmluZywgb2JqOiB7fSwgbmVlZERlZXBHZXQgPSBmYWxzZSk6IHN0cmluZyB7XG4gIHJldHVybiAoc3RyIHx8ICcnKS5yZXBsYWNlKFxuICAgIC9cXCR7KFtefV0rKX0vZyxcbiAgICAod29yazogc3RyaW5nLCBrZXk6IHN0cmluZykgPT5cbiAgICAgIG5lZWREZWVwR2V0XG4gICAgICAgID8gZGVlcEdldChvYmosIGtleS5zcGxpdCgnLicpLCAnJylcbiAgICAgICAgOiAob2JqIHx8IHt9KVtrZXldIHx8ICcnLFxuICApO1xufVxuXG4vKipcbiAqIMOowr3CrMOlwozClsOmwojCkFJNQsOlwoXCg8Olwq3Cl8OnwqzCpsOkwrjCslxuICogQHBhcmFtIGRpZ2l0cyDDpcK9wpPDpsKVwrDDpcKtwpfDp8KxwrvDpcKewovDpsKXwrbDr8K8wozDpcKFwoHDqMKuwrjDpsKMwofDpcKuwprDpcKwwo/DpsKVwrDDp8KCwrnDpcKQwo7DpsKVwrDDpcKtwpfDp8KawoTDpMK4wqrDpsKVwrDDr8K8wozDqcK7wpjDqMKuwqQyw6TCvcKNw6XCsMKPw6bClcKwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB5dWFuKHZhbHVlOiBhbnksIGRpZ2l0czogbnVtYmVyID0gMik6IHN0cmluZyB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB2YWx1ZSA9IHZhbHVlLnRvRml4ZWQoZGlnaXRzKTtcbiAgcmV0dXJuIGAmeWVuICR7dmFsdWV9YDtcbn1cbiIsImltcG9ydCBwYXJzZSBmcm9tICdkYXRlLWZucy9wYXJzZSc7XG5pbXBvcnQgc3RhcnRPZldlZWsgZnJvbSAnZGF0ZS1mbnMvc3RhcnRfb2Zfd2Vlayc7XG5pbXBvcnQgZW5kT2ZXZWVrIGZyb20gJ2RhdGUtZm5zL2VuZF9vZl93ZWVrJztcbmltcG9ydCBzdWJXZWVrcyBmcm9tICdkYXRlLWZucy9zdWJfd2Vla3MnO1xuaW1wb3J0IHN0YXJ0T2ZNb250aCBmcm9tICdkYXRlLWZucy9zdGFydF9vZl9tb250aCc7XG5pbXBvcnQgZW5kT2ZNb250aCBmcm9tICdkYXRlLWZucy9lbmRfb2ZfbW9udGgnO1xuaW1wb3J0IHN1Yk1vbnRocyBmcm9tICdkYXRlLWZucy9zdWJfbW9udGhzJztcbmltcG9ydCBzdGFydE9mWWVhciBmcm9tICdkYXRlLWZucy9zdGFydF9vZl95ZWFyJztcbmltcG9ydCBlbmRPZlllYXIgZnJvbSAnZGF0ZS1mbnMvZW5kX29mX3llYXInO1xuaW1wb3J0IHN1YlllYXJzIGZyb20gJ2RhdGUtZm5zL3N1Yl95ZWFycyc7XG5pbXBvcnQgYWRkRGF5cyBmcm9tICdkYXRlLWZucy9hZGRfZGF5cyc7XG5cbi8qKlxuICogw6jCjsK3w6XCj8KWw6bCl8K2w6nCl8K0w6jCjMKDw6XCm8K0XG4gKiBAcGFyYW0gdHlwZSDDp8KxwrvDpcKewovDr8K8wozDpcK4wqYgYC1gIMOowqHCqMOnwqTCusOowr/Ch8Olwo7Cu8OkwrjCgMOkwrjCqsOmwpfCtsOpwpfCtMOvwrzCjMOowovCpcOmwozCh8Olwq7CmiBgbnVtYmVyYCDDqMKhwqjDp8KkwrrDpcKkwqnDpsKVwrBcbiAqIEBwYXJhbSB0aW1lIMOlwrzCgMOlwqfCi8OmwpfCtsOpwpfCtFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGltZURpc3RhbmNlKFxuICB0eXBlOlxuICAgIHwgJ3RvZGF5J1xuICAgIHwgJy10b2RheSdcbiAgICB8ICd3ZWVrJ1xuICAgIHwgJy13ZWVrJ1xuICAgIHwgJ21vbnRoJ1xuICAgIHwgJy1tb250aCdcbiAgICB8ICd5ZWFyJ1xuICAgIHwgJy15ZWFyJ1xuICAgIHwgbnVtYmVyLFxuICB0aW1lPzogRGF0ZSB8IHN0cmluZyB8IG51bWJlcixcbik6IFtEYXRlLCBEYXRlXSB7XG4gIHRpbWUgPSBwYXJzZSh0aW1lIHx8IG5ldyBEYXRlKCkpO1xuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ3RvZGF5JzpcbiAgICAgIHJldHVybiBbdGltZSwgdGltZV07XG4gICAgY2FzZSAnLXRvZGF5JzpcbiAgICAgIHJldHVybiBbYWRkRGF5cyh0aW1lLCAtMSksIHRpbWVdO1xuICAgIGNhc2UgJ3dlZWsnOlxuICAgICAgcmV0dXJuIFtzdGFydE9mV2Vlayh0aW1lKSwgZW5kT2ZXZWVrKHRpbWUpXTtcbiAgICBjYXNlICctd2Vlayc6XG4gICAgICByZXR1cm4gW3N0YXJ0T2ZXZWVrKHN1YldlZWtzKHRpbWUsIDEpKSwgZW5kT2ZXZWVrKHN1YldlZWtzKHRpbWUsIDEpKV07XG4gICAgY2FzZSAnbW9udGgnOlxuICAgICAgcmV0dXJuIFtzdGFydE9mTW9udGgodGltZSksIGVuZE9mTW9udGgodGltZSldO1xuICAgIGNhc2UgJy1tb250aCc6XG4gICAgICByZXR1cm4gW3N0YXJ0T2ZNb250aChzdWJNb250aHModGltZSwgMSkpLCBlbmRPZk1vbnRoKHN1Yk1vbnRocyh0aW1lLCAxKSldO1xuICAgIGNhc2UgJ3llYXInOlxuICAgICAgcmV0dXJuIFtzdGFydE9mWWVhcih0aW1lKSwgZW5kT2ZZZWFyKHRpbWUpXTtcbiAgICBjYXNlICcteWVhcic6XG4gICAgICByZXR1cm4gW3N0YXJ0T2ZZZWFyKHN1YlllYXJzKHRpbWUsIDEpKSwgZW5kT2ZZZWFyKHN1YlllYXJzKHRpbWUsIDEpKV07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB0eXBlID4gMFxuICAgICAgICA/IFt0aW1lLCBhZGREYXlzKHRpbWUsIHR5cGUpXVxuICAgICAgICA6IFthZGREYXlzKHRpbWUsIHR5cGUpLCB0aW1lXTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHNoYXJlLCBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGF6eVJlc3VsdCB7XG4gIHBhdGg6IHN0cmluZztcbiAgbG9hZGVkOiBib29sZWFuO1xuICBzdGF0dXM6ICdvaycgfCAnZXJyb3InO1xufVxuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIExhenlTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBsaXN0OiBhbnkgPSB7fTtcbiAgcHJpdmF0ZSBjYWNoZWQ6IGFueSA9IHt9O1xuICBwcml2YXRlIF9ub3RpZnk6IEJlaGF2aW9yU3ViamVjdDxMYXp5UmVzdWx0W10+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxcbiAgICBMYXp5UmVzdWx0W11cbiAgPihbXSk7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IGFueSkge31cblxuICBnZXQgY2hhbmdlKCk6IE9ic2VydmFibGU8TGF6eVJlc3VsdFtdPiB7XG4gICAgcmV0dXJuIHRoaXMuX25vdGlmeS5hc09ic2VydmFibGUoKS5waXBlKFxuICAgICAgc2hhcmUoKSxcbiAgICAgIGZpbHRlcihscyA9PiBscy5sZW5ndGggIT09IDApLFxuICAgICk7XG4gIH1cblxuICBjbGVhcigpOiB2b2lkIHtcbiAgICB0aGlzLmxpc3QgPSB7fTtcbiAgICB0aGlzLmNhY2hlZCA9IHt9O1xuICB9XG5cbiAgbG9hZChwYXRoczogc3RyaW5nIHwgc3RyaW5nW10pOiBQcm9taXNlPExhenlSZXN1bHRbXT4ge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShwYXRocykpIHBhdGhzID0gW3BhdGhzXTtcblxuICAgIGNvbnN0IHByb21pc2VzOiBQcm9taXNlPExhenlSZXN1bHQ+W10gPSBbXTtcbiAgICBwYXRocy5mb3JFYWNoKHBhdGggPT4ge1xuICAgICAgaWYgKHBhdGguZW5kc1dpdGgoJy5qcycpKSB7XG4gICAgICAgIHByb21pc2VzLnB1c2godGhpcy5sb2FkU2NyaXB0KHBhdGgpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb21pc2VzLnB1c2godGhpcy5sb2FkU3R5bGUocGF0aCkpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKHJlcyA9PiB7XG4gICAgICB0aGlzLl9ub3RpZnkubmV4dChyZXMpO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXMpO1xuICAgIH0pO1xuICB9XG5cbiAgbG9hZFNjcmlwdChwYXRoOiBzdHJpbmcsIGlubmVyQ29udGVudD86IHN0cmluZyk6IFByb21pc2U8TGF6eVJlc3VsdD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIGlmICh0aGlzLmxpc3RbcGF0aF0gPT09IHRydWUpIHtcbiAgICAgICAgcmVzb2x2ZSh0aGlzLmNhY2hlZFtwYXRoXSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5saXN0W3BhdGhdID0gdHJ1ZTtcbiAgICAgIGNvbnN0IG9uU3VjY2VzcyA9IChpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5jYWNoZWRbcGF0aF0gPSBpdGVtO1xuICAgICAgICByZXNvbHZlKGl0ZW0pO1xuICAgICAgfTtcblxuICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuZG9jLmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpIGFzIEhUTUxTY3JpcHRFbGVtZW50O1xuICAgICAgbm9kZS50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gICAgICBub2RlLnNyYyA9IHBhdGg7XG4gICAgICBub2RlLmNoYXJzZXQgPSAndXRmLTgnO1xuICAgICAgaWYgKGlubmVyQ29udGVudCkge1xuICAgICAgICBub2RlLmlubmVySFRNTCA9IGlubmVyQ29udGVudDtcbiAgICAgIH1cbiAgICAgIGlmICgoPGFueT5ub2RlKS5yZWFkeVN0YXRlKSB7XG4gICAgICAgIC8vIElFXG4gICAgICAgICg8YW55Pm5vZGUpLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAoPGFueT5ub2RlKS5yZWFkeVN0YXRlID09PSAnbG9hZGVkJyB8fFxuICAgICAgICAgICAgKDxhbnk+bm9kZSkucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJ1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgKDxhbnk+bm9kZSkub25yZWFkeXN0YXRlY2hhbmdlID0gbnVsbDtcbiAgICAgICAgICAgIG9uU3VjY2Vzcyh7XG4gICAgICAgICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgICAgICAgIGxvYWRlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgc3RhdHVzOiAnb2snLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgb25TdWNjZXNzKHtcbiAgICAgICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgICAgICBsb2FkZWQ6IHRydWUsXG4gICAgICAgICAgICBzdGF0dXM6ICdvaycsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBub2RlLm9uZXJyb3IgPSAoZXJyb3I6IGFueSkgPT5cbiAgICAgICAgb25TdWNjZXNzKHtcbiAgICAgICAgICBwYXRoOiBwYXRoLFxuICAgICAgICAgIGxvYWRlZDogZmFsc2UsXG4gICAgICAgICAgc3RhdHVzOiAnZXJyb3InLFxuICAgICAgICB9KTtcbiAgICAgIHRoaXMuZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgfSk7XG4gIH1cblxuICBsb2FkU3R5bGUoXG4gICAgcGF0aDogc3RyaW5nLFxuICAgIHJlbCA9ICdzdHlsZXNoZWV0JyxcbiAgICBpbm5lckNvbnRlbnQ/OiBzdHJpbmcsXG4gICk6IFByb21pc2U8TGF6eVJlc3VsdD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIGlmICh0aGlzLmxpc3RbcGF0aF0gPT09IHRydWUpIHtcbiAgICAgICAgcmVzb2x2ZSh0aGlzLmNhY2hlZFtwYXRoXSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5saXN0W3BhdGhdID0gdHJ1ZTtcblxuICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuZG9jLmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKSBhcyBIVE1MTGlua0VsZW1lbnQ7XG4gICAgICBub2RlLnJlbCA9IHJlbDtcbiAgICAgIG5vZGUudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gICAgICBub2RlLmhyZWYgPSBwYXRoO1xuICAgICAgaWYgKGlubmVyQ29udGVudCkge1xuICAgICAgICBub2RlLmlubmVySFRNTCA9IGlubmVyQ29udGVudDtcbiAgICAgIH1cbiAgICAgIHRoaXMuZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICBjb25zdCBpdGVtOiBMYXp5UmVzdWx0ID0ge1xuICAgICAgICBwYXRoOiBwYXRoLFxuICAgICAgICBsb2FkZWQ6IHRydWUsXG4gICAgICAgIHN0YXR1czogJ29rJyxcbiAgICAgIH07XG4gICAgICB0aGlzLmNhY2hlZFtwYXRoXSA9IGl0ZW07XG4gICAgICByZXNvbHZlKGl0ZW0pO1xuICAgIH0pO1xuICB9XG59XG4iLCIvKiogw6bCmMKvw6XCkMKmw6TCuMK6w6bClcKww6XCrcKXICovXG5leHBvcnQgZnVuY3Rpb24gaXNOdW0odmFsdWU6IHN0cmluZyB8IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gL14oKC0/XFxkK1xcLlxcZCspfCgtP1xcZCspfCgtP1xcLlxcZCspKSQvLnRlc3QodmFsdWUudG9TdHJpbmcoKSk7XG59XG5cbi8qKiDDpsKYwq/DpcKQwqbDpMK4wrrDpsKVwrTDpsKVwrAgKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0ludCh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogYm9vbGVhbiB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp0cmlwbGUtZXF1YWxzXG4gIHJldHVybiBpc051bSh2YWx1ZSkgJiYgcGFyc2VJbnQodmFsdWUudG9TdHJpbmcoKSwgMTApID09IHZhbHVlO1xufVxuXG4vKiogw6bCmMKvw6XCkMKmw6TCuMK6w6XCsMKPw6bClcKwICovXG5leHBvcnQgZnVuY3Rpb24gaXNEZWNpbWFsKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIGlzTnVtKHZhbHVlKSAmJiAhaXNJbnQodmFsdWUpO1xufVxuXG4vKiogw6bCmMKvw6XCkMKmw6TCuMK6w6jCusKrw6TCu8K9w6jCr8KBICovXG5leHBvcnQgZnVuY3Rpb24gaXNJZENhcmQodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICByZXR1cm4gKFxuICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgLyheXFxkezE1fSQpfCheXFxkezE3fShbMC05XXxYKSQpL2kudGVzdCh2YWx1ZSlcbiAgKTtcbn1cblxuLyoqIMOmwpjCr8OlwpDCpsOkwrjCusOmwonCi8OmwpzCusOlwo/CtyAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTW9iaWxlKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgcmV0dXJuIChcbiAgICB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmXG4gICAgL14oMHxcXCs/ODZ8MTc5NTEpPygxM1swLTldfDE1WzAtOV18MTdbMDY3OF18MThbMC05XXwxNFs1N10pWzAtOV17OH0kLy50ZXN0KFxuICAgICAgdmFsdWUsXG4gICAgKVxuICApO1xufVxuIiwiaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBWYWxpZGF0aW9uRXJyb3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgaXNOdW0sIGlzSW50LCBpc0RlY2ltYWwsIGlzSWRDYXJkLCBpc01vYmlsZSB9IGZyb20gJy4vdmFsaWRhdGUnO1xuXG4vKiogw6TCuMKAw6XCpcKXw6bCl8Klw6XCuMK4w6nCqsKMw6jCr8KBw6XCmcKoICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y2xhc3MtbmFtZVxuZXhwb3J0IGNsYXNzIF9WYWxpZGF0b3JzIHtcbiAgLyoqIMOmwpjCr8OlwpDCpsOkwrjCusOmwpXCsMOlwq3ClyAqL1xuICBzdGF0aWMgbnVtKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcbiAgICByZXR1cm4gaXNOdW0oY29udHJvbC52YWx1ZSkgPyBudWxsIDogeyBudW06IHRydWUgfTtcbiAgfVxuXG4gIC8qKiDDpsKYwq/DpcKQwqbDpMK4wrrDpsKVwrTDpsKVwrAgKi9cbiAgc3RhdGljIGludChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XG4gICAgcmV0dXJuIGlzSW50KGNvbnRyb2wudmFsdWUpID8gbnVsbCA6IHsgaW50OiB0cnVlIH07XG4gIH1cblxuICAvKiogw6bCmMKvw6XCkMKmw6TCuMK6w6XCsMKPw6bClcKwICovXG4gIHN0YXRpYyBkZWNpbWFsKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcbiAgICByZXR1cm4gaXNEZWNpbWFsKGNvbnRyb2wudmFsdWUpID8gbnVsbCA6IHsgZGVjaW1hbDogdHJ1ZSB9O1xuICB9XG5cbiAgLyoqIMOmwpjCr8OlwpDCpsOkwrjCusOowrrCq8OkwrvCvcOowq/CgSAqL1xuICBzdGF0aWMgaWRDYXJkKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcbiAgICByZXR1cm4gaXNJZENhcmQoY29udHJvbC52YWx1ZSkgPyBudWxsIDogeyBpZENhcmQ6IHRydWUgfTtcbiAgfVxuXG4gIC8qKiDDpsKYwq/DpcKQwqbDpMK4wrrDpsKJwovDpsKcwrrDpcKPwrcgKi9cbiAgc3RhdGljIG1vYmlsZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XG4gICAgcmV0dXJuIGlzTW9iaWxlKGNvbnRyb2wudmFsdWUpID8gbnVsbCA6IHsgbW9iaWxlOiB0cnVlIH07XG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBpc0VtcHR5KGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XG4gIGNvbnN0IG5vZGVzID0gZWxlbWVudC5jaGlsZE5vZGVzO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgbm9kZSA9IG5vZGVzLml0ZW0oaSk7XG4gICAgaWYgKFxuICAgICAgbm9kZS5ub2RlVHlwZSA9PT0gMSAmJlxuICAgICAgKG5vZGUgYXMgSFRNTEVsZW1lbnQpLm91dGVySFRNTC50b1N0cmluZygpLnRyaW0oKS5sZW5ndGggIT09IDBcbiAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgbm9kZS5ub2RlVHlwZSA9PT0gMyAmJlxuICAgICAgbm9kZS50ZXh0Q29udGVudC50b1N0cmluZygpLnRyaW0oKS5sZW5ndGggIT09IDBcbiAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0Jvb2xlYW4oXG4gIHZhbHVlOiBhbnksXG4gIGFsbG93VW5kZWZpbmVkID0gZmFsc2UsXG4pOiBib29sZWFuIHtcbiAgcmV0dXJuIGFsbG93VW5kZWZpbmVkICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCdcbiAgICA/IHVuZGVmaW5lZFxuICAgIDogdmFsdWUgIT0gbnVsbCAmJiBgJHt2YWx1ZX1gICE9PSAnZmFsc2UnO1xufVxuXG4vKipcbiAqIElucHV0IGRlY29yYXRvciB0aGF0IGhhbmRsZSBhIHByb3AgdG8gZG8gZ2V0L3NldCBhdXRvbWF0aWNhbGx5IHdpdGggdG9Cb29sZWFuXG4gKiBAZXhhbXBsZVxuICogYGBgdHlwZXNjcmlwdFxuICogQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHZpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAqIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4obnVsbCkgdmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICogYGBgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBJbnB1dEJvb2xlYW4oYWxsb3dVbmRlZmluZWQgPSBmYWxzZSk6IGFueSB7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XG4gIHJldHVybiBmdW5jdGlvbiBJbnB1dEJvb2xlYW5Qcm9wRGVjb3JhdG9yICh0YXJnZXQ6IG9iamVjdCwgbmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgLy8gQWRkIG91ciBvd24gcHJpdmF0ZSBwcm9wXG4gICAgY29uc3QgcHJpdmF0ZVByb3BOYW1lID0gYCQkX18ke25hbWV9YDtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGFyZ2V0LCBwcml2YXRlUHJvcE5hbWUpKSB7XG4gICAgICBjb25zb2xlLndhcm4oYFRoZSBwcm9wIFwiJHtwcml2YXRlUHJvcE5hbWV9XCIgaXMgYWxyZWFkeSBleGlzdCwgaXQgd2lsbCBiZSBvdmVycmlkZWQgYnkgSW5wdXRCb29sZWFuIGRlY29yYXRvci5gKTtcbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcml2YXRlUHJvcE5hbWUsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBuYW1lLCB7XG4gICAgICBnZXQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzWyBwcml2YXRlUHJvcE5hbWUgXTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1pbnZhbGlkLXRoaXNcbiAgICAgIH0sXG4gICAgICBzZXQodmFsdWU6IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzWyBwcml2YXRlUHJvcE5hbWUgXSA9IHRvQm9vbGVhbih2YWx1ZSwgYWxsb3dVbmRlZmluZWQpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWludmFsaWQtdGhpc1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9OdW1iZXIodmFsdWU6IGFueSk6IG51bWJlcjtcbmV4cG9ydCBmdW5jdGlvbiB0b051bWJlcjxEPih2YWx1ZTogYW55LCBmYWxsYmFjazogRCk6IG51bWJlciB8IEQ7XG5leHBvcnQgZnVuY3Rpb24gdG9OdW1iZXIodmFsdWU6IGFueSwgZmFsbGJhY2tWYWx1ZSA9IDApIHtcbiAgcmV0dXJuICFpc05hTihwYXJzZUZsb2F0KHZhbHVlIGFzIGFueSkpICYmICFpc05hTihOdW1iZXIodmFsdWUpKVxuICAgID8gTnVtYmVyKHZhbHVlKVxuICAgIDogZmFsbGJhY2tWYWx1ZTtcbn1cblxuXG4vKipcbiAqIElucHV0IGRlY29yYXRvciB0aGF0IGhhbmRsZSBhIHByb3AgdG8gZG8gZ2V0L3NldCBhdXRvbWF0aWNhbGx5IHdpdGggdG9OdW1iZXJcbiAqIEBleGFtcGxlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBASW5wdXQoKSBASW5wdXROdW1iZXIoKSB2aXNpYmxlOiBudW1iZXIgPSAxO1xuICogQElucHV0KCkgQElucHV0TnVtYmVyKG51bGwpIHZpc2libGU6IG51bWJlciA9IDI7XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIElucHV0TnVtYmVyKGZhbGxiYWNrID0gMCk6IGFueSB7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XG4gIHJldHVybiBmdW5jdGlvbiBJbnB1dEJvb2xlYW5Qcm9wRGVjb3JhdG9yICh0YXJnZXQ6IG9iamVjdCwgbmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgLy8gQWRkIG91ciBvd24gcHJpdmF0ZSBwcm9wXG4gICAgY29uc3QgcHJpdmF0ZVByb3BOYW1lID0gYCQkX18ke25hbWV9YDtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGFyZ2V0LCBwcml2YXRlUHJvcE5hbWUpKSB7XG4gICAgICBjb25zb2xlLndhcm4oYFRoZSBwcm9wIFwiJHtwcml2YXRlUHJvcE5hbWV9XCIgaXMgYWxyZWFkeSBleGlzdCwgaXQgd2lsbCBiZSBvdmVycmlkZWQgYnkgSW5wdXROdW1iZXIgZGVjb3JhdG9yLmApO1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByaXZhdGVQcm9wTmFtZSwge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIG5hbWUsIHtcbiAgICAgIGdldCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbIHByaXZhdGVQcm9wTmFtZSBdOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWludmFsaWQtdGhpc1xuICAgICAgfSxcbiAgICAgIHNldCh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXNbIHByaXZhdGVQcm9wTmFtZSBdID0gdG9OdW1iZXIodmFsdWUsIGZhbGxiYWNrKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1pbnZhbGlkLXRoaXNcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn1cbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmZ1bmN0aW9uIHJlbW92ZUNsYXNzKFxuICBlbDogSFRNTEVsZW1lbnQsXG4gIGNsYXNzTWFwOiBvYmplY3QsXG4gIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4pOiB2b2lkIHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmZvcmluXG4gIGZvciAoY29uc3QgaSBpbiBjbGFzc01hcCkge1xuICAgIHJlbmRlcmVyLnJlbW92ZUNsYXNzKGVsLCBpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRDbGFzcyhcbiAgZWw6IEhUTUxFbGVtZW50LFxuICBjbGFzc01hcDogb2JqZWN0LFxuICByZW5kZXJlcjogUmVuZGVyZXIyLFxuKTogdm9pZCB7XG4gIGZvciAoY29uc3QgaSBpbiBjbGFzc01hcCkge1xuICAgIGlmIChjbGFzc01hcFtpXSkge1xuICAgICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWwsIGkpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIMOmwpvCtMOmwpbCsMOlwq7Cv8OkwrjCu8OnwrvChMOkwrvCtsOmwqDCt8OlwrzCjyBgY2xhc3Ngw6/CvMKMw6TCvsKLw6XCpsKCw6/CvMKaXG4gKlxuICogYGBgdHNcbiAqIHVwZGF0ZUhvc3RDbGFzcyhcbiAqICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsXG4gKiAge1xuICogICAgWyAnY2xhc3NuYW1lJyBdOiB0cnVlLFxuICogICAgWyAnY2xhc3NuYW1lJyBdOiB0aGlzLnR5cGUgPT09ICcxJyxcbiAqICAgIFsgdGhpcy5jbHMgXTogdHJ1ZSxcbiAqICAgIFsgYGEtJHt0aGlzLmNsc31gIF06IHRydWVcbiAqICB9LFxuICogIHRoaXMucmVuZGVyZXIpXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gW2NsZWFuQWxsXSDDpsKYwq/DpcKQwqbDpcKFwojDpsK4woXDp8KQwobDpsKJwoDDpsKcwokgYGNsYXNzYCDDpcKAwrzDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgZmFsc2VgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVIb3N0Q2xhc3MoXG4gIGVsOiBIVE1MRWxlbWVudCxcbiAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgY2xhc3NNYXA6IG9iamVjdCxcbiAgY2xlYW5BbGwgPSBmYWxzZVxuKTogdm9pZCB7XG4gIGlmIChjbGVhbkFsbCA9PT0gdHJ1ZSkge1xuICAgIHJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZShlbCwgJ2NsYXNzJyk7XG4gIH0gZWxzZSB7XG4gICAgcmVtb3ZlQ2xhc3MoZWwsIGNsYXNzTWFwLCByZW5kZXJlcik7XG4gIH1cbiAgY2xhc3NNYXAgPSB7IC4uLmNsYXNzTWFwIH07XG4gIGFkZENsYXNzKGVsLCBjbGFzc01hcCwgcmVuZGVyZXIpO1xufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXJyYXlDb25maWcgfSBmcm9tICcuL2FycmF5L2FycmF5LmNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgRGVsb25VdGlsQ29uZmlnIHtcbiAgYXJyYXk/OiBBcnJheUNvbmZpZztcbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56VHJlZU5vZGUgfSBmcm9tICduZy16b3Jyby1hbnRkJztcbmltcG9ydCB7IERlbG9uVXRpbENvbmZpZyB9IGZyb20gJy4uL3V0aWwuY29uZmlnJztcbmltcG9ydCB7IEFycmF5Q29uZmlnIH0gZnJvbSAnLi9hcnJheS5jb25maWcnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEFycmF5U2VydmljZSB7XG4gIHByaXZhdGUgYzogQXJyYXlDb25maWc7XG4gIGNvbnN0cnVjdG9yKGNvZzogRGVsb25VdGlsQ29uZmlnKSB7XG4gICAgdGhpcy5jID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIDxBcnJheUNvbmZpZz57XG4gICAgICAgIGRlZXBNYXBOYW1lOiAnZGVlcCcsXG4gICAgICAgIHBhcmVudE1hcE5hbWU6ICdwYXJlbnQnLFxuICAgICAgICBpZE1hcE5hbWU6ICdpZCcsXG4gICAgICAgIHBhcmVudElkTWFwTmFtZTogJ3BhcmVudF9pZCcsXG4gICAgICAgIGNoaWxkcmVuTWFwTmFtZTogJ2NoaWxkcmVuJyxcbiAgICAgICAgdGl0bGVNYXBOYW1lOiAndGl0bGUnLFxuICAgICAgICBjaGVja2VkTWFwbmFtZTogJ2NoZWNrZWQnLFxuICAgICAgICBzZWxlY3RlZE1hcG5hbWU6ICdzZWxlY3RlZCcsXG4gICAgICAgIGV4cGFuZGVkTWFwbmFtZTogJ2V4cGFuZGVkJyxcbiAgICAgICAgZGlzYWJsZWRNYXBuYW1lOiAnZGlzYWJsZWQnLFxuICAgICAgfSxcbiAgICAgIGNvZyAmJiBjb2cuYXJyYXksXG4gICAgKTtcbiAgfVxuICAvKipcbiAgICogw6XCsMKGw6bCoMKRw6fCu8KTw6bCnsKEw6jCvcKsw6bCjcKiw6bCiMKQw6bClcKww6fCu8KEw6fCu8KTw6bCnsKEXG4gICAqL1xuICB0cmVlVG9BcnIoXG4gICAgdHJlZTogYW55W10sXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKiDDpsK3wrHDpcK6wqbDqcKhwrnDpcKQwo3Dr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgJ2RlZXAnYCAqL1xuICAgICAgZGVlcE1hcE5hbWU/OiBzdHJpbmc7XG4gICAgICAvKiogw6bCicKBw6XCucKzw6XCkMKOw6bClcKww6fCu8KEw6fCmsKEw6fCiMK2w6bClcKww6bCjcKuw6nCocK5w6XCkMKNw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYCdwYXJlbnQnYCAqL1xuICAgICAgcGFyZW50TWFwTmFtZT86IHN0cmluZztcbiAgICAgIC8qKiDDpsK6wpDDpsKVwrDDpsKNwq7DpcKtwpDDqcKhwrnDpcKQwo3Dr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgJ2NoaWxkcmVuJ2AgKi9cbiAgICAgIGNoaWxkcmVuTWFwTmFtZT86IHN0cmluZztcbiAgICAgIC8qKiDDpsKYwq/DpcKQwqbDp8KnwrvDqcKZwqQgYGNoaWxkcmVuYCDDqMKKwoLDp8KCwrnDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgdHJ1ZWAgKi9cbiAgICAgIGNsZWFyQ2hpbGRyZW4/OiBib29sZWFuO1xuICAgICAgLyoqIMOowr3CrMOmwo3CosOmwojCkMOmwpXCsMOnwrvChMOnwrvCk8Omwp7ChMOmwpfCtsOlwpvCnsOowrDCgyAqL1xuICAgICAgY2I/OiAoaXRlbTogYW55LCBwYXJlbnQ6IGFueSwgZGVlcDogbnVtYmVyKSA9PiB2b2lkO1xuICAgIH0sXG4gICk6IGFueVtdIHtcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHtcbiAgICAgICAgZGVlcE1hcE5hbWU6IHRoaXMuYy5kZWVwTWFwTmFtZSxcbiAgICAgICAgcGFyZW50TWFwTmFtZTogdGhpcy5jLnBhcmVudE1hcE5hbWUsXG4gICAgICAgIGNoaWxkcmVuTWFwTmFtZTogdGhpcy5jLmNoaWxkcmVuTWFwTmFtZSxcbiAgICAgICAgY2xlYXJDaGlsZHJlbjogdHJ1ZSxcbiAgICAgICAgY2I6IG51bGwsXG4gICAgICB9LFxuICAgICAgb3B0aW9ucyxcbiAgICApO1xuICAgIGNvbnN0IHJlc3VsdDogYW55W10gPSBbXTtcbiAgICBjb25zdCBpbkZuID0gKGxpc3Q6IGFueVtdLCBwYXJlbnQ6IGFueSwgZGVlcDogbnVtYmVyKSA9PiB7XG4gICAgICBmb3IgKGNvbnN0IGkgb2YgbGlzdCkge1xuICAgICAgICBpW29wdGlvbnMuZGVlcE1hcE5hbWVdID0gZGVlcDtcbiAgICAgICAgaVtvcHRpb25zLnBhcmVudE1hcE5hbWVdID0gcGFyZW50O1xuICAgICAgICBpZiAob3B0aW9ucy5jYikgb3B0aW9ucy5jYihpLCBwYXJlbnQsIGRlZXApO1xuICAgICAgICByZXN1bHQucHVzaChpKTtcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBpW29wdGlvbnMuY2hpbGRyZW5NYXBOYW1lXTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGNoaWxkcmVuICE9IG51bGwgJiZcbiAgICAgICAgICBBcnJheS5pc0FycmF5KGNoaWxkcmVuKSAmJlxuICAgICAgICAgIGNoaWxkcmVuLmxlbmd0aCA+IDBcbiAgICAgICAgKSB7XG4gICAgICAgICAgaW5GbihjaGlsZHJlbiwgaSwgZGVlcCArIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmNsZWFyQ2hpbGRyZW4pIGRlbGV0ZSBpW29wdGlvbnMuY2hpbGRyZW5NYXBOYW1lXTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGluRm4odHJlZSwgMSwgbnVsbCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiDDpsKVwrDDp8K7woTDqMK9wqzDpsKNwqLDpsKIwpDDpsKgwpHDpsKVwrDDpsKNwq5cbiAgICovXG4gIGFyclRvVHJlZShcbiAgICBhcnI6IGFueVtdLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKiogw6fCvMKWw6XCj8K3w6nCocK5w6XCkMKNw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYCdpZCdgICovXG4gICAgICBpZE1hcE5hbWU/OiBzdHJpbmc7XG4gICAgICAvKiogw6fCiMK2w6fCvMKWw6XCj8K3w6nCocK5w6XCkMKNw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYCdwYXJlbnRfaWQnYCAqL1xuICAgICAgcGFyZW50SWRNYXBOYW1lPzogc3RyaW5nO1xuICAgICAgLyoqIMOlwq3CkMOpwqHCucOlwpDCjcOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmAnY2hpbGRyZW4nYCAqL1xuICAgICAgY2hpbGRyZW5NYXBOYW1lPzogc3RyaW5nO1xuICAgICAgLyoqIMOowr3CrMOmwo3CosOmwojCkMOmwqDCkcOmwpXCsMOmwo3CrsOmwpfCtsOlwpvCnsOowrDCgyAqL1xuICAgICAgY2I/OiAoaXRlbTogYW55KSA9PiB2b2lkO1xuICAgIH0sXG4gICk6IGFueVtdIHtcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHtcbiAgICAgICAgaWRNYXBOYW1lOiB0aGlzLmMuaWRNYXBOYW1lLFxuICAgICAgICBwYXJlbnRJZE1hcE5hbWU6IHRoaXMuYy5wYXJlbnRJZE1hcE5hbWUsXG4gICAgICAgIGNoaWxkcmVuTWFwTmFtZTogdGhpcy5jLmNoaWxkcmVuTWFwTmFtZSxcbiAgICAgICAgY2I6IG51bGwsXG4gICAgICB9LFxuICAgICAgb3B0aW9ucyxcbiAgICApO1xuICAgIGNvbnN0IHRyZWU6IGFueVtdID0gW107XG4gICAgY29uc3QgY2hpbGRyZW5PZiA9IHt9O1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBhcnIpIHtcbiAgICAgIGNvbnN0IGlkID0gaXRlbVtvcHRpb25zLmlkTWFwTmFtZV0sXG4gICAgICAgIHBpZCA9IGl0ZW1bb3B0aW9ucy5wYXJlbnRJZE1hcE5hbWVdO1xuICAgICAgY2hpbGRyZW5PZltpZF0gPSBjaGlsZHJlbk9mW2lkXSB8fCBbXTtcbiAgICAgIGl0ZW1bb3B0aW9ucy5jaGlsZHJlbk1hcE5hbWVdID0gY2hpbGRyZW5PZltpZF07XG4gICAgICBpZiAob3B0aW9ucy5jYikgb3B0aW9ucy5jYihpdGVtKTtcbiAgICAgIGlmIChwaWQpIHtcbiAgICAgICAgY2hpbGRyZW5PZltwaWRdID0gY2hpbGRyZW5PZltwaWRdIHx8IFtdO1xuICAgICAgICBjaGlsZHJlbk9mW3BpZF0ucHVzaChpdGVtKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyZWUucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRyZWU7XG4gIH1cblxuICAvKipcbiAgICogw6bClcKww6fCu8KEw6jCvcKsw6bCjcKiw6bCiMKQIGBuei10cmVlYCDDpsKVwrDDpsKNwq7DpsK6wpDDr8K8wozDqcKAwprDqMK/wocgYG9wdGlvbnNgIMOowr3CrMOlwozClsOpwqHCucOlwpDCjcOvwrzCjMOkwrnCn8Olwo/Cr8OkwrvCpcOkwr3Cv8OnwpTCqCBgb3B0aW9ucy5jYmAgw6bCm8K0w6nCq8KYw6fCusKnw6XChsKzw6XCrsKaw6bClcKww6bCjcKuw6nCocK5XG4gICAqL1xuICBhcnJUb1RyZWVOb2RlKFxuICAgIGFycjogYW55W10sXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKiDDp8K8wpbDpcKPwrfDqcKhwrnDpcKQwo3Dr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgJ2lkJ2AgKi9cbiAgICAgIGlkTWFwTmFtZT86IHN0cmluZztcbiAgICAgIC8qKiDDp8KIwrbDp8K8wpbDpcKPwrfDqcKhwrnDpcKQwo3Dr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgJ3BhcmVudF9pZCdgICovXG4gICAgICBwYXJlbnRJZE1hcE5hbWU/OiBzdHJpbmc7XG4gICAgICAvKiogw6bCoMKHw6nCosKYw6nCocK5w6XCkMKNw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYCd0aXRsZSdgICovXG4gICAgICB0aXRsZU1hcE5hbWU/OiBzdHJpbmc7XG4gICAgICAvKiogw6jCrsK+w6fCvcKuw6TCuMK6w6XCj8K2w6XCrcKQw6jCisKCw6fCgsK5w6nCocK5w6XCkMKNw6/CvMKMw6jCi8Klw6bClcKww6bCjcKuw6bCusKQw6TCuMKNw6XCrcKYw6XCnMKow6bCl8K2w6jCh8Kqw6XCisKow6bCoMK5w6bCjcKuIGBjaGlsZHJlbmAgw6XCgMK8w6XChsKzw6XCrsKaw6bCmMKvw6XCkMKmw6TCuMK6w6XCj8K2w6XCrcKQw6jCisKCw6fCgsK5w6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYCdpc0xlYWYnYCAqL1xuICAgICAgaXNMZWFmTWFwTmFtZT86IHN0cmluZztcbiAgICAgIC8qKiDDqMKKwoLDp8KCwrkgQ2hlY2tib3ggw6bCmMKvw6XCkMKmw6nCgMKJw6TCuMKtw6nCocK5w6XCkMKNw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYCdjaGVja2VkJ2AgKi9cbiAgICAgIGNoZWNrZWRNYXBuYW1lPzogc3RyaW5nO1xuICAgICAgLyoqIMOoworCgsOnwoLCucOmwpzCrMOowrrCq8OmwpjCr8OlwpDCpsOpwoDCicOkwrjCrcOpwqHCucOlwpDCjcOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmAnc2VsZWN0ZWQnYCAqL1xuICAgICAgc2VsZWN0ZWRNYXBuYW1lPzogc3RyaW5nO1xuICAgICAgLyoqIMOoworCgsOnwoLCucOmwpjCr8OlwpDCpsOlwrHClcOlwrzCgCjDpcKPwrbDpcKtwpDDqMKKwoLDp8KCwrnDpsKXwqDDpsKVwogpw6nCocK5w6XCkMKNw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYCdleHBhbmRlZCdgICovXG4gICAgICBleHBhbmRlZE1hcG5hbWU/OiBzdHJpbmc7XG4gICAgICAvKiogw6jCrsK+w6fCvcKuw6bCmMKvw6XCkMKmw6fCpsKBw6fClMKow6jCisKCw6fCgsK5KMOkwrjCjcOlwo/Cr8Oowr/Cm8OowqHCjMOkwrvCu8Okwr3ClcOmwpPCjcOkwr3CnCnDqcKhwrnDpcKQwo3Dr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgJ2Rpc2FibGVkJ2AgKi9cbiAgICAgIGRpc2FibGVkTWFwbmFtZT86IHN0cmluZztcbiAgICAgIC8qKiDDqMK9wqzDpsKNwqLDpsKIwpDDpsKgwpHDpsKVwrDDpsKNwq7DpcKQwo7Dr8K8wozDpsKJwqfDqMKhwozDp8KawoTDqcKAwpLDpcK9wpLDpcKbwp7DqMKwwoMgKi9cbiAgICAgIGNiPzogKGl0ZW06IGFueSwgcGFyZW50OiBhbnksIGRlZXA6IG51bWJlcikgPT4gdm9pZDtcbiAgICB9LFxuICApOiBOelRyZWVOb2RlW10ge1xuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKFxuICAgICAge1xuICAgICAgICBleHBhbmRlZDogZmFsc2UsXG4gICAgICAgIGlkTWFwTmFtZTogdGhpcy5jLmlkTWFwTmFtZSxcbiAgICAgICAgcGFyZW50SWRNYXBOYW1lOiB0aGlzLmMucGFyZW50SWRNYXBOYW1lLFxuICAgICAgICB0aXRsZU1hcE5hbWU6IHRoaXMuYy50aXRsZU1hcE5hbWUsXG4gICAgICAgIGlzTGVhZk1hcE5hbWU6ICdpc0xlYWYnLFxuICAgICAgICBjaGVja2VkTWFwbmFtZTogdGhpcy5jLmNoZWNrZWRNYXBuYW1lLFxuICAgICAgICBzZWxlY3RlZE1hcG5hbWU6IHRoaXMuYy5zZWxlY3RlZE1hcG5hbWUsXG4gICAgICAgIGV4cGFuZGVkTWFwbmFtZTogdGhpcy5jLmV4cGFuZGVkTWFwbmFtZSxcbiAgICAgICAgZGlzYWJsZWRNYXBuYW1lOiB0aGlzLmMuZGlzYWJsZWRNYXBuYW1lLFxuICAgICAgICBjYjogbnVsbCxcbiAgICAgIH0sXG4gICAgICBvcHRpb25zLFxuICAgICk7XG4gICAgY29uc3QgdHJlZSA9IHRoaXMuYXJyVG9UcmVlKGFyciwge1xuICAgICAgaWRNYXBOYW1lOiBvcHRpb25zLmlkTWFwTmFtZSxcbiAgICAgIHBhcmVudElkTWFwTmFtZTogb3B0aW9ucy5wYXJlbnRJZE1hcE5hbWUsXG4gICAgICBjaGlsZHJlbk1hcE5hbWU6ICdjaGlsZHJlbicsXG4gICAgfSk7XG4gICAgdGhpcy52aXNpdFRyZWUodHJlZSwgKGl0ZW06IGFueSwgcGFyZW50OiBhbnksIGRlZXA6IG51bWJlcikgPT4ge1xuICAgICAgaXRlbS5rZXkgPSBpdGVtW29wdGlvbnMuaWRNYXBOYW1lXTtcbiAgICAgIGl0ZW0udGl0bGUgPSBpdGVtW29wdGlvbnMudGl0bGVNYXBOYW1lXTtcbiAgICAgIGl0ZW0uY2hlY2tlZCA9IGl0ZW1bb3B0aW9ucy5jaGVja2VkTWFwbmFtZV07XG4gICAgICBpdGVtLnNlbGVjdGVkID0gaXRlbVtvcHRpb25zLnNlbGVjdGVkTWFwbmFtZV07XG4gICAgICBpdGVtLmV4cGFuZGVkID0gaXRlbVtvcHRpb25zLmV4cGFuZGVkTWFwbmFtZV07XG4gICAgICBpdGVtLmRpc2FibGVkID0gaXRlbVtvcHRpb25zLmRpc2FibGVkTWFwbmFtZV07XG4gICAgICBpZiAoaXRlbVtvcHRpb25zLmlzTGVhZk1hcE5hbWVdID09IG51bGwpIHtcbiAgICAgICAgaXRlbS5pc0xlYWYgPSBpdGVtLmNoaWxkcmVuLmxlbmd0aCA9PT0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGl0ZW0uaXNMZWFmID0gaXRlbVtvcHRpb25zLmlzTGVhZk1hcE5hbWVdO1xuICAgICAgfVxuICAgICAgaWYgKG9wdGlvbnMuY2IpIG9wdGlvbnMuY2IoaXRlbSwgcGFyZW50LCBkZWVwKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdHJlZS5tYXAobm9kZSA9PiBuZXcgTnpUcmVlTm9kZShub2RlKSk7XG4gIH1cblxuICAvKipcbiAgICogw6nCgMKSw6XCvcKSw6jCrsK/w6nCl8Kuw6bClcK0w6TCuMKqw6bCoMKRXG4gICAqL1xuICB2aXNpdFRyZWUoXG4gICAgdHJlZTogYW55W10sXG4gICAgY2I6IChpdGVtOiBhbnksIHBhcmVudDogYW55LCBkZWVwOiBudW1iZXIpID0+IHZvaWQsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKiDDpcKtwpDDqcKhwrnDpcKQwo3Dr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgJ2NoaWxkcmVuJ2AgKi9cbiAgICAgIGNoaWxkcmVuTWFwTmFtZT86IHN0cmluZztcbiAgICB9LFxuICApIHtcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHtcbiAgICAgICAgY2hpbGRyZW5NYXBOYW1lOiB0aGlzLmMuY2hpbGRyZW5NYXBOYW1lLFxuICAgICAgfSxcbiAgICAgIG9wdGlvbnMsXG4gICAgKTtcbiAgICBjb25zdCBpbkZuID0gKGRhdGE6IGFueVtdLCBwYXJlbnQ6IGFueSwgZGVlcDogbnVtYmVyKSA9PiB7XG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZGF0YSkge1xuICAgICAgICBjYihpdGVtLCBwYXJlbnQsIGRlZXApO1xuICAgICAgICBjb25zdCBjaGlsZHJlblZhbCA9IGl0ZW1bb3B0aW9ucy5jaGlsZHJlbk1hcE5hbWVdO1xuICAgICAgICBpZiAoY2hpbGRyZW5WYWwgJiYgY2hpbGRyZW5WYWwubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGluRm4oY2hpbGRyZW5WYWwsIGl0ZW0sIGRlZXAgKyAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgaW5Gbih0cmVlLCBudWxsLCAxKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDDqMKOwrfDpcKPwpbDpsKJwoDDpsKcwonDpcK3wrLDp8K7wo/DqcKAwonDpMK4wq3Dp8KawoQgYGtleWAgw6XCgMK8XG4gICAqL1xuICBnZXRLZXlzQnlUcmVlTm9kZShcbiAgICB0cmVlOiBOelRyZWVOb2RlW10sXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKiDDpsKYwq/DpcKQwqbDpcKMwoXDpcKQwqvDpcKNworDqcKAwonDp8KKwrbDpsKAwoHDp8KawoTDpcKAwrzDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgdHJ1ZWAgKi9cbiAgICAgIGluY2x1ZGVIYWxmQ2hlY2tlZD86IGJvb2xlYW47XG4gICAgICAvKiogw6bCmMKvw6XCkMKmw6nCh8KNw6bClsKww6bCjMKHw6XCrsKaIGBrZXlgIMOpwpTCrsOlwpDCjcOvwrzCjMOowovCpcOkwrjCjcOmwozCh8Olwq7CmsOowqHCqMOnwqTCusOkwr3Cv8OnwpTCqCBgTnpUcmVlTm9kZS5rZXlgIMOlwoDCvCAqL1xuICAgICAga2V5TWFwTmFtZT86IHN0cmluZztcbiAgICAgIC8qKiDDpcKbwp7DqMKwwoPDr8K8wozDqMK/wpTDpcKbwp7DpMK4woDDpMK4wqrDpcKAwrwgYGtleWAgw6XCgMK8w6/CvMKMw6TCvMKYw6XChcKIw6fCusKnw6nCq8KYw6TCusKOw6XChcK2w6TCu8KWICovXG4gICAgICBjYj86IChpdGVtOiBOelRyZWVOb2RlLCBwYXJlbnQ6IE56VHJlZU5vZGUsIGRlZXA6IG51bWJlcikgPT4gYW55O1xuICAgIH0sXG4gICk6IGFueVtdIHtcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHtcbiAgICAgICAgaW5jbHVkZUhhbGZDaGVja2VkOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIG9wdGlvbnMsXG4gICAgKTtcbiAgICBjb25zdCBrZXlzOiBhbnlbXSA9IFtdO1xuICAgIHRoaXMudmlzaXRUcmVlKFxuICAgICAgdHJlZSxcbiAgICAgIChpdGVtOiBOelRyZWVOb2RlLCBwYXJlbnQ6IE56VHJlZU5vZGUsIGRlZXA6IG51bWJlcikgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaXRlbS5pc0NoZWNrZWQgfHxcbiAgICAgICAgICAob3B0aW9ucy5pbmNsdWRlSGFsZkNoZWNrZWQgJiYgaXRlbS5pc0hhbGZDaGVja2VkKVxuICAgICAgICApIHtcbiAgICAgICAgICBrZXlzLnB1c2goXG4gICAgICAgICAgICBvcHRpb25zLmNiXG4gICAgICAgICAgICAgID8gb3B0aW9ucy5jYihpdGVtLCBwYXJlbnQsIGRlZXApXG4gICAgICAgICAgICAgIDogb3B0aW9ucy5rZXlNYXBOYW1lXG4gICAgICAgICAgICAgICAgPyBpdGVtLm9yaWdpbltvcHRpb25zLmtleU1hcE5hbWVdXG4gICAgICAgICAgICAgICAgOiBpdGVtLmtleSxcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICk7XG4gICAgcmV0dXJuIGtleXM7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgRGVsb25VdGlsTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBEZWxvblV0aWxNb2R1bGUsXG4gICAgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkJlaGF2aW9yU3ViamVjdCIsInNoYXJlIiwiZmlsdGVyIiwiSW5qZWN0YWJsZSIsIkluamVjdCIsIkRPQ1VNRU5UIiwidHNsaWJfMS5fX3ZhbHVlcyIsIk56VHJlZU5vZGUiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7O0FBVUEscUJBQXdCLEdBQVEsRUFBRSxJQUF1QixFQUFFLFlBQWtCO1FBQzNFLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUM7WUFBRSxPQUFPLFlBQVksQ0FBQztRQUNuRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN4QixJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBRSxJQUFJLENBQUUsQ0FBQztTQUN4RDtRQUNELElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7O1lBQ3JCLElBQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixPQUFPLE9BQU8sUUFBUSxLQUFLLFdBQVcsR0FBRyxZQUFZLEdBQUcsUUFBUSxDQUFDO1NBQ2xFO1FBQ0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBQSxFQUFFLEdBQUcsQ0FBQyxJQUFJLFlBQVksQ0FBQztLQUNqRTs7Ozs7QUFFRCxzQkFBeUIsR0FBUTs7UUFDL0IsSUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksRUFBRSxFQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUM3QyxPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUM7S0FDakI7Ozs7OztBQUdELGtCQUFxQixLQUFhO1FBQ2hDLE9BQU8sSUFBSSxPQUFPLENBQVMsVUFBQyxPQUFPLEVBQUUsTUFBTTs7WUFDekMsSUFBSSxZQUFZLHFCQUFHLElBQTJCLEVBQUM7WUFDL0MsSUFBSTtnQkFDRixZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDbEQsWUFBWSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNsQyxZQUFZLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7Z0JBQ2pDLFlBQVksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztnQkFDakMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQ3hDLFlBQVksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2dCQUMzQixZQUFZLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ3RCLFFBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzdCLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNoQjtvQkFBUztnQkFDUixJQUFJLFlBQVksSUFBSSxZQUFZLENBQUMsVUFBVSxFQUFFO29CQUMzQyxZQUFZLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztpQkFDbkQ7YUFDRjtTQUNGLENBQUMsQ0FBQztLQUNKOzs7Ozs7QUMvQ0Q7Ozs7Ozs7Ozs7Ozs7QUFXQSxvQkFBdUIsR0FBVyxFQUFFLEdBQU8sRUFBRSxXQUFtQjtRQUFuQiw0QkFBQTtZQUFBLG1CQUFtQjs7UUFDOUQsT0FBTyxDQUFDLEdBQUcsSUFBSSxFQUFFLEVBQUUsT0FBTyxDQUN4QixjQUFjLEVBQ2QsVUFBQyxJQUFZLEVBQUUsR0FBVztZQUN4QixPQUFBLFdBQVc7a0JBQ1AsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQztrQkFDaEMsQ0FBQyxHQUFHLElBQUksRUFBRSxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUU7U0FBQSxDQUM3QixDQUFDO0tBQ0g7Ozs7Ozs7QUFNRCxrQkFBcUIsS0FBVSxFQUFFLE1BQWtCO1FBQWxCLHVCQUFBO1lBQUEsVUFBa0I7O1FBQ2pELElBQUksT0FBTyxLQUFLLEtBQUssUUFBUTtZQUFFLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdELE9BQU8sVUFBUSxLQUFPLENBQUM7S0FDeEI7Ozs7OztBQzVCRDs7Ozs7O0FBaUJBLDZCQUNFLElBU1UsRUFDVixJQUE2QjtRQUU3QixJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7UUFFakMsUUFBUSxJQUFJO1lBQ1YsS0FBSyxPQUFPO2dCQUNWLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDdEIsS0FBSyxRQUFRO2dCQUNYLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDbkMsS0FBSyxNQUFNO2dCQUNULE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDOUMsS0FBSyxPQUFPO2dCQUNWLE9BQU8sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4RSxLQUFLLE9BQU87Z0JBQ1YsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNoRCxLQUFLLFFBQVE7Z0JBQ1gsT0FBTyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVFLEtBQUssTUFBTTtnQkFDVCxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzlDLEtBQUssT0FBTztnQkFDVixPQUFPLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEU7Z0JBQ0UsT0FBTyxJQUFJLEdBQUcsQ0FBQztzQkFDWCxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO3NCQUMzQixDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDbkM7S0FDRjs7Ozs7O0FDdEREO1FBbUJFLHFCQUFzQyxHQUFRO1lBQVIsUUFBRyxHQUFILEdBQUcsQ0FBSzt3QkFOMUIsRUFBRTswQkFDQSxFQUFFOzJCQUN5QixJQUFJQSxvQkFBZSxDQUVsRSxFQUFFLENBQUM7U0FFNkM7UUFFbEQsc0JBQUksK0JBQU07OztnQkFBVjtnQkFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUNyQ0MsZUFBSyxFQUFFLEVBQ1BDLGdCQUFNLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxFQUFFLENBQUMsTUFBTSxLQUFLLENBQUMsR0FBQSxDQUFDLENBQzlCLENBQUM7YUFDSDs7O1dBQUE7Ozs7UUFFRCwyQkFBSzs7O1lBQUw7Z0JBQ0UsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7YUFDbEI7Ozs7O1FBRUQsMEJBQUk7Ozs7WUFBSixVQUFLLEtBQXdCO2dCQUE3QixpQkFnQkM7Z0JBZkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO29CQUFFLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDOztnQkFFM0MsSUFBTSxRQUFRLEdBQTBCLEVBQUUsQ0FBQztnQkFDM0MsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7b0JBQ2hCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTt3QkFDeEIsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7cUJBQ3RDO3lCQUFNO3dCQUNMLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO3FCQUNyQztpQkFDRixDQUFDLENBQUM7Z0JBRUgsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7b0JBQ25DLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN2QixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQzdCLENBQUMsQ0FBQzthQUNKOzs7Ozs7UUFFRCxnQ0FBVTs7Ozs7WUFBVixVQUFXLElBQVksRUFBRSxZQUFxQjtnQkFBOUMsaUJBb0RDO2dCQW5EQyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUEsT0FBTztvQkFDeEIsSUFBSSxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRTt3QkFDNUIsT0FBTyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDM0IsT0FBTztxQkFDUjtvQkFFRCxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQzs7b0JBQ3ZCLElBQU0sU0FBUyxHQUFHLFVBQUMsSUFBUzt3QkFDMUIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7d0JBQ3pCLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztxQkFDZixDQUFDOztvQkFFRixJQUFNLElBQUkscUJBQUcsS0FBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFzQixFQUFDO29CQUNuRSxJQUFJLENBQUMsSUFBSSxHQUFHLGlCQUFpQixDQUFDO29CQUM5QixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztvQkFDaEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7b0JBQ3ZCLElBQUksWUFBWSxFQUFFO3dCQUNoQixJQUFJLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQztxQkFDL0I7b0JBQ0QsSUFBSSxtQkFBTSxJQUFJLEdBQUUsVUFBVSxFQUFFOzt3QkFFMUIsbUJBQU0sSUFBSSxHQUFFLGtCQUFrQixHQUFHOzRCQUMvQixJQUNFLG1CQUFNLElBQUksR0FBRSxVQUFVLEtBQUssUUFBUTtnQ0FDbkMsbUJBQU0sSUFBSSxHQUFFLFVBQVUsS0FBSyxVQUFVLEVBQ3JDO2dDQUNBLG1CQUFNLElBQUksR0FBRSxrQkFBa0IsR0FBRyxJQUFJLENBQUM7Z0NBQ3RDLFNBQVMsQ0FBQztvQ0FDUixJQUFJLEVBQUUsSUFBSTtvQ0FDVixNQUFNLEVBQUUsSUFBSTtvQ0FDWixNQUFNLEVBQUUsSUFBSTtpQ0FDYixDQUFDLENBQUM7NkJBQ0o7eUJBQ0YsQ0FBQztxQkFDSDt5QkFBTTt3QkFDTCxJQUFJLENBQUMsTUFBTSxHQUFHOzRCQUNaLFNBQVMsQ0FBQztnQ0FDUixJQUFJLEVBQUUsSUFBSTtnQ0FDVixNQUFNLEVBQUUsSUFBSTtnQ0FDWixNQUFNLEVBQUUsSUFBSTs2QkFDYixDQUFDLENBQUM7eUJBQ0osQ0FBQztxQkFDSDtvQkFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLFVBQUMsS0FBVTt3QkFDeEIsT0FBQSxTQUFTLENBQUM7NEJBQ1IsSUFBSSxFQUFFLElBQUk7NEJBQ1YsTUFBTSxFQUFFLEtBQUs7NEJBQ2IsTUFBTSxFQUFFLE9BQU87eUJBQ2hCLENBQUM7cUJBQUEsQ0FBQztvQkFDTCxLQUFJLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDNUQsQ0FBQyxDQUFDO2FBQ0o7Ozs7Ozs7UUFFRCwrQkFBUzs7Ozs7O1lBQVQsVUFDRSxJQUFZLEVBQ1osR0FBa0IsRUFDbEIsWUFBcUI7Z0JBSHZCLGlCQTZCQztnQkEzQkMsb0JBQUE7b0JBQUEsa0JBQWtCOztnQkFHbEIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFBLE9BQU87b0JBQ3hCLElBQUksS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUU7d0JBQzVCLE9BQU8sQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQzNCLE9BQU87cUJBQ1I7b0JBRUQsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7O29CQUV2QixJQUFNLElBQUkscUJBQUcsS0FBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFvQixFQUFDO29CQUMvRCxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztvQkFDZixJQUFJLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztvQkFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7b0JBQ2pCLElBQUksWUFBWSxFQUFFO3dCQUNoQixJQUFJLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQztxQkFDL0I7b0JBQ0QsS0FBSSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7O29CQUMzRCxJQUFNLElBQUksR0FBZTt3QkFDdkIsSUFBSSxFQUFFLElBQUk7d0JBQ1YsTUFBTSxFQUFFLElBQUk7d0JBQ1osTUFBTSxFQUFFLElBQUk7cUJBQ2IsQ0FBQztvQkFDRixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztvQkFDekIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNmLENBQUMsQ0FBQzthQUNKOztvQkEzSEZDLGFBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7O3dEQVFuQkMsU0FBTSxTQUFDQyxXQUFROzs7OzBCQW5COUI7Ozs7Ozs7Ozs7OztBQ0NBLG1CQUFzQixLQUFzQjtRQUMxQyxPQUFPLG9DQUFvQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztLQUNwRTs7Ozs7O0FBR0QsbUJBQXNCLEtBQXNCOztRQUUxQyxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEtBQUssQ0FBQztLQUNoRTs7Ozs7O0FBR0QsdUJBQTBCLEtBQXNCO1FBQzlDLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3RDOzs7Ozs7QUFHRCxzQkFBeUIsS0FBVTtRQUNqQyxRQUNFLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxpQ0FBaUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQzFFO0tBQ0g7Ozs7OztBQUdELHNCQUF5QixLQUFVO1FBQ2pDLFFBQ0UsT0FBTyxLQUFLLEtBQUssUUFBUTtZQUN6QixxRUFBcUUsQ0FBQyxJQUFJLENBQ3hFLEtBQUssQ0FDTixFQUNEO0tBQ0g7Ozs7OztBQzlCRDs7O0FBSUE7O1FBQUE7Ozs7Ozs7OztRQUVTLGVBQUc7Ozs7O1lBQVYsVUFBVyxPQUF3QjtnQkFDakMsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQzthQUNwRDs7Ozs7OztRQUdNLGVBQUc7Ozs7O1lBQVYsVUFBVyxPQUF3QjtnQkFDakMsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQzthQUNwRDs7Ozs7OztRQUdNLG1CQUFPOzs7OztZQUFkLFVBQWUsT0FBd0I7Z0JBQ3JDLE9BQU8sU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLEdBQUcsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7YUFDNUQ7Ozs7Ozs7UUFHTSxrQkFBTTs7Ozs7WUFBYixVQUFjLE9BQXdCO2dCQUNwQyxPQUFPLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDO2FBQzFEOzs7Ozs7O1FBR00sa0JBQU07Ozs7O1lBQWIsVUFBYyxPQUF3QjtnQkFDcEMsT0FBTyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQzthQUMxRDswQkE3Qkg7UUE4QkM7Ozs7Ozs7Ozs7QUM5QkQscUJBQXdCLE9BQW9COztRQUMxQyxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO1FBQ2pDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztZQUNyQyxJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNCLElBQ0UsSUFBSSxDQUFDLFFBQVEsS0FBSyxDQUFDO2dCQUNuQixtQkFBQyxJQUFtQixHQUFFLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUM5RDtnQkFDQSxPQUFPLEtBQUssQ0FBQzthQUNkO2lCQUFNLElBQ0wsSUFBSSxDQUFDLFFBQVEsS0FBSyxDQUFDO2dCQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQy9DO2dCQUNBLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7U0FDRjtRQUNELE9BQU8sSUFBSSxDQUFDO0tBQ2I7Ozs7OztBQUVELHVCQUNFLEtBQVUsRUFDVixjQUFzQjtRQUF0QiwrQkFBQTtZQUFBLHNCQUFzQjs7UUFFdEIsT0FBTyxjQUFjLElBQUksT0FBTyxLQUFLLEtBQUssV0FBVztjQUNqRCxTQUFTO2NBQ1QsS0FBSyxJQUFJLElBQUksSUFBSSxLQUFHLEtBQU8sS0FBSyxPQUFPLENBQUM7S0FDN0M7Ozs7Ozs7Ozs7O0FBVUQsMEJBQTZCLGNBQXNCO1FBQXRCLCtCQUFBO1lBQUEsc0JBQXNCOzs7UUFDakQsT0FBTyxtQ0FBb0MsTUFBYyxFQUFFLElBQVk7O1lBRXJFLElBQU0sZUFBZSxHQUFHLFNBQU8sSUFBTSxDQUFDO1lBRXRDLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxlQUFlLENBQUMsRUFBRTtnQkFDakUsT0FBTyxDQUFDLElBQUksQ0FBQyxnQkFBYSxlQUFlLHlFQUFxRSxDQUFDLENBQUM7YUFDakg7WUFFRCxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxlQUFlLEVBQUU7Z0JBQzdDLFlBQVksRUFBRSxJQUFJO2dCQUNsQixRQUFRLEVBQUUsSUFBSTthQUNmLENBQUMsQ0FBQztZQUVILE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRTtnQkFDbEMsR0FBRzs7b0JBQUg7b0JBQ0UsT0FBTyxJQUFJLENBQUUsZUFBZSxDQUFFLENBQUM7aUJBQ2hDO2dCQUNELEdBQUc7OztvQkFBSCxVQUFJLEtBQVU7b0JBQ1osSUFBSSxDQUFFLGVBQWUsQ0FBRSxHQUFHLFNBQVMsQ0FBQyxLQUFLLEVBQUUsY0FBYyxDQUFDLENBQUM7aUJBQzVEO2FBQ0YsQ0FBQyxDQUFDO1NBQ0osQ0FBQztLQUNIOzs7Ozs7QUFJRCxzQkFBeUIsS0FBVSxFQUFFLGFBQWlCO1FBQWpCLDhCQUFBO1lBQUEsaUJBQWlCOztRQUNwRCxPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsbUJBQUMsS0FBWSxFQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Y0FDNUQsTUFBTSxDQUFDLEtBQUssQ0FBQztjQUNiLGFBQWEsQ0FBQztLQUNuQjs7Ozs7Ozs7Ozs7QUFXRCx5QkFBNEIsUUFBWTtRQUFaLHlCQUFBO1lBQUEsWUFBWTs7O1FBQ3RDLE9BQU8sbUNBQW9DLE1BQWMsRUFBRSxJQUFZOztZQUVyRSxJQUFNLGVBQWUsR0FBRyxTQUFPLElBQU0sQ0FBQztZQUV0QyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsZUFBZSxDQUFDLEVBQUU7Z0JBQ2pFLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0JBQWEsZUFBZSx3RUFBb0UsQ0FBQyxDQUFDO2FBQ2hIO1lBRUQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsZUFBZSxFQUFFO2dCQUM3QyxZQUFZLEVBQUUsSUFBSTtnQkFDbEIsUUFBUSxFQUFFLElBQUk7YUFDZixDQUFDLENBQUM7WUFFSCxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUU7Z0JBQ2xDLEdBQUc7O29CQUFIO29CQUNFLE9BQU8sSUFBSSxDQUFFLGVBQWUsQ0FBRSxDQUFDO2lCQUNoQztnQkFDRCxHQUFHOzs7b0JBQUgsVUFBSSxLQUFVO29CQUNaLElBQUksQ0FBRSxlQUFlLENBQUUsR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2lCQUNyRDthQUNGLENBQUMsQ0FBQztTQUNKLENBQUM7S0FDSDs7SUNyR0Q7Ozs7Ozs7Ozs7Ozs7O0FBY0EsSUFlTyxJQUFJLFFBQVEsR0FBRztRQUNsQixRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sSUFBSSxrQkFBa0IsQ0FBQztZQUMzQyxLQUFLLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDakQsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDakIsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDO29CQUFFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7d0JBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNoRjtZQUNELE9BQU8sQ0FBQyxDQUFDO1NBQ1osQ0FBQTtRQUNELE9BQU8sUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDM0MsQ0FBQyxDQUFBO0FBRUQsc0JBa0V5QixDQUFDO1FBQ3RCLElBQUksQ0FBQyxHQUFHLE9BQU8sTUFBTSxLQUFLLFVBQVUsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDO1lBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLE9BQU87WUFDSCxJQUFJLEVBQUU7Z0JBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNO29CQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztnQkFDbkMsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7YUFDM0M7U0FDSixDQUFDO0lBQ04sQ0FBQzs7Ozs7Ozs7Ozs7O0lDakhELHFCQUNFLEVBQWUsRUFDZixRQUFnQixFQUNoQixRQUFtQjs7UUFHbkIsS0FBSyxJQUFNLENBQUMsSUFBSSxRQUFRLEVBQUU7WUFDeEIsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDN0I7S0FDRjs7Ozs7OztJQUVELGtCQUNFLEVBQWUsRUFDZixRQUFnQixFQUNoQixRQUFtQjtRQUVuQixLQUFLLElBQU0sQ0FBQyxJQUFJLFFBQVEsRUFBRTtZQUN4QixJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDZixRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUMxQjtTQUNGO0tBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQkQsNkJBQ0UsRUFBZSxFQUNmLFFBQW1CLEVBQ25CLFFBQWdCLEVBQ2hCLFFBQWdCO1FBQWhCLHlCQUFBO1lBQUEsZ0JBQWdCOztRQUVoQixJQUFJLFFBQVEsS0FBSyxJQUFJLEVBQUU7WUFDckIsUUFBUSxDQUFDLGVBQWUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDdkM7YUFBTTtZQUNMLFdBQVcsQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQ3JDO1FBQ0QsUUFBUSxnQkFBUSxRQUFRLENBQUUsQ0FBQztRQUMzQixRQUFRLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztLQUNsQzs7Ozs7O0FDdkREOzs7O29CQUdDRixhQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7OEJBSGxDOzs7Ozs7OztRQ1FFLHNCQUFZLEdBQW9CO1lBQzlCLElBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sbUJBQ1A7Z0JBQ1gsV0FBVyxFQUFFLE1BQU07Z0JBQ25CLGFBQWEsRUFBRSxRQUFRO2dCQUN2QixTQUFTLEVBQUUsSUFBSTtnQkFDZixlQUFlLEVBQUUsV0FBVztnQkFDNUIsZUFBZSxFQUFFLFVBQVU7Z0JBQzNCLFlBQVksRUFBRSxPQUFPO2dCQUNyQixjQUFjLEVBQUUsU0FBUztnQkFDekIsZUFBZSxFQUFFLFVBQVU7Z0JBQzNCLGVBQWUsRUFBRSxVQUFVO2dCQUMzQixlQUFlLEVBQUUsVUFBVTthQUM1QixHQUNELEdBQUcsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUNqQixDQUFDO1NBQ0g7Ozs7Ozs7Ozs7UUFJRCxnQ0FBUzs7Ozs7O1lBQVQsVUFDRSxJQUFXLEVBQ1gsT0FXQztnQkFFRCxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FDckI7b0JBQ0UsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBVztvQkFDL0IsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsYUFBYTtvQkFDbkMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsZUFBZTtvQkFDdkMsYUFBYSxFQUFFLElBQUk7b0JBQ25CLEVBQUUsRUFBRSxJQUFJO2lCQUNULEVBQ0QsT0FBTyxDQUNSLENBQUM7O2dCQUNGLElBQU0sTUFBTSxHQUFVLEVBQUUsQ0FBQzs7Z0JBQ3pCLElBQU0sSUFBSSxHQUFHLFVBQUMsSUFBVyxFQUFFLE1BQVcsRUFBRSxJQUFZOzs7d0JBQ2xELEtBQWdCLElBQUEsU0FBQUcsU0FBQSxJQUFJLENBQUEsMEJBQUEsNENBQUU7NEJBQWpCLElBQU0sQ0FBQyxpQkFBQTs0QkFDVixDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxHQUFHLElBQUksQ0FBQzs0QkFDOUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsR0FBRyxNQUFNLENBQUM7NEJBQ2xDLElBQUksT0FBTyxDQUFDLEVBQUU7Z0NBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDOzRCQUM1QyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDOzs0QkFDZixJQUFNLFFBQVEsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDOzRCQUM1QyxJQUNFLFFBQVEsSUFBSSxJQUFJO2dDQUNoQixLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztnQ0FDdkIsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQ25CO2dDQUNBLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQzs2QkFDN0I7NEJBQ0QsSUFBSSxPQUFPLENBQUMsYUFBYTtnQ0FBRSxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7eUJBQzlEOzs7Ozs7Ozs7Ozs7Ozs7aUJBQ0YsQ0FBQztnQkFDRixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDcEIsT0FBTyxNQUFNLENBQUM7YUFDZjs7Ozs7Ozs7OztRQUtELGdDQUFTOzs7Ozs7WUFBVCxVQUNFLEdBQVUsRUFDVixPQVNDOztnQkFFRCxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FDckI7b0JBQ0UsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUztvQkFDM0IsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsZUFBZTtvQkFDdkMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsZUFBZTtvQkFDdkMsRUFBRSxFQUFFLElBQUk7aUJBQ1QsRUFDRCxPQUFPLENBQ1IsQ0FBQzs7Z0JBQ0YsSUFBTSxJQUFJLEdBQVUsRUFBRSxDQUFDOztnQkFDdkIsSUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDOztvQkFDdEIsS0FBbUIsSUFBQSxRQUFBQSxTQUFBLEdBQUcsQ0FBQSx3QkFBQSx5Q0FBRTt3QkFBbkIsSUFBTSxJQUFJLGdCQUFBOzt3QkFDYixJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUNJOzt3QkFEdEMsSUFDRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQzt3QkFDdEMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7d0JBQ3RDLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUMvQyxJQUFJLE9BQU8sQ0FBQyxFQUFFOzRCQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ2pDLElBQUksR0FBRyxFQUFFOzRCQUNQLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDOzRCQUN4QyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3lCQUM1Qjs2QkFBTTs0QkFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3lCQUNqQjtxQkFDRjs7Ozs7Ozs7Ozs7Ozs7O2dCQUNELE9BQU8sSUFBSSxDQUFDO2FBQ2I7Ozs7Ozs7Ozs7UUFLRCxvQ0FBYTs7Ozs7O1lBQWIsVUFDRSxHQUFVLEVBQ1YsT0FtQkM7Z0JBRUQsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQ3JCO29CQUNFLFFBQVEsRUFBRSxLQUFLO29CQUNmLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVM7b0JBQzNCLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLGVBQWU7b0JBQ3ZDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVk7b0JBQ2pDLGFBQWEsRUFBRSxRQUFRO29CQUN2QixjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxjQUFjO29CQUNyQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxlQUFlO29CQUN2QyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxlQUFlO29CQUN2QyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxlQUFlO29CQUN2QyxFQUFFLEVBQUUsSUFBSTtpQkFDVCxFQUNELE9BQU8sQ0FDUixDQUFDOztnQkFDRixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtvQkFDL0IsU0FBUyxFQUFFLE9BQU8sQ0FBQyxTQUFTO29CQUM1QixlQUFlLEVBQUUsT0FBTyxDQUFDLGVBQWU7b0JBQ3hDLGVBQWUsRUFBRSxVQUFVO2lCQUM1QixDQUFDLENBQUM7Z0JBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsVUFBQyxJQUFTLEVBQUUsTUFBVyxFQUFFLElBQVk7b0JBQ3hELElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDbkMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUN4QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7b0JBQzVDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztvQkFDOUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO29CQUM5QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7b0JBQzlDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxJQUFJLEVBQUU7d0JBQ3ZDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO3FCQUMxQzt5QkFBTTt3QkFDTCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7cUJBQzNDO29CQUNELElBQUksT0FBTyxDQUFDLEVBQUU7d0JBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO2lCQUNoRCxDQUFDLENBQUM7Z0JBQ0gsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSUMsc0JBQVUsQ0FBQyxJQUFJLENBQUMsR0FBQSxDQUFDLENBQUM7YUFDL0M7Ozs7Ozs7Ozs7O1FBS0QsZ0NBQVM7Ozs7Ozs7WUFBVCxVQUNFLElBQVcsRUFDWCxFQUFrRCxFQUNsRCxPQUdDO2dCQUVELE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUNyQjtvQkFDRSxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxlQUFlO2lCQUN4QyxFQUNELE9BQU8sQ0FDUixDQUFDOztnQkFDRixJQUFNLElBQUksR0FBRyxVQUFDLElBQVcsRUFBRSxNQUFXLEVBQUUsSUFBWTs7O3dCQUNsRCxLQUFtQixJQUFBLFNBQUFELFNBQUEsSUFBSSxDQUFBLDBCQUFBLDRDQUFFOzRCQUFwQixJQUFNLElBQUksaUJBQUE7NEJBQ2IsRUFBRSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7OzRCQUN2QixJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDOzRCQUNsRCxJQUFJLFdBQVcsSUFBSSxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQ0FDekMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUUsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDOzZCQUNuQzt5QkFDRjs7Ozs7Ozs7Ozs7Ozs7O2lCQUNGLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDckI7Ozs7Ozs7Ozs7UUFLRCx3Q0FBaUI7Ozs7OztZQUFqQixVQUNFLElBQWtCLEVBQ2xCLE9BT0M7Z0JBRUQsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQ3JCO29CQUNFLGtCQUFrQixFQUFFLElBQUk7aUJBQ3pCLEVBQ0QsT0FBTyxDQUNSLENBQUM7O2dCQUNGLElBQU0sSUFBSSxHQUFVLEVBQUUsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FDWixJQUFJLEVBQ0osVUFBQyxJQUFnQixFQUFFLE1BQWtCLEVBQUUsSUFBWTtvQkFDakQsSUFDRSxJQUFJLENBQUMsU0FBUzt5QkFDYixPQUFPLENBQUMsa0JBQWtCLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUNsRDt3QkFDQSxJQUFJLENBQUMsSUFBSSxDQUNQLE9BQU8sQ0FBQyxFQUFFOzhCQUNOLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUM7OEJBQzlCLE9BQU8sQ0FBQyxVQUFVO2tDQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7a0NBQy9CLElBQUksQ0FBQyxHQUFHLENBQ2YsQ0FBQztxQkFDSDtpQkFDRixDQUNGLENBQUM7Z0JBQ0YsT0FBTyxJQUFJLENBQUM7YUFDYjs7b0JBcFBGSCxhQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7Ozt3QkFIekIsZUFBZTs7OzsyQkFGeEI7Ozs7Ozs7QUNBQTs7Ozs7O1FBT1MsdUJBQU87OztZQUFkO2dCQUNFLE9BQU87b0JBQ0wsUUFBUSxFQUFFLGVBQWU7aUJBQzFCLENBQUM7YUFDSDs7b0JBUkZLLFdBQVEsU0FBQzt3QkFDUixPQUFPLEVBQUUsQ0FBQ0MsZUFBWSxDQUFDO3FCQUN4Qjs7OEJBTEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9