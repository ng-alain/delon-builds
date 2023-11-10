import { ControlUIWidget } from '@delon/form';
import type { SFQrCodeWidgetSchema } from './schema';
import * as i0 from "@angular/core";
export declare class QrCodeWidget extends ControlUIWidget<SFQrCodeWidgetSchema> {
    static readonly KEY = "qr-code";
    refresh(qr: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<QrCodeWidget, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<QrCodeWidget, "sf-qr-code", never, {}, {}, never, never, false, never>;
}
