import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { share } from 'rxjs/operators';
import * as i0 from "@angular/core";
export class FullContentService {
    constructor() {
        this._change = new BehaviorSubject(null);
    }
    /** 切换全屏工作区状态 */
    toggle() {
        this._change.next(true);
    }
    get change() {
        return this._change.pipe(share());
    }
}
/** @nocollapse */ FullContentService.ɵprov = i0.ɵɵdefineInjectable({ factory: function FullContentService_Factory() { return new FullContentService(); }, token: FullContentService, providedIn: "root" });
FullContentService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbC1jb250ZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvZnVsbC1jb250ZW50L2Z1bGwtY29udGVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBR3ZDLE1BQU0sT0FBTyxrQkFBa0I7SUFEL0I7UUFFVSxZQUFPLEdBQUcsSUFBSSxlQUFlLENBQWlCLElBQUksQ0FBQyxDQUFDO0tBVTdEO0lBUkMsZ0JBQWdCO0lBQ2hCLE1BQU07UUFDSixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7WUFYRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzaGFyZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBGdWxsQ29udGVudFNlcnZpY2Uge1xuICBwcml2YXRlIF9jaGFuZ2UgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4gfCBudWxsPihudWxsKTtcblxuICAvKiog5YiH5o2i5YWo5bGP5bel5L2c5Yy654q25oCBICovXG4gIHRvZ2dsZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9jaGFuZ2UubmV4dCh0cnVlKTtcbiAgfVxuXG4gIGdldCBjaGFuZ2UoKTogT2JzZXJ2YWJsZTxib29sZWFuIHwgbnVsbD4ge1xuICAgIHJldHVybiB0aGlzLl9jaGFuZ2UucGlwZShzaGFyZSgpKTtcbiAgfVxufVxuIl19