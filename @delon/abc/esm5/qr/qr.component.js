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
        this.value = '';
        // tslint:disable-next-line:no-output-native
        this.change = new EventEmitter();
        this.cog = (/** @type {?} */ (configSrv.merge('qr', QR_DEFULAT_CONFIG)));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9xci8iLCJzb3VyY2VzIjpbInFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBQ04saUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBaUIsV0FBVyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUUxRixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBR2hEO0lBcUNFLGFBQWE7SUFFYixxQkFBb0IsR0FBc0IsRUFBRSxTQUE2QixFQUFVLE9BQW9CO1FBQW5GLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQXlDLFlBQU8sR0FBUCxPQUFPLENBQWE7UUFyQi9GLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFjZCxVQUFLLEdBQUcsRUFBRSxDQUFDOztRQUdELFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBS3JELElBQUksQ0FBQyxHQUFHLEdBQUcsbUJBQUEsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLENBQUMsRUFBQyxDQUFDO1FBQ3JELE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7OztJQUVPLDBCQUFJOzs7O0lBQVo7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNoQixPQUFPO1NBQ1I7UUFFRCxJQUFJLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSSxFQUFFO1lBQ25CLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLG1CQUFB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Ozs7O0lBQ3RCLDRCQUE0Qjs7Ozs7SUFDNUIseUJBQWdCOzs7OztJQUNoQiwwQkFBMkI7Ozs7O0lBQzNCLDZCQUEwQjs7Ozs7SUFDMUIsNkJBQXVCOztJQUV2Qiw4QkFBZ0I7O0lBSWhCLGlDQUE0Qjs7SUFDNUIsc0NBQWlDOztJQUNqQyxpQ0FBNEI7O0lBQzVCLHNDQUFpQzs7SUFDakMsNEJBQXNDOztJQUN0QywyQkFBc0I7O0lBQ3RCLDhCQUF3Qzs7SUFDeEMsMkJBQXFDOztJQUNyQyw0QkFBb0I7O0lBQ3BCLDRCQUFzQzs7SUFFdEMsNkJBQXVEOzs7OztJQUkzQywwQkFBOEI7Ozs7O0lBQWlDLDhCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UsIEFsYWluUVJDb25maWcsIElucHV0TnVtYmVyLCBMYXp5U2VydmljZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUVJfREVGVUxBVF9DT05GSUcgfSBmcm9tICcuL3FyLmNvbmZpZyc7XG5pbXBvcnQgeyBRUk9wdGlvbnMgfSBmcm9tICcuL3FyLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncXInLFxuICBleHBvcnRBczogJ3FyJyxcbiAgdGVtcGxhdGU6IGAgPGltZyBzdHlsZT1cIm1heC13aWR0aDogMTAwJTsgbWF4LWhlaWdodDogMTAwJTtcIiBbc3JjXT1cImRhdGFVUkxcIiAvPiBgLFxuICBob3N0OiB7XG4gICAgJ1tzdHlsZS5kaXNwbGF5XSc6IGAnaW5saW5lLWJsb2NrJ2AsXG4gICAgJ1tzdHlsZS5oZWlnaHQucHhdJzogJ3NpemUnLFxuICAgICdbc3R5bGUud2lkdGgucHhdJzogJ3NpemUnLFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFFSQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGxhenkkOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgcXI6IGFueTtcbiAgcHJpdmF0ZSBjb2c6IEFsYWluUVJDb25maWc7XG4gIHByaXZhdGUgb3B0aW9uOiBRUk9wdGlvbnM7XG4gIHByaXZhdGUgaW5pdGVkID0gZmFsc2U7XG5cbiAgZGF0YVVSTDogc3RyaW5nO1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCkgYmFja2dyb3VuZDogc3RyaW5nO1xuICBASW5wdXQoKSBiYWNrZ3JvdW5kQWxwaGE6IG51bWJlcjtcbiAgQElucHV0KCkgZm9yZWdyb3VuZDogc3RyaW5nO1xuICBASW5wdXQoKSBmb3JlZ3JvdW5kQWxwaGE6IG51bWJlcjtcbiAgQElucHV0KCkgbGV2ZWw6ICdMJyB8ICdNJyB8ICdRJyB8ICdIJztcbiAgQElucHV0KCkgbWltZTogc3RyaW5nO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBwYWRkaW5nOiBudW1iZXI7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHNpemU6IG51bWJlcjtcbiAgQElucHV0KCkgdmFsdWUgPSAnJztcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgZGVsYXk6IG51bWJlcjtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLW91dHB1dC1uYXRpdmVcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIGNvbmZpZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlLCBwcml2YXRlIGxhenlTcnY6IExhenlTZXJ2aWNlKSB7XG4gICAgdGhpcy5jb2cgPSBjb25maWdTcnYubWVyZ2UoJ3FyJywgUVJfREVGVUxBVF9DT05GSUcpITtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIHRoaXMuY29nKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaW5pdGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucXIgPT0gbnVsbCkge1xuICAgICAgdGhpcy5xciA9IG5ldyAod2luZG93IGFzIGFueSkuUVJpb3VzKCk7XG4gICAgfVxuICAgIHRoaXMucXIuc2V0KHRoaXMub3B0aW9uKTtcbiAgICB0aGlzLmRhdGFVUkwgPSB0aGlzLnFyLnRvRGF0YVVSTCgpO1xuICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcy5kYXRhVVJMKTtcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBwcml2YXRlIGluaXREZWxheSgpOiB2b2lkIHtcbiAgICB0aGlzLmluaXRlZCA9IHRydWU7XG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmluaXQoKSwgdGhpcy5kZWxheSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgaWYgKCh3aW5kb3cgYXMgYW55KS5RUmlvdXMpIHtcbiAgICAgIHRoaXMuaW5pdERlbGF5KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHVybCA9IHRoaXMuY29nLmxpYiE7XG4gICAgdGhpcy5sYXp5JCA9IHRoaXMubGF6eVNydi5jaGFuZ2VcbiAgICAgIC5waXBlKGZpbHRlcihscyA9PiBscy5sZW5ndGggPT09IDEgJiYgbHNbMF0ucGF0aCA9PT0gdXJsICYmIGxzWzBdLnN0YXR1cyA9PT0gJ29rJykpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuaW5pdERlbGF5KCkpO1xuICAgIHRoaXMubGF6eVNydi5sb2FkKHVybCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICBjb25zdCBvcHRpb246IFFST3B0aW9ucyA9IHtcbiAgICAgIGJhY2tncm91bmQ6IHRoaXMuYmFja2dyb3VuZCxcbiAgICAgIGJhY2tncm91bmRBbHBoYTogdGhpcy5iYWNrZ3JvdW5kQWxwaGEsXG4gICAgICBmb3JlZ3JvdW5kOiB0aGlzLmZvcmVncm91bmQsXG4gICAgICBmb3JlZ3JvdW5kQWxwaGE6IHRoaXMuZm9yZWdyb3VuZEFscGhhLFxuICAgICAgbGV2ZWw6IHRoaXMubGV2ZWwsXG4gICAgICBtaW1lOiB0aGlzLm1pbWUsXG4gICAgICBwYWRkaW5nOiB0aGlzLnBhZGRpbmcsXG4gICAgICBzaXplOiB0aGlzLnNpemUsXG4gICAgICB2YWx1ZTogdGhpcy50b1V0ZjhCeXRlQXJyYXkodGhpcy52YWx1ZSksXG4gICAgfTtcbiAgICB0aGlzLm9wdGlvbiA9IG9wdGlvbjtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIHByaXZhdGUgdG9VdGY4Qnl0ZUFycmF5KHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBzdHIgPSBlbmNvZGVVUkkoc3RyKTtcbiAgICBjb25zdCByZXN1bHQ6IG51bWJlcltdID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChzdHIuY2hhckF0KGkpICE9PSAnJScpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goc3RyLmNoYXJDb2RlQXQoaSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0LnB1c2gocGFyc2VJbnQoc3RyLnN1YnN0cihpICsgMSwgMiksIDE2KSk7XG4gICAgICAgIGkgKz0gMjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdC5tYXAodiA9PiBTdHJpbmcuZnJvbUNoYXJDb2RlKHYpKS5qb2luKCcnKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmxhenkkKSB7XG4gICAgICB0aGlzLmxhenkkLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=