import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { addSeconds, format } from 'date-fns';
import { CountdownComponent } from 'ngx-countdown';
import * as i0 from "@angular/core";
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
            stopTime: typeof value === 'number' ? addSeconds(new Date(), value).valueOf() : +format(value, 't')
        };
    }
    handleEvent(e) {
        this.event.emit(e);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: CountDownComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.1.0", type: CountDownComponent, isStandalone: true, selector: "count-down", inputs: { config: "config", target: "target" }, outputs: { event: "event" }, viewQueries: [{ propertyName: "instance", first: true, predicate: ["cd"], descendants: true }], exportAs: ["countDown"], ngImport: i0, template: `@if (config) {
    <countdown #cd [config]="config" (event)="handleEvent($event)" />
  }`, isInline: true, dependencies: [{ kind: "component", type: CountdownComponent, selector: "countdown", inputs: ["config", "render"], outputs: ["event"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: CountDownComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'count-down',
                    exportAs: 'countDown',
                    template: `@if (config) {
    <countdown #cd [config]="config" (event)="handleEvent($event)" />
  }`,
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    standalone: true,
                    imports: [CountdownComponent]
                }]
        }], propDecorators: { instance: [{
                type: ViewChild,
                args: ['cd', { static: false }]
            }], config: [{
                type: Input
            }], target: [{
                type: Input
            }], event: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnQtZG93bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvY291bnQtZG93bi9jb3VudC1kb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxrQkFBa0IsRUFBbUMsTUFBTSxlQUFlLENBQUM7O0FBY3BGLE1BQU0sT0FBTyxrQkFBa0I7SUFaL0I7UUE0QnFCLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBa0IsQ0FBQztLQUsvRDtJQWhCQzs7T0FFRztJQUNILElBQ0ksTUFBTSxDQUFDLEtBQW9CO1FBQzdCLElBQUksQ0FBQyxNQUFNLEdBQUc7WUFDWixNQUFNLEVBQUUsVUFBVTtZQUNsQixRQUFRLEVBQUUsT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQztTQUNwRyxDQUFDO0lBQ0osQ0FBQztJQUlELFdBQVcsQ0FBQyxDQUFpQjtRQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyQixDQUFDOzhHQXBCVSxrQkFBa0I7a0dBQWxCLGtCQUFrQiw0UUFUbkI7O0lBRVIsNERBS1Esa0JBQWtCOzsyRkFFakIsa0JBQWtCO2tCQVo5QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUUsV0FBVztvQkFDckIsUUFBUSxFQUFFOztJQUVSO29CQUNGLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLE9BQU8sRUFBRSxDQUFDLGtCQUFrQixDQUFDO2lCQUM5Qjs4QkFFOEMsUUFBUTtzQkFBcEQsU0FBUzt1QkFBQyxJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO2dCQUV6QixNQUFNO3NCQUFkLEtBQUs7Z0JBTUYsTUFBTTtzQkFEVCxLQUFLO2dCQVFhLEtBQUs7c0JBQXZCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGFkZFNlY29uZHMsIGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7IENvdW50ZG93bkNvbXBvbmVudCwgQ291bnRkb3duQ29uZmlnLCBDb3VudGRvd25FdmVudCB9IGZyb20gJ25neC1jb3VudGRvd24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb3VudC1kb3duJyxcbiAgZXhwb3J0QXM6ICdjb3VudERvd24nLFxuICB0ZW1wbGF0ZTogYEBpZiAoY29uZmlnKSB7XG4gICAgPGNvdW50ZG93biAjY2QgW2NvbmZpZ109XCJjb25maWdcIiAoZXZlbnQpPVwiaGFuZGxlRXZlbnQoJGV2ZW50KVwiIC8+XG4gIH1gLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtDb3VudGRvd25Db21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIENvdW50RG93bkNvbXBvbmVudCB7XG4gIEBWaWV3Q2hpbGQoJ2NkJywgeyBzdGF0aWM6IGZhbHNlIH0pIHJlYWRvbmx5IGluc3RhbmNlITogQ291bnRkb3duQ29tcG9uZW50O1xuXG4gIEBJbnB1dCgpIGNvbmZpZz86IENvdW50ZG93bkNvbmZpZztcblxuICAvKipcbiAgICog55uu5qCH5pe26Ze0XG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgdGFyZ2V0KHZhbHVlOiBudW1iZXIgfCBEYXRlKSB7XG4gICAgdGhpcy5jb25maWcgPSB7XG4gICAgICBmb3JtYXQ6IGBISDptbTpzc2AsXG4gICAgICBzdG9wVGltZTogdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyA/IGFkZFNlY29uZHMobmV3IERhdGUoKSwgdmFsdWUpLnZhbHVlT2YoKSA6ICtmb3JtYXQodmFsdWUsICd0JylcbiAgICB9O1xuICB9XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxDb3VudGRvd25FdmVudD4oKTtcblxuICBoYW5kbGVFdmVudChlOiBDb3VudGRvd25FdmVudCk6IHZvaWQge1xuICAgIHRoaXMuZXZlbnQuZW1pdChlKTtcbiAgfVxufVxuIl19