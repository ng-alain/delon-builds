import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * Access to global `window` object
 *
 * 访问全局 `window` 对象
 */
declare const WINDOW: InjectionToken<Window>;

/**
 * Use the `visibilitychange` event to monitor whether the browser tab is visible, which is generally used when the user leaves the browser tab to temp interrupt the backend to continue sending requests
 *
 * 通过 `visibilitychange` 事件来监听浏览器选项卡是否可见，一般用于当用户离开应用时暂时中断后端持续发送请求时
 */
declare const PAGE_VISIBILITY: InjectionToken<Observable<boolean>>;

export { PAGE_VISIBILITY, WINDOW };
