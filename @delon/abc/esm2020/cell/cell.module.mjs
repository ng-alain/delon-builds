import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzImageModule } from 'ng-zorro-antd/experimental/image';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { CellHostDirective } from './cell-host.directive';
import { CellComponent } from './cell.component';
import * as i0 from "@angular/core";
const COMPS = [CellComponent];
export class CellModule {
}
CellModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: CellModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CellModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: CellModule, declarations: [CellComponent, CellHostDirective], imports: [CommonModule,
        FormsModule,
        NzCheckboxModule,
        NzRadioModule,
        NzBadgeModule,
        NzTagModule,
        NzToolTipModule,
        NzIconModule,
        NzImageModule], exports: [CellComponent] });
CellModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: CellModule, imports: [CommonModule,
        FormsModule,
        NzCheckboxModule,
        NzRadioModule,
        NzBadgeModule,
        NzTagModule,
        NzToolTipModule,
        NzIconModule,
        NzImageModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: CellModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        NzCheckboxModule,
                        NzRadioModule,
                        NzBadgeModule,
                        NzTagModule,
                        NzToolTipModule,
                        NzIconModule,
                        NzImageModule
                    ],
                    declarations: [...COMPS, CellHostDirective],
                    exports: COMPS
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvY2VsbC9jZWxsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztBQUVqRCxNQUFNLEtBQUssR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBaUI5QixNQUFNLE9BQU8sVUFBVTs7d0dBQVYsVUFBVTt5R0FBVixVQUFVLGlCQWpCUixhQUFhLEVBY0QsaUJBQWlCLGFBVnhDLFlBQVk7UUFDWixXQUFXO1FBQ1gsZ0JBQWdCO1FBQ2hCLGFBQWE7UUFDYixhQUFhO1FBQ2IsV0FBVztRQUNYLGVBQWU7UUFDZixZQUFZO1FBQ1osYUFBYSxhQVpGLGFBQWE7eUdBaUJmLFVBQVUsWUFibkIsWUFBWTtRQUNaLFdBQVc7UUFDWCxnQkFBZ0I7UUFDaEIsYUFBYTtRQUNiLGFBQWE7UUFDYixXQUFXO1FBQ1gsZUFBZTtRQUNmLFlBQVk7UUFDWixhQUFhOzRGQUtKLFVBQVU7a0JBZnRCLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxnQkFBZ0I7d0JBQ2hCLGFBQWE7d0JBQ2IsYUFBYTt3QkFDYixXQUFXO3dCQUNYLGVBQWU7d0JBQ2YsWUFBWTt3QkFDWixhQUFhO3FCQUNkO29CQUNELFlBQVksRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLGlCQUFpQixDQUFDO29CQUMzQyxPQUFPLEVBQUUsS0FBSztpQkFDZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IE56QmFkZ2VNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2JhZGdlJztcbmltcG9ydCB7IE56Q2hlY2tib3hNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NoZWNrYm94JztcbmltcG9ydCB7IE56SW1hZ2VNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2V4cGVyaW1lbnRhbC9pbWFnZSc7XG5pbXBvcnQgeyBOekljb25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2ljb24nO1xuaW1wb3J0IHsgTnpSYWRpb01vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvcmFkaW8nO1xuaW1wb3J0IHsgTnpUYWdNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3RhZyc7XG5pbXBvcnQgeyBOelRvb2xUaXBNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3Rvb2x0aXAnO1xuXG5pbXBvcnQgeyBDZWxsSG9zdERpcmVjdGl2ZSB9IGZyb20gJy4vY2VsbC1ob3N0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDZWxsQ29tcG9uZW50IH0gZnJvbSAnLi9jZWxsLmNvbXBvbmVudCc7XG5cbmNvbnN0IENPTVBTID0gW0NlbGxDb21wb25lbnRdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIE56Q2hlY2tib3hNb2R1bGUsXG4gICAgTnpSYWRpb01vZHVsZSxcbiAgICBOekJhZGdlTW9kdWxlLFxuICAgIE56VGFnTW9kdWxlLFxuICAgIE56VG9vbFRpcE1vZHVsZSxcbiAgICBOekljb25Nb2R1bGUsXG4gICAgTnpJbWFnZU1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QUywgQ2VsbEhvc3REaXJlY3RpdmVdLFxuICBleHBvcnRzOiBDT01QU1xufSlcbmV4cG9ydCBjbGFzcyBDZWxsTW9kdWxlIHt9XG4iXX0=