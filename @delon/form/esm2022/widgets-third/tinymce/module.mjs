import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxTinymceModule } from 'ngx-tinymce';
import { DelonFormModule } from '@delon/form';
import { TinymceWidget } from './widget';
import * as i0 from "@angular/core";
import * as i1 from "@delon/form";
export class TinymceWidgetModule {
    constructor(widgetRegistry) {
        widgetRegistry.register(TinymceWidget.KEY, TinymceWidget);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.4", ngImport: i0, type: TinymceWidgetModule, deps: [{ token: i1.WidgetRegistry }], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.2.4", ngImport: i0, type: TinymceWidgetModule, imports: [FormsModule, DelonFormModule, NgxTinymceModule, TinymceWidget] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.2.4", ngImport: i0, type: TinymceWidgetModule, imports: [FormsModule, DelonFormModule, NgxTinymceModule, TinymceWidget] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.4", ngImport: i0, type: TinymceWidgetModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [FormsModule, DelonFormModule, NgxTinymceModule, TinymceWidget]
                }]
        }], ctorParameters: () => [{ type: i1.WidgetRegistry }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS93aWRnZXRzLXRoaXJkL3RpbnltY2UvbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUUvQyxPQUFPLEVBQUUsZUFBZSxFQUFrQixNQUFNLGFBQWEsQ0FBQztBQUU5RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sVUFBVSxDQUFDOzs7QUFLekMsTUFBTSxPQUFPLG1CQUFtQjtJQUM5QixZQUFZLGNBQThCO1FBQ3hDLGNBQWMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUM1RCxDQUFDOzhHQUhVLG1CQUFtQjsrR0FBbkIsbUJBQW1CLFlBRnBCLFdBQVcsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYTsrR0FFNUQsbUJBQW1CLFlBRnBCLFdBQVcsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYTs7MkZBRTVELG1CQUFtQjtrQkFIL0IsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLGFBQWEsQ0FBQztpQkFDekUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IE5neFRpbnltY2VNb2R1bGUgfSBmcm9tICduZ3gtdGlueW1jZSc7XG5cbmltcG9ydCB7IERlbG9uRm9ybU1vZHVsZSwgV2lkZ2V0UmVnaXN0cnkgfSBmcm9tICdAZGVsb24vZm9ybSc7XG5cbmltcG9ydCB7IFRpbnltY2VXaWRnZXQgfSBmcm9tICcuL3dpZGdldCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtGb3Jtc01vZHVsZSwgRGVsb25Gb3JtTW9kdWxlLCBOZ3hUaW55bWNlTW9kdWxlLCBUaW55bWNlV2lkZ2V0XVxufSlcbmV4cG9ydCBjbGFzcyBUaW55bWNlV2lkZ2V0TW9kdWxlIHtcbiAgY29uc3RydWN0b3Iod2lkZ2V0UmVnaXN0cnk6IFdpZGdldFJlZ2lzdHJ5KSB7XG4gICAgd2lkZ2V0UmVnaXN0cnkucmVnaXN0ZXIoVGlueW1jZVdpZGdldC5LRVksIFRpbnltY2VXaWRnZXQpO1xuICB9XG59XG4iXX0=