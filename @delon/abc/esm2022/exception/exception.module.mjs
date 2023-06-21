import { ObserversModule } from '@angular/cdk/observers';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DelonLocaleModule } from '@delon/theme';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ExceptionComponent } from './exception.component';
import * as i0 from "@angular/core";
const COMPONENTS = [ExceptionComponent];
class ExceptionModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: ExceptionModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.1.1", ngImport: i0, type: ExceptionModule, declarations: [ExceptionComponent], imports: [CommonModule, ObserversModule, RouterModule, DelonLocaleModule, NzButtonModule], exports: [ExceptionComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: ExceptionModule, imports: [CommonModule, ObserversModule, RouterModule, DelonLocaleModule, NzButtonModule] }); }
}
export { ExceptionModule };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: ExceptionModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, ObserversModule, RouterModule, DelonLocaleModule, NzButtonModule],
                    declarations: COMPONENTS,
                    exports: COMPONENTS
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZXB0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9leGNlcHRpb24vZXhjZXB0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFdEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBRTNELE1BQU0sVUFBVSxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUV4QyxNQUthLGVBQWU7OEdBQWYsZUFBZTsrR0FBZixlQUFlLGlCQVBSLGtCQUFrQixhQUcxQixZQUFZLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxjQUFjLGFBSHRFLGtCQUFrQjsrR0FPekIsZUFBZSxZQUpoQixZQUFZLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxjQUFjOztTQUk3RSxlQUFlOzJGQUFmLGVBQWU7a0JBTDNCLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsY0FBYyxDQUFDO29CQUN6RixZQUFZLEVBQUUsVUFBVTtvQkFDeEIsT0FBTyxFQUFFLFVBQVU7aUJBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2ZXJzTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL29ic2VydmVycyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IERlbG9uTG9jYWxlTW9kdWxlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IE56QnV0dG9uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9idXR0b24nO1xuXG5pbXBvcnQgeyBFeGNlcHRpb25Db21wb25lbnQgfSBmcm9tICcuL2V4Y2VwdGlvbi5jb21wb25lbnQnO1xuXG5jb25zdCBDT01QT05FTlRTID0gW0V4Y2VwdGlvbkNvbXBvbmVudF07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE9ic2VydmVyc01vZHVsZSwgUm91dGVyTW9kdWxlLCBEZWxvbkxvY2FsZU1vZHVsZSwgTnpCdXR0b25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IENPTVBPTkVOVFMsXG4gIGV4cG9ydHM6IENPTVBPTkVOVFNcbn0pXG5leHBvcnQgY2xhc3MgRXhjZXB0aW9uTW9kdWxlIHt9XG4iXX0=