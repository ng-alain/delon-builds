import { Component, Input, Output, EventEmitter, NgModule } from '@angular/core';
import format from 'date-fns/format';
import addSeconds from 'date-fns/add_seconds';
import { CommonModule } from '@angular/common';
import { CountdownModule } from 'ngx-countdown';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class CountDownComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [CountDownComponent];
class CountDownModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: CountDownModule, providers: [] };
    }
}
CountDownModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, CountdownModule],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { CountDownComponent, CountDownModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnQtZG93bi5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGRlbG9uL2FiYy9jb3VudC1kb3duL2NvdW50LWRvd24uY29tcG9uZW50LnRzIiwibmc6Ly9AZGVsb24vYWJjL2NvdW50LWRvd24vY291bnQtZG93bi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBmb3JtYXQgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0JztcbmltcG9ydCBhZGRTZWNvbmRzIGZyb20gJ2RhdGUtZm5zL2FkZF9zZWNvbmRzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY291bnQtZG93bicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGNvdW50ZG93biAqbmdJZj1cImNvbmZpZ1wiIFtjb25maWddPVwiY29uZmlnXCJcbiAgICAgIChzdGFydCk9XCJfc3RhcnQoKVwiXG4gICAgICAoZmluaXNoZWQpPVwiX2ZpbmlzaGVkKClcIlxuICAgICAgKG5vdGlmeSk9XCJfbm90aWZ5KCRldmVudClcIj48L2NvdW50ZG93bj5cbiAgYCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIENvdW50RG93bkNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGNvbmZpZzogYW55O1xuXG4gIC8qKlxuICAgKiDDp8Kbwq7DpsKgwofDpsKXwrbDqcKXwrRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCB0YXJnZXQodmFsdWU6IG51bWJlciB8IERhdGUpIHtcbiAgICB0aGlzLmNvbmZpZyA9IHtcbiAgICAgIHRlbXBsYXRlOiBgJCFoITokIW0hOiQhcyFgLFxuICAgICAgc3RvcFRpbWU6XG4gICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcidcbiAgICAgICAgICA/IGFkZFNlY29uZHMobmV3IERhdGUoKSwgdmFsdWUpLnZhbHVlT2YoKVxuICAgICAgICAgIDogZm9ybWF0KHZhbHVlLCAneCcpLFxuICAgIH07XG4gIH1cblxuICBAT3V0cHV0KCkgYmVnaW4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBub3RpZnkgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgQE91dHB1dCgpIGVuZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBfc3RhcnQoKSB7XG4gICAgdGhpcy5iZWdpbi5lbWl0KCk7XG4gIH1cblxuICBfbm90aWZ5KHRpbWU6IG51bWJlcikge1xuICAgIHRoaXMubm90aWZ5LmVtaXQodGltZSk7XG4gIH1cblxuICBfZmluaXNoZWQoKSB7XG4gICAgdGhpcy5lbmQuZW1pdCgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvdW50ZG93bk1vZHVsZSB9IGZyb20gJ25neC1jb3VudGRvd24nO1xuXG5pbXBvcnQgeyBDb3VudERvd25Db21wb25lbnQgfSBmcm9tICcuL2NvdW50LWRvd24uY29tcG9uZW50JztcblxuY29uc3QgQ09NUE9ORU5UUyA9IFtDb3VudERvd25Db21wb25lbnRdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBDb3VudGRvd25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTXSxcbiAgZXhwb3J0czogWy4uLkNPTVBPTkVOVFNdLFxufSlcbmV4cG9ydCBjbGFzcyBDb3VudERvd25Nb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4geyBuZ01vZHVsZTogQ291bnREb3duTW9kdWxlLCBwcm92aWRlcnM6IFtdIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O3FCQStCb0IsSUFBSSxZQUFZLEVBQUU7c0JBQ2pCLElBQUksWUFBWSxFQUFVO21CQUM3QixJQUFJLFlBQVksRUFBRTs7Ozs7OztJQWJsQyxJQUNJLE1BQU0sQ0FBQyxLQUFvQjtRQUM3QixJQUFJLENBQUMsTUFBTSxHQUFHO1lBQ1osUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixRQUFRLEVBQ04sT0FBTyxLQUFLLEtBQUssUUFBUTtrQkFDckIsVUFBVSxDQUFDLElBQUksSUFBSSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUMsT0FBTyxFQUFFO2tCQUN2QyxNQUFNLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQztTQUN6QixDQUFDO0tBQ0g7Ozs7SUFNRCxNQUFNO1FBQ0osSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUNuQjs7Ozs7SUFFRCxPQUFPLENBQUMsSUFBWTtRQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN4Qjs7OztJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ2pCOzs7WUF6Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUU7Ozs7O0dBS1Q7Z0JBQ0QsbUJBQW1CLEVBQUUsS0FBSzthQUMzQjs7O3FCQUVFLEtBQUs7cUJBS0wsS0FBSztvQkFXTCxNQUFNO3FCQUNOLE1BQU07a0JBQ04sTUFBTTs7Ozs7OztBQ2pDVDtBQU1BLE1BQU0sVUFBVSxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQU94Qzs7OztJQUNFLE9BQU8sT0FBTztRQUNaLE9BQU8sRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsQ0FBQztLQUNyRDs7O1lBUkYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxlQUFlLENBQUM7Z0JBQ3hDLFlBQVksRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDO2dCQUM3QixPQUFPLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQzthQUN6Qjs7Ozs7Ozs7Ozs7Ozs7OyJ9