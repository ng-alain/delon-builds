import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { G2CardComponent } from './card.component';
import * as i0 from "@angular/core";
const COMPONENTS = [G2CardComponent];
class G2CardModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: G2CardModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.1.5", ngImport: i0, type: G2CardModule, declarations: [G2CardComponent], imports: [CommonModule, NzCardModule, NzSpinModule, NzOutletModule], exports: [G2CardComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: G2CardModule, imports: [CommonModule, NzCardModule, NzSpinModule, NzOutletModule] }); }
}
export { G2CardModule };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: G2CardModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, NzCardModule, NzSpinModule, NzOutletModule],
                    declarations: COMPONENTS,
                    exports: COMPONENTS
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jaGFydC9jYXJkL2NhcmQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFFbkQsTUFBTSxVQUFVLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUVyQyxNQUthLFlBQVk7OEdBQVosWUFBWTsrR0FBWixZQUFZLGlCQVBMLGVBQWUsYUFHdkIsWUFBWSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsY0FBYyxhQUhoRCxlQUFlOytHQU90QixZQUFZLFlBSmIsWUFBWSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsY0FBYzs7U0FJdkQsWUFBWTsyRkFBWixZQUFZO2tCQUx4QixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLGNBQWMsQ0FBQztvQkFDbkUsWUFBWSxFQUFFLFVBQVU7b0JBQ3hCLE9BQU8sRUFBRSxVQUFVO2lCQUNwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOekNhcmRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NhcmQnO1xuaW1wb3J0IHsgTnpPdXRsZXRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvb3V0bGV0JztcbmltcG9ydCB7IE56U3Bpbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvc3Bpbic7XG5cbmltcG9ydCB7IEcyQ2FyZENvbXBvbmVudCB9IGZyb20gJy4vY2FyZC5jb21wb25lbnQnO1xuXG5jb25zdCBDT01QT05FTlRTID0gW0cyQ2FyZENvbXBvbmVudF07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE56Q2FyZE1vZHVsZSwgTnpTcGluTW9kdWxlLCBOek91dGxldE1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogQ09NUE9ORU5UUyxcbiAgZXhwb3J0czogQ09NUE9ORU5UU1xufSlcbmV4cG9ydCBjbGFzcyBHMkNhcmRNb2R1bGUge31cbiJdfQ==