import { Pipe, inject } from '@angular/core';
import { AlainConfigService } from '@delon/util/config';
import { formatDate } from '@delon/util/date-time';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import * as i0 from "@angular/core";
export class DatePipe {
    constructor() {
        this.nzI18n = inject(NzI18nService);
        this.cog = inject(AlainConfigService).get('themePipe');
    }
    transform(value, formatString) {
        const formatStr = formatString ?? this.cog?.dateFormat ?? 'yyyy-MM-dd HH:mm';
        return formatDate(value, formatStr, {
            locale: this.nzI18n.getDateLocale(),
            customFormat: this.cog?.dateFormatCustom
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.7", ngImport: i0, type: DatePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "18.2.7", ngImport: i0, type: DatePipe, isStandalone: true, name: "_date" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.7", ngImport: i0, type: DatePipe, decorators: [{
            type: Pipe,
            args: [{ name: '_date', standalone: true }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdGhlbWUvc3JjL3BpcGVzL2RhdGUvZGF0ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU1RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQUduRCxNQUFNLE9BQU8sUUFBUTtJQURyQjtRQUVVLFdBQU0sR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDL0IsUUFBRyxHQUFHLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztLQVUzRDtJQVJDLFNBQVMsQ0FBQyxLQUE2QixFQUFFLFlBQTRCO1FBQ25FLE1BQU0sU0FBUyxHQUFHLFlBQVksSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLFVBQVUsSUFBSSxrQkFBa0IsQ0FBQztRQUU3RSxPQUFPLFVBQVUsQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFO1lBQ2xDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRTtZQUNuQyxZQUFZLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxnQkFBZ0I7U0FDekMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs4R0FYVSxRQUFROzRHQUFSLFFBQVE7OzJGQUFSLFFBQVE7a0JBRHBCLElBQUk7bUJBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtLCBpbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwvY29uZmlnJztcbmltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tICdAZGVsb24vdXRpbC9kYXRlLXRpbWUnO1xuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XG5cbkBQaXBlKHsgbmFtZTogJ19kYXRlJywgc3RhbmRhbG9uZTogdHJ1ZSB9KVxuZXhwb3J0IGNsYXNzIERhdGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHByaXZhdGUgbnpJMThuID0gaW5qZWN0KE56STE4blNlcnZpY2UpO1xuICBwcml2YXRlIGNvZyA9IGluamVjdChBbGFpbkNvbmZpZ1NlcnZpY2UpLmdldCgndGhlbWVQaXBlJyk7XG5cbiAgdHJhbnNmb3JtKHZhbHVlOiBEYXRlIHwgc3RyaW5nIHwgbnVtYmVyLCBmb3JtYXRTdHJpbmc/OiBzdHJpbmcgfCBudWxsKTogc3RyaW5nIHtcbiAgICBjb25zdCBmb3JtYXRTdHIgPSBmb3JtYXRTdHJpbmcgPz8gdGhpcy5jb2c/LmRhdGVGb3JtYXQgPz8gJ3l5eXktTU0tZGQgSEg6bW0nO1xuXG4gICAgcmV0dXJuIGZvcm1hdERhdGUodmFsdWUsIGZvcm1hdFN0ciwge1xuICAgICAgbG9jYWxlOiB0aGlzLm56STE4bi5nZXREYXRlTG9jYWxlKCksXG4gICAgICBjdXN0b21Gb3JtYXQ6IHRoaXMuY29nPy5kYXRlRm9ybWF0Q3VzdG9tXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==