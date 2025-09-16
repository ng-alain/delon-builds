import extend from 'extend';
import { DOCUMENT } from '@angular/common';
import * as i0 from '@angular/core';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, share, filter, isObservable } from 'rxjs';

/**
 * Gets the value at `path` of `object`, like `_.get` in lodash.
 *
 * 类似 `_.get`，根据 `path` 获取安全值
 */
function deepGet(obj, path, defaultValue) {
    if (!obj || path == null || path.length === 0)
        return defaultValue;
    if (!Array.isArray(path)) {
        path = ~path.indexOf('.') ? path.split('.') : [path];
    }
    if (path.length === 1) {
        const checkObj = obj[path[0]];
        return typeof checkObj === 'undefined' ? defaultValue : checkObj;
    }
    const res = path.reduce((o, k) => (o || {})[k], obj);
    return typeof res === 'undefined' ? defaultValue : res;
}
/**
 * Base on [extend](https://github.com/justmoon/node-extend) deep copy.
 *
 * 基于 [extend](https://github.com/justmoon/node-extend) 的深度拷贝
 *
 * NOTE: Don't a lot of recursion, maybe performance issues
 */
function deepCopy(obj) {
    const result = extend(true, {}, { _: obj });
    return result._;
}
/**
 * Deep merge object.
 *
 * 深度合并对象
 *
 * @param original 原始对象
 * @param arrayProcessMethod 数组处理方式
 *  - `true` 表示替换新值，不管新值为哪种类型
 *  - `false` 表示会合并整个数组（将旧数据与新数据合并成新数组）
 * @param objects 要合并的对象
 */
function deepMergeKey(original, arrayProcessMethod, ...objects) {
    if (Array.isArray(original) || typeof original !== 'object')
        return original;
    const isObject = (v) => typeof v === 'object';
    const merge = (target, obj) => {
        Object.keys(obj)
            .filter(key => key !== '__proto__' && Object.prototype.hasOwnProperty.call(obj, key))
            .forEach(key => {
            const fromValue = obj[key];
            const toValue = target[key];
            if (Array.isArray(toValue)) {
                target[key] = arrayProcessMethod ? fromValue : [...toValue, ...fromValue];
            }
            else if (typeof fromValue === 'function') {
                target[key] = fromValue;
            }
            else if (fromValue != null && isObject(fromValue) && toValue != null && isObject(toValue)) {
                target[key] = merge(toValue, fromValue);
            }
            else {
                target[key] = deepCopy(fromValue);
            }
        });
        return target;
    };
    objects.filter(v => v != null && isObject(v)).forEach(v => merge(original, v));
    return original;
}
/**
 * Deep merge object.
 *
 * 深度合并对象
 */
function deepMerge(original, ...objects) {
    return deepMergeKey(original, false, ...objects);
}

const record = {};
const PREFIX = '[@DELON]:';
function notRecorded(...args) {
    const asRecord = args.reduce((acc, c) => acc + c.toString(), '');
    if (record[asRecord]) {
        return false;
    }
    else {
        record[asRecord] = true;
        return true;
    }
}
function consoleCommonBehavior(consoleFunc, ...args) {
    if ((typeof ngDevMode === 'undefined' || ngDevMode) && notRecorded(...args)) {
        consoleFunc(...args);
    }
}
// Warning should only be printed in dev mode and only once.
const warn = (...args) => consoleCommonBehavior((...arg) => console.warn(PREFIX, ...arg), ...args);
const warnDeprecation = (...args) => {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
        return () => { };
    }
    const stack = new Error().stack;
    return consoleCommonBehavior((...arg) => console.warn(PREFIX, 'deprecated:', ...arg, stack), ...args);
};
// Log should only be printed in dev mode.
const log = (...args) => {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
        console.log(PREFIX, ...args);
    }
};

/**
 * `LazyService` delay loading JS or CSS files.
 *
 * 延迟加载资源（js 或 css）服务
 */
