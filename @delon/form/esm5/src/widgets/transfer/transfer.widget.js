/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { of } from 'rxjs';
import { ControlWidget } from '../../widget';
import { getData } from '../../utils';
var TransferWidget = /** @class */ (function (_super) {
    tslib_1.__extends(TransferWidget, _super);
    function TransferWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.list = [];
        _this._data = [];
        _this._canMove = function (arg) {
            return _this.ui["canMove"] ? _this.ui["canMove"](arg) : of(arg.list);
        };
        return _this;
    }
    /**
     * @return {?}
     */
    TransferWidget.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.i = {
            titles: this.ui["titles"] || ['', ''],
            operations: this.ui["operations"] || ['', ''],
            itemUnit: this.ui["itemUnit"] || '项',
            itemsUnit: this.ui["itemsUnit"] || '项',
        };
    };
    /**
     * @param {?} value
     * @return {?}
     */
    TransferWidget.prototype.reset = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        getData(this.schema, this.ui, null).subscribe(function (list) {
            /** @type {?} */
            var formData = _this.formProperty.formData;
            if (!Array.isArray(formData))
                formData = [formData];
            list.forEach(function (item) {
                if (~(/** @type {?} */ (formData)).indexOf(item.value))
                    item["direction"] = 'right';
            });
            _this.list = list;
            _this._data = list.filter(function (w) { return w["direction"] === 'right'; });
            _this.notify();
            _this.detectChanges();
        });
    };
    /**
     * @return {?}
     */
    TransferWidget.prototype.notify = /**
     * @return {?}
     */
    function () {
        this.formProperty.setValue(this._data.map(function (i) { return i.value; }), false);
    };
    /**
     * @param {?} options
     * @return {?}
     */
    TransferWidget.prototype._change = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        var _a;
        if (options.to === 'right') {
            this._data = (_a = this._data).concat.apply(_a, tslib_1.__spread(options.list));
        }
        else {
            this._data = this._data.filter(function (w) { return options.list.indexOf(w) === -1; });
        }
        if (this.ui["change"])
            this.ui["change"](options);
        this.notify();
    };
    /**
     * @param {?} options
     * @return {?}
     */
    TransferWidget.prototype._searchChange = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        if (this.ui["searchChange"])
            this.ui["searchChange"](options);
    };
    /**
     * @param {?} options
     * @return {?}
     */
    TransferWidget.prototype._selectChange = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        if (this.ui["selectChange"])
            this.ui["selectChange"](options);
        this.cd.detectChanges();
    };
    TransferWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-transfer',
                    template: "\n  <sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n\n    <nz-transfer\n      [nzDataSource]=\"list\"\n      [nzTitles]=\"i.titles\"\n      [nzOperations]=\"i.operations\"\n      [nzListStyle]=\"ui.listStyle\"\n      [nzItemUnit]=\"i.itemUnit\"\n      [nzItemsUnit]=\"i.itemsUnit\"\n      [nzShowSearch]=\"ui.showSearch\"\n      [nzFilterOption]=\"ui.filterOption\"\n      [nzSearchPlaceholder]=\"ui.searchPlaceholder\"\n      [nzNotFoundContent]=\"ui.notFoundContent\"\n      [nzCanMove]=\"_canMove\"\n      (nzChange)=\"_change($event)\"\n      (nzSearchChange)=\"_searchChange($event)\"\n      (nzSelectChange)=\"_selectChange($event)\">\n    </nz-transfer>\n\n  </sf-item-wrap>\n  ",
                    preserveWhitespaces: false
                }] }
    ];
    return TransferWidget;
}(ControlWidget));
export { TransferWidget };
if (false) {
    /** @type {?} */
    TransferWidget.prototype.list;
    /** @type {?} */
    TransferWidget.prototype.i;
    /** @type {?} */
    TransferWidget.prototype._data;
    /** @type {?} */
    TransferWidget.prototype._canMove;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmZXIud2lkZ2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy90cmFuc2Zlci90cmFuc2Zlci53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUM3QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sYUFBYSxDQUFDOztJQTZCRiwwQ0FBYTs7O3FCQUNqQyxFQUFFO3NCQUVPLEVBQUU7eUJBNkJkLFVBQUMsR0FBUTtZQUNsQixPQUFPLEtBQUksQ0FBQyxFQUFFLFlBQVMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxFQUFFLFlBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDOUQ7Ozs7OztJQTdCRCxpQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsQ0FBQyxHQUFHO1lBQ1AsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFLGNBQVcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQ2xDLFVBQVUsRUFBRSxJQUFJLENBQUMsRUFBRSxrQkFBZSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7WUFDMUMsUUFBUSxFQUFFLElBQUksQ0FBQyxFQUFFLGdCQUFhLEdBQUc7WUFDakMsU0FBUyxFQUFFLElBQUksQ0FBQyxFQUFFLGlCQUFjLEdBQUc7U0FDcEMsQ0FBQztLQUNIOzs7OztJQUVELDhCQUFLOzs7O0lBQUwsVUFBTSxLQUFVO1FBQWhCLGlCQVlDO1FBWEMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJOztZQUNoRCxJQUFJLFFBQVEsR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQztZQUMxQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7Z0JBQUUsUUFBUSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDcEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQWtCO2dCQUM5QixJQUFJLENBQUMsbUJBQUMsUUFBaUIsRUFBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO29CQUFFLElBQUksZ0JBQWEsT0FBTyxDQUFDO2FBQ3hFLENBQUMsQ0FBQztZQUNILEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsa0JBQWUsT0FBTyxFQUF2QixDQUF1QixDQUFDLENBQUM7WUFDdkQsS0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2QsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3RCLENBQUMsQ0FBQztLQUNKOzs7O0lBRU8sK0JBQU07Ozs7UUFDWixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxLQUFLLEVBQVAsQ0FBTyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7Ozs7OztJQU9sRSxnQ0FBTzs7OztJQUFQLFVBQVEsT0FBWTs7UUFDbEIsSUFBSSxPQUFPLENBQUMsRUFBRSxLQUFLLE9BQU8sRUFBRTtZQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUEsS0FBQSxJQUFJLENBQUMsS0FBSyxDQUFBLENBQUMsTUFBTSw0QkFBSSxPQUFPLENBQUMsSUFBSSxFQUFDLENBQUM7U0FDakQ7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO1NBQ3JFO1FBQ0QsSUFBSSxJQUFJLENBQUMsRUFBRTtZQUFTLElBQUksQ0FBQyxFQUFFLFdBQVEsT0FBTyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0tBQ2Y7Ozs7O0lBRUQsc0NBQWE7Ozs7SUFBYixVQUFjLE9BQVk7UUFDeEIsSUFBSSxJQUFJLENBQUMsRUFBRTtZQUFlLElBQUksQ0FBQyxFQUFFLGlCQUFjLE9BQU8sQ0FBQyxDQUFDO0tBQ3pEOzs7OztJQUVELHNDQUFhOzs7O0lBQWIsVUFBYyxPQUFZO1FBQ3hCLElBQUksSUFBSSxDQUFDLEVBQUU7WUFBZSxJQUFJLENBQUMsRUFBRSxpQkFBYyxPQUFPLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO0tBQ3pCOztnQkEvRUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2QixRQUFRLEVBQUUsb3dCQXFCVDtvQkFDRCxtQkFBbUIsRUFBRSxLQUFLO2lCQUMzQjs7eUJBL0JEO0VBZ0NvQyxhQUFhO1NBQXBDLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuaW1wb3J0IHsgZ2V0RGF0YSB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IFNGU2NoZW1hRW51bSB9IGZyb20gJy4uLy4uL3NjaGVtYSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXRyYW5zZmVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cblxuICAgIDxuei10cmFuc2ZlclxuICAgICAgW256RGF0YVNvdXJjZV09XCJsaXN0XCJcbiAgICAgIFtuelRpdGxlc109XCJpLnRpdGxlc1wiXG4gICAgICBbbnpPcGVyYXRpb25zXT1cImkub3BlcmF0aW9uc1wiXG4gICAgICBbbnpMaXN0U3R5bGVdPVwidWkubGlzdFN0eWxlXCJcbiAgICAgIFtuekl0ZW1Vbml0XT1cImkuaXRlbVVuaXRcIlxuICAgICAgW256SXRlbXNVbml0XT1cImkuaXRlbXNVbml0XCJcbiAgICAgIFtuelNob3dTZWFyY2hdPVwidWkuc2hvd1NlYXJjaFwiXG4gICAgICBbbnpGaWx0ZXJPcHRpb25dPVwidWkuZmlsdGVyT3B0aW9uXCJcbiAgICAgIFtuelNlYXJjaFBsYWNlaG9sZGVyXT1cInVpLnNlYXJjaFBsYWNlaG9sZGVyXCJcbiAgICAgIFtuek5vdEZvdW5kQ29udGVudF09XCJ1aS5ub3RGb3VuZENvbnRlbnRcIlxuICAgICAgW256Q2FuTW92ZV09XCJfY2FuTW92ZVwiXG4gICAgICAobnpDaGFuZ2UpPVwiX2NoYW5nZSgkZXZlbnQpXCJcbiAgICAgIChuelNlYXJjaENoYW5nZSk9XCJfc2VhcmNoQ2hhbmdlKCRldmVudClcIlxuICAgICAgKG56U2VsZWN0Q2hhbmdlKT1cIl9zZWxlY3RDaGFuZ2UoJGV2ZW50KVwiPlxuICAgIDwvbnotdHJhbnNmZXI+XG5cbiAgPC9zZi1pdGVtLXdyYXA+XG4gIGAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBUcmFuc2ZlcldpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xuICBsaXN0OiBhbnlbXSA9IFtdO1xuICBpOiBhbnk7XG4gIHByaXZhdGUgX2RhdGE6IGFueVtdID0gW107XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pID0ge1xuICAgICAgdGl0bGVzOiB0aGlzLnVpLnRpdGxlcyB8fCBbJycsICcnXSxcbiAgICAgIG9wZXJhdGlvbnM6IHRoaXMudWkub3BlcmF0aW9ucyB8fCBbJycsICcnXSxcbiAgICAgIGl0ZW1Vbml0OiB0aGlzLnVpLml0ZW1Vbml0IHx8ICfpobknLFxuICAgICAgaXRlbXNVbml0OiB0aGlzLnVpLml0ZW1zVW5pdCB8fCAn6aG5JyxcbiAgICB9O1xuICB9XG5cbiAgcmVzZXQodmFsdWU6IGFueSkge1xuICAgIGdldERhdGEodGhpcy5zY2hlbWEsIHRoaXMudWksIG51bGwpLnN1YnNjcmliZShsaXN0ID0+IHtcbiAgICAgIGxldCBmb3JtRGF0YSA9IHRoaXMuZm9ybVByb3BlcnR5LmZvcm1EYXRhO1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGZvcm1EYXRhKSkgZm9ybURhdGEgPSBbZm9ybURhdGFdO1xuICAgICAgbGlzdC5mb3JFYWNoKChpdGVtOiBTRlNjaGVtYUVudW0pID0+IHtcbiAgICAgICAgaWYgKH4oZm9ybURhdGEgYXMgYW55W10pLmluZGV4T2YoaXRlbS52YWx1ZSkpIGl0ZW0uZGlyZWN0aW9uID0gJ3JpZ2h0JztcbiAgICAgIH0pO1xuICAgICAgdGhpcy5saXN0ID0gbGlzdDtcbiAgICAgIHRoaXMuX2RhdGEgPSBsaXN0LmZpbHRlcih3ID0+IHcuZGlyZWN0aW9uID09PSAncmlnaHQnKTtcbiAgICAgIHRoaXMubm90aWZ5KCk7XG4gICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgbm90aWZ5KCkge1xuICAgIHRoaXMuZm9ybVByb3BlcnR5LnNldFZhbHVlKHRoaXMuX2RhdGEubWFwKGkgPT4gaS52YWx1ZSksIGZhbHNlKTtcbiAgfVxuXG4gIF9jYW5Nb3ZlID0gKGFyZzogYW55KTogT2JzZXJ2YWJsZTxhbnlbXT4gPT4ge1xuICAgIHJldHVybiB0aGlzLnVpLmNhbk1vdmUgPyB0aGlzLnVpLmNhbk1vdmUoYXJnKSA6IG9mKGFyZy5saXN0KTtcbiAgfTtcblxuICBfY2hhbmdlKG9wdGlvbnM6IGFueSkge1xuICAgIGlmIChvcHRpb25zLnRvID09PSAncmlnaHQnKSB7XG4gICAgICB0aGlzLl9kYXRhID0gdGhpcy5fZGF0YS5jb25jYXQoLi4ub3B0aW9ucy5saXN0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZGF0YSA9IHRoaXMuX2RhdGEuZmlsdGVyKHcgPT4gb3B0aW9ucy5saXN0LmluZGV4T2YodykgPT09IC0xKTtcbiAgICB9XG4gICAgaWYgKHRoaXMudWkuY2hhbmdlKSB0aGlzLnVpLmNoYW5nZShvcHRpb25zKTtcbiAgICB0aGlzLm5vdGlmeSgpO1xuICB9XG5cbiAgX3NlYXJjaENoYW5nZShvcHRpb25zOiBhbnkpIHtcbiAgICBpZiAodGhpcy51aS5zZWFyY2hDaGFuZ2UpIHRoaXMudWkuc2VhcmNoQ2hhbmdlKG9wdGlvbnMpO1xuICB9XG5cbiAgX3NlbGVjdENoYW5nZShvcHRpb25zOiBhbnkpIHtcbiAgICBpZiAodGhpcy51aS5zZWxlY3RDaGFuZ2UpIHRoaXMudWkuc2VsZWN0Q2hhbmdlKG9wdGlvbnMpO1xuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG59XG4iXX0=