import { __decorate, __metadata } from 'tslib';
import { Component, Input, HostBinding, ElementRef, HostListener, Inject, ChangeDetectionStrategy, ChangeDetectorRef, NgModule } from '@angular/core';
import { DOCUMENT, CommonModule } from '@angular/common';
import { InputNumber, DelonUtilModule } from '@delon/util';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
        // nz-form-control
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
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { ErrorCollectComponent, ErrorCollectConfig, ErrorCollectModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JDb2xsZWN0LmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AZGVsb24vYWJjL2Vycm9yLWNvbGxlY3QvZXJyb3ItY29sbGVjdC5jb25maWcudHMiLCJuZzovL0BkZWxvbi9hYmMvZXJyb3ItY29sbGVjdC9lcnJvci1jb2xsZWN0LmNvbXBvbmVudC50cyIsIm5nOi8vQGRlbG9uL2FiYy9lcnJvci1jb2xsZWN0L2Vycm9yLWNvbGxlY3QubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBFcnJvckNvbGxlY3RDb25maWcge1xuICAvKipcbiAgICogw6fCm8KRw6XCkMKsw6nCosKRw6fCjsKHXG4gICAqL1xuICBmcmVxPzogbnVtYmVyID0gNTAwO1xuICAvKipcbiAgICogw6nCocK2w6nCg8Kow6XCgcKPw6fCp8K7w6XCgMK8XG4gICAqL1xuICBvZmZzZXRUb3A/OiBudW1iZXIgPSA2NSArIDY0ICsgOCAqIDI7XG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgSW5wdXQsXG4gIEhvc3RCaW5kaW5nLFxuICBPbkRlc3Ryb3ksXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5qZWN0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmltcG9ydCB7IEVycm9yQ29sbGVjdENvbmZpZyB9IGZyb20gJy4vZXJyb3ItY29sbGVjdC5jb25maWcnO1xuXG4vKipcbiAqIMOpwpTCmcOowq/Cr8OmwrbCiMOmwoHCr8OpwofCh8OpwpvChsOlwpnCqFxuICogUFPDr8K8wprDqMKZwr3Dp8KEwrbDpsKtwqTDpsKzwpXDpcK5wrbDpMK4wo3DpcKlwr3Dp8KcwovDr8K8wozDpMK9wobDpcKvwrnDpcKTwo3DpcK6wpTDpcK8wo/DqMKhwqjDpcKNwpUmw6bCqMKhw6bCncK/w6jCocKow6XCjcKVw6bCnMKJw6XCvsKIw6XCpcK9w6fCmsKEw6bClcKIw6bCnsKcw6PCgMKCXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Vycm9yLWNvbGxlY3QsIFtlcnJvci1jb2xsZWN0XScsXG4gIHRlbXBsYXRlOiBgXG4gIDxpIG56LWljb24gdHlwZT1cImV4Y2xhbWF0aW9uLWNpcmNsZVwiPjwvaT5cbiAgPHNwYW4gY2xhc3M9XCJwbC1zbVwiPnt7Y291bnR9fTwvc3Bhbj5gLFxuICBob3N0OiB7ICdbY2xhc3MuZXJyb3ItY29sbGVjdF0nOiAndHJ1ZScgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBFcnJvckNvbGxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgJHRpbWUgPSBudWxsO1xuICBwcml2YXRlIGZvcm1FbDogSFRNTEZvcm1FbGVtZW50O1xuXG4gIEBJbnB1dCgpXG4gIEBJbnB1dE51bWJlcigpXG4gIGZyZXE6IG51bWJlcjtcblxuICBASW5wdXQoKVxuICBASW5wdXROdW1iZXIoKVxuICBvZmZzZXRUb3A6IG51bWJlcjtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmQtbm9uZScpXG4gIF9oaWRlbiA9IHRydWU7XG5cbiAgY291bnQgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGNvZzogRXJyb3JDb2xsZWN0Q29uZmlnLFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IGFueSxcbiAgKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb2cpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgZXJyRWxzKCkge1xuICAgIHJldHVybiB0aGlzLmZvcm1FbC5xdWVyeVNlbGVjdG9yQWxsKCcuaGFzLWVycm9yJyk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZSgpIHtcbiAgICBjb25zdCBjb3VudCA9IHRoaXMuZXJyRWxzLmxlbmd0aDtcbiAgICBpZiAoY291bnQgPT09IHRoaXMuY291bnQpIHJldHVybjtcbiAgICB0aGlzLmNvdW50ID0gY291bnQ7XG4gICAgdGhpcy5faGlkZW4gPSBjb3VudCA9PT0gMDtcbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBfY2xpY2soKSB7XG4gICAgaWYgKHRoaXMuY291bnQgPT09IDApIHJldHVybiBmYWxzZTtcbiAgICAvLyBuei1mb3JtLWNvbnRyb2xcbiAgICBjb25zdCBlbHMgPSB0aGlzLmVyckVscztcbiAgICBjb25zdCBmb3JtSXRlbUVsID0gdGhpcy5maW5kUGFyZW50KGVsc1swXSwgJ1tuei1mb3JtLWNvbnRyb2xdJykgfHwgZWxzWzBdO1xuICAgIGZvcm1JdGVtRWwuc2Nyb2xsSW50b1ZpZXcodHJ1ZSk7XG4gICAgLy8gZml4IGhlYWRlciBoZWlnaHRcbiAgICB0aGlzLmRvYy5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIC09IHRoaXMub2Zmc2V0VG9wO1xuICB9XG5cbiAgcHJpdmF0ZSBpbnN0YWxsKCkge1xuICAgIHRoaXMudW5pbnN0YWxsKCk7XG4gICAgdGhpcy4kdGltZSA9IHNldEludGVydmFsKCgpID0+IHRoaXMudXBkYXRlKCksIHRoaXMuZnJlcSk7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgdW5pbnN0YWxsKCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy4kdGltZSk7XG4gIH1cblxuICBwcml2YXRlIGZpbmRQYXJlbnQoZWw6IGFueSwgc2VsZWN0b3I6IHN0cmluZykge1xuICAgIGxldCByZXRFbCA9IG51bGw7XG4gICAgd2hpbGUgKGVsKSB7XG4gICAgICBpZiAoZWwucXVlcnlTZWxlY3RvcihzZWxlY3RvcikpIHtcbiAgICAgICAgcmV0RWwgPSBlbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBlbCA9IGVsLnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICAgIHJldHVybiByZXRFbDtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZm9ybUVsID0gdGhpcy5maW5kUGFyZW50KHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2Zvcm0nKTtcbiAgICBpZiAodGhpcy5mb3JtRWwgPT09IG51bGwpIHRocm93IG5ldyBFcnJvcignw6bCnMKqw6bCicK+w6XCiMKww6bCnMKJw6bClcKIIGZvcm0gw6XChcKDw6fCtMKgJyk7XG4gICAgdGhpcy5pbnN0YWxsKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnVuaW5zdGFsbCgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IERlbG9uVXRpbE1vZHVsZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuaW1wb3J0IHsgRXJyb3JDb2xsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9lcnJvci1jb2xsZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFcnJvckNvbGxlY3RDb25maWcgfSBmcm9tICcuL2Vycm9yLWNvbGxlY3QuY29uZmlnJztcblxuY29uc3QgQ09NUE9ORU5UUyA9IFtFcnJvckNvbGxlY3RDb21wb25lbnRdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBEZWxvblV0aWxNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTXSxcbiAgZXhwb3J0czogWy4uLkNPTVBPTkVOVFNdLFxufSlcbmV4cG9ydCBjbGFzcyBFcnJvckNvbGxlY3RNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEVycm9yQ29sbGVjdE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW0Vycm9yQ29sbGVjdENvbmZpZ10sXG4gICAgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbInRzbGliXzEuX19kZWNvcmF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsTUFBYSxrQkFBa0I7SUFBL0I7Ozs7UUFJRSxTQUFJLEdBQVksR0FBRyxDQUFDOzs7O1FBSXBCLGNBQVMsR0FBWSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDdEM7Q0FBQTs7Ozs7Ozs7OztBQ3FCRCxNQUFhLHFCQUFxQjs7Ozs7OztJQWlCaEMsWUFDRSxHQUF1QixFQUNmLEVBQWMsRUFDZCxFQUFxQixFQUNILEdBQVE7UUFGMUIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBQ0gsUUFBRyxHQUFILEdBQUcsQ0FBSztRQXBCNUIsVUFBSyxHQUFHLElBQUksQ0FBQztRQVlyQixXQUFNLEdBQUcsSUFBSSxDQUFDO1FBRWQsVUFBSyxHQUFHLENBQUMsQ0FBQztRQVFSLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQzFCOzs7O0lBRUQsSUFBWSxNQUFNO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztLQUNuRDs7OztJQUVPLE1BQU07O2NBQ04sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTtRQUNoQyxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsS0FBSztZQUFFLE9BQU87UUFDakMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFD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