import { Pipe } from '@angular/core';
import { format, formatDistanceToNow } from 'date-fns';
import { toDate } from '@delon/util/date-time';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/i18n";
class DatePipe {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.3", ngImport: i0, type: DatePipe, deps: [{ token: i1.NzI18nService }], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.0.3", ngImport: i0, type: DatePipe, name: "_date" }); }
}
export { DatePipe };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.3", ngImport: i0, type: DatePipe, decorators: [{
            type: Pipe,
            args: [{ name: '_date' }]
        }], ctorParameters: function () { return [{ type: i1.NzI18nService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdGhlbWUvc3JjL3BpcGVzL2RhdGUvZGF0ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXBELE9BQU8sRUFBRSxNQUFNLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFdkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7QUFJL0MsTUFDYSxRQUFRO0lBQ25CLFlBQW9CLE1BQXFCO1FBQXJCLFdBQU0sR0FBTixNQUFNLENBQWU7SUFBRyxDQUFDO0lBRTdDLFNBQVMsQ0FBQyxLQUE2QixFQUFFLGVBQXVCLGtCQUFrQjtRQUNoRixLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RCLElBQUksS0FBSyxDQUFDLEtBQWtCLENBQUM7WUFBRSxPQUFPLEVBQUUsQ0FBQztRQUV6QyxNQUFNLE9BQU8sR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUM7UUFDeEQsT0FBTyxZQUFZLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzVHLENBQUM7OEdBVFUsUUFBUTs0R0FBUixRQUFROztTQUFSLFFBQVE7MkZBQVIsUUFBUTtrQkFEcEIsSUFBSTttQkFBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGZvcm1hdCwgZm9ybWF0RGlzdGFuY2VUb05vdyB9IGZyb20gJ2RhdGUtZm5zJztcblxuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSAnQGRlbG9uL3V0aWwvZGF0ZS10aW1lJztcbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xuXG5AUGlwZSh7IG5hbWU6ICdfZGF0ZScgfSlcbmV4cG9ydCBjbGFzcyBEYXRlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG56STE4bjogTnpJMThuU2VydmljZSkge31cblxuICB0cmFuc2Zvcm0odmFsdWU6IERhdGUgfCBzdHJpbmcgfCBudW1iZXIsIGZvcm1hdFN0cmluZzogc3RyaW5nID0gJ3l5eXktTU0tZGQgSEg6bW0nKTogc3RyaW5nIHtcbiAgICB2YWx1ZSA9IHRvRGF0ZSh2YWx1ZSk7XG4gICAgaWYgKGlzTmFOKHZhbHVlIGFzIE56U2FmZUFueSkpIHJldHVybiAnJztcblxuICAgIGNvbnN0IGxhbmdPcHQgPSB7IGxvY2FsZTogdGhpcy5uekkxOG4uZ2V0RGF0ZUxvY2FsZSgpIH07XG4gICAgcmV0dXJuIGZvcm1hdFN0cmluZyA9PT0gJ2ZuJyA/IGZvcm1hdERpc3RhbmNlVG9Ob3codmFsdWUsIGxhbmdPcHQpIDogZm9ybWF0KHZhbHVlLCBmb3JtYXRTdHJpbmcsIGxhbmdPcHQpO1xuICB9XG59XG4iXX0=