class LazyService {
    doc = inject(DOCUMENT);
    list = {};
    cached = {};
    _notify = new BehaviorSubject([]);
    get change() {
        return this._notify.asObservable().pipe(share(), filter(ls => ls.length !== 0));
    }
    clear() {
        this.list = {};
        this.cached = {};
    }
    attachAttributes(el, attributes) {
        if (attributes == null)
            return;
        Object.entries(attributes).forEach(([key, value]) => {
            el.setAttribute(key, value);
        });
    }
    /**
     * Load script or style files
     */
    load(paths) {
        if (!Array.isArray(paths)) {
            paths = [paths];
        }
        const promises = [];
        paths
            .map(v => (typeof v !== 'object' ? { path: v } : v))
            .forEach(item => {
            if (item.path.endsWith('.js')) {
                promises.push(this.loadScript(item.path, item.options));
            }
            else {
                promises.push(this.loadStyle(item.path, item.options));
            }
        });
        return Promise.all(promises).then(res => {
            this._notify.next(res);
            return Promise.resolve(res);
        });
    }
    loadScript(path, innerContent, attributes) {
        const options = typeof innerContent === 'object'
            ? innerContent
            : {
                innerContent,
                attributes
            };
        return new Promise(resolve => {
            if (this.list[path] === true) {
                resolve({ ...this.cached[path], status: 'loading' });
                return;
            }
            this.list[path] = true;
            const onSuccess = (item) => {
                this.cached[path] = item;
                resolve(item);
                this._notify.next([item]);
            };
            const node = this.doc.createElement('script');
            node.type = 'text/javascript';
            node.src = path;
            this.attachAttributes(node, options.attributes);
            if (options.innerContent) {
                node.innerHTML = options.innerContent;
            }
            node.onload = () => onSuccess({
                path,
                status: 'ok'
            });
            node.onerror = error => onSuccess({
                path,
                status: 'error',
                error
            });
            this.doc.getElementsByTagName('head')[0].appendChild(node);
        });
    }
    loadStyle(path, rel, innerContent, attributes) {
        const options = typeof rel === 'object'
            ? rel
            : {
                rel,
                innerContent,
                attributes
            };
        return new Promise(resolve => {
            if (this.list[path] === true) {
                resolve(this.cached[path]);
                return;
            }
            this.list[path] = true;
            const node = this.doc.createElement('link');
            node.rel = options.rel ?? 'stylesheet';
            node.type = 'text/css';
            node.href = path;
            this.attachAttributes(node, options.attributes);
            if (options.innerContent) {
                node.innerHTML = options.innerContent;
            }
            this.doc.getElementsByTagName('head')[0].appendChild(node);
            const item = {
                path,
                status: 'ok'
            };
            this.cached[path] = item;
            resolve(item);
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.2", ngImport: i0, type: LazyService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.1.2", ngImport: i0, type: LazyService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.2", ngImport: i0, type: LazyService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });

function throwError(msg, actual, expected, comparison) {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
        throw new Error(`ASSERTION ERROR: ${msg}${comparison == null ? '' : ` [Expected=> ${expected} ${comparison} ${actual} <=Actual]`}`);
    }
}
/**
 * Assert whether the expression and throw an error into console in dev mode
 *
 * 断言表达式是否符合预期，并在开发模式下会在控制台抛出一个错误
 */
function assert(expression, msg) {
    if (!expression) {
        throwError(msg);
    }
}
/**
 * Assert whether empty (`null` or `undefined`)
 *
 * 断言是否空值（`null` 或 `undefined`）
 */
function assertEmpty(actual, msg) {
    if (actual == null) {
        throwError(msg, typeof actual, 'NULL', '==');
    }
}
/**
 * Assert whether `number` type
 *
 * 断言是否 `number` 类型
 */
function assertNumber(actual, msg) {
    if (!(typeof actual === 'number')) {
        throwError(msg, typeof actual, 'number', '===');
    }
}
/**
 * Assert whether `string` type
 *
 * 断言是否 `string` 类型
 */
function assertString(actual, msg) {
    if (!(typeof actual === 'string')) {
        throwError(msg, actual === null ? 'null' : typeof actual, 'string', '===');
    }
}
/**
 * Assert whether `array` type
 *
 * 断言是否 `array` 类型
 */
function assertArray(actual, msg) {
    if (!Array.isArray(actual)) {
        throwError(msg, actual === null ? 'null' : typeof actual, 'array', '===');
    }
}
/**
 * Assert whether `Observable` type
 *
 * 断言是否 `Observable` 类型
 */
function assertObservable(obj, msg) {
    if (!isObservable(obj)) {
        throwError(msg, obj === null ? 'null' : typeof obj, 'Observable', '===');
    }
}

/**
 * Generated bundle index. Do not edit.
 */

export { LazyService, PREFIX, assert, assertArray, assertEmpty, assertNumber, assertObservable, assertString, deepCopy, deepGet, deepMerge, deepMergeKey, log, warn, warnDeprecation };
//# sourceMappingURL=other.mjs.map
