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
XlsxDirective.ctorParameters = () => [
    { type: XlsxService }
];
XlsxDirective.propDecorators = {
    data: [{ type: Input, args: ['xlsx',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGxzeC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMveGxzeC94bHN4LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFVN0MsTUFBTSxPQUFPLGFBQWE7SUFHeEIsWUFBb0IsR0FBZ0I7UUFBaEIsUUFBRyxHQUFILEdBQUcsQ0FBYTtJQUFHLENBQUM7SUFFeEMsTUFBTTtRQUNKLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7WUFkRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLFFBQVEsRUFBRSxNQUFNO2dCQUNoQixJQUFJLEVBQUU7b0JBQ0osU0FBUyxFQUFFLFVBQVU7aUJBQ3RCO2FBQ0Y7OztZQVRRLFdBQVc7OzttQkFXakIsS0FBSyxTQUFDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBYbHN4U2VydmljZSB9IGZyb20gJy4veGxzeC5zZXJ2aWNlJztcbmltcG9ydCB7IFhsc3hFeHBvcnRPcHRpb25zIH0gZnJvbSAnLi94bHN4LnR5cGVzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3hsc3hdJyxcbiAgZXhwb3J0QXM6ICd4bHN4JyxcbiAgaG9zdDoge1xuICAgICcoY2xpY2spJzogJ19jbGljaygpJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgWGxzeERpcmVjdGl2ZSB7XG4gIEBJbnB1dCgneGxzeCcpIGRhdGE6IFhsc3hFeHBvcnRPcHRpb25zO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3J2OiBYbHN4U2VydmljZSkge31cblxuICBfY2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5zcnYuZXhwb3J0KHRoaXMuZGF0YSk7XG4gIH1cbn1cbiJdfQ==