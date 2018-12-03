/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { DelonAuthConfig } from './auth.config';
import { DA_STORE_TOKEN } from './store/interface';
import { LocalStorageStore } from './store/local-storage.service';
import { DA_SERVICE_TOKEN } from './token/interface';
import { JWTGuard } from './token/jwt/jwt.guard';
import { SimpleGuard } from './token/simple/simple.guard';
import { TokenService } from './token/token.service';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYXV0aC8iLCJzb3VyY2VzIjpbInNyYy9hdXRoLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDckQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUV0QztJQUFBO0lBZUEsQ0FBQzs7OztJQWJRLHVCQUFPOzs7SUFBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsZUFBZTtZQUN6QixTQUFTLEVBQUU7Z0JBQ1QsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUU7Z0JBQ3JDLGVBQWU7Z0JBQ2YsV0FBVztnQkFDWCxRQUFRO2dCQUNSLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUU7Z0JBQ3hELEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUU7YUFDdEQ7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBZEYsUUFBUSxTQUFDLEVBQUU7O0lBZVosc0JBQUM7Q0FBQSxBQWZELElBZUM7U0FkWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRGVsb25BdXRoQ29uZmlnIH0gZnJvbSAnLi9hdXRoLmNvbmZpZyc7XG5pbXBvcnQgeyBEQV9TVE9SRV9UT0tFTiB9IGZyb20gJy4vc3RvcmUvaW50ZXJmYWNlJztcbmltcG9ydCB7IExvY2FsU3RvcmFnZVN0b3JlIH0gZnJvbSAnLi9zdG9yZS9sb2NhbC1zdG9yYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHsgREFfU0VSVklDRV9UT0tFTiB9IGZyb20gJy4vdG9rZW4vaW50ZXJmYWNlJztcbmltcG9ydCB7IEpXVEd1YXJkIH0gZnJvbSAnLi90b2tlbi9qd3Qvand0Lmd1YXJkJztcbmltcG9ydCB7IFNpbXBsZUd1YXJkIH0gZnJvbSAnLi90b2tlbi9zaW1wbGUvc2ltcGxlLmd1YXJkJztcbmltcG9ydCB7IFRva2VuU2VydmljZSB9IGZyb20gJy4vdG9rZW4vdG9rZW4uc2VydmljZSc7XG5pbXBvcnQgeyBXSU5ET1cgfSBmcm9tICcuL3dpbl90b2tlbnMnO1xuXG5ATmdNb2R1bGUoe30pXG5leHBvcnQgY2xhc3MgRGVsb25BdXRoTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBEZWxvbkF1dGhNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBwcm92aWRlOiBXSU5ET1csIHVzZVZhbHVlOiB3aW5kb3cgfSxcbiAgICAgICAgRGVsb25BdXRoQ29uZmlnLFxuICAgICAgICBTaW1wbGVHdWFyZCxcbiAgICAgICAgSldUR3VhcmQsXG4gICAgICAgIHsgcHJvdmlkZTogREFfU1RPUkVfVE9LRU4sIHVzZUNsYXNzOiBMb2NhbFN0b3JhZ2VTdG9yZSB9LFxuICAgICAgICB7IHByb3ZpZGU6IERBX1NFUlZJQ0VfVE9LRU4sIHVzZUNsYXNzOiBUb2tlblNlcnZpY2UgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19