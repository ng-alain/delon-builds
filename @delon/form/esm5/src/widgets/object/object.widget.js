/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
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
        this.grid = this.ui.grid;
        /** @type {?} */
        var list = [];
        try {
            for (var _b = tslib_1.__values(this.formProperty.propertiesId), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                /** @type {?} */
                var property = (/** @type {?} */ (this.formProperty.properties[key]));
                /** @type {?} */
                var item = {
                    property: property,
                    grid: property.ui.grid || this.grid || {},
                    spanLabelFixed: property.ui.spanLabelFixed,
                    show: property.ui.hidden === false
                };
                list.push(item);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.list = list;
    };
    ObjectWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-object',
                    template: "\n  <ng-container *ngIf=\"grid; else noGrid\">\n    <div nz-row [nzGutter]=\"grid.gutter\">\n      <ng-container *ngFor=\"let i of list\">\n        <ng-container *ngIf=\"i.property.visible && i.show\">\n          <div nz-col\n            [nzSpan]=\"i.grid.span\" [nzOffset]=\"i.grid.offset\"\n            [nzXs]=\"i.grid.xs\" [nzSm]=\"i.grid.sm\" [nzMd]=\"i.grid.md\"\n            [nzLg]=\"i.grid.lg\" [nzXl]=\"i.grid.xl\" [nzXXl]=\"i.grid.xxl\">\n            <sf-item [formProperty]=\"i.property\" [fixed-label]=\"i.spanLabelFixed\"></sf-item>\n          </div>\n        </ng-container>\n      </ng-container>\n    </div>\n  </ng-container>\n  <ng-template #noGrid>\n    <ng-container *ngFor=\"let i of list\">\n      <ng-container *ngIf=\"i.property.visible && i.show\">\n        <sf-item [formProperty]=\"i.property\" [fixed-label]=\"i.spanLabelFixed\"></sf-item>\n      </ng-container>\n    </ng-container>\n  </ng-template>"
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0LndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3dpZGdldHMvb2JqZWN0L29iamVjdC53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUlsRDtJQXlCa0Msd0NBQWtCO0lBekJwRDtRQUFBLHFFQTRDQztRQWpCQyxVQUFJLEdBQVUsRUFBRSxDQUFDOztJQWlCbkIsQ0FBQzs7OztJQWZDLCtCQUFROzs7SUFBUjs7UUFDRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOztZQUNuQixJQUFJLEdBQVUsRUFBRTs7WUFDdEIsS0FBa0IsSUFBQSxLQUFBLGlCQUFBLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFBLGdCQUFBLDRCQUFFO2dCQUE3QyxJQUFNLEdBQUcsV0FBQTs7b0JBQ04sUUFBUSxHQUFHLG1CQUFBLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFnQjs7b0JBQzVELElBQUksR0FBRztvQkFDWCxRQUFRLFVBQUE7b0JBQ1IsSUFBSSxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRTtvQkFDekMsY0FBYyxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsY0FBYztvQkFDMUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxLQUFLLEtBQUs7aUJBQ25DO2dCQUNELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDakI7Ozs7Ozs7OztRQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ25CLENBQUM7O2dCQTNDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLFFBQVEsRUFBRSxrNkJBcUJLO2lCQUNoQjs7SUFvQkQsbUJBQUM7Q0FBQSxBQTVDRCxDQXlCa0Msa0JBQWtCLEdBbUJuRDtTQW5CWSxZQUFZOzs7SUFDdkIsNEJBQW1COztJQUNuQiw0QkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JqZWN0TGF5b3V0V2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCB7IFNGR3JpZFNjaGVtYSB9IGZyb20gJy4uLy4uL3NjaGVtYS91aSc7XG5pbXBvcnQgeyBGb3JtUHJvcGVydHkgfSBmcm9tICcuLi8uLi9tb2RlbC9mb3JtLnByb3BlcnR5JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2Ytb2JqZWN0JyxcbiAgdGVtcGxhdGU6IGBcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImdyaWQ7IGVsc2Ugbm9HcmlkXCI+XG4gICAgPGRpdiBuei1yb3cgW256R3V0dGVyXT1cImdyaWQuZ3V0dGVyXCI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpIG9mIGxpc3RcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImkucHJvcGVydHkudmlzaWJsZSAmJiBpLnNob3dcIj5cbiAgICAgICAgICA8ZGl2IG56LWNvbFxuICAgICAgICAgICAgW256U3Bhbl09XCJpLmdyaWQuc3BhblwiIFtuek9mZnNldF09XCJpLmdyaWQub2Zmc2V0XCJcbiAgICAgICAgICAgIFtuelhzXT1cImkuZ3JpZC54c1wiIFtuelNtXT1cImkuZ3JpZC5zbVwiIFtuek1kXT1cImkuZ3JpZC5tZFwiXG4gICAgICAgICAgICBbbnpMZ109XCJpLmdyaWQubGdcIiBbbnpYbF09XCJpLmdyaWQueGxcIiBbbnpYWGxdPVwiaS5ncmlkLnh4bFwiPlxuICAgICAgICAgICAgPHNmLWl0ZW0gW2Zvcm1Qcm9wZXJ0eV09XCJpLnByb3BlcnR5XCIgW2ZpeGVkLWxhYmVsXT1cImkuc3BhbkxhYmVsRml4ZWRcIj48L3NmLWl0ZW0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9kaXY+XG4gIDwvbmctY29udGFpbmVyPlxuICA8bmctdGVtcGxhdGUgI25vR3JpZD5cbiAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpIG9mIGxpc3RcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpLnByb3BlcnR5LnZpc2libGUgJiYgaS5zaG93XCI+XG4gICAgICAgIDxzZi1pdGVtIFtmb3JtUHJvcGVydHldPVwiaS5wcm9wZXJ0eVwiIFtmaXhlZC1sYWJlbF09XCJpLnNwYW5MYWJlbEZpeGVkXCI+PC9zZi1pdGVtPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIDwvbmctdGVtcGxhdGU+YCxcbn0pXG5leHBvcnQgY2xhc3MgT2JqZWN0V2lkZ2V0IGV4dGVuZHMgT2JqZWN0TGF5b3V0V2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZ3JpZDogU0ZHcmlkU2NoZW1hO1xuICBsaXN0OiBhbnlbXSA9IFtdO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZ3JpZCA9IHRoaXMudWkuZ3JpZDtcbiAgICBjb25zdCBsaXN0OiBhbnlbXSA9IFtdO1xuICAgIGZvciAoY29uc3Qga2V5IG9mIHRoaXMuZm9ybVByb3BlcnR5LnByb3BlcnRpZXNJZCkge1xuICAgICAgY29uc3QgcHJvcGVydHkgPSB0aGlzLmZvcm1Qcm9wZXJ0eS5wcm9wZXJ0aWVzW2tleV0gYXMgRm9ybVByb3BlcnR5O1xuICAgICAgY29uc3QgaXRlbSA9IHtcbiAgICAgICAgcHJvcGVydHksXG4gICAgICAgIGdyaWQ6IHByb3BlcnR5LnVpLmdyaWQgfHwgdGhpcy5ncmlkIHx8IHt9LFxuICAgICAgICBzcGFuTGFiZWxGaXhlZDogcHJvcGVydHkudWkuc3BhbkxhYmVsRml4ZWQsXG4gICAgICAgIHNob3c6IHByb3BlcnR5LnVpLmhpZGRlbiA9PT0gZmFsc2VcbiAgICAgIH07XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICAgIHRoaXMubGlzdCA9IGxpc3Q7XG4gIH1cbn1cbiJdfQ==