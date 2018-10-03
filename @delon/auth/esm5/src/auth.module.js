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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYXV0aC8iLCJzb3VyY2VzIjpbInNyYy9hdXRoLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGNBQWMsQ0FBQzs7Ozs7OztJQUk3Qix1QkFBTzs7O0lBQWQ7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLGVBQWU7WUFDekIsU0FBUyxFQUFFO2dCQUNULEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFO2dCQUNyQyxlQUFlO2dCQUNmLFdBQVc7Z0JBQ1gsUUFBUTtnQkFDUixFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFO2dCQUN4RCxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFO2FBQ3REO1NBQ0YsQ0FBQztLQUNIOztnQkFkRixRQUFRLFNBQUMsRUFBRTs7MEJBWFo7O1NBWWEsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERlbG9uQXV0aENvbmZpZyB9IGZyb20gJy4vYXV0aC5jb25maWcnO1xuaW1wb3J0IHsgREFfU1RPUkVfVE9LRU4gfSBmcm9tICcuL3N0b3JlL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBEQV9TRVJWSUNFX1RPS0VOIH0gZnJvbSAnLi90b2tlbi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgTG9jYWxTdG9yYWdlU3RvcmUgfSBmcm9tICcuL3N0b3JlL2xvY2FsLXN0b3JhZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBUb2tlblNlcnZpY2UgfSBmcm9tICcuL3Rva2VuL3Rva2VuLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2ltcGxlR3VhcmQgfSBmcm9tICcuL3Rva2VuL3NpbXBsZS9zaW1wbGUuZ3VhcmQnO1xuaW1wb3J0IHsgSldUR3VhcmQgfSBmcm9tICcuL3Rva2VuL2p3dC9qd3QuZ3VhcmQnO1xuaW1wb3J0IHsgV0lORE9XIH0gZnJvbSAnLi93aW5fdG9rZW5zJztcblxuQE5nTW9kdWxlKHt9KVxuZXhwb3J0IGNsYXNzIERlbG9uQXV0aE1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRGVsb25BdXRoTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgcHJvdmlkZTogV0lORE9XLCB1c2VWYWx1ZTogd2luZG93IH0sXG4gICAgICAgIERlbG9uQXV0aENvbmZpZyxcbiAgICAgICAgU2ltcGxlR3VhcmQsXG4gICAgICAgIEpXVEd1YXJkLFxuICAgICAgICB7IHByb3ZpZGU6IERBX1NUT1JFX1RPS0VOLCB1c2VDbGFzczogTG9jYWxTdG9yYWdlU3RvcmUgfSxcbiAgICAgICAgeyBwcm92aWRlOiBEQV9TRVJWSUNFX1RPS0VOLCB1c2VDbGFzczogVG9rZW5TZXJ2aWNlIH0sXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==