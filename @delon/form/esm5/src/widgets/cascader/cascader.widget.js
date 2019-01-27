/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { getData, toBool } from '../../utils';
import { ControlWidget } from '../../widget';
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
        this.clearText = this.ui.clearText || '清除';
        this.showArrow = toBool(this.ui.showArrow, true);
        this.showInput = toBool(this.ui.showInput, true);
        this.triggerAction = this.ui.triggerAction || ['click'];
        if (!!this.ui.asyncData) {
            // tslint:disable-next-line:no-any
            this.loadData = function (node, index) { return ((/** @type {?} */ (_this.ui.asyncData)))(node, index, _this); };
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
        getData(this.schema, {}, this.formProperty.formData).subscribe(function (list) {
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
        if (this.ui.visibleChange)
            this.ui.visibleChange(status);
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
        if (this.ui.change)
            this.ui.change(value);
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {?} options
     * @return {?}
     */
    CascaderWidget.prototype._selectionChange = 
    // tslint:disable-next-line:no-any
    /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        if (this.ui.selectionChange)
            this.ui.selectionChange(options);
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {?} options
     * @return {?}
     */
    CascaderWidget.prototype._select = 
    // tslint:disable-next-line:no-any
    /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        if (this.ui.select)
            this.ui.select(options);
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {?} options
     * @return {?}
     */
    CascaderWidget.prototype._clear = 
    // tslint:disable-next-line:no-any
    /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        if (this.ui.clear)
            this.ui.clear(options);
    };
    CascaderWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-cascader',
                    template: "\n    <sf-item-wrap\n      [id]=\"id\"\n      [schema]=\"schema\"\n      [ui]=\"ui\"\n      [showError]=\"showError\"\n      [error]=\"error\"\n      [showTitle]=\"schema.title\"\n    >\n      <nz-cascader\n        [nzDisabled]=\"disabled\"\n        [nzSize]=\"ui.size\"\n        [ngModel]=\"value\"\n        (ngModelChange)=\"_change($event)\"\n        [nzOptions]=\"data\"\n        [nzAllowClear]=\"ui.allowClear\"\n        [nzAutoFocus]=\"ui.autoFocus\"\n        [nzChangeOn]=\"ui.changeOn\"\n        [nzChangeOnSelect]=\"ui.changeOnSelect\"\n        [nzColumnClassName]=\"ui.columnClassName\"\n        [nzExpandTrigger]=\"ui.expandTrigger\"\n        [nzMenuClassName]=\"ui.menuClassName\"\n        [nzMenuStyle]=\"ui.menuStyle\"\n        [nzLabelProperty]=\"ui.labelProperty || 'label'\"\n        [nzValueProperty]=\"ui.valueProperty || 'value'\"\n        [nzLoadData]=\"loadData\"\n        [nzPlaceHolder]=\"ui.placeholder\"\n        [nzShowArrow]=\"showArrow\"\n        [nzShowInput]=\"showInput\"\n        [nzShowSearch]=\"ui.showSearch\"\n        (nzClear)=\"_clear($event)\"\n        (nzVisibleChange)=\"_visibleChange($event)\"\n        (nzSelect)=\"_select($event)\"\n        (nzSelectionChange)=\"_selectionChange($event)\"\n      >\n      </nz-cascader>\n    </sf-item-wrap>\n  "
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FzY2FkZXIud2lkZ2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy9jYXNjYWRlci9jYXNjYWRlci53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBR2xELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFN0M7SUF5Q29DLDBDQUFhO0lBekNqRDtRQUFBLHFFQTJGQztRQTdDQyxVQUFJLEdBQW1CLEVBQUUsQ0FBQzs7SUE2QzVCLENBQUM7Ozs7SUF6Q0MsaUNBQVE7OztJQUFSO1FBQUEsaUJBU0M7UUFSQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQztRQUMzQyxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUU7WUFDdkIsa0NBQWtDO1lBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBQyxJQUFTLEVBQUUsS0FBYSxJQUFLLE9BQUEsQ0FBQyxtQkFBQSxLQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFJLENBQUMsRUFBN0MsQ0FBNkMsQ0FBQztTQUM3RjtJQUNILENBQUM7Ozs7O0lBRUQsOEJBQUs7Ozs7SUFBTCxVQUFNLEtBQWM7UUFBcEIsaUJBS0M7UUFKQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJO1lBQ2pFLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsdUNBQWM7Ozs7SUFBZCxVQUFlLE1BQWU7UUFDNUIsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWE7WUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7OztJQUVELGdDQUFPOzs7O0lBQVAsVUFBUSxLQUFhO1FBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckIsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU07WUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsa0NBQWtDOzs7Ozs7SUFDbEMseUNBQWdCOzs7Ozs7SUFBaEIsVUFBaUIsT0FBWTtRQUMzQixJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsZUFBZTtZQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCxrQ0FBa0M7Ozs7OztJQUNsQyxnQ0FBTzs7Ozs7O0lBQVAsVUFBUSxPQUFZO1FBQ2xCLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNO1lBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELGtDQUFrQzs7Ozs7O0lBQ2xDLCtCQUFNOzs7Ozs7SUFBTixVQUFPLE9BQVk7UUFDakIsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUs7WUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1QyxDQUFDOztnQkExRkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2QixRQUFRLEVBQUUsNndDQXFDVDtpQkFDRjs7SUFtREQscUJBQUM7Q0FBQSxBQTNGRCxDQXlDb0MsYUFBYSxHQWtEaEQ7U0FsRFksY0FBYzs7O0lBQ3pCLG1DQUFrQjs7SUFDbEIsbUNBQW1COztJQUNuQixtQ0FBbUI7O0lBQ25CLHVDQUF3Qjs7SUFDeEIsOEJBQTBCOztJQUUxQixrQ0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTRlZhbHVlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IFNGU2NoZW1hRW51bSB9IGZyb20gJy4uLy4uL3NjaGVtYSc7XG5pbXBvcnQgeyBnZXREYXRhLCB0b0Jvb2wgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtY2FzY2FkZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzZi1pdGVtLXdyYXBcbiAgICAgIFtpZF09XCJpZFwiXG4gICAgICBbc2NoZW1hXT1cInNjaGVtYVwiXG4gICAgICBbdWldPVwidWlcIlxuICAgICAgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIlxuICAgICAgW2Vycm9yXT1cImVycm9yXCJcbiAgICAgIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCJcbiAgICA+XG4gICAgICA8bnotY2FzY2FkZXJcbiAgICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICBbbnpTaXplXT1cInVpLnNpemVcIlxuICAgICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXG4gICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIl9jaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgIFtuek9wdGlvbnNdPVwiZGF0YVwiXG4gICAgICAgIFtuekFsbG93Q2xlYXJdPVwidWkuYWxsb3dDbGVhclwiXG4gICAgICAgIFtuekF1dG9Gb2N1c109XCJ1aS5hdXRvRm9jdXNcIlxuICAgICAgICBbbnpDaGFuZ2VPbl09XCJ1aS5jaGFuZ2VPblwiXG4gICAgICAgIFtuekNoYW5nZU9uU2VsZWN0XT1cInVpLmNoYW5nZU9uU2VsZWN0XCJcbiAgICAgICAgW256Q29sdW1uQ2xhc3NOYW1lXT1cInVpLmNvbHVtbkNsYXNzTmFtZVwiXG4gICAgICAgIFtuekV4cGFuZFRyaWdnZXJdPVwidWkuZXhwYW5kVHJpZ2dlclwiXG4gICAgICAgIFtuek1lbnVDbGFzc05hbWVdPVwidWkubWVudUNsYXNzTmFtZVwiXG4gICAgICAgIFtuek1lbnVTdHlsZV09XCJ1aS5tZW51U3R5bGVcIlxuICAgICAgICBbbnpMYWJlbFByb3BlcnR5XT1cInVpLmxhYmVsUHJvcGVydHkgfHwgJ2xhYmVsJ1wiXG4gICAgICAgIFtuelZhbHVlUHJvcGVydHldPVwidWkudmFsdWVQcm9wZXJ0eSB8fCAndmFsdWUnXCJcbiAgICAgICAgW256TG9hZERhdGFdPVwibG9hZERhdGFcIlxuICAgICAgICBbbnpQbGFjZUhvbGRlcl09XCJ1aS5wbGFjZWhvbGRlclwiXG4gICAgICAgIFtuelNob3dBcnJvd109XCJzaG93QXJyb3dcIlxuICAgICAgICBbbnpTaG93SW5wdXRdPVwic2hvd0lucHV0XCJcbiAgICAgICAgW256U2hvd1NlYXJjaF09XCJ1aS5zaG93U2VhcmNoXCJcbiAgICAgICAgKG56Q2xlYXIpPVwiX2NsZWFyKCRldmVudClcIlxuICAgICAgICAobnpWaXNpYmxlQ2hhbmdlKT1cIl92aXNpYmxlQ2hhbmdlKCRldmVudClcIlxuICAgICAgICAobnpTZWxlY3QpPVwiX3NlbGVjdCgkZXZlbnQpXCJcbiAgICAgICAgKG56U2VsZWN0aW9uQ2hhbmdlKT1cIl9zZWxlY3Rpb25DaGFuZ2UoJGV2ZW50KVwiXG4gICAgICA+XG4gICAgICA8L256LWNhc2NhZGVyPlxuICAgIDwvc2YtaXRlbS13cmFwPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBDYXNjYWRlcldpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjbGVhclRleHQ6IHN0cmluZztcbiAgc2hvd0Fycm93OiBib29sZWFuO1xuICBzaG93SW5wdXQ6IGJvb2xlYW47XG4gIHRyaWdnZXJBY3Rpb246IHN0cmluZ1tdO1xuICBkYXRhOiBTRlNjaGVtYUVudW1bXSA9IFtdO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIGxvYWREYXRhOiBhbnk7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhclRleHQgPSB0aGlzLnVpLmNsZWFyVGV4dCB8fCAn5riF6ZmkJztcbiAgICB0aGlzLnNob3dBcnJvdyA9IHRvQm9vbCh0aGlzLnVpLnNob3dBcnJvdywgdHJ1ZSk7XG4gICAgdGhpcy5zaG93SW5wdXQgPSB0b0Jvb2wodGhpcy51aS5zaG93SW5wdXQsIHRydWUpO1xuICAgIHRoaXMudHJpZ2dlckFjdGlvbiA9IHRoaXMudWkudHJpZ2dlckFjdGlvbiB8fCBbJ2NsaWNrJ107XG4gICAgaWYgKCEhdGhpcy51aS5hc3luY0RhdGEpIHtcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICAgIHRoaXMubG9hZERhdGEgPSAobm9kZTogYW55LCBpbmRleDogbnVtYmVyKSA9PiAodGhpcy51aS5hc3luY0RhdGEgYXMgYW55KShub2RlLCBpbmRleCwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgcmVzZXQodmFsdWU6IFNGVmFsdWUpIHtcbiAgICBnZXREYXRhKHRoaXMuc2NoZW1hLCB7fSwgdGhpcy5mb3JtUHJvcGVydHkuZm9ybURhdGEpLnN1YnNjcmliZShsaXN0ID0+IHtcbiAgICAgIHRoaXMuZGF0YSA9IGxpc3Q7XG4gICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIF92aXNpYmxlQ2hhbmdlKHN0YXR1czogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLnVpLnZpc2libGVDaGFuZ2UpIHRoaXMudWkudmlzaWJsZUNoYW5nZShzdGF0dXMpO1xuICB9XG5cbiAgX2NoYW5nZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgaWYgKHRoaXMudWkuY2hhbmdlKSB0aGlzLnVpLmNoYW5nZSh2YWx1ZSk7XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIF9zZWxlY3Rpb25DaGFuZ2Uob3B0aW9uczogYW55KSB7XG4gICAgaWYgKHRoaXMudWkuc2VsZWN0aW9uQ2hhbmdlKSB0aGlzLnVpLnNlbGVjdGlvbkNoYW5nZShvcHRpb25zKTtcbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgX3NlbGVjdChvcHRpb25zOiBhbnkpIHtcbiAgICBpZiAodGhpcy51aS5zZWxlY3QpIHRoaXMudWkuc2VsZWN0KG9wdGlvbnMpO1xuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBfY2xlYXIob3B0aW9uczogYW55KSB7XG4gICAgaWYgKHRoaXMudWkuY2xlYXIpIHRoaXMudWkuY2xlYXIob3B0aW9ucyk7XG4gIH1cbn1cbiJdfQ==