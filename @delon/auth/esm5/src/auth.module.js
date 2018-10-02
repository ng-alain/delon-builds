/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { DelonAuthConfig } from './auth.config';
import { DA_STORE_TOKEN } from './store/interface';
import { DA_SERVICE_TOKEN } from './token/interface';
import { LocalStorageStore } from './store/local-storage.service';
import { TokenService } from './token/token.service';
import { SimpleGuard } from './token/simple/simple.guard';
import { JWTGuard } from './token/jwt/jwt.guard';
import { WINDOW } from './win_tokens';
var DelonAuthModule = /** @class */ (function () {
    function DelonAuthModule() {
    }
    /**
     * @return {?}
     */
    DelonAuthModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: DelonAuthModule,
            providers: [
                { provide: WINDOW, useValue: window },
                DelonAuthConfig,
                SimpleGuard,
                JWTGuard,
                { provide: DA_STORE_TOKEN, useClass: LocalStorageStore },
                { provide: DA_SERVICE_TOKEN, useClass: TokenService },
            ],
        };
    };
    DelonAuthModule.decorators = [
        { type: NgModule, args: [{},] }
    ];
    return DelonAuthModule;
}());
export { DelonAuthModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYXV0aC8iLCJzb3VyY2VzIjpbInNyYy9hdXRoLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGNBQWMsQ0FBQzs7Ozs7OztJQUk3Qix1QkFBTzs7O0lBQWQ7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLGVBQWU7WUFDekIsU0FBUyxFQUFFO2dCQUNULEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFO2dCQUNyQyxlQUFlO2dCQUNmLFdBQVc7Z0JBQ1gsUUFBUTtnQkFDUixFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFO2dCQUN4RCxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFO2FBQ3REO1NBQ0YsQ0FBQztLQUNIOztnQkFkRixRQUFRLFNBQUMsRUFBRTs7MEJBWFo7O1NBWWEsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBEZWxvbkF1dGhDb25maWcgfSBmcm9tICcuL2F1dGguY29uZmlnJztcclxuaW1wb3J0IHsgREFfU1RPUkVfVE9LRU4gfSBmcm9tICcuL3N0b3JlL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7IERBX1NFUlZJQ0VfVE9LRU4gfSBmcm9tICcuL3Rva2VuL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7IExvY2FsU3RvcmFnZVN0b3JlIH0gZnJvbSAnLi9zdG9yZS9sb2NhbC1zdG9yYWdlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUb2tlblNlcnZpY2UgfSBmcm9tICcuL3Rva2VuL3Rva2VuLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTaW1wbGVHdWFyZCB9IGZyb20gJy4vdG9rZW4vc2ltcGxlL3NpbXBsZS5ndWFyZCc7XHJcbmltcG9ydCB7IEpXVEd1YXJkIH0gZnJvbSAnLi90b2tlbi9qd3Qvand0Lmd1YXJkJztcclxuaW1wb3J0IHsgV0lORE9XIH0gZnJvbSAnLi93aW5fdG9rZW5zJztcclxuXHJcbkBOZ01vZHVsZSh7fSlcclxuZXhwb3J0IGNsYXNzIERlbG9uQXV0aE1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogRGVsb25BdXRoTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICB7IHByb3ZpZGU6IFdJTkRPVywgdXNlVmFsdWU6IHdpbmRvdyB9LFxyXG4gICAgICAgIERlbG9uQXV0aENvbmZpZyxcclxuICAgICAgICBTaW1wbGVHdWFyZCxcclxuICAgICAgICBKV1RHdWFyZCxcclxuICAgICAgICB7IHByb3ZpZGU6IERBX1NUT1JFX1RPS0VOLCB1c2VDbGFzczogTG9jYWxTdG9yYWdlU3RvcmUgfSxcclxuICAgICAgICB7IHByb3ZpZGU6IERBX1NFUlZJQ0VfVE9LRU4sIHVzZUNsYXNzOiBUb2tlblNlcnZpY2UgfSxcclxuICAgICAgXSxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==