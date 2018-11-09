/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DelonMockConfig } from './mock.config';
import { MockService } from './mock.service';
import { MockInterceptor } from './mock.interceptor';
export class DelonMockModule {
    /**
     * @param {?} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: DelonMockModule,
            providers: [
                MockService,
                { provide: DelonMockConfig, useValue: config },
                { provide: HTTP_INTERCEPTORS, useClass: MockInterceptor, multi: true },
            ],
        };
    }
    /**
     * @return {?}
     */
    static forChild() {
        return {
            ngModule: DelonMockModule,
            providers: [
                { provide: HTTP_INTERCEPTORS, useClass: MockInterceptor, multi: true },
            ],
        };
    }
}
DelonMockModule.decorators = [
    { type: NgModule, args: [{},] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vbW9jay8iLCJzb3VyY2VzIjpbInNyYy9tb2NrLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFekQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3JELE1BQU0sT0FBTyxlQUFlOzs7OztJQUMxQixNQUFNLENBQUMsT0FBTyxDQUFDLE1BQXVCO1FBQ3BDLE9BQU87WUFDTCxRQUFRLEVBQUUsZUFBZTtZQUN6QixTQUFTLEVBQUU7Z0JBQ1QsV0FBVztnQkFDWCxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRTtnQkFDOUMsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO2FBQ3ZFO1NBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxNQUFNLENBQUMsUUFBUTtRQUNiLE9BQU87WUFDTCxRQUFRLEVBQUUsZUFBZTtZQUN6QixTQUFTLEVBQUU7Z0JBQ1QsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO2FBQ3ZFO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQXBCRixRQUFRLFNBQUMsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIVFRQX0lOVEVSQ0VQVE9SUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgRGVsb25Nb2NrQ29uZmlnIH0gZnJvbSAnLi9tb2NrLmNvbmZpZyc7XG5pbXBvcnQgeyBNb2NrU2VydmljZSB9IGZyb20gJy4vbW9jay5zZXJ2aWNlJztcbmltcG9ydCB7IE1vY2tJbnRlcmNlcHRvciB9IGZyb20gJy4vbW9jay5pbnRlcmNlcHRvcic7XG5cbkBOZ01vZHVsZSh7fSlcbmV4cG9ydCBjbGFzcyBEZWxvbk1vY2tNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChjb25maWc6IERlbG9uTW9ja0NvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRGVsb25Nb2NrTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIE1vY2tTZXJ2aWNlLFxuICAgICAgICB7IHByb3ZpZGU6IERlbG9uTW9ja0NvbmZpZywgdXNlVmFsdWU6IGNvbmZpZyB9LFxuICAgICAgICB7IHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLCB1c2VDbGFzczogTW9ja0ludGVyY2VwdG9yLCBtdWx0aTogdHJ1ZSB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGZvckNoaWxkKCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRGVsb25Nb2NrTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsIHVzZUNsYXNzOiBNb2NrSW50ZXJjZXB0b3IsIG11bHRpOiB0cnVlIH0sXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==