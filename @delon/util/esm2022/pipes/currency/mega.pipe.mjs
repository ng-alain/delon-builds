import { LOCALE_ID, Pipe, inject } from '@angular/core';
import { CurrencyService } from '@delon/util/format';
import * as i0 from "@angular/core";
/**
 * Large number format filter
 *
 * 大数据格式化
 */
export class CurrencyMegaPipe {
    constructor() {
        this.srv = inject(CurrencyService);
        this.isCN = inject(LOCALE_ID).startsWith('zh');
    }
    transform(value, options) {
        const res = this.srv.mega(value, options);
        return res.value + (this.isCN ? res.unitI18n : res.unit);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.3", ngImport: i0, type: CurrencyMegaPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "18.1.3", ngImport: i0, type: CurrencyMegaPipe, isStandalone: true, name: "mega" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.3", ngImport: i0, type: CurrencyMegaPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'mega', standalone: true }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVnYS5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdXRpbC9waXBlcy9jdXJyZW5jeS9tZWdhLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQWlCLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2RSxPQUFPLEVBQXVCLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQUUxRTs7OztHQUlHO0FBRUgsTUFBTSxPQUFPLGdCQUFnQjtJQUQ3QjtRQUVtQixRQUFHLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3ZDLFNBQUksR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBTW5EO0lBSkMsU0FBUyxDQUFDLEtBQXNCLEVBQUUsT0FBNkI7UUFDN0QsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzFDLE9BQU8sR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzRCxDQUFDOzhHQVBVLGdCQUFnQjs0R0FBaEIsZ0JBQWdCOzsyRkFBaEIsZ0JBQWdCO2tCQUQ1QixJQUFJO21CQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTE9DQUxFX0lELCBQaXBlLCBQaXBlVHJhbnNmb3JtLCBpbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ3VycmVuY3lNZWdhT3B0aW9ucywgQ3VycmVuY3lTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwvZm9ybWF0JztcblxuLyoqXG4gKiBMYXJnZSBudW1iZXIgZm9ybWF0IGZpbHRlclxuICpcbiAqIOWkp+aVsOaNruagvOW8j+WMllxuICovXG5AUGlwZSh7IG5hbWU6ICdtZWdhJywgc3RhbmRhbG9uZTogdHJ1ZSB9KVxuZXhwb3J0IGNsYXNzIEN1cnJlbmN5TWVnYVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgcHJpdmF0ZSByZWFkb25seSBzcnYgPSBpbmplY3QoQ3VycmVuY3lTZXJ2aWNlKTtcbiAgcHJpdmF0ZSBpc0NOID0gaW5qZWN0KExPQ0FMRV9JRCkuc3RhcnRzV2l0aCgnemgnKTtcblxuICB0cmFuc2Zvcm0odmFsdWU6IG51bWJlciB8IHN0cmluZywgb3B0aW9ucz86IEN1cnJlbmN5TWVnYU9wdGlvbnMpOiBzdHJpbmcge1xuICAgIGNvbnN0IHJlcyA9IHRoaXMuc3J2Lm1lZ2EodmFsdWUsIG9wdGlvbnMpO1xuICAgIHJldHVybiByZXMudmFsdWUgKyAodGhpcy5pc0NOID8gcmVzLnVuaXRJMThuIDogcmVzLnVuaXQpO1xuICB9XG59XG4iXX0=