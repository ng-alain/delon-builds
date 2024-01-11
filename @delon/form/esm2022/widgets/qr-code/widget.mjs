import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ControlUIWidget, DelonFormModule } from '@delon/form';
import { NzQRCodeModule } from 'ng-zorro-antd/qr-code';
import * as i0 from "@angular/core";
import * as i1 from "@delon/form";
import * as i2 from "ng-zorro-antd/qr-code";
export class QrCodeWidget extends ControlUIWidget {
    static { this.KEY = 'qr-code'; }
    refresh(qr) {
        this.setValue(qr);
        if (this.ui.refresh)
            this.ui.refresh(qr);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: QrCodeWidget, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.9", type: QrCodeWidget, isStandalone: true, selector: "sf-qr-code", usesInheritance: true, ngImport: i0, template: `<sf-item-wrap
    [id]="id"
    [schema]="schema"
    [ui]="ui"
    [showError]="showError"
    [error]="error"
    [showTitle]="schema.title"
  >
    <nz-qrcode
      [nzValue]="value"
      [nzPadding]="ui.padding ?? 0"
      [nzColor]="ui.color ?? '#000'"
      [nzBgColor]="ui.bgColor ?? '#FFF'"
      [nzSize]="ui.qrSize ?? 160"
      [nzIcon]="ui.icon ?? ''"
      [nzIconSize]="ui.iconSize ?? 40"
      [nzBordered]="ui.bordered ?? false"
      [nzStatus]="ui.status ?? 'active'"
      [nzLevel]="ui.level ?? 'M'"
      (nzRefresh)="refresh($event)"
    />
  </sf-item-wrap>`, isInline: true, dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "ngmodule", type: DelonFormModule }, { kind: "component", type: i1.SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }, { kind: "ngmodule", type: NzQRCodeModule }, { kind: "component", type: i2.NzQRCodeComponent, selector: "nz-qrcode", inputs: ["nzValue", "nzPadding", "nzColor", "nzBgColor", "nzSize", "nzIcon", "nzIconSize", "nzBordered", "nzStatus", "nzLevel"], outputs: ["nzRefresh"], exportAs: ["nzQRCode"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: QrCodeWidget, decorators: [{
            type: Component,
            args: [{
                    selector: 'sf-qr-code',
                    template: `<sf-item-wrap
    [id]="id"
    [schema]="schema"
    [ui]="ui"
    [showError]="showError"
    [error]="error"
    [showTitle]="schema.title"
  >
    <nz-qrcode
      [nzValue]="value"
      [nzPadding]="ui.padding ?? 0"
      [nzColor]="ui.color ?? '#000'"
      [nzBgColor]="ui.bgColor ?? '#FFF'"
      [nzSize]="ui.qrSize ?? 160"
      [nzIcon]="ui.icon ?? ''"
      [nzIconSize]="ui.iconSize ?? 40"
      [nzBordered]="ui.bordered ?? false"
      [nzStatus]="ui.status ?? 'active'"
      [nzLevel]="ui.level ?? 'M'"
      (nzRefresh)="refresh($event)"
    />
  </sf-item-wrap>`,
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    standalone: true,
                    imports: [FormsModule, DelonFormModule, NzQRCodeModule]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS93aWRnZXRzL3FyLWNvZGUvd2lkZ2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7OztBQWlDdkQsTUFBTSxPQUFPLFlBQWEsU0FBUSxlQUFxQzthQUNyRCxRQUFHLEdBQUcsU0FBUyxBQUFaLENBQWE7SUFFaEMsT0FBTyxDQUFDLEVBQVU7UUFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNsQixJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTztZQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzNDLENBQUM7OEdBTlUsWUFBWTtrR0FBWixZQUFZLDZGQTNCYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQXFCTSwyREFJTixXQUFXLDhCQUFFLGVBQWUseUxBQUUsY0FBYzs7MkZBRTNDLFlBQVk7a0JBN0J4QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkFxQk07b0JBQ2hCLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxVQUFVLEVBQUUsSUFBSTtvQkFDaEIsT0FBTyxFQUFFLENBQUMsV0FBVyxFQUFFLGVBQWUsRUFBRSxjQUFjLENBQUM7aUJBQ3hEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IENvbnRyb2xVSVdpZGdldCwgRGVsb25Gb3JtTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2Zvcm0nO1xuaW1wb3J0IHsgTnpRUkNvZGVNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3FyLWNvZGUnO1xuXG5pbXBvcnQgdHlwZSB7IFNGUXJDb2RlV2lkZ2V0U2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1xci1jb2RlJyxcbiAgdGVtcGxhdGU6IGA8c2YtaXRlbS13cmFwXG4gICAgW2lkXT1cImlkXCJcbiAgICBbc2NoZW1hXT1cInNjaGVtYVwiXG4gICAgW3VpXT1cInVpXCJcbiAgICBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiXG4gICAgW2Vycm9yXT1cImVycm9yXCJcbiAgICBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiXG4gID5cbiAgICA8bnotcXJjb2RlXG4gICAgICBbbnpWYWx1ZV09XCJ2YWx1ZVwiXG4gICAgICBbbnpQYWRkaW5nXT1cInVpLnBhZGRpbmcgPz8gMFwiXG4gICAgICBbbnpDb2xvcl09XCJ1aS5jb2xvciA/PyAnIzAwMCdcIlxuICAgICAgW256QmdDb2xvcl09XCJ1aS5iZ0NvbG9yID8/ICcjRkZGJ1wiXG4gICAgICBbbnpTaXplXT1cInVpLnFyU2l6ZSA/PyAxNjBcIlxuICAgICAgW256SWNvbl09XCJ1aS5pY29uID8/ICcnXCJcbiAgICAgIFtuekljb25TaXplXT1cInVpLmljb25TaXplID8/IDQwXCJcbiAgICAgIFtuekJvcmRlcmVkXT1cInVpLmJvcmRlcmVkID8/IGZhbHNlXCJcbiAgICAgIFtuelN0YXR1c109XCJ1aS5zdGF0dXMgPz8gJ2FjdGl2ZSdcIlxuICAgICAgW256TGV2ZWxdPVwidWkubGV2ZWwgPz8gJ00nXCJcbiAgICAgIChuelJlZnJlc2gpPVwicmVmcmVzaCgkZXZlbnQpXCJcbiAgICAvPlxuICA8L3NmLWl0ZW0td3JhcD5gLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0Zvcm1zTW9kdWxlLCBEZWxvbkZvcm1Nb2R1bGUsIE56UVJDb2RlTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBRckNvZGVXaWRnZXQgZXh0ZW5kcyBDb250cm9sVUlXaWRnZXQ8U0ZRckNvZGVXaWRnZXRTY2hlbWE+IHtcbiAgc3RhdGljIHJlYWRvbmx5IEtFWSA9ICdxci1jb2RlJztcblxuICByZWZyZXNoKHFyOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnNldFZhbHVlKHFyKTtcbiAgICBpZiAodGhpcy51aS5yZWZyZXNoKSB0aGlzLnVpLnJlZnJlc2gocXIpO1xuICB9XG59XG4iXX0=