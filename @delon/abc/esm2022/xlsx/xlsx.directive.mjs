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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.7", ngImport: i0, type: XlsxDirective, deps: [{ token: i1.XlsxService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.7", type: XlsxDirective, selector: "[xlsx]", inputs: { data: ["xlsx", "data"] }, host: { listeners: { "click": "_click()" } }, exportAs: ["xlsx"], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.7", ngImport: i0, type: XlsxDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[xlsx]',
                    exportAs: 'xlsx',
                    host: {
                        '(click)': '_click()'
                    }
                }]
        }], ctorParameters: function () { return [{ type: i1.XlsxService }]; }, propDecorators: { data: [{
                type: Input,
                args: ['xlsx']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGxzeC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMveGxzeC94bHN4LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBWWpELE1BQU0sT0FBTyxhQUFhO0lBR3hCLFlBQW9CLEdBQWdCO1FBQWhCLFFBQUcsR0FBSCxHQUFHLENBQWE7SUFBRyxDQUFDO0lBRXhDLE1BQU07UUFDSixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQzs4R0FQVSxhQUFhO2tHQUFiLGFBQWE7OzJGQUFiLGFBQWE7a0JBUHpCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFFBQVE7b0JBQ2xCLFFBQVEsRUFBRSxNQUFNO29CQUNoQixJQUFJLEVBQUU7d0JBQ0osU0FBUyxFQUFFLFVBQVU7cUJBQ3RCO2lCQUNGO2tHQUVnQixJQUFJO3NCQUFsQixLQUFLO3VCQUFDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFhsc3hTZXJ2aWNlIH0gZnJvbSAnLi94bHN4LnNlcnZpY2UnO1xuaW1wb3J0IHsgWGxzeEV4cG9ydE9wdGlvbnMgfSBmcm9tICcuL3hsc3gudHlwZXMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbeGxzeF0nLFxuICBleHBvcnRBczogJ3hsc3gnLFxuICBob3N0OiB7XG4gICAgJyhjbGljayknOiAnX2NsaWNrKCknXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgWGxzeERpcmVjdGl2ZSB7XG4gIEBJbnB1dCgneGxzeCcpIGRhdGEhOiBYbHN4RXhwb3J0T3B0aW9ucztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNydjogWGxzeFNlcnZpY2UpIHt9XG5cbiAgX2NsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuc3J2LmV4cG9ydCh0aGlzLmRhdGEpO1xuICB9XG59XG4iXX0=