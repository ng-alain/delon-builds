/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import format from 'date-fns/format';
import addSeconds from 'date-fns/add_seconds';
export class CountDownComponent {
    constructor() {
        this.begin = new EventEmitter();
        this.notify = new EventEmitter();
        this.end = new EventEmitter();
    }
    /**
     * 目标时间
     * @param {?} value
     * @return {?}
     */
    set target(value) {
        this.config = {
            template: `$!h!:$!m!:$!s!`,
            stopTime: typeof value === 'number'
                ? addSeconds(new Date(), value).valueOf()
                : format(value, 'x'),
        };
    }
    /**
     * @return {?}
     */
    _start() {
        this.begin.emit();
    }
    /**
     * @param {?} time
     * @return {?}
     */
    _notify(time) {
        this.notify.emit(time);
    }
    /**
     * @return {?}
     */
    _finished() {
        this.end.emit();
    }
}
CountDownComponent.decorators = [
    { type: Component, args: [{
                selector: 'count-down',
                template: `
    <countdown *ngIf="config" [config]="config"
      (start)="_start()"
      (finished)="_finished()"
      (notify)="_notify($event)"></countdown>
  `,
                preserveWhitespaces: false
            }] }
];
CountDownComponent.propDecorators = {
    config: [{ type: Input }],
    target: [{ type: Input }],
    begin: [{ type: Output }],
    notify: [{ type: Output }],
    end: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    CountDownComponent.prototype.config;
    /** @type {?} */
    CountDownComponent.prototype.begin;
    /** @type {?} */
    CountDownComponent.prototype.notify;
    /** @type {?} */
    CountDownComponent.prototype.end;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnQtZG93bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL2NvdW50LWRvd24vIiwic291cmNlcyI6WyJjb3VudC1kb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLE1BQU0sTUFBTSxpQkFBaUIsQ0FBQztBQUNyQyxPQUFPLFVBQVUsTUFBTSxzQkFBc0IsQ0FBQztBQVk5QyxNQUFNOztxQkFpQmMsSUFBSSxZQUFZLEVBQUU7c0JBQ2pCLElBQUksWUFBWSxFQUFVO21CQUM3QixJQUFJLFlBQVksRUFBRTs7Ozs7OztJQWJsQyxJQUNJLE1BQU0sQ0FBQyxLQUFvQjtRQUM3QixJQUFJLENBQUMsTUFBTSxHQUFHO1lBQ1osUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixRQUFRLEVBQ04sT0FBTyxLQUFLLEtBQUssUUFBUTtnQkFDdkIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDLE9BQU8sRUFBRTtnQkFDekMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDO1NBQ3pCLENBQUM7S0FDSDs7OztJQU1ELE1BQU07UUFDSixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ25COzs7OztJQUVELE9BQU8sQ0FBQyxJQUFZO1FBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3hCOzs7O0lBRUQsU0FBUztRQUNQLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDakI7OztZQXpDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFFBQVEsRUFBRTs7Ozs7R0FLVDtnQkFDRCxtQkFBbUIsRUFBRSxLQUFLO2FBQzNCOzs7cUJBRUUsS0FBSztxQkFLTCxLQUFLO29CQVdMLE1BQU07cUJBQ04sTUFBTTtrQkFDTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IGZvcm1hdCBmcm9tICdkYXRlLWZucy9mb3JtYXQnO1xyXG5pbXBvcnQgYWRkU2Vjb25kcyBmcm9tICdkYXRlLWZucy9hZGRfc2Vjb25kcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NvdW50LWRvd24nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8Y291bnRkb3duICpuZ0lmPVwiY29uZmlnXCIgW2NvbmZpZ109XCJjb25maWdcIlxyXG4gICAgICAoc3RhcnQpPVwiX3N0YXJ0KClcIlxyXG4gICAgICAoZmluaXNoZWQpPVwiX2ZpbmlzaGVkKClcIlxyXG4gICAgICAobm90aWZ5KT1cIl9ub3RpZnkoJGV2ZW50KVwiPjwvY291bnRkb3duPlxyXG4gIGAsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb3VudERvd25Db21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGNvbmZpZzogYW55O1xyXG5cclxuICAvKipcclxuICAgKiDnm67moIfml7bpl7RcclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIHNldCB0YXJnZXQodmFsdWU6IG51bWJlciB8IERhdGUpIHtcclxuICAgIHRoaXMuY29uZmlnID0ge1xyXG4gICAgICB0ZW1wbGF0ZTogYCQhaCE6JCFtITokIXMhYCxcclxuICAgICAgc3RvcFRpbWU6XHJcbiAgICAgICAgdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJ1xyXG4gICAgICAgICAgPyBhZGRTZWNvbmRzKG5ldyBEYXRlKCksIHZhbHVlKS52YWx1ZU9mKClcclxuICAgICAgICAgIDogZm9ybWF0KHZhbHVlLCAneCcpLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIEBPdXRwdXQoKSBiZWdpbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgbm90aWZ5ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcbiAgQE91dHB1dCgpIGVuZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgX3N0YXJ0KCkge1xyXG4gICAgdGhpcy5iZWdpbi5lbWl0KCk7XHJcbiAgfVxyXG5cclxuICBfbm90aWZ5KHRpbWU6IG51bWJlcikge1xyXG4gICAgdGhpcy5ub3RpZnkuZW1pdCh0aW1lKTtcclxuICB9XHJcblxyXG4gIF9maW5pc2hlZCgpIHtcclxuICAgIHRoaXMuZW5kLmVtaXQoKTtcclxuICB9XHJcbn1cclxuIl19