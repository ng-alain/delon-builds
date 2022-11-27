import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzImageModule } from 'ng-zorro-antd/experimental/image';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { CellHostDirective } from './cell-host.directive';
import { CellComponent } from './cell.component';
import * as i0 from "@angular/core";
const COMPS = [CellComponent];
export class CellModule {
}
CellModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: CellModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CellModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: CellModule, declarations: [CellComponent, CellHostDirective], imports: [CommonModule, NzBadgeModule, NzTagModule, NzToolTipModule, NzIconModule, NzImageModule], exports: [CellComponent] });
CellModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: CellModule, imports: [CommonModule, NzBadgeModule, NzTagModule, NzToolTipModule, NzIconModule, NzImageModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: CellModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, NzBadgeModule, NzTagModule, NzToolTipModule, NzIconModule, NzImageModule],
                    declarations: [...COMPS, CellHostDirective],
                    exports: COMPS
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvY2VsbC9jZWxsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDaEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXhELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFFakQsTUFBTSxLQUFLLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQU85QixNQUFNLE9BQU8sVUFBVTs7d0dBQVYsVUFBVTt5R0FBVixVQUFVLGlCQVBSLGFBQWEsRUFJRCxpQkFBaUIsYUFEaEMsWUFBWSxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxhQUFhLGFBSG5GLGFBQWE7eUdBT2YsVUFBVSxZQUpYLFlBQVksRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsYUFBYTs0RkFJckYsVUFBVTtrQkFMdEIsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLGFBQWEsQ0FBQztvQkFDakcsWUFBWSxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsaUJBQWlCLENBQUM7b0JBQzNDLE9BQU8sRUFBRSxLQUFLO2lCQUNmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE56QmFkZ2VNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2JhZGdlJztcbmltcG9ydCB7IE56SW1hZ2VNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2V4cGVyaW1lbnRhbC9pbWFnZSc7XG5pbXBvcnQgeyBOekljb25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2ljb24nO1xuaW1wb3J0IHsgTnpUYWdNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3RhZyc7XG5pbXBvcnQgeyBOelRvb2xUaXBNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3Rvb2x0aXAnO1xuXG5pbXBvcnQgeyBDZWxsSG9zdERpcmVjdGl2ZSB9IGZyb20gJy4vY2VsbC1ob3N0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDZWxsQ29tcG9uZW50IH0gZnJvbSAnLi9jZWxsLmNvbXBvbmVudCc7XG5cbmNvbnN0IENPTVBTID0gW0NlbGxDb21wb25lbnRdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBOekJhZGdlTW9kdWxlLCBOelRhZ01vZHVsZSwgTnpUb29sVGlwTW9kdWxlLCBOekljb25Nb2R1bGUsIE56SW1hZ2VNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QUywgQ2VsbEhvc3REaXJlY3RpdmVdLFxuICBleHBvcnRzOiBDT01QU1xufSlcbmV4cG9ydCBjbGFzcyBDZWxsTW9kdWxlIHt9XG4iXX0=