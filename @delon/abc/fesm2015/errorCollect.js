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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JDb2xsZWN0LmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AZGVsb24vYWJjL2Vycm9yLWNvbGxlY3QvZXJyb3ItY29sbGVjdC5jb25maWcudHMiLCJuZzovL0BkZWxvbi9hYmMvZXJyb3ItY29sbGVjdC9lcnJvci1jb2xsZWN0LmNvbXBvbmVudC50cyIsIm5nOi8vQGRlbG9uL2FiYy9lcnJvci1jb2xsZWN0L2Vycm9yLWNvbGxlY3QubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBFcnJvckNvbGxlY3RDb25maWcge1xuICAvKipcbiAgICogw6fCm8KRw6XCkMKsw6nCosKRw6fCjsKHXG4gICAqL1xuICBmcmVxPzogbnVtYmVyID0gNTAwO1xuICAvKipcbiAgICogw6nCocK2w6nCg8Kow6XCgcKPw6fCp8K7w6XCgMK8XG4gICAqL1xuICBvZmZzZXRUb3A/OiBudW1iZXIgPSA2NSArIDY0ICsgOCAqIDI7XG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgSW5wdXQsXG4gIEhvc3RCaW5kaW5nLFxuICBPbkRlc3Ryb3ksXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5qZWN0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmltcG9ydCB7IEVycm9yQ29sbGVjdENvbmZpZyB9IGZyb20gJy4vZXJyb3ItY29sbGVjdC5jb25maWcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlcnJvci1jb2xsZWN0LCBbZXJyb3ItY29sbGVjdF0nLFxuICB0ZW1wbGF0ZTogYFxuICA8aSBuei1pY29uIHR5cGU9XCJleGNsYW1hdGlvbi1jaXJjbGVcIj48L2k+XG4gIDxzcGFuIGNsYXNzPVwicGwtc21cIj57e2NvdW50fX08L3NwYW4+YCxcbiAgaG9zdDogeyAnW2NsYXNzLmVycm9yLWNvbGxlY3RdJzogJ3RydWUnIH0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgRXJyb3JDb2xsZWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlICR0aW1lID0gbnVsbDtcbiAgcHJpdmF0ZSBmb3JtRWw6IEhUTUxGb3JtRWxlbWVudDtcblxuICBASW5wdXQoKVxuICBASW5wdXROdW1iZXIoKVxuICBmcmVxOiBudW1iZXI7XG5cbiAgQElucHV0KClcbiAgQElucHV0TnVtYmVyKClcbiAgb2Zmc2V0VG9wOiBudW1iZXI7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5kLW5vbmUnKVxuICBfaGlkZW4gPSB0cnVlO1xuXG4gIGNvdW50ID0gMDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBjb2c6IEVycm9yQ29sbGVjdENvbmZpZyxcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnksXG4gICkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29nKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IGVyckVscygpIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtRWwucXVlcnlTZWxlY3RvckFsbCgnLmhhcy1lcnJvcicpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGUoKSB7XG4gICAgY29uc3QgY291bnQgPSB0aGlzLmVyckVscy5sZW5ndGg7XG4gICAgaWYgKGNvdW50ID09PSB0aGlzLmNvdW50KSByZXR1cm47XG4gICAgdGhpcy5jb3VudCA9IGNvdW50O1xuICAgIHRoaXMuX2hpZGVuID0gY291bnQgPT09IDA7XG4gICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgX2NsaWNrKCkge1xuICAgIGlmICh0aGlzLmNvdW50ID09PSAwKSByZXR1cm4gZmFsc2U7XG4gICAgLy8gbnotZm9ybS1jb250cm9sXG4gICAgY29uc3QgZWxzID0gdGhpcy5lcnJFbHM7XG4gICAgY29uc3QgZm9ybUl0ZW1FbCA9IHRoaXMuZmluZFBhcmVudChlbHNbMF0sICdbbnotZm9ybS1jb250cm9sXScpIHx8IGVsc1swXTtcbiAgICBmb3JtSXRlbUVsLnNjcm9sbEludG9WaWV3KHRydWUpO1xuICAgIC8vIGZpeCBoZWFkZXIgaGVpZ2h0XG4gICAgdGhpcy5kb2MuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCAtPSB0aGlzLm9mZnNldFRvcDtcbiAgfVxuXG4gIHByaXZhdGUgaW5zdGFsbCgpIHtcbiAgICB0aGlzLnVuaW5zdGFsbCgpO1xuICAgIHRoaXMuJHRpbWUgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLnVwZGF0ZSgpLCB0aGlzLmZyZXEpO1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBwcml2YXRlIHVuaW5zdGFsbCgpIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMuJHRpbWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBmaW5kUGFyZW50KGVsOiBhbnksIHNlbGVjdG9yOiBzdHJpbmcpIHtcbiAgICBsZXQgcmV0RWwgPSBudWxsO1xuICAgIHdoaWxlIChlbCkge1xuICAgICAgaWYgKGVsLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpKSB7XG4gICAgICAgIHJldEVsID0gZWw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZWwgPSBlbC5wYXJlbnRFbGVtZW50O1xuICAgIH1cbiAgICByZXR1cm4gcmV0RWw7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmZvcm1FbCA9IHRoaXMuZmluZFBhcmVudCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdmb3JtJyk7XG4gICAgaWYgKHRoaXMuZm9ybUVsID09PSBudWxsKSB0aHJvdyBuZXcgRXJyb3IoJ8OmwpzCqsOmwonCvsOlwojCsMOmwpzCicOmwpXCiCBmb3JtIMOlwoXCg8OnwrTCoCcpO1xuICAgIHRoaXMuaW5zdGFsbCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy51bmluc3RhbGwoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEZWxvblV0aWxNb2R1bGUgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmltcG9ydCB7IEVycm9yQ29sbGVjdENvbXBvbmVudCB9IGZyb20gJy4vZXJyb3ItY29sbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXJyb3JDb2xsZWN0Q29uZmlnIH0gZnJvbSAnLi9lcnJvci1jb2xsZWN0LmNvbmZpZyc7XG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbRXJyb3JDb2xsZWN0Q29tcG9uZW50XTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRGVsb25VdGlsTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbLi4uQ09NUE9ORU5UU10sXG4gIGV4cG9ydHM6IFsuLi5DT01QT05FTlRTXSxcbn0pXG5leHBvcnQgY2xhc3MgRXJyb3JDb2xsZWN0TW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBFcnJvckNvbGxlY3RNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtFcnJvckNvbGxlY3RDb25maWddLFxuICAgIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9f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