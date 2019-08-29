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
        if (this.ui.change)
            this.ui.change(value);
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
        if (this.ui.selectionChange)
            this.ui.selectionChange(options);
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
        if (this.ui.select)
            this.ui.select(options);
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
                    template: "<sf-item-wrap [id]=\"id\"\n              [schema]=\"schema\"\n              [ui]=\"ui\"\n              [showError]=\"showError\"\n              [error]=\"error\"\n              [showTitle]=\"schema.title\">\n  <nz-cascader [nzDisabled]=\"disabled\"\n               [nzSize]=\"ui.size\"\n               [ngModel]=\"value\"\n               (ngModelChange)=\"_change($event)\"\n               [nzOptions]=\"data\"\n               [nzAllowClear]=\"ui.allowClear\"\n               [nzAutoFocus]=\"ui.autoFocus\"\n               [nzChangeOn]=\"ui.changeOn\"\n               [nzChangeOnSelect]=\"ui.changeOnSelect\"\n               [nzColumnClassName]=\"ui.columnClassName\"\n               [nzExpandTrigger]=\"ui.expandTrigger\"\n               [nzMenuClassName]=\"ui.menuClassName\"\n               [nzMenuStyle]=\"ui.menuStyle\"\n               [nzLabelProperty]=\"ui.labelProperty || 'label'\"\n               [nzValueProperty]=\"ui.valueProperty || 'value'\"\n               [nzLoadData]=\"loadData\"\n               [nzPlaceHolder]=\"ui.placeholder\"\n               [nzShowArrow]=\"showArrow\"\n               [nzShowInput]=\"showInput\"\n               [nzShowSearch]=\"ui.showSearch\"\n               (nzClear)=\"_clear()\"\n               (nzVisibleChange)=\"_visibleChange($event)\"\n               (nzSelect)=\"_select($event)\"\n               (nzSelectionChange)=\"_selectionChange($event)\">\n  </nz-cascader>\n</sf-item-wrap>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FzY2FkZXIud2lkZ2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy9jYXNjYWRlci9jYXNjYWRlci53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBS3JFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFL0M7SUFNb0MsMENBQXVDO0lBTjNFO1FBQUEscUVBb0RDO1FBekNDLFVBQUksR0FBbUIsRUFBRSxDQUFDOztJQXlDNUIsQ0FBQzs7OztJQXRDQyxpQ0FBUTs7O0lBQVI7UUFBQSxpQkFTQztRQVJPLElBQUEsWUFBdUUsRUFBckUsd0JBQVMsRUFBRSx3QkFBUyxFQUFFLHdCQUFTLEVBQUUsZ0NBQWEsRUFBRSx3QkFBcUI7UUFDN0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLElBQUksSUFBSSxDQUFDO1FBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsQ0FBQyxTQUFTLEVBQUU7WUFDZixJQUFJLENBQUMsUUFBUTs7Ozs7WUFBRyxVQUFDLElBQW9CLEVBQUUsS0FBYSxJQUFLLE9BQUEsU0FBUyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSSxDQUFDLENBQUMsSUFBSTs7O1lBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxhQUFhLEVBQUUsRUFBcEIsQ0FBb0IsRUFBQyxFQUE3RCxDQUE2RCxDQUFBLENBQUM7U0FDeEg7SUFDSCxDQUFDOzs7OztJQUVELDhCQUFLOzs7O0lBQUwsVUFBTSxLQUFjO1FBQXBCLGlCQUtDO1FBSkMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLElBQUk7WUFDNUMsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCx1Q0FBYzs7OztJQUFkLFVBQWUsTUFBZTtRQUM1QixJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYTtZQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNELENBQUM7Ozs7O0lBRUQsZ0NBQU87Ozs7SUFBUCxVQUFRLEtBQW1CO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckIsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU07WUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7OztJQUVELHlDQUFnQjs7OztJQUFoQixVQUFpQixPQUFZO1FBQzNCLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxlQUFlO1lBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDaEUsQ0FBQzs7Ozs7SUFFRCxnQ0FBTzs7OztJQUFQLFVBQVEsT0FBWTtRQUNsQixJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTTtZQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7SUFFRCwrQkFBTTs7O0lBQU47UUFDRSxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSztZQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDckMsQ0FBQzs7Z0JBbkRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsdzZDQUFxQztvQkFDckMsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3RDOztJQStDRCxxQkFBQztDQUFBLEFBcERELENBTW9DLGVBQWUsR0E4Q2xEO1NBOUNZLGNBQWM7OztJQUN6QixtQ0FBa0I7O0lBQ2xCLG1DQUFtQjs7SUFDbkIsbUNBQW1COztJQUNuQix1Q0FBd0I7O0lBQ3hCLDhCQUEwQjs7SUFDMUIsa0NBQW9FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYXNjYWRlck9wdGlvbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY2FzY2FkZXInO1xuaW1wb3J0IHsgU0ZDYXNjYWRlcldpZGdldFNjaGVtYSB9IGZyb20gJy4vc2NoZW1hJztcbmltcG9ydCB7IFNGVmFsdWUgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgU0ZTY2hlbWFFbnVtIH0gZnJvbSAnLi4vLi4vc2NoZW1hJztcbmltcG9ydCB7IGdldERhdGEsIHRvQm9vbCB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IENvbnRyb2xVSVdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLWNhc2NhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Nhc2NhZGVyLndpZGdldC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIENhc2NhZGVyV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFVJV2lkZ2V0PFNGQ2FzY2FkZXJXaWRnZXRTY2hlbWE+IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY2xlYXJUZXh0OiBzdHJpbmc7XG4gIHNob3dBcnJvdzogYm9vbGVhbjtcbiAgc2hvd0lucHV0OiBib29sZWFuO1xuICB0cmlnZ2VyQWN0aW9uOiBzdHJpbmdbXTtcbiAgZGF0YTogU0ZTY2hlbWFFbnVtW10gPSBbXTtcbiAgbG9hZERhdGE6IChub2RlOiBDYXNjYWRlck9wdGlvbiwgaW5kZXg6IG51bWJlcikgPT4gUHJvbWlzZUxpa2U8YW55PjtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IGNsZWFyVGV4dCwgc2hvd0Fycm93LCBzaG93SW5wdXQsIHRyaWdnZXJBY3Rpb24sIGFzeW5jRGF0YSB9ID0gdGhpcy51aTtcbiAgICB0aGlzLmNsZWFyVGV4dCA9IGNsZWFyVGV4dCB8fCAn5riF6ZmkJztcbiAgICB0aGlzLnNob3dBcnJvdyA9IHRvQm9vbChzaG93QXJyb3csIHRydWUpO1xuICAgIHRoaXMuc2hvd0lucHV0ID0gdG9Cb29sKHNob3dJbnB1dCwgdHJ1ZSk7XG4gICAgdGhpcy50cmlnZ2VyQWN0aW9uID0gdHJpZ2dlckFjdGlvbiB8fCBbJ2NsaWNrJ107XG4gICAgaWYgKCEhYXN5bmNEYXRhKSB7XG4gICAgICB0aGlzLmxvYWREYXRhID0gKG5vZGU6IENhc2NhZGVyT3B0aW9uLCBpbmRleDogbnVtYmVyKSA9PiBhc3luY0RhdGEobm9kZSwgaW5kZXgsIHRoaXMpLnRoZW4oKCkgPT4gdGhpcy5kZXRlY3RDaGFuZ2VzKCkpO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0KHZhbHVlOiBTRlZhbHVlKSB7XG4gICAgZ2V0RGF0YSh0aGlzLnNjaGVtYSwge30sIHZhbHVlKS5zdWJzY3JpYmUobGlzdCA9PiB7XG4gICAgICB0aGlzLmRhdGEgPSBsaXN0O1xuICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH1cblxuICBfdmlzaWJsZUNoYW5nZShzdGF0dXM6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy51aS52aXNpYmxlQ2hhbmdlKSB0aGlzLnVpLnZpc2libGVDaGFuZ2Uoc3RhdHVzKTtcbiAgfVxuXG4gIF9jaGFuZ2UodmFsdWU6IGFueVtdIHwgbnVsbCkge1xuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICAgIGlmICh0aGlzLnVpLmNoYW5nZSkgdGhpcy51aS5jaGFuZ2UodmFsdWUpO1xuICB9XG5cbiAgX3NlbGVjdGlvbkNoYW5nZShvcHRpb25zOiBhbnkpIHtcbiAgICBpZiAodGhpcy51aS5zZWxlY3Rpb25DaGFuZ2UpIHRoaXMudWkuc2VsZWN0aW9uQ2hhbmdlKG9wdGlvbnMpO1xuICB9XG5cbiAgX3NlbGVjdChvcHRpb25zOiBhbnkpIHtcbiAgICBpZiAodGhpcy51aS5zZWxlY3QpIHRoaXMudWkuc2VsZWN0KG9wdGlvbnMpO1xuICB9XG5cbiAgX2NsZWFyKCkge1xuICAgIGlmICh0aGlzLnVpLmNsZWFyKSB0aGlzLnVpLmNsZWFyKCk7XG4gIH1cbn1cbiJdfQ==