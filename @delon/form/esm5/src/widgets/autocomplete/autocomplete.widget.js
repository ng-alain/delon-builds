/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgModel } from '@angular/forms';
import { of } from 'rxjs';
import { debounceTime, flatMap, map, startWith } from 'rxjs/operators';
import { getCopyEnum, getEnum, toBool } from '../../utils';
import { ControlUIWidget } from '../../widget';
var AutoCompleteWidget = /** @class */ (function (_super) {
    tslib_1.__extends(AutoCompleteWidget, _super);
    function AutoCompleteWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.i = {};
        _this.typing = '';
        _this.isAsync = false;
        _this.fixData = [];
        return _this;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    AutoCompleteWidget.prototype.updateValue = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.typing = item.nzLabel;
        this.setValue(item.nzValue);
    };
    /**
     * @return {?}
     */
    AutoCompleteWidget.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var _a = this.ui, backfill = _a.backfill, defaultActiveFirstOption = _a.defaultActiveFirstOption, nzWidth = _a.nzWidth, filterOption = _a.filterOption, asyncData = _a.asyncData;
        this.i = {
            backfill: toBool(backfill, false),
            defaultActiveFirstOption: toBool(defaultActiveFirstOption, true),
            width: nzWidth || undefined,
        };
        /** @type {?} */
        var filterOptionValue = filterOption == null ? true : filterOption;
        if (typeof filterOptionValue === 'boolean') {
            filterOptionValue = (/**
             * @param {?} input
             * @param {?} option
             * @return {?}
             */
            function (input, option) { return option.label.toLowerCase().indexOf((input || '').toLowerCase()) > -1; });
        }
        this.filterOption = filterOptionValue;
        this.isAsync = !!asyncData;
        /** @type {?} */
        var orgTime = +(this.ui.debounceTime || 0);
        /** @type {?} */
        var time = Math.max(0, this.isAsync ? Math.max(50, orgTime) : orgTime);
        this.list = (/** @type {?} */ (this.ngModel.valueChanges)).pipe(debounceTime(time), startWith(''), flatMap((/**
         * @param {?} input
         * @return {?}
         */
        function (input) { return (_this.isAsync ? (/** @type {?} */ (asyncData))(input) : _this.filterData(input)); })), map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return getEnum(res, null, (/** @type {?} */ (_this.schema.readOnly))); })));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    AutoCompleteWidget.prototype.reset = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.typing = this.value;
        if (this.isAsync)
            return;
        switch (this.ui.type) {
            case 'email':
                this.fixData = getCopyEnum((/** @type {?} */ (this.schema.enum)) || this.formProperty.options.uiEmailSuffixes, null, (/** @type {?} */ (this.schema.readOnly)));
                break;
            default:
                this.fixData = getCopyEnum((/** @type {?} */ (this.schema.enum)), value, (/** @type {?} */ (this.schema.readOnly)));
                break;
        }
    };
    /**
     * @private
     * @param {?} input
     * @return {?}
     */
    AutoCompleteWidget.prototype.filterData = /**
     * @private
     * @param {?} input
     * @return {?}
     */
    function (input) {
        var _this = this;
        switch (this.ui.type) {
            case 'email':
                return this.addEmailSuffix(input);
            default:
                return of(this.fixData.filter((/**
                 * @param {?} option
                 * @return {?}
                 */
                function (option) { return _this.filterOption(input, option); })));
        }
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    AutoCompleteWidget.prototype.addEmailSuffix = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return of(!value || ~value.indexOf('@') ? [] : this.fixData.map((/**
         * @param {?} domain
         * @return {?}
         */
        function (domain) { return value + "@" + domain.label; })));
    };
    AutoCompleteWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-autocomplete',
                    template: "<sf-item-wrap [id]=\"id\"\n              [schema]=\"schema\"\n              [ui]=\"ui\"\n              [showError]=\"showError\"\n              [error]=\"error\"\n              [showTitle]=\"schema.title\">\n  <input nz-input\n         [nzAutocomplete]=\"auto\"\n         [attr.id]=\"id\"\n         [disabled]=\"disabled\"\n         [attr.disabled]=\"disabled\"\n         [nzSize]=\"ui.size\"\n         [(ngModel)]=\"typing\"\n         (ngModelChange)=\"setValue($event)\"\n         [attr.maxLength]=\"schema.maxLength || null\"\n         [attr.placeholder]=\"ui.placeholder\"\n         autocomplete=\"off\">\n  <nz-autocomplete #auto\n                   [nzBackfill]=\"i.backfill\"\n                   [nzDefaultActiveFirstOption]=\"i.defaultActiveFirstOption\"\n                   [nzWidth]=\"i.width\"\n                   (selectionChange)=\"updateValue($event)\">\n    <nz-auto-option *ngFor=\"let i of list | async\" [nzValue]=\"i.value\" [nzLabel]=\"i.label\">\n      {{i.label}}\n    </nz-auto-option>\n  </nz-autocomplete>\n</sf-item-wrap>\n",
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    AutoCompleteWidget.propDecorators = {
        ngModel: [{ type: ViewChild, args: [NgModel, { static: false },] }]
    };
    return AutoCompleteWidget;
}(ControlUIWidget));
export { AutoCompleteWidget };
if (false) {
    /** @type {?} */
    AutoCompleteWidget.prototype.i;
    /** @type {?} */
    AutoCompleteWidget.prototype.list;
    /** @type {?} */
    AutoCompleteWidget.prototype.typing;
    /**
     * @type {?}
     * @private
     */
    AutoCompleteWidget.prototype.ngModel;
    /**
     * @type {?}
     * @private
     */
    AutoCompleteWidget.prototype.filterOption;
    /**
     * @type {?}
     * @private
     */
    AutoCompleteWidget.prototype.isAsync;
    /**
     * @type {?}
     * @private
     */
    AutoCompleteWidget.prototype.fixData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3dpZGdldHMvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkYsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpDLE9BQU8sRUFBRSxFQUFFLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSXZFLE9BQU8sRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRy9DO0lBTXdDLDhDQUEyQztJQU5uRjtRQUFBLHFFQXVFQztRQWhFQyxPQUFDLEdBQVEsRUFBRSxDQUFDO1FBRVosWUFBTSxHQUFXLEVBQUUsQ0FBQztRQUdaLGFBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsYUFBTyxHQUFtQixFQUFFLENBQUM7O0lBMER2QyxDQUFDOzs7OztJQXhEQyx3Q0FBVzs7OztJQUFYLFVBQVksSUFBbUM7UUFDN0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7SUFFRCw0Q0FBZTs7O0lBQWY7UUFBQSxpQkF3QkM7UUF2Qk8sSUFBQSxZQUFrRixFQUFoRixzQkFBUSxFQUFFLHNEQUF3QixFQUFFLG9CQUFPLEVBQUUsOEJBQVksRUFBRSx3QkFBcUI7UUFDeEYs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WUFDcEIsS0FBSyxPQUFPO2dCQUNWLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNwQztnQkFDRSxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU07Ozs7Z0JBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsRUFBaEMsQ0FBZ0MsRUFBQyxDQUFDLENBQUM7U0FDOUU7SUFDSCxDQUFDOzs7Ozs7SUFFTywyQ0FBYzs7Ozs7SUFBdEIsVUFBdUIsS0FBYTtRQUNsQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQSxNQUFNLElBQUksT0FBRyxLQUFLLFNBQUksTUFBTSxDQUFDLEtBQU8sRUFBMUIsQ0FBMEIsRUFBQyxDQUFDLENBQUM7SUFDekcsQ0FBQzs7Z0JBdEVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixxaUNBQXlDO29CQUN6QyxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDdEM7OzswQkFLRSxTQUFTLFNBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7SUE2RHZDLHlCQUFDO0NBQUEsQUF2RUQsQ0FNd0MsZUFBZSxHQWlFdEQ7U0FqRVksa0JBQWtCOzs7SUFDN0IsK0JBQVk7O0lBQ1osa0NBQWlDOztJQUNqQyxvQ0FBb0I7Ozs7O0lBQ3BCLHFDQUFnRTs7Ozs7SUFDaEUsMENBQXVFOzs7OztJQUN2RSxxQ0FBd0I7Ozs7O0lBQ3hCLHFDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdNb2RlbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE56QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC9hdXRvLWNvbXBsZXRlJztcbmltcG9ydCB7IG9mLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGZsYXRNYXAsIG1hcCwgc3RhcnRXaXRoIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBTRlZhbHVlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IFNGU2NoZW1hRW51bSB9IGZyb20gJy4uLy4uL3NjaGVtYSc7XG5pbXBvcnQgeyBnZXRDb3B5RW51bSwgZ2V0RW51bSwgdG9Cb29sIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgQ29udHJvbFVJV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCB7IFNGQXV0b0NvbXBsZXRlV2lkZ2V0U2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1hdXRvY29tcGxldGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vYXV0b2NvbXBsZXRlLndpZGdldC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIEF1dG9Db21wbGV0ZVdpZGdldCBleHRlbmRzIENvbnRyb2xVSVdpZGdldDxTRkF1dG9Db21wbGV0ZVdpZGdldFNjaGVtYT4gaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgaTogYW55ID0ge307XG4gIGxpc3Q6IE9ic2VydmFibGU8U0ZTY2hlbWFFbnVtW10+O1xuICB0eXBpbmc6IHN0cmluZyA9ICcnO1xuICBAVmlld0NoaWxkKE5nTW9kZWwsIHsgc3RhdGljOiBmYWxzZSB9KSBwcml2YXRlIG5nTW9kZWw6IE5nTW9kZWw7XG4gIHByaXZhdGUgZmlsdGVyT3B0aW9uOiAoaW5wdXQ6IHN0cmluZywgb3B0aW9uOiBTRlNjaGVtYUVudW0pID0+IGJvb2xlYW47XG4gIHByaXZhdGUgaXNBc3luYyA9IGZhbHNlO1xuICBwcml2YXRlIGZpeERhdGE6IFNGU2NoZW1hRW51bVtdID0gW107XG5cbiAgdXBkYXRlVmFsdWUoaXRlbTogTnpBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQpIHtcbiAgICB0aGlzLnR5cGluZyA9IGl0ZW0ubnpMYWJlbDtcbiAgICB0aGlzLnNldFZhbHVlKGl0ZW0ubnpWYWx1ZSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgY29uc3QgeyBiYWNrZmlsbCwgZGVmYXVsdEFjdGl2ZUZpcnN0T3B0aW9uLCBueldpZHRoLCBmaWx0ZXJPcHRpb24sIGFzeW5jRGF0YSB9ID0gdGhpcy51aTtcbiAgICB0aGlzLmkgPSB7XG4gICAgICBiYWNrZmlsbDogdG9Cb29sKGJhY2tmaWxsLCBmYWxzZSksXG4gICAgICBkZWZhdWx0QWN0aXZlRmlyc3RPcHRpb246IHRvQm9vbChkZWZhdWx0QWN0aXZlRmlyc3RPcHRpb24sIHRydWUpLFxuICAgICAgd2lkdGg6IG56V2lkdGggfHwgdW5kZWZpbmVkLFxuICAgIH07XG5cbiAgICBsZXQgZmlsdGVyT3B0aW9uVmFsdWUgPSBmaWx0ZXJPcHRpb24gPT0gbnVsbCA/IHRydWUgOiBmaWx0ZXJPcHRpb247XG4gICAgaWYgKHR5cGVvZiBmaWx0ZXJPcHRpb25WYWx1ZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICBmaWx0ZXJPcHRpb25WYWx1ZSA9IChpbnB1dDogc3RyaW5nLCBvcHRpb246IFNGU2NoZW1hRW51bSkgPT4gb3B0aW9uLmxhYmVsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZigoaW5wdXQgfHwgJycpLnRvTG93ZXJDYXNlKCkpID4gLTE7XG4gICAgfVxuICAgIHRoaXMuZmlsdGVyT3B0aW9uID0gZmlsdGVyT3B0aW9uVmFsdWU7XG5cbiAgICB0aGlzLmlzQXN5bmMgPSAhIWFzeW5jRGF0YTtcbiAgICBjb25zdCBvcmdUaW1lID0gKyh0aGlzLnVpLmRlYm91bmNlVGltZSB8fCAwKTtcbiAgICBjb25zdCB0aW1lID0gTWF0aC5tYXgoMCwgdGhpcy5pc0FzeW5jID8gTWF0aC5tYXgoNTAsIG9yZ1RpbWUpIDogb3JnVGltZSk7XG5cbiAgICB0aGlzLmxpc3QgPSB0aGlzLm5nTW9kZWwudmFsdWVDaGFuZ2VzIS5waXBlKFxuICAgICAgZGVib3VuY2VUaW1lKHRpbWUpLFxuICAgICAgc3RhcnRXaXRoKCcnKSxcbiAgICAgIGZsYXRNYXAoaW5wdXQgPT4gKHRoaXMuaXNBc3luYyA/IGFzeW5jRGF0YSEoaW5wdXQpIDogdGhpcy5maWx0ZXJEYXRhKGlucHV0KSkpLFxuICAgICAgbWFwKHJlcyA9PiBnZXRFbnVtKHJlcywgbnVsbCwgdGhpcy5zY2hlbWEucmVhZE9ubHkhKSksXG4gICAgKTtcbiAgfVxuXG4gIHJlc2V0KHZhbHVlOiBTRlZhbHVlKSB7XG4gICAgdGhpcy50eXBpbmcgPSB0aGlzLnZhbHVlO1xuICAgIGlmICh0aGlzLmlzQXN5bmMpIHJldHVybjtcbiAgICBzd2l0Y2ggKHRoaXMudWkudHlwZSkge1xuICAgICAgY2FzZSAnZW1haWwnOlxuICAgICAgICB0aGlzLmZpeERhdGEgPSBnZXRDb3B5RW51bSh0aGlzLnNjaGVtYS5lbnVtISB8fCB0aGlzLmZvcm1Qcm9wZXJ0eS5vcHRpb25zLnVpRW1haWxTdWZmaXhlcywgbnVsbCwgdGhpcy5zY2hlbWEucmVhZE9ubHkhKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLmZpeERhdGEgPSBnZXRDb3B5RW51bSh0aGlzLnNjaGVtYS5lbnVtISwgdmFsdWUsIHRoaXMuc2NoZW1hLnJlYWRPbmx5ISk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZmlsdGVyRGF0YShpbnB1dDogc3RyaW5nKSB7XG4gICAgc3dpdGNoICh0aGlzLnVpLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2VtYWlsJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkRW1haWxTdWZmaXgoaW5wdXQpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG9mKHRoaXMuZml4RGF0YS5maWx0ZXIob3B0aW9uID0+IHRoaXMuZmlsdGVyT3B0aW9uKGlucHV0LCBvcHRpb24pKSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhZGRFbWFpbFN1ZmZpeCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG9mKCF2YWx1ZSB8fCB+dmFsdWUuaW5kZXhPZignQCcpID8gW10gOiB0aGlzLmZpeERhdGEubWFwKGRvbWFpbiA9PiBgJHt2YWx1ZX1AJHtkb21haW4ubGFiZWx9YCkpO1xuICB9XG59XG4iXX0=