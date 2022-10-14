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
}
CurrencyMegaPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: CurrencyMegaPipe, deps: [{ token: i1.CurrencyService }, { token: LOCALE_ID }], target: i0.ɵɵFactoryTarget.Pipe });
CurrencyMegaPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.2.6", ngImport: i0, type: CurrencyMegaPipe, name: "mega" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: CurrencyMegaPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'mega' }]
        }], ctorParameters: function () { return [{ type: i1.CurrencyService }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [LOCALE_ID]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVnYS5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdXRpbC9waXBlcy9jdXJyZW5jeS9tZWdhLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7O0FBS3ZFLE1BQU0sT0FBTyxnQkFBZ0I7SUFFM0IsWUFBb0IsR0FBb0IsRUFBcUIsTUFBYztRQUF2RCxRQUFHLEdBQUgsR0FBRyxDQUFpQjtRQURoQyxTQUFJLEdBQUcsS0FBSyxDQUFDO1FBRW5CLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILFNBQVMsQ0FBQyxLQUFzQixFQUFFLE9BQTZCO1FBQzdELE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMxQyxPQUFPLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7NkdBZFUsZ0JBQWdCLGlEQUV1QixTQUFTOzJHQUZoRCxnQkFBZ0I7MkZBQWhCLGdCQUFnQjtrQkFENUIsSUFBSTttQkFBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7OzBCQUd1QixNQUFNOzJCQUFDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIExPQ0FMRV9JRCwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDdXJyZW5jeU1lZ2FPcHRpb25zLCBDdXJyZW5jeVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbC9mb3JtYXQnO1xuXG5AUGlwZSh7IG5hbWU6ICdtZWdhJyB9KVxuZXhwb3J0IGNsYXNzIEN1cnJlbmN5TWVnYVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgcHJpdmF0ZSBpc0NOID0gZmFsc2U7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3J2OiBDdXJyZW5jeVNlcnZpY2UsIEBJbmplY3QoTE9DQUxFX0lEKSBsb2NhbGU6IHN0cmluZykge1xuICAgIHRoaXMuaXNDTiA9IGxvY2FsZS5zdGFydHNXaXRoKCd6aCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIExhcmdlIG51bWJlciBmb3JtYXQgZmlsdGVyXG4gICAqXG4gICAqIOWkp+aVsOaNruagvOW8j+WMllxuICAgKi9cbiAgdHJhbnNmb3JtKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcsIG9wdGlvbnM/OiBDdXJyZW5jeU1lZ2FPcHRpb25zKTogc3RyaW5nIHtcbiAgICBjb25zdCByZXMgPSB0aGlzLnNydi5tZWdhKHZhbHVlLCBvcHRpb25zKTtcbiAgICByZXR1cm4gcmVzLnZhbHVlICsgKHRoaXMuaXNDTiA/IHJlcy51bml0STE4biA6IHJlcy51bml0KTtcbiAgfVxufVxuIl19