/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
        if (showTitle || (typeof showTitle === 'undefined' && !formProperty.isRoot() && !(formProperty.parent instanceof ArrayProperty))) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0LndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3dpZGdldHMvb2JqZWN0L29iamVjdC53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUczRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFbEQ7SUFJa0Msd0NBQWtCO0lBSnBEO1FBQUEscUVBNkJDO1FBdkJDLFVBQUksR0FBYyxFQUFFLENBQUM7O0lBdUJ2QixDQUFDOzs7O0lBcEJDLCtCQUFROzs7SUFBUjs7UUFDUSxJQUFBLFNBQTJCLEVBQXpCLDhCQUFZLEVBQUUsVUFBVztRQUN6QixJQUFBLGNBQUksRUFBRSx3QkFBUztRQUN2QixJQUFJLFNBQVMsSUFBSSxDQUFDLE9BQU8sU0FBUyxLQUFLLFdBQVcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sWUFBWSxhQUFhLENBQUMsQ0FBQyxFQUFFO1lBQ2hJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDaEM7UUFDRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQzs7WUFDWCxJQUFJLEdBQWMsRUFBRTs7WUFDMUIsS0FBa0IsSUFBQSxLQUFBLGlCQUFBLFlBQVksQ0FBQyxZQUFZLENBQUEsZ0JBQUEsNEJBQUU7Z0JBQXhDLElBQU0sR0FBRyxXQUFBOztvQkFDTixRQUFRLEdBQUcsbUJBQUEsWUFBWSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBZ0I7O29CQUN2RCxJQUFJLEdBQUc7b0JBQ1gsUUFBUSxVQUFBO29CQUNSLElBQUksRUFBRSxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtvQkFDcEMsY0FBYyxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsY0FBYztvQkFDMUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxLQUFLLEtBQUs7aUJBQ25DO2dCQUNELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDakI7Ozs7Ozs7OztRQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ25CLENBQUM7O2dCQTVCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLHlqQ0FBbUM7aUJBQ3BDOztJQTBCRCxtQkFBQztDQUFBLEFBN0JELENBSWtDLGtCQUFrQixHQXlCbkQ7U0F6QlksWUFBWTs7O0lBQ3ZCLDRCQUFtQjs7SUFDbkIsNEJBQXFCOztJQUNyQiw2QkFBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBcnJheVByb3BlcnR5IH0gZnJvbSAnLi4vLi4vbW9kZWwvYXJyYXkucHJvcGVydHknO1xuaW1wb3J0IHsgRm9ybVByb3BlcnR5IH0gZnJvbSAnLi4vLi4vbW9kZWwvZm9ybS5wcm9wZXJ0eSc7XG5pbXBvcnQgeyBTRkdyaWRTY2hlbWEgfSBmcm9tICcuLi8uLi9zY2hlbWEvdWknO1xuaW1wb3J0IHsgT2JqZWN0TGF5b3V0V2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2Ytb2JqZWN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL29iamVjdC53aWRnZXQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE9iamVjdFdpZGdldCBleHRlbmRzIE9iamVjdExheW91dFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGdyaWQ6IFNGR3JpZFNjaGVtYTtcbiAgbGlzdDogQXJyYXk8e30+ID0gW107XG4gIHRpdGxlOiBzdHJpbmc7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgeyBmb3JtUHJvcGVydHksIHVpIH0gPSB0aGlzO1xuICAgIGNvbnN0IHsgZ3JpZCwgc2hvd1RpdGxlIH0gPSB1aTtcbiAgICBpZiAoc2hvd1RpdGxlIHx8ICh0eXBlb2Ygc2hvd1RpdGxlID09PSAndW5kZWZpbmVkJyAmJiAhZm9ybVByb3BlcnR5LmlzUm9vdCgpICYmICEoZm9ybVByb3BlcnR5LnBhcmVudCBpbnN0YW5jZW9mIEFycmF5UHJvcGVydHkpKSkge1xuICAgICAgdGhpcy50aXRsZSA9IHRoaXMuc2NoZW1hLnRpdGxlO1xuICAgIH1cbiAgICB0aGlzLmdyaWQgPSBncmlkO1xuICAgIGNvbnN0IGxpc3Q6IEFycmF5PHt9PiA9IFtdO1xuICAgIGZvciAoY29uc3Qga2V5IG9mIGZvcm1Qcm9wZXJ0eS5wcm9wZXJ0aWVzSWQpIHtcbiAgICAgIGNvbnN0IHByb3BlcnR5ID0gZm9ybVByb3BlcnR5LnByb3BlcnRpZXNba2V5XSBhcyBGb3JtUHJvcGVydHk7XG4gICAgICBjb25zdCBpdGVtID0ge1xuICAgICAgICBwcm9wZXJ0eSxcbiAgICAgICAgZ3JpZDogcHJvcGVydHkudWkuZ3JpZCB8fCBncmlkIHx8IHt9LFxuICAgICAgICBzcGFuTGFiZWxGaXhlZDogcHJvcGVydHkudWkuc3BhbkxhYmVsRml4ZWQsXG4gICAgICAgIHNob3c6IHByb3BlcnR5LnVpLmhpZGRlbiA9PT0gZmFsc2UsXG4gICAgICB9O1xuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgICB0aGlzLmxpc3QgPSBsaXN0O1xuICB9XG59XG4iXX0=