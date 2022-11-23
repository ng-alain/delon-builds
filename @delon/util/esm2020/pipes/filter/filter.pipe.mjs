import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class FilterPipe {
    /**
     * Filter array
     *
     * 过滤数组
     */
    transform(array, matcher, ...args) {
        return array.filter(i => matcher(i, ...args));
    }
}
FilterPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: FilterPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
FilterPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: FilterPipe, name: "filter" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: FilterPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'filter' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy91dGlsL3BpcGVzL2ZpbHRlci9maWx0ZXIucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7QUFLcEQsTUFBTSxPQUFPLFVBQVU7SUFDckI7Ozs7T0FJRztJQUNILFNBQVMsQ0FBSSxLQUFtQixFQUFFLE9BQW1ELEVBQUUsR0FBRyxJQUFpQjtRQUN6RyxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDOzt3R0FSVSxVQUFVO3NHQUFWLFVBQVU7NEZBQVYsVUFBVTtrQkFEdEIsSUFBSTttQkFBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuQFBpcGUoeyBuYW1lOiAnZmlsdGVyJyB9KVxuZXhwb3J0IGNsYXNzIEZpbHRlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgLyoqXG4gICAqIEZpbHRlciBhcnJheVxuICAgKlxuICAgKiDov4fmu6TmlbDnu4RcbiAgICovXG4gIHRyYW5zZm9ybTxUPihhcnJheTogcmVhZG9ubHkgVFtdLCBtYXRjaGVyOiAoaXRlbTogVCwgLi4uYXJnczogTnpTYWZlQW55W10pID0+IGJvb2xlYW4sIC4uLmFyZ3M6IE56U2FmZUFueVtdKTogVFtdIHtcbiAgICByZXR1cm4gYXJyYXkuZmlsdGVyKGkgPT4gbWF0Y2hlcihpLCAuLi5hcmdzKSk7XG4gIH1cbn1cbiJdfQ==