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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnQtZG93bi5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGRlbG9uL2FiYy9jb3VudC1kb3duL2NvdW50LWRvd24uY29tcG9uZW50LnRzIiwibmc6Ly9AZGVsb24vYWJjL2NvdW50LWRvd24vY291bnQtZG93bi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IGZvcm1hdCBmcm9tICdkYXRlLWZucy9mb3JtYXQnO1xyXG5pbXBvcnQgYWRkU2Vjb25kcyBmcm9tICdkYXRlLWZucy9hZGRfc2Vjb25kcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NvdW50LWRvd24nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8Y291bnRkb3duICpuZ0lmPVwiY29uZmlnXCIgW2NvbmZpZ109XCJjb25maWdcIlxyXG4gICAgICAoc3RhcnQpPVwiX3N0YXJ0KClcIlxyXG4gICAgICAoZmluaXNoZWQpPVwiX2ZpbmlzaGVkKClcIlxyXG4gICAgICAobm90aWZ5KT1cIl9ub3RpZnkoJGV2ZW50KVwiPjwvY291bnRkb3duPlxyXG4gIGAsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb3VudERvd25Db21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGNvbmZpZzogYW55O1xyXG5cclxuICAvKipcclxuICAgKiDDp8Kbwq7DpsKgwofDpsKXwrbDqcKXwrRcclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIHNldCB0YXJnZXQodmFsdWU6IG51bWJlciB8IERhdGUpIHtcclxuICAgIHRoaXMuY29uZmlnID0ge1xyXG4gICAgICB0ZW1wbGF0ZTogYCQhaCE6JCFtITokIXMhYCxcclxuICAgICAgc3RvcFRpbWU6XHJcbiAgICAgICAgdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJ1xyXG4gICAgICAgICAgPyBhZGRTZWNvbmRzKG5ldyBEYXRlKCksIHZhbHVlKS52YWx1ZU9mKClcclxuICAgICAgICAgIDogZm9ybWF0KHZhbHVlLCAneCcpLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIEBPdXRwdXQoKSBiZWdpbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgbm90aWZ5ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcbiAgQE91dHB1dCgpIGVuZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgX3N0YXJ0KCkge1xyXG4gICAgdGhpcy5iZWdpbi5lbWl0KCk7XHJcbiAgfVxyXG5cclxuICBfbm90aWZ5KHRpbWU6IG51bWJlcikge1xyXG4gICAgdGhpcy5ub3RpZnkuZW1pdCh0aW1lKTtcclxuICB9XHJcblxyXG4gIF9maW5pc2hlZCgpIHtcclxuICAgIHRoaXMuZW5kLmVtaXQoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQ291bnRkb3duTW9kdWxlIH0gZnJvbSAnbmd4LWNvdW50ZG93bic7XHJcblxyXG5pbXBvcnQgeyBDb3VudERvd25Db21wb25lbnQgfSBmcm9tICcuL2NvdW50LWRvd24uY29tcG9uZW50JztcclxuXHJcbmNvbnN0IENPTVBPTkVOVFMgPSBbQ291bnREb3duQ29tcG9uZW50XTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgQ291bnRkb3duTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTXSxcclxuICBleHBvcnRzOiBbLi4uQ09NUE9ORU5UU10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb3VudERvd25Nb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IENvdW50RG93bk1vZHVsZSwgcHJvdmlkZXJzOiBbXSB9O1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztxQkErQm9CLElBQUksWUFBWSxFQUFFO3NCQUNqQixJQUFJLFlBQVksRUFBVTttQkFDN0IsSUFBSSxZQUFZLEVBQUU7Ozs7Ozs7SUFibEMsSUFDSSxNQUFNLENBQUMsS0FBb0I7UUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRztZQUNaLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsUUFBUSxFQUNOLE9BQU8sS0FBSyxLQUFLLFFBQVE7a0JBQ3JCLFVBQVUsQ0FBQyxJQUFJLElBQUksRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDLE9BQU8sRUFBRTtrQkFDdkMsTUFBTSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUM7U0FDekIsQ0FBQztLQUNIOzs7O0lBTUQsTUFBTTtRQUNKLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDbkI7Ozs7O0lBRUQsT0FBTyxDQUFDLElBQVk7UUFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDeEI7Ozs7SUFFRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUNqQjs7O1lBekNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsUUFBUSxFQUFFOzs7OztHQUtUO2dCQUNELG1CQUFtQixFQUFFLEtBQUs7YUFDM0I7OztxQkFFRSxLQUFLO3FCQUtMLEtBQUs7b0JBV0wsTUFBTTtxQkFDTixNQUFNO2tCQUNOLE1BQU07Ozs7Ozs7QUNqQ1Q7QUFNQSxNQUFNLFVBQVUsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFPeEM7Ozs7SUFDRSxPQUFPLE9BQU87UUFDWixPQUFPLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUM7S0FDckQ7OztZQVJGLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDO2dCQUN4QyxZQUFZLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQztnQkFDN0IsT0FBTyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUM7YUFDekI7Ozs7Ozs7Ozs7Ozs7OzsifQ==