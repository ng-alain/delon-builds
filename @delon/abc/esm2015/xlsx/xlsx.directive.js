import { Directive, Input } from '@angular/core';
import { XlsxService } from './xlsx.service';
export class XlsxDirective {
    constructor(srv) {
        this.srv = srv;
    }
    _click() {
        this.srv.export(this.data);
    }
}
XlsxDirective.decorators = [
    { type: Directive, args: [{
                selector: '[xlsx]',
                exportAs: 'xlsx',
                host: {
                    '(click)': '_click()',
                },
            },] }
];
/** @nocollapse */
XlsxDirective.ctorParameters = () => [
    { type: XlsxService }
];
XlsxDirective.propDecorators = {
    data: [{ type: Input, args: ['xlsx',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGxzeC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMveGxzeC94bHN4LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFVN0MsTUFBTSxPQUFPLGFBQWE7SUFHeEIsWUFBb0IsR0FBZ0I7UUFBaEIsUUFBRyxHQUFILEdBQUcsQ0FBYTtJQUFHLENBQUM7SUFFeEMsTUFBTTtRQUNKLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7WUFkRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLFFBQVEsRUFBRSxNQUFNO2dCQUNoQixJQUFJLEVBQUU7b0JBQ0osU0FBUyxFQUFFLFVBQVU7aUJBQ3RCO2FBQ0Y7Ozs7WUFUUSxXQUFXOzs7bUJBV2pCLEtBQUssU0FBQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgWGxzeFNlcnZpY2UgfSBmcm9tICcuL3hsc3guc2VydmljZSc7XG5pbXBvcnQgeyBYbHN4RXhwb3J0T3B0aW9ucyB9IGZyb20gJy4veGxzeC50eXBlcyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t4bHN4XScsXG4gIGV4cG9ydEFzOiAneGxzeCcsXG4gIGhvc3Q6IHtcbiAgICAnKGNsaWNrKSc6ICdfY2xpY2soKScsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIFhsc3hEaXJlY3RpdmUge1xuICBASW5wdXQoJ3hsc3gnKSBkYXRhOiBYbHN4RXhwb3J0T3B0aW9ucztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNydjogWGxzeFNlcnZpY2UpIHt9XG5cbiAgX2NsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuc3J2LmV4cG9ydCh0aGlzLmRhdGEpO1xuICB9XG59XG4iXX0=