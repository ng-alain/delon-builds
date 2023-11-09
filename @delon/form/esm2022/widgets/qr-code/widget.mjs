import { Component, ViewEncapsulation } from '@angular/core';
import { ControlUIWidget } from '@delon/form';
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: QrCodeWidget, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: QrCodeWidget, selector: "sf-qr-code", usesInheritance: true, ngImport: i0, template: `<sf-item-wrap
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
  </sf-item-wrap>`, isInline: true, dependencies: [{ kind: "component", type: i1.SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }, { kind: "component", type: i2.NzQRCodeComponent, selector: "nz-qrcode", inputs: ["nzValue", "nzPadding", "nzColor", "nzBgColor", "nzSize", "nzIcon", "nzIconSize", "nzBordered", "nzStatus", "nzLevel"], outputs: ["nzRefresh"], exportAs: ["nzQRCode"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: QrCodeWidget, decorators: [{
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
                    encapsulation: ViewEncapsulation.None
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS93aWRnZXRzL3FyLWNvZGUvd2lkZ2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7OztBQStCOUMsTUFBTSxPQUFPLFlBQWEsU0FBUSxlQUFxQzthQUNyRCxRQUFHLEdBQUcsU0FBUyxBQUFaLENBQWE7SUFFaEMsT0FBTyxDQUFDLEVBQVU7UUFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNsQixJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTztZQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzNDLENBQUM7K0dBTlUsWUFBWTttR0FBWixZQUFZLHlFQXpCYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQXFCTTs7NEZBSUwsWUFBWTtrQkEzQnhCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQXFCTTtvQkFDaEIsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb250cm9sVUlXaWRnZXQgfSBmcm9tICdAZGVsb24vZm9ybSc7XG5cbmltcG9ydCB0eXBlIHsgU0ZRckNvZGVXaWRnZXRTY2hlbWEgfSBmcm9tICcuL3NjaGVtYSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXFyLWNvZGUnLFxuICB0ZW1wbGF0ZTogYDxzZi1pdGVtLXdyYXBcbiAgICBbaWRdPVwiaWRcIlxuICAgIFtzY2hlbWFdPVwic2NoZW1hXCJcbiAgICBbdWldPVwidWlcIlxuICAgIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCJcbiAgICBbZXJyb3JdPVwiZXJyb3JcIlxuICAgIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCJcbiAgPlxuICAgIDxuei1xcmNvZGVcbiAgICAgIFtuelZhbHVlXT1cInZhbHVlXCJcbiAgICAgIFtuelBhZGRpbmddPVwidWkucGFkZGluZyA/PyAwXCJcbiAgICAgIFtuekNvbG9yXT1cInVpLmNvbG9yID8/ICcjMDAwJ1wiXG4gICAgICBbbnpCZ0NvbG9yXT1cInVpLmJnQ29sb3IgPz8gJyNGRkYnXCJcbiAgICAgIFtuelNpemVdPVwidWkucXJTaXplID8/IDE2MFwiXG4gICAgICBbbnpJY29uXT1cInVpLmljb24gPz8gJydcIlxuICAgICAgW256SWNvblNpemVdPVwidWkuaWNvblNpemUgPz8gNDBcIlxuICAgICAgW256Qm9yZGVyZWRdPVwidWkuYm9yZGVyZWQgPz8gZmFsc2VcIlxuICAgICAgW256U3RhdHVzXT1cInVpLnN0YXR1cyA/PyAnYWN0aXZlJ1wiXG4gICAgICBbbnpMZXZlbF09XCJ1aS5sZXZlbCA/PyAnTSdcIlxuICAgICAgKG56UmVmcmVzaCk9XCJyZWZyZXNoKCRldmVudClcIlxuICAgIC8+XG4gIDwvc2YtaXRlbS13cmFwPmAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFFyQ29kZVdpZGdldCBleHRlbmRzIENvbnRyb2xVSVdpZGdldDxTRlFyQ29kZVdpZGdldFNjaGVtYT4ge1xuICBzdGF0aWMgcmVhZG9ubHkgS0VZID0gJ3FyLWNvZGUnO1xuXG4gIHJlZnJlc2gocXI6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc2V0VmFsdWUocXIpO1xuICAgIGlmICh0aGlzLnVpLnJlZnJlc2gpIHRoaXMudWkucmVmcmVzaChxcik7XG4gIH1cbn1cbiJdfQ==