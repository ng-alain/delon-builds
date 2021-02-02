import { Inject, LOCALE_ID, Pipe } from '@angular/core';
import { CurrencyService } from '@delon/util/format';
import * as i0 from "@angular/core";
import * as i1 from "@delon/util/format";
export class CurrencyMegaPipe {
    constructor(srv, locale) {
        this.srv = srv;
        this.isCN = false;
        this.isCN = locale.startsWith('zh');
    }
    /**
     * Large number format filter
     *
     * 大数据格式化
     */
    transform(value, options) {
        const res = this.srv.mega(value, options);
        return res.value + (this.isCN ? res.unitI18n : res.unit);
    }
}
/** @nocollapse */ CurrencyMegaPipe.ɵfac = function CurrencyMegaPipe_Factory(t) { return new (t || CurrencyMegaPipe)(i0.ɵɵdirectiveInject(i1.CurrencyService), i0.ɵɵdirectiveInject(LOCALE_ID)); };
/** @nocollapse */ CurrencyMegaPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "mega", type: CurrencyMegaPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CurrencyMegaPipe, [{
        type: Pipe,
        args: [{ name: 'mega' }]
    }], function () { return [{ type: i1.CurrencyService }, { type: undefined, decorators: [{
                type: Inject,
                args: [LOCALE_ID]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVnYS5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdXRpbC9waXBlcy9jdXJyZW5jeS9tZWdhLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLEVBQXVCLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7QUFHMUUsTUFBTSxPQUFPLGdCQUFnQjtJQUUzQixZQUFvQixHQUFvQixFQUFxQixNQUFjO1FBQXZELFFBQUcsR0FBSCxHQUFHLENBQWlCO1FBRGhDLFNBQUksR0FBRyxLQUFLLENBQUM7UUFFbkIsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsU0FBUyxDQUFDLEtBQXNCLEVBQUUsT0FBNkI7UUFDN0QsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzFDLE9BQU8sR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzRCxDQUFDOzttR0FkVSxnQkFBZ0IsaUVBRXVCLFNBQVM7a0ZBRmhELGdCQUFnQjt1RkFBaEIsZ0JBQWdCO2NBRDVCLElBQUk7ZUFBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7O3NCQUd1QixNQUFNO3VCQUFDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIExPQ0FMRV9JRCwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ3VycmVuY3lNZWdhT3B0aW9ucywgQ3VycmVuY3lTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwvZm9ybWF0JztcblxuQFBpcGUoeyBuYW1lOiAnbWVnYScgfSlcbmV4cG9ydCBjbGFzcyBDdXJyZW5jeU1lZ2FQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHByaXZhdGUgaXNDTiA9IGZhbHNlO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNydjogQ3VycmVuY3lTZXJ2aWNlLCBASW5qZWN0KExPQ0FMRV9JRCkgbG9jYWxlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmlzQ04gPSBsb2NhbGUuc3RhcnRzV2l0aCgnemgnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMYXJnZSBudW1iZXIgZm9ybWF0IGZpbHRlclxuICAgKlxuICAgKiDlpKfmlbDmja7moLzlvI/ljJZcbiAgICovXG4gIHRyYW5zZm9ybSh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nLCBvcHRpb25zPzogQ3VycmVuY3lNZWdhT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgY29uc3QgcmVzID0gdGhpcy5zcnYubWVnYSh2YWx1ZSwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHJlcy52YWx1ZSArICh0aGlzLmlzQ04gPyByZXMudW5pdEkxOG4gOiByZXMudW5pdCk7XG4gIH1cbn1cbiJdfQ==