/**
 * @fileoverview added by tsickle
 * Generated from: src/mock.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MockInterceptor } from './mock.interceptor';
var DelonMockModule = /** @class */ (function () {
    function DelonMockModule() {
    }
    /**
     * @return {?}
     */
    DelonMockModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: DelonMockModule,
            providers: [{ provide: HTTP_INTERCEPTORS, useClass: MockInterceptor, multi: true }],
        };
    };
    /**
     * @return {?}
     */
    DelonMockModule.forChild = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: DelonMockModule,
            providers: [{ provide: HTTP_INTERCEPTORS, useClass: MockInterceptor, multi: true }],
        };
    };
    DelonMockModule.decorators = [
        { type: NgModule, args: [{},] }
    ];
    return DelonMockModule;
}());
export { DelonMockModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vbW9jay8iLCJzb3VyY2VzIjpbInNyYy9tb2NrLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVyRDtJQUFBO0lBZUEsQ0FBQzs7OztJQWJRLHVCQUFPOzs7SUFBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsZUFBZTtZQUN6QixTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQztTQUNwRixDQUFDO0lBQ0osQ0FBQzs7OztJQUVNLHdCQUFROzs7SUFBZjtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsZUFBZTtZQUN6QixTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQztTQUNwRixDQUFDO0lBQ0osQ0FBQzs7Z0JBZEYsUUFBUSxTQUFDLEVBQUU7O0lBZVosc0JBQUM7Q0FBQSxBQWZELElBZUM7U0FkWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSFRUUF9JTlRFUkNFUFRPUlMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTW9ja0ludGVyY2VwdG9yIH0gZnJvbSAnLi9tb2NrLmludGVyY2VwdG9yJztcblxuQE5nTW9kdWxlKHt9KVxuZXhwb3J0IGNsYXNzIERlbG9uTW9ja01vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRGVsb25Nb2NrTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUywgdXNlQ2xhc3M6IE1vY2tJbnRlcmNlcHRvciwgbXVsdGk6IHRydWUgfV0sXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBmb3JDaGlsZCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IERlbG9uTW9ja01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW3sgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsIHVzZUNsYXNzOiBNb2NrSW50ZXJjZXB0b3IsIG11bHRpOiB0cnVlIH1dLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==