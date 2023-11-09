import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DelonFormModule } from '@delon/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { TagWidget } from './widget';
import * as i0 from "@angular/core";
import * as i1 from "@delon/form";
export * from './widget';
export * from './schema';
export class TagWidgetModule {
    constructor(widgetRegistry) {
        widgetRegistry.register(TagWidget.KEY, TagWidget);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TagWidgetModule, deps: [{ token: i1.WidgetRegistry }], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: TagWidgetModule, declarations: [TagWidget], imports: [FormsModule, DelonFormModule, NzTagModule, NzIconModule, CommonModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TagWidgetModule, imports: [FormsModule, DelonFormModule, NzTagModule, NzIconModule, CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TagWidgetModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [FormsModule, DelonFormModule, NzTagModule, NzIconModule, CommonModule],
                    declarations: [TagWidget]
                }]
        }], ctorParameters: function () { return [{ type: i1.WidgetRegistry }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3dpZGdldHMvdGFnL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsZUFBZSxFQUFrQixNQUFNLGFBQWEsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWhELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxVQUFVLENBQUM7OztBQUVyQyxjQUFjLFVBQVUsQ0FBQztBQUN6QixjQUFjLFVBQVUsQ0FBQztBQU16QixNQUFNLE9BQU8sZUFBZTtJQUMxQixZQUFZLGNBQThCO1FBQ3hDLGNBQWMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNwRCxDQUFDOytHQUhVLGVBQWU7Z0hBQWYsZUFBZSxpQkFGWCxTQUFTLGFBRGQsV0FBVyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLFlBQVk7Z0hBR3BFLGVBQWUsWUFIaEIsV0FBVyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLFlBQVk7OzRGQUdwRSxlQUFlO2tCQUozQixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFdBQVcsRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxZQUFZLENBQUM7b0JBQ2hGLFlBQVksRUFBRSxDQUFDLFNBQVMsQ0FBQztpQkFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBEZWxvbkZvcm1Nb2R1bGUsIFdpZGdldFJlZ2lzdHJ5IH0gZnJvbSAnQGRlbG9uL2Zvcm0nO1xuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcbmltcG9ydCB7IE56VGFnTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90YWcnO1xuXG5pbXBvcnQgeyBUYWdXaWRnZXQgfSBmcm9tICcuL3dpZGdldCc7XG5cbmV4cG9ydCAqIGZyb20gJy4vd2lkZ2V0JztcbmV4cG9ydCAqIGZyb20gJy4vc2NoZW1hJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0Zvcm1zTW9kdWxlLCBEZWxvbkZvcm1Nb2R1bGUsIE56VGFnTW9kdWxlLCBOekljb25Nb2R1bGUsIENvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1RhZ1dpZGdldF1cbn0pXG5leHBvcnQgY2xhc3MgVGFnV2lkZ2V0TW9kdWxlIHtcbiAgY29uc3RydWN0b3Iod2lkZ2V0UmVnaXN0cnk6IFdpZGdldFJlZ2lzdHJ5KSB7XG4gICAgd2lkZ2V0UmVnaXN0cnkucmVnaXN0ZXIoVGFnV2lkZ2V0LktFWSwgVGFnV2lkZ2V0KTtcbiAgfVxufVxuIl19