import { __decorate, __metadata } from "tslib";
import { Directionality } from '@angular/cdk/bidi';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Inject, Input, Optional, ViewEncapsulation, } from '@angular/core';
import { AlainConfigService } from '@delon/util/config';
import { InputNumber } from '@delon/util/decorator';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { interval } from 'rxjs';
let ErrorCollectComponent = class ErrorCollectComponent {
    constructor(el, cdr, doc, configSrv, directionality) {
        this.el = el;
        this.cdr = cdr;
        this.doc = doc;
        this.directionality = directionality;
        this._hiden = true;
        this.count = 0;
        this.dir = 'ltr';
        configSrv.attach(this, 'errorCollect', { freq: 500, offsetTop: 65 + 64 + 8 * 2 });
    }
    get errEls() {
        return this.formEl.querySelectorAll('.ant-form-item-has-error');
    }
    update() {
        const count = this.errEls.length;
        if (count === this.count)
            return;
        this.count = count;
        this._hiden = count === 0;
        this.cdr.markForCheck();
    }
    _click() {
        if (this.count === 0)
            return false;
        // nz-form-control
        const els = this.errEls;
        const formItemEl = this.findParent(els[0], '[nz-form-control]') || els[0];
        formItemEl.scrollIntoView(true);
        // fix header height
        this.doc.documentElement.scrollTop -= this.offsetTop;
        return true;
    }
    install() {
        var _a;
        this.dir = this.directionality.value;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(untilDestroyed(this)).subscribe((direction) => {
            this.dir = direction;
        });
        interval(this.freq)
            .pipe(untilDestroyed(this))
            .subscribe(() => this.update());
        this.update();
    }
    findParent(el, selector) {
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
    ngOnInit() {
        this.formEl = this.findParent(this.el.nativeElement, 'form');
        if (this.formEl === null)
            throw new Error('No found form element');
        this.install();
    }
};
ErrorCollectComponent.decorators = [
    { type: Component, args: [{
                selector: 'error-collect, [error-collect]',
                exportAs: 'errorCollect',
                template: `
    <i nz-icon nzType="exclamation-circle"></i>
    <span class="error-collect__count">{{ count }}</span>
  `,
                host: {
                    '[class.error-collect]': 'true',
                    '[class.error-collect-rtl]': `dir === 'rtl'`,
                    '[class.d-none]': '_hiden',
                    '(click)': '_click()',
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] }
];
/** @nocollapse */
ErrorCollectComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: AlainConfigService },
    { type: Directionality, decorators: [{ type: Optional }] }
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
ErrorCollectComponent = __decorate([
    UntilDestroy(),
    __metadata("design:paramtypes", [ElementRef,
        ChangeDetectorRef, Object, AlainConfigService,
        Directionality])
], ErrorCollectComponent);
export { ErrorCollectComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItY29sbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvZXJyb3ItY29sbGVjdC9lcnJvci1jb2xsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFhLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzlELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLE1BQU0sRUFDTixLQUFLLEVBRUwsUUFBUSxFQUNSLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sTUFBTSxDQUFDO0lBb0JuQixxQkFBcUIsU0FBckIscUJBQXFCO0lBVWhDLFlBQ1UsRUFBYyxFQUNkLEdBQXNCLEVBQ0osR0FBUSxFQUNsQyxTQUE2QixFQUNULGNBQThCO1FBSjFDLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDZCxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUNKLFFBQUcsR0FBSCxHQUFHLENBQUs7UUFFZCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFacEQsV0FBTSxHQUFHLElBQUksQ0FBQztRQUNkLFVBQUssR0FBRyxDQUFDLENBQUM7UUFDVixRQUFHLEdBQWMsS0FBSyxDQUFDO1FBWXJCLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLGNBQWMsRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsU0FB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ZTtvQkFDNUMsZ0JBQWdCLEVBQUUsUUFBUTtvQkFDMUIsU0FBUyxFQUFFLFVBQVU7aUJBQ3RCO2dCQUNELG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0Qzs7OztZQTdCQyxVQUFVO1lBRlYsaUJBQWlCOzRDQTZDZCxNQUFNLFNBQUMsUUFBUTtZQXBDWCxrQkFBa0I7WUFiUCxjQUFjLHVCQW1EN0IsUUFBUTs7O21CQVJWLEtBQUs7d0JBQ0wsS0FBSzs7QUFEa0I7SUFBZCxXQUFXLEVBQUU7O21EQUFjO0FBQ2I7SUFBZCxXQUFXLEVBQUU7O3dEQUFtQjtBQVIvQixxQkFBcUI7SUFsQmpDLFlBQVksRUFBRTtxQ0E2QkMsVUFBVTtRQUNULGlCQUFpQixVQUVuQixrQkFBa0I7UUFDTyxjQUFjO0dBZnpDLHFCQUFxQixDQXVFakM7U0F2RVkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbC9jb25maWcnO1xuaW1wb3J0IHsgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbC9kZWNvcmF0b3InO1xuaW1wb3J0IHsgVW50aWxEZXN0cm95LCB1bnRpbERlc3Ryb3llZCB9IGZyb20gJ0BuZ25lYXQvdW50aWwtZGVzdHJveSc7XG5pbXBvcnQgeyBpbnRlcnZhbCB9IGZyb20gJ3J4anMnO1xuXG5AVW50aWxEZXN0cm95KClcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Vycm9yLWNvbGxlY3QsIFtlcnJvci1jb2xsZWN0XScsXG4gIGV4cG9ydEFzOiAnZXJyb3JDb2xsZWN0JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aSBuei1pY29uIG56VHlwZT1cImV4Y2xhbWF0aW9uLWNpcmNsZVwiPjwvaT5cbiAgICA8c3BhbiBjbGFzcz1cImVycm9yLWNvbGxlY3RfX2NvdW50XCI+e3sgY291bnQgfX08L3NwYW4+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmVycm9yLWNvbGxlY3RdJzogJ3RydWUnLFxuICAgICdbY2xhc3MuZXJyb3ItY29sbGVjdC1ydGxdJzogYGRpciA9PT0gJ3J0bCdgLFxuICAgICdbY2xhc3MuZC1ub25lXSc6ICdfaGlkZW4nLFxuICAgICcoY2xpY2spJzogJ19jbGljaygpJyxcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBFcnJvckNvbGxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIGZvcm1FbDogSFRNTEZvcm1FbGVtZW50IHwgbnVsbDtcblxuICBfaGlkZW4gPSB0cnVlO1xuICBjb3VudCA9IDA7XG4gIGRpcjogRGlyZWN0aW9uID0gJ2x0cic7XG5cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgZnJlcTogbnVtYmVyO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBvZmZzZXRUb3A6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogYW55LFxuICAgIGNvbmZpZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZGlyZWN0aW9uYWxpdHk6IERpcmVjdGlvbmFsaXR5LFxuICApIHtcbiAgICBjb25maWdTcnYuYXR0YWNoKHRoaXMsICdlcnJvckNvbGxlY3QnLCB7IGZyZXE6IDUwMCwgb2Zmc2V0VG9wOiA2NSArIDY0ICsgOCAqIDIgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldCBlcnJFbHMoKTogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4ge1xuICAgIHJldHVybiB0aGlzLmZvcm1FbCEucXVlcnlTZWxlY3RvckFsbCgnLmFudC1mb3JtLWl0ZW0taGFzLWVycm9yJyk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICBjb25zdCBjb3VudCA9IHRoaXMuZXJyRWxzLmxlbmd0aDtcbiAgICBpZiAoY291bnQgPT09IHRoaXMuY291bnQpIHJldHVybjtcbiAgICB0aGlzLmNvdW50ID0gY291bnQ7XG4gICAgdGhpcy5faGlkZW4gPSBjb3VudCA9PT0gMDtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIF9jbGljaygpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5jb3VudCA9PT0gMCkgcmV0dXJuIGZhbHNlO1xuICAgIC8vIG56LWZvcm0tY29udHJvbFxuICAgIGNvbnN0IGVscyA9IHRoaXMuZXJyRWxzO1xuICAgIGNvbnN0IGZvcm1JdGVtRWwgPSB0aGlzLmZpbmRQYXJlbnQoZWxzWzBdLCAnW256LWZvcm0tY29udHJvbF0nKSB8fCBlbHNbMF07XG4gICAgZm9ybUl0ZW1FbC5zY3JvbGxJbnRvVmlldyh0cnVlKTtcbiAgICAvLyBmaXggaGVhZGVyIGhlaWdodFxuICAgIHRoaXMuZG9jLmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgLT0gdGhpcy5vZmZzZXRUb3A7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwcml2YXRlIGluc3RhbGwoKTogdm9pZCB7XG4gICAgdGhpcy5kaXIgPSB0aGlzLmRpcmVjdGlvbmFsaXR5LnZhbHVlO1xuICAgIHRoaXMuZGlyZWN0aW9uYWxpdHkuY2hhbmdlPy5waXBlKHVudGlsRGVzdHJveWVkKHRoaXMpKS5zdWJzY3JpYmUoKGRpcmVjdGlvbjogRGlyZWN0aW9uKSA9PiB7XG4gICAgICB0aGlzLmRpciA9IGRpcmVjdGlvbjtcbiAgICB9KTtcbiAgICBpbnRlcnZhbCh0aGlzLmZyZXEpXG4gICAgICAucGlwZSh1bnRpbERlc3Ryb3llZCh0aGlzKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy51cGRhdGUoKSk7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgZmluZFBhcmVudChlbDogRWxlbWVudCwgc2VsZWN0b3I6IHN0cmluZyk6IEhUTUxGb3JtRWxlbWVudCB8IG51bGwge1xuICAgIGxldCByZXRFbDogSFRNTEZvcm1FbGVtZW50IHwgbnVsbCA9IG51bGw7XG4gICAgd2hpbGUgKGVsKSB7XG4gICAgICBpZiAoZWwucXVlcnlTZWxlY3RvcihzZWxlY3RvcikpIHtcbiAgICAgICAgcmV0RWwgPSBlbCBhcyBIVE1MRm9ybUVsZW1lbnQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZWwgPSBlbC5wYXJlbnRFbGVtZW50IGFzIEhUTUxGb3JtRWxlbWVudDtcbiAgICB9XG4gICAgcmV0dXJuIHJldEVsO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5mb3JtRWwgPSB0aGlzLmZpbmRQYXJlbnQodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnZm9ybScpO1xuICAgIGlmICh0aGlzLmZvcm1FbCA9PT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yKCdObyBmb3VuZCBmb3JtIGVsZW1lbnQnKTtcbiAgICB0aGlzLmluc3RhbGwoKTtcbiAgfVxufVxuIl19