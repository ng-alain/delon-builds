import { DOCUMENT } from '@angular/common';
import { InjectionToken, inject } from '@angular/core';
import { fromEvent } from 'rxjs';
import { startWith, map, distinctUntilChanged, share } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * Generated from: window.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Access to global `window` object
 *
 * 访问全局 `window` 对象
 * @type {?}
 */
const WINDOW = new InjectionToken('WINDOW', {
    factory: (/**
     * @return {?}
     */
    () => {
        const { defaultView } = inject(DOCUMENT);
        if (!defaultView) {
            throw new Error('Window is not available');
        }
        return defaultView;
    }),
});

/**
 * @fileoverview added by tsickle
 * Generated from: page-visibility.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use the `visibilitychange` event to monitor whether the browser tab is visible, which is generally used when the user leaves the browser tab to temp interrupt the backend to continue sending requests
 *
 * 通过 `visibilitychange` 事件来监听浏览器选项卡是否可见，一般用于当用户离开应用时暂时中断后端持续发送请求时
 * @type {?}
 */
const PAGE_VISIBILITY = new InjectionToken('PAGE_VISIBILITY`', {
    factory: (/**
     * @return {?}
     */
    () => {
        /** @type {?} */
        const doc = inject(DOCUMENT);
        return fromEvent(doc, 'visibilitychange').pipe(startWith(0), map((/**
         * @return {?}
         */
        () => !doc.hidden)), distinctUntilChanged(), share());
    }),
});

/**
 * @fileoverview added by tsickle
 * Generated from: index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: delon-util-token.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { PAGE_VISIBILITY, WINDOW };
//# sourceMappingURL=delon-util-token.js.map
