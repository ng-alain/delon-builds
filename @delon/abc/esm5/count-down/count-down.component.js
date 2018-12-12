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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnQtZG93bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL2NvdW50LWRvd24vIiwic291cmNlcyI6WyJjb3VudC1kb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLFVBQVUsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QyxPQUFPLE1BQU0sTUFBTSxpQkFBaUIsQ0FBQztBQUVyQztJQUFBO1FBdUJxQixVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUNqQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUNwQyxRQUFHLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQWFwRCxDQUFDO0lBdkJDLHNCQUNJLHNDQUFNO1FBSlY7O1dBRUc7Ozs7OztRQUNILFVBQ1csS0FBb0I7WUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRztnQkFDWixRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUUsT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUM7YUFDbkcsQ0FBQztRQUNKLENBQUM7OztPQUFBOzs7O0lBTUQsbUNBQU07OztJQUFOO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNwQixDQUFDOzs7OztJQUVELG9DQUFPOzs7O0lBQVAsVUFBUSxJQUFZO1FBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCxzQ0FBUzs7O0lBQVQ7UUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2xCLENBQUM7O2dCQXJDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFFBQVEsRUFBRSwwS0FLVDtpQkFDRjs7O3lCQUVFLEtBQUs7eUJBS0wsS0FBSzt3QkFRTCxNQUFNO3lCQUNOLE1BQU07c0JBQ04sTUFBTTs7SUFhVCx5QkFBQztDQUFBLEFBdENELElBc0NDO1NBN0JZLGtCQUFrQjs7O0lBQzdCLG9DQUFvQjs7SUFhcEIsbUNBQW9EOztJQUNwRCxvQ0FBdUQ7O0lBQ3ZELGlDQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgYWRkU2Vjb25kcyBmcm9tICdkYXRlLWZucy9hZGRfc2Vjb25kcyc7XG5pbXBvcnQgZm9ybWF0IGZyb20gJ2RhdGUtZm5zL2Zvcm1hdCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NvdW50LWRvd24nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxjb3VudGRvd24gKm5nSWY9XCJjb25maWdcIiBbY29uZmlnXT1cImNvbmZpZ1wiXG4gICAgICAoc3RhcnQpPVwiX3N0YXJ0KClcIlxuICAgICAgKGZpbmlzaGVkKT1cIl9maW5pc2hlZCgpXCJcbiAgICAgIChub3RpZnkpPVwiX25vdGlmeSgkZXZlbnQpXCI+PC9jb3VudGRvd24+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIENvdW50RG93bkNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGNvbmZpZzoge307XG5cbiAgLyoqXG4gICAqIOebruagh+aXtumXtFxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IHRhcmdldCh2YWx1ZTogbnVtYmVyIHwgRGF0ZSkge1xuICAgIHRoaXMuY29uZmlnID0ge1xuICAgICAgdGVtcGxhdGU6IGAkIWghOiQhbSE6JCFzIWAsXG4gICAgICBzdG9wVGltZTogdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyA/IGFkZFNlY29uZHMobmV3IERhdGUoKSwgdmFsdWUpLnZhbHVlT2YoKSA6IGZvcm1hdCh2YWx1ZSwgJ3gnKSxcbiAgICB9O1xuICB9XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGJlZ2luID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbm90aWZ5ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBlbmQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgX3N0YXJ0KCkge1xuICAgIHRoaXMuYmVnaW4uZW1pdCgpO1xuICB9XG5cbiAgX25vdGlmeSh0aW1lOiBudW1iZXIpIHtcbiAgICB0aGlzLm5vdGlmeS5lbWl0KHRpbWUpO1xuICB9XG5cbiAgX2ZpbmlzaGVkKCkge1xuICAgIHRoaXMuZW5kLmVtaXQoKTtcbiAgfVxufVxuIl19