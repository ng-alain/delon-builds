import { Inject, LOCALE_ID, Pipe } from '@angular/core';
import { CurrencyService } from '@delon/util/format';
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
CurrencyMegaPipe.decorators = [
    { type: Pipe, args: [{ name: 'mega' },] }
];
CurrencyMegaPipe.ctorParameters = () => [
    { type: CurrencyService },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVnYS5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdXRpbC9waXBlcy9jdXJyZW5jeS9tZWdhLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUV2RSxPQUFPLEVBQXVCLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRzFFLE1BQU0sT0FBTyxnQkFBZ0I7SUFFM0IsWUFBb0IsR0FBb0IsRUFBcUIsTUFBYztRQUF2RCxRQUFHLEdBQUgsR0FBRyxDQUFpQjtRQURoQyxTQUFJLEdBQUcsS0FBSyxDQUFDO1FBRW5CLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILFNBQVMsQ0FBQyxLQUFzQixFQUFFLE9BQTZCO1FBQzdELE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMxQyxPQUFPLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7O1lBZkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTs7O1lBRlEsZUFBZTt5Q0FLQSxNQUFNLFNBQUMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgTE9DQUxFX0lELCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEN1cnJlbmN5TWVnYU9wdGlvbnMsIEN1cnJlbmN5U2VydmljZSB9IGZyb20gJ0BkZWxvbi91dGlsL2Zvcm1hdCc7XG5cbkBQaXBlKHsgbmFtZTogJ21lZ2EnIH0pXG5leHBvcnQgY2xhc3MgQ3VycmVuY3lNZWdhUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBwcml2YXRlIGlzQ04gPSBmYWxzZTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzcnY6IEN1cnJlbmN5U2VydmljZSwgQEluamVjdChMT0NBTEVfSUQpIGxvY2FsZTogc3RyaW5nKSB7XG4gICAgdGhpcy5pc0NOID0gbG9jYWxlLnN0YXJ0c1dpdGgoJ3poJyk7XG4gIH1cblxuICAvKipcbiAgICogTGFyZ2UgbnVtYmVyIGZvcm1hdCBmaWx0ZXJcbiAgICpcbiAgICog5aSn5pWw5o2u5qC85byP5YyWXG4gICAqL1xuICB0cmFuc2Zvcm0odmFsdWU6IG51bWJlciB8IHN0cmluZywgb3B0aW9ucz86IEN1cnJlbmN5TWVnYU9wdGlvbnMpOiBzdHJpbmcge1xuICAgIGNvbnN0IHJlcyA9IHRoaXMuc3J2Lm1lZ2EodmFsdWUsIG9wdGlvbnMpO1xuICAgIHJldHVybiByZXMudmFsdWUgKyAodGhpcy5pc0NOID8gcmVzLnVuaXRJMThuIDogcmVzLnVuaXQpO1xuICB9XG59XG4iXX0=