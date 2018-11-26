import { __decorate, __metadata } from 'tslib';
import { Component, Input, HostBinding, ElementRef, HostListener, Inject, ChangeDetectionStrategy, ChangeDetectorRef, NgModule } from '@angular/core';
import { DOCUMENT, CommonModule } from '@angular/common';
import { InputNumber, DelonUtilModule } from '@delon/util';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ErrorCollectConfig {
    constructor() {
        /**
         * 监听频率
         */
        this.freq = 500;
        /**
         * 顶部偏移值
         */
        this.offsetTop = 65 + 64 + 8 * 2;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * 错误消息采集器
 * PS：虽然此法并不好看，但对响应式表单&模板表单有很好的效果。
 */
class ErrorCollectComponent {
    /**
     * @param {?} cog
     * @param {?} el
     * @param {?} cd
     * @param {?} doc
     */
    constructor(cog, el, cd, doc) {
        this.el = el;
        this.cd = cd;
        this.doc = doc;
        this.$time = null;
        this._hiden = true;
        this.count = 0;
        Object.assign(this, cog);
    }
    /**
     * @return {?}
     */
    get errEls() {
        return this.formEl.querySelectorAll('.has-error');
    }
    /**
     * @return {?}
     */
    update() {
        /** @type {?} */
        const count = this.errEls.length;
        if (count === this.count)
            return;
        this.count = count;
        this._hiden = count === 0;
        this.cd.markForCheck();
    }
    /**
     * @return {?}
     */
    _click() {
        if (this.count === 0)
            return false;
        /** @type {?} */
        const els = this.errEls;
        /** @type {?} */
        const formItemEl = this.findParent(els[0], '[nz-form-control]') || els[0];
        formItemEl.scrollIntoView(true);
        // fix header height
        this.doc.documentElement.scrollTop -= this.offsetTop;
    }
    /**
     * @return {?}
     */
    install() {
        this.uninstall();
        this.$time = setInterval(() => this.update(), this.freq);
        this.update();
    }
    /**
     * @return {?}
     */
    uninstall() {
        clearInterval(this.$time);
    }
    /**
     * @param {?} el
     * @param {?} selector
     * @return {?}
     */
    findParent(el, selector) {
        /** @type {?} */
        let retEl = null;
        while (el) {
            if (el.querySelector(selector)) {
                retEl = el;
                break;
            }
            el = el.parentElement;
        }
        return retEl;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.formEl = this.findParent(this.el.nativeElement, 'form');
        if (this.formEl === null)
            throw new Error('未找到有效 form 元素');
        this.install();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.uninstall();
    }
}
ErrorCollectComponent.decorators = [
    { type: Component, args: [{
                selector: 'error-collect, [error-collect]',
                template: `
  <i nz-icon type="exclamation-circle"></i>
  <span class="pl-sm">{{count}}</span>`,
                host: { '[class.error-collect]': 'true' },
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false
            }] }
];
/** @nocollapse */
ErrorCollectComponent.ctorParameters = () => [
    { type: ErrorCollectConfig },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [ErrorCollectComponent];
class ErrorCollectModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: ErrorCollectModule,
            providers: [ErrorCollectConfig],
        };
    }
}
ErrorCollectModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, DelonUtilModule],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { ErrorCollectComponent, ErrorCollectConfig, ErrorCollectModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JDb2xsZWN0LmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AZGVsb24vYWJjL2Vycm9yLWNvbGxlY3QvZXJyb3ItY29sbGVjdC5jb25maWcudHMiLCJuZzovL0BkZWxvbi9hYmMvZXJyb3ItY29sbGVjdC9lcnJvci1jb2xsZWN0LmNvbXBvbmVudC50cyIsIm5nOi8vQGRlbG9uL2FiYy9lcnJvci1jb2xsZWN0L2Vycm9yLWNvbGxlY3QubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBFcnJvckNvbGxlY3RDb25maWcge1xuICAvKipcbiAgICogw6fCm8KRw6XCkMKsw6nCosKRw6fCjsKHXG4gICAqL1xuICBmcmVxPzogbnVtYmVyID0gNTAwO1xuICAvKipcbiAgICogw6nCocK2w6nCg8Kow6XCgcKPw6fCp8K7w6XCgMK8XG4gICAqL1xuICBvZmZzZXRUb3A/OiBudW1iZXIgPSA2NSArIDY0ICsgOCAqIDI7XG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgSW5wdXQsXG4gIEhvc3RCaW5kaW5nLFxuICBPbkRlc3Ryb3ksXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5qZWN0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmltcG9ydCB7IEVycm9yQ29sbGVjdENvbmZpZyB9IGZyb20gJy4vZXJyb3ItY29sbGVjdC5jb25maWcnO1xuXG4vKipcbiAqIMOpwpTCmcOowq/Cr8OmwrbCiMOmwoHCr8OpwofCh8OpwpvChsOlwpnCqFxuICogUFPDr8K8wprDqMKZwr3Dp8KEwrbDpsKtwqTDpsKzwpXDpcK5wrbDpMK4wo3DpcKlwr3Dp8KcwovDr8K8wozDpMK9wobDpcKvwrnDpcKTwo3DpcK6wpTDpcK8wo/DqMKhwqjDpcKNwpUmw6bCqMKhw6bCncK/w6jCocKow6XCjcKVw6bCnMKJw6XCvsKIw6XCpcK9w6fCmsKEw6bClcKIw6bCnsKcw6PCgMKCXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Vycm9yLWNvbGxlY3QsIFtlcnJvci1jb2xsZWN0XScsXG4gIHRlbXBsYXRlOiBgXG4gIDxpIG56LWljb24gdHlwZT1cImV4Y2xhbWF0aW9uLWNpcmNsZVwiPjwvaT5cbiAgPHNwYW4gY2xhc3M9XCJwbC1zbVwiPnt7Y291bnR9fTwvc3Bhbj5gLFxuICBob3N0OiB7ICdbY2xhc3MuZXJyb3ItY29sbGVjdF0nOiAndHJ1ZScgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBFcnJvckNvbGxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgJHRpbWUgPSBudWxsO1xuICBwcml2YXRlIGZvcm1FbDogSFRNTEZvcm1FbGVtZW50O1xuXG4gIEBJbnB1dCgpXG4gIEBJbnB1dE51bWJlcigpXG4gIGZyZXE6IG51bWJlcjtcblxuICBASW5wdXQoKVxuICBASW5wdXROdW1iZXIoKVxuICBvZmZzZXRUb3A6IG51bWJlcjtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmQtbm9uZScpXG4gIF9oaWRlbiA9IHRydWU7XG5cbiAgY291bnQgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGNvZzogRXJyb3JDb2xsZWN0Q29uZmlnLFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IGFueSxcbiAgKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb2cpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgZXJyRWxzKCkge1xuICAgIHJldHVybiB0aGlzLmZvcm1FbC5xdWVyeVNlbGVjdG9yQWxsKCcuaGFzLWVycm9yJyk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZSgpIHtcbiAgICBjb25zdCBjb3VudCA9IHRoaXMuZXJyRWxzLmxlbmd0aDtcbiAgICBpZiAoY291bnQgPT09IHRoaXMuY291bnQpIHJldHVybjtcbiAgICB0aGlzLmNvdW50ID0gY291bnQ7XG4gICAgdGhpcy5faGlkZW4gPSBjb3VudCA9PT0gMDtcbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBfY2xpY2soKSB7XG4gICAgaWYgKHRoaXMuY291bnQgPT09IDApIHJldHVybiBmYWxzZTtcbiAgICAvLyBuei1mb3JtLWNvbnRyb2xcbiAgICBjb25zdCBlbHMgPSB0aGlzLmVyckVscztcbiAgICBjb25zdCBmb3JtSXRlbUVsID0gdGhpcy5maW5kUGFyZW50KGVsc1swXSwgJ1tuei1mb3JtLWNvbnRyb2xdJykgfHwgZWxzWzBdO1xuICAgIGZvcm1JdGVtRWwuc2Nyb2xsSW50b1ZpZXcodHJ1ZSk7XG4gICAgLy8gZml4IGhlYWRlciBoZWlnaHRcbiAgICB0aGlzLmRvYy5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIC09IHRoaXMub2Zmc2V0VG9wO1xuICB9XG5cbiAgcHJpdmF0ZSBpbnN0YWxsKCkge1xuICAgIHRoaXMudW5pbnN0YWxsKCk7XG4gICAgdGhpcy4kdGltZSA9IHNldEludGVydmFsKCgpID0+IHRoaXMudXBkYXRlKCksIHRoaXMuZnJlcSk7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgdW5pbnN0YWxsKCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy4kdGltZSk7XG4gIH1cblxuICBwcml2YXRlIGZpbmRQYXJlbnQoZWw6IGFueSwgc2VsZWN0b3I6IHN0cmluZykge1xuICAgIGxldCByZXRFbCA9IG51bGw7XG4gICAgd2hpbGUgKGVsKSB7XG4gICAgICBpZiAoZWwucXVlcnlTZWxlY3RvcihzZWxlY3RvcikpIHtcbiAgICAgICAgcmV0RWwgPSBlbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBlbCA9IGVsLnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICAgIHJldHVybiByZXRFbDtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZm9ybUVsID0gdGhpcy5maW5kUGFyZW50KHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2Zvcm0nKTtcbiAgICBpZiAodGhpcy5mb3JtRWwgPT09IG51bGwpIHRocm93IG5ldyBFcnJvcignw6bCnMKqw6bCicK+w6XCiMKww6bCnMKJw6bClcKIIGZvcm0gw6XChcKDw6fCtMKgJyk7XG4gICAgdGhpcy5pbnN0YWxsKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnVuaW5zdGFsbCgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IERlbG9uVXRpbE1vZHVsZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuaW1wb3J0IHsgRXJyb3JDb2xsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9lcnJvci1jb2xsZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFcnJvckNvbGxlY3RDb25maWcgfSBmcm9tICcuL2Vycm9yLWNvbGxlY3QuY29uZmlnJztcblxuY29uc3QgQ09NUE9ORU5UUyA9IFtFcnJvckNvbGxlY3RDb21wb25lbnRdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBEZWxvblV0aWxNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTXSxcbiAgZXhwb3J0czogWy4uLkNPTVBPTkVOVFNdLFxufSlcbmV4cG9ydCBjbGFzcyBFcnJvckNvbGxlY3RNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEVycm9yQ29sbGVjdE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW0Vycm9yQ29sbGVjdENvbmZpZ10sXG4gICAgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7OztvQkFJa0IsR0FBRzs7Ozt5QkFJRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDOztDQUNyQzs7Ozs7Ozs7OztBQ3FCRDs7Ozs7OztJQWlCRSxZQUNFLEdBQXVCLEVBQ2YsSUFDQSxJQUNrQixHQUFRO1FBRjFCLE9BQUUsR0FBRixFQUFFO1FBQ0YsT0FBRSxHQUFGLEVBQUU7UUFDZ0IsUUFBRyxHQUFILEdBQUcsQ0FBSztxQkFwQnBCLElBQUk7c0JBWVgsSUFBSTtxQkFFTCxDQUFDO1FBUVAsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDMUI7Ozs7UUFFVyxNQUFNO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQzs7Ozs7SUFHNUMsTUFBTTs7UUFDWixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNqQyxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsS0FBSztZQUFFLE9BQU87UUFDakMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLEtBQUssQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7Ozs7O0lBSXpCLE1BQU07UUFDSixJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQztZQUFFLE9BQU8s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