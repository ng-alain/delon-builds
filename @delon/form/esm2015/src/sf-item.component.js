/**
 * @fileoverview added by tsickle
 * Generated from: src/sf-item.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ViewContainerRef, ViewEncapsulation, } from '@angular/core';
import { Subject } from 'rxjs';
import { FormProperty } from './model/form.property';
import { TerminatorService } from './terminator.service';
import { WidgetFactory } from './widget.factory';
/** @type {?} */
let nextUniqueId = 0;
export class SFItemComponent {
    /**
     * @param {?} widgetFactory
     * @param {?} terminator
     */
    constructor(widgetFactory, terminator) {
        this.widgetFactory = widgetFactory;
        this.terminator = terminator;
        this.unsubscribe$ = new Subject();
        this.widget = null;
    }
    /**
     * @param {?} widget
     * @return {?}
     */
    onWidgetInstanciated(widget) {
        this.widget = widget;
        /** @type {?} */
        const id = `_sf-${nextUniqueId++}`;
        /** @type {?} */
        const ui = (/** @type {?} */ (this.formProperty.ui));
        this.widget.formProperty = this.formProperty;
        this.widget.schema = this.formProperty.schema;
        this.widget.ui = ui;
        this.widget.id = id;
        this.widget.firstVisual = (/** @type {?} */ (ui.firstVisual));
        this.formProperty.widget = widget;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.terminator.onDestroy.subscribe((/**
         * @return {?}
         */
        () => this.ngOnDestroy()));
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.ref = this.widgetFactory.createWidget(this.container, (/** @type {?} */ ((this.formProperty.ui.widget || this.formProperty.schema.type))));
        this.onWidgetInstanciated(this.ref.instance);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        const { unsubscribe$ } = this;
        unsubscribe$.next();
        unsubscribe$.complete();
        this.ref.destroy();
    }
}
SFItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'sf-item',
                exportAs: 'sfItem',
                host: { '[class.sf__item]': 'true' },
                template: ` <ng-template #target></ng-template> `,
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
SFItemComponent.ctorParameters = () => [
    { type: WidgetFactory },
    { type: TerminatorService }
];
SFItemComponent.propDecorators = {
    formProperty: [{ type: Input }],
    container: [{ type: ViewChild, args: ['target', { read: ViewContainerRef, static: true },] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    SFItemComponent.prototype.ref;
    /** @type {?} */
    SFItemComponent.prototype.unsubscribe$;
    /** @type {?} */
    SFItemComponent.prototype.widget;
    /** @type {?} */
    SFItemComponent.prototype.formProperty;
    /** @type {?} */
    SFItemComponent.prototype.container;
    /**
     * @type {?}
     * @private
     */
    SFItemComponent.prototype.widgetFactory;
    /**
     * @type {?}
     * @private
     */
    SFItemComponent.prototype.terminator;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2YtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS8iLCJzb3VyY2VzIjpbInNyYy9zZi1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxFQUlMLFNBQVMsRUFDVCxnQkFBZ0IsRUFDaEIsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXJELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXpELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7SUFFN0MsWUFBWSxHQUFHLENBQUM7QUFVcEIsTUFBTSxPQUFPLGVBQWU7Ozs7O0lBVTFCLFlBQW9CLGFBQTRCLEVBQVUsVUFBNkI7UUFBbkUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFtQjtRQVI5RSxpQkFBWSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFDNUMsV0FBTSxHQUFnRCxJQUFJLENBQUM7SUFPK0IsQ0FBQzs7Ozs7SUFFM0Ysb0JBQW9CLENBQUMsTUFBNEM7UUFDL0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7O2NBQ2YsRUFBRSxHQUFHLE9BQU8sWUFBWSxFQUFFLEVBQUU7O2NBRTVCLEVBQUUsR0FBRyxtQkFBQSxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBa0I7UUFDakQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUM3QyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQztRQUM5QyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLG1CQUFBLEVBQUUsQ0FBQyxXQUFXLEVBQVcsQ0FBQztRQUNwRCxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDcEMsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxTQUFTOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUMsQ0FBQztJQUNoRSxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxtQkFBQSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBVSxDQUFDLENBQUM7UUFDckksSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7OztJQUVELFdBQVc7Y0FDSCxFQUFFLFlBQVksRUFBRSxHQUFHLElBQUk7UUFDN0IsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3BCLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3JCLENBQUM7OztZQS9DRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixJQUFJLEVBQUUsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLEVBQUU7Z0JBQ3BDLFFBQVEsRUFBRSx1Q0FBdUM7Z0JBQ2pELG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDOzs7O1lBWFEsYUFBYTtZQUZiLGlCQUFpQjs7OzJCQW1CdkIsS0FBSzt3QkFFTCxTQUFTLFNBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Ozs7Ozs7SUFON0QsOEJBQWdFOztJQUNoRSx1Q0FBNEM7O0lBQzVDLGlDQUEyRDs7SUFFM0QsdUNBQW9DOztJQUVwQyxvQ0FDNEI7Ozs7O0lBRWhCLHdDQUFvQzs7Ozs7SUFBRSxxQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIENvbXBvbmVudFJlZixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRm9ybVByb3BlcnR5IH0gZnJvbSAnLi9tb2RlbC9mb3JtLnByb3BlcnR5JztcbmltcG9ydCB7IFNGVUlTY2hlbWFJdGVtIH0gZnJvbSAnLi9zY2hlbWEvdWknO1xuaW1wb3J0IHsgVGVybWluYXRvclNlcnZpY2UgfSBmcm9tICcuL3Rlcm1pbmF0b3Iuc2VydmljZSc7XG5pbXBvcnQgeyBXaWRnZXQgfSBmcm9tICcuL3dpZGdldCc7XG5pbXBvcnQgeyBXaWRnZXRGYWN0b3J5IH0gZnJvbSAnLi93aWRnZXQuZmFjdG9yeSc7XG5cbmxldCBuZXh0VW5pcXVlSWQgPSAwO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1pdGVtJyxcbiAgZXhwb3J0QXM6ICdzZkl0ZW0nLFxuICBob3N0OiB7ICdbY2xhc3Muc2ZfX2l0ZW1dJzogJ3RydWUnIH0sXG4gIHRlbXBsYXRlOiBgIDxuZy10ZW1wbGF0ZSAjdGFyZ2V0PjwvbmctdGVtcGxhdGU+IGAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBTRkl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSByZWY6IENvbXBvbmVudFJlZjxXaWRnZXQ8Rm9ybVByb3BlcnR5LCBTRlVJU2NoZW1hSXRlbT4+O1xuICByZWFkb25seSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICB3aWRnZXQ6IFdpZGdldDxGb3JtUHJvcGVydHksIFNGVUlTY2hlbWFJdGVtPiB8IG51bGwgPSBudWxsO1xuXG4gIEBJbnB1dCgpIGZvcm1Qcm9wZXJ0eTogRm9ybVByb3BlcnR5O1xuXG4gIEBWaWV3Q2hpbGQoJ3RhcmdldCcsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiwgc3RhdGljOiB0cnVlIH0pXG4gIGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHdpZGdldEZhY3Rvcnk6IFdpZGdldEZhY3RvcnksIHByaXZhdGUgdGVybWluYXRvcjogVGVybWluYXRvclNlcnZpY2UpIHt9XG5cbiAgb25XaWRnZXRJbnN0YW5jaWF0ZWQod2lkZ2V0OiBXaWRnZXQ8Rm9ybVByb3BlcnR5LCBTRlVJU2NoZW1hSXRlbT4pOiB2b2lkIHtcbiAgICB0aGlzLndpZGdldCA9IHdpZGdldDtcbiAgICBjb25zdCBpZCA9IGBfc2YtJHtuZXh0VW5pcXVlSWQrK31gO1xuXG4gICAgY29uc3QgdWkgPSB0aGlzLmZvcm1Qcm9wZXJ0eS51aSBhcyBTRlVJU2NoZW1hSXRlbTtcbiAgICB0aGlzLndpZGdldC5mb3JtUHJvcGVydHkgPSB0aGlzLmZvcm1Qcm9wZXJ0eTtcbiAgICB0aGlzLndpZGdldC5zY2hlbWEgPSB0aGlzLmZvcm1Qcm9wZXJ0eS5zY2hlbWE7XG4gICAgdGhpcy53aWRnZXQudWkgPSB1aTtcbiAgICB0aGlzLndpZGdldC5pZCA9IGlkO1xuICAgIHRoaXMud2lkZ2V0LmZpcnN0VmlzdWFsID0gdWkuZmlyc3RWaXN1YWwgYXMgYm9vbGVhbjtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS53aWRnZXQgPSB3aWRnZXQ7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnRlcm1pbmF0b3Iub25EZXN0cm95LnN1YnNjcmliZSgoKSA9PiB0aGlzLm5nT25EZXN0cm95KCkpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5yZWYgPSB0aGlzLndpZGdldEZhY3RvcnkuY3JlYXRlV2lkZ2V0KHRoaXMuY29udGFpbmVyLCAodGhpcy5mb3JtUHJvcGVydHkudWkud2lkZ2V0IHx8IHRoaXMuZm9ybVByb3BlcnR5LnNjaGVtYS50eXBlKSBhcyBzdHJpbmcpO1xuICAgIHRoaXMub25XaWRnZXRJbnN0YW5jaWF0ZWQodGhpcy5yZWYuaW5zdGFuY2UpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgY29uc3QgeyB1bnN1YnNjcmliZSQgfSA9IHRoaXM7XG4gICAgdW5zdWJzY3JpYmUkLm5leHQoKTtcbiAgICB1bnN1YnNjcmliZSQuY29tcGxldGUoKTtcbiAgICB0aGlzLnJlZi5kZXN0cm95KCk7XG4gIH1cbn1cbiJdfQ==