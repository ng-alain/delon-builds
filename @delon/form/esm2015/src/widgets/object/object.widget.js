/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { ArrayProperty } from '../../model/array.property';
import { ObjectLayoutWidget } from '../../widget';
export class ObjectWidget extends ObjectLayoutWidget {
    constructor() {
        super(...arguments);
        this.list = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        const { formProperty, ui } = this;
        const { grid, showTitle } = ui;
        if (!formProperty.isRoot() && !(formProperty.parent instanceof ArrayProperty) && showTitle === true) {
            this.title = this.schema.title;
        }
        this.grid = grid;
        /** @type {?} */
        const list = [];
        for (const key of formProperty.propertiesId) {
            /** @type {?} */
            const property = (/** @type {?} */ (formProperty.properties[key]));
            /** @type {?} */
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
}
ObjectWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-object',
                template: "<div *ngIf=\"title\" class=\"sf__title\">{{ title }}</div>\n<ng-container *ngIf=\"grid; else noGrid\">\n  <div nz-row\n       [nzGutter]=\"grid.gutter\">\n    <ng-container *ngFor=\"let i of list\">\n      <ng-container *ngIf=\"i.property.visible && i.show\">\n        <div nz-col\n             [nzSpan]=\"i.grid.span\"\n             [nzOffset]=\"i.grid.offset\"\n             [nzXs]=\"i.grid.xs\"\n             [nzSm]=\"i.grid.sm\"\n             [nzMd]=\"i.grid.md\"\n             [nzLg]=\"i.grid.lg\"\n             [nzXl]=\"i.grid.xl\"\n             [nzXXl]=\"i.grid.xxl\">\n          <sf-item [formProperty]=\"i.property\"\n                   [fixed-label]=\"i.spanLabelFixed\"></sf-item>\n        </div>\n      </ng-container>\n    </ng-container>\n  </div>\n</ng-container>\n<ng-template #noGrid>\n  <ng-container *ngFor=\"let i of list\">\n    <ng-container *ngIf=\"i.property.visible && i.show\">\n      <sf-item [formProperty]=\"i.property\"\n               [fixed-label]=\"i.spanLabelFixed\"></sf-item>\n    </ng-container>\n  </ng-container>\n</ng-template>\n"
            }] }
];
if (false) {
    /** @type {?} */
    ObjectWidget.prototype.grid;
    /** @type {?} */
    ObjectWidget.prototype.list;
    /** @type {?} */
    ObjectWidget.prototype.title;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0LndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3dpZGdldHMvb2JqZWN0L29iamVjdC53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRzNELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQU1sRCxNQUFNLE9BQU8sWUFBYSxTQUFRLGtCQUFrQjtJQUpwRDs7UUFNRSxTQUFJLEdBQWMsRUFBRSxDQUFDO0lBdUJ2QixDQUFDOzs7O0lBcEJDLFFBQVE7Y0FDQSxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsR0FBRyxJQUFJO2NBQzNCLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUU7UUFDOUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sWUFBWSxhQUFhLENBQUMsSUFBSSxTQUFTLEtBQUssSUFBSSxFQUFFO1lBQ25HLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDaEM7UUFDRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQzs7Y0FDWCxJQUFJLEdBQWMsRUFBRTtRQUMxQixLQUFLLE1BQU0sR0FBRyxJQUFJLFlBQVksQ0FBQyxZQUFZLEVBQUU7O2tCQUNyQyxRQUFRLEdBQUcsbUJBQUEsWUFBWSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBZ0I7O2tCQUN2RCxJQUFJLEdBQUc7Z0JBQ1gsUUFBUTtnQkFDUixJQUFJLEVBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7Z0JBQ3BDLGNBQWMsRUFBRSxRQUFRLENBQUMsRUFBRSxDQUFDLGNBQWM7Z0JBQzFDLElBQUksRUFBRSxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sS0FBSyxLQUFLO2FBQ25DO1lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNqQjtRQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ25CLENBQUM7OztZQTVCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLHlqQ0FBbUM7YUFDcEM7Ozs7SUFFQyw0QkFBbUI7O0lBQ25CLDRCQUFxQjs7SUFDckIsNkJBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXJyYXlQcm9wZXJ0eSB9IGZyb20gJy4uLy4uL21vZGVsL2FycmF5LnByb3BlcnR5JztcbmltcG9ydCB7IEZvcm1Qcm9wZXJ0eSB9IGZyb20gJy4uLy4uL21vZGVsL2Zvcm0ucHJvcGVydHknO1xuaW1wb3J0IHsgU0ZHcmlkU2NoZW1hIH0gZnJvbSAnLi4vLi4vc2NoZW1hL3VpJztcbmltcG9ydCB7IE9iamVjdExheW91dFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLW9iamVjdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9vYmplY3Qud2lkZ2V0Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBPYmplY3RXaWRnZXQgZXh0ZW5kcyBPYmplY3RMYXlvdXRXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xuICBncmlkOiBTRkdyaWRTY2hlbWE7XG4gIGxpc3Q6IEFycmF5PHt9PiA9IFtdO1xuICB0aXRsZTogc3RyaW5nO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgZm9ybVByb3BlcnR5LCB1aSB9ID0gdGhpcztcbiAgICBjb25zdCB7IGdyaWQsIHNob3dUaXRsZSB9ID0gdWk7XG4gICAgaWYgKCFmb3JtUHJvcGVydHkuaXNSb290KCkgJiYgIShmb3JtUHJvcGVydHkucGFyZW50IGluc3RhbmNlb2YgQXJyYXlQcm9wZXJ0eSkgJiYgc2hvd1RpdGxlID09PSB0cnVlKSB7XG4gICAgICB0aGlzLnRpdGxlID0gdGhpcy5zY2hlbWEudGl0bGU7XG4gICAgfVxuICAgIHRoaXMuZ3JpZCA9IGdyaWQ7XG4gICAgY29uc3QgbGlzdDogQXJyYXk8e30+ID0gW107XG4gICAgZm9yIChjb25zdCBrZXkgb2YgZm9ybVByb3BlcnR5LnByb3BlcnRpZXNJZCkge1xuICAgICAgY29uc3QgcHJvcGVydHkgPSBmb3JtUHJvcGVydHkucHJvcGVydGllc1trZXldIGFzIEZvcm1Qcm9wZXJ0eTtcbiAgICAgIGNvbnN0IGl0ZW0gPSB7XG4gICAgICAgIHByb3BlcnR5LFxuICAgICAgICBncmlkOiBwcm9wZXJ0eS51aS5ncmlkIHx8IGdyaWQgfHwge30sXG4gICAgICAgIHNwYW5MYWJlbEZpeGVkOiBwcm9wZXJ0eS51aS5zcGFuTGFiZWxGaXhlZCxcbiAgICAgICAgc2hvdzogcHJvcGVydHkudWkuaGlkZGVuID09PSBmYWxzZSxcbiAgICAgIH07XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICAgIHRoaXMubGlzdCA9IGxpc3Q7XG4gIH1cbn1cbiJdfQ==