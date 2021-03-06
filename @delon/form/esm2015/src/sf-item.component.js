import { Component, Input, ViewChild, ViewContainerRef, ViewEncapsulation, } from '@angular/core';
import { Subject } from 'rxjs';
import { FormProperty } from './model/form.property';
import { TerminatorService } from './terminator.service';
import { WidgetFactory } from './widget.factory';
let nextUniqueId = 0;
export class SFItemComponent {
    constructor(widgetFactory, terminator) {
        this.widgetFactory = widgetFactory;
        this.terminator = terminator;
        this.unsubscribe$ = new Subject();
        this.widget = null;
    }
    onWidgetInstanciated(widget) {
        this.widget = widget;
        const id = `_sf-${nextUniqueId++}`;
        const ui = this.formProperty.ui;
        this.widget.formProperty = this.formProperty;
        this.widget.schema = this.formProperty.schema;
        this.widget.ui = ui;
        this.widget.id = id;
        this.widget.firstVisual = ui.firstVisual;
        this.formProperty.widget = widget;
    }
    ngOnInit() {
        this.terminator.onDestroy.subscribe(() => this.ngOnDestroy());
    }
    ngOnChanges() {
        const p = this.formProperty;
        this.ref = this.widgetFactory.createWidget(this.container, (p.ui.widget || p.schema.type));
        this.onWidgetInstanciated(this.ref.instance);
    }
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
            },] }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2YtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3NyYy9zZi1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssRUFJTCxTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2hCLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVyRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFakQsSUFBSSxZQUFZLEdBQUcsQ0FBQyxDQUFDO0FBVXJCLE1BQU0sT0FBTyxlQUFlO0lBVTFCLFlBQW9CLGFBQTRCLEVBQVUsVUFBNkI7UUFBbkUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFtQjtRQVI5RSxpQkFBWSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFDNUMsV0FBTSxHQUFnRCxJQUFJLENBQUM7SUFPK0IsQ0FBQztJQUUzRixvQkFBb0IsQ0FBQyxNQUE0QztRQUMvRCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixNQUFNLEVBQUUsR0FBRyxPQUFPLFlBQVksRUFBRSxFQUFFLENBQUM7UUFFbkMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFvQixDQUFDO1FBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDN0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7UUFDOUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsV0FBc0IsQ0FBQztRQUNwRCxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDcEMsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELFdBQVc7UUFDVCxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzVCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFXLENBQUMsQ0FBQztRQUNyRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsV0FBVztRQUNULE1BQU0sRUFBRSxZQUFZLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDOUIsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3BCLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3JCLENBQUM7OztZQWhERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixJQUFJLEVBQUUsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLEVBQUU7Z0JBQ3BDLFFBQVEsRUFBRSx1Q0FBdUM7Z0JBQ2pELG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDOzs7O1lBWFEsYUFBYTtZQUZiLGlCQUFpQjs7OzJCQW1CdkIsS0FBSzt3QkFFTCxTQUFTLFNBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIENvbXBvbmVudFJlZixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRm9ybVByb3BlcnR5IH0gZnJvbSAnLi9tb2RlbC9mb3JtLnByb3BlcnR5JztcbmltcG9ydCB7IFNGVUlTY2hlbWFJdGVtIH0gZnJvbSAnLi9zY2hlbWEvdWknO1xuaW1wb3J0IHsgVGVybWluYXRvclNlcnZpY2UgfSBmcm9tICcuL3Rlcm1pbmF0b3Iuc2VydmljZSc7XG5pbXBvcnQgeyBXaWRnZXQgfSBmcm9tICcuL3dpZGdldCc7XG5pbXBvcnQgeyBXaWRnZXRGYWN0b3J5IH0gZnJvbSAnLi93aWRnZXQuZmFjdG9yeSc7XG5cbmxldCBuZXh0VW5pcXVlSWQgPSAwO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1pdGVtJyxcbiAgZXhwb3J0QXM6ICdzZkl0ZW0nLFxuICBob3N0OiB7ICdbY2xhc3Muc2ZfX2l0ZW1dJzogJ3RydWUnIH0sXG4gIHRlbXBsYXRlOiBgIDxuZy10ZW1wbGF0ZSAjdGFyZ2V0PjwvbmctdGVtcGxhdGU+IGAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBTRkl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSByZWY6IENvbXBvbmVudFJlZjxXaWRnZXQ8Rm9ybVByb3BlcnR5LCBTRlVJU2NoZW1hSXRlbT4+O1xuICByZWFkb25seSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICB3aWRnZXQ6IFdpZGdldDxGb3JtUHJvcGVydHksIFNGVUlTY2hlbWFJdGVtPiB8IG51bGwgPSBudWxsO1xuXG4gIEBJbnB1dCgpIGZvcm1Qcm9wZXJ0eTogRm9ybVByb3BlcnR5O1xuXG4gIEBWaWV3Q2hpbGQoJ3RhcmdldCcsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiwgc3RhdGljOiB0cnVlIH0pXG4gIGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHdpZGdldEZhY3Rvcnk6IFdpZGdldEZhY3RvcnksIHByaXZhdGUgdGVybWluYXRvcjogVGVybWluYXRvclNlcnZpY2UpIHt9XG5cbiAgb25XaWRnZXRJbnN0YW5jaWF0ZWQod2lkZ2V0OiBXaWRnZXQ8Rm9ybVByb3BlcnR5LCBTRlVJU2NoZW1hSXRlbT4pOiB2b2lkIHtcbiAgICB0aGlzLndpZGdldCA9IHdpZGdldDtcbiAgICBjb25zdCBpZCA9IGBfc2YtJHtuZXh0VW5pcXVlSWQrK31gO1xuXG4gICAgY29uc3QgdWkgPSB0aGlzLmZvcm1Qcm9wZXJ0eS51aSBhcyBTRlVJU2NoZW1hSXRlbTtcbiAgICB0aGlzLndpZGdldC5mb3JtUHJvcGVydHkgPSB0aGlzLmZvcm1Qcm9wZXJ0eTtcbiAgICB0aGlzLndpZGdldC5zY2hlbWEgPSB0aGlzLmZvcm1Qcm9wZXJ0eS5zY2hlbWE7XG4gICAgdGhpcy53aWRnZXQudWkgPSB1aTtcbiAgICB0aGlzLndpZGdldC5pZCA9IGlkO1xuICAgIHRoaXMud2lkZ2V0LmZpcnN0VmlzdWFsID0gdWkuZmlyc3RWaXN1YWwgYXMgYm9vbGVhbjtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS53aWRnZXQgPSB3aWRnZXQ7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnRlcm1pbmF0b3Iub25EZXN0cm95LnN1YnNjcmliZSgoKSA9PiB0aGlzLm5nT25EZXN0cm95KCkpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgY29uc3QgcCA9IHRoaXMuZm9ybVByb3BlcnR5O1xuICAgIHRoaXMucmVmID0gdGhpcy53aWRnZXRGYWN0b3J5LmNyZWF0ZVdpZGdldCh0aGlzLmNvbnRhaW5lciwgKHAudWkud2lkZ2V0IHx8IHAuc2NoZW1hLnR5cGUpIGFzIHN0cmluZyk7XG4gICAgdGhpcy5vbldpZGdldEluc3RhbmNpYXRlZCh0aGlzLnJlZi5pbnN0YW5jZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBjb25zdCB7IHVuc3Vic2NyaWJlJCB9ID0gdGhpcztcbiAgICB1bnN1YnNjcmliZSQubmV4dCgpO1xuICAgIHVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuICAgIHRoaXMucmVmLmRlc3Ryb3koKTtcbiAgfVxufVxuIl19