/**
 * @fileoverview added by tsickle
 * Generated from: count-down.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation, ViewChild } from '@angular/core';
import addSeconds from 'date-fns/add_seconds';
import format from 'date-fns/format';
import { CountdownComponent } from 'ngx-countdown';
import { warnDeprecation } from 'ng-zorro-antd/core';
export class CountDownComponent {
    constructor() {
        this.begin = new EventEmitter();
        this.notify = new EventEmitter();
        this.end = new EventEmitter();
        this.event = new EventEmitter();
    }
    /**
     * 目标时间
     * @param {?} value
     * @return {?}
     */
    set target(value) {
        this.config = {
            format: `HH:mm:ss`,
            stopTime: typeof value === 'number' ? addSeconds(new Date(), value).valueOf() : +format(value, 'x'),
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.begin.observers.length > 0 || this.notify.observers.length > 0 || this.end.observers.length > 0) {
            warnDeprecation(`begin, notify, end events is deprecated and will be removed in 9.0.0. Please use 'event' instead.`);
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    handleEvent(e) {
        switch (e.action) {
            case 'start':
                this.begin.emit();
                break;
            case 'notify':
                this.notify.emit(e.left);
                break;
            case 'done':
                this.end.emit();
                break;
        }
        this.event.emit(e);
    }
}
CountDownComponent.decorators = [
    { type: Component, args: [{
                selector: 'count-down',
                exportAs: 'countDown',
                template: `
    <countdown #cd *ngIf="config" [config]="config" (event)="handleEvent($event)"></countdown>
  `,
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
CountDownComponent.propDecorators = {
    instance: [{ type: ViewChild, args: ['cd', { static: false },] }],
    config: [{ type: Input }],
    target: [{ type: Input }],
    begin: [{ type: Output }],
    notify: [{ type: Output }],
    end: [{ type: Output }],
    event: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    CountDownComponent.prototype.instance;
    /** @type {?} */
    CountDownComponent.prototype.config;
    /** @type {?} */
    CountDownComponent.prototype.begin;
    /** @type {?} */
    CountDownComponent.prototype.notify;
    /** @type {?} */
    CountDownComponent.prototype.end;
    /** @type {?} */
    CountDownComponent.prototype.event;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnQtZG93bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL2NvdW50LWRvd24vIiwic291cmNlcyI6WyJjb3VudC1kb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQVUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RJLE9BQU8sVUFBVSxNQUFNLHNCQUFzQixDQUFDO0FBQzlDLE9BQU8sTUFBTSxNQUFNLGlCQUFpQixDQUFDO0FBQ3JDLE9BQU8sRUFBbUMsa0JBQWtCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBWXJELE1BQU0sT0FBTyxrQkFBa0I7SUFWL0I7UUEwQnFCLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBQ2pDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQ3BDLFFBQUcsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBRS9CLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBa0IsQ0FBQztJQXNCaEUsQ0FBQzs7Ozs7O0lBbENDLElBQ0ksTUFBTSxDQUFDLEtBQW9CO1FBQzdCLElBQUksQ0FBQyxNQUFNLEdBQUc7WUFDWixNQUFNLEVBQUUsVUFBVTtZQUNsQixRQUFRLEVBQUUsT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQztTQUNwRyxDQUFDO0lBQ0osQ0FBQzs7OztJQVFELFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3hHLGVBQWUsQ0FBQyxtR0FBbUcsQ0FBQyxDQUFDO1NBQ3RIO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsQ0FBaUI7UUFDM0IsUUFBUSxDQUFDLENBQUMsTUFBTSxFQUFFO1lBQ2hCLEtBQUssT0FBTztnQkFDVixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNsQixNQUFNO1lBQ1IsS0FBSyxRQUFRO2dCQUNYLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDekIsTUFBTTtZQUNSLEtBQUssTUFBTTtnQkFDVCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNoQixNQUFNO1NBQ1Q7UUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyQixDQUFDOzs7WUFuREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUUsV0FBVztnQkFDckIsUUFBUSxFQUFFOztHQUVUO2dCQUNELG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0Qzs7O3VCQUVFLFNBQVMsU0FBQyxJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO3FCQUVqQyxLQUFLO3FCQUtMLEtBQUs7b0JBUUwsTUFBTTtxQkFDTixNQUFNO2tCQUNOLE1BQU07b0JBRU4sTUFBTTs7OztJQW5CUCxzQ0FBMEU7O0lBRTFFLG9DQUFpQzs7SUFhakMsbUNBQW9EOztJQUNwRCxvQ0FBdUQ7O0lBQ3ZELGlDQUFrRDs7SUFFbEQsbUNBQThEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBhZGRTZWNvbmRzIGZyb20gJ2RhdGUtZm5zL2FkZF9zZWNvbmRzJztcbmltcG9ydCBmb3JtYXQgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0JztcbmltcG9ydCB7IENvdW50ZG93bkV2ZW50LCBDb3VudGRvd25Db25maWcsIENvdW50ZG93bkNvbXBvbmVudCB9IGZyb20gJ25neC1jb3VudGRvd24nO1xuaW1wb3J0IHsgd2FybkRlcHJlY2F0aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY291bnQtZG93bicsXG4gIGV4cG9ydEFzOiAnY291bnREb3duJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8Y291bnRkb3duICNjZCAqbmdJZj1cImNvbmZpZ1wiIFtjb25maWddPVwiY29uZmlnXCIgKGV2ZW50KT1cImhhbmRsZUV2ZW50KCRldmVudClcIj48L2NvdW50ZG93bj5cbiAgYCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBDb3VudERvd25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAVmlld0NoaWxkKCdjZCcsIHsgc3RhdGljOiBmYWxzZSB9KSByZWFkb25seSBpbnN0YW5jZTogQ291bnRkb3duQ29tcG9uZW50O1xuXG4gIEBJbnB1dCgpIGNvbmZpZzogQ291bnRkb3duQ29uZmlnO1xuXG4gIC8qKlxuICAgKiDnm67moIfml7bpl7RcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCB0YXJnZXQodmFsdWU6IG51bWJlciB8IERhdGUpIHtcbiAgICB0aGlzLmNvbmZpZyA9IHtcbiAgICAgIGZvcm1hdDogYEhIOm1tOnNzYCxcbiAgICAgIHN0b3BUaW1lOiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInID8gYWRkU2Vjb25kcyhuZXcgRGF0ZSgpLCB2YWx1ZSkudmFsdWVPZigpIDogK2Zvcm1hdCh2YWx1ZSwgJ3gnKSxcbiAgICB9O1xuICB9XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGJlZ2luID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbm90aWZ5ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBlbmQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxDb3VudGRvd25FdmVudD4oKTtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5iZWdpbi5vYnNlcnZlcnMubGVuZ3RoID4gMCB8fCB0aGlzLm5vdGlmeS5vYnNlcnZlcnMubGVuZ3RoID4gMCB8fCB0aGlzLmVuZC5vYnNlcnZlcnMubGVuZ3RoID4gMCkge1xuICAgICAgd2FybkRlcHJlY2F0aW9uKGBiZWdpbiwgbm90aWZ5LCBlbmQgZXZlbnRzIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiA5LjAuMC4gUGxlYXNlIHVzZSAnZXZlbnQnIGluc3RlYWQuYCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlRXZlbnQoZTogQ291bnRkb3duRXZlbnQpIHtcbiAgICBzd2l0Y2ggKGUuYWN0aW9uKSB7XG4gICAgICBjYXNlICdzdGFydCc6XG4gICAgICAgIHRoaXMuYmVnaW4uZW1pdCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ25vdGlmeSc6XG4gICAgICAgIHRoaXMubm90aWZ5LmVtaXQoZS5sZWZ0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkb25lJzpcbiAgICAgICAgdGhpcy5lbmQuZW1pdCgpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgdGhpcy5ldmVudC5lbWl0KGUpO1xuICB9XG59XG4iXX0=