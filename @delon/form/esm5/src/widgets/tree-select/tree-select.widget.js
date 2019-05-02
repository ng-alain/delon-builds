/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { getData, toBool } from '../../utils';
import { ControlWidget } from '../../widget';
var TreeSelectWidget = /** @class */ (function (_super) {
    tslib_1.__extends(TreeSelectWidget, _super);
    function TreeSelectWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.data = [];
        return _this;
    }
    /**
     * @return {?}
     */
    TreeSelectWidget.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var ui = this.ui;
        this.i = {
            allowClear: ui.allowClear,
            showSearch: toBool(ui.showSearch, false),
            dropdownMatchSelectWidth: toBool(ui.dropdownMatchSelectWidth, true),
            multiple: toBool(ui.multiple, false),
            checkable: toBool(ui.checkable, false),
            showExpand: toBool(ui.showExpand, true),
            showLine: toBool(ui.showLine, false),
            asyncData: typeof ui.expandChange === 'function',
            defaultExpandAll: toBool(ui.defaultExpandAll, false),
            defaultExpandedKeys: ui.defaultExpandedKeys || [],
            displayWith: ui.displayWith || ((/**
             * @param {?} node
             * @return {?}
             */
            function (node) { return node.title; })),
        };
    };
    /**
     * @param {?} _value
     * @return {?}
     */
    TreeSelectWidget.prototype.reset = /**
     * @param {?} _value
     * @return {?}
     */
    function (_value) {
        var _this = this;
        getData(this.schema, this.ui, this.formProperty.formData).subscribe((/**
         * @param {?} list
         * @return {?}
         */
        function (list) {
            _this.data = list;
            _this.detectChanges();
        }));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    TreeSelectWidget.prototype.change = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.ui.change)
            this.ui.change(value);
        this.setValue(value);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    TreeSelectWidget.prototype.expandChange = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        var ui = this.ui;
        if (typeof ui.expandChange !== 'function')
            return;
        ui.expandChange(e).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            (/** @type {?} */ (e.node)).clearChildren();
            (/** @type {?} */ (e.node)).addChildren(res);
            _this.detectChanges();
        }));
    };
    TreeSelectWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-tree-select',
                    template: "<sf-item-wrap [id]=\"id\"\n              [schema]=\"schema\"\n              [ui]=\"ui\"\n              [showError]=\"showError\"\n              [error]=\"error\"\n              [showTitle]=\"schema.title\">\n  <nz-tree-select [nzAllowClear]=\"i.allowClear\"\n                  [nzPlaceHolder]=\"ui.placeholder\"\n                  [nzDisabled]=\"disabled\"\n                  [nzShowSearch]=\"i.showSearch\"\n                  [nzDropdownMatchSelectWidth]=\"i.dropdownMatchSelectWidth\"\n                  [nzDropdownStyle]=\"ui.dropdownStyle\"\n                  [nzMultiple]=\"i.multiple\"\n                  [nzSize]=\"ui.size\"\n                  [nzCheckable]=\"i.checkable\"\n                  [nzShowExpand]=\"i.showExpand\"\n                  [nzShowLine]=\"i.showLine\"\n                  [nzAsyncData]=\"i.asyncData\"\n                  [nzNodes]=\"data\"\n                  [nzDefaultExpandAll]=\"i.defaultExpandAll\"\n                  [nzDefaultExpandedKeys]=\"i.defaultExpandedKeys\"\n                  [nzDisplayWith]=\"i.displayWith\"\n                  [ngModel]=\"value\"\n                  (ngModelChange)=\"change($event)\"\n                  (nzExpandChange)=\"expandChange($event)\">\n  </nz-tree-select>\n\n</sf-item-wrap>\n"
                }] }
    ];
    return TreeSelectWidget;
}(ControlWidget));
export { TreeSelectWidget };
if (false) {
    /** @type {?} */
    TreeSelectWidget.prototype.i;
    /** @type {?} */
    TreeSelectWidget.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1zZWxlY3Qud2lkZ2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy90cmVlLXNlbGVjdC90cmVlLXNlbGVjdC53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBSWxELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFN0M7SUFJc0MsNENBQWE7SUFKbkQ7UUFBQSxxRUE4Q0M7UUF4Q0MsVUFBSSxHQUFtQixFQUFFLENBQUM7O0lBd0M1QixDQUFDOzs7O0lBdENDLG1DQUFROzs7SUFBUjtRQUNVLElBQUEsWUFBRTtRQUNWLElBQUksQ0FBQyxDQUFDLEdBQUc7WUFDUCxVQUFVLEVBQUUsRUFBRSxDQUFDLFVBQVU7WUFDekIsVUFBVSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQztZQUN4Qyx3QkFBd0IsRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLHdCQUF3QixFQUFFLElBQUksQ0FBQztZQUNuRSxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDO1lBQ3BDLFNBQVMsRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUM7WUFDdEMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQztZQUN2QyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDO1lBQ3BDLFNBQVMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxZQUFZLEtBQUssVUFBVTtZQUNoRCxnQkFBZ0IsRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLEtBQUssQ0FBQztZQUNwRCxtQkFBbUIsRUFBRSxFQUFFLENBQUMsbUJBQW1CLElBQUksRUFBRTtZQUNqRCxXQUFXLEVBQUUsRUFBRSxDQUFDLFdBQVcsSUFBSTs7OztZQUFDLFVBQUMsSUFBUyxJQUFLLE9BQUEsSUFBSSxDQUFDLEtBQUssRUFBVixDQUFVLEVBQUM7U0FDM0QsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsZ0NBQUs7Ozs7SUFBTCxVQUFNLE1BQWU7UUFBckIsaUJBS0M7UUFKQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsSUFBSTtZQUN0RSxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELGlDQUFNOzs7O0lBQU4sVUFBTyxLQUF3QjtRQUM3QixJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTTtZQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCx1Q0FBWTs7OztJQUFaLFVBQWEsQ0FBb0I7UUFBakMsaUJBUUM7UUFQUyxJQUFBLFlBQUU7UUFDVixJQUFJLE9BQU8sRUFBRSxDQUFDLFlBQVksS0FBSyxVQUFVO1lBQUUsT0FBTztRQUNsRCxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLEdBQUc7WUFDOUIsbUJBQUEsQ0FBQyxDQUFDLElBQUksRUFBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3hCLG1CQUFBLENBQUMsQ0FBQyxJQUFJLEVBQUMsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDekIsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBN0NGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQiwydUNBQXdDO2lCQUN6Qzs7SUEyQ0QsdUJBQUM7Q0FBQSxBQTlDRCxDQUlzQyxhQUFhLEdBMENsRDtTQTFDWSxnQkFBZ0I7OztJQUMzQiw2QkFBTzs7SUFDUCxnQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpGb3JtYXRFbWl0RXZlbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuaW1wb3J0IHsgU0ZWYWx1ZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBTRlNjaGVtYUVudW0gfSBmcm9tICcuLi8uLi9zY2hlbWEnO1xuaW1wb3J0IHsgZ2V0RGF0YSwgdG9Cb29sIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXRyZWUtc2VsZWN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RyZWUtc2VsZWN0LndpZGdldC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVHJlZVNlbGVjdFdpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xuICBpOiBhbnk7XG4gIGRhdGE6IFNGU2NoZW1hRW51bVtdID0gW107XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgeyB1aSB9ID0gdGhpcztcbiAgICB0aGlzLmkgPSB7XG4gICAgICBhbGxvd0NsZWFyOiB1aS5hbGxvd0NsZWFyLFxuICAgICAgc2hvd1NlYXJjaDogdG9Cb29sKHVpLnNob3dTZWFyY2gsIGZhbHNlKSxcbiAgICAgIGRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aDogdG9Cb29sKHVpLmRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aCwgdHJ1ZSksXG4gICAgICBtdWx0aXBsZTogdG9Cb29sKHVpLm11bHRpcGxlLCBmYWxzZSksXG4gICAgICBjaGVja2FibGU6IHRvQm9vbCh1aS5jaGVja2FibGUsIGZhbHNlKSxcbiAgICAgIHNob3dFeHBhbmQ6IHRvQm9vbCh1aS5zaG93RXhwYW5kLCB0cnVlKSxcbiAgICAgIHNob3dMaW5lOiB0b0Jvb2wodWkuc2hvd0xpbmUsIGZhbHNlKSxcbiAgICAgIGFzeW5jRGF0YTogdHlwZW9mIHVpLmV4cGFuZENoYW5nZSA9PT0gJ2Z1bmN0aW9uJyxcbiAgICAgIGRlZmF1bHRFeHBhbmRBbGw6IHRvQm9vbCh1aS5kZWZhdWx0RXhwYW5kQWxsLCBmYWxzZSksXG4gICAgICBkZWZhdWx0RXhwYW5kZWRLZXlzOiB1aS5kZWZhdWx0RXhwYW5kZWRLZXlzIHx8IFtdLFxuICAgICAgZGlzcGxheVdpdGg6IHVpLmRpc3BsYXlXaXRoIHx8ICgobm9kZTogYW55KSA9PiBub2RlLnRpdGxlKSxcbiAgICB9O1xuICB9XG5cbiAgcmVzZXQoX3ZhbHVlOiBTRlZhbHVlKSB7XG4gICAgZ2V0RGF0YSh0aGlzLnNjaGVtYSwgdGhpcy51aSwgdGhpcy5mb3JtUHJvcGVydHkuZm9ybURhdGEpLnN1YnNjcmliZShsaXN0ID0+IHtcbiAgICAgIHRoaXMuZGF0YSA9IGxpc3Q7XG4gICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNoYW5nZSh2YWx1ZTogc3RyaW5nW10gfCBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy51aS5jaGFuZ2UpIHRoaXMudWkuY2hhbmdlKHZhbHVlKTtcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIGV4cGFuZENoYW5nZShlOiBOekZvcm1hdEVtaXRFdmVudCkge1xuICAgIGNvbnN0IHsgdWkgfSA9IHRoaXM7XG4gICAgaWYgKHR5cGVvZiB1aS5leHBhbmRDaGFuZ2UgIT09ICdmdW5jdGlvbicpIHJldHVybjtcbiAgICB1aS5leHBhbmRDaGFuZ2UoZSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICBlLm5vZGUhLmNsZWFyQ2hpbGRyZW4oKTtcbiAgICAgIGUubm9kZSEuYWRkQ2hpbGRyZW4ocmVzKTtcbiAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=