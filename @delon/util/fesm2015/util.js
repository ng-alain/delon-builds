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
        const checkObj = obj[path[0]];
        return typeof checkObj === 'undefined' ? defaultValue : checkObj;
    }
    return path.reduce((o, k) => (o || {})[k], obj) || defaultValue;
}
/**
 * @param {?} obj
 * @return {?}
 */
function deepCopy(obj) {
    /** @type {?} */
    const result = extend(true, {}, { _: obj });
    return result._;
}
/**
 * 复制内容至剪贴板
 * @param {?} value
 * @return {?}
 */
function copy(value) {
    return new Promise((resolve, reject) => {
        /** @type {?} */
        let copyTextArea = /** @type {?} */ (null);
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
function format(str, obj, needDeepGet = false) {
    return (str || '').replace(/\${([^}]+)}/g, (work, key) => needDeepGet
        ? deepGet(obj, key.split('.'), '')
        : (obj || {})[key] || '');
}
/**
 * 转化成RMB元字符串
 * @param {?} value
 * @param {?=} digits 当数字类型时，允许指定小数点后数字的个数，默认2位小数
 * @return {?}
 */
function yuan(value, digits = 2) {
    if (typeof value === 'number')
        value = value.toFixed(digits);
    return `&yen ${value}`;
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
class LazyService {
    /**
     * @param {?} doc
     */
    constructor(doc) {
        this.doc = doc;
        this.list = {};
        this.cached = {};
        this._notify = new BehaviorSubject([]);
    }
    /**
     * @return {?}
     */
    get change() {
        return this._notify.asObservable().pipe(share(), filter(ls => ls.length !== 0));
    }
    /**
     * @return {?}
     */
    clear() {
        this.list = {};
        this.cached = {};
    }
    /**
     * @param {?} paths
     * @return {?}
     */
    load(paths) {
        if (!Array.isArray(paths))
            paths = [paths];
        /** @type {?} */
        const promises = [];
        paths.forEach(path => {
            if (path.endsWith('.js')) {
                promises.push(this.loadScript(path));
            }
            else {
                promises.push(this.loadStyle(path));
            }
        });
        return Promise.all(promises).then(res => {
            this._notify.next(res);
            return Promise.resolve(res);
        });
    }
    /**
     * @param {?} path
     * @param {?=} innerContent
     * @return {?}
     */
    loadScript(path, innerContent) {
        return new Promise(resolve => {
            if (this.list[path] === true) {
                resolve(this.cached[path]);
                return;
            }
            this.list[path] = true;
            /** @type {?} */
            const onSuccess = (item) => {
                this.cached[path] = item;
                resolve(item);
            };
            /** @type {?} */
            const node = /** @type {?} */ (this.doc.createElement('script'));
            node.type = 'text/javascript';
            node.src = path;
            node.charset = 'utf-8';
            if (innerContent) {
                node.innerHTML = innerContent;
            }
            if ((/** @type {?} */ (node)).readyState) {
                // IE
                (/** @type {?} */ (node)).onreadystatechange = () => {
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
                node.onload = () => {
                    onSuccess({
                        path: path,
                        loaded: true,
                        status: 'ok',
                    });
                };
            }
            node.onerror = (error) => onSuccess({
                path: path,
                loaded: false,
                status: 'error',
            });
            this.doc.getElementsByTagName('head')[0].appendChild(node);
        });
    }
    /**
     * @param {?} path
     * @param {?=} rel
     * @param {?=} innerContent
     * @return {?}
     */
    loadStyle(path, rel = 'stylesheet', innerContent) {
        return new Promise(resolve => {
            if (this.list[path] === true) {
                resolve(this.cached[path]);
                return;
            }
            this.list[path] = true;
            /** @type {?} */
            const node = /** @type {?} */ (this.doc.createElement('link'));
            node.rel = rel;
            node.type = 'text/css';
            node.href = path;
            if (innerContent) {
                node.innerHTML = innerContent;
            }
            this.doc.getElementsByTagName('head')[0].appendChild(node);
            /** @type {?} */
            const item = {
                path: path,
                loaded: true,
                status: 'ok',
            };
            this.cached[path] = item;
            resolve(item);
        });
    }
}
LazyService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
LazyService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
/** @nocollapse */ LazyService.ngInjectableDef = defineInjectable({ factory: function LazyService_Factory() { return new LazyService(inject(DOCUMENT)); }, token: LazyService, providedIn: "root" });

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
class _Validators {
    /**
     * 是否为数字
     * @param {?} control
     * @return {?}
     */
    static num(control) {
        return isNum(control.value) ? null : { num: true };
    }
    /**
     * 是否为整数
     * @param {?} control
     * @return {?}
     */
    static int(control) {
        return isInt(control.value) ? null : { int: true };
    }
    /**
     * 是否为小数
     * @param {?} control
     * @return {?}
     */
    static decimal(control) {
        return isDecimal(control.value) ? null : { decimal: true };
    }
    /**
     * 是否为身份证
     * @param {?} control
     * @return {?}
     */
    static idCard(control) {
        return isIdCard(control.value) ? null : { idCard: true };
    }
    /**
     * 是否为手机号
     * @param {?} control
     * @return {?}
     */
    static mobile(control) {
        return isMobile(control.value) ? null : { mobile: true };
    }
}

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
    const nodes = element.childNodes;
    for (let i = 0; i < nodes.length; i++) {
        /** @type {?} */
        const node = nodes.item(i);
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
function toBoolean(value, allowUndefined = false) {
    return allowUndefined && typeof value === 'undefined'
        ? undefined
        : value != null && `${value}` !== 'false';
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
function InputBoolean(allowUndefined = false) {
    // tslint:disable-line:no-any
    return function InputBooleanPropDecorator(target, name) {
        /** @type {?} */
        const privatePropName = `$$__${name}`;
        if (Object.prototype.hasOwnProperty.call(target, privatePropName)) {
            console.warn(`The prop "${privatePropName}" is already exist, it will be overrided by InputBoolean decorator.`);
        }
        Object.defineProperty(target, privatePropName, {
            configurable: true,
            writable: true
        });
        Object.defineProperty(target, name, {
            /**
             * @return {?}
             */
            get() {
                return this[privatePropName]; // tslint:disable-line:no-invalid-this
            },
            /**
             * @param {?} value
             * @return {?}
             */
            set(value) {
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
function toNumber(value, fallbackValue = 0) {
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
function InputNumber(fallback = 0) {
    // tslint:disable-line:no-any
    return function InputBooleanPropDecorator(target, name) {
        /** @type {?} */
        const privatePropName = `$$__${name}`;
        if (Object.prototype.hasOwnProperty.call(target, privatePropName)) {
            console.warn(`The prop "${privatePropName}" is already exist, it will be overrided by InputNumber decorator.`);
        }
        Object.defineProperty(target, privatePropName, {
            configurable: true,
            writable: true
        });
        Object.defineProperty(target, name, {
            /**
             * @return {?}
             */
            get() {
                return this[privatePropName]; // tslint:disable-line:no-invalid-this
            },
            /**
             * @param {?} value
             * @return {?}
             */
            set(value) {
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
    for (const i in classMap) {
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
    for (const i in classMap) {
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
function updateHostClass(el, renderer, classMap, cleanAll = false) {
    if (cleanAll === true) {
        renderer.removeAttribute(el, 'class');
    }
    else {
        removeClass(el, classMap, renderer);
    }
    classMap = Object.assign({}, classMap);
    addClass(el, classMap, renderer);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DelonUtilConfig {
}
DelonUtilConfig.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ DelonUtilConfig.ngInjectableDef = defineInjectable({ factory: function DelonUtilConfig_Factory() { return new DelonUtilConfig(); }, token: DelonUtilConfig, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ArrayService {
    /**
     * @param {?} cog
     */
    constructor(cog) {
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
     * @param {?} tree
     * @param {?=} options
     * @return {?}
     */
    treeToArr(tree, options) {
        options = Object.assign({
            deepMapName: this.c.deepMapName,
            parentMapName: this.c.parentMapName,
            childrenMapName: this.c.childrenMapName,
            clearChildren: true,
            cb: null,
        }, options);
        /** @type {?} */
        const result = [];
        /** @type {?} */
        const inFn = (list, parent, deep) => {
            for (const i of list) {
                i[options.deepMapName] = deep;
                i[options.parentMapName] = parent;
                if (options.cb)
                    options.cb(i, parent, deep);
                result.push(i);
                /** @type {?} */
                const children = i[options.childrenMapName];
                if (children != null &&
                    Array.isArray(children) &&
                    children.length > 0) {
                    inFn(children, i, deep + 1);
                }
                if (options.clearChildren)
                    delete i[options.childrenMapName];
            }
        };
        inFn(tree, 1, null);
        return result;
    }
    /**
     * 数组转换成树数据
     * @param {?} arr
     * @param {?=} options
     * @return {?}
     */
    arrToTree(arr, options) {
        options = Object.assign({
            idMapName: this.c.idMapName,
            parentIdMapName: this.c.parentIdMapName,
            childrenMapName: this.c.childrenMapName,
            cb: null,
        }, options);
        /** @type {?} */
        const tree = [];
        /** @type {?} */
        const childrenOf = {};
        for (const item of arr) {
            /** @type {?} */
            const id = item[options.idMapName];
            /** @type {?} */
            const pid = item[options.parentIdMapName];
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
        return tree;
    }
    /**
     * 数组转换成 `nz-tree` 数据源，通过 `options` 转化项名，也可以使用 `options.cb` 更高级决定数据项
     * @param {?} arr
     * @param {?=} options
     * @return {?}
     */
    arrToTreeNode(arr, options) {
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
        const tree = this.arrToTree(arr, {
            idMapName: options.idMapName,
            parentIdMapName: options.parentIdMapName,
            childrenMapName: 'children',
        });
        this.visitTree(tree, (item, parent, deep) => {
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
        return tree.map(node => new NzTreeNode(node));
    }
    /**
     * 递归访问整个树
     * @param {?} tree
     * @param {?} cb
     * @param {?=} options
     * @return {?}
     */
    visitTree(tree, cb, options) {
        options = Object.assign({
            childrenMapName: this.c.childrenMapName,
        }, options);
        /** @type {?} */
        const inFn = (data, parent, deep) => {
            for (const item of data) {
                cb(item, parent, deep);
                /** @type {?} */
                const childrenVal = item[options.childrenMapName];
                if (childrenVal && childrenVal.length > 0) {
                    inFn(childrenVal, item, deep + 1);
                }
            }
        };
        inFn(tree, null, 1);
    }
    /**
     * 获取所有已经选中的 `key` 值
     * @param {?} tree
     * @param {?=} options
     * @return {?}
     */
    getKeysByTreeNode(tree, options) {
        options = Object.assign({
            includeHalfChecked: true,
        }, options);
        /** @type {?} */
        const keys = [];
        this.visitTree(tree, (item, parent, deep) => {
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
    }
}
ArrayService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ArrayService.ctorParameters = () => [
    { type: DelonUtilConfig }
];
/** @nocollapse */ ArrayService.ngInjectableDef = defineInjectable({ factory: function ArrayService_Factory() { return new ArrayService(inject(DelonUtilConfig)); }, token: ArrayService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DelonUtilModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: DelonUtilModule,
        };
    }
}
DelonUtilModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { _Validators, format, yuan, getTimeDistance, LazyService, isNum, isInt, isDecimal, isIdCard, isMobile, isEmpty, toBoolean, InputBoolean, toNumber, InputNumber, deepGet, deepCopy, copy, updateHostClass, ArrayService, DelonUtilConfig, DelonUtilModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGRlbG9uL3V0aWwvc3JjL290aGVyL290aGVyLnRzIiwibmc6Ly9AZGVsb24vdXRpbC9zcmMvc3RyaW5nL3N0cmluZy50cyIsIm5nOi8vQGRlbG9uL3V0aWwvc3JjL3RpbWUvdGltZS50cyIsIm5nOi8vQGRlbG9uL3V0aWwvc3JjL2xhenkvbGF6eS5zZXJ2aWNlLnRzIiwibmc6Ly9AZGVsb24vdXRpbC9zcmMvdmFsaWRhdGUvdmFsaWRhdGUudHMiLCJuZzovL0BkZWxvbi91dGlsL3NyYy92YWxpZGF0ZS92YWxpZGF0b3JzLnRzIiwibmc6Ly9AZGVsb24vdXRpbC9zcmMvb3RoZXIvY2hlY2sudHMiLCJuZzovL0BkZWxvbi91dGlsL3NyYy9vdGhlci9zdHlsZS50cyIsIm5nOi8vQGRlbG9uL3V0aWwvc3JjL3V0aWwuY29uZmlnLnRzIiwibmc6Ly9AZGVsb24vdXRpbC9zcmMvYXJyYXkvYXJyYXkuc2VydmljZS50cyIsIm5nOi8vQGRlbG9uL3V0aWwvc3JjL3V0aWwubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHRlbmQgZnJvbSAnZXh0ZW5kJztcclxuXHJcbi8qKlxyXG4gKiDDp8KxwrvDpMK8wrwgYF8uZ2V0YMOvwrzCjMOmwqDCucOmwo3CriBgcGF0aGAgw6jCjsK3w6XCj8KWw6XCrsKJw6XChcKow6XCgMK8XHJcbiAqIGpzcGVyZjogaHR0cHM6Ly9qc3BlcmYuY29tL2VzLWRlZXAtZ2V0dHRwczovL2pzcGVyZi5jb20vZXMtZGVlcC1nZXRcclxuICpcclxuICogQHBhcmFtIG9iaiDDpsKVwrDDpsKNwq7DpsK6wpDDr8K8wozDpsKXwqDDpsKVwojDpsKXwrbDp8KbwrTDpsKOwqXDqMK/wpTDpcKbwp4gYGRlZmF1bHRWYWx1ZWAgw6XCgMK8XHJcbiAqIEBwYXJhbSBwYXRoIMOowovCpSBgbnVsbGDDo8KAwoFgW11gw6PCgMKBw6bCnMKqw6XCrsKaw6TCucKJw6XCj8KKw6bCnMKqw6bCicK+w6XCiMKww6bCl8K2w6jCv8KUw6XCm8KeIGBkZWZhdWx0VmFsdWVgIMOlwoDCvFxyXG4gKiBAcGFyYW0gZGVmYXVsdFZhbHVlIMOpwrvCmMOowq7CpMOlwoDCvFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRlZXBHZXQob2JqOiBhbnksIHBhdGg6IHN0cmluZyB8IHN0cmluZ1tdLCBkZWZhdWx0VmFsdWU/OiBhbnkpIHtcclxuICBpZiAoIW9iaiB8fCBwYXRoID09IG51bGwgfHwgcGF0aC5sZW5ndGggPT09IDApIHJldHVybiBkZWZhdWx0VmFsdWU7XHJcbiAgaWYgKCFBcnJheS5pc0FycmF5KHBhdGgpKSB7XHJcbiAgICBwYXRoID0gfnBhdGguaW5kZXhPZignLicpID8gcGF0aC5zcGxpdCgnLicpIDogWyBwYXRoIF07XHJcbiAgfVxyXG4gIGlmIChwYXRoLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgY29uc3QgY2hlY2tPYmogPSBvYmpbcGF0aFswXV07XHJcbiAgICByZXR1cm4gdHlwZW9mIGNoZWNrT2JqID09PSAndW5kZWZpbmVkJyA/IGRlZmF1bHRWYWx1ZSA6IGNoZWNrT2JqO1xyXG4gIH1cclxuICByZXR1cm4gcGF0aC5yZWR1Y2UoKG8sIGspID0+IChvIHx8IHt9KVtrXSwgb2JqKSB8fCBkZWZhdWx0VmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWVwQ29weShvYmo6IGFueSkge1xyXG4gIGNvbnN0IHJlc3VsdCA9IGV4dGVuZCh0cnVlLCB7IH0sIHsgXzogb2JqIH0pO1xyXG4gIHJldHVybiByZXN1bHQuXztcclxufVxyXG5cclxuLyoqIMOlwqTCjcOlwojCtsOlwobChcOlwq7CucOowofCs8OlwonCqsOowrTCtMOmwp3CvyAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29weSh2YWx1ZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZSwgcmVqZWN0KTogdm9pZCA9PiB7XHJcbiAgICBsZXQgY29weVRleHRBcmVhID0gbnVsbCBhcyBIVE1MVGV4dEFyZWFFbGVtZW50O1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29weVRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuICAgICAgY29weVRleHRBcmVhLnN0eWxlLmhlaWdodCA9ICcwcHgnO1xyXG4gICAgICBjb3B5VGV4dEFyZWEuc3R5bGUub3BhY2l0eSA9ICcwJztcclxuICAgICAgY29weVRleHRBcmVhLnN0eWxlLndpZHRoID0gJzBweCc7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29weVRleHRBcmVhKTtcclxuICAgICAgY29weVRleHRBcmVhLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgIGNvcHlUZXh0QXJlYS5zZWxlY3QoKTtcclxuICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcclxuICAgICAgcmVzb2x2ZSh2YWx1ZSk7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBpZiAoY29weVRleHRBcmVhICYmIGNvcHlUZXh0QXJlYS5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgY29weVRleHRBcmVhLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY29weVRleHRBcmVhKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IGRlZXBHZXQgfSBmcm9tICcuLi9vdGhlci9vdGhlcic7XHJcblxyXG4vKipcclxuICogw6XCrcKXw6fCrMKmw6TCuMKyw6bCoMK8w6XCvMKPw6XCjMKWXHJcbiAqIGBgYFxyXG4gKiBmb3JtYXQoJ3RoaXMgaXMgJHtuYW1lfScsIHsgbmFtZTogJ2FzZGYnIH0pXHJcbiAqIC8vIG91dHB1dDogdGhpcyBpcyBhc2RmXHJcbiAqIGZvcm1hdCgndGhpcyBpcyAke3VzZXIubmFtZX0nLCB7IHVzZXI6IHsgbmFtZTogJ2FzZGYnIH0gfSwgdHJ1ZSlcclxuICogLy8gb3V0cHV0OiB0aGlzIGlzIGFzZGZcclxuICogYGBgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0KHN0cjogc3RyaW5nLCBvYmo6IHt9LCBuZWVkRGVlcEdldCA9IGZhbHNlKTogc3RyaW5nIHtcclxuICByZXR1cm4gKHN0ciB8fCAnJykucmVwbGFjZShcclxuICAgIC9cXCR7KFtefV0rKX0vZyxcclxuICAgICh3b3JrOiBzdHJpbmcsIGtleTogc3RyaW5nKSA9PlxyXG4gICAgICBuZWVkRGVlcEdldFxyXG4gICAgICAgID8gZGVlcEdldChvYmosIGtleS5zcGxpdCgnLicpLCAnJylcclxuICAgICAgICA6IChvYmogfHwge30pW2tleV0gfHwgJycsXHJcbiAgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIMOowr3CrMOlwozClsOmwojCkFJNQsOlwoXCg8Olwq3Cl8OnwqzCpsOkwrjCslxyXG4gKiBAcGFyYW0gZGlnaXRzIMOlwr3Ck8OmwpXCsMOlwq3Cl8OnwrHCu8Olwp7Ci8OmwpfCtsOvwrzCjMOlwoXCgcOowq7CuMOmwozCh8Olwq7CmsOlwrDCj8OmwpXCsMOnwoLCucOlwpDCjsOmwpXCsMOlwq3Cl8OnwprChMOkwrjCqsOmwpXCsMOvwrzCjMOpwrvCmMOowq7CpDLDpMK9wo3DpcKwwo/DpsKVwrBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB5dWFuKHZhbHVlOiBhbnksIGRpZ2l0czogbnVtYmVyID0gMik6IHN0cmluZyB7XHJcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHZhbHVlID0gdmFsdWUudG9GaXhlZChkaWdpdHMpO1xyXG4gIHJldHVybiBgJnllbiAke3ZhbHVlfWA7XHJcbn1cclxuIiwiaW1wb3J0IHBhcnNlIGZyb20gJ2RhdGUtZm5zL3BhcnNlJztcclxuaW1wb3J0IHN0YXJ0T2ZXZWVrIGZyb20gJ2RhdGUtZm5zL3N0YXJ0X29mX3dlZWsnO1xyXG5pbXBvcnQgZW5kT2ZXZWVrIGZyb20gJ2RhdGUtZm5zL2VuZF9vZl93ZWVrJztcclxuaW1wb3J0IHN1YldlZWtzIGZyb20gJ2RhdGUtZm5zL3N1Yl93ZWVrcyc7XHJcbmltcG9ydCBzdGFydE9mTW9udGggZnJvbSAnZGF0ZS1mbnMvc3RhcnRfb2ZfbW9udGgnO1xyXG5pbXBvcnQgZW5kT2ZNb250aCBmcm9tICdkYXRlLWZucy9lbmRfb2ZfbW9udGgnO1xyXG5pbXBvcnQgc3ViTW9udGhzIGZyb20gJ2RhdGUtZm5zL3N1Yl9tb250aHMnO1xyXG5pbXBvcnQgc3RhcnRPZlllYXIgZnJvbSAnZGF0ZS1mbnMvc3RhcnRfb2ZfeWVhcic7XHJcbmltcG9ydCBlbmRPZlllYXIgZnJvbSAnZGF0ZS1mbnMvZW5kX29mX3llYXInO1xyXG5pbXBvcnQgc3ViWWVhcnMgZnJvbSAnZGF0ZS1mbnMvc3ViX3llYXJzJztcclxuaW1wb3J0IGFkZERheXMgZnJvbSAnZGF0ZS1mbnMvYWRkX2RheXMnO1xyXG5cclxuLyoqXHJcbiAqIMOowo7Ct8Olwo/ClsOmwpfCtsOpwpfCtMOowozCg8OlwpvCtFxyXG4gKiBAcGFyYW0gdHlwZSDDp8KxwrvDpcKewovDr8K8wozDpcK4wqYgYC1gIMOowqHCqMOnwqTCusOowr/Ch8Olwo7Cu8OkwrjCgMOkwrjCqsOmwpfCtsOpwpfCtMOvwrzCjMOowovCpcOmwozCh8Olwq7CmiBgbnVtYmVyYCDDqMKhwqjDp8KkwrrDpcKkwqnDpsKVwrBcclxuICogQHBhcmFtIHRpbWUgw6XCvMKAw6XCp8KLw6bCl8K2w6nCl8K0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGltZURpc3RhbmNlKFxyXG4gIHR5cGU6XHJcbiAgICB8ICd0b2RheSdcclxuICAgIHwgJy10b2RheSdcclxuICAgIHwgJ3dlZWsnXHJcbiAgICB8ICctd2VlaydcclxuICAgIHwgJ21vbnRoJ1xyXG4gICAgfCAnLW1vbnRoJ1xyXG4gICAgfCAneWVhcidcclxuICAgIHwgJy15ZWFyJ1xyXG4gICAgfCBudW1iZXIsXHJcbiAgdGltZT86IERhdGUgfCBzdHJpbmcgfCBudW1iZXIsXHJcbik6IFtEYXRlLCBEYXRlXSB7XHJcbiAgdGltZSA9IHBhcnNlKHRpbWUgfHwgbmV3IERhdGUoKSk7XHJcblxyXG4gIHN3aXRjaCAodHlwZSkge1xyXG4gICAgY2FzZSAndG9kYXknOlxyXG4gICAgICByZXR1cm4gW3RpbWUsIHRpbWVdO1xyXG4gICAgY2FzZSAnLXRvZGF5JzpcclxuICAgICAgcmV0dXJuIFthZGREYXlzKHRpbWUsIC0xKSwgdGltZV07XHJcbiAgICBjYXNlICd3ZWVrJzpcclxuICAgICAgcmV0dXJuIFtzdGFydE9mV2Vlayh0aW1lKSwgZW5kT2ZXZWVrKHRpbWUpXTtcclxuICAgIGNhc2UgJy13ZWVrJzpcclxuICAgICAgcmV0dXJuIFtzdGFydE9mV2VlayhzdWJXZWVrcyh0aW1lLCAxKSksIGVuZE9mV2VlayhzdWJXZWVrcyh0aW1lLCAxKSldO1xyXG4gICAgY2FzZSAnbW9udGgnOlxyXG4gICAgICByZXR1cm4gW3N0YXJ0T2ZNb250aCh0aW1lKSwgZW5kT2ZNb250aCh0aW1lKV07XHJcbiAgICBjYXNlICctbW9udGgnOlxyXG4gICAgICByZXR1cm4gW3N0YXJ0T2ZNb250aChzdWJNb250aHModGltZSwgMSkpLCBlbmRPZk1vbnRoKHN1Yk1vbnRocyh0aW1lLCAxKSldO1xyXG4gICAgY2FzZSAneWVhcic6XHJcbiAgICAgIHJldHVybiBbc3RhcnRPZlllYXIodGltZSksIGVuZE9mWWVhcih0aW1lKV07XHJcbiAgICBjYXNlICcteWVhcic6XHJcbiAgICAgIHJldHVybiBbc3RhcnRPZlllYXIoc3ViWWVhcnModGltZSwgMSkpLCBlbmRPZlllYXIoc3ViWWVhcnModGltZSwgMSkpXTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiB0eXBlID4gMFxyXG4gICAgICAgID8gW3RpbWUsIGFkZERheXModGltZSwgdHlwZSldXHJcbiAgICAgICAgOiBbYWRkRGF5cyh0aW1lLCB0eXBlKSwgdGltZV07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBzaGFyZSwgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMYXp5UmVzdWx0IHtcclxuICBwYXRoOiBzdHJpbmc7XHJcbiAgbG9hZGVkOiBib29sZWFuO1xyXG4gIHN0YXR1czogJ29rJyB8ICdlcnJvcic7XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBMYXp5U2VydmljZSB7XHJcbiAgcHJpdmF0ZSBsaXN0OiBhbnkgPSB7fTtcclxuICBwcml2YXRlIGNhY2hlZDogYW55ID0ge307XHJcbiAgcHJpdmF0ZSBfbm90aWZ5OiBCZWhhdmlvclN1YmplY3Q8TGF6eVJlc3VsdFtdPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8XHJcbiAgICBMYXp5UmVzdWx0W11cclxuICA+KFtdKTtcclxuXHJcbiAgY29uc3RydWN0b3IoQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IGFueSkge31cclxuXHJcbiAgZ2V0IGNoYW5nZSgpOiBPYnNlcnZhYmxlPExhenlSZXN1bHRbXT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX25vdGlmeS5hc09ic2VydmFibGUoKS5waXBlKFxyXG4gICAgICBzaGFyZSgpLFxyXG4gICAgICBmaWx0ZXIobHMgPT4gbHMubGVuZ3RoICE9PSAwKSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjbGVhcigpOiB2b2lkIHtcclxuICAgIHRoaXMubGlzdCA9IHt9O1xyXG4gICAgdGhpcy5jYWNoZWQgPSB7fTtcclxuICB9XHJcblxyXG4gIGxvYWQocGF0aHM6IHN0cmluZyB8IHN0cmluZ1tdKTogUHJvbWlzZTxMYXp5UmVzdWx0W10+IHtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheShwYXRocykpIHBhdGhzID0gW3BhdGhzXTtcclxuXHJcbiAgICBjb25zdCBwcm9taXNlczogUHJvbWlzZTxMYXp5UmVzdWx0PltdID0gW107XHJcbiAgICBwYXRocy5mb3JFYWNoKHBhdGggPT4ge1xyXG4gICAgICBpZiAocGF0aC5lbmRzV2l0aCgnLmpzJykpIHtcclxuICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMubG9hZFNjcmlwdChwYXRoKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcHJvbWlzZXMucHVzaCh0aGlzLmxvYWRTdHlsZShwYXRoKSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbihyZXMgPT4ge1xyXG4gICAgICB0aGlzLl9ub3RpZnkubmV4dChyZXMpO1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlcyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGxvYWRTY3JpcHQocGF0aDogc3RyaW5nLCBpbm5lckNvbnRlbnQ/OiBzdHJpbmcpOiBQcm9taXNlPExhenlSZXN1bHQ+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgaWYgKHRoaXMubGlzdFtwYXRoXSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIHJlc29sdmUodGhpcy5jYWNoZWRbcGF0aF0pO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5saXN0W3BhdGhdID0gdHJ1ZTtcclxuICAgICAgY29uc3Qgb25TdWNjZXNzID0gKGl0ZW06IGFueSkgPT4ge1xyXG4gICAgICAgIHRoaXMuY2FjaGVkW3BhdGhdID0gaXRlbTtcclxuICAgICAgICByZXNvbHZlKGl0ZW0pO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuZG9jLmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpIGFzIEhUTUxTY3JpcHRFbGVtZW50O1xyXG4gICAgICBub2RlLnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcclxuICAgICAgbm9kZS5zcmMgPSBwYXRoO1xyXG4gICAgICBub2RlLmNoYXJzZXQgPSAndXRmLTgnO1xyXG4gICAgICBpZiAoaW5uZXJDb250ZW50KSB7XHJcbiAgICAgICAgbm9kZS5pbm5lckhUTUwgPSBpbm5lckNvbnRlbnQ7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCg8YW55Pm5vZGUpLnJlYWR5U3RhdGUpIHtcclxuICAgICAgICAvLyBJRVxyXG4gICAgICAgICg8YW55Pm5vZGUpLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgKDxhbnk+bm9kZSkucmVhZHlTdGF0ZSA9PT0gJ2xvYWRlZCcgfHxcclxuICAgICAgICAgICAgKDxhbnk+bm9kZSkucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJ1xyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICg8YW55Pm5vZGUpLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XHJcbiAgICAgICAgICAgIG9uU3VjY2Vzcyh7XHJcbiAgICAgICAgICAgICAgcGF0aDogcGF0aCxcclxuICAgICAgICAgICAgICBsb2FkZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgc3RhdHVzOiAnb2snLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5vZGUub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgb25TdWNjZXNzKHtcclxuICAgICAgICAgICAgcGF0aDogcGF0aCxcclxuICAgICAgICAgICAgbG9hZGVkOiB0cnVlLFxyXG4gICAgICAgICAgICBzdGF0dXM6ICdvaycsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIG5vZGUub25lcnJvciA9IChlcnJvcjogYW55KSA9PlxyXG4gICAgICAgIG9uU3VjY2Vzcyh7XHJcbiAgICAgICAgICBwYXRoOiBwYXRoLFxyXG4gICAgICAgICAgbG9hZGVkOiBmYWxzZSxcclxuICAgICAgICAgIHN0YXR1czogJ2Vycm9yJyxcclxuICAgICAgICB9KTtcclxuICAgICAgdGhpcy5kb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChub2RlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbG9hZFN0eWxlKFxyXG4gICAgcGF0aDogc3RyaW5nLFxyXG4gICAgcmVsID0gJ3N0eWxlc2hlZXQnLFxyXG4gICAgaW5uZXJDb250ZW50Pzogc3RyaW5nLFxyXG4gICk6IFByb21pc2U8TGF6eVJlc3VsdD4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICBpZiAodGhpcy5saXN0W3BhdGhdID09PSB0cnVlKSB7XHJcbiAgICAgICAgcmVzb2x2ZSh0aGlzLmNhY2hlZFtwYXRoXSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmxpc3RbcGF0aF0gPSB0cnVlO1xyXG5cclxuICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuZG9jLmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKSBhcyBIVE1MTGlua0VsZW1lbnQ7XHJcbiAgICAgIG5vZGUucmVsID0gcmVsO1xyXG4gICAgICBub2RlLnR5cGUgPSAndGV4dC9jc3MnO1xyXG4gICAgICBub2RlLmhyZWYgPSBwYXRoO1xyXG4gICAgICBpZiAoaW5uZXJDb250ZW50KSB7XHJcbiAgICAgICAgbm9kZS5pbm5lckhUTUwgPSBpbm5lckNvbnRlbnQ7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5kb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChub2RlKTtcclxuICAgICAgY29uc3QgaXRlbTogTGF6eVJlc3VsdCA9IHtcclxuICAgICAgICBwYXRoOiBwYXRoLFxyXG4gICAgICAgIGxvYWRlZDogdHJ1ZSxcclxuICAgICAgICBzdGF0dXM6ICdvaycsXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuY2FjaGVkW3BhdGhdID0gaXRlbTtcclxuICAgICAgcmVzb2x2ZShpdGVtKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCIvKiogw6bCmMKvw6XCkMKmw6TCuMK6w6bClcKww6XCrcKXICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc051bSh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgcmV0dXJuIC9eKCgtP1xcZCtcXC5cXGQrKXwoLT9cXGQrKXwoLT9cXC5cXGQrKSkkLy50ZXN0KHZhbHVlLnRvU3RyaW5nKCkpO1xyXG59XHJcblxyXG4vKiogw6bCmMKvw6XCkMKmw6TCuMK6w6bClcK0w6bClcKwICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0ludCh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnRyaXBsZS1lcXVhbHNcclxuICByZXR1cm4gaXNOdW0odmFsdWUpICYmIHBhcnNlSW50KHZhbHVlLnRvU3RyaW5nKCksIDEwKSA9PSB2YWx1ZTtcclxufVxyXG5cclxuLyoqIMOmwpjCr8OlwpDCpsOkwrjCusOlwrDCj8OmwpXCsCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNEZWNpbWFsKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiBib29sZWFuIHtcclxuICByZXR1cm4gaXNOdW0odmFsdWUpICYmICFpc0ludCh2YWx1ZSk7XHJcbn1cclxuXHJcbi8qKiDDpsKYwq/DpcKQwqbDpMK4wrrDqMK6wqvDpMK7wr3DqMKvwoEgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzSWRDYXJkKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcclxuICByZXR1cm4gKFxyXG4gICAgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiAvKF5cXGR7MTV9JCl8KF5cXGR7MTd9KFswLTldfFgpJCkvaS50ZXN0KHZhbHVlKVxyXG4gICk7XHJcbn1cclxuXHJcbi8qKiDDpsKYwq/DpcKQwqbDpMK4wrrDpsKJwovDpsKcwrrDpcKPwrcgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTW9iaWxlKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcclxuICByZXR1cm4gKFxyXG4gICAgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJlxyXG4gICAgL14oMHxcXCs/ODZ8MTc5NTEpPygxM1swLTldfDE1WzAtOV18MTdbMDY3OF18MThbMC05XXwxNFs1N10pWzAtOV17OH0kLy50ZXN0KFxyXG4gICAgICB2YWx1ZSxcclxuICAgIClcclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgVmFsaWRhdGlvbkVycm9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgaXNOdW0sIGlzSW50LCBpc0RlY2ltYWwsIGlzSWRDYXJkLCBpc01vYmlsZSB9IGZyb20gJy4vdmFsaWRhdGUnO1xyXG5cclxuLyoqIMOkwrjCgMOlwqXCl8OmwpfCpcOlwrjCuMOpwqrCjMOowq/CgcOlwpnCqCAqL1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y2xhc3MtbmFtZVxyXG5leHBvcnQgY2xhc3MgX1ZhbGlkYXRvcnMge1xyXG4gIC8qKiDDpsKYwq/DpcKQwqbDpMK4wrrDpsKVwrDDpcKtwpcgKi9cclxuICBzdGF0aWMgbnVtKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgIHJldHVybiBpc051bShjb250cm9sLnZhbHVlKSA/IG51bGwgOiB7IG51bTogdHJ1ZSB9O1xyXG4gIH1cclxuXHJcbiAgLyoqIMOmwpjCr8OlwpDCpsOkwrjCusOmwpXCtMOmwpXCsCAqL1xyXG4gIHN0YXRpYyBpbnQoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xyXG4gICAgcmV0dXJuIGlzSW50KGNvbnRyb2wudmFsdWUpID8gbnVsbCA6IHsgaW50OiB0cnVlIH07XHJcbiAgfVxyXG5cclxuICAvKiogw6bCmMKvw6XCkMKmw6TCuMK6w6XCsMKPw6bClcKwICovXHJcbiAgc3RhdGljIGRlY2ltYWwoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xyXG4gICAgcmV0dXJuIGlzRGVjaW1hbChjb250cm9sLnZhbHVlKSA/IG51bGwgOiB7IGRlY2ltYWw6IHRydWUgfTtcclxuICB9XHJcblxyXG4gIC8qKiDDpsKYwq/DpcKQwqbDpMK4wrrDqMK6wqvDpMK7wr3DqMKvwoEgKi9cclxuICBzdGF0aWMgaWRDYXJkKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgIHJldHVybiBpc0lkQ2FyZChjb250cm9sLnZhbHVlKSA/IG51bGwgOiB7IGlkQ2FyZDogdHJ1ZSB9O1xyXG4gIH1cclxuXHJcbiAgLyoqIMOmwpjCr8OlwpDCpsOkwrjCusOmwonCi8OmwpzCusOlwo/CtyAqL1xyXG4gIHN0YXRpYyBtb2JpbGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xyXG4gICAgcmV0dXJuIGlzTW9iaWxlKGNvbnRyb2wudmFsdWUpID8gbnVsbCA6IHsgbW9iaWxlOiB0cnVlIH07XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBpc0VtcHR5KGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XHJcbiAgY29uc3Qgbm9kZXMgPSBlbGVtZW50LmNoaWxkTm9kZXM7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3Qgbm9kZSA9IG5vZGVzLml0ZW0oaSk7XHJcbiAgICBpZiAoXHJcbiAgICAgIG5vZGUubm9kZVR5cGUgPT09IDEgJiZcclxuICAgICAgKG5vZGUgYXMgSFRNTEVsZW1lbnQpLm91dGVySFRNTC50b1N0cmluZygpLnRyaW0oKS5sZW5ndGggIT09IDBcclxuICAgICkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICBub2RlLm5vZGVUeXBlID09PSAzICYmXHJcbiAgICAgIG5vZGUudGV4dENvbnRlbnQudG9TdHJpbmcoKS50cmltKCkubGVuZ3RoICE9PSAwXHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvQm9vbGVhbihcclxuICB2YWx1ZTogYW55LFxyXG4gIGFsbG93VW5kZWZpbmVkID0gZmFsc2UsXHJcbik6IGJvb2xlYW4ge1xyXG4gIHJldHVybiBhbGxvd1VuZGVmaW5lZCAmJiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnXHJcbiAgICA/IHVuZGVmaW5lZFxyXG4gICAgOiB2YWx1ZSAhPSBudWxsICYmIGAke3ZhbHVlfWAgIT09ICdmYWxzZSc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnB1dCBkZWNvcmF0b3IgdGhhdCBoYW5kbGUgYSBwcm9wIHRvIGRvIGdldC9zZXQgYXV0b21hdGljYWxseSB3aXRoIHRvQm9vbGVhblxyXG4gKiBAZXhhbXBsZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB2aXNpYmxlOiBib29sZWFuID0gZmFsc2U7XHJcbiAqIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4obnVsbCkgdmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gKiBgYGBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBJbnB1dEJvb2xlYW4oYWxsb3dVbmRlZmluZWQgPSBmYWxzZSk6IGFueSB7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIElucHV0Qm9vbGVhblByb3BEZWNvcmF0b3IgKHRhcmdldDogb2JqZWN0LCBuYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIC8vIEFkZCBvdXIgb3duIHByaXZhdGUgcHJvcFxyXG4gICAgY29uc3QgcHJpdmF0ZVByb3BOYW1lID0gYCQkX18ke25hbWV9YDtcclxuXHJcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRhcmdldCwgcHJpdmF0ZVByb3BOYW1lKSkge1xyXG4gICAgICBjb25zb2xlLndhcm4oYFRoZSBwcm9wIFwiJHtwcml2YXRlUHJvcE5hbWV9XCIgaXMgYWxyZWFkeSBleGlzdCwgaXQgd2lsbCBiZSBvdmVycmlkZWQgYnkgSW5wdXRCb29sZWFuIGRlY29yYXRvci5gKTtcclxuICAgIH1cclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcml2YXRlUHJvcE5hbWUsIHtcclxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgICB3cml0YWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgbmFtZSwge1xyXG4gICAgICBnZXQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXNbIHByaXZhdGVQcm9wTmFtZSBdOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWludmFsaWQtdGhpc1xyXG4gICAgICB9LFxyXG4gICAgICBzZXQodmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXNbIHByaXZhdGVQcm9wTmFtZSBdID0gdG9Cb29sZWFuKHZhbHVlLCBhbGxvd1VuZGVmaW5lZCk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8taW52YWxpZC10aGlzXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b051bWJlcih2YWx1ZTogYW55KTogbnVtYmVyO1xyXG5leHBvcnQgZnVuY3Rpb24gdG9OdW1iZXI8RD4odmFsdWU6IGFueSwgZmFsbGJhY2s6IEQpOiBudW1iZXIgfCBEO1xyXG5leHBvcnQgZnVuY3Rpb24gdG9OdW1iZXIodmFsdWU6IGFueSwgZmFsbGJhY2tWYWx1ZSA9IDApIHtcclxuICByZXR1cm4gIWlzTmFOKHBhcnNlRmxvYXQodmFsdWUgYXMgYW55KSkgJiYgIWlzTmFOKE51bWJlcih2YWx1ZSkpXHJcbiAgICA/IE51bWJlcih2YWx1ZSlcclxuICAgIDogZmFsbGJhY2tWYWx1ZTtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBJbnB1dCBkZWNvcmF0b3IgdGhhdCBoYW5kbGUgYSBwcm9wIHRvIGRvIGdldC9zZXQgYXV0b21hdGljYWxseSB3aXRoIHRvTnVtYmVyXHJcbiAqIEBleGFtcGxlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogQElucHV0KCkgQElucHV0TnVtYmVyKCkgdmlzaWJsZTogbnVtYmVyID0gMTtcclxuICogQElucHV0KCkgQElucHV0TnVtYmVyKG51bGwpIHZpc2libGU6IG51bWJlciA9IDI7XHJcbiAqIGBgYFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIElucHV0TnVtYmVyKGZhbGxiYWNrID0gMCk6IGFueSB7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIElucHV0Qm9vbGVhblByb3BEZWNvcmF0b3IgKHRhcmdldDogb2JqZWN0LCBuYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIC8vIEFkZCBvdXIgb3duIHByaXZhdGUgcHJvcFxyXG4gICAgY29uc3QgcHJpdmF0ZVByb3BOYW1lID0gYCQkX18ke25hbWV9YDtcclxuXHJcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRhcmdldCwgcHJpdmF0ZVByb3BOYW1lKSkge1xyXG4gICAgICBjb25zb2xlLndhcm4oYFRoZSBwcm9wIFwiJHtwcml2YXRlUHJvcE5hbWV9XCIgaXMgYWxyZWFkeSBleGlzdCwgaXQgd2lsbCBiZSBvdmVycmlkZWQgYnkgSW5wdXROdW1iZXIgZGVjb3JhdG9yLmApO1xyXG4gICAgfVxyXG5cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByaXZhdGVQcm9wTmFtZSwge1xyXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICAgIHdyaXRhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBuYW1lLCB7XHJcbiAgICAgIGdldCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpc1sgcHJpdmF0ZVByb3BOYW1lIF07IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8taW52YWxpZC10aGlzXHJcbiAgICAgIH0sXHJcbiAgICAgIHNldCh2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpc1sgcHJpdmF0ZVByb3BOYW1lIF0gPSB0b051bWJlcih2YWx1ZSwgZmFsbGJhY2spOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWludmFsaWQtdGhpc1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG59XHJcbiIsImltcG9ydCB7IFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5mdW5jdGlvbiByZW1vdmVDbGFzcyhcbiAgZWw6IEhUTUxFbGVtZW50LFxuICBjbGFzc01hcDogb2JqZWN0LFxuICByZW5kZXJlcjogUmVuZGVyZXIyLFxuKTogdm9pZCB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpmb3JpblxuICBmb3IgKGNvbnN0IGkgaW4gY2xhc3NNYXApIHtcbiAgICByZW5kZXJlci5yZW1vdmVDbGFzcyhlbCwgaSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkQ2xhc3MoXG4gIGVsOiBIVE1MRWxlbWVudCxcbiAgY2xhc3NNYXA6IG9iamVjdCxcbiAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbik6IHZvaWQge1xuICBmb3IgKGNvbnN0IGkgaW4gY2xhc3NNYXApIHtcbiAgICBpZiAoY2xhc3NNYXBbaV0pIHtcbiAgICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsLCBpKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiDDpsKbwrTDpsKWwrDDpcKuwr/DpMK4wrvDp8K7woTDpMK7wrbDpsKgwrfDpcK8wo8gYGNsYXNzYMOvwrzCjMOkwr7Ci8OlwqbCgsOvwrzCmlxuICpcbiAqIGBgYHRzXG4gKiB1cGRhdGVIb3N0Q2xhc3MoXG4gKiAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LFxuICogIHtcbiAqICAgIFsgJ2NsYXNzbmFtZScgXTogdHJ1ZSxcbiAqICAgIFsgJ2NsYXNzbmFtZScgXTogdGhpcy50eXBlID09PSAnMScsXG4gKiAgICBbIHRoaXMuY2xzIF06IHRydWUsXG4gKiAgICBbIGBhLSR7dGhpcy5jbHN9YCBdOiB0cnVlXG4gKiAgfSxcbiAqICB0aGlzLnJlbmRlcmVyKVxuICogYGBgXG4gKlxuICogQHBhcmFtIFtjbGVhbkFsbF0gw6bCmMKvw6XCkMKmw6XChcKIw6bCuMKFw6fCkMKGw6bCicKAw6bCnMKJIGBjbGFzc2Agw6XCgMK8w6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYGZhbHNlYFxuICovXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlSG9zdENsYXNzKFxuICBlbDogSFRNTEVsZW1lbnQsXG4gIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gIGNsYXNzTWFwOiBvYmplY3QsXG4gIGNsZWFuQWxsID0gZmFsc2Vcbik6IHZvaWQge1xuICBpZiAoY2xlYW5BbGwgPT09IHRydWUpIHtcbiAgICByZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUoZWwsICdjbGFzcycpO1xuICB9IGVsc2Uge1xuICAgIHJlbW92ZUNsYXNzKGVsLCBjbGFzc01hcCwgcmVuZGVyZXIpO1xuICB9XG4gIGNsYXNzTWFwID0geyAuLi5jbGFzc01hcCB9O1xuICBhZGRDbGFzcyhlbCwgY2xhc3NNYXAsIHJlbmRlcmVyKTtcbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQXJyYXlDb25maWcgfSBmcm9tICcuL2FycmF5L2FycmF5LmNvbmZpZyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgRGVsb25VdGlsQ29uZmlnIHtcclxuICBhcnJheT86IEFycmF5Q29uZmlnO1xyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTnpUcmVlTm9kZSB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xyXG5pbXBvcnQgeyBEZWxvblV0aWxDb25maWcgfSBmcm9tICcuLi91dGlsLmNvbmZpZyc7XHJcbmltcG9ydCB7IEFycmF5Q29uZmlnIH0gZnJvbSAnLi9hcnJheS5jb25maWcnO1xyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIEFycmF5U2VydmljZSB7XHJcbiAgcHJpdmF0ZSBjOiBBcnJheUNvbmZpZztcclxuICBjb25zdHJ1Y3Rvcihjb2c6IERlbG9uVXRpbENvbmZpZykge1xyXG4gICAgdGhpcy5jID0gT2JqZWN0LmFzc2lnbihcclxuICAgICAgPEFycmF5Q29uZmlnPntcclxuICAgICAgICBkZWVwTWFwTmFtZTogJ2RlZXAnLFxyXG4gICAgICAgIHBhcmVudE1hcE5hbWU6ICdwYXJlbnQnLFxyXG4gICAgICAgIGlkTWFwTmFtZTogJ2lkJyxcclxuICAgICAgICBwYXJlbnRJZE1hcE5hbWU6ICdwYXJlbnRfaWQnLFxyXG4gICAgICAgIGNoaWxkcmVuTWFwTmFtZTogJ2NoaWxkcmVuJyxcclxuICAgICAgICB0aXRsZU1hcE5hbWU6ICd0aXRsZScsXHJcbiAgICAgICAgY2hlY2tlZE1hcG5hbWU6ICdjaGVja2VkJyxcclxuICAgICAgICBzZWxlY3RlZE1hcG5hbWU6ICdzZWxlY3RlZCcsXHJcbiAgICAgICAgZXhwYW5kZWRNYXBuYW1lOiAnZXhwYW5kZWQnLFxyXG4gICAgICAgIGRpc2FibGVkTWFwbmFtZTogJ2Rpc2FibGVkJyxcclxuICAgICAgfSxcclxuICAgICAgY29nICYmIGNvZy5hcnJheSxcclxuICAgICk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIMOlwrDChsOmwqDCkcOnwrvCk8Omwp7ChMOowr3CrMOmwo3CosOmwojCkMOmwpXCsMOnwrvChMOnwrvCk8Omwp7ChFxyXG4gICAqL1xyXG4gIHRyZWVUb0FycihcclxuICAgIHRyZWU6IGFueVtdLFxyXG4gICAgb3B0aW9ucz86IHtcclxuICAgICAgLyoqIMOmwrfCscOlwrrCpsOpwqHCucOlwpDCjcOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmAnZGVlcCdgICovXHJcbiAgICAgIGRlZXBNYXBOYW1lPzogc3RyaW5nO1xyXG4gICAgICAvKiogw6bCicKBw6XCucKzw6XCkMKOw6bClcKww6fCu8KEw6fCmsKEw6fCiMK2w6bClcKww6bCjcKuw6nCocK5w6XCkMKNw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYCdwYXJlbnQnYCAqL1xyXG4gICAgICBwYXJlbnRNYXBOYW1lPzogc3RyaW5nO1xyXG4gICAgICAvKiogw6bCusKQw6bClcKww6bCjcKuw6XCrcKQw6nCocK5w6XCkMKNw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYCdjaGlsZHJlbidgICovXHJcbiAgICAgIGNoaWxkcmVuTWFwTmFtZT86IHN0cmluZztcclxuICAgICAgLyoqIMOmwpjCr8OlwpDCpsOnwqfCu8OpwpnCpCBgY2hpbGRyZW5gIMOoworCgsOnwoLCucOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmB0cnVlYCAqL1xyXG4gICAgICBjbGVhckNoaWxkcmVuPzogYm9vbGVhbjtcclxuICAgICAgLyoqIMOowr3CrMOmwo3CosOmwojCkMOmwpXCsMOnwrvChMOnwrvCk8Omwp7ChMOmwpfCtsOlwpvCnsOowrDCgyAqL1xyXG4gICAgICBjYj86IChpdGVtOiBhbnksIHBhcmVudDogYW55LCBkZWVwOiBudW1iZXIpID0+IHZvaWQ7XHJcbiAgICB9LFxyXG4gICk6IGFueVtdIHtcclxuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKFxyXG4gICAgICB7XHJcbiAgICAgICAgZGVlcE1hcE5hbWU6IHRoaXMuYy5kZWVwTWFwTmFtZSxcclxuICAgICAgICBwYXJlbnRNYXBOYW1lOiB0aGlzLmMucGFyZW50TWFwTmFtZSxcclxuICAgICAgICBjaGlsZHJlbk1hcE5hbWU6IHRoaXMuYy5jaGlsZHJlbk1hcE5hbWUsXHJcbiAgICAgICAgY2xlYXJDaGlsZHJlbjogdHJ1ZSxcclxuICAgICAgICBjYjogbnVsbCxcclxuICAgICAgfSxcclxuICAgICAgb3B0aW9ucyxcclxuICAgICk7XHJcbiAgICBjb25zdCByZXN1bHQ6IGFueVtdID0gW107XHJcbiAgICBjb25zdCBpbkZuID0gKGxpc3Q6IGFueVtdLCBwYXJlbnQ6IGFueSwgZGVlcDogbnVtYmVyKSA9PiB7XHJcbiAgICAgIGZvciAoY29uc3QgaSBvZiBsaXN0KSB7XHJcbiAgICAgICAgaVtvcHRpb25zLmRlZXBNYXBOYW1lXSA9IGRlZXA7XHJcbiAgICAgICAgaVtvcHRpb25zLnBhcmVudE1hcE5hbWVdID0gcGFyZW50O1xyXG4gICAgICAgIGlmIChvcHRpb25zLmNiKSBvcHRpb25zLmNiKGksIHBhcmVudCwgZGVlcCk7XHJcbiAgICAgICAgcmVzdWx0LnB1c2goaSk7XHJcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBpW29wdGlvbnMuY2hpbGRyZW5NYXBOYW1lXTtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBjaGlsZHJlbiAhPSBudWxsICYmXHJcbiAgICAgICAgICBBcnJheS5pc0FycmF5KGNoaWxkcmVuKSAmJlxyXG4gICAgICAgICAgY2hpbGRyZW4ubGVuZ3RoID4gMFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgaW5GbihjaGlsZHJlbiwgaSwgZGVlcCArIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob3B0aW9ucy5jbGVhckNoaWxkcmVuKSBkZWxldGUgaVtvcHRpb25zLmNoaWxkcmVuTWFwTmFtZV07XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBpbkZuKHRyZWUsIDEsIG51bGwpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIMOmwpXCsMOnwrvChMOowr3CrMOmwo3CosOmwojCkMOmwqDCkcOmwpXCsMOmwo3CrlxyXG4gICAqL1xyXG4gIGFyclRvVHJlZShcclxuICAgIGFycjogYW55W10sXHJcbiAgICBvcHRpb25zPzoge1xyXG4gICAgICAvKiogw6fCvMKWw6XCj8K3w6nCocK5w6XCkMKNw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYCdpZCdgICovXHJcbiAgICAgIGlkTWFwTmFtZT86IHN0cmluZztcclxuICAgICAgLyoqIMOnwojCtsOnwrzClsOlwo/Ct8OpwqHCucOlwpDCjcOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmAncGFyZW50X2lkJ2AgKi9cclxuICAgICAgcGFyZW50SWRNYXBOYW1lPzogc3RyaW5nO1xyXG4gICAgICAvKiogw6XCrcKQw6nCocK5w6XCkMKNw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYCdjaGlsZHJlbidgICovXHJcbiAgICAgIGNoaWxkcmVuTWFwTmFtZT86IHN0cmluZztcclxuICAgICAgLyoqIMOowr3CrMOmwo3CosOmwojCkMOmwqDCkcOmwpXCsMOmwo3CrsOmwpfCtsOlwpvCnsOowrDCgyAqL1xyXG4gICAgICBjYj86IChpdGVtOiBhbnkpID0+IHZvaWQ7XHJcbiAgICB9LFxyXG4gICk6IGFueVtdIHtcclxuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKFxyXG4gICAgICB7XHJcbiAgICAgICAgaWRNYXBOYW1lOiB0aGlzLmMuaWRNYXBOYW1lLFxyXG4gICAgICAgIHBhcmVudElkTWFwTmFtZTogdGhpcy5jLnBhcmVudElkTWFwTmFtZSxcclxuICAgICAgICBjaGlsZHJlbk1hcE5hbWU6IHRoaXMuYy5jaGlsZHJlbk1hcE5hbWUsXHJcbiAgICAgICAgY2I6IG51bGwsXHJcbiAgICAgIH0sXHJcbiAgICAgIG9wdGlvbnMsXHJcbiAgICApO1xyXG4gICAgY29uc3QgdHJlZTogYW55W10gPSBbXTtcclxuICAgIGNvbnN0IGNoaWxkcmVuT2YgPSB7fTtcclxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBhcnIpIHtcclxuICAgICAgY29uc3QgaWQgPSBpdGVtW29wdGlvbnMuaWRNYXBOYW1lXSxcclxuICAgICAgICBwaWQgPSBpdGVtW29wdGlvbnMucGFyZW50SWRNYXBOYW1lXTtcclxuICAgICAgY2hpbGRyZW5PZltpZF0gPSBjaGlsZHJlbk9mW2lkXSB8fCBbXTtcclxuICAgICAgaXRlbVtvcHRpb25zLmNoaWxkcmVuTWFwTmFtZV0gPSBjaGlsZHJlbk9mW2lkXTtcclxuICAgICAgaWYgKG9wdGlvbnMuY2IpIG9wdGlvbnMuY2IoaXRlbSk7XHJcbiAgICAgIGlmIChwaWQpIHtcclxuICAgICAgICBjaGlsZHJlbk9mW3BpZF0gPSBjaGlsZHJlbk9mW3BpZF0gfHwgW107XHJcbiAgICAgICAgY2hpbGRyZW5PZltwaWRdLnB1c2goaXRlbSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdHJlZS5wdXNoKGl0ZW0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJlZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIMOmwpXCsMOnwrvChMOowr3CrMOmwo3CosOmwojCkCBgbnotdHJlZWAgw6bClcKww6bCjcKuw6bCusKQw6/CvMKMw6nCgMKaw6jCv8KHIGBvcHRpb25zYCDDqMK9wqzDpcKMwpbDqcKhwrnDpcKQwo3Dr8K8wozDpMK5wp/DpcKPwq/DpMK7wqXDpMK9wr/Dp8KUwqggYG9wdGlvbnMuY2JgIMOmwpvCtMOpwqvCmMOnwrrCp8OlwobCs8Olwq7CmsOmwpXCsMOmwo3CrsOpwqHCuVxyXG4gICAqL1xyXG4gIGFyclRvVHJlZU5vZGUoXHJcbiAgICBhcnI6IGFueVtdLFxyXG4gICAgb3B0aW9ucz86IHtcclxuICAgICAgLyoqIMOnwrzClsOlwo/Ct8OpwqHCucOlwpDCjcOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmAnaWQnYCAqL1xyXG4gICAgICBpZE1hcE5hbWU/OiBzdHJpbmc7XHJcbiAgICAgIC8qKiDDp8KIwrbDp8K8wpbDpcKPwrfDqcKhwrnDpcKQwo3Dr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgJ3BhcmVudF9pZCdgICovXHJcbiAgICAgIHBhcmVudElkTWFwTmFtZT86IHN0cmluZztcclxuICAgICAgLyoqIMOmwqDCh8OpwqLCmMOpwqHCucOlwpDCjcOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmAndGl0bGUnYCAqL1xyXG4gICAgICB0aXRsZU1hcE5hbWU/OiBzdHJpbmc7XHJcbiAgICAgIC8qKiDDqMKuwr7Dp8K9wq7DpMK4wrrDpcKPwrbDpcKtwpDDqMKKwoLDp8KCwrnDqcKhwrnDpcKQwo3Dr8K8wozDqMKLwqXDpsKVwrDDpsKNwq7DpsK6wpDDpMK4wo3DpcKtwpjDpcKcwqjDpsKXwrbDqMKHwqrDpcKKwqjDpsKgwrnDpsKNwq4gYGNoaWxkcmVuYCDDpcKAwrzDpcKGwrPDpcKuwprDpsKYwq/DpcKQwqbDpMK4wrrDpcKPwrbDpcKtwpDDqMKKwoLDp8KCwrnDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgJ2lzTGVhZidgICovXHJcbiAgICAgIGlzTGVhZk1hcE5hbWU/OiBzdHJpbmc7XHJcbiAgICAgIC8qKiDDqMKKwoLDp8KCwrkgQ2hlY2tib3ggw6bCmMKvw6XCkMKmw6nCgMKJw6TCuMKtw6nCocK5w6XCkMKNw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYCdjaGVja2VkJ2AgKi9cclxuICAgICAgY2hlY2tlZE1hcG5hbWU/OiBzdHJpbmc7XHJcbiAgICAgIC8qKiDDqMKKwoLDp8KCwrnDpsKcwqzDqMK6wqvDpsKYwq/DpcKQwqbDqcKAwonDpMK4wq3DqcKhwrnDpcKQwo3Dr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgJ3NlbGVjdGVkJ2AgKi9cclxuICAgICAgc2VsZWN0ZWRNYXBuYW1lPzogc3RyaW5nO1xyXG4gICAgICAvKiogw6jCisKCw6fCgsK5w6bCmMKvw6XCkMKmw6XCscKVw6XCvMKAKMOlwo/CtsOlwq3CkMOoworCgsOnwoLCucOmwpfCoMOmwpXCiCnDqcKhwrnDpcKQwo3Dr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgJ2V4cGFuZGVkJ2AgKi9cclxuICAgICAgZXhwYW5kZWRNYXBuYW1lPzogc3RyaW5nO1xyXG4gICAgICAvKiogw6jCrsK+w6fCvcKuw6bCmMKvw6XCkMKmw6fCpsKBw6fClMKow6jCisKCw6fCgsK5KMOkwrjCjcOlwo/Cr8Oowr/Cm8OowqHCjMOkwrvCu8Okwr3ClcOmwpPCjcOkwr3CnCnDqcKhwrnDpcKQwo3Dr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgJ2Rpc2FibGVkJ2AgKi9cclxuICAgICAgZGlzYWJsZWRNYXBuYW1lPzogc3RyaW5nO1xyXG4gICAgICAvKiogw6jCvcKsw6bCjcKiw6bCiMKQw6bCoMKRw6bClcKww6bCjcKuw6XCkMKOw6/CvMKMw6bCicKnw6jCocKMw6fCmsKEw6nCgMKSw6XCvcKSw6XCm8Kew6jCsMKDICovXHJcbiAgICAgIGNiPzogKGl0ZW06IGFueSwgcGFyZW50OiBhbnksIGRlZXA6IG51bWJlcikgPT4gdm9pZDtcclxuICAgIH0sXHJcbiAgKTogTnpUcmVlTm9kZVtdIHtcclxuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKFxyXG4gICAgICB7XHJcbiAgICAgICAgZXhwYW5kZWQ6IGZhbHNlLFxyXG4gICAgICAgIGlkTWFwTmFtZTogdGhpcy5jLmlkTWFwTmFtZSxcclxuICAgICAgICBwYXJlbnRJZE1hcE5hbWU6IHRoaXMuYy5wYXJlbnRJZE1hcE5hbWUsXHJcbiAgICAgICAgdGl0bGVNYXBOYW1lOiB0aGlzLmMudGl0bGVNYXBOYW1lLFxyXG4gICAgICAgIGlzTGVhZk1hcE5hbWU6ICdpc0xlYWYnLFxyXG4gICAgICAgIGNoZWNrZWRNYXBuYW1lOiB0aGlzLmMuY2hlY2tlZE1hcG5hbWUsXHJcbiAgICAgICAgc2VsZWN0ZWRNYXBuYW1lOiB0aGlzLmMuc2VsZWN0ZWRNYXBuYW1lLFxyXG4gICAgICAgIGV4cGFuZGVkTWFwbmFtZTogdGhpcy5jLmV4cGFuZGVkTWFwbmFtZSxcclxuICAgICAgICBkaXNhYmxlZE1hcG5hbWU6IHRoaXMuYy5kaXNhYmxlZE1hcG5hbWUsXHJcbiAgICAgICAgY2I6IG51bGwsXHJcbiAgICAgIH0sXHJcbiAgICAgIG9wdGlvbnMsXHJcbiAgICApO1xyXG4gICAgY29uc3QgdHJlZSA9IHRoaXMuYXJyVG9UcmVlKGFyciwge1xyXG4gICAgICBpZE1hcE5hbWU6IG9wdGlvbnMuaWRNYXBOYW1lLFxyXG4gICAgICBwYXJlbnRJZE1hcE5hbWU6IG9wdGlvbnMucGFyZW50SWRNYXBOYW1lLFxyXG4gICAgICBjaGlsZHJlbk1hcE5hbWU6ICdjaGlsZHJlbicsXHJcbiAgICB9KTtcclxuICAgIHRoaXMudmlzaXRUcmVlKHRyZWUsIChpdGVtOiBhbnksIHBhcmVudDogYW55LCBkZWVwOiBudW1iZXIpID0+IHtcclxuICAgICAgaXRlbS5rZXkgPSBpdGVtW29wdGlvbnMuaWRNYXBOYW1lXTtcclxuICAgICAgaXRlbS50aXRsZSA9IGl0ZW1bb3B0aW9ucy50aXRsZU1hcE5hbWVdO1xyXG4gICAgICBpdGVtLmNoZWNrZWQgPSBpdGVtW29wdGlvbnMuY2hlY2tlZE1hcG5hbWVdO1xyXG4gICAgICBpdGVtLnNlbGVjdGVkID0gaXRlbVtvcHRpb25zLnNlbGVjdGVkTWFwbmFtZV07XHJcbiAgICAgIGl0ZW0uZXhwYW5kZWQgPSBpdGVtW29wdGlvbnMuZXhwYW5kZWRNYXBuYW1lXTtcclxuICAgICAgaXRlbS5kaXNhYmxlZCA9IGl0ZW1bb3B0aW9ucy5kaXNhYmxlZE1hcG5hbWVdO1xyXG4gICAgICBpZiAoaXRlbVtvcHRpb25zLmlzTGVhZk1hcE5hbWVdID09IG51bGwpIHtcclxuICAgICAgICBpdGVtLmlzTGVhZiA9IGl0ZW0uY2hpbGRyZW4ubGVuZ3RoID09PSAwO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGl0ZW0uaXNMZWFmID0gaXRlbVtvcHRpb25zLmlzTGVhZk1hcE5hbWVdO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChvcHRpb25zLmNiKSBvcHRpb25zLmNiKGl0ZW0sIHBhcmVudCwgZGVlcCk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB0cmVlLm1hcChub2RlID0+IG5ldyBOelRyZWVOb2RlKG5vZGUpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIMOpwoDCksOlwr3CksOowq7Cv8OpwpfCrsOmwpXCtMOkwrjCqsOmwqDCkVxyXG4gICAqL1xyXG4gIHZpc2l0VHJlZShcclxuICAgIHRyZWU6IGFueVtdLFxyXG4gICAgY2I6IChpdGVtOiBhbnksIHBhcmVudDogYW55LCBkZWVwOiBudW1iZXIpID0+IHZvaWQsXHJcbiAgICBvcHRpb25zPzoge1xyXG4gICAgICAvKiogw6XCrcKQw6nCocK5w6XCkMKNw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYCdjaGlsZHJlbidgICovXHJcbiAgICAgIGNoaWxkcmVuTWFwTmFtZT86IHN0cmluZztcclxuICAgIH0sXHJcbiAgKSB7XHJcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbihcclxuICAgICAge1xyXG4gICAgICAgIGNoaWxkcmVuTWFwTmFtZTogdGhpcy5jLmNoaWxkcmVuTWFwTmFtZSxcclxuICAgICAgfSxcclxuICAgICAgb3B0aW9ucyxcclxuICAgICk7XHJcbiAgICBjb25zdCBpbkZuID0gKGRhdGE6IGFueVtdLCBwYXJlbnQ6IGFueSwgZGVlcDogbnVtYmVyKSA9PiB7XHJcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBkYXRhKSB7XHJcbiAgICAgICAgY2IoaXRlbSwgcGFyZW50LCBkZWVwKTtcclxuICAgICAgICBjb25zdCBjaGlsZHJlblZhbCA9IGl0ZW1bb3B0aW9ucy5jaGlsZHJlbk1hcE5hbWVdO1xyXG4gICAgICAgIGlmIChjaGlsZHJlblZhbCAmJiBjaGlsZHJlblZhbC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBpbkZuKGNoaWxkcmVuVmFsLCBpdGVtLCBkZWVwICsgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgaW5Gbih0cmVlLCBudWxsLCAxKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIMOowo7Ct8Olwo/ClsOmwonCgMOmwpzCicOlwrfCssOnwrvCj8OpwoDCicOkwrjCrcOnwprChCBga2V5YCDDpcKAwrxcclxuICAgKi9cclxuICBnZXRLZXlzQnlUcmVlTm9kZShcclxuICAgIHRyZWU6IE56VHJlZU5vZGVbXSxcclxuICAgIG9wdGlvbnM/OiB7XHJcbiAgICAgIC8qKiDDpsKYwq/DpcKQwqbDpcKMwoXDpcKQwqvDpcKNworDqcKAwonDp8KKwrbDpsKAwoHDp8KawoTDpcKAwrzDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgdHJ1ZWAgKi9cclxuICAgICAgaW5jbHVkZUhhbGZDaGVja2VkPzogYm9vbGVhbjtcclxuICAgICAgLyoqIMOmwpjCr8OlwpDCpsOpwofCjcOmwpbCsMOmwozCh8Olwq7CmiBga2V5YCDDqcKUwq7DpcKQwo3Dr8K8wozDqMKLwqXDpMK4wo3DpsKMwofDpcKuwprDqMKhwqjDp8KkwrrDpMK9wr/Dp8KUwqggYE56VHJlZU5vZGUua2V5YCDDpcKAwrwgKi9cclxuICAgICAga2V5TWFwTmFtZT86IHN0cmluZztcclxuICAgICAgLyoqIMOlwpvCnsOowrDCg8OvwrzCjMOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqsOlwoDCvCBga2V5YCDDpcKAwrzDr8K8wozDpMK8wpjDpcKFwojDp8K6wqfDqcKrwpjDpMK6wo7DpcKFwrbDpMK7wpYgKi9cclxuICAgICAgY2I/OiAoaXRlbTogTnpUcmVlTm9kZSwgcGFyZW50OiBOelRyZWVOb2RlLCBkZWVwOiBudW1iZXIpID0+IGFueTtcclxuICAgIH0sXHJcbiAgKTogYW55W10ge1xyXG4gICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oXHJcbiAgICAgIHtcclxuICAgICAgICBpbmNsdWRlSGFsZkNoZWNrZWQ6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIG9wdGlvbnMsXHJcbiAgICApO1xyXG4gICAgY29uc3Qga2V5czogYW55W10gPSBbXTtcclxuICAgIHRoaXMudmlzaXRUcmVlKFxyXG4gICAgICB0cmVlLFxyXG4gICAgICAoaXRlbTogTnpUcmVlTm9kZSwgcGFyZW50OiBOelRyZWVOb2RlLCBkZWVwOiBudW1iZXIpID0+IHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBpdGVtLmlzQ2hlY2tlZCB8fFxyXG4gICAgICAgICAgKG9wdGlvbnMuaW5jbHVkZUhhbGZDaGVja2VkICYmIGl0ZW0uaXNIYWxmQ2hlY2tlZClcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGtleXMucHVzaChcclxuICAgICAgICAgICAgb3B0aW9ucy5jYlxyXG4gICAgICAgICAgICAgID8gb3B0aW9ucy5jYihpdGVtLCBwYXJlbnQsIGRlZXApXHJcbiAgICAgICAgICAgICAgOiBvcHRpb25zLmtleU1hcE5hbWVcclxuICAgICAgICAgICAgICAgID8gaXRlbS5vcmlnaW5bb3B0aW9ucy5rZXlNYXBOYW1lXVxyXG4gICAgICAgICAgICAgICAgOiBpdGVtLmtleSxcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgKTtcclxuICAgIHJldHVybiBrZXlzO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIERlbG9uVXRpbE1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogRGVsb25VdGlsTW9kdWxlLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7O0FBVUEsaUJB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