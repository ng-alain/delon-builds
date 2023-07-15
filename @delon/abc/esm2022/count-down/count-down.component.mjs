import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { addSeconds, format } from 'date-fns';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ngx-countdown";
class CountDownComponent {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: CountDownComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.5", type: CountDownComponent, selector: "count-down", inputs: { config: "config", target: "target" }, outputs: { event: "event" }, viewQueries: [{ propertyName: "instance", first: true, predicate: ["cd"], descendants: true }], exportAs: ["countDown"], ngImport: i0, template: ` <countdown #cd *ngIf="config" [config]="config" (event)="handleEvent($event)"></countdown> `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.CountdownComponent, selector: "countdown", inputs: ["config", "render"], outputs: ["event"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
export { CountDownComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: CountDownComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'count-down',
                    exportAs: 'countDown',
                    template: ` <countdown #cd *ngIf="config" [config]="config" (event)="handleEvent($event)"></countdown> `,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnQtZG93bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvY291bnQtZG93bi9jb3VudC1kb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFDOzs7O0FBRzlDLE1BUWEsa0JBQWtCO0lBUi9CO1FBd0JxQixVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQWtCLENBQUM7S0FLL0Q7SUFoQkM7O09BRUc7SUFDSCxJQUNJLE1BQU0sQ0FBQyxLQUFvQjtRQUM3QixJQUFJLENBQUMsTUFBTSxHQUFHO1lBQ1osTUFBTSxFQUFFLFVBQVU7WUFDbEIsUUFBUSxFQUFFLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUM7U0FDcEcsQ0FBQztJQUNKLENBQUM7SUFJRCxXQUFXLENBQUMsQ0FBaUI7UUFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckIsQ0FBQzs4R0FwQlUsa0JBQWtCO2tHQUFsQixrQkFBa0Isd1BBTG5CLDhGQUE4Rjs7U0FLN0Ysa0JBQWtCOzJGQUFsQixrQkFBa0I7a0JBUjlCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFFBQVEsRUFBRSxXQUFXO29CQUNyQixRQUFRLEVBQUUsOEZBQThGO29CQUN4RyxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3RDOzhCQUU4QyxRQUFRO3NCQUFwRCxTQUFTO3VCQUFDLElBQUksRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7Z0JBRXpCLE1BQU07c0JBQWQsS0FBSztnQkFNRixNQUFNO3NCQURULEtBQUs7Z0JBUWEsS0FBSztzQkFBdkIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgYWRkU2Vjb25kcywgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHsgQ291bnRkb3duQ29tcG9uZW50LCBDb3VudGRvd25Db25maWcsIENvdW50ZG93bkV2ZW50IH0gZnJvbSAnbmd4LWNvdW50ZG93bic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NvdW50LWRvd24nLFxuICBleHBvcnRBczogJ2NvdW50RG93bicsXG4gIHRlbXBsYXRlOiBgIDxjb3VudGRvd24gI2NkICpuZ0lmPVwiY29uZmlnXCIgW2NvbmZpZ109XCJjb25maWdcIiAoZXZlbnQpPVwiaGFuZGxlRXZlbnQoJGV2ZW50KVwiPjwvY291bnRkb3duPiBgLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgQ291bnREb3duQ29tcG9uZW50IHtcbiAgQFZpZXdDaGlsZCgnY2QnLCB7IHN0YXRpYzogZmFsc2UgfSkgcmVhZG9ubHkgaW5zdGFuY2UhOiBDb3VudGRvd25Db21wb25lbnQ7XG5cbiAgQElucHV0KCkgY29uZmlnPzogQ291bnRkb3duQ29uZmlnO1xuXG4gIC8qKlxuICAgKiDnm67moIfml7bpl7RcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCB0YXJnZXQodmFsdWU6IG51bWJlciB8IERhdGUpIHtcbiAgICB0aGlzLmNvbmZpZyA9IHtcbiAgICAgIGZvcm1hdDogYEhIOm1tOnNzYCxcbiAgICAgIHN0b3BUaW1lOiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInID8gYWRkU2Vjb25kcyhuZXcgRGF0ZSgpLCB2YWx1ZSkudmFsdWVPZigpIDogK2Zvcm1hdCh2YWx1ZSwgJ3QnKVxuICAgIH07XG4gIH1cblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgZXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPENvdW50ZG93bkV2ZW50PigpO1xuXG4gIGhhbmRsZUV2ZW50KGU6IENvdW50ZG93bkV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5ldmVudC5lbWl0KGUpO1xuICB9XG59XG4iXX0=