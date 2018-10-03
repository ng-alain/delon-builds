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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0LndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3dpZGdldHMvb2JqZWN0L29iamVjdC53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7SUE4QmhCLHdDQUFrQjs7O3FCQUVwQyxFQUFFOzs7Ozs7SUFFaEIsK0JBQVE7OztJQUFSOztRQUNFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7O1FBQ3pCLElBQU0sSUFBSSxHQUFVLEVBQUUsQ0FBQzs7WUFDdkIsS0FBa0IsSUFBQSxLQUFBLGlCQUFBLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFBLGdCQUFBLDRCQUFFO2dCQUE3QyxJQUFNLEdBQUcsV0FBQTs7Z0JBQ1osSUFBTSxRQUFRLHFCQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBaUIsRUFBQzs7Z0JBQ25FLElBQU0sSUFBSSxHQUFHO29CQUNYLFFBQVEsVUFBQTtvQkFDUixJQUFJLEVBQUUsUUFBUSxDQUFDLEVBQUUsWUFBUyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUU7b0JBQ3pDLGNBQWMsRUFBRSxRQUFRLENBQUMsRUFBRSxrQkFBZTtvQkFDMUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxFQUFFLGVBQVksS0FBSztpQkFDbkMsQ0FBQztnQkFDRixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2pCOzs7Ozs7Ozs7UUFDRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztLQUNsQjs7Z0JBNUNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsUUFBUSxFQUFFLGc2QkFxQks7b0JBQ2YsbUJBQW1CLEVBQUUsS0FBSztpQkFDM0I7O3VCQTlCRDtFQStCa0Msa0JBQWtCO1NBQXZDLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JqZWN0TGF5b3V0V2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCB7IFNGR3JpZFNjaGVtYSB9IGZyb20gJy4uLy4uL3NjaGVtYS91aSc7XG5pbXBvcnQgeyBGb3JtUHJvcGVydHkgfSBmcm9tICcuLi8uLi9tb2RlbC9mb3JtLnByb3BlcnR5JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2Ytb2JqZWN0JyxcbiAgdGVtcGxhdGU6IGBcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImdyaWQ7IGVsc2Ugbm9HcmlkXCI+XG4gICAgPG56LXJvdyBbbnpHdXR0ZXJdPVwiZ3JpZC5ndXR0ZXJcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGkgb2YgbGlzdFwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaS5wcm9wZXJ0eS52aXNpYmxlICYmIGkuc2hvd1wiPlxuICAgICAgICAgIDxuei1jb2xcbiAgICAgICAgICAgIFtuelNwYW5dPVwiaS5ncmlkLnNwYW5cIiBbbnpPZmZzZXRdPVwiaS5ncmlkLm9mZnNldFwiXG4gICAgICAgICAgICBbbnpYc109XCJpLmdyaWQueHNcIiBbbnpTbV09XCJpLmdyaWQuc21cIiBbbnpNZF09XCJpLmdyaWQubWRcIlxuICAgICAgICAgICAgW256TGddPVwiaS5ncmlkLmxnXCIgW256WGxdPVwiaS5ncmlkLnhsXCIgW256WFhsXT1cImkuZ3JpZC54eGxcIj5cbiAgICAgICAgICAgIDxzZi1pdGVtIFtmb3JtUHJvcGVydHldPVwiaS5wcm9wZXJ0eVwiIFtmaXhlZC1sYWJlbF09XCJpLnNwYW5MYWJlbEZpeGVkXCI+PC9zZi1pdGVtPlxuICAgICAgICAgIDwvbnotY29sPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvbnotcm93PlxuICA8L25nLWNvbnRhaW5lcj5cbiAgPG5nLXRlbXBsYXRlICNub0dyaWQ+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaSBvZiBsaXN0XCI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaS5wcm9wZXJ0eS52aXNpYmxlICYmIGkuc2hvd1wiPlxuICAgICAgICA8c2YtaXRlbSBbZm9ybVByb3BlcnR5XT1cImkucHJvcGVydHlcIiBbZml4ZWQtbGFiZWxdPVwiaS5zcGFuTGFiZWxGaXhlZFwiPjwvc2YtaXRlbT5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvbmctY29udGFpbmVyPlxuICA8L25nLXRlbXBsYXRlPmAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBPYmplY3RXaWRnZXQgZXh0ZW5kcyBPYmplY3RMYXlvdXRXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xuICBncmlkOiBTRkdyaWRTY2hlbWE7XG4gIGxpc3Q6IGFueVtdID0gW107XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5ncmlkID0gdGhpcy51aS5ncmlkO1xuICAgIGNvbnN0IGxpc3Q6IGFueVtdID0gW107XG4gICAgZm9yIChjb25zdCBrZXkgb2YgdGhpcy5mb3JtUHJvcGVydHkucHJvcGVydGllc0lkKSB7XG4gICAgICBjb25zdCBwcm9wZXJ0eSA9IHRoaXMuZm9ybVByb3BlcnR5LnByb3BlcnRpZXNba2V5XSBhcyBGb3JtUHJvcGVydHk7XG4gICAgICBjb25zdCBpdGVtID0ge1xuICAgICAgICBwcm9wZXJ0eSxcbiAgICAgICAgZ3JpZDogcHJvcGVydHkudWkuZ3JpZCB8fCB0aGlzLmdyaWQgfHwge30sXG4gICAgICAgIHNwYW5MYWJlbEZpeGVkOiBwcm9wZXJ0eS51aS5zcGFuTGFiZWxGaXhlZCxcbiAgICAgICAgc2hvdzogcHJvcGVydHkudWkuaGlkZGVuID09PSBmYWxzZVxuICAgICAgfTtcbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gICAgdGhpcy5saXN0ID0gbGlzdDtcbiAgfVxufVxuIl19