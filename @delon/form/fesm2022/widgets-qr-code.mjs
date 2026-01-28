import * as i0 from '@angular/core';
import { ViewEncapsulation, Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as i1 from '@delon/form';
import { ControlUIWidget, DelonFormModule } from '@delon/form';
import * as i2 from 'ng-zorro-antd/qr-code';
import { NzQRCodeModule } from 'ng-zorro-antd/qr-code';

class QrCodeWidget extends ControlUIWidget {
    static KEY = 'qr-code';
    refresh(qr) {
        this.setValue(qr);
        if (this.ui.refresh)
            this.ui.refresh(qr);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.1", ngImport: i0, type: QrCodeWidget, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.1.1", type: QrCodeWidget, isStandalone: true, selector: "sf-qr-code", usesInheritance: true, ngImport: i0, template: `<sf-item-wrap
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
  </sf-item-wrap>`, isInline: true, dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "ngmodule", type: DelonFormModule }, { kind: "component", type: i1.SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }, { kind: "ngmodule", type: NzQRCodeModule }, { kind: "component", type: i2.NzQRCodeComponent, selector: "nz-qrcode", inputs: ["nzValue", "nzType", "nzColor", "nzBgColor", "nzSize", "nzIcon", "nzIconSize", "nzBordered", "nzStatus", "nzLevel", "nzStatusRender", "nzBoostLevel", "nzPadding"], outputs: ["nzRefresh"], exportAs: ["nzQRCode"] }], encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.1", ngImport: i0, type: QrCodeWidget, decorators: [{
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
                    encapsulation: ViewEncapsulation.None,
                    imports: [FormsModule, DelonFormModule, NzQRCodeModule]
                }]
        }] });

class QrCodeWidgetModule {
    constructor(widgetRegistry) {
        widgetRegistry.register(QrCodeWidget.KEY, QrCodeWidget);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.1", ngImport: i0, type: QrCodeWidgetModule, deps: [{ token: i1.WidgetRegistry }], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "21.1.1", ngImport: i0, type: QrCodeWidgetModule, imports: [FormsModule, DelonFormModule, NzQRCodeModule, QrCodeWidget] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "21.1.1", ngImport: i0, type: QrCodeWidgetModule, imports: [FormsModule, DelonFormModule, NzQRCodeModule, QrCodeWidget] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.1", ngImport: i0, type: QrCodeWidgetModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [FormsModule, DelonFormModule, NzQRCodeModule, QrCodeWidget]
                }]
        }], ctorParameters: () => [{ type: i1.WidgetRegistry }] });

function withQrCodeWidget() {
    return { KEY: QrCodeWidget.KEY, type: QrCodeWidget };
}

/**
 * Generated bundle index. Do not edit.
 */

export { QrCodeWidget, QrCodeWidgetModule, withQrCodeWidget };
//# sourceMappingURL=widgets-qr-code.mjs.map
