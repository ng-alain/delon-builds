/**
 * @fileoverview added by tsickle
 * Generated from: error-collect.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Inject, Input, ViewEncapsulation, } from '@angular/core';
import { AlainConfigService, InputNumber } from '@delon/util';
export class ErrorCollectComponent {
    /**
     * @param {?} el
     * @param {?} cdr
     * @param {?} doc
     * @param {?} configSrv
     */
    constructor(el, cdr, doc, configSrv) {
        this.el = el;
        this.cdr = cdr;
        this.doc = doc;
        this.$time = null;
        this._hiden = true;
        this.count = 0;
        configSrv.attach(this, 'errorCollect', { freq: 500, offsetTop: 65 + 64 + 8 * 2 });
    }
    /**
     * @private
     * @return {?}
     */
    get errEls() {
        return (/** @type {?} */ (this.formEl)).querySelectorAll('.ant-form-item-has-error');
    }
    /**
     * @private
     * @return {?}
     */
    update() {
        /** @type {?} */
        const count = this.errEls.length;
        if (count === this.count)
            return;
        this.count = count;
        this._hiden = count === 0;
        this.cdr.markForCheck();
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
        return true;
    }
    /**
     * @private
     * @return {?}
     */
    install() {
        this.uninstall();
        this.$time = setInterval((/**
         * @return {?}
         */
        () => this.update()), this.freq);
        this.update();
    }
    /**
     * @private
     * @return {?}
     */
    uninstall() {
        clearInterval((/** @type {?} */ (this.$time)));
    }
    /**
     * @private
     * @param {?} el
     * @param {?} selector
     * @return {?}
     */
    findParent(el, selector) {
        /** @type {?} */
        let retEl = null;
        while (el) {
            if (el.querySelector(selector)) {
                retEl = (/** @type {?} */ (el));
                break;
            }
            el = (/** @type {?} */ (el.parentElement));
        }
        return retEl;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.formEl = this.findParent(this.el.nativeElement, 'form');
        if (this.formEl === null)
            throw new Error('No found form element');
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
                exportAs: 'errorCollect',
                template: `
    <i nz-icon nzType="exclamation-circle"></i>
    <span class="pl-sm">{{ count }}</span>
  `,
                host: {
                    '[class.error-collect]': 'true',
                    '[class.d-none]': '_hiden',
                    '(click)': '_click()',
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
ErrorCollectComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: AlainConfigService }
];
ErrorCollectComponent.propDecorators = {
    freq: [{ type: Input }],
    offsetTop: [{ type: Input }]
};
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], ErrorCollectComponent.prototype, "freq", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], ErrorCollectComponent.prototype, "offsetTop", void 0);
if (false) {
    /**
     * @type {?}
     * @private
     */
    ErrorCollectComponent.prototype.$time;
    /**
     * @type {?}
     * @private
     */
    ErrorCollectComponent.prototype.formEl;
    /** @type {?} */
    ErrorCollectComponent.prototype.freq;
    /** @type {?} */
    ErrorCollectComponent.prototype.offsetTop;
    /** @type {?} */
    ErrorCollectComponent.prototype._hiden;
    /** @type {?} */
    ErrorCollectComponent.prototype.count;
    /**
     * @type {?}
     * @private
     */
    ErrorCollectComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    ErrorCollectComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    ErrorCollectComponent.prototype.doc;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItY29sbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL2Vycm9yLWNvbGxlY3QvIiwic291cmNlcyI6WyJlcnJvci1jb2xsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixNQUFNLEVBQ04sS0FBSyxFQUdMLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsa0JBQWtCLEVBQTJCLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQWtCdkYsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7OztJQVdoQyxZQUFvQixFQUFjLEVBQVUsR0FBc0IsRUFBNEIsR0FBUSxFQUFFLFNBQTZCO1FBQWpILE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUE0QixRQUFHLEdBQUgsR0FBRyxDQUFLO1FBVjlGLFVBQUssR0FBZSxJQUFJLENBQUM7UUFNakMsV0FBTSxHQUFHLElBQUksQ0FBQztRQUVkLFVBQUssR0FBRyxDQUFDLENBQUM7UUFHUixTQUFTLENBQUMsTUFBTSxDQUEwQyxJQUFJLEVBQUUsY0FBYyxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM3SCxDQUFDOzs7OztJQUVELElBQVksTUFBTTtRQUNoQixPQUFPLG1CQUFBLElBQUksQ0FBQyxNQUFNLEVBQUMsQ0FBQyxnQkFBZ0IsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0lBQ25FLENBQUM7Ozs7O0lBRU8sTUFBTTs7Y0FDTixLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNO1FBQ2hDLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLO1lBQUUsT0FBTztRQUNqQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssS0FBSyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsTUFBTTtRQUNKLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxDQUFDO1lBQUUsT0FBTyxLQUFLLENBQUM7OztjQUU3QixHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU07O2NBQ2pCLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxtQkFBbUIsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDekUsVUFBVSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxvQkFBb0I7UUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDckQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7OztJQUVPLE9BQU87UUFDYixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxXQUFXOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7OztJQUVPLFNBQVM7UUFDZixhQUFhLENBQUMsbUJBQUEsSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7Ozs7OztJQUVPLFVBQVUsQ0FBQyxFQUFXLEVBQUUsUUFBZ0I7O1lBQzFDLEtBQUssR0FBMkIsSUFBSTtRQUN4QyxPQUFPLEVBQUUsRUFBRTtZQUNULElBQUksRUFBRSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDOUIsS0FBSyxHQUFHLG1CQUFBLEVBQUUsRUFBbUIsQ0FBQztnQkFDOUIsTUFBTTthQUNQO1lBQ0QsRUFBRSxHQUFHLG1CQUFBLEVBQUUsQ0FBQyxhQUFhLEVBQW1CLENBQUM7U0FDMUM7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzdELElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxJQUFJO1lBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDOzs7WUFwRkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQ0FBZ0M7Z0JBQzFDLFFBQVEsRUFBRSxjQUFjO2dCQUN4QixRQUFRLEVBQUU7OztHQUdUO2dCQUNELElBQUksRUFBRTtvQkFDSix1QkFBdUIsRUFBRSxNQUFNO29CQUMvQixnQkFBZ0IsRUFBRSxRQUFRO29CQUMxQixTQUFTLEVBQUUsVUFBVTtpQkFDdEI7Z0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDOzs7O1lBeEJDLFVBQVU7WUFGVixpQkFBaUI7NENBc0NvRCxNQUFNLFNBQUMsUUFBUTtZQTdCN0Usa0JBQWtCOzs7bUJBc0J4QixLQUFLO3dCQUNMLEtBQUs7O0FBRGtCO0lBQWQsV0FBVyxFQUFFOzttREFBYztBQUNiO0lBQWQsV0FBVyxFQUFFOzt3REFBbUI7Ozs7OztJQUoxQyxzQ0FBaUM7Ozs7O0lBQ2pDLHVDQUF1Qzs7SUFFdkMscUNBQXFDOztJQUNyQywwQ0FBMEM7O0lBRTFDLHVDQUFjOztJQUVkLHNDQUFVOzs7OztJQUVFLG1DQUFzQjs7Ozs7SUFBRSxvQ0FBOEI7Ozs7O0lBQUUsb0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UsIEFsYWluRXJyb3JDb2xsZWN0Q29uZmlnLCBJbnB1dE51bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXJyb3ItY29sbGVjdCwgW2Vycm9yLWNvbGxlY3RdJyxcbiAgZXhwb3J0QXM6ICdlcnJvckNvbGxlY3QnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxpIG56LWljb24gbnpUeXBlPVwiZXhjbGFtYXRpb24tY2lyY2xlXCI+PC9pPlxuICAgIDxzcGFuIGNsYXNzPVwicGwtc21cIj57eyBjb3VudCB9fTwvc3Bhbj5cbiAgYCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuZXJyb3ItY29sbGVjdF0nOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5kLW5vbmVdJzogJ19oaWRlbicsXG4gICAgJyhjbGljayknOiAnX2NsaWNrKCknLFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIEVycm9yQ29sbGVjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSAkdGltZTogYW55IHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgZm9ybUVsOiBIVE1MRm9ybUVsZW1lbnQgfCBudWxsO1xuXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGZyZXE6IG51bWJlcjtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgb2Zmc2V0VG9wOiBudW1iZXI7XG5cbiAgX2hpZGVuID0gdHJ1ZTtcblxuICBjb3VudCA9IDA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogYW55LCBjb25maWdTcnY6IEFsYWluQ29uZmlnU2VydmljZSkge1xuICAgIGNvbmZpZ1Nydi5hdHRhY2g8QWxhaW5FcnJvckNvbGxlY3RDb25maWcsICdlcnJvckNvbGxlY3QnPih0aGlzLCAnZXJyb3JDb2xsZWN0JywgeyBmcmVxOiA1MDAsIG9mZnNldFRvcDogNjUgKyA2NCArIDggKiAyIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgZXJyRWxzKCk6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+IHtcbiAgICByZXR1cm4gdGhpcy5mb3JtRWwhLnF1ZXJ5U2VsZWN0b3JBbGwoJy5hbnQtZm9ybS1pdGVtLWhhcy1lcnJvcicpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGUoKTogdm9pZCB7XG4gICAgY29uc3QgY291bnQgPSB0aGlzLmVyckVscy5sZW5ndGg7XG4gICAgaWYgKGNvdW50ID09PSB0aGlzLmNvdW50KSByZXR1cm47XG4gICAgdGhpcy5jb3VudCA9IGNvdW50O1xuICAgIHRoaXMuX2hpZGVuID0gY291bnQgPT09IDA7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBfY2xpY2soKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuY291bnQgPT09IDApIHJldHVybiBmYWxzZTtcbiAgICAvLyBuei1mb3JtLWNvbnRyb2xcbiAgICBjb25zdCBlbHMgPSB0aGlzLmVyckVscztcbiAgICBjb25zdCBmb3JtSXRlbUVsID0gdGhpcy5maW5kUGFyZW50KGVsc1swXSwgJ1tuei1mb3JtLWNvbnRyb2xdJykgfHwgZWxzWzBdO1xuICAgIGZvcm1JdGVtRWwuc2Nyb2xsSW50b1ZpZXcodHJ1ZSk7XG4gICAgLy8gZml4IGhlYWRlciBoZWlnaHRcbiAgICB0aGlzLmRvYy5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIC09IHRoaXMub2Zmc2V0VG9wO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBpbnN0YWxsKCk6IHZvaWQge1xuICAgIHRoaXMudW5pbnN0YWxsKCk7XG4gICAgdGhpcy4kdGltZSA9IHNldEludGVydmFsKCgpID0+IHRoaXMudXBkYXRlKCksIHRoaXMuZnJlcSk7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgdW5pbnN0YWxsKCk6IHZvaWQge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy4kdGltZSEpO1xuICB9XG5cbiAgcHJpdmF0ZSBmaW5kUGFyZW50KGVsOiBFbGVtZW50LCBzZWxlY3Rvcjogc3RyaW5nKTogSFRNTEZvcm1FbGVtZW50IHwgbnVsbCB7XG4gICAgbGV0IHJldEVsOiBIVE1MRm9ybUVsZW1lbnQgfCBudWxsID0gbnVsbDtcbiAgICB3aGlsZSAoZWwpIHtcbiAgICAgIGlmIChlbC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSkge1xuICAgICAgICByZXRFbCA9IGVsIGFzIEhUTUxGb3JtRWxlbWVudDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBlbCA9IGVsLnBhcmVudEVsZW1lbnQgYXMgSFRNTEZvcm1FbGVtZW50O1xuICAgIH1cbiAgICByZXR1cm4gcmV0RWw7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm1FbCA9IHRoaXMuZmluZFBhcmVudCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdmb3JtJyk7XG4gICAgaWYgKHRoaXMuZm9ybUVsID09PSBudWxsKSB0aHJvdyBuZXcgRXJyb3IoJ05vIGZvdW5kIGZvcm0gZWxlbWVudCcpO1xuICAgIHRoaXMuaW5zdGFsbCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy51bmluc3RhbGwoKTtcbiAgfVxufVxuIl19