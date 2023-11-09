import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DelonFormModule } from '@delon/form';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { TreeSelectWidget } from './widget';
import * as i0 from "@angular/core";
import * as i1 from "@delon/form";
export * from './widget';
export * from './schema';
export class TreeSelectWidgetModule {
    constructor(widgetRegistry) {
        widgetRegistry.register(TreeSelectWidget.KEY, TreeSelectWidget);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TreeSelectWidgetModule, deps: [{ token: i1.WidgetRegistry }], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: TreeSelectWidgetModule, declarations: [TreeSelectWidget], imports: [FormsModule, DelonFormModule, NzTreeSelectModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TreeSelectWidgetModule, imports: [FormsModule, DelonFormModule, NzTreeSelectModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TreeSelectWidgetModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [FormsModule, DelonFormModule, NzTreeSelectModule],
                    declarations: [TreeSelectWidget]
                }]
        }], ctorParameters: function () { return [{ type: i1.WidgetRegistry }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3dpZGdldHMvdHJlZS1zZWxlY3QvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLGVBQWUsRUFBa0IsTUFBTSxhQUFhLENBQUM7QUFDOUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFL0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sVUFBVSxDQUFDOzs7QUFFNUMsY0FBYyxVQUFVLENBQUM7QUFDekIsY0FBYyxVQUFVLENBQUM7QUFNekIsTUFBTSxPQUFPLHNCQUFzQjtJQUNqQyxZQUFZLGNBQThCO1FBQ3hDLGNBQWMsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDbEUsQ0FBQzsrR0FIVSxzQkFBc0I7Z0hBQXRCLHNCQUFzQixpQkFGbEIsZ0JBQWdCLGFBRHJCLFdBQVcsRUFBRSxlQUFlLEVBQUUsa0JBQWtCO2dIQUcvQyxzQkFBc0IsWUFIdkIsV0FBVyxFQUFFLGVBQWUsRUFBRSxrQkFBa0I7OzRGQUcvQyxzQkFBc0I7a0JBSmxDLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsV0FBVyxFQUFFLGVBQWUsRUFBRSxrQkFBa0IsQ0FBQztvQkFDM0QsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLENBQUM7aUJBQ2pDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBEZWxvbkZvcm1Nb2R1bGUsIFdpZGdldFJlZ2lzdHJ5IH0gZnJvbSAnQGRlbG9uL2Zvcm0nO1xuaW1wb3J0IHsgTnpUcmVlU2VsZWN0TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90cmVlLXNlbGVjdCc7XG5cbmltcG9ydCB7IFRyZWVTZWxlY3RXaWRnZXQgfSBmcm9tICcuL3dpZGdldCc7XG5cbmV4cG9ydCAqIGZyb20gJy4vd2lkZ2V0JztcbmV4cG9ydCAqIGZyb20gJy4vc2NoZW1hJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0Zvcm1zTW9kdWxlLCBEZWxvbkZvcm1Nb2R1bGUsIE56VHJlZVNlbGVjdE1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1RyZWVTZWxlY3RXaWRnZXRdXG59KVxuZXhwb3J0IGNsYXNzIFRyZWVTZWxlY3RXaWRnZXRNb2R1bGUge1xuICBjb25zdHJ1Y3Rvcih3aWRnZXRSZWdpc3RyeTogV2lkZ2V0UmVnaXN0cnkpIHtcbiAgICB3aWRnZXRSZWdpc3RyeS5yZWdpc3RlcihUcmVlU2VsZWN0V2lkZ2V0LktFWSwgVHJlZVNlbGVjdFdpZGdldCk7XG4gIH1cbn1cbiJdfQ==