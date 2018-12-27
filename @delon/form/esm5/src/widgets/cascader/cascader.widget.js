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
                    template: "\n  <sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n\n    <nz-cascader\n      [nzDisabled]=\"disabled\"\n      [nzSize]=\"ui.size\"\n      [ngModel]=\"value\"\n      (ngModelChange)=\"_change($event)\"\n      [nzOptions]=\"data\"\n      [nzAllowClear]=\"ui.allowClear\"\n      [nzAutoFocus]=\"ui.autoFocus\"\n      [nzChangeOn]=\"ui.changeOn\"\n      [nzChangeOnSelect]=\"ui.changeOnSelect\"\n      [nzColumnClassName]=\"ui.columnClassName\"\n      [nzExpandTrigger]=\"ui.expandTrigger\"\n      [nzMenuClassName]=\"ui.menuClassName\"\n      [nzMenuStyle]=\"ui.menuStyle\"\n      [nzLabelProperty]=\"ui.labelProperty || 'label'\"\n      [nzValueProperty]=\"ui.valueProperty || 'value'\"\n      [nzLoadData]=\"loadData\"\n      [nzPlaceHolder]=\"ui.placeholder\"\n      [nzShowArrow]=\"showArrow\"\n      [nzShowInput]=\"showInput\"\n      [nzShowSearch]=\"ui.showSearch\"\n      (nzClear)=\"_clear($event)\"\n      (nzVisibleChange)=\"_visibleChange($event)\"\n      (nzSelect)=\"_select($event)\"\n      (nzSelectionChange)=\"_selectionChange($event)\">\n    </nz-cascader>\n\n  </sf-item-wrap>\n  "
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FzY2FkZXIud2lkZ2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy9jYXNjYWRlci9jYXNjYWRlci53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBR2xELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFN0M7SUFtQ29DLDBDQUFhO0lBbkNqRDtRQUFBLHFFQXVGQztRQS9DQyxVQUFJLEdBQW1CLEVBQUUsQ0FBQzs7SUErQzVCLENBQUM7Ozs7SUEzQ0MsaUNBQVE7OztJQUFSO1FBQUEsaUJBU0M7UUFSQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQztRQUMzQyxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUU7WUFDdkIsa0NBQWtDO1lBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBQyxJQUFTLEVBQUUsS0FBYSxJQUFLLE9BQUEsQ0FBQyxtQkFBQSxLQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFJLENBQUMsRUFBN0MsQ0FBNkMsQ0FBQztTQUM3RjtJQUNILENBQUM7Ozs7O0lBRUQsOEJBQUs7Ozs7SUFBTCxVQUFNLEtBQWM7UUFBcEIsaUJBT0M7UUFOQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUNqRSxVQUFBLElBQUk7WUFDRixLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkIsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDOzs7OztJQUVELHVDQUFjOzs7O0lBQWQsVUFBZSxNQUFlO1FBQzVCLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhO1lBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7Ozs7SUFFRCxnQ0FBTzs7OztJQUFQLFVBQVEsS0FBYTtRQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNO1lBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELGtDQUFrQzs7Ozs7O0lBQ2xDLHlDQUFnQjs7Ozs7O0lBQWhCLFVBQWlCLE9BQVk7UUFDM0IsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLGVBQWU7WUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQsa0NBQWtDOzs7Ozs7SUFDbEMsZ0NBQU87Ozs7OztJQUFQLFVBQVEsT0FBWTtRQUNsQixJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTTtZQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxrQ0FBa0M7Ozs7OztJQUNsQywrQkFBTTs7Ozs7O0lBQU4sVUFBTyxPQUFZO1FBQ2pCLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLO1lBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7Z0JBdEZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsUUFBUSxFQUFFLGlxQ0ErQlQ7aUJBQ0Y7O0lBcURELHFCQUFDO0NBQUEsQUF2RkQsQ0FtQ29DLGFBQWEsR0FvRGhEO1NBcERZLGNBQWM7OztJQUN6QixtQ0FBa0I7O0lBQ2xCLG1DQUFtQjs7SUFDbkIsbUNBQW1COztJQUNuQix1Q0FBd0I7O0lBQ3hCLDhCQUEwQjs7SUFFMUIsa0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU0ZWYWx1ZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBTRlNjaGVtYUVudW0gfSBmcm9tICcuLi8uLi9zY2hlbWEnO1xuaW1wb3J0IHsgZ2V0RGF0YSwgdG9Cb29sIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLWNhc2NhZGVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cblxuICAgIDxuei1jYXNjYWRlclxuICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgW256U2l6ZV09XCJ1aS5zaXplXCJcbiAgICAgIFtuZ01vZGVsXT1cInZhbHVlXCJcbiAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIl9jaGFuZ2UoJGV2ZW50KVwiXG4gICAgICBbbnpPcHRpb25zXT1cImRhdGFcIlxuICAgICAgW256QWxsb3dDbGVhcl09XCJ1aS5hbGxvd0NsZWFyXCJcbiAgICAgIFtuekF1dG9Gb2N1c109XCJ1aS5hdXRvRm9jdXNcIlxuICAgICAgW256Q2hhbmdlT25dPVwidWkuY2hhbmdlT25cIlxuICAgICAgW256Q2hhbmdlT25TZWxlY3RdPVwidWkuY2hhbmdlT25TZWxlY3RcIlxuICAgICAgW256Q29sdW1uQ2xhc3NOYW1lXT1cInVpLmNvbHVtbkNsYXNzTmFtZVwiXG4gICAgICBbbnpFeHBhbmRUcmlnZ2VyXT1cInVpLmV4cGFuZFRyaWdnZXJcIlxuICAgICAgW256TWVudUNsYXNzTmFtZV09XCJ1aS5tZW51Q2xhc3NOYW1lXCJcbiAgICAgIFtuek1lbnVTdHlsZV09XCJ1aS5tZW51U3R5bGVcIlxuICAgICAgW256TGFiZWxQcm9wZXJ0eV09XCJ1aS5sYWJlbFByb3BlcnR5IHx8ICdsYWJlbCdcIlxuICAgICAgW256VmFsdWVQcm9wZXJ0eV09XCJ1aS52YWx1ZVByb3BlcnR5IHx8ICd2YWx1ZSdcIlxuICAgICAgW256TG9hZERhdGFdPVwibG9hZERhdGFcIlxuICAgICAgW256UGxhY2VIb2xkZXJdPVwidWkucGxhY2Vob2xkZXJcIlxuICAgICAgW256U2hvd0Fycm93XT1cInNob3dBcnJvd1wiXG4gICAgICBbbnpTaG93SW5wdXRdPVwic2hvd0lucHV0XCJcbiAgICAgIFtuelNob3dTZWFyY2hdPVwidWkuc2hvd1NlYXJjaFwiXG4gICAgICAobnpDbGVhcik9XCJfY2xlYXIoJGV2ZW50KVwiXG4gICAgICAobnpWaXNpYmxlQ2hhbmdlKT1cIl92aXNpYmxlQ2hhbmdlKCRldmVudClcIlxuICAgICAgKG56U2VsZWN0KT1cIl9zZWxlY3QoJGV2ZW50KVwiXG4gICAgICAobnpTZWxlY3Rpb25DaGFuZ2UpPVwiX3NlbGVjdGlvbkNoYW5nZSgkZXZlbnQpXCI+XG4gICAgPC9uei1jYXNjYWRlcj5cblxuICA8L3NmLWl0ZW0td3JhcD5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgQ2FzY2FkZXJXaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY2xlYXJUZXh0OiBzdHJpbmc7XG4gIHNob3dBcnJvdzogYm9vbGVhbjtcbiAgc2hvd0lucHV0OiBib29sZWFuO1xuICB0cmlnZ2VyQWN0aW9uOiBzdHJpbmdbXTtcbiAgZGF0YTogU0ZTY2hlbWFFbnVtW10gPSBbXTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBsb2FkRGF0YTogYW55O1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYXJUZXh0ID0gdGhpcy51aS5jbGVhclRleHQgfHwgJ+a4hemZpCc7XG4gICAgdGhpcy5zaG93QXJyb3cgPSB0b0Jvb2wodGhpcy51aS5zaG93QXJyb3csIHRydWUpO1xuICAgIHRoaXMuc2hvd0lucHV0ID0gdG9Cb29sKHRoaXMudWkuc2hvd0lucHV0LCB0cnVlKTtcbiAgICB0aGlzLnRyaWdnZXJBY3Rpb24gPSB0aGlzLnVpLnRyaWdnZXJBY3Rpb24gfHwgWydjbGljayddO1xuICAgIGlmICghIXRoaXMudWkuYXN5bmNEYXRhKSB7XG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgICB0aGlzLmxvYWREYXRhID0gKG5vZGU6IGFueSwgaW5kZXg6IG51bWJlcikgPT4gKHRoaXMudWkuYXN5bmNEYXRhIGFzIGFueSkobm9kZSwgaW5kZXgsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0KHZhbHVlOiBTRlZhbHVlKSB7XG4gICAgZ2V0RGF0YSh0aGlzLnNjaGVtYSwgdGhpcy51aSwgdGhpcy5mb3JtUHJvcGVydHkuZm9ybURhdGEpLnN1YnNjcmliZShcbiAgICAgIGxpc3QgPT4ge1xuICAgICAgICB0aGlzLmRhdGEgPSBsaXN0O1xuICAgICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH0sXG4gICAgKTtcbiAgfVxuXG4gIF92aXNpYmxlQ2hhbmdlKHN0YXR1czogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLnVpLnZpc2libGVDaGFuZ2UpIHRoaXMudWkudmlzaWJsZUNoYW5nZShzdGF0dXMpO1xuICB9XG5cbiAgX2NoYW5nZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgaWYgKHRoaXMudWkuY2hhbmdlKSB0aGlzLnVpLmNoYW5nZSh2YWx1ZSk7XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIF9zZWxlY3Rpb25DaGFuZ2Uob3B0aW9uczogYW55KSB7XG4gICAgaWYgKHRoaXMudWkuc2VsZWN0aW9uQ2hhbmdlKSB0aGlzLnVpLnNlbGVjdGlvbkNoYW5nZShvcHRpb25zKTtcbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgX3NlbGVjdChvcHRpb25zOiBhbnkpIHtcbiAgICBpZiAodGhpcy51aS5zZWxlY3QpIHRoaXMudWkuc2VsZWN0KG9wdGlvbnMpO1xuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBfY2xlYXIob3B0aW9uczogYW55KSB7XG4gICAgaWYgKHRoaXMudWkuY2xlYXIpIHRoaXMudWkuY2xlYXIob3B0aW9ucyk7XG4gIH1cbn1cbiJdfQ==