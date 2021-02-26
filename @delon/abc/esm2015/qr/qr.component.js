import { __decorate, __metadata } from "tslib";
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewEncapsulation, } from '@angular/core';
import { AlainConfigService } from '@delon/util/config';
import { InputNumber } from '@delon/util/decorator';
import { LazyService } from '@delon/util/other';
import { filter } from 'rxjs/operators';
import { QR_DEFULAT_CONFIG } from './qr.config';
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
            value: this.toUtf8ByteArray(this.value),
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
                result.push(parseInt(str.substr(i + 1, 2), 16));
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
QRComponent.decorators = [
    { type: Component, args: [{
                selector: 'qr',
                exportAs: 'qr',
                template: ` <img *ngIf="dataURL" style="max-width: 100%; max-height: 100%;" [src]="dataURL" /> `,
                host: {
                    '[style.display]': `'inline-block'`,
                    '[style.height.px]': 'size',
                    '[style.width.px]': 'size',
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] }
];
/** @nocollapse */
QRComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: AlainConfigService },
    { type: LazyService },
    { type: Platform }
];
QRComponent.propDecorators = {
    background: [{ type: Input }],
    backgroundAlpha: [{ type: Input }],
    foreground: [{ type: Input }],
    foregroundAlpha: [{ type: Input }],
    level: [{ type: Input }],
    mime: [{ type: Input }],
    padding: [{ type: Input }],
    size: [{ type: Input }],
    value: [{ type: Input }],
    delay: [{ type: Input }],
    change: [{ type: Output }]
};
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], QRComponent.prototype, "padding", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], QRComponent.prototype, "size", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], QRComponent.prototype, "delay", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3FyL3FyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFDTixpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFpQixNQUFNLG9CQUFvQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxXQUFXLEVBQWUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFaEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQWdCaEQsTUFBTSxPQUFPLFdBQVc7SUF5QnRCLFlBQW9CLEdBQXNCLEVBQUUsU0FBNkIsRUFBVSxPQUFvQixFQUFVLFFBQWtCO1FBQS9HLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQXlDLFlBQU8sR0FBUCxPQUFPLENBQWE7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBaEIzSCxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBWWQsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUVELFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBR3JELElBQUksQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLENBQUUsQ0FBQztRQUNyRCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVPLElB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ZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UsIEFsYWluUVJDb25maWcgfSBmcm9tICdAZGVsb24vdXRpbC9jb25maWcnO1xuaW1wb3J0IHsgSW5wdXROdW1iZXIsIE51bWJlcklucHV0IH0gZnJvbSAnQGRlbG9uL3V0aWwvZGVjb3JhdG9yJztcbmltcG9ydCB7IExhenlTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwvb3RoZXInO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBRUl9ERUZVTEFUX0NPTkZJRyB9IGZyb20gJy4vcXIuY29uZmlnJztcbmltcG9ydCB7IFFST3B0aW9ucyB9IGZyb20gJy4vcXIudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdxcicsXG4gIGV4cG9ydEFzOiAncXInLFxuICB0ZW1wbGF0ZTogYCA8aW1nICpuZ0lmPVwiZGF0YVVSTFwiIHN0eWxlPVwibWF4LXdpZHRoOiAxMDAlOyBtYXgtaGVpZ2h0OiAxMDAlO1wiIFtzcmNdPVwiZGF0YVVSTFwiIC8+IGAsXG4gIGhvc3Q6IHtcbiAgICAnW3N0eWxlLmRpc3BsYXldJzogYCdpbmxpbmUtYmxvY2snYCxcbiAgICAnW3N0eWxlLmhlaWdodC5weF0nOiAnc2l6ZScsXG4gICAgJ1tzdHlsZS53aWR0aC5weF0nOiAnc2l6ZScsXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgUVJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9wYWRkaW5nOiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3NpemU6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZGVsYXk6IE51bWJlcklucHV0O1xuXG4gIHByaXZhdGUgbGF6eSQ6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBxcjogYW55O1xuICBwcml2YXRlIGNvZzogQWxhaW5RUkNvbmZpZztcbiAgcHJpdmF0ZSBvcHRpb246IFFST3B0aW9ucztcbiAgcHJpdmF0ZSBpbml0ZWQgPSBmYWxzZTtcblxuICBkYXRhVVJMOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgYmFja2dyb3VuZDogc3RyaW5nO1xuICBASW5wdXQoKSBiYWNrZ3JvdW5kQWxwaGE6IG51bWJlcjtcbiAgQElucHV0KCkgZm9yZWdyb3VuZDogc3RyaW5nO1xuICBASW5wdXQoKSBmb3JlZ3JvdW5kQWxwaGE6IG51bWJlcjtcbiAgQElucHV0KCkgbGV2ZWw6IHN0cmluZztcbiAgQElucHV0KCkgbWltZTogc3RyaW5nO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBwYWRkaW5nOiBudW1iZXI7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHNpemU6IG51bWJlcjtcbiAgQElucHV0KCkgdmFsdWUgPSAnJztcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgZGVsYXk6IG51bWJlcjtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgY29uZmlnU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UsIHByaXZhdGUgbGF6eVNydjogTGF6eVNlcnZpY2UsIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtKSB7XG4gICAgdGhpcy5jb2cgPSBjb25maWdTcnYubWVyZ2UoJ3FyJywgUVJfREVGVUxBVF9DT05GSUcpITtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIHRoaXMuY29nKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaW5pdGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucXIgPT0gbnVsbCkge1xuICAgICAgdGhpcy5xciA9IG5ldyAod2luZG93IGFzIGFueSkuUVJpb3VzKCk7XG4gICAgfVxuICAgIHRoaXMucXIuc2V0KHRoaXMub3B0aW9uKTtcbiAgICB0aGlzLmRhdGFVUkwgPSB0aGlzLnFyLnRvRGF0YVVSTCgpO1xuICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcy5kYXRhVVJMKTtcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBwcml2YXRlIGluaXREZWxheSgpOiB2b2lkIHtcbiAgICB0aGlzLmluaXRlZCA9IHRydWU7XG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmluaXQoKSwgdGhpcy5kZWxheSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoKHdpbmRvdyBhcyBhbnkpLlFSaW91cykge1xuICAgICAgdGhpcy5pbml0RGVsYXkoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdXJsID0gdGhpcy5jb2cubGliITtcbiAgICB0aGlzLmxhenkkID0gdGhpcy5sYXp5U3J2LmNoYW5nZVxuICAgICAgLnBpcGUoZmlsdGVyKGxzID0+IGxzLmxlbmd0aCA9PT0gMSAmJiBsc1swXS5wYXRoID09PSB1cmwgJiYgbHNbMF0uc3RhdHVzID09PSAnb2snKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5pbml0RGVsYXkoKSk7XG4gICAgdGhpcy5sYXp5U3J2LmxvYWQodXJsKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIGNvbnN0IG9wdGlvbjogUVJPcHRpb25zID0ge1xuICAgICAgYmFja2dyb3VuZDogdGhpcy5iYWNrZ3JvdW5kLFxuICAgICAgYmFja2dyb3VuZEFscGhhOiB0aGlzLmJhY2tncm91bmRBbHBoYSxcbiAgICAgIGZvcmVncm91bmQ6IHRoaXMuZm9yZWdyb3VuZCxcbiAgICAgIGZvcmVncm91bmRBbHBoYTogdGhpcy5mb3JlZ3JvdW5kQWxwaGEsXG4gICAgICBsZXZlbDogdGhpcy5sZXZlbCBhcyBhbnksXG4gICAgICBtaW1lOiB0aGlzLm1pbWUsXG4gICAgICBwYWRkaW5nOiB0aGlzLnBhZGRpbmcsXG4gICAgICBzaXplOiB0aGlzLnNpemUsXG4gICAgICB2YWx1ZTogdGhpcy50b1V0ZjhCeXRlQXJyYXkodGhpcy52YWx1ZSksXG4gICAgfTtcbiAgICB0aGlzLm9wdGlvbiA9IG9wdGlvbjtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIHByaXZhdGUgdG9VdGY4Qnl0ZUFycmF5KHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBzdHIgPSBlbmNvZGVVUkkoc3RyKTtcbiAgICBjb25zdCByZXN1bHQ6IG51bWJlcltdID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChzdHIuY2hhckF0KGkpICE9PSAnJScpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goc3RyLmNoYXJDb2RlQXQoaSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0LnB1c2gocGFyc2VJbnQoc3RyLnN1YnN0cihpICsgMSwgMiksIDE2KSk7XG4gICAgICAgIGkgKz0gMjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdC5tYXAodiA9PiBTdHJpbmcuZnJvbUNoYXJDb2RlKHYpKS5qb2luKCcnKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmxhenkkKSB7XG4gICAgICB0aGlzLmxhenkkLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=