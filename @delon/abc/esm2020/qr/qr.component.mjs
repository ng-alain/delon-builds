import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { filter } from 'rxjs/operators';
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
QRComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.5", ngImport: i0, type: QRComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i1.AlainConfigService }, { token: i2.LazyService }, { token: i3.Platform }], target: i0.ɵɵFactoryTarget.Component });
QRComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.5", type: QRComponent, selector: "qr", inputs: { background: "background", backgroundAlpha: "backgroundAlpha", foreground: "foreground", foregroundAlpha: "foregroundAlpha", level: "level", mime: "mime", padding: "padding", size: "size", value: "value", delay: "delay" }, outputs: { change: "change" }, host: { properties: { "style.display": "'inline-block'", "style.height.px": "size", "style.width.px": "size" } }, exportAs: ["qr"], usesOnChanges: true, ngImport: i0, template: ` <img *ngIf="dataURL" style="max-width: 100%; max-height: 100%;" [src]="dataURL" /> `, isInline: true, directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    InputNumber()
], QRComponent.prototype, "padding", void 0);
__decorate([
    InputNumber()
], QRComponent.prototype, "size", void 0);
__decorate([
    InputNumber()
], QRComponent.prototype, "delay", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.5", ngImport: i0, type: QRComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3FyL3FyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUVMLHVCQUF1QixFQUV2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBQ04saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUd4QyxPQUFPLEVBQUUsV0FBVyxFQUFlLE1BQU0sdUJBQXVCLENBQUM7QUFJakUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sYUFBYSxDQUFDOzs7Ozs7QUFnQmhELE1BQU0sT0FBTyxXQUFXO0lBeUJ0QixZQUNVLEdBQXNCLEVBQzlCLFNBQTZCLEVBQ3JCLE9BQW9CLEVBQ3BCLFFBQWtCO1FBSGxCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBRXRCLFlBQU8sR0FBUCxPQUFPLENBQWE7UUFDcEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQXBCcEIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQVlkLFVBQUssR0FBNEIsRUFBRSxDQUFDO1FBRTFCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBUXJELElBQUksQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLENBQUUsQ0FBQztRQUNyRCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVPLElBQUk7UUFDVixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNoQixPQUFPO1NBQ1I7UUFFRCxJQUFJLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSSxFQUFFO1lBQ25CLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSyxNQUFvQixDQUFD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QUEzQixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDa0IsS0FBSztzQkFBNUIsS0FBSztnQkFDYSxNQUFNO3NCQUF4QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEFsYWluQ29uZmlnU2VydmljZSwgQWxhaW5RUkNvbmZpZyB9IGZyb20gJ0BkZWxvbi91dGlsL2NvbmZpZyc7XG5pbXBvcnQgeyBJbnB1dE51bWJlciwgTnVtYmVySW5wdXQgfSBmcm9tICdAZGVsb24vdXRpbC9kZWNvcmF0b3InO1xuaW1wb3J0IHsgTGF6eVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbC9vdGhlcic7XG5pbXBvcnQgdHlwZSB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmltcG9ydCB7IFFSX0RFRlVMQVRfQ09ORklHIH0gZnJvbSAnLi9xci5jb25maWcnO1xuaW1wb3J0IHsgUVJPcHRpb25zIH0gZnJvbSAnLi9xci50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3FyJyxcbiAgZXhwb3J0QXM6ICdxcicsXG4gIHRlbXBsYXRlOiBgIDxpbWcgKm5nSWY9XCJkYXRhVVJMXCIgc3R5bGU9XCJtYXgtd2lkdGg6IDEwMCU7IG1heC1oZWlnaHQ6IDEwMCU7XCIgW3NyY109XCJkYXRhVVJMXCIgLz4gYCxcbiAgaG9zdDoge1xuICAgICdbc3R5bGUuZGlzcGxheV0nOiBgJ2lubGluZS1ibG9jaydgLFxuICAgICdbc3R5bGUuaGVpZ2h0LnB4XSc6ICdzaXplJyxcbiAgICAnW3N0eWxlLndpZHRoLnB4XSc6ICdzaXplJ1xuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgUVJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9wYWRkaW5nOiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3NpemU6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZGVsYXk6IE51bWJlcklucHV0O1xuXG4gIHByaXZhdGUgbGF6eSQ/OiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgcXI6IE56U2FmZUFueTtcbiAgcHJpdmF0ZSBjb2c6IEFsYWluUVJDb25maWc7XG4gIHByaXZhdGUgb3B0aW9uITogUVJPcHRpb25zO1xuICBwcml2YXRlIGluaXRlZCA9IGZhbHNlO1xuXG4gIGRhdGFVUkwhOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgYmFja2dyb3VuZD86IHN0cmluZztcbiAgQElucHV0KCkgYmFja2dyb3VuZEFscGhhPzogbnVtYmVyO1xuICBASW5wdXQoKSBmb3JlZ3JvdW5kPzogc3RyaW5nO1xuICBASW5wdXQoKSBmb3JlZ3JvdW5kQWxwaGE/OiBudW1iZXI7XG4gIEBJbnB1dCgpIGxldmVsPzogc3RyaW5nO1xuICBASW5wdXQoKSBtaW1lPzogc3RyaW5nO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBwYWRkaW5nPzogbnVtYmVyO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBzaXplPzogbnVtYmVyO1xuICBASW5wdXQoKSB2YWx1ZTogc3RyaW5nIHwgKCgpID0+IHN0cmluZykgPSAnJztcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgZGVsYXk/OiBudW1iZXI7XG4gIEBPdXRwdXQoKSByZWFkb25seSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgY29uZmlnU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBsYXp5U3J2OiBMYXp5U2VydmljZSxcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybVxuICApIHtcbiAgICB0aGlzLmNvZyA9IGNvbmZpZ1Nydi5tZXJnZSgncXInLCBRUl9ERUZVTEFUX0NPTkZJRykhO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgdGhpcy5jb2cpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pbml0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5xciA9PSBudWxsKSB7XG4gICAgICB0aGlzLnFyID0gbmV3ICh3aW5kb3cgYXMgTnpTYWZlQW55KS5RUmlvdXMoKTtcbiAgICB9XG4gICAgdGhpcy5xci5zZXQodGhpcy5vcHRpb24pO1xuICAgIHRoaXMuZGF0YVVSTCA9IHRoaXMucXIudG9EYXRhVVJMKCk7XG4gICAgdGhpcy5jaGFuZ2UuZW1pdCh0aGlzLmRhdGFVUkwpO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdERlbGF5KCk6IHZvaWQge1xuICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5pdCgpLCB0aGlzLmRlbGF5KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICgod2luZG93IGFzIE56U2FmZUFueSkuUVJpb3VzKSB7XG4gICAgICB0aGlzLmluaXREZWxheSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB1cmwgPSB0aGlzLmNvZy5saWIhO1xuICAgIHRoaXMubGF6eSQgPSB0aGlzLmxhenlTcnYuY2hhbmdlXG4gICAgICAucGlwZShmaWx0ZXIobHMgPT4gbHMubGVuZ3RoID09PSAxICYmIGxzWzBdLnBhdGggPT09IHVybCAmJiBsc1swXS5zdGF0dXMgPT09ICdvaycpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmluaXREZWxheSgpKTtcbiAgICB0aGlzLmxhenlTcnYubG9hZCh1cmwpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgY29uc3Qgb3B0aW9uOiBRUk9wdGlvbnMgPSB7XG4gICAgICBiYWNrZ3JvdW5kOiB0aGlzLmJhY2tncm91bmQsXG4gICAgICBiYWNrZ3JvdW5kQWxwaGE6IHRoaXMuYmFja2dyb3VuZEFscGhhLFxuICAgICAgZm9yZWdyb3VuZDogdGhpcy5mb3JlZ3JvdW5kLFxuICAgICAgZm9yZWdyb3VuZEFscGhhOiB0aGlzLmZvcmVncm91bmRBbHBoYSxcbiAgICAgIGxldmVsOiB0aGlzLmxldmVsIGFzIE56U2FmZUFueSxcbiAgICAgIG1pbWU6IHRoaXMubWltZSxcbiAgICAgIHBhZGRpbmc6IHRoaXMucGFkZGluZyxcbiAgICAgIHNpemU6IHRoaXMuc2l6ZSxcbiAgICAgIHZhbHVlOiB0eXBlb2YgdGhpcy52YWx1ZSA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMudmFsdWUoKSA6IHRoaXMudG9VdGY4Qnl0ZUFycmF5KHRoaXMudmFsdWUpXG4gICAgfTtcbiAgICB0aGlzLm9wdGlvbiA9IG9wdGlvbjtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIHByaXZhdGUgdG9VdGY4Qnl0ZUFycmF5KHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBzdHIgPSBlbmNvZGVVUkkoc3RyKTtcbiAgICBjb25zdCByZXN1bHQ6IG51bWJlcltdID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChzdHIuY2hhckF0KGkpICE9PSAnJScpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goc3RyLmNoYXJDb2RlQXQoaSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0LnB1c2gocGFyc2VJbnQoc3RyLnN1YnN0cmluZyhpICsgMSwgMiksIDE2KSk7XG4gICAgICAgIGkgKz0gMjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdC5tYXAodiA9PiBTdHJpbmcuZnJvbUNoYXJDb2RlKHYpKS5qb2luKCcnKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmxhenkkKSB7XG4gICAgICB0aGlzLmxhenkkLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=