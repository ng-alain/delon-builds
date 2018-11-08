/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ViewContainerRef, } from '@angular/core';
import { FormProperty } from './model/form.property';
import { WidgetFactory } from './widget.factory';
import { TerminatorService } from './terminator.service';
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
        this.widget.firstVisual = ui.firstVisual;
        this.formProperty.widget = widget;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.terminator.onDestroy.subscribe(() => {
            this.ngOnDestroy();
        });
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
        this.formProperty.ui.__destroy = true;
        this.ref.destroy();
    }
}
SFItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'sf-item',
                template: `<ng-template #target></ng-template>`
            }] }
];
/** @nocollapse */
SFItemComponent.ctorParameters = () => [
    { type: WidgetFactory },
    { type: TerminatorService }
];
SFItemComponent.propDecorators = {
    formProperty: [{ type: Input }],
    container: [{ type: ViewChild, args: ['target', { read: ViewContainerRef },] }]
};
if (false) {
    /** @type {?} */
    SFItemComponent.prototype.ref;
    /** @type {?} */
    SFItemComponent.prototype.widget;
    /** @type {?} */
    SFItemComponent.prototype.formProperty;
    /** @type {?} */
    SFItemComponent.prototype.container;
    /** @type {?} */
    SFItemComponent.prototype.widgetFactory;
    /** @type {?} */
    SFItemComponent.prototype.terminator;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2YtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vZm9ybS8iLCJzb3VyY2VzIjpbInNyYy9zZi1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFHVCxLQUFLLEVBQ0wsU0FBUyxFQUNULGdCQUFnQixHQUdqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFckQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztJQUdyRCxZQUFZLEdBQUcsQ0FBQztBQU1wQixNQUFNLE9BQU8sZUFBZTs7Ozs7SUFTMUIsWUFDVSxhQUE0QixFQUM1QixVQUE2QjtRQUQ3QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixlQUFVLEdBQVYsVUFBVSxDQUFtQjtRQVR2QyxXQUFNLEdBQWdCLElBQUksQ0FBQztJQVV4QixDQUFDOzs7OztJQUVKLG9CQUFvQixDQUFDLE1BQW1CO1FBQ3RDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDOztjQUNmLEVBQUUsR0FBRyxPQUFPLFlBQVksRUFBRSxFQUFFOztjQUU1QixFQUFFLEdBQUcsbUJBQUEsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLEVBQWtCO1FBQ2pELElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDN0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7UUFDOUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUNwQyxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDdkMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUN4QyxJQUFJLENBQUMsU0FBUyxFQUNkLG1CQUFBLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFVLENBQ3pFLENBQUM7UUFDRixJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7WUFoREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2dCQUNuQixRQUFRLEVBQUUscUNBQXFDO2FBQ2hEOzs7O1lBVFEsYUFBYTtZQUNiLGlCQUFpQjs7OzJCQWF2QixLQUFLO3dCQUVMLFNBQVMsU0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7Ozs7SUFML0MsOEJBQStCOztJQUMvQixpQ0FBMkI7O0lBRTNCLHVDQUFvQzs7SUFFcEMsb0NBQzRCOztJQUcxQix3Q0FBb0M7O0lBQ3BDLHFDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBPbkNoYW5nZXMsXG4gIElucHV0LFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIENvbXBvbmVudFJlZixcbiAgT25EZXN0cm95LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Qcm9wZXJ0eSB9IGZyb20gJy4vbW9kZWwvZm9ybS5wcm9wZXJ0eSc7XG5pbXBvcnQgeyBXaWRnZXQgfSBmcm9tICcuL3dpZGdldCc7XG5pbXBvcnQgeyBXaWRnZXRGYWN0b3J5IH0gZnJvbSAnLi93aWRnZXQuZmFjdG9yeSc7XG5pbXBvcnQgeyBUZXJtaW5hdG9yU2VydmljZSB9IGZyb20gJy4vdGVybWluYXRvci5zZXJ2aWNlJztcbmltcG9ydCB7IFNGVUlTY2hlbWFJdGVtIH0gZnJvbSAnLi9zY2hlbWEvdWknO1xuXG5sZXQgbmV4dFVuaXF1ZUlkID0gMDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtaXRlbScsXG4gIHRlbXBsYXRlOiBgPG5nLXRlbXBsYXRlICN0YXJnZXQ+PC9uZy10ZW1wbGF0ZT5gLFxufSlcbmV4cG9ydCBjbGFzcyBTRkl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSByZWY6IENvbXBvbmVudFJlZjxhbnk+O1xuICB3aWRnZXQ6IFdpZGdldDxhbnk+ID0gbnVsbDtcblxuICBASW5wdXQoKSBmb3JtUHJvcGVydHk6IEZvcm1Qcm9wZXJ0eTtcblxuICBAVmlld0NoaWxkKCd0YXJnZXQnLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSlcbiAgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgd2lkZ2V0RmFjdG9yeTogV2lkZ2V0RmFjdG9yeSxcbiAgICBwcml2YXRlIHRlcm1pbmF0b3I6IFRlcm1pbmF0b3JTZXJ2aWNlLFxuICApIHt9XG5cbiAgb25XaWRnZXRJbnN0YW5jaWF0ZWQod2lkZ2V0OiBXaWRnZXQ8YW55Pikge1xuICAgIHRoaXMud2lkZ2V0ID0gd2lkZ2V0O1xuICAgIGNvbnN0IGlkID0gYF9zZi0ke25leHRVbmlxdWVJZCsrfWA7XG5cbiAgICBjb25zdCB1aSA9IHRoaXMuZm9ybVByb3BlcnR5LnVpIGFzIFNGVUlTY2hlbWFJdGVtO1xuICAgIHRoaXMud2lkZ2V0LmZvcm1Qcm9wZXJ0eSA9IHRoaXMuZm9ybVByb3BlcnR5O1xuICAgIHRoaXMud2lkZ2V0LnNjaGVtYSA9IHRoaXMuZm9ybVByb3BlcnR5LnNjaGVtYTtcbiAgICB0aGlzLndpZGdldC51aSA9IHVpO1xuICAgIHRoaXMud2lkZ2V0LmlkID0gaWQ7XG4gICAgdGhpcy53aWRnZXQuZmlyc3RWaXN1YWwgPSB1aS5maXJzdFZpc3VhbDtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS53aWRnZXQgPSB3aWRnZXQ7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnRlcm1pbmF0b3Iub25EZXN0cm95LnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLm5nT25EZXN0cm95KCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLnJlZiA9IHRoaXMud2lkZ2V0RmFjdG9yeS5jcmVhdGVXaWRnZXQoXG4gICAgICB0aGlzLmNvbnRhaW5lcixcbiAgICAgICh0aGlzLmZvcm1Qcm9wZXJ0eS51aS53aWRnZXQgfHwgdGhpcy5mb3JtUHJvcGVydHkuc2NoZW1hLnR5cGUpIGFzIHN0cmluZyxcbiAgICApO1xuICAgIHRoaXMub25XaWRnZXRJbnN0YW5jaWF0ZWQodGhpcy5yZWYuaW5zdGFuY2UpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5mb3JtUHJvcGVydHkudWkuX19kZXN0cm95ID0gdHJ1ZTtcbiAgICB0aGlzLnJlZi5kZXN0cm95KCk7XG4gIH1cbn1cbiJdfQ==