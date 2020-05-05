/**
 * @fileoverview added by tsickle
 * Generated from: qr.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
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
     */
    constructor(cdr, configSrv, lazySrv) {
        this.cdr = cdr;
        this.lazySrv = lazySrv;
        this.inited = false;
        // tslint:disable-next-line:no-output-native
        this.change = new EventEmitter();
        this.cog = configSrv.merge('qr', QR_DEFULAT_CONFIG);
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
        if (str == null)
            return '';
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
                template: ` <img style="max-width: 100%; max-height: 100%;" [src]="dataURL" /> `,
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
    { type: LazyService }
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9xci8iLCJzb3VyY2VzIjpbInFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBQ04saUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBaUIsV0FBVyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUUxRixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBZ0JoRCxNQUFNLE9BQU8sV0FBVzs7Ozs7OztJQTBCdEIsWUFBb0IsR0FBc0IsRUFBRSxTQUE2QixFQUFVLE9BQW9CO1FBQW5GLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQXlDLFlBQU8sR0FBUCxPQUFPLENBQWE7UUFyQi9GLFdBQU0sR0FBRyxLQUFLLENBQUM7O1FBaUJKLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBS3JELElBQUksQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBc0IsSUFBSSxFQUFFLGlCQUFpQixDQUFDLENBQUM7UUFDekUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7O0lBRU8sSUFBSTtRQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLE9BQU87U0FDUjtRQUVELElBQUksSUFBSSxDQUFDLEVBQUUsSUFBSSxJQUFJLEVBQUU7WUFDbkIsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsbUJBQUEsTUFBTSxFQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUs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LGlDQUE0Qjs7SUFDNUIsc0NBQWlDOztJQUNqQyw0QkFBc0M7O0lBQ3RDLDJCQUFzQjs7SUFDdEIsOEJBQXdDOztJQUN4QywyQkFBcUM7O0lBQ3JDLDRCQUF1Qjs7SUFDdkIsNEJBQXNDOztJQUV0Qyw2QkFBdUQ7Ozs7O0lBSTNDLDBCQUE4Qjs7Ozs7SUFBaUMsOEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFsYWluQ29uZmlnU2VydmljZSwgQWxhaW5RUkNvbmZpZywgSW5wdXROdW1iZXIsIExhenlTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBRUl9ERUZVTEFUX0NPTkZJRyB9IGZyb20gJy4vcXIuY29uZmlnJztcbmltcG9ydCB7IFFST3B0aW9ucyB9IGZyb20gJy4vcXIudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdxcicsXG4gIGV4cG9ydEFzOiAncXInLFxuICB0ZW1wbGF0ZTogYCA8aW1nIHN0eWxlPVwibWF4LXdpZHRoOiAxMDAlOyBtYXgtaGVpZ2h0OiAxMDAlO1wiIFtzcmNdPVwiZGF0YVVSTFwiIC8+IGAsXG4gIGhvc3Q6IHtcbiAgICAnW3N0eWxlLmRpc3BsYXldJzogYCdpbmxpbmUtYmxvY2snYCxcbiAgICAnW3N0eWxlLmhlaWdodC5weF0nOiAnc2l6ZScsXG4gICAgJ1tzdHlsZS53aWR0aC5weF0nOiAnc2l6ZScsXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgUVJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgbGF6eSQ6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBxcjogYW55O1xuICBwcml2YXRlIGNvZzogQWxhaW5RUkNvbmZpZztcbiAgcHJpdmF0ZSBvcHRpb246IFFST3B0aW9ucztcbiAgcHJpdmF0ZSBpbml0ZWQgPSBmYWxzZTtcblxuICBkYXRhVVJMOiBzdHJpbmc7XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKSBiYWNrZ3JvdW5kOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGJhY2tncm91bmRBbHBoYTogbnVtYmVyO1xuICBASW5wdXQoKSBmb3JlZ3JvdW5kOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGZvcmVncm91bmRBbHBoYTogbnVtYmVyO1xuICBASW5wdXQoKSBsZXZlbDogJ0wnIHwgJ00nIHwgJ1EnIHwgJ0gnO1xuICBASW5wdXQoKSBtaW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHBhZGRpbmc6IG51bWJlcjtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgc2l6ZTogbnVtYmVyO1xuICBASW5wdXQoKSB2YWx1ZTogc3RyaW5nO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBkZWxheTogbnVtYmVyO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tb3V0cHV0LW5hdGl2ZVxuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgY29uZmlnU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UsIHByaXZhdGUgbGF6eVNydjogTGF6eVNlcnZpY2UpIHtcbiAgICB0aGlzLmNvZyA9IGNvbmZpZ1Nydi5tZXJnZTxBbGFpblFSQ29uZmlnLCAncXInPigncXInLCBRUl9ERUZVTEFUX0NPTkZJRyk7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB0aGlzLmNvZyk7XG4gIH1cblxuICBwcml2YXRlIGluaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmluaXRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnFyID09IG51bGwpIHtcbiAgICAgIHRoaXMucXIgPSBuZXcgKHdpbmRvdyBhcyBhbnkpLlFSaW91cygpO1xuICAgIH1cbiAgICB0aGlzLnFyLnNldCh0aGlzLm9wdGlvbik7XG4gICAgdGhpcy5kYXRhVVJMID0gdGhpcy5xci50b0RhdGFVUkwoKTtcbiAgICB0aGlzLmNoYW5nZS5lbWl0KHRoaXMuZGF0YVVSTCk7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0RGVsYXkoKTogdm9pZCB7XG4gICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbml0KCksIHRoaXMuZGVsYXkpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGlmICgod2luZG93IGFzIGFueSkuUVJpb3VzKSB7XG4gICAgICB0aGlzLmluaXREZWxheSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB1cmwgPSB0aGlzLmNvZy5saWIhO1xuICAgIHRoaXMubGF6eSQgPSB0aGlzLmxhenlTcnYuY2hhbmdlXG4gICAgICAucGlwZShmaWx0ZXIobHMgPT4gbHMubGVuZ3RoID09PSAxICYmIGxzWzBdLnBhdGggPT09IHVybCAmJiBsc1swXS5zdGF0dXMgPT09ICdvaycpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmluaXREZWxheSgpKTtcbiAgICB0aGlzLmxhenlTcnYubG9hZCh1cmwpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgY29uc3Qgb3B0aW9uOiBRUk9wdGlvbnMgPSB7XG4gICAgICBiYWNrZ3JvdW5kOiB0aGlzLmJhY2tncm91bmQsXG4gICAgICBiYWNrZ3JvdW5kQWxwaGE6IHRoaXMuYmFja2dyb3VuZEFscGhhLFxuICAgICAgZm9yZWdyb3VuZDogdGhpcy5mb3JlZ3JvdW5kLFxuICAgICAgZm9yZWdyb3VuZEFscGhhOiB0aGlzLmZvcmVncm91bmRBbHBoYSxcbiAgICAgIGxldmVsOiB0aGlzLmxldmVsLFxuICAgICAgbWltZTogdGhpcy5taW1lLFxuICAgICAgcGFkZGluZzogdGhpcy5wYWRkaW5nLFxuICAgICAgc2l6ZTogdGhpcy5zaXplLFxuICAgICAgdmFsdWU6IHRoaXMudG9VdGY4Qnl0ZUFycmF5KHRoaXMudmFsdWUpLFxuICAgIH07XG4gICAgdGhpcy5vcHRpb24gPSBvcHRpb247XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBwcml2YXRlIHRvVXRmOEJ5dGVBcnJheShzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKHN0ciA9PSBudWxsKSByZXR1cm4gJyc7XG4gICAgc3RyID0gZW5jb2RlVVJJKHN0cik7XG4gICAgY29uc3QgcmVzdWx0OiBudW1iZXJbXSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoc3RyLmNoYXJBdChpKSAhPT0gJyUnKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHBhcnNlSW50KHN0ci5zdWJzdHIoaSArIDEsIDIpLCAxNikpO1xuICAgICAgICBpICs9IDI7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQubWFwKHYgPT4gU3RyaW5nLmZyb21DaGFyQ29kZSh2KSkuam9pbignJyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5sYXp5JCkge1xuICAgICAgdGhpcy5sYXp5JC51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19