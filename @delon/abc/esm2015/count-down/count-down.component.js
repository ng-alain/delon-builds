/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import addSeconds from 'date-fns/add_seconds';
import format from 'date-fns/format';
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
            stopTime: typeof value === 'number' ? addSeconds(new Date(), value).valueOf() : format(value, 'x'),
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
                exportAs: 'countDown',
                template: `
    <countdown
      *ngIf="config"
      [config]="config"
      (start)="_start()"
      (finished)="_finished()"
      (notify)="_notify($event)"
    ></countdown>
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnQtZG93bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL2NvdW50LWRvd24vIiwic291cmNlcyI6WyJjb3VudC1kb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLFVBQVUsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QyxPQUFPLE1BQU0sTUFBTSxpQkFBaUIsQ0FBQztBQWVyQyxNQUFNLE9BQU8sa0JBQWtCO0lBYi9CO1FBNEJxQixVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUNqQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUNwQyxRQUFHLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQWFwRCxDQUFDOzs7Ozs7SUF4QkMsSUFDSSxNQUFNLENBQUMsS0FBb0I7UUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRztZQUNaLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsUUFBUSxFQUNOLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDO1NBQzNGLENBQUM7SUFDSixDQUFDOzs7O0lBTUQsTUFBTTtRQUNKLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsSUFBWTtRQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsU0FBUztRQUNQLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7O1lBMUNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFFBQVEsRUFBRTs7Ozs7Ozs7R0FRVDthQUNGOzs7cUJBRUUsS0FBSztxQkFLTCxLQUFLO29CQVNMLE1BQU07cUJBQ04sTUFBTTtrQkFDTixNQUFNOzs7O0lBaEJQLG9DQUFvQjs7SUFjcEIsbUNBQW9EOztJQUNwRCxvQ0FBdUQ7O0lBQ3ZELGlDQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgYWRkU2Vjb25kcyBmcm9tICdkYXRlLWZucy9hZGRfc2Vjb25kcyc7XG5pbXBvcnQgZm9ybWF0IGZyb20gJ2RhdGUtZm5zL2Zvcm1hdCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NvdW50LWRvd24nLFxuICBleHBvcnRBczogJ2NvdW50RG93bicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGNvdW50ZG93blxuICAgICAgKm5nSWY9XCJjb25maWdcIlxuICAgICAgW2NvbmZpZ109XCJjb25maWdcIlxuICAgICAgKHN0YXJ0KT1cIl9zdGFydCgpXCJcbiAgICAgIChmaW5pc2hlZCk9XCJfZmluaXNoZWQoKVwiXG4gICAgICAobm90aWZ5KT1cIl9ub3RpZnkoJGV2ZW50KVwiXG4gICAgPjwvY291bnRkb3duPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBDb3VudERvd25Db21wb25lbnQge1xuICBASW5wdXQoKSBjb25maWc6IHt9O1xuXG4gIC8qKlxuICAgKiDnm67moIfml7bpl7RcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCB0YXJnZXQodmFsdWU6IG51bWJlciB8IERhdGUpIHtcbiAgICB0aGlzLmNvbmZpZyA9IHtcbiAgICAgIHRlbXBsYXRlOiBgJCFoITokIW0hOiQhcyFgLFxuICAgICAgc3RvcFRpbWU6XG4gICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgPyBhZGRTZWNvbmRzKG5ldyBEYXRlKCksIHZhbHVlKS52YWx1ZU9mKCkgOiBmb3JtYXQodmFsdWUsICd4JyksXG4gICAgfTtcbiAgfVxuXG4gIEBPdXRwdXQoKSByZWFkb25seSBiZWdpbiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG5vdGlmeSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgZW5kID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIF9zdGFydCgpIHtcbiAgICB0aGlzLmJlZ2luLmVtaXQoKTtcbiAgfVxuXG4gIF9ub3RpZnkodGltZTogbnVtYmVyKSB7XG4gICAgdGhpcy5ub3RpZnkuZW1pdCh0aW1lKTtcbiAgfVxuXG4gIF9maW5pc2hlZCgpIHtcbiAgICB0aGlzLmVuZC5lbWl0KCk7XG4gIH1cbn1cbiJdfQ==