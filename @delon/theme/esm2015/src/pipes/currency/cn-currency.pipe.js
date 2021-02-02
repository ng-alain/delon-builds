import { CurrencyPipe } from '@angular/common';
import { Inject, LOCALE_ID, Pipe } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * @deprecated Will be removed in 12.0.0, Pls used [price](https://ng-alain.com/util/pipes-currency/en?#price) pipe instead
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY24tY3VycmVuY3kucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lL3NyYy9waXBlcy9jdXJyZW5jeS9jbi1jdXJyZW5jeS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRXhEOztHQUVHO0FBQ0gsd0RBQXdEO0FBRXhELE1BQU0sT0FBTyxjQUFjO0lBR3pCLFlBQStCLE1BQWM7UUFDM0MsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsU0FBUyxDQUNQLEtBQVUsRUFDVixlQUF1QixHQUFHLEVBQzFCLFVBQXlELE1BQU0sRUFDL0QsTUFBZTtRQUVmLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxPQUFjLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDcEYsQ0FBQzs7K0ZBZFUsY0FBYyx1QkFHTCxTQUFTO3FGQUhsQixjQUFjO3VGQUFkLGNBQWM7Y0FEMUIsSUFBSTtlQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTs7c0JBSVosTUFBTTt1QkFBQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ3VycmVuY3lQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdCwgTE9DQUxFX0lELCBQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgV2lsbCBiZSByZW1vdmVkIGluIDEyLjAuMCwgUGxzIHVzZWQgW3ByaWNlXShodHRwczovL25nLWFsYWluLmNvbS91dGlsL3BpcGVzLWN1cnJlbmN5L2VuPyNwcmljZSkgcGlwZSBpbnN0ZWFkXG4gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp1c2UtcGlwZS10cmFuc2Zvcm0taW50ZXJmYWNlXG5AUGlwZSh7IG5hbWU6ICdfY3VycmVuY3knIH0pXG5leHBvcnQgY2xhc3MgQ05DdXJyZW5jeVBpcGUge1xuICBwcml2YXRlIHJlYWRvbmx5IG5nQ3VycmVuY3lQaXBlOiBDdXJyZW5jeVBpcGU7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChMT0NBTEVfSUQpIGxvY2FsZTogc3RyaW5nKSB7XG4gICAgdGhpcy5uZ0N1cnJlbmN5UGlwZSA9IG5ldyBDdXJyZW5jeVBpcGUobG9jYWxlKTtcbiAgfVxuXG4gIHRyYW5zZm9ybShcbiAgICB2YWx1ZTogYW55LFxuICAgIGN1cnJlbmN5Q29kZTogc3RyaW5nID0gJ++/pScsXG4gICAgZGlzcGxheTogJ2NvZGUnIHwgJ3N5bWJvbCcgfCAnc3ltYm9sLW5hcnJvdycgfCBib29sZWFuID0gJ2NvZGUnLFxuICAgIGRpZ2l0cz86IHN0cmluZyxcbiAgKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMubmdDdXJyZW5jeVBpcGUudHJhbnNmb3JtKHZhbHVlLCBjdXJyZW5jeUNvZGUsIGRpc3BsYXkgYXMgYW55LCBkaWdpdHMpO1xuICB9XG59XG4iXX0=