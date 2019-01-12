/**
 * @license ng-alain(cipchk@qq.com) v7.0.0-rc.4
 * (c) 2018 Cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common/http'), require('date-fns/add_seconds'), require('rxjs'), require('rxjs/operators'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@delon/cache', ['exports', '@angular/common/http', 'date-fns/add_seconds', 'rxjs', 'rxjs/operators', '@angular/core'], factory) :
    (factory((global.delon = global.delon || {}, global.delon.cache = {}),global.ng.common.http,global.addSeconds,global.rxjs,global.rxjs.operators,global.ng.core));
}(this, (function (exports,i3,addSeconds,rxjs,operators,i0) { 'use strict';

    addSeconds = addSeconds && addSeconds.hasOwnProperty('default') ? addSeconds['default'] : addSeconds;

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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var DelonCacheConfig = /** @class */ (function () {
        function DelonCacheConfig() {
            /**
             * 缓存模式，默认：`promise`
             * - `promise` 约定模式，允许 `key` 作为 http 获取数据
             * - `none` 正常模式
             */
            this.mode = 'promise';
            /**
             * 重命名返回参数，例如：
             * - `null` 返回体为内容
             * - `list` 返回体应 `{ list: [] }`
             * - `result.list` 返回体应 `{ result: { list: [] } }`
             */
            this.reName = '';
            /**
             * 持久化数据键值前缀
             */
            this.prefix = '';
            /**
             * 持久化数据元数据存储键名
             */
            this.meta_key = '__cache_meta';
        }
        DelonCacheConfig.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ DelonCacheConfig.ngInjectableDef = i0.defineInjectable({ factory: function DelonCacheConfig_Factory() { return new DelonCacheConfig(); }, token: DelonCacheConfig, providedIn: "root" });
        return DelonCacheConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DC_STORE_STORAGE_TOKEN = new i0.InjectionToken('DC_STORE_STORAGE_TOKEN', {
        providedIn: 'root',
        factory: DC_STORE_STORAGE_TOKEN_FACTORY,
    });
    /**
     * @return {?}
     */
    function DC_STORE_STORAGE_TOKEN_FACTORY() {
        return new LocalStorageCacheService();
    }
    var LocalStorageCacheService = /** @class */ (function () {
        function LocalStorageCacheService() {
        }
        /**
         * @param {?} key
         * @return {?}
         */
        LocalStorageCacheService.prototype.get = /**
         * @param {?} key
         * @return {?}
         */
            function (key) {
                return JSON.parse(localStorage.getItem(key) || 'null') || null;
            };
        /**
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
        LocalStorageCacheService.prototype.set = /**
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
            function (key, value) {
                localStorage.setItem(key, JSON.stringify(value));
                return true;
            };
        /**
         * @param {?} key
         * @return {?}
         */
        LocalStorageCacheService.prototype.remove = /**
         * @param {?} key
         * @return {?}
         */
            function (key) {
                localStorage.removeItem(key);
            };
        return LocalStorageCacheService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var CacheService = /** @class */ (function () {
        function CacheService(_, store, http) {
            this.store = store;
            this.http = http;
            this.memory = new Map();
            this.notifyBuffer = new Map();
            this.meta = new Set();
            this.freqTick = 3000;
            this.cog = {};
            Object.assign(this.cog, __assign({}, new DelonCacheConfig(), _));
            this.loadMeta();
            this.startExpireNotify();
        }
        /**
         * @param {?} obj
         * @param {?} path
         * @param {?=} defaultValue
         * @return {?}
         */
        CacheService.prototype._deepGet = /**
         * @param {?} obj
         * @param {?} path
         * @param {?=} defaultValue
         * @return {?}
         */
            function (obj, path, defaultValue) {
                if (!obj)
                    return defaultValue;
                if (path.length <= 1) {
                    /** @type {?} */
                    var checkObj = path.length ? obj[path[0]] : obj;
                    return typeof checkObj === 'undefined' ? defaultValue : checkObj;
                }
                return path.reduce(function (o, k) { return o[k]; }, obj) || defaultValue;
            };
        // #region meta
        // #region meta
        /**
         * @param {?} key
         * @return {?}
         */
        CacheService.prototype.pushMeta =
            // #region meta
            /**
             * @param {?} key
             * @return {?}
             */
            function (key) {
                if (this.meta.has(key))
                    return;
                this.meta.add(key);
                this.saveMeta();
            };
        /**
         * @param {?} key
         * @return {?}
         */
        CacheService.prototype.removeMeta = /**
         * @param {?} key
         * @return {?}
         */
            function (key) {
                if (!this.meta.has(key))
                    return;
                this.meta.delete(key);
                this.saveMeta();
            };
        /**
         * @return {?}
         */
        CacheService.prototype.loadMeta = /**
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var ret = this.store.get(this.cog.meta_key);
                if (ret && ret.v) {
                    (( /** @type {?} */(ret.v))).forEach(function (key) { return _this.meta.add(key); });
                }
            };
        /**
         * @return {?}
         */
        CacheService.prototype.saveMeta = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var metaData = [];
                this.meta.forEach(function (key) { return metaData.push(key); });
                this.store.set(this.cog.meta_key, { v: metaData, e: 0 });
            };
        /**
         * @return {?}
         */
        CacheService.prototype.getMeta = /**
         * @return {?}
         */
            function () {
                return this.meta;
            };
        /**
         * 缓存对象
         */
        /**
         * 缓存对象
         * @param {?} key
         * @param {?} data
         * @param {?=} options
         * @return {?}
         */
        CacheService.prototype.set = /**
         * 缓存对象
         * @param {?} key
         * @param {?} data
         * @param {?=} options
         * @return {?}
         */
            function (key, data, options) {
                var _this = this;
                if (options === void 0) {
                    options = {};
                }
                // expire
                /** @type {?} */
                var e = 0;
                if (options.expire) {
                    e = addSeconds(new Date(), options.expire).valueOf();
                }
                if (!(data instanceof rxjs.Observable)) {
                    this.save(options.type, key, { v: data, e: e });
                    return;
                }
                return data.pipe(operators.tap(function (v) {
                    _this.save(options.type, key, { v: v, e: e });
                }));
            };
        /**
         * @param {?} type
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
        CacheService.prototype.save = /**
         * @param {?} type
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
            function (type, key, value) {
                if (type === 'm') {
                    this.memory.set(key, value);
                }
                else {
                    this.store.set(this.cog.prefix + key, value);
                    this.pushMeta(key);
                }
                this.runNotify(key, 'set');
            };
        /**
         * @param {?} key
         * @param {?=} options
         * @return {?}
         */
        CacheService.prototype.get = /**
         * @param {?} key
         * @param {?=} options
         * @return {?}
         */
            function (key, options) {
                var _this = this;
                if (options === void 0) {
                    options = {};
                }
                /** @type {?} */
                var isPromise = options.mode !== 'none' && this.cog.mode === 'promise';
                /** @type {?} */
                var value = this.memory.has(key) ? this.memory.get(key) : this.store.get(this.cog.prefix + key);
                if (!value || (value.e && value.e > 0 && value.e < new Date().valueOf())) {
                    if (isPromise) {
                        return this.http
                            .get(key)
                            .pipe(
                        // tslint:disable-next-line:no-any
                        operators.map(function (ret) { return _this._deepGet(ret, ( /** @type {?} */(_this.cog.reName)), null); }), operators.tap(function (v) { return _this.set(key, v, { type: options.type, expire: options.expire }); }));
                    }
                    return null;
                }
                return isPromise ? rxjs.of(value.v) : value.v;
            };
        /** 获取缓存数据，若 `key` 不存在或已过期则返回 null */
        /**
         * 获取缓存数据，若 `key` 不存在或已过期则返回 null
         * @param {?} key
         * @return {?}
         */
        CacheService.prototype.getNone = /**
         * 获取缓存数据，若 `key` 不存在或已过期则返回 null
         * @param {?} key
         * @return {?}
         */
            function (key) {
                return this.get(key, { mode: 'none' });
            };
        /**
         * 获取缓存，若不存在则设置缓存对象
         */
        /**
         * 获取缓存，若不存在则设置缓存对象
         * @param {?} key
         * @param {?} data
         * @param {?=} options
         * @return {?}
         */
        CacheService.prototype.tryGet = /**
         * 获取缓存，若不存在则设置缓存对象
         * @param {?} key
         * @param {?} data
         * @param {?=} options
         * @return {?}
         */
            function (key, data, options) {
                if (options === void 0) {
                    options = {};
                }
                /** @type {?} */
                var ret = this.getNone(key);
                if (ret === null) {
                    if (!(data instanceof rxjs.Observable)) {
                        this.set(key, data, ( /** @type {?} */(options)));
                        return data;
                    }
                    return this.set(key, ( /** @type {?} */(data)), ( /** @type {?} */(options)));
                }
                return rxjs.of(ret);
            };
        // #endregion
        // #region has
        /** 是否缓存 `key` */
        // #endregion
        // #region has
        /**
         * 是否缓存 `key`
         * @param {?} key
         * @return {?}
         */
        CacheService.prototype.has =
            // #endregion
            // #region has
            /**
             * 是否缓存 `key`
             * @param {?} key
             * @return {?}
             */
            function (key) {
                return this.memory.has(key) || this.meta.has(key);
            };
        // #endregion
        // #region remove
        // #endregion
        // #region remove
        /**
         * @param {?} key
         * @param {?} needNotify
         * @return {?}
         */
        CacheService.prototype._remove =
            // #endregion
            // #region remove
            /**
             * @param {?} key
             * @param {?} needNotify
             * @return {?}
             */
            function (key, needNotify) {
                if (needNotify)
                    this.runNotify(key, 'remove');
                if (this.memory.has(key)) {
                    this.memory.delete(key);
                    return;
                }
                this.store.remove(this.cog.prefix + key);
                this.removeMeta(key);
            };
        /** 移除缓存 */
        /**
         * 移除缓存
         * @param {?} key
         * @return {?}
         */
        CacheService.prototype.remove = /**
         * 移除缓存
         * @param {?} key
         * @return {?}
         */
            function (key) {
                this._remove(key, true);
            };
        /** 清空所有缓存 */
        /**
         * 清空所有缓存
         * @return {?}
         */
        CacheService.prototype.clear = /**
         * 清空所有缓存
         * @return {?}
         */
            function () {
                var _this = this;
                this.notifyBuffer.forEach(function (v, k) { return _this.runNotify(k, 'remove'); });
                this.memory.clear();
                this.meta.forEach(function (key) { return _this.store.remove(_this.cog.prefix + key); });
            };
        Object.defineProperty(CacheService.prototype, "freq", {
            // #endregion
            // #region notify
            /**
             * 设置监听频率，单位：毫秒且最低 `20ms`，默认：`3000ms`
             */
            set: 
            // #endregion
            // #region notify
            /**
             * 设置监听频率，单位：毫秒且最低 `20ms`，默认：`3000ms`
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this.freqTick = Math.max(20, value);
                this.abortExpireNotify();
                this.startExpireNotify();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        CacheService.prototype.startExpireNotify = /**
         * @return {?}
         */
            function () {
                this.checkExpireNotify();
                this.runExpireNotify();
            };
        /**
         * @return {?}
         */
        CacheService.prototype.runExpireNotify = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.freqTime = setTimeout(function () {
                    _this.checkExpireNotify();
                    _this.runExpireNotify();
                }, this.freqTick);
            };
        /**
         * @return {?}
         */
        CacheService.prototype.checkExpireNotify = /**
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var removed = [];
                this.notifyBuffer.forEach(function (v, key) {
                    if (_this.has(key) && _this.getNone(key) === null)
                        removed.push(key);
                });
                removed.forEach(function (key) {
                    _this.runNotify(key, 'expire');
                    _this._remove(key, false);
                });
            };
        /**
         * @return {?}
         */
        CacheService.prototype.abortExpireNotify = /**
         * @return {?}
         */
            function () {
                clearTimeout(this.freqTime);
            };
        /**
         * @param {?} key
         * @param {?} type
         * @return {?}
         */
        CacheService.prototype.runNotify = /**
         * @param {?} key
         * @param {?} type
         * @return {?}
         */
            function (key, type) {
                if (!this.notifyBuffer.has(key))
                    return;
                this.notifyBuffer.get(key).next({ type: type, value: this.getNone(key) });
            };
        /**
         * `key` 监听，当 `key` 变更、过期、移除时通知，注意以下若干细节：
         *
         * - 调用后除再次调用 `cancelNotify` 否则永远不过期
         * - 监听器每 `freq` (默认：3秒) 执行一次过期检查
         */
        /**
         * `key` 监听，当 `key` 变更、过期、移除时通知，注意以下若干细节：
         *
         * - 调用后除再次调用 `cancelNotify` 否则永远不过期
         * - 监听器每 `freq` (默认：3秒) 执行一次过期检查
         * @param {?} key
         * @return {?}
         */
        CacheService.prototype.notify = /**
         * `key` 监听，当 `key` 变更、过期、移除时通知，注意以下若干细节：
         *
         * - 调用后除再次调用 `cancelNotify` 否则永远不过期
         * - 监听器每 `freq` (默认：3秒) 执行一次过期检查
         * @param {?} key
         * @return {?}
         */
            function (key) {
                if (!this.notifyBuffer.has(key)) {
                    /** @type {?} */
                    var change$ = new rxjs.BehaviorSubject(this.getNone(key));
                    this.notifyBuffer.set(key, change$);
                }
                return this.notifyBuffer.get(key).asObservable();
            };
        /**
         * 取消 `key` 监听
         */
        /**
         * 取消 `key` 监听
         * @param {?} key
         * @return {?}
         */
        CacheService.prototype.cancelNotify = /**
         * 取消 `key` 监听
         * @param {?} key
         * @return {?}
         */
            function (key) {
                if (!this.notifyBuffer.has(key))
                    return;
                this.notifyBuffer.get(key).unsubscribe();
                this.notifyBuffer.delete(key);
            };
        /** `key` 是否已经监听 */
        /**
         * `key` 是否已经监听
         * @param {?} key
         * @return {?}
         */
        CacheService.prototype.hasNotify = /**
         * `key` 是否已经监听
         * @param {?} key
         * @return {?}
         */
            function (key) {
                return this.notifyBuffer.has(key);
            };
        /** 清空所有 `key` 的监听 */
        /**
         * 清空所有 `key` 的监听
         * @return {?}
         */
        CacheService.prototype.clearNotify = /**
         * 清空所有 `key` 的监听
         * @return {?}
         */
            function () {
                this.notifyBuffer.forEach(function (v) { return v.unsubscribe(); });
                this.notifyBuffer.clear();
            };
        // #endregion
        // #endregion
        /**
         * @return {?}
         */
        CacheService.prototype.ngOnDestroy =
            // #endregion
            /**
             * @return {?}
             */
            function () {
                this.memory.clear();
                this.abortExpireNotify();
                this.clearNotify();
            };
        CacheService.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */
        CacheService.ctorParameters = function () {
            return [
                { type: DelonCacheConfig },
                { type: undefined, decorators: [{ type: i0.Inject, args: [DC_STORE_STORAGE_TOKEN,] }] },
                { type: i3.HttpClient }
            ];
        };
        /** @nocollapse */ CacheService.ngInjectableDef = i0.defineInjectable({ factory: function CacheService_Factory() { return new CacheService(i0.inject(DelonCacheConfig), i0.inject(DC_STORE_STORAGE_TOKEN), i0.inject(i3.HttpClient)); }, token: CacheService, providedIn: "root" });
        return CacheService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var DelonCacheModule = /** @class */ (function () {
        function DelonCacheModule() {
        }
        DelonCacheModule.decorators = [
            { type: i0.NgModule, args: [{},] }
        ];
        return DelonCacheModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    exports.CacheService = CacheService;
    exports.DelonCacheConfig = DelonCacheConfig;
    exports.DelonCacheModule = DelonCacheModule;
    exports.ɵa = DC_STORE_STORAGE_TOKEN;
    exports.ɵb = DC_STORE_STORAGE_TOKEN_FACTORY;
    exports.ɵc = LocalStorageCacheService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=cache.umd.js.map