import { PreloadingStrategy, Route } from '@angular/router';
import { Observable } from 'rxjs';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
/**
 * 可选预加载模块，当需要对某些懒路由在第一次页面加载时也一并加载该资源时，可以在路由中配置：
 *
 * @example
 */
export declare class PreloadOptionalModules implements PreloadingStrategy {
    preload(route: Route, fn: () => Observable<NzSafeAny>): Observable<NzSafeAny>;
}
