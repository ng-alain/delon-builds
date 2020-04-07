/**
 * @fileoverview added by tsickle
 * Generated from: src/widgets/object/object.widget.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
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
            this.title = (/** @type {?} */ (this.schema.title));
        }
        this.grid = (/** @type {?} */ (grid));
        /** @type {?} */
        var list = [];
        try {
            for (var _c = tslib_1.__values(formProperty.propertiesId), _d = _c.next(); !_d.done; _d = _c.next()) {
                var key = _d.value;
                /** @type {?} */
                var property = (/** @type {?} */ ((/** @type {?} */ (formProperty.properties))[key]));
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
                    template: "<div *ngIf=\"title\" class=\"sf__title\">{{ title }}</div>\n<ng-container *ngIf=\"grid; else noGrid\">\n  <div nz-row\n       [nzGutter]=\"grid.gutter\">\n    <ng-container *ngFor=\"let i of list\">\n      <ng-container *ngIf=\"i.property.visible && i.show\">\n        <div nz-col\n             [nzSpan]=\"i.grid.span\"\n             [nzOffset]=\"i.grid.offset\"\n             [nzXs]=\"i.grid.xs\"\n             [nzSm]=\"i.grid.sm\"\n             [nzMd]=\"i.grid.md\"\n             [nzLg]=\"i.grid.lg\"\n             [nzXl]=\"i.grid.xl\"\n             [nzXXl]=\"i.grid.xxl\">\n          <sf-item [formProperty]=\"i.property\"\n                   [fixed-label]=\"i.spanLabelFixed\"></sf-item>\n        </div>\n      </ng-container>\n    </ng-container>\n  </div>\n</ng-container>\n<ng-template #noGrid>\n  <ng-container *ngFor=\"let i of list\">\n    <ng-container *ngIf=\"i.property.visible && i.show\">\n      <sf-item [formProperty]=\"i.property\"\n               [fixed-label]=\"i.spanLabelFixed\"></sf-item>\n    </ng-container>\n  </ng-container>\n</ng-template>\n",
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0LndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3dpZGdldHMvb2JqZWN0L29iamVjdC53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFHM0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRWxEO0lBTWtDLHdDQUFrQjtJQU5wRDtRQUFBLHFFQStCQztRQXZCQyxVQUFJLEdBQWMsRUFBRSxDQUFDOztJQXVCdkIsQ0FBQzs7OztJQXBCQywrQkFBUTs7O0lBQVI7O1FBQ1EsSUFBQSxTQUEyQixFQUF6Qiw4QkFBWSxFQUFFLFVBQVc7UUFDekIsSUFBQSxjQUFJLEVBQUUsd0JBQVM7UUFDdkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sWUFBWSxhQUFhLENBQUMsSUFBSSxTQUFTLEtBQUssSUFBSSxFQUFFO1lBQ25HLElBQUksQ0FBQyxLQUFLLEdBQUcsbUJBQUEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQVUsQ0FBQztTQUMxQztRQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsbUJBQUEsSUFBSSxFQUFnQixDQUFDOztZQUMzQixJQUFJLEdBQWMsRUFBRTs7WUFDMUIsS0FBa0IsSUFBQSxLQUFBLGlCQUFBLFlBQVksQ0FBQyxZQUFZLENBQUEsZ0JBQUEsNEJBQUU7Z0JBQXhDLElBQU0sR0FBRyxXQUFBOztvQkFDTixRQUFRLEdBQUcsbUJBQUEsbUJBQUEsWUFBWSxDQUFDLFVBQVUsRUFBQyxDQUFDLEdBQUcsQ0FBQyxFQUFnQjs7b0JBQ3hELElBQUksR0FBRztvQkFDWCxRQUFRLFVBQUE7b0JBQ1IsSUFBSSxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO29CQUNwQyxjQUFjLEVBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBQyxjQUFjO29CQUMxQyxJQUFJLEVBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEtBQUssS0FBSztpQkFDbkM7Z0JBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNqQjs7Ozs7Ozs7O1FBQ0QsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbkIsQ0FBQzs7Z0JBOUJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIseWpDQUFtQztvQkFDbkMsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3RDOztJQTBCRCxtQkFBQztDQUFBLEFBL0JELENBTWtDLGtCQUFrQixHQXlCbkQ7U0F6QlksWUFBWTs7O0lBQ3ZCLDRCQUFtQjs7SUFDbkIsNEJBQXFCOztJQUNyQiw2QkFBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXJyYXlQcm9wZXJ0eSB9IGZyb20gJy4uLy4uL21vZGVsL2FycmF5LnByb3BlcnR5JztcbmltcG9ydCB7IEZvcm1Qcm9wZXJ0eSB9IGZyb20gJy4uLy4uL21vZGVsL2Zvcm0ucHJvcGVydHknO1xuaW1wb3J0IHsgU0ZHcmlkU2NoZW1hIH0gZnJvbSAnLi4vLi4vc2NoZW1hL3VpJztcbmltcG9ydCB7IE9iamVjdExheW91dFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLW9iamVjdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9vYmplY3Qud2lkZ2V0Lmh0bWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgT2JqZWN0V2lkZ2V0IGV4dGVuZHMgT2JqZWN0TGF5b3V0V2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZ3JpZDogU0ZHcmlkU2NoZW1hO1xuICBsaXN0OiBBcnJheTx7fT4gPSBbXTtcbiAgdGl0bGU6IHN0cmluZztcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IGZvcm1Qcm9wZXJ0eSwgdWkgfSA9IHRoaXM7XG4gICAgY29uc3QgeyBncmlkLCBzaG93VGl0bGUgfSA9IHVpO1xuICAgIGlmICghZm9ybVByb3BlcnR5LmlzUm9vdCgpICYmICEoZm9ybVByb3BlcnR5LnBhcmVudCBpbnN0YW5jZW9mIEFycmF5UHJvcGVydHkpICYmIHNob3dUaXRsZSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy50aXRsZSA9IHRoaXMuc2NoZW1hLnRpdGxlIGFzIHN0cmluZztcbiAgICB9XG4gICAgdGhpcy5ncmlkID0gZ3JpZCBhcyBTRkdyaWRTY2hlbWE7XG4gICAgY29uc3QgbGlzdDogQXJyYXk8e30+ID0gW107XG4gICAgZm9yIChjb25zdCBrZXkgb2YgZm9ybVByb3BlcnR5LnByb3BlcnRpZXNJZCkge1xuICAgICAgY29uc3QgcHJvcGVydHkgPSBmb3JtUHJvcGVydHkucHJvcGVydGllcyFba2V5XSBhcyBGb3JtUHJvcGVydHk7XG4gICAgICBjb25zdCBpdGVtID0ge1xuICAgICAgICBwcm9wZXJ0eSxcbiAgICAgICAgZ3JpZDogcHJvcGVydHkudWkuZ3JpZCB8fCBncmlkIHx8IHt9LFxuICAgICAgICBzcGFuTGFiZWxGaXhlZDogcHJvcGVydHkudWkuc3BhbkxhYmVsRml4ZWQsXG4gICAgICAgIHNob3c6IHByb3BlcnR5LnVpLmhpZGRlbiA9PT0gZmFsc2UsXG4gICAgICB9O1xuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgICB0aGlzLmxpc3QgPSBsaXN0O1xuICB9XG59XG4iXX0=