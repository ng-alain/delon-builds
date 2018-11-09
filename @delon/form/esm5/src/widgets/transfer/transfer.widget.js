/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmZXIud2lkZ2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy90cmFuc2Zlci90cmFuc2Zlci53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUM3QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBR3RDO0lBMEJvQywwQ0FBYTtJQTFCakQ7UUFBQSxxRUFnRkM7UUFyREMsVUFBSSxHQUFVLEVBQUUsQ0FBQztRQUVULFdBQUssR0FBVSxFQUFFLENBQUM7UUE2QjFCLGNBQVEsR0FBRyxVQUFDLEdBQVE7WUFDbEIsT0FBTyxLQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0QsQ0FBQyxDQUFDOztJQW9CSixDQUFDOzs7O0lBakRDLGlDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxDQUFDLEdBQUc7WUFDUCxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQ2xDLFVBQVUsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7WUFDMUMsUUFBUSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxJQUFJLEdBQUc7WUFDakMsU0FBUyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxJQUFJLEdBQUc7U0FDcEMs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SUFDUCwrQkFBMEI7O0lBNkIxQixrQ0FFRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5pbXBvcnQgeyBnZXREYXRhIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgU0ZTY2hlbWFFbnVtIH0gZnJvbSAnLi4vLi4vc2NoZW1hJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtdHJhbnNmZXInLFxuICB0ZW1wbGF0ZTogYFxuICA8c2YtaXRlbS13cmFwIFtpZF09XCJpZFwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW3VpXT1cInVpXCIgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIiBbZXJyb3JdPVwiZXJyb3JcIiBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiPlxuXG4gICAgPG56LXRyYW5zZmVyXG4gICAgICBbbnpEYXRhU291cmNlXT1cImxpc3RcIlxuICAgICAgW256VGl0bGVzXT1cImkudGl0bGVzXCJcbiAgICAgIFtuek9wZXJhdGlvbnNdPVwiaS5vcGVyYXRpb25zXCJcbiAgICAgIFtuekxpc3RTdHlsZV09XCJ1aS5saXN0U3R5bGVcIlxuICAgICAgW256SXRlbVVuaXRdPVwiaS5pdGVtVW5pdFwiXG4gICAgICBbbnpJdGVtc1VuaXRdPVwiaS5pdGVtc1VuaXRcIlxuICAgICAgW256U2hvd1NlYXJjaF09XCJ1aS5zaG93U2VhcmNoXCJcbiAgICAgIFtuekZpbHRlck9wdGlvbl09XCJ1aS5maWx0ZXJPcHRpb25cIlxuICAgICAgW256U2VhcmNoUGxhY2Vob2xkZXJdPVwidWkuc2VhcmNoUGxhY2Vob2xkZXJcIlxuICAgICAgW256Tm90Rm91bmRDb250ZW50XT1cInVpLm5vdEZvdW5kQ29udGVudFwiXG4gICAgICBbbnpDYW5Nb3ZlXT1cIl9jYW5Nb3ZlXCJcbiAgICAgIChuekNoYW5nZSk9XCJfY2hhbmdlKCRldmVudClcIlxuICAgICAgKG56U2VhcmNoQ2hhbmdlKT1cIl9zZWFyY2hDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAobnpTZWxlY3RDaGFuZ2UpPVwiX3NlbGVjdENoYW5nZSgkZXZlbnQpXCI+XG4gICAgPC9uei10cmFuc2Zlcj5cblxuICA8L3NmLWl0ZW0td3JhcD5cbiAgYCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIFRyYW5zZmVyV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGxpc3Q6IGFueVtdID0gW107XG4gIGk6IGFueTtcbiAgcHJpdmF0ZSBfZGF0YTogYW55W10gPSBbXTtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmkgPSB7XG4gICAgICB0aXRsZXM6IHRoaXMudWkudGl0bGVzIHx8IFsnJywgJyddLFxuICAgICAgb3BlcmF0aW9uczogdGhpcy51aS5vcGVyYXRpb25zIHx8IFsnJywgJyddLFxuICAgICAgaXRlbVVuaXQ6IHRoaXMudWkuaXRlbVVuaXQgfHwgJ+mhuScsXG4gICAgICBpdGVtc1VuaXQ6IHRoaXMudWkuaXRlbXNVbml0IHx8ICfpobknLFxuICAgIH07XG4gIH1cblxuICByZXNldCh2YWx1ZTogYW55KSB7XG4gICAgZ2V0RGF0YSh0aGlzLnNjaGVtYSwgdGhpcy51aSwgbnVsbCkuc3Vic2NyaWJlKGxpc3QgPT4ge1xuICAgICAgbGV0IGZvcm1EYXRhID0gdGhpcy5mb3JtUHJvcGVydHkuZm9ybURhdGE7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZm9ybURhdGEpKSBmb3JtRGF0YSA9IFtmb3JtRGF0YV07XG4gICAgICBsaXN0LmZvckVhY2goKGl0ZW06IFNGU2NoZW1hRW51bSkgPT4ge1xuICAgICAgICBpZiAofihmb3JtRGF0YSBhcyBhbnlbXSkuaW5kZXhPZihpdGVtLnZhbHVlKSkgaXRlbS5kaXJlY3Rpb24gPSAncmlnaHQnO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmxpc3QgPSBsaXN0O1xuICAgICAgdGhpcy5fZGF0YSA9IGxpc3QuZmlsdGVyKHcgPT4gdy5kaXJlY3Rpb24gPT09ICdyaWdodCcpO1xuICAgICAgdGhpcy5ub3RpZnkoKTtcbiAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBub3RpZnkoKSB7XG4gICAgdGhpcy5mb3JtUHJvcGVydHkuc2V0VmFsdWUodGhpcy5fZGF0YS5tYXAoaSA9PiBpLnZhbHVlKSwgZmFsc2UpO1xuICB9XG5cbiAgX2Nhbk1vdmUgPSAoYXJnOiBhbnkpOiBPYnNlcnZhYmxlPGFueVtdPiA9PiB7XG4gICAgcmV0dXJuIHRoaXMudWkuY2FuTW92ZSA/IHRoaXMudWkuY2FuTW92ZShhcmcpIDogb2YoYXJnLmxpc3QpO1xuICB9O1xuXG4gIF9jaGFuZ2Uob3B0aW9uczogYW55KSB7XG4gICAgaWYgKG9wdGlvbnMudG8gPT09ICdyaWdodCcpIHtcbiAgICAgIHRoaXMuX2RhdGEgPSB0aGlzLl9kYXRhLmNvbmNhdCguLi5vcHRpb25zLmxpc3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9kYXRhID0gdGhpcy5fZGF0YS5maWx0ZXIodyA9PiBvcHRpb25zLmxpc3QuaW5kZXhPZih3KSA9PT0gLTEpO1xuICAgIH1cbiAgICBpZiAodGhpcy51aS5jaGFuZ2UpIHRoaXMudWkuY2hhbmdlKG9wdGlvbnMpO1xuICAgIHRoaXMubm90aWZ5KCk7XG4gIH1cblxuICBfc2VhcmNoQ2hhbmdlKG9wdGlvbnM6IGFueSkge1xuICAgIGlmICh0aGlzLnVpLnNlYXJjaENoYW5nZSkgdGhpcy51aS5zZWFyY2hDaGFuZ2Uob3B0aW9ucyk7XG4gIH1cblxuICBfc2VsZWN0Q2hhbmdlKG9wdGlvbnM6IGFueSkge1xuICAgIGlmICh0aGlzLnVpLnNlbGVjdENoYW5nZSkgdGhpcy51aS5zZWxlY3RDaGFuZ2Uob3B0aW9ucyk7XG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cbn1cbiJdfQ==