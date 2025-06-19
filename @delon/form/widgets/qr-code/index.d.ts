import * as i2 from '@delon/form';
import { SFUISchemaItem, ControlUIWidget, WidgetRegistry, SFWidgetProvideConfig } from '@delon/form';
import * as i0 from '@angular/core';
import * as i1 from '@angular/forms';
import * as i3 from 'ng-zorro-antd/qr-code';

interface SFQrCodeWidgetSchema extends SFUISchemaItem {
    /** QR code Padding */
    padding?: number;
    /** QR code Color */
    color?: string;
    /** QR code background color */
    bgColor?: string;
    /** QR code Size */
    qrSize?: number;
    /** Icon address in QR code */
    icon?: string;
    /** The size of the icon in the QR code */
    iconSize?: number;
    /** Whether has border style */
    bordered?: boolean;
    /** QR code status */
    status?: 'active' | 'expired' | 'loading';
    /** Error Code Level */
    level?: 'L' | 'M' | 'Q' | 'H';
    /** Callback */
    refresh?: (qr: string) => void;
}

declare class QrCodeWidget extends ControlUIWidget<SFQrCodeWidgetSchema> {
    static readonly KEY = "qr-code";
    refresh(qr: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<QrCodeWidget, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<QrCodeWidget, "sf-qr-code", never, {}, {}, never, never, true, never>;
}

declare class QrCodeWidgetModule {
    constructor(widgetRegistry: WidgetRegistry);
    static ɵfac: i0.ɵɵFactoryDeclaration<QrCodeWidgetModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<QrCodeWidgetModule, never, [typeof i1.FormsModule, typeof i2.DelonFormModule, typeof i3.NzQRCodeModule, typeof QrCodeWidget], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<QrCodeWidgetModule>;
}

declare function withQrCodeWidget(): SFWidgetProvideConfig;

export { QrCodeWidget, QrCodeWidgetModule, withQrCodeWidget };
export type { SFQrCodeWidgetSchema };
