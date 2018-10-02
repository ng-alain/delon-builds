/**
 * @license ng-alain(cipchk@qq.com) v2.0.0-beta.3-ed90aa6
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BkZWxvbi91dGlsL3NyYy9vdGhlci9vdGhlci50cyIsIm5nOi8vQGRlbG9uL3V0aWwvc3JjL3N0cmluZy9zdHJpbmcudHMiLCJuZzovL0BkZWxvbi91dGlsL3NyYy90aW1lL3RpbWUudHMiLCJuZzovL0BkZWxvbi91dGlsL3NyYy9sYXp5L2xhenkuc2VydmljZS50cyIsIm5nOi8vQGRlbG9uL3V0aWwvc3JjL3ZhbGlkYXRlL3ZhbGlkYXRlLnRzIiwibmc6Ly9AZGVsb24vdXRpbC9zcmMvdmFsaWRhdGUvdmFsaWRhdG9ycy50cyIsIm5nOi8vQGRlbG9uL3V0aWwvc3JjL290aGVyL2NoZWNrLnRzIiwibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5nOi8vQGRlbG9uL3V0aWwvc3JjL290aGVyL3N0eWxlLnRzIiwibmc6Ly9AZGVsb24vdXRpbC9zcmMvdXRpbC5jb25maWcudHMiLCJuZzovL0BkZWxvbi91dGlsL3NyYy9hcnJheS9hcnJheS5zZXJ2aWNlLnRzIiwibmc6Ly9AZGVsb24vdXRpbC9zcmMvdXRpbC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4dGVuZCBmcm9tICdleHRlbmQnO1xyXG5cclxuLyoqXHJcbiAqIMOnwrHCu8OkwrzCvCBgXy5nZXRgw6/CvMKMw6bCoMK5w6bCjcKuIGBwYXRoYCDDqMKOwrfDpcKPwpbDpcKuwonDpcKFwqjDpcKAwrxcclxuICoganNwZXJmOiBodHRwczovL2pzcGVyZi5jb20vZXMtZGVlcC1nZXR0dHBzOi8vanNwZXJmLmNvbS9lcy1kZWVwLWdldFxyXG4gKlxyXG4gKiBAcGFyYW0gb2JqIMOmwpXCsMOmwo3CrsOmwrrCkMOvwrzCjMOmwpfCoMOmwpXCiMOmwpfCtsOnwpvCtMOmwo7CpcOowr/ClMOlwpvCniBgZGVmYXVsdFZhbHVlYCDDpcKAwrxcclxuICogQHBhcmFtIHBhdGggw6jCi8KlIGBudWxsYMOjwoDCgWBbXWDDo8KAwoHDpsKcwqrDpcKuwprDpMK5wonDpcKPworDpsKcwqrDpsKJwr7DpcKIwrDDpsKXwrbDqMK/wpTDpcKbwp4gYGRlZmF1bHRWYWx1ZWAgw6XCgMK8XHJcbiAqIEBwYXJhbSBkZWZhdWx0VmFsdWUgw6nCu8KYw6jCrsKkw6XCgMK8XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGVlcEdldChvYmo6IGFueSwgcGF0aDogc3RyaW5nIHwgc3RyaW5nW10sIGRlZmF1bHRWYWx1ZT86IGFueSkge1xyXG4gIGlmICghb2JqIHx8IHBhdGggPT0gbnVsbCB8fCBwYXRoLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcclxuICBpZiAoIUFycmF5LmlzQXJyYXkocGF0aCkpIHtcclxuICAgIHBhdGggPSB+cGF0aC5pbmRleE9mKCcuJykgPyBwYXRoLnNwbGl0KCcuJykgOiBbIHBhdGggXTtcclxuICB9XHJcbiAgaWYgKHBhdGgubGVuZ3RoID09PSAxKSB7XHJcbiAgICBjb25zdCBjaGVja09iaiA9IG9ialtwYXRoWzBdXTtcclxuICAgIHJldHVybiB0eXBlb2YgY2hlY2tPYmogPT09ICd1bmRlZmluZWQnID8gZGVmYXVsdFZhbHVlIDogY2hlY2tPYmo7XHJcbiAgfVxyXG4gIHJldHVybiBwYXRoLnJlZHVjZSgobywgaykgPT4gKG8gfHwge30pW2tdLCBvYmopIHx8IGRlZmF1bHRWYWx1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlZXBDb3B5KG9iajogYW55KSB7XHJcbiAgY29uc3QgcmVzdWx0ID0gZXh0ZW5kKHRydWUsIHsgfSwgeyBfOiBvYmogfSk7XHJcbiAgcmV0dXJuIHJlc3VsdC5fO1xyXG59XHJcblxyXG4vKiogw6XCpMKNw6XCiMK2w6XChsKFw6XCrsK5w6jCh8Kzw6XCicKqw6jCtMK0w6bCncK/ICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb3B5KHZhbHVlOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZTxzdHJpbmc+KChyZXNvbHZlLCByZWplY3QpOiB2b2lkID0+IHtcclxuICAgIGxldCBjb3B5VGV4dEFyZWEgPSBudWxsIGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQ7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb3B5VGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gICAgICBjb3B5VGV4dEFyZWEuc3R5bGUuaGVpZ2h0ID0gJzBweCc7XHJcbiAgICAgIGNvcHlUZXh0QXJlYS5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG4gICAgICBjb3B5VGV4dEFyZWEuc3R5bGUud2lkdGggPSAnMHB4JztcclxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb3B5VGV4dEFyZWEpO1xyXG4gICAgICBjb3B5VGV4dEFyZWEudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgY29weVRleHRBcmVhLnNlbGVjdCgpO1xyXG4gICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xyXG4gICAgICByZXNvbHZlKHZhbHVlKTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIGlmIChjb3B5VGV4dEFyZWEgJiYgY29weVRleHRBcmVhLnBhcmVudE5vZGUpIHtcclxuICAgICAgICBjb3B5VGV4dEFyZWEucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjb3B5VGV4dEFyZWEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgZGVlcEdldCB9IGZyb20gJy4uL290aGVyL290aGVyJztcclxuXHJcbi8qKlxyXG4gKiDDpcKtwpfDp8KswqbDpMK4wrLDpsKgwrzDpcK8wo/DpcKMwpZcclxuICogYGBgXHJcbiAqIGZvcm1hdCgndGhpcyBpcyAke25hbWV9JywgeyBuYW1lOiAnYXNkZicgfSlcclxuICogLy8gb3V0cHV0OiB0aGlzIGlzIGFzZGZcclxuICogZm9ybWF0KCd0aGlzIGlzICR7dXNlci5uYW1lfScsIHsgdXNlcjogeyBuYW1lOiAnYXNkZicgfSB9LCB0cnVlKVxyXG4gKiAvLyBvdXRwdXQ6IHRoaXMgaXMgYXNkZlxyXG4gKiBgYGBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXQoc3RyOiBzdHJpbmcsIG9iajoge30sIG5lZWREZWVwR2V0ID0gZmFsc2UpOiBzdHJpbmcge1xyXG4gIHJldHVybiAoc3RyIHx8ICcnKS5yZXBsYWNlKFxyXG4gICAgL1xcJHsoW159XSspfS9nLFxyXG4gICAgKHdvcms6IHN0cmluZywga2V5OiBzdHJpbmcpID0+XHJcbiAgICAgIG5lZWREZWVwR2V0XHJcbiAgICAgICAgPyBkZWVwR2V0KG9iaiwga2V5LnNwbGl0KCcuJyksICcnKVxyXG4gICAgICAgIDogKG9iaiB8fCB7fSlba2V5XSB8fCAnJyxcclxuICApO1xyXG59XHJcblxyXG4vKipcclxuICogw6jCvcKsw6XCjMKWw6bCiMKQUk1Cw6XChcKDw6XCrcKXw6fCrMKmw6TCuMKyXHJcbiAqIEBwYXJhbSBkaWdpdHMgw6XCvcKTw6bClcKww6XCrcKXw6fCscK7w6XCnsKLw6bCl8K2w6/CvMKMw6XChcKBw6jCrsK4w6bCjMKHw6XCrsKaw6XCsMKPw6bClcKww6fCgsK5w6XCkMKOw6bClcKww6XCrcKXw6fCmsKEw6TCuMKqw6bClcKww6/CvMKMw6nCu8KYw6jCrsKkMsOkwr3CjcOlwrDCj8OmwpXCsFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHl1YW4odmFsdWU6IGFueSwgZGlnaXRzOiBudW1iZXIgPSAyKTogc3RyaW5nIHtcclxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykgdmFsdWUgPSB2YWx1ZS50b0ZpeGVkKGRpZ2l0cyk7XHJcbiAgcmV0dXJuIGAmeWVuICR7dmFsdWV9YDtcclxufVxyXG4iLCJpbXBvcnQgcGFyc2UgZnJvbSAnZGF0ZS1mbnMvcGFyc2UnO1xyXG5pbXBvcnQgc3RhcnRPZldlZWsgZnJvbSAnZGF0ZS1mbnMvc3RhcnRfb2Zfd2Vlayc7XHJcbmltcG9ydCBlbmRPZldlZWsgZnJvbSAnZGF0ZS1mbnMvZW5kX29mX3dlZWsnO1xyXG5pbXBvcnQgc3ViV2Vla3MgZnJvbSAnZGF0ZS1mbnMvc3ViX3dlZWtzJztcclxuaW1wb3J0IHN0YXJ0T2ZNb250aCBmcm9tICdkYXRlLWZucy9zdGFydF9vZl9tb250aCc7XHJcbmltcG9ydCBlbmRPZk1vbnRoIGZyb20gJ2RhdGUtZm5zL2VuZF9vZl9tb250aCc7XHJcbmltcG9ydCBzdWJNb250aHMgZnJvbSAnZGF0ZS1mbnMvc3ViX21vbnRocyc7XHJcbmltcG9ydCBzdGFydE9mWWVhciBmcm9tICdkYXRlLWZucy9zdGFydF9vZl95ZWFyJztcclxuaW1wb3J0IGVuZE9mWWVhciBmcm9tICdkYXRlLWZucy9lbmRfb2ZfeWVhcic7XHJcbmltcG9ydCBzdWJZZWFycyBmcm9tICdkYXRlLWZucy9zdWJfeWVhcnMnO1xyXG5pbXBvcnQgYWRkRGF5cyBmcm9tICdkYXRlLWZucy9hZGRfZGF5cyc7XHJcblxyXG4vKipcclxuICogw6jCjsK3w6XCj8KWw6bCl8K2w6nCl8K0w6jCjMKDw6XCm8K0XHJcbiAqIEBwYXJhbSB0eXBlIMOnwrHCu8Olwp7Ci8OvwrzCjMOlwrjCpiBgLWAgw6jCocKow6fCpMK6w6jCv8KHw6XCjsK7w6TCuMKAw6TCuMKqw6bCl8K2w6nCl8K0w6/CvMKMw6jCi8Klw6bCjMKHw6XCrsKaIGBudW1iZXJgIMOowqHCqMOnwqTCusOlwqTCqcOmwpXCsFxyXG4gKiBAcGFyYW0gdGltZSDDpcK8woDDpcKnwovDpsKXwrbDqcKXwrRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUaW1lRGlzdGFuY2UoXHJcbiAgdHlwZTpcclxuICAgIHwgJ3RvZGF5J1xyXG4gICAgfCAnLXRvZGF5J1xyXG4gICAgfCAnd2VlaydcclxuICAgIHwgJy13ZWVrJ1xyXG4gICAgfCAnbW9udGgnXHJcbiAgICB8ICctbW9udGgnXHJcbiAgICB8ICd5ZWFyJ1xyXG4gICAgfCAnLXllYXInXHJcbiAgICB8IG51bWJlcixcclxuICB0aW1lPzogRGF0ZSB8IHN0cmluZyB8IG51bWJlcixcclxuKTogW0RhdGUsIERhdGVdIHtcclxuICB0aW1lID0gcGFyc2UodGltZSB8fCBuZXcgRGF0ZSgpKTtcclxuXHJcbiAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICBjYXNlICd0b2RheSc6XHJcbiAgICAgIHJldHVybiBbdGltZSwgdGltZV07XHJcbiAgICBjYXNlICctdG9kYXknOlxyXG4gICAgICByZXR1cm4gW2FkZERheXModGltZSwgLTEpLCB0aW1lXTtcclxuICAgIGNhc2UgJ3dlZWsnOlxyXG4gICAgICByZXR1cm4gW3N0YXJ0T2ZXZWVrKHRpbWUpLCBlbmRPZldlZWsodGltZSldO1xyXG4gICAgY2FzZSAnLXdlZWsnOlxyXG4gICAgICByZXR1cm4gW3N0YXJ0T2ZXZWVrKHN1YldlZWtzKHRpbWUsIDEpKSwgZW5kT2ZXZWVrKHN1YldlZWtzKHRpbWUsIDEpKV07XHJcbiAgICBjYXNlICdtb250aCc6XHJcbiAgICAgIHJldHVybiBbc3RhcnRPZk1vbnRoKHRpbWUpLCBlbmRPZk1vbnRoKHRpbWUpXTtcclxuICAgIGNhc2UgJy1tb250aCc6XHJcbiAgICAgIHJldHVybiBbc3RhcnRPZk1vbnRoKHN1Yk1vbnRocyh0aW1lLCAxKSksIGVuZE9mTW9udGgoc3ViTW9udGhzKHRpbWUsIDEpKV07XHJcbiAgICBjYXNlICd5ZWFyJzpcclxuICAgICAgcmV0dXJuIFtzdGFydE9mWWVhcih0aW1lKSwgZW5kT2ZZZWFyKHRpbWUpXTtcclxuICAgIGNhc2UgJy15ZWFyJzpcclxuICAgICAgcmV0dXJuIFtzdGFydE9mWWVhcihzdWJZZWFycyh0aW1lLCAxKSksIGVuZE9mWWVhcihzdWJZZWFycyh0aW1lLCAxKSldO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHR5cGUgPiAwXHJcbiAgICAgICAgPyBbdGltZSwgYWRkRGF5cyh0aW1lLCB0eXBlKV1cclxuICAgICAgICA6IFthZGREYXlzKHRpbWUsIHR5cGUpLCB0aW1lXTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHNoYXJlLCBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExhenlSZXN1bHQge1xyXG4gIHBhdGg6IHN0cmluZztcclxuICBsb2FkZWQ6IGJvb2xlYW47XHJcbiAgc3RhdHVzOiAnb2snIHwgJ2Vycm9yJztcclxufVxyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIExhenlTZXJ2aWNlIHtcclxuICBwcml2YXRlIGxpc3Q6IGFueSA9IHt9O1xyXG4gIHByaXZhdGUgY2FjaGVkOiBhbnkgPSB7fTtcclxuICBwcml2YXRlIF9ub3RpZnk6IEJlaGF2aW9yU3ViamVjdDxMYXp5UmVzdWx0W10+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxcclxuICAgIExhenlSZXN1bHRbXVxyXG4gID4oW10pO1xyXG5cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogYW55KSB7fVxyXG5cclxuICBnZXQgY2hhbmdlKCk6IE9ic2VydmFibGU8TGF6eVJlc3VsdFtdPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbm90aWZ5LmFzT2JzZXJ2YWJsZSgpLnBpcGUoXHJcbiAgICAgIHNoYXJlKCksXHJcbiAgICAgIGZpbHRlcihscyA9PiBscy5sZW5ndGggIT09IDApLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNsZWFyKCk6IHZvaWQge1xyXG4gICAgdGhpcy5saXN0ID0ge307XHJcbiAgICB0aGlzLmNhY2hlZCA9IHt9O1xyXG4gIH1cclxuXHJcbiAgbG9hZChwYXRoczogc3RyaW5nIHwgc3RyaW5nW10pOiBQcm9taXNlPExhenlSZXN1bHRbXT4ge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHBhdGhzKSkgcGF0aHMgPSBbcGF0aHNdO1xyXG5cclxuICAgIGNvbnN0IHByb21pc2VzOiBQcm9taXNlPExhenlSZXN1bHQ+W10gPSBbXTtcclxuICAgIHBhdGhzLmZvckVhY2gocGF0aCA9PiB7XHJcbiAgICAgIGlmIChwYXRoLmVuZHNXaXRoKCcuanMnKSkge1xyXG4gICAgICAgIHByb21pc2VzLnB1c2godGhpcy5sb2FkU2NyaXB0KHBhdGgpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMubG9hZFN0eWxlKHBhdGgpKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgIHRoaXMuX25vdGlmeS5uZXh0KHJlcyk7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbG9hZFNjcmlwdChwYXRoOiBzdHJpbmcsIGlubmVyQ29udGVudD86IHN0cmluZyk6IFByb21pc2U8TGF6eVJlc3VsdD4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICBpZiAodGhpcy5saXN0W3BhdGhdID09PSB0cnVlKSB7XHJcbiAgICAgICAgcmVzb2x2ZSh0aGlzLmNhY2hlZFtwYXRoXSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmxpc3RbcGF0aF0gPSB0cnVlO1xyXG4gICAgICBjb25zdCBvblN1Y2Nlc3MgPSAoaXRlbTogYW55KSA9PiB7XHJcbiAgICAgICAgdGhpcy5jYWNoZWRbcGF0aF0gPSBpdGVtO1xyXG4gICAgICAgIHJlc29sdmUoaXRlbSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCBub2RlID0gdGhpcy5kb2MuY3JlYXRlRWxlbWVudCgnc2NyaXB0JykgYXMgSFRNTFNjcmlwdEVsZW1lbnQ7XHJcbiAgICAgIG5vZGUudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xyXG4gICAgICBub2RlLnNyYyA9IHBhdGg7XHJcbiAgICAgIG5vZGUuY2hhcnNldCA9ICd1dGYtOCc7XHJcbiAgICAgIGlmIChpbm5lckNvbnRlbnQpIHtcclxuICAgICAgICBub2RlLmlubmVySFRNTCA9IGlubmVyQ29udGVudDtcclxuICAgICAgfVxyXG4gICAgICBpZiAoKDxhbnk+bm9kZSkucmVhZHlTdGF0ZSkge1xyXG4gICAgICAgIC8vIElFXHJcbiAgICAgICAgKDxhbnk+bm9kZSkub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAoPGFueT5ub2RlKS5yZWFkeVN0YXRlID09PSAnbG9hZGVkJyB8fFxyXG4gICAgICAgICAgICAoPGFueT5ub2RlKS5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgKDxhbnk+bm9kZSkub25yZWFkeXN0YXRlY2hhbmdlID0gbnVsbDtcclxuICAgICAgICAgICAgb25TdWNjZXNzKHtcclxuICAgICAgICAgICAgICBwYXRoOiBwYXRoLFxyXG4gICAgICAgICAgICAgIGxvYWRlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICBzdGF0dXM6ICdvaycsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbm9kZS5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICBvblN1Y2Nlc3Moe1xyXG4gICAgICAgICAgICBwYXRoOiBwYXRoLFxyXG4gICAgICAgICAgICBsb2FkZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIHN0YXR1czogJ29rJyxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgbm9kZS5vbmVycm9yID0gKGVycm9yOiBhbnkpID0+XHJcbiAgICAgICAgb25TdWNjZXNzKHtcclxuICAgICAgICAgIHBhdGg6IHBhdGgsXHJcbiAgICAgICAgICBsb2FkZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgc3RhdHVzOiAnZXJyb3InLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB0aGlzLmRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKG5vZGUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBsb2FkU3R5bGUoXHJcbiAgICBwYXRoOiBzdHJpbmcsXHJcbiAgICByZWwgPSAnc3R5bGVzaGVldCcsXHJcbiAgICBpbm5lckNvbnRlbnQ/OiBzdHJpbmcsXHJcbiAgKTogUHJvbWlzZTxMYXp5UmVzdWx0PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmxpc3RbcGF0aF0gPT09IHRydWUpIHtcclxuICAgICAgICByZXNvbHZlKHRoaXMuY2FjaGVkW3BhdGhdKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMubGlzdFtwYXRoXSA9IHRydWU7XHJcblxyXG4gICAgICBjb25zdCBub2RlID0gdGhpcy5kb2MuY3JlYXRlRWxlbWVudCgnbGluaycpIGFzIEhUTUxMaW5rRWxlbWVudDtcclxuICAgICAgbm9kZS5yZWwgPSByZWw7XHJcbiAgICAgIG5vZGUudHlwZSA9ICd0ZXh0L2Nzcyc7XHJcbiAgICAgIG5vZGUuaHJlZiA9IHBhdGg7XHJcbiAgICAgIGlmIChpbm5lckNvbnRlbnQpIHtcclxuICAgICAgICBub2RlLmlubmVySFRNTCA9IGlubmVyQ29udGVudDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKG5vZGUpO1xyXG4gICAgICBjb25zdCBpdGVtOiBMYXp5UmVzdWx0ID0ge1xyXG4gICAgICAgIHBhdGg6IHBhdGgsXHJcbiAgICAgICAgbG9hZGVkOiB0cnVlLFxyXG4gICAgICAgIHN0YXR1czogJ29rJyxcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5jYWNoZWRbcGF0aF0gPSBpdGVtO1xyXG4gICAgICByZXNvbHZlKGl0ZW0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsIi8qKiDDpsKYwq/DpcKQwqbDpMK4wrrDpsKVwrDDpcKtwpcgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiBib29sZWFuIHtcclxuICByZXR1cm4gL14oKC0/XFxkK1xcLlxcZCspfCgtP1xcZCspfCgtP1xcLlxcZCspKSQvLnRlc3QodmFsdWUudG9TdHJpbmcoKSk7XHJcbn1cclxuXHJcbi8qKiDDpsKYwq/DpcKQwqbDpMK4wrrDpsKVwrTDpsKVwrAgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzSW50KHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiBib29sZWFuIHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dHJpcGxlLWVxdWFsc1xyXG4gIHJldHVybiBpc051bSh2YWx1ZSkgJiYgcGFyc2VJbnQodmFsdWUudG9TdHJpbmcoKSwgMTApID09IHZhbHVlO1xyXG59XHJcblxyXG4vKiogw6bCmMKvw6XCkMKmw6TCuMK6w6XCsMKPw6bClcKwICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0RlY2ltYWwodmFsdWU6IHN0cmluZyB8IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gIHJldHVybiBpc051bSh2YWx1ZSkgJiYgIWlzSW50KHZhbHVlKTtcclxufVxyXG5cclxuLyoqIMOmwpjCr8OlwpDCpsOkwrjCusOowrrCq8OkwrvCvcOowq/CgSAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNJZENhcmQodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xyXG4gIHJldHVybiAoXHJcbiAgICB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIC8oXlxcZHsxNX0kKXwoXlxcZHsxN30oWzAtOV18WCkkKS9pLnRlc3QodmFsdWUpXHJcbiAgKTtcclxufVxyXG5cclxuLyoqIMOmwpjCr8OlwpDCpsOkwrjCusOmwonCi8OmwpzCusOlwo/CtyAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNNb2JpbGUodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xyXG4gIHJldHVybiAoXHJcbiAgICB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmXHJcbiAgICAvXigwfFxcKz84NnwxNzk1MSk/KDEzWzAtOV18MTVbMC05XXwxN1swNjc4XXwxOFswLTldfDE0WzU3XSlbMC05XXs4fSQvLnRlc3QoXHJcbiAgICAgIHZhbHVlLFxyXG4gICAgKVxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBWYWxpZGF0aW9uRXJyb3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBpc051bSwgaXNJbnQsIGlzRGVjaW1hbCwgaXNJZENhcmQsIGlzTW9iaWxlIH0gZnJvbSAnLi92YWxpZGF0ZSc7XHJcblxyXG4vKiogw6TCuMKAw6XCpcKXw6bCl8Klw6XCuMK4w6nCqsKMw6jCr8KBw6XCmcKoICovXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjbGFzcy1uYW1lXHJcbmV4cG9ydCBjbGFzcyBfVmFsaWRhdG9ycyB7XHJcbiAgLyoqIMOmwpjCr8OlwpDCpsOkwrjCusOmwpXCsMOlwq3ClyAqL1xyXG4gIHN0YXRpYyBudW0oY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xyXG4gICAgcmV0dXJuIGlzTnVtKGNvbnRyb2wudmFsdWUpID8gbnVsbCA6IHsgbnVtOiB0cnVlIH07XHJcbiAgfVxyXG5cclxuICAvKiogw6bCmMKvw6XCkMKmw6TCuMK6w6bClcK0w6bClcKwICovXHJcbiAgc3RhdGljIGludChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gaXNJbnQoY29udHJvbC52YWx1ZSkgPyBudWxsIDogeyBpbnQ6IHRydWUgfTtcclxuICB9XHJcblxyXG4gIC8qKiDDpsKYwq/DpcKQwqbDpMK4wrrDpcKwwo/DpsKVwrAgKi9cclxuICBzdGF0aWMgZGVjaW1hbChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gaXNEZWNpbWFsKGNvbnRyb2wudmFsdWUpID8gbnVsbCA6IHsgZGVjaW1hbDogdHJ1ZSB9O1xyXG4gIH1cclxuXHJcbiAgLyoqIMOmwpjCr8OlwpDCpsOkwrjCusOowrrCq8OkwrvCvcOowq/CgSAqL1xyXG4gIHN0YXRpYyBpZENhcmQoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xyXG4gICAgcmV0dXJuIGlzSWRDYXJkKGNvbnRyb2wudmFsdWUpID8gbnVsbCA6IHsgaWRDYXJkOiB0cnVlIH07XHJcbiAgfVxyXG5cclxuICAvKiogw6bCmMKvw6XCkMKmw6TCuMK6w6bCicKLw6bCnMK6w6XCj8K3ICovXHJcbiAgc3RhdGljIG1vYmlsZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gaXNNb2JpbGUoY29udHJvbC52YWx1ZSkgPyBudWxsIDogeyBtb2JpbGU6IHRydWUgfTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGlzRW1wdHkoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcclxuICBjb25zdCBub2RlcyA9IGVsZW1lbnQuY2hpbGROb2RlcztcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBub2RlID0gbm9kZXMuaXRlbShpKTtcclxuICAgIGlmIChcclxuICAgICAgbm9kZS5ub2RlVHlwZSA9PT0gMSAmJlxyXG4gICAgICAobm9kZSBhcyBIVE1MRWxlbWVudCkub3V0ZXJIVE1MLnRvU3RyaW5nKCkudHJpbSgpLmxlbmd0aCAhPT0gMFxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgIG5vZGUubm9kZVR5cGUgPT09IDMgJiZcclxuICAgICAgbm9kZS50ZXh0Q29udGVudC50b1N0cmluZygpLnRyaW0oKS5sZW5ndGggIT09IDBcclxuICAgICkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9Cb29sZWFuKFxyXG4gIHZhbHVlOiBhbnksXHJcbiAgYWxsb3dVbmRlZmluZWQgPSBmYWxzZSxcclxuKTogYm9vbGVhbiB7XHJcbiAgcmV0dXJuIGFsbG93VW5kZWZpbmVkICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCdcclxuICAgID8gdW5kZWZpbmVkXHJcbiAgICA6IHZhbHVlICE9IG51bGwgJiYgYCR7dmFsdWV9YCAhPT0gJ2ZhbHNlJztcclxufVxyXG5cclxuLyoqXHJcbiAqIElucHV0IGRlY29yYXRvciB0aGF0IGhhbmRsZSBhIHByb3AgdG8gZG8gZ2V0L3NldCBhdXRvbWF0aWNhbGx5IHdpdGggdG9Cb29sZWFuXHJcbiAqIEBleGFtcGxlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHZpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICogQElucHV0KCkgQElucHV0Qm9vbGVhbihudWxsKSB2aXNpYmxlOiBib29sZWFuID0gZmFsc2U7XHJcbiAqIGBgYFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIElucHV0Qm9vbGVhbihhbGxvd1VuZGVmaW5lZCA9IGZhbHNlKTogYW55IHsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcclxuICByZXR1cm4gZnVuY3Rpb24gSW5wdXRCb29sZWFuUHJvcERlY29yYXRvciAodGFyZ2V0OiBvYmplY3QsIG5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgLy8gQWRkIG91ciBvd24gcHJpdmF0ZSBwcm9wXHJcbiAgICBjb25zdCBwcml2YXRlUHJvcE5hbWUgPSBgJCRfXyR7bmFtZX1gO1xyXG5cclxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGFyZ2V0LCBwcml2YXRlUHJvcE5hbWUpKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihgVGhlIHByb3AgXCIke3ByaXZhdGVQcm9wTmFtZX1cIiBpcyBhbHJlYWR5IGV4aXN0LCBpdCB3aWxsIGJlIG92ZXJyaWRlZCBieSBJbnB1dEJvb2xlYW4gZGVjb3JhdG9yLmApO1xyXG4gICAgfVxyXG5cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByaXZhdGVQcm9wTmFtZSwge1xyXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICAgIHdyaXRhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBuYW1lLCB7XHJcbiAgICAgIGdldCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpc1sgcHJpdmF0ZVByb3BOYW1lIF07IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8taW52YWxpZC10aGlzXHJcbiAgICAgIH0sXHJcbiAgICAgIHNldCh2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpc1sgcHJpdmF0ZVByb3BOYW1lIF0gPSB0b0Jvb2xlYW4odmFsdWUsIGFsbG93VW5kZWZpbmVkKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1pbnZhbGlkLXRoaXNcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlOiBhbnkpOiBudW1iZXI7XHJcbmV4cG9ydCBmdW5jdGlvbiB0b051bWJlcjxEPih2YWx1ZTogYW55LCBmYWxsYmFjazogRCk6IG51bWJlciB8IEQ7XHJcbmV4cG9ydCBmdW5jdGlvbiB0b051bWJlcih2YWx1ZTogYW55LCBmYWxsYmFja1ZhbHVlID0gMCkge1xyXG4gIHJldHVybiAhaXNOYU4ocGFyc2VGbG9hdCh2YWx1ZSBhcyBhbnkpKSAmJiAhaXNOYU4oTnVtYmVyKHZhbHVlKSlcclxuICAgID8gTnVtYmVyKHZhbHVlKVxyXG4gICAgOiBmYWxsYmFja1ZhbHVlO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIElucHV0IGRlY29yYXRvciB0aGF0IGhhbmRsZSBhIHByb3AgdG8gZG8gZ2V0L3NldCBhdXRvbWF0aWNhbGx5IHdpdGggdG9OdW1iZXJcclxuICogQGV4YW1wbGVcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBASW5wdXQoKSBASW5wdXROdW1iZXIoKSB2aXNpYmxlOiBudW1iZXIgPSAxO1xyXG4gKiBASW5wdXQoKSBASW5wdXROdW1iZXIobnVsbCkgdmlzaWJsZTogbnVtYmVyID0gMjtcclxuICogYGBgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gSW5wdXROdW1iZXIoZmFsbGJhY2sgPSAwKTogYW55IHsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcclxuICByZXR1cm4gZnVuY3Rpb24gSW5wdXRCb29sZWFuUHJvcERlY29yYXRvciAodGFyZ2V0OiBvYmplY3QsIG5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgLy8gQWRkIG91ciBvd24gcHJpdmF0ZSBwcm9wXHJcbiAgICBjb25zdCBwcml2YXRlUHJvcE5hbWUgPSBgJCRfXyR7bmFtZX1gO1xyXG5cclxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGFyZ2V0LCBwcml2YXRlUHJvcE5hbWUpKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihgVGhlIHByb3AgXCIke3ByaXZhdGVQcm9wTmFtZX1cIiBpcyBhbHJlYWR5IGV4aXN0LCBpdCB3aWxsIGJlIG92ZXJyaWRlZCBieSBJbnB1dE51bWJlciBkZWNvcmF0b3IuYCk7XHJcbiAgICB9XHJcblxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJpdmF0ZVByb3BOYW1lLCB7XHJcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgd3JpdGFibGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIG5hbWUsIHtcclxuICAgICAgZ2V0KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzWyBwcml2YXRlUHJvcE5hbWUgXTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1pbnZhbGlkLXRoaXNcclxuICAgICAgfSxcclxuICAgICAgc2V0KHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzWyBwcml2YXRlUHJvcE5hbWUgXSA9IHRvTnVtYmVyKHZhbHVlLCBmYWxsYmFjayk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8taW52YWxpZC10aGlzXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcbn1cclxuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoXG4gIGVsOiBIVE1MRWxlbWVudCxcbiAgY2xhc3NNYXA6IG9iamVjdCxcbiAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbik6IHZvaWQge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Zm9yaW5cbiAgZm9yIChjb25zdCBpIGluIGNsYXNzTWFwKSB7XG4gICAgcmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWwsIGkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZENsYXNzKFxuICBlbDogSFRNTEVsZW1lbnQsXG4gIGNsYXNzTWFwOiBvYmplY3QsXG4gIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4pOiB2b2lkIHtcbiAgZm9yIChjb25zdCBpIGluIGNsYXNzTWFwKSB7XG4gICAgaWYgKGNsYXNzTWFwW2ldKSB7XG4gICAgICByZW5kZXJlci5hZGRDbGFzcyhlbCwgaSk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogw6bCm8K0w6bClsKww6XCrsK/w6TCuMK7w6fCu8KEw6TCu8K2w6bCoMK3w6XCvMKPIGBjbGFzc2DDr8K8wozDpMK+wovDpcKmwoLDr8K8wppcbiAqXG4gKiBgYGB0c1xuICogdXBkYXRlSG9zdENsYXNzKFxuICogIHRoaXMuZWwubmF0aXZlRWxlbWVudCxcbiAqICB7XG4gKiAgICBbICdjbGFzc25hbWUnIF06IHRydWUsXG4gKiAgICBbICdjbGFzc25hbWUnIF06IHRoaXMudHlwZSA9PT0gJzEnLFxuICogICAgWyB0aGlzLmNscyBdOiB0cnVlLFxuICogICAgWyBgYS0ke3RoaXMuY2xzfWAgXTogdHJ1ZVxuICogIH0sXG4gKiAgdGhpcy5yZW5kZXJlcilcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBbY2xlYW5BbGxdIMOmwpjCr8OlwpDCpsOlwoXCiMOmwrjChcOnwpDChsOmwonCgMOmwpzCiSBgY2xhc3NgIMOlwoDCvMOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmBmYWxzZWBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUhvc3RDbGFzcyhcbiAgZWw6IEhUTUxFbGVtZW50LFxuICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICBjbGFzc01hcDogb2JqZWN0LFxuICBjbGVhbkFsbCA9IGZhbHNlXG4pOiB2b2lkIHtcbiAgaWYgKGNsZWFuQWxsID09PSB0cnVlKSB7XG4gICAgcmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKGVsLCAnY2xhc3MnKTtcbiAgfSBlbHNlIHtcbiAgICByZW1vdmVDbGFzcyhlbCwgY2xhc3NNYXAsIHJlbmRlcmVyKTtcbiAgfVxuICBjbGFzc01hcCA9IHsgLi4uY2xhc3NNYXAgfTtcbiAgYWRkQ2xhc3MoZWwsIGNsYXNzTWFwLCByZW5kZXJlcik7XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFycmF5Q29uZmlnIH0gZnJvbSAnLi9hcnJheS9hcnJheS5jb25maWcnO1xyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIERlbG9uVXRpbENvbmZpZyB7XHJcbiAgYXJyYXk/OiBBcnJheUNvbmZpZztcclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE56VHJlZU5vZGUgfSBmcm9tICduZy16b3Jyby1hbnRkJztcclxuaW1wb3J0IHsgRGVsb25VdGlsQ29uZmlnIH0gZnJvbSAnLi4vdXRpbC5jb25maWcnO1xyXG5pbXBvcnQgeyBBcnJheUNvbmZpZyB9IGZyb20gJy4vYXJyYXkuY29uZmlnJztcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBBcnJheVNlcnZpY2Uge1xyXG4gIHByaXZhdGUgYzogQXJyYXlDb25maWc7XHJcbiAgY29uc3RydWN0b3IoY29nOiBEZWxvblV0aWxDb25maWcpIHtcclxuICAgIHRoaXMuYyA9IE9iamVjdC5hc3NpZ24oXHJcbiAgICAgIDxBcnJheUNvbmZpZz57XHJcbiAgICAgICAgZGVlcE1hcE5hbWU6ICdkZWVwJyxcclxuICAgICAgICBwYXJlbnRNYXBOYW1lOiAncGFyZW50JyxcclxuICAgICAgICBpZE1hcE5hbWU6ICdpZCcsXHJcbiAgICAgICAgcGFyZW50SWRNYXBOYW1lOiAncGFyZW50X2lkJyxcclxuICAgICAgICBjaGlsZHJlbk1hcE5hbWU6ICdjaGlsZHJlbicsXHJcbiAgICAgICAgdGl0bGVNYXBOYW1lOiAndGl0bGUnLFxyXG4gICAgICAgIGNoZWNrZWRNYXBuYW1lOiAnY2hlY2tlZCcsXHJcbiAgICAgICAgc2VsZWN0ZWRNYXBuYW1lOiAnc2VsZWN0ZWQnLFxyXG4gICAgICAgIGV4cGFuZGVkTWFwbmFtZTogJ2V4cGFuZGVkJyxcclxuICAgICAgICBkaXNhYmxlZE1hcG5hbWU6ICdkaXNhYmxlZCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvZyAmJiBjb2cuYXJyYXksXHJcbiAgICApO1xyXG4gIH1cclxuICAvKipcclxuICAgKiDDpcKwwobDpsKgwpHDp8K7wpPDpsKewoTDqMK9wqzDpsKNwqLDpsKIwpDDpsKVwrDDp8K7woTDp8K7wpPDpsKewoRcclxuICAgKi9cclxuICB0cmVlVG9BcnIoXHJcbiAgICB0cmVlOiBhbnlbXSxcclxuICAgIG9wdGlvbnM/OiB7XHJcbiAgICAgIC8qKiDDpsK3wrHDpcK6wqbDqcKhwrnDpcKQwo3Dr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgJ2RlZXAnYCAqL1xyXG4gICAgICBkZWVwTWFwTmFtZT86IHN0cmluZztcclxuICAgICAgLyoqIMOmwonCgcOlwrnCs8OlwpDCjsOmwpXCsMOnwrvChMOnwprChMOnwojCtsOmwpXCsMOmwo3CrsOpwqHCucOlwpDCjcOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmAncGFyZW50J2AgKi9cclxuICAgICAgcGFyZW50TWFwTmFtZT86IHN0cmluZztcclxuICAgICAgLyoqIMOmwrrCkMOmwpXCsMOmwo3CrsOlwq3CkMOpwqHCucOlwpDCjcOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmAnY2hpbGRyZW4nYCAqL1xyXG4gICAgICBjaGlsZHJlbk1hcE5hbWU/OiBzdHJpbmc7XHJcbiAgICAgIC8qKiDDpsKYwq/DpcKQwqbDp8KnwrvDqcKZwqQgYGNoaWxkcmVuYCDDqMKKwoLDp8KCwrnDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgdHJ1ZWAgKi9cclxuICAgICAgY2xlYXJDaGlsZHJlbj86IGJvb2xlYW47XHJcbiAgICAgIC8qKiDDqMK9wqzDpsKNwqLDpsKIwpDDpsKVwrDDp8K7woTDp8K7wpPDpsKewoTDpsKXwrbDpcKbwp7DqMKwwoMgKi9cclxuICAgICAgY2I/OiAoaXRlbTogYW55LCBwYXJlbnQ6IGFueSwgZGVlcDogbnVtYmVyKSA9PiB2b2lkO1xyXG4gICAgfSxcclxuICApOiBhbnlbXSB7XHJcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbihcclxuICAgICAge1xyXG4gICAgICAgIGRlZXBNYXBOYW1lOiB0aGlzLmMuZGVlcE1hcE5hbWUsXHJcbiAgICAgICAgcGFyZW50TWFwTmFtZTogdGhpcy5jLnBhcmVudE1hcE5hbWUsXHJcbiAgICAgICAgY2hpbGRyZW5NYXBOYW1lOiB0aGlzLmMuY2hpbGRyZW5NYXBOYW1lLFxyXG4gICAgICAgIGNsZWFyQ2hpbGRyZW46IHRydWUsXHJcbiAgICAgICAgY2I6IG51bGwsXHJcbiAgICAgIH0sXHJcbiAgICAgIG9wdGlvbnMsXHJcbiAgICApO1xyXG4gICAgY29uc3QgcmVzdWx0OiBhbnlbXSA9IFtdO1xyXG4gICAgY29uc3QgaW5GbiA9IChsaXN0OiBhbnlbXSwgcGFyZW50OiBhbnksIGRlZXA6IG51bWJlcikgPT4ge1xyXG4gICAgICBmb3IgKGNvbnN0IGkgb2YgbGlzdCkge1xyXG4gICAgICAgIGlbb3B0aW9ucy5kZWVwTWFwTmFtZV0gPSBkZWVwO1xyXG4gICAgICAgIGlbb3B0aW9ucy5wYXJlbnRNYXBOYW1lXSA9IHBhcmVudDtcclxuICAgICAgICBpZiAob3B0aW9ucy5jYikgb3B0aW9ucy5jYihpLCBwYXJlbnQsIGRlZXApO1xyXG4gICAgICAgIHJlc3VsdC5wdXNoKGkpO1xyXG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gaVtvcHRpb25zLmNoaWxkcmVuTWFwTmFtZV07XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgY2hpbGRyZW4gIT0gbnVsbCAmJlxyXG4gICAgICAgICAgQXJyYXkuaXNBcnJheShjaGlsZHJlbikgJiZcclxuICAgICAgICAgIGNoaWxkcmVuLmxlbmd0aCA+IDBcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGluRm4oY2hpbGRyZW4sIGksIGRlZXAgKyAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9wdGlvbnMuY2xlYXJDaGlsZHJlbikgZGVsZXRlIGlbb3B0aW9ucy5jaGlsZHJlbk1hcE5hbWVdO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgaW5Gbih0cmVlLCAxLCBudWxsKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDDpsKVwrDDp8K7woTDqMK9wqzDpsKNwqLDpsKIwpDDpsKgwpHDpsKVwrDDpsKNwq5cclxuICAgKi9cclxuICBhcnJUb1RyZWUoXHJcbiAgICBhcnI6IGFueVtdLFxyXG4gICAgb3B0aW9ucz86IHtcclxuICAgICAgLyoqIMOnwrzClsOlwo/Ct8OpwqHCucOlwpDCjcOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmAnaWQnYCAqL1xyXG4gICAgICBpZE1hcE5hbWU/OiBzdHJpbmc7XHJcbiAgICAgIC8qKiDDp8KIwrbDp8K8wpbDpcKPwrfDqcKhwrnDpcKQwo3Dr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgJ3BhcmVudF9pZCdgICovXHJcbiAgICAgIHBhcmVudElkTWFwTmFtZT86IHN0cmluZztcclxuICAgICAgLyoqIMOlwq3CkMOpwqHCucOlwpDCjcOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmAnY2hpbGRyZW4nYCAqL1xyXG4gICAgICBjaGlsZHJlbk1hcE5hbWU/OiBzdHJpbmc7XHJcbiAgICAgIC8qKiDDqMK9wqzDpsKNwqLDpsKIwpDDpsKgwpHDpsKVwrDDpsKNwq7DpsKXwrbDpcKbwp7DqMKwwoMgKi9cclxuICAgICAgY2I/OiAoaXRlbTogYW55KSA9PiB2b2lkO1xyXG4gICAgfSxcclxuICApOiBhbnlbXSB7XHJcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbihcclxuICAgICAge1xyXG4gICAgICAgIGlkTWFwTmFtZTogdGhpcy5jLmlkTWFwTmFtZSxcclxuICAgICAgICBwYXJlbnRJZE1hcE5hbWU6IHRoaXMuYy5wYXJlbnRJZE1hcE5hbWUsXHJcbiAgICAgICAgY2hpbGRyZW5NYXBOYW1lOiB0aGlzLmMuY2hpbGRyZW5NYXBOYW1lLFxyXG4gICAgICAgIGNiOiBudWxsLFxyXG4gICAgICB9LFxyXG4gICAgICBvcHRpb25zLFxyXG4gICAgKTtcclxuICAgIGNvbnN0IHRyZWU6IGFueVtdID0gW107XHJcbiAgICBjb25zdCBjaGlsZHJlbk9mID0ge307XHJcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgYXJyKSB7XHJcbiAgICAgIGNvbnN0IGlkID0gaXRlbVtvcHRpb25zLmlkTWFwTmFtZV0sXHJcbiAgICAgICAgcGlkID0gaXRlbVtvcHRpb25zLnBhcmVudElkTWFwTmFtZV07XHJcbiAgICAgIGNoaWxkcmVuT2ZbaWRdID0gY2hpbGRyZW5PZltpZF0gfHwgW107XHJcbiAgICAgIGl0ZW1bb3B0aW9ucy5jaGlsZHJlbk1hcE5hbWVdID0gY2hpbGRyZW5PZltpZF07XHJcbiAgICAgIGlmIChvcHRpb25zLmNiKSBvcHRpb25zLmNiKGl0ZW0pO1xyXG4gICAgICBpZiAocGlkKSB7XHJcbiAgICAgICAgY2hpbGRyZW5PZltwaWRdID0gY2hpbGRyZW5PZltwaWRdIHx8IFtdO1xyXG4gICAgICAgIGNoaWxkcmVuT2ZbcGlkXS5wdXNoKGl0ZW0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRyZWUucHVzaChpdGVtKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRyZWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDDpsKVwrDDp8K7woTDqMK9wqzDpsKNwqLDpsKIwpAgYG56LXRyZWVgIMOmwpXCsMOmwo3CrsOmwrrCkMOvwrzCjMOpwoDCmsOowr/ChyBgb3B0aW9uc2Agw6jCvcKsw6XCjMKWw6nCocK5w6XCkMKNw6/CvMKMw6TCucKfw6XCj8Kvw6TCu8Klw6TCvcK/w6fClMKoIGBvcHRpb25zLmNiYCDDpsKbwrTDqcKrwpjDp8K6wqfDpcKGwrPDpcKuwprDpsKVwrDDpsKNwq7DqcKhwrlcclxuICAgKi9cclxuICBhcnJUb1RyZWVOb2RlKFxyXG4gICAgYXJyOiBhbnlbXSxcclxuICAgIG9wdGlvbnM/OiB7XHJcbiAgICAgIC8qKiDDp8K8wpbDpcKPwrfDqcKhwrnDpcKQwo3Dr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgJ2lkJ2AgKi9cclxuICAgICAgaWRNYXBOYW1lPzogc3RyaW5nO1xyXG4gICAgICAvKiogw6fCiMK2w6fCvMKWw6XCj8K3w6nCocK5w6XCkMKNw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYCdwYXJlbnRfaWQnYCAqL1xyXG4gICAgICBwYXJlbnRJZE1hcE5hbWU/OiBzdHJpbmc7XHJcbiAgICAgIC8qKiDDpsKgwofDqcKiwpjDqcKhwrnDpcKQwo3Dr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgJ3RpdGxlJ2AgKi9cclxuICAgICAgdGl0bGVNYXBOYW1lPzogc3RyaW5nO1xyXG4gICAgICAvKiogw6jCrsK+w6fCvcKuw6TCuMK6w6XCj8K2w6XCrcKQw6jCisKCw6fCgsK5w6nCocK5w6XCkMKNw6/CvMKMw6jCi8Klw6bClcKww6bCjcKuw6bCusKQw6TCuMKNw6XCrcKYw6XCnMKow6bCl8K2w6jCh8Kqw6XCisKow6bCoMK5w6bCjcKuIGBjaGlsZHJlbmAgw6XCgMK8w6XChsKzw6XCrsKaw6bCmMKvw6XCkMKmw6TCuMK6w6XCj8K2w6XCrcKQw6jCisKCw6fCgsK5w6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYCdpc0xlYWYnYCAqL1xyXG4gICAgICBpc0xlYWZNYXBOYW1lPzogc3RyaW5nO1xyXG4gICAgICAvKiogw6jCisKCw6fCgsK5IENoZWNrYm94IMOmwpjCr8OlwpDCpsOpwoDCicOkwrjCrcOpwqHCucOlwpDCjcOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmAnY2hlY2tlZCdgICovXHJcbiAgICAgIGNoZWNrZWRNYXBuYW1lPzogc3RyaW5nO1xyXG4gICAgICAvKiogw6jCisKCw6fCgsK5w6bCnMKsw6jCusKrw6bCmMKvw6XCkMKmw6nCgMKJw6TCuMKtw6nCocK5w6XCkMKNw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYCdzZWxlY3RlZCdgICovXHJcbiAgICAgIHNlbGVjdGVkTWFwbmFtZT86IHN0cmluZztcclxuICAgICAgLyoqIMOoworCgsOnwoLCucOmwpjCr8OlwpDCpsOlwrHClcOlwrzCgCjDpcKPwrbDpcKtwpDDqMKKwoLDp8KCwrnDpsKXwqDDpsKVwogpw6nCocK5w6XCkMKNw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYCdleHBhbmRlZCdgICovXHJcbiAgICAgIGV4cGFuZGVkTWFwbmFtZT86IHN0cmluZztcclxuICAgICAgLyoqIMOowq7CvsOnwr3CrsOmwpjCr8OlwpDCpsOnwqbCgcOnwpTCqMOoworCgsOnwoLCuSjDpMK4wo3DpcKPwq/DqMK/wpvDqMKhwozDpMK7wrvDpMK9wpXDpsKTwo3DpMK9wpwpw6nCocK5w6XCkMKNw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYCdkaXNhYmxlZCdgICovXHJcbiAgICAgIGRpc2FibGVkTWFwbmFtZT86IHN0cmluZztcclxuICAgICAgLyoqIMOowr3CrMOmwo3CosOmwojCkMOmwqDCkcOmwpXCsMOmwo3CrsOlwpDCjsOvwrzCjMOmwonCp8OowqHCjMOnwprChMOpwoDCksOlwr3CksOlwpvCnsOowrDCgyAqL1xyXG4gICAgICBjYj86IChpdGVtOiBhbnksIHBhcmVudDogYW55LCBkZWVwOiBudW1iZXIpID0+IHZvaWQ7XHJcbiAgICB9LFxyXG4gICk6IE56VHJlZU5vZGVbXSB7XHJcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbihcclxuICAgICAge1xyXG4gICAgICAgIGV4cGFuZGVkOiBmYWxzZSxcclxuICAgICAgICBpZE1hcE5hbWU6IHRoaXMuYy5pZE1hcE5hbWUsXHJcbiAgICAgICAgcGFyZW50SWRNYXBOYW1lOiB0aGlzLmMucGFyZW50SWRNYXBOYW1lLFxyXG4gICAgICAgIHRpdGxlTWFwTmFtZTogdGhpcy5jLnRpdGxlTWFwTmFtZSxcclxuICAgICAgICBpc0xlYWZNYXBOYW1lOiAnaXNMZWFmJyxcclxuICAgICAgICBjaGVja2VkTWFwbmFtZTogdGhpcy5jLmNoZWNrZWRNYXBuYW1lLFxyXG4gICAgICAgIHNlbGVjdGVkTWFwbmFtZTogdGhpcy5jLnNlbGVjdGVkTWFwbmFtZSxcclxuICAgICAgICBleHBhbmRlZE1hcG5hbWU6IHRoaXMuYy5leHBhbmRlZE1hcG5hbWUsXHJcbiAgICAgICAgZGlzYWJsZWRNYXBuYW1lOiB0aGlzLmMuZGlzYWJsZWRNYXBuYW1lLFxyXG4gICAgICAgIGNiOiBudWxsLFxyXG4gICAgICB9LFxyXG4gICAgICBvcHRpb25zLFxyXG4gICAgKTtcclxuICAgIGNvbnN0IHRyZWUgPSB0aGlzLmFyclRvVHJlZShhcnIsIHtcclxuICAgICAgaWRNYXBOYW1lOiBvcHRpb25zLmlkTWFwTmFtZSxcclxuICAgICAgcGFyZW50SWRNYXBOYW1lOiBvcHRpb25zLnBhcmVudElkTWFwTmFtZSxcclxuICAgICAgY2hpbGRyZW5NYXBOYW1lOiAnY2hpbGRyZW4nLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnZpc2l0VHJlZSh0cmVlLCAoaXRlbTogYW55LCBwYXJlbnQ6IGFueSwgZGVlcDogbnVtYmVyKSA9PiB7XHJcbiAgICAgIGl0ZW0ua2V5ID0gaXRlbVtvcHRpb25zLmlkTWFwTmFtZV07XHJcbiAgICAgIGl0ZW0udGl0bGUgPSBpdGVtW29wdGlvbnMudGl0bGVNYXBOYW1lXTtcclxuICAgICAgaXRlbS5jaGVja2VkID0gaXRlbVtvcHRpb25zLmNoZWNrZWRNYXBuYW1lXTtcclxuICAgICAgaXRlbS5zZWxlY3RlZCA9IGl0ZW1bb3B0aW9ucy5zZWxlY3RlZE1hcG5hbWVdO1xyXG4gICAgICBpdGVtLmV4cGFuZGVkID0gaXRlbVtvcHRpb25zLmV4cGFuZGVkTWFwbmFtZV07XHJcbiAgICAgIGl0ZW0uZGlzYWJsZWQgPSBpdGVtW29wdGlvbnMuZGlzYWJsZWRNYXBuYW1lXTtcclxuICAgICAgaWYgKGl0ZW1bb3B0aW9ucy5pc0xlYWZNYXBOYW1lXSA9PSBudWxsKSB7XHJcbiAgICAgICAgaXRlbS5pc0xlYWYgPSBpdGVtLmNoaWxkcmVuLmxlbmd0aCA9PT0gMDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpdGVtLmlzTGVhZiA9IGl0ZW1bb3B0aW9ucy5pc0xlYWZNYXBOYW1lXTtcclxuICAgICAgfVxyXG4gICAgICBpZiAob3B0aW9ucy5jYikgb3B0aW9ucy5jYihpdGVtLCBwYXJlbnQsIGRlZXApO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdHJlZS5tYXAobm9kZSA9PiBuZXcgTnpUcmVlTm9kZShub2RlKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDDqcKAwpLDpcK9wpLDqMKuwr/DqcKXwq7DpsKVwrTDpMK4wqrDpsKgwpFcclxuICAgKi9cclxuICB2aXNpdFRyZWUoXHJcbiAgICB0cmVlOiBhbnlbXSxcclxuICAgIGNiOiAoaXRlbTogYW55LCBwYXJlbnQ6IGFueSwgZGVlcDogbnVtYmVyKSA9PiB2b2lkLFxyXG4gICAgb3B0aW9ucz86IHtcclxuICAgICAgLyoqIMOlwq3CkMOpwqHCucOlwpDCjcOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmAnY2hpbGRyZW4nYCAqL1xyXG4gICAgICBjaGlsZHJlbk1hcE5hbWU/OiBzdHJpbmc7XHJcbiAgICB9LFxyXG4gICkge1xyXG4gICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oXHJcbiAgICAgIHtcclxuICAgICAgICBjaGlsZHJlbk1hcE5hbWU6IHRoaXMuYy5jaGlsZHJlbk1hcE5hbWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIG9wdGlvbnMsXHJcbiAgICApO1xyXG4gICAgY29uc3QgaW5GbiA9IChkYXRhOiBhbnlbXSwgcGFyZW50OiBhbnksIGRlZXA6IG51bWJlcikgPT4ge1xyXG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZGF0YSkge1xyXG4gICAgICAgIGNiKGl0ZW0sIHBhcmVudCwgZGVlcCk7XHJcbiAgICAgICAgY29uc3QgY2hpbGRyZW5WYWwgPSBpdGVtW29wdGlvbnMuY2hpbGRyZW5NYXBOYW1lXTtcclxuICAgICAgICBpZiAoY2hpbGRyZW5WYWwgJiYgY2hpbGRyZW5WYWwubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgaW5GbihjaGlsZHJlblZhbCwgaXRlbSwgZGVlcCArIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGluRm4odHJlZSwgbnVsbCwgMSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDDqMKOwrfDpcKPwpbDpsKJwoDDpsKcwonDpcK3wrLDp8K7wo/DqcKAwonDpMK4wq3Dp8KawoQgYGtleWAgw6XCgMK8XHJcbiAgICovXHJcbiAgZ2V0S2V5c0J5VHJlZU5vZGUoXHJcbiAgICB0cmVlOiBOelRyZWVOb2RlW10sXHJcbiAgICBvcHRpb25zPzoge1xyXG4gICAgICAvKiogw6bCmMKvw6XCkMKmw6XCjMKFw6XCkMKrw6XCjcKKw6nCgMKJw6fCisK2w6bCgMKBw6fCmsKEw6XCgMK8w6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYHRydWVgICovXHJcbiAgICAgIGluY2x1ZGVIYWxmQ2hlY2tlZD86IGJvb2xlYW47XHJcbiAgICAgIC8qKiDDpsKYwq/DpcKQwqbDqcKHwo3DpsKWwrDDpsKMwofDpcKuwpogYGtleWAgw6nClMKuw6XCkMKNw6/CvMKMw6jCi8Klw6TCuMKNw6bCjMKHw6XCrsKaw6jCocKow6fCpMK6w6TCvcK/w6fClMKoIGBOelRyZWVOb2RlLmtleWAgw6XCgMK8ICovXHJcbiAgICAgIGtleU1hcE5hbWU/OiBzdHJpbmc7XHJcbiAgICAgIC8qKiDDpcKbwp7DqMKwwoPDr8K8wozDqMK/wpTDpcKbwp7DpMK4woDDpMK4wqrDpcKAwrwgYGtleWAgw6XCgMK8w6/CvMKMw6TCvMKYw6XChcKIw6fCusKnw6nCq8KYw6TCusKOw6XChcK2w6TCu8KWICovXHJcbiAgICAgIGNiPzogKGl0ZW06IE56VHJlZU5vZGUsIHBhcmVudDogTnpUcmVlTm9kZSwgZGVlcDogbnVtYmVyKSA9PiBhbnk7XHJcbiAgICB9LFxyXG4gICk6IGFueVtdIHtcclxuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKFxyXG4gICAgICB7XHJcbiAgICAgICAgaW5jbHVkZUhhbGZDaGVja2VkOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICBvcHRpb25zLFxyXG4gICAgKTtcclxuICAgIGNvbnN0IGtleXM6IGFueVtdID0gW107XHJcbiAgICB0aGlzLnZpc2l0VHJlZShcclxuICAgICAgdHJlZSxcclxuICAgICAgKGl0ZW06IE56VHJlZU5vZGUsIHBhcmVudDogTnpUcmVlTm9kZSwgZGVlcDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgaXRlbS5pc0NoZWNrZWQgfHxcclxuICAgICAgICAgIChvcHRpb25zLmluY2x1ZGVIYWxmQ2hlY2tlZCAmJiBpdGVtLmlzSGFsZkNoZWNrZWQpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBrZXlzLnB1c2goXHJcbiAgICAgICAgICAgIG9wdGlvbnMuY2JcclxuICAgICAgICAgICAgICA/IG9wdGlvbnMuY2IoaXRlbSwgcGFyZW50LCBkZWVwKVxyXG4gICAgICAgICAgICAgIDogb3B0aW9ucy5rZXlNYXBOYW1lXHJcbiAgICAgICAgICAgICAgICA/IGl0ZW0ub3JpZ2luW29wdGlvbnMua2V5TWFwTmFtZV1cclxuICAgICAgICAgICAgICAgIDogaXRlbS5rZXksXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICk7XHJcbiAgICByZXR1cm4ga2V5cztcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEZWxvblV0aWxNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IERlbG9uVXRpbE1vZHVsZSxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJCZWhhdmlvclN1YmplY3QiLCJzaGFyZSIsImZpbHRlciIsIkluamVjdGFibGUiLCJJbmplY3QiLCJET0NVTUVOVCIsInRzbGliXzEuX192YWx1ZXMiLCJOelRyZWVOb2RlIiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7OztBQVVBLHFCQUF3QixHQUFRLEVBQUUsSUFBdUIsRUFBRSxZQUFrQjtRQUMzRSxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDO1lBQUUsT0FBTyxZQUFZLENBQUM7UUFDbkUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDeEIsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFD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