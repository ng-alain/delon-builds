/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation, ViewChild } from '@angular/core';
import addSeconds from 'date-fns/add_seconds';
import format from 'date-fns/format';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnQtZG93bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL2NvdW50LWRvd24vIiwic291cmNlcyI6WyJjb3VudC1kb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBVSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEksT0FBTyxVQUFVLE1BQU0sc0JBQXNCLENBQUM7QUFDOUMsT0FBTyxNQUFNLE1BQU0saUJBQWlCLENBQUM7QUFFckMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXJEO0lBQUE7UUEwQnFCLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBQ2pDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQ3BDLFFBQUcsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBRS9CLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBa0IsQ0FBQztJQXNCaEUsQ0FBQztJQWxDQyxzQkFDSSxzQ0FBTTtRQUpWOztXQUVHOzs7Ozs7UUFDSCxVQUNXLEtBQW9CO1lBQzdCLElBQUksQ0FBQyxNQUFNLEdBQUc7Z0JBQ1osTUFBTSxFQUFFLFVBQVU7Z0JBQ2xCLFFBQVEsRUFBRSxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDO2FBQ3BHLENBQUM7UUFDSixDQUFDOzs7T0FBQTs7OztJQVFELHFDQUFROzs7SUFBUjtRQUNFLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDeEcsZUFBZSxDQUFDLG1HQUFtRyxDQUFDLENBQUM7U0FDdEg7SUFDSCxDQUFDOzs7OztJQUVELHdDQUFXOzs7O0lBQVgsVUFBWSxDQUFpQjtRQUMzQixRQUFRLENBQUMsQ0FBQyxNQUFNLEVBQUU7WUFDaEIsS0FBSyxPQUFPO2dCQUNWLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ2xCLE1BQU07WUFDUixLQUFLLFFBQVE7Z0JBQ1gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN6QixNQUFNO1lBQ1IsS0FBSyxNQUFNO2dCQUNULElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ2hCLE1BQU07U0FDVDtRQUNELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7O2dCQW5ERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFFBQVEsRUFBRSxXQUFXO29CQUNyQixRQUFRLEVBQUUsNEdBRVQ7b0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUN0Qzs7OzJCQUVFLFNBQVMsU0FBQyxJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO3lCQUVqQyxLQUFLO3lCQUtMLEtBQUs7d0JBUUwsTUFBTTt5QkFDTixNQUFNO3NCQUNOLE1BQU07d0JBRU4sTUFBTTs7SUFzQlQseUJBQUM7Q0FBQSxBQXBERCxJQW9EQztTQTFDWSxrQkFBa0I7OztJQUM3QixzQ0FBMEU7O0lBRTFFLG9DQUFpQzs7SUFhakMsbUNBQW9EOztJQUNwRCxvQ0FBdUQ7O0lBQ3ZELGlDQUFrRDs7SUFFbEQsbUNBQThEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBhZGRTZWNvbmRzIGZyb20gJ2RhdGUtZm5zL2FkZF9zZWNvbmRzJztcbmltcG9ydCBmb3JtYXQgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0JztcbmltcG9ydCB7IENvdW50ZG93bkV2ZW50LCBDb3VudGRvd25Db25maWcgfSBmcm9tICduZ3gtY291bnRkb3duJztcbmltcG9ydCB7IHdhcm5EZXByZWNhdGlvbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NvdW50LWRvd24nLFxuICBleHBvcnRBczogJ2NvdW50RG93bicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGNvdW50ZG93biAjY2QgKm5nSWY9XCJjb25maWdcIiBbY29uZmlnXT1cImNvbmZpZ1wiIChldmVudCk9XCJoYW5kbGVFdmVudCgkZXZlbnQpXCI+PC9jb3VudGRvd24+XG4gIGAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgQ291bnREb3duQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQFZpZXdDaGlsZCgnY2QnLCB7IHN0YXRpYzogZmFsc2UgfSkgcmVhZG9ubHkgaW5zdGFuY2U6IENvdW50RG93bkNvbXBvbmVudDtcblxuICBASW5wdXQoKSBjb25maWc6IENvdW50ZG93bkNvbmZpZztcblxuICAvKipcbiAgICog55uu5qCH5pe26Ze0XG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgdGFyZ2V0KHZhbHVlOiBudW1iZXIgfCBEYXRlKSB7XG4gICAgdGhpcy5jb25maWcgPSB7XG4gICAgICBmb3JtYXQ6IGBISDptbTpzc2AsXG4gICAgICBzdG9wVGltZTogdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyA/IGFkZFNlY29uZHMobmV3IERhdGUoKSwgdmFsdWUpLnZhbHVlT2YoKSA6ICtmb3JtYXQodmFsdWUsICd4JyksXG4gICAgfTtcbiAgfVxuXG4gIEBPdXRwdXQoKSByZWFkb25seSBiZWdpbiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG5vdGlmeSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgZW5kID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIEBPdXRwdXQoKSByZWFkb25seSBldmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8Q291bnRkb3duRXZlbnQ+KCk7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYmVnaW4ub2JzZXJ2ZXJzLmxlbmd0aCA+IDAgfHwgdGhpcy5ub3RpZnkub2JzZXJ2ZXJzLmxlbmd0aCA+IDAgfHwgdGhpcy5lbmQub2JzZXJ2ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIHdhcm5EZXByZWNhdGlvbihgYmVnaW4sIG5vdGlmeSwgZW5kIGV2ZW50cyBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gOS4wLjAuIFBsZWFzZSB1c2UgJ2V2ZW50JyBpbnN0ZWFkLmApO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUV2ZW50KGU6IENvdW50ZG93bkV2ZW50KSB7XG4gICAgc3dpdGNoIChlLmFjdGlvbikge1xuICAgICAgY2FzZSAnc3RhcnQnOlxuICAgICAgICB0aGlzLmJlZ2luLmVtaXQoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdub3RpZnknOlxuICAgICAgICB0aGlzLm5vdGlmeS5lbWl0KGUubGVmdCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZG9uZSc6XG4gICAgICAgIHRoaXMuZW5kLmVtaXQoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHRoaXMuZXZlbnQuZW1pdChlKTtcbiAgfVxufVxuIl19