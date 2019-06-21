/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { getData } from '../../utils';
import { ControlWidget } from '../../widget';
var CheckboxWidget = /** @class */ (function (_super) {
    tslib_1.__extends(CheckboxWidget, _super);
    function CheckboxWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.data = [];
        _this.allChecked = false;
        _this.indeterminate = false;
        _this.labelTitle = "";
        _this.inited = false;
        return _this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    CheckboxWidget.prototype.reset = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        this.inited = false;
        getData(this.schema, this.ui, value).subscribe((/**
         * @param {?} list
         * @return {?}
         */
        function (list) {
            _this.data = list;
            _this.allChecked = false;
            _this.indeterminate = false;
            _this.labelTitle = list.length === 0 ? '' : ((/** @type {?} */ (_this.schema.title)));
            _this.grid_span = _this.ui.span && _this.ui.span > 0 ? _this.ui.span : 0;
            _this.updateAllChecked();
            _this.inited = true;
            _this.detectChanges();
        }));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CheckboxWidget.prototype._setValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.setValue(value);
        this.detectChanges();
        this.notifyChange(value);
    };
    /**
     * @return {?}
     */
    CheckboxWidget.prototype.notifySet = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var checkList = this.data.filter((/**
         * @param {?} w
         * @return {?}
         */
        function (w) { return w.checked; }));
        this.updateAllChecked().setValue(checkList.map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.value; })));
        this.notifyChange(checkList);
    };
    /**
     * @param {?} values
     * @return {?}
     */
    CheckboxWidget.prototype.groupInGridChange = /**
     * @param {?} values
     * @return {?}
     */
    function (values) {
        this.data.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return (item.checked = values.indexOf(item.value) !== -1); }));
        this.notifySet();
    };
    /**
     * @return {?}
     */
    CheckboxWidget.prototype.onAllChecked = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.data.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return (item.checked = _this.allChecked); }));
        this.notifySet();
    };
    /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    CheckboxWidget.prototype.updateAllChecked = /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    function () {
        if ((/** @type {?} */ (this)).data.every((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.checked !== true; }))) {
            (/** @type {?} */ (this)).allChecked = false;
            (/** @type {?} */ (this)).indeterminate = false;
        }
        else if ((/** @type {?} */ (this)).data.every((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.checked === true; }))) {
            (/** @type {?} */ (this)).allChecked = true;
            (/** @type {?} */ (this)).indeterminate = false;
        }
        else {
            (/** @type {?} */ (this)).indeterminate = true;
        }
        (/** @type {?} */ (this)).detectChanges();
        return (/** @type {?} */ (this));
    };
    /**
     * @private
     * @param {?} res
     * @return {?}
     */
    CheckboxWidget.prototype.notifyChange = /**
     * @private
     * @param {?} res
     * @return {?}
     */
    function (res) {
        if (this.ui.change)
            this.ui.change(res);
    };
    CheckboxWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-checkbox',
                    template: "<ng-template #all>\n  <label *ngIf=\"ui.checkAll\"\n         nz-checkbox\n         class=\"sf__checkbox-all mr-sm\"\n         [(ngModel)]=\"allChecked\"\n         (ngModelChange)=\"onAllChecked()\"\n         [nzIndeterminate]=\"indeterminate\">{{ ui.checkAllText || l.checkAllText }}</label>\n</ng-template>\n<sf-item-wrap [id]=\"id\"\n              [schema]=\"schema\"\n              [ui]=\"ui\"\n              [showError]=\"showError\"\n              [error]=\"error\"\n              [showTitle]=\"true\"\n              [title]=\"labelTitle\">\n  <ng-container *ngIf=\"inited && data.length === 0\">\n    <label nz-checkbox\n           [nzDisabled]=\"disabled\"\n           [ngModel]=\"value\"\n           (ngModelChange)=\"_setValue($event)\">\n      {{schema.title}}\n      <span class=\"sf__optional\">\n        {{ ui.optional }}\n        <nz-tooltip *ngIf=\"oh\"\n          [nzTitle]=\"oh.text\" [nzPlacement]=\"oh.placement\" [nzTrigger]=\"oh.trigger\"\n          [nzOverlayClassName]=\"oh.overlayClassName\" [nzOverlayStyle]=\"oh.overlayStyle\"\n          [nzMouseEnterDelay]=\"oh.mouseEnterDelay\" [nzMouseLeaveDelay]=\"oh.mouseLeaveDelay\">\n          <i nz-tooltip nz-icon [nzType]=\"oh.icon\"></i>\n        </nz-tooltip>\n      </span>\n    </label>\n  </ng-container>\n  <ng-container *ngIf=\"inited && data.length > 0\">\n    <ng-container *ngIf=\"grid_span === 0\">\n      <ng-template [ngTemplateOutlet]=\"all\"></ng-template>\n      <nz-checkbox-group [ngModel]=\"data\"\n                         (ngModelChange)=\"notifySet()\"></nz-checkbox-group>\n    </ng-container>\n    <ng-container *ngIf=\"grid_span !== 0\">\n      <nz-checkbox-wrapper class=\"sf__checkbox-list\"\n                           (nzOnChange)=\"groupInGridChange($event)\">\n        <nz-row>\n          <nz-col [nzSpan]=\"grid_span\"\n                  *ngIf=\"ui.checkAll\">\n            <ng-template [ngTemplateOutlet]=\"all\"></ng-template>\n          </nz-col>\n          <nz-col [nzSpan]=\"grid_span\"\n                  *ngFor=\"let i of data\">\n            <label nz-checkbox\n                   [nzValue]=\"i.value\"\n                   [ngModel]=\"i.checked\"\n                   [nzDisabled]=\"i.disabled\">{{i.label}}</label>\n          </nz-col>\n        </nz-row>\n      </nz-checkbox-wrapper>\n    </ng-container>\n  </ng-container>\n</sf-item-wrap>\n",
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    return CheckboxWidget;
}(ControlWidget));
export { CheckboxWidget };
if (false) {
    /** @type {?} */
    CheckboxWidget.prototype.data;
    /** @type {?} */
    CheckboxWidget.prototype.allChecked;
    /** @type {?} */
    CheckboxWidget.prototype.indeterminate;
    /** @type {?} */
    CheckboxWidget.prototype.grid_span;
    /** @type {?} */
    CheckboxWidget.prototype.labelTitle;
    /** @type {?} */
    CheckboxWidget.prototype.inited;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gud2lkZ2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy9jaGVja2JveC9jaGVja2JveC53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzdELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDdEMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUU3QztJQU1vQywwQ0FBYTtJQU5qRDtRQUFBLHFFQW9FQztRQTdEQyxVQUFJLEdBQW1CLEVBQUUsQ0FBQztRQUMxQixnQkFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixtQkFBYSxHQUFHLEtBQUssQ0FBQztRQUV0QixnQkFBVSxHQUFXLEVBQUUsQ0FBQztRQUN4QixZQUFNLEdBQUcsS0FBSyxDQUFDOztJQXdEakIsQ0FBQzs7Ozs7SUF0REMsOEJBQUs7Ozs7SUFBTCxVQUFNLEtBQWM7UUFBcEIsaUJBYUM7UUFaQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLElBQUk7WUFDakQsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDeEIsS0FBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFVLENBQUMsQ0FBQztZQUN6RSxL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QUFZOzs7OztJQUFwQixVQUFxQixHQUE2QjtRQUNoRCxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTTtZQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFDLENBQUM7O2dCQW5FRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLDh6RUFBcUM7b0JBQ3JDLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUN0Qzs7SUErREQscUJBQUM7Q0FBQSxBQXBFRCxDQU1vQyxhQUFhLEdBOERoRDtTQTlEWSxjQUFjOzs7SUFDekIsOEJBQTBCOztJQUMxQixvQ0FBbUI7O0lBQ25CLHVDQUFzQjs7SUFDdEIsbUNBQWtCOztJQUNsQixvQ0FBd0I7O0lBQ3hCLGdDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU0ZWYWx1ZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBTRlNjaGVtYUVudW0gfSBmcm9tICcuLi8uLi9zY2hlbWEnO1xuaW1wb3J0IHsgZ2V0RGF0YSB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1jaGVja2JveCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGVja2JveC53aWRnZXQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja2JveFdpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQge1xuICBkYXRhOiBTRlNjaGVtYUVudW1bXSA9IFtdO1xuICBhbGxDaGVja2VkID0gZmFsc2U7XG4gIGluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgZ3JpZF9zcGFuOiBudW1iZXI7XG4gIGxhYmVsVGl0bGU6IHN0cmluZyA9IGBgO1xuICBpbml0ZWQgPSBmYWxzZTtcblxuICByZXNldCh2YWx1ZTogU0ZWYWx1ZSkge1xuICAgIHRoaXMuaW5pdGVkID0gZmFsc2U7XG4gICAgZ2V0RGF0YSh0aGlzLnNjaGVtYSwgdGhpcy51aSwgdmFsdWUpLnN1YnNjcmliZShsaXN0ID0+IHtcbiAgICAgIHRoaXMuZGF0YSA9IGxpc3Q7XG4gICAgICB0aGlzLmFsbENoZWNrZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5sYWJlbFRpdGxlID0gbGlzdC5sZW5ndGggPT09IDAgPyAnJyA6ICh0aGlzLnNjaGVtYS50aXRsZSBhcyBzdHJpbmcpO1xuICAgICAgdGhpcy5ncmlkX3NwYW4gPSB0aGlzLnVpLnNwYW4gJiYgdGhpcy51aS5zcGFuID4gMCA/IHRoaXMudWkuc3BhbiA6IDA7XG5cbiAgICAgIHRoaXMudXBkYXRlQWxsQ2hlY2tlZCgpO1xuICAgICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xuICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH1cblxuICBfc2V0VmFsdWUodmFsdWU6IFNGVmFsdWUpIHtcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICB0aGlzLm5vdGlmeUNoYW5nZSh2YWx1ZSk7XG4gIH1cblxuICBub3RpZnlTZXQoKSB7XG4gICAgY29uc3QgY2hlY2tMaXN0ID0gdGhpcy5kYXRhLmZpbHRlcih3ID0+IHcuY2hlY2tlZCk7XG4gICAgdGhpcy51cGRhdGVBbGxDaGVja2VkKCkuc2V0VmFsdWUoY2hlY2tMaXN0Lm1hcChpdGVtID0+IGl0ZW0udmFsdWUpKTtcbiAgICB0aGlzLm5vdGlmeUNoYW5nZShjaGVja0xpc3QpO1xuICB9XG5cbiAgZ3JvdXBJbkdyaWRDaGFuZ2UodmFsdWVzOiBTRlZhbHVlW10pIHtcbiAgICB0aGlzLmRhdGEuZm9yRWFjaChpdGVtID0+IChpdGVtLmNoZWNrZWQgPSB2YWx1ZXMuaW5kZXhPZihpdGVtLnZhbHVlKSAhPT0gLTEpKTtcbiAgICB0aGlzLm5vdGlmeVNldCgpO1xuICB9XG5cbiAgb25BbGxDaGVja2VkKCkge1xuICAgIHRoaXMuZGF0YS5mb3JFYWNoKGl0ZW0gPT4gKGl0ZW0uY2hlY2tlZCA9IHRoaXMuYWxsQ2hlY2tlZCkpO1xuICAgIHRoaXMubm90aWZ5U2V0KCk7XG4gIH1cblxuICB1cGRhdGVBbGxDaGVja2VkKCk6IHRoaXMge1xuICAgIGlmICh0aGlzLmRhdGEuZXZlcnkoaXRlbSA9PiBpdGVtLmNoZWNrZWQgIT09IHRydWUpKSB7XG4gICAgICB0aGlzLmFsbENoZWNrZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5kYXRhLmV2ZXJ5KGl0ZW0gPT4gaXRlbS5jaGVja2VkID09PSB0cnVlKSkge1xuICAgICAgdGhpcy5hbGxDaGVja2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMuaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmluZGV0ZXJtaW5hdGUgPSB0cnVlO1xuICAgIH1cbiAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByaXZhdGUgbm90aWZ5Q2hhbmdlKHJlczogYm9vbGVhbiB8IFNGU2NoZW1hRW51bVtdKSB7XG4gICAgaWYgKHRoaXMudWkuY2hhbmdlKSB0aGlzLnVpLmNoYW5nZShyZXMpO1xuICB9XG59XG4iXX0=