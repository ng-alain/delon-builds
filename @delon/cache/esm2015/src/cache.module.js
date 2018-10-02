/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { DC_STORE_STORAGE_TOKEN } from './interface';
import { DelonCacheConfig } from './cache.config';
import { CacheService } from './cache.service';
import { LocalStorageCacheService } from './local-storage-cache.service';
export class DelonCacheModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: DelonCacheModule,
            providers: [
                DelonCacheConfig,
                CacheService,
                { provide: DC_STORE_STORAGE_TOKEN, useClass: LocalStorageCacheService },
            ],
        };
    }
}
DelonCacheModule.decorators = [
    { type: NgModule, args: [{},] }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NhY2hlLyIsInNvdXJjZXMiOlsic3JjL2NhY2hlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUd6RSxNQUFNOzs7O0lBQ0osTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixTQUFTLEVBQUU7Z0JBQ1QsZ0JBQWdCO2dCQUNoQixZQUFZO2dCQUNaLEVBQUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLFFBQVEsRUFBRSx3QkFBd0IsRUFBRTthQUN4RTtTQUNGLENBQUM7S0FDSDs7O1lBWEYsUUFBUSxTQUFDLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgRENfU1RPUkVfU1RPUkFHRV9UT0tFTiB9IGZyb20gJy4vaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgRGVsb25DYWNoZUNvbmZpZyB9IGZyb20gJy4vY2FjaGUuY29uZmlnJztcclxuaW1wb3J0IHsgQ2FjaGVTZXJ2aWNlIH0gZnJvbSAnLi9jYWNoZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG9jYWxTdG9yYWdlQ2FjaGVTZXJ2aWNlIH0gZnJvbSAnLi9sb2NhbC1zdG9yYWdlLWNhY2hlLnNlcnZpY2UnO1xyXG5cclxuQE5nTW9kdWxlKHt9KVxyXG5leHBvcnQgY2xhc3MgRGVsb25DYWNoZU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogRGVsb25DYWNoZU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgRGVsb25DYWNoZUNvbmZpZyxcclxuICAgICAgICBDYWNoZVNlcnZpY2UsXHJcbiAgICAgICAgeyBwcm92aWRlOiBEQ19TVE9SRV9TVE9SQUdFX1RPS0VOLCB1c2VDbGFzczogTG9jYWxTdG9yYWdlQ2FjaGVTZXJ2aWNlIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=