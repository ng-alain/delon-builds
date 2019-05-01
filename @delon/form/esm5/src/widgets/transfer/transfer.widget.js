/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        _this._canMove = (/**
         * @param {?} arg
         * @return {?}
         */
        function (arg) {
            return _this.ui.canMove ? _this.ui.canMove(arg) : of(arg.list);
        });
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
        getData(this.schema, this.ui, null).subscribe((/**
         * @param {?} list
         * @return {?}
         */
        function (list) {
            /** @type {?} */
            var formData = _this.formProperty.formData;
            if (!Array.isArray(formData)) {
                formData = [formData];
            }
            list.forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                if (~((/** @type {?} */ (formData))).indexOf(item.value)) {
                    item.direction = 'right';
                }
            }));
            _this.list = list;
            _this._data = list.filter((/**
             * @param {?} w
             * @return {?}
             */
            function (w) { return w.direction === 'right'; }));
            _this.notify();
            _this.detectChanges();
        }));
    };
    /**
     * @private
     * @return {?}
     */
    TransferWidget.prototype.notify = /**
     * @private
     * @return {?}
     */
    function () {
        this.formProperty.setValue(this._data.map((/**
         * @param {?} i
         * @return {?}
         */
        function (i) { return i.value; })), false);
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
            this._data = this._data.filter((/**
             * @param {?} w
             * @return {?}
             */
            function (w) { return options.list.indexOf(w) === -1; }));
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
        this.detectChanges();
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
        this.detectChanges();
    };
    TransferWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-transfer',
                    template: "<sf-item-wrap [id]=\"id\"\n              [schema]=\"schema\"\n              [ui]=\"ui\"\n              [showError]=\"showError\"\n              [error]=\"error\"\n              [showTitle]=\"schema.title\">\n\n  <nz-transfer [nzDataSource]=\"list\"\n               [nzTitles]=\"i.titles\"\n               [nzOperations]=\"i.operations\"\n               [nzListStyle]=\"ui.listStyle\"\n               [nzItemUnit]=\"i.itemUnit\"\n               [nzItemsUnit]=\"i.itemsUnit\"\n               [nzShowSearch]=\"ui.showSearch\"\n               [nzFilterOption]=\"ui.filterOption\"\n               [nzSearchPlaceholder]=\"ui.searchPlaceholder\"\n               [nzNotFoundContent]=\"ui.notFoundContent\"\n               [nzCanMove]=\"_canMove\"\n               (nzChange)=\"_change($event)\"\n               (nzSearchChange)=\"_searchChange($event)\"\n               (nzSelectChange)=\"_selectChange($event)\">\n  </nz-transfer>\n\n</sf-item-wrap>\n"
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
    /**
     * @type {?}
     * @private
     */
    TransferWidget.prototype._data;
    /** @type {?} */
    TransferWidget.prototype._canMove;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmZXIud2lkZ2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy90cmFuc2Zlci90cmFuc2Zlci53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBUWxELE9BQU8sRUFBRSxFQUFFLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFHdEMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN0QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRTdDO0lBSW9DLDBDQUFhO0lBSmpEO1FBQUEscUVBK0RDO1FBMURDLFVBQUksR0FBbUIsRUFBRSxDQUFDO1FBRWxCLFdBQUssR0FBbUIsRUFBRSxDQUFDO1FBaUNuQyxjQUFROzs7O1FBQUcsVUFBQyxHQUFvQjtZQUM5QixPQUFPLEtBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvRCxDQUFDLEVBQUM7O0lBcUJKLENBQUM7Ozs7SUF0REMsaUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLENBQUMsR0FBRztZQUNQLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7WUFDbEMsVUFBVSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQztZQUMxQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLElBQUksR0FBRztZQUNqQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLElBQUksR0FBRztT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WSxjQUFjOzs7SUFDekIsOEJBQTBCOztJQUMxQiwyQkFBTzs7Ozs7SUFDUCwrQkFBbUM7O0lBaUNuQyxrQ0FFRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBUcmFuc2ZlckNhbk1vdmUsXG4gIFRyYW5zZmVyQ2hhbmdlLFxuICBUcmFuc2Zlckl0ZW0sXG4gIFRyYW5zZmVyU2VhcmNoQ2hhbmdlLFxuICBUcmFuc2ZlclNlbGVjdENoYW5nZSxcbn0gZnJvbSAnbmctem9ycm8tYW50ZC90cmFuc2Zlcic7XG5pbXBvcnQgeyBvZiwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU0ZWYWx1ZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBTRlNjaGVtYUVudW0gfSBmcm9tICcuLi8uLi9zY2hlbWEnO1xuaW1wb3J0IHsgZ2V0RGF0YSB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi10cmFuc2ZlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi90cmFuc2Zlci53aWRnZXQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRyYW5zZmVyV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGxpc3Q6IFNGU2NoZW1hRW51bVtdID0gW107XG4gIGk6IGFueTtcbiAgcHJpdmF0ZSBfZGF0YTogU0ZTY2hlbWFFbnVtW10gPSBbXTtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmkgPSB7XG4gICAgICB0aXRsZXM6IHRoaXMudWkudGl0bGVzIHx8IFsnJywgJyddLFxuICAgICAgb3BlcmF0aW9uczogdGhpcy51aS5vcGVyYXRpb25zIHx8IFsnJywgJyddLFxuICAgICAgaXRlbVVuaXQ6IHRoaXMudWkuaXRlbVVuaXQgfHwgJ+mhuScsXG4gICAgICBpdGVtc1VuaXQ6IHRoaXMudWkuaXRlbXNVbml0IHx8ICfpobknLFxuICAgIH07XG4gIH1cblxuICByZXNldCh2YWx1ZTogU0ZWYWx1ZSkge1xuICAgIGdldERhdGEodGhpcy5zY2hlbWEsIHRoaXMudWksIG51bGwpLnN1YnNjcmliZShsaXN0ID0+IHtcbiAgICAgIGxldCBmb3JtRGF0YSA9IHRoaXMuZm9ybVByb3BlcnR5LmZvcm1EYXRhO1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGZvcm1EYXRhKSkge1xuICAgICAgICBmb3JtRGF0YSA9IFtmb3JtRGF0YV07XG4gICAgICB9XG4gICAgICBsaXN0LmZvckVhY2goKGl0ZW06IFNGU2NoZW1hRW51bSkgPT4ge1xuICAgICAgICBpZiAofihmb3JtRGF0YSBhcyBhbnlbXSkuaW5kZXhPZihpdGVtLnZhbHVlKSkge1xuICAgICAgICAgIGl0ZW0uZGlyZWN0aW9uID0gJ3JpZ2h0JztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmxpc3QgPSBsaXN0O1xuICAgICAgdGhpcy5fZGF0YSA9IGxpc3QuZmlsdGVyKHcgPT4gdy5kaXJlY3Rpb24gPT09ICdyaWdodCcpO1xuICAgICAgdGhpcy5ub3RpZnkoKTtcbiAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBub3RpZnkoKSB7XG4gICAgdGhpcy5mb3JtUHJvcGVydHkuc2V0VmFsdWUodGhpcy5fZGF0YS5tYXAoaSA9PiBpLnZhbHVlKSwgZmFsc2UpO1xuICB9XG5cbiAgX2Nhbk1vdmUgPSAoYXJnOiBUcmFuc2ZlckNhbk1vdmUpOiBPYnNlcnZhYmxlPFRyYW5zZmVySXRlbVtdPiA9PiB7XG4gICAgcmV0dXJuIHRoaXMudWkuY2FuTW92ZSA/IHRoaXMudWkuY2FuTW92ZShhcmcpIDogb2YoYXJnLmxpc3QpO1xuICB9O1xuXG4gIF9jaGFuZ2Uob3B0aW9uczogVHJhbnNmZXJDaGFuZ2UpIHtcbiAgICBpZiAob3B0aW9ucy50byA9PT0gJ3JpZ2h0Jykge1xuICAgICAgdGhpcy5fZGF0YSA9IHRoaXMuX2RhdGEuY29uY2F0KC4uLm9wdGlvbnMubGlzdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2RhdGEgPSB0aGlzLl9kYXRhLmZpbHRlcigodzogYW55KSA9PiBvcHRpb25zLmxpc3QuaW5kZXhPZih3KSA9PT0gLTEpO1xuICAgIH1cbiAgICBpZiAodGhpcy51aS5jaGFuZ2UpIHRoaXMudWkuY2hhbmdlKG9wdGlvbnMpO1xuICAgIHRoaXMubm90aWZ5KCk7XG4gIH1cblxuICBfc2VhcmNoQ2hhbmdlKG9wdGlvbnM6IFRyYW5zZmVyU2VhcmNoQ2hhbmdlKSB7XG4gICAgaWYgKHRoaXMudWkuc2VhcmNoQ2hhbmdlKSB0aGlzLnVpLnNlYXJjaENoYW5nZShvcHRpb25zKTtcbiAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIF9zZWxlY3RDaGFuZ2Uob3B0aW9uczogVHJhbnNmZXJTZWxlY3RDaGFuZ2UpIHtcbiAgICBpZiAodGhpcy51aS5zZWxlY3RDaGFuZ2UpIHRoaXMudWkuc2VsZWN0Q2hhbmdlKG9wdGlvbnMpO1xuICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG59XG4iXX0=