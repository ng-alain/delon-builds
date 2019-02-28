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
        this.cd.detectChanges();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmZXIud2lkZ2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy90cmFuc2Zlci90cmFuc2Zlci53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBUWxELE9BQU8sRUFBRSxFQUFFLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFHdEMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN0QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRTdDO0lBSW9DLDBDQUFhO0lBSmpEO1FBQUEscUVBK0RDO1FBMURDLFVBQUksR0FBbUIsRUFBRSxDQUFDO1FBRWxCLFdBQUssR0FBbUIsRUFBRSxDQUFDO1FBaUNuQyxjQUFROzs7O1FBQUcsVUFBQyxHQUFvQjtZQUM5QixPQUFPLEtBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvRCxDQUFDLEVBQUE7O0lBcUJILENBQUM7Ozs7SUF0REMsaUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLENBQUMsR0FBRztZQUNQLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7WUFDbEMsVUFBVSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQztZQUMxQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLElBQUksR0FBRztZQUNqQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLElBQUksR0FBRztT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SW9DLGFBQWEsR0EyRGhEO1NBM0RZLGNBQWM7OztJQUN6Qiw4QkFBMEI7O0lBQzFCLDJCQUFPOzs7OztJQUNQLCtCQUFtQzs7SUFpQ25DLGtDQUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIFRyYW5zZmVyQ2FuTW92ZSxcbiAgVHJhbnNmZXJDaGFuZ2UsXG4gIFRyYW5zZmVySXRlbSxcbiAgVHJhbnNmZXJTZWFyY2hDaGFuZ2UsXG4gIFRyYW5zZmVyU2VsZWN0Q2hhbmdlLFxufSBmcm9tICduZy16b3Jyby1hbnRkJztcbmltcG9ydCB7IG9mLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTRlZhbHVlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IFNGU2NoZW1hRW51bSB9IGZyb20gJy4uLy4uL3NjaGVtYSc7XG5pbXBvcnQgeyBnZXREYXRhIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXRyYW5zZmVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RyYW5zZmVyLndpZGdldC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVHJhbnNmZXJXaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcbiAgbGlzdDogU0ZTY2hlbWFFbnVtW10gPSBbXTtcbiAgaTogYW55O1xuICBwcml2YXRlIF9kYXRhOiBTRlNjaGVtYUVudW1bXSA9IFtdO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaSA9IHtcbiAgICAgIHRpdGxlczogdGhpcy51aS50aXRsZXMgfHwgWycnLCAnJ10sXG4gICAgICBvcGVyYXRpb25zOiB0aGlzLnVpLm9wZXJhdGlvbnMgfHwgWycnLCAnJ10sXG4gICAgICBpdGVtVW5pdDogdGhpcy51aS5pdGVtVW5pdCB8fCAn6aG5JyxcbiAgICAgIGl0ZW1zVW5pdDogdGhpcy51aS5pdGVtc1VuaXQgfHwgJ+mhuScsXG4gICAgfTtcbiAgfVxuXG4gIHJlc2V0KHZhbHVlOiBTRlZhbHVlKSB7XG4gICAgZ2V0RGF0YSh0aGlzLnNjaGVtYSwgdGhpcy51aSwgbnVsbCkuc3Vic2NyaWJlKGxpc3QgPT4ge1xuICAgICAgbGV0IGZvcm1EYXRhID0gdGhpcy5mb3JtUHJvcGVydHkuZm9ybURhdGE7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZm9ybURhdGEpKSB7XG4gICAgICAgIGZvcm1EYXRhID0gW2Zvcm1EYXRhXTtcbiAgICAgIH1cbiAgICAgIGxpc3QuZm9yRWFjaCgoaXRlbTogU0ZTY2hlbWFFbnVtKSA9PiB7XG4gICAgICAgIGlmICh+KGZvcm1EYXRhIGFzIGFueVtdKS5pbmRleE9mKGl0ZW0udmFsdWUpKSB7XG4gICAgICAgICAgaXRlbS5kaXJlY3Rpb24gPSAncmlnaHQnO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMubGlzdCA9IGxpc3Q7XG4gICAgICB0aGlzLl9kYXRhID0gbGlzdC5maWx0ZXIodyA9PiB3LmRpcmVjdGlvbiA9PT0gJ3JpZ2h0Jyk7XG4gICAgICB0aGlzLm5vdGlmeSgpO1xuICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIG5vdGlmeSgpIHtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5zZXRWYWx1ZSh0aGlzLl9kYXRhLm1hcChpID0+IGkudmFsdWUpLCBmYWxzZSk7XG4gIH1cblxuICBfY2FuTW92ZSA9IChhcmc6IFRyYW5zZmVyQ2FuTW92ZSk6IE9ic2VydmFibGU8VHJhbnNmZXJJdGVtW10+ID0+IHtcbiAgICByZXR1cm4gdGhpcy51aS5jYW5Nb3ZlID8gdGhpcy51aS5jYW5Nb3ZlKGFyZykgOiBvZihhcmcubGlzdCk7XG4gIH1cblxuICBfY2hhbmdlKG9wdGlvbnM6IFRyYW5zZmVyQ2hhbmdlKSB7XG4gICAgaWYgKG9wdGlvbnMudG8gPT09ICdyaWdodCcpIHtcbiAgICAgIHRoaXMuX2RhdGEgPSB0aGlzLl9kYXRhLmNvbmNhdCguLi5vcHRpb25zLmxpc3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9kYXRhID0gdGhpcy5fZGF0YS5maWx0ZXIoKHc6IGFueSkgPT4gb3B0aW9ucy5saXN0LmluZGV4T2YodykgPT09IC0xKTtcbiAgICB9XG4gICAgaWYgKHRoaXMudWkuY2hhbmdlKSB0aGlzLnVpLmNoYW5nZShvcHRpb25zKTtcbiAgICB0aGlzLm5vdGlmeSgpO1xuICB9XG5cbiAgX3NlYXJjaENoYW5nZShvcHRpb25zOiBUcmFuc2ZlclNlYXJjaENoYW5nZSkge1xuICAgIGlmICh0aGlzLnVpLnNlYXJjaENoYW5nZSkgdGhpcy51aS5zZWFyY2hDaGFuZ2Uob3B0aW9ucyk7XG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBfc2VsZWN0Q2hhbmdlKG9wdGlvbnM6IFRyYW5zZmVyU2VsZWN0Q2hhbmdlKSB7XG4gICAgaWYgKHRoaXMudWkuc2VsZWN0Q2hhbmdlKSB0aGlzLnVpLnNlbGVjdENoYW5nZShvcHRpb25zKTtcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgfVxufVxuIl19