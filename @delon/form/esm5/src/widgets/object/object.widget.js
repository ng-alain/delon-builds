/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
                var property = /** @type {?} */ (this.formProperty.properties[key]);
                /** @type {?} */
                var item = {
                    property: property,
                    grid: property.ui["grid"] || this.grid || {},
                    spanLabelFixed: property.ui["spanLabelFixed"],
                    show: property.ui["hidden"] === false
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
                    template: "\n  <ng-container *ngIf=\"grid; else noGrid\">\n    <nz-row [nzGutter]=\"grid.gutter\">\n      <ng-container *ngFor=\"let i of list\">\n        <ng-container *ngIf=\"i.property.visible && i.show\">\n          <nz-col\n            [nzSpan]=\"i.grid.span\" [nzOffset]=\"i.grid.offset\"\n            [nzXs]=\"i.grid.xs\" [nzSm]=\"i.grid.sm\" [nzMd]=\"i.grid.md\"\n            [nzLg]=\"i.grid.lg\" [nzXl]=\"i.grid.xl\" [nzXXl]=\"i.grid.xxl\">\n            <sf-item [formProperty]=\"i.property\" [fixed-label]=\"i.spanLabelFixed\"></sf-item>\n          </nz-col>\n        </ng-container>\n      </ng-container>\n    </nz-row>\n  </ng-container>\n  <ng-template #noGrid>\n    <ng-container *ngFor=\"let i of list\">\n      <ng-container *ngIf=\"i.property.visible && i.show\">\n        <sf-item [formProperty]=\"i.property\" [fixed-label]=\"i.spanLabelFixed\"></sf-item>\n      </ng-container>\n    </ng-container>\n  </ng-template>",
                    preserveWhitespaces: false
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0LndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3dpZGdldHMvb2JqZWN0L29iamVjdC53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7SUE4QmhCLHdDQUFrQjs7O3FCQUVwQyxFQUFFOzs7Ozs7SUFFaEIsK0JBQVE7OztJQUFSOztRQUNFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7O1FBQ3pCLElBQU0sSUFBSSxHQUFVLEVBQUUsQ0FBQzs7WUFDdkIsS0FBa0IsSUFBQSxLQUFBLGlCQUFBLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFBLGdCQUFBLDRCQUFFO2dCQUE3QyxJQUFNLEdBQUcsV0FBQTs7Z0JBQ1osSUFBTSxRQUFRLHFCQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBaUIsRUFBQzs7Z0JBQ25FLElBQU0sSUFBSSxHQUFHO29CQUNYLFFBQVEsVUFBQTtvQkFDUixJQUFJLEVBQUUsUUFBUSxDQUFDLEVBQUUsWUFBUyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUU7b0JBQ3pDLGNBQWMsRUFBRSxRQUFRLENBQUMsRUFBRSxrQkFBZTtvQkFDMUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxFQUFFLGVBQVksS0FBSztpQkFDbkMsQ0FBQztnQkFDRixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2pCOzs7Ozs7Ozs7UUFDRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztLQUNsQjs7Z0JBNUNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsUUFBUSxFQUFFLGc2QkFxQks7b0JBQ2YsbUJBQW1CLEVBQUUsS0FBSztpQkFDM0I7O3VCQTlCRDtFQStCa0Msa0JBQWtCO1NBQXZDLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYmplY3RMYXlvdXRXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xyXG5pbXBvcnQgeyBTRkdyaWRTY2hlbWEgfSBmcm9tICcuLi8uLi9zY2hlbWEvdWknO1xyXG5pbXBvcnQgeyBGb3JtUHJvcGVydHkgfSBmcm9tICcuLi8uLi9tb2RlbC9mb3JtLnByb3BlcnR5JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc2Ytb2JqZWN0JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJncmlkOyBlbHNlIG5vR3JpZFwiPlxyXG4gICAgPG56LXJvdyBbbnpHdXR0ZXJdPVwiZ3JpZC5ndXR0ZXJcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaSBvZiBsaXN0XCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImkucHJvcGVydHkudmlzaWJsZSAmJiBpLnNob3dcIj5cclxuICAgICAgICAgIDxuei1jb2xcclxuICAgICAgICAgICAgW256U3Bhbl09XCJpLmdyaWQuc3BhblwiIFtuek9mZnNldF09XCJpLmdyaWQub2Zmc2V0XCJcclxuICAgICAgICAgICAgW256WHNdPVwiaS5ncmlkLnhzXCIgW256U21dPVwiaS5ncmlkLnNtXCIgW256TWRdPVwiaS5ncmlkLm1kXCJcclxuICAgICAgICAgICAgW256TGddPVwiaS5ncmlkLmxnXCIgW256WGxdPVwiaS5ncmlkLnhsXCIgW256WFhsXT1cImkuZ3JpZC54eGxcIj5cclxuICAgICAgICAgICAgPHNmLWl0ZW0gW2Zvcm1Qcm9wZXJ0eV09XCJpLnByb3BlcnR5XCIgW2ZpeGVkLWxhYmVsXT1cImkuc3BhbkxhYmVsRml4ZWRcIj48L3NmLWl0ZW0+XHJcbiAgICAgICAgICA8L256LWNvbD5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8L256LXJvdz5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuICA8bmctdGVtcGxhdGUgI25vR3JpZD5cclxuICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGkgb2YgbGlzdFwiPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaS5wcm9wZXJ0eS52aXNpYmxlICYmIGkuc2hvd1wiPlxyXG4gICAgICAgIDxzZi1pdGVtIFtmb3JtUHJvcGVydHldPVwiaS5wcm9wZXJ0eVwiIFtmaXhlZC1sYWJlbF09XCJpLnNwYW5MYWJlbEZpeGVkXCI+PC9zZi1pdGVtPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIDwvbmctdGVtcGxhdGU+YCxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE9iamVjdFdpZGdldCBleHRlbmRzIE9iamVjdExheW91dFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgZ3JpZDogU0ZHcmlkU2NoZW1hO1xyXG4gIGxpc3Q6IGFueVtdID0gW107XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5ncmlkID0gdGhpcy51aS5ncmlkO1xyXG4gICAgY29uc3QgbGlzdDogYW55W10gPSBbXTtcclxuICAgIGZvciAoY29uc3Qga2V5IG9mIHRoaXMuZm9ybVByb3BlcnR5LnByb3BlcnRpZXNJZCkge1xyXG4gICAgICBjb25zdCBwcm9wZXJ0eSA9IHRoaXMuZm9ybVByb3BlcnR5LnByb3BlcnRpZXNba2V5XSBhcyBGb3JtUHJvcGVydHk7XHJcbiAgICAgIGNvbnN0IGl0ZW0gPSB7XHJcbiAgICAgICAgcHJvcGVydHksXHJcbiAgICAgICAgZ3JpZDogcHJvcGVydHkudWkuZ3JpZCB8fCB0aGlzLmdyaWQgfHwge30sXHJcbiAgICAgICAgc3BhbkxhYmVsRml4ZWQ6IHByb3BlcnR5LnVpLnNwYW5MYWJlbEZpeGVkLFxyXG4gICAgICAgIHNob3c6IHByb3BlcnR5LnVpLmhpZGRlbiA9PT0gZmFsc2VcclxuICAgICAgfTtcclxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5saXN0ID0gbGlzdDtcclxuICB9XHJcbn1cclxuIl19