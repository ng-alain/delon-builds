/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ACLGuard } from './acl-guard';
import { DelonACLConfig } from './acl.config';
import { ACLDirective } from './acl.directive';
import { ACLService } from './acl.service';
/** @type {?} */
const SERVICES = [ACLService, ACLGuard];
/** @type {?} */
const COMPONENTS = [ACLDirective];
export class DelonACLModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: DelonACLModule,
            providers: [DelonACLConfig, ...SERVICES],
        };
    }
}
DelonACLModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hY2wvIiwic291cmNlcyI6WyJzcmMvYWNsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDdkMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUM5QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7TUFFckMsUUFBUSxHQUFHLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQzs7TUFDakMsVUFBVSxHQUFHLENBQUMsWUFBWSxDQUFDO0FBT2pDLE1BQU0sT0FBTyxjQUFjOzs7O0lBQ3pCLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFNBQVMsRUFBRSxDQUFDLGNBQWMsRUFBRSxHQUFHLFFBQVEsQ0FBQztTQUN6QyxDQUFDO0lBQ0osQ0FBQzs7O1lBWEYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDdkIsWUFBWSxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUM7Z0JBQzdCLE9BQU8sRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDO2FBQ3pCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFDTEd1YXJkIH0gZnJvbSAnLi9hY2wtZ3VhcmQnO1xuaW1wb3J0IHsgRGVsb25BQ0xDb25maWcgfSBmcm9tICcuL2FjbC5jb25maWcnO1xuaW1wb3J0IHsgQUNMRGlyZWN0aXZlIH0gZnJvbSAnLi9hY2wuZGlyZWN0aXZlJztcbmltcG9ydCB7IEFDTFNlcnZpY2UgfSBmcm9tICcuL2FjbC5zZXJ2aWNlJztcblxuY29uc3QgU0VSVklDRVMgPSBbQUNMU2VydmljZSwgQUNMR3VhcmRdO1xuY29uc3QgQ09NUE9ORU5UUyA9IFtBQ0xEaXJlY3RpdmVdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbLi4uQ09NUE9ORU5UU10sXG4gIGV4cG9ydHM6IFsuLi5DT01QT05FTlRTXSxcbn0pXG5leHBvcnQgY2xhc3MgRGVsb25BQ0xNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IERlbG9uQUNMTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbRGVsb25BQ0xDb25maWcsIC4uLlNFUlZJQ0VTXSxcbiAgICB9O1xuICB9XG59XG4iXX0=