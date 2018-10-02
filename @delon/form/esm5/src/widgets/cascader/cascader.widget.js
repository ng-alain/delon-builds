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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FzY2FkZXIud2lkZ2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy9jYXNjYWRlci9jYXNjYWRlci53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDN0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7O0lBdUNWLDBDQUFhOzs7cUJBS3hCLEVBQUU7Ozs7OztJQUd6QixpQ0FBUTs7O0lBQVI7UUFBQSxpQkFTQztRQVJDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEVBQUUsaUJBQWMsSUFBSSxDQUFDO1FBQzNDLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLGVBQVksSUFBSSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsZUFBWSxJQUFJLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxFQUFFLHFCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBQyxJQUFTLEVBQUUsS0FBYTtnQkFDdkMsT0FBQSxtQkFBQyxLQUFJLENBQUMsRUFBRSxDQUFDLFNBQWdCLEVBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUksQ0FBQztZQUE3QyxDQUE2QyxDQUFDO1NBQ2pEO0tBQ0Y7Ozs7O0lBRUQsOEJBQUs7Ozs7SUFBTCxVQUFNLEtBQVU7UUFBaEIsaUJBT0M7UUFOQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUNqRSxVQUFBLElBQUk7WUFDRixLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDdEIsQ0FDRixDQUFDO0tBQ0g7Ozs7O0lBRUQsdUNBQWM7Ozs7SUFBZCxVQUFlLE1BQWU7UUFDNUIsSUFBSSxDQUFDLEVBQUUscUJBQWtCLElBQUksQ0FBQyxFQUFFLGtCQUFlLE1BQU0sQ0FBQyxDQUFDO0tBQ3hEOzs7OztJQUVELGdDQUFPOzs7O0lBQVAsVUFBUSxLQUFhO1FBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLEVBQUUsY0FBVyxJQUFJLENBQUMsRUFBRSxXQUFRLEtBQUssQ0FBQyxDQUFDO0tBQ3pDOzs7OztJQUVELHlDQUFnQjs7OztJQUFoQixVQUFpQixPQUFZO1FBQzNCLElBQUksQ0FBQyxFQUFFLHVCQUFvQixJQUFJLENBQUMsRUFBRSxvQkFBaUIsT0FBTyxDQUFDLENBQUM7S0FDN0Q7Ozs7O0lBRUQsZ0NBQU87Ozs7SUFBUCxVQUFRLE9BQVk7UUFDbEIsSUFBSSxDQUFDLEVBQUUsY0FBVyxJQUFJLENBQUMsRUFBRSxXQUFRLE9BQU8sQ0FBQyxDQUFDO0tBQzNDOzs7OztJQUVELCtCQUFNOzs7O0lBQU4sVUFBTyxPQUFZO1FBQ2pCLElBQUksQ0FBQyxFQUFFLGFBQVUsSUFBSSxDQUFDLEVBQUUsVUFBTyxPQUFPLENBQUMsQ0FBQztLQUN6Qzs7Z0JBbkZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsUUFBUSxFQUFFLDJvQ0ErQlQ7b0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztpQkFDM0I7O3lCQXhDRDtFQXlDb0MsYUFBYTtTQUFwQyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XHJcbmltcG9ydCB7IGdldERhdGEsIHRvQm9vbCB9IGZyb20gJy4uLy4uL3V0aWxzJztcclxuaW1wb3J0IHsgU0ZTY2hlbWFFbnVtIH0gZnJvbSAnLi4vLi4vc2NoZW1hJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc2YtY2FzY2FkZXInLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cclxuXHJcbiAgICA8bnotY2FzY2FkZXJcclxuICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICBbbnpTaXplXT1cInVpLnNpemVcIlxyXG4gICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXHJcbiAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIl9jaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgIFtuek9wdGlvbnNdPVwiZGF0YVwiXHJcbiAgICAgIFtuekFsbG93Q2xlYXJdPVwidWkuYWxsb3dDbGVhclwiXHJcbiAgICAgIFtuekF1dG9Gb2N1c109XCJ1aS5hdXRvRm9jdXNcIlxyXG4gICAgICBbbnpDaGFuZ2VPbl09XCJ1aS5jaGFuZ2VPblwiXHJcbiAgICAgIFtuekNoYW5nZU9uU2VsZWN0XT1cInVpLmNoYW5nZU9uU2VsZWN0XCJcclxuICAgICAgW256Q29sdW1uQ2xhc3NOYW1lXT1cInVpLmNvbHVtbkNsYXNzTmFtZVwiXHJcbiAgICAgIFtuekV4cGFuZFRyaWdnZXJdPVwidWkuZXhwYW5kVHJpZ2dlclwiXHJcbiAgICAgIFtuek1lbnVDbGFzc05hbWVdPVwidWkubWVudUNsYXNzTmFtZVwiXHJcbiAgICAgIFtuek1lbnVTdHlsZV09XCJ1aS5tZW51U3R5bGVcIlxyXG4gICAgICBbbnpMYWJlbFByb3BlcnR5XT1cInVpLmxhYmVsUHJvcGVydHlcIlxyXG4gICAgICBbbnpWYWx1ZVByb3BlcnR5XT1cInVpLnZhbHVlUHJvcGVydHlcIlxyXG4gICAgICBbbnpMb2FkRGF0YV09XCJsb2FkRGF0YVwiXHJcbiAgICAgIFtuelBsYWNlSG9sZGVyXT1cInVpLnBsYWNlaG9sZGVyXCJcclxuICAgICAgW256U2hvd0Fycm93XT1cInNob3dBcnJvd1wiXHJcbiAgICAgIFtuelNob3dJbnB1dF09XCJzaG93SW5wdXRcIlxyXG4gICAgICBbbnpTaG93U2VhcmNoXT1cInVpLnNob3dTZWFyY2hcIlxyXG4gICAgICAobnpDbGVhcik9XCJfY2xlYXIoJGV2ZW50KVwiXHJcbiAgICAgIChuelZpc2libGVDaGFuZ2UpPVwiX3Zpc2libGVDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgIChuelNlbGVjdCk9XCJfc2VsZWN0KCRldmVudClcIlxyXG4gICAgICAobnpTZWxlY3Rpb25DaGFuZ2UpPVwiX3NlbGVjdGlvbkNoYW5nZSgkZXZlbnQpXCI+XHJcbiAgICA8L256LWNhc2NhZGVyPlxyXG5cclxuICA8L3NmLWl0ZW0td3JhcD5cclxuICBgLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2FzY2FkZXJXaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBjbGVhclRleHQ6IHN0cmluZztcclxuICBzaG93QXJyb3c6IGJvb2xlYW47XHJcbiAgc2hvd0lucHV0OiBib29sZWFuO1xyXG4gIHRyaWdnZXJBY3Rpb246IHN0cmluZ1tdO1xyXG4gIGRhdGE6IFNGU2NoZW1hRW51bVtdID0gW107XHJcbiAgbG9hZERhdGE6IGFueTtcclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNsZWFyVGV4dCA9IHRoaXMudWkuY2xlYXJUZXh0IHx8ICfmuIXpmaQnO1xyXG4gICAgdGhpcy5zaG93QXJyb3cgPSB0b0Jvb2wodGhpcy51aS5zaG93QXJyb3csIHRydWUpO1xyXG4gICAgdGhpcy5zaG93SW5wdXQgPSB0b0Jvb2wodGhpcy51aS5zaG93SW5wdXQsIHRydWUpO1xyXG4gICAgdGhpcy50cmlnZ2VyQWN0aW9uID0gdGhpcy51aS50cmlnZ2VyQWN0aW9uIHx8IFsnY2xpY2snXTtcclxuICAgIGlmICghIXRoaXMudWkuYXN5bmNEYXRhKSB7XHJcbiAgICAgIHRoaXMubG9hZERhdGEgPSAobm9kZTogYW55LCBpbmRleDogbnVtYmVyKSA9PlxyXG4gICAgICAgICh0aGlzLnVpLmFzeW5jRGF0YSBhcyBhbnkpKG5vZGUsIGluZGV4LCB0aGlzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlc2V0KHZhbHVlOiBhbnkpIHtcclxuICAgIGdldERhdGEodGhpcy5zY2hlbWEsIHRoaXMudWksIHRoaXMuZm9ybVByb3BlcnR5LmZvcm1EYXRhKS5zdWJzY3JpYmUoXHJcbiAgICAgIGxpc3QgPT4ge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGxpc3Q7XHJcbiAgICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgX3Zpc2libGVDaGFuZ2Uoc3RhdHVzOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLnVpLnZpc2libGVDaGFuZ2UgJiYgdGhpcy51aS52aXNpYmxlQ2hhbmdlKHN0YXR1cyk7XHJcbiAgfVxyXG5cclxuICBfY2hhbmdlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xyXG4gICAgdGhpcy51aS5jaGFuZ2UgJiYgdGhpcy51aS5jaGFuZ2UodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgX3NlbGVjdGlvbkNoYW5nZShvcHRpb25zOiBhbnkpIHtcclxuICAgIHRoaXMudWkuc2VsZWN0aW9uQ2hhbmdlICYmIHRoaXMudWkuc2VsZWN0aW9uQ2hhbmdlKG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgX3NlbGVjdChvcHRpb25zOiBhbnkpIHtcclxuICAgIHRoaXMudWkuc2VsZWN0ICYmIHRoaXMudWkuc2VsZWN0KG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgX2NsZWFyKG9wdGlvbnM6IGFueSkge1xyXG4gICAgdGhpcy51aS5jbGVhciAmJiB0aGlzLnVpLmNsZWFyKG9wdGlvbnMpO1xyXG4gIH1cclxufVxyXG4iXX0=