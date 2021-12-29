import { Pipe } from '@angular/core';
import { CurrencyService } from '@delon/util/format';
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
}
CurrencyCNYPipe.decorators = [
    { type: Pipe, args: [{ name: 'cny' },] }
];
CurrencyCNYPipe.ctorParameters = () => [
    { type: CurrencyService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY255LnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy91dGlsL3BpcGVzL2N1cnJlbmN5L2NueS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXBELE9BQU8sRUFBc0IsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHekUsTUFBTSxPQUFPLGVBQWU7SUFDMUIsWUFBb0IsR0FBb0I7UUFBcEIsUUFBRyxHQUFILEdBQUcsQ0FBaUI7SUFBRyxDQUFDO0lBRTVDOzs7O09BSUc7SUFDSCxTQUFTLENBQUMsS0FBc0IsRUFBRSxPQUE0QjtRQUM1RCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7WUFYRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFOzs7WUFGUSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDdXJyZW5jeUNOWU9wdGlvbnMsIEN1cnJlbmN5U2VydmljZSB9IGZyb20gJ0BkZWxvbi91dGlsL2Zvcm1hdCc7XG5cbkBQaXBlKHsgbmFtZTogJ2NueScgfSlcbmV4cG9ydCBjbGFzcyBDdXJyZW5jeUNOWVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzcnY6IEN1cnJlbmN5U2VydmljZSkge31cblxuICAvKipcbiAgICogQ29udmVydGVkIGludG8gUk1CIG5vdGF0aW9uLlxuICAgKlxuICAgKiDovazljJbmiJDkurrmsJHluIHooajnpLrms5VcbiAgICovXG4gIHRyYW5zZm9ybSh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nLCBvcHRpb25zPzogQ3VycmVuY3lDTllPcHRpb25zKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5zcnYuY255KHZhbHVlLCBvcHRpb25zKTtcbiAgfVxufVxuIl19