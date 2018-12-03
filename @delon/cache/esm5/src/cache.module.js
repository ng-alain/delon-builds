/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { DelonCacheConfig } from './cache.config';
import { CacheService } from './cache.service';
import { DC_STORE_STORAGE_TOKEN } from './interface';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NhY2hlLyIsInNvdXJjZXMiOlsic3JjL2NhY2hlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNyRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUV6RTtJQUFBO0lBWUEsQ0FBQzs7OztJQVZRLHdCQUFPOzs7SUFBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFNBQVMsRUFBRTtnQkFDVCxnQkFBZ0I7Z0JBQ2hCLFlBQVk7Z0JBQ1osRUFBRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsUUFBUSxFQUFFLHdCQUF3QixFQUFFO2FBQ3hFO1NBQ0YsQ0FBQztJQUNKLENBQUM7O2dCQVhGLFFBQVEsU0FBQyxFQUFFOztJQVlaLHVCQUFDO0NBQUEsQUFaRCxJQVlDO1NBWFksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRGVsb25DYWNoZUNvbmZpZyB9IGZyb20gJy4vY2FjaGUuY29uZmlnJztcbmltcG9ydCB7IENhY2hlU2VydmljZSB9IGZyb20gJy4vY2FjaGUuc2VydmljZSc7XG5pbXBvcnQgeyBEQ19TVE9SRV9TVE9SQUdFX1RPS0VOIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgTG9jYWxTdG9yYWdlQ2FjaGVTZXJ2aWNlIH0gZnJvbSAnLi9sb2NhbC1zdG9yYWdlLWNhY2hlLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe30pXG5leHBvcnQgY2xhc3MgRGVsb25DYWNoZU1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRGVsb25DYWNoZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBEZWxvbkNhY2hlQ29uZmlnLFxuICAgICAgICBDYWNoZVNlcnZpY2UsXG4gICAgICAgIHsgcHJvdmlkZTogRENfU1RPUkVfU1RPUkFHRV9UT0tFTiwgdXNlQ2xhc3M6IExvY2FsU3RvcmFnZUNhY2hlU2VydmljZSB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=