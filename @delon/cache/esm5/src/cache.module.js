/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { DC_STORE_STORAGE_TOKEN } from './interface';
import { DelonCacheConfig } from './cache.config';
import { CacheService } from './cache.service';
import { LocalStorageCacheService } from './local-storage-cache.service';
var DelonCacheModule = /** @class */ (function () {
    function DelonCacheModule() {
    }
    /**
     * @return {?}
     */
    DelonCacheModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: DelonCacheModule,
            providers: [
                DelonCacheConfig,
                CacheService,
                { provide: DC_STORE_STORAGE_TOKEN, useClass: LocalStorageCacheService },
            ],
        };
    };
    DelonCacheModule.decorators = [
        { type: NgModule, args: [{},] }
    ];
    return DelonCacheModule;
}());
export { DelonCacheModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NhY2hlLyIsInNvdXJjZXMiOlsic3JjL2NhY2hlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7Ozs7OztJQUloRSx3QkFBTzs7O0lBQWQ7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixTQUFTLEVBQUU7Z0JBQ1QsZ0JBQWdCO2dCQUNoQixZQUFZO2dCQUNaLEVBQUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLFFBQVEsRUFBRSx3QkFBd0IsRUFBRTthQUN4RTtTQUNGLENBQUM7S0FDSDs7Z0JBWEYsUUFBUSxTQUFDLEVBQUU7OzJCQVBaOztTQVFhLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBEQ19TVE9SRV9TVE9SQUdFX1RPS0VOIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBEZWxvbkNhY2hlQ29uZmlnIH0gZnJvbSAnLi9jYWNoZS5jb25maWcnO1xyXG5pbXBvcnQgeyBDYWNoZVNlcnZpY2UgfSBmcm9tICcuL2NhY2hlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2VDYWNoZVNlcnZpY2UgfSBmcm9tICcuL2xvY2FsLXN0b3JhZ2UtY2FjaGUuc2VydmljZSc7XHJcblxyXG5ATmdNb2R1bGUoe30pXHJcbmV4cG9ydCBjbGFzcyBEZWxvbkNhY2hlTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBEZWxvbkNhY2hlTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBEZWxvbkNhY2hlQ29uZmlnLFxyXG4gICAgICAgIENhY2hlU2VydmljZSxcclxuICAgICAgICB7IHByb3ZpZGU6IERDX1NUT1JFX1NUT1JBR0VfVE9LRU4sIHVzZUNsYXNzOiBMb2NhbFN0b3JhZ2VDYWNoZVNlcnZpY2UgfSxcclxuICAgICAgXSxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==