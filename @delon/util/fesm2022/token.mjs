import { DOCUMENT } from '@angular/common';
import { InjectionToken, inject } from '@angular/core';
import { fromEvent, startWith, map, distinctUntilChanged, share } from 'rxjs';

/**
 * Access to global `window` object
 *
 * 访问全局 `window` 对象
 */
const WINDOW = new InjectionToken('WINDOW', {
    factory: () => {
        const { defaultView } = inject(DOCUMENT);
        if (!defaultView) {
            throw new Error('Window is not available');
        }
        return defaultView;
    }
});

/**
 * Use the `visibilitychange` event to monitor whether the browser tab is visible, which is generally used when the user leaves the browser tab to temp interrupt the backend to continue sending requests
 *
 * 通过 `visibilitychange` 事件来监听浏览器选项卡是否可见，一般用于当用户离开应用时暂时中断后端持续发送请求时
 */
const PAGE_VISIBILITY = new InjectionToken('PAGE_VISIBILITY`', {
    factory: () => {
        const doc = inject(DOCUMENT);
        return fromEvent(doc, 'visibilitychange').pipe(startWith(0), map(() => !doc.hidden), distinctUntilChanged(), share());
    }
});

/**
 * Generated bundle index. Do not edit.
 */

export { PAGE_VISIBILITY, WINDOW };
//# sourceMappingURL=token.mjs.map
