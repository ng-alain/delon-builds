/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { of } from 'rxjs';
import { debounceTime, flatMap, map, startWith } from 'rxjs/operators';
import { getCopyEnum, getEnum, toBool } from '../../utils';
import { ControlWidget } from '../../widget';
var AutoCompleteWidget = /** @class */ (function (_super) {
    tslib_1.__extends(AutoCompleteWidget, _super);
    function AutoCompleteWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.i = {};
        _this.fixData = [];
        _this.typing = '';
        _this.isAsync = false;
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
        this.i = {
            backfill: toBool(this.ui.backfill, false),
            defaultActiveFirstOption: toBool(this.ui.defaultActiveFirstOption, true),
            width: this.ui.width || undefined,
        };
        this.filterOption = this.ui.filterOption == null ? true : this.ui.filterOption;
        if (typeof this.filterOption === 'boolean') {
            this.filterOption = (/**
             * @param {?} input
             * @param {?} option
             * @return {?}
             */
            function (input, option) {
                return option.label.toLowerCase().indexOf((input || '').toLowerCase()) > -1;
            });
        }
        this.isAsync = !!this.ui.asyncData;
        /** @type {?} */
        var orgTime = +(this.ui.debounceTime || 0);
        /** @type {?} */
        var time = Math.max(0, this.isAsync ? Math.max(50, orgTime) : orgTime);
        this.list = this.ngModel.valueChanges.pipe(debounceTime(time), startWith(''), flatMap((/**
         * @param {?} input
         * @return {?}
         */
        function (input) { return (_this.isAsync ? _this.ui.asyncData(input) : _this.filterData(input)); })), map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return getEnum(res, null, _this.schema.readOnly); })));
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
                this.fixData = getCopyEnum(this.schema.enum || this.formProperty.options.uiEmailSuffixes, null, this.schema.readOnly);
                break;
            default:
                this.fixData = getCopyEnum(this.schema.enum, this.formProperty.formData, this.schema.readOnly);
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
                    template: "<sf-item-wrap [id]=\"id\"\n              [schema]=\"schema\"\n              [ui]=\"ui\"\n              [showError]=\"showError\"\n              [error]=\"error\"\n              [showTitle]=\"schema.title\">\n  <input nz-input\n         [nzAutocomplete]=\"auto\"\n         [attr.id]=\"id\"\n         [disabled]=\"disabled\"\n         [attr.disabled]=\"disabled\"\n         [nzSize]=\"ui.size\"\n         [(ngModel)]=\"typing\"\n         [attr.maxLength]=\"schema.maxLength || null\"\n         [attr.placeholder]=\"ui.placeholder\"\n         autocomplete=\"off\">\n  <nz-autocomplete #auto\n                   [nzBackfill]=\"i.backfill\"\n                   [nzDefaultActiveFirstOption]=\"i.defaultActiveFirstOption\"\n                   [nzWidth]=\"i.width\"\n                   (selectionChange)=\"updateValue($event)\">\n    <nz-auto-option *ngFor=\"let i of list | async\"\n                    [nzValue]=\"i.value\"\n                    [nzLabel]=\"i.label\">\n      {{i.label}}\n    </nz-auto-option>\n  </nz-autocomplete>\n</sf-item-wrap>\n"
                }] }
    ];
    AutoCompleteWidget.propDecorators = {
        ngModel: [{ type: ViewChild, args: [NgModel,] }]
    };
    return AutoCompleteWidget;
}(ControlWidget));
export { AutoCompleteWidget };
if (false) {
    /** @type {?} */
    AutoCompleteWidget.prototype.i;
    /** @type {?} */
    AutoCompleteWidget.prototype.fixData;
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3dpZGdldHMvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpDLE9BQU8sRUFBRSxFQUFFLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3ZFLE9BQU8sRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMzRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRTdDO0lBSXdDLDhDQUFhO0lBSnJEO1FBQUEscUVBMEVDO1FBckVDLE9BQUMsR0FBUSxFQUFFLENBQUM7UUFDWixhQUFPLEdBQW1CLEVBQUUsQ0FBQztRQUU3QixZQUFNLEdBQVcsRUFBRSxDQUFDO1FBR1osYUFBTyxHQUFHLEtBQUssQ0FBQzs7SUErRDFCLENBQUM7Ozs7O0lBN0RDLHdDQUFXOzs7O0lBQVgsVUFBWSxJQUFtQztRQUM3QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7OztJQUVELDRDQUFlOzs7SUFBZjtRQUFBLGlCQXVCQztRQXRCQyxJQUFJLENBQUMsQ0FBQyxHQUFHO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUM7WUFD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LE9BQU87Z0JBQ1YsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3BDO2dCQUNFLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTTs7OztnQkFBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxFQUFoQyxDQUFnQyxFQUFDLENBQUMsQ0FBQztTQUM5RTtJQUNILENBQUM7Ozs7OztJQUVPLDJDQUFjOzs7OztJQUF0QixVQUF1QixLQUFhO1FBQ2xDLE9BQU8sRUFBRSxDQUNQLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFBLE1BQU0sSUFBSSxPQUFHLEtBQUssU0FBSSxNQUFNLENBQUMsS0FBTyxFQUExQixDQUEwQixFQUFDLENBQzVGLENBQUM7SUFDSixDQUFDOztnQkF6RUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLGdpQ0FBeUM7aUJBQzFDOzs7MEJBTUUsU0FBUyxTQUFDLE9BQU87O0lBaUVwQix5QkFBQztDQUFBLEFBMUVELENBSXdDLGFBQWEsR0FzRXBEO1NBdEVZLGtCQUFrQjs7O0lBQzdCLCtCQUFZOztJQUNaLHFDQUE2Qjs7SUFDN0Isa0NBQWlDOztJQUNqQyxvQ0FBb0I7Ozs7O0lBQ3BCLHFDQUE2Qzs7Ozs7SUFDN0MsMENBQXVFOzs7OztJQUN2RSxxQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdNb2RlbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE56QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XG5pbXBvcnQgeyBvZiwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBmbGF0TWFwLCBtYXAsIHN0YXJ0V2l0aCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFNGVmFsdWUgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgU0ZTY2hlbWFFbnVtIH0gZnJvbSAnLi4vLi4vc2NoZW1hJztcbmltcG9ydCB7IGdldENvcHlFbnVtLCBnZXRFbnVtLCB0b0Jvb2wgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtYXV0b2NvbXBsZXRlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2F1dG9jb21wbGV0ZS53aWRnZXQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEF1dG9Db21wbGV0ZVdpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgaTogYW55ID0ge307XG4gIGZpeERhdGE6IFNGU2NoZW1hRW51bVtdID0gW107XG4gIGxpc3Q6IE9ic2VydmFibGU8U0ZTY2hlbWFFbnVtW10+O1xuICB0eXBpbmc6IHN0cmluZyA9ICcnO1xuICBAVmlld0NoaWxkKE5nTW9kZWwpIHByaXZhdGUgbmdNb2RlbDogTmdNb2RlbDtcbiAgcHJpdmF0ZSBmaWx0ZXJPcHRpb246IChpbnB1dDogc3RyaW5nLCBvcHRpb246IFNGU2NoZW1hRW51bSkgPT4gYm9vbGVhbjtcbiAgcHJpdmF0ZSBpc0FzeW5jID0gZmFsc2U7XG5cbiAgdXBkYXRlVmFsdWUoaXRlbTogTnpBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQpIHtcbiAgICB0aGlzLnR5cGluZyA9IGl0ZW0ubnpMYWJlbDtcbiAgICB0aGlzLnNldFZhbHVlKGl0ZW0ubnpWYWx1ZSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pID0ge1xuICAgICAgYmFja2ZpbGw6IHRvQm9vbCh0aGlzLnVpLmJhY2tmaWxsLCBmYWxzZSksXG4gICAgICBkZWZhdWx0QWN0aXZlRmlyc3RPcHRpb246IHRvQm9vbCh0aGlzLnVpLmRlZmF1bHRBY3RpdmVGaXJzdE9wdGlvbiwgdHJ1ZSksXG4gICAgICB3aWR0aDogdGhpcy51aS53aWR0aCB8fCB1bmRlZmluZWQsXG4gICAgfTtcblxuICAgIHRoaXMuZmlsdGVyT3B0aW9uID0gdGhpcy51aS5maWx0ZXJPcHRpb24gPT0gbnVsbCA/IHRydWUgOiB0aGlzLnVpLmZpbHRlck9wdGlvbjtcbiAgICBpZiAodHlwZW9mIHRoaXMuZmlsdGVyT3B0aW9uID09PSAnYm9vbGVhbicpIHtcbiAgICAgIHRoaXMuZmlsdGVyT3B0aW9uID0gKGlucHV0OiBzdHJpbmcsIG9wdGlvbjogU0ZTY2hlbWFFbnVtKSA9PlxuICAgICAgICBvcHRpb24ubGFiZWwudG9Mb3dlckNhc2UoKS5pbmRleE9mKChpbnB1dCB8fCAnJykudG9Mb3dlckNhc2UoKSkgPiAtMTtcbiAgICB9XG5cbiAgICB0aGlzLmlzQXN5bmMgPSAhIXRoaXMudWkuYXN5bmNEYXRhO1xuICAgIGNvbnN0IG9yZ1RpbWUgPSArKHRoaXMudWkuZGVib3VuY2VUaW1lIHx8IDApO1xuICAgIGNvbnN0IHRpbWUgPSBNYXRoLm1heCgwLCB0aGlzLmlzQXN5bmMgPyBNYXRoLm1heCg1MCwgb3JnVGltZSkgOiBvcmdUaW1lKTtcblxuICAgIHRoaXMubGlzdCA9IHRoaXMubmdNb2RlbC52YWx1ZUNoYW5nZXMucGlwZShcbiAgICAgIGRlYm91bmNlVGltZSh0aW1lKSxcbiAgICAgIHN0YXJ0V2l0aCgnJyksXG4gICAgICBmbGF0TWFwKGlucHV0ID0+ICh0aGlzLmlzQXN5bmMgPyB0aGlzLnVpLmFzeW5jRGF0YShpbnB1dCkgOiB0aGlzLmZpbHRlckRhdGEoaW5wdXQpKSksXG4gICAgICBtYXAocmVzID0+IGdldEVudW0ocmVzLCBudWxsLCB0aGlzLnNjaGVtYS5yZWFkT25seSkpLFxuICAgICk7XG4gIH1cblxuICByZXNldCh2YWx1ZTogU0ZWYWx1ZSkge1xuICAgIHRoaXMudHlwaW5nID0gdGhpcy52YWx1ZTtcbiAgICBpZiAodGhpcy5pc0FzeW5jKSByZXR1cm47XG4gICAgc3dpdGNoICh0aGlzLnVpLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2VtYWlsJzpcbiAgICAgICAgdGhpcy5maXhEYXRhID0gZ2V0Q29weUVudW0odGhpcy5zY2hlbWEuZW51bSB8fCB0aGlzLmZvcm1Qcm9wZXJ0eS5vcHRpb25zLnVpRW1haWxTdWZmaXhlcywgbnVsbCwgdGhpcy5zY2hlbWEucmVhZE9ubHkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuZml4RGF0YSA9IGdldENvcHlFbnVtKFxuICAgICAgICAgIHRoaXMuc2NoZW1hLmVudW0sXG4gICAgICAgICAgdGhpcy5mb3JtUHJvcGVydHkuZm9ybURhdGEsXG4gICAgICAgICAgdGhpcy5zY2hlbWEucmVhZE9ubHksXG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZmlsdGVyRGF0YShpbnB1dDogc3RyaW5nKSB7XG4gICAgc3dpdGNoICh0aGlzLnVpLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2VtYWlsJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkRW1haWxTdWZmaXgoaW5wdXQpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG9mKHRoaXMuZml4RGF0YS5maWx0ZXIob3B0aW9uID0+IHRoaXMuZmlsdGVyT3B0aW9uKGlucHV0LCBvcHRpb24pKSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhZGRFbWFpbFN1ZmZpeCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG9mKFxuICAgICAgIXZhbHVlIHx8IH52YWx1ZS5pbmRleE9mKCdAJykgPyBbXSA6IHRoaXMuZml4RGF0YS5tYXAoZG9tYWluID0+IGAke3ZhbHVlfUAke2RvbWFpbi5sYWJlbH1gKSxcbiAgICApO1xuICB9XG59XG4iXX0=