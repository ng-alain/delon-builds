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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TransferWidgetModule, deps: [{ token: i1.WidgetRegistry }], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: TransferWidgetModule, declarations: [TransferWidget], imports: [FormsModule, DelonFormModule, NzTransferModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TransferWidgetModule, imports: [FormsModule, DelonFormModule, NzTransferModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TransferWidgetModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [FormsModule, DelonFormModule, NzTransferModule],
                    declarations: [TransferWidget]
                }]
        }], ctorParameters: function () { return [{ type: i1.WidgetRegistry }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3dpZGdldHMvdHJhbnNmZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLGVBQWUsRUFBa0IsTUFBTSxhQUFhLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFMUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLFVBQVUsQ0FBQzs7O0FBRTFDLGNBQWMsVUFBVSxDQUFDO0FBQ3pCLGNBQWMsVUFBVSxDQUFDO0FBTXpCLE1BQU0sT0FBTyxvQkFBb0I7SUFDL0IsWUFBWSxjQUE4QjtRQUN4QyxjQUFjLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDOUQsQ0FBQzsrR0FIVSxvQkFBb0I7Z0hBQXBCLG9CQUFvQixpQkFGaEIsY0FBYyxhQURuQixXQUFXLEVBQUUsZUFBZSxFQUFFLGdCQUFnQjtnSEFHN0Msb0JBQW9CLFlBSHJCLFdBQVcsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCOzs0RkFHN0Msb0JBQW9CO2tCQUpoQyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFdBQVcsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLENBQUM7b0JBQ3pELFlBQVksRUFBRSxDQUFDLGNBQWMsQ0FBQztpQkFDL0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IERlbG9uRm9ybU1vZHVsZSwgV2lkZ2V0UmVnaXN0cnkgfSBmcm9tICdAZGVsb24vZm9ybSc7XG5pbXBvcnQgeyBOelRyYW5zZmVyTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90cmFuc2Zlcic7XG5cbmltcG9ydCB7IFRyYW5zZmVyV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXQnO1xuXG5leHBvcnQgKiBmcm9tICcuL3dpZGdldCc7XG5leHBvcnQgKiBmcm9tICcuL3NjaGVtYSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtGb3Jtc01vZHVsZSwgRGVsb25Gb3JtTW9kdWxlLCBOelRyYW5zZmVyTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbVHJhbnNmZXJXaWRnZXRdXG59KVxuZXhwb3J0IGNsYXNzIFRyYW5zZmVyV2lkZ2V0TW9kdWxlIHtcbiAgY29uc3RydWN0b3Iod2lkZ2V0UmVnaXN0cnk6IFdpZGdldFJlZ2lzdHJ5KSB7XG4gICAgd2lkZ2V0UmVnaXN0cnkucmVnaXN0ZXIoVHJhbnNmZXJXaWRnZXQuS0VZLCBUcmFuc2ZlcldpZGdldCk7XG4gIH1cbn1cbiJdfQ==