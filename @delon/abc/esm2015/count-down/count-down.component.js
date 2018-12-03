/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
  `
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnQtZG93bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL2NvdW50LWRvd24vIiwic291cmNlcyI6WyJjb3VudC1kb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLE1BQU0sTUFBTSxpQkFBaUIsQ0FBQztBQUNyQyxPQUFPLFVBQVUsTUFBTSxzQkFBc0IsQ0FBQztBQVc5QyxNQUFNLE9BQU8sa0JBQWtCO0lBVC9CO1FBMEJxQixVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMzQixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUNwQyxRQUFHLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQWE5QyxDQUFDOzs7Ozs7SUExQkMsSUFDSSxNQUFNLENBQUMsS0FBb0I7UUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRztZQUNaLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsUUFBUSxFQUNOLE9BQU8sS0FBSyxLQUFLLFFBQVE7Z0JBQ3ZCLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQyxPQUFPLEVBQUU7Z0JBQ3pDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQztTQUN6QixDQUFDO0lBQ0osQ0FBQzs7OztJQU1ELE1BQU07UUFDSixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3BCLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLElBQVk7UUFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2xCLENBQUM7OztZQXhDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFFBQVEsRUFBRTs7Ozs7R0FLVDthQUNGOzs7cUJBRUUsS0FBSztxQkFLTCxLQUFLO29CQVdMLE1BQU07cUJBQ04sTUFBTTtrQkFDTixNQUFNOzs7O0lBbEJQLG9DQUFxQjs7SUFnQnJCLG1DQUE4Qzs7SUFDOUMsb0NBQXVEOztJQUN2RCxpQ0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IGZvcm1hdCBmcm9tICdkYXRlLWZucy9mb3JtYXQnO1xuaW1wb3J0IGFkZFNlY29uZHMgZnJvbSAnZGF0ZS1mbnMvYWRkX3NlY29uZHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb3VudC1kb3duJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8Y291bnRkb3duICpuZ0lmPVwiY29uZmlnXCIgW2NvbmZpZ109XCJjb25maWdcIlxuICAgICAgKHN0YXJ0KT1cIl9zdGFydCgpXCJcbiAgICAgIChmaW5pc2hlZCk9XCJfZmluaXNoZWQoKVwiXG4gICAgICAobm90aWZ5KT1cIl9ub3RpZnkoJGV2ZW50KVwiPjwvY291bnRkb3duPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBDb3VudERvd25Db21wb25lbnQge1xuICBASW5wdXQoKSBjb25maWc6IGFueTtcblxuICAvKipcbiAgICog55uu5qCH5pe26Ze0XG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgdGFyZ2V0KHZhbHVlOiBudW1iZXIgfCBEYXRlKSB7XG4gICAgdGhpcy5jb25maWcgPSB7XG4gICAgICB0ZW1wbGF0ZTogYCQhaCE6JCFtITokIXMhYCxcbiAgICAgIHN0b3BUaW1lOlxuICAgICAgICB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInXG4gICAgICAgICAgPyBhZGRTZWNvbmRzKG5ldyBEYXRlKCksIHZhbHVlKS52YWx1ZU9mKClcbiAgICAgICAgICA6IGZvcm1hdCh2YWx1ZSwgJ3gnKSxcbiAgICB9O1xuICB9XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGJlZ2luID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbm90aWZ5ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBlbmQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgX3N0YXJ0KCkge1xuICAgIHRoaXMuYmVnaW4uZW1pdCgpO1xuICB9XG5cbiAgX25vdGlmeSh0aW1lOiBudW1iZXIpIHtcbiAgICB0aGlzLm5vdGlmeS5lbWl0KHRpbWUpO1xuICB9XG5cbiAgX2ZpbmlzaGVkKCkge1xuICAgIHRoaXMuZW5kLmVtaXQoKTtcbiAgfVxufVxuIl19