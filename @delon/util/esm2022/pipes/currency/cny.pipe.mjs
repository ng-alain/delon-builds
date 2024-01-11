import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@delon/util/format";
export class CurrencyCNYPipe {
    constructor(srv) {
        this.srv = srv;
    }
    /**
     * Converted into RMB notation.
     *
     * 转化成人民币表示法
     */
    transform(value, options) {
        return this.srv.cny(value, options);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: CurrencyCNYPipe, deps: [{ token: i1.CurrencyService }], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "17.0.9", ngImport: i0, type: CurrencyCNYPipe, isStandalone: true, name: "cny" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: CurrencyCNYPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'cny', standalone: true }]
        }], ctorParameters: () => [{ type: i1.CurrencyService }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY255LnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy91dGlsL3BpcGVzL2N1cnJlbmN5L2NueS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOzs7QUFLcEQsTUFBTSxPQUFPLGVBQWU7SUFDMUIsWUFBb0IsR0FBb0I7UUFBcEIsUUFBRyxHQUFILEdBQUcsQ0FBaUI7SUFBRyxDQUFDO0lBRTVDOzs7O09BSUc7SUFDSCxTQUFTLENBQUMsS0FBc0IsRUFBRSxPQUE0QjtRQUM1RCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN0QyxDQUFDOzhHQVZVLGVBQWU7NEdBQWYsZUFBZTs7MkZBQWYsZUFBZTtrQkFEM0IsSUFBSTttQkFBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ3VycmVuY3lDTllPcHRpb25zLCBDdXJyZW5jeVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbC9mb3JtYXQnO1xuXG5AUGlwZSh7IG5hbWU6ICdjbnknLCBzdGFuZGFsb25lOiB0cnVlIH0pXG5leHBvcnQgY2xhc3MgQ3VycmVuY3lDTllQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3J2OiBDdXJyZW5jeVNlcnZpY2UpIHt9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRlZCBpbnRvIFJNQiBub3RhdGlvbi5cbiAgICpcbiAgICog6L2s5YyW5oiQ5Lq65rCR5biB6KGo56S65rOVXG4gICAqL1xuICB0cmFuc2Zvcm0odmFsdWU6IG51bWJlciB8IHN0cmluZywgb3B0aW9ucz86IEN1cnJlbmN5Q05ZT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuc3J2LmNueSh2YWx1ZSwgb3B0aW9ucyk7XG4gIH1cbn1cbiJdfQ==