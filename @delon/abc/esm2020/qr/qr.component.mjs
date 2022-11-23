import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { filter } from 'rxjs';
import { InputNumber } from '@delon/util/decorator';
import { QR_DEFULAT_CONFIG } from './qr.config';
import * as i0 from "@angular/core";
import * as i1 from "@delon/util/config";
import * as i2 from "@delon/util/other";
import * as i3 from "@angular/cdk/platform";
import * as i4 from "@angular/common";
export class QRComponent {
    constructor(cdr, configSrv, lazySrv, platform) {
        this.cdr = cdr;
        this.lazySrv = lazySrv;
        this.platform = platform;
        this.inited = false;
        this.value = '';
        this.change = new EventEmitter();
        this.cog = configSrv.merge('qr', QR_DEFULAT_CONFIG);
        Object.assign(this, this.cog);
    }
    init() {
        if (!this.inited) {
            return;
        }
        if (this.qr == null) {
            this.qr = new window.QRious();
        }
        this.qr.set(this.option);
        this.dataURL = this.qr.toDataURL();
        this.change.emit(this.dataURL);
        this.cdr.detectChanges();
    }
    initDelay() {
        this.inited = true;
        setTimeout(() => this.init(), this.delay);
    }
    ngAfterViewInit() {
        if (!this.platform.isBrowser) {
            return;
        }
        if (window.QRious) {
            this.initDelay();
            return;
        }
        const url = this.cog.lib;
        this.lazy$ = this.lazySrv.change
            .pipe(filter(ls => ls.length === 1 && ls[0].path === url && ls[0].status === 'ok'))
            .subscribe(() => this.initDelay());
        this.lazySrv.load(url);
    }
    ngOnChanges() {
        const option = {
            background: this.background,
            backgroundAlpha: this.backgroundAlpha,
            foreground: this.foreground,
            foregroundAlpha: this.foregroundAlpha,
            level: this.level,
            mime: this.mime,
            padding: this.padding,
            size: this.size,
            value: typeof this.value === 'function' ? this.value() : this.toUtf8ByteArray(this.value)
        };
        this.option = option;
        this.init();
    }
    toUtf8ByteArray(str) {
        str = encodeURI(str);
        const result = [];
        for (let i = 0; i < str.length; i++) {
            if (str.charAt(i) !== '%') {
                result.push(str.charCodeAt(i));
            }
            else {
                result.push(parseInt(str.substring(i + 1, 2), 16));
                i += 2;
            }
        }
        return result.map(v => String.fromCharCode(v)).join('');
    }
    ngOnDestroy() {
        if (this.lazy$) {
            this.lazy$.unsubscribe();
        }
    }
}
QRComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: QRComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i1.AlainConfigService }, { token: i2.LazyService }, { token: i3.Platform }], target: i0.ɵɵFactoryTarget.Component });
QRComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: QRComponent, selector: "qr", inputs: { background: "background", backgroundAlpha: "backgroundAlpha", foreground: "foreground", foregroundAlpha: "foregroundAlpha", level: "level", mime: "mime", padding: "padding", size: "size", value: "value", delay: "delay" }, outputs: { change: "change" }, host: { properties: { "style.display": "'inline-block'", "style.height.px": "size", "style.width.px": "size" } }, exportAs: ["qr"], usesOnChanges: true, ngImport: i0, template: ` <img *ngIf="dataURL" style="max-width: 100%; max-height: 100%;" [src]="dataURL" /> `, isInline: true, dependencies: [{ kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    InputNumber(null)
], QRComponent.prototype, "padding", void 0);
__decorate([
    InputNumber()
], QRComponent.prototype, "size", void 0);
__decorate([
    InputNumber()
], QRComponent.prototype, "delay", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: QRComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'qr',
                    exportAs: 'qr',
                    template: ` <img *ngIf="dataURL" style="max-width: 100%; max-height: 100%;" [src]="dataURL" /> `,
                    host: {
                        '[style.display]': `'inline-block'`,
                        '[style.height.px]': 'size',
                        '[style.width.px]': 'size'
                    },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.AlainConfigService }, { type: i2.LazyService }, { type: i3.Platform }]; }, propDecorators: { background: [{
                type: Input
            }], backgroundAlpha: [{
                type: Input
            }], foreground: [{
                type: Input
            }], foregroundAlpha: [{
                type: Input
            }], level: [{
                type: Input
            }], mime: [{
                type: Input
            }], padding: [{
                type: Input
            }], size: [{
                type: Input
            }], value: [{
                type: Input
            }], delay: [{
                type: Input
            }], change: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3FyL3FyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUVMLHVCQUF1QixFQUV2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBQ04saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBZ0IsTUFBTSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRzVDLE9BQU8sRUFBRSxXQUFXLEVBQWUsTUFBTSx1QkFBdUIsQ0FBQztBQUlqRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7OztBQWdCaEQsTUFBTSxPQUFPLFdBQVc7SUF5QnRCLFlBQ1UsR0FBc0IsRUFDOUIsU0FBNkIsRUFDckIsT0FBb0IsRUFDcEIsUUFBa0I7UUFIbEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFFdEIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtRQUNwQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBcEJwQixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBWWQsVUFBSyxHQUE0QixFQUFFLENBQUM7UUFFMUIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFRckQsSUFBSSxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxpQkFBaUIsQ0FBRSxDQUFDO1FBQ3JELE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRU8sSUFBSTtRQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLE9BQU87U0FDUjtRQUVELElBQUksSUFBSSxDQUFDLEVBQUUsSUFBSSxJQUFJLEVBQUU7WUFDbkIsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFLLE1BQW9CLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDOUM7UUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFTyxTQUFTO1FBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDNUIsT0FBTztTQUNSO1FBQ0QsSUFBSyxNQUFvQixDQUFDLE1BQU0sRUFBRTtZQUNoQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDakIsT0FBTztTQUNSO1FBQ0QsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU07YUFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLENBQUM7YUFDbEYsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxXQUFXO1FBQ1QsTUFBTSxNQUFNLEdBQWM7WUFDeEIsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNyQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1lBQ3JDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBa0I7WUFDOUIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLEtBQUssRUFBRSxPQUFPLElBQUksQ0FBQyxLQUFLLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUMxRixDQUFDO1FBQ0YsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUVPLGVBQWUsQ0FBQyxHQUFXO1FBQ2pDLEdBQUcsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckIsTUFBTSxNQUFNLEdBQWEsRUFBRSxDQUFDO1FBQzVCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ25DLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUU7Z0JBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2hDO2lCQUFNO2dCQUNMLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNuRCxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ1I7U0FDRjtRQUNELE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQzs7eUdBdkdVLFdBQVc7NkZBQVgsV0FBVywwY0FWWixzRkFBc0Y7QUE2QnBFO0lBQWxCLFdBQVcsQ0FBQyxJQUFJLENBQUM7NENBQWtCO0FBQ3JCO0lBQWQsV0FBVyxFQUFFO3lDQUFlO0FBRWQ7SUFBZCxXQUFXLEVBQUU7MENBQWdCOzRGQXRCNUIsV0FBVztrQkFidkIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsSUFBSTtvQkFDZCxRQUFRLEVBQUUsSUFBSTtvQkFDZCxRQUFRLEVBQUUsc0ZBQXNGO29CQUNoRyxJQUFJLEVBQUU7d0JBQ0osaUJBQWlCLEVBQUUsZ0JBQWdCO3dCQUNuQyxtQkFBbUIsRUFBRSxNQUFNO3dCQUMzQixrQkFBa0IsRUFBRSxNQUFNO3FCQUMzQjtvQkFDRCxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3RDOzBMQWNVLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csZUFBZTtzQkFBdkIsS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUNHLGVBQWU7c0JBQXZCLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDc0IsT0FBTztzQkFBbEMsS0FBSztnQkFDa0IsSUFBSTtzQkFBM0IsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ2tCLEtBQUs7c0JBQTVCLEtBQUs7Z0JBQ2EsTUFBTTtzQkFBeEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgZmlsdGVyIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEFsYWluQ29uZmlnU2VydmljZSwgQWxhaW5RUkNvbmZpZyB9IGZyb20gJ0BkZWxvbi91dGlsL2NvbmZpZyc7XG5pbXBvcnQgeyBJbnB1dE51bWJlciwgTnVtYmVySW5wdXQgfSBmcm9tICdAZGVsb24vdXRpbC9kZWNvcmF0b3InO1xuaW1wb3J0IHsgTGF6eVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbC9vdGhlcic7XG5pbXBvcnQgdHlwZSB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmltcG9ydCB7IFFSX0RFRlVMQVRfQ09ORklHIH0gZnJvbSAnLi9xci5jb25maWcnO1xuaW1wb3J0IHsgUVJPcHRpb25zIH0gZnJvbSAnLi9xci50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3FyJyxcbiAgZXhwb3J0QXM6ICdxcicsXG4gIHRlbXBsYXRlOiBgIDxpbWcgKm5nSWY9XCJkYXRhVVJMXCIgc3R5bGU9XCJtYXgtd2lkdGg6IDEwMCU7IG1heC1oZWlnaHQ6IDEwMCU7XCIgW3NyY109XCJkYXRhVVJMXCIgLz4gYCxcbiAgaG9zdDoge1xuICAgICdbc3R5bGUuZGlzcGxheV0nOiBgJ2lubGluZS1ibG9jaydgLFxuICAgICdbc3R5bGUuaGVpZ2h0LnB4XSc6ICdzaXplJyxcbiAgICAnW3N0eWxlLndpZHRoLnB4XSc6ICdzaXplJ1xuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgUVJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9wYWRkaW5nOiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3NpemU6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZGVsYXk6IE51bWJlcklucHV0O1xuXG4gIHByaXZhdGUgbGF6eSQ/OiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgcXI6IE56U2FmZUFueTtcbiAgcHJpdmF0ZSBjb2c6IEFsYWluUVJDb25maWc7XG4gIHByaXZhdGUgb3B0aW9uITogUVJPcHRpb25zO1xuICBwcml2YXRlIGluaXRlZCA9IGZhbHNlO1xuXG4gIGRhdGFVUkwhOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgYmFja2dyb3VuZD86IHN0cmluZztcbiAgQElucHV0KCkgYmFja2dyb3VuZEFscGhhPzogbnVtYmVyO1xuICBASW5wdXQoKSBmb3JlZ3JvdW5kPzogc3RyaW5nO1xuICBASW5wdXQoKSBmb3JlZ3JvdW5kQWxwaGE/OiBudW1iZXI7XG4gIEBJbnB1dCgpIGxldmVsPzogc3RyaW5nO1xuICBASW5wdXQoKSBtaW1lPzogc3RyaW5nO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIobnVsbCkgcGFkZGluZz86IG51bWJlcjtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgc2l6ZT86IG51bWJlcjtcbiAgQElucHV0KCkgdmFsdWU6IHN0cmluZyB8ICgoKSA9PiBzdHJpbmcpID0gJyc7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGRlbGF5PzogbnVtYmVyO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIGNvbmZpZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgbGF6eVNydjogTGF6eVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm1cbiAgKSB7XG4gICAgdGhpcy5jb2cgPSBjb25maWdTcnYubWVyZ2UoJ3FyJywgUVJfREVGVUxBVF9DT05GSUcpITtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIHRoaXMuY29nKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaW5pdGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucXIgPT0gbnVsbCkge1xuICAgICAgdGhpcy5xciA9IG5ldyAod2luZG93IGFzIE56U2FmZUFueSkuUVJpb3VzKCk7XG4gICAgfVxuICAgIHRoaXMucXIuc2V0KHRoaXMub3B0aW9uKTtcbiAgICB0aGlzLmRhdGFVUkwgPSB0aGlzLnFyLnRvRGF0YVVSTCgpO1xuICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcy5kYXRhVVJMKTtcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBwcml2YXRlIGluaXREZWxheSgpOiB2b2lkIHtcbiAgICB0aGlzLmluaXRlZCA9IHRydWU7XG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmluaXQoKSwgdGhpcy5kZWxheSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoKHdpbmRvdyBhcyBOelNhZmVBbnkpLlFSaW91cykge1xuICAgICAgdGhpcy5pbml0RGVsYXkoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdXJsID0gdGhpcy5jb2cubGliITtcbiAgICB0aGlzLmxhenkkID0gdGhpcy5sYXp5U3J2LmNoYW5nZVxuICAgICAgLnBpcGUoZmlsdGVyKGxzID0+IGxzLmxlbmd0aCA9PT0gMSAmJiBsc1swXS5wYXRoID09PSB1cmwgJiYgbHNbMF0uc3RhdHVzID09PSAnb2snKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5pbml0RGVsYXkoKSk7XG4gICAgdGhpcy5sYXp5U3J2LmxvYWQodXJsKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIGNvbnN0IG9wdGlvbjogUVJPcHRpb25zID0ge1xuICAgICAgYmFja2dyb3VuZDogdGhpcy5iYWNrZ3JvdW5kLFxuICAgICAgYmFja2dyb3VuZEFscGhhOiB0aGlzLmJhY2tncm91bmRBbHBoYSxcbiAgICAgIGZvcmVncm91bmQ6IHRoaXMuZm9yZWdyb3VuZCxcbiAgICAgIGZvcmVncm91bmRBbHBoYTogdGhpcy5mb3JlZ3JvdW5kQWxwaGEsXG4gICAgICBsZXZlbDogdGhpcy5sZXZlbCBhcyBOelNhZmVBbnksXG4gICAgICBtaW1lOiB0aGlzLm1pbWUsXG4gICAgICBwYWRkaW5nOiB0aGlzLnBhZGRpbmcsXG4gICAgICBzaXplOiB0aGlzLnNpemUsXG4gICAgICB2YWx1ZTogdHlwZW9mIHRoaXMudmFsdWUgPT09ICdmdW5jdGlvbicgPyB0aGlzLnZhbHVlKCkgOiB0aGlzLnRvVXRmOEJ5dGVBcnJheSh0aGlzLnZhbHVlKVxuICAgIH07XG4gICAgdGhpcy5vcHRpb24gPSBvcHRpb247XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBwcml2YXRlIHRvVXRmOEJ5dGVBcnJheShzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgc3RyID0gZW5jb2RlVVJJKHN0cik7XG4gICAgY29uc3QgcmVzdWx0OiBudW1iZXJbXSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoc3RyLmNoYXJBdChpKSAhPT0gJyUnKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHBhcnNlSW50KHN0ci5zdWJzdHJpbmcoaSArIDEsIDIpLCAxNikpO1xuICAgICAgICBpICs9IDI7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQubWFwKHYgPT4gU3RyaW5nLmZyb21DaGFyQ29kZSh2KSkuam9pbignJyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5sYXp5JCkge1xuICAgICAgdGhpcy5sYXp5JC51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19