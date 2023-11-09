import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DelonFormModule } from '@delon/form';
import { NzQRCodeModule } from 'ng-zorro-antd/qr-code';
import { QrCodeWidget } from './widget';
import * as i0 from "@angular/core";
import * as i1 from "@delon/form";
export * from './widget';
export * from './schema';
export class QrCodeWidgetModule {
    constructor(widgetRegistry) {
        widgetRegistry.register(QrCodeWidget.KEY, QrCodeWidget);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.1", ngImport: i0, type: QrCodeWidgetModule, deps: [{ token: i1.WidgetRegistry }], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.0.1", ngImport: i0, type: QrCodeWidgetModule, declarations: [QrCodeWidget], imports: [FormsModule, DelonFormModule, NzQRCodeModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.0.1", ngImport: i0, type: QrCodeWidgetModule, imports: [FormsModule, DelonFormModule, NzQRCodeModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.1", ngImport: i0, type: QrCodeWidgetModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [FormsModule, DelonFormModule, NzQRCodeModule],
                    declarations: [QrCodeWidget]
                }]
        }], ctorParameters: () => [{ type: i1.WidgetRegistry }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3dpZGdldHMvcXItY29kZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsZUFBZSxFQUFrQixNQUFNLGFBQWEsQ0FBQztBQUM5RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLFVBQVUsQ0FBQzs7O0FBRXhDLGNBQWMsVUFBVSxDQUFDO0FBQ3pCLGNBQWMsVUFBVSxDQUFDO0FBTXpCLE1BQU0sT0FBTyxrQkFBa0I7SUFDN0IsWUFBWSxjQUE4QjtRQUN4QyxjQUFjLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDMUQsQ0FBQzs4R0FIVSxrQkFBa0I7K0dBQWxCLGtCQUFrQixpQkFGZCxZQUFZLGFBRGpCLFdBQVcsRUFBRSxlQUFlLEVBQUUsY0FBYzsrR0FHM0Msa0JBQWtCLFlBSG5CLFdBQVcsRUFBRSxlQUFlLEVBQUUsY0FBYzs7MkZBRzNDLGtCQUFrQjtrQkFKOUIsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsZUFBZSxFQUFFLGNBQWMsQ0FBQztvQkFDdkQsWUFBWSxFQUFFLENBQUMsWUFBWSxDQUFDO2lCQUM3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgRGVsb25Gb3JtTW9kdWxlLCBXaWRnZXRSZWdpc3RyeSB9IGZyb20gJ0BkZWxvbi9mb3JtJztcbmltcG9ydCB7IE56UVJDb2RlTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9xci1jb2RlJztcblxuaW1wb3J0IHsgUXJDb2RlV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXQnO1xuXG5leHBvcnQgKiBmcm9tICcuL3dpZGdldCc7XG5leHBvcnQgKiBmcm9tICcuL3NjaGVtYSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtGb3Jtc01vZHVsZSwgRGVsb25Gb3JtTW9kdWxlLCBOelFSQ29kZU1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1FyQ29kZVdpZGdldF1cbn0pXG5leHBvcnQgY2xhc3MgUXJDb2RlV2lkZ2V0TW9kdWxlIHtcbiAgY29uc3RydWN0b3Iod2lkZ2V0UmVnaXN0cnk6IFdpZGdldFJlZ2lzdHJ5KSB7XG4gICAgd2lkZ2V0UmVnaXN0cnkucmVnaXN0ZXIoUXJDb2RlV2lkZ2V0LktFWSwgUXJDb2RlV2lkZ2V0KTtcbiAgfVxufVxuIl19