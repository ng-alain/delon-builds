/**
 * @fileoverview added by tsickle
 * Generated from: src/widgets/tag/tag.widget.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __extends } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { getData } from '../../utils';
import { ControlUIWidget } from '../../widget';
var TagWidget = /** @class */ (function (_super) {
    __extends(TagWidget, _super);
    function TagWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    TagWidget.prototype.reset = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        getData(this.schema, this.ui, value).subscribe((/**
         * @param {?} list
         * @return {?}
         */
        function (list) {
            _this.data = list;
            _this.detectChanges();
        }));
    };
    /**
     * @param {?} item
     * @return {?}
     */
    TagWidget.prototype.onChange = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        item.checked = !item.checked;
        this.updateValue();
        if (this.ui.checkedChange) {
            this.ui.checkedChange(item.checked);
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    TagWidget.prototype._close = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (this.ui.onClose)
            this.ui.onClose(e);
    };
    /**
     * @private
     * @return {?}
     */
    TagWidget.prototype.updateValue = /**
     * @private
     * @return {?}
     */
    function () {
        this.formProperty.setValue(this.data.filter((/**
         * @param {?} w
         * @return {?}
         */
        function (w) { return w.checked; })).map((/**
         * @param {?} i
         * @return {?}
         */
        function (i) { return i.value; })), false);
    };
    TagWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-tag',
                    template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-tag *ngFor=\"let i of data\" [nzMode]=\"ui.mode || 'checkable'\" [nzChecked]=\"i.checked\" (nzOnClose)=\"_close($event)\" (nzCheckedChange)=\"onChange(i)\">\n    {{i.label}}\n  </nz-tag>\n</sf-item-wrap>\n",
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    return TagWidget;
}(ControlUIWidget));
export { TagWidget };
if (false) {
    /** @type {?} */
    TagWidget.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3dpZGdldHMvdGFnL3RhZy53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUc3RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFHL0M7SUFNK0IsNkJBQWtDO0lBTmpFOztJQWtDQSxDQUFDOzs7OztJQXpCQyx5QkFBSzs7OztJQUFMLFVBQU0sS0FBYztRQUFwQixpQkFLQztRQUpDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsSUFBSTtZQUNqRCxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELDRCQUFROzs7O0lBQVIsVUFBUyxJQUFrQjtRQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM3QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRTtZQUN6QixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDckM7SUFDSCxDQUFDOzs7OztJQUVELDBCQUFNOzs7O0lBQU4sVUFBTyxDQUFhO1FBQ2xCLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPO1lBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7Ozs7SUFFTywrQkFBVzs7OztJQUFuQjtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU07Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxPQUFPLEVBQVQsQ0FBUyxFQUFDLENBQUMsR0FBRzs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEtBQUssRUFBUCxDQUFPLEVBQUMsRUFDbEQsS0FBSyxDQUNOLENBQUM7SUFDSixDQUFDOztnQkFqQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxRQUFRO29CQUNsQixvV0FBZ0M7b0JBQ2hDLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUN0Qzs7SUE2QkQsZ0JBQUM7Q0FBQSxBQWxDRCxDQU0rQixlQUFlLEdBNEI3QztTQTVCWSxTQUFTOzs7SUFDcEIseUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU0ZWYWx1ZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBTRlNjaGVtYUVudW0gfSBmcm9tICcuLi8uLi9zY2hlbWEnO1xuaW1wb3J0IHsgZ2V0RGF0YSB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IENvbnRyb2xVSVdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5pbXBvcnQgeyBTRlRhZ1dpZGdldFNjaGVtYSB9IGZyb20gJy4vc2NoZW1hJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtdGFnJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhZy53aWRnZXQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBUYWdXaWRnZXQgZXh0ZW5kcyBDb250cm9sVUlXaWRnZXQ8U0ZUYWdXaWRnZXRTY2hlbWE+IHtcbiAgZGF0YTogU0ZTY2hlbWFFbnVtW107XG5cbiAgcmVzZXQodmFsdWU6IFNGVmFsdWUpIHtcbiAgICBnZXREYXRhKHRoaXMuc2NoZW1hLCB0aGlzLnVpLCB2YWx1ZSkuc3Vic2NyaWJlKGxpc3QgPT4ge1xuICAgICAgdGhpcy5kYXRhID0gbGlzdDtcbiAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICB9XG5cbiAgb25DaGFuZ2UoaXRlbTogU0ZTY2hlbWFFbnVtKSB7XG4gICAgaXRlbS5jaGVja2VkID0gIWl0ZW0uY2hlY2tlZDtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlKCk7XG4gICAgaWYgKHRoaXMudWkuY2hlY2tlZENoYW5nZSkge1xuICAgICAgdGhpcy51aS5jaGVja2VkQ2hhbmdlKGl0ZW0uY2hlY2tlZCk7XG4gICAgfVxuICB9XG5cbiAgX2Nsb3NlKGU6IE1vdXNlRXZlbnQpIHtcbiAgICBpZiAodGhpcy51aS5vbkNsb3NlKSB0aGlzLnVpLm9uQ2xvc2UoZSk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVZhbHVlKCkge1xuICAgIHRoaXMuZm9ybVByb3BlcnR5LnNldFZhbHVlKFxuICAgICAgdGhpcy5kYXRhLmZpbHRlcih3ID0+IHcuY2hlY2tlZCkubWFwKGkgPT4gaS52YWx1ZSksXG4gICAgICBmYWxzZSxcbiAgICApO1xuICB9XG59XG4iXX0=