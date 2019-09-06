/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { getData, toBool } from '../../utils';
import { ControlUIWidget } from '../../widget';
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
        var _a = this.ui, clearText = _a.clearText, showArrow = _a.showArrow, showInput = _a.showInput, triggerAction = _a.triggerAction, asyncData = _a.asyncData;
        this.clearText = clearText || '清除';
        this.showArrow = toBool(showArrow, true);
        this.showInput = toBool(showInput, true);
        this.triggerAction = triggerAction || ['click'];
        if (!!asyncData) {
            this.loadData = (/**
             * @param {?} node
             * @param {?} index
             * @return {?}
             */
            function (node, index) { return asyncData(node, index, _this).then((/**
             * @return {?}
             */
            function () { return _this.detectChanges(); })); });
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
        getData(this.schema, {}, value).subscribe((/**
         * @param {?} list
         * @return {?}
         */
        function (list) {
            _this.data = list;
            _this.detectChanges();
        }));
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
        if (this.ui.change) {
            this.ui.change(value);
        }
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
        if (this.ui.selectionChange) {
            this.ui.selectionChange(options);
        }
    };
    /**
     * @return {?}
     */
    CascaderWidget.prototype._clear = /**
     * @return {?}
     */
    function () {
        if (this.ui.clear)
            this.ui.clear();
    };
    CascaderWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-cascader',
                    template: "<sf-item-wrap [id]=\"id\"\n              [schema]=\"schema\"\n              [ui]=\"ui\"\n              [showError]=\"showError\"\n              [error]=\"error\"\n              [showTitle]=\"schema.title\">\n  <nz-cascader [nzDisabled]=\"disabled\"\n               [nzSize]=\"ui.size\"\n               [ngModel]=\"value\"\n               (ngModelChange)=\"_change($event)\"\n               [nzOptions]=\"data\"\n               [nzAllowClear]=\"ui.allowClear\"\n               [nzAutoFocus]=\"ui.autoFocus\"\n               [nzChangeOn]=\"ui.changeOn\"\n               [nzChangeOnSelect]=\"ui.changeOnSelect\"\n               [nzColumnClassName]=\"ui.columnClassName\"\n               [nzExpandTrigger]=\"ui.expandTrigger\"\n               [nzMenuClassName]=\"ui.menuClassName\"\n               [nzMenuStyle]=\"ui.menuStyle\"\n               [nzLabelProperty]=\"ui.labelProperty || 'label'\"\n               [nzValueProperty]=\"ui.valueProperty || 'value'\"\n               [nzLoadData]=\"loadData\"\n               [nzPlaceHolder]=\"ui.placeholder\"\n               [nzShowArrow]=\"showArrow\"\n               [nzShowInput]=\"showInput\"\n               [nzShowSearch]=\"ui.showSearch\"\n               (nzClear)=\"_clear()\"\n               (nzVisibleChange)=\"_visibleChange($event)\"\n               (nzSelectionChange)=\"_selectionChange($event)\">\n  </nz-cascader>\n</sf-item-wrap>\n",
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    return CascaderWidget;
}(ControlUIWidget));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FzY2FkZXIud2lkZ2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy9jYXNjYWRlci9jYXNjYWRlci53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBS3JFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFL0M7SUFNb0MsMENBQXVDO0lBTjNFO1FBQUEscUVBb0RDO1FBekNDLFVBQUksR0FBbUIsRUFBRSxDQUFDOztJQXlDNUIsQ0FBQzs7OztJQXRDQyxpQ0FBUTs7O0lBQVI7UUFBQSxpQkFTQztRQVJPLElBQUEsWUFBdUUsRUFBckUsd0JBQVMsRUFBRSx3QkFBUyxFQUFFLHdCQUFTLEVBQUUsZ0NBQWEsRUFBRSx3QkFBcUI7UUFDN0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLElBQUksSUFBSSxDQUFDO1FBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsQ0FBQyxTQUFTLEVBQUU7WUFDZixJQUFJLENBQUMsUUFBUTs7Ozs7WUFBRyxVQUFDLElBQW9CLEVBQUUsS0FBYSxJQUFLLE9BQUEsU0FBUyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSSxDQUFDLENBQUMsSUFBSTs7O1lBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxhQUFhLEVBQUUsRUFBcEIsQ0FBb0IsRUFBQyxFQUE3RCxDQUE2RCxDQUFBLENBQUM7U0FDeEg7SUFDSCxDQUFDOzs7OztJQUVELDhCQUFLOzs7O0lBQUwsVUFBTSxLQUFjO1FBQXBCLGlCQUtDO1FBSkMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLElBQUk7WUFDNUMsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCx1Q0FBYzs7OztJQUFkLFVBQWUsTUFBZTtRQUM1QixJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYTtZQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNELENBQUM7Ozs7O0lBRUQsZ0NBQU87Ozs7SUFBUCxVQUFRLEtBQW1CO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckIsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRTtZQUNsQixJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN2QjtJQUNILENBQUM7Ozs7O0lBRUQseUNBQWdCOzs7O0lBQWhCLFVBQWlCLE9BQXlCO1FBQ3hDLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUU7WUFDM0IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDbEM7SUFDSCxDQUFDOzs7O0lBRUQsK0JBQU07OztJQUFOO1FBQ0UsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUs7WUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3JDLENBQUM7O2dCQW5ERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLHkzQ0FBcUM7b0JBQ3JDLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUN0Qzs7SUErQ0QscUJBQUM7Q0FBQSxBQXBERCxDQU1vQyxlQUFlLEdBOENsRDtTQTlDWSxjQUFjOzs7SUFDekIsbUNBQWtCOztJQUNsQixtQ0FBbUI7O0lBQ25CLG1DQUFtQjs7SUFDbkIsdUNBQXdCOztJQUN4Qiw4QkFBMEI7O0lBQzFCLGtDQUFvRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FzY2FkZXJPcHRpb24gfSBmcm9tICduZy16b3Jyby1hbnRkL2Nhc2NhZGVyJztcbmltcG9ydCB7IFNGQ2FzY2FkZXJXaWRnZXRTY2hlbWEgfSBmcm9tICcuL3NjaGVtYSc7XG5pbXBvcnQgeyBTRlZhbHVlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IFNGU2NoZW1hRW51bSB9IGZyb20gJy4uLy4uL3NjaGVtYSc7XG5pbXBvcnQgeyBnZXREYXRhLCB0b0Jvb2wgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgeyBDb250cm9sVUlXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1jYXNjYWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXNjYWRlci53aWRnZXQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBDYXNjYWRlcldpZGdldCBleHRlbmRzIENvbnRyb2xVSVdpZGdldDxTRkNhc2NhZGVyV2lkZ2V0U2NoZW1hPiBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNsZWFyVGV4dDogc3RyaW5nO1xuICBzaG93QXJyb3c6IGJvb2xlYW47XG4gIHNob3dJbnB1dDogYm9vbGVhbjtcbiAgdHJpZ2dlckFjdGlvbjogc3RyaW5nW107XG4gIGRhdGE6IFNGU2NoZW1hRW51bVtdID0gW107XG4gIGxvYWREYXRhOiAobm9kZTogQ2FzY2FkZXJPcHRpb24sIGluZGV4OiBudW1iZXIpID0+IFByb21pc2VMaWtlPGFueT47XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgeyBjbGVhclRleHQsIHNob3dBcnJvdywgc2hvd0lucHV0LCB0cmlnZ2VyQWN0aW9uLCBhc3luY0RhdGEgfSA9IHRoaXMudWk7XG4gICAgdGhpcy5jbGVhclRleHQgPSBjbGVhclRleHQgfHwgJ+a4hemZpCc7XG4gICAgdGhpcy5zaG93QXJyb3cgPSB0b0Jvb2woc2hvd0Fycm93LCB0cnVlKTtcbiAgICB0aGlzLnNob3dJbnB1dCA9IHRvQm9vbChzaG93SW5wdXQsIHRydWUpO1xuICAgIHRoaXMudHJpZ2dlckFjdGlvbiA9IHRyaWdnZXJBY3Rpb24gfHwgWydjbGljayddO1xuICAgIGlmICghIWFzeW5jRGF0YSkge1xuICAgICAgdGhpcy5sb2FkRGF0YSA9IChub2RlOiBDYXNjYWRlck9wdGlvbiwgaW5kZXg6IG51bWJlcikgPT4gYXN5bmNEYXRhKG5vZGUsIGluZGV4LCB0aGlzKS50aGVuKCgpID0+IHRoaXMuZGV0ZWN0Q2hhbmdlcygpKTtcbiAgICB9XG4gIH1cblxuICByZXNldCh2YWx1ZTogU0ZWYWx1ZSkge1xuICAgIGdldERhdGEodGhpcy5zY2hlbWEsIHt9LCB2YWx1ZSkuc3Vic2NyaWJlKGxpc3QgPT4ge1xuICAgICAgdGhpcy5kYXRhID0gbGlzdDtcbiAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICB9XG5cbiAgX3Zpc2libGVDaGFuZ2Uoc3RhdHVzOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMudWkudmlzaWJsZUNoYW5nZSkgdGhpcy51aS52aXNpYmxlQ2hhbmdlKHN0YXR1cyk7XG4gIH1cblxuICBfY2hhbmdlKHZhbHVlOiBhbnlbXSB8IG51bGwpIHtcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgICBpZiAodGhpcy51aS5jaGFuZ2UpIHtcbiAgICAgIHRoaXMudWkuY2hhbmdlKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBfc2VsZWN0aW9uQ2hhbmdlKG9wdGlvbnM6IENhc2NhZGVyT3B0aW9uW10pIHtcbiAgICBpZiAodGhpcy51aS5zZWxlY3Rpb25DaGFuZ2UpIHtcbiAgICAgIHRoaXMudWkuc2VsZWN0aW9uQ2hhbmdlKG9wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIF9jbGVhcigpIHtcbiAgICBpZiAodGhpcy51aS5jbGVhcikgdGhpcy51aS5jbGVhcigpO1xuICB9XG59XG4iXX0=