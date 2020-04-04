/**
 * @fileoverview added by tsickle
 * Generated from: count-down.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import addSeconds from 'date-fns/addSeconds';
import format from 'date-fns/format';
import { CountdownComponent } from 'ngx-countdown';
var CountDownComponent = /** @class */ (function () {
    function CountDownComponent() {
        this.event = new EventEmitter();
    }
    Object.defineProperty(CountDownComponent.prototype, "target", {
        /**
         * 目标时间
         */
        set: /**
         * 目标时间
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.config = {
                format: "HH:mm:ss",
                stopTime: typeof value === 'number' ? addSeconds(new Date(), value).valueOf() : +format(value, 'x'),
            };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} e
     * @return {?}
     */
    CountDownComponent.prototype.handleEvent = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.event.emit(e);
    };
    CountDownComponent.decorators = [
        { type: Component, args: [{
                    selector: 'count-down',
                    exportAs: 'countDown',
                    template: " <countdown #cd *ngIf=\"config\" [config]=\"config\" (event)=\"handleEvent($event)\"></countdown> ",
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    CountDownComponent.propDecorators = {
        instance: [{ type: ViewChild, args: ['cd', { static: false },] }],
        config: [{ type: Input }],
        target: [{ type: Input }],
        event: [{ type: Output }]
    };
    return CountDownComponent;
}());
export { CountDownComponent };
if (false) {
    /** @type {?} */
    CountDownComponent.prototype.instance;
    /** @type {?} */
    CountDownComponent.prototype.config;
    /** @type {?} */
    CountDownComponent.prototype.event;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnQtZG93bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL2NvdW50LWRvd24vIiwic291cmNlcyI6WyJjb3VudC1kb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlILE9BQU8sVUFBVSxNQUFNLHFCQUFxQixDQUFDO0FBQzdDLE9BQU8sTUFBTSxNQUFNLGlCQUFpQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxrQkFBa0IsRUFBbUMsTUFBTSxlQUFlLENBQUM7QUFFcEY7SUFBQTtRQXdCcUIsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFrQixDQUFDO0lBS2hFLENBQUM7SUFiQyxzQkFDSSxzQ0FBTTtRQUpWOztXQUVHOzs7Ozs7UUFDSCxVQUNXLEtBQW9CO1lBQzdCLElBQUksQ0FBQyxNQUFNLEdBQUc7Z0JBQ1osTUFBTSxFQUFFLFVBQVU7Z0JBQ2xCLFFBQVEsRUFBRSxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDO2FBQ3BHLENBQUM7UUFDSixDQUFDOzs7T0FBQTs7Ozs7SUFJRCx3Q0FBVzs7OztJQUFYLFVBQVksQ0FBaUI7UUFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckIsQ0FBQzs7Z0JBNUJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLFFBQVEsRUFBRSxvR0FBOEY7b0JBQ3hHLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDdEM7OzsyQkFFRSxTQUFTLFNBQUMsSUFBSSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTt5QkFFakMsS0FBSzt5QkFLTCxLQUFLO3dCQVFMLE1BQU07O0lBS1QseUJBQUM7Q0FBQSxBQTdCRCxJQTZCQztTQXJCWSxrQkFBa0I7OztJQUM3QixzQ0FBMEU7O0lBRTFFLG9DQUFpQzs7SUFhakMsbUNBQThEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgYWRkU2Vjb25kcyBmcm9tICdkYXRlLWZucy9hZGRTZWNvbmRzJztcbmltcG9ydCBmb3JtYXQgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0JztcbmltcG9ydCB7IENvdW50ZG93bkNvbXBvbmVudCwgQ291bnRkb3duQ29uZmlnLCBDb3VudGRvd25FdmVudCB9IGZyb20gJ25neC1jb3VudGRvd24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb3VudC1kb3duJyxcbiAgZXhwb3J0QXM6ICdjb3VudERvd24nLFxuICB0ZW1wbGF0ZTogYCA8Y291bnRkb3duICNjZCAqbmdJZj1cImNvbmZpZ1wiIFtjb25maWddPVwiY29uZmlnXCIgKGV2ZW50KT1cImhhbmRsZUV2ZW50KCRldmVudClcIj48L2NvdW50ZG93bj4gYCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBDb3VudERvd25Db21wb25lbnQge1xuICBAVmlld0NoaWxkKCdjZCcsIHsgc3RhdGljOiBmYWxzZSB9KSByZWFkb25seSBpbnN0YW5jZTogQ291bnRkb3duQ29tcG9uZW50O1xuXG4gIEBJbnB1dCgpIGNvbmZpZzogQ291bnRkb3duQ29uZmlnO1xuXG4gIC8qKlxuICAgKiDnm67moIfml7bpl7RcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCB0YXJnZXQodmFsdWU6IG51bWJlciB8IERhdGUpIHtcbiAgICB0aGlzLmNvbmZpZyA9IHtcbiAgICAgIGZvcm1hdDogYEhIOm1tOnNzYCxcbiAgICAgIHN0b3BUaW1lOiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInID8gYWRkU2Vjb25kcyhuZXcgRGF0ZSgpLCB2YWx1ZSkudmFsdWVPZigpIDogK2Zvcm1hdCh2YWx1ZSwgJ3gnKSxcbiAgICB9O1xuICB9XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxDb3VudGRvd25FdmVudD4oKTtcblxuICBoYW5kbGVFdmVudChlOiBDb3VudGRvd25FdmVudCkge1xuICAgIHRoaXMuZXZlbnQuZW1pdChlKTtcbiAgfVxufVxuIl19