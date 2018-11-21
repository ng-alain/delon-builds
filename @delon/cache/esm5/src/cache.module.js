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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NhY2hlLyIsInNvdXJjZXMiOlsic3JjL2NhY2hlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7Ozs7OztJQUloRSx3QkFBTzs7O0lBQWQ7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixTQUFTLEVBQUU7Z0JBQ1QsZ0JBQWdCO2dCQUNoQixZQUFZO2dCQUNaLEVBQUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLFFBQVEsRUFBRSx3QkFBd0IsRUFBRTthQUN4RTtTQUNGLENBQUM7S0FDSDs7Z0JBWEYsUUFBUSxTQUFDLEVBQUU7OzJCQVBaOztTQVFhLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERDX1NUT1JFX1NUT1JBR0VfVE9LRU4gfSBmcm9tICcuL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBEZWxvbkNhY2hlQ29uZmlnIH0gZnJvbSAnLi9jYWNoZS5jb25maWcnO1xuaW1wb3J0IHsgQ2FjaGVTZXJ2aWNlIH0gZnJvbSAnLi9jYWNoZS5zZXJ2aWNlJztcbmltcG9ydCB7IExvY2FsU3RvcmFnZUNhY2hlU2VydmljZSB9IGZyb20gJy4vbG9jYWwtc3RvcmFnZS1jYWNoZS5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHt9KVxuZXhwb3J0IGNsYXNzIERlbG9uQ2FjaGVNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IERlbG9uQ2FjaGVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgRGVsb25DYWNoZUNvbmZpZyxcbiAgICAgICAgQ2FjaGVTZXJ2aWNlLFxuICAgICAgICB7IHByb3ZpZGU6IERDX1NUT1JFX1NUT1JBR0VfVE9LRU4sIHVzZUNsYXNzOiBMb2NhbFN0b3JhZ2VDYWNoZVNlcnZpY2UgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19