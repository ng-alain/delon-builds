import { Component, Input, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { NzFormStatusService } from 'ng-zorro-antd/core/form';
import * as i0 from "@angular/core";
import * as i1 from "./widget.factory";
import * as i2 from "./terminator.service";
import * as i3 from "@angular/common";
let nextUniqueId = 0;
export class SFItemComponent {
    constructor(widgetFactory, terminator) {
        this.widgetFactory = widgetFactory;
        this.terminator = terminator;
        this.destroy$ = new Subject();
        this.widget = null;
        this.footer = null;
    }
    onWidgetInstanciated(widget) {
        this.widget = widget;
        const id = `_sf-${nextUniqueId++}`;
        const ui = this.formProperty.ui;
        this.widget.formProperty = this.formProperty;
        this.widget.schema = this.formProperty.schema;
        this.widget.ui = ui;
        this.widget.id = id;
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
        const { destroy$ } = this;
        destroy$.next();
        destroy$.complete();
        this.ref.destroy();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SFItemComponent, deps: [{ token: i1.WidgetFactory }, { token: i2.TerminatorService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: SFItemComponent, selector: "sf-item", inputs: { formProperty: "formProperty", footer: "footer" }, host: { properties: { "class.sf__item": "true" } }, providers: [NzFormStatusService], viewQueries: [{ propertyName: "container", first: true, predicate: ["target"], descendants: true, read: ViewContainerRef, static: true }], exportAs: ["sfItem"], usesOnChanges: true, ngImport: i0, template: `
    <ng-template #target />
    <ng-container *ngTemplateOutlet="footer" />
  `, isInline: true, dependencies: [{ kind: "directive", type: i3.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SFItemComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'sf-item',
                    exportAs: 'sfItem',
                    host: { '[class.sf__item]': 'true' },
                    template: `
    <ng-template #target />
    <ng-container *ngTemplateOutlet="footer" />
  `,
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    providers: [NzFormStatusService]
                }]
        }], ctorParameters: () => [{ type: i1.WidgetFactory }, { type: i2.TerminatorService }], propDecorators: { formProperty: [{
                type: Input
            }], footer: [{
                type: Input
            }], container: [{
                type: ViewChild,
                args: ['target', { read: ViewContainerRef, static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2YtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3NyYy9zZi1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssRUFLTCxTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7OztBQVE5RCxJQUFJLFlBQVksR0FBRyxDQUFDLENBQUM7QUFjckIsTUFBTSxPQUFPLGVBQWU7SUFXMUIsWUFDVSxhQUE0QixFQUM1QixVQUE2QjtRQUQ3QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixlQUFVLEdBQVYsVUFBVSxDQUFtQjtRQVg5QixhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUN4QyxXQUFNLEdBQWdELElBQUksQ0FBQztRQUdsRCxXQUFNLEdBQTZCLElBQUksQ0FBQztJQVE5QyxDQUFDO0lBRUosb0JBQW9CLENBQUMsTUFBNEM7UUFDL0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsTUFBTSxFQUFFLEdBQUcsT0FBTyxZQUFZLEVBQUUsRUFBRSxDQUFDO1FBRW5DLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBb0IsQ0FBQztRQUNsRCxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzdDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDO1FBQzlDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3BDLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCxXQUFXO1FBQ1QsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUM1QixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBVyxDQUFDLENBQUM7UUFDckcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELFdBQVc7UUFDVCxNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQzFCLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNoQixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNyQixDQUFDOzhHQTNDVSxlQUFlO2tHQUFmLGVBQWUsa0pBRmYsQ0FBQyxtQkFBbUIsQ0FBQywwR0FVSCxnQkFBZ0Isc0ZBaEJuQzs7O0dBR1Q7OzJGQUtVLGVBQWU7a0JBWjNCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLFFBQVEsRUFBRSxRQUFRO29CQUNsQixJQUFJLEVBQUUsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLEVBQUU7b0JBQ3BDLFFBQVEsRUFBRTs7O0dBR1Q7b0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO2lCQUNqQztrSEFNVSxZQUFZO3NCQUFwQixLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSztnQkFHRSxTQUFTO3NCQURoQixTQUFTO3VCQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBDb21wb25lbnRSZWYsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTnpGb3JtU3RhdHVzU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9mb3JtJztcblxuaW1wb3J0IHsgRm9ybVByb3BlcnR5IH0gZnJvbSAnLi9tb2RlbC9mb3JtLnByb3BlcnR5JztcbmltcG9ydCB7IFNGVUlTY2hlbWFJdGVtIH0gZnJvbSAnLi9zY2hlbWEvdWknO1xuaW1wb3J0IHsgVGVybWluYXRvclNlcnZpY2UgfSBmcm9tICcuL3Rlcm1pbmF0b3Iuc2VydmljZSc7XG5pbXBvcnQgdHlwZSB7IFdpZGdldCB9IGZyb20gJy4vd2lkZ2V0JztcbmltcG9ydCB7IFdpZGdldEZhY3RvcnkgfSBmcm9tICcuL3dpZGdldC5mYWN0b3J5JztcblxubGV0IG5leHRVbmlxdWVJZCA9IDA7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLWl0ZW0nLFxuICBleHBvcnRBczogJ3NmSXRlbScsXG4gIGhvc3Q6IHsgJ1tjbGFzcy5zZl9faXRlbV0nOiAndHJ1ZScgfSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctdGVtcGxhdGUgI3RhcmdldCAvPlxuICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJmb290ZXJcIiAvPlxuICBgLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgcHJvdmlkZXJzOiBbTnpGb3JtU3RhdHVzU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgU0ZJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgcmVmITogQ29tcG9uZW50UmVmPFdpZGdldDxGb3JtUHJvcGVydHksIFNGVUlTY2hlbWFJdGVtPj47XG4gIHJlYWRvbmx5IGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgd2lkZ2V0OiBXaWRnZXQ8Rm9ybVByb3BlcnR5LCBTRlVJU2NoZW1hSXRlbT4gfCBudWxsID0gbnVsbDtcblxuICBASW5wdXQoKSBmb3JtUHJvcGVydHkhOiBGb3JtUHJvcGVydHk7XG4gIEBJbnB1dCgpIGZvb3RlcjogVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsID0gbnVsbDtcblxuICBAVmlld0NoaWxkKCd0YXJnZXQnLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuICBwcml2YXRlIGNvbnRhaW5lciE6IFZpZXdDb250YWluZXJSZWY7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB3aWRnZXRGYWN0b3J5OiBXaWRnZXRGYWN0b3J5LFxuICAgIHByaXZhdGUgdGVybWluYXRvcjogVGVybWluYXRvclNlcnZpY2VcbiAgKSB7fVxuXG4gIG9uV2lkZ2V0SW5zdGFuY2lhdGVkKHdpZGdldDogV2lkZ2V0PEZvcm1Qcm9wZXJ0eSwgU0ZVSVNjaGVtYUl0ZW0+KTogdm9pZCB7XG4gICAgdGhpcy53aWRnZXQgPSB3aWRnZXQ7XG4gICAgY29uc3QgaWQgPSBgX3NmLSR7bmV4dFVuaXF1ZUlkKyt9YDtcblxuICAgIGNvbnN0IHVpID0gdGhpcy5mb3JtUHJvcGVydHkudWkgYXMgU0ZVSVNjaGVtYUl0ZW07XG4gICAgdGhpcy53aWRnZXQuZm9ybVByb3BlcnR5ID0gdGhpcy5mb3JtUHJvcGVydHk7XG4gICAgdGhpcy53aWRnZXQuc2NoZW1hID0gdGhpcy5mb3JtUHJvcGVydHkuc2NoZW1hO1xuICAgIHRoaXMud2lkZ2V0LnVpID0gdWk7XG4gICAgdGhpcy53aWRnZXQuaWQgPSBpZDtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS53aWRnZXQgPSB3aWRnZXQ7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnRlcm1pbmF0b3Iub25EZXN0cm95LnN1YnNjcmliZSgoKSA9PiB0aGlzLm5nT25EZXN0cm95KCkpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgY29uc3QgcCA9IHRoaXMuZm9ybVByb3BlcnR5O1xuICAgIHRoaXMucmVmID0gdGhpcy53aWRnZXRGYWN0b3J5LmNyZWF0ZVdpZGdldCh0aGlzLmNvbnRhaW5lciwgKHAudWkud2lkZ2V0IHx8IHAuc2NoZW1hLnR5cGUpIGFzIHN0cmluZyk7XG4gICAgdGhpcy5vbldpZGdldEluc3RhbmNpYXRlZCh0aGlzLnJlZi5pbnN0YW5jZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBjb25zdCB7IGRlc3Ryb3kkIH0gPSB0aGlzO1xuICAgIGRlc3Ryb3kkLm5leHQoKTtcbiAgICBkZXN0cm95JC5jb21wbGV0ZSgpO1xuICAgIHRoaXMucmVmLmRlc3Ryb3koKTtcbiAgfVxufVxuIl19