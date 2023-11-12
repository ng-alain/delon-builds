import { InjectionToken, makeEnvironmentProviders } from '@angular/core';
export const DELON_MOCK_CONFIG = new InjectionToken('alain-mock-config');
export function provideDelonMockConfig(config) {
    return makeEnvironmentProviders([{ provide: DELON_MOCK_CONFIG, useValue: config }]);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlkZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL21vY2svc3JjL3Byb3ZpZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF3QixjQUFjLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJL0YsTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBQUcsSUFBSSxjQUFjLENBQWMsbUJBQW1CLENBQUMsQ0FBQztBQUV0RixNQUFNLFVBQVUsc0JBQXNCLENBQUMsTUFBb0I7SUFDekQsT0FBTyx3QkFBd0IsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDdEYsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudmlyb25tZW50UHJvdmlkZXJzLCBJbmplY3Rpb25Ub2tlbiwgbWFrZUVudmlyb25tZW50UHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE1vY2tPcHRpb25zIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuXG5leHBvcnQgY29uc3QgREVMT05fTU9DS19DT05GSUcgPSBuZXcgSW5qZWN0aW9uVG9rZW48TW9ja09wdGlvbnM+KCdhbGFpbi1tb2NrLWNvbmZpZycpO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZURlbG9uTW9ja0NvbmZpZyhjb25maWc/OiBNb2NrT3B0aW9ucyk6IEVudmlyb25tZW50UHJvdmlkZXJzIHtcbiAgcmV0dXJuIG1ha2VFbnZpcm9ubWVudFByb3ZpZGVycyhbeyBwcm92aWRlOiBERUxPTl9NT0NLX0NPTkZJRywgdXNlVmFsdWU6IGNvbmZpZyB9XSk7XG59XG4iXX0=