import { CurrencyPipe } from '@angular/common';
import { Inject, LOCALE_ID, Pipe } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * [Document](https://ng-alain.com/theme/currency)
 */
// tslint:disable-next-line:use-pipe-transform-interface
export class CNCurrencyPipe {
    constructor(locale) {
        this.ngCurrencyPipe = new CurrencyPipe(locale);
    }
    transform(value, currencyCode = '￥', display = 'code', digits) {
        return this.ngCurrencyPipe.transform(value, currencyCode, display, digits);
    }
}
/** @nocollapse */ CNCurrencyPipe.ɵfac = function CNCurrencyPipe_Factory(t) { return new (t || CNCurrencyPipe)(i0.ɵɵdirectiveInject(LOCALE_ID)); };
/** @nocollapse */ CNCurrencyPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "_currency", type: CNCurrencyPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CNCurrencyPipe, [{
        type: Pipe,
        args: [{ name: '_currency' }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [LOCALE_ID]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY24tY3VycmVuY3kucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lL3NyYy9waXBlcy9jdXJyZW5jeS9jbi1jdXJyZW5jeS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRXhEOztHQUVHO0FBQ0gsd0RBQXdEO0FBRXhELE1BQU0sT0FBTyxjQUFjO0lBR3pCLFlBQStCLE1BQWM7UUFDM0MsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsU0FBUyxDQUNQLEtBQVUsRUFDVixlQUF1QixHQUFHLEVBQzFCLFVBQXlELE1BQU0sRUFDL0QsTUFBZTtRQUVmLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxPQUFjLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDcEYsQ0FBQzs7K0ZBZFUsY0FBYyx1QkFHTCxTQUFTO3FGQUhsQixjQUFjO3VGQUFkLGNBQWM7Y0FEMUIsSUFBSTtlQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTs7c0JBSVosTUFBTTt1QkFBQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ3VycmVuY3lQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdCwgTE9DQUxFX0lELCBQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogW0RvY3VtZW50XShodHRwczovL25nLWFsYWluLmNvbS90aGVtZS9jdXJyZW5jeSlcbiAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnVzZS1waXBlLXRyYW5zZm9ybS1pbnRlcmZhY2VcbkBQaXBlKHsgbmFtZTogJ19jdXJyZW5jeScgfSlcbmV4cG9ydCBjbGFzcyBDTkN1cnJlbmN5UGlwZSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgbmdDdXJyZW5jeVBpcGU6IEN1cnJlbmN5UGlwZTtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KExPQ0FMRV9JRCkgbG9jYWxlOiBzdHJpbmcpIHtcbiAgICB0aGlzLm5nQ3VycmVuY3lQaXBlID0gbmV3IEN1cnJlbmN5UGlwZShsb2NhbGUpO1xuICB9XG5cbiAgdHJhbnNmb3JtKFxuICAgIHZhbHVlOiBhbnksXG4gICAgY3VycmVuY3lDb2RlOiBzdHJpbmcgPSAn77+lJyxcbiAgICBkaXNwbGF5OiAnY29kZScgfCAnc3ltYm9sJyB8ICdzeW1ib2wtbmFycm93JyB8IGJvb2xlYW4gPSAnY29kZScsXG4gICAgZGlnaXRzPzogc3RyaW5nLFxuICApOiBzdHJpbmcgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5uZ0N1cnJlbmN5UGlwZS50cmFuc2Zvcm0odmFsdWUsIGN1cnJlbmN5Q29kZSwgZGlzcGxheSBhcyBhbnksIGRpZ2l0cyk7XG4gIH1cbn1cbiJdfQ==