/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation, ViewChild } from '@angular/core';
import addSeconds from 'date-fns/add_seconds';
import format from 'date-fns/format';
import { CountdownComponent } from 'ngx-countdown';
import { warnDeprecation } from 'ng-zorro-antd/core';
var CountDownComponent = /** @class */ (function () {
    function CountDownComponent() {
        this.begin = new EventEmitter();
        this.notify = new EventEmitter();
        this.end = new EventEmitter();
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
     * @return {?}
     */
    CountDownComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.begin.observers.length > 0 || this.notify.observers.length > 0 || this.end.observers.length > 0) {
            warnDeprecation("begin, notify, end events is deprecated and will be removed in 9.0.0. Please use 'event' instead.");
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    CountDownComponent.prototype.handleEvent = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
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
    };
    CountDownComponent.decorators = [
        { type: Component, args: [{
                    selector: 'count-down',
                    exportAs: 'countDown',
                    template: "\n    <countdown #cd *ngIf=\"config\" [config]=\"config\" (event)=\"handleEvent($event)\"></countdown>\n  ",
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
    return CountDownComponent;
}());
export { CountDownComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnQtZG93bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL2NvdW50LWRvd24vIiwic291cmNlcyI6WyJjb3VudC1kb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBVSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEksT0FBTyxVQUFVLE1BQU0sc0JBQXNCLENBQUM7QUFDOUMsT0FBTyxNQUFNLE1BQU0saUJBQWlCLENBQUM7QUFDckMsT0FBTyxFQUFtQyxrQkFBa0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFckQ7SUFBQTtRQTBCcUIsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFDakMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDcEMsUUFBRyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFFL0IsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFrQixDQUFDO0lBc0JoRSxDQUFDO0lBbENDLHNCQUNJLHNDQUFNO1FBSlY7O1dBRUc7Ozs7OztRQUNILFVBQ1csS0FBb0I7WUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRztnQkFDWixNQUFNLEVBQUUsVUFBVTtnQkFDbEIsUUFBUSxFQUFFLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUM7YUFDcEcsQ0FBQztRQUNKLENBQUM7OztPQUFBOzs7O0lBUUQscUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN4RyxlQUFlLENBQUMsbUdBQW1HLENBQUMsQ0FBQztTQUN0SDtJQUNILENBQUM7Ozs7O0lBRUQsd0NBQVc7Ozs7SUFBWCxVQUFZLENBQWlCO1FBQzNCLFFBQVEsQ0FBQyxDQUFDLE1BQU0sRUFBRTtZQUNoQixLQUFLLE9BQU87Z0JBQ1YsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDbEIsTUFBTTtZQUNSLEtBQUssUUFBUTtnQkFDWCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3pCLE1BQU07WUFDUixLQUFLLE1BQU07Z0JBQ1QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDaEIsTUFBTTtTQUNUO1FBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckIsQ0FBQzs7Z0JBbkRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLFFBQVEsRUFBRSw0R0FFVDtvQkFDRCxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3RDOzs7MkJBRUUsU0FBUyxTQUFDLElBQUksRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7eUJBRWpDLEtBQUs7eUJBS0wsS0FBSzt3QkFRTCxNQUFNO3lCQUNOLE1BQU07c0JBQ04sTUFBTTt3QkFFTixNQUFNOztJQXNCVCx5QkFBQztDQUFBLEFBcERELElBb0RDO1NBMUNZLGtCQUFrQjs7O0lBQzdCLHNDQUEwRTs7SUFFMUUsb0NBQWlDOztJQWFqQyxtQ0FBb0Q7O0lBQ3BELG9DQUF1RDs7SUFDdkQsaUNBQWtEOztJQUVsRCxtQ0FBOEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IGFkZFNlY29uZHMgZnJvbSAnZGF0ZS1mbnMvYWRkX3NlY29uZHMnO1xuaW1wb3J0IGZvcm1hdCBmcm9tICdkYXRlLWZucy9mb3JtYXQnO1xuaW1wb3J0IHsgQ291bnRkb3duRXZlbnQsIENvdW50ZG93bkNvbmZpZywgQ291bnRkb3duQ29tcG9uZW50IH0gZnJvbSAnbmd4LWNvdW50ZG93bic7XG5pbXBvcnQgeyB3YXJuRGVwcmVjYXRpb24gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb3VudC1kb3duJyxcbiAgZXhwb3J0QXM6ICdjb3VudERvd24nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxjb3VudGRvd24gI2NkICpuZ0lmPVwiY29uZmlnXCIgW2NvbmZpZ109XCJjb25maWdcIiAoZXZlbnQpPVwiaGFuZGxlRXZlbnQoJGV2ZW50KVwiPjwvY291bnRkb3duPlxuICBgLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIENvdW50RG93bkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBWaWV3Q2hpbGQoJ2NkJywgeyBzdGF0aWM6IGZhbHNlIH0pIHJlYWRvbmx5IGluc3RhbmNlOiBDb3VudGRvd25Db21wb25lbnQ7XG5cbiAgQElucHV0KCkgY29uZmlnOiBDb3VudGRvd25Db25maWc7XG5cbiAgLyoqXG4gICAqIOebruagh+aXtumXtFxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IHRhcmdldCh2YWx1ZTogbnVtYmVyIHwgRGF0ZSkge1xuICAgIHRoaXMuY29uZmlnID0ge1xuICAgICAgZm9ybWF0OiBgSEg6bW06c3NgLFxuICAgICAgc3RvcFRpbWU6IHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgPyBhZGRTZWNvbmRzKG5ldyBEYXRlKCksIHZhbHVlKS52YWx1ZU9mKCkgOiArZm9ybWF0KHZhbHVlLCAneCcpLFxuICAgIH07XG4gIH1cblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgYmVnaW4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBub3RpZnkgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGVuZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgZXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPENvdW50ZG93bkV2ZW50PigpO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmJlZ2luLm9ic2VydmVycy5sZW5ndGggPiAwIHx8IHRoaXMubm90aWZ5Lm9ic2VydmVycy5sZW5ndGggPiAwIHx8IHRoaXMuZW5kLm9ic2VydmVycy5sZW5ndGggPiAwKSB7XG4gICAgICB3YXJuRGVwcmVjYXRpb24oYGJlZ2luLCBub3RpZnksIGVuZCBldmVudHMgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIDkuMC4wLiBQbGVhc2UgdXNlICdldmVudCcgaW5zdGVhZC5gKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVFdmVudChlOiBDb3VudGRvd25FdmVudCkge1xuICAgIHN3aXRjaCAoZS5hY3Rpb24pIHtcbiAgICAgIGNhc2UgJ3N0YXJ0JzpcbiAgICAgICAgdGhpcy5iZWdpbi5lbWl0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbm90aWZ5JzpcbiAgICAgICAgdGhpcy5ub3RpZnkuZW1pdChlLmxlZnQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2RvbmUnOlxuICAgICAgICB0aGlzLmVuZC5lbWl0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB0aGlzLmV2ZW50LmVtaXQoZSk7XG4gIH1cbn1cbiJdfQ==