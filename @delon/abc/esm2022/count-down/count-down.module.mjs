import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CountdownModule } from 'ngx-countdown';
import { CountDownComponent } from './count-down.component';
import * as i0 from "@angular/core";
const COMPONENTS = [CountDownComponent];
class CountDownModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: CountDownModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.1.1", ngImport: i0, type: CountDownModule, declarations: [CountDownComponent], imports: [CommonModule, CountdownModule], exports: [CountDownComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: CountDownModule, imports: [CommonModule, CountdownModule] }); }
}
export { CountDownModule };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: CountDownModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, CountdownModule],
                    declarations: COMPONENTS,
                    exports: COMPONENTS
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnQtZG93bi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvY291bnQtZG93bi9jb3VudC1kb3duLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWhELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQUU1RCxNQUFNLFVBQVUsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFFeEMsTUFLYSxlQUFlOzhHQUFmLGVBQWU7K0dBQWYsZUFBZSxpQkFQUixrQkFBa0IsYUFHMUIsWUFBWSxFQUFFLGVBQWUsYUFIckIsa0JBQWtCOytHQU96QixlQUFlLFlBSmhCLFlBQVksRUFBRSxlQUFlOztTQUk1QixlQUFlOzJGQUFmLGVBQWU7a0JBTDNCLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGVBQWUsQ0FBQztvQkFDeEMsWUFBWSxFQUFFLFVBQVU7b0JBQ3hCLE9BQU8sRUFBRSxVQUFVO2lCQUNwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb3VudGRvd25Nb2R1bGUgfSBmcm9tICduZ3gtY291bnRkb3duJztcblxuaW1wb3J0IHsgQ291bnREb3duQ29tcG9uZW50IH0gZnJvbSAnLi9jb3VudC1kb3duLmNvbXBvbmVudCc7XG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbQ291bnREb3duQ29tcG9uZW50XTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgQ291bnRkb3duTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBDT01QT05FTlRTLFxuICBleHBvcnRzOiBDT01QT05FTlRTXG59KVxuZXhwb3J0IGNsYXNzIENvdW50RG93bk1vZHVsZSB7fVxuIl19