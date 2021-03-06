/**
 * @license ng-alain(cipchk@qq.com) v11.7.1
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/platform'), require('@angular/common'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@delon/util/browser', ['exports', '@angular/cdk/platform', '@angular/common', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.util = global.delon.util || {}, global.delon.util.browser = {}), global.ng.cdk.platform, global.ng.common, global.ng.core));
}(this, (function (exports, i2, i1, i0) { 'use strict';

    /**
     * A set of simple Cookie manipulation classes.
     *
     * 一组简单的 Cookie 操作类。
     */
    var CookieService = /** @class */ (function () {
        function CookieService(_doc, platform) {
            this._doc = _doc;
            this.platform = platform;
        }
        Object.defineProperty(CookieService.prototype, "doc", {
            get: function () {
                return this._doc || document;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CookieService.prototype, "cookie", {
            /**
             * Original cookie value
             *
             * 原始Cookie值
             */
            get: function () {
                return this.platform.isBrowser ? this.doc.cookie : '';
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Get all cookie key-value pairs
         *
         * 获取所有Cookie键值对
         */
        CookieService.prototype.getAll = function () {
            var ret = {};
            var arr = this.cookie.split('; ');
            // tslint:disable-next-line: prefer-for-of
            for (var i = 0; i < arr.length; i++) {
                var cookie = arr[i];
                var index = cookie.indexOf('=');
                if (index > 0) {
                    var name = decodeURIComponent(cookie.substring(0, index));
                    if (ret[name] == null) {
                        ret[name] = decodeURIComponent(cookie.substring(index + 1));
                    }
                }
            }
            return ret;
        };
        /**
         * Get the value of given cookie `key`
         *
         * 获取指定 `key` 的值
         */
        CookieService.prototype.get = function (key) {
            return this.getAll()[key];
        };
        /**
         * Sets a value for given cookie key
         *
         * 设置指定 Cookie 键的值
         */
        CookieService.prototype.put = function (key, value, options) {
            if (!this.platform.isBrowser) {
                return;
            }
            var opt = Object.assign({ path: '/' }, options);
            if (typeof opt.expires === 'number') {
                opt.expires = new Date(+new Date() + opt.expires * 1e3);
            }
            if (typeof opt.expires !== 'string') {
                opt.expires = opt.expires ? opt.expires.toUTCString() : '';
            }
            var optStr = opt;
            var attributes = Object.keys(optStr)
                .filter(function (k) { return optStr[k] && optStr[k] !== true; })
                .map(function (k) { return k + "=" + optStr[k].split(';')[0]; })
                .join(';');
            this.doc.cookie = encodeURIComponent(String(key)) + '=' + encodeURIComponent(String(value)) + (attributes ? '; ' + attributes : '');
        };
        /**
         * Remove given cookie
         *
         * 移除指定 Cookie
         */
        CookieService.prototype.remove = function (key, options) {
            this.put(key, undefined, options);
        };
        /**
         * Remove all cookies
         *
         * 移除所有 Cookies
         */
        CookieService.prototype.removeAll = function () {
            this.doc.cookie = '';
        };
        return CookieService;
    }());
    /** @nocollapse */ CookieService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CookieService_Factory() { return new CookieService(i0.ɵɵinject(i1.DOCUMENT), i0.ɵɵinject(i2.Platform)); }, token: CookieService, providedIn: "root" });
    CookieService.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    CookieService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: i0.Inject, args: [i1.DOCUMENT,] }] },
        { type: i2.Platform }
    ]; };

    /**
     * Copy text to clipboard
     *
     * 复制字符串文档至剪贴板
     */
    function copy(value) {
        return new Promise(function (resolve) {
            var copyTextArea = null;
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
     * Used to verify `<ng-content></ng-content>` is empty, useful for custom components.
     *
     * 用于校验 `<ng-content></ng-content>` 是否为空，自定义组件时蛮有用。
     */
    function isEmpty(element) {
        var nodes = element.childNodes;
        for (var i = 0; i < nodes.length; i++) {
            var node = nodes.item(i);
            if (node.nodeType === 1 && node.outerHTML.toString().trim().length !== 0) {
                return false;
            }
            else if (node.nodeType === 3 && node.textContent.toString().trim().length !== 0) {
                return false;
            }
        }
        return true;
    }

    var ScrollService = /** @class */ (function () {
        function ScrollService(_doc, platform) {
            this._doc = _doc;
            this.platform = platform;
        }
        ScrollService.prototype._getDoc = function () {
            return this._doc || document;
        };
        ScrollService.prototype._getWin = function () {
            var doc = this._getDoc();
            return doc.defaultView || window;
        };
        /**
         * 获取滚动条位置
         * @param element 指定元素，默认 `window`
         */
        ScrollService.prototype.getScrollPosition = function (element) {
            if (!this.platform.isBrowser) {
                return [0, 0];
            }
            var win = this._getWin();
            if (element && element !== win) {
                return [element.scrollLeft, element.scrollTop];
            }
            else {
                return [win.pageXOffset, win.pageYOffset];
            }
        };
        /**
         * 设置滚动条位置
         * @param element 指定元素
         */
        ScrollService.prototype.scrollToPosition = function (element, position) {
            if (!this.platform.isBrowser) {
                return;
            }
            (element || this._getWin()).scrollTo(position[0], position[1]);
        };
        /**
         * 设置滚动条至指定元素
         * @param element 指定元素，默认 `document.body`
         * @param topOffset 偏移值，默认 `0`
         */
        ScrollService.prototype.scrollToElement = function (element, topOffset) {
            if (topOffset === void 0) { topOffset = 0; }
            if (!this.platform.isBrowser) {
                return;
            }
            if (!element) {
                element = this._getDoc().body;
            }
            element.scrollIntoView();
            var win = this._getWin();
            if (win && win.scrollBy) {
                win.scrollBy(0, element.getBoundingClientRect().top - topOffset);
                if (win.pageYOffset < 20) {
                    win.scrollBy(0, -win.pageYOffset);
                }
            }
        };
        /**
         * 滚动至顶部
         * @param topOffset 偏移值，默认 `0`
         */
        ScrollService.prototype.scrollToTop = function (topOffset) {
            if (topOffset === void 0) { topOffset = 0; }
            if (!this.platform.isBrowser) {
                return;
            }
            this.scrollToElement(this._getDoc().body, topOffset);
        };
        return ScrollService;
    }());
    /** @nocollapse */ ScrollService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ScrollService_Factory() { return new ScrollService(i0.ɵɵinject(i1.DOCUMENT), i0.ɵɵinject(i2.Platform)); }, token: ScrollService, providedIn: "root" });
    ScrollService.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ScrollService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: i0.Inject, args: [i1.DOCUMENT,] }] },
        { type: i2.Platform }
    ]; };

    function removeClass(el, classMap, renderer) {
        // tslint:disable-next-line: forin
        for (var i in classMap) {
            renderer.removeClass(el, i);
        }
    }
    function addClass(el, classMap, renderer) {
        for (var i in classMap) {
            if (classMap[i]) {
                renderer.addClass(el, i);
            }
        }
    }
    /**
     * Update host component style `class`
     *
     * 更新宿主组件样式 `class`
     *
     * ```ts
     * updateHostClass(
     *  this.el.nativeElement,
     *  this.renderer,
     *  {
     *    [ 'classname' ]: true,
     *    [ 'classname' ]: this.type === '1',
     *    [ this.cls ]: true,
     *    [ `a-${this.cls}` ]: true
     *  })
     * ```
     */
    function updateHostClass(el, renderer, classMap, preClean) {
        if (preClean === void 0) { preClean = false; }
        if (preClean === true) {
            renderer.removeAttribute(el, 'class');
        }
        else {
            removeClass(el, classMap, renderer);
        }
        classMap = Object.assign({}, classMap);
        addClass(el, classMap, renderer);
    }

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CookieService = CookieService;
    exports.ScrollService = ScrollService;
    exports.copy = copy;
    exports.isEmpty = isEmpty;
    exports.updateHostClass = updateHostClass;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=browser.umd.js.map
