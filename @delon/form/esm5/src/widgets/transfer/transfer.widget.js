/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { of } from 'rxjs';
import { getData } from '../../utils';
import { ControlWidget } from '../../widget';
var TransferWidget = /** @class */ (function (_super) {
    tslib_1.__extends(TransferWidget, _super);
    function TransferWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.list = [];
        _this._data = [];
        _this._canMove = function (arg) {
            return _this.ui.canMove ? _this.ui.canMove(arg) : of(arg.list);
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
            titles: this.ui.titles || ['', ''],
            operations: this.ui.operations || ['', ''],
            itemUnit: this.ui.itemUnit || '项',
            itemsUnit: this.ui.itemsUnit || '项',
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
                // tslint:disable-next-line:no-any
                if (~((/** @type {?} */ (formData))).indexOf(item.value))
                    item.direction = 'right';
            });
            _this.list = list;
            _this._data = list.filter(function (w) { return w.direction === 'right'; });
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
            // tslint:disable-next-line:no-any
            this._data = this._data.filter(function (w) { return options.list.indexOf(w) === -1; });
        }
        if (this.ui.change)
            this.ui.change(options);
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
        if (this.ui.searchChange)
            this.ui.searchChange(options);
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
        if (this.ui.selectChange)
            this.ui.selectChange(options);
        this.cd.detectChanges();
    };
    TransferWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-transfer',
                    template: "\n  <sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n\n    <nz-transfer\n      [nzDataSource]=\"list\"\n      [nzTitles]=\"i.titles\"\n      [nzOperations]=\"i.operations\"\n      [nzListStyle]=\"ui.listStyle\"\n      [nzItemUnit]=\"i.itemUnit\"\n      [nzItemsUnit]=\"i.itemsUnit\"\n      [nzShowSearch]=\"ui.showSearch\"\n      [nzFilterOption]=\"ui.filterOption\"\n      [nzSearchPlaceholder]=\"ui.searchPlaceholder\"\n      [nzNotFoundContent]=\"ui.notFoundContent\"\n      [nzCanMove]=\"_canMove\"\n      (nzChange)=\"_change($event)\"\n      (nzSearchChange)=\"_searchChange($event)\"\n      (nzSelectChange)=\"_selectChange($event)\">\n    </nz-transfer>\n\n  </sf-item-wrap>\n  "
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmZXIud2lkZ2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy90cmFuc2Zlci90cmFuc2Zlci53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRWxELE9BQU8sRUFBRSxFQUFFLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFHdEMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN0QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRTdDO0lBeUJvQywwQ0FBYTtJQXpCakQ7UUFBQSxxRUFrRkM7UUF4REMsVUFBSSxHQUFtQixFQUFFLENBQUM7UUFHbEIsV0FBSyxHQUFtQixFQUFFLENBQUM7UUE4Qm5DLGNBQVEsR0FBRyxVQUFDLEdBQW9CO1lBQzlCLE9BQU8sS0FBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9ELENBQUMsQ0FBQTs7SUFxQkgsQ0FBQzs7OztJQW5EQyxpQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsQ0FBQyxHQUFHO1lBQ1AsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQztZQUNsQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQzFDLFFBQVEsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsSUFBSSxHQUFHO1lBQ2pDLFNBQVMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsSUFBSSxHQUFHO1NB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MUIsMkJBQU87O0lBQ1AsK0JBQW1DOztJQThCbkMsa0NBRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJhbnNmZXJDYW5Nb3ZlLCBUcmFuc2ZlckNoYW5nZSwgVHJhbnNmZXJJdGVtLCBUcmFuc2ZlclNlYXJjaENoYW5nZSwgVHJhbnNmZXJTZWxlY3RDaGFuZ2UgfSBmcm9tICduZy16b3Jyby1hbnRkJztcbmltcG9ydCB7IG9mLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTRlZhbHVlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IFNGU2NoZW1hRW51bSB9IGZyb20gJy4uLy4uL3NjaGVtYSc7XG5pbXBvcnQgeyBnZXREYXRhIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXRyYW5zZmVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cblxuICAgIDxuei10cmFuc2ZlclxuICAgICAgW256RGF0YVNvdXJjZV09XCJsaXN0XCJcbiAgICAgIFtuelRpdGxlc109XCJpLnRpdGxlc1wiXG4gICAgICBbbnpPcGVyYXRpb25zXT1cImkub3BlcmF0aW9uc1wiXG4gICAgICBbbnpMaXN0U3R5bGVdPVwidWkubGlzdFN0eWxlXCJcbiAgICAgIFtuekl0ZW1Vbml0XT1cImkuaXRlbVVuaXRcIlxuICAgICAgW256SXRlbXNVbml0XT1cImkuaXRlbXNVbml0XCJcbiAgICAgIFtuelNob3dTZWFyY2hdPVwidWkuc2hvd1NlYXJjaFwiXG4gICAgICBbbnpGaWx0ZXJPcHRpb25dPVwidWkuZmlsdGVyT3B0aW9uXCJcbiAgICAgIFtuelNlYXJjaFBsYWNlaG9sZGVyXT1cInVpLnNlYXJjaFBsYWNlaG9sZGVyXCJcbiAgICAgIFtuek5vdEZvdW5kQ29udGVudF09XCJ1aS5ub3RGb3VuZENvbnRlbnRcIlxuICAgICAgW256Q2FuTW92ZV09XCJfY2FuTW92ZVwiXG4gICAgICAobnpDaGFuZ2UpPVwiX2NoYW5nZSgkZXZlbnQpXCJcbiAgICAgIChuelNlYXJjaENoYW5nZSk9XCJfc2VhcmNoQ2hhbmdlKCRldmVudClcIlxuICAgICAgKG56U2VsZWN0Q2hhbmdlKT1cIl9zZWxlY3RDaGFuZ2UoJGV2ZW50KVwiPlxuICAgIDwvbnotdHJhbnNmZXI+XG5cbiAgPC9zZi1pdGVtLXdyYXA+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIFRyYW5zZmVyV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGxpc3Q6IFNGU2NoZW1hRW51bVtdID0gW107XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgaTogYW55O1xuICBwcml2YXRlIF9kYXRhOiBTRlNjaGVtYUVudW1bXSA9IFtdO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaSA9IHtcbiAgICAgIHRpdGxlczogdGhpcy51aS50aXRsZXMgfHwgWycnLCAnJ10sXG4gICAgICBvcGVyYXRpb25zOiB0aGlzLnVpLm9wZXJhdGlvbnMgfHwgWycnLCAnJ10sXG4gICAgICBpdGVtVW5pdDogdGhpcy51aS5pdGVtVW5pdCB8fCAn6aG5JyxcbiAgICAgIGl0ZW1zVW5pdDogdGhpcy51aS5pdGVtc1VuaXQgfHwgJ+mhuScsXG4gICAgfTtcbiAgfVxuXG4gIHJlc2V0KHZhbHVlOiBTRlZhbHVlKSB7XG4gICAgZ2V0RGF0YSh0aGlzLnNjaGVtYSwgdGhpcy51aSwgbnVsbCkuc3Vic2NyaWJlKGxpc3QgPT4ge1xuICAgICAgbGV0IGZvcm1EYXRhID0gdGhpcy5mb3JtUHJvcGVydHkuZm9ybURhdGE7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZm9ybURhdGEpKSBmb3JtRGF0YSA9IFtmb3JtRGF0YV07XG4gICAgICBsaXN0LmZvckVhY2goKGl0ZW06IFNGU2NoZW1hRW51bSkgPT4ge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgICAgIGlmICh+KGZvcm1EYXRhIGFzIGFueVtdKS5pbmRleE9mKGl0ZW0udmFsdWUpKSBpdGVtLmRpcmVjdGlvbiA9ICdyaWdodCc7XG4gICAgICB9KTtcbiAgICAgIHRoaXMubGlzdCA9IGxpc3Q7XG4gICAgICB0aGlzLl9kYXRhID0gbGlzdC5maWx0ZXIodyA9PiB3LmRpcmVjdGlvbiA9PT0gJ3JpZ2h0Jyk7XG4gICAgICB0aGlzLm5vdGlmeSgpO1xuICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIG5vdGlmeSgpIHtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5zZXRWYWx1ZSh0aGlzLl9kYXRhLm1hcChpID0+IGkudmFsdWUpLCBmYWxzZSk7XG4gIH1cblxuICBfY2FuTW92ZSA9IChhcmc6IFRyYW5zZmVyQ2FuTW92ZSk6IE9ic2VydmFibGU8VHJhbnNmZXJJdGVtW10+ID0+IHtcbiAgICByZXR1cm4gdGhpcy51aS5jYW5Nb3ZlID8gdGhpcy51aS5jYW5Nb3ZlKGFyZykgOiBvZihhcmcubGlzdCk7XG4gIH1cblxuICBfY2hhbmdlKG9wdGlvbnM6IFRyYW5zZmVyQ2hhbmdlKSB7XG4gICAgaWYgKG9wdGlvbnMudG8gPT09ICdyaWdodCcpIHtcbiAgICAgIHRoaXMuX2RhdGEgPSB0aGlzLl9kYXRhLmNvbmNhdCguLi5vcHRpb25zLmxpc3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgICB0aGlzLl9kYXRhID0gdGhpcy5fZGF0YS5maWx0ZXIoKHc6IGFueSkgPT4gb3B0aW9ucy5saXN0LmluZGV4T2YodykgPT09IC0xKTtcbiAgICB9XG4gICAgaWYgKHRoaXMudWkuY2hhbmdlKSB0aGlzLnVpLmNoYW5nZShvcHRpb25zKTtcbiAgICB0aGlzLm5vdGlmeSgpO1xuICB9XG5cbiAgX3NlYXJjaENoYW5nZShvcHRpb25zOiBUcmFuc2ZlclNlYXJjaENoYW5nZSkge1xuICAgIGlmICh0aGlzLnVpLnNlYXJjaENoYW5nZSkgdGhpcy51aS5zZWFyY2hDaGFuZ2Uob3B0aW9ucyk7XG4gIH1cblxuICBfc2VsZWN0Q2hhbmdlKG9wdGlvbnM6IFRyYW5zZmVyU2VsZWN0Q2hhbmdlKSB7XG4gICAgaWYgKHRoaXMudWkuc2VsZWN0Q2hhbmdlKSB0aGlzLnVpLnNlbGVjdENoYW5nZShvcHRpb25zKTtcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgfVxufVxuIl19