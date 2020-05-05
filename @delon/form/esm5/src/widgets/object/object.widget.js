/**
 * @fileoverview added by tsickle
 * Generated from: src/widgets/object/object.widget.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __extends, __values } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ArrayProperty } from '../../model/array.property';
import { ObjectLayoutWidget } from '../../widget';
var ObjectWidget = /** @class */ (function (_super) {
    __extends(ObjectWidget, _super);
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
            for (var _c = __values(formProperty.propertiesId), _d = _c.next(); !_d.done; _d = _c.next()) {
                var key = _d.value;
                /** @type {?} */
                var property = (/** @type {?} */ (((/** @type {?} */ (formProperty.properties)))[key]));
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
                    template: "<div *ngIf=\"title\" class=\"sf__title\">{{ title }}</div>\n<ng-container *ngIf=\"grid; else noGrid\">\n  <div nz-row [nzGutter]=\"grid.gutter\">\n    <ng-container *ngFor=\"let i of list\">\n      <ng-container *ngIf=\"i.property.visible && i.show\">\n        <div\n          nz-col\n          [nzSpan]=\"i.grid.span\"\n          [nzOffset]=\"i.grid.offset\"\n          [nzXs]=\"i.grid.xs\"\n          [nzSm]=\"i.grid.sm\"\n          [nzMd]=\"i.grid.md\"\n          [nzLg]=\"i.grid.lg\"\n          [nzXl]=\"i.grid.xl\"\n          [nzXXl]=\"i.grid.xxl\"\n        >\n          <sf-item [formProperty]=\"i.property\" [fixed-label]=\"i.spanLabelFixed\"></sf-item>\n        </div>\n      </ng-container>\n    </ng-container>\n  </div>\n</ng-container>\n<ng-template #noGrid>\n  <ng-container *ngFor=\"let i of list\">\n    <ng-container *ngIf=\"i.property.visible && i.show\">\n      <sf-item [formProperty]=\"i.property\" [fixed-label]=\"i.spanLabelFixed\"></sf-item>\n    </ng-container>\n  </ng-container>\n</ng-template>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0LndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3dpZGdldHMvb2JqZWN0L29iamVjdC53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFHM0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRWxEO0lBTWtDLGdDQUFrQjtJQU5wRDtRQUFBLHFFQStCQztRQXZCQyxVQUFJLEdBQWMsRUFBRSxDQUFDOztJQXVCdkIsQ0FBQzs7OztJQXBCQywrQkFBUTs7O0lBQVI7O1FBQ1EsSUFBQSxTQUEyQixFQUF6Qiw4QkFBWSxFQUFFLFVBQVc7UUFDekIsSUFBQSxjQUFJLEVBQUUsd0JBQVM7UUFDdkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sWUFBWSxhQUFhLENBQUMsSUFBSSxTQUFTLEtBQUssSUFBSSxFQUFFO1lBQ25HLElBQUksQ0FBQyxLQUFLLEdBQUcsbUJBQUEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQVUsQ0FBQztTQUMxQztRQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsbUJBQUEsSUFBSSxFQUFnQixDQUFDOztZQUMzQixJQUFJLEdBQWMsRUFBRTs7WUFDMUIsS0FBa0IsSUFBQSxLQUFBLFNBQUEsWUFBWSxDQUFDLFlBQVksQ0FBQSxnQkFBQSw0QkFBRTtnQkFBeEMsSUFBTSxHQUFHLFdBQUE7O29CQUNOLFFBQVEsR0FBRyxtQkFBQSxDQUFDLG1CQUFBLFlBQVksQ0FBQyxVQUFVLEVBQW1DLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBZ0I7O29CQUM1RixJQUFJLEdBQUc7b0JBQ1gsUUFBUSxVQUFBO29CQUNSLElBQUksRUFBRSxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtvQkFDcEMsY0FBYyxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsY0FBYztvQkFDMUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxLQUFLLEtBQUs7aUJBQ25DO2dCQUNELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDakI7Ozs7Ozs7OztRQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ25CLENBQUM7O2dCQTlCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLDBnQ0FBbUM7b0JBQ25DLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUN0Qzs7SUEwQkQsbUJBQUM7Q0FBQSxBQS9CRCxDQU1rQyxrQkFBa0IsR0F5Qm5EO1NBekJZLFlBQVk7OztJQUN2Qiw0QkFBbUI7O0lBQ25CLDRCQUFxQjs7SUFDckIsNkJBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFycmF5UHJvcGVydHkgfSBmcm9tICcuLi8uLi9tb2RlbC9hcnJheS5wcm9wZXJ0eSc7XG5pbXBvcnQgeyBGb3JtUHJvcGVydHkgfSBmcm9tICcuLi8uLi9tb2RlbC9mb3JtLnByb3BlcnR5JztcbmltcG9ydCB7IFNGR3JpZFNjaGVtYSB9IGZyb20gJy4uLy4uL3NjaGVtYS91aSc7XG5pbXBvcnQgeyBPYmplY3RMYXlvdXRXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1vYmplY3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vb2JqZWN0LndpZGdldC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIE9iamVjdFdpZGdldCBleHRlbmRzIE9iamVjdExheW91dFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGdyaWQ6IFNGR3JpZFNjaGVtYTtcbiAgbGlzdDogQXJyYXk8e30+ID0gW107XG4gIHRpdGxlOiBzdHJpbmc7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgeyBmb3JtUHJvcGVydHksIHVpIH0gPSB0aGlzO1xuICAgIGNvbnN0IHsgZ3JpZCwgc2hvd1RpdGxlIH0gPSB1aTtcbiAgICBpZiAoIWZvcm1Qcm9wZXJ0eS5pc1Jvb3QoKSAmJiAhKGZvcm1Qcm9wZXJ0eS5wYXJlbnQgaW5zdGFuY2VvZiBBcnJheVByb3BlcnR5KSAmJiBzaG93VGl0bGUgPT09IHRydWUpIHtcbiAgICAgIHRoaXMudGl0bGUgPSB0aGlzLnNjaGVtYS50aXRsZSBhcyBzdHJpbmc7XG4gICAgfVxuICAgIHRoaXMuZ3JpZCA9IGdyaWQgYXMgU0ZHcmlkU2NoZW1hO1xuICAgIGNvbnN0IGxpc3Q6IEFycmF5PHt9PiA9IFtdO1xuICAgIGZvciAoY29uc3Qga2V5IG9mIGZvcm1Qcm9wZXJ0eS5wcm9wZXJ0aWVzSWQpIHtcbiAgICAgIGNvbnN0IHByb3BlcnR5ID0gKGZvcm1Qcm9wZXJ0eS5wcm9wZXJ0aWVzIGFzIHsgW2tleTogc3RyaW5nXTogRm9ybVByb3BlcnR5IH0pW2tleV0gYXMgRm9ybVByb3BlcnR5O1xuICAgICAgY29uc3QgaXRlbSA9IHtcbiAgICAgICAgcHJvcGVydHksXG4gICAgICAgIGdyaWQ6IHByb3BlcnR5LnVpLmdyaWQgfHwgZ3JpZCB8fCB7fSxcbiAgICAgICAgc3BhbkxhYmVsRml4ZWQ6IHByb3BlcnR5LnVpLnNwYW5MYWJlbEZpeGVkLFxuICAgICAgICBzaG93OiBwcm9wZXJ0eS51aS5oaWRkZW4gPT09IGZhbHNlLFxuICAgICAgfTtcbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gICAgdGhpcy5saXN0ID0gbGlzdDtcbiAgfVxufVxuIl19