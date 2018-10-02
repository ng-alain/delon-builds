/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import format from 'date-fns/format';
import addSeconds from 'date-fns/add_seconds';
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
                    template: "\n    <countdown *ngIf=\"config\" [config]=\"config\"\n      (start)=\"_start()\"\n      (finished)=\"_finished()\"\n      (notify)=\"_notify($event)\"></countdown>\n  ",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnQtZG93bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL2NvdW50LWRvd24vIiwic291cmNlcyI6WyJjb3VudC1kb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLE1BQU0sTUFBTSxpQkFBaUIsQ0FBQztBQUNyQyxPQUFPLFVBQVUsTUFBTSxzQkFBc0IsQ0FBQzs7O3FCQTZCMUIsSUFBSSxZQUFZLEVBQUU7c0JBQ2pCLElBQUksWUFBWSxFQUFVO21CQUM3QixJQUFJLFlBQVksRUFBRTs7SUFibEMsc0JBQ0ksc0NBQU07UUFKVjs7V0FFRzs7Ozs7O1FBQ0gsVUFDVyxLQUFvQjtZQUM3QixJQUFJLENBQUMsTUFBTSxHQUFHO2dCQUNaLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFDTixPQUFPLEtBQUssS0FBSyxRQUFRO29CQUN2QixDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUMsT0FBTyxFQUFFO29CQUN6QyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUM7YUFDekIsQ0FBQztTQUNIOzs7T0FBQTs7OztJQU1ELG1DQUFNOzs7SUFBTjtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDbkI7Ozs7O0lBRUQsb0NBQU87Ozs7SUFBUCxVQUFRLElBQVk7UUFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDeEI7Ozs7SUFFRCxzQ0FBUzs7O0lBQVQ7UUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ2pCOztnQkF6Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUUsMEtBS1Q7b0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztpQkFDM0I7Ozt5QkFFRSxLQUFLO3lCQUtMLEtBQUs7d0JBV0wsTUFBTTt5QkFDTixNQUFNO3NCQUNOLE1BQU07OzZCQWpDVDs7U0FjYSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgZm9ybWF0IGZyb20gJ2RhdGUtZm5zL2Zvcm1hdCc7XHJcbmltcG9ydCBhZGRTZWNvbmRzIGZyb20gJ2RhdGUtZm5zL2FkZF9zZWNvbmRzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY291bnQtZG93bicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxjb3VudGRvd24gKm5nSWY9XCJjb25maWdcIiBbY29uZmlnXT1cImNvbmZpZ1wiXHJcbiAgICAgIChzdGFydCk9XCJfc3RhcnQoKVwiXHJcbiAgICAgIChmaW5pc2hlZCk9XCJfZmluaXNoZWQoKVwiXHJcbiAgICAgIChub3RpZnkpPVwiX25vdGlmeSgkZXZlbnQpXCI+PC9jb3VudGRvd24+XHJcbiAgYCxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvdW50RG93bkNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgY29uZmlnOiBhbnk7XHJcblxyXG4gIC8qKlxyXG4gICAqIOebruagh+aXtumXtFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHRhcmdldCh2YWx1ZTogbnVtYmVyIHwgRGF0ZSkge1xyXG4gICAgdGhpcy5jb25maWcgPSB7XHJcbiAgICAgIHRlbXBsYXRlOiBgJCFoITokIW0hOiQhcyFgLFxyXG4gICAgICBzdG9wVGltZTpcclxuICAgICAgICB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInXHJcbiAgICAgICAgICA/IGFkZFNlY29uZHMobmV3IERhdGUoKSwgdmFsdWUpLnZhbHVlT2YoKVxyXG4gICAgICAgICAgOiBmb3JtYXQodmFsdWUsICd4JyksXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgQE91dHB1dCgpIGJlZ2luID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBub3RpZnkgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuICBAT3V0cHV0KCkgZW5kID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBfc3RhcnQoKSB7XHJcbiAgICB0aGlzLmJlZ2luLmVtaXQoKTtcclxuICB9XHJcblxyXG4gIF9ub3RpZnkodGltZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLm5vdGlmeS5lbWl0KHRpbWUpO1xyXG4gIH1cclxuXHJcbiAgX2ZpbmlzaGVkKCkge1xyXG4gICAgdGhpcy5lbmQuZW1pdCgpO1xyXG4gIH1cclxufVxyXG4iXX0=