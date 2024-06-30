import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DelonFormModule } from '@delon/form';
import { NzTransferModule } from 'ng-zorro-antd/transfer';
import { TransferWidget } from './widget';
import * as i0 from "@angular/core";
import * as i1 from "@delon/form";
export * from './widget';
export * from './schema';
export class TransferWidgetModule {
    constructor(widgetRegistry) {
        widgetRegistry.register(TransferWidget.KEY, TransferWidget);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.5", ngImport: i0, type: TransferWidgetModule, deps: [{ token: i1.WidgetRegistry }], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.0.5", ngImport: i0, type: TransferWidgetModule, imports: [FormsModule, DelonFormModule, NzTransferModule, TransferWidget] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.0.5", ngImport: i0, type: TransferWidgetModule, imports: [FormsModule, DelonFormModule, NzTransferModule, TransferWidget] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.5", ngImport: i0, type: TransferWidgetModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [FormsModule, DelonFormModule, NzTransferModule, TransferWidget]
                }]
        }], ctorParameters: () => [{ type: i1.WidgetRegistry }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS93aWRnZXRzL3RyYW5zZmVyL21vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsZUFBZSxFQUFrQixNQUFNLGFBQWEsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUUxRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sVUFBVSxDQUFDOzs7QUFFMUMsY0FBYyxVQUFVLENBQUM7QUFDekIsY0FBYyxVQUFVLENBQUM7QUFLekIsTUFBTSxPQUFPLG9CQUFvQjtJQUMvQixZQUFZLGNBQThCO1FBQ3hDLGNBQWMsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxjQUFjLENBQUMsQ0FBQztJQUM5RCxDQUFDOzhHQUhVLG9CQUFvQjsrR0FBcEIsb0JBQW9CLFlBRnJCLFdBQVcsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsY0FBYzsrR0FFN0Qsb0JBQW9CLFlBRnJCLFdBQVcsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsY0FBYzs7MkZBRTdELG9CQUFvQjtrQkFIaEMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLGNBQWMsQ0FBQztpQkFDMUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IERlbG9uRm9ybU1vZHVsZSwgV2lkZ2V0UmVnaXN0cnkgfSBmcm9tICdAZGVsb24vZm9ybSc7XG5pbXBvcnQgeyBOelRyYW5zZmVyTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90cmFuc2Zlcic7XG5cbmltcG9ydCB7IFRyYW5zZmVyV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXQnO1xuXG5leHBvcnQgKiBmcm9tICcuL3dpZGdldCc7XG5leHBvcnQgKiBmcm9tICcuL3NjaGVtYSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtGb3Jtc01vZHVsZSwgRGVsb25Gb3JtTW9kdWxlLCBOelRyYW5zZmVyTW9kdWxlLCBUcmFuc2ZlcldpZGdldF1cbn0pXG5leHBvcnQgY2xhc3MgVHJhbnNmZXJXaWRnZXRNb2R1bGUge1xuICBjb25zdHJ1Y3Rvcih3aWRnZXRSZWdpc3RyeTogV2lkZ2V0UmVnaXN0cnkpIHtcbiAgICB3aWRnZXRSZWdpc3RyeS5yZWdpc3RlcihUcmFuc2ZlcldpZGdldC5LRVksIFRyYW5zZmVyV2lkZ2V0KTtcbiAgfVxufVxuIl19