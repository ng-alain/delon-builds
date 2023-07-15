import { Inject, LOCALE_ID, Pipe } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@delon/util/format";
class CurrencyMegaPipe {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: CurrencyMegaPipe, deps: [{ token: i1.CurrencyService }, { token: LOCALE_ID }], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.1.5", ngImport: i0, type: CurrencyMegaPipe, name: "mega" }); }
}
export { CurrencyMegaPipe };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: CurrencyMegaPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'mega' }]
        }], ctorParameters: function () { return [{ type: i1.CurrencyService }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [LOCALE_ID]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVnYS5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdXRpbC9waXBlcy9jdXJyZW5jeS9tZWdhLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7O0FBSXZFLE1BQ2EsZ0JBQWdCO0lBRTNCLFlBQW9CLEdBQW9CLEVBQXFCLE1BQWM7UUFBdkQsUUFBRyxHQUFILEdBQUcsQ0FBaUI7UUFEaEMsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUVuQixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxTQUFTLENBQUMsS0FBc0IsRUFBRSxPQUE2QjtRQUM3RCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDMUMsT0FBTyxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNELENBQUM7OEdBZFUsZ0JBQWdCLGlEQUV1QixTQUFTOzRHQUZoRCxnQkFBZ0I7O1NBQWhCLGdCQUFnQjsyRkFBaEIsZ0JBQWdCO2tCQUQ1QixJQUFJO21CQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTs7MEJBR3VCLE1BQU07MkJBQUMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgTE9DQUxFX0lELCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEN1cnJlbmN5TWVnYU9wdGlvbnMsIEN1cnJlbmN5U2VydmljZSB9IGZyb20gJ0BkZWxvbi91dGlsL2Zvcm1hdCc7XG5cbkBQaXBlKHsgbmFtZTogJ21lZ2EnIH0pXG5leHBvcnQgY2xhc3MgQ3VycmVuY3lNZWdhUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBwcml2YXRlIGlzQ04gPSBmYWxzZTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzcnY6IEN1cnJlbmN5U2VydmljZSwgQEluamVjdChMT0NBTEVfSUQpIGxvY2FsZTogc3RyaW5nKSB7XG4gICAgdGhpcy5pc0NOID0gbG9jYWxlLnN0YXJ0c1dpdGgoJ3poJyk7XG4gIH1cblxuICAvKipcbiAgICogTGFyZ2UgbnVtYmVyIGZvcm1hdCBmaWx0ZXJcbiAgICpcbiAgICog5aSn5pWw5o2u5qC85byP5YyWXG4gICAqL1xuICB0cmFuc2Zvcm0odmFsdWU6IG51bWJlciB8IHN0cmluZywgb3B0aW9ucz86IEN1cnJlbmN5TWVnYU9wdGlvbnMpOiBzdHJpbmcge1xuICAgIGNvbnN0IHJlcyA9IHRoaXMuc3J2Lm1lZ2EodmFsdWUsIG9wdGlvbnMpO1xuICAgIHJldHVybiByZXMudmFsdWUgKyAodGhpcy5pc0NOID8gcmVzLnVuaXRJMThuIDogcmVzLnVuaXQpO1xuICB9XG59XG4iXX0=