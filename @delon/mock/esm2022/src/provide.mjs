import { ɵHTTP_ROOT_INTERCEPTOR_FNS } from '@angular/common/http';
import { InjectionToken, makeEnvironmentProviders } from '@angular/core';
import { mockInterceptor } from './mock.interceptor';
import { MockService } from './mock.service';
export const DELON_MOCK_CONFIG = new InjectionToken('alain-mock-config');
export function provideMockConfig(config) {
    return makeEnvironmentProviders([
        { provide: DELON_MOCK_CONFIG, useValue: config },
        {
            provide: ɵHTTP_ROOT_INTERCEPTOR_FNS,
            useValue: mockInterceptor,
            multi: true,
            deps: [MockService]
        }
    ]);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlkZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL21vY2svc3JjL3Byb3ZpZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEUsT0FBTyxFQUF3QixjQUFjLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHL0YsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLGNBQWMsQ0FBYyxtQkFBbUIsQ0FBQyxDQUFDO0FBRXRGLE1BQU0sVUFBVSxpQkFBaUIsQ0FBQyxNQUFvQjtJQUNwRCxPQUFPLHdCQUF3QixDQUFDO1FBQzlCLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUU7UUFDaEQ7WUFDRSxPQUFPLEVBQUUsMEJBQTBCO1lBQ25DLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLEtBQUssRUFBRSxJQUFJO1lBQ1gsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDO1NBQ3BCO0tBQ0YsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IMm1SFRUUF9ST09UX0lOVEVSQ0VQVE9SX0ZOUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEVudmlyb25tZW50UHJvdmlkZXJzLCBJbmplY3Rpb25Ub2tlbiwgbWFrZUVudmlyb25tZW50UHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE1vY2tPcHRpb25zIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgbW9ja0ludGVyY2VwdG9yIH0gZnJvbSAnLi9tb2NrLmludGVyY2VwdG9yJztcbmltcG9ydCB7IE1vY2tTZXJ2aWNlIH0gZnJvbSAnLi9tb2NrLnNlcnZpY2UnO1xuXG5leHBvcnQgY29uc3QgREVMT05fTU9DS19DT05GSUcgPSBuZXcgSW5qZWN0aW9uVG9rZW48TW9ja09wdGlvbnM+KCdhbGFpbi1tb2NrLWNvbmZpZycpO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZU1vY2tDb25maWcoY29uZmlnPzogTW9ja09wdGlvbnMpOiBFbnZpcm9ubWVudFByb3ZpZGVycyB7XG4gIHJldHVybiBtYWtlRW52aXJvbm1lbnRQcm92aWRlcnMoW1xuICAgIHsgcHJvdmlkZTogREVMT05fTU9DS19DT05GSUcsIHVzZVZhbHVlOiBjb25maWcgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiDJtUhUVFBfUk9PVF9JTlRFUkNFUFRPUl9GTlMsXG4gICAgICB1c2VWYWx1ZTogbW9ja0ludGVyY2VwdG9yLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgICBkZXBzOiBbTW9ja1NlcnZpY2VdXG4gICAgfVxuICBdKTtcbn1cbiJdfQ==