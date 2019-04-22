/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import addSeconds from 'date-fns/add_seconds';
import format from 'date-fns/format';
var CountDownComponent = /** @class */ (function () {
    function CountDownComponent() {
        this.begin = new EventEmitter();
        this.notify = new EventEmitter();
        this.end = new EventEmitter();
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
                template: "$!h!:$!m!:$!s!",
                stopTime: typeof value === 'number' ? addSeconds(new Date(), value).valueOf() : format(value, 'x'),
            };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CountDownComponent.prototype._start = /**
     * @return {?}
     */
    function () {
        this.begin.emit();
    };
    /**
     * @param {?} time
     * @return {?}
     */
    CountDownComponent.prototype._notify = /**
     * @param {?} time
     * @return {?}
     */
    function (time) {
        this.notify.emit(time);
    };
    /**
     * @return {?}
     */
    CountDownComponent.prototype._finished = /**
     * @return {?}
     */
    function () {
        this.end.emit();
    };
    CountDownComponent.decorators = [
        { type: Component, args: [{
                    selector: 'count-down',
                    exportAs: 'countDown',
                    template: "\n    <countdown\n      *ngIf=\"config\"\n      [config]=\"config\"\n      (start)=\"_start()\"\n      (finished)=\"_finished()\"\n      (notify)=\"_notify($event)\"\n    ></countdown>\n  "
                }] }
    ];
    CountDownComponent.propDecorators = {
        config: [{ type: Input }],
        target: [{ type: Input }],
        begin: [{ type: Output }],
        notify: [{ type: Output }],
        end: [{ type: Output }]
    };
    return CountDownComponent;
}());
export { CountDownComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnQtZG93bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL2NvdW50LWRvd24vIiwic291cmNlcyI6WyJjb3VudC1kb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLFVBQVUsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QyxPQUFPLE1BQU0sTUFBTSxpQkFBaUIsQ0FBQztBQUVyQztJQUFBO1FBNEJxQixVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUNqQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUNwQyxRQUFHLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQWFwRCxDQUFDO0lBeEJDLHNCQUNJLHNDQUFNO1FBSlY7O1dBRUc7Ozs7OztRQUNILFVBQ1csS0FBb0I7WUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRztnQkFDWixRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQ04sT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUM7YUFDM0YsQ0FBQztRQUNKLENBQUM7OztPQUFBOzs7O0lBTUQsbUNBQU07OztJQUFOO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNwQixDQUFDOzs7OztJQUVELG9DQUFPOzs7O0lBQVAsVUFBUSxJQUFZO1FBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCxzQ0FBUzs7O0lBQVQ7UUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2xCLENBQUM7O2dCQTFDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFFBQVEsRUFBRSxXQUFXO29CQUNyQixRQUFRLEVBQUUsOExBUVQ7aUJBQ0Y7Ozt5QkFFRSxLQUFLO3lCQUtMLEtBQUs7d0JBU0wsTUFBTTt5QkFDTixNQUFNO3NCQUNOLE1BQU07O0lBYVQseUJBQUM7Q0FBQSxBQTNDRCxJQTJDQztTQTlCWSxrQkFBa0I7OztJQUM3QixvQ0FBb0I7O0lBY3BCLG1DQUFvRDs7SUFDcEQsb0NBQXVEOztJQUN2RCxpQ0FBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IGFkZFNlY29uZHMgZnJvbSAnZGF0ZS1mbnMvYWRkX3NlY29uZHMnO1xuaW1wb3J0IGZvcm1hdCBmcm9tICdkYXRlLWZucy9mb3JtYXQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb3VudC1kb3duJyxcbiAgZXhwb3J0QXM6ICdjb3VudERvd24nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxjb3VudGRvd25cbiAgICAgICpuZ0lmPVwiY29uZmlnXCJcbiAgICAgIFtjb25maWddPVwiY29uZmlnXCJcbiAgICAgIChzdGFydCk9XCJfc3RhcnQoKVwiXG4gICAgICAoZmluaXNoZWQpPVwiX2ZpbmlzaGVkKClcIlxuICAgICAgKG5vdGlmeSk9XCJfbm90aWZ5KCRldmVudClcIlxuICAgID48L2NvdW50ZG93bj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgQ291bnREb3duQ29tcG9uZW50IHtcbiAgQElucHV0KCkgY29uZmlnOiB7fTtcblxuICAvKipcbiAgICog55uu5qCH5pe26Ze0XG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgdGFyZ2V0KHZhbHVlOiBudW1iZXIgfCBEYXRlKSB7XG4gICAgdGhpcy5jb25maWcgPSB7XG4gICAgICB0ZW1wbGF0ZTogYCQhaCE6JCFtITokIXMhYCxcbiAgICAgIHN0b3BUaW1lOlxuICAgICAgICB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInID8gYWRkU2Vjb25kcyhuZXcgRGF0ZSgpLCB2YWx1ZSkudmFsdWVPZigpIDogZm9ybWF0KHZhbHVlLCAneCcpLFxuICAgIH07XG4gIH1cblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgYmVnaW4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBub3RpZnkgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGVuZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBfc3RhcnQoKSB7XG4gICAgdGhpcy5iZWdpbi5lbWl0KCk7XG4gIH1cblxuICBfbm90aWZ5KHRpbWU6IG51bWJlcikge1xuICAgIHRoaXMubm90aWZ5LmVtaXQodGltZSk7XG4gIH1cblxuICBfZmluaXNoZWQoKSB7XG4gICAgdGhpcy5lbmQuZW1pdCgpO1xuICB9XG59XG4iXX0=