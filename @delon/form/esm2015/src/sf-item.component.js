/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        const ui = /** @type {?} */ (this.formProperty.ui);
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
        this.ref = this.widgetFactory.createWidget(this.container, /** @type {?} */ ((this.formProperty.ui["widget"] || this.formProperty.schema.type)));
        this.onWidgetInstanciated(this.ref.instance);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.formProperty.ui["__destroy"] = true;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2YtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vZm9ybS8iLCJzb3VyY2VzIjpbInNyYy9zZi1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFHVCxLQUFLLEVBQ0wsU0FBUyxFQUNULGdCQUFnQixHQUdqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFckQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQUd6RCxJQUFJLFlBQVksR0FBRyxDQUFDLENBQUM7QUFNckIsTUFBTTs7Ozs7SUFhSixZQUNVLGVBQ0E7UUFEQSxrQkFBYSxHQUFiLGFBQWE7UUFDYixlQUFVLEdBQVYsVUFBVTtzQkFiRSxJQUFJO0tBY3RCOzs7OztJQUVKLG9CQUFvQixDQUFDLE1BQW1CO1FBQ3RDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDOztRQUNyQixNQUFNLEVBQUUsR0FBRyxPQUFPLFlBQVksRUFBRSxFQUFFLENBQUM7O1FBRW5DLE1BQU0sRUFBRSxxQkFBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQW9CLEVBQUM7UUFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUM3QyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQztRQUM5QyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUM7UUFDekMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0tBQ25DOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDdkMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3BCLENBQUMsQ0FBQztLQUNKOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQ3hDLElBQUksQ0FBQyxTQUFTLG9CQUNkLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLGNBQVcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFXLEVBQ3pFLENBQUM7UUFDRixJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUM5Qzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsZ0JBQWEsSUFBSSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUM7S0FDcEI7OztZQXBERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLFFBQVEsRUFBRSxxQ0FBcUM7YUFDaEQ7Ozs7WUFUUSxhQUFhO1lBQ2IsaUJBQWlCOzs7MkJBZXZCLEtBQUs7d0JBRUwsU0FBUyxTQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIE9uSW5pdCxcclxuICBPbkNoYW5nZXMsXHJcbiAgSW5wdXQsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdDb250YWluZXJSZWYsXHJcbiAgQ29tcG9uZW50UmVmLFxyXG4gIE9uRGVzdHJveSxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybVByb3BlcnR5IH0gZnJvbSAnLi9tb2RlbC9mb3JtLnByb3BlcnR5JztcclxuaW1wb3J0IHsgV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXQnO1xyXG5pbXBvcnQgeyBXaWRnZXRGYWN0b3J5IH0gZnJvbSAnLi93aWRnZXQuZmFjdG9yeSc7XHJcbmltcG9ydCB7IFRlcm1pbmF0b3JTZXJ2aWNlIH0gZnJvbSAnLi90ZXJtaW5hdG9yLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTRlVJU2NoZW1hSXRlbSB9IGZyb20gJy4vc2NoZW1hL3VpJztcclxuXHJcbmxldCBuZXh0VW5pcXVlSWQgPSAwO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzZi1pdGVtJyxcclxuICB0ZW1wbGF0ZTogYDxuZy10ZW1wbGF0ZSAjdGFyZ2V0PjwvbmctdGVtcGxhdGU+YCxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNGSXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgcmVmOiBDb21wb25lbnRSZWY8YW55PjtcclxuICB3aWRnZXQ6IFdpZGdldDxhbnk+ID0gbnVsbDtcclxuXHJcbiAgLy8gcmVnaW9uOiBmaWVsZHNcclxuXHJcbiAgQElucHV0KCkgZm9ybVByb3BlcnR5OiBGb3JtUHJvcGVydHk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3RhcmdldCcsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KVxyXG4gIGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcclxuXHJcbiAgLy8gZW5kcmVnaW9uXHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSB3aWRnZXRGYWN0b3J5OiBXaWRnZXRGYWN0b3J5LFxyXG4gICAgcHJpdmF0ZSB0ZXJtaW5hdG9yOiBUZXJtaW5hdG9yU2VydmljZSxcclxuICApIHt9XHJcblxyXG4gIG9uV2lkZ2V0SW5zdGFuY2lhdGVkKHdpZGdldDogV2lkZ2V0PGFueT4pIHtcclxuICAgIHRoaXMud2lkZ2V0ID0gd2lkZ2V0O1xyXG4gICAgY29uc3QgaWQgPSBgX3NmLSR7bmV4dFVuaXF1ZUlkKyt9YDtcclxuXHJcbiAgICBjb25zdCB1aSA9IHRoaXMuZm9ybVByb3BlcnR5LnVpIGFzIFNGVUlTY2hlbWFJdGVtO1xyXG4gICAgdGhpcy53aWRnZXQuZm9ybVByb3BlcnR5ID0gdGhpcy5mb3JtUHJvcGVydHk7XHJcbiAgICB0aGlzLndpZGdldC5zY2hlbWEgPSB0aGlzLmZvcm1Qcm9wZXJ0eS5zY2hlbWE7XHJcbiAgICB0aGlzLndpZGdldC51aSA9IHVpO1xyXG4gICAgdGhpcy53aWRnZXQuaWQgPSBpZDtcclxuICAgIHRoaXMud2lkZ2V0LmZpcnN0VmlzdWFsID0gdWkuZmlyc3RWaXN1YWw7XHJcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS53aWRnZXQgPSB3aWRnZXQ7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMudGVybWluYXRvci5vbkRlc3Ryb3kuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5uZ09uRGVzdHJveSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcclxuICAgIHRoaXMucmVmID0gdGhpcy53aWRnZXRGYWN0b3J5LmNyZWF0ZVdpZGdldChcclxuICAgICAgdGhpcy5jb250YWluZXIsXHJcbiAgICAgICh0aGlzLmZvcm1Qcm9wZXJ0eS51aS53aWRnZXQgfHwgdGhpcy5mb3JtUHJvcGVydHkuc2NoZW1hLnR5cGUpIGFzIHN0cmluZyxcclxuICAgICk7XHJcbiAgICB0aGlzLm9uV2lkZ2V0SW5zdGFuY2lhdGVkKHRoaXMucmVmLmluc3RhbmNlKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5mb3JtUHJvcGVydHkudWkuX19kZXN0cm95ID0gdHJ1ZTtcclxuICAgIHRoaXMucmVmLmRlc3Ryb3koKTtcclxuICB9XHJcbn1cclxuIl19