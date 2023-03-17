import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { G2RadarComponent } from './radar.component';
import * as i0 from "@angular/core";
const COMPONENTS = [G2RadarComponent];
export class G2RadarModule {
}
G2RadarModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: G2RadarModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
G2RadarModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.3", ngImport: i0, type: G2RadarModule, declarations: [G2RadarComponent], imports: [CommonModule, NzGridModule, NzOutletModule, NzSkeletonModule], exports: [G2RadarComponent] });
G2RadarModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: G2RadarModule, imports: [CommonModule, NzGridModule, NzOutletModule, NzSkeletonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.3", ngImport: i0, type: G2RadarModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, NzGridModule, NzOutletModule, NzSkeletonModule],
                    declarations: COMPONENTS,
                    exports: COMPONENTS
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkYXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY2hhcnQvcmFkYXIvcmFkYXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFMUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7O0FBRXJELE1BQU0sVUFBVSxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQU90QyxNQUFNLE9BQU8sYUFBYTs7MEdBQWIsYUFBYTsyR0FBYixhQUFhLGlCQVBOLGdCQUFnQixhQUd4QixZQUFZLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxnQkFBZ0IsYUFIcEQsZ0JBQWdCOzJHQU92QixhQUFhLFlBSmQsWUFBWSxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsZ0JBQWdCOzJGQUkzRCxhQUFhO2tCQUx6QixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLGdCQUFnQixDQUFDO29CQUN2RSxZQUFZLEVBQUUsVUFBVTtvQkFDeEIsT0FBTyxFQUFFLFVBQVU7aUJBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE56T3V0bGV0TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL291dGxldCc7XG5pbXBvcnQgeyBOekdyaWRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2dyaWQnO1xuaW1wb3J0IHsgTnpTa2VsZXRvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvc2tlbGV0b24nO1xuXG5pbXBvcnQgeyBHMlJhZGFyQ29tcG9uZW50IH0gZnJvbSAnLi9yYWRhci5jb21wb25lbnQnO1xuXG5jb25zdCBDT01QT05FTlRTID0gW0cyUmFkYXJDb21wb25lbnRdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBOekdyaWRNb2R1bGUsIE56T3V0bGV0TW9kdWxlLCBOelNrZWxldG9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBDT01QT05FTlRTLFxuICBleHBvcnRzOiBDT01QT05FTlRTXG59KVxuZXhwb3J0IGNsYXNzIEcyUmFkYXJNb2R1bGUge31cbiJdfQ==