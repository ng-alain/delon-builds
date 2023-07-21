import { Inject, LOCALE_ID, Pipe } from '@angular/core';
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.6", ngImport: i0, type: CurrencyMegaPipe, deps: [{ token: i1.CurrencyService }, { token: LOCALE_ID }], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.1.6", ngImport: i0, type: CurrencyMegaPipe, name: "mega" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.6", ngImport: i0, type: CurrencyMegaPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'mega' }]
        }], ctorParameters: function () { return [{ type: i1.CurrencyService }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [LOCALE_ID]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVnYS5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdXRpbC9waXBlcy9jdXJyZW5jeS9tZWdhLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7O0FBS3ZFLE1BQU0sT0FBTyxnQkFBZ0I7SUFFM0IsWUFDVSxHQUFvQixFQUNULE1BQWM7UUFEekIsUUFBRyxHQUFILEdBQUcsQ0FBaUI7UUFGdEIsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUtuQixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxTQUFTLENBQUMsS0FBc0IsRUFBRSxPQUE2QjtRQUM3RCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDMUMsT0FBTyxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNELENBQUM7OEdBakJVLGdCQUFnQixpREFJakIsU0FBUzs0R0FKUixnQkFBZ0I7OzJGQUFoQixnQkFBZ0I7a0JBRDVCLElBQUk7bUJBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFOzswQkFLakIsTUFBTTsyQkFBQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBMT0NBTEVfSUQsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ3VycmVuY3lNZWdhT3B0aW9ucywgQ3VycmVuY3lTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwvZm9ybWF0JztcblxuQFBpcGUoeyBuYW1lOiAnbWVnYScgfSlcbmV4cG9ydCBjbGFzcyBDdXJyZW5jeU1lZ2FQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHByaXZhdGUgaXNDTiA9IGZhbHNlO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHNydjogQ3VycmVuY3lTZXJ2aWNlLFxuICAgIEBJbmplY3QoTE9DQUxFX0lEKSBsb2NhbGU6IHN0cmluZ1xuICApIHtcbiAgICB0aGlzLmlzQ04gPSBsb2NhbGUuc3RhcnRzV2l0aCgnemgnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMYXJnZSBudW1iZXIgZm9ybWF0IGZpbHRlclxuICAgKlxuICAgKiDlpKfmlbDmja7moLzlvI/ljJZcbiAgICovXG4gIHRyYW5zZm9ybSh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nLCBvcHRpb25zPzogQ3VycmVuY3lNZWdhT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgY29uc3QgcmVzID0gdGhpcy5zcnYubWVnYSh2YWx1ZSwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHJlcy52YWx1ZSArICh0aGlzLmlzQ04gPyByZXMudW5pdEkxOG4gOiByZXMudW5pdCk7XG4gIH1cbn1cbiJdfQ==