/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
                stopTime: typeof value === 'number'
                    ? addSeconds(new Date(), value).valueOf()
                    : format(value, 'x'),
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
                    template: "\n    <countdown *ngIf=\"config\" [config]=\"config\"\n      (start)=\"_start()\"\n      (finished)=\"_finished()\"\n      (notify)=\"_notify($event)\"></countdown>\n  "
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnQtZG93bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL2NvdW50LWRvd24vIiwic291cmNlcyI6WyJjb3VudC1kb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLFVBQVUsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QyxPQUFPLE1BQU0sTUFBTSxpQkFBaUIsQ0FBQztBQUVyQztJQUFBO1FBMEJxQixVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMzQixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUNwQyxRQUFHLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQWE5QyxDQUFDO0lBMUJDLHNCQUNJLHNDQUFNO1FBSlY7O1dBRUc7Ozs7OztRQUNILFVBQ1csS0FBb0I7WUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRztnQkFDWixRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQ04sT0FBTyxLQUFLLEtBQUssUUFBUTtvQkFDdkIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDLE9BQU8sRUFBRTtvQkFDekMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDO2FBQ3pCLENBQUM7UUFDSixDQUFDOzs7T0FBQTs7OztJQU1ELG1DQUFNOzs7SUFBTjtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFFRCxvQ0FBTzs7OztJQUFQLFVBQVEsSUFBWTtRQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsc0NBQVM7OztJQUFUO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNsQixDQUFDOztnQkF4Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUUsMEtBS1Q7aUJBQ0Y7Ozt5QkFFRSxLQUFLO3lCQUtMLEtBQUs7d0JBV0wsTUFBTTt5QkFDTixNQUFNO3NCQUNOLE1BQU07O0lBYVQseUJBQUM7Q0FBQSxBQXpDRCxJQXlDQztTQWhDWSxrQkFBa0I7OztJQUM3QixvQ0FBb0I7O0lBZ0JwQixtQ0FBOEM7O0lBQzlDLG9DQUF1RDs7SUFDdkQsaUNBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBhZGRTZWNvbmRzIGZyb20gJ2RhdGUtZm5zL2FkZF9zZWNvbmRzJztcbmltcG9ydCBmb3JtYXQgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY291bnQtZG93bicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGNvdW50ZG93biAqbmdJZj1cImNvbmZpZ1wiIFtjb25maWddPVwiY29uZmlnXCJcbiAgICAgIChzdGFydCk9XCJfc3RhcnQoKVwiXG4gICAgICAoZmluaXNoZWQpPVwiX2ZpbmlzaGVkKClcIlxuICAgICAgKG5vdGlmeSk9XCJfbm90aWZ5KCRldmVudClcIj48L2NvdW50ZG93bj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgQ291bnREb3duQ29tcG9uZW50IHtcbiAgQElucHV0KCkgY29uZmlnOiB7fTtcblxuICAvKipcbiAgICog55uu5qCH5pe26Ze0XG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgdGFyZ2V0KHZhbHVlOiBudW1iZXIgfCBEYXRlKSB7XG4gICAgdGhpcy5jb25maWcgPSB7XG4gICAgICB0ZW1wbGF0ZTogYCQhaCE6JCFtITokIXMhYCxcbiAgICAgIHN0b3BUaW1lOlxuICAgICAgICB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInXG4gICAgICAgICAgPyBhZGRTZWNvbmRzKG5ldyBEYXRlKCksIHZhbHVlKS52YWx1ZU9mKClcbiAgICAgICAgICA6IGZvcm1hdCh2YWx1ZSwgJ3gnKSxcbiAgICB9O1xuICB9XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGJlZ2luID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbm90aWZ5ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBlbmQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgX3N0YXJ0KCkge1xuICAgIHRoaXMuYmVnaW4uZW1pdCgpO1xuICB9XG5cbiAgX25vdGlmeSh0aW1lOiBudW1iZXIpIHtcbiAgICB0aGlzLm5vdGlmeS5lbWl0KHRpbWUpO1xuICB9XG5cbiAgX2ZpbmlzaGVkKCkge1xuICAgIHRoaXMuZW5kLmVtaXQoKTtcbiAgfVxufVxuIl19