import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DelonFormModule } from '@delon/form';
import { NzColorPickerModule } from 'ng-zorro-antd/color-picker';
import { ColorWidget } from './widget';
import * as i0 from "@angular/core";
import * as i1 from "@delon/form";
export class ColorWidgetModule {
    constructor(widgetRegistry) {
        widgetRegistry.register(ColorWidget.KEY, ColorWidget);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: ColorWidgetModule, deps: [{ token: i1.WidgetRegistry }], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.1.0", ngImport: i0, type: ColorWidgetModule, imports: [FormsModule, CommonModule, DelonFormModule, NzColorPickerModule, ColorWidget] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: ColorWidgetModule, imports: [FormsModule, CommonModule, DelonFormModule, NzColorPickerModule, ColorWidget] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: ColorWidgetModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [FormsModule, CommonModule, DelonFormModule, NzColorPickerModule, ColorWidget]
                }]
        }], ctorParameters: () => [{ type: i1.WidgetRegistry }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS93aWRnZXRzL2NvbG9yL21vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLGVBQWUsRUFBa0IsTUFBTSxhQUFhLENBQUM7QUFDOUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFakUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQzs7O0FBS3ZDLE1BQU0sT0FBTyxpQkFBaUI7SUFDNUIsWUFBWSxjQUE4QjtRQUN4QyxjQUFjLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDeEQsQ0FBQzs4R0FIVSxpQkFBaUI7K0dBQWpCLGlCQUFpQixZQUZsQixXQUFXLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxtQkFBbUIsRUFBRSxXQUFXOytHQUUzRSxpQkFBaUIsWUFGbEIsV0FBVyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsbUJBQW1CLEVBQUUsV0FBVzs7MkZBRTNFLGlCQUFpQjtrQkFIN0IsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxtQkFBbUIsRUFBRSxXQUFXLENBQUM7aUJBQ3hGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgRGVsb25Gb3JtTW9kdWxlLCBXaWRnZXRSZWdpc3RyeSB9IGZyb20gJ0BkZWxvbi9mb3JtJztcbmltcG9ydCB7IE56Q29sb3JQaWNrZXJNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvbG9yLXBpY2tlcic7XG5cbmltcG9ydCB7IENvbG9yV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbRm9ybXNNb2R1bGUsIENvbW1vbk1vZHVsZSwgRGVsb25Gb3JtTW9kdWxlLCBOekNvbG9yUGlja2VyTW9kdWxlLCBDb2xvcldpZGdldF1cbn0pXG5leHBvcnQgY2xhc3MgQ29sb3JXaWRnZXRNb2R1bGUge1xuICBjb25zdHJ1Y3Rvcih3aWRnZXRSZWdpc3RyeTogV2lkZ2V0UmVnaXN0cnkpIHtcbiAgICB3aWRnZXRSZWdpc3RyeS5yZWdpc3RlcihDb2xvcldpZGdldC5LRVksIENvbG9yV2lkZ2V0KTtcbiAgfVxufVxuIl19