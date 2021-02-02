import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import addSeconds from 'date-fns/addSeconds';
import format from 'date-fns/format';
import { CountdownComponent } from 'ngx-countdown';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ngx-countdown";
export class CountDownComponent {
    constructor() {
        this.event = new EventEmitter();
    }
    /**
     * 目标时间
     */
    set target(value) {
        this.config = {
            format: `HH:mm:ss`,
            stopTime: typeof value === 'number' ? addSeconds(new Date(), value).valueOf() : +format(value, 't'),
        };
    }
    handleEvent(e) {
        this.event.emit(e);
    }
}
/** @nocollapse */ CountDownComponent.ɵfac = function CountDownComponent_Factory(t) { return new (t || CountDownComponent)(); };
/** @nocollapse */ CountDownComponent.ɵcmp = i0.ɵɵngDeclareComponent({ version: "11.1.1", type: CountDownComponent, selector: "count-down", inputs: { config: "config", target: "target" }, outputs: { event: "event" }, viewQueries: [{ propertyName: "instance", first: true, predicate: ["cd"], emitDistinctChangesOnly: false, descendants: true }], exportAs: ["countDown"], ngImport: i0, template: ` <countdown #cd *ngIf="config" [config]="config" (event)="handleEvent($event)"></countdown> `, isInline: true, directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.CountdownComponent, selector: "countdown", inputs: ["config", "render"], outputs: ["event"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CountDownComponent, [{
        type: Component,
        args: [{
                selector: 'count-down',
                exportAs: 'countDown',
                template: ` <countdown #cd *ngIf="config" [config]="config" (event)="handleEvent($event)"></countdown> `,
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], null, { instance: [{
            type: ViewChild,
            args: ['cd', { static: false }]
        }], config: [{
            type: Input
        }], target: [{
            type: Input
        }], event: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnQtZG93bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvY291bnQtZG93bi9jb3VudC1kb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5SCxPQUFPLFVBQVUsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QyxPQUFPLE1BQU0sTUFBTSxpQkFBaUIsQ0FBQztBQUNyQyxPQUFPLEVBQUUsa0JBQWtCLEVBQW1DLE1BQU0sZUFBZSxDQUFDOzs7O0FBVXBGLE1BQU0sT0FBTyxrQkFBa0I7SUFSL0I7UUF3QnFCLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBa0IsQ0FBQztLQUsvRDtJQWhCQzs7T0FFRztJQUNILElBQ0ksTUFBTSxDQUFDLEtBQW9CO1FBQzdCLElBQUksQ0FBQyxNQUFNLEdBQUc7WUFDWixNQUFNLEVBQUUsVUFBVTtZQUNsQixRQUFRLEVBQUUsT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQztTQUNwRyxDQUFDO0lBQ0osQ0FBQztJQUlELFdBQVcsQ0FBQyxDQUFpQjtRQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyQixDQUFDOzt1R0FwQlUsa0JBQWtCO2dHQUFsQixrQkFBa0Isd1JBTG5CLDhGQUE4Rjt1RkFLN0Ysa0JBQWtCO2NBUjlCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFFBQVEsRUFBRSw4RkFBOEY7Z0JBQ3hHLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0QztnQkFFOEMsUUFBUTtrQkFBcEQsU0FBUzttQkFBQyxJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO1lBRXpCLE1BQU07a0JBQWQsS0FBSztZQU1GLE1BQU07a0JBRFQsS0FBSztZQVFhLEtBQUs7a0JBQXZCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBhZGRTZWNvbmRzIGZyb20gJ2RhdGUtZm5zL2FkZFNlY29uZHMnO1xuaW1wb3J0IGZvcm1hdCBmcm9tICdkYXRlLWZucy9mb3JtYXQnO1xuaW1wb3J0IHsgQ291bnRkb3duQ29tcG9uZW50LCBDb3VudGRvd25Db25maWcsIENvdW50ZG93bkV2ZW50IH0gZnJvbSAnbmd4LWNvdW50ZG93bic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NvdW50LWRvd24nLFxuICBleHBvcnRBczogJ2NvdW50RG93bicsXG4gIHRlbXBsYXRlOiBgIDxjb3VudGRvd24gI2NkICpuZ0lmPVwiY29uZmlnXCIgW2NvbmZpZ109XCJjb25maWdcIiAoZXZlbnQpPVwiaGFuZGxlRXZlbnQoJGV2ZW50KVwiPjwvY291bnRkb3duPiBgLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIENvdW50RG93bkNvbXBvbmVudCB7XG4gIEBWaWV3Q2hpbGQoJ2NkJywgeyBzdGF0aWM6IGZhbHNlIH0pIHJlYWRvbmx5IGluc3RhbmNlOiBDb3VudGRvd25Db21wb25lbnQ7XG5cbiAgQElucHV0KCkgY29uZmlnOiBDb3VudGRvd25Db25maWc7XG5cbiAgLyoqXG4gICAqIOebruagh+aXtumXtFxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IHRhcmdldCh2YWx1ZTogbnVtYmVyIHwgRGF0ZSkge1xuICAgIHRoaXMuY29uZmlnID0ge1xuICAgICAgZm9ybWF0OiBgSEg6bW06c3NgLFxuICAgICAgc3RvcFRpbWU6IHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgPyBhZGRTZWNvbmRzKG5ldyBEYXRlKCksIHZhbHVlKS52YWx1ZU9mKCkgOiArZm9ybWF0KHZhbHVlLCAndCcpLFxuICAgIH07XG4gIH1cblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgZXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPENvdW50ZG93bkV2ZW50PigpO1xuXG4gIGhhbmRsZUV2ZW50KGU6IENvdW50ZG93bkV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5ldmVudC5lbWl0KGUpO1xuICB9XG59XG4iXX0=