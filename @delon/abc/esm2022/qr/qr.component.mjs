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
class QRComponent {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: QRComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i1.AlainConfigService }, { token: i2.LazyService }, { token: i3.Platform }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.1", type: QRComponent, selector: "qr", inputs: { background: "background", backgroundAlpha: "backgroundAlpha", foreground: "foreground", foregroundAlpha: "foregroundAlpha", level: "level", mime: "mime", padding: "padding", size: "size", value: "value", delay: "delay" }, outputs: { change: "change" }, host: { properties: { "style.display": "'inline-block'", "style.height.px": "size", "style.width.px": "size" } }, exportAs: ["qr"], usesOnChanges: true, ngImport: i0, template: ` <img *ngIf="dataURL" style="max-width: 100%; max-height: 100%;" [src]="dataURL" /> `, isInline: true, dependencies: [{ kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
__decorate([
    InputNumber(null)
], QRComponent.prototype, "padding", void 0);
__decorate([
    InputNumber()
], QRComponent.prototype, "size", void 0);
__decorate([
    InputNumber()
], QRComponent.prototype, "delay", void 0);
export { QRComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: QRComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3FyL3FyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUVMLHVCQUF1QixFQUV2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBQ04saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBZ0IsTUFBTSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRzVDLE9BQU8sRUFBRSxXQUFXLEVBQWUsTUFBTSx1QkFBdUIsQ0FBQztBQUlqRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7OztBQUdoRCxNQWFhLFdBQVc7SUF5QnRCLFlBQ1UsR0FBc0IsRUFDOUIsU0FBNkIsRUFDckIsT0FBb0IsRUFDcEIsUUFBa0I7UUFIbEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFFdEIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtRQUNwQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBcEJwQixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBWWQsVUFBSyxHQUE0QixFQUFFLENBQUM7UUFFMUIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFRckQsSUFBSSxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxpQkFBaUIsQ0FBRSxDQUFDO1FBQ3JELE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRU8sSUFBSTtRQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLE9BQU87U0FDUjtRQUVELElBQUksSUFBSSxDQUFDLEVBQUUsSUFBSSxJQUFJLEVBQUU7WUFDbkIsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFLLE1BQW9CLENBQUMsTUFBTSxF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Z0JBQ2tCLElBQUk7c0JBQTNCLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNrQixLQUFLO3NCQUE1QixLQUFLO2dCQUNhLE1BQU07c0JBQXhCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE91dHB1dCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIGZpbHRlciB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UsIEFsYWluUVJDb25maWcgfSBmcm9tICdAZGVsb24vdXRpbC9jb25maWcnO1xuaW1wb3J0IHsgSW5wdXROdW1iZXIsIE51bWJlcklucHV0IH0gZnJvbSAnQGRlbG9uL3V0aWwvZGVjb3JhdG9yJztcbmltcG9ydCB7IExhenlTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwvb3RoZXInO1xuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5pbXBvcnQgeyBRUl9ERUZVTEFUX0NPTkZJRyB9IGZyb20gJy4vcXIuY29uZmlnJztcbmltcG9ydCB7IFFST3B0aW9ucyB9IGZyb20gJy4vcXIudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdxcicsXG4gIGV4cG9ydEFzOiAncXInLFxuICB0ZW1wbGF0ZTogYCA8aW1nICpuZ0lmPVwiZGF0YVVSTFwiIHN0eWxlPVwibWF4LXdpZHRoOiAxMDAlOyBtYXgtaGVpZ2h0OiAxMDAlO1wiIFtzcmNdPVwiZGF0YVVSTFwiIC8+IGAsXG4gIGhvc3Q6IHtcbiAgICAnW3N0eWxlLmRpc3BsYXldJzogYCdpbmxpbmUtYmxvY2snYCxcbiAgICAnW3N0eWxlLmhlaWdodC5weF0nOiAnc2l6ZScsXG4gICAgJ1tzdHlsZS53aWR0aC5weF0nOiAnc2l6ZSdcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFFSQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfcGFkZGluZzogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zaXplOiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2RlbGF5OiBOdW1iZXJJbnB1dDtcblxuICBwcml2YXRlIGxhenkkPzogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIHFyOiBOelNhZmVBbnk7XG4gIHByaXZhdGUgY29nOiBBbGFpblFSQ29uZmlnO1xuICBwcml2YXRlIG9wdGlvbiE6IFFST3B0aW9ucztcbiAgcHJpdmF0ZSBpbml0ZWQgPSBmYWxzZTtcblxuICBkYXRhVVJMITogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIGJhY2tncm91bmQ/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGJhY2tncm91bmRBbHBoYT86IG51bWJlcjtcbiAgQElucHV0KCkgZm9yZWdyb3VuZD86IHN0cmluZztcbiAgQElucHV0KCkgZm9yZWdyb3VuZEFscGhhPzogbnVtYmVyO1xuICBASW5wdXQoKSBsZXZlbD86IHN0cmluZztcbiAgQElucHV0KCkgbWltZT86IHN0cmluZztcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKG51bGwpIHBhZGRpbmc/OiBudW1iZXI7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHNpemU/OiBudW1iZXI7XG4gIEBJbnB1dCgpIHZhbHVlOiBzdHJpbmcgfCAoKCkgPT4gc3RyaW5nKSA9ICcnO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBkZWxheT86IG51bWJlcjtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBjb25maWdTcnY6IEFsYWluQ29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIGxhenlTcnY6IExhenlTZXJ2aWNlLFxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtXG4gICkge1xuICAgIHRoaXMuY29nID0gY29uZmlnU3J2Lm1lcmdlKCdxcicsIFFSX0RFRlVMQVRfQ09ORklHKSE7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB0aGlzLmNvZyk7XG4gIH1cblxuICBwcml2YXRlIGluaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmluaXRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnFyID09IG51bGwpIHtcbiAgICAgIHRoaXMucXIgPSBuZXcgKHdpbmRvdyBhcyBOelNhZmVBbnkpLlFSaW91cygpO1xuICAgIH1cbiAgICB0aGlzLnFyLnNldCh0aGlzLm9wdGlvbik7XG4gICAgdGhpcy5kYXRhVVJMID0gdGhpcy5xci50b0RhdGFVUkwoKTtcbiAgICB0aGlzLmNoYW5nZS5lbWl0KHRoaXMuZGF0YVVSTCk7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0RGVsYXkoKTogdm9pZCB7XG4gICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbml0KCksIHRoaXMuZGVsYXkpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCh3aW5kb3cgYXMgTnpTYWZlQW55KS5RUmlvdXMpIHtcbiAgICAgIHRoaXMuaW5pdERlbGF5KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHVybCA9IHRoaXMuY29nLmxpYiE7XG4gICAgdGhpcy5sYXp5JCA9IHRoaXMubGF6eVNydi5jaGFuZ2VcbiAgICAgIC5waXBlKGZpbHRlcihscyA9PiBscy5sZW5ndGggPT09IDEgJiYgbHNbMF0ucGF0aCA9PT0gdXJsICYmIGxzWzBdLnN0YXR1cyA9PT0gJ29rJykpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuaW5pdERlbGF5KCkpO1xuICAgIHRoaXMubGF6eVNydi5sb2FkKHVybCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICBjb25zdCBvcHRpb246IFFST3B0aW9ucyA9IHtcbiAgICAgIGJhY2tncm91bmQ6IHRoaXMuYmFja2dyb3VuZCxcbiAgICAgIGJhY2tncm91bmRBbHBoYTogdGhpcy5iYWNrZ3JvdW5kQWxwaGEsXG4gICAgICBmb3JlZ3JvdW5kOiB0aGlzLmZvcmVncm91bmQsXG4gICAgICBmb3JlZ3JvdW5kQWxwaGE6IHRoaXMuZm9yZWdyb3VuZEFscGhhLFxuICAgICAgbGV2ZWw6IHRoaXMubGV2ZWwgYXMgTnpTYWZlQW55LFxuICAgICAgbWltZTogdGhpcy5taW1lLFxuICAgICAgcGFkZGluZzogdGhpcy5wYWRkaW5nLFxuICAgICAgc2l6ZTogdGhpcy5zaXplLFxuICAgICAgdmFsdWU6IHR5cGVvZiB0aGlzLnZhbHVlID09PSAnZnVuY3Rpb24nID8gdGhpcy52YWx1ZSgpIDogdGhpcy50b1V0ZjhCeXRlQXJyYXkodGhpcy52YWx1ZSlcbiAgICB9O1xuICAgIHRoaXMub3B0aW9uID0gb3B0aW9uO1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSB0b1V0ZjhCeXRlQXJyYXkoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHN0ciA9IGVuY29kZVVSSShzdHIpO1xuICAgIGNvbnN0IHJlc3VsdDogbnVtYmVyW10gPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHN0ci5jaGFyQXQoaSkgIT09ICclJykge1xuICAgICAgICByZXN1bHQucHVzaChzdHIuY2hhckNvZGVBdChpKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQucHVzaChwYXJzZUludChzdHIuc3Vic3RyaW5nKGkgKyAxLCAyKSwgMTYpKTtcbiAgICAgICAgaSArPSAyO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0Lm1hcCh2ID0+IFN0cmluZy5mcm9tQ2hhckNvZGUodikpLmpvaW4oJycpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubGF6eSQpIHtcbiAgICAgIHRoaXMubGF6eSQudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==