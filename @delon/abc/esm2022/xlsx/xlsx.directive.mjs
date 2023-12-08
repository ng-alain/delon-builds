import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./xlsx.service";
export class XlsxDirective {
    constructor(srv) {
        this.srv = srv;
    }
    _click() {
        this.srv.export(this.data);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: XlsxDirective, deps: [{ token: i1.XlsxService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.2", type: XlsxDirective, isStandalone: true, selector: "[xlsx]", inputs: { data: ["xlsx", "data"] }, host: { listeners: { "click": "_click()" } }, exportAs: ["xlsx"], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: XlsxDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[xlsx]',
                    exportAs: 'xlsx',
                    host: {
                        '(click)': '_click()'
                    },
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i1.XlsxService }], propDecorators: { data: [{
                type: Input,
                args: ['xlsx']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGxzeC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMveGxzeC94bHN4LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBYWpELE1BQU0sT0FBTyxhQUFhO0lBR3hCLFlBQW9CLEdBQWdCO1FBQWhCLFFBQUcsR0FBSCxHQUFHLENBQWE7SUFBRyxDQUFDO0lBRXhDLE1BQU07UUFDSixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQzs4R0FQVSxhQUFhO2tHQUFiLGFBQWE7OzJGQUFiLGFBQWE7a0JBUnpCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFFBQVE7b0JBQ2xCLFFBQVEsRUFBRSxNQUFNO29CQUNoQixJQUFJLEVBQUU7d0JBQ0osU0FBUyxFQUFFLFVBQVU7cUJBQ3RCO29CQUNELFVBQVUsRUFBRSxJQUFJO2lCQUNqQjtnRkFFZ0IsSUFBSTtzQkFBbEIsS0FBSzt1QkFBQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBYbHN4U2VydmljZSB9IGZyb20gJy4veGxzeC5zZXJ2aWNlJztcbmltcG9ydCB7IFhsc3hFeHBvcnRPcHRpb25zIH0gZnJvbSAnLi94bHN4LnR5cGVzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3hsc3hdJyxcbiAgZXhwb3J0QXM6ICd4bHN4JyxcbiAgaG9zdDoge1xuICAgICcoY2xpY2spJzogJ19jbGljaygpJ1xuICB9LFxuICBzdGFuZGFsb25lOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIFhsc3hEaXJlY3RpdmUge1xuICBASW5wdXQoJ3hsc3gnKSBkYXRhITogWGxzeEV4cG9ydE9wdGlvbnM7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzcnY6IFhsc3hTZXJ2aWNlKSB7fVxuXG4gIF9jbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLnNydi5leHBvcnQodGhpcy5kYXRhKTtcbiAgfVxufVxuIl19