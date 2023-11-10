import { Pipe } from '@angular/core';
import { formatDate } from '@delon/util/date-time';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/i18n";
export class DatePipe {
    constructor(nzI18n) {
        this.nzI18n = nzI18n;
    }
    transform(value, formatString = 'yyyy-MM-dd HH:mm') {
        return formatDate(value, formatString, this.nzI18n.getDateLocale());
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: DatePipe, deps: [{ token: i1.NzI18nService }], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "17.0.2", ngImport: i0, type: DatePipe, isStandalone: true, name: "_date" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: DatePipe, decorators: [{
            type: Pipe,
            args: [{ name: '_date', standalone: true }]
        }], ctorParameters: () => [{ type: i1.NzI18nService }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdGhlbWUvc3JjL3BpcGVzL2RhdGUvZGF0ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXBELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7O0FBSW5ELE1BQU0sT0FBTyxRQUFRO0lBQ25CLFlBQW9CLE1BQXFCO1FBQXJCLFdBQU0sR0FBTixNQUFNLENBQWU7SUFBRyxDQUFDO0lBRTdDLFNBQVMsQ0FBQyxLQUE2QixFQUFFLGVBQXVCLGtCQUFrQjtRQUNoRixPQUFPLFVBQVUsQ0FBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUN0RSxDQUFDOzhHQUxVLFFBQVE7NEdBQVIsUUFBUTs7MkZBQVIsUUFBUTtrQkFEcEIsSUFBSTttQkFBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gJ0BkZWxvbi91dGlsL2RhdGUtdGltZSc7XG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcblxuQFBpcGUoeyBuYW1lOiAnX2RhdGUnLCBzdGFuZGFsb25lOiB0cnVlIH0pXG5leHBvcnQgY2xhc3MgRGF0ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuekkxOG46IE56STE4blNlcnZpY2UpIHt9XG5cbiAgdHJhbnNmb3JtKHZhbHVlOiBEYXRlIHwgc3RyaW5nIHwgbnVtYmVyLCBmb3JtYXRTdHJpbmc6IHN0cmluZyA9ICd5eXl5LU1NLWRkIEhIOm1tJyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGZvcm1hdERhdGUodmFsdWUsIGZvcm1hdFN0cmluZywgdGhpcy5uekkxOG4uZ2V0RGF0ZUxvY2FsZSgpKTtcbiAgfVxufVxuIl19