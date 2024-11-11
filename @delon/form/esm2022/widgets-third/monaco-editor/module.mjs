import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NuMonacoEditorModule } from '@ng-util/monaco-editor';
import { DelonFormModule } from '@delon/form';
import { MonacoEditorWidget } from './widget';
import * as i0 from "@angular/core";
import * as i1 from "@delon/form";
export class MonacoEditorWidgetModule {
    constructor(widgetRegistry) {
        widgetRegistry.register(MonacoEditorWidget.KEY, MonacoEditorWidget);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.11", ngImport: i0, type: MonacoEditorWidgetModule, deps: [{ token: i1.WidgetRegistry }], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.11", ngImport: i0, type: MonacoEditorWidgetModule, imports: [FormsModule, DelonFormModule, NuMonacoEditorModule, MonacoEditorWidget] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.11", ngImport: i0, type: MonacoEditorWidgetModule, imports: [FormsModule, DelonFormModule, NuMonacoEditorModule, MonacoEditorWidget] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.11", ngImport: i0, type: MonacoEditorWidgetModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [FormsModule, DelonFormModule, NuMonacoEditorModule, MonacoEditorWidget]
                }]
        }], ctorParameters: () => [{ type: i1.WidgetRegistry }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS93aWRnZXRzLXRoaXJkL21vbmFjby1lZGl0b3IvbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTlELE9BQU8sRUFBRSxlQUFlLEVBQWtCLE1BQU0sYUFBYSxDQUFDO0FBRTlELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLFVBQVUsQ0FBQzs7O0FBSzlDLE1BQU0sT0FBTyx3QkFBd0I7SUFDbkMsWUFBWSxjQUE4QjtRQUN4QyxjQUFjLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7K0dBSFUsd0JBQXdCO2dIQUF4Qix3QkFBd0IsWUFGekIsV0FBVyxFQUFFLGVBQWUsRUFBRSxvQkFBb0IsRUFBRSxrQkFBa0I7Z0hBRXJFLHdCQUF3QixZQUZ6QixXQUFXLEVBQUUsZUFBZSxFQUFFLG9CQUFvQixFQUFFLGtCQUFrQjs7NEZBRXJFLHdCQUF3QjtrQkFIcEMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsZUFBZSxFQUFFLG9CQUFvQixFQUFFLGtCQUFrQixDQUFDO2lCQUNsRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgTnVNb25hY29FZGl0b3JNb2R1bGUgfSBmcm9tICdAbmctdXRpbC9tb25hY28tZWRpdG9yJztcblxuaW1wb3J0IHsgRGVsb25Gb3JtTW9kdWxlLCBXaWRnZXRSZWdpc3RyeSB9IGZyb20gJ0BkZWxvbi9mb3JtJztcblxuaW1wb3J0IHsgTW9uYWNvRWRpdG9yV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbRm9ybXNNb2R1bGUsIERlbG9uRm9ybU1vZHVsZSwgTnVNb25hY29FZGl0b3JNb2R1bGUsIE1vbmFjb0VkaXRvcldpZGdldF1cbn0pXG5leHBvcnQgY2xhc3MgTW9uYWNvRWRpdG9yV2lkZ2V0TW9kdWxlIHtcbiAgY29uc3RydWN0b3Iod2lkZ2V0UmVnaXN0cnk6IFdpZGdldFJlZ2lzdHJ5KSB7XG4gICAgd2lkZ2V0UmVnaXN0cnkucmVnaXN0ZXIoTW9uYWNvRWRpdG9yV2lkZ2V0LktFWSwgTW9uYWNvRWRpdG9yV2lkZ2V0KTtcbiAgfVxufVxuIl19