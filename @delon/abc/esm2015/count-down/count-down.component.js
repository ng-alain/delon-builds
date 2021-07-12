import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { addSeconds, format } from 'date-fns';
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
CountDownComponent.decorators = [
    { type: Component, args: [{
                selector: 'count-down',
                exportAs: 'countDown',
                template: ` <countdown #cd *ngIf="config" [config]="config" (event)="handleEvent($event)"></countdown> `,
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] }
];
CountDownComponent.propDecorators = {
    instance: [{ type: ViewChild, args: ['cd', { static: false },] }],
    config: [{ type: Input }],
    target: [{ type: Input }],
    event: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnQtZG93bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvY291bnQtZG93bi9jb3VudC1kb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5SCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQVc5QyxNQUFNLE9BQU8sa0JBQWtCO0lBUi9CO1FBd0JxQixVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQWtCLENBQUM7SUFLaEUsQ0FBQztJQWhCQzs7T0FFRztJQUNILElBQ0ksTUFBTSxDQUFDLEtBQW9CO1FBQzdCLElBQUksQ0FBQyxNQUFNLEdBQUc7WUFDWixNQUFNLEVBQUUsVUFBVTtZQUNsQixRQUFRLEVBQUUsT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQztTQUNwRyxDQUFDO0lBQ0osQ0FBQztJQUlELFdBQVcsQ0FBQyxDQUFpQjtRQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyQixDQUFDOzs7WUE1QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUUsV0FBVztnQkFDckIsUUFBUSxFQUFFLDhGQUE4RjtnQkFDeEcsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDOzs7dUJBRUUsU0FBUyxTQUFDLElBQUksRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7cUJBRWpDLEtBQUs7cUJBS0wsS0FBSztvQkFRTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBhZGRTZWNvbmRzLCBmb3JtYXQgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgeyBDb3VudGRvd25Db21wb25lbnQsIENvdW50ZG93bkNvbmZpZywgQ291bnRkb3duRXZlbnQgfSBmcm9tICduZ3gtY291bnRkb3duJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY291bnQtZG93bicsXG4gIGV4cG9ydEFzOiAnY291bnREb3duJyxcbiAgdGVtcGxhdGU6IGAgPGNvdW50ZG93biAjY2QgKm5nSWY9XCJjb25maWdcIiBbY29uZmlnXT1cImNvbmZpZ1wiIChldmVudCk9XCJoYW5kbGVFdmVudCgkZXZlbnQpXCI+PC9jb3VudGRvd24+IGAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgQ291bnREb3duQ29tcG9uZW50IHtcbiAgQFZpZXdDaGlsZCgnY2QnLCB7IHN0YXRpYzogZmFsc2UgfSkgcmVhZG9ubHkgaW5zdGFuY2U6IENvdW50ZG93bkNvbXBvbmVudDtcblxuICBASW5wdXQoKSBjb25maWc6IENvdW50ZG93bkNvbmZpZztcblxuICAvKipcbiAgICog55uu5qCH5pe26Ze0XG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgdGFyZ2V0KHZhbHVlOiBudW1iZXIgfCBEYXRlKSB7XG4gICAgdGhpcy5jb25maWcgPSB7XG4gICAgICBmb3JtYXQ6IGBISDptbTpzc2AsXG4gICAgICBzdG9wVGltZTogdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyA/IGFkZFNlY29uZHMobmV3IERhdGUoKSwgdmFsdWUpLnZhbHVlT2YoKSA6ICtmb3JtYXQodmFsdWUsICd0JyksXG4gICAgfTtcbiAgfVxuXG4gIEBPdXRwdXQoKSByZWFkb25seSBldmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8Q291bnRkb3duRXZlbnQ+KCk7XG5cbiAgaGFuZGxlRXZlbnQoZTogQ291bnRkb3duRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLmV2ZW50LmVtaXQoZSk7XG4gIH1cbn1cbiJdfQ==