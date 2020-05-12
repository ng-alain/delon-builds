/**
 * @fileoverview added by tsickle
 * Generated from: src/widgets/cascader/cascader.widget.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FzY2FkZXIud2lkZ2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy9jYXNjYWRlci9jYXNjYWRlci53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUtyRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM5QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRS9DO0lBTW9DLDBDQUF1QztJQU4zRTtRQUFBLHFFQW9EQztRQXpDQyxVQUFJLEdBQW1CLEVBQUUsQ0FBQzs7SUF5QzVCLENBQUM7Ozs7SUF0Q0MsaUNBQVE7OztJQUFSO1FBQUEsaUJBU0M7UUFSTyxJQUFBLFlBQXVFLEVBQXJFLHdCQUFTLEVBQUUsd0JBQVMsRUFBRSx3QkFBUyxFQUFFLGdDQUFhLEVBQUUsd0JBQXFCO1FBQzdFLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxJQUFJLElBQUksQ0FBQztRQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLENBQUMsU0FBUyxFQUFFO1lBQ2YsSUFBSSxDQUFDLFFBQVE7Ozs7O1lBQUcsVUFBQyxJQUFvQixFQUFFLEtBQWEsSUFBSyxPQUFBLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUksQ0FBQyxDQUFDLElBQUk7OztZQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsYUFBYSxFQUFFLEVBQXBCLENBQW9CLEVBQUMsRUFBN0QsQ0FBNkQsQ0FBQSxDQUFDO1NBQ3hIO0lBQ0gsQ0FBQzs7Ozs7SUFFRCw4QkFBSzs7OztJQUFMLFVBQU0sS0FBYztRQUFwQixpQkFLQztRQUpDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxJQUFJO1lBQzVDLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsdUNBQWM7Ozs7SUFBZCxVQUFlLE1BQWU7UUFDNUIsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWE7WUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7OztJQUVELGdDQUFPOzs7O0lBQVAsVUFBUSxLQUFtQjtRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUU7WUFDbEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdkI7SUFDSCxDQUFDOzs7OztJQUVELHlDQUFnQjs7OztJQUFoQixVQUFpQixPQUF5QjtRQUN4QyxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsZUFBZSxFQUFFO1lBQzNCLElBQUksQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2xDO0lBQ0gsQ0FBQzs7OztJQUVELCtCQUFNOzs7SUFBTjtRQUNFLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLO1lBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNyQyxDQUFDOztnQkFuREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2Qix5M0NBQXFDO29CQUNyQyxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDdEM7O0lBK0NELHFCQUFDO0NBQUEsQUFwREQsQ0FNb0MsZUFBZSxHQThDbEQ7U0E5Q1ksY0FBYzs7O0lBQ3pCLG1DQUFrQjs7SUFDbEIsbUNBQW1COztJQUNuQixtQ0FBbUI7O0lBQ25CLHVDQUF3Qjs7SUFDeEIsOEJBQTBCOztJQUMxQixrQ0FBb0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhc2NhZGVyT3B0aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jYXNjYWRlcic7XG5pbXBvcnQgeyBTRkNhc2NhZGVyV2lkZ2V0U2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEnO1xuaW1wb3J0IHsgU0ZWYWx1ZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBTRlNjaGVtYUVudW0gfSBmcm9tICcuLi8uLi9zY2hlbWEnO1xuaW1wb3J0IHsgZ2V0RGF0YSwgdG9Cb29sIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgQ29udHJvbFVJV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtY2FzY2FkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FzY2FkZXIud2lkZ2V0Lmh0bWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgQ2FzY2FkZXJXaWRnZXQgZXh0ZW5kcyBDb250cm9sVUlXaWRnZXQ8U0ZDYXNjYWRlcldpZGdldFNjaGVtYT4gaW1wbGVtZW50cyBPbkluaXQge1xuICBjbGVhclRleHQ6IHN0cmluZztcbiAgc2hvd0Fycm93OiBib29sZWFuO1xuICBzaG93SW5wdXQ6IGJvb2xlYW47XG4gIHRyaWdnZXJBY3Rpb246IHN0cmluZ1tdO1xuICBkYXRhOiBTRlNjaGVtYUVudW1bXSA9IFtdO1xuICBsb2FkRGF0YTogKG5vZGU6IENhc2NhZGVyT3B0aW9uLCBpbmRleDogbnVtYmVyKSA9PiBQcm9taXNlTGlrZTxhbnk+O1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgY2xlYXJUZXh0LCBzaG93QXJyb3csIHNob3dJbnB1dCwgdHJpZ2dlckFjdGlvbiwgYXN5bmNEYXRhIH0gPSB0aGlzLnVpO1xuICAgIHRoaXMuY2xlYXJUZXh0ID0gY2xlYXJUZXh0IHx8ICfmuIXpmaQnO1xuICAgIHRoaXMuc2hvd0Fycm93ID0gdG9Cb29sKHNob3dBcnJvdywgdHJ1ZSk7XG4gICAgdGhpcy5zaG93SW5wdXQgPSB0b0Jvb2woc2hvd0lucHV0LCB0cnVlKTtcbiAgICB0aGlzLnRyaWdnZXJBY3Rpb24gPSB0cmlnZ2VyQWN0aW9uIHx8IFsnY2xpY2snXTtcbiAgICBpZiAoISFhc3luY0RhdGEpIHtcbiAgICAgIHRoaXMubG9hZERhdGEgPSAobm9kZTogQ2FzY2FkZXJPcHRpb24sIGluZGV4OiBudW1iZXIpID0+IGFzeW5jRGF0YShub2RlLCBpbmRleCwgdGhpcykudGhlbigoKSA9PiB0aGlzLmRldGVjdENoYW5nZXMoKSk7XG4gICAgfVxuICB9XG5cbiAgcmVzZXQodmFsdWU6IFNGVmFsdWUpIHtcbiAgICBnZXREYXRhKHRoaXMuc2NoZW1hLCB7fSwgdmFsdWUpLnN1YnNjcmliZShsaXN0ID0+IHtcbiAgICAgIHRoaXMuZGF0YSA9IGxpc3Q7XG4gICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIF92aXNpYmxlQ2hhbmdlKHN0YXR1czogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLnVpLnZpc2libGVDaGFuZ2UpIHRoaXMudWkudmlzaWJsZUNoYW5nZShzdGF0dXMpO1xuICB9XG5cbiAgX2NoYW5nZSh2YWx1ZTogYW55W10gfCBudWxsKSB7XG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgaWYgKHRoaXMudWkuY2hhbmdlKSB7XG4gICAgICB0aGlzLnVpLmNoYW5nZSh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgX3NlbGVjdGlvbkNoYW5nZShvcHRpb25zOiBDYXNjYWRlck9wdGlvbltdKSB7XG4gICAgaWYgKHRoaXMudWkuc2VsZWN0aW9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLnVpLnNlbGVjdGlvbkNoYW5nZShvcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBfY2xlYXIoKSB7XG4gICAgaWYgKHRoaXMudWkuY2xlYXIpIHRoaXMudWkuY2xlYXIoKTtcbiAgfVxufVxuIl19