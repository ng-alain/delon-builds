import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { addSeconds, format } from 'date-fns';
import * as i0 from "@angular/core";
import * as i1 from "ngx-countdown";
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CountDownComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: CountDownComponent, selector: "count-down", inputs: { config: "config", target: "target" }, outputs: { event: "event" }, viewQueries: [{ propertyName: "instance", first: true, predicate: ["cd"], descendants: true }], exportAs: ["countDown"], ngImport: i0, template: `@if (config) {
    <countdown #cd [config]="config" (event)="handleEvent($event)" />
  }`, isInline: true, dependencies: [{ kind: "component", type: i1.CountdownComponent, selector: "countdown", inputs: ["config", "render"], outputs: ["event"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: CountDownComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'count-down',
                    exportAs: 'countDown',
                    template: `@if (config) {
    <countdown #cd [config]="config" (event)="handleEvent($event)" />
  }`,
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnQtZG93bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvY291bnQtZG93bi9jb3VudC1kb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFDOzs7QUFhOUMsTUFBTSxPQUFPLGtCQUFrQjtJQVYvQjtRQTBCcUIsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFrQixDQUFDO0tBSy9EO0lBaEJDOztPQUVHO0lBQ0gsSUFDSSxNQUFNLENBQUMsS0FBb0I7UUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRztZQUNaLE1BQU0sRUFBRSxVQUFVO1lBQ2xCLFFBQVEsRUFBRSxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDO1NBQ3BHLENBQUM7SUFDSixDQUFDO0lBSUQsV0FBVyxDQUFDLENBQWlCO1FBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7OEdBcEJVLGtCQUFrQjtrR0FBbEIsa0JBQWtCLHdQQVBuQjs7SUFFUjs7MkZBS1Msa0JBQWtCO2tCQVY5QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUUsV0FBVztvQkFDckIsUUFBUSxFQUFFOztJQUVSO29CQUNGLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDdEM7OEJBRThDLFFBQVE7c0JBQXBELFNBQVM7dUJBQUMsSUFBSSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtnQkFFekIsTUFBTTtzQkFBZCxLQUFLO2dCQU1GLE1BQU07c0JBRFQsS0FBSztnQkFRYSxLQUFLO3NCQUF2QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBhZGRTZWNvbmRzLCBmb3JtYXQgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgeyBDb3VudGRvd25Db21wb25lbnQsIENvdW50ZG93bkNvbmZpZywgQ291bnRkb3duRXZlbnQgfSBmcm9tICduZ3gtY291bnRkb3duJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY291bnQtZG93bicsXG4gIGV4cG9ydEFzOiAnY291bnREb3duJyxcbiAgdGVtcGxhdGU6IGBAaWYgKGNvbmZpZykge1xuICAgIDxjb3VudGRvd24gI2NkIFtjb25maWddPVwiY29uZmlnXCIgKGV2ZW50KT1cImhhbmRsZUV2ZW50KCRldmVudClcIiAvPlxuICB9YCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIENvdW50RG93bkNvbXBvbmVudCB7XG4gIEBWaWV3Q2hpbGQoJ2NkJywgeyBzdGF0aWM6IGZhbHNlIH0pIHJlYWRvbmx5IGluc3RhbmNlITogQ291bnRkb3duQ29tcG9uZW50O1xuXG4gIEBJbnB1dCgpIGNvbmZpZz86IENvdW50ZG93bkNvbmZpZztcblxuICAvKipcbiAgICog55uu5qCH5pe26Ze0XG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgdGFyZ2V0KHZhbHVlOiBudW1iZXIgfCBEYXRlKSB7XG4gICAgdGhpcy5jb25maWcgPSB7XG4gICAgICBmb3JtYXQ6IGBISDptbTpzc2AsXG4gICAgICBzdG9wVGltZTogdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyA/IGFkZFNlY29uZHMobmV3IERhdGUoKSwgdmFsdWUpLnZhbHVlT2YoKSA6ICtmb3JtYXQodmFsdWUsICd0JylcbiAgICB9O1xuICB9XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxDb3VudGRvd25FdmVudD4oKTtcblxuICBoYW5kbGVFdmVudChlOiBDb3VudGRvd25FdmVudCk6IHZvaWQge1xuICAgIHRoaXMuZXZlbnQuZW1pdChlKTtcbiAgfVxufVxuIl19