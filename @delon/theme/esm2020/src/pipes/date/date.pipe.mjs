import { Pipe } from '@angular/core';
import { format, formatDistanceToNow } from 'date-fns';
import { toDate } from '@delon/util/date-time';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/i18n";
export class DatePipe {
    constructor(nzI18n) {
        this.nzI18n = nzI18n;
    }
    transform(value, formatString = 'yyyy-MM-dd HH:mm') {
        value = toDate(value);
        if (isNaN(value))
            return '';
        const langOpt = { locale: this.nzI18n.getDateLocale() };
        return formatString === 'fn' ? formatDistanceToNow(value, langOpt) : format(value, formatString, langOpt);
    }
}
DatePipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.9", ngImport: i0, type: DatePipe, deps: [{ token: i1.NzI18nService }], target: i0.ɵɵFactoryTarget.Pipe });
DatePipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "13.3.9", ngImport: i0, type: DatePipe, name: "_date" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.9", ngImport: i0, type: DatePipe, decorators: [{
            type: Pipe,
            args: [{ name: '_date' }]
        }], ctorParameters: function () { return [{ type: i1.NzI18nService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdGhlbWUvc3JjL3BpcGVzL2RhdGUvZGF0ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXBELE9BQU8sRUFBRSxNQUFNLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFdkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7QUFLL0MsTUFBTSxPQUFPLFFBQVE7SUFDbkIsWUFBb0IsTUFBcUI7UUFBckIsV0FBTSxHQUFOLE1BQU0sQ0FBZTtJQUFHLENBQUM7SUFFN0MsU0FBUyxDQUFDLEtBQTZCLEVBQUUsZUFBdUIsa0JBQWtCO1FBQ2hGLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEIsSUFBSSxLQUFLLENBQUMsS0FBa0IsQ0FBQztZQUFFLE9BQU8sRUFBRSxDQUFDO1FBRXpDLE1BQU0sT0FBTyxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQztRQUN4RCxPQUFPLFlBQVksS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDNUcsQ0FBQzs7cUdBVFUsUUFBUTttR0FBUixRQUFROzJGQUFSLFFBQVE7a0JBRHBCLElBQUk7bUJBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBmb3JtYXQsIGZvcm1hdERpc3RhbmNlVG9Ob3cgfSBmcm9tICdkYXRlLWZucyc7XG5cbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gJ0BkZWxvbi91dGlsL2RhdGUtdGltZSc7XG5pbXBvcnQgdHlwZSB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcblxuQFBpcGUoeyBuYW1lOiAnX2RhdGUnIH0pXG5leHBvcnQgY2xhc3MgRGF0ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuekkxOG46IE56STE4blNlcnZpY2UpIHt9XG5cbiAgdHJhbnNmb3JtKHZhbHVlOiBEYXRlIHwgc3RyaW5nIHwgbnVtYmVyLCBmb3JtYXRTdHJpbmc6IHN0cmluZyA9ICd5eXl5LU1NLWRkIEhIOm1tJyk6IHN0cmluZyB7XG4gICAgdmFsdWUgPSB0b0RhdGUodmFsdWUpO1xuICAgIGlmIChpc05hTih2YWx1ZSBhcyBOelNhZmVBbnkpKSByZXR1cm4gJyc7XG5cbiAgICBjb25zdCBsYW5nT3B0ID0geyBsb2NhbGU6IHRoaXMubnpJMThuLmdldERhdGVMb2NhbGUoKSB9O1xuICAgIHJldHVybiBmb3JtYXRTdHJpbmcgPT09ICdmbicgPyBmb3JtYXREaXN0YW5jZVRvTm93KHZhbHVlLCBsYW5nT3B0KSA6IGZvcm1hdCh2YWx1ZSwgZm9ybWF0U3RyaW5nLCBsYW5nT3B0KTtcbiAgfVxufVxuIl19