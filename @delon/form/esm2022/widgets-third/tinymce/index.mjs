import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxTinymceModule } from 'ngx-tinymce';
import { DelonFormModule } from '@delon/form';
import { TinymceWidget } from './widget';
import * as i0 from "@angular/core";
import * as i1 from "@delon/form";
export * from './widget';
export * from './schema';
export class TinymceWidgetModule {
    constructor(widgetRegistry) {
        widgetRegistry.register(TinymceWidget.KEY, TinymceWidget);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.1", ngImport: i0, type: TinymceWidgetModule, deps: [{ token: i1.WidgetRegistry }], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.0.1", ngImport: i0, type: TinymceWidgetModule, declarations: [TinymceWidget], imports: [FormsModule, DelonFormModule, NgxTinymceModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.0.1", ngImport: i0, type: TinymceWidgetModule, imports: [FormsModule, DelonFormModule, NgxTinymceModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.1", ngImport: i0, type: TinymceWidgetModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [FormsModule, DelonFormModule, NgxTinymceModule],
                    declarations: [TinymceWidget]
                }]
        }], ctorParameters: () => [{ type: i1.WidgetRegistry }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3dpZGdldHMtdGhpcmQvdGlueW1jZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFL0MsT0FBTyxFQUFFLGVBQWUsRUFBa0IsTUFBTSxhQUFhLENBQUM7QUFFOUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFVBQVUsQ0FBQzs7O0FBRXpDLGNBQWMsVUFBVSxDQUFDO0FBQ3pCLGNBQWMsVUFBVSxDQUFDO0FBTXpCLE1BQU0sT0FBTyxtQkFBbUI7SUFDOUIsWUFBWSxjQUE4QjtRQUN4QyxjQUFjLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDNUQsQ0FBQzs4R0FIVSxtQkFBbUI7K0dBQW5CLG1CQUFtQixpQkFGZixhQUFhLGFBRGxCLFdBQVcsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCOytHQUc3QyxtQkFBbUIsWUFIcEIsV0FBVyxFQUFFLGVBQWUsRUFBRSxnQkFBZ0I7OzJGQUc3QyxtQkFBbUI7a0JBSi9CLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsV0FBVyxFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsQ0FBQztvQkFDekQsWUFBWSxFQUFFLENBQUMsYUFBYSxDQUFDO2lCQUM5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgTmd4VGlueW1jZU1vZHVsZSB9IGZyb20gJ25neC10aW55bWNlJztcblxuaW1wb3J0IHsgRGVsb25Gb3JtTW9kdWxlLCBXaWRnZXRSZWdpc3RyeSB9IGZyb20gJ0BkZWxvbi9mb3JtJztcblxuaW1wb3J0IHsgVGlueW1jZVdpZGdldCB9IGZyb20gJy4vd2lkZ2V0JztcblxuZXhwb3J0ICogZnJvbSAnLi93aWRnZXQnO1xuZXhwb3J0ICogZnJvbSAnLi9zY2hlbWEnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbRm9ybXNNb2R1bGUsIERlbG9uRm9ybU1vZHVsZSwgTmd4VGlueW1jZU1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1RpbnltY2VXaWRnZXRdXG59KVxuZXhwb3J0IGNsYXNzIFRpbnltY2VXaWRnZXRNb2R1bGUge1xuICBjb25zdHJ1Y3Rvcih3aWRnZXRSZWdpc3RyeTogV2lkZ2V0UmVnaXN0cnkpIHtcbiAgICB3aWRnZXRSZWdpc3RyeS5yZWdpc3RlcihUaW55bWNlV2lkZ2V0LktFWSwgVGlueW1jZVdpZGdldCk7XG4gIH1cbn1cbiJdfQ==