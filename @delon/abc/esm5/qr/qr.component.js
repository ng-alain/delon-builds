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
var QRComponent = /** @class */ (function () {
    // #endregion
    function QRComponent(cdr, configSrv, lazySrv) {
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
    QRComponent.prototype.init = /**
     * @private
     * @return {?}
     */
    function () {
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
    };
    /**
     * @private
     * @return {?}
     */
    QRComponent.prototype.initDelay = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.inited = true;
        setTimeout((/**
         * @return {?}
         */
        function () { return _this.init(); }), this.delay);
    };
    /**
     * @return {?}
     */
    QRComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (((/** @type {?} */ (window))).QRious) {
            this.initDelay();
            return;
        }
        /** @type {?} */
        var url = (/** @type {?} */ (this.cog.lib));
        this.lazy$ = this.lazySrv.change
            .pipe(filter((/**
         * @param {?} ls
         * @return {?}
         */
        function (ls) { return ls.length === 1 && ls[0].path === url && ls[0].status === 'ok'; })))
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.initDelay(); }));
        this.lazySrv.load(url);
    };
    /**
     * @return {?}
     */
    QRComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var option = {
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
    };
    /**
     * @private
     * @param {?} str
     * @return {?}
     */
    QRComponent.prototype.toUtf8ByteArray = /**
     * @private
     * @param {?} str
     * @return {?}
     */
    function (str) {
        if (str == null)
            return '';
        str = encodeURI(str);
        /** @type {?} */
        var result = [];
        for (var i = 0; i < str.length; i++) {
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
        function (v) { return String.fromCharCode(v); })).join('');
    };
    /**
     * @return {?}
     */
    QRComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.lazy$) {
            this.lazy$.unsubscribe();
        }
    };
    QRComponent.decorators = [
        { type: Component, args: [{
                    selector: 'qr',
                    exportAs: 'qr',
                    template: " <img style=\"max-width: 100%; max-height: 100%;\" [src]=\"dataURL\" /> ",
                    host: {
                        '[style.display]': "'inline-block'",
                        '[style.height.px]': 'size',
                        '[style.width.px]': 'size',
                    },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    QRComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: AlainConfigService },
        { type: LazyService }
    ]; };
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
    return QRComponent;
}());
export { QRComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9xci8iLCJzb3VyY2VzIjpbInFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBQ04saUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBaUIsV0FBVyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUUxRixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBR2hEO0lBcUNFLGFBQWE7SUFFYixxQkFBb0IsR0FBc0IsRUFBRSxTQUE2QixFQUFVLE9BQW9CO1FBQW5GLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQXlDLFlBQU8sR0FBUCxPQUFPLENBQWE7UUFyQi9GLFdBQU0sR0FBRyxLQUFLLENBQUM7O1FBaUJKLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBS3JELElBQUksQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBc0IsSUFBSSxFQUFFLGlCQUFpQixDQUFDLENBQUM7UUFDekUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7O0lBRU8sMEJBQUk7Ozs7SUFBWjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLE9BQU87U0FDUjtRQUVELElBQUksSUFBSSxDQUFDLEVBQUUsSUFBSSxJQUFJLEVBQUU7WUFDbkIsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsbUJBQUEsTUFBTSxFQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FB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U0FsR1ksV0FBVzs7Ozs7O0lBQ3RCLDRCQUE0Qjs7Ozs7SUFDNUIseUJBQWdCOzs7OztJQUNoQiwwQkFBMkI7Ozs7O0lBQzNCLDZCQUEwQjs7Ozs7SUFDMUIsNkJBQXVCOztJQUV2Qiw4QkFBZ0I7O0lBSWhCLGlDQUE0Qjs7SUFDNUIsc0NBQWlDOztJQUNqQyxpQ0FBNEI7O0lBQzVCLHNDQUFpQzs7SUFDakMsNEJBQXNDOztJQUN0QywyQkFBc0I7O0lBQ3RCLDhCQUF3Qzs7SUFDeEMsMkJBQXFDOztJQUNyQyw0QkFBdUI7O0lBQ3ZCLDRCQUFzQzs7SUFFdEMsNkJBQXVEOzs7OztJQUkzQywwQkFBOEI7Ozs7O0lBQWlDLDhCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UsIEFsYWluUVJDb25maWcsIElucHV0TnVtYmVyLCBMYXp5U2VydmljZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUVJfREVGVUxBVF9DT05GSUcgfSBmcm9tICcuL3FyLmNvbmZpZyc7XG5pbXBvcnQgeyBRUk9wdGlvbnMgfSBmcm9tICcuL3FyLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncXInLFxuICBleHBvcnRBczogJ3FyJyxcbiAgdGVtcGxhdGU6IGAgPGltZyBzdHlsZT1cIm1heC13aWR0aDogMTAwJTsgbWF4LWhlaWdodDogMTAwJTtcIiBbc3JjXT1cImRhdGFVUkxcIiAvPiBgLFxuICBob3N0OiB7XG4gICAgJ1tzdHlsZS5kaXNwbGF5XSc6IGAnaW5saW5lLWJsb2NrJ2AsXG4gICAgJ1tzdHlsZS5oZWlnaHQucHhdJzogJ3NpemUnLFxuICAgICdbc3R5bGUud2lkdGgucHhdJzogJ3NpemUnLFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFFSQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGxhenkkOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgcXI6IGFueTtcbiAgcHJpdmF0ZSBjb2c6IEFsYWluUVJDb25maWc7XG4gIHByaXZhdGUgb3B0aW9uOiBRUk9wdGlvbnM7XG4gIHByaXZhdGUgaW5pdGVkID0gZmFsc2U7XG5cbiAgZGF0YVVSTDogc3RyaW5nO1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCkgYmFja2dyb3VuZDogc3RyaW5nO1xuICBASW5wdXQoKSBiYWNrZ3JvdW5kQWxwaGE6IG51bWJlcjtcbiAgQElucHV0KCkgZm9yZWdyb3VuZDogc3RyaW5nO1xuICBASW5wdXQoKSBmb3JlZ3JvdW5kQWxwaGE6IG51bWJlcjtcbiAgQElucHV0KCkgbGV2ZWw6ICdMJyB8ICdNJyB8ICdRJyB8ICdIJztcbiAgQElucHV0KCkgbWltZTogc3RyaW5nO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBwYWRkaW5nOiBudW1iZXI7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHNpemU6IG51bWJlcjtcbiAgQElucHV0KCkgdmFsdWU6IHN0cmluZztcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgZGVsYXk6IG51bWJlcjtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLW91dHB1dC1uYXRpdmVcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIGNvbmZpZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlLCBwcml2YXRlIGxhenlTcnY6IExhenlTZXJ2aWNlKSB7XG4gICAgdGhpcy5jb2cgPSBjb25maWdTcnYubWVyZ2U8QWxhaW5RUkNvbmZpZywgJ3FyJz4oJ3FyJywgUVJfREVGVUxBVF9DT05GSUcpO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgdGhpcy5jb2cpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pbml0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5xciA9PSBudWxsKSB7XG4gICAgICB0aGlzLnFyID0gbmV3ICh3aW5kb3cgYXMgYW55KS5RUmlvdXMoKTtcbiAgICB9XG4gICAgdGhpcy5xci5zZXQodGhpcy5vcHRpb24pO1xuICAgIHRoaXMuZGF0YVVSTCA9IHRoaXMucXIudG9EYXRhVVJMKCk7XG4gICAgdGhpcy5jaGFuZ2UuZW1pdCh0aGlzLmRhdGFVUkwpO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdERlbGF5KCk6IHZvaWQge1xuICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5pdCgpLCB0aGlzLmRlbGF5KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoKHdpbmRvdyBhcyBhbnkpLlFSaW91cykge1xuICAgICAgdGhpcy5pbml0RGVsYXkoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdXJsID0gdGhpcy5jb2cubGliITtcbiAgICB0aGlzLmxhenkkID0gdGhpcy5sYXp5U3J2LmNoYW5nZVxuICAgICAgLnBpcGUoZmlsdGVyKGxzID0+IGxzLmxlbmd0aCA9PT0gMSAmJiBsc1swXS5wYXRoID09PSB1cmwgJiYgbHNbMF0uc3RhdHVzID09PSAnb2snKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5pbml0RGVsYXkoKSk7XG4gICAgdGhpcy5sYXp5U3J2LmxvYWQodXJsKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIGNvbnN0IG9wdGlvbjogUVJPcHRpb25zID0ge1xuICAgICAgYmFja2dyb3VuZDogdGhpcy5iYWNrZ3JvdW5kLFxuICAgICAgYmFja2dyb3VuZEFscGhhOiB0aGlzLmJhY2tncm91bmRBbHBoYSxcbiAgICAgIGZvcmVncm91bmQ6IHRoaXMuZm9yZWdyb3VuZCxcbiAgICAgIGZvcmVncm91bmRBbHBoYTogdGhpcy5mb3JlZ3JvdW5kQWxwaGEsXG4gICAgICBsZXZlbDogdGhpcy5sZXZlbCxcbiAgICAgIG1pbWU6IHRoaXMubWltZSxcbiAgICAgIHBhZGRpbmc6IHRoaXMucGFkZGluZyxcbiAgICAgIHNpemU6IHRoaXMuc2l6ZSxcbiAgICAgIHZhbHVlOiB0aGlzLnRvVXRmOEJ5dGVBcnJheSh0aGlzLnZhbHVlKSxcbiAgICB9O1xuICAgIHRoaXMub3B0aW9uID0gb3B0aW9uO1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSB0b1V0ZjhCeXRlQXJyYXkoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmIChzdHIgPT0gbnVsbCkgcmV0dXJuICcnO1xuICAgIHN0ciA9IGVuY29kZVVSSShzdHIpO1xuICAgIGNvbnN0IHJlc3VsdDogbnVtYmVyW10gPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHN0ci5jaGFyQXQoaSkgIT09ICclJykge1xuICAgICAgICByZXN1bHQucHVzaChzdHIuY2hhckNvZGVBdChpKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQucHVzaChwYXJzZUludChzdHIuc3Vic3RyKGkgKyAxLCAyKSwgMTYpKTtcbiAgICAgICAgaSArPSAyO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0Lm1hcCh2ID0+IFN0cmluZy5mcm9tQ2hhckNvZGUodikpLmpvaW4oJycpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubGF6eSQpIHtcbiAgICAgIHRoaXMubGF6eSQudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==