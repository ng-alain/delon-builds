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
class CellModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: CellModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.4", ngImport: i0, type: CellModule, declarations: [CellComponent, CellHostDirective], imports: [CommonModule,
            FormsModule,
            NzCheckboxModule,
            NzRadioModule,
            NzBadgeModule,
            NzTagModule,
            NzToolTipModule,
            NzIconModule,
            NzImageModule], exports: [CellComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: CellModule, imports: [CommonModule,
            FormsModule,
            NzCheckboxModule,
            NzRadioModule,
            NzBadgeModule,
            NzTagModule,
            NzToolTipModule,
            NzIconModule,
            NzImageModule] }); }
}
export { CellModule };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: CellModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvY2VsbC9jZWxsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztBQUVqRCxNQUFNLEtBQUssR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBRTlCLE1BZWEsVUFBVTs4R0FBVixVQUFVOytHQUFWLFVBQVUsaUJBakJSLGFBQWEsRUFjRCxpQkFBaUIsYUFWeEMsWUFBWTtZQUNaLFdBQVc7WUFDWCxnQkFBZ0I7WUFDaEIsYUFBYTtZQUNiLGFBQWE7WUFDYixXQUFXO1lBQ1gsZUFBZTtZQUNmLFlBQVk7WUFDWixhQUFhLGFBWkYsYUFBYTsrR0FpQmYsVUFBVSxZQWJuQixZQUFZO1lBQ1osV0FBVztZQUNYLGdCQUFnQjtZQUNoQixhQUFhO1lBQ2IsYUFBYTtZQUNiLFdBQVc7WUFDWCxlQUFlO1lBQ2YsWUFBWTtZQUNaLGFBQWE7O1NBS0osVUFBVTsyRkFBVixVQUFVO2tCQWZ0QixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsZ0JBQWdCO3dCQUNoQixhQUFhO3dCQUNiLGFBQWE7d0JBQ2IsV0FBVzt3QkFDWCxlQUFlO3dCQUNmLFlBQVk7d0JBQ1osYUFBYTtxQkFDZDtvQkFDRCxZQUFZLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxpQkFBaUIsQ0FBQztvQkFDM0MsT0FBTyxFQUFFLEtBQUs7aUJBQ2YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBOekJhZGdlTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9iYWRnZSc7XG5pbXBvcnQgeyBOekNoZWNrYm94TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jaGVja2JveCc7XG5pbXBvcnQgeyBOekltYWdlTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9leHBlcmltZW50YWwvaW1hZ2UnO1xuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcbmltcG9ydCB7IE56UmFkaW9Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3JhZGlvJztcbmltcG9ydCB7IE56VGFnTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90YWcnO1xuaW1wb3J0IHsgTnpUb29sVGlwTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90b29sdGlwJztcblxuaW1wb3J0IHsgQ2VsbEhvc3REaXJlY3RpdmUgfSBmcm9tICcuL2NlbGwtaG9zdC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ2VsbENvbXBvbmVudCB9IGZyb20gJy4vY2VsbC5jb21wb25lbnQnO1xuXG5jb25zdCBDT01QUyA9IFtDZWxsQ29tcG9uZW50XTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBOekNoZWNrYm94TW9kdWxlLFxuICAgIE56UmFkaW9Nb2R1bGUsXG4gICAgTnpCYWRnZU1vZHVsZSxcbiAgICBOelRhZ01vZHVsZSxcbiAgICBOelRvb2xUaXBNb2R1bGUsXG4gICAgTnpJY29uTW9kdWxlLFxuICAgIE56SW1hZ2VNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbLi4uQ09NUFMsIENlbGxIb3N0RGlyZWN0aXZlXSxcbiAgZXhwb3J0czogQ09NUFNcbn0pXG5leHBvcnQgY2xhc3MgQ2VsbE1vZHVsZSB7fVxuIl19