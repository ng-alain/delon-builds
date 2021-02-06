import { Component, ViewEncapsulation } from '@angular/core';
import { ArrayProperty } from '../../model/array.property';
import { toBool } from '../../utils';
import { ObjectLayoutWidget } from '../../widget';
export class ObjectWidget extends ObjectLayoutWidget {
    constructor() {
        super(...arguments);
        this.type = 'default';
        this.list = [];
        this.showExpand = true;
        this.expand = true;
    }
    ngOnInit() {
        const { formProperty, ui } = this;
        const { grid, showTitle, type } = ui;
        this.showExpand = toBool(ui.showExpand, true);
        this.expand = toBool(ui.expand, true);
        this.type = type !== null && type !== void 0 ? type : 'default';
        if (this.type === 'card' || (!formProperty.isRoot() && !(formProperty.parent instanceof ArrayProperty) && showTitle === true)) {
            this.title = this.schema.title;
        }
        this.grid = grid;
        const list = [];
        for (const key of formProperty.propertiesId) {
            const property = formProperty.properties[key];
            const item = {
                property,
                grid: property.ui.grid || grid || {},
                spanLabelFixed: property.ui.spanLabelFixed,
                show: property.ui.hidden === false,
            };
            list.push(item);
        }
        this.list = list;
    }
    changeExpand() {
        if (!this.showExpand) {
            return;
        }
        this.expand = !this.expand;
        this.detectChanges(true);
    }
}
ObjectWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-object',
                template: "<ng-template #default let-noTitle>\n  <div *ngIf=\"!noTitle && title\" class=\"sf__title\">{{ title }}</div>\n  <ng-container *ngIf=\"grid; else noGrid\">\n    <div nz-row [nzGutter]=\"grid.gutter\">\n      <ng-container *ngFor=\"let i of list\">\n        <ng-container *ngIf=\"i.property.visible && i.show\">\n          <div\n            nz-col\n            [nzSpan]=\"i.grid.span\"\n            [nzOffset]=\"i.grid.offset\"\n            [nzXs]=\"i.grid.xs\"\n            [nzSm]=\"i.grid.sm\"\n            [nzMd]=\"i.grid.md\"\n            [nzLg]=\"i.grid.lg\"\n            [nzXl]=\"i.grid.xl\"\n            [nzXXl]=\"i.grid.xxl\"\n          >\n            <sf-item [formProperty]=\"i.property\" [fixed-label]=\"i.spanLabelFixed\"></sf-item>\n          </div>\n        </ng-container>\n      </ng-container>\n    </div>\n  </ng-container>\n  <ng-template #noGrid>\n    <ng-container *ngFor=\"let i of list\">\n      <ng-container *ngIf=\"i.property.visible && i.show\">\n        <sf-item [formProperty]=\"i.property\" [fixed-label]=\"i.spanLabelFixed\"></sf-item>\n      </ng-container>\n    </ng-container>\n  </ng-template>\n</ng-template>\n<nz-card\n  *ngIf=\"type === 'card'; else default\"\n  [nzTitle]=\"cardTitleTpl\"\n  [nzExtra]=\"ui.cardExtra\"\n  [nzSize]=\"ui.cardSize || 'small'\"\n  [nzActions]=\"ui.cardActions || []\"\n  [nzBodyStyle]=\"ui.cardBodyStyle\"\n  [nzBordered]=\"ui.cardBordered || true\"\n  [nzBorderless]=\"ui.cardBorderless || false\"\n  class=\"sf__object-card\"\n  [class.sf__object-card-fold]=\"!expand\"\n>\n  <ng-template #cardTitleTpl>\n    <div [class.point]=\"showExpand\" (click)=\"changeExpand()\">\n      <i *ngIf=\"showExpand\" nz-icon [nzType]=\"expand ? 'down' : 'up'\" class=\"mr-xs text-xs\"></i>\n      {{title}}\n    </div>\n  </ng-template>\n  <ng-template [ngTemplateOutlet]=\"default\" [ngTemplateOutletContext]=\"{ $implicit: true }\"></ng-template>\n</nz-card>\n",
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0LndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm0vc3JjL3dpZGdldHMvb2JqZWN0L29iamVjdC53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFHM0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNyQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFTbEQsTUFBTSxPQUFPLFlBQWEsU0FBUSxrQkFBa0I7SUFOcEQ7O1FBUUUsU0FBSSxHQUE2QixTQUFTLENBQUM7UUFDM0MsU0FBSSxHQUFjLEVBQUUsQ0FBQztRQUVyQixlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLFdBQU0sR0FBRyxJQUFJLENBQUM7SUFpQ2hCLENBQUM7SUEvQkMsUUFBUTtRQUNOLE1BQU0sRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLE1BQU0sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGFBQUosSUFBSSxjQUFKLElBQUksR0FBSSxTQUFTLENBQUM7UUFDOUIsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLE1BQU0sSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsTUFBTSxZQUFZLGFBQWEsQ0FBQyxJQUFJLFNBQVMsS0FBSyxJQUFJLENBQUMsRUFBRTtZQUM3SCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBZSxDQUFDO1NBQzFDO1FBQ0QsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFvQixDQUFDO1FBQ2pDLE1BQU0sSUFBSSxHQUFjLEVBQUUsQ0FBQztRQUMzQixLQUFLLE1BQU0sR0FBRyxJQUFJLFlBQVksQ0FBQyxZQUFZLEVBQUU7WUFDM0MsTUFBTSxRQUFRLEdBQUksWUFBWSxDQUFDLFVBQThDLENBQUMsR0FBRyxDQUFpQixDQUFDO1lBQ25HLE1BQU0sSUFBSSxHQUFHO2dCQUNYLFFBQVE7Z0JBQ1IsSUFBSSxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO2dCQUNwQyxjQUFjLEVBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBQyxjQUFjO2dCQUMxQyxJQUFJLEVBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEtBQUssS0FBSzthQUNuQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNqQjtRQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDcEIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDM0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7WUE1Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQix3NERBQW1DO2dCQUNuQyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXJyYXlQcm9wZXJ0eSB9IGZyb20gJy4uLy4uL21vZGVsL2FycmF5LnByb3BlcnR5JztcbmltcG9ydCB7IEZvcm1Qcm9wZXJ0eSB9IGZyb20gJy4uLy4uL21vZGVsL2Zvcm0ucHJvcGVydHknO1xuaW1wb3J0IHsgU0ZHcmlkU2NoZW1hIH0gZnJvbSAnLi4vLi4vc2NoZW1hL3VpJztcbmltcG9ydCB7IHRvQm9vbCB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IE9iamVjdExheW91dFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5pbXBvcnQgeyBTRk9iamVjdFdpZGdldFJlbmRlclR5cGUgfSBmcm9tICcuL3NjaGVtYSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLW9iamVjdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9vYmplY3Qud2lkZ2V0Lmh0bWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgT2JqZWN0V2lkZ2V0IGV4dGVuZHMgT2JqZWN0TGF5b3V0V2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZ3JpZDogU0ZHcmlkU2NoZW1hO1xuICB0eXBlOiBTRk9iamVjdFdpZGdldFJlbmRlclR5cGUgPSAnZGVmYXVsdCc7XG4gIGxpc3Q6IEFycmF5PHt9PiA9IFtdO1xuICB0aXRsZTogc3RyaW5nO1xuICBzaG93RXhwYW5kID0gdHJ1ZTtcbiAgZXhwYW5kID0gdHJ1ZTtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IGZvcm1Qcm9wZXJ0eSwgdWkgfSA9IHRoaXM7XG4gICAgY29uc3QgeyBncmlkLCBzaG93VGl0bGUsIHR5cGUgfSA9IHVpO1xuICAgIHRoaXMuc2hvd0V4cGFuZCA9IHRvQm9vbCh1aS5zaG93RXhwYW5kLCB0cnVlKTtcbiAgICB0aGlzLmV4cGFuZCA9IHRvQm9vbCh1aS5leHBhbmQsIHRydWUpO1xuICAgIHRoaXMudHlwZSA9IHR5cGUgPz8gJ2RlZmF1bHQnO1xuICAgIGlmICh0aGlzLnR5cGUgPT09ICdjYXJkJyB8fCAoIWZvcm1Qcm9wZXJ0eS5pc1Jvb3QoKSAmJiAhKGZvcm1Qcm9wZXJ0eS5wYXJlbnQgaW5zdGFuY2VvZiBBcnJheVByb3BlcnR5KSAmJiBzaG93VGl0bGUgPT09IHRydWUpKSB7XG4gICAgICB0aGlzLnRpdGxlID0gdGhpcy5zY2hlbWEudGl0bGUgYXMgc3RyaW5nO1xuICAgIH1cbiAgICB0aGlzLmdyaWQgPSBncmlkIGFzIFNGR3JpZFNjaGVtYTtcbiAgICBjb25zdCBsaXN0OiBBcnJheTx7fT4gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBmb3JtUHJvcGVydHkucHJvcGVydGllc0lkKSB7XG4gICAgICBjb25zdCBwcm9wZXJ0eSA9IChmb3JtUHJvcGVydHkucHJvcGVydGllcyBhcyB7IFtrZXk6IHN0cmluZ106IEZvcm1Qcm9wZXJ0eSB9KVtrZXldIGFzIEZvcm1Qcm9wZXJ0eTtcbiAgICAgIGNvbnN0IGl0ZW0gPSB7XG4gICAgICAgIHByb3BlcnR5LFxuICAgICAgICBncmlkOiBwcm9wZXJ0eS51aS5ncmlkIHx8IGdyaWQgfHwge30sXG4gICAgICAgIHNwYW5MYWJlbEZpeGVkOiBwcm9wZXJ0eS51aS5zcGFuTGFiZWxGaXhlZCxcbiAgICAgICAgc2hvdzogcHJvcGVydHkudWkuaGlkZGVuID09PSBmYWxzZSxcbiAgICAgIH07XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICAgIHRoaXMubGlzdCA9IGxpc3Q7XG4gIH1cblxuICBjaGFuZ2VFeHBhbmQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnNob3dFeHBhbmQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5leHBhbmQgPSAhdGhpcy5leHBhbmQ7XG4gICAgdGhpcy5kZXRlY3RDaGFuZ2VzKHRydWUpO1xuICB9XG59XG4iXX0=