/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ControlWidget } from '../../widget';
import { getData, toBool } from '../../utils';
var CascaderWidget = /** @class */ (function (_super) {
    tslib_1.__extends(CascaderWidget, _super);
    function CascaderWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.data = [];
        return _this;
    }
    /**
     * @return {?}
     */
    CascaderWidget.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.clearText = this.ui["clearText"] || '清除';
        this.showArrow = toBool(this.ui["showArrow"], true);
        this.showInput = toBool(this.ui["showInput"], true);
        this.triggerAction = this.ui["triggerAction"] || ['click'];
        if (!!this.ui.asyncData) {
            this.loadData = function (node, index) {
                return (/** @type {?} */ (_this.ui.asyncData))(node, index, _this);
            };
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CascaderWidget.prototype.reset = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        getData(this.schema, this.ui, this.formProperty.formData).subscribe(function (list) {
            _this.data = list;
            _this.detectChanges();
        });
    };
    /**
     * @param {?} status
     * @return {?}
     */
    CascaderWidget.prototype._visibleChange = /**
     * @param {?} status
     * @return {?}
     */
    function (status) {
        this.ui["visibleChange"] && this.ui["visibleChange"](status);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CascaderWidget.prototype._change = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.setValue(value);
        this.ui["change"] && this.ui["change"](value);
    };
    /**
     * @param {?} options
     * @return {?}
     */
    CascaderWidget.prototype._selectionChange = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.ui["selectionChange"] && this.ui["selectionChange"](options);
    };
    /**
     * @param {?} options
     * @return {?}
     */
    CascaderWidget.prototype._select = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.ui["select"] && this.ui["select"](options);
    };
    /**
     * @param {?} options
     * @return {?}
     */
    CascaderWidget.prototype._clear = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.ui["clear"] && this.ui["clear"](options);
    };
    CascaderWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-cascader',
                    template: "\n  <sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n\n    <nz-cascader\n      [nzDisabled]=\"disabled\"\n      [nzSize]=\"ui.size\"\n      [ngModel]=\"value\"\n      (ngModelChange)=\"_change($event)\"\n      [nzOptions]=\"data\"\n      [nzAllowClear]=\"ui.allowClear\"\n      [nzAutoFocus]=\"ui.autoFocus\"\n      [nzChangeOn]=\"ui.changeOn\"\n      [nzChangeOnSelect]=\"ui.changeOnSelect\"\n      [nzColumnClassName]=\"ui.columnClassName\"\n      [nzExpandTrigger]=\"ui.expandTrigger\"\n      [nzMenuClassName]=\"ui.menuClassName\"\n      [nzMenuStyle]=\"ui.menuStyle\"\n      [nzLabelProperty]=\"ui.labelProperty\"\n      [nzValueProperty]=\"ui.valueProperty\"\n      [nzLoadData]=\"loadData\"\n      [nzPlaceHolder]=\"ui.placeholder\"\n      [nzShowArrow]=\"showArrow\"\n      [nzShowInput]=\"showInput\"\n      [nzShowSearch]=\"ui.showSearch\"\n      (nzClear)=\"_clear($event)\"\n      (nzVisibleChange)=\"_visibleChange($event)\"\n      (nzSelect)=\"_select($event)\"\n      (nzSelectionChange)=\"_selectionChange($event)\">\n    </nz-cascader>\n\n  </sf-item-wrap>\n  ",
                    preserveWhitespaces: false
                }] }
    ];
    return CascaderWidget;
}(ControlWidget));
export { CascaderWidget };
if (false) {
    /** @type {?} */
    CascaderWidget.prototype.clearText;
    /** @type {?} */
    CascaderWidget.prototype.showArrow;
    /** @type {?} */
    CascaderWidget.prototype.showInput;
    /** @type {?} */
    CascaderWidget.prototype.triggerAction;
    /** @type {?} */
    CascaderWidget.prototype.data;
    /** @type {?} */
    CascaderWidget.prototype.loadData;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FzY2FkZXIud2lkZ2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy9jYXNjYWRlci9jYXNjYWRlci53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDN0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7O0lBdUNWLDBDQUFhOzs7cUJBS3hCLEVBQUU7Ozs7OztJQUd6QixpQ0FBUTs7O0lBQVI7UUFBQSxpQkFTQztRQVJDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEVBQUUsaUJBQWMsSUFBSSxDQUFDO1FBQzNDLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLGVBQVksSUFBSSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsZUFBWSxJQUFJLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxFQUFFLHFCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBQyxJQUFTLEVBQUUsS0FBYTtnQkFDdkMsT0FBQSxtQkFBQyxLQUFJLENBQUMsRUFBRSxDQUFDLFNBQWdCLEVBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUksQ0FBQztZQUE3QyxDQUE2QyxDQUFDO1NBQ2pEO0tBQ0Y7Ozs7O0lBRUQsOEJBQUs7Ozs7SUFBTCxVQUFNLEtBQVU7UUFBaEIsaUJBT0M7UUFOQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUNqRSxVQUFBLElBQUk7WUFDRixLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDdEIsQ0FDRixDQUFDO0tBQ0g7Ozs7O0lBRUQsdUNBQWM7Ozs7SUFBZCxVQUFlLE1BQWU7UUFDNUIsSUFBSSxDQUFDLEVBQUUscUJBQWtCLElBQUksQ0FBQyxFQUFFLGtCQUFlLE1BQU0sQ0FBQyxDQUFDO0tBQ3hEOzs7OztJQUVELGdDQUFPOzs7O0lBQVAsVUFBUSxLQUFhO1FBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLEVBQUUsY0FBVyxJQUFJLENBQUMsRUFBRSxXQUFRLEtBQUssQ0FBQyxDQUFDO0tBQ3pDOzs7OztJQUVELHlDQUFnQjs7OztJQUFoQixVQUFpQixPQUFZO1FBQzNCLElBQUksQ0FBQyxFQUFFLHVCQUFvQixJQUFJLENBQUMsRUFBRSxvQkFBaUIsT0FBTyxDQUFDLENBQUM7S0FDN0Q7Ozs7O0lBRUQsZ0NBQU87Ozs7SUFBUCxVQUFRLE9BQVk7UUFDbEIsSUFBSSxDQUFDLEVBQUUsY0FBVyxJQUFJLENBQUMsRUFBRSxXQUFRLE9BQU8sQ0FBQyxDQUFDO0tBQzNDOzs7OztJQUVELCtCQUFNOzs7O0lBQU4sVUFBTyxPQUFZO1FBQ2pCLElBQUksQ0FBQyxFQUFFLGFBQVUsSUFBSSxDQUFDLEVBQUUsVUFBTyxPQUFPLENBQUMsQ0FBQztLQUN6Qzs7Z0JBbkZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsUUFBUSxFQUFFLDJvQ0ErQlQ7b0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztpQkFDM0I7O3lCQXhDRDtFQXlDb0MsYUFBYTtTQUFwQyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuaW1wb3J0IHsgZ2V0RGF0YSwgdG9Cb29sIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgU0ZTY2hlbWFFbnVtIH0gZnJvbSAnLi4vLi4vc2NoZW1hJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtY2FzY2FkZXInLFxuICB0ZW1wbGF0ZTogYFxuICA8c2YtaXRlbS13cmFwIFtpZF09XCJpZFwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW3VpXT1cInVpXCIgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIiBbZXJyb3JdPVwiZXJyb3JcIiBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiPlxuXG4gICAgPG56LWNhc2NhZGVyXG4gICAgICBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICBbbnpTaXplXT1cInVpLnNpemVcIlxuICAgICAgW25nTW9kZWxdPVwidmFsdWVcIlxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiX2NoYW5nZSgkZXZlbnQpXCJcbiAgICAgIFtuek9wdGlvbnNdPVwiZGF0YVwiXG4gICAgICBbbnpBbGxvd0NsZWFyXT1cInVpLmFsbG93Q2xlYXJcIlxuICAgICAgW256QXV0b0ZvY3VzXT1cInVpLmF1dG9Gb2N1c1wiXG4gICAgICBbbnpDaGFuZ2VPbl09XCJ1aS5jaGFuZ2VPblwiXG4gICAgICBbbnpDaGFuZ2VPblNlbGVjdF09XCJ1aS5jaGFuZ2VPblNlbGVjdFwiXG4gICAgICBbbnpDb2x1bW5DbGFzc05hbWVdPVwidWkuY29sdW1uQ2xhc3NOYW1lXCJcbiAgICAgIFtuekV4cGFuZFRyaWdnZXJdPVwidWkuZXhwYW5kVHJpZ2dlclwiXG4gICAgICBbbnpNZW51Q2xhc3NOYW1lXT1cInVpLm1lbnVDbGFzc05hbWVcIlxuICAgICAgW256TWVudVN0eWxlXT1cInVpLm1lbnVTdHlsZVwiXG4gICAgICBbbnpMYWJlbFByb3BlcnR5XT1cInVpLmxhYmVsUHJvcGVydHlcIlxuICAgICAgW256VmFsdWVQcm9wZXJ0eV09XCJ1aS52YWx1ZVByb3BlcnR5XCJcbiAgICAgIFtuekxvYWREYXRhXT1cImxvYWREYXRhXCJcbiAgICAgIFtuelBsYWNlSG9sZGVyXT1cInVpLnBsYWNlaG9sZGVyXCJcbiAgICAgIFtuelNob3dBcnJvd109XCJzaG93QXJyb3dcIlxuICAgICAgW256U2hvd0lucHV0XT1cInNob3dJbnB1dFwiXG4gICAgICBbbnpTaG93U2VhcmNoXT1cInVpLnNob3dTZWFyY2hcIlxuICAgICAgKG56Q2xlYXIpPVwiX2NsZWFyKCRldmVudClcIlxuICAgICAgKG56VmlzaWJsZUNoYW5nZSk9XCJfdmlzaWJsZUNoYW5nZSgkZXZlbnQpXCJcbiAgICAgIChuelNlbGVjdCk9XCJfc2VsZWN0KCRldmVudClcIlxuICAgICAgKG56U2VsZWN0aW9uQ2hhbmdlKT1cIl9zZWxlY3Rpb25DaGFuZ2UoJGV2ZW50KVwiPlxuICAgIDwvbnotY2FzY2FkZXI+XG5cbiAgPC9zZi1pdGVtLXdyYXA+XG4gIGAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBDYXNjYWRlcldpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjbGVhclRleHQ6IHN0cmluZztcbiAgc2hvd0Fycm93OiBib29sZWFuO1xuICBzaG93SW5wdXQ6IGJvb2xlYW47XG4gIHRyaWdnZXJBY3Rpb246IHN0cmluZ1tdO1xuICBkYXRhOiBTRlNjaGVtYUVudW1bXSA9IFtdO1xuICBsb2FkRGF0YTogYW55O1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYXJUZXh0ID0gdGhpcy51aS5jbGVhclRleHQgfHwgJ+a4hemZpCc7XG4gICAgdGhpcy5zaG93QXJyb3cgPSB0b0Jvb2wodGhpcy51aS5zaG93QXJyb3csIHRydWUpO1xuICAgIHRoaXMuc2hvd0lucHV0ID0gdG9Cb29sKHRoaXMudWkuc2hvd0lucHV0LCB0cnVlKTtcbiAgICB0aGlzLnRyaWdnZXJBY3Rpb24gPSB0aGlzLnVpLnRyaWdnZXJBY3Rpb24gfHwgWydjbGljayddO1xuICAgIGlmICghIXRoaXMudWkuYXN5bmNEYXRhKSB7XG4gICAgICB0aGlzLmxvYWREYXRhID0gKG5vZGU6IGFueSwgaW5kZXg6IG51bWJlcikgPT5cbiAgICAgICAgKHRoaXMudWkuYXN5bmNEYXRhIGFzIGFueSkobm9kZSwgaW5kZXgsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0KHZhbHVlOiBhbnkpIHtcbiAgICBnZXREYXRhKHRoaXMuc2NoZW1hLCB0aGlzLnVpLCB0aGlzLmZvcm1Qcm9wZXJ0eS5mb3JtRGF0YSkuc3Vic2NyaWJlKFxuICAgICAgbGlzdCA9PiB7XG4gICAgICAgIHRoaXMuZGF0YSA9IGxpc3Q7XG4gICAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfSxcbiAgICApO1xuICB9XG5cbiAgX3Zpc2libGVDaGFuZ2Uoc3RhdHVzOiBib29sZWFuKSB7XG4gICAgdGhpcy51aS52aXNpYmxlQ2hhbmdlICYmIHRoaXMudWkudmlzaWJsZUNoYW5nZShzdGF0dXMpO1xuICB9XG5cbiAgX2NoYW5nZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgdGhpcy51aS5jaGFuZ2UgJiYgdGhpcy51aS5jaGFuZ2UodmFsdWUpO1xuICB9XG5cbiAgX3NlbGVjdGlvbkNoYW5nZShvcHRpb25zOiBhbnkpIHtcbiAgICB0aGlzLnVpLnNlbGVjdGlvbkNoYW5nZSAmJiB0aGlzLnVpLnNlbGVjdGlvbkNoYW5nZShvcHRpb25zKTtcbiAgfVxuXG4gIF9zZWxlY3Qob3B0aW9uczogYW55KSB7XG4gICAgdGhpcy51aS5zZWxlY3QgJiYgdGhpcy51aS5zZWxlY3Qob3B0aW9ucyk7XG4gIH1cblxuICBfY2xlYXIob3B0aW9uczogYW55KSB7XG4gICAgdGhpcy51aS5jbGVhciAmJiB0aGlzLnVpLmNsZWFyKG9wdGlvbnMpO1xuICB9XG59XG4iXX0=