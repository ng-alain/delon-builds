import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DelonFormModule } from '@delon/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { TagWidget } from './widget';
import * as i0 from "@angular/core";
import * as i1 from "@delon/form";
export class TagWidgetModule {
    constructor(widgetRegistry) {
        widgetRegistry.register(TagWidget.KEY, TagWidget);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.5", ngImport: i0, type: TagWidgetModule, deps: [{ token: i1.WidgetRegistry }], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.0.5", ngImport: i0, type: TagWidgetModule, imports: [FormsModule, DelonFormModule, NzTagModule, NzIconModule, CommonModule, TagWidget] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.0.5", ngImport: i0, type: TagWidgetModule, imports: [FormsModule, DelonFormModule, NzTagModule, NzIconModule, CommonModule, TagWidget] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.5", ngImport: i0, type: TagWidgetModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [FormsModule, DelonFormModule, NzTagModule, NzIconModule, CommonModule, TagWidget]
                }]
        }], ctorParameters: () => [{ type: i1.WidgetRegistry }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS93aWRnZXRzL3RhZy9tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxlQUFlLEVBQWtCLE1BQU0sYUFBYSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFaEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFVBQVUsQ0FBQzs7O0FBS3JDLE1BQU0sT0FBTyxlQUFlO0lBQzFCLFlBQVksY0FBOEI7UUFDeEMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7OEdBSFUsZUFBZTsrR0FBZixlQUFlLFlBRmhCLFdBQVcsRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsU0FBUzsrR0FFL0UsZUFBZSxZQUZoQixXQUFXLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFNBQVM7OzJGQUUvRSxlQUFlO2tCQUgzQixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFdBQVcsRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsU0FBUyxDQUFDO2lCQUM1RiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IERlbG9uRm9ybU1vZHVsZSwgV2lkZ2V0UmVnaXN0cnkgfSBmcm9tICdAZGVsb24vZm9ybSc7XG5pbXBvcnQgeyBOekljb25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2ljb24nO1xuaW1wb3J0IHsgTnpUYWdNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3RhZyc7XG5cbmltcG9ydCB7IFRhZ1dpZGdldCB9IGZyb20gJy4vd2lkZ2V0JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0Zvcm1zTW9kdWxlLCBEZWxvbkZvcm1Nb2R1bGUsIE56VGFnTW9kdWxlLCBOekljb25Nb2R1bGUsIENvbW1vbk1vZHVsZSwgVGFnV2lkZ2V0XVxufSlcbmV4cG9ydCBjbGFzcyBUYWdXaWRnZXRNb2R1bGUge1xuICBjb25zdHJ1Y3Rvcih3aWRnZXRSZWdpc3RyeTogV2lkZ2V0UmVnaXN0cnkpIHtcbiAgICB3aWRnZXRSZWdpc3RyeS5yZWdpc3RlcihUYWdXaWRnZXQuS0VZLCBUYWdXaWRnZXQpO1xuICB9XG59XG4iXX0=