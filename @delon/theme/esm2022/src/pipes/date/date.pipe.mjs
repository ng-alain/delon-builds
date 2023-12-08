import { Pipe, inject } from '@angular/core';
import { AlainConfigService } from '@delon/util/config';
import { formatDate } from '@delon/util/date-time';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import * as i0 from "@angular/core";
export class DatePipe {
    constructor() {
        this.nzI18n = inject(NzI18nService);
        this.defFormat = inject(AlainConfigService).get('themePipe')?.dateFormat ?? 'yyyy-MM-dd HH:mm';
    }
    transform(value, formatString) {
        return formatDate(value, formatString ?? this.defFormat, this.nzI18n.getDateLocale());
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: DatePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "17.0.2", ngImport: i0, type: DatePipe, isStandalone: true, name: "_date" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: DatePipe, decorators: [{
            type: Pipe,
            args: [{ name: '_date', standalone: true }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdGhlbWUvc3JjL3BpcGVzL2RhdGUvZGF0ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU1RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQUduRCxNQUFNLE9BQU8sUUFBUTtJQURyQjtRQUVVLFdBQU0sR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDL0IsY0FBUyxHQUFHLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRSxVQUFVLElBQUksa0JBQWtCLENBQUM7S0FLbkc7SUFIQyxTQUFTLENBQUMsS0FBNkIsRUFBRSxZQUE0QjtRQUNuRSxPQUFPLFVBQVUsQ0FBQyxLQUFLLEVBQUUsWUFBWSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQ3hGLENBQUM7OEdBTlUsUUFBUTs0R0FBUixRQUFROzsyRkFBUixRQUFRO2tCQURwQixJQUFJO21CQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSwgaW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFsYWluQ29uZmlnU2VydmljZSB9IGZyb20gJ0BkZWxvbi91dGlsL2NvbmZpZyc7XG5pbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSAnQGRlbG9uL3V0aWwvZGF0ZS10aW1lJztcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xuXG5AUGlwZSh7IG5hbWU6ICdfZGF0ZScsIHN0YW5kYWxvbmU6IHRydWUgfSlcbmV4cG9ydCBjbGFzcyBEYXRlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBwcml2YXRlIG56STE4biA9IGluamVjdChOekkxOG5TZXJ2aWNlKTtcbiAgcHJpdmF0ZSBkZWZGb3JtYXQgPSBpbmplY3QoQWxhaW5Db25maWdTZXJ2aWNlKS5nZXQoJ3RoZW1lUGlwZScpPy5kYXRlRm9ybWF0ID8/ICd5eXl5LU1NLWRkIEhIOm1tJztcblxuICB0cmFuc2Zvcm0odmFsdWU6IERhdGUgfCBzdHJpbmcgfCBudW1iZXIsIGZvcm1hdFN0cmluZz86IHN0cmluZyB8IG51bGwpOiBzdHJpbmcge1xuICAgIHJldHVybiBmb3JtYXREYXRlKHZhbHVlLCBmb3JtYXRTdHJpbmcgPz8gdGhpcy5kZWZGb3JtYXQsIHRoaXMubnpJMThuLmdldERhdGVMb2NhbGUoKSk7XG4gIH1cbn1cbiJdfQ==