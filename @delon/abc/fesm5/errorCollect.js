import { __spread, __decorate, __metadata } from 'tslib';
import { Component, Input, HostBinding, ElementRef, HostListener, Inject, ChangeDetectionStrategy, ChangeDetectorRef, NgModule } from '@angular/core';
import { DOCUMENT, CommonModule } from '@angular/common';
import { InputNumber, DelonUtilModule } from '@delon/util';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ErrorCollectConfig = /** @class */ (function () {
    function ErrorCollectConfig() {
        /**
         * 监听频率
         */
        this.freq = 500;
        /**
         * 顶部偏移值
         */
        this.offsetTop = 65 + 64 + 8 * 2;
    }
    return ErrorCollectConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * 错误消息采集器
 * PS：虽然此法并不好看，但对响应式表单&模板表单有很好的效果。
 */
var ErrorCollectComponent = /** @class */ (function () {
    function ErrorCollectComponent(cog, el, cd, doc) {
        this.el = el;
        this.cd = cd;
        this.doc = doc;
        this.$time = null;
        this._hiden = true;
        this.count = 0;
        Object.assign(this, cog);
    }
    Object.defineProperty(ErrorCollectComponent.prototype, "errEls", {
        get: /**
         * @return {?}
         */
        function () {
            return this.formEl.querySelectorAll('.has-error');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ErrorCollectComponent.prototype.update = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var count = this.errEls.length;
        if (count === this.count)
            return;
        this.count = count;
        this._hiden = count === 0;
        this.cd.markForCheck();
    };
    /**
     * @return {?}
     */
    ErrorCollectComponent.prototype._click = /**
     * @return {?}
     */
    function () {
        if (this.count === 0)
            return false;
        /** @type {?} */
        var els = this.errEls;
        /** @type {?} */
        var formItemEl = this.findParent(els[0], '[nz-form-control]') || els[0];
        formItemEl.scrollIntoView(true);
        // fix header height
        this.doc.documentElement.scrollTop -= this.offsetTop;
    };
    /**
     * @return {?}
     */
    ErrorCollectComponent.prototype.install = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.uninstall();
        this.$time = setInterval(function () { return _this.update(); }, this.freq);
        this.update();
    };
    /**
     * @return {?}
     */
    ErrorCollectComponent.prototype.uninstall = /**
     * @return {?}
     */
    function () {
        clearInterval(this.$time);
    };
    /**
     * @param {?} el
     * @param {?} selector
     * @return {?}
     */
    ErrorCollectComponent.prototype.findParent = /**
     * @param {?} el
     * @param {?} selector
     * @return {?}
     */
    function (el, selector) {
        /** @type {?} */
        var retEl = null;
        while (el) {
            if (el.querySelector(selector)) {
                retEl = el;
                break;
            }
            el = el.parentElement;
        }
        return retEl;
    };
    /**
     * @return {?}
     */
    ErrorCollectComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.formEl = this.findParent(this.el.nativeElement, 'form');
        if (this.formEl === null)
            throw new Error('未找到有效 form 元素');
        this.install();
    };
    /**
     * @return {?}
     */
    ErrorCollectComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.uninstall();
    };
    ErrorCollectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'error-collect, [error-collect]',
                    template: "\n  <i class=\"anticon anticon-exclamation-circle\"></i>\n  <span class=\"pl-sm\">{{count}}</span>",
                    host: { '[class.error-collect]': 'true' },
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false
                }] }
    ];
    /** @nocollapse */
    ErrorCollectComponent.ctorParameters = function () { return [
        { type: ErrorCollectConfig },
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    ErrorCollectComponent.propDecorators = {
        freq: [{ type: Input }],
        offsetTop: [{ type: Input }],
        _hiden: [{ type: HostBinding, args: ['class.d-none',] }],
        _click: [{ type: HostListener, args: ['click',] }]
    };
    __decorate([
        InputNumber(),
        __metadata("design:type", Number)
    ], ErrorCollectComponent.prototype, "freq", void 0);
    __decorate([
        InputNumber(),
        __metadata("design:type", Number)
    ], ErrorCollectComponent.prototype, "offsetTop", void 0);
    return ErrorCollectComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var COMPONENTS = [ErrorCollectComponent];
var ErrorCollectModule = /** @class */ (function () {
    function ErrorCollectModule() {
    }
    /**
     * @return {?}
     */
    ErrorCollectModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: ErrorCollectModule,
            providers: [ErrorCollectConfig],
        };
    };
    ErrorCollectModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, DelonUtilModule],
                    declarations: __spread(COMPONENTS),
                    exports: __spread(COMPONENTS),
                },] }
    ];
    return ErrorCollectModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { ErrorCollectComponent, ErrorCollectConfig, ErrorCollectModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JDb2xsZWN0LmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AZGVsb24vYWJjL2Vycm9yLWNvbGxlY3QvZXJyb3ItY29sbGVjdC5jb25maWcudHMiLCJuZzovL0BkZWxvbi9hYmMvZXJyb3ItY29sbGVjdC9lcnJvci1jb2xsZWN0LmNvbXBvbmVudC50cyIsIm5nOi8vQGRlbG9uL2FiYy9lcnJvci1jb2xsZWN0L2Vycm9yLWNvbGxlY3QubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBFcnJvckNvbGxlY3RDb25maWcge1xyXG4gIC8qKlxyXG4gICAqIMOnwpvCkcOlwpDCrMOpwqLCkcOnwo7Ch1xyXG4gICAqL1xyXG4gIGZyZXE/OiBudW1iZXIgPSA1MDA7XHJcbiAgLyoqXHJcbiAgICogw6nCocK2w6nCg8Kow6XCgcKPw6fCp8K7w6XCgMK8XHJcbiAgICovXHJcbiAgb2Zmc2V0VG9wPzogbnVtYmVyID0gNjUgKyA2NCArIDggKiAyO1xyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIE9uSW5pdCxcclxuICBJbnB1dCxcclxuICBIb3N0QmluZGluZyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgRWxlbWVudFJlZixcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgSW5qZWN0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xyXG5cclxuaW1wb3J0IHsgRXJyb3JDb2xsZWN0Q29uZmlnIH0gZnJvbSAnLi9lcnJvci1jb2xsZWN0LmNvbmZpZyc7XHJcblxyXG4vKipcclxuICogw6nClMKZw6jCr8Kvw6bCtsKIw6bCgcKvw6nCh8KHw6nCm8KGw6XCmcKoXHJcbiAqIFBTw6/CvMKaw6jCmcK9w6fChMK2w6bCrcKkw6bCs8KVw6XCucK2w6TCuMKNw6XCpcK9w6fCnMKLw6/CvMKMw6TCvcKGw6XCr8K5w6XCk8KNw6XCusKUw6XCvMKPw6jCocKow6XCjcKVJsOmwqjCocOmwp3Cv8OowqHCqMOlwo3ClcOmwpzCicOlwr7CiMOlwqXCvcOnwprChMOmwpXCiMOmwp7CnMOjwoDCglxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdlcnJvci1jb2xsZWN0LCBbZXJyb3ItY29sbGVjdF0nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPGkgY2xhc3M9XCJhbnRpY29uIGFudGljb24tZXhjbGFtYXRpb24tY2lyY2xlXCI+PC9pPlxyXG4gIDxzcGFuIGNsYXNzPVwicGwtc21cIj57e2NvdW50fX08L3NwYW4+YCxcclxuICBob3N0OiB7ICdbY2xhc3MuZXJyb3ItY29sbGVjdF0nOiAndHJ1ZScgfSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEVycm9yQ29sbGVjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBwcml2YXRlICR0aW1lID0gbnVsbDtcclxuICBwcml2YXRlIGZvcm1FbDogSFRNTEZvcm1FbGVtZW50O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIEBJbnB1dE51bWJlcigpXHJcbiAgZnJlcTogbnVtYmVyO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIEBJbnB1dE51bWJlcigpXHJcbiAgb2Zmc2V0VG9wOiBudW1iZXI7XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZC1ub25lJylcclxuICBfaGlkZW4gPSB0cnVlO1xyXG5cclxuICBjb3VudCA9IDA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgY29nOiBFcnJvckNvbGxlY3RDb25maWcsXHJcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogYW55LFxyXG4gICkge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb2cpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXQgZXJyRWxzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZm9ybUVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5oYXMtZXJyb3InKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlKCkge1xyXG4gICAgY29uc3QgY291bnQgPSB0aGlzLmVyckVscy5sZW5ndGg7XHJcbiAgICBpZiAoY291bnQgPT09IHRoaXMuY291bnQpIHJldHVybjtcclxuICAgIHRoaXMuY291bnQgPSBjb3VudDtcclxuICAgIHRoaXMuX2hpZGVuID0gY291bnQgPT09IDA7XHJcbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxyXG4gIF9jbGljaygpIHtcclxuICAgIGlmICh0aGlzLmNvdW50ID09PSAwKSByZXR1cm4gZmFsc2U7XHJcbiAgICAvLyBuei1mb3JtLWNvbnRyb2xcclxuICAgIGNvbnN0IGVscyA9IHRoaXMuZXJyRWxzO1xyXG4gICAgY29uc3QgZm9ybUl0ZW1FbCA9IHRoaXMuZmluZFBhcmVudChlbHNbMF0sICdbbnotZm9ybS1jb250cm9sXScpIHx8IGVsc1swXTtcclxuICAgIGZvcm1JdGVtRWwuc2Nyb2xsSW50b1ZpZXcodHJ1ZSk7XHJcbiAgICAvLyBmaXggaGVhZGVyIGhlaWdodFxyXG4gICAgdGhpcy5kb2MuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCAtPSB0aGlzLm9mZnNldFRvcDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5zdGFsbCgpIHtcclxuICAgIHRoaXMudW5pbnN0YWxsKCk7XHJcbiAgICB0aGlzLiR0aW1lID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy51cGRhdGUoKSwgdGhpcy5mcmVxKTtcclxuICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVuaW5zdGFsbCgpIHtcclxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy4kdGltZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZpbmRQYXJlbnQoZWw6IGFueSwgc2VsZWN0b3I6IHN0cmluZykge1xyXG4gICAgbGV0IHJldEVsID0gbnVsbDtcclxuICAgIHdoaWxlIChlbCkge1xyXG4gICAgICBpZiAoZWwucXVlcnlTZWxlY3RvcihzZWxlY3RvcikpIHtcclxuICAgICAgICByZXRFbCA9IGVsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGVsID0gZWwucGFyZW50RWxlbWVudDtcclxuICAgIH1cclxuICAgIHJldHVybiByZXRFbDtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5mb3JtRWwgPSB0aGlzLmZpbmRQYXJlbnQodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnZm9ybScpO1xyXG4gICAgaWYgKHRoaXMuZm9ybUVsID09PSBudWxsKSB0aHJvdyBuZXcgRXJyb3IoJ8OmwpzCqsOmwonCvsOlwojCsMOmwpzCicOmwpXCiCBmb3JtIMOlwoXCg8OnwrTCoCcpO1xyXG4gICAgdGhpcy5pbnN0YWxsKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMudW5pbnN0YWxsKCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IERlbG9uVXRpbE1vZHVsZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcclxuXHJcbmltcG9ydCB7IEVycm9yQ29sbGVjdENvbXBvbmVudCB9IGZyb20gJy4vZXJyb3ItY29sbGVjdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBFcnJvckNvbGxlY3RDb25maWcgfSBmcm9tICcuL2Vycm9yLWNvbGxlY3QuY29uZmlnJztcclxuXHJcbmNvbnN0IENPTVBPTkVOVFMgPSBbRXJyb3JDb2xsZWN0Q29tcG9uZW50XTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRGVsb25VdGlsTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTXSxcclxuICBleHBvcnRzOiBbLi4uQ09NUE9ORU5UU10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFcnJvckNvbGxlY3RNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IEVycm9yQ29sbGVjdE1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbRXJyb3JDb2xsZWN0Q29uZmlnXSxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxJQUFBOzs7OztvQkFJa0IsR0FBRzs7Ozt5QkFJRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDOzs2QkFSdEM7SUFTQzs7Ozs7Ozs7Ozs7SUNzQ0MsK0JBQ0UsR0FBdUIsRUFDZixJQUNBLElBQ2tCLEdBQVE7UUFGMUIsT0FBRSxHQUFGLEVBQUU7UUFDRixPQUFFLEdBQUYsRUFBRTtRQUNnQixRQUFHLEdBQUgsR0FBRyxDQUFLO3FCQXBCcEIsSUFBSTtzQkFZWCxJQUFJO3FCQUVMLENBQUM7UUFRUCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztLQUMxQjswQkFFVyx5Q0FBTTs7Ozs7WUFDaEIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDOzs7Ozs7OztJQUc1QyxzQ0FBTTs7Ozs7UUFDWixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNqQyxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsS0FBSztZQUFFLE9BQU87UUFDakMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLEtBQUssQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7Ozs7O0lBSXpCLHNDQUFNOzs7SUFETjtRQUVFLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxDQUFDO1lBQUUsT0FBTyxLQUFLLENBQUM7O1FBRW5DLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7O1FBQ3hCLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLG1CQUFtQixDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFFLFVBQVUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7O1FBRWhDLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDO0tBQ3REOzs7O0lBRU8sdUNBQU87Ozs7O1FBQ2IsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsTUFBTSxFQUFFLEdBQUEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDOzs7OztJQUdSLHlDQUFTOzs7O1FBQ2YsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7OztJQUdwQiwwQ0FBVTs7Ozs7Y0FBQyxFQUFPLEVBQUUsUUFBZ0I7O1FBQzFDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztRQUNqQixPQUFPLEVBQUUsRUFBRTtZQUNULElBQUksRUFBRSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDOUIsS0FBSyxHQUFHLEVBQUUsQ0FBQztnQkFDWCxNQUFNO2FBQ1A7WUFDRCxFQUFFLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQztTQUN2QjtRQUNELE9BQU8sS0FBSyxDQUFDOzs7OztJQUdmLHdDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM3RCxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSTtZQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0tBQ2hCOzs7O0lBRUQsMkNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0tBQ2xCOztnQkF4RkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQ0FBZ0M7b0JBQzFDLFFBQVEsRUFBRSxvR0FFMkI7b0JBQ3JDLElBQUksRUFBRSxFQUFFLHVCQUF1QixFQUFFLE1BQU0sRUFBRTtvQkFDekMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLG1CQUFtQixFQUFFLEtBQUs7aUJBQzNCOzs7O2dCQWRRLGtCQUFrQjtnQkFUekIsVUFBVTtnQkFJVixpQkFBaUI7Z0RBeUNkLE1BQU0sU0FBQyxRQUFROzs7dUJBakJqQixLQUFLOzRCQUlMLEtBQUs7eUJBSUwsV0FBVyxTQUFDLGNBQWM7eUJBMEIxQixZQUFZLFNBQUMsT0FBTzs7O1FBakNwQixXQUFXLEVBQUU7Ozs7UUFJYixXQUFXLEVBQUU7OztnQ0F2Q2hCOzs7Ozs7OztBQ09BLElBQU0sVUFBVSxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQzs7Ozs7OztJQVFsQywwQkFBTzs7O0lBQWQ7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixTQUFTLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztTQUNoQyxDQUFDO0tBQ0g7O2dCQVhGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDO29CQUN4QyxZQUFZLFdBQU0sVUFBVSxDQUFDO29CQUM3QixPQUFPLFdBQU0sVUFBVSxDQUFDO2lCQUN6Qjs7NkJBYkQ7Ozs7Ozs7Ozs7Ozs7OzsifQ==