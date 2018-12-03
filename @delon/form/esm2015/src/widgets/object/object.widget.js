/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
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
        this.grid = this.ui.grid;
        /** @type {?} */
        const list = [];
        for (const key of this.formProperty.propertiesId) {
            /** @type {?} */
            const property = (/** @type {?} */ (this.formProperty.properties[key]));
            /** @type {?} */
            const item = {
                property,
                grid: property.ui.grid || this.grid || {},
                spanLabelFixed: property.ui.spanLabelFixed,
                show: property.ui.hidden === false
            };
            list.push(item);
        }
        this.list = list;
    }
}
ObjectWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-object',
                template: `
  <ng-container *ngIf="grid; else noGrid">
    <div nz-row [nzGutter]="grid.gutter">
      <ng-container *ngFor="let i of list">
        <ng-container *ngIf="i.property.visible && i.show">
          <div nz-col
            [nzSpan]="i.grid.span" [nzOffset]="i.grid.offset"
            [nzXs]="i.grid.xs" [nzSm]="i.grid.sm" [nzMd]="i.grid.md"
            [nzLg]="i.grid.lg" [nzXl]="i.grid.xl" [nzXXl]="i.grid.xxl">
            <sf-item [formProperty]="i.property" [fixed-label]="i.spanLabelFixed"></sf-item>
          </div>
        </ng-container>
      </ng-container>
    </div>
  </ng-container>
  <ng-template #noGrid>
    <ng-container *ngFor="let i of list">
      <ng-container *ngIf="i.property.visible && i.show">
        <sf-item [formProperty]="i.property" [fixed-label]="i.spanLabelFixed"></sf-item>
      </ng-container>
    </ng-container>
  </ng-template>`
            }] }
];
if (false) {
    /** @type {?} */
    ObjectWidget.prototype.grid;
    /** @type {?} */
    ObjectWidget.prototype.list;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0LndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3dpZGdldHMvb2JqZWN0L29iamVjdC53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBNkJsRCxNQUFNLE9BQU8sWUFBYSxTQUFRLGtCQUFrQjtJQXpCcEQ7O1FBMkJFLFNBQUksR0FBVSxFQUFFLENBQUM7SUFpQm5CLENBQUM7Ozs7SUFmQyxRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs7Y0FDbkIsSUFBSSxHQUFVLEVBQUU7UUFDdEIsS0FBSyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRTs7a0JBQzFDLFFBQVEsR0FBRyxtQkFBQSxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBZ0I7O2tCQUM1RCxJQUFJLEdBQUc7Z0JBQ1gsUUFBUTtnQkFDUixJQUFJLEVBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFO2dCQUN6QyxjQUFjLEVBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBQyxjQUFjO2dCQUMxQyxJQUFJLEVBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEtBQUssS0FBSzthQUNuQztZQUNELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDakI7UUFDRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNuQixDQUFDOzs7WUEzQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQkFxQks7YUFDaEI7Ozs7SUFFQyw0QkFBbUI7O0lBQ25CLDRCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYmplY3RMYXlvdXRXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuaW1wb3J0IHsgU0ZHcmlkU2NoZW1hIH0gZnJvbSAnLi4vLi4vc2NoZW1hL3VpJztcbmltcG9ydCB7IEZvcm1Qcm9wZXJ0eSB9IGZyb20gJy4uLy4uL21vZGVsL2Zvcm0ucHJvcGVydHknO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1vYmplY3QnLFxuICB0ZW1wbGF0ZTogYFxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiZ3JpZDsgZWxzZSBub0dyaWRcIj5cbiAgICA8ZGl2IG56LXJvdyBbbnpHdXR0ZXJdPVwiZ3JpZC5ndXR0ZXJcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGkgb2YgbGlzdFwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaS5wcm9wZXJ0eS52aXNpYmxlICYmIGkuc2hvd1wiPlxuICAgICAgICAgIDxkaXYgbnotY29sXG4gICAgICAgICAgICBbbnpTcGFuXT1cImkuZ3JpZC5zcGFuXCIgW256T2Zmc2V0XT1cImkuZ3JpZC5vZmZzZXRcIlxuICAgICAgICAgICAgW256WHNdPVwiaS5ncmlkLnhzXCIgW256U21dPVwiaS5ncmlkLnNtXCIgW256TWRdPVwiaS5ncmlkLm1kXCJcbiAgICAgICAgICAgIFtuekxnXT1cImkuZ3JpZC5sZ1wiIFtuelhsXT1cImkuZ3JpZC54bFwiIFtuelhYbF09XCJpLmdyaWQueHhsXCI+XG4gICAgICAgICAgICA8c2YtaXRlbSBbZm9ybVByb3BlcnR5XT1cImkucHJvcGVydHlcIiBbZml4ZWQtbGFiZWxdPVwiaS5zcGFuTGFiZWxGaXhlZFwiPjwvc2YtaXRlbT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgPC9uZy1jb250YWluZXI+XG4gIDxuZy10ZW1wbGF0ZSAjbm9HcmlkPlxuICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGkgb2YgbGlzdFwiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImkucHJvcGVydHkudmlzaWJsZSAmJiBpLnNob3dcIj5cbiAgICAgICAgPHNmLWl0ZW0gW2Zvcm1Qcm9wZXJ0eV09XCJpLnByb3BlcnR5XCIgW2ZpeGVkLWxhYmVsXT1cImkuc3BhbkxhYmVsRml4ZWRcIj48L3NmLWl0ZW0+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9uZy10ZW1wbGF0ZT5gLFxufSlcbmV4cG9ydCBjbGFzcyBPYmplY3RXaWRnZXQgZXh0ZW5kcyBPYmplY3RMYXlvdXRXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xuICBncmlkOiBTRkdyaWRTY2hlbWE7XG4gIGxpc3Q6IGFueVtdID0gW107XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5ncmlkID0gdGhpcy51aS5ncmlkO1xuICAgIGNvbnN0IGxpc3Q6IGFueVtdID0gW107XG4gICAgZm9yIChjb25zdCBrZXkgb2YgdGhpcy5mb3JtUHJvcGVydHkucHJvcGVydGllc0lkKSB7XG4gICAgICBjb25zdCBwcm9wZXJ0eSA9IHRoaXMuZm9ybVByb3BlcnR5LnByb3BlcnRpZXNba2V5XSBhcyBGb3JtUHJvcGVydHk7XG4gICAgICBjb25zdCBpdGVtID0ge1xuICAgICAgICBwcm9wZXJ0eSxcbiAgICAgICAgZ3JpZDogcHJvcGVydHkudWkuZ3JpZCB8fCB0aGlzLmdyaWQgfHwge30sXG4gICAgICAgIHNwYW5MYWJlbEZpeGVkOiBwcm9wZXJ0eS51aS5zcGFuTGFiZWxGaXhlZCxcbiAgICAgICAgc2hvdzogcHJvcGVydHkudWkuaGlkZGVuID09PSBmYWxzZVxuICAgICAgfTtcbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gICAgdGhpcy5saXN0ID0gbGlzdDtcbiAgfVxufVxuIl19