import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DelonFormModule } from '@delon/form';
import { NzQRCodeModule } from 'ng-zorro-antd/qr-code';
import { QrCodeWidget } from './widget';
import * as i0 from "@angular/core";
import * as i1 from "@delon/form";
export class QrCodeWidgetModule {
    constructor(widgetRegistry) {
        widgetRegistry.register(QrCodeWidget.KEY, QrCodeWidget);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.11", ngImport: i0, type: QrCodeWidgetModule, deps: [{ token: i1.WidgetRegistry }], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.11", ngImport: i0, type: QrCodeWidgetModule, imports: [FormsModule, DelonFormModule, NzQRCodeModule, QrCodeWidget] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.11", ngImport: i0, type: QrCodeWidgetModule, imports: [FormsModule, DelonFormModule, NzQRCodeModule, QrCodeWidget] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.11", ngImport: i0, type: QrCodeWidgetModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [FormsModule, DelonFormModule, NzQRCodeModule, QrCodeWidget]
                }]
        }], ctorParameters: () => [{ type: i1.WidgetRegistry }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS93aWRnZXRzL3FyLWNvZGUvbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxlQUFlLEVBQWtCLE1BQU0sYUFBYSxDQUFDO0FBQzlELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sVUFBVSxDQUFDOzs7QUFLeEMsTUFBTSxPQUFPLGtCQUFrQjtJQUM3QixZQUFZLGNBQThCO1FBQ3hDLGNBQWMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUMxRCxDQUFDOytHQUhVLGtCQUFrQjtnSEFBbEIsa0JBQWtCLFlBRm5CLFdBQVcsRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLFlBQVk7Z0hBRXpELGtCQUFrQixZQUZuQixXQUFXLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxZQUFZOzs0RkFFekQsa0JBQWtCO2tCQUg5QixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFdBQVcsRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLFlBQVksQ0FBQztpQkFDdEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IERlbG9uRm9ybU1vZHVsZSwgV2lkZ2V0UmVnaXN0cnkgfSBmcm9tICdAZGVsb24vZm9ybSc7XG5pbXBvcnQgeyBOelFSQ29kZU1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvcXItY29kZSc7XG5cbmltcG9ydCB7IFFyQ29kZVdpZGdldCB9IGZyb20gJy4vd2lkZ2V0JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0Zvcm1zTW9kdWxlLCBEZWxvbkZvcm1Nb2R1bGUsIE56UVJDb2RlTW9kdWxlLCBRckNvZGVXaWRnZXRdXG59KVxuZXhwb3J0IGNsYXNzIFFyQ29kZVdpZGdldE1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKHdpZGdldFJlZ2lzdHJ5OiBXaWRnZXRSZWdpc3RyeSkge1xuICAgIHdpZGdldFJlZ2lzdHJ5LnJlZ2lzdGVyKFFyQ29kZVdpZGdldC5LRVksIFFyQ29kZVdpZGdldCk7XG4gIH1cbn1cbiJdfQ==