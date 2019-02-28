/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ArrayProperty } from '../../model/array.property';
import { ObjectLayoutWidget } from '../../widget';
var ObjectWidget = /** @class */ (function (_super) {
    tslib_1.__extends(ObjectWidget, _super);
    function ObjectWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.list = [];
        return _this;
    }
    /**
     * @return {?}
     */
    ObjectWidget.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        var _b = this, formProperty = _b.formProperty, ui = _b.ui;
        var grid = ui.grid, showTitle = ui.showTitle;
        if (!formProperty.isRoot() && !(formProperty.parent instanceof ArrayProperty) && showTitle === true) {
            this.title = this.schema.title;
        }
        this.grid = grid;
        /** @type {?} */
        var list = [];
        try {
            for (var _c = tslib_1.__values(formProperty.propertiesId), _d = _c.next(); !_d.done; _d = _c.next()) {
                var key = _d.value;
                /** @type {?} */
                var property = (/** @type {?} */ (formProperty.properties[key]));
                /** @type {?} */
                var item = {
                    property: property,
                    grid: property.ui.grid || grid || {},
                    spanLabelFixed: property.ui.spanLabelFixed,
                    show: property.ui.hidden === false,
                };
                list.push(item);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.list = list;
    };
    ObjectWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-object',
                    template: "<div *ngIf=\"title\" class=\"sf__title\">{{ title }}</div>\n<ng-container *ngIf=\"grid; else noGrid\">\n  <div nz-row\n       [nzGutter]=\"grid.gutter\">\n    <ng-container *ngFor=\"let i of list\">\n      <ng-container *ngIf=\"i.property.visible && i.show\">\n        <div nz-col\n             [nzSpan]=\"i.grid.span\"\n             [nzOffset]=\"i.grid.offset\"\n             [nzXs]=\"i.grid.xs\"\n             [nzSm]=\"i.grid.sm\"\n             [nzMd]=\"i.grid.md\"\n             [nzLg]=\"i.grid.lg\"\n             [nzXl]=\"i.grid.xl\"\n             [nzXXl]=\"i.grid.xxl\">\n          <sf-item [formProperty]=\"i.property\"\n                   [fixed-label]=\"i.spanLabelFixed\"></sf-item>\n        </div>\n      </ng-container>\n    </ng-container>\n  </div>\n</ng-container>\n<ng-template #noGrid>\n  <ng-container *ngFor=\"let i of list\">\n    <ng-container *ngIf=\"i.property.visible && i.show\">\n      <sf-item [formProperty]=\"i.property\"\n               [fixed-label]=\"i.spanLabelFixed\"></sf-item>\n    </ng-container>\n  </ng-container>\n</ng-template>\n"
                }] }
    ];
    return ObjectWidget;
}(ObjectLayoutWidget));
export { ObjectWidget };
if (false) {
    /** @type {?} */
    ObjectWidget.prototype.grid;
    /** @type {?} */
    ObjectWidget.prototype.list;
    /** @type {?} */
    ObjectWidget.prototype.title;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0LndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3dpZGdldHMvb2JqZWN0L29iamVjdC53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUczRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFbEQ7SUFJa0Msd0NBQWtCO0lBSnBEO1FBQUEscUVBNkJDO1FBdkJDLFVBQUksR0FBYyxFQUFFLENBQUM7O0lBdUJ2QixDQUFDOzs7O0lBcEJDLCtCQUFROzs7SUFBUjs7UUFDUSxJQUFBLFNBQTJCLEVBQXpCLDhCQUFZLEVBQUUsVUFBVztRQUN6QixJQUFBLGNBQUksRUFBRSx3QkFBUztRQUN2QixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsTUFBTSxZQUFZLGFBQWEsQ0FBQyxJQUFJLFNBQVMsS0FBSyxJQUFJLEVBQUU7WUFDbkcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztTQUNoQztRQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDOztZQUNYLElBQUksR0FBYyxFQUFFOztZQUMxQixLQUFrQixJQUFBLEtBQUEsaUJBQUEsWUFBWSxDQUFDLFlBQVksQ0FBQSxnQkFBQSw0QkFBRTtnQkFBeEMsSUFBTSxHQUFHLFdBQUE7O29CQUNOLFFBQVEsR0FBRyxtQkFBQSxZQUFZLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFnQjs7b0JBQ3ZELElBQUksR0FBRztvQkFDWCxRQUFRLFVBQUE7b0JBQ1IsSUFBSSxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO29CQUNwQyxjQUFjLEVBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBQyxjQUFjO29CQUMxQyxJQUFJLEVBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEtBQUssS0FBSztpQkFDbkM7Z0JBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNqQjs7Ozs7Ozs7O1FBQ0QsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbkIsQ0FBQzs7Z0JBNUJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIseWpDQUFtQztpQkFDcEM7O0lBMEJELG1CQUFDO0NBQUEsQUE3QkQsQ0FJa0Msa0JBQWtCLEdBeUJuRDtTQXpCWSxZQUFZOzs7SUFDdkIsNEJBQW1COztJQUNuQiw0QkFBcUI7O0lBQ3JCLDZCQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFycmF5UHJvcGVydHkgfSBmcm9tICcuLi8uLi9tb2RlbC9hcnJheS5wcm9wZXJ0eSc7XG5pbXBvcnQgeyBGb3JtUHJvcGVydHkgfSBmcm9tICcuLi8uLi9tb2RlbC9mb3JtLnByb3BlcnR5JztcbmltcG9ydCB7IFNGR3JpZFNjaGVtYSB9IGZyb20gJy4uLy4uL3NjaGVtYS91aSc7XG5pbXBvcnQgeyBPYmplY3RMYXlvdXRXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1vYmplY3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vb2JqZWN0LndpZGdldC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgT2JqZWN0V2lkZ2V0IGV4dGVuZHMgT2JqZWN0TGF5b3V0V2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZ3JpZDogU0ZHcmlkU2NoZW1hO1xuICBsaXN0OiBBcnJheTx7fT4gPSBbXTtcbiAgdGl0bGU6IHN0cmluZztcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IGZvcm1Qcm9wZXJ0eSwgdWkgfSA9IHRoaXM7XG4gICAgY29uc3QgeyBncmlkLCBzaG93VGl0bGUgfSA9IHVpO1xuICAgIGlmICghZm9ybVByb3BlcnR5LmlzUm9vdCgpICYmICEoZm9ybVByb3BlcnR5LnBhcmVudCBpbnN0YW5jZW9mIEFycmF5UHJvcGVydHkpICYmIHNob3dUaXRsZSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy50aXRsZSA9IHRoaXMuc2NoZW1hLnRpdGxlO1xuICAgIH1cbiAgICB0aGlzLmdyaWQgPSBncmlkO1xuICAgIGNvbnN0IGxpc3Q6IEFycmF5PHt9PiA9IFtdO1xuICAgIGZvciAoY29uc3Qga2V5IG9mIGZvcm1Qcm9wZXJ0eS5wcm9wZXJ0aWVzSWQpIHtcbiAgICAgIGNvbnN0IHByb3BlcnR5ID0gZm9ybVByb3BlcnR5LnByb3BlcnRpZXNba2V5XSBhcyBGb3JtUHJvcGVydHk7XG4gICAgICBjb25zdCBpdGVtID0ge1xuICAgICAgICBwcm9wZXJ0eSxcbiAgICAgICAgZ3JpZDogcHJvcGVydHkudWkuZ3JpZCB8fCBncmlkIHx8IHt9LFxuICAgICAgICBzcGFuTGFiZWxGaXhlZDogcHJvcGVydHkudWkuc3BhbkxhYmVsRml4ZWQsXG4gICAgICAgIHNob3c6IHByb3BlcnR5LnVpLmhpZGRlbiA9PT0gZmFsc2UsXG4gICAgICB9O1xuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgICB0aGlzLmxpc3QgPSBsaXN0O1xuICB9XG59XG4iXX0=