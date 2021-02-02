import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { Injectable, Inject, ɵɵdefineInjectable, ɵɵinject } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: cookie.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function CookieOptions() { }
if (false) {
    /** @type {?|undefined} */
    CookieOptions.prototype.path;
    /** @type {?|undefined} */
    CookieOptions.prototype.domain;
    /**
     * Expiration time, `number` is seconds
     *
     * 过期时间，`number` 类型表示秒数
     * @type {?|undefined}
     */
    CookieOptions.prototype.expires;
    /** @type {?|undefined} */
    CookieOptions.prototype.secure;
    /** @type {?|undefined} */
    CookieOptions.prototype.HttpOnly;
    /** @type {?|undefined} */
    CookieOptions.prototype.SameSite;
}
/**
 * A set of simple Cookie manipulation classes.
 *
 * 一组简单的 Cookie 操作类。
 */
class CookieService {
    /**
     * @param {?} _doc
     * @param {?} platform
     */
    constructor(_doc, platform) {
        this._doc = _doc;
        this.platform = platform;
    }
    /**
     * @private
     * @return {?}
     */
    get doc() {
        return this._doc || document;
    }
    /**
     * Original cookie value
     *
     * 原始Cookie值
     * @return {?}
     */
    get cookie() {
        return this.platform.isBrowser ? this.doc.cookie : '';
    }
    /**
     * Get all cookie key-value pairs
     *
     * 获取所有Cookie键值对
     * @return {?}
     */
    getAll() {
        /** @type {?} */
        const ret = {};
        /** @type {?} */
        const arr = this.cookie.split('; ');
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < arr.length; i++) {
            /** @type {?} */
            const cookie = arr[i];
            /** @type {?} */
            const index = cookie.indexOf('=');
            if (index > 0) {
                /** @type {?} */
                const name = decodeURIComponent(cookie.substring(0, index));
                if (ret[name] == null) {
                    ret[name] = decodeURIComponent(cookie.substring(index + 1));
                }
            }
        }
        return ret;
    }
    /**
     * Get the value of given cookie `key`
     *
     * 获取指定 `key` 的值
     * @param {?} key
     * @return {?}
     */
    get(key) {
        return this.getAll()[key];
    }
    /**
     * Sets a value for given cookie key
     *
     * 设置指定 Cookie 键的值
     * @param {?} key
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    put(key, value, options) {
        if (!this.platform.isBrowser) {
            return;
        }
        /** @type {?} */
        const opt = Object.assign({ path: '/' }, options);
        if (typeof opt.expires === 'number') {
            opt.expires = new Date(+new Date() + opt.expires * 1e3);
        }
        if (typeof opt.expires !== 'string') {
            opt.expires = opt.expires ? opt.expires.toUTCString() : '';
        }
        /** @type {?} */
        const optStr = (/** @type {?} */ (opt));
        /** @type {?} */
        const attributes = Object.keys(optStr)
            .filter((/**
         * @param {?} k
         * @return {?}
         */
        k => optStr[k] && optStr[k] !== true))
            .map((/**
         * @param {?} k
         * @return {?}
         */
        k => `${k}=${((/** @type {?} */ (optStr[k]))).split(';')[0]}`))
            .join(';');
        this.doc.cookie = encodeURIComponent(String(key)) + '=' + encodeURIComponent(String(value)) + (attributes ? '; ' + attributes : '');
    }
    /**
     * Remove given cookie
     *
     * 移除指定 Cookie
     * @param {?} key
     * @param {?=} options
     * @return {?}
     */
    remove(key, options) {
        this.put(key, undefined, options);
    }
    /**
     * Remove all cookies
     *
     * 移除所有 Cookies
     * @return {?}
     */
    removeAll() {
        this.doc.cookie = '';
    }
}
CookieService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
CookieService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Platform }
];
/** @nocollapse */ CookieService.ɵprov = ɵɵdefineInjectable({ factory: function CookieService_Factory() { return new CookieService(ɵɵinject(DOCUMENT), ɵɵinject(Platform)); }, token: CookieService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    CookieService.prototype._doc;
    /**
     * @type {?}
     * @private
     */
    CookieService.prototype.platform;
}

/**
 * @fileoverview added by tsickle
 * Generated from: copy.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Copy text to clipboard
 *
 * 复制字符串文档至剪贴板
 * @param {?} value
 * @return {?}
 */
function copy(value) {
    return new Promise((/**
     * @param {?} resolve
     * @return {?}
     */
    (resolve) => {
        /** @type {?} */
        let copyTextArea = null;
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
    }));
}

/**
 * @fileoverview added by tsickle
 * Generated from: is-empty.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Used to verify `<ng-content></ng-content>` is empty, useful for custom components.
 *
 * 用于校验 `<ng-content></ng-content>` 是否为空，自定义组件时蛮有用。
 * @param {?} element
 * @return {?}
 */
function isEmpty(element) {
    /** @type {?} */
    const nodes = element.childNodes;
    for (let i = 0; i < nodes.length; i++) {
        /** @type {?} */
        const node = nodes.item(i);
        if (node.nodeType === 1 && ((/** @type {?} */ (node))).outerHTML.toString().trim().length !== 0) {
            return false;
        }
        else if (node.nodeType === 3 && (/** @type {?} */ (node.textContent)).toString().trim().length !== 0) {
            return false;
        }
    }
    return true;
}

/**
 * @fileoverview added by tsickle
 * Generated from: scroll.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ScrollService {
    /**
     * @param {?} _doc
     * @param {?} platform
     */
    constructor(_doc, platform) {
        this._doc = _doc;
        this.platform = platform;
    }
    /**
     * @private
     * @return {?}
     */
    _getDoc() {
        return this._doc || document;
    }
    /**
     * @private
     * @return {?}
     */
    _getWin() {
        /** @type {?} */
        const doc = this._getDoc();
        return doc.defaultView || window;
    }
    /**
     * 获取滚动条位置
     * @param {?=} element 指定元素，默认 `window`
     * @return {?}
     */
    getScrollPosition(element) {
        if (!this.platform.isBrowser) {
            return [0, 0];
        }
        /** @type {?} */
        const win = this._getWin();
        if (element && element !== win) {
            return [((/** @type {?} */ (element))).scrollLeft, ((/** @type {?} */ (element))).scrollTop];
        }
        else {
            return [win.pageXOffset, win.pageYOffset];
        }
    }
    /**
     * 设置滚动条位置
     * @param {?} element 指定元素
     * @param {?} position
     * @return {?}
     */
    scrollToPosition(element, position) {
        if (!this.platform.isBrowser) {
            return;
        }
        (element || this._getWin()).scrollTo(position[0], position[1]);
    }
    /**
     * 设置滚动条至指定元素
     * @param {?=} element 指定元素，默认 `document.body`
     * @param {?=} topOffset 偏移值，默认 `0`
     * @return {?}
     */
    scrollToElement(element, topOffset = 0) {
        if (!this.platform.isBrowser) {
            return;
        }
        if (!element) {
            element = this._getDoc().body;
        }
        element.scrollIntoView();
        /** @type {?} */
        const win = this._getWin();
        if (win && win.scrollBy) {
            win.scrollBy(0, (/** @type {?} */ (element)).getBoundingClientRect().top - topOffset);
            if (win.pageYOffset < 20) {
                win.scrollBy(0, -win.pageYOffset);
            }
        }
    }
    /**
     * 滚动至顶部
     * @param {?=} topOffset 偏移值，默认 `0`
     * @return {?}
     */
    scrollToTop(topOffset = 0) {
        if (!this.platform.isBrowser) {
            return;
        }
        this.scrollToElement(this._getDoc().body, topOffset);
    }
}
ScrollService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ScrollService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Platform }
];
/** @nocollapse */ ScrollService.ɵprov = ɵɵdefineInjectable({ factory: function ScrollService_Factory() { return new ScrollService(ɵɵinject(DOCUMENT), ɵɵinject(Platform)); }, token: ScrollService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ScrollService.prototype._doc;
    /**
     * @type {?}
     * @private
     */
    ScrollService.prototype.platform;
}

/**
 * @fileoverview added by tsickle
 * Generated from: style.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} el
 * @param {?} classMap
 * @param {?} renderer
 * @return {?}
 */
function removeClass(el, classMap, renderer) {
    // tslint:disable-next-line: forin
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
 * @param {?} el
 * @param {?} renderer
 * @param {?} classMap
 * @param {?=} preClean
 * @return {?}
 */
function updateHostClass(el, renderer, classMap, preClean = false) {
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
 * @fileoverview added by tsickle
 * Generated from: index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: browser.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CookieService, ScrollService, copy, isEmpty, updateHostClass };
//# sourceMappingURL=browser.js.map
