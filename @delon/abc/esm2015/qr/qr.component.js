/**
 * @fileoverview added by tsickle
 * Generated from: qr.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewEncapsulation, } from '@angular/core';
import { AlainConfigService, InputNumber, LazyService } from '@delon/util';
import { filter } from 'rxjs/operators';
import { QR_DEFULAT_CONFIG } from './qr.config';
export class QRComponent {
    // #endregion
    /**
     * @param {?} cdr
     * @param {?} configSrv
     * @param {?} lazySrv
     * @param {?} platform
     */
    constructor(cdr, configSrv, lazySrv, platform) {
        this.cdr = cdr;
        this.lazySrv = lazySrv;
        this.platform = platform;
        this.inited = false;
        this.value = '';
        this.change = new EventEmitter();
        this.cog = (/** @type {?} */ (configSrv.merge('qr', QR_DEFULAT_CONFIG)));
        Object.assign(this, this.cog);
    }
    /**
     * @private
     * @return {?}
     */
    init() {
        if (!this.inited) {
            return;
        }
        if (this.qr == null) {
            this.qr = new ((/** @type {?} */ (window))).QRious();
        }
        this.qr.set(this.option);
        this.dataURL = this.qr.toDataURL();
        this.change.emit(this.dataURL);
        this.cdr.detectChanges();
    }
    /**
     * @private
     * @return {?}
     */
    initDelay() {
        this.inited = true;
        setTimeout((/**
         * @return {?}
         */
        () => this.init()), this.delay);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (!this.platform.isBrowser) {
            return;
        }
        if (((/** @type {?} */ (window))).QRious) {
            this.initDelay();
            return;
        }
        /** @type {?} */
        const url = (/** @type {?} */ (this.cog.lib));
        this.lazy$ = this.lazySrv.change
            .pipe(filter((/**
         * @param {?} ls
         * @return {?}
         */
        ls => ls.length === 1 && ls[0].path === url && ls[0].status === 'ok')))
            .subscribe((/**
         * @return {?}
         */
        () => this.initDelay()));
        this.lazySrv.load(url);
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        /** @type {?} */
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
    /**
     * @private
     * @param {?} str
     * @return {?}
     */
    toUtf8ByteArray(str) {
        str = encodeURI(str);
        /** @type {?} */
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
        return result.map((/**
         * @param {?} v
         * @return {?}
         */
        v => String.fromCharCode(v))).join('');
    }
    /**
     * @return {?}
     */
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
            }] }
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
if (false) {
    /** @type {?} */
    QRComponent.ngAcceptInputType_padding;
    /** @type {?} */
    QRComponent.ngAcceptInputType_size;
    /** @type {?} */
    QRComponent.ngAcceptInputType_delay;
    /**
     * @type {?}
     * @private
     */
    QRComponent.prototype.lazy$;
    /**
     * @type {?}
     * @private
     */
    QRComponent.prototype.qr;
    /**
     * @type {?}
     * @private
     */
    QRComponent.prototype.cog;
    /**
     * @type {?}
     * @private
     */
    QRComponent.prototype.option;
    /**
     * @type {?}
     * @private
     */
    QRComponent.prototype.inited;
    /** @type {?} */
    QRComponent.prototype.dataURL;
    /** @type {?} */
    QRComponent.prototype.background;
    /** @type {?} */
    QRComponent.prototype.backgroundAlpha;
    /** @type {?} */
    QRComponent.prototype.foreground;
    /** @type {?} */
    QRComponent.prototype.foregroundAlpha;
    /** @type {?} */
    QRComponent.prototype.level;
    /** @type {?} */
    QRComponent.prototype.mime;
    /** @type {?} */
    QRComponent.prototype.padding;
    /** @type {?} */
    QRComponent.prototype.size;
    /** @type {?} */
    QRComponent.prototype.value;
    /** @type {?} */
    QRComponent.prototype.delay;
    /** @type {?} */
    QRComponent.prototype.change;
    /**
     * @type {?}
     * @private
     */
    QRComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    QRComponent.prototype.lazySrv;
    /**
     * @type {?}
     * @private
     */
    QRComponent.prototype.platform;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9xci8iLCJzb3VyY2VzIjpbInFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNOLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsa0JBQWtCLEVBQWlCLFdBQVcsRUFBRSxXQUFXLEVBQWUsTUFBTSxhQUFhLENBQUM7QUFFdkcsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQWdCaEQsTUFBTSxPQUFPLFdBQVc7Ozs7Ozs7O0lBNkJ0QixZQUFvQixHQUFzQixFQUFFLFNBQTZCLEVBQVUsT0FBb0IsRUFBVSxRQUFrQjtRQUEvRyxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUF5QyxZQUFPLEdBQVAsT0FBTyxDQUFhO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQXBCM0gsV0FBTSxHQUFHLEtBQUssQ0FBQztRQWNkLFVBQUssR0FBRyxFQUFFLENBQUM7UUFFRCxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUtyRCxJQUFJLENBQUMsR0FBRyxHQUFHLG1CQUFBLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLGlCQUFpQixDQUFDLEVBQUMsQ0FBQztRQUNyRCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFTyxJQUFJO1FBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFD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QVcsRUFBRTs7MENBQWU7OztJQXZCdEMsc0NBQThDOztJQUM5QyxtQ0FBMkM7O0lBQzNDLG9DQUE0Qzs7Ozs7SUFFNUMsNEJBQTRCOzs7OztJQUM1Qix5QkFBZ0I7Ozs7O0lBQ2hCLDBCQUEyQjs7Ozs7SUFDM0IsNkJBQTBCOzs7OztJQUMxQiw2QkFBdUI7O0lBRXZCLDhCQUFnQjs7SUFJaEIsaUNBQTRCOztJQUM1QixzQ0FBaUM7O0lBQ2pDLGlDQUE0Qjs7SUFDNUIsc0NBQWlDOztJQUNqQyw0QkFBc0M7O0lBQ3RDLDJCQUFzQjs7SUFDdEIsOEJBQXdDOztJQUN4QywyQkFBcUM7O0lBQ3JDLDRCQUFvQjs7SUFDcEIsNEJBQXNDOztJQUN0Qyw2QkFBdUQ7Ozs7O0lBSTNDLDBCQUE4Qjs7Ozs7SUFBaUMsOEJBQTRCOzs7OztJQUFFLCtCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UsIEFsYWluUVJDb25maWcsIElucHV0TnVtYmVyLCBMYXp5U2VydmljZSwgTnVtYmVySW5wdXQgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFFSX0RFRlVMQVRfQ09ORklHIH0gZnJvbSAnLi9xci5jb25maWcnO1xuaW1wb3J0IHsgUVJPcHRpb25zIH0gZnJvbSAnLi9xci50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3FyJyxcbiAgZXhwb3J0QXM6ICdxcicsXG4gIHRlbXBsYXRlOiBgIDxpbWcgKm5nSWY9XCJkYXRhVVJMXCIgc3R5bGU9XCJtYXgtd2lkdGg6IDEwMCU7IG1heC1oZWlnaHQ6IDEwMCU7XCIgW3NyY109XCJkYXRhVVJMXCIgLz4gYCxcbiAgaG9zdDoge1xuICAgICdbc3R5bGUuZGlzcGxheV0nOiBgJ2lubGluZS1ibG9jaydgLFxuICAgICdbc3R5bGUuaGVpZ2h0LnB4XSc6ICdzaXplJyxcbiAgICAnW3N0eWxlLndpZHRoLnB4XSc6ICdzaXplJyxcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBRUkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3BhZGRpbmc6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc2l6ZTogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9kZWxheTogTnVtYmVySW5wdXQ7XG5cbiAgcHJpdmF0ZSBsYXp5JDogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIHFyOiBhbnk7XG4gIHByaXZhdGUgY29nOiBBbGFpblFSQ29uZmlnO1xuICBwcml2YXRlIG9wdGlvbjogUVJPcHRpb25zO1xuICBwcml2YXRlIGluaXRlZCA9IGZhbHNlO1xuXG4gIGRhdGFVUkw6IHN0cmluZztcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpIGJhY2tncm91bmQ6IHN0cmluZztcbiAgQElucHV0KCkgYmFja2dyb3VuZEFscGhhOiBudW1iZXI7XG4gIEBJbnB1dCgpIGZvcmVncm91bmQ6IHN0cmluZztcbiAgQElucHV0KCkgZm9yZWdyb3VuZEFscGhhOiBudW1iZXI7XG4gIEBJbnB1dCgpIGxldmVsOiAnTCcgfCAnTScgfCAnUScgfCAnSCc7XG4gIEBJbnB1dCgpIG1pbWU6IHN0cmluZztcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgcGFkZGluZzogbnVtYmVyO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBzaXplOiBudW1iZXI7XG4gIEBJbnB1dCgpIHZhbHVlID0gJyc7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGRlbGF5OiBudW1iZXI7XG4gIEBPdXRwdXQoKSByZWFkb25seSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBjb25maWdTcnY6IEFsYWluQ29uZmlnU2VydmljZSwgcHJpdmF0ZSBsYXp5U3J2OiBMYXp5U2VydmljZSwgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0pIHtcbiAgICB0aGlzLmNvZyA9IGNvbmZpZ1Nydi5tZXJnZSgncXInLCBRUl9ERUZVTEFUX0NPTkZJRykhO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgdGhpcy5jb2cpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pbml0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5xciA9PSBudWxsKSB7XG4gICAgICB0aGlzLnFyID0gbmV3ICh3aW5kb3cgYXMgYW55KS5RUmlvdXMoKTtcbiAgICB9XG4gICAgdGhpcy5xci5zZXQodGhpcy5vcHRpb24pO1xuICAgIHRoaXMuZGF0YVVSTCA9IHRoaXMucXIudG9EYXRhVVJMKCk7XG4gICAgdGhpcy5jaGFuZ2UuZW1pdCh0aGlzLmRhdGFVUkwpO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdERlbGF5KCk6IHZvaWQge1xuICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5pdCgpLCB0aGlzLmRlbGF5KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICgod2luZG93IGFzIGFueSkuUVJpb3VzKSB7XG4gICAgICB0aGlzLmluaXREZWxheSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB1cmwgPSB0aGlzLmNvZy5saWIhO1xuICAgIHRoaXMubGF6eSQgPSB0aGlzLmxhenlTcnYuY2hhbmdlXG4gICAgICAucGlwZShmaWx0ZXIobHMgPT4gbHMubGVuZ3RoID09PSAxICYmIGxzWzBdLnBhdGggPT09IHVybCAmJiBsc1swXS5zdGF0dXMgPT09ICdvaycpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmluaXREZWxheSgpKTtcbiAgICB0aGlzLmxhenlTcnYubG9hZCh1cmwpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgY29uc3Qgb3B0aW9uOiBRUk9wdGlvbnMgPSB7XG4gICAgICBiYWNrZ3JvdW5kOiB0aGlzLmJhY2tncm91bmQsXG4gICAgICBiYWNrZ3JvdW5kQWxwaGE6IHRoaXMuYmFja2dyb3VuZEFscGhhLFxuICAgICAgZm9yZWdyb3VuZDogdGhpcy5mb3JlZ3JvdW5kLFxuICAgICAgZm9yZWdyb3VuZEFscGhhOiB0aGlzLmZvcmVncm91bmRBbHBoYSxcbiAgICAgIGxldmVsOiB0aGlzLmxldmVsLFxuICAgICAgbWltZTogdGhpcy5taW1lLFxuICAgICAgcGFkZGluZzogdGhpcy5wYWRkaW5nLFxuICAgICAgc2l6ZTogdGhpcy5zaXplLFxuICAgICAgdmFsdWU6IHRoaXMudG9VdGY4Qnl0ZUFycmF5KHRoaXMudmFsdWUpLFxuICAgIH07XG4gICAgdGhpcy5vcHRpb24gPSBvcHRpb247XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBwcml2YXRlIHRvVXRmOEJ5dGVBcnJheShzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgc3RyID0gZW5jb2RlVVJJKHN0cik7XG4gICAgY29uc3QgcmVzdWx0OiBudW1iZXJbXSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoc3RyLmNoYXJBdChpKSAhPT0gJyUnKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHBhcnNlSW50KHN0ci5zdWJzdHIoaSArIDEsIDIpLCAxNikpO1xuICAgICAgICBpICs9IDI7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQubWFwKHYgPT4gU3RyaW5nLmZyb21DaGFyQ29kZSh2KSkuam9pbignJyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5sYXp5JCkge1xuICAgICAgdGhpcy5sYXp5JC51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19